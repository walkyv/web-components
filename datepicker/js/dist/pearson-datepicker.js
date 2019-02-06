var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, a) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : e.moment = a();
}(this, function () {
  "use strict";
  var e, n;function l() {
    return e.apply(null, arguments);
  }function _(e) {
    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
  }function i(e) {
    return null != e && "[object Object]" === Object.prototype.toString.call(e);
  }function o(e) {
    return void 0 === e;
  }function m(e) {
    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e);
  }function u(e) {
    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
  }function M(e, a) {
    var t,
        s = [];for (t = 0; t < e.length; ++t) {
      s.push(a(e[t], t));
    }return s;
  }function h(e, a) {
    return Object.prototype.hasOwnProperty.call(e, a);
  }function L(e, a) {
    for (var t in a) {
      h(a, t) && (e[t] = a[t]);
    }return h(a, "toString") && (e.toString = a.toString), h(a, "valueOf") && (e.valueOf = a.valueOf), e;
  }function c(e, a, t, s) {
    return va(e, a, t, s, !0).utc();
  }function Y(e) {
    return null == e._pf && (e._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), e._pf;
  }function y(e) {
    if (null == e._isValid) {
      var a = Y(e),
          t = n.call(a.parsedDateParts, function (e) {
        return null != e;
      }),
          s = !isNaN(e._d.getTime()) && a.overflow < 0 && !a.empty && !a.invalidMonth && !a.invalidWeekday && !a.weekdayMismatch && !a.nullInput && !a.invalidFormat && !a.userInvalidated && (!a.meridiem || a.meridiem && t);if (e._strict && (s = s && 0 === a.charsLeftOver && 0 === a.unusedTokens.length && void 0 === a.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s;e._isValid = s;
    }return e._isValid;
  }function f(e) {
    var a = c(NaN);return null != e ? L(Y(a), e) : Y(a).userInvalidated = !0, a;
  }n = Array.prototype.some ? Array.prototype.some : function (e) {
    for (var a = Object(this), t = a.length >>> 0, s = 0; s < t; s++) {
      if (s in a && e.call(this, a[s], s, a)) return !0;
    }return !1;
  };var d = l.momentProperties = [];function k(e, a) {
    var t, s, n;if (o(a._isAMomentObject) || (e._isAMomentObject = a._isAMomentObject), o(a._i) || (e._i = a._i), o(a._f) || (e._f = a._f), o(a._l) || (e._l = a._l), o(a._strict) || (e._strict = a._strict), o(a._tzm) || (e._tzm = a._tzm), o(a._isUTC) || (e._isUTC = a._isUTC), o(a._offset) || (e._offset = a._offset), o(a._pf) || (e._pf = Y(a)), o(a._locale) || (e._locale = a._locale), 0 < d.length) for (t = 0; t < d.length; t++) {
      o(n = a[s = d[t]]) || (e[s] = n);
    }return e;
  }var a = !1;function p(e) {
    k(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === a && (a = !0, l.updateOffset(this), a = !1);
  }function D(e) {
    return e instanceof p || null != e && null != e._isAMomentObject;
  }function T(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }function g(e) {
    var a = +e,
        t = 0;return 0 !== a && isFinite(a) && (t = T(a)), t;
  }function r(e, a, t) {
    var s,
        n = Math.min(e.length, a.length),
        d = Math.abs(e.length - a.length),
        r = 0;for (s = 0; s < n; s++) {
      (t && e[s] !== a[s] || !t && g(e[s]) !== g(a[s])) && r++;
    }return r + d;
  }function w(e) {
    !1 === l.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e);
  }function t(n, d) {
    var r = !0;return L(function () {
      if (null != l.deprecationHandler && l.deprecationHandler(null, n), r) {
        for (var e, a = [], t = 0; t < arguments.length; t++) {
          if (e = "", "object" == _typeof(arguments[t])) {
            for (var s in e += "\n[" + t + "] ", arguments[0]) {
              e += s + ": " + arguments[0][s] + ", ";
            }e = e.slice(0, -2);
          } else e = arguments[t];a.push(e);
        }w(n + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + new Error().stack), r = !1;
      }return d.apply(this, arguments);
    }, d);
  }var s,
      v = {};function H(e, a) {
    null != l.deprecationHandler && l.deprecationHandler(e, a), v[e] || (w(a), v[e] = !0);
  }function S(e) {
    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
  }function b(e, a) {
    var t,
        s = L({}, e);for (t in a) {
      h(a, t) && (i(e[t]) && i(a[t]) ? (s[t] = {}, L(s[t], e[t]), L(s[t], a[t])) : null != a[t] ? s[t] = a[t] : delete s[t]);
    }for (t in e) {
      h(e, t) && !h(a, t) && i(e[t]) && (s[t] = L({}, s[t]));
    }return s;
  }function j(e) {
    null != e && this.set(e);
  }l.suppressDeprecationWarnings = !1, l.deprecationHandler = null, s = Object.keys ? Object.keys : function (e) {
    var a,
        t = [];for (a in e) {
      h(e, a) && t.push(a);
    }return t;
  };var x = {};function P(e, a) {
    var t = e.toLowerCase();x[t] = x[t + "s"] = x[a] = e;
  }function O(e) {
    return "string" == typeof e ? x[e] || x[e.toLowerCase()] : void 0;
  }function W(e) {
    var a,
        t,
        s = {};for (t in e) {
      h(e, t) && (a = O(t)) && (s[a] = e[t]);
    }return s;
  }var E = {};function A(e, a) {
    E[e] = a;
  }function F(e, a, t) {
    var s = "" + Math.abs(e),
        n = a - s.length;return (0 <= e ? t ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + s;
  }var z = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      J = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      N = {},
      R = {};function I(e, a, t, s) {
    var n = s;"string" == typeof s && (n = function n() {
      return this[s]();
    }), e && (R[e] = n), a && (R[a[0]] = function () {
      return F(n.apply(this, arguments), a[1], a[2]);
    }), t && (R[t] = function () {
      return this.localeData().ordinal(n.apply(this, arguments), e);
    });
  }function C(e, a) {
    return e.isValid() ? (a = G(a, e.localeData()), N[a] = N[a] || function (s) {
      var e,
          n,
          a,
          d = s.match(z);for (e = 0, n = d.length; e < n; e++) {
        R[d[e]] ? d[e] = R[d[e]] : d[e] = (a = d[e]).match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
      }return function (e) {
        var a,
            t = "";for (a = 0; a < n; a++) {
          t += S(d[a]) ? d[a].call(e, s) : d[a];
        }return t;
      };
    }(a), N[a](e)) : e.localeData().invalidDate();
  }function G(e, a) {
    var t = 5;function s(e) {
      return a.longDateFormat(e) || e;
    }for (J.lastIndex = 0; 0 <= t && J.test(e);) {
      e = e.replace(J, s), J.lastIndex = 0, t -= 1;
    }return e;
  }var U = /\d/,
      V = /\d\d/,
      K = /\d{3}/,
      $ = /\d{4}/,
      Z = /[+-]?\d{6}/,
      B = /\d\d?/,
      q = /\d\d\d\d?/,
      Q = /\d\d\d\d\d\d?/,
      X = /\d{1,3}/,
      ee = /\d{1,4}/,
      ae = /[+-]?\d{1,6}/,
      te = /\d+/,
      se = /[+-]?\d+/,
      ne = /Z|[+-]\d\d:?\d\d/gi,
      de = /Z|[+-]\d\d(?::?\d\d)?/gi,
      re = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
      _e = {};function ie(e, t, s) {
    _e[e] = S(t) ? t : function (e, a) {
      return e && s ? s : t;
    };
  }function oe(e, a) {
    return h(_e, e) ? _e[e](a._strict, a._locale) : new RegExp(me(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, a, t, s, n) {
      return a || t || s || n;
    })));
  }function me(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }var ue = {};function le(e, t) {
    var a,
        s = t;for ("string" == typeof e && (e = [e]), m(t) && (s = function s(e, a) {
      a[t] = g(e);
    }), a = 0; a < e.length; a++) {
      ue[e[a]] = s;
    }
  }function Me(e, n) {
    le(e, function (e, a, t, s) {
      t._w = t._w || {}, n(e, t._w, t, s);
    });
  }var he = 0,
      Le = 1,
      ce = 2,
      Ye = 3,
      ye = 4,
      fe = 5,
      ke = 6,
      pe = 7,
      De = 8;function Te(e) {
    return ge(e) ? 366 : 365;
  }function ge(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  }I("Y", 0, 0, function () {
    var e = this.year();return e <= 9999 ? "" + e : "+" + e;
  }), I(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  }), I(0, ["YYYY", 4], 0, "year"), I(0, ["YYYYY", 5], 0, "year"), I(0, ["YYYYYY", 6, !0], 0, "year"), P("year", "y"), A("year", 1), ie("Y", se), ie("YY", B, V), ie("YYYY", ee, $), ie("YYYYY", ae, Z), ie("YYYYYY", ae, Z), le(["YYYYY", "YYYYYY"], he), le("YYYY", function (e, a) {
    a[he] = 2 === e.length ? l.parseTwoDigitYear(e) : g(e);
  }), le("YY", function (e, a) {
    a[he] = l.parseTwoDigitYear(e);
  }), le("Y", function (e, a) {
    a[he] = parseInt(e, 10);
  }), l.parseTwoDigitYear = function (e) {
    return g(e) + (68 < g(e) ? 1900 : 2e3);
  };var we,
      ve = He("FullYear", !0);function He(a, t) {
    return function (e) {
      return null != e ? (be(this, a, e), l.updateOffset(this, t), this) : Se(this, a);
    };
  }function Se(e, a) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + a]() : NaN;
  }function be(e, a, t) {
    e.isValid() && !isNaN(t) && ("FullYear" === a && ge(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + a](t, e.month(), je(t, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + a](t));
  }function je(e, a) {
    if (isNaN(e) || isNaN(a)) return NaN;var t,
        s = (a % (t = 12) + t) % t;return e += (a - s) / 12, 1 === s ? ge(e) ? 29 : 28 : 31 - s % 7 % 2;
  }we = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
    var a;for (a = 0; a < this.length; ++a) {
      if (this[a] === e) return a;
    }return -1;
  }, I("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  }), I("MMM", 0, 0, function (e) {
    return this.localeData().monthsShort(this, e);
  }), I("MMMM", 0, 0, function (e) {
    return this.localeData().months(this, e);
  }), P("month", "M"), A("month", 8), ie("M", B), ie("MM", B, V), ie("MMM", function (e, a) {
    return a.monthsShortRegex(e);
  }), ie("MMMM", function (e, a) {
    return a.monthsRegex(e);
  }), le(["M", "MM"], function (e, a) {
    a[Le] = g(e) - 1;
  }), le(["MMM", "MMMM"], function (e, a, t, s) {
    var n = t._locale.monthsParse(e, s, t._strict);null != n ? a[Le] = n : Y(t).invalidMonth = e;
  });var xe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      Pe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");var Oe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function We(e, a) {
    var t;if (!e.isValid()) return e;if ("string" == typeof a) if (/^\d+$/.test(a)) a = g(a);else if (!m(a = e.localeData().monthsParse(a))) return e;return t = Math.min(e.date(), je(e.year(), a)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](a, t), e;
  }function Ee(e) {
    return null != e ? (We(this, e), l.updateOffset(this, !0), this) : Se(this, "Month");
  }var Ae = re;var Fe = re;function ze() {
    function e(e, a) {
      return a.length - e.length;
    }var a,
        t,
        s = [],
        n = [],
        d = [];for (a = 0; a < 12; a++) {
      t = c([2e3, a]), s.push(this.monthsShort(t, "")), n.push(this.months(t, "")), d.push(this.months(t, "")), d.push(this.monthsShort(t, ""));
    }for (s.sort(e), n.sort(e), d.sort(e), a = 0; a < 12; a++) {
      s[a] = me(s[a]), n[a] = me(n[a]);
    }for (a = 0; a < 24; a++) {
      d[a] = me(d[a]);
    }this._monthsRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i");
  }function Je(e) {
    var a = new Date(Date.UTC.apply(null, arguments));return e < 100 && 0 <= e && isFinite(a.getUTCFullYear()) && a.setUTCFullYear(e), a;
  }function Ne(e, a, t) {
    var s = 7 + a - t;return -((7 + Je(e, 0, s).getUTCDay() - a) % 7) + s - 1;
  }function Re(e, a, t, s, n) {
    var d,
        r,
        _ = 1 + 7 * (a - 1) + (7 + t - s) % 7 + Ne(e, s, n);return r = _ <= 0 ? Te(d = e - 1) + _ : _ > Te(e) ? (d = e + 1, _ - Te(e)) : (d = e, _), { year: d, dayOfYear: r };
  }function Ie(e, a, t) {
    var s,
        n,
        d = Ne(e.year(), a, t),
        r = Math.floor((e.dayOfYear() - d - 1) / 7) + 1;return r < 1 ? s = r + Ce(n = e.year() - 1, a, t) : r > Ce(e.year(), a, t) ? (s = r - Ce(e.year(), a, t), n = e.year() + 1) : (n = e.year(), s = r), { week: s, year: n };
  }function Ce(e, a, t) {
    var s = Ne(e, a, t),
        n = Ne(e + 1, a, t);return (Te(e) - s + n) / 7;
  }I("w", ["ww", 2], "wo", "week"), I("W", ["WW", 2], "Wo", "isoWeek"), P("week", "w"), P("isoWeek", "W"), A("week", 5), A("isoWeek", 5), ie("w", B), ie("ww", B, V), ie("W", B), ie("WW", B, V), Me(["w", "ww", "W", "WW"], function (e, a, t, s) {
    a[s.substr(0, 1)] = g(e);
  });I("d", 0, "do", "day"), I("dd", 0, 0, function (e) {
    return this.localeData().weekdaysMin(this, e);
  }), I("ddd", 0, 0, function (e) {
    return this.localeData().weekdaysShort(this, e);
  }), I("dddd", 0, 0, function (e) {
    return this.localeData().weekdays(this, e);
  }), I("e", 0, 0, "weekday"), I("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), P("isoWeekday", "E"), A("day", 11), A("weekday", 11), A("isoWeekday", 11), ie("d", B), ie("e", B), ie("E", B), ie("dd", function (e, a) {
    return a.weekdaysMinRegex(e);
  }), ie("ddd", function (e, a) {
    return a.weekdaysShortRegex(e);
  }), ie("dddd", function (e, a) {
    return a.weekdaysRegex(e);
  }), Me(["dd", "ddd", "dddd"], function (e, a, t, s) {
    var n = t._locale.weekdaysParse(e, s, t._strict);null != n ? a.d = n : Y(t).invalidWeekday = e;
  }), Me(["d", "e", "E"], function (e, a, t, s) {
    a[s] = g(e);
  });var Ge = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var Ue = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var Ve = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");var Ke = re;var $e = re;var Ze = re;function Be() {
    function e(e, a) {
      return a.length - e.length;
    }var a,
        t,
        s,
        n,
        d,
        r = [],
        _ = [],
        i = [],
        o = [];for (a = 0; a < 7; a++) {
      t = c([2e3, 1]).day(a), s = this.weekdaysMin(t, ""), n = this.weekdaysShort(t, ""), d = this.weekdays(t, ""), r.push(s), _.push(n), i.push(d), o.push(s), o.push(n), o.push(d);
    }for (r.sort(e), _.sort(e), i.sort(e), o.sort(e), a = 0; a < 7; a++) {
      _[a] = me(_[a]), i[a] = me(i[a]), o[a] = me(o[a]);
    }this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
  }function qe() {
    return this.hours() % 12 || 12;
  }function Qe(e, a) {
    I(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), a);
    });
  }function Xe(e, a) {
    return a._meridiemParse;
  }I("H", ["HH", 2], 0, "hour"), I("h", ["hh", 2], 0, qe), I("k", ["kk", 2], 0, function () {
    return this.hours() || 24;
  }), I("hmm", 0, 0, function () {
    return "" + qe.apply(this) + F(this.minutes(), 2);
  }), I("hmmss", 0, 0, function () {
    return "" + qe.apply(this) + F(this.minutes(), 2) + F(this.seconds(), 2);
  }), I("Hmm", 0, 0, function () {
    return "" + this.hours() + F(this.minutes(), 2);
  }), I("Hmmss", 0, 0, function () {
    return "" + this.hours() + F(this.minutes(), 2) + F(this.seconds(), 2);
  }), Qe("a", !0), Qe("A", !1), P("hour", "h"), A("hour", 13), ie("a", Xe), ie("A", Xe), ie("H", B), ie("h", B), ie("k", B), ie("HH", B, V), ie("hh", B, V), ie("kk", B, V), ie("hmm", q), ie("hmmss", Q), ie("Hmm", q), ie("Hmmss", Q), le(["H", "HH"], Ye), le(["k", "kk"], function (e, a, t) {
    var s = g(e);a[Ye] = 24 === s ? 0 : s;
  }), le(["a", "A"], function (e, a, t) {
    t._isPm = t._locale.isPM(e), t._meridiem = e;
  }), le(["h", "hh"], function (e, a, t) {
    a[Ye] = g(e), Y(t).bigHour = !0;
  }), le("hmm", function (e, a, t) {
    var s = e.length - 2;a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s)), Y(t).bigHour = !0;
  }), le("hmmss", function (e, a, t) {
    var s = e.length - 4,
        n = e.length - 2;a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s, 2)), a[fe] = g(e.substr(n)), Y(t).bigHour = !0;
  }), le("Hmm", function (e, a, t) {
    var s = e.length - 2;a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s));
  }), le("Hmmss", function (e, a, t) {
    var s = e.length - 4,
        n = e.length - 2;a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s, 2)), a[fe] = g(e.substr(n));
  });var ea,
      aa = He("Hours", !0),
      ta = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Pe, monthsShort: Oe, week: { dow: 0, doy: 6 }, weekdays: Ge, weekdaysMin: Ve, weekdaysShort: Ue, meridiemParse: /[ap]\.?m?\.?/i },
      sa = {},
      na = {};function da(e) {
    return e ? e.toLowerCase().replace("_", "-") : e;
  }function ra(e) {
    var a = null;if (!sa[e] && "undefined" != typeof module && module && module.exports) try {
      a = ea._abbr, require("./locale/" + e), _a(a);
    } catch (e) {}return sa[e];
  }function _a(e, a) {
    var t;return e && ((t = o(a) ? oa(e) : ia(e, a)) ? ea = t : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), ea._abbr;
  }function ia(e, a) {
    if (null === a) return delete sa[e], null;var t,
        s = ta;if (a.abbr = e, null != sa[e]) H("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = sa[e]._config;else if (null != a.parentLocale) if (null != sa[a.parentLocale]) s = sa[a.parentLocale]._config;else {
      if (null == (t = ra(a.parentLocale))) return na[a.parentLocale] || (na[a.parentLocale] = []), na[a.parentLocale].push({ name: e, config: a }), null;s = t._config;
    }return sa[e] = new j(b(s, a)), na[e] && na[e].forEach(function (e) {
      ia(e.name, e.config);
    }), _a(e), sa[e];
  }function oa(e) {
    var a;if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return ea;if (!_(e)) {
      if (a = ra(e)) return a;e = [e];
    }return function (e) {
      for (var a, t, s, n, d = 0; d < e.length;) {
        for (a = (n = da(e[d]).split("-")).length, t = (t = da(e[d + 1])) ? t.split("-") : null; 0 < a;) {
          if (s = ra(n.slice(0, a).join("-"))) return s;if (t && t.length >= a && r(n, t, !0) >= a - 1) break;a--;
        }d++;
      }return ea;
    }(e);
  }function ma(e) {
    var a,
        t = e._a;return t && -2 === Y(e).overflow && (a = t[Le] < 0 || 11 < t[Le] ? Le : t[ce] < 1 || t[ce] > je(t[he], t[Le]) ? ce : t[Ye] < 0 || 24 < t[Ye] || 24 === t[Ye] && (0 !== t[ye] || 0 !== t[fe] || 0 !== t[ke]) ? Ye : t[ye] < 0 || 59 < t[ye] ? ye : t[fe] < 0 || 59 < t[fe] ? fe : t[ke] < 0 || 999 < t[ke] ? ke : -1, Y(e)._overflowDayOfYear && (a < he || ce < a) && (a = ce), Y(e)._overflowWeeks && -1 === a && (a = pe), Y(e)._overflowWeekday && -1 === a && (a = De), Y(e).overflow = a), e;
  }function ua(e, a, t) {
    return null != e ? e : null != a ? a : t;
  }function la(e) {
    var a,
        t,
        s,
        n,
        d,
        r = [];if (!e._d) {
      var _, i;for (_ = e, i = new Date(l.now()), s = _._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()], e._w && null == e._a[ce] && null == e._a[Le] && function (e) {
        var a, t, s, n, d, r, _, i;if (null != (a = e._w).GG || null != a.W || null != a.E) d = 1, r = 4, t = ua(a.GG, e._a[he], Ie(Ha(), 1, 4).year), s = ua(a.W, 1), ((n = ua(a.E, 1)) < 1 || 7 < n) && (i = !0);else {
          d = e._locale._week.dow, r = e._locale._week.doy;var o = Ie(Ha(), d, r);t = ua(a.gg, e._a[he], o.year), s = ua(a.w, o.week), null != a.d ? ((n = a.d) < 0 || 6 < n) && (i = !0) : null != a.e ? (n = a.e + d, (a.e < 0 || 6 < a.e) && (i = !0)) : n = d;
        }s < 1 || s > Ce(t, d, r) ? Y(e)._overflowWeeks = !0 : null != i ? Y(e)._overflowWeekday = !0 : (_ = Re(t, s, n, d, r), e._a[he] = _.year, e._dayOfYear = _.dayOfYear);
      }(e), null != e._dayOfYear && (d = ua(e._a[he], s[he]), (e._dayOfYear > Te(d) || 0 === e._dayOfYear) && (Y(e)._overflowDayOfYear = !0), t = Je(d, 0, e._dayOfYear), e._a[Le] = t.getUTCMonth(), e._a[ce] = t.getUTCDate()), a = 0; a < 3 && null == e._a[a]; ++a) {
        e._a[a] = r[a] = s[a];
      }for (; a < 7; a++) {
        e._a[a] = r[a] = null == e._a[a] ? 2 === a ? 1 : 0 : e._a[a];
      }24 === e._a[Ye] && 0 === e._a[ye] && 0 === e._a[fe] && 0 === e._a[ke] && (e._nextDay = !0, e._a[Ye] = 0), e._d = (e._useUTC ? Je : function (e, a, t, s, n, d, r) {
        var _ = new Date(e, a, t, s, n, d, r);return e < 100 && 0 <= e && isFinite(_.getFullYear()) && _.setFullYear(e), _;
      }).apply(null, r), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ye] = 24), e._w && void 0 !== e._w.d && e._w.d !== n && (Y(e).weekdayMismatch = !0);
    }
  }var Ma = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      ha = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      La = /Z|[+-]\d\d(?::?\d\d)?/,
      ca = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
      Ya = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
      ya = /^\/?Date\((\-?\d+)/i;function fa(e) {
    var a,
        t,
        s,
        n,
        d,
        r,
        _ = e._i,
        i = Ma.exec(_) || ha.exec(_);if (i) {
      for (Y(e).iso = !0, a = 0, t = ca.length; a < t; a++) {
        if (ca[a][1].exec(i[1])) {
          n = ca[a][0], s = !1 !== ca[a][2];break;
        }
      }if (null == n) return void (e._isValid = !1);if (i[3]) {
        for (a = 0, t = Ya.length; a < t; a++) {
          if (Ya[a][1].exec(i[3])) {
            d = (i[2] || " ") + Ya[a][0];break;
          }
        }if (null == d) return void (e._isValid = !1);
      }if (!s && null != d) return void (e._isValid = !1);if (i[4]) {
        if (!La.exec(i[4])) return void (e._isValid = !1);r = "Z";
      }e._f = n + (d || "") + (r || ""), ga(e);
    } else e._isValid = !1;
  }var ka = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function pa(e, a, t, s, n, d) {
    var r = [function (e) {
      var a = parseInt(e, 10);{
        if (a <= 49) return 2e3 + a;if (a <= 999) return 1900 + a;
      }return a;
    }(e), Oe.indexOf(a), parseInt(t, 10), parseInt(s, 10), parseInt(n, 10)];return d && r.push(parseInt(d, 10)), r;
  }var Da = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };function Ta(e) {
    var a,
        t,
        s,
        n = ka.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));if (n) {
      var d = pa(n[4], n[3], n[2], n[5], n[6], n[7]);if (a = n[1], t = d, s = e, a && Ue.indexOf(a) !== new Date(t[0], t[1], t[2]).getDay() && (Y(s).weekdayMismatch = !0, !(s._isValid = !1))) return;e._a = d, e._tzm = function (e, a, t) {
        if (e) return Da[e];if (a) return 0;var s = parseInt(t, 10),
            n = s % 100;return (s - n) / 100 * 60 + n;
      }(n[8], n[9], n[10]), e._d = Je.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), Y(e).rfc2822 = !0;
    } else e._isValid = !1;
  }function ga(e) {
    if (e._f !== l.ISO_8601) {
      if (e._f !== l.RFC_2822) {
        e._a = [], Y(e).empty = !0;var a,
            t,
            s,
            n,
            d,
            r,
            _,
            i,
            o = "" + e._i,
            m = o.length,
            u = 0;for (s = G(e._f, e._locale).match(z) || [], a = 0; a < s.length; a++) {
          n = s[a], (t = (o.match(oe(n, e)) || [])[0]) && (0 < (d = o.substr(0, o.indexOf(t))).length && Y(e).unusedInput.push(d), o = o.slice(o.indexOf(t) + t.length), u += t.length), R[n] ? (t ? Y(e).empty = !1 : Y(e).unusedTokens.push(n), r = n, i = e, null != (_ = t) && h(ue, r) && ue[r](_, i._a, i, r)) : e._strict && !t && Y(e).unusedTokens.push(n);
        }Y(e).charsLeftOver = m - u, 0 < o.length && Y(e).unusedInput.push(o), e._a[Ye] <= 12 && !0 === Y(e).bigHour && 0 < e._a[Ye] && (Y(e).bigHour = void 0), Y(e).parsedDateParts = e._a.slice(0), Y(e).meridiem = e._meridiem, e._a[Ye] = function (e, a, t) {
          var s;if (null == t) return a;return null != e.meridiemHour ? e.meridiemHour(a, t) : (null != e.isPM && ((s = e.isPM(t)) && a < 12 && (a += 12), s || 12 !== a || (a = 0)), a);
        }(e._locale, e._a[Ye], e._meridiem), la(e), ma(e);
      } else Ta(e);
    } else fa(e);
  }function wa(e) {
    var a,
        t,
        s,
        n,
        d = e._i,
        r = e._f;return e._locale = e._locale || oa(e._l), null === d || void 0 === r && "" === d ? f({ nullInput: !0 }) : ("string" == typeof d && (e._i = d = e._locale.preparse(d)), D(d) ? new p(ma(d)) : (u(d) ? e._d = d : _(r) ? function (e) {
      var a, t, s, n, d;if (0 === e._f.length) return Y(e).invalidFormat = !0, e._d = new Date(NaN);for (n = 0; n < e._f.length; n++) {
        d = 0, a = k({}, e), null != e._useUTC && (a._useUTC = e._useUTC), a._f = e._f[n], ga(a), y(a) && (d += Y(a).charsLeftOver, d += 10 * Y(a).unusedTokens.length, Y(a).score = d, (null == s || d < s) && (s = d, t = a));
      }L(e, t || a);
    }(e) : r ? ga(e) : o(t = (a = e)._i) ? a._d = new Date(l.now()) : u(t) ? a._d = new Date(t.valueOf()) : "string" == typeof t ? (s = a, null === (n = ya.exec(s._i)) ? (fa(s), !1 === s._isValid && (delete s._isValid, Ta(s), !1 === s._isValid && (delete s._isValid, l.createFromInputFallback(s)))) : s._d = new Date(+n[1])) : _(t) ? (a._a = M(t.slice(0), function (e) {
      return parseInt(e, 10);
    }), la(a)) : i(t) ? function (e) {
      if (!e._d) {
        var a = W(e._i);e._a = M([a.year, a.month, a.day || a.date, a.hour, a.minute, a.second, a.millisecond], function (e) {
          return e && parseInt(e, 10);
        }), la(e);
      }
    }(a) : m(t) ? a._d = new Date(t) : l.createFromInputFallback(a), y(e) || (e._d = null), e));
  }function va(e, a, t, s, n) {
    var d,
        r = {};return !0 !== t && !1 !== t || (s = t, t = void 0), (i(e) && function (e) {
      if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;var a;for (a in e) {
        if (e.hasOwnProperty(a)) return !1;
      }return !0;
    }(e) || _(e) && 0 === e.length) && (e = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = n, r._l = t, r._i = e, r._f = a, r._strict = s, (d = new p(ma(wa(r))))._nextDay && (d.add(1, "d"), d._nextDay = void 0), d;
  }function Ha(e, a, t, s) {
    return va(e, a, t, s, !1);
  }l.createFromInputFallback = t("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }), l.ISO_8601 = function () {}, l.RFC_2822 = function () {};var Sa = t("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var e = Ha.apply(null, arguments);return this.isValid() && e.isValid() ? e < this ? this : e : f();
  }),
      ba = t("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var e = Ha.apply(null, arguments);return this.isValid() && e.isValid() ? this < e ? this : e : f();
  });function ja(e, a) {
    var t, s;if (1 === a.length && _(a[0]) && (a = a[0]), !a.length) return Ha();for (t = a[0], s = 1; s < a.length; ++s) {
      a[s].isValid() && !a[s][e](t) || (t = a[s]);
    }return t;
  }var xa = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];function Pa(e) {
    var a = W(e),
        t = a.year || 0,
        s = a.quarter || 0,
        n = a.month || 0,
        d = a.week || a.isoWeek || 0,
        r = a.day || 0,
        _ = a.hour || 0,
        i = a.minute || 0,
        o = a.second || 0,
        m = a.millisecond || 0;this._isValid = function (e) {
      for (var a in e) {
        if (-1 === we.call(xa, a) || null != e[a] && isNaN(e[a])) return !1;
      }for (var t = !1, s = 0; s < xa.length; ++s) {
        if (e[xa[s]]) {
          if (t) return !1;parseFloat(e[xa[s]]) !== g(e[xa[s]]) && (t = !0);
        }
      }return !0;
    }(a), this._milliseconds = +m + 1e3 * o + 6e4 * i + 1e3 * _ * 60 * 60, this._days = +r + 7 * d, this._months = +n + 3 * s + 12 * t, this._data = {}, this._locale = oa(), this._bubble();
  }function Oa(e) {
    return e instanceof Pa;
  }function Wa(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
  }function Ea(e, t) {
    I(e, 0, 0, function () {
      var e = this.utcOffset(),
          a = "+";return e < 0 && (e = -e, a = "-"), a + F(~~(e / 60), 2) + t + F(~~e % 60, 2);
    });
  }Ea("Z", ":"), Ea("ZZ", ""), ie("Z", de), ie("ZZ", de), le(["Z", "ZZ"], function (e, a, t) {
    t._useUTC = !0, t._tzm = Fa(de, e);
  });var Aa = /([\+\-]|\d\d)/gi;function Fa(e, a) {
    var t = (a || "").match(e);if (null === t) return null;var s = ((t[t.length - 1] || []) + "").match(Aa) || ["-", 0, 0],
        n = 60 * s[1] + g(s[2]);return 0 === n ? 0 : "+" === s[0] ? n : -n;
  }function za(e, a) {
    var t, s;return a._isUTC ? (t = a.clone(), s = (D(e) || u(e) ? e.valueOf() : Ha(e).valueOf()) - t.valueOf(), t._d.setTime(t._d.valueOf() + s), l.updateOffset(t, !1), t) : Ha(e).local();
  }function Ja(e) {
    return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
  }function Na() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }l.updateOffset = function () {};var Ra = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
      Ia = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Ca(e, a) {
    var t,
        s,
        n,
        d = e,
        r = null;return Oa(e) ? d = { ms: e._milliseconds, d: e._days, M: e._months } : m(e) ? (d = {}, a ? d[a] = e : d.milliseconds = e) : (r = Ra.exec(e)) ? (t = "-" === r[1] ? -1 : 1, d = { y: 0, d: g(r[ce]) * t, h: g(r[Ye]) * t, m: g(r[ye]) * t, s: g(r[fe]) * t, ms: g(Wa(1e3 * r[ke])) * t }) : (r = Ia.exec(e)) ? (t = "-" === r[1] ? -1 : 1, d = { y: Ga(r[2], t), M: Ga(r[3], t), w: Ga(r[4], t), d: Ga(r[5], t), h: Ga(r[6], t), m: Ga(r[7], t), s: Ga(r[8], t) }) : null == d ? d = {} : "object" == (typeof d === "undefined" ? "undefined" : _typeof(d)) && ("from" in d || "to" in d) && (n = function (e, a) {
      var t;if (!e.isValid() || !a.isValid()) return { milliseconds: 0, months: 0 };a = za(a, e), e.isBefore(a) ? t = Ua(e, a) : ((t = Ua(a, e)).milliseconds = -t.milliseconds, t.months = -t.months);return t;
    }(Ha(d.from), Ha(d.to)), (d = {}).ms = n.milliseconds, d.M = n.months), s = new Pa(d), Oa(e) && h(e, "_locale") && (s._locale = e._locale), s;
  }function Ga(e, a) {
    var t = e && parseFloat(e.replace(",", "."));return (isNaN(t) ? 0 : t) * a;
  }function Ua(e, a) {
    var t = { milliseconds: 0, months: 0 };return t.months = a.month() - e.month() + 12 * (a.year() - e.year()), e.clone().add(t.months, "M").isAfter(a) && --t.months, t.milliseconds = +a - +e.clone().add(t.months, "M"), t;
  }function Va(s, n) {
    return function (e, a) {
      var t;return null === a || isNaN(+a) || (H(n, "moment()." + n + "(period, number) is deprecated. Please use moment()." + n + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), t = e, e = a, a = t), Ka(this, Ca(e = "string" == typeof e ? +e : e, a), s), this;
    };
  }function Ka(e, a, t, s) {
    var n = a._milliseconds,
        d = Wa(a._days),
        r = Wa(a._months);e.isValid() && (s = null == s || s, r && We(e, Se(e, "Month") + r * t), d && be(e, "Date", Se(e, "Date") + d * t), n && e._d.setTime(e._d.valueOf() + n * t), s && l.updateOffset(e, d || r));
  }Ca.fn = Pa.prototype, Ca.invalid = function () {
    return Ca(NaN);
  };var $a = Va(1, "add"),
      Za = Va(-1, "subtract");function Ba(e, a) {
    var t = 12 * (a.year() - e.year()) + (a.month() - e.month()),
        s = e.clone().add(t, "months");return -(t + (a - s < 0 ? (a - s) / (s - e.clone().add(t - 1, "months")) : (a - s) / (e.clone().add(t + 1, "months") - s))) || 0;
  }function qa(e) {
    var a;return void 0 === e ? this._locale._abbr : (null != (a = oa(e)) && (this._locale = a), this);
  }l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";var Qa = t("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
    return void 0 === e ? this.localeData() : this.locale(e);
  });function Xa() {
    return this._locale;
  }function et(e, a) {
    I(0, [e, e.length], 0, a);
  }function at(e, a, t, s, n) {
    var d;return null == e ? Ie(this, s, n).year : ((d = Ce(e, s, n)) < a && (a = d), function (e, a, t, s, n) {
      var d = Re(e, a, t, s, n),
          r = Je(d.year, 0, d.dayOfYear);return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this;
    }.call(this, e, a, t, s, n));
  }I(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }), I(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  }), et("gggg", "weekYear"), et("ggggg", "weekYear"), et("GGGG", "isoWeekYear"), et("GGGGG", "isoWeekYear"), P("weekYear", "gg"), P("isoWeekYear", "GG"), A("weekYear", 1), A("isoWeekYear", 1), ie("G", se), ie("g", se), ie("GG", B, V), ie("gg", B, V), ie("GGGG", ee, $), ie("gggg", ee, $), ie("GGGGG", ae, Z), ie("ggggg", ae, Z), Me(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, a, t, s) {
    a[s.substr(0, 2)] = g(e);
  }), Me(["gg", "GG"], function (e, a, t, s) {
    a[s] = l.parseTwoDigitYear(e);
  }), I("Q", 0, "Qo", "quarter"), P("quarter", "Q"), A("quarter", 7), ie("Q", U), le("Q", function (e, a) {
    a[Le] = 3 * (g(e) - 1);
  }), I("D", ["DD", 2], "Do", "date"), P("date", "D"), A("date", 9), ie("D", B), ie("DD", B, V), ie("Do", function (e, a) {
    return e ? a._dayOfMonthOrdinalParse || a._ordinalParse : a._dayOfMonthOrdinalParseLenient;
  }), le(["D", "DD"], ce), le("Do", function (e, a) {
    a[ce] = g(e.match(B)[0]);
  });var tt = He("Date", !0);I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), A("dayOfYear", 4), ie("DDD", X), ie("DDDD", K), le(["DDD", "DDDD"], function (e, a, t) {
    t._dayOfYear = g(e);
  }), I("m", ["mm", 2], 0, "minute"), P("minute", "m"), A("minute", 14), ie("m", B), ie("mm", B, V), le(["m", "mm"], ye);var st = He("Minutes", !1);I("s", ["ss", 2], 0, "second"), P("second", "s"), A("second", 15), ie("s", B), ie("ss", B, V), le(["s", "ss"], fe);var nt,
      dt = He("Seconds", !1);for (I("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  }), I(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  }), I(0, ["SSS", 3], 0, "millisecond"), I(0, ["SSSS", 4], 0, function () {
    return 10 * this.millisecond();
  }), I(0, ["SSSSS", 5], 0, function () {
    return 100 * this.millisecond();
  }), I(0, ["SSSSSS", 6], 0, function () {
    return 1e3 * this.millisecond();
  }), I(0, ["SSSSSSS", 7], 0, function () {
    return 1e4 * this.millisecond();
  }), I(0, ["SSSSSSSS", 8], 0, function () {
    return 1e5 * this.millisecond();
  }), I(0, ["SSSSSSSSS", 9], 0, function () {
    return 1e6 * this.millisecond();
  }), P("millisecond", "ms"), A("millisecond", 16), ie("S", X, U), ie("SS", X, V), ie("SSS", X, K), nt = "SSSS"; nt.length <= 9; nt += "S") {
    ie(nt, te);
  }function rt(e, a) {
    a[ke] = g(1e3 * ("0." + e));
  }for (nt = "S"; nt.length <= 9; nt += "S") {
    le(nt, rt);
  }var _t = He("Milliseconds", !1);I("z", 0, 0, "zoneAbbr"), I("zz", 0, 0, "zoneName");var it = p.prototype;function ot(e) {
    return e;
  }it.add = $a, it.calendar = function (e, a) {
    var t = e || Ha(),
        s = za(t, this).startOf("day"),
        n = l.calendarFormat(this, s) || "sameElse",
        d = a && (S(a[n]) ? a[n].call(this, t) : a[n]);return this.format(d || this.localeData().calendar(n, this, Ha(t)));
  }, it.clone = function () {
    return new p(this);
  }, it.diff = function (e, a, t) {
    var s, n, d;if (!this.isValid()) return NaN;if (!(s = za(e, this)).isValid()) return NaN;switch (n = 6e4 * (s.utcOffset() - this.utcOffset()), a = O(a)) {case "year":
        d = Ba(this, s) / 12;break;case "month":
        d = Ba(this, s);break;case "quarter":
        d = Ba(this, s) / 3;break;case "second":
        d = (this - s) / 1e3;break;case "minute":
        d = (this - s) / 6e4;break;case "hour":
        d = (this - s) / 36e5;break;case "day":
        d = (this - s - n) / 864e5;break;case "week":
        d = (this - s - n) / 6048e5;break;default:
        d = this - s;}return t ? d : T(d);
  }, it.endOf = function (e) {
    return void 0 === (e = O(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"));
  }, it.format = function (e) {
    e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);var a = C(this, e);return this.localeData().postformat(a);
  }, it.from = function (e, a) {
    return this.isValid() && (D(e) && e.isValid() || Ha(e).isValid()) ? Ca({ to: this, from: e }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate();
  }, it.fromNow = function (e) {
    return this.from(Ha(), e);
  }, it.to = function (e, a) {
    return this.isValid() && (D(e) && e.isValid() || Ha(e).isValid()) ? Ca({ from: this, to: e }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate();
  }, it.toNow = function (e) {
    return this.to(Ha(), e);
  }, it.get = function (e) {
    return S(this[e = O(e)]) ? this[e]() : this;
  }, it.invalidAt = function () {
    return Y(this).overflow;
  }, it.isAfter = function (e, a) {
    var t = D(e) ? e : Ha(e);return !(!this.isValid() || !t.isValid()) && ("millisecond" === (a = O(a) || "millisecond") ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(a).valueOf());
  }, it.isBefore = function (e, a) {
    var t = D(e) ? e : Ha(e);return !(!this.isValid() || !t.isValid()) && ("millisecond" === (a = O(a) || "millisecond") ? this.valueOf() < t.valueOf() : this.clone().endOf(a).valueOf() < t.valueOf());
  }, it.isBetween = function (e, a, t, s) {
    var n = D(e) ? e : Ha(e),
        d = D(a) ? a : Ha(a);return !!(this.isValid() && n.isValid() && d.isValid()) && ("(" === (s = s || "()")[0] ? this.isAfter(n, t) : !this.isBefore(n, t)) && (")" === s[1] ? this.isBefore(d, t) : !this.isAfter(d, t));
  }, it.isSame = function (e, a) {
    var t,
        s = D(e) ? e : Ha(e);return !(!this.isValid() || !s.isValid()) && ("millisecond" === (a = O(a) || "millisecond") ? this.valueOf() === s.valueOf() : (t = s.valueOf(), this.clone().startOf(a).valueOf() <= t && t <= this.clone().endOf(a).valueOf()));
  }, it.isSameOrAfter = function (e, a) {
    return this.isSame(e, a) || this.isAfter(e, a);
  }, it.isSameOrBefore = function (e, a) {
    return this.isSame(e, a) || this.isBefore(e, a);
  }, it.isValid = function () {
    return y(this);
  }, it.lang = Qa, it.locale = qa, it.localeData = Xa, it.max = ba, it.min = Sa, it.parsingFlags = function () {
    return L({}, Y(this));
  }, it.set = function (e, a) {
    if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) for (var t = function (e) {
      var a = [];for (var t in e) {
        a.push({ unit: t, priority: E[t] });
      }return a.sort(function (e, a) {
        return e.priority - a.priority;
      }), a;
    }(e = W(e)), s = 0; s < t.length; s++) {
      this[t[s].unit](e[t[s].unit]);
    } else if (S(this[e = O(e)])) return this[e](a);return this;
  }, it.startOf = function (e) {
    switch (e = O(e)) {case "year":
        this.month(0);case "quarter":case "month":
        this.date(1);case "week":case "isoWeek":case "day":case "date":
        this.hours(0);case "hour":
        this.minutes(0);case "minute":
        this.seconds(0);case "second":
        this.milliseconds(0);}return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this;
  }, it.subtract = Za, it.toArray = function () {
    var e = this;return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
  }, it.toObject = function () {
    var e = this;return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() };
  }, it.toDate = function () {
    return new Date(this.valueOf());
  }, it.toISOString = function (e) {
    if (!this.isValid()) return null;var a = !0 !== e,
        t = a ? this.clone().utc() : this;return t.year() < 0 || 9999 < t.year() ? C(t, a ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : S(Date.prototype.toISOString) ? a ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", C(t, "Z")) : C(t, a ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
  }, it.inspect = function () {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";var e = "moment",
        a = "";this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", a = "Z");var t = "[" + e + '("]',
        s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        n = a + '[")]';return this.format(t + s + "-MM-DD[T]HH:mm:ss.SSS" + n);
  }, it.toJSON = function () {
    return this.isValid() ? this.toISOString() : null;
  }, it.toString = function () {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }, it.unix = function () {
    return Math.floor(this.valueOf() / 1e3);
  }, it.valueOf = function () {
    return this._d.valueOf() - 6e4 * (this._offset || 0);
  }, it.creationData = function () {
    return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
  }, it.year = ve, it.isLeapYear = function () {
    return ge(this.year());
  }, it.weekYear = function (e) {
    return at.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }, it.isoWeekYear = function (e) {
    return at.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
  }, it.quarter = it.quarters = function (e) {
    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
  }, it.month = Ee, it.daysInMonth = function () {
    return je(this.year(), this.month());
  }, it.week = it.weeks = function (e) {
    var a = this.localeData().week(this);return null == e ? a : this.add(7 * (e - a), "d");
  }, it.isoWeek = it.isoWeeks = function (e) {
    var a = Ie(this, 1, 4).week;return null == e ? a : this.add(7 * (e - a), "d");
  }, it.weeksInYear = function () {
    var e = this.localeData()._week;return Ce(this.year(), e.dow, e.doy);
  }, it.isoWeeksInYear = function () {
    return Ce(this.year(), 1, 4);
  }, it.date = tt, it.day = it.days = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;var a,
        t,
        s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();return null != e ? (a = e, t = this.localeData(), e = "string" != typeof a ? a : isNaN(a) ? "number" == typeof (a = t.weekdaysParse(a)) ? a : null : parseInt(a, 10), this.add(e - s, "d")) : s;
  }, it.weekday = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;var a = (this.day() + 7 - this.localeData()._week.dow) % 7;return null == e ? a : this.add(e - a, "d");
  }, it.isoWeekday = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;if (null == e) return this.day() || 7;var a,
        t,
        s = (a = e, t = this.localeData(), "string" == typeof a ? t.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a);return this.day(this.day() % 7 ? s : s - 7);
  }, it.dayOfYear = function (e) {
    var a = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;return null == e ? a : this.add(e - a, "d");
  }, it.hour = it.hours = aa, it.minute = it.minutes = st, it.second = it.seconds = dt, it.millisecond = it.milliseconds = _t, it.utcOffset = function (e, a, t) {
    var s,
        n = this._offset || 0;if (!this.isValid()) return null != e ? this : NaN;if (null == e) return this._isUTC ? n : Ja(this);if ("string" == typeof e) {
      if (null === (e = Fa(de, e))) return this;
    } else Math.abs(e) < 16 && !t && (e *= 60);return !this._isUTC && a && (s = Ja(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), n !== e && (!a || this._changeInProgress ? Ka(this, Ca(e - n, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this;
  }, it.utc = function (e) {
    return this.utcOffset(0, e);
  }, it.local = function (e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ja(this), "m")), this;
  }, it.parseZone = function () {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
      var e = Fa(ne, this._i);null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
    }return this;
  }, it.hasAlignedHourOffset = function (e) {
    return !!this.isValid() && (e = e ? Ha(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
  }, it.isDST = function () {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }, it.isLocal = function () {
    return !!this.isValid() && !this._isUTC;
  }, it.isUtcOffset = function () {
    return !!this.isValid() && this._isUTC;
  }, it.isUtc = Na, it.isUTC = Na, it.zoneAbbr = function () {
    return this._isUTC ? "UTC" : "";
  }, it.zoneName = function () {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }, it.dates = t("dates accessor is deprecated. Use date instead.", tt), it.months = t("months accessor is deprecated. Use month instead", Ee), it.years = t("years accessor is deprecated. Use year instead", ve), it.zone = t("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, a) {
    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, a), this) : -this.utcOffset();
  }), it.isDSTShifted = t("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
    if (!o(this._isDSTShifted)) return this._isDSTShifted;var e = {};if (k(e, this), (e = wa(e))._a) {
      var a = e._isUTC ? c(e._a) : Ha(e._a);this._isDSTShifted = this.isValid() && 0 < r(e._a, a.toArray());
    } else this._isDSTShifted = !1;return this._isDSTShifted;
  });var mt = j.prototype;function ut(e, a, t, s) {
    var n = oa(),
        d = c().set(s, a);return n[t](d, e);
  }function lt(e, a, t) {
    if (m(e) && (a = e, e = void 0), e = e || "", null != a) return ut(e, a, t, "month");var s,
        n = [];for (s = 0; s < 12; s++) {
      n[s] = ut(e, s, t, "month");
    }return n;
  }function Mt(e, a, t, s) {
    a = ("boolean" == typeof e ? m(a) && (t = a, a = void 0) : (a = e, e = !1, m(t = a) && (t = a, a = void 0)), a || "");var n,
        d = oa(),
        r = e ? d._week.dow : 0;if (null != t) return ut(a, (t + r) % 7, s, "day");var _ = [];for (n = 0; n < 7; n++) {
      _[n] = ut(a, (n + r) % 7, s, "day");
    }return _;
  }mt.calendar = function (e, a, t) {
    var s = this._calendar[e] || this._calendar.sameElse;return S(s) ? s.call(a, t) : s;
  }, mt.longDateFormat = function (e) {
    var a = this._longDateFormat[e],
        t = this._longDateFormat[e.toUpperCase()];return a || !t ? a : (this._longDateFormat[e] = t.replace(/MMMM|MM|DD|dddd/g, function (e) {
      return e.slice(1);
    }), this._longDateFormat[e]);
  }, mt.invalidDate = function () {
    return this._invalidDate;
  }, mt.ordinal = function (e) {
    return this._ordinal.replace("%d", e);
  }, mt.preparse = ot, mt.postformat = ot, mt.relativeTime = function (e, a, t, s) {
    var n = this._relativeTime[t];return S(n) ? n(e, a, t, s) : n.replace(/%d/i, e);
  }, mt.pastFuture = function (e, a) {
    var t = this._relativeTime[0 < e ? "future" : "past"];return S(t) ? t(a) : t.replace(/%s/i, a);
  }, mt.set = function (e) {
    var a, t;for (t in e) {
      S(a = e[t]) ? this[t] = a : this["_" + t] = a;
    }this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
  }, mt.months = function (e, a) {
    return e ? _(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || xe).test(a) ? "format" : "standalone"][e.month()] : _(this._months) ? this._months : this._months.standalone;
  }, mt.monthsShort = function (e, a) {
    return e ? _(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[xe.test(a) ? "format" : "standalone"][e.month()] : _(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }, mt.monthsParse = function (e, a, t) {
    var s, n, d;if (this._monthsParseExact) return function (e, a, t) {
      var s,
          n,
          d,
          r = e.toLocaleLowerCase();if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) {
        d = c([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(d, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(d, "").toLocaleLowerCase();
      }return t ? "MMM" === a ? -1 !== (n = we.call(this._shortMonthsParse, r)) ? n : null : -1 !== (n = we.call(this._longMonthsParse, r)) ? n : null : "MMM" === a ? -1 !== (n = we.call(this._shortMonthsParse, r)) ? n : -1 !== (n = we.call(this._longMonthsParse, r)) ? n : null : -1 !== (n = we.call(this._longMonthsParse, r)) ? n : -1 !== (n = we.call(this._shortMonthsParse, r)) ? n : null;
    }.call(this, e, a, t);for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
      if (n = c([2e3, s]), t && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(n, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(n, "").replace(".", "") + "$", "i")), t || this._monthsParse[s] || (d = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[s] = new RegExp(d.replace(".", ""), "i")), t && "MMMM" === a && this._longMonthsParse[s].test(e)) return s;if (t && "MMM" === a && this._shortMonthsParse[s].test(e)) return s;if (!t && this._monthsParse[s].test(e)) return s;
    }
  }, mt.monthsRegex = function (e) {
    return this._monthsParseExact ? (h(this, "_monthsRegex") || ze.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (h(this, "_monthsRegex") || (this._monthsRegex = Fe), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
  }, mt.monthsShortRegex = function (e) {
    return this._monthsParseExact ? (h(this, "_monthsRegex") || ze.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = Ae), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }, mt.week = function (e) {
    return Ie(e, this._week.dow, this._week.doy).week;
  }, mt.firstDayOfYear = function () {
    return this._week.doy;
  }, mt.firstDayOfWeek = function () {
    return this._week.dow;
  }, mt.weekdays = function (e, a) {
    return e ? _(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(a) ? "format" : "standalone"][e.day()] : _(this._weekdays) ? this._weekdays : this._weekdays.standalone;
  }, mt.weekdaysMin = function (e) {
    return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
  }, mt.weekdaysShort = function (e) {
    return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
  }, mt.weekdaysParse = function (e, a, t) {
    var s, n, d;if (this._weekdaysParseExact) return function (e, a, t) {
      var s,
          n,
          d,
          r = e.toLocaleLowerCase();if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) {
        d = c([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(d, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(d, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(d, "").toLocaleLowerCase();
      }return t ? "dddd" === a ? -1 !== (n = we.call(this._weekdaysParse, r)) ? n : null : "ddd" === a ? -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : null : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : null : "dddd" === a ? -1 !== (n = we.call(this._weekdaysParse, r)) ? n : -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : null : "ddd" === a ? -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : -1 !== (n = we.call(this._weekdaysParse, r)) ? n : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : null : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : -1 !== (n = we.call(this._weekdaysParse, r)) ? n : -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : null;
    }.call(this, e, a, t);for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
      if (n = c([2e3, 1]).day(s), t && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(n, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (d = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[s] = new RegExp(d.replace(".", ""), "i")), t && "dddd" === a && this._fullWeekdaysParse[s].test(e)) return s;if (t && "ddd" === a && this._shortWeekdaysParse[s].test(e)) return s;if (t && "dd" === a && this._minWeekdaysParse[s].test(e)) return s;if (!t && this._weekdaysParse[s].test(e)) return s;
    }
  }, mt.weekdaysRegex = function (e) {
    return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = Ke), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }, mt.weekdaysShortRegex = function (e) {
    return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = $e), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }, mt.weekdaysMinRegex = function (e) {
    return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ze), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }, mt.isPM = function (e) {
    return "p" === (e + "").toLowerCase().charAt(0);
  }, mt.meridiem = function (e, a, t) {
    return 11 < e ? t ? "pm" : "PM" : t ? "am" : "AM";
  }, _a("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(e) {
      var a = e % 10;return e + (1 === g(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
    } }), l.lang = t("moment.lang is deprecated. Use moment.locale instead.", _a), l.langData = t("moment.langData is deprecated. Use moment.localeData instead.", oa);var ht = Math.abs;function Lt(e, a, t, s) {
    var n = Ca(a, t);return e._milliseconds += s * n._milliseconds, e._days += s * n._days, e._months += s * n._months, e._bubble();
  }function ct(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }function Yt(e) {
    return 4800 * e / 146097;
  }function yt(e) {
    return 146097 * e / 4800;
  }function ft(e) {
    return function () {
      return this.as(e);
    };
  }var kt = ft("ms"),
      pt = ft("s"),
      Dt = ft("m"),
      Tt = ft("h"),
      gt = ft("d"),
      wt = ft("w"),
      vt = ft("M"),
      Ht = ft("y");function St(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN;
    };
  }var bt = St("milliseconds"),
      jt = St("seconds"),
      xt = St("minutes"),
      Pt = St("hours"),
      Ot = St("days"),
      Wt = St("months"),
      Et = St("years");var At = Math.round,
      Ft = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 };var zt = Math.abs;function Jt(e) {
    return (0 < e) - (e < 0) || +e;
  }function Nt() {
    if (!this.isValid()) return this.localeData().invalidDate();var e,
        a,
        t = zt(this._milliseconds) / 1e3,
        s = zt(this._days),
        n = zt(this._months);a = T((e = T(t / 60)) / 60), t %= 60, e %= 60;var d = T(n / 12),
        r = n %= 12,
        _ = s,
        i = a,
        o = e,
        m = t ? t.toFixed(3).replace(/\.?0+$/, "") : "",
        u = this.asSeconds();if (!u) return "P0D";var l = u < 0 ? "-" : "",
        M = Jt(this._months) !== Jt(u) ? "-" : "",
        h = Jt(this._days) !== Jt(u) ? "-" : "",
        L = Jt(this._milliseconds) !== Jt(u) ? "-" : "";return l + "P" + (d ? M + d + "Y" : "") + (r ? M + r + "M" : "") + (_ ? h + _ + "D" : "") + (i || o || m ? "T" : "") + (i ? L + i + "H" : "") + (o ? L + o + "M" : "") + (m ? L + m + "S" : "");
  }var Rt = Pa.prototype;Rt.isValid = function () {
    return this._isValid;
  }, Rt.abs = function () {
    var e = this._data;return this._milliseconds = ht(this._milliseconds), this._days = ht(this._days), this._months = ht(this._months), e.milliseconds = ht(e.milliseconds), e.seconds = ht(e.seconds), e.minutes = ht(e.minutes), e.hours = ht(e.hours), e.months = ht(e.months), e.years = ht(e.years), this;
  }, Rt.add = function (e, a) {
    return Lt(this, e, a, 1);
  }, Rt.subtract = function (e, a) {
    return Lt(this, e, a, -1);
  }, Rt.as = function (e) {
    if (!this.isValid()) return NaN;var a,
        t,
        s = this._milliseconds;if ("month" === (e = O(e)) || "year" === e) return a = this._days + s / 864e5, t = this._months + Yt(a), "month" === e ? t : t / 12;switch (a = this._days + Math.round(yt(this._months)), e) {case "week":
        return a / 7 + s / 6048e5;case "day":
        return a + s / 864e5;case "hour":
        return 24 * a + s / 36e5;case "minute":
        return 1440 * a + s / 6e4;case "second":
        return 86400 * a + s / 1e3;case "millisecond":
        return Math.floor(864e5 * a) + s;default:
        throw new Error("Unknown unit " + e);}
  }, Rt.asMilliseconds = kt, Rt.asSeconds = pt, Rt.asMinutes = Dt, Rt.asHours = Tt, Rt.asDays = gt, Rt.asWeeks = wt, Rt.asMonths = vt, Rt.asYears = Ht, Rt.valueOf = function () {
    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12) : NaN;
  }, Rt._bubble = function () {
    var e,
        a,
        t,
        s,
        n,
        d = this._milliseconds,
        r = this._days,
        _ = this._months,
        i = this._data;return 0 <= d && 0 <= r && 0 <= _ || d <= 0 && r <= 0 && _ <= 0 || (d += 864e5 * ct(yt(_) + r), _ = r = 0), i.milliseconds = d % 1e3, e = T(d / 1e3), i.seconds = e % 60, a = T(e / 60), i.minutes = a % 60, t = T(a / 60), i.hours = t % 24, _ += n = T(Yt(r += T(t / 24))), r -= ct(yt(n)), s = T(_ / 12), _ %= 12, i.days = r, i.months = _, i.years = s, this;
  }, Rt.clone = function () {
    return Ca(this);
  }, Rt.get = function (e) {
    return e = O(e), this.isValid() ? this[e + "s"]() : NaN;
  }, Rt.milliseconds = bt, Rt.seconds = jt, Rt.minutes = xt, Rt.hours = Pt, Rt.days = Ot, Rt.weeks = function () {
    return T(this.days() / 7);
  }, Rt.months = Wt, Rt.years = Et, Rt.humanize = function (e) {
    if (!this.isValid()) return this.localeData().invalidDate();var a,
        t,
        s,
        n,
        d,
        r,
        _,
        i,
        o,
        m,
        u,
        l = this.localeData(),
        M = (t = !e, s = l, n = Ca(a = this).abs(), d = At(n.as("s")), r = At(n.as("m")), _ = At(n.as("h")), i = At(n.as("d")), o = At(n.as("M")), m = At(n.as("y")), (u = d <= Ft.ss && ["s", d] || d < Ft.s && ["ss", d] || r <= 1 && ["m"] || r < Ft.m && ["mm", r] || _ <= 1 && ["h"] || _ < Ft.h && ["hh", _] || i <= 1 && ["d"] || i < Ft.d && ["dd", i] || o <= 1 && ["M"] || o < Ft.M && ["MM", o] || m <= 1 && ["y"] || ["yy", m])[2] = t, u[3] = 0 < +a, u[4] = s, function (e, a, t, s, n) {
      return n.relativeTime(a || 1, !!t, e, s);
    }.apply(null, u));return e && (M = l.pastFuture(+this, M)), l.postformat(M);
  }, Rt.toISOString = Nt, Rt.toString = Nt, Rt.toJSON = Nt, Rt.locale = qa, Rt.localeData = Xa, Rt.toIsoString = t("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Nt), Rt.lang = Qa, I("X", 0, 0, "unix"), I("x", 0, 0, "valueOf"), ie("x", se), ie("X", /[+-]?\d+(\.\d{1,3})?/), le("X", function (e, a, t) {
    t._d = new Date(1e3 * parseFloat(e, 10));
  }), le("x", function (e, a, t) {
    t._d = new Date(g(e));
  }), l.version = "2.23.0", e = Ha, l.fn = it, l.min = function () {
    return ja("isBefore", [].slice.call(arguments, 0));
  }, l.max = function () {
    return ja("isAfter", [].slice.call(arguments, 0));
  }, l.now = function () {
    return Date.now ? Date.now() : +new Date();
  }, l.utc = c, l.unix = function (e) {
    return Ha(1e3 * e);
  }, l.months = function (e, a) {
    return lt(e, a, "months");
  }, l.isDate = u, l.locale = _a, l.invalid = f, l.duration = Ca, l.isMoment = D, l.weekdays = function (e, a, t) {
    return Mt(e, a, t, "weekdays");
  }, l.parseZone = function () {
    return Ha.apply(null, arguments).parseZone();
  }, l.localeData = oa, l.isDuration = Oa, l.monthsShort = function (e, a) {
    return lt(e, a, "monthsShort");
  }, l.weekdaysMin = function (e, a, t) {
    return Mt(e, a, t, "weekdaysMin");
  }, l.defineLocale = ia, l.updateLocale = function (e, a) {
    if (null != a) {
      var t,
          s,
          n = ta;null != (s = ra(e)) && (n = s._config), (t = new j(a = b(n, a))).parentLocale = sa[e], sa[e] = t, _a(e);
    } else null != sa[e] && (null != sa[e].parentLocale ? sa[e] = sa[e].parentLocale : null != sa[e] && delete sa[e]);return sa[e];
  }, l.locales = function () {
    return s(sa);
  }, l.weekdaysShort = function (e, a, t) {
    return Mt(e, a, t, "weekdaysShort");
  }, l.normalizeUnits = O, l.relativeTimeRounding = function (e) {
    return void 0 === e ? At : "function" == typeof e && (At = e, !0);
  }, l.relativeTimeThreshold = function (e, a) {
    return void 0 !== Ft[e] && (void 0 === a ? Ft[e] : (Ft[e] = a, "s" === e && (Ft.ss = a - 1), !0));
  }, l.calendarFormat = function (e, a) {
    var t = e.diff(a, "days", !0);return t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse";
  }, l.prototype = it, l.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, l.defineLocale("af", { months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), meridiemParse: /vm|nm/i, isPM: function isPM(e) {
      return (/^nm$/i.test(e)
      );
    }, meridiem: function meridiem(e, a, t) {
      return e < 12 ? t ? "vm" : "VM" : t ? "nm" : "NM";
    }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Vandag om] LT", nextDay: "[M\xf4re om] LT", nextWeek: "dddd [om] LT", lastDay: "[Gister om] LT", lastWeek: "[Laas] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", ss: "%d sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(e) {
      return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de");
    }, week: { dow: 1, doy: 4 } }), l.defineLocale("ar-dz", { months: "\u062C\u0627\u0646\u0641\u064A_\u0641\u064A\u0641\u0631\u064A_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064A\u0644_\u0645\u0627\u064A_\u062C\u0648\u0627\u0646_\u062C\u0648\u064A\u0644\u064A\u0629_\u0623\u0648\u062A_\u0633\u0628\u062A\u0645\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062F\u064A\u0633\u0645\u0628\u0631".split("_"), monthsShort: "\u062C\u0627\u0646\u0641\u064A_\u0641\u064A\u0641\u0631\u064A_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064A\u0644_\u0645\u0627\u064A_\u062C\u0648\u0627\u0646_\u062C\u0648\u064A\u0644\u064A\u0629_\u0623\u0648\u062A_\u0633\u0628\u062A\u0645\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062F\u064A\u0633\u0645\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062B\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"), weekdaysShort: "\u0627\u062D\u062F_\u0627\u062B\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"), weekdaysMin: "\u0623\u062D_\u0625\u062B_\u062B\u0644\u0627_\u0623\u0631_\u062E\u0645_\u062C\u0645_\u0633\u0628".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064A\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063A\u062F\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064A %s", past: "\u0645\u0646\u0630 %s", s: "\u062B\u0648\u0627\u0646", ss: "%d \u062B\u0627\u0646\u064A\u0629", m: "\u062F\u0642\u064A\u0642\u0629", mm: "%d \u062F\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062A", d: "\u064A\u0648\u0645", dd: "%d \u0623\u064A\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062A" }, week: { dow: 0, doy: 4 } }), l.defineLocale("ar-kw", { months: "\u064A\u0646\u0627\u064A\u0631_\u0641\u0628\u0631\u0627\u064A\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064A\u0644_\u0645\u0627\u064A_\u064A\u0648\u0646\u064A\u0648_\u064A\u0648\u0644\u064A\u0648\u0632_\u063A\u0634\u062A_\u0634\u062A\u0646\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062F\u062C\u0646\u0628\u0631".split("_"), monthsShort: "\u064A\u0646\u0627\u064A\u0631_\u0641\u0628\u0631\u0627\u064A\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064A\u0644_\u0645\u0627\u064A_\u064A\u0648\u0646\u064A\u0648_\u064A\u0648\u0644\u064A\u0648\u0632_\u063A\u0634\u062A_\u0634\u062A\u0646\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062F\u062C\u0646\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062A\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"), weekdaysShort: "\u0627\u062D\u062F_\u0627\u062A\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"), weekdaysMin: "\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064A\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063A\u062F\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064A %s", past: "\u0645\u0646\u0630 %s", s: "\u062B\u0648\u0627\u0646", ss: "%d \u062B\u0627\u0646\u064A\u0629", m: "\u062F\u0642\u064A\u0642\u0629", mm: "%d \u062F\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062A", d: "\u064A\u0648\u0645", dd: "%d \u0623\u064A\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062A" }, week: { dow: 0, doy: 12 } });var It = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0" },
      Ct = function Ct(e) {
    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5;
  },
      Gt = { s: ["\u0623\u0642\u0644 \u0645\u0646 \u062B\u0627\u0646\u064A\u0629", "\u062B\u0627\u0646\u064A\u0629 \u0648\u0627\u062D\u062F\u0629", ["\u062B\u0627\u0646\u064A\u062A\u0627\u0646", "\u062B\u0627\u0646\u064A\u062A\u064A\u0646"], "%d \u062B\u0648\u0627\u0646", "%d \u062B\u0627\u0646\u064A\u0629", "%d \u062B\u0627\u0646\u064A\u0629"], m: ["\u0623\u0642\u0644 \u0645\u0646 \u062F\u0642\u064A\u0642\u0629", "\u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629", ["\u062F\u0642\u064A\u0642\u062A\u0627\u0646", "\u062F\u0642\u064A\u0642\u062A\u064A\u0646"], "%d \u062F\u0642\u0627\u0626\u0642", "%d \u062F\u0642\u064A\u0642\u0629", "%d \u062F\u0642\u064A\u0642\u0629"], h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629", ["\u0633\u0627\u0639\u062A\u0627\u0646", "\u0633\u0627\u0639\u062A\u064A\u0646"], "%d \u0633\u0627\u0639\u0627\u062A", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"], d: ["\u0623\u0642\u0644 \u0645\u0646 \u064A\u0648\u0645", "\u064A\u0648\u0645 \u0648\u0627\u062D\u062F", ["\u064A\u0648\u0645\u0627\u0646", "\u064A\u0648\u0645\u064A\u0646"], "%d \u0623\u064A\u0627\u0645", "%d \u064A\u0648\u0645\u064B\u0627", "%d \u064A\u0648\u0645"], M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062D\u062F", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064A\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"], y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062D\u062F", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064A\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064B\u0627", "%d \u0639\u0627\u0645"] },
      Ut = function Ut(r) {
    return function (e, a, t, s) {
      var n = Ct(e),
          d = Gt[r][Ct(e)];return 2 === n && (d = d[a ? 0 : 1]), d.replace(/%d/i, e);
    };
  },
      Vt = ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"];l.defineLocale("ar-ly", { months: Vt, monthsShort: Vt, weekdays: "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062B\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"), weekdaysShort: "\u0623\u062D\u062F_\u0625\u062B\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"), weekdaysMin: "\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/\u200FM/\u200FYYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0635|\u0645/, isPM: function isPM(e) {
      return "\u0645" === e;
    }, meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0635" : "\u0645";
    }, calendar: { sameDay: "[\u0627\u0644\u064A\u0648\u0645 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063A\u062F\u064B\u0627 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0628\u0639\u062F %s", past: "\u0645\u0646\u0630 %s", s: Ut("s"), ss: Ut("s"), m: Ut("m"), mm: Ut("m"), h: Ut("h"), hh: Ut("h"), d: Ut("d"), dd: Ut("d"), M: Ut("M"), MM: Ut("M"), y: Ut("y"), yy: Ut("y") }, preparse: function preparse(e) {
      return e.replace(/\u060c/g, ",");
    }, postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return It[e];
      }).replace(/,/g, "\u060C");
    }, week: { dow: 6, doy: 12 } }), l.defineLocale("ar-ma", { months: "\u064A\u0646\u0627\u064A\u0631_\u0641\u0628\u0631\u0627\u064A\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064A\u0644_\u0645\u0627\u064A_\u064A\u0648\u0646\u064A\u0648_\u064A\u0648\u0644\u064A\u0648\u0632_\u063A\u0634\u062A_\u0634\u062A\u0646\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062F\u062C\u0646\u0628\u0631".split("_"), monthsShort: "\u064A\u0646\u0627\u064A\u0631_\u0641\u0628\u0631\u0627\u064A\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064A\u0644_\u0645\u0627\u064A_\u064A\u0648\u0646\u064A\u0648_\u064A\u0648\u0644\u064A\u0648\u0632_\u063A\u0634\u062A_\u0634\u062A\u0646\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062F\u062C\u0646\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062A\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"), weekdaysShort: "\u0627\u062D\u062F_\u0627\u062A\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"), weekdaysMin: "\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064A\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063A\u062F\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064A %s", past: "\u0645\u0646\u0630 %s", s: "\u062B\u0648\u0627\u0646", ss: "%d \u062B\u0627\u0646\u064A\u0629", m: "\u062F\u0642\u064A\u0642\u0629", mm: "%d \u062F\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062A", d: "\u064A\u0648\u0645", dd: "%d \u0623\u064A\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062A" }, week: { dow: 6, doy: 12 } });var Kt = { 1: "\u0661", 2: "\u0662", 3: "\u0663", 4: "\u0664", 5: "\u0665", 6: "\u0666", 7: "\u0667", 8: "\u0668", 9: "\u0669", 0: "\u0660" },
      $t = { "\u0661": "1", "\u0662": "2", "\u0663": "3", "\u0664": "4", "\u0665": "5", "\u0666": "6", "\u0667": "7", "\u0668": "8", "\u0669": "9", "\u0660": "0" };l.defineLocale("ar-sa", { months: "\u064A\u0646\u0627\u064A\u0631_\u0641\u0628\u0631\u0627\u064A\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064A\u0644_\u0645\u0627\u064A\u0648_\u064A\u0648\u0646\u064A\u0648_\u064A\u0648\u0644\u064A\u0648_\u0623\u063A\u0633\u0637\u0633_\u0633\u0628\u062A\u0645\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062F\u064A\u0633\u0645\u0628\u0631".split("_"), monthsShort: "\u064A\u0646\u0627\u064A\u0631_\u0641\u0628\u0631\u0627\u064A\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064A\u0644_\u0645\u0627\u064A\u0648_\u064A\u0648\u0646\u064A\u0648_\u064A\u0648\u0644\u064A\u0648_\u0623\u063A\u0633\u0637\u0633_\u0633\u0628\u062A\u0645\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062F\u064A\u0633\u0645\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062B\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"), weekdaysShort: "\u0623\u062D\u062F_\u0625\u062B\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"), weekdaysMin: "\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0635|\u0645/, isPM: function isPM(e) {
      return "\u0645" === e;
    }, meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0635" : "\u0645";
    }, calendar: { sameDay: "[\u0627\u0644\u064A\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063A\u062F\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064A %s", past: "\u0645\u0646\u0630 %s", s: "\u062B\u0648\u0627\u0646", ss: "%d \u062B\u0627\u0646\u064A\u0629", m: "\u062F\u0642\u064A\u0642\u0629", mm: "%d \u062F\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062A", d: "\u064A\u0648\u0645", dd: "%d \u0623\u064A\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062A" }, preparse: function preparse(e) {
      return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function (e) {
        return $t[e];
      }).replace(/\u060c/g, ",");
    }, postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return Kt[e];
      }).replace(/,/g, "\u060C");
    }, week: { dow: 0, doy: 6 } }), l.defineLocale("ar-tn", { months: "\u062C\u0627\u0646\u0641\u064A_\u0641\u064A\u0641\u0631\u064A_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064A\u0644_\u0645\u0627\u064A_\u062C\u0648\u0627\u0646_\u062C\u0648\u064A\u0644\u064A\u0629_\u0623\u0648\u062A_\u0633\u0628\u062A\u0645\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062F\u064A\u0633\u0645\u0628\u0631".split("_"), monthsShort: "\u062C\u0627\u0646\u0641\u064A_\u0641\u064A\u0641\u0631\u064A_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064A\u0644_\u0645\u0627\u064A_\u062C\u0648\u0627\u0646_\u062C\u0648\u064A\u0644\u064A\u0629_\u0623\u0648\u062A_\u0633\u0628\u062A\u0645\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062F\u064A\u0633\u0645\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062B\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"), weekdaysShort: "\u0623\u062D\u062F_\u0625\u062B\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"), weekdaysMin: "\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064A\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063A\u062F\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064A %s", past: "\u0645\u0646\u0630 %s", s: "\u062B\u0648\u0627\u0646", ss: "%d \u062B\u0627\u0646\u064A\u0629", m: "\u062F\u0642\u064A\u0642\u0629", mm: "%d \u062F\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062A", d: "\u064A\u0648\u0645", dd: "%d \u0623\u064A\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062A" }, week: { dow: 1, doy: 4 } });var Zt = { 1: "\u0661", 2: "\u0662", 3: "\u0663", 4: "\u0664", 5: "\u0665", 6: "\u0666", 7: "\u0667", 8: "\u0668", 9: "\u0669", 0: "\u0660" },
      Bt = { "\u0661": "1", "\u0662": "2", "\u0663": "3", "\u0664": "4", "\u0665": "5", "\u0666": "6", "\u0667": "7", "\u0668": "8", "\u0669": "9", "\u0660": "0" },
      qt = function qt(e) {
    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5;
  },
      Qt = { s: ["\u0623\u0642\u0644 \u0645\u0646 \u062B\u0627\u0646\u064A\u0629", "\u062B\u0627\u0646\u064A\u0629 \u0648\u0627\u062D\u062F\u0629", ["\u062B\u0627\u0646\u064A\u062A\u0627\u0646", "\u062B\u0627\u0646\u064A\u062A\u064A\u0646"], "%d \u062B\u0648\u0627\u0646", "%d \u062B\u0627\u0646\u064A\u0629", "%d \u062B\u0627\u0646\u064A\u0629"], m: ["\u0623\u0642\u0644 \u0645\u0646 \u062F\u0642\u064A\u0642\u0629", "\u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629", ["\u062F\u0642\u064A\u0642\u062A\u0627\u0646", "\u062F\u0642\u064A\u0642\u062A\u064A\u0646"], "%d \u062F\u0642\u0627\u0626\u0642", "%d \u062F\u0642\u064A\u0642\u0629", "%d \u062F\u0642\u064A\u0642\u0629"], h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629", ["\u0633\u0627\u0639\u062A\u0627\u0646", "\u0633\u0627\u0639\u062A\u064A\u0646"], "%d \u0633\u0627\u0639\u0627\u062A", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"], d: ["\u0623\u0642\u0644 \u0645\u0646 \u064A\u0648\u0645", "\u064A\u0648\u0645 \u0648\u0627\u062D\u062F", ["\u064A\u0648\u0645\u0627\u0646", "\u064A\u0648\u0645\u064A\u0646"], "%d \u0623\u064A\u0627\u0645", "%d \u064A\u0648\u0645\u064B\u0627", "%d \u064A\u0648\u0645"], M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062D\u062F", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064A\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"], y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062D\u062F", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064A\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064B\u0627", "%d \u0639\u0627\u0645"] },
      Xt = function Xt(r) {
    return function (e, a, t, s) {
      var n = qt(e),
          d = Qt[r][qt(e)];return 2 === n && (d = d[a ? 0 : 1]), d.replace(/%d/i, e);
    };
  },
      es = ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"];l.defineLocale("ar", { months: es, monthsShort: es, weekdays: "\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062B\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A".split("_"), weekdaysShort: "\u0623\u062D\u062F_\u0625\u062B\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A".split("_"), weekdaysMin: "\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/\u200FM/\u200FYYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0635|\u0645/, isPM: function isPM(e) {
      return "\u0645" === e;
    }, meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0635" : "\u0645";
    }, calendar: { sameDay: "[\u0627\u0644\u064A\u0648\u0645 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063A\u062F\u064B\u0627 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0628\u0639\u062F %s", past: "\u0645\u0646\u0630 %s", s: Xt("s"), ss: Xt("s"), m: Xt("m"), mm: Xt("m"), h: Xt("h"), hh: Xt("h"), d: Xt("d"), dd: Xt("d"), M: Xt("M"), MM: Xt("M"), y: Xt("y"), yy: Xt("y") }, preparse: function preparse(e) {
      return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function (e) {
        return Bt[e];
      }).replace(/\u060c/g, ",");
    }, postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return Zt[e];
      }).replace(/,/g, "\u060C");
    }, week: { dow: 6, doy: 12 } });var as = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-\xfcnc\xfc", 4: "-\xfcnc\xfc", 100: "-\xfcnc\xfc", 6: "-nc\u0131", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-\u0131nc\u0131", 90: "-\u0131nc\u0131" };function ts(e, a, t) {
    var s, n;return "m" === t ? a ? "\u0445\u0432\u0456\u043B\u0456\u043D\u0430" : "\u0445\u0432\u0456\u043B\u0456\u043D\u0443" : "h" === t ? a ? "\u0433\u0430\u0434\u0437\u0456\u043D\u0430" : "\u0433\u0430\u0434\u0437\u0456\u043D\u0443" : e + " " + (s = +e, n = { ss: a ? "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434" : "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434", mm: a ? "\u0445\u0432\u0456\u043B\u0456\u043D\u0430_\u0445\u0432\u0456\u043B\u0456\u043D\u044B_\u0445\u0432\u0456\u043B\u0456\u043D" : "\u0445\u0432\u0456\u043B\u0456\u043D\u0443_\u0445\u0432\u0456\u043B\u0456\u043D\u044B_\u0445\u0432\u0456\u043B\u0456\u043D", hh: a ? "\u0433\u0430\u0434\u0437\u0456\u043D\u0430_\u0433\u0430\u0434\u0437\u0456\u043D\u044B_\u0433\u0430\u0434\u0437\u0456\u043D" : "\u0433\u0430\u0434\u0437\u0456\u043D\u0443_\u0433\u0430\u0434\u0437\u0456\u043D\u044B_\u0433\u0430\u0434\u0437\u0456\u043D", dd: "\u0434\u0437\u0435\u043D\u044C_\u0434\u043D\u0456_\u0434\u0437\u0451\u043D", MM: "\u043C\u0435\u0441\u044F\u0446_\u043C\u0435\u0441\u044F\u0446\u044B_\u043C\u0435\u0441\u044F\u0446\u0430\u045E", yy: "\u0433\u043E\u0434_\u0433\u0430\u0434\u044B_\u0433\u0430\u0434\u043E\u045E" }[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : 2 <= s % 10 && s % 10 <= 4 && (s % 100 < 10 || 20 <= s % 100) ? n[1] : n[2]);
  }l.defineLocale("az", { months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekdays: "Bazar_Bazar ert\u0259si_\xC7\u0259r\u015F\u0259nb\u0259 ax\u015Fam\u0131_\xC7\u0259r\u015F\u0259nb\u0259_C\xFCm\u0259 ax\u015Fam\u0131_C\xFCm\u0259_\u015E\u0259nb\u0259".split("_"), weekdaysShort: "Baz_BzE_\xC7Ax_\xC7\u0259r_CAx_C\xFCm_\u015E\u0259n".split("_"), weekdaysMin: "Bz_BE_\xC7A_\xC7\u0259_CA_C\xFC_\u015E\u0259".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bug\xfcn saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT", lastDay: "[d\xFCn\u0259n] LT", lastWeek: "[ke\xE7\u0259n h\u0259ft\u0259] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s \u0259vv\u0259l", s: "birne\xE7\u0259 saniy\u0259", ss: "%d saniy\u0259", m: "bir d\u0259qiq\u0259", mm: "%d d\u0259qiq\u0259", h: "bir saat", hh: "%d saat", d: "bir g\xfcn", dd: "%d g\xfcn", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, meridiemParse: /gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/, isPM: function isPM(e) {
      return (/^(g\xfcnd\xfcz|ax\u015fam)$/.test(e)
      );
    }, meridiem: function meridiem(e, a, t) {
      return e < 4 ? "gec\u0259" : e < 12 ? "s\u0259h\u0259r" : e < 17 ? "g\xfcnd\xfcz" : "ax\u015Fam";
    }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/, ordinal: function ordinal(e) {
      if (0 === e) return e + "-\u0131nc\u0131";var a = e % 10;return e + (as[a] || as[e % 100 - a] || as[100 <= e ? 100 : null]);
    }, week: { dow: 1, doy: 7 } }), l.defineLocale("be", { months: { format: "\u0441\u0442\u0443\u0434\u0437\u0435\u043D\u044F_\u043B\u044E\u0442\u0430\u0433\u0430_\u0441\u0430\u043A\u0430\u0432\u0456\u043A\u0430_\u043A\u0440\u0430\u0441\u0430\u0432\u0456\u043A\u0430_\u0442\u0440\u0430\u045E\u043D\u044F_\u0447\u044D\u0440\u0432\u0435\u043D\u044F_\u043B\u0456\u043F\u0435\u043D\u044F_\u0436\u043D\u0456\u045E\u043D\u044F_\u0432\u0435\u0440\u0430\u0441\u043D\u044F_\u043A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A\u0430_\u043B\u0456\u0441\u0442\u0430\u043F\u0430\u0434\u0430_\u0441\u043D\u0435\u0436\u043D\u044F".split("_"), standalone: "\u0441\u0442\u0443\u0434\u0437\u0435\u043D\u044C_\u043B\u044E\u0442\u044B_\u0441\u0430\u043A\u0430\u0432\u0456\u043A_\u043A\u0440\u0430\u0441\u0430\u0432\u0456\u043A_\u0442\u0440\u0430\u0432\u0435\u043D\u044C_\u0447\u044D\u0440\u0432\u0435\u043D\u044C_\u043B\u0456\u043F\u0435\u043D\u044C_\u0436\u043D\u0456\u0432\u0435\u043D\u044C_\u0432\u0435\u0440\u0430\u0441\u0435\u043D\u044C_\u043A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A_\u043B\u0456\u0441\u0442\u0430\u043F\u0430\u0434_\u0441\u043D\u0435\u0436\u0430\u043D\u044C".split("_") }, monthsShort: "\u0441\u0442\u0443\u0434_\u043B\u044E\u0442_\u0441\u0430\u043A_\u043A\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044D\u0440\u0432_\u043B\u0456\u043F_\u0436\u043D\u0456\u0432_\u0432\u0435\u0440_\u043A\u0430\u0441\u0442_\u043B\u0456\u0441\u0442_\u0441\u043D\u0435\u0436".split("_"), weekdays: { format: "\u043D\u044F\u0434\u0437\u0435\u043B\u044E_\u043F\u0430\u043D\u044F\u0434\u0437\u0435\u043B\u0430\u043A_\u0430\u045E\u0442\u043E\u0440\u0430\u043A_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043F\u044F\u0442\u043D\u0456\u0446\u0443_\u0441\u0443\u0431\u043E\u0442\u0443".split("_"), standalone: "\u043D\u044F\u0434\u0437\u0435\u043B\u044F_\u043F\u0430\u043D\u044F\u0434\u0437\u0435\u043B\u0430\u043A_\u0430\u045E\u0442\u043E\u0440\u0430\u043A_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043F\u044F\u0442\u043D\u0456\u0446\u0430_\u0441\u0443\u0431\u043E\u0442\u0430".split("_"), isFormat: /\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/ }, weekdaysShort: "\u043D\u0434_\u043F\u043D_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043F\u0442_\u0441\u0431".split("_"), weekdaysMin: "\u043D\u0434_\u043F\u043D_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043F\u0442_\u0441\u0431".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0433.", LLL: "D MMMM YYYY \u0433., HH:mm", LLLL: "dddd, D MMMM YYYY \u0433., HH:mm" }, calendar: { sameDay: "[\u0421\u0451\u043D\u043D\u044F \u045E] LT", nextDay: "[\u0417\u0430\u045E\u0442\u0440\u0430 \u045E] LT", lastDay: "[\u0423\u0447\u043E\u0440\u0430 \u045E] LT", nextWeek: function nextWeek() {
        return "[\u0423] dddd [\u045E] LT";
      }, lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:case 5:case 6:
            return "[\u0423 \u043C\u0456\u043D\u0443\u043B\u0443\u044E] dddd [\u045E] LT";case 1:case 2:case 4:
            return "[\u0423 \u043C\u0456\u043D\u0443\u043B\u044B] dddd [\u045E] LT";}
      }, sameElse: "L" }, relativeTime: { future: "\u043F\u0440\u0430\u0437 %s", past: "%s \u0442\u0430\u043C\u0443", s: "\u043D\u0435\u043A\u0430\u043B\u044C\u043A\u0456 \u0441\u0435\u043A\u0443\u043D\u0434", m: ts, mm: ts, h: ts, hh: ts, d: "\u0434\u0437\u0435\u043D\u044C", dd: ts, M: "\u043C\u0435\u0441\u044F\u0446", MM: ts, y: "\u0433\u043E\u0434", yy: ts }, meridiemParse: /\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/, isPM: function isPM(e) {
      return (/^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(e)
      );
    }, meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u043D\u043E\u0447\u044B" : e < 12 ? "\u0440\u0430\u043D\u0456\u0446\u044B" : e < 17 ? "\u0434\u043D\u044F" : "\u0432\u0435\u0447\u0430\u0440\u0430";
    }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/, ordinal: function ordinal(e, a) {
      switch (a) {case "M":case "d":case "DDD":case "w":case "W":
          return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-\u044B" : e + "-\u0456";case "D":
          return e + "-\u0433\u0430";default:
          return e;}
    }, week: { dow: 1, doy: 7 } }), l.defineLocale("bg", { months: "\u044F\u043D\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0438\u043B_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438_\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438_\u043D\u043E\u0435\u043C\u0432\u0440\u0438_\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438".split("_"), monthsShort: "\u044F\u043D\u0440_\u0444\u0435\u0432_\u043C\u0430\u0440_\u0430\u043F\u0440_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433_\u0441\u0435\u043F_\u043E\u043A\u0442_\u043D\u043E\u0435_\u0434\u0435\u043A".split("_"), weekdays: "\u043D\u0435\u0434\u0435\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u044F\u0434\u0430_\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A_\u043F\u0435\u0442\u044A\u043A_\u0441\u044A\u0431\u043E\u0442\u0430".split("_"), weekdaysShort: "\u043D\u0435\u0434_\u043F\u043E\u043D_\u0432\u0442\u043E_\u0441\u0440\u044F_\u0447\u0435\u0442_\u043F\u0435\u0442_\u0441\u044A\u0431".split("_"), weekdaysMin: "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[\u0414\u043D\u0435\u0441 \u0432] LT", nextDay: "[\u0423\u0442\u0440\u0435 \u0432] LT", nextWeek: "dddd [\u0432] LT", lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:case 6:
            return "[\u0412 \u0438\u0437\u043C\u0438\u043D\u0430\u043B\u0430\u0442\u0430] dddd [\u0432] LT";case 1:case 2:case 4:case 5:
            return "[\u0412 \u0438\u0437\u043C\u0438\u043D\u0430\u043B\u0438\u044F] dddd [\u0432] LT";}
      }, sameElse: "L" }, relativeTime: { future: "\u0441\u043B\u0435\u0434 %s", past: "\u043F\u0440\u0435\u0434\u0438 %s", s: "\u043D\u044F\u043A\u043E\u043B\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434\u0438", ss: "%d \u0441\u0435\u043A\u0443\u043D\u0434\u0438", m: "\u043C\u0438\u043D\u0443\u0442\u0430", mm: "%d \u043C\u0438\u043D\u0443\u0442\u0438", h: "\u0447\u0430\u0441", hh: "%d \u0447\u0430\u0441\u0430", d: "\u0434\u0435\u043D", dd: "%d \u0434\u043D\u0438", M: "\u043C\u0435\u0441\u0435\u0446", MM: "%d \u043C\u0435\u0441\u0435\u0446\u0430", y: "\u0433\u043E\u0434\u0438\u043D\u0430", yy: "%d \u0433\u043E\u0434\u0438\u043D\u0438" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/, ordinal: function ordinal(e) {
      var a = e % 10,
          t = e % 100;return 0 === e ? e + "-\u0435\u0432" : 0 === t ? e + "-\u0435\u043D" : 10 < t && t < 20 ? e + "-\u0442\u0438" : 1 === a ? e + "-\u0432\u0438" : 2 === a ? e + "-\u0440\u0438" : 7 === a || 8 === a ? e + "-\u043C\u0438" : e + "-\u0442\u0438";
    }, week: { dow: 1, doy: 7 } }), l.defineLocale("bm", { months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_M\u025Bkalo_Zuw\u025Bnkalo_Zuluyekalo_Utikalo_S\u025Btanburukalo_\u0254kut\u0254burukalo_Nowanburukalo_Desanburukalo".split("_"), monthsShort: "Zan_Few_Mar_Awi_M\u025B_Zuw_Zul_Uti_S\u025Bt_\u0254ku_Now_Des".split("_"), weekdays: "Kari_Nt\u025Bn\u025Bn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"), weekdaysShort: "Kar_Nt\u025B_Tar_Ara_Ala_Jum_Sib".split("_"), weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM [tile] D [san] YYYY", LLL: "MMMM [tile] D [san] YYYY [l\u025Br\u025B] HH:mm", LLLL: "dddd MMMM [tile] D [san] YYYY [l\u025Br\u025B] HH:mm" }, calendar: { sameDay: "[Bi l\u025Br\u025B] LT", nextDay: "[Sini l\u025Br\u025B] LT", nextWeek: "dddd [don l\u025Br\u025B] LT", lastDay: "[Kunu l\u025Br\u025B] LT", lastWeek: "dddd [t\u025Bm\u025Bnen l\u025Br\u025B] LT", sameElse: "L" }, relativeTime: { future: "%s k\u0254n\u0254", past: "a b\u025B %s b\u0254", s: "sanga dama dama", ss: "sekondi %d", m: "miniti kelen", mm: "miniti %d", h: "l\u025Br\u025B kelen", hh: "l\u025Br\u025B %d", d: "tile kelen", dd: "tile %d", M: "kalo kelen", MM: "kalo %d", y: "san kelen", yy: "san %d" }, week: { dow: 1, doy: 4 } });var ss = { 1: "\u09E7", 2: "\u09E8", 3: "\u09E9", 4: "\u09EA", 5: "\u09EB", 6: "\u09EC", 7: "\u09ED", 8: "\u09EE", 9: "\u09EF", 0: "\u09E6" },
      ns = { "\u09E7": "1", "\u09E8": "2", "\u09E9": "3", "\u09EA": "4", "\u09EB": "5", "\u09EC": "6", "\u09ED": "7", "\u09EE": "8", "\u09EF": "9", "\u09E6": "0" };l.defineLocale("bn", { months: "\u099C\u09BE\u09A8\u09C1\u09DF\u09BE\u09B0\u09C0_\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1\u09DF\u09BE\u09B0\u09BF_\u09AE\u09BE\u09B0\u09CD\u099A_\u098F\u09AA\u09CD\u09B0\u09BF\u09B2_\u09AE\u09C7_\u099C\u09C1\u09A8_\u099C\u09C1\u09B2\u09BE\u0987_\u0986\u0997\u09B8\u09CD\u099F_\u09B8\u09C7\u09AA\u09CD\u099F\u09C7\u09AE\u09CD\u09AC\u09B0_\u0985\u0995\u09CD\u099F\u09CB\u09AC\u09B0_\u09A8\u09AD\u09C7\u09AE\u09CD\u09AC\u09B0_\u09A1\u09BF\u09B8\u09C7\u09AE\u09CD\u09AC\u09B0".split("_"), monthsShort: "\u099C\u09BE\u09A8\u09C1_\u09AB\u09C7\u09AC_\u09AE\u09BE\u09B0\u09CD\u099A_\u098F\u09AA\u09CD\u09B0_\u09AE\u09C7_\u099C\u09C1\u09A8_\u099C\u09C1\u09B2_\u0986\u0997_\u09B8\u09C7\u09AA\u09CD\u099F_\u0985\u0995\u09CD\u099F\u09CB_\u09A8\u09AD\u09C7_\u09A1\u09BF\u09B8\u09C7".split("_"), weekdays: "\u09B0\u09AC\u09BF\u09AC\u09BE\u09B0_\u09B8\u09CB\u09AE\u09AC\u09BE\u09B0_\u09AE\u0999\u09CD\u0997\u09B2\u09AC\u09BE\u09B0_\u09AC\u09C1\u09A7\u09AC\u09BE\u09B0_\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF\u09AC\u09BE\u09B0_\u09B6\u09C1\u0995\u09CD\u09B0\u09AC\u09BE\u09B0_\u09B6\u09A8\u09BF\u09AC\u09BE\u09B0".split("_"), weekdaysShort: "\u09B0\u09AC\u09BF_\u09B8\u09CB\u09AE_\u09AE\u0999\u09CD\u0997\u09B2_\u09AC\u09C1\u09A7_\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF_\u09B6\u09C1\u0995\u09CD\u09B0_\u09B6\u09A8\u09BF".split("_"), weekdaysMin: "\u09B0\u09AC\u09BF_\u09B8\u09CB\u09AE_\u09AE\u0999\u09CD\u0997_\u09AC\u09C1\u09A7_\u09AC\u09C3\u09B9\u0983_\u09B6\u09C1\u0995\u09CD\u09B0_\u09B6\u09A8\u09BF".split("_"), longDateFormat: { LT: "A h:mm \u09B8\u09AE\u09DF", LTS: "A h:mm:ss \u09B8\u09AE\u09DF", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u09B8\u09AE\u09DF", LLLL: "dddd, D MMMM YYYY, A h:mm \u09B8\u09AE\u09DF" }, calendar: { sameDay: "[\u0986\u099C] LT", nextDay: "[\u0986\u0997\u09BE\u09AE\u09C0\u0995\u09BE\u09B2] LT", nextWeek: "dddd, LT", lastDay: "[\u0997\u09A4\u0995\u09BE\u09B2] LT", lastWeek: "[\u0997\u09A4] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u09AA\u09B0\u09C7", past: "%s \u0986\u0997\u09C7", s: "\u0995\u09DF\u09C7\u0995 \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1", ss: "%d \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1", m: "\u098F\u0995 \u09AE\u09BF\u09A8\u09BF\u099F", mm: "%d \u09AE\u09BF\u09A8\u09BF\u099F", h: "\u098F\u0995 \u0998\u09A8\u09CD\u099F\u09BE", hh: "%d \u0998\u09A8\u09CD\u099F\u09BE", d: "\u098F\u0995 \u09A6\u09BF\u09A8", dd: "%d \u09A6\u09BF\u09A8", M: "\u098F\u0995 \u09AE\u09BE\u09B8", MM: "%d \u09AE\u09BE\u09B8", y: "\u098F\u0995 \u09AC\u099B\u09B0", yy: "%d \u09AC\u099B\u09B0" }, preparse: function preparse(e) {
      return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, function (e) {
        return ns[e];
      });
    }, postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return ss[e];
      });
    }, meridiemParse: /\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u09B0\u09BE\u09A4" === a && 4 <= e || "\u09A6\u09C1\u09AA\u09C1\u09B0" === a && e < 5 || "\u09AC\u09BF\u0995\u09BE\u09B2" === a ? e + 12 : e;
    }, meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u09B0\u09BE\u09A4" : e < 10 ? "\u09B8\u0995\u09BE\u09B2" : e < 17 ? "\u09A6\u09C1\u09AA\u09C1\u09B0" : e < 20 ? "\u09AC\u09BF\u0995\u09BE\u09B2" : "\u09B0\u09BE\u09A4";
    }, week: { dow: 0, doy: 6 } });var ds = { 1: "\u0F21", 2: "\u0F22", 3: "\u0F23", 4: "\u0F24", 5: "\u0F25", 6: "\u0F26", 7: "\u0F27", 8: "\u0F28", 9: "\u0F29", 0: "\u0F20" },
      rs = { "\u0F21": "1", "\u0F22": "2", "\u0F23": "3", "\u0F24": "4", "\u0F25": "5", "\u0F26": "6", "\u0F27": "7", "\u0F28": "8", "\u0F29": "9", "\u0F20": "0" };function _s(e, a, t) {
    var s, n, d;return e + " " + (s = { mm: "munutenn", MM: "miz", dd: "devezh" }[t], 2 !== e ? s : void 0 !== (d = { m: "v", b: "v", d: "z" })[(n = s).charAt(0)] ? d[n.charAt(0)] + n.substring(1) : n);
  }function is(e, a, t) {
    var s = e + " ";switch (t) {case "ss":
        return s += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";case "m":
        return a ? "jedna minuta" : "jedne minute";case "mm":
        return s += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";case "h":
        return a ? "jedan sat" : "jednog sata";case "hh":
        return s += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";case "dd":
        return s += 1 === e ? "dan" : "dana";case "MM":
        return s += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";case "yy":
        return s += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina";}
  }l.defineLocale("bo", { months: "\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F51\u0F44\u0F0B\u0F54\u0F7C_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F42\u0F66\u0F74\u0F58\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F5E\u0F72\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F63\u0F94\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F51\u0FB2\u0F74\u0F42\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F51\u0F74\u0F53\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F62\u0F92\u0FB1\u0F51\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F51\u0F42\u0F74\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F42\u0F45\u0F72\u0F42\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54".split("_"), monthsShort: "\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F51\u0F44\u0F0B\u0F54\u0F7C_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F42\u0F66\u0F74\u0F58\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F5E\u0F72\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F63\u0F94\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F51\u0FB2\u0F74\u0F42\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F51\u0F74\u0F53\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F62\u0F92\u0FB1\u0F51\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F51\u0F42\u0F74\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F42\u0F45\u0F72\u0F42\u0F0B\u0F54_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54".split("_"), weekdays: "\u0F42\u0F5F\u0F60\u0F0B\u0F49\u0F72\u0F0B\u0F58\u0F0B_\u0F42\u0F5F\u0F60\u0F0B\u0F5F\u0FB3\u0F0B\u0F56\u0F0B_\u0F42\u0F5F\u0F60\u0F0B\u0F58\u0F72\u0F42\u0F0B\u0F51\u0F58\u0F62\u0F0B_\u0F42\u0F5F\u0F60\u0F0B\u0F63\u0FB7\u0F42\u0F0B\u0F54\u0F0B_\u0F42\u0F5F\u0F60\u0F0B\u0F55\u0F74\u0F62\u0F0B\u0F56\u0F74_\u0F42\u0F5F\u0F60\u0F0B\u0F54\u0F0B\u0F66\u0F44\u0F66\u0F0B_\u0F42\u0F5F\u0F60\u0F0B\u0F66\u0FA4\u0F7A\u0F53\u0F0B\u0F54\u0F0B".split("_"), weekdaysShort: "\u0F49\u0F72\u0F0B\u0F58\u0F0B_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B_\u0F58\u0F72\u0F42\u0F0B\u0F51\u0F58\u0F62\u0F0B_\u0F63\u0FB7\u0F42\u0F0B\u0F54\u0F0B_\u0F55\u0F74\u0F62\u0F0B\u0F56\u0F74_\u0F54\u0F0B\u0F66\u0F44\u0F66\u0F0B_\u0F66\u0FA4\u0F7A\u0F53\u0F0B\u0F54\u0F0B".split("_"), weekdaysMin: "\u0F49\u0F72\u0F0B\u0F58\u0F0B_\u0F5F\u0FB3\u0F0B\u0F56\u0F0B_\u0F58\u0F72\u0F42\u0F0B\u0F51\u0F58\u0F62\u0F0B_\u0F63\u0FB7\u0F42\u0F0B\u0F54\u0F0B_\u0F55\u0F74\u0F62\u0F0B\u0F56\u0F74_\u0F54\u0F0B\u0F66\u0F44\u0F66\u0F0B_\u0F66\u0FA4\u0F7A\u0F53\u0F0B\u0F54\u0F0B".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[\u0F51\u0F72\u0F0B\u0F62\u0F72\u0F44] LT", nextDay: "[\u0F66\u0F44\u0F0B\u0F49\u0F72\u0F53] LT", nextWeek: "[\u0F56\u0F51\u0F74\u0F53\u0F0B\u0F55\u0FB2\u0F42\u0F0B\u0F62\u0F97\u0F7A\u0F66\u0F0B\u0F58], LT", lastDay: "[\u0F41\u0F0B\u0F66\u0F44] LT", lastWeek: "[\u0F56\u0F51\u0F74\u0F53\u0F0B\u0F55\u0FB2\u0F42\u0F0B\u0F58\u0F50\u0F60\u0F0B\u0F58] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0F63\u0F0B", past: "%s \u0F66\u0F94\u0F53\u0F0B\u0F63", s: "\u0F63\u0F58\u0F0B\u0F66\u0F44", ss: "%d \u0F66\u0F90\u0F62\u0F0B\u0F46\u0F0D", m: "\u0F66\u0F90\u0F62\u0F0B\u0F58\u0F0B\u0F42\u0F45\u0F72\u0F42", mm: "%d \u0F66\u0F90\u0F62\u0F0B\u0F58", h: "\u0F46\u0F74\u0F0B\u0F5A\u0F7C\u0F51\u0F0B\u0F42\u0F45\u0F72\u0F42", hh: "%d \u0F46\u0F74\u0F0B\u0F5A\u0F7C\u0F51", d: "\u0F49\u0F72\u0F53\u0F0B\u0F42\u0F45\u0F72\u0F42", dd: "%d \u0F49\u0F72\u0F53\u0F0B", M: "\u0F5F\u0FB3\u0F0B\u0F56\u0F0B\u0F42\u0F45\u0F72\u0F42", MM: "%d \u0F5F\u0FB3\u0F0B\u0F56", y: "\u0F63\u0F7C\u0F0B\u0F42\u0F45\u0F72\u0F42", yy: "%d \u0F63\u0F7C" }, preparse: function preparse(e) {
      return e.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g, function (e) {
        return rs[e];
      });
    }, postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return ds[e];
      });
    }, meridiemParse: /\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0F58\u0F5A\u0F53\u0F0B\u0F58\u0F7C" === a && 4 <= e || "\u0F49\u0F72\u0F53\u0F0B\u0F42\u0F74\u0F44" === a && e < 5 || "\u0F51\u0F42\u0F7C\u0F44\u0F0B\u0F51\u0F42" === a ? e + 12 : e;
    }, meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u0F58\u0F5A\u0F53\u0F0B\u0F58\u0F7C" : e < 10 ? "\u0F5E\u0F7C\u0F42\u0F66\u0F0B\u0F40\u0F66" : e < 17 ? "\u0F49\u0F72\u0F53\u0F0B\u0F42\u0F74\u0F44" : e < 20 ? "\u0F51\u0F42\u0F7C\u0F44\u0F0B\u0F51\u0F42" : "\u0F58\u0F5A\u0F53\u0F0B\u0F58\u0F7C";
    }, week: { dow: 0, doy: 6 } }), l.defineLocale("br", { months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"), weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" }, calendar: { sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L" }, relativeTime: { future: "a-benn %s", past: "%s 'zo", s: "un nebeud segondenno\xf9", ss: "%d eilenn", m: "ur vunutenn", mm: _s, h: "un eur", hh: "%d eur", d: "un devezh", dd: _s, M: "ur miz", MM: _s, y: "ur bloaz", yy: function yy(e) {
        switch (function e(a) {
          return 9 < a ? e(a % 10) : a;
        }(e)) {case 1:case 3:case 4:case 5:case 9:
            return e + " bloaz";default:
            return e + " vloaz";}
      } }, dayOfMonthOrdinalParse: /\d{1,2}(a\xf1|vet)/, ordinal: function ordinal(e) {
      return e + (1 === e ? "a\xf1" : "vet");
    }, week: { dow: 1, doy: 4 } }), l.defineLocale("bs", { months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._\u010Det._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_\u010De_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[u] [nedjelju] [u] LT";case 3:
            return "[u] [srijedu] [u] LT";case 6:
            return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
            return "[u] dddd [u] LT";}
      }, lastDay: "[ju\u010Der u] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:
            return "[pro\u0161lu] dddd [u] LT";case 6:
            return "[pro\u0161le] [subote] [u] LT";case 1:case 2:case 4:case 5:
            return "[pro\u0161li] dddd [u] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", ss: is, m: is, mm: is, h: is, hh: is, d: "dan", dd: is, M: "mjesec", MM: is, y: "godinu", yy: is }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }), l.defineLocale("ca", { months: { standalone: "gener_febrer_mar\xe7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), format: "de gener_de febrer_de mar\xe7_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"), isFormat: /D[oD]?(\s)+MMMM/ }, monthsShort: "gen._febr._mar\xe7_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"), monthsParseExact: !0, weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", ll: "D MMM YYYY", LLL: "D MMMM [de] YYYY [a les] H:mm", lll: "D MMM YYYY, H:mm", LLLL: "dddd D MMMM [de] YYYY [a les] H:mm", llll: "ddd D MMM YYYY, H:mm" }, calendar: { sameDay: function sameDay() {
        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, nextDay: function nextDay() {
        return "[dem\xe0 a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, nextWeek: function nextWeek() {
        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, lastDay: function lastDay() {
        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, lastWeek: function lastWeek() {
        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, sameElse: "L" }, relativeTime: { future: "d'aqu\xed %s", past: "fa %s", s: "uns segons", ss: "%d segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|\xe8|a)/, ordinal: function ordinal(e, a) {
      var t = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "\xe8";return "w" !== a && "W" !== a || (t = "a"), e + t;
    }, week: { dow: 1, doy: 4 } });var os = "leden_\xFAnor_b\u0159ezen_duben_kv\u011Bten_\u010Derven_\u010Dervenec_srpen_z\xE1\u0159\xED_\u0159\xEDjen_listopad_prosinec".split("_"),
      ms = "led_\xFAno_b\u0159e_dub_kv\u011B_\u010Dvn_\u010Dvc_srp_z\xE1\u0159_\u0159\xEDj_lis_pro".split("_");function us(e) {
    return 1 < e && e < 5 && 1 != ~~(e / 10);
  }function ls(e, a, t, s) {
    var n = e + " ";switch (t) {case "s":
        return a || s ? "p\xe1r sekund" : "p\xe1r sekundami";case "ss":
        return a || s ? n + (us(e) ? "sekundy" : "sekund") : n + "sekundami";break;case "m":
        return a ? "minuta" : s ? "minutu" : "minutou";case "mm":
        return a || s ? n + (us(e) ? "minuty" : "minut") : n + "minutami";break;case "h":
        return a ? "hodina" : s ? "hodinu" : "hodinou";case "hh":
        return a || s ? n + (us(e) ? "hodiny" : "hodin") : n + "hodinami";break;case "d":
        return a || s ? "den" : "dnem";case "dd":
        return a || s ? n + (us(e) ? "dny" : "dn\xed") : n + "dny";break;case "M":
        return a || s ? "m\u011Bs\xEDc" : "m\u011Bs\xEDcem";case "MM":
        return a || s ? n + (us(e) ? "m\u011Bs\xEDce" : "m\u011Bs\xEDc\u016F") : n + "m\u011Bs\xEDci";break;case "y":
        return a || s ? "rok" : "rokem";case "yy":
        return a || s ? n + (us(e) ? "roky" : "let") : n + "lety";break;}
  }function Ms(e, a, t, s) {
    var n = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] };return a ? n[t][0] : n[t][1];
  }function hs(e, a, t, s) {
    var n = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] };return a ? n[t][0] : n[t][1];
  }function Ls(e, a, t, s) {
    var n = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] };return a ? n[t][0] : n[t][1];
  }l.defineLocale("cs", { months: os, monthsShort: ms, monthsParse: function (e, a) {
      var t,
          s = [];for (t = 0; t < 12; t++) {
        s[t] = new RegExp("^" + e[t] + "$|^" + a[t] + "$", "i");
      }return s;
    }(os, ms), shortMonthsParse: function (e) {
      var a,
          t = [];for (a = 0; a < 12; a++) {
        t[a] = new RegExp("^" + e[a] + "$", "i");
      }return t;
    }(ms), longMonthsParse: function (e) {
      var a,
          t = [];for (a = 0; a < 12; a++) {
        t[a] = new RegExp("^" + e[a] + "$", "i");
      }return t;
    }(os), weekdays: "ned\u011Ble_pond\u011Bl\xED_\xFAter\xFD_st\u0159eda_\u010Dtvrtek_p\xE1tek_sobota".split("_"), weekdaysShort: "ne_po_\xFAt_st_\u010Dt_p\xE1_so".split("_"), weekdaysMin: "ne_po_\xFAt_st_\u010Dt_p\xE1_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, calendar: { sameDay: "[dnes v] LT", nextDay: "[z\xedtra v] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[v ned\u011Bli v] LT";case 1:case 2:
            return "[v] dddd [v] LT";case 3:
            return "[ve st\u0159edu v] LT";case 4:
            return "[ve \u010Dtvrtek v] LT";case 5:
            return "[v p\xe1tek v] LT";case 6:
            return "[v sobotu v] LT";}
      }, lastDay: "[v\u010Dera v] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[minulou ned\u011Bli v] LT";case 1:case 2:
            return "[minul\xe9] dddd [v] LT";case 3:
            return "[minulou st\u0159edu v] LT";case 4:case 5:
            return "[minul\xfd] dddd [v] LT";case 6:
            return "[minulou sobotu v] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "p\u0159ed %s", s: ls, ss: ls, m: ls, mm: ls, h: ls, hh: ls, d: ls, dd: ls, M: ls, MM: ls, y: ls, yy: ls }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("cv", { months: "\u043A\u04D1\u0440\u043B\u0430\u0447_\u043D\u0430\u0440\u04D1\u0441_\u043F\u0443\u0448_\u0430\u043A\u0430_\u043C\u0430\u0439_\u04AB\u04D7\u0440\u0442\u043C\u0435_\u0443\u0442\u04D1_\u04AB\u0443\u0440\u043B\u0430_\u0430\u0432\u04D1\u043D_\u044E\u043F\u0430_\u0447\u04F3\u043A_\u0440\u0430\u0448\u0442\u0430\u0432".split("_"), monthsShort: "\u043A\u04D1\u0440_\u043D\u0430\u0440_\u043F\u0443\u0448_\u0430\u043A\u0430_\u043C\u0430\u0439_\u04AB\u04D7\u0440_\u0443\u0442\u04D1_\u04AB\u0443\u0440_\u0430\u0432\u043D_\u044E\u043F\u0430_\u0447\u04F3\u043A_\u0440\u0430\u0448".split("_"), weekdays: "\u0432\u044B\u0440\u0441\u0430\u0440\u043D\u0438\u043A\u0443\u043D_\u0442\u0443\u043D\u0442\u0438\u043A\u0443\u043D_\u044B\u0442\u043B\u0430\u0440\u0438\u043A\u0443\u043D_\u044E\u043D\u043A\u0443\u043D_\u043A\u04D7\u04AB\u043D\u0435\u0440\u043D\u0438\u043A\u0443\u043D_\u044D\u0440\u043D\u0435\u043A\u0443\u043D_\u0448\u04D1\u043C\u0430\u0442\u043A\u0443\u043D".split("_"), weekdaysShort: "\u0432\u044B\u0440_\u0442\u0443\u043D_\u044B\u0442\u043B_\u044E\u043D_\u043A\u04D7\u04AB_\u044D\u0440\u043D_\u0448\u04D1\u043C".split("_"), weekdaysMin: "\u0432\u0440_\u0442\u043D_\u044B\u0442_\u044E\u043D_\u043A\u04AB_\u044D\u0440_\u0448\u043C".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [\u04AB\u0443\u043B\u0445\u0438] MMMM [\u0443\u0439\u04D1\u0445\u04D7\u043D] D[-\u043C\u04D7\u0448\u04D7]", LLL: "YYYY [\u04AB\u0443\u043B\u0445\u0438] MMMM [\u0443\u0439\u04D1\u0445\u04D7\u043D] D[-\u043C\u04D7\u0448\u04D7], HH:mm", LLLL: "dddd, YYYY [\u04AB\u0443\u043B\u0445\u0438] MMMM [\u0443\u0439\u04D1\u0445\u04D7\u043D] D[-\u043C\u04D7\u0448\u04D7], HH:mm" }, calendar: { sameDay: "[\u041F\u0430\u044F\u043D] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", nextDay: "[\u042B\u0440\u0430\u043D] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", lastDay: "[\u04D6\u043D\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", nextWeek: "[\u04AA\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", lastWeek: "[\u0418\u0440\u0442\u043D\u04D7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", sameElse: "L" }, relativeTime: { future: function future(e) {
        return e + (/\u0441\u0435\u0445\u0435\u0442$/i.exec(e) ? "\u0440\u0435\u043D" : /\u04ab\u0443\u043b$/i.exec(e) ? "\u0442\u0430\u043D" : "\u0440\u0430\u043D");
      }, past: "%s \u043A\u0430\u044F\u043B\u043B\u0430", s: "\u043F\u04D7\u0440-\u0438\u043A \u04AB\u0435\u043A\u043A\u0443\u043D\u0442", ss: "%d \u04AB\u0435\u043A\u043A\u0443\u043D\u0442", m: "\u043F\u04D7\u0440 \u043C\u0438\u043D\u0443\u0442", mm: "%d \u043C\u0438\u043D\u0443\u0442", h: "\u043F\u04D7\u0440 \u0441\u0435\u0445\u0435\u0442", hh: "%d \u0441\u0435\u0445\u0435\u0442", d: "\u043F\u04D7\u0440 \u043A\u0443\u043D", dd: "%d \u043A\u0443\u043D", M: "\u043F\u04D7\u0440 \u0443\u0439\u04D1\u0445", MM: "%d \u0443\u0439\u04D1\u0445", y: "\u043F\u04D7\u0440 \u04AB\u0443\u043B", yy: "%d \u04AB\u0443\u043B" }, dayOfMonthOrdinalParse: /\d{1,2}-\u043c\u04d7\u0448/, ordinal: "%d-\u043C\u04D7\u0448", week: { dow: 1, doy: 7 } }), l.defineLocale("cy", { months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L" }, relativeTime: { future: "mewn %s", past: "%s yn \xf4l", s: "ychydig eiliadau", ss: "%d eiliad", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" }, dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/, ordinal: function ordinal(e) {
      var a = "";return 20 < e ? a = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : 0 < e && (a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + a;
    }, week: { dow: 1, doy: 4 } }), l.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"), weekdaysShort: "s\xf8n_man_tir_ons_tor_fre_l\xf8r".split("_"), weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "p\xe5 dddd [kl.] LT", lastDay: "[i g\xe5r kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "f\xe5 sekunder", ss: "%d sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en m\xe5ned", MM: "%d m\xe5neder", y: "et \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("de-at", { months: "J\xe4nner_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "J\xe4n._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: Ms, mm: "%d Minuten", h: Ms, hh: "%d Stunden", d: Ms, dd: Ms, M: Ms, MM: Ms, y: Ms, yy: Ms }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("de-ch", { months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: hs, mm: "%d Minuten", h: hs, hh: "%d Stunden", d: hs, dd: hs, M: hs, MM: hs, y: hs, yy: hs }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("de", { months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: Ls, mm: "%d Minuten", h: Ls, hh: "%d Stunden", d: Ls, dd: Ls, M: Ls, MM: Ls, y: Ls, yy: Ls }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });var cs = ["\u0796\u07AC\u0782\u07AA\u0787\u07A6\u0783\u07A9", "\u078A\u07AC\u0784\u07B0\u0783\u07AA\u0787\u07A6\u0783\u07A9", "\u0789\u07A7\u0783\u07A8\u0797\u07AA", "\u0787\u07AD\u0795\u07B0\u0783\u07A9\u078D\u07AA", "\u0789\u07AD", "\u0796\u07AB\u0782\u07B0", "\u0796\u07AA\u078D\u07A6\u0787\u07A8", "\u0787\u07AF\u078E\u07A6\u0790\u07B0\u0793\u07AA", "\u0790\u07AC\u0795\u07B0\u0793\u07AC\u0789\u07B0\u0784\u07A6\u0783\u07AA", "\u0787\u07AE\u0786\u07B0\u0793\u07AF\u0784\u07A6\u0783\u07AA", "\u0782\u07AE\u0788\u07AC\u0789\u07B0\u0784\u07A6\u0783\u07AA", "\u0791\u07A8\u0790\u07AC\u0789\u07B0\u0784\u07A6\u0783\u07AA"],
      Ys = ["\u0787\u07A7\u078B\u07A8\u0787\u07B0\u078C\u07A6", "\u0780\u07AF\u0789\u07A6", "\u0787\u07A6\u0782\u07B0\u078E\u07A7\u0783\u07A6", "\u0784\u07AA\u078B\u07A6", "\u0784\u07AA\u0783\u07A7\u0790\u07B0\u078A\u07A6\u078C\u07A8", "\u0780\u07AA\u0786\u07AA\u0783\u07AA", "\u0780\u07AE\u0782\u07A8\u0780\u07A8\u0783\u07AA"];l.defineLocale("dv", { months: cs, monthsShort: cs, weekdays: Ys, weekdaysShort: Ys, weekdaysMin: "\u0787\u07A7\u078B\u07A8_\u0780\u07AF\u0789\u07A6_\u0787\u07A6\u0782\u07B0_\u0784\u07AA\u078B\u07A6_\u0784\u07AA\u0783\u07A7_\u0780\u07AA\u0786\u07AA_\u0780\u07AE\u0782\u07A8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0789\u0786|\u0789\u078a/, isPM: function isPM(e) {
      return "\u0789\u078A" === e;
    }, meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0789\u0786" : "\u0789\u078A";
    }, calendar: { sameDay: "[\u0789\u07A8\u0787\u07A6\u078B\u07AA] LT", nextDay: "[\u0789\u07A7\u078B\u07A6\u0789\u07A7] LT", nextWeek: "dddd LT", lastDay: "[\u0787\u07A8\u0787\u07B0\u0794\u07AC] LT", lastWeek: "[\u078A\u07A7\u0787\u07A8\u078C\u07AA\u0788\u07A8] dddd LT", sameElse: "L" }, relativeTime: { future: "\u078C\u07AC\u0783\u07AD\u078E\u07A6\u0787\u07A8 %s", past: "\u0786\u07AA\u0783\u07A8\u0782\u07B0 %s", s: "\u0790\u07A8\u0786\u07AA\u0782\u07B0\u078C\u07AA\u0786\u07AE\u0785\u07AC\u0787\u07B0", ss: "d% \u0790\u07A8\u0786\u07AA\u0782\u07B0\u078C\u07AA", m: "\u0789\u07A8\u0782\u07A8\u0793\u07AC\u0787\u07B0", mm: "\u0789\u07A8\u0782\u07A8\u0793\u07AA %d", h: "\u078E\u07A6\u0791\u07A8\u0787\u07A8\u0783\u07AC\u0787\u07B0", hh: "\u078E\u07A6\u0791\u07A8\u0787\u07A8\u0783\u07AA %d", d: "\u078B\u07AA\u0788\u07A6\u0780\u07AC\u0787\u07B0", dd: "\u078B\u07AA\u0788\u07A6\u0790\u07B0 %d", M: "\u0789\u07A6\u0780\u07AC\u0787\u07B0", MM: "\u0789\u07A6\u0790\u07B0 %d", y: "\u0787\u07A6\u0780\u07A6\u0783\u07AC\u0787\u07B0", yy: "\u0787\u07A6\u0780\u07A6\u0783\u07AA %d" }, preparse: function preparse(e) {
      return e.replace(/\u060c/g, ",");
    }, postformat: function postformat(e) {
      return e.replace(/,/g, "\u060C");
    }, week: { dow: 7, doy: 12 } }), l.defineLocale("el", { monthsNominativeEl: "\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2_\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2_\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2_\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2_\u039C\u03AC\u03B9\u03BF\u03C2_\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2_\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2_\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2_\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2_\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2_\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2_\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2".split("_"), monthsGenitiveEl: "\u0399\u03B1\u03BD\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5_\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5_\u039C\u03B1\u03C1\u03C4\u03AF\u03BF\u03C5_\u0391\u03C0\u03C1\u03B9\u03BB\u03AF\u03BF\u03C5_\u039C\u03B1\u0390\u03BF\u03C5_\u0399\u03BF\u03C5\u03BD\u03AF\u03BF\u03C5_\u0399\u03BF\u03C5\u03BB\u03AF\u03BF\u03C5_\u0391\u03C5\u03B3\u03BF\u03CD\u03C3\u03C4\u03BF\u03C5_\u03A3\u03B5\u03C0\u03C4\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5_\u039F\u03BA\u03C4\u03C9\u03B2\u03C1\u03AF\u03BF\u03C5_\u039D\u03BF\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5_\u0394\u03B5\u03BA\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5".split("_"), months: function months(e, a) {
      return e ? "string" == typeof a && /D/.test(a.substring(0, a.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl;
    }, monthsShort: "\u0399\u03B1\u03BD_\u03A6\u03B5\u03B2_\u039C\u03B1\u03C1_\u0391\u03C0\u03C1_\u039C\u03B1\u03CA_\u0399\u03BF\u03C5\u03BD_\u0399\u03BF\u03C5\u03BB_\u0391\u03C5\u03B3_\u03A3\u03B5\u03C0_\u039F\u03BA\u03C4_\u039D\u03BF\u03B5_\u0394\u03B5\u03BA".split("_"), weekdays: "\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE_\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1_\u03A4\u03C1\u03AF\u03C4\u03B7_\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7_\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7_\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE_\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF".split("_"), weekdaysShort: "\u039A\u03C5\u03C1_\u0394\u03B5\u03C5_\u03A4\u03C1\u03B9_\u03A4\u03B5\u03C4_\u03A0\u03B5\u03BC_\u03A0\u03B1\u03C1_\u03A3\u03B1\u03B2".split("_"), weekdaysMin: "\u039A\u03C5_\u0394\u03B5_\u03A4\u03C1_\u03A4\u03B5_\u03A0\u03B5_\u03A0\u03B1_\u03A3\u03B1".split("_"), meridiem: function meridiem(e, a, t) {
      return 11 < e ? t ? "\u03BC\u03BC" : "\u039C\u039C" : t ? "\u03C0\u03BC" : "\u03A0\u039C";
    }, isPM: function isPM(e) {
      return "\u03BC" === (e + "").toLowerCase()[0];
    }, meridiemParse: /[\u03a0\u039c]\.?\u039c?\.?/i, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendarEl: { sameDay: "[\u03A3\u03AE\u03BC\u03B5\u03C1\u03B1 {}] LT", nextDay: "[\u0391\u03CD\u03C1\u03B9\u03BF {}] LT", nextWeek: "dddd [{}] LT", lastDay: "[\u03A7\u03B8\u03B5\u03C2 {}] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 6:
            return "[\u03C4\u03BF \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF] dddd [{}] LT";default:
            return "[\u03C4\u03B7\u03BD \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03B7] dddd [{}] LT";}
      }, sameElse: "L" }, calendar: function calendar(e, a) {
      var t = this._calendarEl[e],
          s = a && a.hours();return S(t) && (t = t.apply(a)), t.replace("{}", s % 12 == 1 ? "\u03C3\u03C4\u03B7" : "\u03C3\u03C4\u03B9\u03C2");
    }, relativeTime: { future: "\u03C3\u03B5 %s", past: "%s \u03C0\u03C1\u03B9\u03BD", s: "\u03BB\u03AF\u03B3\u03B1 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1", ss: "%d \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1", m: "\u03AD\u03BD\u03B1 \u03BB\u03B5\u03C0\u03C4\u03CC", mm: "%d \u03BB\u03B5\u03C0\u03C4\u03AC", h: "\u03BC\u03AF\u03B1 \u03CE\u03C1\u03B1", hh: "%d \u03CE\u03C1\u03B5\u03C2", d: "\u03BC\u03AF\u03B1 \u03BC\u03AD\u03C1\u03B1", dd: "%d \u03BC\u03AD\u03C1\u03B5\u03C2", M: "\u03AD\u03BD\u03B1\u03C2 \u03BC\u03AE\u03BD\u03B1\u03C2", MM: "%d \u03BC\u03AE\u03BD\u03B5\u03C2", y: "\u03AD\u03BD\u03B1\u03C2 \u03C7\u03C1\u03CC\u03BD\u03BF\u03C2", yy: "%d \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1" }, dayOfMonthOrdinalParse: /\d{1,2}\u03b7/, ordinal: "%d\u03B7", week: { dow: 1, doy: 4 } }), l.defineLocale("en-au", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
      var a = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
    }, week: { dow: 1, doy: 4 } }), l.defineLocale("en-ca", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
      var a = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
    } }), l.defineLocale("en-gb", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
      var a = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
    }, week: { dow: 1, doy: 4 } }), l.defineLocale("en-ie", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
      var a = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
    }, week: { dow: 1, doy: 4 } }), l.defineLocale("en-il", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
      var a = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
    } }), l.defineLocale("en-nz", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
      var a = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
    }, week: { dow: 1, doy: 4 } }), l.defineLocale("eo", { months: "januaro_februaro_marto_aprilo_majo_junio_julio_a\u016Dgusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_a\u016Dg_sep_okt_nov_dec".split("_"), weekdays: "diman\u0109o_lundo_mardo_merkredo_\u0135a\u016Ddo_vendredo_sabato".split("_"), weekdaysShort: "dim_lun_mard_merk_\u0135a\u016D_ven_sab".split("_"), weekdaysMin: "di_lu_ma_me_\u0135a_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, meridiemParse: /[ap]\.t\.m/i, isPM: function isPM(e) {
      return "p" === e.charAt(0).toLowerCase();
    }, meridiem: function meridiem(e, a, t) {
      return 11 < e ? t ? "p.t.m." : "P.T.M." : t ? "a.t.m." : "A.T.M.";
    }, calendar: { sameDay: "[Hodia\u016D je] LT", nextDay: "[Morga\u016D je] LT", nextWeek: "dddd [je] LT", lastDay: "[Hiera\u016D je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L" }, relativeTime: { future: "post %s", past: "anta\u016D %s", s: "sekundoj", ss: "%d sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" }, dayOfMonthOrdinalParse: /\d{1,2}a/, ordinal: "%da", week: { dow: 1, doy: 7 } });var ys = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      fs = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
      ks = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
      ps = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;l.defineLocale("es-do", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function monthsShort(e, a) {
      return e ? /-MMM-/.test(a) ? fs[e.month()] : ys[e.month()] : ys;
    }, monthsRegex: ps, monthsShortRegex: ps, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: ks, longMonthsParse: ks, shortMonthsParse: ks, weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function sameDay() {
        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, nextDay: function nextDay() {
        return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, nextWeek: function nextWeek() {
        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, lastDay: function lastDay() {
        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, lastWeek: function lastWeek() {
        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un a\xf1o", yy: "%d a\xf1os" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } });var Ds = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      Ts = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");l.defineLocale("es-us", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function monthsShort(e, a) {
      return e ? /-MMM-/.test(a) ? Ts[e.month()] : Ds[e.month()] : Ds;
    }, monthsParseExact: !0, weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "MMMM [de] D [de] YYYY", LLL: "MMMM [de] D [de] YYYY h:mm A", LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A" }, calendar: { sameDay: function sameDay() {
        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, nextDay: function nextDay() {
        return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, nextWeek: function nextWeek() {
        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, lastDay: function lastDay() {
        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, lastWeek: function lastWeek() {
        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un a\xf1o", yy: "%d a\xf1os" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 0, doy: 6 } });var gs = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      ws = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
      vs = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
      Hs = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;function Ss(e, a, t, s) {
    var n = { s: ["m\xf5ne sekundi", "m\xf5ni sekund", "paar sekundit"], ss: [e + "sekundi", e + "sekundit"], m: ["\xfche minuti", "\xfcks minut"], mm: [e + " minuti", e + " minutit"], h: ["\xfche tunni", "tund aega", "\xfcks tund"], hh: [e + " tunni", e + " tundi"], d: ["\xfche p\xe4eva", "\xfcks p\xe4ev"], M: ["kuu aja", "kuu aega", "\xfcks kuu"], MM: [e + " kuu", e + " kuud"], y: ["\xfche aasta", "aasta", "\xfcks aasta"], yy: [e + " aasta", e + " aastat"] };return a ? n[t][2] ? n[t][2] : n[t][1] : s ? n[t][0] : n[t][1];
  }l.defineLocale("es", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function monthsShort(e, a) {
      return e ? /-MMM-/.test(a) ? ws[e.month()] : gs[e.month()] : gs;
    }, monthsRegex: Hs, monthsShortRegex: Hs, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: vs, longMonthsParse: vs, shortMonthsParse: vs, weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function sameDay() {
        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, nextDay: function nextDay() {
        return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, nextWeek: function nextWeek() {
        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, lastDay: function lastDay() {
        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, lastWeek: function lastWeek() {
        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un a\xf1o", yy: "%d a\xf1os" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }), l.defineLocale("et", { months: "jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[T\xe4na,] LT", nextDay: "[Homme,] LT", nextWeek: "[J\xe4rgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L" }, relativeTime: { future: "%s p\xe4rast", past: "%s tagasi", s: Ss, ss: Ss, m: Ss, mm: Ss, h: Ss, hh: Ss, d: Ss, dd: "%d p\xe4eva", M: Ss, MM: Ss, y: Ss, yy: Ss }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("eu", { months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), monthsParseExact: !0, weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, calendar: { sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", ss: "%d segundo", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });var bs = { 1: "\u06F1", 2: "\u06F2", 3: "\u06F3", 4: "\u06F4", 5: "\u06F5", 6: "\u06F6", 7: "\u06F7", 8: "\u06F8", 9: "\u06F9", 0: "\u06F0" },
      js = { "\u06F1": "1", "\u06F2": "2", "\u06F3": "3", "\u06F4": "4", "\u06F5": "5", "\u06F6": "6", "\u06F7": "7", "\u06F8": "8", "\u06F9": "9", "\u06F0": "0" };l.defineLocale("fa", { months: "\u0698\u0627\u0646\u0648\u06CC\u0647_\u0641\u0648\u0631\u06CC\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06CC\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06CC\u0647_\u0627\u0648\u062A_\u0633\u067E\u062A\u0627\u0645\u0628\u0631_\u0627\u06A9\u062A\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062F\u0633\u0627\u0645\u0628\u0631".split("_"), monthsShort: "\u0698\u0627\u0646\u0648\u06CC\u0647_\u0641\u0648\u0631\u06CC\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06CC\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06CC\u0647_\u0627\u0648\u062A_\u0633\u067E\u062A\u0627\u0645\u0628\u0631_\u0627\u06A9\u062A\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062F\u0633\u0627\u0645\u0628\u0631".split("_"), weekdays: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"), weekdaysShort: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"), weekdaysMin: "\u06CC_\u062F_\u0633_\u0686_\u067E_\u062C_\u0634".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/, isPM: function isPM(e) {
      return (/\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(e)
      );
    }, meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631" : "\u0628\u0639\u062F \u0627\u0632 \u0638\u0647\u0631";
    }, calendar: { sameDay: "[\u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u0639\u062A] LT", nextDay: "[\u0641\u0631\u062F\u0627 \u0633\u0627\u0639\u062A] LT", nextWeek: "dddd [\u0633\u0627\u0639\u062A] LT", lastDay: "[\u062F\u06CC\u0631\u0648\u0632 \u0633\u0627\u0639\u062A] LT", lastWeek: "dddd [\u067E\u06CC\u0634] [\u0633\u0627\u0639\u062A] LT", sameElse: "L" }, relativeTime: { future: "\u062F\u0631 %s", past: "%s \u067E\u06CC\u0634", s: "\u0686\u0646\u062F \u062B\u0627\u0646\u06CC\u0647", ss: "\u062B\u0627\u0646\u06CC\u0647 d%", m: "\u06CC\u06A9 \u062F\u0642\u06CC\u0642\u0647", mm: "%d \u062F\u0642\u06CC\u0642\u0647", h: "\u06CC\u06A9 \u0633\u0627\u0639\u062A", hh: "%d \u0633\u0627\u0639\u062A", d: "\u06CC\u06A9 \u0631\u0648\u0632", dd: "%d \u0631\u0648\u0632", M: "\u06CC\u06A9 \u0645\u0627\u0647", MM: "%d \u0645\u0627\u0647", y: "\u06CC\u06A9 \u0633\u0627\u0644", yy: "%d \u0633\u0627\u0644" }, preparse: function preparse(e) {
      return e.replace(/[\u06f0-\u06f9]/g, function (e) {
        return js[e];
      }).replace(/\u060c/g, ",");
    }, postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return bs[e];
      }).replace(/,/g, "\u060C");
    }, dayOfMonthOrdinalParse: /\d{1,2}\u0645/, ordinal: "%d\u0645", week: { dow: 6, doy: 12 } });var xs = "nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(" "),
      Ps = ["nolla", "yhden", "kahden", "kolmen", "nelj\xe4n", "viiden", "kuuden", xs[7], xs[8], xs[9]];function Os(e, a, t, s) {
    var n,
        d,
        r = "";switch (t) {case "s":
        return s ? "muutaman sekunnin" : "muutama sekunti";case "ss":
        return s ? "sekunnin" : "sekuntia";case "m":
        return s ? "minuutin" : "minuutti";case "mm":
        r = s ? "minuutin" : "minuuttia";break;case "h":
        return s ? "tunnin" : "tunti";case "hh":
        r = s ? "tunnin" : "tuntia";break;case "d":
        return s ? "p\xe4iv\xe4n" : "p\xe4iv\xe4";case "dd":
        r = s ? "p\xe4iv\xe4n" : "p\xe4iv\xe4\xe4";break;case "M":
        return s ? "kuukauden" : "kuukausi";case "MM":
        r = s ? "kuukauden" : "kuukautta";break;case "y":
        return s ? "vuoden" : "vuosi";case "yy":
        r = s ? "vuoden" : "vuotta";break;}return d = s, r = ((n = e) < 10 ? d ? Ps[n] : xs[n] : n) + " " + r;
  }l.defineLocale("fi", { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] HH.mm", llll: "ddd, Do MMM YYYY, [klo] HH.mm" }, calendar: { sameDay: "[t\xe4n\xe4\xe4n] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s p\xe4\xe4st\xe4", past: "%s sitten", s: Os, ss: Os, m: Os, mm: Os, h: Os, hh: Os, d: Os, dd: Os, M: Os, MM: Os, y: Os, yy: Os }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("fo", { months: "januar_februar_mars_apr\xedl_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_m\xe1nadagur_t\xfdsdagur_mikudagur_h\xf3sdagur_fr\xedggjadagur_leygardagur".split("_"), weekdaysShort: "sun_m\xe1n_t\xfds_mik_h\xf3s_fr\xed_ley".split("_"), weekdaysMin: "su_m\xe1_t\xfd_mi_h\xf3_fr_le".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, calendar: { sameDay: "[\xcd dag kl.] LT", nextDay: "[\xcd morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[\xcd gj\xe1r kl.] LT", lastWeek: "[s\xed\xf0stu] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "um %s", past: "%s s\xed\xf0ani", s: "f\xe1 sekund", ss: "%d sekundir", m: "ein minutt", mm: "%d minuttir", h: "ein t\xedmi", hh: "%d t\xedmar", d: "ein dagur", dd: "%d dagar", M: "ein m\xe1na\xf0i", MM: "%d m\xe1na\xf0ir", y: "eitt \xe1r", yy: "%d \xe1r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("fr-ca", { months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"), monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd\u2019hui \xE0] LT", nextDay: "[Demain \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[Hier \xe0] LT", lastWeek: "dddd [dernier \xe0] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function ordinal(e, a) {
      switch (a) {default:case "M":case "Q":case "D":case "DDD":case "d":
          return e + (1 === e ? "er" : "e");case "w":case "W":
          return e + (1 === e ? "re" : "e");}
    } }), l.defineLocale("fr-ch", { months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"), monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd\u2019hui \xE0] LT", nextDay: "[Demain \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[Hier \xe0] LT", lastWeek: "dddd [dernier \xe0] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function ordinal(e, a) {
      switch (a) {default:case "M":case "Q":case "D":case "DDD":case "d":
          return e + (1 === e ? "er" : "e");case "w":case "W":
          return e + (1 === e ? "re" : "e");}
    }, week: { dow: 1, doy: 4 } }), l.defineLocale("fr", { months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"), monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd\u2019hui \xE0] LT", nextDay: "[Demain \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[Hier \xe0] LT", lastWeek: "dddd [dernier \xe0] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|)/, ordinal: function ordinal(e, a) {
      switch (a) {case "D":
          return e + (1 === e ? "er" : "");default:case "M":case "Q":case "DDD":case "d":
          return e + (1 === e ? "er" : "e");case "w":case "W":
          return e + (1 === e ? "re" : "e");}
    }, week: { dow: 1, doy: 4 } });var Ws = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
      Es = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");l.defineLocale("fy", { months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: function monthsShort(e, a) {
      return e ? /-MMM-/.test(a) ? Es[e.month()] : Ws[e.month()] : Ws;
    }, monthsParseExact: !0, weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[hjoed om] LT", nextDay: "[moarn om] LT", nextWeek: "dddd [om] LT", lastDay: "[juster om] LT", lastWeek: "[\xf4fr\xfbne] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", ss: "%d sekonden", m: "ien min\xfat", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(e) {
      return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de");
    }, week: { dow: 1, doy: 4 } });function As(e, a, t, s) {
    var n = { s: ["thodde secondanim", "thodde second"], ss: [e + " secondanim", e + " second"], m: ["eka mintan", "ek minute"], mm: [e + " mintanim", e + " mintam"], h: ["eka horan", "ek hor"], hh: [e + " horanim", e + " horam"], d: ["eka disan", "ek dis"], dd: [e + " disanim", e + " dis"], M: ["eka mhoinean", "ek mhoino"], MM: [e + " mhoineanim", e + " mhoine"], y: ["eka vorsan", "ek voros"], yy: [e + " vorsanim", e + " vorsam"] };return a ? n[t][0] : n[t][1];
  }l.defineLocale("gd", { months: ["Am Faoilleach", "An Gearran", "Am M\xe0rt", "An Giblean", "An C\xe8itean", "An t-\xd2gmhios", "An t-Iuchar", "An L\xf9nastal", "An t-Sultain", "An D\xe0mhair", "An t-Samhain", "An D\xf9bhlachd"], monthsShort: ["Faoi", "Gear", "M\xe0rt", "Gibl", "C\xe8it", "\xd2gmh", "Iuch", "L\xf9n", "Sult", "D\xe0mh", "Samh", "D\xf9bh"], monthsParseExact: !0, weekdays: ["Did\xf2mhnaich", "Diluain", "Dim\xe0irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"], weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"], weekdaysMin: ["D\xf2", "Lu", "M\xe0", "Ci", "Ar", "Ha", "Sa"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[An-diugh aig] LT", nextDay: "[A-m\xe0ireach aig] LT", nextWeek: "dddd [aig] LT", lastDay: "[An-d\xe8 aig] LT", lastWeek: "dddd [seo chaidh] [aig] LT", sameElse: "L" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", ss: "%d diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "m\xecos", MM: "%d m\xecosan", y: "bliadhna", yy: "%d bliadhna" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function ordinal(e) {
      return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
    }, week: { dow: 1, doy: 4 } }), l.defineLocale("gl", { months: "xaneiro_febreiro_marzo_abril_maio_xu\xf1o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), monthsShort: "xan._feb._mar._abr._mai._xu\xf1._xul._ago._set._out._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "domingo_luns_martes_m\xe9rcores_xoves_venres_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._m\xe9r._xov._ven._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_m\xe9_xo_ve_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function sameDay() {
        return "[hoxe " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT";
      }, nextDay: function nextDay() {
        return "[ma\xf1\xe1 " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT";
      }, nextWeek: function nextWeek() {
        return "dddd [" + (1 !== this.hours() ? "\xe1s" : "a") + "] LT";
      }, lastDay: function lastDay() {
        return "[onte " + (1 !== this.hours() ? "\xe1" : "a") + "] LT";
      }, lastWeek: function lastWeek() {
        return "[o] dddd [pasado " + (1 !== this.hours() ? "\xe1s" : "a") + "] LT";
      }, sameElse: "L" }, relativeTime: { future: function future(e) {
        return 0 === e.indexOf("un") ? "n" + e : "en " + e;
      }, past: "hai %s", s: "uns segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }), l.defineLocale("gom-latn", { months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"), monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"), weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"), weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" }, calendar: { sameDay: "[Aiz] LT", nextDay: "[Faleam] LT", nextWeek: "[Ieta to] dddd[,] LT", lastDay: "[Kal] LT", lastWeek: "[Fatlo] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%s", past: "%s adim", s: As, ss: As, m: As, mm: As, h: As, hh: As, d: As, dd: As, M: As, MM: As, y: As, yy: As }, dayOfMonthOrdinalParse: /\d{1,2}(er)/, ordinal: function ordinal(e, a) {
      switch (a) {case "D":
          return e + "er";default:case "M":case "Q":case "DDD":case "d":case "w":case "W":
          return e;}
    }, week: { dow: 1, doy: 4 }, meridiemParse: /rati|sokalli|donparam|sanje/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "rati" === a ? e < 4 ? e : e + 12 : "sokalli" === a ? e : "donparam" === a ? 12 < e ? e : e + 12 : "sanje" === a ? e + 12 : void 0;
    }, meridiem: function meridiem(e, a, t) {
      return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati";
    } });var Fs = { 1: "\u0AE7", 2: "\u0AE8", 3: "\u0AE9", 4: "\u0AEA", 5: "\u0AEB", 6: "\u0AEC", 7: "\u0AED", 8: "\u0AEE", 9: "\u0AEF", 0: "\u0AE6" },
      zs = { "\u0AE7": "1", "\u0AE8": "2", "\u0AE9": "3", "\u0AEA": "4", "\u0AEB": "5", "\u0AEC": "6", "\u0AED": "7", "\u0AEE": "8", "\u0AEF": "9", "\u0AE6": "0" };l.defineLocale("gu", { months: "\u0A9C\u0ABE\u0AA8\u0ACD\u0AAF\u0AC1\u0A86\u0AB0\u0AC0_\u0AAB\u0AC7\u0AAC\u0ACD\u0AB0\u0AC1\u0A86\u0AB0\u0AC0_\u0AAE\u0ABE\u0AB0\u0ACD\u0A9A_\u0A8F\u0AAA\u0ACD\u0AB0\u0ABF\u0AB2_\u0AAE\u0AC7_\u0A9C\u0AC2\u0AA8_\u0A9C\u0AC1\u0AB2\u0ABE\u0A88_\u0A91\u0A97\u0AB8\u0ACD\u0A9F_\u0AB8\u0AAA\u0ACD\u0A9F\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0_\u0A91\u0A95\u0ACD\u0A9F\u0ACD\u0AAC\u0AB0_\u0AA8\u0AB5\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0_\u0AA1\u0ABF\u0AB8\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0".split("_"), monthsShort: "\u0A9C\u0ABE\u0AA8\u0ACD\u0AAF\u0AC1._\u0AAB\u0AC7\u0AAC\u0ACD\u0AB0\u0AC1._\u0AAE\u0ABE\u0AB0\u0ACD\u0A9A_\u0A8F\u0AAA\u0ACD\u0AB0\u0ABF._\u0AAE\u0AC7_\u0A9C\u0AC2\u0AA8_\u0A9C\u0AC1\u0AB2\u0ABE._\u0A91\u0A97._\u0AB8\u0AAA\u0ACD\u0A9F\u0AC7._\u0A91\u0A95\u0ACD\u0A9F\u0ACD._\u0AA8\u0AB5\u0AC7._\u0AA1\u0ABF\u0AB8\u0AC7.".split("_"), monthsParseExact: !0, weekdays: "\u0AB0\u0AB5\u0ABF\u0AB5\u0ABE\u0AB0_\u0AB8\u0ACB\u0AAE\u0AB5\u0ABE\u0AB0_\u0AAE\u0A82\u0A97\u0AB3\u0AB5\u0ABE\u0AB0_\u0AAC\u0AC1\u0AA7\u0ACD\u0AB5\u0ABE\u0AB0_\u0A97\u0AC1\u0AB0\u0AC1\u0AB5\u0ABE\u0AB0_\u0AB6\u0AC1\u0A95\u0ACD\u0AB0\u0AB5\u0ABE\u0AB0_\u0AB6\u0AA8\u0ABF\u0AB5\u0ABE\u0AB0".split("_"), weekdaysShort: "\u0AB0\u0AB5\u0ABF_\u0AB8\u0ACB\u0AAE_\u0AAE\u0A82\u0A97\u0AB3_\u0AAC\u0AC1\u0AA7\u0ACD_\u0A97\u0AC1\u0AB0\u0AC1_\u0AB6\u0AC1\u0A95\u0ACD\u0AB0_\u0AB6\u0AA8\u0ABF".split("_"), weekdaysMin: "\u0AB0_\u0AB8\u0ACB_\u0AAE\u0A82_\u0AAC\u0AC1_\u0A97\u0AC1_\u0AB6\u0AC1_\u0AB6".split("_"), longDateFormat: { LT: "A h:mm \u0AB5\u0ABE\u0A97\u0ACD\u0AAF\u0AC7", LTS: "A h:mm:ss \u0AB5\u0ABE\u0A97\u0ACD\u0AAF\u0AC7", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u0AB5\u0ABE\u0A97\u0ACD\u0AAF\u0AC7", LLLL: "dddd, D MMMM YYYY, A h:mm \u0AB5\u0ABE\u0A97\u0ACD\u0AAF\u0AC7" }, calendar: { sameDay: "[\u0A86\u0A9C] LT", nextDay: "[\u0A95\u0ABE\u0AB2\u0AC7] LT", nextWeek: "dddd, LT", lastDay: "[\u0A97\u0A87\u0A95\u0ABE\u0AB2\u0AC7] LT", lastWeek: "[\u0AAA\u0ABE\u0A9B\u0AB2\u0ABE] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0AAE\u0ABE", past: "%s \u0AAA\u0AC7\u0AB9\u0AB2\u0ABE", s: "\u0A85\u0AAE\u0AC1\u0A95 \u0AAA\u0AB3\u0ACB", ss: "%d \u0AB8\u0AC7\u0A95\u0A82\u0AA1", m: "\u0A8F\u0A95 \u0AAE\u0ABF\u0AA8\u0ABF\u0A9F", mm: "%d \u0AAE\u0ABF\u0AA8\u0ABF\u0A9F", h: "\u0A8F\u0A95 \u0A95\u0AB2\u0ABE\u0A95", hh: "%d \u0A95\u0AB2\u0ABE\u0A95", d: "\u0A8F\u0A95 \u0AA6\u0ABF\u0AB5\u0AB8", dd: "%d \u0AA6\u0ABF\u0AB5\u0AB8", M: "\u0A8F\u0A95 \u0AAE\u0AB9\u0ABF\u0AA8\u0ACB", MM: "%d \u0AAE\u0AB9\u0ABF\u0AA8\u0ACB", y: "\u0A8F\u0A95 \u0AB5\u0AB0\u0ACD\u0AB7", yy: "%d \u0AB5\u0AB0\u0ACD\u0AB7" }, preparse: function preparse(e) {
      return e.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g, function (e) {
        return zs[e];
      });
    }, postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return Fs[e];
      });
    }, meridiemParse: /\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0AB0\u0ABE\u0AA4" === a ? e < 4 ? e : e + 12 : "\u0AB8\u0AB5\u0ABE\u0AB0" === a ? e : "\u0AAC\u0AAA\u0ACB\u0AB0" === a ? 10 <= e ? e : e + 12 : "\u0AB8\u0ABE\u0A82\u0A9C" === a ? e + 12 : void 0;
    }, meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u0AB0\u0ABE\u0AA4" : e < 10 ? "\u0AB8\u0AB5\u0ABE\u0AB0" : e < 17 ? "\u0AAC\u0AAA\u0ACB\u0AB0" : e < 20 ? "\u0AB8\u0ABE\u0A82\u0A9C" : "\u0AB0\u0ABE\u0AA4";
    }, week: { dow: 0, doy: 6 } }), l.defineLocale("he", { months: "\u05D9\u05E0\u05D5\u05D0\u05E8_\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8_\u05DE\u05E8\u05E5_\u05D0\u05E4\u05E8\u05D9\u05DC_\u05DE\u05D0\u05D9_\u05D9\u05D5\u05E0\u05D9_\u05D9\u05D5\u05DC\u05D9_\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8_\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8_\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8_\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8_\u05D3\u05E6\u05DE\u05D1\u05E8".split("_"), monthsShort: "\u05D9\u05E0\u05D5\u05F3_\u05E4\u05D1\u05E8\u05F3_\u05DE\u05E8\u05E5_\u05D0\u05E4\u05E8\u05F3_\u05DE\u05D0\u05D9_\u05D9\u05D5\u05E0\u05D9_\u05D9\u05D5\u05DC\u05D9_\u05D0\u05D5\u05D2\u05F3_\u05E1\u05E4\u05D8\u05F3_\u05D0\u05D5\u05E7\u05F3_\u05E0\u05D5\u05D1\u05F3_\u05D3\u05E6\u05DE\u05F3".split("_"), weekdays: "\u05E8\u05D0\u05E9\u05D5\u05DF_\u05E9\u05E0\u05D9_\u05E9\u05DC\u05D9\u05E9\u05D9_\u05E8\u05D1\u05D9\u05E2\u05D9_\u05D7\u05DE\u05D9\u05E9\u05D9_\u05E9\u05D9\u05E9\u05D9_\u05E9\u05D1\u05EA".split("_"), weekdaysShort: "\u05D0\u05F3_\u05D1\u05F3_\u05D2\u05F3_\u05D3\u05F3_\u05D4\u05F3_\u05D5\u05F3_\u05E9\u05F3".split("_"), weekdaysMin: "\u05D0_\u05D1_\u05D2_\u05D3_\u05D4_\u05D5_\u05E9".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [\u05D1]MMMM YYYY", LLL: "D [\u05D1]MMMM YYYY HH:mm", LLLL: "dddd, D [\u05D1]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[\u05D4\u05D9\u05D5\u05DD \u05D1\u05BE]LT", nextDay: "[\u05DE\u05D7\u05E8 \u05D1\u05BE]LT", nextWeek: "dddd [\u05D1\u05E9\u05E2\u05D4] LT", lastDay: "[\u05D0\u05EA\u05DE\u05D5\u05DC \u05D1\u05BE]LT", lastWeek: "[\u05D1\u05D9\u05D5\u05DD] dddd [\u05D4\u05D0\u05D7\u05E8\u05D5\u05DF \u05D1\u05E9\u05E2\u05D4] LT", sameElse: "L" }, relativeTime: { future: "\u05D1\u05E2\u05D5\u05D3 %s", past: "\u05DC\u05E4\u05E0\u05D9 %s", s: "\u05DE\u05E1\u05E4\u05E8 \u05E9\u05E0\u05D9\u05D5\u05EA", ss: "%d \u05E9\u05E0\u05D9\u05D5\u05EA", m: "\u05D3\u05E7\u05D4", mm: "%d \u05D3\u05E7\u05D5\u05EA", h: "\u05E9\u05E2\u05D4", hh: function hh(e) {
        return 2 === e ? "\u05E9\u05E2\u05EA\u05D9\u05D9\u05DD" : e + " \u05E9\u05E2\u05D5\u05EA";
      }, d: "\u05D9\u05D5\u05DD", dd: function dd(e) {
        return 2 === e ? "\u05D9\u05D5\u05DE\u05D9\u05D9\u05DD" : e + " \u05D9\u05DE\u05D9\u05DD";
      }, M: "\u05D7\u05D5\u05D3\u05E9", MM: function MM(e) {
        return 2 === e ? "\u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD" : e + " \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD";
      }, y: "\u05E9\u05E0\u05D4", yy: function yy(e) {
        return 2 === e ? "\u05E9\u05E0\u05EA\u05D9\u05D9\u05DD" : e % 10 == 0 && 10 !== e ? e + " \u05E9\u05E0\u05D4" : e + " \u05E9\u05E0\u05D9\u05DD";
      } }, meridiemParse: /\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i, isPM: function isPM(e) {
      return (/^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(e)
      );
    }, meridiem: function meridiem(e, a, t) {
      return e < 5 ? "\u05DC\u05E4\u05E0\u05D5\u05EA \u05D1\u05D5\u05E7\u05E8" : e < 10 ? "\u05D1\u05D1\u05D5\u05E7\u05E8" : e < 12 ? t ? "\u05DC\u05E4\u05E0\u05D4\"\u05E6" : "\u05DC\u05E4\u05E0\u05D9 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD" : e < 18 ? t ? "\u05D0\u05D7\u05D4\"\u05E6" : "\u05D0\u05D7\u05E8\u05D9 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD" : "\u05D1\u05E2\u05E8\u05D1";
    } });var Js = { 1: "\u0967", 2: "\u0968", 3: "\u0969", 4: "\u096A", 5: "\u096B", 6: "\u096C", 7: "\u096D", 8: "\u096E", 9: "\u096F", 0: "\u0966" },
      Ns = { "\u0967": "1", "\u0968": "2", "\u0969": "3", "\u096A": "4", "\u096B": "5", "\u096C": "6", "\u096D": "7", "\u096E": "8", "\u096F": "9", "\u0966": "0" };function Rs(e, a, t) {
    var s = e + " ";switch (t) {case "ss":
        return s += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";case "m":
        return a ? "jedna minuta" : "jedne minute";case "mm":
        return s += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";case "h":
        return a ? "jedan sat" : "jednog sata";case "hh":
        return s += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";case "dd":
        return s += 1 === e ? "dan" : "dana";case "MM":
        return s += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";case "yy":
        return s += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina";}
  }l.defineLocale("hi", { months: "\u091C\u0928\u0935\u0930\u0940_\u092B\u093C\u0930\u0935\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948\u0932_\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932\u093E\u0908_\u0905\u0917\u0938\u094D\u0924_\u0938\u093F\u0924\u092E\u094D\u092C\u0930_\u0905\u0915\u094D\u091F\u0942\u092C\u0930_\u0928\u0935\u092E\u094D\u092C\u0930_\u0926\u093F\u0938\u092E\u094D\u092C\u0930".split("_"), monthsShort: "\u091C\u0928._\u092B\u093C\u0930._\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948._\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932._\u0905\u0917._\u0938\u093F\u0924._\u0905\u0915\u094D\u091F\u0942._\u0928\u0935._\u0926\u093F\u0938.".split("_"), monthsParseExact: !0, weekdays: "\u0930\u0935\u093F\u0935\u093E\u0930_\u0938\u094B\u092E\u0935\u093E\u0930_\u092E\u0902\u0917\u0932\u0935\u093E\u0930_\u092C\u0941\u0927\u0935\u093E\u0930_\u0917\u0941\u0930\u0942\u0935\u093E\u0930_\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930_\u0936\u0928\u093F\u0935\u093E\u0930".split("_"), weekdaysShort: "\u0930\u0935\u093F_\u0938\u094B\u092E_\u092E\u0902\u0917\u0932_\u092C\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094D\u0930_\u0936\u0928\u093F".split("_"), weekdaysMin: "\u0930_\u0938\u094B_\u092E\u0902_\u092C\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"), longDateFormat: { LT: "A h:mm \u092C\u091C\u0947", LTS: "A h:mm:ss \u092C\u091C\u0947", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u092C\u091C\u0947", LLLL: "dddd, D MMMM YYYY, A h:mm \u092C\u091C\u0947" }, calendar: { sameDay: "[\u0906\u091C] LT", nextDay: "[\u0915\u0932] LT", nextWeek: "dddd, LT", lastDay: "[\u0915\u0932] LT", lastWeek: "[\u092A\u093F\u091B\u0932\u0947] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u092E\u0947\u0902", past: "%s \u092A\u0939\u0932\u0947", s: "\u0915\u0941\u091B \u0939\u0940 \u0915\u094D\u0937\u0923", ss: "%d \u0938\u0947\u0915\u0902\u0921", m: "\u090F\u0915 \u092E\u093F\u0928\u091F", mm: "%d \u092E\u093F\u0928\u091F", h: "\u090F\u0915 \u0918\u0902\u091F\u093E", hh: "%d \u0918\u0902\u091F\u0947", d: "\u090F\u0915 \u0926\u093F\u0928", dd: "%d \u0926\u093F\u0928", M: "\u090F\u0915 \u092E\u0939\u0940\u0928\u0947", MM: "%d \u092E\u0939\u0940\u0928\u0947", y: "\u090F\u0915 \u0935\u0930\u094D\u0937", yy: "%d \u0935\u0930\u094D\u0937" }, preparse: function preparse(e) {
      return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (e) {
        return Ns[e];
      });
    }, postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return Js[e];
      });
    }, meridiemParse: /\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0930\u093E\u0924" === a ? e < 4 ? e : e + 12 : "\u0938\u0941\u092C\u0939" === a ? e : "\u0926\u094B\u092A\u0939\u0930" === a ? 10 <= e ? e : e + 12 : "\u0936\u093E\u092E" === a ? e + 12 : void 0;
    }, meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u0930\u093E\u0924" : e < 10 ? "\u0938\u0941\u092C\u0939" : e < 17 ? "\u0926\u094B\u092A\u0939\u0930" : e < 20 ? "\u0936\u093E\u092E" : "\u0930\u093E\u0924";
    }, week: { dow: 0, doy: 6 } }), l.defineLocale("hr", { months: { format: "sije\u010Dnja_velja\u010De_o\u017Eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), standalone: "sije\u010Danj_velja\u010Da_o\u017Eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_") }, monthsShort: "sij._velj._o\u017Eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._\u010Det._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_\u010De_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[u] [nedjelju] [u] LT";case 3:
            return "[u] [srijedu] [u] LT";case 6:
            return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
            return "[u] dddd [u] LT";}
      }, lastDay: "[ju\u010Der u] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:
            return "[pro\u0161lu] dddd [u] LT";case 6:
            return "[pro\u0161le] [subote] [u] LT";case 1:case 2:case 4:case 5:
            return "[pro\u0161li] dddd [u] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", ss: Rs, m: Rs, mm: Rs, h: Rs, hh: Rs, d: "dan", dd: Rs, M: "mjesec", MM: Rs, y: "godinu", yy: Rs }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });var Is = "vas\xE1rnap h\xE9tf\u0151n kedden szerd\xE1n cs\xFCt\xF6rt\xF6k\xF6n p\xE9nteken szombaton".split(" ");function Cs(e, a, t, s) {
    var n = e;switch (t) {case "s":
        return s || a ? "n\xe9h\xe1ny m\xe1sodperc" : "n\xe9h\xe1ny m\xe1sodperce";case "ss":
        return n + (s || a) ? " m\xe1sodperc" : " m\xe1sodperce";case "m":
        return "egy" + (s || a ? " perc" : " perce");case "mm":
        return n + (s || a ? " perc" : " perce");case "h":
        return "egy" + (s || a ? " \xf3ra" : " \xf3r\xe1ja");case "hh":
        return n + (s || a ? " \xf3ra" : " \xf3r\xe1ja");case "d":
        return "egy" + (s || a ? " nap" : " napja");case "dd":
        return n + (s || a ? " nap" : " napja");case "M":
        return "egy" + (s || a ? " h\xf3nap" : " h\xf3napja");case "MM":
        return n + (s || a ? " h\xf3nap" : " h\xf3napja");case "y":
        return "egy" + (s || a ? " \xe9v" : " \xe9ve");case "yy":
        return n + (s || a ? " \xe9v" : " \xe9ve");}return "";
  }function Gs(e) {
    return (e ? "" : "[m\xfalt] ") + "[" + Is[this.day()] + "] LT[-kor]";
  }function Us(e) {
    return e % 100 == 11 || e % 10 != 1;
  }function Vs(e, a, t, s) {
    var n = e + " ";switch (t) {case "s":
        return a || s ? "nokkrar sek\xfandur" : "nokkrum sek\xfandum";case "ss":
        return Us(e) ? n + (a || s ? "sek\xfandur" : "sek\xfandum") : n + "sek\xfanda";case "m":
        return a ? "m\xedn\xfata" : "m\xedn\xfatu";case "mm":
        return Us(e) ? n + (a || s ? "m\xedn\xfatur" : "m\xedn\xfatum") : a ? n + "m\xedn\xfata" : n + "m\xedn\xfatu";case "hh":
        return Us(e) ? n + (a || s ? "klukkustundir" : "klukkustundum") : n + "klukkustund";case "d":
        return a ? "dagur" : s ? "dag" : "degi";case "dd":
        return Us(e) ? a ? n + "dagar" : n + (s ? "daga" : "d\xf6gum") : a ? n + "dagur" : n + (s ? "dag" : "degi");case "M":
        return a ? "m\xe1nu\xf0ur" : s ? "m\xe1nu\xf0" : "m\xe1nu\xf0i";case "MM":
        return Us(e) ? a ? n + "m\xe1nu\xf0ir" : n + (s ? "m\xe1nu\xf0i" : "m\xe1nu\xf0um") : a ? n + "m\xe1nu\xf0ur" : n + (s ? "m\xe1nu\xf0" : "m\xe1nu\xf0i");case "y":
        return a || s ? "\xe1r" : "\xe1ri";case "yy":
        return Us(e) ? n + (a || s ? "\xe1r" : "\xe1rum") : n + (a || s ? "\xe1r" : "\xe1ri");}
  }l.defineLocale("hu", { months: "janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"), monthsShort: "jan_feb_m\xe1rc_\xe1pr_m\xe1j_j\xfan_j\xfal_aug_szept_okt_nov_dec".split("_"), weekdays: "vas\xE1rnap_h\xE9tf\u0151_kedd_szerda_cs\xFCt\xF6rt\xF6k_p\xE9ntek_szombat".split("_"), weekdaysShort: "vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" }, meridiemParse: /de|du/i, isPM: function isPM(e) {
      return "u" === e.charAt(1).toLowerCase();
    }, meridiem: function meridiem(e, a, t) {
      return e < 12 ? !0 === t ? "de" : "DE" : !0 === t ? "du" : "DU";
    }, calendar: { sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function nextWeek() {
        return Gs.call(this, !0);
      }, lastDay: "[tegnap] LT[-kor]", lastWeek: function lastWeek() {
        return Gs.call(this, !1);
      }, sameElse: "L" }, relativeTime: { future: "%s m\xfalva", past: "%s", s: Cs, ss: Cs, m: Cs, mm: Cs, h: Cs, hh: Cs, d: Cs, dd: Cs, M: Cs, MM: Cs, y: Cs, yy: Cs }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("hy-am", { months: { format: "\u0570\u0578\u0582\u0576\u057E\u0561\u0580\u056B_\u0583\u0565\u057F\u0580\u057E\u0561\u0580\u056B_\u0574\u0561\u0580\u057F\u056B_\u0561\u057A\u0580\u056B\u056C\u056B_\u0574\u0561\u0575\u056B\u057D\u056B_\u0570\u0578\u0582\u0576\u056B\u057D\u056B_\u0570\u0578\u0582\u056C\u056B\u057D\u056B_\u0585\u0563\u0578\u057D\u057F\u0578\u057D\u056B_\u057D\u0565\u057A\u057F\u0565\u0574\u0562\u0565\u0580\u056B_\u0570\u0578\u056F\u057F\u0565\u0574\u0562\u0565\u0580\u056B_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056B_\u0564\u0565\u056F\u057F\u0565\u0574\u0562\u0565\u0580\u056B".split("_"), standalone: "\u0570\u0578\u0582\u0576\u057E\u0561\u0580_\u0583\u0565\u057F\u0580\u057E\u0561\u0580_\u0574\u0561\u0580\u057F_\u0561\u057A\u0580\u056B\u056C_\u0574\u0561\u0575\u056B\u057D_\u0570\u0578\u0582\u0576\u056B\u057D_\u0570\u0578\u0582\u056C\u056B\u057D_\u0585\u0563\u0578\u057D\u057F\u0578\u057D_\u057D\u0565\u057A\u057F\u0565\u0574\u0562\u0565\u0580_\u0570\u0578\u056F\u057F\u0565\u0574\u0562\u0565\u0580_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580_\u0564\u0565\u056F\u057F\u0565\u0574\u0562\u0565\u0580".split("_") }, monthsShort: "\u0570\u0576\u057E_\u0583\u057F\u0580_\u0574\u0580\u057F_\u0561\u057A\u0580_\u0574\u0575\u057D_\u0570\u0576\u057D_\u0570\u056C\u057D_\u0585\u0563\u057D_\u057D\u057A\u057F_\u0570\u056F\u057F_\u0576\u0574\u0562_\u0564\u056F\u057F".split("_"), weekdays: "\u056F\u056B\u0580\u0561\u056F\u056B_\u0565\u0580\u056F\u0578\u0582\u0577\u0561\u0562\u0569\u056B_\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B_\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B_\u0570\u056B\u0576\u0563\u0577\u0561\u0562\u0569\u056B_\u0578\u0582\u0580\u0562\u0561\u0569_\u0577\u0561\u0562\u0561\u0569".split("_"), weekdaysShort: "\u056F\u0580\u056F_\u0565\u0580\u056F_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"), weekdaysMin: "\u056F\u0580\u056F_\u0565\u0580\u056F_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0569.", LLL: "D MMMM YYYY \u0569., HH:mm", LLLL: "dddd, D MMMM YYYY \u0569., HH:mm" }, calendar: { sameDay: "[\u0561\u0575\u057D\u0585\u0580] LT", nextDay: "[\u057E\u0561\u0572\u0568] LT", lastDay: "[\u0565\u0580\u0565\u056F] LT", nextWeek: function nextWeek() {
        return "dddd [\u0585\u0580\u0568 \u056A\u0561\u0574\u0568] LT";
      }, lastWeek: function lastWeek() {
        return "[\u0561\u0576\u0581\u0561\u056E] dddd [\u0585\u0580\u0568 \u056A\u0561\u0574\u0568] LT";
      }, sameElse: "L" }, relativeTime: { future: "%s \u0570\u0565\u057F\u0578", past: "%s \u0561\u057C\u0561\u057B", s: "\u0574\u056B \u0584\u0561\u0576\u056B \u057E\u0561\u0575\u0580\u056F\u0575\u0561\u0576", ss: "%d \u057E\u0561\u0575\u0580\u056F\u0575\u0561\u0576", m: "\u0580\u0578\u057A\u0565", mm: "%d \u0580\u0578\u057A\u0565", h: "\u056A\u0561\u0574", hh: "%d \u056A\u0561\u0574", d: "\u0585\u0580", dd: "%d \u0585\u0580", M: "\u0561\u0574\u056B\u057D", MM: "%d \u0561\u0574\u056B\u057D", y: "\u057F\u0561\u0580\u056B", yy: "%d \u057F\u0561\u0580\u056B" }, meridiemParse: /\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/, isPM: function isPM(e) {
      return (/^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(e)
      );
    }, meridiem: function meridiem(e) {
      return e < 4 ? "\u0563\u056B\u0577\u0565\u0580\u057E\u0561" : e < 12 ? "\u0561\u057C\u0561\u057E\u0578\u057F\u057E\u0561" : e < 17 ? "\u0581\u0565\u0580\u0565\u056F\u057E\u0561" : "\u0565\u0580\u0565\u056F\u0578\u0575\u0561\u0576";
    }, dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/, ordinal: function ordinal(e, a) {
      switch (a) {case "DDD":case "w":case "W":case "DDDo":
          return 1 === e ? e + "-\u056B\u0576" : e + "-\u0580\u0564";default:
          return e;}
    }, week: { dow: 1, doy: 7 } }), l.defineLocale("id", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|siang|sore|malam/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "pagi" === a ? e : "siang" === a ? 11 <= e ? e : e + 12 : "sore" === a || "malam" === a ? e + 12 : void 0;
    }, meridiem: function meridiem(e, a, t) {
      return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam";
    }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", ss: "%d detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }), l.defineLocale("is", { months: "jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"), monthsShort: "jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"), weekdays: "sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"), weekdaysShort: "sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"), weekdaysMin: "Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, calendar: { sameDay: "[\xed dag kl.] LT", nextDay: "[\xe1 morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[\xed g\xe6r kl.] LT", lastWeek: "[s\xed\xf0asta] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "eftir %s", past: "fyrir %s s\xed\xf0an", s: Vs, ss: Vs, m: Vs, mm: Vs, h: "klukkustund", hh: Vs, d: Vs, dd: Vs, M: Vs, MM: Vs, y: Vs, yy: Vs }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("it", { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[la scorsa] dddd [alle] LT";default:
            return "[lo scorso] dddd [alle] LT";}
      }, sameElse: "L" }, relativeTime: { future: function future(e) {
        return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e;
      }, past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }), l.defineLocale("ja", { months: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), weekdays: "\u65E5\u66DC\u65E5_\u6708\u66DC\u65E5_\u706B\u66DC\u65E5_\u6C34\u66DC\u65E5_\u6728\u66DC\u65E5_\u91D1\u66DC\u65E5_\u571F\u66DC\u65E5".split("_"), weekdaysShort: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"), weekdaysMin: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm", LLLL: "YYYY\u5E74M\u6708D\u65E5 dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5(ddd) HH:mm" }, meridiemParse: /\u5348\u524d|\u5348\u5f8c/i, isPM: function isPM(e) {
      return "\u5348\u5F8C" === e;
    }, meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u5348\u524D" : "\u5348\u5F8C";
    }, calendar: { sameDay: "[\u4ECA\u65E5] LT", nextDay: "[\u660E\u65E5] LT", nextWeek: function nextWeek(e) {
        return e.week() < this.week() ? "[\u6765\u9031]dddd LT" : "dddd LT";
      }, lastDay: "[\u6628\u65E5] LT", lastWeek: function lastWeek(e) {
        return this.week() < e.week() ? "[\u5148\u9031]dddd LT" : "dddd LT";
      }, sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}\u65e5/, ordinal: function ordinal(e, a) {
      switch (a) {case "d":case "D":case "DDD":
          return e + "\u65E5";default:
          return e;}
    }, relativeTime: { future: "%s\u5F8C", past: "%s\u524D", s: "\u6570\u79D2", ss: "%d\u79D2", m: "1\u5206", mm: "%d\u5206", h: "1\u6642\u9593", hh: "%d\u6642\u9593", d: "1\u65E5", dd: "%d\u65E5", M: "1\u30F6\u6708", MM: "%d\u30F6\u6708", y: "1\u5E74", yy: "%d\u5E74" } }), l.defineLocale("jv", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /enjing|siyang|sonten|ndalu/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "enjing" === a ? e : "siyang" === a ? 11 <= e ? e : e + 12 : "sonten" === a || "ndalu" === a ? e + 12 : void 0;
    }, meridiem: function meridiem(e, a, t) {
      return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu";
    }, calendar: { sameDay: "[Dinten puniko pukul] LT", nextDay: "[Mbenjang pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kala wingi pukul] LT", lastWeek: "dddd [kepengker pukul] LT", sameElse: "L" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", ss: "%d detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" }, week: { dow: 1, doy: 7 } }), l.defineLocale("ka", { months: { standalone: "\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10D8_\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10D8_\u10DB\u10D0\u10E0\u10E2\u10D8_\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8_\u10DB\u10D0\u10D8\u10E1\u10D8_\u10D8\u10D5\u10DC\u10D8\u10E1\u10D8_\u10D8\u10D5\u10DA\u10D8\u10E1\u10D8_\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10DD_\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8_\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10D8_\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8_\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8".split("_"), format: "\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10E1_\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10E1_\u10DB\u10D0\u10E0\u10E2\u10E1_\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8\u10E1_\u10DB\u10D0\u10D8\u10E1\u10E1_\u10D8\u10D5\u10DC\u10D8\u10E1\u10E1_\u10D8\u10D5\u10DA\u10D8\u10E1\u10E1_\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10E1_\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10E1_\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10E1_\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10E1_\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10E1".split("_") }, monthsShort: "\u10D8\u10D0\u10DC_\u10D7\u10D4\u10D1_\u10DB\u10D0\u10E0_\u10D0\u10DE\u10E0_\u10DB\u10D0\u10D8_\u10D8\u10D5\u10DC_\u10D8\u10D5\u10DA_\u10D0\u10D2\u10D5_\u10E1\u10D4\u10E5_\u10DD\u10E5\u10E2_\u10DC\u10DD\u10D4_\u10D3\u10D4\u10D9".split("_"), weekdays: { standalone: "\u10D9\u10D5\u10D8\u10E0\u10D0_\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10D8_\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8".split("_"), format: "\u10D9\u10D5\u10D8\u10E0\u10D0\u10E1_\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1_\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10E1_\u10E8\u10D0\u10D1\u10D0\u10D7\u10E1".split("_"), isFormat: /(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/ }, weekdaysShort: "\u10D9\u10D5\u10D8_\u10DD\u10E0\u10E8_\u10E1\u10D0\u10DB_\u10DD\u10D7\u10EE_\u10EE\u10E3\u10D7_\u10DE\u10D0\u10E0_\u10E8\u10D0\u10D1".split("_"), weekdaysMin: "\u10D9\u10D5_\u10DD\u10E0_\u10E1\u10D0_\u10DD\u10D7_\u10EE\u10E3_\u10DE\u10D0_\u10E8\u10D0".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[\u10D3\u10E6\u10D4\u10E1] LT[-\u10D6\u10D4]", nextDay: "[\u10EE\u10D5\u10D0\u10DA] LT[-\u10D6\u10D4]", lastDay: "[\u10D2\u10E3\u10E8\u10D8\u10DC] LT[-\u10D6\u10D4]", nextWeek: "[\u10E8\u10D4\u10DB\u10D3\u10D4\u10D2] dddd LT[-\u10D6\u10D4]", lastWeek: "[\u10EC\u10D8\u10DC\u10D0] dddd LT-\u10D6\u10D4", sameElse: "L" }, relativeTime: { future: function future(e) {
        return (/(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10ec\u10d4\u10da\u10d8)/.test(e) ? e.replace(/\u10d8$/, "\u10E8\u10D8") : e + "\u10E8\u10D8"
        );
      }, past: function past(e) {
        return (/(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(e) ? e.replace(/(\u10d8|\u10d4)$/, "\u10D8\u10E1 \u10EC\u10D8\u10DC") : /\u10ec\u10d4\u10da\u10d8/.test(e) ? e.replace(/\u10ec\u10d4\u10da\u10d8$/, "\u10EC\u10DA\u10D8\u10E1 \u10EC\u10D8\u10DC") : void 0
        );
      }, s: "\u10E0\u10D0\u10DB\u10D3\u10D4\u10DC\u10D8\u10DB\u10D4 \u10EC\u10D0\u10DB\u10D8", ss: "%d \u10EC\u10D0\u10DB\u10D8", m: "\u10EC\u10E3\u10D7\u10D8", mm: "%d \u10EC\u10E3\u10D7\u10D8", h: "\u10E1\u10D0\u10D0\u10D7\u10D8", hh: "%d \u10E1\u10D0\u10D0\u10D7\u10D8", d: "\u10D3\u10E6\u10D4", dd: "%d \u10D3\u10E6\u10D4", M: "\u10D7\u10D5\u10D4", MM: "%d \u10D7\u10D5\u10D4", y: "\u10EC\u10D4\u10DA\u10D8", yy: "%d \u10EC\u10D4\u10DA\u10D8" }, dayOfMonthOrdinalParse: /0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/, ordinal: function ordinal(e) {
      return 0 === e ? e : 1 === e ? e + "-\u10DA\u10D8" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "\u10DB\u10D4-" + e : e + "-\u10D4";
    }, week: { dow: 1, doy: 7 } });var Ks = { 0: "-\u0448\u0456", 1: "-\u0448\u0456", 2: "-\u0448\u0456", 3: "-\u0448\u0456", 4: "-\u0448\u0456", 5: "-\u0448\u0456", 6: "-\u0448\u044B", 7: "-\u0448\u0456", 8: "-\u0448\u0456", 9: "-\u0448\u044B", 10: "-\u0448\u044B", 20: "-\u0448\u044B", 30: "-\u0448\u044B", 40: "-\u0448\u044B", 50: "-\u0448\u0456", 60: "-\u0448\u044B", 70: "-\u0448\u0456", 80: "-\u0448\u0456", 90: "-\u0448\u044B", 100: "-\u0448\u0456" };l.defineLocale("kk", { months: "\u049B\u0430\u04A3\u0442\u0430\u0440_\u0430\u049B\u043F\u0430\u043D_\u043D\u0430\u0443\u0440\u044B\u0437_\u0441\u04D9\u0443\u0456\u0440_\u043C\u0430\u043C\u044B\u0440_\u043C\u0430\u0443\u0441\u044B\u043C_\u0448\u0456\u043B\u0434\u0435_\u0442\u0430\u043C\u044B\u0437_\u049B\u044B\u0440\u043A\u04AF\u0439\u0435\u043A_\u049B\u0430\u0437\u0430\u043D_\u049B\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D".split("_"), monthsShort: "\u049B\u0430\u04A3_\u0430\u049B\u043F_\u043D\u0430\u0443_\u0441\u04D9\u0443_\u043C\u0430\u043C_\u043C\u0430\u0443_\u0448\u0456\u043B_\u0442\u0430\u043C_\u049B\u044B\u0440_\u049B\u0430\u0437_\u049B\u0430\u0440_\u0436\u0435\u043B".split("_"), weekdays: "\u0436\u0435\u043A\u0441\u0435\u043D\u0431\u0456_\u0434\u04AF\u0439\u0441\u0435\u043D\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043D\u0431\u0456_\u0441\u04D9\u0440\u0441\u0435\u043D\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043D\u0431\u0456_\u0436\u04B1\u043C\u0430_\u0441\u0435\u043D\u0431\u0456".split("_"), weekdaysShort: "\u0436\u0435\u043A_\u0434\u04AF\u0439_\u0441\u0435\u0439_\u0441\u04D9\u0440_\u0431\u0435\u0439_\u0436\u04B1\u043C_\u0441\u0435\u043D".split("_"), weekdaysMin: "\u0436\u043A_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043C_\u0441\u043D".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0411\u04AF\u0433\u0456\u043D \u0441\u0430\u0493\u0430\u0442] LT", nextDay: "[\u0415\u0440\u0442\u0435\u04A3 \u0441\u0430\u0493\u0430\u0442] LT", nextWeek: "dddd [\u0441\u0430\u0493\u0430\u0442] LT", lastDay: "[\u041A\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442] LT", lastWeek: "[\u04E8\u0442\u043A\u0435\u043D \u0430\u043F\u0442\u0430\u043D\u044B\u04A3] dddd [\u0441\u0430\u0493\u0430\u0442] LT", sameElse: "L" }, relativeTime: { future: "%s \u0456\u0448\u0456\u043D\u0434\u0435", past: "%s \u0431\u04B1\u0440\u044B\u043D", s: "\u0431\u0456\u0440\u043D\u0435\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434", ss: "%d \u0441\u0435\u043A\u0443\u043D\u0434", m: "\u0431\u0456\u0440 \u043C\u0438\u043D\u0443\u0442", mm: "%d \u043C\u0438\u043D\u0443\u0442", h: "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442", hh: "%d \u0441\u0430\u0493\u0430\u0442", d: "\u0431\u0456\u0440 \u043A\u04AF\u043D", dd: "%d \u043A\u04AF\u043D", M: "\u0431\u0456\u0440 \u0430\u0439", MM: "%d \u0430\u0439", y: "\u0431\u0456\u0440 \u0436\u044B\u043B", yy: "%d \u0436\u044B\u043B" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0448\u0456|\u0448\u044b)/, ordinal: function ordinal(e) {
      return e + (Ks[e] || Ks[e % 10] || Ks[100 <= e ? 100 : null]);
    }, week: { dow: 1, doy: 7 } });var $s = { 1: "\u17E1", 2: "\u17E2", 3: "\u17E3", 4: "\u17E4", 5: "\u17E5", 6: "\u17E6", 7: "\u17E7", 8: "\u17E8", 9: "\u17E9", 0: "\u17E0" },
      Zs = { "\u17E1": "1", "\u17E2": "2", "\u17E3": "3", "\u17E4": "4", "\u17E5": "5", "\u17E6": "6", "\u17E7": "7", "\u17E8": "8", "\u17E9": "9", "\u17E0": "0" };l.defineLocale("km", { months: "\u1798\u1780\u179A\u17B6_\u1780\u17BB\u1798\u17D2\u1797\u17C8_\u1798\u17B8\u1793\u17B6_\u1798\u17C1\u179F\u17B6_\u17A7\u179F\u1797\u17B6_\u1798\u17B7\u1790\u17BB\u1793\u17B6_\u1780\u1780\u17D2\u1780\u178A\u17B6_\u179F\u17B8\u17A0\u17B6_\u1780\u1789\u17D2\u1789\u17B6_\u178F\u17BB\u179B\u17B6_\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6_\u1792\u17D2\u1793\u17BC".split("_"), monthsShort: "\u1798\u1780\u179A\u17B6_\u1780\u17BB\u1798\u17D2\u1797\u17C8_\u1798\u17B8\u1793\u17B6_\u1798\u17C1\u179F\u17B6_\u17A7\u179F\u1797\u17B6_\u1798\u17B7\u1790\u17BB\u1793\u17B6_\u1780\u1780\u17D2\u1780\u178A\u17B6_\u179F\u17B8\u17A0\u17B6_\u1780\u1789\u17D2\u1789\u17B6_\u178F\u17BB\u179B\u17B6_\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6_\u1792\u17D2\u1793\u17BC".split("_"), weekdays: "\u17A2\u17B6\u1791\u17B7\u178F\u17D2\u1799_\u1785\u17D0\u1793\u17D2\u1791_\u17A2\u1784\u17D2\u1782\u17B6\u179A_\u1796\u17BB\u1792_\u1796\u17D2\u179A\u17A0\u179F\u17D2\u1794\u178F\u17B7\u17CD_\u179F\u17BB\u1780\u17D2\u179A_\u179F\u17C5\u179A\u17CD".split("_"), weekdaysShort: "\u17A2\u17B6_\u1785_\u17A2_\u1796_\u1796\u17D2\u179A_\u179F\u17BB_\u179F".split("_"), weekdaysMin: "\u17A2\u17B6_\u1785_\u17A2_\u1796_\u1796\u17D2\u179A_\u179F\u17BB_\u179F".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/, isPM: function isPM(e) {
      return "\u179B\u17D2\u1784\u17B6\u1785" === e;
    }, meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u1796\u17D2\u179A\u17B9\u1780" : "\u179B\u17D2\u1784\u17B6\u1785";
    }, calendar: { sameDay: "[\u1790\u17D2\u1784\u17C3\u1793\u17C1\u17C7 \u1798\u17C9\u17C4\u1784] LT", nextDay: "[\u179F\u17D2\u17A2\u17C2\u1780 \u1798\u17C9\u17C4\u1784] LT", nextWeek: "dddd [\u1798\u17C9\u17C4\u1784] LT", lastDay: "[\u1798\u17D2\u179F\u17B7\u179B\u1798\u17B7\u1789 \u1798\u17C9\u17C4\u1784] LT", lastWeek: "dddd [\u179F\u1794\u17D2\u178F\u17B6\u17A0\u17CD\u1798\u17BB\u1793] [\u1798\u17C9\u17C4\u1784] LT", sameElse: "L" }, relativeTime: { future: "%s\u1791\u17C0\u178F", past: "%s\u1798\u17BB\u1793", s: "\u1794\u17C9\u17BB\u1793\u17D2\u1798\u17B6\u1793\u179C\u17B7\u1793\u17B6\u1791\u17B8", ss: "%d \u179C\u17B7\u1793\u17B6\u1791\u17B8", m: "\u1798\u17BD\u1799\u1793\u17B6\u1791\u17B8", mm: "%d \u1793\u17B6\u1791\u17B8", h: "\u1798\u17BD\u1799\u1798\u17C9\u17C4\u1784", hh: "%d \u1798\u17C9\u17C4\u1784", d: "\u1798\u17BD\u1799\u1790\u17D2\u1784\u17C3", dd: "%d \u1790\u17D2\u1784\u17C3", M: "\u1798\u17BD\u1799\u1781\u17C2", MM: "%d \u1781\u17C2", y: "\u1798\u17BD\u1799\u1786\u17D2\u1793\u17B6\u17C6", yy: "%d \u1786\u17D2\u1793\u17B6\u17C6" }, dayOfMonthOrdinalParse: /\u1791\u17b8\d{1,2}/, ordinal: "\u1791\u17B8%d", preparse: function preparse(e) {
      return e.replace(/[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g, function (e) {
        return Zs[e];
      });
    }, postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return $s[e];
      });
    }, week: { dow: 1, doy: 4 } });var Bs = { 1: "\u0CE7", 2: "\u0CE8", 3: "\u0CE9", 4: "\u0CEA", 5: "\u0CEB", 6: "\u0CEC", 7: "\u0CED", 8: "\u0CEE", 9: "\u0CEF", 0: "\u0CE6" },
      qs = { "\u0CE7": "1", "\u0CE8": "2", "\u0CE9": "3", "\u0CEA": "4", "\u0CEB": "5", "\u0CEC": "6", "\u0CED": "7", "\u0CEE": "8", "\u0CEF": "9", "\u0CE6": "0" };l.defineLocale("kn", { months: "\u0C9C\u0CA8\u0CB5\u0CB0\u0CBF_\u0CAB\u0CC6\u0CAC\u0CCD\u0CB0\u0CB5\u0CB0\u0CBF_\u0CAE\u0CBE\u0CB0\u0CCD\u0C9A\u0CCD_\u0C8F\u0CAA\u0CCD\u0CB0\u0CBF\u0CB2\u0CCD_\u0CAE\u0CC6\u0CD5_\u0C9C\u0CC2\u0CA8\u0CCD_\u0C9C\u0CC1\u0CB2\u0CC6\u0CD6_\u0C86\u0C97\u0CB8\u0CCD\u0C9F\u0CCD_\u0CB8\u0CC6\u0CAA\u0CCD\u0C9F\u0CC6\u0C82\u0CAC\u0CB0\u0CCD_\u0C85\u0C95\u0CCD\u0C9F\u0CC6\u0CC2\u0CD5\u0CAC\u0CB0\u0CCD_\u0CA8\u0CB5\u0CC6\u0C82\u0CAC\u0CB0\u0CCD_\u0CA1\u0CBF\u0CB8\u0CC6\u0C82\u0CAC\u0CB0\u0CCD".split("_"), monthsShort: "\u0C9C\u0CA8_\u0CAB\u0CC6\u0CAC\u0CCD\u0CB0_\u0CAE\u0CBE\u0CB0\u0CCD\u0C9A\u0CCD_\u0C8F\u0CAA\u0CCD\u0CB0\u0CBF\u0CB2\u0CCD_\u0CAE\u0CC6\u0CD5_\u0C9C\u0CC2\u0CA8\u0CCD_\u0C9C\u0CC1\u0CB2\u0CC6\u0CD6_\u0C86\u0C97\u0CB8\u0CCD\u0C9F\u0CCD_\u0CB8\u0CC6\u0CAA\u0CCD\u0C9F\u0CC6\u0C82_\u0C85\u0C95\u0CCD\u0C9F\u0CC6\u0CC2\u0CD5_\u0CA8\u0CB5\u0CC6\u0C82_\u0CA1\u0CBF\u0CB8\u0CC6\u0C82".split("_"), monthsParseExact: !0, weekdays: "\u0CAD\u0CBE\u0CA8\u0CC1\u0CB5\u0CBE\u0CB0_\u0CB8\u0CC6\u0CC2\u0CD5\u0CAE\u0CB5\u0CBE\u0CB0_\u0CAE\u0C82\u0C97\u0CB3\u0CB5\u0CBE\u0CB0_\u0CAC\u0CC1\u0CA7\u0CB5\u0CBE\u0CB0_\u0C97\u0CC1\u0CB0\u0CC1\u0CB5\u0CBE\u0CB0_\u0CB6\u0CC1\u0C95\u0CCD\u0CB0\u0CB5\u0CBE\u0CB0_\u0CB6\u0CA8\u0CBF\u0CB5\u0CBE\u0CB0".split("_"), weekdaysShort: "\u0CAD\u0CBE\u0CA8\u0CC1_\u0CB8\u0CC6\u0CC2\u0CD5\u0CAE_\u0CAE\u0C82\u0C97\u0CB3_\u0CAC\u0CC1\u0CA7_\u0C97\u0CC1\u0CB0\u0CC1_\u0CB6\u0CC1\u0C95\u0CCD\u0CB0_\u0CB6\u0CA8\u0CBF".split("_"), weekdaysMin: "\u0CAD\u0CBE_\u0CB8\u0CC6\u0CC2\u0CD5_\u0CAE\u0C82_\u0CAC\u0CC1_\u0C97\u0CC1_\u0CB6\u0CC1_\u0CB6".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[\u0C87\u0C82\u0CA6\u0CC1] LT", nextDay: "[\u0CA8\u0CBE\u0CB3\u0CC6] LT", nextWeek: "dddd, LT", lastDay: "[\u0CA8\u0CBF\u0CA8\u0CCD\u0CA8\u0CC6] LT", lastWeek: "[\u0C95\u0CC6\u0CC2\u0CA8\u0CC6\u0CAF] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0CA8\u0C82\u0CA4\u0CB0", past: "%s \u0CB9\u0CBF\u0C82\u0CA6\u0CC6", s: "\u0C95\u0CC6\u0CB2\u0CB5\u0CC1 \u0C95\u0CCD\u0CB7\u0CA3\u0C97\u0CB3\u0CC1", ss: "%d \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CC1\u0C97\u0CB3\u0CC1", m: "\u0C92\u0C82\u0CA6\u0CC1 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7", mm: "%d \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7", h: "\u0C92\u0C82\u0CA6\u0CC1 \u0C97\u0C82\u0C9F\u0CC6", hh: "%d \u0C97\u0C82\u0C9F\u0CC6", d: "\u0C92\u0C82\u0CA6\u0CC1 \u0CA6\u0CBF\u0CA8", dd: "%d \u0CA6\u0CBF\u0CA8", M: "\u0C92\u0C82\u0CA6\u0CC1 \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1", MM: "%d \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1", y: "\u0C92\u0C82\u0CA6\u0CC1 \u0CB5\u0CB0\u0CCD\u0CB7", yy: "%d \u0CB5\u0CB0\u0CCD\u0CB7" }, preparse: function preparse(e) {
      return e.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g, function (e) {
        return qs[e];
      });
    }, postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return Bs[e];
      });
    }, meridiemParse: /\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF" === a ? e < 4 ? e : e + 12 : "\u0CAC\u0CC6\u0CB3\u0CBF\u0C97\u0CCD\u0C97\u0CC6" === a ? e : "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CB9\u0CCD\u0CA8" === a ? 10 <= e ? e : e + 12 : "\u0CB8\u0C82\u0C9C\u0CC6" === a ? e + 12 : void 0;
    }, meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF" : e < 10 ? "\u0CAC\u0CC6\u0CB3\u0CBF\u0C97\u0CCD\u0C97\u0CC6" : e < 17 ? "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CB9\u0CCD\u0CA8" : e < 20 ? "\u0CB8\u0C82\u0C9C\u0CC6" : "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF";
    }, dayOfMonthOrdinalParse: /\d{1,2}(\u0ca8\u0cc6\u0cd5)/, ordinal: function ordinal(e) {
      return e + "\u0CA8\u0CC6\u0CD5";
    }, week: { dow: 0, doy: 6 } }), l.defineLocale("ko", { months: "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"), monthsShort: "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"), weekdays: "\uC77C\uC694\uC77C_\uC6D4\uC694\uC77C_\uD654\uC694\uC77C_\uC218\uC694\uC77C_\uBAA9\uC694\uC77C_\uAE08\uC694\uC77C_\uD1A0\uC694\uC77C".split("_"), weekdaysShort: "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"), weekdaysMin: "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY\uB144 MMMM D\uC77C", LLL: "YYYY\uB144 MMMM D\uC77C A h:mm", LLLL: "YYYY\uB144 MMMM D\uC77C dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY\uB144 MMMM D\uC77C", lll: "YYYY\uB144 MMMM D\uC77C A h:mm", llll: "YYYY\uB144 MMMM D\uC77C dddd A h:mm" }, calendar: { sameDay: "\uC624\uB298 LT", nextDay: "\uB0B4\uC77C LT", nextWeek: "dddd LT", lastDay: "\uC5B4\uC81C LT", lastWeek: "\uC9C0\uB09C\uC8FC dddd LT", sameElse: "L" }, relativeTime: { future: "%s \uD6C4", past: "%s \uC804", s: "\uBA87 \uCD08", ss: "%d\uCD08", m: "1\uBD84", mm: "%d\uBD84", h: "\uD55C \uC2DC\uAC04", hh: "%d\uC2DC\uAC04", d: "\uD558\uB8E8", dd: "%d\uC77C", M: "\uD55C \uB2EC", MM: "%d\uB2EC", y: "\uC77C \uB144", yy: "%d\uB144" }, dayOfMonthOrdinalParse: /\d{1,2}(\uc77c|\uc6d4|\uc8fc)/, ordinal: function ordinal(e, a) {
      switch (a) {case "d":case "D":case "DDD":
          return e + "\uC77C";case "M":
          return e + "\uC6D4";case "w":case "W":
          return e + "\uC8FC";default:
          return e;}
    }, meridiemParse: /\uc624\uc804|\uc624\ud6c4/, isPM: function isPM(e) {
      return "\uC624\uD6C4" === e;
    }, meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\uC624\uC804" : "\uC624\uD6C4";
    } });var Qs = { 1: "\u0661", 2: "\u0662", 3: "\u0663", 4: "\u0664", 5: "\u0665", 6: "\u0666", 7: "\u0667", 8: "\u0668", 9: "\u0669", 0: "\u0660" },
      Xs = { "\u0661": "1", "\u0662": "2", "\u0663": "3", "\u0664": "4", "\u0665": "5", "\u0666": "6", "\u0667": "7", "\u0668": "8", "\u0669": "9", "\u0660": "0" },
      en = ["\u06A9\u0627\u0646\u0648\u0646\u06CC \u062F\u0648\u0648\u06D5\u0645", "\u0634\u0648\u0628\u0627\u062A", "\u0626\u0627\u0632\u0627\u0631", "\u0646\u06CC\u0633\u0627\u0646", "\u0626\u0627\u06CC\u0627\u0631", "\u062D\u0648\u0632\u06D5\u06CC\u0631\u0627\u0646", "\u062A\u06D5\u0645\u0645\u0648\u0632", "\u0626\u0627\u0628", "\u0626\u06D5\u06CC\u0644\u0648\u0648\u0644", "\u062A\u0634\u0631\u06CC\u0646\u06CC \u06CC\u06D5\u0643\u06D5\u0645", "\u062A\u0634\u0631\u06CC\u0646\u06CC \u062F\u0648\u0648\u06D5\u0645", "\u0643\u0627\u0646\u0648\u0646\u06CC \u06CC\u06D5\u06A9\u06D5\u0645"];l.defineLocale("ku", { months: en, monthsShort: en, weekdays: "\u06CC\u0647\u200C\u0643\u0634\u0647\u200C\u0645\u0645\u0647\u200C_\u062F\u0648\u0648\u0634\u0647\u200C\u0645\u0645\u0647\u200C_\u0633\u06CE\u0634\u0647\u200C\u0645\u0645\u0647\u200C_\u0686\u0648\u0627\u0631\u0634\u0647\u200C\u0645\u0645\u0647\u200C_\u067E\u06CE\u0646\u062C\u0634\u0647\u200C\u0645\u0645\u0647\u200C_\u0647\u0647\u200C\u06CC\u0646\u06CC_\u0634\u0647\u200C\u0645\u0645\u0647\u200C".split("_"), weekdaysShort: "\u06CC\u0647\u200C\u0643\u0634\u0647\u200C\u0645_\u062F\u0648\u0648\u0634\u0647\u200C\u0645_\u0633\u06CE\u0634\u0647\u200C\u0645_\u0686\u0648\u0627\u0631\u0634\u0647\u200C\u0645_\u067E\u06CE\u0646\u062C\u0634\u0647\u200C\u0645_\u0647\u0647\u200C\u06CC\u0646\u06CC_\u0634\u0647\u200C\u0645\u0645\u0647\u200C".split("_"), weekdaysMin: "\u06CC_\u062F_\u0633_\u0686_\u067E_\u0647_\u0634".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c|\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc/, isPM: function isPM(e) {
      return (/\u0626\u06ce\u0648\u0627\u0631\u0647\u200c/.test(e)
      );
    }, meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0628\u0647\u200C\u06CC\u0627\u0646\u06CC" : "\u0626\u06CE\u0648\u0627\u0631\u0647\u200C";
    }, calendar: { sameDay: "[\u0626\u0647\u200C\u0645\u0631\u06C6 \u0643\u0627\u062A\u0698\u0645\u06CE\u0631] LT", nextDay: "[\u0628\u0647\u200C\u06CC\u0627\u0646\u06CC \u0643\u0627\u062A\u0698\u0645\u06CE\u0631] LT", nextWeek: "dddd [\u0643\u0627\u062A\u0698\u0645\u06CE\u0631] LT", lastDay: "[\u062F\u0648\u06CE\u0646\u06CE \u0643\u0627\u062A\u0698\u0645\u06CE\u0631] LT", lastWeek: "dddd [\u0643\u0627\u062A\u0698\u0645\u06CE\u0631] LT", sameElse: "L" }, relativeTime: { future: "\u0644\u0647\u200C %s", past: "%s", s: "\u0686\u0647\u200C\u0646\u062F \u0686\u0631\u0643\u0647\u200C\u06CC\u0647\u200C\u0643", ss: "\u0686\u0631\u0643\u0647\u200C %d", m: "\u06CC\u0647\u200C\u0643 \u062E\u0648\u0644\u0647\u200C\u0643", mm: "%d \u062E\u0648\u0644\u0647\u200C\u0643", h: "\u06CC\u0647\u200C\u0643 \u0643\u0627\u062A\u0698\u0645\u06CE\u0631", hh: "%d \u0643\u0627\u062A\u0698\u0645\u06CE\u0631", d: "\u06CC\u0647\u200C\u0643 \u0695\u06C6\u0698", dd: "%d \u0695\u06C6\u0698", M: "\u06CC\u0647\u200C\u0643 \u0645\u0627\u0646\u06AF", MM: "%d \u0645\u0627\u0646\u06AF", y: "\u06CC\u0647\u200C\u0643 \u0633\u0627\u06B5", yy: "%d \u0633\u0627\u06B5" }, preparse: function preparse(e) {
      return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function (e) {
        return Xs[e];
      }).replace(/\u060c/g, ",");
    }, postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return Qs[e];
      }).replace(/,/g, "\u060C");
    }, week: { dow: 6, doy: 12 } });var an = { 0: "-\u0447\u04AF", 1: "-\u0447\u0438", 2: "-\u0447\u0438", 3: "-\u0447\u04AF", 4: "-\u0447\u04AF", 5: "-\u0447\u0438", 6: "-\u0447\u044B", 7: "-\u0447\u0438", 8: "-\u0447\u0438", 9: "-\u0447\u0443", 10: "-\u0447\u0443", 20: "-\u0447\u044B", 30: "-\u0447\u0443", 40: "-\u0447\u044B", 50: "-\u0447\u04AF", 60: "-\u0447\u044B", 70: "-\u0447\u0438", 80: "-\u0447\u0438", 90: "-\u0447\u0443", 100: "-\u0447\u04AF" };function tn(e, a, t, s) {
    var n = { m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"] };return a ? n[t][0] : n[t][1];
  }function sn(e) {
    if (e = parseInt(e, 10), isNaN(e)) return !1;if (e < 0) return !0;if (e < 10) return 4 <= e && e <= 7;if (e < 100) {
      var a = e % 10;return sn(0 === a ? e / 10 : a);
    }if (e < 1e4) {
      for (; 10 <= e;) {
        e /= 10;
      }return sn(e);
    }return sn(e /= 1e3);
  }l.defineLocale("ky", { months: "\u044F\u043D\u0432\u0430\u0440\u044C_\u0444\u0435\u0432\u0440\u0430\u043B\u044C_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0435\u043B\u044C_\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C_\u043E\u043A\u0442\u044F\u0431\u0440\u044C_\u043D\u043E\u044F\u0431\u0440\u044C_\u0434\u0435\u043A\u0430\u0431\u0440\u044C".split("_"), monthsShort: "\u044F\u043D\u0432_\u0444\u0435\u0432_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440_\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433_\u0441\u0435\u043D_\u043E\u043A\u0442_\u043D\u043E\u044F_\u0434\u0435\u043A".split("_"), weekdays: "\u0416\u0435\u043A\u0448\u0435\u043C\u0431\u0438_\u0414\u04AF\u0439\u0448\u04E9\u043C\u0431\u04AF_\u0428\u0435\u0439\u0448\u0435\u043C\u0431\u0438_\u0428\u0430\u0440\u0448\u0435\u043C\u0431\u0438_\u0411\u0435\u0439\u0448\u0435\u043C\u0431\u0438_\u0416\u0443\u043C\u0430_\u0418\u0448\u0435\u043C\u0431\u0438".split("_"), weekdaysShort: "\u0416\u0435\u043A_\u0414\u04AF\u0439_\u0428\u0435\u0439_\u0428\u0430\u0440_\u0411\u0435\u0439_\u0416\u0443\u043C_\u0418\u0448\u0435".split("_"), weekdaysMin: "\u0416\u043A_\u0414\u0439_\u0428\u0439_\u0428\u0440_\u0411\u0439_\u0416\u043C_\u0418\u0448".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0411\u04AF\u0433\u04AF\u043D \u0441\u0430\u0430\u0442] LT", nextDay: "[\u042D\u0440\u0442\u0435\u04A3 \u0441\u0430\u0430\u0442] LT", nextWeek: "dddd [\u0441\u0430\u0430\u0442] LT", lastDay: "[\u041A\u0435\u0447\u044D\u044D \u0441\u0430\u0430\u0442] LT", lastWeek: "[\u04E8\u0442\u043A\u04E9\u043D \u0430\u043F\u0442\u0430\u043D\u044B\u043D] dddd [\u043A\u04AF\u043D\u04AF] [\u0441\u0430\u0430\u0442] LT", sameElse: "L" }, relativeTime: { future: "%s \u0438\u0447\u0438\u043D\u0434\u0435", past: "%s \u043C\u0443\u0440\u0443\u043D", s: "\u0431\u0438\u0440\u043D\u0435\u0447\u0435 \u0441\u0435\u043A\u0443\u043D\u0434", ss: "%d \u0441\u0435\u043A\u0443\u043D\u0434", m: "\u0431\u0438\u0440 \u043C\u04AF\u043D\u04E9\u0442", mm: "%d \u043C\u04AF\u043D\u04E9\u0442", h: "\u0431\u0438\u0440 \u0441\u0430\u0430\u0442", hh: "%d \u0441\u0430\u0430\u0442", d: "\u0431\u0438\u0440 \u043A\u04AF\u043D", dd: "%d \u043A\u04AF\u043D", M: "\u0431\u0438\u0440 \u0430\u0439", MM: "%d \u0430\u0439", y: "\u0431\u0438\u0440 \u0436\u044B\u043B", yy: "%d \u0436\u044B\u043B" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/, ordinal: function ordinal(e) {
      return e + (an[e] || an[e % 10] || an[100 <= e ? 100 : null]);
    }, week: { dow: 1, doy: 7 } }), l.defineLocale("lb", { months: "Januar_Februar_M\xe4erz_Abr\xebll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonndeg_M\xe9indeg_D\xebnschdeg_M\xebttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), weekdaysShort: "So._M\xe9._D\xeb._M\xeb._Do._Fr._Sa.".split("_"), weekdaysMin: "So_M\xe9_D\xeb_M\xeb_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" }, calendar: { sameDay: "[Haut um] LT", sameElse: "L", nextDay: "[Muer um] LT", nextWeek: "dddd [um] LT", lastDay: "[G\xebschter um] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 2:case 4:
            return "[Leschten] dddd [um] LT";default:
            return "[Leschte] dddd [um] LT";}
      } }, relativeTime: { future: function future(e) {
        return sn(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e;
      }, past: function past(e) {
        return sn(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e;
      }, s: "e puer Sekonnen", ss: "%d Sekonnen", m: tn, mm: "%d Minutten", h: tn, hh: "%d Stonnen", d: tn, dd: "%d Deeg", M: tn, MM: "%d M\xe9int", y: tn, yy: "%d Joer" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("lo", { months: "\u0EA1\u0EB1\u0E87\u0E81\u0EAD\u0E99_\u0E81\u0EB8\u0EA1\u0E9E\u0EB2_\u0EA1\u0EB5\u0E99\u0EB2_\u0EC0\u0EA1\u0EAA\u0EB2_\u0E9E\u0EB6\u0E94\u0EAA\u0EB0\u0E9E\u0EB2_\u0EA1\u0EB4\u0E96\u0EB8\u0E99\u0EB2_\u0E81\u0ECD\u0EA5\u0EB0\u0E81\u0EBB\u0E94_\u0EAA\u0EB4\u0E87\u0EAB\u0EB2_\u0E81\u0EB1\u0E99\u0E8D\u0EB2_\u0E95\u0EB8\u0EA5\u0EB2_\u0E9E\u0EB0\u0E88\u0EB4\u0E81_\u0E97\u0EB1\u0E99\u0EA7\u0EB2".split("_"), monthsShort: "\u0EA1\u0EB1\u0E87\u0E81\u0EAD\u0E99_\u0E81\u0EB8\u0EA1\u0E9E\u0EB2_\u0EA1\u0EB5\u0E99\u0EB2_\u0EC0\u0EA1\u0EAA\u0EB2_\u0E9E\u0EB6\u0E94\u0EAA\u0EB0\u0E9E\u0EB2_\u0EA1\u0EB4\u0E96\u0EB8\u0E99\u0EB2_\u0E81\u0ECD\u0EA5\u0EB0\u0E81\u0EBB\u0E94_\u0EAA\u0EB4\u0E87\u0EAB\u0EB2_\u0E81\u0EB1\u0E99\u0E8D\u0EB2_\u0E95\u0EB8\u0EA5\u0EB2_\u0E9E\u0EB0\u0E88\u0EB4\u0E81_\u0E97\u0EB1\u0E99\u0EA7\u0EB2".split("_"), weekdays: "\u0EAD\u0EB2\u0E97\u0EB4\u0E94_\u0E88\u0EB1\u0E99_\u0EAD\u0EB1\u0E87\u0E84\u0EB2\u0E99_\u0E9E\u0EB8\u0E94_\u0E9E\u0EB0\u0EAB\u0EB1\u0E94_\u0EAA\u0EB8\u0E81_\u0EC0\u0EAA\u0EBB\u0EB2".split("_"), weekdaysShort: "\u0E97\u0EB4\u0E94_\u0E88\u0EB1\u0E99_\u0EAD\u0EB1\u0E87\u0E84\u0EB2\u0E99_\u0E9E\u0EB8\u0E94_\u0E9E\u0EB0\u0EAB\u0EB1\u0E94_\u0EAA\u0EB8\u0E81_\u0EC0\u0EAA\u0EBB\u0EB2".split("_"), weekdaysMin: "\u0E97_\u0E88_\u0EAD\u0E84_\u0E9E_\u0E9E\u0EAB_\u0EAA\u0E81_\u0EAA".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "\u0EA7\u0EB1\u0E99dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/, isPM: function isPM(e) {
      return "\u0E95\u0EAD\u0E99\u0EC1\u0EA5\u0E87" === e;
    }, meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0E95\u0EAD\u0E99\u0EC0\u0E8A\u0EBB\u0EC9\u0EB2" : "\u0E95\u0EAD\u0E99\u0EC1\u0EA5\u0E87";
    }, calendar: { sameDay: "[\u0EA1\u0EB7\u0EC9\u0E99\u0EB5\u0EC9\u0EC0\u0EA7\u0EA5\u0EB2] LT", nextDay: "[\u0EA1\u0EB7\u0EC9\u0EAD\u0EB7\u0EC8\u0E99\u0EC0\u0EA7\u0EA5\u0EB2] LT", nextWeek: "[\u0EA7\u0EB1\u0E99]dddd[\u0EDC\u0EC9\u0EB2\u0EC0\u0EA7\u0EA5\u0EB2] LT", lastDay: "[\u0EA1\u0EB7\u0EC9\u0EA7\u0EB2\u0E99\u0E99\u0EB5\u0EC9\u0EC0\u0EA7\u0EA5\u0EB2] LT", lastWeek: "[\u0EA7\u0EB1\u0E99]dddd[\u0EC1\u0EA5\u0EC9\u0EA7\u0E99\u0EB5\u0EC9\u0EC0\u0EA7\u0EA5\u0EB2] LT", sameElse: "L" }, relativeTime: { future: "\u0EAD\u0EB5\u0E81 %s", past: "%s\u0E9C\u0EC8\u0EB2\u0E99\u0EA1\u0EB2", s: "\u0E9A\u0ECD\u0EC8\u0EC0\u0E97\u0EBB\u0EC8\u0EB2\u0EC3\u0E94\u0EA7\u0EB4\u0E99\u0EB2\u0E97\u0EB5", ss: "%d \u0EA7\u0EB4\u0E99\u0EB2\u0E97\u0EB5", m: "1 \u0E99\u0EB2\u0E97\u0EB5", mm: "%d \u0E99\u0EB2\u0E97\u0EB5", h: "1 \u0E8A\u0EBB\u0EC8\u0EA7\u0EC2\u0EA1\u0E87", hh: "%d \u0E8A\u0EBB\u0EC8\u0EA7\u0EC2\u0EA1\u0E87", d: "1 \u0EA1\u0EB7\u0EC9", dd: "%d \u0EA1\u0EB7\u0EC9", M: "1 \u0EC0\u0E94\u0EB7\u0EAD\u0E99", MM: "%d \u0EC0\u0E94\u0EB7\u0EAD\u0E99", y: "1 \u0E9B\u0EB5", yy: "%d \u0E9B\u0EB5" }, dayOfMonthOrdinalParse: /(\u0e97\u0eb5\u0ec8)\d{1,2}/, ordinal: function ordinal(e) {
      return "\u0E97\u0EB5\u0EC8" + e;
    } });var nn = { ss: "sekund\u0117_sekund\u017Ei\u0173_sekundes", m: "minut\u0117_minut\u0117s_minut\u0119", mm: "minut\u0117s_minu\u010Di\u0173_minutes", h: "valanda_valandos_valand\u0105", hh: "valandos_valand\u0173_valandas", d: "diena_dienos_dien\u0105", dd: "dienos_dien\u0173_dienas", M: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012F", MM: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius", y: "metai_met\u0173_metus", yy: "metai_met\u0173_metus" };function dn(e, a, t, s) {
    return a ? _n(t)[0] : s ? _n(t)[1] : _n(t)[2];
  }function rn(e) {
    return e % 10 == 0 || 10 < e && e < 20;
  }function _n(e) {
    return nn[e].split("_");
  }function on(e, a, t, s) {
    var n = e + " ";return 1 === e ? n + dn(0, a, t[0], s) : a ? n + (rn(e) ? _n(t)[1] : _n(t)[0]) : s ? n + _n(t)[1] : n + (rn(e) ? _n(t)[1] : _n(t)[2]);
  }l.defineLocale("lt", { months: { format: "sausio_vasario_kovo_baland\u017Eio_gegu\u017E\u0117s_bir\u017Eelio_liepos_rugpj\u016B\u010Dio_rugs\u0117jo_spalio_lapkri\u010Dio_gruod\u017Eio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegu\u017E\u0117_bir\u017Eelis_liepa_rugpj\u016Btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ }, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: { format: "sekmadien\u012F_pirmadien\u012F_antradien\u012F_tre\u010Diadien\u012F_ketvirtadien\u012F_penktadien\u012F_\u0161e\u0161tadien\u012F".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_tre\u010Diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"), isFormat: /dddd HH:mm/ }, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"), weekdaysMin: "S_P_A_T_K_Pn_\u0160".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, calendar: { sameDay: "[\u0160iandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Pra\u0117jus\u012F] dddd LT", sameElse: "L" }, relativeTime: { future: "po %s", past: "prie\u0161 %s", s: function s(e, a, t, _s2) {
        return a ? "kelios sekund\u0117s" : _s2 ? "keli\u0173 sekund\u017Ei\u0173" : "kelias sekundes";
      }, ss: on, m: dn, mm: on, h: dn, hh: on, d: dn, dd: on, M: dn, MM: on, y: dn, yy: on }, dayOfMonthOrdinalParse: /\d{1,2}-oji/, ordinal: function ordinal(e) {
      return e + "-oji";
    }, week: { dow: 1, doy: 4 } });var mn = { ss: "sekundes_sekund\u0113m_sekunde_sekundes".split("_"), m: "min\u016Btes_min\u016Bt\u0113m_min\u016Bte_min\u016Btes".split("_"), mm: "min\u016Btes_min\u016Bt\u0113m_min\u016Bte_min\u016Btes".split("_"), h: "stundas_stund\u0101m_stunda_stundas".split("_"), hh: "stundas_stund\u0101m_stunda_stundas".split("_"), d: "dienas_dien\u0101m_diena_dienas".split("_"), dd: "dienas_dien\u0101m_diena_dienas".split("_"), M: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"), MM: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"), y: "gada_gadiem_gads_gadi".split("_"), yy: "gada_gadiem_gads_gadi".split("_") };function un(e, a, t) {
    return t ? a % 10 == 1 && a % 100 != 11 ? e[2] : e[3] : a % 10 == 1 && a % 100 != 11 ? e[0] : e[1];
  }function ln(e, a, t) {
    return e + " " + un(mn[t], e, a);
  }function Mn(e, a, t) {
    return un(mn[t], e, a);
  }l.defineLocale("lv", { months: "janv\u0101ris_febru\u0101ris_marts_apr\u012Blis_maijs_j\u016Bnijs_j\u016Blijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_j\u016Bn_j\u016Bl_aug_sep_okt_nov_dec".split("_"), weekdays: "sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, calendar: { sameDay: "[\u0160odien pulksten] LT", nextDay: "[R\u012Bt pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT", sameElse: "L" }, relativeTime: { future: "p\u0113c %s", past: "pirms %s", s: function s(e, a) {
        return a ? "da\u017Eas sekundes" : "da\u017E\u0101m sekund\u0113m";
      }, ss: ln, m: Mn, mm: ln, h: Mn, hh: ln, d: Mn, dd: ln, M: Mn, MM: ln, y: Mn, yy: ln }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });var hn = { words: { ss: ["sekund", "sekunda", "sekundi"], m: ["jedan minut", "jednog minuta"], mm: ["minut", "minuta", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mjesec", "mjeseca", "mjeseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function correctGrammaticalCase(e, a) {
      return 1 === e ? a[0] : 2 <= e && e <= 4 ? a[1] : a[2];
    }, translate: function translate(e, a, t) {
      var s = hn.words[t];return 1 === t.length ? a ? s[0] : s[1] : e + " " + hn.correctGrammaticalCase(e, s);
    } };function Ln(e, a, t, s) {
    switch (t) {case "s":
        return a ? "\u0445\u044D\u0434\u0445\u044D\u043D \u0441\u0435\u043A\u0443\u043D\u0434" : "\u0445\u044D\u0434\u0445\u044D\u043D \u0441\u0435\u043A\u0443\u043D\u0434\u044B\u043D";case "ss":
        return e + (a ? " \u0441\u0435\u043A\u0443\u043D\u0434" : " \u0441\u0435\u043A\u0443\u043D\u0434\u044B\u043D");case "m":case "mm":
        return e + (a ? " \u043C\u0438\u043D\u0443\u0442" : " \u043C\u0438\u043D\u0443\u0442\u044B\u043D");case "h":case "hh":
        return e + (a ? " \u0446\u0430\u0433" : " \u0446\u0430\u0433\u0438\u0439\u043D");case "d":case "dd":
        return e + (a ? " \u04E9\u0434\u04E9\u0440" : " \u04E9\u0434\u0440\u0438\u0439\u043D");case "M":case "MM":
        return e + (a ? " \u0441\u0430\u0440" : " \u0441\u0430\u0440\u044B\u043D");case "y":case "yy":
        return e + (a ? " \u0436\u0438\u043B" : " \u0436\u0438\u043B\u0438\u0439\u043D");default:
        return e;}
  }l.defineLocale("me", { months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._\u010Det._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_\u010De_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[u] [nedjelju] [u] LT";case 3:
            return "[u] [srijedu] [u] LT";case 6:
            return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
            return "[u] dddd [u] LT";}
      }, lastDay: "[ju\u010De u] LT", lastWeek: function lastWeek() {
        return ["[pro\u0161le] [nedjelje] [u] LT", "[pro\u0161log] [ponedjeljka] [u] LT", "[pro\u0161log] [utorka] [u] LT", "[pro\u0161le] [srijede] [u] LT", "[pro\u0161log] [\u010Detvrtka] [u] LT", "[pro\u0161log] [petka] [u] LT", "[pro\u0161le] [subote] [u] LT"][this.day()];
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "nekoliko sekundi", ss: hn.translate, m: hn.translate, mm: hn.translate, h: hn.translate, hh: hn.translate, d: "dan", dd: hn.translate, M: "mjesec", MM: hn.translate, y: "godinu", yy: hn.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }), l.defineLocale("mi", { months: "Kohi-t\u0101te_Hui-tanguru_Pout\u016B-te-rangi_Paenga-wh\u0101wh\u0101_Haratua_Pipiri_H\u014Dngoingoi_Here-turi-k\u014Dk\u0101_Mahuru_Whiringa-\u0101-nuku_Whiringa-\u0101-rangi_Hakihea".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_H\u014Dngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i, weekdays: "R\u0101tapu_Mane_T\u016Brei_Wenerei_T\u0101ite_Paraire_H\u0101tarei".split("_"), weekdaysShort: "Ta_Ma_T\u016B_We_T\u0101i_Pa_H\u0101".split("_"), weekdaysMin: "Ta_Ma_T\u016B_We_T\u0101i_Pa_H\u0101".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, calendar: { sameDay: "[i teie mahana, i] LT", nextDay: "[apopo i] LT", nextWeek: "dddd [i] LT", lastDay: "[inanahi i] LT", lastWeek: "dddd [whakamutunga i] LT", sameElse: "L" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te h\u0113kona ruarua", ss: "%d h\u0113kona", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }), l.defineLocale("mk", { months: "\u0458\u0430\u043D\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0438\u043B_\u043C\u0430\u0458_\u0458\u0443\u043D\u0438_\u0458\u0443\u043B\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438_\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438_\u043D\u043E\u0435\u043C\u0432\u0440\u0438_\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438".split("_"), monthsShort: "\u0458\u0430\u043D_\u0444\u0435\u0432_\u043C\u0430\u0440_\u0430\u043F\u0440_\u043C\u0430\u0458_\u0458\u0443\u043D_\u0458\u0443\u043B_\u0430\u0432\u0433_\u0441\u0435\u043F_\u043E\u043A\u0442_\u043D\u043E\u0435_\u0434\u0435\u043A".split("_"), weekdays: "\u043D\u0435\u0434\u0435\u043B\u0430_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u043E\u043A_\u043F\u0435\u0442\u043E\u043A_\u0441\u0430\u0431\u043E\u0442\u0430".split("_"), weekdaysShort: "\u043D\u0435\u0434_\u043F\u043E\u043D_\u0432\u0442\u043E_\u0441\u0440\u0435_\u0447\u0435\u0442_\u043F\u0435\u0442_\u0441\u0430\u0431".split("_"), weekdaysMin: "\u043De_\u043Fo_\u0432\u0442_\u0441\u0440_\u0447\u0435_\u043F\u0435_\u0441a".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[\u0414\u0435\u043D\u0435\u0441 \u0432\u043E] LT", nextDay: "[\u0423\u0442\u0440\u0435 \u0432\u043E] LT", nextWeek: "[\u0412\u043E] dddd [\u0432\u043E] LT", lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432\u043E] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:case 6:
            return "[\u0418\u0437\u043C\u0438\u043D\u0430\u0442\u0430\u0442\u0430] dddd [\u0432\u043E] LT";case 1:case 2:case 4:case 5:
            return "[\u0418\u0437\u043C\u0438\u043D\u0430\u0442\u0438\u043E\u0442] dddd [\u0432\u043E] LT";}
      }, sameElse: "L" }, relativeTime: { future: "\u043F\u043E\u0441\u043B\u0435 %s", past: "\u043F\u0440\u0435\u0434 %s", s: "\u043D\u0435\u043A\u043E\u043B\u043A\u0443 \u0441\u0435\u043A\u0443\u043D\u0434\u0438", ss: "%d \u0441\u0435\u043A\u0443\u043D\u0434\u0438", m: "\u043C\u0438\u043D\u0443\u0442\u0430", mm: "%d \u043C\u0438\u043D\u0443\u0442\u0438", h: "\u0447\u0430\u0441", hh: "%d \u0447\u0430\u0441\u0430", d: "\u0434\u0435\u043D", dd: "%d \u0434\u0435\u043D\u0430", M: "\u043C\u0435\u0441\u0435\u0446", MM: "%d \u043C\u0435\u0441\u0435\u0446\u0438", y: "\u0433\u043E\u0434\u0438\u043D\u0430", yy: "%d \u0433\u043E\u0434\u0438\u043D\u0438" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/, ordinal: function ordinal(e) {
      var a = e % 10,
          t = e % 100;return 0 === e ? e + "-\u0435\u0432" : 0 === t ? e + "-\u0435\u043D" : 10 < t && t < 20 ? e + "-\u0442\u0438" : 1 === a ? e + "-\u0432\u0438" : 2 === a ? e + "-\u0440\u0438" : 7 === a || 8 === a ? e + "-\u043C\u0438" : e + "-\u0442\u0438";
    }, week: { dow: 1, doy: 7 } }), l.defineLocale("ml", { months: "\u0D1C\u0D28\u0D41\u0D35\u0D30\u0D3F_\u0D2B\u0D46\u0D2C\u0D4D\u0D30\u0D41\u0D35\u0D30\u0D3F_\u0D2E\u0D3E\u0D7C\u0D1A\u0D4D\u0D1A\u0D4D_\u0D0F\u0D2A\u0D4D\u0D30\u0D3F\u0D7D_\u0D2E\u0D47\u0D2F\u0D4D_\u0D1C\u0D42\u0D7A_\u0D1C\u0D42\u0D32\u0D48_\u0D13\u0D17\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D4D_\u0D38\u0D46\u0D2A\u0D4D\u0D31\u0D4D\u0D31\u0D02\u0D2C\u0D7C_\u0D12\u0D15\u0D4D\u0D1F\u0D4B\u0D2C\u0D7C_\u0D28\u0D35\u0D02\u0D2C\u0D7C_\u0D21\u0D3F\u0D38\u0D02\u0D2C\u0D7C".split("_"), monthsShort: "\u0D1C\u0D28\u0D41._\u0D2B\u0D46\u0D2C\u0D4D\u0D30\u0D41._\u0D2E\u0D3E\u0D7C._\u0D0F\u0D2A\u0D4D\u0D30\u0D3F._\u0D2E\u0D47\u0D2F\u0D4D_\u0D1C\u0D42\u0D7A_\u0D1C\u0D42\u0D32\u0D48._\u0D13\u0D17._\u0D38\u0D46\u0D2A\u0D4D\u0D31\u0D4D\u0D31._\u0D12\u0D15\u0D4D\u0D1F\u0D4B._\u0D28\u0D35\u0D02._\u0D21\u0D3F\u0D38\u0D02.".split("_"), monthsParseExact: !0, weekdays: "\u0D1E\u0D3E\u0D2F\u0D31\u0D3E\u0D34\u0D4D\u0D1A_\u0D24\u0D3F\u0D19\u0D4D\u0D15\u0D33\u0D3E\u0D34\u0D4D\u0D1A_\u0D1A\u0D4A\u0D35\u0D4D\u0D35\u0D3E\u0D34\u0D4D\u0D1A_\u0D2C\u0D41\u0D27\u0D28\u0D3E\u0D34\u0D4D\u0D1A_\u0D35\u0D4D\u0D2F\u0D3E\u0D34\u0D3E\u0D34\u0D4D\u0D1A_\u0D35\u0D46\u0D33\u0D4D\u0D33\u0D3F\u0D2F\u0D3E\u0D34\u0D4D\u0D1A_\u0D36\u0D28\u0D3F\u0D2F\u0D3E\u0D34\u0D4D\u0D1A".split("_"), weekdaysShort: "\u0D1E\u0D3E\u0D2F\u0D7C_\u0D24\u0D3F\u0D19\u0D4D\u0D15\u0D7E_\u0D1A\u0D4A\u0D35\u0D4D\u0D35_\u0D2C\u0D41\u0D27\u0D7B_\u0D35\u0D4D\u0D2F\u0D3E\u0D34\u0D02_\u0D35\u0D46\u0D33\u0D4D\u0D33\u0D3F_\u0D36\u0D28\u0D3F".split("_"), weekdaysMin: "\u0D1E\u0D3E_\u0D24\u0D3F_\u0D1A\u0D4A_\u0D2C\u0D41_\u0D35\u0D4D\u0D2F\u0D3E_\u0D35\u0D46_\u0D36".split("_"), longDateFormat: { LT: "A h:mm -\u0D28\u0D41", LTS: "A h:mm:ss -\u0D28\u0D41", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -\u0D28\u0D41", LLLL: "dddd, D MMMM YYYY, A h:mm -\u0D28\u0D41" }, calendar: { sameDay: "[\u0D07\u0D28\u0D4D\u0D28\u0D4D] LT", nextDay: "[\u0D28\u0D3E\u0D33\u0D46] LT", nextWeek: "dddd, LT", lastDay: "[\u0D07\u0D28\u0D4D\u0D28\u0D32\u0D46] LT", lastWeek: "[\u0D15\u0D34\u0D3F\u0D1E\u0D4D\u0D1E] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0D15\u0D34\u0D3F\u0D1E\u0D4D\u0D1E\u0D4D", past: "%s \u0D2E\u0D41\u0D7B\u0D2A\u0D4D", s: "\u0D05\u0D7D\u0D2A \u0D28\u0D3F\u0D2E\u0D3F\u0D37\u0D19\u0D4D\u0D19\u0D7E", ss: "%d \u0D38\u0D46\u0D15\u0D4D\u0D15\u0D7B\u0D21\u0D4D", m: "\u0D12\u0D30\u0D41 \u0D2E\u0D3F\u0D28\u0D3F\u0D31\u0D4D\u0D31\u0D4D", mm: "%d \u0D2E\u0D3F\u0D28\u0D3F\u0D31\u0D4D\u0D31\u0D4D", h: "\u0D12\u0D30\u0D41 \u0D2E\u0D23\u0D3F\u0D15\u0D4D\u0D15\u0D42\u0D7C", hh: "%d \u0D2E\u0D23\u0D3F\u0D15\u0D4D\u0D15\u0D42\u0D7C", d: "\u0D12\u0D30\u0D41 \u0D26\u0D3F\u0D35\u0D38\u0D02", dd: "%d \u0D26\u0D3F\u0D35\u0D38\u0D02", M: "\u0D12\u0D30\u0D41 \u0D2E\u0D3E\u0D38\u0D02", MM: "%d \u0D2E\u0D3E\u0D38\u0D02", y: "\u0D12\u0D30\u0D41 \u0D35\u0D7C\u0D37\u0D02", yy: "%d \u0D35\u0D7C\u0D37\u0D02" }, meridiemParse: /\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0D30\u0D3E\u0D24\u0D4D\u0D30\u0D3F" === a && 4 <= e || "\u0D09\u0D1A\u0D4D\u0D1A \u0D15\u0D34\u0D3F\u0D1E\u0D4D\u0D1E\u0D4D" === a || "\u0D35\u0D48\u0D15\u0D41\u0D28\u0D4D\u0D28\u0D47\u0D30\u0D02" === a ? e + 12 : e;
    }, meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u0D30\u0D3E\u0D24\u0D4D\u0D30\u0D3F" : e < 12 ? "\u0D30\u0D3E\u0D35\u0D3F\u0D32\u0D46" : e < 17 ? "\u0D09\u0D1A\u0D4D\u0D1A \u0D15\u0D34\u0D3F\u0D1E\u0D4D\u0D1E\u0D4D" : e < 20 ? "\u0D35\u0D48\u0D15\u0D41\u0D28\u0D4D\u0D28\u0D47\u0D30\u0D02" : "\u0D30\u0D3E\u0D24\u0D4D\u0D30\u0D3F";
    } }), l.defineLocale("mn", { months: "\u041D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0425\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u04E9\u0440\u04E9\u0432\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u043E\u043B\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u041D\u0430\u0439\u043C\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0415\u0441\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043D \u043D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043D \u0445\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split("_"), monthsShort: "1 \u0441\u0430\u0440_2 \u0441\u0430\u0440_3 \u0441\u0430\u0440_4 \u0441\u0430\u0440_5 \u0441\u0430\u0440_6 \u0441\u0430\u0440_7 \u0441\u0430\u0440_8 \u0441\u0430\u0440_9 \u0441\u0430\u0440_10 \u0441\u0430\u0440_11 \u0441\u0430\u0440_12 \u0441\u0430\u0440".split("_"), monthsParseExact: !0, weekdays: "\u041D\u044F\u043C_\u0414\u0430\u0432\u0430\u0430_\u041C\u044F\u0433\u043C\u0430\u0440_\u041B\u0445\u0430\u0433\u0432\u0430_\u041F\u04AF\u0440\u044D\u0432_\u0411\u0430\u0430\u0441\u0430\u043D_\u0411\u044F\u043C\u0431\u0430".split("_"), weekdaysShort: "\u041D\u044F\u043C_\u0414\u0430\u0432_\u041C\u044F\u0433_\u041B\u0445\u0430_\u041F\u04AF\u0440_\u0411\u0430\u0430_\u0411\u044F\u043C".split("_"), weekdaysMin: "\u041D\u044F_\u0414\u0430_\u041C\u044F_\u041B\u0445_\u041F\u04AF_\u0411\u0430_\u0411\u044F".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY \u043E\u043D\u044B MMMM\u044B\u043D D", LLL: "YYYY \u043E\u043D\u044B MMMM\u044B\u043D D HH:mm", LLLL: "dddd, YYYY \u043E\u043D\u044B MMMM\u044B\u043D D HH:mm" }, meridiemParse: /\u04ae\u04e8|\u04ae\u0425/i, isPM: function isPM(e) {
      return "\u04AE\u0425" === e;
    }, meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u04AE\u04E8" : "\u04AE\u0425";
    }, calendar: { sameDay: "[\u04E8\u043D\u04E9\u04E9\u0434\u04E9\u0440] LT", nextDay: "[\u041C\u0430\u0440\u0433\u0430\u0430\u0448] LT", nextWeek: "[\u0418\u0440\u044D\u0445] dddd LT", lastDay: "[\u04E8\u0447\u0438\u0433\u0434\u04E9\u0440] LT", lastWeek: "[\u04E8\u043D\u0433\u04E9\u0440\u0441\u04E9\u043D] dddd LT", sameElse: "L" }, relativeTime: { future: "%s \u0434\u0430\u0440\u0430\u0430", past: "%s \u04E9\u043C\u043D\u04E9", s: Ln, ss: Ln, m: Ln, mm: Ln, h: Ln, hh: Ln, d: Ln, dd: Ln, M: Ln, MM: Ln, y: Ln, yy: Ln }, dayOfMonthOrdinalParse: /\d{1,2} \u04e9\u0434\u04e9\u0440/, ordinal: function ordinal(e, a) {
      switch (a) {case "d":case "D":case "DDD":
          return e + " \u04E9\u0434\u04E9\u0440";default:
          return e;}
    } });var cn = { 1: "\u0967", 2: "\u0968", 3: "\u0969", 4: "\u096A", 5: "\u096B", 6: "\u096C", 7: "\u096D", 8: "\u096E", 9: "\u096F", 0: "\u0966" },
      Yn = { "\u0967": "1", "\u0968": "2", "\u0969": "3", "\u096A": "4", "\u096B": "5", "\u096C": "6", "\u096D": "7", "\u096E": "8", "\u096F": "9", "\u0966": "0" };function yn(e, a, t, s) {
    var n = "";if (a) switch (t) {case "s":
        n = "\u0915\u093E\u0939\u0940 \u0938\u0947\u0915\u0902\u0926";break;case "ss":
        n = "%d \u0938\u0947\u0915\u0902\u0926";break;case "m":
        n = "\u090F\u0915 \u092E\u093F\u0928\u093F\u091F";break;case "mm":
        n = "%d \u092E\u093F\u0928\u093F\u091F\u0947";break;case "h":
        n = "\u090F\u0915 \u0924\u093E\u0938";break;case "hh":
        n = "%d \u0924\u093E\u0938";break;case "d":
        n = "\u090F\u0915 \u0926\u093F\u0935\u0938";break;case "dd":
        n = "%d \u0926\u093F\u0935\u0938";break;case "M":
        n = "\u090F\u0915 \u092E\u0939\u093F\u0928\u093E";break;case "MM":
        n = "%d \u092E\u0939\u093F\u0928\u0947";break;case "y":
        n = "\u090F\u0915 \u0935\u0930\u094D\u0937";break;case "yy":
        n = "%d \u0935\u0930\u094D\u0937\u0947";break;} else switch (t) {case "s":
        n = "\u0915\u093E\u0939\u0940 \u0938\u0947\u0915\u0902\u0926\u093E\u0902";break;case "ss":
        n = "%d \u0938\u0947\u0915\u0902\u0926\u093E\u0902";break;case "m":
        n = "\u090F\u0915\u093E \u092E\u093F\u0928\u093F\u091F\u093E";break;case "mm":
        n = "%d \u092E\u093F\u0928\u093F\u091F\u093E\u0902";break;case "h":
        n = "\u090F\u0915\u093E \u0924\u093E\u0938\u093E";break;case "hh":
        n = "%d \u0924\u093E\u0938\u093E\u0902";break;case "d":
        n = "\u090F\u0915\u093E \u0926\u093F\u0935\u0938\u093E";break;case "dd":
        n = "%d \u0926\u093F\u0935\u0938\u093E\u0902";break;case "M":
        n = "\u090F\u0915\u093E \u092E\u0939\u093F\u0928\u094D\u092F\u093E";break;case "MM":
        n = "%d \u092E\u0939\u093F\u0928\u094D\u092F\u093E\u0902";break;case "y":
        n = "\u090F\u0915\u093E \u0935\u0930\u094D\u0937\u093E";break;case "yy":
        n = "%d \u0935\u0930\u094D\u0937\u093E\u0902";break;}return n.replace(/%d/i, e);
  }l.defineLocale("mr", { months: "\u091C\u093E\u0928\u0947\u0935\u093E\u0930\u0940_\u092B\u0947\u092C\u094D\u0930\u0941\u0935\u093E\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u090F\u092A\u094D\u0930\u093F\u0932_\u092E\u0947_\u091C\u0942\u0928_\u091C\u0941\u0932\u0948_\u0911\u0917\u0938\u094D\u091F_\u0938\u092A\u094D\u091F\u0947\u0902\u092C\u0930_\u0911\u0915\u094D\u091F\u094B\u092C\u0930_\u0928\u094B\u0935\u094D\u0939\u0947\u0902\u092C\u0930_\u0921\u093F\u0938\u0947\u0902\u092C\u0930".split("_"), monthsShort: "\u091C\u093E\u0928\u0947._\u092B\u0947\u092C\u094D\u0930\u0941._\u092E\u093E\u0930\u094D\u091A._\u090F\u092A\u094D\u0930\u093F._\u092E\u0947._\u091C\u0942\u0928._\u091C\u0941\u0932\u0948._\u0911\u0917._\u0938\u092A\u094D\u091F\u0947\u0902._\u0911\u0915\u094D\u091F\u094B._\u0928\u094B\u0935\u094D\u0939\u0947\u0902._\u0921\u093F\u0938\u0947\u0902.".split("_"), monthsParseExact: !0, weekdays: "\u0930\u0935\u093F\u0935\u093E\u0930_\u0938\u094B\u092E\u0935\u093E\u0930_\u092E\u0902\u0917\u0933\u0935\u093E\u0930_\u092C\u0941\u0927\u0935\u093E\u0930_\u0917\u0941\u0930\u0942\u0935\u093E\u0930_\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930_\u0936\u0928\u093F\u0935\u093E\u0930".split("_"), weekdaysShort: "\u0930\u0935\u093F_\u0938\u094B\u092E_\u092E\u0902\u0917\u0933_\u092C\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094D\u0930_\u0936\u0928\u093F".split("_"), weekdaysMin: "\u0930_\u0938\u094B_\u092E\u0902_\u092C\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"), longDateFormat: { LT: "A h:mm \u0935\u093E\u091C\u0924\u093E", LTS: "A h:mm:ss \u0935\u093E\u091C\u0924\u093E", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u0935\u093E\u091C\u0924\u093E", LLLL: "dddd, D MMMM YYYY, A h:mm \u0935\u093E\u091C\u0924\u093E" }, calendar: { sameDay: "[\u0906\u091C] LT", nextDay: "[\u0909\u0926\u094D\u092F\u093E] LT", nextWeek: "dddd, LT", lastDay: "[\u0915\u093E\u0932] LT", lastWeek: "[\u092E\u093E\u0917\u0940\u0932] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s\u092E\u0927\u094D\u092F\u0947", past: "%s\u092A\u0942\u0930\u094D\u0935\u0940", s: yn, ss: yn, m: yn, mm: yn, h: yn, hh: yn, d: yn, dd: yn, M: yn, MM: yn, y: yn, yy: yn }, preparse: function preparse(e) {
      return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (e) {
        return Yn[e];
      });
    }, postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return cn[e];
      });
    }, meridiemParse: /\u0930\u093e\u0924\u094d\u0930\u0940|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0930\u093E\u0924\u094D\u0930\u0940" === a ? e < 4 ? e : e + 12 : "\u0938\u0915\u093E\u0933\u0940" === a ? e : "\u0926\u0941\u092A\u093E\u0930\u0940" === a ? 10 <= e ? e : e + 12 : "\u0938\u093E\u092F\u0902\u0915\u093E\u0933\u0940" === a ? e + 12 : void 0;
    }, meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u0930\u093E\u0924\u094D\u0930\u0940" : e < 10 ? "\u0938\u0915\u093E\u0933\u0940" : e < 17 ? "\u0926\u0941\u092A\u093E\u0930\u0940" : e < 20 ? "\u0938\u093E\u092F\u0902\u0915\u093E\u0933\u0940" : "\u0930\u093E\u0924\u094D\u0930\u0940";
    }, week: { dow: 0, doy: 6 } }), l.defineLocale("ms-my", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "pagi" === a ? e : "tengahari" === a ? 11 <= e ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0;
    }, meridiem: function meridiem(e, a, t) {
      return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam";
    }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }), l.defineLocale("ms", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "pagi" === a ? e : "tengahari" === a ? 11 <= e ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0;
    }, meridiem: function meridiem(e, a, t) {
      return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam";
    }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }), l.defineLocale("mt", { months: "Jannar_Frar_Marzu_April_Mejju_\u0120unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Di\u010Bembru".split("_"), monthsShort: "Jan_Fra_Mar_Apr_Mej_\u0120un_Lul_Aww_Set_Ott_Nov_Di\u010B".split("_"), weekdays: "Il-\u0126add_It-Tnejn_It-Tlieta_L-Erbg\u0127a_Il-\u0126amis_Il-\u0120img\u0127a_Is-Sibt".split("_"), weekdaysShort: "\u0126ad_Tne_Tli_Erb_\u0126am_\u0120im_Sib".split("_"), weekdaysMin: "\u0126a_Tn_Tl_Er_\u0126a_\u0120i_Si".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Illum fil-]LT", nextDay: "[G\u0127ada fil-]LT", nextWeek: "dddd [fil-]LT", lastDay: "[Il-biera\u0127 fil-]LT", lastWeek: "dddd [li g\u0127adda] [fil-]LT", sameElse: "L" }, relativeTime: { future: "f\u2019 %s", past: "%s ilu", s: "ftit sekondi", ss: "%d sekondi", m: "minuta", mm: "%d minuti", h: "sieg\u0127a", hh: "%d sieg\u0127at", d: "\u0121urnata", dd: "%d \u0121ranet", M: "xahar", MM: "%d xhur", y: "sena", yy: "%d sni" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } });var fn = { 1: "\u1041", 2: "\u1042", 3: "\u1043", 4: "\u1044", 5: "\u1045", 6: "\u1046", 7: "\u1047", 8: "\u1048", 9: "\u1049", 0: "\u1040" },
      kn = { "\u1041": "1", "\u1042": "2", "\u1043": "3", "\u1044": "4", "\u1045": "5", "\u1046": "6", "\u1047": "7", "\u1048": "8", "\u1049": "9", "\u1040": "0" };l.defineLocale("my", { months: "\u1007\u1014\u103A\u1014\u101D\u102B\u101B\u102E_\u1016\u1031\u1016\u1031\u102C\u103A\u101D\u102B\u101B\u102E_\u1019\u1010\u103A_\u1027\u1015\u103C\u102E_\u1019\u1031_\u1007\u103D\u1014\u103A_\u1007\u1030\u101C\u102D\u102F\u1004\u103A_\u101E\u103C\u1002\u102F\u1010\u103A_\u1005\u1000\u103A\u1010\u1004\u103A\u1018\u102C_\u1021\u1031\u102C\u1000\u103A\u1010\u102D\u102F\u1018\u102C_\u1014\u102D\u102F\u101D\u1004\u103A\u1018\u102C_\u1012\u102E\u1007\u1004\u103A\u1018\u102C".split("_"), monthsShort: "\u1007\u1014\u103A_\u1016\u1031_\u1019\u1010\u103A_\u1015\u103C\u102E_\u1019\u1031_\u1007\u103D\u1014\u103A_\u101C\u102D\u102F\u1004\u103A_\u101E\u103C_\u1005\u1000\u103A_\u1021\u1031\u102C\u1000\u103A_\u1014\u102D\u102F_\u1012\u102E".split("_"), weekdays: "\u1010\u1014\u1004\u103A\u1039\u1002\u1014\u103D\u1031_\u1010\u1014\u1004\u103A\u1039\u101C\u102C_\u1021\u1004\u103A\u1039\u1002\u102B_\u1017\u102F\u1012\u1039\u1013\u101F\u1030\u1038_\u1000\u103C\u102C\u101E\u1015\u1010\u1031\u1038_\u101E\u1031\u102C\u1000\u103C\u102C_\u1005\u1014\u1031".split("_"), weekdaysShort: "\u1014\u103D\u1031_\u101C\u102C_\u1002\u102B_\u101F\u1030\u1038_\u1000\u103C\u102C_\u101E\u1031\u102C_\u1014\u1031".split("_"), weekdaysMin: "\u1014\u103D\u1031_\u101C\u102C_\u1002\u102B_\u101F\u1030\u1038_\u1000\u103C\u102C_\u101E\u1031\u102C_\u1014\u1031".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u101A\u1014\u1031.] LT [\u1019\u103E\u102C]", nextDay: "[\u1019\u1014\u1000\u103A\u1016\u103C\u1014\u103A] LT [\u1019\u103E\u102C]", nextWeek: "dddd LT [\u1019\u103E\u102C]", lastDay: "[\u1019\u1014\u1031.\u1000] LT [\u1019\u103E\u102C]", lastWeek: "[\u1015\u103C\u102E\u1038\u1001\u1032\u1037\u101E\u1031\u102C] dddd LT [\u1019\u103E\u102C]", sameElse: "L" }, relativeTime: { future: "\u101C\u102C\u1019\u100A\u103A\u1037 %s \u1019\u103E\u102C", past: "\u101C\u103D\u1014\u103A\u1001\u1032\u1037\u101E\u1031\u102C %s \u1000", s: "\u1005\u1000\u1039\u1000\u1014\u103A.\u1021\u1014\u100A\u103A\u1038\u1004\u101A\u103A", ss: "%d \u1005\u1000\u1039\u1000\u1014\u1037\u103A", m: "\u1010\u1005\u103A\u1019\u102D\u1014\u1005\u103A", mm: "%d \u1019\u102D\u1014\u1005\u103A", h: "\u1010\u1005\u103A\u1014\u102C\u101B\u102E", hh: "%d \u1014\u102C\u101B\u102E", d: "\u1010\u1005\u103A\u101B\u1000\u103A", dd: "%d \u101B\u1000\u103A", M: "\u1010\u1005\u103A\u101C", MM: "%d \u101C", y: "\u1010\u1005\u103A\u1014\u103E\u1005\u103A", yy: "%d \u1014\u103E\u1005\u103A" }, preparse: function preparse(e) {
      return e.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g, function (e) {
        return kn[e];
      });
    }, postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return fn[e];
      });
    }, week: { dow: 1, doy: 4 } }), l.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: !0, weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"), weekdaysShort: "s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"), weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i g\xe5r kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", ss: "%d sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en m\xe5ned", MM: "%d m\xe5neder", y: "ett \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });var pn = { 1: "\u0967", 2: "\u0968", 3: "\u0969", 4: "\u096A", 5: "\u096B", 6: "\u096C", 7: "\u096D", 8: "\u096E", 9: "\u096F", 0: "\u0966" },
      Dn = { "\u0967": "1", "\u0968": "2", "\u0969": "3", "\u096A": "4", "\u096B": "5", "\u096C": "6", "\u096D": "7", "\u096E": "8", "\u096F": "9", "\u0966": "0" };l.defineLocale("ne", { months: "\u091C\u0928\u0935\u0930\u0940_\u092B\u0947\u092C\u094D\u0930\u0941\u0935\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u093F\u0932_\u092E\u0908_\u091C\u0941\u0928_\u091C\u0941\u0932\u093E\u0908_\u0905\u0917\u0937\u094D\u091F_\u0938\u0947\u092A\u094D\u091F\u0947\u092E\u094D\u092C\u0930_\u0905\u0915\u094D\u091F\u094B\u092C\u0930_\u0928\u094B\u092D\u0947\u092E\u094D\u092C\u0930_\u0921\u093F\u0938\u0947\u092E\u094D\u092C\u0930".split("_"), monthsShort: "\u091C\u0928._\u092B\u0947\u092C\u094D\u0930\u0941._\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u093F._\u092E\u0908_\u091C\u0941\u0928_\u091C\u0941\u0932\u093E\u0908._\u0905\u0917._\u0938\u0947\u092A\u094D\u091F._\u0905\u0915\u094D\u091F\u094B._\u0928\u094B\u092D\u0947._\u0921\u093F\u0938\u0947.".split("_"), monthsParseExact: !0, weekdays: "\u0906\u0907\u0924\u092C\u093E\u0930_\u0938\u094B\u092E\u092C\u093E\u0930_\u092E\u0919\u094D\u0917\u0932\u092C\u093E\u0930_\u092C\u0941\u0927\u092C\u093E\u0930_\u092C\u093F\u0939\u093F\u092C\u093E\u0930_\u0936\u0941\u0915\u094D\u0930\u092C\u093E\u0930_\u0936\u0928\u093F\u092C\u093E\u0930".split("_"), weekdaysShort: "\u0906\u0907\u0924._\u0938\u094B\u092E._\u092E\u0919\u094D\u0917\u0932._\u092C\u0941\u0927._\u092C\u093F\u0939\u093F._\u0936\u0941\u0915\u094D\u0930._\u0936\u0928\u093F.".split("_"), weekdaysMin: "\u0906._\u0938\u094B._\u092E\u0902._\u092C\u0941._\u092C\u093F._\u0936\u0941._\u0936.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "A\u0915\u094B h:mm \u092C\u091C\u0947", LTS: "A\u0915\u094B h:mm:ss \u092C\u091C\u0947", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A\u0915\u094B h:mm \u092C\u091C\u0947", LLLL: "dddd, D MMMM YYYY, A\u0915\u094B h:mm \u092C\u091C\u0947" }, preparse: function preparse(e) {
      return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (e) {
        return Dn[e];
      });
    }, postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return pn[e];
      });
    }, meridiemParse: /\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0930\u093E\u0924\u093F" === a ? e < 4 ? e : e + 12 : "\u092C\u093F\u0939\u093E\u0928" === a ? e : "\u0926\u093F\u0909\u0901\u0938\u094B" === a ? 10 <= e ? e : e + 12 : "\u0938\u093E\u0901\u091D" === a ? e + 12 : void 0;
    }, meridiem: function meridiem(e, a, t) {
      return e < 3 ? "\u0930\u093E\u0924\u093F" : e < 12 ? "\u092C\u093F\u0939\u093E\u0928" : e < 16 ? "\u0926\u093F\u0909\u0901\u0938\u094B" : e < 20 ? "\u0938\u093E\u0901\u091D" : "\u0930\u093E\u0924\u093F";
    }, calendar: { sameDay: "[\u0906\u091C] LT", nextDay: "[\u092D\u094B\u0932\u093F] LT", nextWeek: "[\u0906\u0909\u0901\u0926\u094B] dddd[,] LT", lastDay: "[\u0939\u093F\u091C\u094B] LT", lastWeek: "[\u0917\u090F\u0915\u094B] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%s\u092E\u093E", past: "%s \u0905\u0917\u093E\u0921\u093F", s: "\u0915\u0947\u0939\u0940 \u0915\u094D\u0937\u0923", ss: "%d \u0938\u0947\u0915\u0947\u0923\u094D\u0921", m: "\u090F\u0915 \u092E\u093F\u0928\u0947\u091F", mm: "%d \u092E\u093F\u0928\u0947\u091F", h: "\u090F\u0915 \u0918\u0923\u094D\u091F\u093E", hh: "%d \u0918\u0923\u094D\u091F\u093E", d: "\u090F\u0915 \u0926\u093F\u0928", dd: "%d \u0926\u093F\u0928", M: "\u090F\u0915 \u092E\u0939\u093F\u0928\u093E", MM: "%d \u092E\u0939\u093F\u0928\u093E", y: "\u090F\u0915 \u092C\u0930\u094D\u0937", yy: "%d \u092C\u0930\u094D\u0937" }, week: { dow: 0, doy: 6 } });var Tn = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
      gn = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
      wn = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
      vn = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;l.defineLocale("nl-be", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function monthsShort(e, a) {
      return e ? /-MMM-/.test(a) ? gn[e.month()] : Tn[e.month()] : Tn;
    }, monthsRegex: vn, monthsShortRegex: vn, monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: wn, longMonthsParse: wn, shortMonthsParse: wn, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "\xe9\xe9n minuut", mm: "%d minuten", h: "\xe9\xe9n uur", hh: "%d uur", d: "\xe9\xe9n dag", dd: "%d dagen", M: "\xe9\xe9n maand", MM: "%d maanden", y: "\xe9\xe9n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(e) {
      return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de");
    }, week: { dow: 1, doy: 4 } });var Hn = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
      Sn = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
      bn = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
      jn = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;l.defineLocale("nl", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function monthsShort(e, a) {
      return e ? /-MMM-/.test(a) ? Sn[e.month()] : Hn[e.month()] : Hn;
    }, monthsRegex: jn, monthsShortRegex: jn, monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: bn, longMonthsParse: bn, shortMonthsParse: bn, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "\xe9\xe9n minuut", mm: "%d minuten", h: "\xe9\xe9n uur", hh: "%d uur", d: "\xe9\xe9n dag", dd: "%d dagen", M: "\xe9\xe9n maand", MM: "%d maanden", y: "\xe9\xe9n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(e) {
      return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de");
    }, week: { dow: 1, doy: 4 } }), l.defineLocale("nn", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_m\xe5ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_m\xe5n_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_m\xe5_ty_on_to_fr_l\xf8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I g\xe5r klokka] LT", lastWeek: "[F\xf8reg\xe5ande] dddd [klokka] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s sidan", s: "nokre sekund", ss: "%d sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein m\xe5nad", MM: "%d m\xe5nader", y: "eit \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });var xn = { 1: "\u0A67", 2: "\u0A68", 3: "\u0A69", 4: "\u0A6A", 5: "\u0A6B", 6: "\u0A6C", 7: "\u0A6D", 8: "\u0A6E", 9: "\u0A6F", 0: "\u0A66" },
      Pn = { "\u0A67": "1", "\u0A68": "2", "\u0A69": "3", "\u0A6A": "4", "\u0A6B": "5", "\u0A6C": "6", "\u0A6D": "7", "\u0A6E": "8", "\u0A6F": "9", "\u0A66": "0" };l.defineLocale("pa-in", { months: "\u0A1C\u0A28\u0A35\u0A30\u0A40_\u0A2B\u0A3C\u0A30\u0A35\u0A30\u0A40_\u0A2E\u0A3E\u0A30\u0A1A_\u0A05\u0A2A\u0A4D\u0A30\u0A48\u0A32_\u0A2E\u0A08_\u0A1C\u0A42\u0A28_\u0A1C\u0A41\u0A32\u0A3E\u0A08_\u0A05\u0A17\u0A38\u0A24_\u0A38\u0A24\u0A70\u0A2C\u0A30_\u0A05\u0A15\u0A24\u0A42\u0A2C\u0A30_\u0A28\u0A35\u0A70\u0A2C\u0A30_\u0A26\u0A38\u0A70\u0A2C\u0A30".split("_"), monthsShort: "\u0A1C\u0A28\u0A35\u0A30\u0A40_\u0A2B\u0A3C\u0A30\u0A35\u0A30\u0A40_\u0A2E\u0A3E\u0A30\u0A1A_\u0A05\u0A2A\u0A4D\u0A30\u0A48\u0A32_\u0A2E\u0A08_\u0A1C\u0A42\u0A28_\u0A1C\u0A41\u0A32\u0A3E\u0A08_\u0A05\u0A17\u0A38\u0A24_\u0A38\u0A24\u0A70\u0A2C\u0A30_\u0A05\u0A15\u0A24\u0A42\u0A2C\u0A30_\u0A28\u0A35\u0A70\u0A2C\u0A30_\u0A26\u0A38\u0A70\u0A2C\u0A30".split("_"), weekdays: "\u0A10\u0A24\u0A35\u0A3E\u0A30_\u0A38\u0A4B\u0A2E\u0A35\u0A3E\u0A30_\u0A2E\u0A70\u0A17\u0A32\u0A35\u0A3E\u0A30_\u0A2C\u0A41\u0A27\u0A35\u0A3E\u0A30_\u0A35\u0A40\u0A30\u0A35\u0A3E\u0A30_\u0A38\u0A3C\u0A41\u0A71\u0A15\u0A30\u0A35\u0A3E\u0A30_\u0A38\u0A3C\u0A28\u0A40\u0A1A\u0A30\u0A35\u0A3E\u0A30".split("_"), weekdaysShort: "\u0A10\u0A24_\u0A38\u0A4B\u0A2E_\u0A2E\u0A70\u0A17\u0A32_\u0A2C\u0A41\u0A27_\u0A35\u0A40\u0A30_\u0A38\u0A3C\u0A41\u0A15\u0A30_\u0A38\u0A3C\u0A28\u0A40".split("_"), weekdaysMin: "\u0A10\u0A24_\u0A38\u0A4B\u0A2E_\u0A2E\u0A70\u0A17\u0A32_\u0A2C\u0A41\u0A27_\u0A35\u0A40\u0A30_\u0A38\u0A3C\u0A41\u0A15\u0A30_\u0A38\u0A3C\u0A28\u0A40".split("_"), longDateFormat: { LT: "A h:mm \u0A35\u0A1C\u0A47", LTS: "A h:mm:ss \u0A35\u0A1C\u0A47", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u0A35\u0A1C\u0A47", LLLL: "dddd, D MMMM YYYY, A h:mm \u0A35\u0A1C\u0A47" }, calendar: { sameDay: "[\u0A05\u0A1C] LT", nextDay: "[\u0A15\u0A32] LT", nextWeek: "[\u0A05\u0A17\u0A32\u0A3E] dddd, LT", lastDay: "[\u0A15\u0A32] LT", lastWeek: "[\u0A2A\u0A3F\u0A1B\u0A32\u0A47] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0A35\u0A3F\u0A71\u0A1A", past: "%s \u0A2A\u0A3F\u0A1B\u0A32\u0A47", s: "\u0A15\u0A41\u0A1D \u0A38\u0A15\u0A3F\u0A70\u0A1F", ss: "%d \u0A38\u0A15\u0A3F\u0A70\u0A1F", m: "\u0A07\u0A15 \u0A2E\u0A3F\u0A70\u0A1F", mm: "%d \u0A2E\u0A3F\u0A70\u0A1F", h: "\u0A07\u0A71\u0A15 \u0A18\u0A70\u0A1F\u0A3E", hh: "%d \u0A18\u0A70\u0A1F\u0A47", d: "\u0A07\u0A71\u0A15 \u0A26\u0A3F\u0A28", dd: "%d \u0A26\u0A3F\u0A28", M: "\u0A07\u0A71\u0A15 \u0A2E\u0A39\u0A40\u0A28\u0A3E", MM: "%d \u0A2E\u0A39\u0A40\u0A28\u0A47", y: "\u0A07\u0A71\u0A15 \u0A38\u0A3E\u0A32", yy: "%d \u0A38\u0A3E\u0A32" }, preparse: function preparse(e) {
      return e.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g, function (e) {
        return Pn[e];
      });
    }, postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return xn[e];
      });
    }, meridiemParse: /\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0A30\u0A3E\u0A24" === a ? e < 4 ? e : e + 12 : "\u0A38\u0A35\u0A47\u0A30" === a ? e : "\u0A26\u0A41\u0A2A\u0A39\u0A3F\u0A30" === a ? 10 <= e ? e : e + 12 : "\u0A38\u0A3C\u0A3E\u0A2E" === a ? e + 12 : void 0;
    }, meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u0A30\u0A3E\u0A24" : e < 10 ? "\u0A38\u0A35\u0A47\u0A30" : e < 17 ? "\u0A26\u0A41\u0A2A\u0A39\u0A3F\u0A30" : e < 20 ? "\u0A38\u0A3C\u0A3E\u0A2E" : "\u0A30\u0A3E\u0A24";
    }, week: { dow: 0, doy: 6 } });var On = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017Adziernik_listopad_grudzie\u0144".split("_"),
      Wn = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015Bnia_pa\u017Adziernika_listopada_grudnia".split("_");function En(e) {
    return e % 10 < 5 && 1 < e % 10 && ~~(e / 10) % 10 != 1;
  }function An(e, a, t) {
    var s = e + " ";switch (t) {case "ss":
        return s + (En(e) ? "sekundy" : "sekund");case "m":
        return a ? "minuta" : "minut\u0119";case "mm":
        return s + (En(e) ? "minuty" : "minut");case "h":
        return a ? "godzina" : "godzin\u0119";case "hh":
        return s + (En(e) ? "godziny" : "godzin");case "MM":
        return s + (En(e) ? "miesi\u0105ce" : "miesi\u0119cy");case "yy":
        return s + (En(e) ? "lata" : "lat");}
  }function Fn(e, a, t) {
    var s = " ";return (20 <= e % 100 || 100 <= e && e % 100 == 0) && (s = " de "), e + s + { ss: "secunde", mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" }[t];
  }function zn(e, a, t) {
    var s, n;return "m" === t ? a ? "\u043C\u0438\u043D\u0443\u0442\u0430" : "\u043C\u0438\u043D\u0443\u0442\u0443" : e + " " + (s = +e, n = { ss: a ? "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434" : "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434", mm: a ? "\u043C\u0438\u043D\u0443\u0442\u0430_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442" : "\u043C\u0438\u043D\u0443\u0442\u0443_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442", hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043E\u0432", dd: "\u0434\u0435\u043D\u044C_\u0434\u043D\u044F_\u0434\u043D\u0435\u0439", MM: "\u043C\u0435\u0441\u044F\u0446_\u043C\u0435\u0441\u044F\u0446\u0430_\u043C\u0435\u0441\u044F\u0446\u0435\u0432", yy: "\u0433\u043E\u0434_\u0433\u043E\u0434\u0430_\u043B\u0435\u0442" }[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : 2 <= s % 10 && s % 10 <= 4 && (s % 100 < 10 || 20 <= s % 100) ? n[1] : n[2]);
  }l.defineLocale("pl", { months: function months(e, a) {
      return e ? "" === a ? "(" + Wn[e.month()] + "|" + On[e.month()] + ")" : /D MMMM/.test(a) ? Wn[e.month()] : On[e.month()] : On;
    }, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017A_lis_gru".split("_"), weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015Broda_czwartek_pi\u0105tek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_\u015Br_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_\u015Ar_Cz_Pt_So".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Dzi\u015B o] LT", nextDay: "[Jutro o] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[W niedziel\u0119 o] LT";case 2:
            return "[We wtorek o] LT";case 3:
            return "[W \u015Brod\u0119 o] LT";case 6:
            return "[W sobot\u0119 o] LT";default:
            return "[W] dddd [o] LT";}
      }, lastDay: "[Wczoraj o] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[W zesz\u0142\u0105 niedziel\u0119 o] LT";case 3:
            return "[W zesz\u0142\u0105 \u015Brod\u0119 o] LT";case 6:
            return "[W zesz\u0142\u0105 sobot\u0119 o] LT";default:
            return "[W zesz\u0142y] dddd [o] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", ss: An, m: An, mm: An, h: An, hh: An, d: "1 dzie\u0144", dd: "%d dni", M: "miesi\u0105c", MM: An, y: "rok", yy: An }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("pt-br", { months: "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"), weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [\xe0s] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm" }, calendar: { sameDay: "[Hoje \xe0s] LT", nextDay: "[Amanh\xe3 \xe0s] LT", nextWeek: "dddd [\xe0s] LT", lastDay: "[Ontem \xe0s] LT", lastWeek: function lastWeek() {
        return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT";
      }, sameElse: "L" }, relativeTime: { future: "em %s", past: "h\xe1 %s", s: "poucos segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um m\xeas", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba" }), l.defineLocale("pt", { months: "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"), weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm" }, calendar: { sameDay: "[Hoje \xe0s] LT", nextDay: "[Amanh\xe3 \xe0s] LT", nextWeek: "dddd [\xe0s] LT", lastDay: "[Ontem \xe0s] LT", lastWeek: function lastWeek() {
        return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT";
      }, sameElse: "L" }, relativeTime: { future: "em %s", past: "h\xe1 %s", s: "segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um m\xeas", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }), l.defineLocale("ro", { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "duminic\u0103_luni_mar\u021Bi_miercuri_joi_vineri_s\xE2mb\u0103t\u0103".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[m\xe2ine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: { future: "peste %s", past: "%s \xEEn urm\u0103", s: "c\xe2teva secunde", ss: Fn, m: "un minut", mm: Fn, h: "o or\u0103", hh: Fn, d: "o zi", dd: Fn, M: "o lun\u0103", MM: Fn, y: "un an", yy: Fn }, week: { dow: 1, doy: 7 } });var Jn = [/^\u044f\u043d\u0432/i, /^\u0444\u0435\u0432/i, /^\u043c\u0430\u0440/i, /^\u0430\u043f\u0440/i, /^\u043c\u0430[\u0439\u044f]/i, /^\u0438\u044e\u043d/i, /^\u0438\u044e\u043b/i, /^\u0430\u0432\u0433/i, /^\u0441\u0435\u043d/i, /^\u043e\u043a\u0442/i, /^\u043d\u043e\u044f/i, /^\u0434\u0435\u043a/i];l.defineLocale("ru", { months: { format: "\u044F\u043D\u0432\u0430\u0440\u044F_\u0444\u0435\u0432\u0440\u0430\u043B\u044F_\u043C\u0430\u0440\u0442\u0430_\u0430\u043F\u0440\u0435\u043B\u044F_\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F_\u043E\u043A\u0442\u044F\u0431\u0440\u044F_\u043D\u043E\u044F\u0431\u0440\u044F_\u0434\u0435\u043A\u0430\u0431\u0440\u044F".split("_"), standalone: "\u044F\u043D\u0432\u0430\u0440\u044C_\u0444\u0435\u0432\u0440\u0430\u043B\u044C_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0435\u043B\u044C_\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C_\u043E\u043A\u0442\u044F\u0431\u0440\u044C_\u043D\u043E\u044F\u0431\u0440\u044C_\u0434\u0435\u043A\u0430\u0431\u0440\u044C".split("_") }, monthsShort: { format: "\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440._\u0430\u043F\u0440._\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.".split("_"), standalone: "\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440\u0442_\u0430\u043F\u0440._\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.".split("_") }, weekdays: { standalone: "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043E\u0442\u0430".split("_"), format: "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043E\u0442\u0443".split("_"), isFormat: /\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?\] ?dddd/ }, weekdaysShort: "\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"), weekdaysMin: "\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"), monthsParse: Jn, longMonthsParse: Jn, shortMonthsParse: Jn, monthsRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i, monthsShortRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i, monthsStrictRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i, monthsShortStrictRegex: /^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0433.", LLL: "D MMMM YYYY \u0433., H:mm", LLLL: "dddd, D MMMM YYYY \u0433., H:mm" }, calendar: { sameDay: "[\u0421\u0435\u0433\u043E\u0434\u043D\u044F, \u0432] LT", nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430, \u0432] LT", lastDay: "[\u0412\u0447\u0435\u0440\u0430, \u0432] LT", nextWeek: function nextWeek(e) {
        if (e.week() === this.week()) return 2 === this.day() ? "[\u0412\u043E] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT";switch (this.day()) {case 0:
            return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435] dddd, [\u0432] LT";case 1:case 2:case 4:
            return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439] dddd, [\u0432] LT";case 3:case 5:case 6:
            return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E] dddd, [\u0432] LT";}
      }, lastWeek: function lastWeek(e) {
        if (e.week() === this.week()) return 2 === this.day() ? "[\u0412\u043E] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT";switch (this.day()) {case 0:
            return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u043E\u0435] dddd, [\u0432] LT";case 1:case 2:case 4:
            return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u044B\u0439] dddd, [\u0432] LT";case 3:case 5:case 6:
            return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u0443\u044E] dddd, [\u0432] LT";}
      }, sameElse: "L" }, relativeTime: { future: "\u0447\u0435\u0440\u0435\u0437 %s", past: "%s \u043D\u0430\u0437\u0430\u0434", s: "\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434", ss: zn, m: zn, mm: zn, h: "\u0447\u0430\u0441", hh: zn, d: "\u0434\u0435\u043D\u044C", dd: zn, M: "\u043C\u0435\u0441\u044F\u0446", MM: zn, y: "\u0433\u043E\u0434", yy: zn }, meridiemParse: /\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i, isPM: function isPM(e) {
      return (/^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(e)
      );
    }, meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u043D\u043E\u0447\u0438" : e < 12 ? "\u0443\u0442\u0440\u0430" : e < 17 ? "\u0434\u043D\u044F" : "\u0432\u0435\u0447\u0435\u0440\u0430";
    }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e|\u044f)/, ordinal: function ordinal(e, a) {
      switch (a) {case "M":case "d":case "DDD":
          return e + "-\u0439";case "D":
          return e + "-\u0433\u043E";case "w":case "W":
          return e + "-\u044F";default:
          return e;}
    }, week: { dow: 1, doy: 4 } });var Nn = ["\u062C\u0646\u0648\u0631\u064A", "\u0641\u064A\u0628\u0631\u0648\u0631\u064A", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u064A\u0644", "\u0645\u0626\u064A", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u0621\u0650", "\u0622\u06AF\u0633\u067D", "\u0633\u064A\u067E\u067D\u0645\u0628\u0631", "\u0622\u06AA\u067D\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u068A\u0633\u0645\u0628\u0631"],
      Rn = ["\u0622\u0686\u0631", "\u0633\u0648\u0645\u0631", "\u0627\u06B1\u0627\u0631\u0648", "\u0627\u0631\u0628\u0639", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639", "\u0687\u0646\u0687\u0631"];l.defineLocale("sd", { months: Nn, monthsShort: Nn, weekdays: Rn, weekdaysShort: Rn, weekdaysMin: Rn, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd\u060C D MMMM YYYY HH:mm" }, meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/, isPM: function isPM(e) {
      return "\u0634\u0627\u0645" === e;
    }, meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0635\u0628\u062D" : "\u0634\u0627\u0645";
    }, calendar: { sameDay: "[\u0627\u0684] LT", nextDay: "[\u0633\u0680\u0627\u06BB\u064A] LT", nextWeek: "dddd [\u0627\u06B3\u064A\u0646 \u0647\u0641\u062A\u064A \u062A\u064A] LT", lastDay: "[\u06AA\u0627\u0644\u0647\u0647] LT", lastWeek: "[\u06AF\u0632\u0631\u064A\u0644 \u0647\u0641\u062A\u064A] dddd [\u062A\u064A] LT", sameElse: "L" }, relativeTime: { future: "%s \u067E\u0648\u0621", past: "%s \u0627\u06B3", s: "\u0686\u0646\u062F \u0633\u064A\u06AA\u0646\u068A", ss: "%d \u0633\u064A\u06AA\u0646\u068A", m: "\u0647\u06AA \u0645\u0646\u067D", mm: "%d \u0645\u0646\u067D", h: "\u0647\u06AA \u06AA\u0644\u0627\u06AA", hh: "%d \u06AA\u0644\u0627\u06AA", d: "\u0647\u06AA \u068F\u064A\u0646\u0647\u0646", dd: "%d \u068F\u064A\u0646\u0647\u0646", M: "\u0647\u06AA \u0645\u0647\u064A\u0646\u0648", MM: "%d \u0645\u0647\u064A\u0646\u0627", y: "\u0647\u06AA \u0633\u0627\u0644", yy: "%d \u0633\u0627\u0644" }, preparse: function preparse(e) {
      return e.replace(/\u060c/g, ",");
    }, postformat: function postformat(e) {
      return e.replace(/,/g, "\u060C");
    }, week: { dow: 1, doy: 4 } }), l.defineLocale("se", { months: "o\u0111\u0111ajagem\xE1nnu_guovvam\xE1nnu_njuk\u010Dam\xE1nnu_cuo\u014Bom\xE1nnu_miessem\xE1nnu_geassem\xE1nnu_suoidnem\xE1nnu_borgem\xE1nnu_\u010Dak\u010Dam\xE1nnu_golggotm\xE1nnu_sk\xE1bmam\xE1nnu_juovlam\xE1nnu".split("_"), monthsShort: "o\u0111\u0111j_guov_njuk_cuo_mies_geas_suoi_borg_\u010Dak\u010D_golg_sk\xE1b_juov".split("_"), weekdays: "sotnabeaivi_vuoss\xE1rga_ma\u014B\u014Beb\xE1rga_gaskavahkku_duorastat_bearjadat_l\xE1vvardat".split("_"), weekdaysShort: "sotn_vuos_ma\u014B_gask_duor_bear_l\xE1v".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, calendar: { sameDay: "[otne ti] LT", nextDay: "[ihttin ti] LT", nextWeek: "dddd [ti] LT", lastDay: "[ikte ti] LT", lastWeek: "[ovddit] dddd [ti] LT", sameElse: "L" }, relativeTime: { future: "%s gea\u017Ees", past: "ma\u014Bit %s", s: "moadde sekunddat", ss: "%d sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta m\xe1nnu", MM: "%d m\xe1nut", y: "okta jahki", yy: "%d jagit" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("si", { months: "\u0DA2\u0DB1\u0DC0\u0DCF\u0DBB\u0DD2_\u0DB4\u0DD9\u0DB6\u0DBB\u0DC0\u0DCF\u0DBB\u0DD2_\u0DB8\u0DCF\u0DBB\u0DCA\u0DAD\u0DD4_\u0D85\u0DB4\u0DCA\u200D\u0DBB\u0DDA\u0DBD\u0DCA_\u0DB8\u0DD0\u0DBA\u0DD2_\u0DA2\u0DD6\u0DB1\u0DD2_\u0DA2\u0DD6\u0DBD\u0DD2_\u0D85\u0D9C\u0DDD\u0DC3\u0DCA\u0DAD\u0DD4_\u0DC3\u0DD0\u0DB4\u0DCA\u0DAD\u0DD0\u0DB8\u0DCA\u0DB6\u0DBB\u0DCA_\u0D94\u0D9A\u0DCA\u0DAD\u0DDD\u0DB6\u0DBB\u0DCA_\u0DB1\u0DDC\u0DC0\u0DD0\u0DB8\u0DCA\u0DB6\u0DBB\u0DCA_\u0DAF\u0DD9\u0DC3\u0DD0\u0DB8\u0DCA\u0DB6\u0DBB\u0DCA".split("_"), monthsShort: "\u0DA2\u0DB1_\u0DB4\u0DD9\u0DB6_\u0DB8\u0DCF\u0DBB\u0DCA_\u0D85\u0DB4\u0DCA_\u0DB8\u0DD0\u0DBA\u0DD2_\u0DA2\u0DD6\u0DB1\u0DD2_\u0DA2\u0DD6\u0DBD\u0DD2_\u0D85\u0D9C\u0DDD_\u0DC3\u0DD0\u0DB4\u0DCA_\u0D94\u0D9A\u0DCA_\u0DB1\u0DDC\u0DC0\u0DD0_\u0DAF\u0DD9\u0DC3\u0DD0".split("_"), weekdays: "\u0D89\u0DBB\u0DD2\u0DAF\u0DCF_\u0DC3\u0DB3\u0DD4\u0DAF\u0DCF_\u0D85\u0D9F\u0DC4\u0DBB\u0DD4\u0DC0\u0DCF\u0DAF\u0DCF_\u0DB6\u0DAF\u0DCF\u0DAF\u0DCF_\u0DB6\u0DCA\u200D\u0DBB\u0DC4\u0DC3\u0DCA\u0DB4\u0DAD\u0DD2\u0DB1\u0DCA\u0DAF\u0DCF_\u0DC3\u0DD2\u0D9A\u0DD4\u0DBB\u0DCF\u0DAF\u0DCF_\u0DC3\u0DD9\u0DB1\u0DC3\u0DD4\u0DBB\u0DCF\u0DAF\u0DCF".split("_"), weekdaysShort: "\u0D89\u0DBB\u0DD2_\u0DC3\u0DB3\u0DD4_\u0D85\u0D9F_\u0DB6\u0DAF\u0DCF_\u0DB6\u0DCA\u200D\u0DBB\u0DC4_\u0DC3\u0DD2\u0D9A\u0DD4_\u0DC3\u0DD9\u0DB1".split("_"), weekdaysMin: "\u0D89_\u0DC3_\u0D85_\u0DB6_\u0DB6\u0DCA\u200D\u0DBB_\u0DC3\u0DD2_\u0DC3\u0DD9".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [\u0DC0\u0DD0\u0DB1\u0DD2] dddd, a h:mm:ss" }, calendar: { sameDay: "[\u0D85\u0DAF] LT[\u0DA7]", nextDay: "[\u0DC4\u0DD9\u0DA7] LT[\u0DA7]", nextWeek: "dddd LT[\u0DA7]", lastDay: "[\u0D8A\u0DBA\u0DDA] LT[\u0DA7]", lastWeek: "[\u0DB4\u0DC3\u0DD4\u0D9C\u0DD2\u0DBA] dddd LT[\u0DA7]", sameElse: "L" }, relativeTime: { future: "%s\u0D9A\u0DD2\u0DB1\u0DCA", past: "%s\u0D9A\u0DA7 \u0DB4\u0DD9\u0DBB", s: "\u0DAD\u0DAD\u0DCA\u0DB4\u0DBB \u0D9A\u0DD2\u0DC4\u0DD2\u0DB4\u0DBA", ss: "\u0DAD\u0DAD\u0DCA\u0DB4\u0DBB %d", m: "\u0DB8\u0DD2\u0DB1\u0DD2\u0DAD\u0DCA\u0DAD\u0DD4\u0DC0", mm: "\u0DB8\u0DD2\u0DB1\u0DD2\u0DAD\u0DCA\u0DAD\u0DD4 %d", h: "\u0DB4\u0DD0\u0DBA", hh: "\u0DB4\u0DD0\u0DBA %d", d: "\u0DAF\u0DD2\u0DB1\u0DBA", dd: "\u0DAF\u0DD2\u0DB1 %d", M: "\u0DB8\u0DCF\u0DC3\u0DBA", MM: "\u0DB8\u0DCF\u0DC3 %d", y: "\u0DC0\u0DC3\u0DBB", yy: "\u0DC0\u0DC3\u0DBB %d" }, dayOfMonthOrdinalParse: /\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/, ordinal: function ordinal(e) {
      return e + " \u0DC0\u0DD0\u0DB1\u0DD2";
    }, meridiemParse: /\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./, isPM: function isPM(e) {
      return "\u0DB4.\u0DC0." === e || "\u0DB4\u0DC3\u0DCA \u0DC0\u0DBB\u0DD4" === e;
    }, meridiem: function meridiem(e, a, t) {
      return 11 < e ? t ? "\u0DB4.\u0DC0." : "\u0DB4\u0DC3\u0DCA \u0DC0\u0DBB\u0DD4" : t ? "\u0DB4\u0DD9.\u0DC0." : "\u0DB4\u0DD9\u0DBB \u0DC0\u0DBB\u0DD4";
    } });var In = "janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),
      Cn = "jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_");function Gn(e) {
    return 1 < e && e < 5;
  }function Un(e, a, t, s) {
    var n = e + " ";switch (t) {case "s":
        return a || s ? "p\xe1r sek\xfand" : "p\xe1r sekundami";case "ss":
        return a || s ? n + (Gn(e) ? "sekundy" : "sek\xfand") : n + "sekundami";break;case "m":
        return a ? "min\xfata" : s ? "min\xfatu" : "min\xfatou";case "mm":
        return a || s ? n + (Gn(e) ? "min\xfaty" : "min\xfat") : n + "min\xfatami";break;case "h":
        return a ? "hodina" : s ? "hodinu" : "hodinou";case "hh":
        return a || s ? n + (Gn(e) ? "hodiny" : "hod\xedn") : n + "hodinami";break;case "d":
        return a || s ? "de\u0148" : "d\u0148om";case "dd":
        return a || s ? n + (Gn(e) ? "dni" : "dn\xed") : n + "d\u0148ami";break;case "M":
        return a || s ? "mesiac" : "mesiacom";case "MM":
        return a || s ? n + (Gn(e) ? "mesiace" : "mesiacov") : n + "mesiacmi";break;case "y":
        return a || s ? "rok" : "rokom";case "yy":
        return a || s ? n + (Gn(e) ? "roky" : "rokov") : n + "rokmi";break;}
  }function Vn(e, a, t, s) {
    var n = e + " ";switch (t) {case "s":
        return a || s ? "nekaj sekund" : "nekaj sekundami";case "ss":
        return n += 1 === e ? a ? "sekundo" : "sekundi" : 2 === e ? a || s ? "sekundi" : "sekundah" : e < 5 ? a || s ? "sekunde" : "sekundah" : "sekund";case "m":
        return a ? "ena minuta" : "eno minuto";case "mm":
        return n += 1 === e ? a ? "minuta" : "minuto" : 2 === e ? a || s ? "minuti" : "minutama" : e < 5 ? a || s ? "minute" : "minutami" : a || s ? "minut" : "minutami";case "h":
        return a ? "ena ura" : "eno uro";case "hh":
        return n += 1 === e ? a ? "ura" : "uro" : 2 === e ? a || s ? "uri" : "urama" : e < 5 ? a || s ? "ure" : "urami" : a || s ? "ur" : "urami";case "d":
        return a || s ? "en dan" : "enim dnem";case "dd":
        return n += 1 === e ? a || s ? "dan" : "dnem" : 2 === e ? a || s ? "dni" : "dnevoma" : a || s ? "dni" : "dnevi";case "M":
        return a || s ? "en mesec" : "enim mesecem";case "MM":
        return n += 1 === e ? a || s ? "mesec" : "mesecem" : 2 === e ? a || s ? "meseca" : "mesecema" : e < 5 ? a || s ? "mesece" : "meseci" : a || s ? "mesecev" : "meseci";case "y":
        return a || s ? "eno leto" : "enim letom";case "yy":
        return n += 1 === e ? a || s ? "leto" : "letom" : 2 === e ? a || s ? "leti" : "letoma" : e < 5 ? a || s ? "leta" : "leti" : a || s ? "let" : "leti";}
  }l.defineLocale("sk", { months: In, monthsShort: Cn, weekdays: "nede\u013Ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_\u0161t_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_\u0161t_pi_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm" }, calendar: { sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[v nede\u013Eu o] LT";case 1:case 2:
            return "[v] dddd [o] LT";case 3:
            return "[v stredu o] LT";case 4:
            return "[vo \u0161tvrtok o] LT";case 5:
            return "[v piatok o] LT";case 6:
            return "[v sobotu o] LT";}
      }, lastDay: "[v\u010Dera o] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[minul\xFA nede\u013Eu o] LT";case 1:case 2:
            return "[minul\xfd] dddd [o] LT";case 3:
            return "[minul\xfa stredu o] LT";case 4:case 5:
            return "[minul\xfd] dddd [o] LT";case 6:
            return "[minul\xfa sobotu o] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pred %s", s: Un, ss: Un, m: Un, mm: Un, h: Un, hh: Un, d: Un, dd: Un, M: Un, MM: Un, y: Un, yy: Un }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("sl", { months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljek_torek_sreda_\u010Detrtek_petek_sobota".split("_"), weekdaysShort: "ned._pon._tor._sre._\u010Det._pet._sob.".split("_"), weekdaysMin: "ne_po_to_sr_\u010De_pe_so".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[v] [nedeljo] [ob] LT";case 3:
            return "[v] [sredo] [ob] LT";case 6:
            return "[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:
            return "[v] dddd [ob] LT";}
      }, lastDay: "[v\u010Deraj ob] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[prej\u0161njo] [nedeljo] [ob] LT";case 3:
            return "[prej\u0161njo] [sredo] [ob] LT";case 6:
            return "[prej\u0161njo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:
            return "[prej\u0161nji] dddd [ob] LT";}
      }, sameElse: "L" }, relativeTime: { future: "\u010Dez %s", past: "pred %s", s: Vn, ss: Vn, m: Vn, mm: Vn, h: Vn, hh: Vn, d: Vn, dd: Vn, M: Vn, MM: Vn, y: Vn, yy: Vn }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }), l.defineLocale("sq", { months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xebntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xebn_Dhj".split("_"), weekdays: "E Diel_E H\xebn\xeb_E Mart\xeb_E M\xebrkur\xeb_E Enjte_E Premte_E Shtun\xeb".split("_"), weekdaysShort: "Die_H\xebn_Mar_M\xebr_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_M\xeb_E_P_Sh".split("_"), weekdaysParseExact: !0, meridiemParse: /PD|MD/, isPM: function isPM(e) {
      return "M" === e.charAt(0);
    }, meridiem: function meridiem(e, a, t) {
      return e < 12 ? "PD" : "MD";
    }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Sot n\xeb] LT", nextDay: "[Nes\xebr n\xeb] LT", nextWeek: "dddd [n\xeb] LT", lastDay: "[Dje n\xeb] LT", lastWeek: "dddd [e kaluar n\xeb] LT", sameElse: "L" }, relativeTime: { future: "n\xeb %s", past: "%s m\xeb par\xeb", s: "disa sekonda", ss: "%d sekonda", m: "nj\xeb minut\xeb", mm: "%d minuta", h: "nj\xeb or\xeb", hh: "%d or\xeb", d: "nj\xeb dit\xeb", dd: "%d dit\xeb", M: "nj\xeb muaj", MM: "%d muaj", y: "nj\xeb vit", yy: "%d vite" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });var Kn = { words: { ss: ["\u0441\u0435\u043A\u0443\u043D\u0434\u0430", "\u0441\u0435\u043A\u0443\u043D\u0434\u0435", "\u0441\u0435\u043A\u0443\u043D\u0434\u0438"], m: ["\u0458\u0435\u0434\u0430\u043D \u043C\u0438\u043D\u0443\u0442", "\u0458\u0435\u0434\u043D\u0435 \u043C\u0438\u043D\u0443\u0442\u0435"], mm: ["\u043C\u0438\u043D\u0443\u0442", "\u043C\u0438\u043D\u0443\u0442\u0435", "\u043C\u0438\u043D\u0443\u0442\u0430"], h: ["\u0458\u0435\u0434\u0430\u043D \u0441\u0430\u0442", "\u0458\u0435\u0434\u043D\u043E\u0433 \u0441\u0430\u0442\u0430"], hh: ["\u0441\u0430\u0442", "\u0441\u0430\u0442\u0430", "\u0441\u0430\u0442\u0438"], dd: ["\u0434\u0430\u043D", "\u0434\u0430\u043D\u0430", "\u0434\u0430\u043D\u0430"], MM: ["\u043C\u0435\u0441\u0435\u0446", "\u043C\u0435\u0441\u0435\u0446\u0430", "\u043C\u0435\u0441\u0435\u0446\u0438"], yy: ["\u0433\u043E\u0434\u0438\u043D\u0430", "\u0433\u043E\u0434\u0438\u043D\u0435", "\u0433\u043E\u0434\u0438\u043D\u0430"] }, correctGrammaticalCase: function correctGrammaticalCase(e, a) {
      return 1 === e ? a[0] : 2 <= e && e <= 4 ? a[1] : a[2];
    }, translate: function translate(e, a, t) {
      var s = Kn.words[t];return 1 === t.length ? a ? s[0] : s[1] : e + " " + Kn.correctGrammaticalCase(e, s);
    } };l.defineLocale("sr-cyrl", { months: "\u0458\u0430\u043D\u0443\u0430\u0440_\u0444\u0435\u0431\u0440\u0443\u0430\u0440_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0438\u043B_\u043C\u0430\u0458_\u0458\u0443\u043D_\u0458\u0443\u043B_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043F\u0442\u0435\u043C\u0431\u0430\u0440_\u043E\u043A\u0442\u043E\u0431\u0430\u0440_\u043D\u043E\u0432\u0435\u043C\u0431\u0430\u0440_\u0434\u0435\u0446\u0435\u043C\u0431\u0430\u0440".split("_"), monthsShort: "\u0458\u0430\u043D._\u0444\u0435\u0431._\u043C\u0430\u0440._\u0430\u043F\u0440._\u043C\u0430\u0458_\u0458\u0443\u043D_\u0458\u0443\u043B_\u0430\u0432\u0433._\u0441\u0435\u043F._\u043E\u043A\u0442._\u043D\u043E\u0432._\u0434\u0435\u0446.".split("_"), monthsParseExact: !0, weekdays: "\u043D\u0435\u0434\u0435\u0459\u0430_\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u0430\u043A_\u0443\u0442\u043E\u0440\u0430\u043A_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043A_\u043F\u0435\u0442\u0430\u043A_\u0441\u0443\u0431\u043E\u0442\u0430".split("_"), weekdaysShort: "\u043D\u0435\u0434._\u043F\u043E\u043D._\u0443\u0442\u043E._\u0441\u0440\u0435._\u0447\u0435\u0442._\u043F\u0435\u0442._\u0441\u0443\u0431.".split("_"), weekdaysMin: "\u043D\u0435_\u043F\u043E_\u0443\u0442_\u0441\u0440_\u0447\u0435_\u043F\u0435_\u0441\u0443".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[\u0434\u0430\u043D\u0430\u0441 \u0443] LT", nextDay: "[\u0441\u0443\u0442\u0440\u0430 \u0443] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[\u0443] [\u043D\u0435\u0434\u0435\u0459\u0443] [\u0443] LT";case 3:
            return "[\u0443] [\u0441\u0440\u0435\u0434\u0443] [\u0443] LT";case 6:
            return "[\u0443] [\u0441\u0443\u0431\u043E\u0442\u0443] [\u0443] LT";case 1:case 2:case 4:case 5:
            return "[\u0443] dddd [\u0443] LT";}
      }, lastDay: "[\u0458\u0443\u0447\u0435 \u0443] LT", lastWeek: function lastWeek() {
        return ["[\u043F\u0440\u043E\u0448\u043B\u0435] [\u043D\u0435\u0434\u0435\u0459\u0435] [\u0443] LT", "[\u043F\u0440\u043E\u0448\u043B\u043E\u0433] [\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u043A\u0430] [\u0443] LT", "[\u043F\u0440\u043E\u0448\u043B\u043E\u0433] [\u0443\u0442\u043E\u0440\u043A\u0430] [\u0443] LT", "[\u043F\u0440\u043E\u0448\u043B\u0435] [\u0441\u0440\u0435\u0434\u0435] [\u0443] LT", "[\u043F\u0440\u043E\u0448\u043B\u043E\u0433] [\u0447\u0435\u0442\u0432\u0440\u0442\u043A\u0430] [\u0443] LT", "[\u043F\u0440\u043E\u0448\u043B\u043E\u0433] [\u043F\u0435\u0442\u043A\u0430] [\u0443] LT", "[\u043F\u0440\u043E\u0448\u043B\u0435] [\u0441\u0443\u0431\u043E\u0442\u0435] [\u0443] LT"][this.day()];
      }, sameElse: "L" }, relativeTime: { future: "\u0437\u0430 %s", past: "\u043F\u0440\u0435 %s", s: "\u043D\u0435\u043A\u043E\u043B\u0438\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434\u0438", ss: Kn.translate, m: Kn.translate, mm: Kn.translate, h: Kn.translate, hh: Kn.translate, d: "\u0434\u0430\u043D", dd: Kn.translate, M: "\u043C\u0435\u0441\u0435\u0446", MM: Kn.translate, y: "\u0433\u043E\u0434\u0438\u043D\u0443", yy: Kn.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });var $n = { words: { ss: ["sekunda", "sekunde", "sekundi"], m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function correctGrammaticalCase(e, a) {
      return 1 === e ? a[0] : 2 <= e && e <= 4 ? a[1] : a[2];
    }, translate: function translate(e, a, t) {
      var s = $n.words[t];return 1 === t.length ? a ? s[0] : s[1] : e + " " + $n.correctGrammaticalCase(e, s);
    } };l.defineLocale("sr", { months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljak_utorak_sreda_\u010Detvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sre._\u010Det._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_\u010De_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[u] [nedelju] [u] LT";case 3:
            return "[u] [sredu] [u] LT";case 6:
            return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
            return "[u] dddd [u] LT";}
      }, lastDay: "[ju\u010De u] LT", lastWeek: function lastWeek() {
        return ["[pro\u0161le] [nedelje] [u] LT", "[pro\u0161log] [ponedeljka] [u] LT", "[pro\u0161log] [utorka] [u] LT", "[pro\u0161le] [srede] [u] LT", "[pro\u0161log] [\u010Detvrtka] [u] LT", "[pro\u0161log] [petka] [u] LT", "[pro\u0161le] [subote] [u] LT"][this.day()];
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", ss: $n.translate, m: $n.translate, mm: $n.translate, h: $n.translate, hh: $n.translate, d: "dan", dd: $n.translate, M: "mesec", MM: $n.translate, y: "godinu", yy: $n.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }), l.defineLocale("ss", { months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Namuhla nga] LT", nextDay: "[Kusasa nga] LT", nextWeek: "dddd [nga] LT", lastDay: "[Itolo nga] LT", lastWeek: "dddd [leliphelile] [nga] LT", sameElse: "L" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", ss: "%d mzuzwana", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" }, meridiemParse: /ekuseni|emini|entsambama|ebusuku/, meridiem: function meridiem(e, a, t) {
      return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku";
    }, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "ekuseni" === a ? e : "emini" === a ? 11 <= e ? e : e + 12 : "entsambama" === a || "ebusuku" === a ? 0 === e ? 0 : e + 12 : void 0;
    }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: "%d", week: { dow: 1, doy: 4 } }), l.defineLocale("sv", { months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split("_"), weekdaysShort: "s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"), weekdaysMin: "s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Ig\xe5r] LT", nextWeek: "[P\xe5] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "f\xf6r %s sedan", s: "n\xe5gra sekunder", ss: "%d sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en m\xe5nad", MM: "%d m\xe5nader", y: "ett \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}(e|a)/, ordinal: function ordinal(e) {
      var a = e % 10;return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === a ? "a" : 2 === a ? "a" : "e");
    }, week: { dow: 1, doy: 4 } }), l.defineLocale("sw", { months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[leo saa] LT", nextDay: "[kesho saa] LT", nextWeek: "[wiki ijayo] dddd [saat] LT", lastDay: "[jana] LT", lastWeek: "[wiki iliyopita] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", ss: "sekunde %d", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, week: { dow: 1, doy: 7 } });var Zn = { 1: "\u0BE7", 2: "\u0BE8", 3: "\u0BE9", 4: "\u0BEA", 5: "\u0BEB", 6: "\u0BEC", 7: "\u0BED", 8: "\u0BEE", 9: "\u0BEF", 0: "\u0BE6" },
      Bn = { "\u0BE7": "1", "\u0BE8": "2", "\u0BE9": "3", "\u0BEA": "4", "\u0BEB": "5", "\u0BEC": "6", "\u0BED": "7", "\u0BEE": "8", "\u0BEF": "9", "\u0BE6": "0" };l.defineLocale("ta", { months: "\u0B9C\u0BA9\u0BB5\u0BB0\u0BBF_\u0BAA\u0BBF\u0BAA\u0BCD\u0BB0\u0BB5\u0BB0\u0BBF_\u0BAE\u0BBE\u0BB0\u0BCD\u0B9A\u0BCD_\u0B8F\u0BAA\u0BCD\u0BB0\u0BB2\u0BCD_\u0BAE\u0BC7_\u0B9C\u0BC2\u0BA9\u0BCD_\u0B9C\u0BC2\u0BB2\u0BC8_\u0B86\u0B95\u0BB8\u0BCD\u0B9F\u0BCD_\u0B9A\u0BC6\u0BAA\u0BCD\u0B9F\u0BC6\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD_\u0B85\u0B95\u0BCD\u0B9F\u0BC7\u0BBE\u0BAA\u0BB0\u0BCD_\u0BA8\u0BB5\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD_\u0B9F\u0BBF\u0B9A\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD".split("_"), monthsShort: "\u0B9C\u0BA9\u0BB5\u0BB0\u0BBF_\u0BAA\u0BBF\u0BAA\u0BCD\u0BB0\u0BB5\u0BB0\u0BBF_\u0BAE\u0BBE\u0BB0\u0BCD\u0B9A\u0BCD_\u0B8F\u0BAA\u0BCD\u0BB0\u0BB2\u0BCD_\u0BAE\u0BC7_\u0B9C\u0BC2\u0BA9\u0BCD_\u0B9C\u0BC2\u0BB2\u0BC8_\u0B86\u0B95\u0BB8\u0BCD\u0B9F\u0BCD_\u0B9A\u0BC6\u0BAA\u0BCD\u0B9F\u0BC6\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD_\u0B85\u0B95\u0BCD\u0B9F\u0BC7\u0BBE\u0BAA\u0BB0\u0BCD_\u0BA8\u0BB5\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD_\u0B9F\u0BBF\u0B9A\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD".split("_"), weekdays: "\u0B9E\u0BBE\u0BAF\u0BBF\u0BB1\u0BCD\u0BB1\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8_\u0BA4\u0BBF\u0B99\u0BCD\u0B95\u0B9F\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8_\u0B9A\u0BC6\u0BB5\u0BCD\u0BB5\u0BBE\u0BAF\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8_\u0BAA\u0BC1\u0BA4\u0BA9\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8_\u0BB5\u0BBF\u0BAF\u0BBE\u0BB4\u0B95\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8_\u0BB5\u0BC6\u0BB3\u0BCD\u0BB3\u0BBF\u0B95\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8_\u0B9A\u0BA9\u0BBF\u0B95\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8".split("_"), weekdaysShort: "\u0B9E\u0BBE\u0BAF\u0BBF\u0BB1\u0BC1_\u0BA4\u0BBF\u0B99\u0BCD\u0B95\u0BB3\u0BCD_\u0B9A\u0BC6\u0BB5\u0BCD\u0BB5\u0BBE\u0BAF\u0BCD_\u0BAA\u0BC1\u0BA4\u0BA9\u0BCD_\u0BB5\u0BBF\u0BAF\u0BBE\u0BB4\u0BA9\u0BCD_\u0BB5\u0BC6\u0BB3\u0BCD\u0BB3\u0BBF_\u0B9A\u0BA9\u0BBF".split("_"), weekdaysMin: "\u0B9E\u0BBE_\u0BA4\u0BBF_\u0B9A\u0BC6_\u0BAA\u0BC1_\u0BB5\u0BBF_\u0BB5\u0BC6_\u0B9A".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, calendar: { sameDay: "[\u0B87\u0BA9\u0BCD\u0BB1\u0BC1] LT", nextDay: "[\u0BA8\u0BBE\u0BB3\u0BC8] LT", nextWeek: "dddd, LT", lastDay: "[\u0BA8\u0BC7\u0BB1\u0BCD\u0BB1\u0BC1] LT", lastWeek: "[\u0B95\u0B9F\u0BA8\u0BCD\u0BA4 \u0BB5\u0BBE\u0BB0\u0BAE\u0BCD] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0B87\u0BB2\u0BCD", past: "%s \u0BAE\u0BC1\u0BA9\u0BCD", s: "\u0B92\u0BB0\u0BC1 \u0B9A\u0BBF\u0BB2 \u0BB5\u0BBF\u0BA8\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BCD", ss: "%d \u0BB5\u0BBF\u0BA8\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BCD", m: "\u0B92\u0BB0\u0BC1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BAE\u0BCD", mm: "%d \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BCD", h: "\u0B92\u0BB0\u0BC1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD", hh: "%d \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD", d: "\u0B92\u0BB0\u0BC1 \u0BA8\u0BBE\u0BB3\u0BCD", dd: "%d \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BCD", M: "\u0B92\u0BB0\u0BC1 \u0BAE\u0BBE\u0BA4\u0BAE\u0BCD", MM: "%d \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BCD", y: "\u0B92\u0BB0\u0BC1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BAE\u0BCD", yy: "%d \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD" }, dayOfMonthOrdinalParse: /\d{1,2}\u0bb5\u0ba4\u0bc1/, ordinal: function ordinal(e) {
      return e + "\u0BB5\u0BA4\u0BC1";
    }, preparse: function preparse(e) {
      return e.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g, function (e) {
        return Bn[e];
      });
    }, postformat: function postformat(e) {
      return e.replace(/\d/g, function (e) {
        return Zn[e];
      });
    }, meridiemParse: /\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/, meridiem: function meridiem(e, a, t) {
      return e < 2 ? " \u0BAF\u0BBE\u0BAE\u0BAE\u0BCD" : e < 6 ? " \u0BB5\u0BC8\u0B95\u0BB1\u0BC8" : e < 10 ? " \u0B95\u0BBE\u0BB2\u0BC8" : e < 14 ? " \u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD" : e < 18 ? " \u0B8E\u0BB1\u0BCD\u0BAA\u0BBE\u0B9F\u0BC1" : e < 22 ? " \u0BAE\u0BBE\u0BB2\u0BC8" : " \u0BAF\u0BBE\u0BAE\u0BAE\u0BCD";
    }, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0BAF\u0BBE\u0BAE\u0BAE\u0BCD" === a ? e < 2 ? e : e + 12 : "\u0BB5\u0BC8\u0B95\u0BB1\u0BC8" === a || "\u0B95\u0BBE\u0BB2\u0BC8" === a ? e : "\u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD" === a && 10 <= e ? e : e + 12;
    }, week: { dow: 0, doy: 6 } }), l.defineLocale("te", { months: "\u0C1C\u0C28\u0C35\u0C30\u0C3F_\u0C2B\u0C3F\u0C2C\u0C4D\u0C30\u0C35\u0C30\u0C3F_\u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C3F_\u0C0F\u0C2A\u0C4D\u0C30\u0C3F\u0C32\u0C4D_\u0C2E\u0C47_\u0C1C\u0C42\u0C28\u0C4D_\u0C1C\u0C42\u0C32\u0C46\u0C56_\u0C06\u0C17\u0C38\u0C4D\u0C1F\u0C41_\u0C38\u0C46\u0C2A\u0C4D\u0C1F\u0C46\u0C02\u0C2C\u0C30\u0C4D_\u0C05\u0C15\u0C4D\u0C1F\u0C4B\u0C2C\u0C30\u0C4D_\u0C28\u0C35\u0C02\u0C2C\u0C30\u0C4D_\u0C21\u0C3F\u0C38\u0C46\u0C02\u0C2C\u0C30\u0C4D".split("_"), monthsShort: "\u0C1C\u0C28._\u0C2B\u0C3F\u0C2C\u0C4D\u0C30._\u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C3F_\u0C0F\u0C2A\u0C4D\u0C30\u0C3F._\u0C2E\u0C47_\u0C1C\u0C42\u0C28\u0C4D_\u0C1C\u0C42\u0C32\u0C46\u0C56_\u0C06\u0C17._\u0C38\u0C46\u0C2A\u0C4D._\u0C05\u0C15\u0C4D\u0C1F\u0C4B._\u0C28\u0C35._\u0C21\u0C3F\u0C38\u0C46.".split("_"), monthsParseExact: !0, weekdays: "\u0C06\u0C26\u0C3F\u0C35\u0C3E\u0C30\u0C02_\u0C38\u0C4B\u0C2E\u0C35\u0C3E\u0C30\u0C02_\u0C2E\u0C02\u0C17\u0C33\u0C35\u0C3E\u0C30\u0C02_\u0C2C\u0C41\u0C27\u0C35\u0C3E\u0C30\u0C02_\u0C17\u0C41\u0C30\u0C41\u0C35\u0C3E\u0C30\u0C02_\u0C36\u0C41\u0C15\u0C4D\u0C30\u0C35\u0C3E\u0C30\u0C02_\u0C36\u0C28\u0C3F\u0C35\u0C3E\u0C30\u0C02".split("_"), weekdaysShort: "\u0C06\u0C26\u0C3F_\u0C38\u0C4B\u0C2E_\u0C2E\u0C02\u0C17\u0C33_\u0C2C\u0C41\u0C27_\u0C17\u0C41\u0C30\u0C41_\u0C36\u0C41\u0C15\u0C4D\u0C30_\u0C36\u0C28\u0C3F".split("_"), weekdaysMin: "\u0C06_\u0C38\u0C4B_\u0C2E\u0C02_\u0C2C\u0C41_\u0C17\u0C41_\u0C36\u0C41_\u0C36".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[\u0C28\u0C47\u0C21\u0C41] LT", nextDay: "[\u0C30\u0C47\u0C2A\u0C41] LT", nextWeek: "dddd, LT", lastDay: "[\u0C28\u0C3F\u0C28\u0C4D\u0C28] LT", lastWeek: "[\u0C17\u0C24] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0C32\u0C4B", past: "%s \u0C15\u0C4D\u0C30\u0C3F\u0C24\u0C02", s: "\u0C15\u0C4A\u0C28\u0C4D\u0C28\u0C3F \u0C15\u0C4D\u0C37\u0C23\u0C3E\u0C32\u0C41", ss: "%d \u0C38\u0C46\u0C15\u0C28\u0C4D\u0C32\u0C41", m: "\u0C12\u0C15 \u0C28\u0C3F\u0C2E\u0C3F\u0C37\u0C02", mm: "%d \u0C28\u0C3F\u0C2E\u0C3F\u0C37\u0C3E\u0C32\u0C41", h: "\u0C12\u0C15 \u0C17\u0C02\u0C1F", hh: "%d \u0C17\u0C02\u0C1F\u0C32\u0C41", d: "\u0C12\u0C15 \u0C30\u0C4B\u0C1C\u0C41", dd: "%d \u0C30\u0C4B\u0C1C\u0C41\u0C32\u0C41", M: "\u0C12\u0C15 \u0C28\u0C46\u0C32", MM: "%d \u0C28\u0C46\u0C32\u0C32\u0C41", y: "\u0C12\u0C15 \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C02", yy: "%d \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C3E\u0C32\u0C41" }, dayOfMonthOrdinalParse: /\d{1,2}\u0c35/, ordinal: "%d\u0C35", meridiemParse: /\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F" === a ? e < 4 ? e : e + 12 : "\u0C09\u0C26\u0C2F\u0C02" === a ? e : "\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02" === a ? 10 <= e ? e : e + 12 : "\u0C38\u0C3E\u0C2F\u0C02\u0C24\u0C4D\u0C30\u0C02" === a ? e + 12 : void 0;
    }, meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F" : e < 10 ? "\u0C09\u0C26\u0C2F\u0C02" : e < 17 ? "\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02" : e < 20 ? "\u0C38\u0C3E\u0C2F\u0C02\u0C24\u0C4D\u0C30\u0C02" : "\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F";
    }, week: { dow: 0, doy: 6 } }), l.defineLocale("tet", { months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju\xf1u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"), weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"), weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Ohin iha] LT", nextDay: "[Aban iha] LT", nextWeek: "dddd [iha] LT", lastDay: "[Horiseik iha] LT", lastWeek: "dddd [semana kotuk] [iha] LT", sameElse: "L" }, relativeTime: { future: "iha %s", past: "%s liuba", s: "minutu balun", ss: "minutu %d", m: "minutu ida", mm: "minutu %d", h: "oras ida", hh: "oras %d", d: "loron ida", dd: "loron %d", M: "fulan ida", MM: "fulan %d", y: "tinan ida", yy: "tinan %d" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
      var a = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
    }, week: { dow: 1, doy: 4 } });var qn = { 0: "-\u0443\u043C", 1: "-\u0443\u043C", 2: "-\u044E\u043C", 3: "-\u044E\u043C", 4: "-\u0443\u043C", 5: "-\u0443\u043C", 6: "-\u0443\u043C", 7: "-\u0443\u043C", 8: "-\u0443\u043C", 9: "-\u0443\u043C", 10: "-\u0443\u043C", 12: "-\u0443\u043C", 13: "-\u0443\u043C", 20: "-\u0443\u043C", 30: "-\u044E\u043C", 40: "-\u0443\u043C", 50: "-\u0443\u043C", 60: "-\u0443\u043C", 70: "-\u0443\u043C", 80: "-\u0443\u043C", 90: "-\u0443\u043C", 100: "-\u0443\u043C" };l.defineLocale("tg", { months: "\u044F\u043D\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043B_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0435\u043B_\u043C\u0430\u0439_\u0438\u044E\u043D_\u0438\u044E\u043B_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043D\u0442\u044F\u0431\u0440_\u043E\u043A\u0442\u044F\u0431\u0440_\u043D\u043E\u044F\u0431\u0440_\u0434\u0435\u043A\u0430\u0431\u0440".split("_"), monthsShort: "\u044F\u043D\u0432_\u0444\u0435\u0432_\u043C\u0430\u0440_\u0430\u043F\u0440_\u043C\u0430\u0439_\u0438\u044E\u043D_\u0438\u044E\u043B_\u0430\u0432\u0433_\u0441\u0435\u043D_\u043E\u043A\u0442_\u043D\u043E\u044F_\u0434\u0435\u043A".split("_"), weekdays: "\u044F\u043A\u0448\u0430\u043D\u0431\u0435_\u0434\u0443\u0448\u0430\u043D\u0431\u0435_\u0441\u0435\u0448\u0430\u043D\u0431\u0435_\u0447\u043E\u0440\u0448\u0430\u043D\u0431\u0435_\u043F\u0430\u043D\u04B7\u0448\u0430\u043D\u0431\u0435_\u04B7\u0443\u043C\u044A\u0430_\u0448\u0430\u043D\u0431\u0435".split("_"), weekdaysShort: "\u044F\u0448\u0431_\u0434\u0448\u0431_\u0441\u0448\u0431_\u0447\u0448\u0431_\u043F\u0448\u0431_\u04B7\u0443\u043C_\u0448\u043D\u0431".split("_"), weekdaysMin: "\u044F\u0448_\u0434\u0448_\u0441\u0448_\u0447\u0448_\u043F\u0448_\u04B7\u043C_\u0448\u0431".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0418\u043C\u0440\u04EF\u0437 \u0441\u043E\u0430\u0442\u0438] LT", nextDay: "[\u041F\u0430\u0433\u043E\u04B3 \u0441\u043E\u0430\u0442\u0438] LT", lastDay: "[\u0414\u0438\u0440\u04EF\u0437 \u0441\u043E\u0430\u0442\u0438] LT", nextWeek: "dddd[\u0438] [\u04B3\u0430\u0444\u0442\u0430\u0438 \u043E\u044F\u043D\u0434\u0430 \u0441\u043E\u0430\u0442\u0438] LT", lastWeek: "dddd[\u0438] [\u04B3\u0430\u0444\u0442\u0430\u0438 \u0433\u0443\u0437\u0430\u0448\u0442\u0430 \u0441\u043E\u0430\u0442\u0438] LT", sameElse: "L" }, relativeTime: { future: "\u0431\u0430\u044A\u0434\u0438 %s", past: "%s \u043F\u0435\u0448", s: "\u044F\u043A\u0447\u0430\u043D\u0434 \u0441\u043E\u043D\u0438\u044F", m: "\u044F\u043A \u0434\u0430\u049B\u0438\u049B\u0430", mm: "%d \u0434\u0430\u049B\u0438\u049B\u0430", h: "\u044F\u043A \u0441\u043E\u0430\u0442", hh: "%d \u0441\u043E\u0430\u0442", d: "\u044F\u043A \u0440\u04EF\u0437", dd: "%d \u0440\u04EF\u0437", M: "\u044F\u043A \u043C\u043E\u04B3", MM: "%d \u043C\u043E\u04B3", y: "\u044F\u043A \u0441\u043E\u043B", yy: "%d \u0441\u043E\u043B" }, meridiemParse: /\u0448\u0430\u0431|\u0441\u0443\u0431\u04b3|\u0440\u04ef\u0437|\u0431\u0435\u0433\u043e\u04b3/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u0448\u0430\u0431" === a ? e < 4 ? e : e + 12 : "\u0441\u0443\u0431\u04B3" === a ? e : "\u0440\u04EF\u0437" === a ? 11 <= e ? e : e + 12 : "\u0431\u0435\u0433\u043E\u04B3" === a ? e + 12 : void 0;
    }, meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u0448\u0430\u0431" : e < 11 ? "\u0441\u0443\u0431\u04B3" : e < 16 ? "\u0440\u04EF\u0437" : e < 19 ? "\u0431\u0435\u0433\u043E\u04B3" : "\u0448\u0430\u0431";
    }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0443\u043c|\u044e\u043c)/, ordinal: function ordinal(e) {
      return e + (qn[e] || qn[e % 10] || qn[100 <= e ? 100 : null]);
    }, week: { dow: 1, doy: 7 } }), l.defineLocale("th", { months: "\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21_\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C_\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21_\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19_\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21_\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19_\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21_\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21_\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19_\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21_\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19_\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21".split("_"), monthsShort: "\u0E21.\u0E04._\u0E01.\u0E1E._\u0E21\u0E35.\u0E04._\u0E40\u0E21.\u0E22._\u0E1E.\u0E04._\u0E21\u0E34.\u0E22._\u0E01.\u0E04._\u0E2A.\u0E04._\u0E01.\u0E22._\u0E15.\u0E04._\u0E1E.\u0E22._\u0E18.\u0E04.".split("_"), monthsParseExact: !0, weekdays: "\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C_\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C_\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23_\u0E1E\u0E38\u0E18_\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35_\u0E28\u0E38\u0E01\u0E23\u0E4C_\u0E40\u0E2A\u0E32\u0E23\u0E4C".split("_"), weekdaysShort: "\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C_\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C_\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23_\u0E1E\u0E38\u0E18_\u0E1E\u0E24\u0E2B\u0E31\u0E2A_\u0E28\u0E38\u0E01\u0E23\u0E4C_\u0E40\u0E2A\u0E32\u0E23\u0E4C".split("_"), weekdaysMin: "\u0E2D\u0E32._\u0E08._\u0E2D._\u0E1E._\u0E1E\u0E24._\u0E28._\u0E2A.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY \u0E40\u0E27\u0E25\u0E32 H:mm", LLLL: "\u0E27\u0E31\u0E19dddd\u0E17\u0E35\u0E48 D MMMM YYYY \u0E40\u0E27\u0E25\u0E32 H:mm" }, meridiemParse: /\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/, isPM: function isPM(e) {
      return "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07" === e;
    }, meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07" : "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07";
    }, calendar: { sameDay: "[\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT", nextDay: "[\u0E1E\u0E23\u0E38\u0E48\u0E07\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT", nextWeek: "dddd[\u0E2B\u0E19\u0E49\u0E32 \u0E40\u0E27\u0E25\u0E32] LT", lastDay: "[\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E19\u0E19\u0E35\u0E49 \u0E40\u0E27\u0E25\u0E32] LT", lastWeek: "[\u0E27\u0E31\u0E19]dddd[\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E40\u0E27\u0E25\u0E32] LT", sameElse: "L" }, relativeTime: { future: "\u0E2D\u0E35\u0E01 %s", past: "%s\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27", s: "\u0E44\u0E21\u0E48\u0E01\u0E35\u0E48\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35", ss: "%d \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35", m: "1 \u0E19\u0E32\u0E17\u0E35", mm: "%d \u0E19\u0E32\u0E17\u0E35", h: "1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07", hh: "%d \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07", d: "1 \u0E27\u0E31\u0E19", dd: "%d \u0E27\u0E31\u0E19", M: "1 \u0E40\u0E14\u0E37\u0E2D\u0E19", MM: "%d \u0E40\u0E14\u0E37\u0E2D\u0E19", y: "1 \u0E1B\u0E35", yy: "%d \u0E1B\u0E35" } }), l.defineLocale("tl-ph", { months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, calendar: { sameDay: "LT [ngayong araw]", nextDay: "[Bukas ng] LT", nextWeek: "LT [sa susunod na] dddd", lastDay: "LT [kahapon]", lastWeek: "LT [noong nakaraang] dddd", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", ss: "%d segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function ordinal(e) {
      return e;
    }, week: { dow: 1, doy: 4 } });var Qn = "pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");function Xn(e, a, t, s) {
    var n = function (e) {
      var a = Math.floor(e % 1e3 / 100),
          t = Math.floor(e % 100 / 10),
          s = e % 10,
          n = "";0 < a && (n += Qn[a] + "vatlh");0 < t && (n += ("" !== n ? " " : "") + Qn[t] + "maH");0 < s && (n += ("" !== n ? " " : "") + Qn[s]);return "" === n ? "pagh" : n;
    }(e);switch (t) {case "ss":
        return n + " lup";case "mm":
        return n + " tup";case "hh":
        return n + " rep";case "dd":
        return n + " jaj";case "MM":
        return n + " jar";case "yy":
        return n + " DIS";}
  }l.defineLocale("tlh", { months: "tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019".split("_"), monthsShort: "jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019".split("_"), monthsParseExact: !0, weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[DaHjaj] LT", nextDay: "[wa\u2019leS] LT", nextWeek: "LLL", lastDay: "[wa\u2019Hu\u2019] LT", lastWeek: "LLL", sameElse: "L" }, relativeTime: { future: function future(e) {
        var a = e;return a = -1 !== e.indexOf("jaj") ? a.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? a.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? a.slice(0, -3) + "nem" : a + " pIq";
      }, past: function past(e) {
        var a = e;return a = -1 !== e.indexOf("jaj") ? a.slice(0, -3) + "Hu\u2019" : -1 !== e.indexOf("jar") ? a.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? a.slice(0, -3) + "ben" : a + " ret";
      }, s: "puS lup", ss: Xn, m: "wa\u2019 tup", mm: Xn, h: "wa\u2019 rep", hh: Xn, d: "wa\u2019 jaj", dd: Xn, M: "wa\u2019 jar", MM: Xn, y: "wa\u2019 DIS", yy: Xn }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });var ed = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'\xfcnc\xfc", 4: "'\xfcnc\xfc", 100: "'\xfcnc\xfc", 6: "'nc\u0131", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'\u0131nc\u0131", 90: "'\u0131nc\u0131" };function ad(e, a, t, s) {
    var n = { s: ["viensas secunds", "'iensas secunds"], ss: [e + " secunds", e + " secunds"], m: ["'n m\xedut", "'iens m\xedut"], mm: [e + " m\xeduts", e + " m\xeduts"], h: ["'n \xfeora", "'iensa \xfeora"], hh: [e + " \xfeoras", e + " \xfeoras"], d: ["'n ziua", "'iensa ziua"], dd: [e + " ziuas", e + " ziuas"], M: ["'n mes", "'iens mes"], MM: [e + " mesen", e + " mesen"], y: ["'n ar", "'iens ar"], yy: [e + " ars", e + " ars"] };return s ? n[t][0] : a ? n[t][0] : n[t][1];
  }function td(e, a, t) {
    var s, n;return "m" === t ? a ? "\u0445\u0432\u0438\u043B\u0438\u043D\u0430" : "\u0445\u0432\u0438\u043B\u0438\u043D\u0443" : "h" === t ? a ? "\u0433\u043E\u0434\u0438\u043D\u0430" : "\u0433\u043E\u0434\u0438\u043D\u0443" : e + " " + (s = +e, n = { ss: a ? "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434" : "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434", mm: a ? "\u0445\u0432\u0438\u043B\u0438\u043D\u0430_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D" : "\u0445\u0432\u0438\u043B\u0438\u043D\u0443_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D", hh: a ? "\u0433\u043E\u0434\u0438\u043D\u0430_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D" : "\u0433\u043E\u0434\u0438\u043D\u0443_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D", dd: "\u0434\u0435\u043D\u044C_\u0434\u043D\u0456_\u0434\u043D\u0456\u0432", MM: "\u043C\u0456\u0441\u044F\u0446\u044C_\u043C\u0456\u0441\u044F\u0446\u0456_\u043C\u0456\u0441\u044F\u0446\u0456\u0432", yy: "\u0440\u0456\u043A_\u0440\u043E\u043A\u0438_\u0440\u043E\u043A\u0456\u0432" }[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : 2 <= s % 10 && s % 10 <= 4 && (s % 100 < 10 || 20 <= s % 100) ? n[1] : n[2]);
  }function sd(e) {
    return function () {
      return e + "\u043E" + (11 === this.hours() ? "\u0431" : "") + "] LT";
    };
  }l.defineLocale("tr", { months: "Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\xFCl_Ekim_Kas\u0131m_Aral\u0131k".split("_"), monthsShort: "Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara".split("_"), weekdays: "Pazar_Pazartesi_Sal\u0131_\xC7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_\xc7ar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bug\xfcn saat] LT", nextDay: "[yar\u0131n saat] LT", nextWeek: "[gelecek] dddd [saat] LT", lastDay: "[d\xfcn] LT", lastWeek: "[ge\xe7en] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s \xf6nce", s: "birka\xe7 saniye", ss: "%d saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir g\xfcn", dd: "%d g\xfcn", M: "bir ay", MM: "%d ay", y: "bir y\u0131l", yy: "%d y\u0131l" }, ordinal: function ordinal(e, a) {
      switch (a) {case "d":case "D":case "Do":case "DD":
          return e;default:
          if (0 === e) return e + "'\u0131nc\u0131";var t = e % 10;return e + (ed[t] || ed[e % 100 - t] || ed[100 <= e ? 100 : null]);}
    }, week: { dow: 1, doy: 7 } }), l.defineLocale("tzl", { months: "Januar_Fevraglh_Mar\xe7_Avr\xefu_Mai_G\xfcn_Julia_Guscht_Setemvar_Listop\xe4ts_Noemvar_Zecemvar".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_G\xfcn_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdays: "S\xfaladi_L\xfane\xe7i_Maitzi_M\xe1rcuri_Xh\xfaadi_Vi\xe9ner\xe7i_S\xe1turi".split("_"), weekdaysShort: "S\xfal_L\xfan_Mai_M\xe1r_Xh\xfa_Vi\xe9_S\xe1t".split("_"), weekdaysMin: "S\xfa_L\xfa_Ma_M\xe1_Xh_Vi_S\xe1".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" }, meridiemParse: /d\'o|d\'a/i, isPM: function isPM(e) {
      return "d'o" === e.toLowerCase();
    }, meridiem: function meridiem(e, a, t) {
      return 11 < e ? t ? "d'o" : "D'O" : t ? "d'a" : "D'A";
    }, calendar: { sameDay: "[oxhi \xe0] LT", nextDay: "[dem\xe0 \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[ieiri \xe0] LT", lastWeek: "[s\xfcr el] dddd [lasteu \xe0] LT", sameElse: "L" }, relativeTime: { future: "osprei %s", past: "ja%s", s: ad, ss: ad, m: ad, mm: ad, h: ad, hh: ad, d: ad, dd: ad, M: ad, MM: ad, y: ad, yy: ad }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("tzm-latn", { months: "innayr_br\u02E4ayr\u02E4_mar\u02E4s\u02E4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02E4wbr\u02E4_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_br\u02E4ayr\u02E4_mar\u02E4s\u02E4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02E4wbr\u02E4_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1E0Dyas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1E0Dyas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1E0Dyas".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", ss: "%d imik", m: "minu\u1E0D", mm: "%d minu\u1E0D", h: "sa\u025Ba", hh: "%d tassa\u025Bin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" }, week: { dow: 6, doy: 12 } }), l.defineLocale("tzm", { months: "\u2D49\u2D4F\u2D4F\u2D30\u2D62\u2D54_\u2D31\u2D55\u2D30\u2D62\u2D55_\u2D4E\u2D30\u2D55\u2D5A_\u2D49\u2D31\u2D54\u2D49\u2D54_\u2D4E\u2D30\u2D62\u2D62\u2D53_\u2D62\u2D53\u2D4F\u2D62\u2D53_\u2D62\u2D53\u2D4D\u2D62\u2D53\u2D63_\u2D56\u2D53\u2D5B\u2D5C_\u2D5B\u2D53\u2D5C\u2D30\u2D4F\u2D31\u2D49\u2D54_\u2D3D\u2D5F\u2D53\u2D31\u2D55_\u2D4F\u2D53\u2D61\u2D30\u2D4F\u2D31\u2D49\u2D54_\u2D37\u2D53\u2D4A\u2D4F\u2D31\u2D49\u2D54".split("_"), monthsShort: "\u2D49\u2D4F\u2D4F\u2D30\u2D62\u2D54_\u2D31\u2D55\u2D30\u2D62\u2D55_\u2D4E\u2D30\u2D55\u2D5A_\u2D49\u2D31\u2D54\u2D49\u2D54_\u2D4E\u2D30\u2D62\u2D62\u2D53_\u2D62\u2D53\u2D4F\u2D62\u2D53_\u2D62\u2D53\u2D4D\u2D62\u2D53\u2D63_\u2D56\u2D53\u2D5B\u2D5C_\u2D5B\u2D53\u2D5C\u2D30\u2D4F\u2D31\u2D49\u2D54_\u2D3D\u2D5F\u2D53\u2D31\u2D55_\u2D4F\u2D53\u2D61\u2D30\u2D4F\u2D31\u2D49\u2D54_\u2D37\u2D53\u2D4A\u2D4F\u2D31\u2D49\u2D54".split("_"), weekdays: "\u2D30\u2D59\u2D30\u2D4E\u2D30\u2D59_\u2D30\u2D62\u2D4F\u2D30\u2D59_\u2D30\u2D59\u2D49\u2D4F\u2D30\u2D59_\u2D30\u2D3D\u2D54\u2D30\u2D59_\u2D30\u2D3D\u2D61\u2D30\u2D59_\u2D30\u2D59\u2D49\u2D4E\u2D61\u2D30\u2D59_\u2D30\u2D59\u2D49\u2D39\u2D62\u2D30\u2D59".split("_"), weekdaysShort: "\u2D30\u2D59\u2D30\u2D4E\u2D30\u2D59_\u2D30\u2D62\u2D4F\u2D30\u2D59_\u2D30\u2D59\u2D49\u2D4F\u2D30\u2D59_\u2D30\u2D3D\u2D54\u2D30\u2D59_\u2D30\u2D3D\u2D61\u2D30\u2D59_\u2D30\u2D59\u2D49\u2D4E\u2D61\u2D30\u2D59_\u2D30\u2D59\u2D49\u2D39\u2D62\u2D30\u2D59".split("_"), weekdaysMin: "\u2D30\u2D59\u2D30\u2D4E\u2D30\u2D59_\u2D30\u2D62\u2D4F\u2D30\u2D59_\u2D30\u2D59\u2D49\u2D4F\u2D30\u2D59_\u2D30\u2D3D\u2D54\u2D30\u2D59_\u2D30\u2D3D\u2D61\u2D30\u2D59_\u2D30\u2D59\u2D49\u2D4E\u2D61\u2D30\u2D59_\u2D30\u2D59\u2D49\u2D39\u2D62\u2D30\u2D59".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u2D30\u2D59\u2D37\u2D45 \u2D34] LT", nextDay: "[\u2D30\u2D59\u2D3D\u2D30 \u2D34] LT", nextWeek: "dddd [\u2D34] LT", lastDay: "[\u2D30\u2D5A\u2D30\u2D4F\u2D5C \u2D34] LT", lastWeek: "dddd [\u2D34] LT", sameElse: "L" }, relativeTime: { future: "\u2D37\u2D30\u2D37\u2D45 \u2D59 \u2D62\u2D30\u2D4F %s", past: "\u2D62\u2D30\u2D4F %s", s: "\u2D49\u2D4E\u2D49\u2D3D", ss: "%d \u2D49\u2D4E\u2D49\u2D3D", m: "\u2D4E\u2D49\u2D4F\u2D53\u2D3A", mm: "%d \u2D4E\u2D49\u2D4F\u2D53\u2D3A", h: "\u2D59\u2D30\u2D44\u2D30", hh: "%d \u2D5C\u2D30\u2D59\u2D59\u2D30\u2D44\u2D49\u2D4F", d: "\u2D30\u2D59\u2D59", dd: "%d o\u2D59\u2D59\u2D30\u2D4F", M: "\u2D30\u2D62o\u2D53\u2D54", MM: "%d \u2D49\u2D62\u2D62\u2D49\u2D54\u2D4F", y: "\u2D30\u2D59\u2D33\u2D30\u2D59", yy: "%d \u2D49\u2D59\u2D33\u2D30\u2D59\u2D4F" }, week: { dow: 6, doy: 12 } }), l.defineLocale("ug-cn", { months: "\u064A\u0627\u0646\u06CB\u0627\u0631_\u0641\u06D0\u06CB\u0631\u0627\u0644_\u0645\u0627\u0631\u062A_\u0626\u0627\u067E\u0631\u06D0\u0644_\u0645\u0627\u064A_\u0626\u0649\u064A\u06C7\u0646_\u0626\u0649\u064A\u06C7\u0644_\u0626\u0627\u06CB\u063A\u06C7\u0633\u062A_\u0633\u06D0\u0646\u062A\u06D5\u0628\u0649\u0631_\u0626\u06C6\u0643\u062A\u06D5\u0628\u0649\u0631_\u0646\u0648\u064A\u0627\u0628\u0649\u0631_\u062F\u06D0\u0643\u0627\u0628\u0649\u0631".split("_"), monthsShort: "\u064A\u0627\u0646\u06CB\u0627\u0631_\u0641\u06D0\u06CB\u0631\u0627\u0644_\u0645\u0627\u0631\u062A_\u0626\u0627\u067E\u0631\u06D0\u0644_\u0645\u0627\u064A_\u0626\u0649\u064A\u06C7\u0646_\u0626\u0649\u064A\u06C7\u0644_\u0626\u0627\u06CB\u063A\u06C7\u0633\u062A_\u0633\u06D0\u0646\u062A\u06D5\u0628\u0649\u0631_\u0626\u06C6\u0643\u062A\u06D5\u0628\u0649\u0631_\u0646\u0648\u064A\u0627\u0628\u0649\u0631_\u062F\u06D0\u0643\u0627\u0628\u0649\u0631".split("_"), weekdays: "\u064A\u06D5\u0643\u0634\u06D5\u0646\u0628\u06D5_\u062F\u06C8\u0634\u06D5\u0646\u0628\u06D5_\u0633\u06D5\u064A\u0634\u06D5\u0646\u0628\u06D5_\u0686\u0627\u0631\u0634\u06D5\u0646\u0628\u06D5_\u067E\u06D5\u064A\u0634\u06D5\u0646\u0628\u06D5_\u062C\u06C8\u0645\u06D5_\u0634\u06D5\u0646\u0628\u06D5".split("_"), weekdaysShort: "\u064A\u06D5_\u062F\u06C8_\u0633\u06D5_\u0686\u0627_\u067E\u06D5_\u062C\u06C8_\u0634\u06D5".split("_"), weekdaysMin: "\u064A\u06D5_\u062F\u06C8_\u0633\u06D5_\u0686\u0627_\u067E\u06D5_\u062C\u06C8_\u0634\u06D5".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY-\u064A\u0649\u0644\u0649M-\u0626\u0627\u064A\u0646\u0649\u06ADD-\u0643\u06C8\u0646\u0649", LLL: "YYYY-\u064A\u0649\u0644\u0649M-\u0626\u0627\u064A\u0646\u0649\u06ADD-\u0643\u06C8\u0646\u0649\u060C HH:mm", LLLL: "dddd\u060C YYYY-\u064A\u0649\u0644\u0649M-\u0626\u0627\u064A\u0646\u0649\u06ADD-\u0643\u06C8\u0646\u0649\u060C HH:mm" }, meridiemParse: /\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5|\u0633\u06d5\u06be\u06d5\u0631|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0686\u06c8\u0634|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646|\u0643\u06d5\u0686/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u064A\u06D0\u0631\u0649\u0645 \u0643\u06D0\u0686\u06D5" === a || "\u0633\u06D5\u06BE\u06D5\u0631" === a || "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0628\u06C7\u0631\u06C7\u0646" === a ? e : "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0643\u06D0\u064A\u0649\u0646" === a || "\u0643\u06D5\u0686" === a ? e + 12 : 11 <= e ? e : e + 12;
    }, meridiem: function meridiem(e, a, t) {
      var s = 100 * e + a;return s < 600 ? "\u064A\u06D0\u0631\u0649\u0645 \u0643\u06D0\u0686\u06D5" : s < 900 ? "\u0633\u06D5\u06BE\u06D5\u0631" : s < 1130 ? "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0628\u06C7\u0631\u06C7\u0646" : s < 1230 ? "\u0686\u06C8\u0634" : s < 1800 ? "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0643\u06D0\u064A\u0649\u0646" : "\u0643\u06D5\u0686";
    }, calendar: { sameDay: "[\u0628\u06C8\u06AF\u06C8\u0646 \u0633\u0627\u0626\u06D5\u062A] LT", nextDay: "[\u0626\u06D5\u062A\u06D5 \u0633\u0627\u0626\u06D5\u062A] LT", nextWeek: "[\u0643\u06D0\u0644\u06D5\u0631\u0643\u0649] dddd [\u0633\u0627\u0626\u06D5\u062A] LT", lastDay: "[\u062A\u06C6\u0646\u06C8\u06AF\u06C8\u0646] LT", lastWeek: "[\u0626\u0627\u0644\u062F\u0649\u0646\u0642\u0649] dddd [\u0633\u0627\u0626\u06D5\u062A] LT", sameElse: "L" }, relativeTime: { future: "%s \u0643\u06D0\u064A\u0649\u0646", past: "%s \u0628\u06C7\u0631\u06C7\u0646", s: "\u0646\u06D5\u0686\u0686\u06D5 \u0633\u06D0\u0643\u0648\u0646\u062A", ss: "%d \u0633\u06D0\u0643\u0648\u0646\u062A", m: "\u0628\u0649\u0631 \u0645\u0649\u0646\u06C7\u062A", mm: "%d \u0645\u0649\u0646\u06C7\u062A", h: "\u0628\u0649\u0631 \u0633\u0627\u0626\u06D5\u062A", hh: "%d \u0633\u0627\u0626\u06D5\u062A", d: "\u0628\u0649\u0631 \u0643\u06C8\u0646", dd: "%d \u0643\u06C8\u0646", M: "\u0628\u0649\u0631 \u0626\u0627\u064A", MM: "%d \u0626\u0627\u064A", y: "\u0628\u0649\u0631 \u064A\u0649\u0644", yy: "%d \u064A\u0649\u0644" }, dayOfMonthOrdinalParse: /\d{1,2}(-\u0643\u06c8\u0646\u0649|-\u0626\u0627\u064a|-\u06be\u06d5\u067e\u062a\u06d5)/, ordinal: function ordinal(e, a) {
      switch (a) {case "d":case "D":case "DDD":
          return e + "-\u0643\u06C8\u0646\u0649";case "w":case "W":
          return e + "-\u06BE\u06D5\u067E\u062A\u06D5";default:
          return e;}
    }, preparse: function preparse(e) {
      return e.replace(/\u060c/g, ",");
    }, postformat: function postformat(e) {
      return e.replace(/,/g, "\u060C");
    }, week: { dow: 1, doy: 7 } }), l.defineLocale("uk", { months: { format: "\u0441\u0456\u0447\u043D\u044F_\u043B\u044E\u0442\u043E\u0433\u043E_\u0431\u0435\u0440\u0435\u0437\u043D\u044F_\u043A\u0432\u0456\u0442\u043D\u044F_\u0442\u0440\u0430\u0432\u043D\u044F_\u0447\u0435\u0440\u0432\u043D\u044F_\u043B\u0438\u043F\u043D\u044F_\u0441\u0435\u0440\u043F\u043D\u044F_\u0432\u0435\u0440\u0435\u0441\u043D\u044F_\u0436\u043E\u0432\u0442\u043D\u044F_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043D\u044F".split("_"), standalone: "\u0441\u0456\u0447\u0435\u043D\u044C_\u043B\u044E\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043D\u044C_\u043A\u0432\u0456\u0442\u0435\u043D\u044C_\u0442\u0440\u0430\u0432\u0435\u043D\u044C_\u0447\u0435\u0440\u0432\u0435\u043D\u044C_\u043B\u0438\u043F\u0435\u043D\u044C_\u0441\u0435\u0440\u043F\u0435\u043D\u044C_\u0432\u0435\u0440\u0435\u0441\u0435\u043D\u044C_\u0436\u043E\u0432\u0442\u0435\u043D\u044C_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043D\u044C".split("_") }, monthsShort: "\u0441\u0456\u0447_\u043B\u044E\u0442_\u0431\u0435\u0440_\u043A\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043B\u0438\u043F_\u0441\u0435\u0440\u043F_\u0432\u0435\u0440_\u0436\u043E\u0432\u0442_\u043B\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"), weekdays: function weekdays(e, a) {
      var t = { nominative: "\u043D\u0435\u0434\u0456\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044F_\u0441\u0443\u0431\u043E\u0442\u0430".split("_"), accusative: "\u043D\u0435\u0434\u0456\u043B\u044E_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044E_\u0441\u0443\u0431\u043E\u0442\u0443".split("_"), genitive: "\u043D\u0435\u0434\u0456\u043B\u0456_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043A\u0430_\u0432\u0456\u0432\u0442\u043E\u0440\u043A\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u0456_\u0441\u0443\u0431\u043E\u0442\u0438".split("_") };return e ? t[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(a) ? "accusative" : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(a) ? "genitive" : "nominative"][e.day()] : t.nominative;
    }, weekdaysShort: "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"), weekdaysMin: "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0440.", LLL: "D MMMM YYYY \u0440., HH:mm", LLLL: "dddd, D MMMM YYYY \u0440., HH:mm" }, calendar: { sameDay: sd("[\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456 "), nextDay: sd("[\u0417\u0430\u0432\u0442\u0440\u0430 "), lastDay: sd("[\u0412\u0447\u043E\u0440\u0430 "), nextWeek: sd("[\u0423] dddd ["), lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:case 5:case 6:
            return sd("[\u041C\u0438\u043D\u0443\u043B\u043E\u0457] dddd [").call(this);case 1:case 2:case 4:
            return sd("[\u041C\u0438\u043D\u0443\u043B\u043E\u0433\u043E] dddd [").call(this);}
      }, sameElse: "L" }, relativeTime: { future: "\u0437\u0430 %s", past: "%s \u0442\u043E\u043C\u0443", s: "\u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u0435\u043A\u0443\u043D\u0434", ss: td, m: td, mm: td, h: "\u0433\u043E\u0434\u0438\u043D\u0443", hh: td, d: "\u0434\u0435\u043D\u044C", dd: td, M: "\u043C\u0456\u0441\u044F\u0446\u044C", MM: td, y: "\u0440\u0456\u043A", yy: td }, meridiemParse: /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/, isPM: function isPM(e) {
      return (/^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(e)
      );
    }, meridiem: function meridiem(e, a, t) {
      return e < 4 ? "\u043D\u043E\u0447\u0456" : e < 12 ? "\u0440\u0430\u043D\u043A\u0443" : e < 17 ? "\u0434\u043D\u044F" : "\u0432\u0435\u0447\u043E\u0440\u0430";
    }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/, ordinal: function ordinal(e, a) {
      switch (a) {case "M":case "d":case "DDD":case "w":case "W":
          return e + "-\u0439";case "D":
          return e + "-\u0433\u043E";default:
          return e;}
    }, week: { dow: 1, doy: 7 } });var nd = ["\u062C\u0646\u0648\u0631\u06CC", "\u0641\u0631\u0648\u0631\u06CC", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u0626\u06CC", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u0626\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"],
      dd = ["\u0627\u062A\u0648\u0627\u0631", "\u067E\u06CC\u0631", "\u0645\u0646\u06AF\u0644", "\u0628\u062F\u06BE", "\u062C\u0645\u0639\u0631\u0627\u062A", "\u062C\u0645\u0639\u06C1", "\u06C1\u0641\u062A\u06C1"];return l.defineLocale("ur", { months: nd, monthsShort: nd, weekdays: dd, weekdaysShort: dd, weekdaysMin: dd, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd\u060C D MMMM YYYY HH:mm" }, meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/, isPM: function isPM(e) {
      return "\u0634\u0627\u0645" === e;
    }, meridiem: function meridiem(e, a, t) {
      return e < 12 ? "\u0635\u0628\u062D" : "\u0634\u0627\u0645";
    }, calendar: { sameDay: "[\u0622\u062C \u0628\u0648\u0642\u062A] LT", nextDay: "[\u06A9\u0644 \u0628\u0648\u0642\u062A] LT", nextWeek: "dddd [\u0628\u0648\u0642\u062A] LT", lastDay: "[\u06AF\u0630\u0634\u062A\u06C1 \u0631\u0648\u0632 \u0628\u0648\u0642\u062A] LT", lastWeek: "[\u06AF\u0630\u0634\u062A\u06C1] dddd [\u0628\u0648\u0642\u062A] LT", sameElse: "L" }, relativeTime: { future: "%s \u0628\u0639\u062F", past: "%s \u0642\u0628\u0644", s: "\u0686\u0646\u062F \u0633\u06CC\u06A9\u0646\u0688", ss: "%d \u0633\u06CC\u06A9\u0646\u0688", m: "\u0627\u06CC\u06A9 \u0645\u0646\u0679", mm: "%d \u0645\u0646\u0679", h: "\u0627\u06CC\u06A9 \u06AF\u06BE\u0646\u0679\u06C1", hh: "%d \u06AF\u06BE\u0646\u0679\u06D2", d: "\u0627\u06CC\u06A9 \u062F\u0646", dd: "%d \u062F\u0646", M: "\u0627\u06CC\u06A9 \u0645\u0627\u06C1", MM: "%d \u0645\u0627\u06C1", y: "\u0627\u06CC\u06A9 \u0633\u0627\u0644", yy: "%d \u0633\u0627\u0644" }, preparse: function preparse(e) {
      return e.replace(/\u060c/g, ",");
    }, postformat: function postformat(e) {
      return e.replace(/,/g, "\u060C");
    }, week: { dow: 1, doy: 4 } }), l.defineLocale("uz-latn", { months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Bugun soat] LT [da]", nextDay: "[Ertaga] LT [da]", nextWeek: "dddd [kuni soat] LT [da]", lastDay: "[Kecha soat] LT [da]", lastWeek: "[O'tgan] dddd [kuni soat] LT [da]", sameElse: "L" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", ss: "%d soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" }, week: { dow: 1, doy: 7 } }), l.defineLocale("uz", { months: "\u044F\u043D\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043B_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0435\u043B_\u043C\u0430\u0439_\u0438\u044E\u043D_\u0438\u044E\u043B_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043D\u0442\u044F\u0431\u0440_\u043E\u043A\u0442\u044F\u0431\u0440_\u043D\u043E\u044F\u0431\u0440_\u0434\u0435\u043A\u0430\u0431\u0440".split("_"), monthsShort: "\u044F\u043D\u0432_\u0444\u0435\u0432_\u043C\u0430\u0440_\u0430\u043F\u0440_\u043C\u0430\u0439_\u0438\u044E\u043D_\u0438\u044E\u043B_\u0430\u0432\u0433_\u0441\u0435\u043D_\u043E\u043A\u0442_\u043D\u043E\u044F_\u0434\u0435\u043A".split("_"), weekdays: "\u042F\u043A\u0448\u0430\u043D\u0431\u0430_\u0414\u0443\u0448\u0430\u043D\u0431\u0430_\u0421\u0435\u0448\u0430\u043D\u0431\u0430_\u0427\u043E\u0440\u0448\u0430\u043D\u0431\u0430_\u041F\u0430\u0439\u0448\u0430\u043D\u0431\u0430_\u0416\u0443\u043C\u0430_\u0428\u0430\u043D\u0431\u0430".split("_"), weekdaysShort: "\u042F\u043A\u0448_\u0414\u0443\u0448_\u0421\u0435\u0448_\u0427\u043E\u0440_\u041F\u0430\u0439_\u0416\u0443\u043C_\u0428\u0430\u043D".split("_"), weekdaysMin: "\u042F\u043A_\u0414\u0443_\u0421\u0435_\u0427\u043E_\u041F\u0430_\u0416\u0443_\u0428\u0430".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[\u0411\u0443\u0433\u0443\u043D \u0441\u043E\u0430\u0442] LT [\u0434\u0430]", nextDay: "[\u042D\u0440\u0442\u0430\u0433\u0430] LT [\u0434\u0430]", nextWeek: "dddd [\u043A\u0443\u043D\u0438 \u0441\u043E\u0430\u0442] LT [\u0434\u0430]", lastDay: "[\u041A\u0435\u0447\u0430 \u0441\u043E\u0430\u0442] LT [\u0434\u0430]", lastWeek: "[\u0423\u0442\u0433\u0430\u043D] dddd [\u043A\u0443\u043D\u0438 \u0441\u043E\u0430\u0442] LT [\u0434\u0430]", sameElse: "L" }, relativeTime: { future: "\u042F\u043A\u0438\u043D %s \u0438\u0447\u0438\u0434\u0430", past: "\u0411\u0438\u0440 \u043D\u0435\u0447\u0430 %s \u043E\u043B\u0434\u0438\u043D", s: "\u0444\u0443\u0440\u0441\u0430\u0442", ss: "%d \u0444\u0443\u0440\u0441\u0430\u0442", m: "\u0431\u0438\u0440 \u0434\u0430\u043A\u0438\u043A\u0430", mm: "%d \u0434\u0430\u043A\u0438\u043A\u0430", h: "\u0431\u0438\u0440 \u0441\u043E\u0430\u0442", hh: "%d \u0441\u043E\u0430\u0442", d: "\u0431\u0438\u0440 \u043A\u0443\u043D", dd: "%d \u043A\u0443\u043D", M: "\u0431\u0438\u0440 \u043E\u0439", MM: "%d \u043E\u0439", y: "\u0431\u0438\u0440 \u0439\u0438\u043B", yy: "%d \u0439\u0438\u043B" }, week: { dow: 1, doy: 7 } }), l.defineLocale("vi", { months: "th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), monthsParseExact: !0, weekdays: "ch\u1EE7 nh\u1EADt_th\u1EE9 hai_th\u1EE9 ba_th\u1EE9 t\u01B0_th\u1EE9 n\u0103m_th\u1EE9 s\xE1u_th\u1EE9 b\u1EA3y".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysParseExact: !0, meridiemParse: /sa|ch/i, isPM: function isPM(e) {
      return (/^ch$/i.test(e)
      );
    }, meridiem: function meridiem(e, a, t) {
      return e < 12 ? t ? "sa" : "SA" : t ? "ch" : "CH";
    }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [n\u0103m] YYYY", LLL: "D MMMM [n\u0103m] YYYY HH:mm", LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[H\xf4m nay l\xfac] LT", nextDay: "[Ng\xe0y mai l\xfac] LT", nextWeek: "dddd [tu\u1EA7n t\u1EDBi l\xFAc] LT", lastDay: "[H\xf4m qua l\xfac] LT", lastWeek: "dddd [tu\u1EA7n r\u1ED3i l\xFAc] LT", sameElse: "L" }, relativeTime: { future: "%s t\u1EDBi", past: "%s tr\u01B0\u1EDBc", s: "v\xe0i gi\xe2y", ss: "%d gi\xe2y", m: "m\u1ED9t ph\xFAt", mm: "%d ph\xfat", h: "m\u1ED9t gi\u1EDD", hh: "%d gi\u1EDD", d: "m\u1ED9t ng\xE0y", dd: "%d ng\xe0y", M: "m\u1ED9t th\xE1ng", MM: "%d th\xe1ng", y: "m\u1ED9t n\u0103m", yy: "%d n\u0103m" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function ordinal(e) {
      return e;
    }, week: { dow: 1, doy: 4 } }), l.defineLocale("x-pseudo", { months: "J~\xe1\xf1\xfa\xe1~r\xfd_F~\xe9br\xfa~\xe1r\xfd_~M\xe1rc~h_\xc1p~r\xedl_~M\xe1\xfd_~J\xfa\xf1\xe9~_J\xfal~\xfd_\xc1\xfa~g\xfast~_S\xe9p~t\xe9mb~\xe9r_\xd3~ct\xf3b~\xe9r_\xd1~\xf3v\xe9m~b\xe9r_~D\xe9c\xe9~mb\xe9r".split("_"), monthsShort: "J~\xe1\xf1_~F\xe9b_~M\xe1r_~\xc1pr_~M\xe1\xfd_~J\xfa\xf1_~J\xfal_~\xc1\xfag_~S\xe9p_~\xd3ct_~\xd1\xf3v_~D\xe9c".split("_"), monthsParseExact: !0, weekdays: "S~\xfa\xf1d\xe1~\xfd_M\xf3~\xf1d\xe1\xfd~_T\xfa\xe9~sd\xe1\xfd~_W\xe9d~\xf1\xe9sd~\xe1\xfd_T~h\xfars~d\xe1\xfd_~Fr\xedd~\xe1\xfd_S~\xe1t\xfar~d\xe1\xfd".split("_"), weekdaysShort: "S~\xfa\xf1_~M\xf3\xf1_~T\xfa\xe9_~W\xe9d_~Th\xfa_~Fr\xed_~S\xe1t".split("_"), weekdaysMin: "S~\xfa_M\xf3~_T\xfa_~W\xe9_T~h_Fr~_S\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[T~\xf3d\xe1~\xfd \xe1t] LT", nextDay: "[T~\xf3m\xf3~rr\xf3~w \xe1t] LT", nextWeek: "dddd [\xe1t] LT", lastDay: "[\xdd~\xe9st~\xe9rd\xe1~\xfd \xe1t] LT", lastWeek: "[L~\xe1st] dddd [\xe1t] LT", sameElse: "L" }, relativeTime: { future: "\xed~\xf1 %s", past: "%s \xe1~g\xf3", s: "\xe1 ~f\xe9w ~s\xe9c\xf3~\xf1ds", ss: "%d s~\xe9c\xf3\xf1~ds", m: "\xe1 ~m\xed\xf1~\xfat\xe9", mm: "%d m~\xed\xf1\xfa~t\xe9s", h: "\xe1~\xf1 h\xf3~\xfar", hh: "%d h~\xf3\xfars", d: "\xe1 ~d\xe1\xfd", dd: "%d d~\xe1\xfds", M: "\xe1 ~m\xf3\xf1~th", MM: "%d m~\xf3\xf1t~hs", y: "\xe1 ~\xfd\xe9\xe1r", yy: "%d \xfd~\xe9\xe1rs" }, dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(e) {
      var a = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th");
    }, week: { dow: 1, doy: 4 } }), l.defineLocale("yo", { months: "S\u1EB9\u0301r\u1EB9\u0301_E\u0300re\u0300le\u0300_\u1EB8r\u1EB9\u0300na\u0300_I\u0300gbe\u0301_E\u0300bibi_O\u0300ku\u0300du_Ag\u1EB9mo_O\u0300gu\u0301n_Owewe_\u1ECC\u0300wa\u0300ra\u0300_Be\u0301lu\u0301_\u1ECC\u0300p\u1EB9\u0300\u0300".split("_"), monthsShort: "S\u1EB9\u0301r_E\u0300rl_\u1EB8rn_I\u0300gb_E\u0300bi_O\u0300ku\u0300_Ag\u1EB9_O\u0300gu\u0301_Owe_\u1ECC\u0300wa\u0300_Be\u0301l_\u1ECC\u0300p\u1EB9\u0300\u0300".split("_"), weekdays: "A\u0300i\u0300ku\u0301_Aje\u0301_I\u0300s\u1EB9\u0301gun_\u1ECCj\u1ECD\u0301ru\u0301_\u1ECCj\u1ECD\u0301b\u1ECD_\u1EB8ti\u0300_A\u0300ba\u0301m\u1EB9\u0301ta".split("_"), weekdaysShort: "A\u0300i\u0300k_Aje\u0301_I\u0300s\u1EB9\u0301_\u1ECCjr_\u1ECCjb_\u1EB8ti\u0300_A\u0300ba\u0301".split("_"), weekdaysMin: "A\u0300i\u0300_Aj_I\u0300s_\u1ECCr_\u1ECCb_\u1EB8t_A\u0300b".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[O\u0300ni\u0300 ni] LT", nextDay: "[\u1ECC\u0300la ni] LT", nextWeek: "dddd [\u1ECCs\u1EB9\u0300 to\u0301n'b\u1ECD] [ni] LT", lastDay: "[A\u0300na ni] LT", lastWeek: "dddd [\u1ECCs\u1EB9\u0300 to\u0301l\u1ECD\u0301] [ni] LT", sameElse: "L" }, relativeTime: { future: "ni\u0301 %s", past: "%s k\u1ECDja\u0301", s: "i\u0300s\u1EB9ju\u0301 aaya\u0301 die", ss: "aaya\u0301 %d", m: "i\u0300s\u1EB9ju\u0301 kan", mm: "i\u0300s\u1EB9ju\u0301 %d", h: "wa\u0301kati kan", hh: "wa\u0301kati %d", d: "\u1ECDj\u1ECD\u0301 kan", dd: "\u1ECDj\u1ECD\u0301 %d", M: "osu\u0300 kan", MM: "osu\u0300 %d", y: "\u1ECDdu\u0301n kan", yy: "\u1ECDdu\u0301n %d" }, dayOfMonthOrdinalParse: /\u1ecdj\u1ecd\u0301\s\d{1,2}/, ordinal: "\u1ECDj\u1ECD\u0301 %d", week: { dow: 1, doy: 4 } }), l.defineLocale("zh-cn", { months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"), weekdaysShort: "\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"), weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206", LLLL: "YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206", l: "YYYY/M/D", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm" }, meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u51CC\u6668" === a || "\u65E9\u4E0A" === a || "\u4E0A\u5348" === a ? e : "\u4E0B\u5348" === a || "\u665A\u4E0A" === a ? e + 12 : 11 <= e ? e : e + 12;
    }, meridiem: function meridiem(e, a, t) {
      var s = 100 * e + a;return s < 600 ? "\u51CC\u6668" : s < 900 ? "\u65E9\u4E0A" : s < 1130 ? "\u4E0A\u5348" : s < 1230 ? "\u4E2D\u5348" : s < 1800 ? "\u4E0B\u5348" : "\u665A\u4E0A";
    }, calendar: { sameDay: "[\u4ECA\u5929]LT", nextDay: "[\u660E\u5929]LT", nextWeek: "[\u4E0B]ddddLT", lastDay: "[\u6628\u5929]LT", lastWeek: "[\u4E0A]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u5468)/, ordinal: function ordinal(e, a) {
      switch (a) {case "d":case "D":case "DDD":
          return e + "\u65E5";case "M":
          return e + "\u6708";case "w":case "W":
          return e + "\u5468";default:
          return e;}
    }, relativeTime: { future: "%s\u5185", past: "%s\u524D", s: "\u51E0\u79D2", ss: "%d \u79D2", m: "1 \u5206\u949F", mm: "%d \u5206\u949F", h: "1 \u5C0F\u65F6", hh: "%d \u5C0F\u65F6", d: "1 \u5929", dd: "%d \u5929", M: "1 \u4E2A\u6708", MM: "%d \u4E2A\u6708", y: "1 \u5E74", yy: "%d \u5E74" }, week: { dow: 1, doy: 4 } }), l.defineLocale("zh-hk", { months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"), weekdaysShort: "\u9031\u65E5_\u9031\u4E00_\u9031\u4E8C_\u9031\u4E09_\u9031\u56DB_\u9031\u4E94_\u9031\u516D".split("_"), weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm", LLLL: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm", l: "YYYY/M/D", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm" }, meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u51CC\u6668" === a || "\u65E9\u4E0A" === a || "\u4E0A\u5348" === a ? e : "\u4E2D\u5348" === a ? 11 <= e ? e : e + 12 : "\u4E0B\u5348" === a || "\u665A\u4E0A" === a ? e + 12 : void 0;
    }, meridiem: function meridiem(e, a, t) {
      var s = 100 * e + a;return s < 600 ? "\u51CC\u6668" : s < 900 ? "\u65E9\u4E0A" : s < 1130 ? "\u4E0A\u5348" : s < 1230 ? "\u4E2D\u5348" : s < 1800 ? "\u4E0B\u5348" : "\u665A\u4E0A";
    }, calendar: { sameDay: "[\u4ECA\u5929]LT", nextDay: "[\u660E\u5929]LT", nextWeek: "[\u4E0B]ddddLT", lastDay: "[\u6628\u5929]LT", lastWeek: "[\u4E0A]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/, ordinal: function ordinal(e, a) {
      switch (a) {case "d":case "D":case "DDD":
          return e + "\u65E5";case "M":
          return e + "\u6708";case "w":case "W":
          return e + "\u9031";default:
          return e;}
    }, relativeTime: { future: "%s\u5167", past: "%s\u524D", s: "\u5E7E\u79D2", ss: "%d \u79D2", m: "1 \u5206\u9418", mm: "%d \u5206\u9418", h: "1 \u5C0F\u6642", hh: "%d \u5C0F\u6642", d: "1 \u5929", dd: "%d \u5929", M: "1 \u500B\u6708", MM: "%d \u500B\u6708", y: "1 \u5E74", yy: "%d \u5E74" } }), l.defineLocale("zh-tw", { months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"), weekdaysShort: "\u9031\u65E5_\u9031\u4E00_\u9031\u4E8C_\u9031\u4E09_\u9031\u56DB_\u9031\u4E94_\u9031\u516D".split("_"), weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm", LLLL: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm", l: "YYYY/M/D", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm" }, meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/, meridiemHour: function meridiemHour(e, a) {
      return 12 === e && (e = 0), "\u51CC\u6668" === a || "\u65E9\u4E0A" === a || "\u4E0A\u5348" === a ? e : "\u4E2D\u5348" === a ? 11 <= e ? e : e + 12 : "\u4E0B\u5348" === a || "\u665A\u4E0A" === a ? e + 12 : void 0;
    }, meridiem: function meridiem(e, a, t) {
      var s = 100 * e + a;return s < 600 ? "\u51CC\u6668" : s < 900 ? "\u65E9\u4E0A" : s < 1130 ? "\u4E0A\u5348" : s < 1230 ? "\u4E2D\u5348" : s < 1800 ? "\u4E0B\u5348" : "\u665A\u4E0A";
    }, calendar: { sameDay: "[\u4ECA\u5929] LT", nextDay: "[\u660E\u5929] LT", nextWeek: "[\u4E0B]dddd LT", lastDay: "[\u6628\u5929] LT", lastWeek: "[\u4E0A]dddd LT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/, ordinal: function ordinal(e, a) {
      switch (a) {case "d":case "D":case "DDD":
          return e + "\u65E5";case "M":
          return e + "\u6708";case "w":case "W":
          return e + "\u9031";default:
          return e;}
    }, relativeTime: { future: "%s\u5167", past: "%s\u524D", s: "\u5E7E\u79D2", ss: "%d \u79D2", m: "1 \u5206\u9418", mm: "%d \u5206\u9418", h: "1 \u5C0F\u6642", hh: "%d \u5C0F\u6642", d: "1 \u5929", dd: "%d \u5929", M: "1 \u500B\u6708", MM: "%d \u500B\u6708", y: "1 \u5E74", yy: "%d \u5E74" } }), l.locale("en"), l;
});
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e(require("moment")) : "function" == typeof define && define.amd ? define("moment-range", ["moment"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports["moment-range"] = e(require("moment")) : t["moment-range"] = e(t.moment);
}(this, function (t) {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;var o = n[r] = { i: r, l: !1, exports: {} };return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
    }var n = {};return e.m = t, e.c = n, e.i = function (t) {
      return t;
    }, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r });
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return e.d(n, "a", n), n;
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "", e(e.s = 3);
  }([function (t, e, n) {
    "use strict";
    var r = n(5)();t.exports = function (t) {
      return t !== r && null !== t;
    };
  }, function (t, e, n) {
    "use strict";
    t.exports = n(18)() ? Symbol : n(20);
  }, function (e, n) {
    e.exports = t;
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function o(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
    }function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }function u(t) {
      return t.range = function (e, n) {
        var r = this;return "string" == typeof e && y.hasOwnProperty(e) ? new h(t(r).startOf(e), t(r).endOf(e)) : new h(e, n);
      }, t.rangeFromInterval = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t();if (t.isMoment(r) || (r = t(r)), !r.isValid()) throw new Error("Invalid date.");var o = r.clone().add(n, e),
            i = [];return i.push(t.min(r, o)), i.push(t.max(r, o)), new h(i);
      }, t.rangeFromISOString = function (e) {
        var n = a(e),
            r = t.parseZone(n[0]),
            o = t.parseZone(n[1]);return new h(r, o);
      }, t.parseZoneRange = t.rangeFromISOString, t.fn.range = t.range, t.range.constructor = h, t.isRange = function (t) {
        return t instanceof h;
      }, t.fn.within = function (t) {
        return t.contains(this.toDate());
      }, t;
    }function a(t) {
      return t.split("/");
    }Object.defineProperty(e, "__esModule", { value: !0 }), e.DateRange = void 0;var s = function () {
      function t(t, e) {
        var n = [],
            r = !0,
            o = !1,
            i = void 0;try {
          for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done) && (n.push(u.value), !e || n.length !== e); r = !0) {}
        } catch (t) {
          o = !0, i = t;
        } finally {
          try {
            !r && a.return && a.return();
          } finally {
            if (o) throw i;
          }
        }return n;
      }return function (e, n) {
        if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return t(e, n);throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        c = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    },
        f = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }();e.extendMoment = u;var l = n(2),
        v = r(l),
        d = n(1),
        p = r(d),
        y = { year: !0, quarter: !0, month: !0, week: !0, day: !0, hour: !0, minute: !0, second: !0 },
        h = e.DateRange = function () {
      function t(e, n) {
        i(this, t);var r = e,
            o = n;if (1 === arguments.length || void 0 === n) if ("object" === (void 0 === e ? "undefined" : c(e)) && 2 === e.length) {
          var u = s(e, 2);r = u[0], o = u[1];
        } else if ("string" == typeof e) {
          var f = a(e),
              l = s(f, 2);r = l[0], o = l[1];
        }this.start = r || 0 === r ? (0, v.default)(r) : (0, v.default)(-864e13), this.end = o || 0 === o ? (0, v.default)(o) : (0, v.default)(864e13);
      }return f(t, [{ key: "adjacent", value: function value(t) {
          var e = this.start.isSame(t.end),
              n = this.end.isSame(t.start);return e && t.start.valueOf() <= this.start.valueOf() || n && t.end.valueOf() >= this.end.valueOf();
        } }, { key: "add", value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { adjacent: !1 };return this.overlaps(t, e) ? new this.constructor(v.default.min(this.start, t.start), v.default.max(this.end, t.end)) : null;
        } }, { key: "by", value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { excludeEnd: !1, step: 1 },
              n = this;return o({}, p.default.iterator, function () {
            var r = e.step || 1,
                o = Math.abs(n.start.diff(n.end, t)) / r,
                i = e.excludeEnd || !1,
                u = 0;return e.hasOwnProperty("exclusive") && (i = e.exclusive), { next: function next() {
                var e = n.start.clone().add(u * r, t),
                    a = i ? !(u < o) : !(u <= o);return u++, { done: a, value: a ? void 0 : e };
              } };
          });
        } }, { key: "byRange", value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { excludeEnd: !1, step: 1 },
              n = this,
              r = e.step || 1,
              i = this.valueOf() / t.valueOf() / r,
              u = Math.floor(i),
              a = e.excludeEnd || !1,
              s = 0;return e.hasOwnProperty("exclusive") && (a = e.exclusive), o({}, p.default.iterator, function () {
            return u === 1 / 0 ? { done: !0 } : { next: function next() {
                var e = (0, v.default)(n.start.valueOf() + t.valueOf() * s * r),
                    o = u === i && a ? !(s < u) : !(s <= u);return s++, { done: o, value: o ? void 0 : e };
              } };
          });
        } }, { key: "center", value: function value() {
          var t = this.start.valueOf() + this.diff() / 2;return (0, v.default)(t);
        } }, { key: "clone", value: function value() {
          return new this.constructor(this.start.clone(), this.end.clone());
        } }, { key: "contains", value: function value(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { excludeStart: !1, excludeEnd: !1 },
              r = this.start.valueOf(),
              o = this.end.valueOf(),
              i = e.valueOf(),
              u = e.valueOf(),
              a = n.excludeStart || !1,
              s = n.excludeEnd || !1;n.hasOwnProperty("exclusive") && (a = s = n.exclusive), e instanceof t && (i = e.start.valueOf(), u = e.end.valueOf());var c = r < i || r <= i && !a,
              f = o > u || o >= u && !s;return c && f;
        } }, { key: "diff", value: function value(t, e) {
          return this.end.diff(this.start, t, e);
        } }, { key: "duration", value: function value(t, e) {
          return this.diff(t, e);
        } }, { key: "intersect", value: function value(t) {
          var e = this.start.valueOf(),
              n = this.end.valueOf(),
              r = t.start.valueOf(),
              o = t.end.valueOf(),
              i = e == n,
              u = r == o;if (i) {
            var a = e;if (a == r || a == o) return null;if (a > r && a < o) return this.clone();
          } else if (u) {
            var s = r;if (s == e || s == n) return null;if (s > e && s < n) return new this.constructor(s, s);
          }return e <= r && r < n && n < o ? new this.constructor(r, n) : r < e && e < o && o <= n ? new this.constructor(e, o) : r < e && e <= n && n < o ? this.clone() : e <= r && r <= o && o <= n ? new this.constructor(r, o) : null;
        } }, { key: "isEqual", value: function value(t) {
          return this.start.isSame(t.start) && this.end.isSame(t.end);
        } }, { key: "isSame", value: function value(t) {
          return this.isEqual(t);
        } }, { key: "overlaps", value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { adjacent: !1 },
              n = null !== this.intersect(t);return e.adjacent && !n ? this.adjacent(t) : n;
        } }, { key: "reverseBy", value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { excludeStart: !1, step: 1 },
              n = this;return o({}, p.default.iterator, function () {
            var r = e.step || 1,
                o = Math.abs(n.start.diff(n.end, t)) / r,
                i = e.excludeStart || !1,
                u = 0;return e.hasOwnProperty("exclusive") && (i = e.exclusive), { next: function next() {
                var e = n.end.clone().subtract(u * r, t),
                    a = i ? !(u < o) : !(u <= o);return u++, { done: a, value: a ? void 0 : e };
              } };
          });
        } }, { key: "reverseByRange", value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { excludeStart: !1, step: 1 },
              n = this,
              r = e.step || 1,
              i = this.valueOf() / t.valueOf() / r,
              u = Math.floor(i),
              a = e.excludeStart || !1,
              s = 0;return e.hasOwnProperty("exclusive") && (a = e.exclusive), o({}, p.default.iterator, function () {
            return u === 1 / 0 ? { done: !0 } : { next: function next() {
                var e = (0, v.default)(n.end.valueOf() - t.valueOf() * s * r),
                    o = u === i && a ? !(s < u) : !(s <= u);return s++, { done: o, value: o ? void 0 : e };
              } };
          });
        } }, { key: "snapTo", value: function value(t) {
          var e = this.clone();return e.start.isSame((0, v.default)(-864e13)) || (e.start = e.start.startOf(t)), e.end.isSame((0, v.default)(864e13)) || (e.end = e.end.endOf(t)), e;
        } }, { key: "subtract", value: function value(t) {
          var e = this.start.valueOf(),
              n = this.end.valueOf(),
              r = t.start.valueOf(),
              o = t.end.valueOf();return null === this.intersect(t) ? [this] : r <= e && e < n && n <= o ? [] : r <= e && e < o && o < n ? [new this.constructor(o, n)] : e < r && r < n && n <= o ? [new this.constructor(e, r)] : e < r && r < o && o < n ? [new this.constructor(e, r), new this.constructor(o, n)] : e < r && r < n && o < n ? [new this.constructor(e, r), new this.constructor(r, n)] : [];
        } }, { key: "toDate", value: function value() {
          return [this.start.toDate(), this.end.toDate()];
        } }, { key: "toString", value: function value() {
          return this.start.format() + "/" + this.end.format();
        } }, { key: "valueOf", value: function value() {
          return this.end.valueOf() - this.start.valueOf();
        } }]), t;
    }();
  }, function (t, e, n) {
    "use strict";
    var r,
        o = n(6),
        i = n(13),
        u = n(9),
        a = n(15);r = t.exports = function (t, e) {
      var n, r, u, s, c;return arguments.length < 2 || "string" != typeof t ? (s = e, e = t, t = null) : s = arguments[2], null == t ? (n = u = !0, r = !1) : (n = a.call(t, "c"), r = a.call(t, "e"), u = a.call(t, "w")), c = { value: e, configurable: n, enumerable: r, writable: u }, s ? o(i(s), c) : c;
    }, r.gs = function (t, e, n) {
      var r, s, c, f;return "string" != typeof t ? (c = n, n = e, e = t, t = null) : c = arguments[3], null == e ? e = void 0 : u(e) ? null == n ? n = void 0 : u(n) || (c = n, n = void 0) : (c = e, e = n = void 0), null == t ? (r = !0, s = !1) : (r = a.call(t, "c"), s = a.call(t, "e")), f = { get: e, set: n, configurable: r, enumerable: s }, c ? o(i(c), f) : f;
    };
  }, function (t, e, n) {
    "use strict";
    t.exports = function () {};
  }, function (t, e, n) {
    "use strict";
    t.exports = n(7)() ? Object.assign : n(8);
  }, function (t, e, n) {
    "use strict";
    t.exports = function () {
      var t,
          e = Object.assign;return "function" == typeof e && (t = { foo: "raz" }, e(t, { bar: "dwa" }, { trzy: "trzy" }), t.foo + t.bar + t.trzy === "razdwatrzy");
    };
  }, function (t, e, n) {
    "use strict";
    var r = n(10),
        o = n(14),
        i = Math.max;t.exports = function (t, e) {
      var n,
          u,
          a,
          s = i(arguments.length, 2);for (t = Object(o(t)), a = function a(r) {
        try {
          t[r] = e[r];
        } catch (t) {
          n || (n = t);
        }
      }, u = 1; u < s; ++u) {
        e = arguments[u], r(e).forEach(a);
      }if (void 0 !== n) throw n;return t;
    };
  }, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      return "function" == typeof t;
    };
  }, function (t, e, n) {
    "use strict";
    t.exports = n(11)() ? Object.keys : n(12);
  }, function (t, e, n) {
    "use strict";
    t.exports = function () {
      try {
        return Object.keys("primitive"), !0;
      } catch (t) {
        return !1;
      }
    };
  }, function (t, e, n) {
    "use strict";
    var r = n(0),
        o = Object.keys;t.exports = function (t) {
      return o(r(t) ? Object(t) : t);
    };
  }, function (t, e, n) {
    "use strict";
    var r = n(0),
        o = Array.prototype.forEach,
        i = Object.create,
        u = function u(t, e) {
      var n;for (n in t) {
        e[n] = t[n];
      }
    };t.exports = function (t) {
      var e = i(null);return o.call(arguments, function (t) {
        r(t) && u(Object(t), e);
      }), e;
    };
  }, function (t, e, n) {
    "use strict";
    var r = n(0);t.exports = function (t) {
      if (!r(t)) throw new TypeError("Cannot use null or undefined");return t;
    };
  }, function (t, e, n) {
    "use strict";
    t.exports = n(16)() ? String.prototype.contains : n(17);
  }, function (t, e, n) {
    "use strict";
    var r = "razdwatrzy";t.exports = function () {
      return "function" == typeof r.contains && !0 === r.contains("dwa") && !1 === r.contains("foo");
    };
  }, function (t, e, n) {
    "use strict";
    var r = String.prototype.indexOf;t.exports = function (t) {
      return r.call(this, t, arguments[1]) > -1;
    };
  }, function (t, e, n) {
    "use strict";
    var r = { object: !0, symbol: !0 };t.exports = function () {
      var t;if ("function" != typeof Symbol) return !1;t = Symbol("test symbol");try {
        String(t);
      } catch (t) {
        return !1;
      }return !!r[_typeof(Symbol.iterator)] && !!r[_typeof(Symbol.toPrimitive)] && !!r[_typeof(Symbol.toStringTag)];
    };
  }, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      return !!t && ("symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || !!t.constructor && "Symbol" === t.constructor.name && "Symbol" === t[t.constructor.toStringTag]);
    };
  }, function (t, e, n) {
    "use strict";
    var r,
        o,
        _i,
        u,
        a = n(4),
        s = n(21),
        c = Object.create,
        f = Object.defineProperties,
        l = Object.defineProperty,
        v = Object.prototype,
        d = c(null);if ("function" == typeof Symbol) {
      r = Symbol;try {
        String(r()), u = !0;
      } catch (t) {}
    }var p = function () {
      var t = c(null);return function (e) {
        for (var n, r, o = 0; t[e + (o || "")];) {
          ++o;
        }return e += o || "", t[e] = !0, n = "@@" + e, l(v, n, a.gs(null, function (t) {
          r || (r = !0, l(this, n, a(t)), r = !1);
        })), n;
      };
    }();_i = function i(t) {
      if (this instanceof _i) throw new TypeError("Symbol is not a constructor");return o(t);
    }, t.exports = o = function t(e) {
      var n;if (this instanceof t) throw new TypeError("Symbol is not a constructor");return u ? r(e) : (n = c(_i.prototype), e = void 0 === e ? "" : String(e), f(n, { __description__: a("", e), __name__: a("", p(e)) }));
    }, f(o, { for: a(function (t) {
        return d[t] ? d[t] : d[t] = o(String(t));
      }), keyFor: a(function (t) {
        var e;s(t);for (e in d) {
          if (d[e] === t) return e;
        }
      }), hasInstance: a("", r && r.hasInstance || o("hasInstance")), isConcatSpreadable: a("", r && r.isConcatSpreadable || o("isConcatSpreadable")), iterator: a("", r && r.iterator || o("iterator")), match: a("", r && r.match || o("match")), replace: a("", r && r.replace || o("replace")), search: a("", r && r.search || o("search")), species: a("", r && r.species || o("species")), split: a("", r && r.split || o("split")), toPrimitive: a("", r && r.toPrimitive || o("toPrimitive")), toStringTag: a("", r && r.toStringTag || o("toStringTag")), unscopables: a("", r && r.unscopables || o("unscopables")) }), f(_i.prototype, { constructor: a(o), toString: a("", function () {
        return this.__name__;
      }) }), f(o.prototype, { toString: a(function () {
        return "Symbol (" + s(this).__description__ + ")";
      }), valueOf: a(function () {
        return s(this);
      }) }), l(o.prototype, o.toPrimitive, a("", function () {
      var t = s(this);return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : t.toString();
    })), l(o.prototype, o.toStringTag, a("c", "Symbol")), l(_i.prototype, o.toStringTag, a("c", o.prototype[o.toStringTag])), l(_i.prototype, o.toPrimitive, a("c", o.prototype[o.toPrimitive]));
  }, function (t, e, n) {
    "use strict";
    var r = n(19);t.exports = function (t) {
      if (!r(t)) throw new TypeError(t + " is not a symbol");return t;
    };
  }]);
});
//# sourceMappingURL=moment-range.js.map
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  w['moment-range'].extendMoment(moment);
  // Create a template element
  var datepicker = doc.createElement('template'),
      calendar = doc.createElement('template'),
      row = doc.createElement('template'),
      dateTemplate = doc.createElement('template'),
      calendarIcon = 'data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 18 18\' width=\'18\' height=\'18\' fill=\'%236a7070\'%3e%3cpath d=\'M4 3L5 3 5 1 4 1 4 3zM13 3L14 3 14 1 13 1 13 3zM18 5L18 1.5C18 1.224 17.776 1 17.5 1L15 1 15 .5C15 .224 14.776 0 14.5 0L12.5 0C12.224 0 12 .224 12 .5L12 1 6 1 6 .5C6 .224 5.776 0 5.5 0L3.5 0C3.224 0 3 .224 3 .5L3 1 .5 1C.224 1 0 1.224 0 1.5L0 5 18 5zM14.0762 15L10.8262 15C10.5502 15 10.3262 14.776 10.3262 14.5 10.3262 14.224 10.5502 14 10.8262 14L12.0002 14 12.0002 9.707 11.3752 10.331C11.1802 10.526 10.8632 10.526 10.6682 10.331 10.4722 10.136 10.4722 9.819 10.6682 9.624L12.1462 8.146C12.2892 8.003 12.5062 7.96 12.6912 8.038 12.8782 8.116 13.0002 8.298 13.0002 8.5L13.0002 14 14.0762 14C14.3522 14 14.5762 14.224 14.5762 14.5 14.5762 14.776 14.3522 15 14.0762 15L14.0762 15zM9.0002 14.5C9.0002 14.776 8.7762 15 8.5002 15L4.5002 15C4.2232 15 4.0002 14.776 4.0002 14.5L4.0002 13.5C4.0002 13.224 4.2232 13 4.5002 13 4.7762 13 5.0002 13.224 5.0002 13.5L5.0002 14 8.0002 14 8.0002 12 5.6992 12C5.4232 12 5.1992 11.776 5.1992 11.5 5.1992 11.224 5.4232 11 5.6992 11L8.0002 11 8.0002 9 5.0002 9 5.0002 9.5C5.0002 9.776 4.7762 10 4.5002 10 4.2232 10 4.0002 9.776 4.0002 9.5L4.0002 8.5C4.0002 8.224 4.2232 8 4.5002 8L8.5002 8C8.7762 8 9.0002 8.224 9.0002 8.5L9.0002 14.5zM.0002 6L.0002 17.5C.0002 17.776.2232 18 .5002 18L17.5002 18C17.7762 18 18.0002 17.776 18.0002 17.5L18.0002 6 .0002 6z\'/%3e%3c/svg%3e',
      prevArrowIcon = 'data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 18 18\' width=\'18\' height=\'18\' fill=\'%236a7070\'%3e%3cpath d=\'M13.749,17.6606035 C14.112,17.2486035 14.076,16.6116035 13.662,16.2436035 L5.509,8.9996035 L13.662,1.7566035 C14.077,1.3896035 14.113,0.752603504 13.749,0.339603504 C13.383,-0.0763964961 12.751,-0.115396496 12.338,0.252603504 L3.338,8.2476035 C3.123,8.4376035 3,8.7126035 3,8.9996035 C3,9.2876035 3.123,9.5616035 3.338,9.7526035 L12.338,17.7476035 C12.751,18.1156035 13.383,18.0766035 13.749,17.6606035\'%3e%3c/path%3e%3c/svg%3e',
      nextArrowIcon = 'data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 18 18\' width=\'18\' height=\'18\' fill=\'%236a7070\'%3e%3cpath d=\'M4.2506,17.6606035 C3.8876,17.2486035 3.9236,16.6116035 4.3376,16.2436035 L12.4906,8.9996035 L4.3376,1.7566035 C3.9226,1.3896035 3.8866,0.752603504 4.2506,0.339603504 C4.6166,-0.0763964961 5.2486,-0.115396496 5.6616,0.252603504 L14.6616,8.2476035 C14.8766,8.4376035 14.9996,8.7126035 14.9996,8.9996035 C14.9996,9.2876035 14.8766,9.5616035 14.6616,9.7526035 L5.6616,17.7476035 C5.2486,18.1156035 4.6166,18.0766035 4.2506,17.6606035\'%3e%3c/path%3e%3c/svg%3e',
      warningIcon = '   \n  <svg     \n    aria-hidden="true"\n    focusable="false" \n    style="width:18px;height:18px;fill:currentColor"  \n  >  \n    <path d="M9.99994044,10.5 C9.99994044,10.776 9.77594044,11 9.49994044,11 L8.49994044,11 C8.22394044,11 7.99994044,10.776 7.99994044,10.5 L7.99994044,7.5 C7.99994044,7.224 8.22394044,7 8.49994044,7 L9.49994044,7 C9.77594044,7 9.99994044,7.224 9.99994044,7.5 L9.99994044,10.5 Z M9.99994044,13.5 C9.99994044,13.776 9.77594044,14 9.49994044,14 L8.49994044,14 C8.22394044,14 7.99994044,13.776 7.99994044,13.5 L7.99994044,12.5 C7.99994044,12.224 8.22394044,12 8.49994044,12 L9.49994044,12 C9.77594044,12 9.99994044,12.224 9.99994044,12.5 L9.99994044,13.5 Z M15.9460591,15.275 L9.44500379,2.276 C9.26100222,1.908 8.73899778,1.908 8.55499621,2.276 L2.05394089,15.275 C1.88693947,15.607 2.12794152,16 2.49894468,16 L15.5010553,16 C15.8720585,16 16.1130605,15.607 15.9460591,15.275 Z"/>\n</svg>';

  datepicker.innerHTML = ' \n    <style>\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:Open Sans,Calibri,Tahoma,sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}.pe-base-fontsize{font-size:.875rem}.pe-fontstack{font-family:Open Sans,Calibri,Tahoma,sans-serif}.pe-copy{font-size:1rem;line-height:1.57143rem;color:#252525}.pe-copy--secondary,.pe-label--secondary{color:#6a7070}.pe-copy--small{font-size:.85714rem;line-height:1.42857rem;color:#252525}.pe-copy--large,.pe-heading-level6,h6,header h5+.subtitle{font-size:1.14286rem;line-height:1.71429rem;color:#252525}.pe-paragraph,p{font-size:1rem;line-height:1.57143rem;margin-bottom:.85714rem;margin-top:0;color:#252525}.pe-paragraph--last{margin-bottom:0;color:#252525}.pe-lead{font-size:1.42857rem;line-height:2rem}.pe-lead,.pe-page-title{font-weight:lighter;color:#252525}.pe-page-title{font-size:2.71429rem;line-height:3.71429rem}.pe-heading-level1,.pe-page-title--small,h1{font-size:2rem;line-height:2.71429rem;font-weight:lighter;color:#252525}.pe-heading-level3,.pe-heading-level4,.pe-title,h3,h4,header h2+.subtitle,header h3+.subtitle{font-size:1.42857rem;line-height:1.85714rem;font-weight:400;color:#252525}.pe-heading-level5,.pe-title--small,h5,header h4+.subtitle{font-size:1.28571rem;line-height:1.57143rem;font-weight:400;color:#252525}.pe-heading-level2,.pe-title--large,h2,header h1+.subtitle{font-size:1.71429rem;line-height:2rem;font-weight:400;color:#252525}.pe-page-title--secondary,.pe-title--secondary{color:#6a7070}.pe-label{font-size:1rem;line-height:1.28571rem}.pe-label.pe-label--inverse{color:#fff}.pe-label--secondary.pe-label--inverse{color:#f5f5f5}.pe-label--small{font-size:.85714rem;line-height:1.14286rem}.pe-label--large{font-size:1.14286rem;line-height:1.42857rem}.pe-bold,.pe-label--bold{font-weight:600}.pe-list{margin:12px 0;padding-left:1.85714rem}.pe-list li{font-size:1rem;line-height:1.57143rem;margin-bottom:.42857rem}.pe-list li>ol,.pe-list li>ul{margin-top:.42857rem}.pe-list.pe-styled-lists--ordered{list-style-type:decimal}.pe-list.pe-styled-lists--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.pe-list.pe-styled-lists--ordered ol ol{list-style-type:lower-roman}.pe-list.pe-styled-lists--unordered{list-style-type:disc}.pe-list.pe-styled-lists--unordered ul{list-style-type:circle;padding-left:1.85714rem}.pe-list.pe-styled-lists--unordered ul ul{list-style-type:square}.pe-list.pe-styled-lists-heading--ordered{list-style-type:decimal;margin-top:0}.pe-list.pe-styled-lists-heading--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.pe-list.pe-styled-lists-heading--ordered ol ol{list-style-type:lower-roman}.pe-list.pe-styled-lists-heading--unordered{list-style-type:disc;margin-top:0}.pe-list.pe-styled-lists-heading--unordered ul{list-style-type:circle;padding-left:1.85714rem}.pe-list.pe-styled-lists-heading--unordered ul ul{list-style-type:square}.pe-list--unstyled{list-style:none;padding-left:0}.pe-list--unstyled ul{padding-left:1.85714rem}.pe-heading-level1,h1{margin-bottom:6px}.pe-heading-level2,h2,header h1+.subtitle{margin-bottom:6px}.pe-heading-level3,h3,header h2+.subtitle{font-weight:700;margin-bottom:6px}.pe-heading-level4,h4,header h3+.subtitle{margin-bottom:6px}.pe-heading-level5,h5,header h4+.subtitle{margin-bottom:6px}.pe-heading-level6,h6,header h5+.subtitle{margin-bottom:6px}*+[class^=pe-heading-level]{margin-top:20px}.pe-code{color:#f5f5f5;font-size:1rem;line-height:1.42857rem;background:#005a70;padding:30px 50px}.pe-code,.pe-code-inline,.pe-kbd{font-family:Monaco,Lucida Console,monospace}.pe-code-inline,.pe-kbd{background:#e9e9e9;padding:0 4px}html{font-size:.875rem}body{font-family:Open Sans,Calibri,Tahoma,sans-serif;color:#252525}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:0}*+h1,*+h2,*+h3,*+h4,*+h5,*+h6{margin-top:20px}h1+h2{margin-top:40px}h2+h3,h3+h4,h4+h5,h5+h6{margin-top:6px}header{margin-bottom:20px}header h1+.subtitle{margin-top:34px}aside h1{font-size:1.25rem}aside h2{font-size:1.1rem}aside h3{font-size:1rem}aside h4,aside h5,aside h6{font-size:.8rem}table{width:100%;max-width:100%;margin-bottom:35px;border-collapse:collapse}table td,table th{padding:8px;line-height:1.42857143;vertical-align:top;text-align:left}table thead th{vertical-align:bottom;border-top:0}a{color:#047a9c;text-decoration:underline}a.active,a:active,a:hover{color:#005a70;text-decoration:none}a:focus{color:#005a70;text-decoration:none;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}abbr,abbr[title]{text-decoration:none}ins:before{content:"+"}ins:after{content:"+"}mark{background:#ffb81c}small{font-size:.85714rem;line-height:1.14286rem}sub,sup{font-size:90%}sub{top:.2rem}sup{top:-.2rem}pre{max-width:100%;overflow-x:auto}code,kbd,pre{font-family:Monaco,Lucida Console,monospace}:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-selectInput--fancy,.pe-selectInput-fancy-disabled,.pe-selectInput-fancy-error,.pe-selectInput-fancy-readonly,.pe-textInput,.pe-textInput--input_error,.pe-textInput--input_readonly{padding:8px 0 10px;font-size:14px;color:#252525;width:100%;border:none;line-height:18px}.pe-textInput{border-bottom:1px;border-bottom-style:solid;border-bottom-color:#6a7070}.pe-textInput::-webkit-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput:-moz-placeholder,.pe-textInput::-moz-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput:-ms-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput:focus{outline:none}.pe-input_underline{background-color:#047a9c;display:block;height:4px;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all .2s ease;transition:all .2s ease;width:100%;margin-top:-3px}input:focus+.pe-input_underline{-webkit-transform:scale(1);transform:scale(1)}.pe-textLabelInput__label,.pe-textLabelInput__label--label-disabled,.pe-textLabelInput__label--label_error,.pe-textLabelInput__label--label_focus{font-size:12px;line-height:16px;display:block}.pe-textLabelInput__label{color:#6a7070}.pe-textLabelInput__label--label_focus{color:#047a9c}.pe-textLabelInput__label--label_error{color:#db0020}.pe-textLabelInput__label--label-disabled{color:#c7c7c7}input:focus+.pe-inputError_underline{-webkit-transform:scale(1);transform:scale(1)}.pe-inputError_underline{background-color:#db0020;display:block;height:4px;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all .2s ease;transition:all .2s ease;width:100%;margin-top:-3px}.pe-textInput--input_error{border-bottom:1px;border-bottom-style:solid;border-bottom-color:#db0020}.pe-textInput--input_error::-webkit-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--input_error:-moz-placeholder,.pe-textInput--input_error::-moz-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--input_error:-ms-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--input_error:focus{outline:none}.pe-input-wrapper{min-height:52px}.pe-textInput--input_readonly{border-bottom:0;background-color:transparent;font-size:14px;color:#252525;-webkit-appearance:none}.pe-textInput--input_readonly::-webkit-input-placeholder{font-size:14px}.pe-textInput--input_readonly:-moz-placeholder,.pe-textInput--input_readonly::-moz-placeholder{font-size:14px}.pe-textInput--input_readonly:-ms-input-placeholder{font-size:14px}.pe-textInput--input_readonly:focus{outline:none}.pe-input_underline-readonly{background-color:#c7c7c7;display:block;height:4px;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all .2s ease;transition:all .2s ease;width:100%;margin-top:-3px}input:focus+.pe-input_underline-readonly{-webkit-transform:scale(1);transform:scale(1)}.pe-textInput-disabled,.pe-textInput:disabled{color:#c7c7c7;font-size:14px;background-color:#fff;border-bottom:4px;border-bottom-style:solid;border-bottom-color:#c7c7c7}.pe-textInput--basic{border:1px solid #c7c7c7;margin-top:6px}.pe-textInput--basic::-webkit-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--basic:-moz-placeholder,.pe-textInput--basic::-moz-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--basic:-ms-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--basic:focus{border:1px solid #047a9c;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-textInput--basic_error{border:1px solid #db0020;margin-top:6px}.pe-textInput--basic_error::-webkit-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--basic_error:-moz-placeholder,.pe-textInput--basic_error::-moz-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--basic_error:-ms-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--basic_error:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-textInput--basic:disabled{background-color:#e9e9e9;margin-top:6px}.pe-textInput--basic_readonly{border:0;margin-top:6px}.pe-textInput--basic_readonly::-webkit-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--basic_readonly:-moz-placeholder,.pe-textInput--basic_readonly::-moz-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--basic_readonly:-ms-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--basic_readonly:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-select-container,.pe-select-container--fancy,.pe-select-container-disabled,.pe-select-container-error,.pe-select-container-fancy-disabled,.pe-select-container-fancy-error,.pe-select-container-fancy-error-focus,.pe-select-container-fancy-focus,.pe-select-container-fancy-readonly,.pe-select-container-focus,.pe-select-container-focus-error,.pe-select-container-readonly{position:relative;display:block;min-width:250px;padding:0}.pe-select-container--fancy svg,.pe-select-container-disabled svg,.pe-select-container-error svg,.pe-select-container-fancy-disabled svg,.pe-select-container-fancy-error-focus svg,.pe-select-container-fancy-error svg,.pe-select-container-fancy-focus svg,.pe-select-container-fancy-readonly svg,.pe-select-container-focus-error svg,.pe-select-container-focus svg,.pe-select-container-readonly svg,.pe-select-container svg{position:absolute;top:5px;bottom:8px;right:14px;pointer-events:none}.pe-select-container--fancy select,.pe-select-container-disabled select,.pe-select-container-error select,.pe-select-container-fancy-disabled select,.pe-select-container-fancy-error-focus select,.pe-select-container-fancy-error select,.pe-select-container-fancy-focus select,.pe-select-container-fancy-readonly select,.pe-select-container-focus-error select,.pe-select-container-focus select,.pe-select-container-readonly select,.pe-select-container select{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;min-height:34px;margin:0;padding:0 14px;outline:none}.pe-select--basic_error,.pe-selectInput--basic{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border:1px solid transparent;padding-top:8px}.pe-select-container,.pe-select-container--fancy,.pe-select-container-disabled,.pe-select-container-error,.pe-select-container-fancy-disabled,.pe-select-container-fancy-error,.pe-select-container-fancy-error-focus,.pe-select-container-fancy-focus,.pe-select-container-fancy-readonly,.pe-select-container-focus,.pe-select-container-focus-error,.pe-select-container-readonly,.pe-textInput--basic,.pe-textInput--basic_error,.pe-textInput--basic_readonly{padding:0 14px;height:36px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-radius:3px;font-size:14px;line-height:18px;background-color:#fff;color:#252525}.pe-select-container{border:1px solid #c7c7c7;padding:0;margin-top:6px}.pe-select-container select{padding:0 14px}.pe-select-container select:focus{border:1px solid #047a9c;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-select-container select:focus::-ms-value{background:transparent;color:#222}.pe-select-container select::-ms-expand{opacity:0}.pe-selectInput--basic:-moz-focusring{color:transparent;text-shadow:0 0 0 #000}.pe-select-container-focus{border:1px solid transparent;padding:0;margin-top:6px}.pe-select-container-focus select{padding:.3em .3em .3em 14px}.pe-select-container-focus select:focus{border:1px solid #047a9c;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-select-container-focus select:focus::-ms-value{background:transparent;color:#222}.pe-select-container-focus select:focus::-ms-expand{opacity:0}.pe-select-container-error{border:1px solid #db0020;padding:0;margin-top:6px}.pe-select-container-error select{padding:.3em .3em .3em 14px}.pe-select-container-error select:focus{border:1px solid #db0020;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-select-container-error select:focus::-ms-value{background:transparent;color:#222}.pe-select-container-error select::-ms-expand{opacity:0}.pe-select-container-focus-error{border:1px solid transparent;padding:0;margin-top:6px}.pe-select-container-focus-error select{padding:.3em .3em .3em 14px}.pe-select-container-focus-error select:focus{border:1px solid #db0020;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-select-container-focus-error select:focus::-ms-value{background:transparent;color:#222}.pe-select-container-focus-error select::-ms-expand{opacity:0}.pe-select--basic_error{-webkit-appearance:none}.pe-select--basic_error::-webkit-input-placeholder{font-size:14px;color:#c7c7c7}.pe-select--basic_error:-moz-placeholder,.pe-select--basic_error::-moz-placeholder{font-size:14px;color:#c7c7c7}.pe-select--basic_error:-ms-input-placeholder{font-size:14px;color:#c7c7c7}.pe-select--basic_error:focus{outline:none;-webkit-box-shadow:0 0 4px 0 #db0020;box-shadow:0 0 4px 0 #db0020}.pe-select--basic_error:-moz-focusring{color:transparent;text-shadow:0 0 0 #000}.pe-select-container-disabled{outline:none;padding:0;color:#c7c7c7!important;background-color:#e9e9e9!important;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-top:6px}.pe-select-container-disabled svg{fill:#c7c7c7}.pe-select-container-disabled select{border:1px solid #c7c7c7}.pe-select-container-disabled select:focus{border:1px solid #db0020;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-select-container-disabled select:focus::-ms-value{background:transparent;color:#222}.pe-select-container-disabled select::-ms-expand{opacity:0}.pe-select-container-readonly{padding:0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-top:6px}.pe-select-container-readonly svg{right:8px}.pe-select-container-readonly select{padding:.3em .3em .3em 14px}.pe-select-container-readonly select:focus{border:0;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-select-container-readonly select:focus::-ms-value{background:transparent;color:#222}.pe-select-container-readonly select::-ms-expand{opacity:0}.pe-select-container--fancy{-webkit-appearance:none;-moz-appearance:none;padding:0;border:none}.pe-select-container--fancy svg{right:0;outline:none}.pe-select-container--fancy select{padding:8px 0 10px;outline:none;-webkit-box-shadow:none;box-shadow:none}.pe-select-container--fancy select:focus{outline:none;-webkit-box-shadow:none;box-shadow:none}.pe-select-container--fancy select:focus::-ms-value{background:transparent;color:#222}.pe-select-container--fancy select::-ms-expand{opacity:0}.pe-selectInput--fancy{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;background-color:transparent;padding-top:8px;border-bottom:1px;border-bottom-style:solid;border-bottom-color:#6a7070;border-radius:0}.pe-selectInput--fancy:-moz-focusring{color:transparent;text-shadow:0 0 0 #000}select:focus+.pe-input_underline{-webkit-transform:scale(1);transform:scale(1)}.pe-select-container-fancy-focus{border:none;padding:0}.pe-select-container-fancy-focus svg{right:0}.pe-select-container-fancy-focus select{padding:8px 0 10px;border:none}.pe-select-container-fancy-focus select:focus{outline:none}.pe-select-container-fancy-focus select:focus::-ms-value{background:transparent;color:#222}.pe-select-container-fancy-focus select:focus::-ms-expand{opacity:0}.pe-select-container-fancy-error{background-color:transparent;-webkit-appearance:none;-moz-appearance:none;padding:0}.pe-select-container-fancy-error svg{right:0}.pe-select-container-fancy-error select{padding:8px 0 10px}.pe-select-container-fancy-error select:focus{outline:none;-webkit-box-shadow:none;box-shadow:none}.pe-select-container-fancy-error select:focus::-ms-value{background:transparent;color:#222}.pe-select-container-fancy-error select::-ms-expand{opacity:0}.pe-selectInput-fancy-error{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;padding-top:8px;border-bottom:1px;border-bottom-style:solid;border-bottom-color:#db0020;border-radius:0}.pe-selectInput-fancy-error:-moz-focusring{color:transparent;text-shadow:0 0 0 #000}select:focus+.pe-inputError_underline{-webkit-transform:scale(1);transform:scale(1)}.pe-select-container-fancy-error-focus{border:none;padding:0}.pe-select-container-fancy-error-focus svg{right:0}.pe-select-container-fancy-error-focus select{padding:8px 0 10px}.pe-select-container-fancy-error-focus select:focus{outline:none}.pe-select-container-fancy-error-focus select:focus::-ms-value{background:transparent;color:#222}.pe-select-container-fancy-error-focus select:focus::-ms-expand{opacity:0}.pe-select-container-fancy-disabled{background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0}.pe-select-container-fancy-disabled svg{right:0;fill:#c7c7c7}.pe-select-container-fancy-disabled select{padding:8px 0 10px;color:#c7c7c7;border-bottom:4px;border-bottom-style:solid;border-bottom-color:#c7c7c7}.pe-select-container-fancy-disabled select::-ms-expand{opacity:0}.pe-selectInput-fancy-disabled{padding-top:8px;border:none;border-radius:0}.pe-select-container-fancy-readonly,.pe-selectInput-fancy-disabled{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent}.pe-select-container-fancy-readonly{padding:0}.pe-select-container-fancy-readonly svg{right:0}.pe-select-container-fancy-readonly select{padding:8px 0 10px;-webkit-appearance:none;-moz-appearance:none;appearance:none}.pe-select-container-fancy-readonly select::-ms-expand{opacity:0}.pe-selectInput-fancy-readonly{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;padding-top:8px;border:none;border-radius:0}select:focus+.pe-input_underline-readonly{-webkit-transform:scale(1);transform:scale(1)}.pe-multiLineText,.pe-multiLineText--disabled,.pe-multiLineText--error,.pe-multiLineText--readOnly{border:1px solid #c7c7c7;border-radius:3px;font-size:14px;color:#252525;margin-top:6px;line-height:18px;padding:9px 14px;resize:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.pe-multiLineText--disabled::-webkit-input-placeholder,.pe-multiLineText--error::-webkit-input-placeholder,.pe-multiLineText--readOnly::-webkit-input-placeholder,.pe-multiLineText::-webkit-input-placeholder{font-size:14px;color:#c7c7c7;line-height:18px}.pe-multiLineText--disabled:-moz-placeholder,.pe-multiLineText--disabled::-moz-placeholder,.pe-multiLineText--error:-moz-placeholder,.pe-multiLineText--error::-moz-placeholder,.pe-multiLineText--readOnly:-moz-placeholder,.pe-multiLineText--readOnly::-moz-placeholder,.pe-multiLineText:-moz-placeholder,.pe-multiLineText::-moz-placeholder{font-size:14px;color:#c7c7c7;line-height:18px}.pe-multiLineText--disabled:-ms-input-placeholder,.pe-multiLineText--error:-ms-input-placeholder,.pe-multiLineText--readOnly:-ms-input-placeholder,.pe-multiLineText:-ms-input-placeholder{font-size:14px;color:#c7c7c7;line-height:18px}.pe-multiLineText,.pe-multiLineText--error{background-color:#fff}.pe-multiLineText--error:focus,.pe-multiLineText:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px;border:1px solid #047a9c;resize:both;overflow:auto}.pe-multiLineText--error{background-color:#fff;border:1px solid #db0020}.pe-multiLineText--error:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px;resize:both;overflow:auto;border:1px solid #db0020}.pe-multiLineText--disabled{outline:none;color:#e9e9e9;background-color:#e9e9e9}.pe-multiLineText--readOnly{background-color:#fff;border:none}.pe-multiLineText--readOnly:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-input--error_message,.pe-input--info_message{display:block;padding-top:3px;font-size:12px;line-height:16px;margin-bottom:0}.pe-input--error_message{color:#db0020}.pe-input--info_message{color:#6a7070}.pe-checkbox{position:relative;min-height:16px;margin-bottom:14px}.pe-checkbox:last-child{margin-bottom:0}input[type=checkbox]{opacity:0;position:absolute}input[type=checkbox]~span{left:0;top:0;position:absolute;z-index:0;height:16px;width:16px;border:1px solid #c7c7c7;border-radius:2px}input[type=checkbox]~span svg{opacity:0;height:16px;width:16px}input[type=checkbox]:checked~span svg{opacity:1}input[type=checkbox]:focus~span{border:1px solid #047a9c;border-radius:2px;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}input[type=checkbox]:disabled~span{background-color:#e9e9e9}input[type=checkbox]:disabled~span svg{fill:#c7c7c7}input[type=checkbox]~label{min-height:18px;display:inline-block;padding-left:28px;line-height:18px;position:relative;z-index:2}.pe-radio{position:relative;min-height:16px;margin-bottom:14px}.pe-radio:last-child{margin-bottom:0}input[type=radio]{opacity:0;position:absolute}input[type=radio]+label{display:inline-block;padding-left:28px;line-height:18px}input[type=radio]~span{display:block;-webkit-box-sizing:content-box;box-sizing:content-box;position:absolute;left:0;top:0;height:5px;width:5px;padding:3px 6px 6px 3px;color:#6a7070;border:1px solid #c7c7c7;border-radius:50%;pointer-events:none}input[type=radio]:focus~span{color:#6a7070;border:1px solid #047a9c;border-radius:50%;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}input[type=radio]:disabled~span{color:#c7c7c7;background-color:#e9e9e9}input[type=radio]~span svg{opacity:0;height:8px;width:8px}input[type=radio]:checked~span svg{opacity:1}.pe-textInput__showButton,.pe-textInput__showButton--disabled,.pe-textInput__showButton--error,.pe-textInput__showButton-basic,.pe-textInput__showButton-basic--disabled{position:relative;background-color:none;text-decoration:none;float:right;padding:2px;border:0;color:#047a9c;background:#fff}.pe-textInput__showButton--disabled:focus,.pe-textInput__showButton--error:focus,.pe-textInput__showButton-basic--disabled:focus,.pe-textInput__showButton-basic:focus,.pe-textInput__showButton:focus{text-decoration:underline}.pe-textInput__showButton,.pe-textInput__showButton--error{margin-top:-28px}.pe-textInput__showButton--disabled{margin-top:-35px;color:#c7c7c7}.pe-textInput__showButton-basic{margin-right:14px;margin-top:-28px}.pe-textInput__showButton-basic--disabled{margin-right:14px;margin-top:-28px;color:#c7c7c7;background-color:#e9e9e9}.pe-fieldset{border:none}.pe-legend{opacity:0}::-ms-reveal{display:none}#pe-icons-sprite{display:none}svg[class^=pe-icon--]{display:inline-block;vertical-align:top;fill:currentColor}[class^=pe-btn] svg[class$="-18"],[class^=pe-btn] svg[class$="-24"]{vertical-align:middle;margin-left:.5em;margin-bottom:.3em}svg[class$="-18"]{width:18px;height:18px}svg[class$="-24"]{width:24px;height:24px}svg[class$=font-setting-18]{width:24px;height:18px}svg[class$=font-setting-24]{width:32px;height:24px}svg[class$=new-notification-9]{vertical-align:middle;width:10px;height:10px}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@media screen and (prefers-reduced-motion:reduce){.animated{-webkit-animation:unset!important;animation:unset!important}}.animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}@media (max-width:480px){.animateIn{-webkit-animation-name:slideInUp;animation-name:slideInUp}}.animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}@media (max-width:480px){.animateOut{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}}.datepicker-container{position:relative;min-width:150px;width:322px;font-family:Open Sans,Calibri,Tahoma,sans-serif}@media (-ms-high-contrast:none){.datepicker-container{max-width:350px}}.datepicker-container .datepicker{position:relative}.datepicker-container .datepicker .pe-icon-wrapper{bottom:-webkit-calc(50% - 11px);bottom:calc(50% - 11px);color:#6a7070;position:absolute;right:14px}.datepicker-container .datepicker .pe-icon-wrapper button img{top:2px;position:relative}.datepicker-container .calendar-container{margin-top:2px}#inputAriaId{display:none}.error #inputAriaId{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.error input{border:1px solid #db0020}.error .pe-textLabelInput__label{color:#db0020}.pe-calendar{-webkit-box-sizing:content-box;box-sizing:content-box;width:280px;min-height:284px;color:#252525;padding:16px 20px 20px;z-index:1;border:1px solid #c7c7c7;background-color:#fff;font-size:14px}@media (-ms-high-contrast:none){.pe-calendar{width:308px}}.pe-calendar fieldset{margin:0;border:0;padding:0}.pe-calendar .pe-cal-actions{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:80px}.pe-calendar .pe-cal-title{padding:8px;text-align:left;margin-bottom:8px;width:-webkit-calc(100% - 84px);width:calc(100% - 84px);display:inline-block;float:left;font-size:18px}.pe-calendar .pe-arrowIcons{cursor:pointer;height:40px;color:#6a7070;text-align:center;width:40px;display:inline}.pe-calendar .pe-arrowIcons:hover{color:#252525}.pe-calendar .pe-arrowIcons:focus{color:#252525;outline:none}.pe-calendar .pe-arrowIcons:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:0;width:-webkit-calc(100% + -4px);width:calc(100% + -4px);height:-webkit-calc(100% + -4px);height:calc(100% + -4px);top:0;left:0;z-index:1}.pe-calendar .pe-cal-weekdays div{height:40px;color:#6a7070;line-height:40px;font-size:12px}.pe-calendar .pe-cal-row{display:grid;grid-template-columns:repeat(7,40px);clear:both}.pe-calendar .pe-cal-cell{display:inline-block;vertical-align:top;text-align:center;width:40px}.pe-calendar .pe-cal-cell button{padding:0;border:0;position:relative;cursor:pointer;display:block}.pe-calendar .pe-cal-cell button.currentDate-box{width:36px;height:36px;margin:1px;line-height:36px;border-radius:0;padding:0;border:1px solid #c7c7c7;background:transparent}.pe-calendar .pe-cal-cell button.currentDate-box .pe-cal-cell-square{margin:2px}.pe-calendar .pe-cal-cell button.pe-cal-selected .pe-cal-cell-square{font-weight:600;color:#fff;background-color:#6a7070}.pe-calendar .pe-cal-cell-square{height:32px;width:32px;margin:4px;line-height:32px;border-radius:16px}.pe-calendar .pe-cal-date.pe-cal-past{height:40px;line-height:38px}.pe-calendar .pe-cal-past .pe-cal-cell-square{color:#c7c7c7;cursor:not-allowed}.pe-calendar .secondary-date{border:1px solid #c7c7c7}.pe-calendar.inverse{color:#fff;background-color:#005a70;border:1px solid #005a70}.pe-calendar.inverse .pe-arrowIcons,.pe-calendar.inverse .pe-cal-cell-square,.pe-calendar.inverse .pe-cal-title,.pe-calendar.inverse .pe-cal-weekdays div{color:#fff}.pe-calendar.inverse .pe-arrowIcons:focus,.pe-calendar.inverse .pe-arrowIcons:hover{color:#c7c7c7}.pe-calendar.inverse .pe-cal-date .pe-cal-selected .pe-cal-cell-square{color:#252525;background-color:#fff}.pe-calendar.inverse .pe-cal-past .pe-cal-cell-square{color:#047a9c;cursor:not-allowed}.pe-icon--btn{padding:0;background-color:transparent;border:0;position:relative}.pe-icon-wrapper button{color:#6a7070;cursor:pointer}@media (-ms-high-contrast:none){.pe-icon-wrapper{bottom:-webkit-calc(50% - 12px)!important;bottom:calc(50% - 12px)!important}}.date-selector{background:none}.date-selector:hover{background-color:#e9e9e9;color:#252525;cursor:pointer}.date-selector.selected{background-color:#6a7070;color:#fff}.currentDate-box{border:1px solid #c7c7c7}\n</style>      \n    <div class="datepicker-container">\n        <label class="pe-textLabelInput__label" for="datepicker">Select date (mm/dd/yyyy)</label> \n        <div class="datepicker">\n            <input type="text" class="pe-textInput--basic" id="datepicker" aria-expanded="false">\n            <span class="pe-icon-wrapper">\n                <button class="pe-icon--btn open-calendar" aria-label="open calendar">\n\t\t\t\t               <img src="' + calendarIcon + '" aria-hidden="true"/>\n                </button>\n            </span>\n        </div> \n        <p id="inputAriaId" class="pe-input--error_message">' + warningIcon + ' Enter a valid date.</p>\n    </div>\n';

  calendar.innerHTML = '\n        <section class="calendar-container animated animateIn">\n            <div class="pe-calendar ">\n                <fieldset class="pe-inner">\n                    <legend class="pe-cal-title pe-title--small" id="pe-cal-month"></legend>\n                    <div class="pe-cal-actions">\n                        <button class="pe-arrowIcons pe-icon--btn previous" aria-label="Previous month">\n                           <img src="' + prevArrowIcon + '" aria-hidden="true"/>\n                        </button>\n                        <button class="pe-arrowIcons pe-icon--btn next" aria-label="Next month">\n                            <img src="' + nextArrowIcon + '" aria-hidden="true"/>\n                        </button>\n                    </div>\n                    <div class="pe-cal-row pe-cal-weekdays">\n                        <div class="pe-cal-cell pe-label--small pe-cal-cell-dayNames ">\n                            <abbr title="Sunday">S</abbr>\n                        </div>\n                        <div class="pe-cal-cell pe-label--small pe-cal-cell-dayNames ">\n                            <abbr title="Monday">M</abbr>\n                        </div>\n                        <div class="pe-cal-cell pe-label--small pe-cal-cell-dayNames ">\n                            <abbr title="Tuesday">T</abbr>\n                        </div>\n                        <div class="pe-cal-cell pe-label--small pe-cal-cell-dayNames ">\n                            <abbr title="Wednesday">W</abbr>\n                        </div>\n                        <div class="pe-cal-cell pe-label--small pe-cal-cell-dayNames ">\n                            <abbr title="Thursday">T</abbr>\n                        </div>\n                        <div class="pe-cal-cell pe-label--small pe-cal-cell-dayNames ">\n                            <abbr title="Friday">F</abbr>\n                        </div>\n                        <div class="pe-cal-cell pe-label--small pe-cal-cell-dayNames ">\n                            <abbr title="Saturday">S</abbr>\n                        </div>\n                    </div>\n                    <div class="pe-cal-dates"></div>\n                </fieldset>\n            </div>\n        </section>\n';

  row.innerHTML = '\n<div class="pe-cal-row"></div>\n';

  dateTemplate.innerHTML = '\n <div class="pe-cal-cell pe-cal-date">\n      <button class="date-selector pe-cal-cell-square start" data-date="11/01/2018" aria-label="" aria-pressed="false">1</button>\n  </div>\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(datepicker, 'pearson-datepicker');

  function getFocusableElements(node) {
    var buttons = node.querySelectorAll('button:not(:disabled)'),
        data = {};
    data.elements = buttons;
    data.firstElement = data.elements[0];
    data.lastElement = data.elements[data.elements.length - 1];
    return data;
  }

  function validateDate(testdate) {
    var date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return date_regex.test(testdate);
  }

  // helpers

  var Datepicker = function (_HTMLElement) {
    _inherits(Datepicker, _HTMLElement);

    _createClass(Datepicker, [{
      key: 'returnDateData',


      // this data is fed to the calendar data function and is used to build the calendar object
      value: function returnDateData(date, type) {
        // return the year to populate calendar
        if (this.year !== null && type === undefined) {
          date.year = parseInt(this.year, 10);
        } else if (type !== undefined) {
          date.year = date.year;
        } else {
          date.year = parseInt(moment().format('Y'), 10);
        }

        // return the month to populate calendar
        if (this.month !== null && type === undefined) {
          date.month = parseInt(this.month - 1, 10);
        } else if (type !== undefined) {
          if (type === 'add') {
            date.month = date.month + 1;
            if (date.month === 12) {
              date.month = 0;
              date.year = date.year + 1;
            }
          } else if (type === 'subtract') {
            // date.month = moment().subtract(date.month, 'month').month();
            date.month = date.month - 1;
            if (date.month === -1) {
              date.month = 11;
              date.year = date.year - 1;
            }
          }
        } else {
          date.month = moment().month();
        }

        // return the day to populate calendar
        if (this.day !== null) {
          date.day = this.day;
        } else {
          date.day = moment().format('D');
        }
        return date;
      }

      // builds the calendar object to power the UI

    }, {
      key: 'returnCalendarData',
      value: function returnCalendarData(returnData) {
        var data = returnData,
            date = moment([data.year, data.month]),
            firstDay = moment(date).startOf('M').day('Sunday'),
            endDay = moment(date).endOf('M').day('Saturday'),
            monthRange = moment.range(firstDay, endDay),
            weeks = [],
            calendar = [],
            build = [],
            calendarData = {};

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = monthRange.by('days')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var day = _step.value;

            var number = void 0;
            if (weeks.indexOf(day.week()) === -1 && weeks.indexOf(53) === -1) {
              if (data.month === 11 && day.week() === 1) {
                number = 53;
              } else {
                number = day.week();
              }
              weeks.push(number);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        weeks.forEach(function (week, index) {
          var weeknumber = weeks[index];
          var firstWeekDay = moment(firstDay).week(weeknumber).day('Sunday');
          if (firstWeekDay.isBefore(firstDay)) {
            firstWeekDay = firstDay;
          }
          var lastWeekDay = moment(endDay).year(data.year).week(weeknumber).day('Saturday');
          if (lastWeekDay.isAfter(endDay)) {
            lastWeekDay = endDay;
          }
          var weekRange = moment.range(firstWeekDay, lastWeekDay);
          calendar.push(weekRange);
        });

        calendar.forEach(function (range) {
          var weeks = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = range.by('days')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _day = _step2.value;

              weeks.push(_day);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          build.push(weeks);
        });
        calendarData.month = moment(date).startOf('M').format("MMMM");
        calendarData.year = data.year;
        calendarData.weeks = build;
        return calendarData;
      }

      // builds and renders next month

    }, {
      key: 'nextMonth',
      value: function nextMonth() {
        this.data = this.returnDateData(this.data, 'add');
        this.renderCalendar(this.data);
      }

      // builds and renders previous month

    }, {
      key: 'prevMonth',
      value: function prevMonth() {
        this.data = this.returnDateData(this.data, 'subtract');
        this.renderCalendar(this.data);
      }

      // opens the calendar

    }, {
      key: 'openCalendar',
      value: function openCalendar() {
        this.openState = 'true';
        this.renderCalendar(this.data);
        this.focusOnOpen();
      }

      // closes the calendar

    }, {
      key: 'closeCalendar',
      value: function closeCalendar() {
        this.openState = 'false';
        this.openBtn.focus();
      }

      // builds the calendar template

    }, {
      key: 'buildCalendarContainer',
      value: function buildCalendarContainer() {
        var calendarTemplate = calendar.content.cloneNode(true),
            nextBtn = calendarTemplate.querySelector('.next'),
            prevBtn = calendarTemplate.querySelector('.previous');

        nextBtn.addEventListener('click', this.nextMonth, false);
        prevBtn.addEventListener('click', this.prevMonth, false);

        return calendarTemplate;
      }

      // populates and renders the calendar

    }, {
      key: 'renderCalendar',
      value: function renderCalendar(dateData) {
        var _this2 = this;

        var data = this.returnCalendarData(dateData),
            rowTarget = this.shadowRoot.querySelector('.pe-cal-dates');

        rowTarget.innerHTML = '';

        data.weeks.forEach(function (week, index2) {
          var rowTemplate = row.content.cloneNode(true),
              rows = rowTemplate.querySelector('.pe-cal-row');

          week.forEach(function (days, index) {
            var cellTemplate = dateTemplate.content.cloneNode(true),
                button = cellTemplate.querySelector('button');
            if (days.format('MMMM') === data.month) {
              button.innerHTML = days.format('D');
              button.setAttribute('aria-label', days.format('dddd, MMMM Do YYYY'));
              button.setAttribute('data-date', days.format('L'));
              button.setAttribute('data-index', days.format('D'));
              button.addEventListener('click', function (event) {
                var prevSelected = rowTarget.getElementsByClassName('selected')[0];
                if (prevSelected !== undefined) {
                  prevSelected.classList.remove('selected');
                  prevSelected.setAttribute('aria-pressed', false);
                }
                _this2.selectedState = event.target.getAttribute('data-date');
                event.target.setAttribute('aria-pressed', true);
                event.target.classList.add('selected');
                _this2.invalid = validateDate(_this2.input.value);
                _this2.closeCalendar();
              });
            } else {
              button.remove();
            }

            if (days.format('MMMM') === moment().format('MMMM') && moment().format('D') === days.format('D') && days.format('YYYY') === moment().format('YYYY')) {
              button.parentNode.classList.add('currentDate-box');
              button.setAttribute('aria-label', 'Today ' + days.format('dddd, MMMM Do YYYY'));
            }
            rows.appendChild(cellTemplate);
          });
          rowTarget.appendChild(rowTemplate);
        });
        this.monthYearState = data.month + ' ' + data.year;
        var selectedNode = this.shadowRoot.querySelector('[data-date="' + this.selected + '"]');
        if (selectedNode !== null) {
          selectedNode.classList.add('selected');
        }
      }

      // focus management when calendar is opened

    }, {
      key: 'focusOnOpen',
      value: function focusOnOpen() {
        if (this.selected === null) {
          var currentNode = this.shadowRoot.querySelector('.currentDate-box button');
          if (currentNode !== null) {
            currentNode.focus();
            currentNode.setAttribute('aria-pressed', true);
          }
        } else {
          var selectedNode = this.shadowRoot.querySelector('[data-date="' + this.selected + '"]');
          if (selectedNode !== null) {
            selectedNode.classList.add('selected');
            selectedNode.focus();
            selectedNode.setAttribute('aria-pressed', true);
          }
        }
      }
    }, {
      key: 'open',
      get: function get() {
        return this.getAttribute('open');
      }
    }, {
      key: 'year',
      get: function get() {
        return this.getAttribute('year');
      }
    }, {
      key: 'month',
      get: function get() {
        return this.getAttribute('month');
      }
    }, {
      key: 'day',
      get: function get() {
        return this.getAttribute('day');
      }
    }, {
      key: 'selected',
      get: function get() {
        return this.getAttribute('value');
      }
    }, {
      key: 'monthYearState',
      set: function set(str) {
        this.shadowRoot.querySelector('legend').innerHTML = str;
      }
    }, {
      key: 'openState',
      set: function set(bool) {
        this.setAttribute('open', bool);
      }
    }, {
      key: 'invalid',
      set: function set(bool) {
        var datepicker = this.shadowRoot.querySelector('.datepicker-container'),
            input = datepicker.querySelector('input');
        if (bool === false) {
          datepicker.classList.add('error');
        } else {
          this.selectedState = input.value;
          this.data.month = parseInt(input.value.substring(0, 2) - 1, 10);
          this.data.year = parseInt(input.value.substring(6, 10), 10);
          this.data.day = input.value.substring(3, 5);
          console.log(this.data);
          datepicker.classList.remove('error');
        }
      }
    }, {
      key: 'selectedState',
      set: function set(selected) {
        if (selected !== null) {
          var input = this.shadowRoot.querySelector('input');
          this.setAttribute('value', selected);
          input.value = this.selected;
          this.data.month = parseInt(this.selected.substring(0, 2) - 1, 10);
          this.data.year = parseInt(this.selected.substring(6, 10), 10);
          this.data.day = this.selected.substring(3, 5);
        }
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['open', 'year', 'month', 'day', 'value'];
      }
    }]);

    function Datepicker() {
      _classCallCheck(this, Datepicker);

      var _this = _possibleConstructorReturn(this, (Datepicker.__proto__ || Object.getPrototypeOf(Datepicker)).call(this));

      _this.attachShadow({
        mode: 'open'
      });
      var clone = datepicker.content.cloneNode(true);
      _this.openBtn = clone.querySelector('.open-calendar');
      _this.datepicker = clone.querySelector('.datepicker-container');
      _this.input = clone.querySelector('input');
      _this.data = {};
      /** After all this, we can append our clone to the shadowRoot */
      _this.shadowRoot.appendChild(clone);

      _this.returnDateData = _this.returnDateData.bind(_this);
      _this.buildCalendarContainer = _this.buildCalendarContainer.bind(_this);
      _this.returnCalendarData = _this.returnCalendarData.bind(_this);
      _this.nextMonth = _this.nextMonth.bind(_this);
      _this.prevMonth = _this.prevMonth.bind(_this);
      _this.renderCalendar = _this.renderCalendar.bind(_this);
      _this.closeCalendar = _this.closeCalendar.bind(_this);
      _this.openCalendar = _this.openCalendar.bind(_this);
      _this.focusOnOpen = _this.focusOnOpen.bind(_this);
      return _this;
    }

    _createClass(Datepicker, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this3 = this;

        this.setAttribute('open', false);
        this.data = this.returnDateData(this.data);
        this.selectedState = this.selected;
        // opens calendar when down arrow is pushed
        this.input.addEventListener('keydown', function (event) {
          switch (event.keyCode) {
            case 40:
              if (_this3.open === 'false') {
                _this3.openCalendar();
              }
              break;
          }
        });

        this.input.addEventListener('blur', function (event) {
          if (_this3.input.value.length > 0) {
            _this3.invalid = validateDate(_this3.input.value);
          }
        });

        // opens calendar when button is pressed
        this.openBtn.addEventListener('click', function (event) {
          if (_this3.open === 'false') {
            _this3.openCalendar();
          } else {
            _this3.closeCalendar();
          }
        });
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        var _this4 = this;

        var calendarContainer = this.datepicker.querySelector('.calendar-container'),
            input = this.datepicker.querySelector('input');
        if (name === 'open') {
          if (oldValue !== newValue) {
            if (newValue === 'true') {
              input.setAttribute('aria-expanded', true);
              var calendarTemplate = this.buildCalendarContainer();
              var dates = calendarTemplate.querySelector('.pe-cal-dates');
              this.datepicker.appendChild(calendarTemplate);
              this.monthYearState = moment().month(this.data.month).format('MMMM') + ' ' + this.data.year;

              // closes the calendar if outside the calendar target
              doc.addEventListener('click', function (event) {
                if (_this4.open === 'true') {
                  var target = event.target;
                  do {
                    if (target === _this4) {
                      return;
                    }
                    target = target.parentNode;
                  } while (target);
                  _this4.closeCalendar();
                } else {
                  return false;
                }
              }, true);

              // closes the calendar on escape
              doc.addEventListener('keydown', function (event) {
                switch (event.keyCode) {
                  case 27:
                    _this4.closeCalendar();
                    break;
                }
              });

              // keyboard navigation for accessibility
              dates.addEventListener('keydown', function (event) {
                var nextItem = parseInt(event.target.getAttribute('data-index')),
                    prevItem = parseInt(event.target.getAttribute('data-index')) - 2,
                    nextWeek = parseInt(event.target.getAttribute('data-index')) + 6,
                    prevWeek = parseInt(event.target.getAttribute('data-index')) - 8,
                    previousMonth = _this4.datepicker.querySelector('.previous');

                event.preventDefault();
                event.stopImmediatePropagation();
                switch (event.keyCode) {
                  case 39:
                    // right arrow
                    if (_this4.shadowRoot.activeElement === getFocusableElements(dates).lastElement) {
                      _this4.nextMonth();
                      getFocusableElements(dates).firstElement.focus();
                    } else {
                      if (getFocusableElements(dates).elements[nextItem] !== undefined) {
                        getFocusableElements(dates).elements[nextItem].focus();
                      } else {
                        return;
                      }
                    }
                    break;
                  case 37:
                    // left arrow
                    if (_this4.shadowRoot.activeElement === getFocusableElements(dates).firstElement) {
                      _this4.prevMonth();
                      getFocusableElements(dates).lastElement.focus();
                    } else {
                      if (getFocusableElements(dates).elements[prevItem] !== undefined) {
                        getFocusableElements(dates).elements[prevItem].focus();
                      } else {
                        return;
                      }
                    }
                    break;
                  case 40:
                    //arrow down
                    if (getFocusableElements(dates).elements[nextWeek] !== undefined) {
                      getFocusableElements(dates).elements[nextWeek].focus();
                    } else {
                      _this4.nextMonth();
                      getFocusableElements(dates).firstElement.focus();
                    }
                    break;
                  case 38:
                    // arrow up
                    if (getFocusableElements(dates).elements[prevWeek] !== undefined) {
                      getFocusableElements(dates).elements[prevWeek].focus();
                    } else {
                      _this4.prevMonth();
                      getFocusableElements(dates).lastElement.focus();
                    }
                    break;
                  case 13:
                    // enter
                    event.target.click();
                    break;
                  case 32:
                    // space
                    event.target.click();
                    break;
                  case 33:
                    _this4.prevMonth();
                    getFocusableElements(dates).lastElement.focus();
                    break;
                  case 34:
                    _this4.nextMonth();
                    getFocusableElements(dates).firstElement.focus();
                    break;
                  case 35:
                    getFocusableElements(dates).lastElement.focus();
                    break;
                  case 36:
                    getFocusableElements(dates).firstElement.focus();
                    break;
                  case 27:
                    _this4.closeCalendar();
                    break;
                  case 9:
                    previousMonth.focus();
                    break;
                }
              });
            }
            if (newValue === 'false' && calendarContainer !== null) {
              calendarContainer.remove();
              input.setAttribute('aria-expanded', false);
            }
          }
        }
      }
    }]);

    return Datepicker;
  }(HTMLElement);

  customElements.define('pearson-datepicker', Datepicker);
})(window, document);