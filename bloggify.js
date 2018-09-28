"use strict";

module.exports = {
    "title": "Ionică Bizău"
  , "description": "Web Developer, <i class=\"fa fa-linux\"></i> *nix geek and <i class=\"fa fa-music\"></i> Musician"
  , "domain": "https://ionicabizau.net"
  , "plugins": [
      "emoji",
    , "lightbox"
    , "social"
    , ["rss", { "description": "WEB Developer, *nix Geek and Musician" }]
    , ["redirect", {
        "/blog/26-uploading-videos-to-youtube-using-nodejs": "/blog/14-uploading-videos-to-youtube-using-nodejs"
      , "/blog/34-the-joy-of-being-a-mentor": "/blog/35-the-joy-of-being-a-mentor"
      }]
    , ["custom-assets", {
          "server": [
              "server/resume.js"
          ]
      }]
    , "markdown-highlight"
    //, ["contact-form", {
    //     "api_key": process.env.SG_API_KEY,
    //     "contact": {
    //         "email": "contact@ionicabizau.net",
    //         "name": "Ionică Bizău"
    //     }
    //  }]
    ]
  , "adapter": ["bloggify-markdown-adapter", {
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
                    "id": "UA-34774185-1",
                    "url": "ionicabizau.net"
                }
            }
        }]
    }]
}
