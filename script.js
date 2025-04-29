$(document).ready(function () {

  (function ($) {
    $.fn.writeText = function (content) {
      var contentArray = content.split(""),
          current = 0,
          elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 80);
    };
  })(jQuery);

  $("#holder").writeText("Técnico Informático + Desarrollador Web Junior");

  new WOW().init();

  $('#fullpage').fullpage({
    scrollBar: true,
    responsiveWidth: 400,
    navigation: true,
    slidesNavigation: true,
    controlArrows: true,
    anchors: ["home", "about", "portfolio", "contact", "connect"],
    menu: "#myMenu",
    fitToSection: false,

    afterLoad: function (anchorLink, index) {
      if (index === 2) {
        $(".skillbar").each(function () {
          $(this).find(".skillbar-bar").css("width", "0%").animate({
            width: $(this).attr("data-percent")
          }, 2500);
        });
      }

      if (index === 1) {
        $(".header-links a").css("color", "white");
        $(".header-links").css("background", "transparent");
      } else {
        $(".header-links a").css("color", "black");
        $(".header-links").css("background", "white");
      }
    }
  });

  $("#moveDown").click(function () {
    $.fn.fullpage.moveSectionDown();
  });
});
