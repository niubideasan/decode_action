//Tue Jul 02 2024 03:11:14 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var EC = {
  "isSlid": true,
  "Width": $(window).width(),
  "Init": function () {
    EC.Init.LazyLoad = new LazyLoad({});
    EC.Style.Footer();
    $(".gen-search").click(function () {
      $(".pop-1").addClass("show").siblings(".box-bg2").show();
      $("body").css({
        "height": "100%",
        "width": "100%",
        "overflow": "hidden"
      });
    });
    $(".gen-history").click(function () {
      $(".pop-2").addClass("show").siblings(".box-bg2").show();
      EC.Init.LazyLoad.update();
      $("body").css({
        "height": "100%",
        "width": "100%",
        "overflow": "hidden"
      });
    });
    $(".pop-bj").click(function () {
      $(".pop-list-body").removeClass("show").siblings(".box-bg2").hide();
      $("body").css({
        "height": "",
        "width": "",
        "overflow": ""
      });
    });
    $(".pop-2 span").click(function () {
      $(this).addClass("on").siblings().removeClass("on");
      let _0x496fbf = $(".pop-2 span").index(this),
        _0x3534b4 = $(".history").eq(_0x496fbf);
      _0x3534b4.fadeIn(800).siblings().hide();
      _0x3534b4.addClass("check").siblings().removeClass("check");
      EC.Empty(EC.Cookie.Get("user_id")) ? $(".user-history").html("<div class=\"null cor5\"><img src=\"" + maccms.path2 + "static/ds4/img/null.png\" alt=\"" + language["2"] + "\"><span>" + language["0"] + "</span></div>" + "<a href=\"javascript:\" class=\"button top30 head-user\" style=\"width:100%\">" + language["1"] + "</a>") : $(".user-history li").length === 0 && EC.Ajax(maccms.path + "/index.php/api/history", "post", "json", "", function (_0x101a50) {
        if (_0x101a50.code === 1) {
          let _0x151b01 = "";
          $.each(_0x101a50.list, function (_0x4b0a, _0x407649) {
            _0x151b01 += "<li><a class=\"history-a flex\" href=\"" + _0x407649.data.link + "\" target=\"video\" title=\"" + _0x407649.data.name + "\"><img class=\"lazy lazy1\" referrerpolicy=\"no-referrer\" alt=\"" + _0x407649.data.name + "\" data-src=\"" + _0x407649.data.pic + "\"/>" + "<div class=\"history-r\"><div class=\"hide2\">" + _0x407649.data.name + "</div><div><span class=\"cor5\">" + _0x407649.data.type.type_name + "</span></div></div></a></li>";
          });
          $(".user-history ul").html(_0x151b01);
          EC.Init.LazyLoad.update();
          Number($(".lang-bnt").length) === 1 && zh_tranBody();
        } else $(".user-history ul").html(EC.History.Msg);
      });
    });
    $(".user-share-button").click(function () {
      EC.Pop.Show($(".user-share-html").html(), language["3"], function () {});
    });
    let _0x540d6d = $(".gen-loading"),
      _0x166864 = _0x540d6d.data("time");
    setTimeout(function () {
      $(".gen-loading").fadeOut("slow");
    }, _0x166864);
    $(".head-more-a").hover(function () {
      $(".head-more").show();
    }, function () {
      $(".head-more").hide();
    });
    let _0x2aa207 = null,
      _0x769556 = $(".head"),
      _0x2098b0 = $(".row-2 .tim-box"),
      _0x18bbf1 = null;
    if (_0x769556.length > 0) {
      _0x2aa207 = _0x769556.offset().top;
    }
    _0x2098b0.length > 0 && (_0x18bbf1 = _0x2098b0.eq(_0x2098b0.length - 1).offset().top);
    $(window).scroll(function () {
      let _0x5c0f32 = $(this).scrollTop();
      _0x769556.toggleClass("head-b", _0x5c0f32 > _0x2aa207).css("position", _0x5c0f32 > _0x2aa207 ? "fixed" : "");
      _0x5c0f32 > 300 ? $(".top").fadeIn(600) : $(".top").fadeOut(600);
      if (EC.Width > 991) {
        if (_0x5c0f32 > _0x18bbf1) _0x2098b0.eq(_0x2098b0.length - 1).css({
          "position": "fixed",
          "top": "100px",
          "width": $(".row-2").width()
        });else {
          _0x2098b0.eq(_0x2098b0.length - 1).css({
            "position": "",
            "top": "",
            "width": ""
          });
        }
      }
    });
    $(".top").click(function () {
      $("html,body").animate({
        "scrollTop": 0
      }, 500);
      _0x769556.removeClass("head-b").css({
        "position": ""
      });
    });
    if (Number($(".slid-e").length) === 1) {
      let _0x1fbbfc = new Swiper(".swiper3", {
        "loop": true,
        "slidesPerView": 1,
        "pagination": {
          "el": ".swiper-pagination"
        },
        "on": {
          "slideChangeTransitionStart": function () {
            _0x1c6c15();
            $(".muted").off("click");
            $(".toReplay").off("click");
            $(".slid-e-video").removeClass("v-show");
            $(".slid-e-bj").removeClass("v-hidden");
          },
          "slideChangeTransitionEnd": function () {
            $(".wap-hide").is(":hidden") == false && EC.isSlid && (EC.isSlid = false, setTimeout(function () {
              EC.isSlid = true;
              _0x3fbd9c();
            }, 1000));
          }
        }
      });
      function _0x1c6c15() {
        let _0x155b1f = Array.from(document.getElementsByClassName("preview"));
        for (let _0x56fadf = 0; _0x56fadf < _0x155b1f.length; _0x56fadf++) {
          const _0x1afaae = _0x155b1f[_0x56fadf];
          _0x1afaae.pause();
          _0x1afaae.currentTime = 0;
        }
      }
      let _0x5d5429 = 0;
      function _0x3fbd9c() {
        let _0x5209db = document.querySelector(".slid-e").querySelector(".swiper-slide-active").querySelector("video"),
          _0x237e6f = $(".slid-e .swiper-slide-active");
        if (~~_0x5209db.duration > 10) {
          _0x237e6f.find(".slid-e-video").addClass("v-show");
          _0x237e6f.find(".slid-e-bj").addClass("v-hidden");
          if (_0x5209db.muted) {
            $(".muted .fa").removeClass("ds-shengyin").addClass("ds-liulan");
          } else $(".muted .fa").removeClass("ds-liulan").addClass("ds-shengyin");
          $(".muted").click(function () {
            if (_0x5209db.muted) $(".muted .fa").removeClass("ds-liulan").addClass("ds-shengyin"), _0x5209db.muted = false, _0x5d5429 = 1;else {
              $(".muted .fa").removeClass("ds-shengyin").addClass("ds-liulan");
              _0x5209db.muted = true;
              _0x5d5429 = 0;
            }
          });
          _0x5d5429 === 1 && ($(".muted .fa").removeClass("ds-liulan").addClass("ds-shengyin"), _0x5209db.muted = false);
          $(".toReplay").click(function () {
            _0x237e6f.find(".slid-e-video").addClass("v-show");
            _0x237e6f.find(".slid-e-bj").addClass("v-hidden");
            _0x5209db.currentTime = 0;
            _0x5209db.play();
          });
          _0x5209db.play();
          _0x5209db.addEventListener("ended", function () {
            _0x237e6f.find(".slid-e-video").removeClass("v-show");
            _0x237e6f.find(".slid-e-bj").removeClass("v-hidden");
            _0x1fbbfc.slideNext();
          });
        } else setTimeout(function () {
          _0x1fbbfc.slideNext();
        }, 6000);
      }
    }
    EC.Swiper.Navs();
    EC.Swiper.Slide();
    EC.Actor.Detail();
    $(".gen-left-list").click(function () {
      let _0x45e2c9 = $(".head-more").html(),
        _0x5425bb = "bold0",
        _0x39e7d9 = "wap-show1",
        _0x4711cb = $(".head-nav");
      _0x4711cb.hasClass("bold1") && (_0x5425bb = "bold1");
      if (_0x4711cb.hasClass("wap-show0")) {
        _0x39e7d9 = "wap-show0";
      }
      EC.Pop.Drawer("<div class='drawer-nav drawer-scroll " + _0x5425bb + " " + _0x39e7d9 + "'><div class='drawer-scroll-list'>" + _0x45e2c9 + "</div></div>", function () {
        let _0x22cd8f = $(".logo-brand").html();
        $(".drawer-list-box").prepend("<div class='drawer-menu'>" + _0x22cd8f + "</div><button class='btn-close'><i class='fa ds-guanbi'></i></button>");
      });
    });
    $(".playBut").click(function () {
      let _0x330585 = $(this).attr("data-url");
      $(".play-advance .topfadeInUp").html("<video id=\"xkPlayer\" width=\"100%\" height=\"100%\" controls preload=\"auto\" autoplay><source src=\"" + _0x330585 + "\" type=\"video/mp4\"></video>");
      $(".play-advance").show();
    });
    $(".play-advance .box-bg,.play-advance .mfp-close").click(function () {
      let _0x179e76 = document.getElementById("xkPlayer");
      _0x179e76.currentTime = 0;
      _0x179e76.pause();
      $(".play-advance").hide();
      $(".mfp-iframe").remove();
    });
    $(".wap-diy-vod-e .vod-link").hover(function () {
      $(this).addClass("box");
      $(this).children(".vod-no-dom-show").hide();
      $(this).children(".vod-no-dom").show();
    }, function () {
      $(this).removeClass("box");
      $(this).children(".vod-no-dom-show").show();
      $(this).children(".vod-no-dom").hide();
    });
    $("#BuyPopEdom").click(function () {
      let _0x9111dc = $(this);
      if (_0x9111dc.attr("data-id")) {
        confirm(language["6"]) && EC.Ajax(maccms.path + "/index.php/user/ajax_buy_popedom.html?id=" + _0x9111dc.attr("data-id") + "&mid=" + _0x9111dc.attr("data-mid") + "&sid=" + _0x9111dc.attr("data-sid") + "&nid=" + _0x9111dc.attr("data-nid") + "&type=" + _0x9111dc.attr("data-type"), "get", "json", "", function (_0x486d61) {
          _0x9111dc.addClass("disabled");
          _EC.Pop.Msg(_0x486d61.msg);
          Number(_0x486d61.code) === 1 && top.location.reload();
          _0x9111dc.removeClass("disabled");
        });
      }
    });
    $("#check").click(function () {
      let _0x36c384 = $(this);
      if (_0x36c384.attr("data-id")) {
        EC.Ajax(maccms.path + "/index.php/ajax/pwd.html?id=" + _0x36c384.attr("data-id") + "&mid=" + _0x36c384.attr("data-mid") + "&type=" + _0x36c384.attr("data-type") + "&pwd=" + _0x36c384.parents("form").find("input[name=\"pwd\"]").val(), "get", "json", "", function (_0x43304a) {
          _0x36c384.addClass("disabled");
          _EC.Pop.Msg(_0x43304a.msg);
          Number(_0x43304a.code) === 1 && location.reload();
          _0x36c384.removeClass("disabled");
        });
      }
    });
    switch (maccms.aid) {
      case "12":
      case "11":
        let _0x24f0e0 = $("#dataList");
        if (_0x24f0e0.length > 0) {
          let _0x52890c = _0x24f0e0.data(),
            _0xa8861 = {
              "type": _0x52890c.type,
              "class": _0x52890c.class,
              "area": _0x52890c.area,
              "lang": _0x52890c.lang,
              "version": _0x52890c.version,
              "state": _0x52890c.state,
              "letter": _0x52890c.letter
            };
          $(".ec-casc-list .swiper-slide").click(function () {
            $(this).addClass("nav-dt").siblings().removeClass("nav-dt");
            EC.Swiper.Navs();
            _0xa8861[$(this).data("type")] = $(this).data("val");
            if (EC.Empty($(this).data("type"))) return;
            _0x24f0e0.html("");
            HTML.Skeleton(_0x24f0e0, 3, _0x52890c.tpl);
            EC.flow.get(_0xa8861, _0x24f0e0, _0x52890c, function () {});
          });
          $(".site-tabs a").click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            if (Number($("#dataList .null").length) === 1) return;
            _0xa8861.by = $(this).data("type");
            _0x24f0e0.html("");
            HTML.Skeleton(_0x24f0e0, 3, _0x52890c.tpl);
            EC.flow.get(_0xa8861, _0x24f0e0, _0x52890c, function () {});
          });
          HTML.Skeleton(_0x24f0e0, 3, _0x52890c.tpl);
          _0xa8861[$(this).data("type")] = $(this).data("val");
          EC.flow.get(_0xa8861, _0x24f0e0, _0x52890c, function () {});
        }
        break;
      case "14":
      case "104":
      case "15":
        $(".anthology-tab a").click(function () {
          $(this).addClass("on nav-dt").siblings().removeClass("on nav-dt");
          let _0x13aaf7 = $(".anthology-tab a").index(this),
            _0x2e0601 = $(".anthology-list .none").eq(_0x13aaf7);
          _0x2e0601.fadeIn(800).siblings().hide();
          _0x2e0601.addClass("dx").siblings().removeClass("dx");
          EC.Swiper.Navs();
        }), $("#zxdaoxu").each(function () {
          $(this).on("click", function (_0x5a9835) {
            _0x5a9835.preventDefault();
            $(".dx").each(function () {
              let _0xf1e6ea = $(this).find("li");
              for (let _0x564cac = 0, _0x4cc388 = _0xf1e6ea.length - 1; _0x564cac < _0x4cc388;) {
                let _0xab1d01 = _0xf1e6ea.eq(_0x564cac).clone(true),
                  _0x276064 = _0xf1e6ea.eq(_0x4cc388).replaceWith(_0xab1d01);
                _0xf1e6ea.eq(_0x564cac).replaceWith(_0x276064);
                ++_0x564cac;
                --_0x4cc388;
              }
            });
          });
        }), $("#playerSlid").click(function () {
          location.href = $(".anthology-list-play a").eq(0).attr("href");
        }), $(".player-button-ac").click(function () {
          $(".anthology-list").toggleClass("player-list-ac");
        }), $(".play-tips-bnt").click(function () {
          $(".tips-box").slideToggle();
          $(".charge,.player-share-box").hide();
        }), $(".ec-report").click(function () {
          let _0x4fd02b = $(this).data();
          EC.Gbook.Report(_0x4fd02b);
        }), $(".charge-button").click(function () {
          $(".charge").fadeToggle();
          $(".player-share-box,.tips-box").hide();
        });
        $(".comment-form").length < 1 && (EC.Comment.Login = $(this).data().login, EC.Comment.Verify = $(this).data().verify, EC.Comment.Init(), EC.Comment.Show(1));
        $("#expand_details").click(function () {
          $(".player-vod-box").hide();
          $(".player-list-box").hide();
          $(".player-details-box").show();
        }), $(".player-close").click(function () {
          $(".player-vod-box").show();
          $(".player-list-box").show();
          $(".player-details-box").hide();
          $(".player-return .none").hide();
          $(".player-vod-no1").show();
          $(".player-vod-no2").html("<div class=\"top40\"><div class=\"loading\"><span></span><span></span><span></span><span></span><span></span></div></div>").hide();
        }), $(".player-vod-no1 .public-list-box").click(function () {
          $(".player-return .none").show();
          $(".player-vod-no1").hide();
          $(".player-vod-no2").show();
          EC.Ajax(maccms.path + "/index.php/api/actor_vod_player_api?id=" + $(this).attr("data-id"), "get", "json", "", function (_0x3b03ec) {
            if (Number(_0x3b03ec.code) === 1) {
              let _0x4a3c96 = "";
              $.each(_0x3b03ec.list, function (_0x382478, _0x2dc46d) {
                _0x4a3c96 = _0x4a3c96 + "<div class=\"public-list-box public-pic-b\"><div class=\"public-list-div\"><a class=\"public-list-exp\" href=\"" + _0x2dc46d.url + "\" title=\"" + _0x2dc46d.name + "\">" + "<img class=\"lazy lazy1 gen-movie-img " + maccms.vod_mask + "\" referrerpolicy=\"no-referrer\" alt=\"" + language["10"] + "\" data-src=\"" + _0x2dc46d.pic + "\" /><span class=\"public-bg\"></span><div class=\"public-list-title\"><span class=\"time-title hide ft4\" title=\"" + _0x2dc46d.name + "\">" + _0x2dc46d.name + "</span></div></a>\n" + "<i class=\"collection fa\" data-type=\"2\" data-mid=\"" + maccms.mid + "\" data-id=\"" + _0x2dc46d.id + "\">&#xe577;</i></div></div>";
              });
              $(".player-vod-no2").html("<div class=\"role-card top20\">" + _0x3b03ec.html + "</div><div class=\"title-m cor4\"><h5>" + language["11"] + "</h5></div><div class=\"flex wrap border-box hide-b-16 wap-diy-vod-a\">" + _0x4a3c96 + "</div>");
              EC.Init.LazyLoad.update();
            } else _EC.Pop.Msg(language["12"], "", "error");
          });
        }), $(".player-return .none").click(function () {
          $(this).hide();
          $(".player-vod-no1").show();
          $(".player-vod-no2").html("<div class=\"top40\"><div class=\"loading\"><span></span><span></span><span></span><span></span><span></span></div></div>").hide();
        });
        if (Number(maccms.jx) === 1) {
          let _0x5cc59f = $(".line-switch");
          EC.player.player_jx(_0x5cc59f.attr("data-api"), _0x5cc59f.attr("data-url"));
          $(".vod-playerUrl").click(function () {
            _0x5cc59f.html("");
            EC.player.player_jx(_0x5cc59f.attr("data-api"), $(this).attr("data-form"));
          });
          $(document).on("click", ".line-switch a", function () {
            $(this).addClass("bj2").siblings().removeClass("bj2");
            maccms.jx_index = $(this).index();
            $("#playleft iframe").attr("src", $(this).attr("data-api") + MacPlayer.PlayUrl);
            _EC.Pop.Msg(language["13"], "", "success");
          });
        }
        break;
      case "4":
        EC.Gbook.Init();
        break;
      case "24":
        $(".tim-content img").touchTouch();
        let _0x5a65e4 = $(".ds-comment");
        Number(_0x5a65e4.length) === 1 && (EC.Comment.Login = _0x5a65e4.data().login, EC.Comment.Verify = _0x5a65e4.data().verify, EC.Comment.Init(), EC.Comment.Show(1));
        break;
      case "21":
        let _0x322554 = $("#dataList");
        if (_0x322554.length > 0) {
          let _0x1d2003 = _0x322554.data();
          HTML.Skeleton(_0x322554, 3, _0x1d2003.tpl);
          let _0x2a005c = {
            "type": _0x1d2003.type
          };
          EC.flow.get(_0x2a005c, _0x322554, _0x1d2003, function () {
            EC.Swiper.Roll();
          });
        }
        break;
      case "23":
        let _0x52d510 = $("#dataList");
        if (_0x52d510.length > 0) {
          let _0x191d1d = _0x52d510.data();
          HTML.Skeleton(_0x52d510, 3, _0x191d1d.tpl);
          let _0x34f29c = {
            "wd": _0x191d1d.type,
            "tag": _0x191d1d.wdtag
          };
          EC.flow.get(_0x34f29c, _0x52d510, _0x191d1d, function () {
            EC.Swiper.Roll();
          });
        }
        break;
      case "84":
        $(".art-so-tag").click(function () {
          let _0xee31c = $("#dataList"),
            _0x1a5d32 = _0xee31c.data();
          _0xee31c.html("");
          HTML.Skeleton(_0xee31c, 3, _0x1a5d32.tpl);
          let _0x30df9b = {
            "wd": _0x1a5d32.type,
            "tag": _0x1a5d32.wdtag
          };
          EC.flow.get(_0x30df9b, _0xee31c, _0x1a5d32, function () {
            EC.Swiper.Roll();
          });
        });
        break;
      case "82":
        let _0x243c08 = $("#dataList");
        if (_0x243c08.length > 0) {
          let _0x1be50c = _0x243c08.data(),
            _0x537499 = {
              "type": _0x1be50c.type
            };
          $(".ec-casc-list .swiper-slide").click(function () {
            $(this).addClass("nav-dt").siblings().removeClass("nav-dt");
            EC.Swiper.Navs();
            _0x537499[$(this).data("type")] = $(this).data("val");
            _0x243c08.html("");
            HTML.Skeleton(_0x243c08, 3, _0x1be50c.tpl);
            EC.flow.get(_0x537499, _0x243c08, _0x1be50c, function () {});
          });
          HTML.Skeleton(_0x243c08, 3, _0x1be50c.tpl);
          _0x537499[$(this).data("type")] = $(this).data("val");
          EC.flow.get(_0x537499, _0x243c08, _0x1be50c, function () {});
        }
        break;
      case "302":
        let _0x406c00 = $("#dataList");
        if (_0x406c00.length > 0) {
          let _0x216db7 = _0x406c00.data(),
            _0x4f30e8 = {};
          $(".ec-casc-list .swiper-slide").click(function () {
            $(".swiper-slide").removeClass("nav-dt");
            $(this).addClass("nav-dt");
            EC.Swiper.Navs();
            _0x4f30e8.type = $(this).data("id");
            _0x406c00.html("");
            HTML.Skeleton(_0x406c00, 3, _0x216db7.tpl);
            EC.flow.get(_0x4f30e8, _0x406c00, _0x216db7, function () {});
          });
          HTML.Skeleton(_0x406c00, 3, _0x216db7.tpl);
          _0x4f30e8[$(this).data("type")] = $(this).data("val");
          EC.flow.get(_0x4f30e8, _0x406c00, _0x216db7, function () {});
        }
        break;
    }
    Number(maccms.mid) === 11 && ($(".web-so-btn").click(function () {
      let _0x2fd7f1 = $(".website-val").val();
      if (_0x2fd7f1) {
        window.open($(".website-filter-grid .action").attr("data-url") + _0x2fd7f1);
      } else {
        _EC.Pop.Msg(language["14"], "", "error");
      }
    }), $(".website-filter-grid .icon").click(function () {
      $(".website-filter-grid .action").removeClass("action");
      $(this).addClass("action");
    }), $(".togo").click(function () {
      let _0x365338 = $(this).attr("data-id"),
        _0x46aa81 = $(this).attr("data-mi");
      if (Number(_0x46aa81) === 1) _EC.Pop.Msg(language["15"], "", "error");else {
        EC.Ajax(maccms.path + "/index.php/api/website?id=" + _0x365338, "get", "json", "", function (_0x4ae687) {
          _0x4ae687.smg === 1 ? EC.Pop.Show("<div class=\"website-title\">" + _0x4ae687.data.website_name + "</div><div class=\"card-text cor5\"><p>" + _0x4ae687.data.website_blurb + "</p><p>" + _0x4ae687.data.website_content + "</p></div><div class=\"flex website-tag top20\">" + _0x4ae687.data.website_tag + "</div>", language["20"], function () {}) : _EC.Pop.Msg(language["15"], "", "error");
        });
      }
    }), $("#tou_gao").click(function () {
      if (Number(EC.User.IsLogin) === 0) {
        EC.User.Login();
        return;
      }
      EC.Pop.Show("<form class=\"tg-form\"><p class=\"cor5 top10\">" + language["16"] + "</p><div class=\"region nav-link textarea border\">\n" + "<textarea class=\"tg-content cor5\" name=\"gbook_content\" style=\"width:100%;height:100%\"></textarea>\n" + "</div><div class=\"flex\"><input type=\"text\" class=\"input bj br cor5\" name=\"verify\" value=\"\" maxlength=\"4\" size=\"20\">\n" + "<img class=\"ds-verify-img\" src=\"/index.php/verify/index.html\" alt=\"" + language["19"] + "\" onclick=\"this.src = this.src+'?'\"></div>\n" + "<input type=\"button\" class=\"tg-submit button top20 submit_btn\" style=\"width:100%\" value=\"" + language["17"] + "\"></form>", language["18"], function () {
        $(".tg-submit").click(function () {
          EC.Gbook.Tg();
        });
      });
    }));
    $("#website_user").click(function () {
      $.ajax({
        "url": window.location.href + "&pdw=" + $("#website_password").val(),
        "type": "post",
        "dataType": "json",
        "success": function (_0x260582) {
          Number(_0x260582.smg) === 1 ? window.location.replace(_0x260582.url) : window.location.replace("https://www.kugou.com/song/#hash=8C1A6044DDF1650A82B42769C47FD645&album_id=501600");
        }
      });
    });
    $(".jp-download").click(function () {
      let _0x54de27 = "<p class=\"cor5 top10\">" + language["21"] + "</p><div class=\"region nav-link textarea bj\"><textarea id=\"bar2\" class=\"cor5\" style=\"width:100%;height:100%\">" + language["22"] + "《" + ecData.list[ecData.playid].name + "》" + language["23"] + ecData.list[ecData.playid].url + "</textarea></div>\n" + "<button type=\"button\" class=\"button copyBtn\" style=\"width:100%\" data-clipboard-action=\"copy\" data-clipboard-target=\"#bar2\">" + language["24"] + "</button>";
      EC.Pop.Show(_0x54de27, language["25"], function () {
        $(document).on("click", ".copyBtn", function () {
          _EC.Pop.Msg(language["26"], "", "success");
          $(".window").remove();
        });
      });
    });
    $(".ds-pop").length > 0 && EC.Empty(EC.Cookie.Get("ecPopup")) && (EC.Cookie.Set("ecPopup", 1, 1), $("#notice").show(), $("#notice .box-bg,#notice .button").click(function () {
      $("#notice").hide();
    }));
    $(".player-switch").click(function () {
      let _0x46254d = $(".player");
      _0x46254d.hasClass("player-switch-box") ? ($(this).html("&#xe565;"), _0x46254d.removeClass("player-switch-box")) : ($(this).html("&#xe566;"), _0x46254d.addClass("player-switch-box"));
    });
    const _0x267c00 = " %c \u77ED\u89C6\u4E3B\u9898 by \u8349\u6839\xAE %c QQ602524950|906259831\uFF08\u4E25\u7981\u5229\u7528\u4E3B\u9898\u5EFA\u8BBE\u8FDD\u6CD5\u7F51\u7AD9\uFF09 ";
    console.log("\n" + _0x267c00 + "\n", "color: #fadfa3; background: #030307; padding:5px 0; font-size:18px;", "background: #fadfa3; padding:5px 0; font-size:18px;");
    if ($(".week-title").length > 0) {
      let _0x613fda = ["一", "二", "三", "四", "五", "六", "日"],
        _0x2171b8 = new Date().getDay();
      if (_0x2171b8 === 0) {
        _0x2171b8 = 7;
      }
      let _0x53e741 = $("#week-list" + _0x2171b8),
        _0x33914a = _0x53e741.children();
      _0x53e741.show();
      $(".week-key" + _0x2171b8).addClass("tim");
      let _0x254b29 = $("#dataList"),
        _0x1173a2 = _0x254b29.data(),
        _0xe9f20d = {
          "weekday": _0x613fda[_0x2171b8 - 1],
          "num": _0x1173a2.num,
          "by": _0x1173a2.by,
          "type": _0x1173a2.type
        };
      HTML.Skeleton(_0x33914a, 3, "vod");
      _0x138955(_0xe9f20d, _0x33914a, _0x1173a2);
      $(".week-title .week-select a").click(function () {
        $(this).addClass("tim").siblings().removeClass("tim");
        let _0x4dcbc2 = $(this).data();
        $(".wow").hide();
        _0x53e741 = $("#week-list" + _0x4dcbc2.index);
        _0x53e741.show();
        _0x33914a = _0x53e741.children();
        if (_0x33914a.html().length > 50) return;
        _0xe9f20d.weekday = _0x4dcbc2.val;
        HTML.Skeleton(_0x33914a, 3, "vod");
        _0x138955(_0xe9f20d, _0x33914a, _0x1173a2);
      });
    }
    function _0x138955(_0x43fc13, _0x471af3, _0x41774b) {
      setTimeout(function () {
        let _0x4c5fec = [],
          _0x53987c = Math.round(new Date() / 1000),
          _0x53238e = _0x43fc13;
        _0x53238e.time = _0x53987c;
        _0x53238e.key = EC.Md5(_0x53987c);
        EC.Ajax(_0x41774b.api, "post", "json", _0x53238e, function (_0x385183) {
          if (Number(_0x385183.code) === 1) {
            _0x4c5fec = HTML.Art(_0x385183, _0x41774b);
            if (EC.flow.empty(_0x385183.list.length, _0x471af3)) return;
            _0x471af3.html(_0x4c5fec.join(""));
            EC.Init.LazyLoad.update();
            EC.Style.Footer();
            $(".lang-bnt").length === 1 && zh_tranBody();
          } else Number(_0x385183.code) === 2 ? $(".flow-more").html(_0x385183.msg) : _EC.Pop.Msg(language["27"] + _0x385183.msg, "", "error");
        }, function () {
          _EC.Pop.Msg(language["28"], "", "error");
        });
      }, 100);
    }
  },
  "Style": {
    "Init": function () {
      let _0x2dba79 = $(".theme-style"),
        _0x4d5f77 = EC.Cookie.Get("ec-wap_style");
      !EC.Empty(_0x4d5f77) && ($("body").attr("class", _0x4d5f77), _0x4d5f77 === "theme1" ? _0x2dba79.html("&#xe574;").attr("data-id", 1) : _0x2dba79.html("&#xe575;").attr("data-id", 2));
      _0x2dba79.click(function () {
        EC.Style.Switch(_0x2dba79);
      });
    },
    "Set": function (_0x3839a1) {
      EC.Cookie.Set("ec-wap_style", _0x3839a1);
    },
    "Switch": function (_0xbc2bff) {
      let _0xb5a3c4 = _0xbc2bff.attr("data-id");
      Number(_0xb5a3c4) === 1 ? ($("body").attr("class", "theme2"), _0xbc2bff.html("&#xe575;").attr("data-id", 2), EC.Style.Set("theme2")) : ($("body").attr("class", "theme1"), _0xbc2bff.html("&#xe574;").attr("data-id", 1), EC.Style.Set("theme1"));
    },
    "Footer": function () {
      $(".footer").removeClass("footerLess");
      if ($(document.body).height() < $(window).height()) $(".footer").addClass("footerLess");else {
        $(".footer").removeClass("footerLess");
      }
    }
  },
  "Cookie": {
    "Set": function (_0x5ab75f, _0x3392d2, _0x207e9c) {
      let _0x411279 = new Date();
      _0x411279.setTime(_0x411279.getTime() + _0x207e9c * 24 * 60 * 60 * 1000);
      document.cookie = _0x5ab75f + "=" + encodeURIComponent(_0x3392d2) + ";path=/;expires=" + _0x411279.toUTCString();
    },
    "Get": function (_0x20d063) {
      let _0x81b365 = document.cookie.match(new RegExp("(^| )" + _0x20d063 + "=([^;]*)(;|$)"));
      if (_0x81b365 != null) return decodeURIComponent(_0x81b365[2]);
    },
    "Del": function (_0x311811) {
      let _0x142ca4 = new Date();
      _0x142ca4.setTime(_0x142ca4.getTime() - 1);
      let _0x248209 = this.Get(_0x311811);
      _0x248209 != null && (document.cookie = _0x311811 + "=" + encodeURIComponent(_0x248209) + ";path=/;expires=" + _0x142ca4.toUTCString());
    }
  },
  "Empty": function (_0x381dba) {
    return _0x381dba == null || _0x381dba === "";
  },
  "GoBack": function () {
    let _0x5dad99 = document.domain;
    if (document.referrer.indexOf(_0x5dad99) > 0) {
      history.back();
    } else window.location = "//" + _0x5dad99;
  },
  "Ajax": function (_0x62c1df, _0x132ce2, _0x3f7b9d, _0x48a3c4, _0x3aed61, _0x19d483, _0x223271) {
    _0x132ce2 = _0x132ce2 || "get";
    _0x3f7b9d = _0x3f7b9d || "json";
    _0x48a3c4 = _0x48a3c4 || "";
    _0x19d483 = _0x19d483 || "";
    _0x223271 = _0x223271 || "";
    $.ajax({
      "url": _0x62c1df,
      "type": _0x132ce2,
      "dataType": _0x3f7b9d,
      "data": _0x48a3c4,
      "timeout": 5000,
      "beforeSend": function (_0x17c269) {},
      "error": function (_0x1625c3, _0xe1d31, _0x340f42) {
        if (_0x19d483) _0x19d483(_0x1625c3, _0xe1d31, _0x340f42);
      },
      "success": function (_0x25e0c2) {
        _0x3aed61(_0x25e0c2);
      },
      "complete": function (_0x32b91c, _0x1b9e49) {
        if (_0x223271) _0x223271(_0x32b91c, _0x1b9e49);
      }
    });
  },
  "flow": {
    "load": function (_0x553935) {
      _0x553935 = _0x553935 || {};
      let _0x84a7b6 = this,
        _0x304379 = 0,
        _0x139e1d,
        _0x54df16,
        _0xe9265e,
        _0x2ff7b0 = $(_0x553935.elem);
      if (!_0x2ff7b0[0]) return;
      let _0x12f7e5 = $(_0x553935.scrollElem || document),
        _0x291411 = _0x553935.mb || 50,
        _0x3c8afc = "isAuto" in _0x553935 ? _0x553935.isAuto : true,
        _0x5b31a8 = _0x553935.end || language["29"],
        _0x240412 = _0x553935.scrollElem && _0x553935.scrollElem !== document,
        _0x444995 = "<i class=\"fa ds-jiantouyou\"></i>" + language["30"],
        _0x4d2bc3 = $("<div class=\"flow-more cor5\"><a href=\"javascript:;\">" + _0x444995 + "</a></div>");
      !_0x2ff7b0.find(".flow-more")[0] && _0x2ff7b0.append(_0x4d2bc3);
      let _0xf7001a = function (_0x12cb6c, _0x3990a1) {
          Number(_0x304379) === 1 && $(".flow-more").siblings().remove();
          _0x12cb6c = $(_0x12cb6c);
          _0x4d2bc3.before(_0x12cb6c);
          _0x3990a1 = Number(_0x3990a1) === 0 ? true : null;
          _0x3990a1 ? _0x4d2bc3.html(_0x5b31a8) : _0x4d2bc3.find("a").html(_0x444995);
          _0x54df16 = _0x3990a1;
          _0x139e1d = null;
          EC.Init.LazyLoad.update();
        },
        _0x909b7a = function () {
          _0x139e1d = true;
          _0x4d2bc3.find("a").html("<i class=\"loading3\"></i>" + language["31"]);
          typeof _0x553935.done === "function" && _0x553935.done(++_0x304379, _0xf7001a, _0x2ff7b0);
        };
      _0x909b7a();
      _0x4d2bc3.find("a").on("click", function () {
        if (_0x54df16) return;
        _0x139e1d || _0x909b7a();
      });
      if (!_0x3c8afc) return _0x84a7b6;
      return _0x12f7e5.off("scroll"), _0x12f7e5.on("scroll", function () {
        let _0x102a1e = $(this),
          _0x400711 = _0x102a1e.scrollTop();
        if (_0xe9265e) clearTimeout(_0xe9265e);
        if (_0x54df16 || !_0x2ff7b0.width()) return;
        _0xe9265e = setTimeout(function () {
          let _0x3727fb = _0x240412 ? _0x102a1e.height() : $(window).height(),
            _0x57e27c = _0x240412 ? _0x102a1e.prop("scrollHeight") : document.documentElement.scrollHeight;
          _0x57e27c - _0x400711 - _0x3727fb <= _0x291411 && (_0x139e1d || _0x909b7a());
        }, 100);
      }), _0x84a7b6;
    },
    "empty": function (_0x5d0883, _0x59fa8f) {
      if (Number(_0x5d0883) === 0) return _0x59fa8f.html("<div class=\"null cor5\"><img src=\"" + maccms.path2 + "static/ds4/img/null.png\" alt=\"" + language["2"] + "\"><span>" + language["32"] + "</span></div>"), true;
      return false;
    },
    "get": function (_0x552633, _0x59ec38, _0x553d6e, _0x30bd07) {
      _0x59ec38.length > 0 && EC.flow.load({
        "elem": "#dataList",
        "isAuto": _0x553d6e.pattern,
        "end": _0x553d6e.txt,
        "done": function (_0x3cabe8, _0x9f8307, _0x2ccd43) {
          setTimeout(function () {
            let _0x17421f = [],
              _0x326349 = Math.ceil(new Date().getTime() / 1000),
              _0xd74b6 = $.extend(_0x552633, {
                "page": _0x3cabe8,
                "time": _0x326349,
                "key": EC.Md5(_0x326349)
              });
            EC.Ajax(_0x553d6e.api, "post", "json", _0xd74b6, function (_0x43cf91) {
              if (Number(_0x43cf91.code) === 1) {
                if (EC.flow.empty(_0x43cf91.list.length, _0x2ccd43)) return;
                _0x17421f = HTML.Art(_0x43cf91, _0x553d6e);
                _0x9f8307(_0x17421f.join(""), _0x3cabe8 < _0x43cf91.pagecount);
                _0x30bd07();
                EC.Style.Footer();
                $(".lang-bnt").length === 1 && zh_tranBody();
              } else Number(_0x43cf91.code) === 2 ? $(".flow-more").html(_0x43cf91.msg) : _EC.Pop.Msg(language["27"] + _0x43cf91.msg, "", "error");
            }, function () {
              _EC.Pop.Msg(language["28"], "", "error");
            });
          }, 100);
        }
      });
    }
  },
  "Copy": {
    "Init": function () {
      $(".play-score .score-title").click(function () {
        EC.Pop.Show($("#rating").prop("outerHTML") + "<p>本影片总共" + $("#rating").data("num") + "次评分</p>", language["33"], function () {});
      });
      EC.Width < 767 ? ($(".play-score").click(function () {
        EC.Pop.Show($("#rating").prop("outerHTML"), language["33"], function () {});
      }), $(".vod-detail-share").click(function () {
        $(".vod-detail .share-box").remove();
        let _0x1ba03a = "<div class=\"cor5 radius\"><span class=\"share-tips\">" + language["34"] + "</span><span id=\"bar\" class=\"share-url bj cor5\">" + window.location.href + $(document).attr("title") + "</span><button type=\"button\" class=\"share-copy bj2 ho radius copyBtn\" data-clipboard-action=\"copy\" data-clipboard-target=\"#bar\">" + language["35"] + "</button></div>";
        EC.Pop.Show(_0x1ba03a, language["18"], function () {
          $(document).on("click", ".copyBtn", function () {
            _EC.Pop.Msg(language["36"], "", "success");
            $(".window").remove();
          });
        });
        new ClipboardJS(".copyBtn");
      })) : ($(".share-url").html(window.location.href + $(document).attr("title")), new ClipboardJS(".copyBtn"), EC.Copy.Qrcode(), $(".vod-detail-share").hover(function () {
        $(".vod-detail .share-box").show();
        $(document).on("click", ".copyBtn", function () {
          $(".vod-detail .share-box").hide();
          _EC.Pop.Msg(language["36"], "", "success");
        });
      }, function () {
        $(".vod-detail .share-box").hide();
      }));
      $(".player-share-button").click(function () {
        $(".player-share-box").fadeToggle();
        $(".charge,.tips-box").hide();
        $(".player-share-box .copyBtn").click(function () {
          _EC.Pop.Msg(language["36"], "", "success");
          $(".player-share-box").slideUp();
        });
      });
      let _0x138633 = new ClipboardJS(".CopyUel");
      $(".CopyUel").click(function () {
        _0x138633.on("success", function () {
          _EC.Pop.Msg(language["37"], "", "success");
        });
        _0x138633.on("error", function () {
          _EC.Pop.Msg(language["38"], "", "error");
        });
      });
    },
    "Qrcode": function () {
      $(".hl-cans").each(function () {
        if ($(this).length) {
          $(this).qrcode({
            "width": 120,
            "height": 120,
            "text": encodeURI(window.location.href)
          });
          function _0x1dbe27(_0x4eaed1) {
            let _0x3ca3a5 = new Image();
            return _0x3ca3a5.src = _0x4eaed1.toDataURL("image/png"), _0x3ca3a5;
          }
          let _0x43ee7e = $("canvas")[0],
            _0x19a673 = _0x1dbe27(_0x43ee7e);
          $(this).next(".share-pic").append(_0x19a673);
        }
      });
    }
  },
  "Swiper": {
    "Navs": function () {
      new Swiper(".nav-swiper", {
        "observer": true,
        "freeMode": true,
        "slidesPerView": "auto",
        "direction": "horizontal",
        "on": {
          "init": function () {
            EC.Swiper.Nav(this.$el, this.$wrapperEl, this.virtualSize);
          },
          "observerUpdate": function () {
            EC.Swiper.Nav(this.$el, this.$wrapperEl, this.virtualSize);
          }
        }
      });
    },
    "Nav": function (_0xc26af3, _0x49bdc2, _0x49c19d) {
      if (_0xc26af3.find(".nav-dt").length > 0) {
        let _0x4b05c3 = _0xc26af3.find(".nav-dt").outerWidth(true),
          _0x3f2bf8 = _0xc26af3.find(".nav-dt")[0].offsetLeft,
          _0x3c306d = _0x49bdc2.parent().outerWidth(true),
          _0x5a9075 = parseInt(_0x49c19d);
        _0x49bdc2.transition(300);
        if (_0x3f2bf8 < (_0x3c306d - parseInt(_0x4b05c3)) / 2) _0x49bdc2.transform("translate3d(0px,0px,0px)");else _0x3f2bf8 > _0x5a9075 - (parseInt(_0x4b05c3) + _0x3c306d) / 2 ? _0x49bdc2.transform("translate3d(" + (_0x3c306d - _0x5a9075) + "px,0px,0px)") : _0x49bdc2.transform("translate3d(" + ((_0x3c306d - parseInt(_0x4b05c3)) / 2 - _0x3f2bf8) + "px,0px,0px)");
      }
    },
    "Slide": function () {
      new Swiper(".slide-swiper", {
        "autoplay": true,
        "loop": true,
        "slidesPerView": 1
      });
      new Swiper(".mySwiper", {
        "loop": true,
        "autoplay": true,
        "clickable": true,
        "slidesPerView": 1,
        "pagination": {
          "el": ".swiper-pagination"
        }
      });
      new Swiper(".slide-swiper2", {
        "autoplay": {
          "disableOnInteraction": false
        },
        "loop": true,
        "slidesPerView": 1,
        "on": {
          "init": function () {
            let _0x5234b8 = $(".lazy-p").eq(1).css("backgroundImage");
            $(".slide-time-ios").css("backgroundImage", _0x5234b8);
          },
          "slideChangeTransitionEnd": function () {
            let _0x1962ce = $(".lazy-p").eq(this.realIndex - 1).css("backgroundImage");
            $(".slide-time-ios").css("backgroundImage", _0x1962ce);
          }
        }
      });
    }
  },
  "Actor": {
    "Detail": function () {
      new Swiper(".list-swiper", {
        "slidesPerView": 2,
        "slidesPerGroup": 2,
        "observer": true,
        "navigation": {
          "nextEl": ".swiper-button-next",
          "prevEl": ".swiper-button-prev"
        },
        "breakpoints": {
          1692: {
            "slidesPerView": 6,
            "slidesPerGroup": 6
          },
          1330: {
            "slidesPerView": 5,
            "slidesPerGroup": 5
          },
          768: {
            "slidesPerView": 4,
            "slidesPerGroup": 4
          },
          560: {
            "slidesPerView": 3,
            "slidesPerGroup": 3
          }
        }
      });
      let _0x17c7e0 = $(".star-works .actor-api");
      _0x17c7e0.length > 0 && ($(".star-works .public-list-box").length > 0 ? _0x4e811f($(".star-active").attr("data-actor")) : $(".star-works").hide());
      $(".star-works-top .public-list-box").click(function () {
        $(this).addClass("star-active").siblings().removeClass("star-active");
        _0x4e811f($(this).attr("data-actor"));
      });
      function _0x4e811f(_0x409391) {
        let _0x2ec6f7 = "";
        for (let _0x515bb0 = 0; _0x515bb0 < 9; _0x515bb0++) {
          _0x2ec6f7 = _0x2ec6f7 + "<div class=\"public-list-box public-pic-b swiper-slide\"><div class=\"public-list-div\">" + "<a class=\"public-list-exp\"><div class=\"lazy box\"><span class=\"loadIcon spin-dot-spin\"><i class=\"spin-dot-item\"></i><i class=\"spin-dot-item\"></i>" + "<i class=\"spin-dot-item\"></i><i class=\"spin-dot-item\"></i></span></div></a></div><div class=\"public-list-button\"><a class=\"time-title box radius\"></a>" + "</div></div>";
        }
        _0x17c7e0.html(_0x2ec6f7);
        EC.Ajax(maccms.path + "/index.php/api/actor_vod_api?name=" + _0x409391, "get", "json", "", function (_0xecc945) {
          if (Number(_0xecc945.code) === 1) {
            _0x2ec6f7 = "";
            $.each(_0xecc945.list, function (_0x394253, _0x4798f6) {
              _0x2ec6f7 = _0x2ec6f7 + "<div class=\"public-list-box public-pic-" + _0xecc945.ajax.vod_pic + " swiper-slide\">\n" + "    <div class=\"public-list-div public-list-bj\">\n" + "        <a" + HTML.Target(_0xecc945.ajax.vod_target) + " class=\"public-list-exp\" href=\"" + _0x4798f6.url + "\" title=\"" + _0x4798f6.name + "\">\n" + "            <img class=\"lazy lazy1 gen-movie-img " + maccms.vod_mask + "\" referrerpolicy=\"no-referrer\" src=\"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==\" alt=\"封面图\" data-src=\"" + _0x4798f6.pic + "\" />\n" + "            <span class=\"public-bg\"></span>\n" + "            <div class=\"public-list-title\">\n" + "                <span" + HTML.Target(_0xecc945.ajax.vod_target) + " class=\"time-title hide ft4\" title=\"" + _0x4798f6.name + "\">" + _0x4798f6.name + "</span>\n" + "            </div>\n" + "        </a>\n" + "    </div>\n" + "</div>";
            });
            _0x17c7e0.html(_0x2ec6f7);
            EC.Init.LazyLoad.update();
            $(".lang-bnt").length === 1 && zh_tranBody();
          } else _EC.Pop.Msg(language["39"], "", "error");
        });
      }
    }
  },
  "Pop": {
    "Uid": "DCC147D11943AF75",
    "Drawer": function (_0xba688e, _0xfca056) {
      if ($(".drawer-list").length > 0) {
        _EC.Pop.Msg(language["40"], "", "error");
        return;
      }
      $("body").append("<div class=\"drawer-list\"><div class=\"drawer-list-bg box-bg ease\" style=\"display:none\"></div><div class=\"drawer-list-box bj3\"></div></div>");
      $(".drawer-list-box").html(_0xba688e);
      _0xfca056();
      setTimeout(function () {
        $(".drawer-list-bg").css({
          "display": "block"
        });
        $("body").css({
          "height": "100%",
          "width": "100%",
          "overflow": "hidden"
        });
        $(".drawer-list").addClass("drawer-show");
      }, 0);
      $(".drawer-list-bg,.btn-close").on("click", function () {
        EC.Pop.DrawerDel();
      }).on("touchmove", function () {
        EC.Pop.DrawerDel();
      });
    },
    "DrawerDel": function () {
      $(".drawer-list-box").addClass("drawer-out");
      $("body").css({
        "height": "",
        "width": "",
        "overflow": ""
      });
      $(".drawer-list-bg").css({
        "display": "none"
      });
      setTimeout(function () {
        $(".drawer-list").remove();
      }, 100);
    },
    "Show": function (_0x564e6f, _0x3841d8, _0x2c9274) {
      Number($(".window").length) !== 1 && EC.Pop.RemoveWin();
      $("body").append("<div class=\"window\"><div class=\"box-bg\"></div><div class=\"window-box\"><div class=\"topfadeInUp animated bj3 cor4\"><div class=\"window-title rel\"><h2 class=\"subscript ft4 br\"></h2><a class=\"window-off fa ds-guanbi\"></a></div><div class=\"window-content\"></div></div></div></div>");
      $(".window .subscript").html(_0x3841d8);
      $(".window-content").html(_0x564e6f);
      $(".window-box").addClass("window-show");
      $(document).on("click", ".box-bg", function () {
        $(this).parent().remove();
      });
      $(document).on("click", ".window-off", function () {
        $(this).parent().parent().parent().parent().remove();
      });
      _0x2c9274();
    },
    "RemoveWin": function () {
      $(".window").remove();
    }
  },
  "Toggle": function () {
    $(".switch-button a").click(function () {
      $(this).addClass("selected").siblings().removeClass("selected");
      let _0x5c2608 = $(".switch-button a").index(this),
        _0x1aff3a = $(".switch-box .check").eq(_0x5c2608);
      _0x1aff3a.fadeIn(800).siblings().hide();
      _0x1aff3a.addClass("selected").siblings().removeClass("selected");
    });
  },
  "player": {
    "player_jx": function (_0x1c308e, _0x40ac22) {
      let _0x4614c4 = {},
        _0x45bf38 = _0x1c308e.split("#");
      for (let _0x2c8ef6 = 0; _0x2c8ef6 < _0x45bf38.length; _0x2c8ef6++) {
        let _0x257385 = _0x45bf38[_0x2c8ef6].split("$"),
          _0x191c9d = _0x257385[1].split(",");
        for (let _0x13e62c = 0; _0x13e62c < _0x191c9d.length; _0x13e62c++) {
          _0x4614c4.hasOwnProperty(_0x191c9d[_0x13e62c]) ? _0x4614c4[_0x191c9d[_0x13e62c]][Object.keys(_0x4614c4[_0x191c9d[_0x13e62c]]).length] = {
            "name": _0x257385[0],
            "api": _0x257385[2]
          } : _0x4614c4[_0x191c9d[_0x13e62c]] = {
            0: {
              "name": _0x257385[0],
              "api": _0x257385[2]
            }
          };
        }
      }
      let _0x2fc313 = "";
      for (let _0x4d1a35 in _0x4614c4) {
        if (_0x4d1a35 == _0x40ac22) {
          let _0x3ccd74 = _0x4614c4[_0x4d1a35];
          for (let _0x1c1441 = 0; _0x1c1441 < Object.keys(_0x3ccd74).length; _0x1c1441++) {
            !EC.Empty(maccms.jx_index) && _0x1c1441 == maccms.jx_index ? _0x2fc313 = _0x2fc313 + "<a class=\"box radius hide border bj2\" href=\"javascript:\" data-api=\"" + _0x3ccd74[_0x1c1441].api + "\">" + _0x3ccd74[_0x1c1441].name + "</a>" : _0x2fc313 = _0x2fc313 + "<a class=\"box radius hide border\" href=\"javascript:\" data-api=\"" + _0x3ccd74[_0x1c1441].api + "\">" + _0x3ccd74[_0x1c1441].name + "</a>";
          }
        }
      }
      _0x2fc313.length > 1 && $(".line-switch").html(_0x2fc313);
    }
  },
  "User": {
    "BoxShow": 0,
    "IsLogin": 0,
    "Init": function () {
      !EC.Empty(EC.Cookie.Get("user_id")) && (EC.User.IsLogin = 1);
      $(document).on("click", ".head-user", function () {
        EC.Empty(EC.Cookie.Get("user_id")) ? EC.User.Login() : window.location.href = $(this).attr("data-url");
      });
      $(document).on("click", ".head-user-out", function () {
        EC.User.Logout();
      });
    },
    "Login": function () {
      EC.Ajax(maccms.path + "/index.php/user/ajax_login", "post", "json", "", function (_0x1b042d) {
        EC.Pop.Show(_0x1b042d, language["41"], function () {
          $("body").on("click", "#wp-submit", function () {
            $(this).unbind("click");
            EC.Ajax(maccms.path + "/index.php/user/login", "post", "json", $(".login-form").serialize(), function (_0x51cfd7) {
              _EC.Pop.Msg(_0x51cfd7.msg, "", "error");
              Number(_0x51cfd7.code) === 1 && location.reload();
            });
          });
        });
      }, function () {
        _EC.Pop.Msg(language["42"], "", "error");
      });
    },
    "Logout": function () {
      $(this).unbind("click");
      EC.Ajax(maccms.path + "/index.php/user/logout", "post", "json", "", function (_0x5a21c0) {
        _EC.Pop.Msg(_0x5a21c0.msg);
        Number(_0x5a21c0.code) === 1 && location.reload();
      });
    },
    "Collection": function () {
      $("body").on("click", ".collection", function () {
        if (Number(EC.User.IsLogin) === 0) {
          EC.User.Login();
          return;
        }
        let _0x2f51d2 = $(this);
        _0x2f51d2.attr("data-id") && EC.Ajax(maccms.path + "/index.php/user/ajax_ulog/?ac=set&mid=" + _0x2f51d2.attr("data-mid") + "&id=" + _0x2f51d2.attr("data-id") + "&type=" + _0x2f51d2.attr("data-type"), "get", "json", "", function () {
          _EC.Pop.Msg(language["61"]);
        });
      });
    }
  },
  "Ulog": {
    "Init": function () {
      EC.Ulog.Set();
    },
    "Set": function () {
      let _0x3db1ea = $(".ds-log-set");
      _0x3db1ea.attr("data-mid") && $.get(maccms.path + "/index.php/api/ulog/?ac=set&mid=" + _0x3db1ea.attr("data-mid") + "&id=" + _0x3db1ea.attr("data-id") + "&sid=" + _0x3db1ea.attr("data-sid") + "&nid=" + _0x3db1ea.attr("data-nid") + "&type=" + _0x3db1ea.attr("data-type"));
    }
  },
  "Hits": {
    "Init": function () {
      let _0xe8517d = $(".ds-hits");
      if (Number(_0xe8517d.length) === 0) return;
      EC.Ajax(maccms.path + "/index.php/ajax/hits?mid=" + _0xe8517d.attr("data-mid") + "&id=" + _0xe8517d.attr("data-id") + "&type=update", "get", "json", "", function (_0x238a69) {
        Number(_0x238a69.code) === 1 && $(".ds-hits").each(function (_0x3acc09) {
          let _0x79f1f = $(".ds-hits").eq(_0x3acc09).attr("data-type");
          _0x79f1f !== "insert" && $("." + _0x79f1f).html(eval("(r.data." + _0x79f1f + ")"));
        });
      });
    }
  },
  "Md5": function (_0x3de84f) {
    return hex_md5("DS" + _0x3de84f + EC.Pop.Uid);
  },
  "Score": function () {
    let _0x3e71eb = 0;
    $(document).on("click", "#rating li", function () {
      if (_0x3e71eb > 0) _EC.Pop.Msg(language["43"]);else {
        let _0xd3f9fd = $("#rating").data();
        EC.Ajax(maccms.path + "/index.php/ajax/score?mid=" + _0xd3f9fd.mid + "&id=" + _0xd3f9fd.id + "&score=" + $(this).attr("val") * 2, "post", "json", "", function (_0x31190b) {
          _EC.Pop.Msg(_0x31190b.msg);
          _0x3e71eb = 1;
        }, function () {
          _EC.Pop.Msg(language["44"], "", "error");
        });
      }
      $(this).nextAll().removeClass("active");
      $(this).prevAll().addClass("active");
      $(this).addClass("active");
    });
  },
  "Suggest": {
    "Init": function (_0x3883ad, _0x41effc) {
      if (Number(maccms.so_off) === 1) try {
        $(_0x3883ad).autocomplete(maccms.path + "/index.php/ajax/suggest?mid=" + _0x41effc, {
          "inputClass": "search-input",
          "resultsClass": "results",
          "loadingClass": "loading",
          "appendTo": ".completion",
          "minChars": 1,
          "matchSubset": 0,
          "cacheLength": 10,
          "multiple": false,
          "matchContains": true,
          "autoFill": false,
          "dataType": "json",
          "parse": function (_0x337db8) {
            if (Number(_0x337db8.code) === 1) {
              let _0x1679ef = [];
              return $.each(_0x337db8.list, function (_0x5be04c, _0x8723f8) {
                _0x8723f8.url = _0x337db8.url;
                _0x1679ef[_0x5be04c] = {
                  "data": _0x8723f8
                };
              }), _0x1679ef;
            } else return {
              "data": ""
            };
          },
          "formatItem": function (_0x231e55) {
            return _0x231e55.name;
          },
          "formatResult": function (_0x176e40) {
            return _0x176e40.text;
          }
        }).result(function (_0x3dd142, _0x3d7c28) {
          $(_0x3883ad).val(_0x3d7c28.name);
          let _0x1e8222 = _0x3d7c28.url.replace("mac_wd", encodeURIComponent(_0x3d7c28.name));
          EC.Records.Set(_0x3d7c28.name, _0x1e8222);
          location.href = _0x1e8222;
        });
      } catch (_0x264319) {}
    }
  },
  "History": {
    "BoxShow": 0,
    "Limit": 30,
    "Days": 7,
    "Json": "",
    "Msg": "<div class=\"null cor5\"><img src=\"" + maccms.path2 + "static/ds4/img/null.png\" alt=\"" + language["2"] + "\"><span>" + language["45"] + "</span></div>",
    "Init": function () {
      let _0x4b94e4 = [];
      if (this.Json) _0x4b94e4 = this.Json;else {
        let _0x172aed = EC.Cookie.Get("mac_history");
        !EC.Empty(_0x172aed) && (_0x4b94e4 = eval(_0x172aed));
      }
      let _0x31b53f = "";
      if (_0x4b94e4.length > 0) for (let _0x5f42e6 = 0; _0x5f42e6 < _0x4b94e4.length; _0x5f42e6++) {
        _0x31b53f += "<li><a class=\"history-a flex\" href=\"" + _0x4b94e4[_0x5f42e6].link + "\" target=\"video\" title=\"" + _0x4b94e4[_0x5f42e6].name + "\"><img class=\"lazy lazy1\" referrerpolicy=\"no-referrer\" alt=\"" + _0x4b94e4[_0x5f42e6].name + "\" data-src=\"" + _0x4b94e4[_0x5f42e6].pic + "\"/>" + "<div class=\"history-r\"><div class=\"hide2\">" + _0x4b94e4[_0x5f42e6].name + "</div><div><span class=\"cor5\">" + _0x4b94e4[_0x5f42e6].mid + "</span></div></div></a></li>";
      } else _0x31b53f += this.Msg;
      $(".locality-history ul").html(_0x31b53f);
      $("#l_history").click(function () {
        EC.History.Clear();
      });
      let _0x3f3e07 = $(".ds-history-set");
      _0x3f3e07.attr("data-name") && EC.History.Set(_0x3f3e07.attr("data-name"), _0x3f3e07.attr("data-link"), _0x3f3e07.attr("data-pic"), _0x3f3e07.attr("data-mid"));
    },
    "Set": function (_0x5c76fa, _0x4ce175, _0x4140db, _0x365c9f) {
      !_0x4ce175 && (_0x4ce175 = document.URL);
      let _0x16e637 = EC.Cookie.Get("mac_history"),
        _0x371593 = "";
      if (!EC.Empty(_0x16e637)) {
        this.Json = eval(_0x16e637);
        for (let _0x34f01c = 0; _0x34f01c < this.Json.length; _0x34f01c++) {
          if (this.Json[_0x34f01c].link === _0x4ce175) return false;
        }
        _0x371593 = "{log:[{\"name\":\"" + _0x5c76fa + "\",\"link\":\"" + _0x4ce175 + "\",\"pic\":\"" + _0x4140db + "\",\"mid\":\"" + _0x365c9f + "\"},";
        for (let _0x53290f = 0; _0x53290f < this.Json.length; _0x53290f++) {
          if (_0x53290f <= this.Limit && this.Json[_0x53290f]) {
            let _0x4e03a3 = this.Json[_0x53290f].name;
            if (_0x4e03a3 === _0x5c76fa) {} else _0x371593 += "{\"name\":\"" + this.Json[_0x53290f].name + "\",\"link\":\"" + this.Json[_0x53290f].link + "\",\"pic\":\"" + this.Json[_0x53290f].pic + "\",\"mid\":\"" + this.Json[_0x53290f].mid + "\"},";
          } else {
            break;
          }
        }
        _0x371593 = _0x371593.substring(0, _0x371593.lastIndexOf(","));
        _0x371593 += "]}";
      } else _0x371593 = "{log:[{\"name\":\"" + _0x5c76fa + "\",\"link\":\"" + _0x4ce175 + "\",\"pic\":\"" + _0x4140db + "\",\"mid\":\"" + _0x365c9f + "\"}]}";
      this.Json = eval(_0x371593);
      EC.Cookie.Set("mac_history", _0x371593, this.Days);
    },
    "Clear": function () {
      EC.Cookie.Del("mac_history");
      $(".locality-history ul").html(this.Msg);
    }
  },
  "Records": {
    "Limit": 8,
    "Days": 7,
    "Json": "",
    "Init": function () {
      EC.Records.Click();
      let _0xe16770 = [];
      if (this.Json) _0xe16770 = this.Json;else {
        let _0x289b03 = EC.Cookie.Get("DS_Records");
        !EC.Empty(_0x289b03) && (_0xe16770 = eval(_0x289b03));
      }
      if (_0xe16770.length > 0) {
        let _0xcb08ab = "";
        for (let _0x1047f9 = 0; _0x1047f9 < _0xe16770.length; _0x1047f9++) {
          _0xcb08ab += "<a href=\"" + _0xe16770[_0x1047f9].url + "?wd=" + _0xe16770[_0x1047f9].name + "\" class=\"public-list-b bj border\">" + _0xe16770[_0x1047f9].name + "</a>";
        }
        $(".records-list").html(_0xcb08ab);
      } else $(".records-list").html("<span class=\"cor5\">" + language["46"] + "</span>");
      $(document).on("click", "#re_del", function () {
        EC.Records.Clear();
      });
    },
    "Set": function (_0x5d4e6f, _0x2b3595) {
      let _0x199dbb = EC.Cookie.Get("DS_Records"),
        _0x59c845 = {};
      if (!EC.Empty(_0x199dbb)) {
        this.Json = eval(_0x199dbb);
        for (let _0xf2c4aa = 0; _0xf2c4aa < this.Json.length; _0xf2c4aa++) {
          if (this.Json[_0xf2c4aa].name === _0x5d4e6f) {
            return false;
          }
        }
        _0x59c845 = "{log:[{\"name\":\"" + _0x5d4e6f + "\",\"url\":\"" + _0x2b3595 + "\"},";
        for (let _0x4f6ffa = 0; _0x4f6ffa < this.Json.length; _0x4f6ffa++) {
          if (_0x4f6ffa <= this.Limit && this.Json[_0x4f6ffa]) {
            let _0x3e6c16 = this.Json[_0x4f6ffa].name;
            if (_0x3e6c16 === _0x5d4e6f) {} else _0x59c845 += "{\"name\":\"" + this.Json[_0x4f6ffa].name + "\",\"url\":\"" + this.Json[_0x4f6ffa].url + "\"},";
          } else {
            break;
          }
        }
        _0x59c845 = _0x59c845.substring(0, _0x59c845.lastIndexOf(","));
        _0x59c845 += "]}";
      } else _0x59c845 = "{log:[{\"name\":\"" + _0x5d4e6f + "\",\"url\":\"" + _0x2b3595 + "\"}]}";
      this.Json = eval(_0x59c845);
      EC.Cookie.Set("DS_Records", _0x59c845, this.Days);
    },
    "Clear": function () {
      EC.Cookie.Del("DS_Records");
      $(".records-list").html("<span class=\"cor5\">" + language["47"] + "</span>");
    },
    "Click": function () {
      $(".select-name").click(function () {
        $(this).attr("data-id") === "1" ? ($(this).attr("data-id", "0").children().html("&#xe564;"), $(".select-list").show()) : ($(this).attr("data-id", "1").children().html("&#xe563;"), $(".select-list").hide());
      });
      $(".select-list span").click(function () {
        let _0x406c2d = $(this).data();
        $(".select-name").html(_0x406c2d.name + "<i class=\"fa cor4\">&#xe563;</i>").attr("data-id", "1");
        $("#search").attr("action", _0x406c2d.url);
        $(".select-list").hide();
      });
      $(".search-input-sub").click(function () {
        let _0x153cc0 = $(".search-input").val(),
          _0x581c18 = $("#search").attr("action");
        if (EC.Empty(_0x153cc0)) event.preventDefault(), _EC.Pop.Msg(language["48"], "", "error");else {
          if ($(".lang-bnt").length === 1) {
            const _0x51f301 = transChinese(_0x153cc0);
            $(".search-input").val(_0x51f301);
            _0x153cc0 = _0x51f301;
          }
          EC.Records.Set(_0x153cc0, _0x581c18);
        }
      });
    }
  },
  "Remaining": function (_0x52f866, _0x16fdfa, _0x5017a5) {
    let _0x44d9eb = _0x16fdfa - $(_0x52f866).val().length;
    if (_0x44d9eb < 0) {
      _0x44d9eb = 0;
      $(_0x52f866).val($(_0x52f866).val().substr(0, 200));
    }
    $(_0x5017a5).text(_0x44d9eb);
  },
  "Digg": function () {
    $("body").on("click", ".digg-link", function () {
      let _0x126073 = $(this);
      _0x126073.attr("data-id") && EC.Ajax(maccms.path + "/index.php/ajax/digg.html?mid=" + _0x126073.attr("data-mid") + "&id=" + _0x126073.attr("data-id") + "&type=" + _0x126073.attr("data-type"), "get", "json", "", function (_0x16c916) {
        _0x126073.addClass("disabled");
        Number(_0x16c916.code) === 1 ? _0x126073.attr("data-type") === "up" ? _0x126073.find(".digg-num").html(_0x16c916.data.up) : _0x126073.find(".digg-num").html(_0x16c916.data.down) : _EC.Pop.Msg(_0x16c916.msg);
      });
    });
  },
  "Gbook": {
    "Login": 0,
    "Verify": 0,
    "Init": function () {
      let _0x45e3a4 = $(".gbook-form").data();
      EC.Gbook.Login = _0x45e3a4.login;
      EC.Gbook.Verify = _0x45e3a4.verify;
      let _0x349e4c = $("body");
      _0x349e4c.on("keyup", ".gbook-content", function () {
        EC.Remaining($(this), 200, ".gbook_remaining");
      });
      _0x349e4c.on("focus", ".gbook-content", function () {
        Number(EC.Gbook.Login) === 1 && Number(EC.User.IsLogin) !== 1 && EC.User.Login();
      });
      _0x349e4c.on("click", ".gbook-submit", function () {
        EC.Gbook.Submit();
      });
    },
    "Show": function (_0x5739e2) {
      EC.Ajax(maccms.path + "/index.php/gbook/index?page=" + _0x5739e2, "post", "json", "", function (_0x21d507) {
        $(".mac_gbook_box").html(_0x21d507);
      }, function () {
        $(".mac_gbook_box").html(language["49"]);
      });
    },
    "Submit": function () {
      if (EC.Empty($(".gbook-content").val())) return _EC.Pop.Msg(language["50"], "", "error"), false;
      EC.Ajax(maccms.path + "/index.php/gbook/saveData", "post", "json", $(".gbook-form").serialize(), function (_0xdf4d57) {
        _EC.Pop.Msg(_0xdf4d57.msg);
        if (Number(_0xdf4d57.code) === 1) {
          location.reload();
        } else Number(EC.Gbook.Verify) === 1 && EC.Verify.Refresh();
      });
    },
    "Tg": function () {
      if (EC.Empty($(".tg-content").val())) return _EC.Pop.Msg(language["51"], "", "error"), false;
      EC.Ajax(maccms.path + "/index.php/api/tougao", "post", "json", $(".tg-form").serialize(), function (_0xa41c7f) {
        _EC.Pop.Msg(_0xa41c7f.msg);
        if (Number(_0xa41c7f.code) === 1) location.reload();else {
          EC.Verify.Refresh();
        }
      });
    },
    "Report": function (_0x43c48f) {
      EC.Ajax(maccms.path + "/index.php/gbook/report.html?id=" + _0x43c48f.id + "&name=" + encodeURIComponent(_0x43c48f.url + location.href), "post", "json", "", function (_0x274649) {
        EC.Pop.Show(_0x274649, language["52"], function () {
          let _0x300dec = $(".gbook-form").data();
          EC.Gbook.Login = _0x300dec.login;
          EC.Gbook.Verify = _0x300dec.verify;
          EC.Gbook.Init();
        });
      }, function () {
        _EC.Pop.Msg(language["49"], "", "error");
      });
    }
  },
  "Comment": {
    "Login": 0,
    "Verify": 0,
    "Init": function () {
      let _0x44e46d = $("body");
      _0x44e46d.on("click", ".comment-face-box img", function () {
        let _0x4dff33 = $(this).parent().parent().parent().parent().find(".comment-content");
        $(_0x4dff33).val($(_0x4dff33).val() + "[em:" + $(this).attr("data-id") + "]");
      });
      _0x44e46d.on("click", ".comment-face-panel", function () {
        $(this).parent().parent().find(".comment-face-box").fadeToggle();
      });
      _0x44e46d.on("click", ".face-close", function () {
        $(".comment-face-box").hide();
      });
      _0x44e46d.on("click", ".comment-page", function () {
        EC.Comment.Show($(this).attr("data-page"));
      });
      _0x44e46d.on("keyup", ".comment-content", function () {
        EC.Remaining($(this), 200, $(".comment-remaining"));
      });
      _0x44e46d.on("focus", ".comment-content", function () {
        Number(EC.Comment.Login) === 1 && Number(EC.User.IsLogin) !== 1 && EC.User.Login();
      });
      _0x44e46d.on("click", ".comment-report", function () {
        let _0x115805 = $(this);
        $(this).attr("data-id") && EC.Ajax(maccms.path + "/index.php/comment/report.html?id=" + _0x115805.attr("data-id"), "get", "json", "", function (_0x1dacde) {
          _0x115805.addClass("disabled");
          _EC.Pop.Msg(language["53"], "", "success");
        });
      });
      _0x44e46d.on("click", ".comment-reply-button", function () {
        let _0x2cb660 = $(this);
        if (_0x2cb660.attr("data-id")) {
          let _0x4acd89 = _0x2cb660.html();
          $(".comment-reply-form").remove();
          if (_0x4acd89 === language["54"]) return _0x2cb660.html("&#xe573;"), false;
          let _0x5e22d0 = $(".comment-form").prop("outerHTML"),
            _0x41923a = $(_0x5e22d0);
          _0x41923a.addClass("comment-reply-form");
          _0x41923a.find("input[name=\"comment_pid\"]").val(_0x2cb660.attr("data-id"));
          _0x2cb660.parent().parent().after(_0x41923a);
          $(".comment-reply-button").html("&#xe573;");
          _0x2cb660.html(language["54"]);
        }
      });
      _0x44e46d.on("click", ".comment-submit", function () {
        let _0x34afcd = $(this);
        EC.Comment.Submit(_0x34afcd);
      });
    },
    "Show": function (_0x4a52c1) {
      let _0x28cdce = $(".ds-comment");
      _0x28cdce.length > 0 && EC.Ajax(maccms.path + "/index.php/comment/ajax.html?rid=" + _0x28cdce.attr("data-id") + "&mid=" + _0x28cdce.attr("data-mid") + "&page=" + _0x4a52c1, "get", "json", "", function (_0x29101e) {
        $(".ds-comment").html(_0x29101e);
        $(".lang-bnt").length === 1 && zh_tranBody();
      }, function () {
        _EC.Pop.Msg(language["49"], "", "error");
      });
    },
    "Submit": function (_0x3717be) {
      let _0x1916d6 = _0x3717be.parents("form");
      if ($(_0x1916d6).find(".comment-content").val() === "") {
        return _EC.Pop.Msg(language["55"], "", "error"), false;
      }
      let _0xe27c25 = $(".ds-comment").data();
      if (EC.Empty(_0xe27c25.mid)) {
        return _EC.Pop.Msg(language["56"], "", "error"), false;
      }
      if (EC.Empty(_0xe27c25.id)) {
        return _EC.Pop.Msg(language["57"], "", "error"), false;
      }
      EC.Ajax(maccms.path + "/index.php/comment/saveData", "post", "json", $(_0x1916d6).serialize() + "&comment_mid=" + _0xe27c25.mid + "&comment_rid=" + _0xe27c25.id, function (_0x39ee87) {
        _EC.Pop.Msg(_0x39ee87.msg);
        Number(_0x39ee87.code) === 1 ? EC.Comment.Show(1) : EC.Verify.Refresh();
      });
    }
  },
  "Verify": {
    "Init": function () {
      EC.Verify.Click();
      $(".verify-submit").click(function () {
        let _0x40a418 = $("input[name=\"verify\"]").val();
        EC.Ajax(maccms.path + "/index.php/ajax/verify_check?type=" + $(this).data("type") + "&verify=" + _0x40a418, "post", "json", "", function (_0x531a52) {
          Number(_0x531a52.code) === 1 ? location.reload() : (_EC.Pop.Msg(_0x531a52.msg), EC.Verify.Refresh());
        }, function () {
          _EC.Pop.Msg(language["58"], "", "error");
          EC.Verify.Refresh();
        });
      });
    },
    "Click": function () {
      $("body").on("click", "img.ds-verify-img", function () {
        $(this).attr("src", maccms.path + "/index.php/verify/index.html?r=" + Math.random());
      });
    },
    "Refresh": function () {
      $(".ds-verify-img").attr("src", maccms.path + "/index.php/verify/index.html?r=" + Math.random());
    },
    "Show": function () {
      return "<img class=\"ds-verify-img\" src=\"" + maccms.path + "/index.php/verify/index.html?\" alt=\"" + language["19"] + "\" title=\"" + language["59"] + "\">";
    }
  },
  "QiAnDao": {
    "Fun": function (_0x5f59a8) {
      let _0x24f282 = $("#qiAnDao-list"),
        _0x588423 = "",
        _0x19e81e = new Date(),
        _0x4be9f5 = new Date(_0x19e81e.getFullYear(), parseInt(_0x19e81e.getMonth()), 1).getDay(),
        _0x17fcf2 = new Date(_0x19e81e.getFullYear(), parseInt(_0x19e81e.getMonth() + 1), 0),
        _0x105b1e = _0x17fcf2.getDate();
      $(".qiAnDao-bj").text(_0x19e81e.getMonth() + 1);
      for (let _0x321a19 = 0; _0x321a19 < 42; _0x321a19++) {
        _0x588423 += "<li></li>";
      }
      _0x24f282.html(_0x588423);
      let _0xf04a66 = _0x24f282.find("li");
      for (let _0x52ef07 = 0; _0x52ef07 < _0x105b1e; _0x52ef07++) {
        let _0x248027 = parseInt(_0x52ef07 + 1);
        _0xf04a66.eq(_0x52ef07 + _0x4be9f5).html("<em>" + _0x248027 + "</em>").addClass("date" + _0x248027);
        if (_0x5f59a8.length > 0) {
          for (let _0x3ea56 = 0; _0x3ea56 < _0x5f59a8.length; _0x3ea56++) {
            _0x248027 === _0x5f59a8[_0x3ea56] && _0xf04a66.eq(_0x52ef07 + _0x4be9f5).addClass("nav-dt");
          }
        }
      }
      $(".qiAnDao-con").after("<style>#qiAnDao-list li:nth-child(n+" + (_0x105b1e + _0x4be9f5 + 1) + ") {display: none}</style>").addClass("qiAnDao-show");
      $(".date" + _0x19e81e.getDate() + ":not(.nav-dt)").addClass("able-qiAnDao");
      $(".qiAnDao-top,.able-qiAnDao").click(function () {
        EC.Ajax(maccms.path + "/index.php/qian/sign", "get", "json", "", function (_0x191dd8) {
          Number(_0x191dd8.code) === 0 ? _EC.Pop.Msg(_0x191dd8.msg, "", "error") : (_EC.Pop.Msg(language["60"] + _0x191dd8.reward, "", "success"), $(".able-qiAnDao").addClass("nav-dt"), $(".qiAnDao-top").addClass("nav-dt"));
        }, function () {
          _EC.Pop.Msg(r.msg, "", "error");
        });
      });
      $(".qiAnDao-gz-bnt").click(function () {
        $(".qiAnDao-bottom").show();
      });
      $(".qiAnDao-bottom a").click(function () {
        $(".qiAnDao-bottom").hide();
      });
      $(".qiAnDao-gz-off").click(function () {
        $(".qiAnDao-con").hide();
      });
    },
    "Init": function () {
      $(".qiAnDao_bnt").click(function () {
        if (Number(EC.User.IsLogin) === 0) {
          EC.User.Login();
          return;
        }
        if (Number($(".qiAnDao-show").length) === 0) $("#qiAnDao_2,.qiAnDao-top").hide(), $("#qiAnDao_1,.qiAnDao-con").show(), EC.Ajax(maccms.path + "/index.php/qian/days", "get", "json", "", function (_0x3ffa0b) {
          Number(_0x3ffa0b.code) === 1 ? (EC.QiAnDao.Fun(_0x3ffa0b.data), setTimeout(function () {
            $("#qiAnDao_2,.qiAnDao-top").show();
            $("#qiAnDao_1").hide();
          }, 1000)) : ($(".qiAnDao-con").hide(), _EC.Pop.Msg(_0x3ffa0b.msg, "", "error"));
        }, function () {
          $("#qiAnDao_1").html(language["49"]);
        });else {
          $(".qiAnDao-show").show();
        }
      });
    }
  }
};
$(function () {
  EC.Style.Init();
  EC.Init();
  EC.Verify.Init();
  EC.User.Init();
  EC.Records.Init();
  EC.Suggest.Init(".mac_wd", 1, "");
  EC.History.Init();
  EC.Digg();
  EC.Score();
  EC.Copy.Init();
  EC.User.Collection();
  EC.Ulog.Init();
  EC.Hits.Init();
  EC.Toggle();
  EC.QiAnDao.Init();
});