"use strict";

module.exports = {
    "title": "Ionică Bizău"
  , "description": "<i class=\"fa fa-linux\"></i> Programmer, <i class=\"fa fa-music\"></i> Pianist, <i class=\"fa fa-heart\"></i> Jesus follower"
  , "domain": "https://ionicabizau.net"
  , "plugins": [
      "lightbox"
    , "social"
    , ["rss", { "description": "WEB Developer, *nix Geek and Musician" }]
    , ["redirect", {
        "/blog/26-uploading-videos-to-youtube-using-nodejs": "/blog/14-uploading-videos-to-youtube-using-nodejs"
      , "/blog/35-the-joy-of-being-a-mentor": "/blog/34-the-joy-of-being-a-mentor"
      }]
    , ["custom-assets", {
          "server": [
              "server/resume.js"
          ]
      }]
    , "markdown-highlight"
    , ["contact-form", {
         "sendgrid_key": process.env.SG_API_KEY,
         "contact": {
             "email": "contact@ionicabizau.net",
             "name": "Ionică Bizău"
         }
      }]
    ]
  , "adapter": ["bloggify-markdown-adapter", {
        "parse": {
            "converterOptions": {
                "strikethrough": true,
                "emoji": true
            }
        },
        "routes": {
          "articles": "/blog",
          "blog_url": "/"
        },
        "theme": ["theme-light", {
            "options": {
                "social": {
                    "twitter": "IonicaBizau",
                    "youtube": "IonicaBizau",
                    "github": "IonicaBizau",
                    "bitbucket": "IonicaBizau"
                },
                "ga": {
                    "id": process.env.GA_KEY,
                    "url": "ionicabizau.net"
                }
            }
        }]
    }]
  , "server": {
        "session": false,
        "transformers": true
    }
}
