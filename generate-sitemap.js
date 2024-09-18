// generate-sitemap.js

import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';

const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/the-founder', changefreq: 'monthly', priority: 0.8 },
  { url: '/elevating-your-business', changefreq: 'monthly', priority: 0.7 },
];

const generateSitemap = async () => {
  const sitemapStream = new SitemapStream({ hostname: 'https://www.findmycashflow.com' });

  routes.forEach(route => {
    sitemapStream.write(route);
  });

  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream);

  writeFileSync('./public/sitemap.xml', sitemap.toString());
  console.log('Sitemap generated successfully!');
};

generateSitemap().catch((err) => {
  console.error('Error generating sitemap', err);
});
