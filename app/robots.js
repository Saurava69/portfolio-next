export default function robots() {
  const baseUrl = 'https://www.sauravx.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
