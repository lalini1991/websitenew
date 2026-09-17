/* CMDR site behaviour: mobile nav, accordions. Progressive enhancement —
   every panel is visible and every link works with JS disabled. */
(function () {
  "use strict";

  // ------------------------------------------------------------- mobile nav
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    nav.setAttribute("data-open", "false");
    toggle.setAttribute("aria-expanded", "false");
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });
  }

  // -------------------------------------------------------------- accordion
  var triggers = document.querySelectorAll(".accordion__trigger");

  Array.prototype.forEach.call(triggers, function (trigger, i) {
    var panel = document.getElementById(trigger.getAttribute("aria-controls"));
    if (!panel) return;

    // First item of each accordion opens by default; the rest collapse.
    var group = trigger.closest(".accordion");
    var isFirst = group && group.querySelector(".accordion__trigger") === trigger;
    setExpanded(trigger, panel, isFirst);

    trigger.addEventListener("click", function () {
      setExpanded(trigger, panel, trigger.getAttribute("aria-expanded") !== "true");
    });
  });

  function setExpanded(trigger, panel, expanded) {
    trigger.setAttribute("aria-expanded", String(expanded));
    panel.hidden = !expanded;
  }
})();
