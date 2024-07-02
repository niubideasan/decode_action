//Tue Jul 02 2024 13:05:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
!function () {
  var _0x2a6edf = function () {
    return (() => {
      var _0x18ad47,
        _0x489058,
        _0x57bd8b = {
          31092: (_0x4e811b, _0x4d95d6, _0x511972) => {
            'use strict';

            Object.defineProperty(_0x4d95d6, "__esModule", {
              value: !0
            });
            _0x4d95d6.default = void 0;
            _0x511972(39505);
            var _0x2f9418 = _0x511972(21202),
              _0x2d2575 = _0x289b8c(_0x511972(93816)),
              _0x39deee = _0x289b8c(_0x511972(74239));
            function _0x289b8c(_0x686008) {
              return _0x686008 && _0x686008.__esModule ? _0x686008 : {
                default: _0x686008
              };
            }
            const _0x47917e = Object.getPrototypeOf(_0x511972.g) || _0x511972.g;
            _0x47917e.$apis = _0x2f9418.$apis;
            _0x47917e.$utils = _0x2f9418.$utils;
            _0x47917e.$ajax = _0x2f9418.$ajax;
            _0x47917e.sensors = _0x2d2575.default;
            _0x47917e.commonParams = {
              packageName: "",
              appname: "",
              version: "",
              androidid: "",
              oaid: "",
              imei: "",
              userId: "",
              channelCode: "",
              manufacturer: "",
              mac: "",
              uid: 1,
              cnid: "",
              sceneid: ""
            };
            _0x47917e.dataSpace = {
              is_pulled: !1
            };
            _0x511972.g.sensors.setPara({
              name: "sensors",
              server_url: "http://shence.cread.com/sa?project=default",
              show_log: !1
            });
            var _0x59a3e3 = {
              data: {
                commonParams: {
                  packageName: "",
                  appname: "",
                  version: "",
                  androidid: "",
                  oaid: "",
                  imei: "",
                  userId: "",
                  channelCode: "",
                  manufacturer: "",
                  mac: "",
                  uid: 1,
                  cnid: "",
                  sceneid: ""
                },
                userId: "",
                deviceUserId: "",
                channelCode: "",
                userSource: "",
                shortcutHints: {},
                myRackList: [],
                updateBook: [],
                adData: {
                  vivoAdData: {}
                },
                ad: {
                  nativeAdVersion: "native_v1",
                  adProvider: "",
                  open: !0,
                  adConfig: {},
                  adShield: {
                    manufacturer: [],
                    version: ""
                  },
                  customAd: [],
                  promotionChannels: [],
                  adCopywriter: []
                },
                bookCoverSrc: "https://images-pro.cread.com/book_covers/",
                environment: _0x511972.g.$utils.chooseEnv(),
                deviceInfo: {
                  platformVersionCode: 1000
                },
                oaid: {},
                appInfo: {},
                GG_chaye: {
                  open: !0,
                  interval: 0
                },
                GG_204: {
                  open: !0
                },
                GG_214: {
                  open: !1
                },
                GG_319_tuichu: {
                  open: !0
                },
                GG_319_continue: {
                  open: !0
                },
                GG_323: {
                  open: !0
                },
                GG_qieping: {
                  open: !1,
                  interval: 5
                },
                urlParam: {},
                AdFree: {
                  isAdFreeTime: !1,
                  adFreeTime: 0,
                  startTime: "",
                  adProvider: "oppo"
                },
                shareKey: "",
                backBtnShow: !0,
                showInterstitial: !1,
                showReaderQuitInt: !1,
                adSpace: {},
                adAllList: {},
                callbackTime: 0,
                clickCount: 0,
                cnidInfo: "",
                show_ad_reward_video: !0,
                reader_back_video: !0,
                home_back_video: !0,
                is_support_mistake_click: !1,
                market_name_source: "",
                rewardedVideo: !1,
                playVideoNum: 0,
                others: {
                  UserAgent: "",
                  simOperator: {
                    index: 0,
                    operator: "未知"
                  },
                  networkType: {
                    index: 0,
                    type: "none"
                  },
                  applicationStore: {
                    versionCode: 0,
                    versionName: ""
                  },
                  geographicPosition: {
                    longitude: "",
                    latitude: ""
                  },
                  isAdxDeepLinkClickTurnUp: !1,
                  appList: []
                },
                startAutoClick: !0,
                huaweiAutoClick: !0,
                adFreeShow: !0,
                vivo_play_reward_video: !0,
                continueReader: !1,
                isClickAnyAdInReader: !1,
                isSeeVideo: !1,
                is_show_kaiping: !1,
                is_from_lock_screen: !1,
                is_oppo_can_auto_click: !0,
                auto_click_num: 0,
                isHotDog: "",
                pageHideNum: 0,
                clickNewWelfareAd: 1,
                pageAgainShow: 0,
                is_video_error_status: !1,
                isShowKaiping: !1,
                readerFour: !1,
                readerFourPopShowNum: 0,
                currentExposureAd: [],
                relations: [],
                cacheAd: [],
                currentExposureAdLiveliness: [],
                isInitiativeClick: !0,
                autoClickNum: 0,
                isAutoClick: !1,
                autoClickAdTotalNumber: 0,
                homeClickMillise: 0,
                releaseClickAdNumber: 0,
                isClickAd: !1,
                welfareBackImageList: [],
                jumpComplaint: !1,
                pullTimer: null,
                givenDayPurchaseNumber: 0,
                baiduInitialize: !1
              },
              onCreate() {
                this.initAppname();
                this.tongjiFn();
                this.appStartStepTwo();
                this.setAddTableStatus();
                this.setCommonParamsFn();
                this.dataCache = {};
              },
              onHide() {
                this.initAudio();
                this.$def.data.callbackTime > 0 && _0x511972.g.$utils.callbackTimeFn(!1);
                this.$def.data.others.isAdxDeepLinkClickTurnUp = !0;
              },
              onShow() {
                this.$def.data.others.isAdxDeepLinkClickTurnUp = !1;
              },
              onDestroy() {
                _0x511972.g.sensors.track("quickAppEnd", {});
              },
              onError(_0x259c9c) {
                console.error("app-error", JSON.stringify(_0x259c9c));
                _0x511972.g.sensors.track("quickAppError", {
                  details: JSON.stringify(_0x259c9c)
                });
              },
              initAppname() {
                this.$def.data.commonParams.appname = this.$data.appname;
                _0x511972.g.commonParams.appname = this.$data.appname;
                let _0x33a0a7 = this.$def.data.commonParams.appname && this.$def.data.commonParams.appname.toUpperCase();
                "XDMFTSH" === _0x33a0a7 && (_0x33a0a7 = "XIADU");
                _0x511972.g.$apis.others.appStartInit(_0x33a0a7, 1);
              },
              appStartStepTwo() {
                let _0x13181b = this.$def.data.commonParams.appname && this.$def.data.commonParams.appname.toUpperCase();
                "XDMFTSH" === _0x13181b && (_0x13181b = "XIADU");
                _0x511972.g.$apis.others.appStartInit(_0x13181b, 2);
              },
              setCommonParamsFn() {
                let _0x4f6667 = this.$def.manifest;
                this.setCommonParams("packageName", _0x4f6667.package);
                this.setCommonParams("version", _0x4f6667.versionName);
                this.setCommonParams("vcode", _0x4f6667.versionCode);
              },
              checkAppListFun() {
                !this.$def.data.others.appList.length && _0x39deee.default.length && _0x39deee.default.forEach(_0x112a13 => {
                  _0x511972.g.$utils.pkgHasInstalled(_0x112a13.pkgName).then(_0x5857cf => {
                    _0x5857cf && this.$def.data.others.appList.push(_0x112a13.pkgName);
                  });
                });
              },
              setCommonParams(_0x2ef3c7, _0x142c83) {
                _0x2ef3c7 && (_0x511972.g.commonParams[_0x2ef3c7] = _0x142c83 || "", this.$def.data.commonParams[_0x2ef3c7] = _0x142c83 || "");
                "channelCode" === _0x2ef3c7 ? (_0x511972.g.$utils.setStorage("channelCode", _0x142c83), _0x511972.g.sensors.registerApp({
                  cn_id: _0x142c83
                }), this.setCommonParams("cnid", _0x142c83)) : "userId" === _0x2ef3c7 && (_0x511972.g.$utils.setStorage("userId", _0x142c83), this.setCommonParams("uid", _0x142c83));
              },
              showNotificationFun(_0x58027f) {
                this.$def.data.urlParam.bookId && _0x58027f && setTimeout(() => _0x511972.g.$utils.notification({
                  contentTitle: _0x58027f.bookName.length > 17 ? _0x58027f.bookName.slice(0, 17) + "..." : _0x58027f.bookName,
                  contentText: "点击这里继续阅读>>",
                  uri: "/Page_Index?notice=1&jumpPage=reader&bookId=" + _0x58027f.bookId
                }), 2000);
              },
              getAppData(_0x59365c) {
                return this.dataCache[_0x59365c];
              },
              setAppData(_0x3a2ca0, _0x5a70f3) {
                this.dataCache[_0x3a2ca0] = _0x5a70f3;
              },
              tongjiFn() {
                try {
                  let _0x2ab029 = this.$def.manifest,
                    _0x3526d7 = this.$def.data;
                  _0x511972.g.sensors.registerApp({
                    appname: _0x2ab029.name,
                    package: _0x2ab029.package,
                    $app_version: _0x2ab029.versionName,
                    PlatformType: "QuickApp",
                    environment: _0x3526d7.environment
                  });
                  _0x511972.g.sensors.init(this);
                  _0x511972.g.sensors.appLaunch();
                } catch (_0x3cd0bb) {
                  console.error("tongjiFn-error", JSON.stringify(_0x3cd0bb));
                }
              },
              async setAddTableStatus() {
                let _0x181b74 = await _0x511972.g.$utils.shortcutHasInstalled();
                _0x511972.g.sensors.registerApp({
                  add_table: _0x181b74
                });
                _0x511972.g.sensors.setProfile({
                  add_table: _0x181b74
                });
              },
              async sensorsTrack(_0x49e7f, _0x14095e) {
                try {
                  let _0x13ef0f = {};
                  for (let _0x1474e2 in _0x14095e) "" !== _0x14095e[_0x1474e2] && void 0 !== _0x14095e[_0x1474e2] && (_0x13ef0f[_0x1474e2] = _0x14095e[_0x1474e2]);
                  if (_0x511972.g.sensors.track(_0x49e7f, _0x13ef0f), "quickAppAdClick" === _0x49e7f || "quickAppAdShow" === _0x49e7f) {
                    let _0x21d45a = this.$def.data.commonParams;
                    _0x511972.g.$apis.ad.getExposureAndClick({
                      type: "quickAppAdClick" === _0x49e7f ? "1" : "0",
                      appname: _0x21d45a.appname,
                      version: _0x21d45a.version,
                      cnid: _0x21d45a.channelCode,
                      packname: _0x21d45a.packageName,
                      userId: _0x21d45a.userId,
                      brand: this.$def.data.ad.adProvider.toLowerCase(),
                      manufactuter: this.$def.data.ad.adProvider.toLowerCase(),
                      platform: "android"
                    });
                  }
                  if ("add_table" === _0x49e7f) {
                    let _0x14053a = "成功" === _0x14095e.status;
                    if (_0x511972.g.sensors.registerApp({
                      add_table: _0x14053a
                    }), _0x511972.g.sensors.setProfile({
                      add_table: _0x14053a
                    }), _0x14053a) {
                      let _0x1bfc31 = this.$def.data.commonParams,
                        _0x444e15 = _0x1bfc31.appname && _0x1bfc31.appname.toUpperCase();
                      "XDMFTSH" === _0x444e15 && (_0x444e15 = "XIADU");
                      _0x511972.g.$apis.others.web_callback(_0x444e15);
                      let _0x48c1ac = this.$def.data.deviceUserId,
                        _0x4159d1 = _0x511972.g.$utils.md5(_0x48c1ac),
                        {
                          code: _0x33e07a,
                          data: _0x4927c1,
                          msg: _0x3b9aa0
                        } = await _0x511972.g.$apis.user.activeUsers({
                          androidid: _0x4159d1,
                          imei: "",
                          mac: "",
                          oaid: _0x1bfc31.oaid || "",
                          os: 0,
                          channelId: this.$def.data.channelCode,
                          packagename: this.$def.manifest.package,
                          userId: this.$def.data.userId
                        }),
                        _0x54bf8d = {};
                      _0x54bf8d = 0 === _0x33e07a ? {
                        code: _0x33e07a,
                        data: _0x4927c1,
                        msg: _0x3b9aa0,
                        status: "成功"
                      } : {
                        code: _0x33e07a,
                        data: _0x4927c1,
                        msg: _0x3b9aa0,
                        status: "失败"
                      };
                      _0x511972.g.sensors.track("quickAppInstall", _0x54bf8d);
                    }
                  }
                } catch (_0x45d9d4) {}
              },
              async getShareKey() {
                if (this.$def.data.shareKey) {
                  return this.$def.data.shareKey;
                }
                {
                  let {
                    code: _0x258721,
                    data: _0x53e9f0
                  } = await _0x511972.g.$apis.fission.shareIndex(this.$def.data.commonParams);
                  return 0 === _0x258721 || 200 === _0x258721 ? (this.$def.data.shareKey = _0x53e9f0.shareKey, this.$def.data.shareKey) : this.$def.data.shareKey;
                }
              },
              initUNION_AD_SDK() {
                if (!this.baiduInitialize) {
                  this.baiduInitialize = !0;
                  const {
                    default: _0x3db2ee
                  } = _0x511972(18900);
                  new _0x3db2ee(this);
                }
              },
              async getAdsNew() {
                let _0x32d811 = this.$def.data.commonParams,
                  _0x342bff = await _0x511972.g.$apis.ad.getAdsNew({
                    appname: _0x32d811.appname,
                    packname: _0x32d811.packageName,
                    version: _0x32d811.version,
                    cnid: _0x32d811.channelCode,
                    userId: _0x32d811.userId,
                    net: "WIFI",
                    brand: this.$def.data.ad.adProvider.toLowerCase(),
                    manufactuter: this.$def.data.ad.adProvider.toLowerCase(),
                    imei: _0x32d811.imei,
                    oaid: _0x32d811.oaid,
                    platform: "android"
                  });
                this.$def.data.adAllList = _0x342bff;
              },
              async stepOne_compliance(_0x2a3612, _0x2b1d05) {
                let _0x4114cb = [];
                for (let _0x20871f = 1; _0x20871f < 7; _0x20871f++) {
                  _0x4114cb.push(_0x511972.g.$utils["complianceFn" + _0x20871f](_0x2a3612));
                }
                let _0x40229e = await _0x511972.g.$utils.complianceFn7(_0x2a3612);
                _0x4114cb = [..._0x4114cb, ..._0x40229e];
                try {
                  await Promise.race(_0x4114cb);
                } catch (_0x59d114) {
                  console.log(_0x59d114, "is_support_mistake_click");
                  _0x2a3612.$app.$def.data.is_support_mistake_click = !1;
                  _0x2a3612.$app.sensorsTrack("why_mistake_is_false", {
                    reason: _0x59d114
                  });
                  _0x511972.g.sensors.registerApp({
                    is_support_mistake_click: !1
                  });
                  let _0x34f766 = _0x511972.g.$utils.router.getState().path,
                    _0x5d9d9d = "haijz" === _0x2a3612.$app.$def.data.commonParams.appname ? "/JzHome" : "/reader";
                  _0x34f766 !== _0x5d9d9d && _0x511972.g.$utils.router.replace({
                    uri: _0x5d9d9d,
                    params: _0x2b1d05
                  });
                }
              },
              initAudio() {
                if (!this.$def.data.is_support_mistake_click) {
                  return;
                }
                if ("huawei" !== this.$def.data.ad.adProvider) {
                  return;
                }
                let _0x5d2aff = $app_require$("@app-module/system.audio");
                _0x5d2aff.src = "http://book-resources.cread.com/resources/20230906/be-quiet-5.mp3";
                _0x5d2aff.notificationVisible = !1;
                _0x5d2aff.loop = !0;
                _0x5d2aff.muted = !0;
                _0x5d2aff.autoplay = !0;
                _0x5d2aff.volume = 0.1;
                _0x5d2aff.play();
                $app_require$("@app-module/system.resident").start();
              }
            };
            _0x4d95d6.default = _0x59a3e3;
          },
          3129: _0x383449 => {
            'use strict';

            var _0x37bafc = {
              utf8: {
                stringToBytes: function (_0x1deb58) {
                  return _0x37bafc.bin.stringToBytes(unescape(encodeURIComponent(_0x1deb58)));
                },
                bytesToString: function (_0x3a4fd1) {
                  return decodeURIComponent(escape(_0x37bafc.bin.bytesToString(_0x3a4fd1)));
                }
              },
              bin: {
                stringToBytes: function (_0x46fd83) {
                  for (var _0x4a5a5f = [], _0x4173bf = 0; _0x4173bf < _0x46fd83.length; _0x4173bf++) {
                    _0x4a5a5f.push(255 & _0x46fd83.charCodeAt(_0x4173bf));
                  }
                  return _0x4a5a5f;
                },
                bytesToString: function (_0x19fab0) {
                  for (var _0x5f2fdb = [], _0x3495af = 0; _0x3495af < _0x19fab0.length; _0x3495af++) {
                    _0x5f2fdb.push(String.fromCharCode(_0x19fab0[_0x3495af]));
                  }
                  return _0x5f2fdb.join("");
                }
              }
            };
            _0x383449.exports = _0x37bafc;
          },
          2571: _0xa17461 => {
            'use strict';

            var _0x405090, _0xb6d5ae;
            _0x405090 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            _0xb6d5ae = {
              rotl: function (_0x1e1e66, _0x5e5645) {
                return _0x1e1e66 << _0x5e5645 | _0x1e1e66 >>> 32 - _0x5e5645;
              },
              rotr: function (_0x22e517, _0x414aaa) {
                return _0x22e517 << 32 - _0x414aaa | _0x22e517 >>> _0x414aaa;
              },
              endian: function (_0x1c7003) {
                if (_0x1c7003.constructor == Number) {
                  return 16711935 & _0xb6d5ae.rotl(_0x1c7003, 8) | 4278255360 & _0xb6d5ae.rotl(_0x1c7003, 24);
                }
                for (var _0x1d8697 = 0; _0x1d8697 < _0x1c7003.length; _0x1d8697++) {
                  _0x1c7003[_0x1d8697] = _0xb6d5ae.endian(_0x1c7003[_0x1d8697]);
                }
                return _0x1c7003;
              },
              randomBytes: function (_0x502832) {
                for (var _0x3963ef = []; _0x502832 > 0; _0x502832--) {
                  _0x3963ef.push(Math.floor(256 * Math.random()));
                }
                return _0x3963ef;
              },
              bytesToWords: function (_0x73a1bb) {
                for (var _0x49f538 = [], _0x278c51 = 0, _0x3367a1 = 0; _0x278c51 < _0x73a1bb.length; _0x278c51++, _0x3367a1 += 8) {
                  _0x49f538[_0x3367a1 >>> 5] |= _0x73a1bb[_0x278c51] << 24 - _0x3367a1 % 32;
                }
                return _0x49f538;
              },
              wordsToBytes: function (_0x45983b) {
                for (var _0x2be60f = [], _0x239fd3 = 0; _0x239fd3 < 32 * _0x45983b.length; _0x239fd3 += 8) {
                  _0x2be60f.push(_0x45983b[_0x239fd3 >>> 5] >>> 24 - _0x239fd3 % 32 & 255);
                }
                return _0x2be60f;
              },
              bytesToHex: function (_0x2232a6) {
                for (var _0xf78695 = [], _0x5eecd9 = 0; _0x5eecd9 < _0x2232a6.length; _0x5eecd9++) {
                  _0xf78695.push((_0x2232a6[_0x5eecd9] >>> 4).toString(16));
                  _0xf78695.push((15 & _0x2232a6[_0x5eecd9]).toString(16));
                }
                return _0xf78695.join("");
              },
              hexToBytes: function (_0x597bad) {
                for (var _0x1e49bd = [], _0x57b305 = 0; _0x57b305 < _0x597bad.length; _0x57b305 += 2) {
                  _0x1e49bd.push(parseInt(_0x597bad.substr(_0x57b305, 2), 16));
                }
                return _0x1e49bd;
              },
              bytesToBase64: function (_0x2b97be) {
                for (var _0x23d9bd = [], _0x4caa7f = 0; _0x4caa7f < _0x2b97be.length; _0x4caa7f += 3) {
                  for (var _0x3ed3de = _0x2b97be[_0x4caa7f] << 16 | _0x2b97be[_0x4caa7f + 1] << 8 | _0x2b97be[_0x4caa7f + 2], _0x21a2f9 = 0; _0x21a2f9 < 4; _0x21a2f9++) {
                    8 * _0x4caa7f + 6 * _0x21a2f9 <= 8 * _0x2b97be.length ? _0x23d9bd.push(_0x405090.charAt(_0x3ed3de >>> 6 * (3 - _0x21a2f9) & 63)) : _0x23d9bd.push("=");
                  }
                }
                return _0x23d9bd.join("");
              },
              base64ToBytes: function (_0xf9f2ad) {
                _0xf9f2ad = _0xf9f2ad.replace(/[^A-Z0-9+\/]/gi, "");
                for (var _0x163e6d = [], _0x465196 = 0, _0x12f8be = 0; _0x465196 < _0xf9f2ad.length; _0x12f8be = ++_0x465196 % 4) {
                  0 != _0x12f8be && _0x163e6d.push((_0x405090.indexOf(_0xf9f2ad.charAt(_0x465196 - 1)) & Math.pow(2, -2 * _0x12f8be + 8) - 1) << 2 * _0x12f8be | _0x405090.indexOf(_0xf9f2ad.charAt(_0x465196)) >>> 6 - 2 * _0x12f8be);
                }
                return _0x163e6d;
              }
            };
            _0xa17461.exports = _0xb6d5ae;
          },
          80537: (_0x36c426, _0xc15834, _0x698748) => {
            'use strict';

            var _0x5b97d5;
            _0x36c426.exports = (_0x5b97d5 = _0x698748(67921), _0x698748(14130), _0x698748(69766), _0x698748(97456), _0x698748(57101), function () {
              var _0x3df280 = _0x5b97d5,
                _0x2f53bc = _0x3df280.lib.BlockCipher,
                _0x483527 = _0x3df280.algo,
                _0x4b75a7 = [],
                _0x48f833 = [],
                _0x280d21 = [],
                _0x39dae6 = [],
                _0x267b5d = [],
                _0x2c6816 = [],
                _0x3327ec = [],
                _0xf5ced5 = [],
                _0x2d68e8 = [],
                _0x5c264d = [];
              !function () {
                for (var _0x5715f6 = [], _0x14a070 = 0; _0x14a070 < 256; _0x14a070++) {
                  _0x5715f6[_0x14a070] = _0x14a070 < 128 ? _0x14a070 << 1 : _0x14a070 << 1 ^ 283;
                }
                var _0x4f0eb8 = 0,
                  _0x52060c = 0;
                for (_0x14a070 = 0; _0x14a070 < 256; _0x14a070++) {
                  var _0x3f28f0 = _0x52060c ^ _0x52060c << 1 ^ _0x52060c << 2 ^ _0x52060c << 3 ^ _0x52060c << 4;
                  _0x3f28f0 = _0x3f28f0 >>> 8 ^ 255 & _0x3f28f0 ^ 99;
                  _0x4b75a7[_0x4f0eb8] = _0x3f28f0;
                  _0x48f833[_0x3f28f0] = _0x4f0eb8;
                  var _0x2e47b5 = _0x5715f6[_0x4f0eb8],
                    _0x1c8f03 = _0x5715f6[_0x2e47b5],
                    _0x222d66 = _0x5715f6[_0x1c8f03],
                    _0x23f95b = 257 * _0x5715f6[_0x3f28f0] ^ 16843008 * _0x3f28f0;
                  _0x280d21[_0x4f0eb8] = _0x23f95b << 24 | _0x23f95b >>> 8;
                  _0x39dae6[_0x4f0eb8] = _0x23f95b << 16 | _0x23f95b >>> 16;
                  _0x267b5d[_0x4f0eb8] = _0x23f95b << 8 | _0x23f95b >>> 24;
                  _0x2c6816[_0x4f0eb8] = _0x23f95b;
                  _0x23f95b = 16843009 * _0x222d66 ^ 65537 * _0x1c8f03 ^ 257 * _0x2e47b5 ^ 16843008 * _0x4f0eb8;
                  _0x3327ec[_0x3f28f0] = _0x23f95b << 24 | _0x23f95b >>> 8;
                  _0xf5ced5[_0x3f28f0] = _0x23f95b << 16 | _0x23f95b >>> 16;
                  _0x2d68e8[_0x3f28f0] = _0x23f95b << 8 | _0x23f95b >>> 24;
                  _0x5c264d[_0x3f28f0] = _0x23f95b;
                  _0x4f0eb8 ? (_0x4f0eb8 = _0x2e47b5 ^ _0x5715f6[_0x5715f6[_0x5715f6[_0x222d66 ^ _0x2e47b5]]], _0x52060c ^= _0x5715f6[_0x5715f6[_0x52060c]]) : _0x4f0eb8 = _0x52060c = 1;
                }
              }();
              _0x483527.AES = _0x2f53bc.extend({
                _doReset: function () {
                  if (!this._nRounds || this._keyPriorReset !== this._key) {
                    for (this._keySchedule = [], (this._keyPriorReset = this._key, _0x4fe554 = this._keyPriorReset = this._key, _0x18a3be = _0x4fe554.words, _0x16a628 = _0x4fe554.sigBytes / 4, _0x4d290f = 4 * ((this._nRounds = _0x16a628 + 6) + 1), _0x269dd3 = this._keySchedule = [], _0x4352ff = 0, void 0); _0x4352ff < _0x4d290f; _0x4352ff++) {
                      var _0x4fe554, _0x18a3be, _0x16a628, _0x4d290f, _0x269dd3, _0x4352ff;
                      _0x4352ff < _0x16a628 ? _0x269dd3[_0x4352ff] = _0x18a3be[_0x4352ff] : (_0x56bde6 = _0x269dd3[_0x4352ff - 1], _0x4352ff % _0x16a628 ? _0x16a628 > 6 && _0x4352ff % _0x16a628 == 4 && (_0x56bde6 = _0x4b75a7[_0x56bde6 >>> 24] << 24 | _0x4b75a7[_0x56bde6 >>> 16 & 255] << 16 | _0x4b75a7[_0x56bde6 >>> 8 & 255] << 8 | _0x4b75a7[255 & _0x56bde6]) : (_0x56bde6 = _0x4b75a7[(_0x56bde6 = _0x56bde6 << 8 | _0x56bde6 >>> 24) >>> 24] << 24 | _0x4b75a7[_0x56bde6 >>> 16 & 255] << 16 | _0x4b75a7[_0x56bde6 >>> 8 & 255] << 8 | _0x4b75a7[255 & _0x56bde6], _0x56bde6 ^= _0x4903e0[_0x4352ff / _0x16a628 | 0] << 24), _0x269dd3[_0x4352ff] = _0x269dd3[_0x4352ff - _0x16a628] ^ _0x56bde6);
                    }
                    for (this._invKeySchedule = [], _0x127a2f = this._invKeySchedule = [], _0x4c6b6a = 0, void 0; _0x4c6b6a < _0x4d290f; _0x4c6b6a++) {
                      var _0x127a2f, _0x4c6b6a;
                      if (_0x4352ff = _0x4d290f - _0x4c6b6a, _0x4c6b6a % 4) {
                        var _0x56bde6 = _0x269dd3[_0x4352ff];
                      } else {
                        _0x56bde6 = _0x269dd3[_0x4352ff - 4];
                      }
                      _0x127a2f[_0x4c6b6a] = _0x4c6b6a < 4 || _0x4352ff <= 4 ? _0x56bde6 : _0x3327ec[_0x4b75a7[_0x56bde6 >>> 24]] ^ _0xf5ced5[_0x4b75a7[_0x56bde6 >>> 16 & 255]] ^ _0x2d68e8[_0x4b75a7[_0x56bde6 >>> 8 & 255]] ^ _0x5c264d[_0x4b75a7[255 & _0x56bde6]];
                    }
                  }
                },
                encryptBlock: function (_0x3370d8, _0x536f33) {
                  this._doCryptBlock(_0x3370d8, _0x536f33, this._keySchedule, _0x280d21, _0x39dae6, _0x267b5d, _0x2c6816, _0x4b75a7);
                },
                decryptBlock: function (_0x1e2694, _0x439d0a) {
                  var _0x323347 = _0x1e2694[_0x439d0a + 1];
                  _0x1e2694[_0x439d0a + 1] = _0x1e2694[_0x439d0a + 3];
                  _0x1e2694[_0x439d0a + 3] = _0x323347;
                  this._doCryptBlock(_0x1e2694, _0x439d0a, this._invKeySchedule, _0x3327ec, _0xf5ced5, _0x2d68e8, _0x5c264d, _0x48f833);
                  _0x323347 = _0x1e2694[_0x439d0a + 1];
                  _0x1e2694[_0x439d0a + 1] = _0x1e2694[_0x439d0a + 3];
                  _0x1e2694[_0x439d0a + 3] = _0x323347;
                },
                _doCryptBlock: function (_0x3305e1, _0x277f78, _0x39a1ae, _0x4134aa, _0x375558, _0x140278, _0x5f00d9, _0x32f99b) {
                  for (var _0x42e2a5 = this._nRounds, _0x4ab135 = _0x3305e1[_0x277f78] ^ _0x39a1ae[0], _0x55d955 = _0x3305e1[_0x277f78 + 1] ^ _0x39a1ae[1], _0xbb3543 = _0x3305e1[_0x277f78 + 2] ^ _0x39a1ae[2], _0xbb276d = _0x3305e1[_0x277f78 + 3] ^ _0x39a1ae[3], _0x3e2061 = 4, _0x41e86d = 1; _0x41e86d < _0x42e2a5; _0x41e86d++) {
                    var _0x4b514e = _0x4134aa[_0x4ab135 >>> 24] ^ _0x375558[_0x55d955 >>> 16 & 255] ^ _0x140278[_0xbb3543 >>> 8 & 255] ^ _0x5f00d9[255 & _0xbb276d] ^ _0x39a1ae[_0x3e2061++],
                      _0x2f110b = _0x4134aa[_0x55d955 >>> 24] ^ _0x375558[_0xbb3543 >>> 16 & 255] ^ _0x140278[_0xbb276d >>> 8 & 255] ^ _0x5f00d9[255 & _0x4ab135] ^ _0x39a1ae[_0x3e2061++],
                      _0x4ba1e8 = _0x4134aa[_0xbb3543 >>> 24] ^ _0x375558[_0xbb276d >>> 16 & 255] ^ _0x140278[_0x4ab135 >>> 8 & 255] ^ _0x5f00d9[255 & _0x55d955] ^ _0x39a1ae[_0x3e2061++],
                      _0x46f481 = _0x4134aa[_0xbb276d >>> 24] ^ _0x375558[_0x4ab135 >>> 16 & 255] ^ _0x140278[_0x55d955 >>> 8 & 255] ^ _0x5f00d9[255 & _0xbb3543] ^ _0x39a1ae[_0x3e2061++];
                    _0x4ab135 = _0x4b514e;
                    _0x55d955 = _0x2f110b;
                    _0xbb3543 = _0x4ba1e8;
                    _0xbb276d = _0x46f481;
                  }
                  _0x4b514e = (_0x32f99b[_0x4ab135 >>> 24] << 24 | _0x32f99b[_0x55d955 >>> 16 & 255] << 16 | _0x32f99b[_0xbb3543 >>> 8 & 255] << 8 | _0x32f99b[255 & _0xbb276d]) ^ _0x39a1ae[_0x3e2061++];
                  _0x2f110b = (_0x32f99b[_0x55d955 >>> 24] << 24 | _0x32f99b[_0xbb3543 >>> 16 & 255] << 16 | _0x32f99b[_0xbb276d >>> 8 & 255] << 8 | _0x32f99b[255 & _0x4ab135]) ^ _0x39a1ae[_0x3e2061++];
                  _0x4ba1e8 = (_0x32f99b[_0xbb3543 >>> 24] << 24 | _0x32f99b[_0xbb276d >>> 16 & 255] << 16 | _0x32f99b[_0x4ab135 >>> 8 & 255] << 8 | _0x32f99b[255 & _0x55d955]) ^ _0x39a1ae[_0x3e2061++];
                  _0x46f481 = (_0x32f99b[_0xbb276d >>> 24] << 24 | _0x32f99b[_0x4ab135 >>> 16 & 255] << 16 | _0x32f99b[_0x55d955 >>> 8 & 255] << 8 | _0x32f99b[255 & _0xbb3543]) ^ _0x39a1ae[_0x3e2061++];
                  _0x3305e1[_0x277f78] = _0x4b514e;
                  _0x3305e1[_0x277f78 + 1] = _0x2f110b;
                  _0x3305e1[_0x277f78 + 2] = _0x4ba1e8;
                  _0x3305e1[_0x277f78 + 3] = _0x46f481;
                },
                keySize: 8
              });
              var _0x4903e0 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                _0x5f419b = _0x483527.AES;
              _0x3df280.AES = _0x2f53bc._createHelper(_0x5f419b);
            }(), _0x5b97d5.AES);
          },
          57101: (_0x2c3dde, _0x1d9c8f, _0x5cdd8) => {
            'use strict';

            var _0x5c3bc1, _0x2c750b, _0xfb0686, _0x48e7ed, _0x51baad, _0x2ab1c4, _0x211ecb, _0xbeaf16, _0x1ce10c, _0x26f4af, _0x5d4d9b, _0x2e9759, _0x15bb36, _0x30dcc1, _0x3aed84, _0x513270, _0x5657df, _0x371571, _0x1d823b;
            _0x2c3dde.exports = (_0x5c3bc1 = _0x5cdd8(67921), _0x5cdd8(97456), void (_0x5c3bc1.lib.Cipher || (_0x2c750b = _0x5c3bc1, _0xfb0686 = _0x2c750b.lib, _0x48e7ed = _0xfb0686.Base, _0x51baad = _0xfb0686.WordArray, _0x2ab1c4 = _0xfb0686.BufferedBlockAlgorithm, _0x211ecb = _0x2c750b.enc, _0x211ecb.Utf8, _0xbeaf16 = _0x211ecb.Base64, _0x1ce10c = _0x2c750b.algo.EvpKDF, _0x26f4af = _0xfb0686.Cipher = _0x2ab1c4.extend({
              cfg: _0x48e7ed.extend(),
              createEncryptor: function (_0x41d07e, _0xde8163) {
                return this.create(this._ENC_XFORM_MODE, _0x41d07e, _0xde8163);
              },
              createDecryptor: function (_0x3338bc, _0xd1e387) {
                return this.create(this._DEC_XFORM_MODE, _0x3338bc, _0xd1e387);
              },
              init: function (_0x4ef459, _0x1b88c1, _0x28f3de) {
                this.cfg = this.cfg.extend(_0x28f3de);
                this._xformMode = _0x4ef459;
                this._key = _0x1b88c1;
                this.reset();
              },
              reset: function () {
                _0x2ab1c4.reset.call(this);
                this._doReset();
              },
              process: function (_0x3a40ec) {
                this._append(_0x3a40ec);
                return this._process();
              },
              finalize: function (_0x2bb010) {
                _0x2bb010 && this._append(_0x2bb010);
                return this._doFinalize();
              },
              keySize: 4,
              ivSize: 4,
              _ENC_XFORM_MODE: 1,
              _DEC_XFORM_MODE: 2,
              _createHelper: function () {
                function _0x4d6263(_0x38fc15) {
                  return "string" == typeof _0x38fc15 ? _0x1d823b : _0x5657df;
                }
                return function (_0x9a3196) {
                  return {
                    encrypt: function (_0x5e2626, _0x889ace, _0x3aee39) {
                      return _0x4d6263(_0x889ace).encrypt(_0x9a3196, _0x5e2626, _0x889ace, _0x3aee39);
                    },
                    decrypt: function (_0x5c1c4b, _0x36795f, _0xe6da8d) {
                      return _0x4d6263(_0x36795f).decrypt(_0x9a3196, _0x5c1c4b, _0x36795f, _0xe6da8d);
                    }
                  };
                };
              }()
            }), _0xfb0686.StreamCipher = _0x26f4af.extend({
              _doFinalize: function () {
                return this._process(!0);
              },
              blockSize: 1
            }), _0x5d4d9b = _0x2c750b.mode = {}, _0x2e9759 = _0xfb0686.BlockCipherMode = _0x48e7ed.extend({
              createEncryptor: function (_0xf6be77, _0x483087) {
                return this.Encryptor.create(_0xf6be77, _0x483087);
              },
              createDecryptor: function (_0x591ee6, _0xfb5189) {
                return this.Decryptor.create(_0x591ee6, _0xfb5189);
              },
              init: function (_0x5d6561, _0x2a2cd) {
                this._cipher = _0x5d6561;
                this._iv = _0x2a2cd;
              }
            }), _0x15bb36 = _0x5d4d9b.CBC = function () {
              var _0x56fd47 = _0x2e9759.extend();
              function _0x2afd40(_0x2c8b76, _0x73ef2d, _0x4bf392) {
                var _0x1d8832,
                  _0x3f9c3e = this._iv;
                _0x3f9c3e ? (_0x1d8832 = _0x3f9c3e, this._iv = void 0) : _0x1d8832 = this._prevBlock;
                for (var _0xa8b52a = 0; _0xa8b52a < _0x4bf392; _0xa8b52a++) {
                  _0x2c8b76[_0x73ef2d + _0xa8b52a] ^= _0x1d8832[_0xa8b52a];
                }
              }
              _0x56fd47.Encryptor = _0x56fd47.extend({
                processBlock: function (_0x507644, _0x5a11c9) {
                  var _0xe4c496 = this._cipher,
                    _0x53be0c = _0xe4c496.blockSize;
                  _0x2afd40.call(this, _0x507644, _0x5a11c9, _0x53be0c);
                  _0xe4c496.encryptBlock(_0x507644, _0x5a11c9);
                  this._prevBlock = _0x507644.slice(_0x5a11c9, _0x5a11c9 + _0x53be0c);
                }
              });
              _0x56fd47.Decryptor = _0x56fd47.extend({
                processBlock: function (_0x2e3039, _0x17edfa) {
                  var _0x41fafe = this._cipher,
                    _0x5ea81f = _0x41fafe.blockSize,
                    _0x162104 = _0x2e3039.slice(_0x17edfa, _0x17edfa + _0x5ea81f);
                  _0x41fafe.decryptBlock(_0x2e3039, _0x17edfa);
                  _0x2afd40.call(this, _0x2e3039, _0x17edfa, _0x5ea81f);
                  this._prevBlock = _0x162104;
                }
              });
              return _0x56fd47;
            }(), _0x30dcc1 = (_0x2c750b.pad = {}).Pkcs7 = {
              pad: function (_0x37eabe, _0x524c8b) {
                for (var _0xe118c = 4 * _0x524c8b, _0x47d8a2 = _0xe118c - _0x37eabe.sigBytes % _0xe118c, _0x578428 = _0x47d8a2 << 24 | _0x47d8a2 << 16 | _0x47d8a2 << 8 | _0x47d8a2, _0x19845b = [], _0xe08a37 = 0; _0xe08a37 < _0x47d8a2; _0xe08a37 += 4) {
                  _0x19845b.push(_0x578428);
                }
                var _0x2e9052 = _0x51baad.create(_0x19845b, _0x47d8a2);
                _0x37eabe.concat(_0x2e9052);
              },
              unpad: function (_0x376b79) {
                var _0x5c375e = 255 & _0x376b79.words[_0x376b79.sigBytes - 1 >>> 2];
                _0x376b79.sigBytes -= _0x5c375e;
              }
            }, _0xfb0686.BlockCipher = _0x26f4af.extend({
              cfg: _0x26f4af.cfg.extend({
                mode: _0x15bb36,
                padding: _0x30dcc1
              }),
              reset: function () {
                var _0x474535;
                _0x26f4af.reset.call(this);
                var _0x5cf2ac = this.cfg,
                  _0x5c769d = _0x5cf2ac.iv,
                  _0x27cbc3 = _0x5cf2ac.mode;
                this._xformMode == this._ENC_XFORM_MODE ? _0x474535 = _0x27cbc3.createEncryptor : (_0x474535 = _0x27cbc3.createDecryptor, this._minBufferSize = 1);
                this._mode && this._mode.__creator == _0x474535 ? this._mode.init(this, _0x5c769d && _0x5c769d.words) : (this._mode = _0x474535.call(_0x27cbc3, this, _0x5c769d && _0x5c769d.words), this._mode.__creator = _0x474535);
              },
              _doProcessBlock: function (_0x23b5e9, _0x4ea4da) {
                this._mode.processBlock(_0x23b5e9, _0x4ea4da);
              },
              _doFinalize: function () {
                var _0xd79475,
                  _0x3cc112 = this.cfg.padding;
                this._xformMode == this._ENC_XFORM_MODE ? (_0x3cc112.pad(this._data, this.blockSize), _0xd79475 = this._process(!0)) : (_0xd79475 = this._process(!0), _0x3cc112.unpad(_0xd79475));
                return _0xd79475;
              },
              blockSize: 4
            }), _0x3aed84 = _0xfb0686.CipherParams = _0x48e7ed.extend({
              init: function (_0x5e1cbf) {
                this.mixIn(_0x5e1cbf);
              },
              toString: function (_0x31e23c) {
                return (_0x31e23c || this.formatter).stringify(this);
              }
            }), _0x513270 = (_0x2c750b.format = {}).OpenSSL = {
              stringify: function (_0x45f79a) {
                var _0x2c2419 = _0x45f79a.ciphertext,
                  _0x229575 = _0x45f79a.salt;
                return (_0x229575 ? _0x51baad.create([1398893684, 1701076831]).concat(_0x229575).concat(_0x2c2419) : _0x2c2419).toString(_0xbeaf16);
              },
              parse: function (_0x20384d) {
                var _0x21b483,
                  _0x281db4 = _0xbeaf16.parse(_0x20384d),
                  _0x46fb8d = _0x281db4.words;
                1398893684 == _0x46fb8d[0] && 1701076831 == _0x46fb8d[1] && (_0x21b483 = _0x51baad.create(_0x46fb8d.slice(2, 4)), _0x46fb8d.splice(0, 4), _0x281db4.sigBytes -= 16);
                return _0x3aed84.create({
                  ciphertext: _0x281db4,
                  salt: _0x21b483
                });
              }
            }, _0x5657df = _0xfb0686.SerializableCipher = _0x48e7ed.extend({
              cfg: _0x48e7ed.extend({
                format: _0x513270
              }),
              encrypt: function (_0x4a61b9, _0x5b152f, _0x11c591, _0x57d154) {
                _0x57d154 = this.cfg.extend(_0x57d154);
                var _0x2ffcc1 = _0x4a61b9.createEncryptor(_0x11c591, _0x57d154),
                  _0x210a63 = _0x2ffcc1.finalize(_0x5b152f),
                  _0x384412 = _0x2ffcc1.cfg;
                return _0x3aed84.create({
                  ciphertext: _0x210a63,
                  key: _0x11c591,
                  iv: _0x384412.iv,
                  algorithm: _0x4a61b9,
                  mode: _0x384412.mode,
                  padding: _0x384412.padding,
                  blockSize: _0x4a61b9.blockSize,
                  formatter: _0x57d154.format
                });
              },
              decrypt: function (_0x1eccff, _0x13125d, _0x28f29f, _0x5e2c68) {
                _0x5e2c68 = this.cfg.extend(_0x5e2c68);
                _0x13125d = this._parse(_0x13125d, _0x5e2c68.format);
                return _0x1eccff.createDecryptor(_0x28f29f, _0x5e2c68).finalize(_0x13125d.ciphertext);
              },
              _parse: function (_0x44cf95, _0x1497e0) {
                return "string" == typeof _0x44cf95 ? _0x1497e0.parse(_0x44cf95, this) : _0x44cf95;
              }
            }), _0x371571 = (_0x2c750b.kdf = {}).OpenSSL = {
              execute: function (_0x5a0ddb, _0x614ed8, _0x4337f5, _0x2f7c8f) {
                _0x2f7c8f || (_0x2f7c8f = _0x51baad.random(8));
                var _0x42a7a8 = _0x1ce10c.create({
                    keySize: _0x614ed8 + _0x4337f5
                  }).compute(_0x5a0ddb, _0x2f7c8f),
                  _0x469dec = _0x51baad.create(_0x42a7a8.words.slice(_0x614ed8), 4 * _0x4337f5);
                _0x42a7a8.sigBytes = 4 * _0x614ed8;
                return _0x3aed84.create({
                  key: _0x42a7a8,
                  iv: _0x469dec,
                  salt: _0x2f7c8f
                });
              }
            }, _0x1d823b = _0xfb0686.PasswordBasedCipher = _0x5657df.extend({
              cfg: _0x5657df.cfg.extend({
                kdf: _0x371571
              }),
              encrypt: function (_0x290c7b, _0x35c3b7, _0x481cbf, _0x1f1475) {
                var _0x26248e = (_0x1f1475 = this.cfg.extend(_0x1f1475)).kdf.execute(_0x481cbf, _0x290c7b.keySize, _0x290c7b.ivSize);
                _0x1f1475.iv = _0x26248e.iv;
                var _0x51470 = _0x5657df.encrypt.call(this, _0x290c7b, _0x35c3b7, _0x26248e.key, _0x1f1475);
                _0x51470.mixIn(_0x26248e);
                return _0x51470;
              },
              decrypt: function (_0x1ec862, _0x41c8f6, _0x4c79fe, _0x262bc3) {
                _0x262bc3 = this.cfg.extend(_0x262bc3);
                _0x41c8f6 = this._parse(_0x41c8f6, _0x262bc3.format);
                var _0x3c6e82 = _0x262bc3.kdf.execute(_0x4c79fe, _0x1ec862.keySize, _0x1ec862.ivSize, _0x41c8f6.salt);
                _0x262bc3.iv = _0x3c6e82.iv;
                return _0x5657df.decrypt.call(this, _0x1ec862, _0x41c8f6, _0x3c6e82.key, _0x262bc3);
              }
            }))));
          },
          67921: (_0x53dbb0, _0x5ed719, _0x3f958e) => {
            'use strict';

            var _0x433e20;
            _0x53dbb0.exports = (_0x433e20 = _0x433e20 || function (_0x5398da, _0x300da9) {
              var _0x3d27da;
              if ("undefined" != typeof window && window.crypto && (_0x3d27da = window.crypto), "undefined" != typeof self && self.crypto && (_0x3d27da = self.crypto), "undefined" != typeof globalThis && globalThis.crypto && (_0x3d27da = globalThis.crypto), !_0x3d27da && "undefined" != typeof window && window.msCrypto && (_0x3d27da = window.msCrypto), !_0x3d27da && void 0 !== _0x3f958e.g && _0x3f958e.g.crypto && (_0x3d27da = _0x3f958e.g.crypto), !_0x3d27da) {
                try {
                  _0x3d27da = _0x3f958e(42480);
                } catch (_0x34b8aa) {}
              }
              _0x3bc28b.lib = {};
              _0x43bedc.Base = {
                extend: function (_0x5c167d) {
                  var _0xd4843a = _0x516c89(this);
                  _0x5c167d && _0xd4843a.mixIn(_0x5c167d);
                  _0xd4843a.hasOwnProperty("init") && this.init !== _0xd4843a.init || (_0xd4843a.init = function () {
                    _0xd4843a.$super.init.apply(this, arguments);
                  });
                  _0xd4843a.init.prototype = _0xd4843a;
                  _0xd4843a.$super = this;
                  return _0xd4843a;
                },
                create: function () {
                  var _0x16a41c = this.extend();
                  _0x16a41c.init.apply(_0x16a41c, arguments);
                  return _0x16a41c;
                },
                init: function () {},
                mixIn: function (_0x2d13f4) {
                  for (var _0x32e6c2 in _0x2d13f4) _0x2d13f4.hasOwnProperty(_0x32e6c2) && (this[_0x32e6c2] = _0x2d13f4[_0x32e6c2]);
                  _0x2d13f4.hasOwnProperty("toString") && (this.toString = _0x2d13f4.toString);
                },
                clone: function () {
                  return this.init.prototype.extend(this);
                }
              };
              _0x43bedc.WordArray = _0xc19cc9.extend({
                init: function (_0x446d6c, _0x26417e) {
                  _0x446d6c = this.words = _0x446d6c || [];
                  this.sigBytes = null != _0x26417e ? _0x26417e : 4 * _0x446d6c.length;
                },
                toString: function (_0xb09358) {
                  return (_0xb09358 || _0x20cbdb).stringify(this);
                },
                concat: function (_0x322c79) {
                  var _0x2566bd = this.words,
                    _0x1a550c = _0x322c79.words,
                    _0x46fd76 = this.sigBytes,
                    _0xf9c0bf = _0x322c79.sigBytes;
                  if (this.clamp(), _0x46fd76 % 4) {
                    for (var _0x29d98f = 0; _0x29d98f < _0xf9c0bf; _0x29d98f++) {
                      var _0x29bd3f = _0x1a550c[_0x29d98f >>> 2] >>> 24 - _0x29d98f % 4 * 8 & 255;
                      _0x2566bd[_0x46fd76 + _0x29d98f >>> 2] |= _0x29bd3f << 24 - (_0x46fd76 + _0x29d98f) % 4 * 8;
                    }
                  } else {
                    for (var _0xd00f8d = 0; _0xd00f8d < _0xf9c0bf; _0xd00f8d += 4) {
                      _0x2566bd[_0x46fd76 + _0xd00f8d >>> 2] = _0x1a550c[_0xd00f8d >>> 2];
                    }
                  }
                  this.sigBytes += _0xf9c0bf;
                  return this;
                },
                clamp: function () {
                  var _0x1aab5b = this.words,
                    _0x5c57ce = this.sigBytes;
                  _0x1aab5b[_0x5c57ce >>> 2] &= 4294967295 << 32 - _0x5c57ce % 4 * 8;
                  _0x1aab5b.length = _0x5398da.ceil(_0x5c57ce / 4);
                },
                clone: function () {
                  var _0x4c3c3e = _0xc19cc9.clone.call(this);
                  _0x4c3c3e.words = this.words.slice(0);
                  return _0x4c3c3e;
                },
                random: function (_0x5a356f) {
                  for (var _0x29ffcc = [], _0x4dd29a = 0; _0x4dd29a < _0x5a356f; _0x4dd29a += 4) {
                    _0x29ffcc.push(_0x38deb6());
                  }
                  return new _0x14ea2b.init(_0x29ffcc, _0x5a356f);
                }
              });
              _0x3bc28b.enc = {};
              _0x3c500c.Hex = {
                stringify: function (_0x51a839) {
                  for (var _0x35ed25 = _0x51a839.words, _0x51ba49 = _0x51a839.sigBytes, _0x2dd903 = [], _0x1e2cba = 0; _0x1e2cba < _0x51ba49; _0x1e2cba++) {
                    var _0x1d26a5 = _0x35ed25[_0x1e2cba >>> 2] >>> 24 - _0x1e2cba % 4 * 8 & 255;
                    _0x2dd903.push((_0x1d26a5 >>> 4).toString(16));
                    _0x2dd903.push((15 & _0x1d26a5).toString(16));
                  }
                  return _0x2dd903.join("");
                },
                parse: function (_0x39e26b) {
                  for (var _0x586c1b = _0x39e26b.length, _0x149de6 = [], _0x4235af = 0; _0x4235af < _0x586c1b; _0x4235af += 2) {
                    _0x149de6[_0x4235af >>> 3] |= parseInt(_0x39e26b.substr(_0x4235af, 2), 16) << 24 - _0x4235af % 8 * 4;
                  }
                  return new _0x14ea2b.init(_0x149de6, _0x586c1b / 2);
                }
              };
              _0x3c500c.Latin1 = {
                stringify: function (_0x492410) {
                  for (var _0x171ddd = _0x492410.words, _0x49499b = _0x492410.sigBytes, _0x52053e = [], _0x18e184 = 0; _0x18e184 < _0x49499b; _0x18e184++) {
                    var _0x3ca080 = _0x171ddd[_0x18e184 >>> 2] >>> 24 - _0x18e184 % 4 * 8 & 255;
                    _0x52053e.push(String.fromCharCode(_0x3ca080));
                  }
                  return _0x52053e.join("");
                },
                parse: function (_0x5d0ca6) {
                  for (var _0x4d7e62 = _0x5d0ca6.length, _0x2a314d = [], _0x43227a = 0; _0x43227a < _0x4d7e62; _0x43227a++) {
                    _0x2a314d[_0x43227a >>> 2] |= (255 & _0x5d0ca6.charCodeAt(_0x43227a)) << 24 - _0x43227a % 4 * 8;
                  }
                  return new _0x14ea2b.init(_0x2a314d, _0x4d7e62);
                }
              };
              _0x3c500c.Utf8 = {
                stringify: function (_0x15a753) {
                  try {
                    return decodeURIComponent(escape(_0x47e645.stringify(_0x15a753)));
                  } catch (_0x401dd7) {
                    throw new Error("Malformed UTF-8 data");
                  }
                },
                parse: function (_0x29130e) {
                  return _0x47e645.parse(unescape(encodeURIComponent(_0x29130e)));
                }
              };
              _0x43bedc.BufferedBlockAlgorithm = _0xc19cc9.extend({
                reset: function () {
                  this._data = new _0x14ea2b.init();
                  this._nDataBytes = 0;
                },
                _append: function (_0x1c8722) {
                  "string" == typeof _0x1c8722 && (_0x1c8722 = _0x8c204.parse(_0x1c8722));
                  this._data.concat(_0x1c8722);
                  this._nDataBytes += _0x1c8722.sigBytes;
                },
                _process: function (_0x2fe604) {
                  var _0x20f580,
                    _0x437574 = this._data,
                    _0x495a55 = _0x437574.words,
                    _0x1a622c = _0x437574.sigBytes,
                    _0x1c42cf = this.blockSize,
                    _0x4ab479 = _0x1a622c / (4 * _0x1c42cf),
                    _0x58da23 = (_0x4ab479 = _0x2fe604 ? _0x5398da.ceil(_0x4ab479) : _0x5398da.max((0 | _0x4ab479) - this._minBufferSize, 0)) * _0x1c42cf,
                    _0x3a321a = _0x5398da.min(4 * _0x58da23, _0x1a622c);
                  if (_0x58da23) {
                    for (var _0x2c234f = 0; _0x2c234f < _0x58da23; _0x2c234f += _0x1c42cf) {
                      this._doProcessBlock(_0x495a55, _0x2c234f);
                    }
                    _0x20f580 = _0x495a55.splice(0, _0x58da23);
                    _0x437574.sigBytes -= _0x3a321a;
                  }
                  return new _0x14ea2b.init(_0x20f580, _0x3a321a);
                },
                clone: function () {
                  var _0x5283e1 = _0xc19cc9.clone.call(this);
                  _0x5283e1._data = this._data.clone();
                  return _0x5283e1;
                },
                _minBufferSize: 0
              });
              var _0x38deb6 = function () {
                  if (_0x3d27da) {
                    if ("function" == typeof _0x3d27da.getRandomValues) {
                      try {
                        return _0x3d27da.getRandomValues(new Uint32Array(1))[0];
                      } catch (_0x478863) {}
                    }
                    if ("function" == typeof _0x3d27da.randomBytes) {
                      try {
                        return _0x3d27da.randomBytes(4).readInt32LE();
                      } catch (_0x3bdb22) {}
                    }
                  }
                  throw new Error("Native crypto module could not be used to get secure random number.");
                },
                _0x516c89 = Object.create || function () {
                  function _0xcd6cf1() {}
                  return function (_0x16c578) {
                    var _0x19ded4;
                    _0xcd6cf1.prototype = _0x16c578;
                    _0x19ded4 = new _0xcd6cf1();
                    _0xcd6cf1.prototype = null;
                    return _0x19ded4;
                  };
                }(),
                _0x3bc28b = {},
                _0x43bedc = _0x3bc28b.lib,
                _0xc19cc9 = _0x43bedc.Base,
                _0x14ea2b = _0x43bedc.WordArray,
                _0x3c500c = _0x3bc28b.enc,
                _0x20cbdb = _0x3c500c.Hex,
                _0x47e645 = _0x3c500c.Latin1,
                _0x8c204 = _0x3c500c.Utf8,
                _0xbe6c80 = _0x43bedc.BufferedBlockAlgorithm,
                _0x23c07f = (_0x43bedc.Hasher = _0xbe6c80.extend({
                  cfg: _0xc19cc9.extend(),
                  init: function (_0x319782) {
                    this.cfg = this.cfg.extend(_0x319782);
                    this.reset();
                  },
                  reset: function () {
                    _0xbe6c80.reset.call(this);
                    this._doReset();
                  },
                  update: function (_0x36aa2d) {
                    this._append(_0x36aa2d);
                    this._process();
                    return this;
                  },
                  finalize: function (_0x81a5dc) {
                    _0x81a5dc && this._append(_0x81a5dc);
                    return this._doFinalize();
                  },
                  blockSize: 16,
                  _createHelper: function (_0x721d44) {
                    return function (_0x3512cd, _0x4a1886) {
                      return new _0x721d44.init(_0x4a1886).finalize(_0x3512cd);
                    };
                  },
                  _createHmacHelper: function (_0x2b965e) {
                    return function (_0x2b8d99, _0x3d5820) {
                      return new _0x23c07f.HMAC.init(_0x2b965e, _0x3d5820).finalize(_0x2b8d99);
                    };
                  }
                }), _0x3bc28b.algo = {});
              return _0x3bc28b;
            }(Math), _0x433e20);
          },
          14130: (_0x2b55a3, _0x25ab28, _0x1fc868) => {
            'use strict';

            var _0x1b911f, _0x45d2e8, _0x44af91;
            _0x2b55a3.exports = (_0x1b911f = _0x1fc868(67921), _0x44af91 = (_0x45d2e8 = _0x1b911f).lib.WordArray, _0x45d2e8.enc.Base64 = {
              stringify: function (_0x47441c) {
                var _0x38e8ed = _0x47441c.words,
                  _0x38d543 = _0x47441c.sigBytes,
                  _0x31b338 = this._map;
                _0x47441c.clamp();
                for (var _0x358936 = [], _0x1b677a = 0; _0x1b677a < _0x38d543; _0x1b677a += 3) {
                  for (var _0x4495d4 = (_0x38e8ed[_0x1b677a >>> 2] >>> 24 - _0x1b677a % 4 * 8 & 255) << 16 | (_0x38e8ed[_0x1b677a + 1 >>> 2] >>> 24 - (_0x1b677a + 1) % 4 * 8 & 255) << 8 | _0x38e8ed[_0x1b677a + 2 >>> 2] >>> 24 - (_0x1b677a + 2) % 4 * 8 & 255, _0x3925aa = 0; _0x3925aa < 4 && _0x1b677a + 0.75 * _0x3925aa < _0x38d543; _0x3925aa++) {
                    _0x358936.push(_0x31b338.charAt(_0x4495d4 >>> 6 * (3 - _0x3925aa) & 63));
                  }
                }
                var _0x19f569 = _0x31b338.charAt(64);
                if (_0x19f569) {
                  for (; _0x358936.length % 4;) {
                    _0x358936.push(_0x19f569);
                  }
                }
                return _0x358936.join("");
              },
              parse: function (_0x761d1d) {
                var _0x3d922f = _0x761d1d.length,
                  _0x2dcb5f = this._map,
                  _0x1a549c = this._reverseMap;
                if (!_0x1a549c) {
                  _0x1a549c = this._reverseMap = [];
                  for (var _0x142a16 = 0; _0x142a16 < _0x2dcb5f.length; _0x142a16++) {
                    _0x1a549c[_0x2dcb5f.charCodeAt(_0x142a16)] = _0x142a16;
                  }
                }
                var _0x1e2913 = _0x2dcb5f.charAt(64);
                if (_0x1e2913) {
                  var _0xf40a87 = _0x761d1d.indexOf(_0x1e2913);
                  -1 !== _0xf40a87 && (_0x3d922f = _0xf40a87);
                }
                return function (_0x488283, _0x4f3850, _0x2f33e7) {
                  for (var _0x20c7fd = [], _0x37bda4 = 0, _0x2719a3 = 0; _0x2719a3 < _0x4f3850; _0x2719a3++) {
                    if (_0x2719a3 % 4) {
                      var _0x39e02c = _0x2f33e7[_0x488283.charCodeAt(_0x2719a3 - 1)] << _0x2719a3 % 4 * 2 | _0x2f33e7[_0x488283.charCodeAt(_0x2719a3)] >>> 6 - _0x2719a3 % 4 * 2;
                      _0x20c7fd[_0x37bda4 >>> 2] |= _0x39e02c << 24 - _0x37bda4 % 4 * 8;
                      _0x37bda4++;
                    }
                  }
                  return _0x44af91.create(_0x20c7fd, _0x37bda4);
                }(_0x761d1d, _0x3d922f, _0x1a549c);
              },
              _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }, _0x1b911f.enc.Base64);
          },
          29441: (_0x239722, _0x59e6a3, _0x353dc5) => {
            'use strict';

            var _0x2767f2, _0x1f695e, _0x35ab5c;
            _0x239722.exports = (_0x2767f2 = _0x353dc5(67921), _0x35ab5c = (_0x1f695e = _0x2767f2).lib.WordArray, _0x1f695e.enc.Base64url = {
              stringify: function (_0x2e5ea8, _0x2bf063 = !0) {
                var _0x3fc9fc = _0x2e5ea8.words,
                  _0x10d031 = _0x2e5ea8.sigBytes,
                  _0x39a271 = _0x2bf063 ? this._safe_map : this._map;
                _0x2e5ea8.clamp();
                for (var _0x31e2e3 = [], _0x49465e = 0; _0x49465e < _0x10d031; _0x49465e += 3) {
                  for (var _0x2de7c8 = (_0x3fc9fc[_0x49465e >>> 2] >>> 24 - _0x49465e % 4 * 8 & 255) << 16 | (_0x3fc9fc[_0x49465e + 1 >>> 2] >>> 24 - (_0x49465e + 1) % 4 * 8 & 255) << 8 | _0x3fc9fc[_0x49465e + 2 >>> 2] >>> 24 - (_0x49465e + 2) % 4 * 8 & 255, _0x5a9898 = 0; _0x5a9898 < 4 && _0x49465e + 0.75 * _0x5a9898 < _0x10d031; _0x5a9898++) {
                    _0x31e2e3.push(_0x39a271.charAt(_0x2de7c8 >>> 6 * (3 - _0x5a9898) & 63));
                  }
                }
                var _0x191794 = _0x39a271.charAt(64);
                if (_0x191794) {
                  for (; _0x31e2e3.length % 4;) {
                    _0x31e2e3.push(_0x191794);
                  }
                }
                return _0x31e2e3.join("");
              },
              parse: function (_0x1bfdc1, _0x44d4ce = !0) {
                var _0x25feae = _0x1bfdc1.length,
                  _0x7497c2 = _0x44d4ce ? this._safe_map : this._map,
                  _0x48d7ec = this._reverseMap;
                if (!_0x48d7ec) {
                  _0x48d7ec = this._reverseMap = [];
                  for (var _0x263dff = 0; _0x263dff < _0x7497c2.length; _0x263dff++) {
                    _0x48d7ec[_0x7497c2.charCodeAt(_0x263dff)] = _0x263dff;
                  }
                }
                var _0x304b6d = _0x7497c2.charAt(64);
                if (_0x304b6d) {
                  var _0x2fd341 = _0x1bfdc1.indexOf(_0x304b6d);
                  -1 !== _0x2fd341 && (_0x25feae = _0x2fd341);
                }
                return function (_0x1629ae, _0x394a67, _0x4bde42) {
                  for (var _0x2b55e = [], _0x567439 = 0, _0x2efb88 = 0; _0x2efb88 < _0x394a67; _0x2efb88++) {
                    if (_0x2efb88 % 4) {
                      var _0x4080dc = _0x4bde42[_0x1629ae.charCodeAt(_0x2efb88 - 1)] << _0x2efb88 % 4 * 2 | _0x4bde42[_0x1629ae.charCodeAt(_0x2efb88)] >>> 6 - _0x2efb88 % 4 * 2;
                      _0x2b55e[_0x567439 >>> 2] |= _0x4080dc << 24 - _0x567439 % 4 * 8;
                      _0x567439++;
                    }
                  }
                  return _0x35ab5c.create(_0x2b55e, _0x567439);
                }(_0x1bfdc1, _0x25feae, _0x48d7ec);
              },
              _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
            }, _0x2767f2.enc.Base64url);
          },
          99296: (_0x39049b, _0x59b23b, _0x2d4508) => {
            'use strict';

            var _0x174fd2;
            _0x39049b.exports = (_0x174fd2 = _0x2d4508(67921), function () {
              var _0x4946f5 = _0x174fd2,
                _0x537283 = _0x4946f5.lib.WordArray,
                _0x249a3c = _0x4946f5.enc;
              function _0x2fb1fa(_0x5de8a5) {
                return _0x5de8a5 << 8 & 4278255360 | _0x5de8a5 >>> 8 & 16711935;
              }
              _0x249a3c.Utf16 = _0x249a3c.Utf16BE = {
                stringify: function (_0x4d0fe4) {
                  for (var _0x4cdb15 = _0x4d0fe4.words, _0x36ece5 = _0x4d0fe4.sigBytes, _0x5e6689 = [], _0x314af5 = 0; _0x314af5 < _0x36ece5; _0x314af5 += 2) {
                    var _0x409e2b = _0x4cdb15[_0x314af5 >>> 2] >>> 16 - _0x314af5 % 4 * 8 & 65535;
                    _0x5e6689.push(String.fromCharCode(_0x409e2b));
                  }
                  return _0x5e6689.join("");
                },
                parse: function (_0x5bf3eb) {
                  for (var _0x2f937c = _0x5bf3eb.length, _0x227d1c = [], _0x287596 = 0; _0x287596 < _0x2f937c; _0x287596++) {
                    _0x227d1c[_0x287596 >>> 1] |= _0x5bf3eb.charCodeAt(_0x287596) << 16 - _0x287596 % 2 * 16;
                  }
                  return _0x537283.create(_0x227d1c, 2 * _0x2f937c);
                }
              };
              _0x249a3c.Utf16LE = {
                stringify: function (_0x3d0f17) {
                  for (var _0x280ffe = _0x3d0f17.words, _0x142503 = _0x3d0f17.sigBytes, _0x184d94 = [], _0x33adaa = 0; _0x33adaa < _0x142503; _0x33adaa += 2) {
                    var _0x3eca0d = _0x2fb1fa(_0x280ffe[_0x33adaa >>> 2] >>> 16 - _0x33adaa % 4 * 8 & 65535);
                    _0x184d94.push(String.fromCharCode(_0x3eca0d));
                  }
                  return _0x184d94.join("");
                },
                parse: function (_0x2ffd44) {
                  for (var _0x2e8bb3 = _0x2ffd44.length, _0x2bb2b2 = [], _0x2c8cb5 = 0; _0x2c8cb5 < _0x2e8bb3; _0x2c8cb5++) {
                    _0x2bb2b2[_0x2c8cb5 >>> 1] |= _0x2fb1fa(_0x2ffd44.charCodeAt(_0x2c8cb5) << 16 - _0x2c8cb5 % 2 * 16);
                  }
                  return _0x537283.create(_0x2bb2b2, 2 * _0x2e8bb3);
                }
              };
            }(), _0x174fd2.enc.Utf16);
          },
          97456: (_0x1427ff, _0x5973ac, _0x759dab) => {
            'use strict';

            var _0xd137c, _0x33acd3, _0x991fc4, _0x42e3c1, _0x5f1a22, _0x42ea99, _0x33c4ad, _0x4c3667;
            _0x1427ff.exports = (_0x4c3667 = _0x759dab(67921), _0x759dab(19225), _0x759dab(43771), _0x991fc4 = (_0x33acd3 = (_0xd137c = _0x4c3667).lib).Base, _0x42e3c1 = _0x33acd3.WordArray, _0x42ea99 = (_0x5f1a22 = _0xd137c.algo).MD5, _0x33c4ad = _0x5f1a22.EvpKDF = _0x991fc4.extend({
              cfg: _0x991fc4.extend({
                keySize: 4,
                hasher: _0x42ea99,
                iterations: 1
              }),
              init: function (_0x21b7a5) {
                this.cfg = this.cfg.extend(_0x21b7a5);
              },
              compute: function (_0x40d9b2, _0x43e0e6) {
                for (var _0x260a0a, _0x55dbe1 = this.cfg, _0x2f4d3c = _0x55dbe1.hasher.create(), _0x8f14fa = _0x42e3c1.create(), _0x8826e3 = _0x8f14fa.words, _0x3ced30 = _0x55dbe1.keySize, _0x59ff27 = _0x55dbe1.iterations; _0x8826e3.length < _0x3ced30;) {
                  _0x260a0a && _0x2f4d3c.update(_0x260a0a);
                  _0x260a0a = _0x2f4d3c.update(_0x40d9b2).finalize(_0x43e0e6);
                  _0x2f4d3c.reset();
                  for (var _0x28ccec = 1; _0x28ccec < _0x59ff27; _0x28ccec++) {
                    _0x260a0a = _0x2f4d3c.finalize(_0x260a0a);
                    _0x2f4d3c.reset();
                  }
                  _0x8f14fa.concat(_0x260a0a);
                }
                _0x8f14fa.sigBytes = 4 * _0x3ced30;
                return _0x8f14fa;
              }
            }), _0xd137c.EvpKDF = function (_0x2a907e, _0x9a4612, _0x4eab2e) {
              return _0x33c4ad.create(_0x4eab2e).compute(_0x2a907e, _0x9a4612);
            }, _0x4c3667.EvpKDF);
          },
          1764: (_0x283008, _0x47b47a, _0x44bdb5) => {
            'use strict';

            var _0x3927f3, _0x26bde4, _0x5c7908, _0x5668d6;
            _0x283008.exports = (_0x5668d6 = _0x44bdb5(67921), _0x44bdb5(57101), _0x26bde4 = (_0x3927f3 = _0x5668d6).lib.CipherParams, _0x5c7908 = _0x3927f3.enc.Hex, _0x3927f3.format.Hex = {
              stringify: function (_0x119359) {
                return _0x119359.ciphertext.toString(_0x5c7908);
              },
              parse: function (_0x5677ce) {
                var _0x3281c6 = _0x5c7908.parse(_0x5677ce);
                return _0x26bde4.create({
                  ciphertext: _0x3281c6
                });
              }
            }, _0x5668d6.format.Hex);
          },
          43771: (_0x365d87, _0x34a2ae, _0xf5fad5) => {
            'use strict';

            var _0x406564, _0x34c7f5, _0x5117b8;
            _0x365d87.exports = (_0x34c7f5 = (_0x406564 = _0xf5fad5(67921)).lib.Base, _0x5117b8 = _0x406564.enc.Utf8, void (_0x406564.algo.HMAC = _0x34c7f5.extend({
              init: function (_0x3fdf71, _0x53cb20) {
                _0x3fdf71 = this._hasher = new _0x3fdf71.init();
                "string" == typeof _0x53cb20 && (_0x53cb20 = _0x5117b8.parse(_0x53cb20));
                var _0x45fa28 = _0x3fdf71.blockSize,
                  _0x4d4def = 4 * _0x45fa28;
                _0x53cb20.sigBytes > _0x4d4def && (_0x53cb20 = _0x3fdf71.finalize(_0x53cb20));
                _0x53cb20.clamp();
                for (this._iKey = _0x53cb20.clone(), (this._oKey = _0x53cb20.clone(), _0x12103a = this._oKey = _0x53cb20.clone(), _0x304fe2 = this._iKey = _0x53cb20.clone(), _0x38fab6 = _0x12103a.words, _0x39b07e = _0x304fe2.words, _0x5a1167 = 0, void 0); _0x5a1167 < _0x45fa28; _0x5a1167++) {
                  var _0x12103a, _0x304fe2, _0x38fab6, _0x39b07e, _0x5a1167;
                  _0x38fab6[_0x5a1167] ^= 1549556828;
                  _0x39b07e[_0x5a1167] ^= 909522486;
                }
                _0x12103a.sigBytes = _0x304fe2.sigBytes = _0x4d4def;
                this.reset();
              },
              reset: function () {
                var _0x191f3e = this._hasher;
                _0x191f3e.reset();
                _0x191f3e.update(this._iKey);
              },
              update: function (_0x1376a0) {
                this._hasher.update(_0x1376a0);
                return this;
              },
              finalize: function (_0x14442b) {
                var _0x39a08e = this._hasher,
                  _0x69156f = _0x39a08e.finalize(_0x14442b);
                _0x39a08e.reset();
                return _0x39a08e.finalize(this._oKey.clone().concat(_0x69156f));
              }
            })));
          },
          72025: (_0x13e3f7, _0x39476f, _0x34e8d9) => {
            'use strict';

            var _0xfe368e;
            _0x13e3f7.exports = (_0xfe368e = _0x34e8d9(67921), _0x34e8d9(89085), _0x34e8d9(41950), _0x34e8d9(99296), _0x34e8d9(14130), _0x34e8d9(29441), _0x34e8d9(69766), _0x34e8d9(19225), _0x34e8d9(83814), _0x34e8d9(61795), _0x34e8d9(18862), _0x34e8d9(80085), _0x34e8d9(6457), _0x34e8d9(12033), _0x34e8d9(43771), _0x34e8d9(46286), _0x34e8d9(97456), _0x34e8d9(57101), _0x34e8d9(12497), _0x34e8d9(10202), _0x34e8d9(23454), _0x34e8d9(56080), _0x34e8d9(2843), _0x34e8d9(42918), _0x34e8d9(22983), _0x34e8d9(63117), _0x34e8d9(8131), _0x34e8d9(42894), _0x34e8d9(1764), _0x34e8d9(80537), _0x34e8d9(25213), _0x34e8d9(22401), _0x34e8d9(90517), _0x34e8d9(68631), _0xfe368e);
          },
          41950: (_0xc45222, _0x39ea2f, _0x2a4c28) => {
            'use strict';

            var _0x2bda6a;
            _0xc45222.exports = (_0x2bda6a = _0x2a4c28(67921), function () {
              if ("function" == typeof ArrayBuffer) {
                _0x30e64d.init = function (_0x5083a0) {
                  if (_0x5083a0 instanceof ArrayBuffer && (_0x5083a0 = new Uint8Array(_0x5083a0)), (_0x5083a0 instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && _0x5083a0 instanceof Uint8ClampedArray || _0x5083a0 instanceof Int16Array || _0x5083a0 instanceof Uint16Array || _0x5083a0 instanceof Int32Array || _0x5083a0 instanceof Uint32Array || _0x5083a0 instanceof Float32Array || _0x5083a0 instanceof Float64Array) && (_0x5083a0 = new Uint8Array(_0x5083a0.buffer, _0x5083a0.byteOffset, _0x5083a0.byteLength)), _0x5083a0 instanceof Uint8Array) {
                    for (var _0x5b0870 = _0x5083a0.byteLength, _0x3a066b = [], _0x6dcee = 0; _0x6dcee < _0x5b0870; _0x6dcee++) {
                      _0x3a066b[_0x6dcee >>> 2] |= _0x5083a0[_0x6dcee] << 24 - _0x6dcee % 4 * 8;
                    }
                    _0x46e8bc.call(this, _0x3a066b, _0x5b0870);
                  } else {
                    _0x46e8bc.apply(this, arguments);
                  }
                };
                var _0x30e64d = _0x2bda6a.lib.WordArray,
                  _0x46e8bc = _0x30e64d.init,
                  _0x4930cd = _0x30e64d.init;
                _0x4930cd.prototype = _0x30e64d;
              }
            }(), _0x2bda6a.lib.WordArray);
          },
          69766: (_0x4b4b8c, _0x461cee, _0x2d6ed5) => {
            'use strict';

            var _0x3de31b;
            _0x4b4b8c.exports = (_0x3de31b = _0x2d6ed5(67921), function (_0x48969c) {
              var _0x461b06 = _0x3de31b,
                _0x5e99be = _0x461b06.lib,
                _0xab3c0e = _0x5e99be.WordArray,
                _0x43acbe = _0x5e99be.Hasher,
                _0x3e47d5 = _0x461b06.algo,
                _0x773b24 = [];
              !function () {
                for (var _0x366755 = 0; _0x366755 < 64; _0x366755++) {
                  _0x773b24[_0x366755] = 4294967296 * _0x48969c.abs(_0x48969c.sin(_0x366755 + 1)) | 0;
                }
              }();
              _0x3e47d5.MD5 = _0x43acbe.extend({
                _doReset: function () {
                  this._hash = new _0xab3c0e.init([1732584193, 4023233417, 2562383102, 271733878]);
                },
                _doProcessBlock: function (_0x50e54d, _0x4c99c2) {
                  for (var _0x280276 = 0; _0x280276 < 16; _0x280276++) {
                    var _0x3a7b51 = _0x4c99c2 + _0x280276,
                      _0x12a6c4 = _0x50e54d[_0x3a7b51];
                    _0x50e54d[_0x3a7b51] = 16711935 & (_0x12a6c4 << 8 | _0x12a6c4 >>> 24) | 4278255360 & (_0x12a6c4 << 24 | _0x12a6c4 >>> 8);
                  }
                  var _0x35e1eb = this._hash.words,
                    _0x1a4246 = _0x50e54d[_0x4c99c2 + 0],
                    _0xce263b = _0x50e54d[_0x4c99c2 + 1],
                    _0x48e019 = _0x50e54d[_0x4c99c2 + 2],
                    _0x37dc27 = _0x50e54d[_0x4c99c2 + 3],
                    _0x14d3e9 = _0x50e54d[_0x4c99c2 + 4],
                    _0x3a0ba2 = _0x50e54d[_0x4c99c2 + 5],
                    _0x32e16e = _0x50e54d[_0x4c99c2 + 6],
                    _0x5e5271 = _0x50e54d[_0x4c99c2 + 7],
                    _0x5e2b39 = _0x50e54d[_0x4c99c2 + 8],
                    _0x53ec12 = _0x50e54d[_0x4c99c2 + 9],
                    _0x5a3c68 = _0x50e54d[_0x4c99c2 + 10],
                    _0x439621 = _0x50e54d[_0x4c99c2 + 11],
                    _0x495375 = _0x50e54d[_0x4c99c2 + 12],
                    _0x57d35a = _0x50e54d[_0x4c99c2 + 13],
                    _0x161ec3 = _0x50e54d[_0x4c99c2 + 14],
                    _0x3c4946 = _0x50e54d[_0x4c99c2 + 15],
                    _0x2a3554 = _0x35e1eb[0],
                    _0x5e8c8f = _0x35e1eb[1],
                    _0x546f4b = _0x35e1eb[2],
                    _0x1c7924 = _0x35e1eb[3];
                  _0x2a3554 = _0x466ccf(_0x2a3554, _0x5e8c8f, _0x546f4b, _0x1c7924, _0x1a4246, 7, _0x773b24[0]);
                  _0x1c7924 = _0x466ccf(_0x1c7924, _0x2a3554, _0x5e8c8f, _0x546f4b, _0xce263b, 12, _0x773b24[1]);
                  _0x546f4b = _0x466ccf(_0x546f4b, _0x1c7924, _0x2a3554, _0x5e8c8f, _0x48e019, 17, _0x773b24[2]);
                  _0x5e8c8f = _0x466ccf(_0x5e8c8f, _0x546f4b, _0x1c7924, _0x2a3554, _0x37dc27, 22, _0x773b24[3]);
                  _0x2a3554 = _0x466ccf(_0x2a3554, _0x5e8c8f, _0x546f4b, _0x1c7924, _0x14d3e9, 7, _0x773b24[4]);
                  _0x1c7924 = _0x466ccf(_0x1c7924, _0x2a3554, _0x5e8c8f, _0x546f4b, _0x3a0ba2, 12, _0x773b24[5]);
                  _0x546f4b = _0x466ccf(_0x546f4b, _0x1c7924, _0x2a3554, _0x5e8c8f, _0x32e16e, 17, _0x773b24[6]);
                  _0x5e8c8f = _0x466ccf(_0x5e8c8f, _0x546f4b, _0x1c7924, _0x2a3554, _0x5e5271, 22, _0x773b24[7]);
                  _0x2a3554 = _0x466ccf(_0x2a3554, _0x5e8c8f, _0x546f4b, _0x1c7924, _0x5e2b39, 7, _0x773b24[8]);
                  _0x1c7924 = _0x466ccf(_0x1c7924, _0x2a3554, _0x5e8c8f, _0x546f4b, _0x53ec12, 12, _0x773b24[9]);
                  _0x546f4b = _0x466ccf(_0x546f4b, _0x1c7924, _0x2a3554, _0x5e8c8f, _0x5a3c68, 17, _0x773b24[10]);
                  _0x5e8c8f = _0x466ccf(_0x5e8c8f, _0x546f4b, _0x1c7924, _0x2a3554, _0x439621, 22, _0x773b24[11]);
                  _0x2a3554 = _0x466ccf(_0x2a3554, _0x5e8c8f, _0x546f4b, _0x1c7924, _0x495375, 7, _0x773b24[12]);
                  _0x1c7924 = _0x466ccf(_0x1c7924, _0x2a3554, _0x5e8c8f, _0x546f4b, _0x57d35a, 12, _0x773b24[13]);
                  _0x546f4b = _0x466ccf(_0x546f4b, _0x1c7924, _0x2a3554, _0x5e8c8f, _0x161ec3, 17, _0x773b24[14]);
                  _0x2a3554 = _0x58047f(_0x2a3554, _0x5e8c8f = _0x466ccf(_0x5e8c8f, _0x546f4b, _0x1c7924, _0x2a3554, _0x3c4946, 22, _0x773b24[15]), _0x546f4b, _0x1c7924, _0xce263b, 5, _0x773b24[16]);
                  _0x1c7924 = _0x58047f(_0x1c7924, _0x2a3554, _0x5e8c8f, _0x546f4b, _0x32e16e, 9, _0x773b24[17]);
                  _0x546f4b = _0x58047f(_0x546f4b, _0x1c7924, _0x2a3554, _0x5e8c8f, _0x439621, 14, _0x773b24[18]);
                  _0x5e8c8f = _0x58047f(_0x5e8c8f, _0x546f4b, _0x1c7924, _0x2a3554, _0x1a4246, 20, _0x773b24[19]);
                  _0x2a3554 = _0x58047f(_0x2a3554, _0x5e8c8f, _0x546f4b, _0x1c7924, _0x3a0ba2, 5, _0x773b24[20]);
                  _0x1c7924 = _0x58047f(_0x1c7924, _0x2a3554, _0x5e8c8f, _0x546f4b, _0x5a3c68, 9, _0x773b24[21]);
                  _0x546f4b = _0x58047f(_0x546f4b, _0x1c7924, _0x2a3554, _0x5e8c8f, _0x3c4946, 14, _0x773b24[22]);
                  _0x5e8c8f = _0x58047f(_0x5e8c8f, _0x546f4b, _0x1c7924, _0x2a3554, _0x14d3e9, 20, _0x773b24[23]);
                  _0x2a3554 = _0x58047f(_0x2a3554, _0x5e8c8f, _0x546f4b, _0x1c7924, _0x53ec12, 5, _0x773b24[24]);
                  _0x1c7924 = _0x58047f(_0x1c7924, _0x2a3554, _0x5e8c8f, _0x546f4b, _0x161ec3, 9, _0x773b24[25]);
                  _0x546f4b = _0x58047f(_0x546f4b, _0x1c7924, _0x2a3554, _0x5e8c8f, _0x37dc27, 14, _0x773b24[26]);
                  _0x5e8c8f = _0x58047f(_0x5e8c8f, _0x546f4b, _0x1c7924, _0x2a3554, _0x5e2b39, 20, _0x773b24[27]);
                  _0x2a3554 = _0x58047f(_0x2a3554, _0x5e8c8f, _0x546f4b, _0x1c7924, _0x57d35a, 5, _0x773b24[28]);
                  _0x1c7924 = _0x58047f(_0x1c7924, _0x2a3554, _0x5e8c8f, _0x546f4b, _0x48e019, 9, _0x773b24[29]);
                  _0x546f4b = _0x58047f(_0x546f4b, _0x1c7924, _0x2a3554, _0x5e8c8f, _0x5e5271, 14, _0x773b24[30]);
                  _0x2a3554 = _0x100256(_0x2a3554, _0x5e8c8f = _0x58047f(_0x5e8c8f, _0x546f4b, _0x1c7924, _0x2a3554, _0x495375, 20, _0x773b24[31]), _0x546f4b, _0x1c7924, _0x3a0ba2, 4, _0x773b24[32]);
                  _0x1c7924 = _0x100256(_0x1c7924, _0x2a3554, _0x5e8c8f, _0x546f4b, _0x5e2b39, 11, _0x773b24[33]);
                  _0x546f4b = _0x100256(_0x546f4b, _0x1c7924, _0x2a3554, _0x5e8c8f, _0x439621, 16, _0x773b24[34]);
                  _0x5e8c8f = _0x100256(_0x5e8c8f, _0x546f4b, _0x1c7924, _0x2a3554, _0x161ec3, 23, _0x773b24[35]);
                  _0x2a3554 = _0x100256(_0x2a3554, _0x5e8c8f, _0x546f4b, _0x1c7924, _0xce263b, 4, _0x773b24[36]);
                  _0x1c7924 = _0x100256(_0x1c7924, _0x2a3554, _0x5e8c8f, _0x546f4b, _0x14d3e9, 11, _0x773b24[37]);
                  _0x546f4b = _0x100256(_0x546f4b, _0x1c7924, _0x2a3554, _0x5e8c8f, _0x5e5271, 16, _0x773b24[38]);
                  _0x5e8c8f = _0x100256(_0x5e8c8f, _0x546f4b, _0x1c7924, _0x2a3554, _0x5a3c68, 23, _0x773b24[39]);
                  _0x2a3554 = _0x100256(_0x2a3554, _0x5e8c8f, _0x546f4b, _0x1c7924, _0x57d35a, 4, _0x773b24[40]);
                  _0x1c7924 = _0x100256(_0x1c7924, _0x2a3554, _0x5e8c8f, _0x546f4b, _0x1a4246, 11, _0x773b24[41]);
                  _0x546f4b = _0x100256(_0x546f4b, _0x1c7924, _0x2a3554, _0x5e8c8f, _0x37dc27, 16, _0x773b24[42]);
                  _0x5e8c8f = _0x100256(_0x5e8c8f, _0x546f4b, _0x1c7924, _0x2a3554, _0x32e16e, 23, _0x773b24[43]);
                  _0x2a3554 = _0x100256(_0x2a3554, _0x5e8c8f, _0x546f4b, _0x1c7924, _0x53ec12, 4, _0x773b24[44]);
                  _0x1c7924 = _0x100256(_0x1c7924, _0x2a3554, _0x5e8c8f, _0x546f4b, _0x495375, 11, _0x773b24[45]);
                  _0x546f4b = _0x100256(_0x546f4b, _0x1c7924, _0x2a3554, _0x5e8c8f, _0x3c4946, 16, _0x773b24[46]);
                  _0x2a3554 = _0x40a7d4(_0x2a3554, _0x5e8c8f = _0x100256(_0x5e8c8f, _0x546f4b, _0x1c7924, _0x2a3554, _0x48e019, 23, _0x773b24[47]), _0x546f4b, _0x1c7924, _0x1a4246, 6, _0x773b24[48]);
                  _0x1c7924 = _0x40a7d4(_0x1c7924, _0x2a3554, _0x5e8c8f, _0x546f4b, _0x5e5271, 10, _0x773b24[49]);
                  _0x546f4b = _0x40a7d4(_0x546f4b, _0x1c7924, _0x2a3554, _0x5e8c8f, _0x161ec3, 15, _0x773b24[50]);
                  _0x5e8c8f = _0x40a7d4(_0x5e8c8f, _0x546f4b, _0x1c7924, _0x2a3554, _0x3a0ba2, 21, _0x773b24[51]);
                  _0x2a3554 = _0x40a7d4(_0x2a3554, _0x5e8c8f, _0x546f4b, _0x1c7924, _0x495375, 6, _0x773b24[52]);
                  _0x1c7924 = _0x40a7d4(_0x1c7924, _0x2a3554, _0x5e8c8f, _0x546f4b, _0x37dc27, 10, _0x773b24[53]);
                  _0x546f4b = _0x40a7d4(_0x546f4b, _0x1c7924, _0x2a3554, _0x5e8c8f, _0x5a3c68, 15, _0x773b24[54]);
                  _0x5e8c8f = _0x40a7d4(_0x5e8c8f, _0x546f4b, _0x1c7924, _0x2a3554, _0xce263b, 21, _0x773b24[55]);
                  _0x2a3554 = _0x40a7d4(_0x2a3554, _0x5e8c8f, _0x546f4b, _0x1c7924, _0x5e2b39, 6, _0x773b24[56]);
                  _0x1c7924 = _0x40a7d4(_0x1c7924, _0x2a3554, _0x5e8c8f, _0x546f4b, _0x3c4946, 10, _0x773b24[57]);
                  _0x546f4b = _0x40a7d4(_0x546f4b, _0x1c7924, _0x2a3554, _0x5e8c8f, _0x32e16e, 15, _0x773b24[58]);
                  _0x5e8c8f = _0x40a7d4(_0x5e8c8f, _0x546f4b, _0x1c7924, _0x2a3554, _0x57d35a, 21, _0x773b24[59]);
                  _0x2a3554 = _0x40a7d4(_0x2a3554, _0x5e8c8f, _0x546f4b, _0x1c7924, _0x14d3e9, 6, _0x773b24[60]);
                  _0x1c7924 = _0x40a7d4(_0x1c7924, _0x2a3554, _0x5e8c8f, _0x546f4b, _0x439621, 10, _0x773b24[61]);
                  _0x546f4b = _0x40a7d4(_0x546f4b, _0x1c7924, _0x2a3554, _0x5e8c8f, _0x48e019, 15, _0x773b24[62]);
                  _0x5e8c8f = _0x40a7d4(_0x5e8c8f, _0x546f4b, _0x1c7924, _0x2a3554, _0x53ec12, 21, _0x773b24[63]);
                  _0x35e1eb[0] = _0x35e1eb[0] + _0x2a3554 | 0;
                  _0x35e1eb[1] = _0x35e1eb[1] + _0x5e8c8f | 0;
                  _0x35e1eb[2] = _0x35e1eb[2] + _0x546f4b | 0;
                  _0x35e1eb[3] = _0x35e1eb[3] + _0x1c7924 | 0;
                },
                _doFinalize: function () {
                  var _0x524cb8 = this._data,
                    _0x2bb969 = _0x524cb8.words,
                    _0x552555 = 8 * this._nDataBytes,
                    _0x4057f6 = 8 * _0x524cb8.sigBytes;
                  _0x2bb969[_0x4057f6 >>> 5] |= 128 << 24 - _0x4057f6 % 32;
                  var _0x7264cf = _0x48969c.floor(_0x552555 / 4294967296),
                    _0x15ea43 = _0x552555;
                  _0x2bb969[15 + (_0x4057f6 + 64 >>> 9 << 4)] = 16711935 & (_0x7264cf << 8 | _0x7264cf >>> 24) | 4278255360 & (_0x7264cf << 24 | _0x7264cf >>> 8);
                  _0x2bb969[14 + (_0x4057f6 + 64 >>> 9 << 4)] = 16711935 & (_0x15ea43 << 8 | _0x15ea43 >>> 24) | 4278255360 & (_0x15ea43 << 24 | _0x15ea43 >>> 8);
                  _0x524cb8.sigBytes = 4 * (_0x2bb969.length + 1);
                  this._process();
                  for (var _0x59ce43 = this._hash, _0x4cdbfa = _0x59ce43.words, _0x2be52d = 0; _0x2be52d < 4; _0x2be52d++) {
                    var _0x42d91a = _0x4cdbfa[_0x2be52d];
                    _0x4cdbfa[_0x2be52d] = 16711935 & (_0x42d91a << 8 | _0x42d91a >>> 24) | 4278255360 & (_0x42d91a << 24 | _0x42d91a >>> 8);
                  }
                  return _0x59ce43;
                },
                clone: function () {
                  var _0x1296c4 = _0x43acbe.clone.call(this);
                  _0x1296c4._hash = this._hash.clone();
                  return _0x1296c4;
                }
              });
              var _0x4410e0 = _0x3e47d5.MD5;
              function _0x466ccf(_0x42258f, _0x3a95dc, _0x25a0de, _0xd819d8, _0x2e25aa, _0x2a0498, _0x25b958) {
                var _0x541bde = _0x42258f + (_0x3a95dc & _0x25a0de | ~_0x3a95dc & _0xd819d8) + _0x2e25aa + _0x25b958;
                return (_0x541bde << _0x2a0498 | _0x541bde >>> 32 - _0x2a0498) + _0x3a95dc;
              }
              function _0x58047f(_0x31950d, _0x358026, _0x1b49a2, _0x1fce64, _0x340415, _0x293b17, _0x401415) {
                var _0x5b051f = _0x31950d + (_0x358026 & _0x1fce64 | _0x1b49a2 & ~_0x1fce64) + _0x340415 + _0x401415;
                return (_0x5b051f << _0x293b17 | _0x5b051f >>> 32 - _0x293b17) + _0x358026;
              }
              function _0x100256(_0x1e94a8, _0x532d31, _0x339a36, _0xa0858a, _0x532481, _0x1362b5, _0x194600) {
                var _0x387e0f = _0x1e94a8 + (_0x532d31 ^ _0x339a36 ^ _0xa0858a) + _0x532481 + _0x194600;
                return (_0x387e0f << _0x1362b5 | _0x387e0f >>> 32 - _0x1362b5) + _0x532d31;
              }
              function _0x40a7d4(_0x418c76, _0x289b5e, _0x4518d7, _0x1d1acf, _0x371ef7, _0x15e9fb, _0x2875b0) {
                var _0x4e3fa8 = _0x418c76 + (_0x4518d7 ^ (_0x289b5e | ~_0x1d1acf)) + _0x371ef7 + _0x2875b0;
                return (_0x4e3fa8 << _0x15e9fb | _0x4e3fa8 >>> 32 - _0x15e9fb) + _0x289b5e;
              }
              _0x461b06.MD5 = _0x43acbe._createHelper(_0x4410e0);
              _0x461b06.HmacMD5 = _0x43acbe._createHmacHelper(_0x4410e0);
            }(Math), _0x3de31b.MD5);
          },
          12497: (_0x9b45bb, _0x24fa6c, _0x199c07) => {
            'use strict';

            var _0x847e35;
            _0x9b45bb.exports = (_0x847e35 = _0x199c07(67921), _0x199c07(57101), _0x847e35.mode.CFB = function () {
              var _0x37da03 = _0x847e35.lib.BlockCipherMode.extend();
              function _0x5258a3(_0x59b5ca, _0x44b227, _0x3b78bc, _0x45f244) {
                var _0x5d7bfc,
                  _0x50cbc0 = this._iv;
                _0x50cbc0 ? (_0x5d7bfc = _0x50cbc0.slice(0), this._iv = void 0) : _0x5d7bfc = this._prevBlock;
                _0x45f244.encryptBlock(_0x5d7bfc, 0);
                for (var _0x540cec = 0; _0x540cec < _0x3b78bc; _0x540cec++) {
                  _0x59b5ca[_0x44b227 + _0x540cec] ^= _0x5d7bfc[_0x540cec];
                }
              }
              _0x37da03.Encryptor = _0x37da03.extend({
                processBlock: function (_0x4d2877, _0x311fcf) {
                  var _0x17a273 = this._cipher,
                    _0x2d30b8 = _0x17a273.blockSize;
                  _0x5258a3.call(this, _0x4d2877, _0x311fcf, _0x2d30b8, _0x17a273);
                  this._prevBlock = _0x4d2877.slice(_0x311fcf, _0x311fcf + _0x2d30b8);
                }
              });
              _0x37da03.Decryptor = _0x37da03.extend({
                processBlock: function (_0x242b04, _0x4f26bb) {
                  var _0xcf0a50 = this._cipher,
                    _0x15ebcb = _0xcf0a50.blockSize,
                    _0x36d374 = _0x242b04.slice(_0x4f26bb, _0x4f26bb + _0x15ebcb);
                  _0x5258a3.call(this, _0x242b04, _0x4f26bb, _0x15ebcb, _0xcf0a50);
                  this._prevBlock = _0x36d374;
                }
              });
              return _0x37da03;
            }(), _0x847e35.mode.CFB);
          },
          23454: (_0x40e6ec, _0x3202a3, _0x1887e9) => {
            'use strict';

            var _0x41c97b;
            _0x40e6ec.exports = (_0x41c97b = _0x1887e9(67921), _0x1887e9(57101), _0x41c97b.mode.CTRGladman = function () {
              var _0x30fa5b = _0x41c97b.lib.BlockCipherMode.extend();
              function _0x36e4ae(_0x52947e) {
                if (255 == (_0x52947e >> 24 & 255)) {
                  var _0x31e4ab = _0x52947e >> 16 & 255,
                    _0x4c11dc = _0x52947e >> 8 & 255,
                    _0x4e13a8 = 255 & _0x52947e;
                  255 === _0x31e4ab ? (_0x31e4ab = 0, 255 === _0x4c11dc ? (_0x4c11dc = 0, 255 === _0x4e13a8 ? _0x4e13a8 = 0 : ++_0x4e13a8) : ++_0x4c11dc) : ++_0x31e4ab;
                  _0x52947e = 0;
                  _0x52947e += _0x31e4ab << 16;
                  _0x52947e += _0x4c11dc << 8;
                  _0x52947e += _0x4e13a8;
                } else {
                  _0x52947e += 16777216;
                }
                return _0x52947e;
              }
              _0x30fa5b.Encryptor = _0x30fa5b.extend({
                processBlock: function (_0x2b3fc7, _0x328aec) {
                  var _0x3ebefe = this._cipher,
                    _0x366599 = _0x3ebefe.blockSize,
                    _0x502e49 = this._iv,
                    _0x239657 = this._counter;
                  _0x502e49 && (_0x239657 = this._counter = _0x502e49.slice(0), this._iv = void 0);
                  (function (_0x42eade) {
                    0 === (_0x42eade[0] = _0x36e4ae(_0x42eade[0])) && (_0x42eade[1] = _0x36e4ae(_0x42eade[1]));
                  })(_0x239657);
                  var _0x1a8bda = _0x239657.slice(0);
                  _0x3ebefe.encryptBlock(_0x1a8bda, 0);
                  for (var _0x107970 = 0; _0x107970 < _0x366599; _0x107970++) {
                    _0x2b3fc7[_0x328aec + _0x107970] ^= _0x1a8bda[_0x107970];
                  }
                }
              });
              var _0xb7efa9 = _0x30fa5b.Encryptor;
              _0x30fa5b.Decryptor = _0xb7efa9;
              return _0x30fa5b;
            }(), _0x41c97b.mode.CTRGladman);
          },
          10202: (_0x47581d, _0x5733cb, _0x12b5ed) => {
            'use strict';

            var _0xbdf018, _0x2166d6, _0x4669c7;
            _0x47581d.exports = (_0x4669c7 = _0x12b5ed(67921), _0x12b5ed(57101), _0x4669c7.mode.CTR = (_0x2166d6 = (_0xbdf018 = _0x4669c7.lib.BlockCipherMode.extend()).Encryptor = _0xbdf018.extend({
              processBlock: function (_0x344c97, _0x5553dc) {
                var _0x481403 = this._cipher,
                  _0x44ce5e = _0x481403.blockSize,
                  _0x2eeb9b = this._iv,
                  _0xdcf623 = this._counter;
                _0x2eeb9b && (_0xdcf623 = this._counter = _0x2eeb9b.slice(0), this._iv = void 0);
                var _0x28d022 = _0xdcf623.slice(0);
                _0x481403.encryptBlock(_0x28d022, 0);
                _0xdcf623[_0x44ce5e - 1] = _0xdcf623[_0x44ce5e - 1] + 1 | 0;
                for (var _0x21d17a = 0; _0x21d17a < _0x44ce5e; _0x21d17a++) {
                  _0x344c97[_0x5553dc + _0x21d17a] ^= _0x28d022[_0x21d17a];
                }
              }
            }), _0xbdf018.Decryptor = _0x2166d6, _0xbdf018), _0x4669c7.mode.CTR);
          },
          2843: (_0x4f4389, _0x3cb098, _0x56ae64) => {
            'use strict';

            var _0x2e547e, _0x4dc521;
            _0x4f4389.exports = (_0x4dc521 = _0x56ae64(67921), _0x56ae64(57101), _0x4dc521.mode.ECB = ((_0x2e547e = _0x4dc521.lib.BlockCipherMode.extend()).Encryptor = _0x2e547e.extend({
              processBlock: function (_0x576466, _0x17be38) {
                this._cipher.encryptBlock(_0x576466, _0x17be38);
              }
            }), _0x2e547e.Decryptor = _0x2e547e.extend({
              processBlock: function (_0x4620bc, _0x3d91a7) {
                this._cipher.decryptBlock(_0x4620bc, _0x3d91a7);
              }
            }), _0x2e547e), _0x4dc521.mode.ECB);
          },
          56080: (_0x36f485, _0x2fd3c3, _0x4b4008) => {
            'use strict';

            var _0x43422b, _0x154ae5, _0x1e76a6;
            _0x36f485.exports = (_0x1e76a6 = _0x4b4008(67921), _0x4b4008(57101), _0x1e76a6.mode.OFB = (_0x154ae5 = (_0x43422b = _0x1e76a6.lib.BlockCipherMode.extend()).Encryptor = _0x43422b.extend({
              processBlock: function (_0x338bc2, _0x3a4dc2) {
                var _0x5ee294 = this._cipher,
                  _0x1d754b = _0x5ee294.blockSize,
                  _0x464164 = this._iv,
                  _0x28b228 = this._keystream;
                _0x464164 && (_0x28b228 = this._keystream = _0x464164.slice(0), this._iv = void 0);
                _0x5ee294.encryptBlock(_0x28b228, 0);
                for (var _0x12b30d = 0; _0x12b30d < _0x1d754b; _0x12b30d++) {
                  _0x338bc2[_0x3a4dc2 + _0x12b30d] ^= _0x28b228[_0x12b30d];
                }
              }
            }), _0x43422b.Decryptor = _0x154ae5, _0x43422b), _0x1e76a6.mode.OFB);
          },
          42918: (_0x38577d, _0x34ea26, _0x3cb8c2) => {
            'use strict';

            var _0x4d92fa;
            _0x38577d.exports = (_0x4d92fa = _0x3cb8c2(67921), _0x3cb8c2(57101), _0x4d92fa.pad.AnsiX923 = {
              pad: function (_0x2b7d71, _0x1beb2a) {
                var _0x2d2ddd = _0x2b7d71.sigBytes,
                  _0x1a698b = 4 * _0x1beb2a,
                  _0x4426e4 = _0x1a698b - _0x2d2ddd % _0x1a698b,
                  _0x3637a3 = _0x2d2ddd + _0x4426e4 - 1;
                _0x2b7d71.clamp();
                _0x2b7d71.words[_0x3637a3 >>> 2] |= _0x4426e4 << 24 - _0x3637a3 % 4 * 8;
                _0x2b7d71.sigBytes += _0x4426e4;
              },
              unpad: function (_0x40a89b) {
                var _0x1a1f35 = 255 & _0x40a89b.words[_0x40a89b.sigBytes - 1 >>> 2];
                _0x40a89b.sigBytes -= _0x1a1f35;
              }
            }, _0x4d92fa.pad.Ansix923);
          },
          22983: (_0x1e4909, _0x4bc641, _0xe19978) => {
            'use strict';

            var _0x390a64;
            _0x1e4909.exports = (_0x390a64 = _0xe19978(67921), _0xe19978(57101), _0x390a64.pad.Iso10126 = {
              pad: function (_0x56aaf6, _0x5764d5) {
                var _0x4be0f4 = 4 * _0x5764d5,
                  _0x4ee69b = _0x4be0f4 - _0x56aaf6.sigBytes % _0x4be0f4;
                _0x56aaf6.concat(_0x390a64.lib.WordArray.random(_0x4ee69b - 1)).concat(_0x390a64.lib.WordArray.create([_0x4ee69b << 24], 1));
              },
              unpad: function (_0x51f500) {
                var _0x1e7323 = 255 & _0x51f500.words[_0x51f500.sigBytes - 1 >>> 2];
                _0x51f500.sigBytes -= _0x1e7323;
              }
            }, _0x390a64.pad.Iso10126);
          },
          63117: (_0x287e9e, _0x2b701d, _0x2f3753) => {
            'use strict';

            var _0x1734ef;
            _0x287e9e.exports = (_0x1734ef = _0x2f3753(67921), _0x2f3753(57101), _0x1734ef.pad.Iso97971 = {
              pad: function (_0x33ffd2, _0x4ab551) {
                _0x33ffd2.concat(_0x1734ef.lib.WordArray.create([2147483648], 1));
                _0x1734ef.pad.ZeroPadding.pad(_0x33ffd2, _0x4ab551);
              },
              unpad: function (_0x3fabc7) {
                _0x1734ef.pad.ZeroPadding.unpad(_0x3fabc7);
                _0x3fabc7.sigBytes--;
              }
            }, _0x1734ef.pad.Iso97971);
          },
          42894: (_0x59c83e, _0x48cda7, _0x2aed0a) => {
            'use strict';

            var _0x535d5b;
            _0x59c83e.exports = (_0x535d5b = _0x2aed0a(67921), _0x2aed0a(57101), _0x535d5b.pad.NoPadding = {
              pad: function () {},
              unpad: function () {}
            }, _0x535d5b.pad.NoPadding);
          },
          8131: (_0x58e806, _0xe3e0ac, _0x4b0393) => {
            'use strict';

            var _0xe96381;
            _0x58e806.exports = (_0xe96381 = _0x4b0393(67921), _0x4b0393(57101), _0xe96381.pad.ZeroPadding = {
              pad: function (_0x2602da, _0x481e32) {
                var _0x317d25 = 4 * _0x481e32;
                _0x2602da.clamp();
                _0x2602da.sigBytes += _0x317d25 - (_0x2602da.sigBytes % _0x317d25 || _0x317d25);
              },
              unpad: function (_0x9971f3) {
                var _0x32e4f0 = _0x9971f3.words,
                  _0x592459 = _0x9971f3.sigBytes - 1;
                for (_0x592459 = _0x9971f3.sigBytes - 1; _0x592459 >= 0; _0x592459--) {
                  if (_0x32e4f0[_0x592459 >>> 2] >>> 24 - _0x592459 % 4 * 8 & 255) {
                    _0x9971f3.sigBytes = _0x592459 + 1;
                    break;
                  }
                }
              }
            }, _0xe96381.pad.ZeroPadding);
          },
          46286: (_0x35f4a1, _0x45ec2f, _0x57c052) => {
            'use strict';

            var _0x56ffc3, _0x218f3a, _0x5445e8, _0x25ed48, _0x3acacf, _0x5128b1, _0x35beea, _0x359e06, _0x3e6d3a;
            _0x35f4a1.exports = (_0x3e6d3a = _0x57c052(67921), _0x57c052(19225), _0x57c052(43771), _0x5445e8 = (_0x218f3a = (_0x56ffc3 = _0x3e6d3a).lib).Base, _0x25ed48 = _0x218f3a.WordArray, _0x5128b1 = (_0x3acacf = _0x56ffc3.algo).SHA1, _0x35beea = _0x3acacf.HMAC, _0x359e06 = _0x3acacf.PBKDF2 = _0x5445e8.extend({
              cfg: _0x5445e8.extend({
                keySize: 4,
                hasher: _0x5128b1,
                iterations: 1
              }),
              init: function (_0xf74581) {
                this.cfg = this.cfg.extend(_0xf74581);
              },
              compute: function (_0xff0235, _0x30095e) {
                for (var _0x21e98e = this.cfg, _0x5a2027 = _0x35beea.create(_0x21e98e.hasher, _0xff0235), _0x3556f5 = _0x25ed48.create(), _0x2a3fd7 = _0x25ed48.create([1]), _0x4f68fd = _0x3556f5.words, _0x2fe35b = _0x2a3fd7.words, _0x5ef98d = _0x21e98e.keySize, _0x69bed5 = _0x21e98e.iterations; _0x4f68fd.length < _0x5ef98d;) {
                  var _0x2a74f7 = _0x5a2027.update(_0x30095e).finalize(_0x2a3fd7);
                  _0x5a2027.reset();
                  for (var _0xb64d06 = _0x2a74f7.words, _0x51a9e7 = _0xb64d06.length, _0x3cba08 = _0x2a74f7, _0x2635bc = 1; _0x2635bc < _0x69bed5; _0x2635bc++) {
                    _0x3cba08 = _0x5a2027.finalize(_0x3cba08);
                    _0x5a2027.reset();
                    for (var _0x5ae474 = _0x3cba08.words, _0x45de21 = 0; _0x45de21 < _0x51a9e7; _0x45de21++) {
                      _0xb64d06[_0x45de21] ^= _0x5ae474[_0x45de21];
                    }
                  }
                  _0x3556f5.concat(_0x2a74f7);
                  _0x2fe35b[0]++;
                }
                _0x3556f5.sigBytes = 4 * _0x5ef98d;
                return _0x3556f5;
              }
            }), _0x56ffc3.PBKDF2 = function (_0x16c311, _0x146c0e, _0xdb6064) {
              return _0x359e06.create(_0xdb6064).compute(_0x16c311, _0x146c0e);
            }, _0x3e6d3a.PBKDF2);
          },
          68631: (_0x4edd22, _0x36dc7b, _0x5ba784) => {
            'use strict';

            var _0x30bdae;
            _0x4edd22.exports = (_0x30bdae = _0x5ba784(67921), _0x5ba784(14130), _0x5ba784(69766), _0x5ba784(97456), _0x5ba784(57101), function () {
              _0x3abfd9.RabbitLegacy = _0x54d3d6.extend({
                _doReset: function () {
                  this._X = [_0xcf1d95[0], _0xcf1d95[3] << 16 | _0xcf1d95[2] >>> 16, _0xcf1d95[1], _0xcf1d95[0] << 16 | _0xcf1d95[3] >>> 16, _0xcf1d95[2], _0xcf1d95[1] << 16 | _0xcf1d95[0] >>> 16, _0xcf1d95[3], _0xcf1d95[2] << 16 | _0xcf1d95[1] >>> 16];
                  this._C = [_0xcf1d95[2] << 16 | _0xcf1d95[2] >>> 16, 4294901760 & _0xcf1d95[0] | 65535 & _0xcf1d95[1], _0xcf1d95[3] << 16 | _0xcf1d95[3] >>> 16, 4294901760 & _0xcf1d95[1] | 65535 & _0xcf1d95[2], _0xcf1d95[0] << 16 | _0xcf1d95[0] >>> 16, 4294901760 & _0xcf1d95[2] | 65535 & _0xcf1d95[3], _0xcf1d95[1] << 16 | _0xcf1d95[1] >>> 16, 4294901760 & _0xcf1d95[3] | 65535 & _0xcf1d95[0]];
                  var _0xcf1d95 = this._key.words,
                    _0x3c3134 = this.cfg.iv,
                    _0x2170e7 = this._X,
                    _0x40934c = this._C;
                  this._b = 0;
                  for (var _0x42579f = 0; _0x42579f < 4; _0x42579f++) {
                    _0x54331d.call(this);
                  }
                  for (_0x42579f = 0; _0x42579f < 8; _0x42579f++) {
                    _0x40934c[_0x42579f] ^= _0x2170e7[_0x42579f + 4 & 7];
                  }
                  if (_0x3c3134) {
                    var _0x100574 = _0x3c3134.words,
                      _0x35579c = _0x100574[0],
                      _0x9512f9 = _0x100574[1],
                      _0x381eb6 = 16711935 & (_0x35579c << 8 | _0x35579c >>> 24) | 4278255360 & (_0x35579c << 24 | _0x35579c >>> 8),
                      _0x2490ad = 16711935 & (_0x9512f9 << 8 | _0x9512f9 >>> 24) | 4278255360 & (_0x9512f9 << 24 | _0x9512f9 >>> 8),
                      _0x2f5772 = _0x381eb6 >>> 16 | 4294901760 & _0x2490ad,
                      _0x13cada = _0x2490ad << 16 | 65535 & _0x381eb6;
                    for (_0x40934c[0] ^= _0x381eb6, _0x40934c[1] ^= _0x2f5772, _0x40934c[2] ^= _0x2490ad, _0x40934c[3] ^= _0x13cada, _0x40934c[4] ^= _0x381eb6, _0x40934c[5] ^= _0x2f5772, _0x40934c[6] ^= _0x2490ad, _0x40934c[7] ^= _0x13cada, _0x42579f = 0; _0x42579f < 4; _0x42579f++) {
                      _0x54331d.call(this);
                    }
                  }
                },
                _doProcessBlock: function (_0x4e46c8, _0x28817b) {
                  var _0x37c305 = this._X;
                  _0x54331d.call(this);
                  _0x6d2798[0] = _0x37c305[0] ^ _0x37c305[5] >>> 16 ^ _0x37c305[3] << 16;
                  _0x6d2798[1] = _0x37c305[2] ^ _0x37c305[7] >>> 16 ^ _0x37c305[5] << 16;
                  _0x6d2798[2] = _0x37c305[4] ^ _0x37c305[1] >>> 16 ^ _0x37c305[7] << 16;
                  _0x6d2798[3] = _0x37c305[6] ^ _0x37c305[3] >>> 16 ^ _0x37c305[1] << 16;
                  for (var _0x2429c9 = 0; _0x2429c9 < 4; _0x2429c9++) {
                    _0x6d2798[_0x2429c9] = 16711935 & (_0x6d2798[_0x2429c9] << 8 | _0x6d2798[_0x2429c9] >>> 24) | 4278255360 & (_0x6d2798[_0x2429c9] << 24 | _0x6d2798[_0x2429c9] >>> 8);
                    _0x4e46c8[_0x28817b + _0x2429c9] ^= _0x6d2798[_0x2429c9];
                  }
                },
                blockSize: 4,
                ivSize: 2
              });
              var _0xd82f6 = _0x30bdae,
                _0x54d3d6 = _0xd82f6.lib.StreamCipher,
                _0x3abfd9 = _0xd82f6.algo,
                _0x6d2798 = [],
                _0x4e180f = [],
                _0x107abc = [],
                _0x166fc4 = _0x3abfd9.RabbitLegacy;
              function _0x54331d() {
                for (var _0x20190d = this._X, _0x18e127 = this._C, _0x102b55 = 0; _0x102b55 < 8; _0x102b55++) {
                  _0x4e180f[_0x102b55] = _0x18e127[_0x102b55];
                }
                for (_0x18e127[0] = _0x18e127[0] + 1295307597 + this._b | 0, _0x18e127[1] = _0x18e127[1] + 3545052371 + (_0x18e127[0] >>> 0 < _0x4e180f[0] >>> 0 ? 1 : 0) | 0, _0x18e127[2] = _0x18e127[2] + 886263092 + (_0x18e127[1] >>> 0 < _0x4e180f[1] >>> 0 ? 1 : 0) | 0, _0x18e127[3] = _0x18e127[3] + 1295307597 + (_0x18e127[2] >>> 0 < _0x4e180f[2] >>> 0 ? 1 : 0) | 0, _0x18e127[4] = _0x18e127[4] + 3545052371 + (_0x18e127[3] >>> 0 < _0x4e180f[3] >>> 0 ? 1 : 0) | 0, _0x18e127[5] = _0x18e127[5] + 886263092 + (_0x18e127[4] >>> 0 < _0x4e180f[4] >>> 0 ? 1 : 0) | 0, _0x18e127[6] = _0x18e127[6] + 1295307597 + (_0x18e127[5] >>> 0 < _0x4e180f[5] >>> 0 ? 1 : 0) | 0, _0x18e127[7] = _0x18e127[7] + 3545052371 + (_0x18e127[6] >>> 0 < _0x4e180f[6] >>> 0 ? 1 : 0) | 0, this._b = _0x18e127[7] >>> 0 < _0x4e180f[7] >>> 0 ? 1 : 0, _0x102b55 = 0; _0x102b55 < 8; _0x102b55++) {
                  var _0x3bbf77 = _0x20190d[_0x102b55] + _0x18e127[_0x102b55],
                    _0x17bd80 = 65535 & _0x3bbf77,
                    _0x5034c8 = _0x3bbf77 >>> 16,
                    _0x5f4d7e = ((_0x17bd80 * _0x17bd80 >>> 17) + _0x17bd80 * _0x5034c8 >>> 15) + _0x5034c8 * _0x5034c8,
                    _0x578d38 = ((4294901760 & _0x3bbf77) * _0x3bbf77 | 0) + ((65535 & _0x3bbf77) * _0x3bbf77 | 0);
                  _0x107abc[_0x102b55] = _0x5f4d7e ^ _0x578d38;
                }
                _0x20190d[0] = _0x107abc[0] + (_0x107abc[7] << 16 | _0x107abc[7] >>> 16) + (_0x107abc[6] << 16 | _0x107abc[6] >>> 16) | 0;
                _0x20190d[1] = _0x107abc[1] + (_0x107abc[0] << 8 | _0x107abc[0] >>> 24) + _0x107abc[7] | 0;
                _0x20190d[2] = _0x107abc[2] + (_0x107abc[1] << 16 | _0x107abc[1] >>> 16) + (_0x107abc[0] << 16 | _0x107abc[0] >>> 16) | 0;
                _0x20190d[3] = _0x107abc[3] + (_0x107abc[2] << 8 | _0x107abc[2] >>> 24) + _0x107abc[1] | 0;
                _0x20190d[4] = _0x107abc[4] + (_0x107abc[3] << 16 | _0x107abc[3] >>> 16) + (_0x107abc[2] << 16 | _0x107abc[2] >>> 16) | 0;
                _0x20190d[5] = _0x107abc[5] + (_0x107abc[4] << 8 | _0x107abc[4] >>> 24) + _0x107abc[3] | 0;
                _0x20190d[6] = _0x107abc[6] + (_0x107abc[5] << 16 | _0x107abc[5] >>> 16) + (_0x107abc[4] << 16 | _0x107abc[4] >>> 16) | 0;
                _0x20190d[7] = _0x107abc[7] + (_0x107abc[6] << 8 | _0x107abc[6] >>> 24) + _0x107abc[5] | 0;
              }
              _0xd82f6.RabbitLegacy = _0x54d3d6._createHelper(_0x166fc4);
            }(), _0x30bdae.RabbitLegacy);
          },
          90517: (_0x2a91fa, _0x34f7e5, _0x281f7c) => {
            'use strict';

            var _0x5671e8;
            _0x2a91fa.exports = (_0x5671e8 = _0x281f7c(67921), _0x281f7c(14130), _0x281f7c(69766), _0x281f7c(97456), _0x281f7c(57101), function () {
              _0x124d5d.Rabbit = _0x1c34d5.extend({
                _doReset: function () {
                  for (var _0x556462 = this._key.words, _0x2b0455 = this.cfg.iv, _0x3632c2 = 0; _0x3632c2 < 4; _0x3632c2++) {
                    _0x556462[_0x3632c2] = 16711935 & (_0x556462[_0x3632c2] << 8 | _0x556462[_0x3632c2] >>> 24) | 4278255360 & (_0x556462[_0x3632c2] << 24 | _0x556462[_0x3632c2] >>> 8);
                  }
                  this._X = [_0x556462[0], _0x556462[3] << 16 | _0x556462[2] >>> 16, _0x556462[1], _0x556462[0] << 16 | _0x556462[3] >>> 16, _0x556462[2], _0x556462[1] << 16 | _0x556462[0] >>> 16, _0x556462[3], _0x556462[2] << 16 | _0x556462[1] >>> 16];
                  this._C = [_0x556462[2] << 16 | _0x556462[2] >>> 16, 4294901760 & _0x556462[0] | 65535 & _0x556462[1], _0x556462[3] << 16 | _0x556462[3] >>> 16, 4294901760 & _0x556462[1] | 65535 & _0x556462[2], _0x556462[0] << 16 | _0x556462[0] >>> 16, 4294901760 & _0x556462[2] | 65535 & _0x556462[3], _0x556462[1] << 16 | _0x556462[1] >>> 16, 4294901760 & _0x556462[3] | 65535 & _0x556462[0]];
                  var _0x3caad3 = this._X,
                    _0x3909ae = this._C;
                  for (this._b = 0, _0x3632c2 = 0; _0x3632c2 < 4; _0x3632c2++) {
                    _0x71929c.call(this);
                  }
                  for (_0x3632c2 = 0; _0x3632c2 < 8; _0x3632c2++) {
                    _0x3909ae[_0x3632c2] ^= _0x3caad3[_0x3632c2 + 4 & 7];
                  }
                  if (_0x2b0455) {
                    var _0x417b14 = _0x2b0455.words,
                      _0x2519ee = _0x417b14[0],
                      _0x2636da = _0x417b14[1],
                      _0x23d6d2 = 16711935 & (_0x2519ee << 8 | _0x2519ee >>> 24) | 4278255360 & (_0x2519ee << 24 | _0x2519ee >>> 8),
                      _0x3263d0 = 16711935 & (_0x2636da << 8 | _0x2636da >>> 24) | 4278255360 & (_0x2636da << 24 | _0x2636da >>> 8),
                      _0x5acada = _0x23d6d2 >>> 16 | 4294901760 & _0x3263d0,
                      _0x1ab103 = _0x3263d0 << 16 | 65535 & _0x23d6d2;
                    for (_0x3909ae[0] ^= _0x23d6d2, _0x3909ae[1] ^= _0x5acada, _0x3909ae[2] ^= _0x3263d0, _0x3909ae[3] ^= _0x1ab103, _0x3909ae[4] ^= _0x23d6d2, _0x3909ae[5] ^= _0x5acada, _0x3909ae[6] ^= _0x3263d0, _0x3909ae[7] ^= _0x1ab103, _0x3632c2 = 0; _0x3632c2 < 4; _0x3632c2++) {
                      _0x71929c.call(this);
                    }
                  }
                },
                _doProcessBlock: function (_0x7b5527, _0xca4240) {
                  var _0x2b8d30 = this._X;
                  _0x71929c.call(this);
                  _0x5594a1[0] = _0x2b8d30[0] ^ _0x2b8d30[5] >>> 16 ^ _0x2b8d30[3] << 16;
                  _0x5594a1[1] = _0x2b8d30[2] ^ _0x2b8d30[7] >>> 16 ^ _0x2b8d30[5] << 16;
                  _0x5594a1[2] = _0x2b8d30[4] ^ _0x2b8d30[1] >>> 16 ^ _0x2b8d30[7] << 16;
                  _0x5594a1[3] = _0x2b8d30[6] ^ _0x2b8d30[3] >>> 16 ^ _0x2b8d30[1] << 16;
                  for (var _0x8c8947 = 0; _0x8c8947 < 4; _0x8c8947++) {
                    _0x5594a1[_0x8c8947] = 16711935 & (_0x5594a1[_0x8c8947] << 8 | _0x5594a1[_0x8c8947] >>> 24) | 4278255360 & (_0x5594a1[_0x8c8947] << 24 | _0x5594a1[_0x8c8947] >>> 8);
                    _0x7b5527[_0xca4240 + _0x8c8947] ^= _0x5594a1[_0x8c8947];
                  }
                },
                blockSize: 4,
                ivSize: 2
              });
              var _0x58001f = _0x5671e8,
                _0x1c34d5 = _0x58001f.lib.StreamCipher,
                _0x124d5d = _0x58001f.algo,
                _0x5594a1 = [],
                _0x5c0d51 = [],
                _0x11f7c7 = [],
                _0x478c54 = _0x124d5d.Rabbit;
              function _0x71929c() {
                for (var _0x37961 = this._X, _0x10f056 = this._C, _0x1ede00 = 0; _0x1ede00 < 8; _0x1ede00++) {
                  _0x5c0d51[_0x1ede00] = _0x10f056[_0x1ede00];
                }
                for (_0x10f056[0] = _0x10f056[0] + 1295307597 + this._b | 0, _0x10f056[1] = _0x10f056[1] + 3545052371 + (_0x10f056[0] >>> 0 < _0x5c0d51[0] >>> 0 ? 1 : 0) | 0, _0x10f056[2] = _0x10f056[2] + 886263092 + (_0x10f056[1] >>> 0 < _0x5c0d51[1] >>> 0 ? 1 : 0) | 0, _0x10f056[3] = _0x10f056[3] + 1295307597 + (_0x10f056[2] >>> 0 < _0x5c0d51[2] >>> 0 ? 1 : 0) | 0, _0x10f056[4] = _0x10f056[4] + 3545052371 + (_0x10f056[3] >>> 0 < _0x5c0d51[3] >>> 0 ? 1 : 0) | 0, _0x10f056[5] = _0x10f056[5] + 886263092 + (_0x10f056[4] >>> 0 < _0x5c0d51[4] >>> 0 ? 1 : 0) | 0, _0x10f056[6] = _0x10f056[6] + 1295307597 + (_0x10f056[5] >>> 0 < _0x5c0d51[5] >>> 0 ? 1 : 0) | 0, _0x10f056[7] = _0x10f056[7] + 3545052371 + (_0x10f056[6] >>> 0 < _0x5c0d51[6] >>> 0 ? 1 : 0) | 0, this._b = _0x10f056[7] >>> 0 < _0x5c0d51[7] >>> 0 ? 1 : 0, _0x1ede00 = 0; _0x1ede00 < 8; _0x1ede00++) {
                  var _0xddeb16 = _0x37961[_0x1ede00] + _0x10f056[_0x1ede00],
                    _0xd6a1e3 = 65535 & _0xddeb16,
                    _0x41d84b = _0xddeb16 >>> 16,
                    _0x11d18f = ((_0xd6a1e3 * _0xd6a1e3 >>> 17) + _0xd6a1e3 * _0x41d84b >>> 15) + _0x41d84b * _0x41d84b,
                    _0x4d5379 = ((4294901760 & _0xddeb16) * _0xddeb16 | 0) + ((65535 & _0xddeb16) * _0xddeb16 | 0);
                  _0x11f7c7[_0x1ede00] = _0x11d18f ^ _0x4d5379;
                }
                _0x37961[0] = _0x11f7c7[0] + (_0x11f7c7[7] << 16 | _0x11f7c7[7] >>> 16) + (_0x11f7c7[6] << 16 | _0x11f7c7[6] >>> 16) | 0;
                _0x37961[1] = _0x11f7c7[1] + (_0x11f7c7[0] << 8 | _0x11f7c7[0] >>> 24) + _0x11f7c7[7] | 0;
                _0x37961[2] = _0x11f7c7[2] + (_0x11f7c7[1] << 16 | _0x11f7c7[1] >>> 16) + (_0x11f7c7[0] << 16 | _0x11f7c7[0] >>> 16) | 0;
                _0x37961[3] = _0x11f7c7[3] + (_0x11f7c7[2] << 8 | _0x11f7c7[2] >>> 24) + _0x11f7c7[1] | 0;
                _0x37961[4] = _0x11f7c7[4] + (_0x11f7c7[3] << 16 | _0x11f7c7[3] >>> 16) + (_0x11f7c7[2] << 16 | _0x11f7c7[2] >>> 16) | 0;
                _0x37961[5] = _0x11f7c7[5] + (_0x11f7c7[4] << 8 | _0x11f7c7[4] >>> 24) + _0x11f7c7[3] | 0;
                _0x37961[6] = _0x11f7c7[6] + (_0x11f7c7[5] << 16 | _0x11f7c7[5] >>> 16) + (_0x11f7c7[4] << 16 | _0x11f7c7[4] >>> 16) | 0;
                _0x37961[7] = _0x11f7c7[7] + (_0x11f7c7[6] << 8 | _0x11f7c7[6] >>> 24) + _0x11f7c7[5] | 0;
              }
              _0x58001f.Rabbit = _0x1c34d5._createHelper(_0x478c54);
            }(), _0x5671e8.Rabbit);
          },
          22401: (_0x5f3bea, _0xa50e49, _0x4da95b) => {
            'use strict';

            var _0x447db0;
            _0x5f3bea.exports = (_0x447db0 = _0x4da95b(67921), _0x4da95b(14130), _0x4da95b(69766), _0x4da95b(97456), _0x4da95b(57101), function () {
              _0x44795b.RC4 = _0xf5e9a9.extend({
                _doReset: function () {
                  for (this._S = [], _0x31adcc = this._key, _0x32f7d3 = _0x31adcc.words, _0x380f08 = _0x31adcc.sigBytes, _0x55ae71 = this._S = [], _0x2af0ef = 0, void 0; _0x2af0ef < 256; _0x2af0ef++) {
                    var _0x31adcc, _0x32f7d3, _0x380f08, _0x55ae71, _0x2af0ef;
                    _0x55ae71[_0x2af0ef] = _0x2af0ef;
                  }
                  _0x2af0ef = 0;
                  for (var _0x1d3ac7 = 0; _0x2af0ef < 256; _0x2af0ef++) {
                    var _0x28e67a = _0x2af0ef % _0x380f08,
                      _0x47d78a = _0x32f7d3[_0x28e67a >>> 2] >>> 24 - _0x28e67a % 4 * 8 & 255;
                    _0x1d3ac7 = (_0x1d3ac7 + _0x55ae71[_0x2af0ef] + _0x47d78a) % 256;
                    var _0x257aeb = _0x55ae71[_0x2af0ef];
                    _0x55ae71[_0x2af0ef] = _0x55ae71[_0x1d3ac7];
                    _0x55ae71[_0x1d3ac7] = _0x257aeb;
                  }
                  this._i = this._j = 0;
                },
                _doProcessBlock: function (_0x3c953a, _0x3e8e61) {
                  _0x3c953a[_0x3e8e61] ^= _0x559a0d.call(this);
                },
                keySize: 8,
                ivSize: 0
              });
              var _0xc63f4e = _0x447db0,
                _0xf5e9a9 = _0xc63f4e.lib.StreamCipher,
                _0x44795b = _0xc63f4e.algo,
                _0x302ab4 = _0x44795b.RC4;
              function _0x559a0d() {
                for (var _0x32a431 = this._S, _0x591176 = this._i, _0x11ad11 = this._j, _0x58d3df = 0, _0x40d0a9 = 0; _0x40d0a9 < 4; _0x40d0a9++) {
                  _0x11ad11 = (_0x11ad11 + _0x32a431[_0x591176 = (_0x591176 + 1) % 256]) % 256;
                  var _0x2e971d = _0x32a431[_0x591176];
                  _0x32a431[_0x591176] = _0x32a431[_0x11ad11];
                  _0x32a431[_0x11ad11] = _0x2e971d;
                  _0x58d3df |= _0x32a431[(_0x32a431[_0x591176] + _0x32a431[_0x11ad11]) % 256] << 24 - 8 * _0x40d0a9;
                }
                this._i = _0x591176;
                this._j = _0x11ad11;
                return _0x58d3df;
              }
              _0xc63f4e.RC4 = _0xf5e9a9._createHelper(_0x302ab4);
              _0x44795b.RC4Drop = _0x302ab4.extend({
                cfg: _0x302ab4.cfg.extend({
                  drop: 192
                }),
                _doReset: function () {
                  _0x302ab4._doReset.call(this);
                  for (var _0x39a4a1 = this.cfg.drop; _0x39a4a1 > 0; _0x39a4a1--) {
                    _0x559a0d.call(this);
                  }
                }
              });
              var _0x9a9eb8 = _0x44795b.RC4Drop;
              _0xc63f4e.RC4Drop = _0xf5e9a9._createHelper(_0x9a9eb8);
            }(), _0x447db0.RC4);
          },
          12033: (_0x47896a, _0x3fb64d, _0x24dd77) => {
            'use strict';

            var _0x346c6b;
            _0x47896a.exports = (_0x346c6b = _0x24dd77(67921), function (_0x2feebc) {
              _0x5c5e54.RIPEMD160 = _0x24928c.extend({
                _doReset: function () {
                  this._hash = _0x104f40.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
                },
                _doProcessBlock: function (_0x3ef336, _0x1016d0) {
                  for (var _0x3d2964 = 0; _0x3d2964 < 16; _0x3d2964++) {
                    var _0xe7a36e = _0x1016d0 + _0x3d2964,
                      _0x503b88 = _0x3ef336[_0xe7a36e];
                    _0x3ef336[_0xe7a36e] = 16711935 & (_0x503b88 << 8 | _0x503b88 >>> 24) | 4278255360 & (_0x503b88 << 24 | _0x503b88 >>> 8);
                  }
                  var _0x1f2e12,
                    _0x50d435,
                    _0x2ad3b9,
                    _0x43a24c,
                    _0x38b671,
                    _0x49297e,
                    _0x3574a3,
                    _0x192787,
                    _0x2de921,
                    _0x4eb68a,
                    _0x130cf5,
                    _0x5bac6b = this._hash.words,
                    _0xc7ace7 = _0x11a6ce.words,
                    _0x5905bb = _0x39ab24.words,
                    _0x1a6e6e = _0x43ce55.words,
                    _0x2ef524 = _0x219ea9.words,
                    _0x1158ba = _0x27f11f.words,
                    _0x24b222 = _0x59fae4.words;
                  for (_0x49297e = _0x1f2e12 = _0x5bac6b[0], _0x3574a3 = _0x50d435 = _0x5bac6b[1], _0x192787 = _0x2ad3b9 = _0x5bac6b[2], _0x2de921 = _0x43a24c = _0x5bac6b[3], _0x4eb68a = _0x38b671 = _0x5bac6b[4], _0x3d2964 = 0; _0x3d2964 < 80; _0x3d2964 += 1) {
                    _0x130cf5 = _0x1f2e12 + _0x3ef336[_0x1016d0 + _0x1a6e6e[_0x3d2964]] | 0;
                    _0x130cf5 += _0x3d2964 < 16 ? _0x35caf8(_0x50d435, _0x2ad3b9, _0x43a24c) + _0xc7ace7[0] : _0x3d2964 < 32 ? _0x5016cd(_0x50d435, _0x2ad3b9, _0x43a24c) + _0xc7ace7[1] : _0x3d2964 < 48 ? _0x244c3a(_0x50d435, _0x2ad3b9, _0x43a24c) + _0xc7ace7[2] : _0x3d2964 < 64 ? _0x509675(_0x50d435, _0x2ad3b9, _0x43a24c) + _0xc7ace7[3] : _0x5f5c5a(_0x50d435, _0x2ad3b9, _0x43a24c) + _0xc7ace7[4];
                    _0x130cf5 = (_0x130cf5 = _0x220b98(_0x130cf5 |= 0, _0x1158ba[_0x3d2964])) + _0x38b671 | 0;
                    _0x1f2e12 = _0x38b671;
                    _0x38b671 = _0x43a24c;
                    _0x43a24c = _0x220b98(_0x2ad3b9, 10);
                    _0x2ad3b9 = _0x50d435;
                    _0x50d435 = _0x130cf5;
                    _0x130cf5 = _0x49297e + _0x3ef336[_0x1016d0 + _0x2ef524[_0x3d2964]] | 0;
                    _0x130cf5 += _0x3d2964 < 16 ? _0x5f5c5a(_0x3574a3, _0x192787, _0x2de921) + _0x5905bb[0] : _0x3d2964 < 32 ? _0x509675(_0x3574a3, _0x192787, _0x2de921) + _0x5905bb[1] : _0x3d2964 < 48 ? _0x244c3a(_0x3574a3, _0x192787, _0x2de921) + _0x5905bb[2] : _0x3d2964 < 64 ? _0x5016cd(_0x3574a3, _0x192787, _0x2de921) + _0x5905bb[3] : _0x35caf8(_0x3574a3, _0x192787, _0x2de921) + _0x5905bb[4];
                    _0x130cf5 = (_0x130cf5 = _0x220b98(_0x130cf5 |= 0, _0x24b222[_0x3d2964])) + _0x4eb68a | 0;
                    _0x49297e = _0x4eb68a;
                    _0x4eb68a = _0x2de921;
                    _0x2de921 = _0x220b98(_0x192787, 10);
                    _0x192787 = _0x3574a3;
                    _0x3574a3 = _0x130cf5;
                  }
                  _0x130cf5 = _0x5bac6b[1] + _0x2ad3b9 + _0x2de921 | 0;
                  _0x5bac6b[1] = _0x5bac6b[2] + _0x43a24c + _0x4eb68a | 0;
                  _0x5bac6b[2] = _0x5bac6b[3] + _0x38b671 + _0x49297e | 0;
                  _0x5bac6b[3] = _0x5bac6b[4] + _0x1f2e12 + _0x3574a3 | 0;
                  _0x5bac6b[4] = _0x5bac6b[0] + _0x50d435 + _0x192787 | 0;
                  _0x5bac6b[0] = _0x130cf5;
                },
                _doFinalize: function () {
                  var _0x3e64c6 = this._data,
                    _0x59fd53 = _0x3e64c6.words,
                    _0xe48144 = 8 * this._nDataBytes,
                    _0x41b128 = 8 * _0x3e64c6.sigBytes;
                  _0x59fd53[_0x41b128 >>> 5] |= 128 << 24 - _0x41b128 % 32;
                  _0x59fd53[14 + (_0x41b128 + 64 >>> 9 << 4)] = 16711935 & (_0xe48144 << 8 | _0xe48144 >>> 24) | 4278255360 & (_0xe48144 << 24 | _0xe48144 >>> 8);
                  _0x3e64c6.sigBytes = 4 * (_0x59fd53.length + 1);
                  this._process();
                  for (var _0x1a42bb = this._hash, _0x35cb2e = _0x1a42bb.words, _0x1acd86 = 0; _0x1acd86 < 5; _0x1acd86++) {
                    var _0x2a0ce2 = _0x35cb2e[_0x1acd86];
                    _0x35cb2e[_0x1acd86] = 16711935 & (_0x2a0ce2 << 8 | _0x2a0ce2 >>> 24) | 4278255360 & (_0x2a0ce2 << 24 | _0x2a0ce2 >>> 8);
                  }
                  return _0x1a42bb;
                },
                clone: function () {
                  var _0x11b139 = _0x24928c.clone.call(this);
                  _0x11b139._hash = this._hash.clone();
                  return _0x11b139;
                }
              });
              var _0x3b119b = _0x346c6b,
                _0x30a02b = _0x3b119b.lib,
                _0x104f40 = _0x30a02b.WordArray,
                _0x24928c = _0x30a02b.Hasher,
                _0x5c5e54 = _0x3b119b.algo,
                _0x43ce55 = _0x104f40.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
                _0x219ea9 = _0x104f40.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
                _0x27f11f = _0x104f40.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
                _0x59fae4 = _0x104f40.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
                _0x11a6ce = _0x104f40.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
                _0x39ab24 = _0x104f40.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
                _0x38c1f4 = _0x5c5e54.RIPEMD160;
              function _0x35caf8(_0x42b2b3, _0x6ec558, _0xc34eb8) {
                return _0x42b2b3 ^ _0x6ec558 ^ _0xc34eb8;
              }
              function _0x5016cd(_0x48a2c5, _0x26355a, _0x4cd26a) {
                return _0x48a2c5 & _0x26355a | ~_0x48a2c5 & _0x4cd26a;
              }
              function _0x244c3a(_0x4a3b1f, _0x1d577f, _0x51d578) {
                return (_0x4a3b1f | ~_0x1d577f) ^ _0x51d578;
              }
              function _0x509675(_0x27cb3b, _0x265274, _0x53ec8c) {
                return _0x27cb3b & _0x53ec8c | _0x265274 & ~_0x53ec8c;
              }
              function _0x5f5c5a(_0x21b331, _0x1895d7, _0x2570f3) {
                return _0x21b331 ^ (_0x1895d7 | ~_0x2570f3);
              }
              function _0x220b98(_0x64de5a, _0x113d1e) {
                return _0x64de5a << _0x113d1e | _0x64de5a >>> 32 - _0x113d1e;
              }
              _0x3b119b.RIPEMD160 = _0x24928c._createHelper(_0x38c1f4);
              _0x3b119b.HmacRIPEMD160 = _0x24928c._createHmacHelper(_0x38c1f4);
            }(Math), _0x346c6b.RIPEMD160);
          },
          19225: (_0x4338e7, _0x2db740, _0x416313) => {
            'use strict';

            var _0x3aa27e, _0x4791cd, _0x89fcc8, _0x3ddd64, _0x5a9f75, _0x424e90, _0x74ac4b, _0x11722e;
            _0x4338e7.exports = (_0x4791cd = (_0x3aa27e = _0x11722e = _0x416313(67921)).lib, _0x89fcc8 = _0x4791cd.WordArray, _0x3ddd64 = _0x4791cd.Hasher, _0x5a9f75 = _0x3aa27e.algo, _0x424e90 = [], _0x74ac4b = _0x5a9f75.SHA1 = _0x3ddd64.extend({
              _doReset: function () {
                this._hash = new _0x89fcc8.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function (_0x333b9e, _0x2fc88b) {
                for (var _0x4be4cf = this._hash.words, _0x36e6d3 = _0x4be4cf[0], _0x181883 = _0x4be4cf[1], _0x13ebcb = _0x4be4cf[2], _0x5c1fec = _0x4be4cf[3], _0x439f90 = _0x4be4cf[4], _0x1930b9 = 0; _0x1930b9 < 80; _0x1930b9++) {
                  if (_0x1930b9 < 16) {
                    _0x424e90[_0x1930b9] = 0 | _0x333b9e[_0x2fc88b + _0x1930b9];
                  } else {
                    var _0x33e542 = _0x424e90[_0x1930b9 - 3] ^ _0x424e90[_0x1930b9 - 8] ^ _0x424e90[_0x1930b9 - 14] ^ _0x424e90[_0x1930b9 - 16];
                    _0x424e90[_0x1930b9] = _0x33e542 << 1 | _0x33e542 >>> 31;
                  }
                  var _0x34795c = (_0x36e6d3 << 5 | _0x36e6d3 >>> 27) + _0x439f90 + _0x424e90[_0x1930b9];
                  _0x34795c += _0x1930b9 < 20 ? 1518500249 + (_0x181883 & _0x13ebcb | ~_0x181883 & _0x5c1fec) : _0x1930b9 < 40 ? 1859775393 + (_0x181883 ^ _0x13ebcb ^ _0x5c1fec) : _0x1930b9 < 60 ? (_0x181883 & _0x13ebcb | _0x181883 & _0x5c1fec | _0x13ebcb & _0x5c1fec) - 1894007588 : (_0x181883 ^ _0x13ebcb ^ _0x5c1fec) - 899497514;
                  _0x439f90 = _0x5c1fec;
                  _0x5c1fec = _0x13ebcb;
                  _0x13ebcb = _0x181883 << 30 | _0x181883 >>> 2;
                  _0x181883 = _0x36e6d3;
                  _0x36e6d3 = _0x34795c;
                }
                _0x4be4cf[0] = _0x4be4cf[0] + _0x36e6d3 | 0;
                _0x4be4cf[1] = _0x4be4cf[1] + _0x181883 | 0;
                _0x4be4cf[2] = _0x4be4cf[2] + _0x13ebcb | 0;
                _0x4be4cf[3] = _0x4be4cf[3] + _0x5c1fec | 0;
                _0x4be4cf[4] = _0x4be4cf[4] + _0x439f90 | 0;
              },
              _doFinalize: function () {
                var _0x4201f9 = this._data,
                  _0x55b8e4 = _0x4201f9.words,
                  _0x56c4e7 = 8 * this._nDataBytes,
                  _0x2af041 = 8 * _0x4201f9.sigBytes;
                _0x55b8e4[_0x2af041 >>> 5] |= 128 << 24 - _0x2af041 % 32;
                _0x55b8e4[14 + (_0x2af041 + 64 >>> 9 << 4)] = Math.floor(_0x56c4e7 / 4294967296);
                _0x55b8e4[15 + (_0x2af041 + 64 >>> 9 << 4)] = _0x56c4e7;
                _0x4201f9.sigBytes = 4 * _0x55b8e4.length;
                this._process();
                return this._hash;
              },
              clone: function () {
                var _0x48e6cc = _0x3ddd64.clone.call(this);
                _0x48e6cc._hash = this._hash.clone();
                return _0x48e6cc;
              }
            }), _0x3aa27e.SHA1 = _0x3ddd64._createHelper(_0x74ac4b), _0x3aa27e.HmacSHA1 = _0x3ddd64._createHmacHelper(_0x74ac4b), _0x11722e.SHA1);
          },
          61795: (_0x20e249, _0x325278, _0x41d6b0) => {
            'use strict';

            var _0x2cb632, _0x2cd4e8, _0x294889, _0x29f9e8, _0x139fe8, _0x8bc57a;
            _0x20e249.exports = (_0x8bc57a = _0x41d6b0(67921), _0x41d6b0(83814), _0x2cd4e8 = (_0x2cb632 = _0x8bc57a).lib.WordArray, _0x294889 = _0x2cb632.algo, _0x29f9e8 = _0x294889.SHA256, _0x139fe8 = _0x294889.SHA224 = _0x29f9e8.extend({
              _doReset: function () {
                this._hash = new _0x2cd4e8.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
              },
              _doFinalize: function () {
                var _0x329140 = _0x29f9e8._doFinalize.call(this);
                _0x329140.sigBytes -= 4;
                return _0x329140;
              }
            }), _0x2cb632.SHA224 = _0x29f9e8._createHelper(_0x139fe8), _0x2cb632.HmacSHA224 = _0x29f9e8._createHmacHelper(_0x139fe8), _0x8bc57a.SHA224);
          },
          83814: (_0x5a339a, _0x27f512, _0x29f115) => {
            'use strict';

            var _0x20ef8f;
            _0x5a339a.exports = (_0x20ef8f = _0x29f115(67921), function (_0x3d9295) {
              var _0x547f12 = _0x20ef8f,
                _0x681073 = _0x547f12.lib,
                _0x4a5da1 = _0x681073.WordArray,
                _0x5b700a = _0x681073.Hasher,
                _0x3c2aff = _0x547f12.algo,
                _0x1ebc4d = [],
                _0x17c960 = [];
              !function () {
                function _0x44f1ea(_0x1acc88) {
                  for (var _0x179481 = _0x3d9295.sqrt(_0x1acc88), _0x235212 = 2; _0x235212 <= _0x179481; _0x235212++) {
                    if (!(_0x1acc88 % _0x235212)) {
                      return !1;
                    }
                  }
                  return !0;
                }
                function _0x22dba2(_0x57422a) {
                  return 4294967296 * (_0x57422a - (0 | _0x57422a)) | 0;
                }
                for (var _0x207455 = 2, _0x5679a0 = 0; _0x5679a0 < 64;) {
                  _0x44f1ea(_0x207455) && (_0x5679a0 < 8 && (_0x1ebc4d[_0x5679a0] = _0x22dba2(_0x3d9295.pow(_0x207455, 0.5))), _0x17c960[_0x5679a0] = _0x22dba2(_0x3d9295.pow(_0x207455, 0.3333333333333333)), _0x5679a0++);
                  _0x207455++;
                }
              }();
              _0x3c2aff.SHA256 = _0x5b700a.extend({
                _doReset: function () {
                  this._hash = new _0x4a5da1.init(_0x1ebc4d.slice(0));
                },
                _doProcessBlock: function (_0x4a1c37, _0x3c2320) {
                  for (var _0x2bbd13 = this._hash.words, _0x1200c0 = _0x2bbd13[0], _0x2de170 = _0x2bbd13[1], _0x805255 = _0x2bbd13[2], _0x375e5d = _0x2bbd13[3], _0x55059a = _0x2bbd13[4], _0x12a557 = _0x2bbd13[5], _0x3022bd = _0x2bbd13[6], _0x525c75 = _0x2bbd13[7], _0x2ddcd1 = 0; _0x2ddcd1 < 64; _0x2ddcd1++) {
                    if (_0x2ddcd1 < 16) {
                      _0x4ce75d[_0x2ddcd1] = 0 | _0x4a1c37[_0x3c2320 + _0x2ddcd1];
                    } else {
                      var _0x4d12f8 = _0x4ce75d[_0x2ddcd1 - 15],
                        _0x14e1a4 = (_0x4d12f8 << 25 | _0x4d12f8 >>> 7) ^ (_0x4d12f8 << 14 | _0x4d12f8 >>> 18) ^ _0x4d12f8 >>> 3,
                        _0x34172a = _0x4ce75d[_0x2ddcd1 - 2],
                        _0x5146d6 = (_0x34172a << 15 | _0x34172a >>> 17) ^ (_0x34172a << 13 | _0x34172a >>> 19) ^ _0x34172a >>> 10;
                      _0x4ce75d[_0x2ddcd1] = _0x14e1a4 + _0x4ce75d[_0x2ddcd1 - 7] + _0x5146d6 + _0x4ce75d[_0x2ddcd1 - 16];
                    }
                    var _0x56baa8 = _0x1200c0 & _0x2de170 ^ _0x1200c0 & _0x805255 ^ _0x2de170 & _0x805255,
                      _0x31dd4b = (_0x1200c0 << 30 | _0x1200c0 >>> 2) ^ (_0x1200c0 << 19 | _0x1200c0 >>> 13) ^ (_0x1200c0 << 10 | _0x1200c0 >>> 22),
                      _0x1953c7 = _0x525c75 + ((_0x55059a << 26 | _0x55059a >>> 6) ^ (_0x55059a << 21 | _0x55059a >>> 11) ^ (_0x55059a << 7 | _0x55059a >>> 25)) + (_0x55059a & _0x12a557 ^ ~_0x55059a & _0x3022bd) + _0x17c960[_0x2ddcd1] + _0x4ce75d[_0x2ddcd1];
                    _0x525c75 = _0x3022bd;
                    _0x3022bd = _0x12a557;
                    _0x12a557 = _0x55059a;
                    _0x55059a = _0x375e5d + _0x1953c7 | 0;
                    _0x375e5d = _0x805255;
                    _0x805255 = _0x2de170;
                    _0x2de170 = _0x1200c0;
                    _0x1200c0 = _0x1953c7 + (_0x31dd4b + _0x56baa8) | 0;
                  }
                  _0x2bbd13[0] = _0x2bbd13[0] + _0x1200c0 | 0;
                  _0x2bbd13[1] = _0x2bbd13[1] + _0x2de170 | 0;
                  _0x2bbd13[2] = _0x2bbd13[2] + _0x805255 | 0;
                  _0x2bbd13[3] = _0x2bbd13[3] + _0x375e5d | 0;
                  _0x2bbd13[4] = _0x2bbd13[4] + _0x55059a | 0;
                  _0x2bbd13[5] = _0x2bbd13[5] + _0x12a557 | 0;
                  _0x2bbd13[6] = _0x2bbd13[6] + _0x3022bd | 0;
                  _0x2bbd13[7] = _0x2bbd13[7] + _0x525c75 | 0;
                },
                _doFinalize: function () {
                  var _0x220303 = this._data,
                    _0x244eeb = _0x220303.words,
                    _0x2d2298 = 8 * this._nDataBytes,
                    _0x5ca41e = 8 * _0x220303.sigBytes;
                  _0x244eeb[_0x5ca41e >>> 5] |= 128 << 24 - _0x5ca41e % 32;
                  _0x244eeb[14 + (_0x5ca41e + 64 >>> 9 << 4)] = _0x3d9295.floor(_0x2d2298 / 4294967296);
                  _0x244eeb[15 + (_0x5ca41e + 64 >>> 9 << 4)] = _0x2d2298;
                  _0x220303.sigBytes = 4 * _0x244eeb.length;
                  this._process();
                  return this._hash;
                },
                clone: function () {
                  var _0x96a6dc = _0x5b700a.clone.call(this);
                  _0x96a6dc._hash = this._hash.clone();
                  return _0x96a6dc;
                }
              });
              var _0x4ce75d = [],
                _0xffd6fe = _0x3c2aff.SHA256;
              _0x547f12.SHA256 = _0x5b700a._createHelper(_0xffd6fe);
              _0x547f12.HmacSHA256 = _0x5b700a._createHmacHelper(_0xffd6fe);
            }(Math), _0x20ef8f.SHA256);
          },
          6457: (_0x16cfea, _0x53d353, _0x58b127) => {
            'use strict';

            var _0x2e7a02;
            _0x16cfea.exports = (_0x2e7a02 = _0x58b127(67921), _0x58b127(89085), function (_0x55fd49) {
              var _0xa9a78c = _0x2e7a02,
                _0x571f57 = _0xa9a78c.lib,
                _0x3feda6 = _0x571f57.WordArray,
                _0x4d0a81 = _0x571f57.Hasher,
                _0x2823f1 = _0xa9a78c.x64.Word,
                _0x205e84 = _0xa9a78c.algo,
                _0x47a6d2 = [],
                _0x34d36a = [],
                _0x41ae7d = [];
              !function () {
                for (var _0x16cb5a = 1, _0x86cad4 = 0, _0x2803e4 = 0; _0x2803e4 < 24; _0x2803e4++) {
                  _0x47a6d2[_0x16cb5a + 5 * _0x86cad4] = (_0x2803e4 + 1) * (_0x2803e4 + 2) / 2 % 64;
                  var _0x525e86 = (2 * _0x16cb5a + 3 * _0x86cad4) % 5;
                  _0x16cb5a = _0x86cad4 % 5;
                  _0x86cad4 = _0x525e86;
                }
                for (_0x16cb5a = 0; _0x16cb5a < 5; _0x16cb5a++) {
                  for (_0x86cad4 = 0; _0x86cad4 < 5; _0x86cad4++) {
                    _0x34d36a[_0x16cb5a + 5 * _0x86cad4] = _0x86cad4 + (2 * _0x16cb5a + 3 * _0x86cad4) % 5 * 5;
                  }
                }
                for (var _0x2ade08 = 1, _0x52ff46 = 0; _0x52ff46 < 24; _0x52ff46++) {
                  for (var _0x5f328f = 0, _0x556474 = 0, _0x598a46 = 0; _0x598a46 < 7; _0x598a46++) {
                    if (1 & _0x2ade08) {
                      var _0x345af3 = (1 << _0x598a46) - 1;
                      _0x345af3 < 32 ? _0x556474 ^= 1 << _0x345af3 : _0x5f328f ^= 1 << _0x345af3 - 32;
                    }
                    128 & _0x2ade08 ? _0x2ade08 = _0x2ade08 << 1 ^ 113 : _0x2ade08 <<= 1;
                  }
                  _0x41ae7d[_0x52ff46] = _0x2823f1.create(_0x5f328f, _0x556474);
                }
              }();
              var _0xde3f55 = [];
              !function () {
                for (var _0x2db54f = 0; _0x2db54f < 25; _0x2db54f++) {
                  _0xde3f55[_0x2db54f] = _0x2823f1.create();
                }
              }();
              _0x205e84.SHA3 = _0x4d0a81.extend({
                cfg: _0x4d0a81.cfg.extend({
                  outputLength: 512
                }),
                _doReset: function () {
                  for (this._state = [], _0x5f5ca8 = this._state = [], _0x2c039e = 0, void 0; _0x2c039e < 25; _0x2c039e++) {
                    var _0x5f5ca8, _0x2c039e;
                    _0x5f5ca8[_0x2c039e] = new _0x2823f1.init();
                  }
                  this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
                },
                _doProcessBlock: function (_0xa03ae2, _0x2d9dd0) {
                  for (var _0xb75703 = this._state, _0x171a1b = this.blockSize / 2, _0x5bbd77 = 0; _0x5bbd77 < _0x171a1b; _0x5bbd77++) {
                    var _0x4ee87d = _0xa03ae2[_0x2d9dd0 + 2 * _0x5bbd77],
                      _0xa06c35 = _0xa03ae2[_0x2d9dd0 + 2 * _0x5bbd77 + 1];
                    _0x4ee87d = 16711935 & (_0x4ee87d << 8 | _0x4ee87d >>> 24) | 4278255360 & (_0x4ee87d << 24 | _0x4ee87d >>> 8);
                    _0xa06c35 = 16711935 & (_0xa06c35 << 8 | _0xa06c35 >>> 24) | 4278255360 & (_0xa06c35 << 24 | _0xa06c35 >>> 8);
                    (_0x5e7efc = _0xb75703[_0x5bbd77]).high ^= _0xa06c35;
                    _0x5e7efc.low ^= _0x4ee87d;
                  }
                  for (var _0x3b9e5d = 0; _0x3b9e5d < 24; _0x3b9e5d++) {
                    for (var _0x1dd454 = 0; _0x1dd454 < 5; _0x1dd454++) {
                      for (var _0xe113e2 = 0, _0x3e39e4 = 0, _0x2ec9e7 = 0; _0x2ec9e7 < 5; _0x2ec9e7++) {
                        _0xe113e2 ^= (_0x5e7efc = _0xb75703[_0x1dd454 + 5 * _0x2ec9e7]).high;
                        _0x3e39e4 ^= _0x5e7efc.low;
                      }
                      var _0x5058b9 = _0xde3f55[_0x1dd454];
                      _0x5058b9.high = _0xe113e2;
                      _0x5058b9.low = _0x3e39e4;
                    }
                    for (_0x1dd454 = 0; _0x1dd454 < 5; _0x1dd454++) {
                      var _0x39d7c0 = _0xde3f55[(_0x1dd454 + 4) % 5],
                        _0x124fc6 = _0xde3f55[(_0x1dd454 + 1) % 5],
                        _0x54c697 = _0x124fc6.high,
                        _0x55ac3f = _0x124fc6.low;
                      for (_0xe113e2 = _0x39d7c0.high ^ (_0x54c697 << 1 | _0x55ac3f >>> 31), _0x3e39e4 = _0x39d7c0.low ^ (_0x55ac3f << 1 | _0x54c697 >>> 31), _0x2ec9e7 = 0; _0x2ec9e7 < 5; _0x2ec9e7++) {
                        (_0x5e7efc = _0xb75703[_0x1dd454 + 5 * _0x2ec9e7]).high ^= _0xe113e2;
                        _0x5e7efc.low ^= _0x3e39e4;
                      }
                    }
                    for (var _0x2eaaea = 1; _0x2eaaea < 25; _0x2eaaea++) {
                      var _0x1d6f88 = (_0x5e7efc = _0xb75703[_0x2eaaea]).high,
                        _0x4bcb86 = _0x5e7efc.low,
                        _0x484704 = _0x47a6d2[_0x2eaaea];
                      _0x484704 < 32 ? (_0xe113e2 = _0x1d6f88 << _0x484704 | _0x4bcb86 >>> 32 - _0x484704, _0x3e39e4 = _0x4bcb86 << _0x484704 | _0x1d6f88 >>> 32 - _0x484704) : (_0xe113e2 = _0x4bcb86 << _0x484704 - 32 | _0x1d6f88 >>> 64 - _0x484704, _0x3e39e4 = _0x1d6f88 << _0x484704 - 32 | _0x4bcb86 >>> 64 - _0x484704);
                      var _0x2a4408 = _0xde3f55[_0x34d36a[_0x2eaaea]];
                      _0x2a4408.high = _0xe113e2;
                      _0x2a4408.low = _0x3e39e4;
                    }
                    var _0x272b58 = _0xde3f55[0],
                      _0x157b43 = _0xb75703[0];
                    for (_0x272b58.high = _0x157b43.high, _0x272b58.low = _0x157b43.low, _0x1dd454 = 0; _0x1dd454 < 5; _0x1dd454++) {
                      for (_0x2ec9e7 = 0; _0x2ec9e7 < 5; _0x2ec9e7++) {
                        var _0x5e7efc = _0xb75703[_0x2eaaea = _0x1dd454 + 5 * _0x2ec9e7],
                          _0x2df52c = _0xde3f55[_0x2eaaea],
                          _0x407630 = _0xde3f55[(_0x1dd454 + 1) % 5 + 5 * _0x2ec9e7],
                          _0x1a3f71 = _0xde3f55[(_0x1dd454 + 2) % 5 + 5 * _0x2ec9e7];
                        _0x5e7efc.high = _0x2df52c.high ^ ~_0x407630.high & _0x1a3f71.high;
                        _0x5e7efc.low = _0x2df52c.low ^ ~_0x407630.low & _0x1a3f71.low;
                      }
                    }
                    _0x5e7efc = _0xb75703[0];
                    var _0x536c60 = _0x41ae7d[_0x3b9e5d];
                    _0x5e7efc.high ^= _0x536c60.high;
                    _0x5e7efc.low ^= _0x536c60.low;
                  }
                },
                _doFinalize: function () {
                  var _0x335742 = this._data,
                    _0x1c5b5d = _0x335742.words,
                    _0x48cf5b = (this._nDataBytes, 8 * _0x335742.sigBytes),
                    _0x4db56d = 32 * this.blockSize;
                  _0x1c5b5d[_0x48cf5b >>> 5] |= 1 << 24 - _0x48cf5b % 32;
                  _0x1c5b5d[(_0x55fd49.ceil((_0x48cf5b + 1) / _0x4db56d) * _0x4db56d >>> 5) - 1] |= 128;
                  _0x335742.sigBytes = 4 * _0x1c5b5d.length;
                  this._process();
                  for (var _0x1f9e92 = this._state, _0x3c1a5c = this.cfg.outputLength / 8, _0x1e0f8d = _0x3c1a5c / 8, _0x9b1222 = [], _0x47c636 = 0; _0x47c636 < _0x1e0f8d; _0x47c636++) {
                    var _0xe6bb84 = _0x1f9e92[_0x47c636],
                      _0x5efa94 = _0xe6bb84.high,
                      _0x116e88 = _0xe6bb84.low;
                    _0x5efa94 = 16711935 & (_0x5efa94 << 8 | _0x5efa94 >>> 24) | 4278255360 & (_0x5efa94 << 24 | _0x5efa94 >>> 8);
                    _0x116e88 = 16711935 & (_0x116e88 << 8 | _0x116e88 >>> 24) | 4278255360 & (_0x116e88 << 24 | _0x116e88 >>> 8);
                    _0x9b1222.push(_0x116e88);
                    _0x9b1222.push(_0x5efa94);
                  }
                  return new _0x3feda6.init(_0x9b1222, _0x3c1a5c);
                },
                clone: function () {
                  for (_0x59b16d._state = this._state.slice(0), _0x59b16d = _0x4d0a81.clone.call(this), _0x4b00fe = _0x59b16d._state = this._state.slice(0), _0x3b2b2a = 0, void 0; _0x3b2b2a < 25; _0x3b2b2a++) {
                    var _0x59b16d, _0x4b00fe, _0x3b2b2a;
                    _0x4b00fe[_0x3b2b2a] = _0x4b00fe[_0x3b2b2a].clone();
                  }
                  return _0x59b16d;
                }
              });
              var _0x153790 = _0x205e84.SHA3;
              _0xa9a78c.SHA3 = _0x4d0a81._createHelper(_0x153790);
              _0xa9a78c.HmacSHA3 = _0x4d0a81._createHmacHelper(_0x153790);
            }(Math), _0x2e7a02.SHA3);
          },
          80085: (_0x1864fb, _0x25e365, _0x1ae094) => {
            'use strict';

            var _0x256f84, _0x3e8702, _0x42caca, _0x26673f, _0x4f09ef, _0x2be6d4, _0x5e0682, _0x322e09;
            _0x1864fb.exports = (_0x322e09 = _0x1ae094(67921), _0x1ae094(89085), _0x1ae094(18862), _0x3e8702 = (_0x256f84 = _0x322e09).x64, _0x42caca = _0x3e8702.Word, _0x26673f = _0x3e8702.WordArray, _0x4f09ef = _0x256f84.algo, _0x2be6d4 = _0x4f09ef.SHA512, _0x5e0682 = _0x4f09ef.SHA384 = _0x2be6d4.extend({
              _doReset: function () {
                this._hash = new _0x26673f.init([new _0x42caca.init(3418070365, 3238371032), new _0x42caca.init(1654270250, 914150663), new _0x42caca.init(2438529370, 812702999), new _0x42caca.init(355462360, 4144912697), new _0x42caca.init(1731405415, 4290775857), new _0x42caca.init(2394180231, 1750603025), new _0x42caca.init(3675008525, 1694076839), new _0x42caca.init(1203062813, 3204075428)]);
              },
              _doFinalize: function () {
                var _0x52fd60 = _0x2be6d4._doFinalize.call(this);
                _0x52fd60.sigBytes -= 16;
                return _0x52fd60;
              }
            }), _0x256f84.SHA384 = _0x2be6d4._createHelper(_0x5e0682), _0x256f84.HmacSHA384 = _0x2be6d4._createHmacHelper(_0x5e0682), _0x322e09.SHA384);
          },
          18862: (_0x220c7e, _0x373db5, _0x550c4f) => {
            'use strict';

            var _0x5508ab;
            _0x220c7e.exports = (_0x5508ab = _0x550c4f(67921), _0x550c4f(89085), function () {
              var _0x1b4e9 = _0x5508ab,
                _0x35f237 = _0x1b4e9.lib.Hasher,
                _0x4cc34d = _0x1b4e9.x64,
                _0x2bc4ae = _0x4cc34d.Word,
                _0x1b7340 = _0x4cc34d.WordArray,
                _0x5a2685 = _0x1b4e9.algo;
              function _0x4ac0bd() {
                return _0x2bc4ae.create.apply(_0x2bc4ae, arguments);
              }
              var _0x2f98ad = [_0x4ac0bd(1116352408, 3609767458), _0x4ac0bd(1899447441, 602891725), _0x4ac0bd(3049323471, 3964484399), _0x4ac0bd(3921009573, 2173295548), _0x4ac0bd(961987163, 4081628472), _0x4ac0bd(1508970993, 3053834265), _0x4ac0bd(2453635748, 2937671579), _0x4ac0bd(2870763221, 3664609560), _0x4ac0bd(3624381080, 2734883394), _0x4ac0bd(310598401, 1164996542), _0x4ac0bd(607225278, 1323610764), _0x4ac0bd(1426881987, 3590304994), _0x4ac0bd(1925078388, 4068182383), _0x4ac0bd(2162078206, 991336113), _0x4ac0bd(2614888103, 633803317), _0x4ac0bd(3248222580, 3479774868), _0x4ac0bd(3835390401, 2666613458), _0x4ac0bd(4022224774, 944711139), _0x4ac0bd(264347078, 2341262773), _0x4ac0bd(604807628, 2007800933), _0x4ac0bd(770255983, 1495990901), _0x4ac0bd(1249150122, 1856431235), _0x4ac0bd(1555081692, 3175218132), _0x4ac0bd(1996064986, 2198950837), _0x4ac0bd(2554220882, 3999719339), _0x4ac0bd(2821834349, 766784016), _0x4ac0bd(2952996808, 2566594879), _0x4ac0bd(3210313671, 3203337956), _0x4ac0bd(3336571891, 1034457026), _0x4ac0bd(3584528711, 2466948901), _0x4ac0bd(113926993, 3758326383), _0x4ac0bd(338241895, 168717936), _0x4ac0bd(666307205, 1188179964), _0x4ac0bd(773529912, 1546045734), _0x4ac0bd(1294757372, 1522805485), _0x4ac0bd(1396182291, 2643833823), _0x4ac0bd(1695183700, 2343527390), _0x4ac0bd(1986661051, 1014477480), _0x4ac0bd(2177026350, 1206759142), _0x4ac0bd(2456956037, 344077627), _0x4ac0bd(2730485921, 1290863460), _0x4ac0bd(2820302411, 3158454273), _0x4ac0bd(3259730800, 3505952657), _0x4ac0bd(3345764771, 106217008), _0x4ac0bd(3516065817, 3606008344), _0x4ac0bd(3600352804, 1432725776), _0x4ac0bd(4094571909, 1467031594), _0x4ac0bd(275423344, 851169720), _0x4ac0bd(430227734, 3100823752), _0x4ac0bd(506948616, 1363258195), _0x4ac0bd(659060556, 3750685593), _0x4ac0bd(883997877, 3785050280), _0x4ac0bd(958139571, 3318307427), _0x4ac0bd(1322822218, 3812723403), _0x4ac0bd(1537002063, 2003034995), _0x4ac0bd(1747873779, 3602036899), _0x4ac0bd(1955562222, 1575990012), _0x4ac0bd(2024104815, 1125592928), _0x4ac0bd(2227730452, 2716904306), _0x4ac0bd(2361852424, 442776044), _0x4ac0bd(2428436474, 593698344), _0x4ac0bd(2756734187, 3733110249), _0x4ac0bd(3204031479, 2999351573), _0x4ac0bd(3329325298, 3815920427), _0x4ac0bd(3391569614, 3928383900), _0x4ac0bd(3515267271, 566280711), _0x4ac0bd(3940187606, 3454069534), _0x4ac0bd(4118630271, 4000239992), _0x4ac0bd(116418474, 1914138554), _0x4ac0bd(174292421, 2731055270), _0x4ac0bd(289380356, 3203993006), _0x4ac0bd(460393269, 320620315), _0x4ac0bd(685471733, 587496836), _0x4ac0bd(852142971, 1086792851), _0x4ac0bd(1017036298, 365543100), _0x4ac0bd(1126000580, 2618297676), _0x4ac0bd(1288033470, 3409855158), _0x4ac0bd(1501505948, 4234509866), _0x4ac0bd(1607167915, 987167468), _0x4ac0bd(1816402316, 1246189591)],
                _0x5cd8b3 = [];
              !function () {
                for (var _0x322b95 = 0; _0x322b95 < 80; _0x322b95++) {
                  _0x5cd8b3[_0x322b95] = _0x4ac0bd();
                }
              }();
              _0x5a2685.SHA512 = _0x35f237.extend({
                _doReset: function () {
                  this._hash = new _0x1b7340.init([new _0x2bc4ae.init(1779033703, 4089235720), new _0x2bc4ae.init(3144134277, 2227873595), new _0x2bc4ae.init(1013904242, 4271175723), new _0x2bc4ae.init(2773480762, 1595750129), new _0x2bc4ae.init(1359893119, 2917565137), new _0x2bc4ae.init(2600822924, 725511199), new _0x2bc4ae.init(528734635, 4215389547), new _0x2bc4ae.init(1541459225, 327033209)]);
                },
                _doProcessBlock: function (_0x483574, _0x4b3fac) {
                  for (var _0x318335 = this._hash.words, _0x9dc41a = _0x318335[0], _0x185924 = _0x318335[1], _0x37b738 = _0x318335[2], _0x2ba65a = _0x318335[3], _0x7dc9d4 = _0x318335[4], _0x3cfc49 = _0x318335[5], _0x12ee7d = _0x318335[6], _0x5e0162 = _0x318335[7], _0x2d52a0 = _0x9dc41a.high, _0x9ba21f = _0x9dc41a.low, _0x451e48 = _0x185924.high, _0x1bf58f = _0x185924.low, _0x338a99 = _0x37b738.high, _0x5ed1bc = _0x37b738.low, _0x20ceba = _0x2ba65a.high, _0x5c27f5 = _0x2ba65a.low, _0x350fe2 = _0x7dc9d4.high, _0x301834 = _0x7dc9d4.low, _0x18f11a = _0x3cfc49.high, _0x19c062 = _0x3cfc49.low, _0x10a508 = _0x12ee7d.high, _0x23025d = _0x12ee7d.low, _0xfbdb1 = _0x5e0162.high, _0x3e10c7 = _0x5e0162.low, _0x3f55a8 = _0x2d52a0, _0x52de02 = _0x9ba21f, _0xbe3a80 = _0x451e48, _0x34d78b = _0x1bf58f, _0x24ccf0 = _0x338a99, _0x4497db = _0x5ed1bc, _0x31b901 = _0x20ceba, _0x471b8c = _0x5c27f5, _0x11836f = _0x350fe2, _0x3aeb50 = _0x301834, _0x3315f5 = _0x18f11a, _0x15b042 = _0x19c062, _0x8423cc = _0x10a508, _0x2cf5f9 = _0x23025d, _0x805d43 = _0xfbdb1, _0x236914 = _0x3e10c7, _0x4855a3 = 0; _0x4855a3 < 80; _0x4855a3++) {
                    var _0x45a5a7,
                      _0x1b0a06,
                      _0x3b6ba7 = _0x5cd8b3[_0x4855a3];
                    if (_0x4855a3 < 16) {
                      _0x1b0a06 = _0x3b6ba7.high = 0 | _0x483574[_0x4b3fac + 2 * _0x4855a3];
                      _0x45a5a7 = _0x3b6ba7.low = 0 | _0x483574[_0x4b3fac + 2 * _0x4855a3 + 1];
                    } else {
                      var _0xe2b054 = _0x5cd8b3[_0x4855a3 - 15],
                        _0xeac730 = _0xe2b054.high,
                        _0x53b07f = _0xe2b054.low,
                        _0x56d7e8 = (_0xeac730 >>> 1 | _0x53b07f << 31) ^ (_0xeac730 >>> 8 | _0x53b07f << 24) ^ _0xeac730 >>> 7,
                        _0x6babc2 = (_0x53b07f >>> 1 | _0xeac730 << 31) ^ (_0x53b07f >>> 8 | _0xeac730 << 24) ^ (_0x53b07f >>> 7 | _0xeac730 << 25),
                        _0x430929 = _0x5cd8b3[_0x4855a3 - 2],
                        _0x54303d = _0x430929.high,
                        _0x274ce2 = _0x430929.low,
                        _0x520d4a = (_0x54303d >>> 19 | _0x274ce2 << 13) ^ (_0x54303d << 3 | _0x274ce2 >>> 29) ^ _0x54303d >>> 6,
                        _0x38dc87 = (_0x274ce2 >>> 19 | _0x54303d << 13) ^ (_0x274ce2 << 3 | _0x54303d >>> 29) ^ (_0x274ce2 >>> 6 | _0x54303d << 26),
                        _0x4fe8eb = _0x5cd8b3[_0x4855a3 - 7],
                        _0x3bd457 = _0x4fe8eb.high,
                        _0x1d921d = _0x4fe8eb.low,
                        _0x44ad73 = _0x5cd8b3[_0x4855a3 - 16],
                        _0x22eb0c = _0x44ad73.high,
                        _0x7591c0 = _0x44ad73.low;
                      _0x1b0a06 = (_0x1b0a06 = (_0x1b0a06 = _0x56d7e8 + _0x3bd457 + ((_0x45a5a7 = _0x6babc2 + _0x1d921d) >>> 0 < _0x6babc2 >>> 0 ? 1 : 0)) + _0x520d4a + ((_0x45a5a7 += _0x38dc87) >>> 0 < _0x38dc87 >>> 0 ? 1 : 0)) + _0x22eb0c + ((_0x45a5a7 += _0x7591c0) >>> 0 < _0x7591c0 >>> 0 ? 1 : 0);
                      _0x3b6ba7.high = _0x1b0a06;
                      _0x3b6ba7.low = _0x45a5a7;
                    }
                    var _0x31dacd,
                      _0x1bd90e = _0x11836f & _0x3315f5 ^ ~_0x11836f & _0x8423cc,
                      _0x1e0287 = _0x3aeb50 & _0x15b042 ^ ~_0x3aeb50 & _0x2cf5f9,
                      _0x1a76cb = _0x3f55a8 & _0xbe3a80 ^ _0x3f55a8 & _0x24ccf0 ^ _0xbe3a80 & _0x24ccf0,
                      _0x17965e = _0x52de02 & _0x34d78b ^ _0x52de02 & _0x4497db ^ _0x34d78b & _0x4497db,
                      _0x58e041 = (_0x3f55a8 >>> 28 | _0x52de02 << 4) ^ (_0x3f55a8 << 30 | _0x52de02 >>> 2) ^ (_0x3f55a8 << 25 | _0x52de02 >>> 7),
                      _0x456e2a = (_0x52de02 >>> 28 | _0x3f55a8 << 4) ^ (_0x52de02 << 30 | _0x3f55a8 >>> 2) ^ (_0x52de02 << 25 | _0x3f55a8 >>> 7),
                      _0x2bef6b = (_0x11836f >>> 14 | _0x3aeb50 << 18) ^ (_0x11836f >>> 18 | _0x3aeb50 << 14) ^ (_0x11836f << 23 | _0x3aeb50 >>> 9),
                      _0x3bdc24 = (_0x3aeb50 >>> 14 | _0x11836f << 18) ^ (_0x3aeb50 >>> 18 | _0x11836f << 14) ^ (_0x3aeb50 << 23 | _0x11836f >>> 9),
                      _0x2cdd31 = _0x2f98ad[_0x4855a3],
                      _0x19c6b3 = _0x2cdd31.high,
                      _0xa49873 = _0x2cdd31.low,
                      _0x12ac73 = _0x805d43 + _0x2bef6b + ((_0x31dacd = _0x236914 + _0x3bdc24) >>> 0 < _0x236914 >>> 0 ? 1 : 0),
                      _0x120675 = _0x456e2a + _0x17965e;
                    _0x805d43 = _0x8423cc;
                    _0x236914 = _0x2cf5f9;
                    _0x8423cc = _0x3315f5;
                    _0x2cf5f9 = _0x15b042;
                    _0x3315f5 = _0x11836f;
                    _0x15b042 = _0x3aeb50;
                    _0x11836f = _0x31b901 + (_0x12ac73 = (_0x12ac73 = (_0x12ac73 = _0x12ac73 + _0x1bd90e + ((_0x31dacd += _0x1e0287) >>> 0 < _0x1e0287 >>> 0 ? 1 : 0)) + _0x19c6b3 + ((_0x31dacd += _0xa49873) >>> 0 < _0xa49873 >>> 0 ? 1 : 0)) + _0x1b0a06 + ((_0x31dacd += _0x45a5a7) >>> 0 < _0x45a5a7 >>> 0 ? 1 : 0)) + ((_0x3aeb50 = _0x471b8c + _0x31dacd | 0) >>> 0 < _0x471b8c >>> 0 ? 1 : 0) | 0;
                    _0x31b901 = _0x24ccf0;
                    _0x471b8c = _0x4497db;
                    _0x24ccf0 = _0xbe3a80;
                    _0x4497db = _0x34d78b;
                    _0xbe3a80 = _0x3f55a8;
                    _0x34d78b = _0x52de02;
                    _0x3f55a8 = _0x12ac73 + (_0x58e041 + _0x1a76cb + (_0x120675 >>> 0 < _0x456e2a >>> 0 ? 1 : 0)) + ((_0x52de02 = _0x31dacd + _0x120675 | 0) >>> 0 < _0x31dacd >>> 0 ? 1 : 0) | 0;
                  }
                  _0x9ba21f = _0x9dc41a.low = _0x9ba21f + _0x52de02;
                  _0x9dc41a.high = _0x2d52a0 + _0x3f55a8 + (_0x9ba21f >>> 0 < _0x52de02 >>> 0 ? 1 : 0);
                  _0x1bf58f = _0x185924.low = _0x1bf58f + _0x34d78b;
                  _0x185924.high = _0x451e48 + _0xbe3a80 + (_0x1bf58f >>> 0 < _0x34d78b >>> 0 ? 1 : 0);
                  _0x5ed1bc = _0x37b738.low = _0x5ed1bc + _0x4497db;
                  _0x37b738.high = _0x338a99 + _0x24ccf0 + (_0x5ed1bc >>> 0 < _0x4497db >>> 0 ? 1 : 0);
                  _0x5c27f5 = _0x2ba65a.low = _0x5c27f5 + _0x471b8c;
                  _0x2ba65a.high = _0x20ceba + _0x31b901 + (_0x5c27f5 >>> 0 < _0x471b8c >>> 0 ? 1 : 0);
                  _0x301834 = _0x7dc9d4.low = _0x301834 + _0x3aeb50;
                  _0x7dc9d4.high = _0x350fe2 + _0x11836f + (_0x301834 >>> 0 < _0x3aeb50 >>> 0 ? 1 : 0);
                  _0x19c062 = _0x3cfc49.low = _0x19c062 + _0x15b042;
                  _0x3cfc49.high = _0x18f11a + _0x3315f5 + (_0x19c062 >>> 0 < _0x15b042 >>> 0 ? 1 : 0);
                  _0x23025d = _0x12ee7d.low = _0x23025d + _0x2cf5f9;
                  _0x12ee7d.high = _0x10a508 + _0x8423cc + (_0x23025d >>> 0 < _0x2cf5f9 >>> 0 ? 1 : 0);
                  _0x3e10c7 = _0x5e0162.low = _0x3e10c7 + _0x236914;
                  _0x5e0162.high = _0xfbdb1 + _0x805d43 + (_0x3e10c7 >>> 0 < _0x236914 >>> 0 ? 1 : 0);
                },
                _doFinalize: function () {
                  var _0x2f87b4 = this._data,
                    _0x513f11 = _0x2f87b4.words,
                    _0x36fee3 = 8 * this._nDataBytes,
                    _0x3fd6c4 = 8 * _0x2f87b4.sigBytes;
                  _0x513f11[_0x3fd6c4 >>> 5] |= 128 << 24 - _0x3fd6c4 % 32;
                  _0x513f11[30 + (_0x3fd6c4 + 128 >>> 10 << 5)] = Math.floor(_0x36fee3 / 4294967296);
                  _0x513f11[31 + (_0x3fd6c4 + 128 >>> 10 << 5)] = _0x36fee3;
                  _0x2f87b4.sigBytes = 4 * _0x513f11.length;
                  this._process();
                  return this._hash.toX32();
                },
                clone: function () {
                  var _0xbf2dc6 = _0x35f237.clone.call(this);
                  _0xbf2dc6._hash = this._hash.clone();
                  return _0xbf2dc6;
                },
                blockSize: 32
              });
              var _0x34659c = _0x5a2685.SHA512;
              _0x1b4e9.SHA512 = _0x35f237._createHelper(_0x34659c);
              _0x1b4e9.HmacSHA512 = _0x35f237._createHmacHelper(_0x34659c);
            }(), _0x5508ab.SHA512);
          },
          25213: (_0x537a05, _0x3838d0, _0x2742a5) => {
            'use strict';

            var _0x5379de;
            _0x537a05.exports = (_0x5379de = _0x2742a5(67921), _0x2742a5(14130), _0x2742a5(69766), _0x2742a5(97456), _0x2742a5(57101), function () {
              _0x19799e.DES = _0xe81217.extend({
                _doReset: function () {
                  for (var _0x5e99db = this._key.words, _0x6974d7 = [], _0x311432 = 0; _0x311432 < 56; _0x311432++) {
                    var _0x509bec = _0xfdb45d[_0x311432] - 1;
                    _0x6974d7[_0x311432] = _0x5e99db[_0x509bec >>> 5] >>> 31 - _0x509bec % 32 & 1;
                  }
                  for (this._subKeys = [], _0x1b5b63 = this._subKeys = [], _0x305d10 = 0, void 0; _0x305d10 < 16; _0x305d10++) {
                    var _0x1b5b63, _0x305d10;
                    _0x1b5b63[_0x305d10] = [];
                    var _0x54d9f9 = _0x1b5b63[_0x305d10],
                      _0x1e0b43 = _0x8d7484[_0x305d10];
                    for (_0x311432 = 0; _0x311432 < 24; _0x311432++) {
                      _0x54d9f9[_0x311432 / 6 | 0] |= _0x6974d7[(_0x17c601[_0x311432] - 1 + _0x1e0b43) % 28] << 31 - _0x311432 % 6;
                      _0x54d9f9[4 + (_0x311432 / 6 | 0)] |= _0x6974d7[28 + (_0x17c601[_0x311432 + 24] - 1 + _0x1e0b43) % 28] << 31 - _0x311432 % 6;
                    }
                    for (_0x54d9f9[0] = _0x54d9f9[0] << 1 | _0x54d9f9[0] >>> 31, _0x311432 = 1; _0x311432 < 7; _0x311432++) {
                      _0x54d9f9[_0x311432] = _0x54d9f9[_0x311432] >>> 4 * (_0x311432 - 1) + 3;
                    }
                    _0x54d9f9[7] = _0x54d9f9[7] << 5 | _0x54d9f9[7] >>> 27;
                  }
                  this._invSubKeys = [];
                  var _0x462760 = this._invSubKeys;
                  for (_0x311432 = 0; _0x311432 < 16; _0x311432++) {
                    _0x462760[_0x311432] = _0x1b5b63[15 - _0x311432];
                  }
                },
                encryptBlock: function (_0x25c2bc, _0x59f66e) {
                  this._doCryptBlock(_0x25c2bc, _0x59f66e, this._subKeys);
                },
                decryptBlock: function (_0x4feff7, _0x454252) {
                  this._doCryptBlock(_0x4feff7, _0x454252, this._invSubKeys);
                },
                _doCryptBlock: function (_0x3b4dc6, _0x2a46bc, _0x3a7ad1) {
                  this._lBlock = _0x3b4dc6[_0x2a46bc];
                  this._rBlock = _0x3b4dc6[_0x2a46bc + 1];
                  _0x5ab764.call(this, 4, 252645135);
                  _0x5ab764.call(this, 16, 65535);
                  _0x426993.call(this, 2, 858993459);
                  _0x426993.call(this, 8, 16711935);
                  _0x5ab764.call(this, 1, 1431655765);
                  for (var _0x3a2593 = 0; _0x3a2593 < 16; _0x3a2593++) {
                    for (var _0x419e4e = _0x3a7ad1[_0x3a2593], _0x1fbbdb = this._lBlock, _0x2b387f = this._rBlock, _0x470b28 = 0, _0x578ee2 = 0; _0x578ee2 < 8; _0x578ee2++) {
                      _0x470b28 |= _0x26087f[_0x578ee2][((_0x2b387f ^ _0x419e4e[_0x578ee2]) & _0x42f7b9[_0x578ee2]) >>> 0];
                    }
                    this._lBlock = _0x2b387f;
                    this._rBlock = _0x1fbbdb ^ _0x470b28;
                  }
                  var _0x460d86 = this._lBlock;
                  this._lBlock = this._rBlock;
                  this._rBlock = _0x460d86;
                  _0x5ab764.call(this, 1, 1431655765);
                  _0x426993.call(this, 8, 16711935);
                  _0x426993.call(this, 2, 858993459);
                  _0x5ab764.call(this, 16, 65535);
                  _0x5ab764.call(this, 4, 252645135);
                  _0x3b4dc6[_0x2a46bc] = this._lBlock;
                  _0x3b4dc6[_0x2a46bc + 1] = this._rBlock;
                },
                keySize: 2,
                ivSize: 2,
                blockSize: 2
              });
              var _0x4595f1 = _0x5379de,
                _0x2d0173 = _0x4595f1.lib,
                _0x14eee0 = _0x2d0173.WordArray,
                _0xe81217 = _0x2d0173.BlockCipher,
                _0x19799e = _0x4595f1.algo,
                _0xfdb45d = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
                _0x17c601 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
                _0x8d7484 = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
                _0x26087f = [{
                  0: 8421888,
                  268435456: 32768,
                  536870912: 8421378,
                  805306368: 2,
                  1073741824: 512,
                  1342177280: 8421890,
                  1610612736: 8389122,
                  1879048192: 8388608,
                  2147483648: 514,
                  2415919104: 8389120,
                  2684354560: 33280,
                  2952790016: 8421376,
                  3221225472: 32770,
                  3489660928: 8388610,
                  3758096384: 0,
                  4026531840: 33282,
                  134217728: 0,
                  402653184: 8421890,
                  671088640: 33282,
                  939524096: 32768,
                  1207959552: 8421888,
                  1476395008: 512,
                  1744830464: 8421378,
                  2013265920: 2,
                  2281701376: 8389120,
                  2550136832: 33280,
                  2818572288: 8421376,
                  3087007744: 8389122,
                  3355443200: 8388610,
                  3623878656: 32770,
                  3892314112: 514,
                  4160749568: 8388608,
                  1: 32768,
                  268435457: 2,
                  536870913: 8421888,
                  805306369: 8388608,
                  1073741825: 8421378,
                  1342177281: 33280,
                  1610612737: 512,
                  1879048193: 8389122,
                  2147483649: 8421890,
                  2415919105: 8421376,
                  2684354561: 8388610,
                  2952790017: 33282,
                  3221225473: 514,
                  3489660929: 8389120,
                  3758096385: 32770,
                  4026531841: 0,
                  134217729: 8421890,
                  402653185: 8421376,
                  671088641: 8388608,
                  939524097: 512,
                  1207959553: 32768,
                  1476395009: 8388610,
                  1744830465: 2,
                  2013265921: 33282,
                  2281701377: 32770,
                  2550136833: 8389122,
                  2818572289: 514,
                  3087007745: 8421888,
                  3355443201: 8389120,
                  3623878657: 0,
                  3892314113: 33280,
                  4160749569: 8421378
                }, {
                  0: 1074282512,
                  16777216: 16384,
                  33554432: 524288,
                  50331648: 1074266128,
                  67108864: 1073741840,
                  83886080: 1074282496,
                  100663296: 1073758208,
                  117440512: 16,
                  134217728: 540672,
                  150994944: 1073758224,
                  167772160: 1073741824,
                  184549376: 540688,
                  201326592: 524304,
                  218103808: 0,
                  234881024: 16400,
                  251658240: 1074266112,
                  8388608: 1073758208,
                  25165824: 540688,
                  41943040: 16,
                  58720256: 1073758224,
                  75497472: 1074282512,
                  92274688: 1073741824,
                  109051904: 524288,
                  125829120: 1074266128,
                  142606336: 524304,
                  159383552: 0,
                  176160768: 16384,
                  192937984: 1074266112,
                  209715200: 1073741840,
                  226492416: 540672,
                  243269632: 1074282496,
                  260046848: 16400,
                  268435456: 0,
                  285212672: 1074266128,
                  301989888: 1073758224,
                  318767104: 1074282496,
                  335544320: 1074266112,
                  352321536: 16,
                  369098752: 540688,
                  385875968: 16384,
                  402653184: 16400,
                  419430400: 524288,
                  436207616: 524304,
                  452984832: 1073741840,
                  469762048: 540672,
                  486539264: 1073758208,
                  503316480: 1073741824,
                  520093696: 1074282512,
                  276824064: 540688,
                  293601280: 524288,
                  310378496: 1074266112,
                  327155712: 16384,
                  343932928: 1073758208,
                  360710144: 1074282512,
                  377487360: 16,
                  394264576: 1073741824,
                  411041792: 1074282496,
                  427819008: 1073741840,
                  444596224: 1073758224,
                  461373440: 524304,
                  478150656: 0,
                  494927872: 16400,
                  511705088: 1074266128,
                  528482304: 540672
                }, {
                  0: 260,
                  1048576: 0,
                  2097152: 67109120,
                  3145728: 65796,
                  4194304: 65540,
                  5242880: 67108868,
                  6291456: 67174660,
                  7340032: 67174400,
                  8388608: 67108864,
                  9437184: 67174656,
                  10485760: 65792,
                  11534336: 67174404,
                  12582912: 67109124,
                  13631488: 65536,
                  14680064: 4,
                  15728640: 256,
                  524288: 67174656,
                  1572864: 67174404,
                  2621440: 0,
                  3670016: 67109120,
                  4718592: 67108868,
                  5767168: 65536,
                  6815744: 65540,
                  7864320: 260,
                  8912896: 4,
                  9961472: 256,
                  11010048: 67174400,
                  12058624: 65796,
                  13107200: 65792,
                  14155776: 67109124,
                  15204352: 67174660,
                  16252928: 67108864,
                  16777216: 67174656,
                  17825792: 65540,
                  18874368: 65536,
                  19922944: 67109120,
                  20971520: 256,
                  22020096: 67174660,
                  23068672: 67108868,
                  24117248: 0,
                  25165824: 67109124,
                  26214400: 67108864,
                  27262976: 4,
                  28311552: 65792,
                  29360128: 67174400,
                  30408704: 260,
                  31457280: 65796,
                  32505856: 67174404,
                  17301504: 67108864,
                  18350080: 260,
                  19398656: 67174656,
                  20447232: 0,
                  21495808: 65540,
                  22544384: 67109120,
                  23592960: 256,
                  24641536: 67174404,
                  25690112: 65536,
                  26738688: 67174660,
                  27787264: 65796,
                  28835840: 67108868,
                  29884416: 67109124,
                  30932992: 67174400,
                  31981568: 4,
                  33030144: 65792
                }, {
                  0: 2151682048,
                  65536: 2147487808,
                  131072: 4198464,
                  196608: 2151677952,
                  262144: 0,
                  327680: 4198400,
                  393216: 2147483712,
                  458752: 4194368,
                  524288: 2147483648,
                  589824: 4194304,
                  655360: 64,
                  720896: 2147487744,
                  786432: 2151678016,
                  851968: 4160,
                  917504: 4096,
                  983040: 2151682112,
                  32768: 2147487808,
                  98304: 64,
                  163840: 2151678016,
                  229376: 2147487744,
                  294912: 4198400,
                  360448: 2151682112,
                  425984: 0,
                  491520: 2151677952,
                  557056: 4096,
                  622592: 2151682048,
                  688128: 4194304,
                  753664: 4160,
                  819200: 2147483648,
                  884736: 4194368,
                  950272: 4198464,
                  1015808: 2147483712,
                  1048576: 4194368,
                  1114112: 4198400,
                  1179648: 2147483712,
                  1245184: 0,
                  1310720: 4160,
                  1376256: 2151678016,
                  1441792: 2151682048,
                  1507328: 2147487808,
                  1572864: 2151682112,
                  1638400: 2147483648,
                  1703936: 2151677952,
                  1769472: 4198464,
                  1835008: 2147487744,
                  1900544: 4194304,
                  1966080: 64,
                  2031616: 4096,
                  1081344: 2151677952,
                  1146880: 2151682112,
                  1212416: 0,
                  1277952: 4198400,
                  1343488: 4194368,
                  1409024: 2147483648,
                  1474560: 2147487808,
                  1540096: 64,
                  1605632: 2147483712,
                  1671168: 4096,
                  1736704: 2147487744,
                  1802240: 2151678016,
                  1867776: 4160,
                  1933312: 2151682048,
                  1998848: 4194304,
                  2064384: 4198464
                }, {
                  0: 128,
                  4096: 17039360,
                  8192: 262144,
                  12288: 536870912,
                  16384: 537133184,
                  20480: 16777344,
                  24576: 553648256,
                  28672: 262272,
                  32768: 16777216,
                  36864: 537133056,
                  40960: 536871040,
                  45056: 553910400,
                  49152: 553910272,
                  53248: 0,
                  57344: 17039488,
                  61440: 553648128,
                  2048: 17039488,
                  6144: 553648256,
                  10240: 128,
                  14336: 17039360,
                  18432: 262144,
                  22528: 537133184,
                  26624: 553910272,
                  30720: 536870912,
                  34816: 537133056,
                  38912: 0,
                  43008: 553910400,
                  47104: 16777344,
                  51200: 536871040,
                  55296: 553648128,
                  59392: 16777216,
                  63488: 262272,
                  65536: 262144,
                  69632: 128,
                  73728: 536870912,
                  77824: 553648256,
                  81920: 16777344,
                  86016: 553910272,
                  90112: 537133184,
                  94208: 16777216,
                  98304: 553910400,
                  102400: 553648128,
                  106496: 17039360,
                  110592: 537133056,
                  114688: 262272,
                  118784: 536871040,
                  122880: 0,
                  126976: 17039488,
                  67584: 553648256,
                  71680: 16777216,
                  75776: 17039360,
                  79872: 537133184,
                  83968: 536870912,
                  88064: 17039488,
                  92160: 128,
                  96256: 553910272,
                  100352: 262272,
                  104448: 553910400,
                  108544: 0,
                  112640: 553648128,
                  116736: 16777344,
                  120832: 262144,
                  124928: 537133056,
                  129024: 536871040
                }, {
                  0: 268435464,
                  256: 8192,
                  512: 270532608,
                  768: 270540808,
                  1024: 268443648,
                  1280: 2097152,
                  1536: 2097160,
                  1792: 268435456,
                  2048: 0,
                  2304: 268443656,
                  2560: 2105344,
                  2816: 8,
                  3072: 270532616,
                  3328: 2105352,
                  3584: 8200,
                  3840: 270540800,
                  128: 270532608,
                  384: 270540808,
                  640: 8,
                  896: 2097152,
                  1152: 2105352,
                  1408: 268435464,
                  1664: 268443648,
                  1920: 8200,
                  2176: 2097160,
                  2432: 8192,
                  2688: 268443656,
                  2944: 270532616,
                  3200: 0,
                  3456: 270540800,
                  3712: 2105344,
                  3968: 268435456,
                  4096: 268443648,
                  4352: 270532616,
                  4608: 270540808,
                  4864: 8200,
                  5120: 2097152,
                  5376: 268435456,
                  5632: 268435464,
                  5888: 2105344,
                  6144: 2105352,
                  6400: 0,
                  6656: 8,
                  6912: 270532608,
                  7168: 8192,
                  7424: 268443656,
                  7680: 270540800,
                  7936: 2097160,
                  4224: 8,
                  4480: 2105344,
                  4736: 2097152,
                  4992: 268435464,
                  5248: 268443648,
                  5504: 8200,
                  5760: 270540808,
                  6016: 270532608,
                  6272: 270540800,
                  6528: 270532616,
                  6784: 8192,
                  7040: 2105352,
                  7296: 2097160,
                  7552: 0,
                  7808: 268435456,
                  8064: 268443656
                }, {
                  0: 1048576,
                  16: 33555457,
                  32: 1024,
                  48: 1049601,
                  64: 34604033,
                  80: 0,
                  96: 1,
                  112: 34603009,
                  128: 33555456,
                  144: 1048577,
                  160: 33554433,
                  176: 34604032,
                  192: 34603008,
                  208: 1025,
                  224: 1049600,
                  240: 33554432,
                  8: 34603009,
                  24: 0,
                  40: 33555457,
                  56: 34604032,
                  72: 1048576,
                  88: 33554433,
                  104: 33554432,
                  120: 1025,
                  136: 1049601,
                  152: 33555456,
                  168: 34603008,
                  184: 1048577,
                  200: 1024,
                  216: 34604033,
                  232: 1,
                  248: 1049600,
                  256: 33554432,
                  272: 1048576,
                  288: 33555457,
                  304: 34603009,
                  320: 1048577,
                  336: 33555456,
                  352: 34604032,
                  368: 1049601,
                  384: 1025,
                  400: 34604033,
                  416: 1049600,
                  432: 1,
                  448: 0,
                  464: 34603008,
                  480: 33554433,
                  496: 1024,
                  264: 1049600,
                  280: 33555457,
                  296: 34603009,
                  312: 1,
                  328: 33554432,
                  344: 1048576,
                  360: 1025,
                  376: 34604032,
                  392: 33554433,
                  408: 34603008,
                  424: 0,
                  440: 34604033,
                  456: 1049601,
                  472: 1024,
                  488: 33555456,
                  504: 1048577
                }, {
                  0: 134219808,
                  1: 131072,
                  2: 134217728,
                  3: 32,
                  4: 131104,
                  5: 134350880,
                  6: 134350848,
                  7: 2048,
                  8: 134348800,
                  9: 134219776,
                  10: 133120,
                  11: 134348832,
                  12: 2080,
                  13: 0,
                  14: 134217760,
                  15: 133152,
                  2147483648: 2048,
                  2147483649: 134350880,
                  2147483650: 134219808,
                  2147483651: 134217728,
                  2147483652: 134348800,
                  2147483653: 133120,
                  2147483654: 133152,
                  2147483655: 32,
                  2147483656: 134217760,
                  2147483657: 2080,
                  2147483658: 131104,
                  2147483659: 134350848,
                  2147483660: 0,
                  2147483661: 134348832,
                  2147483662: 134219776,
                  2147483663: 131072,
                  16: 133152,
                  17: 134350848,
                  18: 32,
                  19: 2048,
                  20: 134219776,
                  21: 134217760,
                  22: 134348832,
                  23: 131072,
                  24: 0,
                  25: 131104,
                  26: 134348800,
                  27: 134219808,
                  28: 134350880,
                  29: 133120,
                  30: 2080,
                  31: 134217728,
                  2147483664: 131072,
                  2147483665: 2048,
                  2147483666: 134348832,
                  2147483667: 133152,
                  2147483668: 32,
                  2147483669: 134348800,
                  2147483670: 134217728,
                  2147483671: 134219808,
                  2147483672: 134350880,
                  2147483673: 134217760,
                  2147483674: 134219776,
                  2147483675: 0,
                  2147483676: 133120,
                  2147483677: 2080,
                  2147483678: 131104,
                  2147483679: 134350848
                }],
                _0x42f7b9 = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
                _0x42c282 = _0x19799e.DES;
              function _0x5ab764(_0x51b906, _0x2243c7) {
                var _0x58a9c0 = (this._lBlock >>> _0x51b906 ^ this._rBlock) & _0x2243c7;
                this._rBlock ^= _0x58a9c0;
                this._lBlock ^= _0x58a9c0 << _0x51b906;
              }
              function _0x426993(_0x1201a5, _0x2b89c9) {
                var _0x4e6929 = (this._rBlock >>> _0x1201a5 ^ this._lBlock) & _0x2b89c9;
                this._lBlock ^= _0x4e6929;
                this._rBlock ^= _0x4e6929 << _0x1201a5;
              }
              _0x4595f1.DES = _0xe81217._createHelper(_0x42c282);
              _0x19799e.TripleDES = _0xe81217.extend({
                _doReset: function () {
                  var _0x4d02bf = this._key.words;
                  if (2 !== _0x4d02bf.length && 4 !== _0x4d02bf.length && _0x4d02bf.length < 6) {
                    throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
                  }
                  var _0x437bac = _0x4d02bf.slice(0, 2),
                    _0x5631e7 = _0x4d02bf.length < 4 ? _0x4d02bf.slice(0, 2) : _0x4d02bf.slice(2, 4),
                    _0x17cf0b = _0x4d02bf.length < 6 ? _0x4d02bf.slice(0, 2) : _0x4d02bf.slice(4, 6);
                  this._des1 = _0x42c282.createEncryptor(_0x14eee0.create(_0x437bac));
                  this._des2 = _0x42c282.createEncryptor(_0x14eee0.create(_0x5631e7));
                  this._des3 = _0x42c282.createEncryptor(_0x14eee0.create(_0x17cf0b));
                },
                encryptBlock: function (_0x3d5beb, _0x479d89) {
                  this._des1.encryptBlock(_0x3d5beb, _0x479d89);
                  this._des2.decryptBlock(_0x3d5beb, _0x479d89);
                  this._des3.encryptBlock(_0x3d5beb, _0x479d89);
                },
                decryptBlock: function (_0x4979b4, _0x38dd70) {
                  this._des3.decryptBlock(_0x4979b4, _0x38dd70);
                  this._des2.encryptBlock(_0x4979b4, _0x38dd70);
                  this._des1.decryptBlock(_0x4979b4, _0x38dd70);
                },
                keySize: 6,
                ivSize: 2,
                blockSize: 2
              });
              var _0x58edcd = _0x19799e.TripleDES;
              _0x4595f1.TripleDES = _0xe81217._createHelper(_0x58edcd);
            }(), _0x5379de.TripleDES);
          },
          89085: (_0xd6125f, _0x3c510d, _0x2bea1d) => {
            'use strict';

            var _0x4dcdfc, _0x23ee2b, _0xe82259, _0x5510ba, _0x4e7cc4, _0x1b77df;
            _0xd6125f.exports = (_0x4dcdfc = _0x2bea1d(67921), _0xe82259 = (_0x23ee2b = _0x4dcdfc).lib, _0x5510ba = _0xe82259.Base, _0x4e7cc4 = _0xe82259.WordArray, (_0x1b77df = _0x23ee2b.x64 = {}).Word = _0x5510ba.extend({
              init: function (_0x2cc6f2, _0x68f409) {
                this.high = _0x2cc6f2;
                this.low = _0x68f409;
              }
            }), _0x1b77df.WordArray = _0x5510ba.extend({
              init: function (_0x24a5c2, _0x5523ea) {
                _0x24a5c2 = this.words = _0x24a5c2 || [];
                this.sigBytes = null != _0x5523ea ? _0x5523ea : 8 * _0x24a5c2.length;
              },
              toX32: function () {
                for (var _0x1a688e = this.words, _0xbe77af = _0x1a688e.length, _0x3f74ae = [], _0x24b810 = 0; _0x24b810 < _0xbe77af; _0x24b810++) {
                  var _0x38c9ad = _0x1a688e[_0x24b810];
                  _0x3f74ae.push(_0x38c9ad.high);
                  _0x3f74ae.push(_0x38c9ad.low);
                }
                return _0x4e7cc4.create(_0x3f74ae, this.sigBytes);
              },
              clone: function () {
                for (_0x37519c.words = this.words.slice(0), _0x37519c = _0x5510ba.clone.call(this), _0x30f5d0 = _0x37519c.words = this.words.slice(0), _0x56cb01 = _0x30f5d0.length, _0xe6052c = 0, void 0; _0xe6052c < _0x56cb01; _0xe6052c++) {
                  var _0x37519c, _0x30f5d0, _0x56cb01, _0xe6052c;
                  _0x30f5d0[_0xe6052c] = _0x30f5d0[_0xe6052c].clone();
                }
                return _0x37519c;
              }
            }), _0x4dcdfc);
          },
          93835: _0x20fd15 => {
            'use strict';

            function _0x239677(_0x667217) {
              return !!_0x667217.constructor && "function" == typeof _0x667217.constructor.isBuffer && _0x667217.constructor.isBuffer(_0x667217);
            }
            _0x20fd15.exports = function (_0x268f77) {
              return null != _0x268f77 && (_0x239677(_0x268f77) || function (_0x2eb3f0) {
                return "function" == typeof _0x2eb3f0.readFloatLE && "function" == typeof _0x2eb3f0.slice && _0x239677(_0x2eb3f0.slice(0, 0));
              }(_0x268f77) || !!_0x268f77._isBuffer);
            };
          },
          59346: (_0x102ec3, _0xd26ed3, _0x265a77) => {
            'use strict';

            var _0x123ead, _0x174367, _0x130b4b, _0x2a82bb, _0x26d9bc;
            _0x123ead = _0x265a77(2571);
            _0x174367 = _0x265a77(3129).utf8;
            _0x130b4b = _0x265a77(93835);
            _0x2a82bb = _0x265a77(3129).bin;
            (_0x26d9bc = function (_0x34d907, _0x4403ab) {
              _0x34d907.constructor == String ? _0x34d907 = _0x4403ab && "binary" === _0x4403ab.encoding ? _0x2a82bb.stringToBytes(_0x34d907) : _0x174367.stringToBytes(_0x34d907) : _0x130b4b(_0x34d907) ? _0x34d907 = Array.prototype.slice.call(_0x34d907, 0) : Array.isArray(_0x34d907) || _0x34d907.constructor === Uint8Array || (_0x34d907 = _0x34d907.toString());
              for (var _0x58f092 = _0x123ead.bytesToWords(_0x34d907), _0x544598 = 8 * _0x34d907.length, _0x3f0995 = 1732584193, _0x3437a8 = -271733879, _0x5082c6 = -1732584194, _0x3a25c3 = 271733878, _0x37fc89 = 0; _0x37fc89 < _0x58f092.length; _0x37fc89++) {
                _0x58f092[_0x37fc89] = 16711935 & (_0x58f092[_0x37fc89] << 8 | _0x58f092[_0x37fc89] >>> 24) | 4278255360 & (_0x58f092[_0x37fc89] << 24 | _0x58f092[_0x37fc89] >>> 8);
              }
              _0x58f092[_0x544598 >>> 5] |= 128 << _0x544598 % 32;
              _0x58f092[14 + (_0x544598 + 64 >>> 9 << 4)] = _0x544598;
              var _0x5d5f43 = _0x26d9bc._ff,
                _0x41dcab = _0x26d9bc._gg,
                _0x5ce9d8 = _0x26d9bc._hh,
                _0x5f47ce = _0x26d9bc._ii;
              for (_0x37fc89 = 0; _0x37fc89 < _0x58f092.length; _0x37fc89 += 16) {
                var _0xabe54a = _0x3f0995,
                  _0x47538e = _0x3437a8,
                  _0x5c6069 = _0x5082c6,
                  _0x86fe8b = _0x3a25c3;
                _0x3f0995 = _0x5d5f43(_0x3f0995, _0x3437a8, _0x5082c6, _0x3a25c3, _0x58f092[_0x37fc89 + 0], 7, -680876936);
                _0x3a25c3 = _0x5d5f43(_0x3a25c3, _0x3f0995, _0x3437a8, _0x5082c6, _0x58f092[_0x37fc89 + 1], 12, -389564586);
                _0x5082c6 = _0x5d5f43(_0x5082c6, _0x3a25c3, _0x3f0995, _0x3437a8, _0x58f092[_0x37fc89 + 2], 17, 606105819);
                _0x3437a8 = _0x5d5f43(_0x3437a8, _0x5082c6, _0x3a25c3, _0x3f0995, _0x58f092[_0x37fc89 + 3], 22, -1044525330);
                _0x3f0995 = _0x5d5f43(_0x3f0995, _0x3437a8, _0x5082c6, _0x3a25c3, _0x58f092[_0x37fc89 + 4], 7, -176418897);
                _0x3a25c3 = _0x5d5f43(_0x3a25c3, _0x3f0995, _0x3437a8, _0x5082c6, _0x58f092[_0x37fc89 + 5], 12, 1200080426);
                _0x5082c6 = _0x5d5f43(_0x5082c6, _0x3a25c3, _0x3f0995, _0x3437a8, _0x58f092[_0x37fc89 + 6], 17, -1473231341);
                _0x3437a8 = _0x5d5f43(_0x3437a8, _0x5082c6, _0x3a25c3, _0x3f0995, _0x58f092[_0x37fc89 + 7], 22, -45705983);
                _0x3f0995 = _0x5d5f43(_0x3f0995, _0x3437a8, _0x5082c6, _0x3a25c3, _0x58f092[_0x37fc89 + 8], 7, 1770035416);
                _0x3a25c3 = _0x5d5f43(_0x3a25c3, _0x3f0995, _0x3437a8, _0x5082c6, _0x58f092[_0x37fc89 + 9], 12, -1958414417);
                _0x5082c6 = _0x5d5f43(_0x5082c6, _0x3a25c3, _0x3f0995, _0x3437a8, _0x58f092[_0x37fc89 + 10], 17, -42063);
                _0x3437a8 = _0x5d5f43(_0x3437a8, _0x5082c6, _0x3a25c3, _0x3f0995, _0x58f092[_0x37fc89 + 11], 22, -1990404162);
                _0x3f0995 = _0x5d5f43(_0x3f0995, _0x3437a8, _0x5082c6, _0x3a25c3, _0x58f092[_0x37fc89 + 12], 7, 1804603682);
                _0x3a25c3 = _0x5d5f43(_0x3a25c3, _0x3f0995, _0x3437a8, _0x5082c6, _0x58f092[_0x37fc89 + 13], 12, -40341101);
                _0x5082c6 = _0x5d5f43(_0x5082c6, _0x3a25c3, _0x3f0995, _0x3437a8, _0x58f092[_0x37fc89 + 14], 17, -1502002290);
                _0x3f0995 = _0x41dcab(_0x3f0995, _0x3437a8 = _0x5d5f43(_0x3437a8, _0x5082c6, _0x3a25c3, _0x3f0995, _0x58f092[_0x37fc89 + 15], 22, 1236535329), _0x5082c6, _0x3a25c3, _0x58f092[_0x37fc89 + 1], 5, -165796510);
                _0x3a25c3 = _0x41dcab(_0x3a25c3, _0x3f0995, _0x3437a8, _0x5082c6, _0x58f092[_0x37fc89 + 6], 9, -1069501632);
                _0x5082c6 = _0x41dcab(_0x5082c6, _0x3a25c3, _0x3f0995, _0x3437a8, _0x58f092[_0x37fc89 + 11], 14, 643717713);
                _0x3437a8 = _0x41dcab(_0x3437a8, _0x5082c6, _0x3a25c3, _0x3f0995, _0x58f092[_0x37fc89 + 0], 20, -373897302);
                _0x3f0995 = _0x41dcab(_0x3f0995, _0x3437a8, _0x5082c6, _0x3a25c3, _0x58f092[_0x37fc89 + 5], 5, -701558691);
                _0x3a25c3 = _0x41dcab(_0x3a25c3, _0x3f0995, _0x3437a8, _0x5082c6, _0x58f092[_0x37fc89 + 10], 9, 38016083);
                _0x5082c6 = _0x41dcab(_0x5082c6, _0x3a25c3, _0x3f0995, _0x3437a8, _0x58f092[_0x37fc89 + 15], 14, -660478335);
                _0x3437a8 = _0x41dcab(_0x3437a8, _0x5082c6, _0x3a25c3, _0x3f0995, _0x58f092[_0x37fc89 + 4], 20, -405537848);
                _0x3f0995 = _0x41dcab(_0x3f0995, _0x3437a8, _0x5082c6, _0x3a25c3, _0x58f092[_0x37fc89 + 9], 5, 568446438);
                _0x3a25c3 = _0x41dcab(_0x3a25c3, _0x3f0995, _0x3437a8, _0x5082c6, _0x58f092[_0x37fc89 + 14], 9, -1019803690);
                _0x5082c6 = _0x41dcab(_0x5082c6, _0x3a25c3, _0x3f0995, _0x3437a8, _0x58f092[_0x37fc89 + 3], 14, -187363961);
                _0x3437a8 = _0x41dcab(_0x3437a8, _0x5082c6, _0x3a25c3, _0x3f0995, _0x58f092[_0x37fc89 + 8], 20, 1163531501);
                _0x3f0995 = _0x41dcab(_0x3f0995, _0x3437a8, _0x5082c6, _0x3a25c3, _0x58f092[_0x37fc89 + 13], 5, -1444681467);
                _0x3a25c3 = _0x41dcab(_0x3a25c3, _0x3f0995, _0x3437a8, _0x5082c6, _0x58f092[_0x37fc89 + 2], 9, -51403784);
                _0x5082c6 = _0x41dcab(_0x5082c6, _0x3a25c3, _0x3f0995, _0x3437a8, _0x58f092[_0x37fc89 + 7], 14, 1735328473);
                _0x3f0995 = _0x5ce9d8(_0x3f0995, _0x3437a8 = _0x41dcab(_0x3437a8, _0x5082c6, _0x3a25c3, _0x3f0995, _0x58f092[_0x37fc89 + 12], 20, -1926607734), _0x5082c6, _0x3a25c3, _0x58f092[_0x37fc89 + 5], 4, -378558);
                _0x3a25c3 = _0x5ce9d8(_0x3a25c3, _0x3f0995, _0x3437a8, _0x5082c6, _0x58f092[_0x37fc89 + 8], 11, -2022574463);
                _0x5082c6 = _0x5ce9d8(_0x5082c6, _0x3a25c3, _0x3f0995, _0x3437a8, _0x58f092[_0x37fc89 + 11], 16, 1839030562);
                _0x3437a8 = _0x5ce9d8(_0x3437a8, _0x5082c6, _0x3a25c3, _0x3f0995, _0x58f092[_0x37fc89 + 14], 23, -35309556);
                _0x3f0995 = _0x5ce9d8(_0x3f0995, _0x3437a8, _0x5082c6, _0x3a25c3, _0x58f092[_0x37fc89 + 1], 4, -1530992060);
                _0x3a25c3 = _0x5ce9d8(_0x3a25c3, _0x3f0995, _0x3437a8, _0x5082c6, _0x58f092[_0x37fc89 + 4], 11, 1272893353);
                _0x5082c6 = _0x5ce9d8(_0x5082c6, _0x3a25c3, _0x3f0995, _0x3437a8, _0x58f092[_0x37fc89 + 7], 16, -155497632);
                _0x3437a8 = _0x5ce9d8(_0x3437a8, _0x5082c6, _0x3a25c3, _0x3f0995, _0x58f092[_0x37fc89 + 10], 23, -1094730640);
                _0x3f0995 = _0x5ce9d8(_0x3f0995, _0x3437a8, _0x5082c6, _0x3a25c3, _0x58f092[_0x37fc89 + 13], 4, 681279174);
                _0x3a25c3 = _0x5ce9d8(_0x3a25c3, _0x3f0995, _0x3437a8, _0x5082c6, _0x58f092[_0x37fc89 + 0], 11, -358537222);
                _0x5082c6 = _0x5ce9d8(_0x5082c6, _0x3a25c3, _0x3f0995, _0x3437a8, _0x58f092[_0x37fc89 + 3], 16, -722521979);
                _0x3437a8 = _0x5ce9d8(_0x3437a8, _0x5082c6, _0x3a25c3, _0x3f0995, _0x58f092[_0x37fc89 + 6], 23, 76029189);
                _0x3f0995 = _0x5ce9d8(_0x3f0995, _0x3437a8, _0x5082c6, _0x3a25c3, _0x58f092[_0x37fc89 + 9], 4, -640364487);
                _0x3a25c3 = _0x5ce9d8(_0x3a25c3, _0x3f0995, _0x3437a8, _0x5082c6, _0x58f092[_0x37fc89 + 12], 11, -421815835);
                _0x5082c6 = _0x5ce9d8(_0x5082c6, _0x3a25c3, _0x3f0995, _0x3437a8, _0x58f092[_0x37fc89 + 15], 16, 530742520);
                _0x3f0995 = _0x5f47ce(_0x3f0995, _0x3437a8 = _0x5ce9d8(_0x3437a8, _0x5082c6, _0x3a25c3, _0x3f0995, _0x58f092[_0x37fc89 + 2], 23, -995338651), _0x5082c6, _0x3a25c3, _0x58f092[_0x37fc89 + 0], 6, -198630844);
                _0x3a25c3 = _0x5f47ce(_0x3a25c3, _0x3f0995, _0x3437a8, _0x5082c6, _0x58f092[_0x37fc89 + 7], 10, 1126891415);
                _0x5082c6 = _0x5f47ce(_0x5082c6, _0x3a25c3, _0x3f0995, _0x3437a8, _0x58f092[_0x37fc89 + 14], 15, -1416354905);
                _0x3437a8 = _0x5f47ce(_0x3437a8, _0x5082c6, _0x3a25c3, _0x3f0995, _0x58f092[_0x37fc89 + 5], 21, -57434055);
                _0x3f0995 = _0x5f47ce(_0x3f0995, _0x3437a8, _0x5082c6, _0x3a25c3, _0x58f092[_0x37fc89 + 12], 6, 1700485571);
                _0x3a25c3 = _0x5f47ce(_0x3a25c3, _0x3f0995, _0x3437a8, _0x5082c6, _0x58f092[_0x37fc89 + 3], 10, -1894986606);
                _0x5082c6 = _0x5f47ce(_0x5082c6, _0x3a25c3, _0x3f0995, _0x3437a8, _0x58f092[_0x37fc89 + 10], 15, -1051523);
                _0x3437a8 = _0x5f47ce(_0x3437a8, _0x5082c6, _0x3a25c3, _0x3f0995, _0x58f092[_0x37fc89 + 1], 21, -2054922799);
                _0x3f0995 = _0x5f47ce(_0x3f0995, _0x3437a8, _0x5082c6, _0x3a25c3, _0x58f092[_0x37fc89 + 8], 6, 1873313359);
                _0x3a25c3 = _0x5f47ce(_0x3a25c3, _0x3f0995, _0x3437a8, _0x5082c6, _0x58f092[_0x37fc89 + 15], 10, -30611744);
                _0x5082c6 = _0x5f47ce(_0x5082c6, _0x3a25c3, _0x3f0995, _0x3437a8, _0x58f092[_0x37fc89 + 6], 15, -1560198380);
                _0x3437a8 = _0x5f47ce(_0x3437a8, _0x5082c6, _0x3a25c3, _0x3f0995, _0x58f092[_0x37fc89 + 13], 21, 1309151649);
                _0x3f0995 = _0x5f47ce(_0x3f0995, _0x3437a8, _0x5082c6, _0x3a25c3, _0x58f092[_0x37fc89 + 4], 6, -145523070);
                _0x3a25c3 = _0x5f47ce(_0x3a25c3, _0x3f0995, _0x3437a8, _0x5082c6, _0x58f092[_0x37fc89 + 11], 10, -1120210379);
                _0x5082c6 = _0x5f47ce(_0x5082c6, _0x3a25c3, _0x3f0995, _0x3437a8, _0x58f092[_0x37fc89 + 2], 15, 718787259);
                _0x3437a8 = _0x5f47ce(_0x3437a8, _0x5082c6, _0x3a25c3, _0x3f0995, _0x58f092[_0x37fc89 + 9], 21, -343485551);
                _0x3f0995 = _0x3f0995 + _0xabe54a >>> 0;
                _0x3437a8 = _0x3437a8 + _0x47538e >>> 0;
                _0x5082c6 = _0x5082c6 + _0x5c6069 >>> 0;
                _0x3a25c3 = _0x3a25c3 + _0x86fe8b >>> 0;
              }
              return _0x123ead.endian([_0x3f0995, _0x3437a8, _0x5082c6, _0x3a25c3]);
            })._ff = function (_0x385304, _0x56e764, _0x5d0cb7, _0x3a5393, _0x4f0433, _0x549c04, _0x31448a) {
              var _0x827bf7 = _0x385304 + (_0x56e764 & _0x5d0cb7 | ~_0x56e764 & _0x3a5393) + (_0x4f0433 >>> 0) + _0x31448a;
              return (_0x827bf7 << _0x549c04 | _0x827bf7 >>> 32 - _0x549c04) + _0x56e764;
            };
            _0x26d9bc._gg = function (_0x3be2e9, _0x1c11fb, _0x1ff202, _0x22c699, _0x437f8c, _0x269cda, _0x4ab767) {
              var _0x1d87f0 = _0x3be2e9 + (_0x1c11fb & _0x22c699 | _0x1ff202 & ~_0x22c699) + (_0x437f8c >>> 0) + _0x4ab767;
              return (_0x1d87f0 << _0x269cda | _0x1d87f0 >>> 32 - _0x269cda) + _0x1c11fb;
            };
            _0x26d9bc._hh = function (_0x54edb3, _0x88f33, _0x50cd53, _0xb98c28, _0x593ec8, _0x2e0567, _0x2296ee) {
              var _0x33192c = _0x54edb3 + (_0x88f33 ^ _0x50cd53 ^ _0xb98c28) + (_0x593ec8 >>> 0) + _0x2296ee;
              return (_0x33192c << _0x2e0567 | _0x33192c >>> 32 - _0x2e0567) + _0x88f33;
            };
            _0x26d9bc._ii = function (_0x39b775, _0x4fed90, _0x8a3416, _0x4ef3a1, _0x41f995, _0x14436f, _0x25b34c) {
              var _0x376a1d = _0x39b775 + (_0x8a3416 ^ (_0x4fed90 | ~_0x4ef3a1)) + (_0x41f995 >>> 0) + _0x25b34c;
              return (_0x376a1d << _0x14436f | _0x376a1d >>> 32 - _0x14436f) + _0x4fed90;
            };
            _0x26d9bc._blocksize = 16;
            _0x26d9bc._digestsize = 16;
            _0x102ec3.exports = function (_0x1bf60b, _0x1a0bc0) {
              if (null == _0x1bf60b) {
                throw new Error("Illegal argument " + _0x1bf60b);
              }
              var _0x5215bf = _0x123ead.wordsToBytes(_0x26d9bc(_0x1bf60b, _0x1a0bc0));
              return _0x1a0bc0 && _0x1a0bc0.asBytes ? _0x5215bf : _0x1a0bc0 && _0x1a0bc0.asString ? _0x2a82bb.bytesToString(_0x5215bf) : _0x123ead.bytesToHex(_0x5215bf);
            };
          },
          18900: (_0x39c367, _0x1e03fe, _0xa5da38) => {
            'use strict';

            Object.defineProperty(_0x1e03fe, "__esModule", {
              value: !0
            });
            _0x1e03fe.default = void 0;
            var _0x2e28d7 = _0x3072dd($app_require$("@app-module/system.device")),
              _0x1fbf14 = _0x3072dd($app_require$("@app-module/system.app")),
              _0x446b2c = _0x3072dd($app_require$("@app-module/system.network")),
              _0x11c727 = _0x3072dd($app_require$("@app-module/system.fetch")),
              _0x3452e5 = _0x3072dd($app_require$("@app-module/system.package")),
              _0x1b4d03 = _0x3072dd($app_require$("@app-module/system.webview")),
              _0x26b23b = _0x3072dd($app_require$("@app-module/system.prompt")),
              _0x5cfcba = _0x3072dd($app_require$("@app-module/system.router")),
              _0x2ab9ec = _0x3072dd($app_require$("@app-module/system.request")),
              _0xc37268 = _0x3072dd($app_require$("@app-module/system.storage")),
              _0x246a52 = _0x3072dd($app_require$("@app-module/service.account")),
              _0x2e4107 = _0x3072dd($app_require$("@app-module/system.sensor")),
              _0x2da08a = _0x3072dd($app_require$("@app-module/system.vibrator")),
              _0x230d48 = _0x3072dd($app_require$("@app-module/system.file")),
              _0x1074da = _0x3072dd($app_require$("@app-module/system.image")),
              _0x312637 = _0xa5da38(67491);
            function _0x3072dd(_0x134edf) {
              return _0x134edf && _0x134edf.__esModule ? _0x134edf : {
                default: _0x134edf
              };
            }
            var _0x534629 = Object.getPrototypeOf(_0xa5da38.g) || _0xa5da38.g,
              _0x4bc781 = "internal://files/unionad/".concat(_0x312637.version, "/ad-render-quick.min.js");
            function _0x462afb(_0x6748ff, _0xaf2806) {
              var _0x371332 = this;
              try {
                new Function(_0x6748ff)();
              } catch (_0x225df9) {
                _0xaf2806 && _0x10d1bb.call(this).then(function (_0x6fea6) {
                  _0x462afb(_0x6fea6, !1);
                  _0xdd10b9.call(_0x371332);
                });
              }
            }
            function _0xdd10b9(_0x47a23c) {
              try {
                _0x534629.$union_quick_app_sdk && (_0x534629.$union_quick_app_sdk.api = {
                  device: _0x2e28d7.default,
                  app: _0x1fbf14.default,
                  network: _0x446b2c.default,
                  fetch: _0x11c727.default,
                  pkg: _0x3452e5.default,
                  webview: _0x1b4d03.default,
                  prompt: _0x26b23b.default,
                  router: _0x5cfcba.default,
                  request: _0x2ab9ec.default,
                  storage: _0xc37268.default,
                  account: _0x246a52.default,
                  file: _0x230d48.default,
                  sensor: _0x2e4107.default,
                  image: _0x1074da.default,
                  vibrator: _0x2da08a.default
                }, _0x534629.$union_quick_app_sdk.sdkVersion = _0x312637.version, _0x534629.$union_quick_app_sdk.fileUrl = _0x4bc781, new _0x534629.$union_quick_app_sdk(this, _0x47a23c));
              } catch (_0x1516f8) {}
            }
            function _0x10d1bb() {
              return new Promise(function (_0x3e1a70, _0x57323d) {
                _0x11c727.default.fetch({
                  url: "https://cpro.baidustatic.com/cpro/xcx/js/ad-render-quick.min.js",
                  responseType: "text",
                  method: "GET",
                  success: function (_0x1b6499) {
                    _0x230d48.default.writeText({
                      uri: _0x4bc781,
                      text: _0x1b6499.data,
                      success: function () {},
                      fail: function (_0x189e42, _0x26ae40) {}
                    });
                    _0x3e1a70(_0x1b6499.data);
                  },
                  fail: function (_0x3f8127, _0x4b37d8) {
                    _0x57323d();
                  }
                });
              });
            }
            var _0x2c4c76,
              _0x241144 = (_0x2c4c76 = function _0x379d3e(_0x398163, _0x5922a7) {
                (function (_0x1a03ac, _0x82bd89) {
                  if (!(_0x1a03ac instanceof _0x82bd89)) {
                    throw new TypeError("Cannot call a class as a function");
                  }
                })(this, _0x379d3e);
                _0x534629 && _0x534629.$union_quick_app_sdk ? _0xdd10b9.call(_0x398163, _0x5922a7) : _0x230d48.default.readText({
                  uri: _0x4bc781,
                  success: function (_0x663517) {
                    _0x462afb.call(_0x398163, _0x663517.text, !0);
                    _0xdd10b9.call(_0x398163, _0x5922a7);
                  },
                  fail: function (_0x2f12dd, _0x569c9f) {
                    _0x10d1bb.call(_0x398163).then(function (_0x22fdee) {
                      _0x462afb.call(_0x398163, _0x22fdee, !1);
                      _0xdd10b9.call(_0x398163, _0x5922a7);
                    });
                  }
                });
              }, Object.defineProperty(_0x2c4c76, "prototype", {
                writable: !1
              }), _0x2c4c76);
            _0x1e03fe.default = _0x241144;
          },
          80954: (_0x262a48, _0x3bf37e, _0x5495bb) => {
            'use strict';

            Object.defineProperty(_0x3bf37e, "__esModule", {
              value: !0
            });
            _0x3bf37e.default = void 0;
            var _0x3ef8de = _0x11e594($app_require$("@app-module/system.fetch")),
              _0x21d61d = _0x11e594(_0x5495bb(170));
            function _0x11e594(_0x42a9e0) {
              return _0x42a9e0 && _0x42a9e0.__esModule ? _0x42a9e0 : {
                default: _0x42a9e0
              };
            }
            function _0x226b9e(_0x12ab0f, _0xef21ca = 1) {
              return new Promise(_0x4ce027 => {
                _0x3ef8de.default.fetch({
                  header: _0x12ab0f.header || _0x5495bb.g.commonParams || {},
                  url: _0x12ab0f.url,
                  method: _0x12ab0f.method,
                  data: _0x12ab0f.data
                }).then(_0x51aec9 => {
                  if (1 === _0xef21ca) {
                    const _0x5c57ff = _0x51aec9.data,
                      _0x32c49d = JSON.parse(_0x5c57ff.data);
                    _0x4ce027(_0x32c49d);
                  } else {
                    if (2 === _0xef21ca) {
                      const _0x5edfb4 = _0x51aec9.data;
                      _0x4ce027(_0x5edfb4);
                    }
                  }
                }).catch(_0x380e43 => {
                  console.error("❌ 请求失败, error--" + _0x12ab0f.url, _0x380e43);
                  _0x4ce027({
                    code: 9999,
                    data: null,
                    msg: "❌请求失败"
                  });
                }).finally(() => {
                  _0x4ce027();
                });
              });
            }
            Promise.prototype.finally = function (_0x5edee8) {
              const _0x5a847f = this.constructor;
              return this.then(_0x126339 => _0x5a847f.resolve(_0x5edee8()).then(() => _0x126339), _0xaa79e6 => _0x5a847f.resolve(_0x5edee8()).then(() => {
                throw _0xaa79e6;
              }));
            };
            var _0x1d4bb1 = {
              post: function (_0xb6d8d1, _0x235a1f, _0x231b71) {
                return _0x226b9e({
                  method: "post",
                  url: _0xb6d8d1,
                  data: _0x235a1f,
                  header: _0x231b71
                });
              },
              get: function (_0x2bf613, _0x4d3f9b, _0x12ff65) {
                return _0x226b9e({
                  header: _0x12ff65,
                  method: "get",
                  url: _0x21d61d.default.queryString(_0x2bf613, _0x4d3f9b)
                });
              },
              fetch: (_0x521823, _0x3dd16d = 2) => _0x226b9e({
                header: _0x521823.header,
                method: _0x521823.method && "get",
                url: _0x521823.url
              }, _0x3dd16d)
            };
            _0x3bf37e.default = _0x1d4bb1;
          },
          43687: (_0x5b6541, _0x3bba55, _0x39b97c) => {
            'use strict';

            Object.defineProperty(_0x3bba55, "__esModule", {
              value: !0
            });
            _0x3bba55.default = void 0;
            var _0x4ae9e7 = _0x970d05(_0x39b97c(80954)),
              _0x2244a6 = _0x970d05(_0x39b97c(170));
            function _0x970d05(_0x25c125) {
              return _0x25c125 && _0x25c125.__esModule ? _0x25c125 : {
                default: _0x25c125
              };
            }
            var _0x10aa07 = {
              getAds: _0x259166 => _0x4ae9e7.default.get(_0x2244a6.default.composeApiPath("/getAds", 5), _0x259166),
              getAdsNew: _0x3692a1 => _0x4ae9e7.default.get(_0x2244a6.default.composeApiPath("/getAdsNew", 5), _0x3692a1),
              pvuvreport: _0x4d58a0 => _0x4ae9e7.default.get(_0x2244a6.default.composeApiPath("/pvuvreport", 5), _0x4d58a0),
              getAdx: _0x4573fa => _0x4ae9e7.default.get(_0x2244a6.default.composeApiPath("/api/sdk/ad", 7), _0x4573fa),
              getExposureAndClick: _0x1a9fa4 => _0x4ae9e7.default.get(_0x2244a6.default.composeApiPath("/mkt/callback_ad_click.aspx", 6), _0x1a9fa4)
            };
            _0x3bba55.default = _0x10aa07;
          },
          41093: (_0x254ecd, _0x4bf9e9, _0x374afa) => {
            'use strict';

            Object.defineProperty(_0x4bf9e9, "__esModule", {
              value: !0
            });
            _0x4bf9e9.default = void 0;
            var _0x3821b8 = _0x3119a0(_0x374afa(80954)),
              _0xbb1170 = _0x3119a0(_0x374afa(170));
            function _0x3119a0(_0x4c069a) {
              return _0x4c069a && _0x4c069a.__esModule ? _0x4c069a : {
                default: _0x4c069a
              };
            }
            var _0x590fb2 = {
              getAudioChapterList: _0x143eeb => _0x3821b8.default.get(_0xbb1170.default.composeApiPath("/getAudioChapterList"), _0x143eeb),
              getAudioInfo: _0x18b121 => _0x3821b8.default.get(_0xbb1170.default.composeApiPath("/audio/getAudioInfo"), _0x18b121),
              getCDNVolume: _0x206cb3 => _0x3821b8.default.get(_0xbb1170.default.composeApiPath("/book/getCDNVolume"), _0x206cb3),
              getvolume: _0x1b2da0 => _0x3821b8.default.get(_0xbb1170.default.composeApiPath("/cx/itf/getvolume", 8), _0x1b2da0)
            };
            _0x4bf9e9.default = _0x590fb2;
          },
          45722: (_0x370b6c, _0x4ddf4b, _0x210d27) => {
            'use strict';

            Object.defineProperty(_0x4ddf4b, "__esModule", {
              value: !0
            });
            _0x4ddf4b.default = void 0;
            var _0x25dab5 = _0x15fd4f(_0x210d27(80954)),
              _0x359f9b = _0x15fd4f(_0x210d27(170));
            function _0x15fd4f(_0x1107b5) {
              return _0x1107b5 && _0x1107b5.__esModule ? _0x1107b5 : {
                default: _0x1107b5
              };
            }
            var _0x146b7b = {
              addRack: _0x2a89f7 => _0x25dab5.default.get(_0x359f9b.default.composeApiPath("/bookRack/addRack"), _0x2a89f7),
              myRackList: _0x4c1da5 => _0x25dab5.default.get(_0x359f9b.default.composeApiPath("/bookRack/myRackList"), _0x4c1da5),
              delRack: _0x3913d9 => _0x25dab5.default.get(_0x359f9b.default.composeApiPath("/bookRack/delRack"), _0x3913d9),
              rackList: _0x2cf9e4 => _0x25dab5.default.get(_0x359f9b.default.composeApiPath("/bookRack/rackList"), _0x2cf9e4),
              userRackList: _0x1330d6 => _0x25dab5.default.get(_0x359f9b.default.composeApiPath("/api/lightapp/rackList"), _0x1330d6),
              updateRackChapter: _0x1a028f => _0x25dab5.default.get(_0x359f9b.default.composeApiPath("/bookRack/updateRackChapter"), _0x1a028f),
              shelfUpdate: _0x20d2ff => _0x25dab5.default.post(_0x359f9b.default.composeApiPath("/cx/itf/shelfUpdate", 9), _0x20d2ff, {
                "Content-Type": "application/json"
              })
            };
            _0x4ddf4b.default = _0x146b7b;
          },
          56629: (_0x146ba5, _0x5199a7, _0x2c7754) => {
            'use strict';

            Object.defineProperty(_0x5199a7, "__esModule", {
              value: !0
            });
            _0x5199a7.default = void 0;
            var _0x19ccef = _0x10ee4d(_0x2c7754(80954)),
              _0x301f62 = _0x10ee4d(_0x2c7754(170));
            function _0x10ee4d(_0x2c3537) {
              return _0x2c3537 && _0x2c3537.__esModule ? _0x2c3537 : {
                default: _0x2c3537
              };
            }
            var _0x16fe2b = {
              columnList: _0x2d6b08 => _0x19ccef.default.get(_0x301f62.default.composeApiPath("/book/columnList"), _0x2d6b08),
              bdList: _0x58302d => _0x19ccef.default.get(_0x301f62.default.composeApiPath("/book/bdList"), _0x58302d),
              bdMoreList: _0x2f0df5 => _0x19ccef.default.get(_0x301f62.default.composeApiPath("/book/bdMore"), _0x2f0df5),
              bdChange: _0x30680b => _0x19ccef.default.get(_0x301f62.default.composeApiPath("/book/bdChange"), _0x30680b),
              bookDetail: _0x39f0e4 => _0x19ccef.default.get(_0x301f62.default.composeApiPath("/book/bookDetail"), _0x39f0e4),
              chapterContentApp: (_0x63e704, _0x4e72f4) => _0x19ccef.default.get(_0x301f62.default.composeApiPath("/cx/itf/chapterRead", 8), _0x63e704, _0x4e72f4),
              chapterContent: _0x5db76c => _0x19ccef.default.get(_0x301f62.default.composeApiPath("/book/chapterContent"), _0x5db76c),
              chapterContentByIndex: _0x536a0d => _0x19ccef.default.get(_0x301f62.default.composeApiPath("/book/chapterContentByIndex"), _0x536a0d),
              chapterList: _0x552ae0 => _0x19ccef.default.get(_0x301f62.default.composeApiPath("/book/chapterList"), _0x552ae0),
              bookDetailLikeMore: _0x32b377 => _0x19ccef.default.get(_0x301f62.default.composeApiPath("/book/bookDetailLikeMore"), _0x32b377),
              bookCategoryRecommend: _0x36957b => _0x19ccef.default.post(_0x301f62.default.composeApiPath("/book/category/recommend"), _0x36957b),
              boutiqueColumnContent: _0x155245 => _0x19ccef.default.post(_0x301f62.default.composeApiPath("/api/boutique/columnContent"), _0x155245),
              boutiqueColumnList: _0xc0bd3b => _0x19ccef.default.post(_0x301f62.default.composeApiPath("/api/boutique/columnList"), _0xc0bd3b),
              boutiqueXmbdChange: _0x5b2bd2 => _0x19ccef.default.post(_0x301f62.default.composeApiPath("/api/boutique/xmbdChange"), _0x5b2bd2),
              boutiqueXmbdMore: _0x39469b => _0x19ccef.default.post(_0x301f62.default.composeApiPath("/api/boutique/xmbdMore"), _0x39469b),
              getvolume: _0x4a23a3 => _0x19ccef.default.get(_0x301f62.default.composeApiPath("/cx/itf/getvolume", 8), _0x4a23a3),
              getWeather: _0x53de85 => _0x19ccef.default.get("http://lightapp-bookstore.cread.com/api/deal/weatherInfo", _0x53de85)
            };
            _0x5199a7.default = _0x16fe2b;
          },
          61653: (_0x4b36ab, _0x1f03cf, _0x516301) => {
            'use strict';

            Object.defineProperty(_0x1f03cf, "__esModule", {
              value: !0
            });
            _0x1f03cf.default = void 0;
            var _0xebfded = _0x1f0184(_0x516301(80954)),
              _0x29f30d = _0x1f0184(_0x516301(170));
            function _0x1f0184(_0x40ef17) {
              return _0x40ef17 && _0x40ef17.__esModule ? _0x40ef17 : {
                default: _0x40ef17
              };
            }
            var _0x570a5e = {
              shareIndex: _0xe1dc13 => _0xebfded.default.post(_0x29f30d.default.composeApiPath("/share/index"), _0xe1dc13),
              successUserList: _0x36216b => _0xebfded.default.post(_0x29f30d.default.composeApiPath("/share/success/userList"), _0x36216b),
              successAwardList: _0x296de7 => _0xebfded.default.post(_0x29f30d.default.composeApiPath("/share/success/awardList"), _0x296de7)
            };
            _0x1f03cf.default = _0x570a5e;
          },
          10212: (_0x1b80c7, _0x5211c6, _0x2442f0) => {
            'use strict';

            Object.defineProperty(_0x5211c6, "__esModule", {
              value: !0
            });
            _0x5211c6.default = void 0;
            var _0x4700d3 = _0x42c2bf(_0x2442f0(80954)),
              _0x3f7fd7 = _0x42c2bf(_0x2442f0(170));
            function _0x42c2bf(_0x381563) {
              return _0x381563 && _0x381563.__esModule ? _0x381563 : {
                default: _0x381563
              };
            }
            var _0x1f5fbe = {
              getIdiomList: _0x2a94ea => _0x4700d3.default.get(_0x3f7fd7.default.composeApiPath("/idion/list", 10), _0x2a94ea),
              getIdiomSolitaire: _0xd17379 => _0x4700d3.default.get(_0x3f7fd7.default.composeApiPath("/idion/solitaire", 10), _0xd17379)
            };
            _0x5211c6.default = _0x1f5fbe;
          },
          61247: (_0x328017, _0x4bd55b, _0x5d2da6) => {
            'use strict';

            Object.defineProperty(_0x4bd55b, "__esModule", {
              value: !0
            });
            _0x4bd55b.default = void 0;
            const _0x5e0c1c = _0x5d2da6(18465),
              _0x56a88a = {};
            _0x5e0c1c.keys().forEach(_0x523184 => {
              "./index.js" !== _0x523184 && (_0x56a88a[_0x523184.replace(/(^\.\/|\.js$)/g, "")] = _0x5e0c1c(_0x523184).default);
            });
            var _0x45b6e7 = _0x56a88a;
            _0x4bd55b.default = _0x45b6e7;
          },
          84408: (_0x201eec, _0x422575, _0x5ab791) => {
            'use strict';

            Object.defineProperty(_0x422575, "__esModule", {
              value: !0
            });
            _0x422575.default = void 0;
            var _0x3284ec = _0x9250ee(_0x5ab791(80954)),
              _0xadf02e = _0x9250ee(_0x5ab791(170));
            function _0x9250ee(_0x1f71ff) {
              return _0x1f71ff && _0x1f71ff.__esModule ? _0x1f71ff : {
                default: _0x1f71ff
              };
            }
            var _0x56b2d8 = {
              signIndex: _0x193aa8 => _0x3284ec.default.get(_0xadf02e.default.composeApiPath("/signIn/index"), _0x193aa8),
              awardConFig: _0x26d334 => _0x3284ec.default.get(_0xadf02e.default.composeApiPath("/signIn/awardConfig"), _0x26d334),
              toSignIn: _0xa9224c => _0x3284ec.default.get(_0xadf02e.default.composeApiPath("/user/toSignIn"), _0xa9224c),
              goodsList: _0x35e954 => _0x3284ec.default.post(_0xadf02e.default.composeApiPath("/goods/goodsList"), _0x35e954),
              exchangeGoods: _0xfe26e2 => _0x3284ec.default.post(_0xadf02e.default.composeApiPath("/exchange/goods"), _0xfe26e2),
              exchangeLog: _0x7e3410 => _0x3284ec.default.post(_0xadf02e.default.composeApiPath("/user/exchangeLog"), _0x7e3410),
              integralLog: _0x164b4c => _0x3284ec.default.post(_0xadf02e.default.composeApiPath("/user/integralLog"), _0x164b4c),
              rewardList: _0xc84c23 => _0x3284ec.default.post(_0xadf02e.default.composeApiPath("/video/rewardList"), _0xc84c23),
              reward: _0x46ce6a => _0x3284ec.default.post(_0xadf02e.default.composeApiPath("/video/reward"), _0x46ce6a),
              surplusCount: _0x1c76dc => _0x3284ec.default.post(_0xadf02e.default.composeApiPath("/video/surplus/count"), _0x1c76dc)
            };
            _0x422575.default = _0x56b2d8;
          },
          32139: (_0x8a1a3c, _0x262f6c, _0x23acdb) => {
            'use strict';

            Object.defineProperty(_0x262f6c, "__esModule", {
              value: !0
            });
            _0x262f6c.default = void 0;
            var _0x225d5c = _0x52f3be(_0x23acdb(80954)),
              _0x206bfc = _0x52f3be(_0x23acdb(170));
            function _0x52f3be(_0x3dfd98) {
              return _0x3dfd98 && _0x3dfd98.__esModule ? _0x3dfd98 : {
                default: _0x3dfd98
              };
            }
            var _0x154beb = {
              getConfig: _0x5b1372 => _0x225d5c.default.get(_0x206bfc.default.composeApiPath("/api/lightapp/config"), _0x5b1372),
              getNewConfig: _0x3d64d3 => _0x225d5c.default.get(_0x206bfc.default.composeApiPath("/api/lightapp/allConfig"), _0x3d64d3),
              saveDesktop: _0x31d3bc => _0x225d5c.default.get(_0x206bfc.default.composeApiPath("/save/desktop"), _0x31d3bc),
              appStartInit: (_0x30f42a, _0x2f1fd2) => _0x225d5c.default.get("https://open.cread.com/mkt/api/getpromotionconfig.aspx?app_name=QAPP_" + _0x30f42a + "&step=" + _0x2f1fd2),
              getClipboard: _0x6dc9fc => _0x225d5c.default.get("https://open.cread.com/common/service/getClipboard.aspx?appName=QAPP_" + _0x6dc9fc),
              web_callback: _0x363eac => _0x225d5c.default.get("https://open.cread.com/mkt/web_callback.aspx?appName=QAPP_" + _0x363eac + "&eventType=ADDHOME"),
              user_callback: (_0x87ea8b, _0x2eaaba) => _0x225d5c.default.get("https://open.cread.com/mkt/callback_custom.aspx?channelId=" + _0x87ea8b.channelId + "&appName=QAPP_" + _0x2eaaba + "&userId=" + _0x87ea8b.userId + "&eventType=1"),
              setClipboard: _0x5c4999 => _0x225d5c.default.get(_0x206bfc.default.composeApiPath("/common/clipboard/setClipboard.aspx", 6), _0x5c4999),
              getClearClipboard: _0x92492 => _0x225d5c.default.get(_0x206bfc.default.composeApiPath("/common/clipboard/getClipboard.aspx", 6), _0x92492),
              kuaiyouEventCallback: _0x3492e5 => _0x225d5c.default.get("https://bid.adview.cn/agent/eventcallback", _0x3492e5),
              hapCallback: (_0x5e5c82, _0x584625) => _0x225d5c.default.get("https://open.cread.com/mkt/web_click_test.aspx?channelCode=" + _0x5e5c82 + "&random=" + _0x584625)
            };
            _0x262f6c.default = _0x154beb;
          },
          57614: (_0xaf37a5, _0x20587e, _0x2c2207) => {
            'use strict';

            Object.defineProperty(_0x20587e, "__esModule", {
              value: !0
            });
            _0x20587e.default = void 0;
            var _0x5bb75f = _0x7392b7(_0x2c2207(80954)),
              _0x4e8886 = _0x7392b7(_0x2c2207(170));
            function _0x7392b7(_0x4c159a) {
              return _0x4c159a && _0x4c159a.__esModule ? _0x4c159a : {
                default: _0x4c159a
              };
            }
            var _0x22f68f = {
              weChatQuickPay: _0x19e9bc => _0x5bb75f.default.get(_0x4e8886.default.composeApiPath("/weChat/quickPay"), _0x19e9bc),
              alipayQuickPay: _0x5c14f3 => _0x5bb75f.default.get(_0x4e8886.default.composeApiPath("/alipay/quickPay"), _0x5c14f3),
              payedOrderStatus: _0x5e4eb6 => _0x5bb75f.default.get(_0x4e8886.default.composeApiPath("/payedOrder/status"), _0x5e4eb6),
              payChapter: _0x28c2d9 => _0x5bb75f.default.get(_0x4e8886.default.composeApiPath("/pay/chapter"), _0x28c2d9),
              payChapterLog: _0x3779dc => _0x5bb75f.default.get(_0x4e8886.default.composeApiPath("/pay/chapterLog"), _0x3779dc),
              quickPayForBindWeChat: _0x5e854c => _0x5bb75f.default.get(_0x4e8886.default.composeApiPath("/weChat/huawei/quickPay"), _0x5e854c)
            };
            _0x20587e.default = _0x22f68f;
          },
          32980: (_0x5241c7, _0x59297e, _0x53e59b) => {
            'use strict';

            Object.defineProperty(_0x59297e, "__esModule", {
              value: !0
            });
            _0x59297e.default = void 0;
            var _0x3ad4a2 = _0x4b9619(_0x53e59b(80954)),
              _0x48457e = _0x4b9619(_0x53e59b(170));
            function _0x4b9619(_0x5a8d8f) {
              return _0x5a8d8f && _0x5a8d8f.__esModule ? _0x5a8d8f : {
                default: _0x5a8d8f
              };
            }
            var _0x6ecbc8 = {
              rankList: _0x4ecc33 => _0x3ad4a2.default.get(_0x48457e.default.composeApiPath("/api/rankList", 1), _0x4ecc33),
              rankBookList: _0x32a597 => _0x3ad4a2.default.get(_0x48457e.default.composeApiPath("/api/rankBookList", 1), _0x32a597),
              newBookList: _0x5ec43c => _0x3ad4a2.default.post(_0x48457e.default.composeApiPath("/api/finishOrNew/bookList", 1), _0x5ec43c),
              category: _0x37c7dd => _0x3ad4a2.default.post(_0x48457e.default.composeApiPath("/cx/book/category", 2), _0x37c7dd),
              categoryList: _0x208b6d => _0x3ad4a2.default.post(_0x48457e.default.composeApiPath("/cx/book/categoryList", 2), _0x208b6d),
              thirdCategory: _0x52fee5 => _0x3ad4a2.default.post(_0x48457e.default.composeApiPath("/cx/book/thirdCategory", 2), _0x52fee5),
              getTagBooks: _0x42b02f => _0x3ad4a2.default.get(_0x48457e.default.composeApiPath("/tag/getTagBooks", 2), _0x42b02f),
              getAllTags: () => _0x3ad4a2.default.get(_0x48457e.default.composeApiPath("/tag/getAllTags", 2))
            };
            _0x59297e.default = _0x6ecbc8;
          },
          46895: (_0x51d38e, _0x2f3251, _0x5931ea) => {
            'use strict';

            Object.defineProperty(_0x2f3251, "__esModule", {
              value: !0
            });
            _0x2f3251.default = void 0;
            var _0x55c74a = _0xcebc29(_0x5931ea(80954)),
              _0x2b142b = _0xcebc29(_0x5931ea(170));
            function _0xcebc29(_0x483c6a) {
              return _0x483c6a && _0x483c6a.__esModule ? _0x483c6a : {
                default: _0x483c6a
              };
            }
            var _0x5ea1d4 = {
              lastPageRecommend: _0x26cb6c => _0x55c74a.default.post(_0x2b142b.default.composeApiPath("/book/lastPage/recommend"), _0x26cb6c),
              categoryRecommend: _0x5a53f5 => _0x55c74a.default.post(_0x2b142b.default.composeApiPath("/book/category/recommend"), _0x5a53f5),
              notificationRecommend: _0x4107ea => _0x55c74a.default.post(_0x2b142b.default.composeApiPath("/book/push/recommend"), _0x4107ea)
            };
            _0x2f3251.default = _0x5ea1d4;
          },
          80240: (_0x13f5b6, _0x31c12b, _0x5c0e18) => {
            'use strict';

            Object.defineProperty(_0x31c12b, "__esModule", {
              value: !0
            });
            _0x31c12b.default = void 0;
            var _0x54a153 = _0x5685c1(_0x5c0e18(80954)),
              _0x435740 = _0x5685c1(_0x5c0e18(170));
            function _0x5685c1(_0x480b49) {
              return _0x480b49 && _0x480b49.__esModule ? _0x480b49 : {
                default: _0x480b49
              };
            }
            var _0x2fbf7d = {
              searchBookList: _0x3748f4 => _0x54a153.default.get(_0x435740.default.composeApiPath("/search/searchBookList"), _0x3748f4),
              searchAssociationWords: _0x2c08a7 => _0x54a153.default.get(_0x435740.default.composeApiPath("/search/searchassociationwords"), _0x2c08a7),
              index: _0xe5d64c => _0x54a153.default.get(_0x435740.default.composeApiPath("/search/index"), _0xe5d64c),
              allPeopleLook: _0x449c19 => _0x54a153.default.get(_0x435740.default.composeApiPath("/search/allPeopleLook"), _0x449c19),
              hotWordChange: _0x21ee85 => _0x54a153.default.get(_0x435740.default.composeApiPath("/search/hotWordChange"), _0x21ee85)
            };
            _0x31c12b.default = _0x2fbf7d;
          },
          97556: (_0xe032d5, _0xbf7ca1, _0x4d65c1) => {
            'use strict';

            Object.defineProperty(_0xbf7ca1, "__esModule", {
              value: !0
            });
            _0xbf7ca1.default = void 0;
            var _0x14ee13 = _0x58a455(_0x4d65c1(80954)),
              _0xb94fc9 = _0x58a455(_0x4d65c1(170));
            function _0x58a455(_0x4fc1e7) {
              return _0x4fc1e7 && _0x4fc1e7.__esModule ? _0x4fc1e7 : {
                default: _0x4fc1e7
              };
            }
            var _0x6f9a34 = {
              getVerifyCode: _0x288cee => _0x14ee13.default.get(_0xb94fc9.default.composeApiPath("/my/getVerifyCode"), _0x288cee),
              loginByMobile: _0x5d8884 => _0x14ee13.default.get(_0xb94fc9.default.composeApiPath("/my/loginByMobile"), _0x5d8884),
              logout: _0x510e81 => _0x14ee13.default.get(_0xb94fc9.default.composeApiPath("/my/logout"), _0x510e81),
              register: _0x53177c => _0x14ee13.default.post(_0xb94fc9.default.composeApiPath("/my/register/user"), _0x53177c),
              getUserInfo: _0x12e005 => _0x14ee13.default.get(_0xb94fc9.default.composeApiPath("/my/getUserInfo"), _0x12e005),
              getUserExtendInfo: _0xc69c37 => _0x14ee13.default.post(_0xb94fc9.default.composeApiPath("/api/user/getUserExtendInfo"), _0xc69c37),
              bindMobile: _0x5742ef => _0x14ee13.default.get(_0xb94fc9.default.composeApiPath("/my/bindMobile"), _0x5742ef),
              help: _0x24d469 => _0x14ee13.default.get(_0xb94fc9.default.composeApiPath("/my/help"), _0x24d469),
              sendFeedback: _0x15c233 => _0x14ee13.default.get(_0xb94fc9.default.composeApiPath("/my/sendFeedback"), _0x15c233),
              getWXAccessToken: _0xda16bb => _0x14ee13.default.get("https://api.weixin.qq.com/sns/oauth2/access_token", _0xda16bb),
              getWXUserInfo: _0x52304e => _0x14ee13.default.get("https://api.weixin.qq.com/sns/userinfo", _0x52304e),
              wxLogin: _0x54481b => _0x14ee13.default.get(_0xb94fc9.default.composeApiPath("/my/login"), _0x54481b),
              bindWechat: _0x4683b5 => _0x14ee13.default.get(_0xb94fc9.default.composeApiPath("/my/bindWechat"), _0x4683b5),
              buyList: _0x16ca3d => _0x14ee13.default.get(_0xb94fc9.default.composeApiPath("/my/buyList"), _0x16ca3d),
              buyChapter: _0xdeba61 => _0x14ee13.default.get(_0xb94fc9.default.composeApiPath("/my/buyChapter"), _0xdeba61),
              payLog: _0x4f8bd3 => _0x14ee13.default.get(_0xb94fc9.default.composeApiPath("/my/payLog"), _0x4f8bd3),
              modifyNickName: _0x3c4806 => _0x14ee13.default.post(_0xb94fc9.default.composeApiPath("/my/update/nickName"), _0x3c4806),
              modifySex: _0x2c575d => _0x14ee13.default.post(_0xb94fc9.default.composeApiPath("/my/update/sex"), _0x2c575d),
              activeUsers: _0x43317a => _0x14ee13.default.get(_0xb94fc9.default.composeApiPath("/lightapp/registerUserInfo"), _0x43317a),
              reportUserPreference: _0x386b15 => _0x14ee13.default.post(_0xb94fc9.default.composeApiPath("/api/report/user/preference"), _0x386b15),
              getVivoPushMessage: _0x14b733 => _0x14ee13.default.post(_0xb94fc9.default.composeApiPath("/vivo/subscribe/info"), _0x14b733),
              getUservipList: _0x1a3b46 => _0x14ee13.default.post(_0xb94fc9.default.composeApiPath("/vip/discounts/vipList"), _0x1a3b46)
            };
            _0xbf7ca1.default = _0x6f9a34;
          },
          57696: (_0x4e7471, _0x59dd59, _0x55f861) => {
            'use strict';

            Object.defineProperty(_0x59dd59, "__esModule", {
              value: !0
            });
            _0x59dd59.default = void 0;
            var _0x44c14d = _0xab164c(_0x55f861(80954)),
              _0x34b44c = _0xab164c(_0x55f861(170));
            function _0xab164c(_0x33916f) {
              return _0x33916f && _0x33916f.__esModule ? _0x33916f : {
                default: _0x33916f
              };
            }
            var _0xaf4ffa = {
              vipInfo: _0x3542a0 => _0x44c14d.default.post(_0x34b44c.default.composeApiPath("/vip/user/vipInfo"), _0x3542a0),
              vipList: _0x31a781 => _0x44c14d.default.post(_0x34b44c.default.composeApiPath("/vip/vipList"), _0x31a781)
            };
            _0x59dd59.default = _0xaf4ffa;
          },
          56068: (_0x49d300, _0x57ddff, _0x365f97) => {
            'use strict';

            Object.defineProperty(_0x57ddff, "__esModule", {
              value: !0
            });
            _0x57ddff.default = void 0;
            var _0x566ea5 = _0x5a88c8(_0x365f97(80954)),
              _0x649bab = _0x5a88c8(_0x365f97(170));
            function _0x5a88c8(_0x5ec779) {
              return _0x5ec779 && _0x5ec779.__esModule ? _0x5ec779 : {
                default: _0x5ec779
              };
            }
            var _0x51da37 = {
              finishTask: _0x10fc14 => (_0x10fc14 = _0x649bab.default.signParam(_0x10fc14), _0x566ea5.default.post(_0x649bab.default.composeApiPath("/api/user/finish/task"), _0x10fc14)),
              taskList: _0x4e176a => _0x566ea5.default.post(_0x649bab.default.composeApiPath("/api/user/taskList"), _0x4e176a)
            };
            _0x57ddff.default = _0x51da37;
          },
          75055: (_0x542e43, _0x32cc18, _0x501de4) => {
            'use strict';

            Object.defineProperty(_0x32cc18, "__esModule", {
              value: !0
            });
            _0x32cc18.default = void 0;
            var _0x5a2d7e = _0x15b610(_0x501de4(80954)),
              _0x177264 = _0x15b610(_0x501de4(170));
            function _0x15b610(_0x58deeb) {
              return _0x58deeb && _0x58deeb.__esModule ? _0x58deeb : {
                default: _0x58deeb
              };
            }
            var _0x4ebe17 = {
              configList: _0x3c8645 => _0x5a2d7e.default.post(_0x177264.default.composeApiPath("/api/withdrawDeposit/configList"), _0x3c8645),
              orderLog: _0x5170a6 => _0x5a2d7e.default.post(_0x177264.default.composeApiPath("/api/withdrawDeposit/orderLog"), _0x5170a6),
              payOrder: _0x3162a4 => (_0x3162a4 = _0x177264.default.signParam(_0x3162a4), _0x5a2d7e.default.post(_0x177264.default.composeApiPath("/api/withdrawDeposit/payOrder"), _0x3162a4)),
              coinExchapteCash: _0xafe352 => _0x5a2d7e.default.post(_0x177264.default.composeApiPath("/api/user/coinExchapteCash"), _0xafe352),
              getRedPackageAward: _0x37f951 => _0x5a2d7e.default.post(_0x177264.default.composeApiPath("/api/newUser/redPackageAward"), _0x37f951),
              receiveRedPackageAward: _0x35014f => _0x5a2d7e.default.post(_0x177264.default.composeApiPath("/api/award/redPackageAward"), _0x35014f),
              userCashLog: _0x427a21 => _0x5a2d7e.default.post(_0x177264.default.composeApiPath("/api/userCash/log"), _0x427a21)
            };
            _0x32cc18.default = _0x4ebe17;
          },
          21202: (_0x3c712a, _0x131783, _0x5bbed1) => {
            'use strict';

            Object.defineProperty(_0x131783, "__esModule", {
              value: !0
            });
            _0x131783.$utils = _0x131783.$apis = _0x131783.$ajax = void 0;
            const _0x3e4844 = _0x5bbed1(170).default;
            _0x131783.$utils = _0x3e4844;
            const _0x4e38b2 = _0x5bbed1(80954).default;
            _0x131783.$ajax = _0x4e38b2;
            const _0x142e53 = _0x5bbed1(61247).default;
            _0x131783.$apis = _0x142e53;
          },
          93816: (_0x432ead, _0x2d0ae) => {
            'use strict';

            Object.defineProperty(_0x2d0ae, "__esModule", {
              value: !0
            });
            _0x2d0ae.default = void 0;
            var _0x337456 = _0xa0c970($app_require$("@app-module/system.storage")),
              _0x557b5e = _0xa0c970($app_require$("@app-module/system.fetch")),
              _0x233e1d = _0xa0c970($app_require$("@app-module/system.device")),
              _0x387366 = _0xa0c970($app_require$("@app-module/system.network")),
              _0x1c7fab = _0xa0c970($app_require$("@app-module/system.router")),
              _0x596e33 = _0xa0c970($app_require$("@app-module/system.app"));
            function _0xa0c970(_0x4f98ff) {
              return _0x4f98ff && _0x4f98ff.__esModule ? _0x4f98ff : {
                default: _0x4f98ff
              };
            }
            var _0x1069bd = {
                para: {
                  name: "sensors",
                  server_url: "",
                  max_string_length: 500,
                  batch_send: !0,
                  show_log: !1
                }
              },
              _0x1d105e = {};
            var _0x5c9f9f = !1;
            _0x1069bd._queue = [];
            _0x1069bd.getSystemInfoComplete = !1;
            _0x1069bd.setPara = function (_0x7ff9ad) {
              _0x1069bd.para = _0x1d105e.extend2Lev(_0x1069bd.para, _0x7ff9ad);
              var _0x6599d2 = {
                send_timeout: 6000,
                max_length: 6
              };
              !0 === _0x1069bd.para.batch_send ? _0x1069bd.para.batch_send = _0x1d105e.extend({}, _0x6599d2) : _0x1d105e.isObject(_0x1069bd.para.batch_send) ? _0x1069bd.para.batch_send = _0x1d105e.extend({}, _0x6599d2, _0x1069bd.para.batch_send) : _0x1069bd.para.batch_send = !1;
            };
            _0x1069bd.getServerUrl = function () {
              return _0x1069bd.para.server_url;
            };
            var _0x3fcb63 = Array.prototype,
              _0x419c34 = Function.prototype,
              _0x565b7e = Object.prototype,
              _0x10fdb6 = _0x3fcb63.slice,
              _0x3a6324 = _0x565b7e.toString,
              _0x279ecb = _0x565b7e.hasOwnProperty,
              _0x190889 = "0.9.1",
              _0x3380f5 = "QuickApp",
              _0x2ddec9 = "object" == typeof _0x2ddec9 ? _0x2ddec9 : {};
            _0x2ddec9.info = function () {
              if (_0x1069bd.para.show_log && "object" == typeof console && console.log) {
                try {
                  return console.log.apply(console, arguments);
                } catch (_0x324fc9) {
                  console.log(arguments[0]);
                }
              }
            };
            _0x419c34.bind;
            _0x1d105e.each = function (_0x23c523, _0x1a7391, _0x1841c0) {
              if (null == _0x23c523) {
                return !1;
              }
              if (_0x3cedff && _0x23c523.forEach === _0x3cedff) {
                _0x23c523.forEach(_0x1a7391, _0x1841c0);
              } else {
                if (_0x23c523.length === +_0x23c523.length) {
                  for (var _0x35342d = 0, _0x34c161 = _0x23c523.length; _0x35342d < _0x34c161; _0x35342d++) {
                    if (_0x35342d in _0x23c523 && _0x1a7391.call(_0x1841c0, _0x23c523[_0x35342d], _0x35342d, _0x23c523) === _0x5511c8) {
                      return !1;
                    }
                  }
                } else {
                  for (var _0x4f6a23 in _0x23c523) if (_0x279ecb.call(_0x23c523, _0x4f6a23) && _0x1a7391.call(_0x1841c0, _0x23c523[_0x4f6a23], _0x4f6a23, _0x23c523) === _0x5511c8) {
                    return !1;
                  }
                }
              }
            };
            var _0x3cedff = _0x3fcb63.forEach,
              _0x4960d6 = _0x3fcb63.indexOf,
              _0xc1eb4b = Array.isArray,
              _0x5511c8 = {},
              _0x38e7d4 = _0x1d105e.each;
            _0x1d105e.logger = _0x2ddec9;
            _0x1d105e.extend = function (_0x3e3c2c) {
              _0x38e7d4(_0x10fdb6.call(arguments, 1), function (_0x1e3bce) {
                for (var _0x49cf43 in _0x1e3bce) void 0 !== _0x1e3bce[_0x49cf43] && (_0x3e3c2c[_0x49cf43] = _0x1e3bce[_0x49cf43]);
              });
              return _0x3e3c2c;
            };
            _0x1d105e.extend2Lev = function (_0x42e4e6) {
              _0x38e7d4(_0x10fdb6.call(arguments, 1), function (_0x534bd6) {
                for (var _0x4ce24d in _0x534bd6) void 0 !== _0x534bd6[_0x4ce24d] && (_0x1d105e.isObject(_0x534bd6[_0x4ce24d]) && _0x1d105e.isObject(_0x42e4e6[_0x4ce24d]) ? _0x1d105e.extend(_0x42e4e6[_0x4ce24d], _0x534bd6[_0x4ce24d]) : _0x42e4e6[_0x4ce24d] = _0x534bd6[_0x4ce24d]);
              });
              return _0x42e4e6;
            };
            _0x1d105e.coverExtend = function (_0x33f066) {
              _0x38e7d4(_0x10fdb6.call(arguments, 1), function (_0x6762f9) {
                for (var _0x4d7946 in _0x6762f9) void 0 !== _0x6762f9[_0x4d7946] && void 0 === _0x33f066[_0x4d7946] && (_0x33f066[_0x4d7946] = _0x6762f9[_0x4d7946]);
              });
              return _0x33f066;
            };
            _0x1d105e.isArray = _0xc1eb4b || function (_0x10c001) {
              return "[object Array]" === _0x3a6324.call(_0x10c001);
            };
            _0x1d105e.isFunction = function (_0x531770) {
              try {
                return /^\s*\bfunction\b/.test(_0x531770);
              } catch (_0x2d3aff) {
                return !1;
              }
            };
            _0x1d105e.isArguments = function (_0x3aa6c6) {
              return !(!_0x3aa6c6 || !_0x279ecb.call(_0x3aa6c6, "callee"));
            };
            _0x1d105e.toArray = function (_0x34ca4d) {
              return _0x34ca4d ? _0x34ca4d.toArray ? _0x34ca4d.toArray() : _0x1d105e.isArray(_0x34ca4d) || _0x1d105e.isArguments(_0x34ca4d) ? _0x10fdb6.call(_0x34ca4d) : _0x1d105e.values(_0x34ca4d) : [];
            };
            _0x1d105e.values = function (_0xd961a1) {
              var _0x9668d4 = [];
              null == _0xd961a1 || _0x38e7d4(_0xd961a1, function (_0x6c2e19) {
                _0x9668d4[_0x9668d4.length] = _0x6c2e19;
              });
              return _0x9668d4;
            };
            _0x1d105e.include = function (_0x13c007, _0x43581f) {
              var _0x201b6b = !1;
              return null == _0x13c007 ? _0x201b6b : _0x4960d6 && _0x13c007.indexOf === _0x4960d6 ? -1 != _0x13c007.indexOf(_0x43581f) : (_0x38e7d4(_0x13c007, function (_0x5f027c) {
                if (_0x201b6b || (_0x201b6b = _0x5f027c === _0x43581f)) {
                  return _0x5511c8;
                }
              }), _0x201b6b);
            };
            _0x1d105e.trim = function (_0x499c99) {
              return _0x499c99.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            };
            _0x1d105e.isObject = function (_0x52a97e) {
              return "[object Object]" == _0x3a6324.call(_0x52a97e) && null != _0x52a97e;
            };
            _0x1d105e.isEmptyObject = function (_0x1328c0) {
              if (_0x1d105e.isObject(_0x1328c0)) {
                for (var _0x17a7da in _0x1328c0) if (_0x279ecb.call(_0x1328c0, _0x17a7da)) {
                  return !1;
                }
                return !0;
              }
              return !1;
            };
            _0x1d105e.isUndefined = function (_0x4ded61) {
              return void 0 === _0x4ded61;
            };
            _0x1d105e.isString = function (_0x520ee8) {
              return "[object String]" == _0x3a6324.call(_0x520ee8);
            };
            _0x1d105e.isDate = function (_0x5956c3) {
              return "[object Date]" == _0x3a6324.call(_0x5956c3);
            };
            _0x1d105e.isBoolean = function (_0xd096de) {
              return "[object Boolean]" == _0x3a6324.call(_0xd096de);
            };
            _0x1d105e.isNumber = function (_0x1eb757) {
              return "[object Number]" == _0x3a6324.call(_0x1eb757) && /[\d\.]+/.test(String(_0x1eb757));
            };
            _0x1d105e.isJSONString = function (_0x2eac58) {
              try {
                JSON.parse(_0x2eac58);
              } catch (_0x369c71) {
                return !1;
              }
              return !0;
            };
            _0x1d105e.decodeURIComponent = function (_0x2f9b28) {
              var _0x31f772 = "";
              try {
                _0x31f772 = decodeURIComponent(_0x2f9b28);
              } catch (_0x5c2eda) {
                _0x31f772 = _0x2f9b28;
              }
              return _0x31f772;
            };
            _0x1d105e.encodeDates = function (_0x462dfe) {
              _0x1d105e.each(_0x462dfe, function (_0x4d9d8e, _0x1c915a) {
                _0x1d105e.isDate(_0x4d9d8e) ? _0x462dfe[_0x1c915a] = _0x1d105e.formatDate(_0x4d9d8e) : _0x1d105e.isObject(_0x4d9d8e) && (_0x462dfe[_0x1c915a] = _0x1d105e.encodeDates(_0x4d9d8e));
              });
              return _0x462dfe;
            };
            _0x1d105e.formatDate = function (_0x2ba9aa) {
              function _0x34afd8(_0x557eee) {
                return _0x557eee < 10 ? "0" + _0x557eee : _0x557eee;
              }
              return _0x2ba9aa.getFullYear() + "-" + _0x34afd8(_0x2ba9aa.getMonth() + 1) + "-" + _0x34afd8(_0x2ba9aa.getDate()) + " " + _0x34afd8(_0x2ba9aa.getHours()) + ":" + _0x34afd8(_0x2ba9aa.getMinutes()) + ":" + _0x34afd8(_0x2ba9aa.getSeconds()) + "." + _0x34afd8(_0x2ba9aa.getMilliseconds());
            };
            _0x1d105e.searchObjDate = function (_0x7baa1e) {
              _0x1d105e.isObject(_0x7baa1e) && _0x1d105e.each(_0x7baa1e, function (_0xea0002, _0x2dce11) {
                _0x1d105e.isObject(_0xea0002) ? _0x1d105e.searchObjDate(_0x7baa1e[_0x2dce11]) : _0x1d105e.isDate(_0xea0002) && (_0x7baa1e[_0x2dce11] = _0x1d105e.formatDate(_0xea0002));
              });
            };
            _0x1d105e.formatString = function (_0xf4df32) {
              return _0xf4df32.length > _0x1069bd.para.max_string_length ? (_0x2ddec9.info("字符串长度超过限制，已经做截取--" + _0xf4df32), _0xf4df32.slice(0, _0x1069bd.para.max_string_length)) : _0xf4df32;
            };
            _0x1d105e.searchObjString = function (_0xb873a0) {
              _0x1d105e.isObject(_0xb873a0) && _0x1d105e.each(_0xb873a0, function (_0x58cca0, _0x244b58) {
                _0x1d105e.isObject(_0x58cca0) ? _0x1d105e.searchObjString(_0xb873a0[_0x244b58]) : _0x1d105e.isString(_0x58cca0) && (_0xb873a0[_0x244b58] = _0x1d105e.formatString(_0x58cca0));
              });
            };
            _0x1d105e.unique = function (_0x2fc0d9) {
              for (var _0x54cd02, _0x2981c3 = [], _0x3d9bde = {}, _0x322faf = 0; _0x322faf < _0x2fc0d9.length; _0x322faf++) {
                (_0x54cd02 = _0x2fc0d9[_0x322faf]) in _0x3d9bde || (_0x3d9bde[_0x54cd02] = !0, _0x2981c3.push(_0x54cd02));
              }
              return _0x2981c3;
            };
            _0x1d105e.strip_sa_properties = function (_0x46e0c7) {
              return _0x1d105e.isObject(_0x46e0c7) ? (_0x1d105e.each(_0x46e0c7, function (_0x489153, _0x325302) {
                if (_0x1d105e.isArray(_0x489153)) {
                  var _0x50c7b8 = [];
                  _0x1d105e.each(_0x489153, function (_0x1d6896) {
                    _0x1d105e.isString(_0x1d6896) ? _0x50c7b8.push(_0x1d6896) : _0x2ddec9.info("您的数据-", _0x489153, "的数组里的值必须是字符串,已经将其删除");
                  });
                  0 !== _0x50c7b8.length ? _0x46e0c7[_0x325302] = _0x50c7b8 : (delete _0x46e0c7[_0x325302], _0x2ddec9.info("已经删除空的数组"));
                }
                _0x1d105e.isString(_0x489153) || _0x1d105e.isNumber(_0x489153) || _0x1d105e.isDate(_0x489153) || _0x1d105e.isBoolean(_0x489153) || _0x1d105e.isArray(_0x489153) || (_0x2ddec9.info("您的数据-", _0x489153, "-格式不满足要求，我们已经将其删除"), delete _0x46e0c7[_0x325302]);
              }), _0x46e0c7) : _0x46e0c7;
            };
            _0x1d105e.strip_empty_properties = function (_0x5410cc) {
              var _0x1ef42f = {};
              _0x1d105e.each(_0x5410cc, function (_0x430f5b, _0x454eed) {
                null != _0x430f5b && (_0x1ef42f[_0x454eed] = _0x430f5b);
              });
              return _0x1ef42f;
            };
            _0x1d105e.utf8Encode = function (_0x3d51eb) {
              var _0x3e63b1,
                _0x4351e2,
                _0x2c2f6b,
                _0x295e84,
                _0x12213b = "";
              for (_0x3e63b1 = _0x4351e2 = 0, _0x2c2f6b = (_0x3d51eb = (_0x3d51eb + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, _0x295e84 = 0; _0x295e84 < _0x2c2f6b; _0x295e84++) {
                var _0x1811cf = _0x3d51eb.charCodeAt(_0x295e84),
                  _0x1d0125 = null;
                _0x1811cf < 128 ? _0x4351e2++ : _0x1d0125 = _0x1811cf > 127 && _0x1811cf < 2048 ? String.fromCharCode(_0x1811cf >> 6 | 192, 63 & _0x1811cf | 128) : String.fromCharCode(_0x1811cf >> 12 | 224, _0x1811cf >> 6 & 63 | 128, 63 & _0x1811cf | 128);
                null !== _0x1d0125 && (_0x4351e2 > _0x3e63b1 && (_0x12213b += _0x3d51eb.substring(_0x3e63b1, _0x4351e2)), _0x12213b += _0x1d0125, _0x3e63b1 = _0x4351e2 = _0x295e84 + 1);
              }
              _0x4351e2 > _0x3e63b1 && (_0x12213b += _0x3d51eb.substring(_0x3e63b1, _0x3d51eb.length));
              return _0x12213b;
            };
            _0x1d105e.base64Encode = function (_0x2b8474) {
              var _0xadec3d,
                _0x331bf3,
                _0x4ad33f,
                _0x2ca07e,
                _0x24affe,
                _0x1c213f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                _0x27b693 = 0,
                _0x3844a8 = 0,
                _0x3c7e08 = "",
                _0x25bb90 = [];
              if (!_0x2b8474) {
                return _0x2b8474;
              }
              _0x2b8474 = _0x1d105e.utf8Encode(_0x2b8474);
              do {
                _0xadec3d = (_0x24affe = _0x2b8474.charCodeAt(_0x27b693++) << 16 | _0x2b8474.charCodeAt(_0x27b693++) << 8 | _0x2b8474.charCodeAt(_0x27b693++)) >> 18 & 63;
                _0x331bf3 = _0x24affe >> 12 & 63;
                _0x4ad33f = _0x24affe >> 6 & 63;
                _0x2ca07e = 63 & _0x24affe;
                _0x25bb90[_0x3844a8++] = _0x1c213f.charAt(_0xadec3d) + _0x1c213f.charAt(_0x331bf3) + _0x1c213f.charAt(_0x4ad33f) + _0x1c213f.charAt(_0x2ca07e);
              } while (_0x27b693 < _0x2b8474.length);
              switch (_0x3c7e08 = _0x25bb90.join(""), _0x2b8474.length % 3) {
                case 1:
                  _0x3c7e08 = _0x3c7e08.slice(0, -2) + "==";
                  break;
                case 2:
                  _0x3c7e08 = _0x3c7e08.slice(0, -1) + "=";
              }
              return _0x3c7e08;
            };
            _0x1069bd._ = _0x1d105e;
            _0x1069bd.store = {
              getUUID: function () {
                return Date.now() + "-" + Math.floor(10000000 * Math.random()) + "-" + Math.random().toString(16).replace(".", "") + "-" + String(31242 * Math.random()).replace(".", "").slice(0, 8);
              },
              getStorage: function (_0x3b58b8) {
                _0x337456.default.get({
                  key: "sensorsdata2015_quickapp",
                  success: function (_0x51dd1f) {
                    _0x3b58b8(_0x51dd1f);
                  },
                  fail: function (_0x404275, _0x83fd87) {
                    _0x2ddec9.info("获取storage失败-会导致解析distinct_id异常", _0x404275, _0x83fd87);
                  }
                });
              },
              _state: {},
              mem: {
                mdata: [],
                getLength: function () {
                  return this.mdata.length;
                },
                add: function (_0x4ea4d3) {
                  this.mdata.push(_0x4ea4d3);
                },
                clear: function (_0x46be79) {
                  this.mdata.splice(0, _0x46be79);
                }
              },
              toState: function (_0x367723) {
                var _0x4269ba = null;
                _0x1d105e.isJSONString(_0x367723) ? (_0x4269ba = JSON.parse(_0x367723)).distinct_id ? this._state = _0x4269ba : this.set("distinct_id", this.getUUID()) : _0x1d105e.isObject(_0x367723) && (_0x4269ba = _0x367723).distinct_id ? this._state = _0x4269ba : this.set("distinct_id", this.getUUID());
              },
              getFirstId: function () {
                return this._state.first_id;
              },
              getDistinctId: function () {
                return this._state.distinct_id;
              },
              getProps: function () {
                return this._state.props || {};
              },
              getUnionId: function () {
                var _0x42aefc = {
                    login_id: _0x5f21a7,
                    anonymous_id: _0x14e257
                  },
                  _0x14e257 = this._state.first_id,
                  _0x5f21a7 = this._state.distinct_id;
                _0x14e257 && _0x5f21a7 ? (_0x42aefc.login_id = _0x5f21a7, _0x42aefc.anonymous_id = _0x14e257) : _0x42aefc.anonymous_id = _0x5f21a7;
                return _0x42aefc;
              },
              setProps: function (_0x5dd3b4, _0x52517b) {
                var _0x46939a = this._state.props || {};
                _0x52517b ? this.set("props", _0x5dd3b4) : (_0x1d105e.extend(_0x46939a, _0x5dd3b4), this.set("props", _0x46939a));
              },
              set: function (_0x4181db, _0x2265cc) {
                var _0x58b893 = {};
                for (var _0x57752f in "string" == typeof _0x4181db ? _0x58b893[_0x4181db] = _0x2265cc : "object" == typeof _0x4181db && (_0x58b893 = _0x4181db), this._state = this._state || {}, _0x58b893) {
                  this._state[_0x57752f] = _0x58b893[_0x57752f];
                  "distinct_id" === _0x57752f && _0x1069bd.events.emit("changeDistinctId");
                }
                this.save();
              },
              change: function (_0x49a745, _0x146ac5) {
                this._state[_0x49a745] = _0x146ac5;
              },
              save: function () {
                _0x337456.default.set({
                  key: "sensorsdata2015_quickapp",
                  value: JSON.stringify(this._state),
                  fail: function (_0x5a7a73, _0x4ebca2) {
                    _0x2ddec9.info("存储storage数据失败", _0x5a7a73, _0x4ebca2);
                  }
                });
              },
              init: function () {
                var _0x2ffca1 = this;
                this.getStorage(function (_0x34220b) {
                  var _0xb10b50 = _0x34220b;
                  if (_0xb10b50) {
                    _0x2ffca1.toState(_0xb10b50);
                  } else {
                    _0x5c9f9f = !0;
                    var _0x33e1bc = new Date(),
                      _0xb5b37b = _0x33e1bc.getTime();
                    _0x33e1bc.setHours(23);
                    _0x33e1bc.setMinutes(59);
                    _0x33e1bc.setSeconds(60);
                    _0x2ffca1.set({
                      distinct_id: _0x2ffca1.getUUID(),
                      first_visit_time: _0xb5b37b,
                      first_visit_day_time: _0x33e1bc.getTime()
                    });
                  }
                  _0x1069bd.initialState.storeIsComplete = !0;
                  _0x1069bd.events.emit("initStore");
                  _0x1069bd.initialState.checkIsComplete();
                });
              }
            };
            _0x1d105e.formatPath = function (_0x4e35f8) {
              return "string" == typeof _0x4e35f8 ? _0x4e35f8.replace(/^\//, "") : "取值异常";
            };
            _0x1d105e.getCurrentPath = function () {
              var _0x576fbf = _0x1c7fab.default.getState();
              return "object" == typeof _0x576fbf ? _0x576fbf.path : "";
            };
            _0x1d105e.getCurrentTitle = function () {
              var _0x14c218 = _0x1c7fab.default.getState();
              return "object" == typeof _0x14c218 ? _0x14c218.name : "";
            };
            _0x1d105e.getCurrentSource = function () {
              var _0x450823 = _0x596e33.default.getInfo(),
                _0x2d81c5 = {
                  $source_package_name: "",
                  $scene: ""
                };
              "object" == typeof _0x450823 && "object" == typeof _0x450823.source && (_0x2d81c5.$source_package_name = _0x450823.source.packageName || "", _0x2d81c5.$scene = _0x450823.source.type || "");
              return _0x2d81c5;
            };
            _0x1d105e.getIsFirstDay = function () {
              return "object" == typeof _0x1069bd.store._state && "number" == typeof _0x1069bd.store._state.first_visit_day_time && _0x1069bd.store._state.first_visit_day_time > new Date().getTime();
            };
            _0x1d105e.eventEmitter = function () {
              this.sub = [];
            };
            _0x1d105e.eventEmitter.prototype = {
              add: function (_0x2b890f) {
                this.sub.push(_0x2b890f);
              },
              emit: function (_0x1c9d8c, _0x5c3907) {
                this.sub.forEach(function (_0x1de23b) {
                  _0x1de23b.on(_0x1c9d8c, _0x5c3907);
                });
              }
            };
            _0x1d105e.eventSub = function (_0x55f211) {
              _0x1069bd.events.add(this);
              this._events = [];
              this.handle = _0x55f211;
              this.ready = !1;
            };
            _0x1d105e.eventSub.prototype = {
              on: function (_0x435186, _0x8f36d0) {
                if (this.ready) {
                  if (_0x1d105e.isFunction(this.handle)) {
                    try {
                      this.handle(_0x435186, _0x8f36d0);
                    } catch (_0x130c8c) {
                      _0x2ddec9.info(_0x130c8c);
                    }
                  }
                } else {
                  this._events.push({
                    event: _0x435186,
                    data: _0x8f36d0
                  });
                }
              },
              isReady: function () {
                var _0x47c27d = this;
                _0x47c27d.ready = !0;
                _0x47c27d._events.forEach(function (_0x5793af) {
                  if (_0x1d105e.isFunction(_0x47c27d.handle)) {
                    try {
                      _0x47c27d.handle(_0x5793af.event, _0x5793af.data);
                    } catch (_0x27ecc8) {
                      _0x2ddec9.info(_0x27ecc8);
                    }
                  }
                });
              }
            };
            _0x1d105e.info = {
              currentProps: {},
              properties: {
                $lib: _0x3380f5,
                $lib_version: String(_0x190889)
              },
              getSystem: function () {
                var _0x12c3e6 = this.properties;
                _0x387366.default.getType({
                  success: function (_0x4f5cbc) {
                    _0x12c3e6.$network_type = _0x4f5cbc.type;
                  },
                  complete: function () {
                    _0x233e1d.default.getInfo({
                      success: function (_0x5864cd) {
                        _0x12c3e6.$screen_width = Number(_0x5864cd.screenWidth);
                        _0x12c3e6.$screen_height = Number(_0x5864cd.screenHeight);
                        _0x12c3e6.$os = _0x5864cd.osType;
                        _0x12c3e6.$model = _0x5864cd.model;
                        _0x12c3e6.$os_version = _0x5864cd.osVersionName;
                        _0x12c3e6.$brand = _0x5864cd.brand;
                        _0x12c3e6.$manufacturer = _0x5864cd.manufacturer;
                      },
                      complete: function () {
                        var _0x3a1f81 = new Date().getTimezoneOffset(),
                          _0x2a93cc = _0x596e33.default.getInfo().packageName;
                        _0x2a93cc && (_0x12c3e6.$app_id = _0x2a93cc);
                        _0x1d105e.isNumber(_0x3a1f81) && (_0x12c3e6.$timezone_offset = _0x3a1f81);
                        _0x1069bd.initialState.systemIsComplete = !0;
                        _0x1069bd.initialState.checkIsComplete();
                      }
                    });
                  }
                });
              }
            };
            _0x1069bd.eventSub = _0x1d105e.eventSub;
            _0x1069bd.events = new _0x1d105e.eventEmitter();
            _0x1069bd.initialState = {
              queue: [],
              isComplete: !1,
              systemIsComplete: !1,
              storeIsComplete: !1,
              checkIsComplete: function () {
                this.systemIsComplete && this.storeIsComplete && (this.isComplete = !0, this.queue.length > 0 && (_0x1d105e.each(this.queue, function (_0x5f481f) {
                  _0x1069bd[_0x5f481f[0]].apply(_0x1069bd, _0x10fdb6.call(_0x5f481f[1]));
                }), _0x1069bd.queue = []));
              }
            };
            _0x1069bd.prepareData = function (_0x2ae0ad, _0x3d1635) {
              var _0x24775e = {
                distinct_id: this.store.getDistinctId(),
                lib: {
                  $lib: _0x3380f5,
                  $lib_method: "code",
                  $lib_version: String(_0x190889)
                },
                properties: {}
              };
              _0x1d105e.extend(_0x24775e, _0x2ae0ad);
              _0x1d105e.isObject(_0x2ae0ad.properties) && !_0x1d105e.isEmptyObject(_0x2ae0ad.properties) && _0x1d105e.extend(_0x24775e.properties, _0x2ae0ad.properties);
              _0x2ae0ad.type && "profile" === _0x2ae0ad.type.slice(0, 7) || (_0x24775e._track_id = Number(String(Math.random()).slice(2, 5) + String(Math.random()).slice(2, 4) + String(Date.now()).slice(-4)), _0x24775e.properties = _0x1d105e.extend({}, _0x1d105e.info.properties, _0x1069bd.store.getProps(), _0x1d105e.info.currentProps, _0x24775e.properties), "$AppStart" === _0x24775e.event && (_0x24775e.properties.$is_first_time = !!_0x5c9f9f), _0x24775e.properties.$is_first_day = _0x1d105e.getIsFirstDay());
              _0x24775e.properties.$time && _0x1d105e.isDate(_0x24775e.properties.$time) ? (_0x24775e.time = 1 * _0x24775e.properties.$time, delete _0x24775e.properties.$time) : _0x24775e.time = 1 * new Date();
              _0x1d105e.searchObjDate(_0x24775e);
              _0x1d105e.searchObjString(_0x24775e);
              _0x1069bd.para.batch_send ? _0x1069bd.sendStrategy.send(_0x24775e) : _0x1069bd.send(_0x24775e, _0x3d1635);
            };
            _0x1069bd.track = function (_0x69e1a4, _0x2137ae, _0x5efe33) {
              this.prepareData({
                type: "track",
                event: _0x69e1a4,
                properties: _0x2137ae
              }, _0x5efe33);
            };
            _0x1069bd.identify = function (_0x3a1196, _0x24261a) {
              if ("number" == typeof _0x3a1196) {
                _0x3a1196 = String(_0x3a1196);
              } else {
                if ("string" != typeof _0x3a1196) {
                  return !1;
                }
              }
              var _0x561697 = _0x1069bd.store.getFirstId();
              !0 === _0x24261a ? _0x561697 ? _0x1069bd.store.set("first_id", _0x3a1196) : _0x1069bd.store.set("distinct_id", _0x3a1196) : _0x561697 ? _0x1069bd.store.change("first_id", _0x3a1196) : _0x1069bd.store.change("distinct_id", _0x3a1196);
            };
            _0x1069bd.trackSignup = function (_0x393788, _0x3eb47d, _0x38d88b, _0x11dd48) {
              _0x1069bd.prepareData({
                original_id: _0x1069bd.store.getFirstId() || _0x1069bd.store.getDistinctId(),
                distinct_id: _0x393788,
                type: "track_signup",
                event: _0x3eb47d,
                properties: _0x38d88b
              }, _0x11dd48);
              _0x1069bd.store.set("distinct_id", _0x393788);
            };
            _0x1069bd.registerApp = function (_0x1963a8) {
              _0x1d105e.isObject(_0x1963a8) && !_0x1d105e.isEmptyObject(_0x1963a8) && (_0x1d105e.info.currentProps = _0x1d105e.extend(_0x1d105e.info.currentProps, _0x1963a8));
            };
            _0x1069bd.clearAllRegister = function () {
              _0x1069bd.store.setProps({}, !0);
            };
            _0x1069bd.login = function (_0x46eb45) {
              var _0x3a1c4c = _0x1069bd.store.getFirstId(),
                _0x4deee9 = _0x1069bd.store.getDistinctId();
              _0x46eb45 !== _0x4deee9 && (_0x3a1c4c || _0x1069bd.store.set("first_id", _0x4deee9), _0x1069bd.trackSignup(_0x46eb45, "$SignUp"));
            };
            _0x1069bd.getAnonymousID = function () {
              if (!_0x1d105e.isEmptyObject(_0x1069bd.store._state)) {
                return _0x1069bd.store._state.first_id || _0x1069bd.store._state.distinct_id;
              }
              _0x2ddec9.info("请先初始化SDK");
            };
            _0x1069bd.logout = function (_0x36e02a) {
              var _0x201a26 = _0x1069bd.store.getFirstId();
              _0x201a26 ? (_0x1069bd.store.set("first_id", ""), !0 === _0x36e02a ? _0x1069bd.store.set("distinct_id", _0x1069bd.store.getUUID()) : _0x1069bd.store.set("distinct_id", _0x201a26)) : _0x2ddec9.info("没有first_id，logout失败");
            };
            _0x1069bd.setProfile = function (_0x15030f, _0x25a75a) {
              _0x1069bd.prepareData({
                type: "profile_set",
                properties: _0x15030f
              }, _0x25a75a);
            };
            _0x1069bd.setOnceProfile = function (_0x5c30f0, _0xc11592) {
              _0x1069bd.prepareData({
                type: "profile_set_once",
                properties: _0x5c30f0
              }, _0xc11592);
            };
            _0x1069bd.init = function (_0x506f27) {
              this._.info.getSystem();
              this.store.init();
              "object" == typeof _0x506f27 && (_0x506f27[_0x1069bd.para.name] = _0x1069bd);
              _0x1069bd.para.batch_send && _0x1069bd.sendStrategy.init();
            };
            _0x1069bd.send = function (_0x12ed16) {
              var _0x2524b7;
              _0x12ed16._nocache = (String(Math.random()) + String(Math.random()) + String(Math.random())).slice(2, 15);
              _0x2ddec9.info(_0x12ed16);
              _0x12ed16._flush_time = Date.now();
              _0x12ed16 = JSON.stringify(_0x12ed16);
              _0x2524b7 = -1 !== _0x1069bd.para.server_url.indexOf("?") ? _0x1069bd.para.server_url + "&data=" + encodeURIComponent(_0x1d105e.base64Encode(_0x12ed16)) : _0x1069bd.para.server_url + "?data=" + encodeURIComponent(_0x1d105e.base64Encode(_0x12ed16));
              _0x557b5e.default.fetch({
                data: "String",
                responseType: "text",
                method: "GET",
                url: _0x2524b7
              });
            };
            _0x1069bd.usePlugin = function (_0x47141c, _0x1922ed) {
              "function" == typeof _0x47141c.init && _0x47141c.init(_0x1069bd, _0x1922ed);
            };
            _0x1069bd.use = function (_0x264556, _0xd53646) {
              "function" == typeof _0x264556.init && _0x264556.init(_0x1069bd, _0xd53646);
            };
            _0x1069bd.sendStrategy = {
              dataHasSend: !0,
              syncStorage: !1,
              is_first_batch_write: !0,
              failTime: 0,
              init: function () {
                _0x337456.default.get({
                  key: "sensors_prepare_data",
                  complete: function (_0x345687) {
                    var _0x346c8f = _0x345687.data && _0x1d105e.isArray(_0x345687.data) ? _0x345687.data : [];
                    _0x1069bd.store.mem.mdata = _0x346c8f.concat(_0x1069bd.store.mem.mdata);
                    _0x1069bd.sendStrategy.syncStorage = !0;
                  }
                });
                this.batchInterval();
              },
              onAppHide: function () {
                _0x1069bd.para.batch_send && this.batchSend();
              },
              send: function (_0x17026a) {
                if (!_0x1069bd.para.server_url) {
                  return !1;
                }
                this.dataHasChange = !0;
                _0x1069bd.store.mem.getLength() >= 500 && (_0x2ddec9.info("数据量存储过大，有异常"), _0x1069bd.store.mem.mdata.shift());
                _0x2ddec9.info(_0x17026a);
                _0x1069bd.store.mem.add(_0x17026a);
                _0x1069bd.store.mem.getLength() >= _0x1069bd.para.batch_send.max_length && this.batchSend();
              },
              batchWrite: function () {
                var _0xc47ff4 = this;
                this.dataHasChange && (this.is_first_batch_write && (this.is_first_batch_write = !1, setTimeout(function () {
                  _0xc47ff4.batchSend();
                }, 1000)), this.syncStorage && _0x337456.default.set({
                  key: "sensors_prepare_data",
                  value: _0x1069bd.store.mem.mdata,
                  success: function (_0x382bfc) {
                    _0xc47ff4.dataHasChange = !1;
                  }
                }));
              },
              batchInterval() {
                var _0x483039 = this;
                !function _0x1c1829() {
                  setTimeout(function () {
                    _0x483039.batchSend();
                    _0x1c1829();
                  }, _0x1069bd.para.batch_send.send_timeout * Math.pow(2, _0x483039.failTime));
                }();
                (function _0x29437e() {
                  setTimeout(function () {
                    _0x483039.batchWrite();
                    _0x29437e();
                  }, 500);
                })();
              },
              batchSend() {
                if (this.dataHasSend) {
                  var _0x4f590a,
                    _0x130541,
                    _0x48c414 = this,
                    _0x4c393c = _0x1069bd.store.mem.mdata;
                  if (_0x4f590a = _0x4c393c.length >= 100 ? _0x4c393c.slice(0, 100) : _0x4c393c, _0x130541 = _0x4f590a.length, _0x1d105e.isArray(_0x4f590a) && _0x4f590a.length > 0) {
                    this.dataHasSend = !1;
                    var _0x224e1e = Date.now();
                    _0x4f590a.forEach(function (_0x16610f) {
                      _0x16610f._flush_time = _0x224e1e;
                    });
                    _0x4f590a = JSON.stringify(_0x4f590a);
                    _0x4f590a = "data_list=" + encodeURIComponent(_0x1d105e.base64Encode(_0x4f590a));
                    _0x557b5e.default.fetch({
                      url: _0x1069bd.para.server_url,
                      method: "POST",
                      data: _0x4f590a,
                      responseType: "text",
                      success: function (_0x1cced7) {
                        _0x48c414.batchRemove(_0x130541);
                      },
                      fail: function (_0x3a0229) {
                        _0x48c414.sendFail();
                      }
                    });
                  }
                }
              },
              batchRemove(_0x2a93df) {
                this.dataHasSend = !0;
                this.dataHasChange = !0;
                _0x1069bd.store.mem.clear(_0x2a93df);
                this.batchWrite();
                this.failTime = 0;
              },
              sendFail() {
                this.dataHasSend = !0;
                this.failTime++;
              }
            };
            _0x1069bd.appLaunch = function (_0x53d688) {
              _0x53d688 && _0x1d105e.isObject(_0x53d688) || (_0x53d688 = {});
              var _0x1202e9 = {};
              _0x1d105e.extend(_0x1202e9, _0x53d688);
              _0x1d105e.extend(_0x1202e9, _0x1d105e.getCurrentSource());
              _0x1069bd.track("$AppStart", _0x1202e9);
            };
            _0x1069bd.pageShow = function (_0x4a1cc4) {
              _0x4a1cc4 && _0x1d105e.isObject(_0x4a1cc4) || (_0x4a1cc4 = {});
              var _0x1ee0dd = {
                $url_path: _0x1d105e.getCurrentPath(),
                $title: _0x1d105e.getCurrentTitle()
              };
              _0x1d105e.extend(_0x1ee0dd, _0x1d105e.getCurrentSource());
              _0x1d105e.extend(_0x1ee0dd, _0x4a1cc4);
              _0x1069bd.track("$AppViewScreen", _0x1ee0dd);
            };
            _0x1069bd.appHide = function (_0x3dd2fc) {
              _0x3dd2fc && _0x1d105e.isObject(_0x3dd2fc) || (_0x3dd2fc = {});
              var _0x521903 = {
                $url_path: _0x1d105e.getCurrentPath(),
                $title: _0x1d105e.getCurrentTitle()
              };
              _0x1d105e.extend(_0x521903, _0x3dd2fc);
              _0x1069bd.track("$AppEnd", _0x521903);
            };
            _0x1d105e.each(["setProfile", "pageShow", "appHide", "login", "logout", "identify", "appLaunch", "setOnceProfile", "track", "clearAllRegister", "quick", "incrementProfile", "appendProfile"], function (_0x37d78f) {
              var _0x105daf = _0x1069bd[_0x37d78f];
              _0x1069bd[_0x37d78f] && (_0x1069bd[_0x37d78f] = function () {
                _0x1069bd.initialState.isComplete ? _0x105daf.apply(_0x1069bd, arguments) : _0x1069bd.initialState.queue.push([_0x37d78f, arguments]);
              });
            });
            _0x2d0ae.default = _0x1069bd;
          },
          89957: (_0x5b2d08, _0x26953c, _0x596ade) => {
            'use strict';

            Object.defineProperty(_0x26953c, "__esModule", {
              value: !0
            });
            _0x26953c.default = void 0;
            var _0x105cd4 = {
              formatAdData(_0x2ffd27) {
                let _0x3e288d = this.$app.$def.data.ad.adCopywriter,
                  _0x497713 = "点击查看",
                  _0x2b6ff0 = 0;
                0 !== _0x3e288d.length && (_0x2b6ff0 = _0x596ade.g.$utils.getRandomNumber(0, _0x3e288d.length), _0x497713 = _0x3e288d[_0x2b6ff0]);
                _0x2ffd27.adId = _0x2ffd27.adId || "1";
                _0x2ffd27.title = _0x2ffd27.title || "免费又好看";
                _0x2ffd27.desc = _0x2ffd27.desc || "免费又好看";
                _0x2ffd27.clickBtnTxt = _0x2ffd27.clickBtnTxt || _0x497713;
                _0x2ffd27.imgUrlList = _0x2ffd27.imgUrlList && _0x2ffd27.imgUrlList[0] || _0x2ffd27.icon ? _0x2ffd27.imgUrlList || [] : ["http://images-pro.cread.com/images/bookstore-lightapp/20220620182819133.png"];
                return _0x2ffd27;
              },
              formatAdDataImage(_0x14e9ca) {
                let _0x18f0eb = this.$app.$def.data.ad.adCopywriter,
                  _0x45bb8b = "点击查看",
                  _0x19925d = 0;
                0 !== _0x18f0eb.length && (_0x19925d = _0x596ade.g.$utils.getRandomNumber(0, _0x18f0eb.length), _0x45bb8b = _0x18f0eb[_0x19925d]);
                _0x14e9ca.adId = _0x14e9ca.adId || "1";
                _0x14e9ca.title = _0x14e9ca.title || "免费又好看";
                _0x14e9ca.desc = _0x14e9ca.desc || "免费又好看";
                _0x14e9ca.clickBtnTxt = _0x14e9ca.clickBtnTxt || _0x45bb8b;
                _0x14e9ca.imgUrlList = _0x14e9ca.imgUrlList && _0x14e9ca.imgUrlList[0] && _0x14e9ca.imgUrlList[0].indexOf("mp4") < 0 ? _0x14e9ca.imgUrlList && _0x14e9ca.imgUrlList[0] : "http://images-pro.cread.com/images/bookstore-lightapp/20220620182819133.png";
                return _0x14e9ca;
              },
              filterOPPOV1(_0x275ae4) {
                try {
                  return -1 !== "256486,282584,284394,297742,297749,297752,297757,306991,334395".indexOf(_0x275ae4);
                } catch (_0x51898d) {
                  return !1;
                }
              },
              isDownloadAdFn: (_0x5694c2, _0x532aa2) => "xiaomi" !== _0x5694c2.$app.$def.data.ad.adProvider && [101, 102, 103, 104, 106, 107, 108, 110, 0].includes(_0x532aa2),
              coordinateAdClickMaterial(_0x1b3b66, _0x386a74, _0x26875f) {
                if (!_0x596ade.g.$utils.getAdConfig(_0x1b3b66, "435", "Boolean")) {
                  return void _0x386a74.reportAdClick({
                    adId: _0x26875f
                  });
                }
                let _0x8a80e6 = _0x1b3b66.$app.$def.data.deviceInfo,
                  _0x1d9dec = _0x8a80e6.screenWidth - 40,
                  _0x50e6cd = this.generateWeightedRandomClick(_0x1d9dec, 550, 0.5, 0.4),
                  _0x191cbb = _0x50e6cd.x,
                  _0x48fa83 = _0x50e6cd.y,
                  _0x12278d = _0x191cbb + _0x596ade.g.$utils.getRandomNumber(-10, 10),
                  _0x2c07ec = _0x48fa83 + _0x596ade.g.$utils.getRandomNumber(-10, 10);
                _0x386a74.reportAdClick({
                  adId: _0x26875f,
                  clickInfo: {
                    clickX: _0x191cbb,
                    clickY: _0x48fa83,
                    upX: _0x12278d,
                    upY: _0x2c07ec,
                    sld: 0,
                    density: _0x8a80e6.screenDensity,
                    creativeSize: {
                      width: _0x1d9dec,
                      height: 550
                    }
                  }
                });
              },
              generateWeightedRandomClick(_0x22724c, _0x432ef2, _0x9599f2, _0x26696e) {
                let _0x2ac144,
                  _0x29b110,
                  _0x1b7817 = Math.floor(_0x22724c / 2),
                  _0x2782f8 = Math.floor(_0x432ef2 / 4),
                  _0x558c36 = Math.floor(3 * _0x432ef2 / 4);
                _0x2ac144 = Math.random() < _0x9599f2 ? Math.floor(Math.random() * (_0x22724c - _0x1b7817)) + _0x1b7817 : Math.floor(Math.random() * _0x22724c);
                _0x29b110 = Math.random() < _0x26696e ? Math.floor(Math.random() * (_0x558c36 - _0x2782f8)) + _0x2782f8 : Math.floor(Math.random() * _0x432ef2);
                return {
                  x: _0x2ac144,
                  y: _0x29b110
                };
              },
              coordinateAdClick(_0x1a24c2, {
                adX: _0x5c32bf,
                adY: _0x2b1ffc,
                height: _0x2ebf8a,
                width: _0x268d3c,
                X: _0x4e80f7,
                Y: _0x45fcf3
              }) {
                if ("xiaomi" === _0x1a24c2.reportInfo.source) {
                  _0x4e80f7 && _0x45fcf3 ? _0x4e80f7 > _0x268d3c ? _0x4e80f7 = Math.floor(Math.random() * (_0x268d3c - 1) + 1) : _0x45fcf3 > _0x2ebf8a && (_0x45fcf3 = Math.floor(Math.random() * (_0x2ebf8a - 1) + 1)) : (_0x4e80f7 = Math.floor(Math.random() * (_0x268d3c - 1) + 1), _0x45fcf3 = Math.floor(Math.random() * (_0x2ebf8a - 1) + 1));
                  _0x1a24c2 && _0x1a24c2.nativeAd && _0x1a24c2.nativeAd.reportAdClick({
                    adId: _0x1a24c2.adData.adId,
                    adX: _0x5c32bf,
                    adY: _0x2b1ffc,
                    height: _0x2ebf8a,
                    width: _0x268d3c,
                    downX: _0x4e80f7,
                    downY: _0x45fcf3,
                    upX: _0x4e80f7,
                    upY: _0x45fcf3
                  });
                } else {
                  try {
                    this.coordinateAdClickMaterial(_0x1a24c2, _0x1a24c2.nativeAd, _0x1a24c2.adData.adId);
                  } catch (_0xca44e3) {
                    _0x596ade.g.sensors.track("quickAppError", {
                      details: "原生广告点击报错:" + JSON.stringify(_0xca44e3)
                    });
                  }
                }
              }
            };
            _0x26953c.default = _0x105cd4;
          },
          64919: (_0x151bbb, _0x59923c) => {
            'use strict';

            Object.defineProperty(_0x59923c, "__esModule", {
              value: !0
            });
            _0x59923c.default = void 0;
            _0x59923c.default = {
              ObjectToArray: function (_0x1c8c8a, _0x5d0a27) {
                _0x5d0a27 || (_0x5d0a27 = "addToBookshelfTime");
                let _0x102964 = [];
                for (let _0xa2141 in _0x1c8c8a) {
                  _0x1c8c8a[_0xa2141].isDelete = !1;
                  _0x102964.push(_0x1c8c8a[_0xa2141]);
                }
                var _0x318ecc;
                return _0x102964.sort((_0x318ecc = _0x5d0a27, function (_0x5ebf0e, _0x243615) {
                  let _0x5cacc4 = _0x5ebf0e[_0x318ecc];
                  return _0x243615[_0x318ecc] - _0x5cacc4;
                }));
              }
            };
          },
          14366: (_0x5bf017, _0x11a81d) => {
            'use strict';

            Object.defineProperty(_0x11a81d, "__esModule", {
              value: !0
            });
            _0x11a81d.default = void 0;
            var _0x223065 = {
              unique(_0x40a995, _0x1ca61b) {
                let _0x2dacd8 = new Map(),
                  _0x2c3a23 = new Array();
                for (let _0x4adfb9 = 0; _0x4adfb9 < _0x40a995.length; _0x4adfb9++) {
                  _0x2dacd8.has(_0x40a995[_0x4adfb9][_0x1ca61b]) ? _0x2dacd8.set(_0x40a995[_0x4adfb9], !0) : (_0x2dacd8.set(_0x40a995[_0x4adfb9][_0x1ca61b], !1), _0x2c3a23.push(_0x40a995[_0x4adfb9]));
                }
                return _0x2c3a23;
              }
            };
            _0x11a81d.default = _0x223065;
          },
          71397: (_0x43ac4e, _0x522e36) => {
            'use strict';

            Object.defineProperty(_0x522e36, "__esModule", {
              value: !0
            });
            _0x522e36.default = void 0;
            _0x522e36.default = {
              chaptersContent: function (_0x47e6f1) {
                if (!_0x47e6f1) {
                  return;
                }
                let _0xd00414 = _0x47e6f1.split("\n"),
                  _0x1c92d4 = [];
                for (let _0x3b86af = 0; _0x3b86af < _0xd00414.length; _0x3b86af++) {
                  if (_0xd00414[_0x3b86af].length > 0) {
                    let _0x4724fd = {
                      type: "txt",
                      txt: _0xd00414[_0x3b86af].replace(/(^\s*)|(\s*$)/g, "")
                    };
                    _0x1c92d4.push(_0x4724fd);
                  }
                }
                _0x1c92d4.length > 20 ? (_0x1c92d4.splice(_0x1c92d4.length / 2, 0, {
                  type: "ad_center",
                  txt: ""
                }), _0x1c92d4.push({
                  type: "ad_end",
                  txt: ""
                })) : _0x1c92d4.push({
                  type: "ad_end",
                  txt: ""
                });
                return _0x1c92d4;
              }
            };
          },
          94074: (_0x2bcb44, _0x10ff4a, _0x4c962f) => {
            'use strict';

            Object.defineProperty(_0x10ff4a, "__esModule", {
              value: !0
            });
            _0x10ff4a.default = void 0;
            Date.prototype.Format = function (_0x3bf5fe = "yyyy-MM-dd hh:mm:ss") {
              let _0x522001 = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                S: this.getMilliseconds()
              };
              /(y+)/.test(_0x3bf5fe) && (_0x3bf5fe = _0x3bf5fe.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
              for (let _0x4e04ee in _0x522001) new RegExp("(" + _0x4e04ee + ")").test(_0x3bf5fe) && (_0x3bf5fe = _0x3bf5fe.replace(RegExp.$1, 1 === RegExp.$1.length ? _0x522001[_0x4e04ee] : ("00" + _0x522001[_0x4e04ee]).substr(("" + _0x522001[_0x4e04ee]).length)));
              return _0x3bf5fe;
            };
            var _0x55aa1a = {
              setCurrentTime(_0x5d5383 = "") {
                _0x4c962f.g.currentTime = _0x5d5383;
              },
              getCurrentTime: () => _0x4c962f.g.currentTime || "",
              dateOffset(_0x582508, _0x37ad82, _0xceb3ab) {
                if (!arguments.length) {
                  return "";
                }
                let _0x5a2d66,
                  _0x6607fc = (null != _0xceb3ab ? _0xceb3ab : new Date().getTime()) - new Date(_0x37ad82).getTime(),
                  _0xa0cd19 = 3600000,
                  _0x4df791 = 24 * _0xa0cd19,
                  _0x5c66ed = [31104000000, 2592000000, 604800000, _0x4df791, _0xa0cd19, 60000, 1000, 1];
                switch (_0x582508) {
                  case "年":
                    _0x5a2d66 = 0;
                    break;
                  case "月":
                    _0x5a2d66 = 1;
                    break;
                  case "周":
                    _0x5a2d66 = 2;
                    break;
                  case "天":
                    _0x5a2d66 = 3;
                    break;
                  case "小时":
                    _0x5a2d66 = 4;
                    break;
                  case "分":
                    _0x5a2d66 = 5;
                    break;
                  case "秒":
                  default:
                    _0x5a2d66 = 6;
                    break;
                  case "毫秒":
                    _0x5a2d66 = 7;
                }
                return {
                  value: _0x6607fc / _0x5c66ed[_0x5a2d66],
                  unit: ["年", "月", "周", "天", "小时", "分", "秒", "毫秒"][_0x5a2d66]
                };
              }
            };
            _0x10ff4a.default = _0x55aa1a;
          },
          91491: (_0x3951f2, _0x513f5a, _0x500883) => {
            'use strict';

            Object.defineProperty(_0x513f5a, "__esModule", {
              value: !0
            });
            _0x513f5a.default = void 0;
            var _0x308a9b,
              _0x5aa2c0 = (_0x308a9b = _0x500883(72025)) && _0x308a9b.__esModule ? _0x308a9b : {
                default: _0x308a9b
              },
              _0x2d4ef3 = {
                decryptByDES: function (_0x925853, _0x27c983) {
                  let _0x48480e = _0x5aa2c0.default.enc.Utf8.parse(_0x27c983);
                  return _0x5aa2c0.default.DES.decrypt({
                    ciphertext: _0x5aa2c0.default.enc.Base64.parse(_0x925853)
                  }, _0x48480e, {
                    mode: _0x5aa2c0.default.mode.ECB,
                    padding: _0x5aa2c0.default.pad.Pkcs7
                  }).toString(_0x5aa2c0.default.enc.Utf8);
                }
              };
            _0x513f5a.default = _0x2d4ef3;
          },
          3409: (_0x5a11c3, _0x5177ec) => {
            'use strict';

            Object.defineProperty(_0x5177ec, "__esModule", {
              value: !0
            });
            _0x5177ec.default = void 0;
            const _0x51095c = {
                requestBaseUrl_1: "http://192.168.9.230:8080",
                requestBaseUrl_2: "http://service-booklist-freebook-dev.cread.com",
                requestBaseUrl_4: "http://adapi.cread.com",
                requestBaseUrl_5: "http://ad.cread.com",
                requestBaseUrl_6: "https://open.cread.com",
                requestBaseUrl_7: "http://api-exchange-qa.cread.com",
                requestBaseUrl_8: "https://readbook-service-freebook.cread.com",
                requestBaseUrl_9: "https://cxb-pro.cread.com",
                requestBaseUrl_10: "http://quickapp-tool-dev.cread.com"
              },
              _0x2ff2ce = {
                requestBaseUrl_1: "http://lightapp-bookstore-dev.cread.com",
                requestBaseUrl_2: "http://service-booklist-freebook-dev.cread.com",
                requestBaseUrl_4: "http://adapi-dev.cread.com",
                requestBaseUrl_5: "http://lua-ad-dev.cread.com",
                requestBaseUrl_6: "https://open.cread.com",
                requestBaseUrl_7: "http://api-exchange-dev.cread.com",
                requestBaseUrl_8: "https://readbook-service-freebook.cread.com",
                requestBaseUrl_9: "https://cxb-pro.cread.com",
                requestBaseUrl_10: "http://quickapp-tool-dev.cread.com"
              },
              _0x413e89 = {
                requestBaseUrl_1: "http://lightapp-bookstore-qa.cread.com",
                requestBaseUrl_2: "http://service-booklist-freebook-qa.cread.com",
                requestBaseUrl_4: "http://adapi-qa.cread.com",
                requestBaseUrl_5: "http://lua-ad-qa.cread.com",
                requestBaseUrl_6: "https://open.cread.com",
                requestBaseUrl_7: "http://api-exchange-qa.cread.com",
                requestBaseUrl_8: "http://readbook-service-freebook-qa.cread.com",
                requestBaseUrl_9: "https://cxb-pro.cread.com",
                requestBaseUrl_10: "http://quickapp-tool-qa.cread.com"
              },
              _0xec752f = {
                requestBaseUrl_1: "http://lightapp-bookstore.cread.com",
                requestBaseUrl_2: "http://service-booklist-freebook.cread.com",
                requestBaseUrl_4: "http://adapi.cread.com",
                requestBaseUrl_5: "http://ad.cread.com",
                requestBaseUrl_6: "https://open.cread.com",
                requestBaseUrl_7: "http://adx.cread.com",
                requestBaseUrl_8: "https://readbook-service-freebook.cread.com",
                requestBaseUrl_9: "https://cxb-pro.cread.com",
                requestBaseUrl_10: "http://quickapp-tool.cread.com"
              };
            var _0x5aba28 = {
              chooseEnv: () => "prod",
              composeApiPath(_0x5514c1, _0x53dd59) {
                let _0x23912f, _0x4fc8be;
                switch (this.chooseEnv()) {
                  case "local":
                    _0x23912f = _0x51095c;
                    break;
                  case "dev":
                    _0x23912f = _0x2ff2ce;
                    break;
                  case "qa":
                    _0x23912f = _0x413e89;
                    break;
                  default:
                    _0x23912f = _0xec752f;
                }
                switch (_0x53dd59) {
                  case 1:
                  default:
                    _0x4fc8be = _0x23912f.requestBaseUrl_1;
                    break;
                  case 2:
                    _0x4fc8be = _0x23912f.requestBaseUrl_2;
                    break;
                  case 4:
                    _0x4fc8be = _0x23912f.requestBaseUrl_4;
                    break;
                  case 5:
                    _0x4fc8be = _0x23912f.requestBaseUrl_5;
                    break;
                  case 6:
                    _0x4fc8be = _0x23912f.requestBaseUrl_6;
                    break;
                  case 7:
                    _0x4fc8be = _0x23912f.requestBaseUrl_7;
                    break;
                  case 8:
                    _0x4fc8be = _0x23912f.requestBaseUrl_8;
                    break;
                  case 9:
                    _0x4fc8be = _0x23912f.requestBaseUrl_9;
                    break;
                  case 10:
                    _0x4fc8be = _0x23912f.requestBaseUrl_10;
                }
                return "" + _0x4fc8be + _0x5514c1;
              }
            };
            _0x5177ec.default = _0x5aba28;
          },
          170: (_0x181dcb, _0x2f9059, _0x1b9e67) => {
            'use strict';

            Object.defineProperty(_0x2f9059, "__esModule", {
              value: !0
            });
            _0x2f9059.default = void 0;
            const _0xfa35a4 = _0x1b9e67(88201),
              _0x19dcf8 = {};
            _0xfa35a4.keys().forEach(_0xb1cb1e => {
              "./index.js" !== _0xb1cb1e && Object.assign(_0x19dcf8, _0xfa35a4(_0xb1cb1e).default);
            });
            var _0xd212f6 = _0x19dcf8;
            _0x2f9059.default = _0xd212f6;
          },
          6996: (_0x1f4af9, _0x147d3b, _0x2645b8) => {
            'use strict';

            function _0x4e30dc(_0x3fb383, _0x109519) {
              var _0x34cc6a = Object.keys(_0x3fb383);
              if (Object.getOwnPropertySymbols) {
                var _0x3ac116 = Object.getOwnPropertySymbols(_0x3fb383);
                _0x109519 && (_0x3ac116 = _0x3ac116.filter(function (_0x305bff) {
                  return Object.getOwnPropertyDescriptor(_0x3fb383, _0x305bff).enumerable;
                }));
                _0x34cc6a.push.apply(_0x34cc6a, _0x3ac116);
              }
              return _0x34cc6a;
            }
            function _0x41787d(_0x47ce84) {
              for (var _0x10aa93 = 1; _0x10aa93 < arguments.length; _0x10aa93++) {
                var _0x5a76f3 = null != arguments[_0x10aa93] ? arguments[_0x10aa93] : {};
                _0x10aa93 % 2 ? _0x4e30dc(Object(_0x5a76f3), !0).forEach(function (_0x94b96e) {
                  _0x169be7(_0x47ce84, _0x94b96e, _0x5a76f3[_0x94b96e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_0x47ce84, Object.getOwnPropertyDescriptors(_0x5a76f3)) : _0x4e30dc(Object(_0x5a76f3)).forEach(function (_0x5edc57) {
                  Object.defineProperty(_0x47ce84, _0x5edc57, Object.getOwnPropertyDescriptor(_0x5a76f3, _0x5edc57));
                });
              }
              return _0x47ce84;
            }
            function _0x169be7(_0x447542, _0x38bbd8, _0x2eac4a) {
              _0x38bbd8 in _0x447542 ? Object.defineProperty(_0x447542, _0x38bbd8, {
                value: _0x2eac4a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : _0x447542[_0x38bbd8] = _0x2eac4a;
              return _0x447542;
            }
            Object.defineProperty(_0x147d3b, "__esModule", {
              value: !0
            });
            _0x147d3b.default = void 0;
            var _0x34f4e4 = {
              localBookReaderInfo: function (_0x2aa4a9 = {}) {
                _0x2645b8.g.$utils.getStorage("bookreaderinfo", _0x169eb4 => {
                  if (_0x169eb4) {
                    let _0x420ec7 = {},
                      _0x340b80 = JSON.parse(_0x169eb4);
                    for (let _0x3885f8 in _0x2aa4a9) if (_0x340b80[_0x3885f8]) {
                      for (let _0x33b413 in _0x340b80) _0x420ec7[_0x33b413] = _0x33b413 == _0x3885f8 && _0x2aa4a9[_0x33b413] || _0x340b80[_0x33b413];
                      _0x340b80 = _0x420ec7;
                    } else {
                      _0x340b80 = _0x41787d(_0x41787d({}, _0x340b80), _0x2aa4a9);
                    }
                    _0x2645b8.g.$utils.setStorage("bookreaderinfo", _0x340b80);
                  } else {
                    _0x2645b8.g.$utils.setStorage("bookreaderinfo", _0x2aa4a9);
                  }
                });
              },
              ObjectToArrayByReadTime: function (_0x137785) {
                let _0x3ac18d = [];
                for (let _0x29b808 in _0x137785) _0x3ac18d.push(_0x137785[_0x29b808]);
                return function (_0x2a4cfe, _0x2b83f8, _0x3ae288) {
                  return _0x2a4cfe.slice(0, 100);
                }(_0x3ac18d.sort(("readTime", function (_0x14a344, _0x4eff21) {
                  let _0x119e1e = _0x14a344.readTime;
                  return _0x4eff21.readTime - _0x119e1e;
                })));
              }
            };
            _0x147d3b.default = _0x34f4e4;
          },
          93182: (_0x458279, _0x42cb3e, _0x73eb7c) => {
            'use strict';

            Object.defineProperty(_0x42cb3e, "__esModule", {
              value: !0
            });
            _0x42cb3e.default = void 0;
            (Object.getPrototypeOf(_0x73eb7c.g) || _0x73eb7c.g).page = {
              lastPage: "",
              page_hide: "",
              play_ad_time_interval: 30,
              onShow(_0x2002e8) {
                this.lastPage === _0x2002e8 ? (console.warn("回到前台"), _0x2002e8.$app.$def.data.callbackTime > 0 && _0x73eb7c.g.$utils.callbackTimeFn(!0, _0x2002e8), _0x2002e8.$app.sensorsTrack("quickAppStart", {
                  start_status: "成功",
                  start_position: "后台启动"
                }), this.calInterval(_0x2002e8)) : (console.warn("新页面展示"), this.lastPage = _0x2002e8);
              },
              onHide(_0x6cca5f) {
                "System.Web" === (_0x304b62.default.getState() || {}).name || _0x6cca5f.$app.$def.data.rewardedVideo ? this.lastPage = null : this.lastPage === _0x6cca5f && (console.warn("页面隐藏"), this.save_hide_page_info(_0x6cca5f), this.deeplinkTurnUp(_0x6cca5f));
              },
              save_hide_page_info(_0x22517b) {
                this.page_hide = Object.assign({}, _0x22517b, {
                  time: Date.now()
                });
              },
              async calInterval(_0x48457c) {
                let _0x89cf50 = _0x73eb7c.g.$utils.getAdConfig(_0x48457c, "27", "Boolean");
                if (_0x48457c.$app.$def.data.GG_qieping.open = _0x89cf50, _0x89cf50) {
                  {
                    let _0x3da241 = _0x73eb7c.g.$utils.getAdConfig(_0x48457c, "28", "Number");
                    _0x48457c.$app.$def.data.GG_qieping.interval = _0x3da241;
                    this.play_ad_time_interval = _0x3da241;
                  }
                  if (!_0x48457c.$app.$def.data.readerFour) {
                    if ("vivo" === _0x48457c.$app.$def.data.ad.adProvider && (await _0x73eb7c.g.$utils.shortcutHasInstalled()) && !_0x73eb7c.g.$utils.getAdConfig(_0x48457c, "216", "Boolean")) {
                      return void console.warn("vivo插屏广告关闭");
                    }
                    if (Math.floor(Date.now() / 1000) - Math.floor(this.page_hide.time / 1000) > this.play_ad_time_interval) {
                      if (console.warn("已超过" + this.play_ad_time_interval + "s"), _0x48457c.$app.$def.data.ad.open) {
                        let _0x53e241 = _0x304b62.default.getState() || {},
                          _0x6efebc = {};
                        ["pages/Page_Home", "pages/reader"].indexOf(-1 !== _0x53e241.name) && (_0x6efebc = {
                          adInterstitial: "1"
                        });
                        _0x73eb7c.g.$utils.router.push({
                          uri: "/ad_qieping",
                          params: _0x6efebc
                        });
                      }
                    } else {
                      console.warn("未超过" + this.play_ad_time_interval + "s");
                    }
                  }
                }
              },
              deeplinkTurnUp(_0x5a5401) {
                "function" == typeof _0x5a5401.isDeeplinkTurnUp && _0x5a5401.isDeeplinkTurnUp(!0);
              }
            };
            var _0x10e6b2,
              _0x304b62 = (_0x10e6b2 = $app_require$("@app-module/system.router")) && _0x10e6b2.__esModule ? _0x10e6b2 : {
                default: _0x10e6b2
              },
              _0x4ac04e = (Object.getPrototypeOf(_0x73eb7c.g) || _0x73eb7c.g).page;
            _0x42cb3e.default = _0x4ac04e;
          },
          96497: (_0x2c56e3, _0x592bba) => {
            'use strict';

            Object.defineProperty(_0x592bba, "__esModule", {
              value: !0
            });
            _0x592bba.default = void 0;
            var _0x17cc0a = {
              promised: function (_0x35ea3d) {
                return function (_0x4f1a1b = {}) {
                  return new Promise(_0x99441e => {
                    const _0x501796 = Object.assign(_0x4f1a1b, {
                      success: _0x19a050 => {
                        _0x99441e(_0x19a050);
                      },
                      fail: _0x45dae5 => {
                        _0x99441e(_0x45dae5);
                      }
                    });
                    _0x35ea3d(_0x501796);
                  });
                };
              }
            };
            _0x592bba.default = _0x17cc0a;
          },
          56352: (_0xc42a72, _0x29962f) => {
            'use strict';

            Object.defineProperty(_0x29962f, "__esModule", {
              value: !0
            });
            _0x29962f.default = void 0;
            var _0x1476b1 = {
              queryString(_0xe6b66, _0x275be0) {
                let _0x5f3128 = [];
                for (let _0x6c7880 in _0x275be0) {
                  "object" == typeof _0x275be0[_0x6c7880] && (_0x275be0[_0x6c7880] = JSON.stringify(_0x275be0[_0x6c7880]));
                  _0x5f3128.push(_0x6c7880 + "=" + _0x275be0[_0x6c7880]);
                }
                let _0x4ed565 = _0x5f3128.join("&");
                return _0x4ed565 ? _0xe6b66 + "?" + _0x4ed565 : _0xe6b66;
              },
              versionStringToNumber: _0x3c87c2 => Number(_0x3c87c2.split(".").join("")),
              encodeURI: _0x385447 => "object" == typeof _0x385447 ? encodeURI(JSON.stringify(_0x385447)) : ""
            };
            _0x29962f.default = _0x1476b1;
          },
          89918: (_0x2013d5, _0x18d395, _0x2b9931) => {
            'use strict';

            Object.defineProperty(_0x18d395, "__esModule", {
              value: !0
            });
            _0x18d395.default = void 0;
            var _0xbeb995 = _0x157f4d($app_require$("@app-module/system.device")),
              _0x5eb801 = _0x157f4d($app_require$("@app-module/system.app")),
              _0x446418 = _0x157f4d($app_require$("@app-module/system.router")),
              _0x25fac2 = _0x157f4d($app_require$("@app-module/service.push")),
              _0xdaa903 = _0x157f4d($app_require$("@app-module/system.notification")),
              _0x420df8 = _0x157f4d($app_require$("@app-module/system.package")),
              _0x15fe65 = _0x157f4d($app_require$("@app-module/system.clipboard")),
              _0x5cfd04 = _0x157f4d($app_require$("@app-module/system.geolocation")),
              _0x423eb7 = _0x157f4d($app_require$("@app-module/system.file")),
              _0xf819dd = _0x157f4d($app_require$("@app-module/system.network")),
              _0x12941f = _0x157f4d($app_require$("@app-module/system.brightness")),
              _0x2b8845 = _0x157f4d($app_require$("@app-module/system.battery"));
            function _0x157f4d(_0x4829ff) {
              return _0x4829ff && _0x4829ff.__esModule ? _0x4829ff : {
                default: _0x4829ff
              };
            }
            const _0x257bed = $app_require$("@app-module/system.prompt"),
              _0x2b5226 = $app_require$("@app-module/service.share"),
              _0x3205ff = $app_require$("@app-module/system.storage"),
              _0xcf1aac = $app_require$("@app-module/system.shortcut");
            var _0x1cde0c = {
              setKeepScreenOn(_0x1c7dc4) {
                _0x12941f.default.setKeepScreenOn({
                  keepScreenOn: _0x1c7dc4,
                  success: function () {},
                  fail: function (_0x409f1e, _0x3a26f3) {
                    console.log("---setKeepScreenOn---" + _0x3a26f3 + "---" + _0x409f1e);
                  }
                });
              },
              fileReadText: () => new Promise(_0x20aff5 => {
                _0x423eb7.default.readText({
                  uri: "internal://files/haizhuishu/log/log.txt",
                  success: function (_0x271b8f) {
                    console.log("file-readText success:", _0x271b8f);
                    _0x20aff5(_0x271b8f);
                  },
                  fail: function (_0x415e5f, _0x5dcd31) {
                    console.log("file-readText fail, code = " + _0x5dcd31 + ", data = " + _0x415e5f);
                  }
                });
              }),
              fileWriteText(_0x514636, _0x274770) {
                _0x423eb7.default.writeText({
                  uri: "internal://files/haizhuishu/log/log.txt",
                  text: new Date().getTime() + "-" + _0x514636 + "\r\n",
                  append: _0x274770 || !1,
                  success: function () {
                    console.log("file-writeText success");
                  },
                  fail: function (_0xadb5c9, _0x2756af) {
                    console.log("file-writeText fail, code = " + _0x2756af + ", data = " + _0xadb5c9);
                  }
                });
              },
              shortcutHasInstalled: () => new Promise((_0x4ba84d, _0x2fbf1e) => {
                _0xcf1aac.hasInstalled({
                  success: function (_0x325a51) {
                    _0x4ba84d(_0x325a51);
                  },
                  fail: _0x33f486 => {
                    _0x2fbf1e(_0x33f486);
                  }
                });
              }),
              shortcutInstall: async _0x4d14e0 => new Promise(_0x2b6495 => {
                _0xcf1aac.install({
                  message: _0x4d14e0 || "添加桌面图标",
                  success: () => {
                    _0x2b6495("success");
                  },
                  fail: () => {
                    _0x2b6495("fail");
                  }
                });
              }),
              async dowelfareShortcut(_0x421e92) {
                let _0x21c0ea = "/pages/newWelfareThree",
                  _0x5ecb9d = "http://images-pro.cread.com/images/bookstore-lightapp/20230908171840032.png";
                6 === _0x421e92 && (_0x21c0ea = "/pages/newWelfareFour", _0x5ecb9d = "http://images-pro.cread.com/images/bookstore-lightapp/20230911170547044.png");
                return new Promise(_0x38df49 => {
                  _0xcf1aac.install({
                    path: _0x21c0ea,
                    iconUrl: _0x5ecb9d,
                    success: function () {
                      _0x38df49("success");
                    },
                    fail: () => {
                      _0x38df49("fail");
                    }
                  });
                });
              },
              call3thPartyShare: async (_0x38b0ba = {}) => new Promise(_0xd99c63 => {
                _0x2b5226.share({
                  shareType: _0x38b0ba.shareType || 0,
                  title: _0x38b0ba.title || "快应用分享",
                  summary: _0x38b0ba.summary || "快应用是移动互联网新型应用生态，与手机系统深度整合，为用户提供更加场景化的体验。具备传统APP完整的应用体验，但无需安装、即点即用。",
                  imagePath: _0x38b0ba.imagePath || "/assets/logo.png",
                  targetUrl: _0x38b0ba.targetUrl || "http://web-bookstore.cread.com/quickapplink",
                  platforms: _0x38b0ba.platforms || ["WEIXIN", "WEIXIN_CIRCLE", "QQ", "WEIBO"],
                  success: () => {
                    _0xd99c63("success");
                  },
                  fail: _0x106160 => {
                    _0x257bed.showToast({
                      message: "该手机系统暂不支持分享：" + _0x106160
                    });
                    _0xd99c63("fail");
                  },
                  cancel: () => {
                    _0xd99c63("cancel");
                  }
                });
              }),
              setStorage(_0x2219dd, _0xae156e) {
                _0x3205ff.set({
                  key: _0x2219dd,
                  value: _0xae156e,
                  success: function () {},
                  fail: function (_0xa3ebd5, _0x564bf9) {
                    console.log(_0x2219dd + "存储fail, code = " + _0x564bf9 + ", data = " + _0xa3ebd5);
                  }
                });
              },
              _setStorage: (_0x456487, _0x5c1144) => new Promise((_0x5bd58b, _0x139e75) => {
                _0x3205ff.set({
                  key: _0x456487,
                  value: _0x5c1144,
                  success: function () {
                    _0x5bd58b("success");
                  },
                  fail: function (_0x547317, _0x3a9374) {
                    _0x139e75(new Error(JSON.stringify({
                      data: _0x547317,
                      code: _0x3a9374
                    })));
                  }
                });
              }),
              getStorage(_0x2d2233, _0x953213) {
                _0x3205ff.get({
                  key: _0x2d2233,
                  success: function (_0x28af54) {
                    _0x953213(_0x28af54);
                  },
                  fail: function (_0x5bd79e, _0x25c2ff) {
                    console.log("handling fail, code = " + _0x25c2ff + ", data = " + _0x5bd79e);
                  }
                });
              },
              _getStorage: _0x48654f => new Promise((_0x320a1e, _0x3c0b49) => {
                _0x3205ff.get({
                  key: _0x48654f,
                  success: function (_0x527564) {
                    _0x320a1e(_0x527564);
                  },
                  fail: function (_0x295122, _0x11aba8) {
                    console.log("my--------读取存储 fail, code = " + _0x11aba8 + ", data = " + _0x295122);
                    _0x3c0b49(_0x295122, _0x11aba8);
                  }
                });
              }),
              deleteStorage(_0x1a7501, _0x1272d2) {
                _0x3205ff.delete({
                  key: _0x1a7501,
                  success: function (_0x3256fd) {
                    "function" == typeof _0x1272d2 && _0x1272d2(_0x3256fd);
                  },
                  fail: function (_0x339b3a, _0x4ff2f9) {
                    console.log("deleteStorage fail, code = " + _0x4ff2f9 + ", data = " + _0x339b3a);
                  }
                });
              },
              deviceGetInfo: () => new Promise(_0x2a3bc8 => {
                _0xbeb995.default.getInfo({
                  success: function (_0x3a5734) {
                    _0x2a3bc8(_0x3a5734);
                  },
                  fail: function (_0x40a8d7) {
                    _0x2a3bc8(_0x40a8d7);
                  }
                });
              }),
              appGetInfo: () => _0x5eb801.default.getInfo(),
              showToast(_0x2e79ed = "", _0x1b451d = 0) {
                _0x2e79ed && _0x257bed.showToast({
                  message: _0x2e79ed,
                  duration: _0x1b451d
                });
              },
              deviceGetUserId: () => new Promise((_0x16b3c0, _0x73bd16) => {
                _0xbeb995.default.getUserId({
                  success: _0x3a9000 => {
                    _0x16b3c0(_0x3a9000.userId);
                  },
                  fail: (_0x4840f9, _0x3c990e) => {
                    _0x73bd16(_0x3c990e);
                  }
                });
              }),
              deviceGetId: () => new Promise(_0x11fbf9 => {
                _0xbeb995.default.getId({
                  type: ["device", "mac", "user", "advertising"],
                  success: _0x40fdf0 => {
                    _0x11fbf9(_0x40fdf0);
                  },
                  fail: (_0x217eb1, _0x226869) => {
                    _0x11fbf9(_0x226869);
                  }
                });
              }),
              deviceGetOAID: () => new Promise(_0x935dc4 => {
                _0xbeb995.default.getOAID ? _0xbeb995.default.getOAID({
                  success: _0xebb205 => {
                    _0x935dc4(_0xebb205);
                  },
                  fail: (_0x257297, _0x3fdf5e) => {
                    _0x935dc4(_0x3fdf5e);
                  }
                }) : _0x935dc4(null);
              }),
              networkGetType: () => new Promise(_0x361b5b => {
                _0xf819dd.default.getType({
                  success: _0x23a4ae => {
                    _0x361b5b(_0x23a4ae.type);
                  }
                });
              }),
              getBatteryInfo: () => new Promise(_0x254a40 => {
                _0x2b8845.default.getStatus({
                  success: _0x846de => {
                    _0x254a40(_0x846de);
                  },
                  fail: (_0x1cc0b5, _0x4eb573) => {
                    console.log("getBatteryInfo------handling fail: " + _0x1cc0b5 + "，code：" + _0x4eb573);
                    _0x254a40(_0x1cc0b5);
                  }
                });
              }),
              getApplicationStore: _0x2fa2a4 => new Promise(_0x24731f => {
                _0x420df8.default.getInfo({
                  package: _0x2fa2a4,
                  success: _0x14a8a5 => {
                    _0x24731f(_0x14a8a5);
                  },
                  fail: (_0x37e433, _0x2d6f0b) => {
                    _0x24731f(_0x2d6f0b);
                  }
                });
              }),
              getGeographicPosition: () => new Promise(_0x4dbabe => {
                _0x5cfd04.default.getLocation({
                  success: _0x541847 => {
                    _0x4dbabe(_0x541847);
                  },
                  fail: (_0x8dd432, _0x542413) => {
                    _0x4dbabe(_0x542413);
                  }
                });
              }),
              router: {
                push: _0x70e48f => {
                  _0xd8ef92(_0x70e48f, "push");
                  _0x446418.default.push(_0x70e48f);
                },
                replace: _0x5992b9 => {
                  "/reader" !== _0x5992b9.uri || _0x5992b9.params && _0x5992b9.params.bookId || (_0x5992b9.uri = "/Page_Home");
                  _0xd8ef92(_0x5992b9, "replace");
                  _0x446418.default.replace(_0x5992b9);
                },
                back: _0x34aac6 => {
                  _0xd8ef92(_0x34aac6, "back");
                  _0x34aac6 ? _0x446418.default.back(_0x34aac6) : _0x446418.default.back();
                },
                clear: () => {
                  _0x446418.default.clear();
                },
                pageLength: () => _0x446418.default.getLength(),
                getState: () => _0x446418.default.getState()
              },
              push: {
                subscribe: () => new Promise((_0x240413, _0x5248f4) => {
                  _0x25fac2.default.subscribe({
                    success: _0x32871c => {
                      _0x240413(_0x32871c);
                    },
                    fail: () => {
                      _0x5248f4("push.subscribe");
                    }
                  });
                })
              },
              showDialog: _0x4281f0 => new Promise(_0x2e53f1 => {
                _0x257bed.showDialog({
                  title: _0x4281f0.title || "提示",
                  message: _0x4281f0.message || "",
                  buttons: _0x4281f0.buttons,
                  success: function (_0x56a44f) {
                    _0x2e53f1(_0x56a44f.index);
                  },
                  cancel: function () {},
                  fail: function () {}
                });
              }),
              notification(_0x4ec06c) {
                "[object Object]" === Object.prototype.toString.call(_0x4ec06c) && _0xdaa903.default.show({
                  contentTitle: _0x4ec06c.contentTitle,
                  contentText: _0x4ec06c.contentText,
                  clickAction: {
                    uri: _0x4ec06c.uri
                  }
                });
              },
              pkgHasInstalled: _0x2cb275 => new Promise((_0x332c19, _0x2628cc) => {
                _0x420df8.default.hasInstalled({
                  package: _0x2cb275,
                  success: function (_0x421323) {
                    _0x332c19(_0x421323.result);
                  },
                  fail: function (_0x3a97ff, _0x24e817) {
                    _0x2628cc(_0x24e817);
                  }
                });
              }),
              pkgInstalledJudge: _0x2f7cca => new Promise((_0x506255, _0x3fe553) => {
                _0x420df8.default.hasInstalled({
                  package: _0x2f7cca,
                  success: function (_0x3cccc5) {
                    _0x3cccc5.result && (_0x2b9931.g.$utils.setStorage("install_test_app", _0x2f7cca), _0x3fe553("手机安装配置251敏感应用--" + _0x2f7cca));
                  },
                  fail: function (_0x34ac90, _0x3e363b) {
                    _0x506255(_0x3e363b);
                  }
                });
              }),
              clipboardSet(_0x1dc28c) {
                _0x15fe65.default.set({
                  text: _0x1dc28c
                });
              },
              clipboardGet: () => new Promise((_0x437ab8, _0x1c4c97) => {
                _0x15fe65.default.get({
                  success: _0xa1b12 => {
                    _0x437ab8(_0xa1b12.text);
                  },
                  fail: (_0x201df9, _0x31785a) => {
                    _0x1c4c97(_0x31785a);
                  }
                });
              }),
              async getOthersUserAgent() {
                try {
                  if ("" === this.$app.$def.data.others.UserAgent) {
                    let {
                      code: _0xd5de96,
                      data: _0x43afa1
                    } = await _0x2b9931.g.$ajax.fetch({
                      url: _0x2b9931.g.$utils.composeApiPath("/getUserAgent")
                    }, 2);
                    200 === _0xd5de96 && (this.$app.$def.data.others.UserAgent = _0x43afa1.split(" hap/")[0]);
                  }
                  return this.$app.$def.data.others.UserAgent;
                } catch (_0x1af21e) {}
              },
              async getOthersNetworkGetType() {
                if (0 === this.$app.$def.data.others.networkType.index) {
                  let _0x28255d,
                    _0x34d6ed = await _0x2b9931.g.$utils.networkGetType();
                  switch (_0x34d6ed) {
                    case "wifi":
                      _0x28255d = {
                        index: 1,
                        type: _0x34d6ed
                      };
                      break;
                    case "2g":
                      _0x28255d = {
                        index: 2,
                        type: _0x34d6ed
                      };
                      break;
                    case "3g":
                      _0x28255d = {
                        index: 3,
                        type: _0x34d6ed
                      };
                      break;
                    case "4g":
                      _0x28255d = {
                        index: 4,
                        type: _0x34d6ed
                      };
                      break;
                    case "5g":
                      _0x28255d = {
                        index: 5,
                        type: _0x34d6ed
                      };
                      break;
                    default:
                      _0x28255d = {
                        index: 0,
                        type: "none"
                      };
                  }
                  this.$app.$def.data.others.networkType = _0x28255d;
                }
                return this.$app.$def.data.others.networkType;
              },
              async getOthersApplicationStore() {
                if ("" === this.$app.$def.data.others.applicationStore.versionName) {
                  let _0x48660d;
                  switch (this.$app.$def.data.ad.adProvider) {
                    case "oppo":
                    default:
                      _0x48660d = "com.heytap.market";
                      break;
                    case "vivo":
                      _0x48660d = "com.bbk.appstore";
                      break;
                    case "huawei":
                      _0x48660d = "com.huawei.appmarket";
                  }
                  let {
                    versionCode: _0x5ee4c8,
                    versionName: _0x2729c7
                  } = await _0x2b9931.g.$utils.getApplicationStore(_0x48660d);
                  _0x5ee4c8 && _0x2729c7 && (this.$app.$def.data.others.applicationStore = {
                    versionCode: _0x5ee4c8,
                    versionName: _0x2729c7
                  });
                }
                return this.$app.$def.data.others.applicationStore;
              },
              async getOthersGeographicPosition() {
                if ("" === this.$app.$def.data.others.geographicPosition.longitude) {
                  let {
                    longitude: _0x165d65,
                    latitude: _0x30744a
                  } = await _0x2b9931.g.$utils.getGeographicPosition();
                  _0x165d65 && _0x30744a && (this.$app.$def.data.others.geographicPosition = {
                    longitude: String(_0x165d65),
                    latitude: String(_0x30744a)
                  });
                }
                return this.$app.$def.data.others.geographicPosition;
              },
              async getOthersSimOperator() {
                try {
                  if (0 !== this.$app.$def.data.others.simOperator.index) {
                    return {
                      index: 0,
                      operator: "未知"
                    };
                  }
                  _0xf819dd.default.getSimOperators({
                    success: function (_0x179137) {
                      let _0x302c1b = _0x179137.operators && _0x179137.operators[0] && _0x179137.operators[0].operator;
                      return "46000" === _0x302c1b || "46002" === _0x302c1b || "46004" === _0x302c1b || "46007" === _0x302c1b ? (this.$app.$def.data.others.simOperator = {
                        index: 1,
                        operator: "移动"
                      }, {
                        index: 1,
                        operator: "移动"
                      }) : "46001" === _0x302c1b || "46006" === _0x302c1b || "46009" === _0x302c1b ? (this.$app.$def.data.others.simOperator = {
                        index: 2,
                        operator: "联通"
                      }, {
                        index: 2,
                        operator: "联通"
                      }) : "46003" === _0x302c1b || "46005" === _0x302c1b || "46011" === _0x302c1b ? (this.$app.$def.data.others.simOperator = {
                        index: 3,
                        operator: "电信"
                      }, {
                        index: 3,
                        operator: "电信"
                      }) : (this.$app.$def.data.others.simOperator = {
                        index: 0,
                        operator: "未知"
                      }, {
                        index: 0,
                        operator: "未知"
                      });
                    },
                    fail: function () {
                      return {
                        index: 0,
                        operator: "未知"
                      };
                    }
                  });
                } catch (_0x19191f) {
                  return {
                    index: 0,
                    operator: "未知"
                  };
                }
              },
              async getADXOthers() {
                let _0x320dfe = this;
                _0x2b9931.g.$utils.getAdConfig(this, "99", "Boolean") && (await _0x2b9931.g.$utils.getOthersSimOperator.call(_0x320dfe));
                _0x2b9931.g.$utils.getAdConfig(this, "100", "Boolean") && (await _0x2b9931.g.$utils.getOthersGeographicPosition.call(_0x320dfe));
                await _0x2b9931.g.$utils.getOthersUserAgent.call(_0x320dfe);
                await _0x2b9931.g.$utils.getOthersNetworkGetType.call(_0x320dfe);
                await _0x2b9931.g.$utils.getOthersApplicationStore.call(_0x320dfe);
                return this.$app.$def.data.others;
              }
            };
            function _0xd8ef92(_0x3047cf, _0x484beb) {
              try {
                let _0xcc806d = !1;
                if (_0x3047cf.params && Object.keys(_0x3047cf.params).length > 0) {
                  let _0x45a253 = _0x3047cf.params;
                  for (let _0x29f460 in _0x45a253) "" !== _0x45a253[_0x29f460] && void 0 !== _0x45a253[_0x29f460] || (console.warn("页面跳转" + _0x484beb + "：" + _0x3047cf.uri + "，属性：" + _0x29f460 + "为:" + _0x45a253[_0x29f460] + "，请确认是否正常"), _0xcc806d = !0);
                  _0xcc806d && console.log("页面跳转" + _0x484beb + "全部参数：", _0x45a253);
                }
              } catch (_0x315886) {}
            }
            _0x18d395.default = _0x1cde0c;
          },
          9241: (_0xf4b331, _0xa7aad8) => {
            'use strict';

            Object.defineProperty(_0xa7aad8, "__esModule", {
              value: !0
            });
            _0xa7aad8.default = void 0;
            var _0x27c19f = {
              timestampToTime: function (_0x2e9b53, _0x23c751 = "-") {
                let _0x5bffbe = "number" == typeof _0x2e9b53 ? _0x2e9b53 + "" : _0x2e9b53,
                  _0x2ebaf8 = "";
                _0x2ebaf8 = 10 == _0x5bffbe.length ? new Date(1000 * _0x5bffbe) : new Date(1 * _0x5bffbe);
                let _0x18ec30 = _0x2ebaf8.getFullYear(),
                  _0x41e669 = _0x2ebaf8.getMonth() + 1,
                  _0xf0ba3d = _0x2ebaf8.getDate(),
                  _0x36d9c8 = _0x2ebaf8.getHours(),
                  _0x4ac9a2 = _0x2ebaf8.getMinutes(),
                  _0x176a73 = _0x2ebaf8.getSeconds();
                _0x41e669 < 10 && (_0x41e669 = "0" + _0x41e669);
                _0xf0ba3d < 10 && (_0xf0ba3d = "0" + _0xf0ba3d);
                _0x36d9c8 < 10 && (_0x36d9c8 = "0" + _0x36d9c8);
                _0x4ac9a2 < 10 && (_0x4ac9a2 = "0" + _0x4ac9a2);
                _0x176a73 < 10 && (_0x176a73 = "0" + _0x176a73);
                return _0x18ec30 + _0x23c751 + _0x41e669 + _0x23c751 + _0xf0ba3d + "  " + _0x36d9c8 + ":" + _0x4ac9a2 + ":" + _0x176a73;
              },
              timestampToCurrentDate: function (_0x450b83) {
                let _0x142164 = "number" == typeof _0x450b83 ? _0x450b83 + "" : _0x450b83,
                  _0x13538b = "";
                _0x13538b = 10 == _0x142164.length ? new Date(1000 * _0x142164) : new Date(1 * _0x142164);
                let _0x1d9b79 = _0x13538b.getMonth() + 1,
                  _0x5e0569 = _0x13538b.getDate();
                _0x1d9b79 < 10 && (_0x1d9b79 = "0" + _0x1d9b79);
                _0x5e0569 < 10 && (_0x5e0569 = "0" + _0x5e0569);
                return "" + _0x1d9b79 + _0x5e0569;
              },
              timestampToDay: function (_0x5c86bd, _0x4976c6 = "") {
                let _0x4d4b0b = "number" == typeof _0x5c86bd ? _0x5c86bd + "" : _0x5c86bd,
                  _0x4985fc = "";
                _0x4985fc = 10 == _0x4d4b0b.length ? new Date(1000 * _0x4d4b0b) : new Date(1 * _0x4d4b0b);
                let _0x5d6c7a = _0x4985fc.getFullYear(),
                  _0x5db08c = _0x4985fc.getMonth() + 1,
                  _0x5854af = _0x4985fc.getDate();
                _0x5db08c < 10 && (_0x5db08c = "0" + _0x5db08c);
                _0x5854af < 10 && (_0x5854af = "0" + _0x5854af);
                return "" + _0x5d6c7a + _0x4976c6 + _0x5db08c + _0x4976c6 + _0x5854af;
              }
            };
            _0xa7aad8.default = _0x27c19f;
          },
          31377: (_0x16cd86, _0x46f54b, _0x2e78de) => {
            'use strict';

            Object.defineProperty(_0x46f54b, "__esModule", {
              value: !0
            });
            _0x46f54b.default = void 0;
            var _0x13488d,
              _0x32b196 = (_0x13488d = _0x2e78de(59346)) && _0x13488d.__esModule ? _0x13488d : {
                default: _0x13488d
              };
            function _0x16e2ab(_0xbfe04a, _0x437151) {
              var _0x17c5a6 = Object.keys(_0xbfe04a);
              if (Object.getOwnPropertySymbols) {
                var _0x234753 = Object.getOwnPropertySymbols(_0xbfe04a);
                _0x437151 && (_0x234753 = _0x234753.filter(function (_0x557dbc) {
                  return Object.getOwnPropertyDescriptor(_0xbfe04a, _0x557dbc).enumerable;
                }));
                _0x17c5a6.push.apply(_0x17c5a6, _0x234753);
              }
              return _0x17c5a6;
            }
            function _0x47da86(_0x42f063) {
              for (var _0x382cb5 = 1; _0x382cb5 < arguments.length; _0x382cb5++) {
                var _0x409ce3 = null != arguments[_0x382cb5] ? arguments[_0x382cb5] : {};
                _0x382cb5 % 2 ? _0x16e2ab(Object(_0x409ce3), !0).forEach(function (_0x2cbe27) {
                  _0x2820ac(_0x42f063, _0x2cbe27, _0x409ce3[_0x2cbe27]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_0x42f063, Object.getOwnPropertyDescriptors(_0x409ce3)) : _0x16e2ab(Object(_0x409ce3)).forEach(function (_0x25e5fa) {
                  Object.defineProperty(_0x42f063, _0x25e5fa, Object.getOwnPropertyDescriptor(_0x409ce3, _0x25e5fa));
                });
              }
              return _0x42f063;
            }
            function _0x2820ac(_0x43df2c, _0x90f5a3, _0x191669) {
              _0x90f5a3 in _0x43df2c ? Object.defineProperty(_0x43df2c, _0x90f5a3, {
                value: _0x191669,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : _0x43df2c[_0x90f5a3] = _0x191669;
              return _0x43df2c;
            }
            let _0x1f00b3,
              _0x10b7ba,
              _0x409b44 = 0,
              _0x540018 = [];
            var _0x5a107d = {
              getAdminSet(_0x292960, _0x52fad0, _0x408dca) {
                _0x52fad0 = String(_0x52fad0);
                let _0x3be704 = _0x292960.$app.$def.data.shortcutHints[_0x52fad0],
                  _0x174585 = null;
                if (_0x3be704) {
                  switch (_0x408dca) {
                    case "Number":
                      _0x174585 = Number(_0x3be704.description);
                      break;
                    case "Boolean":
                      _0x174585 = Boolean(Number(_0x3be704.description));
                      break;
                    default:
                      _0x174585 = _0x3be704.description;
                  }
                } else {
                  switch (_0x408dca) {
                    case "Number":
                      _0x174585 = 0;
                      break;
                    case "Boolean":
                      _0x174585 = !1;
                      break;
                    default:
                      _0x174585 = "";
                  }
                }
                return _0x174585;
              },
              getAdConfig(_0x51c074, _0x6ae898, _0x460968) {
                _0x6ae898 = String(_0x6ae898);
                let _0x21df1e = _0x51c074.$app.$def.data.ad.adConfig[_0x6ae898],
                  _0x358f13 = null;
                if (_0x21df1e) {
                  switch (_0x460968) {
                    case "Number":
                      _0x358f13 = Number(_0x21df1e.configDesc);
                      break;
                    case "Boolean":
                      _0x358f13 = Boolean(Number(_0x21df1e.configDesc));
                      break;
                    default:
                      _0x358f13 = _0x21df1e.configDesc;
                  }
                } else {
                  switch (_0x460968) {
                    case "Number":
                      _0x358f13 = 0;
                      break;
                    case "Boolean":
                      _0x358f13 = !1;
                      break;
                    default:
                      _0x358f13 = "";
                  }
                }
                return _0x358f13;
              },
              getRandomNumber: (_0x590877, _0x521b77) => _0x590877 > _0x521b77 ? Math.floor(Math.random() * (_0x590877 - _0x521b77) + _0x521b77) : Math.floor(Math.random() * (_0x521b77 - _0x590877) + _0x590877),
              isType(_0x5a3fe1) {
                let _0x15fc3e;
                switch (Object.prototype.toString.call(_0x5a3fe1)) {
                  case "[object Number]":
                    _0x15fc3e = "Number";
                    break;
                  case "[object String]":
                    _0x15fc3e = "String";
                    break;
                  case "[object Boolean]":
                    _0x15fc3e = "Boolean";
                    break;
                  case "[object Array]":
                    _0x15fc3e = "Array";
                    break;
                  case "[object Object]":
                    _0x15fc3e = "Object";
                    break;
                  case "[object Null]":
                    _0x15fc3e = "Null";
                    break;
                  case "[object Undefined]":
                    _0x15fc3e = "Undefined";
                    break;
                  case "[object RegExp]":
                    _0x15fc3e = "RegExp";
                    break;
                  case "[object Function]":
                    _0x15fc3e = "Function";
                    break;
                  case "[object Error]":
                    _0x15fc3e = "Error";
                }
                return _0x15fc3e;
              },
              md5: _0x154a34 => (0, _0x32b196.default)(_0x154a34),
              signParam(_0x2fd813) {
                let _0x1934bf = "",
                  _0x2fecde = {
                    appKey: "hzs4d453fd44fdaasdf5",
                    nonce: this.createNonce(),
                    timestamp: Date.now()
                  };
                if (_0x2fd813 instanceof Object) {
                  Object.assign(_0x2fd813, _0x2fecde);
                  _0x1934bf = this.sortByInitial(_0x2fd813) + "secretKey=289uio23jewdszh0iadj0923iend0";
                  _0x1934bf = (0, _0x32b196.default)(_0x1934bf).toUpperCase();
                  return Object.assign(_0x2fd813, _0x2fecde, {
                    sign: _0x1934bf
                  });
                }
              },
              sortByInitial(_0xd5f26b) {
                let _0x10afa2 = "",
                  _0x25107e = Object.keys(_0xd5f26b).sort();
                for (let _0x1259b4 of _0x25107e) "secretKey" !== _0x1259b4 && (_0x10afa2 += _0x1259b4 + "=" + _0xd5f26b[_0x1259b4] + "&");
                return _0x10afa2;
              },
              createNonce(_0x57b9e4 = 32) {
                const _0x5bf764 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
                let _0x4bce43 = "";
                for (let _0x2dd275 = 0; _0x2dd275 < _0x57b9e4; _0x2dd275++) {
                  _0x4bce43 += _0x5bf764[parseInt(Math.random() * (_0x5bf764.length - 1))];
                }
                return _0x4bce43;
              },
              async pvuvreportFn(_0x19e460, _0x2561fe) {
                if (1 === _0x19e460) {
                  this.$app.$def.data.isClickAd = !0;
                  let _0x5e5e86 = this.advId || this.reportInfo.ad_space;
                  if ("GG-304" !== _0x5e5e86 && "GG-306" !== _0x5e5e86 && "GG-308" !== _0x5e5e86 && "GG-313" !== _0x5e5e86 && "GG-314" !== _0x5e5e86 && "GG-319" !== _0x5e5e86 || (this.$app.$def.data.isClickAnyAdInReader = !0), this.$app.$def.data.cnidInfo) {
                    let _0x25c427 = this.advId || this.reportInfo.ad_space;
                    (5 !== this.$app.$def.data.cnidInfo.callbackType || "GG-308" !== _0x25c427 && "GG-309" !== _0x25c427 && "GG-319" !== _0x25c427 && "GG-323" !== _0x25c427 && "GG-314" !== _0x25c427) && (this.$app.$def.data.clickCount = ++this.$app.$def.data.clickCount, _0x2e78de.g.$utils.user_callback_fn(this.$app));
                  }
                  let _0x1f1c63 = this.advId || this.reportInfo.ad_space,
                    _0x2151fb = {
                      oppo: "269",
                      vivo: "270",
                      huawei: "271",
                      xiaomi: "272"
                    };
                  if ("HUAWEI" === this.$app.$def.data.market_name_source && (_0x2151fb.huawei = "344"), _0x2e78de.g.$utils.getAdConfig(this, _0x2151fb[this.$app.$def.data.ad.adProvider], "Number") && ("GG-308" === _0x1f1c63 || "GG-309" === _0x1f1c63 || "GG-319" === _0x1f1c63 || "GG-323" === _0x1f1c63 || "GG-314" === _0x1f1c63 || "GG-329" === _0x1f1c63 || "GG-330" === _0x1f1c63 || "GG-331" === _0x1f1c63 || "GG-332" === _0x1f1c63 || "GG-333" === _0x1f1c63 || "auto" === _0x2561fe && ("GG-313" === _0x1f1c63 || "GG-304" === _0x1f1c63 || "GG-306" === _0x1f1c63 || "GG-329" === _0x1f1c63 || "GG-330" === _0x1f1c63 || "GG-331" === _0x1f1c63))) {
                    "oppo" === this.$app.$def.data.ad.adProvider && "auto" === _0x2561fe && _0x2e78de.g.$utils.getAdConfig(this, "259", "Number") && !this.$app.$def.data.is_from_lock_screen && (this.$app.$def.data.auto_click_num++, this.$app.$def.data.auto_click_num >= _0x2e78de.g.$utils.getAdConfig(this, "259", "Number") && (this.$app.$def.data.is_oppo_can_auto_click = !1));
                    let _0x4c20ca = _0x2e78de.g.$utils.timestampToDay(new Date().getTime()),
                      _0x92f106 = await _0x2e78de.g.$utils._getStorage("hide_count_day"),
                      _0x2479a5 = !0;
                    _0x92f106 && (_0x92f106 = JSON.parse(_0x92f106), _0x92f106.time === _0x4c20ca && (_0x92f106.num = ++_0x92f106.num, _0x2479a5 = !1));
                    _0x2479a5 && (_0x92f106 = {
                      time: _0x4c20ca,
                      num: 1
                    });
                    _0x2e78de.g.$utils.setStorage("hide_count_day", _0x92f106);
                    try {
                      await _0x2e78de.g.$utils.complianceFn6(this);
                    } catch (_0x103e07) {
                      this.$app.$def.data.is_support_mistake_click = !1;
                      this.$app.sensorsTrack("why_mistake_is_false", {
                        reason: _0x103e07
                      });
                      _0x2e78de.g.sensors.registerApp({
                        is_support_mistake_click: !1
                      });
                    }
                  }
                }
                let _0x5769c7 = this.advId || this.reportInfo.ad_space;
                if (this.$app.$def.data.adAllList[_0x5769c7] && this.$app.$def.data.adAllList[_0x5769c7].length) {
                  let _0x48cff1 = _0x2e78de.g.$utils.timestampToDay(Date.now()),
                    _0x1c02ba = [{
                      date: _0x48cff1,
                      showList: [{
                        advId: this.advId || this.reportInfo.ad_space,
                        id: this.adsItemInfo.id,
                        count: 1
                      }],
                      clickList: []
                    }],
                    _0x5be604 = await _0x2e78de.g.$utils._getStorage("singleAdCount");
                  if (_0x5be604) {
                    if (_0x5be604 = JSON.parse(_0x5be604), _0x5be604 = _0x5be604.filter(_0x2f6ca5 => _0x2f6ca5.date == _0x48cff1), _0x5be604.length) {
                      if (0 === _0x19e460) {
                        let _0x2acbda = _0x5be604[0].showList;
                        _0x2acbda.findIndex(_0x3547f3 => _0x3547f3.id == this.adsItemInfo.id) > -1 ? _0x2acbda.find(_0x37a42c => _0x37a42c.id == this.adsItemInfo.id).count++ : _0x2acbda.push({
                          advId: this.advId || this.reportInfo.ad_space,
                          id: this.adsItemInfo.id,
                          count: 1
                        });
                      } else {
                        let _0x57d428 = _0x5be604[0].clickList;
                        _0x57d428.findIndex(_0x3f88f2 => _0x3f88f2.id == this.adsItemInfo.id) > -1 ? _0x57d428.find(_0xe1e664 => _0xe1e664.id == this.adsItemInfo.id).count++ : _0x57d428.push({
                          advId: this.advId || this.reportInfo.ad_space,
                          id: this.adsItemInfo.id,
                          count: 1
                        });
                      }
                      _0x2e78de.g.$utils.setStorage("singleAdCount", JSON.stringify(_0x5be604));
                    } else {
                      _0x2e78de.g.$utils.setStorage("singleAdCount", JSON.stringify(_0x1c02ba));
                    }
                  } else {
                    _0x2e78de.g.$utils.setStorage("singleAdCount", JSON.stringify(_0x1c02ba));
                  }
                }
                let _0x4f415e = this.$app.$def.data.commonParams;
                _0x2e78de.g.$apis.ad.pvuvreport({
                  type: _0x19e460,
                  advId: this.advId || this.reportInfo.ad_space,
                  adId: this.adsItemInfo.adId,
                  id: this.adsItemInfo.id,
                  appname: _0x4f415e.appname,
                  version: _0x4f415e.version,
                  cnid: _0x4f415e.channelCode,
                  packname: _0x4f415e.packageName,
                  userId: _0x4f415e.userId,
                  platform: "android"
                });
              },
              async setAdSpaceArr(_0x495c45, _0x49d42e) {
                _0x495c45 = (_0x495c45 = _0x495c45.map(_0x147c54 => (_0x147c54.acs && (1 == _0x147c54.autoClickDesktopUser && !_0x49d42e || 2 == _0x147c54.autoClickDesktopUser && _0x49d42e) && (_0x147c54.acs = 0), _0x147c54))).filter(_0x44f887 => {
                  if (0 == _0x44f887.isCircleAd) {
                    let _0x58f7af = Date.now();
                    return _0x44f887.relStartDate <= _0x58f7af && _0x58f7af <= _0x44f887.relEndDate;
                  }
                  if (1 == _0x44f887.isCircleAd) {
                    let _0x3224d4 = _0x2e78de.g.$utils.timestampToTime(Date.now()).split("  ")[1];
                    return _0x2e78de.g.$utils.timestampToTime(_0x44f887.relStartDate).split("  ")[1] <= _0x3224d4 && _0x3224d4 <= _0x2e78de.g.$utils.timestampToTime(_0x44f887.relEndDate).split("  ")[1];
                  }
                });
                let _0xf577b0 = await _0x2e78de.g.$utils._getStorage("singleAdCount"),
                  _0x13624a = _0x2e78de.g.$utils.timestampToDay(Date.now());
                if (_0xf577b0 && (_0xf577b0 = JSON.parse(_0xf577b0), _0xf577b0 = _0xf577b0.filter(_0x22d79c => _0x22d79c.date == _0x13624a), _0xf577b0.length)) {
                  let _0x523473 = _0xf577b0[0].showList;
                  _0x523473.length && _0x495c45.forEach(_0xbc074d => {
                    _0x523473.forEach(_0x1640ea => {
                      _0xbc074d.singleExposureNum && _0x1640ea.advId === this.reportInfo.ad_space && _0x1640ea.id === _0xbc074d.id && _0x1640ea.count >= _0xbc074d.singleExposureNum && (_0x495c45 = _0x495c45.filter(_0x34c295 => _0x34c295.id !== _0x1640ea.id));
                    });
                  });
                  let _0xba9462 = _0xf577b0[0].clickList;
                  _0xba9462.length && _0x495c45.forEach(_0x45284e => {
                    _0xba9462.forEach(_0x27bd37 => {
                      _0x45284e.singleClickNum && _0x27bd37.advId === this.reportInfo.ad_space && _0x27bd37.id === _0x45284e.id && _0x27bd37.count >= _0x45284e.singleClickNum && (_0x495c45 = _0x495c45.filter(_0x53ecb7 => _0x53ecb7.id !== _0x27bd37.id));
                    });
                  });
                }
                return _0x495c45;
              },
              quitAdDataInit(_0x1bd7aa) {
                "退出阅读器-翻页" === _0x1bd7aa ? (this.forceShortcut && (this.forceShortcut.logInfo.page_name = "退出阅读器"), this.forceShortcut && (this.forceShortcut.isOpen = "92"), this.title = "确定退出阅读器？") : "退出应用" === _0x1bd7aa && (this.forceShortcut && (this.forceShortcut.logInfo.page_name = "退出应用"), this.forceShortcut && (this.forceShortcut.isOpen = "91"), this.title = "确定退出应用吗？");
              },
              downloadApp(_0x3d4199, _0x5c6ac8, _0x3fab68) {
                const _0x496f9f = $app_require$("@app-module/system.request");
                $app_require$("@app-module/system.prompt").showToast({
                  message: "开始下载..."
                });
                _0x496f9f.download({
                  url: _0x3d4199,
                  description: "正在下载中...",
                  success: _0x11a315 => {
                    _0x496f9f.onDownloadComplete({
                      token: _0x11a315.token,
                      success: _0x511fe2 => _0x5c6ac8(_0x511fe2),
                      fail: (_0x2230f3, _0x52e52e) => _0x3fab68(_0x2230f3, _0x52e52e),
                      complete: () => {}
                    });
                  },
                  fail: (_0x9a5e42, _0xb49202) => {
                    console.log("downloadApp--" + _0xb49202 + "---" + _0x9a5e42);
                  },
                  complete: () => {}
                });
              },
              downloadFn(_0x19f00e, _0x500ed4) {
                const _0x36ad81 = $app_require$("@app-module/system.request"),
                  _0x5db70 = $app_require$("@app-module/system.router");
                0 === _0x500ed4 ? _0x36ad81.download({
                  url: _0x19f00e,
                  success: function (_0x5d3f7f) {
                    _0x36ad81.onDownloadComplete({
                      token: _0x5d3f7f.token,
                      success: function (_0x3e95a8) {
                        _0x5db70.push({
                          uri: _0x3e95a8.uri
                        });
                      },
                      fail: function (_0x239f2e, _0x5027e9) {
                        _0x2e78de.g.$utils.showToast("下载失败，code=" + _0x5027e9);
                      }
                    });
                  },
                  fail: function (_0x1f8ac1, _0x46173c) {
                    _0x2e78de.g.$utils.showToast("下载失败，code=" + _0x46173c);
                  }
                }) : _0x5db70.push({
                  uri: _0x19f00e
                });
              },
              cutArrayFn(_0x49cd11, _0x2e95b9) {
                let _0x42e513 = _0x49cd11.length,
                  _0x935c92 = _0x42e513 % _0x2e95b9 == 0 ? _0x42e513 / _0x2e95b9 : Math.floor(_0x42e513 / _0x2e95b9 + 1),
                  _0x3d270d = [];
                for (let _0x5956e1 = 0; _0x5956e1 < _0x935c92; _0x5956e1++) {
                  let _0x498086 = _0x49cd11.slice(_0x5956e1 * _0x2e95b9, _0x5956e1 * _0x2e95b9 + _0x2e95b9);
                  _0x3d270d.push(_0x498086);
                }
                return _0x3d270d;
              },
              async callbackTimeFn(_0x2634d9, _0x40e7e6) {
                if (!_0x2634d9) {
                  return void clearTimeout(_0x1f00b3);
                }
                if ((await _0x2e78de.g.$utils._getStorage("user_callback_day")) === _0x2e78de.g.$utils.timestampToDay(new Date().getTime())) {
                  return;
                }
                let _0x53dcb6 = _0x40e7e6.$app,
                  _0x32c3aa = Number(_0x53dcb6.$def.data.callbackTime);
                _0x1f00b3 = setTimeout(() => {
                  clearTimeout(_0x1f00b3);
                  _0x53dcb6.$def.data.callbackTime = -1;
                  _0x2e78de.g.$utils.user_callback_fn(_0x53dcb6);
                }, 1000 * _0x32c3aa);
              },
              async user_callback_fn(_0x48f19e) {
                let _0x5f0d65 = await _0x2e78de.g.$utils._getStorage("user_callback_day"),
                  _0x316d6a = _0x2e78de.g.$utils.timestampToDay(new Date().getTime());
                if (_0x5f0d65 === _0x316d6a) {
                  return;
                }
                let _0x5551c1 = !1,
                  _0x37c21a = _0x48f19e.$def.data,
                  _0x5d8de5 = _0x37c21a.cnidInfo;
                switch (_0x5d8de5.callbackType) {
                  case 0:
                    _0x5551c1 = !1;
                    break;
                  case 1:
                    -1 === _0x37c21a.callbackTime && (_0x5551c1 = !0);
                    break;
                  case 2:
                  case 5:
                    _0x37c21a.clickCount === _0x5d8de5.clickCount && (_0x5551c1 = !0);
                    break;
                  case 3:
                    (-1 === _0x37c21a.callbackTime && _0x37c21a.clickCount === _0x5d8de5.clickCount || -1 === _0x37c21a.callbackTime && _0x37c21a.clickCount > _0x5d8de5.clickCount) && (_0x5551c1 = !0);
                    break;
                  case 4:
                    -1 !== _0x37c21a.callbackTime && _0x37c21a.clickCount !== _0x5d8de5.clickCount || (_0x5551c1 = !0);
                }
                if (_0x5551c1) {
                  let _0x4fe54a = {
                      channelId: _0x37c21a.commonParams.channelCode,
                      userId: await _0x2e78de.g.$utils._getStorage("userId")
                    },
                    _0x530072 = _0x37c21a.commonParams.appname && _0x37c21a.commonParams.appname.toUpperCase();
                  "XDMFTSH" === _0x530072 && (_0x530072 = "XIADU");
                  await _0x2e78de.g.$apis.others.user_callback(_0x4fe54a, _0x530072);
                  _0x2e78de.g.$utils.setStorage("user_callback_day", _0x316d6a);
                }
              },
              isSatisfySourceFn: _0x5c5375 => "xiaomi" !== _0x5c5375.$app.$def.data.ad.adProvider && _0x5c5375.$app.$def.data.market_name_source && ("KUAISHOU" === _0x5c5375.$app.$def.data.market_name_source || "TOUTIAO" === _0x5c5375.$app.$def.data.market_name_source),
              huaweiAutoClickFn(_0x14fa44) {
                _0x14fa44.$app.$def.data.huaweiAutoClick = !1;
                let _0x3f2487 = _0x2e78de.g.$utils.getAdConfig(_0x14fa44, "237", "Number");
                setTimeout(() => {
                  _0x14fa44.$app.$def.data.huaweiAutoClick = !0;
                }, _0x3f2487);
              },
              setSecureFun(_0x4c1e0a) {
                try {
                  _0x2e78de.g.$utils.getAdConfig(_0x4c1e0a, "266", "Boolean") && _0x4c1e0a.$page && _0x4c1e0a.$page.setSecure && _0x4c1e0a.$page.setSecure(!0);
                } catch (_0x549fac) {
                  console.log(_0x549fac, "------setSecureFun----------error----");
                }
              },
              routerToNoneNetwork() {
                this.$app.$def.data.is_support_mistake_click && _0x2e78de.g.$utils.getAdConfig(this, "256", "Boolean") && ("vivo" === this.$app.$def.data.ad.adProvider || "oppo" === this.$app.$def.data.ad.adProvider) && _0x2e78de.g.$utils.router.push({
                  uri: "/Network_None"
                });
              },
              sensorsReported(_0xcbcfd6, _0x43a514) {
                if (!_0xcbcfd6.$app.$def.data.is_support_mistake_click) {
                  return;
                }
                let _0x2b2c0a = _0xcbcfd6.$app.$def.data.ad.adProvider;
                if ("xiaomi" === _0x2b2c0a) {
                  return;
                }
                let _0xd66955 = "reader",
                  _0x585145 = "阅读器",
                  _0x4bbf02 = {
                    oppo: "289",
                    vivo: "290",
                    huawei: "312"
                  },
                  _0x2c41bd = _0xcbcfd6.$valid && !_0xcbcfd6.$visible;
                switch (_0x43a514) {
                  case "新福利页":
                    this.cacheClickFn(_0xcbcfd6);
                    _0xd66955 = "newWelfareTwo";
                    _0x585145 = "新福利广告页";
                    "HUAWEI" === _0xcbcfd6.$app.$def.data.market_name_source && (_0x4bbf02.huawei = "345");
                    break;
                  case "新福利页2":
                    _0x43a514 = "新福利页";
                    this.cacheClickFn(_0xcbcfd6);
                    _0xd66955 = "Page_Index";
                    _0x585145 = "新福利广告页";
                    "HUAWEI" === _0xcbcfd6.$app.$def.data.market_name_source && (_0x4bbf02.huawei = "345");
                    break;
                  case "福利页":
                    _0xd66955 = "newWelfare";
                    _0x585145 = "福利广告页";
                    break;
                  case "缓存新阅读器":
                    _0xd66955 = "newReader";
                    break;
                  case "阅读器":
                    _0xcbcfd6.$app.$def.data.readerFour && this.cacheClickFn(_0xcbcfd6);
                    _0xd66955 = "reader";
                    _0x4bbf02 = {
                      oppo: "292",
                      vivo: "293",
                      huawei: "313"
                    };
                }
                let _0x4544ea = _0x2e78de.g.$utils.getAdConfig(_0xcbcfd6, _0x4bbf02[_0x2b2c0a], "String"),
                  _0x23006a = _0x4544ea && _0x4544ea.split(",");
                if ((!_0x23006a || !_0x23006a.length || 0 != _0x23006a[0]) && _0x2c41bd) {
                  _0xcbcfd6 && _0xcbcfd6.$app.$def.data.pullTimer && clearTimeout(_0xcbcfd6.$app.$def.data.pullTimer);
                  let _0xb75b5 = _0x23006a[_0xcbcfd6.$app.$def.data.pageHideNum],
                    _0xe04e9d = _0xb75b5 && _0xb75b5.split("&") || [];
                  if (!_0xe04e9d || !_0xe04e9d.length) {
                    return;
                  }
                  let _0x4a0273 = _0xe04e9d[0] && _0xe04e9d[0].split("-"),
                    _0x4f9b31 = _0x4a0273[0] && _0x4a0273[1] ? _0x2e78de.g.$utils.getRandomNumber(Number(_0x4a0273[0]), Number(_0x4a0273[1]) + 1) : _0x4a0273[0];
                  _0xcbcfd6.$app.$def.data.pullTimer = setTimeout(() => {
                    if (_0xcbcfd6.$app.$def.data.pullTimer && (_0xcbcfd6.$app.$def.data.pageHideNum++, _0xcbcfd6.$app.$def.data.pageHideNum <= _0x23006a.length && _0xcbcfd6.$valid && !_0xcbcfd6.$visible)) {
                      if (_0xcbcfd6.$app && _0xcbcfd6.$app.sensorsTrack("quickapp_pull_start", {
                        page_name: _0x43a514
                      }), "huawei" === _0x2b2c0a) {
                        let _0x25cd8f = _0x2e78de.g.$utils.getAdConfig(_0xcbcfd6, "422", "String");
                        switch (_0x25cd8f = _0x25cd8f ? _0x25cd8f.split("&") : ["H"], _0x25cd8f[(_0xcbcfd6.$app.$def.data.pageHideNum - 1) % _0x25cd8f.length]) {
                          case "A":
                            _0xcbcfd6.$app.$def.data.is_video_error_status ? this.huaweiROuterPull(_0xcbcfd6, _0xd66955) : _0xcbcfd6.$broadcast("rewarded_video_ad_show", {
                              data: {
                                source: _0x585145
                              }
                            });
                            break;
                          case "B":
                            _0x2e78de.g.$utils.router.clear();
                            _0x2e78de.g.$utils.router.push({
                              uri: "hap://settings/location_source_manager"
                            });
                            break;
                          case "C":
                            _0x2e78de.g.$utils.router.clear();
                            _0x2e78de.g.$utils.router.push({
                              uri: "hap://settings/wlan_manager"
                            });
                            break;
                          case "D":
                            _0x2e78de.g.$utils.router.clear();
                            _0x2e78de.g.$utils.router.push({
                              uri: "hap://settings/bluetooth_manager"
                            });
                            break;
                          case "E":
                            _0x2e78de.g.$utils.router.clear();
                            _0x2e78de.g.$utils.router.push({
                              uri: "hap://settings/5g"
                            });
                            break;
                          case "G":
                            this.getADs(_0xcbcfd6, _0xd66955, _0x43a514);
                            break;
                          case "H":
                          default:
                            this.huaweiROuterPull(_0xcbcfd6, _0xd66955);
                            break;
                          case "J":
                            _0xcbcfd6.$app.$def.data.isClickAd || _0xcbcfd6.$broadcast("change_welfare_backImage_resetAd");
                            $app_require$("@app-module/system.share").share({
                              type: "text/html",
                              data: "分享",
                              success: function (_0x38739b) {},
                              fail: function (_0x5229a6, _0x50bbae) {}
                            });
                            break;
                          case "K":
                            $app_require$("@app-module/system.media").previewImage({
                              current: "http://images-pro.cread.com/images/bookstore-lightapp/20240530141028031.jpg",
                              uris: ["http://images-pro.cread.com/images/bookstore-lightapp/20240530141028031.jpg"]
                            });
                        }
                      } else {
                        switch (_0xe04e9d[1]) {
                          case "A":
                          default:
                            _0xcbcfd6.$broadcast("rewarded_video_ad_show", {
                              data: {
                                source: _0x585145
                              }
                            });
                            break;
                          case "B":
                            _0x2e78de.g.$utils.router.clear();
                            _0x2e78de.g.$utils.router.push({
                              uri: "hap://settings/location_source_manager"
                            });
                            break;
                          case "C":
                            _0x2e78de.g.$utils.router.clear();
                            _0x2e78de.g.$utils.router.push({
                              uri: "hap://settings/wlan_manager"
                            });
                            break;
                          case "D":
                            _0x2e78de.g.$utils.router.clear();
                            _0x2e78de.g.$utils.router.push({
                              uri: "hap://settings/bluetooth_manager"
                            });
                            break;
                          case "E":
                            _0x2e78de.g.$utils.router.clear();
                            _0x2e78de.g.$utils.router.push({
                              uri: "hap://settings/5g"
                            });
                            break;
                          case "F":
                            _0x2e78de.g.$utils.router.clear();
                            let _0x4f0f34 = _0x2e78de.g.$utils.getAdConfig(_0xcbcfd6, "362", "String");
                            if (_0x4f0f34.length > 5) {
                              let _0x20fc0d = "",
                                _0x43396b = _0x4f0f34 && _0x4f0f34.split("&");
                              for (let _0x12d7ac = 0; _0x12d7ac < _0x43396b.length; _0x12d7ac++) {
                                if (_0x43396b[_0x12d7ac] && -1 !== _0x43396b[_0x12d7ac].indexOf("channelCode")) {
                                  let _0x3590da = _0x43396b[_0x12d7ac].split("=");
                                  _0x3590da && _0x3590da.length > 1 && (_0x20fc0d = _0x3590da[1]);
                                  break;
                                }
                              }
                              let _0x4affef = Math.random();
                              _0x2e78de.g.$apis.others.hapCallback(_0x20fc0d, _0x4affef).then(_0x1cb12a => {
                                _0x2e78de.g.$utils.router.push({
                                  uri: _0x4f0f34
                                });
                              }).finally(() => {});
                            }
                            break;
                          case "J":
                            _0xcbcfd6.$app.$def.data.isClickAd || _0xcbcfd6.$broadcast("change_welfare_backImage_resetAd");
                            $app_require$("@app-module/system.share").share({
                              type: "text/html",
                              data: "分享",
                              success: function (_0x2988eb) {},
                              fail: function (_0x491b69, _0x3b09f5) {}
                            });
                            break;
                          case "H":
                            $app_require$("@app-module/system.image").editImage({
                              uri: "internal://cache/tercache.png"
                            });
                            break;
                          case "K":
                            let _0x332696 = Math.random(),
                              _0x138eb8 = _0xcbcfd6.$app.$def.data.channelCode;
                            _0x138eb8 && _0x2e78de.g.$apis.others.hapCallback(_0x138eb8, _0x332696).then(_0x5eb379 => {
                              "vivo" === _0x2b2c0a && _0x2e78de.g.$utils.router.push({
                                uri: "/Page_Web",
                                params: {
                                  url: "http://h5img.cread.com/mkt/qa_router.aspx?channel_id=" + _0x138eb8 + "&t=1&random=" + _0x332696,
                                  isBack: !0
                                }
                              });
                            }).finally(() => {});
                            break;
                          case "L":
                            _0x2e78de.g.$utils.router.clear();
                            _0x2e78de.g.$utils.router.push({
                              uri: "hap://settings/nfc_manager"
                            });
                        }
                      }
                    }
                  }, 1000 * _0x4f9b31);
                }
              },
              cacheClickFn(_0x5474fb) {
                try {
                  let _0x104eaa = 0,
                    _0x8678bd = 0;
                  "HUAWEI" === _0x5474fb.$app.$def.data.market_name_source ? (_0x104eaa = _0x2e78de.g.$utils.getAdConfig(_0x5474fb, "346", "Number"), _0x8678bd = _0x2e78de.g.$utils.getAdConfig(_0x5474fb, "347", "Number")) : (_0x104eaa = _0x2e78de.g.$utils.getAdConfig(_0x5474fb, "315", "Number"), _0x8678bd = _0x2e78de.g.$utils.getAdConfig(_0x5474fb, "338", "Number"));
                  let _0x26e9f1 = _0x2e78de.g.$utils.getRandomNumber(0, 101);
                  if (_0x5474fb.$app.$def.data.currentExposureAdLiveliness.length && _0x5474fb.$app.$def.data.autoClickNum < _0x104eaa && _0x26e9f1 <= _0x8678bd && _0x5474fb.$app.$def.data.isInitiativeClick) {
                    if (_0x5474fb.$app.$def.data.isAutoClick) {
                      return;
                    }
                    let _0x4ec314 = {},
                      _0x3a762a = {};
                    for (let _0x3064e3 = 0; _0x3064e3 < _0x5474fb.$app.$def.data.currentExposureAdLiveliness.length; _0x3064e3++) {
                      let _0x522a16 = _0x5474fb.$app.$def.data.currentExposureAdLiveliness[_0x3064e3];
                      const _0x342e49 = _0x522a16.detailNative.getAppStatus({
                        adId: _0x522a16.detailData.adId
                      });
                      let _0x24548e = _0x2e78de.g.$utils.isDownloadAdFn(_0x5474fb, _0x522a16.detailData.creativeType);
                      if (_0x522a16.downloadType) {
                        if (_0x342e49 && "INSTALLED" === _0x342e49) {
                          _0x4ec314 = _0x47da86(_0x47da86({}, _0x522a16), {}, {
                            index: _0x3064e3,
                            downloadType: _0x522a16.downloadType
                          });
                          break;
                        }
                      } else {
                        if (_0x24548e && _0x342e49 && "INSTALLED" !== _0x342e49) {
                          _0x3a762a = _0x47da86(_0x47da86({}, _0x522a16), {}, {
                            index: _0x3064e3,
                            downloadType: _0x522a16.downloadType
                          });
                          continue;
                        }
                        _0x4ec314 = _0x47da86(_0x47da86({}, _0x522a16), {}, {
                          index: _0x3064e3,
                          downloadType: _0x522a16.downloadType
                        });
                      }
                    }
                    if ("{}" === JSON.stringify(_0x4ec314) && "{}" !== JSON.stringify(_0x3a762a) && (_0x4ec314 = _0x3a762a), "{}" !== JSON.stringify(_0x4ec314)) {
                      if (Date.now() - _0x5474fb.$app.$def.data.homeClickMillise < 1400) {
                        return void (_0x5474fb.$app.$def.data.homeClickMillise = 0);
                      }
                      _0x5474fb.$app.$def.data.homeClickMillise = Date.now();
                      _0x2e78de.g.$utils.coordinateAdClickMaterial(_0x5474fb, _0x4ec314.detailNative, _0x4ec314.detailData.adId);
                      _0x4ec314.downloadType || _0x5474fb.$app.$def.data.currentExposureAdLiveliness.splice(_0x4ec314.index, 1);
                      _0x5474fb.$app && _0x5474fb.$app.sensorsTrack("quickAppAdClick", _0x47da86(_0x47da86({}, _0x4ec314.reportInfo), {}, {
                        click_position: "home点击",
                        ad_appname: _0x4ec314.detailData.appName,
                        ad_source: _0x4ec314.detailData.source,
                        interaction_type: _0x4ec314.detailData.interactionType
                      }));
                      _0x5474fb.$app.$def.data.autoClickNum++;
                    }
                  }
                } catch (_0x1d92fa) {
                  console.log(_0x1d92fa);
                }
              },
              rangeArray(_0x806a7a, _0x5f4c64, _0xa95f25 = 1) {
                let _0x4c9cf5 = [];
                void 0 === _0x5f4c64 && (_0x5f4c64 = _0x806a7a, _0x806a7a = 0);
                for (let _0x19d900 = _0x806a7a; _0x19d900 < _0x5f4c64; _0x19d900 += _0xa95f25) {
                  _0x4c9cf5.push(_0x19d900);
                }
                return _0x4c9cf5;
              },
              async addNote(_0x46b057, _0x1a7fad) {
                console.log("add Note key is > ", "NotesList-" + _0x1a7fad);
                const _0x1068cc = await this._getStorage("NotesList-" + _0x1a7fad);
                await this._setStorage("NotesList-" + _0x1a7fad, [_0x46b057, ...JSON.parse(_0x1068cc || "[]")]);
              },
              async deletNotByCreatAt(_0x25de02) {
                const _0x473564 = new Date(_0x25de02),
                  _0x5dc0a7 = _0x473564.getFullYear(),
                  _0x304a00 = (_0x473564.getMonth() + 1).toString().padStart(2, "0"),
                  _0x40a07b = Number(_0x5dc0a7) + "-" + _0x304a00;
                let _0x30e8da = await this._getStorage("NotesList-" + _0x40a07b);
                if ("" != _0x30e8da) {
                  let _0x17dd8d = JSON.parse(_0x30e8da) || [];
                  for (let _0x4a3e6c = 0; _0x4a3e6c < _0x17dd8d.length; _0x4a3e6c++) {
                    if (_0x17dd8d[_0x4a3e6c].createdAt == _0x25de02) {
                      _0x17dd8d.splice(_0x4a3e6c, 1);
                      break;
                    }
                  }
                  await this._setStorage("NotesList-" + _0x40a07b, _0x17dd8d);
                }
              },
              async getNotes(_0x531114) {
                const _0x51965c = await this._getStorage("NotesList-" + _0x531114);
                if (console.log("getNotes", "NotesList-" + _0x531114), console.log("getNotes2", _0x51965c), "" == _0x51965c) {
                  return {
                    incomes: 0,
                    outcomes: 0,
                    balance: 0,
                    resultarray: []
                  };
                }
                let _0x55ef15 = JSON.parse(_0x51965c) || [];
                console.log("getNotes3", _0x51965c);
                let _0x5b65fe = _0x55ef15.filter(_0x586508 => _0x586508.dateCN.startsWith(_0x531114)).sort((_0x3765a8, _0x38e0cf) => _0x38e0cf.date - _0x3765a8.date);
                const _0x4615d7 = _0x5b65fe.filter(_0x35dddb => "income" === _0x35dddb.direction),
                  _0x326be6 = _0x5b65fe.filter(_0x12dc8a => "outcome" === _0x12dc8a.direction);
                let _0x3fef49 = _0x4615d7.reduce((_0x242dc1, _0xfd763a) => (console.log("e >>>", _0x242dc1), console.log("t >>>", _0xfd763a), _0x242dc1 + +_0xfd763a.amount), 0).toFixed(2),
                  _0x53047d = _0x326be6.reduce((_0x2d0712, _0x1230b4) => _0x2d0712 + +_0x1230b4.amount, 0).toFixed(2),
                  _0x57be88 = function (_0x40d7a3, _0xe0c21) {
                    const _0x20026f = {};
                    _0x40d7a3.map(_0x312c0a => {
                      (_0x20026f.hasOwnProperty(_0x312c0a[_0xe0c21]) || (_0x20026f[_0x312c0a[_0xe0c21]] = [])) && _0x20026f[_0x312c0a[_0xe0c21]].push(_0x312c0a);
                    });
                    return _0x20026f;
                  }(_0x5b65fe, "dateCN"),
                  _0x3c715b = [];
                Object.entries(_0x57be88).forEach(_0xd3e1ac => {
                  try {
                    const _0x24e58a = _0xd3e1ac[0],
                      _0x117cb4 = _0xd3e1ac[1],
                      _0x4aeb00 = _0x117cb4.filter(_0x4fba02 => "income" === _0x4fba02.direction),
                      _0x38d0ac = _0x117cb4.filter(_0x307073 => "outcome" === _0x307073.direction);
                    Date.parse(_0x24e58a);
                    let _0x3c719b = "";
                    _0x24e58a && "" != _0x24e58a && (_0x3c719b = _0x24e58a.split("-")[1] + "月" + _0x24e58a.split("-")[2] + "日");
                    console.log("resultArray  1", _0x3c719b);
                    let _0x32e54 = {
                        title: {
                          kind: "title",
                          left: "" + _0x3c719b,
                          right: "收入" + _0x4aeb00.reduce((_0x2922b0, _0x1efaf3) => _0x2922b0 + +_0x1efaf3.amount, 0).toFixed(2) + " 支出" + _0x38d0ac.reduce((_0x568c66, _0x4ce6d2) => _0x568c66 + +_0x4ce6d2.amount, 0).toFixed(2)
                        }
                      },
                      _0xdeb044 = [];
                    console.log("resultArray  2", JSON.stringify(_0x117cb4));
                    _0x117cb4.forEach(_0x54624b => {
                      _0xdeb044.push(_0x54624b);
                    });
                    _0x32e54.list = _0xdeb044;
                    _0x3c715b.push(_0x32e54);
                  } catch (_0x4b2282) {}
                });
                return {
                  incomes: _0x3fef49,
                  outcomes: _0x53047d,
                  balance: _0x3fef49 - _0x53047d,
                  resultarray: _0x3c715b
                };
              },
              addLayerIndex(_0x3b61a7, _0x4444df, _0xf41c8c) {
                _0x409b44 = (_0x409b44 + 1) % _0x540018.length;
                0 !== _0x409b44 ? this.getAd(_0x3b61a7, _0x4444df, _0xf41c8c) : this.huaweiROuterPull(_0x3b61a7, _0x4444df);
              },
              getAd(_0x86b0f6, _0xe35880, _0x4226b2) {
                let _0x41e7b8 = _0x540018[_0x409b44],
                  _0x2d4d87 = {
                    position: "插屏",
                    ad_space: "GG-312",
                    sdk_id: _0x41e7b8.sdkId,
                    adUnitId: _0x41e7b8.sdkSenseId,
                    ad_index: _0x409b44 + 1
                  };
                try {
                  _0x10b7ba && _0x10b7ba.destroy();
                } catch (_0x5e7e7b) {}
                _0x10b7ba = $app_require$("@app-module/service.ad").createInterstitialAd({
                  adUnitId: _0x2d4d87.adUnitId
                });
                let _0x15e1c7 = this;
                _0x10b7ba.onLoad(function () {
                  _0x15e1c7.log(_0x2d4d87, "成功");
                  _0x86b0f6.$app && _0x86b0f6.$app.sensorsTrack("quickAppAdLoad", _0x47da86(_0x47da86({}, _0x2d4d87), {}, {
                    ad_status: "1"
                  }));
                  _0x10b7ba.show().then(_0x4d4274 => {
                    _0x15e1c7.log(_0x2d4d87, "曝光");
                    _0x86b0f6.$app && _0x86b0f6.$app.sensorsTrack("quickAppAdShow", _0x2d4d87);
                  });
                  _0x10b7ba.offLoad();
                });
                _0x10b7ba.onError(_0x2209f0 => {
                  _0x86b0f6.$app && _0x86b0f6.$app.sensorsTrack("quickAppAdLoad", _0x47da86(_0x47da86({}, _0x2d4d87), {}, {
                    ad_status: "2",
                    details: JSON.stringify(_0x2209f0)
                  }));
                  _0x15e1c7.log(_0x2d4d87, "失败", _0x2209f0);
                  this.addLayerIndex(_0x86b0f6, _0xe35880, _0x4226b2);
                  _0x10b7ba.offError();
                });
                _0x10b7ba.onClick(() => {
                  _0x15e1c7.log(_0x2d4d87, "点击");
                  _0x86b0f6.$app && _0x86b0f6.$app.sensorsTrack("quickAppAdClick", _0x2d4d87);
                  _0x10b7ba.offClick();
                });
                _0x10b7ba.onClose(() => {
                  _0x15e1c7.log(_0x2d4d87, "关闭");
                  _0x10b7ba.offClose();
                  _0x10b7ba.destroy();
                });
                _0x15e1c7.log(_0x2d4d87, "请求");
                _0x10b7ba.load();
              },
              log(_0x3df8c0, _0xdf6239, _0x340ef0) {
                console.warn(_0x3df8c0.position + "-" + _0x3df8c0.ad_index + "层-" + _0x3df8c0.sdk_id + "-" + _0xdf6239, _0x340ef0);
              },
              async getADs(_0x1a6eae, _0x23b1e0, _0x3cc495) {
                let _0x4b64e5 = _0x1a6eae.$app.$def.data.adAllList["GG-312"];
                if (_0x4b64e5 && _0x4b64e5.length) {
                  _0x540018 = await _0x2e78de.g.$utils.setAdSpaceArr.call(_0x1a6eae, _0x4b64e5, !1);
                } else {
                  let _0x3b0beb = _0x1a6eae.$app.$def.data.commonParams,
                    _0x4ef956 = await _0x2e78de.g.$apis.ad.getAds({
                      appname: _0x3b0beb.appname,
                      packname: _0x3b0beb.packageName,
                      version: _0x3b0beb.version,
                      cnid: _0x3b0beb.channelCode,
                      advId: "GG-312",
                      userId: _0x3b0beb.userId,
                      net: "WIFI",
                      brand: _0x1a6eae.$app.$def.data.ad.adProvider.toLowerCase(),
                      manufactuter: _0x1a6eae.$app.$def.data.ad.adProvider.toLowerCase(),
                      imei: _0x3b0beb.imei,
                      oaid: _0x3b0beb.oaid,
                      platform: "android",
                      du: 2
                    });
                  _0x540018 = _0x4ef956.adList;
                }
                _0x540018 ? this.getAd(_0x1a6eae, _0x23b1e0, _0x3cc495) : this.huaweiROuterPull(_0x1a6eae, _0x23b1e0);
              },
              huaweiROuterPull(_0x4d2784, _0x23f2c5) {
                _0x4d2784.backWebShow = !0;
                _0x4d2784.backWebUrl = "https://web-bookstore.cread.com/openhuawei.html?packagename=" + _0x4d2784.$app.$def.manifest.package + "&page=" + _0x23f2c5 + "&source=openhuaweihtml";
              },
              complianceFn1: _0x1fa114 => new Promise((_0x16855f, _0x35357b) => {
                let _0x185566 = _0x2e78de.g.$utils.getAdConfig(_0x1fa114, "241", "String").split(",");
                _0x185566.length && _0x185566.forEach(_0x5c185f => {
                  let _0x18b1ff = _0x5c185f.split("&"),
                    _0xf6e58c = _0x1fa114.$app.$def.data.appInfo && _0x1fa114.$app.$def.data.appInfo.source,
                    _0x2f618a = _0x1fa114.$app.$def.data.ad.adProvider;
                  _0xf6e58c && _0xf6e58c.packageName === _0x18b1ff[0] && (_0x18b1ff.length > 1 && _0x18b1ff.includes(_0x2f618a) || _0x18b1ff.length <= 1) && _0x35357b("来源包名为配置241敏感应用--" + _0xf6e58c.packageName);
                });
              }),
              complianceFn2: _0x3af43a => new Promise(async (_0x3e49d3, _0x522a7b) => {
                if (_0x2e78de.g.$utils.getAdConfig(_0x3af43a, "249", "Boolean")) {
                  let _0x407f5b = await _0x2e78de.g.$utils.getBatteryInfo();
                  _0x407f5b && _0x407f5b.charging && 1 == _0x407f5b.level && _0x522a7b("配置249满电且充电状态");
                }
              }),
              complianceFn3: _0x204edf => new Promise((_0x110ec7, _0x3d118a) => {
                let _0xbe9e52 = _0x2e78de.g.$utils.getAdConfig(_0x204edf, "240", "String").split(",");
                _0x204edf.channelCode && _0xbe9e52.includes(_0x204edf.channelCode) && _0x3d118a("配置240渠道号--" + _0x204edf.channelCode);
              }),
              complianceFn4: _0x2d2530 => new Promise(async (_0x2be15f, _0x498975) => {
                let _0x1ec05a = _0x2e78de.g.$utils.getAdConfig(_0x2d2530, "243", "Number"),
                  _0xab975e = await _0x2e78de.g.$utils.shortcutHasInstalled(),
                  _0x240dd9 = await _0x2e78de.g.$utils._getStorage("read_time_today");
                if (_0x1ec05a && _0xab975e && _0x240dd9) {
                  _0x240dd9 = JSON.parse(_0x240dd9);
                  let _0x4cefb3 = new Date().Format("yyyy-MM-dd");
                  _0x240dd9[_0x4cefb3] && _0x240dd9[_0x4cefb3].readTime / 60000 > _0x1ec05a && (_0x2d2530.$app.$def.data.ad.open = !1, _0x498975("配置243满足阅读时长"));
                }
              }),
              complianceFn5: _0x276b94 => new Promise(async (_0x2756da, _0xf7db3) => {
                let _0x5bbc98 = await _0x2e78de.g.$utils._getStorage("install_test_app"),
                  _0x48fe12 = _0x2e78de.g.$utils.getAdConfig(_0x276b94, "251", "String");
                _0x5bbc98 && _0x48fe12 && -1 !== _0x48fe12.indexOf(_0x5bbc98) && _0xf7db3("手机安装本地缓存敏感应用--" + _0x5bbc98);
              }),
              complianceFn6: _0xfeccb4 => new Promise(async (_0x140184, _0x244269) => {
                let _0x12f660 = {
                  oppo: "269",
                  vivo: "270",
                  huawei: "271",
                  xiaomi: "272"
                };
                "HUAWEI" === _0xfeccb4.$app.$def.data.market_name_source && (_0x12f660.huawei = "344");
                let _0x3cc2ae = _0x2e78de.g.$utils.getAdConfig(_0xfeccb4, _0x12f660[_0xfeccb4.$app.$def.data.ad.adProvider], "Number");
                if (_0x3cc2ae) {
                  let _0xb54152 = _0x2e78de.g.$utils.timestampToDay(new Date().getTime()),
                    _0x2e1624 = await _0x2e78de.g.$utils._getStorage("hide_count_day");
                  _0x2e1624 && (_0x2e1624 = JSON.parse(_0x2e1624), _0x2e1624.time === _0xb54152 && _0x3cc2ae <= _0x2e1624.num && _0x244269("配置" + _0x12f660[_0xfeccb4.$app.$def.data.ad.adProvider] + "单人单日补点击次数达到上限"));
                }
              }),
              async complianceFn7(_0x272683) {
                let _0x383eee = await _0x2e78de.g.$utils.getAdConfig(_0x272683, "251", "String"),
                  _0x2b6c94 = _0x383eee.split(","),
                  _0x12daff = [];
                _0x383eee && _0x2b6c94.length && (_0x12daff = _0x2b6c94.map(_0x5070dd => _0x2e78de.g.$utils.pkgInstalledJudge(_0x5070dd)));
                return _0x12daff;
              }
            };
            _0x46f54b.default = _0x5a107d;
          },
          39505: (_0x3509f8, _0x2eb669, _0x34b1fc) => {
            'use strict';

            (Object.getPrototypeOf(_0x34b1fc.g) || _0x34b1fc.g).regeneratorRuntime = _0x34b1fc(1136);
          },
          18465: (_0x4efed2, _0x28d428, _0x3bbebd) => {
            var _0x4074eb = {
              "./ad.js": 43687,
              "./audioPlayer.js": 41093,
              "./bookShelf.js": 45722,
              "./bookstore.js": 56629,
              "./fission.js": 61653,
              "./idiom.js": 10212,
              "./index.js": 61247,
              "./integral.js": 84408,
              "./others.js": 32139,
              "./payApi.js": 57614,
              "./ranking.js": 32980,
              "./recommend.js": 46895,
              "./search.js": 80240,
              "./user.js": 97556,
              "./vip.js": 57696,
              "./welfareTask.js": 56068,
              "./withdraw.js": 75055
            };
            function _0x2ac14f(_0x5491b4) {
              var _0x4f6799 = _0x59141a(_0x5491b4);
              return _0x3bbebd(_0x4f6799);
            }
            function _0x59141a(_0x734fa3) {
              if (!_0x3bbebd.o(_0x4074eb, _0x734fa3)) {
                var _0x297013 = new Error("Cannot find module '" + _0x734fa3 + "'");
                throw _0x297013.code = "MODULE_NOT_FOUND", _0x297013;
              }
              return _0x4074eb[_0x734fa3];
            }
            _0x2ac14f.keys = function () {
              return Object.keys(_0x4074eb);
            };
            _0x2ac14f.resolve = _0x59141a;
            _0x4efed2.exports = _0x2ac14f;
            _0x2ac14f.id = 18465;
          },
          88201: (_0x4b8c66, _0x293337, _0x244a84) => {
            var _0xf32d = {
              "./ad.js": 89957,
              "./addToBookshelf.js": 64919,
              "./array.js": 14366,
              "./chaptersContent.js": 71397,
              "./datetime.js": 94074,
              "./des.js": 91491,
              "./env.js": 3409,
              "./index.js": 170,
              "./localBookReaderInfo.js": 6996,
              "./page.js": 93182,
              "./promised.js": 96497,
              "./string.js": 56352,
              "./system.js": 89918,
              "./timestamp.js": 9241,
              "./utils.js": 31377
            };
            function _0x1433f4(_0x2102b7) {
              var _0x2d3021 = _0x1f2b6b(_0x2102b7);
              return _0x244a84(_0x2d3021);
            }
            function _0x1f2b6b(_0xc2b681) {
              if (!_0x244a84.o(_0xf32d, _0xc2b681)) {
                var _0x506138 = new Error("Cannot find module '" + _0xc2b681 + "'");
                throw _0x506138.code = "MODULE_NOT_FOUND", _0x506138;
              }
              return _0xf32d[_0xc2b681];
            }
            _0x1433f4.keys = function () {
              return Object.keys(_0xf32d);
            };
            _0x1433f4.resolve = _0x1f2b6b;
            _0x4b8c66.exports = _0x1433f4;
            _0x1433f4.id = 88201;
          },
          42480: () => {},
          9984: (_0x1863d1, _0x16553e, _0xb46f05) => {
            'use strict';

            var _0x291a49 = _0xb46f05(8149).default;
            function _0x3aac32() {
              _0x1863d1.exports = _0x3aac32 = function () {
                return _0x587123;
              };
              _0x1863d1.exports.__esModule = !0;
              _0x1863d1.exports.default = _0x1863d1.exports;
              var _0x587123 = {},
                _0x3b6ae4 = Object.prototype,
                _0x18776b = _0x3b6ae4.hasOwnProperty,
                _0x4a28a5 = "function" == typeof Symbol ? Symbol : {},
                _0x29ca09 = _0x4a28a5.iterator || "@@iterator",
                _0x18a4a2 = _0x4a28a5.asyncIterator || "@@asyncIterator",
                _0x4283b3 = _0x4a28a5.toStringTag || "@@toStringTag";
              function _0x4756d5(_0x16bfa0, _0x1ed7e3, _0x24ad88) {
                Object.defineProperty(_0x16bfa0, _0x1ed7e3, {
                  value: _0x24ad88,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                });
                return _0x16bfa0[_0x1ed7e3];
              }
              try {
                _0x4756d5({}, "");
              } catch (_0x3d6e50) {
                _0x4756d5 = function (_0x47ab9e, _0x8925a6, _0x3209c9) {
                  return _0x47ab9e[_0x8925a6] = _0x3209c9;
                };
              }
              function _0x3cd416(_0x2c6d96, _0x20e6a9, _0x4ac808, _0x250c68) {
                var _0x43ebab = _0x20e6a9 && _0x20e6a9.prototype instanceof _0x2aff90 ? _0x20e6a9 : _0x2aff90,
                  _0x3392dc = Object.create(_0x43ebab.prototype),
                  _0x4eadc1 = new _0x49d9f0(_0x250c68 || []);
                _0x3392dc._invoke = function (_0x2045ca, _0x2dce36, _0x1800c9) {
                  var _0x31259d = "suspendedStart";
                  return function (_0x4af8f5, _0x23dc73) {
                    if ("executing" === _0x31259d) {
                      throw new Error("Generator is already running");
                    }
                    if ("completed" === _0x31259d) {
                      if ("throw" === _0x4af8f5) {
                        throw _0x23dc73;
                      }
                      return {
                        value: void 0,
                        done: !0
                      };
                    }
                    for (_0x1800c9.method = _0x4af8f5, _0x1800c9.arg = _0x23dc73;;) {
                      var _0x4bf3ba = _0x1800c9.delegate;
                      if (_0x4bf3ba) {
                        var _0x38915d = _0x2b5273(_0x4bf3ba, _0x1800c9);
                        if (_0x38915d) {
                          if (_0x38915d === _0x248655) {
                            continue;
                          }
                          return _0x38915d;
                        }
                      }
                      if ("next" === _0x1800c9.method) {
                        _0x1800c9.sent = _0x1800c9._sent = _0x1800c9.arg;
                      } else {
                        if ("throw" === _0x1800c9.method) {
                          if ("suspendedStart" === _0x31259d) {
                            throw _0x31259d = "completed", _0x1800c9.arg;
                          }
                          _0x1800c9.dispatchException(_0x1800c9.arg);
                        } else {
                          "return" === _0x1800c9.method && _0x1800c9.abrupt("return", _0x1800c9.arg);
                        }
                      }
                      _0x31259d = "executing";
                      var _0x325fb5 = _0x31a7a9(_0x2045ca, _0x2dce36, _0x1800c9);
                      if ("normal" === _0x325fb5.type) {
                        if (_0x31259d = _0x1800c9.done ? "completed" : "suspendedYield", _0x325fb5.arg === _0x248655) {
                          continue;
                        }
                        return {
                          value: _0x325fb5.arg,
                          done: _0x1800c9.done
                        };
                      }
                      "throw" === _0x325fb5.type && (_0x31259d = "completed", _0x1800c9.method = "throw", _0x1800c9.arg = _0x325fb5.arg);
                    }
                  };
                }(_0x2c6d96, _0x4ac808, _0x4eadc1);
                return _0x3392dc;
              }
              function _0x31a7a9(_0x2d869f, _0x3530ed, _0x12bf20) {
                try {
                  return {
                    type: "normal",
                    arg: _0x2d869f.call(_0x3530ed, _0x12bf20)
                  };
                } catch (_0x443493) {
                  return {
                    type: "throw",
                    arg: _0x443493
                  };
                }
              }
              _0x587123.wrap = _0x3cd416;
              var _0x248655 = {};
              function _0x2aff90() {}
              function _0x556b17() {}
              function _0x313e89() {}
              var _0x2ac4c8 = {};
              _0x4756d5(_0x2ac4c8, _0x29ca09, function () {
                return this;
              });
              var _0x59e7cf = Object.getPrototypeOf,
                _0x3b7876 = _0x59e7cf && _0x59e7cf(_0x59e7cf(_0x458974([])));
              _0x3b7876 && _0x3b7876 !== _0x3b6ae4 && _0x18776b.call(_0x3b7876, _0x29ca09) && (_0x2ac4c8 = _0x3b7876);
              _0x313e89.prototype = _0x2aff90.prototype = Object.create(_0x2ac4c8);
              var _0x57a94f = _0x313e89.prototype;
              function _0x2d7f4c(_0x1c272d) {
                ["next", "throw", "return"].forEach(function (_0xdb521) {
                  _0x4756d5(_0x1c272d, _0xdb521, function (_0x13308c) {
                    return this._invoke(_0xdb521, _0x13308c);
                  });
                });
              }
              function _0xd6d791(_0x39fd3e, _0x3efe81) {
                function _0xae3bb8(_0x2d559f, _0x51632a, _0x9a7ef5, _0x531b12) {
                  var _0x7d33a8 = _0x31a7a9(_0x39fd3e[_0x2d559f], _0x39fd3e, _0x51632a);
                  if ("throw" !== _0x7d33a8.type) {
                    var _0x55a2c3 = _0x7d33a8.arg,
                      _0xb65839 = _0x55a2c3.value;
                    return _0xb65839 && "object" == _0x291a49(_0xb65839) && _0x18776b.call(_0xb65839, "__await") ? _0x3efe81.resolve(_0xb65839.__await).then(function (_0x5c284b) {
                      _0xae3bb8("next", _0x5c284b, _0x9a7ef5, _0x531b12);
                    }, function (_0x41e862) {
                      _0xae3bb8("throw", _0x41e862, _0x9a7ef5, _0x531b12);
                    }) : _0x3efe81.resolve(_0xb65839).then(function (_0x5465ad) {
                      _0x55a2c3.value = _0x5465ad;
                      _0x9a7ef5(_0x55a2c3);
                    }, function (_0x487cfc) {
                      return _0xae3bb8("throw", _0x487cfc, _0x9a7ef5, _0x531b12);
                    });
                  }
                  _0x531b12(_0x7d33a8.arg);
                }
                var _0x28022c;
                this._invoke = function (_0x25ce4c, _0x2f9f0d) {
                  function _0x5bf377() {
                    return new _0x3efe81(function (_0x3ebcf2, _0xa18b83) {
                      _0xae3bb8(_0x25ce4c, _0x2f9f0d, _0x3ebcf2, _0xa18b83);
                    });
                  }
                  return _0x28022c = _0x28022c ? _0x28022c.then(_0x5bf377, _0x5bf377) : _0x5bf377();
                };
              }
              function _0x2b5273(_0x2043e1, _0x238974) {
                var _0x1fd850 = _0x2043e1.iterator[_0x238974.method];
                if (void 0 === _0x1fd850) {
                  if (_0x238974.delegate = null, "throw" === _0x238974.method) {
                    if (_0x2043e1.iterator.return && (_0x238974.method = "return", _0x238974.arg = void 0, _0x2b5273(_0x2043e1, _0x238974), "throw" === _0x238974.method)) {
                      return _0x248655;
                    }
                    _0x238974.method = "throw";
                    _0x238974.arg = new TypeError("The iterator does not provide a 'throw' method");
                  }
                  return _0x248655;
                }
                var _0xca5140 = _0x31a7a9(_0x1fd850, _0x2043e1.iterator, _0x238974.arg);
                if ("throw" === _0xca5140.type) {
                  _0x238974.method = "throw";
                  _0x238974.arg = _0xca5140.arg;
                  _0x238974.delegate = null;
                  return _0x248655;
                }
                var _0xe147df = _0xca5140.arg;
                return _0xe147df ? _0xe147df.done ? (_0x238974[_0x2043e1.resultName] = _0xe147df.value, _0x238974.next = _0x2043e1.nextLoc, "return" !== _0x238974.method && (_0x238974.method = "next", _0x238974.arg = void 0), _0x238974.delegate = null, _0x248655) : _0xe147df : (_0x238974.method = "throw", _0x238974.arg = new TypeError("iterator result is not an object"), _0x238974.delegate = null, _0x248655);
              }
              function _0x5a7a52(_0x2c0b74) {
                var _0x2808b4 = {
                  tryLoc: _0x2c0b74[0],
                  catchLoc: _0x2c0b74[1],
                  finallyLoc: _0x2c0b74[2],
                  afterLoc: _0x2c0b74[3]
                };
                1 in _0x2c0b74;
                2 in _0x2c0b74;
                this.tryEntries.push(_0x2808b4);
              }
              function _0x39c3f6(_0x1772e) {
                var _0x5ef2a5 = _0x1772e.completion || {};
                _0x5ef2a5.type = "normal";
                delete _0x5ef2a5.arg;
                _0x1772e.completion = _0x5ef2a5;
              }
              function _0x49d9f0(_0x1fda14) {
                this.tryEntries = [{
                  tryLoc: "root"
                }];
                _0x1fda14.forEach(_0x5a7a52, this);
                this.reset(!0);
              }
              function _0x458974(_0x4ec7db) {
                if (_0x4ec7db) {
                  var _0x415c41 = _0x4ec7db[_0x29ca09];
                  if (_0x415c41) {
                    return _0x415c41.call(_0x4ec7db);
                  }
                  if ("function" == typeof _0x4ec7db.next) {
                    return _0x4ec7db;
                  }
                  if (!isNaN(_0x4ec7db.length)) {
                    var _0x322cc0 = -1,
                      _0x1f7884 = function _0x22efd5() {
                        for (; ++_0x322cc0 < _0x4ec7db.length;) {
                          if (_0x18776b.call(_0x4ec7db, _0x322cc0)) {
                            _0x22efd5.value = _0x4ec7db[_0x322cc0];
                            _0x22efd5.done = !1;
                            return _0x22efd5;
                          }
                        }
                        _0x22efd5.value = void 0;
                        _0x22efd5.done = !0;
                        return _0x22efd5;
                      };
                    return _0x1f7884.next = _0x1f7884;
                  }
                }
                return {
                  next: _0x27440e
                };
              }
              function _0x27440e() {
                return {
                  value: void 0,
                  done: !0
                };
              }
              _0x556b17.prototype = _0x313e89;
              _0x4756d5(_0x57a94f, "constructor", _0x313e89);
              _0x4756d5(_0x313e89, "constructor", _0x556b17);
              _0x556b17.displayName = _0x4756d5(_0x313e89, _0x4283b3, "GeneratorFunction");
              _0x587123.isGeneratorFunction = function (_0x535a50) {
                var _0x35ef85 = "function" == typeof _0x535a50 && _0x535a50.constructor;
                return !!_0x35ef85 && (_0x35ef85 === _0x556b17 || "GeneratorFunction" === (_0x35ef85.displayName || _0x35ef85.name));
              };
              _0x587123.mark = function (_0x4310bc) {
                Object.setPrototypeOf ? Object.setPrototypeOf(_0x4310bc, _0x313e89) : (_0x4310bc.__proto__ = _0x313e89, _0x4756d5(_0x4310bc, _0x4283b3, "GeneratorFunction"));
                _0x4310bc.prototype = Object.create(_0x57a94f);
                return _0x4310bc;
              };
              _0x587123.awrap = function (_0x322e05) {
                return {
                  __await: _0x322e05
                };
              };
              _0x2d7f4c(_0xd6d791.prototype);
              _0x4756d5(_0xd6d791.prototype, _0x18a4a2, function () {
                return this;
              });
              _0x587123.AsyncIterator = _0xd6d791;
              _0x587123.async = function (_0x2c1852, _0x22ba5a, _0x2549b1, _0x15ddb4, _0x3cb55c) {
                void 0 === _0x3cb55c && (_0x3cb55c = Promise);
                var _0x52cd2b = new _0xd6d791(_0x3cd416(_0x2c1852, _0x22ba5a, _0x2549b1, _0x15ddb4), _0x3cb55c);
                return _0x587123.isGeneratorFunction(_0x22ba5a) ? _0x52cd2b : _0x52cd2b.next().then(function (_0x49266e) {
                  return _0x49266e.done ? _0x49266e.value : _0x52cd2b.next();
                });
              };
              _0x2d7f4c(_0x57a94f);
              _0x4756d5(_0x57a94f, _0x4283b3, "Generator");
              _0x4756d5(_0x57a94f, _0x29ca09, function () {
                return this;
              });
              _0x4756d5(_0x57a94f, "toString", function () {
                return "[object Generator]";
              });
              _0x587123.keys = function (_0x48c2b5) {
                var _0x56d83f = [];
                for (var _0x298367 in _0x48c2b5) _0x56d83f.push(_0x298367);
                _0x56d83f.reverse();
                return function _0x82d169() {
                  for (; _0x56d83f.length;) {
                    var _0x3b054b = _0x56d83f.pop();
                    if (_0x3b054b in _0x48c2b5) {
                      _0x82d169.value = _0x3b054b;
                      _0x82d169.done = !1;
                      return _0x82d169;
                    }
                  }
                  _0x82d169.done = !0;
                  return _0x82d169;
                };
              };
              _0x587123.values = _0x458974;
              _0x49d9f0.prototype = {
                constructor: _0x49d9f0,
                reset: function (_0x2f19af) {
                  if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_0x39c3f6), !_0x2f19af) {
                    for (var _0x5936fc in this) "t" === _0x5936fc.charAt(0) && _0x18776b.call(this, _0x5936fc) && !isNaN(+_0x5936fc.slice(1)) && (this[_0x5936fc] = void 0);
                  }
                },
                stop: function () {
                  this.done = !0;
                  var _0x289a47 = this.tryEntries[0].completion;
                  if ("throw" === _0x289a47.type) {
                    throw _0x289a47.arg;
                  }
                  return this.rval;
                },
                dispatchException: function (_0x5a4313) {
                  if (this.done) {
                    throw _0x5a4313;
                  }
                  var _0x303cfa = this;
                  function _0x4091c8(_0x1b9912, _0x1f5976) {
                    _0x8e2cf6.type = "throw";
                    _0x8e2cf6.arg = _0x5a4313;
                    _0x303cfa.next = _0x1b9912;
                    _0x1f5976 && (_0x303cfa.method = "next", _0x303cfa.arg = void 0);
                    return !!_0x1f5976;
                  }
                  for (var _0x2813d0 = this.tryEntries.length - 1; _0x2813d0 >= 0; --_0x2813d0) {
                    var _0x53c682 = this.tryEntries[_0x2813d0],
                      _0x8e2cf6 = _0x53c682.completion;
                    if ("root" === _0x53c682.tryLoc) {
                      return _0x4091c8("end");
                    }
                    if (_0x53c682.tryLoc <= this.prev) {
                      var _0x1ef9f = _0x18776b.call(_0x53c682, "catchLoc"),
                        _0x5e22e9 = _0x18776b.call(_0x53c682, "finallyLoc");
                      if (_0x1ef9f && _0x5e22e9) {
                        if (this.prev < _0x53c682.catchLoc) {
                          return _0x4091c8(_0x53c682.catchLoc, !0);
                        }
                        if (this.prev < _0x53c682.finallyLoc) {
                          return _0x4091c8(_0x53c682.finallyLoc);
                        }
                      } else {
                        if (_0x1ef9f) {
                          if (this.prev < _0x53c682.catchLoc) {
                            return _0x4091c8(_0x53c682.catchLoc, !0);
                          }
                        } else {
                          if (!_0x5e22e9) {
                            throw new Error("try statement without catch or finally");
                          }
                          if (this.prev < _0x53c682.finallyLoc) {
                            return _0x4091c8(_0x53c682.finallyLoc);
                          }
                        }
                      }
                    }
                  }
                },
                abrupt: function (_0x23b162, _0x275a2c) {
                  for (var _0xb496bf = this.tryEntries.length - 1; _0xb496bf >= 0; --_0xb496bf) {
                    var _0x3c63b5 = this.tryEntries[_0xb496bf];
                    if (_0x3c63b5.tryLoc <= this.prev && _0x18776b.call(_0x3c63b5, "finallyLoc") && this.prev < _0x3c63b5.finallyLoc) {
                      var _0x1889fb = _0x3c63b5;
                      break;
                    }
                  }
                  _0x1889fb && ("break" === _0x23b162 || "continue" === _0x23b162) && _0x1889fb.tryLoc <= _0x275a2c && _0x275a2c <= _0x1889fb.finallyLoc && (_0x1889fb = null);
                  var _0x2abaee = _0x1889fb ? _0x1889fb.completion : {};
                  _0x2abaee.type = _0x23b162;
                  _0x2abaee.arg = _0x275a2c;
                  return _0x1889fb ? (this.method = "next", this.next = _0x1889fb.finallyLoc, _0x248655) : this.complete(_0x2abaee);
                },
                complete: function (_0x1a4d39, _0x37ba9b) {
                  if ("throw" === _0x1a4d39.type) {
                    throw _0x1a4d39.arg;
                  }
                  "break" === _0x1a4d39.type || "continue" === _0x1a4d39.type ? this.next = _0x1a4d39.arg : "return" === _0x1a4d39.type ? (this.rval = this.arg = _0x1a4d39.arg, this.method = "return", this.next = "end") : "normal" === _0x1a4d39.type && _0x37ba9b && (this.next = _0x37ba9b);
                  return _0x248655;
                },
                finish: function (_0x1e59c0) {
                  for (var _0x2253f1 = this.tryEntries.length - 1; _0x2253f1 >= 0; --_0x2253f1) {
                    var _0x5e7efa = this.tryEntries[_0x2253f1];
                    if (_0x5e7efa.finallyLoc === _0x1e59c0) {
                      this.complete(_0x5e7efa.completion, _0x5e7efa.afterLoc);
                      _0x39c3f6(_0x5e7efa);
                      return _0x248655;
                    }
                  }
                },
                catch: function (_0x21f966) {
                  for (var _0x5ba6e4 = this.tryEntries.length - 1; _0x5ba6e4 >= 0; --_0x5ba6e4) {
                    var _0x386246 = this.tryEntries[_0x5ba6e4];
                    if (_0x386246.tryLoc === _0x21f966) {
                      var _0x3b4476 = _0x386246.completion;
                      if ("throw" === _0x3b4476.type) {
                        var _0x5e5fb7 = _0x3b4476.arg;
                        _0x39c3f6(_0x386246);
                      }
                      return _0x5e5fb7;
                    }
                  }
                  throw new Error("illegal catch attempt");
                },
                delegateYield: function (_0x433c8e, _0x356dff, _0x210bb3) {
                  this.delegate = {
                    iterator: _0x458974(_0x433c8e),
                    resultName: _0x356dff,
                    nextLoc: _0x210bb3
                  };
                  "next" === this.method && (this.arg = void 0);
                  return _0x248655;
                }
              };
              return _0x587123;
            }
            _0x1863d1.exports = _0x3aac32;
            _0x1863d1.exports.__esModule = !0;
            _0x1863d1.exports.default = _0x1863d1.exports;
          },
          8149: _0x1f184f => {
            'use strict';

            function _0x4fa6fc(_0x4cd475) {
              _0x1f184f.exports = _0x4fa6fc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x52f4c9) {
                return typeof _0x52f4c9;
              } : function (_0x52514d) {
                return _0x52514d && "function" == typeof Symbol && _0x52514d.constructor === Symbol && _0x52514d !== Symbol.prototype ? "symbol" : typeof _0x52514d;
              };
              _0x1f184f.exports.__esModule = !0;
              _0x1f184f.exports.default = _0x1f184f.exports;
              return _0x4fa6fc(_0x4cd475);
            }
            _0x1f184f.exports = _0x4fa6fc;
            _0x1f184f.exports.__esModule = !0;
            _0x1f184f.exports.default = _0x1f184f.exports;
          },
          1136: (_0x2dc840, _0x27e553, _0x4426f7) => {
            'use strict';

            var _0x12d1b5 = _0x4426f7(9984)();
            _0x2dc840.exports = _0x12d1b5;
            try {
              regeneratorRuntime = _0x12d1b5;
            } catch (_0x39b4dd) {
              "object" == typeof globalThis ? globalThis.regeneratorRuntime = _0x12d1b5 : Function("r", "regeneratorRuntime = r")(_0x12d1b5);
            }
          },
          3447: _0x1c6a77 => {
            'use strict';

            _0x1c6a77.exports = JSON.parse("{\"package\":\"com.haizhuishu.quickapp\",\"name\":\"嗨追书\",\"versionName\":\"7.0.4\",\"versionCode\":704,\"minPlatformVersion\":1070,\"icon\":\"/assets/logo.png\",\"appId\":\"65\",\"appKey\":\"8dfbdf10-d195-45a6-85a8-a7f8307681f9\",\"features\":[{\"name\":\"system.vivopush\"},{\"name\":\"service.ad\"},{\"name\":\"system.prompt\"},{\"name\":\"system.router\"},{\"name\":\"system.device\"},{\"name\":\"system.wifi\"},{\"name\":\"system.shortcut\"},{\"name\":\"system.fetch\"},{\"name\":\"system.storage\"},{\"name\":\"system.brightness\"},{\"name\":\"system.webview\"},{\"name\":\"system.request\"},{\"name\":\"system.file\"},{\"name\":\"service.share\",\"params\":{\"appSign\":\"MIIDazCCAlOgAwIBAgIESeyrwzANBgkqhkiG9w0BAQsFADBmMQ8wDQYDVQQGEwZpd2FudmkxDzANBgNVBAgTBml3YW52aTEPMA0GA1UEBxMGaXdhbnZpMQ8wDQYDVQQKEwZpd2FudmkxDzANBgNVBAsTBml3YW52aTEPMA0GA1UEAxMGaXdhbnZpMB4XDTE5MTAyNTA5MDcwNVoXDTQ3MDMxMjA5MDcwNVowZjEPMA0GA1UEBhMGaXdhbnZpMQ8wDQYDVQQIEwZpd2FudmkxDzANBgNVBAcTBml3YW52aTEPMA0GA1UEChMGaXdhbnZpMQ8wDQYDVQQLEwZpd2FudmkxDzANBgNVBAMTBml3YW52aTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKdJN8V/cefT9BXyrZlIP+Uf+If4ZYr2cH4P1xsLzXifOth8RI//SWVQTE4EF9oUx0ot5q3qzTNzPi3nYGVsZbHJwduqvnqt5ionEcrZcrqN4jrznOyUu6FCLdlnJgbLvUkvLBjZVkNMEW0y2GuAJKF6BWTJOWNg0Z+UYk393dNMbTSbsFqqpX4zxQGnDN1q20/IOFUNJTivPbncsLm6Wz/EQe7JSUNssraTgViHeLRhsE7dL+ItdWIy50X9dIbgjN5WfN9ybc2wDASfZjIr/cWA2G/YxRJSC5J+AkCIGBh8i4kQoqSLZVc/vckgdhJKgoIQWXRr39qlKoZZYOzewK0CAwEAAaMhMB8wHQYDVR0OBBYEFJRWFwXBA4ZUqRFV1RxhSbaqa4AKMA0GCSqGSIb3DQEBCwUAA4IBAQBDtOaioRnC3/Qc6rqwiLA93tEHYXckQ2KA3zd/aox+06RRhvSnXyDWh+4wxCVses2I90jrkJWtUogjdXLA9wfcauvkESdo4+e90fRFyKBqErMrWKWkoafGFiLFAJ0Act4TSBPtxex4mqIaRctZ3M1b3o+pRrdJ7O/1098vDxkzI86u10l5XYWBW3qSuIWKnS4yvguIJvKgm9PmIenZM1XMF7yY12dZAbEYn2DkWw0FYB1p1F1HxG0V5MzijwIuuQqR8VU7/dTY8CdtBUdMXYfbrcsVsq4bDstedN+XYuxNT387RbIiE8Eot5cFUPV5s7JMRBAE4nAijT+GDCVQ+sGD\",\"wxKey\":\"wx964898ce24c8f525\",\"qqKey\":\"101923908\"}},{\"name\":\"service.wxaccount\",\"params\":{\"appId\":\"wx964898ce24c8f525\"}},{\"name\":\"service.wxpay\",\"params\":{\"url\":\"http://bookstore-lightapp-manage.cread.com/wxPay/quickPayPage\"}},{\"name\":\"service.alipay\"},{\"name\":\"system.clipboard\"},{\"name\":\"service.push\"},{\"name\":\"system.media\"},{\"name\":\"service.account\"},{\"name\":\"system.package\"},{\"name\":\"system.notification\"},{\"name\":\"system.vibrator\"},{\"name\":\"system.image\"},{\"name\":\"system.battery\"},{\"name\":\"system.geolocation\"},{\"name\":\"system.network\"},{\"name\":\"service.push\"},{\"name\":\"system.resident\"}],\"permissions\":[{\"origin\":\"*\"}],\"config\":{\"logLevel\":\"debug\",\"designWidth\":720,\"network\":{\"connectTimeout\":2000,\"readTimeout\":2000,\"writeTimeout\":2000},\"background\":{\"features\":[\"system.audio\"]},\"data\":{\"umeng_appkey\":\"5da6b331570df3f297000c74\",\"imgCdn\":\"https://images-pro.cread.com/book_covers/\",\"themeColor\":\"#ff7f40\",\"baidu_appid\":\"c809bb25\",\"appname\":\"hzs\",\"copyright\":\"中文万维\",\"record\":\"京ICP备15043009号-5K\",\"userAgreement\":\"https://h5-freebook-new.cread.com/clause?appname=quickapp_hzs\",\"privacyPolicy\":\"https://h5-freebook-new.cread.com/privacyPolicy?appname=quickapp_hzs\",\"childProtection\":\"https://h5-freebook-new.cread.com/childrenPolicy?appname=quickapp_hzs\",\"img\":{\"default_null\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220120134340139.png\",\"male\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220120141226735.png\",\"male_active\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220120141245479.png\",\"female\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220120141303245.png\",\"female_active\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220209114201486.png\",\"fission_banner\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220120144418991.png\",\"fission_progress\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220120144434133.png\",\"fission_notice_icon\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220120144451929.png\",\"desktop_shortcut\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421114614279.png\",\"red_packet_20200203\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421114654636.png\",\"float_shortcut\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421114743732.png\",\"red_packet_open\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421114813947.png\",\"logo_b\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421114844016.png\",\"logo\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421114912604.png\",\"start_logo\":\"http://images-pro.cread.com/images/bookstore-lightapp/20231214161216665.jpg\",\"fission_item_bg\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421114945502.png\",\"bg_btn\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421115018681.png\",\"vip_ad\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421115116006.png\",\"vip_king\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421115143095.png\",\"vip_service\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421115217116.png\",\"icon_sign\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421115247482.png\",\"icon_fission\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421115321795.png\",\"bg_vip_card\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421115357000.png\",\"huangguan_active\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421115444869.png\",\"exchange_bg\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421115520952.png\",\"vip_card_fg\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421115549493.png\",\"loading\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421115631901.gif\",\"vip_default\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421115659052.png\",\"banner_new\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421115725695.png\",\"signIn_success\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421115756868.png\",\"signIn_un\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421115825812.png\",\"signIn_gift\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421115853082.png\",\"baoxiang\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220421115922294.png\",\"baoxiang_finished_bg\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230908100700330.png\",\"ad_bg_small\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220608152016804.png\",\"qiandao\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220608152601847.png\",\"desktop_logo\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220608160405546.png\",\"tab_bookshelf\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230131183628014.png\",\"tab_bookshelf_active\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220608161747541.png\",\"tab_bookstore\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230131183644688.png\",\"tab_bookstore_active\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220608161810619.png\",\"tab_welfare\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230327163131414.png\",\"tab_welfare_active\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220608161827985.png\",\"tab_mine\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230131183716505.png\",\"tab_mine_active\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220608161854163.png\",\"kaiping_shake\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230208151304782.png\",\"ad_xiaomi_icon\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230216154141921.png\",\"ad_huawei_icon\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230308172114381.png\",\"ad_oppo_icon\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230308172131726.png\",\"ad_vivo_icon\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230308172143331.png\",\"ad_ylh_sdk_icon\":\"https://qzs.gdtimg.com/union/res/union_cdn/page/ams_icon/ams_logo_dark.png\",\"complaint_img\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230223165211590.png\",\"newWelfare_one_1\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230602135516105.png\",\"newWelfare_one_2\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230602161803918.png\",\"newWelfare_one_3\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230608131624568.png\",\"newWelfare_two\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230301161141093.png\",\"newWelfare_feedback\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230301161154689.png\",\"newWelfare_help\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230301161206973.png\",\"newWelfareTwo_feedback\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230803100021350.png\",\"newWelfareTwo_help\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230803100038200.png\",\"ad_free_background\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230421145121035.png\",\"simulate_out\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230620133657007.png\",\"feedback_success\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230517152411854.png\",\"head_img\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230608165344634.png\",\"ad_top_star\":\"http://images-pro.cread.com/images/bookstore-lightapp/20220810162008033.png\",\"newWelfareTwo_one_1\":\"http://images-pro.cread.com/images/bookstore-lightapp/20240105140629251.png\",\"newWelfareTwo_one_2\":\"http://images-pro.cread.com/images/bookstore-lightapp/20240105140701553.png\",\"newWelfareTwo_one_3\":\"http://images-pro.cread.com/images/bookstore-lightapp/20240105140728656.png\",\"newWelfareTwo_one_4\":\"http://images-pro.cread.com/images/bookstore-lightapp/20240222161526167.jpeg\",\"newWelfareTwo_pop_1\":\"http://images-pro.cread.com/images/bookstore-lightapp/20231218185902491.png\",\"newWelfareTwo_pop_2\":\"http://images-pro.cread.com/images/bookstore-lightapp/20240110103342365.png\",\"newWelfareTwo_pop_3\":\"http://images-pro.cread.com/images/bookstore-lightapp/20231218185930388.png\",\"newWelfareTwo_pop_4\":\"http://images-pro.cread.com/images/bookstore-lightapp/20231218185944065.png\",\"newWelfareTwo_pop_5\":\"http://images-pro.cread.com/images/bookstore-lightapp/20240222161540657.png\",\"newWelfareTwo_btn_1\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230703172815597.png\",\"newWelfareTwo_btn_2\":\"http://images-pro.cread.com/images/bookstore-lightapp/20231219161703598.png\",\"newWelfareTwo_btn_3\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230703172851232.png\",\"newWelfareTwo_btn_4\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230809153139697.png\",\"newWelfareTwo_btn_5\":\"http://images-pro.cread.com/images/bookstore-lightapp/20240222161557634.png\",\"no_network_back_1\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230705102738693.jpg\",\"no_network_back_2\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230705103431692.jpg\",\"no_network_back_3\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230705103445682.jpg\",\"shake_page_shake_1\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230718190016616.jpg\",\"shake_page_shake_2\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230719104315400.jpg\",\"shake_page_shake_3\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230719104410160.jpg\",\"fake_menubar\":\"http://images-pro.cread.com/images/bookstore-lightapp/20230803100452191.png\"}}},\"router\":{\"entry\":\"pages/Page_Index\",\"pages\":{\"UnionAd/AdPage\":{\"component\":\"index\"},\"UnionAd/AdLanding\":{\"component\":\"index\"},\"pages/ad_qieping\":{\"launchMode\":\"singleTask\",\"component\":\"index\",\"path\":\"/ad_qieping\"},\"pages/ad_rewarded_video\":{\"launchMode\":\"singleTask\",\"component\":\"index\",\"path\":\"/ad_rewarded_video\"},\"pages/Page_Account_Details\":{\"component\":\"index\",\"path\":\"/Page_Account_Details\"},\"pages/BindPhone\":{\"component\":\"index\",\"path\":\"/BindPhone\"},\"pages/BindWechat\":{\"component\":\"index\",\"path\":\"/BindWechat\"},\"BookDetails\":{\"component\":\"index\",\"path\":\"/BookDetails\"},\"pages/bookEnd\":{\"component\":\"index\",\"path\":\"/bookend\"},\"pages/Catalog\":{\"launchMode\":\"singleTask\",\"component\":\"index\",\"path\":\"/Catalog\"},\"pages/Category\":{\"component\":\"index\",\"path\":\"/Category\"},\"pages/CategoryTwoLevel\":{\"component\":\"index\",\"path\":\"/CategoryTwoLevel\"},\"pages/clipboard\":{\"component\":\"index\",\"path\":\"/clipboard\"},\"pages/ContactWe\":{\"component\":\"index\",\"path\":\"/ContactWe\"},\"pages/Feedback\":{\"component\":\"index\",\"path\":\"/Feedback\"},\"pages/Help\":{\"component\":\"index\",\"path\":\"/Help\"},\"pages/ad_kaiping\":{\"launchMode\":\"singleTask\",\"component\":\"index\",\"path\":\"/ad_kaiping\"},\"pages/Login\":{\"component\":\"index\",\"path\":\"/Login\"},\"pages/NewBook\":{\"component\":\"index\",\"path\":\"/NewBook\"},\"pages/OverBook\":{\"component\":\"index\",\"path\":\"/OverBook\"},\"pages/BdMoreList\":{\"component\":\"index\",\"path\":\"/BdMoreList\"},\"pages/Page_Index\":{\"component\":\"index\",\"path\":\"/Page_Index\"},\"pages/Page_Home\":{\"launchMode\":\"singleTask\",\"component\":\"index\",\"path\":\"/Page_Home\"},\"pages/Page_Bookshelf_edit\":{\"component\":\"index\",\"path\":\"/Page_Bookshelf_edit\"},\"pages/Page_ClearStorage\":{\"component\":\"index\",\"path\":\"/Page_ClearStorage\"},\"pages/Ranking\":{\"component\":\"index\",\"path\":\"/Ranking\"},\"pages/reader\":{\"launchMode\":\"singleTask\",\"component\":\"index\",\"path\":\"/reader\"},\"pages/Page_Read_Record\":{\"component\":\"index\",\"path\":\"/Page_Read_Record\"},\"pages/Search\":{\"component\":\"index\",\"path\":\"/Search\"},\"pages/SearchList\":{\"component\":\"index\",\"path\":\"/SearchList\"},\"pages/Page_Web\":{\"component\":\"index\",\"path\":\"/Page_Web\"},\"pages/VIP\":{\"component\":\"index\",\"path\":\"/vip\"},\"pages/Page_Score_Exchange\":{\"component\":\"index\",\"path\":\"/Page_Score_Exchange\"},\"pages/Page_Exchange_Record\":{\"component\":\"index\",\"path\":\"/Page_Exchange_Record\"},\"pages/Page_Score_Rule\":{\"component\":\"index\",\"path\":\"/Page_Score_Rule\"},\"pages/MyWallet\":{\"component\":\"index\",\"path\":\"/MyWallet\"},\"pages/WithdrawProgress\":{\"component\":\"index\",\"path\":\"/WithdrawProgress\"},\"pages/MyIncome\":{\"component\":\"index\",\"path\":\"/MyIncome\"},\"pages/welfare\":{\"component\":\"welfare_page\",\"path\":\"/welfare\"},\"pages/tagTwo\":{\"component\":\"index\",\"path\":\"/tagTwo\"},\"pages/newWelfare\":{\"component\":\"index\",\"path\":\"/newWelfare\"},\"pages/transition\":{\"component\":\"index\",\"path\":\"/transition\"},\"pages/newWelfareTwo\":{\"component\":\"index\",\"path\":\"/newWelfareTwo\"},\"pages/newWelfareTwo_liveliness\":{\"component\":\"index\",\"path\":\"/newWelfareTwo_liveliness\"},\"pages/newWelfareThree\":{\"component\":\"index\",\"path\":\"/newWelfareThree\"},\"pages/newWelfareFour\":{\"component\":\"index\",\"path\":\"/newWelfareFour\"},\"pages/Network_None\":{\"component\":\"index\",\"path\":\"/Network_None\"},\"pages/readerTwo\":{\"component\":\"index\",\"path\":\"/readerTwo\"},\"pages/shakeWelfare\":{\"component\":\"index\",\"path\":\"/shakeWelfare\"}}},\"display\":{\"titleBarBackgroundColor\":\"#ffffff\",\"titleBarTextColor\":\"#333333\",\"menu\":false,\"menuBarData\":{\"menuBar\":false},\"homePage\":\"Page_Home\",\"themeMode\":0,\"pages\":{\"pages/ad_qieping\":{\"titleBar\":false,\"fullScreen\":true,\"menuBarData\":{\"menuBar\":false}},\"pages/ad_rewarded_video\":{\"menuBarData\":{\"menuBar\":false}},\"pages/Page_Account_Details\":{\"titleBarText\":\"我的记录\",\"menuBarData\":{\"menuBar\":false}},\"pages/BindPhone\":{\"titleBarText\":\"绑定手机\",\"menuBarData\":{\"menuBar\":false}},\"pages/BindWechat\":{\"titleBarText\":\"绑定微信\",\"menuBarData\":{\"menuBar\":false}},\"BookDetails\":{\"menuBarData\":{\"menuBar\":false,\"menuBarStyle\":\"light\"}},\"pages/bookEnd\":{\"titleBarText\":\" \",\"menuBarData\":{\"menuBar\":false}},\"pages/Catalog\":{\"titleBarText\":\"目录\",\"menuBarData\":{\"menuBar\":false}},\"pages/Category\":{\"titleBarText\":\"分类\",\"menuBarData\":{\"menuBar\":false}},\"pages/CategoryTwoLevel\":{\"menuBarData\":{\"menuBar\":false}},\"pages/ContactWe\":{\"titleBarText\":\"联系客服\",\"menuBarData\":{\"menuBar\":false}},\"pages/Page_Index\":{\"titleBar\":false,\"fullScreen\":true,\"fitCutout\":\"portrait\",\"menuBarData\":{\"menuBar\":false}},\"pages/Feedback\":{\"titleBarText\":\"意见反馈\",\"menuBarData\":{\"menuBar\":false}},\"pages/Help\":{\"titleBarText\":\"帮助中心\",\"menuBarData\":{\"menuBar\":false}},\"pages/Login\":{\"titleBarText\":\"登录\",\"menuBarData\":{\"menuBar\":false}},\"pages/NewBook\":{\"titleBarText\":\"新书\",\"menuBarData\":{\"menuBar\":false}},\"pages/BdMoreList\":{\"menuBarData\":{\"menuBar\":false}},\"pages/clipboard\":{\"menuBarData\":{\"menuBar\":false}},\"pages/OverBook\":{\"titleBarText\":\"完本\",\"menuBarData\":{\"menuBar\":false}},\"pages/ad_kaiping\":{\"titleBar\":false,\"fullScreen\":true,\"fitCutout\":\"portrait\",\"menuBarData\":{\"menuBar\":false}},\"pages/Page_Home\":{\"titleBar\":true,\"menuBarData\":{\"menuBar\":true}},\"pages/Ranking\":{\"menuBarData\":{\"menuBar\":false}},\"pages/reader\":{\"titleBar\":false,\"fitCutout\":\"portrait\",\"fullScreen\":true,\"menuBarData\":{\"menuBar\":false}},\"pages/Page_Read_Record\":{\"titleBarText\":\"阅读记录\",\"titleBar\":true,\"menuBarData\":{\"menuBar\":false}},\"pages/Search\":{\"titleBarText\":\"搜索\",\"titleBar\":true,\"menuBarData\":{\"menuBar\":false}},\"pages/SearchList\":{\"titleBarText\":\"搜索列表\",\"titleBar\":true,\"menuBarData\":{\"menuBar\":false}},\"pages/Page_Bookshelf_edit\":{\"titleBarText\":\"书架管理\",\"menuBarData\":{\"menuBar\":false}},\"pages/Page_ClearStorage\":{\"titleBarText\":\"清除缓存\",\"menuBarData\":{\"menuBar\":false}},\"pages/Page_Web\":{\"titleBarText\":\"正在加载···\",\"menuBarData\":{\"menuBar\":false}},\"pages/tagTwo\":{\"menuBarData\":{\"menuBar\":false}},\"pages/VIP\":{\"titleBar\":true,\"titleBarText\":\"会员中心\",\"menuBarData\":{\"menuBar\":false}},\"pages/Page_Score_Exchange\":{\"titleBar\":true,\"titleBarText\":\"兑换会员\",\"menuBarData\":{\"menuBar\":false}},\"pages/Page_Exchange_Record\":{\"titleBarText\":\"兑换记录\",\"titleBar\":true,\"menuBarData\":{\"menuBar\":false}},\"pages/Page_Score_Rule\":{\"titleBarText\":\"金币规则\",\"titleBar\":true,\"menuBarData\":{\"menuBar\":false}},\"pages/MyWallet\":{\"titleBarText\":\"我的钱包\",\"titleBar\":true,\"menuBarData\":{\"menuBar\":false}},\"pages/WithdrawProgress\":{\"titleBarText\":\"提现进度\",\"titleBar\":true,\"menuBarData\":{\"menuBar\":false}},\"pages/MyIncome\":{\"titleBarText\":\"我的收益\",\"titleBar\":true,\"menuBarData\":{\"menuBar\":false}},\"pages/welfare\":{\"titleBarText\":\"福利任务\",\"titleBar\":true,\"menuBarData\":{\"menuBar\":false}},\"pages/newWelfare\":{\"titleBar\":false,\"fullScreen\":true,\"fitCutout\":\"portrait\",\"menuBarData\":{\"menuBar\":false}},\"pages/newWelfareTwo\":{\"titleBar\":false,\"fullScreen\":true,\"fitCutout\":\"portrait\",\"menuBarData\":{\"menuBar\":false}},\"pages/newWelfareTwo_liveliness\":{\"titleBar\":false,\"fullScreen\":true,\"fitCutout\":\"portrait\",\"menuBarData\":{\"menuBar\":false}},\"pages/newWelfareThree\":{\"titleBar\":false,\"fullScreen\":true,\"fitCutout\":\"portrait\",\"menuBarData\":{\"menuBar\":false}},\"pages/newWelfareFour\":{\"titleBar\":false,\"fullScreen\":true,\"fitCutout\":\"portrait\",\"menuBarData\":{\"menuBar\":false}},\"pages/Network_None\":{\"titleBar\":false,\"fullScreen\":true,\"fitCutout\":\"portrait\",\"menuBarData\":{\"menuBar\":false}},\"pages/readerTwo\":{\"titleBar\":false,\"fullScreen\":true,\"menuBarData\":{\"menuBar\":false}},\"pages/shakeWelfare\":{\"titleBar\":false,\"fullScreen\":true,\"fitCutout\":\"portrait\",\"menuBarData\":{\"menuBar\":false}},\"UnionAd/AdPage\":{\"fullScreen\":true,\"titleBar\":false,\"statusBarImmersive\":true,\"menu\":false,\"menuBarData\":{\"menuBar\":false}},\"UnionAd/AdLanding\":{},\"pages/transition\":{\"menuBarData\":{\"menuBar\":false}}}},\"trustedSslDomains\":[\"readbook-service-freebook.cread.com\",\"h5-freebook-new.cread.com\"],\"huaweiSplashAdSlotId\":\"y5o061reow\"}");
          },
          67491: _0x367dc0 => {
            'use strict';

            _0x367dc0.exports = JSON.parse("{\"_args\":[[\"union-quick-app-ad@1.0.46\",\"E:\\\\Program Files\\\\gongzuo\\\\quickapp\\\\xiadu\"]],\"_from\":\"union-quick-app-ad@1.0.46\",\"_id\":\"union-quick-app-ad@1.0.46\",\"_inBundle\":false,\"_integrity\":\"sha512-VSvz1bomOAAMpin0344BIvEeROsfDM93YIV5Z4vUMmeRAiJmEh2PMti3JIg6XuN4nsEpnNjR6d7Uv/ICZdAyCw==\",\"_location\":\"/union-quick-app-ad\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"union-quick-app-ad@1.0.46\",\"name\":\"union-quick-app-ad\",\"escapedName\":\"union-quick-app-ad\",\"rawSpec\":\"1.0.46\",\"saveSpec\":null,\"fetchSpec\":\"1.0.46\"},\"_requiredBy\":[\"/\",\"/@topon/quick-app-sdk-hw\"],\"_resolved\":\"https://registry.npmmirror.com/union-quick-app-ad/-/union-quick-app-ad-1.0.46.tgz\",\"_spec\":\"1.0.46\",\"_where\":\"E:\\\\Program Files\\\\gongzuo\\\\quickapp\\\\xiadu\",\"author\":{\"name\":\"cm-fe\"},\"dependencies\":{},\"description\":\"百度联盟快应用广告sdk\",\"devDependencies\":{},\"files\":[\"components/*\",\"app.js\"],\"keywords\":[\"快应用\",\"广告\"],\"license\":\"ISC\",\"main\":\"app.js\",\"name\":\"union-quick-app-ad\",\"version\":\"1.0.46\"}");
          },
          74239: _0x2c60a3 => {
            'use strict';

            _0x2c60a3.exports = JSON.parse("[{\"name\":\"京东\",\"pkgName\":\"com.jingdong.app.mall\"},{\"name\":\"拼多多\",\"pkgName\":\"com.xunmeng.pinduoduo\"},{\"name\":\"淘宝\",\"pkgName\":\"com.taobao.taobao\"},{\"name\":\"美团\",\"pkgName\":\"com.sankuai.meituan\"},{\"name\":\"美团外卖\",\"pkgName\":\"com.sankuai.meituan.takeoutnew\"},{\"name\":\"唯品会\",\"pkgName\":\"com.achievo.vipshop\"},{\"name\":\"微博\",\"pkgName\":\"com.sina.weibo\"},{\"name\":\"爱奇艺\",\"pkgName\":\"com.qiyi.video\"},{\"name\":\"叮咚买菜\",\"pkgName\":\"com.yaya.zone\"}]");
          }
        },
        _0x2acd64 = {};
      function _0x46cc22(_0x1560a1) {
        var _0x3b8dcc = _0x2acd64[_0x1560a1];
        if (void 0 !== _0x3b8dcc) {
          return _0x3b8dcc.exports;
        }
        _0x2acd64[_0x1560a1] = {
          exports: {}
        };
        var _0x299b7f = _0x2acd64[_0x1560a1];
        _0x57bd8b[_0x1560a1](_0x299b7f, _0x299b7f.exports, _0x46cc22);
        return _0x299b7f.exports;
      }
      _0x46cc22.g = function () {
        if ("object" == typeof globalThis) {
          return globalThis;
        }
        try {
          return this || new Function("return this")();
        } catch (_0x154ef7) {
          if ("object" == typeof window) {
            return window;
          }
        }
      }();
      _0x46cc22.o = (_0x2a4eec, _0x1b7218) => Object.prototype.hasOwnProperty.call(_0x2a4eec, _0x1b7218);
      _0x18ad47 = {};
      _0x489058 = _0x46cc22(31092);
      $app_define$("@app-application/app", [], function (_0x51d5f6, _0x247457, _0x16a94d) {
        _0x489058.default && (_0x16a94d.exports = _0x489058.default);
        _0x16a94d.exports.manifest = _0x46cc22(3447);
        _0x16a94d.exports.style = {
          list: [_0x18ad47]
        };
      });
      $app_bootstrap$("@app-application/app", {
        packagerVersion: "1.9.10"
      });
    })();
  };
  if ("undefined" == typeof window) {
    return _0x2a6edf();
  }
  window.createAppHandler = _0x2a6edf;
  global.manifest = {
    package: "com.haizhuishu.quickapp",
    name: "嗨追书",
    versionName: "7.0.4",
    versionCode: 704,
    minPlatformVersion: 1070,
    icon: "/assets/logo.png",
    appId: "65",
    appKey: "8dfbdf10-d195-45a6-85a8-a7f8307681f9",
    features: [{
      name: "system.vivopush"
    }, {
      name: "service.ad"
    }, {
      name: "system.prompt"
    }, {
      name: "system.router"
    }, {
      name: "system.device"
    }, {
      name: "system.wifi"
    }, {
      name: "system.shortcut"
    }, {
      name: "system.fetch"
    }, {
      name: "system.storage"
    }, {
      name: "system.brightness"
    }, {
      name: "system.webview"
    }, {
      name: "system.request"
    }, {
      name: "system.file"
    }, {
      name: "service.share",
      params: {
        appSign: "MIIDazCCAlOgAwIBAgIESeyrwzANBgkqhkiG9w0BAQsFADBmMQ8wDQYDVQQGEwZpd2FudmkxDzANBgNVBAgTBml3YW52aTEPMA0GA1UEBxMGaXdhbnZpMQ8wDQYDVQQKEwZpd2FudmkxDzANBgNVBAsTBml3YW52aTEPMA0GA1UEAxMGaXdhbnZpMB4XDTE5MTAyNTA5MDcwNVoXDTQ3MDMxMjA5MDcwNVowZjEPMA0GA1UEBhMGaXdhbnZpMQ8wDQYDVQQIEwZpd2FudmkxDzANBgNVBAcTBml3YW52aTEPMA0GA1UEChMGaXdhbnZpMQ8wDQYDVQQLEwZpd2FudmkxDzANBgNVBAMTBml3YW52aTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKdJN8V/cefT9BXyrZlIP+Uf+If4ZYr2cH4P1xsLzXifOth8RI//SWVQTE4EF9oUx0ot5q3qzTNzPi3nYGVsZbHJwduqvnqt5ionEcrZcrqN4jrznOyUu6FCLdlnJgbLvUkvLBjZVkNMEW0y2GuAJKF6BWTJOWNg0Z+UYk393dNMbTSbsFqqpX4zxQGnDN1q20/IOFUNJTivPbncsLm6Wz/EQe7JSUNssraTgViHeLRhsE7dL+ItdWIy50X9dIbgjN5WfN9ybc2wDASfZjIr/cWA2G/YxRJSC5J+AkCIGBh8i4kQoqSLZVc/vckgdhJKgoIQWXRr39qlKoZZYOzewK0CAwEAAaMhMB8wHQYDVR0OBBYEFJRWFwXBA4ZUqRFV1RxhSbaqa4AKMA0GCSqGSIb3DQEBCwUAA4IBAQBDtOaioRnC3/Qc6rqwiLA93tEHYXckQ2KA3zd/aox+06RRhvSnXyDWh+4wxCVses2I90jrkJWtUogjdXLA9wfcauvkESdo4+e90fRFyKBqErMrWKWkoafGFiLFAJ0Act4TSBPtxex4mqIaRctZ3M1b3o+pRrdJ7O/1098vDxkzI86u10l5XYWBW3qSuIWKnS4yvguIJvKgm9PmIenZM1XMF7yY12dZAbEYn2DkWw0FYB1p1F1HxG0V5MzijwIuuQqR8VU7/dTY8CdtBUdMXYfbrcsVsq4bDstedN+XYuxNT387RbIiE8Eot5cFUPV5s7JMRBAE4nAijT+GDCVQ+sGD",
        wxKey: "wx964898ce24c8f525",
        qqKey: "101923908"
      }
    }, {
      name: "service.wxaccount",
      params: {
        appId: "wx964898ce24c8f525"
      }
    }, {
      name: "service.wxpay",
      params: {
        url: "http://bookstore-lightapp-manage.cread.com/wxPay/quickPayPage"
      }
    }, {
      name: "service.alipay"
    }, {
      name: "system.clipboard"
    }, {
      name: "service.push"
    }, {
      name: "system.media"
    }, {
      name: "service.account"
    }, {
      name: "system.package"
    }, {
      name: "system.notification"
    }, {
      name: "system.vibrator"
    }, {
      name: "system.image"
    }, {
      name: "system.battery"
    }, {
      name: "system.geolocation"
    }, {
      name: "system.network"
    }, {
      name: "service.push"
    }, {
      name: "system.resident"
    }],
    permissions: [{
      origin: "*"
    }],
    config: {
      logLevel: "debug",
      designWidth: 720,
      network: {
        connectTimeout: 2000,
        readTimeout: 2000,
        writeTimeout: 2000
      },
      background: {
        features: ["system.audio"]
      },
      data: {
        umeng_appkey: "5da6b331570df3f297000c74",
        imgCdn: "https://images-pro.cread.com/book_covers/",
        themeColor: "#ff7f40",
        baidu_appid: "c809bb25",
        appname: "hzs",
        copyright: "中文万维",
        record: "京ICP备15043009号-5K",
        userAgreement: "https://h5-freebook-new.cread.com/clause?appname=quickapp_hzs",
        privacyPolicy: "https://h5-freebook-new.cread.com/privacyPolicy?appname=quickapp_hzs",
        childProtection: "https://h5-freebook-new.cread.com/childrenPolicy?appname=quickapp_hzs",
        img: {
          default_null: "http://images-pro.cread.com/images/bookstore-lightapp/20220120134340139.png",
          male: "http://images-pro.cread.com/images/bookstore-lightapp/20220120141226735.png",
          male_active: "http://images-pro.cread.com/images/bookstore-lightapp/20220120141245479.png",
          female: "http://images-pro.cread.com/images/bookstore-lightapp/20220120141303245.png",
          female_active: "http://images-pro.cread.com/images/bookstore-lightapp/20220209114201486.png",
          fission_banner: "http://images-pro.cread.com/images/bookstore-lightapp/20220120144418991.png",
          fission_progress: "http://images-pro.cread.com/images/bookstore-lightapp/20220120144434133.png",
          fission_notice_icon: "http://images-pro.cread.com/images/bookstore-lightapp/20220120144451929.png",
          desktop_shortcut: "http://images-pro.cread.com/images/bookstore-lightapp/20220421114614279.png",
          red_packet_20200203: "http://images-pro.cread.com/images/bookstore-lightapp/20220421114654636.png",
          float_shortcut: "http://images-pro.cread.com/images/bookstore-lightapp/20220421114743732.png",
          red_packet_open: "http://images-pro.cread.com/images/bookstore-lightapp/20220421114813947.png",
          logo_b: "http://images-pro.cread.com/images/bookstore-lightapp/20220421114844016.png",
          logo: "http://images-pro.cread.com/images/bookstore-lightapp/20220421114912604.png",
          start_logo: "http://images-pro.cread.com/images/bookstore-lightapp/20231214161216665.jpg",
          fission_item_bg: "http://images-pro.cread.com/images/bookstore-lightapp/20220421114945502.png",
          bg_btn: "http://images-pro.cread.com/images/bookstore-lightapp/20220421115018681.png",
          vip_ad: "http://images-pro.cread.com/images/bookstore-lightapp/20220421115116006.png",
          vip_king: "http://images-pro.cread.com/images/bookstore-lightapp/20220421115143095.png",
          vip_service: "http://images-pro.cread.com/images/bookstore-lightapp/20220421115217116.png",
          icon_sign: "http://images-pro.cread.com/images/bookstore-lightapp/20220421115247482.png",
          icon_fission: "http://images-pro.cread.com/images/bookstore-lightapp/20220421115321795.png",
          bg_vip_card: "http://images-pro.cread.com/images/bookstore-lightapp/20220421115357000.png",
          huangguan_active: "http://images-pro.cread.com/images/bookstore-lightapp/20220421115444869.png",
          exchange_bg: "http://images-pro.cread.com/images/bookstore-lightapp/20220421115520952.png",
          vip_card_fg: "http://images-pro.cread.com/images/bookstore-lightapp/20220421115549493.png",
          loading: "http://images-pro.cread.com/images/bookstore-lightapp/20220421115631901.gif",
          vip_default: "http://images-pro.cread.com/images/bookstore-lightapp/20220421115659052.png",
          banner_new: "http://images-pro.cread.com/images/bookstore-lightapp/20220421115725695.png",
          signIn_success: "http://images-pro.cread.com/images/bookstore-lightapp/20220421115756868.png",
          signIn_un: "http://images-pro.cread.com/images/bookstore-lightapp/20220421115825812.png",
          signIn_gift: "http://images-pro.cread.com/images/bookstore-lightapp/20220421115853082.png",
          baoxiang: "http://images-pro.cread.com/images/bookstore-lightapp/20220421115922294.png",
          baoxiang_finished_bg: "http://images-pro.cread.com/images/bookstore-lightapp/20230908100700330.png",
          ad_bg_small: "http://images-pro.cread.com/images/bookstore-lightapp/20220608152016804.png",
          qiandao: "http://images-pro.cread.com/images/bookstore-lightapp/20220608152601847.png",
          desktop_logo: "http://images-pro.cread.com/images/bookstore-lightapp/20220608160405546.png",
          tab_bookshelf: "http://images-pro.cread.com/images/bookstore-lightapp/20230131183628014.png",
          tab_bookshelf_active: "http://images-pro.cread.com/images/bookstore-lightapp/20220608161747541.png",
          tab_bookstore: "http://images-pro.cread.com/images/bookstore-lightapp/20230131183644688.png",
          tab_bookstore_active: "http://images-pro.cread.com/images/bookstore-lightapp/20220608161810619.png",
          tab_welfare: "http://images-pro.cread.com/images/bookstore-lightapp/20230327163131414.png",
          tab_welfare_active: "http://images-pro.cread.com/images/bookstore-lightapp/20220608161827985.png",
          tab_mine: "http://images-pro.cread.com/images/bookstore-lightapp/20230131183716505.png",
          tab_mine_active: "http://images-pro.cread.com/images/bookstore-lightapp/20220608161854163.png",
          kaiping_shake: "http://images-pro.cread.com/images/bookstore-lightapp/20230208151304782.png",
          ad_xiaomi_icon: "http://images-pro.cread.com/images/bookstore-lightapp/20230216154141921.png",
          ad_huawei_icon: "http://images-pro.cread.com/images/bookstore-lightapp/20230308172114381.png",
          ad_oppo_icon: "http://images-pro.cread.com/images/bookstore-lightapp/20230308172131726.png",
          ad_vivo_icon: "http://images-pro.cread.com/images/bookstore-lightapp/20230308172143331.png",
          ad_ylh_sdk_icon: "https://qzs.gdtimg.com/union/res/union_cdn/page/ams_icon/ams_logo_dark.png",
          complaint_img: "http://images-pro.cread.com/images/bookstore-lightapp/20230223165211590.png",
          newWelfare_one_1: "http://images-pro.cread.com/images/bookstore-lightapp/20230602135516105.png",
          newWelfare_one_2: "http://images-pro.cread.com/images/bookstore-lightapp/20230602161803918.png",
          newWelfare_one_3: "http://images-pro.cread.com/images/bookstore-lightapp/20230608131624568.png",
          newWelfare_two: "http://images-pro.cread.com/images/bookstore-lightapp/20230301161141093.png",
          newWelfare_feedback: "http://images-pro.cread.com/images/bookstore-lightapp/20230301161154689.png",
          newWelfare_help: "http://images-pro.cread.com/images/bookstore-lightapp/20230301161206973.png",
          newWelfareTwo_feedback: "http://images-pro.cread.com/images/bookstore-lightapp/20230803100021350.png",
          newWelfareTwo_help: "http://images-pro.cread.com/images/bookstore-lightapp/20230803100038200.png",
          ad_free_background: "http://images-pro.cread.com/images/bookstore-lightapp/20230421145121035.png",
          simulate_out: "http://images-pro.cread.com/images/bookstore-lightapp/20230620133657007.png",
          feedback_success: "http://images-pro.cread.com/images/bookstore-lightapp/20230517152411854.png",
          head_img: "http://images-pro.cread.com/images/bookstore-lightapp/20230608165344634.png",
          ad_top_star: "http://images-pro.cread.com/images/bookstore-lightapp/20220810162008033.png",
          newWelfareTwo_one_1: "http://images-pro.cread.com/images/bookstore-lightapp/20240105140629251.png",
          newWelfareTwo_one_2: "http://images-pro.cread.com/images/bookstore-lightapp/20240105140701553.png",
          newWelfareTwo_one_3: "http://images-pro.cread.com/images/bookstore-lightapp/20240105140728656.png",
          newWelfareTwo_one_4: "http://images-pro.cread.com/images/bookstore-lightapp/20240222161526167.jpeg",
          newWelfareTwo_pop_1: "http://images-pro.cread.com/images/bookstore-lightapp/20231218185902491.png",
          newWelfareTwo_pop_2: "http://images-pro.cread.com/images/bookstore-lightapp/20240110103342365.png",
          newWelfareTwo_pop_3: "http://images-pro.cread.com/images/bookstore-lightapp/20231218185930388.png",
          newWelfareTwo_pop_4: "http://images-pro.cread.com/images/bookstore-lightapp/20231218185944065.png",
          newWelfareTwo_pop_5: "http://images-pro.cread.com/images/bookstore-lightapp/20240222161540657.png",
          newWelfareTwo_btn_1: "http://images-pro.cread.com/images/bookstore-lightapp/20230703172815597.png",
          newWelfareTwo_btn_2: "http://images-pro.cread.com/images/bookstore-lightapp/20231219161703598.png",
          newWelfareTwo_btn_3: "http://images-pro.cread.com/images/bookstore-lightapp/20230703172851232.png",
          newWelfareTwo_btn_4: "http://images-pro.cread.com/images/bookstore-lightapp/20230809153139697.png",
          newWelfareTwo_btn_5: "http://images-pro.cread.com/images/bookstore-lightapp/20240222161557634.png",
          no_network_back_1: "http://images-pro.cread.com/images/bookstore-lightapp/20230705102738693.jpg",
          no_network_back_2: "http://images-pro.cread.com/images/bookstore-lightapp/20230705103431692.jpg",
          no_network_back_3: "http://images-pro.cread.com/images/bookstore-lightapp/20230705103445682.jpg",
          shake_page_shake_1: "http://images-pro.cread.com/images/bookstore-lightapp/20230718190016616.jpg",
          shake_page_shake_2: "http://images-pro.cread.com/images/bookstore-lightapp/20230719104315400.jpg",
          shake_page_shake_3: "http://images-pro.cread.com/images/bookstore-lightapp/20230719104410160.jpg",
          fake_menubar: "http://images-pro.cread.com/images/bookstore-lightapp/20230803100452191.png"
        }
      }
    },
    router: {
      entry: "pages/Page_Index",
      pages: {
        "UnionAd/AdPage": {
          component: "index"
        },
        "UnionAd/AdLanding": {
          component: "index"
        },
        "pages/ad_qieping": {
          launchMode: "singleTask",
          component: "index",
          path: "/ad_qieping"
        },
        "pages/ad_rewarded_video": {
          launchMode: "singleTask",
          component: "index",
          path: "/ad_rewarded_video"
        },
        "pages/Page_Account_Details": {
          component: "index",
          path: "/Page_Account_Details"
        },
        "pages/BindPhone": {
          component: "index",
          path: "/BindPhone"
        },
        "pages/BindWechat": {
          component: "index",
          path: "/BindWechat"
        },
        BookDetails: {
          component: "index",
          path: "/BookDetails"
        },
        "pages/bookEnd": {
          component: "index",
          path: "/bookend"
        },
        "pages/Catalog": {
          launchMode: "singleTask",
          component: "index",
          path: "/Catalog"
        },
        "pages/Category": {
          component: "index",
          path: "/Category"
        },
        "pages/CategoryTwoLevel": {
          component: "index",
          path: "/CategoryTwoLevel"
        },
        "pages/clipboard": {
          component: "index",
          path: "/clipboard"
        },
        "pages/ContactWe": {
          component: "index",
          path: "/ContactWe"
        },
        "pages/Feedback": {
          component: "index",
          path: "/Feedback"
        },
        "pages/Help": {
          component: "index",
          path: "/Help"
        },
        "pages/ad_kaiping": {
          launchMode: "singleTask",
          component: "index",
          path: "/ad_kaiping"
        },
        "pages/Login": {
          component: "index",
          path: "/Login"
        },
        "pages/NewBook": {
          component: "index",
          path: "/NewBook"
        },
        "pages/OverBook": {
          component: "index",
          path: "/OverBook"
        },
        "pages/BdMoreList": {
          component: "index",
          path: "/BdMoreList"
        },
        "pages/Page_Index": {
          component: "index",
          path: "/Page_Index"
        },
        "pages/Page_Home": {
          launchMode: "singleTask",
          component: "index",
          path: "/Page_Home"
        },
        "pages/Page_Bookshelf_edit": {
          component: "index",
          path: "/Page_Bookshelf_edit"
        },
        "pages/Page_ClearStorage": {
          component: "index",
          path: "/Page_ClearStorage"
        },
        "pages/Ranking": {
          component: "index",
          path: "/Ranking"
        },
        "pages/reader": {
          launchMode: "singleTask",
          component: "index",
          path: "/reader"
        },
        "pages/Page_Read_Record": {
          component: "index",
          path: "/Page_Read_Record"
        },
        "pages/Search": {
          component: "index",
          path: "/Search"
        },
        "pages/SearchList": {
          component: "index",
          path: "/SearchList"
        },
        "pages/Page_Web": {
          component: "index",
          path: "/Page_Web"
        },
        "pages/VIP": {
          component: "index",
          path: "/vip"
        },
        "pages/Page_Score_Exchange": {
          component: "index",
          path: "/Page_Score_Exchange"
        },
        "pages/Page_Exchange_Record": {
          component: "index",
          path: "/Page_Exchange_Record"
        },
        "pages/Page_Score_Rule": {
          component: "index",
          path: "/Page_Score_Rule"
        },
        "pages/MyWallet": {
          component: "index",
          path: "/MyWallet"
        },
        "pages/WithdrawProgress": {
          component: "index",
          path: "/WithdrawProgress"
        },
        "pages/MyIncome": {
          component: "index",
          path: "/MyIncome"
        },
        "pages/welfare": {
          component: "welfare_page",
          path: "/welfare"
        },
        "pages/tagTwo": {
          component: "index",
          path: "/tagTwo"
        },
        "pages/newWelfare": {
          component: "index",
          path: "/newWelfare"
        },
        "pages/transition": {
          component: "index",
          path: "/transition"
        },
        "pages/newWelfareTwo": {
          component: "index",
          path: "/newWelfareTwo"
        },
        "pages/newWelfareTwo_liveliness": {
          component: "index",
          path: "/newWelfareTwo_liveliness"
        },
        "pages/newWelfareThree": {
          component: "index",
          path: "/newWelfareThree"
        },
        "pages/newWelfareFour": {
          component: "index",
          path: "/newWelfareFour"
        },
        "pages/Network_None": {
          component: "index",
          path: "/Network_None"
        },
        "pages/readerTwo": {
          component: "index",
          path: "/readerTwo"
        },
        "pages/shakeWelfare": {
          component: "index",
          path: "/shakeWelfare"
        }
      }
    },
    display: {
      titleBarBackgroundColor: "#ffffff",
      titleBarTextColor: "#333333",
      menu: !1,
      menuBarData: {
        menuBar: !1
      },
      homePage: "Page_Home",
      themeMode: 0,
      pages: {
        "pages/ad_qieping": {
          titleBar: !1,
          fullScreen: !0,
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/ad_rewarded_video": {
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/Page_Account_Details": {
          titleBarText: "我的记录",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/BindPhone": {
          titleBarText: "绑定手机",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/BindWechat": {
          titleBarText: "绑定微信",
          menuBarData: {
            menuBar: !1
          }
        },
        BookDetails: {
          menuBarData: {
            menuBar: !1,
            menuBarStyle: "light"
          }
        },
        "pages/bookEnd": {
          titleBarText: " ",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/Catalog": {
          titleBarText: "目录",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/Category": {
          titleBarText: "分类",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/CategoryTwoLevel": {
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/ContactWe": {
          titleBarText: "联系客服",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/Page_Index": {
          titleBar: !1,
          fullScreen: !0,
          fitCutout: "portrait",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/Feedback": {
          titleBarText: "意见反馈",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/Help": {
          titleBarText: "帮助中心",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/Login": {
          titleBarText: "登录",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/NewBook": {
          titleBarText: "新书",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/BdMoreList": {
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/clipboard": {
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/OverBook": {
          titleBarText: "完本",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/ad_kaiping": {
          titleBar: !1,
          fullScreen: !0,
          fitCutout: "portrait",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/Page_Home": {
          titleBar: !0,
          menuBarData: {
            menuBar: !0
          }
        },
        "pages/Ranking": {
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/reader": {
          titleBar: !1,
          fitCutout: "portrait",
          fullScreen: !0,
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/Page_Read_Record": {
          titleBarText: "阅读记录",
          titleBar: !0,
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/Search": {
          titleBarText: "搜索",
          titleBar: !0,
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/SearchList": {
          titleBarText: "搜索列表",
          titleBar: !0,
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/Page_Bookshelf_edit": {
          titleBarText: "书架管理",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/Page_ClearStorage": {
          titleBarText: "清除缓存",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/Page_Web": {
          titleBarText: "正在加载···",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/tagTwo": {
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/VIP": {
          titleBar: !0,
          titleBarText: "会员中心",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/Page_Score_Exchange": {
          titleBar: !0,
          titleBarText: "兑换会员",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/Page_Exchange_Record": {
          titleBarText: "兑换记录",
          titleBar: !0,
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/Page_Score_Rule": {
          titleBarText: "金币规则",
          titleBar: !0,
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/MyWallet": {
          titleBarText: "我的钱包",
          titleBar: !0,
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/WithdrawProgress": {
          titleBarText: "提现进度",
          titleBar: !0,
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/MyIncome": {
          titleBarText: "我的收益",
          titleBar: !0,
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/welfare": {
          titleBarText: "福利任务",
          titleBar: !0,
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/newWelfare": {
          titleBar: !1,
          fullScreen: !0,
          fitCutout: "portrait",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/newWelfareTwo": {
          titleBar: !1,
          fullScreen: !0,
          fitCutout: "portrait",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/newWelfareTwo_liveliness": {
          titleBar: !1,
          fullScreen: !0,
          fitCutout: "portrait",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/newWelfareThree": {
          titleBar: !1,
          fullScreen: !0,
          fitCutout: "portrait",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/newWelfareFour": {
          titleBar: !1,
          fullScreen: !0,
          fitCutout: "portrait",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/Network_None": {
          titleBar: !1,
          fullScreen: !0,
          fitCutout: "portrait",
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/readerTwo": {
          titleBar: !1,
          fullScreen: !0,
          menuBarData: {
            menuBar: !1
          }
        },
        "pages/shakeWelfare": {
          titleBar: !1,
          fullScreen: !0,
          fitCutout: "portrait",
          menuBarData: {
            menuBar: !1
          }
        },
        "UnionAd/AdPage": {
          fullScreen: !0,
          titleBar: !1,
          statusBarImmersive: !0,
          menu: !1,
          menuBarData: {
            menuBar: !1
          }
        },
        "UnionAd/AdLanding": {},
        "pages/transition": {
          menuBarData: {
            menuBar: !1
          }
        }
      }
    },
    trustedSslDomains: ["readbook-service-freebook.cread.com", "h5-freebook-new.cread.com"],
    huaweiSplashAdSlotId: "y5o061reow"
  };
}();