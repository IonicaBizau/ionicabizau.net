(function (window) {
    var formEl = document.getElementById("contact-form")
      , mbErrorEl = document.getElementById("mb-error")
      , mbSuccessEl = document.getElementById("mb-success")
      , formToSubmit = new XHRFormSubmitter({
            form: formEl
          , disableOnSubmit: true
        })
      ;

    formEl.addEventListener("submit", function (e) {
        try {
            mbErrorEl.style.display = "none";
            mbSuccessEl.style.display = "none";

            formToSubmit.submit(function (err, data) {

                var mb = null
                  , message = err || data
                  , invalidField = err && err.fields && err.fields[0]
                  , formElms = document.querySelectorAll("form [name]")
                  ;

                if (err) {
                    for (var i = 0; i < formElms.length; ++i) {
                        var cEl = formElms[i];
                        cEl.style.borderColor = "#2980b9";
                        if (invalidField === cEl.getAttribute("name")) {
                            cEl.style.borderColor = "#e74c3c";
                            cEl.focus();
                        }
                    }
                    mb = mbErrorEl;
                }
                else { mb = mbSuccessEl; }

                mb.innerHTML = message.message || message;
                mb.style.display = "block";
                mb.classList.remove("fadeInUp");
                mb.classList.add("fadeInUp");
                if (!err) {
                    document.querySelector("form").remove()
                }
            });
            e.preventDefault();
        } catch (e) {
            console.error(e.message);
        }
    });
})(window);
