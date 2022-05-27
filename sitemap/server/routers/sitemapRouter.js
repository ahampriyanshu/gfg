const express = require("express"),
  { SitemapStream, streamToPromise } = require('sitemap'),
  Project = require("../models/projectModel"),
  date = new Date().toISOString(),
  zlib = require("zlib"),
  router = express.Router();

let sitemap;

router.get('/', async function (req, res) {
  res.header('Content-Type', 'application/xml');
  res.header('Content-Encoding', 'gzip');

// if we have a cached entry send it
if (sitemap) return res.send(sitemap)

  try {
  
    // fetching project records and mapping it the desired URL pattern
     const data = await Project.find(),
     projects = data.map(({ title }) => `/project/${title}`),
     
     // Base url of our site
     smStream = new SitemapStream({ hostname: 'https://mydemosite.com/' }),
     pipeline = smStream.pipe(zlib.createGzip());
     
     // Write project URL to the stream
     projects.forEach(
     item => smStream.write({ url: item, lastmod: date, changefreq: 'daily', priority: 0.7 
     }));
     
     // Manually add all the other important URLs
     smStream.write({ url: '/about', lastmod: date, changefreq: 'monthly', priority: 0.9 })
     smStream.write({ url: '/contact', lastmod: date, changefreq: 'monthly', priority: 0.9 })
     smStream.write({ url: '/services', lastmod: date, changefreq: 'monthly', priority: 0.9 })
     
    // cache the response
     streamToPromise(pipeline).then(sm => sitemap = sm); 
     smStream.end()
     
     // stream write the response
     pipeline.pipe(res).on('error', e => { throw e });
   } catch (err) {
     console.error(err)
     res.status(500).end()
   }
});

module.exports = router;
