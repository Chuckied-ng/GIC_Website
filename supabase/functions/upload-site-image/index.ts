import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders, status: 200 });
  }

  try {
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || Deno.env.get("SUPABASE_SERVICE_KEY");
    const supabaseUrl = Deno.env.get("SUPABASE_URL");

    if (!supabaseUrl || !serviceKey) {
      return new Response(
        JSON.stringify({ error: "Supabase URL or service key not configured" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, serviceKey);

    // Ensure bucket exists
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets?.some((b) => b.name === "site-images");
    if (!bucketExists) {
      await supabase.storage.createBucket("site-images", { public: true });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;
    const imageKey = formData.get("key") as string;

    if (!file || !imageKey) {
      return new Response(
        JSON.stringify({ error: "Missing file or key" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    const ext = file.name.split(".").pop() || "jpg";
    const filePath = `${imageKey}-${Date.now()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("site-images")
      .upload(filePath, file, { upsert: true, contentType: file.type });

    if (uploadError) {
      return new Response(
        JSON.stringify({ error: uploadError.message }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
      );
    }

    const { data: publicData } = supabase.storage
      .from("site-images")
      .getPublicUrl(filePath);

    const publicUrl = publicData.publicUrl;

    // Upsert into site_images table
    const { error: dbError } = await supabase
      .from("site_images")
      .upsert({ key: imageKey, url: publicUrl, updated_at: new Date().toISOString() });

    if (dbError) {
      return new Response(
        JSON.stringify({ error: dbError.message }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ url: publicUrl }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: String(err) }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
