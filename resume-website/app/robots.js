export default function robots() {
  const baseUrl = 'https://www.sauravx.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
      // Google bots
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      // Bing bots
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      // AI Crawlers and Assistants
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'Anthropic-AI',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'YouBot',
        allow: '/',
      },
      // Social Media crawlers
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}