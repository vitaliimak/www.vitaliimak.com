module.exports = {
  name: "Vitalii's Home",
  description: "Personal website",
  url: "https://www.vitaliimak.com",
  author: {
    name: "Vitalii Makarchenkov",
    email: "mail@vitaliimak.com",
    twitterHandle: "@fdsf"
  },
  currentYear: new Date().getFullYear(),
  defaultSocialImage: "",
  headerLinks: [
    {
      text: "Blog",
      url: "/blog",
      external: false
    },
    {
      text: "About",
      url: "/about",
      external: false
    }
  ],
  socialLinks: [
    {
      text: "Instagram",
      url: "https://instagram.com/",
      external: true
    },
    {
      text: "GitHub",
      url: "https://github.com/vitaliimak",
      external: true
    },
    {
      text: "Twitter",
      url: "https://twitter.com/",
      external: true
    }
  ],
  footerLinks: [
    {
      text: "RSS",
      url: "/feed.xml",
      external: true
    }
  ],
  showFooterAttribution: true
}
