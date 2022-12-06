$(document).ready(function () {
  $(".img img").attr("draggable", false);

  $("#drag").on("mousedown", function (e) {
    var $dragable = $("#img-top"),
      startWidth = $dragable.width(),
      pX = e.pageX;

    $(document).on("mouseup", function (e) {
      $(document).off("mouseup").off("mousemove");
    });

    $(document).on("mousemove", function (me) {
      var mx = me.pageX - pX;

      $dragable.css({
        width: startWidth + mx,
      });

      var l = $(".fa-arrow-left");
      var r = $(".fa-arrow-right");

      if (startWidth + mx > 500) {
        r.fadeOut(100);
        r.css("float", "none");
      } else {
        r.fadeIn(100);
        r.css("float", "right");
      }

      if (startWidth + mx < 0) {
        l.fadeOut(100);
      } else {
        l.fadeIn(100);
      }
    });
  });
});
