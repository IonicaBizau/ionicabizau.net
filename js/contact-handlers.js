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
                  ;

                if (err) { mb = mbErrorEl; }
                else { mb = mbSuccessEl; }

                try {
                    message = JSON.parse(message);
                } catch (ex) {}

                mb.innerHTML = message.message || message;
                mb.style.display = "block";
                mb.classList.remove("fadeInUp");
                mb.classList.add("fadeInUp");
            });
            e.preventDefault();
        } catch (e) {
            console.error(e.message);
        }
    });
})(window);
