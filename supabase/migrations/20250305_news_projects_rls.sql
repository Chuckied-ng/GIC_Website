ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read access to news_articles" ON news_articles;
CREATE POLICY "Allow public read access to news_articles"
  ON news_articles FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Allow public insert to news_articles" ON news_articles;
CREATE POLICY "Allow public insert to news_articles"
  ON news_articles FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public update to news_articles" ON news_articles;
CREATE POLICY "Allow public update to news_articles"
  ON news_articles FOR UPDATE
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public delete from news_articles" ON news_articles;
CREATE POLICY "Allow public delete from news_articles"
  ON news_articles FOR DELETE
  USING (true);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read access to projects" ON projects;
CREATE POLICY "Allow public read access to projects"
  ON projects FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Allow public insert to projects" ON projects;
CREATE POLICY "Allow public insert to projects"
  ON projects FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public update to projects" ON projects;
CREATE POLICY "Allow public update to projects"
  ON projects FOR UPDATE
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public delete from projects" ON projects;
CREATE POLICY "Allow public delete from projects"
  ON projects FOR DELETE
  USING (true);
