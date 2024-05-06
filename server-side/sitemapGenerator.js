const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const fs = require("fs"); // Require the file system module
const path = require("path");

// Function now accepts routes as an argument
function generateSitemap(routes) {
  const stream = new SitemapStream({ hostname: "http://localhost:5002" });
  const xmlStream = new Readable().wrap(stream);

  routes.forEach((route) => {
    stream.write({ url: route, changefreq: "daily", priority: 0.5 });
  });

  stream.end();

  return streamToPromise(xmlStream).then((data) => {
    const sitemap = data.toString();
    try {
      fs.writeFileSync(path.join(__dirname, "sitemap.xml"), sitemap);
      console.log("Sitemap successfully saved.");
    } catch (error) {
      console.error("Failed to save sitemap:", error);
    }
    return sitemap;
  });
}

module.exports = generateSitemap;

// const { SitemapStream, streamToPromise } = require("sitemap");
// const { Readable } = require("stream");
// const fs = require("fs"); // Require the file system module
// const path = require("path");

// function generateSitemap() {
//   const links = [
//     { url: "/", changefreq: "daily", priority: 0.9 },
//     { url: "/add-post", changefreq: "daily", priority: 0.8 },
//     { url: "/posts", changefreq: "daily", priority: 0.7 },
//     { url: "/add-api", changefreq: "daily", priority: 0.6 },
//     { url: "/about", changefreq: "daily", priority: 0.5 },
//     { url: "/contact", changefreq: "daily", priority: 0.7 },
//   ];

//   const stream = new SitemapStream({ hostname: "http://localhost:5002" });
//   const xmlStream = new Readable().wrap(stream);

//   links.forEach((link) => stream.write(link));
//   stream.end();

//   return streamToPromise(xmlStream).then((data) => {
//     const sitemap = data.toString();
//     try {
//       fs.writeFileSync(path.join(__dirname, "sitemap.xml"), sitemap); // Ensure the path is correct
//       console.log("Sitemap successfully saved.");
//     } catch (error) {
//       console.error("Failed to save sitemap:", error);
//     }
//     return sitemap;
//   });
// }

// module.exports = generateSitemap;
