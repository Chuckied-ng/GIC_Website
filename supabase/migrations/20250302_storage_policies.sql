INSERT INTO storage.buckets (id, name, public)
VALUES ('site-images', 'site-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

DROP POLICY IF EXISTS "Allow public read access to site-images" ON storage.objects;
CREATE POLICY "Allow public read access to site-images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'site-images');

DROP POLICY IF EXISTS "Allow authenticated uploads to site-images" ON storage.objects;
CREATE POLICY "Allow authenticated uploads to site-images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'site-images');

DROP POLICY IF EXISTS "Allow authenticated updates to site-images" ON storage.objects;
CREATE POLICY "Allow authenticated updates to site-images"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'site-images')
  WITH CHECK (bucket_id = 'site-images');

DROP POLICY IF EXISTS "Allow authenticated deletes from site-images" ON storage.objects;
CREATE POLICY "Allow authenticated deletes from site-images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'site-images');
