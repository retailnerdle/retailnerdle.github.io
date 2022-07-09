(this.retailnerdle = this.retailnerdle || {}),
  (this.retailnerdle.bundle = (function (e) {
    "use strict";
    function a(e) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function s(e, a) {
      if (!(e instanceof a))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(e, a) {
      for (var s = 0; s < a.length; s++) {
        var t = a[s];
        (t.enumerable = t.enumerable || !1),
          (t.configurable = !0),
          "value" in t && (t.writable = !0),
          Object.defineProperty(e, t.key, t);
      }
    }
    function o(e, a, s) {
      return a && t(e.prototype, a), s && t(e, s), e;
    }
    function n(e, a, s) {
      return (
        a in e
          ? Object.defineProperty(e, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[a] = s),
        e
      );
    }
    function r(e, a) {
      if ("function" != typeof a && null !== a)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(a && a.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        a && l(e, a);
    }
    function i(e) {
      return (i = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function l(e, a) {
      return (l =
        Object.setPrototypeOf ||
        function (e, a) {
          return (e.__proto__ = a), e;
        })(e, a);
    }
    function d() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function u(e, a, s) {
      return (u = d()
        ? Reflect.construct
        : function (e, a, s) {
            var t = [null];
            t.push.apply(t, a);
            var o = new (Function.bind.apply(e, t))();
            return s && l(o, s.prototype), o;
          }).apply(null, arguments);
    }
    function c(e) {
      var a = "function" == typeof Map ? new Map() : void 0;
      return (c = function (e) {
        if (
          null === e ||
          ((s = e), -1 === Function.toString.call(s).indexOf("[native code]"))
        )
          return e;
        var s;
        if ("function" != typeof e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== a) {
          if (a.has(e)) return a.get(e);
          a.set(e, t);
        }
        function t() {
          return u(e, arguments, i(this).constructor);
        }
        return (
          (t.prototype = Object.create(e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          l(t, e)
        );
      })(e);
    }
    function p(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function m(e, a) {
      return !a || ("object" != typeof a && "function" != typeof a) ? p(e) : a;
    }
    function h(e) {
      var a = d();
      return function () {
        var s,
          t = i(e);
        if (a) {
          var o = i(this).constructor;
          s = Reflect.construct(t, arguments, o);
        } else s = t.apply(this, arguments);
        return m(this, s);
      };
    }
    function y(e, a) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, a) {
          var s =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null == s) return;
          var t,
            o,
            n = [],
            r = !0,
            i = !1;
          try {
            for (
              s = s.call(e);
              !(r = (t = s.next()).done) &&
              (n.push(t.value), !a || n.length !== a);
              r = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(e, a) ||
        b(e, a) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function g(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return f(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        b(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function b(e, a) {
      if (e) {
        if ("string" == typeof e) return f(e, a);
        var s = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === s && e.constructor && (s = e.constructor.name),
          "Map" === s || "Set" === s
            ? Array.from(e)
            : "Arguments" === s ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
            ? f(e, a)
            : void 0
        );
      }
    }
    function f(e, a) {
      (null == a || a > e.length) && (a = e.length);
      for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
      return t;
    }
    var k = document.createElement("template");
    k.innerHTML =
      "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
    var v = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return (
          s(this, t),
          n(p((e = a.call(this))), "_letter", ""),
          n(p(e), "_state", "empty"),
          n(p(e), "_animation", "idle"),
          n(p(e), "_last", !1),
          n(p(e), "_reveal", !1),
          e.attachShadow({ mode: "open" }),
          e
        );
      }
      return (
        o(
          t,
          [
            {
              key: "last",
              set: function (e) {
                this._last = e;
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(k.content.cloneNode(!0)),
                  (this.$tile = this.shadowRoot.querySelector(".tile")),
                  this.$tile.addEventListener("animationend", function (a) {
                    "PopIn" === a.animationName && (e._animation = "idle"),
                      "FlipIn" === a.animationName &&
                        ((e.$tile.dataset.state = e._state),
                        (e._animation = "flip-out")),
                      "FlipOut" === a.animationName &&
                        ((e._animation = "idle"),
                        e._last &&
                          e.dispatchEvent(
                            new CustomEvent("game-last-tile-revealed-in-row", {
                              bubbles: !0,
                              composed: !0,
                            })
                          )),
                      e._render();
                  }),
                  this._render();
              },
            },
            {
              key: "attributeChangedCallback",
              value: function (e, a, s) {
                switch (e) {
                  case "letter":
                    if (s === a) break;
                    var t = "null" === s ? "" : s;
                    (this._letter = t),
                      (this._state = t ? "tbd" : "empty"),
                      (this._animation = t ? "pop" : "idle");
                    break;
                  case "evaluation":
                    if (!s) break;
                    this._state = s;
                    break;
                  case "reveal":
                    (this._animation = "flip-in"), (this._reveal = !0);
                }
                this._render();
              },
            },
            {
              key: "_render",
              value: function () {
                this.$tile &&
                  ((this.$tile.textContent = this._letter),
                  ["empty", "tbd"].includes(this._state) &&
                    (this.$tile.dataset.state = this._state),
                  (["empty", "tbd"].includes(this._state) || this._reveal) &&
                    this.$tile.dataset.animation != this._animation &&
                    (this.$tile.dataset.animation = this._animation));
              },
            },
          ],
          [
            {
              key: "observedAttributes",
              get: function () {
                return ["letter", "evaluation", "reveal"];
              },
            },
          ]
        ),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-tile", v);
    var w = document.createElement("template");
    w.innerHTML =
      '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
    var x = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return (
          s(this, t),
          (e = a.call(this)).attachShadow({ mode: "open" }),
          (e._letters = ""),
          (e._evaluation = []),
          e._length,
          e
        );
      }
      return (
        o(
          t,
          [
            {
              key: "evaluation",
              get: function () {
                return this._evaluation;
              },
              set: function (e) {
                var a = this;
                (this._evaluation = e),
                  this.$tiles &&
                    this.$tiles.forEach(function (e, s) {
                      e.setAttribute("evaluation", a._evaluation[s]),
                        setTimeout(function () {
                          e.setAttribute("reveal", "");
                        }, 300 * s);
                    });
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(w.content.cloneNode(!0)),
                  (this.$row = this.shadowRoot.querySelector(".row"));
                for (
                  var a = function (a) {
                      var s = document.createElement("game-tile"),
                        t = e._letters[a];
                      (t && s.setAttribute("letter", t), e._evaluation[a]) &&
                        (s.setAttribute("evaluation", e._evaluation[a]),
                        setTimeout(function () {
                          s.setAttribute("reveal", "");
                        }, 100 * a));
                      a === e._length - 1 && (s.last = !0),
                        e.$row.appendChild(s);
                    },
                    s = 0;
                  s < this._length;
                  s++
                )
                  a(s);
                (this.$tiles = this.shadowRoot.querySelectorAll("game-tile")),
                  this.addEventListener("animationend", function (a) {
                    "Shake" === a.animationName && e.removeAttribute("invalid");
                  });
              },
            },
            {
              key: "attributeChangedCallback",
              value: function (e, a, s) {
                switch (e) {
                  case "letters":
                    this._letters = s || "";
                    break;
                  case "length":
                    this._length = parseInt(s, 10);
                    break;
                  case "win":
                    if (null === s) {
                      this.$tiles.forEach(function (e) {
                        e.classList.remove("win");
                      });
                      break;
                    }
                    this.$tiles.forEach(function (e, a) {
                      e.classList.add("win"),
                        (e.style.animationDelay = "".concat(100 * a, "ms"));
                    });
                }
                this._render();
              },
            },
            {
              key: "_render",
              value: function () {
                var e = this;
                this.$row &&
                  this.$tiles.forEach(function (a, s) {
                    var t = e._letters[s];
                    t
                      ? a.setAttribute("letter", t)
                      : a.removeAttribute("letter");
                  });
              },
            },
          ],
          [
            {
              key: "observedAttributes",
              get: function () {
                return ["letters", "length", "invalid", "win"];
              },
            },
          ]
        ),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-row", x);
    var z = document.createElement("template");
    z.innerHTML = "\n  <slot></slot>\n";
    var j = "darkTheme",
      S = "colorBlindTheme",
      _ = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          s(this, t),
            n(p((e = a.call(this))), "isDarkTheme", !1),
            n(p(e), "isColorBlindTheme", !1),
            e.attachShadow({ mode: "open" });
          var o = JSON.parse(window.localStorage.getItem(j)),
            r = window.matchMedia("(prefers-color-scheme: dark)").matches,
            i = JSON.parse(window.localStorage.getItem(S));
          return (
            !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0),
            (!0 !== i && !1 !== i) || e.setColorBlindTheme(i),
            e
          );
        }
        return (
          o(t, [
            {
              key: "setDarkTheme",
              value: function (e) {
                var a = document.querySelector("body");
                e && !a.classList.contains("nightmode")
                  ? a.classList.add("nightmode")
                  : a.classList.remove("nightmode"),
                  (this.isDarkTheme = e),
                  window.localStorage.setItem(j, JSON.stringify(e));
              },
            },
            {
              key: "setColorBlindTheme",
              value: function (e) {
                var a = document.querySelector("body");
                e && !a.classList.contains("colorblind")
                  ? a.classList.add("colorblind")
                  : a.classList.remove("colorblind"),
                  (this.isColorBlindTheme = e),
                  window.localStorage.setItem(S, JSON.stringify(e));
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(z.content.cloneNode(!0)),
                  this.shadowRoot.addEventListener(
                    "game-setting-change",
                    function (a) {
                      var s = a.detail,
                        t = s.name,
                        o = s.checked;
                      switch (t) {
                        case "dark-theme":
                          return void e.setDarkTheme(o);
                        case "color-blind-theme":
                          return void e.setColorBlindTheme(o);
                      }
                    }
                  );
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    function q(e, a) {
      return e === a || (e != e && a != a);
    }
    function E(e, a) {
      for (var s = e.length; s--; ) if (q(e[s][0], a)) return s;
      return -1;
    }
    customElements.define("game-theme-manager", _);
    var A = Array.prototype.splice;
    function C(e) {
      var a = -1,
        s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s; ) {
        var t = e[a];
        this.set(t[0], t[1]);
      }
    }
    (C.prototype.clear = function () {
      (this.__data__ = []), (this.size = 0);
    }),
      (C.prototype.delete = function (e) {
        var a = this.__data__,
          s = E(a, e);
        return (
          !(s < 0) &&
          (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, !0)
        );
      }),
      (C.prototype.get = function (e) {
        var a = this.__data__,
          s = E(a, e);
        return s < 0 ? void 0 : a[s][1];
      }),
      (C.prototype.has = function (e) {
        return E(this.__data__, e) > -1;
      }),
      (C.prototype.set = function (e, a) {
        var s = this.__data__,
          t = E(s, e);
        return t < 0 ? (++this.size, s.push([e, a])) : (s[t][1] = a), this;
      });
    var L =
        "object" == ("undefined" == typeof global ? "undefined" : a(global)) &&
        global &&
        global.Object === Object &&
        global,
      T =
        "object" == ("undefined" == typeof self ? "undefined" : a(self)) &&
        self &&
        self.Object === Object &&
        self,
      I = L || T || Function("return this")(),
      M = I.Symbol,
      O = Object.prototype,
      R = O.hasOwnProperty,
      P = O.toString,
      $ = M ? M.toStringTag : void 0;
    var H = Object.prototype.toString;
    var N = M ? M.toStringTag : void 0;
    function D(e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : N && N in Object(e)
        ? (function (e) {
            var a = R.call(e, $),
              s = e[$];
            try {
              e[$] = void 0;
              var t = !0;
            } catch (e) {}
            var o = P.call(e);
            return t && (a ? (e[$] = s) : delete e[$]), o;
          })(e)
        : (function (e) {
            return H.call(e);
          })(e);
    }
    function G(e) {
      var s = a(e);
      return null != e && ("object" == s || "function" == s);
    }
    function B(e) {
      if (!G(e)) return !1;
      var a = D(e);
      return (
        "[object Function]" == a ||
        "[object GeneratorFunction]" == a ||
        "[object AsyncFunction]" == a ||
        "[object Proxy]" == a
      );
    }
    var F,
      W = I["__core-js_shared__"],
      Y = (F = /[^.]+$/.exec((W && W.keys && W.keys.IE_PROTO) || ""))
        ? "Symbol(src)_1." + F
        : "";
    var J = Function.prototype.toString;
    var U = /^\[object .+?Constructor\]$/,
      X = Function.prototype,
      V = Object.prototype,
      K = X.toString,
      Q = V.hasOwnProperty,
      Z = RegExp(
        "^" +
          K.call(Q)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function ee(e) {
      return (
        !(!G(e) || ((a = e), Y && Y in a)) &&
        (B(e) ? Z : U).test(
          (function (e) {
            if (null != e) {
              try {
                return J.call(e);
              } catch (e) {}
              try {
                return e + "";
              } catch (e) {}
            }
            return "";
          })(e)
        )
      );
      var a;
    }
    function ae(e, a) {
      var s = (function (e, a) {
        return null == e ? void 0 : e[a];
      })(e, a);
      return ee(s) ? s : void 0;
    }
    var se = ae(I, "Map"),
      te = ae(Object, "create");
    var oe = Object.prototype.hasOwnProperty;
    var ne = Object.prototype.hasOwnProperty;
    function re(e) {
      var a = -1,
        s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s; ) {
        var t = e[a];
        this.set(t[0], t[1]);
      }
    }
    function ie(e, s) {
      var t,
        o,
        n = e.__data__;
      return (
        "string" == (o = a((t = s))) ||
        "number" == o ||
        "symbol" == o ||
        "boolean" == o
          ? "__proto__" !== t
          : null === t
      )
        ? n["string" == typeof s ? "string" : "hash"]
        : n.map;
    }
    function le(e) {
      var a = -1,
        s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s; ) {
        var t = e[a];
        this.set(t[0], t[1]);
      }
    }
    (re.prototype.clear = function () {
      (this.__data__ = te ? te(null) : {}), (this.size = 0);
    }),
      (re.prototype.delete = function (e) {
        var a = this.has(e) && delete this.__data__[e];
        return (this.size -= a ? 1 : 0), a;
      }),
      (re.prototype.get = function (e) {
        var a = this.__data__;
        if (te) {
          var s = a[e];
          return "__lodash_hash_undefined__" === s ? void 0 : s;
        }
        return oe.call(a, e) ? a[e] : void 0;
      }),
      (re.prototype.has = function (e) {
        var a = this.__data__;
        return te ? void 0 !== a[e] : ne.call(a, e);
      }),
      (re.prototype.set = function (e, a) {
        var s = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a),
          this
        );
      }),
      (le.prototype.clear = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new re(),
            map: new (se || C)(),
            string: new re(),
          });
      }),
      (le.prototype.delete = function (e) {
        var a = ie(this, e).delete(e);
        return (this.size -= a ? 1 : 0), a;
      }),
      (le.prototype.get = function (e) {
        return ie(this, e).get(e);
      }),
      (le.prototype.has = function (e) {
        return ie(this, e).has(e);
      }),
      (le.prototype.set = function (e, a) {
        var s = ie(this, e),
          t = s.size;
        return s.set(e, a), (this.size += s.size == t ? 0 : 1), this;
      });
    function de(e) {
      var a = (this.__data__ = new C(e));
      this.size = a.size;
    }
    (de.prototype.clear = function () {
      (this.__data__ = new C()), (this.size = 0);
    }),
      (de.prototype.delete = function (e) {
        var a = this.__data__,
          s = a.delete(e);
        return (this.size = a.size), s;
      }),
      (de.prototype.get = function (e) {
        return this.__data__.get(e);
      }),
      (de.prototype.has = function (e) {
        return this.__data__.has(e);
      }),
      (de.prototype.set = function (e, a) {
        var s = this.__data__;
        if (s instanceof C) {
          var t = s.__data__;
          if (!se || t.length < 199)
            return t.push([e, a]), (this.size = ++s.size), this;
          s = this.__data__ = new le(t);
        }
        return s.set(e, a), (this.size = s.size), this;
      });
    var ue = (function () {
      try {
        var e = ae(Object, "defineProperty");
        return e({}, "", {}), e;
      } catch (e) {}
    })();
    function ce(e, a, s) {
      "__proto__" == a && ue
        ? ue(e, a, { configurable: !0, enumerable: !0, value: s, writable: !0 })
        : (e[a] = s);
    }
    function pe(e, a, s) {
      ((void 0 !== s && !q(e[a], s)) || (void 0 === s && !(a in e))) &&
        ce(e, a, s);
    }
    var me,
      he = function (e, a, s) {
        for (var t = -1, o = Object(e), n = s(e), r = n.length; r--; ) {
          var i = n[me ? r : ++t];
          if (!1 === a(o[i], i, o)) break;
        }
        return e;
      },
      ye =
        "object" == (void 0 === e ? "undefined" : a(e)) &&
        e &&
        !e.nodeType &&
        e,
      ge =
        ye &&
        "object" == ("undefined" == typeof module ? "undefined" : a(module)) &&
        module &&
        !module.nodeType &&
        module,
      be = ge && ge.exports === ye ? I.Buffer : void 0,
      fe = be ? be.allocUnsafe : void 0;
    var ke = I.Uint8Array;
    function ve(e, a) {
      var s,
        t,
        o = a
          ? ((s = e.buffer),
            (t = new s.constructor(s.byteLength)),
            new ke(t).set(new ke(s)),
            t)
          : e.buffer;
      return new e.constructor(o, e.byteOffset, e.length);
    }
    var we = Object.create,
      xe = (function () {
        function e() {}
        return function (a) {
          if (!G(a)) return {};
          if (we) return we(a);
          e.prototype = a;
          var s = new e();
          return (e.prototype = void 0), s;
        };
      })();
    var ze,
      je,
      Se =
        ((ze = Object.getPrototypeOf),
        (je = Object),
        function (e) {
          return ze(je(e));
        }),
      _e = Object.prototype;
    function qe(e) {
      var a = e && e.constructor;
      return e === (("function" == typeof a && a.prototype) || _e);
    }
    function Ee(e) {
      return null != e && "object" == a(e);
    }
    function Ae(e) {
      return Ee(e) && "[object Arguments]" == D(e);
    }
    var Ce = Object.prototype,
      Le = Ce.hasOwnProperty,
      Te = Ce.propertyIsEnumerable,
      Ie = Ae(
        (function () {
          return arguments;
        })()
      )
        ? Ae
        : function (e) {
            return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee");
          },
      Me = Array.isArray;
    function Oe(e) {
      return (
        "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
      );
    }
    function Re(e) {
      return null != e && Oe(e.length) && !B(e);
    }
    var Pe =
        "object" == (void 0 === e ? "undefined" : a(e)) &&
        e &&
        !e.nodeType &&
        e,
      $e =
        Pe &&
        "object" == ("undefined" == typeof module ? "undefined" : a(module)) &&
        module &&
        !module.nodeType &&
        module,
      He = $e && $e.exports === Pe ? I.Buffer : void 0,
      Ne =
        (He ? He.isBuffer : void 0) ||
        function () {
          return !1;
        },
      De = Function.prototype,
      Ge = Object.prototype,
      Be = De.toString,
      Fe = Ge.hasOwnProperty,
      We = Be.call(Object);
    var Ye = {};
    (Ye["[object Float32Array]"] =
      Ye["[object Float64Array]"] =
      Ye["[object Int8Array]"] =
      Ye["[object Int16Array]"] =
      Ye["[object Int32Array]"] =
      Ye["[object Uint8Array]"] =
      Ye["[object Uint8ClampedArray]"] =
      Ye["[object Uint16Array]"] =
      Ye["[object Uint32Array]"] =
        !0),
      (Ye["[object Arguments]"] =
        Ye["[object Array]"] =
        Ye["[object ArrayBuffer]"] =
        Ye["[object Boolean]"] =
        Ye["[object DataView]"] =
        Ye["[object Date]"] =
        Ye["[object Error]"] =
        Ye["[object Function]"] =
        Ye["[object Map]"] =
        Ye["[object Number]"] =
        Ye["[object Object]"] =
        Ye["[object RegExp]"] =
        Ye["[object Set]"] =
        Ye["[object String]"] =
        Ye["[object WeakMap]"] =
          !1);
    var Je =
        "object" == (void 0 === e ? "undefined" : a(e)) &&
        e &&
        !e.nodeType &&
        e,
      Ue =
        Je &&
        "object" == ("undefined" == typeof module ? "undefined" : a(module)) &&
        module &&
        !module.nodeType &&
        module,
      Xe = Ue && Ue.exports === Je && L.process,
      Ve = (function () {
        try {
          var e = Ue && Ue.require && Ue.require("util").types;
          return e || (Xe && Xe.binding && Xe.binding("util"));
        } catch (e) {}
      })(),
      Ke = Ve && Ve.isTypedArray,
      Qe = Ke
        ? (function (e) {
            return function (a) {
              return e(a);
            };
          })(Ke)
        : function (e) {
            return Ee(e) && Oe(e.length) && !!Ye[D(e)];
          };
    function Ze(e, a) {
      if (
        ("constructor" !== a || "function" != typeof e[a]) &&
        "__proto__" != a
      )
        return e[a];
    }
    var ea = Object.prototype.hasOwnProperty;
    function aa(e, a, s) {
      var t = e[a];
      (ea.call(e, a) && q(t, s) && (void 0 !== s || a in e)) || ce(e, a, s);
    }
    var sa = /^(?:0|[1-9]\d*)$/;
    function ta(e, s) {
      var t = a(e);
      return (
        !!(s = null == s ? 9007199254740991 : s) &&
        ("number" == t || ("symbol" != t && sa.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < s
      );
    }
    var oa = Object.prototype.hasOwnProperty;
    function na(e, a) {
      var s = Me(e),
        t = !s && Ie(e),
        o = !s && !t && Ne(e),
        n = !s && !t && !o && Qe(e),
        r = s || t || o || n,
        i = r
          ? (function (e, a) {
              for (var s = -1, t = Array(e); ++s < e; ) t[s] = a(s);
              return t;
            })(e.length, String)
          : [],
        l = i.length;
      for (var d in e)
        (!a && !oa.call(e, d)) ||
          (r &&
            ("length" == d ||
              (o && ("offset" == d || "parent" == d)) ||
              (n &&
                ("buffer" == d || "byteLength" == d || "byteOffset" == d)) ||
              ta(d, l))) ||
          i.push(d);
      return i;
    }
    var ra = Object.prototype.hasOwnProperty;
    function ia(e) {
      if (!G(e))
        return (function (e) {
          var a = [];
          if (null != e) for (var s in Object(e)) a.push(s);
          return a;
        })(e);
      var a = qe(e),
        s = [];
      for (var t in e)
        ("constructor" != t || (!a && ra.call(e, t))) && s.push(t);
      return s;
    }
    function la(e) {
      return Re(e) ? na(e, !0) : ia(e);
    }
    function da(e) {
      return (function (e, a, s, t) {
        var o = !s;
        s || (s = {});
        for (var n = -1, r = a.length; ++n < r; ) {
          var i = a[n],
            l = t ? t(s[i], e[i], i, s, e) : void 0;
          void 0 === l && (l = e[i]), o ? ce(s, i, l) : aa(s, i, l);
        }
        return s;
      })(e, la(e));
    }
    function ua(e, a, s, t, o, n, r) {
      var i = Ze(e, s),
        l = Ze(a, s),
        d = r.get(l);
      if (d) pe(e, s, d);
      else {
        var u,
          c = n ? n(i, l, s + "", e, a, r) : void 0,
          p = void 0 === c;
        if (p) {
          var m = Me(l),
            h = !m && Ne(l),
            y = !m && !h && Qe(l);
          (c = l),
            m || h || y
              ? Me(i)
                ? (c = i)
                : Ee((u = i)) && Re(u)
                ? (c = (function (e, a) {
                    var s = -1,
                      t = e.length;
                    for (a || (a = Array(t)); ++s < t; ) a[s] = e[s];
                    return a;
                  })(i))
                : h
                ? ((p = !1),
                  (c = (function (e, a) {
                    if (a) return e.slice();
                    var s = e.length,
                      t = fe ? fe(s) : new e.constructor(s);
                    return e.copy(t), t;
                  })(l, !0)))
                : y
                ? ((p = !1), (c = ve(l, !0)))
                : (c = [])
              : (function (e) {
                  if (!Ee(e) || "[object Object]" != D(e)) return !1;
                  var a = Se(e);
                  if (null === a) return !0;
                  var s = Fe.call(a, "constructor") && a.constructor;
                  return (
                    "function" == typeof s && s instanceof s && Be.call(s) == We
                  );
                })(l) || Ie(l)
              ? ((c = i),
                Ie(i)
                  ? (c = da(i))
                  : (G(i) && !B(i)) ||
                    (c = (function (e) {
                      return "function" != typeof e.constructor || qe(e)
                        ? {}
                        : xe(Se(e));
                    })(l)))
              : (p = !1);
        }
        p && (r.set(l, c), o(c, l, t, n, r), r.delete(l)), pe(e, s, c);
      }
    }
    function ca(e, a, s, t, o) {
      e !== a &&
        he(
          a,
          function (n, r) {
            if ((o || (o = new de()), G(n))) ua(e, a, r, s, ca, t, o);
            else {
              var i = t ? t(Ze(e, r), n, r + "", e, a, o) : void 0;
              void 0 === i && (i = n), pe(e, r, i);
            }
          },
          la
        );
    }
    function pa(e) {
      return e;
    }
    function ma(e, a, s) {
      switch (s.length) {
        case 0:
          return e.call(a);
        case 1:
          return e.call(a, s[0]);
        case 2:
          return e.call(a, s[0], s[1]);
        case 3:
          return e.call(a, s[0], s[1], s[2]);
      }
      return e.apply(a, s);
    }
    var ha = Math.max;
    var ya = ue
        ? function (e, a) {
            return ue(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value:
                ((s = a),
                function () {
                  return s;
                }),
              writable: !0,
            });
            var s;
          }
        : pa,
      ga = Date.now;
    var ba = (function (e) {
      var a = 0,
        s = 0;
      return function () {
        var t = ga(),
          o = 16 - (t - s);
        if (((s = t), o > 0)) {
          if (++a >= 800) return arguments[0];
        } else a = 0;
        return e.apply(void 0, arguments);
      };
    })(ya);
    function fa(e, a) {
      return ba(
        (function (e, a, s) {
          return (
            (a = ha(void 0 === a ? e.length - 1 : a, 0)),
            function () {
              for (
                var t = arguments,
                  o = -1,
                  n = ha(t.length - a, 0),
                  r = Array(n);
                ++o < n;

              )
                r[o] = t[a + o];
              o = -1;
              for (var i = Array(a + 1); ++o < a; ) i[o] = t[o];
              return (i[a] = s(r)), ma(e, this, i);
            }
          );
        })(e, a, pa),
        e + ""
      );
    }
    var ka,
      va =
        ((ka = function (e, a, s) {
          ca(e, a, s);
        }),
        fa(function (e, s) {
          var t = -1,
            o = s.length,
            n = o > 1 ? s[o - 1] : void 0,
            r = o > 2 ? s[2] : void 0;
          for (
            n = ka.length > 3 && "function" == typeof n ? (o--, n) : void 0,
              r &&
                (function (e, s, t) {
                  if (!G(t)) return !1;
                  var o = a(s);
                  return (
                    !!("number" == o
                      ? Re(t) && ta(s, t.length)
                      : "string" == o && (s in t)) && q(t[s], e)
                  );
                })(s[0], s[1], r) &&
                ((n = o < 3 ? void 0 : n), (o = 1)),
              e = Object(e);
            ++t < o;

          ) {
            var i = s[t];
            i && ka(e, i, t, n);
          }
          return e;
        })),
      wa = "gameState",
      xa = {
        boardState: null,
        evaluations: null,
        rowIndex: null,
        solution: null,
        gameStatus: null,
        lastPlayedTs: null,
        lastCompletedTs: null,
        restoringFromLocalStorage: null,
        hardMode: !1,
      };
    function za() {
      var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
      return JSON.parse(e);
    }
    function ja(e) {
      var a = za();
      !(function (e) {
        window.localStorage.setItem(wa, JSON.stringify(e));
      })(va(a, e));
    }
    var Sa = document.createElement("template");
    Sa.innerHTML =
      '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 12px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  #privacy-policy,\n  #copyright {\n    text-align: left;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Hard Mode</div>\n          <div class="description">Any revealed hints must be used in subsequent guesses</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Dark Theme</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">High Contrast Mode</div>\n          <div class="description">For improved colour vision</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Feedback</div>\n        </div>\n        <div class="control">\n          <a href="mailto:retailnerdle@gmail.com?subject=Feedback" title="retailnerdle@gmail.com">Email</a>\n          |\n          <a href="https://twitter.com/Cognira" target="blank" title="@Cognira">Twitter</a>\n        </div>\n      </div>\n    </section>\n  <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Linkedin</div>\n        </div>\n        <div class="control">\n          <a href="http://linkedin.com/company/cognira" target="blank">Cognira</a>\n        </div>\n      </div>\n </section>\n  </div>\n  <div id="footnote">\n    <div>\n      <div id="copyright"><a href="javascript:window.location.href=window.location.href">Refresh game</a><br>Powered by the original <a href="https://www.powerlanguage.co.uk/wordle/" target="_blank">Wordle</a></div>\n    </div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
    var _a = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return (
          s(this, t),
          n(p((e = a.call(this))), "gameApp", void 0),
          e.attachShadow({ mode: "open" }),
          e
        );
      }
      return (
        o(t, [
          {
            key: "connectedCallback",
            value: function () {
              var e,
                a = this;
              this.shadowRoot.appendChild(Sa.content.cloneNode(!0)),
                (this.shadowRoot.querySelector("#hash").textContent =
                  null === (e = window.retailnerdle) || void 0 === e
                    ? void 0
                    : e.hash),
                (this.shadowRoot.querySelector("#puzzle-number").textContent =
                  "#".concat(this.gameApp.dayOffset)),
                this.shadowRoot.addEventListener(
                  "game-switch-change",
                  function (e) {
                    e.stopPropagation();
                    var s = e.detail,
                      t = s.name,
                      o = s.checked,
                      n = s.disabled;
                    a.dispatchEvent(
                      new CustomEvent("game-setting-change", {
                        bubbles: !0,
                        composed: !0,
                        detail: { name: t, checked: o, disabled: n },
                      })
                    ),
                      a.render();
                  }
                ),
                this.render();
            },
          },
          {
            key: "render",
            value: function () {
              var e = document.querySelector("body");
              e.classList.contains("nightmode") &&
                this.shadowRoot
                  .querySelector("#dark-theme")
                  .setAttribute("checked", ""),
                e.classList.contains("colorblind") &&
                  this.shadowRoot
                    .querySelector("#color-blind-theme")
                    .setAttribute("checked", "");
              var a = za();
              a.hardMode &&
                this.shadowRoot
                  .querySelector("#hard-mode")
                  .setAttribute("checked", ""),
                a.hardMode ||
                  "IN_PROGRESS" !== a.gameStatus ||
                  0 === a.rowIndex ||
                  (this.shadowRoot
                    .querySelector("#hard-mode")
                    .removeAttribute("checked"),
                  this.shadowRoot
                    .querySelector("#hard-mode")
                    .setAttribute("disabled", ""));
            },
          },
        ]),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-settings", _a);
    var qa = document.createElement("template");
    qa.innerHTML =
      '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
    var Ea,
      Aa = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          return (
            s(this, t),
            n(p((e = a.call(this))), "_duration", void 0),
            e.attachShadow({ mode: "open" }),
            e
          );
        }
        return (
          o(t, [
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(qa.content.cloneNode(!0));
                var a = this.shadowRoot.querySelector(".toast");
                (a.textContent = this.getAttribute("text")),
                  (this._duration = this.getAttribute("duration") || 1e3),
                  "Infinity" !== this._duration &&
                    setTimeout(function () {
                      a.classList.add("fade");
                    }, this._duration),
                  a.addEventListener("transitionend", function (a) {
                    e.parentNode.removeChild(e);
                  });
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    function Ca() {
      dataLayer.push(arguments);
    }
    customElements.define("game-toast", Aa),
      (window.dataLayer = window.dataLayer || []),
      Ca("js", new Date());
    Ca("config", "G-FYHVYKZX9E", {
      app_version:
        null === (Ea = window.retailnerdle) || void 0 === Ea ? void 0 : Ea.hash,
      debug_mode: !1,
    });
    var Ta = [    /* DICTIONARY WORDS*/
      "aahed", "aalii", "aargh", "aaron", "aarti", "abaca", "abaci", "aback",
      "abacs", "abada", "abaff", "abaft", "abaka", "abama", "abamp", "aband",
      "abase", "abash", "abask", "abate", "abaue", "abave", "abaya", "abaze",
      "abbas", "abbed", "abbes", "abbey", "abbie", "abbot", "abcee", "abdal",
      "abdat", "abdom", "abeam", "abear", "abede", "abele", "abend", "aberr",
      "abers", "abets", "abhor", "abide", "abidi", "abies", "abilo", "abime",
      "abkar", "abled", "abler", "ables", "ablet", "ablow", "abmho", "abner",
      "abnet", "abode", "abody", "abohm", "aboil", "aboma", "aboon", "abord",
      "abore", "abort", "abote", "about", "above", "abram", "abray", "abret",
      "abrim", "abrin", "abris", "abrus", "absee", "absey", "absis", "absit",
      "abstr", "abuna", "abune", "abura", "abuse", "abush", "abuta", "abuts",
      "abuzz", "abwab", "abyes", "abysm", "abyss", "acais", "acale", "acana",
      "acapu", "acara", "acari", "acast", "acate", "accas", "accel", "accoy",
      "accra", "accts", "accum", "accur", "accus", "acedy", "acerb", "acers",
      "aceta", "achar", "ached", "achen", "acher", "aches", "achoo", "achor",
      "acids", "acidy", "acier", "acies", "acing", "acini", "ackee", "acker",
      "ackey", "aclys", "acmes", "acmic", "acned", "acnes", "acock", "acoin",
      "acold", "acoma", "acone", "acool", "acorn", "acost", "acoup", "acrab",
      "acred", "acres", "acrid", "acroa", "acron", "acros", "acrux", "acryl",
      "acted", "actin", "acton", "actor", "actos", "actus", "acuan", "acute",
      "acyls", "adage", "adagy", "adams", "adapa", "adapt", "adati", "adaty",
      "adawe", "adawn", "adaws", "adays", "adbot", "adcon", "addax", "addda",
      "added", "adder", "addie", "addio", "addis", "addle", "addnl", "adead",
      "adeem", "adeep", "adela", "adeps", "adept", "adfix", "adhan", "adiel",
      "adieu", "adion", "adios", "adits", "adjag", "adlai", "adlay", "adlet",
      "adman", "admen", "admin", "admit", "admix", "admov", "admrx", "adnex",
      "adobe", "adobo", "adolf", "adopt", "adore", "adorn", "adown", "adoxa",
      "adoxy", "adoze", "adpao", "adrad", "adred", "adret", "adrip", "adrop",
      "adrue", "adsum", "aduki", "adult", "adunc", "adure", "adusk", "adust",
      "advew", "adyta", "adzed", "adzer", "adzes", "aecia", "aedes", "aeger",
      "aegir", "aegis", "aegle", "aeons", "aequi", "aeric", "aerie", "aeron",
      "aeros", "aesir", "aesop", "aetat", "aevia", "aevum", "aface", "afald",
      "afara", "afars", "afear", "affix", "afgod", "afifi", "afire", "aflaj",
      "aflat", "afley", "aflow", "afoam", "afoot", "afore", "afoul", "afray",
      "afret", "afric", "afrit", "afros", "after", "agada", "agade", "again",
      "agama", "agami", "agamy", "agape", "agars", "agasp", "agast", "agata",
      "agate", "agaty", "agave", "agaze", "agena", "agend", "agene", "agent",
      "agers", "agete", "agger", "aggie", "aggri", "aggro", "aggry", "aggur",
      "aghan", "aghas", "agiel", "agila", "agile", "aging", "agios", "agism",
      "agist", "agita", "aglee", "aglet", "agley", "agloo", "aglow", "aglus",
      "agmas", "agnat", "agnel", "agnes", "agnus", "agoge", "agoho", "agone",
      "agons", "agony", "agood", "agora", "agrah", "agral", "agree", "agria",
      "agric", "agrin", "agrom", "agron", "agros", "agsam", "agued", "agues",
      "aguey", "aguna", "agura", "agush", "agust", "aguti", "ahead", "aheap",
      "ahems", "ahent", "ahigh", "ahind", "ahing", "ahint", "ahmed", "ahmet",
      "ahold", "aholt", "ahong", "ahsan", "ahull", "ahunt", "ahura", "ahuru",
      "ahush", "ahwal", "aidas", "aided", "aider", "aides", "aidoi", "aidos",
      "aiery", "aigas", "aiger", "aight", "aigre", "ailed", "ailie", "aillt",
      "aimak", "aimed", "aimee", "aimer", "ainee", "ainga", "ainoi", "ainus",
      "aioli", "airan", "aired", "airer", "airns", "airth", "airts", "aisle",
      "aitch", "aitis", "aitus", "aiver", "aiwan", "aiyee", "aizle", "ajaja",
      "ajari", "ajava", "ajhar", "ajies", "ajiva", "ajuga", "ajwan", "akala",
      "akali", "akasa", "akebi", "akees", "akeki", "akela", "akene", "aking",
      "akita", "akkad", "akkas", "aknee", "aknow", "akpek", "akron", "akule",
      "akund", "alaap", "alack", "alada", "alain", "alaki", "alala", "alamo",
      "aland", "alane", "alang", "alani", "alans", "alant", "alapa", "alaps",
      "alarm", "alary", "alate", "alawi", "alays", "alban", "albas", "albee",
      "albin", "album", "albus", "albyn", "alcae", "alces", "alcid", "alcor",
      "alcos", "alday", "aldea", "alden", "alder", "aldim", "aldol", "aldus",
      "aleak", "aleck", "alecs", "alefs", "aleft", "alenu", "aleph", "alert",
      "aleut", "alews", "aleye", "alfas", "alfet", "alfin", "alfur", "algae",
      "algal", "algas", "algic", "algid", "algin", "algol", "algor", "algum",
      "alhet", "alias", "alibi", "alice", "alick", "alida", "alids", "alien",
      "aliet", "alife", "alifs", "align", "alike", "alima", "aline", "alish",
      "aliso", "alisp", "alist", "alite", "ality", "alive", "aliya", "alkes",
      "alkie", "alkin", "alkos", "alkyd", "alkyl", "allah", "allan", "allay",
      "allee", "allel", "allen", "aller", "alley", "allez", "allie", "allis",
      "allod", "alloo", "allot", "allow", "alloy", "allyl", "almah", "alman",
      "almas", "almeh", "almes", "almon", "almud", "almug", "alnus", "alods",
      "alody", "aloed", "aloes", "aloft", "alogy", "aloha", "aloid", "aloin",
      "alois", "aloma", "alone", "along", "aloof", "aloos", "alosa", "alose",
      "aloud", "alout", "alowe", "alpax", "alpen", "alpha", "alpid", "altar",
      "alter", "altho", "altin", "altos", "altun", "altus", "aluco", "alula",
      "alums", "alure", "aluta", "alvah", "alvan", "alvar", "alvia", "alvin",
      "alvus", "alway", "amaas", "amadi", "amaga", "amahs", "amain", "amala",
      "amalg", "amang", "amani", "amant", "amapa", "amara", "amass", "amate",
      "amati", "amaut", "amaze", "amban", "ambar", "ambas", "ambay", "amber",
      "ambit", "amble", "ambon", "ambos", "ambry", "ameba", "ameed", "ameen",
      "ameer", "amelu", "amend", "amene", "amens", "ament", "amess", "amhar",
      "amias", "amice", "amici", "amide", "amido", "amids", "amies", "amiga",
      "amigo", "amine", "amini", "amino", "amins", "amire", "amirs", "amish",
      "amiss", "amita", "amity", "amlas", "amlet", "amman", "ammer", "ammon",
      "ammos", "amnia", "amnic", "amnio", "amoke", "amoks", "amole", "among",
      "amora", "amort", "amour", "amove", "amowt", "amped", "amper", "amphi",
      "ample", "amply", "ampul", "ampyx", "amrit", "amsel", "amuck", "amula",
      "amuse", "amuze", "amvis", "amylo", "amyls", "amzel", "anabo", "anack",
      "anama", "anana", "anasa", "anata", "ancha", "ancho", "ancle", "ancon",
      "ancor", "ancre", "andes", "andia", "andor", "andre", "andro", "anear",
      "anele", "anend", "anent", "angas", "angel", "anger", "angia", "angie",
      "angka", "angle", "anglo", "angor", "angry", "angst", "angus", "anhyd",
      "aniba", "anice", "anigh", "anile", "anils", "anima", "anime", "animi",
      "animo", "anion", "anise", "anita", "anjan", "anjou", "ankee", "anker",
      "ankhs", "ankle", "ankou", "ankus", "anlas", "anlet", "anlia", "anmia",
      "annal", "annam", "annas", "annat", "annet", "annex", "annie", "anniv",
      "annot", "annoy", "annul", "annum", "annus", "anoas", "anode", "anoia",
      "anoil", "anole", "anoli", "anomy", "anorn", "anour", "anous", "anova",
      "ansae", "ansar", "ansel", "anser", "antae", "antal", "antar", "antas",
      "anted", "antes", "antic", "antiq", "antis", "anton", "antra", "antre",
      "antsy", "antum", "anura", "anury", "anvil", "anyon", "anzac", "aoife",
      "aorta", "aotea", "aotes", "aotus", "aouad", "apace", "apage", "apaid",
      "apair", "apama", "apart", "apass", "apast", "apayd", "apays", "apeak",
      "apeek", "apers", "apert", "aperu", "apery", "apgar", "aphid", "aphis",
      "aphra", "apian", "apiin", "apili", "apina", "aping", "apiol", "apios",
      "apish", "apism", "apium", "apnea", "apoda", "apode", "apods", "apoop",
      "aport", "apout", "appal", "appar", "appay", "appel", "appet", "apple",
      "apply", "appmt", "appro", "apptd", "appui", "appuy", "apres", "april",
      "apron", "apses", "apsid", "apsis", "apsos", "aptal", "apted", "apter",
      "aptly", "aquae", "aquas", "araba", "arabs", "araby", "araca", "arace",
      "arach", "arado", "arage", "arain", "arake", "araks", "arame", "aramu",
      "arank", "arara", "arars", "araru", "arase", "arati", "araua", "arawa",
      "arbas", "arber", "arbor", "arcae", "arced", "arces", "archd", "arche",
      "archi", "archt", "archy", "arcos", "arcus", "ardea", "ardeb", "arder",
      "ardor", "ardri", "aread", "areae", "areal", "arean", "arear", "areas",
      "areca", "aredd", "arede", "areek", "areel", "arefy", "areic", "arena",
      "arend", "arene", "areng", "arent", "arepa", "arere", "arest", "arete",
      "arets", "arett", "argal", "argan", "argas", "argel", "argid", "argil",
      "argin", "argle", "argol", "argon", "argos", "argot", "argue", "argus",
      "arhar", "arhat", "arian", "arias", "ariel", "aries", "ariki", "arils",
      "arioi", "arion", "ariot", "arise", "arish", "arist", "arite", "arith",
      "arius", "arjun", "arkab", "arked", "arkie", "arled", "arles", "armed",
      "armer", "armet", "armil", "armit", "armor", "arnas", "arneb", "arnee",
      "arnut", "aroar", "aroba", "arock", "aroha", "aroid", "aroma", "aroon",
      "aroph", "arose", "arpas", "arpen", "arrah", "arras", "arrau", "array",
      "arret", "arrgt", "arrha", "arrie", "arris", "arrow", "arroz", "arsed",
      "arses", "arsey", "arsis", "arsle", "arson", "arsyl", "artal", "artar",
      "artel", "arter", "artha", "artic", "artie", "artis", "artly", "artou",
      "artsy", "artus", "aruac", "aruhe", "aruke", "arulo", "arums", "arupa",
      "arusa", "arval", "arvee", "arvel", "arvos", "aryan", "aryls", "arzan",
      "arzun", "asale", "asana", "asaph", "asarh", "ascan", "ascii", "ascon",
      "ascot", "ascry", "ascus", "asdic", "asgmt", "ashed", "ashen", "asher",
      "ashes", "ashet", "ashir", "ashot", "ashur", "asian", "aside", "askar",
      "asked", "asker", "askew", "askip", "askoi", "askos", "aslop", "asoak",
      "asoka", "aspca", "aspen", "asper", "aspic", "aspie", "aspis", "aspro",
      "assai", "assam", "assay", "asses", "asset", "assez", "assis", "assoc",
      "assot", "astay", "astel", "aster", "astir", "astor", "astre", "astun",
      "astur", "asura", "asuri", "asway", "aswim", "asyla", "asyle", "async",
      "atake", "atame", "ataps", "atavi", "ataxy", "ateba", "atees", "atelo",
      "ately", "athar", "athel", "atigi", "atilt", "atimy", "ating", "atlas",
      "atlee", "atman", "atmas", "atmid", "atmos", "atnah", "atocs", "atoke",
      "atoks", "atole", "atoll", "atoms", "atomy", "atone", "atony", "atopy",
      "atour", "atren", "atria", "atrip", "attal", "attap", "attar", "atter",
      "attic", "attid", "attle", "attry", "atuas", "atule", "atune", "atwin",
      "atypy", "aubin", "aucan", "aucht", "audad", "audio", "audit", "aueto",
      "augen", "auger", "auget", "aught", "augur", "aulae", "aulas", "aulic",
      "auloi", "aulos", "aumil", "aunes", "aunts", "aunty", "aurae", "aural",
      "aurar", "auras", "aurei", "aures", "auric", "aurin", "aurir", "auris",
      "aurum", "auryl", "autem", "autor", "autos", "autre", "auxil", "auxin",
      "avahi", "avail", "avale", "avant", "avars", "avast", "avell", "avels",
      "avena", "avens", "aveny", "avera", "avern", "avers", "avert", "avery",
      "avgas", "avian", "avick", "aview", "avile", "avine", "avion", "avise",
      "aviso", "avize", "avoid", "avoir", "avoke", "avoue", "avour", "avowe",
      "avows", "avyze", "awabi", "awacs", "awaft", "await", "awake", "awald",
      "awalt", "awane", "award", "aware", "awarn", "awash", "awato", "awave",
      "aways", "awber", "awdls", "aweek", "aweel", "awest", "aweto", "awful",
      "awhet", "awhir", "awide", "awing", "awink", "awiwi", "awkly", "awmry",
      "awned", "awner", "awoke", "awols", "awork", "axels", "axers", "axial",
      "axile", "axils", "axine", "axing", "axiom", "axion", "axite", "axled",
      "axles", "axman", "axmen", "axoid", "axone", "axons", "ayahs", "ayaya",
      "ayelp", "ayens", "aygre", "ayins", "aylet", "ayllu", "ayond", "ayont",
      "ayous", "ayres", "ayrie", "ayuyu", "azans", "azide", "azido", "azine",
      "azlon", "azoch", "azofy", "azoic", "azole", "azons", "azote", "azoth",
      "azoxy", "aztec", "azuki", "azure", "azurn", "azury", "azygy", "azyme",
      "azyms", "baaed", "baals", "babai", "babas", "babby", "babel", "babes",
      "babis", "babka", "bable", "baboo", "babua", "babul", "babus", "bacao",
      "bacca", "bacco", "baccy", "bacha", "bache", "bachs", "bacin", "bacis",
      "backs", "backy", "bacon", "badan", "baddy", "badge", "badju", "badly",
      "badon", "baels", "baffs", "baffy", "bafta", "bafts", "bagdi", "bagel",
      "bagge", "baggy", "baghs", "bagie", "bagio", "bagle", "bagne", "bagre",
      "bahai", "baham", "bahan", "bahar", "bahay", "bahoe", "bahoo", "bahts",
      "bahur", "bahus", "bahut", "baign", "baile", "bailo", "bails", "baioc",
      "bairn", "baisa", "baith", "baits", "baiza", "baize", "bajan", "bajau",
      "bajra", "bajri", "bajus", "bakal", "baked", "baken", "baker", "bakes",
      "bakie", "bakli", "bakra", "balai", "balak", "balan", "balao", "balas",
      "balat", "balau", "balds", "baldy", "baled", "balei", "baler", "bales",
      "balks", "balky", "balli", "ballo", "balls", "bally", "balms", "balmy",
      "balon", "baloo", "balor", "balow", "balsa", "balti", "balun", "balus",
      "balut", "balza", "bamah", "bambi", "banak", "banal", "banat", "banba",
      "banca", "banco", "bancs", "banda", "bande", "bandh", "bandi", "bando",
      "bands", "bandy", "baned", "banes", "banff", "banga", "bange", "bangs",
      "bangy", "bania", "banig", "banjo", "banks", "banky", "banns", "bants",
      "bantu", "banty", "banus", "banya", "bapus", "barad", "barat", "barba",
      "barbe", "barbs", "barbu", "barby", "barca", "barde", "bardo", "bards",
      "bardy", "bared", "barer", "bares", "baret", "barff", "barfi", "barfs",
      "barfy", "barge", "bargh", "baria", "baric", "barid", "barie", "barih",
      "baris", "barit", "barks", "barky", "barly", "barms", "barmy", "barns",
      "barny", "baroi", "baron", "barps", "barra", "barre", "barro", "barry",
      "barse", "barth", "barye", "basad", "basal", "basan", "basat", "based",
      "basen", "baser", "bases", "basho", "basic", "basij", "basil", "basin",
      "basis", "baske", "basks", "bason", "basos", "bassa", "basse", "bassi",
      "basso", "bassy", "basta", "baste", "basti", "basto", "basts", "basyl",
      "batad", "batak", "batan", "batch", "batea", "bated", "batel", "bater",
      "bates", "bathe", "baths", "batik", "batis", "baton", "batta", "batts",
      "battu", "batty", "batwa", "baubo", "bauch", "bauds", "bauge", "bauks",
      "bauld", "baulk", "baume", "bauno", "baure", "baurs", "bauta", "bavin",
      "bawds", "bawdy", "bawke", "bawks", "bawls", "bawly", "bawns", "bawra",
      "bawrs", "bawty", "bayal", "bayed", "bayer", "bayes", "bayle", "bayok",
      "bayou", "bayts", "bazar", "bazoo", "beach", "beads", "beady", "beaks",
      "beaky", "beala", "beals", "beams", "beamy", "beano", "beans", "beant",
      "beany", "beard", "beare", "bearm", "bears", "beast", "beata", "beath",
      "beati", "beats", "beaty", "beaus", "beaut", "beaux", "bebar", "bebat",
      "bebay", "bebed", "bebog", "bebop", "becap", "becco", "beche", "becke",
      "becks", "becky", "becry", "becut", "bedad", "beday", "bedel", "beden",
      "bedes", "bedew", "bedim", "bedin", "bedip", "bedog", "bedot", "bedub",
      "bedur", "bedye", "beech", "beedi", "beefs", "beefy", "beele", "beent",
      "beeps", "beers", "beery", "beest", "beeth", "beets", "beety", "beeve",
      "befan", "befit", "befog", "befop", "befur", "begad", "began", "begar",
      "begat", "begay", "begem", "beget", "begin", "begob", "begod", "begot",
      "begum", "begun", "begut", "behap", "behav", "behen", "behew", "beice",
      "beige", "beigy", "beild", "being", "beins", "beira", "beisa", "bejan",
      "bejel", "bejig", "bekah", "bekko", "belah", "belam", "belap", "belar",
      "belat", "belay", "belch", "belee", "belga", "belie", "belis", "bella",
      "belle", "belli", "bello", "bells", "belly", "belon", "below", "belts",
      "belue", "belve", "bemad", "beman", "bemar", "bemas", "bemat", "bemba",
      "bemix", "bemol", "bemud", "benab", "bench", "benda", "bends", "bendy",
      "benes", "benet", "benga", "benic", "benim", "benin", "benis", "benjy",
      "benne", "benni", "benny", "bensh", "bento", "bents", "benty", "benzo",
      "beode", "bepat", "bepaw", "bepen", "bepun", "berat", "beray", "beres",
      "beret", "bergh", "bergs", "bergy", "berko", "berks", "berme", "berms",
      "berne", "berob", "beroe", "berri", "berry", "berth", "berun", "beryl",
      "beryx", "besan", "besat", "besaw", "besee", "beses", "beset", "besew",
      "besin", "besit", "besom", "besot", "bespy", "besra", "bessi", "bessy",
      "besti", "bests", "betag", "betas", "beted", "betel", "betes", "beths",
      "betid", "betis", "beton", "betso", "betsy", "betta", "betty", "bevel",
      "bever", "bevil", "bevor", "bevue", "bevvy", "bewet", "bewig", "bewit",
      "bewry", "bezan", "bezel", "bezes", "bezil", "bezzi", "bezzo", "bezzy",
      "bhaga", "bhais", "bhaji", "bhalu", "bhang", "bhara", "bhats", "bhava",
      "bhels", "bhili", "bhima", "bhoot", "bhuna", "bhuts", "biabo", "biach",
      "biali", "bialy", "bibbs", "bibby", "bibes", "bibio", "bible", "biccy",
      "bicep", "bices", "bichy", "bidar", "biddy", "bided", "bider", "bides",
      "bidet", "bidis", "bidon", "bidri", "bidry", "bield", "biens", "biers",
      "bifer", "biffo", "biffs", "biffy", "bifid", "bigae", "bigam", "bigas",
      "biggs", "biggy", "bigha", "bight", "bigly", "bigos", "bigot", "bihai",
      "biham", "bijou", "biked", "biker", "bikes", "bikie", "bikol", "bilbi",
      "bilbo", "bilby", "bilch", "biled", "biles", "bilge", "bilgy", "bilic",
      "bilin", "bilio", "bilks", "billa", "bills", "billy", "bilos", "bilsh",
      "bimah", "bimas", "bimbo", "binal", "bindi", "binds", "biner", "bines",
      "binge", "bingo", "bings", "bingy", "binit", "binks", "binna", "binny",
      "bints", "biogs", "biome", "biont", "biose", "biota", "biped", "bipod",
      "birch", "birde", "birds", "birdy", "birks", "birky", "birle", "birls",
      "birma", "birne", "birny", "biron", "biros", "birri", "birrs", "birse",
      "birsy", "birth", "bises", "biset", "bisie", "bisks", "bisme", "bisom",
      "bison", "bisso", "bisti", "bitch", "bited", "biter", "bites", "bitis",
      "bitos", "bitou", "bitsy", "bitte", "bitts", "bitty", "biune", "bivia",
      "bivvy", "bixin", "bizel", "bizen", "bizes", "bizet", "bizzo", "bizzy",
      "blabs", "black", "blade", "blads", "blady", "blaer", "blaes", "blaff",
      "blags", "blahs", "blain", "blair", "blake", "blame", "blams", "blanc",
      "bland", "blank", "blare", "blart", "blase", "blash", "blast", "blate",
      "blats", "blatt", "blaud", "blawn", "blaws", "blayk", "blays", "blaze",
      "blazy", "bleak", "blear", "bleat", "blebs", "blech", "bleck", "bleed",
      "bleep", "blees", "blend", "blenk", "blens", "blent", "blere", "blert",
      "bless", "blest", "blets", "bleys", "blibe", "blick", "blier", "blimp",
      "blimy", "blind", "bling", "blini", "blink", "blins", "bliny", "blips",
      "blirt", "bliss", "blist", "blite", "blits", "blitz", "blive", "blizz",
      "bloat", "blobs", "block", "blocs", "blogs", "bloke", "blond", "blood",
      "blook", "bloom", "bloop", "blore", "blote", "blots", "blout", "blown",
      "blows", "blowy", "blubs", "blude", "bluds", "bludy", "blued", "bluer",
      "blues", "bluet", "bluey", "bluff", "bluid", "blume", "blunk", "blunt",
      "blurb", "blurs", "blurt", "blush", "blype", "boabs", "boaks", "board",
      "boars", "boart", "boast", "boats", "bobac", "bobak", "bobas", "bobby",
      "bobet", "bobol", "bobos", "bocal", "bocca", "bocce", "bocci", "boche",
      "bocks", "bocoy", "boded", "boden", "boder", "bodes", "bodge", "bodhi",
      "bodle", "boeps", "boers", "boets", "boeuf", "boffo", "boffs", "bogan",
      "boget", "bogey", "boggy", "bogie", "bogle", "bogue", "bogum", "bogus",
      "bohea", "bohor", "bohos", "boiko", "boils", "boily", "boing", "boink",
      "boise", "boist", "boite", "boked", "bokeh", "bokes", "bokom", "bokos",
      "bolag", "bolar", "bolas", "boldo", "bolds", "boldu", "boled", "boles",
      "bolis", "bolix", "bolls", "bolly", "bolos", "bolti", "bolts", "bolty",
      "bolus", "bomas", "bombe", "bombo", "bombs", "bomos", "bonav", "bonbo",
      "bonce", "bonds", "boned", "boner", "bones", "boney", "bongo", "bongs",
      "bonie", "bonks", "bonne", "bonny", "bonos", "bonum", "bonus", "bonza",
      "bonze", "booai", "booay", "boobs", "booby", "boodh", "boody", "booed",
      "boofy", "boogy", "boohs", "books", "booky", "bools", "booly", "booms",
      "boomy", "boone", "boong", "boonk", "boons", "boord", "boors", "boort",
      "boose", "boost", "boosy", "booth", "boots", "booty", "booze", "boozy",
      "boppy", "borak", "boral", "boran", "boras", "borax", "borde", "bords",
      "bored", "boree", "borel", "borer", "bores", "borgh", "borgo", "boric",
      "borid", "boris", "borks", "borms", "borna", "borne", "boron", "borts",
      "borty", "bortz", "boryl", "bosch", "boser", "bosey", "bosie", "bosks",
      "bosky", "bosom", "boson", "bossa", "bossy", "bosun", "botan", "botas",
      "botch", "botel", "botes", "bothy", "botry", "botte", "botts", "bottu",
      "botty", "bouch", "boucl", "bouet", "bouge", "bough", "bouks", "boule",
      "boult", "bound", "bouns", "bourd", "bourg", "bourn", "bourr", "bouse",
      "bousy", "bouto", "bouts", "bovey", "bovid", "bovld", "bowat", "bowed",
      "bowel", "bower", "bowes", "bowet", "bowge", "bowie", "bowla", "bowle",
      "bowls", "bowly", "bowne", "bowrs", "bowse", "boxed", "boxen", "boxer",
      "boxes", "boxla", "boxty", "boyar", "boyau", "boyce", "boyed", "boyer",
      "boyfs", "boygs", "boyla", "boyos", "boysy", "bozal", "bozos", "bozze",
      "braai", "braca", "brace", "brach", "brack", "bract", "brads", "braes",
      "bragi", "brags", "brahm", "braid", "brail", "brain", "brake", "braks",
      "braky", "brame", "brand", "brane", "brank", "brans", "brant", "brash",
      "brass", "brast", "brats", "brava", "brave", "bravi", "bravo", "brawl",
      "brawn", "braws", "braxy", "braye", "brays", "braza", "braze", "bread",
      "break", "bream", "breba", "breck", "brede", "bredi", "breds", "breed",
      "breek", "breem", "breer", "brees", "breid", "breis", "breme", "brens",
      "brent", "brerd", "brere", "brers", "brest", "breth", "brett", "breva",
      "breve", "brevi", "brews", "breys", "brian", "briar", "bribe", "brick",
      "bride", "brief", "brier", "bries", "brigs", "brike", "briki", "briks",
      "brill", "brims", "brine", "bring", "brink", "brins", "briny", "brios",
      "brisa", "brise", "brisk", "briss", "brist", "brite", "brith", "brits",
      "britt", "briza", "brize", "brizz", "broad", "broch", "brock", "brods",
      "brogh", "brogs", "broid", "broil", "broke", "broll", "broma", "brome",
      "bromo", "bronc", "brond", "bronk", "bronx", "brood", "brook", "brool",
      "broom", "broon", "broos", "brose", "brosy", "broth", "brott", "browd",
      "brown", "brows", "brubu", "bruce", "bruet", "brugh", "bruin", "bruit",
      "bruja", "brujo", "bruke", "brule", "brume", "brune", "brung", "bruno",
      "brunt", "brush", "brusk", "brust", "bruta", "brute", "bruts", "bruzz",
      "bryan", "bryce", "bryon", "bryum", "btise", "buats", "buaze", "bubal",
      "bubas", "bubba", "bubbe", "bubby", "bubos", "bubus", "bucca", "bucco",
      "buchu", "bucko", "bucks", "bucku", "bucky", "budas", "buddh", "buddy",
      "budge", "budgy", "budis", "budos", "bueno", "buffa", "buffe", "buffi",
      "buffo", "buffs", "buffy", "bufos", "bufty", "bugan", "buggy", "bught",
      "bugle", "bugre", "buhls", "buhrs", "buick", "buiks", "build", "built",
      "buist", "bukat", "bukes", "bulak", "bulbs", "bulby", "bulge", "bulgy",
      "bulks", "bulky", "bulla", "bulls", "bully", "bulse", "bumbo", "bumfs",
      "bumph", "bumps", "bumpy", "bunas", "bunce", "bunch", "bunco", "bunda",
      "bunde", "bundh", "bunds", "bundt", "bundu", "bundy", "bunga", "bungo",
      "bungs", "bungy", "bunia", "bunje", "bunjy", "bunko", "bunks", "bunns",
      "bunny", "bunts", "bunty", "bunya", "buoys", "buppy", "buran", "burao",
      "buras", "burbs", "burds", "burel", "buret", "burez", "burfi", "burga",
      "burge", "burgh", "burgs", "burin", "burka", "burke", "burks", "burls",
      "burly", "burma", "burns", "burnt", "burny", "buroo", "burps", "burqa",
      "burro", "burrs", "burry", "bursa", "burse", "burst", "burut", "burys",
      "busby", "bused", "buses", "bushi", "bushy", "busks", "busky", "bussu",
      "bussy", "busti", "busto", "busts", "busty", "butat", "butch", "butea",
      "buteo", "butes", "butic", "butin", "butle", "butoh", "butsu", "butte",
      "butts", "butty", "butut", "butyl", "butyn", "butyr", "buxom", "buxus",
      "buyer", "buzzy", "bwana", "bwazi", "byard", "byded", "bydes", "byked",
      "bykes", "bylaw", "bynin", "byous", "byres", "byrls", "byron", "byrri",
      "bysen", "byssi", "bytes", "byway", "caaba", "caaed", "caama", "cabaa",
      "cabal", "caban", "cabas", "cabby", "cabda", "caber", "cabin", "cabio",
      "cable", "cabob", "caboc", "cabot", "cabre", "cacam", "cacan", "cacao",
      "cacas", "cacei", "cache", "cacks", "cacky", "cacti", "cacur", "caddo",
      "caddy", "cadee", "cader", "cades", "cadet", "cadew", "cadge", "cadgy",
      "cadie", "cadis", "cados", "cadre", "cadua", "cadus", "caeca", "caese",
      "cafes", "caffa", "caffs", "cafiz", "cafoy", "caged", "cager", "cages",
      "cagey", "caggy", "cagit", "cagot", "cagui", "cahiz", "cahot", "cahow",
      "cahuy", "caids", "cains", "caird", "cairn", "cairo", "caite", "cajan",
      "cajon", "cajou", "cajun", "caked", "caker", "cakes", "cakey", "cakra",
      "calas", "calci", "caleb", "calef", "calfs", "calic", "calid", "calif",
      "calin", "calix", "calks", "calla", "calli", "callo", "calls", "calms",
      "calmy", "calor", "calos", "calpa", "calps", "calve", "calyx", "caman",
      "camas", "camay", "camel", "cameo", "cames", "camis", "camla", "camos",
      "campa", "campe", "campi", "campo", "camps", "campy", "camus", "canal",
      "canap", "canch", "candy", "caned", "caneh", "canel", "caner", "canes",
      "cangs", "cangy", "canid", "canis", "canli", "canna", "canns", "canny",
      "canoe", "canon", "canos", "canso", "canst", "canto", "cants", "canty",
      "canun", "canzo", "caoba", "capas", "capax", "caped", "capel", "caper",
      "capes", "capex", "caphs", "capiz", "caple", "capoc", "capon", "capos",
      "capot", "cappy", "capra", "capri", "capsa", "capul", "caput", "caque",
      "carap", "carat", "carbo", "carbs", "carby", "cardi", "cardo", "cards",
      "cardy", "cared", "carer", "cares", "caret", "carex", "carey", "carga",
      "cargo", "carib", "carid", "carks", "carle", "carli", "carlo", "carls",
      "carne", "carns", "carny", "caroa", "carob", "carol", "carom", "caron",
      "carot", "carpe", "carpi", "carps", "carri", "carrs", "carry", "carse",
      "carta", "carte", "carts", "carty", "carua", "carum", "carus", "carve",
      "carvy", "carya", "caryl", "casal", "casas", "casco", "cased", "casel",
      "caser", "cases", "casey", "casha", "casks", "casky", "casse", "cassy",
      "caste", "casts", "casus", "catan", "catch", "catel", "cater", "cates",
      "catha", "cathy", "catso", "catti", "catty", "catur", "cauch", "cauda",
      "cauks", "cauld", "cauli", "caulk", "cauls", "cauma", "caums", "caupo",
      "caups", "cauri", "causa", "cause", "cavae", "caval", "cavas", "cavea",
      "caved", "cavel", "caver", "caves", "cavey", "cavia", "cavie", "cavil",
      "cavin", "cavum", "cavus", "cawed", "cawks", "cawky", "cawny", "caxon",
      "cayos", "ccitt", "ccoya", "cease", "ceaze", "cebid", "cebil", "cebur",
      "cebus", "cecal", "cecca", "cecil", "cecum", "cedar", "ceded", "ceder",
      "cedes", "cedis", "cedre", "cedry", "ceiba", "ceibo", "ceile", "ceili",
      "ceils", "ceint", "celeb", "celia", "cella", "celli", "cello", "cells",
      "celom", "celts", "cense", "centi", "cento", "cents", "centu", "ceorl",
      "cepes", "cequi", "ceral", "ceras", "cerat", "cerci", "cered", "cerer",
      "ceres", "cerge", "ceria", "ceric", "cerin", "cerne", "ceroc", "ceros",
      "certs", "certy", "ceryl", "cesar", "cesse", "cesta", "ceste", "cesti",
      "cetes", "cetic", "cetid", "cetin", "cetus", "cetyl", "cezve", "chace",
      "chack", "chaco", "chado", "chads", "chafe", "chaff", "chaft", "chaga",
      "chain", "chair", "chais", "chait", "chaja", "chaka", "chalk", "chals",
      "chama", "chamm", "champ", "chams", "chana", "chane", "chang", "chank",
      "chant", "chaos", "chape", "chaps", "chapt", "chara", "chard", "chare",
      "chark", "charm", "charr", "chars", "chart", "chary", "chase", "chasm",
      "chass", "chati", "chats", "chaui", "chauk", "chaum", "chaus", "chave",
      "chavs", "chawk", "chawl", "chawn", "chaws", "chaya", "chays", "chazy",
      "cheap", "cheat", "check", "cheek", "cheep", "cheer", "cheet", "chefs",
      "chego", "cheir", "cheka", "cheke", "cheki", "chela", "chelp", "chemo",
      "chems", "chena", "cheng", "chera", "chere", "chert", "chese", "chess",
      "chest", "cheth", "cheve", "chevy", "chews", "chewy", "chiam", "chian",
      "chiao", "chias", "chiba", "chibs", "chica", "chich", "chick", "chico",
      "chics", "chide", "chief", "chiel", "chien", "chiks", "child", "chile",
      "chili", "chill", "chimb", "chime", "chimo", "chimp", "chimu", "china",
      "chine", "ching", "chink", "chino", "chins", "chint", "chiot", "chips",
      "chirk", "chirl", "chirm", "chiro", "chirp", "chirr", "chirt", "chiru",
      "chita", "chits", "chive", "chivs", "chivw", "chivy", "chizz", "chloe",
      "chlor", "choak", "choca", "chock", "choco", "chocs", "chode", "choel",
      "choes", "choga", "chogs", "choil", "choir", "choke", "choko", "choky",
      "chola", "chold", "choli", "cholo", "chomp", "chonk", "chons", "choof",
      "chook", "choom", "choon", "choop", "chopa", "chops", "chora", "chord",
      "chore", "chort", "chose", "chota", "chott", "choup", "chous", "chout",
      "choux", "chowk", "chows", "choya", "chria", "chris", "chron", "chubb",
      "chubs", "chuck", "chude", "chuet", "chufa", "chuff", "chugs", "chuje",
      "chump", "chums", "chung", "chunk", "churl", "churm", "churn", "churr",
      "chuse", "chute", "chuts", "chwas", "chyak", "chyle", "chyme", "chynd",
      "cibol", "cicad", "cicer", "cided", "cider", "cides", "ciels", "cigar",
      "ciggy", "cigua", "cilia", "cills", "cimar", "cimex", "cinch", "cinct",
      "cindy", "cinel", "cines", "cinqs", "cions", "cippi", "circa", "circe",
      "circs", "cires", "cirls", "cirri", "cisco", "cissy", "cista", "cists",
      "cital", "cited", "citee", "citer", "cites", "citua", "cives", "civet",
      "civic", "civie", "civil", "civvy", "cizar", "clach", "clack", "clade",
      "clads", "claes", "clags", "claik", "claim", "clair", "clake", "clamb",
      "clame", "clamp", "clams", "clang", "clank", "clans", "clape", "claps",
      "clapt", "clara", "clare", "clark", "claro", "clart", "clary", "clash",
      "clasp", "class", "clast", "clats", "claus", "claut", "clava", "clave",
      "clavi", "clavy", "clawk", "claws", "claye", "clays", "clead", "cleam",
      "clean", "clear", "cleat", "cleck", "cleek", "cleep", "clefs", "cleft",
      "clegs", "cleik", "clems", "clepe", "clept", "clerk", "cleuk", "cleve",
      "clews", "clich", "click", "clied", "clies", "cliff", "clift", "clima",
      "climb", "clime", "cline", "cling", "clink", "clint", "clipe", "clips",
      "clipt", "clite", "clits", "clive", "cloak", "cloam", "clock", "clods",
      "cloes", "cloff", "clogs", "cloit", "cloke", "cloky", "clomb", "clomp",
      "clone", "clong", "clonk", "clons", "cloof", "cloop", "cloot", "clops",
      "close", "closh", "clote", "cloth", "clots", "cloud", "clour", "clous",
      "clout", "clove", "clown", "clows", "cloye", "cloys", "cloze", "clubs",
      "cluck", "clued", "clues", "cluey", "cluff", "clump", "clung", "clunk",
      "clyde", "clyer", "clype", "cnida", "coach", "coact", "coady", "coaid",
      "coala", "coals", "coaly", "coapt", "coarb", "coart", "coast", "coate",
      "coati", "coats", "coaxy", "cobbs", "cobby", "cobia", "coble", "cobol",
      "cobra", "cobus", "cobza", "cocao", "cocas", "cocci", "cocco", "cocin",
      "cocks", "cocky", "cocle", "cocoa", "cocos", "cocus", "codal", "codas",
      "coddy", "codec", "coded", "coden", "coder", "codes", "codex", "codol",
      "codon", "coeds", "coeff", "coeno", "coffs", "cogie", "cogit", "cogon",
      "cogue", "cohab", "cohen", "cohob", "cohoe", "cohog", "cohol", "cohos",
      "cohow", "cohue", "coifs", "coign", "coils", "coing", "coins", "coiny",
      "coirs", "coits", "coked", "coker", "cokes", "cokey", "cokie", "colan",
      "colas", "colat", "colby", "colds", "coled", "colen", "coles", "colet",
      "coley", "colic", "colin", "colla", "colls", "colly", "colob", "colog",
      "colon", "color", "colts", "colza", "comae", "comal", "coman", "comas",
      "combe", "combi", "combo", "combs", "comby", "comdg", "comdr", "comdt",
      "comer", "comes", "comet", "comfy", "comic", "comid", "comix", "comma",
      "comme", "commo", "comms", "commy", "comox", "compd", "compo", "comps",
      "compt", "comte", "comus", "conal", "conch", "concn", "condo", "coned",
      "coner", "cones", "coney", "confr", "confs", "conga", "conge", "congo",
      "conia", "conic", "conin", "conks", "conky", "conli", "conne", "conns",
      "connu", "conny", "conor", "conoy", "const", "consy", "contd", "conte",
      "contg", "conto", "contr", "conus", "convo", "cooba", "cooch", "cooed",
      "cooee", "cooer", "cooey", "coofs", "cooja", "cooks", "cooky", "cools",
      "cooly", "coomb", "cooms", "coomy", "coons", "coony", "coops", "coopt",
      "coorg", "coost", "cooth", "coots", "cooty", "cooze", "copal", "copay",
      "coped", "copei", "copen", "coper", "copes", "copia", "copis", "coppa",
      "copps", "coppy", "copra", "copse", "copsy", "copus", "coque", "coqui",
      "corah", "coral", "coram", "coran", "corbe", "corby", "cords", "cordy",
      "cored", "coree", "corer", "cores", "corey", "corge", "corgi", "coria",
      "corin", "corke", "corks", "corky", "corms", "corni", "corno", "corns",
      "cornu", "corny", "coroa", "corol", "corpl", "corpn", "corps", "corse",
      "corso", "corsy", "corta", "corve", "corvo", "coryl", "cosec", "cosed",
      "cosen", "coses", "coset", "cosey", "cosie", "cosin", "cosmo", "cosse",
      "costa", "coste", "costs", "cotan", "cotch", "coted", "cotes", "cothe",
      "coths", "cothy", "cotta", "cotte", "cotts", "cotty", "cotys", "couac",
      "couch", "coude", "cough", "could", "couma", "count", "coupe", "coups",
      "courb", "courd", "coure", "cours", "court", "couta", "couth", "couve",
      "coved", "coven", "cover", "coves", "covet", "covey", "covid", "covin",
      "cowal", "cowan", "cowed", "cower", "cowks", "cowle", "cowls", "cowps",
      "cowry", "coxae", "coxal", "coxed", "coxes", "coxib", "coyan", "coyau",
      "coyed", "coyer", "coyly", "coyol", "coyos", "coypu", "cozed", "cozen",
      "cozes", "cozey", "cozie", "craal", "crabs", "crack", "craft", "crags",
      "craic", "craie", "craig", "craik", "crain", "crake", "crame", "cramp",
      "crams", "crane", "crang", "crank", "crans", "crany", "crape", "craps",
      "crapy", "crare", "crash", "crass", "crate", "crave", "cravo", "crawl",
      "crawm", "craws", "craye", "crays", "craze", "crazy", "crcao", "crche",
      "cread", "creak", "cream", "creat", "creda", "credo", "creds", "creed",
      "creek", "creel", "creem", "creen", "creep", "crees", "creme", "crems",
      "crena", "crepe", "creps", "crept", "crepy", "cresc", "cress", "crest",
      "creta", "crete", "crewe", "crews", "crias", "cribo", "cribs", "crick",
      "cried", "crier", "cries", "criey", "crile", "crime", "crimp", "crims",
      "crine", "crink", "crios", "cripe", "crips", "crise", "crisp", "criss",
      "crith", "crits", "croak", "croat", "croci", "crock", "crocs", "croft",
      "crogs", "crois", "cromb", "crome", "crone", "cronk", "crons", "crony",
      "crood", "crook", "crool", "croon", "crops", "crore", "crosa", "crose",
      "cross", "crost", "croup", "crout", "crowd", "crowl", "crown", "crows",
      "croyl", "croze", "cruce", "cruck", "crude", "crudo", "cruds", "crudy",
      "cruel", "crues", "cruet", "cruft", "crull", "crumb", "crump", "crunk",
      "crunt", "cruor", "crura", "cruse", "crush", "crust", "crusy", "cruth",
      "cruve", "crwth", "cryal", "cryer", "crypt", "cryst", "csect", "csnet",
      "ctene", "ctimo", "cuban", "cubas", "cubby", "cubeb", "cubed", "cuber",
      "cubes", "cubic", "cubit", "cubla", "cubti", "cucuy", "cuddy", "cueca",
      "cueva", "cuffo", "cuffs", "cuffy", "cufic", "cuifs", "cuing", "cuish",
      "cuits", "cujam", "cukes", "culch", "culet", "culex", "culla", "culls",
      "cully", "culms", "culmy", "culot", "culpa", "culti", "cults", "culty",
      "cumal", "cumar", "cumay", "cumbu", "cumec", "cumic", "cumin", "cumly",
      "cumol", "cumyl", "cunan", "cunas", "cundy", "cunea", "cunei", "cunit",
      "cunni", "cunny", "cunts", "cunye", "cunza", "cupay", "cupel", "cupid",
      "cuppa", "cuppy", "curat", "curbs", "curby", "curch", "curds", "curdy",
      "cured", "curer", "cures", "curet", "curfs", "curia", "curie", "curin",
      "curio", "curli", "curls", "curly", "curns", "curny", "currs", "curry",
      "cursa", "curse", "cursi", "curst", "curua", "curve", "curvy", "cusec",
      "cushy", "cusie", "cusks", "cusps", "cuspy", "cusso", "cusum", "cutch",
      "cuter", "cutes", "cutey", "cutie", "cutin", "cutis", "cutto", "cutty",
      "cutup", "cuvee", "cuyas", "cuzes", "cwtch", "cyano", "cyans", "cyath",
      "cyber", "cycad", "cycas", "cycle", "cyclo", "cyder", "cydon", "cylix",
      "cymae", "cymar", "cymas", "cymba", "cymes", "cymol", "cymry", "cynic",
      "cypre", "cyril", "cyrus", "cysts", "cytes", "cytol", "cyton", "czars",
      "czech", "daals", "dabba", "dabby", "dabih", "dabuh", "daces", "dacha",
      "dachs", "dacks", "dacus", "dadah", "dadap", "dadas", "daddy", "dados",
      "daeva", "daffs", "daffy", "dafla", "dagga", "daggy", "dagon", "dagos",
      "dahls", "dahms", "daijo", "daiko", "daily", "daine", "daint", "daira",
      "dairi", "dairt", "dairy", "daisy", "daiva", "daker", "dakir", "dalai",
      "dalan", "dalar", "dalea", "daled", "daler", "dales", "dalis", "dalle",
      "dally", "dalts", "daman", "damar", "damas", "dames", "damia", "damie",
      "damme", "damns", "damon", "damps", "dampy", "danae", "danai", "dance",
      "dancy", "danda", "dandy", "danes", "dangs", "danic", "danio", "danke",
      "danks", "danli", "danny", "dansk", "dansy", "danta", "dante", "dants",
      "darac", "daraf", "darat", "darbs", "darby", "darci", "darcy", "dared",
      "daren", "darer", "dares", "darga", "dargo", "dargs", "daric", "darii",
      "darin", "daris", "darks", "darky", "darns", "daroo", "darre", "darst",
      "darts", "darya", "daryl", "darzi", "dashi", "dasht", "dashy", "dasnt",
      "dassy", "dasya", "datal", "datch", "dated", "dater", "dates", "datil",
      "datos", "datsw", "datto", "datum", "daube", "daubs", "dauby", "dauds",
      "dauke", "dault", "daunt", "dauri", "daurs", "dauts", "daven", "daver",
      "david", "davis", "davit", "dawah", "dawds", "dawdy", "dawed", "dawen",
      "dawks", "dawns", "dawny", "dawts", "dawut", "dayak", "dayal", "dayan",
      "daych", "daynt", "dazed", "dazer", "dazes", "deads", "deady", "deair",
      "deals", "dealt", "deans", "deare", "dearn", "dears", "deary", "deash",
      "death", "deave", "deaws", "deawy", "debag", "debar", "debat", "debby",
      "debel", "deben", "debes", "debit", "debts", "debud", "debug", "debur",
      "debus", "debut", "debye", "decad", "decaf", "decal", "decan", "decap",
      "decay", "decem", "decil", "decke", "decko", "decks", "decor", "decos",
      "decoy", "decry", "decus", "decyl", "dedal", "dedan", "deddy", "dedit",
      "deeds", "deedy", "deely", "deems", "deens", "deeny", "deeps", "deere",
      "deers", "deess", "deets", "deeve", "deevs", "defat", "defer", "defet",
      "deffo", "defis", "defix", "defog", "degas", "degum", "degus", "deice",
      "deids", "deify", "deign", "deils", "deink", "deino", "deism", "deist",
      "deity", "deked", "dekes", "dekko", "dekle", "delaw", "delay", "deled",
      "deles", "delfs", "delft", "delhi", "delia", "delim", "delis", "delit",
      "della", "dells", "delly", "deloo", "delos", "delph", "delta", "delts",
      "delve", "demal", "deman", "demes", "demic", "demit", "demob", "demoi",
      "demon", "demos", "demot", "dempt", "demur", "denar", "denat", "denay",
      "dench", "denda", "deneb", "denes", "denet", "denim", "denis", "denom",
      "dense", "dents", "denty", "deota", "deoxy", "depas", "depel", "depit",
      "depoh", "depot", "depth", "derah", "derat", "deray", "derby", "dered",
      "derek", "deres", "deric", "derig", "deriv", "derma", "derms", "derns",
      "derny", "derog", "deros", "derri", "derro", "derry", "derth", "derve",
      "dervs", "desex", "deshi", "desis", "desks", "desma", "dessa", "desse",
      "desto", "desyl", "detar", "detat", "detax", "deter", "detin", "detox",
      "dette", "detur", "deuce", "deval", "devas", "devel", "devex", "devil",
      "devis", "devon", "devos", "devot", "devow", "dewal", "dewan", "dewar",
      "dewax", "dewed", "dewer", "dewey", "dexes", "dexie", "deynt", "dhaba",
      "dhabb", "dhaks", "dhals", "dhava", "dheri", "dhikr", "dhobi", "dhoby",
      "dhole", "dholl", "dhols", "dhoni", "dhoon", "dhoti", "dhoty", "dhoul",
      "dhows", "dhuti", "dhyal", "diact", "diaka", "dials", "diamb", "diana",
      "diane", "diary", "diazo", "dibbs", "diced", "dicer", "dices", "dicey",
      "dicht", "dicks", "dicky", "dicot", "dicta", "dicts", "dicty", "didal",
      "diddy", "didie", "didle", "didna", "didnt", "didos", "didst", "didus",
      "didym", "diebs", "diego", "diels", "diene", "dieri", "diets", "diety",
      "difda", "diffs", "digby", "dight", "digit", "digne", "digor", "digue",
      "dikas", "diked", "diker", "dikes", "dikey", "dildo", "dilis", "dilli",
      "dills", "dilly", "dilos", "dimbo", "dimer", "dimes", "dimin", "dimit",
      "dimly", "dimmy", "dimna", "dimps", "dinah", "dinar", "dined", "diner",
      "dines", "dinge", "dingo", "dings", "dingy", "dinic", "dinka", "dinks",
      "dinky", "dinna", "dinos", "dints", "dinus", "diode", "diols", "dione",
      "dioon", "diose", "diota", "dioti", "dioxy", "diple", "dippy", "dipso",
      "dipsy", "dipus", "diram", "dirca", "direr", "direx", "dirge", "dirgy",
      "dirke", "dirks", "dirls", "dirts", "dirty", "disas", "disci", "disco",
      "discs", "dishy", "disks", "disli", "disme", "disna", "distn", "distr",
      "disty", "dital", "ditas", "ditch", "dited", "diter", "dites", "ditsy",
      "ditto", "ditts", "ditty", "ditzy", "diurn", "divan", "divas", "dived",
      "divel", "diver", "dives", "divet", "divia", "divid", "divis", "divna",
      "divos", "divot", "divus", "divvy", "diwan", "dixie", "dixit", "diyas",
      "dizen", "dizzy", "djave", "djinn", "djins", "djuka", "doabs", "doand",
      "doats", "doaty", "dobby", "dobes", "dobie", "dobla", "dobos", "dobra",
      "dobro", "docht", "docks", "docos", "docus", "doddy", "dodge", "dodgy",
      "dodos", "doeks", "doers", "doesn", "doest", "doeth", "doffs", "dogal",
      "dogan", "doges", "dogey", "doggo", "doggy", "dogie", "dogly", "dogma",
      "dogra", "dohyo", "doigt", "doilt", "doily", "doina", "doing", "doits",
      "dojos", "dolce", "dolci", "doled", "doles", "doley", "dolia", "dolls",
      "dolly", "dolma", "dolor", "dolos", "dolph", "dolts", "dolus", "domal",
      "domba", "domed", "domer", "domes", "domic", "dompt", "domus", "donah",
      "donal", "donar", "donas", "donat", "donax", "doncy", "donec", "donee",
      "doner", "donet", "doney", "donga", "dongs", "donia", "donis", "donko",
      "donna", "donne", "donny", "donor", "donsy", "donum", "donut", "doobs",
      "dooce", "doody", "dooja", "dooks", "doole", "dooli", "dools", "dooly",
      "dooms", "doomy", "doona", "doorn", "doors", "doozy", "dopas", "doped",
      "doper", "dopes", "dopey", "dorab", "dorad", "doray", "dorba", "dorbs",
      "doree", "dores", "dorey", "doria", "doric", "doris", "dorje", "dorks",
      "dorky", "dorms", "dormy", "dorps", "dorrs", "dorsa", "dorse", "dorsi",
      "dorts", "dorty", "dosai", "dosas", "dosed", "doseh", "doser", "doses",
      "dosha", "dosis", "dossy", "dotal", "doted", "doter", "dotes", "dotty",
      "douar", "doubt", "douce", "doucs", "dough", "dougl", "douks", "doula",
      "douma", "doums", "doups", "doura", "douse", "douts", "doved", "doven",
      "dover", "doves", "dovey", "dovie", "dowar", "dowds", "dowdy", "dowed",
      "dowel", "dower", "dowie", "dowle", "dowls", "dowly", "downa", "downs",
      "downy", "dowps", "dowry", "dowse", "dowts", "dowve", "doxed", "doxes",
      "doxie", "doyen", "doyle", "doylt", "doyly", "doyst", "dozed", "dozen",
      "dozer", "dozes", "draba", "drabs", "drack", "draco", "draff", "draft",
      "drago", "drags", "drail", "drain", "drake", "drama", "drame", "dramm",
      "drams", "drang", "drank", "drant", "drape", "draps", "drate", "drats",
      "drave", "drawk", "drawl", "drawn", "draws", "drays", "dread", "dream",
      "drear", "dreck", "dreed", "dreep", "dreer", "drees", "dregs", "dreks",
      "dreng", "drent", "drere", "dress", "drest", "dreys", "drias", "dribs",
      "drice", "dried", "drier", "dries", "drift", "drill", "drily", "drink",
      "drinn", "drips", "dript", "drisk", "drive", "drogh", "droid", "droil",
      "droit", "droke", "drole", "droll", "drome", "drona", "drone", "drony",
      "droob", "droog", "drook", "drool", "droop", "drops", "dropt", "dross",
      "droud", "drouk", "drove", "drovy", "drown", "drows", "droyl", "drubs",
      "drugs", "druid", "drums", "drung", "drunk", "drunt", "drupa", "drupe",
      "drury", "druse", "drusy", "druxy", "druze", "dryad", "dryas", "dryer",
      "dryly", "dryth", "dsect", "dsobo", "dsomo", "dtset", "duads", "duala",
      "duali", "duals", "duane", "duans", "duant", "duars", "dubba", "dubbo",
      "dubby", "dubhe", "dubio", "ducal", "ducat", "duces", "duchy", "ducks",
      "ducky", "ducts", "duddy", "duded", "dudes", "duels", "duets", "duett",
      "duffs", "duffy", "dufus", "dugal", "duhat", "duing", "duits", "dujan",
      "dukas", "duked", "dukes", "dukhn", "dukka", "dulat", "dulce", "duler",
      "dules", "dulia", "dulls", "dully", "dulse", "dumas", "dumba", "dumbo",
      "dumbs", "dumby", "dumka", "dumky", "dummy", "dumps", "dumpy", "dunal",
      "dunam", "dunce", "dunch", "dunes", "dungs", "dungy", "dunks", "dunne",
      "dunno", "dunny", "dunsh", "dunst", "dunts", "duole", "duomi", "duomo",
      "duped", "duper", "dupes", "dupla", "duple", "duply", "duppa", "duppy",
      "dural", "duras", "durax", "dured", "duree", "dures", "duret", "durgy",
      "durio", "durns", "duroc", "duros", "duroy", "durra", "durrs", "durry",
      "durst", "durum", "duryl", "durzi", "dusio", "dusks", "dusky", "dusts",
      "dusty", "dusun", "dutch", "dutra", "duvet", "duxes", "dvigu", "dwaal",
      "dwale", "dwalm", "dwams", "dwang", "dwarf", "dwaum", "dweeb", "dwell",
      "dwelt", "dwile", "dwine", "dwyka", "dyads", "dyaus", "dyers", "dying",
      "dyked", "dyker", "dykes", "dykey", "dykon", "dylan", "dynam", "dynel",
      "dynes", "dzhos", "eably", "eager", "eagle", "eagre", "ealed", "eales",
      "eaned", "eards", "eared", "earle", "earls", "early", "earns", "earnt",
      "earsh", "earst", "earth", "eased", "easel", "easer", "eases", "easle",
      "easts", "eaten", "eater", "eathe", "eaved", "eaver", "eaves", "ebbed",
      "ebbet", "eblis", "ebons", "ebony", "ebook", "ecads", "ecart", "echar",
      "echea", "eched", "eches", "echis", "echos", "ecize", "eclat", "ecoid",
      "ecole", "ecrus", "ectad", "ectal", "edana", "edder", "eddic", "eddie",
      "edema", "edgar", "edged", "edger", "edges", "edict", "edify", "edile",
      "edith", "edits", "ediya", "edoni", "edson", "educe", "educt", "edwin",
      "eejit", "eeler", "eemis", "eensy", "eerie", "eeten", "eeven", "eevns",
      "effed", "effet", "effie", "egads", "egall", "egers", "egest", "eggar",
      "egged", "egger", "egmas", "egret", "egrid", "egypt", "ehing", "eider",
      "eidos", "eight", "eigne", "eiked", "eikon", "eilds", "eimak", "eimer",
      "eisel", "eject", "ejido", "ejusd", "ekaha", "eking", "ekkas", "ekron",
      "elaic", "elain", "elamp", "eland", "elans", "elaps", "elate", "elayl",
      "elbow", "elchi", "elder", "eldin", "elean", "elect", "elegy", "eleme",
      "elemi", "eleut", "eleve", "elfed", "elfic", "elfin", "eliad", "elian",
      "elias", "elide", "elihu", "elint", "eliot", "elite", "eliza", "ellan",
      "ellen", "elmen", "elmer", "eloah", "eloge", "elogy", "eloin", "elong",
      "elope", "elops", "elpee", "elric", "elses", "elsin", "elude", "elute",
      "elvan", "elven", "elver", "elves", "elvet", "elvis", "elymi", "emacs",
      "email", "emane", "embar", "embay", "embed", "ember", "embog", "embow",
      "embox", "embue", "embus", "emcee", "emden", "emeer", "emend", "emerg",
      "emery", "emesa", "emeus", "emics", "emigr", "emily", "emirs", "emits",
      "emlen", "emmas", "emmer", "emmet", "emmew", "emmys", "emoji", "emong",
      "emony", "emory", "emote", "emove", "empeo", "empts", "empty", "emule",
      "emuls", "emure", "emyde", "emyds", "enact", "enage", "enami", "enapt",
      "enarm", "enate", "encia", "encup", "encyc", "ended", "ender", "endew",
      "endia", "endow", "endue", "eneas", "eneid", "enema", "enemy", "enent",
      "enews", "enfin", "enfix", "engem", "engin", "engle", "enhat", "eniac",
      "enjoy", "enlay", "enlit", "enmew", "ennew", "ennia", "ennog", "ennoy",
      "ennui", "enoch", "enode", "enoil", "enoki", "enols", "enorm", "enorn",
      "enows", "enpia", "enray", "enrib", "enrol", "enrut", "ensew", "ensky",
      "ensue", "entad", "ental", "entea", "enter", "entia", "entom", "entre",
      "entry", "entte", "enure", "enurn", "envoi", "envoy", "enweb", "enzym",
      "eoith", "eorls", "eosin", "epact", "epees", "epeus", "ephah", "ephas",
      "ephod", "ephoi", "ephor", "epics", "epiky", "epist", "eplot", "epoch",
      "epode", "epopt", "epoxy", "eppes", "eppie", "epris", "epsom", "epulo",
      "equal", "eques", "equid", "equip", "equiv", "equus", "erade", "erase",
      "erato", "erava", "erbia", "erect", "erept", "erevs", "ergal", "ergon",
      "ergos", "ergot", "erhus", "erian", "erica", "erick", "erics", "erika",
      "ering", "erizo", "ermit", "erned", "ernes", "ernie", "ernst", "erode",
      "erose", "erred", "erron", "error", "ersar", "erses", "eruca", "eruct",
      "erugo", "erump", "erupt", "eruvs", "erven", "ervil", "ervum", "erwin",
      "eryon", "esbay", "escar", "escot", "escry", "esere", "eshin", "esile",
      "eskar", "esker", "esnes", "espec", "esrog", "essay", "essed", "essee",
      "esses", "essex", "essie", "estab", "ester", "estoc", "estop", "estre",
      "estro", "estus", "etage", "etang", "etape", "etats", "etens", "ethal",
      "ethan", "ethel", "ether", "ethic", "ethid", "ethne", "ethos", "ethyl",
      "etiam", "etics", "etnas", "etrog", "ettin", "ettle", "etude", "etuis",
      "etuve", "etwas", "etwee", "etyma", "eucre", "eucti", "eughs", "euked",
      "euler", "eupad", "euros", "eurus", "eusol", "evade", "evang", "evans",
      "evase", "eveck", "evene", "evens", "event", "evert", "every", "evese",
      "evets", "evhoe", "evict", "evils", "evite", "evohe", "evoke", "ewder",
      "ewers", "ewery", "ewest", "ewhow", "ewing", "ewked", "exact", "exalt",
      "exams", "exaun", "excel", "excud", "excur", "exdie", "exeat", "execs",
      "exect", "exede", "exeem", "exeme", "exert", "exfil", "exhbn", "exies",
      "exile", "exine", "exing", "exion", "exist", "exite", "exits", "exlex",
      "exode", "exody", "exome", "exons", "exopt", "expat", "expdt", "expel",
      "expos", "exptl", "expwy", "exsec", "exter", "extol", "extra", "exude",
      "exuls", "exult", "exurb", "exust", "exxon", "eyass", "eyers", "eyess",
      "eyght", "eying", "eyots", "eyoty", "eyrar", "eyras", "eyren", "eyrer",
      "eyres", "eyrie", "eyrir", "ezine", "faade", "fabby", "fabes", "fable",
      "faced", "facer", "faces", "facet", "facia", "facie", "facit", "facks",
      "facta", "facto", "facts", "facty", "faddy", "faded", "faden", "fader",
      "fades", "fadge", "fadme", "fados", "faena", "faery", "faffs", "faffy",
      "fager", "faggy", "fagin", "fagot", "fagus", "faham", "faiks", "fails",
      "faine", "fains", "faint", "faire", "fairm", "fairs", "fairy", "faith",
      "faits", "faked", "faker", "fakes", "fakey", "fakie", "fakir", "falaj",
      "falco", "falda", "falla", "falls", "fally", "false", "falun", "falus",
      "famed", "fames", "fanal", "fanam", "fancy", "fands", "fanes", "fanga",
      "fango", "fangs", "fangy", "fanit", "fanks", "fanny", "fanon", "fanos",
      "fanti", "fanum", "fanwe", "faqir", "farad", "farce", "farci", "farcy",
      "farde", "fardh", "fardo", "fards", "fared", "farer", "fares", "fario",
      "farle", "farls", "farms", "farmy", "faros", "farro", "farse", "farsi",
      "farth", "farts", "fasci", "fasti", "fasts", "fatal", "fated", "fates",
      "fatil", "fatly", "fator", "fatso", "fatty", "fatwa", "faugh", "fauld",
      "fault", "faulx", "fauna", "fauns", "faurd", "fause", "faust", "faute",
      "fauts", "fauve", "favas", "favel", "faver", "faves", "favor", "favus",
      "fawns", "fawny", "faxed", "faxes", "fayal", "fayed", "fayer", "fayne",
      "fayre", "fazed", "fazes", "fchar", "fcomp", "fconv", "fdubs", "feals",
      "feare", "fears", "feart", "fease", "feast", "feats", "featy", "feaze",
      "fecal", "feces", "fecht", "fecit", "fecks", "fedex", "fedia", "feebs",
      "feeds", "feedy", "feels", "feely", "feens", "feere", "feers", "feese",
      "feest", "feeze", "fehme", "feign", "feint", "feist", "felch", "felid",
      "felis", "felix", "fella", "fells", "felly", "felon", "felts", "felty",
      "felup", "femal", "femes", "femic", "femme", "femmy", "femur", "fence",
      "fends", "fendy", "fenis", "fenks", "fenny", "fents", "feods", "feoff",
      "ferae", "feral", "ferer", "feres", "feria", "ferie", "ferio", "ferly",
      "ferme", "fermi", "ferms", "ferns", "ferny", "ferox", "ferri", "ferry",
      "ferth", "fesse", "festa", "feste", "fests", "festy", "fetal", "fetas",
      "fetch", "feted", "fetes", "fetid", "fetis", "fetor", "fetta", "fetts",
      "fetus", "fetwa", "feuar", "feuds", "feued", "feute", "fever", "fewer",
      "feyed", "feyer", "feyly", "fezes", "fezzy", "fgrid", "fhrer", "fiant",
      "fiard", "fiars", "fiats", "fiber", "fibra", "fibre", "fibro", "fibry",
      "fices", "fiche", "fichu", "ficin", "ficos", "ficus", "fidac", "fidel",
      "fides", "fidge", "fidia", "fidos", "fiefs", "field", "fiend", "fient",
      "fiere", "fieri", "fiers", "fiery", "fiest", "fifed", "fifer", "fifes",
      "fifie", "fifis", "fifth", "fifty", "figgy", "fight", "figos", "fiked",
      "fikes", "fikey", "fikie", "filao", "filar", "filch", "filea", "filed",
      "filer", "files", "filet", "filii", "filix", "filks", "filla", "fille",
      "fillo", "fills", "filly", "filmi", "films", "filmy", "filos", "filth",
      "filum", "final", "finca", "finch", "finds", "findy", "fined", "finer",
      "fines", "finew", "fingu", "finis", "finks", "finns", "finny", "finos",
      "fiord", "fiqhs", "fique", "firca", "fired", "firer", "fires", "firie",
      "firks", "firma", "firms", "firns", "firry", "first", "firth", "fiscs",
      "fishy", "fisks", "fists", "fisty", "fitch", "fitly", "fitna", "fitte",
      "fitts", "fitty", "fiver", "fives", "fixed", "fixer", "fixes", "fixit",
      "fixup", "fizzy", "fjeld", "fjord", "flabs", "flack", "flaff", "flags",
      "flail", "flain", "flair", "flake", "flaks", "flaky", "flamb", "flame",
      "flamm", "flams", "flamy", "flane", "flang", "flank", "flans", "flaps",
      "flare", "flary", "flash", "flask", "flats", "flava", "flavo", "flawn",
      "flaws", "flawy", "flaxy", "flays", "flche", "fldxt", "fleak", "fleam",
      "flear", "fleas", "fleay", "fleck", "flect", "fleek", "fleer", "flees",
      "fleet", "flegm", "flegs", "fleme", "flesh", "fleta", "fleur", "flews",
      "flexi", "flexo", "fleys", "flick", "flics", "flied", "flier", "flies",
      "flimp", "flims", "fling", "flint", "flipe", "flips", "flirs", "flirt",
      "flisk", "flite", "flits", "flitt", "fload", "float", "flobs", "flock",
      "flocs", "floes", "floey", "flogs", "floit", "flong", "flood", "flook",
      "floor", "flops", "flora", "flors", "flory", "flosh", "floss", "flota",
      "flote", "flots", "flour", "flout", "flowe", "flowk", "flown", "flows",
      "floyd", "floyt", "flrie", "flubs", "flued", "fluer", "flues", "fluey",
      "fluff", "fluid", "fluke", "fluky", "flume", "flump", "flung", "flunk",
      "fluor", "flurn", "flurr", "flurt", "flush", "flusk", "flute", "fluty",
      "fluyt", "flyby", "flyer", "flype", "flyte", "fname", "fnese", "foals",
      "foaly", "foams", "foamy", "focal", "focus", "fodda", "foder", "fodge",
      "foehn", "foeti", "fogas", "fogey", "foggy", "fogie", "fogle", "fogon",
      "fogou", "fogus", "fohat", "fohns", "foids", "foils", "foins", "foism",
      "foist", "folds", "foldy", "foley", "folia", "folic", "folie", "folio",
      "folks", "folky", "folly", "fomes", "fonda", "fonds", "fondu", "fones",
      "fonly", "fonts", "foods", "foody", "fools", "foots", "footy", "foppy",
      "foram", "foray", "forbs", "forby", "force", "forcy", "fordo", "fords",
      "fordy", "forel", "fores", "foret", "forex", "forge", "forgo", "forks",
      "forky", "forma", "forme", "forms", "formy", "forra", "forst", "forte",
      "forth", "forts", "forty", "forum", "forza", "forze", "fosie", "fossa",
      "fosse", "fotch", "fotui", "fouat", "fouds", "fouer", "fouet", "foule",
      "fouls", "found", "fount", "fourb", "fours", "foute", "fouth", "fouty",
      "fovea", "fowls", "fowth", "foxed", "foxer", "foxes", "foxie", "foxly",
      "foyer", "foyle", "foyne", "fplot", "fpsps", "frabs", "frack", "fract",
      "frags", "fraid", "fraik", "frail", "fraim", "frame", "franc", "frank",
      "franz", "frape", "frapp", "fraps", "frary", "frase", "frass", "frate",
      "frati", "frats", "fraud", "fraus", "frawn", "frayn", "frays", "fraze",
      "frden", "freak", "fream", "freck", "freed", "freen", "freer", "frees",
      "freet", "freir", "freit", "fremd", "fremt", "frena", "freon", "frere",
      "fresh", "fress", "frets", "frett", "freud", "freya", "freyr", "friar",
      "fribs", "fried", "frier", "fries", "frigs", "frija", "frike", "frill",
      "frise", "frisk", "friss", "frist", "frith", "frits", "fritt", "fritz",
      "frize", "frizz", "frock", "froes", "frogs", "frond", "frons", "front",
      "froom", "frore", "frorn", "frory", "frosh", "frosk", "frost", "froth",
      "frowl", "frown", "frows", "frowy", "froze", "frugs", "fruit", "frump",
      "frush", "frust", "fryer", "fuage", "fubar", "fubby", "fubsy", "fuchi",
      "fucks", "fucus", "fuddy", "fuder", "fudge", "fudgy", "fuels", "fuero",
      "fuffs", "fuffy", "fugal", "fuggy", "fugie", "fugio", "fugit", "fugle",
      "fugly", "fugue", "fugus", "fujis", "fulah", "fulls", "fully", "fulth",
      "fultz", "fulup", "fulwa", "fumed", "fumer", "fumes", "fumet", "fumid",
      "fundi", "funds", "fundy", "funge", "fungi", "fungo", "fungs", "funic",
      "funis", "funje", "funks", "funky", "funli", "funny", "fural", "furan",
      "furca", "furil", "furls", "furol", "furor", "furrs", "furry", "furth",
      "furud", "furyl", "furze", "furzy", "fused", "fusee", "fusel", "fuses",
      "fusht", "fusil", "fusks", "fussy", "fusts", "fusty", "fusus", "futon",
      "futwa", "fuzed", "fuzee", "fuzes", "fuzil", "fuzzy", "fyces", "fyked",
      "fykes", "fyles", "fyrds", "fytte", "gabba", "gabby", "gable", "gabon",
      "gaddi", "gader", "gades", "gadge", "gadid", "gadis", "gadje", "gadjo",
      "gadso", "gadus", "gaels", "gaffe", "gaffs", "gaged", "gagee", "gager",
      "gages", "gagor", "gaids", "gaily", "gaine", "gains", "gairs", "gaist",
      "gaita", "gaits", "gaitt", "gaius", "gaize", "gajos", "galah", "galas",
      "galax", "galbe", "galea", "galed", "galee", "galei", "galen", "gales",
      "galet", "galey", "galga", "galik", "galla", "galli", "galls", "gally",
      "galop", "galut", "galvo", "gamas", "gamay", "gamba", "gambe", "gambo",
      "gambs", "gamed", "gamer", "games", "gamey", "gamic", "gamin", "gamma",
      "gamme", "gammy", "gamps", "gamut", "ganam", "ganch", "ganda", "gandy",
      "ganef", "ganev", "ganga", "gange", "gangs", "ganja", "ganof", "gansa",
      "gansy", "ganta", "gants", "ganza", "gaols", "gaped", "gaper", "gapes",
      "gapos", "gappy", "garad", "garau", "garbe", "garbo", "garbs", "garce",
      "garda", "garde", "gardy", "gareh", "gares", "garis", "garle", "garms",
      "garni", "garon", "garoo", "garre", "garse", "garth", "garua", "garum",
      "gasan", "gases", "gashy", "gaspe", "gasps", "gaspy", "gassy", "gasts",
      "gatch", "gated", "gater", "gates", "gatha", "gaths", "gator", "gauby",
      "gauch", "gaucy", "gauds", "gaudy", "gauge", "gauje", "gauls", "gault",
      "gaums", "gaumy", "gaunt", "gaups", "gaura", "gaure", "gaurs", "gauss",
      "gauze", "gauzy", "gavel", "gavia", "gavot", "gawby", "gawcy", "gawds",
      "gawks", "gawky", "gawps", "gawsy", "gayal", "gayer", "gayly", "gazal",
      "gazar", "gazed", "gazee", "gazel", "gazer", "gazes", "gazet", "gazon",
      "gazoo", "gazoz", "gconv", "geals", "geans", "geare", "gears", "gease",
      "geast", "geats", "gebur", "gecko", "gecks", "gedds", "geeks", "geeky",
      "geeps", "geese", "geest", "gehey", "geira", "geisa", "geist", "geits",
      "gekko", "gelds", "gelee", "gelid", "gelly", "gelts", "gemel", "gemma",
      "gemmy", "gemot", "gemse", "gemul", "genae", "genal", "genas", "genep",
      "genes", "genet", "genic", "genie", "genii", "genin", "genio", "genip",
      "genit", "genny", "genoa", "genom", "genos", "genre", "genro", "gents",
      "genty", "genua", "genus", "genys", "geode", "geoff", "geoid", "geoty",
      "gerah", "gerbe", "gerbo", "geres", "gerim", "gerip", "gerle", "germs",
      "germy", "gerne", "gesan", "gesse", "gesso", "geste", "gests", "getae",
      "getah", "getas", "getfd", "getic", "getid", "getup", "geums", "geyan",
      "geyer", "ghain", "ghana", "ghast", "ghats", "ghaut", "ghazi", "ghbor",
      "ghees", "ghent", "ghess", "ghest", "ghole", "ghoom", "ghost", "ghoul",
      "ghyll", "giant", "gibbi", "gibby", "gibed", "gibel", "giber", "gibes",
      "gibli", "gibus", "giddy", "gifts", "gigas", "gigge", "gighe", "gigot",
      "gigue", "giher", "gilas", "gilds", "giles", "gilet", "gilia", "gilim",
      "gills", "gilly", "gilpy", "gilse", "gilts", "gilty", "gimel", "gimli",
      "gimme", "gimps", "gimpy", "ginch", "ginep", "ginge", "gings", "ginks",
      "ginny", "ginzo", "gipon", "gippo", "gippy", "gipsy", "girba", "girds",
      "girja", "girls", "girly", "girns", "girny", "giron", "giros", "girrs",
      "girse", "girsh", "girth", "girts", "gisel", "gisla", "gismo", "gisms",
      "gists", "gitch", "gites", "gitim", "giust", "gived", "given", "giver",
      "gives", "givey", "givin", "gizmo", "glace", "glack", "glade", "glads",
      "glady", "glaga", "glaik", "glair", "glaky", "glali", "glams", "gland",
      "glans", "glare", "glary", "glass", "glaum", "glaur", "glaux", "glave",
      "glaze", "glazy", "glead", "gleam", "glean", "gleba", "glebe", "gleby",
      "glede", "gleds", "gledy", "gleed", "gleek", "gleen", "glees", "gleet",
      "gleir", "gleis", "gleit", "glene", "glenn", "glens", "glent", "gleys",
      "glial", "glias", "glibs", "glick", "glide", "gliff", "glift", "glike",
      "glime", "glims", "glink", "glint", "glisk", "gliss", "glist", "glits",
      "glitz", "gloam", "gloat", "globe", "globi", "globs", "globy", "glode",
      "gloea", "glogg", "glome", "glomi", "gloms", "glood", "gloom", "gloop",
      "glops", "glore", "glory", "gloss", "glost", "glout", "glove", "glows",
      "gloze", "gluck", "glued", "gluer", "glues", "gluey", "glugs", "gluma",
      "glume", "glump", "glums", "gluon", "glute", "gluts", "glynn", "glyph",
      "gnarl", "gnarr", "gnars", "gnash", "gnast", "gnats", "gnawn", "gnaws",
      "gnide", "gnoff", "gnome", "gnows", "goads", "goafs", "goala", "goals",
      "goary", "goats", "goaty", "goave", "goban", "gobar", "gobbe", "gobbi",
      "gobbo", "gobby", "gobet", "gobia", "gobio", "gobis", "gobos", "godet",
      "godly", "godso", "goels", "goers", "goest", "goeth", "goety", "gofer",
      "goffs", "gogga", "gogos", "goier", "going", "gojis", "goldi", "golds",
      "goldy", "golee", "golem", "goles", "golet", "golfs", "golgi", "golly",
      "goloe", "golpe", "golps", "gombo", "gomer", "gompa", "gonad", "gonal",
      "gonch", "gondi", "gonef", "goner", "goney", "gongs", "gonia", "gonid",
      "gonif", "gonks", "gonna", "gonne", "gonof", "gonys", "gonzo", "gooby",
      "goods", "goody", "gooey", "goofs", "goofy", "googs", "gooks", "gooky",
      "goold", "gools", "gooly", "gooma", "goons", "goony", "goops", "goopy",
      "goors", "goory", "goose", "goosy", "gopak", "gopik", "goral", "goran",
      "goras", "gorce", "gored", "gorer", "gores", "gorge", "goric", "goris",
      "gorki", "gorms", "gormy", "gorps", "gorra", "gorry", "gorse", "gorst",
      "gorsy", "gosht", "gosse", "gossy", "gotch", "goter", "gotha", "goths",
      "gothy", "gotos", "gotra", "gotta", "gouch", "gouda", "goudy", "gouge",
      "gouks", "goumi", "goura", "gourd", "goury", "gouts", "gouty", "gowan",
      "gowds", "gowdy", "gowfs", "gowks", "gowls", "gowns", "goxes", "goyim",
      "goyin", "goyle", "graal", "grabs", "grace", "gracy", "grade", "grads",
      "graff", "graft", "grail", "grain", "graip", "grama", "grame", "gramp",
      "grams", "gramy", "grana", "grand", "grane", "grank", "grano", "grans",
      "grant", "grape", "graph", "grapy", "grasp", "grass", "grata", "grate",
      "grave", "gravs", "gravy", "grays", "graze", "great", "grebe", "grebo",
      "grece", "greco", "greed", "greek", "green", "grees", "greet", "grege",
      "gregg", "grego", "grein", "greit", "grene", "grens", "grese", "greta",
      "grete", "greve", "grews", "grewt", "greys", "grice", "gride", "grids",
      "grief", "griff", "grift", "grigs", "grike", "grill", "grime", "grimm",
      "grimp", "grimy", "grind", "grins", "grint", "griot", "gripe", "griph",
      "grips", "gript", "gripy", "grise", "grist", "grisy", "grith", "grits",
      "grize", "groan", "groat", "grody", "groff", "grogs", "groin", "groks",
      "groma", "grond", "grone", "gront", "groof", "groom", "groop", "groot",
      "groow", "grope", "gross", "grosz", "grote", "grots", "grouf", "group",
      "grout", "grove", "grovy", "growl", "grown", "grows", "grrls", "grrrl",
      "grubs", "grued", "gruel", "grues", "grufe", "gruff", "gruft", "gruis",
      "grume", "grump", "grund", "grunt", "grush", "gruss", "gruys", "gryce",
      "gryde", "gryke", "grype", "gryph", "grypt", "gteau", "guaba", "guaco",
      "guaka", "guama", "guana", "guano", "guans", "guara", "guard", "guars",
      "guary", "guasa", "guato", "guava", "guaza", "gubat", "gubbo", "gucki",
      "gucks", "gucky", "gudes", "gudge", "gudok", "guelf", "guess", "guest",
      "guffs", "guffy", "gugal", "gugas", "guiac", "guiba", "guide", "guido",
      "guids", "guige", "guijo", "guild", "guile", "guilt", "guily", "guimp",
      "guiro", "guise", "gujar", "gulae", "gulag", "gular", "gulas", "gulch",
      "gules", "gulet", "gulfs", "gulfy", "gulix", "gulls", "gully", "gulph",
      "gulps", "gulpy", "gumbo", "gumby", "gumly", "gumma", "gummi", "gummy",
      "gumps", "gunda", "gundi", "gundy", "gunge", "gungy", "gunja", "gunks",
      "gunky", "gunne", "gunny", "guppy", "guqin", "guran", "gurdy", "gurge",
      "guric", "gurle", "gurls", "gurly", "gurns", "gurry", "gursh", "gurts",
      "gurus", "guser", "gushy", "gusla", "gusle", "gusli", "gussy", "gusto",
      "gusts", "gusty", "gutsy", "gutta", "gutte", "gutti", "gutty", "guyed",
      "guyer", "guyle", "guyot", "guyse", "guzul", "gweed", "gwely", "gwine",
      "gyals", "gyans", "gybed", "gybes", "gyeld", "gyges", "gygis", "gymel",
      "gymps", "gynae", "gynic", "gynie", "gynny", "gynos", "gyoza", "gypos",
      "gyppo", "gyppy", "gypsy", "gyral", "gyred", "gyres", "gyric", "gyron",
      "gyros", "gyrus", "gytes", "gyved", "gyves", "haafs", "haars", "habab",
      "habbe", "habet", "habit", "hable", "habub", "habus", "hacek", "hache",
      "hacht", "hacks", "hacky", "hadal", "haddo", "haded", "hades", "hadit",
      "hadji", "hadnt", "hadst", "haems", "haets", "haffs", "hafis", "hafiz",
      "hafts", "hagar", "haggs", "haggy", "hagia", "hague", "hahas", "haick",
      "haida", "haika", "haikh", "haiks", "haiku", "hails", "haily", "haine",
      "hains", "haint", "haire", "hairs", "hairy", "haith", "haiti", "hajes",
      "hajib", "hajis", "hajji", "hakam", "hakas", "hakea", "hakes", "hakim",
      "hakka", "hakus", "halal", "halas", "halch", "haldu", "haled", "haler",
      "hales", "halfa", "halfs", "halfy", "halid", "halke", "hallo", "halls",
      "halma", "halms", "haloa", "halon", "halos", "halse", "halte", "halts",
      "halva", "halve", "halwa", "halwe", "hamal", "haman", "hamba", "hamed",
      "hamel", "hames", "hamli", "hammy", "hamsa", "hamus", "hamza", "hanap",
      "hance", "hanch", "hands", "handy", "hange", "hangi", "hangs", "hanif",
      "hanks", "hankt", "hanky", "hanna", "hanoi", "hansa", "hanse", "hants",
      "haole", "haoma", "haori", "hapax", "haply", "happi", "happy", "hapus",
      "haram", "haras", "harbi", "hards", "hardy", "hared", "harem", "hares",
      "harim", "harka", "harks", "harle", "harls", "harms", "harns", "haros",
      "harpa", "harps", "harpy", "harre", "harry", "harsh", "harst", "harts",
      "hasan", "hasht", "hashy", "hasid", "hasks", "hasky", "hasnt", "hasps",
      "hasta", "haste", "hasty", "hatch", "hated", "hatel", "hater", "hates",
      "hatha", "hathi", "hatte", "hatti", "hatty", "hauds", "haufs", "haugh",
      "hauld", "haulm", "hauls", "hault", "hauns", "haunt", "hausa", "hause",
      "haust", "haute", "havel", "haven", "haver", "haves", "havoc", "hawed",
      "hawer", "hawks", "hawky", "hawms", "hawok", "hawse", "haydn", "hayed",
      "hayer", "hayes", "hayey", "hayle", "hayne", "hazan", "hazed", "hazel",
      "hazen", "hazer", "hazes", "hazle", "hdqrs", "heads", "heady", "heald",
      "heals", "heame", "heaps", "heapy", "heard", "heare", "hears", "heart",
      "heast", "heath", "heats", "heave", "heavy", "heazy", "heben", "hebes",
      "hecco", "hecht", "hecks", "hecte", "heder", "hedge", "hedgy", "heeds",
      "heedy", "heels", "heeze", "heezy", "hefte", "hefts", "hefty", "heiau",
      "heidi", "heids", "heigh", "heild", "heils", "heily", "heinz", "heirs",
      "heist", "heize", "hejab", "hejra", "helas", "helco", "heled", "helen",
      "heles", "helge", "helio", "helix", "hello", "hells", "helly", "helms",
      "heloe", "helos", "helot", "helps", "helve", "hemad", "hemal", "heman",
      "hemen", "hemes", "hemic", "hemin", "hemol", "hemps", "hempy", "henad",
      "hence", "hench", "hends", "hendy", "henen", "henge", "henna", "henny",
      "henry", "hents", "hepar", "herat", "herba", "herbs", "herby", "herds",
      "herem", "heres", "herls", "herma", "hermi", "hermo", "herms", "herne",
      "herns", "heron", "heros", "herry", "herse", "hertz", "herve", "herye",
      "hesps", "hests", "hetes", "heths", "hetty", "heuau", "heuch", "heugh",
      "hevea", "heved", "hewed", "hewel", "hewer", "hewgh", "hexad", "hexed",
      "hexer", "hexes", "hexis", "hexyl", "heyed", "heygh", "hiant", "hiate",
      "hibla", "hicht", "hichu", "hicks", "hicky", "hided", "hidel", "hider",
      "hides", "hield", "hiems", "hienz", "hiera", "highs", "hight", "higra",
      "hijab", "hijra", "hiked", "hiker", "hikes", "hikoi", "hilar", "hilch",
      "hilda", "hillo", "hills", "hilly", "hilsa", "hilts", "hilum", "hilus",
      "himbo", "himne", "hinau", "hinch", "hindi", "hinds", "hindu", "hiney",
      "hinge", "hings", "hinky", "hinny", "hints", "hiois", "hiper", "hiply",
      "hipmi", "hippa", "hippi", "hippo", "hippy", "hiram", "hired", "hiree",
      "hiren", "hirer", "hires", "hirse", "hirst", "hisis", "hispa", "hissy",
      "hists", "hitch", "hithe", "hived", "hiver", "hives", "hizen", "hoaed",
      "hoagy", "hoard", "hoars", "hoary", "hoast", "hobby", "hoboe", "hobos",
      "hocco", "hocks", "hocky", "hocus", "hodad", "hoddy", "hodge", "hodja",
      "hoers", "hogan", "hogen", "hoggs", "hoggy", "hoghs", "hogni", "hohed",
      "hoick", "hoied", "hoiks", "hoing", "hoise", "hoist", "hokan", "hokas",
      "hoked", "hoker", "hokes", "hokey", "hokis", "hokku", "hokum", "holds",
      "holed", "holer", "holes", "holey", "holia", "holks", "holla", "hollo",
      "holly", "holme", "holms", "holon", "holos", "holts", "homam", "homas",
      "homed", "homer", "homes", "homey", "homie", "homme", "homos", "honan",
      "honda", "hondo", "honds", "honed", "honer", "hones", "honey", "hongi",
      "hongs", "honks", "honky", "honor", "honzo", "hooch", "hoods", "hoody",
      "hooey", "hoofs", "hoofy", "hooka", "hooks", "hooky", "hooly", "hoons",
      "hoops", "hoord", "hoors", "hoose", "hoosh", "hoots", "hooty", "hoove",
      "hooye", "hopak", "hoped", "hoper", "hopes", "hopis", "hoppo", "hoppy",
      "horae", "horah", "horal", "horas", "horde", "horim", "horis", "horks",
      "horla", "horme", "horns", "horny", "horol", "horry", "horse", "horst",
      "horsy", "hosea", "hosed", "hosel", "hosen", "hoser", "hoses", "hosey",
      "hosta", "hosts", "hotch", "hotel", "hoten", "hotly", "hotta", "hotty",
      "houff", "houfs", "hough", "hoult", "hound", "houri", "hours", "house",
      "houss", "housy", "houts", "houve", "hovea", "hoved", "hovel", "hoven",
      "hover", "hoves", "howbe", "howdy", "howea", "howel", "howes", "howff",
      "howfs", "howks", "howls", "howre", "howso", "hoxed", "hoxes", "hoyas",
      "hoyed", "hoyle", "hsien", "hsuan", "huaca", "huaco", "huari", "huave",
      "hubba", "hubby", "hucho", "hucks", "hudna", "hudud", "huers", "huffs",
      "huffy", "huger", "huggy", "huhus", "huias", "huile", "hulas", "hulch",
      "hules", "hulks", "hulky", "hullo", "hulls", "hully", "human", "humas",
      "humbo", "humet", "humfs", "humic", "humid", "humin", "humit", "humor",
      "humph", "humps", "humpy", "humus", "hunch", "hundi", "hunks", "hunky",
      "hunts", "hurds", "hurls", "hurly", "huron", "hurra", "hurri", "hurry",
      "hurst", "hurts", "hurty", "husho", "husht", "hushy", "husks", "husky",
      "husos", "hussy", "hutch", "hutia", "hutre", "huzza", "huzzy", "hwyls",
      "hybla", "hydra", "hydro", "hyena", "hyens", "hygge", "hying", "hykes",
      "hylas", "hyleg", "hyles", "hylic", "hymen", "hymns", "hynde", "hyoid",
      "hyped", "hyper", "hypes", "hypha", "hypho", "hyphy", "hypos", "hyrax",
      "hyrse", "hyrst", "hyson", "hythe", "iambe", "iambi", "iambs", "ianus",
      "iberi", "ibota", "ibrik", "icaco", "icasm", "iceni", "icers", "iched",
      "iches", "ichor", "ichth", "icica", "icier", "icily", "icing", "icker",
      "ickle", "icons", "iconv", "ictal", "ictic", "ictus", "idaho", "idaic",
      "idant", "idcue", "iddat", "iddhi", "iddio", "ideal", "idean", "ideas",
      "idees", "ident", "idest", "ideta", "idgah", "idiom", "idion", "idiot",
      "idism", "idist", "idite", "idled", "idler", "idles", "idola", "idols",
      "idose", "idryl", "idyll", "idyls", "ierne", "ifint", "ifree", "ifrit",
      "iftar", "igapo", "igara", "igdyr", "igged", "ighly", "igloo", "iglus",
      "ignaw", "ignis", "ihlat", "ihram", "iiasa", "ijmaa", "ijore", "ikans",
      "ikary", "ikats", "ikona", "ikons", "ilama", "ileac", "ileal", "ileon",
      "ileum", "ileus", "iliac", "iliad", "ilial", "ilian", "iliau", "ilima",
      "ilion", "ilium", "iller", "illth", "illus", "iloko", "image", "imago",
      "imams", "imari", "imaum", "imban", "imbar", "imbat", "imbed", "imber",
      "imbue", "imcnt", "imide", "imido", "imids", "imine", "imino", "immew",
      "immis", "immit", "immix", "immov", "immun", "impar", "imped", "impel",
      "impen", "imper", "impis", "imply", "impot", "impro", "imput", "imshi",
      "imshy", "imvia", "inact", "inaja", "inane", "inapt", "inark", "inarm",
      "inbow", "inbox", "inbye", "incan", "incas", "incel", "incle", "incog",
      "incor", "incra", "incur", "incus", "incut", "indan", "indef", "indew",
      "index", "india", "indic", "indie", "indii", "indin", "indiv", "indol",
      "indow", "indra", "indri", "induc", "indue", "indus", "indyl", "inept",
      "ineri", "inerm", "inert", "ineye", "infer", "infin", "infit", "infix",
      "infos", "infra", "ingan", "ingem", "inger", "ingle", "inglu", "ingot",
      "inial", "inigo", "inion", "injun", "inked", "inken", "inker", "inket",
      "inkie", "inkle", "inkos", "inkra", "inlaw", "inlay", "inlet", "inmew",
      "inned", "inner", "innet", "innit", "inoma", "inone", "inorb", "inorg",
      "input", "inrol", "inrub", "inrun", "insea", "insee", "insep", "inset",
      "insol", "inspo", "instr", "insue", "intel", "inter", "intil", "intis",
      "intnl", "intra", "intro", "intsv", "intue", "inula", "inure", "inurn",
      "inust", "invar", "invoy", "inwit", "iodal", "iodic", "iodid", "iodin",
      "iodol", "ionic", "iortn", "iotas", "iowan", "iphis", "ippon", "irade",
      "irani", "iraqi", "irate", "irbis", "irena", "irene", "ireos", "irfan",
      "irgun", "irian", "irido", "irids", "iring", "irish", "irked", "iroha",
      "iroko", "irone", "irons", "irony", "irous", "irpex", "irred", "irreg",
      "irvin", "irwin", "isaac", "isawa", "isbas", "iseum", "ishes", "isiac",
      "ising", "isize", "islam", "islay", "isled", "isles", "islet", "islot",
      "ismal", "isnad", "isnae", "isoln", "isort", "issei", "issue", "isthm",
      "istle", "itala", "itali", "italy", "itchy", "itcze", "items", "itemy",
      "iters", "ither", "iulus", "ivied", "ivies", "ivory", "ivray", "ixias",
      "ixion", "ixnay", "ixora", "ixtle", "izard", "izars", "izing", "izote",
      "iztle", "izumi", "izzat", "jaaps", "jabia", "jabot", "jabul", "jacal",
      "jacht", "jacko", "jacks", "jacky", "jacob", "jaded", "jades", "jafas",
      "jaffa", "jagas", "jagat", "jager", "jaggs", "jaggy", "jagir", "jagla",
      "jagra", "jagua", "jahve", "jails", "jaime", "jaina", "jaker", "jakes",
      "jakey", "jakob", "jakos", "jakun", "jalap", "jalee", "jalet", "jalop",
      "jalor", "jalur", "jaman", "jambe", "jambo", "jambs", "jambu", "james",
      "jamie", "jammy", "jamon", "janes", "janet", "janns", "janny", "janos",
      "jantu", "janty", "janua", "janus", "japan", "japed", "japer", "japes",
      "japyx", "jarde", "jared", "jarks", "jarls", "jarmo", "jarps", "jarra",
      "jarry", "jarta", "jarul", "jarvy", "jasey", "jason", "jaspe", "jasps",
      "jatha", "jatki", "jatni", "jatos", "jauks", "jaunt", "jaups", "javan",
      "javas", "javel", "javer", "jawab", "jawan", "jawed", "jaxie", "jazey",
      "jazzy", "jeans", "jeany", "jeats", "jebat", "jebel", "jebus", "jedis",
      "jeels", "jeely", "jeeps", "jeers", "jeery", "jeeze", "jefes", "jeffs",
      "jehad", "jehup", "jehus", "jelab", "jelib", "jello", "jells", "jelly",
      "jembe", "jemez", "jemmy", "jenna", "jenny", "jeons", "jerez", "jerib",
      "jerid", "jerks", "jerky", "jerry", "jesse", "jests", "jesus", "jetes",
      "jeton", "jetty", "jeune", "jewed", "jewel", "jewie", "jewis", "jewry",
      "jhala", "jheel", "jhool", "jiaos", "jibba", "jibbs", "jibby", "jibed",
      "jiber", "jibes", "jiboa", "jiffs", "jiffy", "jiggy", "jigot", "jihad",
      "jills", "jilts", "jimbo", "jimmy", "jimpy", "jingo", "jingu", "jinja",
      "jinks", "jinne", "jinni", "jinns", "jinny", "jiqui", "jirds", "jirga",
      "jirre", "jisms", "jitro", "jived", "jiver", "jives", "jivey", "jixie",
      "jizya", "jnana", "jobed", "jobes", "jocko", "jocks", "jocky", "jocos",
      "jocum", "jodel", "joeys", "johan", "johns", "joins", "joint", "joist",
      "joked", "joker", "jokes", "jokey", "jokol", "jokul", "joled", "joles",
      "jolls", "jolly", "jolts", "jolty", "jomon", "jomos", "jonah", "jonas",
      "jones", "jongs", "jonty", "jooks", "joola", "joram", "joree", "jorge",
      "jorum", "josey", "joshi", "josie", "josip", "jotas", "jotty", "jotun",
      "joual", "jough", "jougs", "jouks", "joule", "journ", "jours", "joust",
      "jowar", "jowed", "jowel", "jower", "jowls", "jowly", "jowpy", "joyce",
      "joyed", "juang", "juans", "jubas", "jubbe", "jubes", "jubus", "jucos",
      "judah", "judas", "judex", "judge", "judgy", "judos", "jufti", "jufts",
      "jugal", "juger", "jugum", "juice", "juicy", "juise", "jujus", "juked",
      "jukes", "jukus", "julep", "jules", "julia", "julid", "julie", "julio",
      "julus", "jumar", "jumba", "jumbo", "jumby", "jumma", "jumps", "jumpy",
      "junco", "jundy", "junks", "junky", "junta", "junto", "jupes", "jupon",
      "jural", "jurat", "jurel", "jures", "juris", "juror", "jussi", "justo",
      "justs", "jutes", "jutic", "jutka", "jutty", "juves", "juvia", "juvie",
      "juxta", "juyas", "kaaba", "kaama", "kabab", "kabar", "kabel", "kabob",
      "kacha", "kacks", "kadai", "kades", "kadis", "kadmi", "kados", "kafir",
      "kafiz", "kafka", "kafta", "kagos", "kagus", "kahal", "kahar", "kahau",
      "kaiak", "kaids", "kaies", "kaifs", "kaika", "kaiks", "kails", "kaimo",
      "kaims", "kaing", "kains", "kaiwi", "kajar", "kakan", "kakar", "kakas",
      "kakis", "kakke", "kalam", "kalan", "kales", "kalif", "kalis", "kalon",
      "kalpa", "kamao", "kamas", "kamba", "kamel", "kames", "kamik", "kamis",
      "kamme", "kanae", "kanap", "kanas", "kanat", "kande", "kandy", "kaneh",
      "kanes", "kanga", "kangs", "kanji", "kannu", "kansa", "kants", "kanzu",
      "kaons", "kapai", "kapas", "kaphs", "kapok", "kapow", "kappa", "kappe",
      "kapur", "kapus", "kaput", "karas", "karat", "karbi", "karch", "karel",
      "karen", "karez", "karks", "karma", "karns", "karoo", "karos", "karou",
      "karri", "karst", "karsy", "karts", "karzy", "kaser", "kasha", "kashi",
      "kaska", "kasme", "kassu", "katal", "katar", "katas", "katat", "katha",
      "kathy", "katie", "katik", "katis", "katti", "katun", "kauch", "kaugh",
      "kauri", "kauru", "kaury", "kaval", "kavas", "kaver", "kawas", "kawau",
      "kawed", "kayak", "kayan", "kayle", "kayos", "kazak", "kazis", "kazoo",
      "kbars", "keach", "kearn", "keats", "keawe", "kebab", "kebar", "kebby",
      "kebob", "kecks", "kecky", "kedar", "kedge", "kedgy", "keech", "keefs",
      "keeks", "keels", "keema", "keena", "keeno", "keens", "keeps", "keest",
      "keets", "keeve", "kefir", "kefti", "kehua", "keirs", "keist", "keita",
      "keith", "keleh", "kelek", "kelep", "kelia", "kelim", "kella", "kells",
      "kelly", "kelps", "kelpy", "kelts", "kelty", "kemal", "kembo", "kembs",
      "kemps", "kempt", "kempy", "kenaf", "kenai", "kench", "kendo", "kendy",
      "kenno", "kenny", "kenos", "kente", "kents", "kenya", "keout", "kepis",
      "kerat", "kerbs", "kerch", "kerel", "keres", "kerfs", "kerky", "kerma",
      "kerne", "kerns", "keros", "kerri", "kerry", "kerve", "keryx", "kesar",
      "kesse", "kests", "ketal", "ketas", "ketch", "keten", "ketes", "ketol",
      "kette", "ketty", "ketyl", "kevan", "kevel", "kever", "kevil", "kevin",
      "kevyn", "kexes", "keyed", "keyer", "keywd", "khadi", "khafs", "khair",
      "khaja", "khaki", "khami", "khans", "khaph", "khasa", "khasi", "khass",
      "khats", "khaya", "khazi", "kheda", "kheth", "khets", "khila", "khmer",
      "khoja", "khoka", "khond", "khors", "khoum", "khuai", "khuds", "khula",
      "khuzi", "khvat", "kiaat", "kiack", "kiaki", "kiang", "kibbe", "kibbi",
      "kibei", "kibes", "kibla", "kicks", "kicky", "kiddo", "kiddy", "kidel",
      "kidge", "kiefs", "kiers", "kieve", "kievs", "kieye", "kight", "kikar",
      "kikes", "kikki", "kikoi", "kilah", "kilan", "kileh", "kiley", "kilij",
      "kilim", "kills", "killy", "kilns", "kilom", "kilos", "kilps", "kilts",
      "kilty", "kimbo", "kimmo", "kinah", "kinas", "kinch", "kinda", "kinds",
      "kindy", "kines", "kings", "kingu", "kinic", "kinin", "kinks", "kinky",
      "kinoo", "kinos", "kinot", "kioea", "kioko", "kiore", "kiosk", "kiowa",
      "kipes", "kippa", "kipps", "kippy", "kirby", "kirks", "kirns", "kirri",
      "kirve", "kisan", "kishy", "kisra", "kissy", "kists", "kiswa", "kitab",
      "kitan", "kitar", "kited", "kiter", "kites", "kithe", "kiths", "kitty",
      "kitul", "kivas", "kiver", "kiwai", "kiwis", "kiyas", "kizil", "klang",
      "klans", "klaps", "klaus", "kleig", "klett", "klick", "klieg", "kliks",
      "kling", "klino", "klong", "kloof", "klops", "klosh", "kluck", "kluge",
      "klunk", "klutz", "kmole", "knack", "knags", "knape", "knaps", "knark",
      "knarl", "knars", "knaur", "knave", "knawe", "knead", "kneed", "kneel",
      "knees", "knell", "knelt", "knezi", "kniaz", "knick", "knife", "knish",
      "knits", "knive", "knobs", "knock", "knoit", "knoll", "knops", "knorr",
      "knosp", "knots", "knout", "knowe", "known", "knows", "knubs", "knurl",
      "knurr", "knurs", "knute", "knuth", "knuts", "knyaz", "koala", "koali",
      "koans", "koaps", "koban", "kobos", "kobus", "kodak", "kodro", "koels",
      "koeri", "koffs", "kofta", "kogai", "kogal", "kogia", "kohas", "kohen",
      "kohls", "kohua", "koila", "koine", "kojis", "kokam", "kokan", "kokas",
      "koker", "kokia", "kokil", "kokio", "kokos", "kokra", "kokum", "kolas",
      "kolea", "kolis", "kolos", "kombu", "konak", "konbu", "konde", "kondo",
      "kongo", "kongu", "konia", "konks", "kooka", "kooks", "kooky", "koorg",
      "koori", "kopec", "kopek", "kophs", "kopis", "kopje", "koppa", "korah",
      "korai", "koran", "koras", "korat", "korea", "korec", "kores", "korin",
      "korma", "koroa", "koros", "korun", "korus", "korwa", "koses", "kosha",
      "kosin", "kosos", "kotal", "kotar", "kotch", "kotos", "kotow", "koura",
      "kouza", "kovil", "koyan", "kraal", "krabs", "kraft", "krais", "krait",
      "krama", "krang", "krans", "kranz", "kraut", "krays", "krebs", "kreep",
      "kreil", "kreis", "krems", "kreng", "krepi", "krewe", "krill", "krina",
      "kriss", "krivu", "krome", "krona", "krone", "kroon", "krosa", "krubi",
      "krunk", "ksars", "kubba", "kubie", "kudos", "kudus", "kudzu", "kufic",
      "kufis", "kugel", "kuias", "kukri", "kukui", "kukus", "kulah", "kulak",
      "kulan", "kulas", "kulfi", "kuman", "kumbi", "kumis", "kumni", "kumyk",
      "kumys", "kunai", "kunbi", "kuris", "kurku", "kurmi", "kurre", "kurta",
      "kurus", "kusam", "kusan", "kusha", "kusso", "kusti", "kusum", "kutas",
      "kutch", "kutis", "kutta", "kutus", "kuzus", "kvass", "kvell", "kvint",
      "kwapa", "kwela", "kyack", "kyaks", "kyang", "kyars", "kyats", "kybos",
      "kydst", "kyles", "kylie", "kylin", "kylix", "kyloe", "kynde", "kynds",
      "kyoto", "kypes", "kyrie", "kytes", "kythe", "kyung", "laang", "laari",
      "laban", "labba", "labby", "labda", "label", "labia", "labis", "labor",
      "labra", "lacca", "laced", "lacer", "laces", "lacet", "lacey", "lache",
      "lacis", "lacks", "lacto", "laddy", "laded", "laden", "lader", "lades",
      "ladik", "ladin", "ladle", "laers", "laeti", "laevo", "lagan", "lagen",
      "lager", "lagly", "lagna", "lahal", "lahar", "laich", "laics", "laids",
      "laigh", "laika", "laiks", "laine", "laird", "lairs", "lairy", "laith",
      "laity", "laius", "laked", "laker", "lakes", "lakey", "lakhs", "lakie",
      "lakin", "lakke", "laksa", "laldy", "lalls", "lally", "lamas", "lamba",
      "lambs", "lamby", "lamda", "lamed", "lamel", "lamer", "lames", "lamia",
      "lamin", "lammy", "lamna", "lampf", "lamps", "lamus", "lamut", "lanai",
      "lanao", "lanas", "lanaz", "lance", "lanch", "lande", "lands", "lanes",
      "laney", "langi", "lango", "lanks", "lanky", "lanny", "lansa", "lants",
      "lanum", "lapel", "lapin", "lapis", "lapje", "lapon", "lappa", "lapps",
      "lapse", "lapsi", "larch", "lards", "lardy", "laree", "lares", "large",
      "largo", "largy", "laria", "larid", "larin", "laris", "larix", "larks",
      "larky", "larns", "larnt", "laron", "larry", "larum", "larus", "larva",
      "larve", "lased", "laser", "lases", "lassi", "lasso", "lassu", "lassy",
      "lasts", "lasty", "latah", "latax", "latch", "lated", "laten", "later",
      "latex", "lathe", "lathi", "laths", "lathy", "latin", "latke", "laton",
      "latro", "latte", "latus", "lauan", "lauch", "laude", "lauds", "laufs",
      "laugh", "lauia", "laund", "laura", "laure", "laury", "lautu", "laval",
      "lavas", "laved", "laver", "laves", "lavic", "lavra", "lavvy", "lawed",
      "lawer", "lawin", "lawks", "lawns", "lawny", "lawzy", "laxed", "laxer",
      "laxes", "laxly", "layed", "layer", "layia", "layin", "layne", "layup",
      "lazar", "lazed", "lazes", "lazos", "lazzi", "lazzo", "leach", "leads",
      "leady", "leafs", "leafy", "leaks", "leaky", "leams", "leans", "leant",
      "leany", "leaps", "leapt", "leare", "learn", "lears", "leary", "lease",
      "leash", "least", "leath", "leats", "leave", "leavy", "leaze", "leban",
      "leben", "lebes", "leccy", "leche", "leden", "ledes", "ledge", "ledgy",
      "ledol", "leduc", "ledum", "leear", "leech", "leeds", "leeks", "leeky",
      "leeps", "leers", "leery", "leese", "leets", "leeze", "lefte", "lefts",
      "lefty", "legal", "leger", "leges", "legge", "leggo", "leggy", "legis",
      "legit", "legoa", "legua", "lehay", "lehrs", "lehua", "leigh", "leila",
      "leirs", "leish", "leiss", "leith", "lekha", "lelia", "leman", "lemed",
      "lemel", "lemes", "lemma", "lemme", "lemna", "lemon", "lemur", "lenad",
      "lenca", "lench", "lends", "lendu", "lenes", "lengs", "lenin", "lenis",
      "lenny", "lenos", "lense", "lenth", "lenti", "lento", "leone", "leora",
      "lepal", "lepas", "leper", "lepid", "leppy", "lepra", "lepre", "lepry",
      "lepta", "lepus", "lered", "leres", "lerot", "lerps", "lerwa", "lesbo",
      "lesed", "leses", "lesgh", "lesiy", "lessn", "leste", "lests", "lesya",
      "letch", "lethe", "lethy", "letty", "letup", "leuch", "leuco", "leuds",
      "leugh", "leuma", "leung", "levas", "levee", "level", "leven", "lever",
      "leves", "levet", "levin", "levir", "levis", "lewie", "lewis", "lewth",
      "lewty", "lexes", "lexia", "lexic", "lexis", "lezes", "lezza", "lezzy",
      "lhota", "liana", "liane", "liang", "liard", "liars", "liart", "libby",
      "libel", "liber", "libra", "libre", "libri", "libya", "licca", "licet",
      "lichi", "licht", "licit", "licks", "lidar", "lidia", "lidos", "liefs",
      "liege", "liens", "liers", "liesh", "liest", "lieue", "lieus", "lieut",
      "lieve", "lifen", "lifer", "lifes", "lifey", "lifts", "ligan", "ligas",
      "liger", "ligge", "light", "ligne", "liked", "liken", "liker", "likes",
      "likin", "lilac", "lilas", "liles", "lills", "lilly", "lilos", "lilts",
      "liman", "limas", "limax", "limba", "limbi", "limbo", "limbs", "limbu",
      "limby", "limed", "limen", "limer", "limes", "limey", "limit", "limli",
      "limma", "limmu", "limns", "limos", "limpa", "limps", "limpy", "limsy",
      "linac", "linch", "linda", "lindo", "linds", "lindy", "linea", "lined",
      "linen", "liner", "lines", "linet", "liney", "linga", "linge", "lingo",
      "lings", "lingy", "linha", "linie", "linin", "linja", "linje", "links",
      "linky", "linne", "linns", "linny", "linon", "linos", "lints", "linty",
      "linum", "linus", "linux", "lions", "lipan", "lipas", "lipes", "lipic",
      "lipid", "lipin", "lipos", "lippy", "lipse", "liras", "lirks", "lirot",
      "lisks", "lisle", "lisps", "lists", "listy", "liszt", "litai", "litas",
      "litch", "lited", "liter", "lites", "lithe", "lithi", "litho", "liths",
      "lithy", "litra", "litre", "litui", "litus", "lived", "liven", "liver",
      "lives", "livid", "livor", "livre", "liwan", "llama", "llano", "lloyd",
      "lludd", "loach", "loads", "loafs", "loams", "loamy", "loans", "loasa",
      "loast", "loath", "loave", "lobal", "lobar", "lobby", "lobed", "lobes",
      "lobos", "lobus", "local", "loche", "lochi", "lochs", "lochy", "locie",
      "locis", "locks", "locky", "locos", "locum", "locus", "loden", "lodes",
      "lodge", "lodha", "lodur", "loeil", "loess", "lofts", "lofty", "logan",
      "loges", "loggy", "logia", "logic", "logie", "login", "logis", "logoi",
      "logon", "logos", "lohan", "lohar", "loids", "loins", "loipe", "loirs",
      "lokao", "lokes", "loket", "lolls", "lolly", "lolog", "lomas", "lomed",
      "lomes", "lomta", "loner", "longa", "longe", "longs", "looby", "looch",
      "looed", "looey", "loofa", "loofs", "looie", "looks", "looky", "looms",
      "loons", "loony", "loope", "loops", "loopy", "loord", "loory", "loose",
      "loots", "loped", "loper", "lopes", "loppy", "loral", "loran", "lords",
      "lordy", "lored", "lorel", "loren", "lores", "loric", "loris", "loros",
      "lorry", "lorum", "losed", "losel", "losen", "loser", "loses", "lossy",
      "lotah", "lotan", "lotas", "lotes", "lotic", "lotor", "lotos", "lotsa",
      "lotta", "lotte", "lotto", "lotus", "louch", "loued", "louey", "lough",
      "louie", "louis", "loulu", "louma", "lound", "louns", "loupe", "loups",
      "lourd", "loure", "lours", "loury", "louse", "lousy", "louts", "louty",
      "lovat", "loved", "lovee", "lover", "loves", "lovey", "lovie", "lowan",
      "lowed", "lower", "lowes", "lowly", "lownd", "lowne", "lowns", "lowps",
      "lowry", "lowse", "lowth", "lowts", "loxed", "loxes", "loxia", "loxic",
      "loyal", "lozen", "lrecl", "luach", "luaus", "lubed", "lubes", "lubra",
      "lucan", "luces", "lucet", "lucia", "lucid", "lucks", "lucky", "lucre",
      "luddy", "ludes", "ludic", "ludos", "luffa", "luffs", "luged", "luger",
      "luges", "luian", "luigi", "luite", "lukan", "lukas", "luket", "lulab",
      "lulav", "lulls", "lully", "lulus", "lumas", "lumbi", "lumen", "lumme",
      "lummy", "lumps", "lumpy", "lumut", "lunar", "lunas", "lunch", "lunda",
      "lunel", "lunes", "lunet", "lunge", "lungi", "lungs", "lungy", "lunka",
      "lunks", "lunts", "lupid", "lupin", "lupis", "lupus", "lural", "lurch",
      "lured", "lurer", "lures", "lurex", "lurgi", "lurgy", "lurid", "lurks",
      "lurky", "lurry", "lurve", "luser", "lushy", "lusks", "lusky", "lusts",
      "lusty", "lusus", "lutao", "lutea", "luted", "luteo", "luter", "lutes",
      "lutra", "luvvy", "luxed", "luxer", "luxes", "luxus", "lweis", "lyams",
      "lyard", "lyart", "lyase", "lycea", "lycee", "lycid", "lycra", "lycus",
      "lydia", "lyery", "lygus", "lying", "lyken", "lymes", "lymph", "lynch",
      "lynes", "lynne", "lyres", "lyric", "lyrid", "lysed", "lyses", "lysin",
      "lysis", "lysol", "lyssa", "lyted", "lytes", "lythe", "lytic", "lytta",
      "maaed", "maana", "maare", "maars", "mabel", "mabes", "macan", "macao",
      "macas", "macaw", "macco", "maced", "macer", "maces", "mache", "machi",
      "macho", "machs", "macks", "macle", "macon", "macro", "madam", "madge",
      "madia", "madid", "madly", "madoc", "madre", "maerl", "mafey", "mafia",
      "mafic", "mafoo", "magas", "mages", "maggs", "maggy", "maghi", "magic",
      "magma", "magna", "magog", "magot", "magus", "mahal", "mahar", "mahat",
      "mahdi", "mahoe", "mahra", "mahri", "mahua", "mahwa", "maida", "maids",
      "maidu", "maidy", "maiid", "maiko", "maiks", "maile", "maill", "mails",
      "maims", "maine", "mains", "maint", "maire", "mairs", "maise", "maist",
      "maius", "maize", "majas", "major", "majos", "makah", "makar", "maker",
      "makes", "makis", "makos", "makua", "makuk", "malam", "malar", "malas",
      "malax", "malay", "malee", "maleo", "males", "malgr", "malic", "malie",
      "malik", "malis", "malls", "malms", "malmy", "malta", "malto", "malts",
      "malty", "malum", "malus", "malva", "malwa", "mamas", "mamba", "mambo",
      "mambu", "mamee", "mamey", "mamie", "mamma", "mammy", "mamry", "manak",
      "manal", "manas", "manat", "manba", "mande", "mandi", "mands", "maneb",
      "maned", "maneh", "manei", "manes", "manet", "maney", "manga", "mange",
      "mangi", "mango", "mangs", "mangy", "mania", "manic", "manid", "manie",
      "manis", "manit", "maniu", "manks", "manky", "manly", "manna", "manny",
      "manoc", "manor", "manos", "manqu", "manse", "manso", "manta", "manto",
      "manty", "manuf", "manul", "manus", "maori", "mapau", "maple", "mappy",
      "maqui", "marae", "marah", "maral", "maras", "maray", "march", "marci",
      "marco", "marcs", "mardi", "mardy", "marek", "mares", "marga", "marge",
      "margs", "maria", "marid", "marie", "mario", "maris", "marka", "marko",
      "marks", "marla", "marle", "marli", "marls", "marly", "marms", "marok",
      "maron", "maror", "maros", "marra", "marri", "marry", "marse", "marsh",
      "marsi", "marts", "martu", "marty", "marvy", "marys", "masai", "masas",
      "mased", "maser", "mases", "masha", "mashy", "masks", "mason", "massa",
      "masse", "massy", "masts", "masty", "masus", "matai", "matar", "matax",
      "match", "mated", "mater", "mates", "matey", "matha", "mathe", "maths",
      "matie", "matin", "matka", "matlo", "matra", "matsu", "matta", "matte",
      "matti", "matts", "matty", "matza", "matzo", "mauby", "mauds", "maugh",
      "mauls", "maund", "mauri", "mausy", "mauts", "mauve", "mauzy", "maven",
      "mavie", "mavin", "mavis", "mawed", "mawks", "mawky", "mawns", "mawrs",
      "maxed", "maxes", "maxim", "maxis", "mayan", "mayas", "maybe", "mayda",
      "mayed", "mayer", "mayey", "maynt", "mayor", "mayos", "mayst", "mazda",
      "mazed", "mazel", "mazer", "mazes", "mazey", "mazic", "mazur", "mazut",
      "mbaya", "mbira", "mbori", "mbuba", "mccoy", "mckay", "meach", "meads",
      "meals", "mealy", "meane", "means", "meant", "meany", "meare", "mease",
      "meath", "meats", "meaty", "meaul", "mebos", "mecca", "mechs", "mecks",
      "mecon", "mecum", "medal", "medea", "media", "medic", "medii", "medio",
      "medle", "medoc", "meece", "meech", "meeds", "meeks", "meers", "meese",
      "meeth", "meets", "meffs", "meggy", "meiji", "meile", "meins", "meint",
      "meiny", "meith", "mekka", "melam", "melas", "melba", "melch", "melds",
      "melee", "meles", "melia", "melic", "melik", "melis", "mells", "meloe",
      "melon", "melos", "melts", "melty", "memes", "memos", "menad", "menat",
      "mende", "mendi", "mends", "mendy", "mened", "menes", "menge", "mengs",
      "menic", "menow", "mensa", "mense", "mensh", "mensk", "menta", "mento",
      "menus", "meous", "meows", "merak", "merat", "merce", "merch", "merci",
      "mercs", "mercy", "merde", "mered", "merel", "merer", "meres", "merge",
      "mergh", "meril", "meris", "merit", "merks", "merle", "merls", "merop",
      "meros", "merry", "merse", "mesad", "mesal", "mesas", "mesel", "mesem",
      "meses", "meshy", "mesic", "mesne", "meson", "messe", "messy", "mesto",
      "mesua", "metad", "metae", "metal", "metas", "meted", "metel", "meter",
      "metes", "metho", "meths", "metic", "metif", "metin", "metis", "metol",
      "metra", "metre", "metro", "metus", "metze", "meuni", "meuse", "meute",
      "meved", "meves", "mewed", "mewer", "mewls", "meynt", "mezes", "mezze",
      "mezzo", "mhorr", "miami", "miaou", "miaow", "miasm", "miaul", "miauw",
      "micah", "micas", "miche", "micht", "micks", "micky", "micos", "micra",
      "micro", "midas", "middy", "mider", "midge", "midgy", "midis", "midst",
      "miens", "mieve", "miffs", "miffy", "mifty", "miggs", "might", "mihas",
      "mihis", "miked", "mikes", "mikey", "mikie", "mikir", "mikra", "mikva",
      "milan", "milch", "milds", "miler", "miles", "milfs", "milha", "milia",
      "milit", "milko", "milks", "milky", "milla", "mille", "mills", "milly",
      "milor", "milos", "milpa", "milts", "milty", "miltz", "mimed", "mimeo",
      "mimer", "mimes", "mimic", "mimir", "mimly", "mimsy", "mimus", "mimzy",
      "minae", "minah", "minar", "minas", "minbu", "mince", "mincy", "minds",
      "mined", "miner", "mines", "minge", "mingo", "mings", "mingy", "minie",
      "minim", "minis", "minke", "minks", "minny", "minor", "minos", "minot",
      "minow", "mints", "minty", "minum", "minus", "miqra", "mirac", "mirak",
      "mired", "mires", "mirex", "mirid", "mirin", "mirks", "mirky", "mirly",
      "miros", "mirth", "mirvs", "mirza", "misce", "misch", "misdo", "miser",
      "mises", "misgo", "misky", "misly", "misos", "missa", "missy", "mists",
      "misty", "mitch", "miter", "mites", "mitis", "mitra", "mitre", "mitts",
      "mitty", "mitua", "mixed", "mixen", "mixer", "mixes", "mixte", "mixup",
      "mizar", "mizen", "mizzy", "mnage", "mneme", "mnium", "moans", "moats",
      "mobby", "mobed", "mobes", "mobey", "mobie", "mobil", "moble", "mocha",
      "moche", "mochi", "mochs", "mochy", "mocks", "mocoa", "modal", "model",
      "modem", "moder", "modes", "modge", "modif", "modii", "modoc", "modus",
      "moeck", "moers", "mofos", "moggy", "mogos", "mogul", "mohar", "mohel",
      "mohos", "mohrs", "mohua", "mohur", "mohwa", "moier", "moile", "moils",
      "moira", "moire", "moise", "moism", "moist", "moits", "moity", "mojos",
      "mokes", "mokis", "mokos", "mokum", "molal", "molar", "molas", "molds",
      "moldy", "moled", "moler", "moles", "molet", "molge", "molka", "molla",
      "molle", "molls", "molly", "molpe", "molto", "molts", "molvi", "molys",
      "momes", "momma", "momme", "mommy", "momus", "monad", "monal", "monas",
      "monax", "monde", "mondo", "monel", "moner", "money", "mongo", "mongs",
      "monic", "monie", "monks", "monny", "monos", "monte", "month", "montu",
      "monty", "moobs", "mooch", "moods", "moody", "mooed", "mooks", "moola",
      "mooli", "mools", "mooly", "moong", "moons", "moony", "moops", "moore",
      "moorn", "moors", "moory", "moosa", "moose", "moost", "mooth", "moots",
      "moove", "mopan", "moped", "moper", "mopes", "mopey", "mopla", "moppy",
      "mopsy", "mopus", "moqui", "morae", "moral", "moran", "moras", "morat",
      "moray", "mordu", "mordv", "morel", "mores", "morga", "moria", "moric",
      "morin", "mormo", "morne", "morns", "moroc", "moron", "moror", "morph",
      "morra", "morro", "morse", "morth", "morts", "morus", "mosan", "mosed",
      "mosel", "moses", "mosey", "mosgu", "mosks", "mossi", "mosso", "mossy",
      "moste", "mosts", "mosul", "mosur", "moted", "motel", "moten", "moter",
      "motes", "motet", "motey", "moths", "mothy", "motif", "motis", "moton",
      "motor", "motte", "motto", "motts", "motty", "motus", "motza", "mouch",
      "moudy", "moues", "mould", "moule", "mouls", "moult", "mouly", "mound",
      "mount", "moups", "mourn", "mouse", "moust", "mousy", "mouth", "moved",
      "mover", "moves", "movie", "mowas", "mowch", "mowed", "mower", "mowha",
      "mowie", "mowra", "mowse", "mowth", "moxas", "moxie", "moyas", "moyen",
      "moyle", "moyls", "mozed", "mozes", "mozos", "mphps", "mpret", "msink",
      "mster", "mtier", "muang", "mucho", "mucic", "mucid", "mucin", "mucks",
      "mucky", "mucor", "mucro", "mucus", "mudar", "mudde", "muddy", "mudee",
      "mudge", "mudir", "mudra", "muffs", "muffy", "mufti", "mufty", "mugga",
      "muggs", "muggy", "mugho", "mugil", "muhly", "muids", "muils", "muirs",
      "muist", "mujik", "mukri", "mukti", "mulch", "mulct", "muled", "mules",
      "mulet", "muley", "mulga", "mulie", "mulla", "mulls", "mulse", "mulsh",
      "multi", "multo", "mumbo", "mumms", "mummy", "mumps", "mumsy", "mumus",
      "munch", "munda", "munga", "munge", "mungo", "mungs", "mungy", "munia",
      "munic", "munis", "munts", "muntu", "muntz", "muong", "muons", "mural",
      "muran", "muras", "murat", "mured", "mures", "murex", "murga", "murid",
      "murks", "murky", "murls", "murly", "murmi", "murph", "murra", "murre",
      "murri", "murrs", "murry", "murti", "murut", "murva", "murza", "musal",
      "musar", "musca", "musci", "mused", "muser", "muses", "muset", "musgu",
      "musha", "mushy", "music", "musie", "musit", "musks", "musky", "musos",
      "musse", "mussy", "musth", "musts", "musty", "mutch", "muted", "muter",
      "mutes", "mutha", "mutic", "mutis", "muton", "mutts", "mutus", "muxed",
      "muxes", "muzak", "muzzy", "mvule", "myall", "mycol", "mylar", "mymar",
      "mynah", "mynas", "myoid", "myoma", "myope", "myops", "myopy", "myron",
      "myrrh", "mysel", "mysid", "mysis", "mythi", "myths", "mythy", "myxos",
      "mzees", "naams", "naans", "nabak", "nabal", "nabby", "nabes", "nabis",
      "nabks", "nabla", "nable", "nabob", "nache", "nacho", "nacre", "nacry",
      "nadas", "nadir", "naeve", "naevi", "naffs", "nagas", "nagel", "naggy",
      "naght", "nagor", "nahal", "nahor", "nahua", "nahum", "naiad", "naias",
      "naifs", "naiks", "nails", "naily", "naira", "nairu", "nairy", "naish",
      "naive", "naked", "naker", "nakfa", "nakir", "nakoo", "nalas", "naled",
      "nalla", "namaz", "nambe", "namby", "namda", "named", "namer", "names",
      "namma", "nammo", "namus", "nanas", "nance", "nancy", "nanda", "nandi",
      "nandu", "nanes", "nanga", "nanmu", "nanna", "nanny", "nanos", "nants",
      "nantz", "nanua", "naomi", "naoto", "napal", "napas", "naped", "napes",
      "napoo", "nappa", "nappe", "nappy", "naras", "narco", "narcs", "nards",
      "nardu", "naren", "nares", "naric", "naris", "narks", "narky", "narra",
      "narre", "nasab", "nasal", "nasat", "nasch", "nashi", "nassa", "nasty",
      "nasua", "nasus", "natal", "natch", "nates", "nathe", "natis", "natty",
      "natus", "nauch", "naumk", "naunt", "naval", "navar", "navel", "naves",
      "navet", "navew", "navig", "navis", "navvy", "nawab", "nawle", "nawob",
      "nayar", "nazes", "nazim", "nazir", "nazis", "nduja", "neafe", "neals",
      "neaps", "nears", "neath", "neats", "nebby", "nebek", "nebel", "necia",
      "necks", "necro", "neddy", "needn", "needs", "needy", "neela", "neeld",
      "neele", "neemb", "neems", "neeps", "neese", "neeze", "nefas", "neffy",
      "neger", "negro", "negus", "nehru", "neifs", "neigh", "neist", "neive",
      "nejdi", "nelis", "nelly", "nemas", "nemns", "nemos", "nempt", "nenes",
      "nenta", "neons", "neoza", "nepal", "neper", "nepit", "neral", "nerds",
      "nerdy", "nerka", "nerks", "nerol", "nerts", "nertz", "nerve", "nervy",
      "nests", "nesty", "neter", "netes", "netop", "netts", "netty", "neuks",
      "neuma", "neume", "neums", "nevat", "nevel", "neven", "never", "neves",
      "nevoy", "nevus", "newar", "newbs", "newed", "newel", "newer", "newie",
      "newly", "newsy", "newts", "nexal", "nexts", "nexum", "nexus", "ngaio",
      "ngana", "ngapi", "ngati", "ngoko", "ngoma", "ngwee", "niais", "niall",
      "niata", "nibby", "nicad", "nicer", "niche", "nicht", "nicks", "nicky",
      "nicol", "nidal", "nided", "nides", "nidge", "nidor", "nidus", "niece",
      "niefs", "niels", "niepa", "nieve", "nifes", "niffs", "niffy", "nific",
      "nifle", "nifty", "nigel", "niger", "nighs", "night", "nigre", "nigua",
      "nihal", "nihil", "nikab", "nikah", "nikau", "nikko", "nikon", "nills",
      "nilot", "nimbi", "nimbs", "nimps", "niner", "nines", "ninja", "ninny",
      "ninon", "ninos", "ninox", "ninth", "nintu", "ninut", "niobe", "niota",
      "nipas", "nippy", "niqab", "niris", "nirls", "nirly", "nisan", "nisei",
      "nisse", "nisus", "nitch", "niter", "nites", "nitid", "niton", "nitos",
      "nitre", "nitro", "nitry", "nitta", "nitty", "niuan", "nival", "nixed",
      "nixer", "nixes", "nixie", "nixon", "nizam", "nizey", "njave", "nkosi",
      "noahs", "nobby", "nobel", "nobis", "noble", "nobly", "nobut", "nocht",
      "nocks", "nodal", "noddi", "noddy", "noded", "nodes", "nodus", "noels",
      "noemi", "nogai", "nogal", "noggs", "nohex", "nohow", "noils", "noily",
      "noint", "noire", "noirs", "noise", "noisy", "nokta", "noles", "nolle",
      "nolls", "nolos", "nomad", "nomap", "nomas", "nomen", "nomes", "nomic",
      "nomoi", "nomos", "nonas", "nonce", "nonda", "nondo", "nones", "nonet",
      "nongs", "nonic", "nonis", "nonly", "nonny", "nonya", "nonyl", "noobs",
      "nooit", "nooks", "nooky", "noons", "noops", "noose", "nopal", "norah",
      "noria", "noric", "norie", "noris", "norit", "norks", "norma", "norms",
      "norna", "norry", "norse", "norsk", "north", "nosed", "noser", "noses",
      "nosey", "nosig", "notal", "notan", "notch", "noted", "noter", "notes",
      "notre", "notum", "notus", "nould", "noule", "nouls", "nouns", "nouny",
      "noups", "novae", "novas", "novel", "novem", "novum", "novus", "noway",
      "nowch", "nowed", "nowel", "nowls", "nowts", "nowty", "noxal", "noxes",
      "noyau", "noyed", "noyes", "npeel", "nuadu", "nubby", "nubia", "nucal",
      "nucha", "nucin", "nuddy", "nuder", "nudes", "nudge", "nudie", "nudum",
      "nudzh", "nuffs", "nugae", "nuked", "nukes", "nulla", "nullo", "nulls",
      "numac", "numbs", "numda", "numen", "numis", "nummi", "nummy", "numps",
      "numud", "nunce", "nunch", "nunki", "nunks", "nunky", "nunni", "nunny",
      "nunry", "nuque", "nurds", "nurdy", "nurls", "nurly", "nurrs", "nurry",
      "nurse", "nursy", "nutso", "nutsy", "nutty", "nyaff", "nyala", "nyaya",
      "nydia", "nying", "nylon", "nymil", "nymph", "nymss", "nyoro", "nyssa",
      "nyxis", "oadal", "oaked", "oaken", "oaker", "oakum", "oared", "oaric",
      "oasal", "oases", "oasis", "oasts", "oaten", "oater", "oaths", "oaves",
      "obang", "obeah", "obeli", "obese", "obeys", "obias", "obied", "obiit",
      "obits", "objet", "oblat", "obley", "obmit", "oboes", "obole", "oboli",
      "obols", "occam", "occas", "occur", "ocean", "ocher", "oches", "ochna",
      "ochre", "ochro", "ochry", "ocker", "ocote", "ocque", "ocrea", "octad",
      "octal", "octan", "octas", "octet", "octic", "octyl", "ocuby", "oculi",
      "ocyte", "odahs", "odals", "odawa", "odder", "oddly", "odell", "odeon",
      "odeum", "odism", "odist", "odium", "odoom", "odors", "odour", "odyle",
      "odyls", "oecus", "oelet", "oenin", "ofays", "offal", "offed", "offer",
      "offic", "offie", "oflag", "often", "ofter", "oftly", "ogams", "ogeed",
      "ogees", "oggin", "ogham", "oghuz", "ogive", "ogled", "ogler", "ogles",
      "ogmic", "ogres", "ohare", "ohelo", "ohias", "ohing", "ohmic", "ohone",
      "oicks", "oidia", "oiled", "oiler", "oinks", "oints", "oisin", "ojime",
      "okapi", "okays", "okehs", "okras", "okrug", "oktas", "olcha", "olchi",
      "olden", "older", "oldie", "oleic", "olein", "olena", "olent", "oleos",
      "olepy", "oleum", "olios", "oliva", "olive", "ollas", "ollav", "oller",
      "ollie", "ology", "olona", "olpae", "olpes", "olson", "omaha", "omani",
      "omasa", "omber", "ombre", "ombus", "omega", "omens", "omers", "omina",
      "omits", "omlah", "omnes", "omovs", "omrah", "oncer", "onces", "oncet",
      "oncia", "oncin", "oncus", "onely", "oners", "onery", "onion", "onium",
      "onker", "onkos", "onkus", "onlap", "onlay", "onmun", "onned", "onset",
      "ontal", "ontic", "onymy", "oobit", "oohed", "oolak", "oolly", "oomph",
      "oonts", "oopak", "ooped", "oopod", "oorie", "ooses", "ootid", "oozed",
      "oozes", "oozoa", "opahs", "opals", "opata", "opelu", "opens", "opepe",
      "opera", "ophic", "ophir", "ophis", "opine", "oping", "opium", "oppos",
      "opsin", "opted", "opter", "optic", "orach", "oracy", "orage", "orale",
      "orals", "orang", "orans", "orant", "oraon", "orary", "orate", "orbed",
      "orbic", "orbit", "orcas", "orcin", "order", "ordos", "oread", "oreas",
      "orfes", "orgal", "organ", "orgia", "orgic", "orgue", "orias", "oribi",
      "oriel", "orion", "orixa", "oriya", "orkey", "orles", "orlet", "orlon",
      "orlop", "orlos", "ormer", "ornes", "ornis", "oromo", "orpin", "orpit",
      "orris", "orrow", "orsel", "orson", "ortet", "ortho", "ortol", "ortyx",
      "orval", "orvet", "oryza", "orzos", "osage", "osaka", "oscan", "oscar",
      "oscin", "osela", "oshac", "oshea", "oside", "osier", "oskar", "osmic",
      "osmin", "osmol", "osone", "ossal", "ossea", "osset", "ossia", "ostia",
      "ostic", "otaku", "otary", "otate", "other", "othin", "otium", "otkon",
      "otomi", "ottar", "otter", "ottos", "otyak", "ouabe", "oubit", "oucht",
      "ouens", "ought", "ouija", "oukia", "oulap", "oulks", "oumas", "ounce",
      "ounds", "oundy", "oupas", "ouped", "ouphe", "ouphs", "ourie", "ousel",
      "ousia", "ousts", "outas", "outby", "outdo", "outed", "outen", "outer",
      "outgo", "outly", "outre", "outro", "outta", "ouvre", "ouzel", "ouzos",
      "ovals", "ovant", "ovary", "ovate", "ovels", "ovens", "overs", "overt",
      "ovest", "ovile", "ovine", "ovism", "ovist", "ovoid", "ovoli", "ovolo",
      "ovula", "ovule", "owche", "owght", "owies", "owing", "owled", "owler",
      "owlet", "owned", "owner", "owres", "owrie", "owsen", "owser", "oxane",
      "oxbow", "oxboy", "oxers", "oxeye", "oxfly", "oxide", "oxids", "oxies",
      "oxime", "oxims", "oxlip", "oxman", "oxter", "oyana", "oyers", "oylet",
      "ozark", "ozeki", "ozena", "ozias", "ozone", "ozzie", "paals", "paans",
      "paauw", "pablo", "pacas", "pacay", "paced", "pacer", "paces", "pacey",
      "pacha", "pacht", "packs", "pacos", "pacta", "pacts", "padda", "paddy",
      "padge", "padis", "padle", "padma", "padou", "padre", "padri", "padus",
      "paean", "paedo", "paeon", "pagan", "paged", "pager", "pages", "pagle",
      "pagne", "pagod", "pagri", "pagus", "pahmi", "pahos", "paiks", "pails",
      "paine", "pains", "paint", "paire", "pairs", "pairt", "paisa", "paise",
      "pakka", "palar", "palas", "palau", "palay", "palch", "palea", "paled",
      "paler", "pales", "palet", "palew", "palis", "palki", "palla", "palli",
      "palls", "pallu", "pally", "palma", "palmo", "palms", "palmy", "palpi",
      "palps", "palsa", "palsy", "palta", "palus", "pamhy", "pamir", "pampa",
      "panak", "panax", "pance", "panda", "pands", "pandy", "paned", "panel",
      "panes", "panga", "pangi", "pangs", "panic", "panim", "panko", "panna",
      "panne", "panni", "panos", "panse", "pansy", "panto", "pants", "panty",
      "panus", "paola", "paoli", "paolo", "papal", "papas", "papaw", "paper",
      "papes", "papey", "papio", "pappi", "pappy", "papua", "papyr", "paque",
      "parae", "parah", "param", "parao", "paras", "parch", "parde", "pardi",
      "pardo", "pards", "pardy", "pared", "parel", "paren", "pareo", "parer",
      "pares", "pareu", "parev", "parge", "pargo", "paris", "parka", "parki",
      "parks", "parky", "parle", "parli", "parly", "parma", "parol", "parps",
      "parra", "parrs", "parry", "parse", "parsi", "parte", "parti", "parto",
      "parts", "party", "parus", "parve", "parvo", "pasan", "pasch", "paseo",
      "pases", "pasha", "pashm", "pasis", "paska", "pasmo", "paspy", "passe",
      "passo", "passu", "pasta", "paste", "pasts", "pasty", "pasul", "patao",
      "patas", "patch", "pated", "patee", "patel", "paten", "pater", "pates",
      "paths", "pathy", "patia", "patin", "patio", "patka", "patly", "patsy",
      "patta", "patte", "pattu", "patty", "patus", "pauas", "pauky", "paula",
      "pauls", "pause", "pauxi", "pavan", "paved", "paven", "paver", "paves",
      "pavia", "pavid", "pavin", "pavis", "pawas", "pawaw", "pawed", "pawer",
      "pawks", "pawky", "pawls", "pawns", "paxes", "payed", "payee", "payen",
      "payer", "payni", "payor", "paysd", "pbxes", "peace", "peach", "peage",
      "peags", "peaks", "peaky", "peals", "peans", "peare", "pearl", "pears",
      "peart", "pease", "peasy", "peats", "peaty", "peavy", "peaze", "peban",
      "pebas", "pecan", "pechs", "pecht", "pecke", "pecks", "pecky", "pecos",
      "pedal", "pedee", "pedes", "pedis", "pedro", "pedum", "peece", "peeke",
      "peeks", "peele", "peels", "peens", "peeoy", "peepe", "peeps", "peepy",
      "peers", "peert", "peery", "peeve", "peggy", "peghs", "pegma", "peine",
      "peins", "peise", "peize", "pekan", "pekes", "pekin", "pekoe", "pelas",
      "pelau", "peles", "pelew", "pelfs", "pells", "pelma", "pelon", "pelta",
      "pelts", "penal", "pence", "penda", "pendn", "pends", "pendu", "pened",
      "penes", "pengo", "penie", "penis", "penks", "penna", "penne", "penni",
      "penny", "pense", "pensy", "penta", "pents", "penup", "peons", "peony",
      "pepla", "pepos", "peppy", "pepsi", "perai", "perau", "perca", "perce",
      "perch", "percs", "percy", "perdu", "perdy", "perea", "peres", "peril",
      "peris", "perit", "perks", "perky", "perla", "perle", "perms", "perns",
      "perog", "perps", "perry", "perse", "perst", "perth", "perts", "perty",
      "perun", "perve", "pervo", "pervs", "pervy", "pesah", "pesky", "pesos",
      "peste", "pesto", "pests", "pesty", "petal", "petar", "peter", "petit",
      "petos", "petre", "petri", "petro", "petti", "petto", "petty", "petum",
      "peuhl", "pewee", "pewit", "peyse", "pflag", "pfund", "pgntt", "phaca",
      "phaet", "phage", "phane", "phang", "phano", "phare", "pharm", "pharo",
      "phase", "phasm", "pheal", "phebe", "pheer", "phene", "pheny", "pheon",
      "phese", "phial", "phies", "phill", "phish", "phizz", "phlox", "phoby",
      "phoca", "phoma", "phone", "phono", "phons", "phony", "phora", "phose",
      "phoss", "photo", "phots", "phpht", "phren", "phuts", "phyla", "phyle",
      "phyma", "physa", "piaba", "piala", "piani", "piano", "pians", "piast",
      "pibal", "picae", "pical", "picas", "piccy", "picea", "pichi", "picks",
      "picky", "picot", "picra", "picry", "picul", "picus", "pidan", "piece",
      "piend", "piers", "piert", "piest", "pieta", "piete", "piets", "piety",
      "piezo", "piggy", "pight", "pigly", "pigmy", "piing", "pikas", "pikau",
      "piked", "pikel", "piker", "pikes", "pikey", "pikis", "pikle", "pikul",
      "pilae", "pilaf", "pilao", "pilar", "pilau", "pilaw", "pilch", "pilea",
      "piled", "pilei", "piler", "piles", "pilin", "pilis", "pills", "pilmy",
      "pilon", "pilot", "pilow", "pilum", "pilus", "piman", "pimas", "pimps",
      "pinal", "pinas", "pinax", "pinch", "pinda", "pindy", "pined", "piner",
      "pines", "piney", "pinge", "pingo", "pings", "pinic", "pinko", "pinks",
      "pinky", "pinna", "pinny", "pinon", "pinot", "pinta", "pinte", "pinto",
      "pints", "pinup", "pinus", "pinyl", "pions", "piony", "piotr", "pious",
      "pioxe", "pioye", "pioys", "pipal", "pipas", "piped", "piper", "pipes",
      "pipet", "pipey", "pipid", "pipil", "pipis", "pipit", "pippy", "pipra",
      "pipul", "pique", "pirai", "pirls", "pirns", "pirny", "pirog", "pirol",
      "pirot", "pisan", "pisay", "pisco", "pises", "pishu", "pisky", "pisos",
      "pissy", "piste", "pisum", "pitas", "pitau", "pitch", "piths", "pithy",
      "piton", "pitot", "pitta", "piums", "piuri", "piute", "pivot", "piwut",
      "pixel", "pixes", "pixie", "pized", "pizes", "pizza", "plaas", "place",
      "plack", "plaga", "plage", "plaid", "plain", "plait", "plane", "plang",
      "plank", "plans", "plant", "plaps", "plash", "plasm", "plass", "plast",
      "plate", "plato", "plats", "platt", "platy", "plaud", "playa", "plays",
      "plaza", "plead", "pleas", "pleat", "plebe", "plebs", "pleck", "pleis",
      "plena", "pleny", "pleon", "plesh", "plews", "plica", "plied", "plier",
      "plies", "plims", "pling", "plink", "pliny", "pliss", "ploat", "ploce",
      "plock", "plods", "plomb", "plong", "plonk", "plook", "plops", "plote",
      "plots", "plott", "plotx", "plotz", "plouk", "plout", "plows", "ploye",
      "ploys", "pluck", "plues", "pluff", "plugs", "pluma", "plumb", "plume",
      "plump", "plums", "plumy", "plunk", "pluot", "plupf", "plush", "pluto",
      "plyer", "pneum", "poach", "poaka", "poake", "pobby", "poboy", "pocan",
      "poche", "pocks", "pocky", "pocul", "pocus", "podal", "poddy", "podex",
      "podge", "podgy", "podia", "podos", "poems", "poeps", "poesy", "poets",
      "pogey", "pogge", "poggy", "pogos", "pohed", "pohna", "poilu", "poind",
      "point", "poire", "poise", "pokal", "pokan", "poked", "poker", "pokes",
      "pokey", "pokie", "pokom", "polab", "polar", "poled", "poler", "poles",
      "poley", "polio", "polis", "polit", "polje", "polka", "polki", "polks",
      "polls", "polly", "poloi", "polos", "polts", "polyp", "polys", "pomak",
      "pombe", "pombo", "pomel", "pomes", "pomey", "pomme", "pommy", "pomos",
      "pompa", "pomps", "ponca", "ponce", "poncy", "pondo", "ponds", "pondy",
      "pones", "poney", "ponga", "pongo", "pongs", "pongy", "ponja", "ponks",
      "ponos", "ponto", "ponts", "ponty", "ponzu", "pooch", "poods", "pooed",
      "poofs", "poofy", "poohs", "pooja", "pooka", "pooks", "pooli", "pools",
      "pooly", "poons", "poops", "poopy", "poori", "poort", "poots", "pooty",
      "poove", "poovy", "popal", "popes", "popie", "poppa", "poppy", "popsy",
      "porae", "poral", "porch", "pored", "porer", "pores", "poret", "porge",
      "porgo", "porgy", "poria", "porin", "porks", "porky", "porno", "porns",
      "porny", "poros", "porry", "porta", "porte", "porto", "ports", "porty",
      "porus", "posca", "posed", "poser", "poses", "posey", "posho", "posit",
      "posse", "possy", "posts", "potae", "potch", "poted", "poter", "potes",
      "potin", "potoo", "potsy", "potti", "potto", "potts", "potty", "potus",
      "pouce", "pouch", "poucy", "pouff", "poufs", "pouke", "pouks", "poule",
      "poulp", "poult", "pound", "poupe", "poupt", "pours", "pousy", "pouts",
      "pouty", "powan", "power", "powin", "pownd", "powns", "powny", "powre",
      "poxed", "poxes", "poynt", "poyou", "poyse", "pozzy", "praam", "prado",
      "prads", "prahm", "prahu", "prams", "prana", "prand", "prang", "prank",
      "praos", "prase", "prate", "prats", "pratt", "praty", "praus", "prawn",
      "praya", "prays", "predy", "preed", "preen", "prees", "preif", "prela",
      "prems", "premy", "prent", "preon", "preop", "prepd", "prepg", "prepn",
      "preps", "presa", "prese", "press", "prest", "preta", "preux", "preve",
      "prexy", "preys", "prial", "priam", "price", "prich", "prick", "pricy",
      "pride", "pridy", "pried", "prief", "prier", "pries", "prigs", "prill",
      "prima", "prime", "primi", "primo", "primp", "prims", "primy", "prine",
      "prink", "print", "prion", "prior", "prise", "prism", "priss", "prius",
      "privy", "prize", "proal", "proas", "probe", "probs", "prodd", "prods",
      "proem", "profs", "progs", "proin", "proke", "prole", "proll", "promo",
      "proms", "prone", "prong", "pronk", "proof", "propr", "props", "prore",
      "prose", "proso", "pross", "prost", "prosy", "prote", "proto", "proud",
      "proul", "prove", "prowl", "prows", "proxy", "proyn", "prude", "prudy",
      "prune", "prunt", "pruta", "pryer", "pryse", "psalm", "psend", "pseud",
      "pshav", "pshaw", "psion", "psize", "psoae", "psoai", "psoas", "psora",
      "psych", "psyop", "pubal", "pubco", "pubes", "pubic", "pubis", "pucan",
      "pucer", "puces", "pucka", "pucks", "pudda", "puddy", "pudge", "pudgy",
      "pudic", "pudor", "pudsy", "pudus", "puers", "puffa", "puffs", "puffy",
      "puget", "puggi", "puggy", "pugil", "puhas", "puist", "pujah", "pujas",
      "pukas", "puked", "puker", "pukes", "pukey", "pukka", "pukus", "pulao",
      "pulas", "puled", "puler", "pules", "pulex", "pulik", "pulis", "pulka",
      "pulks", "pulli", "pulls", "pully", "pulmo", "pulps", "pulpy", "pulse",
      "pulus", "pumas", "pumex", "pumie", "pumps", "punan", "punas", "punce",
      "punch", "punct", "punga", "pungi", "pungs", "pungy", "punic", "punji",
      "punka", "punks", "punkt", "punky", "punny", "punta", "punti", "punto",
      "punts", "punty", "pupae", "pupal", "pupas", "pupil", "puppy", "pupus",
      "purau", "purda", "purdy", "pured", "puree", "purer", "pures", "purey",
      "purga", "purge", "purim", "purin", "puris", "purls", "purpy", "purre",
      "purrs", "purry", "purse", "pursy", "purty", "puses", "pushy", "pusle",
      "pussy", "putid", "puton", "putti", "putto", "putts", "putty", "puzel",
      "pwned", "pyats", "pyche", "pyets", "pygal", "pygmy", "pyins", "pylar",
      "pylic", "pylon", "pyned", "pynes", "pynot", "pyoid", "pyots", "pyral",
      "pyran", "pyres", "pyrex", "pyric", "pyros", "pyrus", "pyxed", "pyxes",
      "pyxie", "pyxis", "pzazz", "qadis", "qaids", "qajaq", "qanat", "qapik",
      "qatar", "qiana", "qibla", "qiyas", "qophs", "qorma", "quack", "quadi",
      "quads", "quaff", "quags", "quail", "quair", "quais", "quake", "quaky",
      "quale", "qualm", "quant", "quare", "quark", "quarl", "quart", "quash",
      "quasi", "quass", "quata", "quate", "quats", "quauk", "quave", "quawk",
      "quayd", "quays", "qubba", "qubit", "queak", "queal", "quean", "queen",
      "queer", "queet", "quegh", "quell", "quelt", "queme", "quena", "quent",
      "querl", "quern", "query", "quest", "queue", "queyn", "queys", "quica",
      "quich", "quick", "quids", "quiet", "quiff", "quila", "quill", "quilt",
      "quims", "quina", "quine", "quink", "quino", "quins", "quint", "quipo",
      "quips", "quipu", "quira", "quire", "quirk", "quirl", "quirt", "quist",
      "quite", "quito", "quits", "quitu", "quoad", "quods", "quoif", "quoin",
      "quoit", "quoll", "quonk", "quops", "quota", "quote", "quoth", "quott",
      "qursh", "qurti", "quyte", "raash", "rabal", "rabat", "rabbi", "rabic",
      "rabid", "rabin", "rabis", "rabot", "raced", "racer", "races", "rache",
      "racks", "racon", "radar", "radek", "radge", "radii", "radio", "radix",
      "radly", "radon", "raffe", "raffs", "rafik", "rafts", "rafty", "ragas",
      "ragde", "raged", "ragee", "rager", "rages", "ragga", "raggs", "raggy",
      "raghu", "ragis", "ragus", "rahed", "rahui", "rahul", "raiae", "raias",
      "raids", "raiks", "raile", "rails", "raine", "rains", "rainy", "raird",
      "raise", "raita", "raits", "rajab", "rajah", "rajas", "rajes", "rajiv",
      "rakan", "raked", "rakee", "raker", "rakes", "rakia", "rakis", "rakit",
      "rakus", "rales", "rally", "ralph", "ramal", "raman", "rambo", "ramed",
      "ramee", "ramen", "ramet", "ramex", "ramie", "ramin", "ramis", "rammi",
      "rammy", "ramon", "ramps", "ramta", "ramus", "ranal", "ranas", "rance",
      "ranch", "randn", "rands", "randy", "ranee", "ranga", "range", "rangi",
      "rangs", "rangy", "ranid", "ranis", "ranke", "ranks", "ranli", "ranny",
      "rants", "ranty", "raped", "raper", "rapes", "raphe", "rapic", "rapid",
      "rappe", "rared", "raree", "rarer", "rares", "rarks", "rased", "rasen",
      "raser", "rases", "rason", "rasps", "raspy", "rasse", "rasta", "rasty",
      "ratal", "ratan", "ratas", "ratch", "rated", "ratel", "rater", "rates",
      "ratha", "rathe", "raths", "ratio", "ratoo", "ratos", "ratti", "ratty",
      "ratus", "ratwa", "rauli", "rauns", "raupo", "raved", "ravel", "raven",
      "raver", "raves", "ravey", "ravin", "rawer", "rawin", "rawky", "rawly",
      "rawns", "raxed", "raxes", "rayah", "rayan", "rayas", "rayat", "rayed",
      "rayle", "rayne", "rayon", "razed", "razee", "razer", "razes", "razoo",
      "razor", "reaal", "reach", "react", "readd", "readl", "reads", "ready",
      "reais", "reaks", "realm", "realo", "reals", "reame", "reams", "reamy",
      "reans", "reaps", "rearm", "rears", "reask", "reast", "reasy", "reata",
      "reate", "reave", "rebab", "rebag", "reban", "rebar", "rebbe", "rebec",
      "rebed", "rebeg", "rebel", "rebia", "rebid", "rebit", "rebob", "rebop",
      "rebox", "rebud", "rebus", "rebut", "rebuy", "recal", "recap", "recce",
      "recco", "reccy", "recip", "recit", "recks", "recon", "recpt", "recta",
      "recti", "recto", "recur", "recut", "redan", "redds", "reddy", "reded",
      "redes", "redia", "redid", "redig", "redip", "redly", "redon", "redos",
      "redox", "redry", "redub", "redue", "redug", "redux", "redye", "reech",
      "reede", "reeds", "reedy", "reefs", "reefy", "reeks", "reeky", "reels",
      "reens", "reese", "reesk", "reest", "reeve", "refan", "refed", "refel",
      "refer", "reffo", "refis", "refit", "refix", "refly", "refry", "regal",
      "regar", "regel", "reges", "reget", "regga", "reggo", "regia", "regie",
      "regin", "regle", "regma", "regna", "regos", "regur", "rehab", "rehem",
      "rehid", "rehoe", "reice", "reich", "reifs", "reify", "reign", "reiki",
      "reiks", "reina", "reink", "reins", "reird", "reist", "reive", "rejig",
      "rejon", "reked", "rekes", "rekey", "relap", "relax", "relay", "reles",
      "relet", "relic", "relie", "relig", "relit", "rello", "relot", "reman",
      "remap", "remen", "remet", "remex", "remit", "remix", "remop", "remue",
      "remus", "renal", "renay", "rends", "rendu", "reneg", "renes", "renet",
      "renew", "reney", "renga", "renig", "renin", "renky", "renne", "renos",
      "rente", "rents", "reoil", "reorg", "reown", "repad", "repas", "repay",
      "repeg", "repel", "repen", "repew", "repic", "repin", "repla", "reply",
      "repos", "repot", "repps", "repro", "repry", "reran", "reree", "rerig",
      "rerob", "rerow", "rerub", "rerun", "resat", "resaw", "resay", "resee",
      "reses", "reset", "resew", "resex", "resid", "resin", "resit", "resod",
      "resow", "resto", "restr", "rests", "resty", "resue", "resun", "resup",
      "resus", "retag", "retal", "retan", "retar", "retax", "retch", "retem",
      "rethe", "retia", "retie", "retin", "retip", "retox", "retro", "retry",
      "reuel", "reune", "reuse", "revay", "revel", "rever", "revet", "revie",
      "revue", "rewan", "rewax", "rewed", "rewet", "rewin", "rewon", "rewth",
      "rexen", "rexes", "rezes", "rfree", "rhamn", "rheae", "rheas", "rheda",
      "rheen", "rheic", "rhein", "rhema", "rheme", "rheum", "rhies", "rhila",
      "rhime", "rhina", "rhine", "rhino", "rhoda", "rhody", "rhoeo", "rhomb",
      "rhone", "rhumb", "rhyme", "rhymy", "rhyne", "rhyta", "riads", "rials",
      "riant", "riata", "ribas", "ribat", "ribby", "ribes", "riced", "ricer",
      "rices", "ricey", "riche", "richt", "ricin", "ricks", "ricky", "riden",
      "rider", "rides", "ridge", "ridgy", "ridic", "riels", "riems", "rieve",
      "rifer", "riffi", "riffs", "rifle", "rifte", "rifts", "rifty", "rigel",
      "riggs", "right", "rigid", "rigol", "rigor", "riled", "riles", "riley",
      "rille", "rills", "rilly", "rimae", "rimal", "rimas", "rimed", "rimer",
      "rimes", "rimpi", "rimus", "rinch", "rinde", "rinds", "rindy", "rines",
      "ringe", "rings", "ringy", "rinka", "rinks", "rinse", "rioja", "riots",
      "ripal", "riped", "ripen", "riper", "ripes", "ripps", "ripup", "risen",
      "riser", "rises", "rishi", "risks", "risky", "risps", "risqu", "risus",
      "rites", "rithe", "ritsu", "ritts", "ritus", "ritzy", "rival", "rivas",
      "rived", "rivel", "riven", "river", "rives", "rivet", "riyal", "rizar",
      "rizas", "roach", "roads", "roams", "roans", "roars", "roary", "roast",
      "roate", "robed", "rober", "robes", "robin", "roble", "robot", "robur",
      "roche", "rocks", "rocky", "rocta", "roded", "rodeo", "rodes", "rodge",
      "rogan", "roger", "rogue", "roguy", "rohan", "rohes", "rohob", "rohun",
      "roids", "roils", "roily", "roins", "roist", "rojak", "rojis", "roked",
      "rokee", "roker", "rokes", "rokey", "rolag", "roleo", "roles", "rolfe",
      "rolfs", "rollo", "rolls", "romal", "roman", "romeo", "romic", "romps",
      "rompu", "rompy", "ronco", "ronde", "rondo", "roneo", "rones", "ronga",
      "ronin", "ronne", "ronni", "ronte", "ronts", "roods", "rooed", "roofs",
      "roofy", "rooks", "rooky", "rooms", "roomy", "roons", "roops", "roopy",
      "roosa", "roose", "roost", "rooti", "roots", "rooty", "roove", "roped",
      "roper", "ropes", "ropey", "roque", "roral", "rores", "roric", "rorid",
      "rorie", "rorts", "rorty", "rosal", "rosed", "rosel", "roses", "roset",
      "roshi", "rosin", "rosit", "rosti", "rosts", "rotal", "rotan", "rotas",
      "rotch", "roted", "roter", "rotes", "rotge", "rotis", "rotls", "roton",
      "rotor", "rotos", "rotse", "rotta", "rotte", "rouen", "roues", "rouge",
      "rough", "rougy", "rouky", "roule", "rouls", "roums", "round", "roups",
      "roupy", "rouse", "roust", "route", "routh", "routs", "rouyn", "roved",
      "roven", "rover", "roves", "rovet", "rowan", "rowdy", "rowed", "rowel",
      "rowen", "rower", "rowet", "rowie", "rowme", "rownd", "rowte", "rowth",
      "rowts", "rowty", "roxie", "royal", "royet", "royne", "royou", "royst",
      "rozet", "rozit", "rozum", "ruach", "ruana", "rubai", "rubby", "rubel",
      "rubes", "rubia", "rubin", "ruble", "rubli", "rubor", "rubus", "ruche",
      "rucks", "rucky", "rudas", "rudds", "ruddy", "ruder", "rudes", "rudge",
      "rudie", "rudis", "rueda", "ruely", "ruers", "ruffe", "ruffs", "rufus",
      "rugae", "rugal", "rugby", "ruggy", "ruing", "ruins", "rukhs", "ruled",
      "ruler", "rules", "rumal", "ruman", "rumba", "rumbo", "rumen", "rumes",
      "rumex", "rumly", "rummy", "rumor", "rumpo", "rumps", "rumpy", "runby",
      "runch", "rundi", "runds", "runed", "runer", "runes", "rungs", "runic",
      "runny", "runsy", "runts", "runty", "rupee", "rupia", "rupie", "rural",
      "rurps", "rurus", "rusas", "ruses", "rushy", "rusin", "rusks", "rusky",
      "rusma", "rusot", "russe", "rusts", "rusty", "rutch", "ruths", "rutic",
      "rutin", "rutty", "rutyl", "ruvid", "ryals", "rybat", "ryder", "ryked",
      "rykes", "rymme", "rynds", "ryots", "ryper", "saags", "sabal", "saban",
      "sabby", "sabed", "saber", "sabes", "sabha", "sabia", "sabik", "sabin",
      "sabir", "sable", "sably", "sabot", "sabra", "sabre", "sabzi", "sacae",
      "sacks", "sacra", "sacre", "sacro", "sacry", "saddo", "sades", "sadhe",
      "sadhu", "sadic", "sadie", "sadis", "sadly", "sados", "sadza", "saeta",
      "safar", "safed", "safen", "safer", "safes", "sagai", "sagan", "sagas",
      "sager", "sages", "saggy", "sagos", "sagra", "sagum", "saheb", "sahib",
      "sahme", "saice", "saick", "saics", "saidi", "saids", "saify", "saiga",
      "saiid", "sails", "saily", "saims", "saimy", "saine", "sains", "saint",
      "saiph", "sairs", "sairy", "saist", "saite", "saith", "saiva", "sajou",
      "sakai", "sakel", "saker", "sakes", "sakha", "sakia", "sakis", "sakti",
      "salad", "salal", "salar", "salat", "salay", "salem", "salep", "sales",
      "salet", "salic", "salix", "salle", "sally", "salma", "salmi", "salmo",
      "salol", "salon", "salop", "salpa", "salps", "salsa", "salse", "salta",
      "salto", "salts", "salty", "salud", "salue", "salus", "salut", "salva",
      "salve", "salvo", "salvy", "samaj", "samal", "saman", "samas", "samba",
      "sambo", "samek", "samel", "samen", "sames", "samey", "samfu", "samir",
      "sammy", "samoa", "sampi", "samps", "sanai", "sanct", "sancy", "sands",
      "sandy", "saned", "saner", "sanes", "sanga", "sangh", "sango", "sangs",
      "sangu", "sanit", "sanka", "sanko", "sansa", "sansi", "santa", "santo",
      "sants", "santy", "saola", "sapan", "sapek", "sapid", "sapin", "sapit",
      "saple", "sapor", "sappy", "saqib", "saraf", "sarah", "saran", "sards",
      "sared", "saree", "sarge", "sargo", "sarif", "sarin", "sarip", "saris",
      "sarks", "sarky", "sarna", "sarod", "saron", "saros", "sarpo", "sarra",
      "sarsa", "sarsi", "saruk", "sarum", "sarus", "sasan", "saser", "sasin",
      "sasse", "sassy", "satai", "satan", "satay", "sated", "satem", "sates",
      "satin", "satis", "satyr", "sauba", "sauce", "sauch", "saucy", "saudi",
      "saugh", "sauld", "sauls", "sault", "sauna", "saunt", "saura", "saury",
      "saute", "sauts", "sauty", "sauve", "saved", "saver", "saves", "savey",
      "savin", "savor", "savoy", "savvy", "sawah", "sawan", "sawed", "sawer",
      "sawny", "saxes", "saxon", "sayal", "sayed", "sayee", "sayer", "sayid",
      "sayne", "sayon", "sayst", "sazen", "sazes", "scabs", "scads", "scaff",
      "scags", "scail", "scala", "scald", "scale", "scalf", "scall", "scalp",
      "scalt", "scalx", "scaly", "scalz", "scamp", "scams", "scand", "scans",
      "scant", "scapa", "scape", "scapi", "scare", "scarf", "scarn", "scarp",
      "scars", "scart", "scary", "scase", "scath", "scats", "scatt", "scaud",
      "scaul", "scaum", "scaup", "scaur", "scaut", "scawd", "scawl", "scaws",
      "sceat", "scelp", "scena", "scend", "scene", "scent", "schav", "schiz",
      "schmo", "schuh", "schul", "schwa", "scian", "scind", "scion", "sciot",
      "sclat", "sclav", "sclaw", "scler", "sclim", "scoad", "scobs", "scody",
      "scoff", "scogs", "scoke", "scolb", "scold", "scomm", "scone", "scoog",
      "scoon", "scoop", "scoot", "scopa", "scope", "scops", "score", "scorn",
      "scote", "scots", "scott", "scoug", "scouk", "scoup", "scour", "scout",
      "scove", "scovy", "scowl", "scowp", "scows", "scrab", "scrae", "scrag",
      "scram", "scran", "scrap", "scrat", "scraw", "scray", "scree", "screw",
      "scrim", "scrin", "scrip", "scrit", "scrob", "scrod", "scrog", "scroo",
      "scrow", "scrub", "scruf", "scrum", "scuba", "scudi", "scudo", "scuds",
      "scuff", "scuft", "scugs", "sculk", "scull", "sculp", "sculs", "scult",
      "scums", "scups", "scurf", "scurs", "scuse", "scuta", "scute", "scuts",
      "scuzz", "scyes", "scyld", "scyth", "sdayn", "sdein", "sdump", "seals",
      "sealy", "seame", "seams", "seamy", "seans", "seare", "sears", "seary",
      "sease", "seats", "seave", "seavy", "seaze", "sebat", "sebum", "secco",
      "sechs", "secno", "secos", "secre", "sects", "secus", "sedan", "sedat",
      "seder", "sedes", "sedge", "sedgy", "sedum", "seech", "seeds", "seedy",
      "seege", "seeks", "seeld", "seels", "seely", "seems", "seenu", "seeps",
      "seepy", "seers", "sefer", "segar", "seggy", "segni", "segno", "segol",
      "segos", "segou", "segue", "sehri", "sehyo", "seifs", "seige", "seils",
      "seine", "seirs", "seise", "seism", "seity", "seiza", "seize", "sekar",
      "seker", "sekos", "sekts", "selah", "seles", "selfs", "sella", "selle",
      "selli", "sells", "selly", "selva", "semee", "semel", "semen", "semes",
      "semic", "semie", "semih", "semis", "senal", "senam", "senas", "sence",
      "senci", "sends", "senes", "senex", "sengi", "senit", "senna", "senor",
      "sensa", "sense", "sensi", "senso", "sensu", "sente", "senti", "sents",
      "senvy", "senza", "seora", "seoul", "sepad", "sepal", "sepia", "sepic",
      "sepoy", "seppa", "septa", "septi", "septs", "seqed", "sequa", "seqwl",
      "serab", "serac", "serai", "seral", "serau", "seraw", "sered", "sereh",
      "serer", "seres", "serfs", "serge", "sergt", "seric", "serif", "serin",
      "serio", "serks", "sermo", "seron", "serow", "serra", "serre", "serrs",
      "serry", "serta", "serum", "serut", "serve", "servo", "sesey", "sesia",
      "sesma", "sessa", "sesti", "setae", "setal", "seton", "setts", "setup",
      "seugh", "seven", "sever", "sevum", "sewan", "sewar", "sewed", "sewel",
      "sewen", "sewer", "sewin", "sexed", "sexer", "sexes", "sexly", "sexto",
      "sexts", "seyen", "sfoot", "sfree", "shack", "shade", "shado", "shads",
      "shady", "shaft", "shags", "shahi", "shahs", "shaka", "shake", "shako",
      "shakt", "shaku", "shaky", "shale", "shall", "shalm", "shalt", "shaly",
      "shama", "shame", "shams", "shand", "shane", "shang", "shank", "shans",
      "shant", "shape", "shaps", "shapy", "shard", "share", "shari", "shark",
      "sharn", "sharp", "shash", "shaul", "shaup", "shave", "shawl", "shawm",
      "shawn", "shaws", "shawy", "shaya", "shays", "shchi", "sheaf", "sheal",
      "shean", "shear", "sheas", "sheat", "sheds", "shedu", "sheel", "sheen",
      "sheep", "sheer", "sheet", "sheik", "shela", "sheld", "shelf", "shell",
      "shema", "shemu", "shend", "sheng", "shent", "sheol", "sherd", "shere",
      "shero", "sheth", "shets", "sheva", "shewa", "shewn", "shews", "shiah",
      "shiai", "shice", "shick", "shide", "shied", "shiel", "shier", "shies",
      "shift", "shiko", "shilf", "shilh", "shill", "shily", "shims", "shina",
      "shine", "shins", "shiny", "ships", "shipt", "shire", "shirk", "shirl",
      "shirr", "shirs", "shirt", "shish", "shisn", "shiso", "shist", "shita",
      "shite", "shits", "shiur", "shiva", "shive", "shivs", "shivy", "shlep",
      "shlub", "shluh", "shmek", "shmoe", "shoad", "shoal", "shoat", "shock",
      "shode", "shoed", "shoer", "shoes", "shogi", "shogs", "shoji", "shojo",
      "shola", "shole", "shona", "shone", "shood", "shooi", "shook", "shool",
      "shoon", "shoop", "shoor", "shoos", "shoot", "shope", "shops", "shore",
      "shorl", "shorn", "short", "shote", "shots", "shott", "shout", "shove",
      "showd", "shown", "shows", "showy", "shoya", "shoyu", "shrab", "shraf",
      "shrag", "shram", "shrap", "shred", "shree", "shrew", "shrip", "shris",
      "shrog", "shrow", "shrub", "shrug", "shtik", "shtum", "shtup", "shuba",
      "shuck", "shuff", "shule", "shuln", "shuls", "shune", "shuns", "shunt",
      "shura", "shure", "shurf", "shush", "shute", "shuts", "shwas", "shyam",
      "shyer", "shyly", "siafu", "sials", "sibbs", "sibby", "sibyl", "sicca",
      "sicel", "sicer", "sices", "sicht", "sicko", "sicks", "sicky", "sicle",
      "sidas", "sided", "sider", "sides", "sidha", "sidhe", "sidia", "sidle",
      "sidth", "siege", "sield", "siena", "siens", "sient", "siest", "sieth",
      "sieur", "sieva", "sieve", "sievy", "sifac", "sifts", "sighs", "sight",
      "sigil", "sigla", "sigma", "signa", "signs", "sijos", "sikar", "sikas",
      "siker", "sikes", "siket", "sikhs", "sikra", "silas", "silds", "siled",
      "silen", "siler", "siles", "silex", "silks", "silky", "sills", "silly",
      "silos", "silts", "silty", "silva", "silyl", "simal", "simar", "simas",
      "simba", "simia", "simis", "simon", "simps", "simul", "sinae", "sinal",
      "since", "sinds", "sined", "sines", "sinew", "singe", "singh", "sings",
      "sinhs", "sinic", "sinks", "sinky", "sinon", "sinto", "sintu", "sinus",
      "sioux", "siped", "siper", "sipes", "sipid", "sippy", "sired", "siree",
      "siren", "sires", "sirex", "sirih", "siris", "sirki", "sirky", "siroc",
      "sirop", "siros", "sirra", "sirup", "sisal", "sisel", "sises", "sissu",
      "sissy", "sista", "sists", "sitao", "sitar", "sitch", "sited", "sites",
      "sithe", "sitio", "sitka", "sitta", "situp", "situs", "siums", "siusi",
      "sivan", "siver", "siwan", "sixer", "sixes", "sixmo", "sixte", "sixth",
      "sixty", "sizal", "sizar", "sized", "sizel", "sizer", "sizes", "sjaak",
      "skaff", "skags", "skail", "skair", "skald", "skank", "skart", "skate",
      "skats", "skatt", "skaws", "skean", "skear", "skeat", "skeds", "skeed",
      "skeef", "skeeg", "skeel", "skeen", "skeer", "skees", "skeet", "skegg",
      "skegs", "skeif", "skein", "skelf", "skell", "skelm", "skelp", "skemp",
      "skene", "skens", "skeos", "skeps", "skere", "skers", "skete", "skets",
      "skewl", "skews", "skewy", "skice", "skidi", "skids", "skied", "skier",
      "skies", "skiey", "skiff", "skift", "skiis", "skill", "skime", "skimo",
      "skimp", "skims", "skink", "skins", "skint", "skios", "skips", "skirl",
      "skirp", "skirr", "skirt", "skite", "skits", "skive", "skivy", "skiwy",
      "sklim", "skoal", "skody", "skoff", "skogs", "skols", "skool", "skoot",
      "skort", "skosh", "skout", "skran", "skrik", "skuas", "skugs", "skulk",
      "skull", "skulp", "skunk", "skuse", "skyed", "skyer", "skyey", "skyfs",
      "skyre", "skyrs", "skyte", "slabs", "slack", "slade", "slaes", "slags",
      "slaid", "slain", "slait", "slake", "slaky", "slamp", "slams", "slane",
      "slang", "slank", "slant", "slape", "slaps", "slare", "slart", "slash",
      "slask", "slate", "slath", "slats", "slaty", "slaum", "slave", "slavi",
      "slavs", "slaws", "slays", "slebs", "sleck", "sleds", "sleek", "sleep",
      "sleer", "sleet", "slent", "slept", "slete", "slews", "sleys", "slice",
      "slich", "slick", "slide", "slier", "slily", "slime", "slims", "slimy",
      "sline", "sling", "slink", "slipe", "slips", "slipt", "slirt", "slish",
      "slite", "slits", "slive", "sloan", "sloat", "slobs", "slock", "sloes",
      "slogs", "sloid", "slojd", "sloka", "sloke", "slomo", "slone", "slonk",
      "sloom", "sloop", "sloot", "slope", "slops", "slopy", "slorm", "slorp",
      "slosh", "slote", "sloth", "slots", "slour", "slove", "slows", "sloyd",
      "slubb", "slubs", "slued", "sluer", "slues", "sluff", "slugs", "sluig",
      "sluit", "slump", "slums", "slung", "slunk", "slurb", "slurp", "slurs",
      "sluse", "slush", "sluts", "slyer", "slyly", "slype", "smaak", "smack",
      "smaik", "small", "smalm", "smalt", "smarm", "smart", "smash", "smaze",
      "smear", "smeek", "smeer", "smees", "smeik", "smeke", "smell", "smelt",
      "smerk", "smeth", "smews", "smich", "smift", "smile", "smily", "smirk",
      "smirr", "smirs", "smite", "smith", "smits", "smock", "smogs", "smoke",
      "smoko", "smoky", "smolt", "smook", "smoor", "smoos", "smoot", "smore",
      "smorg", "smote", "smous", "smout", "smowt", "smrgs", "smugs", "smurr",
      "smurs", "smuse", "smush", "smuts", "smyth", "snabs", "snack", "snaff",
      "snafu", "snags", "snail", "snake", "snaky", "snape", "snaps", "snapy",
      "snare", "snarf", "snark", "snarl", "snars", "snary", "snash", "snast",
      "snath", "snaws", "snead", "sneak", "sneap", "snebs", "sneck", "sneds",
      "sneed", "sneer", "snees", "snell", "snerp", "snibs", "snick", "snide",
      "snies", "sniff", "snift", "snigs", "snipe", "snips", "snipy", "snirl",
      "snirt", "snite", "snits", "snitz", "snivy", "snobs", "snock", "snods",
      "snoek", "snoep", "snoga", "snogs", "snoke", "snood", "snook", "snool",
      "snoop", "snoot", "snore", "snork", "snort", "snots", "snout", "snowk",
      "snowl", "snows", "snowy", "snubs", "snuck", "snuff", "snugs", "snurl",
      "snurp", "snurt", "snush", "snyed", "snyes", "soaks", "soaky", "soapi",
      "soaps", "soapy", "soare", "soars", "soary", "soave", "sobas", "sobby",
      "sober", "socas", "soces", "socht", "socii", "socko", "socks", "socky",
      "socle", "sodas", "soddy", "sodic", "sodio", "sodom", "sofar", "sofas",
      "sofer", "sofia", "softa", "softs", "softy", "soger", "soget", "soggy",
      "sohur", "soign", "soils", "soily", "sojas", "sojus", "sokah", "soken",
      "sokes", "sokol", "solah", "solan", "solar", "solas", "solay", "solde",
      "soldi", "soldo", "solds", "solea", "soled", "solei", "solen", "soler",
      "soles", "solfa", "solid", "solio", "solod", "solon", "solos", "solum",
      "solus", "solve", "somal", "soman", "somas", "somet", "somma", "somne",
      "sonar", "sonce", "soncy", "sonde", "sones", "songo", "songs", "songy",
      "sonic", "sonja", "sonly", "sonne", "sonny", "sonse", "sonsy", "sooey",
      "sooke", "sooks", "sooky", "soole", "sools", "sooms", "soony", "soops",
      "soord", "soote", "sooth", "soots", "sooty", "sophs", "sophy", "sopor",
      "soppy", "sopra", "soral", "soras", "sorbo", "sorbs", "sorda", "sordo",
      "sords", "sored", "soree", "sorel", "sorer", "sores", "sorex", "sorgo",
      "sorns", "sorra", "sorry", "sorta", "sorts", "sorty", "sorus", "sorva",
      "sosia", "sosie", "soter", "sotho", "soths", "sotie", "sotik", "sotol",
      "souce", "souct", "sough", "souks", "souls", "soulx", "souly", "soulz",
      "soums", "sound", "soups", "soupy", "sourd", "sours", "soury", "souse",
      "south", "souts", "sowan", "sowar", "sowce", "sowed", "sowel", "sower",
      "sowff", "sowfs", "sowle", "sowls", "sowms", "sownd", "sowne", "sowps",
      "sowse", "sowte", "sowth", "soyas", "soyle", "soyot", "soyuz", "sozin",
      "sozly", "spaad", "space", "spack", "spacy", "spade", "spado", "spaed",
      "spaer", "spaes", "spags", "spahi", "spaid", "spaik", "spail", "spain",
      "spair", "spait", "spake", "spald", "spale", "spall", "spalt", "spams",
      "spane", "spang", "spank", "spann", "spans", "spard", "spare", "spark",
      "sparm", "spars", "spart", "spary", "spasm", "spass", "spate", "spath",
      "spats", "spaul", "spave", "spawl", "spawn", "spaws", "spayd", "spays",
      "spaza", "spazz", "speak", "speal", "spean", "spear", "speat", "spece",
      "speck", "specs", "spect", "speed", "speel", "speen", "speer", "speil",
      "speir", "speks", "spekt", "speld", "spelk", "spell", "spelt", "spend",
      "spent", "speos", "spere", "sperm", "spete", "spets", "speug", "spews",
      "spewy", "sphex", "spial", "spica", "spice", "spick", "spics", "spicy",
      "spide", "spied", "spiel", "spier", "spies", "spiff", "spifs", "spike",
      "spiks", "spiky", "spile", "spill", "spilt", "spims", "spina", "spine",
      "spink", "spins", "spiny", "spira", "spire", "spiro", "spirt", "spiry",
      "spise", "spiss", "spite", "spits", "spitz", "spivs", "splad", "splat",
      "splay", "splet", "split", "splog", "spock", "spode", "spods", "spoil",
      "spoke", "spoky", "spole", "spong", "spoof", "spook", "spool", "spoom",
      "spoon", "spoor", "spoot", "spore", "spork", "sport", "sposh", "spots",
      "spout", "sprad", "sprag", "sprat", "spray", "spred", "spree", "spret",
      "sprew", "sprig", "sprit", "sprod", "sprog", "sprot", "sprue", "sprug",
      "spuds", "spued", "spuer", "spues", "spugs", "spuke", "spule", "spume",
      "spumy", "spung", "spunk", "spurl", "spurn", "spurs", "spurt", "sputa",
      "spute", "spyal", "spyer", "spyre", "squab", "squad", "squam", "squat",
      "squaw", "squeg", "squet", "squib", "squid", "squin", "squit", "squiz",
      "sruti", "ssing", "ssort", "sstor", "staab", "stabs", "stacc", "stack",
      "stacy", "stade", "staff", "stage", "stags", "stagy", "staia", "staid",
      "staig", "stail", "stain", "staio", "stair", "stake", "stale", "stalk",
      "stall", "stamp", "stand", "stane", "stang", "stank", "staph", "staps",
      "stare", "stark", "starn", "starr", "stars", "start", "starw", "stary",
      "stash", "state", "stats", "stauk", "staun", "staup", "stave", "stawn",
      "staws", "stays", "stchi", "stead", "steak", "steal", "steam", "stean",
      "stear", "stech", "stedd", "stede", "steds", "steed", "steek", "steel",
      "steem", "steen", "steep", "steer", "stegh", "steid", "steil", "stein", 
      "stela", "stele", "stell", "stema", "steme", "stems", "stend", "steng",
      "steno", "stens", "stent", "steps", "stept", "stere", "steri", "sterk",
      "stern", "stero", "stert", "stets", "steve", "stews", "stewy", "steys",
      "stich", "stick", "stied", "sties", "stife", "stiff", "stilb", "stile",
      "still", "stilt", "stime", "stims", "stimy", "stine", "sting", "stink",
      "stint", "stion", "stipa", "stipe", "stipo", "stire", "stirk", "stirp",
      "stirs", "stite", "stith", "stive", "stivy", "stoae", "stoai", "stoas",
      "stoat", "stobs", "stock", "stoep", "stoff", "stoga", "stogy", "stoic",
      "stoit", "stoke", "stola", "stold", "stole", "stoln", "stoma", "stomp",
      "stond", "stone", "stong", "stonk", "stonn", "stony", "stood", "stoof",
      "stook", "stool", "stoon", "stoop", "stoor", "stoot", "stopa", "stope",
      "stops", "stopt", "store", "stork", "storm", "story", "stosh", "stoss",
      "stots", "stott", "stoun", "stoup", "stour", "stout", "stove", "stown",
      "stowp", "stows", "strad", "strae", "strag", "strak", "stram", "strap",
      "straw", "stray", "stree", "strep", "stret", "strew", "strey", "stria",
      "strid", "strig", "strim", "strip", "strit", "strix", "strom", "strop",
      "strow", "stroy", "strub", "strue", "strum", "strut", "struv", "stubb",
      "stube", "stubs", "stuck", "stude", "studs", "study", "stuff", "stull",
      "stulm", "stumm", "stump", "stums", "stung", "stunk", "stuns", "stunt",
      "stupa", "stupe", "stupp", "sture", "sturk", "sturt", "stuss", "styan",
      "styca", "styed", "styes", "style", "styli", "stylo", "styme", "stymy",
      "styre", "styte", "suade", "suant", "suave", "subah", "subas", "subby",
      "subch", "suber", "subet", "subha", "subra", "subst", "succi", "sucks",
      "sucky", "sucre", "sudan", "sudds", "suddy", "sudes", "sudic", "sudor",
      "sudra", "sudsy", "suede", "suent", "suers", "suete", "suets", "suety",
      "sueve", "suevi", "sugan", "sugar", "sugat", "sughs", "sugih", "sugis",
      "sugos", "suhur", "suids", "suina", "suine", "suing", "suint", "suist",
      "suite", "suits", "suity", "sujee", "sukey", "sukhs", "sukuk", "sulci",
      "sulea", "sulfa", "sulfo", "sulka", "sulks", "sulky", "sulla", "sully",
      "sulph", "sulus", "sumac", "sumak", "sumen", "sumis", "summa", "sumos",
      "sumph", "sumps", "sumpt", "sunil", "sunis", "sunks", "sunna", "sunni",
      "sunns", "sunny", "sunup", "suomi", "supai", "super", "supes", "suppl",
      "supra", "supvr", "surah", "sural", "suras", "surat", "surds", "sured",
      "surer", "sures", "surfs", "surfy", "surge", "surgy", "surly", "surma",
      "surra", "surya", "susan", "sused", "suses", "sushi", "susie", "susso",
      "sussy", "susus", "sutor", "sutra", "sutta", "suyog", "suzan", "svelt",
      "swabs", "swack", "swads", "swage", "swags", "swail", "swain", "swale",
      "swaly", "swami", "swamp", "swamy", "swang", "swank", "swans", "swape",
      "swaps", "swapt", "sward", "sware", "swarf", "swarm", "swart", "swash",
      "swath", "swati", "swats", "swayl", "sways", "swazi", "sweal", "swear",
      "sweat", "swede", "sweed", "sweel", "sweep", "sweer", "swees", "sweet",
      "swego", "sweir", "swell", "swelp", "swelt", "swept", "swerd", "swerf",
      "sweys", "swick", "swies", "swift", "swigs", "swile", "swill", "swims",
      "swimy", "swine", "swing", "swink", "swipe", "swipy", "swird", "swire",
      "swirl", "swish", "swiss", "swith", "swits", "swive", "swizz", "swobs",
      "swole", "swoln", "swonk", "swoon", "swoop", "swops", "swopt", "sword",
      "swore", "sworn", "swosh", "swots", "swoun", "swung", "swure", "sybbe",
      "sybil", "syboe", "sybow", "sycee", "syces", "sycon", "syens", "syftn",
      "syker", "sykes", "sylid", "sylis", "sylph", "sylva", "symar", "synch",
      "syncs", "synds", "syned", "synes", "synod", "synop", "synth", "syped",
      "sypes", "syphs", "syrah", "syren", "syria", "syrma", "syrup", "syrus",
      "sysin", "sysop", "sythe", "syver", "taals", "taata", "tabac", "tabby",
      "tabel", "taber", "tabes", "tabet", "tabic", "tabid", "tabis", "tabla",
      "table", "tabog", "taboo", "tabor", "tabun", "tabus", "tabut", "tacan",
      "tacca", "taces", "tacet", "tache", "tachi", "tacho", "tachs", "tacit",
      "tacks", "tacky", "tacos", "tacso", "tacts", "taels", "taffy", "tafia",
      "tagal", "tagel", "taggy", "tagma", "tagua", "tagus", "tahar", "tahas",
      "tahil", "tahin", "tahrs", "tahua", "taich", "taiga", "taigs", "taiko",
      "tails", "taily", "taino", "tains", "taint", "taipi", "taipo", "taira",
      "tairn", "taise", "taish", "taits", "tajes", "tajik", "takao", "takar",
      "takas", "taked", "taken", "taker", "takes", "takhi", "takin", "takis",
      "takky", "takyr", "talak", "talao", "talaq", "talar", "talas", "talck",
      "talcs", "talcy", "talea", "taled", "taler", "tales", "talio", "talis",
      "talks", "talky", "talli", "talls", "tally", "talma", "talon", "talpa",
      "taluk", "talus", "tamal", "tamas", "tambo", "tamed", "tamer", "tames",
      "tamil", "tamin", "tamis", "tammy", "tampa", "tamps", "tamul", "tamus",
      "tanak", "tanan", "tanas", "tandy", "tanga", "tangi", "tango", "tangs",
      "tangy", "tanha", "tanhs", "tania", "tanka", "tanks", "tanky", "tanna",
      "tanny", "tanoa", "tansy", "tanti", "tanto", "tanty", "tanya", "tanzy",
      "tapas", "taped", "tapen", "taper", "tapes", "tapet", "tapia", "tapir",
      "tapis", "tapit", "tapoa", "tappa", "tapul", "tapus", "taqua", "taraf",
      "tarai", "taras", "tarau", "tarde", "tardo", "tardy", "tarea", "tared",
      "tareq", "tares", "tarfa", "targa", "targe", "tarie", "tarin", "tarmi",
      "tarns", "taroc", "tarok", "taros", "tarot", "tarps", "tarre", "tarri",
      "tarry", "tarse", "tarsi", "tarte", "tarts", "tarty", "tarve", "tasar",
      "tasco", "tased", "taser", "tases", "tasks", "tassa", "tasse", "tasso",
      "taste", "tasty", "tatar", "tater", "tates", "taths", "tatie", "tatoo",
      "tatou", "tatta", "tatts", "tatty", "tatus", "taube", "taula", "tauld",
      "tauli", "taunt", "tauon", "taupe", "taupo", "tauri", "tauts", "tavah",
      "tavas", "taver", "tavoy", "tawai", "tawas", "tawed", "tawer", "tawgi",
      "tawie", "tawny", "tawpi", "tawpy", "tawse", "tawts", "taxed", "taxer",
      "taxes", "taxin", "taxir", "taxis", "taxol", "taxon", "taxor", "taxus",
      "tayer", "tayir", "tayra", "tazia", "tazza", "tazze", "tcawi", "tchai",
      "tchwi", "teach", "teade", "teads", "teaed", "teaer", "teaey", "teaks",
      "teals", "teams", "tears", "teart", "teary", "tease", "teasy", "teats",
      "teaty", "teave", "teaze", "tebet", "techs", "techy", "tecla", "tecon",
      "tecta", "tecum", "teddy", "tedge", "teels", "teems", "teend", "teene",
      "teens", "teeny", "teers", "teest", "teeth", "teety", "teffs", "teggs",
      "tegua", "tegus", "tehee", "tehrs", "teian", "teiid", "teils", "teind",
      "teins", "teise", "tejon", "tekke", "tekya", "telae", "telar", "telco",
      "teleg", "telei", "teles", "telex", "telia", "telic", "tells", "tellt",
      "telly", "teloi", "telos", "telyn", "teman", "tembe", "tembu", "temed",
      "temes", "temin", "temne", "tempe", "tempi", "tempo", "temps", "tempt",
      "temse", "tenai", "tench", "tendo", "tends", "tendu", "tenes", "tenet",
      "tenez", "tenge", "tengu", "tenia", "tenio", "tenla", "tenne", "tenno",
      "tennu", "tenny", "tenon", "tenor", "tense", "tenso", "tenth", "tents",
      "tenty", "tenue", "tepal", "tepas", "tepee", "tepid", "tepor", "tepoy",
      "terai", "terap", "teras", "terce", "terek", "teres", "tereu", "terfe",
      "terfs", "terga", "terma", "terms", "terna", "terne", "terns", "terra",
      "terre", "terri", "terry", "terse", "terts", "terzo", "tesla", "testa",
      "teste", "tests", "testy", "tetch", "tetel", "tetes", "teths", "teton",
      "tetra", "tetri", "tetty", "tetum", "teuch", "teugh", "tewed", "tewel",
      "tewer", "tewit", "tewly", "texan", "texas", "texes", "texts", "thack",
      "thagi", "thaim", "thais", "thala", "thale", "thali", "thana", "thane",
      "thang", "thank", "thans", "thanx", "tharf", "tharm", "thars", "thatd",
      "thatn", "thats", "thave", "thawn", "thaws", "thawy", "theah", "theat",
      "thebe", "theca", "theed", "theek", "theer", "thees", "theet", "theft",
      "thegn", "theic", "thein", "their", "thelf", "thema", "theme", "thens",
      "theol", "theor", "theos", "theow", "there", "therm", "these", "thesp",
      "theta", "thete", "thews", "thewy", "theyd", "thick", "thief", "thigh",
      "thigs", "thilk", "thill", "thine", "thing", "think", "thins", "thiol",
      "third", "thirl", "thirt", "thisn", "thoft", "thoke", "thole", "tholi",
      "thone", "thong", "thoom", "thore", "thorn", "thoro", "thorp", "thort",
      "those", "thous", "thowl", "thowt", "thrae", "thram", "thrap", "thraw",
      "thrax", "three", "threw", "thrid", "thrip", "throb", "throe", "throu",
      "throw", "thrum", "thruv", "thuan", "thuds", "thugs", "thuja", "thule",
      "thulr", "thumb", "thump", "thund", "thung", "thunk", "thuoc", "thurl",
      "thurm", "thurt", "thuya", "thyme", "thymi", "thyms", "thymy", "tiang",
      "tians", "tiara", "tiars", "tibbu", "tibby", "tiber", "tibet", "tibey",
      "tibia", "tical", "ticca", "ticed", "ticer", "tices", "tichy", "ticks",
      "ticky", "ticul", "tidal", "tiddy", "tided", "tides", "tiens", "tiers",
      "tiffs", "tiffy", "tifos", "tifts", "tiger", "tiges", "tight", "tigon",
      "tigre", "tigua", "tikas", "tikes", "tikis", "tikka", "tikor", "tikur",
      "tilak", "tilda", "tilde", "tiled", "tiler", "tiles", "tilia", "tills",
      "tilly", "tilth", "tilts", "tilty", "timar", "timbe", "timbo", "timed",
      "timer", "times", "timet", "timid", "timne", "timon", "timor", "timps",
      "tinas", "tinct", "tinds", "tinea", "tined", "tines", "tinge", "tingi",
      "tings", "tinks", "tinne", "tinni", "tinny", "tinsy", "tinta", "tints",
      "tinty", "tipis", "tipit", "tiple", "tippy", "tipsy", "tipup", "tiraz",
      "tired", "tirer", "tires", "tirls", "tirma", "tiros", "tirrs", "tirve",
      "tisar", "tisic", "tissu", "titan", "titar", "titch", "titer", "tithe",
      "titis", "title", "titre", "titty", "titup", "titus", "tiver", "tiwaz",
      "tiyin", "tiyns", "tizes", "tizzy", "tlaco", "tmema", "toads", "toady",
      "toast", "toaze", "tocks", "tocky", "tocos", "today", "todde", "toddy",
      "todea", "todus", "toeas", "toffs", "toffy", "tofts", "tofus", "togae",
      "togas", "toged", "toges", "togue", "toher", "tohos", "toile", "toils",
      "toing", "toise", "toist", "toits", "toity", "tokay", "toked", "token",
      "toker", "tokes", "tokos", "tokyo", "tolan", "tolar", "tolas", "toldo",
      "toled", "toles", "tolls", "tolly", "tolts", "tolus", "tolyl", "toman",
      "tomas", "tombe", "tombs", "tomes", "tomia", "tomin", "tommy", "tomos",
      "tonal", "tondi", "tondo", "toned", "toner", "tones", "toney", "tonga",
      "tongs", "tonic", "tonka", "tonks", "tonna", "tonne", "tonto", "tonus",
      "tools", "tooms", "toona", "toons", "toosh", "tooth", "toots", "topas",
      "topau", "topaz", "toped", "topee", "topek", "toper", "topes", "tophe",
      "tophi", "tophs", "topia", "topic", "topis", "topog", "topoi", "topos",
      "toppy", "topsl", "topsy", "toque", "torah", "toral", "toran", "toras",
      "torch", "torcs", "tored", "tores", "toret", "toric", "torii", "torma",
      "toros", "torot", "torrs", "torse", "torsi", "torsk", "torso", "torta",
      "torte", "torts", "torus", "torve", "tosas", "tosca", "tosed", "toses",
      "toshy", "tossy", "total", "toted", "totem", "toter", "totes", "totty",
      "totum", "touch", "tough", "touks", "tould", "touns", "tourn", "tours",
      "tourt", "touse", "toust", "tousy", "touts", "touze", "touzy", "tovah",
      "tovar", "tovet", "towai", "towan", "towed", "towel", "tower", "towie",
      "towns", "towny", "towse", "towsy", "towts", "towze", "towzy", "toxic",
      "toxin", "toxon", "toyed", "toyer", "toyon", "toyos", "tozed", "tozee",
      "tozer", "tozes", "tozie", "trabs", "trabu", "trace", "track", "tract",
      "tracy", "trade", "trads", "trady", "tragi", "traik", "trail", "train",
      "trait", "trama", "trame", "tramp", "trams", "trank", "tranq", "trans",
      "trant", "trapa", "trape", "traps", "trapt", "trash", "trass", "trasy",
      "trats", "tratt", "trave", "trawl", "trayf", "trays", "tread", "treas",
      "treat", "treck", "treed", "treen", "trees", "treey", "trefa", "treif",
      "treks", "trema", "trems", "trend", "trent", "tress", "trest", "trets",
      "trews", "treyf", "treys", "triac", "triad", "trial", "trias", "tribe",
      "trica", "trice", "trick", "tride", "tried", "trier", "tries", "trifa",
      "triff", "triga", "trigo", "trigs", "trike", "trild", "trill", "trims",
      "trina", "trine", "trink", "trins", "triol", "trior", "trios", "tripe",
      "tripl", "trips", "tript", "tripy", "trist", "trite", "trixy", "troad",
      "troak", "troat", "troca", "troch", "trock", "troco", "trode", "trods",
      "troft", "trogs", "troic", "trois", "troke", "troll", "tromp", "trona",
      "tronc", "trone", "tronk", "trons", "troop", "troot", "trooz", "trope",
      "troth", "trots", "troue", "trout", "trouv", "trove", "trows", "troys",
      "trubu", "truce", "truck", "trudy", "trued", "truer", "trues", "truff",
      "trugo", "trugs", "trull", "truly", "trump", "trunk", "truro", "trush",
      "truss", "trust", "truth", "tryer", "tryke", "tryma", "tryms", "trypa",
      "tryps", "tryst", "tsade", "tsadi", "tsars", "tsere", "tsine", "tsked",
      "tsuba", "tsubo", "tsuga", "tsuma", "tuans", "tuant", "tuarn", "tuart",
      "tuath", "tubae", "tubal", "tubar", "tubas", "tubba", "tubby", "tubed",
      "tuber", "tubes", "tubig", "tubik", "tucks", "tucky", "tucum", "tudel",
      "tudor", "tufan", "tufas", "tuffe", "tuffs", "tufts", "tufty", "tugra",
      "tugui", "tuile", "tuina", "tuism", "tukra", "tuktu", "tules", "tulip",
      "tulle", "tulpa", "tulsa", "tulsi", "tumid", "tumli", "tummy", "tumor",
      "tumps", "tumpy", "tunal", "tunas", "tunca", "tunds", "tuned", "tuner",
      "tunes", "tunga", "tungo", "tungs", "tunic", "tunis", "tunka", "tunna",
      "tunny", "tupek", "tupik", "tuple", "tuque", "turbo", "turco", "turds",
      "turfs", "turfy", "turgy", "turio", "turki", "turks", "turma", "turme",
      "turms", "turns", "turnt", "turps", "turrs", "turse", "turus", "turvy",
      "tushs", "tushy", "tusks", "tusky", "tutee", "tutin", "tutly", "tutor",
      "tutti", "tutto", "tutty", "tutus", "tuxes", "tuyer", "tuzla", "twaes",
      "twain", "twait", "twale", "twals", "twalt", "twana", "twang", "twank",
      "twant", "twats", "tways", "tweag", "tweak", "tweed", "tweeg", "tweel",
      "tween", "tweep", "tweer", "tweet", "tweil", "twere", "twerk", "twerp",
      "twice", "twick", "twier", "twigs", "twill", "twilt", "twine", "twink",
      "twins", "twint", "twiny", "twire", "twirk", "twirl", "twirp", "twist",
      "twite", "twits", "twixt", "twoer", "twoes", "twyer", "tyche", "tydie",
      "tyees", "tyers", "tyigh", "tying", "tyiyn", "tyken", "tykes", "tyler",
      "tylus", "tymps", "tynde", "tyned", "tynes", "typal", "typed", "typer",
      "types", "typey", "typha", "typic", "typos", "typps", "typto", "tyran",
      "tyred", "tyres", "tyros", "tyste", "tythe", "tzaam", "tzars", "ualis",
      "uaupe", "uayeb", "uchee", "uckia", "udals", "udasi", "udder", "udell",
      "udish", "udons", "ugali", "ugged", "uglis", "ugric", "uhlan", "uhllo",
      "uhuru", "uigur", "uinal", "uinta", "ukase", "ulama", "ulans", "ulcer",
      "ulcus", "ulema", "uller", "ulmic", "ulmin", "ulmus", "ulnad", "ulnae",
      "ulnar", "ulnas", "uloid", "ulpan", "ultra", "uluhi", "ululu", "ulvan",
      "ulvas", "ulyie", "ulzie", "umami", "umaua", "umbel", "umber", "umble",
      "umbos", "umbra", "umbre", "umest", "umiac", "umiak", "umiaq", "umiri",
      "umist", "ummah", "ummas", "ummed", "ummps", "umped", "umphs", "umpie",
      "umpty", "umrah", "umras", "umset", "unact", "unadd", "unais", "unami",
      "unamo", "unapt", "unark", "unarm", "unary", "unaus", "unbag", "unban",
      "unbar", "unbay", "unbed", "unbet", "unbid", "unbit", "unbog", "unbow",
      "unbox", "unboy", "unbud", "uncap", "unces", "uncia", "uncle", "uncos",
      "uncow", "uncoy", "uncus", "uncut", "undam", "undee", "unden", "under",
      "undid", "undig", "undim", "undog", "undon", "undos", "undry", "undub",
      "undue", "undug", "undye", "uneth", "uneye", "unfar", "unfed", "unfew",
      "unfit", "unfix", "unfur", "ungag", "unget", "ungka", "ungod", "ungot",
      "ungum", "unhad", "unhap", "unhat", "unhex", "unhid", "unhip", "unhit",
      "unhot", "uniat", "unica", "unice", "unify", "uninn", "union", "unism",
      "unist", "unite", "units", "unity", "unius", "unjam", "unked", "unken",
      "unket", "unkey", "unkid", "unkin", "unlap", "unlaw", "unlax", "unlay",
      "unled", "unlet", "unlid", "unlie", "unlit", "unmad", "unman", "unmet",
      "unmew", "unmix", "unnet", "unnew", "unode", "unoil", "unold", "unona",
      "unorn", "unown", "unpay", "unpeg", "unpen", "unpin", "unpot", "unput",
      "unram", "unray", "unred", "unrid", "unrig", "unrip", "unrow", "unrra",
      "unrun", "unsad", "unsaw", "unsay", "unsee", "unset", "unsew", "unsex",
      "unshy", "unsin", "unsly", "unsod", "unson", "unsty", "unsun", "untap",
      "untar", "untax", "untie", "until", "untin", "untop", "unurn", "unuse",
      "unwan", "unwax", "unweb", "unwed", "unwet", "unwig", "unwit", "unwon",
      "unwry", "unzen", "unzip", "uparm", "upaya", "upbar", "upbay", "upbid",
      "upbow", "upbuy", "upbye", "upcry", "upcut", "updos", "updry", "upeat",
      "upend", "upfly", "upget", "upher", "upjet", "uplay", "upled", "upleg",
      "uplit", "upmix", "upped", "upper", "uppop", "upran", "uprid", "uprip",
      "uprun", "upsee", "upset", "upsey", "upsit", "upsun", "upsup", "uptak",
      "upter", "uptie", "upupa", "upwax", "upway", "uraei", "urali", "uraos",
      "urare", "urari", "urase", "urate", "urban", "urbex", "urbia", "urbic",
      "urdee", "ureal", "ureas", "uredo", "ureic", "ureid", "urena", "urent",
      "urged", "urger", "urges", "uriah", "urial", "urian", "uriel", "urine",
      "urite", "urlar", "urled", "urman", "urnae", "urnal", "urned", "urped",
      "ursae", "ursal", "ursid", "urson", "ursuk", "ursus", "urubu", "urucu",
      "urutu", "urvas", "usage", "usant", "usara", "usent", "users", "ushak",
      "ushas", "usher", "usine", "using", "uskok", "usnea", "usnic", "usnin",
      "usque", "uster", "usual", "usure", "usurp", "usury", "utchy", "utees",
      "utend", "uteri", "utero", "uther", "utick", "utile", "utrum", "utsuk",
      "utter", "uvala", "uvate", "uveal", "uveas", "uviol", "uvito", "uvres",
      "uvrou", "uvula", "uvver", "uzara", "uzbak", "uzbeg", "uzbek", "vache",
      "vacoa", "vacua", "vacuo", "vaded", "vades", "vadim", "vadis", "vagal",
      "vagas", "vague", "vagus", "vails", "vaire", "vairs", "vairy", "vajra",
      "vakas", "vakia", "vakil", "vales", "valet", "valew", "valid", "valis",
      "valmy", "valor", "valsa", "valse", "value", "valva", "valve", "valyl",
      "vamos", "vamps", "vampy", "vance", "vanda", "vaned", "vanes", "vangs",
      "vanir", "vants", "vaped", "vaper", "vapes", "vapid", "vapor", "vappa",
      "varan", "varas", "varda", "vardy", "varec", "vares", "varia", "vario",
      "varix", "varna", "varus", "varve", "vasal", "vases", "vasts", "vasty",
      "vates", "vatic", "vatus", "vauch", "vaudy", "vault", "vaunt", "vaute",
      "vauts", "vawte", "vaxes", "veale", "veals", "vealy", "vedda", "vedet",
      "vedic", "vedro", "veena", "veeps", "veers", "veery", "vefry", "vegan",
      "vegas", "veges", "vegie", "vegos", "vehme", "veils", "veily", "veins",
      "veiny", "vejoz", "velal", "velar", "velds", "veldt", "veles", "velic",
      "vells", "velte", "velum", "venae", "venal", "vends", "vendu", "vened",
      "veney", "venge", "venie", "venin", "venom", "venta", "vents", "venue",
      "venus", "vepse", "veray", "verbs", "verby", "verde", "verdi", "verek",
      "verey", "verge", "vergi", "verpa", "verra", "verre", "verry", "versa",
      "verse", "verso", "verst", "verts", "vertu", "verty", "verus", "verve",
      "vespa", "vesta", "vests", "vetch", "veter", "vetus", "veuve", "vexed",
      "vexer", "vexes", "vexil", "vezir", "viage", "vials", "viand", "vibes",
      "vibex", "vibey", "vibix", "vicar", "viced", "vices", "vichy", "vicia",
      "vicki", "vicky", "vicua", "vicus", "video", "vidry", "vidua", "vidya",
      "viers", "views", "viewy", "vifda", "viffs", "vigas", "vigia", "vigil",
      "vigor", "vijao", "vijay", "vilde", "viler", "villa", "ville", "villi",
      "vills", "vimen", "vimpa", "vinal", "vinas", "vinca", "vince", "vinci",
      "vinea", "vined", "viner", "vines", "vinet", "vinew", "vingt", "vinic",
      "vinny", "vinod", "vinos", "vinta", "vints", "vinum", "vinyl", "viola",
      "viold", "viols", "viper", "viral", "vired", "vireo", "vires", "virga",
      "virge", "virgo", "virid", "virls", "viron", "virtu", "virus", "visas",
      "vised", "vises", "visie", "visit", "visne", "vison", "visor", "vista",
      "visto", "vitae", "vital", "vitas", "vitex", "vitis", "vitra", "vitro",
      "vitry", "vitta", "viuva", "vivas", "vivat", "vivax", "vivda", "vivek",
      "viver", "vives", "vivid", "vivos", "vivre", "vixen", "vizir", "vizor",
      "vizzy", "vlach", "vleis", "vlies", "vlogs", "voars", "vobis", "vocab",
      "vocal", "vocat", "voces", "voddy", "voder", "vodka", "vodou", "vodum",
      "vodun", "voema", "vogie", "vogue", "vogul", "voice", "voids", "voila",
      "voile", "voips", "volae", "volar", "voled", "voles", "volet", "volga",
      "volks", "volow", "volta", "volte", "volti", "volto", "volts", "volva",
      "volve", "vomer", "vomit", "voraz", "votal", "voted", "voter", "votes",
      "vouch", "vouge", "vouli", "voulu", "voust", "vowed", "vowel", "vower",
      "voxel", "vozhd", "vraic", "vrils", "vroom", "vrous", "vrouw", "vrows",
      "vucom", "vuggs", "vuggy", "vughs", "vughy", "vulgo", "vulns", "vulva",
      "vutty", "vyase", "vying", "waacs", "waapa", "waasi", "wabby", "wacke",
      "wacko", "wacks", "wacky", "wadds", "waddy", "waded", "wader", "wades",
      "wadge", "wadis", "wadna", "wadts", "waefu", "wafer", "waffs", "wafts",
      "wafty", "waged", "wager", "wages", "waget", "wagga", "waggy", "wagon",
      "wagyu", "wahoo", "waide", "waifs", "waift", "wails", "waily", "wains",
      "waird", "wairs", "waise", "waist", "waite", "waits", "waive", "wakan",
      "wakas", "waked", "waken", "waker", "wakes", "wakfs", "wakhi", "wakif",
      "wakon", "waldo", "walds", "waled", "waler", "wales", "walie", "walis",
      "walks", "walla", "walls", "wally", "walsh", "walth", "walty", "waltz",
      "wamed", "wamel", "wames", "wamus", "wands", "wandy", "waned", "wanes",
      "waney", "wanga", "wangs", "wanks", "wanky", "wanle", "wanly", "wanna",
      "wanny", "wants", "wanty", "wanze", "wappo", "waqfs", "warbs", "warby",
      "warch", "wards", "wared", "wares", "warez", "warks", "warly", "warms",
      "warns", "warnt", "warps", "warre", "warri", "warse", "warst", "warth",
      "warts", "warty", "warua", "warve", "wasat", "wasco", "wasel", "wases",
      "washo", "washy", "wasir", "wasms", "wasnt", "wasps", "waspy", "waste",
      "wasts", "wasty", "watap", "watch", "water", "watts", "wauch", "wauff",
      "waugh", "wauks", "waulk", "wauls", "wauns", "waura", "waurs", "wauve",
      "waved", "waver", "waves", "wavey", "wawah", "wawas", "wawes", "wawls",
      "waxed", "waxen", "waxer", "waxes", "wayao", "wayed", "wayne", "wazir",
      "wazoo", "weaky", "weald", "weals", "weamb", "weans", "wears", "weary",
      "weave", "webby", "weber", "wecht", "wedel", "wedge", "wedgy", "weeda",
      "weeds", "weedy", "weeke", "weeks", "weels", "weems", "weens", "weent",
      "weeny", "weeps", "weepy", "weesh", "weest", "weete", "weets", "weety",
      "weeze", "wefte", "wefts", "wefty", "wehee", "weids", "weigh", "weils",
      "weird", "weirs", "weise", "weism", "weize", "wekas", "wekau", "welch",
      "welds", "welke", "welks", "welkt", "wells", "welly", "welsh", "welts",
      "wembs", "wemmy", "wench", "wende", "wendi", "wends", "wendy", "wenge",
      "wenny", "wents", "weren", "weros", "wersh", "weste", "wests", "westy",
      "wetas", "wetly", "wevet", "wexed", "wexes", "wezen", "whack", "whale",
      "whalm", "whalp", "whaly", "whame", "whamo", "whamp", "whams", "whand",
      "whang", "whank", "whaps", "whare", "wharf", "wharl", "wharp", "whart",
      "whase", "whata", "whatd", "whats", "whauk", "whaup", "whaur", "wheal",
      "wheam", "whear", "wheat", "wheel", "wheem", "wheen", "wheep", "wheer",
      "wheft", "whein", "wheki", "whelk", "whelm", "whelp", "whens", "where",
      "whets", "whewl", "whews", "whewt", "wheys", "whiba", "which", "whick",
      "whids", "whiff", "whift", "whigs", "while", "whilk", "whill", "whils",
      "whims", "whine", "whing", "whins", "whiny", "whios", "whips", "whipt",
      "whirl", "whirr", "whirs", "whish", "whisk", "whisp", "whiss", "whist",
      "white", "whits", "whity", "whizz", "whole", "wholl", "whomp", "whone",
      "whoof", "whoop", "whoot", "whops", "whore", "whorl", "whort", "whory",
      "whose", "whoso", "whows", "whsle", "whuff", "whulk", "whump", "whups",
      "whush", "whute", "whyda", "wicca", "wicht", "wicks", "wicky", "widdy",
      "widen", "wider", "wides", "widow", "width", "wield", "wiels", "wierd",
      "wifed", "wifes", "wifey", "wifie", "wifty", "wigan", "wigga", "wiggy",
      "wight", "wikis", "wilco", "wilds", "wiled", "wiles", "wilga", "wilis",
      "wilja", "willi", "wills", "willy", "wilts", "wimps", "wimpy", "wince",
      "winch", "winds", "windy", "windz", "wined", "winer", "wines", "winey",
      "winge", "wings", "wingy", "winks", "winly", "winna", "winns", "winos",
      "winze", "wiped", "wiper", "wipes", "wired", "wirer", "wires", "wiros",
      "wirra", "wised", "wisen", "wiser", "wises", "wisha", "wisht", "wishy",
      "wisps", "wispy", "wisse", "wiste", "wists", "witan", "witch", "wited",
      "witen", "wites", "withe", "withs", "withy", "witty", "wived", "wiver",
      "wives", "wiyat", "wiyot", "wizen", "wizes", "wlity", "wloka", "woads",
      "woady", "woald", "wocas", "wocks", "woden", "wodge", "wodgy", "woful",
      "wogul", "woibe", "wojus", "wokas", "woken", "woker", "wokka", "wolds",
      "woldy", "wolfs", "wolly", "wolof", "wolve", "woman", "wombs", "womby",
      "women", "womyn", "wonga", "wongi", "wonks", "wonky", "wonna", "wonts",
      "woods", "woody", "wooed", "wooer", "woofs", "woofy", "woold", "woolf",
      "wools", "wooly", "woomp", "woons", "woops", "woopy", "woose", "woosh",
      "wootz", "woozy", "wopsy", "words", "wordy", "works", "worky", "world",
      "worms", "wormy", "worry", "worse", "worst", "worth", "worts", "wouch",
      "wough", "would", "wound", "woven", "wowed", "wowee", "woxen", "wrack",
      "wramp", "wrang", "wraps", "wrapt", "wrast", "wrate", "wrath", "wrawl",
      "wreak", "wreat", "wreck", "wrens", "wrest", "wrick", "wride", "wried",
      "wrier", "wries", "wring", "wrist", "write", "writh", "writs", "wrive",
      "wroke", "wrong", "wroot", "wrote", "wroth", "wrung", "wryer", "wryly",
      "wuddy", "wudge", "wudus", "wulls", "wunna", "wurly", "wurst", "wuses",
      "wushu", "wussy", "wuxia", "wuzzy", "wyled", "wyles", "wynds", "wynne",
      "wynns", "wyson", "wysty", "wyted", "wytes", "wyver", "xebec", "xenia",
      "xenic", "xenon", "xenos", "xenyl", "xeres", "xeric", "xerox", "xerus",
      "xicak", "xinca", "xoana", "xrays", "xurel", "xviii", "xxiii", "xylan",
      "xylem", "xylia", "xylic", "xylol", "xylon", "xylyl", "xyrid", "xyris",
      "xysti", "xysts", "yaars", "yabas", "yabba", "yabbi", "yabby", "yaboo",
      "yacal", "yacca", "yacht", "yacka", "yacks", "yadim", "yaffs", "yager",
      "yages", "yagis", "yagua", "yahan", "yahoo", "yaird", "yajna", "yakan",
      "yakin", "yakka", "yakow", "yakut", "yales", "yalla", "yamel", "yamen",
      "yameo", "yampa", "yamph", "yampy", "yamun", "yanan", "yangs", "yanks",
      "yanky", "yaply", "yapok", "yapon", "yapps", "yappy", "yaqui", "yarak",
      "yaray", "yarco", "yards", "yarer", "yarfa", "yarke", "yarks", "yarly",
      "yarns", "yarrs", "yarry", "yarta", "yarth", "yarto", "yasht", "yasna",
      "yates", "yauds", "yauld", "yaups", "yawed", "yawey", "yawls", "yawns",
      "yawny", "yawps", "yazoo", "ybore", "yclad", "ycled", "ycond", "ydrad",
      "ydred", "yeads", "yeahs", "yealm", "yeans", "yeara", "yeard", "yearn",
      "years", "yeast", "yecch", "yechs", "yechy", "yedes", "yeech", "yeeds",
      "yeesh", "yeggs", "yelek", "yelks", "yells", "yelms", "yelps", "yelts",
      "yemen", "yenta", "yente", "yeply", "yerba", "yerds", "yerga", "yerks",
      "yerth", "yerva", "yeses", "yesks", "yesso", "yests", "yesty", "yetis",
      "yetts", "yeuks", "yeuky", "yeven", "yeves", "yewen", "yexed", "yexes",
      "yezdi", "yezzy", "yfere", "ygapo", "yield", "yiked", "yikes", "yills",
      "yince", "yinst", "yipes", "yippy", "yirds", "yirks", "yirrs", "yirth",
      "yites", "yitie", "ylems", "ylike", "ylkes", "ymolt", "ympes", "yobbo",
      "yobby", "yocco", "yocks", "yodel", "yodhs", "yodle", "yogas", "yogee",
      "yoghs", "yogic", "yogin", "yogis", "yoick", "yojan", "yoked", "yokel",
      "yoker", "yokes", "yokul", "yolks", "yolky", "yomer", "yomim", "yomin",
      "yomps", "yomud", "yonic", "yonis", "yonks", "yoofs", "yoops", "yores",
      "yorks", "yorps", "youff", "youks", "young", "youre", "yourn", "yours",
      "yourt", "youse", "youth", "youve", "youze", "yoven", "yowed", "yowes",
      "yowie", "yowls", "yowza", "yquem", "yrapt", "yrent", "yrivd", "yrneh",
      "ysame", "ytost", "ytter", "yuans", "yucas", "yucca", "yucch", "yuchi",
      "yucko", "yucks", "yucky", "yufts", "yugas", "yuked", "yukes", "yukky",
      "yukon", "yukos", "yulan", "yules", "yuman", "yummo", "yummy", "yumps",
      "yunca", "yupon", "yuppy", "yurak", "yurok", "yurta", "yurts", "yuruk",
      "yuzus", "zabra", "zabti", "zacks", "zaida", "zaidy", "zaire", "zakah",
      "zakat", "zaman", "zambo", "zamia", "zande", "zanja", "zante", "zanza",
      "zanze", "zapas", "zappy", "zapus", "zaque", "zarfs", "zaris", "zatis",
      "zaxes", "zayat", "zayin", "zazen", "zeals", "zebec", "zebra", "zebub",
      "zebus", "zedas", "zeins", "zeism", "zeiss", "zeist", "zemmi", "zemni",
      "zendo", "zerda", "zerks", "zerma", "zeros", "zests", "zesty", "zetas",
      "zexes", "zezes", "zhmud", "zhomo", "ziara", "zibet", "ziega", "ziffs",
      "zigan", "zihar", "zilas", "zilch", "zilla", "zills", "zimbi", "zimbs",
      "zimme", "zimmi", "zimmy", "zinco", "zincs", "zincy", "zineb", "zines",
      "zings", "zingy", "zinke", "zinky", "zippo", "zippy", "zirai", "zirak",
      "ziram", "zitis", "zizel", "zizia", "zizit", "zlote", "zloty", "zmudz",
      "zoaea", "zobos", "zobus", "zocco", "zoeae", "zoeal", "zoeas", "zogan",
      "zohak", "zoism", "zoist", "zokor", "zolle", "zombi", "zonae", "zonal",
      "zonar", "zonda", "zoned", "zoner", "zones", "zonic", "zonks", "zonta",
      "zooea", "zooey", "zooid", "zooks", "zooms", "zoona", "zoons", "zooty",
      "zoppa", "zoppo", "zoque", "zoril", "zoris", "zorro", "zosma", "zouks",
      "zowee", "zowie", "zucco", "zudda", "zulus", "zunis", "zupan", "zupas",
      "zuppa", "zurfs", "zuzim", "zygal", "zygon", "zymes", "zymic", "zymin",
      ],
      Ia = "present",
      Ma = "correct",
      Oa = "absent";
    var Ha = new Date(2022, 6, 12, 0, 0, 0, 0); /* July 12, 2022 */
    var Htime = 864e5;
    var La = [
    "KFIQQ",
    "KOM29",
    "AC0GM",
    "K860S",
    "61J05",
    "QI68S",
    "5D2MC",
    "9OOKS",
    "M805M",
    "452KC",
    "9DOAO",
    "0F22M",
    "A728S",
    "9D80O",
    "0DOB9",
    "1O2U9",
    "FCIKA",
    "401O8",
    "63S69",
    "2I0GS",
    "F922D",
    "CKOAO",
    "9DGF2",
    "3S80O",
    "0QC79",
    "IE625",
    "UQ3A5",
    "272MD",
    "8KQ0M",
    "39O52",
    "7038D",
    "UQMBU",
    "AO9D9",
    "QIM2H",
    "8SO0O",
    "18M89",
    "45O0O",
    "IK68F",
    "UO0QM",
    "50789",
    "G2D8E",
    "8SOB2",
    "CM81E",
    "GF685",
    "82IQI",
    "68SFE",
    "UQIKD",
    "I24O0",
    "9D859",
    "782G9",
    "M2D49",
    "O52I9",
    "FOOU9",
    "EI299",
    "52M92",
    "0P8S2",
    "KA8O9",
    "589O9",
    "KIAC2",
    "0D81E",
    "BCQU9",
    "AQ8K9",
    "688K9",
    "5I58S",
    "KFO02",
    "IKMBD",
    "0G9S2",
    "38752",
    "58CK2",
    "AQOE9",
    "0FOB9",
    "KFIBC",
    "BS22C",
    "M2869",
    "1A9D2",
    "07FG5",
    ];
    var FuFa = [
    "FAHCGPGNGPCMCAHDGIGPHCHECAGGGPHCCAHAHCGPGNGPHEGJGPGOCMCAGJHDCAGBGOCAGBHCGFGBCAGPGGCAHCGFHEGBGJGMCAGFHIHAGFHCHEGJHDGFCAGGGPHCCAEDGPGHGOGJHCGBCO",
    "EIGBHCGEGMGJGOGFHDCAGBGOGECAHDGPGGHEGMGJGOGFHDCACIGPHCCAGIGBHCGECAGHGPGPGEHDCAGBGOGECAHDGPGGHECAGHGPGPGEHDCJCAGBHCGFCAHEHHGPCAGNGBGKGPHCCAGLGJGOGEHDCAGPGGCAHCGFHEGBGJGMCAGJGOHGGFGOHEGPHCHJCOCAFDGPGGHECAGHGPGPGEHDCAGBHCGFCAGJHEGFGNHDCAHEGIGBHECAGBHCGFCAGMGJHEGFHCGBGMGMHJCAHDGPGGHECMCAHDHFGDGICAGBHDCAGDGMGPHEGIGJGOGHCOCAEIGBHCGECAGHGPGPGEHDCAGBHCGFCAGOGPGOCNHAGFHCHDGPGOGBGMCAGJHEGFGNHDCAHDHFGDGICAGBHDCAGFGMGFGDHEHCGPGOGJGDHDCMCAGBHAHAGMGJGBGOGDGFHDCAGBGOGECAHDHAGPHCHEGJGOGHCAGFHBHFGJHAGNGFGOHECO",
    "EJGOHEGFGHHCGBHEGFGECAHDHFHAHAGMHJCAGDGIGBGJGOCAGJHDCAGBCAGOGFHEHHGPHCGLCAGPGGCAGCHFHDGJGOGFHDHDGFHDCAGBGOGECAGDGPGOHEHCGBGDHEGPHCHDCAHEGIGBHECAHHGPHCGLCAGBGOGECAGDGPGPHCGEGJGOGBHEGFCAGDGMGPHDGFGMHJCAHEGPGHGFHEGIGFHCCAHEGPCAGNGBGOHFGGGBGDHEHFHCGFCMCAHEHCGBGOHDHAGPHCHECMCAGEGJHDHEHCGJGCHFHEGFCMCAGBGOGECAHDGFGMGMCAHCGFHEGBGJGMCAGHGPGPGEHDCO",
    "FAHCGJHGGBHEGFCAGMGBGCGFGMCAGCHCGBGOGEHDCAGBHCGFCAGPHHGOGFGECAGOGPHECAGCHJCAGBCAGNGBGOHFGGGBGDHEHFHCGFHCCMCAGCHFHECAGCHJCAGBCAHCGFHEGBGJGMGFHCCAGPHCCAHDHFHAHAGMGJGFHCCOCAEJGOCADCDADCDACMCAHEGIGFCAGNGBHCGLGFHECAHDGIGBHCGFCAGPGGCAHAHCGJHGGBHEGFCAGMGBGCGFGMCAGCHCGBGOGEHDCAGJGOCAHEGIGFCAFFGOGJHEGFGECAFDHEGBHEGFHDCAHHGBHDCADBDJCODFCAHAGFHCGDGFGOHECO",
    "EBCAFCGFHEGBGJGMCAECHFHJGFHCCAGJHDCAGBCAHAHCGPGGGFHDHDGJGPGOGBGMCAHHGIGPCAHAGMGBGOHDCMCAGNGBGOGBGHGFHDCMCAGBGOGECAHDGFGMGFGDHEHDCAGHGPGPGEHDCAHEGPCAGCGFCAHDGPGMGECAGJGOCAHCGFHEGBGJGMCAHDHEGPHCGFHDCAHEGPCAGFGOHDHFHCGFCAHEGIGFGJHCCAGPHHGOCAGDGPGNHAGBGOHJCHHDCAGDGPGNHAGFHEGJHEGJHGGFGOGFHDHDCAHHGJHEGICAGPHEGIGFHCCAHCGFHEGBGJGMGFHCHDCOCA",
    "EDGPGNHAGBGOHJCHHDCAGEGJHDHEGJGOGDHEGJHGGFCAGMGPGHGJGDCAGPGGCAGDHCGFGBHEGJGOGHCAHGGBGMHFGFCAGGGPHCCAGDGPGOHDHFGNGFHCHDCAGBGOGECAGHGFGOGFHCGBHEGJGOGHCAHGGBGMHFGFCAGGGPHCCAGJHEHDGFGMGGCO",
    "FCGFHEGBGJGMCAHDGBGMGFHDCAHEHCGFGOGECAGBGOGBGMHJHDGJHDCAGJHDCAHEGIGBHECAHDHEHCGBHEGFGHHJCAHEGIGBHECAGIGFGMHAHDCAHCGFHEGBGJGMGFHCHDCAGLGOGPHHCAHEGIGFCAHCGJGHGIHECAGCHFHEHEGPGOHDCAHEGPCAHAHFHDGICMCAHEGIGFCAHCGJGHGIHECAGNGPHGGFHDCAHEGPCAGNGBGLGFCAGBGOGECAHEGIGFCAHCGJGHGIHECAHAGFGPHAGMGFCAHEGPCAHEGBGMGLCAHEGPCO",
    "EBHECAEDGPGHGOGJHCGBCMCAHHGFCAGIGBHGGFCAHDHEHCGPGOGHCAHAHCGPGCGMGFGNCAHDGPGMHGGJGOGHCAGBGOGECAGBGOGBGMHJHEGJGDGBGMCAHDGLGJGMGMHDCO",
    "EJGOCADCDADCDCCMCAHHGFCAGIGBHGGFCAGMGFGBHCGOGFGECAHEGIGBHECADEDCCFCAGPGGCAHAGFGPHAGMGFCAGBHCGFCAHDGIGJGGHEGJGOGHCAGGGPGDHFHDCAHEGPCAGMGPGPGLCAGGGPHCCAHAHCGPGEHFGDHEHDCAGPGOCAHAHCGPGNGPHEGJGPGOCAGBHDCAGBCAHCGFGBGDHEGJGPGOCAHEGPCAGJGOGGGMGBHEGJGPGOCO",
    "FFGOGJGGGJGFGECAGCHCGBGOGECAGFHIHAGFHCGJGFGOGDGFCAGJHDCAGBGMGMCAGBGCGPHFHECAGFHDHEGBGCGMGJHDGIGJGOGHCAGBCAGDGPGOHDGJHDHEGFGOHECAGCHCGBGOGECAGPHCCAGJGEGFGOHEGJHEHJCAHEGIHCGPHFGHGIGPHFHECAGNHFGMHEGJHAGMGFCAGDGIGBGOGOGFGMHDCAGPHCCAHAGMGBHEGGGPHCGNHDCMCAGJGOGDGMHFGEGJGOGHCAGCHCGJGDGLCNGBGOGECNGNGPHCHEGBHCCMCAGFGDGPGNGNGFHCGDGFCMCAGPHCCAGNGPGCGJGMGFCO",
    "EEGFGBGECAHDHEGPGDGLCAHAGFHCHEGBGJGOHDCAHEGPCAGNGFHCGDGIGBGOGEGJHDGFCAHEGIGBHECAGIGBHDCAGOGFHGGFHCCAGCGFGFGOCAHDGPGMGECAGPHCCAGIGBHDCAGCGFGFGOCAGJGOCAHDHEGPGDGLCAGGGPHCCAGBCAHHGIGJGMGFCO",
    "EHHCGFGFGOCAHCGFHEGBGJGMGJGOGHCAGJHDCAHEGIGFCAGFGOHGGJHCGPGOGNGFGOHEGBGMGMHJCNGGHCGJGFGOGEGMHJCAHAHCGBGDHEGJGDGFHDCAHEGIGBHECAHCGFHEGBGJGMGFHCHDCAGHGFHECAGJGOHEGPCO",
    "ENGBGOHJCAHCGFHEGBGJGMGFHCHDCAHEGPGEGBHJCAHFHDGFCAGEGJHDHAGBHCGBHEGFCAHDHAHCGFGBGEHDGIGFGFHEHDCAGBGOGECAGMGFGHGBGDHJCAHDHJHDHEGFGNHDCAHEGPCAGBGOGBGMHJHKGFCAHEGIGFGJHCCAGEGBHEGBCOCA",
    "FEGIGFCAHCGFHEGBGJGMCAGNGBHCGLGFHEGJGOGHCAHEGFGDGIGOGPGMGPGHHJCAHDHEGBGDGLCAGPGGCAHEGIGFCAGGHFHEHFHCGFCAGJHDCAGBCAHDGFHECAGPGGCAHDGPGMHFHEGJGPGOHDCAHEGIGBHECAHHGJGMGMCAGBGMGMGPHHCAHCGFHEGBGJGMGFHCHDCAHEGPCAGJGOHEGFGMGMGJGHGFGOHEGMHJCMCAGFGGGGGJGDGJGFGOHEGMHJCAGBGOGECAHDGDGBGMGBGCGMHJCAGBGDGIGJGFHGGFCAGLGFHJCAGPHFHEGDGPGNGFHDCMCAHDHFGDGICAGBHDCAGJGOGDHCGFGBHDGJGOGHCAGDHFHDHEGPGNGFHCCAGMGPHJGBGMHEHJCAGBGOGECAHFGMHEGJGNGBHEGFGMHJCAGEHCGJHGGJGOGHCAHCGFHGGFGOHFGFCO",
    "EDHCGPHDHDCAGNGFHCGDGIGBGOGEGJHDGJGOGHCAGJHDCAHEGIGFCAHAHCGBGDHEGJGDGFCAGPGGCAGEGJHDHAGMGBHJGJGOGHCAGPHCCAHAHFHEHEGJGOGHCAHEGPGHGFHEGIGFHCCAHAHCGPGEHFGDHEHDCAGGHCGPGNCAGEGJGGGGGFHCGFGOHECAGDGBHEGFGHGPHCGJGFHDCAHEGPCAGEHCGJHGGFCAGBGEGECNGPGOCAHDGBGMGFHDCO",
    "DBDADACFCAGDHFHDHEGPGNCAHDGJGHGOHDCMCAGEGFGDGBGMHDCMCAGCGBGOGOGFHCHDCMCAGBGOGECAEBCNGGHCGBGNGFHDCAGBHCGFCAGHHCGFGBHECAGGGPHCCAGEHCGJHGGJGOGHCAHEHCGBGGGGGJGDCAHEGPCAHJGPHFHCCAHCGFHEGBGJGMCAHDHEGPHCGFCMCAGBGEHGGFHCHEGJHDGJGOGHCAHDGBGMGFHDCMCAHAHCGPHGGJGEGJGOGHCAHAGPGJGOHECAGPGGCAHAHFHCGDGIGBHDGFCAGEGJHDHAGMGBHJHDCMCAGBGOGECAHDGIGPHHGDGBHDGJGOGHCAHAHCGPGEHFGDHEHDCB",
    "EJGOHEGFHCGOGFHECAGPGGCAFEGIGJGOGHHDCACIEJGPFECJCAGJHDCAHEGIGFCAGDGPGOGDGFHAHECAGPGGCAGHGFHEHEGJGOGHCAGPGCGKGFGDHEHDCAHDHFGDGICAGBHDCAGDGBHCHDCAGPHCCAGIGPHFHDGFGIGPGMGECAGBHAHAGMGJGBGOGDGFHDCAHEGPCACHHEGBGMGLCHCAHEGPCAGFGBGDGICAGPHEGIGFHCCOCA",
    "FAHCGPGEHFGDHECMCAFAHCGJGDGFCMCAFAGMGBGDGFCMCAFAHCGPGNGPHEGJGPGODKCAHEGIGFCAGCGBHDGJGDCAGGGPHFGOGEGBHEGJGPGOHDCAGPGGCAGBCAHDHFGDGDGFHDHDGGHFGMCAHCGFHEGBGJGMCAGCHFHDGJGOGFHDHDCO",
    "EDGPGHGOGJHCGBCHHDCAEBEJCAFAHCGPGNGPHEGJGPGOCAFDGPGMHFHEGJGPGOCAGFGOHDHFHCGFHDCAHCGFHEGBGJGMGFHCHDCAGIGBHGGFCAGBGDGDHFHCGBHEGFCAGJGOHDGJGHGIHEHDCAHEGPCAGPHAHEGJGNGJHKGFCAHAHCGPGNGPHEGJGPGOCAGGHFGOGEHDCO",
    "FHGJHEGICAHDGPCAGNGBGOHJCAHCGFHEGBGJGMCAGCHFHDGJGOGFHDHDGFHDCAGEGJGHGJHEGJHKGJGOGHCMCAGFGNGBGJGMCAGNGBHCGLGFHEGJGOGHCAGJHDCAGNGPHCGFCAGJGNHAGPHCHEGBGOHECAHEGIGBGOCAGFHGGFHCCO",
    "EIGPHFHDGFGIGPGMGEHDCAHEGIGBHECAGFGOGHGBGHGFCAHHGJHEGICAFAHCGPGNGPHEGFGECAFEHHGFGFHEHDCACIHCGFHEHHGFGFHEGJGOGHCMCAGGGBHGGPHCGJHEGJGOGHCMCAGDGMGJGDGLGJGOGHCJCAHEHJHAGJGDGBGMGMHJCAGCHFHJCAGNGPHCGFCAHEGIGBGOCAHEGIGPHDGFCAHHGIGPCAGEGPGOCHHECO",
    "ECGMGPGDGLGDGIGBGJGOCAGJHDCAGBCAHDHJHDHEGFGNCAGPGGCAHCGFGDGPHCGEGJGOGHCAGJGOGGGPHCGNGBHEGJGPGOCAGJGOCAGBCAHHGBHJCAHEGIGBHECAGNGBGLGFHDCAGJHECAGEGJGGGGGJGDHFGMHECAGPHCCAGJGNHAGPHDHDGJGCGMGFCAHEGPCAGDGIGBGOGHGFCMCAGIGBGDGLCMCAGPHCCAGDGIGFGBHECAHEGIGFCAHDHJHDHEGFGNCO",
    "EBCAHAGIHJHDGJGDGBGMCAGMGPGDGBHEGJGPGOCAGGGPHCCAHEGIGFCAGEGJHDHAGMGBHJCAGBGOGECAHDGBGMGFCAGPGGCAHAHCGPGEHFGDHEHDCO",
    "FEGIGFCAHDGOGBGDGLCAGGGPGPGEHDCAGJGOGEHFHDHEHCHJCAGJHDCAHCGFHDHAGPGOHDGJGCGMGFCAGGGPHCCAHAHCGPGEHFGDGJGOGHCAGNGBGOHJCAHAHCGPGEHFGDHEHDCAHEGIGBHECAGBHCGFCAGDGPGOHDHFGNGFGECAGEGBGJGMHJCAGJGOCAHEGIGFCAFFGOGJHEGFGECAFDHEGBHEGFHDCOCAEBHCGPHFGOGECAGIGBGMGGCAGPGGCAHEGIGFCAHAGPHAHFGMGBHEGJGPGOCAGFGBHECAHDGOGBGDGLHDCAGBHDCAGBCAGNGFGBGMCAHCGFHAGMGBGDGFGNGFGOHECAGCGPHEGICAGBHECAGIGPGNGFCAGBGOGECAGBHECAHHGPHCGLCO",
    "FAHCGPGNGPHEGJGPGOGBGMCAGHGJGGHEHDCMCAGPGGHEGFGOCAGCHCGBGOGEGFGECAHHGJHEGICAGBCAGMGPGHGPCMCAGBHCGFCAGBHCHEGJGDGMGFHDCAGPGGCAGNGFHCGDGIGBGOGEGJHDGFCAHFHDGFGECAGJGOCAGNGBHCGLGFHEGJGOGHCAGBGOGECAGDGPGNGNHFGOGJGDGBHEGJGPGOCAHAHCGPGHHCGBGNHDCO",
    "FAHCGPGNGPHEGJGPGOGBGMCAGPGGGGGFHCHDCAGBHCGFCAHFHDGFGECAHEGPCAGNGPHEGJHGGBHEGFCAGDGPGOHDHFGNGFHCHDCAHEGPCAGCHFHJCO",
    "EJGOGGGMGBHEGJGPGOCAGIGBHDCAGEGFGDHCGFGBHDGFGECAGDGPGOHDHFGNGFHCCAHAHFHCGDGIGBHDGJGOGHCAHAGPHHGFHCCO",
    "EBCAFCGFHEGBGJGMCAEFHGGFGOHECAGJHDCAGBCAHCGFHEGBGJGMCNHDHAGFGDGJGGGJGDCAGCHFHDGJGOGFHDHDCAGBGDHEGJHGGJHEHJCAHEGPCAGJGOGDHCGFGBHDGFCAHDGBGMGFHDCACIGGGPHCCAGFHIGBGNHAGMGFCMCAHDHEGPHCGFCAGPHAGFGOGJGOGHCMCAHDHAGPHCHEHDCAGFHGGFGOHECMCAHAHCGPGNGPHEGJGPGOCJCO",
    "FCGFHEGBGJGMGFHCHDCAGOGFGFGECAHEGPCAGBGMGJGHGOCAHEGIGFGJHCCAHAHCGPGNGPHEGJGPGOCAGEGFGDGJHDGJGPGOHDCAHHGJHEGICAGPGCGKGFGDHEGJHGGFHDCO",
    "EBCAHAHCGPGNGPHEGJGPGOCAGNGBGOGBGHGFGNGFGOHECAHDHFGJHEGFCAGJGOGDGMHFGEGFHDCAHEGIGFCAGBGCGJGMGJHEHJCAHEGPCAGCGFHEHEGFHCCAHAGMGBGOCMCAGFHIGFGDHFHEGFCMCAGBGOGBGMHJHKGFCMCAGBGOGECAGPHAHEGJGNGJHKGFCAHAHCGPGNGPHEGJGPGOHDCO",
    "EDGPHGGJGECNDBDJCAHHGBHDCAGBCAGIHFGHGFCAHCGFHDGFHECAGGGPHCCAHCGFHEGBGJGMGFHCHDCAGBHDCAGJHECAGEGJHDHCHFHAHEGFGECAHDGPGDGJGBGMCAGBGOGECAGFGDGPGOGPGNGJGDCAHDHJHDHEGFGNHDCO",
    "FAGPHACNFFHACNFDHEGPHCGFHDCAGBHCGFCAHDGIGPHCHECNHEGFHCGNCAHDGIGPHAHDCAGPHCCAHDGBGMGFHDCAHDHAGBGDGFHDCAHEGIGBHECAGDGPGNGFCAGBGOGECAGHGPCAHHGJHEGIGJGOCAGBCAGHGJHGGFGOCAHAGFHCGJGPGECO",
    "FEGIGFCAGBGHGFCNGPGMGECAHBHFGFHDHEGJGPGOCAGGGPHCCAGNGPHDHECAGCHFHDGJGOGFHDHDCAGPHHGOGFHCHDCAGJHDCAGIGPHHCAHEGPCAHCGFGEHFGDGFCAGFHIHAGFGOHDGFHDCO",
    "EBEJCAGJGOCAHCGFHEGBGJGMCAGJHDCAGFHIHAGFGDHEGFGECAHEGPCAGKHFGNHACAGGHCGPGNCACEDECODIDECAGCGJGMGMGJGPGOCAHEGPCACEDDDBCODBDICAGCGJGMGMGJGPGOCAGJGOCAGKHFHDHECAHFGOGEGFHCCADGCAHJGFGBHCHDCO",
    "ENGPHFHDGFCAGBGDHEGJGPGOCAHFHDGFGECAGJGOCAHHGFGCCAGCHCGPHHHDGFHCHDCAGGGPHCCAGPGOGMGJGOGFCAGEGFGDGJHDGJGPGOHDCO",
    "FCGFHEGBGJGMGFHCHDCAGBGJGNCAHEGPCAGJGOGDHCGFGBHDGFCAHDGBGMGFHDCAGBGOGECAGEGFGDHCGFGBHDGFCAGDGPHDHEHDCAHEGPCAGBGDGIGJGFHGGFCAHDHFGDGDGFHDHDCO",
    "ECHCGJGDGLCAGBGOGECAGNGPHCHEGBHCCAHDHEGPHCGFHDCAGBHCGFCAHAGIHJHDGJGDGBGMCAGMGPGDGBHEGJGPGOHDCAHEGIGBHECAGDGPGNHAGMGJGNGFGOHECAGFGDGPGNGNGFHCGDGFCAHDGJHEGFHDCO",
    "ENGPGOHEGIGMHJCAHDGBGMGFHDCAGJGOGEGFHICAGJHDCAGBCAGNGFGBHDHFHCGFCAGPGGCAGHHCGPHHHEGICAGPHCCAGMGPHDHDCMCAHEGIGBHECAGDGPGNHAGBHCGFHDCAGNGPGOHEGIGMHJCAHDGBGMGFHDCAHEGPCAGBHGGFHCGBGHGFCAHDGBGMGFHDCO",
    "EJHECHHDCAGJGNHAGPHCHEGBGOHECAGGGPHCCAGNHFGMHEGJHAGMGFCAHCGFHEGBGJGMCAGEGFHAGBHCHEGNGFGOHEHDCAHEGPCAGCGFCAGBGCGMGFCAHEGPCAGMGPGHGJGOCAHEGPCAGPGOGFCAHDHJHDHEGFGNCAHEGPCAGCGFHEHEGFHCCAGDGPGMGMGBGCGPHCGBHEGFCO",
    "FCGFHEGBGJGMCAGDGPGOHGGFHCHDGJGPGOCAHCGBHEGFHDCAGNGFGBHDHFHCGFCAHEGIGFCAHAGFHCGDGFGOHEGBGHGFCAGPGGCAHGGJHDGJHEGPHCHDCAHEGIGBHECAGNGBGLGFCAGBCAHAHFHCGDGIGBHDGFCOCAFGGJHDGJHEGPHCHDCAGNGBHJCAGJGOGDGMHFGEGFCAHDGIGPHAHAGFHCHDCAHEGIGBHECAHGGJHDGJHECAGBCAHDHEGPHCGFCAGPHCCAGBCAHHGFGCCAHDGJHEGFCO",
    "EFHGGFHCHJCAGEGBHJCAGMGPHHCAHAHCGJGDGJGOGHCAGJHDCAGBCAGNGFHEGIGPGECAGPGGCAHAHCGJGDGFCAGNGBHEGDGIGJGOGHCAHEGIGBHECAGFGOGBGCGMGFHDCAGDGPGNHAGBGOGJGFHDCAHEGPCAGPGGGGGFHCCAHEGIGFGJHCCAGDHFHDHEGPGNGFHCHDCAGDGPGOHDGJHDHEGFGOHEGMHJCAGMGPHHCNHAHCGJGDGFGECAHAHCGPGEHFGDHEHDCO",
    "FEGIGFCAGDGPGNHAGFHEGJHEGJGPGOCAGJGOCAHEGIGFCAHCGFHEGBGJGMCAGJGOGEHFHDHEHCHJCAGJHDCAHGGFHCHJCAGDGMGPHDGFCOCAEJGOHGGFHDHEGJGOGHCAGJGOCAEBEJCAGPGGGGGFHCHDCAGBCAGDGPGNHAGFHEGJHEGJHGGFCAGBGEHGGBGOHEGBGHGFCO",
    "EGGMGBHDGICAHDGBGMGFHDCAGDGBGOCAGMGBHDHECAGBGOHJHHGIGFHCGFCAGGHCGPGNCAHDGFHGGFHCGBGMCAGIGPHFHCHDCAHEGPCAGBCAGDGPHFHAGMGFCAGPGGCAGEGBHJHDCAGBGOGECAGFGOHEGJGDGFCAGDGPGOHDHFGNGFHCHDCAHHGJHEGICAGIHFGHGFCAGCGBHCGHGBGJGOHDCO",
    "EPHCGEGFHCCAGMGFGBGECAHEGJGNGFCAGJHDCAHEGIGFCAHAGFHCGJGPGECAGCGFHEHHGFGFGOCAHHGIGFGOCAHEGIGFCAHCGFHEGBGJGMGFHCCAHAGMGBGDGFHDCAGBGOCAGPHCGEGFHCCAHHGJHEGICAGBCAHDHFHAHAGMGJGFHCCAGBGOGECAHHGIGFGOCAHEGIGFCAHAHCGPGEHFGDHECAGJHDCAGEGFGMGJHGGFHCGFGECAHEGPCAHEGIGFGJHCCAHDHEGPHCGFCO",
    "EFGDGPGNGNCMCAHDGIGPHCHECAGGGPHCCAEFCNGDGPGNGNGFHCGDGFCMCAGJHDCAGBCAGDGIGBGOGOGFGMCAGPGGCAGEGJHDHEHCGJGCHFHEGJGPGOCAHEGIGBHECAHCGFHEGBGJGMGFHCHDCAHFHDGFCAHEGPCAHDGFGMGMCAHEGIGFGJHCCAGHGPGPGEHDCAGPGOGMGJGOGFDLCAHDGPGNGFHEGJGNGFHDCAHEGIGPHFGHGIHECAHEGPCAGCGFCAHEGIGFCAGPHAHAGPHDGJHEGFCAGPGGCAGCHCGJGDGLCAGBGOGECAGNGPHCHEGBHCCO",
    "FEGIGFCAGEGFHAHEGICAGPGGCAGBHDHDGPHCHEGNGFGOHECAGJHDCAHEGIGFCAGBGNGPHFGOHECAGPGGCAGFGBGDGICAGJHEGFGNCAGPHCCAGEGJGGGGGFHCGFGOHECAHDHEHJGMGFHDCAGPGGCAGBCAHAHCGPGEHFGDHECAHEGIGBHECAGBCAHCGFHEGBGJGMGFHCCAHDHEGPGDGLHDCO",
    "FAGPGJGOHECAGPGGCAHDGBGMGFCACIFAEPFDCJCAHDHJHDHEGFGNCAGGHFGOGDHEGJGPGOHDCAGBHDCAGBCAGDGBHDGICAHCGFGHGJHDHEGFHCCAGPHCCAHEGJGMGMCAHDHJHDHEGFGNCAHEGIGBHECAGMGFHEHDCAHCGFHEGBGJGMGFHCHDCAHCGJGOGHCAHFHACAHDGBGMGFHDCAGBGOGECAGLGFGFHACAGBCAHCGFGDGPHCGECAGPGGCAHEGIGPHDGFCAHEHCGBGOHDGBGDHEGJGPGOHDCAGJGOCAHEGIGFGJHCCAHDHEGPHCGFHDCO",
    "FCGFHEGBGJGMCAGNGFGEGJGBCAGJHDCAGNGBHCGLGFHEGJGOGHCAHEGPCAGDGPGOHDHFGNGFHCHDCAGBHECAGPHCCAGOGFGBHCCAHEGIGFGJHCCAHAGPGJGOHECAGPGGCAHAHFHCGDGIGBHDGFCMCAGPHCCAHAGPGJGOHECAGPGGCAGDGIGPGJGDGFCAGCGFHEHHGFGFGOCAGDGPGNHAGFHEGJGOGHCAGCHCGBGOGEHDCAGPHCCAHAHCGPGEHFGDHEHDCO",
    "EBHECAEDGPGHGOGJHCGBCMCAHHGFCAGIGFGMHACAHCGFHEGBGJGMGFHCHDCAHFHDGFCAHEGIGFGJHCCAHDHEGBHEHDCAHEGPCAGJGOGDHCGFGBHDGFCAHEGIGFGJHCCAFCEPEJCO",
    "EJHECHHDCAGJGNHAGPHCHEGBGOHECAGGGPHCCAHEGFGBGNHDCAGBGOGECAGEGFHAGBHCHEGNGFGOHEHDCAHEGPCAGDGPGMGMGBGCGPHCGBHEGFCAGFGGGGGJGDGJGFGOHEGMHJCAHHGJHEGIGJGOCAHAHCGPGNGPHEGJGPGOCAGNGBGOGBGHGFGNGFGOHECO",
    "FCGFHEGBGJGMCAGBGOGECAHEGFGDGIGOGPGMGPGHHJCAGFHIHAGFHCHEHDCACIEBELEBCAGOGFHCGEHDCJCAGBHCGFCAGJGNHAGPHCHEGBGOHECAGGGPHCCAHCGFHEGBGJGMGFHCHDCAGBHDCAHEGIGFHJCAGDGBGOCAGIGFGMHACAHFGOGMGPGDGLCAHGGBGMHFGBGCGMGFCMCAHEHCGBGOHDGGGPHCGNGBHEGJHGGFCAGCHFHDGJGOGFHDHDCAGJGOHDGJGHGIHEHDCAGGHCGPGNCAHEGIGFGJHCCAGEGBHEGBCO",
    "EJHEGFGNHDCAHEGIGBHECAGBHCGFCAGMGFHDHDCAHAGFHCHDGPGOGBGMCMCAHDHFGDGICAGBHDCAGBHAHAGMGJGBGOGDGFHDCAGPHCCAHDHAGPHCHEGJGOGHCAGFHBHFGJHAGNGFGOHECMCAGBHCGFCAGLGOGPHHGOCAGBHDCAGIGBHCGEGMGJGOGFHDCOCAEDGPGOHDHFGNGFHCCAGEHFHCGBGCGMGFHDCAGBGOGECAGIGBHCGEGMGJGOGFHDCAGBHCGFCAGFHDHDGFGOHEGJGBGMGMHJCAHDHJGOGPGOHJGNGPHFHDCO",
    "FAHCGPGNGPHEGJGPGOCAGNGBGOGBGHGFGNGFGOHECAHCGFHBHFGJHCGFHDCAGBGEHGGBGOGDGFGECAHEGPGPGMHDCAHEGPCAGFGOHDHFHCGFCAGBGDGDHFHCGBHEGFCAGBGOGECAHAGPHDGJHEGJHGGFCAHCGFHDHFGMHEHDCO",
    "EDGPHGGJGECNDBDJCAGIGBHDCAGGGPHCGDGFGECAHCGFHEGBGJGMGFHCHDCAHEGPCAGGGPGDHFHDCAGPGOCAHEGBHCGHGFHEGFGECAHAHCGPGNGPHEGJGPGOHDCOCA",
    "FGGBGMHFGFCAGJHDCAHEGIGFCAHAGFHCGDGFGJHGGFGECAGNGPGOGFHEGBHCHJCAHHGPHCHEGICAGPGGCAHEGIGFCAGDGPGNGCGJGOGBHEGJGPGOCAGPGGCAHAHCGPGEHFGDHECMCAHDGFHCHGGJGDGFCMCAGBGOGECAHFHEGJGMGJHEHJCAHAHCGPHGGJGEGFGECO",
    "FAHCGPGEHFGDHECAGMGJGGGFCAGDHJGDGMGFCAGJHDCAHEGIGFCAHDGFHCGJGFHDCAGPGGCAHDHEGBGHGFHDCAHEGIGBHECAGFGBGDGICAGDGPGNGNGFHCGDGJGBGMCAHAHCGPGEHFGDHECAGHGPGFHDCAHEGIHCGPHFGHGICAHHGIGFGOCAGJHECAGIGJHEHDCAHEGIGFCAGNGBHCGLGFHECO",
    "FAGBGDGLHDCAGBHCGFCAGIGPHHCAGDGFHCHEGBGJGOCAGJHEGFGNHDCAGBHCGFCAGCHFGOGEGMGFGECAHEGPGHGFHEGIGFHCCAGGGPHCCAGPHCGEGFHCGJGOGHCMCAHHGIGJGDGICAGJHDCAGJGOGEGFHAGFGOGEGFGOHECAGGHCGPGNCAGIGPHHCAHEGIGFHJCAGBHCGFCAHDGPGMGECO",
    "FAHCGPGNGPHEGJGPGOCAHAGMGBGOGOGJGOGHCAGJHDCAGBHCGHHFGBGCGMHJCAGPGOGFCAGPGGCAHEGIGFCAGNGPHDHECAGEGJGGGGGJGDHFGMHECAHEGBHDGLHDCAHEGPCAGNGBGOGBGHGFCAHHGJHEGIGJGOCAHCGFHEGBGJGMCO",
    "EOGJGDGIGFCAHCGFHEGBGJGMGJGOGHCAGJHDCAHEGIGFCAHAHCGBGDHEGJGDGFCAGPGGCAHDGFGMGMGJGOGHCAGPGOGMHJCAHEGPCAGBCAHDHAGFGDGJGGGJGDCAGNGBHCGLGFHECAHDGFGHGNGFGOHECOCAEJGOCAGPHEGIGFHCCAHHGPHCGEHDCMCAGJGGCAHJGPHFCHHCGFCAGBCAGOGJGDGIGFCAHCGFHEGBGJGMGFHCCMCAHJGPHFCAHDHAGFGDGJGBGMGJHKGFCAGJGOCAGBCAHAGBHCHEGJGDHFGMGBHCCAHEHJHAGFCAGPGGCAHAHCGPGEHFGDHECACIGPHCCAHDGPGNGFHEGJGNGFHDCAGBCAGGGFHHCAGDGMGPHDGFGMHJCAHCGFGMGBHEGFGECAGPGOGFHDCJCO",
    "FCGFHEGBGJGMCAHDGBGMGFHDCAGDHCGBHDGIGFGECAGCHJCADFCODECFCAGJGOCAEBHAHCGJGMCADCDADCDCCAHHGIGFGOCAGDGPGNHAGBHCGFGECAHEGPCAENGBHCGDGIDLCAGOGFGBHCGMHJCAGJGEGFGOHEGJGDGBGMCAGNCPGNCAHCGFHDHFGMHEHDCAGGHCGPGNCAHEGIGFCAHAHCGJGPHCCAEBHAHCGJGMCO",
    "ENGPHCGFCAGBGOGECAGNGPHCGFCAGDGPGOHDHFGNGFHCHDCAGBHCGFCAHEHFHCGOGJGOGHCAHEGPCAGPGOGMGJGOGFCAHDGIGPHAHAGJGOGHCAHCGBHEGIGFHCCAHEGIGBGOCAGCHCGJGDGLCAGBGOGECAGNGPHCHEGBHCCOCAECHJCADCDADEDACMCAGJHECHHDCAGFHDHEGJGNGBHEGFGECAHEGIGBHECADJDFCFCAGPGGCAHAHFHCGDGIGBHDGFHDCAHHGJGMGMCAGCGFCAGGGBGDGJGMGJHEGBHEGFGECAGCHJCAGFGDGPGNGNGFHCGDGFCO",
    "FHGIGFGOCAHAGMGBGOGOGJGOGHCAHAHCGPGNGPHEGJGPGOHDCMCAGJHECHHDCAGJGNHAGPHCHEGBGOHECAHEGPCAGIGBHGGFCAGDGMGFGBHCCAGHGPGBGMHDCAHEGIGBHECAGBGMGJGHGOCAHHGJHEGICAHJGPHFHCCAGDGPGNHAGBGOGJGFHDCAGPGCGKGFGDHEGJHGGFHDCO",
    "EEGFGBGMHDCAGBHCGFCAGPGGGGGFHCGFGECAHEGPCAHCGFHEGBGJGMGFHCHDCAGGHCGPGNCAHGGFGOGEGPHCHDCAHEGPCAGIGFGMHACAGGHFGOGECAHAHCGPGNGPHEGJGPGOHDCAGHGJHGGFGOCAHEGPCAGDHFHDHEGPGNGFHCHDCAGJGOCAGGGMHJGFHCHDCAGPHCCAGJGOCNHDHEGPHCGFCO",
    "EBCAHAGMGBGOGPGHHCGBGNCAGJHDCAGBCAHGGJHEGBGMCAHAGBHCHECAGPGGCAGNGFHCGDGIGBGOGEGJHDGJGOGHCAGBGOGECAHCGFHEGBGJGMCAHDHAGBGDGFCAHAGMGBGOGOGJGOGHCOCAEJHECAGEGJGBGHHCGBGNHDCAGIGPHHCAGBGOGECAHHGIGFHCGFCAHAHCGPGEHFGDHEHDCAHDGIGPHFGMGECAGCGFCAGEGJHDHAGMGBHJGFGECAHEGPCAGBGGGGGFGDHECAHAHFHCGDGIGBHDGJGOGHCAGEGFGDGJHDGJGPGOHDCO",
    "ENGJGOGJGNHFGNCAGBGEHGGFHCHEGJHDGFGECAHAHCGJGDGFCAGJHDCAGBCAHDHFHAHAGMGJGFHCCHHDCAHAGPGMGJGDHJCAHEGIGBHECAGEGPGFHDGOCHHECAHAGFHCGNGJHECAHCGFHEGBGJGMGFHCHDCAHEGPCAGBGEHGGFHCHEGJHDGFCAGCGFGMGPHHCAGBCAHDHAGFGDGJGGGJGDCAGBGNGPHFGOHECMCAGBGMHEGIGPHFGHGICAHEGIGFHJCAGDGBGOCAHDGFGMGMCAGJHEGFGNHDCAGGGPHCCAGMGFHDHDCAHEGIGBGOCAHEGIGJHDCAHAHCGJGDGFCO",
    "EJGOHAHFHEHDCAGBHCGFCAGBGOHJCAHCGFHDGPHFHCGDGFHDCAHFHDGFGECAHEGPCAGDHCGFGBHEGFCAGHGPGPGEHDCAGBGOGECAHDGFHCHGGJGDGFHDCO",
    "EBGOCAGFGOGEGMGFHDHDCAGBGJHDGMGFCAGJHDCAGBCAGGGFGBHEHFHCGFCAGPGGCAGCHCGJGDGLCNGBGOGECNGNGPHCHEGBHCCAHDHEGPHCGFHDCAHEGIGBHECAGFGOGBGCGMGFHDCAGDHFHDHEGPGNGFHCHDCAHEGPCAGCHCGPHHHDGFCAGBGOGECAHDGIGPHACAHEGIGFCAHCGFHEGBGJGMGFHCCHHDCAGFGOHEGJHCGFCAGDGBHEGBGMGPGHCAGPGGCAHAHCGPGEHFGDHEHDCO",
    "FDGFGMGGCAHDGFHCHGGFCAGNGFGBGOHDCAGMGFHEHEGJGOGHCAGDHFHDHEGPGNGFHCHDCAHDGFGMGFGDHECAGBGOGECAHAGBHJCAGGGPHCCAGHGPGPGEHDCAHEGIGFGNHDGFGMHGGFHDCMCAHHGJHEGIGPHFHECAHCGFHBHFGJHCGJGOGHCAHEGIGFCAGBHDHDGJHDHEGBGOGDGFCAGPGGCAGBCAGMGJHGGFCAHDHEGBGGGGCAGNGFGNGCGFHCCO",
    "FEGBGCGMGFHDCAGBHCGFCAGPGGHEGFGOCAHFHDGFGECAHEGPCAGPHCGHGBGOGJHKGFCAGBGOGECAGBGOGBGMHJHKGFCAHAHCGPGNGPHEGJGPGOGBGMCAGEGBHEGBCO",
    "EDGPGOHDHFGNGFHCCAHAGBGDGLGBGHGFGECAGHGPGPGECMCAGPGGHEGFGOCAGBGCGCHCGFHGGJGBHEGFGECAHEGPCAEDFAEHCMCAGBHCGFCAGJHEGFGNHDCAHEGIGBHECAGBHCGFCAHFHDGFGECAGEGBGJGMHJCAGCHJCAHEGIGFCAGBHGGFHCGBGHGFCAGDGPGOHDHFGNGFHCCO",
    "EHHCGPHDHDCAGNGBHCGHGJGOCAGJHDCAHEGPHEGBGMCAHDGBGMGFHDCAHCGFHGGFGOHFGFCAGNGJGOHFHDCAHEGIGFCAGDGPHDHECAGPGGCAGHGPGPGEHDCAHDGPGMGECMCAGFHIHAHCGFHDHDGFGECAGBHDCAGBCAHAGFHCGDGFGOHEGBGHGFCAGPGGCAHEGPHEGBGMCAHDGBGMGFHDCAHCGFHGGFGOHFGFCO",
    "EDGPGHGOGJHCGBCAGJHDCAHAHCGPHFGECAHEGPCAGIGBHGGFCAHAHCGPHGGJGEGFGECAGBCAHCGFHEGBGJGMCAHGGFHCHDGJGPGOCAGPGGCAHEGIGJHDCAGHGBGNGFCO",
    "EIGJGHGICAHDHAGFGFGECAHCGFHEGBGJGMCAGJHDCAGBGMGMCAGBGCGPHFHECAGNGBGLGJGOGHCAHEGIGFCAGDHFHDHEGPGNGFHCCHHDCAHDGIGPHAHAGJGOGHCAGFHIHAGFHCGJGFGOGDGFCAGHGPCAGCHJCAGNHFGDGICAHBHFGJGDGLGFHCCO",
    "EDGPGOHDHFGNGFHCHDCAGOGFGFGEHDCAGJGOCADCDADCDCCAGBHCGFCAGIGJGHGIGMHJCAGGGPGDHFHDGFGECAGPGOCAGBCAHAGPHDGJHEGJHGGFCAGDHFHDHEGPGNGFHCCAGFHIHAGFHCGJGFGOGDGFCOCA",
    "EGGJHGGFCAGCGJGMGMGJGPGOCAHAGPHFGOGEHDCAGPGGCAHCGFHEHFHCGOGFGECAGHGPGPGEHDCAGFGOGECAHFHACAGJGOCAFFCOFDCOCAGMGBGOGEGGGJGMGMHDCAGFGBGDGICAHJGFGBHCCO",
    "EBGOCAGBGDHECAGPHCCAGDGPGOGEGJHEGJGPGOCAGPGGCAGJGHGOGPHCGBGOHECAGPHCCAGJGNHAHCHFGEGFGOHECAGEGFHGGJGBHEGJGPGOCAGGHCGPGNCAGBCAGDGPGEGFCAGPGGCAGCGFGIGBHGGJGPHCCO",
    ];
    var RandIndex = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75],
        [14, 3, 32, 31, 19, 1, 20, 10, 66, 28, 58, 53, 5, 40, 35, 60, 22, 26, 50, 34, 15, 23, 61, 48, 0, 49, 4, 70, 13, 33, 27, 2, 72, 8, 73, 24, 75, 44, 68, 21, 67, 7, 65, 11, 62, 52, 51, 25, 42, 12, 37, 64, 30, 69, 38, 17, 9, 59, 47, 56, 74, 71, 18, 41, 16, 57, 43, 55, 54, 46, 6, 45, 63, 29, 39, 36],
        [73, 48, 20, 36, 16, 0, 34, 56, 59, 65, 37, 72, 75, 47, 70, 53, 57, 25, 19, 68, 2, 17, 13, 45, 4, 35, 18, 23, 66, 40, 5, 15, 12, 51, 69, 1, 74, 46, 52, 9, 3, 26, 71, 41, 33, 64, 67, 27, 63, 8, 21, 62, 30, 61, 42, 28, 32, 14, 11, 29, 50, 60, 54, 31, 6, 58, 24, 7, 39, 49, 10, 22, 44, 38, 55, 43],
        [10, 64, 37, 74, 60, 68, 59, 40, 46, 54, 14, 16, 48, 72, 65, 31, 5, 34, 43, 44, 51, 61, 33, 47, 63, 23, 41, 19, 12, 20, 22, 42, 30, 21, 66, 4, 3, 70, 57, 52, 11, 29, 35, 18, 17, 58, 55, 6, 36, 24, 38, 67, 49, 39, 45, 7, 53, 15, 32, 62, 2, 73, 9, 26, 13, 50, 71, 56, 27, 0, 1, 8, 75, 69, 28, 25]
      ];
    var Ra = { unknown: 0, absent: 1, present: 2, correct: 3 };
    function Pa(e, a) {
      var s = {};
      return (
        e.forEach(function (e, t) {
          if (a[t])
            for (var o = 0; o < e.length; o++) {
              var n = e[o],
                r = a[t][o],
                i = s[n] || "unknown";
              Ra[r] > Ra[i] && (s[n] = r);
            }
        }),
        s
      );
    }
    function $a(e) {
      var a = ["th", "st", "nd", "rd"],
        s = e % 100;
      return e + (a[(s - 20) % 10] || a[s] || a[0]);
    }
    function Na(e, a) {
      var t = new Date(a).setHours(0, 0, 0, 0) - new Date(e).setHours(0, 0, 0, 0)
      return Math.round(t / Htime);
    }
    function Ga(e) {
      var g = Na(Ha, e);
      return g < 0 ? 0 : g;
    }
    function dayOffsetToIndex(d) {
      var w = Math.floor(d / La.length) % 4;
      var i = d % La.length;
      return RandIndex[w][i] % La.length;
    }
    var Cha = "a".charCodeAt();
    var ChA = "A".charCodeAt();
    var Ch0 = "0".charCodeAt();
    function Det(a) {
      var x = 0;
      if (a >= ChA) { x = a-ChA+10; }
      else { x = a-Ch0; }
      return x;
    }
    function De1(a) {
      var x = Det(a);
      var a2 = ((x&16)/2)+((x&8)/4)+((x&4)/4)+((x&2)*2)+((x&1)*16);
      return String.fromCharCode(a2+Cha);
    }
    function De2(a,b) {
      var x = Det(a);
      var y = Det(b);
      var a2 = ((x&16)/2)+((y&8)/4)+((x&4)/4)+((y&2)*2)+((x&1)*16);
      var b2 = ((y&16)/2)+((x&8)/4)+((y&4)/4)+((x&2)*2)+((y&1)*16);
      return String.fromCharCode(a2+Cha,b2+Cha);
    }
    function Des(s) {
      var r = "";
      for (var i = 0; i < s.length;) {
        var c1 = s.charCodeAt(i);
        i++;
        if (i < s.length) {
          var c2 = s.charCodeAt(i);
          i++;
          r += De2(c1,c2);
        } else {
          r += De1(c1);
        }
      }
      return r;
    }
    function Dess(s) {
      var r = "";
      for (var i = 0; i < s.length; ) {
        var a = s.charCodeAt(i);
        i++;
        var b = s.charCodeAt(i);
        i++;
        var x = ((a-ChA)<<4)+(b-ChA);
        r += String.fromCharCode(x);
      }
      return r;
    }
    function Da(e) {
      /*** debug ***
      var t = new Date().setHours(0, 0, 0, 0) - new Date(Ha).setHours(0, 0, 0, 0);
      var i = Math.round(t / Htime);
      console.log("random offsets 2");
      for (var n = 0; n < 140; n++) {
          var dOffset = i + n;
          console.log("day offset: " + dOffset + ", index " + dayOffsetToIndex(dOffset));
      } ***/
      var index = dayOffsetToIndex(Ga(e))
      return Des(La[index]);
    }
    var Ba = "abcdefghijklmnopqrstuvwxyz",
      Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));
    function Wa(e) {
      for (var a = "", s = 0; s < e.length; s++) {
        var t = Ba.indexOf(e[s]);
        a += t >= 0 ? Fa[t] : "_";
      }
      return a;
    }
    var Ya = "statistics",
      Ja = "fail",
      Ua = {
        currentStreak: 0,
        maxStreak: 0,
        guesses: n({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }, Ja, 0),
        winPercentage: 0,
        gamesPlayed: 0,
        gamesWon: 0,
        averageGuesses: 0,
      };
    function Xa() {
      var e = window.localStorage.getItem(Ya) || JSON.stringify(Ua);
      return JSON.parse(e);
    }
    function Va(e) {
      var a = e.isWin,
        s = e.isStreak,
        t = e.numGuesses,
        o = Xa();
      a
        ? ((o.guesses[t] += 1),
          s ? (o.currentStreak += 1) : (o.currentStreak = 1))
        : ((o.currentStreak = 0), (o.guesses.fail += 1)),
        (o.maxStreak = Math.max(o.currentStreak, o.maxStreak)),
        (o.gamesPlayed += 1),
        (o.gamesWon += a ? 1 : 0),
        (o.winPercentage = Math.round((o.gamesWon / o.gamesPlayed) * 100)),
        (o.averageGuesses = Math.round(
          (Object.entries(o.guesses).reduce(function (e, a) {
            var s = y(a, 2),
              t = s[0],
              o = s[1];
            return t !== Ja ? (e += t * o) : (e += 7 * o);
          }, 0) / Math.max(o.gamesPlayed, 1)) * 10
        ) / 10),
        (function (e) {
          window.localStorage.setItem(Ya, JSON.stringify(e));
        })(o);
    }
    var Ka = document.createElement("template");
    Ka.innerHTML =
      "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: "
        .concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ")
        .concat(
          4e3,
          ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 24px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n       Retail Nerdle\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n'
        );
    var Qa = document.createElement("template");
    Qa.innerHTML =
      '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
    var Za = "IN_PROGRESS",
      es = "WIN",
      as = "FAIL",
      ss = [
        "Genius!",
        "Wow, Impressive!",
        "Nice work!",
        "Solid effort!",
        "Cutting it close!",
        "Phew!",
      ],
      ts = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          s(this, t),
            n(p((e = a.call(this))), "tileIndex", 0),
            n(p(e), "rowIndex", 0),
            n(p(e), "solution", void 0),
            n(p(e), "boardState", void 0),
            n(p(e), "evaluations", void 0),
            n(p(e), "canInput", !0),
            n(p(e), "gameStatus", Za),
            n(p(e), "letterEvaluations", {}),
            n(p(e), "$board", void 0),
            n(p(e), "$keyboard", void 0),
            n(p(e), "$game", void 0),
            n(p(e), "today", void 0),
            n(p(e), "lastPlayedTs", void 0),
            n(p(e), "lastCompletedTs", void 0),
            n(p(e), "hardMode", void 0),
            n(p(e), "dayOffset", void 0),
            e.attachShadow({ mode: "open" }),
            (e.today = new Date());
          var o = za();

          var currentGame = Ga(e.today);
          if (window.localStorage.getItem("reload"+JSON.stringify(currentGame)) == null) {
            window.localStorage.setItem("reload"+JSON.stringify(currentGame), JSON.stringify(1));
            window.location.reload();
          }

          return (
            (e.lastPlayedTs = o.lastPlayedTs),
            !e.lastPlayedTs || Na(new Date(e.lastPlayedTs), e.today) >= 1
              ? ((e.boardState = new Array(6).fill("")),
                (e.evaluations = new Array(6).fill(null)),
                (e.solution = Da(e.today)),
                (e.dayOffset = Ga(e.today)),
                (e.lastCompletedTs = o.lastCompletedTs),
                (e.hardMode = o.hardMode),
                (e.restoringFromLocalStorage = !1),
                ja({
                  rowIndex: e.rowIndex,
                  boardState: e.boardState,
                  evaluations: e.evaluations,
                  solution: e.solution,
                  gameStatus: e.gameStatus,
                }),
                Ca("event", "level_start", { level_name: e.solution }))
              : ((e.boardState = o.boardState),
                (e.evaluations = o.evaluations),
                (e.rowIndex = o.rowIndex),
                (e.solution = o.solution),
                (e.dayOffset = Ga(e.today)),
                (e.letterEvaluations = Pa(e.boardState, e.evaluations)),
                (e.gameStatus = o.gameStatus),
                (e.lastCompletedTs = o.lastCompletedTs),
                (e.hardMode = o.hardMode),
                e.gameStatus !== Za && (e.canInput = !1),
                (e.restoringFromLocalStorage = !0)),
            e
          );
        }
        return (
          o(t, [
            {
              key: "evaluateRow",
              value: function () {
                if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                  var e,
                    a = this.$board.querySelectorAll("game-row")[this.rowIndex],
                    s = this.boardState[this.rowIndex];
                  if (((e = s), !Ta.includes(e) && e != this.solution))
                    return (
                      a.setAttribute("invalid", ""),
                      void this.addToast("Not in word list")
                    );
                  if (this.hardMode) {
                    var t = (function (e, a, s) {
                        if (!e || !a || !s) return { validGuess: !0 };
                        for (var t = 0; t < s.length; t++)
                          if (s[t] === Ma && e[t] !== a[t])
                            return {
                              validGuess: !1,
                              errorMessage: ""
                                .concat($a(t + 1), " letter must be ")
                                .concat(a[t].toUpperCase()),
                            };
                        for (var o = {}, n = 0; n < s.length; n++)
                          [Ma, Ia].includes(s[n]) &&
                            (o[a[n]] ? (o[a[n]] += 1) : (o[a[n]] = 1));
                        var r = e.split("").reduce(function (e, a) {
                          return e[a] ? (e[a] += 1) : (e[a] = 1), e;
                        }, {});
                        for (var i in o)
                          if ((r[i] || 0) < o[i])
                            return {
                              validGuess: !1,
                              errorMessage: "Guess must contain ".concat(
                                i.toUpperCase()
                              ),
                            };
                        return { validGuess: !0 };
                      })(
                        s,
                        this.boardState[this.rowIndex - 1],
                        this.evaluations[this.rowIndex - 1]
                      ),
                      o = t.validGuess,
                      n = t.errorMessage;
                    if (!o)
                      return (
                        a.setAttribute("invalid", ""),
                        void this.addToast(n || "Not valid in hard mode")
                      );
                  }
                  var r = (function (e, a) {
                    for (
                      var s = Array(a.length).fill(Oa),
                        t = Array(a.length).fill(!0),
                        o = Array(a.length).fill(!0),
                        n = 0;
                      n < e.length;
                      n++
                    )
                      e[n] === a[n] &&
                        o[n] &&
                        ((s[n] = Ma), (t[n] = !1), (o[n] = !1));
                    for (var r = 0; r < e.length; r++) {
                      var i = e[r];
                      if (t[r])
                        for (var l = 0; l < a.length; l++) {
                          var d = a[l];
                          if (o[l] && i === d) {
                            (s[r] = Ia), (o[l] = !1);
                            break;
                          }
                        }
                    }
                    return s;
                  })(s, this.solution);
                  (this.evaluations[this.rowIndex] = r),
                    (this.letterEvaluations = Pa(
                      this.boardState,
                      this.evaluations
                    )),
                    (a.evaluation = this.evaluations[this.rowIndex]),
                    (this.rowIndex += 1);
                  var i = this.rowIndex >= 6,
                    l = r.every(function (e) {
                      return "correct" === e;
                    });
                  if (i || l) {
                    var stats = Xa();
                    Va({
                      isWin: l,
                      isStreak:
                        !!this.lastCompletedTs &&
                        1 === Na(new Date(this.lastCompletedTs), new Date()),
                      numGuesses: this.rowIndex,
                    }),
                      ja({ lastCompletedTs: Date.now() }),
                      (this.gameStatus = l ? es : as),
                      Ca("event", "level_end", {
                        level_name: this.solution,
                        num_guesses: this.rowIndex == 6 && !l ? 7 : this.rowIndex,
                        hard_mode: this.hardMode ? 1 : 0,
                        high_contrast: document.querySelector("body").classList.contains("colorblind") ? 1 : 0,
                        dark_theme: document.querySelector("body").classList.contains("nightmode") ? 1 : 0,
                        games_played: stats.gamesPlayed+1,
                        level_number: this.dayOffset,
                        success: l,
                      });
                  }
                  (this.tileIndex = 0),
                    (this.canInput = !1),
                    ja({
                      rowIndex: this.rowIndex,
                      boardState: this.boardState,
                      evaluations: this.evaluations,
                      solution: this.solution,
                      gameStatus: this.gameStatus,
                      lastPlayedTs: Date.now(),
                    });
                }
              },
            },
            {
              key: "addLetter",
              value: function (e) {
                this.gameStatus === Za &&
                  this.canInput &&
                  (this.tileIndex >= 5 ||
                    ((this.boardState[this.rowIndex] += e),
                    this.$board
                      .querySelectorAll("game-row")
                      [this.rowIndex].setAttribute(
                        "letters",
                        this.boardState[this.rowIndex]
                      ),
                    (this.tileIndex += 1)));
              },
            },
            {
              key: "removeLetter",
              value: function () {
                if (
                  this.gameStatus === Za &&
                  this.canInput &&
                  !(this.tileIndex <= 0)
                ) {
                  this.boardState[this.rowIndex] = this.boardState[
                    this.rowIndex
                  ].slice(0, this.boardState[this.rowIndex].length - 1);
                  var e =
                    this.$board.querySelectorAll("game-row")[this.rowIndex];
                  this.boardState[this.rowIndex]
                    ? e.setAttribute("letters", this.boardState[this.rowIndex])
                    : e.removeAttribute("letters"),
                    e.removeAttribute("invalid"),
                    (this.tileIndex -= 1);
                }
              },
            },
            {
              key: "submitGuess",
              value: function () {
                if (this.gameStatus === Za && this.canInput) {
                  if (5 !== this.tileIndex)
                    return (
                      this.$board
                        .querySelectorAll("game-row")
                        [this.rowIndex].setAttribute("invalid", ""),
                      void this.addToast("Not enough letters")
                    );
                  this.evaluateRow();
                }
              },
            },
            {
              key: "addToast",
              value: function (e, a) {
                var s =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  t = document.createElement("game-toast");
                t.setAttribute("text", e),
                  a && t.setAttribute("duration", a),
                  s
                    ? this.shadowRoot
                        .querySelector("#system-toaster")
                        .prepend(t)
                    : this.shadowRoot.querySelector("#game-toaster").prepend(t);
              },
            },
            {
              key: "sizeBoard",
              value: function () {
                var e = this.shadowRoot.querySelector("#board-container"),
                  a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
                  s = 6 * Math.floor(a / 5);
                (this.$board.style.width = "".concat(a, "px")),
                  (this.$board.style.height = "".concat(s, "px"));
              },
            },
            {
              key: "showStatsModal",
              value: function () {
                var e = this.$game.querySelector("game-modal"),
                  a = document.createElement("game-stats");
                  (this.gameStatus === es &&
                  this.rowIndex <= 6 &&
                  a.setAttribute("highlight-guess", this.rowIndex)) ||
                  (this.gameStatus === as &&
                  a.setAttribute("highlight-guess", 7)),
                  (a.gameApp = this),
                  e.appendChild(a),
                  e.setAttribute("open", "");
              },
            },
            {
              key: "showHelpModal",
              value: function () {
                var e = this.$game.querySelector("game-modal");
                e.appendChild(document.createElement("game-help")),
                  e.setAttribute("open", "");
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(Ka.content.cloneNode(!0)),
                  (this.$game = this.shadowRoot.querySelector("#game")),
                  (this.$board = this.shadowRoot.querySelector("#board")),
                  (this.$keyboard =
                    this.shadowRoot.querySelector("game-keyboard")),
                  this.sizeBoard(),
                  this.lastPlayedTs ||
                    setTimeout(function () {
                      return e.showHelpModal();
                    }, 100);
                for (var a = 0; a < 6; a++) {
                  var s = document.createElement("game-row");
                  s.setAttribute("letters", this.boardState[a]),
                    s.setAttribute("length", 5),
                    this.evaluations[a] && (s.evaluation = this.evaluations[a]),
                    this.$board.appendChild(s);
                }
                this.$game.addEventListener("game-key-press", function (a) {
                  var s = a.detail.key;
                  "←" === s || "Backspace" === s
                    ? e.removeLetter()
                    : "↵" === s || "Enter" === s
                    ? e.submitGuess()
                    : Ba.includes(s.toLowerCase()) &&
                      e.addLetter(s.toLowerCase());
                }),
                  this.$game.addEventListener(
                    "game-last-tile-revealed-in-row",
                    function (a) {
                      (e.$keyboard.letterEvaluations = e.letterEvaluations),
                        e.rowIndex < 6 && (e.canInput = !0);
                      var s =
                        e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                      (a.path || (a.composedPath && a.composedPath())).includes(
                        s
                      ) &&
                        ([es, as].includes(e.gameStatus) &&
                          (e.restoringFromLocalStorage
                            ? e.showStatsModal()
                            : (e.gameStatus === es &&
                                (s.setAttribute("win", ""),
                                e.addToast(ss[e.rowIndex - 1], 2e3)),
                              e.gameStatus === as &&
                                e.addToast(e.solution.toUpperCase(), 1 / 0),
                              setTimeout(function () {
                                e.showStatsModal();
                              }, 2500))),
                        (e.restoringFromLocalStorage = !1));
                    }
                  ),
                  this.shadowRoot.addEventListener(
                    "game-setting-change",
                    function (a) {
                      var s = a.detail,
                        t = s.name,
                        o = s.checked,
                        n = s.disabled;
                      switch (t) {
                        case "hard-mode":
                          return void (n
                            ? e.addToast(
                                "Hard mode can only be enabled at the start of a round",
                                1500,
                                !0
                              )
                            : ((e.hardMode = o), ja({ hardMode: o })));
                      }
                    }
                  ),
                  this.shadowRoot
                    .getElementById("settings-button")
                    .addEventListener("click", function (a) {
                      var s = e.$game.querySelector("game-page"),
                        t = document.createTextNode("Settings");
                      s.appendChild(t);
                      var o = document.createElement("game-settings");
                      o.setAttribute("slot", "content"),
                        (o.gameApp = e),
                        s.appendChild(o),
                        s.setAttribute("open", "");
                    }),
                  this.shadowRoot
                    .getElementById("help-button")
                    .addEventListener("click", function (a) {
                      var s = e.$game.querySelector("game-page"),
                        t = document.createTextNode("How to play");
                      s.appendChild(t);
                      var o = document.createElement("game-help");
                      o.setAttribute("page", ""),
                        o.setAttribute("slot", "content"),
                        s.appendChild(o),
                        s.setAttribute("open", "");
                    }),
                  this.shadowRoot
                    .getElementById("statistics-button")
                    .addEventListener("click", function (a) {
                      e.showStatsModal();
                    }),
                  window.addEventListener("resize", this.sizeBoard.bind(this));
              },
            },
            { key: "disconnectedCallback", value: function () {} },
            {
              key: "debugTools",
              value: function () {
                var e = this;
                this.shadowRoot
                  .getElementById("debug-tools")
                  .appendChild(Qa.content.cloneNode(!0)),
                  this.shadowRoot
                    .getElementById("toast")
                    .addEventListener("click", function (a) {
                      e.addToast("hello world");
                    }),
                  this.shadowRoot
                    .getElementById("modal")
                    .addEventListener("click", function (a) {
                      var s = e.$game.querySelector("game-modal");
                      (s.textContent = "hello plz"), s.setAttribute("open", "");
                    }),
                  this.shadowRoot
                    .getElementById("reveal")
                    .addEventListener("click", function () {
                      e.evaluateRow();
                    }),
                  this.shadowRoot
                    .getElementById("shake")
                    .addEventListener("click", function () {
                      e.$board
                        .querySelectorAll("game-row")
                        [e.rowIndex].setAttribute("invalid", "");
                    }),
                  this.shadowRoot
                    .getElementById("bounce")
                    .addEventListener("click", function () {
                      var a =
                        e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                      "" === a.getAttribute("win")
                        ? a.removeAttribute("win")
                        : a.setAttribute("win", "");
                    });
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    customElements.define("game-app", ts);
    var os = document.createElement("template");
    os.innerHTML =
      "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(
        3e3,
        ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n'
      );
    var ns = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e;
      }
      return (
        o(t, [
          {
            key: "connectedCallback",
            value: function () {
              var e = this;
              this.shadowRoot.appendChild(os.content.cloneNode(!0)),
                this.addEventListener("click", function (a) {
                  e.shadowRoot
                    .querySelector(".content")
                    .classList.add("closing");
                }),
                this.shadowRoot.addEventListener("animationend", function (a) {
                  "SlideOut" === a.animationName &&
                    (e.shadowRoot
                      .querySelector(".content")
                      .classList.remove("closing"),
                    e.removeChild(e.firstChild),
                    e.removeAttribute("open"));
                });
            },
          },
        ]),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-modal", ns);
    var rs = document.createElement("template");
    rs.innerHTML =
      "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n  font-size: 16px;\n  font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
    var is = document.createElement("template");
    is.innerHTML = "\n  <button>key</button>\n";
    var ls = document.createElement("template");
    ls.innerHTML = '\n  <div class="spacer"></div>\n';
    var ds = [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"],
        ["↵", "z", "x", "c", "v", "b", "n", "m", "←"],
      ],
      us = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          return (
            s(this, t),
            n(p((e = a.call(this))), "_letterEvaluations", {}),
            e.attachShadow({ mode: "open" }),
            e
          );
        }
        return (
          o(t, [
            {
              key: "letterEvaluations",
              set: function (e) {
                (this._letterEvaluations = e), this._render();
              },
            },
            {
              key: "dispatchKeyPressEvent",
              value: function (e) {
                this.dispatchEvent(
                  new CustomEvent("game-key-press", {
                    bubbles: !0,
                    composed: !0,
                    detail: { key: e },
                  })
                );
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(rs.content.cloneNode(!0)),
                  (this.$keyboard = this.shadowRoot.getElementById("keyboard")),
                  this.$keyboard.addEventListener("click", function (a) {
                    var s = a.target.closest("button");
                    s &&
                      e.$keyboard.contains(s) &&
                      e.dispatchKeyPressEvent(s.dataset.key);
                  }),
                  window.addEventListener("keydown", function (a) {
                    if (!0 !== a.repeat) {
                      var s = a.key,
                        t = a.metaKey,
                        o = a.ctrlKey;
                      t ||
                        o ||
                        ((Ba.includes(s.toLowerCase()) ||
                          "Backspace" === s ||
                          "Enter" === s) &&
                          e.dispatchKeyPressEvent(s));
                    }
                  }),
                  this.$keyboard.addEventListener(
                    "transitionend",
                    function (a) {
                      var s = a.target.closest("button");
                      s &&
                        e.$keyboard.contains(s) &&
                        s.classList.remove("fade");
                    }
                  ),
                  ds.forEach(function (a) {
                    var s = document.createElement("div");
                    s.classList.add("row"),
                      a.forEach(function (e) {
                        var a;
                        if (
                          (e >= "a" && e <= "z") ||
                          "←" === e ||
                          "↵" === e
                        ) {
                          if (
                            (((a = is.content.cloneNode(
                              !0
                            ).firstElementChild).dataset.key = e),
                            (a.textContent = e),
                            "←" === e)
                          ) {
                            var t = document.createElement("game-icon");
                            t.setAttribute("icon", "backspace"),
                              (a.textContent = ""),
                              a.appendChild(t),
                              a.classList.add("one-and-a-half");
                          }
                          "↵" == e &&
                            ((a.textContent = "enter"),
                            a.classList.add("one-and-a-half"));
                        } else (a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                        s.appendChild(a);
                      }),
                      e.$keyboard.appendChild(s);
                  }),
                  this._render();
              },
            },
            {
              key: "_render",
              value: function () {
                for (var e in this._letterEvaluations) {
                  var a = this.$keyboard.querySelector(
                    '[data-key="'.concat(e, '"]')
                  );
                  (a.dataset.state = this._letterEvaluations[e]),
                    a.classList.add("fade");
                }
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
    function cs(e, a, s, t) {
      return new (s || (s = Promise))(function (o, n) {
        function r(e) {
          try {
            l(t.next(e));
          } catch (e) {
            n(e);
          }
        }
        function i(e) {
          try {
            l(t.throw(e));
          } catch (e) {
            n(e);
          }
        }
        function l(e) {
          var a;
          e.done
            ? o(e.value)
            : ((a = e.value),
              a instanceof s
                ? a
                : new s(function (e) {
                    e(a);
                  })).then(r, i);
        }
        l((t = t.apply(e, a || [])).next());
      });
    }
    function ps(e, a) {
      var s,
        t,
        o,
        n,
        r = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (n = { next: i(0), throw: i(1), return: i(2) }),
        "function" == typeof Symbol &&
          (n[Symbol.iterator] = function () {
            return this;
          }),
        n
      );
      function i(n) {
        return function (i) {
          return (function (n) {
            if (s) throw new TypeError("Generator is already executing.");
            for (; r; )
              try {
                if (
                  ((s = 1),
                  t &&
                    (o =
                      2 & n[0]
                        ? t.return
                        : n[0]
                        ? t.throw || ((o = t.return) && o.call(t), 0)
                        : t.next) &&
                    !(o = o.call(t, n[1])).done)
                )
                  return o;
                switch (((t = 0), o && (n = [2 & n[0], o.value]), n[0])) {
                  case 0:
                  case 1:
                    o = n;
                    break;
                  case 4:
                    return r.label++, { value: n[1], done: !1 };
                  case 5:
                    r.label++, (t = n[1]), (n = [0]);
                    continue;
                  case 7:
                    (n = r.ops.pop()), r.trys.pop();
                    continue;
                  default:
                    if (
                      !(
                        (o = (o = r.trys).length > 0 && o[o.length - 1]) ||
                        (6 !== n[0] && 2 !== n[0])
                      )
                    ) {
                      r = 0;
                      continue;
                    }
                    if (3 === n[0] && (!o || (n[1] > o[0] && n[1] < o[3]))) {
                      r.label = n[1];
                      break;
                    }
                    if (6 === n[0] && r.label < o[1]) {
                      (r.label = o[1]), (o = n);
                      break;
                    }
                    if (o && r.label < o[2]) {
                      (r.label = o[2]), r.ops.push(n);
                      break;
                    }
                    o[2] && r.ops.pop(), r.trys.pop();
                    continue;
                }
                n = a.call(e, r);
              } catch (e) {
                (n = [6, e]), (t = 0);
              } finally {
                s = o = 0;
              }
            if (5 & n[0]) throw n[1];
            return { value: n[0] ? n[1] : void 0, done: !0 };
          })([n, i]);
        };
      }
    }
    customElements.define("game-keyboard", us),
      function () {
        (console.warn || console.log).apply(console, arguments);
      }.bind("[clipboard-polyfill]");
    var ms,
      hs,
      ys,
      gs,
      bs = "undefined" == typeof navigator ? void 0 : navigator,
      fs = null == bs ? void 0 : bs.clipboard;
    null === (ms = null == fs ? void 0 : fs.read) ||
      void 0 === ms ||
      ms.bind(fs),
      null === (hs = null == fs ? void 0 : fs.readText) ||
        void 0 === hs ||
        hs.bind(fs);
    var ks =
        (null === (ys = null == fs ? void 0 : fs.write) ||
          void 0 === ys ||
          ys.bind(fs),
        null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs
          ? void 0
          : gs.bind(fs)),
      vs = "undefined" == typeof window ? void 0 : window,
      ws = (null == vs || vs.ClipboardItem, vs);
    var xs = function () {
      this.success = !1;
    };
    function zs(e, a, s) {
      for (var t in ((e.success = !0), a)) {
        var o = a[t],
          n = s.clipboardData;
        n.setData(t, o),
          "text/plain" === t && n.getData(t) !== o && (e.success = !1);
      }
      s.preventDefault();
    }
    function js(e) {
      var a = new xs(),
        s = zs.bind(this, a, e);
      document.addEventListener("copy", s);
      try {
        document.execCommand("copy");
      } finally {
        document.removeEventListener("copy", s);
      }
      return a.success;
    }
    function Ss(e, a) {
      _s(e);
      var s = js(a);
      return qs(), s;
    }
    function _s(e) {
      var a = document.getSelection();
      if (a) {
        var s = document.createRange();
        s.selectNodeContents(e), a.removeAllRanges(), a.addRange(s);
      }
    }
    function qs() {
      var e = document.getSelection();
      e && e.removeAllRanges();
    }
    function Es(e) {
      return cs(this, void 0, void 0, function () {
        var a;
        return ps(this, function (s) {
          if (
            ((a = "text/plain" in e),
            "undefined" == typeof ClipboardEvent &&
              void 0 !== ws.clipboardData &&
              void 0 !== ws.clipboardData.setData)
          ) {
            if (!a) throw new Error("No `text/plain` value was specified.");
            if (((t = e["text/plain"]), ws.clipboardData.setData("Text", t)))
              return [2, !0];
            throw new Error(
              "Copying failed, possibly because the user rejected it."
            );
          }
          var t;
          return js(e) ||
            navigator.userAgent.indexOf("Edge") > -1 ||
            Ss(document.body, e) ||
            (function (e) {
              var a = document.createElement("div");
              a.setAttribute("style", "-webkit-user-select: text !important"),
                (a.textContent = "temporary element"),
                document.body.appendChild(a);
              var s = Ss(a, e);
              return document.body.removeChild(a), s;
            })(e) ||
            (function (e) {
              var a = document.createElement("div");
              a.setAttribute("style", "-webkit-user-select: text !important");
              var s = a;
              a.attachShadow && (s = a.attachShadow({ mode: "open" }));
              var t = document.createElement("span");
              (t.innerText = e),
                s.appendChild(t),
                document.body.appendChild(a),
                _s(t);
              var o = document.execCommand("copy");
              return qs(), document.body.removeChild(a), o;
            })(e["text/plain"])
            ? [2, !0]
            : [2, !1];
        });
      });
    }
    function As(e, a, s) {
      try {
        (t = navigator.userAgent || navigator.vendor || window.opera),
          (!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            t
          ) &&
            !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              t.substr(0, 4)
            )) ||
          navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ||
          void 0 === navigator.share ||
          !navigator.canShare ||
          !navigator.canShare(e)
            ? (function (e) {
                return cs(this, void 0, void 0, function () {
                  return ps(this, function (a) {
                    if (ks) return [2, ks(e)];
                    if (
                      !Es(
                        (function (e) {
                          var a = {};
                          return (a["text/plain"] = e), a;
                        })(e)
                      )
                    )
                      throw new Error("writeText() failed");
                    return [2];
                  });
                });
              })(e.text).then(a, s)
            : navigator.share(e);
      } catch (e) {
        s();
      }
      var t;
    }
    var Cs = document.createElement("template");
    Cs.innerHTML =
      '<style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 24px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n   #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .header {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <div class="header"></div>\n    <h1>Statistics</h1>\n    <div id="statistics"></div>\n    <h1>Guess Distribution</h1>\n    <div id="guess-distribution"></div>\n  </div>\n ';
    var Ls = document.createElement("template");
    Ls.innerHTML =
      '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
    var Ts = document.createElement("template");
    Ts.innerHTML =
      '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
    var FFs = document.createElement("template");
    FFs.innerHTML =
      '\n  <div class="funFact"> <h1>FUN FACT</h1> </div>\n';
    var Is = document.createElement("template");
    Is.innerHTML =
      '\n  <div class="countdown">\n    <h1>Next Retail Nerdle</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Share <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
    var Ms = {
        currentStreak: "Current Streak",
        maxStreak: "Max Streak",
        winPercentage: "Win %",
        gamesPlayed: "Played",
        gamesWon: "Won",
        averageGuesses: "Average Guesses",
      },
      Os = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          return (
            s(this, t),
            n(p((e = a.call(this))), "stats", {}),
            n(p(e), "gameApp", void 0),
            e.attachShadow({ mode: "open" }),
            (e.stats = Xa()),
            e
          );
        }
        return (
          o(t, [
            {
              key: "connectedCallback",
              value: function () {
                var e = this;

                if ((e.gameApp.gameStatus == "WIN" || e.gameApp.gameStatus == "FAIL")) {
                  var index = dayOffsetToIndex(e.gameApp.dayOffset);
                  var funFact = Dess(FuFa[index]);
                  if (funFact != "") {
                    this.shadowRoot.appendChild(FFs.content.cloneNode(!0));

                    var ff = document.createElement("div");
                    ff.innerText = funFact;
                    this.shadowRoot.appendChild(ff);
                  }
                }

                var twitter = document.createElement("div");
                twitter.innerHTML = '<style>\n td\n {\n padding-top:10px;\n  }\n </style>\n <table align="center" width="90%" border=0 padding=0><tr><td align="center" width="50%"><table><tr><td><a href="https://www.twitter.com/Cognira" target="_blank"><img src="images/twitter2.png" width="24" height="24" alt="@Cognira" title="@Cognira"></a></td><td>&nbsp;<a href="https://www.twitter.com/Cognira" target="_blank">@Cognira</a></td></tr></table></td><td align="center" width="50%"><table><tr><td><a href="http://linkedin.com/company/cognira" target="_blank"><img src="images/Linkedin-icon32.png" width="24" height="24" alt="Cognira" title="Cognira"></a></td><td>&nbsp;<a href="http://linkedin.com/company/cognira" target="_blank">Cognira</a></td></tr></table></td></tr></table>';
                this.shadowRoot.appendChild(twitter);

                this.shadowRoot.appendChild(Cs.content.cloneNode(!0));

                var a = this.shadowRoot.getElementById("statistics"),
                  s = this.shadowRoot.getElementById("guess-distribution"),
                  t = Math.max.apply(
                    Math,
                    g(Object.values(this.stats.guesses))
                  );
                if (
                  Object.values(this.stats.guesses).every(function (e) {
                    return 0 === e;
                  })
                ) {
                  var o = document.createElement("div");
                  o.classList.add("no-data"),
                    (o.innerText = "No Data"),
                    s.appendChild(o);
                } else {
                  for (
                    var n = 1;
                    n < Object.keys(this.stats.guesses).length;
                    n++
                  ) {
                    var r = n === 1 ? "1️⃣": n === 2 ? "2️⃣" : n === 3 ? "3️⃣" : n === 4 ? "4️⃣" : n === 5 ? "5️⃣" : n === 6 ? "6️⃣" : "",
                      i = this.stats.guesses[n],
                      l = Ts.content.cloneNode(!0),
                      d = Math.max(7, Math.round((i / t) * 100));
                    l.querySelector(".guess").textContent = r;
                    var u = l.querySelector(".graph-bar");
                    if (
                      ((u.style.width = "".concat(d, "%")),
                      "number" == typeof i)
                    ) {
                      (l.querySelector(".num-guesses").textContent = i),
                    l.querySelector(".guess").style.width = "25px",
                        i > 0 && u.classList.add("align-right");
                      var c = parseInt(
                        this.getAttribute("highlight-guess"),
                        10
                      );
                      c && n === c && u.classList.add("highlight");
                    }
                    s.appendChild(l);
                  }

                  var i = this.stats.guesses.fail,
                      l = Ts.content.cloneNode(!0),
                      d = Math.max(7, Math.round((i / t) * 100));
                    l.querySelector(".guess").textContent = "❌";
                    var u = l.querySelector(".graph-bar");
                    if (
                      ((u.style.width = "".concat(d, "%")),
                      "number" == typeof i)
                    ) {
                      (l.querySelector(".num-guesses").textContent = i),
                    l.querySelector(".guess").style.width = "25px",
                        i > 0 && u.classList.add("align-right");
                      var c = parseInt(
                        this.getAttribute("highlight-guess"),
                        10
                      );
                      c && 7 === c && u.classList.add("highlight");
                    }
                    s.appendChild(l);

                    if (this.gameApp.gameStatus !== Za)
                    {
                      var p = this.shadowRoot.querySelector(".header"),
                        m = Is.content.cloneNode(!0);
                      p.appendChild(m),
                        this.shadowRoot
                          .querySelector("button#share-button")
                          .addEventListener("click", function (a) {
                            a.preventDefault(), a.stopPropagation();
                            As(
                              (function (e) {
                                var a = e.evaluations,
                                  s = e.dayOffset,
                                  t = e.rowIndex,
                                  o = e.isHardMode,
                                  n = e.isWin,
                                  r = JSON.parse(window.localStorage.getItem(j)),
                                  i = JSON.parse(window.localStorage.getItem(S)),
                                  l = "Retail Nerdle ".concat(s);
                                (l += " ".concat(n ? t : "X", "/").concat(6)),
                                  o && (l += "*");
                                var d = "";
                                return (
                                  a.forEach(function (e) {
                                    e &&
                                      (e.forEach(function (e) {
                                        if (e) {
                                          var a = "";
                                          switch (e) {
                                            case Ma:
                                              a = (function (e) {
                                                return e ? "🟧" : "🟦";
                                              })(i);
                                              break;
                                            case Ia:
                                              a = (function (e) {
                                                return e ? "🟦" : "🟨";
                                              })(i);
                                              break;
                                            case Oa:
                                              a = (function (e) {
                                                return e ? "⬛" : "⬜";
                                              })(r);
                                          }
                                          d += a;
                                        }
                                      }),
                                      (d += "\n"));
                                  }),
                                  { text: "".concat(l, "\n\n").concat(d.trimEnd()) }
                                );
                              })({
                                evaluations: e.gameApp.evaluations,
                                dayOffset: e.gameApp.dayOffset,
                                rowIndex: e.gameApp.rowIndex,
                                isHardMode: e.gameApp.hardMode,
                                isWin: e.gameApp.gameStatus === es,
                              }),
                              function () {
                                e.gameApp.addToast(
                                  "Copied results to clipboard",
                                  2e3,
                                  !0
                                );
                              },
                              function () {
                                e.gameApp.addToast("Share failed", 2e3, !0);
                              }
                            );
                          });
                    }

                }

                [
                    "gamesPlayed",
                    "winPercentage",
                    "currentStreak",
                    "maxStreak",
                    "averageGuesses"
                  ].forEach(function (s) {
                    var t = Ms[s],
                      o = e.stats[s],
                      n = Ls.content.cloneNode(!0);
                    (n.querySelector(".label").textContent = t),
                      (n.querySelector(".statistic").textContent = o),
                      a.appendChild(n);
                  });

              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    customElements.define("game-stats", Os);
    var Rs = document.createElement("template");
    Rs.innerHTML =
      '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
    var Ps = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e;
      }
      return (
        o(
          t,
          [
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(Rs.content.cloneNode(!0)),
                  this.shadowRoot
                    .querySelector(".container")
                    .addEventListener("click", function (a) {
                      a.stopPropagation(),
                        e.hasAttribute("checked")
                          ? e.removeAttribute("checked")
                          : e.setAttribute("checked", ""),
                        e.dispatchEvent(
                          new CustomEvent("game-switch-change", {
                            bubbles: !0,
                            composed: !0,
                            detail: {
                              name: e.getAttribute("name"),
                              checked: e.hasAttribute("checked"),
                              disabled: e.hasAttribute("disabled"),
                            },
                          })
                        );
                    });
              },
            },
          ],
          [
            {
              key: "observedAttributes",
              get: function () {
                return ["checked"];
              },
            },
          ]
        ),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-switch", Ps);
    var $s = document.createElement("template");
    $s.innerHTML =
      '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .s {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  . {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Guess the <strong>Retail Nerdle</strong> in 6 tries.</p>\n   <p>Each guess must be a valid 5 letter word. Hit the enter button to submit.</p>\n      <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>\n <p>The answer will be a word related to retail in some way, and a fun fact will be displayed after you play!</p>\n     <div class="s">\n        <p><strong>Examples</strong></p>\n        <div class="">\n          <div class="row">\n            <game-tile letter="m" evaluation="correct" reveal></game-tile>\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="n"></game-tile>\n            <game-tile letter="e"></game-tile>\n            <game-tile letter="y"></game-tile>\n          </div>\n          <p>The letter <strong>M</strong> is in the word and in the right spot.</p>\n        </div>\n        <div class="">\n          <div class="row">\n            <game-tile letter="p"></game-tile>\n            <game-tile letter="r" evaluation="present" reveal></game-tile>\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="m"></game-tile>\n            <game-tile letter="o"></game-tile>\n          </div>\n          <p>The letter <strong>R</strong> is in the word but in the wrong spot.</p>\n        </div>\n        <div class="">\n          <div class="row">\n            <game-tile letter="d"></game-tile>\n            <game-tile letter="r"></game-tile>\n            <game-tile letter="i"></game-tile>\n            <game-tile letter="v" evaluation="absent" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n          </div>\n          <p>The letter <strong>V</strong> is not in the word in any spot.</p>\n        </div>\n      </div>\n      <p><strong>A new Retail Nerdle will be available each day!<strong></p>\n <p>Powered by code from <a href="http://www.canucklegame.ca/" target="_blank">CANUCKLE</a> and the original <a href="https://www.powerlanguage.co.uk/wordle/" target="_blank">WORDLE</a></p>    </div>\n  </section>\n';
    var Hs = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e;
      }
      return (
        o(t, [
          {
            key: "connectedCallback",
            value: function () {
              this.shadowRoot.appendChild($s.content.cloneNode(!0));
            },
          },
        ]),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-help", Hs);
    var Ns = document.createElement("template");
    Ns.innerHTML =
      "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(
        2e3,
        ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n'
      );
    var Ds = (function (e) {
      r(t, e);
      var a = h(t);
      function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e;
      }
      return (
        o(t, [
          {
            key: "connectedCallback",
            value: function () {
              var e = this;
              this.shadowRoot.appendChild(Ns.content.cloneNode(!0)),
                this.shadowRoot
                  .querySelector("game-icon")
                  .addEventListener("click", function (a) {
                    e.shadowRoot
                      .querySelector(".overlay")
                      .classList.add("closing");
                  }),
                this.shadowRoot.addEventListener("animationend", function (a) {
                  "SlideOut" === a.animationName &&
                    (e.shadowRoot
                      .querySelector(".overlay")
                      .classList.remove("closing"),
                    Array.from(e.childNodes).forEach(function (a) {
                      e.removeChild(a);
                    }),
                    e.removeAttribute("open"));
                });
            },
          },
        ]),
        t
      );
    })(c(HTMLElement));
    customElements.define("game-page", Ds);
    var Gs = document.createElement("template");
    Gs.innerHTML =
      '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
    var Bs = {
        help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
        settings:
          "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
        backspace:
          "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
        close:
          "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        share:
          "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
        statistics:
          "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z",
      },
      Fs = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          return (
            s(this, t), (e = a.call(this)).attachShadow({ mode: "open" }), e
          );
        }
        return (
          o(t, [
            {
              key: "connectedCallback",
              value: function () {
                this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
                var e = this.getAttribute("icon");
                this.shadowRoot.querySelector("path").setAttribute("d", Bs[e]),
                  "backspace" === e &&
                    this.shadowRoot
                      .querySelector("path")
                      .setAttribute("fill", "var(--color-tone-1)"),
                  "share" === e &&
                    this.shadowRoot
                      .querySelector("path")
                      .setAttribute("fill", "var(--white)");
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    customElements.define("game-icon", Fs);
    var Ws = document.createElement("template");
    Ws.innerHTML = '\n  <div id="timer"></div>\n';
    var Ys = 6e4,
      Js = 36e5,
      Us = (function (e) {
        r(t, e);
        var a = h(t);
        function t() {
          var e;
          s(this, t),
            n(p((e = a.call(this))), "targetEpochMS", void 0),
            n(p(e), "intervalId", void 0),
            n(p(e), "$timer", void 0),
            e.attachShadow({ mode: "open" });
          var o = new Date();
          return (
            o.setDate(o.getDate() + 1),
            o.setHours(0, 0, 0, 0),
            (e.targetEpochMS = o.getTime()),
            e
          );
        }
        return (
          o(t, [
            {
              key: "padDigit",
              value: function (e) {
                return e.toString().padStart(2, "0");
              },
            },
            {
              key: "updateTimer",
              value: function () {
                var e,
                  a = new Date().getTime(),
                  s = Math.floor(this.targetEpochMS - a);
                if (s <= 0) e = "00:00:00";
                else {
                  var t = Math.floor((s % Htime) / Js),
                    o = Math.floor((s % Js) / Ys),
                    n = Math.floor((s % Ys) / 1e3);
                  e = ""
                    .concat(this.padDigit(t), ":")
                    .concat(this.padDigit(o), ":")
                    .concat(this.padDigit(n));
                }
                this.$timer.textContent = e;
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(Ws.content.cloneNode(!0)),
                  (this.$timer = this.shadowRoot.querySelector("#timer")),
                  (this.intervalId = setInterval(function () {
                    e.updateTimer();
                  }, 200));
              },
            },
            {
              key: "disconnectedCallback",
              value: function () {
                clearInterval(this.intervalId);
              },
            },
          ]),
          t
        );
      })(c(HTMLElement));
    return (
      customElements.define("countdown-timer", Us),
      (e.CountdownTimer = Us),
      (e.GameApp = ts),
      (e.GameHelp = Hs),
      (e.GameIcon = Fs),
      (e.GameKeyboard = us),
      (e.GameModal = ns),
      (e.GamePage = Ds),
      (e.GameRow = x),
      (e.GameSettings = _a),
      (e.GameStats = Os),
      (e.GameSwitch = Ps),
      (e.GameThemeManager = _),
      (e.GameTile = v),
      (e.GameToast = Aa),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      e
    );
  })({}));
