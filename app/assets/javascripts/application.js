const Actions = require("bloggify/actions");
const $ = require("elly")

// Detect article language
const getUserLanguage = () => {
    let lang = (navigator.language || "en").split("-")[0]
    try {
        const customLang = localStorage.getItem("user_lang")
        if (customLang) {
            lang = customLang
        }
    } catch (e) {}

    if (BloggifyPage.query.lang) {
        try {
            localStorage.setItem("user_lang", BloggifyPage.query.lang)
            lang = BloggifyPage.query.lang
        } catch (e) {}
    }

    return lang
}

const flags = {
    en: "🇬🇧",
    ro: "🇷🇴"
}

window.checkLanguage = () => {
    if (!BloggifyPage.params.articleId) { return }

    const idToLoad = (BloggifyPage.available_languages || {})[getUserLanguage()]
    if (!idToLoad) { return }

    if (idToLoad !== BloggifyPage.params.articleId) {
        location.href = `/blog/${idToLoad}`
    }

    const $langs = $("<span>", { class: "available-languages" })
    Object.keys(BloggifyPage.available_languages).forEach(cLang => {
        const flag = flags[cLang]
        $langs.append($("<a>", {
            text: flag,
            href: "?lang=" + cLang,
            title: cLang
        }))
    })
    $(".top-header").append($langs)
}
