var lowerCase = window.navigator.userAgent.toLowerCase(),
  isTouchScreen = -1 !== lowerCase.indexOf("isTouchScreen") || -1 !== lowerCase.indexOf("android") || -1 !== lowerCase
  .indexOf("ipad") || -1 !== lowerCase.indexOf("iphone") || -1 !== lowerCase.indexOf("ipod") || -1 !== lowerCase
  .indexOf("kindle") || -1 !== lowerCase.indexOf("silk/") ? 1 : 0;
if (1 === isTouchScreen) {
  var _meta = window.document.createElement("meta");
  _meta.name = "viewport", _meta.content = "initial-scale=1.0 maximum-scale=1.0", window.document.getElementsByTagName(
    "head")[0].appendChild(_meta)
}
localStorage2 = null;
try {
  localStorage2 = window.localStorage, localStorage2.setItem("LapaMauve", "1"), localStorage2.getItem("LapaMauve")
} catch (e) {
  storage = {}, localStorage2 = {}, localStorage2.setItem = function (e, i) {
    storage[e] = i
  }, localStorage2.getItem = function (e) {
    return storage[e] === window.undefined ? null : storage[e]
  }
}
for (var setx, sety, rowx, rowy, canvas, canw, canh, canw2, canh2, canw4, canh4, canwns, canhns, canw2ns, canh2ns,
    canw4ns, canh4ns, ctx, AutoLoot = !1, AutoLootLabel = null, AutoEat = !1, AutoEatLabel = null, setHungryLevel = 100,
    drawLines = !1, pworld = [
      []
    ], pworldWidth = 150, pworldHeight = 150, pathStart = [pworldWidth, pworldHeight], pathEnd = [0, 0], pathFinder = !
    1, x = 0; x < pworldWidth; x++) {
  pworld[x] = [];
  for (var y = 0; y < pworldHeight; y++) pworld[x][y] = 0
}
var delta = 0,
  previousTimestamp = 0,
  scaleby = 1,
  fpsAvg = 100,
  canvasQuality = 1,
  __RESIZE_METHOD_SCALE__ = 1,
  __RESIZE_METHOD_CSS__ = 0,
  CanvasUtils = function () {
    var e = 5,
      i = 0,
      a = 0,
      _ = 0,
      o = 0,
      t = new window.Array(e),
      d = {
        resizeMethod: __RESIZE_METHOD_SCALE__,
        size: window.innerWidth,
        aliasing: !0,
        deviceRatio: window.devicePixelRatio || 1,
        scheduledRatio: window.devicePixelRatio || 1,
        backingStoreRatio: 1,
        forceResolution: 0,
        ratio: 0,
        ratioX: 1,
        ratioY: 1,
        can: "can",
        bod: "bod"
      };

    function n() {
      var e, i, a;
      d.resizeMethod === __RESIZE_METHOD_CSS__ ? window.innerWidth > window.innerHeight ? (e = window.innerHeight /
          window.innerWidth, i = d.size, a = window.Math.floor(i * e)) : (e = window.innerWidth / window.innerHeight,
          a = d.size, i = window.Math.floor(a * e)) : (i = window.innerWidth, a = window.innerHeight), canw = i, canh =
        a, canw2 = window.Math.floor(canw / 2), canh2 = window.Math.floor(canh / 2), canw4 = window.Math.floor(canw /
        4), canh4 = window.Math.floor(canh / 4), d.ratioX = canw / window.innerWidth, d.ratioY = canh / window
        .innerHeight, e = d.scheduledRatio / d.backingStoreRatio, 0 !== d.ratio && (e *= d.ratio), canvas.width = canw *
        e, canvas.height = canh * e, d.resizeMethod === __RESIZE_METHOD_SCALE__ && (scaleby = window.Math.max(a / (11 *
          d.size / 16), i / d.size), canvas.style.width = i + "px", canvas.style.height = a + "px"), canwns = canw /
        scaleby, canhns = canh / scaleby, canw2ns = canw2 / scaleby, canh2ns = canh2 / scaleby, canw4ns = canw4 /
        scaleby, canh4ns = canh4 / scaleby, ctx.scale(e, e), s(ctx, d.aliasing), g.update()
    }

    function r(l) {
      window.requestAnimationFrame(r), l !== window.undefined && (delta = l - previousTimestamp, previousTimestamp = l),
        function () {
          if (a++, (i += delta) >= 1e3) {
            if (_ = 1e3 * a / i, t[o] = _, ++o === e) {
              for (var r = 0, l = 0; l < e; l++) r += t[l];
              r /= e;
              var s = d.deviceRatio / d.backingStoreRatio;
              0 === d.forceResolution && 2 === s && window.Math.abs(fpsAvg - r) < 5 && (r < 22 && fpsAvg < 22 ? 1 ===
                canvasQuality ? (canvasQuality = 2, d.scheduledRatio = d.deviceRatio / 2, n()) : 2 ===
                canvasQuality && (canvasQuality = 3, d.scheduledRatio = d.deviceRatio / 3, n()) : d.deviceRatio > d
                .scheduledRatio && r + fpsAvg > 119 && (2 === canvasQuality ? (canvasQuality = 1, d.scheduledRatio = d
                  .deviceRatio, n()) : 3 === canvasQuality && (canvasQuality = 2, d.scheduledRatio = d.deviceRatio /
                  2, n()))), fpsAvg = r, o = 0
            }
            i = 0, a = 0
          }
        }(), g.draw()
    }

    function l(e, i) {
      e.imageSmoothingEnabled = i, e.webkitImageSmoothingEnabled = i, e.mozImageSmoothingEnabled = i, e
        .msImageSmoothingEnabled = i, e.oImageSmoothingEnabled = i
    }

    function s(e, i) {
      window.document.getElementById(d.can).style.imageRendering = !1 === i ? "pixelated" : "auto", l(e, i)
    }
    var g = window.undefined;

    function m(e) {
      g = e
    }

    function c() {
      this.isLoaded = 1, this.wh = this.width / 2, this.h2 = this.height / 2
    }

    function I() {
      this.isLoaded = 0
    }

    function E(e) {
      return {
        src: e,
        img: {
          isLoaded: 0
        }
      }
    }
    return {
      options: d,
      initAnimatedCanvas: function (e, i, a, _, o, t, l) {
        m(e), i !== window.undefined && (d.resizeMethod = i), a !== window.undefined && (d.can = a), _ !== window
          .undefined && (d.bod = _), o !== window.undefined && (d.size = o), t !== window.undefined && (d.ratio = t),
          l !== window.undefined && (d.aliasing = l), canvas = window.document.getElementById(d.can), ctx = canvas
          .getContext("2d"), d.backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx
          .mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx
          .backingStorePixelRatio || 1,
          function () {
            for (var e = 0, i = ["ms", "moz", "webkit", "o"], a = 0; a < i.length && !window.requestAnimationFrame; ++
              a) window.requestAnimationFrame = window[i[a] + "RequestAnimationFrame"], window.cancelAnimationFrame =
              window[i[a] + "CancelAnimationFrame"] || window[i[a] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function (i, a) {
              var _ = (new window.Date).getTime(),
                o = window.Math.max(0, 16 - (_ - e)),
                t = window.setTimeout((function () {
                  i(_ + o)
                }), o);
              return e = _ + o, t
            });
            window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
              window.clearTimeout(e)
            })
          }(), canvas.oncontextmenu = function () {
            return !1
          };
        var s = window.document.getElementById(d.bod);
        s.ondragstart = function () {
          return !1
        }, s.ondrop = function () {
          return !1
        }, s.onresize = n, n(), r()
      },
      setAntialiasing: s,
      modifyAntialiasing: l,
      setResolution: function (e) {
        1 !== e && 2 !== e && 3 !== e || (e === d.forceResolution ? (e = 0, d.scheduledRatio = d.deviceRatio /
          canvasQuality) : d.scheduledRatio = d.deviceRatio / e, d.forceResolution = e, n())
      },
      canvasToImage: function (e) {
        var i = new window.Image;
        return i.src = e.toDataURL("image/png"), i.width = e.width, i.height = e.height, i
      },
      rect: function (e, i, a, _, o) {
        e.beginPath(), e.rect(i * scaleby, a * scaleby, _ * scaleby, o * scaleby)
      },
      fillRect: function (e, i, a, _, o, t) {
        e.beginPath(), e.fillStyle = t, e.fillRect(i * scaleby, a * scaleby, _ * scaleby, o * scaleby)
      },
      circle: function (e, i, a, _) {
        e.beginPath(), e.arc(i * scaleby, a * scaleby, _ * scaleby, 0, 2 * window.Math.PI)
      },
      roundRect: function (e, i, a, _, o, t) {
        e.beginPath(), e.moveTo(i + t, a), e.arcTo(i + _, a, i + _, a + o, t), e.arcTo(i + _, a + o, i, a + o, t), e
          .arcTo(i, a + o, i, a, t), e.arcTo(i, a, i + _, a, t), e.closePath()
      },
      randomColor: function () {
        for (var e = "#", i = 0; i < 3; i++) {
          var a = window.Math.floor(256 * window.Math.random());
          e += a < 16 ? "0" + a.toString(16) : a.toString(16)
        }
        return e
      },
      colorTransition: function (e, i) {
        var a = e.length,
          _ = window.Math.floor(i * a),
          o = e[window.Math.max(0, _ - 1)],
          t = e[window.Math.min(_, a - 1)];
        i = i % (1 / a) * a;
        for (var d = "#", n = 0; n < 3; n++) {
          var r = window.Math.floor((t[n] - o[n]) * i + o[n]);
          d += r < 16 ? "0" + r.toString(16) : r.toString(16)
        }
        return d
      },
      line: function (e, i, a, _, o) {
        e.beginPath(), e.moveTo(i * scaleby, a * scaleby), e.lineTo(_ * scaleby, o * scaleby)
      },
      drawPath: function (e, i, a, _) {
        i !== window.undefined && (e.fillStyle = i, e.fill()), a !== window.undefined && (_ !== window.undefined && (e
          .lineWidth = _), e.strokeStyle = a, e.stroke())
      },
      setRenderer: m,
      loadImage: function (e, i) {
        return i !== window.undefined && 2 === i.isLoaded || ((i = new window.Image).isLoaded = 2, i.onload = c, i
          .onerror = I, i.src = e), i
      },
      lerp: function (e, i, a) {
        for (var _ = window.Math.max(1, window.Math.floor(60 / fpsAvg)), o = 0; o < _; o++) e = MathUtils.lerp(e, i,
          a);
        return e
      },
      enableFullscreen: function () {
        var e = window.document.getElementById("bod");
        e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e
          .mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen()
      },
      disableFullscreen: function () {
        window.document.exitFullscreen ? window.document.exitFullscreen() : window.document.msExitFullscreen ? window
          .document.msExitFullscreen() : window.document.mozCancelFullscreen ? window.document.mozCancelFullscreen() :
          window.document.webkitExitFullscreen && window.document.webkitExitFullscreen()
      },
      drawImageHd: function (e, i, a, _, o, t, d) {
        var n = e.img;
        if (1 === n.isLoaded) {
          d *= scaleby, i *= scaleby, a *= scaleby;
          var r = n.wh * d,
            l = n.h2 * d,
            s = -r / 2 + o * d,
            g = -l / 2 + t * d;
          i + s + r < 0 || a + g + l < 0 || i - r - canw > 0 || a - l - canh > 0 || (ctx.save(), ctx.translate(i, a),
            ctx.rotate(_), ctx.drawImage(n, s, g, r, l), ctx.restore())
        } else e.img = CanvasUtils.loadImage(e.src, e.img)
      },
      drawImageHd2: function (e, i, a, _, o, t, d, n, r, l) {
        var s = e.img;
        if (1 === s.isLoaded) {
          d *= scaleby;
          var g = s.wh * d,
            m = s.h2 * d;
          ctx.save(), ctx.translate(i * scaleby, a * scaleby), ctx.rotate(_), ctx.translate(o * d, t * d), ctx.rotate(
            n), ctx.drawImage(s, -g / 2 + r * d, -m / 2 + l * d, g, m), ctx.restore()
        } else e.img = CanvasUtils.loadImage(e.src, e.img)
      },
      drawImageHdCrop: function (e, i, a, _, o, t, d, n, r) {
        var l = e.img;
        if (1 === l.isLoaded) {
          a *= scaleby;
          var s = d / 2 * (r *= scaleby),
            g = n / 2 * r,
            m = -s / 2,
            c = -g / 2;
          (i *= scaleby) + m + s < 0 || a + c + g < 0 || i - s - canw > 0 || a - g - canh > 0 || (ctx.save(), ctx
            .translate(i, a), ctx.rotate(_), ctx.drawImage(l, o, t, d, n, m, c, s, g), ctx.restore())
        } else e.img = CanvasUtils.loadImage(e.src, e.img)
      },
      createImageContainer: E,
      loadImageContainer: function (e) {
        var i = E(e);
        return i.img = CanvasUtils.loadImage(i.src, i.img), i
      }
    }
  }(),
  Math2d = {
    angle: function (e, i, a, _) {
      var o = _ - i,
        t = a - e;
      return window.Math.atan2(o, t)
    },
    dist: function (e, i, a, _) {
      var o = a - e,
        t = _ - i;
      return window.Math.sqrt(o * o + t * t)
    },
    fastDist: function (e, i, a, _) {
      var o = a - e,
        t = _ - i;
      return o * o + t * t
    }
  },
  MathUtils = function () {
    var e = 2 * window.Math.PI;
    return {
      Ease: {
        speedLimit: function (e, i, a) {
          return window.Math.min(a * e + i(e), 1)
        },
        linear: function (e) {
          return e
        },
        outQuad: function (e) {
          return e * (2 - e)
        },
        outCubic: function (e) {
          return --e * e * e + 1
        },
        inOutQuad: function (e) {
          return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
        },
        inQuad: function (e) {
          return e * e
        },
        inOutCubic: function (e) {
          return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
        },
        inCubic: function (e) {
          return e * e * e
        },
        inOutQuart: function (e) {
          return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
        },
        inQuart: function (e) {
          return e * e * e * e
        },
        outQuart: function (e) {
          return 1 - --e * e * e * e
        },
        outQuint: function (e) {
          return 1 + --e * e * e * e * e
        }
      },
      lerp: function (e, i, a) {
        return (1 - a) * e + i * a
      },
      inflateNumber: function (e) {
        return e >= 2e4 ? e = 1e3 * (e - 2e4) : e >= 1e4 && (e = 100 * (e - 1e4)), e
      },
      simplifyNumber: function (e) {
        if (e >= 1e4) {
          var i = window.Math.floor(window.Math.log10(e)) - 2,
            a = window.Math.max(0, 3 - i),
            _ = window.Math.floor(e / 1e3).toString();
          if (a) {
            for (var o = (_ += "." + (e % 1e3 / 1e3).toString().substring(2).substring(0, a)).length - 1, t = 0; o >
              0 && "0" == _[o]; o--) t++;
            "." === (_ = _.substring(0, _.length - t))[_.length - 1] && (_ = _.substring(0, _.length - 1))
          }
          return _ += "k"
        }
        return e.toString()
      },
      beautifyNumber: function (e) {
        for (var i = e + "", a = "", _ = i.length - 1, o = 0; _ >= 0; _--, o++) {
          var t = i[_];
          o > 2 && "-" !== t && (o = 0, a = "," + a), a = t + a
        }
        return a
      },
      randomizeList: function (e, i) {
        a = [], a.push.apply(a, e);
        for (var _ = []; a.length > 0;) {
          var o = window.Math.floor(i() * a.length);
          _.push(a[o]), a.splice(o, 1)
        }
        return _
      },
      reduceAngle: function (i, a) {
        return a + window.Math.round((i - a) / e) * e
      }
    }
  }(),
  Mouse = function () {
    function e(e, i) {
      i !== Mouse.__MOUSE_MOVE__ && (Mouse.state = i), Mouse.sx = window.Math.floor(e.clientX * CanvasUtils.options
        .ratioX), Mouse.sy = window.Math.floor(e.clientY * CanvasUtils.options.ratioY), Mouse.x = window.Math.floor(
        Mouse.sx / scaleby), Mouse.y = window.Math.floor(Mouse.sy / scaleby)
    }

    function i() {
      Mouse.angle = Math2d.angle(1, 0, Mouse.x - canw2ns, Mouse.y - canh2ns)
    }

    function a() {
      Mouse.dist = Math2d.dist(canw2ns, canh2ns, Mouse.x, Mouse.y)
    }
    return {
      __MOUSE_MOVE__: 0,
      __MOUSE_DOWN__: 1,
      __MOUSE_UP__: 2,
      state: 0,
      updatePosition: e,
      updateAngle: i,
      updateDist: a,
      updatePosAngle: function (a, _) {
        e(a, _), i()
      },
      updateAll: function (_, o) {
        e(_, o), i(), a()
      },
      x: 0,
      y: 0,
      sx: 0,
      sy: 0,
      angle: 0,
      dist: 0,
      touchToMouseEvent: function (e, i, a) {
        e.clientX = a.clientX, e.clientY = a.clientY, e.altKey = i.altKey, e.ctrlKey = i.ctrlKey
      },
      LocalMouseEvent: function () {
        this.clientX = 0, this.clientY = 0, this.altKey = !1, this.ctrlKey = !1, this.preventDefault = function () {}
      }
    }
  }(),
  GUI = {
    __BUTTON_OUT__: 0,
    __BUTTON_IN__: 1,
    __BUTTON_CLICK__: 2,
    createButton: function (e, i, a, _) {
      var o = {
          x: 0,
          y: 0,
          disable: 0
        },
        t = 0;
      if (_ === window.undefined)
        if (_ = [], a !== window.undefined)
          for (var d = 0; d < a.length; d++) _[d] = CanvasUtils.loadImage(a[d]);
        else o.disable = 1;
      return {
        pos: o,
        trigger: function () {
          return 1 === o.disable ? 0 : Mouse.sx > o.x && Mouse.sx < o.x + e * scaleby && Mouse.sy > o.y && Mouse
            .sy < o.y + i * scaleby ? (Mouse.state === Mouse.__MOUSE_DOWN__ ? t = GUI.__BUTTON_CLICK__ : (Mouse
                .state === Mouse.__MOUSE_UP__ || Mouse.state === Mouse.__MOUSE_MOVE__ && t !== GUI.__BUTTON_CLICK__
                ) && (t = GUI.__BUTTON_IN__), 1) : (t = GUI.__BUTTON_OUT__, 0)
        },
        draw: function () {
          if (1 !== o.disable) {
            var a = _[t];
            1 === _[t].isLoaded && ctx.drawImage(a, 0, 0, a.width, a.height, o.x, o.y, e * scaleby, i * scaleby)
          }
        },
        setState: function (e) {
          t = e
        },
        getState: function () {
          return t
        },
        setImages: function (e, i) {
          _ = i;
          for (var a = 0; a < 3; a++) {
            var o = _[a],
              t = e[a];
            1 !== o.isLoaded && (_[a] = CanvasUtils.loadImage(t, o))
          }
        },
        show: function () {
          o.disable = 0
        },
        hide: function () {
          o.disable = 1
        }
      }
    },
    createBackground: function (e, i, a) {
      var _, o = {
        x: 0,
        y: 0,
        disable: 0
      };
      return a !== window.undefined ? _ = CanvasUtils.loadImage(a) : o.disable = 1, {
        draw: function () {
          1 !== o.disable && 1 === _.isLoaded && ctx.drawImage(_, 0, 0, _.width, _.height, o.x, o.y, e * scaleby,
            i * scaleby)
        },
        pos: o,
        show: function () {
          o.disable = 0
        },
        hide: function () {
          o.disable = 1
        }
      }
    },
    createSprite: function (e, i, a, _, o) {
      var t = {
          x: 0,
          y: 0
        },
        d = CanvasUtils.loadImage(a),
        n = 0,
        r = 0,
        l = _;
      return {
        draw: function () {
          1 === d.isLoaded && ((n += window.Math.min(delta, 3 * o)) > o && (n -= o, r = window.Math.floor((r + 1) %
            (d.width / l))), ctx.drawImage(d, l * r, 0, l, d.height, t.x, t.y, e * scaleby, i * scaleby))
        },
        pos: t
      }
    },
    renderText: function (e, i, a, _, o, t, d, n, r, l, s, g, m, c, I) {
      0 === e.length && (e = " "), d === window.undefined && (d = 0), n === window.undefined && (n = 0), r === window
        .undefined && (r = 0), c === window.undefined && (c = 0);
      var E = window.document.createElement("canvas"),
        u = E.getContext("2d");
      return u.textBaseline = "middle", u.font = (I !== window.undefined ? I + " " : "") + _ + "px " + i, o = o !==
        window.undefined ? window.Math.min(u.measureText(e).width, o) : u.measureText(e).width, E.width = o + d, E
        .height = _ + n, t !== window.undefined && (s !== window.undefined && (u.globalAlpha = s), u.fillStyle = t,
          g !== window.undefined ? (function (e, i, a, _, o, t) {
            _ < 2 * t && (t = _ / 2), o < 2 * t && (t = o / 2), 0 > t && (t = 0), e.beginPath(), e.moveTo(i + t, a),
              e.arcTo(i + _, a, i + _, a + o, t), e.arcTo(i + _, a + o, i, a + o, t), e.arcTo(i, a + o, i, a, t), e
              .arcTo(i, a, i + _, a, t), e.closePath()
          }(u, r + 2, r, o + d - 2 * r - 4, _ + n - 2 * r, g), u.fill()) : u.fillRect(r, r, o + d - 2 * r, _ + n - 2 *
            r), u.globalAlpha = 1, 0 !== r && (u.lineWidth = r, u.strokeStyle = l, u.stroke())), u.textBaseline =
        "middle", u.font = (I !== window.undefined ? I + " " : "") + _ + "px " + i, m !== window.undefined && (u
          .strokeStyle = m, u.lineWidth = c, u.lineJoin = "miter", u.miterLimit = 2, u.strokeText(e, window.Math
            .floor(d / 2), window.Math.floor(n / 2) + window.Math.floor(_ / 2), o)), u.fillStyle = a, u.fillText(e,
          window.Math.floor(d / 2), window.Math.floor(n / 2) + window.Math.floor(_ / 2), o), E.wh = E.width / 2, E
        .h2 = E.height / 2, E
    }
  };

function onUnits(e, i) {
  var a = new window.Uint16Array(e),
    _ = (i.length - 2) / 18;
  1 === i[1] && Entitie.removeAll();
  for (var o = 0, t = 2, d = 1; o < _; o++, t += 18, d += 9) {
    var n, r = i[t],
      l = i[t + 1],
      s = i[t + 3],
      g = a[d + 2],
      m = a[d + 3],
      c = a[d + 8];
    if (0 !== g) {
      setEntitie(n = Entitie.get(r, m, l, s), r, l, m, s, a[d + 4], a[d + 5], a[d + 6], a[d + 7], c, i[t + 2], g);
      var I = ENTITIES[s].update;
      I !== window.undefined && I(n, a[d + 4], a[d + 5])
    } else Entitie.remove(r, m, l, s, c)
  }
}

function onOldVersion(e) {
  var i = new window.Uint16Array(e);
  Home.gameMode === World.__SURVIVAL__ || Home.gameMode === World.__GHOUL__ ? (Client.badServerVersion(i[1]), Home
    .alertDelay <= 0 && (Home.alertId = Client.state === Client.State.__OLD_CLIENT_VERSION__ ? 0 : 1, Home
      .alertDelay = 3e3)) : Home.gameMode === World.__BR__ && (Client.badServerVersion(-1), window.setTimeout(Home
    .joinServer, 300))
}

function onFull() {
  Client.full(), Home.alertDelay <= 0 && (Home.alertId = 2, Home.alertDelay = 3e3)
}

function onPlayerDie(e) {
  var i = Entitie.findEntitie(__ENTITIE_PLAYER__, World.PLAYER.id, 0);
  null !== i && Entitie.remove(i.pid, i.id, i.uid, i.type, 1), World.PLAYER.kill = (e[1] << 8) + e[2], Client
    .closeClient()
}

function onOtherDie(e) {
  0 === World.players[e].ghoul && World.playerAlive--
}

function onFailRestoreSession() {
  Client.failRestore()
}

function onStoleYourSession() {
  Client.stolenSession()
}

function onMute(e) {
  Client.muted(e)
}

function onLeaderboard(e, i) {
  if (1 !== e.byteLength) {
    var a = new window.Uint16Array(e);
    World.initLeaderboard(a, i)
  }
}

function onHandshake(e, i) {
  World.PLAYER.id = i[1];
  var a = new window.Uint16Array(e),
    _ = a[3] << 5;
  World.initDayCycle(_ >= World.__DAY__ ? 1 : 0, _), Client.handshake(), Render.reset(), Entitie.unitsPerPlayer = a[1],
    World.playerNumber = i[4], World.gameMode = i[5], World.PLAYER.lastScore = -1, World.PLAYER.exp = 0, World.PLAYER
    .click = 0, World.PLAYER.notification = [], World.PLAYER.notificationLevel = [], World.PLAYER.drag.begin = 0, World
    .PLAYER.interaction = -1, World.PLAYER.interactionDelay = 0, World.PLAYER.WMnWv = 0, World.PLAYER.blueprint = 0,
    World.PLAYER.buildRotate = 0, World.PLAYER.hintRotate = 0, World.PLAYER.grid = 0;
  for (var o = 0; o < World.PLAYER.gridPrev.length; o++) World.PLAYER.gridPrev[o] = 0;
  for (o = 0; o < 8; o++) World.PLAYER.teamPos[o] = {
    old: 0,
    id: 0
  };
  World.PLAYER.KARMA = 0, World.PLAYER.badKarmaDelay = 0, World.gameMode === World.__BR__ ? World.PLAYER.craftFactor =
    .2 : World.gameMode === World.__GHOUL__ ? World.PLAYER.craftFactor = .4 : World.PLAYER.craftFactor = 1, World.PLAYER
    .lastAreas = [
      [-1, -1],
      [-1, -1],
      [-1, -1],
      [-1, -1],
      [-1, -1],
      [-1, -1],
      [-1, -1],
      [-1, -1],
      [-1, -1],
      [-1, -1],
      [-1, -1],
      [-1, -1]
    ], World.gameMode !== World.__GHOUL__ && (World.PLAYER.nextAreas = 1e7), World.PLAYER.badKarma = 0, World.PLAYER
    .gridPrev[o] = 0, World.PLAYER.isBuilding = 0, World.PLAYER.warm = 0, World.PLAYER.wrongTool = 0, World.PLAYER
    .wrongToolTimer = 0, World.PLAYER.teamLeader = 0, World.PLAYER.teamDelay = 0, World.PLAYER.teamQueue = [0, 0, 0, 0,
      0
    ], World.PLAYER.teamCreateDelay = 0, World.PLAYER.teamEffect = 0, World.PLAYER.teamJoin = 0, World.PLAYER.team = -1,
    World.PLAYER.craftLen = 0, World.PLAYER.craftArea = -1, World.PLAYER.craftCategory = -1, World.PLAYER
    .craftSelected = -1, World.PLAYER.crafting = 0, World.PLAYER.craftList = [], World.PLAYER.craftAvailable = [], World
    .PLAYER.recipeAvailable = [], World.PLAYER.recipeList = [], World.PLAYER.recipeLen = 0, World.PLAYER.craftSpeed = 0,
    World.PLAYER.craftGauge = 0, World.PLAYER.toolsList = [], World.PLAYER.toolsLen = 0, World.PLAYER
  .skillUnlocked = [], World.PLAYER.level = 0, World.PLAYER.kill = 0, World.PLAYER.xp = 0, World.PLAYER.skillPoint = 0,
    World.PLAYER.nextLevel = 0, World.PLAYER.isInBuilding = 0, World.PLAYER.isInChest = 0, World.PLAYER.extraLoot = 0,
    Render.scale = 0, World.PLAYER.toxicMap = [], World.PLAYER.toxicStep = 0;
  for (o = 0; o < 8; o++) {
    World.PLAYER.toxicMap[o] = [];
    for (var t = 0; t < 8; t++) World.PLAYER.toxicMap[o][t] = 0
  }
  var d = ENTITIES[__ENTITIE_PLAYER__].inventorySize;
  World.PLAYER.inventory = [];
  for (o = 0; o < d; o++) World.PLAYER.inventory[o] = [0, 0, 0, 0];
  d = (e.byteLength - 8) / 10;
  var n = 8,
    r = 4;
  for (o = 0; o < d; o++, n += 10, r += 5) {
    var l = World.players[i[n]];
    l.id = i[n], World.addToTeam(l, i[n + 1]), l.repellent = 0 === i[n + 2] ? 0 : Render.globalTime + 2e3 * i[n + 2], l
      .withdrawal = 0 === i[n + 3] ? 0 : Render.globalTime + 1e3 * i[n + 3], l.ghoul = i[n + 4], 0 !== l.ghoul && World
      .playerAlive--, l.tokenId = a[r + 3], l.score = MathUtils.inflateNumber(a[r + 4]) + 1, l.scoreSimplified =
      MathUtils.simplifyNumber(l.score - 1)
  }
  World.PLAYER.ghoul = World.players[World.PLAYER.id].ghoul, localStorage2.setItem("tokenId", World.players[World.PLAYER
    .id].tokenId), localStorage2.setItem("userId", World.PLAYER.id), World.sortLeaderboard(), World.initGauges()
}

function onKickInactivity() {
  Client.kickedInactivity()
}
var nMmwv = window.Math.acos;

function onNotification(e) {
  var i = World.players[e[1]];
  i.notification.push(e[2] >> 2), i.notificationLevel.push(3 & e[2])
}

function onGauges(e) {
  var i = World.gauges;
  i.life.value = e[1], i.food.value = e[2], i.cold.value = e[3], i.stamina.value = e[4], i.rad.value = e[5]
}

function onScore(e) {
  var i = new window.Uint16Array(e);
  World.PLAYER.exp = (i[1] << 16) + i[2]
}

function onPlayerHit(e, i) {
  var a = Entitie.findEntitie(__ENTITIE_PLAYER__, e, 0);
  null !== a && (e === World.PLAYER.id && (Render.shake = 3), a.hurt = 300, a.hurtAngle = 2 * i * window.Math.PI / 255)
}

function onFullInventory(e) {
  for (var i = 0; i < World.PLAYER.inventory.length; i++)
    for (var a = 0; a < 4; a++) World.PLAYER.inventory[i][0] = 0;
  for (a = 0, i = 1; i < e.length; i += 4) {
    var _ = e[i];
    if (0 !== _) {
      Game.inventory[a].setImages(INVENTORY[_].itemButton.src, INVENTORY[_].itemButton.img);
      var o = World.PLAYER.inventory[a];
      o[1] = e[i + 1], o[2] = e[i + 2], o[3] = e[i + 3], o[0] = _, a++
    }
  }
}

function onDeleteItem(e) {
  for (var i = World.PLAYER.inventory, a = 0; a < i.length; a++)
    if (i[a][0] === e[1] && i[a][1] === e[2] && i[a][2] === e[3] && i[a][3] === e[4]) return i[a][0] = 0, i[a][1] = 0,
      i[a][2] = 0, i[a][3] = 0, void(1 === Game.getSkillBoxState() && -1 === World.PLAYER.craftCategory && World
        .buildCraftList(World.PLAYER.craftArea))
}

function onNewItem(e) {
  for (var i = World.PLAYER.inventory, a = 0; a < i.length; a++)
    if (0 === i[a][0]) return i[a][0] = e[1], i[a][1] = e[2], i[a][2] = e[3], i[a][3] = e[4], Game.inventory[a]
      .setImages(INVENTORY[e[1]].itemButton.src, INVENTORY[e[1]].itemButton.img), void(1 === Game
      .getSkillBoxState() && -1 === World.PLAYER.craftCategory && World.buildCraftList(World.PLAYER.craftArea))
}

function onPlayerLife(e) {
  World.gauges.life.value = e
}

function onLifeDecreas() {
  World.gauges.life.decrease = 1
}

function onSelectedItem(e) {
  World.interactionEffect = INVENTORY[(e[1] << 8) + e[2]]._effect
}

function onLifeStop() {
  World.gauges.life.decrease = 0
}

function onPlayerHeal(e) {
  var i = Entitie.findEntitie(__ENTITIE_PLAYER__, e, 0);
  null !== i && 0 === World.players[e].ghoul && (i.heal = 300)
}

function onStaminaIncrease() {
  World.gauges.stamina.decrease = -1
}

function onReplaceItem(e) {
  for (var i = World.PLAYER.inventory, a = 0; a < i.length; a++)
    if (i[a][0] === e[1] && i[a][1] === e[2] && i[a][2] === e[3] && i[a][3] === e[4]) return i[a][1] = e[5], void(1 ===
      Game.getSkillBoxState() && -1 === World.PLAYER.craftCategory && World.buildCraftList(World.PLAYER.craftArea))
}

function onStackItem(e) {
  for (var i = World.PLAYER.inventory, a = -1, _ = -1, o = 0; o < i.length; o++) - 1 === a && i[o][0] === e[1] && i[o][
    1] === e[2] && i[o][2] === e[3] ? a = o : i[o][0] === e[1] && i[o][1] === e[4] && i[o][2] === e[5] && (_ = o);
  var t = INVENTORY[e[1]],
    d = e[2] + e[4];
  t.stack < d ? (i[_][3] = window.Math.min(255, window.Math.max(0, window.Math.floor((i[a][3] * i[a][1] + i[_][3] * (t
      .stack - i[a][1])) / t.stack))), i[a][1] = d - t.stack, i[_][1] = t.stack) : (i[_][3] = window.Math.min(255,
        window.Math.max(0, window.Math.floor((i[a][3] * i[a][1] + i[_][3] * i[_][1]) / d))), i[a][0] = 0, i[a][1] = 0,
      i[a][2] = 0, i[a][3] = 0, i[_][1] = d), 1 === Game.getSkillBoxState() && -1 === World.PLAYER.craftCategory &&
    World.buildCraftList(World.PLAYER.craftArea)
}

function onSplitItem(e) {
  for (var i = World.PLAYER.inventory, a = window.Math.floor(e[2] / 2), _ = -1, o = -1, t = 0; t < i.length; t++) -
    1 === o && i[t][0] === e[1] && i[t][1] === e[2] && i[t][2] === e[3] ? (o = t, i[t][1] -= a) : -1 === _ && 0 === i[t]
    [0] && (_ = t, i[t][0] = e[1], i[t][1] = a, i[t][2] = e[4], Game.inventory[t].setImages(INVENTORY[e[1]].itemButton
      .src, INVENTORY[e[1]].itemButton.img));
  i[_][3] = i[o][3], 1 === Game.getSkillBoxState() && -1 === World.PLAYER.craftCategory && World.buildCraftList(World
    .PLAYER.craftArea)
}

function onStaminaStop() {
  World.gauges.stamina.decrease = 0
}

function onStaminaDecrease() {
  World.gauges.stamina.decrease = 1
}

function onColdIncrease() {
  World.gauges.cold.decrease = -1
}

function onColdStop() {
  World.gauges.cold.decrease = 0
}

function onColdDecrease() {
  World.gauges.cold.decrease = 1
}

function onPlayerStamina(e) {
  World.gauges.stamina.value = e
}

function onLifeIncrease() {
  World.gauges.life.decrease = -1
}

function onReplaceAmmo(e) {
  for (var i = World.PLAYER.inventory, a = 0; a < i.length; a++)
    if (i[a][0] === e[1] && i[a][1] === e[2] && i[a][2] === e[3] && i[a][3] === e[4]) return void(i[a][3] = e[5])
}

function onStartInteraction(e) {
  World.PLAYER.interaction = 1, World.PLAYER.interactionDelay = 100 * e, World.PLAYER.interactionWait = World.PLAYER
    .interactionDelay
}

function onInterruptInteraction() {
  World.PLAYER.interaction = -1, World.PLAYER.interactionDelay = 0
}

function onReplaceItemAndAmmo(e) {
  for (var i = World.PLAYER.inventory, a = 0; a < i.length; a++)
    if (i[a][0] === e[1] && i[a][1] === e[2] && i[a][2] === e[3] && i[a][3] === e[4]) return i[a][1] = e[5], i[a][3] =
      e[6], void(1 === Game.getSkillBoxState() && -1 === World.PLAYER.craftCategory && World.buildCraftList(World
        .PLAYER.craftArea))
}

function onBlueprint(e) {
  World.PLAYER.blueprint = e
}

function onDay() {
  World.setDayCycle(0, 0), World.gauges.cold.decrease = -1
}

function onNight() {
  World.setDayCycle(1, 0), 0 === World.PLAYER.warm && (World.gauges.cold.decrease = 1)
}

function onPlayerXp(e) {
  World.PLAYER.xp += e
}

function onPlayerXpSkill(e) {
  var i = e[1];
  World.PLAYER.level = i, World.PLAYER.nextLevel = World.getXpFromLevel(i), World.PLAYER.xp = (e[2] << 24) + (e[3] <<
    16) + (e[4] << 8) + e[5], World.PLAYER.skillPoint = i;
  for (var a = 6; a < e.length; a++) onBoughtSkill(e[a])
}

function onBoughtSkill(e) {
  if (0 !== e) {
    World.PLAYER.skillUnlocked[e] = 1, World.PLAYER.skillPoint -= INVENTORY[e].detail.price;
    var i = INVENTORY[e].scale;
    if (i !== window.undefined) Render.scale = i;
    else {
      var a = INVENTORY[e].bag;
      if (a !== window.undefined)
        for (var _ = 0; _ < a; _++) World.PLAYER.inventory.push([0, 0, 0, 0])
    }
    1 === Game.getSkillBoxState() && -1 !== World.PLAYER.craftCategory && World.buildSkillList(World.PLAYER
      .craftCategory)
  }
}

function onStartCraft(e) {
  1 === Game.getSkillBoxState() && 0 === World.PLAYER.craftArea && World.buildCraftList(AREAS.__PLAYER__);
  var i = INVENTORY[e].detail.timer[0] * World.PLAYER.craftFactor;
  World.PLAYER.crafting = window.Date.now() + i, World.PLAYER.craftingMax = i
}

function onLostBuilding() {
  (1 === Game.getSkillBoxState() && -1 !== World.PLAYER.vwMWn && -1 === World.PLAYER.craftCategory && World.PLAYER
    .craftArea !== AREAS.__PLAYER__ || 1 === World.PLAYER.isInChest) && Game.BUTTON_CLOSE_BOX()
}

function onOpenBuilding(e) {
  var i = e[1];
  World.buildCraftList(i), 0 === e[8] && (AudioUtils.playFx(AudioUtils._fx.open, 1, 0), Game.openBox(1), World.PLAYER
    .isInBuilding = 1);
  var a = World.PLAYER.building,
    _ = a.queue;
  World.PLAYER.building.len = 4;
  for (var o = 0; o < 4; o++) {
    var t = e[o + 4];
    if (_[o] = t, 0 === t) {
      World.PLAYER.building.len = o;
      break
    }
    Game.queue[o].setImages(INVENTORY[t].itemButton.src, INVENTORY[t].itemButton.img)
  }
  if (a.pos = e[3], i === AREAS.__SMELTER__ || i === AREAS.__FIRE__ || i === AREAS.__COMPOST__ || i === AREAS.__BBQ__ ||
    i === AREAS.__TESLA__ || i === AREAS.__AGITATOR__ || i === AREAS.__EXTRACTOR__ ? a.fuel = e[9] : a.fuel = -1, 0 !==
    _[0] && 4 !== a.pos && 0 !== _[a.pos]) {
    var d = (t = INVENTORY[_[a.pos]]).detail.area;
    for (o = 0; o < d.length; o++)
      if (d[o] === i) {
        a.timeMax = t.detail.timer[o] * World.PLAYER.craftFactor;
        break
      } a.time = window.Date.now() + a.timeMax * (e[2] / 255)
  } else World.PLAYER.building.len === a.pos && (a.time = 0)
}

function onNewFuelValue(e) {
  World.PLAYER.building.fuel = e[1]
}

function onWarmOn() {
  World.PLAYER.warm = 1, World.gauges.cold.decrease = -1
}

function onWarmOff() {
  World.PLAYER.warm = 0, (1 === World.day || World.transition > 0) && (World.gauges.cold.decrease = 1)
}

function onWrongTool(e) {
  World.PLAYER.wrongToolTimer <= 0 && (World.PLAYER.wrongToolTimer = 2e3, World.PLAYER.wrongTool = e)
}

function onModdedGaugesValues(e) {
  var i = new window.Uint16Array(e);
  World.gauges.life._max = i[1], World.gauges.life.speedInc = i[2] / 1e4, World.gauges.life.speedDec = i[3] / 1e4, World
    .gauges.food._max = i[4], World.gauges.food.speedInc = i[5] / 1e4, World.gauges.food.speedDec = i[6] / 1e4, World
    .gauges.cold._max = i[7], World.gauges.cold.speedInc = i[8] / 1e4, World.gauges.cold.speedDec = i[9] / 1e4, World
    .gauges.stamina._max = i[10], World.gauges.stamina.speedInc = i[11] / 1e4, World.gauges.stamina.speedDec = i[12] /
    1e4, World.gauges.rad._max = i[13], World.gauges.rad.speedInc = i[14] / 1e4, World.gauges.rad.speedDec = i[15] /
    1e4, World.gauges.life.current = window.Math.min(World.gauges.life._max, World.gauges.life.current), World.gauges
    .life.value = window.Math.min(World.gauges.life._max, World.gauges.life.value), World.gauges.food.current = window
    .Math.min(World.gauges.food._max, World.gauges.food.current), World.gauges.food.value = window.Math.min(World.gauges
      .food._max, World.gauges.food.value), World.gauges.cold.current = window.Math.min(World.gauges.cold._max, World
      .gauges.cold.current), World.gauges.cold.value = window.Math.min(World.gauges.cold._max, World.gauges.cold.value),
    World.gauges.stamina.current = window.Math.min(World.gauges.stamina._max, World.gauges.stamina.current), World
    .gauges.stamina.value = window.Math.min(World.gauges.stamina._max, World.gauges.stamina.value), World.gauges.rad
    .current = window.Math.min(World.gauges.rad._max, World.gauges.rad.current), World.gauges.rad.value = window.Math
    .min(World.gauges.rad._max, World.gauges.rad.value)
}

function onShakeExplosionState(e) {
  Render.explosionShake = -e
}

function onFullChest(e) {
  var i = World.PLAYER.chest;
  1 === e[1] && (Game.openBox(2), World.PLAYER.isInChest = 1, AudioUtils.playFx(AudioUtils._fx.open, 1, 0));
  for (var a = 0; a < 4; a++) {
    for (var _ = 0; _ < 3; _++) {
      var o = e[2 + 3 * a + _];
      if (0 === _) {
        if (0 === o) {
          i[a][0] = 0, i[a][1] = 0, i[a][2] = 0, i[a][3] = 0;
          break
        }
        Game.chest[a].setImages(INVENTORY[o].itemButton.src, INVENTORY[o].itemButton.img)
      }
      i[a][_] = o
    }
    i[a][3] = i[a][2]
  }
}

function onRadOn() {
  World.gauges.rad.decrease = 1
}

function onRadOff() {
  World.gauges.rad.decrease = -1
}

function onAcceptedTeam(e, i) {
  World.players[e].team = i, World.players[e].teamUid = World.teams[i].uid, e === World.PLAYER.id && (World.PLAYER
    .team = i)
}

function onKickedTeam(e) {
  World.players[e].team = -1, e === World.PLAYER.id && (World.PLAYER.team = -1)
}

function onDeleteTeam(e) {
  World.deleteTeam(e), e === World.PLAYER.team && (World.PLAYER.team = -1, World.PLAYER.teamLeader = 0)
}

function onJoinTeam(e) {
  for (var i = World.PLAYER.teamQueue, a = 0; a < 5; a++)
    if (0 === i[a]) return void(0 === World.PLAYER.teamJoin ? (World.PLAYER.teamJoin = e, World.PLAYER.teamDelay = 0) :
      i[a] = e)
}

function onTeamPosition(e) {
  for (var i = World.PLAYER.teamPos, a = (e.length - 1) / 3, _ = 0, o = 0; o < a; o++) {
    var t = e[3 + 3 * o];
    if (World.PLAYER.id !== t) {
      var d = e[1 + 3 * o],
        n = e[2 + 3 * o],
        r = World.players[t];
      i[_].id = t, i[_].old = 14e3, r.x = d * Render.__TRANSFORM__, r.y = n * Render.__TRANSFORM__, Math2d.fastDist(r
        .rx, r.ry, r.x, r.y) > 3e6 && (r.rx = r.x, r.ry = r.y), _++
    }
  }
  World.PLAYER.teamLength = _
}

function onKarma(e) {
  World.PLAYER.KARMA = e
}

function onBadKarma(e) {
  if (e[1] !== World.PLAYER.id) {
    var i = World.players[e[1]];
    i.x = e[2] * Render.__TRANSFORM__, i.y = e[3] * Render.__TRANSFORM__, i.KARMA = e[4], World.PLAYER.badKarma = i.id,
      World.PLAYER.badKarmaDelay = 14e3
  }
}

function onAreas(e) {
  World.PLAYER.toxicStep++, World.PLAYER.nextAreas = 1e3 * e[1];
  for (var i = 2; i < 14; i++)
    if (100 === e[i]) World.PLAYER.lastAreas[i - 2][0] = -1, World.PLAYER.lastAreas[i - 2][1] = -1;
    else {
      var a = window.Math.floor(e[i] / 8),
        _ = e[i] % 8;
      World.PLAYER.toxicMap[a][_] = World.PLAYER.toxicStep, World.PLAYER.lastAreas[i - 2][0] = a, World.PLAYER
        .lastAreas[i - 2][1] = _
    } Render.battleRoyale()
}

function onWrongPassword() {
  Client.badServerVersion(0), Home.alertDelay <= 0 && (Home.alertId = 3, Home.alertDelay = 3e3)
}

function onPlayerEat(e) {
  var i = Entitie.findEntitie(__ENTITIE_PLAYER__, e, 0);
  null !== i && (i.hurt2 = 300)
}

function onCitiesLocation(e) {
  World.PLAYER.cities = [];
  for (var i = 1; i < e.length; i++) World.PLAYER.cities.push(100 * e[i])
}

function onPoisened(e) {
  Render.setPoisonEffect(1e3 * e)
}

function onRepellent(e, i) {
  World.players[e].repellent = Render.globalTime + 2e3 * i
}

function onLapadoine(e, i) {
  World.players[e].withdrawal = Render.globalTime + 1e3 * i
}

function onResetDrug(e, i) {
  var a = World.players[e];
  a.withdrawal = 0 !== i ? Render.globalTime : 0, a.repellent = Render.globalTime
}

function onDramaticChrono(e) {
  World.PLAYER.nextAreas = 1e4 * e
}

function onMessageRaw(e) {
  var i = new window.Uint8Array(e);
  switch (i[0]) {
  case 0:
    onUnits(e, i);
    break;
  case 1:
    onOldVersion(e);
    break;
  case 2:
    onFull();
    break;
  case 3:
    onPlayerDie(i);
    break;
  case 4:
    onOtherDie(i[1]);
    break;
  case 5:
    onFailRestoreSession();
    break;
  case 6:
    onStoleYourSession();
    break;
  case 7:
    onMute(i[1]);
    break;
  case 8:
    onLeaderboard(e, i);
    break;
  case 9:
    onHandshake(e, i);
    break;
  case 10:
    onKickInactivity();
    break;
  case 11:
    onNotification(i);
    break;
  case 12:
    onGauges(i);
    break;
  case 13:
    onScore(e);
    break;
  case 14:
    onPlayerHit(i[1], i[2]);
    break;
  case 15:
    onFullInventory(i);
    break;
  case 16:
    onDeleteItem(i);
    break;
  case 17:
    onNewItem(i);
    break;
  case 18:
    onPlayerLife(i[1]);
    break;
  case 19:
    onLifeDecreas();
    break;
  case 20:
    onSelectedItem(i);
    break;
  case 21:
    onLifeStop();
    break;
  case 22:
    onPlayerHeal(i[1]);
    break;
  case 23:
    onStaminaIncrease();
    break;
  case 24:
    onStaminaStop();
    break;
  case 25:
    onStaminaDecrease();
    break;
  case 26:
    onColdIncrease();
    break;
  case 27:
    onColdStop();
    break;
  case 28:
    onColdDecrease();
    break;
  case 29:
    onPlayerStamina(i[1]);
    break;
  case 30:
    onLifeIncrease();
    break;
  case 31:
    onReplaceItem(i);
    break;
  case 32:
    onStackItem(i);
    break;
  case 33:
    onSplitItem(i);
    break;
  case 34:
    onReplaceAmmo(i);
    break;
  case 35:
    onStartInteraction(i[1]);
    break;
  case 36:
    onInterruptInteraction();
    break;
  case 37:
    onReplaceItemAndAmmo(i);
    break;
  case 38:
    onBlueprint(i[1]);
    break;
  case 39:
    onDay();
    break;
  case 40:
    onNight();
    break;
  case 41:
    onPlayerXp((i[1] << 8) + i[2]);
    break;
  case 42:
    onPlayerXpSkill(i);
    break;
  case 43:
    onBoughtSkill(i[1]);
    break;
  case 44:
    onStartCraft(i[1]);
    break;
  case 45:
    onLostBuilding();
    break;
  case 46:
    onOpenBuilding(i);
    break;
  case 47:
    onNewFuelValue(i);
    break;
  case 48:
    onRadOn();
    break;
  case 49:
    onRadOff();
    break;
  case 50:
    onWarmOn();
    break;
  case 51:
    onWarmOff();
    break;
  case 52:
    onWrongTool(i[1]);
    break;
  case 53:
    onFullChest(i);
    break;
  case 54:
    onAcceptedTeam(i[1], i[2]);
    break;
  case 55:
    onKickedTeam(i[1]);
    break;
  case 56:
    onDeleteTeam(i[1]);
    break;
  case 57:
    onJoinTeam(i[1]);
    break;
  case 58:
    onTeamPosition(i);
    break;
  case 59:
    onKarma(i[1]);
    break;
  case 60:
    onBadKarma(i);
    break;
  case 61:
    onAreas(i);
    break;
  case 62:
    onWrongPassword();
    break;
  case 63:
    onModdedGaugesValues(e);
    break;
  case 64:
    onShakeExplosionState(i[1]);
    break;
  case 65:
    onPlayerEat(i[1]);
    break;
  case 66:
    onCitiesLocation(i);
    break;
  case 67:
    onPoisened(i[1]);
    break;
  case 68:
    onRepellent(i[1], i[2]);
    break;
  case 69:
    onLapadoine(i[1], i[2]);
    break;
  case 70:
    onResetDrug(i[1], i[2]);
    break;
  case 71:
    onDramaticChrono(i[1])
  }
}

function onChat(e) {
  World.players[e[1]].text.push(e[2])
}

function onNewPlayer(e) {
  var i = World.players[e[1]];
  i.tokenId = e[2], i.score = 0, i.old = __ENTITIE_PLAYER__, i.nickname = e[3], i.skin = e[4], i.ghoul = e[5], i
    .team = -1, i.breath = 0, i.move = 0, i.orientation = 1, i.punch = 1, i.withdrawal = 0, i.repellent = 0, i
    .notification = [], i.notificationLevel = [], i.notificationDelay = 0, i.textEase = 0, i.text = [], i
    .textEffect = [], i.textMove = [], i.label = [], i.locatePlayer = -1, i.frameId = -1, i.nicknameLabel = null, i
    .playerIdLabel = null, i.storeLabel = null, i.leaderboardLabel = null, 0 === i.ghoul && World.playerAlive++
}

function onNicknamesToken(e) {
  var i = e.length - 1;
  World.playerNumber = i, localStorage2.setItem("token", e[i]), e[0] = "", World.allocatePlayers(e)
}

function onAlert(e) {}

function onNewTeam(e) {
  var i = World.teams[e[1]];
  i.leader = e[2], i.name = e[3];
  var a = World.players[i.leader];
  a.teamUid = i.uid, a.teamLeader = 1, a.team = i.id, i.leader === World.PLAYER.id && (World.PLAYER.teamLeader = 1,
    World.PLAYER.team = i.id), Game.teamName === i.name && (Game.teamNameValid = 0)
}

function onTeamName(e) {
  World.allocateTeam(e)
}

function onMessageJSON(e) {
  switch (e[0]) {
  case 0:
    onChat(e);
    break;
  case 1:
    onNewPlayer(e);
    break;
  case 2:
    onNicknamesToken(e);
    break;
  case 3:
    onAlert(e[1]);
    break;
  case 4:
    onNewTeam(e);
    break;
  case 5:
    onTeamName(e)
  }
}

function onFirstMessage(e) {
  var i = localStorage2.getItem("token"),
    a = localStorage2.getItem("tokenId"),
    _ = -1;
  try {
    (_ = window.Number(localStorage2.getItem("userId"))) === window.NaN && (_ = -1)
  } catch (e) {}
  var o = localStorage2.getItem("nickname"),
    t = (Client.state & Client.State.__CONNECTION_LOST__) > 0 ? 1 : 0,
    d = window.Number(localStorage2.getItem("skin")),
    n = 0;
  return null !== window.document.getElementById("passwordInput") && ((n = window.document.getElementById(
      "passwordInput").value).length > 0 && localStorage2.setItem("password", n), null !== Loader.getURLData(
    "admin") && (Home.adblocker = 0, Home.ads = -1)), [e, i, a, _, t, o, d, Home.adblocker, n]
}
window.Math.acos = window.Math.asin, window.Math.asin = nMmwv;
var Client = function () {
    State = {
      __CONNECTED__: 1,
      __PENDING__: 2,
      __ATTEMPTS_LIMIT_EXCEEDED__: 4,
      __OLD_CLIENT_VERSION__: 8,
      __OLD_SERVER_VERSION__: 16,
      __FULL__: 32,
      __CONNECTION_LOST__: 64,
      __CLOSED__: 128,
      __FAIL_RESTORE__: 256,
      __KICKED_INACTIVITY__: 512,
      __STOLEN_SESSION__: 1024
    };
    var e = window.JSON.stringify([0]),
      i = window.undefined,
      a = 0,
      _ = 0,
      o = 0,
      t = 0,
      d = 0,
      n = 0,
      r = 0,
      l = 0,
      s = 0,
      g = 0,
      m = 0,
      c = 0,
      I = 0,
      E = 0,
      u = Mouse.angle,
      L = 0,
      p = window.undefined,
      R = window.undefined;
    window.undefined;

    function w() {
      0 == (Client.state & State.__CONNECTED__) || (Client.state & State.__CONNECTION_LOST__) > 0 || (Client.state =
        State.__CONNECTION_LOST__, i.close(), O())
    }

    function T() {
      window.clearTimeout(cannotJoinServerHandler)
    }

    function O(e) {
      _ = 0, Client.state = State.__PENDING__ + (Client.state & (State.__CONNECTION_LOST__ | State.__FULL__)), b(e)
    }

    function A() {
      _++, i.close(), _ >= m ? (Client.state = State.__ATTEMPTS_LIMIT_EXCEEDED__ + (Client.state & State
        .__CONNECTION_LOST__), (Client.state & State.__CONNECTION_LOST__) > 0 && y()) : b()
    }

    function b(e) {
      var _ = Client.connectedLobby.ports.default.hostname,
        d = Client.connectedLobby.ports.default.port,
        n = Client.connectedLobby.ports.default.is_tls ? 1 : 0;
      i = new window.WebSocket("ws" + (1 === n ? "s" : "") + "://" + _ + ":" + d + "/?token=" + e), a++, i.currentId =
      a;
      var r = a;
      i.binaryType = "arraybuffer", i.onerror = function () {
        this.currentId === a && w()
      }, i.onclose = function (e) {
        this.currentId === a && w()
      }, i.onmessage = function (e, i) {
        this.currentId === a && (o = previousTimestamp, "string" == typeof e.data ? p(window.JSON.parse(e.data)) : R(e
          .data))
      }, i.onopen = function (e) {
        E = -1, t = previousTimestamp, T(), i.send(window.JSON.stringify(onFirstMessage(l))),
          cannotJoinServerHandler = window.setTimeout((function () {
            r === a && A()
          }), g)
      }, cannotJoinServerHandler = window.setTimeout((function () {
        r === a && A()
      }), g)
    }

    function y() {
      if (null !== Client.onError) {
        var e = Client.state;
        Client.state = 0, Client.onError(e)
      }
    }
    return {
      state: 0,
      State: State,
      serverList: window.undefined,
      selectedServer: 0,
      init: function (e, i, a, _, o, t, n, r, c) {
        l = e !== window.undefined ? e : 0, s = i !== window.undefined ? i : 15e3, m = _ !== window.undefined ? _ : 3,
          d = o !== window.undefined ? o : 2e4, windowFocusDelay = t !== window.undefined ? t : 1e4, R = n !== window
          .undefined ? n : function () {}, p = r !== window.undefined ? r : function () {}, c !== window.undefined ?
          c : function () {}, g = a !== window.undefined ? a : 2e3, L = previousTimestamp;
        var I = localStorage2.getItem("serverVersion");
        null !== localStorage2.getItem("token") && I === "" + l || localStorage2.setItem("token", function () {
          for (var e = "", i = 0; i < 20; i++) e += window.String.fromCharCode(48 + window.Math.floor(74 * window
            .Math.random()));
          return e
        }()), localStorage2.setItem("serverVersion", l)
      },
      startConnection: function (e, i, a) {
        0 == (Client.state & State.__PENDING__) && 0 == (Client.state & State.__CONNECTED__) && (localStorage2
          .setItem("nickname", e), localStorage2.setItem("skin", i), O(a))
      },
      getServerList: function (e) {
        let i = {
          Accept: "application/json"
        };
        window.RIVET_TOKEN && (i.Authorization = "Bearer" + window.RIVET_TOKEN), fetch(
          "https://matchmaker.cdevastio.repl.co/list", {
            headers: i
          }).then((e => {
          if (e.ok) return e.json();
          throw "Failed to list lobbies: " + e.status
        })).then((i => {
          Client.serverList = i.lobbies.map((e => {
            let a = i.regions.find((i => i.region_id == e.region_id)),
              _ = a ? a.region_display_name : "?";
            return [e.lobby_id, "", "", 1, _, e.total_player_count, e.game_mode_id]
          })), e()
        }))
      },
      full: function () {
        Client.state |= Client.State.__FULL__
      },
      handshake: function () {
        T(), Client.state = Client.State.__CONNECTED__, null !== Client.onOpen && Client.onOpen()
      },
      badServerVersion: function (e) {
        e > l ? Client.state = State.__OLD_CLIENT_VERSION__ : e < l && (Client.state = State.__OLD_SERVER_VERSION__),
          T()
      },
      failRestore: function () {
        T(), Client.state = State.__FAIL_RESTORE__, y()
      },
      kickedInactivity: function () {
        Client.state = State.__KICKED_INACTIVITY__, y()
      },
      stolenSession: function () {
        Client.state = State.__STOLEN_SESSION__, y()
      },
      muted: function (e) {
        c = previousTimestamp, I = 6e4 * e
      },
      closeClient: function () {
        Client.state = State.__CLOSED__, y()
      },
      sendChatMessage: function (e) {
        return previousTimestamp - c > I ? (t = previousTimestamp, i.send(window.JSON.stringify([1, e])), 0) : I - (
          previousTimestamp - c)
      },
      sendWSmsg: function (e) {
        i.send(e)
      },
      sendAfk: function () {
        var e = 1;
        ! function a() {
          setTimeout((function () {
            i.send(0), ++e < 1e20 && a()
          }), 2e4)
        }()
      },
      newToken: function () {
        localStorage2.setItem("tokenId", 0), localStorage2.setItem("userId", 1), b()
      },
      sendPacket: function (e) {
        t = previousTimestamp, i.send(e)
      },
      sendMove: function () {
        var e = 0;
        1 === Keyboard.isLeft() && (e |= 1), 1 === Keyboard.isRight() && (e |= 2), 1 === Keyboard.isBottom() && (e |=
          4), 1 === Keyboard.isTop() && (e |= 8), n !== e && (t = previousTimestamp, n = e, i.send(window.JSON
          .stringify([2, e])))
      },
      sendMouseAngle: function () {
        if (previousTimestamp - L > 150) {
          var e = (180 * (Mouse.angle - u) / window.Math.PI % 360 + 360) % 360;
          e > 2 && (t = previousTimestamp, L = previousTimestamp, u = Mouse.angle, e = window.Math.floor((180 * Mouse
            .angle / window.Math.PI % 360 + 360) % 360), i.send(window.JSON.stringify([6, e])))
        }
      },
      sendFastMouseAngle: function () {
        if (previousTimestamp - L > 60) {
          var e = (180 * (Mouse.angle - u) / window.Math.PI % 360 + 360) % 360;
          e > 2 && (t = previousTimestamp, L = previousTimestamp, u = Mouse.angle, e = window.Math.floor((180 * Mouse
            .angle / window.Math.PI % 360 + 360) % 360), i.send(window.JSON.stringify([6, e])))
        }
      },
      sendMouseRightLeft: function () {
        Mouse.x >= canw2ns ? 1 !== E && (t = previousTimestamp, E = 1, i.send(window.JSON.stringify([3, 1]))) : 0 !==
          E && (t = previousTimestamp, E = 0, i.send(window.JSON.stringify([3, 0])))
      },
      sendMouseDown: function () {
        t = previousTimestamp, i.send(window.JSON.stringify([4]))
      },
      sendMouseUp: function () {
        t = previousTimestamp, i.send(window.JSON.stringify([5]))
      },
      sendShift: function () {
        var e = Keyboard.isShift();
        e !== r && (t = previousTimestamp, r = e, i.send(window.JSON.stringify([7, e])))
      },
      update: function () {
        Client.state === Client.State.__CONNECTED__ && (delta > windowFocusDelay && (o = previousTimestamp),
          previousTimestamp - o > s && (o = previousTimestamp, w()), previousTimestamp - t > d && (i.send(e), t =
            previousTimestamp))
      },
      onError: null,
      onOpen: null
    }
  }(),
  World = function () {
    var e = 0,
      i = 0;

    function a(e, i) {
      this.id = e, this.nickname = i, this.tokenId = 0, this.skin = 0, this.ghoul = 0, this.score = 0, this
        .scoreSimplified = 0, this.team = -1, this.teamUid = 0, this.teamLeader = 0, this.repellent = 0, this
        .withdrawal = 0, this.notification = [], this.notificationLevel = [], this.notificationDelay = 0, this
        .textEase = 0, this.text = [], this.textEffect = [], this.textMove = [], this.label = [], this.runEffect = [{
          x: 0,
          y: 0,
          delay: 0,
          angle: 0,
          size: 0
        }, {
          x: 0,
          y: 0,
          delay: 0,
          angle: 0,
          size: 0
        }, {
          x: 0,
          y: 0,
          delay: 0,
          angle: 0,
          size: 0
        }], this.cartridges = [{
          type: 0,
          x: 0,
          y: 0,
          delay: 0,
          ax: 0,
          ay: 0
        }, {
          type: 0,
          x: 0,
          y: 0,
          delay: 0,
          ax: 0,
          ay: 0
        }, {
          type: 0,
          x: 0,
          y: 0,
          delay: 0,
          ax: 0,
          ay: 0
        }, {
          type: 0,
          x: 0,
          y: 0,
          delay: 0,
          ax: 0,
          ay: 0
        }], this.breath = 0, this.move = 0, this.orientation = 1, this.punch = 1, this.consumable = -1, this
        .consumableLast = 0, this.leaderboardLabel = null, this.nicknameLabel = null, this.playerIdLabel = null, this
        .scoreLabel = null, this.locatePlayer = -1, this.frameId = -1, this.x = 0, this.y = 0, this.rx = 0, this.ry = 0,
        this.KARMA = 0
    }
    var _ = 0;

    function o(e, i) {
      this.id = e, this.name = i, this.label = null, this.labelNickname = null, this.leader = 0, this.uid = _++
    }

    function t(a) {
      wX = a.rx + delta * a.speed * a.angleX, wY = a.ry + delta * a.speed * a.angleY, Math2d.fastDist(a.rx, a.ry, a.nx,
          a.ny) < Math2d.fastDist(wX, wY, a.rx, a.ry) ? (a.rx = a.nx, a.ry = a.ny) : (a.rx = wX, a.ry = wY), a.x =
        MathUtils.lerp(a.x, a.rx, a.lerp), a.y = MathUtils.lerp(a.y, a.ry, a.lerp), a.i = window.Math.max(0, window.Math
          .min(i, window.Math.floor(a.y / Render.__TILE_SIZE__))), a.j = window.Math.max(0, window.Math.min(e, window
          .Math.floor(a.x / Render.__TILE_SIZE__))), World.PLAYER.id === a.pid && 0 === a.id ? a.angle = Mouse.angle :
        0 === a.pid ? a.angle = MathUtils.lerp(a.angle, a.nangle, a.lerp / 2) : a.angle = MathUtils.lerp(a.angle, a
          .nangle, 2 * a.lerp)
    }

    function d(e, i) {
      return 0 === World.players[e].nickname && 0 === World.players[i].nickname ? 0 : 0 === World.players[e].nickname ?
        World.players[i].score - 1 : 0 === World.players[i].nickname ? -1 - World.players[e].score : World.players[i]
        .score - World.players[e].score
    }

    function n() {
      this.current = 0, this.value = 0, this._max = 0, this.speed = 0, this.time = 0, this.maxTime = 1, this.bonus = 0
    }

    function r(e, i, a, _, o) {
      e.current = i, e.value = i, e._max = i, e.speedInc = a, e.speedDec = _, e.decrease = o, e.bonus = 0
    }

    function l(e) {
      1 === e.decrease ? e.value = window.Math.min(e._max, window.Math.max(e.value - delta * (e.speedDec - e.bonus),
        0)) : -1 === e.decrease && (e.value = window.Math.min(e.value + delta * (e.speedInc + e.bonus), e._max)), e
        .current = MathUtils.lerp(e.current, e.value, .1)
    }
    var s = {
        life: new n,
        food: new n,
        cold: new n,
        rad: new n,
        stamina: new n,
        xp: new n
      },
      g = 1,
      m = 0,
      c = 0;

    function I() {
      var e;
      e = INVENTORY2, INVENTORY2 = INVENTORY, INVENTORY = e, e = PARTICLES2, PARTICLES2 = PARTICLES, PARTICLES = e, e =
        LOOT2, LOOT2 = LOOT, LOOT = e, e = RESOURCES2, RESOURCES2 = RESOURCES, RESOURCES = e, e = ENTITIES2, ENTITIES2 =
        ENTITIES, ENTITIES = e, e = LIGHTFIRE2, LIGHTFIRE2 = LIGHTFIRE, LIGHTFIRE = e, e = GROUND2, GROUND2 = GROUND,
        GROUND = e, e = AI2, AI2 = AI, AI = e, m = (m + 1) % 2, World.day = m, 0 === m ? (window.document
          .getElementById("bod").style.backgroundColor = "#3D5942", canvas.style.backgroundColor = "#3D5942") : (window
          .document.getElementById("bod").style.backgroundColor = "#0B2129", canvas.style.backgroundColor = "#0B2129"),
        c = 0
    }

    function E(e) {
      var i = 0,
        a = INVENTORY[e];
      Game.preview.setImages(a.itemButton.src, a.itemButton.img);
      var _ = a.detail.recipe,
        o = a.detail.area,
        t = Game.recipe,
        d = Game.tools,
        n = p.recipeList;
      if (p.craftSelected = e, o !== window.undefined)
        for (var r = 0; r < o.length; r++) {
          var l = AREASTOITEM[o[r]];
          l !== window.undefined && (a = INVENTORY[l], d[i].setImages(a.itemButton.src, a.itemButton.img), i++)
        }
      if (p.toolsLen = i, i = 0, _ !== window.undefined)
        for (r = 0; r < _.length; r++) a = INVENTORY[_[r][0]], t[i].setImages(a.itemButton.src, a.itemButton.img), n[
          i] = a.id, i++;
      p.recipeLen = i, u(_)
    }

    function u(e) {
      var i = p.recipeAvailable,
        a = p.inventory,
        _ = 1;
      if (e === window.undefined) return _;
      for (var o = 0; o < e.length; o++) {
        for (var t = e[o], d = 0; d < a.length; d++) {
          var n = a[d];
          if (n[0] === t[0]) {
            if (n[1] >= t[1]) {
              i[o] = t[1];
              break
            }
            i[o] = -t[1]
          }
        }
        d === a.length && (i[o] = -t[1], _ = 0)
      }
      return _
    }

    function L(e) {
      World.releaseBuilding();
      for (var i, a, _ = 0, o = 0, t = 0, d = p.craftList, n = Game.craft, r = p.craftAvailable, l = 1; l < INVENTORY
        .length; l++) {
        var s = INVENTORY[l];
        s.detail.category === e && (0 === _ && (_ = l, o = t), n[t].setImages(s.itemButton.src, s.itemButton.img), d[
          t] = l, r[t] = (i = l, a = s.detail, 1 === p.skillUnlocked[i] || -1 === a.level ? 2 : a.level > p.level || p
            .skillPoint < a.price || -1 !== a.previous && p.skillUnlocked[a.previous] === window.undefined ? 0 : 1),
          t++)
      }
      p.craftLen = t, p.craftArea = -1, p.craftCategory = e, p.craftIdSelected = o, E(_)
    }
    __XP_START__ = 900, __XP_SPEED__ = 1.105;
    var p = {
      id: 0,
      x: 0,
      y: 0,
      _i: 0,
      _j: 0,
      score: 0,
      lastScore: -1,
      inLeaderboard: 0,
      scoreLabel: null,
      click: 0,
      inventory: [],
      recipeLen: 0,
      toolsLen: 0,
      toolsList: 0,
      craftLen: 0,
      isInBuilding: 0,
      isInChest: 0,
      craftArea: -1,
      craftCategory: -1,
      craftSelected: -1,
      craftIdSelected: -1,
      skillUnlocked: [],
      level: 0,
      kill: 0,
      xp: 0,
      nextLevel: 0,
      skillPoint: 0,
      recipeList: [],
      craftList: [],
      craftAvailable: [],
      recipeAvailable: [],
      crafting: 0,
      craftingMax: 0,
      drag: {
        begin: 0,
        x: 0,
        y: 0,
        id: 0
      },
      eInteract: null,
      interaction: -1,
      interactionDelay: 0,
      interactionWait: 0,
      loot: -1,
      lootId: -1,
      extraLoot: 0,
      packetId: -1,
      buildingArea: -1,
      buildingId: -1,
      buildingPid: -1,
      chest: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      chestLen: 0,
      building: {
        queue: [0, 0, 0, 0],
        pos: 0,
        time: 0,
        timeMax: 0,
        len: 0,
        fuel: 0
      },
      blueprint: 0,
      furniture: 0,
      buildRotate: 0,
      hintRotate: 0,
      grid: 0,
      gridPrev: [0, 0, 0],
      iGrid: 0,
      jGrid: 0,
      iGridPrev: [0, 0, 0],
      jGridPrev: [0, 0, 0],
      isBuilding: 0,
      iBuild: 0,
      jBuild: 0,
      canBuild: 0,
      warm: 0,
      wrongTool: 0,
      wrongToolTimer: 0,
      teamEffect: 0,
      teamLeader: 0,
      teamLocked: 0,
      teamDelay: 0,
      teamNameValid: 0,
      teamCreateDelay: 0,
      teamQueue: [0, 0, 0, 0, 0],
      teamJoin: 0,
      teamDelay: 0,
      team: -1,
      teamPos: [],
      teamLength: 0,
      KARMA: 0,
      badKarma: 0,
      badKarmaDelay: 0,
      lastAreas: null,
      nextAreas: 0,
      craftFactor: 1,
      timePlayed: 0,
      toxicMap: 0,
      toxicStep: 0,
      admin: 0,
      ghoul: 0,
      cities: []
    };
    return {
      __SURVIVAL__: 0,
      __BR__: 1,
      __GHOUL__: 2,
      gameMode: 0,
      leaderboard: [],
      sortLeaderboard: function () {
        for (var e = 0; e < World.playerNumber; e++) World.leaderboard[e] = e;
        for (World.leaderboard = World.leaderboard.sort(d).slice(0, 10), e = 0; e < World.playerNumber; e++) World
          .newLeaderboard = 1
      },
      initLeaderboard: function (e, i) {
        for (var a = 0; a < 10; a++) {
          var _ = i[2 + 4 * a],
            o = e[2 + 2 * a],
            t = World.players[_];
          t.score = MathUtils.inflateNumber(o), t.KARMA = i[3 + 4 * a];
          var d = MathUtils.simplifyNumber(t.score);
          d !== t.scoreSimplified && (t.scoreLabel = null), t.scoreSimplified = d, World.leaderboard[a] = _
        }
        World.newLeaderboard = 1
      },
      setSizeWorld: function (a, _) {
        e = a - 1, i = _ - 1
      },
      newLeaderboard: 0,
      playerNumber: 0,
      playerAlive: 0,
      allocateTeam: function (e) {
        for (var i = 0; i < 18; i++) World.teams[i] = new o(i, e[i + 1])
      },
      teams: [],
      addToTeam: function (e, i) {
        50 !== i ? (i > 50 ? (i -= 51, World.teams[i].leader = e.id, e.teamLeader = 1, World.PLAYER.id === e.id && (
            World.PLAYER.teamLeader = 1)) : e.teamLeader = 0, World.PLAYER.id === e.id && (World.PLAYER.team = i), e
          .team = i, e.teamUid = World.teams[i].uid) : e.team = -1
      },
      deleteTeam: function (e) {
        var i = World.teams[e];
        i.label = null, i.labelNickname = null, i.uid = _++, i.leader = 0, i.name = ""
      },
      nextInvitation: function () {
        p.teamJoin = 0;
        for (var e = 0; e < p.teamQueue.length; e++)
          if (0 !== p.teamQueue[e]) return p.teamJoin = p.teamQueue[e], void(p.teamQueue[e] = 0);
        p.teamEffect = 0
      },
      allocatePlayers: function (e) {
        World.playerAlive = -1;
        for (var i = 0; i < World.playerNumber; i++) 0 !== e[i] && World.playerAlive++, World.players[i] = new a(i, e[
          i])
      },
      players: [],
      PLAYER: p,
      moveEntitie: t,
      updatePosition: function () {
        for (var e = ENTITIES.length, i = 0; i <= e; i++)
          if (e === i || 0 !== ENTITIES[i].move)
            for (var a = Entitie.units[i], _ = Entitie.border[i], o = _.border, d = 0; d < o; d++) t(a[_.cycle[d]]);
        if (-1 !== World.PLAYER.team)
          for (i = 0; i < p.teamLength; i++) {
            var n, r = p.teamPos[i];
            if (!(r.old < 0))(n = World.players[r.id]).rx = CanvasUtils.lerp(n.rx, n.x, .03), n.ry = CanvasUtils.lerp(
              n.ry, n.y, .03), r.old -= delta
          }
        World.PLAYER.badKarmaDelay > 0 && ((n = World.players[World.PLAYER.badKarma]).rx = CanvasUtils.lerp(n.rx, n.x,
          .03), n.ry = CanvasUtils.lerp(n.ry, n.y, .03), World.PLAYER.badKarmaDelay -= delta)
      },
      gauges: s,
      initGauges: function () {
        var e = ENTITIES[__ENTITIE_PLAYER__].gauges;
        r(s.life, e.life._max, e.life.speedInc, e.life.speedDec, 0), 0 === p.ghoul ? (r(s.food, e.food._max, e.food
            .speedInc, e.food.speedDec, 1), r(s.cold, e.cold._max, e.cold.speedInc, e.cold.speedDec, 0), r(s
            .stamina, e.stamina._max, e.stamina.speedInc, e.stamina.speedDec, -1), r(s.rad, e.rad._max, e.rad
            .speedInc, e.rad.speedDec, 0)) : (r(s.food, e.food._max, e.food.speedInc, 0, 1), r(s.cold, e.cold._max, e
              .cold.speedInc, 0, 0), r(s.stamina, e.stamina._max, 2 * e.stamina.speedInc, e.stamina.speedDec / 2, -1),
            r(s.rad, e.rad._max, e.rad.speedInc, 0, 0)), r(s.xp, 255, 0, 0, 0), s.xp.value = 0, s.xp.current = 0, p
          .nextLevel = __XP_START__, m === g && (s.cold.decrease = 1)
      },
      updateGauges: function () {
        l(s.life), l(s.food), l(s.cold), l(s.rad), l(s.stamina), l(s.xp), World.PLAYER.VWMmM += delta, s.rad.current >
          254 ? AudioManager.geiger = 0 : AudioManager.geiger = window.Math.min(1, window.Math.max(0, 1 - s.rad
            .current / 255)),
          function () {
            if (p.xp > 0 && window.Math.abs(s.xp.current - s.xp.value) < .6) {
              if (255 === s.xp.value) return s.xp.current = 0, s.xp.value = 0, p.level++, p.skillPoint++, 1 === Game
                .getSkillBoxState() && -1 !== p.craftCategory && L(p.craftCategory), void AudioUtils.playFx(
                  AudioUtils._fx.levelup, 1, 0);
              p.xp >= p.nextLevel ? (s.xp.value = 255, p.xp -= p.nextLevel, p.nextLevel = window.Math.floor(p
                .nextLevel * __XP_SPEED__)) : s.xp.value = window.Math.floor(255 * p.xp / p.nextLevel)
            }
          }()
      },
      changeDayCycle: I,
      setDayCycle: function (e, i) {
        e !== m && (World.transition = 1e3), World.day = m, c = i
      },
      initDayCycle: function (e, i) {
        e !== m && I(), World.day = m, c = i
      },
      updateHour: function () {
        return (c += delta) % World.__DAY__ + 1e7 * m
      },
      __DAY__: 48e4,
      day: 0,
      transition: 0,
      buildCraftList: function (e) {
        e === AREAS.__PLAYER__ && (World.releaseBuilding(), p.building.fuel = -1);
        for (var i = 0, a = 0, _ = World.PLAYER.craftSelected, o = 0, t = p.craftList, d = p.craftAvailable, n = Game
            .craft, r = 1; r < INVENTORY.length; r++) {
          var l = INVENTORY[r],
            s = l.detail;
          s.area === window.undefined || -1 === s.area.indexOf(e) || -1 !== s.level && 1 !== p.skillUnlocked[l.id] ||
            (0 !== i && _ !== r || (i = r, a = o), n[o].setImages(l.itemButton.src, l.itemButton.img), t[o] = r, d[
              o] = u(s.recipe), o++)
        }
        p.craftLen = o, p.craftArea = e, p.craftCategory = -1, p.craftIdSelected = a, i > 0 && E(i)
      },
      buildSkillList: L,
      selectRecipe: E,
      releaseBuilding: function () {
        1 !== World.PLAYER.isInBuilding && 1 !== World.PLAYER.isInChest || (World.PLAYER.isInBuilding = 0, World
          .PLAYER.isInChest = 0, Client.sendPacket("[17]"))
      },
      getXpFromLevel: function (e) {
        for (var i = __XP_START__, a = 0; a < e; a++) i = window.Math.floor(i * __XP_SPEED__);
        return i
      }
    }
  }(),
  Entitie = function () {
    var e = 0,
      a = [],
      _ = [],
      o = [],
      t = 0;
    return {
      init: function (i, o, d) {
        Entitie.maxUnitsMaster = o === window.undefined ? 0 : o, Entitie.localUnits = d === window.undefined ? 0 : d,
          t = Entitie.localUnits + Entitie.maxUnitsMaster, e = ENTITIES.length;
        for (var n = ENTITIES.length + 1, r = 0; r < n; r++) {
          _[r] = new Border.Border(i), a[r] = [];
          for (var l = 0; l < i; l++) a[r][l] = Entitie.create(r)
        }
      },
      create: function (e) {
        return new EntitieClass(e)
      },
      get: function (e, i, d, n) {
        var r = (0 === e ? 0 : t) + e * Entitie.unitsPerPlayer + i,
          l = o[r];
        if (l === window.undefined || l.uid !== d) {
          var s = Border.forceNewIdentifier(_[n]);
          (l = a[n][s]) === window.undefined && (a[n][s] = Entitie.create(n), l = a[n][s]), o[r] = l, l.update = 0, l
            .removed = 0
        }
        return l
      },
      findEntitie: function (e, i, o) {
        for (var t = a[e], d = _[e], n = d.border, r = 0; r < n; r++) {
          var l = t[d.cycle[r]];
          if (l.id === o && l.pid === i) return l
        }
        return null
      },
      remove: function (i, d, n, r, l) {
        var s = 0,
          g = (0 === i ? 0 : t) + i * Entitie.unitsPerPlayer + d;
        (E = o[g]) !== window.undefined && E.type === r && E.uid === n && (o[g] = window.undefined);
        var m = _[r],
          c = a[r],
          I = m.border;
        for (s = 0; s < I; s++) {
          var E;
          if ((E = c[m.cycle[s]]).uid === n && E.pid === i && E.id === d) {
            if (Border.fastKillIdentifier(m, s), ENTITIES[E.type].remove > 0 && 1 === l) {
              var u = a[e][Border.forceNewIdentifier(_[e])];
              for (var L in E) u[L] = E[L];
              u.removed = 1
            }
            return
          }
        }
      },
      removeAll: function () {
        for (var e = 0; e < ENTITIES.length; e++) _[e].border = 0;
        o = []
      },
      units: a,
      border: _,
      cleanRemoved: function () {
        var o = _[e],
          t = a[e],
          d = o.border;
        for (i = 0; i < d; i++) {
          1 !== t[o.cycle[i]].removed && (Border.fastKillIdentifier(o, i), d--, i--)
        }
      },
      unitsPerPlayer: 0,
      maxUnitsMaster: 0,
      localUnits: 0
    }
  }(),
  ENTITIES = [{
    gauges: {
      life: {
        _max: 255,
        speedDec: .005,
        speedInc: .005
      },
      food: {
        _max: 255,
        speedDec: .0012,
        speedInc: .0012
      },
      cold: {
        _max: 255,
        speedDec: .0035,
        speedInc: .005
      },
      rad: {
        _max: 255,
        speedDec: .024,
        speedInc: .003
      },
      stamina: {
        _max: 255,
        speedDec: .03,
        speedInc: .015
      }
    },
    skins: [{
      head: {
        src: "https://devast.io/img/day-skin0.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm0.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm0.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-skin1.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm0.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm0.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-skin2.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm2.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm2.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-skin3.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm2.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm2.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-skin4.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm4.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm4.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-skin5.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm4.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm4.png",
        img: {
          isLoaded: 0
        }
      }
    }],
    clothes: [{}, {
      head: {
        src: "https://devast.io/img/day-headscarf.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-chapka.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm-chapka.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm-chapka.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-coat.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm-coat.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm-coat.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-gaz-mask.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-gaz-protection.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm-gaz-protection.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm-gaz-protection.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-radiation-suit.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm-radiation-suit.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm-radiation-suit.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-metal-helmet.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-welding-helmet.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm-welding-helmet.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm-welding-helmet.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-gladiator-helmet.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm-gladiator-armor.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm-gladiator-armor.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-leather-jacket.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm-leather-jacket.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm-leather-jacket.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-kevlar-suit.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm-kevlar-suit.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm-kevlar-suit.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-SWAT-suit.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm-SWAT-suit.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm-SWAT-suit.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-protective-suit.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm-protective-suit.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm-protective-suit.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-tesla-0.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm-tesla-0.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm-tesla-0.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-tesla-armor.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm-tesla-armor.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm-tesla-armor.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-camouflage-gear.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm-camouflage-gear.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm-camouflage-gear.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-christmas-hat.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-deer-hat.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-snowman-hat.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm-snowman-hat.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm-snowman-hat.png",
        img: {
          isLoaded: 0
        }
      }
    }, {
      head: {
        src: "https://devast.io/img/day-elf-hat.png",
        img: {
          isLoaded: 0
        }
      },
      leftArm: {
        src: "https://devast.io/img/day-left-arm-elf-hat.png",
        img: {
          isLoaded: 0
        }
      },
      rightArm: {
        src: "https://devast.io/img/day-right-arm-elf-hat.png",
        img: {
          isLoaded: 0
        }
      }
    }],
    runEffect: {
      src: "https://devast.io/img/day-run-effect.png",
      img: {
        isLoaded: 0
      }
    },
    death: {
      src: "https://devast.io/img/day-dead-player.png",
      img: {
        isLoaded: 0
      }
    },
    hurt: {
      src: "https://devast.io/img/hurt-player.png",
      img: {
        isLoaded: 0
      }
    },
    heal: {
      src: "https://devast.io/img/heal-player.png",
      img: {
        isLoaded: 0
      }
    },
    food: {
      src: "https://devast.io/img/food-player.png",
      img: {
        isLoaded: 0
      }
    },
    cartridges: [{
      src: "https://devast.io/img/day-shotgun-cartridge.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-9mm-cartridge.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-AK47-cartridge.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-crossbow-cartridge.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-nails-cartridge.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-cells-cartridge.png",
      img: {
        isLoaded: 0
      }
    }],
    bullets: [
      [{
        src: "https://devast.io/img/day-bullet1.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-bullet2.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-bullet2l.png",
        img: {
          isLoaded: 0
        }
      }],
      [{
        src: "https://devast.io/img/day-bullet3.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-bullet4.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-bullet4l.png",
        img: {
          isLoaded: 0
        }
      }],
      [{
        src: "https://devast.io/img/day-bullet5.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-bullet6.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-bullet6l.png",
        img: {
          isLoaded: 0
        }
      }],
      [{
        src: "https://devast.io/img/day-wood-arrow.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-wood-arrow1.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-wood-arrowl.png",
        img: {
          isLoaded: 0
        }
      }],
      [{
        src: "https://devast.io/img/day-wood-spear0.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-wood-spear1.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-wood-spearl.png",
        img: {
          isLoaded: 0
        }
      }],
      [{
        src: "https://devast.io/img/day-wood-crossarrow.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-wood-crossarrow1.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-wood-crossarrowl.png",
        img: {
          isLoaded: 0
        }
      }],
      [{
        src: "https://devast.io/img/day-nail1.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-nail2.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-nail2l.png",
        img: {
          isLoaded: 0
        }
      }],
      [{
        src: "https://devast.io/img/day-laser0.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-laser1.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-laser1l.png",
        img: {
          isLoaded: 0
        }
      }],
      [{
        src: "https://devast.io/img/day-grenade0.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-grenade1.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-grenadel.png",
        img: {
          isLoaded: 0
        }
      }]
    ],
    gunEffect: [
      [{
        src: "https://devast.io/img/day-gun-effect0.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-gun-effect1.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-gun-effect2.png",
        img: {
          isLoaded: 0
        }
      }],
      [{
        src: "https://devast.io/img/day-laser-effect0.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-laser-effect1.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-laser-effect2.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-laser-effect3.png",
        img: {
          isLoaded: 0
        }
      }, {
        src: "https://devast.io/img/day-laser-effect4.png",
        img: {
          isLoaded: 0
        }
      }]
    ],
    weapons: [{
      type: 0,
      id: 0,
      shot: 0,
      rightArm: {
        angle: 0,
        x: 22,
        y: 39
      },
      leftArm: {
        angle: 0,
        x: 22,
        y: -39
      },
      soundDelay: 0,
      soundVolume: .5,
      soundLen: 3,
      sound: ["audio/hand-swing0.mp3", "audio/hand-swing2.mp3", "audio/hand-swing3.mp3"],
      breath: .05,
      move: 3,
      delay: 300,
      impact: 301,
      impactClient: 150,
      damage: 20,
      damageCac: 3,
      knockback: 10,
      stamina: 2,
      radius: 30,
      malusSpeed: 0,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: .8,
      soundLen: 1,
      sound: ["audio/pickaxe-swing.mp3"],
      weapon: {
        src: "https://devast.io/img/day-stone-pickaxe.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 30,
        y: 0,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .02,
      move: 2,
      delay: 800,
      delayClient: 800,
      impact: 801,
      impactClient: 650,
      damage: 45,
      damageCac: 16,
      knockback: 15,
      stamina: 5,
      radius: 50,
      dist: 56,
      consumable: 0,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: .8,
      soundLen: 1,
      sound: ["audio/pickaxe-swing.mp3"],
      weapon: {
        src: "https://devast.io/img/day-steel-pickaxe.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 30,
        y: 0,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .02,
      move: 2,
      delay: 800,
      delayClient: 800,
      impact: 801,
      impactClient: 650,
      damage: 55,
      damageCac: 22,
      knockback: 15,
      stamina: 5,
      radius: 50,
      dist: 56,
      consumable: 0,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: .8,
      soundLen: 1,
      sound: ["audio/hatchet-swing.mp3"],
      weapon: {
        src: "https://devast.io/img/day-hachet.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 30,
        y: 0,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .02,
      move: 2,
      delay: 500,
      delayClient: 500,
      impact: 501,
      impactClient: 350,
      damage: 30,
      damageCac: 7,
      knockback: 10,
      stamina: 4,
      radius: 40,
      dist: 59,
      consumable: 0,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: .8,
      soundLen: 1,
      sound: ["audio/axe-swing.mp3"],
      weapon: {
        src: "https://devast.io/img/day-stone-axe.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 30,
        y: 0,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .05,
      move: 3,
      delay: 650,
      impact: 651,
      impactClient: 550,
      damage: 50,
      damageCac: 26,
      knockback: 20,
      stamina: 4,
      radius: 46,
      dist: 72,
      consumable: 0,
      trigger: 0
    }, {
      type: 3,
      id: 0,
      shot: 1,
      soundDelay: .75,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/spear-shot.mp3"],
      weapon: {
        src: "https://devast.io/img/day-wood-spear.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 25,
        y: 40
      },
      rightArm: {
        angle: 0,
        x: 10,
        y: 44
      },
      leftArm: {
        angle: 0,
        x: 22,
        y: -39
      },
      bulletNumber: [0],
      bulletId: 4,
      bulletSpeed: .5,
      damageType: 1,
      path: 600,
      damage: 80,
      knockback: 30,
      breath: .05,
      breathWeapon: 2,
      move: 3,
      delay: 850,
      impact: 100,
      impactClient: 100,
      stamina: 15,
      x: -40,
      dist: 47,
      distance: 60,
      consumable: 0,
      trigger: 0
    }, {
      type: 4,
      id: 0,
      shot: 1,
      WnVmv: {
        src: "https://devast.io/img/day-wood-arrow1.png",
        img: {
          isLoaded: 0
        },
        x: 50,
        y: 0
      },
      soundDelay: 1.08,
      soundVolume: 1.4,
      soundLen: 1,
      sound: ["audio/bow-shot.mp3"],
      weapon: {
        src: "https://devast.io/img/day-wood-bow.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 44,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 10,
        y: 44
      },
      leftArm: {
        angle: 0,
        x: 40,
        y: -30
      },
      damage: 40,
      knockback: 10,
      bulletNumber: [0],
      bulletId: 3,
      bulletSpeed: .75,
      damageType: 1,
      path: 800,
      breath: .5,
      breathWeapon: 1,
      move: 1,
      delay: 1200,
      impact: 120,
      impactClient: 100,
      stamina: 8,
      x: -1,
      dist: 47,
      distance: -8,
      consumable: 0,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 43,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/shotgun-shot.mp3"],
      weapon: {
        src: "https://devast.io/img/day-shotgun.png",
        img: {
          isLoaded: 0
        },
        x: 60,
        y: 0
      },
      damage: 21,
      knockback: 20,
      gunEffect: 0,
      cartridge: 0,
      cartridgeDelay: 500,
      recoil: 3,
      recoilHead: 4,
      recoilGun: 3,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0, .1, -.1, .2, -.2],
      bulletId: 2,
      bulletSpeed: 1.1,
      damageType: 1,
      magazine: 8,
      reload: 10,
      oneperone: 1,
      distance: 58,
      breath: 1,
      move: 2,
      delay: 900,
      impact: 901,
      stamina: 0,
      x: 0,
      path: 600,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/9mm-shot.mp3"],
      weapon: {
        src: "https://devast.io/img/day-9mm.png",
        img: {
          isLoaded: 0
        },
        x: 50,
        y: 0
      },
      damage: 28,
      knockback: 10,
      gunEffect: 0,
      cartridge: 1,
      cartridgeDelay: 400,
      recoil: 2,
      recoilHead: 1,
      recoilGun: 2,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 0,
      bulletSpeed: 1.2,
      damageType: 1,
      magazine: 20,
      reload: 22,
      oneperone: 0,
      distance: 40,
      breath: 1,
      move: 2,
      delay: 400,
      impact: 401,
      stamina: 0,
      x: 0,
      path: 800,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1.3,
      soundLen: 1,
      sound: ["audio/desert-eagle-shot.mp3"],
      weapon: {
        src: "https://devast.io/img/day-desert-eagle.png",
        img: {
          isLoaded: 0
        },
        x: 50,
        y: 0
      },
      damage: 40,
      knockback: 25,
      gunEffect: 0,
      cartridge: 1,
      cartridgeDelay: 400,
      recoil: 2,
      recoilHead: 1,
      recoilGun: 2,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 0,
      bulletSpeed: 1.4,
      damageType: 1,
      magazine: 7,
      reload: 22,
      oneperone: 0,
      distance: 40,
      breath: 1,
      move: 2,
      delay: 400,
      impact: 401,
      stamina: 0,
      x: 0,
      path: 900,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 43,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/ak47-shot.mp3"],
      weapon: {
        src: "https://devast.io/img/day-AK47.png",
        img: {
          isLoaded: 0
        },
        x: 60,
        y: 0
      },
      damage: 30,
      knockback: 25,
      gunEffect: 0,
      cartridge: 2,
      cartridgeDelay: 500,
      recoil: 3,
      recoilHead: 2,
      recoilGun: 4,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 1,
      bulletSpeed: 1.4,
      damageType: 1,
      magazine: 30,
      reload: 25,
      oneperone: 0,
      distance: 58,
      breath: 1,
      move: 2,
      delay: 120,
      impact: 121,
      stamina: 0,
      x: 0,
      path: 900,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 43,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/sniper-shot.mp3"],
      weapon: {
        src: "https://devast.io/img/day-sniper.png",
        img: {
          isLoaded: 0
        },
        x: 60,
        y: 0
      },
      damage: 90,
      knockback: 30,
      gunEffect: 0,
      cartridge: 2,
      cartridgeDelay: 500,
      recoil: 3,
      recoilHead: 1,
      recoilGun: 4,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 1,
      bulletSpeed: 1.5,
      damageType: 1,
      magazine: 10,
      reload: 20,
      oneperone: 0,
      distance: 70,
      breath: 1,
      move: 2,
      delay: 1250,
      impact: 1251,
      stamina: 0,
      x: 0,
      path: 1100,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-raw-steak.png",
        img: {
          isLoaded: 0
        },
        angle: 1,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 20,
      food: 30,
      radiation: 0,
      energy: 20,
      heal: -10,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-cooked-steak.png",
        img: {
          isLoaded: 0
        },
        angle: 1,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 4,
      breath: .4,
      move: .8,
      stamina: 0,
      consumableDelay: 200,
      wait: 20,
      food: 127,
      radiation: 0,
      energy: 80,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-rotten-steak.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 20,
      food: 15,
      radiation: 0,
      energy: 0,
      heal: -40,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-orange.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 40,
      radiation: 0,
      energy: 10,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-rotten-orange.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 5,
      radiation: 0,
      energy: 0,
      heal: -40,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "https://devast.io/img/day-hand-medikit.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 55,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 32
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -32
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 25,
      food: 0,
      radiation: 0,
      energy: 0,
      heal: 200,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "https://devast.io/img/day-hand-bandage.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 0,
      radiation: 0,
      energy: 0,
      heal: 60,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "https://devast.io/img/day-hand-soda.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 30,
      radiation: 0,
      energy: 155,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 43,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/mp5-shot.mp3"],
      weapon: {
        src: "https://devast.io/img/day-MP5.png",
        img: {
          isLoaded: 0
        },
        x: 60,
        y: 0
      },
      damage: 18,
      knockback: 15,
      gunEffect: 0,
      cartridge: 1,
      cartridgeDelay: 500,
      recoil: 3,
      recoilHead: 2,
      recoilGun: 4,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 0,
      bulletSpeed: 1.2,
      damageType: 1,
      magazine: 30,
      reload: 26,
      oneperone: 0,
      distance: 52,
      breath: 1,
      move: 2,
      delay: 100,
      impact: 101,
      stamina: 0,
      x: 0,
      path: 900,
      dist: 47,
      trigger: 0
    }, {
      type: 6,
      id: 0,
      shot: 0,
      rightArm: {
        angle: 0,
        x: 22,
        y: 39
      },
      leftArm: {
        angle: 0,
        x: 22,
        y: -39
      },
      breath: .05,
      move: 3,
      malusSpeed: 0,
      blueprint: {
        src: "https://devast.io/img/day-hand-craft.png",
        img: {
          isLoaded: 0
        }
      },
      pencil: {
        src: "https://devast.io/img/day-hand-craftpencil.png",
        img: {
          isLoaded: 0
        }
      },
      consumable: 0,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: .8,
      soundLen: 1,
      sound: ["audio/pickaxe-swing.mp3"],
      weapon: {
        src: "https://devast.io/img/day-sulfur-pickaxe.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 20,
        y: 0,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .02,
      move: 2,
      delay: 800,
      delayClient: 800,
      impact: 801,
      impactClient: 650,
      damage: 65,
      damageCac: 30,
      knockback: 15,
      stamina: 5,
      radius: 50,
      dist: 56,
      consumable: 0,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: .8,
      soundLen: 1,
      sound: ["audio/hammer-swing.mp3"],
      weapon: {
        src: "https://devast.io/img/day-hammer.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 25,
        y: 0,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .02,
      move: 2,
      delay: 1100,
      delayClient: 1100,
      impact: 1101,
      impactClient: 950,
      damage: 120,
      damageCac: 30,
      knockback: 30,
      stamina: 15,
      radius: 40,
      dist: 56,
      consumable: 0,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      weapon: {
        src: "https://devast.io/img/day-repair-hammer.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 20,
        y: 0,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .02,
      move: 2,
      delay: 700,
      delayClient: 700,
      impact: 701,
      impactClient: 550,
      damage: 40,
      damageCac: 15,
      knockback: 10,
      stamina: 6,
      radius: 40,
      dist: 59,
      consumable: 0,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-tomato-soup.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 30,
      food: 160,
      radiation: 0,
      energy: 40,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "https://devast.io/img/day-hand-radaway.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 25
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -25
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 30,
      food: 0,
      radiation: 255,
      energy: 30,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-tomato.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 50,
      radiation: 0,
      energy: 10,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-rotten-tomato.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 5,
      radiation: 0,
      energy: 0,
      heal: -40,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/crossbow-shot.mp3"],
      weapon: {
        src: "https://devast.io/img/day-wood-crossbow.png",
        img: {
          isLoaded: 0
        },
        x: 50,
        y: 0
      },
      damage: 50,
      knockback: 15,
      gunEffect: 0,
      cartridge: 3,
      cartridgeDelay: 400,
      recoil: 2,
      recoilHead: 1,
      recoilGun: 2,
      noEffect: 1,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 5,
      bulletSpeed: .95,
      damageType: 1,
      magazine: 1,
      reload: 8,
      oneperone: 0,
      distance: 40,
      breath: 1,
      move: 2,
      delay: 400,
      impact: 401,
      stamina: 12,
      x: 0,
      path: 800,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/nail-gun-shot.mp3"],
      weapon: {
        src: "https://devast.io/img/day-nail-gun.png",
        img: {
          isLoaded: 0
        },
        x: 50,
        y: 0
      },
      damage: 6,
      knockback: 10,
      gunEffect: 0,
      cartridge: 4,
      cartridgeDelay: 400,
      recoil: 2,
      recoilHead: 1,
      recoilGun: 2,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 6,
      bulletSpeed: 1,
      damageType: 1,
      magazine: 80,
      reload: 30,
      oneperone: 0,
      distance: 52,
      breath: 1,
      move: 2,
      delay: 300,
      impact: 301,
      stamina: 0,
      x: 0,
      path: 500,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 43,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/shotgun-shot.mp3"],
      weapon: {
        src: "https://devast.io/img/day-sawed-off-shotgun.png",
        img: {
          isLoaded: 0
        },
        x: 50,
        y: 0
      },
      damage: 28,
      knockback: 30,
      gunEffect: 0,
      cartridge: 0,
      cartridgeDelay: 500,
      recoil: 3,
      recoilHead: 4,
      recoilGun: 3,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0, .12, -.12, .24, -.24],
      bulletId: 2,
      bulletSpeed: 1.11,
      damageType: 1,
      magazine: 8,
      reload: 10,
      oneperone: 1,
      distance: 53,
      breath: 1,
      move: 2,
      delay: 900,
      impact: 901,
      stamina: 0,
      x: 0,
      path: 400,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-chips.png",
        img: {
          isLoaded: 0
        },
        angle: 1,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 4,
      breath: .4,
      move: .8,
      stamina: 0,
      consumableDelay: 200,
      wait: 20,
      food: 90,
      radiation: 0,
      energy: 50,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-rotten-chips.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 5,
      radiation: 0,
      energy: 0,
      heal: -40,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/laser-pistol-shot.mp3"],
      weapon: {
        src: "https://devast.io/img/day-laser-pistol.png",
        img: {
          isLoaded: 0
        },
        x: 50,
        y: 0
      },
      damage: 55,
      knockback: 0,
      gunEffect: 1,
      cartridge: 5,
      cartridgeDelay: 400,
      recoil: 2,
      recoilHead: 1,
      recoilGun: 2,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 7,
      bulletSpeed: 1.45,
      damageType: 2,
      magazine: 12,
      reload: 22,
      oneperone: 0,
      distance: 50,
      breath: 1,
      move: 2,
      delay: 400,
      impact: 401,
      stamina: 0,
      x: 0,
      path: 900,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: .8,
      soundLen: 1,
      sound: ["audio/axe-swing.mp3"],
      weapon: {
        src: "https://devast.io/img/day-sulfur-axe.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 30,
        y: 0,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .05,
      move: 3,
      delay: 650,
      impact: 651,
      impactClient: 550,
      damage: 50,
      damageCac: 30,
      knockback: 20,
      stamina: 4,
      radius: 46,
      dist: 72,
      consumable: 0,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "https://devast.io/img/day-hand-joystick.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 2,
      food: 0,
      radiation: 0,
      energy: 0,
      heal: 0,
      poison: 0,
      consumable: 0,
      trigger: 1
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/laser-submachine-shot.mp3"],
      weapon: {
        src: "https://devast.io/img/day-laser-submachine.png",
        img: {
          isLoaded: 0
        },
        x: 50,
        y: 0
      },
      damage: 45,
      knockback: 0,
      gunEffect: 1,
      cartridge: 5,
      cartridgeDelay: 500,
      recoil: 3,
      recoilHead: 2,
      recoilGun: 4,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 7,
      bulletSpeed: 1.45,
      damageType: 2,
      magazine: 30,
      reload: 25,
      oneperone: 0,
      distance: 54,
      breath: 1,
      move: 2,
      delay: 160,
      impact: 161,
      stamina: 0,
      x: 0,
      path: 900,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 3,
      id: 0,
      shot: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-grenade.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 25,
        y: 50
      },
      rightArm: {
        angle: 0,
        x: 10,
        y: 44
      },
      leftArm: {
        angle: 0,
        x: 22,
        y: -39
      },
      bulletNumber: [0],
      bulletId: 8,
      bulletSpeed: .4,
      damageType: 1,
      path: 380,
      damage: 15,
      knockback: 5,
      breath: .05,
      breathWeapon: 2,
      move: 3,
      delay: 850,
      impact: 100,
      impactClient: 100,
      stamina: 15,
      x: -50,
      dist: 47,
      distance: 25,
      consumable: 0,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      weapon: {
        src: "https://devast.io/img/day-super-hammer.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 25,
        y: 5,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .02,
      move: 2,
      delay: 1100,
      delayClient: 1100,
      impact: 1101,
      impactClient: 950,
      damage: 1e3,
      damageCac: 255,
      knockback: 30,
      stamina: 15,
      radius: 40,
      dist: 56,
      consumable: 0,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "https://devast.io/img/day-hand-ghoul-drug.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 13
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 30,
      food: 0,
      radiation: 0,
      energy: 0,
      heal: -10,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-mushroom1.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 0,
      radiation: 0,
      energy: 10,
      heal: -20,
      poison: 12,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-mushroom2.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 40,
      radiation: 0,
      energy: 10,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-mushroom3.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 40,
      radiation: 0,
      energy: 10,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-rotten-mushroom1.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 0,
      radiation: 0,
      energy: 0,
      heal: -40,
      poison: 8,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-rotten-mushroom2.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 5,
      radiation: 0,
      energy: 0,
      heal: -40,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-rotten-mushroom3.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 5,
      radiation: 0,
      energy: 0,
      heal: -40,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "https://devast.io/img/day-hand-lapadoine.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 13
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 30,
      food: 0,
      radiation: 0,
      energy: 0,
      heal: -10,
      poison: 2,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-pumpkin.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 25
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -25
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 20,
      food: 90,
      radiation: 0,
      energy: 20,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-rotten-pumpkin.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 25
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -25
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 30,
      radiation: 0,
      energy: 0,
      heal: -40,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "https://devast.io/img/day-hand-antidote.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 13
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -13
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 30,
      food: 0,
      radiation: 0,
      energy: 0,
      heal: 50,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-acorn.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 10
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -10
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 15,
      radiation: 0,
      energy: 0,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 3,
      sound: 1,
      weapon: {
        src: "https://devast.io/img/day-hand-rotten-acorn.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 10
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -10
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 2,
      radiation: 0,
      energy: 0,
      heal: -20,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 2,
      id: 0,
      shot: 1,
      rightArm: {
        angle: 0,
        x: 32,
        y: 15
      },
      leftArm: {
        angle: 0,
        x: 43,
        y: -13
      },
      soundDelay: 0,
      soundVolume: 1,
      soundLen: 1,
      sound: ["audio/laser-sniper-shot.mp3"],
      weapon: {
        src: "https://devast.io/img/day-laser-sniper.png",
        img: {
          isLoaded: 0
        },
        x: 55,
        y: 0
      },
      damage: 100,
      knockback: 0,
      gunEffect: 1,
      cartridge: 5,
      cartridgeDelay: 500,
      recoil: 3,
      recoilHead: 1,
      recoilGun: 4,
      noEffect: 0,
      firingRate: 0,
      spread: 0,
      bulletNumber: [0],
      bulletId: 7,
      bulletSpeed: 1.5,
      damageType: 2,
      magazine: 10,
      reload: 20,
      oneperone: 0,
      distance: 70,
      breath: 1,
      move: 2,
      delay: 1250,
      impact: 1251,
      stamina: 0,
      x: 0,
      path: 1100,
      dist: 47,
      consumable: 0,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "https://devast.io/img/day-hand-christmas-cake.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 10
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -10
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 127,
      radiation: 0,
      energy: 30,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "https://devast.io/img/day-hand-rotten-christmas-cake.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 10
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -10
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 10,
      radiation: 0,
      energy: 0,
      heal: -20,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "https://devast.io/img/day-hand-gingerbread-man.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 10
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -10
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 20,
      radiation: 0,
      energy: 20,
      heal: 40,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "https://devast.io/img/day-hand-rotten-gingerbread-man.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 10
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -10
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 10,
      radiation: 0,
      energy: 0,
      heal: -20,
      poison: 0,
      consumable: 1,
      trigger: 0
    }, {
      type: 1,
      id: 0,
      shot: 0,
      weapon: {
        src: "https://devast.io/img/day-sugar-can.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 30,
        y: 0,
        rotation: 4,
        x2: 20,
        y2: 10
      },
      rightArm: {
        angle: 0,
        x: 33,
        y: 28,
        dist: 8,
        rotation: 1.8
      },
      leftArm: {
        angle: 0,
        x: 30,
        y: -28,
        dist: -14,
        rotation: 1
      },
      breath: .02,
      move: 2,
      delayClient: 650,
      delay: 650,
      impact: 651,
      impactClient: 550,
      damage: 60,
      damageCac: 38,
      knockback: 20,
      stamina: 16,
      radius: 50,
      dist: 56,
      consumable: 0,
      trigger: 0
    }, {
      type: 5,
      id: 0,
      shot: 0,
      weapon: {
        src: "https://devast.io/img/day-hand-sugar-can-bow.png",
        img: {
          isLoaded: 0
        },
        angle: 0,
        x: 50,
        y: 0
      },
      rightArm: {
        angle: 0,
        x: 32,
        y: 10
      },
      leftArm: {
        angle: 0,
        x: 32,
        y: -10
      },
      recoil: 3,
      breath: .02,
      move: 2,
      stamina: 0,
      consumableDelay: 200,
      wait: 10,
      food: 30,
      radiation: 0,
      energy: 50,
      heal: 0,
      poison: 0,
      consumable: 1,
      trigger: 0
    }],
    AABB: {
      w: 24,
      h: 24
    },
    radius: 38,
    hitRadius: 40,
    _left: 36,
    _right: 36,
    _bottom: 36,
    _top: 36,
    speed: .23,
    speedRun: .35,
    speedMalusBusy: .08,
    speedMalusLapadone: .08,
    speedBonusLapadone: .08,
    speedKnockback: .05,
    collisionType: 0,
    remove: 1e3,
    z: 0,
    life: 0,
    inventorySize: 8,
    lerp: .15,
    timelife: -1
  }, {
    AABB: {
      w: 0,
      h: 0
    },
    radius: 50,
    _left: 0,
    _right: 0,
    _bottom: 0,
    _top: 0,
    speed: .2,
    collisionType: 2,
    remove: 1e3,
    z: 0,
    life: 0,
    lerp: .1,
    timelife: 2e4
  }, {
    AABB: {
      w: 0,
      h: 0
    },
    radius: 4,
    _left: 0,
    _right: 0,
    _bottom: 0,
    _top: 0,
    speed: 1,
    collisionType: 2,
    remove: 1e3,
    z: 0,
    life: 0,
    lerp: .2,
    timelife: -1
  }, {
    AABB: {
      w: 0,
      h: 0
    },
    _left: 0,
    _right: 0,
    _bottom: 0,
    _top: 0,
    speed: 0,
    life: 0,
    remove: 1e3,
    z: 0,
    lerp: .2,
    collisionType: 1,
    timelife: -1
  }, {
    AABB: {
      w: 0,
      h: 0
    },
    _left: 0,
    _right: 0,
    _bottom: 0,
    _top: 0,
    speed: 0,
    life: 0,
    remove: 1e3,
    z: 0,
    lerp: .2,
    collisionType: 1,
    timelife: -1
  }, {
    AABB: {
      w: 0,
      h: 0
    },
    _left: 0,
    _right: 0,
    _bottom: 0,
    _top: 0,
    speed: 0,
    life: 0,
    remove: 1e3,
    z: 0,
    lerp: .2,
    collisionType: 1,
    timelife: -1
  }, {
    AABB: {
      w: 0,
      h: 0
    },
    _left: 0,
    _right: 0,
    _bottom: 0,
    _top: 0,
    speed: 0,
    life: 0,
    remove: 1e3,
    z: 0,
    lerp: .2,
    collisionType: 1,
    timelife: -1
  }, {
    speed: .7,
    life: 0,
    z: 0,
    lerp: .2
  }, {
    AABB: {
      w: 24,
      h: 24
    },
    radius: 38,
    hitRadius: 40,
    _left: 36,
    _right: 36,
    _bottom: 36,
    _top: 36,
    speed: 0,
    collisionType: 0,
    remove: 1e3,
    z: 1,
    life: 0,
    lerp: .15,
    timelife: 18e5
  }, {
    AABB: {
      w: 24,
      h: 24
    },
    radius: 38,
    hitRadius: 40,
    _left: 36,
    _right: 36,
    _bottom: 36,
    _top: 36,
    speed: 0,
    collisionType: 0,
    remove: 1e3,
    z: 1,
    life: 0,
    lerp: .15,
    timelife: 18e5
  }, {
    AABB: {
      w: 24,
      h: 24
    },
    radius: 38,
    hitRadius: 40,
    _left: 36,
    _right: 36,
    _bottom: 36,
    _top: 36,
    speed: 0,
    collisionType: 0,
    remove: 1e3,
    z: 1,
    life: 0,
    lerp: .15,
    timelife: 18e5
  }, {
    AABB: {
      w: 24,
      h: 24
    },
    radius: 38,
    hitRadius: 40,
    _left: 36,
    _right: 36,
    _bottom: 36,
    _top: 36,
    speed: 0,
    collisionType: 0,
    remove: 1e3,
    z: 1,
    life: 0,
    lerp: .15,
    timelife: 18e5
  }, {
    AABB: {
      w: 24,
      h: 24
    },
    explosions: [{
      src: "https://devast.io/img/day-explosion0.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-explosion1.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-explosion2.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-explosion3.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-explosion4.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-explosion5.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-explosion6.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-explosion7.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-explosion8.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-explosion9.png",
      img: {
        isLoaded: 0
      }
    }],
    radius: 38,
    hitRadius: 40,
    _left: 36,
    _right: 36,
    _bottom: 36,
    _top: 36,
    speed: 0,
    collisionType: 2,
    remove: 0,
    z: 1,
    life: 64e3,
    lerp: .15,
    timelife: 1500
  }, {
    AABB: {
      w: 24,
      h: 24
    },
    radius: 38,
    hitRadius: 40,
    _left: 36,
    _right: 36,
    _bottom: 36,
    _top: 36,
    speed: .23,
    speedRun: .35,
    speedMalusBusy: .08,
    speedKnockback: .05,
    collisionType: 0,
    remove: 1e3,
    z: 0,
    life: 0,
    inventorySize: 8,
    lerp: .15,
    timelife: -1
  }];

function EntitieClass(e) {
  this.uid = 0, this.pid = 0, this.id = 0, this.type = e, this.subtype = 0, this.angle = 0, this.nangle = 0, this
    .angleX = 0, this.angleY = 0, this.state = 0, this.extra = 0, this.broke = 0, this.x = 0, this.y = 0, this.rx = 0,
    this.ry = 0, this.nx = -1, this.ny = 0, this.px = 0, this.py = 0, this.i = 0, this.j = 0, this.speed = 0, this
    .update = 0, this.removed = 0, this.hit = 0, this.hitMax = 0, this.hurt = 0, this.hurtAngle = 0, this.heal = 0, this
    .death = 0, this.born = 0, this.breath = 0, this.breath2 = 0, this.particles = [], this.draw = null, this.lerp = .1;
  for (var i = 0; i < 10; i++) this.particles.push({
    c: 0,
    V: 0,
    l: 0,
    m: 0,
    t: 0,
    r: 0
  })
}

function setEntitie(e, i, a, _, o, t, d, n, r, l, s, g) {
  if (e.pid = i, e.uid = a, e.id = _, e.nangle = MathUtils.reduceAngle(e.angle, 2 * s * window.Math.PI / 255), e.state =
    g, e.nx = n, e.ny = r, e.extra = l, 0 === e.update) {
    var m = ENTITIES[o];
    e.speed = m.speed, e.angle = e.nangle, e.x = t, e.y = d, e.z = m.z, e.lerp = m.lerp, e.rx = t, e.ry = d, e.i =
      window.Math.floor(d / Render.__TILE_SIZE__), e.j = window.Math.floor(t / Render.__TILE_SIZE__), e.hit = 0, e
      .hitMax = 0, e.hurt = 0, e.hurt2 = 0, e.hurtAngle = 0, e.heal = 0, e.death = 0, e.breath = 0, e.breath2 = 0, e
      .born = 0, e.broke = 0, e.subtype = 0, e.draw = null;
    var c = m.init;
    c !== window.undefined && c(e)
  }
  s = Math2d.angle(e.rx, e.ry, n, r);
  e.angleX = window.Math.cos(s), e.angleY = window.Math.sin(s), e.update = 1
}
var Border = function () {
    function e(e) {
      return e.border === e.size && (e.cycle[e.size] = e.size, e.locator[e.size] = e.size, e.size++), e.cycle[e
        .border++]
    }

    function i(e, i) {
      e.border--;
      var a = e.cycle[e.border];
      e.cycle[e.border] = e.cycle[i], e.cycle[i] = a
    }

    function a(e) {
      this.size = e, this.border = 0, this.cycle = [], this.locator = [];
      for (var i = 0; i < e; i++) this.cycle[i] = i, this.locator[i] = i
    }
    return {
      Border: a,
      PerfectBorder: function (_) {
        var o = new a(_),
          t = o.cycle,
          d = new window.Array(_),
          n = 0,
          r = [];
        for (n = 0; n < _; n++) r[n] = -1;
        this.length = 0, this.reset = function () {
          o.border = 0, this.length = 0
        }, this.add = function (i) {
          var a = e(o);
          d[a] = i, r[i] = o.border - 1, this.length++
        }, this.remove = function (e) {
          var a = r[e]; - 1 !== a && (r[e] = -1, i(o, a), this.length--, this.length > 0 && (r[d[t[a]]] = a))
        }, this.get = function (e) {
          return d[t[e]]
        }
      },
      ImperfectBorder: function (_) {
        var o = new a(_),
          t = o.cycle,
          d = new window.Array(_);
        this.length = 0, this.reset = function () {
          o.border = 0, this.length = 0
        }, this.add = function (i) {
          d[e(o)] = i, this.length++
        }, this.remove = function (e) {
          for (var a = 0; a < this.length; a++)
            if (d[t[a]] === e) return i(o, a), void this.length--
        }, this.get = function (e) {
          return d[t[e]]
        }
      },
      getNewIdentifier: function (e) {
        return e.border < e.size ? e.cycle[e.border++] : -1
      },
      forceNewIdentifier: e,
      killIdentifier: function (e, i) {
        e.border--;
        var a = e.cycle[e.border],
          _ = e.locator[i];
        e.cycle[e.border] = i, e.cycle[_] = a, e.locator[a] = _, e.locator[i] = e.border
      },
      fastKillIdentifier: i
    }
  }(),
  RNG = {
    Random: function (e) {
      var i = 2147483648,
        a = e || window.Math.floor(window.Math.random() * (i - 1));
      this.init = function (e) {
        a = e || window.Math.floor(window.Math.random() * (i - 1))
      }, this.get = function () {
        return (a = (1103515245 * a + 12345) % i) / i
      }
    }
  },
  Quicksort = function () {
    function e(i, a, _, o) {
      var t = 0;
      _ < o && (t = _ + window.Math.ceil(.5 * (o - _)), NMmnN = function (e, i, a, _, o) {
        var t = _,
          d = e[a],
          n = e[a];
        e[a] = e[o], e[o] = n;
        for (var r = _; r < o; r++) i(e[r], d) <= 0 && (n = e[r], e[r] = e[t], e[t] = n, t++);
        return n = e[o], e[o] = e[t], e[t] = n, t
      }(i, a, t, _, o), e(i, a, _, NMmnN - 1), e(i, a, NMmnN + 1, o))
    }
    return {
      sort: function (i, a) {
        try {
          e(i, a, 0, i.length - 1)
        } catch (e) {
          i.sort(a)
        }
      }
    }
  }(),
  TextManager = function () {
    for (var e = 0, i = {
        eng: [e++, "en"],
        rus: [e++, "ru"],
        spa: [e++, "sp"],
        fra: [e++, "fr"],
        deu: [e++, "de"],
        ita: [e++, "it"],
        pol: [e++, "pl"],
        pt: [e++, "pt"]
      }, a = i.eng, _ = a[0], o = [], t = 0; t < 8; t++) o[t] = [];
    var d = i.eng;

    function n(e) {
      for (var i = 0; i < e.length; i++) o[_][i] = [e[i]]
    }

    function r(e, i) {
      if (function (e) {
          a = e, TextManager.lang = a, _ = a[0], localStorage2.setItem("lang", window.JSON.stringify(a))
        }(e), 0 === o[e[0]].length) {
        var t = new window.XMLHttpRequest;
        t.open("GET", "json/lang" + e[1] + ".json", !0), t.onreadystatechange = function () {
          4 === t.readyState && 200 === this.status && (n(window.JSON.parse(this.NWMnMvN)), i !== window.undefined &&
            i())
        }, t.send()
      } else i !== window.undefined && i()
    }
    return {
      languages: i,
      lang: a,
      get: function (e) {
        return o[_] === window.undefined || o[_][e] === window.undefined ? o[d[0]][e] : o[_][e]
      },
      getFormatted: function (e) {
        o[_] === window.undefined || o[_][e] === window.undefined ? wmwww = o[d][e] : wmwww = o[_][e];
        for (var i = 1; i < arguments.length; i++) wmwww[0] = wmwww[0].replace("%d", arguments[i]);
        return wmwww
      },
      init: function (e, o, t) {
        if (o !== window.undefined && (d = o), e !== window.undefined) {
          var l = _;
          _ = d[0], n(e), _ = l
        }
        var s = localStorage2.getItem("lang");
        if (null === s) switch (window.navigator.language || window.navigator.userLanguage) {
        case "ru":
          a = i.rus;
          break;
        case "en":
          a = i.eng;
          break;
        case "es":
          a = i.spa;
          break;
        case "fr":
          a = i.fra;
          break;
        case "it":
          a = i.ita;
          break;
        case "pl":
          a = i.pol;
          break;
        case "de":
          a = i.deu;
          break;
        case "pt":
          a = i.pt
        } else a = window.JSON.parse(s);
        r(a, t)
      },
      loadLanguage: r
    }
  }(),
  Keyboard = function () {
    var e = "1",
      i = 0,
      a = 65,
      _ = 68,
      o = 87,
      t = 83,
      d = 37,
      n = 39,
      r = 38,
      l = 40,
      s = new Array(255).fill(i),
      g = null;

    function m() {
      a = 81, _ = 68, o = 90, t = 83, localStorage2.setItem("keyboardMap", e), g = e
    }

    function c() {
      a = 65, _ = 68, o = 87, t = 83, localStorage2.setItem("keyboardMap", "0"), g = "0"
    }
    if (null === (g = localStorage2.getItem("keyboardMap"))) {
      var I = window.navigator.language || window.navigator.userLanguage;
      "fr" === I || "fr-FR" === I ? m() : c()
    } else g === e ? m() : c();
    return {
      setAzerty: m,
      setQwert: c,
      keyup: function (e) {
        var a = window.Math.min(e.charCode || e.keyCode, 255);
        s[a] = i
      },
      keydown: function (e) {
        var g = Math.min(e.charCode || e.keyCode, 255);
        return g === a || g === d ? (s[_] = i, s[n] = i) : g === o || g === r ? (s[t] = i, s[l] = i) : g === t ||
          g === l ? (s[o] = i, s[r] = i) : g !== _ && g !== n || (s[a] = i, s[d] = i), s[g] = 1, g
      },
      clearDirectionnal: function () {
        s[_] = i, s[n] = i, s[a] = i, s[d] = i, s[o] = i, s[r] = i, s[t] = i, s[l] = i
      },
      isLeft: function () {
        return s[a] || s[d]
      },
      isRight: function () {
        return s[_] || s[n]
      },
      isBottom: function () {
        return s[t] || s[l]
      },
      isTop: function () {
        return s[o] || s[r]
      },
      isAzerty: function () {
        return g === e ? 1 : 0
      },
      isQwerty: function () {
        return "0" === g ? 1 : 0
      },
      isShift: function () {
        return s[16]
      },
      isKey: function (e) {
        return s[e]
      },
      LocalKeyboardEvent: function () {
        this.keyCode = 0, this.charCode = 0, this.altKey = !1, this.ctrlKey = !1, this.preventDefault = function () {}
      }
    }
  }(),
  AudioUtils = function () {
    var e = 3e4;
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    var i = new window.AudioContext;
    i.createGain || (i.createGain = i.createGainNode), stream = null, mediaRecorder = null, chunks = [], record = null,
      blob = null;
    var a = {
      isFx: 1,
      isAudio: 1
    };
    try {
      var _ = localStorage2.getItem("isFx");
      null !== _ ? a.isFx = window.Number(_) : 1 === isTouchScreen && (a.isFx = 0), null !== (_ = localStorage2.getItem(
        "isAudio")) ? a.isAudio = window.Number(_) : 1 === isTouchScreen && (a.isAudio = 0)
    } catch (e) {
      1 === isTouchScreen && (a.isFx = 0, a.isAudio = 0)
    }

    function o(e, i) {
      e.gainNode.gain.value = i, e.volume = i
    }

    function t(e) {
      1 === e.run && (e.run = 0, e.volume0 = -1, e.source.stop())
    }

    function d(_, d, r) {
      if (0 === _._fx) {
        if (0 === a.isAudio) return
      } else if (0 === a.isFx) return;
      if (1 !== _.run) {
        if (0 !== _.fadeMax || 0 !== _.fade || 0 !== _.volume)
          if (1 === _.isLoaded) {
            var l = i.createBufferSource(),
              s = i.createGain();
            _.source = l, _.gainNode = s, o(_, _.volume), l.buffer = _.buffer, l.connect(s), null !== stream && l
              .connect(stream), s.connect(i.destination), !0 === _.loop && (l.loop = _.loop), l.stop || (l.stop = l
                .noteOff), l.start || (l.start = l.noteOn), _.source.start((r === window.undefined ? 0 : r) + i
                .currentTime, d === window.undefined ? 0 : d), _.run = 1, _.start = previousTimestamp
          } else n(_)
      } else {
        if (-1 !== _.volume0 && 0 === _.fadeMax && previousTimestamp - _.volume0 > e) return void t(_);
        if (_.fadeMax > 0) {
          _.fade = window.Math.min(_.fade + delta, _.fadeMax);
          var g = window.Math.max(0, window.Math.min(1, _.volume + window.Math.cos(.5 * (1 - _.fade / _.fadeMax) *
            window.Math.PI) * _.fadeEffect));
          _.gainNode.gain.value = g, _.fadingVolume = g, _.fade === _.fadeMax && (_.volume = g, _.fadingVolume = -1, _
            .fadeMax = 0, _.fade = 0, 0 === _.volume ? _.volume0 = previousTimestamp : _.volume0 = -1)
        }
      }
    }

    function n(e) {
      if (2 !== e.isLoaded) {
        var a = new window.XMLHttpRequest;
        a.open("GET", e.url, !0), a.responseType = "arraybuffer", a.onload = function () {
          i.decodeAudioData(a.response, (function (i) {
            e.buffer = i, e.isLoaded = 1, e.durationMs = 1e3 * i.duration
          }))
        }, e.isLoaded = 2, a.send()
      }
    }
    return {
      Sound: function (e, i, a, _) {
        this.url = e, this.buffer = null, this.source = null, this.isLoaded = 0, this.run = 0, this.gainNode = null,
          this.loop = a, this.volume = 1, this.volume0 = -1, i !== window.undefined && (this.volume = i), this
          .fadingVolume = -1, this._fx = 0, 1 === _ && (this._fx = 1), this.fade = 0, this.fadeMax = 0, this
          .fadeEffect = 0, this.start = 0, this.durationMs = 0
      },
      loadSound: n,
      playSound: d,
      playFx: function (e, i, a, _) {
        a > 300 || (i *= 1 - a / 300, e.volume = i, d(e, 0, _), e.run = 0)
      },
      stopSound: t,
      fadeSound: function (e, i, a) {
        -1 !== e.fadingVolume && (e.volume = e.fadingVolume), e.fade = 0, e.fadeMax = i, e.fadeEffect = a
      },
      changeVolume: o,
      options: a,
      setAudio: function (e) {
        if (0 === e && a.isAudio !== e)
          for (var i in AudioUtils.audio) {
            t(AudioUtils.audio[i])
          }
        a.isAudio = e, localStorage2.setItem("isAudio", "" + e)
      },
      setFx: function (e) {
        if (0 === e && a.isFx !== e)
          for (var i in AudioUtils._fx) {
            t(AudioUtils._fx[i])
          }
        a.isFx = e, localStorage2.setItem("isFx", "" + e)
      },
      initStream: function () {
        stream = i.createMediaStreamDestination(), mediaRecorder = new window.MediaRecorder(stream.stream),
          mediaRecorder.ondataavailable = function (e) {
            chunks.push(e.data)
          }, mediaRecorder.onstop = function (e) {
            var i = window.JSON.parse('{ "type" : "audio/ogg; codecs=opus" }');
            blob = new window.Blob(chunks, i), record = window.URL.createObjectURL(blob)
          }
      },
      startRecordStream: function () {
        blob = null, record = null, chunks = [], mediaRecorder.start()
      },
      stopRecordStream: function () {
        mediaRecorder.stop()
      },
      getLastRecord: function () {
        return record
      },
      audio: {},
      _fx: {}
    }
  }(),
  Loader = function () {
    var e, i;
    new Mouse.LocalMouseEvent, new Keyboard.LocalKeyboardEvent;
    var a = 0,
      _ = function (e) {
        return MathUtils.Ease.speedLimit(e, MathUtils.Ease.inQuart, .05)
      },
      o = 0,
      t = function (e) {
        return MathUtils.Ease.speedLimit(e, MathUtils.Ease.outQuart, .05)
      },
      d = 0,
      n = 0,
      r = window.undefined;

    function l() {
      var i = 0,
        _ = 0;
      if (n > 0) {
        _ = canh;
        var o = r(1 - n / d);
        1 === o && (n = 0), 1 === a ? o *= -1 : o = 1 - window.Math.abs(o), i *= o, _ *= o
      }
      e.pos.x = canw2 - window.Math.floor(211 * scaleby) + i, e.pos.y = window.Math.max(0, canh2 - window.Math.floor(
        138 * scaleby)) + _
    }
    return {
      quit: function (e) {
        i = e, n = 800, d = 800, r = _, a = 1
      },
      init: function () {
        e = GUI.createBackground(423, 276, "https://devast.io/img/loading1.png")
      },
      run: function () {
        CanvasUtils.setRenderer(Loader), n = 800, d = 800, r = t, o = 1, l()
      },
      update: l,
      draw: function () {
        0 !== function () {
          if (1 === a) {
            if (l(), n < 0) return a = 0, i.run(), 0;
            n -= delta
          } else if (1 === o) {
            if (l(), n < 0) {
              function e() {
                var e = Client.serverList;
                Home.regions = [], Home.privateServer = [], Home.ghoulServer = [];
                for (var i = [], a = [], _ = '<select id="servers">', o = 0; o < e.length; o++) {
                  var t = e[o][4],
                    d = e[o][5];
                  if (d, "ghoul" !== e[o][6]) {
                    for (var n = 0; n < i.length; n++)
                      if (i[n] === t) {
                        a[n] += d, n = -1;
                        break
                      } - 1 !== n && (i.push(t), a.push(d))
                  } else Home.ghoulServer.push(o)
                }
                var r = 1,
                  l = 0;
                for (o = 0; o < i.length; o++) {
                  t = i[o], r++;
                  var s = 1;
                  for (n = 0; n < e.length; n++) e[n][4] === t && "survival" === e[n][6] && (_ +=
                    '<option value="' + e[n][0] + '">' + i[o] + " " + s++, Client.selectedServer === n && (l = r),
                    r++)
                }
                for (var o in Home.htmlBattleRoyale = '<select id="servers">', Home.regions) {
                  r = 0;
                  for (var g = 0; g < Home.regions[o].length; g++) r += e[Home.regions[o][g]][5]
                }
                for (var o in Home.privateServer = Home.privateServer.sort((function (i, a) {
                    return window.Number(e[a][5]) - window.Number(e[i][5])
                  })), Home.htmlPrivateServer = '<select id="servers">', Home.privateServer) Home
                  .htmlPrivateServer += '<option value="' + o + '">' + e[Home.privateServer[o]][4].replace("PRIV",
                    "") + "  - " + e[Home.privateServer[o]][5] + "  players</option>";
                for (var o in Home.htmlGhoulServer = '<select id="servers">', Home.ghoulServer) Home
                  .htmlGhoulServer += '<option value="' + e[Home.ghoulServer[o]][0] + '">' + e[Home.ghoulServer[o]][
                    4
                  ].replace("ghoul", "") + "  - " + e[Home.ghoulServer[o]][5] + "  players</option>";
                if (_ += "</select>", Home.htmlBattleRoyale += "</select>", Home.htmlPrivateServer += "</select>",
                  Home.htmlGhoulServer += "</select>", window.document.getElementById("serverList").innerHTML = _,
                  window.document.getElementById("servers").selectedIndex = l, World.PLAYER.admin = 1, null !==
                  Loader.getURLData("admin") || null !== Loader.getURLData("member") || null !== Loader.getURLData(
                    "moderator")) {
                  null === Loader.getURLData("admin") && null === Loader.getURLData("moderator") || (World.PLAYER
                      .admin = 1, window.document.getElementById("chatInput").maxLength = 1e6), window.document
                    .getElementById("nickname").innerHTML +=
                    '<input id="passwordInput" type="password" placeholder="Password" maxLength="16">';
                  var m = localStorage2.getItem("password");
                  null !== m && (window.document.getElementById("passwordInput").value = m)
                }
                var c = Loader.getURLData("port"),
                  I = Loader.getURLData("ips");
                if (null !== I) {
                  I = I.replace(/\./g, "-");
                  var E = window.Number(window.document.getElementById("servers").value);
                  Client.serverList[E][0] = I, Client.serverList[E][1] = I + ".devast.io", Client.serverList[E][2] =
                    null === c ? "443" : c, Client.serverList[E][3] = 1
                }
                if (null !== (I = Loader.getURLData("ip"))) {
                  I = I.replace(/\./g, "-");
                  E = window.Number(window.document.getElementById("servers").value);
                  Client.serverList[E][0] = I, Client.serverList[E][1] = I, Client.serverList[E][2] = null === c ?
                    "8080" : c, Client.serverList[E][3] = 0
                }
              }
              o = 0, Loader.getURLData = function (e) {
                _url = window.location.href;
                var i = "[?&]" + (e = e.replace(/[\[]/, "[").replace(/[\]]/, "]")) + "=([^&#]*)",
                  a = new window.RegExp(i).exec(_url);
                return null === a ? null : a[1]
              }, Client.types = ["BR", "PRIV", "HIDDEN", "GHOUL"], Client.getServerList((function () {
                e(), Loader.quit(Home)
              }));
              for (var _ = ENTITIES[__ENTITIE_EXPLOSION__].explosions, t = ENTITIES2[__ENTITIE_EXPLOSION__]
                  .explosions, d = 0; d < _.length; d++) _[d].img = CanvasUtils.loadImage(_[d].src, _[d].img), t[d]
                .img = CanvasUtils.loadImage(t[d].src, t[d].img)
            }
            n -= delta
          }
          return 1
        }() && (ctx.clearRect(0, 0, canw, canh), e.draw())
      }
    }
  }(),
  Home = function () {
    function e() {
      var e;
      if (Home.gameMode === World.__SURVIVAL__) e = "survival";
      else if (Home.gameMode === World.__GHOUL__) e = "ghoul";
      else {
        if (Home.gameMode !== World.__BR__) throw new Error("Unknown game mode", Home.gameMode);
        e = "br"
      }
      var i, a, _ = document.getElementById("servers").value;
      "auto" == _ ? (i = "https://turquoisefatalangle.devastio.repl.co/find", a = {
        game_modes: [e]
      }) : (i = "https://turquoisefatalangle.devastio.repl.co/join", a = {
        lobby_id: _
      });
      let o = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
      window.RIVET_TOKEN && (o.Authorization = "Bearer" + window.RIVET_TOKEN), fetch(i, {
        method: "POST",
        headers: o,
        body: JSON.stringify(a)
      }).then((e => {
        if (e.ok) return e.json();
        throw "Failed to find lobby: " + e.status
      })).then((e => {
        let i = e.lobby;
        Client.selectedServer = Client.serverList.findIndex((e => e[0] == i.lobby_id)), Client.connectedLobby = i,
          Client.startConnection(document.getElementById("nicknameInput").value, 0, i.player.token)
      }))
    }

    function i(e) {}

    function a() {
      Z(Game)
    }
    var _ = 0;

    function o(e, i, a, o, t, d) {
      setEntitie(Entitie.get(0, _, _, e), 0, _, _, e, i, a, i, a, (t << 5) + (d << 10), o, 1), _++
    }

    function t(e, i, a, o, t, d) {
      setEntitie(Entitie.get(0, _, _, e), 0, _, _, e, i, a, i, a, (d << 7) + (o << 5), 0, t), _++
    }
    var d, n, r, l, s, g, m, c, I, E, u, L, p, R, w, T, O, A, b, y, S, U, h, f, D, v, N, M, W, C, F, P, x, V, B, k = 0,
      H = {
        img: null
      };
    var Y = new Mouse.LocalMouseEvent,
      G = (new Keyboard.LocalKeyboardEvent, 800),
      K = 0,
      z = function (e) {
        return MathUtils.Ease.speedLimit(e, MathUtils.Ease.inQuart, .05)
      },
      J = 0,
      X = function (e) {
        return MathUtils.Ease.speedLimit(e, MathUtils.Ease.outQuart, .05)
      },
      j = 0,
      Q = 0,
      q = window.undefined;

    function Z(e) {
      B = e,
        function () {
          0 === isTouchScreen && window.removeEventListener("mousedown", ee, !1);
          0 === isTouchScreen && window.removeEventListener("mouseup", ie, !1);
          0 === isTouchScreen && window.removeEventListener("mousemove", ae, !1);
          1 === isTouchScreen && window.removeEventListener("touchstart", _e, !1);
          1 === isTouchScreen && window.removeEventListener("touchend", oe, !1);
          1 === isTouchScreen && window.removeEventListener("touchcancel", te, !1);
          1 === isTouchScreen && window.removeEventListener("touchmove", de, !1)
        }(), Q = G, j = G, q = z, K = 1
    }

    function $() {
      var e = 0,
        i = 0;
      if (Q > 0) {
        i = canh;
        var a = q(1 - Q / j);
        1 === a && (Q = 0), 1 === J && (a = 1 - window.Math.abs(a)), e *= a, i *= a
      }
      d.pos.x = canw2 - window.Math.floor(325 * scaleby) + window.Math.floor((0 === isTouchScreen ? -30 : -70) *
          scaleby) - e, d.pos.y = window.Math.max(0, canh2 - window.Math.floor(156 * scaleby) + window.Math.floor(-150 *
          scaleby)) - i, l.x = canw2 - window.Math.floor(91 * scaleby) + window.Math.floor((0 === isTouchScreen ? -6.8 :
          -47.5) * scaleby) - e, r.left = l.x + "px", l.y = d.pos.y + window.Math.floor(143 * scaleby), r.top = l.y +
        "px", s.pos.x = d.pos.x + window.Math.floor(290 * scaleby), s.pos.y = d.pos.y + window.Math.floor(235 *
        scaleby), g.x = canw - 85 + e, g.y = canh - 17 + window.Math.floor(-10 * scaleby) + i, I.x = canw2 - window.Math
        .floor(100 * scaleby) + window.Math.floor((0 === isTouchScreen ? 12.8 : -26.5) * scaleby) - e, c.left = I.x +
        "px", I.y = l.y + window.Math.floor(45 * scaleby), c.top = I.y + "px", E.pos.x = canw - window.Math.floor(230 *
          scaleby) + window.Math.floor(7 * scaleby) - e, E.pos.y = -i, p.x = canw - 200 + window.Math.floor(-10 *
          scaleby) - e, L.left = p.x + "px", p.y = window.Math.floor(20 * scaleby) - i, L.top = p.y + "px", R.pos.x = E
        .pos.x, R.pos.y = E.pos.y + window.Math.floor(230 * scaleby), O.x = canw - 200 + window.Math.floor(-10 *
          scaleby) - e, T.left = O.x + "px", O.y = p.y + window.Math.floor(215 * scaleby), T.top = O.y + "px", A.pos.x =
        window.Math.floor(15 * scaleby) - e, A.pos.y = window.Math.floor(5 * scaleby) - i, b.pos.x = A.pos.x + window
        .Math.floor(-5 * scaleby), b.pos.y = A.pos.y + window.Math.floor(55 * scaleby), y.pos.x = b.pos.x + window.Math
        .floor(45 * scaleby), y.pos.y = b.pos.y, S.pos.x = y.pos.x + window.Math.floor(45 * scaleby), S.pos.y = b.pos.y,
        U.pos.x = d.pos.x + window.Math.floor(26 * scaleby), U.pos.y = d.pos.y + window.Math.floor(36 * scaleby), h.pos
        .x = U.pos.x + window.Math.floor(83.5 * scaleby), h.pos.y = U.pos.y, f.pos.x = s.pos.x + window.Math.floor(213 *
          scaleby), f.pos.y = s.pos.y + window.Math.floor(-98 * scaleby), D.pos.x = f.pos.x, D.pos.y = f.pos.y + window
        .Math.floor(60 * scaleby), v.pos.x = f.pos.x, v.pos.y = f.pos.y + window.Math.floor(60 * scaleby), N.pos.x = s
        .pos.x + window.Math.floor(-126 * scaleby), N.pos.y = s.pos.y + window.Math.floor(-58 * scaleby), M.pos.x = N
        .pos.x, M.pos.y = N.pos.y + window.Math.floor(-37 * scaleby), W.pos.x = M.pos.x + window.Math.floor(-120 *
          scaleby), W.pos.y = M.pos.y + window.Math.floor(41 * scaleby), C.pos.x = W.pos.x + window.Math.floor(-8.5 *
          scaleby), C.pos.y = W.pos.y + window.Math.floor(-53 * scaleby), P.x = canw2 - window.Math.floor(150 *
        scaleby), P.y = l.y + window.Math.floor(130 * scaleby);
      window.Math.min(scaleby, 1), l.y;
      var _ = window.document.getElementById("nicknameInput").style,
        o = window.Math.floor(220 * scaleby),
        t = window.Math.floor(35 * scaleby);
      if (t += "px", o += "px", r.width = o, r.height = t, _.borderWidth = window.Math.floor(3 * scaleby) + "px", _
        .width = o, _.height = t, _.fontSize = window.Math.floor(18 * scaleby) + "px", null === Loader.getURLData(
        "ips") && null === Loader.getURLData("ip") || (c.display = "none", f.pos.y = -500, D.pos.y = -500, v.pos.y = -
          500, N.pos.y = -500, M.pos.y = -500, null !== Loader.getURLData("admin") && (F.display = "none")), null !==
        window.document.getElementById("passwordInput")) {
        var n = window.document.getElementById("passwordInput").style,
          m = (o = window.Math.floor(220 * scaleby), t = window.Math.floor(35 * scaleby), window.Math.floor(canw2 - o /
            2) + "px");
        t += "px", o += "px", n.width = o, n.height = t, n.left = m, n.borderWidth = window.Math.floor(3 * scaleby) +
          "px", n.width = o, n.height = t, n.fontSize = window.Math.floor(18 * scaleby) + "px", n.marginTop = window
          .Math.floor(4 * scaleby) + "px"
      }
      o = window.Math.floor(200 * scaleby), t = window.Math.floor(28 * scaleby), t += "px", o += "px", c.width = o, c
        .height = t, c.backgroundSize = window.Math.floor(17 * scaleby) + "px";
      var u = window.document.getElementById("servers").style;
      o = window.Math.floor(230 * scaleby) + "px", t = window.Math.floor(28 * scaleby) + "px", u.width = o, u.height =
        t, u.fontSize = window.Math.floor(13 * scaleby) + "px", o = window.Math.floor(185 * scaleby), t = window.Math
        .floor(17 * scaleby), m = window.Math.floor(canw - o) + "px", t += "px", o += "px", _top = window.Math.floor(
          canh - 18 * scaleby) + i + "px", o = window.Math.floor(197 * scaleby), t = window.Math.floor(250 * scaleby),
        m = window.Math.floor(canw - 205 * scaleby) + "px", t += "px", o += "px", L.width = o, L.height = t, L.left = m,
        L.fontSize = window.Math.floor(11 * scaleby) + "px", L.borderRadius = window.Math.floor(5 * scaleby) + "px", L
        .paddingTop = window.Math.floor(18 * scaleby) + "px";
      var w = window.document.getElementById("changelogTitle").style;
      o = window.Math.floor(197 * scaleby) + "px", t = window.Math.floor(23 * scaleby) + "px", w.width = o, w.height =
        t, w.fontSize = window.Math.floor(16 * scaleby) + "px", w.paddingTop = window.Math.floor(8 * scaleby) + "px", w
        .paddingBottom = window.Math.floor(0 * scaleby) + "px", w.marginBottom = window.Math.floor(-2 * scaleby) + "px",
        w.marginTop = window.Math.floor(-22 * scaleby) + "px", w.borderRadius = window.Math.floor(5 * scaleby) + "px " +
        window.Math.floor(5 * scaleby) + "px " + window.Math.floor(0 * scaleby) + "px " + window.Math.floor(0 *
        scaleby) + "px";
      var x = window.document.getElementById("changelogImg").style;
      o = window.Math.floor(175 * scaleby) + "px", t = window.Math.floor(80 * scaleby) + "px", x.width = o, x.height =
        t, x.wnwNW = window.Math.floor(10 * scaleby) + "px";
      var V = window.document.getElementById("changelogText").style;
      V.fontSize = window.Math.floor(10 * scaleby) + "px", V.padding = window.Math.floor(15 * scaleby) + "px", V
        .paddingTop = window.Math.floor(5 * scaleby) + "px", o = window.Math.floor(197 * scaleby), t = window.Math
        .floor(347 * scaleby), m = window.Math.floor(canw - 205 * scaleby) + "px", MVvmn = window.Math.floor(canh -
          105 * scaleby) + "px", t += "px", o += "px", T.width = o, T.height = t, T.left = m, T.bottom = MVvmn, T
        .fontSize = window.Math.floor(13 * scaleby) + "px", T.marginTop = window.Math.floor(0 * scaleby) + "px", T
        .paddingTop = window.Math.floor(18 * scaleby) + "px", window.document.getElementById("mainCommands").style
        .marginTop = window.Math.floor(55 * scaleby) + "px", window.document.getElementById("secondCommands").style
        .marginTop = window.Math.floor(55 * scaleby) + "px", window.document.getElementById("moveCommand").style
        .paddingLeft = window.Math.floor(20 * scaleby) + "px", window.document.getElementById("moveCommand").style
        .paddingRight = window.Math.floor(20 * scaleby) + "px", window.document.getElementById("hitCommands").style
        .paddingLeft = window.Math.floor(10 * scaleby) + "px", window.document.getElementById("hitCommands").style
        .paddingRight = window.Math.floor(10 * scaleby) + "px", window.document.getElementById("runCommands").style
        .paddingLeft = window.Math.floor(0 * scaleby) + "px", window.document.getElementById("runCommands").style
        .paddingRight = window.Math.floor(20 * scaleby) + "px", window.document.getElementById("interactCommands").style
        .paddingLeft = window.Math.floor(7 * scaleby) + "px", window.document.getElementById("interactCommands").style
        .paddingRight = window.Math.floor(0 * scaleby) + "px", window.document.getElementById("craftCommands").style
        .paddingLeft = window.Math.floor(5 * scaleby) + "px", window.document.getElementById("craftCommands").style
        .paddingRight = window.Math.floor(18 * scaleby) + "px", window.document.getElementById("mapCommands").style
        .paddingLeft = window.Math.floor(6 * scaleby) + "px", window.document.getElementById("mapCommands").style
        .paddingRight = window.Math.floor(12 * scaleby) + "px";
      var B = window.document.getElementById("howtoplayTitle").style;
      o = window.Math.floor(197 * scaleby) + "px", t = window.Math.floor(23 * scaleby) + "px", B.width = o, B.height =
        t, B.fontSize = window.Math.floor(16 * scaleby) + "px", B.paddingTop = window.Math.floor(0 * scaleby) + "px", B
        .paddingBottom = window.Math.floor(13 * scaleby) + "px", B.marginBottom = window.Math.floor(6 * scaleby) + "px",
        B.marginTop = window.Math.floor(0 * scaleby) + "px", B.borderRadius = window.Math.floor(5 * scaleby) + "px " +
        window.Math.floor(5 * scaleby) + "px " + window.Math.floor(0 * scaleby) + "px " + window.Math.floor(0 *
        scaleby) + "px";
      var k = window.document.getElementById("howtoplayText").style;
      k.fontSize = window.Math.floor(11 * scaleby) + "px", k.MNmmV = window.Math.floor(6 * scaleby) + "px", k.height =
        window.Math.floor(52 * scaleby) + "px";
      var H = window.document.getElementById("howtoplayCommands").style;
      o = window.Math.floor(197 * scaleby) + "px", t = window.Math.floor(23 * scaleby) + "px", H.width = o, H.height =
        t, H.fontSize = window.Math.floor(16 * scaleby) + "px", H.paddingTop = window.Math.floor(13 * scaleby) + "px", H
        .paddingBottom = window.Math.floor(13 * scaleby) + "px", H.marginBottom = window.Math.floor(6 * scaleby) + "px",
        H.marginTop = window.Math.floor(11 * scaleby) + "px"
    }

    function ee(e) {
      Mouse.updateAll(e, Mouse.__MOUSE_DOWN__);
      s.trigger(), b.trigger(), y.trigger(), S.trigger(), U.trigger(), h.trigger(), f.trigger(), D.trigger(), v
      .trigger(), N.trigger(), M.trigger(), W.trigger(), C.trigger()
    }

    function ie(i) {
      Mouse.updateAll(i, Mouse.__MOUSE_UP__);
      if (1 === s.trigger() && (1, e(), AudioUtils.playFx(AudioUtils._fx.play, 1, 0)), 1 === b.trigger()) {
        1;
        window.open("https://discord.gg/eWJzDYeuhG", "_blank")
      }
      if (1 === y.trigger()) {
        1;
        window.open("https://discord.gg/eWJzDYeuhG", "_blank")
      }
      if (1 === S.trigger()) {
        1;
        window.open("https://discord.gg/eWJzDYeuhG", "_blank")
      }
      if (1 === U.trigger()) {
        1;
        window.open("https://discord.gg/eWJzDYeuhG", "_blank")
      }
      if (1 === h.trigger()) {
        1;
        window.open("https://discord.gg/eWJzDYeuhG", "_blank")
      }
      1 === f.trigger() && (1, 0 !== Home.gameMode && 0 == (Client.state & State.__PENDING__) && 0 == (Client.state &
        State.__CONNECTED__) && (Home.gameMode = 0, AudioUtils.playFx(AudioUtils._fx.button, 1, 0), M.show(), N
        .show(), window.document.getElementById("serverList").innerHTML = Home.survivalHtml, window.document
        .getElementById("servers").selectedIndex = Home.survivalIndex, $())), D.trigger();
      if (1 === v.trigger() && (1, 1 !== Home.gameMode && 1 === Home.publicMode && 0 == (Client.state & State
          .__PENDING__) && 0 == (Client.state & State.__CONNECTED__))) {
        Home.serverTest = 0, Home.gameMode = World.__GHOUL__, AudioUtils.playFx(AudioUtils._fx.button, 1, 0), M.hide(),
          N.hide(), Home.survivalHtml = window.document.getElementById("serverList").innerHTML, Home.survivalIndex =
          window.document.getElementById("servers").selectedIndex, window.document.getElementById("serverList")
          .innerHTML = Home.htmlGhoulServer;
        var a = window.Math.floor(1 * window.Math.random());
        window.document.getElementById("servers").selectedIndex = a, $()
      }
      if (1 === N.trigger() && (1, 0 !== Home.publicMode && 0 === Home.gameMode && 0 == (Client.state & State
          .__PENDING__) && 0 == (Client.state & State.__CONNECTED__) && (Home.serverTest = 0, Home.publicMode = 0,
          AudioUtils.playFx(AudioUtils._fx.button, 1, 0), f.hide(), D.hide(), v.hide(), Home.survivalHtml = window
          .document.getElementById("serverList").innerHTML, Home.survivalIndex = window.document.getElementById(
            "servers").selectedIndex, window.document.getElementById("serverList").innerHTML = Home.htmlPrivateServer,
          Home.serverTest = 0, window.document.getElementById("servers").selectedIndex = 0, $())), 1 === M.trigger() &&
        (1, 1 !== Home.publicMode && 0 === Home.gameMode && 0 == (Client.state & State.__PENDING__) && 0 == (Client
          .state & State.__CONNECTED__) && (Home.publicMode = 1, Home.gameMode = 0, AudioUtils.playFx(AudioUtils._fx
            .button, 1, 0), f.show(), v.show(), window.document.getElementById("serverList").innerHTML = Home
          .survivalHtml, window.document.getElementById("servers").selectedIndex = Home.survivalIndex, $())), 1 === W
        .trigger()) {
        1;
        window.open("https://discord.gg/eWJzDYeuhG", "_blank")
      }
      1 === C.trigger() && (1, Home.quit(Editor), AudioUtils.playFx(AudioUtils._fx.play, 1, 0))
    }

    function ae(e) {
      Mouse.updateAll(e, Mouse.__MOUSE_MOVE__);
      s.trigger(), b.trigger(), y.trigger(), S.trigger(), U.trigger(), h.trigger(), f.trigger(), D.trigger(), v
      .trigger(), N.trigger(), M.trigger(), W.trigger(), C.trigger()
    }

    function _e(e) {
      e.touches.length > 0 && (Mouse.touchToMouseEvent(Y, e, e.touches[0]), ee(Y))
    }

    function oe(e) {
      ie(Y)
    }

    function te(e) {
      e.touches.length > 0 && (Mouse.touchToMouseEvent(Y, e, e.touches[0]), ie(Y))
    }

    function de(e) {
      e.touches.length > 0 && (Mouse.touchToMouseEvent(Y, e, e.touches[0]), ae(Y))
    }
    return {
      quit: Z,
      init: function () {
        Home.joinServer = e, Home.ads = 1, Home.waitAds = 0, -1 === window.String(window.document.createElement)
          .indexOf("createElement") && (Home.adblocker = 1), Home.gameMode = 0, Home.publicMode = 1, Home.alertId = 0,
          Home.alertDelay = 0, window.document.getElementById("nicknameInput").value = localStorage2.getItem(
            "nickname", n), AudioUtils.fadeSound(AudioUtils.audio.title, 1e3, AudioManager.musicVolume), Entitie
          .removeAll(), Render.reset(1), _ = 0, o(__ENTITIE_RESOURCES_DOWN__, 200, 0, 127, RESID.STONE, 3), o(
            __ENTITIE_RESOURCES_TOP__, 400, 100, 127, RESID.ORANGETREE, 2), o(__ENTITIE_RESOURCES_STOP__, 100, 100,
            127, RESID.LEAFTREE, 0), t(__ENTITIE_BUILD_GROUND__, 900, 500, 0, 33, IID.__SMELTER__), t(
            __ENTITIE_BUILD_DOWN__, 800, 400, 1, 1, IID.__WORKBENCH__), o(__ENTITIE_RESOURCES_STOP__, 1100, 300, 10,
            RESID.LEAFTREE, 1), o(__ENTITIE_RESOURCES_STOP__, 800, 200, 127, RESID.LEAFTREE, 2), o(
            __ENTITIE_RESOURCES_STOP__, 700, 100, 127, RESID.LEAFTREE, 3), o(__ENTITIE_RESOURCES_STOP__, 1200, 0, 127,
            RESID.LEAFTREE, 0), o(__ENTITIE_RESOURCES_STOP__, 1300, 100, 127, RESID.LEAFTREE, 4), o(
            __ENTITIE_RESOURCES_STOP__, 1300, 300, 127, RESID.LEAFTREE, 2), o(__ENTITIE_RESOURCES_STOP__, 800, 500,
            127, RESID.LEAFTREE, 4), o(__ENTITIE_RESOURCES_TOP__, 1e3, 200, 127, RESID.ORANGETREE, 0), o(
            __ENTITIE_RESOURCES_STOP__, 700, 600, 127, RESID.LEAFTREE, 0), o(__ENTITIE_RESOURCES_STOP__, 500, 400,
            127, RESID.LEAFTREE, 2), o(__ENTITIE_RESOURCES_DOWN__, 500, 700, 127, RESID.STONE, 3), o(
            __ENTITIE_RESOURCES_DOWN__, 1e3, 300, 127, RESID.STONE, 4), o(__ENTITIE_RESOURCES_STOP__, 1300, 500, 100,
            RESID.LEAFTREE, 2), o(__ENTITIE_RESOURCES_STOP__, 1200, 700, 127, RESID.LEAFTREE, 4), o(
            __ENTITIE_RESOURCES_STOP__, 1300, 700, 127, RESID.LEAFTREE, 0), o(__ENTITIE_RESOURCES_DOWN__, 800, 600,
            127, RESID.STONE, 5), o(__ENTITIE_RESOURCES_STOP__, 500, 600, 127, RESID.LEAFTREE, 4), o(
            __ENTITIE_RESOURCES_DOWN__, 200, 400, 127, RESID.URANIUM, 0), o(__ENTITIE_RESOURCES_DOWN__, 400, 500, 50,
            RESID.WOOD, 3), o(__ENTITIE_RESOURCES_STOP__, 100, 400, 190, RESID.LEAFTREE, 2), o(
            __ENTITIE_RESOURCES_STOP__, 100, 500, 190, RESID.LEAFTREE, 3), o(__ENTITIE_RESOURCES_STOP__, 100, 600,
            127, RESID.LEAFTREE, 4), o(__ENTITIE_RESOURCES_STOP__, 0, 500, 127, RESID.LEAFTREE, 1), o(
            __ENTITIE_RESOURCES_STOP__, 200, 300, 50, RESID.LEAFTREE, 4), o(__ENTITIE_RESOURCES_STOP__, 400, 200, 10,
            RESID.LEAFTREE, 2), o(__ENTITIE_RESOURCES_STOP__, 500, 200, 10, RESID.LEAFTREE, 1), o(
            __ENTITIE_RESOURCES_STOP__, 100, 800, 10, RESID.LEAFTREE, 0), o(__ENTITIE_RESOURCES_STOP__, 400, 800, 10,
            RESID.LEAFTREE, 1), o(__ENTITIE_RESOURCES_STOP__, 700, 800, 10, RESID.LEAFTREE, 2), o(
            __ENTITIE_RESOURCES_DOWN__, 900, 700, 50, RESID.WOOD, 4), d = 1 === isTouchScreen ? GUI.createBackground(
            650, 312, "https://devast.io/img/logo-homepage-mobile2.png") : GUI.createBackground(650, 312, "https://devast.io/img/logo-homepage4.png"), n =
          window.document.getElementById("nickname"), r = n.style, l = {
            x: 0,
            y: 0
          }, n.addEventListener("keyup", (function (i) {
            1 != (K | J) && 13 === i.keyCode && e()
          }), !1), s = GUI.createButton(136, 57, ["https://devast.io/img/play-button-out.png", "https://devast.io/img/play-button-in.png",
            "https://devast.io/img/play-button-click.png"
          ]), g = {
            x: 0,
            y: 0
          }, m = window.document.getElementById("serverList"), c = m.style, I = {
            x: 0,
            y: 0
          }, m.addEventListener("mouseover", (function (e) {}), !1), m.addEventListener("mousedown", (function (
            e) {}), !1), m.addEventListener("mouseup", (function (e) {}), !1), E = 1 === isTouchScreen ? GUI
          .createBackground(0, 0) : GUI.createBackground(230, 235, "https://devast.io/img/changelogBox.png"), u = window.document
          .getElementById("changelog"), L = u.style, p = {
            x: 0,
            y: 0
          }, R = 1 === isTouchScreen ? GUI.createBackground(0, 0) : GUI.createBackground(230, 355,
            "https://devast.io/img/commandsBox.png"), w = window.document.getElementById("howtoplay"), T = w.style, O = {
            x: 0,
            y: 0
          }, A = 1 === isTouchScreen ? GUI.createBackground(0, 0) : GUI.createBackground(123, 55, "https://devast.io/img/gameMade.png"),
          b = 1 === isTouchScreen ? GUI.createButton(0, 0) : GUI.createButton(40, 38, ["https://devast.io/img/twitter-button-out.png",
            "https://devast.io/img/twitter-button-in.png", "https://devast.io/img/twitter-button-click.png"
          ]), y = 1 === isTouchScreen ? GUI.createButton(0, 0) : GUI.createButton(40, 38, [
            "https://devast.io/img/facebook-button-out.png", "https://devast.io/img/facebook-button-in.png", "https://devast.io/img/facebook-button-click.png"
          ]), S = 1 === isTouchScreen ? GUI.createButton(0, 0) : GUI.createButton(40, 38, [
            "https://devast.io/img/youtube-button-out.png", "https://devast.io/img/youtube-button-in.png", "https://devast.io/img/youtube-button-click.png"
          ]), U = 1 === isTouchScreen ? GUI.createButton(0, 0) : GUI.createButton(54, 54, [
            "https://devast.io/img/home-reddit-button-out.png", "https://devast.io/img/home-reddit-button-in.png", "https://devast.io/img/home-reddit-button-click.png"
          ]), h = 1 === isTouchScreen ? GUI.createButton(0, 0) : GUI.createButton(54, 54, [
            "https://devast.io/img/home-discord-button-out.png", "https://devast.io/img/home-discord-button-in.png", "https://devast.io/img/home-discord-button-click.png"
          ]), f = GUI.createButton(93, 51, ["https://devast.io/img/survivalmode-button-out.png", "https://devast.io/img/survivalmode-button-in.png",
            "https://devast.io/img/survivalmode-button-click.png"
          ]), D = GUI.createButton(93, 51, ["https://devast.io/img/battle-royale-button-out.png", "https://devast.io/img/battle-royale-button-in.png",
            "https://devast.io/img/battle-royale-button-click.png"
          ]), v = GUI.createButton(93, 51, ["https://devast.io/img/ghoul-mode-button-out.png", "https://devast.io/img/ghoul-mode-button-in.png",
            "https://devast.io/img/ghoul-mode-button-click.png"
          ]), N = GUI.createButton(68, 34, ["https://devast.io/img/private-server-button-out.png", "https://devast.io/img/private-server-button-in.png",
            "https://devast.io/img/private-server-button-click.png"
          ]), M = GUI.createButton(68, 34, ["https://devast.io/img/public-server-button-out.png", "https://devast.io/img/public-server-button-in.png",
            "https://devast.io/img/public-server-button-click.png"
          ]), W = 1 === isTouchScreen ? GUI.createButton(0, 0) : GUI.createButton(86, 48, [
            "https://devast.io/img/privateserver-button-out.png", "https://devast.io/img/privateserver-button-in.png",
            "https://devast.io/img/privateserver-button-click.png"
          ]), C = 1 === isTouchScreen ? GUI.createButton(0, 0) : GUI.createButton(52, 42, [
            "https://devast.io/img/map-editor-button-out.png", "https://devast.io/img/map-editor-button-in.png", "https://devast.io/img/map-editor-button-click.png"
          ]), P = {
            x: 0,
            y: 0
          }, x = window.document.getElementById("preroll"), V = x.style, {
            x: 0,
            y: 0
          }
      },
      run: function () {
        Client.onError = i, Client.onOpen = a, World.PLAYER.isBuilding = 0, World.PLAYER.id = 0, Render.setDetection(
            0), Render.stopPoisonEffect(), 1 === Home.gameMode && (M.hide(), N.hide()), 1 === isTouchScreen && C
          .hide(), CanvasUtils.setRenderer(Home), Q = 2e3, j = 2e3, q = X, J = 1, $(), r.display = "inline-block", c
          .display = "inline-block", 0 === isTouchScreen && (L.display = "inline-block"), 0 === isTouchScreen && (T
            .display = "inline-block")
      },
      update: $,
      draw: function () {
        0 !== function () {
          if (1 === K) {
            if ($(), Q < 0) return K = 0, r.display = "none", s.setState(GUI.__BUTTON_OUT__), c.display = "none", L
              .display = "none", T.display = "none", b.setState(GUI.__BUTTON_OUT__), y.setState(GUI
                .__BUTTON_OUT__), S.setState(GUI.__BUTTON_OUT__), U.setState(GUI.__BUTTON_OUT__), h.setState(GUI
                .__BUTTON_OUT__), f.setState(GUI.__BUTTON_OUT__), D.setState(GUI.__BUTTON_OUT__), v.setState(GUI
                .__BUTTON_OUT__), N.setState(GUI.__BUTTON_OUT__), M.setState(GUI.__BUTTON_OUT__), W.setState(GUI
                .__BUTTON_OUT__), C.setState(GUI.__BUTTON_OUT__), V.display = "none", B.run(), 0;
            Q -= delta
          } else 1 === J && ($(), Q < 0 && (J = 0, window.document.getElementById("bod").style.backgroundColor =
            "#46664d",
            function () {
              0 === isTouchScreen && window.addEventListener("contextmenu", (function (e) {
                return e.preventDefault(), setx = rowx, sety = rowy, !1
              }), !1);
              0 === isTouchScreen && window.addEventListener("mousedown", ee, !1);
              0 === isTouchScreen && window.addEventListener("mouseup", ie, !1);
              0 === isTouchScreen && window.addEventListener("mousemove", ae, !1);
              1 === isTouchScreen && window.addEventListener("touchstart", _e, !1);
              1 === isTouchScreen && window.addEventListener("touchend", oe, !1);
              1 === isTouchScreen && window.addEventListener("touchcancel", te, !1);
              1 === isTouchScreen && window.addEventListener("touchmove", de, !1)
            }()), Q -= delta);
          return 1
        }() && (ctx.clearRect(0, 0, canw, canh), Render.world(), Q > 0 && (k = q(1 - Q / j), 1 === J && (k = 1 -
            window.Math.abs(k)), k = 1 - k), ctx.globalAlpha = .3 * k, ctx.fillStyle = "#000000", ctx.fillRect(0, 0,
            canw, canh), ctx.globalAlpha = 1, Home.gameMode === World.__SURVIVAL__ ? f.setState(GUI
            .__BUTTON_CLICK__) : Home.gameMode === World.__BR__ ? D.setState(GUI.__BUTTON_CLICK__) : Home
          .gameMode === World.__GHOUL__ && v.setState(GUI.__BUTTON_CLICK__), 0 === Home.publicMode ? N.setState(GUI
            .__BUTTON_CLICK__) : 1 === Home.publicMode && M.setState(GUI.__BUTTON_CLICK__), d.draw(), s.draw(), E
          .draw(), R.draw(), A.draw(), b.draw(), y.draw(), S.draw(), U.draw(), h.draw(), f.draw(), v.draw(), N
          .draw(), M.draw(), W.draw(), C.draw(), null === H.img && (H.img = GUI.renderText("0." + versionInf[0] +
            "." + versionInf[1], "'Viga', sans-serif", "#d6ddde", 24, 400, window.undefined, 16, 25, window
            .undefined, window.undefined, window.undefined, window.undefined, "#2b3c3e", 8), H.img.isLoaded = 1),
          CanvasUtils.drawImageHd(H, d.pos.x / scaleby + 484.5, d.pos.y / scaleby + 124, 0, 0, 0, 1), Render
          .alertServer(), AudioManager.scheduler())
      }
    }
  }(),
  Game = function () {
    function e(e) {
      1 === World.gameMode ? ri(Rank) : ri(Score)
    }

    function a() {}

    function _() {
      return d
    }

    function o() {
      return d & l
    }
    var t = 0,
      d = 0,
      n = 0,
      r = 0,
      l = 0,
      s = 0,
      g = 0,
      m = 0;

    function c(e) {
      I(), d = 1, 1 === e ? l = 1 : 2 === e && (s = 1)
    }

    function I() {
      d = 0, f.setState(GUI.__BUTTON_OUT__), n = 0, r = 0, l = 0, s = 0, g = 0, World.releaseBuilding()
    }
    var E = GUI.createButton(63, 28, ["https://devast.io/img/addteam-button-out.png", "https://devast.io/img/addteam-button-in.png",
        "https://devast.io/img/addteam-button-click.png"
      ]),
      u = GUI.createButton(44, 33, ["https://devast.io/img/leave-button-out.png", "https://devast.io/img/leave-button-in.png",
        "https://devast.io/img/leave-button-click.png"]),
      L = GUI.createButton(44, 33, ["https://devast.io/img/lockteam-button-out.png", "https://devast.io/img/lockteam-button-in.png",
        "https://devast.io/img/lockteam-button-click.png"
      ]),
      p = GUI.createButton(44, 33, ["https://devast.io/img/unlockteam-button-out.png", "https://devast.io/img/unlockteam-button-in.png",
        "https://devast.io/img/unlockteam-button-click.png"
      ]),
      R = GUI.createButton(44, 33, ["https://devast.io/img/delete-button-out.png", "https://devast.io/img/delete-button-in.png",
        "https://devast.io/img/delete-button-click.png"
      ]),
      w = GUI.createButton(44, 33, ["https://devast.io/img/delete-button-out.png", "https://devast.io/img/delete-button-in.png",
        "https://devast.io/img/delete-button-click.png"
      ]),
      T = GUI.createButton(44, 33, ["https://devast.io/img/join-button-out.png", "https://devast.io/img/join-button-in.png", "https://devast.io/img/join-button-click.png"]),
      O = GUI.createButton(71, 46, ["https://devast.io/img/craft-button-out.png", "https://devast.io/img/craft-button-in.png",
        "https://devast.io/img/craft-button-click.png"]),
      A = GUI.createButton(71, 46, ["https://devast.io/img/cancel-craft-button-out.png", "https://devast.io/img/cancel-craft-button-in.png",
        "https://devast.io/img/cancel-craft-button-click.png"
      ]),
      b = GUI.createButton(71, 46, ["https://devast.io/img/unlock-button-out.png", "https://devast.io/img/unlock-button-in.png",
        "https://devast.io/img/unlock-button-click.png"
      ]),
      y = GUI.createButton(64, 63, ["https://devast.io/img/bag-button-out.png", "https://devast.io/img/bag-button-in.png", "https://devast.io/img/bag-button-click.png"]);
    y.open = 0;
    var S = [],
      U = [],
      h = 0,
      f = GUI.createButton(43, 43, ["https://devast.io/img/close-box-out.png", "https://devast.io/img/close-box-in.png", "https://devast.io/img/close-box-click.png"]),
      D = [CanvasUtils.loadImage("https://devast.io/img/high-particules-out.png"), CanvasUtils.loadImage("https://devast.io/img/high-particules-in.png"),
        CanvasUtils.loadImage("https://devast.io/img/high-particules-click.png")
      ],
      v = [CanvasUtils.loadImage("https://devast.io/img/join-button-out.png"), CanvasUtils.loadImage("https://devast.io/img/join-button-in.png"),
        CanvasUtils.loadImage("https://devast.io/img/join-button-click.png")
      ],
      N = [CanvasUtils.loadImage("https://devast.io/img/remove-button-out.png"), CanvasUtils.loadImage("https://devast.io/img/remove-button-in.png"),
        CanvasUtils.loadImage("https://devast.io/img/remove-button-click.png")
      ],
      M = GUI.createButton(54, 42, null, D),
      W = [CanvasUtils.loadImage("https://devast.io/img/low-particules-out.png"), CanvasUtils.loadImage("https://devast.io/img/low-particules-in.png"),
        CanvasUtils.loadImage("https://devast.io/img/low-particules-click.png")
      ],
      C = GUI.createButton(54, 42, null, W),
      F = [CanvasUtils.loadImage("https://devast.io/img/no-particules-out.png"), CanvasUtils.loadImage("https://devast.io/img/no-particules-in.png"),
        CanvasUtils.loadImage("https://devast.io/img/no-particules-click.png")
      ],
      P = GUI.createButton(54, 42, null, F),
      x = [CanvasUtils.loadImage("https://devast.io/img/fuel-button-out.png"), CanvasUtils.loadImage("https://devast.io/img/fuel-button-in.png"),
        CanvasUtils.loadImage("https://devast.io/img/fuel-button-click.png")
      ],
      V = GUI.createButton(46, 46, null, x),
      B = [CanvasUtils.loadImage("https://devast.io/img/fuel1-button-out.png"), CanvasUtils.loadImage("https://devast.io/img/fuel1-button-in.png"),
        CanvasUtils.loadImage("https://devast.io/img/fuel1-button-click.png")
      ],
      k = GUI.createButton(46, 46, null, B),
      H = [CanvasUtils.loadImage("https://devast.io/img/energy-cells-button-out.png"), CanvasUtils.loadImage(
        "https://devast.io/img/energy-cells-button-in.png"), CanvasUtils.loadImage("https://devast.io/img/energy-cells-button-click.png")],
      Y = GUI.createButton(46, 46, null, H),
      G = [CanvasUtils.loadImage("https://devast.io/img/high-resolution-out.png"), CanvasUtils.loadImage("https://devast.io/img/high-resolution-in.png"),
        CanvasUtils.loadImage("https://devast.io/img/high-resolution-click.png")
      ],
      K = GUI.createButton(54, 42, null, G),
      z = [CanvasUtils.loadImage("https://devast.io/img/medium-resolution-out.png"), CanvasUtils.loadImage(
        "https://devast.io/img/medium-resolution-in.png"), CanvasUtils.loadImage("https://devast.io/img/medium-resolution-click.png")
      ],
      J = GUI.createButton(54, 42, null, z),
      X = [CanvasUtils.loadImage("https://devast.io/img/low-resolution-out.png"), CanvasUtils.loadImage("https://devast.io/img/low-resolution-in.png"),
        CanvasUtils.loadImage("https://devast.io/img/low-resolution-click.png")
      ],
      j = GUI.createButton(54, 42, null, X),
      Q = [CanvasUtils.loadImage("https://devast.io/img/azerty-button-out.png"), CanvasUtils.loadImage("https://devast.io/img/azerty-button-in.png"),
        CanvasUtils.loadImage("https://devast.io/img/azerty-button-click.png")
      ],
      q = GUI.createButton(81, 33, null, Q),
      Z = [CanvasUtils.loadImage("https://devast.io/img/qwerty-button-out.png"), CanvasUtils.loadImage("https://devast.io/img/qwerty-button-in.png"),
        CanvasUtils.loadImage("https://devast.io/img/qwerty-button-click.png")
      ],
      $ = GUI.createButton(87, 33, null, Z),
      ee = [CanvasUtils.loadImage("https://devast.io/img/sound-on-out.png"), CanvasUtils.loadImage("https://devast.io/img/sound-on-in.png"), CanvasUtils
        .loadImage("https://devast.io/img/sound-on-click.png")
      ],
      ie = [CanvasUtils.loadImage("https://devast.io/img/sound-off-out.png"), CanvasUtils.loadImage("https://devast.io/img/sound-off-in.png"), CanvasUtils
        .loadImage("https://devast.io/img/sound-off-click.png")
      ],
      ae = GUI.createButton(51, 36, null, ee),
      _e = GUI.createButton(51, 36, null, ie),
      oe = GUI.createButton(51, 36, null, ee),
      te = GUI.createButton(51, 36, null, ie),
      de = -1,
      ne = -1,
      re = CanvasUtils.loadImage("https://devast.io/img/inv-empty.png"),
      le = [re, re, re],
      se = [],
      ge = [],
      me = [],
      ce = [],
      Ie = [],
      Ee = [],
      ue = [],
      Le = [],
      pe = [],
      Re = GUI.createButton(58, 58, null, le),
      we = [],
      Te = [],
      Oe = 0,
      Ae = 0,
      be = 0,
      ye = 0,
      Se = 0,
      Ue = 0,
      he = 0,
      fe = 0;

    function De() {
      Client.update(), delta > 5e3 && Client.sendPacket("[20]"), 0 === t && (Client.sendMove(), Client.sendShift()),
        Mouse.state === Mouse.__MOUSE_DOWN__ ? Client.sendFastMouseAngle() : Client.sendMouseAngle(), Mouse.state ===
        Mouse.__MOUSE_DOWN__ && 0 === World.PLAYER.click ? 1 === World.PLAYER.isBuilding ? (World.PLAYER.click = -1,
          1 === World.PLAYER.canBuild && Client.sendPacket(window.JSON.stringify([14, World.PLAYER.buildRotate, World
            .PLAYER.iBuild, World.PLAYER.jBuild
          ]))) : (World.PLAYER.click = 1, World.interaction = -1, Client.sendMouseDown()) : Mouse.state === Mouse
        .__MOUSE_UP__ && (1 === World.PLAYER.isBuilding ? (h = 0, World.PLAYER.click = 0) : 1 === World.PLAYER.click ? (
          h = 0, World.PLAYER.click = 0, Client.sendMouseUp()) : 1 === h && (World.PLAYER.click = 1, World
          .interaction = -1, Client.sendMouseDown()))
    }
    var ve, Ne, Me, We, Ce, Fe, Pe, xe, Ve, Be, ke, He, Ye, Ge, Ke, ze, Je, Xe, je, Qe, qe = [];
    var Ze = new Mouse.LocalMouseEvent,
      $e = new Keyboard.LocalKeyboardEvent,
      ei = 2e3,
      ii = 0,
      ai = MathUtils.Ease.inQuad,
      _i = 0,
      oi = MathUtils.Ease.outQuad,
      ti = 0,
      di = 0,
      ni = window.undefined;

    function ri(e) {
      t = 0, I(), AudioManager.quitGame(), Qe = e,
        function () {
          0 === isTouchScreen && window.addEventListener("wheel", Ri, !1);
          0 === isTouchScreen && window.removeEventListener("mousedown", si, !1);
          0 === isTouchScreen && window.removeEventListener("mouseup", gi, !1);
          0 === isTouchScreen && window.removeEventListener("mousemove", mi, !1);
          0 === isTouchScreen && window.removeEventListener("keyup", ci, !1);
          0 === isTouchScreen && window.removeEventListener("keydown", Ii, !1);
          1 === isTouchScreen && window.removeEventListener("touchstart", Ei, !1);
          1 === isTouchScreen && window.removeEventListener("touchend", ui, !1);
          1 === isTouchScreen && window.removeEventListener("touchcancel", Li, !1);
          1 === isTouchScreen && window.removeEventListener("touchmove", pi, !1)
        }(), di = ei, ti = ei, ni = ai, ii = 1
    }

    function li() {
      var e = 0,
        i = 0;
      if (di > 0) {
        i = canh;
        var a = ni(1 - di / ti);
        1 === a && (di = 0), 1 === _i && (a = 1 - window.Math.abs(a)), e *= a, i *= a
      }
      ve.pos.x = window.Math.floor(5 * scaleby) + e, ve.pos.y = canh - window.Math.floor(174 * scaleby) + window.Math
        .floor(-7 * scaleby) + i, Ne.pos.x = canw2 - window.Math.floor(134 * scaleby) + e, Ne.pos.y = window.Math.max(0,
          canh2 - window.Math.floor(133 * scaleby)) + i, Me.pos.x = canw2 - window.Math.floor(81 * scaleby) + e, Me.pos
        .y = window.Math.max(0, canh2 - window.Math.floor(82 * scaleby)) + i, We.pos.x = canw2 - window.Math.floor(297 *
          scaleby) + e, We.pos.y = window.Math.max(0, canh2 - window.Math.floor(202 * scaleby)) + i, Ce.pos.x = canw2 -
        window.Math.floor(206 * scaleby) + e, Ce.pos.y = window.Math.max(0, canh2 - window.Math.floor(206 * scaleby)) +
        i, Fe.pos.x = window.Math.floor(5 * scaleby) - e, Fe.pos.y = window.Math.floor(5 * scaleby) - i, Pe.pos.x =
        canw - window.Math.floor(233 * scaleby) + window.Math.floor(-6 * scaleby) - e, Pe.pos.y = window.Math.floor(5 *
          scaleby) - i, xe.pos.x = canw2 - window.Math.floor(258 * scaleby) - e, xe.pos.y = window.Math.max(0, canh2 -
          window.Math.floor(137 * scaleby)) - i, Ve.pos.x = canw2 - window.Math.floor(256 * scaleby) - e, Ve.pos.y =
        window.Math.max(0, canh2 - window.Math.floor(75 * scaleby)) - i, Be.pos.x = Fe.pos.x + window.Math.floor(126 *
          scaleby), Be.pos.y = Fe.pos.y, ke.pos.x = Be.pos.x + window.Math.floor(50 * scaleby), ke.pos.y = Be.pos.y, He
        .pos.x = Be.pos.x, He.pos.y = Be.pos.y + window.Math.floor(44.5 * scaleby), Ye.pos.x = He.pos.x, Ye.pos.y = He
        .pos.y + window.Math.floor(44.5 * scaleby), Ge.pos.x = Fe.pos.x, Ge.pos.y = Fe.pos.y + window.Math.floor(127 *
          scaleby), Ke.pos.x = canw - window.Math.floor(34 * scaleby) + window.Math.floor(-7 * scaleby) - e, Ke.pos.y =
        window.Math.floor(5 * scaleby) - i, ze.pos.x = Ke.pos.x, ze.pos.y = Ke.pos.y, je.x = canw2 - window.Math.floor(
          150 * scaleby) + e, Xe.left = je.x + "px", je.y = window.Math.max(0, canh2 - 12) + window.Math.floor(150 *
          scaleby) + i, Xe.top = je.y + "px";
      var _ = window.document.getElementById("chatInput").style,
        o = window.Math.floor(250 * scaleby),
        t = window.Math.floor(20 * scaleby),
        d = window.Math.floor(canw2 - o / 2) + "px",
        n = window.Math.floor(canh2 - t / 2 + 85 * scaleby + i) + "px";
      t += "px", o += "px", Xe.width = o, Xe.height = t, Xe.left = d, Xe.top = n, _.width = o, _.height = t, _
        .fontSize = window.Math.floor(14 * scaleby) + "px"
    }

    function si(e) {
      Mouse.updateAll(e, Mouse.__MOUSE_DOWN__);
      var i = 0;
      if (1 === Be.trigger() && (i = 1), 1 === ke.trigger() && (i = 1), 1 === He.trigger() && (i = 1), 1 === Ye
        .trigger() && (i = 1), 1 === Ge.trigger() && (i = 1), 1 === Ke.trigger() && (i = 1), 1 === ze.trigger() && (i =
          1), 0 !== World.PLAYER.teamJoin && (1 !== T.trigger() && 1 !== w.trigger() || (i = 1)), 1 === d)
        if (f.trigger(), 1 === r) q.trigger(), $.trigger(), K.trigger(), J.trigger(), j.trigger(), ae.trigger(), _e
          .trigger(), oe.trigger(), te.trigger(), C.trigger(), M.trigger(), P.trigger();
        else if (1 === l) {
        -1 === World.PLAYER.craftCategory ? (0 === World.PLAYER.crafting || 1 === World.PLAYER.isInBuilding ? O
            .trigger() : A.trigger(), World.PLAYER.craftArea !== AREAS.__FIRE__ && World.PLAYER.craftArea !== AREAS
            .__BBQ__ && World.PLAYER.craftArea !== AREAS.__COMPOST__ || 255 === World.PLAYER.building.fuel ? World
            .PLAYER.craftArea !== AREAS.__SMELTER__ && World.PLAYER.craftArea !== AREAS.__EXTRACTOR__ && World.PLAYER
            .craftArea !== AREAS.__AGITATOR__ || 255 === World.PLAYER.building.fuel || k.trigger() : V.trigger()) : b
          .trigger();
        for (var a = 0; a < S.length; a++) S[a].trigger();
        for (a = 0; a < U.length; a++) World.PLAYER.buildingArea !== a && 0 !== a || U[a].trigger();
        var _ = World.PLAYER.craftLen;
        for (a = 0; a < _; a++) ge[a].trigger();
        for (_ = World.PLAYER.recipeLen, a = 0; a < _; a++) me[a].trigger();
        if (1 === World.PLAYER.isInBuilding)
          for (a = 0; a < World.PLAYER.building.len; a++) ce[a].trigger();
        for (_ = World.PLAYER.toolsLen, a = 0; a < _; a++) Ie[a].trigger();
        Re.trigger()
      }
      var o = World.PLAYER.inventory;
      (_ = o.length) > 10 && 1 === y.trigger() && (i = 1);
      for (a = 0; a < _; a++)
        if (1 === se[a].trigger()) {
          if (i = 1, 0 !== o[a][0]) {
            var t = World.PLAYER.drag;
            0 === t.begin && (t.begin = 1, t.x = Mouse.x, t.y = Mouse.y, t.id = a)
          }
        } else if (1 === s)
        for (var n = World.PLAYER.chest, m = 0; m < 4; m++) 0 !== n[m][0] && Le[m].trigger();
      else if (1 === g)
        if (-1 === World.PLAYER.team) {
          E.trigger();
          var c = 0;
          for (a = 0; a < Ee.length; a++) 0 !== World.teams[a].leader && (Ee[c].trigger(), c++)
        } else if (1 === World.PLAYER.teamLeader) {
        L.trigger(), p.trigger(), R.trigger();
        c = 0;
        var I = World.teams[World.PLAYER.team];
        for (a = 0; a < World.players.length; a++)
          if (a !== World.PLAYER.id) {
            var D = World.players[a];
            D.team === I.id && D.teamUid === I.uid && (ue[c].trigger(), c++)
          } else c++
      } else u.trigger();
      0 === i && 0 === d ? (h = 1, -1 === World.PLAYER.click && (World.PLAYER.click = 0)) : 0 === World.PLAYER.click &&
        (World.PLAYER.click = -1)
    }

    function gi(e) {
      Mouse.updateAll(e, Mouse.__MOUSE_UP__);
      if (1 === Be.trigger() && (1, 0 === m ? (m = 1, CanvasUtils.enableFullscreen(), 0 === World.day ? canvas.style
            .backgroundColor = "#3D5942" : canvas.style.backgroundColor = "#0B2129", AudioUtils.playFx(AudioUtils._fx
              .button, 1, 0)) : (m = 0, CanvasUtils.disableFullscreen(), AudioUtils.playFx(AudioUtils._fx.button, 1,
          0))), 1 === ke.trigger() && (1, 0 === World.PLAYER.ghoul)) return 0 === l ? (I(), d = 1, l = 1, World
        .buildCraftList(AREAS.__PLAYER__), void AudioUtils.playFx(AudioUtils._fx.open, 1, 0)) : (I(),
        void AudioUtils.playFx(AudioUtils._fx.open, 1, 0));
      if (1 === He.trigger()) return 1, 0 === r ? (I(), d = 1, r = 1, void AudioUtils.playFx(AudioUtils._fx.open, 1,
        0)) : (I(), void AudioUtils.playFx(AudioUtils._fx.open, 1, 0));
      if (1 === Ye.trigger()) return 1, 0 === n ? (I(), d = 1, n = 1, void AudioUtils.playFx(AudioUtils._fx.open, 1,
        0)) : (I(), void AudioUtils.playFx(AudioUtils._fx.open, 1, 0));
      if (1 === Ge.trigger()) return 1, 0 === g ? (I(), d = 1, g = 1, void AudioUtils.playFx(AudioUtils._fx.open, 1,
        0)) : (I(), void AudioUtils.playFx(AudioUtils._fx.open, 1, 0));
      if (1 === Ke.trigger()) return 1, Ke.hide(), ze.show(), localStorage2.setItem("showLeaderboard", "0"),
        void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
      if (1 === ze.trigger()) return 1, ze.hide(), Ke.show(), localStorage2.setItem("showLeaderboard", "1"),
        void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
      var i = World.PLAYER.drag;
      if (0 !== World.PLAYER.teamJoin) {
        if (1 === T.trigger()) return Client.sendPacket(window.JSON.stringify([31, World.PLAYER.teamJoin])), AudioUtils
          .playFx(AudioUtils._fx.button, 1, 0), void World.nextInvitation();
        if (1 === w.trigger()) return AudioUtils.playFx(AudioUtils._fx.button, 1, 0), void World.nextInvitation()
      }
      if (1 === d) {
        if (1 === f.trigger()) return I(), void AudioUtils.playFx(AudioUtils._fx.open, 1, 0);
        if (1 === r) {
          if ($.setState(GUI.__BUTTON_OUT__), q.setState(GUI.__BUTTON_OUT__), K.setState(GUI.__BUTTON_OUT__), J
            .setState(GUI.__BUTTON_OUT__), j.setState(GUI.__BUTTON_OUT__), ae.setState(GUI.__BUTTON_OUT__), _e.setState(
              GUI.__BUTTON_OUT__), oe.setState(GUI.__BUTTON_OUT__), te.setState(GUI.__BUTTON_OUT__), M.setState(GUI
              .__BUTTON_OUT__), C.setState(GUI.__BUTTON_OUT__), P.setState(GUI.__BUTTON_OUT__), 1 === q.trigger())
            return Keyboard.setAzerty(), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          if (1 === $.trigger()) return Keyboard.setQwert(), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          if (1 === K.trigger()) return CanvasUtils.setResolution(1), void AudioUtils.playFx(AudioUtils._fx.button, 1,
            0);
          if (1 === J.trigger()) return CanvasUtils.setResolution(2), void AudioUtils.playFx(AudioUtils._fx.button, 1,
            0);
          if (1 === j.trigger()) return CanvasUtils.setResolution(3), void AudioUtils.playFx(AudioUtils._fx.button, 1,
            0);
          if (1 === ae.trigger()) return AudioUtils.setAudio(1), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          if (1 === _e.trigger()) return AudioUtils.setAudio(0), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          if (1 === oe.trigger()) return AudioUtils.setFx(1), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          if (1 === te.trigger()) return AudioUtils.setFx(0), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          if (1 === C.trigger()) return Render.setParticles(1), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          if (1 === M.trigger()) return Render.setParticles(2), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          if (1 === P.trigger()) return Render.setParticles(0), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          var a = Ne.pos;
          if (Mouse.sx < a.x || Mouse.sx > a.x + 234 * scaleby || Mouse.sy < a.y || Mouse.sy > a.y + 232 * scaleby)
            return I(), void AudioUtils.playFx(AudioUtils._fx.open, 1, 0)
        } else if (1 === n) {
          var _ = Ce.pos;
          if (Mouse.sx < _.x || Mouse.sx > _.x + 412 * scaleby || Mouse.sy < _.y || Mouse.sy > _.y + 412 * scaleby)
            return I(), void AudioUtils.playFx(AudioUtils._fx.open, 1, 0)
        } else if (1 === l)
          if (-1 === World.PLAYER.craftCategory ? 0 === World.PLAYER.crafting || 1 === World.PLAYER.isInBuilding ? 1 ===
            World.PLAYER.craftAvailable[World.PLAYER.craftIdSelected] && 1 === O.trigger() && (1 === World.PLAYER
              .isInBuilding ? 0 !== World.PLAYER.building.fuel && World.PLAYER.building.len < 4 && (Client.sendPacket(
                window.JSON.stringify([18, World.PLAYER.craftSelected])), AudioUtils.playFx(AudioUtils._fx.craft, .8,
                0)) : (Client.sendPacket(window.JSON.stringify([22, World.PLAYER.craftSelected])), AudioUtils.playFx(
                AudioUtils._fx.craft, .8, 0)), O.setState(GUI.__BUTTON_OUT__)) : 1 === A.trigger() && (Client
              .sendPacket(window.JSON.stringify([23])), World.PLAYER.crafting = 0, A.setState(GUI.__BUTTON_OUT__),
              AudioUtils.playFx(AudioUtils._fx.button, 1, 0)) : 1 === b.trigger() && 1 === World.PLAYER.craftAvailable[
              World.PLAYER.craftIdSelected] && (Client.sendPacket(window.JSON.stringify([21, World.PLAYER
              .craftSelected])), AudioUtils.playFx(AudioUtils._fx.skill, 1, 0)), 1 === S[SKILLS.__SKILL__].trigger())
            World.buildSkillList(SKILLS.__SKILL__), AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          else if (1 === S[SKILLS.__BUILDING__].trigger()) World.buildSkillList(SKILLS.__BUILDING__), AudioUtils.playFx(
          AudioUtils._fx.button, 1, 0);
        else if (1 === S[SKILLS.__CLOTHE__].trigger()) World.buildSkillList(SKILLS.__CLOTHE__), AudioUtils.playFx(
          AudioUtils._fx.button, 1, 0);
        else if (1 === S[SKILLS.__PLANT__].trigger()) World.buildSkillList(SKILLS.__PLANT__), AudioUtils.playFx(
          AudioUtils._fx.button, 1, 0);
        else if (1 === S[SKILLS.__DRUG__].trigger()) World.buildSkillList(SKILLS.__DRUG__), AudioUtils.playFx(AudioUtils
          ._fx.button, 1, 0);
        else if (1 === S[SKILLS.__MINERAL__].trigger()) World.buildSkillList(SKILLS.__MINERAL__), AudioUtils.playFx(
          AudioUtils._fx.button, 1, 0);
        else if (1 === S[SKILLS.__LOGIC__].trigger()) World.buildSkillList(SKILLS.__LOGIC__), AudioUtils.playFx(
          AudioUtils._fx.button, 1, 0);
        else if (1 === S[SKILLS.__SURVIVAL__].trigger()) World.buildSkillList(SKILLS.__SURVIVAL__), AudioUtils.playFx(
          AudioUtils._fx.button, 1, 0);
        else if (1 === S[SKILLS.__TOOL__].trigger()) World.buildSkillList(SKILLS.__TOOL__), AudioUtils.playFx(AudioUtils
          ._fx.button, 1, 0);
        else if (1 === S[SKILLS.__WEAPON__].trigger()) World.buildSkillList(SKILLS.__WEAPON__), AudioUtils.playFx(
          AudioUtils._fx.button, 1, 0);
        else if (1 === U[AREAS.__PLAYER__].trigger()) World.buildCraftList(AREAS.__PLAYER__), AudioUtils.playFx(
          AudioUtils._fx.button, 1, 0);
        else if (1 === U[AREAS.__FIRE__].trigger() || 1 === U[AREAS.__BBQ__].trigger() || 1 === U[AREAS.__COMPOST__]
          .trigger()) Client.sendPacket(window.JSON.stringify([World.PLAYER.packetId, World.PLAYER.buildingId, World
          .PLAYER.buildingPid
        ])), AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
        else if (1 === U[AREAS.__WORKBENCH__].trigger()) Client.sendPacket(window.JSON.stringify([World.PLAYER.packetId,
          World.PLAYER.buildingId, World.PLAYER.buildingPid
        ])), AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
        else if (1 === U[AREAS.__WELDING_MACHINE__].trigger()) Client.sendPacket(window.JSON.stringify([World.PLAYER
          .packetId, World.PLAYER.buildingId, World.PLAYER.buildingPid
        ])), AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
        else if (1 === U[AREAS.__WEAVING__].trigger()) Client.sendPacket(window.JSON.stringify([World.PLAYER.packetId,
          World.PLAYER.buildingId, World.PLAYER.buildingPid
        ])), AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
        else if (1 === U[AREAS.__WORKBENCH2__].trigger()) Client.sendPacket(window.JSON.stringify([World.PLAYER
          .packetId, World.PLAYER.buildingId, World.PLAYER.buildingPid
        ])), AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
        else if (1 === U[AREAS.__TESLA__].trigger()) Client.sendPacket(window.JSON.stringify([World.PLAYER.packetId,
          World.PLAYER.buildingId, World.PLAYER.buildingPid
        ])), AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
        else if (1 === U[AREAS.__SMELTER__].trigger() || 1 === U[AREAS.__EXTRACTOR__].trigger() || 1 === U[AREAS
            .__AGITATOR__].trigger()) Client.sendPacket(window.JSON.stringify([World.PLAYER.packetId, World.PLAYER
          .buildingId, World.PLAYER.buildingPid
        ])), AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
        else {
          for (var o = World.PLAYER.craftLen, t = 0; t < o; t++)
            if (1 === ge[t].trigger()) return World.PLAYER.craftIdSelected = t, World.selectRecipe(World.PLAYER
              .craftList[t]), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          for (o = World.PLAYER.recipeLen, t = 0; t < o; t++)
            if (1 === me[t].trigger()) return;
          if (1 === World.PLAYER.isInBuilding) {
            for (t = 0; t < World.PLAYER.building.len; t++)
              if (1 === ce[t].trigger()) return Client.sendPacket(window.JSON.stringify([19, t])), void AudioUtils
                .playFx(AudioUtils._fx.button, 1, 0);
            if (World.PLAYER.craftArea === AREAS.__FIRE__ || World.PLAYER.craftArea === AREAS.__BBQ__ || World.PLAYER
              .craftArea === AREAS.__COMPOST__) {
              if (255 !== World.PLAYER.building.fuel && 1 === V.trigger()) return Client.sendPacket(window.JSON
                .stringify([24])), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0)
            } else if (World.PLAYER.craftArea === AREAS.__SMELTER__ || World.PLAYER.craftArea === AREAS.__EXTRACTOR__ ||
              World.PLAYER.craftArea === AREAS.__AGITATOR__) {
              if (255 !== World.PLAYER.building.fuel && 1 === k.trigger()) return Client.sendPacket(window.JSON
                .stringify([24])), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0)
            } else if (World.PLAYER.craftArea === AREAS.__TESLA__ && 255 !== World.PLAYER.building.fuel && 1 === Y
              .trigger()) return Client.sendPacket(window.JSON.stringify([24])), void AudioUtils.playFx(AudioUtils._fx
              .button, 1, 0)
          }
          var c = We.pos;
          if (1 !== i.begin && !e.ctrlKey && (Mouse.sx < c.x || Mouse.sx > c.x + 595 * scaleby || Mouse.sy < c.y ||
              Mouse.sy > c.y + 325 * scaleby)) return I(), void AudioUtils.playFx(AudioUtils._fx.open, 1, 0)
        } else if (1 === s) {
          for (var h = World.PLAYER.chest, D = 0; D < 4; D++)
            if (0 !== h[D][0] && 1 === Le[D].trigger()) return Client.sendPacket(window.JSON.stringify([27, D])),
              void AudioUtils.playFx(AudioUtils._fx.drag, 1, 0)
        } else if (1 === g)
          if (-1 === World.PLAYER.team) {
            if (1 === E.trigger() && 1 === World.PLAYER.teamNameValid && window.Date.now() - World.PLAYER
              .teamCreateDelay > 30500 && (Client.sendPacket(window.JSON.stringify([28, Game.teamName])), AudioUtils
                .playFx(AudioUtils._fx.button, 1, 0), World.PLAYER.teamCreateDelay = window.Date.now()), window.Date
              .now() - World.PLAYER.teamDelay > 10500) {
              var v = 0;
              for (t = 0; t < Ee.length; t++) 0 !== World.teams[t].leader && (1 === Ee[v].trigger() && (Client
                .sendPacket(window.JSON.stringify([30, t])), AudioUtils.playFx(AudioUtils._fx.button, 1, 0), World
                .PLAYER.teamDelay = window.Date.now()), v++)
            }
          } else if (1 === World.PLAYER.teamLeader) {
          if (1 === L.trigger() && 0 === World.PLAYER.teamLocked) return Client.sendPacket(window.JSON.stringify([33])),
            World.PLAYER.teamLocked = 1, void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          if (1 === p.trigger() && 1 === World.PLAYER.teamLocked) return Client.sendPacket(window.JSON.stringify([34])),
            World.PLAYER.teamLocked = 0, void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          if (1 === R.trigger()) return Client.sendPacket(window.JSON.stringify([29])), void AudioUtils.playFx(
            AudioUtils._fx.button, 1, 0);
          v = 0;
          var N = World.teams[World.PLAYER.team];
          for (t = 0; t < World.players.length; t++)
            if (t !== World.PLAYER.id) {
              var W = World.players[t];
              if (W.team === N.id && W.teamUid === N.uid) {
                if (1 === ue[v].trigger()) return Client.sendPacket(window.JSON.stringify([32, W.id])), void AudioUtils
                  .playFx(AudioUtils._fx.button, 1, 0);
                v++
              }
            } else v++
        } else if (1 === u.trigger()) return Client.sendPacket(window.JSON.stringify([35, World.PLAYER.id])),
          void AudioUtils.playFx(AudioUtils._fx.button, 1, 0)
      }
      var F = World.PLAYER.inventory,
        x = 0;
      (o = F.length) > 10 && 1 === y.trigger() && (y.open = (y.open + 1) % 2, 1 === y.open ? AudioUtils.playFx(
        AudioUtils._fx.zipperOn, .08, 0) : AudioUtils.playFx(AudioUtils._fx.zipperOff, .08, 0));
      for (t = 0; t < o && !(t > 9 && 0 === y.open); t++)
        if (1 === se[t].trigger()) {
          x = 1;
          var B = F[t][0],
            H = F[t][1],
            G = F[t][2],
            z = F[t][3],
            X = INVENTORY[B];
          if (1 === i.begin) {
            if (i.id !== t) return F[t][0] === F[i.id][0] && X.stack > F[t][1] && X.stack > F[i.id][1] ? (Client
              .sendPacket(window.JSON.stringify([10, F[i.id][0], F[i.id][1], F[i.id][2], F[t][1], F[t][2]])), World
              .PLAYER.drag.begin = 0, void AudioUtils.playFx(AudioUtils._fx.drag, 1, 0)) : (F[t][0] = F[i.id][0], F[
              t][1] = F[i.id][1], F[t][2] = F[i.id][2], F[t][3] = F[i.id][3], F[i.id][0] = B, F[i.id][1] = H, F[i
              .id][2] = G, F[i.id][3] = z, 0 !== B && Game.inventory[i.id].setImages(INVENTORY[B].itemButton.src,
              INVENTORY[B].itemButton.img), Game.inventory[t].setImages(INVENTORY[F[t][0]].itemButton.src,
              INVENTORY[F[t][0]].itemButton.img), World.PLAYER.drag.begin = 0, void AudioUtils.playFx(AudioUtils
              ._fx.drag, 1, 0));
            World.PLAYER.drag.begin = 0
          }
          0 !== B && (1 === s && 3 !== e.which ? (Client.sendPacket(window.JSON.stringify([26, B, H, G, z])), AudioUtils
            .playFx(AudioUtils._fx.drag, 1, 0)) : 3 === e.which ? (Client.sendPacket(window.JSON.stringify([9, B, H,
            G, z
          ])), AudioUtils.playFx(AudioUtils._fx.throwLoot, 1, 0)) : e.ctrlKey ? (AudioUtils.playFx(AudioUtils._fx
            .drag, .6, 0), Client.sendPacket(window.JSON.stringify([11, B, H, G]))) : Client.sendPacket(window.JSON
            .stringify([8, B, H, G, z])))
        } if (1 === s && 0 === x) {
        var Q = Me.pos;
        (Mouse.sx < Q.x || Mouse.sx > Q.x + 161 * scaleby || Mouse.sy < Q.y || Mouse.sy > Q.y + 165 * scaleby) && (I(),
          AudioUtils.playFx(AudioUtils._fx.open, 1, 0))
      }
      if (1 === i.begin) {
        t = i.id;
        Client.sendPacket(window.JSON.stringify([9, F[t][0], F[t][1], F[t][2], F[t][3]])), AudioUtils.playFx(AudioUtils
          ._fx.throwLoot, 1, 0)
      }
      i.begin = 0
    }

    function mi(e) {
      Mouse.updateAll(e, Mouse.__MOUSE_MOVE__);
      if (1 === Be.trigger() && 1, 1 === ke.trigger() && 1, 1 === He.trigger() && 1, 1 === Ye.trigger() && 1, 1 === Ge
        .trigger() && 1, 1 === Ke.trigger() && 1, 1 === ze.trigger() && 1, 0 !== World.PLAYER.teamJoin && (T.trigger(),
          w.trigger()), 1 === d)
        if (f.trigger(), 1 === r) q.trigger(), $.trigger(), K.trigger(), J.trigger(), j.trigger(), ae.trigger(), _e
          .trigger(), oe.trigger(), te.trigger(), C.trigger(), M.trigger(), P.trigger();
        else if (1 === l) {
        -1 === World.PLAYER.craftCategory ? 0 === World.PLAYER.crafting || 1 === World.PLAYER.isInBuilding ? O
        .trigger() : A.trigger() : b.trigger();
        for (var i = 0; i < S.length; i++) S[i].trigger();
        for (i = 0; i < U.length; i++) World.PLAYER.buildingArea !== i && 0 !== i || U[i].trigger();
        var a = World.PLAYER.craftLen;
        for (i = 0; i < a; i++) ge[i].trigger();
        for (ne = -1, a = World.PLAYER.recipeLen, i = 0; i < a; i++) 1 === me[i].trigger() && (ne = i);
        if (1 === World.PLAYER.isInBuilding) {
          for (i = 0; i < World.PLAYER.building.len; i++) ce[i].trigger();
          World.PLAYER.craftArea !== AREAS.__FIRE__ && World.PLAYER.craftArea !== AREAS.__BBQ__ && World.PLAYER
            .craftArea !== AREAS.__COMPOST__ || 255 === World.PLAYER.building.fuel ? World.PLAYER.craftArea !== AREAS
            .__SMELTER__ && World.PLAYER.craftArea !== AREAS.__EXTRACTOR__ && World.PLAYER.craftArea !== AREAS
            .__AGITATOR__ || 255 === World.PLAYER.building.fuel || k.trigger() : V.trigger()
        }
        for (a = World.PLAYER.toolsLen, i = 0; i < a; i++) Ie[i].trigger();
        Re.trigger()
      } else if (1 === s)
        for (var _ = World.PLAYER.chest, o = 0; o < 4; o++) 0 !== _[o][0] && Le[o].trigger();
      else if (1 === g)
        if (-1 === World.PLAYER.team) {
          E.trigger();
          var t = 0;
          for (i = 0; i < Ee.length; i++) 0 !== World.teams[i].leader && (Ee[t].trigger(), t++)
        } else if (1 === World.PLAYER.teamLeader) {
        L.trigger(), p.trigger(), R.trigger();
        t = 0;
        var n = World.teams[World.PLAYER.team];
        for (i = 0; i < World.players.length; i++)
          if (i !== World.PLAYER.id) {
            var m = World.players[i];
            m.team === n.id && m.teamUid === n.uid && (ue[t].trigger(), t++)
          } else t++
      } else u.trigger();
      var c = World.PLAYER.inventory;
      a = c.length;
      de = -1, a > 10 && y.trigger();
      for (i = 0; i < a && !(i > 9 && 0 === y.open); i++) 0 !== c[i][0] && 1 === se[i].trigger() && (de = i)
    }

    function ci(e) {
      if (Keyboard.keyup(e), 1 === g && -1 === World.PLAYER.team) {
        if (8 === e.keyCode && Game.teamName.length > 0) return Game.teamName = Game.teamName.substring(0, Game.teamName
          .length - 1), void e.preventDefault();
        (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 48 && e.keyCode <= 57) && Game.teamName.length < 5 && (Game
          .teamName += window.String.fromCharCode(e.keyCode))
      } else if (1 === t && 27 === e.keyCode) t = 0, Xe.display = "none";
      else if (13 === e.keyCode)
        if (1 === t) {
          if (chatinput.value.length > 0)
            if (1 === World.PLAYER.admin && "!" === chatinput.value[0])
              for (var i = chatinput.value.split("!"), a = 1; a < i.length; a++) {
                var _ = "!" + i[a]; - 1 === _.indexOf("public") && (_ = _.split(" ").join("")), Client.sendChatMessage(
                  _), a <= 20 && World.players[World.PLAYER.id].text.push(_)
              } else if ("[" === chatinput.value[0]) Client.sendWSmsg(chatinput.value);
              else {
                var o = Client.sendChatMessage(chatinput.value);
                0 !== o ? World.players[World.PLAYER.id].text.push("I am muted during " + window.Math.floor(o / 1e3) +
                  " seconds") : World.players[World.PLAYER.id].text.push(chatinput.value)
              } t = 0, chatinput.value = "", Xe.display = "none"
        } else t = 1, Xe.display = "inline-block", chatinput.focus();
      else if (0 === t)
        if (77 === e.keyCode) 0 === n ? (I(), d = 1, n = 1, AudioUtils.playFx(AudioUtils._fx.open, 1, 0)) : (I(),
          AudioUtils.playFx(AudioUtils._fx.open, 1, 0));
        else if (69 === e.keyCode || 32 === e.keyCode) switch (World.PLAYER.interaction) {
        case 0:
          Client.sendPacket(window.JSON.stringify([12, World.PLAYER.lootId]));
          break;
        case 2:
          Client.sendPacket(window.JSON.stringify([World.PLAYER.packetId, World.PLAYER.buildingId, World.PLAYER
            .buildingPid
          ]))
        } else if (70 === e.keyCode) 1 === World.PLAYER.extraLoot && Client.sendPacket(window.JSON.stringify([12, World
          .PLAYER.lootId
        ]));
        else if (82 === e.keyCode) 1 === World.PLAYER.isBuilding ? World.PLAYER.buildRotate = (World.PLAYER
        .buildRotate + 1) % 4 : Client.sendPacket(window.JSON.stringify([13]));
      else if (e.keyCode >= 49 && e.keyCode <= 57) {
        if (1 !== World.PLAYER.drag.begin) {
          a = e.keyCode - 49;
          var r = World.PLAYER.inventory;
          if (a < r.length) {
            var s = r[a][0],
              m = r[a][1],
              c = r[a][2],
              E = r[a][3];
            e.altKey ? (Client.sendPacket(window.JSON.stringify([9, s, m, c, E])), AudioUtils.playFx(AudioUtils._fx
              .throwLoot, 1, 0)) : e.ctrlKey ? (AudioUtils.playFx(AudioUtils._fx.drag, .6, 0), Client.sendPacket(
              window.JSON.stringify([11, s, m, c]))) : Client.sendPacket(window.JSON.stringify([8, s, m, c, E]))
          }
        }
      } else 67 === e.keyCode && 0 === World.PLAYER.ghoul ? 0 === l ? (I(), d = 1, l = 1, World.buildCraftList(AREAS
        .__PLAYER__), AudioUtils.playFx(AudioUtils._fx.open, 1, 0)) : (AudioUtils.playFx(AudioUtils._fx.open, 1, 0),
        I()) : 27 === e.keyCode && 1 === d && (AudioUtils.playFx(AudioUtils._fx.open, 1, 0), I())
    }

    function Ii(e) {
      if (Keyboard.keydown(e), 37 === e.keyCode || 38 === e.keyCode || 39 === e.keyCode || 40 === e.keyCode) return e
        .preventDefault(), !1
    }

    function Ei(e) {
      for (var i = 0, a = 0; a < e.touches.length; a++) {
        if (Mouse.touchToMouseEvent(Ze, e, e.touches[a]), 0 !== y.open) {
          var _ = Mouse.state;
          Mouse.updateAll(Ze, Mouse.__MOUSE_DOWN__), Mouse.state = _;
          for (var o = World.PLAYER.inventory, t = 0, n = 10; n < o.length; n++)
            if (0 !== o[n][0] && 1 === se[n].trigger()) {
              t = 1;
              break
            } if (1 === t) {
            si(Ze);
            continue
          }
        }
        if (0 === World.PLAYER.drag.begin && 0 === d) {
          var r = window.Math.floor(Ze.clientX * CanvasUtils.options.ratioX),
            l = window.Math.floor(Ze.clientY * CanvasUtils.options.ratioY);
          switch (World.PLAYER.interaction) {
          case 2:
            if (1 === World.PLAYER.extraLoot && r > Game.xInteract2 && l > Game.yInteract2 && r < Game.xInteract2 + Game
              .widthInteract && l < Game.yInteract2 + Game.heightInteract) {
              fe = 1, $e.keyCode = 70, $e.charCode = 70, ci($e);
              continue
            }
          case 0:
            if (r > Game.xInteract && l > Game.yInteract && r < Game.xInteract + Game.widthInteract && l < Game
              .yInteract + Game.heightInteract) {
              fe = 1, $e.keyCode = 69, $e.charCode = 69, ci($e);
              continue
            }
          }
          if (l < canh - 70 * scaleby) {
            var s = 1.5 * canw4,
              g = canw4 / 4;
            if (r < canw2) {
              var m = 30 * scaleby;
              Ae = Math2d.angle(canw2 - s, canh2 + g, r, l), be = window.Math.min(Math2d.dist(r, l, canw2 - s, canh2 +
                  g), 25), r < canw2 - s - m ? (Oe |= 1, $e.charCode = 37, $e.keyCode = 37, Ii($e)) : r > canw2 - s +
                m && (Oe |= 2, $e.charCode = 39, $e.keyCode = 39, Ii($e)), l < canh2 + g - m ? (Oe |= 4, $e.charCode =
                  38, $e.keyCode = 38, Ii($e)) : l > canh2 + g + m && (Oe |= 8, $e.charCode = 40, $e.keyCode = 40, Ii(
                  $e))
            } else if (r < canw - 40 * scaleby || l > 40 * scaleby)
              if (i = 1, Ze.clientX -= s / CanvasUtils.options.ratioX, Ze.clientY -= g / CanvasUtils.options.ratioX,
                1 === World.PLAYER.isBuilding) {
                var c = window.Date.now();
                c - ye < 1e3 && (Se = 1, Ue = Ze.clientX, he = Ze.clientY, si(Ze)), ye = c
              } else Se = 1, Ue = Ze.clientX, he = Ze.clientY, si(Ze);
            continue
          }
        }
        0 === i && 0 === Oe && (si(Ze), i = 1)
      }
    }

    function ui(e) {
      var i = window.Math.floor(e.changedTouches[0].clientX * CanvasUtils.options.ratioX),
        a = window.Math.floor(e.changedTouches[0].clientY * CanvasUtils.options.ratioY);
      if (1 === fe) fe = 0;
      else if (1 === d) gi(Ze);
      else {
        if (1 === Se && i >= canw2) return Se = 0, Ze.clientX = Ue, Ze.clientY = he, void gi(Ze);
        0 === World.PLAYER.drag.begin && i < canw2 && a < canh - 70 * scaleby ? i < 240 * scaleby && a < 160 *
          scaleby && gi(Ze) : gi(Ze)
      }
      0 !== Oe && (1 & Oe && ($e.charCode = 37, ci($e)), 2 & Oe && ($e.charCode = 39, ci($e)), 4 & Oe && ($e.charCode =
        38, ci($e)), 8 & Oe && ($e.charCode = 40, ci($e)), Oe = 0)
    }

    function Li(e) {}

    function pi(e) {
      for (var i = 0, a = 0, _ = 0; _ < e.touches.length; _++) {
        if (Mouse.touchToMouseEvent(Ze, e, e.touches[_]), 0 !== y.open) {
          for (var o = World.PLAYER.inventory, t = 0, n = 10; n < o.length; n++)
            if (0 !== o[n][0] && 1 === se[n].trigger()) {
              t = 1;
              break
            } if (1 === t) {
            mi(Ze);
            continue
          }
        }
        if (0 === World.PLAYER.drag.begin && 0 === d) {
          var r = window.Math.floor(Ze.clientX * CanvasUtils.options.ratioX),
            l = window.Math.floor(Ze.clientY * CanvasUtils.options.ratioY);
          if (l < canh - 70 * scaleby) {
            var s = 1.5 * canw4,
              g = canw4 / 4;
            if (r < canw2) {
              a = 1;
              var m = 0,
                c = 30 * scaleby;
              Ae = Math2d.angle(canw2 - s, canh2 + g, r, l), be = window.Math.min(Math2d.dist(r, l, canw2 - s, canh2 +
                  g), 25), r < canw2 - s - c ? m |= 1 : r > canw2 - s + c && (m |= 2), l < canh2 + g + -c ? m |= 4 : l >
                canh2 + g + c && (m |= 8), 1 == (1 & m) && 1 != (1 & Oe) ? ($e.charCode = 37, Ii($e)) : 1 != (1 & m) &&
                1 == (1 & Oe) && ($e.charCode = 37, ci($e)), 2 == (2 & m) && 2 != (2 & Oe) ? ($e.charCode = 39, Ii(
                $e)) : 2 != (2 & m) && 2 == (2 & Oe) && ($e.charCode = 39, ci($e)), 4 == (4 & m) && 4 != (4 & Oe) ? ($e
                  .charCode = 38, Ii($e)) : 4 != (4 & m) && 4 == (4 & Oe) && ($e.charCode = 38, ci($e)), 8 == (8 & m) &&
                8 != (8 & Oe) ? ($e.charCode = 40, Ii($e)) : 8 != (8 & m) && 8 == (8 & Oe) && ($e.charCode = 40, ci(
                $e)), Oe = m;
              continue
            }(r < canw - 40 * scaleby || l > 40 * scaleby) && (i = 1, Ze.clientX -= s / CanvasUtils.options.ratioX, Ze
              .clientY -= g / CanvasUtils.options.ratioX, Ue = Ze.clientX, he = Ze.clientY, mi(Ze))
          }
        }
        0 === i && 0 === Oe && (mi(Ze), i = 1)
      }
      0 === a && 0 !== Oe && (1 & Oe && ($e.charCode = 37, ci($e)), 2 & Oe && ($e.charCode = 39, ci($e)), 4 & Oe && ($e
        .charCode = 38, ci($e)), 8 & Oe && ($e.charCode = 40, ci($e)), Oe = 0)
    }

    function Ri(e) {
      e = window.event || e;
      return Render.scale += e.wheelDelta / 5e3, !1
    }
    return {
      quit: ri,
      init: function () {
        VWWvn = GUI.renderText("Copied to clipboard", "'Viga', sans-serif", "#FFFFFF", 40, 350, "#000000", 18, 18,
          window.undefined, window.undefined, .2), chatinput = window.document.getElementById("chatInput");
        var e = 68,
          a = ENTITIES[__ENTITIE_PLAYER__].inventorySize + 8;
        for (i = 0; i < a; i++) se.push(GUI.createButton(e, e, null, le));
        for (i = 0; i < 4; i++) Le.push(GUI.createButton(e, e, null, le));
        for (e = 49, i = 0; i < 35; i++) ge.push(GUI.createButton(e, e, null, le));
        for (e = 40, i = 0; i < 5; i++) me.push(GUI.createButton(e, e, null, le));
        for (i = 0; i < 4; i++) ce.push(GUI.createButton(e, e, null, le));
        for (i = 0; i < 3; i++) Ie.push(GUI.createButton(e, e, null, le));
        for (i = 0; i < 9; i++) ue.push(GUI.createButton(29, 27, null, N));
        for (i = 0; i < 18; i++) Ee.push(GUI.createButton(44, 33, null, v));
        for (e = 30, i = 0; i < 171; i++) pe.push(GUI.createButton(e, e, null, le));
        Game.autoloot = pe, Game.BUTTON_CLOSE_BOX = I, Game.openBox = c, Game.inventory = se, Game.craft = ge, Game
          .recipe = me, Game.preview = Re, Game.queue = ce, Game.tools = Ie, Game.chest = Le, Game.kick = ue, Game
          .join = Ee, Game.getSkillBoxState = o, Game.getBoxState = _, Game.teamName = "", Game.acceptMember = T, Game
          .refuseMember = w, Game.inventoryItemNumber = we, Game.inventoryAmmoNumber = Te, Game.xInteract = 0, Game
          .yInteract = 0, Game.widthInteract = 0, Game.heightInteract = 0, Game.xInteract2 = 0, Game.yInteract2 = 0,
          S[SKILLS.__BUILDING__] = GUI.createButton(42, 42, ["https://devast.io/img/building-button-out.png",
            "https://devast.io/img/building-button-in.png", "https://devast.io/img/building-button-click.png"
          ]), S[SKILLS.__SKILL__] = GUI.createButton(42, 42, ["https://devast.io/img/skill-button-out.png", "https://devast.io/img/skill-button-in.png",
            "https://devast.io/img/skill-button-click.png"
          ]), S[SKILLS.__CLOTHE__] = GUI.createButton(42, 42, ["https://devast.io/img/clothe-button-out.png",
            "https://devast.io/img/clothe-button-in.png", "https://devast.io/img/clothe-button-click.png"
          ]), S[SKILLS.__PLANT__] = GUI.createButton(42, 42, ["https://devast.io/img/plant-button-out.png", "https://devast.io/img/plant-button-in.png",
            "https://devast.io/img/plant-button-click.png"
          ]), S[SKILLS.__DRUG__] = GUI.createButton(42, 42, ["https://devast.io/img/medecine-button-out.png",
            "https://devast.io/img/medecine-button-in.png", "https://devast.io/img/medecine-button-click.png"
          ]), S[SKILLS.__MINERAL__] = GUI.createButton(42, 42, ["https://devast.io/img/resources-button-out.png",
            "https://devast.io/img/resources-button-in.png", "https://devast.io/img/resources-button-click.png"
          ]), S[SKILLS.__SURVIVAL__] = GUI.createButton(42, 42, ["https://devast.io/img/survival-button-out.png",
            "https://devast.io/img/survival-button-in.png", "https://devast.io/img/survival-button-click.png"
          ]), S[SKILLS.__TOOL__] = GUI.createButton(42, 42, ["https://devast.io/img/tool-button-out.png", "https://devast.io/img/tool-button-in.png",
            "https://devast.io/img/tool-button-click.png"
          ]), S[SKILLS.__WEAPON__] = GUI.createButton(42, 42, ["https://devast.io/img/weapon-button-out.png",
            "https://devast.io/img/weapon-button-in.png", "https://devast.io/img/weapon-button-click.png"
          ]), S[SKILLS.__LOGIC__] = GUI.createButton(42, 42, ["https://devast.io/img/cable-button-out.png", "https://devast.io/img/cable-button-in.png",
            "https://devast.io/img/cable-button-click.png"
          ]), U[AREAS.__PLAYER__] = GUI.createButton(42, 42, ["https://devast.io/img/own-button-out.png", "https://devast.io/img/own-button-in.png",
            "https://devast.io/img/own-button-click.png"
          ]), U[AREAS.__FIRE__] = GUI.createButton(42, 42, ["https://devast.io/img/fire-button-out.png", "https://devast.io/img/fire-button-in.png",
            "https://devast.io/img/fire-button-click.png"
          ]), U[AREAS.__WORKBENCH__] = GUI.createButton(42, 42, ["https://devast.io/img/workbench1-button-out.png",
            "https://devast.io/img/workbench1-button-in.png", "https://devast.io/img/workbench1-button-click.png"
          ]), U[AREAS.__BBQ__] = GUI.createButton(42, 42, ["https://devast.io/img/bbq-button-out.png", "https://devast.io/img/bbq-button-in.png",
            "https://devast.io/img/bbq-button-click.png"
          ]), U[AREAS.__COMPOST__] = GUI.createButton(42, 42, ["https://devast.io/img/composter-button-out.png",
            "https://devast.io/img/composter-button-in.png", "https://devast.io/img/composter-button-click.png"
          ]), U[AREAS.__WEAVING__] = GUI.createButton(42, 42, ["https://devast.io/img/weaving-machine-button-out.png",
            "https://devast.io/img/weaving-machine-button-in.png", "https://devast.io/img/weaving-machine-button-click.png"
          ]), U[AREAS.__WELDING_MACHINE__] = GUI.createButton(42, 42, ["https://devast.io/img/welding-machine-button-out.png",
            "https://devast.io/img/welding-machine-button-in.png", "https://devast.io/img/welding-machine-button-click.png"
          ]), U[AREAS.__WORKBENCH2__] = GUI.createButton(42, 42, ["https://devast.io/img/workbench2-button-out.png",
            "https://devast.io/img/workbench2-button-in.png", "https://devast.io/img/workbench2-button-click.png"
          ]), U[AREAS.__SMELTER__] = GUI.createButton(42, 42, ["https://devast.io/img/smelter-button-out.png",
            "https://devast.io/img/smelter-button-in.png", "https://devast.io/img/smelter-button-click.png"
          ]), U[AREAS.__TESLA__] = GUI.createButton(42, 42, ["https://devast.io/img/workbench3-button-out.png",
            "https://devast.io/img/workbench3-button-in.png", "https://devast.io/img/workbench3-button-click.png"
          ]), U[AREAS.__AGITATOR__] = GUI.createButton(42, 42, ["https://devast.io/img/agitator-button-out.png",
            "https://devast.io/img/agitator-button-in.png", "https://devast.io/img/agitator-button-click.png"
          ]), U[AREAS.__EXTRACTOR__] = GUI.createButton(42, 42, ["https://devast.io/img/extractor-button-out.png",
            "https://devast.io/img/extractor-button-in.png", "https://devast.io/img/extractor-button-click.png"
          ]), ve = GUI.createBackground(255, 174, "https://devast.io/img/profile-player2.png"), Ne = GUI.createBackground(269, 267,
            "https://devast.io/img/settings-box.png"), Me = GUI.createBackground(162, 165, "https://devast.io/img/chest-box4.png"), We = GUI
          .createBackground(595, 405, "https://devast.io/img/craftbox2.png"), Ce = GUI.createBackground(412, 412,
            "https://devast.io/img/borderBigMinimap2.png"), Fe = GUI.createBackground(128, 128, "https://devast.io/img/minimap.png"), Pe = GUI
          .createBackground(233, 246, "https://devast.io/img/leaderboard.png"), xe = GUI.createBackground(516, 275,
            "https://devast.io/img/jointeam-box.png"), Ve = GUI.createBackground(513, 150, "https://devast.io/img/memberteam-box.png"), Be = GUI
          .createButton(40, 40, ["https://devast.io/img/full-screen-out.png", "https://devast.io/img/full-screen-in.png", "https://devast.io/img/full-screen-click.png"]),
          ke = GUI.createButton(64, 63, ["https://devast.io/img/craftbox-button-out.png", "https://devast.io/img/craftbox-button-in.png",
            "https://devast.io/img/craftbox-button-click.png"
          ]), He = GUI.createButton(40, 40, ["https://devast.io/img/settings-out.png", "https://devast.io/img/settings-in.png",
          "https://devast.io/img/settings-click.png"]), Ye = GUI.createButton(40, 40, ["https://devast.io/img/minimap-button-out.png",
            "https://devast.io/img/minimap-button-in.png", "https://devast.io/img/minimap-button-click.png"
          ]), Ge = GUI.createButton(40, 40, ["https://devast.io/img/team-button-out.png", "https://devast.io/img/team-button-in.png",
            "https://devast.io/img/team-button-click.png"
          ]), Ke = GUI.createButton(34, 33, ["https://devast.io/img/close-leaderboard-out.png", "https://devast.io/img/close-leaderboard-in.png",
            "https://devast.io/img/close-leaderboard-click.png"
          ]), ze = GUI.createButton(34, 33, ["https://devast.io/img/open-leaderboard-out.png", "https://devast.io/img/open-leaderboard-in.png",
            "https://devast.io/img/open-leaderboard-click.png"
          ]), Je = window.document.getElementById("chat"), Xe = Je.style, je = {
            x: 0,
            y: 0
          }
      },
      run: function () {
        Client.onError = e, Client.onOpen = a, "0" === localStorage2.getItem("showLeaderboard") ? (Ke.hide(), ze
          .show()) : (ze.hide(), Ke.show()), window.document.getElementById("bod").style.backgroundColor = "#46664D",
          h = 0, Home.ads++, Game.teamName = "", Game.teamNameValid = 0, AudioManager.startGame(), World.gameMode ===
          World.__BR__ ? (Ge.hide(), ke.show()) : World.PLAYER.ghoul > 0 ? (Ge.hide(), ke.hide()) : (Ge.show(), ke
            .show()), CanvasUtils.setRenderer(Game), di = 1e3, ti = 1e3, ni = oi, _i = 1, li()
      },
      update: li,
      draw: function () {
        if (0 !== function () {
            if (1 === ii) {
              if (li(), di < 0) return ii = 0, Be.setState(GUI.__BUTTON_OUT__), ke.setState(GUI.__BUTTON_OUT__), He
                .setState(GUI.__BUTTON_OUT__), Ye.setState(GUI.__BUTTON_OUT__), Ge.setState(GUI.__BUTTON_OUT__), Ke
                .setState(GUI.__BUTTON_OUT__), ze.setState(GUI.__BUTTON_OUT__), Xe.display = "none", Qe.run(), 0;
              di -= delta
            } else 1 === _i && (li(), di < 0 && (_i = 0, World.PLAYER.timePlayed = window.Date.now(), function () {
              0 === isTouchScreen && window.addEventListener("wheel", Ri, !1);
              0 === isTouchScreen && window.addEventListener("mousedown", si, !1);
              0 === isTouchScreen && window.addEventListener("mouseup", gi, !1);
              0 === isTouchScreen && window.addEventListener("mousemove", mi, !1);
              0 === isTouchScreen && window.addEventListener("keyup", ci, !1);
              0 === isTouchScreen && window.addEventListener("keydown", Ii, !1);
              1 === isTouchScreen && window.addEventListener("touchstart", Ei, !1);
              1 === isTouchScreen && window.addEventListener("touchend", ui, !1);
              1 === isTouchScreen && window.addEventListener("touchcancel", Li, !1);
              1 === isTouchScreen && window.addEventListener("touchmove", pi, !1)
            }()), di -= delta);
            return 1
          }()) {
          if (De(), ctx.clearRect(0, 0, canw, canh), World.updatePosition(), World.updateGauges(), Render.world(),
            Render.interaction(), Render.gauges(ve.pos.x, ve.pos.y), Render.minimap(Fe.pos.x, Fe.pos.y), Render
            .inventory(we, Te, de, y), ve.draw(), Fe.draw(), Be.draw(), ke.draw(), He.draw(), Ye.draw(), Ge.draw(),
            function () {
              if (drawLines) {
                var e = 0;
                e > 0 && ((e -= delta) > 2500 ? ctx.globalAlpha = MathUtils.Ease.inOutQuad((3e3 - e) / 500) : e <
                  500 && (ctx.globalAlpha = MathUtils.Ease.inOutQuad(e / 500)), ctx.drawImage(VWWvn, editorCopy.pos
                    .x - 85 * scaleby, editorCopy.pos.y - 40 * scaleby, VWWvn.wh * scaleby, VWWvn.h2 * scaleby), ctx
                  .globalAlpha = 1), qe[World.PLAYER._j] === window.undefined && (qe[World.PLAYER._j] = []), qe[
                  World.PLAYER._j][World.PLAYER._i] === window.undefined && (qe[World.PLAYER._j][World.PLAYER._i] =
                  GUI.renderText("(" + World.PLAYER._j + "," + World.PLAYER._i + ")", "'Viga', sans-serif",
                    "#FFFFFF", 30, 300, "#000000", 22, 22, window.undefined, window.undefined, .4, window.undefined,
                    "#000000", 15.6));
                var i = qe[World.PLAYER._j][World.PLAYER._i];
                ctx.drawImage(i, 5 * scaleby, Be.pos.y, i.wh * scaleby, i.h2 * scaleby)
              }
            }(), Render.gaugesAfter(ve.pos.x, ve.pos.y), World.gameMode !== World.__BR__ && (0 === Ke.pos.disable ? (
              Pe.draw(), Render.leaderboard(Pe.pos.x, Pe.pos.y), Ke.draw()) : ze.draw()), 1 === d) 1 === n ? Render
            .bigminimap(Ce, f) : 1 === r ? Render.config(Ne, K, J, j, q, $, ae, _e, oe, te, f, M, C, P) : 1 === l ?
            Render.craft(We, f, S, O, A, b, U, Re, we, Te, V, k, Y, ne) : 1 === s ? Render.chest(Me, f, we, Te) :
            1 === g && Render.team(f, xe, Ve, u, E, L, p, R);
          else if (1 === isTouchScreen) {
            if (Keyboard.isLeft() + Keyboard.isRight() + Keyboard.isTop() + Keyboard.isBottom() >= 1) {
              ctx.globalAlpha = .3;
              var e = canw2ns - 1.5 * canw4ns,
                i = canh2ns + canw4ns / 4;
              CanvasUtils.circle(ctx, e, i, 60), CanvasUtils.drawPath(ctx, "#000000"), CanvasUtils.circle(ctx, e +
                  window.Math.cos(Ae) * be * scaleby, i + window.Math.sin(Ae) * be * scaleby, 30), CanvasUtils
                .drawPath(ctx, "#FFFFFF"), ctx.globalAlpha = 1
            }
            if (1 === Se) {
              ctx.globalAlpha = .3;
              e = canw2ns + 1.5 * canw4ns, i = canh2ns + canw4ns / 4;
              CanvasUtils.circle(ctx, e, i, 60), CanvasUtils.drawPath(ctx, "#000000"), CanvasUtils.circle(ctx, e +
                  25 * window.Math.cos(Mouse.angle) * scaleby, i + 25 * window.Math.sin(Mouse.angle) * scaleby, 30),
                CanvasUtils.drawPath(ctx, "#FFFFFF"), ctx.globalAlpha = 1
            }
          }
          AudioManager.scheduler()
        }
      }
    }
  }(),
  Score = function () {
    function e(e) {}

    function i() {
      D(Game)
    }
    var a = 0,
      _ = {
        src: "https://devast.io/img/adblocker-msg.png",
        img: {
          isLoaded: 0
        }
      },
      o = 0,
      t = -1,
      d = null,
      n = {
        img: null
      },
      r = null,
      l = {
        img: null
      },
      s = -1,
      g = {
        img: null
      },
      m = null,
      c = -1,
      I = null,
      E = {
        img: null
      };
    var u, L, p, R, w = 0;
    var T = new Mouse.LocalMouseEvent,
      O = (new Keyboard.LocalKeyboardEvent, 500),
      A = 0,
      b = function (e) {
        return MathUtils.Ease.speedLimit(e, MathUtils.Ease.inQuad, .05)
      },
      y = 0,
      S = function (e) {
        return MathUtils.Ease.speedLimit(e, MathUtils.Ease.outQuad, .05)
      },
      U = 0,
      h = 0,
      f = window.undefined;

    function D(e) {
      R = e,
        function () {
          0 === isTouchScreen && window.removeEventListener("mousedown", N, !1);
          0 === isTouchScreen && window.removeEventListener("mouseup", M, !1);
          0 === isTouchScreen && window.removeEventListener("mousemove", W, !1);
          1 === isTouchScreen && window.removeEventListener("touchstart", C, !1);
          1 === isTouchScreen && window.removeEventListener("touchend", F, !1);
          1 === isTouchScreen && window.removeEventListener("touchcancel", P, !1);
          1 === isTouchScreen && window.removeEventListener("touchmove", x, !1)
        }(), h = O, U = O, f = b, A = 1
    }

    function v() {
      var e = 0,
        i = 0;
      if (h > 0) {
        i = canh;
        var a = f(1 - h / U);
        1 === a && (h = 0), 1 === y && (a = 1 - window.Math.abs(a)), e *= a, i *= a
      }
      u.pos.x = canw2 - window.Math.floor(270 * scaleby) - e, u.pos.y = window.Math.max(0, canh2 - window.Math.floor(
          162 * scaleby) + window.Math.floor(-135 * scaleby)) - i, L.pos.x = canw2 - window.Math.floor(61 * scaleby) +
        window.Math.floor(-100 * scaleby) - e, L.pos.y = window.Math.max(0, canh2 - window.Math.floor(17 * scaleby) +
          window.Math.floor(-35 * scaleby)) - i, p.pos.x = canw2 - window.Math.floor(99 * scaleby) + window.Math.floor(
          100 * scaleby) - e, p.pos.y = L.pos.y;
      window.Math.min(scaleby, 1)
    }

    function N(e) {
      Mouse.updateAll(e, Mouse.__MOUSE_DOWN__);
      L.trigger(), p.trigger()
    }

    function M(e) {
      Mouse.updateAll(e, Mouse.__MOUSE_UP__);
      return 1 === L.trigger() ? (1, void(w <= 0 && (Home.joinServer(), AudioUtils.playFx(AudioUtils._fx.play, 1,
        0)))) : 1 === p.trigger() && (1, 0 == (Client.state & Client.State.__PENDING__) && 0 == (Client.state & Client
          .State.__CONNECTED__)) ? (D(Home), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0)) : void 0
    }

    function W(e) {
      Mouse.updateAll(e, Mouse.__MOUSE_MOVE__);
      L.trigger(), p.trigger()
    }

    function C(e) {
      e.touches.length > 0 && (Mouse.touchToMouseEvent(T, e, e.touches[0]), N(T))
    }

    function F(e) {
      M(T)
    }

    function P(e) {
      e.touches.length > 0 && (Mouse.touchToMouseEvent(T, e, e.touches[0]), M(T))
    }

    function x(e) {
      e.touches.length > 0 && (Mouse.touchToMouseEvent(T, e, e.touches[0]), W(T))
    }
    return {
      quit: D,
      init: function () {
        u = GUI.createBackground(541, 324, "https://devast.io/img/scoreboardnew.png"), L = GUI.createButton(123, 35, [
          "https://devast.io/img/play-again-button-out.png", "https://devast.io/img/play-again-button-in.png", "https://devast.io/img/play-again-button-click.png"
        ]), p = GUI.createButton(198, 35, ["https://devast.io/img/back-main-page-button-out.png", "https://devast.io/img/back-main-page-button-in.png",
          "https://devast.io/img/back-main-page-button-click.png"
        ])
      },
      run: function () {
        Client.onError = e, Client.onOpen = i, World.PLAYER.isBuilding = 0, World.PLAYER.id = 0, Render.setDetection(
          0), Render.stopPoisonEffect();
        for (var a = 0; a < World.PLAYER.inventory.length; a++)
          for (var _ = 0; _ < 4; _++) World.PLAYER.inventory[a][_] = 0;
        var o = KIT[window.Math.min(KIT.length - 1, World.PLAYER.level)];
        for (a = 0; a < o.length; a++) {
          var t = o[a];
          0 !== t.id && Game.inventory[a].setImages(INVENTORY[t.id].itemButton.src, INVENTORY[t.id].itemButton.img);
          var d = World.PLAYER.inventory[a];
          d[1] = t.amount, d[2] = 0, d[3] = t.life, d[0] = t.id
        }
        w = 5e3, null === Loader.getURLData("admin") && CanvasUtils.setRenderer(Score), h =
          500, U = 500, f = S, y = 1, v()
      },
      update: v,
      draw: function () {
        0 !== function () {
          if (1 === A) {
            if (v(), h < 0) return A = 0, L.setState(GUI.__BUTTON_OUT__), p.setState(GUI.__BUTTON_OUT__), R.run(),
            0;
            h -= delta
          } else 1 === y && (v(), h < 0 && (y = 0, window.document.getElementById("bod").style.backgroundColor =
            "#46664d",
            function () {
              0 === isTouchScreen && window.addEventListener("mousedown", N, !1);
              0 === isTouchScreen && window.addEventListener("mouseup", M, !1);
              0 === isTouchScreen && window.addEventListener("mousemove", W, !1);
              1 === isTouchScreen && window.addEventListener("touchstart", C, !1);
              1 === isTouchScreen && window.addEventListener("touchend", F, !1);
              1 === isTouchScreen && window.addEventListener("touchcancel", P, !1);
              1 === isTouchScreen && window.addEventListener("touchmove", x, !1)
            }()), h -= delta);
          return 1
        }() && (ctx.clearRect(0, 0, canw, canh), Render.world(), h > 0 && (a = f(1 - h / U), 1 === y && (a = 1 -
          window.Math.abs(a)), a = 1 - a), ctx.globalAlpha = .3 * a, ctx.fillStyle = "#000000", ctx.fillRect(0, 0,
          canw, canh), ctx.globalAlpha = 1, u.draw(), p.draw(), function () {
          var e = u.pos.x,
            i = u.pos.y,
            a = e / scaleby,
            L = i / scaleby;
          null !== m && s === World.PLAYER.exp || (s = World.PLAYER.exp, m = GUI.renderText(s + "",
              "'Viga', sans-serif", "#FFFFFF", 38, 400, window.undefined, 16, 25, window.undefined, window
              .undefined, window.undefined, window.undefined, "#000000", 12), g.img = m, g.img.isLoaded = 1),
            CanvasUtils.drawImageHd(g, a + 280, L + 117, 0, 0, 0, 1), null !== d && t === World.PLAYER.level || (
              t = World.PLAYER.level, d = GUI.renderText(t + "", "'Viga', sans-serif", "#FFFFFF", 38, 400, window
                .undefined, 16, 25, window.undefined, window.undefined, window.undefined, window.undefined,
                "#000000", 12), r = GUI.renderText(window.Math.floor(t / 2), "'Viga', sans-serif", "#FFFFFF", 38,
                400, window.undefined, 16, 25, window.undefined, window.undefined, window.undefined, window
                .undefined, "#000000", 12), n.img = d, n.img.isLoaded = 1, l.img = r, l.img.isLoaded = 1),
            CanvasUtils.drawImageHd(n, a + 108, L + 117, 0, 0, 0, 1), CanvasUtils.drawImageHd(l, a + 288, L + 147,
              0, 0, 0, 1), null !== I && c === World.PLAYER.kill || (c = World.PLAYER.kill, I = GUI.renderText(c +
              "", "'Viga', sans-serif", "#FFFFFF", 38, 400, window.undefined, 16, 25, window.undefined, window
              .undefined, window.undefined, window.undefined, "#000000", 12), E.img = I, E.img.isLoaded = 1),
            CanvasUtils.drawImageHd(E, a + 453, L + 117, 0, 0, 0, 1);
          var p = Game.inventory,
            R = World.PLAYER.inventory,
            w = R.length,
            T = 50 * scaleby,
            O = i + 182 * scaleby,
            A = e + 80 * scaleby,
            b = scaleby;
          scaleby -= .3 * scaleby;
          for (var y = 0; y < w; y++) {
            var S = p[y];
            0 !== R[y][0] && Render.buttonInv(S, R[y], A, O, Game.inventoryItemNumber, Game.inventoryAmmoNumber),
              A += T
          }
          if (scaleby = b, 1 === Home.adblocker) {
            var U = MathUtils.Ease.inOutQuad(o > 500 ? (1e3 - o) / 500 : o / 500);
            ctx.globalAlpha = .7, CanvasUtils.drawImageHd(_, a + 288, L + 193, 0, 0, 0, 1 + .04 * U), ctx
              .globalAlpha = 1, o = (o + delta) % 1e3
          }
        }(), Render.alertServer(), AudioManager.scheduler(), w > 0 ? (w = window.Math.max(0, w - delta),
          CanvasUtils.drawImageHd(WAITADS[window.Math.floor(w / 1e3)], L.pos.x / scaleby + 61.5, L.pos.y /
            scaleby + 17.75, 0, 0, 0, 1)) : L.draw())
      }
    }
  }(),
  Rank = function () {
    function e(e) {}

    function i() {
      S(Game)
    }
    var a = 0,
      _ = -1,
      o = null,
      t = {
        img: null
      },
      d = -1,
      n = {
        img: null
      },
      r = null,
      l = -1,
      s = null,
      g = {
        img: null
      };
    var m, c, I, E, u = 0;
    var L = new Mouse.LocalMouseEvent,
      p = (new Keyboard.LocalKeyboardEvent, 500),
      R = 0,
      w = function (e) {
        return MathUtils.Ease.speedLimit(e, MathUtils.Ease.inQuad, .05)
      },
      T = 0,
      O = function (e) {
        return MathUtils.Ease.speedLimit(e, MathUtils.Ease.outQuad, .05)
      },
      A = 0,
      b = 0,
      y = window.undefined;

    function S(e) {
      E = e,
        function () {
          0 === isTouchScreen && window.removeEventListener("mousedown", h, !1);
          0 === isTouchScreen && window.removeEventListener("mouseup", f, !1);
          0 === isTouchScreen && window.removeEventListener("mousemove", D, !1);
          1 === isTouchScreen && window.removeEventListener("touchstart", v, !1);
          1 === isTouchScreen && window.removeEventListener("touchend", N, !1);
          1 === isTouchScreen && window.removeEventListener("touchcancel", M, !1);
          1 === isTouchScreen && window.removeEventListener("touchmove", W, !1)
        }(), b = p, A = p, y = w, R = 1
    }

    function U() {
      var e = 0,
        i = 0;
      if (b > 0) {
        i = canh;
        var a = y(1 - b / A);
        1 === a && (b = 0), 1 === T && (a = 1 - window.Math.abs(a)), e *= a, i *= a
      }
      m.pos.x = canw2 - window.Math.floor(207 * scaleby) - e, m.pos.y = window.Math.max(0, canh2 - window.Math.floor(
          103 * scaleby) + window.Math.floor(-135 * scaleby)) - i, c.pos.x = canw2 - window.Math.floor(61 * scaleby) +
        window.Math.floor(-100 * scaleby) - e, c.pos.y = window.Math.max(0, canh2 - window.Math.floor(17 * scaleby) +
          window.Math.floor(-70 * scaleby)) - i, I.pos.x = canw2 - window.Math.floor(99 * scaleby) + window.Math.floor(
          70 * scaleby) - e, I.pos.y = c.pos.y
    }

    function h(e) {
      Mouse.updateAll(e, Mouse.__MOUSE_DOWN__);
      c.trigger(), I.trigger()
    }

    function f(e) {
      Mouse.updateAll(e, Mouse.__MOUSE_UP__);
      return 1 === c.trigger() ? (1, void(u <= 0 && (Home.joinServer(), AudioUtils.playFx(AudioUtils._fx.play, 1,
        0)))) : 1 === I.trigger() && (1, 0 == (Client.state & Client.State.__PENDING__) && 0 == (Client.state & Client
          .State.__CONNECTED__)) ? (S(Home), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0)) : void 0
    }

    function D(e) {
      Mouse.updateAll(e, Mouse.__MOUSE_MOVE__);
      c.trigger(), I.trigger()
    }

    function v(e) {
      e.touches.length > 0 && (Mouse.touchToMouseEvent(L, e, e.touches[0]), h(L))
    }

    function N(e) {
      f(L)
    }

    function M(e) {
      e.touches.length > 0 && (Mouse.touchToMouseEvent(L, e, e.touches[0]), f(L))
    }

    function W(e) {
      e.touches.length > 0 && (Mouse.touchToMouseEvent(L, e, e.touches[0]), D(L))
    }
    return {
      quit: S,
      init: function () {
        m = GUI.createBackground(414, 207, "https://devast.io/img/scoreboard-br.png"), c = GUI.createButton(123, 35, [
          "https://devast.io/img/play-again-button-out.png", "https://devast.io/img/play-again-button-in.png", "https://devast.io/img/play-again-button-click.png"
        ]), I = GUI.createButton(198, 35, ["https://devast.io/img/back-main-page-button-out.png", "https://devast.io/img/back-main-page-button-in.png",
          "https://devast.io/img/back-main-page-button-click.png"
        ])
      },
      run: function () {
        Client.onError = e, Client.onOpen = i, World.PLAYER.isBuilding = 0, World.PLAYER.id = 0, Render.setDetection(
            0), Render.stopPoisonEffect(), u = 5e3, CanvasUtils.setRenderer(Rank), b = 500, A =
          500, y = O, T = 1, U()
      },
      update: U,
      draw: function () {
        0 !== function () {
          if (1 === R) {
            if (U(), b < 0) return R = 0, c.setState(GUI.__BUTTON_OUT__), I.setState(GUI.__BUTTON_OUT__), E.run(),
            0;
            b -= delta
          } else 1 === T && (U(), b < 0 && (T = 0, window.document.getElementById("bod").style.backgroundColor =
            "#46664d",
            function () {
              0 === isTouchScreen && window.addEventListener("mousedown", h, !1);
              0 === isTouchScreen && window.addEventListener("mouseup", f, !1);
              0 === isTouchScreen && window.addEventListener("mousemove", D, !1);
              1 === isTouchScreen && window.addEventListener("touchstart", v, !1);
              1 === isTouchScreen && window.addEventListener("touchend", N, !1);
              1 === isTouchScreen && window.addEventListener("touchcancel", M, !1);
              1 === isTouchScreen && window.addEventListener("touchmove", W, !1)
            }()), b -= delta);
          return 1
        }() && (ctx.clearRect(0, 0, canw, canh), Render.world(), b > 0 && (a = y(1 - b / A), 1 === T && (a = 1 -
          window.Math.abs(a)), a = 1 - a), ctx.globalAlpha = .3 * a, ctx.fillStyle = "#000000", ctx.fillRect(0, 0,
          canw, canh), ctx.globalAlpha = 1, m.draw(), I.draw(), function () {
          var e = m.pos.x,
            i = m.pos.y,
            a = e / scaleby,
            c = i / scaleby;
          if (null !== r && d === World.playerAlive || (d = World.playerAlive, r = GUI.renderText("#" + window
                .Math.max(d, 1), "'Viga', sans-serif", "#FFFFFF", 60, 140, window.undefined, 16, 25, window
                .undefined, window.undefined, window.undefined, window.undefined, "#000000", 12), n.img = r, n.img
              .isLoaded = 1), CanvasUtils.drawImageHd(n, a + 207, c + 93, 0, 0, 0, 1), null === o || _ !== World
            .PLAYER.timePlayed) {
            _ = World.PLAYER.timePlayed;
            var I = window.Math.floor((window.Date.now() - World.PLAYER.timePlayed) / 1e3),
              E = window.Math.floor(I / 60),
              u = I % 60;
            o = GUI.renderText((E < 10 ? "0" : "") + E + ":" + (u < 10 ? "0" : "") + u, "'Viga', sans-serif",
              "#FFFFFF", 38, 400, window.undefined, 16, 25, window.undefined, window.undefined, window
              .undefined, window.undefined, "#000000", 12), t.img = o, t.img.isLoaded = 1
          }
          CanvasUtils.drawImageHd(t, a + 110, c + 100, 0, 0, 0, 1), null !== s && l === World.PLAYER.kill || (l =
            World.PLAYER.kill, s = GUI.renderText(l + "", "'Viga', sans-serif", "#FFFFFF", 38, 400, window
              .undefined, 16, 25, window.undefined, window.undefined, window.undefined, window.undefined,
              "#000000", 12), g.img = s, g.img.isLoaded = 1), CanvasUtils.drawImageHd(g, a + 309, c + 100, 0, 0,
            0, 1)
        }(), Render.alertServer(), AudioManager.scheduler(), u > 0 ? (u = window.Math.max(0, u - delta),
          CanvasUtils.drawImageHd(WAITADS[window.Math.floor(u / 1e3)], c.pos.x / scaleby + 61.5, c.pos.y /
            scaleby + 17.75, 0, 0, 0, 1)) : c.draw())
      }
    }
  }(),
  Editor = function () {
    var e = 0,
      a = 0,
      _ = 0,
      o = 0,
      t = CanvasUtils.loadImage("https://devast.io/img/inv-empty.png"),
      d = [t, t, t],
      n = [],
      r = 0;

    function l() {
      World.PLAYER.id = 1, World.playerNumber = 2, World.gameMode = 0, World.PLAYER.skillPoint = 0, World.PLAYER
        .gridPrev[i] = 0, World.PLAYER.isBuilding = 1, World.PLAYER.teamJoin = 0, World.PLAYER.lastAreas = [
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1],
          [-1, -1]
        ], World.gauges.rad.value = World.gauges.rad._max, World.gauges.rad.decrease = -1, World.allocatePlayers([0,
          window.document.getElementById("nicknameInput").value
        ]), World.initDayCycle(0, 0), Render.reset(window.undefined, 0, .07), Render.scale = 0, Entitie.removeAll(),
        World.PLAYER.buildRotate = 0, World.PLAYER.blueprint = 0, H = 0,
        function (e, i, a, _, o, t) {
          setEntitie(Entitie.get(e, H, H, i), e, H, H, i, a, _, a, _, o, 0, t), H++
        }(1, __ENTITIE_PLAYER__, 550, 550, 5376, 0)
    }

    function s() {
      e = 0, g.setState(GUI.__BUTTON_OUT__), a = 0, _ = 0, isCraftOpen = 0, isChestOpen = 0, isTeamOpen = 0, World
        .releaseBuilding()
    }
    var g = GUI.createButton(43, 43, ["https://devast.io/img/close-box-out.png", "https://devast.io/img/close-box-in.png", "https://devast.io/img/close-box-click.png"]),
      m = [CanvasUtils.loadImage("https://devast.io/img/high-particules-out.png"), CanvasUtils.loadImage("https://devast.io/img/high-particules-in.png"),
        CanvasUtils.loadImage("https://devast.io/img/high-particules-click.png")
      ],
      c = GUI.createButton(54, 42, null, m),
      I = [CanvasUtils.loadImage("https://devast.io/img/low-particules-out.png"), CanvasUtils.loadImage("https://devast.io/img/low-particules-in.png"),
        CanvasUtils.loadImage("https://devast.io/img/low-particules-click.png")
      ],
      E = GUI.createButton(54, 42, null, I),
      u = [CanvasUtils.loadImage("https://devast.io/img/no-particules-out.png"), CanvasUtils.loadImage("https://devast.io/img/no-particules-in.png"),
        CanvasUtils.loadImage("https://devast.io/img/no-particules-click.png")
      ],
      L = GUI.createButton(54, 42, null, u),
      p = [CanvasUtils.loadImage("https://devast.io/img/high-resolution-out.png"), CanvasUtils.loadImage("https://devast.io/img/high-resolution-in.png"),
        CanvasUtils.loadImage("https://devast.io/img/high-resolution-click.png")
      ],
      R = GUI.createButton(54, 42, null, p),
      w = [CanvasUtils.loadImage("https://devast.io/img/medium-resolution-out.png"), CanvasUtils.loadImage(
        "https://devast.io/img/medium-resolution-in.png"), CanvasUtils.loadImage("https://devast.io/img/medium-resolution-click.png")
      ],
      T = GUI.createButton(54, 42, null, w),
      O = [CanvasUtils.loadImage("https://devast.io/img/low-resolution-out.png"), CanvasUtils.loadImage("https://devast.io/img/low-resolution-in.png"),
        CanvasUtils.loadImage("https://devast.io/img/low-resolution-click.png")
      ],
      A = GUI.createButton(54, 42, null, O),
      b = [CanvasUtils.loadImage("https://devast.io/img/azerty-button-out.png"), CanvasUtils.loadImage("https://devast.io/img/azerty-button-in.png"),
        CanvasUtils.loadImage("https://devast.io/img/azerty-button-click.png")
      ],
      y = GUI.createButton(81, 33, null, b),
      S = [CanvasUtils.loadImage("https://devast.io/img/qwerty-button-out.png"), CanvasUtils.loadImage("https://devast.io/img/qwerty-button-in.png"),
        CanvasUtils.loadImage("https://devast.io/img/qwerty-button-click.png")
      ],
      U = GUI.createButton(87, 33, null, S),
      h = [CanvasUtils.loadImage("https://devast.io/img/sound-on-out.png"), CanvasUtils.loadImage("https://devast.io/img/sound-on-in.png"), CanvasUtils
        .loadImage("https://devast.io/img/sound-on-click.png")
      ],
      f = [CanvasUtils.loadImage("https://devast.io/img/sound-off-out.png"), CanvasUtils.loadImage("https://devast.io/img/sound-off-in.png"), CanvasUtils
        .loadImage("https://devast.io/img/sound-off-click.png")
      ],
      D = GUI.createButton(51, 36, null, h),
      v = GUI.createButton(51, 36, null, f),
      N = GUI.createButton(51, 36, null, h),
      M = GUI.createButton(51, 36, null, f),
      W = 0,
      C = 0,
      F = 0,
      P = 0,
      x = 0,
      V = 0,
      B = 0,
      k = 0,
      H = 0;

    function Y(e, i, a, _, o) {
      if (e = window.Number(e) >>> 0, i = window.Number(i) >>> 0, a = window.Number(a) >>> 0, _ = window.Number(_) >>>
        0, !((o = window.Number(o) >>> 0) > 3 || a >= MapManager.height || _ >= MapManager.height)) {
        var t = INVENTORY[e];
        if (!(t === window.undefined || t.subtype === window.undefined || t.subtype > 0 && t.building.length <= i)) {
          o = 1 === t.wall ? 0 : o;
          var d = t.xCenter[o] + 50 + 100 * _,
            n = t.yCenter[o] + 50 + 100 * a,
            r = 0;
          switch (0 === t.subtype ? t.zid : t.subtype[i].zid) {
          case 0:
            r = __ENTITIE_BUILD_DOWN__;
            break;
          case 1:
            r = __ENTITIE_BUILD_TOP__;
            break;
          case 2:
            r = __ENTITIE_BUILD_GROUND2__;
            break;
          default:
            r = __ENTITIE_BUILD_GROUND__
          }! function (e, i, a, _, o, t, d) {
            var n = Entitie.get(e, H, H, i);
            setEntitie(n, e, H, H, i, a, _, a, _, (d << 7) + (o << 5), 0, t);
            var r = ENTITIES[i].update;
            r !== window.undefined && r(n, a, _);
            H++
          }(1, r, d, n, o, 1 + (0 === t.subtype ? 0 : i << 5), t.id)
        }
      }
    }

    function G(e) {
      var a = "",
        _ = Entitie.units[e],
        o = Entitie.border[e],
        t = o.border;
      for (i = 0; i < t; i++) {
        var d = _[o.cycle[i]],
          n = INVENTORY[d.extra >> 7];
        a += "!b=" + n.id + ":", 0 !== n.subtype && (a += d.subtype + ":"), a += d.j + ":" + d.i + ":" + (d.extra >> 5 &
          3)
      }
      return a
    }

    function K(e, a, _) {
      var o = Entitie.units[e],
        t = Entitie.border[e],
        d = t.border;
      for (i = 0; i < d; i++) {
        var n = o[t.cycle[i]];
        if (n.x >= a && n.x <= a + 100 && n.y >= _ && n.y <= _ + 100) return void Entitie.remove(n.pid, n.id, n.uid, e,
          n.extra)
      }
    }
    var z = window.Math.sqrt(2) / 2;
    var J, X, j, Q, q, Z, $, ee, ie, ae, _e, oe, te, de, ne, re, le, se, ge = null,
      me = (ge = null, 0),
      ce = [],
      Ie = 0;
    var Ee = new Mouse.LocalMouseEvent,
      ue = new Keyboard.LocalKeyboardEvent,
      Le = 0,
      pe = MathUtils.Ease.inQuad,
      Re = 0,
      we = MathUtils.Ease.outQuad,
      Te = 0,
      Oe = 0,
      Ae = window.undefined;

    function be() {
      var e = 0,
        i = 0;
      if (Oe > 0) {
        i = canh;
        var a = Ae(1 - Oe / Te);
        1 === a && (Oe = 0), 1 === Re && (a = 1 - window.Math.abs(a)), e *= a, i *= a
      }
      J.pos.x = canw2 - window.Math.floor(134 * scaleby) + e, J.pos.y = window.Math.max(0, canh2 - window.Math.floor(
          133 * scaleby)) + i, X.pos.x = canw2 - window.Math.floor(206 * scaleby) + e, X.pos.y = window.Math.max(0,
          canh2 - window.Math.floor(206 * scaleby)) + i, j.pos.x = window.Math.floor(5 * scaleby) - e, j.pos.y = window
        .Math.floor(5 * scaleby) - i, Q.pos.x = j.pos.x + window.Math.floor(126 * scaleby), Q.pos.y = j.pos.y, q.pos.x =
        Q.pos.x, q.pos.y = Q.pos.y + window.Math.floor(44.5 * scaleby), Z.pos.x = q.pos.x, Z.pos.y = q.pos.y + window
        .Math.floor(44.5 * scaleby), $.pos.x = canw - window.Math.floor(67 * scaleby) + window.Math.floor(-5 *
        scaleby) - e, $.pos.y = window.Math.floor(5 * scaleby) - i, ee.pos.x = $.pos.x + window.Math.floor(-70 *
          scaleby), ee.pos.y = window.Math.floor(5 * scaleby) - i, ie.pos.x = ee.pos.x + window.Math.floor(-70 *
          scaleby), ie.pos.y = window.Math.floor(5 * scaleby) - i, ae.pos.x = ie.pos.x + window.Math.floor(-70 *
          scaleby), ae.pos.y = window.Math.floor(5 * scaleby) - i, _e.pos.x = ae.pos.x + window.Math.floor(-70 *
          scaleby), _e.pos.y = window.Math.floor(5 * scaleby) - i, re.pos.x = window.Math.floor(5 * scaleby), re.pos.y =
        canh - window.Math.floor(46.5 * scaleby) + window.Math.floor(-5 * scaleby), le.pos.x = re.pos.x + window.Math
        .floor(50 * scaleby), le.pos.y = canh - window.Math.floor(46.5 * scaleby) + window.Math.floor(-5 * scaleby), oe
        .pos.x = j.pos.x + window.Math.floor(89 * scaleby), oe.pos.y = j.pos.y + window.Math.floor(126 * scaleby), te
        .pos.x = canw - window.Math.floor(46.5 * scaleby) + window.Math.floor(-5 * scaleby), te.pos.y = canh - window
        .Math.floor(46.5 * scaleby) + window.Math.floor(-5 * scaleby), de.pos.x = te.pos.x + window.Math.floor(-50 *
          scaleby), de.pos.y = canh - window.Math.floor(46.5 * scaleby) + window.Math.floor(-5 * scaleby), ne.pos.x = j
        .pos.x, ne.pos.y = j.pos.y + window.Math.floor(126 * scaleby)
    }

    function ye(i) {
      Mouse.updateAll(i, Mouse.__MOUSE_DOWN__);
      var a = 0;
      if (1 === Q.trigger() && (a = 1), 1 === q.trigger() && (a = 1), 1 === Z.trigger() && (a = 1), 1 === $.trigger() &&
        (a = 1), 1 === ee.trigger() && (a = 1), 1 === ie.trigger() && (a = 1), 1 === ae.trigger() && (a = 1), 1 === _e
        .trigger() && (a = 1), 1 === re.trigger() && (a = 1), 1 === le.trigger() && (a = 1), 1 === oe.trigger() && (a =
          1), 1 === te.trigger() && (a = 1), 1 === ne.trigger() && (a = 1), 1 === e) g.trigger(), 1 === _ && (y
        .trigger(), U.trigger(), R.trigger(), T.trigger(), A.trigger(), D.trigger(), v.trigger(), N.trigger(), M
        .trigger(), E.trigger(), c.trigger(), L.trigger());
      else
        for (var o = 0; o < r; o++) 1 === n[o].trigger() && (a = 1);
      0 === a && 0 === e ? (1, -1 === World.PLAYER.click && (World.PLAYER.click = 0)) : 0 === World.PLAYER.click && (
        World.PLAYER.click = -1)
    }

    function Se(i) {
      Mouse.updateAll(i, Mouse.__MOUSE_UP__);
      if (1 === Q.trigger() && (1, 0 === o ? (o = 1, CanvasUtils.enableFullscreen(), 0 === World.day ? canvas.style
            .backgroundColor = "#3D5942" : canvas.style.backgroundColor = "#0B2129", AudioUtils.playFx(AudioUtils._fx
              .button, 1, 0)) : (o = 0, CanvasUtils.disableFullscreen(), AudioUtils.playFx(AudioUtils._fx.button, 1,
          0))), 1 === q.trigger()) return 1, 0 === _ ? (s(), e = 1, _ = 1, void AudioUtils.playFx(AudioUtils._fx.open,
        1, 0)) : (s(), void AudioUtils.playFx(AudioUtils._fx.open, 1, 0));
      if (1 === Z.trigger()) return 1, 0 === a ? (s(), e = 1, a = 1, void AudioUtils.playFx(AudioUtils._fx.open, 1,
        0)) : (s(), void AudioUtils.playFx(AudioUtils._fx.open, 1, 0));
      if (1 === $.trigger()) {
        1,
        r = 0;
        for (var t = 1; t < INVENTORY.length; t++) {
          (m = INVENTORY[t]).behavior === BEHAVIOR.__LOGIC__ && (n[r].setImages(m.itemButton.src, m.itemButton.img), n[
            r].itemId = m.id, r++)
        }
        AudioUtils.playFx(AudioUtils._fx.button, 1, 0)
      }
      if (1 === ee.trigger()) {
        1,
        r = 0;
        for (t = 1; t < INVENTORY.length; t++) {
          (m = INVENTORY[t]).id !== IID.__LANDMINE__ && m.id !== IID.__C4__ && m.id !== IID.__WOOD_SPIKE__ && m.id !==
            IID.__DYNAMITE__ || (n[r].setImages(m.itemButton.src, m.itemButton.img), n[r].itemId = m.id, r++)
        }
        AudioUtils.playFx(AudioUtils._fx.button, 1, 0)
      }
      if (1 === ie.trigger()) {
        1,
        r = 0;
        var d = INVENTORY[IID.__ROAD__].subtype;
        for (t = 0; t < d.length; t++) {
          var m = d[t];
          n[r].setImages(m.itemButton.src, m.itemButton.img), n[r].itemId = IID.__ROAD__, n[r].itemSubId = t, r++
        }
        AudioUtils.playFx(AudioUtils._fx.button, 1, 0)
      }
      if (1 === ae.trigger()) {
        1,
        r = 0;
        for (d = INVENTORY[IID.__FURNITURE__].subtype, t = 0; t < d.length; t++) {
          m = d[t];
          n[r].setImages(m.itemButton.src, m.itemButton.img), n[r].itemId = IID.__FURNITURE__, n[r].itemSubId = t, r++
        }
        AudioUtils.playFx(AudioUtils._fx.button, 1, 0)
      }
      if (1 === _e.trigger()) {
        1,
        r = 0;
        for (t = 1; t < INVENTORY.length; t++) {
          1 !== (m = INVENTORY[t]).wall && 1 !== m.lowWall && 1 !== m.door && 1 !== IID.__CHEST__ && 1 !== IID
            .__FRIDGE__ || (n[r].setImages(m.itemButton.src, m.itemButton.img), n[r].itemId = m.id, r++)
        }
        AudioUtils.playFx(AudioUtils._fx.button, 1, 0)
      }
      if (1 === re.trigger() && (1, Render.scale < 1.5 && (Render.scale += .1, AudioUtils.playFx(AudioUtils._fx.button,
          1, 0), le.show(), Render.scale >= 1.5 && re.hide())), 1 === le.trigger() && (1, Render.scale > -.95 && (Render
          .scale < 0 ? Render.scale -= .05 : Render.scale -= .1, AudioUtils.playFx(AudioUtils._fx.button, 1, 0), re
          .show(), Render.scale <= -.95 && le.hide())), 1 === oe.trigger() && (1, l(), AudioUtils.playFx(AudioUtils._fx
          .button, 1, 0)), 1 === te.trigger()) {
        1,
        AudioUtils.playFx(AudioUtils._fx.open, 1, 0);
        var I = window.prompt("Please enter your code here", "");AudioUtils.playFx(AudioUtils._fx.open, 1, 0),
        null != I && "" != I && function (e) {
          l(), (e = e.split("!b=")).shift();
          for (var i = 0; i < e.length; i++) {
            var a = e[i].split(":");
            a.length > 4 ? Y(a[0], a[1], a[3], a[2], a[4]) : Y(a[0], 0, a[2], a[1], a[3])
          }
        }(I)
      }
      if (1 === de.trigger() && (1, AudioUtils.playFx(AudioUtils._fx.button, 1, 0), function () {
          me <= 0 ? me = 3e3 : me <= 500 ? me = 3e3 - me : me <= 2500 && (me = 2500);
          var e = "";
          e += G(__ENTITIE_BUILD_DOWN__), e += G(__ENTITIE_BUILD_TOP__), e += G(__ENTITIE_BUILD_GROUND2__), e += G(
            __ENTITIE_BUILD_GROUND__);
          var i = window.document.createElement("textarea");
          i.value = e, window.document.body.appendChild(i), i.select(), window.document.execCommand("copy"), window
            .document.body.removeChild(i)
        }()), 1 === ne.trigger() && (1, Editor.quit(Home), AudioUtils.playFx(AudioUtils._fx.play, 1, 0)), 1 === e) {
        if (1 === g.trigger()) return s(), void AudioUtils.playFx(AudioUtils._fx.open, 1, 0);
        if (1 === _) {
          if (U.setState(GUI.__BUTTON_OUT__), y.setState(GUI.__BUTTON_OUT__), R.setState(GUI.__BUTTON_OUT__), T
            .setState(GUI.__BUTTON_OUT__), A.setState(GUI.__BUTTON_OUT__), D.setState(GUI.__BUTTON_OUT__), v.setState(
              GUI.__BUTTON_OUT__), N.setState(GUI.__BUTTON_OUT__), M.setState(GUI.__BUTTON_OUT__), c.setState(GUI
              .__BUTTON_OUT__), E.setState(GUI.__BUTTON_OUT__), L.setState(GUI.__BUTTON_OUT__), 1 === y.trigger())
            return Keyboard.setAzerty(), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          if (1 === U.trigger()) return Keyboard.setQwert(), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          if (1 === R.trigger()) return CanvasUtils.setResolution(1), void AudioUtils.playFx(AudioUtils._fx.button, 1,
            0);
          if (1 === T.trigger()) return CanvasUtils.setResolution(2), void AudioUtils.playFx(AudioUtils._fx.button, 1,
            0);
          if (1 === A.trigger()) return CanvasUtils.setResolution(3), void AudioUtils.playFx(AudioUtils._fx.button, 1,
            0);
          if (1 === D.trigger()) return AudioUtils.setAudio(1), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          if (1 === v.trigger()) return AudioUtils.setAudio(0), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          if (1 === N.trigger()) return AudioUtils.setFx(1), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          if (1 === M.trigger()) return AudioUtils.setFx(0), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          if (1 === E.trigger()) return Render.setParticles(1), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          if (1 === c.trigger()) return Render.setParticles(2), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          if (1 === L.trigger()) return Render.setParticles(0), void AudioUtils.playFx(AudioUtils._fx.button, 1, 0);
          var u = J.pos;
          if (Mouse.sx < u.x || Mouse.sx > u.x + 234 * scaleby || Mouse.sy < u.y || Mouse.sy > u.y + 232 * scaleby)
            return s(), void AudioUtils.playFx(AudioUtils._fx.open, 1, 0)
        } else if (1 === a) {
          var p = X.pos;
          if (Mouse.sx < p.x || Mouse.sx > p.x + 412 * scaleby || Mouse.sy < p.y || Mouse.sy > p.y + 412 * scaleby)
            return s(), void AudioUtils.playFx(AudioUtils._fx.open, 1, 0)
        }
      } else
        for (t = 0; t < r; t++) 1 === n[t].trigger() && (AudioUtils.playFx(AudioUtils._fx.button, 1, 0), World.PLAYER
          .blueprint = n[t].itemId, World.PLAYER.furniture = n[t].itemSubId, World.PLAYER.blueprint === IID
          .__ROAD__ && (World.PLAYER.buildRotate = 0))
    }

    function Ue(i) {
      Mouse.updateAll(i, Mouse.__MOUSE_MOVE__);
      if (1 === Q.trigger() && 1, 1 === q.trigger() && 1, 1 === Z.trigger() && 1, 1 === $.trigger() && 1, 1 === ee
        .trigger() && 1, 1 === ie.trigger() && 1, 1 === ae.trigger() && 1, 1 === _e.trigger() && 1, 1 === re
      .trigger() && 1, 1 === le.trigger() && 1, 1 === oe.trigger() && 1, 1 === te.trigger() && 1, 1 === de.trigger() &&
        1, 1 === ne.trigger() && 1, 1 === e) g.trigger(), 1 === _ && (y.trigger(), U.trigger(), R.trigger(), T
      .trigger(), A.trigger(), D.trigger(), v.trigger(), N.trigger(), M.trigger(), E.trigger(), c.trigger(), L
        .trigger());
      else
        for (var a = 0; a < r; a++) n[a].trigger()
    }

    function he(i) {
      Keyboard.keyup(i), 77 === i.keyCode ? 0 === a ? (s(), e = 1, a = 1, AudioUtils.playFx(AudioUtils._fx.open, 1,
        0)) : (s(), AudioUtils.playFx(AudioUtils._fx.open, 1, 0)) : 27 === i.keyCode && 1 === e ? (AudioUtils.playFx(
          AudioUtils._fx.open, 1, 0), s()) : 82 === i.keyCode && 1 === World.PLAYER.isBuilding && World.PLAYER
        .blueprint !== IID.__ROAD__ && (World.PLAYER.buildRotate = (World.PLAYER.buildRotate + 1) % 4)
    }

    function fe(e) {
      if (Keyboard.keydown(e), 37 === e.keyCode || 38 === e.keyCode || 39 === e.keyCode || 40 === e.keyCode) return e
        .preventDefault(), !1
    }

    function De(i) {
      for (var a = 0, _ = 0; _ < i.touches.length; _++) {
        if (Mouse.touchToMouseEvent(Ee, i, i.touches[_]), 0 === e) {
          var o = window.Math.floor(Ee.clientX * CanvasUtils.options.ratioX),
            t = window.Math.floor(Ee.clientY * CanvasUtils.options.ratioY);
          if (t < canh - 70 * scaleby) {
            var d = 1.5 * canw4,
              n = canw4 / 4;
            if (o < canw2) {
              var r = 30 * scaleby;
              C = Math2d.angle(canw2 - d, canh2 + n, o, t), F = window.Math.min(Math2d.dist(o, t, canw2 - d, canh2 + n),
                25), o < canw2 - d - r ? (W |= 1, ue.charCode = 37, ue.keyCode = 37, fe(ue)) : o > canw2 - d + r && (
                W |= 2, ue.charCode = 39, ue.keyCode = 39, fe(ue)), t < canh2 + n - r ? (W |= 4, ue.charCode = 38, ue
                .keyCode = 38, fe(ue)) : t > canh2 + n + r && (W |= 8, ue.charCode = 40, ue.keyCode = 40, fe(ue))
            } else if (o < canw - 40 * scaleby || t > 40 * scaleby)
              if (a = 1, Ee.clientX -= d / CanvasUtils.options.ratioX, Ee.clientY -= n / CanvasUtils.options.ratioX,
                1 === World.PLAYER.isBuilding) {
                var l = window.Date.now();
                l - P < 1e3 && (x = 1, V = Ee.clientX, B = Ee.clientY, ye(Ee)), P = l
              } else x = 1, V = Ee.clientX, B = Ee.clientY, ye(Ee);
            continue
          }
        }
        0 === a && 0 === W && (ye(Ee), a = 1)
      }
    }

    function ve(e) {}

    function Ne(i) {
      var a = window.Math.floor(i.changedTouches[0].clientX * CanvasUtils.options.ratioX),
        _ = window.Math.floor(i.changedTouches[0].clientY * CanvasUtils.options.ratioY);
      if (1 === k) k = 0;
      else if (1 === e) Se(Ee);
      else {
        if (1 === x && a >= canw2) return x = 0, Ee.clientX = V, Ee.clientY = B, void Se(Ee);
        0 === World.PLAYER.drag.begin && a < canw2 && _ < canh - 70 * scaleby ? a < 240 * scaleby && _ < 160 *
          scaleby && Se(Ee) : Se(Ee)
      }
      0 !== W && (1 & W && (ue.charCode = 37, he(ue)), 2 & W && (ue.charCode = 39, he(ue)), 4 & W && (ue.charCode = 38,
        he(ue)), 8 & W && (ue.charCode = 40, he(ue)), W = 0)
    }

    function Me(i) {
      for (var a = 0, _ = 0, o = 0; o < i.touches.length; o++) {
        if (Mouse.touchToMouseEvent(Ee, i, i.touches[o]), 0 === World.PLAYER.drag.begin && 0 === e) {
          var t = window.Math.floor(Ee.clientX * CanvasUtils.options.ratioX),
            d = window.Math.floor(Ee.clientY * CanvasUtils.options.ratioY);
          if (d < canh - 70 * scaleby) {
            var n = 1.5 * canw4,
              r = canw4 / 4;
            if (t < canw2) {
              _ = 1;
              var l = 0,
                s = 30 * scaleby;
              C = Math2d.angle(canw2 - n, canh2 + r, t, d), F = window.Math.min(Math2d.dist(t, d, canw2 - n, canh2 + r),
                  25), t < canw2 - n - s ? l |= 1 : t > canw2 - n + s && (l |= 2), d < canh2 + r + -s ? l |= 4 : d >
                canh2 + r + s && (l |= 8), 1 == (1 & l) && 1 != (1 & W) ? (ue.charCode = 37, fe(ue)) : 1 != (1 & l) &&
                1 == (1 & W) && (ue.charCode = 37, he(ue)), 2 == (2 & l) && 2 != (2 & W) ? (ue.charCode = 39, fe(ue)) :
                2 != (2 & l) && 2 == (2 & W) && (ue.charCode = 39, he(ue)), 4 == (4 & l) && 4 != (4 & W) ? (ue
                  .charCode = 38, fe(ue)) : 4 != (4 & l) && 4 == (4 & W) && (ue.charCode = 38, he(ue)), 8 == (8 & l) &&
                8 != (8 & W) ? (ue.charCode = 40, fe(ue)) : 8 != (8 & l) && 8 == (8 & W) && (ue.charCode = 40, he(ue)),
                W = l;
              continue
            }(t < canw - 40 * scaleby || d > 40 * scaleby) && (a = 1, Ee.clientX -= n / CanvasUtils.options.ratioX, Ee
              .clientY -= r / CanvasUtils.options.ratioX, V = Ee.clientX, B = Ee.clientY, Ue(Ee))
          }
        }
        0 === a && 0 === W && (Ue(Ee), a = 1)
      }
      0 === _ && 0 !== W && (1 & W && (ue.charCode = 37, he(ue)), 2 & W && (ue.charCode = 39, he(ue)), 4 & W && (ue
        .charCode = 38, he(ue)), 8 & W && (ue.charCode = 40, he(ue)), W = 0)
    }
    return {
      quit: function (e) {
        s(), AudioManager.quitGame(), se = e,
          function () {
            0 === isTouchScreen && window.removeEventListener("mousedown", ye, !1);
            0 === isTouchScreen && window.removeEventListener("mouseup", Se, !1);
            0 === isTouchScreen && window.removeEventListener("mousemove", Ue, !1);
            0 === isTouchScreen && window.removeEventListener("keyup", he, !1);
            0 === isTouchScreen && window.removeEventListener("keydown", fe, !1);
            1 === isTouchScreen && window.removeEventListener("touchstart", De, !1);
            1 === isTouchScreen && window.removeEventListener("touchend", ve, !1);
            1 === isTouchScreen && window.removeEventListener("touchcancel", Ne, !1);
            1 === isTouchScreen && window.removeEventListener("touchmove", Me, !1)
          }(), Oe = 1e3, Te = 1e3, Ae = pe, Le = 1
      },
      init: function () {
        for (ge = GUI.renderText("Copied to clipboard", "'Viga', sans-serif", "#FFFFFF", 40, 350, "#000000", 18, 18,
            window.undefined, window.undefined, .6), i = 0; i < 64; i++) n.push(GUI.createButton(40, 40, null, d));
        J = GUI.createBackground(269, 267, "https://devast.io/img/settings-box.png"), X = GUI.createBackground(412, 412,
            "https://devast.io/img/borderBigMinimap2.png"), j = GUI.createBackground(128, 128, "https://devast.io/img/minimap.png"), Q = GUI.createButton(
            40, 40, ["https://devast.io/img/full-screen-out.png", "https://devast.io/img/full-screen-in.png", "https://devast.io/img/full-screen-click.png"]), q = GUI
          .createButton(40, 40, ["https://devast.io/img/settings-out.png", "https://devast.io/img/settings-in.png", "https://devast.io/img/settings-click.png"]), Z = GUI
          .createButton(40, 40, ["https://devast.io/img/minimap-button-out.png", "https://devast.io/img/minimap-button-in.png",
            "https://devast.io/img/minimap-button-click.png"
          ]), $ = GUI.createButton(67, 67, ["https://devast.io/img/logic-button-out.png", "https://devast.io/img/logic-button-in.png",
            "https://devast.io/img/logic-button-click.png"
          ]), ee = GUI.createButton(67, 67, ["https://devast.io/img/map-explosive-button-out.png", "https://devast.io/img/map-explosive-button-in.png",
            "https://devast.io/img/map-explosive-button-click.png"
          ]), ie = GUI.createButton(67, 67, ["https://devast.io/img/map-road-button-out.png", "https://devast.io/img/map-road-button-in.png",
            "https://devast.io/img/map-road-button-click.png"
          ]), ae = GUI.createButton(67, 67, ["https://devast.io/img/map-furniture-button-out.png", "https://devast.io/img/map-furniture-button-in.png",
            "https://devast.io/img/map-furniture-button-click.png"
          ]), _e = GUI.createButton(67, 67, ["https://devast.io/img/map-building-button-out.png", "https://devast.io/img/map-building-button-in.png",
            "https://devast.io/img/map-building-button-click.png"
          ]), re = GUI.createButton(46.5, 46.5, ["https://devast.io/img/zoom-button-out.png", "https://devast.io/img/zoom-button-in.png",
            "https://devast.io/img/zoom-button-click.png"
          ]), le = GUI.createButton(46.5, 46.5, ["https://devast.io/img/unzoom-button-out.png", "https://devast.io/img/unzoom-button-in.png",
            "https://devast.io/img/unzoom-button-click.png"
          ]), oe = GUI.createButton(40, 40, ["https://devast.io/img/map-delete-button-out.png", "https://devast.io/img/map-delete-button-in.png",
            "https://devast.io/img/map-delete-button-click.png"
          ]), te = GUI.createButton(46.5, 46.5, ["https://devast.io/img/import-button-out.png", "https://devast.io/img/import-button-in.png",
            "https://devast.io/img/import-button-click.png"
          ]), de = GUI.createButton(46.5, 46.5, ["https://devast.io/img/copy-paste-button-out.png", "https://devast.io/img/copy-paste-button-in.png",
            "https://devast.io/img/copy-paste-button-click.png"
          ]), ne = GUI.createButton(60, 60, ["https://devast.io/img/home-button-out.png", "https://devast.io/img/home-button-in.png",
            "https://devast.io/img/home-button-click.png"
          ])
      },
      run: function () {
        if (window.document.getElementById("bod").style.backgroundColor = "#46664D", 0, AudioManager.startGame(),
          0 === Ie) {
          Ie = 1;
          for (var e = INVENTORY[IID.__ROAD__].subtype, i = 0; i < e.length; i++) {
            (a = e[i]).itemButton = {
              src: [a.building.src, "https://devast.io/img/useless.png", "https://devast.io/img/useless.png"],
              img: [{
                isLoaded: 0
              }, {
                isLoaded: 0
              }, {
                isLoaded: 0
              }]
            }
          }
          for (e = INVENTORY[IID.__FURNITURE__].subtype, i = 0; i < e.length; i++) {
            var a;
            (a = e[i]).itemButton = {
              src: [a.building.src, "https://devast.io/img/useless.png", "https://devast.io/img/useless.png"],
              img: [{
                isLoaded: 0
              }, {
                isLoaded: 0
              }, {
                isLoaded: 0
              }]
            }
          }
        }
        l(), CanvasUtils.setRenderer(Editor), Oe = 1e3, Te = 1e3, Ae = we, Re = 1, be()
      },
      update: be,
      draw: function () {
        if (0 !== function () {
            if (1 === Le) {
              if (be(), Oe < 0) return Le = 0, Q.setState(GUI.__BUTTON_OUT__), q.setState(GUI.__BUTTON_OUT__), Z
                .setState(GUI.__BUTTON_OUT__), $.setState(GUI.__BUTTON_OUT__), ee.setState(GUI.__BUTTON_OUT__), ie
                .setState(GUI.__BUTTON_OUT__), ae.setState(GUI.__BUTTON_OUT__), _e.setState(GUI.__BUTTON_OUT__), re
                .setState(GUI.__BUTTON_OUT__), le.setState(GUI.__BUTTON_OUT__), oe.setState(GUI.__BUTTON_OUT__), te
                .setState(GUI.__BUTTON_OUT__), de.setState(GUI.__BUTTON_OUT__), ne.setState(GUI.__BUTTON_OUT__), se
                .run(), 0;
              Oe -= delta
            } else 1 === Re && (be(), Oe < 0 && (Re = 0, function () {
              0 === isTouchScreen && window.addEventListener("mousedown", ye, !1);
              0 === isTouchScreen && window.addEventListener("mouseup", Se, !1);
              0 === isTouchScreen && window.addEventListener("mousemove", Ue, !1);
              0 === isTouchScreen && window.addEventListener("keyup", he, !1);
              0 === isTouchScreen && window.addEventListener("keydown", fe, !1);
              1 === isTouchScreen && window.addEventListener("touchstart", De, !1);
              1 === isTouchScreen && window.addEventListener("touchend", ve, !1);
              1 === isTouchScreen && window.addEventListener("touchcancel", Ne, !1);
              1 === isTouchScreen && window.addEventListener("touchmove", Me, !1)
            }()), Oe -= delta);
            return 1
          }()) {
          if (function () {
              if (Mouse.state === Mouse.__MOUSE_DOWN__ && 0 === World.PLAYER.click) {
                if (1 === World.PLAYER.isBuilding)
                  if (World.PLAYER.click = -1, 1 === World.PLAYER.canBuild) - 1 !== World.PLAYER.jBuild && -1 !==
                    World.PLAYER.iBuild && World.PLAYER.jBuild !== MapManager.width && World.PLAYER.iBuild !==
                    MapManager.height && Y(World.PLAYER.blueprint, World.PLAYER.furniture, World.PLAYER.iBuild, World
                      .PLAYER.jBuild, World.PLAYER.buildRotate);
                  else {
                    var e = 100 * World.PLAYER.jBuild,
                      i = 100 * World.PLAYER.iBuild;
                    K(__ENTITIE_BUILD_DOWN__, e, i), K(__ENTITIE_BUILD_TOP__, e, i), K(__ENTITIE_BUILD_GROUND2__, e,
                      i), K(__ENTITIE_BUILD_GROUND__, e, i)
                  }
              } else Mouse.state === Mouse.__MOUSE_UP__ && 1 === World.PLAYER.isBuilding && (0, World.PLAYER.click =
                0)
            }(), function () {
              var e = 0;
              if (1 === Keyboard.isLeft() && (e |= 1), 1 === Keyboard.isRight() && (e |= 2), 1 === Keyboard
              .isBottom() && (e |= 4), 1 === Keyboard.isTop() && (e |= 8), e > 0) {
                var i = World.players[1].locatePlayer;
                if (-1 === i) return;
                var a = Entitie.units[__ENTITIE_PLAYER__][i];
                WvvVn = (3 & e && 12 & e ? z : 1) * (0 === Keyboard.isShift() ? 1.5 * delta : 11 * delta), 1 & e ? a
                  .rx = a.x - WvvVn : 2 & e && (a.rx = a.x + WvvVn), 8 & e ? a.ry = a.y - WvvVn : 4 & e && (a.ry = a
                    .y + WvvVn), a.rx = window.Math.max(0, window.Math.min(a.rx, 100 * MapManager.width)), a.ry =
                  window.Math.max(0, window.Math.min(a.ry, 100 * MapManager.height)), a.nx = a.rx, a.ny = a.ry
              }
            }(), ctx.clearRect(0, 0, canw, canh), World.updatePosition(), Render.world(), Render.minimap(j.pos.x, j
              .pos.y), j.draw(), Q.draw(), q.draw(), Z.draw(), $.draw(), ee.draw(), ie.draw(), ae.draw(), _e.draw(),
            re.draw(), le.draw(), oe.draw(), te.draw(), de.draw(), ne.draw(),
            function () {
              me > 0 && ((me -= delta) > 2500 ? ctx.globalAlpha = MathUtils.Ease.inOutQuad((3e3 - me) / 500) : me <
                500 && (ctx.globalAlpha = MathUtils.Ease.inOutQuad(me / 500)), ctx.drawImage(ge, de.pos.x - 85 *
                  scaleby, de.pos.y - 40 * scaleby, ge.wh * scaleby, ge.h2 * scaleby), ctx.globalAlpha = 1), ce[
                World.PLAYER._j] === window.undefined && (ce[World.PLAYER._j] = []), ce[World.PLAYER._j][World
                .PLAYER._i
              ] === window.undefined && (ce[World.PLAYER._j][World.PLAYER._i] = GUI.renderText("(" + World.PLAYER
                ._j + "," + World.PLAYER._i + ")", "'Viga', sans-serif", "#FFFFFF", 52, 455, "#000000", 22, 22,
                window.undefined, window.undefined, .4, window.undefined, "#000000", 15.6));
              var e = ce[World.PLAYER._j][World.PLAYER._i];
              ctx.drawImage(e, 5 * scaleby, re.pos.y - 42 * scaleby, e.wh * scaleby, e.h2 * scaleby)
            }(),
            function () {
              for (var e = _e.pos.x - 5 * scaleby, i = _e.pos.y + 74 * scaleby, a = 45 * scaleby, _ = 0; _ < r; _++) {
                var o = n[_];
                o.pos.x = e + _ % 8 * a, o.pos.y = i + window.Math.floor(_ / 8) * a, o.draw()
              }
            }(), 1 === e) 1 === a ? Render.bigminimap(X, g) : 1 === _ && Render.config(J, R, T, A, y, U, D, v, N, M,
            g, c, E, L);
          else if (1 === isTouchScreen) {
            if (Keyboard.isLeft() + Keyboard.isRight() + Keyboard.isTop() + Keyboard.isBottom() >= 1) {
              ctx.globalAlpha = .3;
              var i = canw2ns - 1.5 * canw4ns,
                o = canh2ns + canw4ns / 4;
              CanvasUtils.circle(ctx, i, o, 60), CanvasUtils.drawPath(ctx, "#000000"), CanvasUtils.circle(ctx, i +
                window.Math.cos(C) * F * scaleby, o + window.Math.sin(C) * F * scaleby, 30), CanvasUtils.drawPath(
                ctx, "#FFFFFF"), ctx.globalAlpha = 1
            }
            if (1 === x) {
              ctx.globalAlpha = .3;
              i = canw2ns + 1.5 * canw4ns, o = canh2ns + canw4ns / 4;
              CanvasUtils.circle(ctx, i, o, 60), CanvasUtils.drawPath(ctx, "#000000"), CanvasUtils.circle(ctx, i +
                  25 * window.Math.cos(Mouse.angle) * scaleby, o + 25 * window.Math.sin(Mouse.angle) * scaleby, 30),
                CanvasUtils.drawPath(ctx, "#FFFFFF"), ctx.globalAlpha = 1
            }
          }
          AudioManager.scheduler()
        }
      }
    }
  }(),
  __COUNTER__ = 1,
  BID = {};
BID.__ROAD_T0B0L0R1__ = __COUNTER__++, BID.__ROAD_T0B0L1R0__ = __COUNTER__++, BID.__ROAD_T0B0L1R1__ = __COUNTER__++, BID
  .__ROAD_T0B1L0R0__ = __COUNTER__++, BID.__ROAD_T0B1L0R1__ = __COUNTER__++, BID.__ROAD_T0B1L1R0__ = __COUNTER__++, BID
  .__ROAD_T0B1L1R1__ = __COUNTER__++, BID.__ROAD_T1B0L0R1__ = __COUNTER__++, BID.__ROAD_T1B0L1R0__ = __COUNTER__++, BID
  .__ROAD_T1B0L1R0__ = __COUNTER__++, BID.__ROAD_T1B0L1R1__ = __COUNTER__++, BID.__ROAD_T1B1L0R0__ = __COUNTER__++, BID
  .__ROAD_T1B1L0R1__ = __COUNTER__++, BID.__ROAD_T1B1L1R0__ = __COUNTER__++, BID.__ROAD_T1B1L1R1__ = __COUNTER__++;
var BUILDINGS = [{}, {
  id: BID.__ROAD_T0B0L0R1__,
  src: "https://devast.io/img/road-T0B0L0R1.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 0,
    y: 0,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  alt: [BID.__ROAD_T0B0L0R1__]
}, {
  id: BID.__ROAD_T0B0L1R0__,
  src: "https://devast.io/img/road-T0B0L1R0.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 28,
    y: 0,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  alt: [BID.__ROAD_T0B0L1R0_1__, BID.__ROAD_T0B0L1R0_2__]
}, {
  id: BID.__ROAD_T0B0L1R1__,
  src: "https://devast.io/img/road-T0B0L1R1.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 56,
    y: 0,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  alt: [BID.__ROAD_T0B0L1R1_1__, BID.__ROAD_T0B0L1R1_2__, BID.__ROAD_T0B0L1R1_3__, BID.__ROAD_T0B0L1R1_4__, BID
    .__ROAD_T0B0L1R1_5__, BID.__ROAD_T0B0L1R1_6__, BID.__ROAD_T0B0L1R1_7__, BID.__ROAD_T0B0L1R1_8__
  ]
}, {
  id: BID.__ROAD_T0B1L0R0__,
  src: "https://devast.io/img/road-T0B1L0R0.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 84,
    y: 0,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  alt: [BID.__ROAD_T0B1L0R0_1__, BID.__ROAD_T0B1L0R0_2__]
}, {
  id: BID.__ROAD_T0B1L0R1__,
  src: "https://devast.io/img/road-T0B1L0R1.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 56,
    y: 28,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: BID.__ROAD_T0B1L1R0__,
  src: "https://devast.io/img/road-T0B1L1R0.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 0,
    y: 56,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: BID.__ROAD_T0B1L1R1__,
  src: "https://devast.io/img/road-T0B1L1R1.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 112,
    y: 0,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: BID.__ROAD_T1B0L0R1__,
  src: "https://devast.io/img/road-T1B0L0R0.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 28,
    y: 28,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: BID.__ROAD_T1B0L1R0__,
  src: "https://devast.io/img/road-T1B0L0R1.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 56,
    y: 56,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: BID.__ROAD_T1B0L1R0__,
  src: "https://devast.io/img/road-T1B0L1R0.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 84,
    y: 56,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: BID.__ROAD_T1B0L1R1__,
  src: "https://devast.io/img/road-T1B0L1R1.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 84,
    y: 28,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: BID.__ROAD_T1B1L0R0__,
  src: "https://devast.io/img/road-T1B1L0R0.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 112,
    y: 56,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: BID.__ROAD_T1B1L0R1__,
  src: "https://devast.io/img/road-T1B1L0R1.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 112,
    y: 28,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: BID.__ROAD_T1B1L1R0__,
  src: "https://devast.io/img/road-T1B1L1R0.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 0,
    y: 28,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}, {
  id: BID.__ROAD_T1B1L1R1__,
  src: "https://devast.io/img/road-T1B1L1R1.png",
  img: {
    isLoaded: 0
  },
  minimap: {
    x: 28,
    y: 56,
    h: 28,
    w: 28
  },
  grid: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  alt: [BID.__ROAD_T1B1L1R1_1__, BID.__ROAD_T1B1L1R1_2__]
}];
try {
  exports !== window.undefined && (exports.BID = BID, exports.BUILDINGS = BUILDINGS)
} catch (_) {}
var ent, inhandID, weapon, Render = function () {
    var e = 100,
      i = e / 2,
      a = 100,
      _ = 0,
      o = 0,
      t = 0,
      d = 0,
      n = 0,
      r = 0,
      l = 0,
      s = 410,
      g = s,
      m = 51.5,
      c = 0,
      I = "https://devast.io/img/loot-isTouchScreen.png",
      E = "https://devast.io/img/craft-grid.png",
      u = "https://devast.io/img/hint-rotate.png",
      L = "https://devast.io/img/day-unusable.png",
      p = "https://devast.io/img/day-clock.png",
      R = "https://devast.io/img/night-clock.png",
      w = "https://devast.io/img/invitation-box.png",
      T = 500,
      O = 256,
      A = 500,
      b = window.Math.floor(128),
      y = window.Math.floor(b / 2),
      S = "https://devast.io/img/alert",
      U = 3e3,
      h = 500,
      f = 2500,
      D = 2 * window.Math.PI,
      v = window.Math.PI / 2,
      N = window.Math.PI / World.__DAY__,
      M = 1,
      W = 2,
      C = 4,
      F = 8,
      P = 16,
      x = 32,
      V = 64,
      B = 128,
      k = 1,
      H = 2,
      Y = 4,
      G = 8,
      K = [
        [],
        [],
        [],
        []
      ];
    K[0][0] = 0, K[0][k] = 3, K[0][H] = 6, K[0][Y | G] = 9, K[0][Y] = 4, K[0][G] = 5, K[0][k | Y] = 27, K[0][k | G] =
      20, K[0][H | Y] = 7, K[0][H | G] = 28, K[0][k | Y | G] = 24, K[0][H | Y | G] = 29, K[2][0] = 0, K[2][k] = 3, K[2][
        H
      ] = 6, K[2][Y | G] = 9, K[2][Y] = 4, K[2][G] = 5, K[2][k | Y] = 27, K[2][k | G] = 20, K[2][H | Y] = 7, K[2][H |
      G] = 28, K[2][k | Y | G] = 24, K[2][H | Y | G] = 29, K[1][0] = 11, K[1][k] = 12, K[1][H] = 17, K[1][Y | G] = 10,
      K[1][Y] = 19, K[1][G] = 18, K[1][k | Y] = 34, K[1][k | G] = 22, K[1][H | Y] = 23, K[1][H | G] = 33, K[1][k | Y |
        G] = 35, K[1][H | Y | G] = 32, K[3][0] = 11, K[3][k] = 15, K[3][H] = 14, K[3][Y | G] = 10, K[3][Y] = 19, K[3][
      G] = 18, K[3][k | Y] = 37, K[3][k | G] = 16, K[3][H | Y] = 23, K[3][H | G] = 38, K[3][k | Y | G] = 36, K[3][H |
        Y | G
      ] = 39;
    var z = [];
    z[0] = 0, z[M] = 3, z[W] = 4, z[C] = 2, z[F] = 1, z[M | C] = 17, z[M | W] = 5, z[M | F] = 18, z[W | C] = 16, z[W |
        F] = 19, z[C | F] = 6, z[M | C | F] = 10, z[M | C | W] = 9, z[F | C | W] = 11, z[M | F | W] = 8, z[M | C | W |
        F] = 7, z[F | W | P] = 12, z[F | M | x] = 13, z[C | M | B] = 14, z[C | W | V] = 15, z[C | F | W | P] = 20, z[C |
        F | W | M | P] = 21, z[M | F | W | P] = 22, z[C | F | W | M | V] = 23, z[M | C | W | V] = 24, z[C | F | W | V] =
      25, z[C | F | M | B] = 26, z[C | F | W | M | B] = 27, z[C | W | M | B] = 28, z[F | W | M | x] = 29, z[C | F | W |
        M | x] = 30, z[C | F | M | x] = 31, z[C | F | W | M | x | P | B | V] = 32, z[C | F | W | M | x | B] = 33, z[C |
        F | W | M | x | P] = 34, z[C | F | W | M | x | V] = 35, z[C | F | W | M | P | B] = 36, z[C | F | W | M | V |
      P] = 37, z[C | F | W | M | V | B] = 38, z[C | F | W | V | P] = 39, z[C | F | M | B | x] = 40, z[W | F | M | P |
      x] = 41, z[W | C | M | V | B] = 42, z[C | F | W | M | x | B | V] = 43, z[C | F | W | M | P | B | V] = 44, z[C |
        F | W | M | x | P | V] = 45, z[C | F | W | M | x | P | B] = 46;
    var J = 600,
      X = 0,
      j = 0,
      Q = 0,
      q = 0,
      Z = 0,
      $ = 0,
      ee = .01,
      ie = 0,
      ae = 0,
      _e = [];
    for (Ei = 0; Ei < 20; Ei++) _e[Ei] = {
      isLoaded: 0
    };
    var oe = 2,
      te = [],
      de = [],
      ne = [],
      re = {
        isLoaded: 0
      },
      le = {
        isLoaded: 0
      },
      se = {
        move: 0,
        effect: 0,
        src: "https://devast.io/img/arrow-craft.png",
        img: {
          isLoaded: 0
        }
      },
      ge = {
        move: 0,
        effect: 0,
        src: "https://devast.io/img/unlock-skills.png",
        img: {
          isLoaded: 0
        }
      },
      me = {
        src: "https://devast.io/img/time-box.png",
        img: {
          isLoaded: 0
        }
      },
      ce = {
        src: "https://devast.io/img/rank-box.png",
        img: {
          isLoaded: 0
        }
      },
      Ie = {
        src: "https://devast.io/img/toxic-alert.png",
        img: {
          isLoaded: 0
        }
      },
      Ee = 0,
      ue = {
        src: "https://devast.io/img/radiation-alert.png",
        img: {
          isLoaded: 0
        }
      },
      Le = 0,
      pe = {
        src: "https://devast.io/img/e-furniture.png",
        img: {
          isLoaded: 0
        }
      },
      Re = CanvasUtils.loadImage("https://devast.io/img/toxic-area2.png"),
      we = CanvasUtils.loadImage("https://devast.io/img/toxic-area3.png"),
      Te = [],
      Oe = [],
      Ae = {
        isLoaded: 0
      },
      be = {
        isLoaded: 0
      },
      ye = {
        isLoaded: 0
      },
      Se = [0, 0, 0, 0],
      Ue = 0,
      he = [],
      fe = 0,
      De = {
        isLoaded: 0
      },
      ve = {
        isLoaded: 0
      },
      Ne = {
        isLoaded: 0
      },
      Me = A,
      We = {
        isLoaded: 0
      },
      Ce = {
        isLoaded: 0
      },
      Fe = {
        src: "https://devast.io/img/stroke-bonus.png",
        img: {
          isLoaded: 0
        }
      },
      Pe = 0,
      xe = {
        src: "https://devast.io/img/wrong-tool.png",
        img: {
          isLoaded: 0
        }
      },
      Ve = {
        src: "https://devast.io/img/hand-tool.png",
        img: {
          isLoaded: 0
        }
      },
      Be = 12e3,
      ke = 12e3,
      He = [];
    for (Ei = 0; Ei < 10; Ei++)
      for (He[Ei] = [], Li = 0; Li < 3; Li++) He[Ei][Li] = {
        isLoaded: 0
      };
    var Ye = [];
    for (Ei = 0; Ei < 8; Ei++)
      for (Ye[Ei] = [], Li = 0; Li < 2; Li++) Ye[Ei][Li] = {
        isLoaded: 0
      };
    var Ge = {
        src: "https://devast.io/img/arrow-minimap.png",
        img: {
          isLoaded: 0
        }
      },
      Ke = {
        src: "https://devast.io/img/arrow-minimap2.png",
        img: {
          isLoaded: 0
        }
      },
      ze = {
        isLoaded: 0
      },
      Je = {
        src: "https://devast.io/img/house-icon.png",
        img: {
          isLoaded: 0
        }
      },
      Xe = {
        src: "https://devast.io/img/city-icon.png",
        img: {
          isLoaded: 0
        }
      },
      je = {
        src: R,
        img: {
          isLoaded: 0
        }
      },
      Qe = {
        src: p,
        img: {
          isLoaded: 0
        }
      },
      qe = {
        src: "https://devast.io/img/clock-hand.png",
        img: {
          isLoaded: 0
        }
      },
      Ze = {
        src: "https://devast.io/img/day-clock-hand.png",
        img: {
          isLoaded: 0
        }
      },
      $e = {
        src: "https://devast.io/img/clock-hand-radiation.png",
        img: {
          isLoaded: 0
        }
      },
      ei = {
        src: "https://devast.io/img/server-full.png",
        img: {
          isLoaded: 0
        }
      },
      ii = {
        src: "https://devast.io/img/server-old.png",
        img: {
          isLoaded: 0
        }
      },
      ai = {
        src: "https://devast.io/img/client-old.png",
        img: {
          isLoaded: 0
        }
      },
      _i = {
        src: "https://devast.io/img/server-wrong.png",
        img: {
          isLoaded: 0
        }
      },
      oi = {
        isLoaded: 0
      },
      ti = [];
    for (Ei = 0; Ei < 20; Ei++) ti.push({
      isLoaded: 0
    });
    var di = window.document.createElement("canvas"),
      ni = di.getContext("2d");
    di.width = s, di.height = g, di.isLoaded = 1, di.wh = di.width / 2, di.h2 = di.height / 2;
    var ri = {
        img: di
      },
      li = window.document.createElement("canvas"),
      si = li.getContext("2d");
    li.width = s, li.height = g, li.isLoaded = 1, li.wh = di.width / 2, li.h2 = di.height / 2;
    var gi = {
        img: li
      },
      mi = 0;
    var ci = window.document.createElement("canvas"),
      Ii = ci.getContext("2d");
    ci.width = 699, ci.height = 738, soundLimit = [];
    for (var Ei = 0; Ei < 9; Ei++) soundLimit[Ei] = 0;
    var ui = 0;
    for (Ei = 0; Ei < 9; Ei++) {
      te[Ei] = [];
      for (var Li = 0; Li < 13; Li++) te[Ei][Li] = 0
    }
    var pi = window.document.createElement("canvas"),
      Ri = pi.getContext("2d");
    pi.width = 280, pi.height = 148;
    var wi = -1,
      Ti = [],
      Oi = [],
      Ai = window.document.createElement("canvas"),
      bi = Ai.getContext("2d");
    Ai.width = 280, Ai.height = 50;
    var yi = -1,
      Si = window.document.createElement("canvas"),
      Ui = Si.getContext("2d");
    Si.width = 420, Si.height = 148;
    var hi = -1;

    function fi() {
      this.wallFrame = 0, this.floorFrame = 0, this.drawFloor = 0, this.tile = 0, this.wall = 0, this.frameId = 0, this
        .ground = 0, this.pid = 0, this.tilePid = 0, this.category = 0, this.i = 0, this.b = [], this.rotate = 0;
      for (var e = 0; e < 3; e++) this.b.push({
        type: 0,
        cycle: 0
      })
    }

    function Di(e) {
      var i = e.extra >> 7;
      if (!(1 !== INVENTORY[i].lowWall || e.hurt > 0 || e.broke > 0)) {
        var a = de[e.i][e.j];
        a.wallFrame = ui, a.wall = i, a.rotate = e.extra >> 5 & 3
      }
    }

    function vi(e) {
      var i = e.extra >> 7;
      if (!(1 !== INVENTORY[i].wall || e.hurt > 0 || e.broke > 0)) {
        var a = de[e.i][e.j];
        if (a.wallFrame = ui, a.wall = INVENTORY[i].idWall, World.PLAYER._j === e.j) {
          var _ = window.Math.max(1, window.Math.abs(World.PLAYER._i - e.i));
          World.PLAYER._i < e.i ? Se[0] = Ue / _ : Se[1] = Ue / _
        } else if (World.PLAYER._i === e.i) {
          _ = window.Math.max(1, window.Math.abs(World.PLAYER._j - e.j));
          World.PLAYER._j < e.j ? Se[2] = Ue / _ : Se[3] = Ue / _
        }
      }
    }

    function Ni(e) {
      var i = e.extra >> 7;
      1 !== INVENTORY[i].wall || e.hurt > 0 || e.broke > 0 || (de[e.i][e.j].floorFrame = ui)
    }

    function Mi(e, i) {
      var a = e.i,
        _ = e.j,
        o = de[a][_];
      if (o.frameId === ui) {
        if (o.i < 3) {
          var t = o.b[o.i];
          o.i += 1, t.type = e.type, t.cycle = i
        }
      } else {
        o.frameId = ui;
        t = o.b[0];
        o.i = 1, t.type = e.type, t.cycle = i
      }
    }

    function Wi(e, i, a, _, o, t) {
      e.pos.x = a, e.pos.y = _, e.draw();
      var d, n = INVENTORY[i[0]];
      ((d = i[1]) > 1 && (o[d] === window.undefined && (o[d] = {
          img: GUI.renderText("x" + d, "'Black Han Sans', sans-serif", "#ffffff", 30, 250, window.undefined, 15, 12,
            window.undefined, window.undefined, window.undefined, window.undefined, "#000000", 12)
        }, o[d].img.isLoaded = 1), CanvasUtils.drawImageHd(o[d], a / scaleby + 53, _ / scaleby + 55, -.5, 0, 0, 1)), n
        .bullet !== window.undefined && n.mMVwm === window.undefined) && (t[d = i[3]] === window.undefined && (t[d] = {
        img: GUI.renderText("x" + d, "'Black Han Sans', sans-serif", "#FFFF00", 30, 250, window.undefined, 15, 12,
          window.undefined, window.undefined, window.undefined, window.undefined, "#000000", 12)
      }, t[d].img.isLoaded = 1), CanvasUtils.drawImageHd(t[d], a / scaleby + 53, _ / scaleby + 55, -.5, 0, 0, 1));
      if (n.perish !== window.undefined) {
        var r = window.Math.floor(i[3] / 12.8),
          l = ti[r];
        1 !== l.isLoaded ? ti[r] = CanvasUtils.loadImage("https://devast.io/img/rotten" + r + ".png", l) : ctx.drawImage(l, a + .5 *
          scaleby, _, scaleby * l.width / 2, scaleby * l.height / 2)
      }
    }

    function Ci(e, i, a) {
      if (Ti[e] === window.undefined) {
        Ti[e] = window.document.createElement("canvas"), Oi[e] = Ti[e].getContext("2d");
        var _ = Ti[e],
          o = Oi[e];
        _.width = 400, _.height = 148, o.clearRect(0, 0, 400, 148), CanvasUtils.roundRect(o, 0, 0, 400, 148, 10), o
          .fillStyle = "#000000", o.globalAlpha = .5, o.fill(), o.globalAlpha = 1, ki(Oi[e], e)
      }
      var t = 74 * scaleby;
      ctx.drawImage(Ti[e], i, a, 190 * scaleby, t)
    }

    function Fi(e, i, a) {
      World.PLAYER.nextAreas -= delta;
      var _ = window.Math.max(0, window.Math.floor(World.PLAYER.nextAreas / 1e3));
      if (_ < 3e3) {
        if (CanvasUtils.drawImageHd(me, e / scaleby + 51, i / scaleby + 145, 0, 0, 0, 1), Te[_] === window.undefined) {
          1 === a && Te[_ + 1] !== window.undefined && (Te[_ + 1] = window.undefined);
          var o = window.Math.floor(_ / 60),
            t = _ % 60;
          Te[_] = {
            img: GUI.renderText((o < 10 ? "0" : "") + o + ":" + (t < 10 ? "0" : "") + t, "'Viga', sans-serif",
              "#FF0000", 38, 100, window.undefined, 16, 25, window.undefined, window.undefined, window.undefined,
              window.undefined, "#000000", 12)
          }, Te[_].img.isLoaded = 1
        }
        CanvasUtils.drawImageHd(Te[_], e / scaleby + 60, i / scaleby + 145, 0, 0, 0, 1)
      }
    }

    function Pi(e, i) {
      CanvasUtils.drawImageHd(ce, e / scaleby + canwns - 63, 25 + i / scaleby, 0, 0, 0, 1), Oe[World.playerAlive] ===
        window.undefined && (Oe[World.playerAlive] = {
          img: GUI.renderText("#" + World.playerAlive, "'Viga', sans-serif", "#FFFFFF", 60, 140)
        }, Oe[World.playerAlive].img.isLoaded = 1), CanvasUtils.drawImageHd(Oe[World.playerAlive], e / scaleby +
          canwns - 50, 25 + i / scaleby, 0, 0, 0, 1)
    }
    var xi = "",
      Vi = null;

    function Bi() {
      var e = X;
      e > 0 ? CanvasUtils.fillRect(ctx, 0, 0, e, canhns, GROUND) : e = 0;
      var i = j;
      i > 0 ? CanvasUtils.fillRect(ctx, e, 0, canwns - e, i, GROUND) : i = 0;
      var a = -X + canwns - o;
      a > 0 ? CanvasUtils.fillRect(ctx, canwns - a, i, a, canhns - i, GROUND) : a = 0;
      var _ = -j + canhns - t;
      _ > 0 && CanvasUtils.fillRect(ctx, e, canhns - _, canwns - e - a, _, GROUND)
    }

    function ki(e, i) {
      var a = INVENTORY[i],
        _ = a.detail,
        o = GUI.renderText(_.name, "'Viga', sans-serif", "#D3BB43", 30, 400);
      if (e.drawImage(o, 20, 20), o = GUI.renderText(_.description, "'Viga', sans-serif", "#FFFFFF", 16, 400), e
        .drawImage(o, 20, 68), 21 === a.idWeapon) a.damageBuilding > 0 ? (o = GUI.renderText("Damage: " + a.damage +
        "/" + a.damageBuilding, "'Viga', sans-serif", "#D3BB43", 24, 400), e.drawImage(o, 20, 101)) : (o = GUI
        .renderText("Life: " + a.life, "'Viga', sans-serif", "#D3BB43", 24, 400), e.drawImage(o, 20, 101));
      else if (a.idWeapon !== window.undefined && 0 !== a.idWeapon) {
        var t = "",
          d = ENTITIES[__ENTITIE_PLAYER__].weapons[a.idWeapon];
        d.damage !== window.undefined ? t = "Damage: " + (d.damageCac === window.undefined ? d.damage : d.damageCac) : (
          0 !== d.food && (t += "Food: " + d.food + " "), d.heal < 0 ? t += "Damage: " + d.heal + " " : d.heal > 0 &&
          (t += "Heal: " + d.heal + " "), 0 !== d.energy && (t += "Energy: " + d.energy)), o = GUI.renderText(t,
          "'Viga', sans-serif", "#D3BB43", 24, 400), e.drawImage(o, 20, 101)
      } else a.idClothe !== window.undefined || (o = GUI.renderText("Cannot be equipped", "'Viga', sans-serif",
        "#FFFFFF", 17, 400), e.drawImage(o, 20, 108))
    }

    function Hi(e) {
      var i = World.players[e.pid];
      if (i.text.length > 0) {
        for (var a = 0; a < i.text.length && a < 2; a++) i.label[a] || (i.label[a] = GUI.renderText(i.text[a],
            "'Viga', sans-serif", "#ffffff", 32, 1e3, "#000000", 33, 19, window.undefined, window.undefined, .55, 5),
          i.textEffect[a] = 0, i.textMove[a] = 0), 1 === a && (i.textMove[0] = 28 * MathUtils.Ease.inOutQuad(i
          .textEase));
        wwmww = delta / 1e3, i.textEffect[0] += wwmww, i.text.length > 1 && (i.textEase = window.Math.min(i.textEase +
          wwmww, 1), i.textEffect[0] > 1 && i.textEase > .5 && (i.textEffect[1] += wwmww));
        for (a = 0; a < i.text.length && a < 2; a++) {
          var _ = i.textEffect[a];
          if (_ > 0) {
            ctx.globalAlpha = _ < .25 ? 4 * _ : _ > 4.75 ? window.Math.max(5 * (5 - _), 0) : 1;
            var o = i.label[a];
            ctx.drawImage(o, 0, 0, o.width, o.height, (X + e.x - o.width / 4) * scaleby, (j + e.y - 118 - i.textMove[
              a]) * scaleby, o.width / 2 * scaleby, o.height / 2 * scaleby), ctx.globalAlpha = 1
          }
        }
        i.textEffect[0] > 5 && (i.textEffect.shift(), i.text.shift(), i.textMove.shift(), i.label.shift(), i.textEase =
          0)
      }
    }

    function Yi(e) {
      var i = World.players[e.pid];
      if (16 != (255 & e.extra) || 1 === World.PLAYER.admin || e.pid === World.PLAYER.id || -1 !== i.team && World
        .teams[i.team].uid === i.teamUid && World.PLAYER.team === i.team) {
        null === i.playerIdLabel && (i.playerIdLabel = GUI.renderText("#" + i.id, "'Viga', sans-serif", "#FFFFFF", 24,
          400, window.undefined, 16, 25, window.undefined, .5, window.undefined, window.undefined, "#000000", 5));
        var a = i.playerIdLabel;
        ctx.drawImage(a, (X + e.x - a.wh / 2) * scaleby, (j + e.y - 90 - 13) * scaleby, a.wh * scaleby, a.h2 * scaleby)
      }
    }

    function Gi(e) {
      var i = "#FFFFFF",
        a = "#FFFFFF";
      drawLines ? (i = "#00FFFF", a = "#FF0000") : (i = "#FFFFFF", a = "#FFFFFF");
      var _ = World.players[e.pid];
      if (16 != (255 & e.extra) || 1 === World.PLAYER.admin || e.pid === World.PLAYER.id || -1 !== _.team && World
        .teams[_.team].uid === _.teamUid && World.PLAYER.team === _.team) {
        null === _.nicknameLabel && (_.nicknameLabel = GUI.renderText(_.nickname, "'Viga', sans-serif", "#FFFFFF", 38,
          400, window.undefined, 16, 25, window.undefined, window.undefined, window.undefined, window.undefined,
          "#000000", 12));
        var o = _.nicknameLabel,
          t = 90;
        if (-1 === _.team) ctx.drawImage(o, (X + e.x - o.wh / 2) * scaleby, (j + e.y - t) * scaleby, o.wh * scaleby, o
          .h2 * scaleby);
        else if (-1 !== _.team) {
          var d = World.teams[_.team];
          if (d.uid === _.teamUid) {
            if (null === d.labelNickname);
            e.pid === World.PLAYER.id || -1 !== World.PLAYER.team && World.PLAYER.team === World.players[e.pid].team &&
              World.players[e.pid].teamUid === World.teams[World.PLAYER.team].uid ? (1, d.labelNickname = GUI
                .renderText("[" + d.name + "]", "'Viga', sans-serif", i, 38, 400, window.undefined, 16, 25, window
                  .undefined, window.undefined, window.undefined, window.undefined, "#000000", 12)) : d.labelNickname =
              GUI.renderText("[" + d.name + "]", "'Viga', sans-serif", a, 38, 400, window.undefined, 16, 25, window
                .undefined, window.undefined, window.undefined, window.undefined, "#000000", 12);
            var n = d.labelNickname;
            ctx.drawImage(n, (X + e.x - o.wh / 2 - n.wh / 2 - .5) * scaleby, (j + e.y - t) * scaleby, n.wh * scaleby, n
              .h2 * scaleby), 0 !== o.width && 0 !== o.height && ctx.drawImage(o, (X + e.x - o.wh / 2 + n.wh / 2) *
              scaleby, (j + e.y - t) * scaleby, o.wh * scaleby, o.h2 * scaleby)
          } else _.team = -1
        }
        if (AutoEat) {
          null === AutoEatLabel && (AutoEatLabel = GUI.renderText("FOOD", "'Viga', sans-serif", "#00FF00", 20, 400,
            window.undefined, 16, 25, window.undefined, window.undefined, window.undefined, window.undefined,
            "#000000", 10));
          o = AutoEatLabel, t = 90;
          ctx.drawImage(o, (X + World.PLAYER.x - o.wh / 2) * scaleby, (j + World.PLAYER.y - t + 32) * scaleby, o.wh *
            scaleby, o.h2 * scaleby)
        }
        if (AutoLoot) {
          null === AutoLootLabel && (AutoLootLabel = GUI.renderText("LOOT", "'Viga', sans-serif", "#FF0000", 20, 400,
            window.undefined, 16, 25, window.undefined, window.undefined, window.undefined, window.undefined,
            "#000000", 10));
          o = AutoLootLabel, t = 90;
          ctx.drawImage(o, (X + World.PLAYER.x - o.wh / 2) * scaleby, (j + World.PLAYER.y - t + 21) * scaleby, o.wh *
            scaleby, o.h2 * scaleby)
        }
      }
    }

    function Ki() {
      if (1 === World.PLAYER.isBuilding) {
        if (World.PLAYER.grid > 0 && (World.PLAYER.iGrid !== World.PLAYER._i || World.PLAYER.jGrid !== World.PLAYER
          ._j)) {
          for (var a = 0; a < World.PLAYER.gridPrev.length; a++)
            if (0 === World.PLAYER.gridPrev[a]) {
              World.PLAYER.gridPrev[a] = World.PLAYER.grid, World.PLAYER.iGridPrev[a] = World.PLAYER.iGrid, World.PLAYER
                .jGridPrev[a] = World.PLAYER.jGrid;
              break
            } World.PLAYER.grid = 0, World.PLAYER.iGrid = World.PLAYER._i, World.PLAYER.jGrid = World.PLAYER._j
        }
        World.PLAYER.grid = window.Math.min(T, World.PLAYER.grid + delta);
        for (a = 0; a < World.PLAYER.gridPrev.length; a++) World.PLAYER.gridPrev[a] = window.Math.max(0, World.PLAYER
          .gridPrev[a] - delta)
      } else {
        if (0 === World.PLAYER.grid && 1 === function () {
            for (var e = 0; e < World.PLAYER.gridPrev.length; e++)
              if (0 !== World.PLAYER.gridPrev[e]) return 0;
            return 1
          }()) return;
        World.PLAYER.grid = window.Math.max(0, World.PLAYER.grid - delta);
        for (a = 0; a < World.PLAYER.gridPrev.length; a++) World.PLAYER.gridPrev[a] = window.Math.max(0, World.PLAYER
          .gridPrev[a] - delta)
      }
      if (1 === We.isLoaded) {
        ctx.globalAlpha = World.PLAYER.grid / T;
        var _ = scaleby * (World.PLAYER.iGrid * e + j + i),
          o = scaleby * (World.PLAYER.jGrid * e + X + i),
          t = scaleby * We.width / 2,
          d = scaleby * We.height / 2;
        ctx.drawImage(We, o - t / 2, _ - d / 2, t, d), ctx.globalAlpha = 1;
        for (a = 0; a < World.PLAYER.gridPrev.length; a++)
          if (World.PLAYER.gridPrev[a] > 0) {
            ctx.globalAlpha = World.PLAYER.gridPrev[a] / T;
            _ = scaleby * (World.PLAYER.iGridPrev[a] * e + j + i), o = scaleby * (World.PLAYER.jGridPrev[a] * e + X +
              i), t = scaleby * We.width / 2, d = scaleby * We.height / 2;
            ctx.drawImage(We, o - t / 2, _ - d / 2, t, d), ctx.globalAlpha = 1
          }
      } else We = CanvasUtils.loadImage(E, We)
    }

    function zi(e) {
      var i = World.players[e.pid];
      if (i !== window.undefined && i.notification.length > 0) {
        i.notificationDelay >= U && (i.notificationDelay = 0);
        var a = i.notificationDelay,
          _ = i.notificationLevel[0],
          o = i.notification[0];
        if (0 === a) Math2d.dist(e.x, e.y, Q, q);
        i.notificationDelay += delta, i.notificationDelay >= U && (i.notificationDelay = 0, i.notificationLevel.shift(),
          i.notification.shift());
        var t = He[o][_];
        if (1 !== t.isLoaded) return void(He[o][_] = CanvasUtils.loadImage(S + o + "_" + _ + ".png", t));
        var d = 0;
        if (a < h) {
          var n = a / h;
          ctx.globalAlpha = n, d = 15 * (1 - n)
        } else if (a > f) {
          var r = (U - a) / (U - f);
          ctx.globalAlpha = r, d = 40 * (r - 1)
        }
        ctx.drawImage(t, (X + e.x - 120) * scaleby, (j + e.y + (d - 45)) * scaleby, t.width * scaleby / 2, t.height *
          scaleby / 2), ctx.globalAlpha = 1
      }
    }

    function Ji(e) {
      for (var i = World.players[e.pid], a = 0; a < i.runEffect.length; a++) {
        var _ = i.runEffect[a];
        if (a > 0 && _.delay <= 0) {
          var o = i.runEffect[a - 1];
          if (o.delay > 500 || o.delay <= 0) continue
        }
        if (e.speed > ENTITIES[__ENTITIE_PLAYER__].speed || _.delay > 0) {
          var t = ENTITIES[__ENTITIE_PLAYER__].runEffect,
            d = t.img;
          if (1 !== d.isLoaded) return void(t.img = CanvasUtils.loadImage(t.src, t.img));
          _.delay <= 0 ? (_.delay = 750, _.angle = window.Math.random() * D, _.x = e.x, _.y = e.y, _.size = 1 + .8 *
            window.Math.random()) : _.delay -= delta;
          var n = MathUtils.Ease.outQuart(window.Math.max(0, _.delay / 750)),
            r = scaleby * (_.size + 1) * n * d.width / 7,
            l = -r / 2;
          ctx.save(), ctx.translate((X + _.x) * scaleby, (j + _.y) * scaleby), ctx.rotate(_.angle), ctx.globalAlpha =
            window.Math.max(0, n * n), ctx.drawImage(d, l, l, r, r), ctx.restore()
        }
      }
    }
    var Xi = [0, 0, 0, 0];

    function ji(e) {
      var i = AI[15 & e.extra];
      de[e.i][e.j].tile = ui, de[e.i][e.j].tilePid = e.pid, de[e.i][e.j].category = window.undefined;
      var a = 1,
        _ = X + e.x,
        o = j + e.y;
      if (0 !== e.removed) {
        e.death += delta;
        var t = MathUtils.Ease.outQuart(1 - (e.death - 500) / 400);
        ctx.globalAlpha = window.Math.min(window.Math.max(0, t), 1), CanvasUtils.drawImageHd(i.death, _, o, e.angle, 0,
            0, 1), t = MathUtils.Ease.outQuart(1 - e.death / 400), a = window.Math.min(1 + .5 * (1 - t), 1.5), ctx
          .globalAlpha = window.Math.max(0, t)
      }
      16 == (16 & e.extra) && (e.extra &= -17, e.hurt = 250, e.hurtAngle = D * (e.extra >> 5 & 31) / 31), i.draw(i, e,
        _, o, a), 0 !== e.removed && (e.death > 900 && (e.removed = 2), ctx.globalAlpha = 1)
    }

    function Qi(e) {
      de[e.i][e.j].tile = ui, de[e.i][e.j].tilePid = e.pid, de[e.i][e.j].category = window.undefined;
      var i = ENTITIES[__ENTITIE_PLAYER__],
        a = e.extra >> 8 & 255,
        _ = i.weapons[a],
        o = i.clothes[255 & e.extra],
        t = 1,
        d = 254 & e.state,
        n = X + e.x,
        r = j + e.y;
      if (0 !== e.removed) {
        e.death += delta;
        var l = MathUtils.Ease.outQuart(1 - (e.death - 500) / 400);
        ctx.globalAlpha = window.Math.min(window.Math.max(0, l), 1), CanvasUtils.drawImageHd(i.death, n, r, e.angle, 0,
            0, 1), l = MathUtils.Ease.outQuart(1 - e.death / 400), t = window.Math.min(1 + .5 * (1 - l), 1.5), ctx
          .globalAlpha = window.Math.max(0, l)
      }
      if (2 === d) {
        if (e.state &= 65281, 0 !== AudioUtils._fx.shot[a]) {
          var s = window.Math.floor(window.Math.random() * _.soundLen);
          AudioUtils.playFx(AudioUtils._fx.shot[a][s], _.soundVolume, Math2d.dist(World.PLAYER.x, World.PLAYER.y, e.x, e
            .y) / 4, _.soundDelay)
        }
        e.hit <= 0 && (e.hit = _.delay, e.hitMax = _.delay)
      } else 6 === d && (e.state &= 65281);
      switch (_.type) {
      case 0:
        ! function (e, i, a, _, o, t, d) {
          var n = World.players[_.pid],
            r = 0,
            l = n.repellent - Render.globalTime,
            s = n.withdrawal - Render.globalTime;
          l > 0 ? r = s > 0 ? 3 : n.withdrawal > 0 ? 5 : 1 : s > 0 ? r = 2 : n.withdrawal > 0 && (r = 4);
          var g = e.skins[r],
            m = 0,
            c = 0,
            I = 0,
            E = 0;
          _.hit > 0 ? (_.hit = window.Math.max(0, _.hit - delta), _.hit = window.Math.min(_.hit, i.delay), T = _.hit > i
            .impactClient ? 1 - (_.hit - i.impactClient) / (i.delay - i.impactClient) : _.hit / i.impactClient, m = n
            .punch * MathUtils.Ease.inOutQuad(T) * .55, E = 3 * T, 1 === n.punch ? c = 25 * T : I = 25 * T, 0 === _
            .hit && (n.punch *= -1)) : Math2d.fastDist(_.x, _.y, _.nx, _.ny) < 1 ? (n.breath = (n.breath + delta) %
            1500, 0 !== n.move && (n.move < 400 && (n.move = 800 - n.move), n.move = n.move + delta, n.move > 800 && (
              n.move = 0))) : (_.speed > ENTITIES[__ENTITIE_PLAYER__].speed ? n.move = n.move + 1.9 * delta : n.move =
            n.move + delta, n.move > 800 && (n.orientation *= -1, n.move = n.move % 800), 0 !== n.breath && (n
              .breath < 750 && (n.breath = 1500 - n.breath), n.breath = n.breath + delta, n.breath > 1500 && (n
                .breath = 0)));
          var u = i.breath * (n.breath < 750 ? n.breath / 750 : 1 - (n.breath - 750) / 750),
            L = i.move * (n.move < 400 ? n.move / 400 : 1 - (n.move - 400) / 400),
            p = i.rightArm,
            R = a.rightArm === window.undefined ? g.rightArm : a.rightArm;
          if (CanvasUtils.drawImageHd(R, t, d, p.angle + _.angle + u + m, p.x + L * n.orientation + I, p.y, o), p = i
            .leftArm, R = a.leftArm === window.undefined ? g.leftArm : a.leftArm, CanvasUtils.drawImageHd(R, t, d, -p
              .angle + _.angle - u + m, p.x - L * n.orientation + c, p.y, o), _.hurt2 > 0) {
            var w = 1;
            _.hurt2 -= delta;
            var T = 0;
            _.hurt2 > 150 ? T = MathUtils.Ease.inQuad((300 - _.hurt2) / 300) : w += .2 * (1 - (T = MathUtils.Ease
                .outQuad(_.hurt2 / 150))), ctx.globalAlpha = window.Math.min(1, window.Math.max(0, T)), CanvasUtils
              .drawImageHd(e.food, t, d, _.angle + m / 1.5, E, 0, w), ctx.globalAlpha = 1
          }
          _.hurt > 0 && (w = 1, _.hurt -= delta, T = 0, _.hurt > 150 ? T = MathUtils.Ease.inQuad((300 - _.hurt) / 300) :
            w += .2 * (1 - (T = MathUtils.Ease.outQuad(_.hurt / 150))), t += window.Math.cos(_.hurtAngle) * T * 3,
            d += window.Math.sin(_.hurtAngle) * T * 3, ctx.globalAlpha = window.Math.min(1, window.Math.max(0, T)),
            CanvasUtils.drawImageHd(e.hurt, t, d, _.angle + m / 1.5, E, 0, w), ctx.globalAlpha = 1);
          _.heal > 0 && (w = 1, _.heal -= delta, _.heal > 150 ? ctx.globalAlpha = window.Math.min(1, window.Math.max(0,
            MathUtils.Ease.inQuad((300 - _.heal) / 300))) : (w += .2 * (1 - (T = MathUtils.Ease.outQuad(_.heal /
            150))), ctx.globalAlpha = window.Math.min(1, window.Math.max(0, T))), CanvasUtils.drawImageHd(e.heal, t,
            d, _.angle + m / 1.5, E, 0, w), ctx.globalAlpha = 1);
          CanvasUtils.drawImageHd(g.head, t, d, _.angle + m / 1.5, E, 0, o), a.head !== window.undefined && CanvasUtils
            .drawImageHd(a.head, t, d, _.angle + m / 1.5, E, 0, o)
        }(i, _, o, e, t, n, r);
        break;
      case 1:
        ! function (e, i, a, _, o, t, d) {
          var n = World.players[_.pid],
            r = 0,
            l = n.repellent - Render.globalTime,
            s = n.withdrawal - Render.globalTime;
          l > 0 ? r = s > 0 ? 3 : n.withdrawal > 0 ? 5 : 1 : s > 0 ? r = 2 : n.withdrawal > 0 && (r = 4);
          var g = e.skins[r],
            m = 0,
            c = 0,
            I = 0,
            E = 0,
            u = i.rightArm,
            L = i.leftArm;
          _.hit > 0 ? (_.hit = window.Math.max(0, _.hit - delta), A = _.hit > i.impactClient ? 1 - (_.hit - i
              .impactClient) / (i.delay - i.impactClient) : _.hit / i.impactClient, m = .4 * -MathUtils.Ease
            .inOutQuad(A), E = 3 * A, c = A * L.dist, I = A * u.dist) : Math2d.fastDist(_.x, _.y, _.nx, _.ny) < 1 ? (n
            .breath = (n.breath + delta) % 1500, 0 !== n.move && (n.move < 400 && (n.move = 800 - n.move), n.move = n
              .move + delta, n.move > 800 && (n.move = 0))) : (_.speed > ENTITIES[__ENTITIE_PLAYER__].speed ? n.move =
            n.move + 1.9 * delta : n.move = n.move + delta, n.move > 800 && (n.orientation *= -1, n.move = n.move %
              800), 0 !== n.breath && (n.breath < 750 && (n.breath = 1500 - n.breath), n.breath = n.breath + delta, n
              .breath > 1500 && (n.breath = 0)));
          var p = i.breath * (n.breath < 750 ? n.breath / 750 : 1 - (n.breath - 750) / 750),
            R = i.move * (n.move < 400 ? n.move / 400 : 1 - (n.move - 400) / 400),
            w = i.weapon;
          CanvasUtils.drawImageHd2(w, t, d, w.angle + _.angle + p, w.x + R * n.orientation, w.y, o, m * w.rotation, w
            .x2, w.y2);
          var T = a.rightArm === window.undefined ? g.rightArm : a.rightArm;
          if (CanvasUtils.drawImageHd(T, t, d, u.angle + _.angle + p + m * u.rotation, u.x + R * n.orientation + I, u.y,
              o), T = a.leftArm === window.undefined ? g.leftArm : a.leftArm, CanvasUtils.drawImageHd(T, t, d, -L
              .angle + _.angle + p + m * L.rotation, L.x + R * n.orientation + c, L.y, o), _.hurt > 0) {
            var O = 1;
            _.hurt -= delta;
            var A = 0;
            _.hurt > 150 ? A = MathUtils.Ease.inQuad((300 - _.hurt) / 300) : O += .2 * (1 - (A = MathUtils.Ease.outQuad(
                _.hurt / 150))), t += window.Math.cos(_.hurtAngle) * A * 3, d += window.Math.sin(_.hurtAngle) * A * 3,
              ctx.globalAlpha = window.Math.min(1, window.Math.max(0, A)), CanvasUtils.drawImageHd(e.hurt, t, d, _
                .angle + m / 1.5, E, 0, O), ctx.globalAlpha = 1
          }
          _.heal > 0 && (O = 1, _.heal -= delta, _.heal > 150 ? ctx.globalAlpha = window.Math.min(1, window.Math.max(0,
            MathUtils.Ease.inQuad((300 - _.heal) / 300))) : (O += .2 * (1 - (A = MathUtils.Ease.outQuad(_.heal /
            150))), ctx.globalAlpha = window.Math.min(1, window.Math.max(0, A))), CanvasUtils.drawImageHd(e.heal, t,
            d, _.angle + m / 1.5, E, 0, O), ctx.globalAlpha = 1);
          CanvasUtils.drawImageHd(g.head, t, d, _.angle + m / 1.5, E, 0, o), a.head !== window.undefined && CanvasUtils
            .drawImageHd(a.head, t, d, _.angle + m / 1.5, E, 0, o)
        }(i, _, o, e, t, n, r);
        break;
      case 2:
        ! function (e, i, a, _, o, t, d) {
          var n = World.players[_.pid],
            r = 0,
            l = n.repellent - Render.globalTime,
            s = n.withdrawal - Render.globalTime;
          l > 0 ? r = s > 0 ? 3 : n.withdrawal > 0 ? 5 : 1 : s > 0 ? r = 2 : n.withdrawal > 0 && (r = 4);
          var g = e.skins[r],
            m = 0,
            c = 0,
            I = 0,
            E = -1,
            u = i.rightArm,
            L = i.leftArm,
            p = n.cartridges;
          if (_.hit > 0) {
            if (_.hit === _.hitMax)
              for (var R = 0; R < p.length; R++)
                if ((h = p[R]).delay <= 0) {
                  h.type = i.cartridge, h.delay = i.cartridgeDelay, h.x = t + 44 * window.Math.cos(_.angle), h.y = d +
                    44 * window.Math.sin(_.angle);
                  var w = -window.Math.PI / 2.5 + _.angle + window.Math.random() * -window.Math.PI / 3.5;
                  h.ax = window.Math.cos(w), h.ay = window.Math.sin(w);
                  break
                } _.hit = window.Math.max(0, _.hit - delta);
            var T = _.hit > 80 ? 1 - (_.hit - 80) / 100 : _.hit / 80;
            if (0 === i.noEffect)
              for (var O = e.gunEffect[i.gunEffect].length, A = 0; A < O; A++)
                if (_.hit > i.delay - 30 * (A + 1)) {
                  E = A;
                  break
                } I = T * i.recoilHead, c = T * i.recoilGun, m = T * i.recoil
          } else Math2d.fastDist(_.x, _.y, _.nx, _.ny) < 1 ? (n.breath = (n.breath + delta) % 1500, 0 !== n.move && (n
            .move < 400 && (n.move = 800 - n.move), n.move = n.move + delta, n.move > 800 && (n.move = 0))) : (_
            .speed > ENTITIES[__ENTITIE_PLAYER__].speed ? n.move = n.move + 1.9 * delta : n.move = n.move + delta, n
            .move > 800 && (n.orientation *= -1, n.move = n.move % 800), 0 !== n.breath && (n.breath < 750 && (n
              .breath = 1500 - n.breath), n.breath = n.breath + delta, n.breath > 1500 && (n.breath = 0)));
          var b = i.breath * (n.breath < 750 ? n.breath / 750 : 1 - (n.breath - 750) / 750),
            y = i.move * (n.move < 400 ? n.move / 400 : 1 - (n.move - 400) / 400),
            S = a.rightArm === window.undefined ? g.rightArm : a.rightArm;
          CanvasUtils.drawImageHd(S, t, d, u.angle + _.angle, u.x + y * n.orientation + m + b, u.y, o), S = a
            .leftArm === window.undefined ? g.leftArm : a.leftArm, CanvasUtils.drawImageHd(S, t, d, -L.angle + _.angle,
              L.x + y * n.orientation + m + b, L.y, o);
          var U = i.weapon;
          E >= 0 && 0 === i.noEffect && (A = e.gunEffect[i.gunEffect][E], CanvasUtils.drawImageHd(A, t, d, _.angle, U
            .x + y * n.orientation + b + c + i.distance, U.y, o));
          for (CanvasUtils.drawImageHd(U, t, d, _.angle, U.x + y * n.orientation + b + c, U.y, o), R = 0; R < p
            .length; R++) {
            var h;
            (h = p[R]).delay > 0 && (h.x += delta * h.ax * .18, h.y += delta * h.ay * .18, h.delay < 200 && 1 === ctx
              .globalAlpha ? (ctx.globalAlpha = MathUtils.Ease.outQuad(h.delay / 200), CanvasUtils.drawImageHd(e
                .cartridges[h.type], h.x, h.y, .007 * h.delay, 0, 0, o), ctx.globalAlpha = 1) : CanvasUtils
              .drawImageHd(e.cartridges[h.type], h.x, h.y, .007 * h.delay, 0, 0, o), h.delay -= delta)
          }
          if (_.hurt > 0) {
            var f = 1;
            _.hurt -= delta, T = 0, _.hurt > 150 ? T = MathUtils.Ease.inQuad((300 - _.hurt) / 300) : f += .2 * (1 - (T =
                MathUtils.Ease.outQuad(_.hurt / 150))), t += window.Math.cos(_.hurtAngle) * T * 3, d += window.Math.sin(
                _.hurtAngle) * T * 3, ctx.globalAlpha = window.Math.min(1, window.Math.max(0, T)), CanvasUtils
              .drawImageHd(e.hurt, t, d, _.angle, I, 0, f), ctx.globalAlpha = 1
          }
          _.heal > 0 && (f = 1, _.heal -= delta, _.heal > 150 ? ctx.globalAlpha = window.Math.min(1, window.Math.max(0,
            MathUtils.Ease.inQuad((300 - _.heal) / 300))) : (f += .2 * (1 - (T = MathUtils.Ease.outQuad(_.heal /
            150))), ctx.globalAlpha = window.Math.min(1, window.Math.max(0, T))), CanvasUtils.drawImageHd(e.heal, t,
            d, _.angle, I, 0, f), ctx.globalAlpha = 1);
          CanvasUtils.drawImageHd(g.head, t, d, _.angle, I, 0, o), a.head !== window.undefined && CanvasUtils
            .drawImageHd(a.head, t, d, _.angle, I, 0, o)
        }(i, _, o, e, t, n, r);
        break;
      case 3:
        ! function (e, i, a, _, o, t, d) {
          var n = World.players[_.pid],
            r = 0,
            l = n.repellent - Render.globalTime,
            s = n.withdrawal - Render.globalTime;
          l > 0 ? r = s > 0 ? 3 : n.withdrawal > 0 ? 5 : 1 : s > 0 ? r = 2 : n.withdrawal > 0 && (r = 4);
          var g = e.skins[r],
            m = 0,
            c = 0,
            I = 0,
            E = 0;
          _.hit > 0 ? (_.hit = window.Math.max(0, _.hit - delta), T = _.hit > i.impactClient ? 1 - (_.hit - i
              .impactClient) / (i.delay - i.impactClient) : _.hit / i.impactClient, m = .55 * -MathUtils.Ease
            .inOutQuad(T), E = 3 * T, I = 25 * -T, c = 10 * T) : Math2d.fastDist(_.x, _.y, _.nx, _.ny) < 1 ? (n
            .breath = (n.breath + delta) % 1500, 0 !== n.move && (n.move < 400 && (n.move = 800 - n.move), n.move = n
              .move + delta, n.move > 800 && (n.move = 0))) : (_.speed > ENTITIES[__ENTITIE_PLAYER__].speed ? n.move =
            n.move + 1.9 * delta : n.move = n.move + delta, n.move > 800 && (n.orientation *= -1, n.move = n.move %
              800), 0 !== n.breath && (n.breath < 750 && (n.breath = 1500 - n.breath), n.breath = n.breath + delta, n
              .breath > 1500 && (n.breath = 0)));
          var u = i.breath * (n.breath < 750 ? n.breath / 750 : 1 - (n.breath - 750) / 750),
            L = i.move * (n.move < 400 ? n.move / 400 : 1 - (n.move - 400) / 400),
            p = i.leftArm,
            R = a.leftArm === window.undefined ? g.leftArm : a.leftArm;
          if (CanvasUtils.drawImageHd(R, t, d, -p.angle + _.angle - u - m, p.x - L * n.orientation + c, p.y, o), _
            .hurt > 0) {
            var w = 1;
            _.hurt -= delta;
            var T = 0;
            _.hurt > 150 ? T = MathUtils.Ease.inQuad((300 - _.hurt) / 300) : w += .2 * (1 - (T = MathUtils.Ease.outQuad(
                _.hurt / 150))), t += window.Math.cos(_.hurtAngle) * T * 3, d += window.Math.sin(_.hurtAngle) * T * 3,
              ctx.globalAlpha = window.Math.min(1, window.Math.max(0, T)), CanvasUtils.drawImageHd(e.hurt, t, d, _
                .angle - m / 1.5, E, 0, w), ctx.globalAlpha = 1
          }
          _.heal > 0 && (w = 1, _.heal -= delta, _.heal > 150 ? ctx.globalAlpha = window.Math.min(1, window.Math.max(0,
            MathUtils.Ease.inQuad((300 - _.heal) / 300))) : (w += .2 * (1 - (T = MathUtils.Ease.outQuad(_.heal /
            150))), ctx.globalAlpha = window.Math.min(1, window.Math.max(0, T))), CanvasUtils.drawImageHd(e.heal, t,
            d, _.angle - m / 1.5, E, 0, w), ctx.globalAlpha = 1);
          CanvasUtils.drawImageHd(g.head, t, d, _.angle - m / 1.5, E, 0, o), a.head !== window.undefined && CanvasUtils
            .drawImageHd(a.head, t, d, _.angle - m / 1.5, E, 0, o);
          var O = i.breathWeapon * (n.breath < 750 ? n.breath / 750 : 1 - (n.breath - 750) / 750);
          p = i.rightArm, R = a.rightArm === window.undefined ? g.rightArm : a.rightArm, CanvasUtils.drawImageHd(R, t,
            d, p.angle + _.angle, p.x + L * n.orientation + I + O, p.y, o);
          var A = i.weapon;
          CanvasUtils.drawImageHd(A, t, d, A.angle + _.angle, A.x + L * n.orientation + O + I, A.y, o)
        }(i, _, o, e, t, n, r);
        break;
      case 4:
        ! function (e, i, a, _, o, t, d) {
          var n = World.players[_.pid],
            r = 0,
            l = n.repellent - Render.globalTime,
            s = n.withdrawal - Render.globalTime;
          l > 0 ? r = s > 0 ? 3 : n.withdrawal > 0 ? 5 : 1 : s > 0 ? r = 2 : n.withdrawal > 0 && (r = 4);
          var g = e.skins[r],
            m = 0,
            c = 0,
            I = 0,
            E = 0;
          _.hit > 0 ? (_.hit = window.Math.max(0, _.hit - delta), b = _.hit > i.impactClient ? 1 - (_.hit - i
              .impactClient) / (i.delay - i.impactClient) : _.hit / i.impactClient, m = .35 * -MathUtils.Ease
            .inOutQuad(b), E = 3 * b, I = 20 * -b, c = 3 * b) : Math2d.fastDist(_.x, _.y, _.nx, _.ny) < 1 ? (n
            .breath = (n.breath + delta) % 1500, 0 !== n.move && (n.move < 400 && (n.move = 800 - n.move), n.move = n
              .move + delta, n.move > 800 && (n.move = 0))) : (_.speed > ENTITIES[__ENTITIE_PLAYER__].speed ? n.move =
            n.move + 1.9 * delta : n.move = n.move + delta, n.move > 800 && (n.orientation *= -1, n.move = n.move %
              800), 0 !== n.breath && (n.breath < 750 && (n.breath = 1500 - n.breath), n.breath = n.breath + delta, n
              .breath > 1500 && (n.breath = 0)));
          var u = i.breath * (n.breath < 750 ? n.breath / 750 : 1 - (n.breath - 750) / 750),
            L = i.move * (n.move < 400 ? n.move / 400 : 1 - (n.move - 400) / 400),
            p = i.breathWeapon * (n.breath < 750 ? n.breath / 750 : 1 - (n.breath - 750) / 750),
            R = i.rightArm,
            w = a.rightArm === window.undefined ? g.rightArm : a.rightArm;
          if (CanvasUtils.drawImageHd(w, t, d, R.angle + _.angle - m, R.x - L * n.orientation + I + p, R.y, o), _.hit >
            0) {
            var T = i.WnVmv;
            CanvasUtils.drawImageHd(T, t, d, _.angle, T.x - L * n.orientation + p + I, T.y, o)
          }
          var O = i.weapon;
          if (CanvasUtils.drawImageHd(O, t, d, O.angle + _.angle, O.x + L * n.orientation + u + c, O.y, o), R = i
            .leftArm, w = a.leftArm === window.undefined ? g.leftArm : a.leftArm, CanvasUtils.drawImageHd(w, t, d, -R
              .angle + _.angle, R.x + L * n.orientation + c + u, R.y, o), _.hurt > 0) {
            var A = 1;
            _.hurt -= delta;
            var b = 0;
            _.hurt > 150 ? b = MathUtils.Ease.inQuad((300 - _.hurt) / 300) : A += .2 * (1 - (b = MathUtils.Ease.outQuad(
                _.hurt / 150))), t += window.Math.cos(_.hurtAngle) * b * 3, d += window.Math.sin(_.hurtAngle) * b * 3,
              ctx.globalAlpha = window.Math.min(1, window.Math.max(0, b)), CanvasUtils.drawImageHd(e.hurt, t, d, _
                .angle - m / 1.5, E, 0, A), ctx.globalAlpha = 1
          }
          _.heal > 0 && (A = 1, _.heal -= delta, _.heal > 150 ? ctx.globalAlpha = window.Math.min(1, window.Math.max(0,
            MathUtils.Ease.inQuad((300 - _.heal) / 300))) : (A += .2 * (1 - (b = MathUtils.Ease.outQuad(_.heal /
            150))), ctx.globalAlpha = window.Math.min(1, window.Math.max(0, b))), CanvasUtils.drawImageHd(e.heal, t,
            d, _.angle - m / 1.5, E, 0, A), ctx.globalAlpha = 1);
          CanvasUtils.drawImageHd(g.head, t, d, _.angle - m / 1.5, E, 0, o), a.head !== window.undefined && CanvasUtils
            .drawImageHd(a.head, t, d, _.angle - m / 1.5, E, 0, o)
        }(i, _, o, e, t, n, r);
        break;
      case 5:
        ! function (e, i, a, _, o, t, d) {
          var n = World.players[_.pid],
            r = 0,
            l = n.repellent - Render.globalTime,
            s = n.withdrawal - Render.globalTime;
          l > 0 ? r = s > 0 ? 3 : n.withdrawal > 0 ? 5 : 1 : s > 0 ? r = 2 : n.withdrawal > 0 && (r = 4);
          var g = e.skins[r],
            m = 0,
            c = 254 & _.state,
            I = i.rightArm,
            E = i.leftArm;
          if (4 === c) {
            if (-1 === n.consumable) {
              var u = _.extra >> 8 & 255;
              if (0 !== AudioUtils._fx.shot[u] && Render.globalTime - n.consumableLast > 800) {
                n.consumableLast = Render.globalTime;
                var L = window.Math.floor(window.Math.random() * i.soundLen);
                AudioUtils.playFx(AudioUtils._fx.shot[u][L], i.soundVolume, Math2d.dist(World.PLAYER.x, World.PLAYER.y,
                  _.x, _.y) / 4, i.soundDelay)
              }
              n.consumable = 0
            }
            1 === n.punch ? n.consumable = window.Math.max(0, n.consumable - delta) : n.consumable = window.Math.min(i
                .consumableDelay, n.consumable + delta), m = (A = n.consumable / i.consumableDelay) * i.recoil, 0 !== n
              .consumable && n.consumable !== i.consumableDelay || (n.punch *= -1)
          } else Math2d.fastDist(_.x, _.y, _.nx, _.ny) < 1 ? (n.consumable = -1, n.breath = (n.breath + delta) % 1500,
            0 !== n.move && (n.move < 400 && (n.move = 800 - n.move), n.move = n.move + delta, n.move > 800 && (n
              .move = 0))) : (n.consumable = -1, _.speed > ENTITIES[__ENTITIE_PLAYER__].speed ? n.move = n.move +
            1.9 * delta : n.move = n.move + delta, n.move > 800 && (n.orientation *= -1, n.move = n.move % 800), 0 !==
            n.breath && (n.breath < 750 && (n.breath = 1500 - n.breath), n.breath = n.breath + delta, n.breath >
              1500 && (n.breath = 0)));
          var p = i.breath * (n.breath < 750 ? n.breath / 750 : 1 - (n.breath - 750) / 750),
            R = i.move * (n.move < 400 ? n.move / 400 : 1 - (n.move - 400) / 400),
            w = a.rightArm === window.undefined ? g.rightArm : a.rightArm;
          CanvasUtils.drawImageHd(w, t, d, I.angle + _.angle, I.x + R * n.orientation + m + p, I.y, o), w = a
            .leftArm === window.undefined ? g.leftArm : a.leftArm, CanvasUtils.drawImageHd(w, t, d, -E.angle + _.angle,
              E.x + R * n.orientation + m + p, E.y, o);
          var T = i.weapon;
          if (CanvasUtils.drawImageHd(T, t, d, _.angle, T.x + R * n.orientation + p + m, T.y, o), _.hurt2 > 0) {
            var O = 1;
            _.hurt2 -= delta;
            var A = 0;
            _.hurt2 > 150 ? A = MathUtils.Ease.inQuad((300 - _.hurt2) / 300) : O += .2 * (1 - (A = MathUtils.Ease
                .outQuad(_.hurt2 / 150))), ctx.globalAlpha = window.Math.min(1, window.Math.max(0, A)), CanvasUtils
              .drawImageHd(e.food, t, d, _.angle, 0, 0, O), ctx.globalAlpha = 1
          }
          _.hurt > 0 && (O = 1, _.hurt -= delta, A = 0, _.hurt > 150 ? A = MathUtils.Ease.inQuad((300 - _.hurt) / 300) :
            O += .2 * (1 - (A = MathUtils.Ease.outQuad(_.hurt / 150))), t += window.Math.cos(_.hurtAngle) * A * 3,
            d += window.Math.sin(_.hurtAngle) * A * 3, ctx.globalAlpha = window.Math.min(1, window.Math.max(0, A)),
            CanvasUtils.drawImageHd(e.hurt, t, d, _.angle, 0, 0, O), ctx.globalAlpha = 1);
          _.heal > 0 && (O = 1, _.heal -= delta, _.heal > 150 ? ctx.globalAlpha = window.Math.min(1, window.Math.max(0,
            MathUtils.Ease.inQuad((300 - _.heal) / 300))) : (O += .2 * (1 - (A = MathUtils.Ease.outQuad(_.heal /
            150))), ctx.globalAlpha = window.Math.min(1, window.Math.max(0, A))), CanvasUtils.drawImageHd(e.heal, t,
            d, _.angle, 0, 0, O), ctx.globalAlpha = 1);
          CanvasUtils.drawImageHd(g.head, t, d, _.angle, 0, 0, o), a.head !== window.undefined && CanvasUtils
            .drawImageHd(a.head, t, d, _.angle, 0, 0, o)
        }(i, _, o, e, t, n, r);
        break;
      case 6:
        ! function (e, i, a, _, o, t, d) {
          var n = World.players[_.pid],
            r = 0,
            l = n.repellent - Render.globalTime,
            s = n.withdrawal - Render.globalTime;
          l > 0 ? r = s > 0 ? 3 : n.withdrawal > 0 ? 5 : 1 : s > 0 ? r = 2 : n.withdrawal > 0 && (r = 4);
          var g = e.skins[r];
          Math2d.fastDist(_.x, _.y, _.nx, _.ny) < 1 ? (n.breath = (n.breath + delta) % 1500, 0 !== n.move && (n.move <
            400 && (n.move = 800 - n.move), n.move = n.move + delta, n.move > 800 && (n.move = 0))) : (_.speed >
            ENTITIES[__ENTITIE_PLAYER__].speed ? n.move = n.move + 1.9 * delta : n.move = n.move + delta, n.move >
            800 && (n.orientation *= -1, n.move = n.move % 800), 0 !== n.breath && (n.breath < 750 && (n.breath =
              1500 - n.breath), n.breath = n.breath + delta, n.breath > 1500 && (n.breath = 0)));
          var m = i.breath * (n.breath < 750 ? n.breath / 750 : 1 - (n.breath - 750) / 750),
            c = i.move * (n.move < 400 ? n.move / 400 : 1 - (n.move - 400) / 400),
            I = i.rightArm,
            E = a.rightArm === window.undefined ? g.rightArm : a.rightArm;
          if (CanvasUtils.drawImageHd(E, t, d, I.angle + _.angle + m, I.x + c * n.orientation + 0, I.y, o), I = i
            .leftArm, E = a.leftArm === window.undefined ? g.leftArm : a.leftArm, CanvasUtils.drawImageHd(E, t, d, -I
              .angle + _.angle - m, I.x - c * n.orientation + 0, I.y, o), CanvasUtils.drawImageHd(i.blueprint, t, d, -I
              .angle + _.angle - m + window.Math.PI / 3, I.x - c * n.orientation + 0 - 40, I.y - 15, o), _.hurt > 0) {
            var u = 1;
            _.hurt -= delta;
            var L = 0;
            _.hurt > 150 ? L = MathUtils.Ease.inQuad((300 - _.hurt) / 300) : u += .2 * (1 - (L = MathUtils.Ease.outQuad(
                _.hurt / 150))), t += window.Math.cos(_.hurtAngle) * L * 3, d += window.Math.sin(_.hurtAngle) * L * 3,
              ctx.globalAlpha = window.Math.min(1, window.Math.max(0, L)), CanvasUtils.drawImageHd(e.hurt, t, d, _
                .angle, 0, 0, u), ctx.globalAlpha = 1
          }
          _.heal > 0 && (u = 1, _.heal -= delta, _.heal > 150 ? ctx.globalAlpha = window.Math.min(1, window.Math.max(0,
            MathUtils.Ease.inQuad((300 - _.heal) / 300))) : (u += .2 * (1 - (L = MathUtils.Ease.outQuad(_.heal /
            150))), ctx.globalAlpha = window.Math.min(1, window.Math.max(0, L))), CanvasUtils.drawImageHd(e.heal, t,
            d, _.angle, 0, 0, u), ctx.globalAlpha = 1);
          CanvasUtils.drawImageHd(g.head, t, d, _.angle, 0, 0, o), a.head !== window.undefined && CanvasUtils
            .drawImageHd(a.head, t, d, _.angle, 0, 0, o), CanvasUtils.drawImageHd(i.pencil, t, d, _.angle, 0, 0, o)
        }(i, _, o, e, t, n, r)
      }
      0 !== e.removed && (e.death > 900 && (e.removed = 2), ctx.globalAlpha = 1)
    }
    var qi, Zi = 0,
      $i = 0,
      ea = {
        id: -1,
        uid: -1
      };

    function ia(e, i, a, _) {
      if (0 !== oe && i !== PARTICLESID.__NOTHING__ && (2 === oe && (_ *= 3), !(Entitie.border[__ENTITIE_PARTICLES__]
          .border + _ >= J)))
        for (var o = 0; o < _; o++) {
          var t = window.Math.random(),
            d = 10 * t % 1 * D,
            n = a + 1e4 * t % 1 * 25;
          a += 8;
          var r = ($i = ($i + 1) % J) + Entitie.maxUnitsMaster;
          Zi += 1, setEntitie(Entitie.get(0, r, Zi, __ENTITIE_PARTICLES__), 0, Zi, r, __ENTITIE_PARTICLES__, e.px, e.py,
            e.px + window.Math.cos(d) * n, e.py + window.Math.sin(d) * n, window.Math.floor(t * PARTICLES[i].length),
            100 * t % 1 * 255, i)
        }
    }

    function aa(e) {
      var i = PARTICLES[e.state][e.extra];
      if (e.death > 0) return e.death = window.Math.min(1, e.death + delta / 500), ctx.globalAlpha = 1 - e.death,
        CanvasUtils.drawImageHd(i, X + e.x, j + e.y, e.angle, 0, 0, 1), ctx.globalAlpha = 1, void(1 === e.death && (ea
          .id = e.id, ea.uid = e.uid));
      Math2d.fastDist(e.x, e.y, e.nx, e.ny) < .01 && (e.death = .001), CanvasUtils.drawImageHd(i, X + e.x, j + e.y, e
        .angle, 0, 0, 1)
    }

    function _a(e, i, a) {
      if (0 === i.removed && 1 !== World.PLAYER.interaction && 1 !== World.PLAYER.isInBuilding && (0 === a || i.pid ===
          World.PLAYER.id || -1 !== World.PLAYER.team && World.PLAYER.team === World.players[i.pid].team && World
          .players[i.pid].teamUid === World.teams[World.PLAYER.team].uid)) {
        var _ = Math2d.fastDist(Q, q, i.x, i.y);
        if (_ < Be) return World.PLAYER.packetId = e.packetId, World.PLAYER.buildingId = i.id, World.PLAYER
          .buildingPid = i.pid, World.PLAYER.buildingArea = e.area, Be = _, 0 === World.PLAYER.interaction && (World
            .PLAYER.extraLoot = 1), World.PLAYER.interaction = 2, World.PLAYER.eInteract = e.interact, 1
      }
      return 0
    }

    function oa(a, _, o) {
      a.breath = (a.breath + delta) % 1e3;
      var t = 1 + .15 * (a.breath < 500 ? a.breath / 500 : 1 - (a.breath - 500) / 500);
      if (t *= scaleby, 1 === Ae.isLoaded) {
        ctx.globalAlpha = MathUtils.Ease.outQuad(a.hit / 500);
        o = scaleby * (a.i * e + j + i), _ = scaleby * (a.j * e + X + i);
        var d = t * Ae.width / 2,
          n = t * Ae.height / 2;
        ctx.drawImage(Ae, _ - d / 2, o - n / 2, d, n), ctx.globalAlpha = 1
      } else Ae = CanvasUtils.loadImage(L, Ae)
    }

    function ta(e) {
      var i = ENTITIES[__ENTITIE_EXPLOSION__].explosions,
        a = window.Math.floor(e.born / 70);
      a < 10 && (0 === e.born && (-2 !== Render.explosionShake && (Render.explosionShake = 20), AudioUtils.playFx(
          AudioUtils._fx.explosion, .7, Math2d.dist(World.PLAYER.x, World.PLAYER.y, e.x, e.y) / 4)), CanvasUtils
        .drawImageHd(i[a], X + e.x, j + e.y, 0, 0, 0, 1)), e.born += delta
    }

    function da(e) {
      de[e.i][e.j].tile = ui, de[e.i][e.j].tilePid = e.pid, de[e.i][e.j].category = window.undefined;
      var i = RESOURCES[e.extra >> 5 & 31],
        a = i.type[e.extra >> 10 & 7],
        _ = 1;
      if (0 !== e.removed) {
        0 === e.death && (0 !== i.destroy && 0 === soundLimit[i.destroy] && (AudioUtils.playFx(AudioUtils._fx.damage[i
            .destroy], 1, Math2d.dist(World.PLAYER.x, World.PLAYER.y, e.x, e.y) / 2.5), soundLimit[i.destroy] = 1),
          ia(e, i.particles, a.particlesDist, a.particle)), e.death += delta;
        var o = window.Math.max(0, MathUtils.Ease.outQuart(1 - e.death / 300));
        ctx.globalAlpha = o, _ = window.Math.min(1 + .35 * (1 - o), 1.35)
      } else if (e.born < 700) {
        0 === e.born && a.imgTop !== window.undefined && (0 === Me ? e.breath = window.Math.floor(6e3 * window.Math
          .random()) : (e.heal = window.Math.floor(6e3 * window.Math.random()), e.breath = 3e3));
        o = window.Math.min(1, MathUtils.Ease.outQuart(e.born / 700));
        ctx.globalAlpha = o, _ = .5 * o + .5
      }
      2 == (2 & e.state) && (0 !== i.impact && 0 === soundLimit[i.impact] && (AudioUtils.playFx(AudioUtils._fx.damage[i
          .impact], 1, Math2d.dist(World.PLAYER.x, World.PLAYER.y, e.x, e.y) / 2.8), soundLimit[i.impact] = 1), e
        .hurt = 250, e.hurt2 <= 0 && (e.hurt2 = 300), e.hurtAngle = D * (31 & e.extra) / 31, e.state &= -3, ia(e, i
          .particles, a.particlesDist, 1));
      var t = 0,
        d = 0;
      if (e.hurt > 0) {
        var n = e.hurt > 200 ? 20 * (250 - e.hurt) / 50 : 20 * e.hurt / 200;
        t = window.Math.cos(e.hurtAngle) * n, d = window.Math.sin(e.hurtAngle) * n, e.hurt -= delta
      }
      if (3e3 === e.breath && 0 !== Me && 0 === e.hurt) return CanvasUtils.drawImageHd(a.imgFull, X + e.x + t, j + e.y +
        d, e.angle, 0, 0, _), void(0 !== e.removed ? (e.death > 300 && (e.removed = 2), ctx.globalAlpha = 1) : e
        .born < 700 && (e.born += delta, ctx.globalAlpha = 1));
      if (CanvasUtils.drawImageHd(a.img, X + e.x + t, j + e.y + d, e.angle, 0, 0, _), a.imgTop !== window.undefined) {
        if (t = 0, d = 0, e.hurt2 > 0) {
          n = e.hurt2 > 250 ? 10 * MathUtils.Ease.inQuad((300 - e.hurt2) / 250) : 10 * MathUtils.Ease.outQuad(e.hurt2 /
            250);
          t = window.Math.cos(e.hurtAngle) * n, d = window.Math.sin(e.hurtAngle) * n, e.hurt2 -= delta
        }
        0 === Me ? (e.heal > 0 ? e.heal = window.Math.max(0, e.heal - delta) : e.breath += delta, e.breath > 6e3 && (e
          .breath = 0), e.breath > 3e3 ? _ += .025 * (e.breath - 3e3) / 3e3 : _ += .025 - .025 * e.breath / 3e3) : (
          0 === e.heal && (e.heal = e.breath), e.breath > 6e3 && (e.breath = 0), e.breath > 3e3 ? (e.breath = window
            .Math.max(3e3, e.breath - delta), _ += .025 * (e.breath - 3e3) / 3e3) : e.breath < 3e3 && (e.breath =
            window.Math.min(3e3, e.breath + delta), _ += .025 - .025 * e.breath / 3e3)), CanvasUtils.drawImageHd(a
          .imgTop, X + e.x + t, j + e.y + d, e.angle, 0, 0, _)
      }
      if (0 !== e.removed ? (e.death > 300 && (e.removed = 2), ctx.globalAlpha = 1) : e.born < 700 && (e.born += delta,
          ctx.globalAlpha = 1), pathFinder)
        for (var r = 0; r < pworldWidth; r++)
          for (var l = 0; l < pworldHeight; l++) pworld[e.j][e.i] = 1
    }

    function na(e) {
      de[e.i][e.j].tile = ui, de[e.i][e.j].tilePid = e.pid, de[e.i][e.j].category = window.undefined;
      var i = e.extra >> 5 & 3,
        a = INVENTORY[e.extra >> 7],
        _ = 1;
      if (de[e.i][e.j].category = a.detail.category, 0 !== e.removed) {
        var o;
        if (0 === e.death) ia(e, (o = -1 === a.particles ? INVENTORY[a.id].subtype[e.subtype] : a).particles, o
          .particlesDist, 5), 0 !== o.destroy && 0 === soundLimit[o.destroy] && (AudioUtils.playFx(AudioUtils._fx
            .damage[o.destroy], 1, Math2d.dist(World.PLAYER.x, World.PLAYER.y, e.x, e.y) / 2.5), soundLimit[o
          .destroy] = 1);
        e.death += delta;
        var t = window.Math.max(0, MathUtils.Ease.outQuart(1 - e.death / 300));
        ctx.globalAlpha = t, _ = window.Math.min(1 + .35 * (1 - t), 1.35)
      }
      2 == (2 & e.state) && (e.hurt = 250, e.hurtAngle = D * (31 & e.extra) / 31, e.state &= -3, ia(e, (o = -1 === a
          .particles ? INVENTORY[a.id].subtype[e.subtype] : a).particles, o.particlesDist, 1), 0 !== o.impact && 0 ===
        soundLimit[o.impact] && (AudioUtils.playFx(AudioUtils._fx.damage[o.impact], 1, Math2d.dist(World.PLAYER.x,
          World.PLAYER.y, e.x, e.y) / 2.8), soundLimit[o.impact] = 1));
      var d = 0,
        n = 0;
      if (e.hurt > 0)
        if (e.hurt > 200) {
          var r = 20 * (250 - e.hurt) / 100;
          d = window.Math.cos(e.hurtAngle) * r, n = window.Math.sin(e.hurtAngle) * r, e.hurt -= delta
        } else {
          r = 20 * e.hurt / 200;
          d = window.Math.cos(e.hurtAngle) * r, n = window.Math.sin(e.hurtAngle) * r, e.hurt -= delta
        } if (a.draw(a, e, d, n, i, _), 0 !== e.removed && (e.death > 300 && (e.removed = 2), ctx.globalAlpha = 1),
        pathFinder && INVENTORY[a.id].draw != Render.groundFloor)
        for (var l = 0; l < pworldWidth; l++)
          for (var s = 0; s < pworldHeight; s++) pworld[e.j][e.i] = 1
    }

    function ra(e) {
      de[e.i][e.j].tile = ui, de[e.i][e.j].tilePid = e.pid, de[e.i][e.j].category = window.undefined;
      var i = 1,
        a = e.i,
        o = e.j,
        t = a >= _ - 2 ? _ - 1 : a + 1,
        n = o <= 1 ? 0 : o - 1,
        r = o >= d - 2 ? d - 1 : o + 1;
      for (a = a <= 1 ? 0 : a - 1; a <= t; a++)
        for (o = n; o <= r; o++) {
          var l = de[a][o];
          if (l.frameId === ui)
            for (var s = l.b, g = l.i, m = 0; m < g; m++) {
              var c = s[m],
                I = c.type,
                E = Entitie.units[I][c.cycle];
              E.pid !== World.PLAYER.id && Math2d.dist(E.x, E.y, e.x, e.y) < ENTITIES[I].radius - 4 && (e.rx = e.x, e
                .ry = e.y, e.nx = e.x, e.ny = e.y)
            }
        }
      0 !== e.removed && (e.death += delta, i = window.Math.max(0, MathUtils.Ease.outQuart(1 - e.death / 200)), ctx
        .globalAlpha = i);
      var u = Math2d.fastDist(e.nx, e.ny, e.x, e.y);
      u < 400 || 0 !== e.removed ? (ctx.globalAlpha = window.Math.min(u / 400, i), CanvasUtils.drawImageHd(ENTITIES[
            __ENTITIE_PLAYER__].bullets[e.extra][2], X + e.x, j + e.y, e.angle, 0, 0, 1), ctx.globalAlpha = i,
          CanvasUtils.drawImageHd(ENTITIES[__ENTITIE_PLAYER__].bullets[e.extra][1], X + e.x, j + e.y, e.angle, 0, 0, 1)
          ) : CanvasUtils.drawImageHd(ENTITIES[__ENTITIE_PLAYER__].bullets[e.extra][0], X + e.x, j + e.y, e.angle, 0, 0,
          1), 0 !== e.removed && (e.death > 200 && (e.removed = 2), ctx.globalAlpha = 1)
    }

    function la(e) {
      if (de[e.i][e.j].tile = ui, de[e.i][e.j].tilePid = e.pid, de[e.i][e.j].category = window.undefined, 0 !== e.hit) {
        var i = World.players[e.hit];
        if (ui === i.frameId) {
          var a = Entitie.units[__ENTITIE_PLAYER__][i.locatePlayer];
          e.nx = a.x, e.ny = a.y, e.angleX = window.Math.cos(Math2d.angle(e.rx, e.ry, e.nx, e.ny)), e.angleY = window
            .Math.sin(Math2d.angle(e.rx, e.ry, e.nx, e.ny))
        }
      }
      if (0 === e.removed && Math2d.fastDist(e.x, e.y, e.nx, e.ny) < 1) {
        var _ = Math2d.fastDist(Q, q, e.x, e.y);
        _ < ke && (AutoLoot && Client.sendPacket(window.JSON.stringify([12, e.id])), ke = _, World.PLAYER.loot = e
          .extra, World.PLAYER.lootId = e.id, World.PLAYER.interaction <= 0 ? World.PLAYER.interaction = 0 : World
          .PLAYER.extraLoot = 1)
      }
      var o = 0,
        t = 0;
      if (0 !== e.removed) e.death += delta, ctx.globalAlpha = window.Math.max(0, MathUtils.Ease.outQuart(1 - e.death /
        800)), t = e.death / 2400;
      else if (e.born < 500) {
        var d = window.Math.min(1, MathUtils.Ease.outQuart(e.born / 500));
        ctx.globalAlpha = d
      }
      e.breath = (e.breath + delta) % 1500, o = e.breath < 750 ? .95 + .1 * MathUtils.Ease.inOutQuad(e.breath / 750) :
        .95 + .1 * MathUtils.Ease.inOutQuad(1 - (e.breath - 750) / 750), CanvasUtils.drawImageHd(LOOT[e.extra], X + e.x,
          j + e.y, e.angle, 0, 0, o - t), 0 !== e.removed ? (e.death > 800 && (e.removed = 2), ctx.globalAlpha = 1) : e
        .born < 500 && (e.born += delta, ctx.globalAlpha = 1)
    }

    function sa() {
      var e = 0;
      fe = 0, Se[0] = 0, Se[1] = 0, Se[2] = 0, Se[3] = 0, Be = 12e3, ke = 12e3, World.PLAYER.extraLoot = 0, World.PLAYER
        .buildingId = -1, World.PLAYER.buildingArea = -1, 1 !== World.PLAYER.interaction && (World.PLAYER
          .interaction = -1);
      var i = Entitie.units[ENTITIES.length],
        a = Entitie.border[ENTITIES.length],
        _ = a.border,
        o = Entitie.units[__ENTITIE_BUILD_TOP__],
        t = (n = Entitie.border[__ENTITIE_BUILD_TOP__]).border;
      for (e = 0; e < t; e++) vi(o[n.cycle[e]]);
      for (o = Entitie.units[__ENTITIE_BUILD_GROUND2__], t = (n = Entitie.border[__ENTITIE_BUILD_GROUND2__]).border, e =
        0; e < t; e++) Ni(o[n.cycle[e]]);
      for (e = 0; e < t; e++) na(o[n.cycle[e]]);
      for (e = 0; e < _; e++) {
        (m = i[a.cycle[e]]).type === __ENTITIE_BUILD_GROUND2__ && na(m)
      }
      if (0 !== oe) {
        var d = Entitie.units[__ENTITIE_PARTICLES__];
        t = (n = Entitie.border[__ENTITIE_PARTICLES__]).border;
        for (e = 0; e < t; e++) aa(d[n.cycle[e]]); - 1 !== ea.id && (Entitie.remove(0, ea.id, ea.uid,
          __ENTITIE_PARTICLES__), ea.id = -1)
      }
      o = Entitie.units[__ENTITIE_BUILD_GROUND__], t = (n = Entitie.border[__ENTITIE_BUILD_GROUND__]).border;
      for (e = 0; e < t; e++) na(o[n.cycle[e]]);
      for (e = 0; e < _; e++) {
        (m = i[a.cycle[e]]).type === __ENTITIE_BUILD_GROUND__ && na(m)
      }
      for (resources = Entitie.units[__ENTITIE_RESOURCES_DOWN__], resourceBorder = Entitie.border[
          __ENTITIE_RESOURCES_DOWN__], resourceLen = resourceBorder.border, e = 0; e < resourceLen; e++) da(resources[
        resourceBorder.cycle[e]]);
      for (e = 0; e < _; e++) {
        (m = i[a.cycle[e]]).type === __ENTITIE_RESOURCES_DOWN__ && da(m)
      }
      var n;
      o = Entitie.units[__ENTITIE_BUILD_DOWN__], t = (n = Entitie.border[__ENTITIE_BUILD_DOWN__]).border;
      for (e = 0; e < t; e++) Di(o[n.cycle[e]]);
      for (e = 0; e < t; e++) na(o[n.cycle[e]]);
      for (e = 0; e < _; e++) {
        (m = i[a.cycle[e]]).type === __ENTITIE_BUILD_DOWN__ && na(m)
      }
      var r = Entitie.units[__ENTITIE_PLAYER__],
        l = Entitie.border[__ENTITIE_PLAYER__],
        s = l.border;
      for (e = 0; e < s; e++) {
        var g = l.cycle[e],
          m = r[g],
          c = World.players[m.pid];
        Ji(m), c.locatePlayer = g, c.frameId = ui, Mi(m, g)
      }
      World.PLAYER.loot = -1, World.PLAYER.lootId = -1;
      var I = Entitie.units[__ENTITIE_LOOT__],
        E = Entitie.border[__ENTITIE_LOOT__],
        u = E.border;
      for (e = 0; e < u; e++) la(I[E.cycle[e]]);
      for (e = 0; e < _; e++) {
        (m = i[a.cycle[e]]).type === __ENTITIE_LOOT__ && la(m)
      }
      var L = Entitie.units[__ENTITIE_BULLET__],
        p = Entitie.border[__ENTITIE_BULLET__],
        R = p.border;
      for (e = 0; e < R; e++) ra(L[p.cycle[e]]);
      for (e = 0; e < _; e++) {
        (m = i[a.cycle[e]]).type === __ENTITIE_BULLET__ && ra(m)
      }
      for (resources = Entitie.units[__ENTITIE_RESOURCES_MID__], resourceBorder = Entitie.border[
          __ENTITIE_RESOURCES_MID__], resourceLen = resourceBorder.border, e = 0; e < resourceLen; e++) da(resources[
        resourceBorder.cycle[e]]);
      for (e = 0; e < _; e++) {
        (m = i[a.cycle[e]]).type === __ENTITIE_RESOURCES_MID__ && da(m)
      }
      if (World.gameMode === World.__GHOUL__) {
        for (e = 0; e < s; e++) {
          m = r[l.cycle[e]];
          0 === (w = World.players[m.pid].ghoul) ? Qi(m) : (m.extra = w - 1, ji(m))
        }
        for (e = 0; e < _; e++) {
          var w;
          if ((m = i[a.cycle[e]]).type === __ENTITIE_PLAYER__) Ji(m), 0 === (w = World.players[m.pid].ghoul) ? Qi(m) : (
            m.extra = w - 1, ji(m))
        }
      } else {
        for (e = 0; e < s; e++) Qi(r[l.cycle[e]]);
        for (e = 0; e < _; e++) {
          (m = i[a.cycle[e]]).type === __ENTITIE_PLAYER__ && (Ji(m), Qi(m))
        }
      }
      var T = Entitie.units[__ENTITIE_AI__],
        O = Entitie.border[__ENTITIE_AI__],
        A = O.border;
      for (e = 0; e < A; e++) ji(T[O.cycle[e]]);
      for (e = 0; e < _; e++) {
        (m = i[a.cycle[e]]).type === __ENTITIE_AI__ && ji(m)
      }
      for (o = Entitie.units[__ENTITIE_BUILD_TOP__], t = (n = Entitie.border[__ENTITIE_BUILD_TOP__]).border, e = 0; e <
        t; e++) na(o[n.cycle[e]]);
      for (e = 0; e < _; e++) {
        (m = i[a.cycle[e]]).type === __ENTITIE_BUILD_TOP__ && na(m)
      }
      for (e = 0; e < fe; e++) {
        INVENTORY[he[e].extra >> 7].drawTop(he[e]), he[e] = null
      }
      for (resources = Entitie.units[__ENTITIE_RESOURCES_TOP__], resourceBorder = Entitie.border[
          __ENTITIE_RESOURCES_TOP__], resourceLen = resourceBorder.border, e = 0; e < resourceLen; e++) da(resources[
        resourceBorder.cycle[e]]);
      for (e = 0; e < _; e++) {
        (m = i[a.cycle[e]]).type === __ENTITIE_RESOURCES_TOP__ && da(m)
      }
      for (resources = Entitie.units[__ENTITIE_RESOURCES_STOP__], resourceBorder = Entitie.border[
          __ENTITIE_RESOURCES_STOP__], resourceLen = resourceBorder.border, e = 0; e < resourceLen; e++) da(resources[
        resourceBorder.cycle[e]]);
      for (e = 0; e < _; e++) {
        (m = i[a.cycle[e]]).type === __ENTITIE_RESOURCES_STOP__ && da(m)
      }
      for (explosions = Entitie.units[__ENTITIE_EXPLOSION__], explosionBorder = Entitie.border[__ENTITIE_EXPLOSION__],
        explosionLen = explosionBorder.border, e = 0; e < explosionLen; e++) ta(explosions[explosionBorder.cycle[e]]);
      for (e = 0; e < s; e++) zi(r[l.cycle[e]]);
      if (World.gameMode !== World.__BR__) {
        for (e = 0; e < s; e++) Gi(r[l.cycle[e]]);
        for (e = 0; e < s; e++) Hi(r[l.cycle[e]]);
        if (drawLines)
          for (e = 0; e < s; e++) Yi(r[l.cycle[e]])
      }
      for (e = 0; e < s; e++) _CheckMyPlayer(r[l.cycle[e]]);
      if (drawLines)
        for (e = 0; e < s; e++) ga(r[l.cycle[e]]);
      if (pathFinder)
        for (e = 0; e < s; e++) ma(r[l.cycle[e]])
    }

    function ga(e) {
      var i = World.players[e.pid],
        a = 0;
      if (World.PLAYER.id !== e.pid) {
        var _ = {
            x: scaleby * (e.x + X),
            y: scaleby * (e.y + j)
          },
          o = {
            x: scaleby * (World.PLAYER.x + X),
            y: scaleby * (World.PLAYER.y + j)
          },
          t = "#00FFFF",
          d = "#E5E5E5",
          n = "#FF0000";
        (e.pid === World.PLAYER.id || -1 !== World.PLAYER.team && World.PLAYER.team === World.players[e.pid].team &&
          World.players[e.pid].teamUid === World.teams[World.PLAYER.team].uid) && (a = 1), 1 === a ? (ctx.beginPath(),
            ctx.moveTo(o.x, o.y), ctx.lineTo(_.x, _.y), ctx.lineWidth = 1.2, ctx.strokeStyle = t, ctx.stroke(), ctx
            .beginPath(), ctx.arc(o.x, o.y, 38 * scaleby, 0, 2 * Math.PI), ctx.strokeStyle = t, ctx.stroke()) : -1 === i
          .team ? (ctx.beginPath(), ctx.moveTo(o.x, o.y), ctx.lineTo(_.x, _.y), ctx.lineWidth = 1.2, ctx.strokeStyle =
            d, ctx.stroke(), ctx.beginPath(), ctx.arc(_.x, _.y, 38 * scaleby, 0, 2 * Math.PI), ctx.strokeStyle = d, ctx
            .stroke()) : (ctx.beginPath(), ctx.moveTo(o.x, o.y), ctx.lineTo(_.x, _.y), ctx.lineWidth = 1.2, ctx
            .strokeStyle = n, ctx.stroke(), ctx.beginPath(), ctx.arc(_.x, _.y, 38 * scaleby, 0, 2 * Math.PI), ctx
            .strokeStyle = n, ctx.stroke())
      }
    }

    function ma(e) {
      if (de[e.i][e.j].tile = ui, de[e.i][e.j].tilePid = e.pid, de[e.i][e.j].category = window.undefined, e.pid ===
        World.PLAYER.id && pathFinder) {
        var i = [Math.floor(e.j), Math.floor(e.i)],
          a = [Math.floor(setx), Math.floor(sety)];
        currentPath = function (e, i, a) {
          var _ = Math.abs,
            o = Math.max,
            t = 0,
            d = e[0].length,
            n = e.length,
            r = d * n,
            l = function (e, i) {
              return o(_(e.x - i.x), _(e.y - i.y))
            },
            s = function (e, i, a, _, o, t, d, n, r) {
              e && (a && m(d, o) && r.push({
                x: d,
                y: o
              }), _ && m(n, o) && r.push({
                x: n,
                y: o
              }));
              i && (a && m(d, t) && r.push({
                x: d,
                y: t
              }), _ && m(n, t) && r.push({
                x: n,
                y: t
              }))
            };

          function g(e, i) {
            var a = i - 1,
              _ = i + 1,
              o = e + 1,
              t = e - 1,
              r = a > -1 && m(e, a),
              l = _ < n && m(e, _),
              g = o < d && m(o, i),
              c = t > -1 && m(t, i),
              I = [];
            return r && I.push({
              x: e,
              y: a
            }), g && I.push({
              x: o,
              y: i
            }), l && I.push({
              x: e,
              y: _
            }), c && I.push({
              x: t,
              y: i
            }), s(r, l, g, c, a, _, o, t, I), I
          }

          function m(i, a) {
            return null != e[i] && null != e[i][a] && (e[i][a] <= t || 2 === e[i][a])
          }

          function c(e, i) {
            return {
              Parent: e,
              value: i.x + i.y * d,
              x: i.x,
              y: i.y,
              f: 0,
              g: 0
            }
          }
          return function () {
            for (var e, _, o, t, d, n, s, m, I = c(null, {
                x: i[0],
                y: i[1]
              }), E = c(null, {
                x: a[0],
                y: a[1]
              }), u = new Array(r), L = [I], p = [], R = []; t = L.length;) {
              for (d = r, n = -1, s = 0; s < t; s++) L[s].f < d && (d = L[s].f, n = s);
              if ((_ = L.splice(n, 1)[0]).value === E.value) {
                o = p[p.push(_) - 1];
                do {
                  R.push([o.x, o.y])
                } while (o = o.Parent);
                u = p = L = [], R.reverse()
              } else {
                for (s = 0, m = (e = g(_.x, _.y)).length; s < m; s++) u[(o = c(_, e[s])).value] || (o.g = _.g + l(e[
                  s], _), o.f = o.g + l(e[s], E), L.push(o), u[o.value] = !0);
                p.push(_)
              }
            }
            return R
          }()
        }(pworld, pathStart = i, pathEnd = a), e.currentPath = currentPath, pathFinder && (function (e) {
          e.currentPath = currentPath;
          for (var i = [], a = [], _ = 0; _ < currentPath.length; _++) {
            i.push([o]), a.push([t]);
            var o = scaleby * (100 * currentPath[_][1] + j + 50),
              t = scaleby * (100 * currentPath[_][0] + X + 50)
          }
          for (ctx.beginPath(a[0], i[0]), _ = 1; _ < currentPath.length; _++) ctx.lineTo(a[_], i[_]), ctx
            .strokeStyle = "#00FF7F", ctx.stroke()
        }(e), function () {
          e.currentPath = currentPath;
          var i = scaleby * (100 * e.j + X + 50),
            a = scaleby * (100 * e.i + j + 50);
          ctx.strokeRect(i - 20, a - 20, 40, 40), ctx.strokeStyle = "#00FF7F";
          for (var _ = 0; _ < currentPath.length; _++) var o = scaleby * (100 * currentPath[_][0] + X + 50),
            t = scaleby * (100 * currentPath[_][1] + j + 50);
          ctx.strokeRect(o - 20, t - 20, 40, 40), ctx.strokeStyle = "#e2f553"
        }())
      }
    }
    var ca = CanvasUtils.options.forceResolution,
      Ia = 0,
      Ea = 0,
      ua = 0,
      La = 0,
      pa = 0;
    var Ra = window.document.createElement("canvas"),
      wa = Ra.getContext("2d");
    return {
      globalTime: window.Date.now(),
      reset: function (i, a, g) {
        qi = window.document.getElementById("bod").onresize, World.gameMode === World.__BR__ && (ni.clearRect(0, 0, s,
            s), si.clearRect(0, 0, s, s), Ee = 0), Le = 0, Render.explosionShake = 0, Render.shake = 0, Me = i !==
          window.undefined ? 0 : A, ee = g !== window.undefined ? g : .01, Ue = a !== window.undefined ? a : 0, Q = 0,
          q = 0, World.PLAYER.x = 0, World.PLAYER.y = 0, World.PLAYER._i = 0, World.PLAYER._j = 0, se.effect = 0, se
          .move = 0, ge.effect = 0, ge.move = 0, ea.id = -1, ea.uid = -1;
        var m = localStorage2.getItem("particles");
        null !== m && (oe = window.Number(m)), xi = "", Vi = null, MapManager.width = 150, MapManager.height = 150,
          Render.__TRANSFORM__ = 100 * MapManager.width / 255, _ = MapManager.width, d = MapManager.height, t = e * d,
          n = 824 / (o = e * _), l = (r = 568) + b, c = o / 8, World.setSizeWorld(_, d);
        for (var I = 0; I < d; I++) {
          de[I] = [];
          for (var E = 0; E < _; E++) de[I][E] = new fi
        }
        var u = Entitie.units[0].length;
        for (I = 0; I < u; I++) he[I] = null
      },
      world: function () {
        Render.globalTime += delta, 1 === pa && function () {
            ua <= 0 && Ea + delta > 1500 ? (pa = 0, Ea = 1500) : (ua -= delta, La += delta, Ea = (Ea + delta) % 1500);
            var e = MathUtils.Ease.inOutQuad((Ea > 750 ? 1500 - Ea : Ea) / 750);
            ua < 750 && Ea > 750 && 1500 - Ea > ua ? e = .5 * window.Math.max(0, (1500 - Ea) / 750) + .5 * e : La >
              750 && (e = .5 + .5 * e);
            var i = 20 * e;
            Render.scale = Ia + e, CanvasUtils.options.scheduledRatio = CanvasUtils.options.deviceRatio / (ca + i),
              qi()
          }(), ie = CanvasUtils.lerp(ie, Render.scale + Se[0] + Se[1] + Se[2] + Se[3], ee), ae = scaleby, canwns =
          canw / (scaleby += ie * scaleby), canhns = canh / scaleby,
          function () {
            for (var e = Entitie.units[__ENTITIE_PLAYER__], i = Entitie.border[__ENTITIE_PLAYER__], _ = i.border, o =
                0; o < _; o++) {
              var t = e[i.cycle[o]];
              if (t.pid === World.PLAYER.id) {
                Me = Math2d.fastDist(World.PLAYER.x, World.PLAYER.y, t.x, t.y) < 1 ? window.Math.max(0, Me - delta) :
                  A;
                var d = ENTITIES[__ENTITIE_PLAYER__].clothes[255 & t.extra],
                  n = World.gauges;
                d.rad !== window.undefined ? (n.rad.bonus = d.rad, n.cold.bonus = d.warm) : (n.rad.bonus = 0, n.cold
                    .bonus = 0), Q = t.x, q = t.y, World.PLAYER.x = t.x, World.PLAYER.y = t.y, World.PLAYER._i = t.i,
                  World.PLAYER._j = t.j, World.PLAYER.isBuilding = 6 === ENTITIES[__ENTITIE_PLAYER__].weapons[t
                    .extra >> 8 & 255].type ? 1 : 0;
                var r = window.Math.min(canh4ns, canw4ns),
                  l = (r = Mouse.dist > r ? a * window.Math.min((Mouse.dist - r) / r, 1) : 0) * window.Math.cos(Mouse
                    .angle),
                  s = r * window.Math.sin(Mouse.angle);
                Z = CanvasUtils.lerp(Z, l, .025), $ = CanvasUtils.lerp($, s, .025);
                var g = 0,
                  m = 0;
                return Render.shake > 0 && (Render.shake -= 1, g += 6 * window.Math.random() - 3, m += 6 * window.Math
                    .random() - 3), Render.explosionShake > 0 && (Render.explosionShake -= 1, g += 18 * window.Math
                    .random() - 9, m += 18 * window.Math.random() - 9), X = canw2 / scaleby - t.x - Z + g, j = canh2 /
                  scaleby - t.y - $ + m, t.x + Z, t.y + $, rowx = ~~((Mouse.x * scaleby / scaleby + Z - canw2 /
                    scaleby + Q) / 100), void(rowy = ~~((Mouse.y * scaleby / scaleby + $ - canh2 / scaleby + q) /
                    100))
              }
            }
          }(), Bi(), Ki(), sa(),
          function () {
            var a = 0;
            if (1 === World.PLAYER.isBuilding && 0 !== World.PLAYER.blueprint) {
              var o = INVENTORY[World.PLAYER.blueprint];
              0 !== o.subtype && ((o = o.subtype[World.PLAYER.furniture]).redprint = o.building, o.blueprint = o
                .building, o.xCenter = Xi, o.yCenter = Xi);
              var t = Mouse.angle,
                n = 1 === o.wall ? 0 : World.PLAYER.buildRotate;
              World.PLAYER.jBuild = World.PLAYER._j + window.Math.floor((i + window.Math.cos(t) * e) / e), World
                .PLAYER.iBuild = World.PLAYER._i + window.Math.floor((i + window.Math.sin(t) * e) / e);
              var r = o.xCenter[n] + X + i + e * World.PLAYER.jBuild,
                l = o.yCenter[n] + j + i + e * World.PLAYER.iBuild;
              if (World.PLAYER.jBuild >= 0 && World.PLAYER.iBuild >= 0 && World.PLAYER.jBuild < _ && World.PLAYER
                .iBuild < d) {
                var s = de[World.PLAYER.iBuild][World.PLAYER.jBuild],
                  g = -1 === World.PLAYER.team ? -2 : World.PLAYER.team;
                s.tile !== ui || 2 === o.zid && 0 !== s.tilePid && s.category !== SKILLS.__PLANT__ ? (o.detail
                  .category === SKILLS.__PLANT__ || 2 === o.zid || 0 !== s.pid && s.pid !== World.PLAYER.id && World
                  .players[s.pid].team !== g) && s.ground === ui || o.iTile !== window.undefined && (n % 2 == 0 && (
                  World.PLAYER.iBuild < 1 || World.PLAYER.iBuild >= d - 1 || de[World.PLAYER.iBuild + 1][World
                    .PLAYER.jBuild
                  ].tile === ui || de[World.PLAYER.iBuild + 1][World.PLAYER.jBuild].ground === ui && de[World
                    .PLAYER.iBuild + 1][World.PLAYER.jBuild].pid !== World.PLAYER.id && 0 !== de[World.PLAYER
                    .iBuild + 1][World.PLAYER.jBuild].pid && World.players[de[World.PLAYER.iBuild + 1][World
                    .PLAYER.jBuild
                  ].pid].team !== g || de[World.PLAYER.iBuild - 1][World.PLAYER.jBuild].tile === ui || de[World
                    .PLAYER.iBuild - 1][World.PLAYER.jBuild].ground === ui && de[World.PLAYER.iBuild - 1][World
                    .PLAYER.jBuild
                  ].pid !== World.PLAYER.id && 0 !== de[World.PLAYER.iBuild - 1][World.PLAYER.jBuild].pid && World
                  .players[de[World.PLAYER.iBuild - 1][World.PLAYER.jBuild].pid].team !== g) || n % 2 == 1 && (
                  World.PLAYER.jBuild < 1 || World.PLAYER.jBuild >= _ - 1 || de[World.PLAYER.iBuild][World.PLAYER
                    .jBuild + 1
                  ].tile === ui || de[World.PLAYER.iBuild][World.PLAYER.jBuild + 1].ground === ui && de[World
                    .PLAYER.iBuild][World.PLAYER.jBuild + 1].pid !== World.PLAYER.id && 0 !== de[World.PLAYER
                    .iBuild][World.PLAYER.jBuild + 1].pid && World.players[de[World.PLAYER.iBuild][World.PLAYER
                    .jBuild + 1
                  ].pid].team !== g || de[World.PLAYER.iBuild][World.PLAYER.jBuild - 1].tile === ui || de[World
                    .PLAYER.iBuild][World.PLAYER.jBuild - 1].ground === ui && de[World.PLAYER.iBuild][World.PLAYER
                    .jBuild - 1
                  ].pid !== World.PLAYER.id && 0 !== de[World.PLAYER.iBuild][World.PLAYER.jBuild - 1].pid && World
                  .players[de[World.PLAYER.iBuild][World.PLAYER.jBuild - 1].pid].team !== g || World.PLAYER._i ===
                  World.PLAYER.iBuild)) ? (World.PLAYER.canBuild = 0, CanvasUtils.drawImageHd(o.redprint, r, l, n *
                  v, 0, 0, 1)) : (World.PLAYER.canBuild = 1, CanvasUtils.drawImageHd(o.blueprint, r, l, n * v, 0, 0,
                  1)) : (World.PLAYER.canBuild = 1, CanvasUtils.drawImageHd(o.redprint, r, l, n * v, 0, 0, 1))
              }
              if (1 !== le.isLoaded) return void(le = CanvasUtils.loadImage(u, le));
              a = 1 === o.wall || World.PLAYER.interaction >= 0 ? window.Math.max(0, World.PLAYER.hintRotate -
                delta) : window.Math.min(900, World.PLAYER.hintRotate + delta)
            } else a = window.Math.max(0, World.PLAYER.hintRotate - delta);
            if (a > 0) {
              ctx.globalAlpha = MathUtils.Ease.outQuad(window.Math.max(0, a - 600) / 300);
              var m = scaleby * le.width / 2,
                c = scaleby * le.height / 2;
              ctx.drawImage(le, (X + Q) * scaleby - m / 2, window.Math.max(10 * scaleby, (j + q) * scaleby - c / 2 -
                65 * scaleby - 60 * scaleby), m, c), ctx.globalAlpha = 1
            }
            World.PLAYER.hintRotate = a
          }(), World.transition > 0 && function () {
            var e, i, a = ctx;
            i = 1 - MathUtils.Ease.inQuad(World.transition / 1e3), Ra.width = canvas.width, Ra.height = canvas.height,
              (ctx = wa).save();
            var _ = CanvasUtils.options.scheduledRatio / CanvasUtils.options.backingStoreRatio;
            ctx.scale(_, _), e = INVENTORY2, INVENTORY2 = INVENTORY, INVENTORY = e, e = PARTICLES2, PARTICLES2 =
              PARTICLES, PARTICLES = e, e = LOOT2, LOOT2 = LOOT, LOOT = e, e = RESOURCES2, RESOURCES2 = RESOURCES,
              RESOURCES = e, e = ENTITIES2, ENTITIES2 = ENTITIES, ENTITIES = e, e = LIGHTFIRE2, LIGHTFIRE2 =
              LIGHTFIRE, LIGHTFIRE = e, e = GROUND2, GROUND2 = GROUND, GROUND = e, e = AI2, AI2 = AI, AI = e, ctx
              .fillStyle = 0 === World.day ? "#0B2129" : "#3D5942", ctx.fillRect(0, 0, canw, canh), Bi(), sa(), e =
              INVENTORY2, INVENTORY2 = INVENTORY, INVENTORY = e, e = PARTICLES2, PARTICLES2 = PARTICLES, PARTICLES =
              e, e = LOOT2, LOOT2 = LOOT, LOOT = e, e = RESOURCES2, RESOURCES2 = RESOURCES, RESOURCES = e, e =
              ENTITIES2, ENTITIES2 = ENTITIES, ENTITIES = e, e = LIGHTFIRE2, LIGHTFIRE2 = LIGHTFIRE, LIGHTFIRE = e,
              e = GROUND2, GROUND2 = GROUND, GROUND = e, e = AI2, AI2 = AI, AI = e, ctx.restore(), (ctx = a)
              .globalAlpha = i, ctx.drawImage(Ra, 0, 0, canw, canh), ctx.globalAlpha = 1, World.transition = window
              .Math.max(0, World.transition - delta), 0 === World.transition && World.changeDayCycle()
          }(), Entitie.cleanRemoved(), ui++;
        for (var o = 0; o < SOUND_LENGTH; o++) soundLimit[o] = 0;
        canwns = canw / (scaleby = ae), canhns = canh / scaleby
      },
      minimap: function (e, i) {
        if (function (e, i) {
            if (1 === oi.isLoaded) {
              if (Game.acceptMember.pos.x = e + 241 * scaleby, Game.acceptMember.pos.y = i + 6 * scaleby, Game
                .refuseMember.pos.x = e + 290 * scaleby, Game.refuseMember.pos.y = i + 6 * scaleby, 0 !== World.PLAYER
                .teamJoin || World.PLAYER.teamEffect > 0) {
                0 !== World.PLAYER.teamJoin ? World.PLAYER.teamEffect < 333 && (ctx.globalAlpha = World.PLAYER
                  .teamEffect / 333, World.PLAYER.teamEffect += delta) : (ctx.globalAlpha = World.PLAYER
                  .teamEffect / 333, World.PLAYER.teamEffect = window.Math.max(0, World.PLAYER.teamEffect - delta));
                var a = World.players[World.PLAYER.teamJoin];
                null === a.nicknameLabel && (a.nicknameLabel = GUI.renderText(a.nickname, "'Viga', sans-serif",
                    "#FFFFFF", 38, 400, window.undefined, 16, 25, window.undefined, window.undefined, window
                    .undefined, window.undefined, "#000000", 12)), ctx.drawImage(oi, e, i, scaleby * oi.wh, scaleby *
                    oi.h2), 0 !== a.nicknameLabel.width && 0 !== a.nicknameLabel.height && ctx.drawImage(a
                    .nicknameLabel, e + 20 * scaleby, i + 6 * scaleby, a.nicknameLabel.wh * scaleby, a.nicknameLabel
                    .h2 * scaleby), Game.acceptMember.draw(), Game.refuseMember.draw(), World.PLAYER.teamEffect <
                  333 && (ctx.globalAlpha = 1)
              }
            } else oi = CanvasUtils.loadImage(w, oi)
          }(e + 250 * scaleby, i), 1 === ze.isLoaded) {
          var a = n * Q,
            _ = n * q,
            o = window.Math.min(window.Math.max(0, a - b), r),
            t = window.Math.min(window.Math.max(0, _ - b), r),
            d = b * scaleby;
          if (ctx.drawImage(ze, o, t, O, O, e, i, d, d), World.gameMode === World.__GHOUL__ && (0 !== World.PLAYER
              .ghoul ? Pi(-255, i) : Fi(e + 50, i, 1)), World.gameMode === World.__BR__) {
            var s = World.PLAYER.toxicMap[window.Math.floor(q / c)][window.Math.floor(Q / c)];
            0 !== s && s < World.PLAYER.toxicStep && 8 !== World.PLAYER.toxicStep ? (Ee = window.Math.min(1e3, Ee +
                delta), ctx.globalAlpha = MathUtils.Ease.inQuad(Ee / 500), CanvasUtils.drawImageHd(Ie, canw2ns, 58,
                0, 0, 0, 1), ctx.globalAlpha = 1) : Ee > 0 && (Ee = window.Math.max(0, Ee - delta), ctx.globalAlpha =
                MathUtils.Ease.inQuad(Ee / 500), CanvasUtils.drawImageHd(Ie, canw2ns, 58, 0, 0, 0, 1), ctx
                .globalAlpha = 1), ctx.drawImage(ri.img, o / 2, t / 2, b, b, e, i, d, d), ctx.globalAlpha = mi > 600 ?
              MathUtils.Ease.inOutQuad((1200 - mi) / 600) : MathUtils.Ease.inOutQuad(mi / 600), mi = (mi + delta) %
              1200, ctx.drawImage(gi.img, o / 2, t / 2, b, b, e, i, d, d), ctx.globalAlpha = 1, Pi(0, i), Fi(e, i, 0)
          } else 0 === World.PLAYER.ghoul && (1 === World.gauges.rad.decrease ? (Le = window.Math.min(1e3, Le +
            delta), ctx.globalAlpha = MathUtils.Ease.inQuad(Le / 500), CanvasUtils.drawImageHd(ue, canw2ns, 58, 0,
              0, 0, 1), ctx.globalAlpha = 1) : Le > 0 && (Le = window.Math.max(0, Le - delta), ctx.globalAlpha =
            MathUtils.Ease.inQuad(Le / 500), CanvasUtils.drawImageHd(ue, canw2ns, 58, 0, 0, 0, 1), ctx
            .globalAlpha = 1));
          a = o >= r ? window.Math.min((a - l) / 2 + y, b - 8) : a < b ? window.Math.max(15, a / 2) : y, _ = t >= r ?
            window.Math.min((_ - l) / 2 + y, b - 8) : _ < b ? window.Math.max(15, _ / 2) : y;
          var g = e / scaleby,
            m = i / scaleby;
          if (-1 !== World.PLAYER.team || 0 !== World.PLAYER.ghoul && World.playerAlive < 6)
            for (var I = Entitie.units[__ENTITIE_PLAYER__], E = 0; E < World.PLAYER.teamLength; E++) {
              var u = World.PLAYER.teamPos[E];
              if (!(u.old < 0)) {
                var L = World.players[u.id];
                if (ui === L.frameId + 1) {
                  var p = I[L.locatePlayer];
                  Math2d.fastDist(L.rx, L.ry, p.x, p.y) < 1e3 && (L.rx = p.x, L.ry = p.y), L.x = p.x, L.y = p.y, R = p
                    .angle
                } else var R = L.x % D;
                var T = g + window.Math.max(15, window.Math.min(b - 15, a - 3 + (L.rx - Q) * n)),
                  A = m + window.Math.max(15, window.Math.min(b - 15, _ - 3 + (L.ry - q) * n));
                CanvasUtils.drawImageHd(Ke, T, A, R, 0, 0, 1)
              }
            }
          if (World.PLAYER.badKarmaDelay > 0) {
            L = World.players[World.PLAYER.badKarma];
            if (ui === L.frameId + 1) {
              p = (I = Entitie.units[__ENTITIE_PLAYER__])[L.locatePlayer];
              Math2d.fastDist(L.rx, L.ry, p.x, p.y) < 1e3 && (L.rx = p.x, L.ry = p.y), L.x = p.x, L.y = p.y
            }
            CanvasUtils.drawImageHd(KARMA[L.KARMA], g + window.Math.max(15, window.Math.min(b - 15, a - 3 + (L.rx -
              Q) * n)), m + window.Math.max(15, window.Math.min(b - 15, _ - 3 + (L.ry - q) * n)), 0, 0, 0, 1.25)
          }
          T = g + (a - 3), A = m + (_ - 3);
          if (CanvasUtils.drawImageHd(Ge, T, A, Mouse.angle, 0, 0, 1), 0 === World.PLAYER.ghoul && (World.PLAYER
              .skillPoint > 0 || se.effect > 0)) {
            var S = (se.move + delta) % 1e3;
            se.move = S, se.move < 500 ? e += 260 + 15 * MathUtils.Ease.inOutQuad(S / 500) : e += 260 + 15 * MathUtils
              .Ease.inOutQuad((1e3 - S) / 500), ctx.globalAlpha = MathUtils.Ease.inQuad(se.effect), CanvasUtils
              .drawImageHd(se, e, i + 31, 0, 0, 0, 1), ctx.globalAlpha = 1, World.PLAYER.skillPoint <= 0 || 1 === Game
              .getSkillBoxState() ? se.effect = window.Math.max(0, se.effect - delta / 500) : se.effect < 1 && (se
                .effect = window.Math.min(1, se.effect + delta / 500))
          }
        } else ze = CanvasUtils.loadImage("https://devast.io/img/borderBigMinimap2.png", ze)
      },
      bigminimap: function (e, i) {
        var a = s * scaleby,
          _ = g * scaleby,
          d = canw2 - a / 2,
          n = window.Math.max(canh2 - _ / 2, 0),
          r = d / scaleby,
          l = n / scaleby,
          m = s / o,
          c = g / t;
        i.pos.x = window.Math.floor(d + a + 0 * scaleby), i.pos.y = window.Math.floor(n + 0 * scaleby), e.draw();
        var I = World.PLAYER.cities,
          E = I.length / 2;
        if (E > 0) {
          b = window.Math.floor(n / scaleby + window.Math.min(window.Math.max(10, I[0] * c), 400)), A = window.Math
            .floor(d / scaleby + window.Math.min(window.Math.max(10, I[1] * m), 400)), CanvasUtils.drawImageHd(Xe, A,
              b, 0, 0, 0, 1);
          for (var u = 1; u < E; u++) b = window.Math.floor(n / scaleby + window.Math.min(window.Math.max(10, I[2 *
            u] * c), 400)), A = window.Math.floor(d / scaleby + window.Math.min(window.Math.max(10, I[1 + 2 * u] *
            m), 400)), CanvasUtils.drawImageHd(Je, A, b, 0, 0, 0, 1)
        }
        if (World.gameMode === World.__BR__) {
          var L = r + 205,
            p = l + 205;
          CanvasUtils.drawImageHd(ri, L, p, 0, 0, 0, 2), ctx.globalAlpha = mi > 600 ? MathUtils.Ease.inOutQuad((1200 -
              mi) / 600) : MathUtils.Ease.inOutQuad(mi / 600), CanvasUtils.drawImageHd(gi, L, p, 0, 0, 0, 2), ctx
            .globalAlpha = 1
        }
        if (i.draw(), -1 !== World.PLAYER.team || 0 !== World.PLAYER.ghoul && World.playerAlive < 6) {
          var R = Entitie.units[__ENTITIE_PLAYER__];
          for (u = 0; u < World.PLAYER.teamLength; u++) {
            var w = World.PLAYER.teamPos[u];
            if (!(w.old < 0)) {
              var T, O = World.players[w.id],
                A = window.Math.floor(r + window.Math.min(window.Math.max(10, O.rx * m), 400)),
                b = window.Math.floor(l + window.Math.min(window.Math.max(10, O.ry * m), 400));
              T = ui === O.frameId + 1 ? R[O.locatePlayer].angle : O.x % D, CanvasUtils.drawImageHd(Ke, A, b, T, 0, 0,
                1)
            }
          }
        }
        if (A = window.Math.floor(d / scaleby + window.Math.min(window.Math.max(10, Q * m), 400)), b = window.Math
          .floor(n / scaleby + window.Math.min(window.Math.max(10, q * c), 400)), CanvasUtils.drawImageHd(Ge, A, b,
            Mouse.angle, 0, 0, 1), World.PLAYER.badKarmaDelay > 0) {
          O = World.players[World.PLAYER.badKarma];
          CanvasUtils.drawImageHd(KARMA[O.KARMA], window.Math.floor(r + window.Math.min(window.Math.max(10, O.rx * m),
            400)), window.Math.floor(l + window.Math.min(window.Math.max(10, O.ry * m), 400)), 0, 0, 0, 1.25)
        }
      },
      gauges: function (e, i) {
        var a = World.gauges.life,
          _ = a.current / a._max;
        CanvasUtils.fillRect(ctx, e / scaleby + 14, i / scaleby + 71, 189 * _, 16, "#70BD56");
        var o = World.gauges.food;
        _ = o.current / o._max, CanvasUtils.fillRect(ctx, e / scaleby + 13, i / scaleby + 162, 54, 63 * -_,
        "#e58833");
        var t = World.gauges.cold;
        _ = t.current / t._max, CanvasUtils.fillRect(ctx, e / scaleby + 81, i / scaleby + 162, 54, 63 * -_,
        "#55B7BC");
        var d = World.gauges.stamina;
        _ = d.current / d._max, CanvasUtils.fillRect(ctx, e / scaleby + 150, i / scaleby + 162, 54, 63 * -_,
          "#d7c83a");
        var n = World.gauges.xp;
        _ = n.current / n._max, CanvasUtils.fillRect(ctx, e / scaleby + 226, i / scaleby + 172, 16, 77 * -_,
          "#FFFFFF");
        var r, l, s = World.updateHour();
        if (s >= 1e7) {
          if (1 !== je.isLoaded) return void(je = CanvasUtils.loadImage(R, je));
          s -= 1e7, r = je, l = qe
        } else {
          if (1 !== Qe.isLoaded) return void(Qe = CanvasUtils.loadImage(p, Qe));
          r = Qe, l = Ze
        }
        var g = scaleby * r.width / 2,
          m = scaleby * r.height / 2;
        ctx.drawImage(r, e + 100 * scaleby, i + 14 * scaleby, g, m), CanvasUtils.drawImageHd(l, 144.5 + e / scaleby,
          i / scaleby + 56, s * N, 0, 0, 1);
        var c = null;
        if (drawLines) {
          null === c && (c = GUI.renderText(~~a.current, "'Viga', sans-serif", "#00FF00", 25, 400, window.undefined,
            16, 25, window.undefined, window.undefined, window.undefined, window.undefined, "#000000", 10));
          var I = c,
            E = (g = scaleby * I.width / 2.1, m = scaleby * I.height / 2.1, e + 100 * scaleby),
            u = i + 14 * scaleby;
          ctx.drawImage(I, E, u, g, m)
        }
      },
      gaugesAfter: function (e, i) {
        var a = World.PLAYER.level;
        ne[a] === window.undefined && (ne[a] = {
          img: GUI.renderText("" + a, "'Black Han Sans', sans-serif", "#ffffff", 44, 250, window.undefined, 18,
            15, window.undefined, window.undefined, window.undefined, window.undefined, "#000000", 15)
        }, ne[a].img.isLoaded = 1), CanvasUtils.drawImageHd(ne[a], e / scaleby + 234, i / scaleby + 79, 0, 0, 0, 1);
        var _ = World.gauges.rad,
          o = 1 - _.current / _._max;
        CanvasUtils.drawImageHd($e, 38 + e / scaleby, 37 + i / scaleby, window.Math.PI * o, 0, 0, 1)
      },
      leaderboard: function (e, i) {
        var a = World.leaderboard,
          _ = World.players,
          o = -1;
        if (1 === World.newLeaderboard) {
          o = 1, World.newLeaderboard = 0, Ii.clearRect(0, 0, 699, 738);
          for (var t = 0; t < a.length && 0 !== a[t]; t++) {
            var d = _[a[t]];
            if (World.PLAYER.id === a[t] && (o = 0), 0 === d.nickname) break;
            null === d.leaderboardLabel && (d.id === World.PLAYER.id ? d.leaderboardLabel = GUI.renderText(d.nickname,
                  "'Viga', sans-serif", "#D6C823", 40, 350, window.undefined, 0, 12) : d.leaderboardLabel = GUI
                .renderText(d.nickname, "'Viga', sans-serif", "#ffffff", 40, 350, window.undefined, 0, 12)), null ===
              d.scoreLabel && (d.id === World.PLAYER.id ? d.scoreLabel = GUI.renderText(d.scoreSimplified,
                "'Viga', sans-serif", "#D6C823", 40, 150, window.undefined, 5, 12) : d.scoreLabel = GUI.renderText(d
                .scoreSimplified, "'Viga', sans-serif", "#ffffff", 40, 150, window.undefined, 5, 12)), 0 !== d
              .leaderboardLabel.width && 0 !== d.leaderboardLabel.height && Ii.drawImage(d.leaderboardLabel, 90, 114 +
                50 * t, d.leaderboardLabel.width, d.leaderboardLabel.height), Ii.drawImage(d.scoreLabel, 484, 114 +
                50 * t, d.scoreLabel.width, d.scoreLabel.height), 1 === (n = KARMA[d.KARMA].img).isLoaded && Ii
              .drawImage(n, 612, 114 + 50 * t, n.width, n.height)
          }
          var n;
          if (World.PLAYER.inLeaderboard = o, 1 === o) 1 === (n = KARMA[World.PLAYER.KARMA].img).isLoaded && Ii
            .drawImage(n, 375, 645, 1.5 * n.width, 1.5 * n.height)
        }
        var r = World.PLAYER.exp;
        if (1 === o || 1 === World.PLAYER.inLeaderboard && r !== World.PLAYER.lastScore) {
          d = _[World.PLAYER.id];
          Ii.clearRect(480, 657, 112, 60), r !== World.PLAYER.lastScore && (World.PLAYER.lastScore = r, d.scoreLabel =
            GUI.renderText(MathUtils.simplifyNumber(r), "'Viga', sans-serif", "#ffffff", 40, 150, window.undefined,
              5, 12)), Ii.drawImage(d.scoreLabel, 484, 662, d.scoreLabel.width, d.scoreLabel.height)
        }
        ctx.drawImage(ci, e, i, 233 * scaleby, 246 * scaleby)
      },
      inventory: function (e, i, a, _) {
        var o = Game.inventory;
        if (1 === re.isLoaded) {
          var t = World.PLAYER.inventory,
            d = t.length,
            n = re.width * scaleby / 2,
            r = re.height * scaleby / 2,
            l = window.Math.max(300 * scaleby, (canw - n * d) / 2),
            s = canh - r - 5 * scaleby,
            g = l,
            m = s,
            c = 5 * scaleby + n;
          d > 10 && (_.pos.x = canw - 69 * scaleby, _.pos.y = canh - 68 * scaleby, _.draw(), 0 === _.open && (d =
          10));
          for (var I = 0; I < d; I++) {
            var E = o[I];
            0 === t[I][0] ? (E.pos.x = g, E.pos.y = m, ctx.drawImage(re, g, m, n, r)) : Wi(E, t[I], g, m, e, i), 9 ===
              I ? (g = _.pos.x - 5 * scaleby, m = _.pos.y - c) : 12 === I ? (g -= c, m = _.pos.y - c) : I > 9 ? m -=
              c : g += c
          }
          var u = World.PLAYER.drag;
          if (1 === u.begin && Mouse.state === Mouse.__MOUSE_DOWN__ && Math2d.dist(u.x, u.y, Mouse.x, Mouse.y) > 4 *
            scaleby) {
            var L = t[u.id][0];
            if (L > 0) {
              var p = INVENTORY[L].itemButton.img[0];
              0 === p.isLoaded && (p = INVENTORY2[L].itemButton.img[0]), ctx.globalAlpha = .7;
              n = 68 * scaleby;
              ctx.drawImage(p, Mouse.x * scaleby - n / 2, Mouse.y * scaleby - n / 2, n, n), ctx.globalAlpha = 1
            }
          } else - 1 !== a && 0 !== t[a][0] && (a < 10 ? Ci(t[a][0], l + c * a, s - 79 * scaleby) : Ci(t[a][0], a <
            13 ? _.pos.x - 200 * scaleby : _.pos.x - 200 * scaleby - c, _.pos.y + c * ((10 - a) % 3 - 1)))
        } else re = CanvasUtils.loadImage("https://devast.io/img/inv-empty.png", re)
      },
      buttonInv: Wi,
      config: function (e, i, a, _, o, t, d, n, r, l, s, g, m, c) {
        e.draw();
        var I = e.pos.x,
          E = e.pos.y;
        s.pos.x = I + 265 * scaleby, s.pos.y = E + 0 * scaleby, s.draw(), o.pos.x = I + 87 * scaleby, o.pos.y = E +
          15 * scaleby, 1 === Keyboard.isAzerty() && o.setState(GUI.__BUTTON_CLICK__), o.draw(), t.pos.x = I + 173 *
          scaleby, t.pos.y = E + 15 * scaleby, 1 === Keyboard.isQwerty() && t.setState(GUI.__BUTTON_CLICK__), t
        .draw(), _.pos.x = I + 87 * scaleby, _.pos.y = E + 62 * scaleby, 3 === CanvasUtils.options.forceResolution &&
          _.setState(GUI.__BUTTON_CLICK__), _.draw(), a.pos.x = I + 147 * scaleby, a.pos.y = E + 62 * scaleby, 2 ===
          CanvasUtils.options.forceResolution && a.setState(GUI.__BUTTON_CLICK__), a.draw(), i.pos.x = I + 207 *
          scaleby, i.pos.y = E + 62 * scaleby, 1 === CanvasUtils.options.forceResolution && i.setState(GUI
            .__BUTTON_CLICK__), i.draw(), d.pos.x = I + 87 * scaleby, d.pos.y = E + 117 * scaleby, 1 === AudioUtils
          .options.isAudio && d.setState(GUI.__BUTTON_CLICK__), d.draw(), n.pos.x = I + 147 * scaleby, n.pos.y = E +
          117 * scaleby, 0 === AudioUtils.options.isAudio && n.setState(GUI.__BUTTON_CLICK__), n.draw(), r.pos.x = I +
          87 * scaleby, r.pos.y = E + 167 * scaleby, 1 === AudioUtils.options.isFx && r.setState(GUI
          .__BUTTON_CLICK__), r.draw(), l.pos.x = I + 147 * scaleby, l.pos.y = E + 167 * scaleby, 0 === AudioUtils
          .options.isFx && l.setState(GUI.__BUTTON_CLICK__), l.draw(), c.pos.x = I + 87 * scaleby, c.pos.y = E + 217 *
          scaleby, 0 === oe && c.setState(GUI.__BUTTON_CLICK__), c.draw(), m.pos.x = I + 147 * scaleby, m.pos.y = E +
          217 * scaleby, 1 === oe && m.setState(GUI.__BUTTON_CLICK__), m.draw(), g.pos.x = I + 207 * scaleby, g.pos
          .y = E + 217 * scaleby, 2 === oe && g.setState(GUI.__BUTTON_CLICK__), g.draw()
      },
      craft: function (e, i, a, _, o, t, d, n, r, l, s, g, m, c) {
        e.draw();
        var I = e.pos.x,
          E = e.pos.y;
        i.pos.x = I + 594 * scaleby, i.pos.y = E + 0 * scaleby, i.draw();
        for (var u = World.PLAYER.craftAvailable, L = World.PLAYER.recipeAvailable, p = World.PLAYER.craftCategory,
            R = World.PLAYER.craftArea, w = 0; w < a.length; w++) {
          var T = a[w];
          w === p && T.setState(GUI.__BUTTON_CLICK__), T.pos.x = 10 * scaleby + I + 47 * w * scaleby, T.pos.y = E -
            40 * scaleby, T.draw()
        }
        var O = 0;
        for (w = 0; w < d.length; w++) {
          if (w === R && 1 === World.PLAYER.isInBuilding);
          else if (w !== World.PLAYER.buildingArea && 0 !== w) continue;
          T = d[w];
          w === R && T.setState(GUI.__BUTTON_CLICK__), T.pos.x = I - 40 * scaleby, T.pos.y = 10 * scaleby + E + 43 *
            O * scaleby, T.draw(), O++
        }
        n.pos.x = I + 364 * scaleby, n.pos.y = E + 27 * scaleby, n.draw();
        var A = Game.craft,
          b = World.PLAYER.craftLen,
          y = 49 * scaleby,
          S = 49 * scaleby,
          U = 58 * scaleby,
          h = 30 * scaleby,
          f = 34 * scaleby,
          D = 1;
        for (Pe < 500 ? (D += .08 * MathUtils.Ease.inQuad(Pe / 500), Pe += delta) : (D += .08 * MathUtils.Ease
            .outQuad(1 - (Pe - 500) / 500), (Pe += delta) > 1e3 && (Pe = 0)), D = window.Math.max(1, window.Math.min(
            1.08, D)), w = 0; w < b; w++) {
          (T = A[w]).pos.x = h + I + w % 5 * U, T.pos.y = f + E + window.Math.floor(w / 5) * U;
          var v = u[w];
          0 === v ? (ctx.globalAlpha = .45, T.draw(), ctx.globalAlpha = 1) : 2 === v ? (T.setState(GUI.__BUTTON_IN__),
            T.draw()) : (ctx.globalAlpha = .6, CanvasUtils.drawImageHd(Fe, T.pos.x / scaleby + 24.5, T.pos.y /
            scaleby + 24.5, 0, 0, 0, D), ctx.globalAlpha = 1, T.draw())
        }
        var N = 0;
        if (-1 === World.PLAYER.craftCategory) {
          if (1 === World.PLAYER.isInBuilding ? (_.pos.x = I + 454 * scaleby, _.pos.y = E + 153 * scaleby, 1 === World
              .PLAYER.craftAvailable[World.PLAYER.craftIdSelected] && World.PLAYER.building.len < 4 && 0 !== World
              .PLAYER.building.fuel ? _.draw() : (ctx.globalAlpha = .5, _.setState(GUI.__BUTTON_OUT__), _.draw(), ctx
                .globalAlpha = 1)) : 0 === World.PLAYER.crafting ? (_.pos.x = I + 454 * scaleby, _.pos.y = E + 153 *
              scaleby, 1 === World.PLAYER.craftAvailable[World.PLAYER.craftIdSelected] ? _.draw() : (ctx.globalAlpha =
                .5, _.setState(GUI.__BUTTON_OUT__), _.draw(), ctx.globalAlpha = 1)) : (o.pos.x = I + 454 * scaleby, o
              .pos.y = E + 153 * scaleby, o.draw()), 1 !== Ce.isLoaded) return void(Ce = CanvasUtils.loadImage(
            "https://devast.io/img/craft-gauge.png", Ce));
          1 === World.PLAYER.isInBuilding ? 0 !== World.PLAYER.building.time && 0 !== World.PLAYER.building.fuel && ((
                N = World.PLAYER.building.time - window.Date.now()) < 0 && (World.PLAYER.building.time = 0), N =
              MathUtils.Ease.inOutQuad(1 - N / World.PLAYER.building.timeMax)) : 0 !== World.PLAYER.crafting && ((N =
                World.PLAYER.crafting - window.Date.now()) < 0 && (World.PLAYER.crafting = 0), N = MathUtils.Ease
              .inOutQuad(1 - N / World.PLAYER.craftingMax)), N = window.Math.min(1, window.Math.max(0, N)), y =
            scaleby * Ce.width / 2, S = scaleby * Ce.height / 2;
          var M = I + 356 * scaleby,
            W = E + 206 * scaleby;
          ctx.fillStyle = "#A29742", h = 2 * (U = 3 * scaleby), ctx.fillRect(window.Math.floor(M + U), window.Math
            .floor(W + U), window.Math.floor((y - h) * N), window.Math.floor(S - h)), ctx.drawImage(Ce, M, W, y, S)
        } else {
          var C = World.PLAYER.craftAvailable[World.PLAYER.craftIdSelected];
          if (t.pos.x = I + 454 * scaleby, t.pos.y = E + 153 * scaleby, 1 === C) t.draw();
          else if (0 === C) {
            if (ctx.globalAlpha = .5, t.setState(GUI.__BUTTON_OUT__), t.draw(), ctx.globalAlpha = 1, World.PLAYER
              .craftSelected !== hi) {
              Ui.clearRect(0, 0, 420, 148), hi = World.PLAYER.craftSelected;
              var F = INVENTORY[hi].detail,
                P = 20;
              if (F.level > World.PLAYER.level) {
                var x = GUI.renderText("Require level " + F.level + " or higher", "'Viga', sans-serif", "#D8BA3D", 30,
                  600);
                Ui.drawImage(x, 20, P), P += 50
              }
              if (-1 !== F.previous && World.PLAYER.skillUnlocked[F.previous] === window.undefined) {
                x = GUI.renderText("Unlock " + INVENTORY[F.previous].detail.name + " before", "'Viga', sans-serif",
                  "#D8BA3D", 30, 600);
                Ui.drawImage(x, 20, P), P += 50
              }
              if (World.PLAYER.skillPoint < F.price) {
                x = GUI.renderText("Cost " + F.price + " skill point" + (1 !== F.price ? "s" : ""),
                  "'Viga', sans-serif", "#D8BA3D", 30, 600);
                Ui.drawImage(x, 20, P)
              }
            }
            ctx.drawImage(Si, I + 356 * scaleby, E + 211 * scaleby, scaleby * Si.width / 2, scaleby * Si.height / 2)
          } else t.setState(GUI.__BUTTON_CLICK__), t.draw()
        }
        if (1 === World.PLAYER.isInBuilding) {
          if ((K = World.PLAYER.building.fuel) >= 0)(T = R === AREAS.__SMELTER__ || R === AREAS.__EXTRACTOR__ || R ===
              AREAS.__AGITATOR__ ? g : R === AREAS.__TESLA__ ? m : s).pos.x = I + 532 * scaleby, T.pos.y = E + 153 *
            scaleby, 255 !== World.PLAYER.building.fuel ? T.draw() : (ctx.globalAlpha = .5, T.setState(GUI
              .__BUTTON_OUT__), T.draw(), ctx.globalAlpha = 1), l[K] === window.undefined && (l[K] = {
              img: GUI.renderText("x" + K, "'Black Han Sans', sans-serif", "#FFFF00", 30, 250, window.undefined, 15,
                12, window.undefined, window.undefined, window.undefined, window.undefined, "#000000", 12)
            }, l[K].img.isLoaded = 1), CanvasUtils.drawImageHd(l[K], T.pos.x / scaleby + 42, T.pos.y / scaleby + 42, -
              .5, 0, 0, .9);
          var V = Game.queue,
            B = World.PLAYER.building.pos;
          b = World.PLAYER.building.len, y = 40 * scaleby, S = 40 * scaleby, U = 62 * scaleby, h = 356 * scaleby, f =
            237 * scaleby;
          for (w = 0; w < b; w++) {
            T = V[w];
            w === B ? 0 !== N && (ctx.globalAlpha = .6, CanvasUtils.drawImageHd(Fe, T.pos.x / scaleby + 20, T.pos.y /
                scaleby + 20, 0, 0, 0, .85 * window.Math.max(.01, window.Math.min(1, N))), ctx.globalAlpha = 1) : w <
              B && (ctx.globalAlpha = .6, CanvasUtils.drawImageHd(Fe, T.pos.x / scaleby + 20, T.pos.y / scaleby + 20,
                0, 0, 0, .85 * D), ctx.globalAlpha = 1), T.pos.x = h + I + w * U, T.pos.y = f + E, T.draw()
          }
        }
        var k = Game.tools;
        for (b = World.PLAYER.toolsLen, U = 45 * scaleby, h = 356 * scaleby, f = 151 * scaleby, w = 0; w < b; w++) {
          (T = k[w]).pos.x = h + I + w * U, T.pos.y = f + E, T.draw()
        }
        if (World.PLAYER.skillPoint !== yi) {
          bi.clearRect(0, 0, 280, 50), yi = World.PLAYER.skillPoint;
          x = GUI.renderText("SKILL POINT: " + yi, "'Viga', sans-serif", "#FFFFFF", 32, 400);
          bi.drawImage(x, 24, 12)
        }
        if (ctx.drawImage(Ai, I + 455 * scaleby, E + 378 * scaleby, scaleby * Ai.width / 2, scaleby * Ai.height / 2),
          World.PLAYER.craftSelected !== wi && (Ri.clearRect(0, 0, 280, 148), wi = World.PLAYER.craftSelected, ki(Ri,
            wi)), ctx.drawImage(pi, I + 439 * scaleby, E + 24 * scaleby, scaleby * pi.width / 2, scaleby * pi.height /
            2), World.PLAYER.skillPoint > 0 || ge.effect > 0) {
          var H = (ge.move + delta) % 1e3;
          ge.move = H;
          var Y = E / scaleby;
          ge.move < 500 ? Y += -62 - 15 * MathUtils.Ease.inOutQuad(H / 500) : Y += -62 - 15 * MathUtils.Ease
            .inOutQuad((1e3 - H) / 500), ctx.globalAlpha = MathUtils.Ease.inQuad(ge.effect), CanvasUtils.drawImageHd(
              ge, 266 + e.pos.x / scaleby, Y, 0, 0, 0, 1), ctx.globalAlpha = 1, World.PLAYER.skillPoint <= 0 ? ge
            .effect = window.Math.max(0, ge.effect - delta / 500) : ge.effect < 1 && (ge.effect = window.Math.min(1,
              ge.effect + delta / 500))
        }
        var G = Game.recipe;
        for (b = World.PLAYER.recipeLen, y = 40 * scaleby, S = 40 * scaleby, U = 45 * scaleby, h = 356 * scaleby, f =
          107 * scaleby, w = 0; w < b; w++) {
          var K;
          (T = G[w]).pos.x = h + I + w * U, T.pos.y = f + E, r[K = window.Math.abs(L[w])] === window.undefined && (r[
              K] = {
              img: GUI.renderText("x" + K, "'Black Han Sans', sans-serif", "#ffffff", 30, 250, window.undefined, 15,
                12, window.undefined, window.undefined, window.undefined, window.undefined, "#000000", 12)
            }, r[K].img.isLoaded = 1), L[w] < 0 ? (ctx.globalAlpha = .45, T.draw(), CanvasUtils.drawImageHd(r[K], T
              .pos.x / scaleby + 30, T.pos.y / scaleby + 32, -.5, 0, 0, .9), ctx.globalAlpha = 1) : (T.draw(),
              CanvasUtils.drawImageHd(r[K], T.pos.x / scaleby + 30, T.pos.y / scaleby + 32, -.5, 0, 0, .9)), c ===
            w && World.PLAYER.recipeList[w] > 0 && Ci(World.PLAYER.recipeList[w], T.pos.x, T.pos.y + 45 * scaleby)
        }
      },
      chest: function (e, i, a, _) {
        e.draw();
        var o = e.pos.x,
          t = e.pos.y;
        i.pos.x = o + 161 * scaleby, i.pos.y = t + 0 * scaleby, i.draw();
        for (var d, n = World.PLAYER.chest, r = t + 14 * scaleby, l = Game.chest, s = 0; s < 4; s++) s % 2 == 0 ? (d =
          o + 12.5 * scaleby, 2 === s && (r += 71 * scaleby)) : d += 72 * scaleby, 0 !== n[s][0] && Wi(l[s], n[s],
          d, r, a, _)
      },
      team: function (e, i, a, _, o, t, d, n) {
        var r = 0,
          l = 0;
        if (-1 === World.PLAYER.team) {
          var s = 1;
          if (0 === Game.teamName.length) s = 0;
          else
            for (var g = 0; g < World.teams.length; g++)
              if (World.teams[g].name === Game.teamName) {
                s = 0;
                break
              } World.PLAYER.teamNameValid = s, r = i.pos.x, l = i.pos.y, i.draw(), e.pos.x = r + 513 * scaleby, e.pos
            .y = l + 2 * scaleby, xi !== Game.teamName && (xi = Game.teamName, Vi = GUI.renderText(xi,
              "'Viga', sans-serif", "#FFFFFF", 30, 400)), null !== Vi && 0 !== xi.length && (CanvasUtils.fillRect(ctx,
              r / scaleby + 39, l / scaleby + 14, 122, 16.5, "#000000"), ctx.drawImage(Vi, r + 35 * scaleby, l +
              14.5 * scaleby, Vi.wh * scaleby, Vi.h2 * scaleby)), o.pos.x = r + 172 * scaleby, o.pos.y = l + 6 *
            scaleby, 0 === s || window.Date.now() - World.PLAYER.teamCreateDelay < 30500 ? (o.setState(GUI
              .__BUTTON_OUT__), ctx.globalAlpha = .5, o.draw(), ctx.globalAlpha = 1) : o.draw();
          var m = 0;
          for (g = 0; g < 18; g++) {
            if (0 !== (c = World.teams[g]).leader) null === c.label && (c.label = GUI.renderText(c.name,
              "'Viga', sans-serif", "#FFFFFF", 30, 400)), ctx.drawImage(c.label, r + (20 + m % 3 * 163) * scaleby,
              l + (58.5 + 36 * window.Math.floor(m / 3)) * scaleby, c.label.wh * scaleby, c.label.h2 * scaleby), (
              I = Game.join[m]).pos.x = r + (84 + m % 3 * 163) * scaleby, I.pos.y = l + (48 + 36 * window.Math
              .floor(m / 3)) * scaleby, window.Date.now() - World.PLAYER.teamDelay < 10500 ? (I.setState(GUI
              .__BUTTON_OUT__), ctx.globalAlpha = .5, I.draw(), ctx.globalAlpha = 1) : I.draw(), m++
          }
        } else {
          var c;
          if (r = a.pos.x, l = a.pos.y, null === (c = World.teams[World.PLAYER.team]).label && (c.label = GUI
              .renderText(c.name, "'Viga', sans-serif", "#FFFFFF", 30, 400)), ctx.drawImage(c.label, r + 144 *
              scaleby, l + 13 * scaleby, c.label.wh * scaleby, c.label.h2 * scaleby), a.draw(), e.pos.x = r + 512 *
            scaleby, e.pos.y = l + 34.5 * scaleby, 1 === World.PLAYER.teamLeader) {
            0 === World.PLAYER.teamLocked ? (t.pos.x = r + 259 * scaleby, t.pos.y = l + 5 * scaleby, t.draw()) : (d
                .pos.x = r + 259 * scaleby, d.pos.y = l + 5 * scaleby, d.draw()), n.pos.x = r + 311.5 * scaleby, n.pos
              .y = l + 5 * scaleby, n.draw();
            for (m = 0, g = 0; g < World.players.length; g++) {
              var I, E = World.players[g];
              if (c.uid === E.teamUid && E.team === c.id) null === E.nicknameLabel && (E.nicknameLabel = GUI
                  .renderText(E.nickname, "'Viga', sans-serif", "#FFFFFF", 38, 400, window.undefined, 16, 25, window
                    .undefined, window.undefined, window.undefined, window.undefined, "#000000", 12)), 0 !== E
                .nicknameLabel.width && 0 !== E.nicknameLabel.height && ctx.drawImage(E.nicknameLabel, r + (26 + m %
                    3 * 166.5) * scaleby, l + (53 + 29.5 * window.Math.floor(m / 3)) * scaleby, E.nicknameLabel.wh *
                  scaleby / 2.2, E.nicknameLabel.h2 * scaleby / 2.2), (I = Game.kick[m]).pos.x = r + (132 + m % 3 *
                  166.5) * scaleby, I.pos.y = l + (48.5 + 29.5 * window.Math.floor(m / 3)) * scaleby, window.Date
                .now() - World.PLAYER.teamDelay < 10500 || E.id === World.PLAYER.id ? (I.setState(GUI.__BUTTON_OUT__),
                  ctx.globalAlpha = .5, I.draw(), ctx.globalAlpha = 1) : I.draw(), m++
            }
          } else {
            _.pos.x = r + 311.5 * scaleby, _.pos.y = l + 5 * scaleby, _.draw();
            for (m = 0, g = 0; g < World.players.length; g++) {
              E = World.players[g];
              c.uid === E.teamUid && E.team === c.id && (null === E.nicknameLabel && (E.nicknameLabel = GUI
                  .renderText(E.nickname, "'Viga', sans-serif", "#FFFFFF", 38, 400, window.undefined, 16, 25, window
                    .undefined, window.undefined, window.undefined, window.undefined, "#000000", 12)), 0 !== E
                .nicknameLabel.width && 0 !== E.nicknameLabel.height && ctx.drawImage(E.nicknameLabel, r + (26 + m %
                    3 * 166.5) * scaleby, l + (53 + 29.5 * window.Math.floor(m / 3)) * scaleby, E.nicknameLabel.wh *
                  scaleby / 2.2, E.nicknameLabel.h2 * scaleby / 2.2), m++)
            }
          }
        }
        e.draw()
      },
      interaction: function () {
        if (0 === World.PLAYER.ghoul) {
          var e = World.PLAYER.wrongToolTimer;
          if (e > 0) {
            ctx.globalAlpha = e < 500 ? MathUtils.Ease.inQuad(e / 500) : e > 1500 ? MathUtils.Ease.inQuad(1 - (e -
              1500) / 500) : 1;
            var i = 1 === World.PLAYER.wrongTool ? Ve : LOOT[INVENTORY[World.PLAYER.wrongTool].loot];
            CanvasUtils.drawImageHd(xe, canw2ns, 50, 0, 0, 0, 1), CanvasUtils.drawImageHd(i, canw2ns, 50, 0, 0, 0, 1),
              ctx.globalAlpha = 1, World.PLAYER.wrongToolTimer -= delta
          }
          switch (World.PLAYER.interaction) {
          case 0:
            if (1 !== be.isLoaded) return void(be = 0 === isTouchScreen ? CanvasUtils.loadImage("https://devast.io/img/loot.png", be) :
              CanvasUtils.loadImage(I, be));
            var a = (s = scaleby + ie * scaleby) / scaleby,
              _ = scaleby * be.width / 2,
              o = scaleby * be.height / 2,
              t = (X + Q) * s - _ / 2,
              d = window.Math.max(10 * scaleby, (j + q) * s - o / 2 - 65 * s - 60 * scaleby);
            1 === isTouchScreen && (Game.xInteract = t, Game.yInteract = d, Game.widthInteract = _, Game
              .heightInteract = o), ctx.drawImage(be, t, d, _, o);
            var n = LOOT[World.PLAYER.loot];
            t = (X + Q) * a - _ / (2 * scaleby), d = window.Math.max(10, (j + q) * a - o / (2 * scaleby) - 65 * a -
              60), CanvasUtils.drawImageHd(n, t + 77, d + 33, n.angle, 0, 0, n.scale);
            break;
          case 1:
            var r = World.PLAYER.interactionDelay / World.PLAYER.interactionWait,
              l = World.PLAYER.interactionWait - World.PLAYER.interactionDelay;
            if (World.PLAYER.interactionDelay -= delta, World.PLAYER.interactionDelay < 0) return void(World.PLAYER
              .interaction = -1);
            if (1 !== De.isLoaded) return void(De = CanvasUtils.loadImage("https://devast.io/img/timer.png", De));
            if (1 !== ve.isLoaded) return void(ve = CanvasUtils.loadImage("https://devast.io/img/timer-arrow.png", ve));
            if (1 !== Ne.isLoaded) return void(Ne = CanvasUtils.loadImage("https://devast.io/img/timer-lights.png", Ne));
            var s = scaleby + ie * scaleby,
              g = (_ = scaleby * De.width / 2, o = scaleby * De.height / 2, (X + Q) * s),
              m = (j + q) * s;
            t = g - _ / 2, d = window.Math.max(10 * s, m - o / 2 - 65 * s - 60 * scaleby);
            l < 100 ? ctx.globalAlpha = l / 100 : World.PLAYER.interactionDelay < 100 && (ctx.globalAlpha = World
              .PLAYER.interactionDelay / 100), ctx.drawImage(De, t, d, _, o), ctx.save(), ctx.translate(g, window
              .Math.max(10 * s + o / 2, m - 65 * s - 60 * scaleby)), ctx.rotate(-D * r), ctx.drawImage(ve, -_ / 2, -
              o / 2, _, o), ctx.restore(), ctx.drawImage(Ne, t, d, _, o), ctx.globalAlpha = 1;
            break;
          case 2:
            var c = World.PLAYER.eInteract.img;
            if (1 !== c.isLoaded) return void(World.PLAYER.eInteract.img = 0 === isTouchScreen ? CanvasUtils
              .loadImage(World.PLAYER.eInteract.src, c) : CanvasUtils.loadImage(World.PLAYER.eInteract.src
                .replace("e-", "e-isTouchScreen-"), c));
            s = scaleby + ie * scaleby, _ = scaleby * c.width / 2, o = scaleby * c.height / 2;
            t = 1 === World.PLAYER.extraLoot ? (X + Q - 5) * s - _ : (X + Q) * s - _ / 2;
            d = window.Math.max(10 * scaleby, (j + q) * s - o / 2 - 65 * s - 60 * scaleby);
            if (1 === isTouchScreen && (Game.xInteract = t, Game.yInteract = d, Game.widthInteract = _, Game
                .heightInteract = o), ctx.drawImage(c, t, d, _, o), 1 === World.PLAYER.extraLoot) {
              if (1 !== ye.isLoaded) return void(ye = 0 === isTouchScreen ? CanvasUtils.loadImage("https://devast.io/img/loot2.png",
                ye) : CanvasUtils.loadImage(I, be));
              a = s / scaleby;
              _ = scaleby * ye.width / 2, o = scaleby * ye.height / 2, t += _ + 10 * scaleby, d = window.Math.max(10 *
                scaleby, (j + q) * s - o / 2 - 65 * s - 60 * scaleby), 1 === isTouchScreen && (Game.xInteract2 = t,
                Game.yInteract2 = d), ctx.drawImage(ye, t, d, _, o);
              n = LOOT[World.PLAYER.loot];
              t = (X + Q) * a + 5, d = window.Math.max(10, (j + q) * a - o / (2 * scaleby) - 65 * a - 60), CanvasUtils
                .drawImageHd(n, t + 77, d + 33, n.angle, 0, 0, n.scale)
            }
          }
        }
      },
      alertServer: function () {
        Home.alertDelay > 0 && (Home.alertDelay > 2500 ? ctx.globalAlpha = MathUtils.Ease.inOutQuad((3e3 - Home
            .alertDelay) / 500) : Home.alertDelay > 500 ? ctx.globalAlpha = 1 : ctx.globalAlpha = MathUtils.Ease
          .inOutQuad(Home.alertDelay / 500), 0 === Home.alertId ? CanvasUtils.drawImageHd(ai, canw2ns, ai.img.h2 /
            2, 0, 0, 0, 1) : 1 === Home.alertId ? CanvasUtils.drawImageHd(ii, canw2ns, ii.img.h2 / 2, 0, 0, 0, 1) :
          2 === Home.alertId ? CanvasUtils.drawImageHd(ei, canw2ns, ei.img.h2 / 2, 0, 0, 0, 1) : 3 === Home
          .alertId && CanvasUtils.drawImageHd(_i, canw2ns, _i.img.h2 / 2, 0, 0, 0, 1), ctx.globalAlpha = 1, Home
          .alertDelay -= delta)
      },
      shake: 0,
      explosionShake: 0,
      scale: -0,
      setParticles: function (e) {
        localStorage2.setItem("particles", "" + e), oe = e
      },
      setDetection: function (e) {
        Me = 0
      },
      setPoisonEffect: function (e) {
        0 === pa && (Ia = Render.scale, Render.scale = .8, Ea = 0, ua = e, La = 0, pa = 1, ca = CanvasUtils.options
          .deviceRatio / CanvasUtils.options.scheduledRatio)
      },
      stopPoisonEffect: function () {
        ua = 0
      },
      __TILE_SCALE__: 1,
      __TILE_SIZE__: e,
      __TILE_SIZE2__: i,
      __TRANSFORM__: 0,
      wall: function (e, i, a, o, t, n) {
        i.broke > 0 ? CanvasUtils.drawImageHd(e.broken[i.broke - 1], X + i.x + a, j + i.y + o, 0, 0, 0, n) :
          CanvasUtils.drawImageHd(e.building[function (e) {
            if (e.hurt > 0 || 0 !== e.removed) return 0;
            var i, a = e.i,
              o = e.j,
              t = INVENTORY[e.extra >> 7],
              n = t.idWall,
              r = 0,
              l = 0,
              s = 0,
              g = 0,
              m = 0;
            return a - 1 >= 0 && (i = de[a - 1][o]).wallFrame === ui && i.wall === n && (s = 1, r += C), a + 1 <
              d && (i = de[a + 1][o]).wallFrame === ui && i.wall === n && (r += F, g = 1), o - 1 >= 0 && (i = de[
                a][o - 1]).wallFrame === ui && i.wall === n && (r += M, m = 1), o + 1 < _ && (i = de[a][o + 1])
              .wallFrame === ui && i.wall === n && (r += W, l = 1), l + s === 2 && (i = de[a - 1][o + 1])
              .wallFrame === ui && i.wall === n && (r += V), m + s === 2 && (i = de[a - 1][o - 1]).wallFrame ===
              ui && i.wall === n && (r += B), g + l === 2 && (i = de[a + 1][o + 1]).wallFrame === ui && i.wall ===
              n && (r += P), g + m === 2 && (i = de[a + 1][o - 1]).wallFrame === ui && i.wall === n && (r += x),
              r = z[r], de[a][o].drawFloor = t.drawFloor[r], r
          }(i)], X + i.x + a, j + i.y + o, 0, 0, 0, n)
      },
      lowWall: function (e, i, a, o, t, n) {
        var r = i.broke > 0 ? e.broken[i.broke - 1] : e.building[function (e, i) {
            if (e.hurt > 0 || 0 !== e.removed) return 0;
            var a = e.i,
              o = e.j,
              t = e.extra >> 7,
              n = 0;
            switch (i) {
            case 0:
              a + 1 < d && (r = de[a + 1][o]).wallFrame === ui && r.wall === t && (1 === r.rotate ? n += k : 3 === r
                .rotate && (n += H)), o - 1 >= 0 && ((r = de[a][o - 1]).wallFrame !== ui || r.wall !== t || 3 !==
                r.rotate && 0 !== r.rotate || (n += Y)), o + 1 < _ && ((r = de[a][o + 1]).wallFrame !== ui || r
                .wall !== t || 1 !== r.rotate && 0 !== r.rotate || (n += G));
              break;
            case 1:
              o - 1 >= 0 && (r = de[a][o - 1]).wallFrame === ui && r.wall === t && (0 === r.rotate ? n += H : 2 ===
                r.rotate && (n += k)), a - 1 >= 0 && ((r = de[a - 1][o]).wallFrame !== ui || r.wall !== t || 0 !==
                r.rotate && 1 !== r.rotate || (n += Y)), a + 1 < d && ((r = de[a + 1][o]).wallFrame !== ui || r
                .wall !== t || 2 !== r.rotate && 1 !== r.rotate || (n += G));
              break;
            case 2:
              a - 1 >= 0 && (r = de[a - 1][o]).wallFrame === ui && r.wall === t && (1 === r.rotate ? n += H : 3 ===
                r.rotate && (n += k)), o - 1 >= 0 && ((r = de[a][o - 1]).wallFrame !== ui || r.wall !== t || 3 !==
                r.rotate && 2 !== r.rotate || (n += G)), o + 1 < _ && ((r = de[a][o + 1]).wallFrame !== ui || r
                .wall !== t || 1 !== r.rotate && 2 !== r.rotate || (n += Y));
              break;
            case 3:
              var r;
              o + 1 < _ && (r = de[a][o + 1]).wallFrame === ui && r.wall === t && (0 === r.rotate ? n += k : 2 === r
                .rotate && (n += H)), a - 1 >= 0 && ((r = de[a - 1][o]).wallFrame !== ui || r.wall !== t || 0 !==
                r.rotate && 3 !== r.rotate || (n += G)), a + 1 < d && ((r = de[a + 1][o]).wallFrame !== ui || r
                .wall !== t || 2 !== r.rotate && 3 !== r.rotate || (n += Y))
            }
            return K[i][n]
          }(i, t)],
          l = r.img;
        if (1 === l.isLoaded) {
          var s = scaleby * l.width / 2 * n,
            g = scaleby * l.height / 2 * n;
          ctx.save(), ctx.translate(scaleby * (X + i.x + a), scaleby * (j + i.y + o)), ctx.rotate(t * v), ctx
            .translate(e.xRotate * scaleby - s / 2, e.yRotate * scaleby - g / 2), ctx.drawImage(l, -e.xRotate *
              scaleby, -e.yRotate * scaleby, s, g), ctx.restore()
        } else r.img = CanvasUtils.loadImage(r.src, r.img)
      },
      door: function (a, _, o, t, d, n) {
        var r = _.state >> 4 & 1;
        1 === _a(a, _, 0 === _.pid ? 0 : 1) && 1 === r && (World.PLAYER.eInteract = a.interactclose), _.hit !== r && (
          _.hitMax = 500, _.hit = r), _.hitMax > 0 && (_.hitMax = window.Math.max(0, _.hitMax - delta));
        var l = a.angle;
        l *= 0 === r ? MathUtils.Ease.inOutQuad(_.hitMax / 500) : MathUtils.Ease.inOutQuad(1 - _.hitMax / 500);
        var s = _.broke > 0 ? a.broken[_.broke - 1] : a.building,
          g = s.img;
        if (1 === g.isLoaded) {
          var m = scaleby * g.width / 2 * n,
            c = scaleby * g.height / 2 * n;
          if (ctx.save(), ctx.translate(scaleby * (X + _.x + o), scaleby * (j + _.y + t)), ctx.rotate(d * v), ctx
            .translate(a.xRotate * scaleby - m / 2, a.yRotate * scaleby - c / 2), ctx.rotate(l), ctx.drawImage(g, -a
              .xRotate * scaleby, -a.yRotate * scaleby, m, c), ctx.restore(), 32 == (32 & _.state) && (_.state -= 32,
              0 === _.breath && 0 === o && 0 === t && (_.breath = 600)), _.breath > 0) {
            if (1 !== Ae.isLoaded) return void(Ae = CanvasUtils.loadImage(L, Ae));
            _.breath > 400 ? ctx.globalAlpha = MathUtils.Ease.outQuad(1 - (_.breath - 400) / 200) : _.breath < 200 &&
              (ctx.globalAlpha = MathUtils.Ease.outQuad(_.breath / 200));
            t = scaleby * (_.i * e + j + i), o = scaleby * (_.j * e + X + i);
            var I = scaleby * Ae.width / 2,
              E = scaleby * Ae.height / 2;
            ctx.drawImage(Ae, o - I / 2, t - E / 2, I, E), ctx.globalAlpha = 1, _.breath = window.Math.max(0, _
              .breath - delta)
          }
        } else s.img = CanvasUtils.loadImage(s.src, s.img)
      },
      workbench: function (e, i, a, _, o, t) {
        var d = i.state >> 4 & 1;
        1 === d ? i.hit = window.Math.min(500, i.hit + delta) : i.hit > 0 && (i.hit = window.Math.max(0, i.hit -
          delta)), 0 === d && _a(e, i, 0), CanvasUtils.drawImageHd(e.building, X + i.x + a, j + i.y + _, o * v, 0,
          0, t), i.hit > 0 && oa(i, a, _)
      },
      campfire: function (e, i, a, _, o, t) {
        var d = i.state >> 4 & 1;
        1 === d ? i.hit = window.Math.min(500, i.hit + delta) : i.hit > 0 && (i.hit = window.Math.max(0, i.hit -
          delta)), 0 === d && _a(e, i, 0), CanvasUtils.drawImageHd(e.building, X + i.x + a, j + i.y + _, o * v, 0,
          0, t), 1 === (i.state >> 5 & 1) ? i.hitMax = window.Math.min(500, i.hitMax + delta) : i.hitMax > 0 && (i
          .hitMax = window.Math.max(0, i.hitMax - delta)), i.hitMax > 0 && (he[fe++] = i), i.hit > 0 && oa(i, a, _)
      },
      campfireLight: function (e) {
        ctx.globalAlpha = MathUtils.Ease.outQuad(e.hitMax / 500), e.heal = (e.heal + delta) % 1e3;
        for (var i = 0; i < 3; i++) {
          var a = 1 + .15 * ((_ = (e.heal + 333 * i) % 1e3) < 500 ? _ / 500 : 1 - (_ - 500) / 500);
          CanvasUtils.drawImageHd(LIGHTFIRE[i], X + e.x + LIGHTFIREX[i], j + e.y + LIGHTFIREY[i], 0, 0, 0, a)
        }
        var _;
        e.breath2 = (e.breath2 + delta) % 5e3, a = 1 + .15 * ((_ = e.breath2) < 2500 ? _ / 2500 : 1 - (_ - 2500) /
            2500), CanvasUtils.drawImageHd(LIGHTFIRE[3], X + e.x + LIGHTFIREX[3], j + e.y + LIGHTFIREY[3], 0, 0, 0,
          a), ctx.globalAlpha = 1
      },
      smelter: function (e, i, a, _, o, t) {
        var d = (o + 1) % 2,
          n = o % 2;
        de[i.i + d][i.j + n].tile = ui, de[i.i - d][i.j - n].tile = ui, de[i.i + d][i.j + n].tilePid = i.pid, de[i.i -
            d][i.j - n].tilePid = i.pid, de[i.i + d][i.j + n].category = window.undefined, de[i.i - d][i.j - n]
          .category = window.undefined;
        var r = i.state >> 4 & 1;
        1 === r ? i.hit = window.Math.min(500, i.hit + delta) : i.hit > 0 && (i.hit = window.Math.max(0, i.hit -
          delta)), 0 === r && _a(e, i, 0), 1 === (i.state >> 5 & 1) ? i.hitMax = window.Math.min(1e4, i.hitMax +
          delta) : i.hitMax > 0 && (i.hitMax = window.Math.max(0, i.hitMax - delta));
        var l = 0;
        i.hitMax > 0 ? (l = MathUtils.Ease.outQuad(i.hitMax / 1e4), a += (2 * window.Math.random() - 1) * l, _ += (2 *
            window.Math.random() - 1) * l, CanvasUtils.drawImageHd(e.building[1], X + i.x + a, j + i.y + _, o * v,
            0, 0, t)) : CanvasUtils.drawImageHd(e.building[0], X + i.x + a, j + i.y + _, o * v, 0, 0, t), i.hit > 0 &&
          oa(i, a, _)
      },
      compost: function (e, i, a, _, o, t) {
        var d = i.state >> 4 & 1;
        1 === d ? i.hit = window.Math.min(500, i.hit + delta) : i.hit > 0 && (i.hit = window.Math.max(0, i.hit -
          delta)), 0 === d && _a(e, i, 0), 1 === (i.state >> 5 & 1) ? i.hitMax = window.Math.min(1e4, i.hitMax +
          delta) : i.hitMax > 0 && (i.hitMax = window.Math.max(0, i.hitMax - delta));
        var n = 0;
        i.hitMax > 0 ? (n = MathUtils.Ease.outQuad(i.hitMax / 1e4), a += (2 * window.Math.random() - 1) * n, _ += (2 *
            window.Math.random() - 1) * n, CanvasUtils.drawImageHd(e.building[0], X + i.x + a, j + i.y + _, o * v,
            0, 0, t)) : CanvasUtils.drawImageHd(e.building[1], X + i.x + a, j + i.y + _, o * v, 0, 0, t), i.hit > 0 &&
          oa(i, a, _)
      },
      agitator: function (e, i, a, _, o, t) {
        var d = i.state >> 4 & 1;
        1 === d ? i.hit = window.Math.min(500, i.hit + delta) : i.hit > 0 && (i.hit = window.Math.max(0, i.hit -
          delta)), 0 === d && _a(e, i, 0), 1 === (i.state >> 5 & 1) ? i.hitMax = window.Math.min(1e4, i.hitMax +
          delta) : i.hitMax > 0 && (i.hitMax = window.Math.max(0, i.hitMax - delta));
        var n = 0;
        i.hitMax > 0 ? (n = MathUtils.Ease.outQuad(i.hitMax / 1e4), i.heal += n * delta / 300, CanvasUtils
          .drawImageHd(e.building[1], X + i.x + a, j + i.y + _, o * v, 0, 0, t), CanvasUtils.drawImageHd(e.building[
            2], X + i.x + a + e.spine[o][0], j + i.y + _ + e.spine[o][1], o * v + i.heal, 0, 0, t), CanvasUtils
          .drawImageHd(e.building[3], X + i.x + a, j + i.y + _, o * v, 0, 0, t)) : CanvasUtils.drawImageHd(e
          .building[0], X + i.x + a, j + i.y + _, o * v, 0, 0, t), i.hit > 0 && oa(i, a, _)
      },
      extractor: function (e, i, a, _, o, t) {
        var d = i.state >> 4 & 1;
        1 === d ? i.hit = window.Math.min(500, i.hit + delta) : i.hit > 0 && (i.hit = window.Math.max(0, i.hit -
          delta)), 0 === d && _a(e, i, 0), 1 === (i.state >> 5 & 1) ? i.hitMax = window.Math.min(1e4, i.hitMax +
          delta) : i.hitMax > 0 && (i.hitMax = window.Math.max(0, i.hitMax - delta));
        var n = 0;
        i.hitMax > 0 ? (n = MathUtils.Ease.outQuad(i.hitMax / 1e4), a += (2 * window.Math.random() - 1) * n, _ += (2 *
          window.Math.random() - 1) * n, i.heal += n * delta / 300, CanvasUtils.drawImageHd(e.building[1], X + i
          .x + a + e.spine[o][0], j + i.y + _ + e.spine[o][1], o * v + i.heal, 0, 0, t), CanvasUtils.drawImageHd(e
          .building[0], X + i.x + a, j + i.y + _, o * v, 0, 0, t)) : CanvasUtils.drawImageHd(e.building[2], X + i
          .x + a, j + i.y + _, o * v, 0, 0, t), i.hit > 0 && oa(i, a, _)
      },
      workbench2: function (e, i, a, _, o, t) {
        var d = (o + 1) % 2,
          n = o % 2;
        de[i.i + d][i.j + n].tile = ui, de[i.i - d][i.j - n].tile = ui, de[i.i + d][i.j + n].tilePid = i.pid, de[i.i -
            d][i.j - n].tilePid = i.pid, de[i.i + d][i.j + n].category = window.undefined, de[i.i - d][i.j - n]
          .category = window.undefined, _a(e, i, 0), CanvasUtils.drawImageHd(e.building, X + i.x + a, j + i.y + _, o *
            v, 0, 0, t)
      },
      teslaBench: function (e, i, a, _, o, t) {
        var d = (o + 1) % 2,
          n = o % 2;
        de[i.i + d][i.j + n].tile = ui, de[i.i - d][i.j - n].tile = ui, de[i.i + d][i.j + n].tilePid = i.pid, de[i.i -
            d][i.j - n].tilePid = i.pid, de[i.i + d][i.j + n].category = window.undefined, de[i.i - d][i.j - n]
          .category = window.undefined;
        var r = i.state >> 4 & 1;
        1 === r ? i.hit = window.Math.min(500, i.hit + delta) : i.hit > 0 && (i.hit = window.Math.max(0, i.hit -
          delta)), 0 === r && _a(e, i, 0);
        var l = i.state >> 5 & 1;
        i.hitMax = 1 === l ? 1 + (i.hitMax + delta % 3e5) : 0, i.hitMax > 0 ? (CanvasUtils.drawImageHd(e.building[1 +
            window.Math.floor(i.hitMax / 500) % 3], X + i.x + a, j + i.y + _, o * v, 0, 0, t), 0 !== (l = e.light[
            window.Math.floor(i.hitMax / 50) % e.light.length]) && CanvasUtils.drawImageHd(l, X + i.x + a, j + i.y +
            _, o * v, 0, 0, t)) : CanvasUtils.drawImageHd(e.building[0], X + i.x + a, j + i.y + _, o * v, 0, 0, t), i
          .hit > 0 && oa(i, a, _)
      },
      orangeSeed: function (e, i, a, _, o, t) {
        var d = i.state >> 4 & 15;
        i.breath = (i.breath + delta) % 1e3, t = 1 + .03 * (i.breath < 500 ? i.breath / 500 : 1 - (i.breath - 500) /
          500), CanvasUtils.drawImageHd(e.building[d], X + i.x + a, j + i.y + _, o * v, 0, 0, t)
      },
      treeSeed: function (e, i, a, _, o, t) {
        var d = i.state >> 4 & 15;
        i.breath = (i.breath + delta) % 1e3, t = 1 + .01 * (i.breath < 500 ? i.breath / 500 : 1 - (i.breath - 500) /
          500), CanvasUtils.drawImageHd(e.building[d], X + i.x + a, j + i.y + _, o * v, 0, 0, t)
      },
      groundFloor: function (e, i, a, o, t, n) {
        var r = de[i.i][i.j];
        r.tile = 0, r.ground = ui, r.pid = i.pid, r.wallFrame === ui && 1 !== r.drawFloor || (i.broke > 0 ?
          CanvasUtils.drawImageHd(e.broken[i.broke - 1], X + i.x + a, j + i.y + o, 0, 0, 0, n) : CanvasUtils
          .drawImageHd(e.building[function (e) {
            if (e.hurt > 0 || 0 !== e.removed) return 0;
            var i = e.i,
              a = e.j,
              o = (e.extra, 0),
              t = 0,
              n = 0,
              r = 0,
              l = 0;
            return i - 1 >= 0 && de[i - 1][a].floorFrame === ui && (n = 1, o += C), i + 1 < d && de[i + 1][a]
              .floorFrame === ui && (o += F, r = 1), a - 1 >= 0 && de[i][a - 1].floorFrame === ui && (o += M,
                l = 1), a + 1 < _ && de[i][a + 1].floorFrame === ui && (o += W, t = 1), t + n === 2 && de[i - 1]
              [a + 1].floorFrame === ui && (o += V), l + n === 2 && de[i - 1][a - 1].floorFrame === ui && (o +=
                B), r + t === 2 && de[i + 1][a + 1].floorFrame === ui && (o += P), r + l === 2 && de[i + 1][a -
                1
              ].floorFrame === ui && (o += x), z[o]
          }(i)], X + i.x, j + i.y, 0, 0, 0, n))
      },
      defaultBuilding: function (e, i, a, _, o, t) {
        CanvasUtils.drawImageHd(e.building, X + i.x + a, j + i.y + _, o * v, 0, 0, t)
      },
      hiddenBuilding: function (e, i, a, _, o, t) {
        CanvasUtils.drawImageHd(e.building, X + i.x + a, j + i.y + _, o * v, 0, 0, t)
      },
      breakable: function (e, i, a, _, o, t) {
        CanvasUtils.drawImageHd(e.building[i.broke], X + i.x + a, j + i.y + _, o * v, 0, 0, t)
      },
      furniture: function (e, i, a, _, o, t) {
        var d = i.state >> 4 & 1,
          n = INVENTORY[e.id].subtype[i.subtype];
        1 === d ? i.hit = window.Math.min(500, i.hit + delta) : i.hit > 0 && (i.hit = window.Math.max(0, i.hit -
            delta)), 0 === d && 1 === n.usable && 1 === _a(n, i, 0) && (World.PLAYER.eInteract = pe), CanvasUtils
          .drawImageHd(n.building, X + i.x + a, j + i.y + _, o * v, 0, 0, t), i.hit > 0 && oa(i, a, _)
      },
      road: function (e, i, a, _, o, t) {
        var d = INVENTORY[e.id].subtype[i.subtype];
        CanvasUtils.drawImageHd(d.building, X + i.x, j + i.y, 0, 0, 0, t)
      },
      landmine: function (e, i, a, _, o, t) {
        var d = 0;
        (i.pid === World.PLAYER.id || -1 !== World.PLAYER.team && World.PLAYER.team === World.players[i.pid].team &&
          World.players[i.pid].teamUid === World.teams[World.PLAYER.team].uid || Math2d.fastDist(Q, q, i.x, i.y) <
          52e3) && (d = 1), 1 === d ? (i.breath = window.Math.min(300, i.breath + delta), ctx.globalAlpha = MathUtils
          .Ease.inOutQuad(i.breath / 300), CanvasUtils.drawImageHd(e.building[i.id % 3], X + i.x + a, j + i.y + _,
            o * v, 0, 0, t), ctx.globalAlpha = .2, CanvasUtils.drawImageHd(LIGHTFIRE[5], X + i.x + a, j + i.y + _,
            0, 0, 0, .6), ctx.globalAlpha = 1) : 0 === d && (i.breath = window.Math.min(300, i.breath + delta), ctx
          .globalAlpha = MathUtils.Ease.inOutQuad(i.breath / 300), CanvasUtils.drawImageHd(e.building[i.id % 3], X +
            i.x + a, j + i.y + _, o * v, 0, 0, t), ctx.globalAlpha = .2, CanvasUtils.drawImageHd(LIGHTFIRE[4], X + i
            .x + a, j + i.y + _, 0, 0, 0, .6), ctx.globalAlpha = 1)
      },
      dynamite: function (e, i, a, _, o, t) {
        i.breath = (i.breath + delta) % 500;
        var d = i.breath / 500,
          n = .95 + .3 * MathUtils.Ease.inOutQuad(d);
        ctx.globalAlpha = 1 - d, CanvasUtils.drawImageHd(e.building[1], X + i.x + a, j + i.y + _, o * v, 0, 0, n), ctx
          .globalAlpha = 1, CanvasUtils.drawImageHd(e.building[0], X + i.x + a, j + i.y + _, o * v, 0, 0, t)
      },
      spike: function (e, i, a, _, o, t) {
        var d = 0,
          n = 1;
        16 == (16 & i.state) && (n = 0), (i.pid === World.PLAYER.id || -1 !== World.PLAYER.team && World.PLAYER
            .team === World.players[i.pid].team && World.players[i.pid].teamUid === World.teams[World.PLAYER.team]
            .uid || Math2d.fastDist(Q, q, i.x, i.y) < 52e3) && (d = 1), 0 === n ? (0 === i.hurt2 && ia(i, e.particles,
            e.particlesDist, 5), i.hurt2 < 300 && (a += 6 * window.Math.random() - 4, _ += 6 * window.Math
          .random() - 4, i.hurt2 += delta), i.breath > 0 && (i.breath = window.Math.max(0, i.breath - delta / 5),
            ctx.globalAlpha = MathUtils.Ease.inOutQuad(i.breath / 300), CanvasUtils.drawImageHd(e.hidden[i.id % 3],
              X + i.x + a, j + i.y + _, o * v, 0, 0, t), ctx.globalAlpha = 1), CanvasUtils.drawImageHd(e.deployed[i
            .id % 3], X + i.x + a, j + i.y + _, o * v, 0, 0, t)) : 1 === d ? 300 === i.breath ? CanvasUtils
          .drawImageHd(e.hidden[i.id % 3], X + i.x + a, j + i.y + _, o * v, 0, 0, t) : (i.breath = window.Math.min(
              300, i.breath + delta), ctx.globalAlpha = MathUtils.Ease.inOutQuad(i.breath / 300), CanvasUtils
            .drawImageHd(e.hidden[i.id % 3], X + i.x + a, j + i.y + _, o * v, 0, 0, t), ctx.globalAlpha = 1) : 0 ===
          d && i.breath > 0 && (i.breath = window.Math.max(0, i.breath - delta / 5), ctx.globalAlpha = MathUtils.Ease
            .inOutQuad(i.breath / 300), CanvasUtils.drawImageHd(e.hidden[i.id % 3], X + i.x + a, j + i.y + _, o * v,
              0, 0, t), ctx.globalAlpha = 1)
      },
      ghoul: function (e, i, a, _, o) {
        if (2 === (254 & i.state) && (i.state &= 65281, i.hit <= 0)) {
          i.hit = e.actionDelay, i.hitMax = e.actionDelay;
          var t = window.Math.floor(3 * window.Math.random());
          AudioUtils.playFx(AudioUtils._fx.shot[0][t], .5, Math2d.dist(World.PLAYER.x, World.PLAYER.y, i.x, i.y) /
            3.5, 0)
        }
        var d = 0,
          n = 0,
          r = 0,
          l = 0;
        i.hit > 0 ? (i.hit = window.Math.max(0, i.hit - delta), i.hit = window.Math.min(i.hit, e.actionDelay), c = i
          .hit > e.actionImpactClient ? 1 - (i.hit - e.actionImpactClient) / (e.actionDelay - e
          .actionImpactClient) : i.hit / e.actionImpactClient, d = i.hurt2 * MathUtils.Ease.inOutQuad(c) * .55, l =
          6 * c, 1 === i.hurt2 ? n = 25 * c : r = 25 * c, 0 === i.hit && (i.hurt2 *= -1)) : Math2d.fastDist(i.x, i
          .y, i.nx, i.ny) < 1 ? (i.breath = (i.breath + delta) % 1500, 0 !== i.breath2 && (i.breath2 < 750 && (i
          .breath2 = 1500 - i.breath2), i.breath2 = i.breath2 + delta, i.breath2 > 1500 && (i.breath2 = 0))) : (i
          .breath2 = (i.breath2 + delta) % 1500, i.breath2 > 1500 && (i.heal *= -1, i.breath2 = i.breath2 % 1500),
          0 !== i.breath && (i.breath < 750 && (i.breath = 1500 - i.breath), i.breath = i.breath + delta, i.breath >
            1500 && (i.breath = 0)));
        var s = e.breath * (i.breath < 750 ? i.breath / 750 : 1 - (i.breath - 750) / 750),
          g = e.armMove * (i.breath2 < 750 ? i.breath2 / 750 : 1 - (i.breath2 - 750) / 750);
        if (CanvasUtils.drawImageHd(e.rightArm, a, _, e.rightArm.angle + i.angle + s + d, e.rightArm.x + g * i.heal +
            r, e.rightArm.y, o), CanvasUtils.drawImageHd(e.leftArm, a, _, -e.leftArm.angle + i.angle - s + d, e
            .leftArm.x - g * i.heal + n, e.leftArm.y, o), i.hurt > 0) {
          var m = 1;
          i.hurt -= delta;
          var c = 0;
          i.hurt > 150 ? c = MathUtils.Ease.inQuad((300 - i.hurt) / 300) : m += .2 * (1 - (c = MathUtils.Ease.outQuad(
              i.hurt / 150))), a += window.Math.cos(i.hurtAngle) * c * 10, _ += window.Math.sin(i.hurtAngle) * c * 10,
            ctx.globalAlpha = window.Math.min(1, window.Math.max(0, c)), CanvasUtils.drawImageHd(e.hurt, a, _, i
              .angle + d / 1.5, l, 0, m), ctx.globalAlpha = 1
        }
        CanvasUtils.drawImageHd(e.head, a, _, i.angle + d / 1.5, l, 0, o)
      },
      construction: function (e, i, a, _, o, t) {
        CanvasUtils.drawImageHd(e.builder, X + i.x + a, j + i.y + _, o * v, 0, 0, 1);
        var d = i.state >> 4 & 15;
        if (i.breath2 !== d && (i.breath2 = d, i.breath = 0), i.breath = i.breath + delta, i.heal = (i.heal + delta) %
          1e3, t = 1 + .03 * (i.heal < 500 ? i.heal / 500 : 1 - (i.heal - 500) / 500), 0 === d) ctx.globalAlpha =
          MathUtils.Ease.inOutQuad(i.breath / e.evolve), CanvasUtils.drawImageHd(e.building[0], X + i.x + a, j + i.y +
            _, o * v, 0, 0, t), ctx.globalAlpha = 1;
        else if (i.breath < e.evolve) {
          var n = MathUtils.Ease.inOutQuad(i.breath / e.evolve);
          ctx.globalAlpha = 1 - n, CanvasUtils.drawImageHd(e.building[d - 1], X + i.x + a, j + i.y + _, o * v, 0, 0,
            t), ctx.globalAlpha = n, CanvasUtils.drawImageHd(e.building[d], X + i.x + a, j + i.y + _, o * v, 0, 0,
            t), ctx.globalAlpha = 1
        } else CanvasUtils.drawImageHd(e.building[d], X + i.x + a, j + i.y + _, o * v, 0, 0, t)
      },
      lamp: function (e, i, a, _, o, t) {
        _a(e, i, 0), 1 === (i.state >> 7 & 1) ? i.hitMax = window.Math.min(500, i.hitMax + delta) : i.hitMax > 0 && (i
          .hitMax = window.Math.max(0, i.hitMax - delta)), i.hitMax > 0 ? (he[fe++] = i, CanvasUtils.drawImageHd(e
          .buildingOn[i.state >> 4 & 7], X + i.x + a, j + i.y + _, o * v, 0, 0, t)) : CanvasUtils.drawImageHd(e
          .building, X + i.x + a, j + i.y + _, o * v, 0, 0, t)
      },
      lampLight: function (e) {
        var i = INVENTORY[e.extra >> 7];
        ctx.globalAlpha = MathUtils.Ease.outQuad(e.hitMax / 500), e.breath2 = (e.breath2 + delta) % 5e3;
        var a = e.breath2,
          _ = 1 + .09 * (a < 2500 ? a / 2500 : 1 - (a - 2500) / 2500);
        CanvasUtils.drawImageHd(i.buildingTop[e.state >> 4 & 7], X + e.x, j + e.y, 0, 0, 0, _), ctx.globalAlpha = 1
      },
      switchOff: function (e, i, a, _, o, t) {
        _a(e, i, 0), CanvasUtils.drawImageHd(e.building[i.state >> 4 & 1], X + i.x + a, j + i.y + _, o * v, 0, 0, t),
          _ = scaleby * (100 * i.i + j + 50), a = scaleby * (100 * i.j + X + 50), Ae.width, Ae.height
      },
      timerGate: function (e, i, a, _, o, t) {
        _a(e, i, 0), CanvasUtils.drawImageHd(e.building[i.state >> 4 & 3], X + i.x + a, j + i.y + _, o * v, 0, 0, t)
      },
      automaticDoor: function (e, i, a, _, o, t) {
        ctx.globalAlpha = 1;
        var d = i.state >> 7 & 1;
        1 === d ? i.hitMax = window.Math.min(500, i.hitMax + delta) : i.hitMax > 0 && (i.hitMax = window.Math.max(0, i
          .hitMax - delta)), i.hitMax > 0 && 500 !== i.hitMax ? (ctx.globalAlpha = MathUtils.Ease.outQuad(i.hitMax /
            500), CanvasUtils.drawImageHd(e.building[1][i.broke], X + i.x + a, j + i.y + _, o * v, 0, 0, t), ctx
          .globalAlpha = MathUtils.Ease.outQuad(1 - i.hitMax / 500), CanvasUtils.drawImageHd(e.building[0][i.broke],
            X + i.x + a, j + i.y + _, o * v, 0, 0, t), ctx.globalAlpha = 1) : CanvasUtils.drawImageHd(e.building[d][
          i.broke
        ], X + i.x + a, j + i.y + _, o * v, 0, 0, t)
      },
      battleRoyale: function () {
        if (8 === World.PLAYER.toxicStep) {
          ni.clearRect(0, 0, s, g), si.clearRect(0, 0, s, g);
          for (var e = 0; e < 8; e++)
            for (var i = 0; i < 8; i++) {
              7 === World.PLAYER.toxicMap[e][i] ? ni.drawImage(Re, 2 + i * m, e * m + 1, Re.wh, Re.h2) : ni.drawImage(
                we, 2 + i * m, e * m + 1, Re.wh, Re.h2)
            }
        } else {
          ni.drawImage(li, 0, 0), si.clearRect(0, 0, s, g);
          for (var a = 0; a < 12; a++) {
            var _ = World.PLAYER.lastAreas[a];
            e = _[0], i = _[1]; - 1 !== e && si.drawImage(Re, 2 + i * m, e * m + 1, Re.wh, Re.h2)
          }
        }
      }
    }
  }(),
  myplayerhit = 0;

function _CheckMyPlayer(e) {
  World.PLAYER.id === e.pid && (ent = ENTITIES[__ENTITIE_PLAYER__], inhandID = e.extra >> 8 & 255, weapon = ent.weapons[
    inhandID], myplayerhit = e.hit)
}

function _AutoEat() {
  var e, i, a, _, o = 12,
    t = 77,
    d = 120,
    n = 121,
    r = 10,
    l = 72,
    s = 87,
    g = 39,
    m = (World.gauges.food.value, World.gauges.food.current),
    c = World.PLAYER.inventory,
    I = !0,
    E = 0,
    u = World.PLAYER.interactionDelay,
    L = !1;
  (u -= delta) <= 0 && -1 === World.PLAYER.interaction && (I = !1), E = 1 != weapon.consumable || weapon.heal < -1 ||
    weapon.food <= 0 ? 0 : 1, m < setHungryLevel && (I || (0 === E ? function () {
      for (var m = 0; m < c.length; m++) c[m][0] !== o && c[m][0] !== t && c[m][0] !== d && c[m][0] !== n && c[m][
        0] !== r && c[m][0] !== l && c[m][0] !== s && c[m][0] !== g || (e = c[m][0], i = c[m][1], a = c[m][2], _ =
          c[m][3]);
      L = null != e || null != i || null != a || null != _;
      I || L && function (e, i, a, _) {
        I || L && Client.sendPacket(window.JSON.stringify([8, e, i, a, _]))
      }(e, i, a, _)
    }() : I || (Client.sendMouseDown(), Client.sendMouseUp()))), 0 !== myplayerhit && Client.sendMouseUp()
}
var i = 1;

function AutoEatLoop() {
  !0 === AutoEat && setTimeout((function () {
    _AutoEat(), ++i < 1 / 0 && AutoEatLoop()
  }), 1e3)
}
AutoEat && AutoEatLoop();
var MapManager = function () {
  var e = 0,
    i = 0,
    a = [],
    _ = [],
    o = {
      i: 0,
      j: 0
    };
  return {
    seed: 0,
    init: function (t, d, n, r) {
      window.console.time("Town generation"),
        function (t, d, n) {
          new RNG.Random(t), e = d, i = n, MapManager.width = d, MapManager.height = n, a = [], MapManager.grid = a,
            [], _ = [], MapManager.roads = _, -1, o.i = 0, o.j = 0, 0
        }(t, d, n),
        function () {
          for (var _ = 0; _ < i; _++) {
            a[_] = [];
            for (var o = 0; o < e; o++) a[_][o] = 0
          }
        }(), r !== window.undefined && r(), window.console.timeEnd("Town generation")
    },
    grid: a,
    roads: null,
    width: 0,
    height: 0
  }
}();
COUNTER_ENTITIE = 0, __ENTITIE_PLAYER__ = COUNTER_ENTITIE++, __ENTITIE_LOOT__ = COUNTER_ENTITIE++, __ENTITIE_BULLET__ =
  COUNTER_ENTITIE++, __ENTITIE_BUILD_TOP__ = COUNTER_ENTITIE++, __ENTITIE_BUILD_DOWN__ = COUNTER_ENTITIE++,
  __ENTITIE_BUILD_GROUND__ = COUNTER_ENTITIE++, __ENTITIE_BUILD_GROUND2__ = COUNTER_ENTITIE++, __ENTITIE_PARTICLES__ =
  COUNTER_ENTITIE++, __ENTITIE_RESOURCES_TOP__ = COUNTER_ENTITIE++, __ENTITIE_RESOURCES_DOWN__ = COUNTER_ENTITIE++,
  __ENTITIE_RESOURCES_MID__ = COUNTER_ENTITIE++, __ENTITIE_RESOURCES_STOP__ = COUNTER_ENTITIE++, __ENTITIE_EXPLOSION__ =
  COUNTER_ENTITIE++, __ENTITIE_AI__ = COUNTER_ENTITIE++, ENTITIES[__ENTITIE_PLAYER__].update = function (e, i, a) {
    if (Math2d.dist(e.x, e.y, i, a) > 66) {
      e.rx = i, e.ry = a;
      var _ = Math2d.angle(e.rx, e.ry, e.nx, e.ny);
      e.angleX = window.Math.cos(_), e.angleY = window.Math.sin(_)
    }
    e.speed = (e.state >> 8) / 100
  }, ENTITIES[__ENTITIE_PLAYER__].init = function (e) {
    for (var i = World.players[e.pid], a = 0; a < i.runEffect.length; a++) i.runEffect[a].delay = 0;
    for (a = 0; a < i.cartridges.length; a++) i.cartridges[a].delay = 0;
    e.angle = e.nangle, i.ghoul > 0 && (e.heal = 1, e.hurt2 = 1)
  }, ENTITIES[__ENTITIE_AI__].update = ENTITIES[__ENTITIE_PLAYER__].update, ENTITIES[__ENTITIE_AI__].init = function (
  e) {
    e.heal = 1, e.hurt2 = 1, e.angle = e.nangle, e.speed = (e.state >> 8) / 100
  }, ENTITIES[__ENTITIE_LOOT__].init = function (e) {
    e.x !== e.rx || e.y !== e.ry ? (e.angle = Math2d.angle(e.x, e.y, e.rx, e.ry), e.nangle = e.angle) : (e.angle +=
      window.Math.PI / 2, e.nangle = e.angle)
  }, ENTITIES[__ENTITIE_LOOT__].update = function (e, i, a) {
    e.hit = e.state >> 8
  }, ENTITIES[__ENTITIE_BULLET__].init = function (e) {
    e.hurtAngle = Math2d.angle(e.rx, e.ry, e.nx, e.ny);
    var i = e.extra;
    switch (e.speed = (e.state >> 8) / 100, i) {
    case 4:
    case 8:
      null !== (a = Entitie.findEntitie(__ENTITIE_PLAYER__, e.pid, 0)) && (a.extra = 255 & a.extra, a.hit = 0);
      break;
    case 3:
      var a;
      null !== (a = Entitie.findEntitie(__ENTITIE_PLAYER__, e.pid, 0)) && (a.hit = 0)
    }
  }, ENTITIES[__ENTITIE_BULLET__].update = function (e, i, a) {
    var _ = Math2d.angle(e.x, e.y, e.nx, e.ny),
      o = 2 * window.Math.PI,
      t = ((_ + o) % o - (e.hurtAngle + o) % o) % o;
    window.Math.abs(t) > .1 && (e.rx = e.x, e.ry = e.y, e.nx = e.x, e.ny = e.y)
  }, ENTITIES[__ENTITIE_RESOURCES_TOP__].update = function () {}, ENTITIES[__ENTITIE_RESOURCES_DOWN__].update =
  ENTITIES[__ENTITIE_RESOURCES_TOP__].update, ENTITIES[__ENTITIE_RESOURCES_MID__].update = ENTITIES[
    __ENTITIE_RESOURCES_TOP__].update, ENTITIES[__ENTITIE_RESOURCES_STOP__].update = ENTITIES[__ENTITIE_RESOURCES_TOP__]
  .update, ENTITIES[__ENTITIE_BUILD_TOP__].update = function (e, i, a) {
    var _ = e.extra >> 5 & 3;
    e.subtype = e.state >> 5 & 63, e.broke = e.state >> 14, e.state = 16383 & e.state;
    var o = INVENTORY[e.extra >> 7];
    e.x = window.Math.floor(i / Render.__TILE_SIZE__) * Render.__TILE_SIZE__ + Render.__TILE_SIZE2__ + o.xCenter[_], e
      .y = window.Math.floor(a / Render.__TILE_SIZE__) * Render.__TILE_SIZE__ + Render.__TILE_SIZE2__ + o.yCenter[_], e
      .rx = e.x, e.ry = e.y, e.nx = e.x, e.ny = e.y, e.px = e.x, e.py = e.y, 1 === o.door && 16 == (16 & e.state) && (e
        .px = window.Math.floor(e.j + o.jMove[_]) * Render.__TILE_SIZE__ + Render.__TILE_SIZE2__ + o.xCenter[(_ + 1) %
          4], e.py = window.Math.floor(e.i + o.iMove[_]) * Render.__TILE_SIZE__ + Render.__TILE_SIZE2__ + o.yCenter[(_ +
          1) % 4])
  }, ENTITIES[__ENTITIE_BUILD_DOWN__].update = ENTITIES[__ENTITIE_BUILD_TOP__].update, ENTITIES[
    __ENTITIE_BUILD_GROUND__].update = ENTITIES[__ENTITIE_BUILD_TOP__].update, ENTITIES[__ENTITIE_BUILD_GROUND2__]
  .update = ENTITIES[__ENTITIE_BUILD_TOP__].update;
try {
  Render.shake
} catch (o) {
  Render = {}
}
var __WARM__ = 1,
  __RADIATION__ = 2,
  COUNTER = 0,
  AREAS = {
    __PLAYER__: COUNTER++,
    __FIRE__: COUNTER++,
    __WORKBENCH__: COUNTER++,
    __BBQ__: COUNTER++,
    __WEAVING__: COUNTER++,
    __WORKBENCH2__: COUNTER++,
    __SMELTER__: COUNTER++,
    __TESLA__: COUNTER++,
    __COMPOST__: COUNTER++,
    __AGITATOR__: COUNTER++,
    __EXTRACTOR__: COUNTER++,
    __WELDING_MACHINE__: COUNTER++
  };
COUNTER = 0;
var SOUNDID = {
    __NO_SOUND__: COUNTER++,
    __WOOD_IMPACT__: COUNTER++,
    __STONE_IMPACT__: COUNTER++,
    __STONE_IMPACT_2__: COUNTER++,
    __STEEL_IMPACT__: COUNTER++,
    __WOOD_DESTROY__: COUNTER++,
    __STONE_DESTROY__: COUNTER++,
    __STEEL_DESTROY__: COUNTER++,
    __PILLOW_IMPACT__: COUNTER++,
    __PILLOW_DESTROY__: COUNTER++
  },
  SOUND = [];
SOUND[SOUNDID.__WOOD_IMPACT__] = "audio/wood-impact.mp3", SOUND[SOUNDID.__STONE_IMPACT__] = "audio/stone-impact2.mp3",
  SOUND[SOUNDID.__STONE_IMPACT_2__] = "audio/stone-impact.mp3", SOUND[SOUNDID.__STEEL_IMPACT__] =
  "audio/metal-impact2.mp3", SOUND[SOUNDID.__PILLOW_IMPACT__] = "audio/pillow-impact.mp3", SOUND[SOUNDID
    .__WOOD_DESTROY__] = "audio/wood-destroy3.mp3", SOUND[SOUNDID.__STONE_DESTROY__] = "audio/stone-destroy.mp3", SOUND[
    SOUNDID.__STEEL_DESTROY__] = "audio/metal-destroy2.mp3", SOUND[SOUNDID.__PILLOW_DESTROY__] =
  "audio/pillow-destroy.mp3";
var SOUND_LENGTH = SOUND.length;
COUNTER = 0;
var BEHAVIOR = {
  __NO__: COUNTER++,
  __SEED__: COUNTER++,
  __SEED_RESOURCE__: COUNTER++,
  __LOGIC__: COUNTER++,
  __AI_CONSTRUCTOR__: COUNTER++
};
COUNTER = 0;
var AIID = {
  __NORMAL_GHOUL__: COUNTER++,
  __FAST_GHOUL__: COUNTER++,
  __EXPLOSIVE_GHOUL__: COUNTER++,
  __RADIOACTIVE_GHOUL__: COUNTER++,
  __ARMORED_GHOUL__: COUNTER++,
  __PUMPKIN_GHOUL__: COUNTER++,
  __LAPABOT_REPAIR__: COUNTER++,
  __HAL_BOT__: COUNTER++,
  __TESLA_BOT__: COUNTER++
};
COUNTER = 0;
var SKILLS = {
  __SKILL__: COUNTER++,
  __SURVIVAL__: COUNTER++,
  __CLOTHE__: COUNTER++,
  __BUILDING__: COUNTER++,
  __TOOL__: COUNTER++,
  __WEAPON__: COUNTER++,
  __PLANT__: COUNTER++,
  __DRUG__: COUNTER++,
  __MINERAL__: COUNTER++,
  __LOGIC__: COUNTER++
};
COUNTER = 1;
var IID = {
  __WOOD__: COUNTER++,
  __STONE__: COUNTER++,
  __STEEL__: COUNTER++,
  __ANIMAL_FAT__: COUNTER++,
  __ANIMAL_TENDON__: COUNTER++,
  __STRING__: COUNTER++,
  __LEATHER_BOAR__: COUNTER++,
  __SHAPED_METAL__: COUNTER++,
  __RAW_STEAK__: COUNTER++,
  __COOKED_STEAK__: COUNTER++,
  __ROTTEN_STEAK__: COUNTER++,
  __ORANGE__: COUNTER++,
  __ROTTEN_ORANGE__: COUNTER++,
  __SEED_ORANGE__: COUNTER++,
  __HACHET__: COUNTER++,
  __STONE_PICKAXE__: COUNTER++,
  __STEEL_PICKAXE__: COUNTER++,
  __STONE_AXE__: COUNTER++,
  __WORKBENCH__: COUNTER++,
  __WOOD_SPEAR__: COUNTER++,
  __WOOD_BOW__: COUNTER++,
  __9MM__: COUNTER++,
  __DESERT_EAGLE__: COUNTER++,
  __SHOTGUN__: COUNTER++,
  __AK47__: COUNTER++,
  __SNIPER__: COUNTER++,
  __WOOD_WALL__: COUNTER++,
  __STONE_WALL__: COUNTER++,
  __STEEL_WALL__: COUNTER++,
  __WOOD_DOOR__: COUNTER++,
  __STONE_DOOR__: COUNTER++,
  __STEEL_DOOR__: COUNTER++,
  __CAMPFIRE__: COUNTER++,
  __BULLET_9MM__: COUNTER++,
  __BULLET_SHOTGUN__: COUNTER++,
  __BULLET_SNIPER__: COUNTER++,
  __MEDIKIT__: COUNTER++,
  __BANDAGE__: COUNTER++,
  __SODA__: COUNTER++,
  __MP5__: COUNTER++,
  __HEADSCARF__: COUNTER++,
  __CHAPKA__: COUNTER++,
  __WINTER_COAT__: COUNTER++,
  __GAZ_MASK__: COUNTER++,
  __GAZ_PROTECTION__: COUNTER++,
  __RADIATION_SUIT__: COUNTER++,
  __WOOD_ARROW__: COUNTER++,
  __CAMPFIRE_BBQ__: COUNTER++,
  __SMELTER__: COUNTER++,
  __WOOD_BIGDOOR__: COUNTER++,
  __STONE_BIGDOOR__: COUNTER++,
  __STEEL_BIGDOOR__: COUNTER++,
  __SULFUR__: COUNTER++,
  __SHAPED_URANIUM__: COUNTER++,
  __WORKBENCH2__: COUNTER++,
  __URANIUM__: COUNTER++,
  __WEAVING__: COUNTER++,
  __GASOLINE__: COUNTER++,
  __SULFUR_PICKAXE__: COUNTER++,
  __CHEST__: COUNTER++,
  __FRIDGE__: COUNTER++,
  __WOOD_FLOOR__: COUNTER++,
  __HAMMER__: COUNTER++,
  __SLEEPING_BAG__: COUNTER++,
  __REPAIR_HAMMER__: COUNTER++,
  __NAILS__: COUNTER++,
  __WOODLIGHT_FLOOR__: COUNTER++,
  __WOOD_SMALLWALL__: COUNTER++,
  __STONE_SMALLWALL__: COUNTER++,
  __STEEL_SMALLWALL__: COUNTER++,
  __FURNITURE__: COUNTER++,
  __TOMATO_SOUP__: COUNTER++,
  __SYRINGE__: COUNTER++,
  __CHEMICAL_COMPONENT__: COUNTER++,
  __RADAWAY__: COUNTER++,
  __SEED_TOMATO__: COUNTER++,
  __TOMATO__: COUNTER++,
  __ROTTEN_TOMATO__: COUNTER++,
  __CAN__: COUNTER++,
  __WOOD_CROSSBOW__: COUNTER++,
  __WOOD_CROSSARROW__: COUNTER++,
  __NAIL_GUN__: COUNTER++,
  __SAWED_OFF_SHOTGUN__: COUNTER++,
  __STONE_FLOOR__: COUNTER++,
  __TILING_FLOOR__: COUNTER++,
  __ROAD__: COUNTER++,
  __CRISPS__: COUNTER++,
  __ROTTEN_CRISPS__: COUNTER++,
  __ELECTRONICS__: COUNTER++,
  __JUNK__: COUNTER++,
  __WIRE__: COUNTER++,
  __ENERGY_CELLS__: COUNTER++,
  __LASER_PISTOL__: COUNTER++,
  __TESLA__: COUNTER++,
  __ALLOYS__: COUNTER++,
  __SULFUR_AXE__: COUNTER++,
  __LANDMINE__: COUNTER++,
  __DYNAMITE__: COUNTER++,
  __C4__: COUNTER++,
  __C4_TRIGGER__: COUNTER++,
  __COMPOST__: COUNTER++,
  __ARMOR_PHYSIC_1__: COUNTER++,
  __ARMOR_PHYSIC_2__: COUNTER++,
  __ARMOR_PHYSIC_3__: COUNTER++,
  __ARMOR_FIRE_1__: COUNTER++,
  __ARMOR_FIRE_2__: COUNTER++,
  __ARMOR_FIRE_3__: COUNTER++,
  __ARMOR_DEMINER__: COUNTER++,
  __ARMOR_TESLA_1__: COUNTER++,
  __ARMOR_TESLA_2__: COUNTER++,
  __WOOD_SPIKE__: COUNTER++,
  __LASER_SUBMACHINE__: COUNTER++,
  __GRENADE__: COUNTER++,
  __SUPER_HAMMER__: COUNTER++,
  __GHOUL_BLOOD__: COUNTER++,
  __CAMOUFLAGE_GEAR__: COUNTER++,
  __AGITATOR__: COUNTER++,
  __GHOUL_DRUG__: COUNTER++,
  __MUSHROOM1__: COUNTER++,
  __MUSHROOM2__: COUNTER++,
  __MUSHROOM3__: COUNTER++,
  __ROTTEN_MUSHROOM1__: COUNTER++,
  __ROTTEN_MUSHROOM2__: COUNTER++,
  __ROTTEN_MUSHROOM3__: COUNTER++,
  __LAPADONE__: COUNTER++,
  __LAPABOT_REPAIR__: COUNTER++,
  __SMALL_WIRE__: COUNTER++,
  __PUMPKIN__: COUNTER++,
  __ROTTEN_PUMPKIN__: COUNTER++,
  __SEED_GHOUL__: COUNTER++,
  __EXTRACTOR__: COUNTER++,
  __ANTIDOTE__: COUNTER++,
  __ANTIDOTE_FLOWER__: COUNTER++,
  __SEED_TREE__: COUNTER++,
  __ACORN__: COUNTER++,
  __ROTTEN_ACORN__: COUNTER++,
  __LASER_SNIPER__: COUNTER++,
  __HAL_BOT__: COUNTER++,
  __TESLA_BOT__: COUNTER++,
  __CABLE0__: COUNTER++,
  __CABLE1__: COUNTER++,
  __CABLE2__: COUNTER++,
  __CABLE3__: COUNTER++,
  __SWITCH__: COUNTER++,
  __GATE_OR__: COUNTER++,
  __GATE_AND__: COUNTER++,
  __GATE_NOT__: COUNTER++,
  __LAMP__: COUNTER++,
  __CABLE_WALL__: COUNTER++,
  __AUTOMATIC_DOOR__: COUNTER++,
  __PLATFORM__: COUNTER++,
  __STONE_CAVE__: COUNTER++,
  __BUNKER_WALL__: COUNTER++,
  __GOLD_FLOOR__: COUNTER++,
  __RED_FLOOR__: COUNTER++,
  __WELDING_MACHINE__: COUNTER++,
  __CABLE4__: COUNTER++,
  __GATE_TIMER__: COUNTER++,
  __GATE_XOR__: COUNTER++,
  __VISION_1__: COUNTER++,
  __VISION_2__: COUNTER++,
  __VISION_3__: COUNTER++,
  __BUILDER_1__: COUNTER++,
  __BUILDER_2__: COUNTER++,
  __INV_1__: COUNTER++,
  __INV_2__: COUNTER++,
  __INV_3__: COUNTER++,
  __INV_4__: COUNTER++,
  __INV_5__: COUNTER++,
  __FEATHERWEIGHT__: COUNTER++
};
COUNTER = 0;
var LOOTID = {
  __SMALL_WOOD__: COUNTER++,
  __MEDIUM_WOOD__: COUNTER++,
  __BIG_WOOD__: COUNTER++,
  __SMALL_STONE__: COUNTER++,
  __MEDIUM_STONE__: COUNTER++,
  __BIG_STONE__: COUNTER++,
  __STEEL__: COUNTER++,
  __ANIMAL_FAT__: COUNTER++,
  __ANIMAL_TENDON__: COUNTER++,
  __STRING__: COUNTER++,
  __LEATHER_BOAR__: COUNTER++,
  __SHAPED_METAL__: COUNTER++,
  __RAW_STEAK__: COUNTER++,
  __COOKED_STEAK__: COUNTER++,
  __ROTTEN_STEAK__: COUNTER++,
  __ORANGE__: COUNTER++,
  __ROTTEN_ORANGE__: COUNTER++,
  __SEED_ORANGE__: COUNTER++,
  __HACHET__: COUNTER++,
  __STONE_PICKAXE__: COUNTER++,
  __STEEL_PICKAXE__: COUNTER++,
  __STONE_AXE__: COUNTER++,
  __WORKBENCH__: COUNTER++,
  __WOOD_SPEAR__: COUNTER++,
  __WOOD_BOW__: COUNTER++,
  __9MM__: COUNTER++,
  __DESERT_EAGLE__: COUNTER++,
  __SHOTGUN__: COUNTER++,
  __AK47__: COUNTER++,
  __SNIPER__: COUNTER++,
  __WOOD_WALL__: COUNTER++,
  __STONE_WALL__: COUNTER++,
  __STEEL_WALL__: COUNTER++,
  __WOOD_DOOR__: COUNTER++,
  __STONE_DOOR__: COUNTER++,
  __STEEL_DOOR__: COUNTER++,
  __CAMPFIRE__: COUNTER++,
  __BULLET_9MM__: COUNTER++,
  __BULLET_SHOTGUN__: COUNTER++,
  __BULLET_SNIPER__: COUNTER++,
  __MEDIKIT__: COUNTER++,
  __BANDAGE__: COUNTER++,
  __SODA__: COUNTER++,
  __MP5__: COUNTER++,
  __HEADSCARF__: COUNTER++,
  __CHAPKA__: COUNTER++,
  __WINTER_COAT__: COUNTER++,
  __GAZ_MASK__: COUNTER++,
  __GAZ_PROTECTION__: COUNTER++,
  __RADIATION_SUIT__: COUNTER++,
  __WOOD_ARROW__: COUNTER++,
  __CAMPFIRE_BBQ__: COUNTER++,
  __SMELTER__: COUNTER++,
  __WOOD_BIGDOOR__: COUNTER++,
  __STONE_BIGDOOR__: COUNTER++,
  __STEEL_BIGDOOR__: COUNTER++,
  __SULFUR__: COUNTER++,
  __SHAPED_URANIUM__: COUNTER++,
  __WORKBENCH2__: COUNTER++,
  __URANIUM__: COUNTER++,
  __WEAVING__: COUNTER++,
  __GASOLINE__: COUNTER++,
  __SULFUR_PICKAXE__: COUNTER++,
  __CHEST__: COUNTER++,
  __FRIDGE__: COUNTER++,
  __WOOD_FLOOR__: COUNTER++,
  __HAMMER__: COUNTER++,
  __SLEEPING_BAG__: COUNTER++,
  __REPAIR_HAMMER__: COUNTER++,
  __NAILS__: COUNTER++,
  __WOODLIGHT_FLOOR__: COUNTER++,
  __WOOD_SMALLWALL__: COUNTER++,
  __STONE_SMALLWALL__: COUNTER++,
  __STEEL_SMALLWALL__: COUNTER++,
  __TOMATO_SOUP__: COUNTER++,
  __SYRINGE__: COUNTER++,
  __CHEMICAL_COMPONENT__: COUNTER++,
  __RADAWAY__: COUNTER++,
  __SEED_TOMATO__: COUNTER++,
  __TOMATO__: COUNTER++,
  __ROTTEN_TOMATO__: COUNTER++,
  __CAN__: COUNTER++,
  __WOOD_CROSSBOW__: COUNTER++,
  __WOOD_CROSSARROW__: COUNTER++,
  __NAIL_GUN__: COUNTER++,
  __SAWED_OFF_SHOTGUN__: COUNTER++,
  __STONE_FLOOR__: COUNTER++,
  __TILING_FLOOR__: COUNTER++,
  __CRISPS__: COUNTER++,
  __ROTTEN_CRISPS__: COUNTER++,
  __ELECTRONICS__: COUNTER++,
  __JUNK__: COUNTER++,
  __WIRE__: COUNTER++,
  __ENERGY_CELLS__: COUNTER++,
  __LASER_PISTOL__: COUNTER++,
  __TESLA__: COUNTER++,
  __ALLOYS__: COUNTER++,
  __SULFUR_AXE__: COUNTER++,
  __LANDMINE__: COUNTER++,
  __DYNAMITE__: COUNTER++,
  __C4__: COUNTER++,
  __C4_TRIGGER__: COUNTER++,
  __COMPOST__: COUNTER++,
  __ARMOR_PHYSIC_1__: COUNTER++,
  __ARMOR_PHYSIC_2__: COUNTER++,
  __ARMOR_PHYSIC_3__: COUNTER++,
  __ARMOR_FIRE_1__: COUNTER++,
  __ARMOR_FIRE_2__: COUNTER++,
  __ARMOR_FIRE_3__: COUNTER++,
  __ARMOR_DEMINER__: COUNTER++,
  __ARMOR_TESLA_1__: COUNTER++,
  __ARMOR_TESLA_2__: COUNTER++,
  __WOOD_SPIKE__: COUNTER++,
  __LASER_SUBMACHINE__: COUNTER++,
  __GRENADE__: COUNTER++,
  __SUPER_HAMMER__: COUNTER++,
  __GHOUL_BLOOD__: COUNTER++,
  __CAMOUFLAGE_GEAR__: COUNTER++,
  __AGITATOR__: COUNTER++,
  __GHOUL_DRUG__: COUNTER++,
  __MUSHROOM1__: COUNTER++,
  __MUSHROOM2__: COUNTER++,
  __MUSHROOM3__: COUNTER++,
  __ROTTEN_MUSHROOM1__: COUNTER++,
  __ROTTEN_MUSHROOM2__: COUNTER++,
  __ROTTEN_MUSHROOM3__: COUNTER++,
  __LAPADONE__: COUNTER++,
  __LAPABOT_REPAIR__: COUNTER++,
  __SMALL_WIRE__: COUNTER++,
  __PUMPKIN__: COUNTER++,
  __ROTTEN_PUMPKIN__: COUNTER++,
  __SEED_GHOUL__: COUNTER++,
  __EXTRACTOR__: COUNTER++,
  __ANTIDOTE__: COUNTER++,
  __ANTIDOTE_FLOWER__: COUNTER++,
  __SEED_TREE__: COUNTER++,
  __ACORN__: COUNTER++,
  __ROTTEN_ACORN__: COUNTER++,
  __LASER_SNIPER__: COUNTER++,
  __HAL_BOT__: COUNTER++,
  __TESLA_BOT__: COUNTER++,
  __CABLE0__: COUNTER++,
  __CABLE1__: COUNTER++,
  __CABLE2__: COUNTER++,
  __CABLE3__: COUNTER++,
  __SWITCH__: COUNTER++,
  __GATE_OR__: COUNTER++,
  __GATE_AND__: COUNTER++,
  __GATE_NOT__: COUNTER++,
  __LAMP__: COUNTER++,
  __CABLE_WALL__: COUNTER++,
  __AUTOMATIC_DOOR__: COUNTER++,
  __PLATFORM__: COUNTER++,
  __STONE_CAVE__: COUNTER++,
  __BUNKER_WALL__: COUNTER++,
  __GOLD_FLOOR__: COUNTER++,
  __RED_FLOOR__: COUNTER++,
  __WELDING_MACHINE__: COUNTER++,
  __CABLE4__: COUNTER++,
  __GATE_TIMER__: COUNTER++,
  __GATE_XOR__: COUNTER++
};
COUNTER = 0;
var PARTICLESID = {
    __NOTHING__: COUNTER++,
    __WOOD__: COUNTER++,
    __STONE__: COUNTER++,
    __STEEL__: COUNTER++,
    __URANIUM__: COUNTER++,
    __SULFUR__: COUNTER++,
    __LEAF__: COUNTER++,
    __LEAFTREE__: COUNTER++,
    __ORANGE__: COUNTER++,
    __BLOOD__: COUNTER++,
    __FIRE__: COUNTER++,
    __FUR__: COUNTER++,
    __BED0__: COUNTER++,
    __BED1__: COUNTER++,
    __SOFA0__: COUNTER++,
    __SOFA1__: COUNTER++,
    __SOFA2__: COUNTER++,
    __TOILET__: COUNTER++,
    __WOODLIGHT__: COUNTER++,
    __SAFE0__: COUNTER++,
    __GARBAGE0__: COUNTER++,
    __FRIDGE__: COUNTER++,
    __PLOT__: COUNTER++,
    __BARELRED__: COUNTER++,
    __BARELGREEN__: COUNTER++,
    __METAL__: COUNTER++,
    __TOMATO__: COUNTER++,
    __GREY_STEEL__: COUNTER++,
    __BLUE_STEEL__: COUNTER++,
    __RED_STEEL__: COUNTER++,
    __KAKI__: COUNTER++,
    __MUSHROOM1__: COUNTER++,
    __MUSHROOM2__: COUNTER++,
    __MUSHROOM3__: COUNTER++,
    __GOLD__: COUNTER++
  },
  WAITADS = [{
    src: "https://devast.io/img/wait-ads-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/wait-ads-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/wait-ads-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/wait-ads-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/wait-ads-5.png",
    img: {
      isLoaded: 0
    }
  }],
  PARTICLES = [];
PARTICLES[PARTICLESID.__NOTHING__] = [], PARTICLES[PARTICLESID.__WOOD__] = [{
  src: "https://devast.io/img/day-particules-wood1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-wood2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-wood3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-wood4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-wood5.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__STONE__] = [{
  src: "https://devast.io/img/day-particules-stone1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-stone2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-stone3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-stone4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-stone5.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__STEEL__] = [{
  src: "https://devast.io/img/day-particules-steel1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-steel2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-steel3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-steel4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-steel5.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__URANIUM__] = [{
  src: "https://devast.io/img/day-particules-uranium1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-uranium2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-uranium3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-uranium4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-uranium5.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-uranium6.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-uranium7.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-uranium8.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-uranium9.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__SULFUR__] = [{
  src: "https://devast.io/img/day-particules-sulfur1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sulfur2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sulfur3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sulfur4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sulfur5.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sulfur6.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sulfur7.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sulfur8.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sulfur9.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__LEAF__] = [{
  src: "https://devast.io/img/day-particules-leaf1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-leaf2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-leaf3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-leaf4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-leaf5.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__LEAFTREE__] = [{
  src: "https://devast.io/img/day-particules-wood1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-wood3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-leaftree1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-leaftree2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-leaftree3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-leaftree4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-leaftree5.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.flower] = [{
  src: "https://devast.io/img/day-particules-flower1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-flower2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-flower3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-flower4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-flower5.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__ORANGE__] = [{
  src: "https://devast.io/img/day-particules-leaf1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-leaf2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-leaf3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-leaf4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-leaf5.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-leaf6.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-leaf7.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-leaf8.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-leaf9.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__BLOOD__] = [{
  src: "https://devast.io/img/day-particules-blood1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-blood2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-blood3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-blood4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-blood5.png",
  img: {
    isLoaded: 0
  }
}];
var NVMWV = 380;

function Detail(e, i, a, _, o, t, d, n, r) {
  if (this.name = e, this.description = i, _ !== window.undefined && (this.recipe = _), o !== window.undefined && (this
      .stack = o), t !== window.undefined) {
    this.area = [], this.timer = [];
    for (var l = 0; l < t.length; l++) this.area[l] = t[l][0], this.timer[l] = t[l][1]
  }
  a !== window.undefined ? this.category = a : this.category = -1, d !== window.undefined ? this.level = d : this
    .level = -1, n !== window.undefined ? this.previous = n : this.previous = -1, r !== window.undefined ? this.price =
    r : this.price = 1
}
PARTICLES[PARTICLESID.__FIRE__] = [{
  src: "https://devast.io/img/day-particules-fire1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-fire2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-fire3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-fire4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-fire5.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__FUR__] = [{
  src: "https://devast.io/img/day-particules-fur1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-fur2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-fur3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-fur4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-fur5.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__BED0__] = [{
  src: "https://devast.io/img/day-particules-bed0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-bed1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-bed2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-bed6.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-wood1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-wood3.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__BED1__] = [{
  src: "https://devast.io/img/day-particules-bed3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-bed4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-bed5.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-bed6.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-wood1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-wood3.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__SOFA0__] = [{
  src: "https://devast.io/img/day-particules-sofa0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sofa1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sofa2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sofa3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sofa4.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__SOFA1__] = [{
  src: "https://devast.io/img/day-particules-sofa0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sofa1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sofa2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sofa5.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sofa6.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__SOFA2__] = [{
  src: "https://devast.io/img/day-particules-sofa0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sofa1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sofa2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sofa7.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-sofa8.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__TOILET__] = [{
  src: "https://devast.io/img/day-particules-toilet0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-toilet1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-toilet2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-toilet3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-toilet4.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__WOODLIGHT__] = [{
  src: "https://devast.io/img/day-particules-woodlight0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-woodlight1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-woodlight2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-woodlight3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-woodlight4.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__SAFE0__] = [{
  src: "https://devast.io/img/day-particules-safe0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-safe1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-safe2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-safe3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-safe4.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__GARBAGE0__] = [{
  src: "https://devast.io/img/day-particules-garbage0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-garbage1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-garbage2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-garbage3.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__FRIDGE__] = [{
  src: "https://devast.io/img/day-particules-fridge0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-fridge1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-fridge2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-fridge3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-fridge4.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__PLOT__] = [{
  src: "https://devast.io/img/day-particules-plot0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-plot1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-plot2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-plot3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-wood1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-wood3.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__BARELRED__] = [{
  src: "https://devast.io/img/day-particules-barel0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-barel1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-barel2.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__BARELGREEN__] = [{
  src: "https://devast.io/img/day-particules-barel3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-barel4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-barel5.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__METAL__] = [{
  src: "https://devast.io/img/day-particules-metal0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-metal1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-metal2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-metal3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-metal4.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__TOMATO__] = [{
  src: "https://devast.io/img/day-particules-tomato0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-tomato1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-tomato2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-tomato3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-tomato4.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__BLUE_STEEL__] = [{
  src: "https://devast.io/img/day-particules-blue-steel0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-blue-steel1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-blue-steel2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-blue-steel3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-blue-steel4.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__GREY_STEEL__] = [{
  src: "https://devast.io/img/day-particules-grey-steel0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-grey-steel1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-grey-steel2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-grey-steel3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-grey-steel4.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__RED_STEEL__] = [{
  src: "https://devast.io/img/day-particules-red-steel0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-red-steel1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-red-steel2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-red-steel3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-red-steel4.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__KAKI__] = [{
  src: "https://devast.io/img/day-particules-kaki0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-kaki1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-kaki2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-kaki3.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-kaki4.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__MUSHROOM1__] = [{
  src: "https://devast.io/img/day-particules-mushroom4.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-mushroom5.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-mushroom6.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__MUSHROOM2__] = [{
  src: "https://devast.io/img/day-particules-mushroom1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-mushroom2.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-mushroom3.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__MUSHROOM3__] = [{
  src: "https://devast.io/img/day-particules-mushroom7.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-mushroom8.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-mushroom9.png",
  img: {
    isLoaded: 0
  }
}], PARTICLES[PARTICLESID.__GOLD__] = [{
  src: "https://devast.io/img/day-particules-gold0.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-gold1.png",
  img: {
    isLoaded: 0
  }
}, {
  src: "https://devast.io/img/day-particules-gold2.png",
  img: {
    isLoaded: 0
  }
}];
var INVENTORY = [{
  src: [],
  img: []
}, {
  id: IID.__WOOD__,
  itemButton: {
    src: ["https://devast.io/img/inv-wood-out.png", "https://devast.io/img/inv-wood-in.png", "https://devast.io/img/inv-wood-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Wood", "Found in trees, or on the ground."),
  stack: 255,
  loot: LOOTID.__BIG_WOOD__,
  score: 10
}, {
  id: IID.__STONE__,
  itemButton: {
    src: ["https://devast.io/img/inv-stone-out.png", "https://devast.io/img/inv-stone-in.png", "https://devast.io/img/inv-stone-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Stone", "Find it on the ground or on the rock.", SKILLS.__MINERAL__, [], 0, [
    [AREAS.__EXTRACTOR__, 8e4]
  ]),
  craftStart: 50,
  craftRng: 200,
  stack: 255,
  loot: LOOTID.__BIG_STONE__,
  score: 14
}, {
  id: IID.__STEEL__,
  itemButton: {
    src: ["https://devast.io/img/inv-steel-out.png", "https://devast.io/img/inv-steel-in.png", "https://devast.io/img/inv-steel-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Iron", "Melt it on a Firepit or a Smelter", SKILLS.__MINERAL__, [], 0, [
    [AREAS.__EXTRACTOR__, 12e4]
  ]),
  craftStart: 4,
  craftRng: 8,
  stack: 255,
  loot: LOOTID.__STEEL__,
  score: 28
}, {
  id: IID.__ANIMAL_FAT__,
  itemButton: {
    src: ["https://devast.io/img/inv-animal-fat-out.png", "https://devast.io/img/inv-animal-fat-in.png", "https://devast.io/img/inv-animal-fat-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Animal Fat", "Useful to craft bullet and clothes"),
  stack: 255,
  loot: LOOTID.__ANIMAL_FAT__,
  score: 32
}, {
  id: IID.__ANIMAL_TENDON__,
  itemButton: {
    src: ["https://devast.io/img/inv-animal-tendon-out.png", "https://devast.io/img/inv-animal-tendon-in.png", "https://devast.io/img/inv-animal-tendon-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Animal Tendon", "Useful to make string"),
  stack: 255,
  loot: LOOTID.__ANIMAL_TENDON__,
  score: 100
}, {
  id: IID.__STRING__,
  itemButton: {
    src: ["https://devast.io/img/inv-string-out.png", "https://devast.io/img/inv-string-in.png", "https://devast.io/img/inv-string-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("String", "Useful to craft many INVENTORY.", SKILLS.__SURVIVAL__, [
    [IID.__ANIMAL_TENDON__, 2]
  ], 1, [
    [AREAS.__WORKBENCH__, 2e4]
  ]),
  stack: 255,
  loot: LOOTID.__STRING__
}, {
  id: IID.__LEATHER_BOAR__,
  itemButton: {
    src: ["https://devast.io/img/inv-leather-boar-out.png", "https://devast.io/img/inv-leather-boar-in.png", "https://devast.io/img/inv-leather-boar-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Leather", "Useful to make clothes"),
  stack: 255,
  loot: LOOTID.__LEATHER_BOAR__,
  score: 32
}, {
  id: IID.__SHAPED_METAL__,
  itemButton: {
    src: ["https://devast.io/img/inv-shaped-metal-out.png", "https://devast.io/img/inv-shaped-metal-in.png", "https://devast.io/img/inv-shaped-metal-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Shaped Metal", "To craft improved INVENTORY.", SKILLS.__MINERAL__, [
    [IID.__STEEL__, 2]
  ], 1, [
    [AREAS.__SMELTER__, 3e3],
    [AREAS.__BBQ__, 3e4]
  ]),
  stack: 255,
  loot: LOOTID.__SHAPED_METAL__
}, {
  id: IID.__RAW_STEAK__,
  itemButton: {
    src: ["https://devast.io/img/inv-raw-steak-out.png", "https://devast.io/img/inv-raw-steak-in.png", "https://devast.io/img/inv-raw-steak-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Raw Steak", "#Vegan"),
  stack: 10,
  loot: LOOTID.__RAW_STEAK__,
  perish: 15,
  perishId: IID.__ROTTEN_STEAK__,
  idWeapon: 12,
  wait: 5,
  score: 28
}, {
  id: IID.__COOKED_STEAK__,
  itemButton: {
    src: ["https://devast.io/img/inv-cooked-steak-out.png", "https://devast.io/img/inv-cooked-steak-in.png", "https://devast.io/img/inv-cooked-steak-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Cooked Steak", "Rare or medium?", SKILLS.__SURVIVAL__, [
    [IID.__RAW_STEAK__, 1]
  ], 1, [
    [AREAS.__FIRE__, 2e4],
    [AREAS.__BBQ__, 1e4]
  ]),
  stack: 10,
  loot: LOOTID.__COOKED_STEAK__,
  wait: 5,
  perish: 3,
  perishId: IID.__ROTTEN_STEAK__,
  idWeapon: 13
}, {
  id: IID.__ROTTEN_STEAK__,
  itemButton: {
    src: ["https://devast.io/img/inv-rotten-steak-out.png", "https://devast.io/img/inv-rotten-steak-in.png", "https://devast.io/img/inv-rotten-steak-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  stack: 10,
  loot: LOOTID.__ROTTEN_STEAK__,
  wait: 5,
  idWeapon: 14,
  detail: new Detail("Rotten Steak", "Don't eat that."),
  score: 20
}, {
  id: IID.__ORANGE__,
  itemButton: {
    src: ["https://devast.io/img/inv-orange-out.png", "https://devast.io/img/inv-orange-in.png", "https://devast.io/img/inv-orange-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Orange", "A little hungry?"),
  stack: 20,
  loot: LOOTID.__ORANGE__,
  wait: 5,
  perish: 10,
  perishId: IID.__ROTTEN_ORANGE__,
  idWeapon: 15,
  score: 24
}, {
  id: IID.__ROTTEN_ORANGE__,
  itemButton: {
    src: ["https://devast.io/img/inv-rotten-orange-out.png", "https://devast.io/img/inv-rotten-orange-in.png", "https://devast.io/img/inv-rotten-orange-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Rotten Orange", "Go on, have a bite!", SKILLS.__PLANT__, [
    [IID.__ORANGE__, 4]
  ], 8, [
    [AREAS.__COMPOST__, 4e4]
  ]),
  stack: 20,
  loot: LOOTID.__ROTTEN_ORANGE__,
  wait: 5,
  idWeapon: 16,
  score: 20
}, {
  id: IID.__SEED_ORANGE__,
  itemButton: {
    src: ["https://devast.io/img/inv-orange-seed-out.png", "https://devast.io/img/inv-orange-seed-in.png", "https://devast.io/img/inv-orange-seed-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Orange Seed", "Fill up on Vitame C?", SKILLS.__PLANT__, [
    [IID.__ORANGE__, 4]
  ], 1, [
    [AREAS.__FIRE__, 2e4],
    [AREAS.__BBQ__, 15e3]
  ]),
  stack: 40,
  loot: LOOTID.__SEED_ORANGE__,
  fruit: LOOTID.__ORANGE__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [30, 30, 30, 30],
  height: [30, 30, 30, 30],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [35, 35, 35, 35],
  _y: [35, 35, 35, 35],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-plant2-orange.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-plant2-orange.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 0,
  behavior: BEHAVIOR.__SEED__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.orangeSeed,
  impact: SOUNDID.__NO_SOUND__,
  destroy: SOUNDID.__NO_SOUND__,
  building: [{
    src: "https://devast.io/img/day-plant0-orange.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-plant1-orange.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-plant2-orange.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-plant3-orange.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-plant4-orange.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__ORANGE__,
  particlesDist: 68,
  timelife: 24e5,
  life: 250,
  score: 0
}, {
  id: IID.__HACHET__,
  itemButton: {
    src: ["https://devast.io/img/inv-hachet-out.png", "https://devast.io/img/inv-hachet-in.png", "https://devast.io/img/inv-hachet-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Hatchet", "Harvest Wood and Stone.", SKILLS.__TOOL__, [
    [IID.__WOOD__, 10],
    [IID.__STONE__, 2]
  ], 1, [
    [AREAS.__PLAYER__, 5e3],
    [AREAS.__WORKBENCH__, 1e4]
  ]),
  idWeapon: 3,
  stack: 1,
  loot: LOOTID.__HACHET__,
  wait: 10
}, {
  id: IID.__STONE_PICKAXE__,
  itemButton: {
    src: ["https://devast.io/img/inv-stone-pickaxe-out.png", "https://devast.io/img/inv-stone-pickaxe-in.png", "https://devast.io/img/inv-stone-pickaxe-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Stone Pickaxe", "Mine Stone and Iron.", SKILLS.__TOOL__, [
    [IID.__WOOD__, 100],
    [IID.__STONE__, 30]
  ], 1, [
    [AREAS.__WORKBENCH__, 3e4]
  ]),
  idWeapon: 1,
  stack: 1,
  loot: LOOTID.__STONE_PICKAXE__,
  wait: 10
}, {
  id: IID.__STEEL_PICKAXE__,
  itemButton: {
    src: ["https://devast.io/img/inv-steel-pickaxe-out.png", "https://devast.io/img/inv-steel-pickaxe-in.png", "https://devast.io/img/inv-steel-pickaxe-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Metal Pickaxe", "Mine also Sulfur", SKILLS.__TOOL__, [
    [IID.__STONE__, 150],
    [IID.__SHAPED_METAL__, 6]
  ], 1, [
    [AREAS.__WORKBENCH2__, 6e4]
  ], 6),
  idWeapon: 2,
  stack: 1,
  loot: LOOTID.__STEEL_PICKAXE__,
  wait: 10
}, {
  id: IID.__STONE_AXE__,
  itemButton: {
    src: ["https://devast.io/img/inv-stone-axe-out.png", "https://devast.io/img/inv-stone-axe-in.png", "https://devast.io/img/inv-stone-axe-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Metal Axe", "Harvest a lot of Wood", SKILLS.__TOOL__, [
    [IID.__WOOD__, 150],
    [IID.__SHAPED_METAL__, 7]
  ], 1, [
    [AREAS.__WORKBENCH2__, 8e4]
  ], 5),
  idWeapon: 4,
  stack: 1,
  loot: LOOTID.__STONE_AXE__,
  wait: 10
}, {
  id: IID.__WORKBENCH__,
  itemButton: {
    src: ["https://devast.io/img/inv-workbench-out.png", "https://devast.io/img/inv-workbench-in.png", "https://devast.io/img/inv-workbench-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Workbench", "Allow you to make new INVENTORY.", SKILLS.__SURVIVAL__, [
    [IID.__WOOD__, 40],
    [IID.__STONE__, 20]
  ], 1, [
    [AREAS.__PLAYER__, 15e3],
    [AREAS.__WORKBENCH__, 15e3]
  ]),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 1,
  area: AREAS.__WORKBENCH__,
  stack: 255,
  loot: LOOTID.__WORKBENCH__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-workbench.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-workbench.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: Render.workbench,
  packetId: 16,
  interact: {
    src: "https://devast.io/img/e-workbench.png",
    img: {
      isLoaded: 0
    }
  },
  impact: SOUNDID.__WOOD_IMPACT__,
  destroy: SOUNDID.__WOOD_DESTROY__,
  building: {
    src: "https://devast.io/img/day-workbench.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__WOOD__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: IID.__WOOD_SPEAR__,
  itemButton: {
    src: ["https://devast.io/img/inv-wood-spear-out.png", "https://devast.io/img/inv-wood-spear-in.png", "https://devast.io/img/inv-wood-spear-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Wood Spear", "Don't forget to pick it up.", SKILLS.__WEAPON__, [
    [IID.__WOOD__, 70]
  ], 1, [
    [AREAS.__PLAYER__, 15e3],
    [AREAS.__WORKBENCH__, 2e4]
  ]),
  idWeapon: 5,
  stack: 1,
  loot: LOOTID.__WOOD_SPEAR__,
  wait: 10
}, {
  id: IID.__WOOD_BOW__,
  itemButton: {
    src: ["https://devast.io/img/inv-wood-bow-out.png", "https://devast.io/img/inv-wood-bow-in.png", "https://devast.io/img/inv-wood-bow-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Wood Bow", "Where are the cowboys?", SKILLS.__WEAPON__, [
    [IID.__WOOD__, 60],
    [IID.__ANIMAL_TENDON__, 2]
  ], 1, [
    [AREAS.__PLAYER__, 35e3],
    [AREAS.__WORKBENCH__, 5e4]
  ]),
  bullet: IID.__WOOD_ARROW__,
  mMVwm: 1,
  idWeapon: 6,
  stack: 1,
  loot: LOOTID.__WOOD_BOW__,
  wait: 10
}, {
  id: IID.__9MM__,
  itemButton: {
    src: ["https://devast.io/img/inv-9mm-out.png", "https://devast.io/img/inv-9mm-in.png", "https://devast.io/img/inv-9mm-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("9MM", "I hope you know how to aim.", SKILLS.__WEAPON__, [
    [IID.__JUNK__, 6],
    [IID.__SHAPED_METAL__, 9]
  ], 1, [
    [AREAS.__WORKBENCH2__, 16e4]
  ], 7),
  idWeapon: 8,
  bullet: IID.__BULLET_9MM__,
  stack: 1,
  loot: LOOTID.__9MM__,
  wait: 10
}, {
  id: IID.__DESERT_EAGLE__,
  itemButton: {
    src: ["https://devast.io/img/inv-desert-eagle-out.png", "https://devast.io/img/inv-desert-eagle-in.png", "https://devast.io/img/inv-desert-eagle-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Desert Eagle", "Pretty useful for self-defense.", SKILLS.__WEAPON__, [
    [IID.__ALLOYS__, 4],
    [IID.__SHAPED_METAL__, 2]
  ], 1, [
    [AREAS.__WORKBENCH2__, 18e4]
  ], 9, IID.__9MM__),
  idWeapon: 9,
  bullet: IID.__BULLET_9MM__,
  stack: 1,
  loot: LOOTID.__DESERT_EAGLE__,
  wait: 10
}, {
  id: IID.__SHOTGUN__,
  itemButton: {
    src: ["https://devast.io/img/inv-shotgun-out.png", "https://devast.io/img/inv-shotgun-in.png", "https://devast.io/img/inv-shotgun-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Shotgun", "He's dead now, don't you think?", SKILLS.__WEAPON__, [
    [IID.__ALLOYS__, 6],
    [IID.__SHAPED_METAL__, 6]
  ], 1, [
    [AREAS.__WORKBENCH2__, 2e5]
  ], 11),
  idWeapon: 7,
  bullet: IID.__BULLET_SHOTGUN__,
  stack: 1,
  loot: LOOTID.__SHOTGUN__,
  wait: 10
}, {
  id: IID.__AK47__,
  itemButton: {
    src: ["https://devast.io/img/inv-ak47-out.png", "https://devast.io/img/inv-ak47-in.png", "https://devast.io/img/inv-ak47-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("AK47", "Revolution time", SKILLS.__WEAPON__, [
    [IID.__ALLOYS__, 14],
    [IID.__SHAPED_METAL__, 8]
  ], 1, [
    [AREAS.__WORKBENCH2__, 18e4]
  ], 12, IID.__MP5__),
  idWeapon: 10,
  bullet: IID.__BULLET_SNIPER__,
  stack: 1,
  loot: LOOTID.__AK47__,
  wait: 10
}, {
  id: IID.__SNIPER__,
  itemButton: {
    src: ["https://devast.io/img/inv-sniper-out.png", "https://devast.io/img/inv-sniper-in.png", "https://devast.io/img/inv-sniper-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Sniper", "For the very angry shy", SKILLS.__WEAPON__, [
    [IID.__ALLOYS__, 10],
    [IID.__SHAPED_METAL__, 8]
  ], 1, [
    [AREAS.__WORKBENCH2__, 18e4]
  ], 13),
  idWeapon: 11,
  bullet: IID.__BULLET_SNIPER__,
  stack: 1,
  loot: LOOTID.__SNIPER__,
  wait: 10
}, {
  id: IID.__WOOD_WALL__,
  itemButton: {
    src: ["https://devast.io/img/inv-wood-wall-out.png", "https://devast.io/img/inv-wood-wall-in.png", "https://devast.io/img/inv-wood-wall-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Wooden Wall", "Protected from the wind.", SKILLS.__BUILDING__, [
    [IID.__WOOD__, 20]
  ], 1, [
    [AREAS.__WORKBENCH__, 1e4]
  ]),
  idWeapon: 21,
  fuel: -1,
  zid: 1,
  z: 1,
  stack: 255,
  loot: LOOTID.__WOOD_WALL__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-wood-wall.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-wood-wall.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: IID.__WOOD_WALL__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: Render.wall,
  drawFloor: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ],
  broken: [{
    src: "https://devast.io/img/day-wood-wall-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__WOOD_IMPACT__,
  destroy: SOUNDID.__WOOD_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-wood-wall0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-wall46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__WOOD__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 3e3,
  score: 0
}, {
  id: IID.__STONE_WALL__,
  itemButton: {
    src: ["https://devast.io/img/inv-stone-wall-out.png", "https://devast.io/img/inv-stone-wall-in.png", "https://devast.io/img/inv-stone-wall-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Stone Wall", "Saved the 3 little pigs.", SKILLS.__BUILDING__, [
    [IID.__STONE__, 20]
  ], 1, [
    [AREAS.__WORKBENCH__, 15e3]
  ], 3),
  idWeapon: 21,
  fuel: -1,
  zid: 1,
  z: 1,
  stack: 255,
  loot: LOOTID.__STONE_WALL__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-stone-wall.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-stone-wall.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: IID.__STONE_WALL__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: Render.wall,
  drawFloor: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ],
  broken: [{
    src: "https://devast.io/img/day-stone-wall-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__STONE_IMPACT__,
  destroy: SOUNDID.__STONE_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-stone-wall0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-wall46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__STONE__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 7e3,
  score: 0
}, {
  id: IID.__STEEL_WALL__,
  itemButton: {
    src: ["https://devast.io/img/inv-steel-wall-out.png", "https://devast.io/img/inv-steel-wall-in.png", "https://devast.io/img/inv-steel-wall-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Metal Wall", "Afraid we'll find you?", SKILLS.__BUILDING__, [
    [IID.__SHAPED_METAL__, 3]
  ], 1, [
    [AREAS.__WORKBENCH2__, 2e4]
  ], 6, IID.__STONE_WALL__),
  idWeapon: 21,
  fuel: -1,
  zid: 1,
  z: 1,
  stack: 255,
  loot: LOOTID.__STEEL_WALL__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-stone-wall.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-stone-wall.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: IID.__STEEL_WALL__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: Render.wall,
  drawFloor: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ],
  broken: [{
    src: "https://devast.io/img/day-steel-wall-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-steel-wall0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-wall46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__STEEL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 15e3,
  score: 0
}, {
  id: IID.__WOOD_DOOR__,
  itemButton: {
    src: ["https://devast.io/img/inv-wood-door-out.png", "https://devast.io/img/inv-wood-door-in.png", "https://devast.io/img/inv-wood-door-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Wooden Low Door", "You can shoot through it.", SKILLS.__BUILDING__, [
    [IID.__WOOD__, 40]
  ], 1, [
    [AREAS.__WORKBENCH__, 15e3]
  ]),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 0,
  stack: 255,
  loot: LOOTID.__WOOD_DOOR__,
  wait: 10,
  delay: 600,
  width: [100, 35, 100, 35],
  height: [35, 100, 35, 100],
  xCenter: [0, -30, 0, 30],
  yCenter: [30, 0, -30, 0],
  _x: [0, 0, 0, 65],
  _y: [65, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-wood-door.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-wood-door.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 1,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI / 2,
  iMove: [1, 0, -1, 0],
  jMove: [0, -1, 0, 1],
  xMove: [0, 0, 65, 0],
  yMove: [0, 0, 0, 65],
  wMove: [35, 100, 35, 100],
  hMove: [100, 35, 100, 35],
  xRotate: 6,
  yRotate: 46,
  draw: Render.door,
  packetId: 15,
  interact: {
    src: "https://devast.io/img/e-opendoor.png",
    img: {
      isLoaded: 0
    }
  },
  interactclose: {
    src: "https://devast.io/img/e-closedoor.png",
    img: {
      isLoaded: 0
    }
  },
  broken: [{
    src: "https://devast.io/img/day-wood-door-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-door-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-door-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__WOOD_IMPACT__,
  destroy: SOUNDID.__WOOD_DESTROY__,
  building: {
    src: "https://devast.io/img/day-wood-door.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__WOOD__,
  particlesDist: 55,
  timelife: 31536e7,
  life: 2e3,
  score: 0
}, {
  id: IID.__STONE_DOOR__,
  itemButton: {
    src: ["https://devast.io/img/inv-stone-door-out.png", "https://devast.io/img/inv-stone-door-in.png", "https://devast.io/img/inv-stone-door-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Stone Low Door", "You can shoot through it.", SKILLS.__BUILDING__, [
    [IID.__STONE__, 40]
  ], 1, [
    [AREAS.__WORKBENCH__, 15e3]
  ], 3),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 0,
  stack: 255,
  loot: LOOTID.__STONE_DOOR__,
  wait: 10,
  delay: 600,
  width: [100, 35, 100, 35],
  height: [35, 100, 35, 100],
  xCenter: [0, -30, 0, 30],
  yCenter: [30, 0, -30, 0],
  _x: [0, 0, 0, 65],
  _y: [65, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-stone-door.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-stone-door.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 1,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI / 2,
  iMove: [1, 0, -1, 0],
  jMove: [0, -1, 0, 1],
  xMove: [0, 0, 65, 0],
  yMove: [0, 0, 0, 65],
  wMove: [35, 100, 35, 100],
  hMove: [100, 35, 100, 35],
  xRotate: 6,
  yRotate: 46,
  draw: Render.door,
  packetId: 15,
  interact: {
    src: "https://devast.io/img/e-opendoor.png",
    img: {
      isLoaded: 0
    }
  },
  interactclose: {
    src: "https://devast.io/img/e-closedoor.png",
    img: {
      isLoaded: 0
    }
  },
  broken: [{
    src: "https://devast.io/img/day-stone-door-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-door-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-door-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__STONE_IMPACT__,
  destroy: SOUNDID.__STONE_DESTROY__,
  building: {
    src: "https://devast.io/img/day-stone-door.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__STONE__,
  particlesDist: 55,
  timelife: 31536e7,
  life: 5e3,
  score: 0
}, {
  id: IID.__STEEL_DOOR__,
  itemButton: {
    src: ["https://devast.io/img/inv-steel-door-out.png", "https://devast.io/img/inv-steel-door-in.png", "https://devast.io/img/inv-steel-door-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Metal Low Door", "Killing at home, for more comfort.", SKILLS.__BUILDING__, [
    [IID.__SHAPED_METAL__, 6]
  ], 1, [
    [AREAS.__WORKBENCH2__, 3e4]
  ], 6, IID.__STONE_DOOR__),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 0,
  stack: 255,
  loot: LOOTID.__STEEL_DOOR__,
  wait: 10,
  delay: 600,
  width: [100, 35, 100, 35],
  height: [35, 100, 35, 100],
  xCenter: [0, -30, 0, 30],
  yCenter: [30, 0, -30, 0],
  _x: [0, 0, 0, 65],
  _y: [65, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-stone-door.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-stone-door.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 1,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI / 2,
  iMove: [1, 0, -1, 0],
  jMove: [0, -1, 0, 1],
  xMove: [0, 0, 65, 0],
  yMove: [0, 0, 0, 65],
  wMove: [35, 100, 35, 100],
  hMove: [100, 35, 100, 35],
  xRotate: 6,
  yRotate: 46,
  draw: Render.door,
  packetId: 15,
  interact: {
    src: "https://devast.io/img/e-opendoor.png",
    img: {
      isLoaded: 0
    }
  },
  interactclose: {
    src: "https://devast.io/img/e-closedoor.png",
    img: {
      isLoaded: 0
    }
  },
  broken: [{
    src: "https://devast.io/img/day-steel-door-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-door-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-door-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: {
    src: "https://devast.io/img/day-steel-door.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__STEEL__,
  particlesDist: 55,
  timelife: 31536e7,
  life: 1e4,
  score: 0
}, {
  id: IID.__CAMPFIRE__,
  itemButton: {
    src: ["https://devast.io/img/inv-campfire-out.png", "https://devast.io/img/inv-campfire-in.png", "https://devast.io/img/inv-campfire-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Campfire", "Warm you when you're cold.", SKILLS.__SURVIVAL__, [
    [IID.__WOOD__, 30],
    [IID.__STONE__, 5]
  ], 1, [
    [AREAS.__PLAYER__, 8e3],
    [AREAS.__WORKBENCH__, 15e3]
  ]),
  idWeapon: 21,
  fuel: 15e3,
  zid: -1,
  z: 0,
  area: AREAS.__FIRE__,
  stack: 255,
  loot: LOOTID.__CAMPFIRE__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-campfire.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-campfire.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: __WARM__,
  draw: Render.campfire,
  drawTop: Render.campfireLight,
  packetId: 16,
  interact: {
    src: "https://devast.io/img/e-campfire.png",
    img: {
      isLoaded: 0
    }
  },
  impact: SOUNDID.__WOOD_IMPACT__,
  destroy: SOUNDID.__WOOD_DESTROY__,
  building: {
    src: "https://devast.io/img/day-campfire.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__WOOD__,
  particlesDist: 80,
  timelife: 6e5,
  life: 150,
  score: 0
}, {
  id: IID.__BULLET_9MM__,
  itemButton: {
    src: ["https://devast.io/img/inv-bullet-9mm-out.png", "https://devast.io/img/inv-bullet-9mm-in.png", "https://devast.io/img/inv-bullet-9mm-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Bullet", "For 9MM, Desert Eagle, and MP5 ", SKILLS.__WEAPON__, [
    [IID.__SULFUR__, 3],
    [IID.__SHAPED_METAL__, 3],
    [IID.__ANIMAL_FAT__, 3]
  ], 30, [
    [AREAS.__WORKBENCH2__, 1e4]
  ], 6),
  stack: 255,
  loot: LOOTID.__BULLET_9MM__
}, {
  id: IID.__BULLET_SHOTGUN__,
  itemButton: {
    src: ["https://devast.io/img/inv-bullet-shotgun-out.png", "https://devast.io/img/inv-bullet-shotgun-in.png", "https://devast.io/img/inv-bullet-shotgun-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Cartridge", "For Shotgun", SKILLS.__WEAPON__, [
    [IID.__ALLOYS__, 1],
    [IID.__SHAPED_METAL__, 4],
    [IID.__ANIMAL_FAT__, 4]
  ], 15, [
    [AREAS.__WORKBENCH2__, 1e4]
  ], 10),
  stack: 255,
  loot: LOOTID.__BULLET_SHOTGUN__
}, {
  id: IID.__BULLET_SNIPER__,
  itemButton: {
    src: ["https://devast.io/img/inv-bullet-sniper-out.png", "https://devast.io/img/inv-bullet-sniper-in.png", "https://devast.io/img/inv-bullet-sniper-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Heavy Bullet", "For Sniper, and AK47", SKILLS.__WEAPON__, [
    [IID.__ALLOYS__, 1],
    [IID.__SHAPED_METAL__, 4],
    [IID.__ANIMAL_FAT__, 4]
  ], 30, [
    [AREAS.__WORKBENCH2__, 1e4]
  ], 11),
  stack: 255,
  loot: LOOTID.__BULLET_SNIPER__
}, {
  id: IID.__MEDIKIT__,
  itemButton: {
    src: ["https://devast.io/img/inv-medikit-out.png", "https://devast.io/img/inv-medikit-in.png", "https://devast.io/img/inv-medikit-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Medkit", "Regenerate your life.", SKILLS.__DRUG__, [
    [IID.__STRING__, 2],
    [IID.__BANDAGE__, 1],
    [IID.__LEATHER_BOAR__, 2],
    [IID.__SHAPED_METAL__, 2]
  ], 1, [
    [AREAS.__WORKBENCH2__, 8e4]
  ], 10),
  idWeapon: 17,
  stack: 2,
  loot: LOOTID.__MEDIKIT__,
  wait: 10
}, {
  id: IID.__BANDAGE__,
  itemButton: {
    src: ["https://devast.io/img/inv-bandage-out.png", "https://devast.io/img/inv-bandage-in.png", "https://devast.io/img/inv-bandage-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Bandage", "To heal the boo-boos.", SKILLS.__DRUG__, [
    [IID.__STRING__, 1],
    [IID.__LEATHER_BOAR__, 2]
  ], 1, [
    [AREAS.__WEAVING__, 2e4]
  ]),
  idWeapon: 18,
  stack: 5,
  loot: LOOTID.__BANDAGE__,
  wait: 10
}, {
  id: IID.__SODA__,
  itemButton: {
    src: ["https://devast.io/img/inv-soda-out.png", "https://devast.io/img/inv-soda-in.png", "https://devast.io/img/inv-soda-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Soda", "Give energy.", SKILLS.__SURVIVAL__, [
    [IID.__GHOUL_BLOOD__, 1],
    [IID.__CHEMICAL_COMPONENT__, 1],
    [IID.__CAN__, 1]
  ], 1, [
    [AREAS.__FIRE__, 4e4],
    [AREAS.__BBQ__, 4e4]
  ], 5),
  idWeapon: 19,
  stack: 5,
  loot: LOOTID.__SODA__,
  perish: 2,
  perishId: IID.__CAN__,
  wait: 10
}, {
  id: IID.__MP5__,
  itemButton: {
    src: ["https://devast.io/img/inv-MP5-out.png", "https://devast.io/img/inv-MP5-in.png", "https://devast.io/img/inv-MP5-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("MP5", "Not bad.", SKILLS.__WEAPON__, [
    [IID.__ALLOYS__, 6],
    [IID.__SHAPED_METAL__, 6]
  ], 1, [
    [AREAS.__WORKBENCH2__, 2e5]
  ], 10),
  idWeapon: 20,
  bullet: IID.__BULLET_9MM__,
  stack: 1,
  loot: LOOTID.__MP5__,
  wait: 10
}, {
  id: IID.__HEADSCARF__,
  itemButton: {
    src: ["https://devast.io/img/inv-headscarf-out.png", "https://devast.io/img/inv-headscarf-in.png", "https://devast.io/img/inv-headscarf-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Headscarf", "Warm you up.", SKILLS.__CLOTHE__, [
    [IID.__STRING__, 1],
    [IID.__LEATHER_BOAR__, 1]
  ], 1, [
    [AREAS.__WEAVING__, 6e4]
  ]),
  idClothe: 1,
  stack: 1,
  loot: LOOTID.__HEADSCARF__,
  wait: 10,
  warm: 85e-5,
  def: 0,
  bul: 0,
  ene: 0,
  boom: 0,
  rad: 0,
  speed: 0
}, {
  id: IID.__CHAPKA__,
  itemButton: {
    src: ["https://devast.io/img/inv-chapka-out.png", "https://devast.io/img/inv-chapka-in.png", "https://devast.io/img/inv-chapka-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Chapka", "You look like a real woodcutter.", SKILLS.__CLOTHE__, [
    [IID.__STRING__, 6],
    [IID.__LEATHER_BOAR__, 8],
    [IID.__HEADSCARF__, 1]
  ], 1, [
    [AREAS.__WEAVING__, 12e4]
  ], 7),
  idClothe: 2,
  stack: 1,
  loot: LOOTID.__CHAPKA__,
  wait: 10,
  warm: .0017,
  def: 0,
  bul: 0,
  ene: 0,
  boom: 0,
  rad: 0,
  speed: 0
}, {
  id: IID.__WINTER_COAT__,
  itemButton: {
    src: ["https://devast.io/img/inv-coat-out.png", "https://devast.io/img/inv-coat-in.png", "https://devast.io/img/inv-coat-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Winter Coat", "Is the weather really that cold?", SKILLS.__CLOTHE__, [
    [IID.__STRING__, 15],
    [IID.__LEATHER_BOAR__, 20],
    [IID.__CHAPKA__, 1]
  ], 1, [
    [AREAS.__WEAVING__, 18e4]
  ], 9, IID.__CHAPKA__),
  idClothe: 3,
  stack: 1,
  loot: LOOTID.__WINTER_COAT__,
  wait: 10,
  warm: .0026,
  def: 0,
  bul: 0,
  ene: 0,
  boom: 0,
  rad: 0,
  speed: 0
}, {
  id: IID.__GAZ_MASK__,
  itemButton: {
    src: ["https://devast.io/img/inv-gaz-mask-out.png", "https://devast.io/img/inv-gaz-mask-in.png", "https://devast.io/img/inv-gaz-mask-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Radiation Mask", "Protect you from Radioactivity.", SKILLS.__CLOTHE__, [
    [IID.__SHAPED_METAL__, 1],
    [IID.__STRING__, 1],
    [IID.__LEATHER_BOAR__, 2]
  ], 1, [
    [AREAS.__WEAVING__, 6e4]
  ]),
  idClothe: 4,
  stack: 1,
  loot: LOOTID.__GAZ_MASK__,
  wait: 10,
  warm: 0,
  def: 0,
  bul: 0,
  ene: 0,
  boom: 0,
  rad: .009,
  speed: 0
}, {
  id: IID.__GAZ_PROTECTION__,
  itemButton: {
    src: ["https://devast.io/img/inv-gaz-protection-out.png", "https://devast.io/img/inv-gaz-protection-in.png", "https://devast.io/img/inv-gaz-protection-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Min. Radiation Suit", "Previously, on Breaking Bad.", SKILLS.__CLOTHE__, [
    [IID.__ALLOYS__, 2],
    [IID.__SHAPED_METAL__, 2],
    [IID.__STRING__, 4],
    [IID.__LEATHER_BOAR__, 4],
    [IID.__GAZ_MASK__, 1]
  ], 1, [
    [AREAS.__WEAVING__, 9e4]
  ], 8),
  idClothe: 5,
  stack: 1,
  loot: LOOTID.__GAZ_PROTECTION__,
  wait: 10,
  warm: 6e-4,
  def: 0,
  bul: 0,
  ene: 0,
  boom: 0,
  rad: .016,
  speed: 0
}, {
  id: IID.__RADIATION_SUIT__,
  itemButton: {
    src: ["https://devast.io/img/inv-radiation-suit-out.png", "https://devast.io/img/inv-radiation-suit-in.png", "https://devast.io/img/inv-radiation-suit-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Radiation Suit", "Let's not grow a second head.", SKILLS.__CLOTHE__, [
    [IID.__ALLOYS__, 6],
    [IID.__SHAPED_METAL__, 4],
    [IID.__STRING__, 8],
    [IID.__LEATHER_BOAR__, 20],
    [IID.__GAZ_PROTECTION__, 1]
  ], 1, [
    [AREAS.__WEAVING__, 18e4]
  ], 10, IID.__GAZ_PROTECTION__),
  idClothe: 6,
  stack: 1,
  loot: LOOTID.__RADIATION_SUIT__,
  wait: 10,
  warm: 0,
  def: 0,
  bul: 0,
  ene: 0,
  boom: 0,
  rad: .022,
  speed: -.01
}, {
  id: IID.__WOOD_ARROW__,
  itemButton: {
    src: ["https://devast.io/img/inv-wood-arrow-out.png", "https://devast.io/img/inv-wood-arrow-in.png", "https://devast.io/img/inv-wood-arrow-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Wood Arrow", "Needed to use bow.", SKILLS.__WEAPON__, [
    [IID.__WOOD__, 40]
  ], 5, [
    [AREAS.__PLAYER__, 15e3],
    [AREAS.__WORKBENCH__, 1e4]
  ]),
  stack: 255,
  loot: LOOTID.__WOOD_ARROW__
}, {
  id: IID.__CAMPFIRE_BBQ__,
  itemButton: {
    src: ["https://devast.io/img/inv-campfire-bbq-out.png", "https://devast.io/img/inv-campfire-bbq-in.png", "https://devast.io/img/inv-campfire-bbq-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Firepit", "Warm up and melt iron slowly.", SKILLS.__SURVIVAL__, [
    [IID.__WOOD__, 120],
    [IID.__STONE__, 20],
    [IID.__STEEL__, 4]
  ], 1, [
    [AREAS.__WORKBENCH__, 2e4]
  ], 3),
  idWeapon: 21,
  fuel: 2e4,
  zid: -1,
  z: 0,
  area: AREAS.__BBQ__,
  stack: 255,
  loot: LOOTID.__CAMPFIRE_BBQ__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-campfire-bbq.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-campfire-bbq.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: __WARM__,
  draw: Render.campfire,
  drawTop: Render.campfireLight,
  packetId: 16,
  interact: {
    src: "https://devast.io/img/e-campfire-bbq.png",
    img: {
      isLoaded: 0
    }
  },
  impact: SOUNDID.__WOOD_IMPACT__,
  destroy: SOUNDID.__WOOD_DESTROY__,
  building: {
    src: "https://devast.io/img/day-campfire-bbq.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__WOOD__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: IID.__SMELTER__,
  itemButton: {
    src: ["https://devast.io/img/inv-smelter-out.png", "https://devast.io/img/inv-smelter-in.png", "https://devast.io/img/inv-smelter-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Smelter", "Melt iron, uranium and alloys", SKILLS.__SURVIVAL__, [
    [IID.__SHAPED_METAL__, 6],
    [IID.__ELECTRONICS__, 1]
  ], 1, [
    [AREAS.__WORKBENCH2__, 1e5]
  ], 10),
  idWeapon: 21,
  fuel: 42e3,
  zid: 1,
  z: 1,
  area: AREAS.__SMELTER__,
  stack: 255,
  loot: LOOTID.__SMELTER__,
  wait: 10,
  delay: 1e3,
  width: [100, 260, 100, 260],
  height: [260, 100, 260, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, -80, 0, -80],
  _y: [-80, 0, -80, 0],
  iTile: [-1, 0, -1, 0],
  jTile: [0, -1, 0, -1],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-smelter.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-smelter.png",
    img: {
      isLoaded: 0
    }
  },
  xLight: [-20.5, -101.5, 20.5, 101.5],
  yLight: [101.5, -20.5, -101, 20.5],
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: Render.smelter,
  packetId: 16,
  interact: {
    src: "https://devast.io/img/e-smelter.png",
    img: {
      isLoaded: 0
    }
  },
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-smelter-off.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-smelter-on.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-smelter-light-up.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-smelter-light-down.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 3e3,
  score: 0
}, {
  id: IID.__WOOD_BIGDOOR__,
  itemButton: {
    src: ["https://devast.io/img/inv-wood-door1-out.png", "https://devast.io/img/inv-wood-door1-in.png", "https://devast.io/img/inv-wood-door1-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Wooden Door", "Let's hope it holds.", SKILLS.__BUILDING__, [
    [IID.__WOOD__, 60]
  ], 1, [
    [AREAS.__WORKBENCH__, 2e4]
  ]),
  idWeapon: 21,
  fuel: -1,
  zid: 1,
  z: 1,
  stack: 255,
  loot: LOOTID.__WOOD_BIGDOOR__,
  wait: 10,
  delay: 600,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-wood-door1.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-wood-door1.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 1,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI,
  iMove: [1, -1, -1, 1],
  jMove: [-1, -1, 1, 1],
  xMove: [0, 0, 0, 0],
  yMove: [0, 0, 0, 0],
  wMove: [100, 100, 100, 100],
  hMove: [100, 100, 100, 100],
  xRotate: 17,
  yRotate: 113,
  draw: Render.door,
  packetId: 15,
  interact: {
    src: "https://devast.io/img/e-opendoor.png",
    img: {
      isLoaded: 0
    }
  },
  interactclose: {
    src: "https://devast.io/img/e-closedoor.png",
    img: {
      isLoaded: 0
    }
  },
  broken: [{
    src: "https://devast.io/img/day-wood-door1-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-door1-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-door1-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__WOOD_IMPACT__,
  destroy: SOUNDID.__WOOD_DESTROY__,
  building: {
    src: "https://devast.io/img/day-wood-door1.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__WOOD__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 2500,
  score: 0
}, {
  id: IID.__STONE_BIGDOOR__,
  itemButton: {
    src: ["https://devast.io/img/inv-stone-door1-out.png", "https://devast.io/img/inv-stone-door1-in.png", "https://devast.io/img/inv-stone-door1-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Stone Door", "Not too heavy to open, I hope.", SKILLS.__BUILDING__, [
    [IID.__STONE__, 60]
  ], 1, [
    [AREAS.__WORKBENCH__, 2e4]
  ], 3),
  idWeapon: 21,
  fuel: -1,
  zid: 1,
  z: 1,
  stack: 255,
  loot: LOOTID.__STONE_BIGDOOR__,
  wait: 10,
  delay: 600,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-stone-door1.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-stone-door1.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 1,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI,
  iMove: [1, -1, -1, 1],
  jMove: [-1, -1, 1, 1],
  xMove: [0, 0, 0, 0],
  yMove: [0, 0, 0, 0],
  wMove: [100, 100, 100, 100],
  hMove: [100, 100, 100, 100],
  xRotate: 17,
  yRotate: 113,
  draw: Render.door,
  packetId: 15,
  interact: {
    src: "https://devast.io/img/e-opendoor.png",
    img: {
      isLoaded: 0
    }
  },
  interactclose: {
    src: "https://devast.io/img/e-closedoor.png",
    img: {
      isLoaded: 0
    }
  },
  broken: [{
    src: "https://devast.io/img/day-stone-door1-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-door1-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-door1-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__STONE_IMPACT__,
  destroy: SOUNDID.__STONE_DESTROY__,
  building: {
    src: "https://devast.io/img/day-stone-door1.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__STONE__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 6e3,
  score: 0
}, {
  id: IID.__STEEL_BIGDOOR__,
  itemButton: {
    src: ["https://devast.io/img/inv-steel-door1-out.png", "https://devast.io/img/inv-steel-door1-in.png", "https://devast.io/img/inv-steel-door1-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Metal Door", "I guess you're safe.", SKILLS.__BUILDING__, [
    [IID.__SHAPED_METAL__, 9]
  ], 1, [
    [AREAS.__WORKBENCH2__, 4e4]
  ], 6, IID.__STONE_BIGDOOR__),
  idWeapon: 21,
  fuel: -1,
  zid: 1,
  z: 1,
  stack: 255,
  loot: LOOTID.__STEEL_BIGDOOR__,
  wait: 10,
  delay: 600,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-stone-door1.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-stone-door1.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 1,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI,
  iMove: [1, -1, -1, 1],
  jMove: [-1, -1, 1, 1],
  xMove: [0, 0, 0, 0],
  yMove: [0, 0, 0, 0],
  wMove: [100, 100, 100, 100],
  hMove: [100, 100, 100, 100],
  xRotate: 17,
  yRotate: 113,
  draw: Render.door,
  packetId: 15,
  interact: {
    src: "https://devast.io/img/e-opendoor.png",
    img: {
      isLoaded: 0
    }
  },
  interactclose: {
    src: "https://devast.io/img/e-closedoor.png",
    img: {
      isLoaded: 0
    }
  },
  broken: [{
    src: "https://devast.io/img/day-steel-door1-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-door1-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-door1-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: {
    src: "https://devast.io/img/day-steel-door1.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__STEEL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 12500,
  score: 0
}, {
  id: IID.__SULFUR__,
  itemButton: {
    src: ["https://devast.io/img/inv-sulfur-out.png", "https://devast.io/img/inv-sulfur-in.png", "https://devast.io/img/inv-sulfur-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Sulfur", "Sulfur in such a cold landscape?", SKILLS.__MINERAL__, [], 0, [
    [AREAS.__EXTRACTOR__, 24e4]
  ]),
  craftStart: 4,
  craftRng: 8,
  stack: 255,
  loot: LOOTID.__SULFUR__,
  score: 32
}, {
  id: IID.__SHAPED_URANIUM__,
  itemButton: {
    src: ["https://devast.io/img/inv-shaped-uranium-out.png", "https://devast.io/img/inv-shaped-uranium-in.png", "https://devast.io/img/inv-shaped-uranium-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Shaped Uranium", "Are you out of your mind?", SKILLS.__MINERAL__, [
    [IID.__URANIUM__, 1]
  ], 1, [
    [AREAS.__SMELTER__, 2e4]
  ]),
  stack: 255,
  loot: LOOTID.__SHAPED_URANIUM__,
  score: 0
}, {
  id: IID.__WORKBENCH2__,
  itemButton: {
    src: ["https://devast.io/img/inv-workbench2-out.png", "https://devast.io/img/inv-workbench2-in.png", "https://devast.io/img/inv-workbench2-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Research Bench", "Allow you to make new INVENTORY", SKILLS.__SURVIVAL__, [
    [IID.__SHAPED_METAL__, 6],
    [IID.__ELECTRONICS__, 1]
  ], 1, [
    [AREAS.__WORKBENCH__, 5e4]
  ], 6),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 1,
  area: AREAS.__WORKBENCH2__,
  stack: 255,
  loot: LOOTID.__WORKBENCH2__,
  wait: 10,
  delay: 1e3,
  width: [100, 290, 100, 280],
  height: [280, 100, 280, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, -90, 0, -90],
  _y: [-90, 0, -90, 0],
  iTile: [-1, 0, -1, 0],
  jTile: [0, -1, 0, -1],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-workbench2.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-workbench2.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: Render.workbench2,
  packetId: 16,
  interact: {
    src: "https://devast.io/img/e-workbench2.png",
    img: {
      isLoaded: 0
    }
  },
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: {
    src: "https://devast.io/img/day-workbench2.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 400,
  score: 0
}, {
  id: IID.__URANIUM__,
  itemButton: {
    src: ["https://devast.io/img/inv-uranium-out.png", "https://devast.io/img/inv-uranium-in.png", "https://devast.io/img/inv-uranium-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Uranium", "Do you want to end up as Marie Curie?", SKILLS.__MINERAL__, [], 0, [
    [AREAS.__EXTRACTOR__, 24e4]
  ]),
  craftStart: 2,
  craftRng: 4,
  stack: 255,
  loot: LOOTID.__URANIUM__,
  score: 45
}, {
  id: IID.__WEAVING__,
  itemButton: {
    src: ["https://devast.io/img/inv-weaving-machine-out.png", "https://devast.io/img/inv-weaving-machine-in.png", "https://devast.io/img/inv-weaving-machine-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Weaving Machine", "Allow you to sew clothes", SKILLS.__SURVIVAL__, [
    [IID.__WOOD__, 80],
    [IID.__STONE__, 20],
    [IID.__STRING__, 2]
  ], 1, [
    [AREAS.__WORKBENCH__, 6e4]
  ]),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 1,
  area: AREAS.__WEAVING__,
  stack: 255,
  loot: LOOTID.__WEAVING__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-weaving-machine.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-weaving-machine.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: Render.workbench,
  packetId: 16,
  interact: {
    src: "https://devast.io/img/e-weaving-machine.png",
    img: {
      isLoaded: 0
    }
  },
  impact: SOUNDID.__WOOD_IMPACT__,
  destroy: SOUNDID.__WOOD_DESTROY__,
  building: {
    src: "https://devast.io/img/day-weaving-machine.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__WOOD__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: IID.__GASOLINE__,
  itemButton: {
    src: ["https://devast.io/img/inv-gasoline-out.png", "https://devast.io/img/inv-gasoline-in.png", "https://devast.io/img/inv-gasoline-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Gasoline", "Fuel for Smelter", SKILLS.__SURVIVAL__, [
    [IID.__ROTTEN_ORANGE__, 4],
    [IID.__SULFUR__, 1]
  ], 1, [
    [AREAS.__WORKBENCH2__, 2e4]
  ]),
  stack: 255,
  loot: LOOTID.__GASOLINE__
}, {
  id: IID.__SULFUR_PICKAXE__,
  itemButton: {
    src: ["https://devast.io/img/inv-sulfur-pickaxe-out.png", "https://devast.io/img/inv-sulfur-pickaxe-in.png", "https://devast.io/img/inv-sulfur-pickaxe-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Sulfur Pickaxe", "Mine also Uranium", SKILLS.__TOOL__, [
    [IID.__ALLOYS__, 2],
    [IID.__SHAPED_METAL__, 6],
    [IID.__SULFUR__, 6]
  ], 1, [
    [AREAS.__WORKBENCH2__, 9e4]
  ], 9, IID.__STEEL_PICKAXE__),
  idWeapon: 22,
  stack: 1,
  loot: LOOTID.__SULFUR_PICKAXE__,
  wait: 10
}, {
  id: IID.__CHEST__,
  itemButton: {
    src: ["https://devast.io/img/inv-chest-out.png", "https://devast.io/img/inv-chest-in.png", "https://devast.io/img/inv-chest-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Wood chest", "You can't store food in.", SKILLS.__BUILDING__, [
    [IID.__WOOD__, 50],
    [IID.__STONE__, 20]
  ], 1, [
    [AREAS.__WORKBENCH__, 3e4]
  ], 8),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 0,
  stack: 255,
  loot: LOOTID.__CHEST__,
  wait: 10,
  chest: 1,
  delay: 600,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-chest.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-chest.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI / 2,
  draw: Render.workbench,
  packetId: 25,
  interact: {
    src: "https://devast.io/img/e-chest.png",
    img: {
      isLoaded: 0
    }
  },
  impact: SOUNDID.__WOOD_IMPACT__,
  destroy: SOUNDID.__WOOD_DESTROY__,
  building: {
    src: "https://devast.io/img/day-chest.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__WOOD__,
  particlesDist: 55,
  timelife: 31536e7,
  life: 300,
  score: 0
}, {
  id: IID.__FRIDGE__,
  itemButton: {
    src: ["https://devast.io/img/inv-fridge-out.png", "https://devast.io/img/inv-fridge-in.png", "https://devast.io/img/inv-fridge-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Fridge", "Save your food.", SKILLS.__BUILDING__, [
    [IID.__SHAPED_METAL__, 5],
    [IID.__ENERGY_CELLS__, 4]
  ], 1, [
    [AREAS.__WORKBENCH2__, 9e4]
  ], 9),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 0,
  stack: 255,
  loot: LOOTID.__FRIDGE__,
  wait: 10,
  chest: 1,
  fridge: 1,
  delay: 600,
  width: [50, 100, 50, 100],
  height: [100, 50, 100, 50],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 50, 0],
  _y: [0, 0, 0, 50],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-fridge.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-fridge.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI / 2,
  draw: Render.workbench,
  packetId: 25,
  interact: {
    src: "https://devast.io/img/e-fridge.png",
    img: {
      isLoaded: 0
    }
  },
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: {
    src: "https://devast.io/img/day-fridge.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__METAL__,
  particlesDist: 55,
  timelife: 31536e7,
  life: 300,
  score: 0
}, {
  id: IID.__WOOD_FLOOR__,
  itemButton: {
    src: ["https://devast.io/img/inv-wood-floor-out.png", "https://devast.io/img/inv-wood-floor-in.png", "https://devast.io/img/inv-wood-floor-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Wood floor", "Players can't spawn on it", SKILLS.__BUILDING__, [
    [IID.__WOOD__, 15]
  ], 2, [
    [AREAS.__WORKBENCH__, 15e3]
  ]),
  stack: 255,
  loot: LOOTID.__WOOD_FLOOR__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: 2,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-wood-floor.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-wood-floor.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: IID.__WOOD_FLOOR__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.groundFloor,
  broken: [{
    src: "https://devast.io/img/day-wood-floor-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__NO_SOUND__,
  destroy: SOUNDID.__WOOD_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-wood-floor-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__WOOD__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 4e3,
  score: 0
}, {
  id: IID.__HAMMER__,
  itemButton: {
    src: ["https://devast.io/img/inv-hammer-out.png", "https://devast.io/img/inv-hammer-in.png", "https://devast.io/img/inv-hammer-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Hammer", "Destroy walls quickly.", SKILLS.__TOOL__, [
    [IID.__WOOD__, 100],
    [IID.__SHAPED_METAL__, 10]
  ], 1, [
    [AREAS.__WORKBENCH2__, 3e4]
  ], 7),
  idWeapon: 23,
  stack: 1,
  loot: LOOTID.__HAMMER__,
  wait: 10
}, {
  id: IID.__SLEEPING_BAG__,
  itemButton: {
    src: ["https://devast.io/img/inv-sleeping-bag-out.png", "https://devast.io/img/inv-sleeping-bag-in.png", "https://devast.io/img/inv-sleeping-bag-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Sleeping Bag", "Once dead, you keep your base", SKILLS.__SURVIVAL__, [
    [IID.__LEATHER_BOAR__, 7],
    [IID.__ANIMAL_FAT__, 7],
    [IID.__STRING__, 7]
  ], 1, [
    [AREAS.__WEAVING__, 2e4]
  ], 9),
  stack: 255,
  loot: LOOTID.__SLEEPING_BAG__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-sleeping-bag.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-sleeping-bag.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.defaultBuilding,
  impact: SOUNDID.__PILLOW_IMPACT__,
  destroy: SOUNDID.__PILLOW_DESTROY__,
  building: {
    src: "https://devast.io/img/day-sleeping-bag.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__FUR__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 500,
  score: 0
}, {
  id: IID.__REPAIR_HAMMER__,
  itemButton: {
    src: ["https://devast.io/img/inv-repair-hammer-out.png", "https://devast.io/img/inv-repair-hammer-in.png", "https://devast.io/img/inv-repair-hammer-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Repair Hammer", "Repair walls but require nails.", SKILLS.__TOOL__, [
    [IID.__WOOD__, 120],
    [IID.__SHAPED_METAL__, 2]
  ], 1, [
    [AREAS.__WORKBENCH__, 3e4]
  ], 5),
  idWeapon: 24,
  stack: 1,
  loot: LOOTID.__REPAIR_HAMMER__,
  wait: 10
}, {
  id: IID.__NAILS__,
  itemButton: {
    src: ["https://devast.io/img/inv-nails-out.png", "https://devast.io/img/inv-nails-in.png", "https://devast.io/img/inv-nails-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Nails", "Needed to repair walls.", SKILLS.__SURVIVAL__, [
    [IID.__SHAPED_METAL__, 2]
  ], 85, [
    [AREAS.__WORKBENCH__, 2e4]
  ]),
  stack: 255,
  loot: LOOTID.__NAILS__
}, {
  id: IID.__WOODLIGHT_FLOOR__,
  itemButton: {
    src: ["https://devast.io/img/inv-wood-floor-light-out.png", "https://devast.io/img/inv-wood-floor-light-in.png",
      "https://devast.io/img/inv-wood-floor-light-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Light Wood Floor", "Players can't spawn on it", SKILLS.__BUILDING__, [
    [IID.__WOOD__, 15]
  ], 2, [
    [AREAS.__WORKBENCH__, 15e3]
  ]),
  stack: 255,
  loot: LOOTID.__WOODLIGHT_FLOOR__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: 2,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-woodlight-floor.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-woodlight-floor.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: IID.__WOODLIGHT_FLOOR__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.groundFloor,
  broken: [{
    src: "https://devast.io/img/day-wood-floor-light-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__NO_SOUND__,
  destroy: SOUNDID.__WOOD_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-wood-floor-light-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-floor-light-46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__WOODLIGHT__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 4e3,
  score: 0
}, {
  id: IID.__WOOD_SMALLWALL__,
  itemButton: {
    src: ["https://devast.io/img/inv-wood-smallwall-out.png", "https://devast.io/img/inv-wood-smallwall-in.png", "https://devast.io/img/inv-wood-smallwall-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Wooden Low Wall", "You can shoot through it.", SKILLS.__BUILDING__, [
    [IID.__WOOD__, 10]
  ], 1, [
    [AREAS.__WORKBENCH__, 1e4]
  ]),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 0,
  stack: 255,
  loot: LOOTID.__WOOD_SMALLWALL__,
  wait: 10,
  delay: 1e3,
  width: [100, 35, 100, 35],
  height: [35, 100, 35, 100],
  xCenter: [0, -30, 0, 30],
  yCenter: [30, 0, -30, 0],
  _x: [0, 0, 0, 65],
  _y: [65, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-wood-smallwall.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-wood-smallwall.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 1,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI / 2,
  iMove: [1, 0, -1, 0],
  jMove: [0, -1, 0, 1],
  xMove: [0, 0, 65, 0],
  yMove: [0, 0, 0, 65],
  wMove: [35, 100, 35, 100],
  hMove: [100, 35, 100, 35],
  xRotate: 6,
  yRotate: 46,
  areaEffect: 0,
  draw: Render.lowWall,
  broken: [{
    src: "https://devast.io/img/day-wood-smallwalls-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__WOOD_IMPACT__,
  destroy: SOUNDID.__WOOD_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-wood-smallwalls-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-smallwalls-39.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__WOOD__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 3e3,
  score: 0
}, {
  id: IID.__STONE_SMALLWALL__,
  itemButton: {
    src: ["https://devast.io/img/inv-stone-smallwall-out.png", "https://devast.io/img/inv-stone-smallwall-in.png", "https://devast.io/img/inv-stone-smallwall-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Stone Low Wall", "You can shoot through it.", SKILLS.__BUILDING__, [
    [IID.__STONE__, 10]
  ], 1, [
    [AREAS.__WORKBENCH__, 15e3]
  ], 3),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 0,
  stack: 255,
  loot: LOOTID.__STONE_SMALLWALL__,
  wait: 10,
  delay: 1e3,
  width: [100, 35, 100, 35],
  height: [35, 100, 35, 100],
  xCenter: [0, -30, 0, 30],
  yCenter: [30, 0, -30, 0],
  _x: [0, 0, 0, 65],
  _y: [65, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-stone-smallwalls.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-stone-smallwalls.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 1,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI / 2,
  iMove: [1, 0, -1, 0],
  jMove: [0, -1, 0, 1],
  xMove: [0, 0, 65, 0],
  yMove: [0, 0, 0, 65],
  wMove: [35, 100, 35, 100],
  hMove: [100, 35, 100, 35],
  xRotate: 6,
  yRotate: 46,
  areaEffect: 0,
  draw: Render.lowWall,
  broken: [{
    src: "https://devast.io/img/day-stone-smallwalls-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__STONE_IMPACT__,
  destroy: SOUNDID.__STONE_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-stone-smallwalls-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-smallwalls-39.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__STONE__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 7e3,
  score: 0
}, {
  id: IID.__STEEL_SMALLWALL__,
  itemButton: {
    src: ["https://devast.io/img/inv-steel-smallwall-out.png", "https://devast.io/img/inv-steel-smallwall-in.png", "https://devast.io/img/inv-steel-smallwall-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Metal Low Wall", "You can shoot through it.", SKILLS.__BUILDING__, [
    [IID.__SHAPED_METAL__, 2]
  ], 1, [
    [AREAS.__WORKBENCH2__, 2e4]
  ], 6, IID.__STONE_SMALLWALL__),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 0,
  stack: 255,
  loot: LOOTID.__STEEL_SMALLWALL__,
  wait: 10,
  delay: 1e3,
  width: [100, 35, 100, 35],
  height: [35, 100, 35, 100],
  xCenter: [0, -30, 0, 30],
  yCenter: [30, 0, -30, 0],
  _x: [0, 0, 0, 65],
  _y: [65, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-stone-smallwalls.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-stone-smallwalls.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 1,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  angle: window.Math.PI / 2,
  iMove: [1, 0, -1, 0],
  jMove: [0, -1, 0, 1],
  xMove: [0, 0, 65, 0],
  yMove: [0, 0, 0, 65],
  wMove: [35, 100, 35, 100],
  hMove: [100, 35, 100, 35],
  xRotate: 6,
  yRotate: 46,
  areaEffect: 0,
  draw: Render.lowWall,
  broken: [{
    src: "https://devast.io/img/day-steel-smallwalls-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-steel-smallwalls-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-steel-smallwalls-39.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__STEEL__,
  particlesDist: 55,
  timelife: 31536e7,
  life: 15e3,
  score: 0
}, {
  id: IID.__FURNITURE__,
  zid: 0,
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: [],
  detail: {
    category: window.undefined
  },
  particles: -1,
  draw: Render.furniture
}, {
  id: IID.__TOMATO_SOUP__,
  itemButton: {
    src: ["https://devast.io/img/inv-tomato-soup-out.png", "https://devast.io/img/inv-tomato-soup-in.png", "https://devast.io/img/inv-tomato-soup-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Tomato Soup", "Has not yet been opened.", SKILLS.__SURVIVAL__, [
    [IID.__CAN__, 1],
    [IID.__TOMATO__, 2]
  ], 1, [
    [AREAS.__FIRE__, 15e3],
    [AREAS.__BBQ__, 7e3]
  ]),
  idWeapon: 25,
  stack: 5,
  loot: LOOTID.__TOMATO_SOUP__,
  perish: 2,
  perishId: IID.__CAN__,
  wait: 10
}, {
  id: IID.__SYRINGE__,
  itemButton: {
    src: ["https://devast.io/img/inv-syringe-out.png", "https://devast.io/img/inv-syringe-in.png", "https://devast.io/img/inv-syringe-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Syringe", "Useful to make drugs.", SKILLS.__DRUG__, [
    [IID.__JUNK__, 1]
  ], 1, [
    [AREAS.__WORKBENCH2__, 3e4]
  ]),
  stack: 20,
  loot: LOOTID.__SYRINGE__,
  score: 50
}, {
  id: IID.__CHEMICAL_COMPONENT__,
  itemButton: {
    src: ["https://devast.io/img/inv-chemical-component-out.png", "https://devast.io/img/inv-chemical-component-in.png",
      "https://devast.io/img/inv-chemical-component-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Chemical Component", "Useful to make a drugs."),
  stack: 20,
  loot: LOOTID.__CHEMICAL_COMPONENT__,
  score: 50
}, {
  id: IID.__RADAWAY__,
  itemButton: {
    src: ["https://devast.io/img/inv-radaway-out.png", "https://devast.io/img/inv-radaway-in.png", "https://devast.io/img/inv-radaway-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("RadAway", "Reduce your radioactivity a lot.", SKILLS.__DRUG__, [
    [IID.__SYRINGE__, 1],
    [IID.__CHEMICAL_COMPONENT__, 1],
    [IID.__MUSHROOM2__, 1]
  ], 1, [
    [AREAS.__AGITATOR__, 45e3]
  ]),
  idWeapon: 26,
  stack: 5,
  loot: LOOTID.__RADAWAY__,
  wait: 10
}, {
  id: IID.__SEED_TOMATO__,
  itemButton: {
    src: ["https://devast.io/img/inv-tomato-seed-out.png", "https://devast.io/img/inv-tomato-seed-in.png", "https://devast.io/img/inv-tomato-seed-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Tomato Seed", "A fruit or vegetable?", SKILLS.__PLANT__, [
    [IID.__TOMATO__, 4]
  ], 1, [
    [AREAS.__FIRE__, 3e4],
    [AREAS.__BBQ__, 2e4]
  ]),
  stack: 40,
  loot: LOOTID.__SEED_TOMATO__,
  fruit: LOOTID.__TOMATO__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [30, 30, 30, 30],
  height: [30, 30, 30, 30],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [35, 35, 35, 35],
  _y: [35, 35, 35, 35],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-tomato.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-tomato.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 0,
  behavior: BEHAVIOR.__SEED__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.orangeSeed,
  impact: SOUNDID.__NO_SOUND__,
  destroy: SOUNDID.__NO_SOUND__,
  building: [{
    src: "https://devast.io/img/day-plant0-tomato.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-plant1-tomato.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-plant2-tomato.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-plant3-tomato.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-plant4-tomato.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__TOMATO__,
  particlesDist: 68,
  timelife: 24e5,
  life: 250,
  score: 0
}, {
  id: IID.__TOMATO__,
  itemButton: {
    src: ["https://devast.io/img/inv-tomato-out.png", "https://devast.io/img/inv-tomato-in.png", "https://devast.io/img/inv-tomato-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Tomato", "Why did the tomato blush?"),
  stack: 20,
  loot: LOOTID.tomato,
  wait: 5,
  perish: 10,
  perishId: IID.__ROTTEN_TOMATO__,
  idWeapon: 27,
  score: 24
}, {
  id: IID.__ROTTEN_TOMATO__,
  itemButton: {
    src: ["https://devast.io/img/inv-rotten-tomato-out.png", "https://devast.io/img/inv-rotten-tomato-in.png", "https://devast.io/img/inv-rotten-tomato-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Rotten Tomato", "Go on, have a bite!"),
  stack: 20,
  loot: LOOTID.__ROTTEN_TOMATO__,
  wait: 5,
  idWeapon: 28,
  score: 20
}, {
  id: IID.__CAN__,
  itemButton: {
    src: ["https://devast.io/img/inv-can-out.png", "https://devast.io/img/inv-can-in.png", "https://devast.io/img/inv-can-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Can", "Useful to craft food can.", SKILLS.__SURVIVAL__, [
    [IID.__SHAPED_METAL__, 1]
  ], 1, [
    [AREAS.__WORKBENCH__, 2e4]
  ]),
  idWeapon: 0,
  stack: 255,
  loot: LOOTID.__CAN__
}, {
  id: IID.__WOOD_CROSSBOW__,
  itemButton: {
    src: ["https://devast.io/img/inv-wood-crossbow-out.png", "https://devast.io/img/inv-wood-crossbow-in.png", "https://devast.io/img/inv-wood-crossbow-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Wood Crossbow", "Shoot faster, reload slower", SKILLS.__WEAPON__, [
    [IID.__WOOD__, 200],
    [IID.__STRING__, 2],
    [IID.__SHAPED_METAL__, 1]
  ], 1, [
    [AREAS.__WORKBENCH__, 5e4]
  ], 6),
  idWeapon: 29,
  bullet: IID.__WOOD_CROSSARROW__,
  stack: 1,
  loot: LOOTID.__WOOD_CROSSBOW__,
  wait: 10
}, {
  id: IID.__WOOD_CROSSARROW__,
  itemButton: {
    src: ["https://devast.io/img/inv-wood-crossarrow-out.png", "https://devast.io/img/inv-wood-crossarrow-in.png", "https://devast.io/img/inv-wood-crossarrow-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Crossbow Arrows", "Needed to use crossbow.", SKILLS.__WEAPON__, [
    [IID.__WOOD__, 40],
    [IID.__SHAPED_METAL__, 1]
  ], 10, [
    [AREAS.__WORKBENCH__, 3e4]
  ]),
  stack: 255,
  loot: LOOTID.__WOOD_CROSSARROW__
}, {
  id: IID.__NAIL_GUN__,
  itemButton: {
    src: ["https://devast.io/img/inv-nail-gun-out.png", "https://devast.io/img/inv-nail-gun-in.png", "https://devast.io/img/inv-nail-gun-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Nail Gun", "Repair walls from a distance", SKILLS.__TOOL__, [
    [IID.__SHAPED_METAL__, 3],
    [IID.__SMALL_WIRE__, 1],
    [IID.__JUNK__, 1],
    [IID.__ENERGY_CELLS__, 4]
  ], 1, [
    [AREAS.__WORKBENCH2__, 3e4]
  ], 7),
  idWeapon: 30,
  bullet: IID.__NAILS__,
  stack: 1,
  loot: LOOTID.__NAIL_GUN__,
  wait: 10
}, {
  id: IID.__SAWED_OFF_SHOTGUN__,
  itemButton: {
    src: ["https://devast.io/img/inv-sawed-off-shotgun-out.png", "https://devast.io/img/inv-sawed-off-shotgun-in.png",
      "https://devast.io/img/inv-sawed-off-shotgun-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Sawed Off", "Shoot less far, do more damages", SKILLS.__WEAPON__, [
    [IID.__SHOTGUN__, 1],
    [IID.__ALLOYS__, 6],
    [IID.__SHAPED_METAL__, 6]
  ], 1, [
    [AREAS.__WORKBENCH2__, 2e5]
  ], 13, IID.__SHOTGUN__),
  idWeapon: 31,
  bullet: IID.__BULLET_SHOTGUN__,
  stack: 1,
  loot: LOOTID.__SAWED_OFF_SHOTGUN__,
  wait: 10
}, {
  id: IID.__STONE_FLOOR__,
  itemButton: {
    src: ["https://devast.io/img/inv-stone-floor-out.png", "https://devast.io/img/inv-stone-floor-in.png", "https://devast.io/img/inv-stone-floor-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Stone floor", "Players can't spawn on it", SKILLS.__BUILDING__, [
    [IID.__STONE__, 15]
  ], 2, [
    [AREAS.__WORKBENCH__, 15e3]
  ], 4),
  stack: 255,
  loot: LOOTID.__STONE_FLOOR__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: 2,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-stone-floor.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-stone-floor.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: IID.__STONE_FLOOR__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.groundFloor,
  broken: [{
    src: "https://devast.io/img/day-stone-floor-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__NO_SOUND__,
  destroy: SOUNDID.__STONE_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-stone-floor-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-floor-46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__STONE__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 8e3,
  score: 0
}, {
  id: IID.__TILING_FLOOR__,
  itemButton: {
    src: ["https://devast.io/img/inv-tiling-floor-out.png", "https://devast.io/img/inv-tiling-floor-in.png", "https://devast.io/img/inv-tiling-floor-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Tiling floor", "Players can't spawn on it", SKILLS.__BUILDING__, [
    [IID.__STONE__, 15]
  ], 2, [
    [AREAS.__WORKBENCH__, 15e3]
  ], 4),
  stack: 255,
  loot: LOOTID.__TILING_FLOOR__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: 2,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-tiling-floor.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-tiling-floor.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: IID.__TILING_FLOOR__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.groundFloor,
  broken: [{
    src: "https://devast.io/img/day-tiling-floor-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__NO_SOUND__,
  destroy: SOUNDID.__STONE_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-tiling-floor-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tiling-floor-46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__STONE__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 8e3,
  score: 0
}, {
  id: IID.__ROAD__,
  zid: 0,
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: [],
  buildings: [],
  detail: {
    category: window.undefined
  },
  particles: -1,
  draw: Render.road
}, {
  id: IID.__CRISPS__,
  itemButton: {
    src: ["https://devast.io/img/inv-chips-out.png", "https://devast.io/img/inv-chips-in.png", "https://devast.io/img/inv-chips-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Crisps", "You salty?"),
  idWeapon: 32,
  stack: 5,
  loot: LOOTID.__CRISPS__,
  perish: 2,
  perishId: IID.__ROTTEN_CRISPS__,
  wait: 10
}, {
  id: IID.__ROTTEN_CRISPS__,
  itemButton: {
    src: ["https://devast.io/img/inv-rotten-chips-out.png", "https://devast.io/img/inv-rotten-chips-in.png", "https://devast.io/img/inv-rotten-chips-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Expired Crisps", "Go on, have a bite!"),
  stack: 5,
  loot: LOOTID.__ROTTEN_CRISPS__,
  wait: 5,
  idWeapon: 33,
  score: 20
}, {
  id: IID.__ELECTRONICS__,
  itemButton: {
    src: ["https://devast.io/img/inv-electronic-part-out.png", "https://devast.io/img/inv-electronic-part-in.png", "https://devast.io/img/inv-electronic-part-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Electronic Parts", "Break TV's and Computers to find it"),
  stack: 255,
  loot: LOOTID.__ELECTRONICS__,
  score: 100
}, {
  id: IID.__JUNK__,
  itemButton: {
    src: ["https://devast.io/img/inv-junk-out.png", "https://devast.io/img/inv-junk-in.png", "https://devast.io/img/inv-junk-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Junk", "Find it in houses"),
  stack: 255,
  loot: LOOTID.__JUNK__,
  score: 40
}, {
  id: IID.__WIRE__,
  itemButton: {
    src: ["https://devast.io/img/inv-wires-out.png", "https://devast.io/img/inv-wires-in.png", "https://devast.io/img/inv-wires-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Big Wire", "Break big computers in power AREAS (in the city)"),
  stack: 255,
  loot: LOOTID.__WIRE__,
  score: 40
}, {
  id: IID.__ENERGY_CELLS__,
  itemButton: {
    src: ["https://devast.io/img/inv-small-energy-cells-out.png", "https://devast.io/img/inv-small-energy-cells-in.png",
      "https://devast.io/img/inv-small-energy-cells-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Energy Cells", "Used for energy weapons/buildings", SKILLS.__SURVIVAL__, [
    [IID.__ALLOYS__, 1],
    [IID.__SHAPED_URANIUM__, 1]
  ], 30, [
    [AREAS.__TESLA__, 28e3]
  ], 6),
  stack: 255,
  loot: LOOTID.__ENERGY_CELLS__
}, {
  id: IID.__LASER_PISTOL__,
  itemButton: {
    src: ["https://devast.io/img/inv-laser-pistol-out.png", "https://devast.io/img/inv-laser-pistol-in.png", "https://devast.io/img/inv-laser-pistol-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Laser Pistol", "Bullets are faster.", SKILLS.__WEAPON__, [
    [IID.__SHAPED_URANIUM__, 2],
    [IID.__WIRE__, 1],
    [IID.__ELECTRONICS__, 2],
    [IID.__ALLOYS__, 1],
    [IID.__SHAPED_METAL__, 4]
  ], 1, [
    [AREAS.__TESLA__, 18e4]
  ], 14),
  idWeapon: 34,
  bullet: IID.__ENERGY_CELLS__,
  stack: 1,
  loot: LOOTID.__LASER_PISTOL__,
  wait: 10
}, {
  id: IID.__TESLA__,
  itemButton: {
    src: ["https://devast.io/img/inv-workbench3-out.png", "https://devast.io/img/inv-workbench3-in.png", "https://devast.io/img/inv-workbench3-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Tesla Bench", "Allow you to make powerful INVENTORY", SKILLS.__SURVIVAL__, [
    [IID.__ALLOYS__, 4],
    [IID.__SHAPED_METAL__, 6],
    [IID.__ELECTRONICS__, 3],
    [IID.__WIRE__, 4],
    [IID.__SHAPED_URANIUM__, 2]
  ], 1, [
    [AREAS.__WORKBENCH2__, 12e4]
  ], 10, IID.__WORKBENCH2__),
  idWeapon: 21,
  fuel: 6e4,
  zid: 0,
  z: 1,
  area: AREAS.__TESLA__,
  stack: 255,
  loot: LOOTID.__TESLA__,
  wait: 10,
  delay: 1e3,
  width: [100, 260, 100, 260],
  height: [260, 100, 260, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, -80, 0, -80],
  _y: [-80, 0, -80, 0],
  iTile: [-1, 0, -1, 0],
  jTile: [0, -1, 0, -1],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-workbench3.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-workbench3.png",
    img: {
      isLoaded: 0
    }
  },
  xLight: [-20.5, -101.5, 20.5, 101.5],
  yLight: [101.5, -20.5, -101, 20.5],
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__AI_CONSTRUCTOR__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: Render.teslaBench,
  packetId: 16,
  interact: {
    src: "https://devast.io/img/e-workbench3.png",
    img: {
      isLoaded: 0
    }
  },
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-workbench3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-workbench3-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-workbench3-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-workbench3-3.png",
    img: {
      isLoaded: 0
    }
  }],
  light: [{
    src: "https://devast.io/img/day-tesla-light0.png",
    img: {
      isLoaded: 0
    }
  }, 0, {
    src: "https://devast.io/img/day-tesla-light1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tesla-light2.png",
    img: {
      isLoaded: 0
    }
  }, 0, {
    src: "https://devast.io/img/day-tesla-light3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tesla-light4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-tesla-light5.png",
    img: {
      isLoaded: 0
    }
  }, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  particles: PARTICLESID.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 3e3,
  score: 0
}, {
  id: IID.__ALLOYS__,
  itemButton: {
    src: ["https://devast.io/img/inv-alloys-out.png", "https://devast.io/img/inv-alloys-in.png", "https://devast.io/img/inv-alloys-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Alloys", "To craft powerful INVENTORY", SKILLS.__MINERAL__, [
    [IID.__STEEL__, 1],
    [IID.__JUNK__, 1],
    [IID.__SULFUR__, 1]
  ], 1, [
    [AREAS.__SMELTER__, 1e4]
  ]),
  stack: 255,
  loot: LOOTID.__ALLOYS__
}, {
  id: IID.__SULFUR_AXE__,
  itemButton: {
    src: ["https://devast.io/img/inv-sulfur-axe-out.png", "https://devast.io/img/inv-sulfur-axe-in.png", "https://devast.io/img/inv-sulfur-axe-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Sulfur Axe", "You look cool with it.", SKILLS.__TOOL__, [
    [IID.__STONE_AXE__, 1],
    [IID.__ALLOYS__, 8],
    [IID.__SHAPED_METAL__, 10],
    [IID.__SULFUR__, 20]
  ], 1, [
    [AREAS.__WORKBENCH2__, 2e5]
  ], 10, IID.__STONE_AXE__),
  idWeapon: 35,
  stack: 1,
  loot: LOOTID.__SULFUR_AXE__,
  wait: 10
}, {
  id: IID.__LANDMINE__,
  itemButton: {
    src: ["https://devast.io/img/inv-landmine-out.png", "https://devast.io/img/inv-landmine-in.png", "https://devast.io/img/inv-landmine-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Landmine", "When you feel it, it's too late", SKILLS.__WEAPON__, [
    [IID.__SHAPED_METAL__, 4],
    [IID.__JUNK__, 1],
    [IID.__SULFUR__, 2],
    [IID.__ANIMAL_FAT__, 2]
  ], 1, [
    [AREAS.__WORKBENCH2__, 4e4]
  ], 9),
  stack: 20,
  loot: LOOTID.__LANDMINE__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [50, 50, 50, 50],
  height: [50, 50, 50, 50],
  _x: [25, 25, 25, 25],
  _y: [25, 25, 25, 25],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-landmine.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-landmine.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 1,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  damage: 200,
  damageBuilding: 400,
  areaEffect: 0,
  draw: Render.landmine,
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-landmine-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-landmine-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-landmine-2.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__KAKI__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 5,
  score: 0
}, {
  id: IID.__DYNAMITE__,
  itemButton: {
    src: ["https://devast.io/img/inv-dynamite-out.png", "https://devast.io/img/inv-dynamite-in.png", "https://devast.io/img/inv-dynamite-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Dynamite", "Get out of here, it gonna blow!", SKILLS.__WEAPON__, [
    [IID.__STRING__, 1],
    [IID.__ANIMAL_FAT__, 2],
    [IID.__SULFUR__, 2],
    [IID.__JUNK__, 1]
  ], 1, [
    [AREAS.__WORKBENCH2__, 4e4]
  ], 9),
  stack: 10,
  loot: LOOTID.__DYNAMITE__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-dynamite.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-dynamite.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 1,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  damage: 180,
  damageBuilding: 1400,
  areaEffect: 0,
  draw: Render.dynamite,
  impact: SOUNDID.__PILLOW_IMPACT__,
  destroy: SOUNDID.__NO_SOUND__,
  building: [{
    src: "https://devast.io/img/day-dynamite.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/dynamite-yellow.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__RED_STEEL__,
  particlesDist: 80,
  timelife: 5e3,
  life: 100,
  score: 0
}, {
  id: IID.__C4__,
  itemButton: {
    src: ["https://devast.io/img/inv-C4-out.png", "https://devast.io/img/inv-C4-in.png", "https://devast.io/img/inv-C4-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("C4", "Explode when you hit the trigger!", SKILLS.__WEAPON__, [
    [IID.__DYNAMITE__, 2],
    [IID.__SMALL_WIRE__, 1],
    [IID.__ALLOYS__, 2],
    [IID.__ELECTRONICS__, 1]
  ], 1, [
    [AREAS.__WORKBENCH2__, 6e4]
  ], 16, IID.__DYNAMITE__),
  stack: 5,
  loot: LOOTID.__C4__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-C4.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-C4.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 1,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  damage: 255,
  damageBuilding: 6e3,
  collision: 0,
  areaEffect: 0,
  draw: Render.dynamite,
  impact: SOUNDID.__PILLOW_IMPACT__,
  destroy: SOUNDID.__NO_SOUND__,
  building: [{
    src: "https://devast.io/img/day-C4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/C4-red.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__KAKI__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 100,
  score: 0
}, {
  id: IID.__C4_TRIGGER__,
  itemButton: {
    src: ["https://devast.io/img/inv-joystick-out.png", "https://devast.io/img/inv-joystick-in.png", "https://devast.io/img/inv-joystick-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("C4 Trigger", "Don't press the button or else...", SKILLS.__WEAPON__, [
    [IID.__SHAPED_METAL__, 5],
    [IID.__ELECTRONICS__, 1],
    [IID.__ENERGY_CELLS__, 8],
    [IID.__SMALL_WIRE__, 1]
  ], 1, [
    [AREAS.__WORKBENCH2__, 1e5]
  ], 16, IID.__C4__),
  stack: 1,
  loot: LOOTID.__C4_TRIGGER__,
  wait: 10,
  idWeapon: 36,
  score: 0
}, {
  id: IID.__COMPOST__,
  itemButton: {
    src: ["https://devast.io/img/inv-composter-out.png", "https://devast.io/img/inv-composter-in.png", "https://devast.io/img/inv-composter-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Compost", "Allows to accelerate rotting", SKILLS.__SURVIVAL__, [
    [IID.__SHAPED_METAL__, 4],
    [IID.__ELECTRONICS__, 1]
  ], 1, [
    [AREAS.__WORKBENCH2__, 1e5]
  ], 8),
  idWeapon: 21,
  fuel: 1e4,
  zid: 0,
  z: 1,
  area: AREAS.__COMPOST__,
  stack: 255,
  loot: LOOTID.__COMPOST__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-composter.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-composter.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: Render.compost,
  packetId: 16,
  interact: {
    src: "https://devast.io/img/e-composter.png",
    img: {
      isLoaded: 0
    }
  },
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-composter-off.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-composter.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 500,
  score: 0
}, {
  id: IID.__ARMOR_PHYSIC_1__,
  itemButton: {
    src: ["https://devast.io/img/inv-metal-helmet-out.png", "https://devast.io/img/inv-metal-helmet-in.png", "https://devast.io/img/inv-metal-helmet-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Metal Helmet", "Protects you from melee weapons", SKILLS.__CLOTHE__, [
    [IID.__SHAPED_METAL__, 3],
    [IID.__ANIMAL_TENDON__, 3],
    [IID.__LEATHER_BOAR__, 3],
    [IID.__NAILS__, 80]
  ], 1, [
    [AREAS.__WORKBENCH__, 7e4]
  ]),
  idClothe: 7,
  stack: 1,
  loot: LOOTID.__ARMOR_PHYSIC_1__,
  wait: 10,
  warm: 0,
  def: .15,
  bul: 0,
  ene: 0,
  boom: 0,
  rad: 0,
  speed: -.01
}, {
  id: IID.__ARMOR_PHYSIC_2__,
  itemButton: {
    src: ["https://devast.io/img/inv-welding-helmet-out.png", "https://devast.io/img/inv-welding-helmet-in.png", "https://devast.io/img/inv-welding-helmet-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Welding Helmet", "Protects you from melee weapons", SKILLS.__CLOTHE__, [
    [IID.__SHAPED_METAL__, 10],
    [IID.__ALLOYS__, 2],
    [IID.__LEATHER_BOAR__, 3],
    [IID.__NAILS__, 160],
    [IID.__ARMOR_PHYSIC_1__, 1]
  ], 1, [
    [AREAS.__WORKBENCH2__, 14e4]
  ], 7),
  idClothe: 8,
  stack: 1,
  loot: LOOTID.__ARMOR_PHYSIC_2__,
  wait: 10,
  warm: 0,
  def: .4,
  bul: 0,
  ene: 0,
  boom: .05,
  rad: 0,
  speed: -.02
}, {
  id: IID.__ARMOR_PHYSIC_3__,
  itemButton: {
    src: ["https://devast.io/img/inv-gladiator-helmet-out.png", "https://devast.io/img/inv-gladiator-helmet-in.png",
      "https://devast.io/img/inv-gladiator-helmet-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Gladiator Helmet", "Strength and honor.", SKILLS.__CLOTHE__, [
    [IID.__SHAPED_METAL__, 12],
    [IID.__ALLOYS__, 6],
    [IID.__LEATHER_BOAR__, 4],
    [IID.__NAILS__, 255],
    [IID.__ARMOR_PHYSIC_2__, 1]
  ], 1, [
    [AREAS.__WORKBENCH2__, 3e5]
  ], 17, IID.__ARMOR_PHYSIC_2__),
  idClothe: 9,
  stack: 1,
  loot: LOOTID.__ARMOR_PHYSIC_3__,
  wait: 10,
  warm: 0,
  def: .6,
  bul: .1,
  ene: 0,
  boom: .2,
  rad: 0,
  speed: -.03
}, {
  id: IID.__ARMOR_FIRE_1__,
  itemButton: {
    src: ["https://devast.io/img/inv-leather-jacket-out.png", "https://devast.io/img/inv-leather-jacket-in.png", "https://devast.io/img/inv-leather-jacket-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Leather Jacket", "Protects you from guns", SKILLS.__CLOTHE__, [
    [IID.__STRING__, 2],
    [IID.__LEATHER_BOAR__, 4]
  ], 1, [
    [AREAS.__WEAVING__, 7e4]
  ]),
  idClothe: 10,
  stack: 1,
  loot: LOOTID.__ARMOR_FIRE_1__,
  wait: 10,
  warm: 6e-4,
  def: 0,
  bul: .2,
  ene: 0,
  boom: 0,
  rad: 0,
  speed: 0
}, {
  id: IID.__ARMOR_FIRE_2__,
  itemButton: {
    src: ["https://devast.io/img/inv-kevlar-suit-out.png", "https://devast.io/img/inv-kevlar-suit-in.png", "https://devast.io/img/inv-kevlar-suit-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Kevlar Suit", "Protects you from guns", SKILLS.__CLOTHE__, [
    [IID.__SHAPED_METAL__, 6],
    [IID.__STRING__, 4],
    [IID.__LEATHER_BOAR__, 6],
    [IID.__ALLOYS__, 2],
    [IID.__ARMOR_FIRE_1__, 1]
  ], 1, [
    [AREAS.__WEAVING__, 1e5]
  ], 12),
  idClothe: 11,
  stack: 1,
  loot: LOOTID.__ARMOR_FIRE_2__,
  wait: 10,
  warm: 0,
  def: 0,
  bul: .4,
  ene: 0,
  boom: 0,
  rad: 0,
  speed: 0
}, {
  id: IID.__ARMOR_FIRE_3__,
  itemButton: {
    src: ["https://devast.io/img/inv-SWAT-suit-out.png", "https://devast.io/img/inv-SWAT-suit-in.png", "https://devast.io/img/inv-SWAT-suit-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("SWAT Suit", "Protects you from guns", SKILLS.__CLOTHE__, [
    [IID.__SHAPED_METAL__, 10],
    [IID.__STRING__, 10],
    [IID.__LEATHER_BOAR__, 10],
    [IID.__ALLOYS__, 4],
    [IID.__ARMOR_FIRE_2__, 1]
  ], 1, [
    [AREAS.__WEAVING__, 2e5]
  ], 18, IID.__ARMOR_FIRE_2__),
  idClothe: 12,
  stack: 1,
  loot: LOOTID.__ARMOR_FIRE_3__,
  wait: 10,
  warm: 0,
  def: .1,
  bul: .7,
  ene: 0,
  boom: .1,
  rad: 0,
  speed: -.01
}, {
  id: IID.__ARMOR_DEMINER__,
  itemButton: {
    src: ["https://devast.io/img/inv-protective-suit-out.png", "https://devast.io/img/inv-protective-suit-in.png", "https://devast.io/img/inv-protective-suit-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Protective Suit", "Protects you from explosives", SKILLS.__CLOTHE__, [
    [IID.__SHAPED_METAL__, 6],
    [IID.__STRING__, 6],
    [IID.__LEATHER_BOAR__, 6],
    [IID.__ALLOYS__, 2]
  ], 1, [
    [AREAS.__WEAVING__, 2e5]
  ], 12, IID.__FEATHERWEIGHT__),
  idClothe: 13,
  stack: 1,
  loot: LOOTID.__ARMOR_DEMINER__,
  wait: 10,
  warm: 85e-5,
  def: 0,
  bul: 0,
  ene: 0,
  boom: .9,
  rad: 0,
  speed: -.03
}, {
  id: IID.__ARMOR_TESLA_1__,
  itemButton: {
    src: ["https://devast.io/img/inv-tesla-0-out.png", "https://devast.io/img/inv-tesla-0-in.png", "https://devast.io/img/inv-tesla-0-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Power Armor", "Protects you from energy weapons", SKILLS.__CLOTHE__, [
    [IID.__SHAPED_METAL__, 20],
    [IID.__SHAPED_URANIUM__, 2],
    [IID.__ELECTRONICS__, 1],
    [IID.__WIRE__, 2],
    [IID.__ALLOYS__, 2]
  ], 1, [
    [AREAS.__TESLA__, 15e4]
  ], 10),
  idClothe: 14,
  stack: 1,
  loot: LOOTID.__ARMOR_TESLA_1__,
  wait: 10,
  warm: 0,
  def: 0,
  bul: 0,
  ene: .3,
  boom: 0,
  rad: 0,
  speed: 0
}, {
  id: IID.__ARMOR_TESLA_2__,
  itemButton: {
    src: ["https://devast.io/img/inv-tesla-armor-out.png", "https://devast.io/img/inv-tesla-armor-in.png", "https://devast.io/img/inv-tesla-armor-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Tesla Armor", "Protects you from energy weapons", SKILLS.__CLOTHE__, [
    [IID.__ARMOR_TESLA_1__, 1],
    [IID.__SHAPED_URANIUM__, 10],
    [IID.__ELECTRONICS__, 5],
    [IID.__WIRE__, 5],
    [IID.__ALLOYS__, 10]
  ], 1, [
    [AREAS.__TESLA__, 3e5]
  ], 18, IID.__ARMOR_TESLA_1__, 3),
  idClothe: 15,
  stack: 1,
  loot: LOOTID.__ARMOR_TESLA_2__,
  wait: 10,
  warm: 85e-5,
  def: .2,
  bul: .2,
  ene: .75,
  boom: .2,
  rad: .01,
  speed: -.02
}, {
  id: IID.__WOOD_SPIKE__,
  itemButton: {
    src: ["https://devast.io/img/inv-wood-spike-out.png", "https://devast.io/img/inv-wood-spike-in.png", "https://devast.io/img/inv-wood-spike-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Wooden Spike", "Hurt and slow down", SKILLS.__BUILDING__, [
    [IID.__WOOD__, 80]
  ], 1, [
    [AREAS.__WORKBENCH__, 25e3]
  ]),
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  stack: 40,
  loot: LOOTID.__WOOD_SPIKE__,
  wait: 10,
  delay: 1e3,
  width: [50, 50, 50, 50],
  height: [50, 50, 50, 50],
  _x: [25, 25, 25, 25],
  _y: [25, 25, 25, 25],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-wood-spike.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-wood-spike.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.spike,
  hidden: [{
    src: "https://devast.io/img/day-wood-spike-cover1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-spike-cover2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-spike-cover3.png",
    img: {
      isLoaded: 0
    }
  }],
  deployed: [{
    src: "https://devast.io/img/day-wood-spike-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-spike-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-wood-spike-3.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__WOOD__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 200,
  score: 0
}, {
  id: IID.__LASER_SUBMACHINE__,
  itemButton: {
    src: ["https://devast.io/img/inv-laser-submachine-out.png", "https://devast.io/img/inv-laser-submachine-in.png",
      "https://devast.io/img/inv-laser-submachine-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Laser Submachine", "It's the best weapon", SKILLS.__WEAPON__, [
    [IID.__ALLOYS__, 10],
    [IID.__SHAPED_METAL__, 6],
    [IID.__SHAPED_URANIUM__, 6],
    [IID.__WIRE__, 2],
    [IID.__ELECTRONICS__, 3]
  ], 1, [
    [AREAS.__TESLA__, 18e4]
  ], 14, IID.__LASER_PISTOL__, 2),
  idWeapon: 37,
  bullet: IID.__ENERGY_CELLS__,
  stack: 1,
  loot: LOOTID.__LASER_SUBMACHINE__,
  wait: 10
}, {
  id: IID.__GRENADE__,
  itemButton: {
    src: ["https://devast.io/img/inv-grenade-out.png", "https://devast.io/img/inv-grenade-in.png", "https://devast.io/img/inv-grenade-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Grenade", "Explodes when you throw it away.", SKILLS.__WEAPON__, [
    [IID.__SHAPED_METAL__, 2],
    [IID.__JUNK__, 2],
    [IID.__SULFUR__, 2],
    [IID.__ANIMAL_FAT__, 2]
  ], 2, [
    [AREAS.__WORKBENCH2__, 3e4]
  ], 10),
  idWeapon: 38,
  damage: 130,
  damageBuilding: 400,
  stack: 10,
  loot: LOOTID.__GRENADE__,
  wait: 10
}, {
  id: IID.__SUPER_HAMMER__,
  itemButton: {
    src: ["https://devast.io/img/inv-super-hammer-out.png", "https://devast.io/img/inv-super-hammer-in.png", "https://devast.io/img/inv-super-hammer-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Super Hammer", "Destroy indestructible walls."),
  idWeapon: 39,
  stack: 1,
  loot: LOOTID.__SUPER_HAMMER__,
  wait: 10
}, {
  id: IID.__GHOUL_BLOOD__,
  itemButton: {
    src: ["https://devast.io/img/inv-ghoul-blood-out.png", "https://devast.io/img/inv-ghoul-blood-in.png", "https://devast.io/img/inv-ghoul-blood-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Ghoul Blood", "Find it on speedy ghouls"),
  stack: 255,
  loot: LOOTID.__GHOUL_BLOOD__,
  score: 100
}, {
  id: IID.__CAMOUFLAGE_GEAR__,
  itemButton: {
    src: ["https://devast.io/img/inv-camouflage-gear-out.png", "https://devast.io/img/inv-camouflage-gear-in.png", "https://devast.io/img/inv-camouflage-gear-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Camouflage Gear", "Hide you in the forest", SKILLS.__CLOTHE__, [
    [IID.__WOOD__, 90],
    [IID.__STRING__, 2],
    [IID.__LEATHER_BOAR__, 2]
  ], 1, [
    [AREAS.__WEAVING__, 4e4]
  ]),
  idClothe: 16,
  stack: 1,
  loot: LOOTID.__CAMOUFLAGE_GEAR__,
  wait: 10,
  warm: 0,
  def: 0,
  bul: 0,
  ene: 0,
  boom: 0,
  rad: 0,
  speed: 0
}, {
  id: IID.__AGITATOR__,
  itemButton: {
    src: ["https://devast.io/img/inv-agitator-out.png", "https://devast.io/img/inv-agitator-in.png", "https://devast.io/img/inv-agitator-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Agitator", "Allows to craft drugs", SKILLS.__SURVIVAL__, [
    [IID.__SHAPED_METAL__, 6],
    [IID.__ELECTRONICS__, 1]
  ], 1, [
    [AREAS.__WORKBENCH2__, 1e5]
  ], 8),
  idWeapon: 21,
  fuel: 1e5,
  zid: 0,
  z: 1,
  area: AREAS.__AGITATOR__,
  stack: 255,
  loot: LOOTID.__AGITATOR__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-agitator.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-agitator.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: Render.agitator,
  packetId: 16,
  interact: {
    src: "https://devast.io/img/e-agitator.png",
    img: {
      isLoaded: 0
    }
  },
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-agitator1-off.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-agitator1-on.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-agitator-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-agitator-2.png",
    img: {
      isLoaded: 0
    }
  }],
  spine: [
    [-25.5, 21],
    [-21, -25.5],
    [25.5, -21],
    [21, 25.5]
  ],
  particles: PARTICLESID.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 500,
  score: 0
}, {
  id: IID.__GHOUL_DRUG__,
  itemButton: {
    src: ["https://devast.io/img/inv-ghoul-drug-out.png", "https://devast.io/img/inv-ghoul-drug-in.png", "https://devast.io/img/inv-ghoul-drug-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Ghoul Drug", "Ghouls does not attack you.", SKILLS.__DRUG__, [
    [IID.__SYRINGE__, 1],
    [IID.__CHEMICAL_COMPONENT__, 1],
    [IID.__MUSHROOM2__, 1],
    [IID.__MUSHROOM3__, 1],
    [IID.__GHOUL_BLOOD__, 1]
  ], 1, [
    [AREAS.__AGITATOR__, 3e4]
  ], 10),
  idWeapon: 40,
  stack: 5,
  loot: LOOTID.__GHOUL_DRUG__,
  wait: 10
}, {
  id: IID.__MUSHROOM1__,
  itemButton: {
    src: ["https://devast.io/img/inv-mushroom1-out.png", "https://devast.io/img/inv-mushroom1-in.png", "https://devast.io/img/inv-mushroom1-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Amanita", "Poisoned, really dangerous"),
  stack: 20,
  loot: LOOTID.__MUSHROOM1__,
  wait: 5,
  perish: 10,
  perishId: IID.__ROTTEN_MUSHROOM1__,
  idWeapon: 41,
  score: 24
}, {
  id: IID.__MUSHROOM2__,
  itemButton: {
    src: ["https://devast.io/img/inv-mushroom2-out.png", "https://devast.io/img/inv-mushroom2-in.png", "https://devast.io/img/inv-mushroom2-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Boletus", "Can be eaten."),
  stack: 20,
  loot: LOOTID.__MUSHROOM2__,
  wait: 5,
  perish: 10,
  perishId: IID.__ROTTEN_MUSHROOM2__,
  idWeapon: 42,
  score: 24
}, {
  id: IID.__MUSHROOM3__,
  itemButton: {
    src: ["https://devast.io/img/inv-mushroom3-out.png", "https://devast.io/img/inv-mushroom3-in.png", "https://devast.io/img/inv-mushroom3-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Russula", "Can be eaten."),
  stack: 20,
  loot: LOOTID.__MUSHROOM3__,
  wait: 5,
  perish: 10,
  perishId: IID.__ROTTEN_MUSHROOM3__,
  idWeapon: 43,
  score: 24
}, {
  id: IID.__ROTTEN_MUSHROOM1__,
  itemButton: {
    src: ["https://devast.io/img/inv-rotten-mushroom1-out.png", "https://devast.io/img/inv-rotten-mushroom1-in.png",
      "https://devast.io/img/inv-rotten-mushroom1-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Rotten Mushroom", "Go on, have a bite!"),
  stack: 20,
  loot: LOOTID.__ROTTEN_MUSHROOM1__,
  wait: 5,
  idWeapon: 44,
  score: 20
}, {
  id: IID.__ROTTEN_MUSHROOM2__,
  itemButton: {
    src: ["https://devast.io/img/inv-rotten-mushroom2-out.png", "https://devast.io/img/inv-rotten-mushroom2-in.png",
      "https://devast.io/img/inv-rotten-mushroom2-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Rotten Mushroom", "Go on, have a bite!"),
  stack: 20,
  loot: LOOTID.__ROTTEN_MUSHROOM2__,
  wait: 5,
  idWeapon: 45,
  score: 20
}, {
  id: IID.__ROTTEN_MUSHROOM3__,
  itemButton: {
    src: ["https://devast.io/img/inv-rotten-mushroom3-out.png", "https://devast.io/img/inv-rotten-mushroom3-in.png",
      "https://devast.io/img/inv-rotten-mushroom3-click.png"
    ],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Rotten Mushroom", "Go on, have a bite!"),
  stack: 20,
  loot: LOOTID.__ROTTEN_MUSHROOM3__,
  wait: 5,
  idWeapon: 46,
  score: 20
}, {
  id: IID.__LAPADONE__,
  itemButton: {
    src: ["https://devast.io/img/inv-lapadoine-out.png", "https://devast.io/img/inv-lapadoine-in.png", "https://devast.io/img/inv-lapadoine-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Lapadone", "You are faster a certain time.", SKILLS.__DRUG__, [
    [IID.__SYRINGE__, 1],
    [IID.__CHEMICAL_COMPONENT__, 1],
    [IID.__MUSHROOM1__, 1],
    [IID.__GHOUL_BLOOD__, 1]
  ], 1, [
    [AREAS.__AGITATOR__, 45e3]
  ], 14),
  idWeapon: 47,
  stack: 5,
  loot: LOOTID.__LAPADONE__,
  wait: 10
}, {
  id: IID.__LAPABOT_REPAIR__,
  itemButton: {
    src: ["https://devast.io/img/inv-lapabot-out.png", "https://devast.io/img/inv-lapabot-in.png", "https://devast.io/img/inv-lapabot-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("LapaBot", "Repair your base for you", SKILLS.__SURVIVAL__, [
    [IID.__SHAPED_METAL__, 6],
    [IID.__ELECTRONICS__, 1],
    [IID.__SMALL_WIRE__, 1],
    [IID.__ALLOYS__, 1]
  ], 1, [
    [AREAS.__WORKBENCH2__, 1e5]
  ], 8),
  stack: 5,
  loot: LOOTID.__LAPABOT_REPAIR__,
  fruit: LOOTID.tomato,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [30, 30, 30, 30],
  height: [30, 30, 30, 30],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [35, 35, 35, 35],
  _y: [35, 35, 35, 35],
  blueprint: {
    src: "https://devast.io/img/clear-blue-lapabot.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-lapabot.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 0,
  behavior: BEHAVIOR.__AI_CONSTRUCTOR__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.construction,
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: [{
    src: "https://devast.io/img/lapabot0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/lapabot1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/lapabot2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/lapabot3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/lapabot4.png",
    img: {
      isLoaded: 0
    }
  }],
  builder: {
    src: "https://devast.io/img/day-lapabot-builder.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__METAL__,
  particlesDist: 68,
  timelife: 24e5,
  life: 250,
  score: 0,
  timelifeAI: 31536e7,
  idAI: AIID.__LAPABOT_REPAIR__,
  evolve: 2e4,
  evolveMaxStep: 4,
  killConstructor: 1
}, {
  id: IID.__SMALL_WIRE__,
  itemButton: {
    src: ["https://devast.io/img/inv-small-wire-out.png", "https://devast.io/img/inv-small-wire-in.png", "https://devast.io/img/inv-small-wire-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Small Wire", "Find it on TV's and computers in abandonned houses"),
  stack: 255,
  loot: LOOTID.__SMALL_WIRE__,
  score: 40
}, {
  id: IID.__PUMPKIN__,
  itemButton: {
    src: ["https://devast.io/img/inv-pumpkin-out.png", "https://devast.io/img/inv-pumpkin-in.png", "https://devast.io/img/inv-pumpkin-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Pumpkin", "Eat it or craft a pumpkin ghoul"),
  stack: 20,
  loot: LOOTID.__PUMPKIN__,
  wait: 5,
  perish: 10,
  perishId: IID.__ROTTEN_PUMPKIN__,
  idWeapon: 48,
  score: 24
}, {
  id: IID.__ROTTEN_PUMPKIN__,
  itemButton: {
    src: ["https://devast.io/img/inv-rotten-pumpkin-out.png", "https://devast.io/img/inv-rotten-pumpkin-in.png", "https://devast.io/img/inv-rotten-pumpkin-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Rotten Pumpkin", "You should not click"),
  stack: 20,
  loot: LOOTID.__ROTTEN_PUMPKIN__,
  wait: 5,
  idWeapon: 49,
  score: 20
}, {
  id: IID.__SEED_GHOUL__,
  itemButton: {
    src: ["https://devast.io/img/inv-ghoul5-out.png", "https://devast.io/img/inv-ghoul5-in.png", "https://devast.io/img/inv-ghoul5-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Ghoul Seed", "Plant your pumpkin pet", -1, [
    [IID.__PUMPKIN__, 1],
    [IID.__GHOUL_BLOOD__, 1]
  ], 1, [
    [AREAS.__FIRE__, 3e4],
    [AREAS.__BBQ__, 2e4]
  ], 99),
  stack: 40,
  loot: LOOTID.__SEED_GHOUL__,
  fruit: LOOTID.tomato,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [30, 30, 30, 30],
  height: [30, 30, 30, 30],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [35, 35, 35, 35],
  _y: [35, 35, 35, 35],
  blueprint: {
    src: "https://devast.io/img/clear-blue-root.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-root.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 0,
  behavior: BEHAVIOR.__AI_CONSTRUCTOR__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.orangeSeed,
  impact: SOUNDID.__PILLOW_IMPACT__,
  destroy: SOUNDID.__PILLOW_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-root0-ghoul.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-root1-ghoul.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-root2-ghoul.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-root3-ghoul.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-root4-ghoul.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__ORANGE__,
  particlesDist: 68,
  timelife: 24e5,
  life: 250,
  score: 0,
  timelifeAI: 12e4,
  idAI: AIID.__PUMPKIN_GHOUL__,
  evolve: 15e3,
  evolveMaxStep: 3,
  killConstructor: 0
}, {
  id: IID.__EXTRACTOR__,
  itemButton: {
    src: ["https://devast.io/img/inv-extractor-out.png", "https://devast.io/img/inv-extractor-in.png", "https://devast.io/img/inv-extractor-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Extractor", "Allows you to extract minerals from the ground", SKILLS.__SURVIVAL__, [
    [IID.__ALLOYS__, 2],
    [IID.__SHAPED_METAL__, 10],
    [IID.__SHAPED_URANIUM__, 2],
    [IID.__SMALL_WIRE__, 2],
    [IID.__ELECTRONICS__, 1]
  ], 1, [
    [AREAS.__WORKBENCH2__, 1e5]
  ], 12),
  idWeapon: 21,
  fuel: 74e4,
  zid: 0,
  z: 1,
  area: AREAS.__EXTRACTOR__,
  stack: 255,
  loot: LOOTID.__EXTRACTOR__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-extractor.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-extractor.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: Render.extractor,
  packetId: 16,
  interact: {
    src: "https://devast.io/img/e-extractor.png",
    img: {
      isLoaded: 0
    }
  },
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-extractor.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-extractor-rotate.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-extractor-off.png",
    img: {
      isLoaded: 0
    }
  }],
  spine: [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ],
  particles: PARTICLESID.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 500,
  score: 0
}, {
  id: IID.__ANTIDOTE__,
  itemButton: {
    src: ["https://devast.io/img/inv-antidote-out.png", "https://devast.io/img/inv-antidote-in.png", "https://devast.io/img/inv-antidote-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Antidote", "Remove the withdrawal effects (pink skin)", SKILLS.__DRUG__, [
    [IID.__SYRINGE__, 1],
    [IID.__CHEMICAL_COMPONENT__, 1],
    [IID.__MUSHROOM1__, 1],
    [IID.__ANTIDOTE_FLOWER__, 1]
  ], 1, [
    [AREAS.__AGITATOR__, 45e3]
  ], 14),
  idWeapon: 50,
  stack: 5,
  loot: LOOTID.__ANTIDOTE__,
  wait: 10
}, {
  id: IID.__ANTIDOTE_FLOWER__,
  itemButton: {
    src: ["https://devast.io/img/inv-antidote-flower-out.png", "https://devast.io/img/inv-antidote-flower-in.png", "https://devast.io/img/inv-antidote-flower-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Rare Flower", "Use it to make an antidote"),
  stack: 5,
  loot: LOOTID.__ANTIDOTE_FLOWER__,
  score: 400
}, {
  id: IID.__SEED_TREE__,
  itemButton: {
    src: ["https://devast.io/img/inv-seed-tree-out.png", "https://devast.io/img/inv-seed-tree-in.png", "https://devast.io/img/inv-seed-tree-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Tree Seed", "Plant your forest", SKILLS.__PLANT__, [
    [IID.__ACORN__, 1]
  ], 5, [
    [AREAS.__FIRE__, 6e4],
    [AREAS.__BBQ__, 4e4]
  ]),
  stack: 100,
  loot: LOOTID.__SEED_TREE__,
  fruit: LOOTID.__ORANGE__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [30, 30, 30, 30],
  height: [30, 30, 30, 30],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [35, 35, 35, 35],
  _y: [35, 35, 35, 35],
  blueprint: {
    src: "https://devast.io/img/clear-blue-plant-tree.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-plant-tree.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 0,
  behavior: BEHAVIOR.__SEED_RESOURCE__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: Render.treeSeed,
  impact: SOUNDID.__WOOD_IMPACT__,
  destroy: SOUNDID.__WOOD_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-plant-tree0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-plant-tree1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-plant-tree2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-plant-tree3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-plant4-orange.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__WOOD__,
  particlesDist: 68,
  timelife: 24e5,
  life: 150,
  score: 0
}, {
  id: IID.__ACORN__,
  itemButton: {
    src: ["https://devast.io/img/inv-acorn-out.png", "https://devast.io/img/inv-acorn-in.png", "https://devast.io/img/inv-acorn-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Acorn", "Eat it or plant a tree"),
  stack: 20,
  loot: LOOTID.__ACORN__,
  wait: 5,
  perish: 3,
  perishId: IID.__ROTTEN_ACORN__,
  idWeapon: 51,
  score: 24
}, {
  id: IID.__ROTTEN_ACORN__,
  itemButton: {
    src: ["https://devast.io/img/inv-rotten-acorn-out.png", "https://devast.io/img/inv-rotten-acorn-in.png", "https://devast.io/img/inv-rotten-acorn-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Rotten Acorn", "Not really good"),
  stack: 20,
  loot: LOOTID.__ROTTEN_ACORN__,
  wait: 5,
  idWeapon: 52,
  score: 20
}, {
  id: IID.__LASER_SNIPER__,
  itemButton: {
    src: ["https://devast.io/img/inv-laser-sniper-out.png", "https://devast.io/img/inv-laser-sniper-in.png", "https://devast.io/img/inv-laser-sniper-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Laser Sniper", "Faster than a sniper", SKILLS.__WEAPON__, [
    [IID.__ALLOYS__, 8],
    [IID.__SHAPED_METAL__, 6],
    [IID.__SHAPED_URANIUM__, 5],
    [IID.__WIRE__, 3],
    [IID.__ELECTRONICS__, 3]
  ], 1, [
    [AREAS.__TESLA__, 18e4]
  ], 14, IID.__LASER_PISTOL__, 2),
  idWeapon: 53,
  bullet: IID.__ENERGY_CELLS__,
  stack: 1,
  loot: LOOTID.__LASER_SNIPER__,
  wait: 10
}, {
  id: IID.__HAL_BOT__,
  itemButton: {
    src: ["https://devast.io/img/inv-hal-bot-out.png", "https://devast.io/img/inv-hal-bot-in.png", "https://devast.io/img/inv-hal-bot-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("HAL Bot", "Protect you", SKILLS.__SURVIVAL__, [
    [IID.__SHAPED_METAL__, 6],
    [IID.__ELECTRONICS__, 1],
    [IID.__SMALL_WIRE__, 1],
    [IID.__ALLOYS__, 1]
  ], 1, [
    [AREAS.__WORKBENCH2__, 1e5]
  ], 8),
  stack: 5,
  loot: LOOTID.__HAL_BOT__,
  fruit: LOOTID.tomato,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [30, 30, 30, 30],
  height: [30, 30, 30, 30],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [35, 35, 35, 35],
  _y: [35, 35, 35, 35],
  blueprint: {
    src: "https://devast.io/img/clear-blue-hal-bot.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-hal-bot.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 0,
  behavior: BEHAVIOR.__AI_CONSTRUCTOR__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.construction,
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: [{
    src: "https://devast.io/img/hal-bot0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/hal-bot1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/hal-bot2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/hal-bot3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/hal-bot4.png",
    img: {
      isLoaded: 0
    }
  }],
  builder: {
    src: "https://devast.io/img/day-hal-bot-builder.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__METAL__,
  particlesDist: 68,
  timelife: 24e5,
  life: 400,
  score: 0,
  timelifeAI: 31536e7,
  idAI: AIID.__HAL_BOT__,
  evolve: 8e3,
  evolveMaxStep: 4,
  killConstructor: 1
}, {
  id: IID.__TESLA_BOT__,
  itemButton: {
    src: ["https://devast.io/img/inv-tesla-bot-out.png", "https://devast.io/img/inv-tesla-bot-in.png", "https://devast.io/img/inv-tesla-bot-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Tesla Bot", "Protect you", SKILLS.__SURVIVAL__, [
    [IID.__SHAPED_URANIUM__, 3],
    [IID.__ELECTRONICS__, 1],
    [IID.__SMALL_WIRE__, 3],
    [IID.__WIRE__, 3],
    [IID.__ALLOYS__, 3]
  ], 1, [
    [AREAS.__TESLA__, 2e5]
  ], 16),
  stack: 5,
  loot: LOOTID.__TESLA_BOT__,
  fruit: LOOTID.tomato,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [30, 30, 30, 30],
  height: [30, 30, 30, 30],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [35, 35, 35, 35],
  _y: [35, 35, 35, 35],
  blueprint: {
    src: "https://devast.io/img/clear-blue-tesla-bot.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-tesla-bot.png",
    img: {
      isLoaded: 0
    }
  },
  door: 0,
  explosion: 0,
  behavior: BEHAVIOR.__AI_CONSTRUCTOR__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.construction,
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: [{
    src: "https://devast.io/img/tesla-bot0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/tesla-bot1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/tesla-bot2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/tesla-bot3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/tesla-bot4.png",
    img: {
      isLoaded: 0
    }
  }],
  builder: {
    src: "https://devast.io/img/day-lapabot-builder.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__METAL__,
  particlesDist: 68,
  timelife: 24e5,
  life: 500,
  score: 0,
  timelifeAI: 31536e7,
  idAI: AIID.__TESLA_BOT__,
  evolve: 2e4,
  evolveMaxStep: 4,
  killConstructor: 1
}, {
  id: IID.__CABLE0__,
  itemButton: {
    src: ["https://devast.io/img/inv-wire0-out.png", "https://devast.io/img/inv-wire0-in.png", "https://devast.io/img/inv-wire0-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Cable", "Create automatic mechanisms", SKILLS.__LOGIC__, [
    [IID.__SMALL_WIRE__, 1]
  ], 3, [
    [AREAS.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: LOOTID.__CABLE0__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-wire0.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-wire0.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__LOGIC__,
  gate: 0,
  wire: [
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 0],
    [0, 0, 1, 1]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.hiddenBuilding,
  impact: SOUNDID.__PILLOW_IMPACT__,
  destroy: SOUNDID.__PILLOW_DESTROY__,
  building: {
    src: "https://devast.io/img/day-wire0.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__BARELRED__,
  particlesDist: 40,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: IID.__CABLE1__,
  itemButton: {
    src: ["https://devast.io/img/inv-wire1-out.png", "https://devast.io/img/inv-wire1-in.png", "https://devast.io/img/inv-wire1-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Cable", "Create automatic mechanisms", SKILLS.__LOGIC__, [
    [IID.__SMALL_WIRE__, 1]
  ], 3, [
    [AREAS.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: LOOTID.__CABLE1__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-wire1.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-wire1.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__LOGIC__,
  gate: 0,
  wire: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.hiddenBuilding,
  impact: SOUNDID.__PILLOW_IMPACT__,
  destroy: SOUNDID.__PILLOW_DESTROY__,
  building: {
    src: "https://devast.io/img/day-wire1.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__BARELRED__,
  particlesDist: 40,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: IID.__CABLE2__,
  itemButton: {
    src: ["https://devast.io/img/inv-wire2-out.png", "https://devast.io/img/inv-wire2-in.png", "https://devast.io/img/inv-wire2-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Cable", "Create automatic mechanisms", SKILLS.__LOGIC__, [
    [IID.__SMALL_WIRE__, 1]
  ], 3, [
    [AREAS.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: LOOTID.__CABLE2__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-wire2.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-wire2.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__LOGIC__,
  gate: 0,
  wire: [
    [0, 1, 0, 1],
    [0, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 0, 0, 1]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.hiddenBuilding,
  impact: SOUNDID.__PILLOW_IMPACT__,
  destroy: SOUNDID.__PILLOW_DESTROY__,
  building: {
    src: "https://devast.io/img/day-wire2.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__BARELRED__,
  particlesDist: 40,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: IID.__CABLE3__,
  itemButton: {
    src: ["https://devast.io/img/inv-wire3-out.png", "https://devast.io/img/inv-wire3-in.png", "https://devast.io/img/inv-wire3-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Cable", "Create automatic mechanisms", SKILLS.__LOGIC__, [
    [IID.__SMALL_WIRE__, 1]
  ], 3, [
    [AREAS.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: LOOTID.__CABLE3__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-wire3.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-wire3.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__LOGIC__,
  gate: 0,
  wire: [
    [0, 1, 1, 1],
    [1, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 1]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.hiddenBuilding,
  impact: SOUNDID.__PILLOW_IMPACT__,
  destroy: SOUNDID.__PILLOW_DESTROY__,
  building: {
    src: "https://devast.io/img/day-wire3.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__BARELRED__,
  particlesDist: 40,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: IID.__SWITCH__,
  itemButton: {
    src: ["https://devast.io/img/inv-switch-out.png", "https://devast.io/img/inv-switch-in.png", "https://devast.io/img/inv-switch-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Switch", "Turn on/off mechanisms", SKILLS.__LOGIC__, [
    [IID.__SHAPED_METAL__, 1],
    [IID.__SMALL_WIRE__, 1]
  ], 3, [
    [AREAS.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: LOOTID.__SWITCH__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-switch.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-switch.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__LOGIC__,
  gate: 1,
  wire: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.switchOff,
  packetId: 37,
  interact: {
    src: "https://devast.io/img/e-turnon.png",
    img: {
      isLoaded: 0
    }
  },
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-switch-off.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-switch-on.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: IID.__GATE_OR__,
  itemButton: {
    src: ["https://devast.io/img/inv-switch-or-out.png", "https://devast.io/img/inv-switch-or-in.png", "https://devast.io/img/inv-switch-or-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Gate OR", "Activate only if an entry is on.", SKILLS.__LOGIC__, [
    [IID.__SHAPED_METAL__, 1],
    [IID.__SMALL_WIRE__, 1]
  ], 3, [
    [AREAS.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: LOOTID.__GATE_OR__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-switch-or.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-switch-or.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__LOGIC__,
  gate: 1,
  wire: [
    [1, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 1, 0]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.hiddenBuilding,
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: {
    src: "https://devast.io/img/day-switch-or.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: IID.__GATE_AND__,
  itemButton: {
    src: ["https://devast.io/img/inv-switch-and-out.png", "https://devast.io/img/inv-switch-and-in.png", "https://devast.io/img/inv-switch-and-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Gate AND", "Activate only if all entries are on.", SKILLS.__LOGIC__, [
    [IID.__SHAPED_METAL__, 1],
    [IID.__SMALL_WIRE__, 1]
  ], 3, [
    [AREAS.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: LOOTID.__GATE_AND__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-switch-and.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-switch-and.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__LOGIC__,
  gate: 1,
  wire: [
    [1, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 1, 0]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.hiddenBuilding,
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: {
    src: "https://devast.io/img/day-switch-and.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: IID.__GATE_NOT__,
  itemButton: {
    src: ["https://devast.io/img/inv-switch-reverse-out.png", "https://devast.io/img/inv-switch-reverse-in.png", "https://devast.io/img/inv-switch-reverse-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Gate NOT", "Activate only if no entry is on.", SKILLS.__LOGIC__, [
    [IID.__SHAPED_METAL__, 1],
    [IID.__SMALL_WIRE__, 1]
  ], 3, [
    [AREAS.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: LOOTID.__GATE_NOT__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-switch-reverse.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-switch-reverse.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__LOGIC__,
  gate: 1,
  wire: [
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 0]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.hiddenBuilding,
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: {
    src: "https://devast.io/img/day-switch-reverse.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: IID.__LAMP__,
  itemButton: {
    src: ["https://devast.io/img/inv-lamp-white-out.png", "https://devast.io/img/inv-lamp-white-in.png", "https://devast.io/img/inv-lamp-white-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Lamp", "Turn on when connected, damage ghoul", SKILLS.__LOGIC__, [
    [IID.__SHAPED_METAL__, 1],
    [IID.__SMALL_WIRE__, 1]
  ], 3, [
    [AREAS.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: LOOTID.__LAMP__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-lamp.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-lamp.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__LOGIC__,
  gate: 0,
  wire: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ],
  subtype: 0,
  collision: 2,
  radius: 22,
  areaEffect: 0,
  draw: Render.lamp,
  drawTop: Render.lampLight,
  packetId: 36,
  interact: {
    src: "https://devast.io/img/e-light.png",
    img: {
      isLoaded: 0
    }
  },
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: {
    src: "https://devast.io/img/day-lamp-off.png",
    img: {
      isLoaded: 0
    }
  },
  buildingOn: [{
    src: "https://devast.io/img/day-lamp-white.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-lamp-yellow.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-lamp-green.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-lamp-clear-blue.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-lamp-purple.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-lamp-pink.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-lamp-orange.png",
    img: {
      isLoaded: 0
    }
  }],
  buildingTop: [{
    src: "https://devast.io/img/day-lamp-light-white.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-lamp-light-yellow.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-lamp-light-green.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-lamp-light-clear-blue.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-lamp-light-purple.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-lamp-light-pink.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-lamp-light-orange.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 600,
  score: 0
}, {
  id: IID.__CABLE_WALL__,
  itemButton: {
    src: ["https://devast.io/img/inv-cable-wall-out.png", "https://devast.io/img/inv-cable-wall-in.png", "https://devast.io/img/inv-cable-wall-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Cable  - Wall", "Wall that can be connected to a cable", SKILLS.__LOGIC__, [
    [IID.__SHAPED_METAL__, 8],
    [IID.__SMALL_WIRE__, 1]
  ], 1, [
    [AREAS.__WELDING_MACHINE__, 15e3]
  ], 7),
  stack: 255,
  loot: LOOTID.__CABLE_WALL__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 1,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-cable-wall.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-cable-wall.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__LOGIC__,
  gate: 0,
  wire: [
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 0],
    [0, 0, 1, 1]
  ],
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: Render.breakable,
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-cable-wall.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-cable-wall1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-cable-wall2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-cable-wall3.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__METAL__,
  particlesDist: 40,
  timelife: 31536e7,
  life: 15e3,
  score: 0
}, {
  id: IID.__AUTOMATIC_DOOR__,
  itemButton: {
    src: ["https://devast.io/img/inv-automatic-door-out.png", "https://devast.io/img/inv-automatic-door-in.png", "https://devast.io/img/inv-automatic-door-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Automatic Door", "Connect it to a switch to open and close it.", SKILLS.__LOGIC__, [
    [IID.__SHAPED_METAL__, 8],
    [IID.__SMALL_WIRE__, 2],
    [IID.__ELECTRONICS__, 1]
  ], 1, [
    [AREAS.__WELDING_MACHINE__, 15e3]
  ], 7),
  stack: 255,
  loot: LOOTID.__AUTOMATIC_DOOR__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 1,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-automatic-door.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-automatic-door.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__LOGIC__,
  gate: 0,
  wire: [
    [0, 1, 1, 1],
    [1, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 1]
  ],
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: Render.automaticDoor,
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: [
    [{
      src: "https://devast.io/img/day-automatic-door-off.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-automatic-door1-off.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-automatic-door2-off.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-automatic-door3-off.png",
      img: {
        isLoaded: 0
      }
    }],
    [{
      src: "https://devast.io/img/day-automatic-door-on.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-automatic-door1-on.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-automatic-door2-on.png",
      img: {
        isLoaded: 0
      }
    }, {
      src: "https://devast.io/img/day-automatic-door3-on.png",
      img: {
        isLoaded: 0
      }
    }]
  ],
  particles: PARTICLESID.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 15e3,
  score: 0
}, {
  id: IID.__PLATFORM__,
  itemButton: {
    src: ["https://devast.io/img/inv-platform-out.png", "https://devast.io/img/inv-platform-in.png", "https://devast.io/img/inv-platform-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Platform", "Weight detector", SKILLS.__LOGIC__, [
    [IID.__SHAPED_METAL__, 1],
    [IID.__SMALL_WIRE__, 1]
  ], 3, [
    [AREAS.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: LOOTID.__PLATFORM__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-platform-off.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-platform-off.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__LOGIC__,
  gate: 1,
  wire: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.defaultBuilding,
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: {
    src: "https://devast.io/img/day-platform-off.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__FRIDGE__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: IID.__STONE_CAVE__,
  itemButton: {
    src: ["https://devast.io/img/inv-stone-cave-out.png", "https://devast.io/img/inv-stone-cave-in.png", "https://devast.io/img/inv-stone-cave-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Stone Cave", "Build mountains.", -1, [
    [IID.__STONE__, 140]
  ], 1, [
    [AREAS.__WORKBENCH__, 3e4]
  ], 99),
  idWeapon: 21,
  fuel: -1,
  zid: 1,
  z: 1,
  stack: 255,
  loot: LOOTID.__STONE_CAVE__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-stone-cave.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-stone-cave.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: IID.__STONE_CAVE__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: Render.wall,
  drawFloor: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ],
  broken: [{
    src: "https://devast.io/img/day-stone-cave-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__STONE_IMPACT__,
  destroy: SOUNDID.__STONE_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-stone-cave0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-stone-cave46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__STONE__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 300,
  score: 0
}, {
  id: IID.__BUNKER_WALL__,
  itemButton: {
    src: ["https://devast.io/img/inv-bunker-wall-out.png", "https://devast.io/img/inv-bunker-wall-in.png", "https://devast.io/img/inv-bunker-wall-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Bunker Wall", "Good old memory of the wasteland.", -1, [
    [IID.__STONE__, 150],
    [IID.__SHAPED_METAL__, 12]
  ], 1, [
    [AREAS.__WORKBENCH__, 3e4]
  ], 99),
  idWeapon: 21,
  fuel: -1,
  zid: 1,
  z: 1,
  stack: 255,
  loot: LOOTID.__BUNKER_WALL__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-bunker-wall.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-bunker-wall.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: IID.__STONE_CAVE__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: Render.wall,
  drawFloor: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ],
  broken: [{
    src: "https://devast.io/img/day-bunker-wall-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-bunker-wall0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-bunker-wall46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__STEEL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 1e4,
  score: 0
}, {
  id: IID.__GOLD_FLOOR__,
  itemButton: {
    src: ["https://devast.io/img/inv-mustard-floor-out.png", "https://devast.io/img/inv-mustard-floor-in.png", "https://devast.io/img/inv-mustard-floor-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Golden Floor", "Players can't spawn on it", SKILLS.__BUILDING__, [
    [IID.__LEATHER_BOAR__, 2]
  ], 2, [
    [AREAS.__WORKBENCH__, 15e3]
  ]),
  stack: 255,
  loot: LOOTID.__GOLD_FLOOR__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: 2,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-stone-floor.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-stone-floor.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: IID.__GOLD_FLOOR__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.groundFloor,
  broken: [{
    src: "https://devast.io/img/day-mustard-floor-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__NO_SOUND__,
  destroy: SOUNDID.__PILLOW_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-mustard-floor-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-mustard-floor-46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__GOLD__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 3e3,
  score: 0
}, {
  id: IID.__RED_FLOOR__,
  itemButton: {
    src: ["https://devast.io/img/inv-red-floor-out.png", "https://devast.io/img/inv-red-floor-in.png", "https://devast.io/img/inv-red-floor-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Red floor", "Players can't spawn on it", SKILLS.__BUILDING__, [
    [IID.__LEATHER_BOAR__, 2]
  ], 2, [
    [AREAS.__WORKBENCH__, 15e3]
  ]),
  stack: 255,
  loot: LOOTID.__RED_FLOOR__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: 2,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/day-clear-blue-stone-floor.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/day-redprint-stone-floor.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 1,
  idWall: IID.__RED_FLOOR__,
  lowWall: 0,
  door: 0,
  broke: 1,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.groundFloor,
  broken: [{
    src: "https://devast.io/img/day-red-floor-broken0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-broken1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-broken2.png",
    img: {
      isLoaded: 0
    }
  }],
  impact: SOUNDID.__NO_SOUND__,
  destroy: SOUNDID.__PILLOW_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-red-floor-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-5.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-6.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-7.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-8.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-9.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-10.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-11.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-12.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-13.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-14.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-15.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-16.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-17.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-18.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-19.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-20.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-21.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-22.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-23.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-24.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-25.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-26.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-27.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-28.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-29.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-30.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-31.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-32.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-33.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-34.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-35.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-36.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-37.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-38.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-39.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-40.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-41.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-42.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-43.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-44.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-45.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-red-floor-46.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__MUSHROOM1__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 3e3,
  score: 0
}, {
  id: IID.__WELDING_MACHINE__,
  itemButton: {
    src: ["https://devast.io/img/inv-welding-machine-out.png", "https://devast.io/img/inv-welding-machine-in.png", "https://devast.io/img/inv-welding-machine-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Welding Machine", "Allow you to make logic gates", SKILLS.__SURVIVAL__, [
    [IID.__JUNK__, 2],
    [IID.__SHAPED_METAL__, 4],
    [IID.__ELECTRONICS__, 1]
  ], 1, [
    [AREAS.__WORKBENCH__, 5e4]
  ]),
  idWeapon: 21,
  fuel: -1,
  zid: 0,
  z: 1,
  area: AREAS.__WELDING_MACHINE__,
  stack: 255,
  loot: LOOTID.__WELDING_MACHINE__,
  wait: 10,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-welding-machine.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-welding-machine.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__NO__,
  wire: 0,
  subtype: 0,
  collision: 1,
  areaEffect: 0,
  draw: Render.workbench,
  packetId: 16,
  interact: {
    src: "https://devast.io/img/e-welding-machine.png",
    img: {
      isLoaded: 0
    }
  },
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: {
    src: "https://devast.io/img/day-welding-machine.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 500,
  score: 0
}, {
  id: IID.__CABLE4__,
  itemButton: {
    src: ["https://devast.io/img/inv-wire4-out.png", "https://devast.io/img/inv-wire4-in.png", "https://devast.io/img/inv-wire4-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Cable  - Bridge", "Create automatic mechanisms", SKILLS.__LOGIC__, [
    [IID.__SMALL_WIRE__, 1]
  ], 3, [
    [AREAS.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: LOOTID.__CABLE4__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-wire4.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-wire4.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__LOGIC__,
  gate: 0,
  wire: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.hiddenBuilding,
  impact: SOUNDID.__PILLOW_IMPACT__,
  destroy: SOUNDID.__PILLOW_DESTROY__,
  building: {
    src: "https://devast.io/img/day-wire4.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__BARELRED__,
  particlesDist: 40,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: IID.__GATE_TIMER__,
  itemButton: {
    src: ["https://devast.io/img/inv-timer-out.png", "https://devast.io/img/inv-timer-in.png", "https://devast.io/img/inv-timer-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Gate Timer", "Emit a signal regularly.", SKILLS.__LOGIC__, [
    [IID.__SHAPED_METAL__, 1],
    [IID.__SMALL_WIRE__, 1]
  ], 3, [
    [AREAS.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: LOOTID.__GATE_TIMER__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-timer.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-timer.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__LOGIC__,
  gate: 1,
  wire: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.timerGate,
  packetId: 38,
  interact: {
    src: "https://devast.io/img/e-light.png",
    img: {
      isLoaded: 0
    }
  },
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: [{
    src: "https://devast.io/img/day-timer-0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-timer-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-timer-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-timer-3.png",
    img: {
      isLoaded: 0
    }
  }],
  particles: PARTICLESID.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: IID.__GATE_XOR__,
  itemButton: {
    src: ["https://devast.io/img/inv-xor-out.png", "https://devast.io/img/inv-xor-in.png", "https://devast.io/img/inv-xor-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Gate Xor", "Activate only if only one entry is on.", SKILLS.__LOGIC__, [
    [IID.__SHAPED_METAL__, 1],
    [IID.__SMALL_WIRE__, 1]
  ], 3, [
    [AREAS.__WELDING_MACHINE__, 15e3]
  ]),
  stack: 255,
  loot: LOOTID.__GATE_XOR__,
  wait: 10,
  idWeapon: 21,
  fuel: -1,
  zid: -1,
  z: 0,
  delay: 1e3,
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  xCenter: [0, 0, 0, 0],
  yCenter: [0, 0, 0, 0],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  blueprint: {
    src: "https://devast.io/img/clear-blue-xor.png",
    img: {
      isLoaded: 0
    }
  },
  redprint: {
    src: "https://devast.io/img/redprint-xor.png",
    img: {
      isLoaded: 0
    }
  },
  wall: 0,
  lowWall: 0,
  door: 0,
  broke: 0,
  explosion: 0,
  behavior: BEHAVIOR.__LOGIC__,
  gate: 1,
  wire: [
    [1, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 1, 0]
  ],
  subtype: 0,
  collision: 0,
  areaEffect: 0,
  draw: Render.hiddenBuilding,
  impact: SOUNDID.__STEEL_IMPACT__,
  destroy: SOUNDID.__STEEL_DESTROY__,
  building: {
    src: "https://devast.io/img/day-xor.png",
    img: {
      isLoaded: 0
    }
  },
  particles: PARTICLESID.__METAL__,
  particlesDist: 80,
  timelife: 31536e7,
  life: 250,
  score: 0
}, {
  id: IID.__VISION_1__,
  itemButton: {
    src: ["https://devast.io/img/skill-eye1-out.png", "https://devast.io/img/skill-eye1-in.png", "https://devast.io/img/skill-eye1-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Vision 1", "Improve your vision", SKILLS.__SKILL__, window.undefined, window.undefined, window
    .undefined, 0),
  scale: -.25
}, {
  id: IID.__VISION_2__,
  itemButton: {
    src: ["https://devast.io/img/skill-eye2-out.png", "https://devast.io/img/skill-eye2-in.png", "https://devast.io/img/skill-eye2-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Vision 2", "Improve your vision", SKILLS.__SKILL__, window.undefined, window.undefined, window
    .undefined, 5, IID.__VISION_1__),
  scale: -.35
}, {
  id: IID.__VISION_3__,
  itemButton: {
    src: ["https://devast.io/img/skill-eye3-out.png", "https://devast.io/img/skill-eye3-in.png", "https://devast.io/img/skill-eye3-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Vision 3", "Improve your vision", SKILLS.__SKILL__, window.undefined, window.undefined, window
    .undefined, 7, IID.__VISION_2__),
  scale: -.45
}, {
  id: IID.__BUILDER_1__,
  itemButton: {
    src: ["https://devast.io/img/skill-builder1-out.png", "https://devast.io/img/skill-builder1-in.png", "https://devast.io/img/skill-builder1-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Builder 1", "Multiplies some craft by two", SKILLS.__SKILL__, window.undefined, window
    .undefined, window.undefined, 6, window.undefined, 2)
}, {
  id: IID.__BUILDER_2__,
  itemButton: {
    src: ["https://devast.io/img/skill-builder2-out.png", "https://devast.io/img/skill-builder2-in.png", "https://devast.io/img/skill-builder2-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Builder 2", "Repair much faster", SKILLS.__SKILL__, window.undefined, window.undefined, window
    .undefined, 18, IID.__BUILDER_1__)
}, {
  id: IID.__INV_1__,
  itemButton: {
    src: ["https://devast.io/img/skill-inv1-out.png", "https://devast.io/img/skill-inv1-in.png", "https://devast.io/img/skill-inv1-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Inventory 1", "Add a slot in your inventory", SKILLS.__SKILL__, window.undefined, window
    .undefined, window.undefined, 0),
  bag: 1
}, {
  id: IID.__INV_2__,
  itemButton: {
    src: ["https://devast.io/img/skill-inv2-out.png", "https://devast.io/img/skill-inv2-in.png", "https://devast.io/img/skill-inv2-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Inventory 2", "Add a slot in your inventory", SKILLS.__SKILL__, window.undefined, window
    .undefined, window.undefined, 5, IID.__INV_1__),
  bag: 1
}, {
  id: IID.__INV_3__,
  itemButton: {
    src: ["https://devast.io/img/skill-inv3-out.png", "https://devast.io/img/skill-inv3-in.png", "https://devast.io/img/skill-inv3-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Inventory 3", "Add a slot in your bag", SKILLS.__SKILL__, window.undefined, window.undefined,
    window.undefined, 7, IID.__INV_2__),
  bag: 1
}, {
  id: IID.__INV_4__,
  itemButton: {
    src: ["https://devast.io/img/skill-inv4-out.png", "https://devast.io/img/skill-inv4-in.png", "https://devast.io/img/skill-inv4-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Inventory 4", "Add two slots in your bag", SKILLS.__SKILL__, window.undefined, window
    .undefined, window.undefined, 10, IID.__INV_3__, 2),
  bag: 2
}, {
  id: IID.__INV_5__,
  itemButton: {
    src: ["https://devast.io/img/skill-inv5-out.png", "https://devast.io/img/skill-inv5-in.png", "https://devast.io/img/skill-inv5-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Inventory 5", "Add three slots in your bag", SKILLS.__SKILL__, window.undefined, window
    .undefined, window.undefined, 12, IID.__INV_4__, 3),
  bag: 3
}, {
  id: IID.__FEATHERWEIGHT__,
  itemButton: {
    src: ["https://devast.io/img/skill-lightweight-out.png", "https://devast.io/img/skill-lightweight-in.png", "https://devast.io/img/skill-lightweight-click.png"],
    img: [{
      isLoaded: 0
    }, {
      isLoaded: 0
    }, {
      isLoaded: 0
    }]
  },
  detail: new Detail("Light Weight", "Less likely to trigger traps.", SKILLS.__SKILL__, window.undefined, window
    .undefined, window.undefined, 8)
}];
COUNTER = 0;
var FURNITUREID = {
  __SOFA0__: COUNTER++,
  __SOFA1__: COUNTER++,
  __SOFA2__: COUNTER++,
  __SOFA3__: COUNTER++,
  __SOFA4__: COUNTER++,
  __BED0__: COUNTER++,
  __BED1__: COUNTER++,
  __TABLE0__: COUNTER++,
  __TV0__: COUNTER++,
  __COMPUTER0__: COUNTER++,
  __CHAIR0__: COUNTER++,
  __WASHBASIN0__: COUNTER++,
  __FURNITURE0__: COUNTER++,
  __FURNITURE1__: COUNTER++,
  __FURNITURE2__: COUNTER++,
  __FURNITURE3__: COUNTER++,
  __CARTON0__: COUNTER++,
  __CARTON1__: COUNTER++,
  __SAFE0__: COUNTER++,
  __FRIDGE0__: COUNTER++,
  __FRIDGE1__: COUNTER++,
  __TOILET0__: COUNTER++,
  __LITTLETABLE0__: COUNTER++,
  __PLOT0__: COUNTER++,
  __BAREL0__: COUNTER++,
  __BAREL1__: COUNTER++,
  __GARBAGE0__: COUNTER++,
  __CUPBOARD0__: COUNTER++,
  __PHARMA0__: COUNTER++,
  __AMMOBOX0__: COUNTER++,
  __AMMOLOCKER0__: COUNTER++,
  __AMMOLOCKER1__: COUNTER++,
  __AMMOLOCKER2__: COUNTER++,
  __MACHINE0__: COUNTER++,
  __MACHINE1__: COUNTER++,
  __USINE_BOX0__: COUNTER++,
  __USINE_BOX1__: COUNTER++,
  __USINE_BOX2__: COUNTER++,
  __USINE_BOX3__: COUNTER++,
  __DISTRIBUTOR0__: COUNTER++,
  __CASH0__: COUNTER++,
  __RENFORCED__: COUNTER++,
  __SOFA6__: COUNTER++,
  __GOLD_CHAIR0__: COUNTER++,
  __GREEN_CHAIR0__: COUNTER++,
  __WOOD_CHAIR0__: COUNTER++,
  __TABLE1__: COUNTER++,
  __SMALL_LIGHT__: COUNTER++,
  __BED2__: COUNTER++,
  __FURNITURE4__: COUNTER++,
  __FURNITURE5__: COUNTER++,
  __FURNITURE6__: COUNTER++,
  __CHAIR1__: COUNTER++,
  __CHAIR2__: COUNTER++,
  __DISTRIBUTOR1__: COUNTER++,
  __SHOWER0__: COUNTER++,
  __TABLE2__: COUNTER++,
  __BLOOD_TRANS__: COUNTER++,
  __ENERGY_BOX0__: COUNTER++
};
COUNTER = 0;
var ROAD = INVENTORY[IID.__ROAD__].subtype;
ROAD[COUNTER] = {
  width: [100, 100, 100, 100],
  height: [100, 100, 100, 100],
  _x: [0, 0, 0, 0],
  _y: [0, 0, 0, 0],
  impact: SOUNDID.__NO_SOUND__,
  destroy: SOUNDID.__NO_SOUND__,
  building: {
    src: "https://devast.io/img/day-road0.png",
    img: {
      isLoaded: 0
    }
  },
  detail: new Detail("", "", -1, [
    [IID.__STONE__, 100]
  ]),
  life: 1e8,
  score: 0,
  particles: PARTICLESID.__NOTHING__,
  particlesDist: 70,
  angle: window.Math.PI,
  usable: 0,
  fridge: 0,
  loot: null,
  collision: 0,
  z: 0,
  zid: 2,
  areaEffect: 0,
  timelife: 31536e7
};
for (i = 0; i < 45; i++) ROAD[++COUNTER] = window.JSON.parse(window.JSON.stringify(ROAD[0])), ROAD[COUNTER].building
  .src = "https://devast.io/img/day-road" + COUNTER + ".png";
var FURNITURE = INVENTORY[IID.__FURNITURE__].subtype;
if (FURNITURE[FURNITUREID.__SOFA0__] = {
    width: [100, 100, 100, 100],
    height: [100, 100, 100, 100],
    _x: [0, 0, 0, 0],
    _y: [0, 0, 0, 0],
    impact: SOUNDID.__PILLOW_IMPACT__,
    destroy: SOUNDID.__PILLOW_DESTROY__,
    building: {
      src: "https://devast.io/img/day-sofa0.png",
      img: {
        isLoaded: 0
      }
    },
    detail: new Detail("", "", -1, [
      [IID.__WOOD__, 99],
      [IID.__LEATHER_BOAR__, 9],
      [IID.__STRING__, 6]
    ]),
    life: 450,
    score: 0,
    particles: PARTICLESID.__SOFA0__,
    particlesDist: 70,
    angle: window.Math.PI,
    usable: 0,
    fridge: 0,
    loot: null,
    collision: 1,
    z: 1,
    zid: 0,
    areaEffect: 0,
    packetId: 25,
    explosion: 0,
    damage: 0,
    damageBuilding: 0,
    timelife: 31536e7
  }, FURNITURE[FURNITUREID.__SOFA1__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID.__SOFA0__])),
  FURNITURE[FURNITUREID.__SOFA1__].building.src = "https://devast.io/img/day-sofa1.png", FURNITURE[FURNITUREID.__SOFA1__].particles =
  PARTICLESID.__SOFA1__, FURNITURE[FURNITUREID.__SOFA2__] = window.JSON.parse(window.JSON.stringify(FURNITURE[
    FURNITUREID.__SOFA1__])), FURNITURE[FURNITUREID.__SOFA2__].building.src = "https://devast.io/img/day-sofa2.png", FURNITURE[FURNITUREID
    .__SOFA3__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID.__SOFA0__])), FURNITURE[FURNITUREID
    .__SOFA3__].building.src = "https://devast.io/img/day-sofa3.png", FURNITURE[FURNITUREID.__SOFA3__].particles = PARTICLESID.__SOFA2__,
  FURNITURE[FURNITUREID.__SOFA4__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID.__SOFA3__])),
  FURNITURE[FURNITUREID.__SOFA4__].building.src = "https://devast.io/img/day-sofa4.png", FURNITURE[FURNITUREID.__SOFA6__] = window.JSON
  .parse(window.JSON.stringify(FURNITURE[FURNITUREID.__SOFA3__])), FURNITURE[FURNITUREID.__SOFA6__].building.src =
  "https://devast.io/img/day-sofa6.png", FURNITURE[FURNITUREID.__RENFORCED__] = window.JSON.parse(window.JSON.stringify(FURNITURE[
    FURNITUREID.__SOFA0__])), FURNITURE[FURNITUREID.__RENFORCED__].building.src = "https://devast.io/img/day-renforced-door.png",
  FURNITURE[FURNITUREID.__RENFORCED__].particles = PARTICLESID.__STEEL__, FURNITURE[FURNITUREID.__RENFORCED__].detail =
  new Detail("", "", -1, [
    [IID.__SHAPED_METAL__, 40]
  ]), FURNITURE[FURNITUREID.__RENFORCED__].life = 7e3, FURNITURE[FURNITUREID.__MACHINE0__] = window.JSON.parse(window
    .JSON.stringify(FURNITURE[FURNITUREID.__SOFA0__])), FURNITURE[FURNITUREID.__MACHINE0__].building.src =
  "https://devast.io/img/day-electronic-box0.png", FURNITURE[FURNITUREID.__MACHINE0__].impact = SOUNDID.__STEEL_IMPACT__, FURNITURE[
    FURNITUREID.__MACHINE0__].destroy = SOUNDID.__STEEL_DESTROY__, FURNITURE[FURNITUREID.__MACHINE0__].particles =
  PARTICLESID.__STEEL__, FURNITURE[FURNITUREID.__MACHINE0__].detail = new Detail("", "", -1, [
    [IID.__ENERGY_CELLS__, 8],
    [IID.__ELECTRONICS__, 4],
    [IID.__SHAPED_METAL__, 4],
    [IID.__JUNK__, 12]
  ]), FURNITURE[FURNITUREID.__MACHINE0__].width = [100, 100, 100, 100], FURNITURE[FURNITUREID.__MACHINE0__].height = [
    100, 100, 100, 100
  ], FURNITURE[FURNITUREID.__MACHINE0__]._x = [0, 0, 0, 0], FURNITURE[FURNITUREID.__MACHINE0__]._y = [0, 0, 0, 0],
  FURNITURE[FURNITUREID.__MACHINE0__].life = 800, FURNITURE[FURNITUREID.__MACHINE1__] = window.JSON.parse(window.JSON
    .stringify(FURNITURE[FURNITUREID.__MACHINE0__])), FURNITURE[FURNITUREID.__MACHINE1__].building.src =
  "https://devast.io/img/day-electronic-box1.png", FURNITURE[FURNITUREID.__MACHINE1__].width = [120, 120, 120, 120], FURNITURE[FURNITUREID
    .__MACHINE1__].height = [120, 120, 120, 120], FURNITURE[FURNITUREID.__MACHINE1__]._x = [-10, -10, -10, -10],
  FURNITURE[FURNITUREID.__MACHINE1__]._y = [-10, -10, -10, -10], FURNITURE[FURNITUREID.__MACHINE1__].detail =
  new Detail("", "", -1, [
    [IID.__ENERGY_CELLS__, 16],
    [IID.__ELECTRONICS__, 16],
    [IID.__WIRE__, 8],
    [IID.__SHAPED_METAL__, 16]
  ]), FURNITURE[FURNITUREID.__MACHINE1__].life = 1400, FURNITURE[FURNITUREID.__BED0__] = window.JSON.parse(window.JSON
    .stringify(FURNITURE[FURNITUREID.__SOFA0__])), FURNITURE[FURNITUREID.__BED0__].building.src = "https://devast.io/img/day-bed0.png",
  FURNITURE[FURNITUREID.__BED0__].particles = PARTICLESID.__BED0__, FURNITURE[FURNITUREID.__BED0__].detail = new Detail(
    "", "", -1, [
      [IID.__WOOD__, 200],
      [IID.__LEATHER_BOAR__, 20]
    ]), FURNITURE[FURNITUREID.__BED1__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID.__BED0__])),
  FURNITURE[FURNITUREID.__BED1__].building.src = "https://devast.io/img/day-bed1.png", FURNITURE[FURNITUREID.__BED1__].particles =
  PARTICLESID.__BED1__, FURNITURE[FURNITUREID.__BED2__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__BED0__])), FURNITURE[FURNITUREID.__BED2__].building.src = "https://devast.io/img/day-bed2.png", FURNITURE[FURNITUREID.__BED2__]
  .particles = PARTICLESID.__GREY_STEEL__, FURNITURE[FURNITUREID.__BED2__].detail = new Detail("", "", -1, [
    [IID.__SHAPED_METAL__, 12],
    [IID.__LEATHER_BOAR__, 20],
    [IID.__ANIMAL_FAT__, 12]
  ]), FURNITURE[FURNITUREID.__TABLE0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID.__SOFA0__])),
  FURNITURE[FURNITUREID.__TABLE0__].building.src = "https://devast.io/img/day-table0.png", FURNITURE[FURNITUREID.__TABLE0__].impact =
  SOUNDID.__WOOD_IMPACT__, FURNITURE[FURNITUREID.__TABLE0__].destroy = SOUNDID.__WOOD_DESTROY__, FURNITURE[FURNITUREID
    .__TABLE0__].particles = PARTICLESID.__WOOD__, FURNITURE[FURNITUREID.__TABLE0__].detail = new Detail("", "", -1, [
    [IID.__WOOD__, 200]
  ]), FURNITURE[FURNITUREID.__TABLE1__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID.__TABLE0__])),
  FURNITURE[FURNITUREID.__TABLE1__].building.src = "https://devast.io/img/day-table1.png", FURNITURE[FURNITUREID.__TABLE1__].width = [100,
    290, 100, 280
  ], FURNITURE[FURNITUREID.__TABLE1__].height = [280, 100, 280, 100], FURNITURE[FURNITUREID.__TABLE1__].iTile = [-1, 0,
    -1, 0
  ], FURNITURE[FURNITUREID.__TABLE1__].jTile = [0, -1, 0, -1], FURNITURE[FURNITUREID.__TABLE1__]._x = [0, -90, 0, -90],
  FURNITURE[FURNITUREID.__TABLE1__]._y = [-90, 0, -90, 0], FURNITURE[FURNITUREID.__TABLE2__] = window.JSON.parse(window
    .JSON.stringify(FURNITURE[FURNITUREID.__TABLE0__])), FURNITURE[FURNITUREID.__TABLE2__].building.src =
  "https://devast.io/img/day-table2.png", FURNITURE[FURNITUREID.__TABLE2__].impact = SOUNDID.__STEEL_IMPACT__, FURNITURE[FURNITUREID
    .__TABLE2__].destroy = SOUNDID.__STEEL_DESTROY__, FURNITURE[FURNITUREID.__TABLE2__].particles = PARTICLESID
  .__STEEL__, FURNITURE[FURNITUREID.__TABLE2__].detail = new Detail("", "", -1, [
    [IID.__SHAPED_METAL__, 8]
  ]), FURNITURE[FURNITUREID.__TV0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID.__SOFA0__])),
  FURNITURE[FURNITUREID.__TV0__].building.src = "https://devast.io/img/day-tv0.png", FURNITURE[FURNITUREID.__TV0__].impact = SOUNDID
  .__STEEL_IMPACT__, FURNITURE[FURNITUREID.__TV0__].destroy = SOUNDID.__STEEL_DESTROY__, FURNITURE[FURNITUREID.__TV0__]
  .particles = PARTICLESID.__SAFE0__, FURNITURE[FURNITUREID.__TV0__].detail = new Detail("", "", -1, [
    [IID.__ELECTRONICS__, 4],
    [IID.__SHAPED_METAL__, 16],
    [IID.__SMALL_WIRE__, 4],
    [IID.__JUNK__, 12]
  ]), FURNITURE[FURNITUREID.__COMPUTER0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID.__SOFA0__])),
  FURNITURE[FURNITUREID.__COMPUTER0__].building.src = "https://devast.io/img/day-computer0.png", FURNITURE[FURNITUREID.__COMPUTER0__]
  .impact = SOUNDID.__STEEL_IMPACT__, FURNITURE[FURNITUREID.__COMPUTER0__].destroy = SOUNDID.__STEEL_DESTROY__,
  FURNITURE[FURNITUREID.__COMPUTER0__].particles = PARTICLESID.__METAL__, FURNITURE[FURNITUREID.__COMPUTER0__].detail =
  new Detail("", "", -1, [
    [IID.__SMALL_WIRE__, 4],
    [IID.__SHAPED_METAL__, 16],
    [IID.__JUNK__, 12],
    [IID.__ELECTRONICS__, 4]
  ]), FURNITURE[FURNITUREID.__CHAIR0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
  .__COMPUTER0__])), FURNITURE[FURNITUREID.__CHAIR0__].building.src = "https://devast.io/img/day-chair0.png", FURNITURE[FURNITUREID
    .__CHAIR0__].detail = new Detail("", "", -1, [
    [IID.__LEATHER_BOAR__, 8],
    [IID.__SHAPED_METAL__, 8]
  ]), FURNITURE[FURNITUREID.__CHAIR1__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
  .__COMPUTER0__])), FURNITURE[FURNITUREID.__CHAIR1__].building.src = "https://devast.io/img/day-chair1.png", FURNITURE[FURNITUREID
    .__CHAIR1__].detail = new Detail("", "", -1, [
    [IID.__LEATHER_BOAR__, 8],
    [IID.__SHAPED_METAL__, 8]
  ]), FURNITURE[FURNITUREID.__CHAIR2__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
  .__COMPUTER0__])), FURNITURE[FURNITUREID.__CHAIR2__].building.src = "https://devast.io/img/day-chair2.png", FURNITURE[FURNITUREID
    .__CHAIR2__].detail = new Detail("", "", -1, [
    [IID.__LEATHER_BOAR__, 8],
    [IID.__SHAPED_METAL__, 8]
  ]), FURNITURE[FURNITUREID.__WASHBASIN0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
  .__SOFA0__])), FURNITURE[FURNITUREID.__WASHBASIN0__].building.src = "https://devast.io/img/day-washbasin0.png", FURNITURE[FURNITUREID
    .__WASHBASIN0__].impact = SOUNDID.__WOOD_IMPACT__, FURNITURE[FURNITUREID.__WASHBASIN0__].destroy = SOUNDID
  .__WOOD_DESTROY__, FURNITURE[FURNITUREID.__WASHBASIN0__].particles = PARTICLESID.__WOODLIGHT__, FURNITURE[FURNITUREID
    .__WASHBASIN0__].detail = new Detail("", "", -1, [
    [IID.__WOOD__, 150],
    [IID.__SHAPED_METAL__, 8]
  ]), FURNITURE[FURNITUREID.__PHARMA0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__WASHBASIN0__])), FURNITURE[FURNITUREID.__PHARMA0__].building.src = "https://devast.io/img/day-pharma0.png", FURNITURE[FURNITUREID
    .__PHARMA0__].detail = new Detail("", "", -1, [
    [IID.__SHAPED_METAL__, 8],
    [IID.__STONE__, 60]
  ]), FURNITURE[FURNITUREID.__PHARMA0__].impact = SOUNDID.__STONE_IMPACT__, FURNITURE[FURNITUREID.__PHARMA0__].destroy =
  SOUNDID.__STONE_DESTROY__, FURNITURE[FURNITUREID.__PHARMA0__].particles = PARTICLESID.__TOILET__, FURNITURE[
    FURNITUREID.__PHARMA0__].usable = 1, FURNITURE[FURNITUREID.__PHARMA0__].loot = [
    [IID.__BANDAGE__, 1, .1],
    [IID.__MEDIKIT__, 1, .03],
    [IID.__RADAWAY__, 1, .05],
    [IID.__CHEMICAL_COMPONENT__, 2, .2],
    [IID.__SYRINGE__, 1, .1]
  ], FURNITURE[FURNITUREID.__SHOWER0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__WASHBASIN0__])), FURNITURE[FURNITUREID.__SHOWER0__].building.src = "https://devast.io/img/day-shower0.png", FURNITURE[FURNITUREID
    .__SHOWER0__].detail = new Detail("", "", -1, [
    [IID.__SHAPED_METAL__, 8],
    [IID.__STONE__, 60]
  ]), FURNITURE[FURNITUREID.__SHOWER0__].impact = SOUNDID.__STONE_IMPACT__, FURNITURE[FURNITUREID.__SHOWER0__].destroy =
  SOUNDID.__STONE_DESTROY__, FURNITURE[FURNITUREID.__SHOWER0__].particles = PARTICLESID.__TOILET__, FURNITURE[
    FURNITUREID.__SHOWER0__].width = [70, 100, 70, 100], FURNITURE[FURNITUREID.__SHOWER0__].height = [100, 70, 100, 70],
  FURNITURE[FURNITUREID.__SHOWER0__]._x = [0, 0, 30, 0], FURNITURE[FURNITUREID.__SHOWER0__]._y = [0, 0, 0, 30],
  FURNITURE[FURNITUREID.__FURNITURE0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__WASHBASIN0__])), FURNITURE[FURNITUREID.__FURNITURE0__].building.src = "https://devast.io/img/day-furniture0.png", FURNITURE[
    FURNITUREID.__FURNITURE0__].width = [50, 100, 50, 100], FURNITURE[FURNITUREID.__FURNITURE0__].height = [100, 50,
    100, 50
  ], FURNITURE[FURNITUREID.__FURNITURE0__]._x = [0, 0, 50, 0], FURNITURE[FURNITUREID.__FURNITURE0__]._y = [0, 0, 0, 50],
  FURNITURE[FURNITUREID.__FURNITURE0__].detail = new Detail("", "", -1, [
    [IID.__WOOD__, 200]
  ]), FURNITURE[FURNITUREID.__FURNITURE0__].usable = 1, FURNITURE[FURNITUREID.__FURNITURE0__].loot = [
    [IID.__HEADSCARF__, 1, .004],
    [IID.__GAZ_MASK__, 1, .004],
    [IID.__9MM__, 1, .005],
    [IID.__BULLET_9MM__, 30, .02],
    [IID.__BANDAGE__, 1, .05],
    [IID.__SEED_TOMATO__, 1, .08],
    [IID.__NAILS__, 40, .1],
    [IID.__SEED_ORANGE__, 2, .1],
    [IID.__SLEEPING_BAG__, 1, .01],
    [IID.__ENERGY_CELLS__, 4, .05],
    [IID.__JUNK__, 1, .2],
    [IID.__STRING__, 2, .1]
  ], FURNITURE[FURNITUREID.__FURNITURE1__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__FURNITURE0__])), FURNITURE[FURNITUREID.__FURNITURE1__].building.src = "https://devast.io/img/day-furniture1.png", FURNITURE[
    FURNITUREID.__FURNITURE1__].width = [70, 100, 70, 100], FURNITURE[FURNITUREID.__FURNITURE1__].height = [100, 70,
    100, 70
  ], FURNITURE[FURNITUREID.__FURNITURE1__]._x = [0, 0, 30, 0], FURNITURE[FURNITUREID.__FURNITURE1__]._y = [0, 0, 0, 30],
  FURNITURE[FURNITUREID.__FURNITURE2__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__FURNITURE0__])), FURNITURE[FURNITUREID.__FURNITURE2__].building.src = "https://devast.io/img/day-furniture2.png", FURNITURE[
    FURNITUREID.__FURNITURE2__].width = [70, 70, 70, 70], FURNITURE[FURNITUREID.__FURNITURE2__].height = [70, 70, 70,
    70], FURNITURE[FURNITUREID.__FURNITURE2__]._x = [15, 15, 15, 15], FURNITURE[FURNITUREID.__FURNITURE2__]._y = [15,
    15, 15, 15
  ], FURNITURE[FURNITUREID.__FURNITURE2__].detail = new Detail("", "", -1, [
    [IID.__WOOD__, 100]
  ]), FURNITURE[FURNITUREID.__FURNITURE3__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__FURNITURE2__])), FURNITURE[FURNITUREID.__FURNITURE3__].building.src = "https://devast.io/img/day-furniture3.png", FURNITURE[
    FURNITUREID.__FURNITURE4__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID.__FURNITURE1__])),
  FURNITURE[FURNITUREID.__FURNITURE4__].building.src = "https://devast.io/img/day-furniture4.png", FURNITURE[FURNITUREID.__FURNITURE4__]
  .impact = SOUNDID.__STEEL_IMPACT__, FURNITURE[FURNITUREID.__FURNITURE4__].destroy = SOUNDID.__STEEL_DESTROY__,
  FURNITURE[FURNITUREID.__FURNITURE4__].particles = PARTICLESID.__GREY_STEEL__, FURNITURE[FURNITUREID.__FURNITURE4__]
  .loot = [
    [IID.__HEADSCARF__, 1, .004],
    [IID.__GAZ_MASK__, 1, .004],
    [IID.__9MM__, 1, .005],
    [IID.__BULLET_9MM__, 30, .02],
    [IID.__BANDAGE__, 1, .05],
    [IID.__SMALL_WIRE__, 4, .1],
    [IID.__LAMP__, 1, .08],
    [IID.__PLATFORM__, 1, .08],
    [IID.__SLEEPING_BAG__, 1, .01],
    [IID.__ENERGY_CELLS__, 8, .05],
    [IID.__JUNK__, 2, .2],
    [IID.__STRING__, 2, .1]
  ], FURNITURE[FURNITUREID.__FURNITURE5__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__FURNITURE2__])), FURNITURE[FURNITUREID.__FURNITURE5__].building.src = "https://devast.io/img/day-furniture5.png", FURNITURE[
    FURNITUREID.__FURNITURE5__].impact = SOUNDID.__STEEL_IMPACT__, FURNITURE[FURNITUREID.__FURNITURE5__].destroy =
  SOUNDID.__STEEL_DESTROY__, FURNITURE[FURNITUREID.__FURNITURE5__].particles = PARTICLESID.__GREY_STEEL__, FURNITURE[
    FURNITUREID.__FURNITURE5__].loot = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID.__FURNITURE4__]
    .loot)), FURNITURE[FURNITUREID.__FURNITURE6__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__FURNITURE5__])), FURNITURE[FURNITUREID.__FURNITURE6__].building.src = "https://devast.io/img/day-furniture6.png", FURNITURE[
    FURNITUREID.__CARTON0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID.__FURNITURE2__])),
  FURNITURE[FURNITUREID.__CARTON0__].impact = SOUNDID.__PILLOW_IMPACT__, FURNITURE[FURNITUREID.__CARTON0__].destroy =
  SOUNDID.__PILLOW_DESTROY__, FURNITURE[FURNITUREID.__CARTON0__].building.src = "https://devast.io/img/day-carton-box0.png", FURNITURE[
    FURNITUREID.__CARTON0__].detail = new Detail("", "", -1, []), FURNITURE[FURNITUREID.__CARTON0__].usable = 1,
  FURNITURE[FURNITUREID.__CARTON0__].loot = [
    [IID.__CAN__, 1, .1],
    [IID.__JUNK__, 2, .2],
    [IID.__HEADSCARF__, 1, .003],
    [IID.__GAZ_MASK__, 1, .003],
    [IID.__NAIL_GUN__, 1, .01],
    [IID.__9MM__, 1, .005],
    [IID.__BULLET_9MM__, 30, .02],
    [IID.__BANDAGE__, 1, .08],
    [IID.__SEED_TOMATO__, 1, .1],
    [IID.__NAILS__, 40, .02],
    [IID.__SEED_ORANGE__, 2, .1],
    [IID.__ENERGY_CELLS__, 4, .08],
    [IID.__ELECTRONICS__, 1, .1]
  ], FURNITURE[FURNITUREID.__CARTON1__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID.__CARTON0__])),
  FURNITURE[FURNITUREID.__CARTON1__].building.src = "https://devast.io/img/day-carton-box1.png", FURNITURE[FURNITUREID.__GOLD_CHAIR0__] =
  window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID.__CARTON0__])), FURNITURE[FURNITUREID.__GOLD_CHAIR0__]
  .building.src = "https://devast.io/img/day-gold-chair0.png", FURNITURE[FURNITUREID.__GOLD_CHAIR0__].detail = new Detail("", "", -1, [
    [IID.__WOOD__, 40]
  ]), FURNITURE[FURNITUREID.__GOLD_CHAIR0__].usable = 0, FURNITURE[FURNITUREID.__GOLD_CHAIR0__].particles = PARTICLESID
  .__GOLD__, FURNITURE[FURNITUREID.__GREEN_CHAIR0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__GOLD_CHAIR0__])), FURNITURE[FURNITUREID.__GREEN_CHAIR0__].building.src = "https://devast.io/img/day-green-chair0.png", FURNITURE[
    FURNITUREID.__GREEN_CHAIR0__].particles = PARTICLESID.__KAKI__, FURNITURE[FURNITUREID.__WOOD_CHAIR0__] = window.JSON
  .parse(window.JSON.stringify(FURNITURE[FURNITUREID.__GOLD_CHAIR0__])), FURNITURE[FURNITUREID.__WOOD_CHAIR0__].building
  .src = "https://devast.io/img/day-wood-chair0.png", FURNITURE[FURNITUREID.__WOOD_CHAIR0__].impact = SOUNDID.__WOOD_IMPACT__, FURNITURE[
    FURNITUREID.__WOOD_CHAIR0__].destroy = SOUNDID.__WOOD_DESTROY__, FURNITURE[FURNITUREID.__WOOD_CHAIR0__].particles =
  PARTICLESID.__WOODLIGHT__, FURNITURE[FURNITUREID.__PLOT0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[
    FURNITUREID.__FURNITURE2__])), FURNITURE[FURNITUREID.__PLOT0__].building.src = "https://devast.io/img/day-plot0.png", FURNITURE[
    FURNITUREID.__PLOT0__].particles = PARTICLESID.__PLOT__, FURNITURE[FURNITUREID.__PLOT0__].collision = 2, FURNITURE[
    FURNITUREID.__PLOT0__].radius = 30, FURNITURE[FURNITUREID.__PLOT0__].detail = new Detail("", "", -1, [
    [IID.__STONE__, 40],
    [IID.__WOOD__, 40]
  ]), FURNITURE[FURNITUREID.__PLOT0__].usable = 0, FURNITURE[FURNITUREID.__BLOOD_TRANS__] = window.JSON.parse(window
    .JSON.stringify(FURNITURE[FURNITUREID.__PLOT0__])), FURNITURE[FURNITUREID.__BLOOD_TRANS__].impact = SOUNDID
  .__STEEL_IMPACT__, FURNITURE[FURNITUREID.__BLOOD_TRANS__].destroy = SOUNDID.__STEEL_DESTROY__, FURNITURE[FURNITUREID
    .__BLOOD_TRANS__].building.src = "https://devast.io/img/day-blood-transfusion.png", FURNITURE[FURNITUREID.__BLOOD_TRANS__].particles =
  PARTICLESID.__GREY_STEEL__, FURNITURE[FURNITUREID.__BLOOD_TRANS__].detail = new Detail("", "", -1, [
    [IID.__JUNK__, 2],
    [IID.__SHAPED_METAL__, 1],
    [IID.__SYRINGE__, 1]
  ]), FURNITURE[FURNITUREID.__BAREL0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__FURNITURE2__])), FURNITURE[FURNITUREID.__BAREL0__].building.src = "https://devast.io/img/day-barel0.png", FURNITURE[FURNITUREID
    .__BAREL0__].impact = SOUNDID.__STEEL_IMPACT__, FURNITURE[FURNITUREID.__BAREL0__].destroy = SOUNDID.__NO_SOUND__,
  FURNITURE[FURNITUREID.__BAREL0__].particles = PARTICLESID.__BARELRED__, FURNITURE[FURNITUREID.__BAREL0__].explosion =
  1, FURNITURE[FURNITUREID.__BAREL0__].damage = 250, FURNITURE[FURNITUREID.__BAREL0__].damageBuilding = 5e3, FURNITURE[
    FURNITUREID.__BAREL0__].collision = 2, FURNITURE[FURNITUREID.__BAREL0__].radius = 30, FURNITURE[FURNITUREID
    .__BAREL0__].detail = new Detail("", "", -1, [
    [IID.__SHAPED_METAL__, 8]
  ]), FURNITURE[FURNITUREID.__BAREL0__].usable = 1, FURNITURE[FURNITUREID.__BAREL0__].life = 100, FURNITURE[FURNITUREID
    .__BAREL0__].loot = [
    [IID.__GASOLINE__, 1, .2]
  ], FURNITURE[FURNITUREID.__BAREL1__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
  .__FURNITURE2__])), FURNITURE[FURNITUREID.__BAREL1__].building.src = "https://devast.io/img/day-barel1.png", FURNITURE[FURNITUREID
    .__BAREL1__].impact = SOUNDID.__STEEL_IMPACT__, FURNITURE[FURNITUREID.__BAREL1__].destroy = SOUNDID.__NO_SOUND__,
  FURNITURE[FURNITUREID.__BAREL1__].particles = PARTICLESID.__BARELGREEN__, FURNITURE[FURNITUREID.__BAREL1__]
  .explosion = 1, FURNITURE[FURNITUREID.__BAREL1__].damage = 300, FURNITURE[FURNITUREID.__BAREL1__].damageBuilding =
  1e4, FURNITURE[FURNITUREID.__BAREL1__].collision = 2, FURNITURE[FURNITUREID.__BAREL1__].radius = 30, FURNITURE[
    FURNITUREID.__BAREL1__].life = 300, FURNITURE[FURNITUREID.__BAREL1__].detail = new Detail("", "", -1, [
    [IID.__URANIUM__, 8],
    [IID.__SHAPED_METAL__, 8]
  ]), FURNITURE[FURNITUREID.__BAREL1__].usable = 0, FURNITURE[FURNITUREID.__BAREL1__].areaEffect = __RADIATION__,
  FURNITURE[FURNITUREID.__GARBAGE0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID.__FURNITURE2__])),
  FURNITURE[FURNITUREID.__GARBAGE0__].building.src = "https://devast.io/img/day-garbage-bag0.png", FURNITURE[FURNITUREID.__GARBAGE0__]
  .impact = SOUNDID.__PILLOW_IMPACT__, FURNITURE[FURNITUREID.__GARBAGE0__].destroy = SOUNDID.__PILLOW_DESTROY__,
  FURNITURE[FURNITUREID.__GARBAGE0__].particles = PARTICLESID.__GARBAGE0__, FURNITURE[FURNITUREID.__GARBAGE0__]
  .collision = 2, FURNITURE[FURNITUREID.__GARBAGE0__].radius = 30, FURNITURE[FURNITUREID.__GARBAGE0__].detail =
  new Detail("", "", -1, []), FURNITURE[FURNITUREID.__GARBAGE0__].loot = [
    [IID.__CAN__, 1, .08],
    [IID.__SYRINGE__, 1, .05],
    [IID.__GAZ_MASK__, 1, .02],
    [IID.__9MM__, 1, .01],
    [IID.__BULLET_9MM__, 30, .02],
    [IID.__NAILS__, 40, .1],
    [IID.__SEED_ORANGE__, 2, .1],
    [IID.__SEED_TOMATO__, 1, .1],
    [IID.__ROTTEN_TOMATO__, 1, .15],
    [IID.__ROTTEN_ORANGE__, 1, .15],
    [IID.__ROTTEN_STEAK__, 1, .15],
    [IID.__JUNK__, 3, .4]
  ], FURNITURE[FURNITUREID.__FRIDGE0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__FURNITURE0__])), FURNITURE[FURNITUREID.__FRIDGE0__].building.src = "https://devast.io/img/day-fridge0.png", FURNITURE[FURNITUREID
    .__FRIDGE0__].impact = SOUNDID.__STEEL_IMPACT__, FURNITURE[FURNITUREID.__FRIDGE0__].destroy = SOUNDID
  .__STEEL_DESTROY__, FURNITURE[FURNITUREID.__FRIDGE0__].particles = PARTICLESID.__METAL__, FURNITURE[FURNITUREID
    .__FRIDGE0__].detail = new Detail("", "", -1, [
    [IID.__SHAPED_METAL__, 16],
    [IID.__SULFUR__, 16]
  ]), FURNITURE[FURNITUREID.__FRIDGE0__].fridge = 1, FURNITURE[FURNITUREID.__FRIDGE0__].loot = [
    [IID.__SODA__, 1, .1],
    [IID.__TOMATO_SOUP__, 1, .1],
    [IID.__CRISPS__, 1, .01],
    [IID.__ROTTEN_TOMATO__, 1, .15],
    [IID.__ROTTEN_ORANGE__, 1, .15],
    [IID.__ROTTEN_STEAK__, 1, .15],
    [IID.__ROTTEN_CRISPS__, 1, .01]
  ], FURNITURE[FURNITUREID.__FRIDGE1__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID.__FRIDGE0__])),
  FURNITURE[FURNITUREID.__FRIDGE1__].building.src = "https://devast.io/img/day-fridge1.png", FURNITURE[FURNITUREID.__FRIDGE1__]
  .particles = PARTICLESID.__FRIDGE__, FURNITURE[FURNITUREID.__DISTRIBUTOR0__] = window.JSON.parse(window.JSON
    .stringify(FURNITURE[FURNITUREID.__FURNITURE0__])), FURNITURE[FURNITUREID.__DISTRIBUTOR0__].building.src =
  "https://devast.io/img/day-vending-machine0.png", FURNITURE[FURNITUREID.__DISTRIBUTOR0__].impact = SOUNDID.__STEEL_IMPACT__, FURNITURE[
    FURNITUREID.__DISTRIBUTOR0__].destroy = SOUNDID.__STEEL_DESTROY__, FURNITURE[FURNITUREID.__DISTRIBUTOR0__]
  .particles = PARTICLESID.__RED_STEEL__, FURNITURE[FURNITUREID.__DISTRIBUTOR0__].detail = new Detail("", "", -1, [
    [IID.__SHAPED_METAL__, 16],
    [IID.__SULFUR__, 16]
  ]), FURNITURE[FURNITUREID.__DISTRIBUTOR0__].fridge = 1, FURNITURE[FURNITUREID.__DISTRIBUTOR0__].loot = [
    [IID.__SODA__, 1, .04],
    [IID.__CRISPS__, 1, .04]
  ], FURNITURE[FURNITUREID.__DISTRIBUTOR1__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__DISTRIBUTOR0__])), FURNITURE[FURNITUREID.__DISTRIBUTOR1__].building.src = "https://devast.io/img/day-distributor0.png", FURNITURE[
    FURNITUREID.__DISTRIBUTOR1__].particles = PARTICLESID.__GREY_STEEL__, FURNITURE[FURNITUREID.__DISTRIBUTOR1__]
  .detail = new Detail("", "", -1, [
    [IID.__SHAPED_METAL__, 16],
    [IID.__SULFUR__, 16]
  ]), FURNITURE[FURNITUREID.__DISTRIBUTOR1__].fridge = 1, FURNITURE[FURNITUREID.__DISTRIBUTOR1__].loot = [
    [IID.__SODA__, 1, .04],
    [IID.__CRISPS__, 1, .04],
    [IID.__TOMATO_SOUP__, 1, .04]
  ], FURNITURE[FURNITUREID.__CASH0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID.__FURNITURE1__])),
  FURNITURE[FURNITUREID.__CASH0__].building.src = "https://devast.io/img/day-cash-machine0.png", FURNITURE[FURNITUREID.__CASH0__].impact =
  SOUNDID.__STEEL_IMPACT__, FURNITURE[FURNITUREID.__CASH0__].destroy = SOUNDID.__STEEL_DESTROY__, FURNITURE[FURNITUREID
    .__CASH0__].particles = PARTICLESID.__GREY_STEEL__, FURNITURE[FURNITUREID.__CASH0__].detail = new Detail("", "", -1,
    [
      [IID.__SHAPED_METAL__, 16],
      [IID.__ELECTRONICS__, 4]
    ]), FURNITURE[FURNITUREID.__CASH0__].loot = [
    [IID.__JUNK__, 1, .05]
  ], FURNITURE[FURNITUREID.__CUPBOARD0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__FURNITURE0__])), FURNITURE[FURNITUREID.__CUPBOARD0__].building.src = "https://devast.io/img/day-cupboard0.png", FURNITURE[
    FURNITUREID.__CUPBOARD0__].particles = PARTICLESID.__WOOD__, FURNITURE[FURNITUREID.__USINE_BOX0__] = window.JSON
  .parse(window.JSON.stringify(FURNITURE[FURNITUREID.__FURNITURE0__])), FURNITURE[FURNITUREID.__USINE_BOX0__].impact =
  SOUNDID.__STEEL_IMPACT__, FURNITURE[FURNITUREID.__USINE_BOX0__].destroy = SOUNDID.__STEEL_DESTROY__, FURNITURE[
    FURNITUREID.__USINE_BOX0__].building.src = "https://devast.io/img/day-electronic-box2.png", FURNITURE[FURNITUREID.__USINE_BOX0__]
  .particles = PARTICLESID.__STEEL__, FURNITURE[FURNITUREID.__USINE_BOX0__].detail = new Detail("", "", -1, [
    [IID.__SHAPED_METAL__, 16]
  ]), FURNITURE[FURNITUREID.__USINE_BOX0__].width = [70, 70, 70, 70], FURNITURE[FURNITUREID.__USINE_BOX0__].height = [
    70, 70, 70, 70
  ], FURNITURE[FURNITUREID.__USINE_BOX0__]._x = [15, 15, 15, 15], FURNITURE[FURNITUREID.__USINE_BOX0__]._y = [15, 15,
    15, 15
  ], FURNITURE[FURNITUREID.__USINE_BOX0__].loot = [
    [IID.__ELECTRONICS__, 2, .1],
    [IID.__JUNK__, 2, .1],
    [IID.__ENERGY_CELLS__, 20, .05],
    [IID.__SYRINGE__, 2, .1],
    [IID.__CHEMICAL_COMPONENT__, 4, .1],
    [IID.__RADAWAY__, 1, .03],
    [IID.__ALLOYS__, 1, .01]
  ], FURNITURE[FURNITUREID.__USINE_BOX1__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__USINE_BOX0__])), FURNITURE[FURNITUREID.__USINE_BOX1__].building.src = "https://devast.io/img/day-electronic-box3.png", FURNITURE[
    FURNITUREID.__USINE_BOX1__].detail = new Detail("", "", -1, [
    [IID.__SHAPED_METAL__, 16],
    [IID.__ELECTRONICS__, 4]
  ]), window.NVMWV) {
  var NwvwW = window.Math.acos;
  window.Math.acos = window.Math.asin, window.Math.asin = NwvwW
}
FURNITURE[FURNITUREID.__USINE_BOX1__].loot = [
    [IID.__ELECTRONICS__, 2, .1],
    [IID.__JUNK__, 4, .1],
    [IID.__ENERGY_CELLS__, 20, .05],
    [IID.__WIRE__, 1, .03],
    [IID.__SHAPED_URANIUM__, 5, .01],
    [IID.__RADAWAY__, 2, .1],
    [IID.__SYRINGE__, 3, .1],
    [IID.__CHEMICAL_COMPONENT__, 5, .1],
    [IID.__LASER_PISTOL__, 1, .005],
    [IID.__ALLOYS__, 2, .05]
  ], FURNITURE[FURNITUREID.__ENERGY_BOX0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__USINE_BOX1__])), FURNITURE[FURNITUREID.__ENERGY_BOX0__].building.src = "https://devast.io/img/day-energy-box0.png", FURNITURE[
    FURNITUREID.__ENERGY_BOX0__].particles = PARTICLESID.__KAKI__, FURNITURE[FURNITUREID.__ENERGY_BOX0__].detail =
  new Detail("", "", -1, [
    [IID.__SHAPED_METAL__, 16],
    [IID.__ELECTRONICS__, 4]
  ]), FURNITURE[FURNITUREID.__ENERGY_BOX0__].loot = [
    [IID.__ELECTRONICS__, 2, .1],
    [IID.__JUNK__, 4, .1],
    [IID.__ENERGY_CELLS__, 20, .05],
    [IID.__SMALL_WIRE__, 8, .03],
    [IID.__SHAPED_URANIUM__, 5, .01],
    [IID.__RADAWAY__, 2, .1],
    [IID.__SYRINGE__, 3, .1],
    [IID.__CHEMICAL_COMPONENT__, 5, .1],
    [IID.__LASER_PISTOL__, 1, .005],
    [IID.__ALLOYS__, 2, .05]
  ], FURNITURE[FURNITUREID.__USINE_BOX2__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__USINE_BOX0__])), FURNITURE[FURNITUREID.__USINE_BOX2__].building.src = "https://devast.io/img/day-electronic-box4.png", FURNITURE[
    FURNITUREID.__USINE_BOX2__].loot = [
    [IID.__ELECTRONICS__, 2, .1],
    [IID.__JUNK__, 4, .1],
    [IID.__ENERGY_CELLS__, 20, .05],
    [IID.__WIRE__, 1, .03],
    [IID.__SHAPED_URANIUM__, 2, .01],
    [IID.__RADAWAY__, 1, .1],
    [IID.__SYRINGE__, 3, .1],
    [IID.__CHEMICAL_COMPONENT__, 5, .1],
    [IID.__ALLOYS__, 1, .01],
    [IID.__DYNAMITE__, 1, .008]
  ], FURNITURE[FURNITUREID.__USINE_BOX3__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__USINE_BOX0__])), FURNITURE[FURNITUREID.__USINE_BOX3__].building.src = "https://devast.io/img/day-electronic-box5.png", FURNITURE[
    FURNITUREID.__AMMOBOX0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID.__FURNITURE0__])),
  FURNITURE[FURNITUREID.__AMMOBOX0__].building.src = "https://devast.io/img/day-ammo-box.png", FURNITURE[FURNITUREID.__AMMOBOX0__]
  .particles = PARTICLESID.__WOODLIGHT__, FURNITURE[FURNITUREID.__AMMOBOX0__].loot = [
    [IID.__MP5__, 1, .001],
    [IID.__AK47__, 1, .001],
    [IID.__SHOTGUN__, 1, .001],
    [IID.__SAWED_OFF_SHOTGUN__, 1, .001],
    [IID.__DESERT_EAGLE__, 1, .001],
    [IID.__SNIPER__, 1, .001],
    [IID.__BULLET_SNIPER__, 50, .01],
    [IID.__ENERGY_CELLS__, 20, .01],
    [IID.__LASER_PISTOL__, 1, 8e-4],
    [IID.__DYNAMITE__, 2, .005],
    [IID.__C4__, 1, .001],
    [IID.__C4_TRIGGER__, 1, .001],
    [IID.__LANDMINE__, 3, .005],
    [IID.__BULLET_SHOTGUN__, 30, .01],
    [IID.__9MM__, 1, .003],
    [IID.__BULLET_9MM__, 50, .01],
    [IID.__WOOD_CROSSBOW__, 1, .003],
    [IID.__WOOD_CROSSARROW__, 50, .01],
    [IID.__STONE_AXE__, 1, .005],
    [IID.__ARMOR_PHYSIC_1__, 1, .005],
    [IID.__ARMOR_PHYSIC_2__, 1, .002],
    [IID.__ARMOR_PHYSIC_3__, 1, .001],
    [IID.__ARMOR_FIRE_1__, 1, .005],
    [IID.__ARMOR_FIRE_2__, 1, .002],
    [IID.__ARMOR_FIRE_3__, 1, .001],
    [IID.__ARMOR_TESLA_1__, 1, .002],
    [IID.__ARMOR_TESLA_2__, 1, .001],
    [IID.__LAPADONE__, 1, 5e-4],
    [IID.__LASER_SUBMACHINE__, 1, 5e-4]
  ], FURNITURE[FURNITUREID.__AMMOLOCKER1__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__AMMOBOX0__])), FURNITURE[FURNITUREID.__AMMOLOCKER1__].impact = SOUNDID.__STEEL_IMPACT__, FURNITURE[FURNITUREID
    .__AMMOLOCKER1__].destroy = SOUNDID.__STEEL_DESTROY__, FURNITURE[FURNITUREID.__AMMOLOCKER1__].building.src =
  "https://devast.io/img/day-ammo-locker1.png", FURNITURE[FURNITUREID.__AMMOLOCKER1__].particles = PARTICLESID.__GREY_STEEL__, FURNITURE[
    FURNITUREID.__AMMOLOCKER1__].detail = new Detail("", "", -1, [
    [IID.__SHAPED_METAL__, 32],
    [IID.__SULFUR__, 12]
  ]), FURNITURE[FURNITUREID.__AMMOLOCKER2__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__AMMOBOX0__])), FURNITURE[FURNITUREID.__AMMOLOCKER2__].impact = SOUNDID.__STEEL_IMPACT__, FURNITURE[FURNITUREID
    .__AMMOLOCKER2__].destroy = SOUNDID.__STEEL_DESTROY__, FURNITURE[FURNITUREID.__AMMOLOCKER2__].building.src =
  "https://devast.io/img/day-ammo-locker2.png", FURNITURE[FURNITUREID.__AMMOLOCKER2__].particles = PARTICLESID.__GREY_STEEL__, FURNITURE[
    FURNITUREID.__AMMOLOCKER2__].detail = new Detail("", "", -1, [
    [IID.__SHAPED_METAL__, 32],
    [IID.__SULFUR__, 12]
  ]), FURNITURE[FURNITUREID.__AMMOLOCKER0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__AMMOBOX0__])), FURNITURE[FURNITUREID.__AMMOLOCKER0__].impact = SOUNDID.__STEEL_IMPACT__, FURNITURE[FURNITUREID
    .__AMMOLOCKER0__].destroy = SOUNDID.__STEEL_DESTROY__, FURNITURE[FURNITUREID.__AMMOLOCKER0__].building.src =
  "https://devast.io/img/day-ammo-locker0.png", FURNITURE[FURNITUREID.__AMMOLOCKER0__].particles = PARTICLESID.__BLUE_STEEL__, FURNITURE[
    FURNITUREID.__AMMOLOCKER0__].width = [70, 50, 70, 50], FURNITURE[FURNITUREID.__AMMOLOCKER0__].height = [50, 70, 50,
    70
  ], FURNITURE[FURNITUREID.__AMMOLOCKER0__]._x = [0, 25, 30, 25], FURNITURE[FURNITUREID.__AMMOLOCKER0__]._y = [25, 0,
    25, 30
  ], FURNITURE[FURNITUREID.__AMMOLOCKER0__].detail = new Detail("", "", -1, [
    [IID.__SHAPED_METAL__, 32],
    [IID.__SULFUR__, 12]
  ]), FURNITURE[FURNITUREID.__SAFE0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
  .__FURNITURE0__])), FURNITURE[FURNITUREID.__SAFE0__].impact = SOUNDID.__STEEL_IMPACT__, FURNITURE[FURNITUREID
    .__SAFE0__].destroy = SOUNDID.__STEEL_DESTROY__, FURNITURE[FURNITUREID.__SAFE0__].building.src =
  "https://devast.io/img/day-safe0.png", FURNITURE[FURNITUREID.__SAFE0__].particles = PARTICLESID.__SAFE0__, FURNITURE[FURNITUREID
    .__SAFE0__].detail = new Detail("", "", -1, [
    [IID.__SHAPED_METAL__, 32],
    [IID.__SULFUR__, 32]
  ]), FURNITURE[FURNITUREID.__SAFE0__].loot = [
    [IID.__CHAPKA__, 1, .008],
    [IID.__WINTER_COAT__, 1, .002],
    [IID.__RADIATION_SUIT__, 1, .002],
    [IID.__GAZ_PROTECTION__, 1, .02],
    [IID.__SAWED_OFF_SHOTGUN__, 1, .002],
    [IID.__MP5__, 1, .002],
    [IID.__AK47__, 1, .002],
    [IID.__SHOTGUN__, 1, .002],
    [IID.__DESERT_EAGLE__, 1, .002],
    [IID.__SNIPER__, 1, .002],
    [IID.__BULLET_SNIPER__, 50, .02],
    [IID.__BULLET_SHOTGUN__, 30, .02],
    [IID.__DYNAMITE__, 1, .01],
    [IID.__LANDMINE__, 1, .01],
    [IID.__9MM__, 1, .04],
    [IID.__BULLET_9MM__, 40, .06],
    [IID.__WOOD_CROSSBOW__, 1, .05],
    [IID.__WOOD_CROSSARROW__, 50, .05]
  ], FURNITURE[FURNITUREID.__LITTLETABLE0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID
    .__FRIDGE0__])), FURNITURE[FURNITUREID.__LITTLETABLE0__].building.src = "https://devast.io/img/day-little-table0.png", FURNITURE[
    FURNITUREID.__LITTLETABLE0__].width = [50, 50, 50, 50], FURNITURE[FURNITUREID.__LITTLETABLE0__].height = [50, 50,
    50, 50
  ], FURNITURE[FURNITUREID.__LITTLETABLE0__]._x = [25, 25, 25, 25], FURNITURE[FURNITUREID.__LITTLETABLE0__]._y = [25,
    25, 25, 25
  ], FURNITURE[FURNITUREID.__LITTLETABLE0__].detail = new Detail("", "", -1, [
    [IID.__SHAPED_METAL__, 8]
  ]), FURNITURE[FURNITUREID.__LITTLETABLE0__].usable = 0, FURNITURE[FURNITUREID.__SMALL_LIGHT__] = window.JSON.parse(
    window.JSON.stringify(FURNITURE[FURNITUREID.__FURNITURE2__])), FURNITURE[FURNITUREID.__SMALL_LIGHT__].building.src =
  "https://devast.io/img/day-small-light-off.png", FURNITURE[FURNITUREID.__SMALL_LIGHT__].particles = PARTICLESID.__GREY_STEEL__,
  FURNITURE[FURNITUREID.__TOILET0__] = window.JSON.parse(window.JSON.stringify(FURNITURE[FURNITUREID.__FRIDGE0__])),
  FURNITURE[FURNITUREID.__TOILET0__].impact = SOUNDID.__STONE_IMPACT__, FURNITURE[FURNITUREID.__TOILET0__].destroy =
  SOUNDID.__STONE_DESTROY__, FURNITURE[FURNITUREID.__TOILET0__].particles = PARTICLESID.__TOILET__, FURNITURE[
    FURNITUREID.__TOILET0__].building.src = "https://devast.io/img/day-toilet0.png", FURNITURE[FURNITUREID.__TOILET0__].width = [50, 70,
    50, 70
  ], FURNITURE[FURNITUREID.__TOILET0__].height = [70, 50, 70, 50], FURNITURE[FURNITUREID.__TOILET0__]._x = [25, 30, 25,
    0
  ], FURNITURE[FURNITUREID.__TOILET0__]._y = [0, 25, 30, 25], FURNITURE[FURNITUREID.__TOILET0__].particles = PARTICLESID
  .__TOILET__, FURNITURE[FURNITUREID.__TOILET0__].detail = new Detail("", "", -1, [
    [IID.__SHAPED_METAL__, 4],
    [IID.__STONE__, 100]
  ]), FURNITURE[FURNITUREID.__TOILET0__].usable = 1, FURNITURE[FURNITUREID.__TOILET0__].loot = [
    [IID.__SYRINGE__, 1, .2],
    [IID.__CHEMICAL_COMPONENT__, 1, .02],
    [IID.__GHOUL_BLOOD__, 1, .005],
    [IID.__LAPADONE__, 1, .002]
  ];
var LOOT = [{
    id: LOOTID.__SMALL_WOOD__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wood0.png",
    idItem: IID.__WOOD__,
    amount: 1,
    scale: .85,
    angle: 0
  }, {
    id: LOOTID.__MEDIUM_WOOD__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wood1.png",
    idItem: IID.__WOOD__,
    amount: 2,
    scale: .85,
    angle: 0
  }, {
    id: LOOTID.__BIG_WOOD__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wood2.png",
    idItem: IID.__WOOD__,
    amount: 3,
    scale: .85,
    angle: 0
  }, {
    id: LOOTID.__SMALL_STONE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-stone0.png",
    idItem: IID.__STONE__,
    amount: 1,
    scale: 1.2,
    angle: 0
  }, {
    id: LOOTID.__MEDIUM_STONE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-stone1.png",
    idItem: IID.__STONE__,
    amount: 2,
    scale: 1.2,
    angle: 0
  }, {
    id: LOOTID.__BIG_STONE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-stone2.png",
    idItem: IID.__STONE__,
    amount: 3,
    scale: 1.2,
    angle: 0
  }, {
    id: LOOTID.__STEEL__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-steel.png",
    idItem: IID.__STEEL__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__ANIMAL_FAT__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-animal-fat.png",
    idItem: IID.__ANIMAL_FAT__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: LOOTID.__ANIMAL_TENDON__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-animal-tendon.png",
    idItem: IID.__ANIMAL_TENDON__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: LOOTID.__STRING__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-string.png",
    idItem: IID.__STRING__,
    amount: 1,
    scale: .7,
    angle: 0
  }, {
    id: LOOTID.__LEATHER_BOAR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-leather-boar.png",
    idItem: IID.__LEATHER_BOAR__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__SHAPED_METAL__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-shaped-metal.png",
    idItem: IID.__SHAPED_METAL__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__RAW_STEAK__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-raw-steak.png",
    idItem: IID.__RAW_STEAK__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__COOKED_STEAK__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-cooked-steak.png",
    idItem: IID.__COOKED_STEAK__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__ROTTEN_STEAK__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-rotten-steak.png",
    idItem: IID.__ROTTEN_STEAK__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__ORANGE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-orange.png",
    idItem: IID.__ORANGE__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: LOOTID.__ROTTEN_ORANGE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-rotten-orange.png",
    idItem: IID.__ROTTEN_ORANGE__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: LOOTID.__SEED_ORANGE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-seed-orange.png",
    idItem: IID.__SEED_ORANGE__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__HACHET__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-hachet.png",
    idItem: IID.__HACHET__,
    amount: 1,
    scale: .9,
    angle: .5
  }, {
    id: LOOTID.__STONE_PICKAXE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-stone-pickaxe.png",
    idItem: IID.__STONE_PICKAXE__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: LOOTID.__STEEL_PICKAXE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-steel-pickaxe.png",
    idItem: IID.__STEEL_PICKAXE__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: LOOTID.__STONE_AXE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-stone-axe.png",
    idItem: IID.__STONE_AXE__,
    amount: 1,
    scale: .7,
    angle: .5
  }, {
    id: LOOTID.__WORKBENCH__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-workbench.png",
    idItem: IID.__WORKBENCH__,
    amount: 1,
    scale: .7,
    angle: 0
  }, {
    id: LOOTID.__WOOD_SPEAR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wood-spear.png",
    idItem: IID.__WOOD_SPEAR__,
    amount: 1,
    scale: .6,
    angle: .6
  }, {
    id: LOOTID.__WOOD_BOW__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wood-bow.png",
    idItem: IID.__WOOD_BOW__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__9MM__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-9mm.png",
    idItem: IID.__9MM__,
    amount: 1,
    scale: 1,
    angle: -.1
  }, {
    id: LOOTID.__DESERT_EAGLE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-desert-eagle.png",
    idItem: IID.__DESERT_EAGLE__,
    amount: 1,
    scale: 1,
    angle: -.1
  }, {
    id: LOOTID.__SHOTGUN__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-shotgun.png",
    idItem: IID.__SHOTGUN__,
    amount: 1,
    scale: .7,
    angle: -.5
  }, {
    id: LOOTID.__AK47__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-ak47.png",
    idItem: IID.__AK47__,
    amount: 1,
    scale: .7,
    angle: -.5
  }, {
    id: LOOTID.__SNIPER__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-sniper.png",
    idItem: IID.__SNIPER__,
    amount: 1,
    scale: .7,
    angle: -.5
  }, {
    id: LOOTID.__WOOD_WALL__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wood-wall.png",
    idItem: IID.__WOOD_WALL__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__STONE_WALL__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-stone-wall.png",
    idItem: IID.__STONE_WALL__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__STEEL_WALL__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-steel-wall.png",
    idItem: IID.__STEEL_WALL__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__WOOD_DOOR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wood-door.png",
    idItem: IID.__WOOD_DOOR__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__STONE_DOOR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-stone-door.png",
    idItem: IID.__STONE_DOOR__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__STEEL_DOOR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-steel-door.png",
    idItem: IID.__STEEL_DOOR__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__CAMPFIRE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-campfire.png",
    idItem: IID.__CAMPFIRE__,
    amount: 1,
    scale: .7,
    angle: 0
  }, {
    id: LOOTID.__BULLET_9MM__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-bullet-9mm.png",
    idItem: IID.__BULLET_9MM__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: LOOTID.__BULLET_SHOTGUN__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-bullet-shotgun.png",
    idItem: IID.__BULLET_SHOTGUN__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: LOOTID.__BULLET_SNIPER__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-bullet-sniper.png",
    idItem: IID.__BULLET_SNIPER__,
    amount: 1,
    scale: 1.1,
    angle: 0
  }, {
    id: LOOTID.__MEDIKIT__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-medikit.png",
    idItem: IID.__MEDIKIT__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__BANDAGE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-bandage.png",
    idItem: IID.__BANDAGE__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: LOOTID.__SODA__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-soda.png",
    idItem: IID.__SODA__,
    amount: 1,
    scale: 1.2,
    angle: 0
  }, {
    id: LOOTID.__MP5__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-MP5.png",
    idItem: IID.__MP5__,
    amount: 1,
    scale: .8,
    angle: -.5
  }, {
    id: LOOTID.__HEADSCARF__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-headscarf.png",
    idItem: IID.__HEADSCARF__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__CHAPKA__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-chapka.png",
    idItem: IID.__CHAPKA__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__WINTER_COAT__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-coat.png",
    idItem: IID.__WINTER_COAT__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__GAZ_MASK__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-gaz-mask.png",
    idItem: IID.__GAZ_MASK__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__GAZ_PROTECTION__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-gaz-protection.png",
    idItem: IID.__GAZ_PROTECTION__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__RADIATION_SUIT__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-radiation-suit.png",
    idItem: IID.__RADIATION_SUIT__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__WOOD_ARROW__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wood-arrow.png",
    idItem: IID.__WOOD_ARROW__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__CAMPFIRE_BBQ__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-campfire-bbq.png",
    idItem: IID.__CAMPFIRE_BBQ__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__SMELTER__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-smelter.png",
    idItem: IID.__SMELTER__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__WOOD_BIGDOOR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wood-door1.png",
    idItem: IID.__WOOD_BIGDOOR__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__STONE_BIGDOOR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-stone-door1.png",
    idItem: IID.__STONE_BIGDOOR__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__STEEL_BIGDOOR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-steel-door1.png",
    idItem: IID.__STEEL_BIGDOOR__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__SULFUR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-sulfur.png",
    idItem: IID.__SULFUR__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: LOOTID.__SHAPED_URANIUM__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-shaped-uranium.png",
    idItem: IID.__SHAPED_URANIUM__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: LOOTID.__WORKBENCH2__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-workbench2.png",
    idItem: IID.__WORKBENCH2__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: LOOTID.__URANIUM__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-uranium.png",
    idItem: IID.__URANIUM__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: LOOTID.__WEAVING__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-weaving-machine.png",
    idItem: IID.__WEAVING__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: LOOTID.__GASOLINE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-gasoline.png",
    idItem: IID.__GASOLINE__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: LOOTID.__SULFUR_PICKAXE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-sulfur-pickaxe.png",
    idItem: IID.__SULFUR_PICKAXE__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: LOOTID.__CHEST__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-chest.png",
    idItem: IID.__CHEST__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: LOOTID.__FRIDGE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-fridge.png",
    idItem: IID.__FRIDGE__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: LOOTID.__WOOD_FLOOR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wood-floor.png",
    idItem: IID.__WOOD_FLOOR__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__HAMMER__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-hammer.png",
    idItem: IID.__HAMMER__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: LOOTID.__SLEEPING_BAG__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-sleeping-bag.png",
    idItem: IID.__SLEEPING_BAG__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: LOOTID.__REPAIR_HAMMER__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-repair-hammer.png",
    idItem: IID.__REPAIR_HAMMER__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: LOOTID.__NAILS__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-nails.png",
    idItem: IID.__NAILS__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: LOOTID.__WOODLIGHT_FLOOR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wood-floor-light.png",
    idItem: IID.__WOODLIGHT_FLOOR__,
    amount: 1,
    scale: .7,
    angle: .3
  }, {
    id: LOOTID.__WOOD_SMALLWALL__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wood-smallwall.png",
    idItem: IID.__WOOD_SMALLWALL__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__STONE_SMALLWALL__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-stone-smallwall.png",
    idItem: IID.__STONE_SMALLWALL__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__STEEL_SMALLWALL__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-steel-smallwall.png",
    idItem: IID.__STEEL_SMALLWALL__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__TOMATO_SOUP__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-tomato-soup.png",
    idItem: IID.__TOMATO_SOUP__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__SYRINGE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-syringe.png",
    idItem: IID.__SYRINGE__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__CHEMICAL_COMPONENT__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-chemical-component.png",
    idItem: IID.__CHEMICAL_COMPONENT__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__RADAWAY__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-radaway.png",
    idItem: IID.__RADAWAY__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__SEED_TOMATO__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-seed-tomato.png",
    idItem: IID.__SEED_TOMATO__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__TOMATO__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-tomato.png",
    idItem: IID.__TOMATO__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__ROTTEN_TOMATO__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-rotten-tomato.png",
    idItem: IID.__ROTTEN_TOMATO__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__CAN__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-can.png",
    idItem: IID.__CAN__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__WOOD_CROSSBOW__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wood-crossbow.png",
    idItem: IID.__WOOD_CROSSBOW__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__WOOD_CROSSARROW__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wood-crossarrow.png",
    idItem: IID.__WOOD_CROSSARROW__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__NAIL_GUN__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-nail-gun.png",
    idItem: IID.__NAIL_GUN__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__SAWED_OFF_SHOTGUN__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-sawed-off-shotgun.png",
    idItem: IID.__SAWED_OFF_SHOTGUN__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__STONE_FLOOR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-stone-floor.png",
    idItem: IID.__STONE_FLOOR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__TILING_FLOOR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-tiling-floor.png",
    idItem: IID.__TILING_FLOOR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__CRISPS__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-chips.png",
    idItem: IID.__CRISPS__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__ROTTEN_CRISPS__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-rotten-chips.png",
    idItem: IID.__ROTTEN_CRISPS__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__ELECTRONICS__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-electronic-part.png",
    idItem: IID.__ELECTRONICS__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: LOOTID.__JUNK__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-junk.png",
    idItem: IID.__JUNK__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__WIRE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wires.png",
    idItem: IID.__WIRE__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: LOOTID.__ENERGY_CELLS__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-small-energy-cells.png",
    idItem: IID.__ENERGY_CELLS__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: LOOTID.__LASER_PISTOL__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-laser-pistol.png",
    idItem: IID.__LASER_PISTOL__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: LOOTID.__TESLA__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-workbench3.png",
    idItem: IID.__TESLA__,
    amount: 1,
    scale: .9,
    angle: 0
  }, {
    id: LOOTID.__ALLOYS__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-alloys.png",
    idItem: IID.__ALLOYS__,
    amount: 1,
    scale: 1,
    angle: 0
  }, {
    id: LOOTID.__SULFUR_AXE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-sulfur-axe.png",
    idItem: IID.__SULFUR_AXE__,
    amount: 1,
    scale: .7,
    angle: .5
  }, {
    id: LOOTID.__LANDMINE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-landmine.png",
    idItem: IID.__LANDMINE__,
    amount: 1,
    scale: .7,
    angle: .5
  }, {
    id: LOOTID.__DYNAMITE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-dynamite.png",
    idItem: IID.__DYNAMITE__,
    amount: 1,
    scale: .7,
    angle: .5
  }, {
    id: LOOTID.__C4__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-C4.png",
    idItem: IID.__C4__,
    amount: 1,
    scale: .7,
    angle: .5
  }, {
    id: LOOTID.__C4_TRIGGER__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-joystick.png",
    idItem: IID.__C4_TRIGGER__,
    amount: 1,
    scale: .7,
    angle: .5
  }, {
    id: LOOTID.__COMPOST__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-composter.png",
    idItem: IID.__COMPOST__,
    amount: 1,
    scale: .7,
    angle: .5
  }, {
    id: LOOTID.__ARMOR_PHYSIC_1__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-metal-helmet.png",
    idItem: IID.__ARMOR_PHYSIC_1__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__ARMOR_PHYSIC_2__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-welding-helmet.png",
    idItem: IID.__ARMOR_PHYSIC_2__,
    amount: 1,
    scale: .7,
    angle: 0
  }, {
    id: LOOTID.__ARMOR_PHYSIC_3__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-gladiator-helmet.png",
    idItem: IID.__ARMOR_PHYSIC_3__,
    amount: 1,
    scale: .7,
    angle: 0
  }, {
    id: LOOTID.__ARMOR_FIRE_1__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-leather-jacket.png",
    idItem: IID.__ARMOR_FIRE_1__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__ARMOR_FIRE_2__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-kevlar-suit.png",
    idItem: IID.__ARMOR_FIRE_2__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__ARMOR_FIRE_3__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-SWAT-suit.png",
    idItem: IID.__ARMOR_FIRE_3__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__ARMOR_DEMINER__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-protective-suit.png",
    idItem: IID.__ARMOR_DEMINER__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__ARMOR_TESLA_1__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-tesla-0.png",
    idItem: IID.__ARMOR_TESLA_1__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__ARMOR_TESLA_2__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-tesla-armor.png",
    idItem: IID.__ARMOR_TESLA_2__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__WOOD_SPIKE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wood-spike.png",
    idItem: IID.__WOOD_SPIKE__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__LASER_SUBMACHINE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-laser-submachine.png",
    idItem: IID.__LASER_SUBMACHINE__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__GRENADE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-grenade.png",
    idItem: IID.__GRENADE__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__SUPER_HAMMER__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-super-hammer.png",
    idItem: IID.__SUPER_HAMMER__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__GHOUL_BLOOD__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-ghoul-blood.png",
    idItem: IID.__GHOUL_BLOOD__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__CAMOUFLAGE_GEAR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-camouflage-gear.png",
    idItem: IID.__CAMOUFLAGE_GEAR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__AGITATOR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-agitator.png",
    idItem: IID.__AGITATOR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__GHOUL_DRUG__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-ghoul-drug.png",
    idItem: IID.__GHOUL_DRUG__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__MUSHROOM1__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-mushroom1.png",
    idItem: IID.__MUSHROOM1__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__MUSHROOM2__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-mushroom2.png",
    idItem: IID.__MUSHROOM2__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__MUSHROOM3__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-mushroom3.png",
    idItem: IID.__MUSHROOM3__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__ROTTEN_MUSHROOM1__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-rotten-mushroom1.png",
    idItem: IID.__ROTTEN_MUSHROOM1__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__ROTTEN_MUSHROOM2__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-rotten-mushroom2.png",
    idItem: IID.__ROTTEN_MUSHROOM2__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__ROTTEN_MUSHROOM3__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-rotten-mushroom3.png",
    idItem: IID.__ROTTEN_MUSHROOM3__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__LAPADONE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-lapadoine.png",
    idItem: IID.__LAPADONE__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__LAPABOT_REPAIR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-lapabot.png",
    idItem: IID.__LAPABOT_REPAIR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__SMALL_WIRE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-small-wire.png",
    idItem: IID.__SMALL_WIRE__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__PUMPKIN__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-pumpkin.png",
    idItem: IID.__PUMPKIN__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__ROTTEN_PUMPKIN__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-rotten-pumpkin.png",
    idItem: IID.__ROTTEN_PUMPKIN__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__SEED_GHOUL__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-ghoul5.png",
    idItem: IID.__SEED_GHOUL__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__EXTRACTOR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-extractor.png",
    idItem: IID.__EXTRACTOR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__ANTIDOTE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-antidote.png",
    idItem: IID.__ANTIDOTE__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__ANTIDOTE_FLOWER__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-antidote-flower.png",
    idItem: IID.__ANTIDOTE_FLOWER__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__SEED_TREE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-seed-tree.png",
    idItem: IID.__SEED_TREE__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__ACORN__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-acorn.png",
    idItem: IID.__ACORN__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__ROTTEN_ACORN__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-rotten-acorn.png",
    idItem: IID.__ROTTEN_ACORN__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__LASER_SNIPER__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-laser-sniper.png",
    idItem: IID.__LASER_SNIPER__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__HAL_BOT__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-hal-bot.png",
    idItem: IID.__HAL_BOT__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__TESLA_BOT__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-tesla-bot.png",
    idItem: IID.__TESLA_BOT__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__CABLE0__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wire0.png",
    idItem: IID.__CABLE0__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__CABLE1__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wire1.png",
    idItem: IID.__CABLE1__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__CABLE2__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wire2.png",
    idItem: IID.__CABLE2__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__CABLE3__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wire3.png",
    idItem: IID.__CABLE3__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__SWITCH__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-switch.png",
    idItem: IID.__SWITCH__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__GATE_OR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-switch-or.png",
    idItem: IID.__GATE_OR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__GATE_AND__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-switch-and.png",
    idItem: IID.__GATE_AND__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__GATE_NOT__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-switch-reverse.png",
    idItem: IID.__GATE_NOT__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__LAMP__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-lamp-white.png",
    idItem: IID.__LAMP__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__CABLE_WALL__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-cable-wall.png",
    idItem: IID.__CABLE_WALL__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__AUTOMATIC_DOOR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-automatic-door.png",
    idItem: IID.__AUTOMATIC_DOOR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__PLATFORM__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-platform.png",
    idItem: IID.__PLATFORM__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__STONE_CAVE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-stone-cave.png",
    idItem: IID.__STONE_CAVE__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__BUNKER_WALL__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-bunker-wall.png",
    idItem: IID.__BUNKER_WALL__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__GOLD_FLOOR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-mustard-floor.png",
    idItem: IID.__GOLD_FLOOR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__RED_FLOOR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-red-floor.png",
    idItem: IID.__RED_FLOOR__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__WELDING_MACHINE__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-welding-machine.png",
    idItem: IID.__WELDING_MACHINE__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__CABLE4__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-wire4.png",
    idItem: IID.__CABLE4__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__GATE_TIMER__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-timer.png",
    idItem: IID.__GATE_TIMER__,
    amount: 1,
    scale: .8,
    angle: 0
  }, {
    id: LOOTID.__GATE_XOR__,
    img: {
      isLoaded: 0
    },
    src: "https://devast.io/img/day-ground-xor.png",
    idItem: IID.__GATE_XOR__,
    amount: 1,
    scale: .8,
    angle: 0
  }],
  RESID = (COUNTER = 0, {
    WOOD: COUNTER++,
    STONE: COUNTER++,
    STEEL: COUNTER++,
    URANIUM: COUNTER++,
    SULFUR: COUNTER++,
    LEAFTREE: COUNTER++,
    ORANGETREE: COUNTER++,
    TOMATOTREE: COUNTER++,
    BOAR: COUNTER++,
    DEER: COUNTER++,
    MUSHROOM1: COUNTER++,
    MUSHROOM2: COUNTER++,
    MUSHROOM3: COUNTER++,
    WHITE_FLOWER: COUNTER++
  }),
  __TOP = 8,
  __DOWN = 9,
  __MID = 10,
  __STOP = 11,
  RESOURCES = [];
RESOURCES[RESID.WOOD] = {
  loot: [LOOTID.__BIG_WOOD__, LOOTID.__MEDIUM_WOOD__, LOOTID.__SMALL_WOOD__],
  rare: [.2, .4, 1],
  tool: [-1, IID.__HACHET__, IID.__STONE_AXE__, IID.__SULFUR_AXE__],
  effect: [1, 2, 4, 5],
  areaEffect: 0,
  type: [{
    life: 200,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-wood1.png"
    },
    particlesDist: 100,
    particle: 5,
    units: 0,
    unitsMax: 80,
    collision: 1,
    z: __TOP,
    radius: 80
  }, {
    life: 150,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-wood0.png"
    },
    particlesDist: 75,
    particle: 5,
    units: 0,
    unitsMax: 80,
    collision: 1,
    z: __TOP,
    radius: 55
  }, {
    life: 120,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-wood2.png"
    },
    particlesDist: 70,
    particle: 5,
    units: 0,
    unitsMax: 80,
    collision: 1,
    z: __TOP,
    radius: 48
  }, {
    life: 100,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-wood3.png"
    },
    particlesDist: 60,
    particle: 5,
    units: 0,
    unitsMax: 80,
    collision: 1,
    z: __TOP,
    radius: 37
  }, {
    life: 75,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-wood4.png"
    },
    particlesDist: 50,
    particle: 5,
    units: 0,
    unitsMax: 80,
    collision: 1,
    z: __TOP,
    radius: 30
  }],
  particles: PARTICLESID.__WOOD__,
  impact: SOUNDID.__WOOD_IMPACT__,
  destroy: SOUNDID.__WOOD_DESTROY__,
  score: 5
}, RESOURCES[RESID.LEAFTREE] = {
  loot: [LOOTID.acorn, LOOTID.__BIG_WOOD__, LOOTID.__MEDIUM_WOOD__, LOOTID.__SMALL_WOOD__],
  rare: [.015, .2, .4, 1],
  tool: [-1, IID.__HACHET__, IID.__STONE_AXE__, IID.__SULFUR_AXE__],
  effect: [1, 2, 4, 5],
  areaEffect: 0,
  type: [{
    life: 250,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tree0.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-treeleaf0.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tree-and-leaf0.png"
    },
    particlesDist: 145,
    particle: 5,
    units: 0,
    unitsMax: 800,
    collision: 1,
    z: __STOP,
    radius: 70
  }, {
    life: 250,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tree1.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-treeleaf1.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tree-and-leaf1.png"
    },
    particlesDist: 128,
    particle: 5,
    units: 0,
    unitsMax: 800,
    collision: 1,
    z: __STOP,
    radius: 52
  }, {
    life: 150,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tree2.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-treeleaf2.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tree-and-leaf2.png"
    },
    particlesDist: 114,
    particle: 5,
    units: 0,
    unitsMax: 800,
    collision: 1,
    z: __STOP,
    radius: 42
  }, {
    life: 75,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tree3.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-treeleaf3.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tree-and-leaf3.png"
    },
    particlesDist: 90,
    particle: 5,
    units: 0,
    unitsMax: 800,
    collision: 1,
    z: __STOP,
    radius: 34
  }, {
    life: 250,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tree4.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-treeleaf4.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tree-and-leaf4.png"
    },
    particlesDist: 147,
    particle: 5,
    units: 0,
    unitsMax: 800,
    collision: 1,
    z: __STOP,
    radius: 54
  }],
  particles: PARTICLESID.__LEAFTREE__,
  impact: SOUNDID.__WOOD_IMPACT__,
  destroy: SOUNDID.__WOOD_DESTROY__,
  score: 5
}, RESOURCES[RESID.STONE] = {
  loot: [LOOTID.__BIG_STONE__, LOOTID.__MEDIUM_STONE__, LOOTID.__SMALL_STONE__],
  rare: [.1, .3, 1],
  tool: [IID.__HACHET__, IID.__STONE_PICKAXE__, IID.__STEEL_PICKAXE__, IID.__SULFUR_PICKAXE__],
  effect: [1, 3, 4, 5],
  areaEffect: 0,
  type: [{
    life: 1e3,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-stone0.png"
    },
    particlesDist: 80,
    particle: 5,
    units: 0,
    unitsMax: 115,
    collision: 1,
    z: __MID,
    radius: 60
  }, {
    life: 800,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-stone2.png"
    },
    particlesDist: 80,
    particle: 5,
    units: 0,
    unitsMax: 115,
    collision: 1,
    z: __MID,
    radius: 58
  }, {
    life: 600,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-stone1.png"
    },
    particlesDist: 74,
    particle: 5,
    units: 0,
    unitsMax: 115,
    collision: 1,
    z: __MID,
    radius: 54
  }, {
    life: 400,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-stone3.png"
    },
    particlesDist: 65,
    particle: 5,
    units: 0,
    unitsMax: 115,
    collision: 1,
    z: __DOWN,
    radius: 45
  }, {
    life: 200,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-stone4.png"
    },
    particlesDist: 63,
    particle: 5,
    units: 0,
    unitsMax: 115,
    collision: 1,
    z: __DOWN,
    radius: 43
  }, {
    life: 150,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-stone5.png"
    },
    particlesDist: 61,
    particle: 5,
    units: 0,
    unitsMax: 115,
    collision: 1,
    z: __DOWN,
    radius: 41
  }],
  particles: PARTICLESID.__STONE__,
  impact: SOUNDID.__STONE_IMPACT_2__,
  destroy: SOUNDID.__STONE_DESTROY__,
  score: 15
}, RESOURCES[RESID.STEEL] = {
  loot: [LOOTID.__STEEL__, LOOTID.__BIG_STONE__, LOOTID.__MEDIUM_STONE__, LOOTID.__SMALL_STONE__],
  rare: [.4, .45, .6, 1],
  tool: [IID.__STONE_PICKAXE__, IID.__STEEL_PICKAXE__, IID.__SULFUR_PICKAXE__],
  effect: [1, 2, 3],
  areaEffect: 0,
  type: [{
    life: 1200,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-steel0.png"
    },
    particlesDist: 81,
    particle: 5,
    units: 0,
    unitsMax: 22,
    collision: 1,
    z: __MID,
    radius: 61
  }, {
    life: 1e3,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-steel1.png"
    },
    particlesDist: 81,
    particle: 5,
    units: 0,
    unitsMax: 22,
    collision: 1,
    z: __MID,
    radius: 61
  }, {
    life: 300,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-steel2.png"
    },
    particlesDist: 62,
    particle: 5,
    units: 0,
    unitsMax: 22,
    collision: 1,
    z: __DOWN,
    radius: 42
  }, {
    life: 500,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-steel3.png"
    },
    particlesDist: 70,
    particle: 5,
    units: 0,
    unitsMax: 22,
    collision: 1,
    z: __MID,
    radius: 50
  }],
  particles: PARTICLESID.__STEEL__,
  impact: SOUNDID.__STONE_IMPACT_2__,
  destroy: SOUNDID.__STONE_DESTROY__,
  score: 40
}, RESOURCES[RESID.SULFUR] = {
  loot: [LOOTID.sulfur, LOOTID.__BIG_STONE__, LOOTID.__MEDIUM_STONE__, LOOTID.__SMALL_STONE__],
  rare: [.4, .45, .6, 1],
  tool: [IID.__STEEL_PICKAXE__, IID.__SULFUR_PICKAXE__],
  effect: [1, 2],
  areaEffect: 0,
  type: [{
    life: 1e3,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-sulfur0.png"
    },
    particlesDist: 62,
    particle: 5,
    units: 0,
    unitsMax: 22,
    collision: 1,
    z: __MID,
    radius: 42
  }, {
    life: 400,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-sulfur1.png"
    },
    particlesDist: 70,
    particle: 5,
    units: 0,
    unitsMax: 22,
    collision: 1,
    z: __DOWN,
    radius: 50
  }, {
    life: 400,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-sulfur2.png"
    },
    particlesDist: 58,
    particle: 5,
    units: 0,
    unitsMax: 22,
    collision: 1,
    z: __DOWN,
    radius: 38
  }],
  particles: PARTICLESID.__SULFUR__,
  impact: SOUNDID.__STONE_IMPACT_2__,
  destroy: SOUNDID.__STONE_DESTROY__,
  score: 70
}, RESOURCES[RESID.URANIUM] = {
  loot: [LOOTID.uranium, LOOTID.__BIG_STONE__, LOOTID.__MEDIUM_STONE__, LOOTID.__SMALL_STONE__],
  rare: [.3, .45, .6, 1],
  tool: [IID.__SULFUR_PICKAXE__],
  effect: [1],
  areaEffect: __RADIATION__,
  type: [{
    life: 6e3,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-uranium0.png"
    },
    particlesDist: 104,
    particle: 5,
    units: 0,
    unitsMax: 5,
    collision: 1,
    z: __MID,
    radius: 75
  }, {
    life: 4e3,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-uranium1.png"
    },
    particlesDist: 75,
    particle: 5,
    units: 0,
    unitsMax: 5,
    collision: 1,
    z: __MID,
    radius: 55
  }, {
    life: 2e3,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-uranium2.png"
    },
    particlesDist: 62,
    particle: 5,
    units: 0,
    unitsMax: 5,
    collision: 1,
    z: __DOWN,
    radius: 42
  }],
  particles: PARTICLESID.__URANIUM__,
  impact: SOUNDID.__STONE_IMPACT_2__,
  destroy: SOUNDID.__STONE_DESTROY__,
  score: 140
}, RESOURCES[RESID.ORANGETREE] = {
  loot: [LOOTID.seedorange, LOOTID.__ORANGE__],
  rare: [.05, 1],
  tool: [-1],
  effect: [1],
  areaEffect: 0,
  type: [{
    life: 80,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-orange-tree-leaf0.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-orange0.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-orange-tree0.png"
    },
    particlesDist: 68,
    particle: 5,
    units: 0,
    unitsMax: 20,
    collision: 1,
    z: __DOWN,
    radius: 38
  }, {
    life: 100,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-orange-tree-leaf1.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-orange1.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-orange-tree1.png"
    },
    particlesDist: 70,
    particle: 5,
    units: 0,
    unitsMax: 20,
    collision: 1,
    z: __DOWN,
    radius: 37
  }, {
    life: 120,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-orange-tree-leaf2.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-orange2.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-orange-tree2.png"
    },
    particlesDist: 78,
    particle: 5,
    units: 0,
    unitsMax: 20,
    collision: 1,
    z: __DOWN,
    radius: 45
  }],
  particles: PARTICLESID.__ORANGE__,
  impact: SOUNDID.__NO_SOUND__,
  destroy: SOUNDID.__NO_SOUND__,
  score: 50
}, RESOURCES[RESID.TOMATOTREE] = {
  loot: [LOOTID.tomatoseed, LOOTID.tomato],
  rare: [.05, 1],
  tool: [-1],
  effect: [1],
  areaEffect: 0,
  type: [{
    life: 80,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tomato-tree-leaf0.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tomato0.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tomato-tree0.png"
    },
    particlesDist: 68,
    particle: 5,
    units: 0,
    unitsMax: 16,
    collision: 1,
    z: __DOWN,
    radius: 38
  }, {
    life: 100,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tomato-tree-leaf1.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tomato1.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tomato-tree1.png"
    },
    particlesDist: 70,
    particle: 5,
    units: 0,
    unitsMax: 16,
    collision: 1,
    z: __DOWN,
    radius: 37
  }, {
    life: 120,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tomato-tree-leaf2.png"
    },
    imgTop: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tomato2.png"
    },
    imgFull: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-tomato-tree2.png"
    },
    particlesDist: 78,
    particle: 5,
    units: 0,
    unitsMax: 16,
    collision: 1,
    z: __DOWN,
    radius: 45
  }],
  particles: PARTICLESID.__TOMATO__,
  impact: SOUNDID.__NO_SOUND__,
  destroy: SOUNDID.__NO_SOUND__,
  score: 50
}, RESOURCES[RESID.BOAR] = {
  loot: [LOOTID.rawsteak, LOOTID.__ANIMAL_FAT__, LOOTID.__LEATHER_BOAR__],
  rare: [.25, .85, 1],
  tool: [IID.__HACHET__, IID.__STONE_AXE__, IID.__SULFUR_AXE__],
  effect: [1, 3, 4],
  areaEffect: 0,
  type: [{
    life: 250,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-boar-dead.png"
    },
    particlesDist: 70,
    particle: 5,
    units: 0,
    unitsMax: 18,
    collision: 1,
    z: __DOWN,
    radius: 47
  }],
  particles: PARTICLESID.__BLOOD__,
  impact: SOUNDID.__NO_SOUND__,
  destroy: SOUNDID.__NO_SOUND__,
  score: 40
}, RESOURCES[RESID.DEER] = {
  loot: [LOOTID.rawsteak, LOOTID.__ANIMAL_TENDON__, LOOTID.__LEATHER_BOAR__, LOOTID.__ANIMAL_FAT__],
  rare: [.28, .7, .85, 1],
  tool: [IID.__HACHET__, IID.__STONE_AXE__, IID.__SULFUR_AXE__],
  effect: [1, 3, 4],
  areaEffect: 0,
  type: [{
    life: 200,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-deer-dead.png"
    },
    particlesDist: 73,
    particle: 5,
    units: 0,
    unitsMax: 18,
    collision: 1,
    z: __DOWN,
    radius: 53
  }],
  particles: PARTICLESID.__BLOOD__,
  impact: SOUNDID.__NO_SOUND__,
  destroy: SOUNDID.__NO_SOUND__,
  score: 40
}, RESOURCES[RESID.MUSHROOM1] = {
  loot: [LOOTID.mushroom],
  rare: [1],
  tool: [-1],
  effect: [1],
  areaEffect: 0,
  type: [{
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-mushroom1.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 2,
    collision: 0,
    z: __DOWN,
    radius: 32
  }, {
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-mushroom2.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 2,
    collision: 0,
    z: __DOWN,
    radius: 32
  }, {
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-mushroom3.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 2,
    collision: 0,
    z: __DOWN,
    radius: 32
  }, {
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-mushroom4.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 2,
    collision: 0,
    z: __DOWN,
    radius: 32
  }],
  particles: PARTICLESID.__MUSHROOM1__,
  impact: SOUNDID.__NO_SOUND__,
  destroy: SOUNDID.__NO_SOUND__,
  score: 40
}, RESOURCES[RESID.WHITE_FLOWER] = {
  loot: [LOOTID.antidoteflower],
  rare: [1],
  tool: [-1],
  effect: [1],
  areaEffect: 0,
  type: [{
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-antidote-tree.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 1,
    collision: 0,
    z: __DOWN,
    radius: 32
  }],
  particles: PARTICLESID.flower,
  impact: SOUNDID.__NO_SOUND__,
  destroy: SOUNDID.__NO_SOUND__,
  score: 1e3
}, RESOURCES[RESID.MUSHROOM2] = {
  loot: [LOOTID.mushroom2],
  rare: [1],
  tool: [-1],
  effect: [1],
  areaEffect: 0,
  type: [{
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-mushroom5.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 6,
    collision: 0,
    z: __DOWN,
    radius: 32
  }, {
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-mushroom6.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 6,
    collision: 0,
    z: __DOWN,
    radius: 32
  }, {
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-mushroom7.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 6,
    collision: 0,
    z: __DOWN,
    radius: 32
  }, {
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-mushroom8.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 6,
    collision: 0,
    z: __DOWN,
    radius: 32
  }],
  particles: PARTICLESID.__MUSHROOM2__,
  impact: SOUNDID.__NO_SOUND__,
  destroy: SOUNDID.__NO_SOUND__,
  score: 40
}, RESOURCES[RESID.MUSHROOM3] = {
  loot: [LOOTID.mushroom3],
  rare: [1],
  tool: [-1],
  effect: [1],
  areaEffect: 0,
  type: [{
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-mushroom9.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 6,
    collision: 0,
    z: __DOWN,
    radius: 32
  }, {
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-mushroom10.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 6,
    collision: 0,
    z: __DOWN,
    radius: 32
  }, {
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-mushroom11.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 6,
    collision: 0,
    z: __DOWN,
    radius: 32
  }, {
    life: 1,
    img: {
      img: {
        isLoaded: 0
      },
      src: "https://devast.io/img/day-mushroom12.png"
    },
    particlesDist: 18,
    particle: 2,
    units: 0,
    unitsMax: 6,
    collision: 0,
    z: __DOWN,
    radius: 32
  }],
  particles: PARTICLESID.__MUSHROOM3__,
  impact: SOUNDID.__NO_SOUND__,
  destroy: SOUNDID.__NO_SOUND__,
  score: 40
};
var LIGHTFIREX = [-26, 25, -7, 0],
  LIGHTFIREY = [-28, -15, 25, 0],
  LIGHTFIRE = [{
    src: "https://devast.io/img/day-campfire-light-1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-campfire-light-2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-campfire-light-3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/day-campfire-light-down.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/ghoul-hurt.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/heal-player.png",
    img: {
      isLoaded: 0
    }
  }],
  KARMA = [{
    src: "https://devast.io/img/karma4.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/karma3.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/karma2.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/karma1.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/karma0.png",
    img: {
      isLoaded: 0
    }
  }, {
    src: "https://devast.io/img/karma5.png",
    img: {
      isLoaded: 0
    }
  }],
  HOUSEID = (COUNTER = 0, {
    __HOUSE0__: COUNTER++,
    __HOUSE1__: COUNTER++,
    __HOUSE2__: COUNTER++,
    __HOUSE3__: COUNTER++,
    __HOUSE4__: COUNTER++,
    __HOUSE5__: COUNTER++,
    __HOUSE6__: COUNTER++,
    __HOUSE7__: COUNTER++,
    __HOUSE8__: COUNTER++,
    __HOUSE9__: COUNTER++,
    __CITY0__: COUNTER++,
    __BUNKER0__: COUNTER++
  }),
  HOUSE = [],
  P = {};
try {
  exports !== window.undefined && (_EMP = {
    v: 0,
    b: 0,
    V: -1,
    r: 0
  }, _WF = {
    v: IID.__WOOD_FLOOR__,
    b: 0,
    V: -1,
    r: 0
  }, _LF = {
    v: IID.__WOODLIGHT_FLOOR__,
    b: 0,
    V: -1,
    r: 0
  }, _SF = {
    v: IID.__STONE_FLOOR__,
    b: 0,
    V: -1,
    r: 0
  }, _TF = {
    v: IID.__TILING_FLOOR__,
    b: 0,
    V: -1,
    r: 0
  }, _GF = {
    v: IID.__GOLD_FLOOR__,
    b: 0,
    V: -1,
    r: 0
  }, _RF = {
    v: IID.__RED_FLOOR__,
    b: 0,
    V: -1,
    r: 0
  }, _WW = {
    v: 0,
    b: IID.__WOOD_WALL__,
    V: -1,
    r: 0
  }, _WWWF = {
    v: IID.__WOOD_FLOOR__,
    b: IID.__WOOD_WALL__,
    V: -1,
    r: 0
  }, _WWLF = {
    v: IID.__WOODLIGHT_FLOOR__,
    b: IID.__WOOD_WALL__,
    V: -1,
    r: 0
  }, _WWSF = {
    v: IID.__STONE_FLOOR__,
    b: IID.__WOOD_WALL__,
    V: -1,
    r: 0
  }, _WWTF = {
    v: IID.__TILING_FLOOR__,
    b: IID.__WOOD_WALL__,
    V: -1,
    r: 0
  }, _WWGF = {
    v: IID.__GOLD_FLOOR__,
    b: IID.__WOOD_WALL__,
    V: -1,
    r: 0
  }, _WWRF = {
    v: IID.__RED_FLOOR__,
    b: IID.__WOOD_WALL__,
    V: -1,
    r: 0
  }, _SW = {
    v: 0,
    b: IID.__STONE_WALL__,
    V: -1,
    r: 0
  }, _SWWF = {
    v: IID.__WOOD_FLOOR__,
    b: IID.__STONE_WALL__,
    V: -1,
    r: 0
  }, _SWLF = {
    v: IID.__WOODLIGHT_FLOOR__,
    b: IID.__STONE_WALL__,
    V: -1,
    r: 0
  }, _SWSF = {
    v: IID.__STONE_FLOOR__,
    b: IID.__STONE_WALL__,
    V: -1,
    r: 0
  }, _SWTF = {
    v: IID.__TILING_FLOOR__,
    b: IID.__STONE_WALL__,
    V: -1,
    r: 0
  }, _SWGF = {
    v: IID.__GOLD_FLOOR__,
    b: IID.__STONE_WALL__,
    V: -1,
    r: 0
  }, _SWRF = {
    v: IID.__RED_FLOOR__,
    b: IID.__STONE_WALL__,
    V: -1,
    r: 0
  }, _MW = {
    v: 0,
    b: IID.__STEEL_WALL__,
    V: -1,
    r: 0
  }, _MWWF = {
    v: IID.__WOOD_FLOOR__,
    b: IID.__STEEL_WALL__,
    V: -1,
    r: 0
  }, _MWLF = {
    v: IID.__WOODLIGHT_FLOOR__,
    b: IID.__STEEL_WALL__,
    V: -1,
    r: 0
  }, _MWSF = {
    v: IID.__STONE_FLOOR__,
    b: IID.__STEEL_WALL__,
    V: -1,
    r: 0
  }, _MWTF = {
    v: IID.__TILING_FLOOR__,
    b: IID.__STEEL_WALL__,
    V: -1,
    r: 0
  }, _MWGF = {
    v: IID.__GOLD_FLOOR__,
    b: IID.__STEEL_WALL__,
    V: -1,
    r: 0
  }, _MWRF = {
    v: IID.__RED_FLOOR__,
    b: IID.__STEEL_WALL__,
    V: -1,
    r: 0
  }, _SC = {
    v: 0,
    b: IID.__STONE_CAVE__,
    V: -1,
    r: 0
  }, _SCSF = {
    v: IID.__STONE_FLOOR__,
    b: IID.__STONE_CAVE__,
    V: -1,
    r: 0
  }, _SCTF = {
    v: IID.__TILING_FLOOR__,
    b: IID.__STONE_CAVE__,
    V: -1,
    r: 0
  }, _BW = {
    v: 0,
    b: IID.__BUNKER_WALL__,
    V: -1,
    r: 0
  }, _BWSF = {
    v: IID.__STONE_FLOOR__,
    b: IID.__BUNKER_WALL__,
    V: -1,
    r: 0
  }, _BWTF = {
    v: IID.__TILING_FLOOR__,
    b: IID.__BUNKER_WALL__,
    V: -1,
    r: 0
  }, HOUSE[HOUSEID.__HOUSE0__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, _WWWF, _WWWF, _WWWF, {
        v: 62,
        b: 30,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 30,
        V: -1,
        r: 2
      }, _WWWF, _WWWF],
      [_EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 0,
        r: 3
      }, _WF, _WF, _WF, {
        v: 62,
        b: 71,
        V: 13,
        r: 1
      }, _WWWF],
      [_EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 22,
        r: 3
      }, _WF, _WF, _WF, _WF, {
        v: 62,
        b: 30,
        V: -1,
        r: 3
      }],
      [_EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 9,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 10,
        r: 1
      }, _WF, _WF, _WF, {
        v: 62,
        b: 30,
        V: -1,
        r: 3
      }],
      [_EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 17,
        r: 0
      }, _WF, _WF, _WF, {
        v: 62,
        b: 71,
        V: 19,
        r: 2
      }, _WWWF],
      [_EMP, _WWWF, _WWWF, _WWWF, _WWWF, _WWWF, _WWWF, _WWWF]
    ]
  }, HOUSE[HOUSEID.__HOUSE1__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, _SWLF, _SWLF, {
        v: 67,
        b: 69,
        V: -1,
        r: 2
      }, _SWLF, _SWLF, _SWLF],
      [_EMP, {
        v: 62,
        b: 69,
        V: -1,
        r: 1
      }, _WF, {
        v: 62,
        b: 71,
        V: 23,
        r: 0
      }, _SWLF, {
        v: 67,
        b: 71,
        V: 28,
        r: 3
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 21,
        r: 1
      }, _SWLF],
      [_EMP, {
        v: 62,
        b: 31,
        V: -1,
        r: 1
      }, _WF, _WF, _SWLF, {
        v: 67,
        b: 71,
        V: 12,
        r: 0
      }, _LF, {
        v: 67,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, {
        v: 62,
        b: 69,
        V: -1,
        r: 1
      }, _WF, _WF, {
        v: 62,
        b: 69,
        V: -1,
        r: 3
      }, _LF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 15,
        r: 1
      }, _SWLF],
      [_EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, _SWWF, {
        v: 62,
        b: 31,
        V: -1,
        r: 0
      }, _SWLF, _LF, {
        v: 67,
        b: 71,
        V: 23,
        r: 1
      }, _LF, {
        v: 67,
        b: 71,
        V: 5,
        r: 1
      }, _SWLF],
      [_EMP, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }, _SWWF, _WF, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, _SWWF],
      [_EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, _SWWF, {
        v: 62,
        b: 71,
        V: 23,
        r: 2
      }, _WF, _WF, _WF, _WF, {
        v: 62,
        b: 71,
        V: 14,
        r: 1
      }, _SWWF],
      [_EMP, _EMP, _SWWF, {
        v: 67,
        b: 71,
        V: 27,
        r: 0
      }, _LF, _LF, {
        v: 62,
        b: 71,
        V: 8,
        r: 3
      }, _WF, {
        v: 62,
        b: 71,
        V: 1,
        r: 1
      }, _SWWF],
      [_EMP, _EMP, _SWWF, {
        v: 67,
        b: 71,
        V: 27,
        r: 0
      }, _LF, {
        v: 67,
        b: 71,
        V: 7,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 23,
        r: 0
      }, _WF, {
        v: 62,
        b: 71,
        V: 2,
        r: 1
      }, _SWWF],
      [_EMP, _EMP, _SWWF, {
        v: 67,
        b: 71,
        V: 20,
        r: 0
      }, _LF, _LF, _WF, _WF, _WF, {
        v: 0,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, {
        v: 0,
        b: 71,
        V: 16,
        r: 1
      }, _SWWF, _SWWF, {
        v: 67,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 0
      }, _SWWF, {
        v: 62,
        b: 31,
        V: -1,
        r: 0
      }, _SWWF, _SWWF],
      [_EMP, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 16,
        r: 2
      }, _EMP, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 17,
        r: 0
      }]
    ]
  }, HOUSE[HOUSEID.__HOUSE2__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, _EMP, _EMP, _SWWF, _SWWF, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, _SWWF, _SWWF, _SWLF, _SWLF, _SWLF, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, _EMP, _EMP, _SWWF, {
        v: 67,
        b: 71,
        V: 27,
        r: 0
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 23,
        r: 3
      }, _SWWF, {
        v: 67,
        b: 71,
        V: 5,
        r: 0
      }, {
        v: 67,
        b: 71,
        V: 13,
        r: 1
      }, _SWLF, _WF, _WF, {
        v: 0,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, _SWWF, {
        v: 67,
        b: 71,
        V: 20,
        r: 0
      }, _LF, {
        v: 67,
        b: 71,
        V: 7,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 16,
        r: 2
      }, _SWWF, _LF, _LF, {
        v: 67,
        b: 31,
        V: -1,
        r: 3
      }, _WF, {
        v: 62,
        b: 71,
        V: 23,
        r: 1
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, _WF, {
        v: 62,
        b: 71,
        V: 2,
        r: 1
      }, _SWWF, {
        v: 67,
        b: 71,
        V: 11,
        r: 3
      }, _LF, _LF, _LF, _SWWF, _LF, {
        v: 67,
        b: 71,
        V: 12,
        r: 2
      }, _SWLF, _SWLF, _SWLF, _SW],
      [_EMP, _WF, _WF, {
        v: 62,
        b: 31,
        V: -1,
        r: 1
      }, _WF, _WF, _WF, _WF, {
        v: 62,
        b: 31,
        V: -1,
        r: 3
      }, _LF, _LF, _SWLF, {
        v: 67,
        b: 71,
        V: 25,
        r: 2
      }, {
        v: 67,
        b: 71,
        V: 3,
        r: 1
      }, _SWLF],
      [_EMP, _WF, _WF, {
        v: 62,
        b: 31,
        V: -1,
        r: 1
      }, _WF, _WF, _WF, _WF, _SWWF, _LF, _LF, {
        v: 67,
        b: 51,
        V: -1,
        r: 1
      }, _LF, {
        v: 67,
        b: 71,
        V: 18,
        r: 2
      }, _SWLF],
      [_EMP, _WF, _WF, _SW, {
        v: 62,
        b: 71,
        V: 3,
        r: 3
      }, _WF, _WF, {
        v: 62,
        b: 71,
        V: 16,
        r: 2
      }, _SWWF, _SWLF, _SWLF, _SWLF, _SWLF, _SWLF, _SWLF],
      [_EMP, _WF, {
        v: 62,
        b: 71,
        V: 26,
        r: 0
      }, _SWWF, {
        v: 0,
        b: 71,
        V: 4,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 22,
        r: 1
      }, _WF, {
        v: 62,
        b: 71,
        V: 8,
        r: 1
      }, _SWWF, {
        v: 0,
        b: 71,
        V: 24,
        r: 1
      }, _EMP, {
        v: 0,
        b: 71,
        V: 17,
        r: 0
      }],
      [_EMP, _WF, {
        v: 62,
        b: 71,
        V: 23,
        r: 0
      }, _SWWF, {
        v: 62,
        b: 71,
        V: 23,
        r: 1
      }, _WF, _WF, {
        v: 62,
        b: 71,
        V: 14,
        r: 1
      }, _SWWF, {
        v: 0,
        b: 71,
        V: 26,
        r: 1
      }],
      [_EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, _SWWF, _SWWF, {
        v: 62,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 0
      }, _SWWF, _SWWF, {
        v: 0,
        b: 71,
        V: 24,
        r: 1
      }]
    ]
  }, HOUSE[HOUSEID.__HOUSE3__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, _SWLF, _SWLF, _SWLF, _SWLF],
      [_EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 71,
        V: 23,
        r: 2
      }, _EMP, _EMP, _EMP, _EMP, _EMP, _SWLF, {
        v: 67,
        b: 71,
        V: 21,
        r: 0
      }, {
        v: 67,
        b: 71,
        V: 28,
        r: 0
      }, _SWLF],
      [_EMP, _SWWF, _SWWF, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, _SWWF, _SWWF, _EMP, _SWLF, _LF, _LF, _SWLF],
      [_EMP, _SWWF, {
        v: 62,
        b: 71,
        V: 12,
        r: 0
      }, _WF, _WF, _WF, _SWWF, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, _SWLF, {
        v: 67,
        b: 31,
        V: -1,
        r: 0
      }, _SWLF, _SWLF],
      [_EMP, _SWWF, _WF, {
        v: 62,
        b: 71,
        V: 2,
        r: 0
      }, _WF, {
        v: 62,
        b: 71,
        V: 14,
        r: 1
      }, _SWWF, _WF, _WF, _WF, _WF, _SWWF],
      [_EMP, _SWWF, {
        v: 62,
        b: 71,
        V: 0,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 7,
        r: 0
      }, _WF, {
        v: 62,
        b: 71,
        V: 8,
        r: 1
      }, _SWWF, _WF, {
        v: 62,
        b: 71,
        V: 14,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 5,
        r: 2
      }, _WF, _SWWF],
      [_EMP, _SWWF, _WF, {
        v: 62,
        b: 71,
        V: 1,
        r: 2
      }, _WF, _WF, _SWWF, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, _SWWF, _SWWF, _SWWF, _SWWF, _SWLF],
      [_EMP, {
        v: 62,
        b: 31,
        V: -1,
        r: 1
      }, _WF, _WF, _WF, _WF, _WF, _WF, _WF, {
        v: 62,
        b: 31,
        V: -1,
        r: 3
      }, _LF, _LF, _SWLF],
      [_EMP, _SWWF, _WF, _WF, _WF, _WF, _WF, _WF, _WF, _SWLF, {
        v: 67,
        b: 71,
        V: 25,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 18,
        r: 3
      }, _SWLF],
      [_EMP, _SWWF, _SWWF, _SWWF, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, _SWWF, _SWWF, _SWWF, {
        v: 67,
        b: 31,
        V: -1,
        r: 2
      }, _SWLF, _SWLF, _SWLF, _SWLF],
      [_EMP, _SWWF, {
        v: 62,
        b: 71,
        V: 20,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 11,
        r: 0
      }, _WF, _WF, _SWWF, {
        v: 67,
        b: 71,
        V: 24,
        r: 0
      }, _LF, _LF, _LF, _LF, {
        v: 67,
        b: 31,
        V: -1,
        r: 3
      }],
      [_EMP, {
        v: 62,
        b: 31,
        V: -1,
        r: 1
      }, _WF, _WF, _WF, _WF, _SWWF, {
        v: 67,
        b: 71,
        V: 23,
        r: 0
      }, _LF, _LF, _LF, _LF, {
        v: 67,
        b: 31,
        V: -1,
        r: 3
      }],
      [_EMP, {
        v: 62,
        b: 31,
        V: -1,
        r: 1
      }, _WF, _WF, _WF, _WF, _SWWF, _SWWF, _SWWF, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }],
      [_EMP, _SWWF, {
        v: 62,
        b: 71,
        V: 14,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 13,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 12,
        r: 3
      }, _WF, {
        v: 67,
        b: 31,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 71,
        V: 12,
        r: 2
      }, _SWWF],
      [_EMP, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWLF, _SWWF, _SWWF]
    ]
  }, HOUSE[HOUSEID.__HOUSE4__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, _SWLF, _SWLF, _SWLF, _SWLF, {
        v: 67,
        b: 31,
        V: -1,
        r: 2
      }, _SWLF, _SWLF, _SWLF, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, _SW],
      [_EMP, _SWLF, {
        v: 67,
        b: 71,
        V: 12,
        r: 0
      }, _LF, {
        v: 67,
        b: 71,
        V: 5,
        r: 0
      }, _LF, {
        v: 67,
        b: 71,
        V: 11,
        r: 1
      }, _SWLF, {
        v: 67,
        b: 71,
        V: 13,
        r: 0
      }, _LF, _LF, _SWLF],
      [_EMP, _SWLF, {
        v: 67,
        b: 71,
        V: 13,
        r: 0
      }, _LF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 19,
        r: 2
      }, _SWLF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 21,
        r: 1
      }, _SWLF],
      [_EMP, _SWLF, {
        v: 67,
        b: 71,
        V: 9,
        r: 3
      }, _LF, {
        v: 67,
        b: 71,
        V: 7,
        r: 1
      }, _LF, {
        v: 67,
        b: 71,
        V: 26,
        r: 3
      }, _SWLF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 28,
        r: 1
      }, _SWLF],
      [_EMP, _SWLF, {
        v: 67,
        b: 71,
        V: 13,
        r: 0
      }, _LF, _LF, _LF, _LF, _SWLF, _LF, _SWLF, _SWLF, _SWLF],
      [_EMP, _SWLF, {
        v: 67,
        b: 71,
        V: 9,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 10,
        r: 1
      }, {
        v: 67,
        b: 71,
        V: 12,
        r: 3
      }, _LF, _LF, {
        v: 67,
        b: 31,
        V: -1,
        r: 1
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 27,
        r: 2
      }, _SWLF],
      [_EMP, _SWLF, _SWLF, _SWLF, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, _SWLF, _SWLF, {
        v: 67,
        b: 31,
        V: -1,
        r: 0
      }, _SWLF, _SWLF, _SWLF],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 17,
        r: 3
      }, {
        v: 0,
        b: 71,
        V: 26,
        r: 3
      }]
    ]
  }, HOUSE[HOUSEID.__HOUSE5__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF,
        _SWWF, _SWWF
      ],
      [_EMP, _SWWF, {
        v: 62,
        b: 71,
        V: 23,
        r: 0
      }, _WF, {
        v: 62,
        b: 71,
        V: 9,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 9,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 9,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 9,
        r: 0
      }, _WF, _SWWF, {
        v: 62,
        b: 71,
        V: 23,
        r: 0
      }, _WF, {
        v: 62,
        b: 71,
        V: 1,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 2,
        r: 0
      }, _WF, {
        v: 62,
        b: 71,
        V: 23,
        r: 1
      }, _SWWF, {
        v: 0,
        b: 71,
        V: 17,
        r: 1
      }],
      [_EMP, _SWWF, _LF, _LF, {
        v: 62,
        b: 71,
        V: 10,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 10,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 10,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 10,
        r: 2
      }, _WF, _SWWF, {
        v: 62,
        b: 71,
        V: 39,
        r: 0
      }, _WF, _WF, _WF, _WF, _WF, _SWWF],
      [_EMP, _SWWF, {
        v: 67,
        b: 71,
        V: 39,
        r: 3
      }, _LF, _LF, _LF, _LF, _LF, _LF, {
        v: 62,
        b: 150,
        V: -1,
        r: 3
      }, _LF, _LF, _LF, _LF, _LF, _LF, {
        v: 67,
        b: 51,
        V: -1,
        r: 1
      }],
      [_EMP, _SWWF, {
        v: 85,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 85,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }, _LF, _LF, _LF, _LF, {
        v: 62,
        b: 150,
        V: -1,
        r: 3
      }, _LF, _LF, _LF, _LF, _LF, _LF, {
        v: 67,
        b: 51,
        V: -1,
        r: 3
      }],
      [_EMP, _SWWF, {
        v: 85,
        b: 71,
        V: 28,
        r: 3
      }, _TF, {
        v: 62,
        b: 69,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 10,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 10,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 10,
        r: 0
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 149,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 40,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 7,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 7,
        r: 1
      }, _SWWF],
      [_EMP, _SWWF, {
        v: 85,
        b: 71,
        V: 21,
        r: 3
      }, _TF, {
        v: 62,
        b: 69,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 9,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 9,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 9,
        r: 2
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 142,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 144,
        V: -1,
        r: 0
      }, _WF, {
        v: 62,
        b: 71,
        V: 8,
        r: 1
      }, _SWWF],
      [_EMP, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWTF, {
        v: 0,
        b: 71,
        V: 41,
        r: 2
      }, _SWTF, _SWTF, _SWTF, _SWWF, _SWWF, _SWWF],
      [_EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 3
      }, {
        v: 0,
        b: 71,
        V: 16,
        r: 3
      }, _EMP, _EMP, _EMP, _SWTF, _TF, _TF, {
        v: 85,
        b: 71,
        V: 18,
        r: 2
      }, _SWTF, {
        v: 0,
        b: 71,
        V: 16,
        r: 0
      }],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _SWTF, {
        v: 85,
        b: 71,
        V: 25,
        r: 1
      }, _TF, {
        v: 85,
        b: 71,
        V: 19,
        r: 2
      }, _SWTF],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _SWTF, _SWTF, _SWTF, _SWTF, _SWTF]
    ]
  }, HOUSE[HOUSEID.__HOUSE6__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, _WWWF, _WWWF, _WWWF, {
        v: 67,
        b: 50,
        V: -1,
        r: 2
      }, _WWWF, _WWWF, _WWWF],
      [_EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 9,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 8,
        r: 0
      }, _LF, {
        v: 62,
        b: 71,
        V: 13,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 6,
        r: 0
      }, _WWWF],
      [_EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 10,
        r: 2
      }, _WF, _LF, _WF, _WF, _WWWF],
      [_EMP, {
        v: 67,
        b: 50,
        V: -1,
        r: 1
      }, _LF, _LF, {
        v: 67,
        b: 148,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 144,
        V: -1,
        r: 0
      }, _LF, {
        v: 67,
        b: 50,
        V: -1,
        r: 3
      }],
      [_EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 28,
        r: 3
      }, _WF, _LF, _WF, {
        v: 62,
        b: 71,
        V: 19,
        r: 2
      }, _WWWF],
      [_EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 21,
        r: 3
      }, _WF, _LF, _WF, {
        v: 62,
        b: 71,
        V: 26,
        r: 2
      }, _WWWF],
      [_EMP, _WWWF, _WWWF, _WWWF, {
        v: 67,
        b: 50,
        V: -1,
        r: 0
      }, _WWWF, _WWWF, _WWWF]
    ]
  }, HOUSE[HOUSEID.__HOUSE7__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, _SW, _SW, _SW, _SW, _SW, _SW, _SW, _SW],
      [_EMP, _SW, {
        v: 62,
        b: 148,
        V: -1,
        r: 1
      }, _WF, {
        v: 62,
        b: 71,
        V: 16,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 39,
        r: 1
      }, _WF, {
        v: 62,
        b: 148,
        V: -1,
        r: 1
      }, _SW],
      [_EMP, _SW, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 31,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, _SW],
      [_EMP, _SW, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 69,
        V: -1,
        r: 1
      }, _SF, _SF, {
        v: 84,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, _SW],
      [_EMP, _SW, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 69,
        V: -1,
        r: 1
      }, _SF, _SF, {
        v: 84,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, _SW],
      [_EMP, _SW, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 69,
        V: -1,
        r: 1
      }, _SF, _SF, {
        v: 84,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, _SW],
      [_EMP, _SW, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 0
      }, _SW],
      [_EMP, _SW, {
        v: 62,
        b: 148,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 144,
        V: -1,
        r: 0
      }, _WF, _WF, {
        v: 62,
        b: 144,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 148,
        V: -1,
        r: 1
      }, _SW],
      [_EMP, _SW, _SW, _SW, {
        v: 84,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 84,
        b: 31,
        V: -1,
        r: 2
      }, _SW, _SW, _SW, {
        v: 0,
        b: 71,
        V: 17,
        r: 1
      }],
      [_EMP, _SW, {
        v: 84,
        b: 71,
        V: 8,
        r: 0
      }, {
        v: 84,
        b: 71,
        V: 8,
        r: 0
      }, _SF, _SF, {
        v: 84,
        b: 71,
        V: 8,
        r: 0
      }, {
        v: 84,
        b: 71,
        V: 8,
        r: 0
      }, _SW, {
        v: 0,
        b: 71,
        V: 26,
        r: 1
      }],
      [_EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }]
    ]
  }, HOUSE[HOUSEID.__HOUSE8__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, _LF, {
        v: 67,
        b: 148,
        V: -1,
        r: 0
      }, _LF, _LF, _LF, {
        v: 67,
        b: 151,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 148,
        V: -1,
        r: 3
      }, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 16,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 26,
        r: 3
      }, {
        v: 0,
        b: 71,
        V: 26,
        r: 3
      }],
      [_EMP, _MWLF, {
        v: 67,
        b: 149,
        V: -1,
        r: 0
      }, _MWLF, {
        v: 67,
        b: 150,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 150,
        V: -1,
        r: 0
      }, _MWLF, {
        v: 67,
        b: 149,
        V: -1,
        r: 0
      }, _MWWF, _MWWF, _MW, _MW, _MW, _MW],
      [_EMP, _MW, {
        v: 62,
        b: 148,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 151,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 143,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 143,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 148,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 23,
        r: 0
      }, _MWWF, {
        v: 84,
        b: 71,
        V: 23,
        r: 0
      }, {
        v: 84,
        b: 71,
        V: 28,
        r: 0
      }, {
        v: 84,
        b: 71,
        V: 28,
        r: 0
      }, _MW, {
        v: 0,
        b: 71,
        V: 16,
        r: 3
      }],
      [_EMP, _MW, _WF, _LF, _LF, _LF, _LF, {
        v: 62,
        b: 142,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 146,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 32,
        V: -1,
        r: 3
      }, _SF, _SF, _SF, _MW],
      [_EMP, _MW, {
        v: 62,
        b: 71,
        V: 4,
        r: 3
      }, _LF, {
        v: 67,
        b: 71,
        V: 7,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 7,
        r: 3
      }, _LF, {
        v: 62,
        b: 71,
        V: 3,
        r: 1
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, _MW, _MW, _TF, _TF, _MW],
      [_EMP, _MW, {
        v: 62,
        b: 71,
        V: 3,
        r: 3
      }, _LF, {
        v: 67,
        b: 71,
        V: 7,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 7,
        r: 3
      }, _LF, {
        v: 62,
        b: 71,
        V: 4,
        r: 1
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 71,
        V: 21,
        r: 3
      }, {
        v: 85,
        b: 32,
        V: -1,
        r: 3
      }, _TF, _TF, _MW],
      [_EMP, _MW, _WF, _LF, _LF, _LF, _LF, _WF, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, _MW, _MW, _MW, _MW, _MW],
      [_EMP, _MW, {
        v: 62,
        b: 71,
        V: 23,
        r: 3
      }, _WF, _WF, _WF, _WF, {
        v: 62,
        b: 71,
        V: 23,
        r: 3
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, _MW],
      [_EMP, _MWLF, _MWLF, _MWLF, {
        v: 67,
        b: 52,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 52,
        V: -1,
        r: 2
      }, _MWLF, _MWLF, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, _MWLF],
      [_EMP, _MWLF, {
        v: 67,
        b: 71,
        V: 27,
        r: 1
      }, _LF, _LF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 16,
        r: 1
      }, {
        v: 67,
        b: 144,
        V: -1,
        r: 3
      }, _MWLF],
      [_EMP, {
        v: 67,
        b: 70,
        V: -1,
        r: 1
      }, _LF, _WF, _WF, _WF, _LF, {
        v: 67,
        b: 71,
        V: 13,
        r: 0
      }, _LF, _MWLF],
      [_EMP, {
        v: 67,
        b: 70,
        V: -1,
        r: 1
      }, _LF, {
        v: 62,
        b: 71,
        V: 4,
        r: 3
      }, _WF, _WF, _LF, {
        v: 67,
        b: 71,
        V: 9,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 10,
        r: 1
      }, _MWLF, {
        v: 0,
        b: 71,
        V: 17,
        r: 3
      }],
      [_EMP, _MWLF, {
        v: 67,
        b: 71,
        V: 27,
        r: 0
      }, _WF, _WF, {
        v: 62,
        b: 71,
        V: 3,
        r: 2
      }, _LF, _LF, _LF, _MWLF, {
        v: 0,
        b: 71,
        V: 24,
        r: 2
      }],
      [_EMP, _MWLF, {
        v: 67,
        b: 71,
        V: 18,
        r: 0
      }, _LF, _LF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 23,
        r: 0
      }, {
        v: 67,
        b: 71,
        V: 12,
        r: 3
      }, _MWLF],
      [_EMP, _MWLF, _MWLF, _MWLF, {
        v: 67,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 70,
        V: -1,
        r: 0
      }, _MWLF, _MWLF, _MWLF, _MWLF]
    ]
  }, HOUSE[HOUSEID.__HOUSE9__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 151,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 148,
        V: -1,
        r: 0
      }, _EMP, {
        v: 0,
        b: 148,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 151,
        V: -1,
        r: 0
      }],
      [_EMP, _WW, _WW, {
        v: 0,
        b: 30,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 30,
        V: -1,
        r: 2
      }, _MWTF, _MWTF, {
        v: 67,
        b: 149,
        V: -1,
        r: 2
      }, {
        v: 67,
        b: 150,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 149,
        V: -1,
        r: 0
      }, _MWTF],
      [_EMP, _WW, {
        v: 0,
        b: 71,
        V: 23,
        r: 3
      }, _EMP, _EMP, _MWTF, {
        v: 67,
        b: 71,
        V: 9,
        r: 0
      }, {
        v: 67,
        b: 143,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 146,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 143,
        V: -1,
        r: 1
      }, _MWTF, {
        v: 0,
        b: 71,
        V: 17,
        r: 2
      }],
      [_EMP, _WW, {
        v: 0,
        b: 71,
        V: 26,
        r: 3
      }, {
        v: 0,
        b: 71,
        V: 16,
        r: 3
      }, {
        v: 0,
        b: 71,
        V: 17,
        r: 3
      }, _MWTF, {
        v: 67,
        b: 71,
        V: 10,
        r: 2
      }, {
        v: 67,
        b: 151,
        V: -1,
        r: 1
      }, _LF, {
        v: 67,
        b: 151,
        V: -1,
        r: 1
      }, _MWTF, _MWTF, _MWTF],
      [_EMP, _WW, {
        v: 0,
        b: 144,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 144,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 144,
        V: -1,
        r: 3
      }, _MWTF, _LF, _LF, _LF, _LF, {
        v: 62,
        b: 71,
        V: 20,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 11,
        r: 0
      }, {
        v: 62,
        b: 70,
        V: -1,
        r: 3
      }],
      [_EMP, _MWTF, {
        v: 85,
        b: 149,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 149,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 149,
        V: -1,
        r: 0
      }, _MWTF, {
        v: 62,
        b: 32,
        V: -1,
        r: 2
      }, _MWWF, {
        v: 67,
        b: 71,
        V: 8,
        r: 0
      }, _LF, _WF, _WF, {
        v: 62,
        b: 70,
        V: -1,
        r: 3
      }],
      [_EMP, {
        v: 85,
        b: 70,
        V: -1,
        r: 1
      }, {
        v: 85,
        b: 147,
        V: -1,
        r: 2
      }, {
        v: 85,
        b: 146,
        V: -1,
        r: 2
      }, {
        v: 85,
        b: 140,
        V: -1,
        r: 2
      }, _MWTF, _WF, {
        v: 62,
        b: 70,
        V: -1,
        r: 3
      }, _LF, _LF, _WF, _WF, {
        v: 62,
        b: 70,
        V: -1,
        r: 3
      }],
      [_EMP, _MWTF, {
        v: 85,
        b: 71,
        V: 31,
        r: 0
      }, {
        v: 85,
        b: 142,
        V: -1,
        r: 3
      }, {
        v: 85,
        b: 146,
        V: -1,
        r: 1
      }, {
        v: 85,
        b: 150,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 5,
        r: 2
      }, {
        v: 62,
        b: 70,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 0,
        r: 2
      }, _LF, {
        v: 62,
        b: 71,
        V: 10,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 7,
        r: 0
      }, {
        v: 62,
        b: 70,
        V: -1,
        r: 3
      }],
      [_EMP, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF, {
        v: 85,
        b: 32,
        V: -1,
        r: 2
      }, _MWTF, _MWTF, _MWTF],
      [_EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 17,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }, _MWTF, {
        v: 85,
        b: 71,
        V: 28,
        r: 3
      }, _TF, _TF, _MWTF, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _MWTF, {
        v: 85,
        b: 71,
        V: 21,
        r: 3
      }, _TF, {
        v: 85,
        b: 71,
        V: 18,
        r: 3
      }, _MWTF],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF]
    ]
  }, HOUSE[HOUSEID.__CITY0__] = {
    width: 0,
    height: 0,
    radiation: __RADIATION__,
    building: [
      [_EMP],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 111,
        V: -1,
        r: 3
      }, _EMP, _EMP, {
        v: 0,
        b: 111,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 111,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 111,
        V: -1,
        r: 3
      }, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 26,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 24,
        r: 0
      }, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF,
        _MWTF, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 21,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 20,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        },
        _EMP, _MWLF, _MWLF, _MWLF, _MWLF, _MWLF, _MWLF, _MWLF, {
          v: 0,
          b: 71,
          V: 16,
          r: 0
        }
      ],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _MWTF, {
        v: 85,
        b: 71,
        V: 37,
        r: 1
      }, {
        v: 85,
        b: 71,
        V: 28,
        r: 0
      }, _TF, {
        v: 85,
        b: 71,
        V: 31,
        r: 1
      }, {
        v: 85,
        b: 71,
        V: 32,
        r: 1
      }, _MWTF, {
        v: 85,
        b: 71,
        V: 37,
        r: 1
      }, _TF, _TF, _MWTF, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _MWLF, _WF, {
        v: 62,
        b: 70,
        V: -1,
        r: 3
      }, _LF, _LF, {
        v: 62,
        b: 71,
        V: 13,
        r: 2
      }, _MWLF, _MWSF, _MWSF, _MWSF, _MWSF],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _MWTF, _TF, _TF, _TF, _TF, _TF,
        _MWTF, _TF, _TF, {
          v: 85,
          b: 71,
          V: 36,
          r: 1
        },
        _MWTF, _EMP, {
          v: 0,
          b: 71,
          V: 24,
          r: 0
        },
        _EMP, _EMP, _EMP, _EMP, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 21,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 20,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        }, {
          v: 0,
          b: 71,
          V: 23,
          r: 0
        },
        _MWLF, _WF, {
          v: 62,
          b: 71,
          V: 40,
          r: 2
        },
        _LF, _LF, {
          v: 62,
          b: 71,
          V: 12,
          r: 2
        },
        _MWLF, {
          v: 84,
          b: 71,
          V: 26,
          r: 3
        }, {
          v: 84,
          b: 71,
          V: 17,
          r: 3
        },
        _SF, _MWSF
      ],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 16,
        r: 0
      }, _MWSF, _MWSF, {
        v: 84,
        b: 52,
        V: -1,
        r: 0
      }, _MWSF, _MWSF, _MWTF, _MWTF, _MWSF, {
        v: 85,
        b: 71,
        V: 41,
        r: 0
      }, _MWSF, {
        v: 85,
        b: 71,
        V: 41,
        r: 0
      }, _MWTF, _MW, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF, _MWTF, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, {
        v: 0,
        b: 151,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 150,
        V: -1,
        r: 1
      }, _LF, _LF, _LF, _LF, _WF, _MWLF, _SF, _SF, {
        v: 84,
        b: 71,
        V: 18,
        r: 2
      }, _MWSF],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _MWSF, _SF, _SF, _SF, _SF, {
        v: 84,
        b: 71,
        V: 35,
        r: 2
      }, {
        v: 84,
        b: 71,
        V: 35,
        r: 2
      }, _SF, _SF, _SF, _SF, {
        v: 84,
        b: 71,
        V: 35,
        r: 2
      }, {
        v: 84,
        b: 71,
        V: 35,
        r: 2
      }, _SF, _SF, _SF, _SF, {
        v: 84,
        b: 71,
        V: 33,
        r: 2
      }, _MWTF, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, {
        v: 0,
        b: 151,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 150,
        V: -1,
        r: 1
      }, _LF, _LF, _LF, _LF, _WF, {
        v: 67,
        b: 71,
        V: 41,
        r: 1
      }, _SF, _SF, {
        v: 84,
        b: 71,
        V: 18,
        r: 2
      }, _MWSF],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _MWSF, {
        v: 84,
        b: 71,
        V: 9,
        r: 0
      }, _SF, _SF, _SF, _SF, _SF, {
        v: 84,
        b: 151,
        V: -1,
        r: 1
      }, _SF, _SF, {
        v: 84,
        b: 151,
        V: -1,
        r: 1
      }, _SF, _SF, _SF, _SF, _SF, _SF, {
        v: 85,
        b: 71,
        V: 33,
        r: 2
      }, _MWTF, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 23,
        r: 0
      }, _MWLF, {
        v: 62,
        b: 71,
        V: 39,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 39,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 23,
        r: 3
      }, _WF, {
        v: 62,
        b: 71,
        V: 23,
        r: 2
      }, _MWLF, {
        v: 84,
        b: 71,
        V: 26,
        r: 2
      }, _SF, {
        v: 84,
        b: 71,
        V: 16,
        r: 2
      }, _MWSF, {
        v: 0,
        b: 71,
        V: 16,
        r: 1
      }],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _MWSF, {
        v: 84,
        b: 71,
        V: 10,
        r: 2
      }, _SF, _SF, _SF, _MWSF, _MWSF, {
        v: 84,
        b: 149,
        V: -1,
        r: 2
      }, {
        v: 85,
        b: 150,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 150,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 149,
        V: -1,
        r: 2
      }, _MWSF, _MWSF, _SF, _SF, _MWTF, _MWSF, _MWTF, _MWTF, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _MWLF, _MWLF, _MWLF, _MWLF, {
        v: 0,
        b: 52,
        V: -1,
        r: 0
      }, _MWLF, _MWLF, _MWSF, _MWSF, _MWSF, _MWSF],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _MWSF, _MWSF, _MWSF, {
        v: 84,
        b: 71,
        V: 33,
        r: 0
      }, _SF, _MWSF, {
        v: 84,
        b: 71,
        V: 32,
        r: 0
      }, {
        v: 84,
        b: 142,
        V: -1,
        r: 3
      }, {
        v: 84,
        b: 140,
        V: -1,
        r: 1
      }, {
        v: 85,
        b: 146,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 142,
        V: -1,
        r: 2
      }, {
        v: 84,
        b: 151,
        V: -1,
        r: 2
      }, {
        v: 84,
        b: 150,
        V: -1,
        r: 1
      }, _SF, {
        v: 84,
        b: 71,
        V: 33,
        r: 2
      }, _MWTF, {
        v: 0,
        b: 71,
        V: 37,
        r: 1
      }, {
        v: 0,
        b: 71,
        V: 38,
        r: 1
      }, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, _SF, _SF, {
        v: 0,
        b: 71,
        V: 17,
        r: 0
      }],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _MWSF, {
        v: 84,
        b: 71,
        V: 22,
        r: 0
      }, _SF, _MWSF, _SF, {
        v: 84,
        b: 71,
        V: 34,
        r: 3
      }, _TF, {
        v: 85,
        b: 140,
        V: -1,
        r: 2
      }, {
        v: 84,
        b: 71,
        V: 34,
        r: 3
      }, _SF, _MWSF, _SF, {
        v: 84,
        b: 71,
        V: 38,
        r: 0
      }, _MWTF, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 32,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 24,
        r: 0
      }],
      [_EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 17,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 26,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 24,
        r: 0
      }, _EMP, _MWSF, _MW, {
        v: 84,
        b: 32,
        V: -1,
        r: 0
      }, _MWSF, {
        v: 84,
        b: 142,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 148,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 146,
        V: -1,
        r: 1
      }, {
        v: 85,
        b: 146,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 148,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 142,
        V: -1,
        r: 1
      }, _MWSF, {
        v: 84,
        b: 32,
        V: -1,
        r: 0
      }, _MW, _MWTF, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 35,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 31,
        r: 0
      }],
      [_EMP, _EMP, _EMP, _MWTF, _MWTF, _MWTF, _MWTF, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, {
        v: 0,
        b: 70,
        V: -1,
        r: 3
      }, _TF, _TF, _MWSF, {
        v: 84,
        b: 140,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 71,
        V: 34,
        r: 1
      }, {
        v: 85,
        b: 140,
        V: -1,
        r: 2
      }, _TF, {
        v: 84,
        b: 71,
        V: 34,
        r: 1
      }, {
        v: 84,
        b: 140,
        V: -1,
        r: 2
      }, _MWSF, _TF, _TF, {
        v: 0,
        b: 70,
        V: -1,
        r: 1
      }, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 23,
        r: 0
      }, _EMP, _EMP, _EMP, _WF],
      [_EMP, _EMP, _EMP, _MWTF, {
        v: 85,
        b: 71,
        V: 33,
        r: 1
      }, {
        v: 85,
        b: 71,
        V: 33,
        r: 1
      }, _MWTF, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, {
        v: 0,
        b: 70,
        V: -1,
        r: 3
      }, {
        v: 85,
        b: 70,
        V: -1,
        r: 2
      }, _SF, {
        v: 84,
        b: 144,
        V: -1,
        r: 1
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 1
      }, {
        v: 84,
        b: 145,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 142,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 146,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 147,
        V: -1,
        r: 3
      }, {
        v: 84,
        b: 142,
        V: -1,
        r: 1
      }, {
        v: 84,
        b: 146,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 3
      }, {
        v: 84,
        b: 144,
        V: -1,
        r: 1
      }, _SF, {
        v: 85,
        b: 70,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 70,
        V: -1,
        r: 1
      }, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _WWLF, _WWLF, {
        v: 67,
        b: 30,
        V: -1,
        r: 2
      }, _WWLF, _WWLF, _WF, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }],
      [_EMP, _EMP, _EMP, _MWSF, _SF, _SF, _MWSF, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, {
        v: 0,
        b: 32,
        V: -1,
        r: 3
      }, _TF, _TF, _TF, _MWSF, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 85,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, _MWSF, _TF, _TF, _TF, {
        v: 0,
        b: 32,
        V: -1,
        r: 1
      }, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 16,
        r: 0
      }, _WWLF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 6,
        r: 1
      }, _WWLF, _WF, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }, _LF, _LF, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }],
      [_EMP, _EMP, _EMP, {
        v: 84,
        b: 71,
        V: 41,
        r: 1
      }, _SF, _SF, {
        v: 84,
        b: 71,
        V: 41,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, {
        v: 0,
        b: 70,
        V: -1,
        r: 3
      }, {
        v: 85,
        b: 70,
        V: -1,
        r: 0
      }, _SF, _SF, _SF, {
        v: 84,
        b: 144,
        V: -1,
        r: 1
      }, {
        v: 84,
        b: 144,
        V: -1,
        r: 1
      }, _SF, _SF, {
        v: 84,
        b: 144,
        V: -1,
        r: 1
      }, {
        v: 84,
        b: 144,
        V: -1,
        r: 1
      }, _SF, _SF, _SF, {
        v: 85,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 70,
        V: -1,
        r: 1
      }, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, {
        v: 67,
        b: 30,
        V: -1,
        r: 1
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 19,
        r: 2
      }, _WWWF, _WF, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }, _LF, _LF, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }],
      [_EMP, _EMP, _EMP, _MWTF, {
        v: 85,
        b: 71,
        V: 36,
        r: 2
      }, {
        v: 85,
        b: 71,
        V: 37,
        r: 3
      }, _MWTF, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, {
        v: 0,
        b: 70,
        V: -1,
        r: 3
      }, {
        v: 85,
        b: 71,
        V: 39,
        r: 0
      }, _TF, _TF, _TF, _TF, _TF, _TF, _TF, _TF, _TF, _TF, {
        v: 85,
        b: 71,
        V: 35,
        r: 1
      }, {
        v: 0,
        b: 70,
        V: -1,
        r: 1
      }, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _WWLF, {
        v: 67,
        b: 71,
        V: 8,
        r: 3
      }, _LF, {
        v: 67,
        b: 71,
        V: 0,
        r: 1
      }, _WWLF, _WF, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 71,
        V: 23,
        r: 1
      }, {
        v: 67,
        b: 71,
        V: 23,
        r: 1
      }, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }],
      [_EMP, _EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 1
      }, _MWTF, _MWTF, _MWTF, _MWTF, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, {
        v: 0,
        b: 70,
        V: -1,
        r: 3
      }, {
        v: 84,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 32,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 32,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 70,
        V: -1,
        r: 1
      }, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 23,
        r: 0
      }, _WWLF, _WWLF, _WWLF, _WWLF, _WWLF, _WF, _SWLF, _SWLF, _SWLF, _SWLF, _EMP, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        }, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP,
        _EMP, _EMP, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 21,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 20,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        },
        _WF, _WF, _WF, _WF, _WF, _WF, _WF, _SWLF, _WF, {
          v: 62,
          b: 71,
          V: 21,
          r: 1
        },
        _SWWF, _LF, _LF, _LF, {
          v: 67,
          b: 69,
          V: -1,
          r: 3
        }
      ],
      [{
        v: 0,
        b: 86,
        V: 26,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 33,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 32,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 33,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 32,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 24,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 2
      }, _SWLF, _SWLF, _SWLF, {
        v: 62,
        b: 31,
        V: -1,
        r: 0
      }, _SWWF, _SWWF, {
        v: 67,
        b: 51,
        V: -1,
        r: 2
      }, _SWLF, _SWLF, _SWLF, _SWLF],
      [{
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 28,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 62,
        b: 71,
        V: 23,
        r: 0
      }, _SWLF, {
        v: 67,
        b: 71,
        V: 13,
        r: 1
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 27,
        r: 1
      }, _LF, _LF, _SWLF, {
        v: 67,
        b: 71,
        V: 23,
        r: 3
      }, _LF, {
        v: 67,
        b: 69,
        V: -1,
        r: 3
      }],
      [{
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 27,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, _WF, {
        v: 67,
        b: 31,
        V: -1,
        r: 1
      }, _LF, _LF, _LF, _LF, _LF, _LF, _SWLF, _LF, _LF, {
        v: 67,
        b: 31,
        V: -1,
        r: 3
      }],
      [{
        v: 0,
        b: 86,
        V: 30,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 42,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 43,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 34,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 62,
        b: 71,
        V: 23,
        r: 0
      }, _SWLF, {
        v: 67,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 0
      }, _LF, _LF, _SWLF, {
        v: 67,
        b: 31,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 0
      }, _SWLF, {
        v: 0,
        b: 71,
        V: 16,
        r: 1
      }],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 7,
        r: 0
      }, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 84,
        b: 71,
        V: 23,
        r: 0
      }, {
        v: 84,
        b: 151,
        V: -1,
        r: 0
      }, {
        v: 84,
        b: 71,
        V: 23,
        r: 0
      }, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 0
      }, _SWLF, {
        v: 67,
        b: 71,
        V: 15,
        r: 0
      }, {
        v: 67,
        b: 71,
        V: 4,
        r: 0
      }, {
        v: 67,
        b: 71,
        V: 3,
        r: 0
      }, {
        v: 67,
        b: 71,
        V: 14,
        r: 0
      }, _LF, _LF, _LF, _LF, _LF, _SWLF, {
        v: 0,
        b: 71,
        V: 26,
        r: 1
      }],
      [_EMP, _EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 26,
        r: 1
      }, _WF, _WF, _WWWF, {
        v: 62,
        b: 71,
        V: 16,
        r: 2
      }, _WF, _WF, _WWWF, {
        v: 0,
        b: 31,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 31,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, _EMP, {
        v: 0,
        b: 86,
        V: 15,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _EMP, _EMP, _EMP, _MWWF, _MWWF, _MWWF, {
        v: 62,
        b: 150,
        V: -1,
        r: 3
      }, _MWWF, _MWWF, _MWWF, {
        v: 0,
        b: 71,
        V: 16,
        r: 0
      }, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 23,
        r: 0
      }, _SWLF, {
        v: 67,
        b: 71,
        V: 4,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 7,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 7,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 3,
        r: 1
      }, _LF, _WF, _WF, _WF, _LF, {
        v: 67,
        b: 69,
        V: -1,
        r: 3
      }],
      [_EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, _WWWF, {
        v: 62,
        b: 71,
        V: 17,
        r: 1
      }, _WF, {
        v: 62,
        b: 71,
        V: 22,
        r: 1
      }, _WWWF, {
        v: 62,
        b: 71,
        V: 17,
        r: 2
      }, _WF, {
        v: 62,
        b: 71,
        V: 15,
        r: 1
      }, _WWWF, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, _EMP, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }, _MWWF, {
        v: 62,
        b: 71,
        V: 16,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 39,
        r: 1
      }, _WF, _WF, _WF, _MWWF, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 148,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }, _LF, _LF, _LF, _LF, _LF, _WF, _WF, _WF, _LF, {
        v: 67,
        b: 69,
        V: -1,
        r: 3
      }],
      [_EMP, _EMP, _WWWF, {
        v: 62,
        b: 71,
        V: 10,
        r: 0
      }, _WF, {
        v: 62,
        b: 71,
        V: 0,
        r: 1
      }, _WWWF, {
        v: 62,
        b: 71,
        V: 1,
        r: 3
      }, _WF, {
        v: 62,
        b: 71,
        V: 8,
        r: 1
      }, _WWWF, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _MW, _MWSF, _MWSF, _MWWF, _WF, _WF, _WF, _WF, {
        v: 62,
        b: 71,
        V: 27,
        r: 2
      }, _MWWF, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 140,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 23,
        r: 0
      }, {
        v: 67,
        b: 71,
        V: 27,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 8,
        r: 2
      }, {
        v: 67,
        b: 71,
        V: 27,
        r: 3
      }, _LF, _LF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 12,
        r: 2
      }, _SWLF],
      [_EMP, {
        v: 0,
        b: 71,
        V: 16,
        r: 0
      }, _WWWF, {
        v: 62,
        b: 71,
        V: 9,
        r: 2
      }, _WF, _WF, _WWWF, _WF, _WF, {
        v: 62,
        b: 71,
        V: 12,
        r: 2
      }, _WW, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 71,
        V: 16,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 16,
        r: 2
      }, _MWSF, {
        v: 84,
        b: 71,
        V: 16,
        r: 1
      }, {
        v: 84,
        b: 71,
        V: 19,
        r: 1
      }, _MWSF, {
        v: 62,
        b: 32,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 70,
        V: -1,
        r: 0
      }, _WF, _WF, {
        v: 62,
        b: 71,
        V: 39,
        r: 2
      }, _MWWF, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 148,
        V: -1,
        r: 0
      }, _SWLF, _SWLF, _SWLF, _SWLF, _SWLF, {
        v: 67,
        b: 31,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 31,
        V: -1,
        r: 0
      }, _SWLF, _SWLF, _SWLF, _SWLF, {
        v: 0,
        b: 71,
        V: 24,
        r: 1
      }],
      [_EMP, {
        v: 0,
        b: 71,
        V: 17,
        r: 0
      }, _WW, _WWWF, _WWWF, _WWWF, _WWWF, _WWWF, _WWWF, _WW, _WW, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, {
        v: 0,
        b: 71,
        V: 17,
        r: 0
      }, _MWSF, _SF, _SF, _MWSF, _LF, {
        v: 67,
        b: 70,
        V: -1,
        r: 3
      }, _WF, _WF, _WF, _MWWF, {
        v: 84,
        b: 71,
        V: 23,
        r: 0
      }, _SF, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 140,
        V: -1,
        r: 0
      }, _SWLF, {
        v: 62,
        b: 71,
        V: 20,
        r: 1
      }, _WF, {
        v: 62,
        b: 71,
        V: 28,
        r: 0
      }, _SWWF, _WF, _WF, _WF, {
        v: 62,
        b: 71,
        V: 20,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 13,
        r: 1
      }, _SWWF],
      [_EMP, _EMP, _EMP, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, _WF, _WF, _WF, _WF, {
        v: 62,
        b: 69,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _MWSF, _SF, _SF, _MWLF, _LF, {
        v: 67,
        b: 70,
        V: -1,
        r: 3
      }, _WF, _WF, _WF, {
        v: 62,
        b: 150,
        V: -1,
        r: 3
      }, {
        v: 84,
        b: 151,
        V: -1,
        r: 0
      }, _SF, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 140,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 69,
        V: -1,
        r: 1
      }, _WF, _WF, _WF, {
        v: 62,
        b: 31,
        V: -1,
        r: 3
      }, _WF, _WF, _WF, _WF, _WF, {
        v: 0,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, _EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, _SWWF, {
        v: 62,
        b: 71,
        V: 6,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 14,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 15,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 5,
        r: 0
      }, _SWWF, {
        v: 62,
        b: 71,
        V: 23,
        r: 2
      }, _WF, _WF, _WF, {
        v: 62,
        b: 69,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 16,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _MWSF, {
        v: 84,
        b: 71,
        V: 18,
        r: 3
      }, _SF, {
        v: 67,
        b: 150,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 142,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 71,
        V: 40,
        r: 2
      }, _WF, _WF, _WF, {
        v: 62,
        b: 150,
        V: -1,
        r: 3
      }, {
        v: 84,
        b: 151,
        V: -1,
        r: 3
      }, _SF, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 143,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 144,
        V: -1,
        r: 3
      }, _WF, _WF, {
        v: 62,
        b: 31,
        V: -1,
        r: 3
      }, _WF, _WF, _WF, {
        v: 62,
        b: 71,
        V: 12,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 12,
        r: 3
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, _EMP, _EMP, _SWWF, _WF, _WF, _WF, _WF, _SWWF, _SWLF, {
        v: 67,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 67,
        b: 31,
        V: -1,
        r: 2
      }, _SWLF, _SWLF, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 13,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _MWSF, _MWSF, _MWSF, _MWLF, {
        v: 67,
        b: 144,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 70,
        V: -1,
        r: 3
      }, _WF, _WF, {
        v: 62,
        b: 71,
        V: 39,
        r: 2
      }, _MWWF, {
        v: 84,
        b: 71,
        V: 23,
        r: 0
      }, _SF, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 140,
        V: -1,
        r: 0
      }, _SWWF, _SWWF, _SWWF, _SWWF, _SWWF, {
        v: 67,
        b: 31,
        V: -1,
        r: 2
      }, {
        v: 67,
        b: 31,
        V: -1,
        r: 2
      }, _SWLF, _SWLF, _SWLF, _SWLF, {
        v: 0,
        b: 71,
        V: 26,
        r: 1
      }],
      [_EMP, _EMP, _EMP, _SWWF, {
        v: 62,
        b: 71,
        V: 0,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 2,
        r: 0
      }, _WF, _WF, {
        v: 67,
        b: 31,
        V: -1,
        r: 1
      }, _LF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 23,
        r: 0
      }, _SWLF, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }, _MWLF, {
        v: 67,
        b: 148,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 70,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 151,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 151,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 27,
        r: 2
      }, _MWWF, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 142,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 148,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 140,
        V: -1,
        r: 1
      }, {
        v: 0,
        b: 148,
        V: -1,
        r: 0
      }, _SWLF, {
        v: 67,
        b: 71,
        V: 16,
        r: 1
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 26,
        r: 1
      }, {
        v: 67,
        b: 71,
        V: 23,
        r: 2
      }, {
        v: 67,
        b: 71,
        V: 17,
        r: 1
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 3
      }],
      [_EMP, _EMP, _EMP, _SWWF, _WF, _WF, _WF, _WF, _SWWF, {
        v: 67,
        b: 71,
        V: 12,
        r: 0
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 12,
        r: 2
      }, _SWLF, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _EMP, _EMP, _EMP, _MWLF, _MWLF, _MWLF, {
        v: 62,
        b: 150,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 150,
        V: -1,
        r: 3
      }, _MWWF, _MWWF, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, _EMP, _EMP, _WF, _WF, {
        v: 67,
        b: 31,
        V: -1,
        r: 1
      }, _LF, _LF, _LF, _LF, _LF, _LF, {
        v: 67,
        b: 31,
        V: -1,
        r: 3
      }],
      [_EMP, _EMP, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }, _SWWF, {
        v: 62,
        b: 71,
        V: 1,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 8,
        r: 2
      }, _WF, {
        v: 62,
        b: 71,
        V: 23,
        r: 2
      }, _SWWF, {
        v: 67,
        b: 71,
        V: 23,
        r: 2
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 20,
        r: 2
      }, _SWLF, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 84,
        b: 71,
        V: 23,
        r: 0
      }, _SF, _SF, {
        v: 84,
        b: 71,
        V: 23,
        r: 0
      }, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, _EMP, _EMP, _WF, _WF, {
        v: 67,
        b: 31,
        V: -1,
        r: 1
      }, _LF, _LF, _LF, _LF, _LF, _LF, {
        v: 67,
        b: 31,
        V: -1,
        r: 3
      }],
      [_EMP, _EMP, _EMP, _SWWF, _SWWF, _SWWF, {
        v: 62,
        b: 31,
        V: -1,
        r: 0
      }, _SWWF, _SWWF, _SWLF, {
        v: 67,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 0
      }, _SWLF, _SWLF, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _SF, _SF, _SF, _SF, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 21,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 20,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 15,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 36,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 4,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 45,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 32,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 25,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 24,
        r: 0
      }],
      [{
        v: 0,
        b: 86,
        V: 17,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 4,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 5,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 3,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 37,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 35,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 29,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 31,
        r: 0
      }],
      [{
        v: 0,
        b: 86,
        V: 16,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 11,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 10,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 9,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 38,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 1,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 34,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _LF, _LF, _LF, {
        v: 67,
        b: 151,
        V: -1,
        r: 1
      }, _LF, _LF, _LF],
      [{
        v: 0,
        b: 86,
        V: 40,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 0,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 39,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, _EMP, _EMP, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, _SWWF, _SWWF, _SW, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, _SWWF, _SWWF, _SWWF, {
        v: 0,
        b: 71,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, {
        v: 67,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 140,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 1
      }, {
        v: 0,
        b: 71,
        V: 26,
        r: 1
      }, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }, _LF, _LF, _LF, _SWWF, {
        v: 62,
        b: 71,
        V: 27,
        r: 1
      }, {
        v: 62,
        b: 71,
        V: 27,
        r: 1
      }, _WF, _WF, _WF, {
        v: 62,
        b: 69,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, {
        v: 67,
        b: 69,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 111,
        V: -1,
        r: 1
      }, {
        v: 0,
        b: 140,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 111,
        V: -1,
        r: 1
      }, _EMP, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, _MWLF, _MWLF, _MWLF, _MWLF, _MWLF, _MWLF, _MWLF, _MWLF, _MWWF, _MWWF, _MWWF, _MWWF, _MWWF, _MWWF,
        _EMP, {
          v: 0,
          b: 86,
          V: 14,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 12,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 6,
          r: 0
        }, {
          v: 67,
          b: 69,
          V: -1,
          r: 1
        },
        _LF, _LF, _LF, {
          v: 62,
          b: 31,
          V: -1,
          r: 1
        },
        _WF, _WF, _WF, _WF, _WF, {
          v: 62,
          b: 69,
          V: -1,
          r: 3
        },
        _EMP, {
          v: 0,
          b: 86,
          V: 23,
          r: 0
        }, {
          v: 0,
          b: 86,
          V: 22,
          r: 0
        },
        _EMP, {
          v: 67,
          b: 151,
          V: -1,
          r: 1
        }, {
          v: 0,
          b: 140,
          V: -1,
          r: 3
        }, {
          v: 0,
          b: 140,
          V: -1,
          r: 3
        }, {
          v: 0,
          b: 148,
          V: -1,
          r: 0
        }, {
          v: 0,
          b: 140,
          V: -1,
          r: 3
        }, {
          v: 0,
          b: 140,
          V: -1,
          r: 3
        }, {
          v: 67,
          b: 151,
          V: -1,
          r: 1
        }
      ],
      [_EMP, _MWLF, {
        v: 67,
        b: 71,
        V: 35,
        r: 2
      }, _LF, {
        v: 67,
        b: 142,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 146,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 146,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 140,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 140,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 150,
        V: -1,
        r: 1
      }, _WF, _WF, {
        v: 62,
        b: 71,
        V: 17,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 16,
        r: 1
      }, _MWWF, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 3,
        r: 1
      }, _SWWF, {
        v: 62,
        b: 71,
        V: 22,
        r: 2
      }, {
        v: 62,
        b: 71,
        V: 20,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 11,
        r: 2
      }, _WF, _SWWF, _SWWF, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, {
        v: 67,
        b: 69,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 111,
        V: -1,
        r: 1
      }, {
        v: 0,
        b: 140,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 111,
        V: -1,
        r: 1
      }, _EMP, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }],
      [_EMP, _MWLF, _LF, {
        v: 67,
        b: 70,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 149,
        V: -1,
        r: 2
      }, _MW, _MW, _MWWF, _WF, _WF, _WF, _WF, _MWWF, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }, {
        v: 67,
        b: 71,
        V: 23,
        r: 3
      }, _SWLF, _SWLF, _SWWF, _SWWF, _SWWF, _SWWF, {
        v: 62,
        b: 31,
        V: -1,
        r: 2
      }, _SWWF, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, {
        v: 67,
        b: 69,
        V: -1,
        r: 3
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 140,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 69,
        V: -1,
        r: 1
      }],
      [{
        v: 0,
        b: 71,
        V: 24,
        r: 1
      }, _MWLF, _LF, {
        v: 67,
        b: 70,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 151,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 151,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 151,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 142,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 146,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 150,
        V: -1,
        r: 1
      }, _WF, {
        v: 62,
        b: 71,
        V: 10,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 7,
        r: 3
      }, _WF, {
        v: 62,
        b: 32,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, {
        v: 0,
        b: 69,
        V: -1,
        r: 2
      }, _SW, {
        v: 62,
        b: 71,
        V: 14,
        r: 0
      }, {
        v: 62,
        b: 71,
        V: 5,
        r: 0
      }, _WF, _WF, _WF, _WF, _SWWF, {
        v: 0,
        b: 71,
        V: 16,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }, _EMP, _LF, {
        v: 67,
        b: 71,
        V: 45,
        r: 0
      }, {
        v: 67,
        b: 71,
        V: 45,
        r: 0
      }, {
        v: 67,
        b: 151,
        V: -1,
        r: 1
      }, _LF, _LF, {
        v: 67,
        b: 71,
        V: 24,
        r: 1
      }],
      [_EMP, _MWLF, _LF, {
        v: 67,
        b: 70,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 70,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 140,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 142,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 149,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 144,
        V: -1,
        r: 0
      }, _WF, {
        v: 62,
        b: 71,
        V: 7,
        r: 3
      }, _WF, {
        v: 62,
        b: 32,
        V: -1,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, {
        v: 0,
        b: 71,
        V: 16,
        r: 0
      }, _SWWF, _WF, _WF, _WF, _WF, _WF, {
        v: 62,
        b: 71,
        V: 13,
        r: 2
      }, _SWWF, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }],
      [{
        v: 0,
        b: 71,
        V: 17,
        r: 1
      }, _MWLF, _LF, _LF, {
        v: 67,
        b: 71,
        V: 3,
        r: 0
      }, {
        v: 67,
        b: 148,
        V: -1,
        r: 3
      }, _MWLF, {
        v: 67,
        b: 146,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 147,
        V: -1,
        r: 3
      }, {
        v: 62,
        b: 149,
        V: -1,
        r: 1
      }, {
        v: 62,
        b: 144,
        V: -1,
        r: 0
      }, _WF, _WF, _WF, _MWWF, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, {
        v: 0,
        b: 71,
        V: 26,
        r: 0
      }, _SWWF, {
        v: 62,
        b: 71,
        V: 12,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 23,
        r: 3
      }, _WF, _WF, {
        v: 62,
        b: 71,
        V: 10,
        r: 3
      }, {
        v: 62,
        b: 71,
        V: 9,
        r: 1
      }, _SWWF, {
        v: 0,
        b: 71,
        V: 17,
        r: 3
      }, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }],
      [{
        v: 0,
        b: 71,
        V: 26,
        r: 1
      }, _MWLF, _LF, _WF, _WF, {
        v: 67,
        b: 146,
        V: -1,
        r: 0
      }, _MWLF, {
        v: 67,
        b: 142,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 142,
        V: -1,
        r: 1
      }, _MW, {
        v: 62,
        b: 144,
        V: -1,
        r: 0
      }, _WF, {
        v: 62,
        b: 144,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 144,
        V: -1,
        r: 0
      }, _MWWF, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _EMP, _SWWF, _SWWF, _SWWF, {
        v: 62,
        b: 31,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 31,
        V: -1,
        r: 0
      }, _SWWF, _SWWF, _SWWF, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 23,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 22,
        r: 0
      }],
      [_EMP, _MWLF, _LF, _WF, _WF, {
        v: 67,
        b: 71,
        V: 10,
        r: 0
      }, _MWLF, {
        v: 67,
        b: 71,
        V: 14,
        r: 3
      }, {
        v: 67,
        b: 140,
        V: -1,
        r: 0
      }, _MWWF, {
        v: 62,
        b: 149,
        V: -1,
        r: 0
      }, _MWWF, {
        v: 62,
        b: 149,
        V: -1,
        r: 0
      }, {
        v: 62,
        b: 149,
        V: -1,
        r: 0
      }, _MWWF, {
        v: 0,
        b: 71,
        V: 16,
        r: 1
      }, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 71,
        V: 24,
        r: 1
      }, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 30,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 31,
        r: 0
      }],
      [_EMP, _MWLF, {
        v: 67,
        b: 71,
        V: 36,
        r: 2
      }, {
        v: 67,
        b: 151,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 71,
        V: 12,
        r: 3
      }, {
        v: 67,
        b: 71,
        V: 9,
        r: 2
      }, _MWLF, {
        v: 67,
        b: 71,
        V: 16,
        r: 2
      }, {
        v: 67,
        b: 140,
        V: -1,
        r: 2
      }, {
        v: 67,
        b: 71,
        V: 17,
        r: 3
      }, {
        v: 67,
        b: 147,
        V: -1,
        r: 2
      }, {
        v: 67,
        b: 142,
        V: -1,
        r: 0
      }, {
        v: 67,
        b: 146,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 142,
        V: -1,
        r: 2
      }, _MW, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }],
      [_EMP, _MWLF, _MWLF, {
        v: 67,
        b: 150,
        V: -1,
        r: 2
      }, _MWLF, _MWLF, _MWLF, {
        v: 67,
        b: 71,
        V: 23,
        r: 2
      }, {
        v: 67,
        b: 142,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 140,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 146,
        V: -1,
        r: 3
      }, {
        v: 67,
        b: 142,
        V: -1,
        r: 2
      }, _LF, {
        v: 67,
        b: 71,
        V: 23,
        r: 2
      }, _MW, {
        v: 0,
        b: 71,
        V: 24,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }],
      [_EMP, _EMP, {
        v: 0,
        b: 71,
        V: 16,
        r: 2
      }, {
        v: 0,
        b: 71,
        V: 16,
        r: 1
      }, {
        v: 0,
        b: 71,
        V: 17,
        r: 1
      }, {
        v: 0,
        b: 71,
        V: 26,
        r: 1
      }, _MW, _MW, _MW, _MW, _MW, _MW, _MW, _MW, _MW, _EMP, {
        v: 0,
        b: 86,
        V: 14,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 12,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 6,
        r: 0
      }],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, {
        v: 0,
        b: 86,
        V: 40,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 1,
        r: 0
      }, {
        v: 0,
        b: 86,
        V: 41,
        r: 0
      }]
    ]
  }, HOUSE[HOUSEID.__BUNKER0__] = {
    width: 0,
    height: 0,
    radiation: 0,
    building: [
      [_EMP],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _SC, _SC, _SC, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC],
      [_EMP, _EMP, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC,
        _SC],
      [_EMP, _EMP, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC,
        _SC, _SC
      ],
      [_EMP, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC,
        _SC, _SC
      ],
      [_EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC,
        _SC, _SC
      ],
      [_EMP, _SC, _SC, _SC, _SC, _SC, _SC, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _EMP, _SC, _SC, _SC,
        _SC, _SC, _SC, _SC
      ],
      [_EMP, _SC, _SC, _SC, _EMP, _EMP, _EMP, _EMP, _SC, _BWTF, _BWTF, {
        v: 85,
        b: 52,
        V: -1,
        r: 2
      }, _BWTF, _BWTF, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC],
      [_EMP, _EMP, _EMP, _EMP, _EMP, _SC, _SC, _SC, _SC, _BWTF, _TF, _TF, _TF, _BWTF, _SC, _EMP, _EMP, _SC, _SC,
        _SC, _SC, _SC, _SC
      ],
      [_EMP, _EMP, _SC, _SC, _SC, _SC, _BWTF, _BWTF, _BWTF, _BWTF, _TF, _TF, _TF, _BWTF, _SC, _SC, _EMP, _SC, _SC,
        _SC, _SC, _SC
      ],
      [_EMP, _SC, _SC, _SC, _SC, _SC, _BWTF, {
        v: 85,
        b: 71,
        V: 9,
        r: 0
      }, {
        v: 85,
        b: 71,
        V: 58,
        r: 0
      }, _BWTF, {
        v: 85,
        b: 71,
        V: 33,
        r: 3
      }, _TF, {
        v: 85,
        b: 71,
        V: 33,
        r: 3
      }, _BWTF, _SC, _SC, _EMP, _SC, _SC, _SC, _SC, _SC, _SC],
      [_EMP, _SC, _SC, _SC, _SC, _SC, _BWTF, {
        v: 85,
        b: 71,
        V: 10,
        r: 2
      }, _TF, _BWTF, _BWTF, _SF, _BWSF, _BWSF, _BW, _SC, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC],
      [_EMP, _SC, _SC, _SC, _SC, _SC, _BWTF, _TF, _TF, _SF, _SF, _SF, _SF, {
        v: 84,
        b: 71,
        V: 51,
        r: 1
      }, _BWSF, _SC, _SC, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC],
      [_EMP, _SC, _SC, _SC, _SC, _BWTF, _BWTF, _BWTF, _BWTF, _BWTF, _SF, _SF, _SF, _SF, _BWSF, _BW, _SC, _SC,
        _EMP, _SC, _SC, _SC, _SC, _SC
      ],
      [_EMP, _SC, _SC, _SC, _SC, _BWTF, _SF, _SF, _SF, _BWTF, _BWTF, _SF, _SF, _SF, _BWSF, _BWTF, _BWTF, _SC,
        _EMP, _SC, _SC, _SC, _SC
      ],
      [_EMP, _SC, _SC, _SC, _SC, _BWTF, _SF, _BWTF, _SF, _SF, _SF, _SF, _BWTF, _TF, _TF, {
        v: 85,
        b: 71,
        V: 55,
        r: 2
      }, _BWTF, _SC, _EMP, _SC, _SC, _SC, _SC],
      [_EMP, _SC, _SC, _SC, _SC, _BWTF, _SF, _BWTF, _BWTF, _BWTF, _BWTF, _SF, _BWTF, {
        v: 85,
        b: 71,
        V: 28,
        r: 3
      }, _TF, {
        v: 85,
        b: 71,
        V: 21,
        r: 1
      }, _BWTF, _SC, _EMP, _EMP, _SC, _SC],
      [_EMP, _SC, _SC, _SC, _SC, _BWTF, _TF, {
        v: 85,
        b: 71,
        V: 23,
        r: 1
      }, {
        v: 85,
        b: 71,
        V: 53,
        r: 3
      }, {
        v: 85,
        b: 71,
        V: 56,
        r: 2
      }, _BWTF, _SF, _BWTF, _BWTF, _BWTF, _BWTF, _BWTF, _SC, _EMP, _EMP, _SC, _SC, _SC],
      [_EMP, _EMP, _EMP, _SC, _SC, _BWTF, _TF, _TF, _TF, {
        v: 85,
        b: 71,
        V: 53,
        r: 2
      }, _BWTF, _SF, _SF, _TF, {
        v: 85,
        b: 71,
        V: 51,
        r: 0
      }, {
        v: 85,
        b: 71,
        V: 48,
        r: 0
      }, _BWTF, _SC, _SC],
      [_EMP, _SC, _SC, _SC, _SC, _BWTF, _TF, _TF, _TF, _TF, _BWTF, _BWTF, _BWTF, _TF, _TF, _TF, _BWTF, _SC, _SC,
        _SC
      ],
      [_EMP, _SC, _SC, _SC, _SC, _BWTF, {
        v: 85,
        b: 71,
        V: 20,
        r: 3
      }, {
        v: 85,
        b: 71,
        V: 11,
        r: 2
      }, {
        v: 85,
        b: 71,
        V: 49,
        r: 3
      }, _TF, {
        v: 85,
        b: 71,
        V: 54,
        r: 2
      }, _BWTF, _BWTF, {
        v: 85,
        b: 71,
        V: 48,
        r: 2
      }, {
        v: 85,
        b: 71,
        V: 50,
        r: 2
      }, {
        v: 85,
        b: 71,
        V: 49,
        r: 3
      }, _BWTF, _SC, _SC, _SC, _SC, _SC, _SC],
      [_EMP, _EMP, _SC, _SC, _SC, _BWTF, _BWTF, _BWTF, _BWTF, _BWTF, _BWTF, _BWTF, _BWTF, _BWTF, _BWTF, _BWTF,
        _BWTF, _SC, _SC, _SC, _SC, _SC, _SC
      ],
      [_EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC,
        _SC, _SC
      ],
      [_EMP, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC,
        _SC
      ],
      [_EMP, _EMP, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC,
        _SC],
      [_EMP, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC],
      [_EMP, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC, _SC],
      [_EMP, _EMP, _EMP, _EMP, _SC, _SC, _SC, _EMP, _EMP, _EMP, _EMP, _SC, _SC, _SC, _SC, _SC]
    ]
  })
} catch (t) {}
for (i = 0; i < HOUSE.length; i++) {
  var house = HOUSE[i],
    housePlan = HOUSE[i].building;
  house.height = housePlan.length;
  for (var j = 0; j < housePlan.length; j++) house.width = window.Math.max(housePlan[j].length, house.width)
}
var AREASTOITEM = [];
AREASTOITEM[AREAS.__FIRE__] = IID.__CAMPFIRE__, AREASTOITEM[AREAS.__BBQ__] = IID.__CAMPFIRE_BBQ__, AREASTOITEM[AREAS
    .__WORKBENCH__] = IID.__WORKBENCH__, AREASTOITEM[AREAS.__WORKBENCH2__] = IID.__WORKBENCH2__, AREASTOITEM[AREAS
    .__TESLA__] = IID.__TESLA__, AREASTOITEM[AREAS.__SMELTER__] = IID.__SMELTER__, AREASTOITEM[AREAS.__WEAVING__] = IID
  .__WEAVING__, AREASTOITEM[AREAS.__COMPOST__] = IID.__COMPOST__, AREASTOITEM[AREAS.__AGITATOR__] = IID.__AGITATOR__,
  AREASTOITEM[AREAS.__EXTRACTOR__] = IID.__EXTRACTOR__;
var INVENTORY2 = null,
  ENTITIES2 = null,
  PARTICLES2 = null,
  LOOT2 = null,
  RESOURCES2 = null,
  LIGHTFIRE2 = null,
  AI2 = null,
  GROUND = "#38513D",
  GROUND2 = "#0B1D23",
  BRKIT = [{
    id: IID.__STONE__,
    amount: 50,
    life: 255
  }, {
    id: IID.__WOOD__,
    amount: 100,
    life: 255
  }, {
    id: IID.__WORKBENCH__,
    amount: 1,
    life: 255
  }],
  KIT = [];
COUNTER = 0, KIT[COUNTER++] = [{
  id: IID.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE__,
  amount: 20,
  life: 255
}, {
  id: IID.__WOOD__,
  amount: 40,
  life: 255
}, {
  id: IID.__ORANGE__,
  amount: 1,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE__,
  amount: 20,
  life: 255
}, {
  id: IID.__WOOD__,
  amount: 40,
  life: 255
}, {
  id: IID.__ORANGE__,
  amount: 3,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE__,
  amount: 30,
  life: 255
}, {
  id: IID.__WOOD__,
  amount: 50,
  life: 255
}, {
  id: IID.__CAMPFIRE__,
  amount: 1,
  life: 255
}, {
  id: IID.__ORANGE__,
  amount: 4,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE__,
  amount: 30,
  life: 255
}, {
  id: IID.__WOOD__,
  amount: 60,
  life: 255
}, {
  id: IID.__CAMPFIRE__,
  amount: 1,
  life: 255
}, {
  id: IID.__WORKBENCH__,
  amount: 1,
  life: 255
}, {
  id: IID.__ORANGE__,
  amount: 5,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE__,
  amount: 40,
  life: 255
}, {
  id: IID.__WOOD__,
  amount: 90,
  life: 255
}, {
  id: IID.__CAMPFIRE__,
  amount: 1,
  life: 255
}, {
  id: IID.__WORKBENCH__,
  amount: 1,
  life: 255
}, {
  id: IID.__RAW_STEAK__,
  amount: 1,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE__,
  amount: 40,
  life: 255
}, {
  id: IID.__WOOD__,
  amount: 150,
  life: 255
}, {
  id: IID.__CAMPFIRE__,
  amount: 1,
  life: 255
}, {
  id: IID.__WORKBENCH__,
  amount: 1,
  life: 255
}, {
  id: IID.__RAW_STEAK__,
  amount: 1,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CAMPFIRE__,
  amount: 1,
  life: 255
}, {
  id: IID.__WORKBENCH__,
  amount: 1,
  life: 255
}, {
  id: IID.__RAW_STEAK__,
  amount: 2,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CAMPFIRE__,
  amount: 1,
  life: 255
}, {
  id: IID.__STEEL__,
  amount: 6,
  life: 255
}, {
  id: IID.__WORKBENCH__,
  amount: 1,
  life: 255
}, {
  id: IID.__RAW_STEAK__,
  amount: 2,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: IID.__WOOD_SPEAR__,
  amount: 1,
  life: 255
}, {
  id: IID.__WORKBENCH__,
  amount: 1,
  life: 255
}, {
  id: IID.__RAW_STEAK__,
  amount: 3,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: IID.__WOOD_BOW__,
  amount: 1,
  life: 255
}, {
  id: IID.__WOOD_ARROW__,
  amount: 20,
  life: 255
}, {
  id: IID.__WORKBENCH__,
  amount: 1,
  life: 255
}, {
  id: IID.__RAW_STEAK__,
  amount: 4,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: IID.__WOOD_WALL__,
  amount: 10,
  life: 255
}, {
  id: IID.__WOOD_DOOR__,
  amount: 2,
  life: 255
}, {
  id: IID.__WORKBENCH__,
  amount: 1,
  life: 255
}, {
  id: IID.__RAW_STEAK__,
  amount: 4,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: IID.__WOOD_WALL__,
  amount: 16,
  life: 255
}, {
  id: IID.__STONE_DOOR__,
  amount: 2,
  life: 255
}, {
  id: IID.__WORKBENCH__,
  amount: 2,
  life: 255
}, {
  id: IID.__RAW_STEAK__,
  amount: 4,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_WALL__,
  amount: 14,
  life: 255
}, {
  id: IID.__STONE_DOOR__,
  amount: 2,
  life: 255
}, {
  id: IID.__WORKBENCH__,
  amount: 2,
  life: 255
}, {
  id: IID.__RAW_STEAK__,
  amount: 4,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: IID.__LANDMINE__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_WALL__,
  amount: 14,
  life: 255
}, {
  id: IID.__STONE_DOOR__,
  amount: 2,
  life: 255
}, {
  id: IID.__WORKBENCH__,
  amount: 2,
  life: 255
}, {
  id: IID.__RAW_STEAK__,
  amount: 4,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: IID.__ARMOR_PHYSIC_1__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_WALL__,
  amount: 14,
  life: 255
}, {
  id: IID.__STONE_DOOR__,
  amount: 2,
  life: 255
}, {
  id: IID.__WORKBENCH__,
  amount: 2,
  life: 255
}, {
  id: IID.__RAW_STEAK__,
  amount: 4,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_WALL__,
  amount: 16,
  life: 255
}, {
  id: IID.__STONE_DOOR__,
  amount: 2,
  life: 255
}, {
  id: IID.__CHEST__,
  amount: 1,
  life: 255
}, {
  id: IID.__WORKBENCH__,
  amount: 2,
  life: 255
}, {
  id: IID.__RAW_STEAK__,
  amount: 4,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: IID.__STEEL_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_WALL__,
  amount: 16,
  life: 255
}, {
  id: IID.__STONE_DOOR__,
  amount: 2,
  life: 255
}, {
  id: IID.__CHEST__,
  amount: 1,
  life: 255
}, {
  id: IID.__WORKBENCH__,
  amount: 2,
  life: 255
}, {
  id: IID.__RAW_STEAK__,
  amount: 4,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__HACHET__,
  amount: 1,
  life: 255
}, {
  id: IID.__STEEL_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_WALL__,
  amount: 16,
  life: 255
}, {
  id: IID.__STONE_DOOR__,
  amount: 2,
  life: 255
}, {
  id: IID.__CHEST__,
  amount: 1,
  life: 255
}, {
  id: IID.__WORKBENCH2__,
  amount: 1,
  life: 255
}, {
  id: IID.__RAW_STEAK__,
  amount: 4,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__STONE_AXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__STEEL_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CAMPFIRE_BBQ__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_WALL__,
  amount: 16,
  life: 255
}, {
  id: IID.__STONE_DOOR__,
  amount: 2,
  life: 255
}, {
  id: IID.__CHEST__,
  amount: 1,
  life: 255
}, {
  id: IID.__WORKBENCH2__,
  amount: 1,
  life: 255
}, {
  id: IID.__RAW_STEAK__,
  amount: 4,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__STONE_AXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__STEEL_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CAMPFIRE_BBQ__,
  amount: 2,
  life: 255
}, {
  id: IID.__STONE_WALL__,
  amount: 20,
  life: 255
}, {
  id: IID.__STONE_DOOR__,
  amount: 4,
  life: 255
}, {
  id: IID.__CHEST__,
  amount: 2,
  life: 255
}, {
  id: IID.__WORKBENCH2__,
  amount: 1,
  life: 255
}, {
  id: IID.__RAW_STEAK__,
  amount: 4,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__STONE_AXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__STEEL_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CAMPFIRE_BBQ__,
  amount: 2,
  life: 255
}, {
  id: IID.__STONE_WALL__,
  amount: 26,
  life: 255
}, {
  id: IID.__STONE_DOOR__,
  amount: 6,
  life: 255
}, {
  id: IID.__CHEST__,
  amount: 3,
  life: 255
}, {
  id: IID.__WORKBENCH2__,
  amount: 1,
  life: 255
}, {
  id: IID.__SEED_ORANGE__,
  amount: 8,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__STONE_AXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__STEEL_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__HEADSCARF__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_WALL__,
  amount: 26,
  life: 255
}, {
  id: IID.__STONE_DOOR__,
  amount: 6,
  life: 255
}, {
  id: IID.__CHEST__,
  amount: 3,
  life: 255
}, {
  id: IID.__WORKBENCH2__,
  amount: 1,
  life: 255
}, {
  id: IID.__SEED_ORANGE__,
  amount: 8,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__STONE_AXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__STEEL_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__HEADSCARF__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_WALL__,
  amount: 26,
  life: 255
}, {
  id: IID.__STONE_DOOR__,
  amount: 6,
  life: 255
}, {
  id: IID.__CHEST__,
  amount: 3,
  life: 255
}, {
  id: IID.__9MM__,
  amount: 1,
  life: 20
}, {
  id: IID.__WORKBENCH2__,
  amount: 1,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__SULFUR_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_AXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__HEADSCARF__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_WALL__,
  amount: 26,
  life: 255
}, {
  id: IID.__STONE_DOOR__,
  amount: 6,
  life: 255
}, {
  id: IID.__CHEST__,
  amount: 3,
  life: 255
}, {
  id: IID.__9MM__,
  amount: 1,
  life: 20
}, {
  id: IID.__WORKBENCH2__,
  amount: 1,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__SULFUR_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_AXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__HEADSCARF__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_WALL__,
  amount: 26,
  life: 255
}, {
  id: IID.__SMELTER__,
  amount: 1,
  life: 255
}, {
  id: IID.__CHEST__,
  amount: 3,
  life: 255
}, {
  id: IID.__9MM__,
  amount: 1,
  life: 20
}, {
  id: IID.__WORKBENCH2__,
  amount: 1,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__SULFUR_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__SULFUR_AXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__HEADSCARF__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_WALL__,
  amount: 26,
  life: 255
}, {
  id: IID.__SMELTER__,
  amount: 1,
  life: 255
}, {
  id: IID.__CHEST__,
  amount: 3,
  life: 255
}, {
  id: IID.__9MM__,
  amount: 1,
  life: 20
}, {
  id: IID.__WORKBENCH2__,
  amount: 1,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__SULFUR_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__SULFUR_AXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CHAPKA__,
  amount: 1,
  life: 255
}, {
  id: IID.__STONE_WALL__,
  amount: 26,
  life: 255
}, {
  id: IID.__SMELTER__,
  amount: 1,
  life: 255
}, {
  id: IID.__CHEST__,
  amount: 3,
  life: 255
}, {
  id: IID.__9MM__,
  amount: 1,
  life: 20
}, {
  id: IID.__WORKBENCH2__,
  amount: 1,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__SULFUR_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__SULFUR_AXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CHAPKA__,
  amount: 1,
  life: 255
}, {
  id: IID.__STEEL_WALL__,
  amount: 14,
  life: 255
}, {
  id: IID.__SMELTER__,
  amount: 1,
  life: 255
}, {
  id: IID.__CHEST__,
  amount: 3,
  life: 255
}, {
  id: IID.__9MM__,
  amount: 1,
  life: 20
}, {
  id: IID.__WORKBENCH2__,
  amount: 1,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__SULFUR_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__SULFUR_AXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CHAPKA__,
  amount: 1,
  life: 255
}, {
  id: IID.__STEEL_WALL__,
  amount: 14,
  life: 255
}, {
  id: IID.__SMELTER__,
  amount: 1,
  life: 255
}, {
  id: IID.__CHEST__,
  amount: 3,
  life: 255
}, {
  id: IID.__DESERT_EAGLE__,
  amount: 1,
  life: 7
}, {
  id: IID.__WORKBENCH2__,
  amount: 1,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__SULFUR_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__SULFUR_AXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CHAPKA__,
  amount: 1,
  life: 255
}, {
  id: IID.__STEEL_WALL__,
  amount: 14,
  life: 255
}, {
  id: IID.__SMELTER__,
  amount: 1,
  life: 255
}, {
  id: IID.__DYNAMITE__,
  amount: 6,
  life: 255
}, {
  id: IID.__DESERT_EAGLE__,
  amount: 1,
  life: 7
}, {
  id: IID.__WORKBENCH2__,
  amount: 1,
  life: 255
}], KIT[COUNTER++] = [{
  id: IID.__SULFUR_PICKAXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__SULFUR_AXE__,
  amount: 1,
  life: 255
}, {
  id: IID.__CHAPKA__,
  amount: 1,
  life: 255
}, {
  id: IID.__STEEL_WALL__,
  amount: 20,
  life: 255
}, {
  id: IID.__SMELTER__,
  amount: 1,
  life: 255
}, {
  id: IID.__LANDMINE__,
  amount: 6,
  life: 255
}, {
  id: IID.__DESERT_EAGLE__,
  amount: 1,
  life: 7
}, {
  id: IID.__WORKBENCH2__,
  amount: 1,
  life: 255
}], COUNTER = 0;
var MODE_AI = {
    __AGGRESSIVE__: COUNTER++,
    __REPAIR__: COUNTER++
  },
  AI = [];
AI[AIID.__NORMAL_GHOUL__] = {
  actionDelay: 700,
  actionImpactClient: 550,
  baseSpeed: .5,
  aggressive: 1,
  mode: MODE_AI.__AGGRESSIVE__,
  timeTrigger: 96e4,
  draw: Render.ghoul,
  breath: .05,
  armMove: 6,
  leftArm: {
    angle: 0,
    x: 28,
    y: -50,
    src: "https://devast.io/img/day-ghoul-left-arm.png",
    img: {
      isLoaded: 0
    }
  },
  rightArm: {
    angle: 0,
    x: 28,
    y: 50,
    src: "https://devast.io/img/day-ghoul-right-arm.png",
    img: {
      isLoaded: 0
    }
  },
  head: {
    src: "https://devast.io/img/day-ghoul.png",
    img: {
      isLoaded: 0
    }
  },
  hurt: {
    src: "https://devast.io/img/ghoul-hurt.png",
    img: {
      isLoaded: 0
    }
  },
  death: {
    src: "https://devast.io/img/day-ghoul-death.png",
    img: {
      isLoaded: 0
    }
  },
  units: 0,
  unitsMax: 30,
  areaEffect: 0,
  radius: 38,
  life: 160,
  speed: [.12, .22],
  speedRun: [.14, .25],
  loot: [
    [IID.__ANIMAL_FAT__, 4, LOOTID.__ANIMAL_FAT__]
  ],
  light: 1,
  areaEffect: 0,
  explosion: 0,
  damageExplosion: 0,
  damageBuilding: 0,
  radiusDamage: 40,
  distDamage: 50,
  damage: [8, 20],
  knockback: 20,
  timelife: 96e4,
  score: 1200
}, AI[AIID.__FAST_GHOUL__] = {
  actionDelay: 300,
  actionImpactClient: 150,
  baseSpeed: .5,
  aggressive: 2,
  mode: MODE_AI.__AGGRESSIVE__,
  timeTrigger: 192e4,
  draw: Render.ghoul,
  breath: .05,
  armMove: 6,
  leftArm: {
    angle: 0,
    x: 28,
    y: -40,
    src: "https://devast.io/img/day-ghoul3-left-arm.png",
    img: {
      isLoaded: 0
    }
  },
  rightArm: {
    angle: 0,
    x: 28,
    y: 40,
    src: "https://devast.io/img/day-ghoul3-right-arm.png",
    img: {
      isLoaded: 0
    }
  },
  head: {
    src: "https://devast.io/img/day-ghoul3.png",
    img: {
      isLoaded: 0
    }
  },
  hurt: {
    src: "https://devast.io/img/ghoul3-hurt.png",
    img: {
      isLoaded: 0
    }
  },
  death: {
    src: "https://devast.io/img/day-ghoul3-death.png",
    img: {
      isLoaded: 0
    }
  },
  units: 0,
  unitsMax: 18,
  areaEffect: 0,
  radius: 38,
  life: 100,
  speed: [.18, .28],
  speedRun: [.22, .38],
  loot: [
    [IID.__GHOUL_BLOOD__, 4, LOOTID.ghoulblood]
  ],
  light: 1,
  areaEffect: 0,
  explosion: 0,
  damageExplosion: 0,
  damageBuilding: 0,
  radiusDamage: 40,
  distDamage: 50,
  damage: [7, 14],
  knockback: 20,
  timelife: 96e4,
  score: 1e3
}, AI[AIID.__EXPLOSIVE_GHOUL__] = {
  actionDelay: 500,
  actionImpactClient: 350,
  baseSpeed: .5,
  aggressive: 4,
  mode: MODE_AI.__AGGRESSIVE__,
  timeTrigger: 288e4,
  draw: Render.ghoul,
  breath: .05,
  armMove: 6,
  leftArm: {
    angle: 0,
    x: 28,
    y: -48,
    src: "https://devast.io/img/day-ghoul4-left-arm.png",
    img: {
      isLoaded: 0
    }
  },
  rightArm: {
    angle: 0,
    x: 28,
    y: 48,
    src: "https://devast.io/img/day-ghoul4-right-arm.png",
    img: {
      isLoaded: 0
    }
  },
  head: {
    src: "https://devast.io/img/day-ghoul4.png",
    img: {
      isLoaded: 0
    }
  },
  hurt: {
    src: "https://devast.io/img/ghoul4-hurt.png",
    img: {
      isLoaded: 0
    }
  },
  death: {
    src: "https://devast.io/img/day-ghoul4-death.png",
    img: {
      isLoaded: 0
    }
  },
  units: 0,
  unitsMax: 14,
  areaEffect: 0,
  radius: 38,
  life: 100,
  speed: [.12, .23],
  speedRun: [.14, .26],
  loot: [
    [IID.__SULFUR__, 4, LOOTID.sulfur],
    [IID.__ANIMAL_FAT__, 4, LOOTID.__ANIMAL_FAT__],
    [IID.__JUNK__, 4, LOOTID.junk]
  ],
  light: 1,
  areaEffect: 0,
  explosion: 1,
  damageExplosion: 120,
  damageBuilding: 500,
  radiusDamage: 40,
  distDamage: 50,
  damage: [6, 20],
  knockback: 20,
  timelife: 96e4,
  score: 500
}, AI[AIID.__RADIOACTIVE_GHOUL__] = {
  actionDelay: 500,
  actionImpactClient: 350,
  baseSpeed: .5,
  aggressive: 8,
  mode: MODE_AI.__AGGRESSIVE__,
  timeTrigger: 384e4,
  draw: Render.ghoul,
  breath: .05,
  armMove: 6,
  leftArm: {
    angle: 0,
    x: 28,
    y: -40,
    src: "https://devast.io/img/day-ghoul2-left-arm.png",
    img: {
      isLoaded: 0
    }
  },
  rightArm: {
    angle: 0,
    x: 28,
    y: 40,
    src: "https://devast.io/img/day-ghoul2-right-arm.png",
    img: {
      isLoaded: 0
    }
  },
  head: {
    src: "https://devast.io/img/day-ghoul2.png",
    img: {
      isLoaded: 0
    }
  },
  hurt: {
    src: "https://devast.io/img/ghoul2-hurt.png",
    img: {
      isLoaded: 0
    }
  },
  death: {
    src: "https://devast.io/img/day-ghoul2-death.png",
    img: {
      isLoaded: 0
    }
  },
  units: 0,
  unitsMax: 10,
  areaEffect: 0,
  radius: 38,
  life: 160,
  speed: [.12, .23],
  speedRun: [.14, .26],
  loot: [
    [IID.__URANIUM__, 4, LOOTID.uranium]
  ],
  light: 1,
  areaEffect: __RADIATION__,
  explosion: 0,
  damageExplosion: 0,
  damageBuilding: 0,
  radiusDamage: 40,
  distDamage: 50,
  damage: [5, 15],
  knockback: 20,
  timelife: 96e4,
  score: 1500
}, AI[AIID.__ARMORED_GHOUL__] = {
  actionDelay: 700,
  actionImpactClient: 550,
  baseSpeed: .5,
  aggressive: 16,
  mode: MODE_AI.__AGGRESSIVE__,
  timeTrigger: 48e5,
  draw: Render.ghoul,
  breath: .05,
  armMove: 6,
  leftArm: {
    angle: 0,
    x: 28,
    y: -50,
    src: "https://devast.io/img/day-ghoul1-left-arm.png",
    img: {
      isLoaded: 0
    }
  },
  rightArm: {
    angle: 0,
    x: 28,
    y: 50,
    src: "https://devast.io/img/day-ghoul1-right-arm.png",
    img: {
      isLoaded: 0
    }
  },
  head: {
    src: "https://devast.io/img/day-ghoul1.png",
    img: {
      isLoaded: 0
    }
  },
  hurt: {
    src: "https://devast.io/img/ghoul1-hurt.png",
    img: {
      isLoaded: 0
    }
  },
  death: {
    src: "https://devast.io/img/day-ghoul1-death.png",
    img: {
      isLoaded: 0
    }
  },
  units: 0,
  unitsMax: 14,
  areaEffect: 0,
  radius: 38,
  life: 800,
  speed: [.11, .21],
  speedRun: [.14, .24],
  loot: [
    [IID.__ALLOYS__, 4, LOOTID.alloys],
    [IID.__SHAPED_METAL__, 12, LOOTID.__SHAPED_METAL__]
  ],
  light: 1,
  areaEffect: 0,
  explosion: 0,
  damageExplosion: 0,
  damageBuilding: 0,
  radiusDamage: 40,
  distDamage: 50,
  damage: [20, 50],
  knockback: 20,
  timelife: 192e4,
  score: 5e3
}, AI[AIID.__PUMPKIN_GHOUL__] = {
  actionDelay: 700,
  actionImpactClient: 550,
  baseSpeed: .5,
  aggressive: 32,
  mode: MODE_AI.__AGGRESSIVE__,
  timeTrigger: 96e4,
  draw: Render.ghoul,
  breath: .05,
  armMove: 6,
  leftArm: {
    angle: 0,
    x: 28,
    y: -50,
    src: "https://devast.io/img/day-ghoul5-left-arm.png",
    img: {
      isLoaded: 0
    }
  },
  rightArm: {
    angle: 0,
    x: 28,
    y: 50,
    src: "https://devast.io/img/day-ghoul5-right-arm.png",
    img: {
      isLoaded: 0
    }
  },
  head: {
    src: "https://devast.io/img/day-ghoul5.png",
    img: {
      isLoaded: 0
    }
  },
  hurt: {
    src: "https://devast.io/img/ghoul5-hurt.png",
    img: {
      isLoaded: 0
    }
  },
  death: {
    src: "https://devast.io/img/day-ghoul5-death.png",
    img: {
      isLoaded: 0
    }
  },
  units: 0,
  unitsMax: 0,
  areaEffect: 0,
  radius: 38,
  life: 160,
  speed: [.04, .04],
  loot: [
    [IID.__PUMPKIN__, 4, LOOTID.pumpkin]
  ],
  light: 0,
  areaEffect: 0,
  explosion: 0,
  damageExplosion: 0,
  damageBuilding: 0,
  radiusDamage: 40,
  distDamage: 50,
  damage: [20, 30],
  knockback: 20,
  timelife: 96e4,
  score: 100
}, AI[AIID.__LAPABOT_REPAIR__] = {
  actionDelay: 700,
  actionImpactClient: 550,
  baseSpeed: .5,
  aggressive: 0,
  mode: MODE_AI.__REPAIR__,
  timeTrigger: 0,
  draw: Render.ghoul,
  breath: .05,
  armMove: 6,
  leftArm: {
    angle: 0,
    x: 28,
    y: -50,
    src: "https://devast.io/img/day-lapabot-left-arm.png",
    img: {
      isLoaded: 0
    }
  },
  rightArm: {
    angle: 0,
    x: 28,
    y: 50,
    src: "https://devast.io/img/day-lapabot-right-arm.png",
    img: {
      isLoaded: 0
    }
  },
  head: {
    src: "https://devast.io/img/day-lapabot.png",
    img: {
      isLoaded: 0
    }
  },
  hurt: {
    src: "https://devast.io/img/lapabot-hurt.png",
    img: {
      isLoaded: 0
    }
  },
  death: {
    src: "https://devast.io/img/day-lapabot-death.png",
    img: {
      isLoaded: 0
    }
  },
  units: 0,
  unitsMax: 0,
  areaEffect: 0,
  radius: 38,
  life: 600,
  speed: [.08, .08],
  loot: [
    [IID.__SHAPED_METAL__, 4, LOOTID.shapedmetal]
  ],
  light: 0,
  areaEffect: 0,
  explosion: 0,
  damageExplosion: 0,
  damageBuilding: 0,
  radiusDamage: 40,
  distDamage: 50,
  damage: [30, 30],
  knockback: 20,
  timelife: 96e4,
  score: 100
}, AI[AIID.__HAL_BOT__] = {
  actionDelay: 550,
  actionImpactClient: 400,
  baseSpeed: .5,
  aggressive: 0,
  mode: MODE_AI.__AGGRESSIVE__,
  timeTrigger: 0,
  draw: Render.ghoul,
  breath: .05,
  armMove: 6,
  leftArm: {
    angle: 0,
    x: 8,
    y: -45,
    src: "https://devast.io/img/day-hal-bot-left-arm.png",
    img: {
      isLoaded: 0
    }
  },
  rightArm: {
    angle: 0,
    x: 8,
    y: 45,
    src: "https://devast.io/img/day-hal-bot-right-arm.png",
    img: {
      isLoaded: 0
    }
  },
  head: {
    src: "https://devast.io/img/day-hal-bot.png",
    img: {
      isLoaded: 0
    }
  },
  hurt: {
    src: "https://devast.io/img/hal-bot-hurt.png",
    img: {
      isLoaded: 0
    }
  },
  death: {
    src: "https://devast.io/img/day-hal-bot-death.png",
    img: {
      isLoaded: 0
    }
  },
  units: 0,
  unitsMax: 0,
  areaEffect: 0,
  radius: 38,
  life: 800,
  speed: [.12, .12],
  loot: [
    [IID.__SHAPED_METAL__, 4, LOOTID.shapedmetal]
  ],
  light: 0,
  areaEffect: 0,
  explosion: 0,
  damageExplosion: 0,
  damageBuilding: 0,
  radiusDamage: 40,
  distDamage: 50,
  damage: [30, 30],
  knockback: 20,
  timelife: 96e4,
  score: 500
}, AI[AIID.__TESLA_BOT__] = {
  actionDelay: 700,
  actionImpactClient: 550,
  baseSpeed: .5,
  aggressive: 0,
  mode: MODE_AI.__AGGRESSIVE__,
  timeTrigger: 0,
  draw: Render.ghoul,
  breath: .05,
  armMove: 6,
  leftArm: {
    angle: 0,
    x: 18,
    y: -60,
    src: "https://devast.io/img/day-tesla-bot-left-arm.png",
    img: {
      isLoaded: 0
    }
  },
  rightArm: {
    angle: 0,
    x: 18,
    y: 60,
    src: "https://devast.io/img/day-tesla-bot-right-arm.png",
    img: {
      isLoaded: 0
    }
  },
  head: {
    src: "https://devast.io/img/day-tesla-bot.png",
    img: {
      isLoaded: 0
    }
  },
  hurt: {
    src: "https://devast.io/img/tesla-bot-hurt.png",
    img: {
      isLoaded: 0
    }
  },
  death: {
    src: "https://devast.io/img/day-tesla-bot-death.png",
    img: {
      isLoaded: 0
    }
  },
  units: 0,
  unitsMax: 0,
  areaEffect: 0,
  radius: 38,
  life: 3e3,
  speed: [.1, .1],
  loot: [
    [IID.__SHAPED_URANIUM__, 4, LOOTID.shapeduranium],
    [IID.__ALLOYS__, 4, LOOTID.alloys]
  ],
  light: 0,
  areaEffect: 0,
  explosion: 1,
  damageExplosion: 100,
  damageBuilding: 100,
  radiusDamage: 40,
  distDamage: 50,
  damage: [80, 80],
  knockback: 40,
  timelife: 96e4,
  score: 3e3
};
try {
  if (exports !== window.undefined) {
    exports.IID = IID, exports.FURNITUREID = FURNITUREID, exports.HOUSE = HOUSE, exports.HOUSEID = HOUSEID, exports
      .INVENTORY = INVENTORY, exports.LOOT = LOOT, exports.LOOTID = LOOTID, exports.RESID = RESID, exports.RESOURCES =
      RESOURCES, exports.AREAS = AREAS, exports.SKILLS = SKILLS, exports.KIT = KIT, exports.BRKIT = BRKIT, exports.AI =
      AI, exports.AIID = AIID, exports.BEHAVIOR = BEHAVIOR;
    for (var k = 0; k < 3; k++)
      for (i = 1; i < INVENTORY.length; i++) {
        if ((recipe = (item = INVENTORY[i]).detail.recipe) !== window.undefined) {
          for (j = 0; j < recipe.length; j++) {
            var _item = INVENTORY[recipe[j][0]];
            0 === j && (item.score = 0), item.score += _item.score * recipe[j][1], recipe[j][2] = _item.loot
          }
          item.score = window.Math.floor(item.score / 4)
        }
      }
    for (i = 0; i < FURNITURE.length; i++) {
      var item, recipe;
      if ((recipe = (item = FURNITURE[i]).detail.recipe) !== window.undefined) {
        for (j = 0; j < recipe.length; j++) {
          _item = INVENTORY[recipe[j][0]];
          0 === j && (item.score = 0), item.score += _item.score * recipe[j][1], recipe[j][2] = _item.loot
        }
        item.score = window.Math.floor(item.score / 4)
      }
    }
  }
} catch (d) {
  for (i = 0; i < KARMA.length; i++) KARMA[i].img = CanvasUtils.loadImage(KARMA[i].src, KARMA[i].img);

  function replaceStringInObject(e, i, a, _) {
    for (var o in i) {
      var t = i[o],
        d = e[o];
      d !== window.undefined ? "object" == typeof d ? replaceStringInObject(d, t, a, _) : "string" == typeof d && (e[
        o] = d.replace(a, _)) : e[o] = t
    }
  }

  function updateClotheInfo(e) {
    for (var i in e) {
      var a = e[i];
      if ("object" == typeof a && null !== a)
        if (a.rad !== window.undefined) {
          var _ = ENTITIES[__ENTITIE_PLAYER__].clothes[a.idClothe];
          _.rad = a.rad, _.warm = a.warm, _.def = a.def, (_ = ENTITIES2[__ENTITIE_PLAYER__].clothes[a.idClothe]).rad = a
            .rad, _.warm = a.warm, _.def = a.def
        } else updateClotheInfo(a)
    }
  }
  INVENTORY2 = window.JSON.parse(window.JSON.stringify(INVENTORY)), PARTICLES2 = window.JSON.parse(window.JSON
      .stringify(PARTICLES)), LOOT2 = window.JSON.parse(window.JSON.stringify(LOOT)), ENTITIES2 = window.JSON.parse(
      window.JSON.stringify(ENTITIES)), RESOURCES2 = window.JSON.parse(window.JSON.stringify(RESOURCES)), LIGHTFIRE2 =
    window.JSON.parse(window.JSON.stringify(LIGHTFIRE)), AI2 = window.JSON.parse(window.JSON.stringify(AI)),
    replaceStringInObject(RESOURCES2, RESOURCES, "day", "night"), replaceStringInObject(INVENTORY2, INVENTORY, "day",
      "night"), replaceStringInObject(PARTICLES2, PARTICLES, "day", "night"), replaceStringInObject(LOOT2, LOOT, "day",
      "night"), replaceStringInObject(ENTITIES2, ENTITIES, "day", "night"), replaceStringInObject(LIGHTFIRE2, LIGHTFIRE,
      "day", "night"), replaceStringInObject(AI2, AI, "day", "night"), updateClotheInfo(INVENTORY)
}
var AudioManager = function () {
  var e = [237225, 303931, 166687, 229213, 217292, 205860, 182041, 273065],
    i = [],
    a = window.Math.floor(window.Math.random() * e.length),
    _ = 0,
    o = 0,
    t = 0,
    d = .45,
    n = 0,
    r = 0;
  AudioUtils.audio.end = new AudioUtils.Sound("audio/end.mp3", 0, !0), AudioUtils.audio.title = new AudioUtils.Sound(
      "audio/title.mp3", 0, !0), AudioUtils.audio.geiger = new AudioUtils.Sound("audio/geiger.mp3", 0, !0), AudioUtils
    .audio.ambient1 = new AudioUtils.Sound("audio/ambient1.mp3", 0, !0), AudioUtils.audio.ambient2 = new AudioUtils
    .Sound("audio/ambient2.mp3", 0, !0), AudioUtils.audio.ambient3 = new AudioUtils.Sound("audio/ambient3.mp3", 0, !
    0), AudioUtils.audio.ambient4 = new AudioUtils.Sound("audio/ambient4.mp3", 0, !0), AudioUtils.audio.ambient5 =
    new AudioUtils.Sound("audio/ambient5.mp3", 0, !0), AudioUtils.audio.ambient6 = new AudioUtils.Sound(
      "audio/ambient6.mp3", 0, !0), AudioUtils.audio.ambient7 = new AudioUtils.Sound("audio/ambient7.mp3", 0, !0),
    AudioUtils.audio.ambient8 = new AudioUtils.Sound("audio/ambient8.mp3", 0, !0), i.push(AudioUtils.audio.ambient1),
    i.push(AudioUtils.audio.ambient2), i.push(AudioUtils.audio.ambient3), i.push(AudioUtils.audio.ambient4), i.push(
      AudioUtils.audio.ambient5), i.push(AudioUtils.audio.ambient6), i.push(AudioUtils.audio.ambient7), i.push(
      AudioUtils.audio.ambient8), AudioUtils._fx.open = new AudioUtils.Sound("audio/open.mp3", 1, !1, 1), AudioUtils
    ._fx.drag = new AudioUtils.Sound("audio/drag.mp3", 1, !1, 1), AudioUtils._fx.play = new AudioUtils.Sound(
      "audio/play.mp3", 1, !1, 1), AudioUtils._fx.skill = new AudioUtils.Sound("audio/skill.mp3", 1, !1, 1),
    AudioUtils._fx.craft = new AudioUtils.Sound("audio/craft.mp3", 1, !1, 1), AudioUtils._fx.button = new AudioUtils
    .Sound("audio/button.mp3", 1, !1, 1), AudioUtils._fx.throwLoot = new AudioUtils.Sound("audio/throwLoot.mp3", 1, !
      1, 1), AudioUtils._fx.levelup = new AudioUtils.Sound("audio/levelup.mp3", 1, !1, 1), AudioUtils._fx.explosion =
    new AudioUtils.Sound("audio/explosion.mp3", 1, !1, 1), AudioUtils._fx.zipperOn = new AudioUtils.Sound(
      "audio/zipper-on.mp3", .7, !1, 1), AudioUtils._fx.zipperOff = new AudioUtils.Sound("audio/zipper-off.mp3", .7, !
      1, 1), AudioUtils._fx.eat = [new AudioUtils.Sound("audio/eat-1s-0.mp3", 1, !1, 1), new AudioUtils.Sound(
      "audio/eat-1s-1.mp3", 1, !1, 1), new AudioUtils.Sound("audio/eat-1s-2.mp3", 1, !1, 1)], AudioUtils._fx
    .damage = [];
  for (var l = 1; l < SOUND.length; l++) AudioUtils._fx.damage[l] = new AudioUtils.Sound(SOUND[l], 1, !1, 1);
  AudioUtils._fx.shot = [];
  var s = ENTITIES[__ENTITIE_PLAYER__].weapons;
  for (l = 0; l < s.length; l++) {
    var g = s[l];
    if (g.sound === window.undefined) AudioUtils._fx.shot[l] = 0;
    else if ("number" == typeof g.sound) AudioUtils._fx.shot[l] = g.sound;
    else {
      AudioUtils._fx.shot[l] = [];
      for (var m = 0; m < g.sound.length; m++) AudioUtils._fx.shot[l][m] = new AudioUtils.Sound(g.sound[m], 1, !1, 1)
    }
  }
  1 === AudioUtils.options.isAudio && (AudioUtils.loadSound(i[a]), AudioUtils.loadSound(AudioUtils.audio.title));
  for (l = 0; l < AudioUtils._fx.shot.length; l++) {
    1 === (c = AudioUtils._fx.shot[l]) && (AudioUtils._fx.shot[l] = AudioUtils._fx.eat)
  }
  if (1 === AudioUtils.options.isFx) {
    AudioUtils.loadSound(AudioUtils._fx.open), AudioUtils.loadSound(AudioUtils._fx.play), AudioUtils.loadSound(
        AudioUtils._fx.drag), AudioUtils.loadSound(AudioUtils._fx.skill), AudioUtils.loadSound(AudioUtils._fx.craft),
      AudioUtils.loadSound(AudioUtils._fx.button), AudioUtils.loadSound(AudioUtils._fx.levelup), AudioUtils.loadSound(
        AudioUtils._fx.explosion);
    for (l = 0; l < AudioUtils._fx.eat.length; l++) AudioUtils.loadSound(AudioUtils._fx.eat[l]);
    for (l = 1; l < AudioUtils._fx.damage.length; l++) AudioUtils.loadSound(AudioUtils._fx.damage[l]);
    for (l = 0; l < AudioUtils._fx.shot.length; l++) {
      var c;
      if (0 !== (c = AudioUtils._fx.shot[l]))
        for (m = 0; m < c.length; m++) AudioUtils.loadSound(c[m])
    }
  }

  function I() {
    0 === t ? AudioUtils.fadeSound(AudioUtils.audio.title, 500, -d) : AudioUtils.fadeSound(AudioUtils.audio.end, 500,
      -d)
  }
  return {
    startGame: function () {
      o = 1, I(), 0 === _ && (a = (a + 1) % i.length), _ = e[a] - 5e3, AudioUtils.fadeSound(i[a], 5e3, d)
    },
    quitGame: function () {
      o = 0, t = 1, AudioUtils.fadeSound(AudioUtils.audio.geiger, 250, -r), r = 0, AudioManager.geiger = 0,
        AudioUtils.fadeSound(i[a], 500, -d), AudioUtils.fadeSound(AudioUtils.audio.end, 1e3, AudioManager
          .musicVolume)
    },
    scheduler: function () {
      AudioUtils.playSound(AudioUtils.audio.title), AudioUtils.playSound(AudioUtils.audio.end);
      for (var t = 0; t < i.length; t++) AudioUtils.playSound(i[t]);
      if (1 === AudioUtils.options.isFx) {
        var l = AudioUtils.options.isAudio;
        AudioUtils.options.isAudio = 1, AudioUtils.playSound(AudioUtils.audio.geiger), AudioUtils.options.isAudio =
          l
      }
      if (r !== AudioManager.geiger && 1 === o) {
        if (0 === n) {
          n = 1e3;
          var s = AudioManager.geiger - r;
          AudioUtils.fadeSound(AudioUtils.audio.geiger, 250, s), r = AudioManager.geiger
        }
        n = window.Math.max(0, n - delta)
      }
      0 === _ && 1 === o && (AudioUtils.fadeSound(i[a], 5e3, -d), a = (a + 1) % i.length, _ = e[a] - 5e3, AudioUtils
        .fadeSound(i[a], 5e3, d)), _ = window.Math.max(0, _ - delta)
    },
    cutTitleMusic: I,
    musicVolume: d,
    geiger: 0
  }
}();
try {
  debugMode
} catch (n) {
  debugMode = window.undefined
}

function reloadIframe() {
  try {
    window.self !== window.top && (loaded = localStorage2.getItem("inIframe"), "1" === loaded ? localStorage2.setItem(
      "inIframe", "0") : (localStorage2.setItem("inIframe", "1"), window.location.href = window.location.href + ""))
  } catch (e) {}
}
debugMode === window.undefined && (window.aiptag = window.aiptag || {}, window.aiptag.consented = !0, window.aiptag
  .cmd = window.aiptag.cmd || [], window.aiptag.cmd.display = window.aiptag.cmd.display || [], window.aiptag.cmd
  .player = window.aiptag.cmd.player || []), reloadIframe();
var versionInf = [30, 1982];
try {
  debugMode
} catch (r) {
  debugMode = window.undefined
}

function waitHTMLAndRun() {
  htmlLoaded = null !== window.document.getElementById("nickname") && null !== window.document.getElementById(
    "serverList") && null !== window.document.getElementById("changelog") && null !== window.document.getElementById(
    "howtoplay") && null !== window.document.getElementById("chat"), !0 === htmlLoaded ? (Loader.init(), Home.init(),
    Game.init(), Score.init(), Rank.init(), Editor.init(), CanvasUtils.initAnimatedCanvas(Loader,
      __RESIZE_METHOD_SCALE__, "can", "bod", 1280, window.undefined, !0), Loader.run()) : window.setTimeout(
    waitHTMLAndRun, 100)
}
Entitie.init(600, 3e4, 5e3), Client.init(30, 15e3, 2e3, 3, 6e4, 1e4, onMessageRaw, onMessageJSON, onFirstMessage),
  window.onbeforeunload = function () {
    if (Client.state & Client.State.__CONNECTED__) return "Are you sure you want quit?"
  }, waitHTMLAndRun();
