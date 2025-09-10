/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.agapanthuslasmarias.com/', 
  generateRobotsTxt: true, 
  
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      }
    ],
    additionalSitemaps: [
    ],
  },

  additionalPaths: async (config) => [
  ],

  transform: async (config, path) => {
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}