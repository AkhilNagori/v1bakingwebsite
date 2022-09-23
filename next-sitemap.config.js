const { SITEMAP_URL } = process.env;
if (!SITEMAP_URL) {
    throw new Error('Invalid/Missing environment variable: "SITEMAP_URL"')
}

module.exports = {
    siteUrl: SITEMAP_URL,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {userAgent: "*", disallow: ["/agb", "/datenschutz", "/impressum"] },
            {userAgent: "*", allow: "/"}
        ],
        additionalSitemaps: [
            `${SITEMAP_URL}sitemap.xml`,
            `${SITEMAP_URL}server-sitemap.xml`
        ]
    },
    exclude: ["/agb", "/datenschutz", "/impressum", "/server-sitemap.xml"]
}