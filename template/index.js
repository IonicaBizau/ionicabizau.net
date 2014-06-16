// dependencies
var fs = require("fs");

module.exports = {
    pages: fs.readFileSync(__dirname + "/pages.html")
        .toString()
        .replace(
            "{{CSS_STYLE_URL}}"
          , Config.gitSite.paths.template + "/style.css"
        )
  , posts: fs.readFileSync(__dirname + "/posts.html")
        .toString()
        .replace(
            "{{CSS_STYLE_URL}}"
          , Config.gitSite.paths.template + "/style.css"
        )
  , blocks: {
        post: fs.readFileSync(__dirname + "/blocks/post.html").toString()
      , page: fs.readFileSync(__dirname + "/blocks/page.html").toString()
      , postContentEnd: fs.readFileSync(__dirname + "/blocks/post-content-end.html").toString()
    }
};
