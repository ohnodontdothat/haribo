$(function () {
  let i = 0;
  let k = 0;
  let start = $("#container").offset().top;
  let con1 = document.querySelector(".con_wrap");
  let this_scroll = $(window).scrollTop();
  $(".card").fadeOut();

  /*visual*/
  /*visual text effect*/
  var spans = $("h1 span");
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
          start: function () {},
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

  if ($(window).width() < 1320 && $(window).width() > 781) {
    /*visual*/
    /*visual text effext*/

    function firstAnimation() {
      $(spans).addClass("size-lg");
      $(spans[0])
        .css({ opacity: 1, display: "block", transform: "scale(1.2)" })
        .animate(
          { scale: 1 },
          {
            duration: 1000,
            easing: "easeOutExpo",
            start: function () {},
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
              $(spans[3]).css({ fontSize: "8rem" });
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
  }
  if ($(window).width() < 780 && $(window).width() > 432) {
    /*visual*/
    /*visual text effext*/

    function firstAnimation() {
      $(spans).addClass("size-lg");
      $(spans[0])
        .css({ opacity: 1, display: "block", transform: "scale(1.2)" })
        .animate(
          { scale: 1 },
          {
            duration: 1000,
            easing: "easeOutExpo",
            start: function () {},
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
              $(spans[3]).css({ fontSize: "90px" });
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
  }

  if ($(window).width() < 431) {
    /*visual*/
    /*visual text effext*/

    function firstAnimation() {
      $(spans).addClass("size-lg");
      $(spans[0])
        .css({ opacity: 1, display: "block", transform: "scale(1.1)" })
        .animate(
          { scale: 1 },
          {
            duration: 1000,
            easing: "easeOutExpo",
            start: function () {},
            complete: function () {
              secondAnimation();
              $(spans[0]).removeClass("size-lg").addClass("size-md");
              $(spans[0]).stop().css({ transform: "translateY(-270%)" });
            },
          }
        );
    }

    function secondAnimation() {
      $(spans[1])
        .css({ opacity: 1, display: "block", transform: "scale(1.1)" })
        .addClass("size-lg")
        .animate(
          { scale: "1" },
          {
            duration: 1000,
            easing: "easeOutExpo",
            complete: function () {
              $(spans[0]).removeClass("size-md").addClass("size-sm");
              $(spans[1]).removeClass("size-lg").addClass("size-md");
              $(spans[0]).stop().css({ transform: "translateY(-250%)" });
              $(spans[1]).stop().css({ transform: "translateY(-170%)" });
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
          transform: "scale(1.1)",
        })
        .animate(
          { scale: "1" },
          {
            duration: 1000,
            easing: "easeOutExpo",
            complete: function () {
              $(spans[3]).css({ fontSize: "55px" });
              $(spans[1]).removeClass("size-md").addClass("size-sm");
              $(spans[2]).removeClass("size-lg").addClass("size-md");
              $(spans[1]).stop().css({ transform: "translateY(-250%)" });
              $(spans[2]).stop().css({ transform: "translateY(-170%)" });
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
          transform: "scale(1.1)",
        })
        .animate(
          { scale: "1" },
          {
            duration: 1000,
            easing: "easeOutExpo",
            complete: function () {
              $(spans[2]).removeClass("size-md").addClass("size-sm");
              $(spans[2]).stop().css({ transform: "translateY(-250%)" });
              fifthAnimation();
            },
          }
        );
    }
    function fifthAnimation() {
      $(spans[3]).addClass("on");
      $(gummy).addClass("on");
    }

    firstAnimation();
  }
  /******************************visual animation***********************************************/

  /***********************************load event********************************************/
  /*load event*/
  let loaded = false;
  $(window).on("load", function () {
    if ($(window).width() < 431) {
      mobile();
      $(".con_wrap_wrap").off("wheel");
    }
    if (!loaded) {
      let line = -150;

      if (
        $(window).scrollTop() >= $("#container").offset().top &&
        $(window).scrollTop() <= $(".cards_wrap").offset().top + line
      ) {
        $(window).scrollTop(start);
        con1.classList.add("sticky");
        wheelEvent();
      } else if (
        $(window).scrollTop() >= $(".con2").offset().top + line &&
        $(window).scrollTop() <= $(".con3").offset().top + line
      ) {
        con1.classList.remove("sticky");
        $(".card").fadeIn(500);
      } else if (
        $(window).scrollTop() >= $(".con3").offset().top + line &&
        $(window).scrollTop() <= $(".con4").offset().top + line
      ) {
        $(".con3").addClass("on");
        if ($(window).scrollTop() >= $(".piw_1").offset().top + line) {
          $(".piw_1").addClass("on");
        }
        if ($(window).scrollTop() >= $(".piw_1").offset().top + 60) {
          $(".piw_2").addClass("on");
          setTimeout(function () {
            $(".piw_3").addClass("on");
          }, 500);
        }
      }
    }

    loaded = true;
  });

  /***********************************load event********************************************/

  /***********************************wheel event********************************************/
  let wheelEvent = function () {
    let isScrolling = false;

    $(".con_wrap_wrap").off("wheel");

    $(".con_wrap_wrap").on("wheel", function (event) {
      if (isScrolling) {
        return;
      }
      isScrolling = true;

      let line = -150;
      let csHeight = document.querySelector(".text_wrap").offsetHeight;
      let con1 = document.querySelector(".con_wrap");
      var y =
        event.originalEvent.deltaY ||
        event.originalEvent.wheelDelta ||
        -event.originalEvent.detail;
      let newTopValue = -csHeight;
      let jWidth = document.querySelector(".sm_jelly:first-child").offsetWidth;
      let newWidth = -jWidth;
      let total = $(".pack").length - 1;
      var moveTop = $(window).scrollTop();

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
                duration: 500,
                complete: function () {
                  $(".txt:last-child").remove(),
                    setTimeout(function () {
                      $(".text_wrap").css({ top: "0" });
                      newText.prependTo(".text_wrap");
                    }, 100);
                },
              }
            );
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

      setTimeout(function () {
        isScrolling = false;
      }, 1000);
    });
  };
  wheelEvent();
  $(".pack:first-child").addClass("on");
  $(".jelly:first-child").addClass("on");
  $(".bg:first-child").addClass("on");

  /***********************************wheel event********************************************/

  /***********************************scroll event********************************************/
  /*scroll event*/
  $(window).on("scroll", function () {
    if ($(window).width() < 431) {
      mobile();
      $(".con_wrap_wrap").off("wheel");
    }
    let line = -150;
    if (
      $(window).scrollTop() >= $("#container").offset().top &&
      $(window).scrollTop() <= $(".cards_wrap").offset().top + line
    ) {
      if ($(window).width() < 431) {
        $(".con_wrap_wrap").off("wheel");
      }
      con1.classList.add("sticky");
    } else if (
      $(window).scrollTop() >= $(".con2").offset().top + line &&
      $(window).scrollTop() <= $(".con3").offset().top + line
    ) {
      con1.classList.remove("sticky");
      $(".card").fadeIn(500);
    } else if (
      $(window).scrollTop() >= $(".con3").offset().top + line &&
      $(window).scrollTop() <= $(".con4").offset().top + line
    ) {
      $(".con3").addClass("on");
      if ($(window).scrollTop() >= $(".piw_1").offset().top + line) {
        $(".piw_1").addClass("on");
      }
      if ($(window).scrollTop() >= $(".piw_1").offset().top + 60) {
        $(".piw_2").addClass("on");
        setTimeout(function () {
          $(".piw_3").addClass("on");
        }, 500);
      }
    }
  });
  /***********************************scroll event********************************************/

  /***********************************mobile event********************************************/
  /*모바일*/
  let mobile = function () {
    var k = 0;
    let csHeight = document.querySelector(".text_wrap").offsetHeight;
    let con1 = document.querySelector(".con_wrap");
    let newTopValue = -csHeight;
    let jWidth = document.querySelector(".sm_jelly:first-child").offsetWidth;
    let newWidth = -jWidth;
    let total = $(".pack").length - 1;

    $(".prev").on("click", function () {
      console.log(k);
      if (k == 0) {
        k = total;
      } else {
        k--;
      }

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
              duration: 500,
              complete: function () {
                $(".txt:last-child").remove(),
                  setTimeout(function () {
                    $(".text_wrap").css({ top: "0" });
                    newText.prependTo(".text_wrap");
                  }, 100);
              },
            }
          );
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
      $(".pack").removeClass("on");
      $(".pack").eq(k).addClass("on");
      $(".jelly").removeClass("on");
      $(".jelly").eq(k).addClass("on");
      $(".bg").removeClass("on");
      $(".bg").eq(k).addClass("on");
    });

    $(".next").on("click", function () {
      console.log(k);
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
      $(".pack").removeClass("on");
      $(".pack").eq(k).addClass("on");
      $(".jelly").removeClass("on");
      $(".jelly").eq(k).addClass("on");
      $(".bg").removeClass("on");
      $(".bg").eq(k).addClass("on");
    });
  };
  mobile();
  /***********************************mobile event********************************************/

  /***********************************con3 card effect********************************************/
  /*con3 카드 효과*/
  let z = 0;
  $(".pro_back").fadeOut();
  $(".pro_img").on("click", function () {
    let procedureClass =
      $(window).width() < 780 ? ".procedure_wrap_1" : ".procedure_wrap";
    let i = $(this).closest(procedureClass).find(".pro_img").index(this);
    console.log(i);
    if (z == 0) {
      $(".pro_button", procedureClass).removeClass("on");
      $(".pro_button", procedureClass).eq(i).addClass("on");
      $(".pro_back", procedureClass).fadeOut();
      $(".pro_back", procedureClass).eq(i).stop().fadeIn(500);
      z = 1;
    } else {
      $(".pro_button", procedureClass).removeClass("on");
      $(".pro_back", procedureClass).eq(i).stop().fadeOut(500);
      z = 0;
    }
  });
  /***********************************con3 card effect********************************************/

  /***********************************carousel animtion********************************************/
  if ($(window).width() < 431) {
    /*con5 무한 캐러셀 애니메이션*/
    let carousel_1 = function () {
      function animateUpWrap() {
        $(".up_wrap_wrap").animate(
          {
            top: "-110%",
          },
          {
            duration: 5000,
            complete: function () {
              $(".up_wrap:first-child").appendTo(".up_wrap_wrap");
              $(".up_wrap_wrap").css({ top: "0%" });
            },
          }
        );
      }

      animateUpWrap();

      setInterval(animateUpWrap, 5000);
    };

    let carousel_2 = function () {
      function animateDownWrap() {
        $(".down_1").animate(
          {
            top: "110%",
          },
          {
            duration: 5000,
            complete: function () {
              $(".down_wrap_1:last-child").prependTo(".down_1");
              $(".down_1").css({ top: "0%" });
            },
          }
        );
      }

      animateDownWrap();

      setInterval(animateDownWrap, 5000);
    };

    let carousel_3 = function () {
      function animateDownWrap_1() {
        $(".down_2").animate(
          {
            top: "110%",
          },
          {
            duration: 5000,
            complete: function () {
              $(".down_wrap_2:last-child").prependTo(".down_2");
              $(".down_2").css({ top: "0%" });
            },
          }
        );
      }

      animateDownWrap_1();

      setInterval(animateDownWrap_1, 5000);
    };

    carousel_1();
    carousel_2();
    carousel_3();
  } else {
    /*con5 무한 캐러셀 애니메이션*/
    let carousel_1 = function () {
      function animateUpWrap() {
        $(".up_wrap_wrap").animate(
          {
            top: "-195%",
          },
          {
            duration: 5000,
            complete: function () {
              $(".up_wrap:first-child").appendTo(".up_wrap_wrap");
              $(".up_wrap_wrap").css({ top: "0%" });
            },
          }
        );
      }

      animateUpWrap();

      setInterval(animateUpWrap, 5000);
    };

    let carousel_2 = function () {
      function animateDownWrap() {
        $(".down_1").animate(
          {
            top: "195%",
          },
          {
            duration: 5000,
            complete: function () {
              $(".down_wrap_1:last-child").prependTo(".down_1");
              $(".down_1").css({ top: "0%" });
            },
          }
        );
      }

      animateDownWrap();

      setInterval(animateDownWrap, 5000);
    };

    let carousel_3 = function () {
      function animateDownWrap_1() {
        $(".down_2").animate(
          {
            top: "195%",
          },
          {
            duration: 5000,
            complete: function () {
              $(".down_wrap_2:last-child").prependTo(".down_2");
              $(".down_2").css({ top: "0%" });
            },
          }
        );
      }

      animateDownWrap_1();

      setInterval(animateDownWrap_1, 5000);
    };

    carousel_1();
    carousel_2();
    carousel_3();
  }

  /***********************************carousel animation********************************************/
});
