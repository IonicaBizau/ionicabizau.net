// dependencies
var JxUtils = require ("jxutils")
  , Fs = require ("fs")
  ;

global.requireNoCache = function (path) {
    delete require.cache[require.resolve(path)];
    return require(path);
};

// site config
global.SITE_CONFIG = {
    title: "Ionică Bizău"
  , url: "http://ionicabizau.net"
  , blog: {
        url: "/blog"
      , posts: {
            limit: 7
        }
    }
  , cache: {
        initOnStart: true
      , ttl: 3 * 24 * 60 * 60 * 1000 * 0// 3 days
    }
  , session: {
        ttl: 10 * 24 * 60 * 60 * 1000 // 10 days
    }
  , paths: {
        roots: {
            pages: "/pages"
          , posts: "/posts"
        }
      , template: "/template"
      , ROOT: __dirname
    }
};

/**
 *  This is a recursive function that parses the paths saving them in
 *  "parsed" field. Then they can be accessed.
 *
 */
function parsePaths (objToIterate, parents) {

    for (var path in objToIterate) {
        var cPath = objToIterate[path];

        if (cPath.constructor.name === "Object") {
            parents = JSON.parse (JSON.stringify (parents));
            parents.push (path);
            parsePaths (cPath, parents);
        } else {
            try {
                var modulePath = SITE_CONFIG.paths.ROOT + cPath;
                SITE_CONFIG[parents.join(".") + "." + path] = requireNoCache (modulePath);
            } catch (e) {
                console.warn (e.toString());
            }
        }
    }
    SITE_CONFIG = JxUtils.unflattenObject (SITE_CONFIG);
}

// start parsing paths
parsePaths (SITE_CONFIG.paths, ["parsed"]);

// set global variable
SITE_CONFIG.parsePaths = function () {
    parsePaths (SITE_CONFIG.paths, ["parsed"]);
};

// exports the site config
module.exports = SITE_CONFIG;
