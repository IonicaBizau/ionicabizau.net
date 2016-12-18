"use strict";

const conf = require("bloggify-config");

module.exports = conf({
    title: "Ionică Bizău"
  , description: "Web Developer, <i class=\"fa fa-linux\"></i> *nix geek and <i class=\"fa fa-music\"></i> Musician"
  , domain: "https://ionicabizau.net"
  , theme: "bloggify-theme-light"
  , plugins: [
      //        "contact-form"
      //, "lightbox"
      //, "rss"
      //, "social"
      //, "resume"
      //, "emoji"
      //, "redirect"
    ]
  , config: {
        bloggifyRouter: {
            paths: {
                blog: "/"
        //      , home: null
            }
        }
    }
}, {
    theme: {
      social: {
         twitter: "IonicaBizau",
         youtube: "IonicaBizau",
         github: "IonicaBizau",
         bitbucket: "IonicaBizau"
      }
        //"analytics": {
        //"a"id": "UA-34774185-1",
        //"a"url": "ionicabizau.net"
        //}
    }
});
