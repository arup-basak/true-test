import { GetServerSideProps } from 'next';

function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    
    
    <url>
      <loc>https://true-test.vercel.app/</loc>
      <lastmod>2023-06-23T06:42:51+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://true-test.vercel.app/cart</loc>
      <lastmod>2023-06-23T06:42:51+00:00</lastmod>
      <priority>0.30</priority>
    </url>
    <url>
      <loc>https://true-test.vercel.app/labs</loc>
      <lastmod>2023-06-23T06:42:51+00:00</lastmod>
      <priority>0.90</priority>
    </url>
    <url>
      <loc>https://true-test.vercel.app/about</loc>
      <lastmod>2023-06-23T06:42:51+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://true-test.vercel.app/report</loc>
      <lastmod>2023-06-23T06:42:51+00:00</lastmod>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>https://true-test.vercel.app/products</loc>
      <lastmod>2023-06-23T06:42:51+00:00</lastmod>
      <priority>0.30</priority>
    </url>
    
    
    </urlset>
 `;
}

function SiteMap() {
    return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const sitemap = generateSiteMap();

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default SiteMap;
