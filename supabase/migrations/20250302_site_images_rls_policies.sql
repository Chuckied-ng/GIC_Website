ALTER TABLE site_images ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read access to site_images" ON site_images;
CREATE POLICY "Allow public read access to site_images"
  ON site_images FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Allow public insert to site_images" ON site_images;
CREATE POLICY "Allow public insert to site_images"
  ON site_images FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public update to site_images" ON site_images;
CREATE POLICY "Allow public update to site_images"
  ON site_images FOR UPDATE
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public delete from site_images" ON site_images;
CREATE POLICY "Allow public delete from site_images"
  ON site_images FOR DELETE
  USING (true);
