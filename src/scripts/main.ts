import "../scss/index.scss";

$(".product-colors span").on("click", function () {
  $(".product-colors span").removeClass("active");
  $(this).addClass("active");
  $(".active").css("border-color", $(this).attr("data-color-sec") as string);
  $("body").css("background", $(this).attr("data-color-primary") as string);
  $(".content h2").css("color", $(this).attr("data-color-sec") as string);
  $(".content h3").css("color", $(this).attr("data-color-sec") as string);
  $(".container .imgBx").css(
    "background",
    $(this).attr("data-color-sec") as string
  );
  $(".container .details button").css(
    "background",
    $(this).attr("data-color-sec") as string
  );
  $(".imgBx img").attr("src", $(this).attr("data-pic") as string);
});
