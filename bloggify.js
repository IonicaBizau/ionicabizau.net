"use strict";

const conf = require("bloggify-config");

module.exports = conf({
    title: "Ionică Bizău"
  , description: "Web Developer, <i class=\"fa fa-linux\"></i> *nix geek and <i class=\"fa fa-music\"></i> Musician"
  , domain: "https://ionicabizau.net"
  , theme: "bloggify-theme-light"
  , plugins: [
      "bloggify-emoji"
    , "bloggify-lightbox"
    , "bloggify-social"
    , "bloggify-rss"
    , "bloggify-redirect"
    , "bloggify-custom-assets"
    ]
  , config: {
        bloggifyRouter: {
            paths: {
                blog: "/"
              , articlePath: "/blog"
            }
        },
        bloggifyRedirect: {
           "/blog/26-uploading-videos-to-youtube-using-nodejs": "/blog/14-uploading-videos-to-youtube-using-nodejs",
           "/blog/34-the-joy-of-being-a-mentor": "/blog/35-the-joy-of-being-a-mentor"
        },
        bloggifyCustomAssets: {
           server: [
               "server/resume.js"
           ]
        },
        bloggifyContactForm: {
            api_key: process.env.SG_API_KEY,
            contact: {
                email: "contact@ionicabizau.net",
                name: "Ionică Bizău"
            }
        },
        bloggifyRss: {
            description: "WEB Developer, *nix Geek and Musician"
        }
    }
}, {
    theme: {
        social: {
            twitter: "IonicaBizau",
            youtube: "IonicaBizau",
            github: "IonicaBizau",
            bitbucket: "IonicaBizau"
        },
        ga: {
            id: "UA-34774185-1",
            url: "ionicabizau.net"
        }
    }
});
