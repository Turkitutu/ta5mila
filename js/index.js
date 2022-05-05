let questionSelected;

$(".faq .list-group-item").click(function (e) {
  const el = $(this).find("i");
  if (el.attr("class") === "bi bi-caret-down-fill") {
    el.addClass("bi-caret-right-fill").removeClass("bi-caret-down-fill");
    questionSelected = null;
  } else {
    if (questionSelected) {
      const collapse = document.getElementById(questionSelected);
      const btn = $("button[aria-controls=" + questionSelected + "] i");
      btn.addClass("bi-caret-right-fill").removeClass("bi-caret-down-fill");
      new bootstrap.Collapse(collapse, {
        hide: true,
      });
    }

    el.addClass("bi-caret-down-fill").removeClass("bi-caret-right-fill");

    questionSelected = $(this).attr("aria-controls");
  }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
