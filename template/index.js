// dependencies
var fs = require("fs");

module.exports = {
    page: fs.readFileSync(__dirname + "/pages.html")
        .toString()
        .replace(
            "{{CSS_STYLE_URL}}"
          , SITE_CONFIG.paths.template + "/style.css"
        )
  , post: fs.readFileSync(__dirname + "/posts.html")
        .toString()
        .replace(
            "{{CSS_STYLE_URL}}"
          , SITE_CONFIG.paths.template + "/style.css"
        )
};
