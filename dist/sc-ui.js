import { isVNode as ke, Fragment as Ae, Comment as Xn, Text as Kn, nextTick as at, TransitionGroup as er, defineComponent as G, getCurrentInstance as ln, onUpdated as tr, createVNode as S, h as xe, createApp as nr, ref as me, watch as We, provide as rr, computed as A, openBlock as $, createElementBlock as H, normalizeClass as j, unref as C, renderSlot as ye, inject as or, onMounted as ir, onBeforeUnmount as ar, reactive as sr, normalizeStyle as Ct, createElementVNode as K, createCommentVNode as wt, createBlock as le, toDisplayString as Ne, createTextVNode as St } from "vue";
function Te(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ot(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ot(Object(n), !0).forEach(function(r) {
      Te(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ot(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function I() {
  return I = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, I.apply(this, arguments);
}
function xt(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function fn(e, t, n) {
  return t && xt(e.prototype, t), n && xt(e, n), e;
}
function ve() {
  return (ve = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function dn(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function pn(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, i = Object.keys(e);
  for (r = 0; r < i.length; r++)
    t.indexOf(n = i[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function Tt(e) {
  return ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 && Object.prototype.toString.call(e) === "[object Object]";
  var t;
}
var hn = Object.prototype, gn = hn.toString, ur = hn.hasOwnProperty, mn = /^\s*function (\w+)/;
function jt(e) {
  var t, n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    var r = n.toString().match(mn);
    return r ? r[1] : "";
  }
  return "";
}
var R = function(e) {
  var t, n;
  return Tt(e) !== !1 && typeof (t = e.constructor) == "function" && Tt(n = t.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
}, yn = function(e) {
  return e;
}, x = yn;
if (process.env.NODE_ENV !== "production") {
  var lr = typeof console < "u";
  x = lr ? function(e) {
    console.warn("[VueTypes warn]: " + e);
  } : yn;
}
var ie = function(e, t) {
  return ur.call(e, t);
}, fr = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, Q = Array.isArray || function(e) {
  return gn.call(e) === "[object Array]";
}, Y = function(e) {
  return gn.call(e) === "[object Function]";
}, je = function(e) {
  return R(e) && ie(e, "_vueTypes_name");
}, vn = function(e) {
  return R(e) && (ie(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t) {
    return ie(e, t);
  }));
};
function st(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function q(e, t, n) {
  var r;
  n === void 0 && (n = !1);
  var o = !0, i = "";
  r = R(e) ? e : { type: e };
  var a = je(r) ? r._vueTypes_name + " - " : "";
  if (vn(r) && r.type !== null) {
    if (r.type === void 0 || r.type === !0 || !r.required && t === void 0)
      return o;
    Q(r.type) ? (o = r.type.some(function(f) {
      return q(f, t, !0) === !0;
    }), i = r.type.map(function(f) {
      return jt(f);
    }).join(" or ")) : o = (i = jt(r)) === "Array" ? Q(t) : i === "Object" ? R(t) : i === "String" || i === "Number" || i === "Boolean" || i === "Function" ? function(f) {
      if (f == null)
        return "";
      var d = f.constructor.toString().match(mn);
      return d ? d[1] : "";
    }(t) === i : t instanceof r.type;
  }
  if (!o) {
    var s = a + 'value "' + t + '" should be of type "' + i + '"';
    return n === !1 ? (x(s), !1) : s;
  }
  if (ie(r, "validator") && Y(r.validator)) {
    var c = x, u = [];
    if (x = function(f) {
      u.push(f);
    }, o = r.validator(t), x = c, !o) {
      var l = (u.length > 1 ? "* " : "") + u.join(`
* `);
      return u.length = 0, n === !1 ? (x(l), o) : l;
    }
  }
  return o;
}
function k(e, t) {
  var n = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(o) {
    return o !== void 0 || this.default ? Y(o) || q(this, o, !0) === !0 ? (this.default = Q(o) ? function() {
      return [].concat(o);
    } : R(o) ? function() {
      return Object.assign({}, o);
    } : o, this) : (x(this._vueTypes_name + ' - invalid default value: "' + o + '"'), this) : this;
  } } }), r = n.validator;
  return Y(r) && (n.validator = st(r, n)), n;
}
function N(e, t) {
  var n = k(e, t);
  return Object.defineProperty(n, "validate", { value: function(r) {
    return Y(this.validator) && x(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = st(r, this), this;
  } });
}
function _t(e, t, n) {
  var r, o, i = (r = t, o = {}, Object.getOwnPropertyNames(r).forEach(function(f) {
    o[f] = Object.getOwnPropertyDescriptor(r, f);
  }), Object.defineProperties({}, o));
  if (i._vueTypes_name = e, !R(n))
    return i;
  var a, s, c = n.validator, u = pn(n, ["validator"]);
  if (Y(c)) {
    var l = i.validator;
    l && (l = (s = (a = l).__original) !== null && s !== void 0 ? s : a), i.validator = st(l ? function(f) {
      return l.call(this, f) && c.call(this, f);
    } : c, i);
  }
  return Object.assign(i, u);
}
function Ee(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var dr = function() {
  return N("any", {});
}, pr = function() {
  return N("function", { type: Function });
}, hr = function() {
  return N("boolean", { type: Boolean });
}, gr = function() {
  return N("string", { type: String });
}, mr = function() {
  return N("number", { type: Number });
}, yr = function() {
  return N("array", { type: Array });
}, vr = function() {
  return N("object", { type: Object });
}, br = function() {
  return k("integer", { type: Number, validator: function(e) {
    return fr(e);
  } });
}, Cr = function() {
  return k("symbol", { validator: function(e) {
    return typeof e == "symbol";
  } });
};
function wr(e, t) {
  if (t === void 0 && (t = "custom validation failed"), typeof e != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return k(e.name || "<<anonymous function>>", { validator: function(n) {
    var r = e(n);
    return r || x(this._vueTypes_name + " - " + t), r;
  } });
}
function Sr(e) {
  if (!Q(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".', n = e.reduce(function(r, o) {
    if (o != null) {
      var i = o.constructor;
      r.indexOf(i) === -1 && r.push(i);
    }
    return r;
  }, []);
  return k("oneOf", { type: n.length > 0 ? n : void 0, validator: function(r) {
    var o = e.indexOf(r) !== -1;
    return o || x(t), o;
  } });
}
function Or(e) {
  if (!Q(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t = !1, n = [], r = 0; r < e.length; r += 1) {
    var o = e[r];
    if (vn(o)) {
      if (je(o) && o._vueTypes_name === "oneOf") {
        n = n.concat(o.type);
        continue;
      }
      if (Y(o.validator) && (t = !0), o.type !== !0 && o.type) {
        n = n.concat(o.type);
        continue;
      }
    }
    n.push(o);
  }
  return n = n.filter(function(i, a) {
    return n.indexOf(i) === a;
  }), k("oneOfType", t ? { type: n, validator: function(i) {
    var a = [], s = e.some(function(c) {
      var u = q(je(c) && c._vueTypes_name === "oneOf" ? c.type || null : c, i, !0);
      return typeof u == "string" && a.push(u), u === !0;
    });
    return s || x("oneOfType - provided value does not match any of the " + a.length + ` passed-in validators:
` + Ee(a.join(`
`))), s;
  } } : { type: n });
}
function xr(e) {
  return k("arrayOf", { type: Array, validator: function(t) {
    var n, r = t.every(function(o) {
      return (n = q(e, o, !0)) === !0;
    });
    return r || x(`arrayOf - value validation error:
` + Ee(n)), r;
  } });
}
function Tr(e) {
  return k("instanceOf", { type: e });
}
function jr(e) {
  return k("objectOf", { type: Object, validator: function(t) {
    var n, r = Object.keys(t).every(function(o) {
      return (n = q(e, t[o], !0)) === !0;
    });
    return r || x(`objectOf - value validation error:
` + Ee(n)), r;
  } });
}
function _r(e) {
  var t = Object.keys(e), n = t.filter(function(o) {
    var i;
    return !!(!((i = e[o]) === null || i === void 0) && i.required);
  }), r = k("shape", { type: Object, validator: function(o) {
    var i = this;
    if (!R(o))
      return !1;
    var a = Object.keys(o);
    if (n.length > 0 && n.some(function(c) {
      return a.indexOf(c) === -1;
    })) {
      var s = n.filter(function(c) {
        return a.indexOf(c) === -1;
      });
      return x(s.length === 1 ? 'shape - required property "' + s[0] + '" is not defined.' : 'shape - required properties "' + s.join('", "') + '" are not defined.'), !1;
    }
    return a.every(function(c) {
      if (t.indexOf(c) === -1)
        return i._vueTypes_isLoose === !0 || (x('shape - shape definition does not include a "' + c + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
      var u = q(e[c], o[c], !0);
      return typeof u == "string" && x('shape - "' + c + `" property validation error:
 ` + Ee(u)), u === !0;
    });
  } });
  return Object.defineProperty(r, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(r, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), r;
}
var M = function() {
  function e() {
  }
  return e.extend = function(t) {
    var n = this;
    if (Q(t))
      return t.forEach(function(f) {
        return n.extend(f);
      }), this;
    var r = t.name, o = t.validate, i = o !== void 0 && o, a = t.getter, s = a !== void 0 && a, c = pn(t, ["name", "validate", "getter"]);
    if (ie(this, r))
      throw new TypeError('[VueTypes error]: Type "' + r + '" already defined');
    var u, l = c.type;
    return je(l) ? (delete c.type, Object.defineProperty(this, r, s ? { get: function() {
      return _t(r, l, c);
    } } : { value: function() {
      var f, d = _t(r, l, c);
      return d.validator && (d.validator = (f = d.validator).bind.apply(f, [d].concat([].slice.call(arguments)))), d;
    } })) : (u = s ? { get: function() {
      var f = Object.assign({}, c);
      return i ? N(r, f) : k(r, f);
    }, enumerable: !0 } : { value: function() {
      var f, d, y = Object.assign({}, c);
      return f = i ? N(r, y) : k(r, y), y.validator && (f.validator = (d = y.validator).bind.apply(d, [f].concat([].slice.call(arguments)))), f;
    }, enumerable: !0 }, Object.defineProperty(this, r, u));
  }, fn(e, null, [{ key: "any", get: function() {
    return dr();
  } }, { key: "func", get: function() {
    return pr().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return hr().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return gr().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return mr().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return yr().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return vr().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return br().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return Cr();
  } }]), e;
}();
function bn(e) {
  var t;
  return e === void 0 && (e = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (t = function(n) {
    function r() {
      return n.apply(this, arguments) || this;
    }
    return dn(r, n), fn(r, null, [{ key: "sensibleDefaults", get: function() {
      return ve({}, this.defaults);
    }, set: function(o) {
      this.defaults = o !== !1 ? ve({}, o !== !0 ? o : e) : {};
    } }]), r;
  }(M)).defaults = ve({}, e), t;
}
M.defaults = {}, M.custom = wr, M.oneOf = Sr, M.instanceOf = Tr, M.oneOfType = Or, M.arrayOf = xr, M.objectOf = jr, M.shape = _r, M.utils = { validate: function(e, t) {
  return q(t, e, !0) === !0;
}, toType: function(e, t, n) {
  return n === void 0 && (n = !1), n ? N(e, t) : k(e, t);
} };
(function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return dn(t, e), t;
})(bn());
var Cn = bn({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
Cn.extend([{
  name: "looseBool",
  getter: !0,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: !0,
  type: [String, Object],
  default: void 0
}, {
  name: "VNodeChild",
  getter: !0,
  type: null
}]);
const _ = Cn;
function Ge(e) {
  return Ge = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ge(e);
}
var Pr = function(t) {
  return typeof t == "function";
}, wn = function(t) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(r) {
    var o = n[r];
    return o || (n[r] = t(r));
  };
}, Ir = /-(\w)/g, kr = wn(function(e) {
  return e.replace(Ir, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}), Ar = /\B([A-Z])/g, Er = wn(function(e) {
  return e.replace(Ar, "-$1").toLowerCase();
}), Fr = Object.prototype.hasOwnProperty, Pt = function(t, n) {
  return Fr.call(t, n);
};
function $r(e, t, n, r) {
  var o = e[n];
  if (o != null) {
    var i = Pt(o, "default");
    if (i && r === void 0) {
      var a = o.default;
      r = o.type !== Function && Pr(a) ? a() : a;
    }
    o.type === Boolean && (!Pt(t, n) && !i ? r = !1 : r === "" && (r = !0));
  }
  return r;
}
function Qe(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Mr(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Qe(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Qe(e, t);
  }
}
function Nr(e) {
  if (Array.isArray(e))
    return Qe(e);
}
function Lr(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Dr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _e(e) {
  return Nr(e) || Lr(e) || Mr(e) || Dr();
}
var Br = function(t) {
  return t != null && t !== "";
};
const Vr = Br;
var be = function e() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = Array.isArray(t) ? t : [t], o = [];
  return r.forEach(function(i) {
    Array.isArray(i) ? o.push.apply(o, _e(e(i, n))) : i && i.type === Ae ? o.push.apply(o, _e(e(i.children, n))) : i && ke(i) ? n && !Ur(i) ? o.push(i) : n || o.push(i) : Vr(i) && o.push(i);
  }), o;
}, zr = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (ke(t))
    return t.type === Ae ? n === "default" ? be(t.children) : [] : t.children && t.children[n] ? be(t.children[n](r)) : [];
  var o = t.$slots[n] && t.$slots[n](r);
  return be(o);
}, Rr = function(t) {
  var n = {};
  if (t.$ && t.$.vnode) {
    var r = t.$.vnode.props || {};
    Object.keys(t.$props).forEach(function(s) {
      var c = t.$props[s], u = Er(s);
      (c !== void 0 || u in r) && (n[s] = c);
    });
  } else if (ke(t) && Ge(t.type) === "object") {
    var o = t.props || {}, i = {};
    Object.keys(o).forEach(function(s) {
      i[kr(s)] = o[s];
    });
    var a = t.type.props || {};
    Object.keys(a).forEach(function(s) {
      var c = $r(a, i, s, i[s]);
      (c !== void 0 || s in i) && (n[s] = c);
    });
  }
  return n;
}, Sn = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, i = void 0;
  if (t.$) {
    var a = t[n];
    if (a !== void 0)
      return typeof a == "function" && o ? a(r) : a;
    i = t.$slots[n], i = o && i ? i(r) : i;
  } else if (ke(t)) {
    var s = t.props && t.props[n];
    if (s !== void 0 && t.props !== null)
      return typeof s == "function" && o ? s(r) : s;
    t.type === Ae ? i = t.children : t.children && t.children[n] && (i = t.children[n], i = o && i ? i(r) : i);
  }
  return Array.isArray(i) && (i = be(i), i = i.length === 1 ? i[0] : i, i = i.length === 0 ? void 0 : i), i;
};
function Ur(e) {
  return e && (e.type === Xn || e.type === Ae && e.children.length === 0 || e.type === Kn && e.children.trim() === "");
}
const On = {
  methods: {
    setState: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = typeof t == "function" ? t(this.$data, this.$props) : t;
      if (this.getDerivedStateFromProps) {
        var o = this.getDerivedStateFromProps(Rr(this), I(I({}, this.$data), r));
        if (o === null)
          return;
        r = I(I({}, r), o || {});
      }
      I(this.$data, r), this._.isMounted && this.$forceUpdate(), at(function() {
        n && n();
      });
    },
    __emit: function() {
      var t = [].slice.call(arguments, 0), n = t[0];
      n = "on".concat(n[0].toUpperCase()).concat(n.substring(1));
      var r = this.$props[n] || this.$attrs[n];
      if (t.length && r)
        if (Array.isArray(r))
          for (var o = 0, i = r.length; o < i; o++)
            r[o].apply(r, _e(t.slice(1)));
        else
          r.apply(void 0, _e(t.slice(1)));
    }
  }
};
var qr = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}, Hr = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = I(t ? {
    appear: !0,
    appearActiveClass: "".concat(t),
    appearToClass: "".concat(t, "-appear ").concat(t, "-appear-active"),
    enterFromClass: "".concat(t, "-appear ").concat(t, "-enter ").concat(t, "-appear-prepare ").concat(t, "-enter-prepare"),
    enterActiveClass: "".concat(t),
    enterToClass: "".concat(t, "-enter ").concat(t, "-appear ").concat(t, "-appear-active ").concat(t, "-enter-active"),
    leaveActiveClass: "".concat(t, " ").concat(t, "-leave"),
    leaveToClass: "".concat(t, "-leave-active")
  } : {
    css: !1
  }, n);
  return r;
}, xn = er;
process.env.NODE_ENV === "test" && (G({
  name: "TransitionForTest",
  inheritAttrs: !1,
  setup: function(t, n) {
    var r = n.slots, o = n.attrs, i = ln();
    return tr(function() {
      var a = i.subTree.children[0];
      if (a && a.dirs && a.dirs[0]) {
        var s = a.dirs[0].value, c = a.dirs[0].oldValue;
        !s && s !== c && at(function() {
          o.onAfterLeave && o.onAfterLeave(i.vnode.el);
        });
      }
    }), function() {
      var a;
      return (a = r.default) === null || a === void 0 ? void 0 : a.call(r);
    };
  }
}), xn = G({
  name: "TransitionGroupForTest",
  inheritAttrs: !1,
  props: ["tag", "class"],
  setup: function(t, n) {
    var r = n.slots;
    return function() {
      var o, i = t.tag, a = qr(t, ["tag"]), s = ((o = r.default) === null || o === void 0 ? void 0 : o.call(r)) || [];
      return i ? S(i, a, {
        default: function() {
          return [s];
        }
      }) : s;
    };
  }
}));
function E(e, t) {
  Wr(e) && (e = "100%");
  var n = Gr(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Wr(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Gr(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Qr(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function fe(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Le(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Yr(e, t, n) {
  return {
    r: E(e, 255) * 255,
    g: E(t, 255) * 255,
    b: E(n, 255) * 255
  };
}
function De(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Jr(e, t, n) {
  var r, o, i;
  if (e = E(e, 360), t = E(t, 100), n = E(n, 100), t === 0)
    o = n, i = n, r = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - a;
    r = De(s, a, e + 1 / 3), o = De(s, a, e), i = De(s, a, e - 1 / 3);
  }
  return { r: r * 255, g: o * 255, b: i * 255 };
}
function Zr(e, t, n) {
  e = E(e, 255), t = E(t, 255), n = E(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), i = 0, a = r, s = r - o, c = r === 0 ? 0 : s / r;
  if (r === o)
    i = 0;
  else {
    switch (r) {
      case e:
        i = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / s + 2;
        break;
      case n:
        i = (e - t) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: c, v: a };
}
function Xr(e, t, n) {
  e = E(e, 360) * 6, t = E(t, 100), n = E(n, 100);
  var r = Math.floor(e), o = e - r, i = n * (1 - t), a = n * (1 - o * t), s = n * (1 - (1 - o) * t), c = r % 6, u = [n, a, i, i, s, n][c], l = [s, n, n, a, i, i][c], f = [i, i, s, n, n, a][c];
  return { r: u * 255, g: l * 255, b: f * 255 };
}
function Kr(e, t, n, r) {
  var o = [
    Le(Math.round(e).toString(16)),
    Le(Math.round(t).toString(16)),
    Le(Math.round(n).toString(16))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function It(e) {
  return T(e) / 255;
}
function T(e) {
  return parseInt(e, 16);
}
var kt = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function ee(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, o = null, i = null, a = !1, s = !1;
  return typeof e == "string" && (e = no(e)), typeof e == "object" && (L(e.r) && L(e.g) && L(e.b) ? (t = Yr(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : L(e.h) && L(e.s) && L(e.v) ? (r = fe(e.s), o = fe(e.v), t = Xr(e.h, r, o), a = !0, s = "hsv") : L(e.h) && L(e.s) && L(e.l) && (r = fe(e.s), i = fe(e.l), t = Jr(e.h, r, i), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Qr(n), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var eo = "[-\\+]?\\d+%?", to = "[-\\+]?\\d*\\.\\d+%?", B = "(?:".concat(to, ")|(?:").concat(eo, ")"), Be = "[\\s|\\(]+(".concat(B, ")[,|\\s]+(").concat(B, ")[,|\\s]+(").concat(B, ")\\s*\\)?"), Ve = "[\\s|\\(]+(".concat(B, ")[,|\\s]+(").concat(B, ")[,|\\s]+(").concat(B, ")[,|\\s]+(").concat(B, ")\\s*\\)?"), F = {
  CSS_UNIT: new RegExp(B),
  rgb: new RegExp("rgb" + Be),
  rgba: new RegExp("rgba" + Ve),
  hsl: new RegExp("hsl" + Be),
  hsla: new RegExp("hsla" + Ve),
  hsv: new RegExp("hsv" + Be),
  hsva: new RegExp("hsva" + Ve),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function no(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (kt[e])
    e = kt[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = F.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = F.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = F.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = F.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = F.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = F.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = F.hex8.exec(e), n ? {
    r: T(n[1]),
    g: T(n[2]),
    b: T(n[3]),
    a: It(n[4]),
    format: t ? "name" : "hex8"
  } : (n = F.hex6.exec(e), n ? {
    r: T(n[1]),
    g: T(n[2]),
    b: T(n[3]),
    format: t ? "name" : "hex"
  } : (n = F.hex4.exec(e), n ? {
    r: T(n[1] + n[1]),
    g: T(n[2] + n[2]),
    b: T(n[3] + n[3]),
    a: It(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = F.hex3.exec(e), n ? {
    r: T(n[1] + n[1]),
    g: T(n[2] + n[2]),
    b: T(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function L(e) {
  return Boolean(F.CSS_UNIT.exec(String(e)));
}
var de = 2, At = 0.16, ro = 0.05, oo = 0.05, io = 0.15, Tn = 5, jn = 4, ao = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function Et(e) {
  var t = e.r, n = e.g, r = e.b, o = Zr(t, n, r);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function pe(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(Kr(t, n, r, !1));
}
function so(e, t, n) {
  var r = n / 100, o = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return o;
}
function Ft(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - de * t : Math.round(e.h) + de * t : r = n ? Math.round(e.h) + de * t : Math.round(e.h) - de * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function $t(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - At * t : t === jn ? r = e.s + At : r = e.s + ro * t, r > 1 && (r = 1), n && t === Tn && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function Mt(e, t, n) {
  var r;
  return n ? r = e.v + oo * t : r = e.v - io * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function Ye(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = ee(e), o = Tn; o > 0; o -= 1) {
    var i = Et(r), a = pe(ee({
      h: Ft(i, o, !0),
      s: $t(i, o, !0),
      v: Mt(i, o, !0)
    }));
    n.push(a);
  }
  n.push(pe(r));
  for (var s = 1; s <= jn; s += 1) {
    var c = Et(r), u = pe(ee({
      h: Ft(c, s),
      s: $t(c, s),
      v: Mt(c, s)
    }));
    n.push(u);
  }
  return t.theme === "dark" ? ao.map(function(l) {
    var f = l.index, d = l.opacity, y = pe(so(ee(t.backgroundColor || "#141414"), ee(n[f]), d * 100));
    return y;
  }) : n;
}
var ze = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Re = {}, Ue = {};
Object.keys(ze).forEach(function(e) {
  Re[e] = Ye(ze[e]), Re[e].primary = Re[e][5], Ue[e] = Ye(ze[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Ue[e].primary = Ue[e][5];
});
var Nt = [], te = [], co = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
function uo() {
  var e = document.createElement("style");
  return e.setAttribute("type", "text/css"), e;
}
function lo(e, t) {
  if (t = t || {}, e === void 0)
    throw new Error(co);
  var n = t.prepend === !0 ? "prepend" : "append", r = t.container !== void 0 ? t.container : document.querySelector("head"), o = Nt.indexOf(r);
  o === -1 && (o = Nt.push(r) - 1, te[o] = {});
  var i;
  return te[o] !== void 0 && te[o][n] !== void 0 ? i = te[o][n] : (i = te[o][n] = uo(), n === "prepend" ? r.insertBefore(i, r.childNodes[0]) : r.appendChild(i)), e.charCodeAt(0) === 65279 && (e = e.substr(1, e.length)), i.styleSheet ? i.styleSheet.cssText += e : i.textContent += e, i;
}
function Lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      fo(e, o, n[o]);
    });
  }
  return e;
}
function fo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function po(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function ho(e, t) {
  po(e, "[@ant-design/icons-vue] ".concat(t));
}
function Dt(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Je(e, t, n) {
  return n ? xe(e.tag, Lt({
    key: t
  }, n, e.attrs), (e.children || []).map(function(r, o) {
    return Je(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : xe(e.tag, Lt({
    key: t
  }, e.attrs), (e.children || []).map(function(r, o) {
    return Je(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function _n(e) {
  return Ye(e)[0];
}
function Pn(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var go = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, Bt = !1, mo = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : go;
  at(function() {
    Bt || (typeof window < "u" && window.document && window.document.documentElement && lo(t, {
      prepend: !0
    }), Bt = !0);
  });
}, yo = ["icon", "primaryColor", "secondaryColor"];
function vo(e, t) {
  if (e == null)
    return {};
  var n = bo(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]));
  }
  return n;
}
function bo(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Co(e, o, n[o]);
    });
  }
  return e;
}
function Co(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var re = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function wo(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  re.primaryColor = t, re.secondaryColor = n || _n(t), re.calculated = !!n;
}
function So() {
  return Ce({}, re);
}
var J = function(t, n) {
  var r = Ce({}, t, n.attrs), o = r.icon, i = r.primaryColor, a = r.secondaryColor, s = vo(r, yo), c = re;
  if (i && (c = {
    primaryColor: i,
    secondaryColor: a || _n(i)
  }), mo(), ho(Dt(o), "icon should be icon definiton, but got ".concat(o)), !Dt(o))
    return null;
  var u = o;
  return u && typeof u.icon == "function" && (u = Ce({}, u, {
    icon: u.icon(c.primaryColor, c.secondaryColor)
  })), Je(u.icon, "svg-".concat(u.name), Ce({}, s, {
    "data-icon": u.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
J.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
J.inheritAttrs = !1;
J.displayName = "IconBase";
J.getTwoToneColors = So;
J.setTwoToneColors = wo;
const ct = J;
function Oo(e, t) {
  return _o(e) || jo(e, t) || To(e, t) || xo();
}
function xo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function To(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Vt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Vt(e, t);
  }
}
function Vt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function jo(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, i = !1, a, s;
    try {
      for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0)
        ;
    } catch (c) {
      i = !0, s = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return r;
  }
}
function _o(e) {
  if (Array.isArray(e))
    return e;
}
function In(e) {
  var t = Pn(e), n = Oo(t, 2), r = n[0], o = n[1];
  return ct.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function Po() {
  var e = ct.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Io = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function ko(e, t) {
  return $o(e) || Fo(e, t) || Eo(e, t) || Ao();
}
function Ao() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Eo(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return zt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return zt(e, t);
  }
}
function zt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Fo(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, i = !1, a, s;
    try {
      for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0)
        ;
    } catch (c) {
      i = !0, s = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return r;
  }
}
function $o(e) {
  if (Array.isArray(e))
    return e;
}
function Rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Ze(e, o, n[o]);
    });
  }
  return e;
}
function Ze(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Mo(e, t) {
  if (e == null)
    return {};
  var n = No(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]));
  }
  return n;
}
function No(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
In("#1890ff");
var Z = function(t, n) {
  var r, o = Rt({}, t, n.attrs), i = o.class, a = o.icon, s = o.spin, c = o.rotate, u = o.tabindex, l = o.twoToneColor, f = o.onClick, d = Mo(o, Io), y = (r = {
    anticon: !0
  }, Ze(r, "anticon-".concat(a.name), Boolean(a.name)), Ze(r, i, i), r), m = s === "" || !!s || a.name === "loading" ? "anticon-spin" : "", v = u;
  v === void 0 && f && (v = -1, d.tabindex = v);
  var g = c ? {
    msTransform: "rotate(".concat(c, "deg)"),
    transform: "rotate(".concat(c, "deg)")
  } : void 0, w = Pn(l), b = ko(w, 2), D = b[0], V = b[1];
  return S("span", Rt({
    role: "img",
    "aria-label": a.name
  }, d, {
    onClick: f,
    class: y
  }), [S(ct, {
    class: m,
    icon: a,
    primaryColor: D,
    secondaryColor: V,
    style: g
  }, null)]);
};
Z.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: String
};
Z.displayName = "AntdIcon";
Z.inheritAttrs = !1;
Z.getTwoToneColor = Po;
Z.setTwoToneColor = In;
const ce = Z;
var Lo = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const Do = Lo;
function Ut(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Bo(e, o, n[o]);
    });
  }
  return e;
}
function Bo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ut = function(t, n) {
  var r = Ut({}, t, n.attrs);
  return S(ce, Ut({}, r, {
    icon: Do
  }), null);
};
ut.displayName = "LoadingOutlined";
ut.inheritAttrs = !1;
const Vo = ut;
var zo = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, name: "close-circle", theme: "filled" };
const Ro = zo;
function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Uo(e, o, n[o]);
    });
  }
  return e;
}
function Uo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var lt = function(t, n) {
  var r = qt({}, t, n.attrs);
  return S(ce, qt({}, r, {
    icon: Ro
  }), null);
};
lt.displayName = "CloseCircleFilled";
lt.inheritAttrs = !1;
const qo = lt;
var Ho = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const Wo = Ho;
function Ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Go(e, o, n[o]);
    });
  }
  return e;
}
function Go(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ft = function(t, n) {
  var r = Ht({}, t, n.attrs);
  return S(ce, Ht({}, r, {
    icon: Wo
  }), null);
};
ft.displayName = "CheckCircleFilled";
ft.inheritAttrs = !1;
const Qo = ft;
var Yo = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const Jo = Yo;
function Wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Zo(e, o, n[o]);
    });
  }
  return e;
}
function Zo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var dt = function(t, n) {
  var r = Wt({}, t, n.attrs);
  return S(ce, Wt({}, r, {
    icon: Jo
  }), null);
};
dt.displayName = "ExclamationCircleFilled";
dt.inheritAttrs = !1;
const Xo = dt;
var Ko = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
const ei = Ko;
function Gt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      ti(e, o, n[o]);
    });
  }
  return e;
}
function ti(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var pt = function(t, n) {
  var r = Gt({}, t, n.attrs);
  return S(ce, Gt({}, r, {
    icon: ei
  }), null);
};
pt.displayName = "InfoCircleFilled";
pt.inheritAttrs = !1;
const ni = pt;
function ri() {
  var e = [].slice.call(arguments, 0);
  return e.length === 1 ? e[0] : function() {
    for (var n = 0; n < e.length; n++)
      e[n] && e[n].apply && e[n].apply(this, arguments);
  };
}
const oi = {
  mixins: [On],
  props: {
    duration: _.number.def(1.5),
    closable: _.looseBool,
    prefixCls: _.string,
    update: _.looseBool,
    closeIcon: _.any,
    onClose: _.func
  },
  watch: {
    duration: function() {
      this.restartCloseTimer();
    }
  },
  mounted: function() {
    this.startCloseTimer();
  },
  updated: function() {
    this.update && this.restartCloseTimer();
  },
  beforeUnmount: function() {
    this.clearCloseTimer(), this.willDestroy = !0;
  },
  methods: {
    close: function(t) {
      t && t.stopPropagation(), this.clearCloseTimer(), this.__emit("close");
    },
    startCloseTimer: function() {
      var t = this;
      this.clearCloseTimer(), !this.willDestroy && this.duration && (this.closeTimer = setTimeout(function() {
        t.close();
      }, this.duration * 1e3));
    },
    clearCloseTimer: function() {
      this.closeTimer && (clearTimeout(this.closeTimer), this.closeTimer = null);
    },
    restartCloseTimer: function() {
      this.clearCloseTimer(), this.startCloseTimer();
    }
  },
  render: function() {
    var t, n = this.prefixCls, r = this.closable, o = this.clearCloseTimer, i = this.startCloseTimer, a = this.close, s = this.$attrs, c = "".concat(n, "-notice"), u = (t = {}, Te(t, "".concat(c), 1), Te(t, "".concat(c, "-closable"), r), t), l = Sn(this, "closeIcon");
    return S("div", {
      class: u,
      style: s.style || {
        right: "50%"
      },
      onMouseenter: o,
      onMouseleave: i
    }, [S("div", {
      class: "".concat(c, "-content")
    }, [zr(this)]), r ? S("a", {
      tabindex: "0",
      onClick: a,
      class: "".concat(c, "-close")
    }, [l || S("span", {
      class: "".concat(c, "-close-x")
    }, null)]) : null]);
  }
};
var ii = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function ai() {
}
var si = 0, ci = Date.now();
function ui() {
  return "rcNotification_".concat(ci, "_").concat(si++);
}
var Xe = G({
  mixins: [On],
  props: {
    prefixCls: _.string.def("rc-notification"),
    transitionName: _.string,
    animation: _.oneOfType([_.string, _.object]).def("fade"),
    maxCount: _.number,
    closeIcon: _.any
  },
  data: function() {
    return {
      notices: []
    };
  },
  methods: {
    getTransitionName: function() {
      var t = this.$props, n = t.transitionName;
      return !n && t.animation && (n = "".concat(t.prefixCls, "-").concat(t.animation)), n;
    },
    add: function(t) {
      var n = t.key = t.key || ui(), r = this.$props.maxCount;
      this.setState(function(o) {
        var i = o.notices, a = i.map(function(c) {
          return c.key;
        }).indexOf(n), s = i.concat();
        return a !== -1 ? s.splice(a, 1, t) : (r && i.length >= r && (t.updateKey = s[0].updateKey || s[0].key, s.shift()), s.push(t)), {
          notices: s
        };
      });
    },
    remove: function(t) {
      this.setState(function(n) {
        return {
          notices: n.notices.filter(function(r) {
            return r.key !== t;
          })
        };
      });
    }
  },
  render: function() {
    var t = this, n = this.prefixCls, r = this.notices, o = this.remove, i = this.getTransitionName, a = this.$attrs, s = Hr(i()), c = r.map(function(l, f) {
      var d = Boolean(f === r.length - 1 && l.updateKey), y = l.updateKey ? l.updateKey : l.key, m = l.content, v = l.duration, g = l.closable, w = l.onClose, b = l.style, D = l.class, V = ri(o.bind(t, l.key), w), p = {
        prefixCls: n,
        duration: v,
        closable: g,
        update: d,
        closeIcon: Sn(t, "closeIcon"),
        onClose: V,
        onClick: l.onClick || ai,
        style: b,
        class: D,
        key: y
      };
      return S(oi, p, {
        default: function() {
          return [typeof m == "function" ? m() : m];
        }
      });
    }), u = Te({}, n, 1);
    return S("div", {
      class: u,
      style: a.style || {
        top: "65px",
        left: "50%"
      }
    }, [S(xn, cr({
      tag: "span"
    }, s), {
      default: function() {
        return [c];
      }
    })]);
  }
});
Xe.newInstance = function(t, n) {
  var r = t || {}, o = r.getContainer, i = r.style, a = r.class, s = ii(r, ["getContainer", "style", "class"]), c = document.createElement("div");
  if (o) {
    var u = o();
    u.appendChild(c);
  } else
    document.body.appendChild(c);
  var l = nr({
    mounted: function() {
      var d = this;
      this.$nextTick(function() {
        n({
          notice: function(m) {
            d.$refs.notification.add(m);
          },
          removeNotice: function(m) {
            d.$refs.notification.remove(m);
          },
          component: d,
          destroy: function() {
            l.unmount(c), c.parentNode && c.parentNode.removeChild(c);
          }
        });
      });
    },
    render: function() {
      var d = I(I({}, s), {
        ref: "notification",
        style: i,
        class: a
      });
      return S(Xe, d, null);
    }
  });
  l.mount(c);
};
const li = Xe;
var kn = 3, An, P, fi = 1, Pe = "ant-message", En = "move-up", Fn = function() {
  return document.body;
}, $n;
function di(e) {
  if (P) {
    e(P);
    return;
  }
  li.newInstance({
    prefixCls: Pe,
    transitionName: En,
    style: {
      top: An
    },
    getContainer: Fn,
    maxCount: $n
  }, function(t) {
    if (P) {
      e(P);
      return;
    }
    P = t, e(t);
  });
}
var pi = {
  info: ni,
  success: Qo,
  error: qo,
  warning: Xo,
  loading: Vo
};
function hi(e) {
  var t = e.duration !== void 0 ? e.duration : kn, n = pi[e.type], r = n ? S(n, null, null) : "", o = e.key || fi++, i = new Promise(function(s) {
    var c = function() {
      return typeof e.onClose == "function" && e.onClose(), s(!0);
    };
    di(function(u) {
      u.notice({
        key: o,
        duration: t,
        style: e.style || {},
        class: e.class,
        content: function() {
          return S("div", {
            class: "".concat(Pe, "-custom-content").concat(e.type ? " ".concat(Pe, "-").concat(e.type) : "")
          }, [e.icon || r, S("span", null, [e.content])]);
        },
        onClose: c
      });
    });
  }), a = function() {
    P && P.removeNotice(o);
  };
  return a.then = function(s, c) {
    return i.then(s, c);
  }, a.promise = i, a;
}
function gi(e) {
  return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
}
var W = {
  open: hi,
  config: function(t) {
    t.top !== void 0 && (An = t.top, P = null), t.duration !== void 0 && (kn = t.duration), t.prefixCls !== void 0 && (Pe = t.prefixCls), t.getContainer !== void 0 && (Fn = t.getContainer), t.transitionName !== void 0 && (En = t.transitionName, P = null), t.maxCount !== void 0 && ($n = t.maxCount, P = null);
  },
  destroy: function() {
    P && (P.destroy(), P = null);
  }
};
["success", "info", "warning", "error", "loading"].forEach(function(e) {
  W[e] = function(t, n, r) {
    return gi(t) ? W.open(I(I({}, t), {
      type: e
    })) : (typeof n == "function" && (r = n, n = void 0), W.open({
      content: t,
      duration: n,
      type: e,
      onClose: r
    }));
  };
});
W.warn = W.warning;
const mi = W;
const Mn = (e, t) => {
  const n = e;
  return n.install = (r) => {
    r.component(n.name || n.displayName, e), t && (r.config.globalProperties[t] = e);
  }, e;
}, Nn = "change";
var Qt;
const yi = typeof window < "u", vi = (e) => typeof e == "number";
yi && ((Qt = window == null ? void 0 : window.navigator) == null ? void 0 : Qt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
const bi = {
  [Nn]: (e, t) => [e, t].every(vi)
}, Ci = {
  name: "ScSteps",
  inheritAttrs: !1
}, wi = /* @__PURE__ */ G({
  ...Ci,
  props: {
    space: null,
    direction: { default: "horizontal" },
    active: null,
    alignCenter: { type: Boolean },
    simple: { type: Boolean, default: !1 },
    finishStatus: { default: "finish" },
    processStatus: { default: "process" }
  },
  emits: bi,
  setup(e, { emit: t }) {
    const n = e, r = me([]);
    We(r, () => {
      r.value.forEach((i, a) => {
        i.setIndex(a);
      });
    }), rr("ScSteps", { props: n, steps: r }), We(() => n.active, (i, a) => {
      t(Nn, i, a);
    });
    const o = A(() => {
      const i = ["scSteps", "scSteps-" + n.direction];
      return n.simple && i.push("scSteps-simple"), i;
    });
    return (i, a) => ($(), H("div", {
      class: j(C(o))
    }, [
      ye(i.$slots, "default")
    ], 2));
  }
}), oe = /^[a-z0-9]+(-[a-z0-9]+)*$/, Fe = (e, t, n, r = "") => {
  const o = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    r = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const s = o.pop(), c = o.pop(), u = {
      provider: o.length > 0 ? o[0] : r,
      prefix: c,
      name: s
    };
    return t && !we(u) ? null : u;
  }
  const i = o[0], a = i.split("-");
  if (a.length > 1) {
    const s = {
      provider: r,
      prefix: a.shift(),
      name: a.join("-")
    };
    return t && !we(s) ? null : s;
  }
  if (n && r === "") {
    const s = {
      provider: r,
      prefix: "",
      name: i
    };
    return t && !we(s, n) ? null : s;
  }
  return null;
}, we = (e, t) => e ? !!((e.provider === "" || e.provider.match(oe)) && (t && e.prefix === "" || e.prefix.match(oe)) && e.name.match(oe)) : !1, Ln = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Ie = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), $e = Object.freeze({
  ...Ln,
  ...Ie
}), Ke = Object.freeze({
  ...$e,
  body: "",
  hidden: !1
});
function Si(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Yt(e, t) {
  const n = Si(e, t);
  for (const r in Ke)
    r in Ie ? r in e && !(r in n) && (n[r] = Ie[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
  return n;
}
function Oi(e, t) {
  const n = e.icons, r = e.aliases || {}, o = /* @__PURE__ */ Object.create(null);
  function i(a) {
    if (n[a])
      return o[a] = [];
    if (!(a in o)) {
      o[a] = null;
      const s = r[a] && r[a].parent, c = s && i(s);
      c && (o[a] = [s].concat(c));
    }
    return o[a];
  }
  return (t || Object.keys(n).concat(Object.keys(r))).forEach(i), o;
}
function xi(e, t, n) {
  const r = e.icons, o = e.aliases || {};
  let i = {};
  function a(s) {
    i = Yt(
      r[s] || o[s],
      i
    );
  }
  return a(t), n.forEach(a), Yt(e, i);
}
function Dn(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), n.push(o);
  });
  const r = Oi(e);
  for (const o in r) {
    const i = r[o];
    i && (t(o, xi(e, o, i)), n.push(o));
  }
  return n;
}
const Ti = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Ln
};
function qe(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function Bn(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !qe(e, Ti))
    return null;
  const n = t.icons;
  for (const o in n) {
    const i = n[o];
    if (!o.match(oe) || typeof i.body != "string" || !qe(
      i,
      Ke
    ))
      return null;
  }
  const r = t.aliases || {};
  for (const o in r) {
    const i = r[o], a = i.parent;
    if (!o.match(oe) || typeof a != "string" || !n[a] && !r[a] || !qe(
      i,
      Ke
    ))
      return null;
  }
  return t;
}
const Jt = /* @__PURE__ */ Object.create(null);
function ji(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function U(e, t) {
  const n = Jt[e] || (Jt[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = ji(e, t));
}
function ht(e, t) {
  return Bn(t) ? Dn(t, (n, r) => {
    r ? e.icons[n] = r : e.missing.add(n);
  }) : [];
}
function _i(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let ae = !1;
function Vn(e) {
  return typeof e == "boolean" && (ae = e), ae;
}
function Pi(e) {
  const t = typeof e == "string" ? Fe(e, !0, ae) : e;
  if (t) {
    const n = U(t.provider, t.prefix), r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function Ii(e, t) {
  const n = Fe(e, !0, ae);
  if (!n)
    return !1;
  const r = U(n.provider, n.prefix);
  return _i(r, n.name, t);
}
function ki(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), ae && !t && !e.prefix) {
    let o = !1;
    return Bn(e) && (e.prefix = "", Dn(e, (i, a) => {
      a && Ii(i, a) && (o = !0);
    })), o;
  }
  const n = e.prefix;
  if (!we({
    provider: t,
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = U(t, n);
  return !!ht(r, e);
}
const zn = Object.freeze({
  width: null,
  height: null
}), Rn = Object.freeze({
  ...zn,
  ...Ie
}), Ai = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Ei = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Zt(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const r = e.split(Ai);
  if (r === null || !r.length)
    return e;
  const o = [];
  let i = r.shift(), a = Ei.test(i);
  for (; ; ) {
    if (a) {
      const s = parseFloat(i);
      isNaN(s) ? o.push(i) : o.push(Math.ceil(s * t * n) / n);
    } else
      o.push(i);
    if (i = r.shift(), i === void 0)
      return o.join("");
    a = !a;
  }
}
function Fi(e, t) {
  const n = {
    ...$e,
    ...e
  }, r = {
    ...Rn,
    ...t
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let i = n.body;
  [n, r].forEach((y) => {
    const m = [], v = y.hFlip, g = y.vFlip;
    let w = y.rotate;
    v ? g ? w += 2 : (m.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), m.push("scale(-1 1)"), o.top = o.left = 0) : g && (m.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), m.push("scale(1 -1)"), o.top = o.left = 0);
    let b;
    switch (w < 0 && (w -= Math.floor(w / 4) * 4), w = w % 4, w) {
      case 1:
        b = o.height / 2 + o.top, m.unshift(
          "rotate(90 " + b.toString() + " " + b.toString() + ")"
        );
        break;
      case 2:
        m.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        b = o.width / 2 + o.left, m.unshift(
          "rotate(-90 " + b.toString() + " " + b.toString() + ")"
        );
        break;
    }
    w % 2 === 1 && (o.left !== o.top && (b = o.left, o.left = o.top, o.top = b), o.width !== o.height && (b = o.width, o.width = o.height, o.height = b)), m.length && (i = '<g transform="' + m.join(" ") + '">' + i + "</g>");
  });
  const a = r.width, s = r.height, c = o.width, u = o.height;
  let l, f;
  return a === null ? (f = s === null ? "1em" : s === "auto" ? u : s, l = Zt(f, c / u)) : (l = a === "auto" ? c : a, f = s === null ? Zt(l, u / c) : s === "auto" ? u : s), {
    attributes: {
      width: l.toString(),
      height: f.toString(),
      viewBox: o.left.toString() + " " + o.top.toString() + " " + c.toString() + " " + u.toString()
    },
    body: i
  };
}
const $i = /\sid="(\S+)"/g, Mi = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Ni = 0;
function Li(e, t = Mi) {
  const n = [];
  let r;
  for (; r = $i.exec(e); )
    n.push(r[1]);
  return n.length && n.forEach((o) => {
    const i = typeof t == "function" ? t(o) : t + (Ni++).toString(), a = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
      "$1" + i + "$3"
    );
  }), e;
}
const et = /* @__PURE__ */ Object.create(null);
function Di(e, t) {
  et[e] = t;
}
function tt(e) {
  return et[e] || et[""];
}
function gt(e) {
  let t;
  if (typeof e.resources == "string")
    t = [e.resources];
  else if (t = e.resources, !(t instanceof Array) || !t.length)
    return null;
  return {
    resources: t,
    path: e.path || "/",
    maxURL: e.maxURL || 500,
    rotate: e.rotate || 750,
    timeout: e.timeout || 5e3,
    random: e.random === !0,
    index: e.index || 0,
    dataAfterTimeout: e.dataAfterTimeout !== !1
  };
}
const mt = /* @__PURE__ */ Object.create(null), ne = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Se = [];
for (; ne.length > 0; )
  ne.length === 1 || Math.random() > 0.5 ? Se.push(ne.shift()) : Se.push(ne.pop());
mt[""] = gt({
  resources: ["https://api.iconify.design"].concat(Se)
});
function Bi(e, t) {
  const n = gt(t);
  return n === null ? !1 : (mt[e] = n, !0);
}
function yt(e) {
  return mt[e];
}
const Vi = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Xt = Vi();
function zi(e, t) {
  const n = yt(e);
  if (!n)
    return 0;
  let r;
  if (!n.maxURL)
    r = 0;
  else {
    let o = 0;
    n.resources.forEach((a) => {
      o = Math.max(o, a.length);
    });
    const i = t + ".json?icons=";
    r = n.maxURL - o - n.path.length - i.length;
  }
  return r;
}
function Ri(e) {
  return e === 404;
}
const Ui = (e, t, n) => {
  const r = [], o = zi(e, t), i = "icons";
  let a = {
    type: i,
    provider: e,
    prefix: t,
    icons: []
  }, s = 0;
  return n.forEach((c, u) => {
    s += c.length + 1, s >= o && u > 0 && (r.push(a), a = {
      type: i,
      provider: e,
      prefix: t,
      icons: []
    }, s = c.length), a.icons.push(c);
  }), r.push(a), r;
};
function qi(e) {
  if (typeof e == "string") {
    const t = yt(e);
    if (t)
      return t.path;
  }
  return "/";
}
const Hi = (e, t, n) => {
  if (!Xt) {
    n("abort", 424);
    return;
  }
  let r = qi(t.provider);
  switch (t.type) {
    case "icons": {
      const i = t.prefix, s = t.icons.join(","), c = new URLSearchParams({
        icons: s
      });
      r += i + ".json?" + c.toString();
      break;
    }
    case "custom": {
      const i = t.uri;
      r += i.slice(0, 1) === "/" ? i.slice(1) : i;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let o = 503;
  Xt(e + r).then((i) => {
    const a = i.status;
    if (a !== 200) {
      setTimeout(() => {
        n(Ri(a) ? "abort" : "next", a);
      });
      return;
    }
    return o = 501, i.json();
  }).then((i) => {
    if (typeof i != "object" || i === null) {
      setTimeout(() => {
        n("next", o);
      });
      return;
    }
    setTimeout(() => {
      n("success", i);
    });
  }).catch(() => {
    n("next", o);
  });
}, Wi = {
  prepare: Ui,
  send: Hi
};
function Gi(e) {
  const t = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  e.sort((o, i) => o.provider !== i.provider ? o.provider.localeCompare(i.provider) : o.prefix !== i.prefix ? o.prefix.localeCompare(i.prefix) : o.name.localeCompare(i.name));
  let r = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((o) => {
    if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider)
      return;
    r = o;
    const i = o.provider, a = o.prefix, s = o.name, c = n[i] || (n[i] = /* @__PURE__ */ Object.create(null)), u = c[a] || (c[a] = U(i, a));
    let l;
    s in u.icons ? l = t.loaded : a === "" || u.missing.has(s) ? l = t.missing : l = t.pending;
    const f = {
      provider: i,
      prefix: a,
      name: s
    };
    l.push(f);
  }), t;
}
function Un(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function Qi(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let n = !1;
    const r = e.provider, o = e.prefix;
    t.forEach((i) => {
      const a = i.icons, s = a.pending.length;
      a.pending = a.pending.filter((c) => {
        if (c.prefix !== o)
          return !0;
        const u = c.name;
        if (e.icons[u])
          a.loaded.push({
            provider: r,
            prefix: o,
            name: u
          });
        else if (e.missing.has(u))
          a.missing.push({
            provider: r,
            prefix: o,
            name: u
          });
        else
          return n = !0, !0;
        return !1;
      }), a.pending.length !== s && (n || Un([e], i.id), i.callback(
        a.loaded.slice(0),
        a.missing.slice(0),
        a.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let Yi = 0;
function Ji(e, t, n) {
  const r = Yi++, o = Un.bind(null, n, r);
  if (!t.pending.length)
    return o;
  const i = {
    id: r,
    icons: t,
    callback: e,
    abort: o
  };
  return n.forEach((a) => {
    (a.loaderCallbacks || (a.loaderCallbacks = [])).push(i);
  }), o;
}
function Zi(e, t = !0, n = !1) {
  const r = [];
  return e.forEach((o) => {
    const i = typeof o == "string" ? Fe(o, t, n) : o;
    i && r.push(i);
  }), r;
}
var Xi = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Ki(e, t, n, r) {
  const o = e.resources.length, i = e.random ? Math.floor(Math.random() * o) : e.index;
  let a;
  if (e.random) {
    let h = e.resources.slice(0);
    for (a = []; h.length > 1; ) {
      const O = Math.floor(Math.random() * h.length);
      a.push(h[O]), h = h.slice(0, O).concat(h.slice(O + 1));
    }
    a = a.concat(h);
  } else
    a = e.resources.slice(i).concat(e.resources.slice(0, i));
  const s = Date.now();
  let c = "pending", u = 0, l, f = null, d = [], y = [];
  typeof r == "function" && y.push(r);
  function m() {
    f && (clearTimeout(f), f = null);
  }
  function v() {
    c === "pending" && (c = "aborted"), m(), d.forEach((h) => {
      h.status === "pending" && (h.status = "aborted");
    }), d = [];
  }
  function g(h, O) {
    O && (y = []), typeof h == "function" && y.push(h);
  }
  function w() {
    return {
      startTime: s,
      payload: t,
      status: c,
      queriesSent: u,
      queriesPending: d.length,
      subscribe: g,
      abort: v
    };
  }
  function b() {
    c = "failed", y.forEach((h) => {
      h(void 0, l);
    });
  }
  function D() {
    d.forEach((h) => {
      h.status === "pending" && (h.status = "aborted");
    }), d = [];
  }
  function V(h, O, X) {
    const ue = O !== "success";
    switch (d = d.filter((z) => z !== h), c) {
      case "pending":
        break;
      case "failed":
        if (ue || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (O === "abort") {
      l = X, b();
      return;
    }
    if (ue) {
      l = X, d.length || (a.length ? p() : b());
      return;
    }
    if (m(), D(), !e.random) {
      const z = e.resources.indexOf(h.resource);
      z !== -1 && z !== e.index && (e.index = z);
    }
    c = "completed", y.forEach((z) => {
      z(X);
    });
  }
  function p() {
    if (c !== "pending")
      return;
    m();
    const h = a.shift();
    if (h === void 0) {
      if (d.length) {
        f = setTimeout(() => {
          m(), c === "pending" && (D(), b());
        }, e.timeout);
        return;
      }
      b();
      return;
    }
    const O = {
      status: "pending",
      resource: h,
      callback: (X, ue) => {
        V(O, X, ue);
      }
    };
    d.push(O), u++, f = setTimeout(p, e.rotate), n(h, t, O.callback);
  }
  return setTimeout(p), w;
}
function qn(e) {
  const t = {
    ...Xi,
    ...e
  };
  let n = [];
  function r() {
    n = n.filter((s) => s().status === "pending");
  }
  function o(s, c, u) {
    const l = Ki(
      t,
      s,
      c,
      (f, d) => {
        r(), u && u(f, d);
      }
    );
    return n.push(l), l;
  }
  function i(s) {
    return n.find((c) => s(c)) || null;
  }
  return {
    query: o,
    find: i,
    setIndex: (s) => {
      t.index = s;
    },
    getIndex: () => t.index,
    cleanup: r
  };
}
function Kt() {
}
const He = /* @__PURE__ */ Object.create(null);
function ea(e) {
  if (!He[e]) {
    const t = yt(e);
    if (!t)
      return;
    const n = qn(t), r = {
      config: t,
      redundancy: n
    };
    He[e] = r;
  }
  return He[e];
}
function ta(e, t, n) {
  let r, o;
  if (typeof e == "string") {
    const i = tt(e);
    if (!i)
      return n(void 0, 424), Kt;
    o = i.send;
    const a = ea(e);
    a && (r = a.redundancy);
  } else {
    const i = gt(e);
    if (i) {
      r = qn(i);
      const a = e.resources ? e.resources[0] : "", s = tt(a);
      s && (o = s.send);
    }
  }
  return !r || !o ? (n(void 0, 424), Kt) : r.query(t, o, n)().abort;
}
const en = "iconify2", se = "iconify", Hn = se + "-count", tn = se + "-version", Wn = 36e5, na = 168;
function nt(e, t) {
  try {
    return e.getItem(t);
  } catch {
  }
}
function vt(e, t, n) {
  try {
    return e.setItem(t, n), !0;
  } catch {
  }
}
function nn(e, t) {
  try {
    e.removeItem(t);
  } catch {
  }
}
function rt(e, t) {
  return vt(e, Hn, t.toString());
}
function ot(e) {
  return parseInt(nt(e, Hn)) || 0;
}
const Me = {
  local: !0,
  session: !0
}, Gn = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let bt = !1;
function ra(e) {
  bt = e;
}
let he = typeof window > "u" ? {} : window;
function Qn(e) {
  const t = e + "Storage";
  try {
    if (he && he[t] && typeof he[t].length == "number")
      return he[t];
  } catch {
  }
  Me[e] = !1;
}
function Yn(e, t) {
  const n = Qn(e);
  if (!n)
    return;
  const r = nt(n, tn);
  if (r !== en) {
    if (r) {
      const s = ot(n);
      for (let c = 0; c < s; c++)
        nn(n, se + c.toString());
    }
    vt(n, tn, en), rt(n, 0);
    return;
  }
  const o = Math.floor(Date.now() / Wn) - na, i = (s) => {
    const c = se + s.toString(), u = nt(n, c);
    if (typeof u == "string") {
      try {
        const l = JSON.parse(u);
        if (typeof l == "object" && typeof l.cached == "number" && l.cached > o && typeof l.provider == "string" && typeof l.data == "object" && typeof l.data.prefix == "string" && t(l, s))
          return !0;
      } catch {
      }
      nn(n, c);
    }
  };
  let a = ot(n);
  for (let s = a - 1; s >= 0; s--)
    i(s) || (s === a - 1 ? (a--, rt(n, a)) : Gn[e].add(s));
}
function Jn() {
  if (!bt) {
    ra(!0);
    for (const e in Me)
      Yn(e, (t) => {
        const n = t.data, r = t.provider, o = n.prefix, i = U(
          r,
          o
        );
        if (!ht(i, n).length)
          return !1;
        const a = n.lastModified || -1;
        return i.lastModifiedCached = i.lastModifiedCached ? Math.min(i.lastModifiedCached, a) : a, !0;
      });
  }
}
function oa(e, t) {
  const n = e.lastModifiedCached;
  if (n && n >= t)
    return n === t;
  if (e.lastModifiedCached = t, n)
    for (const r in Me)
      Yn(r, (o) => {
        const i = o.data;
        return o.provider !== e.provider || i.prefix !== e.prefix || i.lastModified === t;
      });
  return !0;
}
function ia(e, t) {
  bt || Jn();
  function n(r) {
    let o;
    if (!Me[r] || !(o = Qn(r)))
      return;
    const i = Gn[r];
    let a;
    if (i.size)
      i.delete(a = Array.from(i).shift());
    else if (a = ot(o), !rt(o, a + 1))
      return;
    const s = {
      cached: Math.floor(Date.now() / Wn),
      provider: e.provider,
      data: t
    };
    return vt(
      o,
      se + a.toString(),
      JSON.stringify(s)
    );
  }
  t.lastModified && !oa(e, t.lastModified) || !Object.keys(t.icons).length || (t.not_found && (t = Object.assign({}, t), delete t.not_found), n("local") || n("session"));
}
function rn() {
}
function aa(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, Qi(e);
  }));
}
function sa(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = e, o = e.iconsToLoad;
    delete e.iconsToLoad;
    let i;
    if (!o || !(i = tt(n)))
      return;
    i.prepare(n, r, o).forEach((s) => {
      ta(n, s, (c, u) => {
        if (typeof c != "object") {
          if (u !== 404)
            return;
          s.icons.forEach((l) => {
            e.missing.add(l);
          });
        } else
          try {
            const l = ht(
              e,
              c
            );
            if (!l.length)
              return;
            const f = e.pendingIcons;
            f && l.forEach((d) => {
              f.delete(d);
            }), ia(e, c);
          } catch (l) {
            console.error(l);
          }
        aa(e);
      });
    });
  }));
}
const ca = (e, t) => {
  const n = Zi(e, !0, Vn()), r = Gi(n);
  if (!r.pending.length) {
    let c = !0;
    return t && setTimeout(() => {
      c && t(
        r.loaded,
        r.missing,
        r.pending,
        rn
      );
    }), () => {
      c = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), i = [];
  let a, s;
  return r.pending.forEach((c) => {
    const { provider: u, prefix: l } = c;
    if (l === s && u === a)
      return;
    a = u, s = l, i.push(U(u, l));
    const f = o[u] || (o[u] = /* @__PURE__ */ Object.create(null));
    f[l] || (f[l] = []);
  }), r.pending.forEach((c) => {
    const { provider: u, prefix: l, name: f } = c, d = U(u, l), y = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    y.has(f) || (y.add(f), o[u][l].push(f));
  }), i.forEach((c) => {
    const { provider: u, prefix: l } = c;
    o[u][l].length && sa(c, o[u][l]);
  }), t ? Ji(t, r, i) : rn;
};
function ua(e, t) {
  const n = {
    ...e
  };
  for (const r in t) {
    const o = t[r], i = typeof o;
    r in zn ? (o === null || o && (i === "string" || i === "number")) && (n[r] = o) : i === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
  }
  return n;
}
const la = /[\s,]+/;
function fa(e, t) {
  t.split(la).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function da(e, t = 0) {
  const n = e.replace(/^-?[0-9.]*/, "");
  function r(o) {
    for (; o < 0; )
      o += 4;
    return o % 4;
  }
  if (n === "") {
    const o = parseInt(e);
    return isNaN(o) ? 0 : r(o);
  } else if (n !== e) {
    let o = 0;
    switch (n) {
      case "%":
        o = 25;
        break;
      case "deg":
        o = 90;
    }
    if (o) {
      let i = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(i) ? 0 : (i = i / o, i % 1 === 0 ? r(i) : 0);
    }
  }
  return t;
}
function pa(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t)
    n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function ha(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function ga(e) {
  return 'url("data:image/svg+xml,' + ha(e) + '")';
}
const on = {
  ...Rn,
  inline: !1
}, ma = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, ya = {
  display: "inline-block"
}, it = {
  backgroundColor: "currentColor"
}, Zn = {
  backgroundColor: "transparent"
}, an = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, sn = {
  webkitMask: it,
  mask: it,
  background: Zn
};
for (const e in sn) {
  const t = sn[e];
  for (const n in an)
    t[e + n] = an[n];
}
const Oe = {};
["horizontal", "vertical"].forEach((e) => {
  const t = e.slice(0, 1) + "Flip";
  Oe[e + "-flip"] = t, Oe[e.slice(0, 1) + "-flip"] = t, Oe[e + "Flip"] = t;
});
function cn(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const un = (e, t) => {
  const n = ua(on, t), r = { ...ma }, o = t.mode || "svg", i = {}, a = t.style, s = typeof a == "object" && !(a instanceof Array) ? a : {};
  for (let v in t) {
    const g = t[v];
    if (g !== void 0)
      switch (v) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[v] = g === !0 || g === "true" || g === 1;
          break;
        case "flip":
          typeof g == "string" && fa(n, g);
          break;
        case "color":
          i.color = g;
          break;
        case "rotate":
          typeof g == "string" ? n[v] = da(g) : typeof g == "number" && (n[v] = g);
          break;
        case "ariaHidden":
        case "aria-hidden":
          g !== !0 && g !== "true" && delete r["aria-hidden"];
          break;
        default: {
          const w = Oe[v];
          w ? (g === !0 || g === "true" || g === 1) && (n[w] = !0) : on[v] === void 0 && (r[v] = g);
        }
      }
  }
  const c = Fi(e, n), u = c.attributes;
  if (n.inline && (i.verticalAlign = "-0.125em"), o === "svg") {
    r.style = {
      ...i,
      ...s
    }, Object.assign(r, u);
    let v = 0, g = t.id;
    return typeof g == "string" && (g = g.replace(/-/g, "_")), r.innerHTML = Li(c.body, g ? () => g + "ID" + v++ : "iconifyVue"), xe("svg", r);
  }
  const { body: l, width: f, height: d } = e, y = o === "mask" || (o === "bg" ? !1 : l.indexOf("currentColor") !== -1), m = pa(l, {
    ...u,
    width: f + "",
    height: d + ""
  });
  return r.style = {
    ...i,
    "--svg": ga(m),
    width: cn(u.width),
    height: cn(u.height),
    ...ya,
    ...y ? it : Zn,
    ...s
  }, xe("span", r);
};
Vn(!0);
Di("", Wi);
if (typeof document < "u" && typeof window < "u") {
  Jn();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((r) => {
      try {
        (typeof r != "object" || r === null || r instanceof Array || typeof r.icons != "object" || typeof r.prefix != "string" || !ki(r)) && console.error(n);
      } catch {
        console.error(n);
      }
    });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == "object" && t !== null)
      for (let n in t) {
        const r = "IconifyProviders[" + n + "] is invalid.";
        try {
          const o = t[n];
          if (typeof o != "object" || !o || o.resources === void 0)
            continue;
          Bi(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
const va = {
  ...$e,
  body: ""
}, ge = G({
  inheritAttrs: !1,
  data() {
    return {
      iconMounted: !1,
      counter: 0
    };
  },
  mounted() {
    this._name = "", this._loadingIcon = null, this.iconMounted = !0;
  },
  unmounted() {
    this.abortLoading();
  },
  methods: {
    abortLoading() {
      this._loadingIcon && (this._loadingIcon.abort(), this._loadingIcon = null);
    },
    getIcon(e, t) {
      if (typeof e == "object" && e !== null && typeof e.body == "string")
        return this._name = "", this.abortLoading(), {
          data: e
        };
      let n;
      if (typeof e != "string" || (n = Fe(e, !1, !0)) === null)
        return this.abortLoading(), null;
      const r = Pi(n);
      if (!r)
        return (!this._loadingIcon || this._loadingIcon.name !== e) && (this.abortLoading(), this._name = "", r !== null && (this._loadingIcon = {
          name: e,
          abort: ca([n], () => {
            this.counter++;
          })
        })), null;
      this.abortLoading(), this._name !== e && (this._name = e, t && t(e));
      const o = ["iconify"];
      return n.prefix !== "" && o.push("iconify--" + n.prefix), n.provider !== "" && o.push("iconify--" + n.provider), { data: r, classes: o };
    }
  },
  render() {
    this.counter;
    const e = this.$attrs, t = this.iconMounted ? this.getIcon(e.icon, e.onLoad) : null;
    if (!t)
      return un(va, e);
    let n = e;
    return t.classes && (n = {
      ...e,
      class: (typeof e.class == "string" ? e.class + " " : "") + t.classes.join(" ")
    }), un({
      ...$e,
      ...t.data
    }, n);
  }
}), ba = {
  key: 0,
  class: "scStep-line"
}, Ca = {
  key: 3,
  class: /* @__PURE__ */ j(["scStep__icon-inner"])
}, wa = {
  key: 0,
  class: /* @__PURE__ */ j(["scStep-arrow"])
}, Sa = {
  name: "ScStep"
}, Oa = /* @__PURE__ */ G({
  ...Sa,
  props: {
    title: { default: "" },
    description: { default: "" },
    status: { default: "" },
    icon: null
  },
  setup(e) {
    const t = e, n = me(-1), r = me({}), o = me(""), i = or("ScSteps"), a = ln();
    ir(() => {
      We(
        [
          () => i.props.active,
          () => i.props.processStatus,
          () => i.props.finishStatus
        ],
        ([p]) => {
          D(p);
        },
        { immediate: !0 }
      );
    }), ar(() => {
      i.steps.value = i.steps.value.filter(
        (p) => p.uid !== (a == null ? void 0 : a.uid)
      );
    });
    const s = A(() => t.status || o.value), c = A(() => {
      const p = i.steps.value[n.value - 1];
      return p ? p.currentStatus : "wait";
    }), u = A(() => i.props.alignCenter), l = A(() => i.props.direction === "vertical"), f = A(() => i.props.simple), d = A(() => i.steps.value.length), y = A(() => {
      var p;
      return ((p = i.steps.value[d.value - 1]) == null ? void 0 : p.uid) === (a == null ? void 0 : a.uid);
    }), m = A(() => f.value ? "" : i.props.space), v = A(() => {
      const p = ["scStep"];
      return i.props.simple ? p.push("simple") : p.push("is-" + i.props.direction), y && !m && !u && p.push("is-flex"), u.value && !l.value && !f.value && p.push("is-center"), p;
    }), g = A(() => {
      const p = {
        flexBasis: typeof m.value == "number" ? `${m.value}px` : m.value ? m.value : `${100 / (d.value - (u.value ? 0 : 1))}%`
      };
      return l.value || y.value && (p.maxWidth = `${100 / d.value}%`), p;
    }), w = (p) => {
      n.value = p;
    }, b = (p) => {
      let h = 100;
      const O = {};
      O.transitionDelay = `${150 * n.value}ms`, p === i.props.processStatus ? h = 0 : p === "wait" && (h = 0, O.transitionDelay = `${-150 * n.value}ms`), O.borderWidth = h && !f.value ? "1px" : 0, O[i.props.direction === "vertical" ? "height" : "width"] = `${h}%`, r.value = O;
    }, D = (p) => {
      p > n.value ? o.value = i.props.finishStatus : p === n.value && c.value !== "error" ? o.value = i.props.processStatus : o.value = "wait";
      const h = i.steps.value[n.value - 1];
      h && h.calcProgress(o.value);
    }, V = sr({
      uid: A(() => a == null ? void 0 : a.uid),
      currentStatus: s,
      setIndex: w,
      calcProgress: b
    });
    return i.steps.value = [...i.steps.value, V], (p, h) => ($(), H("div", {
      class: j(C(v)),
      style: Ct(C(g))
    }, [
      K("div", {
        class: j(["scStep-head", C(s) ? "is-" + C(s) + " is-status" : ""])
      }, [
        C(f) ? wt("", !0) : ($(), H("div", ba, [
          K("i", {
            class: "scStep-line-inner",
            style: Ct(r.value)
          }, null, 4)
        ])),
        K("div", {
          class: j(["scStep-icon", t.icon || p.$slots.icon ? "is-icon" : "is-text"])
        }, [
          ye(p.$slots, "icon", {}, () => [
            t.icon ? ($(), le(C(ge), {
              key: 0,
              class: j(["scStep__icon-inner"]),
              icon: t.icon
            }, null, 8, ["icon"])) : C(s) === "success" ? ($(), le(C(ge), {
              key: 1,
              class: j(["scStep__icon-inner", "success"]),
              icon: "ep:success-filled"
            })) : C(s) === "error" ? ($(), le(C(ge), {
              key: 2,
              class: j(["scStep__icon-inner", "error"]),
              icon: "fluent-mdl2:status-error-full"
            })) : C(f) ? C(f) ? ($(), le(C(ge), {
              key: 4,
              class: j(["scStep__icon-inner", "error"]),
              icon: "ep:success-filled"
            })) : wt("", !0) : ($(), H("div", Ca, Ne(n.value + 1), 1))
          ])
        ], 2)
      ], 2),
      K("div", {
        class: j(["scStep-main", C(s) ? "is-" + C(s) + " is-status" : ""])
      }, [
        K("div", {
          class: j(["scStep-title", C(s) ? "is-" + C(s) + " is-status" : ""])
        }, [
          ye(p.$slots, "title", {}, () => [
            St(Ne(e.title), 1)
          ])
        ], 2),
        C(f) ? ($(), H("div", wa)) : ($(), H("div", {
          key: 1,
          class: j(["scStep-description", C(s) ? "is-" + C(s) + " is-status" : ""])
        }, [
          ye(p.$slots, "description", {}, () => [
            St(Ne(e.description), 1)
          ])
        ], 2))
      ], 2)
    ], 6));
  }
}), xa = Mn(wi), Ta = Mn(Oa);
mi.config({
  duration: 2,
  maxCount: 1
});
const ja = [
  xa,
  Ta
], _a = (e) => {
  ja.forEach((t) => {
    e.use(t);
  });
}, Ia = {
  version: "0.0.20",
  install: _a
};
export {
  Ta as ScStep,
  xa as ScSteps,
  Ia as default,
  _a as install
};
