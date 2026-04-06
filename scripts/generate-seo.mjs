import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://targethotelmarketing.com';
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const CONTENT_DIR = path.join(process.cwd(), 'content/blog');

/**
 * --- SEO DATA DEFINITION ---
 * List of static routes to include in the sitemap.
 */
const staticPages = [
  '',
  'about',
  'services',
  'testimonials',
  'contact',
  'blog',
];

async function generateSitemap() {
  console.log('Generating sitemap.xml...');

  // Get all blog slugs
  const blogFiles = fs.readdirSync(CONTENT_DIR);
  const blogSlugs = blogFiles
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  // Helper to add a URL entry with bilingual alternates
  const addUrl = (relativePath, priority = '0.5', changefreq = 'monthly') => {
    const cleanPath = relativePath === '' ? '/' : `/${relativePath}/`;
    const enUrl = `${SITE_URL}${cleanPath}`;
    const arUrl = `${SITE_URL}/ar${cleanPath === '/' ? '/' : cleanPath}`;

    // English entry
    xml += `  <url>
    <loc>${enUrl}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}" />
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;

    // Arabic entry
    xml += `  <url>
    <loc>${arUrl}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}" />
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
  };

  // Add static pages
  staticPages.forEach(page => {
    const priority = page === '' ? '1.0' : (page === 'blog' ? '0.9' : '0.8');
    const freq = (page === '' || page === 'blog') ? 'weekly' : 'monthly';
    addUrl(page, priority, freq);
  });

  // Add blog posts
  blogSlugs.forEach(slug => {
    addUrl(`blog/${slug}`, '0.7', 'weekly');
  });

  xml += `</urlset>`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml);
  console.log('Successfully generated public/sitemap.xml');
}

async function generateRobots() {
  console.log('Generating robots.txt...');
  
  const robots = `# ROBOTS CONFIG
# Domain: ${SITE_URL}

User-agent: *
Allow: /

# Priority limits for Bingbot
User-agent: Bingbot
Crawl-delay: 1
Allow: /

# Sitemap location
Sitemap: ${SITE_URL}/sitemap.xml

# Disallow system files
Disallow: /_next/
Disallow: /static/
Disallow: /api/
`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robots);
  console.log('Successfully generated public/robots.txt');
}

// Run the generators
generateSitemap();
generateRobots();

async function pingIndexNow() {
  console.log('Configuring IndexNow...');
  // Ensure the IndexNow key is exactly 32 hex characters to avoid strict validation errors
  const key = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6';
  fs.writeFileSync(path.join(PUBLIC_DIR, `${key}.txt`), key);

  try {
    const res = await fetch(`https://api.indexnow.org/indexnow?url=${SITE_URL}&key=${key}`);
    if (res.ok) {
      console.log('Successfully pinged IndexNow API.');
    } else {
      console.log('IndexNow API responded with:', res.status);
    }
  } catch (e) {
    console.error('Failed to ping IndexNow API:', e);
  }
}

pingIndexNow();
