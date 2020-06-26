if (typeof document === "undefined") {
    global.document = { querySelector: () => {}, addEventListener: () => {} }
    global.window = {}
}

const $ = require("elly")
    , vignereBabbage = require("vignere-babbage-cipher")


window.onload = function () {
    const $result = $("#result")
    const $key = $("#key")
    const $textInput = $("#text-input")

    const doOp = function () {
        const key = $key.value.trim()

        if (!key) {
            $result.textContent = "Please provide a key."
            return
        }

        const op = $("[name='operation']:checked").value
        $result.textContent = vignereBabbage[op]($textInput.value, key)
        if (op === "encrypt") {
            const up = $textInput.value.toUpperCase()
            if (vignereBabbage.decrypt($result.textContent, key) !== up) {
                $result.textContent = "ERROR: Failed to encrypt the text successfully. Keep writing or remove punctuation such as new lines."
            }
        }
    }

    $textInput.addEventListener("input", doOp)
    $key.addEventListener("input", doOp)
    $(".controls").addEventListener("change", doOp)
}


module.exports = function m () {}
