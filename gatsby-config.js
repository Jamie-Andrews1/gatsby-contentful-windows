module.exports = {
  siteMetadata: {
    title: "Candles",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "CFPAT-doxdF5jhdcvoDDFx-Dtvo59EHmlCfrKXB42QQRK3eII",
        spaceId: "",
      },
    },
    "gatsby-plugin-sass",
  ],
};
