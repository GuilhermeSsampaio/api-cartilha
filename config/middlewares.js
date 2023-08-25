module.exports = [
  "strapi::errors",
  {
      name: "strapi::security",
      config: {
          contentSecurityPolicy: {
              useDefaults: true,
              directives: {
                'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
                  "frame-src": [
                      "'self'",
                      "youtube.com",
                      "www.youtube.com",
                      "vimeo.com",
                      "*.vimeo.com",
                      "facebook.com",
                      "www.facebook.com",
                  ],
                  "connect-src": ["'self'", "https:", "blob:", "*.strapi.io",'data:', 'res.cloudinary.com'],
                  "img-src": [
                      "'self'",
                      "data:",
                      "blob:",
                      "dl.airtable.com",
                      "strapi.io",
                      "s3.amazonaws.com",
                      "cdn.jsdelivr.net",
                      "res.cloudinary.com"
                  ],
                  "style-src": ["'self'", "'unsafe-inline'"],
                  "script-src": [
                      "'self'",
                      "cdn.jsdelivr.net",
                      "blob:",
                      "https:",
                  ],
                  "font-src": ["'self'"],
                  upgradeInsecureRequests: null,
              },
          },
      },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
