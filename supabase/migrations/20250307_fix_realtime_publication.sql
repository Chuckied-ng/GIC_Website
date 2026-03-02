-- Ensure site_images table is included in supabase_realtime publication
-- This is required for real-time image updates to work in Vercel

-- Re-enable replica identity for change tracking
ALTER TABLE site_images REPLICA IDENTITY FULL;

-- Add to realtime publication if not already included
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime'
    AND tablename = 'site_images'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE site_images;
  END IF;
END $$;
