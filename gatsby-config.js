/* eslint-disable */

module.exports = {
  siteMetadata: {
    title: `Dr Elizabeth Hawkes`,
    description: `Dr Elizabeth Hawkes`,
    address: `120 Sloane St, Chelsea, London SW1X 9BW`,
    email: `secretary@drelizabethhawkes.com`,
    telephone: `07702767200`,
    author: `@DrHawkes`,
    domain: `https://drelizabethhawkes.com`,
    siteUrl: `https://drelizabethhawkes.com/`,
    navLinks: [
      {
        name: `About`,
        page: `/about`,
        subLinks: [],
        id: 1,
      },
      {
        name: `Oculoplastic Services`,
        nameShort: "Oculoplastics",
        page: `/oculoplastic-services`,
        subLinks: [
          // Dummy data for schema
          {
            name: "",
            page: "",
            id: "",
          },
        ],
        products: "oculoplasticServices",
        id: 2,
      },
      {
        name: `Aesthetic Services`,
        nameShort: "Aesthetics",
        page: `/aesthetic-services`,
        subLinks: [],
        products: "aestheticServices",
        id: 3,
      },
      {
        name: `Eye Conditions`,
        page: `/eye-conditions`,
        subLinks: [],
        products: "conditions",
        id: 4,
      },
      {
        name: `In The Press`,
        nameShort: "Press",
        page: `/in-the-press`,
        id: 5,
      },
      {
        name: `Blog`,
        page: `/blog`,
        id: 6,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Dr Elizabeth Hawkes",
        short_name: "Dr Elizabeth Hawkes",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        icon: "src/assets/images/favicon.png",
        icon_options: {
          purpose: `maskable`,
        },
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-css-customs`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/blogs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `oculoplasticServices`,
        path: `${__dirname}/oculoplastic-services/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `aestheticServices`,
        path: `${__dirname}/aesthetic-services/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `conditions`,
        path: `${__dirname}/conditions/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `press`,
        path: `${__dirname}/press/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-reading-time`],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-CL9482SGHD", // Google Analytics / GA
          "AW-845954688", // Google Ads / Adwords / AW
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-offline`,
  ],
}
