"use strict";

const mdify = require("mdify")
    , readFile = require("read-utf8")
    , fs = require("fs")
    , rJson = require("r-json")
    ;

const articles = rJson("content/articles/index.json");
articles.forEach(c => {
    let path = "content/articles/" +  c.id + ".md";
    let content = readFile(path);
    if (content.startsWith("---")) {
        return
    }
    mdify.writeFile(path, {
        title: c.title,
        date: c.date,
        author: c.by,
        tags: c.tags
    }, content);
});
const pages = rJson("content/pages/index.json");
pages.forEach(c => {
    let path = "content/pages/" +  c.slug + ".md";
    let content = readFile(path);
    if (content.startsWith("---")) {
        return
    }
    mdify.writeFile(path, {
        title: c.title,
        order: c.order
    }, content);
});
