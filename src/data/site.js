module.exports = {
  name: "Vitalii's Personal Website",
  description: "Personal website",
  language: "en",
  url: "https://www.vitaliimak.com",
  author: {
    name: "Vitalii Makarchenkov",
    email: "mail@vitaliimak.com",
    twitterHandle: "@fdsf"
  },
  currentYear: new Date().getFullYear(),
  headerLinks: [
    {
      text: "About",
      url: "/about",
      external: false
    },
    {
      text: "Links",
      url: "/links",
      external: false
    },
    {
      text: "RSS",
      url: "/feed.xml",
      external: true
    },
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
  links: [
    {
      text: "Resume",
      url: "/cv.pdf",
      external: false,
      date: "2020-11-21",
    },
  ],
  showFooterAttribution: true
}
