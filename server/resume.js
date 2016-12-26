"use strict";

const ipInfo = require("ipinfo")
    , Daty = require("daty")
    , fs = require("fs")
    ;

module.exports = bloggify => {
    const logger = fs.createWriteStream("logs/resume.txt", { flags: "a" })

    let check = lien =>  {
        let ip = lien.req.headers["x-forwarded-for"]
               || lien.req.connection.remoteAddress
               || lien.req.socket.remoteAddress
               || lien.req.connection.socket.remoteAddress
          , line = new Daty().format("'MMMM Do YYYY, h:mm:ss a") + " " + lien.req.url + " " + ip + " "
          ;

        ipInfo(ip, (err, data) => {
            if (err) {
                line += "Failed to get ip info."
            } else {
                line += JSON.stringify(data);
            }
            logger.write(line + "\n");
        });
    };

    bloggify.server.addPage("/resume", lien => {
        check(lien);
        lien.redirect("http://ionicabizau.github.io/resume/");
    });
};
