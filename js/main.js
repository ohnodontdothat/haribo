$(function () {
  let i = 0;
  let start = $("#container").offset().top;
  let con1 = document.querySelector(".con_wrap");
  /*bar효과*/
  $(".bars").on("click", function () {
    console.log(i);
    if (i == 0) {
      $(".bar:nth-of-type(2)").hide();
      $(".bar:nth-of-type(1)").animate(
        {
          top: "50%",
          rotate: "45deg",
        },
        60
      );
      $(".bar:nth-of-type(3)").animate(
        {
          top: "50%",
          rotate: "-45deg",
        },
        60
      );
      $(".side_menu").animate({ left: "0%", zIndex: "95" }, 600);
      $(".bar").addClass("on");
      i = 1;
    } else {
      $(".bar:nth-of-type(1)").animate(
        {
          top: "0%",
          rotate: "0deg",
        },
        60
      );
      $(".bar:nth-of-type(3)").animate(
        {
          top: "100%",
          rotate: "0deg",
        },
        60
      );
      $(".bar:nth-of-type(2)").show();
      $(".side_menu").animate({ left: "100%" }, 600);
      $(".bar").removeClass("on");
      i = 0;
    }
  });

  /*visual*/ /*visual text effext*/ var spans = $("h1 span");
  let gummy = $(".gummy");

  function firstAnimation() {
    $(spans).addClass("size-lg");
    $(spans[0])
      .css({ opacity: 1, display: "block", transform: "scale(1.2)" })
      .animate(
        { scale: 1 },
        {
          duration: 1000,
          easing: "easeOutExpo",
          start: function () {
            // $(spans[0]).removeClass("size-lg");
            // $(spans[0]).addClass("size-md");
          },
          complete: function () {
            secondAnimation();
            $(spans[0]).removeClass("size-lg").addClass("size-md");
            $(spans[0]).stop().css({ transform: "translateY(-120%)" });
          },
        }
      );
  }

  function secondAnimation() {
    $(spans[1])
      .css({ opacity: 1, display: "block", transform: "scale(1.2)" })
      .addClass("size-lg")
      .animate(
        { scale: "1" },
        {
          duration: 1000,
          easing: "easeOutExpo",
          complete: function () {
            $(spans[0]).removeClass("size-md").addClass("size-sm");
            $(spans[1]).removeClass("size-lg").addClass("size-md");
            $(spans[0]).stop().css({ transform: "translateY(-200%)" });
            $(spans[1]).stop().css({ transform: "translateY(-120%)" });
            thirdAnimation();
          },
        }
      );
  }
  function thirdAnimation() {
    $(spans[2])
      .css({
        opacity: 1,
        display: "block",
        transform: "scale(1.2)",
      })
      .animate(
        { scale: "1" },
        {
          duration: 1000,
          easing: "easeOutExpo",
          complete: function () {
            $(spans[3]).css({ fontSize: "200px" });
            $(spans[1]).removeClass("size-md").addClass("size-sm");
            $(spans[2]).removeClass("size-lg").addClass("size-md");
            $(spans[1]).stop().css({ transform: "translateY(-200%)" });
            $(spans[2]).stop().css({ transform: "translateY(-110%)" });
            forthAnimation();
          },
        }
      );
  }
  function forthAnimation() {
    $(spans[3])
      .css({
        opacity: 1,
        display: "block",
        transform: "scale(1.2)",
      })
      .animate(
        { scale: "1" },
        {
          duration: 1000,
          easing: "easeOutExpo",
          complete: function () {
            // $(spans[2]).removeClass("size-md").addClass("size-sm");
            $(spans[2]).removeClass("size-md").addClass("size-sm");
            $(spans[2]).stop().css({ transform: "translateY(-200%)" });
            fifthAnimation();
          },
        }
      );
  }
  function fifthAnimation() {
    $(spans[0]).stop().animate({ opacity: "0" }, 2000);
    $(spans[1]).stop().animate({ opacity: "0" }, 2000);
    $(spans[2]).stop().animate({ opacity: "0" }, 2000);
    $(spans[3]).addClass("on");
    $(gummy).addClass("on");
  }

  firstAnimation();

  // /*scorll값에 따른 효과 */
  // let lastScrollY = 0;
  // $(".step").css({ height: "" });
  // function handleScroll() {
  //   const currentScrollY = window.scrollY;
  //   const delta = currentScrollY - lastScrollY;

  //   // 이전 스크롤 값 업데이트
  //   lastScrollY = currentScrollY;
  // }

  /*load event*/
  $(window).on("load", function () {
    let line = -150;

    if (
      $(window).scrollTop() >= $("#container").offset().top + line &&
      $(window).scrollTop() <= $(".cards_wrap").offset().top + line
    ) {
      $(window).scrollTop(start);
      con1.classList.add("sticky");
    } else {
      con1.classList.remove("sticky");
    }
  });

  let wheelEvent = function () {
    /*wheel event*/
    let k = 0;
    let isScrolling = false;
    $(window).on("wheel", function (event) {
      if (isScrolling) {
        return;
      }
      isScrolling = true;

      let line = -150;
      let csHeight = document.querySelector(".text_wrap").offsetHeight;
      let con1 = document.querySelector(".con_wrap");
      let scrollTintensity = 100;
      var y =
        (event.originalEvent.deltaY ||
          event.originalEvent.wheelDelta ||
          -event.originalEvent.detail) * scrollTintensity;
      let newTopValue = -csHeight;
      let jWidth = document.querySelector(".sm_jelly:first-child").offsetWidth;
      let newWidth = -jWidth;
      let total = $(".pack").length - 1;
      var moveTop = $(window).scrollTop();

      if (
        $(window).scrollTop() >= $("#container").offset().top + line &&
        $(window).scrollTop() <= $(".cards_wrap").offset().top + line
      ) {
        $(".con_wrap")
          .stop()
          .animate(
            {
              scrollTop: moveTop,
            },
            {
              duration: 500,
              complete: function () {
                isScrolling = false;
              },
            }
          );
        con1.classList.add("sticky");

        if (y > 0) {
          if (k == total) {
            k = 0;
          } else {
            k++;
          }
          $(".text_wrap")
            .stop()
            .animate(
              {
                top: newTopValue,
              },
              function () {
                $(".txt:first-child").appendTo(".text_wrap");
                $(".text_wrap").css({ top: "0" });
              }
            );
          $(".sm_wrap")
            .stop()
            .animate(
              {
                left: newWidth,
              },
              function () {
                $(".sm_jelly:first-child").appendTo(".sm_wrap");
                $(".sm_wrap").css({ left: "0" });
              }
            );
        } else if (y < 0) {
          if (k == 0) {
            k = total;
          } else {
            k--;
          }
          // $currentIndex = 0;
          let newText = $(".txt:last-child").clone();
          let newSm = $(".sm_jelly:last-child").clone();

          $(".txt:last-child").fadeOut(100, function () {
            $(".text_wrap")
              .stop()
              .animate(
                {
                  top: csHeight,
                },
                {
                  duration: 700,
                  complete: function () {
                    $(".txt:last-child").remove();
                    $(".text_wrap").css({ top: "0" });
                  },
                }
              );
            setTimeout(function () {
              newText.prependTo(".text_wrap");
            }, 500);
          });
          $(".sm_jelly:last-child").fadeOut(100, function () {
            $(".sm_wrap")
              .stop()
              .animate(
                {
                  left: jWidth,
                },
                {
                  duration: 700,
                  complete: function () {
                    $(".sm_jelly:last-child").remove();
                    $(".sm_wrap").css({ left: "0" });
                    newSm.prependTo(".sm_wrap");
                  },
                }
              );
          });
        }
        $(".pack").removeClass("on");
        $(".pack").eq(k).addClass("on");
        $(".jelly").removeClass("on");
        $(".jelly").eq(k).addClass("on");
        $(".bg").removeClass("on");
        $(".bg").eq(k).addClass("on");
      } else {
        con1.classList.remove("sticky");
      }
    });
  };
  wheelEvent();
  $(".pack:first-child").addClass("on");
  $(".jelly:first-child").addClass("on");
  $(".bg:first-child").addClass("on");

  /*scroll event*/
  $(window).on("scroll", function () {
    let line = -150;
    if (
      $(window).scrollTop() >= $("#container").offset().top + line &&
      $(window).scrollTop() <= $(".cards_wrap").offset().top + line
    ) {
      $(window).scrollTop(start);
      con1.classList.add("sticky");
    } else {
      con1.classList.remove("sticky");
    }
    // if ($(window).scrollTop() >= $(".con2").offset().top) {
    //   $(".card").removeClass("on");
    // }
    // if ($(window).scrollTop() >= $("#card1").offset().top) {
    //   $("#card1").addClass("on");
    // }
    // if ($(window).scrollTop() >= $("#card1").offset().top + 10) {
    //   $("#card2").addClass("on");
    // }
    // if ($(window).scrollTop() >= $("#card1").offset().top + 10) {
    //   $("#card3").addClass("on");
    // }
    // if ($(window).scrollTop() >= $("#card1").offset().top + 15) {
    //   $("#card4").addClass("on");
    // }
  });
  let z = 0;
  $(".pro_back").fadeOut();
  $(".pro_img").on("click", function () {
    let i = $(this)
      .closest(".procedure")
      .find(".pro_img")
      .index($(this).closest(".pro_img"));
    if (z == 0) {
      $(".pro_button").removeClass("on");
      $(".pro_button").eq(i).addClass("on");
      $(".pro_back").fadeOut();
      $(".pro_back").eq(i).stop().fadeIn(500);
      z = 1;
    } else {
      $(".pro_button").removeClass("on");
      $(".pro_back").eq(i).stop().fadeOut(500);
      z = 0;
    }
  });
});
