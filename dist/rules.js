(() => {
  "use strict";
  var r = {
      319: (r, n, e) => {
        e.d(n, {Z: () => s});
        var t = e(81),
          o = e.n(t),
          i = e(645),
          a = e.n(i)()(o());
        a.push([r.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap);"]),
          a.push([
            r.id,
            '* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 4rem 1fr;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  padding: 0 4rem;\r\n  font-family: "Roboto", sans-serif;\r\n}\r\n\r\n#header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 1rem 0;\r\n  grid-column: 1/ 3;\r\n  grid-row: 1/2;\r\n}\r\n\r\n.github-link {\r\n  position: relative;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  color: #333;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav a {\r\n  position: relative;\r\n  display: inline-block;\r\n  padding: 0.5rem;\r\n  margin-right: 1rem;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav a {\r\n  text-decoration: none;\r\n  color: #333;\r\n}\r\n\r\n.nav a::before,\r\n.github-link::before {\r\n  content: "";\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #333;\r\n  transition: width 0.2s ease;\r\n}\r\n\r\n.github-link::before {\r\n  bottom: -5px;\r\n}\r\n\r\n.nav a:hover::before,\r\n.github-link:hover::before {\r\n  width: 100%;\r\n}\r\n\r\n.title {\r\n  position: absolute;\r\n  top: 15%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.rules,\r\n.controls {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  grid-row: 2/3;\r\n  position: absolute;\r\n  top: 18%;\r\n  user-select: none;\r\n  width: 30vw;\r\n  height: 40vh;\r\n  border-radius: 12px;\r\n  background-color: #0065d8;\r\n  opacity: 0.8;\r\n  color: white;\r\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\r\n}\r\n\r\n.rules {\r\n  grid-column: 1/2;\r\n  margin-right: 2rem;\r\n  justify-self: end;\r\n}\r\n\r\n.controls {\r\n  grid-column: 2 / 3;\r\n  margin-left: 2rem;\r\n  justify-self: start;\r\n}\r\n\r\n.heading {\r\n  position: absolute;\r\n  top: 5%;\r\n  align-self: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.description {\r\n  padding: 1rem 1rem 0.5rem 1.5rem;\r\n  font-size: 1rem;\r\n}\r\n\r\n.list-item {\r\n  padding: 0.5rem 1rem 0.5rem 0;\r\n  margin-left: 2.5rem;\r\n  font-size: 1rem;\r\n}\r\n\r\n.wave {\r\n  position: fixed;\r\n  bottom: -10%;\r\n  left: 0;\r\n  user-select: none;\r\n  opacity: 0.6;\r\n  z-index: -1;\r\n}\r\n\r\n.types {\r\n  padding: 2px;\r\n  border-radius: 12px;\r\n  background-color: white;\r\n  color: #333;\r\n  transition: 0.1s;\r\n}\r\n\r\n.types:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.wave img {\r\n  width: 100vw;\r\n}\r\n\r\n@media (orientation: portrait) {\r\n  .container {\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 4rem 350px 350px 1fr 1fr;\r\n    min-height: 120vh;\r\n    padding: 0;\r\n  }\r\n\r\n  #header {\r\n    align-items: center;\r\n    padding: 1rem 0.5rem;\r\n    grid-column: 1/2;\r\n  }\r\n\r\n  .nav {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .nav a {\r\n    margin-right: 0;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .nav a:hover::before,\r\n  .github-link:hover::before {\r\n    width: 0%;\r\n  }\r\n\r\n  .title {\r\n    display: none;\r\n  }\r\n\r\n  .rules,\r\n  .controls {\r\n    top: 120%;\r\n    width: 85vw;\r\n    height: 45vh;\r\n  }\r\n\r\n  .rules {\r\n    grid-column: 1/2;\r\n    grid-row: 1/2;\r\n    margin: 0;\r\n    justify-self: center;\r\n  }\r\n\r\n  .controls {\r\n    grid-column: 1 / 2;\r\n    grid-row: 2/3;\r\n    margin: 0;\r\n    justify-self: center;\r\n  }\r\n\r\n  .heading {\r\n    top: 5%;\r\n    align-self: center;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .description {\r\n    padding: 1rem 1rem 0.5rem 1.5rem;\r\n    font-size: 0.8rem;\r\n  }\r\n\r\n  .list-item {\r\n    padding: 0.5rem 1rem 0.5rem 0;\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n',
            "",
          ]);
        const s = a;
      },
      645: (r) => {
        r.exports = function (r) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var e = "",
                  t = void 0 !== n[5];
                return n[4] && (e += "@supports (".concat(n[4], ") {")), n[2] && (e += "@media ".concat(n[2], " {")), t && (e += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")), (e += r(n)), t && (e += "}"), n[2] && (e += "}"), n[4] && (e += "}"), e;
              }).join("");
            }),
            (n.i = function (r, e, t, o, i) {
              "string" == typeof r && (r = [[null, r, void 0]]);
              var a = {};
              if (t)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (a[c] = !0);
                }
              for (var l = 0; l < r.length; l++) {
                var d = [].concat(r[l]);
                (t && a[d[0]]) || (void 0 !== i && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), (d[5] = i)), e && (d[2] ? ((d[1] = "@media ".concat(d[2], " {").concat(d[1], "}")), (d[2] = e)) : (d[2] = e)), o && (d[4] ? ((d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}")), (d[4] = o)) : (d[4] = "".concat(o))), n.push(d));
              }
            }),
            n
          );
        };
      },
      81: (r) => {
        r.exports = function (r) {
          return r[1];
        };
      },
      379: (r) => {
        var n = [];
        function e(r) {
          for (var e = -1, t = 0; t < n.length; t++)
            if (n[t].identifier === r) {
              e = t;
              break;
            }
          return e;
        }
        function t(r, t) {
          for (var i = {}, a = [], s = 0; s < r.length; s++) {
            var c = r[s],
              l = t.base ? c[0] + t.base : c[0],
              d = i[l] || 0,
              p = "".concat(l, " ").concat(d);
            i[l] = d + 1;
            var u = e(p),
              f = {css: c[1], media: c[2], sourceMap: c[3], supports: c[4], layer: c[5]};
            if (-1 !== u) n[u].references++, n[u].updater(f);
            else {
              var m = o(f, t);
              (t.byIndex = s), n.splice(s, 0, {identifier: p, updater: m, references: 1});
            }
            a.push(p);
          }
          return a;
        }
        function o(r, n) {
          var e = n.domAPI(n);
          e.update(r);
          return function (n) {
            if (n) {
              if (n.css === r.css && n.media === r.media && n.sourceMap === r.sourceMap && n.supports === r.supports && n.layer === r.layer) return;
              e.update((r = n));
            } else e.remove();
          };
        }
        r.exports = function (r, o) {
          var i = t((r = r || []), (o = o || {}));
          return function (r) {
            r = r || [];
            for (var a = 0; a < i.length; a++) {
              var s = e(i[a]);
              n[s].references--;
            }
            for (var c = t(r, o), l = 0; l < i.length; l++) {
              var d = e(i[l]);
              0 === n[d].references && (n[d].updater(), n.splice(d, 1));
            }
            i = c;
          };
        };
      },
      569: (r) => {
        var n = {};
        r.exports = function (r, e) {
          var t = (function (r) {
            if (void 0 === n[r]) {
              var e = document.querySelector(r);
              if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement)
                try {
                  e = e.contentDocument.head;
                } catch (r) {
                  e = null;
                }
              n[r] = e;
            }
            return n[r];
          })(r);
          if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          t.appendChild(e);
        };
      },
      216: (r) => {
        r.exports = function (r) {
          var n = document.createElement("style");
          return r.setAttributes(n, r.attributes), r.insert(n, r.options), n;
        };
      },
      565: (r, n, e) => {
        r.exports = function (r) {
          var n = e.nc;
          n && r.setAttribute("nonce", n);
        };
      },
      795: (r) => {
        r.exports = function (r) {
          if ("undefined" == typeof document) return {update: function () {}, remove: function () {}};
          var n = r.insertStyleElement(r);
          return {
            update: function (e) {
              !(function (r, n, e) {
                var t = "";
                e.supports && (t += "@supports (".concat(e.supports, ") {")), e.media && (t += "@media ".concat(e.media, " {"));
                var o = void 0 !== e.layer;
                o && (t += "@layer".concat(e.layer.length > 0 ? " ".concat(e.layer) : "", " {")), (t += e.css), o && (t += "}"), e.media && (t += "}"), e.supports && (t += "}");
                var i = e.sourceMap;
                i && "undefined" != typeof btoa && (t += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), n.styleTagTransform(t, r, n.options);
              })(n, r, e);
            },
            remove: function () {
              !(function (r) {
                if (null === r.parentNode) return !1;
                r.parentNode.removeChild(r);
              })(n);
            },
          };
        };
      },
      589: (r) => {
        r.exports = function (r, n) {
          if (n.styleSheet) n.styleSheet.cssText = r;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(r));
          }
        };
      },
    },
    n = {};
  function e(t) {
    var o = n[t];
    if (void 0 !== o) return o.exports;
    var i = (n[t] = {id: t, exports: {}});
    return r[t](i, i.exports, e), i.exports;
  }
  (e.n = (r) => {
    var n = r && r.__esModule ? () => r.default : () => r;
    return e.d(n, {a: n}), n;
  }),
    (e.d = (r, n) => {
      for (var t in n) e.o(n, t) && !e.o(r, t) && Object.defineProperty(r, t, {enumerable: !0, get: n[t]});
    }),
    (e.o = (r, n) => Object.prototype.hasOwnProperty.call(r, n)),
    (e.nc = void 0),
    (() => {
      var r = e(379),
        n = e.n(r),
        t = e(795),
        o = e.n(t),
        i = e(569),
        a = e.n(i),
        s = e(565),
        c = e.n(s),
        l = e(216),
        d = e.n(l),
        p = e(589),
        u = e.n(p),
        f = e(319),
        m = {};
      (m.styleTagTransform = u()), (m.setAttributes = c()), (m.insert = a().bind(null, "head")), (m.domAPI = o()), (m.insertStyleElement = d());
      n()(f.Z, m);
      f.Z && f.Z.locals && f.Z.locals;
    })();
})();