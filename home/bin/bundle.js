// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var v = class {
    constructor(){}
    lineAt(e) {
        if (e < 0 || e > this.length) throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
        return this.lineInner(e, !1, 1, 0);
    }
    line(e) {
        if (e < 1 || e > this.lines) throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
        return this.lineInner(e, !0, 1, 0);
    }
    replace(e, t, n) {
        let i = [];
        return this.decompose(0, e, i, 2), n.length && n.decompose(0, n.length, i, 3), this.decompose(t, this.length, i, 1), b.from(i, this.length - (t - e) + n.length);
    }
    append(e) {
        return this.replace(this.length, this.length, e);
    }
    slice(e, t = this.length) {
        let n = [];
        return this.decompose(e, t, n, 0), b.from(n, t - e);
    }
    eq(e) {
        if (e == this) return !0;
        if (e.length != this.length || e.lines != this.lines) return !1;
        let t = this.scanIdentical(e, 1), n = this.length - this.scanIdentical(e, -1), i = new C(this), s = new C(e);
        for(let r = t, h = t;;){
            if (i.next(r), s.next(r), r = 0, i.lineBreak != s.lineBreak || i.done != s.done || i.value != s.value) return !1;
            if (h += i.value.length, i.done || h >= n) return !0;
        }
    }
    iter(e = 1) {
        return new C(this, e);
    }
    iterRange(e, t = this.length) {
        return new te(this, e, t);
    }
    iterLines(e, t) {
        let n;
        if (e == null) n = this.iter();
        else {
            t == null && (t = this.lines + 1);
            let i = this.line(e).from;
            n = this.iterRange(i, Math.max(i, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
        }
        return new ne(n);
    }
    toString() {
        return this.sliceString(0);
    }
    toJSON() {
        let e = [];
        return this.flatten(e), e;
    }
    static of(e) {
        if (e.length == 0) throw new RangeError("A document must have at least one line");
        return e.length == 1 && !e[0] ? v.empty : e.length <= 32 ? new m(e) : b.from(m.split(e, []));
    }
}, m = class extends v {
    constructor(e, t = je(e)){
        super(), this.text = e, this.length = t;
    }
    get lines() {
        return this.text.length;
    }
    get children() {
        return null;
    }
    lineInner(e, t, n, i) {
        for(let s = 0;; s++){
            let r = this.text[s], h = i + r.length;
            if ((t ? n : h) >= e) return new fe(i, h, n, r);
            i = h + 1, n++;
        }
    }
    decompose(e, t, n, i) {
        let s = e <= 0 && t >= this.length ? this : new m(Ie(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
        if (i & 1) {
            let r = n.pop(), h = ee(s.text, r.text.slice(), 0, s.length);
            if (h.length <= 32) n.push(new m(h, r.length + s.length));
            else {
                let o = h.length >> 1;
                n.push(new m(h.slice(0, o)), new m(h.slice(o)));
            }
        } else n.push(s);
    }
    replace(e, t, n) {
        if (!(n instanceof m)) return super.replace(e, t, n);
        let i = ee(this.text, ee(n.text, Ie(this.text, 0, e)), t), s = this.length + n.length - (t - e);
        return i.length <= 32 ? new m(i, s) : b.from(m.split(i, []), s);
    }
    sliceString(e, t = this.length, n = `
`) {
        let i = "";
        for(let s = 0, r = 0; s <= t && r < this.text.length; r++){
            let h = this.text[r], o = s + h.length;
            s > e && r && (i += n), e < o && t > s && (i += h.slice(Math.max(0, e - s), t - s)), s = o + 1;
        }
        return i;
    }
    flatten(e) {
        for (let t of this.text)e.push(t);
    }
    scanIdentical() {
        return 0;
    }
    static split(e, t) {
        let n = [], i = -1;
        for (let s of e)n.push(s), i += s.length + 1, n.length == 32 && (t.push(new m(n, i)), n = [], i = -1);
        return i > -1 && t.push(new m(n, i)), t;
    }
}, b = class extends v {
    constructor(e, t){
        super(), this.children = e, this.length = t, this.lines = 0;
        for (let n of e)this.lines += n.lines;
    }
    lineInner(e, t, n, i) {
        for(let s = 0;; s++){
            let r = this.children[s], h = i + r.length, o = n + r.lines - 1;
            if ((t ? o : h) >= e) return r.lineInner(e, t, n, i);
            i = h + 1, n = o + 1;
        }
    }
    decompose(e, t, n, i) {
        for(let s = 0, r = 0; r <= t && s < this.children.length; s++){
            let h = this.children[s], o = r + h.length;
            if (e <= o && t >= r) {
                let a = i & ((r <= e ? 1 : 0) | (o >= t ? 2 : 0));
                r >= e && o <= t && !a ? n.push(h) : h.decompose(e - r, t - r, n, a);
            }
            r = o + 1;
        }
    }
    replace(e, t, n) {
        if (n.lines < this.lines) for(let i = 0, s = 0; i < this.children.length; i++){
            let r = this.children[i], h = s + r.length;
            if (e >= s && t <= h) {
                let o = r.replace(e - s, t - s, n), a = this.lines - r.lines + o.lines;
                if (o.lines < a >> 5 - 1 && o.lines > a >> 5 + 1) {
                    let f = this.children.slice();
                    return f[i] = o, new b(f, this.length - (t - e) + n.length);
                }
                return super.replace(s, h, o);
            }
            s = h + 1;
        }
        return super.replace(e, t, n);
    }
    sliceString(e, t = this.length, n = `
`) {
        let i = "";
        for(let s = 0, r = 0; s < this.children.length && r <= t; s++){
            let h = this.children[s], o = r + h.length;
            r > e && s && (i += n), e < o && t > r && (i += h.sliceString(e - r, t - r, n)), r = o + 1;
        }
        return i;
    }
    flatten(e) {
        for (let t of this.children)t.flatten(e);
    }
    scanIdentical(e, t) {
        if (!(e instanceof b)) return 0;
        let n = 0, [i, s, r, h] = t > 0 ? [
            0,
            0,
            this.children.length,
            e.children.length
        ] : [
            this.children.length - 1,
            e.children.length - 1,
            -1,
            -1
        ];
        for(;; i += t, s += t){
            if (i == r || s == h) return n;
            let o = this.children[i], a = e.children[s];
            if (o != a) return n + o.scanIdentical(a, t);
            n += o.length + 1;
        }
    }
    static from(e, t = e.reduce((n, i)=>n + i.length + 1, -1)) {
        let n = 0;
        for (let d of e)n += d.lines;
        if (n < 32) {
            let d1 = [];
            for (let p of e)p.flatten(d1);
            return new m(d1, t);
        }
        let i = Math.max(32, n >> 5), s = i << 1, r = i >> 1, h = [], o = 0, a = -1, f = [];
        function u(d) {
            let p;
            if (d.lines > s && d instanceof b) for (let E of d.children)u(E);
            else d.lines > r && (o > r || !o) ? (c(), h.push(d)) : d instanceof m && o && (p = f[f.length - 1]) instanceof m && d.lines + p.lines <= 32 ? (o += d.lines, a += d.length + 1, f[f.length - 1] = new m(p.text.concat(d.text), p.length + 1 + d.length)) : (o + d.lines > i && c(), o += d.lines, a += d.length + 1, f.push(d));
        }
        function c() {
            o != 0 && (h.push(f.length == 1 ? f[0] : b.from(f, a)), a = -1, o = f.length = 0);
        }
        for (let d2 of e)u(d2);
        return c(), h.length == 1 ? h[0] : new b(h, t);
    }
};
v.empty = new m([
    ""
], 0);
function je(l) {
    let e = -1;
    for (let t of l)e += t.length + 1;
    return e;
}
function ee(l, e, t = 0, n = 1e9) {
    for(let i = 0, s = 0, r = !0; s < l.length && i <= n; s++){
        let h = l[s], o = i + h.length;
        o >= t && (o > n && (h = h.slice(0, n - i)), i < t && (h = h.slice(t - i)), r ? (e[e.length - 1] += h, r = !1) : e.push(h)), i = o + 1;
    }
    return e;
}
function Ie(l, e, t) {
    return ee(l, [
        ""
    ], e, t);
}
var C = class {
    constructor(e, t = 1){
        this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [
            e
        ], this.offsets = [
            t > 0 ? 1 : (e instanceof m ? e.text.length : e.children.length) << 1
        ];
    }
    nextInner(e, t) {
        for(this.done = this.lineBreak = !1;;){
            let n = this.nodes.length - 1, i = this.nodes[n], s = this.offsets[n], r = s >> 1, h = i instanceof m ? i.text.length : i.children.length;
            if (r == (t > 0 ? h : 0)) {
                if (n == 0) return this.done = !0, this.value = "", this;
                t > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
            } else if ((s & 1) == (t > 0 ? 0 : 1)) {
                if (this.offsets[n] += t, e == 0) return this.lineBreak = !0, this.value = `
`, this;
                e--;
            } else if (i instanceof m) {
                let o = i.text[r + (t < 0 ? -1 : 0)];
                if (this.offsets[n] += t, o.length > Math.max(0, e)) return this.value = e == 0 ? o : t > 0 ? o.slice(e) : o.slice(0, o.length - e), this;
                e -= o.length;
            } else {
                let o1 = i.children[r + (t < 0 ? -1 : 0)];
                e > o1.length ? (e -= o1.length, this.offsets[n] += t) : (t < 0 && this.offsets[n]--, this.nodes.push(o1), this.offsets.push(t > 0 ? 1 : (o1 instanceof m ? o1.text.length : o1.children.length) << 1));
            }
        }
    }
    next(e = 0) {
        return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
    }
}, te = class {
    constructor(e, t, n){
        this.value = "", this.done = !1, this.cursor = new C(e, t > n ? -1 : 1), this.pos = t > n ? e.length : 0, this.from = Math.min(t, n), this.to = Math.max(t, n);
    }
    nextInner(e, t) {
        if (t < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
        let n = t < 0 ? this.pos - this.from : this.to - this.pos;
        e > n && (e = n), n -= e;
        let { value: i  } = this.cursor.next(e);
        return this.pos += (i.length + e) * t, this.value = i.length <= n ? i : t < 0 ? i.slice(i.length - n) : i.slice(0, n), this.done = !this.value, this;
    }
    next(e = 0) {
        return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
    }
    get lineBreak() {
        return this.cursor.lineBreak && this.value != "";
    }
}, ne = class {
    constructor(e){
        this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
    }
    next(e = 0) {
        let { done: t , lineBreak: n , value: i  } = this.inner.next(e);
        return t ? (this.done = !0, this.value = "") : n ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = i, this.afterBreak = !1), this;
    }
    get lineBreak() {
        return !1;
    }
};
typeof Symbol < "u" && (v.prototype[Symbol.iterator] = function() {
    return this.iter();
}, C.prototype[Symbol.iterator] = te.prototype[Symbol.iterator] = ne.prototype[Symbol.iterator] = function() {
    return this;
});
var fe = class {
    constructor(e, t, n, i){
        this.from = e, this.to = t, this.number = n, this.text = i;
    }
    get length() {
        return this.to - this.from;
    }
}, $ = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((l)=>l ? parseInt(l, 36) : 1);
for(let l = 1; l < $.length; l++)$[l] += $[l - 1];
function Ze(l) {
    for(let e = 1; e < $.length; e += 2)if ($[e] > l) return $[e - 1] <= l;
    return !1;
}
function Ae(l) {
    return l >= 127462 && l <= 127487;
}
var Pe = 8205;
function ie(l, e, t = !0, n = !0) {
    return (t ? Fe : He)(l, e, n);
}
function Fe(l, e, t) {
    if (e == l.length) return e;
    e && Je(l.charCodeAt(e)) && Te(l.charCodeAt(e - 1)) && e--;
    let n = oe(l, e);
    for(e += be(n); e < l.length;){
        let i = oe(l, e);
        if (n == Pe || i == Pe || t && Ze(i)) e += be(i), n = i;
        else if (Ae(i)) {
            let s = 0, r = e - 2;
            for(; r >= 0 && Ae(oe(l, r));)s++, r -= 2;
            if (s % 2 == 0) break;
            e += 2;
        } else break;
    }
    return e;
}
function He(l, e, t) {
    for(; e > 0;){
        let n = Fe(l, e - 2, t);
        if (n < e) return n;
        e--;
    }
    return 0;
}
function Je(l) {
    return l >= 56320 && l < 57344;
}
function Te(l) {
    return l >= 55296 && l < 56320;
}
function oe(l, e) {
    let t = l.charCodeAt(e);
    if (!Te(t) || e + 1 == l.length) return t;
    let n = l.charCodeAt(e + 1);
    return Je(n) ? (t - 55296 << 10) + (n - 56320) + 65536 : t;
}
function rt(l) {
    return l <= 65535 ? String.fromCharCode(l) : (l -= 65536, String.fromCharCode((l >> 10) + 55296, (l & 1023) + 56320));
}
function be(l) {
    return l < 65536 ? 1 : 2;
}
var ue = /\r\n?|\n/, M = function(l) {
    return l[l.Simple = 0] = "Simple", l[l.TrackDel = 1] = "TrackDel", l[l.TrackBefore = 2] = "TrackBefore", l[l.TrackAfter = 3] = "TrackAfter", l;
}(M || (M = {})), O = class {
    constructor(e){
        this.sections = e;
    }
    get length() {
        let e = 0;
        for(let t = 0; t < this.sections.length; t += 2)e += this.sections[t];
        return e;
    }
    get newLength() {
        let e = 0;
        for(let t = 0; t < this.sections.length; t += 2){
            let n = this.sections[t + 1];
            e += n < 0 ? this.sections[t] : n;
        }
        return e;
    }
    get empty() {
        return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
    }
    iterGaps(e) {
        for(let t = 0, n = 0, i = 0; t < this.sections.length;){
            let s = this.sections[t++], r = this.sections[t++];
            r < 0 ? (e(n, i, s), i += s) : i += r, n += s;
        }
    }
    iterChangedRanges(e, t = !1) {
        ce(this, e, t);
    }
    get invertedDesc() {
        let e = [];
        for(let t = 0; t < this.sections.length;){
            let n = this.sections[t++], i = this.sections[t++];
            i < 0 ? e.push(n, i) : e.push(i, n);
        }
        return new O(e);
    }
    composeDesc(e) {
        return this.empty ? e : e.empty ? this : Ce(this, e);
    }
    mapDesc(e, t = !1) {
        return e.empty ? this : de(this, e, t);
    }
    mapPos(e, t = -1, n = M.Simple) {
        let i = 0, s = 0;
        for(let r = 0; r < this.sections.length;){
            let h = this.sections[r++], o = this.sections[r++], a = i + h;
            if (o < 0) {
                if (a > e) return s + (e - i);
                s += h;
            } else {
                if (n != M.Simple && a >= e && (n == M.TrackDel && i < e && a > e || n == M.TrackBefore && i < e || n == M.TrackAfter && a > e)) return null;
                if (a > e || a == e && t < 0 && !h) return e == i || t < 0 ? s : s + o;
                s += o;
            }
            i = a;
        }
        if (e > i) throw new RangeError(`Position ${e} is out of range for changeset of length ${i}`);
        return s;
    }
    touchesRange(e, t = e) {
        for(let n = 0, i = 0; n < this.sections.length && i <= t;){
            let s = this.sections[n++], r = this.sections[n++], h = i + s;
            if (r >= 0 && i <= t && h >= e) return i < e && h > t ? "cover" : !0;
            i = h;
        }
        return !1;
    }
    toString() {
        let e = "";
        for(let t = 0; t < this.sections.length;){
            let n = this.sections[t++], i = this.sections[t++];
            e += (e ? " " : "") + n + (i >= 0 ? ":" + i : "");
        }
        return e;
    }
    toJSON() {
        return this.sections;
    }
    static fromJSON(e) {
        if (!Array.isArray(e) || e.length % 2 || e.some((t)=>typeof t != "number")) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new O(e);
    }
    static create(e) {
        return new O(e);
    }
}, x = class extends O {
    constructor(e, t){
        super(e), this.inserted = t;
    }
    apply(e) {
        if (this.length != e.length) throw new RangeError("Applying change set to a document with the wrong length");
        return ce(this, (t, n, i, s, r)=>e = e.replace(i, i + (n - t), r), !1), e;
    }
    mapDesc(e, t = !1) {
        return de(this, e, t, !0);
    }
    invert(e) {
        let t = this.sections.slice(), n = [];
        for(let i = 0, s = 0; i < t.length; i += 2){
            let r = t[i], h = t[i + 1];
            if (h >= 0) {
                t[i] = h, t[i + 1] = r;
                let o = i >> 1;
                for(; n.length < o;)n.push(v.empty);
                n.push(r ? e.slice(s, s + r) : v.empty);
            }
            s += r;
        }
        return new x(t, n);
    }
    compose(e) {
        return this.empty ? e : e.empty ? this : Ce(this, e, !0);
    }
    map(e, t = !1) {
        return e.empty ? this : de(this, e, t, !0);
    }
    iterChanges(e, t = !1) {
        ce(this, e, t);
    }
    get desc() {
        return O.create(this.sections);
    }
    filter(e) {
        let t = [], n = [], i = [], s = new V(this);
        e: for(let r = 0, h = 0;;){
            let o = r == e.length ? 1e9 : e[r++];
            for(; h < o || h == o && s.len == 0;){
                if (s.done) break e;
                let f = Math.min(s.len, o - h);
                I(i, f, -1);
                let u = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0;
                I(t, f, u), u > 0 && T(n, t, s.text), s.forward(f), h += f;
            }
            let a = e[r++];
            for(; h < a;){
                if (s.done) break e;
                let f1 = Math.min(s.len, a - h);
                I(t, f1, -1), I(i, f1, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0), s.forward(f1), h += f1;
            }
        }
        return {
            changes: new x(t, n),
            filtered: O.create(i)
        };
    }
    toJSON() {
        let e = [];
        for(let t = 0; t < this.sections.length; t += 2){
            let n = this.sections[t], i = this.sections[t + 1];
            i < 0 ? e.push(n) : i == 0 ? e.push([
                n
            ]) : e.push([
                n
            ].concat(this.inserted[t >> 1].toJSON()));
        }
        return e;
    }
    static of(e, t, n) {
        let i = [], s = [], r = 0, h = null;
        function o(f = !1) {
            if (!f && !i.length) return;
            r < t && I(i, t - r, -1);
            let u = new x(i, s);
            h = h ? h.compose(u.map(h)) : u, i = [], s = [], r = 0;
        }
        function a(f) {
            if (Array.isArray(f)) for (let u of f)a(u);
            else if (f instanceof x) {
                if (f.length != t) throw new RangeError(`Mismatched change set length (got ${f.length}, expected ${t})`);
                o(), h = h ? h.compose(f.map(h)) : f;
            } else {
                let { from: u1 , to: c = u1 , insert: d  } = f;
                if (u1 > c || u1 < 0 || c > t) throw new RangeError(`Invalid change range ${u1} to ${c} (in doc of length ${t})`);
                let p = d ? typeof d == "string" ? v.of(d.split(n || ue)) : d : v.empty, E = p.length;
                if (u1 == c && E == 0) return;
                u1 < r && o(), u1 > r && I(i, u1 - r, -1), I(i, c - u1, E), T(s, i, p), r = c;
            }
        }
        return a(e), o(!h), h;
    }
    static empty(e) {
        return new x(e ? [
            e,
            -1
        ] : [], []);
    }
    static fromJSON(e) {
        if (!Array.isArray(e)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let t = [], n = [];
        for(let i = 0; i < e.length; i++){
            let s = e[i];
            if (typeof s == "number") t.push(s, -1);
            else {
                if (!Array.isArray(s) || typeof s[0] != "number" || s.some((r, h)=>h && typeof r != "string")) throw new RangeError("Invalid JSON representation of ChangeSet");
                if (s.length == 1) t.push(s[0], 0);
                else {
                    for(; n.length < i;)n.push(v.empty);
                    n[i] = v.of(s.slice(1)), t.push(s[0], n[i].length);
                }
            }
        }
        return new x(t, n);
    }
    static createSet(e, t) {
        return new x(e, t);
    }
};
function I(l, e, t, n = !1) {
    if (e == 0 && t <= 0) return;
    let i = l.length - 2;
    i >= 0 && t <= 0 && t == l[i + 1] ? l[i] += e : e == 0 && l[i] == 0 ? l[i + 1] += t : n ? (l[i] += e, l[i + 1] += t) : l.push(e, t);
}
function T(l, e, t) {
    if (t.length == 0) return;
    let n = e.length - 2 >> 1;
    if (n < l.length) l[l.length - 1] = l[l.length - 1].append(t);
    else {
        for(; l.length < n;)l.push(v.empty);
        l.push(t);
    }
}
function ce(l, e, t) {
    let n = l.inserted;
    for(let i = 0, s = 0, r = 0; r < l.sections.length;){
        let h = l.sections[r++], o = l.sections[r++];
        if (o < 0) i += h, s += h;
        else {
            let a = i, f = s, u = v.empty;
            for(; a += h, f += o, o && n && (u = u.append(n[r - 2 >> 1])), !(t || r == l.sections.length || l.sections[r + 1] < 0);)h = l.sections[r++], o = l.sections[r++];
            e(i, a, s, f, u), i = a, s = f;
        }
    }
}
function de(l, e, t, n = !1) {
    let i = [], s = n ? [] : null, r = new V(l), h = new V(e);
    for(let o = 0, a = 0;;)if (r.ins == -1) o += r.len, r.next();
    else if (h.ins == -1 && a < o) {
        let f = Math.min(h.len, o - a);
        h.forward(f), I(i, f, -1), a += f;
    } else if (h.ins >= 0 && (r.done || a < o || a == o && (h.len < r.len || h.len == r.len && !t))) {
        for(I(i, h.ins, -1); o > a && !r.done && o + r.len < a + h.len;)o += r.len, r.next();
        a += h.len, h.next();
    } else if (r.ins >= 0) {
        let f1 = 0, u = o + r.len;
        for(;;)if (h.ins >= 0 && a > o && a + h.len < u) f1 += h.ins, a += h.len, h.next();
        else if (h.ins == -1 && a < u) {
            let c = Math.min(h.len, u - a);
            f1 += c, h.forward(c), a += c;
        } else break;
        I(i, f1, r.ins), s && T(s, i, r.text), o = u, r.next();
    } else {
        if (r.done && h.done) return s ? x.createSet(i, s) : O.create(i);
        throw new Error("Mismatched change set lengths");
    }
}
function Ce(l, e, t = !1) {
    let n = [], i = t ? [] : null, s = new V(l), r = new V(e);
    for(let h = !1;;){
        if (s.done && r.done) return i ? x.createSet(n, i) : O.create(n);
        if (s.ins == 0) I(n, s.len, 0, h), s.next();
        else if (r.len == 0 && !r.done) I(n, 0, r.ins, h), i && T(i, n, r.text), r.next();
        else {
            if (s.done || r.done) throw new Error("Mismatched change set lengths");
            {
                let o = Math.min(s.len2, r.len), a = n.length;
                if (s.ins == -1) {
                    let f = r.ins == -1 ? -1 : r.off ? 0 : r.ins;
                    I(n, o, f, h), i && f && T(i, n, r.text);
                } else r.ins == -1 ? (I(n, s.off ? 0 : s.len, o, h), i && T(i, n, s.textBit(o))) : (I(n, s.off ? 0 : s.len, r.off ? 0 : r.ins, h), i && !r.off && T(i, n, r.text));
                h = (s.ins > o || r.ins >= 0 && r.len > o) && (h || n.length > a), s.forward2(o), r.forward(o);
            }
        }
    }
}
var V = class {
    constructor(e){
        this.set = e, this.i = 0, this.next();
    }
    next() {
        let { sections: e  } = this.set;
        this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
    }
    get done() {
        return this.ins == -2;
    }
    get len2() {
        return this.ins < 0 ? this.len : this.ins;
    }
    get text() {
        let { inserted: e  } = this.set, t = this.i - 2 >> 1;
        return t >= e.length ? v.empty : e[t];
    }
    textBit(e) {
        let { inserted: t  } = this.set, n = this.i - 2 >> 1;
        return n >= t.length && !e ? v.empty : t[n].slice(this.off, e == null ? void 0 : this.off + e);
    }
    forward(e) {
        e == this.len ? this.next() : (this.len -= e, this.off += e);
    }
    forward2(e) {
        this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
    }
}, B = class {
    constructor(e, t, n){
        this.from = e, this.to = t, this.flags = n;
    }
    get anchor() {
        return this.flags & 16 ? this.to : this.from;
    }
    get head() {
        return this.flags & 16 ? this.from : this.to;
    }
    get empty() {
        return this.from == this.to;
    }
    get assoc() {
        return this.flags & 4 ? -1 : this.flags & 8 ? 1 : 0;
    }
    get bidiLevel() {
        let e = this.flags & 3;
        return e == 3 ? null : e;
    }
    get goalColumn() {
        let e = this.flags >> 5;
        return e == 33554431 ? void 0 : e;
    }
    map(e, t = -1) {
        let n, i;
        return this.empty ? n = i = e.mapPos(this.from, t) : (n = e.mapPos(this.from, 1), i = e.mapPos(this.to, -1)), n == this.from && i == this.to ? this : new B(n, i, this.flags);
    }
    extend(e, t = e) {
        if (e <= this.anchor && t >= this.anchor) return g.range(e, t);
        let n = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
        return g.range(this.anchor, n);
    }
    eq(e) {
        return this.anchor == e.anchor && this.head == e.head;
    }
    toJSON() {
        return {
            anchor: this.anchor,
            head: this.head
        };
    }
    static fromJSON(e) {
        if (!e || typeof e.anchor != "number" || typeof e.head != "number") throw new RangeError("Invalid JSON representation for SelectionRange");
        return g.range(e.anchor, e.head);
    }
    static create(e, t, n) {
        return new B(e, t, n);
    }
}, g = class {
    constructor(e, t){
        this.ranges = e, this.mainIndex = t;
    }
    map(e, t = -1) {
        return e.empty ? this : g.create(this.ranges.map((n)=>n.map(e, t)), this.mainIndex);
    }
    eq(e) {
        if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex) return !1;
        for(let t = 0; t < this.ranges.length; t++)if (!this.ranges[t].eq(e.ranges[t])) return !1;
        return !0;
    }
    get main() {
        return this.ranges[this.mainIndex];
    }
    asSingle() {
        return this.ranges.length == 1 ? this : new g([
            this.main
        ], 0);
    }
    addRange(e, t = !0) {
        return g.create([
            e
        ].concat(this.ranges), t ? 0 : this.mainIndex + 1);
    }
    replaceRange(e, t = this.mainIndex) {
        let n = this.ranges.slice();
        return n[t] = e, g.create(n, this.mainIndex);
    }
    toJSON() {
        return {
            ranges: this.ranges.map((e)=>e.toJSON()),
            main: this.mainIndex
        };
    }
    static fromJSON(e) {
        if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new g(e.ranges.map((t)=>B.fromJSON(t)), e.main);
    }
    static single(e, t = e) {
        return new g([
            g.range(e, t)
        ], 0);
    }
    static create(e, t = 0) {
        if (e.length == 0) throw new RangeError("A selection needs at least one range");
        for(let n = 0, i = 0; i < e.length; i++){
            let s = e[i];
            if (s.empty ? s.from <= n : s.from < n) return g.normalized(e.slice(), t);
            n = s.to;
        }
        return new g(e, t);
    }
    static cursor(e, t = 0, n, i) {
        return B.create(e, e, (t == 0 ? 0 : t < 0 ? 4 : 8) | (n == null ? 3 : Math.min(2, n)) | (i ?? 33554431) << 5);
    }
    static range(e, t, n) {
        let i = (n ?? 33554431) << 5;
        return t < e ? B.create(t, e, 16 | i | 8) : B.create(e, t, i | (t > e ? 4 : 0));
    }
    static normalized(e, t = 0) {
        let n = e[t];
        e.sort((i, s)=>i.from - s.from), t = e.indexOf(n);
        for(let i = 1; i < e.length; i++){
            let s = e[i], r = e[i - 1];
            if (s.empty ? s.from <= r.to : s.from < r.to) {
                let h = r.from, o = Math.max(s.to, r.to);
                i <= t && t--, e.splice(--i, 2, s.anchor > s.head ? g.range(o, h) : g.range(h, o));
            }
        }
        return new g(e, t);
    }
};
function Ve(l, e) {
    for (let t of l.ranges)if (t.to > e) throw new RangeError("Selection points outside of document");
}
var ye = 0, A = class {
    constructor(e, t, n, i, s){
        this.combine = e, this.compareInput = t, this.compare = n, this.isStatic = i, this.extensions = s, this.id = ye++, this.default = e([]);
    }
    static define(e = {}) {
        return new A(e.combine || ((t)=>t), e.compareInput || ((t, n)=>t === n), e.compare || (e.combine ? (t, n)=>t === n : Se), !!e.static, e.enables);
    }
    of(e) {
        return new z([], this, 0, e);
    }
    compute(e, t) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new z(e, this, 1, t);
    }
    computeN(e, t) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new z(e, this, 2, t);
    }
    from(e, t) {
        return t || (t = (n)=>n), this.compute([
            e
        ], (n)=>t(n.field(e)));
    }
};
function Se(l, e) {
    return l == e || l.length == e.length && l.every((t, n)=>t === e[n]);
}
var z = class {
    constructor(e, t, n, i){
        this.dependencies = e, this.facet = t, this.type = n, this.value = i, this.id = ye++;
    }
    dynamicSlot(e) {
        var t;
        let n = this.value, i = this.facet.compareInput, s = this.id, r = e[s] >> 1, h = this.type == 2, o = !1, a = !1, f = [];
        for (let u of this.dependencies)u == "doc" ? o = !0 : u == "selection" ? a = !0 : (((t = e[u.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && f.push(e[u.id]);
        return {
            create (u) {
                return u.values[r] = n(u), 1;
            },
            update (u, c) {
                if (o && c.docChanged || a && (c.docChanged || c.selection) || ge(u, f)) {
                    let d = n(u);
                    if (h ? !Oe(d, u.values[r], i) : !i(d, u.values[r])) return u.values[r] = d, 1;
                }
                return 0;
            },
            reconfigure: (u, c)=>{
                let d = n(u), p = c.config.address[s];
                if (p != null) {
                    let E = re(c, p);
                    if (this.dependencies.every((k)=>k instanceof A ? c.facet(k) === u.facet(k) : k instanceof F ? c.field(k, !1) == u.field(k, !1) : !0) || (h ? Oe(d, E, i) : i(d, E))) return u.values[r] = E, 0;
                }
                return u.values[r] = d, 1;
            }
        };
    }
};
function Oe(l, e, t) {
    if (l.length != e.length) return !1;
    for(let n = 0; n < l.length; n++)if (!t(l[n], e[n])) return !1;
    return !0;
}
function ge(l, e) {
    let t = !1;
    for (let n of e)K(l, n) & 1 && (t = !0);
    return t;
}
function Ke(l, e, t) {
    let n = t.map((o)=>l[o.id]), i = t.map((o)=>o.type), s = n.filter((o)=>!(o & 1)), r = l[e.id] >> 1;
    function h(o) {
        let a = [];
        for(let f = 0; f < n.length; f++){
            let u = re(o, n[f]);
            if (i[f] == 2) for (let c of u)a.push(c);
            else a.push(u);
        }
        return e.combine(a);
    }
    return {
        create (o) {
            for (let a of n)K(o, a);
            return o.values[r] = h(o), 1;
        },
        update (o, a) {
            if (!ge(o, s)) return 0;
            let f = h(o);
            return e.compare(f, o.values[r]) ? 0 : (o.values[r] = f, 1);
        },
        reconfigure (o, a) {
            let f = ge(o, n), u = a.config.facets[e.id], c = a.facet(e);
            if (u && !f && Se(t, u)) return o.values[r] = c, 0;
            let d = h(o);
            return e.compare(d, c) ? (o.values[r] = c, 0) : (o.values[r] = d, 1);
        }
    };
}
var Ee = A.define({
    static: !0
}), F = class {
    constructor(e, t, n, i, s){
        this.id = e, this.createF = t, this.updateF = n, this.compareF = i, this.spec = s, this.provides = void 0;
    }
    static define(e) {
        let t = new F(ye++, e.create, e.update, e.compare || ((n, i)=>n === i), e);
        return e.provide && (t.provides = e.provide(t)), t;
    }
    create(e) {
        let t = e.facet(Ee).find((n)=>n.field == this);
        return (t?.create || this.createF)(e);
    }
    slot(e) {
        let t = e[this.id] >> 1;
        return {
            create: (n)=>(n.values[t] = this.create(n), 1),
            update: (n, i)=>{
                let s = n.values[t], r = this.updateF(s, i);
                return this.compareF(s, r) ? 0 : (n.values[t] = r, 1);
            },
            reconfigure: (n, i)=>i.config.address[this.id] != null ? (n.values[t] = i.field(this), 0) : (n.values[t] = this.create(n), 1)
        };
    }
    init(e) {
        return [
            this,
            Ee.of({
                field: this,
                create: e
            })
        ];
    }
    get extension() {
        return this;
    }
}, L = {
    lowest: 4,
    low: 3,
    default: 2,
    high: 1,
    highest: 0
};
function H(l) {
    return (e)=>new se(e, l);
}
var lt = {
    highest: H(L.highest),
    high: H(L.high),
    default: H(L.default),
    low: H(L.low),
    lowest: H(L.lowest)
}, se = class {
    constructor(e, t){
        this.inner = e, this.prec = t;
    }
}, U = class {
    of(e) {
        return new Q(this, e);
    }
    reconfigure(e) {
        return U.reconfigure.of({
            compartment: this,
            extension: e
        });
    }
    get(e) {
        return e.config.compartments.get(this);
    }
}, Q = class {
    constructor(e, t){
        this.compartment = e, this.inner = t;
    }
}, G = class {
    constructor(e, t, n, i, s, r){
        for(this.base = e, this.compartments = t, this.dynamicSlots = n, this.address = i, this.staticValues = s, this.facets = r, this.statusTemplate = []; this.statusTemplate.length < n.length;)this.statusTemplate.push(0);
    }
    staticFacet(e) {
        let t = this.address[e.id];
        return t == null ? e.default : this.staticValues[t >> 1];
    }
    static resolve(e, t, n) {
        let i = [], s = Object.create(null), r = new Map;
        for (let c of Qe(e, t, r))c instanceof F ? i.push(c) : (s[c.facet.id] || (s[c.facet.id] = [])).push(c);
        let h = Object.create(null), o = [], a = [];
        for (let c1 of i)h[c1.id] = a.length << 1, a.push((d)=>c1.slot(d));
        let f = n?.config.facets;
        for(let c2 in s){
            let d = s[c2], p = d[0].facet, E = f && f[c2] || [];
            if (d.every((k)=>k.type == 0)) if (h[p.id] = o.length << 1 | 1, Se(E, d)) o.push(n.facet(p));
            else {
                let k = p.combine(d.map((he)=>he.value));
                o.push(n && p.compare(k, n.facet(p)) ? n.facet(p) : k);
            }
            else {
                for (let k1 of d)k1.type == 0 ? (h[k1.id] = o.length << 1 | 1, o.push(k1.value)) : (h[k1.id] = a.length << 1, a.push((he)=>k1.dynamicSlot(he)));
                h[p.id] = a.length << 1, a.push((k)=>Ke(k, p, d));
            }
        }
        let u = a.map((c)=>c(h));
        return new G(e, r, u, h, o, s);
    }
};
function Qe(l, e, t) {
    let n = [
        [],
        [],
        [],
        [],
        []
    ], i = new Map;
    function s(r, h) {
        let o = i.get(r);
        if (o != null) {
            if (o <= h) return;
            let a = n[o].indexOf(r);
            a > -1 && n[o].splice(a, 1), r instanceof Q && t.delete(r.compartment);
        }
        if (i.set(r, h), Array.isArray(r)) for (let a1 of r)s(a1, h);
        else if (r instanceof Q) {
            if (t.has(r.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
            let a2 = e.get(r.compartment) || r.inner;
            t.set(r.compartment, a2), s(a2, h);
        } else if (r instanceof se) s(r.inner, r.prec);
        else if (r instanceof F) n[h].push(r), r.provides && s(r.provides, h);
        else if (r instanceof z) n[h].push(r), r.facet.extensions && s(r.facet.extensions, h);
        else {
            let a3 = r.extension;
            if (!a3) throw new Error(`Unrecognized extension value in extension set (${r}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
            s(a3, h);
        }
    }
    return s(l, L.default), n.reduce((r, h)=>r.concat(h));
}
function K(l, e) {
    if (e & 1) return 2;
    let t = e >> 1, n = l.status[t];
    if (n == 4) throw new Error("Cyclic dependency between fields and/or facets");
    if (n & 2) return n;
    l.status[t] = 4;
    let i = l.computeSlot(l, l.config.dynamicSlots[t]);
    return l.status[t] = 2 | i;
}
function re(l, e) {
    return e & 1 ? l.config.staticValues[e >> 1] : l.values[e >> 1];
}
var Ne = A.define(), De = A.define({
    combine: (l)=>l.some((e)=>e),
    static: !0
}), qe = A.define({
    combine: (l)=>l.length ? l[0] : void 0,
    static: !0
}), Le = A.define(), $e = A.define(), ze = A.define(), We = A.define({
    combine: (l)=>l.length ? l[0] : !1
}), N = class {
    constructor(e, t){
        this.type = e, this.value = t;
    }
    static define() {
        return new pe;
    }
}, pe = class {
    of(e) {
        return new N(this, e);
    }
}, me = class {
    constructor(e){
        this.map = e;
    }
    of(e) {
        return new y(this, e);
    }
}, y = class {
    constructor(e, t){
        this.type = e, this.value = t;
    }
    map(e) {
        let t = this.type.map(this.value, e);
        return t === void 0 ? void 0 : t == this.value ? this : new y(this.type, t);
    }
    is(e) {
        return this.type == e;
    }
    static define(e = {}) {
        return new me(e.map || ((t)=>t));
    }
    static mapEffects(e, t) {
        if (!e.length) return e;
        let n = [];
        for (let i of e){
            let s = i.map(t);
            s && n.push(s);
        }
        return n;
    }
};
y.reconfigure = y.define();
y.appendConfig = y.define();
var S = class {
    constructor(e, t, n, i, s, r){
        this.startState = e, this.changes = t, this.selection = n, this.effects = i, this.annotations = s, this.scrollIntoView = r, this._doc = null, this._state = null, n && Ve(n, t.newLength), s.some((h)=>h.type == S.time) || (this.annotations = s.concat(S.time.of(Date.now())));
    }
    static create(e, t, n, i, s, r) {
        return new S(e, t, n, i, s, r);
    }
    get newDoc() {
        return this._doc || (this._doc = this.changes.apply(this.startState.doc));
    }
    get newSelection() {
        return this.selection || this.startState.selection.map(this.changes);
    }
    get state() {
        return this._state || this.startState.applyTransaction(this), this._state;
    }
    annotation(e) {
        for (let t of this.annotations)if (t.type == e) return t.value;
    }
    get docChanged() {
        return !this.changes.empty;
    }
    get reconfigured() {
        return this.startState.config != this.state.config;
    }
    isUserEvent(e) {
        let t = this.annotation(S.userEvent);
        return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
    }
};
S.time = N.define();
S.userEvent = N.define();
S.addToHistory = N.define();
S.remote = N.define();
function Xe(l, e) {
    let t = [];
    for(let n = 0, i = 0;;){
        let s, r;
        if (n < l.length && (i == e.length || e[i] >= l[n])) s = l[n++], r = l[n++];
        else if (i < e.length) s = e[i++], r = e[i++];
        else return t;
        !t.length || t[t.length - 1] < s ? t.push(s, r) : t[t.length - 1] < r && (t[t.length - 1] = r);
    }
}
function Ue(l, e, t) {
    var n;
    let i, s, r;
    return t ? (i = e.changes, s = x.empty(e.changes.length), r = l.changes.compose(e.changes)) : (i = e.changes.map(l.changes), s = l.changes.mapDesc(e.changes, !0), r = l.changes.compose(i)), {
        changes: r,
        selection: e.selection ? e.selection.map(s) : (n = l.selection) === null || n === void 0 ? void 0 : n.map(i),
        effects: y.mapEffects(l.effects, i).concat(y.mapEffects(e.effects, s)),
        annotations: l.annotations.length ? l.annotations.concat(e.annotations) : e.annotations,
        scrollIntoView: l.scrollIntoView || e.scrollIntoView
    };
}
function we(l, e, t) {
    let n = e.selection, i = W(e.annotations);
    return e.userEvent && (i = i.concat(S.userEvent.of(e.userEvent))), {
        changes: e.changes instanceof x ? e.changes : x.of(e.changes || [], t, l.facet(qe)),
        selection: n && (n instanceof g ? n : g.single(n.anchor, n.head)),
        effects: W(e.effects),
        annotations: i,
        scrollIntoView: !!e.scrollIntoView
    };
}
function Ge(l, e, t) {
    let n = we(l, e.length ? e[0] : {}, l.doc.length);
    e.length && e[0].filter === !1 && (t = !1);
    for(let s = 1; s < e.length; s++){
        e[s].filter === !1 && (t = !1);
        let r = !!e[s].sequential;
        n = Ue(n, we(l, e[s], r ? n.changes.newLength : l.doc.length), r);
    }
    let i = S.create(l, n.changes, n.selection, n.effects, n.annotations, n.scrollIntoView);
    return _e(t ? Ye(i) : i);
}
function Ye(l) {
    let e = l.startState, t = !0;
    for (let i of e.facet(Le)){
        let s = i(l);
        if (s === !1) {
            t = !1;
            break;
        }
        Array.isArray(s) && (t = t === !0 ? s : Xe(t, s));
    }
    if (t !== !0) {
        let i1, s1;
        if (t === !1) s1 = l.changes.invertedDesc, i1 = x.empty(e.doc.length);
        else {
            let r = l.changes.filter(t);
            i1 = r.changes, s1 = r.filtered.invertedDesc;
        }
        l = S.create(e, i1, l.selection && l.selection.map(s1), y.mapEffects(l.effects, s1), l.annotations, l.scrollIntoView);
    }
    let n = e.facet($e);
    for(let i2 = n.length - 1; i2 >= 0; i2--){
        let s2 = n[i2](l);
        s2 instanceof S ? l = s2 : Array.isArray(s2) && s2.length == 1 && s2[0] instanceof S ? l = s2[0] : l = Ge(e, W(s2), !1);
    }
    return l;
}
function _e(l) {
    let e = l.startState, t = e.facet(ze), n = l;
    for(let i = t.length - 1; i >= 0; i--){
        let s = t[i](l);
        s && Object.keys(s).length && (n = Ue(l, we(e, s, l.changes.newLength), !0));
    }
    return n == l ? l : S.create(e, l.changes, l.selection, n.effects, n.annotations, n.scrollIntoView);
}
var et = [];
function W(l) {
    return l == null ? et : Array.isArray(l) ? l : [
        l
    ];
}
var R = function(l) {
    return l[l.Word = 0] = "Word", l[l.Space = 1] = "Space", l[l.Other = 2] = "Other", l;
}(R || (R = {})), tt = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, ve;
try {
    ve = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch  {}
function nt(l) {
    if (ve) return ve.test(l);
    for(let e = 0; e < l.length; e++){
        let t = l[e];
        if (/\w/.test(t) || t > "\x80" && (t.toUpperCase() != t.toLowerCase() || tt.test(t))) return !0;
    }
    return !1;
}
function it(l) {
    return (e)=>{
        if (!/\S/.test(e)) return R.Space;
        if (nt(e)) return R.Word;
        for(let t = 0; t < l.length; t++)if (e.indexOf(l[t]) > -1) return R.Word;
        return R.Other;
    };
}
var w = class {
    constructor(e, t, n, i, s, r){
        this.config = e, this.doc = t, this.selection = n, this.values = i, this.status = e.statusTemplate.slice(), this.computeSlot = s, r && (r._state = this);
        for(let h = 0; h < this.config.dynamicSlots.length; h++)K(this, h << 1);
        this.computeSlot = null;
    }
    field(e, t = !0) {
        let n = this.config.address[e.id];
        if (n == null) {
            if (t) throw new RangeError("Field is not present in this state");
            return;
        }
        return K(this, n), re(this, n);
    }
    update(...e) {
        return Ge(this, e, !0);
    }
    applyTransaction(e) {
        let t = this.config, { base: n , compartments: i  } = t;
        for (let r of e.effects)r.is(U.reconfigure) ? (t && (i = new Map, t.compartments.forEach((h, o)=>i.set(o, h)), t = null), i.set(r.value.compartment, r.value.extension)) : r.is(y.reconfigure) ? (t = null, n = r.value) : r.is(y.appendConfig) && (t = null, n = W(n).concat(r.value));
        let s;
        t ? s = e.startState.values.slice() : (t = G.resolve(n, i, this), s = new w(t, this.doc, this.selection, t.dynamicSlots.map(()=>null), (h, o)=>o.reconfigure(h, this), null).values), new w(t, e.newDoc, e.newSelection, s, (r, h)=>h.update(r, e), e);
    }
    replaceSelection(e) {
        return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t)=>({
                changes: {
                    from: t.from,
                    to: t.to,
                    insert: e
                },
                range: g.cursor(t.from + e.length)
            }));
    }
    changeByRange(e) {
        let t = this.selection, n = e(t.ranges[0]), i = this.changes(n.changes), s = [
            n.range
        ], r = W(n.effects);
        for(let h = 1; h < t.ranges.length; h++){
            let o = e(t.ranges[h]), a = this.changes(o.changes), f = a.map(i);
            for(let c = 0; c < h; c++)s[c] = s[c].map(f);
            let u = i.mapDesc(a, !0);
            s.push(o.range.map(u)), i = i.compose(f), r = y.mapEffects(r, f).concat(y.mapEffects(W(o.effects), u));
        }
        return {
            changes: i,
            selection: g.create(s, t.mainIndex),
            effects: r
        };
    }
    changes(e = []) {
        return e instanceof x ? e : x.of(e, this.doc.length, this.facet(w.lineSeparator));
    }
    toText(e) {
        return v.of(e.split(this.facet(w.lineSeparator) || ue));
    }
    sliceDoc(e = 0, t = this.doc.length) {
        return this.doc.sliceString(e, t, this.lineBreak);
    }
    facet(e) {
        let t = this.config.address[e.id];
        return t == null ? e.default : (K(this, t), re(this, t));
    }
    toJSON(e) {
        let t = {
            doc: this.sliceDoc(),
            selection: this.selection.toJSON()
        };
        if (e) for(let n in e){
            let i = e[n];
            i instanceof F && (t[n] = i.spec.toJSON(this.field(e[n]), this));
        }
        return t;
    }
    static fromJSON(e, t = {}, n) {
        if (!e || typeof e.doc != "string") throw new RangeError("Invalid JSON representation for EditorState");
        let i = [];
        if (n) for(let s in n){
            let r = n[s], h = e[s];
            i.push(r.init((o)=>r.spec.fromJSON(h, o)));
        }
        return w.create({
            doc: e.doc,
            selection: g.fromJSON(e.selection),
            extensions: t.extensions ? i.concat([
                t.extensions
            ]) : i
        });
    }
    static create(e = {}) {
        let t = G.resolve(e.extensions || [], new Map), n = e.doc instanceof v ? e.doc : v.of((e.doc || "").split(t.staticFacet(w.lineSeparator) || ue)), i = e.selection ? e.selection instanceof g ? e.selection : g.single(e.selection.anchor, e.selection.head) : g.single(0);
        return Ve(i, n.length), t.staticFacet(De) || (i = i.asSingle()), new w(t, n, i, t.dynamicSlots.map(()=>null), (s, r)=>r.create(s), null);
    }
    get tabSize() {
        return this.facet(w.tabSize);
    }
    get lineBreak() {
        return this.facet(w.lineSeparator) || `
`;
    }
    get readOnly() {
        return this.facet(We);
    }
    phrase(e, ...t) {
        for (let n of this.facet(w.phrases))if (Object.prototype.hasOwnProperty.call(n, e)) {
            e = n[e];
            break;
        }
        return t.length && (e = e.replace(/\$(\$|\d*)/g, (n, i)=>{
            if (i == "$") return "$";
            let s = +(i || 1);
            return s > t.length ? n : t[s - 1];
        })), e;
    }
    languageDataAt(e, t, n = -1) {
        let i = [];
        for (let s of this.facet(Ne))for (let r of s(this, t, n))Object.prototype.hasOwnProperty.call(r, e) && i.push(r[e]);
        return i;
    }
    charCategorizer(e) {
        return it(this.languageDataAt("wordChars", e).join(""));
    }
    wordAt(e) {
        let { text: t , from: n , length: i  } = this.doc.lineAt(e), s = this.charCategorizer(e), r = e - n, h = e - n;
        for(; r > 0;){
            let o = ie(t, r, !1);
            if (s(t.slice(o, r)) != R.Word) break;
            r = o;
        }
        for(; h < i;){
            let o1 = ie(t, h);
            if (s(t.slice(h, o1)) != R.Word) break;
            h = o1;
        }
        return r == h ? null : g.range(r + n, h + n);
    }
};
w.allowMultipleSelections = De;
w.tabSize = A.define({
    combine: (l)=>l.length ? l[0] : 4
});
w.lineSeparator = qe;
w.readOnly = We;
w.phrases = A.define({
    compare (l, e) {
        let t = Object.keys(l), n = Object.keys(e);
        return t.length == n.length && t.every((i)=>l[i] == e[i]);
    }
});
w.languageData = Ne;
w.changeFilter = Le;
w.transactionFilter = $e;
w.transactionExtender = ze;
U.reconfigure = y.define();
function ht(l, e, t = {}) {
    let n = {};
    for (let i of l)for (let s of Object.keys(i)){
        let r = i[s], h = n[s];
        if (h === void 0) n[s] = r;
        else if (!(h === r || r === void 0)) if (Object.hasOwnProperty.call(t, s)) n[s] = t[s](h, r);
        else throw new Error("Config merge conflict for field " + s);
    }
    for(let i1 in e)n[i1] === void 0 && (n[i1] = e[i1]);
    return n;
}
var j = class {
    eq(e) {
        return this == e;
    }
    range(e, t = e) {
        return D.create(e, t, this);
    }
};
j.prototype.startSide = j.prototype.endSide = 0;
j.prototype.point = !1;
j.prototype.mapMode = M.TrackDel;
var D = class {
    constructor(e, t, n){
        this.from = e, this.to = t, this.value = n;
    }
    static create(e, t, n) {
        return new D(e, t, n);
    }
};
function ke(l, e) {
    return l.from - e.from || l.value.startSide - e.value.startSide;
}
var X = class {
    constructor(e, t, n, i){
        this.from = e, this.to = t, this.value = n, this.maxPoint = i;
    }
    get length() {
        return this.to[this.to.length - 1];
    }
    findIndex(e, t, n, i = 0) {
        let s = n ? this.to : this.from;
        for(let r = i, h = s.length;;){
            if (r == h) return r;
            let o = r + h >> 1, a = s[o] - e || (n ? this.value[o].endSide : this.value[o].startSide) - t;
            if (o == r) return a >= 0 ? r : h;
            a >= 0 ? h = o : r = o + 1;
        }
    }
    between(e, t, n, i) {
        for(let s = this.findIndex(t, -1e9, !0), r = this.findIndex(n, 1e9, !1, s); s < r; s++)if (i(this.from[s] + e, this.to[s] + e, this.value[s]) === !1) return !1;
    }
    map(e, t) {
        let n = [], i = [], s = [], r = -1, h = -1;
        for(let o = 0; o < this.value.length; o++){
            let a = this.value[o], f = this.from[o] + e, u = this.to[o] + e, c, d;
            if (f == u) {
                let p = t.mapPos(f, a.startSide, a.mapMode);
                if (p == null || (c = d = p, a.startSide != a.endSide && (d = t.mapPos(f, a.endSide), d < c))) continue;
            } else if (c = t.mapPos(f, a.startSide), d = t.mapPos(u, a.endSide), c > d || c == d && a.startSide > 0 && a.endSide <= 0) continue;
            (d - c || a.endSide - a.startSide) < 0 || (r < 0 && (r = c), a.point && (h = Math.max(h, d - c)), n.push(a), i.push(c - r), s.push(d - r));
        }
        return {
            mapped: n.length ? new X(i, s, n, h) : null,
            pos: r
        };
    }
}, P = class {
    constructor(e, t, n, i){
        this.chunkPos = e, this.chunk = t, this.nextLayer = n, this.maxPoint = i;
    }
    static create(e, t, n, i) {
        return new P(e, t, n, i);
    }
    get length() {
        let e = this.chunk.length - 1;
        return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
    }
    get size() {
        if (this.isEmpty) return 0;
        let e = this.nextLayer.size;
        for (let t of this.chunk)e += t.value.length;
        return e;
    }
    chunkEnd(e) {
        return this.chunkPos[e] + this.chunk[e].length;
    }
    update(e) {
        let { add: t = [] , sort: n = !1 , filterFrom: i = 0 , filterTo: s = this.length  } = e, r = e.filter;
        if (t.length == 0 && !r) return this;
        if (n && (t = t.slice().sort(ke)), this.isEmpty) return t.length ? P.of(t) : this;
        let h = new le(this, null, -1).goto(0), o = 0, a = [], f = new Z;
        for(; h.value || o < t.length;)if (o < t.length && (h.from - t[o].from || h.startSide - t[o].value.startSide) >= 0) {
            let u = t[o++];
            f.addInner(u.from, u.to, u.value) || a.push(u);
        } else h.rangeIndex == 1 && h.chunkIndex < this.chunk.length && (o == t.length || this.chunkEnd(h.chunkIndex) < t[o].from) && (!r || i > this.chunkEnd(h.chunkIndex) || s < this.chunkPos[h.chunkIndex]) && f.addChunk(this.chunkPos[h.chunkIndex], this.chunk[h.chunkIndex]) ? h.nextChunk() : ((!r || i > h.to || s < h.from || r(h.from, h.to, h.value)) && (f.addInner(h.from, h.to, h.value) || a.push(D.create(h.from, h.to, h.value))), h.next());
        return f.finishInner(this.nextLayer.isEmpty && !a.length ? P.empty : this.nextLayer.update({
            add: a,
            filter: r,
            filterFrom: i,
            filterTo: s
        }));
    }
    map(e) {
        if (e.empty || this.isEmpty) return this;
        let t = [], n = [], i = -1;
        for(let r = 0; r < this.chunk.length; r++){
            let h = this.chunkPos[r], o = this.chunk[r], a = e.touchesRange(h, h + o.length);
            if (a === !1) i = Math.max(i, o.maxPoint), t.push(o), n.push(e.mapPos(h));
            else if (a === !0) {
                let { mapped: f , pos: u  } = o.map(h, e);
                f && (i = Math.max(i, f.maxPoint), t.push(f), n.push(u));
            }
        }
        let s = this.nextLayer.map(e);
        return t.length == 0 ? s : new P(n, t, s || P.empty, i);
    }
    between(e, t, n) {
        if (!this.isEmpty) {
            for(let i = 0; i < this.chunk.length; i++){
                let s = this.chunkPos[i], r = this.chunk[i];
                if (t >= s && e <= s + r.length && r.between(s, e - s, t - s, n) === !1) return;
            }
            this.nextLayer.between(e, t, n);
        }
    }
    iter(e = 0) {
        return q.from([
            this
        ]).goto(e);
    }
    get isEmpty() {
        return this.nextLayer == this;
    }
    static iter(e, t = 0) {
        return q.from(e).goto(t);
    }
    static compare(e, t, n, i, s = -1) {
        let r = e.filter((u)=>u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= s), h = t.filter((u)=>u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= s), o = Be(r, h, n), a = new J(r, o, s), f = new J(h, o, s);
        n.iterGaps((u, c, d)=>Me(a, u, f, c, d, i)), n.empty && n.length == 0 && Me(a, 0, f, 0, 0, i);
    }
    static eq(e, t, n = 0, i) {
        i == null && (i = 1e9);
        let s = e.filter((f)=>!f.isEmpty && t.indexOf(f) < 0), r = t.filter((f)=>!f.isEmpty && e.indexOf(f) < 0);
        if (s.length != r.length) return !1;
        if (!s.length) return !0;
        let h = Be(s, r), o = new J(s, h, 0).goto(n), a = new J(r, h, 0).goto(n);
        for(;;){
            if (o.to != a.to || !xe(o.active, a.active) || o.point && (!a.point || !o.point.eq(a.point))) return !1;
            if (o.to > i) return !0;
            o.next(), a.next();
        }
    }
    static spans(e, t, n, i, s = -1) {
        let r = new J(e, null, s).goto(t), h = t, o = r.openStart;
        for(;;){
            let a = Math.min(r.to, n);
            if (r.point ? (i.point(h, a, r.point, r.activeForPoint(r.to), o, r.pointRank), o = r.openEnd(a) + (r.to > a ? 1 : 0)) : a > h && (i.span(h, a, r.active, o), o = r.openEnd(a)), r.to > n) break;
            h = r.to, r.next();
        }
        return o;
    }
    static of(e, t = !1) {
        let n = new Z;
        for (let i of e instanceof D ? [
            e
        ] : t ? st(e) : e)n.add(i.from, i.to, i.value);
        return n.finish();
    }
};
P.empty = new P([], [], null, -1);
function st(l) {
    if (l.length > 1) for(let e = l[0], t = 1; t < l.length; t++){
        let n = l[t];
        if (ke(e, n) > 0) return l.slice().sort(ke);
        e = n;
    }
    return l;
}
P.empty.nextLayer = P.empty;
var Z = class {
    constructor(){
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
    }
    finishChunk(e) {
        this.chunks.push(new X(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
    }
    add(e, t, n) {
        this.addInner(e, t, n) || (this.nextLayer || (this.nextLayer = new Z)).add(e, t, n);
    }
    addInner(e, t, n) {
        let i = e - this.lastTo || n.startSide - this.last.endSide;
        if (i <= 0 && (e - this.lastFrom || n.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return i < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = n, this.lastFrom = e, this.lastTo = t, this.value.push(n), n.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
    }
    addChunk(e, t) {
        if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
        let n = t.value.length - 1;
        return this.last = t.value[n], this.lastFrom = t.from[n] + e, this.lastTo = t.to[n] + e, !0;
    }
    finish() {
        return this.finishInner(P.empty);
    }
    finishInner(e) {
        if (this.from.length && this.finishChunk(!1), this.chunks.length == 0) return e;
        let t = P.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
        return this.from = null, t;
    }
};
function Be(l, e, t) {
    let n = new Map;
    for (let s of l)for(let r = 0; r < s.chunk.length; r++)s.chunk[r].maxPoint <= 0 && n.set(s.chunk[r], s.chunkPos[r]);
    let i = new Set;
    for (let s1 of e)for(let r1 = 0; r1 < s1.chunk.length; r1++){
        let h = n.get(s1.chunk[r1]);
        h != null && (t ? t.mapPos(h) : h) == s1.chunkPos[r1] && !t?.touchesRange(h, h + s1.chunk[r1].length) && i.add(s1.chunk[r1]);
    }
    return i;
}
var le = class {
    constructor(e, t, n, i = 0){
        this.layer = e, this.skip = t, this.minPoint = n, this.rank = i;
    }
    get startSide() {
        return this.value ? this.value.startSide : 0;
    }
    get endSide() {
        return this.value ? this.value.endSide : 0;
    }
    goto(e, t = -1e9) {
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
    }
    gotoInner(e, t, n) {
        for(; this.chunkIndex < this.layer.chunk.length;){
            let i = this.layer.chunk[this.chunkIndex];
            if (!(this.skip && this.skip.has(i) || this.layer.chunkEnd(this.chunkIndex) < e || i.maxPoint < this.minPoint)) break;
            this.chunkIndex++, n = !1;
        }
        if (this.chunkIndex < this.layer.chunk.length) {
            let i1 = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
            (!n || this.rangeIndex < i1) && this.setRangeIndex(i1);
        }
        this.next();
    }
    forward(e, t) {
        (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
    }
    next() {
        for(;;)if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break;
        } else {
            let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], n = e + t.from[this.rangeIndex];
            if (this.from = n, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break;
        }
    }
    setRangeIndex(e) {
        if (e == this.layer.chunk[this.chunkIndex].value.length) {
            if (this.chunkIndex++, this.skip) for(; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;
            this.rangeIndex = 0;
        } else this.rangeIndex = e;
    }
    nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next();
    }
    compare(e) {
        return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
    }
}, q = class {
    constructor(e){
        this.heap = e;
    }
    static from(e, t = null, n = -1) {
        let i = [];
        for(let s = 0; s < e.length; s++)for(let r = e[s]; !r.isEmpty; r = r.nextLayer)r.maxPoint >= n && i.push(new le(r, t, n, s));
        return i.length == 1 ? i[0] : new q(i);
    }
    get startSide() {
        return this.value ? this.value.startSide : 0;
    }
    goto(e, t = -1e9) {
        for (let n of this.heap)n.goto(e, t);
        for(let n1 = this.heap.length >> 1; n1 >= 0; n1--)ae(this.heap, n1);
        return this.next(), this;
    }
    forward(e, t) {
        for (let n of this.heap)n.forward(e, t);
        for(let n1 = this.heap.length >> 1; n1 >= 0; n1--)ae(this.heap, n1);
        (this.to - e || this.value.endSide - t) < 0 && this.next();
    }
    next() {
        if (this.heap.length == 0) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
            let e = this.heap[0];
            this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), ae(this.heap, 0);
        }
    }
};
function ae(l, e) {
    for(let t = l[e];;){
        let n = (e << 1) + 1;
        if (n >= l.length) break;
        let i = l[n];
        if (n + 1 < l.length && i.compare(l[n + 1]) >= 0 && (i = l[n + 1], n++), t.compare(i) < 0) break;
        l[n] = t, l[e] = i, e = n;
    }
}
var J = class {
    constructor(e, t, n){
        this.minPoint = n, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = q.from(e, t, n);
    }
    goto(e, t = -1e9) {
        return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
    }
    forward(e, t) {
        for(; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0;)this.removeActive(this.minActive);
        this.cursor.forward(e, t);
    }
    removeActive(e) {
        Y(this.active, e), Y(this.activeTo, e), Y(this.activeRank, e), this.minActive = Re(this.active, this.activeTo);
    }
    addActive(e) {
        let t = 0, { value: n , to: i , rank: s  } = this.cursor;
        for(; t < this.activeRank.length && this.activeRank[t] <= s;)t++;
        _(this.active, t, n), _(this.activeTo, t, i), _(this.activeRank, t, s), e && _(e, t, this.cursor.from), this.minActive = Re(this.active, this.activeTo);
    }
    next() {
        let e = this.to, t = this.point;
        this.point = null;
        let n = this.openStart < 0 ? [] : null, i = 0;
        for(;;){
            let s = this.minActive;
            if (s > -1 && (this.activeTo[s] - this.cursor.from || this.active[s].endSide - this.cursor.startSide) < 0) {
                if (this.activeTo[s] > e) {
                    this.to = this.activeTo[s], this.endSide = this.active[s].endSide;
                    break;
                }
                this.removeActive(s), n && Y(n, s);
            } else if (this.cursor.value) if (this.cursor.from > e) {
                this.to = this.cursor.from, this.endSide = this.cursor.startSide;
                break;
            } else {
                let r = this.cursor.value;
                if (!r.point) this.addActive(n), this.cursor.next();
                else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next();
                else {
                    this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.from < e && (i = 1), this.cursor.next(), this.forward(this.to, this.endSide);
                    break;
                }
            }
            else {
                this.to = this.endSide = 1e9;
                break;
            }
        }
        if (n) {
            let s1 = 0;
            for(; s1 < n.length && n[s1] < e;)s1++;
            this.openStart = s1 + i;
        }
    }
    activeForPoint(e) {
        if (!this.active.length) return this.active;
        let t = [];
        for(let n = this.active.length - 1; n >= 0 && !(this.activeRank[n] < this.pointRank); n--)(this.activeTo[n] > e || this.activeTo[n] == e && this.active[n].endSide >= this.point.endSide) && t.push(this.active[n]);
        return t.reverse();
    }
    openEnd(e) {
        let t = 0;
        for(let n = this.activeTo.length - 1; n >= 0 && this.activeTo[n] > e; n--)t++;
        return t;
    }
};
function Me(l, e, t, n, i, s) {
    l.goto(e), t.goto(n);
    let r = n + i, h = n, o = n - e;
    for(;;){
        let a = l.to + o - t.to || l.endSide - t.endSide, f = a < 0 ? l.to + o : t.to, u = Math.min(f, r);
        if (l.point || t.point ? l.point && t.point && (l.point == t.point || l.point.eq(t.point)) && xe(l.activeForPoint(l.to + o), t.activeForPoint(t.to)) || s.comparePoint(h, u, l.point, t.point) : u > h && !xe(l.active, t.active) && s.compareRange(h, u, l.active, t.active), f > r) break;
        h = f, a <= 0 && l.next(), a >= 0 && t.next();
    }
}
function xe(l, e) {
    if (l.length != e.length) return !1;
    for(let t = 0; t < l.length; t++)if (l[t] != e[t] && !l[t].eq(e[t])) return !1;
    return !0;
}
function Y(l, e) {
    for(let t = e, n = l.length - 1; t < n; t++)l[t] = l[t + 1];
    l.pop();
}
function _(l, e, t) {
    for(let n = l.length - 1; n >= e; n--)l[n + 1] = l[n];
    l[e] = t;
}
function Re(l, e) {
    let t = -1, n = 1e9;
    for(let i = 0; i < e.length; i++)(e[i] - n || l[i].endSide - l[t].endSide) < 0 && (t = i, n = e[i]);
    return t;
}
function ot(l, e, t = l.length) {
    let n = 0;
    for(let i = 0; i < t;)l.charCodeAt(i) == 9 ? (n += e - n % e, i++) : (n++, i = ie(l, i));
    return n;
}
function at(l, e, t, n) {
    for(let i = 0, s = 0;;){
        if (s >= e) return i;
        if (i == l.length) break;
        s += l.charCodeAt(i) == 9 ? t - s % t : 1, i = ie(l, i);
    }
    return n === !0 ? -1 : l.length;
}
var S1 = "\u037C", w1 = typeof Symbol > "u" ? "__" + S1 : Symbol.for(S1), c = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), b1 = typeof globalThis < "u" ? globalThis : typeof document < "u" ? window : {}, T1 = class {
    constructor(e, l){
        this.rules = [];
        let { finish: u  } = l || {};
        function n(t) {
            return /^@/.test(t) ? [
                t
            ] : t.split(/,\s*/);
        }
        function s(t, i, h, x) {
            let d = [], r = /^@(\w+)\b/.exec(t[0]), g = r && r[1] == "keyframes";
            if (r && i == null) return h.push(t[0] + ";");
            for(let a in i){
                let o = i[a];
                if (/&/.test(a)) s(a.split(/,\s*/).map((f)=>t.map((y)=>f.replace(/&/, y))).reduce((f, y)=>f.concat(y)), o, h);
                else if (o && typeof o == "object") {
                    if (!r) throw new RangeError("The value of a property (" + a + ") should be a primitive value.");
                    s(n(a), o, d, g);
                } else o != null && d.push(a.replace(/_.*/, "").replace(/[A-Z]/g, (f)=>"-" + f.toLowerCase()) + ": " + o + ";");
            }
            (d.length || g) && h.push((u && !r && !x ? t.map(u) : t).join(", ") + " {" + d.join(" ") + "}");
        }
        for(let t in e)s(n(t), e[t], this.rules);
    }
    getRules() {
        return this.rules.join(`
`);
    }
    static newName() {
        let e = b1[w1] || 1;
        return b1[w1] = e + 1, S1 + e.toString(36);
    }
    static mount(e, l) {
        (e[c] || new m1(e)).mount(Array.isArray(l) ? l : [
            l
        ]);
    }
}, p = null, m1 = class {
    constructor(e){
        if (!e.head && e.adoptedStyleSheets && typeof CSSStyleSheet < "u") {
            if (p) return e.adoptedStyleSheets = [
                p.sheet
            ].concat(e.adoptedStyleSheets), e[c] = p;
            this.sheet = new CSSStyleSheet, e.adoptedStyleSheets = [
                this.sheet
            ].concat(e.adoptedStyleSheets), p = this;
        } else {
            this.styleTag = (e.ownerDocument || e).createElement("style");
            let l = e.head || e;
            l.insertBefore(this.styleTag, l.firstChild);
        }
        this.modules = [], e[c] = this;
    }
    mount(e) {
        let l = this.sheet, u = 0, n = 0;
        for(let s = 0; s < e.length; s++){
            let t = e[s], i = this.modules.indexOf(t);
            if (i < n && i > -1 && (this.modules.splice(i, 1), n--, i = -1), i == -1) {
                if (this.modules.splice(n++, 0, t), l) for(let h = 0; h < t.rules.length; h++)l.insertRule(t.rules[h], u++);
            } else {
                for(; n < i;)u += this.modules[n++].rules.length;
                u += t.rules.length, n++;
            }
        }
        if (!l) {
            let s1 = "";
            for(let t1 = 0; t1 < this.modules.length; t1++)s1 += this.modules[t1].getRules() + `
`;
            this.styleTag.textContent = s1;
        }
    }
};
var t = {
    8: "Backspace",
    9: "Tab",
    10: "Enter",
    12: "NumLock",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    44: "PrintScreen",
    45: "Insert",
    46: "Delete",
    59: ";",
    61: "=",
    91: "Meta",
    92: "Meta",
    106: "*",
    107: "+",
    108: ",",
    109: "-",
    110: ".",
    111: "/",
    144: "NumLock",
    145: "ScrollLock",
    160: "Shift",
    161: "Shift",
    162: "Control",
    163: "Control",
    164: "Alt",
    165: "Alt",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'"
}, i = {
    48: ")",
    49: "!",
    50: "@",
    51: "#",
    52: "$",
    53: "%",
    54: "^",
    55: "&",
    56: "*",
    57: "(",
    59: ":",
    61: "+",
    173: "_",
    186: ":",
    187: "+",
    188: "<",
    189: "_",
    190: ">",
    191: "?",
    192: "~",
    219: "{",
    220: "|",
    221: "}",
    222: '"'
}, n = typeof navigator < "u" && /Chrome\/(\d+)/.exec(navigator.userAgent), p1 = typeof navigator < "u" && /Gecko\/\d+/.test(navigator.userAgent), g1 = typeof navigator < "u" && /Mac/.test(navigator.platform), d = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), y1 = g1 || n && +n[1] < 57;
for(r = 0; r < 10; r++)t[48 + r] = t[96 + r] = String(r);
var r;
for(r = 1; r <= 24; r++)t[r + 111] = "F" + r;
var r;
for(r = 65; r <= 90; r++)t[r] = String.fromCharCode(r + 32), i[r] = String.fromCharCode(r);
var r;
for(a in t)i.hasOwnProperty(a) || (i[a] = t[a]);
var a;
function s(o) {
    var f = y1 && (o.ctrlKey || o.altKey || o.metaKey) || d && o.shiftKey && o.key && o.key.length == 1 || o.key == "Unidentified", e = !f && o.key || (o.shiftKey ? i : t)[o.keyCode] || o.key || "Unidentified";
    return e == "Esc" && (e = "Escape"), e == "Del" && (e = "Delete"), e == "Left" && (e = "ArrowLeft"), e == "Up" && (e = "ArrowUp"), e == "Right" && (e = "ArrowRight"), e == "Down" && (e = "ArrowDown"), e;
}
function ee1(n) {
    let t;
    return n.nodeType == 11 ? t = n.getSelection ? n : n.ownerDocument : t = n, t.getSelection();
}
function yt(n, t) {
    return t ? n == t || n.contains(t.nodeType != 1 ? t.parentNode : t) : !1;
}
function gn() {
    let n = document.activeElement;
    for(; n && n.shadowRoot;)n = n.shadowRoot.activeElement;
    return n;
}
function Re1(n, t) {
    if (!t.anchorNode) return !1;
    try {
        return yt(n, t.anchorNode);
    } catch  {
        return !1;
    }
}
function Nt(n) {
    return n.nodeType == 3 ? Vt(n, 0, n.nodeValue.length).getClientRects() : n.nodeType == 1 ? n.getClientRects() : [];
}
function ie1(n, t, e, i) {
    return e ? xi(n, t, e, i, -1) || xi(n, t, e, i, 1) : !1;
}
function Le1(n) {
    for(var t = 0;; t++)if (n = n.previousSibling, !n) return t;
}
function xi(n, t, e, i, s) {
    for(;;){
        if (n == e && t == i) return !0;
        if (t == (s < 0 ? 0 : se1(n))) {
            if (n.nodeName == "DIV") return !1;
            let r = n.parentNode;
            if (!r || r.nodeType != 1) return !1;
            t = Le1(n) + (s < 0 ? 0 : 1), n = r;
        } else if (n.nodeType == 1) {
            if (n = n.childNodes[t + (s < 0 ? -1 : 0)], n.nodeType == 1 && n.contentEditable == "false") return !1;
            t = s < 0 ? se1(n) : 0;
        } else return !1;
    }
}
function se1(n) {
    return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
var us = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};
function we1(n, t) {
    let e = t ? n.left : n.right;
    return {
        left: e,
        right: e,
        top: n.top,
        bottom: n.bottom
    };
}
function bn(n) {
    return {
        left: 0,
        right: n.innerWidth,
        top: 0,
        bottom: n.innerHeight
    };
}
function yn(n, t, e, i, s, r, o, l) {
    let h = n.ownerDocument, a = h.defaultView;
    for(let c = n; c;)if (c.nodeType == 1) {
        let f, d = c == h.body;
        if (d) f = bn(a);
        else {
            if (c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
                c = c.parentNode;
                continue;
            }
            let m = c.getBoundingClientRect();
            f = {
                left: m.left,
                right: m.left + c.clientWidth,
                top: m.top,
                bottom: m.top + c.clientHeight
            };
        }
        let u = 0, p = 0;
        if (s == "nearest") t.top < f.top ? (p = -(f.top - t.top + o), e > 0 && t.bottom > f.bottom + p && (p = t.bottom - f.bottom + p + o)) : t.bottom > f.bottom && (p = t.bottom - f.bottom + o, e < 0 && t.top - p < f.top && (p = -(f.top + p - t.top + o)));
        else {
            let m1 = t.bottom - t.top, b = f.bottom - f.top;
            p = (s == "center" && m1 <= b ? t.top + m1 / 2 - b / 2 : s == "start" || s == "center" && e < 0 ? t.top - o : t.bottom - b + o) - f.top;
        }
        if (i == "nearest" ? t.left < f.left ? (u = -(f.left - t.left + r), e > 0 && t.right > f.right + u && (u = t.right - f.right + u + r)) : t.right > f.right && (u = t.right - f.right + r, e < 0 && t.left < f.left + u && (u = -(f.left + u - t.left + r))) : u = (i == "center" ? t.left + (t.right - t.left) / 2 - (f.right - f.left) / 2 : i == "start" == l ? t.left - r : t.right - (f.right - f.left) + r) - f.left, u || p) if (d) a.scrollBy(u, p);
        else {
            if (p) {
                let m2 = c.scrollTop;
                c.scrollTop += p, p = c.scrollTop - m2;
            }
            if (u) {
                let m3 = c.scrollLeft;
                c.scrollLeft += u, u = c.scrollLeft - m3;
            }
            t = {
                left: t.left - u,
                top: t.top - p,
                right: t.right - u,
                bottom: t.bottom - p
            };
        }
        if (d) break;
        c = c.assignedSlot || c.parentNode, i = s = "nearest";
    } else if (c.nodeType == 11) c = c.host;
    else break;
}
var Ee1 = class {
    constructor(){
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
    }
    eq(t) {
        return this.anchorNode == t.anchorNode && this.anchorOffset == t.anchorOffset && this.focusNode == t.focusNode && this.focusOffset == t.focusOffset;
    }
    setRange(t) {
        this.set(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset);
    }
    set(t, e, i, s) {
        this.anchorNode = t, this.anchorOffset = e, this.focusNode = i, this.focusOffset = s;
    }
}, ut = null;
function ds(n) {
    if (n.setActive) return n.setActive();
    if (ut) return n.focus(ut);
    let t = [];
    for(let e = n; e && (t.push(e, e.scrollTop, e.scrollLeft), e != e.ownerDocument); e = e.parentNode);
    if (n.focus(ut == null ? {
        get preventScroll () {
            return ut = {
                preventScroll: !0
            }, !0;
        }
    } : void 0), !ut) {
        ut = !1;
        for(let e1 = 0; e1 < t.length;){
            let i = t[e1++], s = t[e1++], r = t[e1++];
            i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != r && (i.scrollLeft = r);
        }
    }
}
var Si;
function Vt(n, t, e = t) {
    let i = Si || (Si = document.createRange());
    return i.setEnd(n, e), i.setStart(n, t), i;
}
function Lt(n, t, e) {
    let i = {
        key: t,
        code: t,
        keyCode: e,
        which: e,
        cancelable: !0
    }, s = new KeyboardEvent("keydown", i);
    s.synthetic = !0, n.dispatchEvent(s);
    let r = new KeyboardEvent("keyup", i);
    return r.synthetic = !0, n.dispatchEvent(r), s.defaultPrevented || r.defaultPrevented;
}
function wn(n) {
    for(; n;){
        if (n && (n.nodeType == 9 || n.nodeType == 11 && n.host)) return n;
        n = n.assignedSlot || n.parentNode;
    }
    return null;
}
function ps(n) {
    for(; n.attributes.length;)n.removeAttributeNode(n.attributes[0]);
}
var B1 = class {
    constructor(t, e, i = !0){
        this.node = t, this.offset = e, this.precise = i;
    }
    static before(t, e) {
        return new B1(t.parentNode, Le1(t), e);
    }
    static after(t, e) {
        return new B1(t.parentNode, Le1(t) + 1, e);
    }
}, mi = [], O1 = class {
    constructor(){
        this.parent = null, this.dom = null, this.dirty = 2;
    }
    get editorView() {
        if (!this.parent) throw new Error("Accessing view in orphan content view");
        return this.parent.editorView;
    }
    get overrideDOMText() {
        return null;
    }
    get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0;
    }
    get posAtEnd() {
        return this.posAtStart + this.length;
    }
    posBefore(t) {
        let e = this.posAtStart;
        for (let i of this.children){
            if (i == t) return e;
            e += i.length + i.breakAfter;
        }
        throw new RangeError("Invalid child in posBefore");
    }
    posAfter(t) {
        return this.posBefore(t) + t.length;
    }
    coordsAt(t, e) {
        return null;
    }
    sync(t) {
        if (this.dirty & 2) {
            let e = this.dom, i = null, s;
            for (let r of this.children){
                if (r.dirty) {
                    if (!r.dom && (s = i ? i.nextSibling : e.firstChild)) {
                        let o = O1.get(s);
                        (!o || !o.parent && o.constructor == r.constructor) && r.reuseDOM(s);
                    }
                    r.sync(t), r.dirty = 0;
                }
                if (s = i ? i.nextSibling : e.firstChild, t && !t.written && t.node == e && s != r.dom && (t.written = !0), r.dom.parentNode == e) for(; s && s != r.dom;)s = Ci(s);
                else e.insertBefore(r.dom, s);
                i = r.dom;
            }
            for(s = i ? i.nextSibling : e.firstChild, s && t && t.node == e && (t.written = !0); s;)s = Ci(s);
        } else if (this.dirty & 1) for (let e1 of this.children)e1.dirty && (e1.sync(t), e1.dirty = 0);
    }
    reuseDOM(t) {}
    localPosFromDOM(t, e) {
        let i;
        if (t == this.dom) i = this.dom.childNodes[e];
        else {
            let s = se1(t) == 0 ? 0 : e == 0 ? -1 : 1;
            for(;;){
                let r = t.parentNode;
                if (r == this.dom) break;
                s == 0 && r.firstChild != r.lastChild && (t == r.firstChild ? s = -1 : s = 1), t = r;
            }
            s < 0 ? i = t : i = t.nextSibling;
        }
        if (i == this.dom.firstChild) return 0;
        for(; i && !O1.get(i);)i = i.nextSibling;
        if (!i) return this.length;
        for(let s1 = 0, r1 = 0;; s1++){
            let o = this.children[s1];
            if (o.dom == i) return r1;
            r1 += o.length + o.breakAfter;
        }
    }
    domBoundsAround(t, e, i = 0) {
        let s = -1, r = -1, o = -1, l = -1;
        for(let h = 0, a = i, c = i; h < this.children.length; h++){
            let f = this.children[h], d = a + f.length;
            if (a < t && d > e) return f.domBoundsAround(t, e, a);
            if (d >= t && s == -1 && (s = h, r = a), a > e && f.dom.parentNode == this.dom) {
                o = h, l = c;
                break;
            }
            c = d, a = d + f.breakAfter;
        }
        return {
            from: r,
            to: l < 0 ? i + this.length : l,
            startDOM: (s ? this.children[s - 1].dom.nextSibling : null) || this.dom.firstChild,
            endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
        };
    }
    markDirty(t = !1) {
        this.dirty |= 2, this.markParentsDirty(t);
    }
    markParentsDirty(t) {
        for(let e = this.parent; e; e = e.parent){
            if (t && (e.dirty |= 2), e.dirty & 1) return;
            e.dirty |= 1, t = !1;
        }
    }
    setParent(t) {
        this.parent != t && (this.parent = t, this.dirty && this.markParentsDirty(!0));
    }
    setDOM(t) {
        this.dom && (this.dom.cmView = null), this.dom = t, t.cmView = this;
    }
    get rootView() {
        for(let t = this;;){
            let e = t.parent;
            if (!e) return t;
            t = e;
        }
    }
    replaceChildren(t, e, i = mi) {
        this.markDirty();
        for(let s = t; s < e; s++){
            let r = this.children[s];
            r.parent == this && r.destroy();
        }
        this.children.splice(t, e - t, ...i);
        for(let s1 = 0; s1 < i.length; s1++)i[s1].setParent(this);
    }
    ignoreMutation(t) {
        return !1;
    }
    ignoreEvent(t) {
        return !1;
    }
    childCursor(t = this.length) {
        return new ne1(this.children, t, this.children.length);
    }
    childPos(t, e = 1) {
        return this.childCursor().findPos(t, e);
    }
    toString() {
        let t = this.constructor.name.replace("View", "");
        return t + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (t == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
    }
    static get(t) {
        return t.cmView;
    }
    get isEditable() {
        return !0;
    }
    merge(t, e, i, s, r, o) {
        return !1;
    }
    become(t) {
        return !1;
    }
    getSide() {
        return 0;
    }
    destroy() {
        this.parent = null;
    }
};
O1.prototype.breakAfter = 0;
function Ci(n) {
    let t = n.nextSibling;
    return n.parentNode.removeChild(n), t;
}
var ne1 = class {
    constructor(t, e, i){
        this.children = t, this.pos = e, this.i = i, this.off = 0;
    }
    findPos(t, e = 1) {
        for(;;){
            if (t > this.pos || t == this.pos && (e > 0 || this.i == 0 || this.children[this.i - 1].breakAfter)) return this.off = t - this.pos, this;
            let i = this.children[--this.i];
            this.pos -= i.length + i.breakAfter;
        }
    }
};
function ms(n, t, e, i, s, r, o, l, h) {
    let { children: a  } = n, c = a.length ? a[t] : null, f = r.length ? r[r.length - 1] : null, d = f ? f.breakAfter : o;
    if (!(t == i && c && !o && !d && r.length < 2 && c.merge(e, s, r.length ? f : null, e == 0, l, h))) {
        if (i < a.length) {
            let u = a[i];
            u && s < u.length ? (t == i && (u = u.split(s), s = 0), !d && f && u.merge(0, s, f, !0, 0, h) ? r[r.length - 1] = u : (s && u.merge(0, s, null, !1, 0, h), r.push(u))) : u?.breakAfter && (f ? f.breakAfter = 1 : o = 1), i++;
        }
        for(c && (c.breakAfter = o, e > 0 && (!o && r.length && c.merge(e, c.length, r[0], !1, l, 0) ? c.breakAfter = r.shift().breakAfter : (e < c.length || c.children.length && c.children[c.children.length - 1].length == 0) && c.merge(e, c.length, null, !1, l, 0), t++)); t < i && r.length;)if (a[i - 1].become(r[r.length - 1])) i--, r.pop(), h = r.length ? 0 : l;
        else if (a[t].become(r[0])) t++, r.shift(), l = r.length ? 0 : h;
        else break;
        !r.length && t && i < a.length && !a[t - 1].breakAfter && a[i].merge(0, 0, a[t - 1], !1, l, h) && t--, (t < i || r.length) && n.replaceChildren(t, i, r);
    }
}
function gs(n, t, e, i, s, r) {
    let o = n.childCursor(), { i: l , off: h  } = o.findPos(e, 1), { i: a , off: c  } = o.findPos(t, -1), f = t - e;
    for (let d of i)f += d.length;
    n.length += f, ms(n, a, c, l, h, i, 0, s, r);
}
var F1 = typeof navigator < "u" ? navigator : {
    userAgent: "",
    vendor: "",
    platform: ""
}, Be1 = typeof document < "u" ? document : {
    documentElement: {
        style: {}
    }
}, Pe1 = /Edge\/(\d+)/.exec(F1.userAgent), bs = /MSIE \d/.test(F1.userAgent), He1 = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(F1.userAgent), ve1 = !!(bs || He1 || Pe1), Mi = !ve1 && /gecko\/(\d+)/i.test(F1.userAgent), xe1 = !ve1 && /Chrome\/(\d+)/.exec(F1.userAgent), ki = "webkitFontSmoothing" in Be1.documentElement.style, ys = !ve1 && /Apple Computer/.test(F1.vendor), Ai = ys && (/Mobile\/\w+/.test(F1.userAgent) || F1.maxTouchPoints > 2), g2 = {
    mac: Ai || /Mac/.test(F1.platform),
    windows: /Win/.test(F1.platform),
    linux: /Linux|X11/.test(F1.platform),
    ie: ve1,
    ie_version: bs ? Be1.documentMode || 6 : He1 ? +He1[1] : Pe1 ? +Pe1[1] : 0,
    gecko: Mi,
    gecko_version: Mi ? +(/Firefox\/(\d+)/.exec(F1.userAgent) || [
        0,
        0
    ])[1] : 0,
    chrome: !!xe1,
    chrome_version: xe1 ? +xe1[1] : 0,
    ios: Ai,
    android: /Android\b/.test(F1.userAgent),
    webkit: ki,
    safari: ys,
    webkit_version: ki ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [
        0,
        0
    ])[1] : 0,
    tabSize: Be1.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
}, vn = 256, G1 = class extends O1 {
    constructor(t){
        super(), this.text = t;
    }
    get length() {
        return this.text.length;
    }
    createDOM(t) {
        this.setDOM(t || document.createTextNode(this.text));
    }
    sync(t) {
        this.dom || this.createDOM(), this.dom.nodeValue != this.text && (t && t.node == this.dom && (t.written = !0), this.dom.nodeValue = this.text);
    }
    reuseDOM(t) {
        t.nodeType == 3 && this.createDOM(t);
    }
    merge(t, e, i) {
        return i && (!(i instanceof G1) || this.length - (e - t) + i.length > vn) ? !1 : (this.text = this.text.slice(0, t) + (i ? i.text : "") + this.text.slice(e), this.markDirty(), !0);
    }
    split(t) {
        let e = new G1(this.text.slice(t));
        return this.text = this.text.slice(0, t), this.markDirty(), e;
    }
    localPosFromDOM(t, e) {
        return t == this.dom ? e : e ? this.text.length : 0;
    }
    domAtPos(t) {
        return new B1(this.dom, t);
    }
    domBoundsAround(t, e, i) {
        return {
            from: i,
            to: i + this.length,
            startDOM: this.dom,
            endDOM: this.dom.nextSibling
        };
    }
    coordsAt(t, e) {
        return Ne1(this.dom, t, e);
    }
}, q1 = class extends O1 {
    constructor(t, e = [], i = 0){
        super(), this.mark = t, this.children = e, this.length = i;
        for (let s of e)s.setParent(this);
    }
    setAttrs(t) {
        if (ps(t), this.mark.class && (t.className = this.mark.class), this.mark.attrs) for(let e in this.mark.attrs)t.setAttribute(e, this.mark.attrs[e]);
        return t;
    }
    reuseDOM(t) {
        t.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(t), this.dirty |= 6);
    }
    sync(t) {
        this.dom ? this.dirty & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(t);
    }
    merge(t, e, i, s, r, o) {
        return i && (!(i instanceof q1 && i.mark.eq(this.mark)) || t && r <= 0 || e < this.length && o <= 0) ? !1 : (gs(this, t, e, i ? i.children : [], r - 1, o - 1), this.markDirty(), !0);
    }
    split(t) {
        let e = [], i = 0, s = -1, r = 0;
        for (let l of this.children){
            let h = i + l.length;
            h > t && e.push(i < t ? l.split(t - i) : l), s < 0 && i >= t && (s = r), i = h, r++;
        }
        let o = this.length - t;
        return this.length = t, s > -1 && (this.children.length = s, this.markDirty()), new q1(this.mark, e, o);
    }
    domAtPos(t) {
        return vs(this.dom, this.children, t);
    }
    coordsAt(t, e) {
        return Ss(this, t, e);
    }
};
function Ne1(n, t, e) {
    let i = n.nodeValue.length;
    t > i && (t = i);
    let s = t, r = t, o = 0;
    t == 0 && e < 0 || t == i && e >= 0 ? g2.chrome || g2.gecko || (t ? (s--, o = 1) : r < i && (r++, o = -1)) : e < 0 ? s-- : r < i && r++;
    let l = Vt(n, s, r).getClientRects();
    if (!l.length) return us;
    let h = l[(o ? o < 0 : e >= 0) ? 0 : l.length - 1];
    return g2.safari && !o && h.width == 0 && (h = Array.prototype.find.call(l, (a)=>a.width) || h), o ? we1(h, o < 0) : h || null;
}
var j1 = class extends O1 {
    constructor(t, e, i){
        super(), this.widget = t, this.length = e, this.side = i, this.prevWidget = null;
    }
    static create(t, e, i) {
        return new (t.customView || j1)(t, e, i);
    }
    split(t) {
        let e = j1.create(this.widget, this.length - t, this.side);
        return this.length -= t, e;
    }
    sync() {
        (!this.dom || !this.widget.updateDOM(this.dom)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(this.editorView)), this.dom.contentEditable = "false");
    }
    getSide() {
        return this.side;
    }
    merge(t, e, i, s, r, o) {
        return i && (!(i instanceof j1) || !this.widget.compare(i.widget) || t > 0 && r <= 0 || e < this.length && o <= 0) ? !1 : (this.length = t + (i ? i.length : 0) + (this.length - e), !0);
    }
    become(t) {
        return t.length == this.length && t instanceof j1 && t.side == this.side && this.widget.constructor == t.widget.constructor ? (this.widget.eq(t.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, !0) : !1;
    }
    ignoreMutation() {
        return !0;
    }
    ignoreEvent(t) {
        return this.widget.ignoreEvent(t);
    }
    get overrideDOMText() {
        if (this.length == 0) return v.empty;
        let t = this;
        for(; t.parent;)t = t.parent;
        let e = t.editorView, i = e && e.state.doc, s = this.posAtStart;
        return i ? i.slice(s, s + this.length) : v.empty;
    }
    domAtPos(t) {
        return t == 0 ? B1.before(this.dom) : B1.after(this.dom, t == this.length);
    }
    domBoundsAround() {
        return null;
    }
    coordsAt(t, e) {
        let i = this.dom.getClientRects(), s = null;
        if (!i.length) return us;
        for(let r = t > 0 ? i.length - 1 : 0; s = i[r], !(t > 0 ? r == 0 : r == i.length - 1 || s.top < s.bottom); r += t > 0 ? -1 : 1);
        return t == 0 && e > 0 || t == this.length && e <= 0 ? s : we1(s, t == 0);
    }
    get isEditable() {
        return !1;
    }
    destroy() {
        super.destroy(), this.dom && this.widget.destroy(this.dom);
    }
}, re1 = class extends j1 {
    domAtPos(t) {
        let { topView: e , text: i  } = this.widget;
        return e ? Ve1(t, 0, e, i, (s, r)=>s.domAtPos(r), (s)=>new B1(i, Math.min(s, i.nodeValue.length))) : new B1(i, Math.min(t, i.nodeValue.length));
    }
    sync() {
        this.setDOM(this.widget.toDOM());
    }
    localPosFromDOM(t, e) {
        let { topView: i , text: s  } = this.widget;
        return i ? ws(t, e, i, s) : Math.min(e, this.length);
    }
    ignoreMutation() {
        return !1;
    }
    get overrideDOMText() {
        return null;
    }
    coordsAt(t, e) {
        let { topView: i , text: s  } = this.widget;
        return i ? Ve1(t, e, i, s, (r, o, l)=>r.coordsAt(o, l), (r, o)=>Ne1(s, r, o)) : Ne1(s, t, e);
    }
    destroy() {
        var t;
        super.destroy(), (t = this.widget.topView) === null || t === void 0 || t.destroy();
    }
    get isEditable() {
        return !0;
    }
};
function Ve1(n, t, e, i, s, r) {
    if (e instanceof q1) {
        for (let o of e.children){
            let l = yt(o.dom, i), h = l ? i.nodeValue.length : o.length;
            if (n < h || n == h && o.getSide() <= 0) return l ? Ve1(n, t, o, i, s, r) : s(o, n, t);
            n -= h;
        }
        return s(e, e.length, -1);
    } else return e.dom == i ? r(n, t) : s(e, n, t);
}
function ws(n, t, e, i) {
    if (e instanceof q1) for (let s of e.children){
        let r = 0, o = yt(s.dom, i);
        if (yt(s.dom, n)) return r + (o ? ws(n, t, s, i) : s.localPosFromDOM(n, t));
        r += o ? i.nodeValue.length : s.length;
    }
    else if (e.dom == i) return Math.min(t, i.nodeValue.length);
    return e.localPosFromDOM(n, t);
}
var lt1 = class extends O1 {
    constructor(t){
        super(), this.side = t;
    }
    get length() {
        return 0;
    }
    merge() {
        return !1;
    }
    become(t) {
        return t instanceof lt1 && t.side == this.side;
    }
    split() {
        return new lt1(this.side);
    }
    sync() {
        if (!this.dom) {
            let t = document.createElement("img");
            t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), this.setDOM(t);
        }
    }
    getSide() {
        return this.side;
    }
    domAtPos(t) {
        return B1.before(this.dom);
    }
    localPosFromDOM() {
        return 0;
    }
    domBoundsAround() {
        return null;
    }
    coordsAt(t) {
        let e = this.dom.getBoundingClientRect(), i = xn(this, this.side > 0 ? -1 : 1);
        return i && i.top < e.bottom && i.bottom > e.top ? {
            left: e.left,
            right: e.right,
            top: i.top,
            bottom: i.bottom
        } : e;
    }
    get overrideDOMText() {
        return v.empty;
    }
};
G1.prototype.children = j1.prototype.children = lt1.prototype.children = mi;
function xn(n, t) {
    let e = n.parent, i = e ? e.children.indexOf(n) : -1;
    for(; e && i >= 0;)if (t < 0 ? i > 0 : i < e.children.length) {
        let s = e.children[i + t];
        if (s instanceof G1) {
            let r = s.coordsAt(t < 0 ? s.length : 0, t);
            if (r) return r;
        }
        i += t;
    } else if (e instanceof q1 && e.parent) i = e.parent.children.indexOf(e) + (t < 0 ? 0 : 1), e = e.parent;
    else {
        let s1 = e.dom.lastChild;
        if (s1 && s1.nodeName == "BR") return s1.getClientRects()[0];
        break;
    }
}
function vs(n, t, e) {
    let i = 0;
    for(let s = 0; i < t.length; i++){
        let r = t[i], o = s + r.length;
        if (!(o == s && r.getSide() <= 0)) {
            if (e > s && e < o && r.dom.parentNode == n) return r.domAtPos(e - s);
            if (e <= s) break;
            s = o;
        }
    }
    for(; i > 0; i--){
        let s1 = t[i - 1].dom;
        if (s1.parentNode == n) return B1.after(s1);
    }
    return new B1(n, 0);
}
function xs(n, t, e) {
    let i, { children: s  } = n;
    e > 0 && t instanceof q1 && s.length && (i = s[s.length - 1]) instanceof q1 && i.mark.eq(t.mark) ? xs(i, t.children[0], e - 1) : (s.push(t), t.setParent(n)), n.length += t.length;
}
function Ss(n, t, e) {
    for(let r = 0, o = 0; o < n.children.length; o++){
        let l = n.children[o], h = r + l.length, a;
        if ((e <= 0 || h == n.length || l.getSide() > 0 ? h >= t : h > t) && (t < h || o + 1 == n.children.length || (a = n.children[o + 1]).length || a.getSide() > 0)) {
            let c = 0;
            if (h == r) {
                if (l.getSide() <= 0) continue;
                c = e = -l.getSide();
            }
            let f = l.coordsAt(Math.max(0, t - r), e);
            return c && f ? we1(f, e < 0) : f;
        }
        r = h;
    }
    let i = n.dom.lastChild;
    if (!i) return n.dom.getBoundingClientRect();
    let s = Nt(i);
    return s[s.length - 1] || null;
}
function We1(n, t) {
    for(let e in n)e == "class" && t.class ? t.class += " " + n.class : e == "style" && t.style ? t.style += ";" + n.style : t[e] = n[e];
    return t;
}
function gi(n, t) {
    if (n == t) return !0;
    if (!n || !t) return !1;
    let e = Object.keys(n), i = Object.keys(t);
    if (e.length != i.length) return !1;
    for (let s of e)if (i.indexOf(s) == -1 || n[s] !== t[s]) return !1;
    return !0;
}
function ze1(n, t, e) {
    let i = null;
    if (t) for(let s in t)e && s in e || n.removeAttribute(i = s);
    if (e) for(let s1 in e)t && t[s1] == e[s1] || n.setAttribute(i = s1, e[s1]);
    return !!i;
}
var X1 = class {
    eq(t) {
        return !1;
    }
    updateDOM(t) {
        return !1;
    }
    compare(t) {
        return this == t || this.constructor == t.constructor && this.eq(t);
    }
    get estimatedHeight() {
        return -1;
    }
    ignoreEvent(t) {
        return !0;
    }
    get customView() {
        return null;
    }
    destroy(t) {}
}, D1 = function(n) {
    return n[n.Text = 0] = "Text", n[n.WidgetBefore = 1] = "WidgetBefore", n[n.WidgetAfter = 2] = "WidgetAfter", n[n.WidgetRange = 3] = "WidgetRange", n;
}(D1 || (D1 = {})), M1 = class extends j {
    constructor(t, e, i, s){
        super(), this.startSide = t, this.endSide = e, this.widget = i, this.spec = s;
    }
    get heightRelevant() {
        return !1;
    }
    static mark(t) {
        return new wt(t);
    }
    static widget(t) {
        let e = t.side || 0, i = !!t.block;
        return e += i ? e > 0 ? 3e8 : -4e8 : e > 0 ? 1e8 : -1e8, new U1(t, e, e, i, t.widget || null, !1);
    }
    static replace(t) {
        let e = !!t.block, i, s;
        if (t.isBlockGap) i = -5e8, s = 4e8;
        else {
            let { start: r , end: o  } = Cs(t, e);
            i = (r ? e ? -3e8 : -1 : 5e8) - 1, s = (o ? e ? 2e8 : 1 : -6e8) + 1;
        }
        return new U1(t, i, s, e, t.widget || null, !0);
    }
    static line(t) {
        return new ct(t);
    }
    static set(t, e = !1) {
        return P.of(t, e);
    }
    hasHeight() {
        return this.widget ? this.widget.estimatedHeight > -1 : !1;
    }
};
M1.none = P.empty;
var wt = class extends M1 {
    constructor(t){
        let { start: e , end: i  } = Cs(t);
        super(e ? -1 : 5e8, i ? 1 : -6e8, null, t), this.tagName = t.tagName || "span", this.class = t.class || "", this.attrs = t.attributes || null;
    }
    eq(t) {
        return this == t || t instanceof wt && this.tagName == t.tagName && this.class == t.class && gi(this.attrs, t.attrs);
    }
    range(t, e = t) {
        if (t >= e) throw new RangeError("Mark decorations may not be empty");
        return super.range(t, e);
    }
};
wt.prototype.point = !1;
var ct = class extends M1 {
    constructor(t){
        super(-2e8, -2e8, null, t);
    }
    eq(t) {
        return t instanceof ct && gi(this.spec.attributes, t.spec.attributes);
    }
    range(t, e = t) {
        if (e != t) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(t, e);
    }
};
ct.prototype.mapMode = M.TrackBefore;
ct.prototype.point = !0;
var U1 = class extends M1 {
    constructor(t, e, i, s, r, o){
        super(e, i, r, t), this.block = s, this.isReplace = o, this.mapMode = s ? e <= 0 ? M.TrackBefore : M.TrackAfter : M.TrackDel;
    }
    get type() {
        return this.startSide < this.endSide ? D1.WidgetRange : this.startSide <= 0 ? D1.WidgetBefore : D1.WidgetAfter;
    }
    get heightRelevant() {
        return this.block || !!this.widget && this.widget.estimatedHeight >= 5;
    }
    eq(t) {
        return t instanceof U1 && Sn(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
    }
    range(t, e = t) {
        if (this.isReplace && (t > e || t == e && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && e != t) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(t, e);
    }
};
U1.prototype.point = !0;
function Cs(n, t = !1) {
    let { inclusiveStart: e , inclusiveEnd: i  } = n;
    return e == null && (e = n.inclusive), i == null && (i = n.inclusive), {
        start: e ?? t,
        end: i ?? t
    };
}
function Sn(n, t) {
    return n == t || !!(n && t && n.compare(t));
}
function Fe1(n, t, e, i = 0) {
    let s = e.length - 1;
    s >= 0 && e[s] + i >= n ? e[s] = Math.max(e[s], t) : e.push(n, t);
}
var H1 = class extends O1 {
    constructor(){
        super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
    }
    merge(t, e, i, s, r, o) {
        if (i) {
            if (!(i instanceof H1)) return !1;
            this.dom || i.transferDOM(this);
        }
        return s && this.setDeco(i ? i.attrs : null), gs(this, t, e, i ? i.children : [], r, o), !0;
    }
    split(t) {
        let e = new H1;
        if (e.breakAfter = this.breakAfter, this.length == 0) return e;
        let { i , off: s  } = this.childPos(t);
        s && (e.append(this.children[i].split(s), 0), this.children[i].merge(s, this.children[i].length, null, !1, 0, 0), i++);
        for(let r = i; r < this.children.length; r++)e.append(this.children[r], 0);
        for(; i > 0 && this.children[i - 1].length == 0;)this.children[--i].destroy();
        return this.children.length = i, this.markDirty(), this.length = t, e;
    }
    transferDOM(t) {
        !this.dom || (this.markDirty(), t.setDOM(this.dom), t.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
    }
    setDeco(t) {
        gi(this.attrs, t) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t);
    }
    append(t, e) {
        xs(this, t, e);
    }
    addLineDeco(t) {
        let e = t.spec.attributes, i = t.spec.class;
        e && (this.attrs = We1(e, this.attrs || {})), i && (this.attrs = We1({
            class: i
        }, this.attrs || {}));
    }
    domAtPos(t) {
        return vs(this.dom, this.children, t);
    }
    reuseDOM(t) {
        t.nodeName == "DIV" && (this.setDOM(t), this.dirty |= 6);
    }
    sync(t) {
        var e;
        this.dom ? this.dirty & 4 && (ps(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (ze1(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t);
        let i = this.dom.lastChild;
        for(; i && O1.get(i) instanceof q1;)i = i.lastChild;
        if (!i || !this.length || i.nodeName != "BR" && ((e = O1.get(i)) === null || e === void 0 ? void 0 : e.isEditable) == !1 && (!g2.ios || !this.children.some((s)=>s instanceof G1))) {
            let s = document.createElement("BR");
            s.cmIgnore = !0, this.dom.appendChild(s);
        }
    }
    measureTextSize() {
        if (this.children.length == 0 || this.length > 20) return null;
        let t = 0;
        for (let e of this.children){
            if (!(e instanceof G1)) return null;
            let i = Nt(e.dom);
            if (i.length != 1) return null;
            t += i[0].width;
        }
        return {
            lineHeight: this.dom.getBoundingClientRect().height,
            charWidth: t / this.length
        };
    }
    coordsAt(t, e) {
        return Ss(this, t, e);
    }
    become(t) {
        return !1;
    }
    get type() {
        return D1.Text;
    }
    static find(t, e) {
        for(let i = 0, s = 0; i < t.children.length; i++){
            let r = t.children[i], o = s + r.length;
            if (o >= e) {
                if (r instanceof H1) return r;
                if (o > e) break;
            }
            s = o + r.breakAfter;
        }
        return null;
    }
}, Y1 = class extends O1 {
    constructor(t, e, i){
        super(), this.widget = t, this.length = e, this.type = i, this.breakAfter = 0, this.prevWidget = null;
    }
    merge(t, e, i, s, r, o) {
        return i && (!(i instanceof Y1) || !this.widget.compare(i.widget) || t > 0 && r <= 0 || e < this.length && o <= 0) ? !1 : (this.length = t + (i ? i.length : 0) + (this.length - e), !0);
    }
    domAtPos(t) {
        return t == 0 ? B1.before(this.dom) : B1.after(this.dom, t == this.length);
    }
    split(t) {
        let e = this.length - t;
        this.length = t;
        let i = new Y1(this.widget, e, this.type);
        return i.breakAfter = this.breakAfter, i;
    }
    get children() {
        return mi;
    }
    sync() {
        (!this.dom || !this.widget.updateDOM(this.dom)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(this.editorView)), this.dom.contentEditable = "false");
    }
    get overrideDOMText() {
        return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : v.empty;
    }
    domBoundsAround() {
        return null;
    }
    become(t) {
        return t instanceof Y1 && t.type == this.type && t.widget.constructor == this.widget.constructor ? (t.widget.eq(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, this.breakAfter = t.breakAfter, !0) : !1;
    }
    ignoreMutation() {
        return !0;
    }
    ignoreEvent(t) {
        return this.widget.ignoreEvent(t);
    }
    destroy() {
        super.destroy(), this.dom && this.widget.destroy(this.dom);
    }
}, Wt = class {
    constructor(t, e, i, s){
        this.doc = t, this.pos = e, this.end = i, this.disallowBlockEffectsFor = s, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t.iter(), this.skip = e;
    }
    posCovered() {
        if (this.content.length == 0) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
        let t = this.content[this.content.length - 1];
        return !t.breakAfter && !(t instanceof Y1 && t.type == D1.WidgetBefore);
    }
    getLine() {
        return this.curLine || (this.content.push(this.curLine = new H1), this.atCursorPos = !0), this.curLine;
    }
    flushBuffer(t) {
        this.pendingBuffer && (this.curLine.append(Yt(new lt1(-1), t), t.length), this.pendingBuffer = 0);
    }
    addBlockWidget(t) {
        this.flushBuffer([]), this.curLine = null, this.content.push(t);
    }
    finish(t) {
        t ? this.pendingBuffer = 0 : this.flushBuffer([]), this.posCovered() || this.getLine();
    }
    buildText(t, e, i) {
        for(; t > 0;){
            if (this.textOff == this.text.length) {
                let { value: r , lineBreak: o , done: l  } = this.cursor.next(this.skip);
                if (this.skip = 0, l) throw new Error("Ran out of text content when drawing inline views");
                if (o) {
                    this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer([]), this.curLine = null, t--;
                    continue;
                } else this.text = r, this.textOff = 0;
            }
            let s = Math.min(this.text.length - this.textOff, t, 512);
            this.flushBuffer(e.slice(0, i)), this.getLine().append(Yt(new G1(this.text.slice(this.textOff, this.textOff + s)), e), i), this.atCursorPos = !0, this.textOff += s, t -= s, i = 0;
        }
    }
    span(t, e, i, s) {
        this.buildText(e - t, i, s), this.pos = e, this.openStart < 0 && (this.openStart = s);
    }
    point(t, e, i, s, r, o) {
        if (this.disallowBlockEffectsFor[o] && i instanceof U1) {
            if (i.block) throw new RangeError("Block decorations may not be specified via plugins");
            if (e > this.doc.lineAt(this.pos).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
        }
        let l = e - t;
        if (i instanceof U1) if (i.block) {
            let { type: h  } = i;
            h == D1.WidgetAfter && !this.posCovered() && this.getLine(), this.addBlockWidget(new Y1(i.widget || new oe1("div"), l, h));
        } else {
            let h1 = j1.create(i.widget || new oe1("span"), l, i.startSide), a = this.atCursorPos && !h1.isEditable && r <= s.length && (t < e || i.startSide > 0), c = !h1.isEditable && (t < e || i.startSide <= 0), f = this.getLine();
            this.pendingBuffer == 2 && !a && (this.pendingBuffer = 0), this.flushBuffer(s), a && (f.append(Yt(new lt1(1), s), r), r = s.length + Math.max(0, r - s.length)), f.append(Yt(h1, s), r), this.atCursorPos = c, this.pendingBuffer = c ? t < e ? 1 : 2 : 0;
        }
        else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
        l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e), this.openStart < 0 && (this.openStart = r);
    }
    static build(t, e, i, s, r) {
        let o = new Wt(t, e, i, r);
        return o.openEnd = P.spans(s, e, i, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
    }
};
function Yt(n, t) {
    for (let e of t)n = new q1(e, [
        n
    ], n.length);
    return n;
}
var oe1 = class extends X1 {
    constructor(t){
        super(), this.tag = t;
    }
    eq(t) {
        return t.tag == this.tag;
    }
    toDOM() {
        return document.createElement(this.tag);
    }
    updateDOM(t) {
        return t.nodeName.toLowerCase() == this.tag;
    }
}, Ms = A.define(), ks = A.define(), As = A.define(), Ds = A.define(), Ie1 = A.define(), Os = A.define(), Ts = A.define({
    combine: (n)=>n.some((t)=>t)
}), vt = class {
    constructor(t, e = "nearest", i = "nearest", s = 5, r = 5){
        this.range = t, this.y = e, this.x = i, this.yMargin = s, this.xMargin = r;
    }
    map(t) {
        return t.empty ? this : new vt(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin);
    }
}, Di = y.define({
    map: (n, t)=>n.map(t)
});
function nt1(n, t, e) {
    let i = n.facet(Ds);
    i.length ? i[0](t) : window.onerror ? window.onerror(String(t), e, void 0, void 0, t) : e ? console.error(e + ":", t) : console.error(t);
}
var jt = A.define({
    combine: (n)=>n.length ? n[0] : !0
}), Cn = 0, kt = A.define(), V1 = class {
    constructor(t, e, i, s){
        this.id = t, this.create = e, this.domEventHandlers = i, this.extension = s(this);
    }
    static define(t, e) {
        let { eventHandlers: i , provide: s , decorations: r  } = e || {};
        return new V1(Cn++, t, i, (o)=>{
            let l = [
                kt.of(o)
            ];
            return r && l.push(zt.of((h)=>{
                let a = h.plugin(o);
                return a ? r(a) : M1.none;
            })), s && l.push(s(o)), l;
        });
    }
    static fromClass(t, e) {
        return V1.define((i)=>new t(i), e);
    }
}, Et = class {
    constructor(t){
        this.spec = t, this.mustUpdate = null, this.value = null;
    }
    update(t) {
        if (this.value) {
            if (this.mustUpdate) {
                let e = this.mustUpdate;
                if (this.mustUpdate = null, this.value.update) try {
                    this.value.update(e);
                } catch (i) {
                    if (nt1(e.state, i, "CodeMirror plugin crashed"), this.value.destroy) try {
                        this.value.destroy();
                    } catch  {}
                    this.deactivate();
                }
            }
        } else if (this.spec) try {
            this.value = this.spec.create(t);
        } catch (e1) {
            nt1(t.state, e1, "CodeMirror plugin crashed"), this.deactivate();
        }
        return this;
    }
    destroy(t) {
        var e;
        if (!((e = this.value) === null || e === void 0) && e.destroy) try {
            this.value.destroy();
        } catch (i) {
            nt1(t.state, i, "CodeMirror plugin crashed");
        }
    }
    deactivate() {
        this.spec = this.value = null;
    }
}, Rs = A.define(), bi = A.define(), zt = A.define(), Ls = A.define(), Es = A.define(), At = A.define(), I1 = class {
    constructor(t, e, i, s){
        this.fromA = t, this.toA = e, this.fromB = i, this.toB = s;
    }
    join(t) {
        return new I1(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB));
    }
    addToSet(t) {
        let e = t.length, i = this;
        for(; e > 0; e--){
            let s = t[e - 1];
            if (!(s.fromA > i.toA)) {
                if (s.toA < i.fromA) break;
                i = i.join(s), t.splice(e - 1, 1);
            }
        }
        return t.splice(e, 0, i), t;
    }
    static extendWithRanges(t, e) {
        if (e.length == 0) return t;
        let i = [];
        for(let s = 0, r = 0, o = 0, l = 0;; s++){
            let h = s == t.length ? null : t[s], a = o - l, c = h ? h.fromB : 1e9;
            for(; r < e.length && e[r] < c;){
                let f = e[r], d = e[r + 1], u = Math.max(l, f), p = Math.min(c, d);
                if (u <= p && new I1(u + a, p + a, u, p).addToSet(i), d > c) break;
                r += 2;
            }
            if (!h) return i;
            new I1(h.fromA, h.toA, h.fromB, h.toB).addToSet(i), o = h.toA, l = h.toB;
        }
    }
}, xt = class {
    constructor(t, e, i){
        this.view = t, this.state = e, this.transactions = i, this.flags = 0, this.startState = t.state, this.changes = x.empty(this.startState.doc.length);
        for (let o of i)this.changes = this.changes.compose(o.changes);
        let s = [];
        this.changes.iterChangedRanges((o, l, h, a)=>s.push(new I1(o, l, h, a))), this.changedRanges = s;
        let r = t.hasFocus;
        r != t.inputState.notifiedFocused && (t.inputState.notifiedFocused = r, this.flags |= 1);
    }
    static create(t, e, i) {
        return new xt(t, e, i);
    }
    get viewportChanged() {
        return (this.flags & 4) > 0;
    }
    get heightChanged() {
        return (this.flags & 2) > 0;
    }
    get geometryChanged() {
        return this.docChanged || (this.flags & 10) > 0;
    }
    get focusChanged() {
        return (this.flags & 1) > 0;
    }
    get docChanged() {
        return !this.changes.empty;
    }
    get selectionSet() {
        return this.transactions.some((t)=>t.selection);
    }
    get empty() {
        return this.flags == 0 && this.transactions.length == 0;
    }
}, R1 = function(n) {
    return n[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL", n;
}(R1 || (R1 = {})), qe1 = R1.LTR, Mn = R1.RTL;
function Bs(n) {
    let t = [];
    for(let e = 0; e < n.length; e++)t.push(1 << +n[e]);
    return t;
}
var kn = Bs("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), An = Bs("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), Ke1 = Object.create(null), K1 = [];
for (let n1 of [
    "()",
    "[]",
    "{}"
]){
    let t1 = n1.charCodeAt(0), e = n1.charCodeAt(1);
    Ke1[t1] = e, Ke1[e] = -t1;
}
function Dn(n) {
    return n <= 247 ? kn[n] : 1424 <= n && n <= 1524 ? 2 : 1536 <= n && n <= 1785 ? An[n - 1536] : 1774 <= n && n <= 2220 ? 4 : 8192 <= n && n <= 8203 || n == 8204 ? 256 : 1;
}
var On = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, rt1 = class {
    constructor(t, e, i){
        this.from = t, this.to = e, this.level = i;
    }
    get dir() {
        return this.level % 2 ? Mn : qe1;
    }
    side(t, e) {
        return this.dir == e == t ? this.to : this.from;
    }
    static find(t, e, i, s) {
        let r = -1;
        for(let o = 0; o < t.length; o++){
            let l = t[o];
            if (l.from <= e && l.to >= e) {
                if (l.level == i) return o;
                (r < 0 || (s != 0 ? s < 0 ? l.from < e : l.to > e : t[r].level > l.level)) && (r = o);
            }
        }
        if (r < 0) throw new RangeError("Index out of range");
        return r;
    }
}, T2 = [];
function Ps(n, t) {
    let e = n.length, i = t == qe1 ? 1 : 2, s = t == qe1 ? 2 : 1;
    if (!n || i == 1 && !On.test(n)) return Hs(e);
    for(let o = 0, l = i, h = i; o < e; o++){
        let a = Dn(n.charCodeAt(o));
        a == 512 ? a = l : a == 8 && h == 4 && (a = 16), T2[o] = a == 4 ? 2 : a, a & 7 && (h = a), l = a;
    }
    for(let o1 = 0, l1 = i, h1 = i; o1 < e; o1++){
        let a1 = T2[o1];
        if (a1 == 128) o1 < e - 1 && l1 == T2[o1 + 1] && l1 & 24 ? a1 = T2[o1] = l1 : T2[o1] = 256;
        else if (a1 == 64) {
            let c = o1 + 1;
            for(; c < e && T2[c] == 64;)c++;
            let f = o1 && l1 == 8 || c < e && T2[c] == 8 ? h1 == 1 ? 1 : 8 : 256;
            for(let d = o1; d < c; d++)T2[d] = f;
            o1 = c - 1;
        } else a1 == 8 && h1 == 1 && (T2[o1] = 1);
        l1 = a1, a1 & 7 && (h1 = a1);
    }
    for(let o2 = 0, l2 = 0, h2 = 0, a2, c1, f1; o2 < e; o2++)if (c1 = Ke1[a2 = n.charCodeAt(o2)]) if (c1 < 0) {
        for(let d1 = l2 - 3; d1 >= 0; d1 -= 3)if (K1[d1 + 1] == -c1) {
            let u = K1[d1 + 2], p = u & 2 ? i : u & 4 ? u & 1 ? s : i : 0;
            p && (T2[o2] = T2[K1[d1]] = p), l2 = d1;
            break;
        }
    } else {
        if (K1.length == 189) break;
        K1[l2++] = o2, K1[l2++] = a2, K1[l2++] = h2;
    }
    else if ((f1 = T2[o2]) == 2 || f1 == 1) {
        let d2 = f1 == i;
        h2 = d2 ? 0 : 1;
        for(let u1 = l2 - 3; u1 >= 0; u1 -= 3){
            let p1 = K1[u1 + 2];
            if (p1 & 2) break;
            if (d2) K1[u1 + 2] |= 2;
            else {
                if (p1 & 4) break;
                K1[u1 + 2] |= 4;
            }
        }
    }
    for(let o3 = 0; o3 < e; o3++)if (T2[o3] == 256) {
        let l3 = o3 + 1;
        for(; l3 < e && T2[l3] == 256;)l3++;
        let h3 = (o3 ? T2[o3 - 1] : i) == 1, a3 = (l3 < e ? T2[l3] : i) == 1, c2 = h3 == a3 ? h3 ? 1 : 2 : i;
        for(let f2 = o3; f2 < l3; f2++)T2[f2] = c2;
        o3 = l3 - 1;
    }
    let r = [];
    if (i == 1) for(let o4 = 0; o4 < e;){
        let l4 = o4, h4 = T2[o4++] != 1;
        for(; o4 < e && h4 == (T2[o4] != 1);)o4++;
        if (h4) for(let a4 = o4; a4 > l4;){
            let c3 = a4, f3 = T2[--a4] != 2;
            for(; a4 > l4 && f3 == (T2[a4 - 1] != 2);)a4--;
            r.push(new rt1(a4, c3, f3 ? 2 : 1));
        }
        else r.push(new rt1(l4, o4, 0));
    }
    else for(let o5 = 0; o5 < e;){
        let l5 = o5, h5 = T2[o5++] == 2;
        for(; o5 < e && h5 == (T2[o5] == 2);)o5++;
        r.push(new rt1(l5, o5, h5 ? 1 : 2));
    }
    return r;
}
function Hs(n) {
    return [
        new rt1(0, n, 0)
    ];
}
var Ns = "";
function Vs(n, t, e, i, s) {
    var r;
    let o = i.head - n.from, l = -1;
    if (o == 0) {
        if (!s || !n.length) return null;
        t[0].level != e && (o = t[0].side(!1, e), l = 0);
    } else if (o == n.length) {
        if (s) return null;
        let d = t[t.length - 1];
        d.level != e && (o = d.side(!0, e), l = t.length - 1);
    }
    l < 0 && (l = rt1.find(t, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc));
    let h = t[l];
    o == h.side(s, e) && (h = t[l += s ? 1 : -1], o = h.side(!s, e));
    let a = s == (h.dir == e), c = ie(n.text, o, a);
    if (Ns = n.text.slice(Math.min(o, c), Math.max(o, c)), c != h.side(s, e)) return g.cursor(c + n.from, a ? -1 : 1, h.level);
    let f = l == (s ? t.length - 1 : 0) ? null : t[l + (s ? 1 : -1)];
    return !f && h.level != e ? g.cursor(s ? n.to : n.from, s ? -1 : 1, e) : f && f.level < h.level ? g.cursor(f.side(!s, e) + n.from, s ? 1 : -1, f.level) : g.cursor(c + n.from, s ? -1 : 1, h.level);
}
var st1 = "\uFFFF", le1 = class {
    constructor(t, e){
        this.points = t, this.text = "", this.lineSeparator = e.facet(w.lineSeparator);
    }
    append(t) {
        this.text += t;
    }
    lineBreak() {
        this.text += st1;
    }
    readRange(t, e) {
        if (!t) return this;
        let i = t.parentNode;
        for(let s = t;;){
            this.findPointBefore(i, s), this.readNode(s);
            let r = s.nextSibling;
            if (r == e) break;
            let o = O1.get(s), l = O1.get(r);
            (o && l ? o.breakAfter : (o ? o.breakAfter : Oi(s)) || Oi(r) && (s.nodeName != "BR" || s.cmIgnore)) && this.lineBreak(), s = r;
        }
        return this.findPointBefore(i, e), this;
    }
    readTextNode(t) {
        let e = t.nodeValue;
        for (let i of this.points)i.node == t && (i.pos = this.text.length + Math.min(i.offset, e.length));
        for(let i1 = 0, s = this.lineSeparator ? null : /\r\n?|\n/g;;){
            let r = -1, o = 1, l;
            if (this.lineSeparator ? (r = e.indexOf(this.lineSeparator, i1), o = this.lineSeparator.length) : (l = s.exec(e)) && (r = l.index, o = l[0].length), this.append(e.slice(i1, r < 0 ? e.length : r)), r < 0) break;
            if (this.lineBreak(), o > 1) for (let h of this.points)h.node == t && h.pos > this.text.length && (h.pos -= o - 1);
            i1 = r + o;
        }
    }
    readNode(t) {
        if (t.cmIgnore) return;
        let e = O1.get(t), i = e && e.overrideDOMText;
        if (i != null) {
            this.findPointInside(t, i.length);
            for(let s = i.iter(); !s.next().done;)s.lineBreak ? this.lineBreak() : this.append(s.value);
        } else t.nodeType == 3 ? this.readTextNode(t) : t.nodeName == "BR" ? t.nextSibling && this.lineBreak() : t.nodeType == 1 && this.readRange(t.firstChild, null);
    }
    findPointBefore(t, e) {
        for (let i of this.points)i.node == t && t.childNodes[i.offset] == e && (i.pos = this.text.length);
    }
    findPointInside(t, e) {
        for (let i of this.points)(t.nodeType == 3 ? i.node == t : t.contains(i.node)) && (i.pos = this.text.length + Math.min(e, i.offset));
    }
};
function Oi(n) {
    return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
var he = class {
    constructor(t, e){
        this.node = t, this.offset = e, this.pos = -1;
    }
}, ae1 = class extends O1 {
    constructor(t){
        super(), this.view = t, this.compositionDeco = M1.none, this.decorations = [], this.dynamicDecorationMap = [], this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(t.contentDOM), this.children = [
            new H1
        ], this.children[0].setParent(this), this.updateDeco(), this.updateInner([
            new I1(0, 0, 0, t.state.doc.length)
        ], 0);
    }
    get root() {
        return this.view.root;
    }
    get editorView() {
        return this.view;
    }
    get length() {
        return this.view.state.doc.length;
    }
    update(t) {
        let e = t.changedRanges;
        this.minWidth > 0 && e.length && (e.every(({ fromA: o , toA: l  })=>l < this.minWidthFrom || o > this.minWidthTo) ? (this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.view.inputState.composing < 0 ? this.compositionDeco = M1.none : (t.transactions.length || this.dirty) && (this.compositionDeco = Rn(this.view, t.changes)), (g2.ie || g2.chrome) && !this.compositionDeco.size && t && t.state.doc.lines != t.startState.doc.lines && (this.forceSelection = !0);
        let i = this.decorations, s = this.updateDeco(), r = En(i, s, t.changes);
        return e = I1.extendWithRanges(e, r), this.dirty == 0 && e.length == 0 ? !1 : (this.updateInner(e, t.startState.doc.length), t.transactions.length && (this.lastUpdate = Date.now()), !0);
    }
    updateInner(t, e) {
        this.view.viewState.mustMeasureContent = !0, this.updateChildren(t, e);
        let { observer: i  } = this.view;
        i.ignore(()=>{
            this.dom.style.height = this.view.viewState.contentHeight + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
            let r = g2.chrome || g2.ios ? {
                node: i.selectionRange.focusNode,
                written: !1
            } : void 0;
            this.sync(r), this.dirty = 0, r && (r.written || i.selectionRange.focusNode != r.node) && (this.forceSelection = !0), this.dom.style.height = "";
        });
        let s = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let r of this.children)r instanceof Y1 && r.widget instanceof ce1 && s.push(r.dom);
        i.updateGaps(s);
    }
    updateChildren(t, e) {
        let i = this.childCursor(e);
        for(let s = t.length - 1;; s--){
            let r = s >= 0 ? t[s] : null;
            if (!r) break;
            let { fromA: o , toA: l , fromB: h , toB: a  } = r, { content: c , breakAtStart: f , openStart: d , openEnd: u  } = Wt.build(this.view.state.doc, h, a, this.decorations, this.dynamicDecorationMap), { i: p , off: m  } = i.findPos(l, 1), { i: b , off: y  } = i.findPos(o, -1);
            ms(this, b, y, p, m, c, f, d, u);
        }
    }
    updateSelection(t = !1, e = !1) {
        if (t && this.view.observer.readSelectionRange(), !(e || this.mayControlSelection()) || g2.ios && this.view.inputState.rapidCompositionStart) return;
        let i = this.forceSelection;
        this.forceSelection = !1;
        let s = this.view.state.selection.main, r = this.domAtPos(s.anchor), o = s.empty ? r : this.domAtPos(s.head);
        if (g2.gecko && s.empty && Tn(r)) {
            let h = document.createTextNode("");
            this.view.observer.ignore(()=>r.node.insertBefore(h, r.node.childNodes[r.offset] || null)), r = o = new B1(h, 0), i = !0;
        }
        let l = this.view.observer.selectionRange;
        (i || !l.focusNode || !ie1(r.node, r.offset, l.anchorNode, l.anchorOffset) || !ie1(o.node, o.offset, l.focusNode, l.focusOffset)) && (this.view.observer.ignore(()=>{
            g2.android && g2.chrome && this.dom.contains(l.focusNode) && Bn(l.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({
                preventScroll: !0
            }));
            let h = ee1(this.root);
            if (s.empty) {
                if (g2.gecko) {
                    let a = Ln(r.node, r.offset);
                    if (a && a != 3) {
                        let c = zs(r.node, r.offset, a == 1 ? 1 : -1);
                        c && (r = new B1(c, a == 1 ? 0 : c.nodeValue.length));
                    }
                }
                h.collapse(r.node, r.offset), s.bidiLevel != null && l.cursorBidiLevel != null && (l.cursorBidiLevel = s.bidiLevel);
            } else if (h.extend) h.collapse(r.node, r.offset), h.extend(o.node, o.offset);
            else {
                let a1 = document.createRange();
                s.anchor > s.head && ([r, o] = [
                    o,
                    r
                ]), a1.setEnd(o.node, o.offset), a1.setStart(r.node, r.offset), h.removeAllRanges(), h.addRange(a1);
            }
        }), this.view.observer.setSelectionRange(r, o)), this.impreciseAnchor = r.precise ? null : new B1(l.anchorNode, l.anchorOffset), this.impreciseHead = o.precise ? null : new B1(l.focusNode, l.focusOffset);
    }
    enforceCursorAssoc() {
        if (this.compositionDeco.size) return;
        let t = this.view.state.selection.main, e = ee1(this.root);
        if (!t.empty || !t.assoc || !e.modify) return;
        let i = H1.find(this, t.head);
        if (!i) return;
        let s = i.posAtStart;
        if (t.head == s || t.head == s + i.length) return;
        let r = this.coordsAt(t.head, -1), o = this.coordsAt(t.head, 1);
        if (!r || !o || r.bottom > o.top) return;
        let l = this.domAtPos(t.head + t.assoc);
        e.collapse(l.node, l.offset), e.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary");
    }
    mayControlSelection() {
        return this.view.state.facet(jt) ? this.root.activeElement == this.dom : Re1(this.dom, this.view.observer.selectionRange);
    }
    nearest(t) {
        for(let e = t; e;){
            let i = O1.get(e);
            if (i && i.rootView == this) return i;
            e = e.parentNode;
        }
        return null;
    }
    posFromDOM(t, e) {
        let i = this.nearest(t);
        if (!i) throw new RangeError("Trying to find position for a DOM position outside of the document");
        return i.localPosFromDOM(t, e) + i.posAtStart;
    }
    domAtPos(t) {
        let { i: e , off: i  } = this.childCursor().findPos(t, -1);
        for(; e < this.children.length - 1;){
            let s = this.children[e];
            if (i < s.length || s instanceof H1) break;
            e++, i = 0;
        }
        return this.children[e].domAtPos(i);
    }
    coordsAt(t, e) {
        for(let i = this.length, s = this.children.length - 1;; s--){
            let r = this.children[s], o = i - r.breakAfter - r.length;
            if (t > o || t == o && r.type != D1.WidgetBefore && r.type != D1.WidgetAfter && (!s || e == 2 || this.children[s - 1].breakAfter || this.children[s - 1].type == D1.WidgetBefore && e > -2)) return r.coordsAt(t - o, e);
            i = o;
        }
    }
    measureVisibleLineHeights(t) {
        let e = [], { from: i , to: s  } = t, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, h = this.view.textDirection == R1.LTR;
        for(let a = 0, c = 0; c < this.children.length; c++){
            let f = this.children[c], d = a + f.length;
            if (d > s) break;
            if (a >= i) {
                let u = f.dom.getBoundingClientRect();
                if (e.push(u.height), o) {
                    let p = f.dom.lastChild, m = p ? Nt(p) : [];
                    if (m.length) {
                        let b = m[m.length - 1], y = h ? b.right - u.left : u.right - b.left;
                        y > l && (l = y, this.minWidth = r, this.minWidthFrom = a, this.minWidthTo = d);
                    }
                }
            }
            a = d + f.breakAfter;
        }
        return e;
    }
    textDirectionAt(t) {
        let { i: e  } = this.childPos(t, 1);
        return getComputedStyle(this.children[e].dom).direction == "rtl" ? R1.RTL : R1.LTR;
    }
    measureTextSize() {
        for (let s of this.children)if (s instanceof H1) {
            let r = s.measureTextSize();
            if (r) return r;
        }
        let t = document.createElement("div"), e, i;
        return t.className = "cm-line", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(()=>{
            this.dom.appendChild(t);
            let s = Nt(t.firstChild)[0];
            e = t.getBoundingClientRect().height, i = s ? s.width / 27 : 7, t.remove();
        }), {
            lineHeight: e,
            charWidth: i
        };
    }
    childCursor(t = this.length) {
        let e = this.children.length;
        return e && (t -= this.children[--e].length), new ne1(this.children, t, e);
    }
    computeBlockGapDeco() {
        let t = [], e = this.view.viewState;
        for(let i = 0, s = 0;; s++){
            let r = s == e.viewports.length ? null : e.viewports[s], o = r ? r.from - 1 : this.length;
            if (o > i) {
                let l = e.lineBlockAt(o).bottom - e.lineBlockAt(i).top;
                t.push(M1.replace({
                    widget: new ce1(l),
                    block: !0,
                    inclusive: !0,
                    isBlockGap: !0
                }).range(i, o));
            }
            if (!r) break;
            i = r.to + 1;
        }
        return M1.set(t);
    }
    updateDeco() {
        let t = this.view.state.facet(zt).map((e, i)=>(this.dynamicDecorationMap[i] = typeof e == "function") ? e(this.view) : e);
        for(let e = t.length; e < t.length + 3; e++)this.dynamicDecorationMap[e] = !1;
        return this.decorations = [
            ...t,
            this.compositionDeco,
            this.computeBlockGapDeco(),
            this.view.viewState.lineGapDeco
        ];
    }
    scrollIntoView(t) {
        let { range: e  } = t, i = this.coordsAt(e.head, e.empty ? e.assoc : e.head > e.anchor ? -1 : 1), s;
        if (!i) return;
        !e.empty && (s = this.coordsAt(e.anchor, e.anchor > e.head ? -1 : 1)) && (i = {
            left: Math.min(i.left, s.left),
            top: Math.min(i.top, s.top),
            right: Math.max(i.right, s.right),
            bottom: Math.max(i.bottom, s.bottom)
        });
        let r = 0, o = 0, l = 0, h = 0;
        for (let c of this.view.state.facet(Es).map((f)=>f(this.view)))if (c) {
            let { left: f , right: d , top: u , bottom: p  } = c;
            f != null && (r = Math.max(r, f)), d != null && (o = Math.max(o, d)), u != null && (l = Math.max(l, u)), p != null && (h = Math.max(h, p));
        }
        let a = {
            left: i.left - r,
            top: i.top - l,
            right: i.right + o,
            bottom: i.bottom + h
        };
        yn(this.view.scrollDOM, a, e.head < e.anchor ? -1 : 1, t.x, t.y, t.xMargin, t.yMargin, this.view.textDirection == R1.LTR);
    }
};
function Tn(n) {
    return n.node.nodeType == 1 && n.node.firstChild && (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") && (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false");
}
var ce1 = class extends X1 {
    constructor(t){
        super(), this.height = t;
    }
    toDOM() {
        let t = document.createElement("div");
        return this.updateDOM(t), t;
    }
    eq(t) {
        return t.height == this.height;
    }
    updateDOM(t) {
        return t.style.height = this.height + "px", !0;
    }
    get estimatedHeight() {
        return this.height;
    }
};
function Ws(n) {
    let t = n.observer.selectionRange, e = t.focusNode && zs(t.focusNode, t.focusOffset, 0);
    if (!e) return null;
    let i = n.docView.nearest(e);
    if (!i) return null;
    if (i instanceof H1) {
        let s = e;
        for(; s.parentNode != i.dom;)s = s.parentNode;
        let r = s.previousSibling;
        for(; r && !O1.get(r);)r = r.previousSibling;
        let o = r ? O1.get(r).posAtEnd : i.posAtStart;
        return {
            from: o,
            to: o,
            node: s,
            text: e
        };
    } else {
        for(;;){
            let { parent: r1  } = i;
            if (!r1) return null;
            if (r1 instanceof H1) break;
            i = r1;
        }
        let s1 = i.posAtStart;
        return {
            from: s1,
            to: s1 + i.length,
            node: i.dom,
            text: e
        };
    }
}
function Rn(n, t) {
    let e = Ws(n);
    if (!e) return M1.none;
    let { from: i , to: s , node: r , text: o  } = e, l = t.mapPos(i, 1), h = Math.max(l, t.mapPos(s, -1)), { state: a  } = n, c = r.nodeType == 3 ? r.nodeValue : new le1([], a).readRange(r.firstChild, null).text;
    if (h - l < c.length) if (a.doc.sliceString(l, Math.min(a.doc.length, l + c.length), st1) == c) h = l + c.length;
    else if (a.doc.sliceString(Math.max(0, h - c.length), h, st1) == c) l = h - c.length;
    else return M1.none;
    else if (a.doc.sliceString(l, h, st1) != c) return M1.none;
    let f = O1.get(r);
    return f instanceof re1 ? f = f.widget.topView : f && (f.parent = null), M1.set(M1.replace({
        widget: new je1(r, o, f),
        inclusive: !0
    }).range(l, h));
}
var je1 = class extends X1 {
    constructor(t, e, i){
        super(), this.top = t, this.text = e, this.topView = i;
    }
    eq(t) {
        return this.top == t.top && this.text == t.text;
    }
    toDOM() {
        return this.top;
    }
    ignoreEvent() {
        return !1;
    }
    get customView() {
        return re1;
    }
};
function zs(n, t, e) {
    for(;;){
        if (n.nodeType == 3) return n;
        if (n.nodeType == 1 && t > 0 && e <= 0) n = n.childNodes[t - 1], t = se1(n);
        else if (n.nodeType == 1 && t < n.childNodes.length && e >= 0) n = n.childNodes[t], t = 0;
        else return null;
    }
}
function Ln(n, t) {
    return n.nodeType != 1 ? 0 : (t && n.childNodes[t - 1].contentEditable == "false" ? 1 : 0) | (t < n.childNodes.length && n.childNodes[t].contentEditable == "false" ? 2 : 0);
}
var $e1 = class {
    constructor(){
        this.changes = [];
    }
    compareRange(t, e) {
        Fe1(t, e, this.changes);
    }
    comparePoint(t, e) {
        Fe1(t, e, this.changes);
    }
};
function En(n, t, e) {
    let i = new $e1;
    return P.compare(n, t, e, i), i.changes;
}
function Bn(n, t) {
    for(let e = n; e && e != t; e = e.assignedSlot || e.parentNode)if (e.nodeType == 1 && e.contentEditable == "false") return !0;
    return !1;
}
function Pn(n, t, e = 1) {
    let i = n.charCategorizer(t), s = n.doc.lineAt(t), r = t - s.from;
    if (s.length == 0) return g.cursor(t);
    r == 0 ? e = 1 : r == s.length && (e = -1);
    let o = r, l = r;
    e < 0 ? o = ie(s.text, r, !1) : l = ie(s.text, r);
    let h = i(s.text.slice(o, l));
    for(; o > 0;){
        let a = ie(s.text, o, !1);
        if (i(s.text.slice(a, o)) != h) break;
        o = a;
    }
    for(; l < s.length;){
        let a1 = ie(s.text, l);
        if (i(s.text.slice(l, a1)) != h) break;
        l = a1;
    }
    return g.range(o + s.from, l + s.from);
}
function Hn(n, t) {
    return t.left > n ? t.left - n : Math.max(0, n - t.right);
}
function Nn(n, t) {
    return t.top > n ? t.top - n : Math.max(0, n - t.bottom);
}
function Se1(n, t) {
    return n.top < t.bottom - 1 && n.bottom > t.top + 1;
}
function Ti(n, t) {
    return t < n.top ? {
        top: t,
        left: n.left,
        right: n.right,
        bottom: n.bottom
    } : n;
}
function Ri(n, t) {
    return t > n.bottom ? {
        top: n.top,
        left: n.left,
        right: n.right,
        bottom: t
    } : n;
}
function Ge1(n, t, e) {
    let i, s, r, o, l, h, a, c;
    for(let u = n.firstChild; u; u = u.nextSibling){
        let p = Nt(u);
        for(let m = 0; m < p.length; m++){
            let b = p[m];
            s && Se1(s, b) && (b = Ti(Ri(b, s.bottom), s.top));
            let y = Hn(t, b), k = Nn(e, b);
            if (y == 0 && k == 0) return u.nodeType == 3 ? Li(u, t, e) : Ge1(u, t, e);
            (!i || o > k || o == k && r > y) && (i = u, s = b, r = y, o = k), y == 0 ? e > b.bottom && (!a || a.bottom < b.bottom) ? (l = u, a = b) : e < b.top && (!c || c.top > b.top) && (h = u, c = b) : a && Se1(a, b) ? a = Ri(a, b.bottom) : c && Se1(c, b) && (c = Ti(c, b.top));
        }
    }
    if (a && a.bottom >= e ? (i = l, s = a) : c && c.top <= e && (i = h, s = c), !i) return {
        node: n,
        offset: 0
    };
    let f = Math.max(s.left, Math.min(s.right, t));
    if (i.nodeType == 3) return Li(i, f, e);
    if (!r && i.contentEditable == "true") return Ge1(i, f, e);
    let d = Array.prototype.indexOf.call(n.childNodes, i) + (t >= (s.left + s.right) / 2 ? 1 : 0);
    return {
        node: n,
        offset: d
    };
}
function Li(n, t, e) {
    let i = n.nodeValue.length, s = -1, r = 1e9, o = 0;
    for(let l = 0; l < i; l++){
        let h = Vt(n, l, l + 1).getClientRects();
        for(let a = 0; a < h.length; a++){
            let c = h[a];
            if (c.top == c.bottom) continue;
            o || (o = t - c.left);
            let f = (c.top > e ? c.top - e : e - c.bottom) - 1;
            if (c.left - 1 <= t && c.right + 1 >= t && f < r) {
                let d = t >= (c.left + c.right) / 2, u = d;
                if ((g2.chrome || g2.gecko) && Vt(n, l).getBoundingClientRect().left == c.right && (u = !d), f <= 0) return {
                    node: n,
                    offset: l + (u ? 1 : 0)
                };
                s = l + (u ? 1 : 0), r = f;
            }
        }
    }
    return {
        node: n,
        offset: s > -1 ? s : o > 0 ? n.nodeValue.length : 0
    };
}
function Fs(n, { x: t , y: e  }, i, s = -1) {
    var r;
    let o = n.contentDOM.getBoundingClientRect(), l = o.top + n.viewState.paddingTop, h, { docHeight: a  } = n.viewState, c = e - l;
    if (c < 0) return 0;
    if (c > a) return n.state.doc.length;
    for(let y = n.defaultLineHeight / 2, k = !1; h = n.elementAtHeight(c), h.type != D1.Text;)for(; c = s > 0 ? h.bottom + y : h.top - y, !(c >= 0 && c <= a);){
        if (k) return i ? null : 0;
        k = !0, s = -s;
    }
    e = l + c;
    let f = h.from;
    if (f < n.viewport.from) return n.viewport.from == 0 ? 0 : i ? null : Ei(n, o, h, t, e);
    if (f > n.viewport.to) return n.viewport.to == n.state.doc.length ? n.state.doc.length : i ? null : Ei(n, o, h, t, e);
    let d = n.dom.ownerDocument, u = n.root.elementFromPoint ? n.root : d, p = u.elementFromPoint(t, e);
    p && !n.contentDOM.contains(p) && (p = null), p || (t = Math.max(o.left + 1, Math.min(o.right - 1, t)), p = u.elementFromPoint(t, e), p && !n.contentDOM.contains(p) && (p = null));
    let m, b = -1;
    if (p && ((r = n.docView.nearest(p)) === null || r === void 0 ? void 0 : r.isEditable) != !1) {
        if (d.caretPositionFromPoint) {
            let y1 = d.caretPositionFromPoint(t, e);
            y1 && ({ offsetNode: m , offset: b  } = y1);
        } else if (d.caretRangeFromPoint) {
            let y2 = d.caretRangeFromPoint(t, e);
            y2 && ({ startContainer: m , startOffset: b  } = y2, g2.safari && Vn(m, b, t) && (m = void 0));
        }
    }
    if (!m || !n.docView.dom.contains(m)) {
        let y3 = H1.find(n.docView, f);
        if (!y3) return c > h.top + h.height / 2 ? h.to : h.from;
        ({ node: m , offset: b  } = Ge1(y3.dom, t, e));
    }
    return n.docView.posFromDOM(m, b);
}
function Ei(n, t, e, i, s) {
    let r = Math.round((i - t.left) * n.defaultCharacterWidth);
    n.lineWrapping && e.height > n.defaultLineHeight * 1.5 && (r += Math.floor((s - e.top) / n.defaultLineHeight) * n.viewState.heightOracle.lineLength);
    let o = n.state.sliceDoc(e.from, e.to);
    return e.from + at(o, r, n.state.tabSize);
}
function Vn(n, t, e) {
    let i;
    if (n.nodeType != 3 || t != (i = n.nodeValue.length)) return !1;
    for(let s = n.nextSibling; s; s = s.nextSibling)if (s.nodeType != 1 || s.nodeName != "BR") return !1;
    return Vt(n, i - 1, i).getBoundingClientRect().left > e;
}
function Wn(n, t, e, i) {
    let s = n.state.doc.lineAt(t.head), r = !i || !n.lineWrapping ? null : n.coordsAtPos(t.assoc < 0 && t.head > s.from ? t.head - 1 : t.head);
    if (r) {
        let h = n.dom.getBoundingClientRect(), a = n.textDirectionAt(s.from), c = n.posAtCoords({
            x: e == (a == R1.LTR) ? h.right - 1 : h.left + 1,
            y: (r.top + r.bottom) / 2
        });
        if (c != null) return g.cursor(c, e ? -1 : 1);
    }
    let o = H1.find(n.docView, t.head), l = o ? e ? o.posAtEnd : o.posAtStart : e ? s.to : s.from;
    return g.cursor(l, e ? -1 : 1);
}
function Bi(n, t, e, i) {
    let s = n.state.doc.lineAt(t.head), r = n.bidiSpans(s), o = n.textDirectionAt(s.from);
    for(let l = t, h = null;;){
        let a = Vs(s, r, o, l, e), c = Ns;
        if (!a) {
            if (s.number == (e ? n.state.doc.lines : 1)) return l;
            c = `
`, s = n.state.doc.line(s.number + (e ? 1 : -1)), r = n.bidiSpans(s), a = g.cursor(e ? s.from : s.to);
        }
        if (h) {
            if (!h(c)) return l;
        } else {
            if (!i) return a;
            h = i(c);
        }
        l = a;
    }
}
function zn(n, t, e) {
    let i = n.state.charCategorizer(t), s = i(e);
    return (r)=>{
        let o = i(r);
        return s == R.Space && (s = o), s == o;
    };
}
function Fn(n, t, e, i) {
    let s = t.head, r = e ? 1 : -1;
    if (s == (e ? n.state.doc.length : 0)) return g.cursor(s, t.assoc);
    let o = t.goalColumn, l, h = n.contentDOM.getBoundingClientRect(), a = n.coordsAtPos(s), c = n.documentTop;
    if (a) o == null && (o = a.left - h.left), l = r < 0 ? a.top : a.bottom;
    else {
        let u = n.viewState.lineBlockAt(s);
        o == null && (o = Math.min(h.right - h.left, n.defaultCharacterWidth * (s - u.from))), l = (r < 0 ? u.top : u.bottom) + c;
    }
    let f = h.left + o, d = i ?? n.defaultLineHeight >> 1;
    for(let u1 = 0;; u1 += 10){
        let p = l + (d + u1) * r, m = Fs(n, {
            x: f,
            y: p
        }, !1, r);
        if (p < h.top || p > h.bottom || (r < 0 ? m < s : m > s)) return g.cursor(m, t.assoc, void 0, o);
    }
}
function Ce1(n, t, e) {
    let i = n.state.facet(Ls).map((s)=>s(n));
    for(;;){
        let s = !1;
        for (let r of i)r.between(e.from - 1, e.from + 1, (o, l, h)=>{
            e.from > o && e.from < l && (e = t.from > e.from ? g.cursor(o, 1) : g.cursor(l, -1), s = !0);
        });
        if (!s) return e;
    }
}
var _e1 = class {
    constructor(t){
        this.lastKeyCode = 0, this.lastKeyTime = 0, this.chromeScrollHack = -1, this.pendingIOSKey = void 0, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastEscPress = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.registeredEvents = [], this.customHandlers = [], this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.rapidCompositionStart = !1, this.mouseSelection = null;
        for(let e in P1){
            let i = P1[e];
            t.contentDOM.addEventListener(e, (s)=>{
                !Pi(t, s) || this.ignoreDuringComposition(s) || e == "keydown" && this.keydown(t, s) || (this.mustFlushObserver(s) && t.observer.forceFlush(), this.runCustomHandlers(e, t, s) ? s.preventDefault() : i(t, s));
            }), this.registeredEvents.push(e);
        }
        g2.chrome && g2.chrome_version >= 102 && t.scrollDOM.addEventListener("wheel", ()=>{
            this.chromeScrollHack < 0 ? t.contentDOM.style.pointerEvents = "none" : window.clearTimeout(this.chromeScrollHack), this.chromeScrollHack = setTimeout(()=>{
                this.chromeScrollHack = -1, t.contentDOM.style.pointerEvents = "";
            }, 100);
        }, {
            passive: !0
        }), this.notifiedFocused = t.hasFocus, g2.safari && t.contentDOM.addEventListener("input", ()=>null);
    }
    setSelectionOrigin(t) {
        this.lastSelectionOrigin = t, this.lastSelectionTime = Date.now();
    }
    ensureHandlers(t, e) {
        var i;
        let s;
        this.customHandlers = [];
        for (let r of e)if (s = (i = r.update(t).spec) === null || i === void 0 ? void 0 : i.domEventHandlers) {
            this.customHandlers.push({
                plugin: r.value,
                handlers: s
            });
            for(let o in s)this.registeredEvents.indexOf(o) < 0 && o != "scroll" && (this.registeredEvents.push(o), t.contentDOM.addEventListener(o, (l)=>{
                !Pi(t, l) || this.runCustomHandlers(o, t, l) && l.preventDefault();
            }));
        }
    }
    runCustomHandlers(t, e, i) {
        for (let s of this.customHandlers){
            let r = s.handlers[t];
            if (r) try {
                if (r.call(s.plugin, i, e) || i.defaultPrevented) return !0;
            } catch (o) {
                nt1(e.state, o);
            }
        }
        return !1;
    }
    runScrollHandlers(t, e) {
        for (let i of this.customHandlers){
            let s = i.handlers.scroll;
            if (s) try {
                s.call(i.plugin, e, t);
            } catch (r) {
                nt1(t.state, r);
            }
        }
    }
    keydown(t, e) {
        if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && Date.now() < this.lastEscPress + 2e3) return !0;
        if (g2.android && g2.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8)) return t.observer.delayAndroidKey(e.key, e.keyCode), !0;
        let i;
        return g2.ios && (i = Is.find((s)=>s.keyCode == e.keyCode)) && !(e.ctrlKey || e.altKey || e.metaKey) && !e.synthetic ? (this.pendingIOSKey = i, setTimeout(()=>this.flushIOSKey(t), 250), !0) : !1;
    }
    flushIOSKey(t) {
        let e = this.pendingIOSKey;
        return e ? (this.pendingIOSKey = void 0, Lt(t.contentDOM, e.key, e.keyCode)) : !1;
    }
    ignoreDuringComposition(t) {
        return /^key/.test(t.type) ? this.composing > 0 ? !0 : g2.safari && Date.now() - this.compositionEndedAt < 100 ? (this.compositionEndedAt = 0, !0) : !1 : !1;
    }
    mustFlushObserver(t) {
        return t.type == "keydown" && t.keyCode != 229 || t.type == "compositionend" && !g2.ios;
    }
    startMouseSelection(t) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t;
    }
    update(t) {
        this.mouseSelection && this.mouseSelection.update(t), t.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
    }
    destroy() {
        this.mouseSelection && this.mouseSelection.destroy();
    }
}, Is = [
    {
        key: "Backspace",
        keyCode: 8,
        inputType: "deleteContentBackward"
    },
    {
        key: "Enter",
        keyCode: 13,
        inputType: "insertParagraph"
    },
    {
        key: "Delete",
        keyCode: 46,
        inputType: "deleteContentForward"
    }
], qs = [
    16,
    17,
    18,
    20,
    91,
    92,
    224,
    225
], Ye1 = class {
    constructor(t, e, i, s){
        this.view = t, this.style = i, this.mustSelect = s, this.lastEvent = e;
        let r = t.contentDOM.ownerDocument;
        r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e.shiftKey, this.multiple = t.state.facet(w.allowMultipleSelections) && In(t, e), this.dragMove = qn(t, e), this.dragging = Kn(t, e) && yi(e) == 1 ? null : !1, this.dragging === !1 && (e.preventDefault(), this.select(e));
    }
    move(t) {
        if (t.buttons == 0) return this.destroy();
        this.dragging === !1 && this.select(this.lastEvent = t);
    }
    up(t) {
        this.dragging == null && this.select(this.lastEvent), this.dragging || t.preventDefault(), this.destroy();
    }
    destroy() {
        let t = this.view.contentDOM.ownerDocument;
        t.removeEventListener("mousemove", this.move), t.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = null;
    }
    select(t) {
        let e = this.style.get(t, this.extend, this.multiple);
        (this.mustSelect || !e.eq(this.view.state.selection) || e.main.assoc != this.view.state.selection.main.assoc) && this.view.dispatch({
            selection: e,
            userEvent: "select.pointer",
            scrollIntoView: !0
        }), this.mustSelect = !1;
    }
    update(t) {
        t.docChanged && this.dragging && (this.dragging = this.dragging.map(t.changes)), this.style.update(t) && setTimeout(()=>this.select(this.lastEvent), 20);
    }
};
function In(n, t) {
    let e = n.state.facet(Ms);
    return e.length ? e[0](t) : g2.mac ? t.metaKey : t.ctrlKey;
}
function qn(n, t) {
    let e = n.state.facet(ks);
    return e.length ? e[0](t) : g2.mac ? !t.altKey : !t.ctrlKey;
}
function Kn(n, t) {
    let { main: e  } = n.state.selection;
    if (e.empty) return !1;
    let i = ee1(n.root);
    if (i.rangeCount == 0) return !0;
    let s = i.getRangeAt(0).getClientRects();
    for(let r = 0; r < s.length; r++){
        let o = s[r];
        if (o.left <= t.clientX && o.right >= t.clientX && o.top <= t.clientY && o.bottom >= t.clientY) return !0;
    }
    return !1;
}
function Pi(n, t) {
    if (!t.bubbles) return !0;
    if (t.defaultPrevented) return !1;
    for(let e = t.target, i; e != n.contentDOM; e = e.parentNode)if (!e || e.nodeType == 11 || (i = O1.get(e)) && i.ignoreEvent(t)) return !1;
    return !0;
}
var P1 = Object.create(null), Ks = g2.ie && g2.ie_version < 15 || g2.ios && g2.webkit_version < 604;
function jn(n) {
    let t = n.dom.parentNode;
    if (!t) return;
    let e = t.appendChild(document.createElement("textarea"));
    e.style.cssText = "position: fixed; left: -10000px; top: 10px", e.focus(), setTimeout(()=>{
        n.focus(), e.remove(), js(n, e.value);
    }, 50);
}
function js(n, t) {
    let { state: e  } = n, i, s = 1, r = e.toText(t), o = r.lines == e.selection.ranges.length;
    if (Xe1 != null && e.selection.ranges.every((h)=>h.empty) && Xe1 == r.toString()) {
        let h = -1;
        i = e.changeByRange((a)=>{
            let c = e.doc.lineAt(a.from);
            if (c.from == h) return {
                range: a
            };
            h = c.from;
            let f = e.toText((o ? r.line(s++).text : t) + e.lineBreak);
            return {
                changes: {
                    from: c.from,
                    insert: f
                },
                range: g.cursor(a.from + f.length)
            };
        });
    } else o ? i = e.changeByRange((h)=>{
        let a = r.line(s++);
        return {
            changes: {
                from: h.from,
                to: h.to,
                insert: a.text
            },
            range: g.cursor(h.from + a.length)
        };
    }) : i = e.replaceSelection(r);
    n.dispatch(i, {
        userEvent: "input.paste",
        scrollIntoView: !0
    });
}
P1.keydown = (n, t)=>{
    n.inputState.setSelectionOrigin("select"), t.keyCode == 27 ? n.inputState.lastEscPress = Date.now() : qs.indexOf(t.keyCode) < 0 && (n.inputState.lastEscPress = 0);
};
var $s = 0;
P1.touchstart = (n, t)=>{
    $s = Date.now(), n.inputState.setSelectionOrigin("select.pointer");
};
P1.touchmove = (n)=>{
    n.inputState.setSelectionOrigin("select.pointer");
};
P1.mousedown = (n, t)=>{
    if (n.observer.flush(), $s > Date.now() - 2e3 && yi(t) == 1) return;
    let e = null;
    for (let i of n.state.facet(As))if (e = i(n, t), e) break;
    if (!e && t.button == 0 && (e = _n(n, t)), e) {
        let i1 = n.root.activeElement != n.contentDOM;
        i1 && n.observer.ignore(()=>ds(n.contentDOM)), n.inputState.startMouseSelection(new Ye1(n, t, e, i1));
    }
};
function Hi(n, t, e, i) {
    if (i == 1) return g.cursor(t, e);
    if (i == 2) return Pn(n.state, t, e);
    {
        let s = H1.find(n.docView, t), r = n.state.doc.lineAt(s ? s.posAtEnd : t), o = s ? s.posAtStart : r.from, l = s ? s.posAtEnd : r.to;
        return l < n.state.doc.length && l == r.to && l++, g.range(o, l);
    }
}
var Gs = (n, t)=>n >= t.top && n <= t.bottom, Ni = (n, t, e)=>Gs(t, e) && n >= e.left && n <= e.right;
function $n(n, t, e, i) {
    let s = H1.find(n.docView, t);
    if (!s) return 1;
    let r = t - s.posAtStart;
    if (r == 0) return 1;
    if (r == s.length) return -1;
    let o = s.coordsAt(r, -1);
    if (o && Ni(e, i, o)) return -1;
    let l = s.coordsAt(r, 1);
    return l && Ni(e, i, l) ? 1 : o && Gs(i, o) ? -1 : 1;
}
function Vi(n, t) {
    let e = n.posAtCoords({
        x: t.clientX,
        y: t.clientY
    }, !1);
    return {
        pos: e,
        bias: $n(n, e, t.clientX, t.clientY)
    };
}
var Gn = g2.ie && g2.ie_version <= 11, Wi = null, zi = 0, Fi = 0;
function yi(n) {
    if (!Gn) return n.detail;
    let t = Wi, e = Fi;
    return Wi = n, Fi = Date.now(), zi = !t || e > Date.now() - 400 && Math.abs(t.clientX - n.clientX) < 2 && Math.abs(t.clientY - n.clientY) < 2 ? (zi + 1) % 3 : 1;
}
function _n(n, t) {
    let e = Vi(n, t), i = yi(t), s = n.state.selection, r = e, o = t;
    return {
        update (l) {
            l.docChanged && (e && (e.pos = l.changes.mapPos(e.pos)), s = s.map(l.changes), o = null);
        },
        get (l, h, a) {
            let c;
            if (o && l.clientX == o.clientX && l.clientY == o.clientY ? c = r : (c = r = Vi(n, l), o = l), !c || !e) return s;
            let f = Hi(n, c.pos, c.bias, i);
            if (e.pos != c.pos && !h) {
                let d = Hi(n, e.pos, e.bias, i), u = Math.min(d.from, f.from), p = Math.max(d.to, f.to);
                f = u < f.from ? g.range(u, p) : g.range(p, u);
            }
            return h ? s.replaceRange(s.main.extend(f.from, f.to)) : a ? s.addRange(f) : g.create([
                f
            ]);
        }
    };
}
P1.dragstart = (n, t)=>{
    let { selection: { main: e  }  } = n.state, { mouseSelection: i  } = n.inputState;
    i && (i.dragging = e), t.dataTransfer && (t.dataTransfer.setData("Text", n.state.sliceDoc(e.from, e.to)), t.dataTransfer.effectAllowed = "copyMove");
};
function Ii(n, t, e, i) {
    if (!e) return;
    let s = n.posAtCoords({
        x: t.clientX,
        y: t.clientY
    }, !1);
    t.preventDefault();
    let { mouseSelection: r  } = n.inputState, o = i && r && r.dragging && r.dragMove ? {
        from: r.dragging.from,
        to: r.dragging.to
    } : null, l = {
        from: s,
        insert: e
    }, h = n.state.changes(o ? [
        o,
        l
    ] : l);
    n.focus(), n.dispatch({
        changes: h,
        selection: {
            anchor: h.mapPos(s, -1),
            head: h.mapPos(s, 1)
        },
        userEvent: o ? "move.drop" : "input.drop"
    });
}
P1.drop = (n, t)=>{
    if (!t.dataTransfer) return;
    if (n.state.readOnly) return t.preventDefault();
    let e = t.dataTransfer.files;
    if (e && e.length) {
        t.preventDefault();
        let i = Array(e.length), s = 0, r = ()=>{
            ++s == e.length && Ii(n, t, i.filter((o)=>o != null).join(n.state.lineBreak), !1);
        };
        for(let o = 0; o < e.length; o++){
            let l = new FileReader;
            l.onerror = r, l.onload = ()=>{
                /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), r();
            }, l.readAsText(e[o]);
        }
    } else Ii(n, t, t.dataTransfer.getData("Text"), !0);
};
P1.paste = (n, t)=>{
    if (n.state.readOnly) return t.preventDefault();
    n.observer.flush();
    let e = Ks ? null : t.clipboardData;
    e ? (js(n, e.getData("text/plain")), t.preventDefault()) : jn(n);
};
function Yn(n, t) {
    let e = n.dom.parentNode;
    if (!e) return;
    let i = e.appendChild(document.createElement("textarea"));
    i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = t, i.focus(), i.selectionEnd = t.length, i.selectionStart = 0, setTimeout(()=>{
        i.remove(), n.focus();
    }, 50);
}
function Xn(n) {
    let t = [], e = [], i = !1;
    for (let s of n.selection.ranges)s.empty || (t.push(n.sliceDoc(s.from, s.to)), e.push(s));
    if (!t.length) {
        let s1 = -1;
        for (let { from: r  } of n.selection.ranges){
            let o = n.doc.lineAt(r);
            o.number > s1 && (t.push(o.text), e.push({
                from: o.from,
                to: Math.min(n.doc.length, o.to + 1)
            })), s1 = o.number;
        }
        i = !0;
    }
    return {
        text: t.join(n.lineBreak),
        ranges: e,
        linewise: i
    };
}
var Xe1 = null;
P1.copy = P1.cut = (n, t)=>{
    let { text: e , ranges: i , linewise: s  } = Xn(n.state);
    if (!e && !s) return;
    Xe1 = s ? e : null;
    let r = Ks ? null : t.clipboardData;
    r ? (t.preventDefault(), r.clearData(), r.setData("text/plain", e)) : Yn(n, e), t.type == "cut" && !n.state.readOnly && n.dispatch({
        changes: i,
        scrollIntoView: !0,
        userEvent: "delete.cut"
    });
};
function _s(n) {
    setTimeout(()=>{
        n.hasFocus != n.inputState.notifiedFocused && n.update([]);
    }, 10);
}
P1.focus = _s;
P1.blur = (n)=>{
    n.observer.clearSelectionRange(), _s(n);
};
function Ys(n, t) {
    if (n.docView.compositionDeco.size) {
        n.inputState.rapidCompositionStart = t;
        try {
            n.update([]);
        } finally{
            n.inputState.rapidCompositionStart = !1;
        }
    }
}
P1.compositionstart = P1.compositionupdate = (n)=>{
    n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = !0), n.inputState.composing < 0 && (n.inputState.composing = 0, n.docView.compositionDeco.size && (n.observer.flush(), Ys(n, !0)));
};
P1.compositionend = (n)=>{
    n.inputState.composing = -1, n.inputState.compositionEndedAt = Date.now(), n.inputState.compositionFirstChange = null, setTimeout(()=>{
        n.inputState.composing < 0 && Ys(n, !1);
    }, 50);
};
P1.contextmenu = (n)=>{
    n.inputState.lastContextMenu = Date.now();
};
P1.beforeinput = (n, t)=>{
    var e;
    let i;
    if (g2.chrome && g2.android && (i = Is.find((s)=>s.inputType == t.inputType)) && (n.observer.delayAndroidKey(i.key, i.keyCode), i.key == "Backspace" || i.key == "Delete")) {
        let s = ((e = window.visualViewport) === null || e === void 0 ? void 0 : e.height) || 0;
        setTimeout(()=>{
            var r;
            (((r = window.visualViewport) === null || r === void 0 ? void 0 : r.height) || 0) > s + 10 && n.hasFocus && (n.contentDOM.blur(), n.focus());
        }, 100);
    }
};
var qi = [
    "pre-wrap",
    "normal",
    "pre-line",
    "break-spaces"
], fe1 = class {
    constructor(){
        this.doc = v.empty, this.lineWrapping = !1, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.lineLength = 30, this.heightChanged = !1;
    }
    heightForGap(t, e) {
        let i = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
        return this.lineWrapping && (i += Math.ceil((e - t - i * this.lineLength * .5) / this.lineLength)), this.lineHeight * i;
    }
    heightForLine(t) {
        return this.lineWrapping ? (1 + Math.max(0, Math.ceil((t - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
    }
    setDoc(t) {
        return this.doc = t, this;
    }
    mustRefreshForWrapping(t) {
        return qi.indexOf(t) > -1 != this.lineWrapping;
    }
    mustRefreshForHeights(t) {
        let e = !1;
        for(let i = 0; i < t.length; i++){
            let s = t[i];
            s < 0 ? i++ : this.heightSamples[Math.floor(s * 10)] || (e = !0, this.heightSamples[Math.floor(s * 10)] = !0);
        }
        return e;
    }
    refresh(t, e, i, s, r) {
        let o = qi.indexOf(t) > -1, l = Math.round(e) != Math.round(this.lineHeight) || this.lineWrapping != o;
        if (this.lineWrapping = o, this.lineHeight = e, this.charWidth = i, this.lineLength = s, l) {
            this.heightSamples = {};
            for(let h = 0; h < r.length; h++){
                let a = r[h];
                a < 0 ? h++ : this.heightSamples[Math.floor(a * 10)] = !0;
            }
        }
        return l;
    }
}, ue1 = class {
    constructor(t, e){
        this.from = t, this.heights = e, this.index = 0;
    }
    get more() {
        return this.index < this.heights.length;
    }
}, $1 = class {
    constructor(t, e, i, s, r){
        this.from = t, this.length = e, this.top = i, this.height = s, this.type = r;
    }
    get to() {
        return this.from + this.length;
    }
    get bottom() {
        return this.top + this.height;
    }
    join(t) {
        let e = (Array.isArray(this.type) ? this.type : [
            this
        ]).concat(Array.isArray(t.type) ? t.type : [
            t
        ]);
        return new $1(this.from, this.length + t.length, this.top, this.height + t.height, e);
    }
}, A1 = function(n) {
    return n[n.ByPos = 0] = "ByPos", n[n.ByHeight = 1] = "ByHeight", n[n.ByPosNoHeight = 2] = "ByPosNoHeight", n;
}(A1 || (A1 = {})), Jt = .001, N1 = class {
    constructor(t, e, i = 2){
        this.length = t, this.height = e, this.flags = i;
    }
    get outdated() {
        return (this.flags & 2) > 0;
    }
    set outdated(t) {
        this.flags = (t ? 2 : 0) | this.flags & -3;
    }
    setHeight(t, e) {
        this.height != e && (Math.abs(this.height - e) > Jt && (t.heightChanged = !0), this.height = e);
    }
    replace(t, e, i) {
        return N1.of(i);
    }
    decomposeLeft(t, e) {
        e.push(this);
    }
    decomposeRight(t, e) {
        e.push(this);
    }
    applyChanges(t, e, i, s) {
        let r = this;
        for(let o = s.length - 1; o >= 0; o--){
            let { fromA: l , toA: h , fromB: a , toB: c  } = s[o], f = r.lineAt(l, A1.ByPosNoHeight, e, 0, 0), d = f.to >= h ? f : r.lineAt(h, A1.ByPosNoHeight, e, 0, 0);
            for(c += d.to - h, h = d.to; o > 0 && f.from <= s[o - 1].toA;)l = s[o - 1].fromA, a = s[o - 1].fromB, o--, l < f.from && (f = r.lineAt(l, A1.ByPosNoHeight, e, 0, 0));
            a += f.from - l, l = f.from;
            let u = Ft.build(i, t, a, c);
            r = r.replace(l, h, u);
        }
        return r.updateHeight(i, 0);
    }
    static empty() {
        return new W1(0, 0);
    }
    static of(t) {
        if (t.length == 1) return t[0];
        let e = 0, i = t.length, s = 0, r = 0;
        for(;;)if (e == i) if (s > r * 2) {
            let l = t[e - 1];
            l.break ? t.splice(--e, 1, l.left, null, l.right) : t.splice(--e, 1, l.left, l.right), i += 1 + l.break, s -= l.size;
        } else if (r > s * 2) {
            let l1 = t[i];
            l1.break ? t.splice(i, 1, l1.left, null, l1.right) : t.splice(i, 1, l1.left, l1.right), i += 2 + l1.break, r -= l1.size;
        } else break;
        else if (s < r) {
            let l2 = t[e++];
            l2 && (s += l2.size);
        } else {
            let l3 = t[--i];
            l3 && (r += l3.size);
        }
        let o = 0;
        return t[e - 1] == null ? (o = 1, e--) : t[e] == null && (o = 1, i++), new Ue1(N1.of(t.slice(0, e)), o, N1.of(t.slice(i)));
    }
};
N1.prototype.size = 1;
var de1 = class extends N1 {
    constructor(t, e, i){
        super(t, e), this.type = i;
    }
    blockAt(t, e, i, s) {
        return new $1(s, this.length, i, this.height, this.type);
    }
    lineAt(t, e, i, s, r) {
        return this.blockAt(0, i, s, r);
    }
    forEachLine(t, e, i, s, r, o) {
        t <= r + this.length && e >= r && o(this.blockAt(0, i, s, r));
    }
    updateHeight(t, e = 0, i = !1, s) {
        return s && s.from <= e && s.more && this.setHeight(t, s.heights[s.index++]), this.outdated = !1, this;
    }
    toString() {
        return `block(${this.length})`;
    }
}, W1 = class extends de1 {
    constructor(t, e){
        super(t, e, D1.Text), this.collapsed = 0, this.widgetHeight = 0;
    }
    replace(t, e, i) {
        let s = i[0];
        return i.length == 1 && (s instanceof W1 || s instanceof E && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof E ? s = new W1(s.length, this.height) : s.height = this.height, this.outdated || (s.outdated = !1), s) : N1.of(i);
    }
    updateHeight(t, e = 0, i = !1, s) {
        return s && s.from <= e && s.more ? this.setHeight(t, s.heights[s.index++]) : (i || this.outdated) && this.setHeight(t, Math.max(this.widgetHeight, t.heightForLine(this.length - this.collapsed))), this.outdated = !1, this;
    }
    toString() {
        return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
    }
}, E = class extends N1 {
    constructor(t){
        super(t, 0);
    }
    lines(t, e) {
        let i = t.lineAt(e).number, s = t.lineAt(e + this.length).number;
        return {
            firstLine: i,
            lastLine: s,
            lineHeight: this.height / (s - i + 1)
        };
    }
    blockAt(t, e, i, s) {
        let { firstLine: r , lastLine: o , lineHeight: l  } = this.lines(e, s), h = Math.max(0, Math.min(o - r, Math.floor((t - i) / l))), { from: a , length: c  } = e.line(r + h);
        return new $1(a, c, i + l * h, l, D1.Text);
    }
    lineAt(t, e, i, s, r) {
        if (e == A1.ByHeight) return this.blockAt(t, i, s, r);
        if (e == A1.ByPosNoHeight) {
            let { from: f , to: d  } = i.lineAt(t);
            return new $1(f, d - f, 0, 0, D1.Text);
        }
        let { firstLine: o , lineHeight: l  } = this.lines(i, r), { from: h , length: a , number: c  } = i.lineAt(t);
        return new $1(h, a, s + l * (c - o), l, D1.Text);
    }
    forEachLine(t, e, i, s, r, o) {
        let { firstLine: l , lineHeight: h  } = this.lines(i, r);
        for(let a = Math.max(t, r), c = Math.min(r + this.length, e); a <= c;){
            let f = i.lineAt(a);
            a == t && (s += h * (f.number - l)), o(new $1(f.from, f.length, s, h, D1.Text)), s += h, a = f.to + 1;
        }
    }
    replace(t, e, i) {
        let s = this.length - e;
        if (s > 0) {
            let r = i[i.length - 1];
            r instanceof E ? i[i.length - 1] = new E(r.length + s) : i.push(null, new E(s - 1));
        }
        if (t > 0) {
            let r1 = i[0];
            r1 instanceof E ? i[0] = new E(t + r1.length) : i.unshift(new E(t - 1), null);
        }
        return N1.of(i);
    }
    decomposeLeft(t, e) {
        e.push(new E(t - 1), null);
    }
    decomposeRight(t, e) {
        e.push(null, new E(this.length - t - 1));
    }
    updateHeight(t, e = 0, i = !1, s) {
        let r = e + this.length;
        if (s && s.from <= e + this.length && s.more) {
            let o = [], l = Math.max(e, s.from), h = -1, a = t.heightChanged;
            for(s.from > e && o.push(new E(s.from - e - 1).updateHeight(t, e)); l <= r && s.more;){
                let f = t.doc.lineAt(l).length;
                o.length && o.push(null);
                let d = s.heights[s.index++];
                h == -1 ? h = d : Math.abs(d - h) >= Jt && (h = -2);
                let u = new W1(f, d);
                u.outdated = !1, o.push(u), l += f + 1;
            }
            l <= r && o.push(null, new E(r - l).updateHeight(t, l));
            let c = N1.of(o);
            return t.heightChanged = a || h < 0 || Math.abs(c.height - this.height) >= Jt || Math.abs(h - this.lines(t.doc, e).lineHeight) >= Jt, c;
        } else (i || this.outdated) && (this.setHeight(t, t.heightForGap(e, e + this.length)), this.outdated = !1);
        return this;
    }
    toString() {
        return `gap(${this.length})`;
    }
}, Ue1 = class extends N1 {
    constructor(t, e, i){
        super(t.length + e + i.length, t.height + i.height, e | (t.outdated || i.outdated ? 2 : 0)), this.left = t, this.right = i, this.size = t.size + i.size;
    }
    get break() {
        return this.flags & 1;
    }
    blockAt(t, e, i, s) {
        let r = i + this.left.height;
        return t < r ? this.left.blockAt(t, e, i, s) : this.right.blockAt(t, e, r, s + this.left.length + this.break);
    }
    lineAt(t, e, i, s, r) {
        let o = s + this.left.height, l = r + this.left.length + this.break, h = e == A1.ByHeight ? t < o : t < l, a = h ? this.left.lineAt(t, e, i, s, r) : this.right.lineAt(t, e, i, o, l);
        if (this.break || (h ? a.to < l : a.from > l)) return a;
        let c = e == A1.ByPosNoHeight ? A1.ByPosNoHeight : A1.ByPos;
        return h ? a.join(this.right.lineAt(l, c, i, o, l)) : this.left.lineAt(l, c, i, s, r).join(a);
    }
    forEachLine(t, e, i, s, r, o) {
        let l = s + this.left.height, h = r + this.left.length + this.break;
        if (this.break) t < h && this.left.forEachLine(t, e, i, s, r, o), e >= h && this.right.forEachLine(t, e, i, l, h, o);
        else {
            let a = this.lineAt(h, A1.ByPos, i, s, r);
            t < a.from && this.left.forEachLine(t, a.from - 1, i, s, r, o), a.to >= t && a.from <= e && o(a), e > a.to && this.right.forEachLine(a.to + 1, e, i, l, h, o);
        }
    }
    replace(t, e, i) {
        let s = this.left.length + this.break;
        if (e < s) return this.balanced(this.left.replace(t, e, i), this.right);
        if (t > this.left.length) return this.balanced(this.left, this.right.replace(t - s, e - s, i));
        let r = [];
        t > 0 && this.decomposeLeft(t, r);
        let o = r.length;
        for (let l of i)r.push(l);
        if (t > 0 && Ki(r, o - 1), e < this.length) {
            let l1 = r.length;
            this.decomposeRight(e, r), Ki(r, l1);
        }
        return N1.of(r);
    }
    decomposeLeft(t, e) {
        let i = this.left.length;
        if (t <= i) return this.left.decomposeLeft(t, e);
        e.push(this.left), this.break && (i++, t >= i && e.push(null)), t > i && this.right.decomposeLeft(t - i, e);
    }
    decomposeRight(t, e) {
        let i = this.left.length, s = i + this.break;
        if (t >= s) return this.right.decomposeRight(t - s, e);
        t < i && this.left.decomposeRight(t, e), this.break && t < s && e.push(null), e.push(this.right);
    }
    balanced(t, e) {
        return t.size > 2 * e.size || e.size > 2 * t.size ? N1.of(this.break ? [
            t,
            null,
            e
        ] : [
            t,
            e
        ]) : (this.left = t, this.right = e, this.height = t.height + e.height, this.outdated = t.outdated || e.outdated, this.size = t.size + e.size, this.length = t.length + this.break + e.length, this);
    }
    updateHeight(t, e = 0, i = !1, s) {
        let { left: r , right: o  } = this, l = e + r.length + this.break, h = null;
        return s && s.from <= e + r.length && s.more ? h = r = r.updateHeight(t, e, i, s) : r.updateHeight(t, e, i), s && s.from <= l + o.length && s.more ? h = o = o.updateHeight(t, l, i, s) : o.updateHeight(t, l, i), h ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
    }
    toString() {
        return this.left + (this.break ? " " : "-") + this.right;
    }
};
function Ki(n, t) {
    let e, i;
    n[t] == null && (e = n[t - 1]) instanceof E && (i = n[t + 1]) instanceof E && n.splice(t - 1, 3, new E(e.length + 1 + i.length));
}
var Un = 5, Ft = class {
    constructor(t, e){
        this.pos = t, this.oracle = e, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t;
    }
    get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
    }
    span(t, e) {
        if (this.lineStart > -1) {
            let i = Math.min(e, this.lineEnd), s = this.nodes[this.nodes.length - 1];
            s instanceof W1 ? s.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new W1(i - this.pos, -1)), this.writtenTo = i, e > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
        }
        this.pos = e;
    }
    point(t, e, i) {
        if (t < e || i.heightRelevant) {
            let s = i.widget ? i.widget.estimatedHeight : 0;
            s < 0 && (s = this.oracle.lineHeight);
            let r = e - t;
            i.block ? this.addBlock(new de1(r, s, i.type)) : (r || s >= Un) && this.addLineDeco(s, r);
        } else e > t && this.span(t, e);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
    }
    enterLine() {
        if (this.lineStart > -1) return;
        let { from: t , to: e  } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = t, this.lineEnd = e, this.writtenTo < t && ((this.writtenTo < t - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, t - 1)), this.nodes.push(null)), this.pos > t && this.nodes.push(new W1(this.pos - t, -1)), this.writtenTo = this.pos;
    }
    blankContent(t, e) {
        let i = new E(e - t);
        return this.oracle.doc.lineAt(t).to == e && (i.flags |= 4), i;
    }
    ensureLine() {
        this.enterLine();
        let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (t instanceof W1) return t;
        let e = new W1(0, -1);
        return this.nodes.push(e), e;
    }
    addBlock(t) {
        this.enterLine(), t.type == D1.WidgetAfter && !this.isCovered && this.ensureLine(), this.nodes.push(t), this.writtenTo = this.pos = this.pos + t.length, t.type != D1.WidgetBefore && (this.covering = t);
    }
    addLineDeco(t, e) {
        let i = this.ensureLine();
        i.length += e, i.collapsed += e, i.widgetHeight = Math.max(i.widgetHeight, t), this.writtenTo = this.pos = this.pos + e;
    }
    finish(t) {
        let e = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
        this.lineStart > -1 && !(e instanceof W1) && !this.isCovered ? this.nodes.push(new W1(0, -1)) : (this.writtenTo < this.pos || e == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
        let i = t;
        for (let s of this.nodes)s instanceof W1 && s.updateHeight(this.oracle, i), i += s ? s.length : 1;
        return this.nodes;
    }
    static build(t, e, i, s) {
        let r = new Ft(i, t);
        return P.spans(e, i, s, r, 0), r.finish(i);
    }
};
function Jn(n, t, e) {
    let i = new Je1;
    return P.compare(n, t, e, i, 0), i.changes;
}
var Je1 = class {
    constructor(){
        this.changes = [];
    }
    compareRange() {}
    comparePoint(t, e, i, s) {
        (t < e || i && i.heightRelevant || s && s.heightRelevant) && Fe1(t, e, this.changes, 5);
    }
};
function Zn(n, t) {
    let e = n.getBoundingClientRect(), i = Math.max(0, e.left), s = Math.min(innerWidth, e.right), r = Math.max(0, e.top), o = Math.min(innerHeight, e.bottom), l = n.ownerDocument.body;
    for(let h = n.parentNode; h && h != l;)if (h.nodeType == 1) {
        let a = h, c = window.getComputedStyle(a);
        if ((a.scrollHeight > a.clientHeight || a.scrollWidth > a.clientWidth) && c.overflow != "visible") {
            let f = a.getBoundingClientRect();
            i = Math.max(i, f.left), s = Math.min(s, f.right), r = Math.max(r, f.top), o = Math.min(o, f.bottom);
        }
        h = c.position == "absolute" || c.position == "fixed" ? a.offsetParent : a.parentNode;
    } else if (h.nodeType == 11) h = h.host;
    else break;
    return {
        left: i - e.left,
        right: Math.max(i, s) - e.left,
        top: r - (e.top + t),
        bottom: Math.max(r, o) - (e.top + t)
    };
}
function Qn(n, t) {
    let e = n.getBoundingClientRect();
    return {
        left: 0,
        right: e.right - e.left,
        top: t,
        bottom: e.bottom - (e.top + t)
    };
}
var Bt = class {
    constructor(t, e, i){
        this.from = t, this.to = e, this.size = i;
    }
    static same(t, e) {
        if (t.length != e.length) return !1;
        for(let i = 0; i < t.length; i++){
            let s = t[i], r = e[i];
            if (s.from != r.from || s.to != r.to || s.size != r.size) return !1;
        }
        return !0;
    }
    draw(t) {
        return M1.replace({
            widget: new Ze1(this.size, t)
        }).range(this.from, this.to);
    }
}, Ze1 = class extends X1 {
    constructor(t, e){
        super(), this.size = t, this.vertical = e;
    }
    eq(t) {
        return t.size == this.size && t.vertical == this.vertical;
    }
    toDOM() {
        let t = document.createElement("div");
        return this.vertical ? t.style.height = this.size + "px" : (t.style.width = this.size + "px", t.style.height = "2px", t.style.display = "inline-block"), t;
    }
    get estimatedHeight() {
        return this.vertical ? this.size : -1;
    }
}, pe1 = class {
    constructor(t){
        this.state = t, this.pixelViewport = {
            left: 0,
            right: window.innerWidth,
            top: 0,
            bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.heightOracle = new fe1, this.scaler = Gi, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = R1.RTL, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1, this.stateDeco = t.facet(zt).filter((e)=>typeof e != "function"), this.heightMap = N1.empty().applyChanges(this.stateDeco, v.empty, this.heightOracle.setDoc(t.doc), [
            new I1(0, 0, 0, t.doc.length)
        ]), this.viewport = this.getViewport(0, null), this.updateViewportLines(), this.updateForViewport(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = M1.set(this.lineGaps.map((e)=>e.draw(!1))), this.computeVisibleRanges();
    }
    updateForViewport() {
        let t = [
            this.viewport
        ], { main: e  } = this.state.selection;
        for(let i = 0; i <= 1; i++){
            let s = i ? e.head : e.anchor;
            if (!t.some(({ from: r , to: o  })=>s >= r && s <= o)) {
                let { from: r , to: o  } = this.lineBlockAt(s);
                t.push(new dt(r, o));
            }
        }
        this.viewports = t.sort((i, s)=>i.from - s.from), this.scaler = this.heightMap.height <= 7e6 ? Gi : new Qe1(this.heightOracle.doc, this.heightMap, this.viewports);
    }
    updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.state.doc, 0, 0, (t)=>{
            this.viewportLines.push(this.scaler.scale == 1 ? t : Dt(t, this.scaler));
        });
    }
    update(t, e = null) {
        this.state = t.state;
        let i = this.stateDeco;
        this.stateDeco = this.state.facet(zt).filter((a)=>typeof a != "function");
        let s = t.changedRanges, r = I1.extendWithRanges(s, Jn(i, this.stateDeco, t ? t.changes : x.empty(this.state.doc.length))), o = this.heightMap.height;
        this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), r), this.heightMap.height != o && (t.flags |= 2);
        let l = r.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
        (e && (e.range.head < l.from || e.range.head > l.to) || !this.viewportIsAppropriate(l)) && (l = this.getViewport(0, e));
        let h = !t.changes.empty || t.flags & 2 || l.from != this.viewport.from || l.to != this.viewport.to;
        this.viewport = l, this.updateForViewport(), h && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))), t.flags |= this.computeVisibleRanges(), e && (this.scrollTarget = e), !this.mustEnforceCursorAssoc && t.selectionSet && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && (this.mustEnforceCursorAssoc = !0);
    }
    measure(t) {
        let e = t.contentDOM, i = window.getComputedStyle(e), s = this.heightOracle, r = i.whiteSpace;
        this.defaultTextDirection = i.direction == "rtl" ? R1.RTL : R1.LTR;
        let o = this.heightOracle.mustRefreshForWrapping(r), l = o || this.mustMeasureContent || this.contentDOMHeight != e.clientHeight;
        this.contentDOMHeight = e.clientHeight, this.mustMeasureContent = !1;
        let h = 0, a = 0, c = parseInt(i.paddingTop) || 0, f = parseInt(i.paddingBottom) || 0;
        (this.paddingTop != c || this.paddingBottom != f) && (this.paddingTop = c, this.paddingBottom = f, h |= 10), this.editorWidth != t.scrollDOM.clientWidth && (s.lineWrapping && (l = !0), this.editorWidth = t.scrollDOM.clientWidth, h |= 8);
        let d = (this.printing ? Qn : Zn)(e, this.paddingTop), u = d.top - this.pixelViewport.top, p = d.bottom - this.pixelViewport.bottom;
        this.pixelViewport = d;
        let m = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (m != this.inView && (this.inView = m, m && (l = !0)), !this.inView) return 0;
        let b = e.clientWidth;
        if ((this.contentDOMWidth != b || this.editorHeight != t.scrollDOM.clientHeight) && (this.contentDOMWidth = b, this.editorHeight = t.scrollDOM.clientHeight, h |= 8), l) {
            let k = t.docView.measureVisibleLineHeights(this.viewport);
            if (s.mustRefreshForHeights(k) && (o = !0), o || s.lineWrapping && Math.abs(b - this.contentDOMWidth) > s.charWidth) {
                let { lineHeight: v , charWidth: w  } = t.docView.measureTextSize();
                o = s.refresh(r, v, w, b / w, k), o && (t.docView.minWidth = 0, h |= 8);
            }
            u > 0 && p > 0 ? a = Math.max(u, p) : u < 0 && p < 0 && (a = Math.min(u, p)), s.heightChanged = !1;
            for (let v1 of this.viewports){
                let w1 = v1.from == this.viewport.from ? k : t.docView.measureVisibleLineHeights(v1);
                this.heightMap = this.heightMap.updateHeight(s, 0, o, new ue1(v1.from, w1));
            }
            s.heightChanged && (h |= 2);
        }
        let y = !this.viewportIsAppropriate(this.viewport, a) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return y && (this.viewport = this.getViewport(a, this.scrollTarget)), this.updateForViewport(), (h & 2 || y) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, t.docView.enforceCursorAssoc()), h;
    }
    get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top);
    }
    get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom);
    }
    getViewport(t, e) {
        let i = .5 - Math.max(-.5, Math.min(.5, t / 1e3 / 2)), s = this.heightMap, r = this.state.doc, { visibleTop: o , visibleBottom: l  } = this, h = new dt(s.lineAt(o - i * 1e3, A1.ByHeight, r, 0, 0).from, s.lineAt(l + (1 - i) * 1e3, A1.ByHeight, r, 0, 0).to);
        if (e) {
            let { head: a  } = e.range;
            if (a < h.from || a > h.to) {
                let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), f = s.lineAt(a, A1.ByPos, r, 0, 0), d;
                e.y == "center" ? d = (f.top + f.bottom) / 2 - c / 2 : e.y == "start" || e.y == "nearest" && a < h.from ? d = f.top : d = f.bottom - c, h = new dt(s.lineAt(d - 1e3 / 2, A1.ByHeight, r, 0, 0).from, s.lineAt(d + c + 1e3 / 2, A1.ByHeight, r, 0, 0).to);
            }
        }
        return h;
    }
    mapViewport(t, e) {
        let i = e.mapPos(t.from, -1), s = e.mapPos(t.to, 1);
        return new dt(this.heightMap.lineAt(i, A1.ByPos, this.state.doc, 0, 0).from, this.heightMap.lineAt(s, A1.ByPos, this.state.doc, 0, 0).to);
    }
    viewportIsAppropriate({ from: t , to: e  }, i = 0) {
        if (!this.inView) return !0;
        let { top: s  } = this.heightMap.lineAt(t, A1.ByPos, this.state.doc, 0, 0), { bottom: r  } = this.heightMap.lineAt(e, A1.ByPos, this.state.doc, 0, 0), { visibleTop: o , visibleBottom: l  } = this;
        return (t == 0 || s <= o - Math.max(10, Math.min(-i, 250))) && (e == this.state.doc.length || r >= l + Math.max(10, Math.min(i, 250))) && s > o - 2 * 1e3 && r < l + 2 * 1e3;
    }
    mapLineGaps(t, e) {
        if (!t.length || e.empty) return t;
        let i = [];
        for (let s of t)e.touchesRange(s.from, s.to) || i.push(new Bt(e.mapPos(s.from), e.mapPos(s.to), s.size));
        return i;
    }
    ensureLineGaps(t) {
        let e = [];
        if (this.defaultTextDirection != R1.LTR) return e;
        for (let i of this.viewportLines){
            if (i.length < 4e3) continue;
            let s = tr(i.from, i.to, this.stateDeco);
            if (s.total < 4e3) continue;
            let r, o;
            if (this.heightOracle.lineWrapping) {
                let a = 2e3 / this.heightOracle.lineLength * this.heightOracle.lineHeight;
                r = Xt(s, (this.visibleTop - i.top - a) / i.height), o = Xt(s, (this.visibleBottom - i.top + a) / i.height);
            } else {
                let a1 = s.total * this.heightOracle.charWidth, c = 2e3 * this.heightOracle.charWidth;
                r = Xt(s, (this.pixelViewport.left - c) / a1), o = Xt(s, (this.pixelViewport.right + c) / a1);
            }
            let l = [];
            r > i.from && l.push({
                from: i.from,
                to: r
            }), o < i.to && l.push({
                from: o,
                to: i.to
            });
            let h = this.state.selection.main;
            h.from >= i.from && h.from <= i.to && $i(l, h.from - 10, h.from + 10), !h.empty && h.to >= i.from && h.to <= i.to && $i(l, h.to - 10, h.to + 10);
            for (let { from: a2 , to: c1  } of l)c1 - a2 > 1e3 && e.push(er(t, (f)=>f.from >= i.from && f.to <= i.to && Math.abs(f.from - a2) < 1e3 && Math.abs(f.to - c1) < 1e3) || new Bt(a2, c1, this.gapSize(i, a2, c1, s)));
        }
        return e;
    }
    gapSize(t, e, i, s) {
        let r = ji(s, i) - ji(s, e);
        return this.heightOracle.lineWrapping ? t.height * r : s.total * this.heightOracle.charWidth * r;
    }
    updateLineGaps(t) {
        Bt.same(t, this.lineGaps) || (this.lineGaps = t, this.lineGapDeco = M1.set(t.map((e)=>e.draw(this.heightOracle.lineWrapping))));
    }
    computeVisibleRanges() {
        let t = this.stateDeco;
        this.lineGaps.length && (t = t.concat(this.lineGapDeco));
        let e = [];
        P.spans(t, this.viewport.from, this.viewport.to, {
            span (s, r) {
                e.push({
                    from: s,
                    to: r
                });
            },
            point () {}
        }, 20);
        let i = e.length != this.visibleRanges.length || this.visibleRanges.some((s, r)=>s.from != e[r].from || s.to != e[r].to);
        return this.visibleRanges = e, i ? 4 : 0;
    }
    lineBlockAt(t) {
        return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find((e)=>e.from <= t && e.to >= t) || Dt(this.heightMap.lineAt(t, A1.ByPos, this.state.doc, 0, 0), this.scaler);
    }
    lineBlockAtHeight(t) {
        return Dt(this.heightMap.lineAt(this.scaler.fromDOM(t), A1.ByHeight, this.state.doc, 0, 0), this.scaler);
    }
    elementAtHeight(t) {
        return Dt(this.heightMap.blockAt(this.scaler.fromDOM(t), this.state.doc, 0, 0), this.scaler);
    }
    get docHeight() {
        return this.scaler.toDOM(this.heightMap.height);
    }
    get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom;
    }
}, dt = class {
    constructor(t, e){
        this.from = t, this.to = e;
    }
};
function tr(n, t, e) {
    let i = [], s = n, r = 0;
    return P.spans(e, n, t, {
        span () {},
        point (o, l) {
            o > s && (i.push({
                from: s,
                to: o
            }), r += o - s), s = l;
        }
    }, 20), s < t && (i.push({
        from: s,
        to: t
    }), r += t - s), {
        total: r,
        ranges: i
    };
}
function Xt({ total: n , ranges: t  }, e) {
    if (e <= 0) return t[0].from;
    if (e >= 1) return t[t.length - 1].to;
    let i = Math.floor(n * e);
    for(let s = 0;; s++){
        let { from: r , to: o  } = t[s], l = o - r;
        if (i <= l) return r + i;
        i -= l;
    }
}
function ji(n, t) {
    let e = 0;
    for (let { from: i , to: s  } of n.ranges){
        if (t <= s) {
            e += t - i;
            break;
        }
        e += s - i;
    }
    return e / n.total;
}
function $i(n, t, e) {
    for(let i = 0; i < n.length; i++){
        let s = n[i];
        if (s.from < e && s.to > t) {
            let r = [];
            s.from < t && r.push({
                from: s.from,
                to: t
            }), s.to > e && r.push({
                from: e,
                to: s.to
            }), n.splice(i, 1, ...r), i += r.length - 1;
        }
    }
}
function er(n, t) {
    for (let e of n)if (t(e)) return e;
}
var Gi = {
    toDOM (n) {
        return n;
    },
    fromDOM (n) {
        return n;
    },
    scale: 1
}, Qe1 = class {
    constructor(t, e, i){
        let s = 0, r = 0, o = 0;
        this.viewports = i.map(({ from: l , to: h  })=>{
            let a = e.lineAt(l, A1.ByPos, t, 0, 0).top, c = e.lineAt(h, A1.ByPos, t, 0, 0).bottom;
            return s += c - a, {
                from: l,
                to: h,
                top: a,
                bottom: c,
                domTop: 0,
                domBottom: 0
            };
        }), this.scale = (7e6 - s) / (e.height - s);
        for (let l of this.viewports)l.domTop = o + (l.top - r) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), r = l.bottom;
    }
    toDOM(t) {
        for(let e = 0, i = 0, s = 0;; e++){
            let r = e < this.viewports.length ? this.viewports[e] : null;
            if (!r || t < r.top) return s + (t - i) * this.scale;
            if (t <= r.bottom) return r.domTop + (t - r.top);
            i = r.bottom, s = r.domBottom;
        }
    }
    fromDOM(t) {
        for(let e = 0, i = 0, s = 0;; e++){
            let r = e < this.viewports.length ? this.viewports[e] : null;
            if (!r || t < r.domTop) return i + (t - s) / this.scale;
            if (t <= r.domBottom) return r.top + (t - r.domTop);
            i = r.bottom, s = r.domBottom;
        }
    }
};
function Dt(n, t) {
    if (t.scale == 1) return n;
    let e = t.toDOM(n.top), i = t.toDOM(n.bottom);
    return new $1(n.from, n.length, e, i - e, Array.isArray(n.type) ? n.type.map((s)=>Dt(s, t)) : n.type);
}
var Ut = A.define({
    combine: (n)=>n.join(" ")
}), ti = A.define({
    combine: (n)=>n.indexOf(!0) > -1
}), ei = T1.newName(), Xs = T1.newName(), Us = T1.newName(), Js = {
    "&light": "." + Xs,
    "&dark": "." + Us
};
function ii(n, t, e) {
    return new T1(t, {
        finish (i) {
            return /&/.test(i) ? i.replace(/&\w*/, (s)=>{
                if (s == "&") return n;
                if (!e || !e[s]) throw new RangeError(`Unsupported selector: ${s}`);
                return e[s];
            }) : n + " " + i;
        }
    });
}
var ir = ii("." + ei, {
    "&.cm-editor": {
        position: "relative !important",
        boxSizing: "border-box",
        "&.cm-focused": {
            outline: "1px dotted #212121"
        },
        display: "flex !important",
        flexDirection: "column"
    },
    ".cm-scroller": {
        display: "flex !important",
        alignItems: "flex-start !important",
        fontFamily: "monospace",
        lineHeight: 1.4,
        height: "100%",
        overflowX: "auto",
        position: "relative",
        zIndex: 0
    },
    ".cm-content": {
        margin: 0,
        flexGrow: 2,
        minHeight: "100%",
        display: "block",
        whiteSpace: "pre",
        wordWrap: "normal",
        boxSizing: "border-box",
        padding: "4px 0",
        outline: "none",
        "&[contenteditable=true]": {
            WebkitUserModify: "read-write-plaintext-only"
        }
    },
    ".cm-lineWrapping": {
        whiteSpace_fallback: "pre-wrap",
        whiteSpace: "break-spaces",
        wordBreak: "break-word",
        overflowWrap: "anywhere"
    },
    "&light .cm-content": {
        caretColor: "black"
    },
    "&dark .cm-content": {
        caretColor: "white"
    },
    ".cm-line": {
        display: "block",
        padding: "0 2px 0 4px"
    },
    ".cm-selectionLayer": {
        zIndex: -1,
        contain: "size style"
    },
    ".cm-selectionBackground": {
        position: "absolute"
    },
    "&light .cm-selectionBackground": {
        background: "#d9d9d9"
    },
    "&dark .cm-selectionBackground": {
        background: "#222"
    },
    "&light.cm-focused .cm-selectionBackground": {
        background: "#d7d4f0"
    },
    "&dark.cm-focused .cm-selectionBackground": {
        background: "#233"
    },
    ".cm-cursorLayer": {
        zIndex: 100,
        contain: "size style",
        pointerEvents: "none"
    },
    "&.cm-focused .cm-cursorLayer": {
        animation: "steps(1) cm-blink 1.2s infinite"
    },
    "@keyframes cm-blink": {
        "0%": {},
        "50%": {
            visibility: "hidden"
        },
        "100%": {}
    },
    "@keyframes cm-blink2": {
        "0%": {},
        "50%": {
            visibility: "hidden"
        },
        "100%": {}
    },
    ".cm-cursor, .cm-dropCursor": {
        position: "absolute",
        borderLeft: "1.2px solid black",
        marginLeft: "-0.6px",
        pointerEvents: "none"
    },
    ".cm-cursor": {
        display: "none"
    },
    "&dark .cm-cursor": {
        borderLeftColor: "#444"
    },
    "&.cm-focused .cm-cursor": {
        display: "block"
    },
    "&light .cm-activeLine": {
        backgroundColor: "#f3f9ff"
    },
    "&dark .cm-activeLine": {
        backgroundColor: "#223039"
    },
    "&light .cm-specialChar": {
        color: "red"
    },
    "&dark .cm-specialChar": {
        color: "#f78"
    },
    ".cm-gutters": {
        display: "flex",
        height: "100%",
        boxSizing: "border-box",
        left: 0,
        zIndex: 200
    },
    "&light .cm-gutters": {
        backgroundColor: "#f5f5f5",
        color: "#6c6c6c",
        borderRight: "1px solid #ddd"
    },
    "&dark .cm-gutters": {
        backgroundColor: "#333338",
        color: "#ccc"
    },
    ".cm-gutter": {
        display: "flex !important",
        flexDirection: "column",
        flexShrink: 0,
        boxSizing: "border-box",
        minHeight: "100%",
        overflow: "hidden"
    },
    ".cm-gutterElement": {
        boxSizing: "border-box"
    },
    ".cm-lineNumbers .cm-gutterElement": {
        padding: "0 3px 0 5px",
        minWidth: "20px",
        textAlign: "right",
        whiteSpace: "nowrap"
    },
    "&light .cm-activeLineGutter": {
        backgroundColor: "#e2f2ff"
    },
    "&dark .cm-activeLineGutter": {
        backgroundColor: "#222227"
    },
    ".cm-panels": {
        boxSizing: "border-box",
        position: "sticky",
        left: 0,
        right: 0
    },
    "&light .cm-panels": {
        backgroundColor: "#f5f5f5",
        color: "black"
    },
    "&light .cm-panels-top": {
        borderBottom: "1px solid #ddd"
    },
    "&light .cm-panels-bottom": {
        borderTop: "1px solid #ddd"
    },
    "&dark .cm-panels": {
        backgroundColor: "#333338",
        color: "white"
    },
    ".cm-tab": {
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "bottom"
    },
    ".cm-widgetBuffer": {
        verticalAlign: "text-top",
        height: "1em",
        display: "inline"
    },
    ".cm-placeholder": {
        color: "#888",
        display: "inline-block",
        verticalAlign: "top"
    },
    ".cm-button": {
        verticalAlign: "middle",
        color: "inherit",
        fontSize: "70%",
        padding: ".2em 1em",
        borderRadius: "1px"
    },
    "&light .cm-button": {
        backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
        border: "1px solid #888",
        "&:active": {
            backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
        }
    },
    "&dark .cm-button": {
        backgroundImage: "linear-gradient(#393939, #111)",
        border: "1px solid #888",
        "&:active": {
            backgroundImage: "linear-gradient(#111, #333)"
        }
    },
    ".cm-textfield": {
        verticalAlign: "middle",
        color: "inherit",
        fontSize: "70%",
        border: "1px solid silver",
        padding: ".2em .5em"
    },
    "&light .cm-textfield": {
        backgroundColor: "white"
    },
    "&dark .cm-textfield": {
        border: "1px solid #555",
        backgroundColor: "inherit"
    }
}, Js), sr = {
    childList: !0,
    characterData: !0,
    subtree: !0,
    attributes: !0,
    characterDataOldValue: !0
}, Me1 = g2.ie && g2.ie_version <= 11, si = class {
    constructor(t, e, i){
        this.view = t, this.onChange = e, this.onScrollChanged = i, this.active = !1, this.selectionRange = new Ee1, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.scrollTargets = [], this.intersection = null, this.resize = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.parentCheck = -1, this.dom = t.contentDOM, this.observer = new MutationObserver((s)=>{
            for (let r of s)this.queue.push(r);
            (g2.ie && g2.ie_version <= 11 || g2.ios && t.composing) && s.some((r)=>r.type == "childList" && r.removedNodes.length || r.type == "characterData" && r.oldValue.length > r.target.nodeValue.length) ? this.flushSoon() : this.flush();
        }), Me1 && (this.onCharData = (s)=>{
            this.queue.push({
                target: s.target,
                type: "characterData",
                oldValue: s.prevValue
            }), this.flushSoon();
        }), this.onSelectionChange = this.onSelectionChange.bind(this), window.addEventListener("resize", this.onResize = this.onResize.bind(this)), typeof ResizeObserver == "function" && (this.resize = new ResizeObserver(()=>{
            this.view.docView.lastUpdate < Date.now() - 75 && this.onResize();
        }), this.resize.observe(t.scrollDOM)), window.addEventListener("beforeprint", this.onPrint = this.onPrint.bind(this)), this.start(), window.addEventListener("scroll", this.onScroll = this.onScroll.bind(this)), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((s)=>{
            this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), s.length > 0 && s[s.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
        }, {}), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((s)=>{
            s.length > 0 && s[s.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
        }, {})), this.listenForScroll(), this.readSelectionRange(), this.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
    }
    onScroll(t) {
        this.intersecting && this.flush(!1), this.onScrollChanged(t);
    }
    onResize() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(()=>{
            this.resizeTimeout = -1, this.view.requestMeasure();
        }, 50));
    }
    onPrint() {
        this.view.viewState.printing = !0, this.view.measure(), setTimeout(()=>{
            this.view.viewState.printing = !1, this.view.requestMeasure();
        }, 500);
    }
    updateGaps(t) {
        if (this.gapIntersection && (t.length != this.gaps.length || this.gaps.some((e, i)=>e != t[i]))) {
            this.gapIntersection.disconnect();
            for (let e of t)this.gapIntersection.observe(e);
            this.gaps = t;
        }
    }
    onSelectionChange(t) {
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let { view: e  } = this, i = this.selectionRange;
        if (e.state.facet(jt) ? e.root.activeElement != this.dom : !Re1(e.dom, i)) return;
        let s = i.anchorNode && e.docView.nearest(i.anchorNode);
        s && s.ignoreEvent(t) || ((g2.ie && g2.ie_version <= 11 || g2.android && g2.chrome) && !e.state.selection.main.empty && i.focusNode && ie1(i.focusNode, i.focusOffset, i.anchorNode, i.anchorOffset) ? this.flushSoon() : this.flush(!1));
    }
    readSelectionRange() {
        let { root: t  } = this.view, e = ee1(t), i = g2.safari && t.nodeType == 11 && gn() == this.view.contentDOM && nr(this.view) || e;
        return this.selectionRange.eq(i) ? !1 : (this.selectionRange.setRange(i), this.selectionChanged = !0);
    }
    setSelectionRange(t, e) {
        this.selectionRange.set(t.node, t.offset, e.node, e.offset), this.selectionChanged = !1;
    }
    clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0);
    }
    listenForScroll() {
        this.parentCheck = -1;
        let t = 0, e = null;
        for(let i = this.dom; i;)if (i.nodeType == 1) !e && t < this.scrollTargets.length && this.scrollTargets[t] == i ? t++ : e || (e = this.scrollTargets.slice(0, t)), e && e.push(i), i = i.assignedSlot || i.parentNode;
        else if (i.nodeType == 11) i = i.host;
        else break;
        if (t < this.scrollTargets.length && !e && (e = this.scrollTargets.slice(0, t)), e) {
            for (let i1 of this.scrollTargets)i1.removeEventListener("scroll", this.onScroll);
            for (let i2 of this.scrollTargets = e)i2.addEventListener("scroll", this.onScroll);
        }
    }
    ignore(t) {
        if (!this.active) return t();
        try {
            return this.stop(), t();
        } finally{
            this.start(), this.clear();
        }
    }
    start() {
        this.active || (this.observer.observe(this.dom, sr), Me1 && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
    }
    stop() {
        !this.active || (this.active = !1, this.observer.disconnect(), Me1 && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
    }
    clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
    }
    delayAndroidKey(t, e) {
        this.delayedAndroidKey || requestAnimationFrame(()=>{
            let i = this.delayedAndroidKey;
            this.delayedAndroidKey = null, this.delayedFlush = -1, this.flush() || Lt(this.view.contentDOM, i.key, i.keyCode);
        }), (!this.delayedAndroidKey || t == "Enter") && (this.delayedAndroidKey = {
            key: t,
            keyCode: e
        });
    }
    flushSoon() {
        this.delayedFlush < 0 && (this.delayedFlush = window.setTimeout(()=>{
            this.delayedFlush = -1, this.flush();
        }, 20));
    }
    forceFlush() {
        this.delayedFlush >= 0 && (window.clearTimeout(this.delayedFlush), this.delayedFlush = -1, this.flush());
    }
    processRecords() {
        let t = this.queue;
        for (let r of this.observer.takeRecords())t.push(r);
        t.length && (this.queue = []);
        let e = -1, i = -1, s = !1;
        for (let r1 of t){
            let o = this.readMutation(r1);
            !o || (o.typeOver && (s = !0), e == -1 ? { from: e , to: i  } = o : (e = Math.min(o.from, e), i = Math.max(o.to, i)));
        }
        return {
            from: e,
            to: i,
            typeOver: s
        };
    }
    flush(t = !0) {
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return;
        t && this.readSelectionRange();
        let { from: e , to: i , typeOver: s  } = this.processRecords(), r = this.selectionChanged && Re1(this.dom, this.selectionRange);
        if (e < 0 && !r) return;
        this.selectionChanged = !1;
        let o = this.view.state, l = this.onChange(e, i, s);
        return this.view.state == o && this.view.update([]), l;
    }
    readMutation(t) {
        let e = this.view.docView.nearest(t.target);
        if (!e || e.ignoreMutation(t)) return null;
        if (e.markDirty(t.type == "attributes"), t.type == "attributes" && (e.dirty |= 4), t.type == "childList") {
            let i = _i(e, t.previousSibling || t.target.previousSibling, -1), s = _i(e, t.nextSibling || t.target.nextSibling, 1);
            return {
                from: i ? e.posAfter(i) : e.posAtStart,
                to: s ? e.posBefore(s) : e.posAtEnd,
                typeOver: !1
            };
        } else return t.type == "characterData" ? {
            from: e.posAtStart,
            to: e.posAtEnd,
            typeOver: t.target.nodeValue == t.oldValue
        } : null;
    }
    destroy() {
        var t, e, i;
        this.stop(), (t = this.intersection) === null || t === void 0 || t.disconnect(), (e = this.gapIntersection) === null || e === void 0 || e.disconnect(), (i = this.resize) === null || i === void 0 || i.disconnect();
        for (let s of this.scrollTargets)s.removeEventListener("scroll", this.onScroll);
        window.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResize), window.removeEventListener("beforeprint", this.onPrint), this.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout);
    }
};
function _i(n, t, e) {
    for(; t;){
        let i = O1.get(t);
        if (i && i.parent == n) return i;
        let s = t.parentNode;
        t = s != n.dom ? s : e > 0 ? t.nextSibling : t.previousSibling;
    }
    return null;
}
function nr(n) {
    let t = null;
    function e(h) {
        h.preventDefault(), h.stopImmediatePropagation(), t = h.getTargetRanges()[0];
    }
    if (n.contentDOM.addEventListener("beforeinput", e, !0), document.execCommand("indent"), n.contentDOM.removeEventListener("beforeinput", e, !0), !t) return null;
    let i = t.startContainer, s = t.startOffset, r = t.endContainer, o = t.endOffset, l = n.docView.domAtPos(n.state.selection.main.anchor);
    return ie1(l.node, l.offset, r, o) && ([i, s, r, o] = [
        r,
        o,
        i,
        s
    ]), {
        anchorNode: i,
        anchorOffset: s,
        focusNode: r,
        focusOffset: o
    };
}
function rr(n, t, e, i) {
    let s, r, o = n.state.selection.main;
    if (t > -1) {
        let l = n.docView.domBoundsAround(t, e, 0);
        if (!l || n.state.readOnly) return !1;
        let { from: h , to: a  } = l, c = n.docView.impreciseHead || n.docView.impreciseAnchor ? [] : lr(n), f = new le1(c, n.state);
        f.readRange(l.startDOM, l.endDOM);
        let d = o.from, u = null;
        (n.inputState.lastKeyCode === 8 && n.inputState.lastKeyTime > Date.now() - 100 || g2.android && f.text.length < a - h) && (d = o.to, u = "end");
        let p = or(n.state.doc.sliceString(h, a, st1), f.text, d - h, u);
        p && (g2.chrome && n.inputState.lastKeyCode == 13 && p.toB == p.from + 2 && f.text.slice(p.from, p.toB) == st1 + st1 && p.toB--, s = {
            from: h + p.from,
            to: h + p.toA,
            insert: v.of(f.text.slice(p.from, p.toB).split(st1))
        }), r = hr(c, h);
    } else if (n.hasFocus || !n.state.facet(jt)) {
        let l1 = n.observer.selectionRange, { impreciseHead: h1 , impreciseAnchor: a1  } = n.docView, c1 = h1 && h1.node == l1.focusNode && h1.offset == l1.focusOffset || !yt(n.contentDOM, l1.focusNode) ? n.state.selection.main.head : n.docView.posFromDOM(l1.focusNode, l1.focusOffset), f1 = a1 && a1.node == l1.anchorNode && a1.offset == l1.anchorOffset || !yt(n.contentDOM, l1.anchorNode) ? n.state.selection.main.anchor : n.docView.posFromDOM(l1.anchorNode, l1.anchorOffset);
        (c1 != o.head || f1 != o.anchor) && (r = g.single(f1, c1));
    }
    if (!s && !r) return !1;
    if (!s && i && !o.empty && r && r.main.empty ? s = {
        from: o.from,
        to: o.to,
        insert: n.state.doc.slice(o.from, o.to)
    } : s && s.from >= o.from && s.to <= o.to && (s.from != o.from || s.to != o.to) && o.to - o.from - (s.to - s.from) <= 4 ? s = {
        from: o.from,
        to: o.to,
        insert: n.state.doc.slice(o.from, s.from).append(s.insert).append(n.state.doc.slice(s.to, o.to))
    } : (g2.mac || g2.android) && s && s.from == s.to && s.from == o.head - 1 && s.insert.toString() == "." && (s = {
        from: o.from,
        to: o.to,
        insert: v.of([
            " "
        ])
    }), s) {
        let l2 = n.state;
        if (g2.ios && n.inputState.flushIOSKey(n) || g2.android && (s.from == o.from && s.to == o.to && s.insert.length == 1 && s.insert.lines == 2 && Lt(n.contentDOM, "Enter", 13) || s.from == o.from - 1 && s.to == o.to && s.insert.length == 0 && Lt(n.contentDOM, "Backspace", 8) || s.from == o.from && s.to == o.to + 1 && s.insert.length == 0 && Lt(n.contentDOM, "Delete", 46))) return !0;
        let h2 = s.insert.toString();
        if (n.state.facet(Os).some((f)=>f(n, s.from, s.to, h2))) return !0;
        n.inputState.composing >= 0 && n.inputState.composing++;
        let a2;
        if (s.from >= o.from && s.to <= o.to && s.to - s.from >= (o.to - o.from) / 3 && (!r || r.main.empty && r.main.from == s.from + s.insert.length) && n.inputState.composing < 0) {
            let f2 = o.from < s.from ? l2.sliceDoc(o.from, s.from) : "", d1 = o.to > s.to ? l2.sliceDoc(s.to, o.to) : "";
            a2 = l2.replaceSelection(n.state.toText(f2 + s.insert.sliceString(0, void 0, n.state.lineBreak) + d1));
        } else {
            let f3 = l2.changes(s), d2 = r && !l2.selection.main.eq(r.main) && r.main.to <= f3.newLength ? r.main : void 0;
            if (l2.selection.ranges.length > 1 && n.inputState.composing >= 0 && s.to <= o.to && s.to >= o.to - 10) {
                let u1 = n.state.sliceDoc(s.from, s.to), p1 = Ws(n) || n.state.doc.lineAt(o.head), m = o.to - s.to, b = o.to - o.from;
                a2 = l2.changeByRange((y)=>{
                    if (y.from == o.from && y.to == o.to) return {
                        changes: f3,
                        range: d2 || y.map(f3)
                    };
                    let k = y.to - m, v = k - u1.length;
                    if (y.to - y.from != b || n.state.sliceDoc(v, k) != u1 || p1 && y.to >= p1.from && y.from <= p1.to) return {
                        range: y
                    };
                    let w = l2.changes({
                        from: v,
                        to: k,
                        insert: s.insert
                    }), L = y.to - o.to;
                    return {
                        changes: w,
                        range: d2 ? g.range(Math.max(0, d2.anchor + L), Math.max(0, d2.head + L)) : y.map(w)
                    };
                });
            } else a2 = {
                changes: f3,
                selection: d2 && l2.selection.replaceRange(d2)
            };
        }
        let c2 = "input.type";
        return n.composing && (c2 += ".compose", n.inputState.compositionFirstChange && (c2 += ".start", n.inputState.compositionFirstChange = !1)), n.dispatch(a2, {
            scrollIntoView: !0,
            userEvent: c2
        }), !0;
    } else if (r && !r.main.eq(o)) {
        let l3 = !1, h3 = "select";
        return n.inputState.lastSelectionTime > Date.now() - 50 && (n.inputState.lastSelectionOrigin == "select" && (l3 = !0), h3 = n.inputState.lastSelectionOrigin), n.dispatch({
            selection: r,
            scrollIntoView: l3,
            userEvent: h3
        }), !0;
    } else return !1;
}
function or(n, t, e, i) {
    let s = Math.min(n.length, t.length), r = 0;
    for(; r < s && n.charCodeAt(r) == t.charCodeAt(r);)r++;
    if (r == s && n.length == t.length) return null;
    let o = n.length, l = t.length;
    for(; o > 0 && l > 0 && n.charCodeAt(o - 1) == t.charCodeAt(l - 1);)o--, l--;
    if (i == "end") {
        let h = Math.max(0, r - Math.min(o, l));
        e -= o + h - r;
    }
    return o < r && n.length < t.length ? (r -= e <= r && e >= o ? r - e : 0, l = r + (l - o), o = r) : l < r && (r -= e <= r && e >= l ? r - e : 0, o = r + (o - l), l = r), {
        from: r,
        toA: o,
        toB: l
    };
}
function lr(n) {
    let t = [];
    if (n.root.activeElement != n.contentDOM) return t;
    let { anchorNode: e , anchorOffset: i , focusNode: s , focusOffset: r  } = n.observer.selectionRange;
    return e && (t.push(new he(e, i)), (s != e || r != i) && t.push(new he(s, r))), t;
}
function hr(n, t) {
    if (n.length == 0) return null;
    let e = n[0].pos, i = n.length == 2 ? n[1].pos : e;
    return e > -1 && i > -1 ? g.single(e + t, i + t) : null;
}
var C1 = class {
    constructor(t = {}){
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.style.cssText = "position: absolute; top: -10000px", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), this._dispatch = t.dispatch || ((e)=>this.update([
                e
            ])), this.dispatch = this.dispatch.bind(this), this.root = t.root || wn(t.parent) || document, this.viewState = new pe1(t.state || w.create()), this.plugins = this.state.facet(kt).map((e)=>new Et(e));
        for (let e of this.plugins)e.update(this);
        this.observer = new si(this, (e, i, s)=>rr(this, e, i, s), (e)=>{
            this.inputState.runScrollHandlers(this, e), this.observer.intersecting && this.measure();
        }), this.inputState = new _e1(this), this.inputState.ensureHandlers(this, this.plugins), this.docView = new ae1(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), t.parent && t.parent.appendChild(this.dom);
    }
    get state() {
        return this.viewState.state;
    }
    get viewport() {
        return this.viewState.viewport;
    }
    get visibleRanges() {
        return this.viewState.visibleRanges;
    }
    get inView() {
        return this.viewState.inView;
    }
    get composing() {
        return this.inputState.composing > 0;
    }
    get compositionStarted() {
        return this.inputState.composing >= 0;
    }
    dispatch(...t) {
        this._dispatch(t.length == 1 && t[0] instanceof S ? t[0] : this.state.update(...t));
    }
    update(t) {
        if (this.updateState != 0) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let e = !1, i = !1, s, r = this.state;
        for (let l of t){
            if (l.startState != r) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
            r = l.state;
        }
        if (this.destroyed) {
            this.viewState.state = r;
            return;
        }
        if (this.observer.clear(), r.facet(w.phrases) != this.state.facet(w.phrases)) return this.setState(r);
        s = xt.create(this, r, t);
        let o = this.viewState.scrollTarget;
        try {
            this.updateState = 2;
            for (let l1 of t){
                if (o && (o = o.map(l1.changes)), l1.scrollIntoView) {
                    let { main: h  } = l1.state.selection;
                    o = new vt(h.empty ? h : g.cursor(h.head, h.head > h.anchor ? -1 : 1));
                }
                for (let h1 of l1.effects)h1.is(Di) && (o = h1.value);
            }
            this.viewState.update(s, o), this.bidiCache = St.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), e = this.docView.update(s), this.state.facet(At) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(e, t.some((l)=>l.isUserEvent("select.pointer")));
        } finally{
            this.updateState = 0;
        }
        if (s.startState.facet(Ut) != s.state.facet(Ut) && (this.viewState.mustMeasureContent = !0), (e || i || o || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), !s.empty) for (let l2 of this.state.facet(Ie1))l2(s);
    }
    setState(t) {
        if (this.updateState != 0) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) {
            this.viewState.state = t;
            return;
        }
        this.updateState = 2;
        let e = this.hasFocus;
        try {
            for (let i of this.plugins)i.destroy(this);
            this.viewState = new pe1(t), this.plugins = t.facet(kt).map((i)=>new Et(i)), this.pluginMap.clear();
            for (let i1 of this.plugins)i1.update(this);
            this.docView = new ae1(this), this.inputState.ensureHandlers(this, this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
        } finally{
            this.updateState = 0;
        }
        e && this.focus(), this.requestMeasure();
    }
    updatePlugins(t) {
        let e = t.startState.facet(kt), i = t.state.facet(kt);
        if (e != i) {
            let s = [];
            for (let r of i){
                let o = e.indexOf(r);
                if (o < 0) s.push(new Et(r));
                else {
                    let l = this.plugins[o];
                    l.mustUpdate = t, s.push(l);
                }
            }
            for (let r1 of this.plugins)r1.mustUpdate != t && r1.destroy(this);
            this.plugins = s, this.pluginMap.clear(), this.inputState.ensureHandlers(this, this.plugins);
        } else for (let s1 of this.plugins)s1.mustUpdate = t;
        for(let s2 = 0; s2 < this.plugins.length; s2++)this.plugins[s2].update(this);
    }
    measure(t = !0) {
        if (this.destroyed) return;
        this.measureScheduled > -1 && cancelAnimationFrame(this.measureScheduled), this.measureScheduled = 0, t && this.observer.flush();
        let e = null;
        try {
            for(let i = 0;; i++){
                this.updateState = 1;
                let s = this.viewport, r = this.viewState.measure(this);
                if (!r && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
                if (i > 5) {
                    console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
                    break;
                }
                let o = [];
                r & 4 || ([this.measureRequests, o] = [
                    o,
                    this.measureRequests
                ]);
                let l = o.map((f)=>{
                    try {
                        return f.read(this);
                    } catch (d) {
                        return nt1(this.state, d), Yi;
                    }
                }), h = xt.create(this, this.state, []), a = !1, c = !1;
                h.flags |= r, e ? e.flags |= r : e = h, this.updateState = 2, h.empty || (this.updatePlugins(h), this.inputState.update(h), this.updateAttrs(), a = this.docView.update(h));
                for(let f = 0; f < o.length; f++)if (l[f] != Yi) try {
                    let d = o[f];
                    d.write && d.write(l[f], this);
                } catch (d1) {
                    nt1(this.state, d1);
                }
                if (this.viewState.scrollTarget && (this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, c = !0), a && this.docView.updateSelection(!0), this.viewport.from == s.from && this.viewport.to == s.to && !c && this.measureRequests.length == 0) break;
            }
        } finally{
            this.updateState = 0, this.measureScheduled = -1;
        }
        if (e && !e.empty) for (let i1 of this.state.facet(Ie1))i1(e);
    }
    get themeClasses() {
        return ei + " " + (this.state.facet(ti) ? Us : Xs) + " " + this.state.facet(Ut);
    }
    updateAttrs() {
        let t = Xi(this, Rs, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
        }), e = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            translate: "no",
            contenteditable: this.state.facet(jt) ? "true" : "false",
            class: "cm-content",
            style: `${g2.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
        };
        this.state.readOnly && (e["aria-readonly"] = "true"), Xi(this, bi, e);
        let i = this.observer.ignore(()=>{
            let s = ze1(this.contentDOM, this.contentAttrs, e), r = ze1(this.dom, this.editorAttrs, t);
            return s || r;
        });
        return this.editorAttrs = t, this.contentAttrs = e, i;
    }
    showAnnouncements(t) {
        let e = !0;
        for (let i of t)for (let s of i.effects)if (s.is(C1.announce)) {
            e && (this.announceDOM.textContent = ""), e = !1;
            let r = this.announceDOM.appendChild(document.createElement("div"));
            r.textContent = s.value;
        }
    }
    mountStyles() {
        this.styleModules = this.state.facet(At), T1.mount(this.root, this.styleModules.concat(ir).reverse());
    }
    readMeasured() {
        if (this.updateState == 2) throw new Error("Reading the editor layout isn't allowed during an update");
        this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
    }
    requestMeasure(t) {
        if (this.measureScheduled < 0 && (this.measureScheduled = requestAnimationFrame(()=>this.measure())), t) {
            if (t.key != null) {
                for(let e = 0; e < this.measureRequests.length; e++)if (this.measureRequests[e].key === t.key) {
                    this.measureRequests[e] = t;
                    return;
                }
            }
            this.measureRequests.push(t);
        }
    }
    plugin(t) {
        let e = this.pluginMap.get(t);
        return (e === void 0 || e && e.spec != t) && this.pluginMap.set(t, e = this.plugins.find((i)=>i.spec == t) || null), e && e.update(this).value;
    }
    get documentTop() {
        return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
    }
    get documentPadding() {
        return {
            top: this.viewState.paddingTop,
            bottom: this.viewState.paddingBottom
        };
    }
    elementAtHeight(t) {
        return this.readMeasured(), this.viewState.elementAtHeight(t);
    }
    lineBlockAtHeight(t) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(t);
    }
    get viewportLineBlocks() {
        return this.viewState.viewportLines;
    }
    lineBlockAt(t) {
        return this.viewState.lineBlockAt(t);
    }
    get contentHeight() {
        return this.viewState.contentHeight;
    }
    moveByChar(t, e, i) {
        return Ce1(this, t, Bi(this, t, e, i));
    }
    moveByGroup(t, e) {
        return Ce1(this, t, Bi(this, t, e, (i)=>zn(this, t.head, i)));
    }
    moveToLineBoundary(t, e, i = !0) {
        return Wn(this, t, e, i);
    }
    moveVertically(t, e, i) {
        return Ce1(this, t, Fn(this, t, e, i));
    }
    domAtPos(t) {
        return this.docView.domAtPos(t);
    }
    posAtDOM(t, e = 0) {
        return this.docView.posFromDOM(t, e);
    }
    posAtCoords(t, e = !0) {
        return this.readMeasured(), Fs(this, t, e);
    }
    coordsAtPos(t, e = 1) {
        this.readMeasured();
        let i = this.docView.coordsAt(t, e);
        if (!i || i.left == i.right) return i;
        let s = this.state.doc.lineAt(t), r = this.bidiSpans(s), o = r[rt1.find(r, t - s.from, -1, e)];
        return we1(i, o.dir == R1.LTR == e > 0);
    }
    get defaultCharacterWidth() {
        return this.viewState.heightOracle.charWidth;
    }
    get defaultLineHeight() {
        return this.viewState.heightOracle.lineHeight;
    }
    get textDirection() {
        return this.viewState.defaultTextDirection;
    }
    textDirectionAt(t) {
        return !this.state.facet(Ts) || t < this.viewport.from || t > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t));
    }
    get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping;
    }
    bidiSpans(t) {
        if (t.length > ar) return Hs(t.length);
        let e = this.textDirectionAt(t.from);
        for (let s of this.bidiCache)if (s.from == t.from && s.dir == e) return s.order;
        let i = Ps(t.text, e);
        return this.bidiCache.push(new St(t.from, t.to, e, i)), i;
    }
    get hasFocus() {
        var t;
        return (document.hasFocus() || g2.safari && ((t = this.inputState) === null || t === void 0 ? void 0 : t.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
    }
    focus() {
        this.observer.ignore(()=>{
            ds(this.contentDOM), this.docView.updateSelection();
        });
    }
    destroy() {
        for (let t of this.plugins)t.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
    }
    static scrollIntoView(t, e = {}) {
        return Di.of(new vt(typeof t == "number" ? g.cursor(t) : t, e.y, e.x, e.yMargin, e.xMargin));
    }
    static domEventHandlers(t) {
        return V1.define(()=>({}), {
            eventHandlers: t
        });
    }
    static theme(t, e) {
        let i = T1.newName(), s = [
            Ut.of(i),
            At.of(ii(`.${i}`, t))
        ];
        return e && e.dark && s.push(ti.of(!0)), s;
    }
    static baseTheme(t) {
        return lt.lowest(At.of(ii("." + ei, t, Js)));
    }
};
C1.styleModule = At;
C1.inputHandler = Os;
C1.perLineTextDirection = Ts;
C1.exceptionSink = Ds;
C1.updateListener = Ie1;
C1.editable = jt;
C1.mouseSelectionStyle = As;
C1.dragMovesSelection = ks;
C1.clickAddsSelectionRange = Ms;
C1.decorations = zt;
C1.atomicRanges = Ls;
C1.scrollMargins = Es;
C1.darkTheme = ti;
C1.contentAttributes = bi;
C1.editorAttributes = Rs;
C1.lineWrapping = C1.contentAttributes.of({
    class: "cm-lineWrapping"
});
C1.announce = y.define();
var ar = 4096, Yi = {}, St = class {
    constructor(t, e, i, s){
        this.from = t, this.to = e, this.dir = i, this.order = s;
    }
    static update(t, e) {
        if (e.empty) return t;
        let i = [], s = t.length ? t[t.length - 1].dir : R1.LTR;
        for(let r = Math.max(0, t.length - 10); r < t.length; r++){
            let o = t[r];
            o.dir == s && !e.touchesRange(o.from, o.to) && i.push(new St(e.mapPos(o.from, 1), e.mapPos(o.to, -1), o.dir, o.order));
        }
        return i;
    }
};
function Xi(n, t, e) {
    for(let i = n.state.facet(t), s = i.length - 1; s >= 0; s--){
        let r = i[s], o = typeof r == "function" ? r(n) : r;
        o && We1(o, e);
    }
    return e;
}
var cr = g2.mac ? "mac" : g2.windows ? "win" : g2.linux ? "linux" : "key";
function fr(n, t) {
    let e = n.split(/-(?!$)/), i = e[e.length - 1];
    i == "Space" && (i = " ");
    let s, r, o, l;
    for(let h = 0; h < e.length - 1; ++h){
        let a = e[h];
        if (/^(cmd|meta|m)$/i.test(a)) l = !0;
        else if (/^a(lt)?$/i.test(a)) s = !0;
        else if (/^(c|ctrl|control)$/i.test(a)) r = !0;
        else if (/^s(hift)?$/i.test(a)) o = !0;
        else if (/^mod$/i.test(a)) t == "mac" ? l = !0 : r = !0;
        else throw new Error("Unrecognized modifier name: " + a);
    }
    return s && (i = "Alt-" + i), r && (i = "Ctrl-" + i), l && (i = "Meta-" + i), o && (i = "Shift-" + i), i;
}
function ke1(n, t, e) {
    return t.altKey && (n = "Alt-" + n), t.ctrlKey && (n = "Ctrl-" + n), t.metaKey && (n = "Meta-" + n), e !== !1 && t.shiftKey && (n = "Shift-" + n), n;
}
var ur = C1.domEventHandlers({
    keydown (n, t) {
        return Qs(Zs(t.state), n, t, "editor");
    }
}), dr = A.define({
    enables: ur
}), Ui = new WeakMap;
function Zs(n) {
    let t = n.facet(dr), e = Ui.get(t);
    return e || Ui.set(t, e = mr(t.reduce((i, s)=>i.concat(s), []))), e;
}
function Jr(n, t, e) {
    return Qs(Zs(n.state), t, n, e);
}
var it1 = null, pr = 4e3;
function mr(n, t = cr) {
    let e = Object.create(null), i = Object.create(null), s = (o, l)=>{
        let h = i[o];
        if (h == null) i[o] = l;
        else if (h != l) throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
    }, r = (o, l, h, a)=>{
        let c = e[o] || (e[o] = Object.create(null)), f = l.split(/ (?!$)/).map((p)=>fr(p, t));
        for(let p = 1; p < f.length; p++){
            let m = f.slice(0, p).join(" ");
            s(m, !0), c[m] || (c[m] = {
                preventDefault: !0,
                commands: [
                    (b)=>{
                        let y = it1 = {
                            view: b,
                            prefix: m,
                            scope: o
                        };
                        return setTimeout(()=>{
                            it1 == y && (it1 = null);
                        }, pr), !0;
                    }
                ]
            });
        }
        let d = f.join(" ");
        s(d, !1);
        let u = c[d] || (c[d] = {
            preventDefault: !1,
            commands: []
        });
        u.commands.push(h), a && (u.preventDefault = !0);
    };
    for (let o of n){
        let l = o[t] || o.key;
        if (!!l) for (let h of o.scope ? o.scope.split(" ") : [
            "editor"
        ])r(h, l, o.run, o.preventDefault), o.shift && r(h, "Shift-" + l, o.shift, o.preventDefault);
    }
    return e;
}
function Qs(n, t1, e, i) {
    let s1 = s(t1), r = s1.length == 1 && s1 != " ", o = "", l = !1;
    it1 && it1.view == e && it1.scope == i && (o = it1.prefix + " ", (l = qs.indexOf(t1.keyCode) < 0) && (it1 = null));
    let h = (f)=>{
        if (f) {
            for (let d of f.commands)if (d(e)) return !0;
            f.preventDefault && (l = !0);
        }
        return !1;
    }, a = n[i], c;
    if (a) {
        if (h(a[o + ke1(s1, t1, !r)])) return !0;
        if (r && (t1.shiftKey || t1.altKey || t1.metaKey) && (c = t[t1.keyCode]) && c != s1) {
            if (h(a[o + ke1(c, t1, !0)])) return !0;
        } else if (r && t1.shiftKey && h(a[o + ke1(s1, t1, !0)])) return !0;
    }
    return l;
}
var tn = !g2.ios, Ot = A.define({
    combine (n) {
        return ht(n, {
            cursorBlinkRate: 1200,
            drawRangeCursor: !0
        }, {
            cursorBlinkRate: (t, e)=>Math.min(t, e),
            drawRangeCursor: (t, e)=>t || e
        });
    }
});
function Zr(n = {}) {
    return [
        Ot.of(n),
        gr,
        br
    ];
}
var me1 = class {
    constructor(t, e, i, s, r){
        this.left = t, this.top = e, this.width = i, this.height = s, this.className = r;
    }
    draw() {
        let t = document.createElement("div");
        return t.className = this.className, this.adjust(t), t;
    }
    adjust(t) {
        t.style.left = this.left + "px", t.style.top = this.top + "px", this.width >= 0 && (t.style.width = this.width + "px"), t.style.height = this.height + "px";
    }
    eq(t) {
        return this.left == t.left && this.top == t.top && this.width == t.width && this.height == t.height && this.className == t.className;
    }
}, gr = V1.fromClass(class {
    constructor(n){
        this.view = n, this.rangePieces = [], this.cursors = [], this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawSel.bind(this)
        }, this.selectionLayer = n.scrollDOM.appendChild(document.createElement("div")), this.selectionLayer.className = "cm-selectionLayer", this.selectionLayer.setAttribute("aria-hidden", "true"), this.cursorLayer = n.scrollDOM.appendChild(document.createElement("div")), this.cursorLayer.className = "cm-cursorLayer", this.cursorLayer.setAttribute("aria-hidden", "true"), n.requestMeasure(this.measureReq), this.setBlinkRate();
    }
    setBlinkRate() {
        this.cursorLayer.style.animationDuration = this.view.state.facet(Ot).cursorBlinkRate + "ms";
    }
    update(n) {
        let t = n.startState.facet(Ot) != n.state.facet(Ot);
        (t || n.selectionSet || n.geometryChanged || n.viewportChanged) && this.view.requestMeasure(this.measureReq), n.transactions.some((e)=>e.scrollIntoView) && (this.cursorLayer.style.animationName = this.cursorLayer.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink"), t && this.setBlinkRate();
    }
    readPos() {
        let { state: n  } = this.view, t = n.facet(Ot), e = n.selection.ranges.map((s)=>s.empty ? [] : yr(this.view, s)).reduce((s, r)=>s.concat(r)), i = [];
        for (let s of n.selection.ranges){
            let r = s == n.selection.main;
            if (s.empty ? !r || tn : t.drawRangeCursor) {
                let o = wr(this.view, s, r);
                o && i.push(o);
            }
        }
        return {
            rangePieces: e,
            cursors: i
        };
    }
    drawSel({ rangePieces: n , cursors: t  }) {
        if (n.length != this.rangePieces.length || n.some((e, i)=>!e.eq(this.rangePieces[i]))) {
            this.selectionLayer.textContent = "";
            for (let e of n)this.selectionLayer.appendChild(e.draw());
            this.rangePieces = n;
        }
        if (t.length != this.cursors.length || t.some((e, i)=>!e.eq(this.cursors[i]))) {
            let e1 = this.cursorLayer.children;
            if (e1.length !== t.length) {
                this.cursorLayer.textContent = "";
                for (let i of t)this.cursorLayer.appendChild(i.draw());
            } else t.forEach((i, s)=>i.adjust(e1[s]));
            this.cursors = t;
        }
    }
    destroy() {
        this.selectionLayer.remove(), this.cursorLayer.remove();
    }
}), en = {
    ".cm-line": {
        "& ::selection": {
            backgroundColor: "transparent !important"
        },
        "&::selection": {
            backgroundColor: "transparent !important"
        }
    }
};
tn && (en[".cm-line"].caretColor = "transparent !important");
var br = lt.highest(C1.theme(en));
function sn(n) {
    let t = n.scrollDOM.getBoundingClientRect();
    return {
        left: (n.textDirection == R1.LTR ? t.left : t.right - n.scrollDOM.clientWidth) - n.scrollDOM.scrollLeft,
        top: t.top - n.scrollDOM.scrollTop
    };
}
function Ji(n, t, e) {
    let i = g.cursor(t);
    return {
        from: Math.max(e.from, n.moveToLineBoundary(i, !1, !0).from),
        to: Math.min(e.to, n.moveToLineBoundary(i, !0, !0).from),
        type: D1.Text
    };
}
function Zi(n, t) {
    let e = n.lineBlockAt(t);
    if (Array.isArray(e.type)) {
        for (let i of e.type)if (i.to > t || i.to == t && (i.to == e.to || i.type == D1.Text)) return i;
    }
    return e;
}
function yr(n, t) {
    if (t.to <= n.viewport.from || t.from >= n.viewport.to) return [];
    let e = Math.max(t.from, n.viewport.from), i = Math.min(t.to, n.viewport.to), s = n.textDirection == R1.LTR, r = n.contentDOM, o = r.getBoundingClientRect(), l = sn(n), h = window.getComputedStyle(r.firstChild), a = o.left + parseInt(h.paddingLeft) + Math.min(0, parseInt(h.textIndent)), c = o.right - parseInt(h.paddingRight), f = Zi(n, e), d = Zi(n, i), u = f.type == D1.Text ? f : null, p = d.type == D1.Text ? d : null;
    if (n.lineWrapping && (u && (u = Ji(n, e, u)), p && (p = Ji(n, i, p))), u && p && u.from == p.from) return b(y(t.from, t.to, u));
    {
        let v = u ? y(t.from, null, u) : k(f, !1), w = p ? y(null, t.to, p) : k(d, !0), L = [];
        return (u || f).to < (p || d).from - 1 ? L.push(m(a, v.bottom, c, w.top)) : v.bottom < w.top && n.elementAtHeight((v.bottom + w.top) / 2).type == D1.Text && (v.bottom = w.top = (v.bottom + w.top) / 2), b(v).concat(L).concat(b(w));
    }
    function m(v, w, L, J) {
        return new me1(v - l.left, w - l.top - .01, L - v, J - w + .01, "cm-selectionBackground");
    }
    function b({ top: v , bottom: w , horizontal: L  }) {
        let J = [];
        for(let Z = 0; Z < L.length; Z += 2)J.push(m(L[Z], v, L[Z + 1], w));
        return J;
    }
    function y(v, w, L) {
        let J = 1e9, Z = -1e9, $t = [];
        function vi(ht, Q, ft, at, Ct) {
            let tt = n.coordsAtPos(ht, ht == L.to ? -2 : 2), et = n.coordsAtPos(ft, ft == L.from ? 2 : -2);
            J = Math.min(tt.top, et.top, J), Z = Math.max(tt.bottom, et.bottom, Z), Ct == R1.LTR ? $t.push(s && Q ? a : tt.left, s && at ? c : et.right) : $t.push(!s && at ? a : et.left, !s && Q ? c : tt.right);
        }
        let Gt = v ?? L.from, _t = w ?? L.to;
        for (let ht of n.visibleRanges)if (ht.to > Gt && ht.from < _t) for(let Q = Math.max(ht.from, Gt), ft = Math.min(ht.to, _t);;){
            let at = n.state.doc.lineAt(Q);
            for (let Ct of n.bidiSpans(at)){
                let tt = Ct.from + at.from, et = Ct.to + at.from;
                if (tt >= ft) break;
                et > Q && vi(Math.max(tt, Q), v == null && tt <= Gt, Math.min(et, ft), w == null && et >= _t, Ct.dir);
            }
            if (Q = at.to + 1, Q >= ft) break;
        }
        return $t.length == 0 && vi(Gt, v == null, _t, w == null, n.textDirection), {
            top: J,
            bottom: Z,
            horizontal: $t
        };
    }
    function k(v, w) {
        let L = o.top + (w ? v.top : v.bottom);
        return {
            top: L,
            bottom: L,
            horizontal: []
        };
    }
}
function wr(n, t, e) {
    let i = n.coordsAtPos(t.head, t.assoc || 1);
    if (!i) return null;
    let s = sn(n);
    return new me1(i.left - s.left, i.top - s.top, -1, i.bottom - i.top, e ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary");
}
var nn = y.define({
    map (n, t) {
        return n == null ? null : t.mapPos(n);
    }
}), Tt = F.define({
    create () {
        return null;
    },
    update (n, t) {
        return n != null && (n = t.changes.mapPos(n)), t.effects.reduce((e, i)=>i.is(nn) ? i.value : e, n);
    }
}), vr = V1.fromClass(class {
    constructor(n){
        this.view = n, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
        };
    }
    update(n) {
        var t;
        let e = n.state.field(Tt);
        e == null ? this.cursor != null && ((t = this.cursor) === null || t === void 0 || t.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (n.startState.field(Tt) != e || n.docChanged || n.geometryChanged) && this.view.requestMeasure(this.measureReq));
    }
    readPos() {
        let n = this.view.state.field(Tt), t = n != null && this.view.coordsAtPos(n);
        if (!t) return null;
        let e = this.view.scrollDOM.getBoundingClientRect();
        return {
            left: t.left - e.left + this.view.scrollDOM.scrollLeft,
            top: t.top - e.top + this.view.scrollDOM.scrollTop,
            height: t.bottom - t.top
        };
    }
    drawCursor(n) {
        this.cursor && (n ? (this.cursor.style.left = n.left + "px", this.cursor.style.top = n.top + "px", this.cursor.style.height = n.height + "px") : this.cursor.style.left = "-100000px");
    }
    destroy() {
        this.cursor && this.cursor.remove();
    }
    setDropPos(n) {
        this.view.state.field(Tt) != n && this.view.dispatch({
            effects: nn.of(n)
        });
    }
}, {
    eventHandlers: {
        dragover (n) {
            this.setDropPos(this.view.posAtCoords({
                x: n.clientX,
                y: n.clientY
            }));
        },
        dragleave (n) {
            (n.target == this.view.contentDOM || !this.view.contentDOM.contains(n.relatedTarget)) && this.setDropPos(null);
        },
        dragend () {
            this.setDropPos(null);
        },
        drop () {
            this.setDropPos(null);
        }
    }
});
function Qr() {
    return [
        Tt,
        vr
    ];
}
function Qi(n, t, e, i, s) {
    t.lastIndex = 0;
    for(let r = n.iterRange(e, i), o = e, l; !r.next().done; o += r.value.length)if (!r.lineBreak) for(; l = t.exec(r.value);)s(o + l.index, o + l.index + l[0].length, l);
}
function xr(n, t) {
    let e = n.visibleRanges;
    if (e.length == 1 && e[0].from == n.viewport.from && e[0].to == n.viewport.to) return e;
    let i = [];
    for (let { from: s , to: r  } of e)s = Math.max(n.state.doc.lineAt(s).from, s - t), r = Math.min(n.state.doc.lineAt(r).to, r + t), i.length && i[i.length - 1].to >= s ? i[i.length - 1].to = r : i.push({
        from: s,
        to: r
    });
    return i;
}
var ni = class {
    constructor(t){
        let { regexp: e , decoration: i , boundary: s , maxLength: r = 1e3  } = t;
        if (!e.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        this.regexp = e, this.getDeco = typeof i == "function" ? i : ()=>i, this.boundary = s, this.maxLength = r;
    }
    createDeco(t) {
        let e = new Z;
        for (let { from: i , to: s  } of xr(t, this.maxLength))Qi(t.state.doc, this.regexp, i, s, (r, o, l)=>e.add(r, o, this.getDeco(l, t, r)));
        return e.finish();
    }
    updateDeco(t, e) {
        let i = 1e9, s = -1;
        return t.docChanged && t.changes.iterChanges((r, o, l, h)=>{
            h > t.view.viewport.from && l < t.view.viewport.to && (i = Math.min(l, i), s = Math.max(h, s));
        }), t.viewportChanged || s - i > 1e3 ? this.createDeco(t.view) : s > -1 ? this.updateRange(t.view, e.map(t.changes), i, s) : e;
    }
    updateRange(t, e, i, s) {
        for (let r of t.visibleRanges){
            let o = Math.max(r.from, i), l = Math.min(r.to, s);
            if (l > o) {
                let h = t.state.doc.lineAt(o), a = h.to < l ? t.state.doc.lineAt(l) : h, c = Math.max(r.from, h.from), f = Math.min(r.to, a.to);
                if (this.boundary) {
                    for(; o > h.from; o--)if (this.boundary.test(h.text[o - 1 - h.from])) {
                        c = o;
                        break;
                    }
                    for(; l < a.to; l++)if (this.boundary.test(a.text[l - a.from])) {
                        f = l;
                        break;
                    }
                }
                let d = [], u;
                if (h == a) for(this.regexp.lastIndex = c - h.from; (u = this.regexp.exec(h.text)) && u.index < f - h.from;){
                    let p = u.index + h.from;
                    d.push(this.getDeco(u, t, p).range(p, p + u[0].length));
                }
                else Qi(t.state.doc, this.regexp, c, f, (p, m, b)=>d.push(this.getDeco(b, t, p).range(p, m)));
                e = e.update({
                    filterFrom: c,
                    filterTo: f,
                    filter: (p, m)=>p < c || m > f,
                    add: d
                });
            }
        }
        return e;
    }
}, ri = /x/.unicode != null ? "gu" : "g", Sr = new RegExp(`[\0-\b
-\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\uFEFF\uFFF9-\uFFFC]`, ri), Cr = {
    0: "null",
    7: "bell",
    8: "backspace",
    10: "newline",
    11: "vertical tab",
    13: "carriage return",
    27: "escape",
    8203: "zero width space",
    8204: "zero width non-joiner",
    8205: "zero width joiner",
    8206: "left-to-right mark",
    8207: "right-to-left mark",
    8232: "line separator",
    8237: "left-to-right override",
    8238: "right-to-left override",
    8233: "paragraph separator",
    65279: "zero width no-break space",
    65532: "object replacement"
}, Ae1 = null;
function Mr() {
    var n;
    if (Ae1 == null && typeof document < "u" && document.body) {
        let t = document.body.style;
        Ae1 = ((n = t.tabSize) !== null && n !== void 0 ? n : t.MozTabSize) != null;
    }
    return Ae1 || !1;
}
var Zt = A.define({
    combine (n) {
        let t = ht(n, {
            render: null,
            specialChars: Sr,
            addSpecialChars: null
        });
        return (t.replaceTabs = !Mr()) && (t.specialChars = new RegExp("	|" + t.specialChars.source, ri)), t.addSpecialChars && (t.specialChars = new RegExp(t.specialChars.source + "|" + t.addSpecialChars.source, ri)), t;
    }
});
function to(n = {}) {
    return [
        Zt.of(n),
        kr()
    ];
}
var ts = null;
function kr() {
    return ts || (ts = V1.fromClass(class {
        constructor(n){
            this.view = n, this.decorations = M1.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(n.state.facet(Zt)), this.decorations = this.decorator.createDeco(n);
        }
        makeDecorator(n) {
            return new ni({
                regexp: n.specialChars,
                decoration: (t, e, i)=>{
                    let { doc: s  } = e.state, r = oe(t[0], 0);
                    if (r == 9) {
                        let o = s.lineAt(i), l = e.state.tabSize, h = ot(o.text, l, i - o.from);
                        return M1.replace({
                            widget: new li((l - h % l) * this.view.defaultCharacterWidth)
                        });
                    }
                    return this.decorationCache[r] || (this.decorationCache[r] = M1.replace({
                        widget: new oi(n, r)
                    }));
                },
                boundary: n.replaceTabs ? void 0 : /[^]/
            });
        }
        update(n) {
            let t = n.state.facet(Zt);
            n.startState.facet(Zt) != t ? (this.decorator = this.makeDecorator(t), this.decorations = this.decorator.createDeco(n.view)) : this.decorations = this.decorator.updateDeco(n, this.decorations);
        }
    }, {
        decorations: (n)=>n.decorations
    }));
}
var Ar = "\u2022";
function Dr(n) {
    return n >= 32 ? Ar : n == 10 ? "\u2424" : String.fromCharCode(9216 + n);
}
var oi = class extends X1 {
    constructor(t, e){
        super(), this.options = t, this.code = e;
    }
    eq(t) {
        return t.code == this.code;
    }
    toDOM(t) {
        let e = Dr(this.code), i = t.state.phrase("Control character") + " " + (Cr[this.code] || "0x" + this.code.toString(16)), s = this.options.render && this.options.render(this.code, i, e);
        if (s) return s;
        let r = document.createElement("span");
        return r.textContent = e, r.title = i, r.setAttribute("aria-label", i), r.className = "cm-specialChar", r;
    }
    ignoreEvent() {
        return !1;
    }
}, li = class extends X1 {
    constructor(t){
        super(), this.width = t;
    }
    eq(t) {
        return t.width == this.width;
    }
    toDOM() {
        let t = document.createElement("span");
        return t.textContent = "	", t.className = "cm-tab", t.style.width = this.width + "px", t;
    }
    ignoreEvent() {
        return !1;
    }
}, es = V1.fromClass(class {
    constructor(){
        this.height = 1e3, this.attrs = {
            style: "padding-bottom: 1000px"
        };
    }
    update(n) {
        let t = n.view.viewState.editorHeight - n.view.defaultLineHeight;
        t != this.height && (this.height = t, this.attrs = {
            style: `padding-bottom: ${t}px`
        });
    }
});
function io() {
    return Tr;
}
var Or = M1.line({
    class: "cm-activeLine"
}), Tr = V1.fromClass(class {
    constructor(n){
        this.decorations = this.getDeco(n);
    }
    update(n) {
        (n.docChanged || n.selectionSet) && (this.decorations = this.getDeco(n.view));
    }
    getDeco(n) {
        let t = -1, e = [];
        for (let i of n.state.selection.ranges){
            if (!i.empty) return M1.none;
            let s = n.lineBlockAt(i.head);
            s.from > t && (e.push(Or.range(s.from)), t = s.from);
        }
        return M1.set(e);
    }
}, {
    decorations: (n)=>n.decorations
});
var ai = 2e3;
function Rr(n, t, e) {
    let i = Math.min(t.line, e.line), s = Math.max(t.line, e.line), r = [];
    if (t.off > ai || e.off > ai || t.col < 0 || e.col < 0) {
        let o = Math.min(t.off, e.off), l = Math.max(t.off, e.off);
        for(let h = i; h <= s; h++){
            let a = n.doc.line(h);
            a.length <= l && r.push(g.range(a.from + o, a.to + l));
        }
    } else {
        let o1 = Math.min(t.col, e.col), l1 = Math.max(t.col, e.col);
        for(let h1 = i; h1 <= s; h1++){
            let a1 = n.doc.line(h1), c = at(a1.text, o1, n.tabSize, !0);
            if (c > -1) {
                let f = at(a1.text, l1, n.tabSize);
                r.push(g.range(a1.from + c, a1.from + f));
            }
        }
    }
    return r;
}
function Lr(n, t) {
    let e = n.coordsAtPos(n.viewport.from);
    return e ? Math.round(Math.abs((e.left - t) / n.defaultCharacterWidth)) : -1;
}
function is(n, t) {
    let e = n.posAtCoords({
        x: t.clientX,
        y: t.clientY
    }, !1), i = n.state.doc.lineAt(e), s = e - i.from, r = s > ai ? -1 : s == i.length ? Lr(n, t.clientX) : ot(i.text, n.state.tabSize, e - i.from);
    return {
        line: i.number,
        col: r,
        off: s
    };
}
function Er(n, t) {
    let e = is(n, t), i = n.state.selection;
    return e ? {
        update (s) {
            if (s.docChanged) {
                let r = s.changes.mapPos(s.startState.doc.line(e.line).from), o = s.state.doc.lineAt(r);
                e = {
                    line: o.number,
                    col: e.col,
                    off: Math.min(e.off, o.length)
                }, i = i.map(s.changes);
            }
        },
        get (s, r, o) {
            let l = is(n, s);
            if (!l) return i;
            let h = Rr(n.state, e, l);
            return h.length ? o ? g.create(h.concat(i.ranges)) : g.create(h) : i;
        }
    } : null;
}
function no(n) {
    let t = n?.eventFilter || ((e)=>e.altKey && e.button == 0);
    return C1.mouseSelectionStyle.of((e, i)=>t(i) ? Er(e, i) : null);
}
var Br = {
    Alt: [
        18,
        (n)=>n.altKey
    ],
    Control: [
        17,
        (n)=>n.ctrlKey
    ],
    Shift: [
        16,
        (n)=>n.shiftKey
    ],
    Meta: [
        91,
        (n)=>n.metaKey
    ]
}, Pr = {
    style: "cursor: crosshair"
};
function ro(n = {}) {
    let [t, e] = Br[n.key || "Alt"], i = V1.fromClass(class {
        constructor(s){
            this.view = s, this.isDown = !1;
        }
        set(s) {
            this.isDown != s && (this.isDown = s, this.view.update([]));
        }
    }, {
        eventHandlers: {
            keydown (s) {
                this.set(s.keyCode == t || e(s));
            },
            keyup (s) {
                (s.keyCode == t || !e(s)) && this.set(!1);
            }
        }
    });
    return [
        i,
        C1.contentAttributes.of((s)=>{
            var r;
            return !((r = s.plugin(i)) === null || r === void 0) && r.isDown ? Pr : null;
        })
    ];
}
var De1 = "-10000px", ge1 = class {
    constructor(t, e, i){
        this.facet = e, this.createTooltipView = i, this.input = t.state.facet(e), this.tooltips = this.input.filter((s)=>s), this.tooltipViews = this.tooltips.map(i);
    }
    update(t) {
        let e = t.state.facet(this.facet), i = e.filter((r)=>r);
        if (e === this.input) {
            for (let r of this.tooltipViews)r.update && r.update(t);
            return !1;
        }
        let s = [];
        for(let r1 = 0; r1 < i.length; r1++){
            let o = i[r1], l = -1;
            if (!!o) {
                for(let h = 0; h < this.tooltips.length; h++){
                    let a = this.tooltips[h];
                    a && a.create == o.create && (l = h);
                }
                if (l < 0) s[r1] = this.createTooltipView(o);
                else {
                    let h1 = s[r1] = this.tooltipViews[l];
                    h1.update && h1.update(t);
                }
            }
        }
        for (let r2 of this.tooltipViews)s.indexOf(r2) < 0 && r2.dom.remove();
        return this.input = e, this.tooltips = i, this.tooltipViews = s, !0;
    }
};
function Hr() {
    return {
        top: 0,
        left: 0,
        bottom: innerHeight,
        right: innerWidth
    };
}
var Qt = A.define({
    combine: (n)=>{
        var t, e, i;
        return {
            position: g2.ios ? "absolute" : ((t = n.find((s)=>s.position)) === null || t === void 0 ? void 0 : t.position) || "fixed",
            parent: ((e = n.find((s)=>s.parent)) === null || e === void 0 ? void 0 : e.parent) || null,
            tooltipSpace: ((i = n.find((s)=>s.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || Hr
        };
    }
}), wi = V1.fromClass(class {
    constructor(n){
        var t;
        this.view = n, this.inView = !0, this.lastTransaction = 0, this.measureTimeout = -1;
        let e = n.state.facet(Qt);
        this.position = e.position, this.parent = e.parent, this.classes = n.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
        }, this.manager = new ge1(n, rn, (i)=>this.createTooltip(i)), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((i)=>{
            Date.now() > this.lastTransaction - 50 && i.length > 0 && i[i.length - 1].intersectionRatio < 1 && this.measureSoon();
        }, {
            threshold: [
                1
            ]
        }) : null, this.observeIntersection(), (t = n.dom.ownerDocument.defaultView) === null || t === void 0 || t.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
    }
    createContainer() {
        this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
    }
    observeIntersection() {
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let n of this.manager.tooltipViews)this.intersectionObserver.observe(n.dom);
        }
    }
    measureSoon() {
        this.measureTimeout < 0 && (this.measureTimeout = setTimeout(()=>{
            this.measureTimeout = -1, this.maybeMeasure();
        }, 50));
    }
    update(n) {
        n.transactions.length && (this.lastTransaction = Date.now());
        let t = this.manager.update(n);
        t && this.observeIntersection();
        let e = t || n.geometryChanged, i = n.state.facet(Qt);
        if (i.position != this.position) {
            this.position = i.position;
            for (let s of this.manager.tooltipViews)s.dom.style.position = this.position;
            e = !0;
        }
        if (i.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
            for (let s1 of this.manager.tooltipViews)this.container.appendChild(s1.dom);
            e = !0;
        } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
        e && this.maybeMeasure();
    }
    createTooltip(n) {
        let t = n.create(this.view);
        if (t.dom.classList.add("cm-tooltip"), n.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let e = document.createElement("div");
            e.className = "cm-tooltip-arrow", t.dom.appendChild(e);
        }
        return t.dom.style.position = this.position, t.dom.style.top = De1, this.container.appendChild(t.dom), t.mount && t.mount(this.view), t;
    }
    destroy() {
        var n, t;
        (n = this.view.dom.ownerDocument.defaultView) === null || n === void 0 || n.removeEventListener("resize", this.measureSoon);
        for (let { dom: e  } of this.manager.tooltipViews)e.remove();
        (t = this.intersectionObserver) === null || t === void 0 || t.disconnect(), clearTimeout(this.measureTimeout);
    }
    readMeasure() {
        let n = this.view.dom.getBoundingClientRect();
        return {
            editor: n,
            parent: this.parent ? this.container.getBoundingClientRect() : n,
            pos: this.manager.tooltips.map((t, e)=>{
                let i = this.manager.tooltipViews[e];
                return i.getCoords ? i.getCoords(t.pos) : this.view.coordsAtPos(t.pos);
            }),
            size: this.manager.tooltipViews.map(({ dom: t  })=>t.getBoundingClientRect()),
            space: this.view.state.facet(Qt).tooltipSpace(this.view)
        };
    }
    writeMeasure(n) {
        let { editor: t , space: e  } = n, i = [];
        for(let s = 0; s < this.manager.tooltips.length; s++){
            let r = this.manager.tooltips[s], o = this.manager.tooltipViews[s], { dom: l  } = o, h = n.pos[s], a = n.size[s];
            if (!h || h.bottom <= Math.max(t.top, e.top) || h.top >= Math.min(t.bottom, e.bottom) || h.right < Math.max(t.left, e.left) - .1 || h.left > Math.min(t.right, e.right) + .1) {
                l.style.top = De1;
                continue;
            }
            let c = r.arrow ? o.dom.querySelector(".cm-tooltip-arrow") : null, f = c ? 7 : 0, d = a.right - a.left, u = a.bottom - a.top, p = o.offset || Vr, m = this.view.textDirection == R1.LTR, b = a.width > e.right - e.left ? m ? e.left : e.right - a.width : m ? Math.min(h.left - (c ? 14 : 0) + p.x, e.right - d) : Math.max(e.left, h.left - d + (c ? 14 : 0) - p.x), y = !!r.above;
            !r.strictSide && (y ? h.top - (a.bottom - a.top) - p.y < e.top : h.bottom + (a.bottom - a.top) + p.y > e.bottom) && y == e.bottom - h.bottom > h.top - e.top && (y = !y);
            let k = y ? h.top - u - f - p.y : h.bottom + f + p.y, v = b + d;
            if (o.overlap !== !0) for (let w of i)w.left < v && w.right > b && w.top < k + u && w.bottom > k && (k = y ? w.top - u - 2 - f : w.bottom + f + 2);
            this.position == "absolute" ? (l.style.top = k - n.parent.top + "px", l.style.left = b - n.parent.left + "px") : (l.style.top = k + "px", l.style.left = b + "px"), c && (c.style.left = `${h.left + (m ? p.x : -p.x) - (b + 14 - 7)}px`), o.overlap !== !0 && i.push({
                left: b,
                top: k,
                right: v,
                bottom: k + u
            }), l.classList.toggle("cm-tooltip-above", y), l.classList.toggle("cm-tooltip-below", !y), o.positioned && o.positioned();
        }
    }
    maybeMeasure() {
        if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) for (let n of this.manager.tooltipViews)n.dom.style.top = De1;
    }
}, {
    eventHandlers: {
        scroll () {
            this.maybeMeasure();
        }
    }
}), Nr = C1.baseTheme({
    ".cm-tooltip": {
        zIndex: 100
    },
    "&light .cm-tooltip": {
        border: "1px solid #bbb",
        backgroundColor: "#f5f5f5"
    },
    "&light .cm-tooltip-section:not(:first-child)": {
        borderTop: "1px solid #bbb"
    },
    "&dark .cm-tooltip": {
        backgroundColor: "#333338",
        color: "white"
    },
    ".cm-tooltip-arrow": {
        height: `${7}px`,
        width: `${7 * 2}px`,
        position: "absolute",
        zIndex: -1,
        overflow: "hidden",
        "&:before, &:after": {
            content: "''",
            position: "absolute",
            width: 0,
            height: 0,
            borderLeft: `${7}px solid transparent`,
            borderRight: `${7}px solid transparent`
        },
        ".cm-tooltip-above &": {
            bottom: `-${7}px`,
            "&:before": {
                borderTop: `${7}px solid #bbb`
            },
            "&:after": {
                borderTop: `${7}px solid #f5f5f5`,
                bottom: "1px"
            }
        },
        ".cm-tooltip-below &": {
            top: `-${7}px`,
            "&:before": {
                borderBottom: `${7}px solid #bbb`
            },
            "&:after": {
                borderBottom: `${7}px solid #f5f5f5`,
                top: "1px"
            }
        }
    },
    "&dark .cm-tooltip .cm-tooltip-arrow": {
        "&:before": {
            borderTopColor: "#333338",
            borderBottomColor: "#333338"
        },
        "&:after": {
            borderTopColor: "transparent",
            borderBottomColor: "transparent"
        }
    }
}), Vr = {
    x: 0,
    y: 0
}, rn = A.define({
    enables: [
        wi,
        Nr
    ]
}), It = A.define(), qt = class {
    constructor(t){
        this.view = t, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new ge1(t, It, (e)=>this.createHostedView(e));
    }
    static create(t) {
        return new qt(t);
    }
    createHostedView(t) {
        let e = t.create(this.view);
        return e.dom.classList.add("cm-tooltip-section"), this.dom.appendChild(e.dom), this.mounted && e.mount && e.mount(this.view), e;
    }
    mount(t) {
        for (let e of this.manager.tooltipViews)e.mount && e.mount(t);
        this.mounted = !0;
    }
    positioned() {
        for (let t of this.manager.tooltipViews)t.positioned && t.positioned();
    }
    update(t) {
        this.manager.update(t);
    }
}, Wr = rn.compute([
    It
], (n)=>{
    let t = n.facet(It).filter((e)=>e);
    return t.length === 0 ? null : {
        pos: Math.min(...t.map((e)=>e.pos)),
        end: Math.max(...t.filter((e)=>e.end != null).map((e)=>e.end)),
        create: qt.create,
        above: t[0].above,
        arrow: t.some((e)=>e.arrow)
    };
}), ci = class {
    constructor(t, e, i, s, r){
        this.view = t, this.source = e, this.field = i, this.setHover = s, this.hoverTime = r, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
            x: 0,
            y: 0,
            target: t.dom,
            time: 0
        }, this.checkHover = this.checkHover.bind(this), t.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), t.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
    }
    update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(()=>this.startHover(), 20));
    }
    get active() {
        return this.view.state.field(this.field);
    }
    checkHover() {
        if (this.hoverTimeout = -1, this.active) return;
        let t = Date.now() - this.lastMove.time;
        t < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - t) : this.startHover();
    }
    startHover() {
        clearTimeout(this.restartTimeout);
        let { lastMove: t  } = this, e = this.view.contentDOM.contains(t.target) ? this.view.posAtCoords(t) : null;
        if (e == null) return;
        let i = this.view.coordsAtPos(e);
        if (i == null || t.y < i.top || t.y > i.bottom || t.x < i.left - this.view.defaultCharacterWidth || t.x > i.right + this.view.defaultCharacterWidth) return;
        let s = this.view.bidiSpans(this.view.state.doc.lineAt(e)).find((l)=>l.from <= e && l.to >= e), r = s && s.dir == R1.RTL ? -1 : 1, o = this.source(this.view, e, t.x < i.left ? -r : r);
        if (o?.then) {
            let l = this.pending = {
                pos: e
            };
            o.then((h)=>{
                this.pending == l && (this.pending = null, h && this.view.dispatch({
                    effects: this.setHover.of(h)
                }));
            }, (h)=>nt1(this.view.state, h, "hover tooltip"));
        } else o && this.view.dispatch({
            effects: this.setHover.of(o)
        });
    }
    mousemove(t) {
        var e;
        this.lastMove = {
            x: t.clientX,
            y: t.clientY,
            target: t.target,
            time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let i = this.active;
        if (i && !zr(this.lastMove.target) || this.pending) {
            let { pos: s  } = i || this.pending, r = (e = i?.end) !== null && e !== void 0 ? e : s;
            (s == r ? this.view.posAtCoords(this.lastMove) != s : !Fr(this.view, s, r, t.clientX, t.clientY, 6)) && (this.view.dispatch({
                effects: this.setHover.of(null)
            }), this.pending = null);
        }
    }
    mouseleave() {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1, this.active && this.view.dispatch({
            effects: this.setHover.of(null)
        });
    }
    destroy() {
        clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
    }
};
function zr(n) {
    for(let t = n; t; t = t.parentNode)if (t.nodeType == 1 && t.classList.contains("cm-tooltip")) return !0;
    return !1;
}
function Fr(n, t, e, i, s, r) {
    let o = document.createRange(), l = n.domAtPos(t), h = n.domAtPos(e);
    o.setEnd(h.node, h.offset), o.setStart(l.node, l.offset);
    let a = o.getClientRects();
    o.detach();
    for(let c = 0; c < a.length; c++){
        let f = a[c];
        if (Math.max(f.top - s, s - f.bottom, f.left - i, i - f.right) <= r) return !0;
    }
    return !1;
}
function lo(n, t = {}) {
    let e = y.define(), i = F.define({
        create () {
            return null;
        },
        update (s, r) {
            if (s && (t.hideOnChange && (r.docChanged || r.selection) || t.hideOn && t.hideOn(r, s))) return null;
            if (s && r.docChanged) {
                let o = r.changes.mapPos(s.pos, -1, M.TrackDel);
                if (o == null) return null;
                let l = Object.assign(Object.create(null), s);
                l.pos = o, s.end != null && (l.end = r.changes.mapPos(s.end)), s = l;
            }
            for (let o1 of r.effects)o1.is(e) && (s = o1.value), o1.is(on) && (s = null);
            return s;
        },
        provide: (s)=>It.from(s)
    });
    return [
        i,
        V1.define((s)=>new ci(s, n, i, e, t.hoverTime || 300)),
        Wr
    ];
}
function ho(n, t) {
    let e = n.plugin(wi);
    if (!e) return null;
    let i = e.manager.tooltips.indexOf(t);
    return i < 0 ? null : e.manager.tooltipViews[i];
}
var on = y.define(), co = on.of(null);
var fi = A.define({
    combine (n) {
        let t, e;
        for (let i of n)t = t || i.topContainer, e = e || i.bottomContainer;
        return {
            topContainer: t,
            bottomContainer: e
        };
    }
});
function po(n, t) {
    let e = n.plugin(ln), i = e ? e.specs.indexOf(t) : -1;
    return i > -1 ? e.panels[i] : null;
}
var ln = V1.fromClass(class {
    constructor(n){
        this.input = n.state.facet(ns), this.specs = this.input.filter((e)=>e), this.panels = this.specs.map((e)=>e(n));
        let t = n.state.facet(fi);
        this.top = new pt(n, !0, t.topContainer), this.bottom = new pt(n, !1, t.bottomContainer), this.top.sync(this.panels.filter((e)=>e.top)), this.bottom.sync(this.panels.filter((e)=>!e.top));
        for (let e of this.panels)e.dom.classList.add("cm-panel"), e.mount && e.mount();
    }
    update(n) {
        let t = n.state.facet(fi);
        this.top.container != t.topContainer && (this.top.sync([]), this.top = new pt(n.view, !0, t.topContainer)), this.bottom.container != t.bottomContainer && (this.bottom.sync([]), this.bottom = new pt(n.view, !1, t.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let e = n.state.facet(ns);
        if (e != this.input) {
            let i = e.filter((h)=>h), s = [], r = [], o = [], l = [];
            for (let h of i){
                let a = this.specs.indexOf(h), c;
                a < 0 ? (c = h(n.view), l.push(c)) : (c = this.panels[a], c.update && c.update(n)), s.push(c), (c.top ? r : o).push(c);
            }
            this.specs = i, this.panels = s, this.top.sync(r), this.bottom.sync(o);
            for (let h1 of l)h1.dom.classList.add("cm-panel"), h1.mount && h1.mount();
        } else for (let i1 of this.panels)i1.update && i1.update(n);
    }
    destroy() {
        this.top.sync([]), this.bottom.sync([]);
    }
}, {
    provide: (n)=>C1.scrollMargins.of((t)=>{
            let e = t.plugin(n);
            return e && {
                top: e.top.scrollMargin(),
                bottom: e.bottom.scrollMargin()
            };
        })
}), pt = class {
    constructor(t, e, i){
        this.view = t, this.top = e, this.container = i, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
    }
    sync(t) {
        for (let e of this.panels)e.destroy && t.indexOf(e) < 0 && e.destroy();
        this.panels = t, this.syncDOM();
    }
    syncDOM() {
        if (this.panels.length == 0) {
            this.dom && (this.dom.remove(), this.dom = void 0);
            return;
        }
        if (!this.dom) {
            this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
            let e = this.container || this.view.dom;
            e.insertBefore(this.dom, this.top ? e.firstChild : null);
        }
        let t = this.dom.firstChild;
        for (let e1 of this.panels)if (e1.dom.parentNode == this.dom) {
            for(; t != e1.dom;)t = ss(t);
            t = t.nextSibling;
        } else this.dom.insertBefore(e1.dom, t);
        for(; t;)t = ss(t);
    }
    scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
    }
    syncClasses() {
        if (!(!this.container || this.classes == this.view.themeClasses)) {
            for (let t of this.classes.split(" "))t && this.container.classList.remove(t);
            for (let t1 of (this.classes = this.view.themeClasses).split(" "))t1 && this.container.classList.add(t1);
        }
    }
};
function ss(n) {
    let t = n.nextSibling;
    return n.remove(), t;
}
var ns = A.define({
    enables: ln
}), _1 = class extends j {
    compare(t) {
        return this == t || this.constructor == t.constructor && this.eq(t);
    }
    eq(t) {
        return !1;
    }
    destroy(t) {}
};
_1.prototype.elementClass = "";
_1.prototype.toDOM = void 0;
_1.prototype.mapMode = M.TrackBefore;
_1.prototype.startSide = _1.prototype.endSide = -1;
_1.prototype.point = !0;
var te1 = A.define(), Ir = {
    class: "",
    renderEmptyElements: !1,
    elementStyle: "",
    markers: ()=>P.empty,
    lineMarker: ()=>null,
    lineMarkerChange: null,
    initialSpacer: null,
    updateSpacer: null,
    domEventHandlers: {}
}, Pt = A.define();
function mo(n) {
    return [
        hn(),
        Pt.of(Object.assign(Object.assign({}, Ir), n))
    ];
}
var ui = A.define({
    combine: (n)=>n.some((t)=>t)
});
function hn(n) {
    let t = [
        qr
    ];
    return n && n.fixed === !1 && t.push(ui.of(!0)), t;
}
var qr = V1.fromClass(class {
    constructor(n){
        this.view = n, this.prevViewport = n.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight + "px", this.gutters = n.state.facet(Pt).map((t)=>new be1(n, t));
        for (let t of this.gutters)this.dom.appendChild(t.dom);
        this.fixed = !n.state.facet(ui), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), n.scrollDOM.insertBefore(this.dom, n.contentDOM);
    }
    update(n) {
        if (this.updateGutters(n)) {
            let t = this.prevViewport, e = n.view.viewport, i = Math.min(t.to, e.to) - Math.max(t.from, e.from);
            this.syncGutters(i < (e.to - e.from) * .8);
        }
        n.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight + "px"), this.view.state.facet(ui) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = n.view.viewport;
    }
    syncGutters(n) {
        let t = this.dom.nextSibling;
        n && this.dom.remove();
        let e = P.iter(this.view.state.facet(te1), this.view.viewport.from), i = [], s = this.gutters.map((r)=>new di(r, this.view.viewport, -this.view.documentPadding.top));
        for (let r of this.view.viewportLineBlocks){
            let o;
            if (Array.isArray(r.type)) {
                for (let l of r.type)if (l.type == D1.Text) {
                    o = l;
                    break;
                }
            } else o = r.type == D1.Text ? r : void 0;
            if (!!o) {
                i.length && (i = []), an(e, i, r.from);
                for (let l1 of s)l1.line(this.view, o, i);
            }
        }
        for (let r1 of s)r1.finish();
        n && this.view.scrollDOM.insertBefore(this.dom, t);
    }
    updateGutters(n) {
        let t = n.startState.facet(Pt), e = n.state.facet(Pt), i = n.docChanged || n.heightChanged || n.viewportChanged || !P.eq(n.startState.facet(te1), n.state.facet(te1), n.view.viewport.from, n.view.viewport.to);
        if (t == e) for (let s of this.gutters)s.update(n) && (i = !0);
        else {
            i = !0;
            let s1 = [];
            for (let r of e){
                let o = t.indexOf(r);
                o < 0 ? s1.push(new be1(this.view, r)) : (this.gutters[o].update(n), s1.push(this.gutters[o]));
            }
            for (let r1 of this.gutters)r1.dom.remove(), s1.indexOf(r1) < 0 && r1.destroy();
            for (let r2 of s1)this.dom.appendChild(r2.dom);
            this.gutters = s1;
        }
        return i;
    }
    destroy() {
        for (let n of this.gutters)n.destroy();
        this.dom.remove();
    }
}, {
    provide: (n)=>C1.scrollMargins.of((t)=>{
            let e = t.plugin(n);
            return !e || e.gutters.length == 0 || !e.fixed ? null : t.textDirection == R1.LTR ? {
                left: e.dom.offsetWidth
            } : {
                right: e.dom.offsetWidth
            };
        })
});
function rs(n) {
    return Array.isArray(n) ? n : [
        n
    ];
}
function an(n, t, e) {
    for(; n.value && n.from <= e;)n.from == e && t.push(n.value), n.next();
}
var di = class {
    constructor(t, e, i){
        this.gutter = t, this.height = i, this.localMarkers = [], this.i = 0, this.cursor = P.iter(t.markers, e.from);
    }
    line(t, e, i) {
        this.localMarkers.length && (this.localMarkers = []), an(this.cursor, this.localMarkers, e.from);
        let s = i.length ? this.localMarkers.concat(i) : this.localMarkers, r = this.gutter.config.lineMarker(t, e, s);
        r && s.unshift(r);
        let o = this.gutter;
        if (s.length == 0 && !o.config.renderEmptyElements) return;
        let l = e.top - this.height;
        if (this.i == o.elements.length) {
            let h = new ye1(t, e.height, l, s);
            o.elements.push(h), o.dom.appendChild(h.dom);
        } else o.elements[this.i].update(t, e.height, l, s);
        this.height = e.bottom, this.i++;
    }
    finish() {
        let t = this.gutter;
        for(; t.elements.length > this.i;){
            let e = t.elements.pop();
            t.dom.removeChild(e.dom), e.destroy();
        }
    }
}, be1 = class {
    constructor(t, e){
        this.view = t, this.config = e, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for(let i in e.domEventHandlers)this.dom.addEventListener(i, (s)=>{
            let r = t.lineBlockAtHeight(s.clientY - t.documentTop);
            e.domEventHandlers[i](t, r, s) && s.preventDefault();
        });
        this.markers = rs(e.markers(t)), e.initialSpacer && (this.spacer = new ye1(t, 0, 0, [
            e.initialSpacer(t)
        ]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
    }
    update(t) {
        let e = this.markers;
        if (this.markers = rs(this.config.markers(t.view)), this.spacer && this.config.updateSpacer) {
            let s = this.config.updateSpacer(this.spacer.markers[0], t);
            s != this.spacer.markers[0] && this.spacer.update(t.view, 0, 0, [
                s
            ]);
        }
        let i = t.view.viewport;
        return !P.eq(this.markers, e, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(t) : !1);
    }
    destroy() {
        for (let t of this.elements)t.destroy();
    }
}, ye1 = class {
    constructor(t, e, i, s){
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t, e, i, s);
    }
    update(t, e, i, s) {
        this.height != e && (this.dom.style.height = (this.height = e) + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), Kr(this.markers, s) || this.setMarkers(t, s);
    }
    setMarkers(t, e) {
        let i = "cm-gutterElement", s = this.dom.firstChild;
        for(let r = 0, o = 0;;){
            let l = o, h = r < e.length ? e[r++] : null, a = !1;
            if (h) {
                let c = h.elementClass;
                c && (i += " " + c);
                for(let f = o; f < this.markers.length; f++)if (this.markers[f].compare(h)) {
                    l = f, a = !0;
                    break;
                }
            } else l = this.markers.length;
            for(; o < l;){
                let c1 = this.markers[o++];
                if (c1.toDOM) {
                    c1.destroy(s);
                    let f1 = s.nextSibling;
                    s.remove(), s = f1;
                }
            }
            if (!h) break;
            h.toDOM && (a ? s = s.nextSibling : this.dom.insertBefore(h.toDOM(t), s)), a && o++;
        }
        this.dom.className = i, this.markers = e;
    }
    destroy() {
        this.setMarkers(null, []);
    }
};
function Kr(n, t) {
    if (n.length != t.length) return !1;
    for(let e = 0; e < n.length; e++)if (!n[e].compare(t[e])) return !1;
    return !0;
}
var jr = A.define(), mt = A.define({
    combine (n) {
        return ht(n, {
            formatNumber: String,
            domEventHandlers: {}
        }, {
            domEventHandlers (t, e) {
                let i = Object.assign({}, t);
                for(let s in e){
                    let r = i[s], o = e[s];
                    i[s] = r ? (l, h, a)=>r(l, h, a) || o(l, h, a) : o;
                }
                return i;
            }
        });
    }
}), Ht = class extends _1 {
    constructor(t){
        super(), this.number = t;
    }
    eq(t) {
        return this.number == t.number;
    }
    toDOM() {
        return document.createTextNode(this.number);
    }
};
function Oe1(n, t) {
    return n.state.facet(mt).formatNumber(t, n.state);
}
var $r = Pt.compute([
    mt
], (n)=>({
        class: "cm-lineNumbers",
        renderEmptyElements: !1,
        markers (t) {
            return t.state.facet(jr);
        },
        lineMarker (t, e, i) {
            return i.some((s)=>s.toDOM) ? null : new Ht(Oe1(t, t.state.doc.lineAt(e.from).number));
        },
        lineMarkerChange: (t)=>t.startState.facet(mt) != t.state.facet(mt),
        initialSpacer (t) {
            return new Ht(Oe1(t, os(t.state.doc.lines)));
        },
        updateSpacer (t, e) {
            let i = Oe1(e.view, os(e.view.state.doc.lines));
            return i == t.number ? t : new Ht(i);
        },
        domEventHandlers: n.facet(mt).domEventHandlers
    }));
function go(n = {}) {
    return [
        mt.of(n),
        hn(),
        $r
    ];
}
function os(n) {
    let t = 9;
    for(; t < n;)t = t * 10 + 9;
    return t;
}
var Gr = new class extends _1 {
    constructor(){
        super(...arguments), this.elementClass = "cm-activeLineGutter";
    }
}, _r = te1.compute([
    "selection"
], (n)=>{
    let t = [], e = -1;
    for (let i of n.selection.ranges)if (i.empty) {
        let s = n.doc.lineAt(i.head).from;
        s > e && (e = s, t.push(Gr.range(s)));
    }
    return P.of(t);
});
function bo() {
    return _r;
}
var Ce2 = 0, B2 = class {
    constructor(e, t){
        this.from = e, this.to = t;
    }
}, w2 = class {
    constructor(e = {}){
        this.id = Ce2++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (()=>{
            throw new Error("This node type doesn't define a deserialize function");
        });
    }
    add(e) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return typeof e != "function" && (e = N2.match(e)), (t)=>{
            let r = e(t);
            return r === void 0 ? null : [
                this,
                r
            ];
        };
    }
};
w2.closedBy = new w2({
    deserialize: (h)=>h.split(" ")
});
w2.openedBy = new w2({
    deserialize: (h)=>h.split(" ")
});
w2.group = new w2({
    deserialize: (h)=>h.split(" ")
});
w2.contextHash = new w2({
    perNode: !0
});
w2.lookAhead = new w2({
    perNode: !0
});
w2.mounted = new w2({
    perNode: !0
});
var _e2 = Object.create(null), N2 = class {
    constructor(e, t, r, i = 0){
        this.name = e, this.props = t, this.id = r, this.flags = i;
    }
    static define(e) {
        let t = e.props && e.props.length ? Object.create(null) : _e2, r = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), i = new N2(e.name || "", t, e.id, r);
        if (e.props) {
            for (let n of e.props)if (Array.isArray(n) || (n = n(i)), n) {
                if (n[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
                t[n[0].id] = n[1];
            }
        }
        return i;
    }
    prop(e) {
        return this.props[e.id];
    }
    get isTop() {
        return (this.flags & 1) > 0;
    }
    get isSkipped() {
        return (this.flags & 2) > 0;
    }
    get isError() {
        return (this.flags & 4) > 0;
    }
    get isAnonymous() {
        return (this.flags & 8) > 0;
    }
    is(e) {
        if (typeof e == "string") {
            if (this.name == e) return !0;
            let t = this.prop(w2.group);
            return t ? t.indexOf(e) > -1 : !1;
        }
        return this.id == e;
    }
    static match(e) {
        let t = Object.create(null);
        for(let r in e)for (let i of r.split(" "))t[i] = e[r];
        return (r)=>{
            for(let i = r.prop(w2.group), n = -1; n < (i ? i.length : 0); n++){
                let s = t[n < 0 ? r.name : i[n]];
                if (s) return s;
            }
        };
    }
};
N2.none = new N2("", Object.create(null), 0, 8);
var Z1 = class {
    constructor(e){
        this.types = e;
        for(let t = 0; t < e.length; t++)if (e[t].id != t) throw new RangeError("Node type ids should correspond to array positions when creating a node set");
    }
    extend(...e) {
        let t = [];
        for (let r of this.types){
            let i = null;
            for (let n of e){
                let s = n(r);
                s && (i || (i = Object.assign({}, r.props)), i[s[0].id] = s[1]);
            }
            t.push(i ? new N2(r.name, i, r.id, r.flags) : r);
        }
        return new Z1(t);
    }
}, X2 = new WeakMap, ge2 = new WeakMap, A2;
(function(h) {
    h[h.ExcludeBuffers = 1] = "ExcludeBuffers", h[h.IncludeAnonymous = 2] = "IncludeAnonymous", h[h.IgnoreMounts = 4] = "IgnoreMounts", h[h.IgnoreOverlays = 8] = "IgnoreOverlays";
})(A2 || (A2 = {}));
var P2 = class {
    constructor(e, t, r, i, n){
        if (this.type = e, this.children = t, this.positions = r, this.length = i, this.props = null, n && n.length) {
            this.props = Object.create(null);
            for (let [s, l] of n)this.props[typeof s == "number" ? s : s.id] = l;
        }
    }
    toString() {
        let e = this.prop(w2.mounted);
        if (e && !e.overlay) return e.tree.toString();
        let t = "";
        for (let r of this.children){
            let i = r.toString();
            i && (t && (t += ","), t += i);
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
    }
    cursor(e = 0) {
        return new V2(this.topNode, e);
    }
    cursorAt(e, t = 0, r = 0) {
        let i = X2.get(this) || this.topNode, n = new V2(i);
        return n.moveTo(e, t), X2.set(this, n._tree), n;
    }
    get topNode() {
        return new I2(this, 0, 0, null);
    }
    resolve(e, t = 0) {
        let r = q2(X2.get(this) || this.topNode, e, t, !1);
        return X2.set(this, r), r;
    }
    resolveInner(e, t = 0) {
        let r = q2(ge2.get(this) || this.topNode, e, t, !0);
        return ge2.set(this, r), r;
    }
    iterate(e) {
        let { enter: t , leave: r , from: i = 0 , to: n = this.length  } = e;
        for(let s = this.cursor((e.mode || 0) | A2.IncludeAnonymous);;){
            let l = !1;
            if (s.from <= n && s.to >= i && (s.type.isAnonymous || t(s) !== !1)) {
                if (s.firstChild()) continue;
                l = !0;
            }
            for(; l && r && !s.type.isAnonymous && r(s), !s.nextSibling();){
                if (!s.parent()) return;
                l = !0;
            }
        }
    }
    prop(e) {
        return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
    }
    get propValues() {
        let e = [];
        if (this.props) for(let t in this.props)e.push([
            +t,
            this.props[t]
        ]);
        return e;
    }
    balance(e = {}) {
        return this.children.length <= 8 ? this : pe2(N2.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, r, i)=>new P2(this.type, t, r, i, this.propValues), e.makeTree || ((t, r, i)=>new P2(N2.none, t, r, i)));
    }
    static build(e) {
        return Se2(e);
    }
};
P2.empty = new P2(N2.none, [], [], 0);
var K2 = class {
    constructor(e, t){
        this.buffer = e, this.index = t;
    }
    get id() {
        return this.buffer[this.index - 4];
    }
    get start() {
        return this.buffer[this.index - 3];
    }
    get end() {
        return this.buffer[this.index - 2];
    }
    get size() {
        return this.buffer[this.index - 1];
    }
    get pos() {
        return this.index;
    }
    next() {
        this.index -= 4;
    }
    fork() {
        return new K2(this.buffer, this.index);
    }
}, T3 = class {
    constructor(e, t, r){
        this.buffer = e, this.length = t, this.set = r;
    }
    get type() {
        return N2.none;
    }
    toString() {
        let e = [];
        for(let t = 0; t < this.buffer.length;)e.push(this.childString(t)), t = this.buffer[t + 3];
        return e.join(",");
    }
    childString(e) {
        let t = this.buffer[e], r = this.buffer[e + 3], i = this.set.types[t], n = i.name;
        if (/\W/.test(n) && !i.isError && (n = JSON.stringify(n)), e += 4, r == e) return n;
        let s = [];
        for(; e < r;)s.push(this.childString(e)), e = this.buffer[e + 3];
        return n + "(" + s.join(",") + ")";
    }
    findChild(e, t, r, i, n) {
        let { buffer: s  } = this, l = -1;
        for(let f = e; f != t && !(ke2(n, i, s[f + 1], s[f + 2]) && (l = f, r > 0)); f = s[f + 3]);
        return l;
    }
    slice(e, t, r, i) {
        let n = this.buffer, s = new Uint16Array(t - e);
        for(let l = e, f = 0; l < t;)s[f++] = n[l++], s[f++] = n[l++] - r, s[f++] = n[l++] - r, s[f++] = n[l++] - e;
        return new T3(s, i - r, this.set);
    }
};
function ke2(h, e, t, r) {
    switch(h){
        case -2:
            return t < e;
        case -1:
            return r >= e && t < e;
        case 0:
            return t < e && r > e;
        case 1:
            return t <= e && r > e;
        case 2:
            return r > e;
        case 4:
            return !0;
    }
}
function Ae2(h, e) {
    let t = h.childBefore(e);
    for(; t;){
        let r = t.lastChild;
        if (!r || r.to != t.to) break;
        r.type.isError && r.from == r.to ? (h = t, t = r.prevSibling) : t = r;
    }
    return h;
}
function q2(h, e, t, r) {
    for(var i; h.from == h.to || (t < 1 ? h.from >= e : h.from > e) || (t > -1 ? h.to <= e : h.to < e);){
        let s = !r && h instanceof I2 && h.index < 0 ? null : h.parent;
        if (!s) return h;
        h = s;
    }
    let n = r ? 0 : A2.IgnoreOverlays;
    if (r) for(let s1 = h, l = s1.parent; l; s1 = l, l = s1.parent)s1 instanceof I2 && s1.index < 0 && ((i = l.enter(e, t, n)) === null || i === void 0 ? void 0 : i.from) != s1.from && (h = l);
    for(;;){
        let s2 = h.enter(e, t, n);
        if (!s2) return h;
        h = s2;
    }
}
var I2 = class {
    constructor(e, t, r, i){
        this._tree = e, this.from = t, this.index = r, this._parent = i;
    }
    get type() {
        return this._tree.type;
    }
    get name() {
        return this._tree.type.name;
    }
    get to() {
        return this.from + this._tree.length;
    }
    nextChild(e, t, r, i, n = 0) {
        for(let s = this;;){
            for(let { children: l , positions: f  } = s._tree, u = t > 0 ? l.length : -1; e != u; e += t){
                let o = l[e], c = f[e] + s.from;
                if (!!ke2(i, r, c, c + o.length)) {
                    if (o instanceof T3) {
                        if (n & A2.ExcludeBuffers) continue;
                        let a = o.findChild(0, o.buffer.length, t, r - c, i);
                        if (a > -1) return new M2(new se2(s, o, e, c), null, a);
                    } else if (n & A2.IncludeAnonymous || !o.type.isAnonymous || ae2(o)) {
                        let a1;
                        if (!(n & A2.IgnoreMounts) && o.props && (a1 = o.prop(w2.mounted)) && !a1.overlay) return new I2(a1.tree, c, e, s);
                        let y = new I2(o, c, e, s);
                        return n & A2.IncludeAnonymous || !y.type.isAnonymous ? y : y.nextChild(t < 0 ? o.children.length - 1 : 0, t, r, i);
                    }
                }
            }
            if (n & A2.IncludeAnonymous || !s.type.isAnonymous || (s.index >= 0 ? e = s.index + t : e = t < 0 ? -1 : s._parent._tree.children.length, s = s._parent, !s)) return null;
        }
    }
    get firstChild() {
        return this.nextChild(0, 1, 0, 4);
    }
    get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
    }
    childAfter(e) {
        return this.nextChild(0, 1, e, 2);
    }
    childBefore(e) {
        return this.nextChild(this._tree.children.length - 1, -1, e, -2);
    }
    enter(e, t, r = 0) {
        let i;
        if (!(r & A2.IgnoreOverlays) && (i = this._tree.prop(w2.mounted)) && i.overlay) {
            let n = e - this.from;
            for (let { from: s , to: l  } of i.overlay)if ((t > 0 ? s <= n : s < n) && (t < 0 ? l >= n : l > n)) return new I2(i.tree, i.overlay[0].from + this.from, -1, this);
        }
        return this.nextChild(0, 1, e, t, r);
    }
    nextSignificantParent() {
        let e = this;
        for(; e.type.isAnonymous && e._parent;)e = e._parent;
        return e;
    }
    get parent() {
        return this._parent ? this._parent.nextSignificantParent() : null;
    }
    get nextSibling() {
        return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
    }
    get prevSibling() {
        return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
    }
    cursor(e = 0) {
        return new V2(this, e);
    }
    get tree() {
        return this._tree;
    }
    toTree() {
        return this._tree;
    }
    resolve(e, t = 0) {
        return q2(this, e, t, !1);
    }
    resolveInner(e, t = 0) {
        return q2(this, e, t, !0);
    }
    enterUnfinishedNodesBefore(e) {
        return Ae2(this, e);
    }
    getChild(e, t = null, r = null) {
        let i = ee2(this, e, t, r);
        return i.length ? i[0] : null;
    }
    getChildren(e, t = null, r = null) {
        return ee2(this, e, t, r);
    }
    toString() {
        return this._tree.toString();
    }
    get node() {
        return this;
    }
    matchContext(e) {
        return te2(this, e);
    }
};
function ee2(h, e, t, r) {
    let i = h.cursor(), n = [];
    if (!i.firstChild()) return n;
    if (t != null) {
        for(; !i.type.is(t);)if (!i.nextSibling()) return n;
    }
    for(;;){
        if (r != null && i.type.is(r)) return n;
        if (i.type.is(e) && n.push(i.node), !i.nextSibling()) return r == null ? n : [];
    }
}
function te2(h, e, t = e.length - 1) {
    for(let r = h.parent; t >= 0; r = r.parent){
        if (!r) return !1;
        if (!r.type.isAnonymous) {
            if (e[t] && e[t] != r.name) return !1;
            t--;
        }
    }
    return !0;
}
var se2 = class {
    constructor(e, t, r, i){
        this.parent = e, this.buffer = t, this.index = r, this.start = i;
    }
}, M2 = class {
    constructor(e, t, r){
        this.context = e, this._parent = t, this.index = r, this.type = e.buffer.set.types[e.buffer.buffer[r]];
    }
    get name() {
        return this.type.name;
    }
    get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1];
    }
    get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2];
    }
    child(e, t, r) {
        let { buffer: i  } = this.context, n = i.findChild(this.index + 4, i.buffer[this.index + 3], e, t - this.context.start, r);
        return n < 0 ? null : new M2(this.context, this, n);
    }
    get firstChild() {
        return this.child(1, 0, 4);
    }
    get lastChild() {
        return this.child(-1, 0, 4);
    }
    childAfter(e) {
        return this.child(1, e, 2);
    }
    childBefore(e) {
        return this.child(-1, e, -2);
    }
    enter(e, t, r = 0) {
        if (r & A2.ExcludeBuffers) return null;
        let { buffer: i  } = this.context, n = i.findChild(this.index + 4, i.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
        return n < 0 ? null : new M2(this.context, this, n);
    }
    get parent() {
        return this._parent || this.context.parent.nextSignificantParent();
    }
    externalSibling(e) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
    }
    get nextSibling() {
        let { buffer: e  } = this.context, t = e.buffer[this.index + 3];
        return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new M2(this.context, this._parent, t) : this.externalSibling(1);
    }
    get prevSibling() {
        let { buffer: e  } = this.context, t = this._parent ? this._parent.index + 4 : 0;
        return this.index == t ? this.externalSibling(-1) : new M2(this.context, this._parent, e.findChild(t, this.index, -1, 0, 4));
    }
    cursor(e = 0) {
        return new V2(this, e);
    }
    get tree() {
        return null;
    }
    toTree() {
        let e = [], t = [], { buffer: r  } = this.context, i = this.index + 4, n = r.buffer[this.index + 3];
        if (n > i) {
            let s = r.buffer[this.index + 1], l = r.buffer[this.index + 2];
            e.push(r.slice(i, n, s, l)), t.push(0);
        }
        return new P2(this.type, e, t, this.to - this.from);
    }
    resolve(e, t = 0) {
        return q2(this, e, t, !1);
    }
    resolveInner(e, t = 0) {
        return q2(this, e, t, !0);
    }
    enterUnfinishedNodesBefore(e) {
        return Ae2(this, e);
    }
    toString() {
        return this.context.buffer.childString(this.index);
    }
    getChild(e, t = null, r = null) {
        let i = ee2(this, e, t, r);
        return i.length ? i[0] : null;
    }
    getChildren(e, t = null, r = null) {
        return ee2(this, e, t, r);
    }
    get node() {
        return this;
    }
    matchContext(e) {
        return te2(this, e);
    }
}, V2 = class {
    constructor(e, t = 0){
        if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof I2) this.yieldNode(e);
        else {
            this._tree = e.context.parent, this.buffer = e.context;
            for(let r = e._parent; r; r = r._parent)this.stack.unshift(r.index);
            this.bufferNode = e, this.yieldBuf(e.index);
        }
    }
    get name() {
        return this.type.name;
    }
    yieldNode(e) {
        return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
    }
    yieldBuf(e, t) {
        this.index = e;
        let { start: r , buffer: i  } = this.buffer;
        return this.type = t || i.set.types[i.buffer[e]], this.from = r + i.buffer[e + 1], this.to = r + i.buffer[e + 2], !0;
    }
    yield(e) {
        return e ? e instanceof I2 ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
    }
    toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
    }
    enterChild(e, t, r) {
        if (!this.buffer) return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, r, this.mode));
        let { buffer: i  } = this.buffer, n = i.findChild(this.index + 4, i.buffer[this.index + 3], e, t - this.buffer.start, r);
        return n < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(n));
    }
    firstChild() {
        return this.enterChild(1, 0, 4);
    }
    lastChild() {
        return this.enterChild(-1, 0, 4);
    }
    childAfter(e) {
        return this.enterChild(1, e, 2);
    }
    childBefore(e) {
        return this.enterChild(-1, e, -2);
    }
    enter(e, t, r = this.mode) {
        return this.buffer ? r & A2.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, r));
    }
    parent() {
        if (!this.buffer) return this.yieldNode(this.mode & A2.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let e = this.mode & A2.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(e);
    }
    sibling(e) {
        if (!this.buffer) return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
        let { buffer: t  } = this.buffer, r = this.stack.length - 1;
        if (e < 0) {
            let i = r < 0 ? 0 : this.stack[r] + 4;
            if (this.index != i) return this.yieldBuf(t.findChild(i, this.index, -1, 0, 4));
        } else {
            let i1 = t.buffer[this.index + 3];
            if (i1 < (r < 0 ? t.buffer.length : t.buffer[this.stack[r] + 3])) return this.yieldBuf(i1);
        }
        return r < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
    }
    nextSibling() {
        return this.sibling(1);
    }
    prevSibling() {
        return this.sibling(-1);
    }
    atLastNode(e) {
        let t, r, { buffer: i  } = this;
        if (i) {
            if (e > 0) {
                if (this.index < i.buffer.buffer.length) return !1;
            } else for(let n = 0; n < this.index; n++)if (i.buffer.buffer[n + 3] < this.index) return !1;
            ({ index: t , parent: r  } = i);
        } else ({ index: t , _parent: r  } = this._tree);
        for(; r; { index: t , _parent: r  } = r)if (t > -1) for(let n1 = t + e, s = e < 0 ? -1 : r._tree.children.length; n1 != s; n1 += e){
            let l = r._tree.children[n1];
            if (this.mode & A2.IncludeAnonymous || l instanceof T3 || !l.type.isAnonymous || ae2(l)) return !1;
        }
        return !0;
    }
    move(e, t) {
        if (t && this.enterChild(e, 0, 4)) return !0;
        for(;;){
            if (this.sibling(e)) return !0;
            if (this.atLastNode(e) || !this.parent()) return !1;
        }
    }
    next(e = !0) {
        return this.move(1, e);
    }
    prev(e = !0) {
        return this.move(-1, e);
    }
    moveTo(e, t = 0) {
        for(; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(););
        for(; this.enterChild(1, e, t););
        return this;
    }
    get node() {
        if (!this.buffer) return this._tree;
        let e = this.bufferNode, t = null, r = 0;
        if (e && e.context == this.buffer) {
            e: for(let i = this.index, n = this.stack.length; n >= 0;){
                for(let s = e; s; s = s._parent)if (s.index == i) {
                    if (i == this.index) return s;
                    t = s, r = n + 1;
                    break e;
                }
                i = this.stack[--n];
            }
        }
        for(let i1 = r; i1 < this.stack.length; i1++)t = new M2(this.buffer, t, this.stack[i1]);
        return this.bufferNode = new M2(this.buffer, t, this.index);
    }
    get tree() {
        return this.buffer ? null : this._tree._tree;
    }
    iterate(e, t) {
        for(let r = 0;;){
            let i = !1;
            if (this.type.isAnonymous || e(this) !== !1) {
                if (this.firstChild()) {
                    r++;
                    continue;
                }
                this.type.isAnonymous || (i = !0);
            }
            for(; i && t && t(this), i = this.type.isAnonymous, !this.nextSibling();){
                if (!r) return;
                this.parent(), r--, i = !0;
            }
        }
    }
    matchContext(e) {
        if (!this.buffer) return te2(this.node, e);
        let { buffer: t  } = this.buffer, { types: r  } = t.set;
        for(let i = e.length - 1, n = this.stack.length - 1; i >= 0; n--){
            if (n < 0) return te2(this.node, e, i);
            let s = r[t.buffer[this.stack[n]]];
            if (!s.isAnonymous) {
                if (e[i] && e[i] != s.name) return !1;
                i--;
            }
        }
        return !0;
    }
};
function ae2(h) {
    return h.children.some((e)=>e instanceof T3 || !e.type.isAnonymous || ae2(e));
}
function Se2(h) {
    var e;
    let { buffer: t , nodeSet: r , maxBufferLength: i = 1024 , reused: n = [] , minRepeatType: s = r.types.length  } = h, l = Array.isArray(t) ? new K2(t, t.length) : t, f = r.types, u = 0, o = 0;
    function c(x, v, p, m, C) {
        let { id: b , start: g , end: k , size: z  } = l, O = o;
        for(; z < 0;)if (l.next(), z == -1) {
            let W = n[b];
            p.push(W), m.push(g - x);
            return;
        } else if (z == -3) {
            u = b;
            return;
        } else if (z == -4) {
            o = b;
            return;
        } else throw new RangeError(`Unrecognized record size: ${z}`);
        let J = f[b], U, L, ce = g - x;
        if (k - g <= i && (L = S(l.pos - v, C))) {
            let W1 = new Uint16Array(L.size - L.skip), j = l.pos - L.size, R = W1.length;
            for(; l.pos > j;)R = D(L.start, W1, R);
            U = new T3(W1, k - L.start, r), ce = L.start - x;
        } else {
            let W2 = l.pos - z;
            l.next();
            let j1 = [], R1 = [], H = b >= s ? b : -1, $ = 0, Q = k;
            for(; l.pos > W2;)H >= 0 && l.id == H && l.size >= 0 ? (l.end <= Q - i && (y(j1, R1, g, $, l.end, Q, H, O), $ = j1.length, Q = l.end), l.next()) : c(g, W2, j1, R1, H);
            if (H >= 0 && $ > 0 && $ < j1.length && y(j1, R1, g, $, g, Q, H, O), j1.reverse(), R1.reverse(), H > -1 && $ > 0) {
                let de = a(J);
                U = pe2(J, j1, R1, 0, j1.length, 0, k - g, de, de);
            } else U = d(J, j1, R1, k - g, O - k);
        }
        p.push(U), m.push(ce);
    }
    function a(x) {
        return (v, p, m)=>{
            let C = 0, b = v.length - 1, g, k;
            if (b >= 0 && (g = v[b]) instanceof P2) {
                if (!b && g.type == x && g.length == m) return g;
                (k = g.prop(w2.lookAhead)) && (C = p[b] + g.length + k);
            }
            return d(x, v, p, m, C);
        };
    }
    function y(x, v, p, m, C, b, g, k) {
        let z = [], O = [];
        for(; x.length > m;)z.push(x.pop()), O.push(v.pop() + p - C);
        x.push(d(r.types[g], z, O, b - C, k - b)), v.push(C - p);
    }
    function d(x, v, p, m, C = 0, b) {
        if (u) {
            let g = [
                w2.contextHash,
                u
            ];
            b = b ? [
                g
            ].concat(b) : [
                g
            ];
        }
        if (C > 25) {
            let g1 = [
                w2.lookAhead,
                C
            ];
            b = b ? [
                g1
            ].concat(b) : [
                g1
            ];
        }
        return new P2(x, v, p, m, b);
    }
    function S(x, v) {
        let p = l.fork(), m = 0, C = 0, b = 0, g = p.end - i, k = {
            size: 0,
            start: 0,
            skip: 0
        };
        e: for(let z = p.pos - x; p.pos > z;){
            let O = p.size;
            if (p.id == v && O >= 0) {
                k.size = m, k.start = C, k.skip = b, b += 4, m += 4, p.next();
                continue;
            }
            let J = p.pos - O;
            if (O < 0 || J < z || p.start < g) break;
            let U = p.id >= s ? 4 : 0, L = p.start;
            for(p.next(); p.pos > J;){
                if (p.size < 0) if (p.size == -3) U += 4;
                else break e;
                else p.id >= s && (U += 4);
                p.next();
            }
            C = L, m += O, b += U;
        }
        return (v < 0 || m == x) && (k.size = m, k.start = C, k.skip = b), k.size > 4 ? k : void 0;
    }
    function D(x, v, p) {
        let { id: m , start: C , end: b , size: g  } = l;
        if (l.next(), g >= 0 && m < s) {
            let k = p;
            if (g > 4) {
                let z = l.pos - (g - 4);
                for(; l.pos > z;)p = D(x, v, p);
            }
            v[--p] = k, v[--p] = b - x, v[--p] = C - x, v[--p] = m;
        } else g == -3 ? u = m : g == -4 && (o = m);
        return p;
    }
    let E = [], F = [];
    for(; l.pos > 0;)c(h.start || 0, h.bufferStart || 0, E, F, -1);
    let _ = (e = h.length) !== null && e !== void 0 ? e : E.length ? F[0] + E[0].length : 0;
    return new P2(f[h.topID], E.reverse(), F.reverse(), _);
}
var me2 = new WeakMap;
function Y2(h, e) {
    if (!h.isAnonymous || e instanceof T3 || e.type != h) return 1;
    let t = me2.get(e);
    if (t == null) {
        t = 1;
        for (let r of e.children){
            if (r.type != h || !(r instanceof P2)) {
                t = 1;
                break;
            }
            t += Y2(h, r);
        }
        me2.set(e, t);
    }
    return t;
}
function pe2(h, e, t, r, i, n, s, l, f) {
    let u = 0;
    for(let d = r; d < i; d++)u += Y2(h, e[d]);
    let o = Math.ceil(u * 1.5 / 8), c = [], a = [];
    function y(d, S, D, E, F) {
        for(let _ = D; _ < E;){
            let x = _, v = S[_], p = Y2(h, d[_]);
            for(_++; _ < E; _++){
                let m = Y2(h, d[_]);
                if (p + m >= o) break;
                p += m;
            }
            if (_ == x + 1) {
                if (p > o) {
                    let m1 = d[x];
                    y(m1.children, m1.positions, 0, m1.children.length, S[x] + F);
                    continue;
                }
                c.push(d[x]);
            } else {
                let m2 = S[_ - 1] + d[_ - 1].length - v;
                c.push(pe2(h, d, S, x, _, v, m2, null, f));
            }
            a.push(v + F - n);
        }
    }
    return y(e, t, r, i, 0), (l || f)(c, a, s);
}
var G2 = class {
    constructor(e, t, r, i, n = !1, s = !1){
        this.from = e, this.to = t, this.tree = r, this.offset = i, this.open = (n ? 1 : 0) | (s ? 2 : 0);
    }
    get openStart() {
        return (this.open & 1) > 0;
    }
    get openEnd() {
        return (this.open & 2) > 0;
    }
    static addTree(e, t = [], r = !1) {
        let i = [
            new G2(0, e.length, e, 0, !1, r)
        ];
        for (let n of t)n.to > e.length && i.push(n);
        return i;
    }
    static applyChanges(e, t, r = 128) {
        if (!t.length) return e;
        let i = [], n = 1, s = e.length ? e[0] : null;
        for(let l = 0, f = 0, u = 0;; l++){
            let o = l < t.length ? t[l] : null, c = o ? o.fromA : 1e9;
            if (c - f >= r) for(; s && s.from < c;){
                let a = s;
                if (f >= a.from || c <= a.to || u) {
                    let y = Math.max(a.from, f) - u, d = Math.min(a.to, c) - u;
                    a = y >= d ? null : new G2(y, d, a.tree, a.offset + u, l > 0, !!o);
                }
                if (a && i.push(a), s.to > c) break;
                s = n < e.length ? e[n++] : null;
            }
            if (!o) break;
            f = o.toA, u = o.toA - o.toB;
        }
        return i;
    }
}, ye2 = class {
    startParse(e, t, r) {
        return typeof e == "string" && (e = new le2(e)), r = r ? r.length ? r.map((i)=>new B2(i.from, i.to)) : [
            new B2(0, 0)
        ] : [
            new B2(0, e.length)
        ], this.createParse(e, t || [], r);
    }
    parse(e, t, r) {
        let i = this.startParse(e, t, r);
        for(;;){
            let n = i.advance();
            if (n) return n;
        }
    }
}, le2 = class {
    constructor(e){
        this.string = e;
    }
    get length() {
        return this.string.length;
    }
    chunk(e) {
        return this.string.slice(e);
    }
    get lineChunks() {
        return !1;
    }
    read(e, t) {
        return this.string.slice(e, t);
    }
};
new w2({
    perNode: !0
});
var L1 = 0, h = class {
    constructor(e, a, i){
        this.set = e, this.base = a, this.modified = i, this.id = L1++;
    }
    static define(e) {
        if (e?.base) throw new Error("Can not derive from a modified tag");
        let a = new h([], null, []);
        if (a.set.push(a), e) for (let i of e.set)a.set.push(i);
        return a;
    }
    static defineModifier() {
        let e = new M3;
        return (a)=>a.modified.indexOf(e) > -1 ? a : M3.get(a.base || a, a.modified.concat(e).sort((i, n)=>i.id - n.id));
    }
}, Q1 = 0, M3 = class {
    constructor(){
        this.instances = [], this.id = Q1++;
    }
    static get(e, a) {
        if (!a.length) return e;
        let i = a[0].instances.find((r)=>r.base == e && U2(a, r.modified));
        if (i) return i;
        let n = [], l = new h(n, e, a);
        for (let r of a)r.instances.push(l);
        let c = V3(a);
        for (let r1 of e.set)for (let d of c)n.push(M3.get(r1, d));
        return l;
    }
};
function U2(o, e) {
    return o.length == e.length && o.every((a, i)=>a == e[i]);
}
function V3(o) {
    let e = [
        o
    ];
    for(let a = 0; a < o.length; a++)for (let i of V3(o.slice(0, a).concat(o.slice(a + 1))))e.push(i);
    return e;
}
function Z2(o) {
    let e = Object.create(null);
    for(let a in o){
        let i = o[a];
        Array.isArray(i) || (i = [
            i
        ]);
        for (let n of a.split(" "))if (n) {
            let l = [], c = 2, r = n;
            for(let u = 0;;){
                if (r == "..." && u > 0 && u + 3 == n.length) {
                    c = 1;
                    break;
                }
                let f = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(r);
                if (!f) throw new RangeError("Invalid path: " + n);
                if (l.push(f[0] == "*" ? "" : f[0][0] == '"' ? JSON.parse(f[0]) : f[0]), u += f[0].length, u == n.length) break;
                let p = n[u++];
                if (u == n.length && p == "!") {
                    c = 0;
                    break;
                }
                if (p != "/") throw new RangeError("Invalid path: " + n);
                r = n.slice(u);
            }
            let d = l.length - 1, g = l[d];
            if (!g) throw new RangeError("Invalid path: " + n);
            let m = new q3(i, c, d > 0 ? l.slice(0, d) : null);
            e[g] = m.sort(e[g]);
        }
    }
    return z1.add(e);
}
var z1 = new w2, q3 = class {
    constructor(e, a, i, n){
        this.tags = e, this.mode = a, this.context = i, this.next = n;
    }
    sort(e) {
        return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
    }
    get depth() {
        return this.context ? this.context.length : 0;
    }
};
function W2(o, e) {
    let a = Object.create(null);
    for (let l of o)if (!Array.isArray(l.tag)) a[l.tag.id] = l.class;
    else for (let c of l.tag)a[c.id] = l.class;
    let { scope: i , all: n = null  } = e || {};
    return {
        style: (l)=>{
            let c = n;
            for (let r of l)for (let d of r.set){
                let g = a[d.id];
                if (g) {
                    c = c ? c + " " + g : g;
                    break;
                }
            }
            return c;
        },
        scope: i
    };
}
function X3(o, e) {
    let a = null;
    for (let i of o){
        let n = i.style(e);
        n && (a = a ? a + " " + n : n);
    }
    return a;
}
function $2(o, e, a, i = 0, n = o.length) {
    let l = new P3(i, Array.isArray(e) ? e : [
        e
    ], a);
    l.highlightRange(o.cursor(), i, n, "", l.highlighters), l.flush(n);
}
var P3 = class {
    constructor(e, a, i){
        this.at = e, this.highlighters = a, this.span = i, this.class = "";
    }
    startSpan(e, a) {
        a != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = a);
    }
    flush(e) {
        e > this.at && this.class && this.span(this.at, e, this.class);
    }
    highlightRange(e, a, i, n, l) {
        let { type: c , from: r , to: d  } = e;
        if (r >= i || d <= a) return;
        c.isTop && (l = this.highlighters.filter((p)=>!p.scope || p.scope(c)));
        let g = n, m = c.prop(z1), u = !1;
        for(; m;){
            if (!m.context || e.matchContext(m.context)) {
                let p = X3(l, m.tags);
                p && (g && (g += " "), g += p, m.mode == 1 ? n += (n ? " " : "") + p : m.mode == 0 && (u = !0));
                break;
            }
            m = m.next;
        }
        if (this.startSpan(e.from, g), u) return;
        let f = e.tree && e.tree.prop(w2.mounted);
        if (f && f.overlay) {
            let p1 = e.node.enter(f.overlay[0].from + r, 1), G = this.highlighters.filter((v)=>!v.scope || v.scope(f.tree.type)), D = e.firstChild();
            for(let v = 0, O = r;; v++){
                let S = v < f.overlay.length ? f.overlay[v] : null, E = S ? S.from + r : d, H = Math.max(a, O), K = Math.min(i, E);
                if (H < K && D) for(; e.from < K && (this.highlightRange(e, H, K, n, l), this.startSpan(Math.min(i, e.to), g), !(e.to >= E || !e.nextSibling())););
                if (!S || E > i) break;
                O = S.to + r, O > a && (this.highlightRange(p1.cursor(), Math.max(a, S.from + r), Math.min(i, O), n, G), this.startSpan(O, g));
            }
            D && e.parent();
        } else if (e.firstChild()) {
            do if (!(e.to <= a)) {
                if (e.from >= i) break;
                this.highlightRange(e, a, i, n, l), this.startSpan(Math.min(i, e.to), g);
            }
            while (e.nextSibling())
            e.parent();
        }
    }
}, t2 = h.define, R2 = t2(), N3 = t2(), B3 = t2(N3), F2 = t2(N3), x1 = t2(), I3 = t2(x1), T4 = t2(x1), y2 = t2(), w3 = t2(y2), k = t2(), b2 = t2(), j2 = t2(), A3 = t2(j2), C2 = t2(), s1 = {
    comment: R2,
    lineComment: t2(R2),
    blockComment: t2(R2),
    docComment: t2(R2),
    name: N3,
    variableName: t2(N3),
    typeName: B3,
    tagName: t2(B3),
    propertyName: F2,
    attributeName: t2(F2),
    className: t2(N3),
    labelName: t2(N3),
    namespace: t2(N3),
    macroName: t2(N3),
    literal: x1,
    string: I3,
    docString: t2(I3),
    character: t2(I3),
    attributeValue: t2(I3),
    number: T4,
    integer: t2(T4),
    float: t2(T4),
    bool: t2(x1),
    regexp: t2(x1),
    escape: t2(x1),
    color: t2(x1),
    url: t2(x1),
    keyword: k,
    self: t2(k),
    null: t2(k),
    atom: t2(k),
    unit: t2(k),
    modifier: t2(k),
    operatorKeyword: t2(k),
    controlKeyword: t2(k),
    definitionKeyword: t2(k),
    moduleKeyword: t2(k),
    operator: b2,
    derefOperator: t2(b2),
    arithmeticOperator: t2(b2),
    logicOperator: t2(b2),
    bitwiseOperator: t2(b2),
    compareOperator: t2(b2),
    updateOperator: t2(b2),
    definitionOperator: t2(b2),
    typeOperator: t2(b2),
    controlOperator: t2(b2),
    punctuation: j2,
    separator: t2(j2),
    bracket: A3,
    angleBracket: t2(A3),
    squareBracket: t2(A3),
    paren: t2(A3),
    brace: t2(A3),
    content: y2,
    heading: w3,
    heading1: t2(w3),
    heading2: t2(w3),
    heading3: t2(w3),
    heading4: t2(w3),
    heading5: t2(w3),
    heading6: t2(w3),
    contentSeparator: t2(y2),
    list: t2(y2),
    quote: t2(y2),
    emphasis: t2(y2),
    strong: t2(y2),
    link: t2(y2),
    monospace: t2(y2),
    strikethrough: t2(y2),
    inserted: t2(),
    deleted: t2(),
    changed: t2(),
    invalid: t2(),
    meta: C2,
    documentMeta: t2(C2),
    annotation: t2(C2),
    processingInstruction: t2(C2),
    definition: h.defineModifier(),
    constant: h.defineModifier(),
    function: h.defineModifier(),
    standard: h.defineModifier(),
    local: h.defineModifier(),
    special: h.defineModifier()
}, _2 = W2([
    {
        tag: s1.link,
        class: "tok-link"
    },
    {
        tag: s1.heading,
        class: "tok-heading"
    },
    {
        tag: s1.emphasis,
        class: "tok-emphasis"
    },
    {
        tag: s1.strong,
        class: "tok-strong"
    },
    {
        tag: s1.keyword,
        class: "tok-keyword"
    },
    {
        tag: s1.atom,
        class: "tok-atom"
    },
    {
        tag: s1.bool,
        class: "tok-bool"
    },
    {
        tag: s1.url,
        class: "tok-url"
    },
    {
        tag: s1.labelName,
        class: "tok-labelName"
    },
    {
        tag: s1.inserted,
        class: "tok-inserted"
    },
    {
        tag: s1.deleted,
        class: "tok-deleted"
    },
    {
        tag: s1.literal,
        class: "tok-literal"
    },
    {
        tag: s1.string,
        class: "tok-string"
    },
    {
        tag: s1.number,
        class: "tok-number"
    },
    {
        tag: [
            s1.regexp,
            s1.escape,
            s1.special(s1.string)
        ],
        class: "tok-string2"
    },
    {
        tag: s1.variableName,
        class: "tok-variableName"
    },
    {
        tag: s1.local(s1.variableName),
        class: "tok-variableName tok-local"
    },
    {
        tag: s1.definition(s1.variableName),
        class: "tok-variableName tok-definition"
    },
    {
        tag: s1.special(s1.variableName),
        class: "tok-variableName2"
    },
    {
        tag: s1.definition(s1.propertyName),
        class: "tok-propertyName tok-definition"
    },
    {
        tag: s1.typeName,
        class: "tok-typeName"
    },
    {
        tag: s1.namespace,
        class: "tok-namespace"
    },
    {
        tag: s1.className,
        class: "tok-className"
    },
    {
        tag: s1.macroName,
        class: "tok-macroName"
    },
    {
        tag: s1.propertyName,
        class: "tok-propertyName"
    },
    {
        tag: s1.operator,
        class: "tok-operator"
    },
    {
        tag: s1.comment,
        class: "tok-comment"
    },
    {
        tag: s1.meta,
        class: "tok-meta"
    },
    {
        tag: s1.invalid,
        class: "tok-invalid"
    },
    {
        tag: s1.punctuation,
        class: "tok-punctuation"
    }
]);
var Z3, T5 = new w2;
function yt1(n) {
    return A.define({
        combine: n ? (t)=>t.concat(n) : void 0
    });
}
var c1 = class {
    constructor(t, e, r = []){
        this.data = t, w.prototype.hasOwnProperty("tree") || Object.defineProperty(w.prototype, "tree", {
            get () {
                return m2(this);
            }
        }), this.parser = e, this.extension = [
            P4.of(this),
            w.languageData.of((s, i, o)=>s.facet(ut1(s, i, o)))
        ].concat(r);
    }
    isActiveAt(t, e, r = -1) {
        return ut1(t, e, r) == this.data;
    }
    findRegions(t) {
        let e = t.facet(P4);
        if (e?.data == this.data) return [
            {
                from: 0,
                to: t.doc.length
            }
        ];
        if (!e || !e.allowsNesting) return [];
        let r = [], s = (i, o)=>{
            if (i.prop(T5) == this.data) {
                r.push({
                    from: o,
                    to: o + i.length
                });
                return;
            }
            let a = i.prop(w2.mounted);
            if (a) {
                if (a.tree.prop(T5) == this.data) {
                    if (a.overlay) for (let l of a.overlay)r.push({
                        from: l.from + o,
                        to: l.to + o
                    });
                    else r.push({
                        from: o,
                        to: o + i.length
                    });
                    return;
                } else if (a.overlay) {
                    let l1 = r.length;
                    if (s(a.tree, a.overlay[0].from + o), r.length > l1) return;
                }
            }
            for(let l2 = 0; l2 < i.children.length; l2++){
                let h = i.children[l2];
                h instanceof P2 && s(h, i.positions[l2] + o);
            }
        };
        return s(m2(t), 0), r;
    }
    get allowsNesting() {
        return !0;
    }
};
c1.setState = y.define();
function ut1(n, t, e) {
    let r = n.facet(P4);
    if (!r) return null;
    let s = r.data;
    if (r.allowsNesting) for(let i = m2(n).topNode; i; i = i.enter(t, e, A2.ExcludeBuffers))s = i.type.prop(T5) || s;
    return s;
}
var N4 = class extends c1 {
    constructor(t, e){
        super(t, e), this.parser = e;
    }
    static define(t) {
        let e = yt1(t.languageData);
        return new N4(e, t.parser.configure({
            props: [
                T5.add((r)=>r.isTop ? e : void 0)
            ]
        }));
    }
    configure(t) {
        return new N4(this.data, this.parser.configure(t));
    }
    get allowsNesting() {
        return this.parser.hasWrappers();
    }
};
function m2(n) {
    let t = n.field(c1.state, !1);
    return t ? t.tree : P2.empty;
}
var et1 = class {
    constructor(t, e = t.length){
        this.doc = t, this.length = e, this.cursorPos = 0, this.string = "", this.cursor = t.iter();
    }
    syncTo(t) {
        return this.string = this.cursor.next(t - this.cursorPos).value, this.cursorPos = t + this.string.length, this.cursorPos - this.string.length;
    }
    chunk(t) {
        return this.syncTo(t), this.string;
    }
    get lineChunks() {
        return !0;
    }
    read(t, e) {
        let r = this.cursorPos - this.string.length;
        return t < r || e >= this.cursorPos ? this.doc.sliceString(t, e) : this.string.slice(t - r, e - r);
    }
}, I4 = null, x2 = class {
    constructor(t, e, r = [], s, i, o, a, l){
        this.parser = t, this.state = e, this.fragments = r, this.tree = s, this.treeLen = i, this.viewport = o, this.skipped = a, this.scheduleOn = l, this.parse = null, this.tempSkipped = [];
    }
    static create(t, e, r) {
        return new x2(t, e, [], P2.empty, 0, r, [], null);
    }
    startParse() {
        return this.parser.startParse(new et1(this.state.doc), this.fragments);
    }
    work(t, e) {
        return e != null && e >= this.state.doc.length && (e = void 0), this.tree != P2.empty && this.isDone(e ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(()=>{
            var r;
            if (typeof t == "number") {
                let s = Date.now() + t;
                t = ()=>Date.now() > s;
            }
            for(this.parse || (this.parse = this.startParse()), e != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > e) && e < this.state.doc.length && this.parse.stopAt(e);;){
                let s1 = this.parse.advance();
                if (s1) if (this.fragments = this.withoutTempSkipped(G2.addTree(s1, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (r = this.parse.stoppedAt) !== null && r !== void 0 ? r : this.state.doc.length, this.tree = s1, this.parse = null, this.treeLen < (e ?? this.state.doc.length)) this.parse = this.startParse();
                else return !0;
                if (t()) return !1;
            }
        });
    }
    takeTree() {
        let t, e;
        this.parse && (t = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > t) && this.parse.stopAt(t), this.withContext(()=>{
            for(; !(e = this.parse.advance()););
        }), this.treeLen = t, this.tree = e, this.fragments = this.withoutTempSkipped(G2.addTree(this.tree, this.fragments, !0)), this.parse = null);
    }
    withContext(t) {
        let e = I4;
        I4 = this;
        try {
            return t();
        } finally{
            I4 = e;
        }
    }
    withoutTempSkipped(t) {
        for(let e; e = this.tempSkipped.pop();)t = ct1(t, e.from, e.to);
        return t;
    }
    changes(t, e) {
        let { fragments: r , tree: s , treeLen: i , viewport: o , skipped: a  } = this;
        if (this.takeTree(), !t.empty) {
            let l = [];
            if (t.iterChangedRanges((h, u, d, g)=>l.push({
                    fromA: h,
                    toA: u,
                    fromB: d,
                    toB: g
                })), r = G2.applyChanges(r, l), s = P2.empty, i = 0, o = {
                from: t.mapPos(o.from, -1),
                to: t.mapPos(o.to, 1)
            }, this.skipped.length) {
                a = [];
                for (let h of this.skipped){
                    let u = t.mapPos(h.from, 1), d = t.mapPos(h.to, -1);
                    u < d && a.push({
                        from: u,
                        to: d
                    });
                }
            }
        }
        return new x2(this.parser, e, r, s, i, o, a, this.scheduleOn);
    }
    updateViewport(t) {
        if (this.viewport.from == t.from && this.viewport.to == t.to) return !1;
        this.viewport = t;
        let e = this.skipped.length;
        for(let r = 0; r < this.skipped.length; r++){
            let { from: s , to: i  } = this.skipped[r];
            s < t.to && i > t.from && (this.fragments = ct1(this.fragments, s, i), this.skipped.splice(r--, 1));
        }
        return this.skipped.length >= e ? !1 : (this.reset(), !0);
    }
    reset() {
        this.parse && (this.takeTree(), this.parse = null);
    }
    skipUntilInView(t, e) {
        this.skipped.push({
            from: t,
            to: e
        });
    }
    static getSkippingParser(t) {
        return new class extends ye2 {
            createParse(e, r, s) {
                let i = s[0].from, o = s[s.length - 1].to;
                return {
                    parsedPos: i,
                    advance () {
                        let l = I4;
                        if (l) {
                            for (let h of s)l.tempSkipped.push(h);
                            t && (l.scheduleOn = l.scheduleOn ? Promise.all([
                                l.scheduleOn,
                                t
                            ]) : t);
                        }
                        return this.parsedPos = o, new P2(N2.none, [], [], o - i);
                    },
                    stoppedAt: null,
                    stopAt () {}
                };
            }
        };
    }
    isDone(t) {
        t = Math.min(t, this.state.doc.length);
        let e = this.fragments;
        return this.treeLen >= t && e.length && e[0].from == 0 && e[0].to >= t;
    }
    static get() {
        return I4;
    }
};
function ct1(n, t, e) {
    return G2.applyChanges(n, [
        {
            fromA: t,
            toA: e,
            fromB: t,
            toB: e
        }
    ]);
}
var S2 = class {
    constructor(t){
        this.context = t, this.tree = t.tree;
    }
    apply(t) {
        if (!t.docChanged && this.tree == this.context.tree) return this;
        let e = this.context.changes(t.changes, t.state), r = this.context.treeLen == t.startState.doc.length ? void 0 : Math.max(t.changes.mapPos(this.context.treeLen), e.viewport.to);
        return e.work(20, r) || e.takeTree(), new S2(e);
    }
    static init(t) {
        let e = Math.min(3e3, t.doc.length), r = x2.create(t.facet(P4).parser, t, {
            from: 0,
            to: e
        });
        return r.work(20, e) || r.takeTree(), new S2(r);
    }
};
c1.state = F.define({
    create: S2.init,
    update (n, t) {
        for (let e of t.effects)if (e.is(c1.setState)) return e.value;
        return t.startState.facet(P4) != t.state.facet(P4) ? S2.init(t.state) : n.apply(t);
    }
});
var vt1 = (n)=>{
    let t = setTimeout(()=>n(), 500);
    return ()=>clearTimeout(t);
};
typeof requestIdleCallback < "u" && (vt1 = (n)=>{
    let t = -1, e = setTimeout(()=>{
        t = requestIdleCallback(n, {
            timeout: 500 - 100
        });
    }, 100);
    return ()=>t < 0 ? clearTimeout(e) : cancelIdleCallback(t);
});
var _3 = typeof navigator < "u" && ((Z3 = navigator.scheduling) === null || Z3 === void 0 ? void 0 : Z3.isInputPending) ? ()=>navigator.scheduling.isInputPending() : null, xt1 = V1.fromClass(class {
    constructor(t){
        this.view = t, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
    }
    update(t) {
        let e = this.view.state.field(c1.state).context;
        (e.updateViewport(t.view.viewport) || this.view.viewport.to > e.treeLen) && this.scheduleWork(), t.docChanged && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(e);
    }
    scheduleWork() {
        if (this.working) return;
        let { state: t  } = this.view, e = t.field(c1.state);
        (e.tree != e.context.tree || !e.context.isDone(t.doc.length)) && (this.working = vt1(this.work));
    }
    work(t) {
        this.working = null;
        let e = Date.now();
        if (this.chunkEnd < e && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
        let { state: r , viewport: { to: s  }  } = this.view, i = r.field(c1.state);
        if (i.tree == i.context.tree && i.context.isDone(s + 1e5)) return;
        let o = Date.now() + Math.min(this.chunkBudget, 100, t && !_3 ? Math.max(25, t.timeRemaining() - 5) : 1e9), a = i.context.treeLen < s && r.doc.length > s + 1e3, l = i.context.work(()=>_3 && _3() || Date.now() > o, s + (a ? 0 : 1e5));
        this.chunkBudget -= Date.now() - e, (l || this.chunkBudget <= 0) && (i.context.takeTree(), this.view.dispatch({
            effects: c1.setState.of(new S2(i.context))
        })), this.chunkBudget > 0 && !(l && !a) && this.scheduleWork(), this.checkAsyncSchedule(i.context);
    }
    checkAsyncSchedule(t) {
        t.scheduleOn && (this.workScheduled++, t.scheduleOn.then(()=>this.scheduleWork()).catch((e)=>nt1(this.view.state, e)).then(()=>this.workScheduled--), t.scheduleOn = null);
    }
    destroy() {
        this.working && this.working();
    }
    isWorking() {
        return !!(this.working || this.workScheduled > 0);
    }
}, {
    eventHandlers: {
        focus () {
            this.scheduleWork();
        }
    }
}), P4 = A.define({
    combine (n) {
        return n.length ? n[0] : null;
    },
    enables: [
        c1.state,
        xt1
    ]
}), L2 = class {
    constructor(t, e, r, s, i, o = void 0){
        this.name = t, this.alias = e, this.extensions = r, this.filename = s, this.loadFunc = i, this.support = o, this.loading = null;
    }
    load() {
        return this.loading || (this.loading = this.loadFunc().then((t)=>this.support = t, (t)=>{
            throw this.loading = null, t;
        }));
    }
    static of(t) {
        let { load: e , support: r  } = t;
        if (!e) {
            if (!r) throw new RangeError("Must pass either 'load' or 'support' to LanguageDescription.of");
            e = ()=>Promise.resolve(r);
        }
        return new L2(t.name, (t.alias || []).concat(t.name).map((s)=>s.toLowerCase()), t.extensions || [], t.filename, e, r);
    }
    static matchFilename(t, e) {
        for (let s of t)if (s.filename && s.filename.test(e)) return s;
        let r = /\.([^.]+)$/.exec(e);
        if (r) {
            for (let s1 of t)if (s1.extensions.indexOf(r[1]) > -1) return s1;
        }
        return null;
    }
    static matchLanguageName(t, e, r = !0) {
        e = e.toLowerCase();
        for (let s of t)if (s.alias.some((i)=>i == e)) return s;
        if (r) for (let s1 of t)for (let i of s1.alias){
            let o = e.indexOf(i);
            if (o > -1 && (i.length > 2 || !/\w/.test(e[o - 1]) && !/\w/.test(e[o + i.length]))) return s1;
        }
        return null;
    }
}, St1 = A.define(), Pt1 = A.define({
    combine: (n)=>{
        if (!n.length) return "  ";
        if (!/^(?: +|\t+)$/.test(n[0])) throw new Error("Invalid indent unit: " + JSON.stringify(n[0]));
        return n[0];
    }
});
function j3(n) {
    let t = n.facet(Pt1);
    return t.charCodeAt(0) == 9 ? n.tabSize * t.length : t.length;
}
function te3(n, t) {
    let e = "", r = n.tabSize;
    if (n.facet(Pt1).charCodeAt(0) == 9) for(; t >= r;)e += "	", t -= r;
    for(let s = 0; s < t; s++)e += " ";
    return e;
}
function ee3(n, t) {
    n instanceof w && (n = new $3(n));
    for (let r of n.state.facet(St1)){
        let s = r(n, t);
        if (s != null) return s;
    }
    let e = m2(n.state);
    return e ? re2(n, e, t) : null;
}
var $3 = class {
    constructor(t, e = {}){
        this.state = t, this.options = e, this.unit = j3(t);
    }
    lineAt(t, e = 1) {
        let r = this.state.doc.lineAt(t), { simulateBreak: s , simulateDoubleBreak: i  } = this.options;
        return s != null && s >= r.from && s <= r.to ? i && s == t ? {
            text: "",
            from: t
        } : (e < 0 ? s < t : s <= t) ? {
            text: r.text.slice(s - r.from),
            from: s
        } : {
            text: r.text.slice(0, s - r.from),
            from: r.from
        } : r;
    }
    textAfterPos(t, e = 1) {
        if (this.options.simulateDoubleBreak && t == this.options.simulateBreak) return "";
        let { text: r , from: s  } = this.lineAt(t, e);
        return r.slice(t - s, Math.min(r.length, t + 100 - s));
    }
    column(t, e = 1) {
        let { text: r , from: s  } = this.lineAt(t, e), i = this.countColumn(r, t - s), o = this.options.overrideIndentation ? this.options.overrideIndentation(s) : -1;
        return o > -1 && (i += o - this.countColumn(r, r.search(/\S|$/))), i;
    }
    countColumn(t, e = t.length) {
        return ot(t, this.state.tabSize, e);
    }
    lineIndent(t, e = 1) {
        let { text: r , from: s  } = this.lineAt(t, e), i = this.options.overrideIndentation;
        if (i) {
            let o = i(s);
            if (o > -1) return o;
        }
        return this.countColumn(r, r.search(/\S|$/));
    }
    get simulatedBreak() {
        return this.options.simulateBreak || null;
    }
}, ne2 = new w2;
function re2(n, t, e) {
    return At1(t.resolveInner(e).enterUnfinishedNodesBefore(e), e, n);
}
function se3(n) {
    return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
}
function ie2(n) {
    let t = n.type.prop(ne2);
    if (t) return t;
    let e = n.firstChild, r;
    if (e && (r = e.type.prop(w2.closedBy))) {
        let s = n.lastChild, i = s && r.indexOf(s.name) > -1;
        return (o)=>Ct(o, !0, 1, void 0, i && !se3(o) ? s.from : void 0);
    }
    return n.parent == null ? oe2 : null;
}
function At1(n, t, e) {
    for(; n; n = n.parent){
        let r = ie2(n);
        if (r) return r(M4.create(e, t, n));
    }
    return null;
}
function oe2() {
    return 0;
}
var M4 = class extends $3 {
    constructor(t, e, r){
        super(t.state, t.options), this.base = t, this.pos = e, this.node = r;
    }
    static create(t, e, r) {
        return new M4(t, e, r);
    }
    get textAfter() {
        return this.textAfterPos(this.pos);
    }
    get baseIndent() {
        let t = this.state.doc.lineAt(this.node.from);
        for(;;){
            let e = this.node.resolve(t.from);
            for(; e.parent && e.parent.from == e.from;)e = e.parent;
            if (le3(e, this.node)) break;
            t = this.state.doc.lineAt(e.from);
        }
        return this.lineIndent(t.from);
    }
    continue() {
        let t = this.node.parent;
        return t ? At1(t, this.pos, this.base) : 0;
    }
};
function le3(n, t) {
    for(let e = t; e; e = e.parent)if (n == e) return !0;
    return !1;
}
function ae3(n) {
    let t = n.node, e = t.childAfter(t.from), r = t.lastChild;
    if (!e) return null;
    let s = n.options.simulateBreak, i = n.state.doc.lineAt(e.from), o = s == null || s <= i.from ? i.to : Math.min(i.to, s);
    for(let a = e.to;;){
        let l = t.childAfter(a);
        if (!l || l == r) return null;
        if (!l.type.isSkipped) return l.from < o ? e : null;
        a = l.to;
    }
}
function Ct(n, t, e, r, s) {
    let i = n.textAfter, o = i.match(/^\s*/)[0].length, a = r && i.slice(o, o + r.length) == r || s == n.pos + o, l = t ? ae3(n) : null;
    return l ? a ? n.column(l.from) : n.column(l.to) : n.baseIndent + (a ? 0 : n.unit * e);
}
var he1 = 200;
function Xe2() {
    return w.transactionFilter.of((n)=>{
        if (!n.docChanged || !n.isUserEvent("input.type") && !n.isUserEvent("input.complete")) return n;
        let t = n.startState.languageDataAt("indentOnInput", n.startState.selection.main.head);
        if (!t.length) return n;
        let e = n.newDoc, { head: r  } = n.newSelection.main, s = e.lineAt(r);
        if (r > s.from + he1) return n;
        let i = e.sliceString(s.from, r);
        if (!t.some((h)=>h.test(i))) return n;
        let { state: o  } = n, a = -1, l = [];
        for (let { head: h  } of o.selection.ranges){
            let u = o.doc.lineAt(h);
            if (u.from == a) continue;
            a = u.from;
            let d = ee3(o, u.from);
            if (d == null) continue;
            let g = /^\s*/.exec(u.text)[0], b = te3(o, d);
            g != b && l.push({
                from: u.from,
                to: u.from + g.length,
                insert: b
            });
        }
        return l.length ? [
            n,
            {
                changes: l,
                sequential: !0
            }
        ] : n;
    });
}
var fe2 = A.define(), ue2 = new w2;
function ce2(n, t, e) {
    let r = m2(n);
    if (r.length < e) return null;
    let s = r.resolveInner(e), i = null;
    for(let o = s; o; o = o.parent){
        if (o.to <= e || o.from > e) continue;
        if (i && o.from < t) break;
        let a = o.type.prop(ue2);
        if (a && (o.to < r.length - 50 || r.length == n.doc.length || !de2(o))) {
            let l = a(o, n);
            l && l.from <= e && l.from >= t && l.to > e && (i = l);
        }
    }
    return i;
}
function de2(n) {
    let t = n.lastChild;
    return t && t.to == n.to && t.type.isError;
}
function V4(n, t, e) {
    for (let r of n.facet(fe2)){
        let s = r(n, t, e);
        if (s) return s;
    }
    return ce2(n, t, e);
}
function Tt1(n, t) {
    let e = t.mapPos(n.from, 1), r = t.mapPos(n.to, -1);
    return e >= r ? void 0 : {
        from: e,
        to: r
    };
}
var Q2 = y.define({
    map: Tt1
}), F3 = y.define({
    map: Tt1
});
function Dt1(n) {
    let t = [];
    for (let { head: e  } of n.state.selection.ranges)t.some((r)=>r.from <= e && r.to >= e) || t.push(n.lineBlockAt(e));
    return t;
}
var A4 = F.define({
    create () {
        return M1.none;
    },
    update (n, t) {
        n = n.map(t.changes);
        for (let e of t.effects)e.is(Q2) && !pe3(n, e.value.from, e.value.to) ? n = n.update({
            add: [
                ye3.range(e.value.from, e.value.to)
            ]
        }) : e.is(F3) && (n = n.update({
            filter: (r, s)=>e.value.from != r || e.value.to != s,
            filterFrom: e.value.from,
            filterTo: e.value.to
        }));
        if (t.selection) {
            let e1 = !1, { head: r  } = t.selection.main;
            n.between(r, r, (s, i)=>{
                s < r && i > r && (e1 = !0);
            }), e1 && (n = n.update({
                filterFrom: r,
                filterTo: r,
                filter: (s, i)=>i <= r || s >= r
            }));
        }
        return n;
    },
    provide: (n)=>C1.decorations.from(n)
});
function z2(n, t, e) {
    var r;
    let s = null;
    return (r = n.field(A4, !1)) === null || r === void 0 || r.between(t, e, (i, o)=>{
        (!s || s.from > i) && (s = {
            from: i,
            to: o
        });
    }), s;
}
function pe3(n, t, e) {
    let r = !1;
    return n.between(t, t, (s, i)=>{
        s == t && i == e && (r = !0);
    }), r;
}
function It1(n, t) {
    return n.field(A4, !1) ? t : t.concat(y.appendConfig.of(Nt1()));
}
var me3 = (n)=>{
    for (let t of Dt1(n)){
        let e = V4(n.state, t.from, t.to);
        if (e) return n.dispatch({
            effects: It1(n.state, [
                Q2.of(e),
                Ot1(n, e)
            ])
        }), !0;
    }
    return !1;
}, ge3 = (n)=>{
    if (!n.state.field(A4, !1)) return !1;
    let t = [];
    for (let e of Dt1(n)){
        let r = z2(n.state, e.from, e.to);
        r && t.push(F3.of(r), Ot1(n, r, !1));
    }
    return t.length && n.dispatch({
        effects: t
    }), t.length > 0;
};
function Ot1(n, t, e = !0) {
    let r = n.state.doc.lineAt(t.from).number, s = n.state.doc.lineAt(t.to).number;
    return C1.announce.of(`${n.state.phrase(e ? "Folded lines" : "Unfolded lines")} ${r} ${n.state.phrase("to")} ${s}.`);
}
var ke3 = (n)=>{
    let { state: t  } = n, e = [];
    for(let r = 0; r < t.doc.length;){
        let s = n.lineBlockAt(r), i = V4(t, s.from, s.to);
        i && e.push(Q2.of(i)), r = (i ? n.lineBlockAt(i.to) : s).to + 1;
    }
    return e.length && n.dispatch({
        effects: It1(n.state, e)
    }), !!e.length;
}, be2 = (n)=>{
    let t = n.state.field(A4, !1);
    if (!t || !t.size) return !1;
    let e = [];
    return t.between(0, n.state.doc.length, (r, s)=>{
        e.push(F3.of({
            from: r,
            to: s
        }));
    }), n.dispatch({
        effects: e
    }), !0;
}, _e3 = [
    {
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: me3
    },
    {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: ge3
    },
    {
        key: "Ctrl-Alt-[",
        run: ke3
    },
    {
        key: "Ctrl-Alt-]",
        run: be2
    }
], we2 = {
    placeholderDOM: null,
    placeholderText: "\u2026"
}, Bt1 = A.define({
    combine (n) {
        return ht(n, we2);
    }
});
function Nt1(n) {
    let t = [
        A4,
        xe2
    ];
    return n && t.push(Bt1.of(n)), t;
}
var ye3 = M1.replace({
    widget: new class extends X1 {
        toDOM(n) {
            let { state: t  } = n, e = t.facet(Bt1), r = (i)=>{
                let o = n.lineBlockAt(n.posAtDOM(i.target)), a = z2(n.state, o.from, o.to);
                a && n.dispatch({
                    effects: F3.of(a)
                }), i.preventDefault();
            };
            if (e.placeholderDOM) return e.placeholderDOM(n, r);
            let s = document.createElement("span");
            return s.textContent = e.placeholderText, s.setAttribute("aria-label", t.phrase("folded code")), s.title = t.phrase("unfold"), s.className = "cm-foldPlaceholder", s.onclick = r, s;
        }
    }
}), ve2 = {
    openText: "\u2304",
    closedText: "\u203A",
    markerDOM: null,
    domEventHandlers: {}
}, B4 = class extends _1 {
    constructor(t, e){
        super(), this.config = t, this.open = e;
    }
    eq(t) {
        return this.config == t.config && this.open == t.open;
    }
    toDOM(t) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let e = document.createElement("span");
        return e.textContent = this.open ? this.config.openText : this.config.closedText, e.title = t.state.phrase(this.open ? "Fold line" : "Unfold line"), e;
    }
};
function tn1(n = {}) {
    let t = Object.assign(Object.assign({}, ve2), n), e = new B4(t, !0), r = new B4(t, !1), s = V1.fromClass(class {
        constructor(o){
            this.from = o.viewport.from, this.markers = this.buildMarkers(o);
        }
        update(o) {
            (o.docChanged || o.viewportChanged || o.startState.facet(P4) != o.state.facet(P4) || o.startState.field(A4, !1) != o.state.field(A4, !1) || m2(o.startState) != m2(o.state)) && (this.markers = this.buildMarkers(o.view));
        }
        buildMarkers(o) {
            let a = new Z;
            for (let l of o.viewportLineBlocks){
                let h = z2(o.state, l.from, l.to) ? r : V4(o.state, l.from, l.to) ? e : null;
                h && a.add(l.from, l.from, h);
            }
            return a.finish();
        }
    }), { domEventHandlers: i  } = t;
    return [
        s,
        mo({
            class: "cm-foldGutter",
            markers (o) {
                var a;
                return ((a = o.plugin(s)) === null || a === void 0 ? void 0 : a.markers) || P.empty;
            },
            initialSpacer () {
                return new B4(t, !1);
            },
            domEventHandlers: Object.assign(Object.assign({}, i), {
                click: (o, a, l)=>{
                    if (i.click && i.click(o, a, l)) return !0;
                    let h = z2(o.state, a.from, a.to);
                    if (h) return o.dispatch({
                        effects: F3.of(h)
                    }), !0;
                    let u = V4(o.state, a.from, a.to);
                    return u ? (o.dispatch({
                        effects: Q2.of(u)
                    }), !0) : !1;
                }
            })
        }),
        Nt1()
    ];
}
var xe2 = C1.baseTheme({
    ".cm-foldPlaceholder": {
        backgroundColor: "#eee",
        border: "1px solid #ddd",
        color: "#888",
        borderRadius: ".2em",
        margin: "0 1px",
        padding: "0 1px",
        cursor: "pointer"
    },
    ".cm-foldGutter span": {
        padding: "0 1px",
        cursor: "pointer"
    }
}), D2 = class {
    constructor(t, e){
        let r;
        function s(a) {
            let l = T1.newName();
            return (r || (r = Object.create(null)))["." + l] = a, l;
        }
        let i = typeof e.all == "string" ? e.all : e.all ? s(e.all) : void 0, o = e.scope;
        this.scope = o instanceof c1 ? (a)=>a.prop(T5) == o.data : o ? (a)=>a == o : void 0, this.style = W2(t.map((a)=>({
                tag: a.tag,
                class: a.class || s(Object.assign({}, a, {
                    tag: null
                }))
            })), {
            all: i
        }).style, this.module = r ? new T1(r) : null, this.themeType = e.themeType;
    }
    static define(t, e) {
        return new D2(t, e || {});
    }
}, nt2 = A.define(), Mt = A.define({
    combine (n) {
        return n.length ? [
            n[0]
        ] : null;
    }
});
function W3(n) {
    let t = n.facet(nt2);
    return t.length ? t : n.facet(Mt);
}
function en1(n, t) {
    let e = [
        Se3
    ], r;
    return n instanceof D2 && (n.module && e.push(C1.styleModule.of(n.module)), r = n.themeType), t?.fallback ? e.push(Mt.of(n)) : r ? e.push(nt2.computeN([
        C1.darkTheme
    ], (s)=>s.facet(C1.darkTheme) == (r == "dark") ? [
            n
        ] : [])) : e.push(nt2.of(n)), e;
}
var rt2 = class {
    constructor(t){
        this.markCache = Object.create(null), this.tree = m2(t.state), this.decorations = this.buildDeco(t, W3(t.state));
    }
    update(t) {
        let e = m2(t.state), r = W3(t.state), s = r != W3(t.startState);
        e.length < t.view.viewport.to && !s && e.type == this.tree.type ? this.decorations = this.decorations.map(t.changes) : (e != this.tree || t.viewportChanged || s) && (this.tree = e, this.decorations = this.buildDeco(t.view, r));
    }
    buildDeco(t, e) {
        if (!e || !this.tree.length) return M1.none;
        let r = new Z;
        for (let { from: s , to: i  } of t.visibleRanges)$2(this.tree, e, (o, a, l)=>{
            r.add(o, a, this.markCache[l] || (this.markCache[l] = M1.mark({
                class: l
            })));
        }, s, i);
        return r.finish();
    }
}, Se3 = lt.high(V1.fromClass(rt2, {
    decorations: (n)=>n.decorations
})), rn1 = D2.define([
    {
        tag: s1.meta,
        color: "#7a757a"
    },
    {
        tag: s1.link,
        textDecoration: "underline"
    },
    {
        tag: s1.heading,
        textDecoration: "underline",
        fontWeight: "bold"
    },
    {
        tag: s1.emphasis,
        fontStyle: "italic"
    },
    {
        tag: s1.strong,
        fontWeight: "bold"
    },
    {
        tag: s1.strikethrough,
        textDecoration: "line-through"
    },
    {
        tag: s1.keyword,
        color: "#708"
    },
    {
        tag: [
            s1.atom,
            s1.bool,
            s1.url,
            s1.contentSeparator,
            s1.labelName
        ],
        color: "#219"
    },
    {
        tag: [
            s1.literal,
            s1.inserted
        ],
        color: "#164"
    },
    {
        tag: [
            s1.string,
            s1.deleted
        ],
        color: "#a11"
    },
    {
        tag: [
            s1.regexp,
            s1.escape,
            s1.special(s1.string)
        ],
        color: "#e40"
    },
    {
        tag: s1.definition(s1.variableName),
        color: "#00f"
    },
    {
        tag: s1.local(s1.variableName),
        color: "#30a"
    },
    {
        tag: [
            s1.typeName,
            s1.namespace
        ],
        color: "#085"
    },
    {
        tag: s1.className,
        color: "#167"
    },
    {
        tag: [
            s1.special(s1.variableName),
            s1.macroName
        ],
        color: "#256"
    },
    {
        tag: s1.definition(s1.propertyName),
        color: "#00c"
    },
    {
        tag: s1.comment,
        color: "#940"
    },
    {
        tag: s1.invalid,
        color: "#f00"
    }
]), Pe2 = C1.baseTheme({
    "&.cm-focused .cm-matchingBracket": {
        backgroundColor: "#328c8252"
    },
    "&.cm-focused .cm-nonmatchingBracket": {
        backgroundColor: "#bb555544"
    }
}), Et1 = 1e4, Ft1 = "()[]{}", Rt = A.define({
    combine (n) {
        return ht(n, {
            afterCursor: !0,
            brackets: Ft1,
            maxScanDistance: Et1,
            renderMatch: Te1
        });
    }
}), Ae3 = M1.mark({
    class: "cm-matchingBracket"
}), Ce3 = M1.mark({
    class: "cm-nonmatchingBracket"
});
function Te1(n) {
    let t = [], e = n.matched ? Ae3 : Ce3;
    return t.push(e.range(n.start.from, n.start.to)), n.end && t.push(e.range(n.end.from, n.end.to)), t;
}
var De2 = F.define({
    create () {
        return M1.none;
    },
    update (n, t) {
        if (!t.docChanged && !t.selection) return n;
        let e = [], r = t.state.facet(Rt);
        for (let s of t.state.selection.ranges){
            if (!s.empty) continue;
            let i = R3(t.state, s.head, -1, r) || s.head > 0 && R3(t.state, s.head - 1, 1, r) || r.afterCursor && (R3(t.state, s.head, 1, r) || s.head < t.state.doc.length && R3(t.state, s.head + 1, -1, r));
            i && (e = e.concat(r.renderMatch(i, t.state)));
        }
        return M1.set(e, !0);
    },
    provide: (n)=>C1.decorations.from(n)
}), Ie2 = [
    De2,
    Pe2
];
function sn1(n = {}) {
    return [
        Rt.of(n),
        Ie2
    ];
}
function st2(n, t, e) {
    let r = n.prop(t < 0 ? w2.openedBy : w2.closedBy);
    if (r) return r;
    if (n.name.length == 1) {
        let s = e.indexOf(n.name);
        if (s > -1 && s % 2 == (t < 0 ? 1 : 0)) return [
            e[s + t]
        ];
    }
    return null;
}
function R3(n, t, e, r = {}) {
    let s = r.maxScanDistance || Et1, i = r.brackets || Ft1, o = m2(n), a = o.resolveInner(t, e);
    for(let l = a; l; l = l.parent){
        let h = st2(l.type, e, i);
        if (h && l.from < l.to) return Oe2(n, t, e, l, h, i);
    }
    return Be2(n, t, e, o, a.type, s, i);
}
function Oe2(n, t, e, r, s, i) {
    let o = r.parent, a = {
        from: r.from,
        to: r.to
    }, l = 0, h = o?.cursor();
    if (h && (e < 0 ? h.childBefore(r.from) : h.childAfter(r.to))) do if (e < 0 ? h.to <= r.from : h.from >= r.to) {
        if (l == 0 && s.indexOf(h.type.name) > -1 && h.from < h.to) return {
            start: a,
            end: {
                from: h.from,
                to: h.to
            },
            matched: !0
        };
        if (st2(h.type, e, i)) l++;
        else if (st2(h.type, -e, i) && (l--, l == 0)) return {
            start: a,
            end: h.from == h.to ? void 0 : {
                from: h.from,
                to: h.to
            },
            matched: !1
        };
    }
    while (e < 0 ? h.prevSibling() : h.nextSibling())
    return {
        start: a,
        matched: !1
    };
}
function Be2(n, t, e, r, s, i, o) {
    let a = e < 0 ? n.sliceDoc(t - 1, t) : n.sliceDoc(t, t + 1), l = o.indexOf(a);
    if (l < 0 || l % 2 == 0 != e > 0) return null;
    let h = {
        from: e < 0 ? t - 1 : t,
        to: e > 0 ? t + 1 : t
    }, u = n.doc.iterRange(t, e > 0 ? n.doc.length : 0), d = 0;
    for(let g = 0; !u.next().done && g <= i;){
        let b = u.value;
        e < 0 && (g += b.length);
        let X = t + g * e;
        for(let C = e > 0 ? 0 : b.length - 1, $t = e > 0 ? b.length : -1; C != $t; C += e){
            let Y = o.indexOf(b[C]);
            if (!(Y < 0 || r.resolve(X + C, 1).type != s)) if (Y % 2 == 0 == e > 0) d++;
            else {
                if (d == 1) return {
                    start: h,
                    end: {
                        from: X + C,
                        to: X + C + 1
                    },
                    matched: Y >> 1 == l >> 1
                };
                d--;
            }
        }
        e > 0 && (g += b.length);
    }
    return u.done ? {
        start: h,
        matched: !1
    } : null;
}
function pt1(n, t, e, r = 0, s = 0) {
    t == null && (t = n.search(/[^\s\u00a0]/), t == -1 && (t = n.length));
    let i = s;
    for(let o = r; o < t; o++)n.charCodeAt(o) == 9 ? i += e - i % e : i++;
    return i;
}
var G3 = class {
    constructor(t, e, r){
        this.string = t, this.tabSize = e, this.indentUnit = r, this.pos = 0, this.start = 0, this.lastColumnPos = 0, this.lastColumnValue = 0;
    }
    eol() {
        return this.pos >= this.string.length;
    }
    sol() {
        return this.pos == 0;
    }
    peek() {
        return this.string.charAt(this.pos) || void 0;
    }
    next() {
        if (this.pos < this.string.length) return this.string.charAt(this.pos++);
    }
    eat(t) {
        let e = this.string.charAt(this.pos), r;
        if (typeof t == "string" ? r = e == t : r = e && (t instanceof RegExp ? t.test(e) : t(e)), r) return ++this.pos, e;
    }
    eatWhile(t) {
        let e = this.pos;
        for(; this.eat(t););
        return this.pos > e;
    }
    eatSpace() {
        let t = this.pos;
        for(; /[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;
        return this.pos > t;
    }
    skipToEnd() {
        this.pos = this.string.length;
    }
    skipTo(t) {
        let e = this.string.indexOf(t, this.pos);
        if (e > -1) return this.pos = e, !0;
    }
    backUp(t) {
        this.pos -= t;
    }
    column() {
        return this.lastColumnPos < this.start && (this.lastColumnValue = pt1(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue;
    }
    indentation() {
        return pt1(this.string, null, this.tabSize);
    }
    match(t, e, r) {
        if (typeof t == "string") {
            let s = (o)=>r ? o.toLowerCase() : o, i = this.string.substr(this.pos, t.length);
            return s(i) == s(t) ? (e !== !1 && (this.pos += t.length), !0) : null;
        } else {
            let s1 = this.string.slice(this.pos).match(t);
            return s1 && s1.index > 0 ? null : (s1 && e !== !1 && (this.pos += s1[0].length), s1);
        }
    }
    current() {
        return this.string.slice(this.start, this.pos);
    }
};
function Ne2(n) {
    return {
        token: n.token,
        blankLine: n.blankLine || (()=>{}),
        startState: n.startState || (()=>!0),
        copyState: n.copyState || Me2,
        indent: n.indent || (()=>null),
        languageData: n.languageData || {},
        tokenTable: n.tokenTable || ht1
    };
}
function Me2(n) {
    if (typeof n != "object") return n;
    let t = {};
    for(let e in n){
        let r = n[e];
        t[e] = r instanceof Array ? r.slice() : r;
    }
    return t;
}
var q4 = class extends c1 {
    constructor(t){
        let e = yt1(t.languageData), r = Ne2(t), s, i = new class extends ye2 {
            createParse(o, a, l) {
                return new it2(s, o, a, l);
            }
        };
        super(e, i, [
            St1.of((o, a)=>this.getIndent(o, a))
        ]), this.topNode = Ue2(e), s = this, this.streamParser = r, this.stateAfter = new w2({
            perNode: !0
        }), this.tokenTable = t.tokenTable ? new H2(r.tokenTable) : Re2;
    }
    static define(t) {
        return new q4(t);
    }
    getIndent(t, e) {
        let r = m2(t.state), s = r.resolve(e);
        for(; s && s.type != this.topNode;)s = s.parent;
        if (!s) return null;
        let i = at1(this, r, 0, s.from, e), o, a;
        if (i ? (a = i.state, o = i.pos + 1) : (a = this.streamParser.startState(t.unit), o = 0), e - o > 1e4) return null;
        for(; o < e;){
            let h = t.state.doc.lineAt(o), u = Math.min(e, h.to);
            if (h.length) {
                let d = new G3(h.text, t.state.tabSize, t.unit);
                for(; d.pos < u - h.from;)Wt1(this.streamParser.token, d, a);
            } else this.streamParser.blankLine(a, t.unit);
            if (u == e) break;
            o = h.to + 1;
        }
        let { text: l  } = t.lineAt(e);
        return this.streamParser.indent(a, /^\s*(.*)/.exec(l)[1], t);
    }
    get allowsNesting() {
        return !1;
    }
};
function at1(n, t, e, r, s) {
    let i = e >= r && e + t.length <= s && t.prop(n.stateAfter);
    if (i) return {
        state: n.streamParser.copyState(i),
        pos: e + t.length
    };
    for(let o = t.children.length - 1; o >= 0; o--){
        let a = t.children[o], l = e + t.positions[o], h = a instanceof P2 && l < s && at1(n, a, l, r, s);
        if (h) return h;
    }
    return null;
}
function Ut1(n, t, e, r, s) {
    if (s && e <= 0 && r >= t.length) return t;
    !s && t.type == n.topNode && (s = !0);
    for(let i = t.children.length - 1; i >= 0; i--){
        let o = t.positions[i], a = t.children[i], l;
        if (o < r && a instanceof P2) {
            if (!(l = Ut1(n, a, e - o, r - o, s))) break;
            return s ? new P2(t.type, t.children.slice(0, i).concat(l), t.positions.slice(0, i + 1), o + l.length) : l;
        }
    }
    return null;
}
function Ee2(n, t, e, r) {
    for (let s of t){
        let i = s.from + (s.openStart ? 25 : 0), o = s.to - (s.openEnd ? 25 : 0), a = i <= e && o > e && at1(n, s.tree, 0 - s.offset, e, o), l;
        if (a && (l = Ut1(n, s.tree, e + s.offset, a.pos + s.offset, !1))) return {
            state: a.state,
            tree: l
        };
    }
    return {
        state: n.streamParser.startState(r ? j3(r) : 4),
        tree: P2.empty
    };
}
var it2 = class {
    constructor(t, e, r, s){
        this.lang = t, this.input = e, this.fragments = r, this.ranges = s, this.stoppedAt = null, this.chunks = [], this.chunkPos = [], this.chunk = [], this.chunkReused = void 0, this.rangeIndex = 0, this.to = s[s.length - 1].to;
        let i = x2.get(), o = s[0].from, { state: a , tree: l  } = Ee2(t, r, o, i?.state);
        this.state = a, this.parsedPos = this.chunkStart = o + l.length;
        for(let h = 0; h < l.children.length; h++)this.chunks.push(l.children[h]), this.chunkPos.push(l.positions[h]);
        i && this.parsedPos < i.viewport.from - 1e5 && (this.state = this.lang.streamParser.startState(j3(i.state)), i.skipUntilInView(this.parsedPos, i.viewport.from), this.parsedPos = i.viewport.from), this.moveRangeIndex();
    }
    advance() {
        let t = x2.get(), e = this.stoppedAt == null ? this.to : Math.min(this.to, this.stoppedAt), r = Math.min(e, this.chunkStart + 2048);
        for(t && (r = Math.min(r, t.viewport.to)); this.parsedPos < r;)this.parseLine(t);
        return this.chunkStart < this.parsedPos && this.finishChunk(), this.parsedPos >= e ? this.finish() : t && this.parsedPos >= t.viewport.to ? (t.skipUntilInView(this.parsedPos, e), this.finish()) : null;
    }
    stopAt(t) {
        this.stoppedAt = t;
    }
    lineAfter(t) {
        let e = this.input.chunk(t);
        if (this.input.lineChunks) e == `
` && (e = "");
        else {
            let r = e.indexOf(`
`);
            r > -1 && (e = e.slice(0, r));
        }
        return t + e.length <= this.to ? e : e.slice(0, this.to - t);
    }
    nextLine() {
        let t = this.parsedPos, e = this.lineAfter(t), r = t + e.length;
        for(let s = this.rangeIndex;;){
            let i = this.ranges[s].to;
            if (i >= r || (e = e.slice(0, i - (r - e.length)), s++, s == this.ranges.length)) break;
            let o = this.ranges[s].from, a = this.lineAfter(o);
            e += a, r = o + a.length;
        }
        return {
            line: e,
            end: r
        };
    }
    skipGapsTo(t, e, r) {
        for(;;){
            let s = this.ranges[this.rangeIndex].to, i = t + e;
            if (r > 0 ? s > i : s >= i) break;
            e += this.ranges[++this.rangeIndex].from - s;
        }
        return e;
    }
    moveRangeIndex() {
        for(; this.ranges[this.rangeIndex].to < this.parsedPos;)this.rangeIndex++;
    }
    emitToken(t, e, r, s, i) {
        if (this.ranges.length > 1) {
            i = this.skipGapsTo(e, i, 1), e += i;
            let o = this.chunk.length;
            i = this.skipGapsTo(r, i, -1), r += i, s += this.chunk.length - o;
        }
        return this.chunk.push(t, e, r, s), i;
    }
    parseLine(t) {
        let { line: e , end: r  } = this.nextLine(), s = 0, { streamParser: i  } = this.lang, o = new G3(e, t ? t.state.tabSize : 4, t ? j3(t.state) : 2);
        if (o.eol()) i.blankLine(this.state, o.indentUnit);
        else for(; !o.eol();){
            let a = Wt1(i.token, o, this.state);
            if (a && (s = this.emitToken(this.lang.tokenTable.resolve(a), this.parsedPos + o.start, this.parsedPos + o.pos, 4, s)), o.start > 1e4) break;
        }
        this.parsedPos = r, this.moveRangeIndex(), this.parsedPos < this.to && this.parsedPos++;
    }
    finishChunk() {
        let t = P2.build({
            buffer: this.chunk,
            start: this.chunkStart,
            length: this.parsedPos - this.chunkStart,
            nodeSet: Fe2,
            topID: 0,
            maxBufferLength: 2048,
            reused: this.chunkReused
        });
        t = new P2(t.type, t.children, t.positions, t.length, [
            [
                this.lang.stateAfter,
                this.lang.streamParser.copyState(this.state)
            ]
        ]), this.chunks.push(t), this.chunkPos.push(this.chunkStart - this.ranges[0].from), this.chunk = [], this.chunkReused = void 0, this.chunkStart = this.parsedPos;
    }
    finish() {
        return new P2(this.lang.topNode, this.chunks, this.chunkPos, this.parsedPos - this.ranges[0].from).balance();
    }
};
function Wt1(n, t, e) {
    t.start = t.pos;
    for(let r = 0; r < 10; r++){
        let s = n(t, e);
        if (t.pos > t.start) return s;
    }
    throw new Error("Stream parser failed to advance stream.");
}
var ht1 = Object.create(null), E1 = [
    N2.none
], Fe2 = new Z1(E1), mt1 = [], Lt1 = Object.create(null);
for (let [n2, t3] of [
    [
        "variable",
        "variableName"
    ],
    [
        "variable-2",
        "variableName.special"
    ],
    [
        "string-2",
        "string.special"
    ],
    [
        "def",
        "variableName.definition"
    ],
    [
        "tag",
        "typeName"
    ],
    [
        "attribute",
        "propertyName"
    ],
    [
        "type",
        "typeName"
    ],
    [
        "builtin",
        "variableName.standard"
    ],
    [
        "qualifier",
        "modifier"
    ],
    [
        "error",
        "invalid"
    ],
    [
        "header",
        "heading"
    ],
    [
        "property",
        "propertyName"
    ]
])Lt1[n2] = jt1(ht1, t3);
var H2 = class {
    constructor(t){
        this.extra = t, this.table = Object.assign(Object.create(null), Lt1);
    }
    resolve(t) {
        return t ? this.table[t] || (this.table[t] = jt1(this.extra, t)) : 0;
    }
}, Re2 = new H2(ht1);
function tt1(n, t) {
    mt1.indexOf(n) > -1 || (mt1.push(n), console.warn(t));
}
function jt1(n, t) {
    let e = null;
    for (let i of t.split(".")){
        let o = n[i] || s1[i];
        o ? typeof o == "function" ? e ? e = o(e) : tt1(i, `Modifier ${i} used at start of tag`) : e ? tt1(i, `Tag ${i} used as modifier`) : e = o : tt1(i, `Unknown highlighting tag ${i}`);
    }
    if (!e) return 0;
    let r = t.replace(/ /g, "_"), s = N2.define({
        id: E1.length,
        name: r,
        props: [
            Z2({
                [r]: e
            })
        ]
    });
    return E1.push(s), s.id;
}
function Ue2(n) {
    let t = N2.define({
        id: E1.length,
        name: "Document",
        props: [
            T5.add(()=>n)
        ]
    });
    return E1.push(t), t;
}
var ot1 = (e)=>{
    let t = j4(e.state);
    return t.line ? lt2(e) : t.block ? st3(e) : !1;
};
function C3(e, t) {
    return ({ state: r , dispatch: n  })=>{
        if (r.readOnly) return !1;
        let l = e(t, r);
        return l ? (n(r.update(l)), !0) : !1;
    };
}
var lt2 = C3(ee4, 0), on1 = C3(ee4, 1), ln1 = C3(ee4, 2), ct2 = C3(w4, 0), cn = C3(w4, 1), sn2 = C3(w4, 2), st3 = C3((e, t)=>w4(e, t, ut2(t)), 0);
function j4(e, t = e.selection.main.head) {
    let r = e.languageDataAt("commentTokens", t);
    return r.length ? r[0] : {};
}
var M5 = 50;
function it3(e, { open: t , close: r  }, n, l) {
    let o = e.sliceDoc(n - M5, n), c = e.sliceDoc(l, l + M5), s = /\s*$/.exec(o)[0].length, i = /^\s*/.exec(c)[0].length, u = o.length - s;
    if (o.slice(u - t.length, u) == t && c.slice(i, i + r.length) == r) return {
        open: {
            pos: n - s,
            margin: s && 1
        },
        close: {
            pos: l + i,
            margin: i && 1
        }
    };
    let f, a;
    l - n <= 2 * M5 ? f = a = e.sliceDoc(n, l) : (f = e.sliceDoc(n, n + M5), a = e.sliceDoc(l - M5, l));
    let d = /^\s*/.exec(f)[0].length, S = /\s*$/.exec(a)[0].length, L = a.length - S - r.length;
    return f.slice(d, d + t.length) == t && a.slice(L, L + r.length) == r ? {
        open: {
            pos: n + d + t.length,
            margin: /\s/.test(f.charAt(d + t.length)) ? 1 : 0
        },
        close: {
            pos: l - S - r.length,
            margin: /\s/.test(a.charAt(L - 1)) ? 1 : 0
        }
    } : null;
}
function ut2(e) {
    let t = [];
    for (let r of e.selection.ranges){
        let n = e.doc.lineAt(r.from), l = r.to <= n.to ? n : e.doc.lineAt(r.to), o = t.length - 1;
        o >= 0 && t[o].to > n.from ? t[o].to = l.to : t.push({
            from: n.from,
            to: l.to
        });
    }
    return t;
}
function w4(e, t, r = t.selection.ranges) {
    let n = r.map((o)=>j4(t, o.from).block);
    if (!n.every((o)=>o)) return null;
    let l = r.map((o, c)=>it3(t, n[c], o.from, o.to));
    if (e != 2 && !l.every((o)=>o)) return {
        changes: t.changes(r.map((o, c)=>l[c] ? [] : [
                {
                    from: o.from,
                    insert: n[c].open + " "
                },
                {
                    from: o.to,
                    insert: " " + n[c].close
                }
            ]))
    };
    if (e != 1 && l.some((o)=>o)) {
        let o = [];
        for(let c = 0, s; c < l.length; c++)if (s = l[c]) {
            let i = n[c], { open: u , close: f  } = s;
            o.push({
                from: u.pos - i.open.length,
                to: u.pos + u.margin
            }, {
                from: f.pos - f.margin,
                to: f.pos + i.close.length
            });
        }
        return {
            changes: o
        };
    }
    return null;
}
function ee4(e, t, r = t.selection.ranges) {
    let n = [], l = -1;
    for (let { from: o , to: c  } of r){
        let s = n.length, i = 1e9;
        for(let u = o; u <= c;){
            let f = t.doc.lineAt(u);
            if (f.from > l && (o == c || c > f.from)) {
                l = f.from;
                let a = j4(t, u).line;
                if (!a) continue;
                let d = /^\s*/.exec(f.text)[0].length, S = d == f.length, L = f.text.slice(d, d + a.length) == a ? d : -1;
                d < f.text.length && d < i && (i = d), n.push({
                    line: f,
                    comment: L,
                    token: a,
                    indent: d,
                    empty: S,
                    single: !1
                });
            }
            u = f.to + 1;
        }
        if (i < 1e9) for(let u1 = s; u1 < n.length; u1++)n[u1].indent < n[u1].line.text.length && (n[u1].indent = i);
        n.length == s + 1 && (n[s].single = !0);
    }
    if (e != 2 && n.some((o)=>o.comment < 0 && (!o.empty || o.single))) {
        let o1 = [];
        for (let { line: s1 , token: i1 , indent: u2 , empty: f1 , single: a1  } of n)(a1 || !f1) && o1.push({
            from: s1.from + u2,
            insert: i1 + " "
        });
        let c1 = t.changes(o1);
        return {
            changes: c1,
            selection: t.selection.map(c1, 1)
        };
    } else if (e != 1 && n.some((o)=>o.comment >= 0)) {
        let o2 = [];
        for (let { line: c2 , comment: s2 , token: i2  } of n)if (s2 >= 0) {
            let u3 = c2.from + s2, f2 = u3 + i2.length;
            c2.text[f2 - c2.from] == " " && f2++, o2.push({
                from: u3,
                to: f2
            });
        }
        return {
            changes: o2
        };
    }
    return null;
}
var X4 = N.define(), ft = N.define(), at2 = A.define(), Be3 = A.define({
    combine (e) {
        return ht(e, {
            minDepth: 100,
            newGroupDelay: 500
        }, {
            minDepth: Math.max,
            newGroupDelay: Math.min
        });
    }
});
function ht2(e) {
    let t = 0;
    return e.iterChangedRanges((r, n)=>t = n), t;
}
var U3 = F.define({
    create () {
        return g3.empty;
    },
    update (e, t) {
        let r = t.state.facet(Be3), n = t.annotation(X4);
        if (n) {
            let i = t.docChanged ? g.single(ht2(t.changes)) : void 0, u = m3.fromTransaction(t, i), f = n.side, a = f == 0 ? e.undone : e.done;
            return u ? a = R4(a, a.length, r.minDepth, u) : a = Le2(a, t.startState.selection), new g3(f == 0 ? n.rest : a, f == 0 ? a : n.rest);
        }
        let l = t.annotation(ft);
        if ((l == "full" || l == "before") && (e = e.isolate()), t.annotation(S.addToHistory) === !1) return t.changes.empty ? e : e.addMapping(t.changes.desc);
        let o = m3.fromTransaction(t), c = t.annotation(S.time), s = t.annotation(S.userEvent);
        return o ? e = e.addChanges(o, c, s, r.newGroupDelay, r.minDepth) : t.selection && (e = e.addSelection(t.startState.selection, c, s, r.newGroupDelay)), (l == "full" || l == "after") && (e = e.isolate()), e;
    },
    toJSON (e) {
        return {
            done: e.done.map((t)=>t.toJSON()),
            undone: e.undone.map((t)=>t.toJSON())
        };
    },
    fromJSON (e) {
        return new g3(e.done.map(m3.fromJSON), e.undone.map(m3.fromJSON));
    }
});
function un(e = {}) {
    return [
        U3,
        Be3.of(e),
        C1.domEventHandlers({
            beforeinput (t, r) {
                let n = t.inputType == "historyUndo" ? Se4 : t.inputType == "historyRedo" ? Ce4 : null;
                return n ? (t.preventDefault(), n(r)) : !1;
            }
        })
    ];
}
function N5(e, t) {
    return function({ state: r , dispatch: n  }) {
        if (!t && r.readOnly) return !1;
        let l = r.field(U3, !1);
        if (!l) return !1;
        let o = l.pop(e, r, t);
        return o ? (n(o), !0) : !1;
    };
}
var Se4 = N5(0, !1), Ce4 = N5(1, !1), dt1 = N5(0, !0), mt2 = N5(1, !0);
function De3(e) {
    return function(t) {
        let r = t.field(U3, !1);
        if (!r) return 0;
        let n = e == 0 ? r.done : r.undone;
        return n.length - (n.length && !n[0].changes ? 1 : 0);
    };
}
var an1 = De3(0), hn1 = De3(1), m3 = class {
    constructor(t, r, n, l, o){
        this.changes = t, this.effects = r, this.mapped = n, this.startSelection = l, this.selectionsAfter = o;
    }
    setSelAfter(t) {
        return new m3(this.changes, this.effects, this.mapped, this.startSelection, t);
    }
    toJSON() {
        var t, r, n;
        return {
            changes: (t = this.changes) === null || t === void 0 ? void 0 : t.toJSON(),
            mapped: (r = this.mapped) === null || r === void 0 ? void 0 : r.toJSON(),
            startSelection: (n = this.startSelection) === null || n === void 0 ? void 0 : n.toJSON(),
            selectionsAfter: this.selectionsAfter.map((l)=>l.toJSON())
        };
    }
    static fromJSON(t) {
        return new m3(t.changes && x.fromJSON(t.changes), [], t.mapped && O.fromJSON(t.mapped), t.startSelection && g.fromJSON(t.startSelection), t.selectionsAfter.map(g.fromJSON));
    }
    static fromTransaction(t, r) {
        let n = p2;
        for (let l of t.startState.facet(at2)){
            let o = l(t);
            o.length && (n = n.concat(o));
        }
        return !n.length && t.changes.empty ? null : new m3(t.changes.invert(t.startState.doc), n, void 0, r || t.startState.selection, p2);
    }
    static selection(t) {
        return new m3(void 0, p2, void 0, void 0, t);
    }
};
function R4(e, t, r, n) {
    let l = t + 1 > r + 20 ? t - r - 1 : 0, o = e.slice(l, t);
    return o.push(n), o;
}
function pt2(e, t) {
    let r = [], n = !1;
    return e.iterChangedRanges((l, o)=>r.push(l, o)), t.iterChangedRanges((l, o, c, s)=>{
        for(let i = 0; i < r.length;){
            let u = r[i++], f = r[i++];
            s >= u && c <= f && (n = !0);
        }
    }), n;
}
function gt(e, t) {
    return e.ranges.length == t.ranges.length && e.ranges.filter((r, n)=>r.empty != t.ranges[n].empty).length === 0;
}
function xe3(e, t) {
    return e.length ? t.length ? e.concat(t) : e : t;
}
var p2 = [], yt2 = 200;
function Le2(e, t) {
    if (e.length) {
        let r = e[e.length - 1], n = r.selectionsAfter.slice(Math.max(0, r.selectionsAfter.length - yt2));
        return n.length && n[n.length - 1].eq(t) ? e : (n.push(t), R4(e, e.length - 1, 1e9, r.setSelAfter(n)));
    } else return [
        m3.selection([
            t
        ])
    ];
}
function kt1(e) {
    let t = e[e.length - 1], r = e.slice();
    return r[e.length - 1] = t.setSelAfter(t.selectionsAfter.slice(0, t.selectionsAfter.length - 1)), r;
}
function W4(e, t) {
    if (!e.length) return e;
    let r = e.length, n = p2;
    for(; r;){
        let l = At2(e[r - 1], t, n);
        if (l.changes && !l.changes.empty || l.effects.length) {
            let o = e.slice(0, r);
            return o[r - 1] = l, o;
        } else t = l.mapped, r--, n = l.selectionsAfter;
    }
    return n.length ? [
        m3.selection(n)
    ] : p2;
}
function At2(e, t, r) {
    let n = xe3(e.selectionsAfter.length ? e.selectionsAfter.map((s)=>s.map(t)) : p2, r);
    if (!e.changes) return m3.selection(n);
    let l = e.changes.map(t), o = t.mapDesc(e.changes, !0), c = e.mapped ? e.mapped.composeDesc(o) : o;
    return new m3(l, y.mapEffects(e.effects, t), c, e.startSelection.map(o), n);
}
var Bt2 = /^(input\.type|delete)($|\.)/, g3 = class {
    constructor(t, r, n = 0, l = void 0){
        this.done = t, this.undone = r, this.prevTime = n, this.prevUserEvent = l;
    }
    isolate() {
        return this.prevTime ? new g3(this.done, this.undone) : this;
    }
    addChanges(t, r, n, l, o) {
        let c = this.done, s = c[c.length - 1];
        return s && s.changes && !s.changes.empty && t.changes && (!n || Bt2.test(n)) && (!s.selectionsAfter.length && r - this.prevTime < l && pt2(s.changes, t.changes) || n == "input.type.compose") ? c = R4(c, c.length - 1, o, new m3(t.changes.compose(s.changes), xe3(t.effects, s.effects), s.mapped, s.startSelection, p2)) : c = R4(c, c.length, o, t), new g3(c, p2, r, n);
    }
    addSelection(t, r, n, l) {
        let o = this.done.length ? this.done[this.done.length - 1].selectionsAfter : p2;
        return o.length > 0 && r - this.prevTime < l && n == this.prevUserEvent && n && /^select($|\.)/.test(n) && gt(o[o.length - 1], t) ? this : new g3(Le2(this.done, t), this.undone, r, n);
    }
    addMapping(t) {
        return new g3(W4(this.done, t), W4(this.undone, t), this.prevTime, this.prevUserEvent);
    }
    pop(t, r, n) {
        let l = t == 0 ? this.done : this.undone;
        if (l.length == 0) return null;
        let o = l[l.length - 1];
        if (n && o.selectionsAfter.length) return r.update({
            selection: o.selectionsAfter[o.selectionsAfter.length - 1],
            annotations: X4.of({
                side: t,
                rest: kt1(l)
            }),
            userEvent: t == 0 ? "select.undo" : "select.redo",
            scrollIntoView: !0
        });
        if (o.changes) {
            let c = l.length == 1 ? p2 : l.slice(0, l.length - 1);
            return o.mapped && (c = W4(c, o.mapped)), r.update({
                changes: o.changes,
                selection: o.startSelection,
                effects: o.effects,
                annotations: X4.of({
                    side: t,
                    rest: c
                }),
                filter: !1,
                userEvent: t == 0 ? "undo" : "redo",
                scrollIntoView: !0
            });
        } else return null;
    }
};
g3.empty = new g3(p2, p2);
var dn = [
    {
        key: "Mod-z",
        run: Se4,
        preventDefault: !0
    },
    {
        key: "Mod-y",
        mac: "Mod-Shift-z",
        run: Ce4,
        preventDefault: !0
    },
    {
        key: "Mod-u",
        run: dt1,
        preventDefault: !0
    },
    {
        key: "Alt-u",
        mac: "Mod-Shift-u",
        run: mt2,
        preventDefault: !0
    }
];
function x3(e, t) {
    return g.create(e.ranges.map(t), e.mainIndex);
}
function A5(e, t) {
    return e.update({
        selection: t,
        scrollIntoView: !0,
        userEvent: "select"
    });
}
function B5({ state: e , dispatch: t  }, r) {
    let n = x3(e.selection, r);
    return n.eq(e.selection) ? !1 : (t(A5(e, n)), !0);
}
function O2(e, t) {
    return g.cursor(t ? e.to : e.from);
}
function v1(e, t) {
    return B5(e, (r)=>r.empty ? e.moveByChar(r, t) : O2(r, t));
}
function y3(e) {
    return e.textDirectionAt(e.state.selection.main.head) == R1.LTR;
}
var Me3 = (e)=>v1(e, !y3(e)), Oe3 = (e)=>v1(e, y3(e));
function G4(e, t) {
    return B5(e, (r)=>r.empty ? e.moveByGroup(r, t) : O2(r, t));
}
var St2 = (e)=>G4(e, !y3(e)), Ct1 = (e)=>G4(e, y3(e));
function Dt2(e, t, r) {
    if (t.type.prop(r)) return !0;
    let n = t.to - t.from;
    return n && (n > 2 || /[^\s,.;:]/.test(e.sliceDoc(t.from, t.to))) || t.firstChild;
}
function V5(e, t, r) {
    let n = m2(e).resolveInner(t.head), l = r ? w2.closedBy : w2.openedBy;
    for(let i = t.head;;){
        let u = r ? n.childAfter(i) : n.childBefore(i);
        if (!u) break;
        Dt2(e, u, l) ? n = u : i = r ? u.to : u.from;
    }
    let o = n.type.prop(l), c, s;
    return o && (c = r ? R3(e, n.from, 1) : R3(e, n.to, -1)) && c.matched ? s = r ? c.end.to : c.end.from : s = r ? n.to : n.from, g.cursor(s, r ? -1 : 1);
}
var xt2 = (e)=>B5(e, (t)=>V5(e.state, t, !y3(e))), Lt2 = (e)=>B5(e, (t)=>V5(e.state, t, y3(e)));
function Te2(e, t) {
    return B5(e, (r)=>{
        if (!r.empty) return O2(r, t);
        let n = e.moveVertically(r, t);
        return n.head != r.head ? n : e.moveToLineBoundary(r, t);
    });
}
var Ie3 = (e)=>Te2(e, !1), Re3 = (e)=>Te2(e, !0);
function we3(e, t) {
    let { state: r  } = e, n = x3(r.selection, (s)=>s.empty ? e.moveVertically(s, t, Math.min(e.dom.clientHeight, innerHeight)) : O2(s, t));
    if (n.eq(r.selection)) return !1;
    let l = e.coordsAtPos(r.selection.main.head), o = e.scrollDOM.getBoundingClientRect(), c;
    return l && l.top > o.top && l.bottom < o.bottom && l.top - o.top <= e.scrollDOM.scrollHeight - e.scrollDOM.scrollTop - e.scrollDOM.clientHeight && (c = C1.scrollIntoView(n.main.head, {
        y: "start",
        yMargin: l.top - o.top
    })), e.dispatch(A5(r, n), {
        effects: c
    }), !0;
}
var re3 = (e)=>we3(e, !1), Y3 = (e)=>we3(e, !0);
function P5(e, t, r) {
    let n = e.lineBlockAt(t.head), l = e.moveToLineBoundary(t, r);
    if (l.head == t.head && l.head != (r ? n.to : n.from) && (l = e.moveToLineBoundary(t, r, !1)), !r && l.head == n.from && n.length) {
        let o = /^\s*/.exec(e.state.sliceDoc(n.from, Math.min(n.from + 100, n.to)))[0].length;
        o && t.head != n.from + o && (l = g.cursor(n.from + o));
    }
    return l;
}
var oe3 = (e)=>B5(e, (t)=>P5(e, t, !0)), le4 = (e)=>B5(e, (t)=>P5(e, t, !1)), Mt1 = (e)=>B5(e, (t)=>g.cursor(e.lineBlockAt(t.head).from, 1)), Ot2 = (e)=>B5(e, (t)=>g.cursor(e.lineBlockAt(t.head).to, -1));
function Ue3(e, t, r) {
    let n = !1, l = x3(e.selection, (o)=>{
        let c = R3(e, o.head, -1) || R3(e, o.head, 1) || o.head > 0 && R3(e, o.head - 1, 1) || o.head < e.doc.length && R3(e, o.head + 1, -1);
        if (!c || !c.end) return o;
        n = !0;
        let s = c.start.from == o.head ? c.end.to : c.end.from;
        return r ? g.range(o.anchor, s) : g.cursor(s);
    });
    return n ? (t(A5(e, l)), !0) : !1;
}
var Et2 = ({ state: e , dispatch: t  })=>Ue3(e, t, !1);
function k1(e, t) {
    let r = x3(e.state.selection, (n)=>{
        let l = t(n);
        return g.range(n.anchor, l.head, l.goalColumn);
    });
    return r.eq(e.state.selection) ? !1 : (e.dispatch(A5(e.state, r)), !0);
}
function J1(e, t) {
    return k1(e, (r)=>e.moveByChar(r, t));
}
var Ne3 = (e)=>J1(e, !y3(e)), ve3 = (e)=>J1(e, y3(e));
function F4(e, t) {
    return k1(e, (r)=>e.moveByGroup(r, t));
}
var bt = (e)=>F4(e, !y3(e)), Tt2 = (e)=>F4(e, y3(e));
var It2 = (e)=>k1(e, (t)=>V5(e.state, t, !y3(e))), Rt1 = (e)=>k1(e, (t)=>V5(e.state, t, y3(e)));
function Ve2(e, t) {
    return k1(e, (r)=>e.moveVertically(r, t));
}
var Pe3 = (e)=>Ve2(e, !1), Je2 = (e)=>Ve2(e, !0);
function Fe3(e, t) {
    return k1(e, (r)=>e.moveVertically(r, t, Math.min(e.dom.clientHeight, innerHeight)));
}
var ce3 = (e)=>Fe3(e, !1), se4 = (e)=>Fe3(e, !0), ie3 = (e)=>k1(e, (t)=>P5(e, t, !0)), ue3 = (e)=>k1(e, (t)=>P5(e, t, !1)), wt1 = (e)=>k1(e, (t)=>g.cursor(e.lineBlockAt(t.head).from)), Ut2 = (e)=>k1(e, (t)=>g.cursor(e.lineBlockAt(t.head).to)), fe3 = ({ state: e , dispatch: t  })=>(t(A5(e, {
        anchor: 0
    })), !0), ae4 = ({ state: e , dispatch: t  })=>(t(A5(e, {
        anchor: e.doc.length
    })), !0), he2 = ({ state: e , dispatch: t  })=>(t(A5(e, {
        anchor: e.selection.main.anchor,
        head: 0
    })), !0), de3 = ({ state: e , dispatch: t  })=>(t(A5(e, {
        anchor: e.selection.main.anchor,
        head: e.doc.length
    })), !0), Nt2 = ({ state: e , dispatch: t  })=>(t(e.update({
        selection: {
            anchor: 0,
            head: e.doc.length
        },
        userEvent: "select"
    })), !0), vt2 = ({ state: e , dispatch: t  })=>{
    let r = $4(e).map(({ from: n , to: l  })=>g.range(n, Math.min(l + 1, e.doc.length)));
    return t(e.update({
        selection: g.create(r),
        userEvent: "select"
    })), !0;
}, Gt = ({ state: e , dispatch: t  })=>{
    let r = x3(e.selection, (n)=>{
        var l;
        let o = m2(e).resolveInner(n.head, 1);
        for(; !(o.from < n.from && o.to >= n.to || o.to > n.to && o.from <= n.from || !(!((l = o.parent) === null || l === void 0) && l.parent));)o = o.parent;
        return g.range(o.to, o.from);
    });
    return t(A5(e, r)), !0;
}, Vt1 = ({ state: e , dispatch: t  })=>{
    let r = e.selection, n = null;
    return r.ranges.length > 1 ? n = g.create([
        r.main
    ]) : r.main.empty || (n = g.create([
        g.cursor(r.main.head)
    ])), n ? (t(A5(e, n)), !0) : !1;
};
function z3({ state: e , dispatch: t  }, r) {
    if (e.readOnly) return !1;
    let n = "delete.selection", l = e.changeByRange((o)=>{
        let { from: c , to: s  } = o;
        if (c == s) {
            let i = r(c);
            i < c ? n = "delete.backward" : i > c && (n = "delete.forward"), c = Math.min(c, i), s = Math.max(s, i);
        }
        return c == s ? {
            range: o
        } : {
            changes: {
                from: c,
                to: s
            },
            range: g.cursor(c)
        };
    });
    return l.changes.empty ? !1 : (t(e.update(l, {
        scrollIntoView: !0,
        userEvent: n
    })), !0);
}
function q5(e, t, r) {
    if (e instanceof C1) for (let n of e.state.facet(C1.atomicRanges).map((l)=>l(e)))n.between(t, t, (l, o)=>{
        l < t && o > t && (t = r ? o : l);
    });
    return t;
}
var ze2 = (e, t)=>z3(e, (r)=>{
        let { state: n  } = e, l = n.doc.lineAt(r), o, c;
        if (!t && r > l.from && r < l.from + 200 && !/[^ \t]/.test(o = l.text.slice(0, r - l.from))) {
            if (o[o.length - 1] == "	") return r - 1;
            let s = ot(o, n.tabSize), i = s % j3(n) || j3(n);
            for(let u = 0; u < i && o[o.length - 1 - u] == " "; u++)r--;
            c = r;
        } else c = ie(l.text, r - l.from, t, t) + l.from, c == r && l.number != (t ? n.doc.lines : 1) && (c += t ? 1 : -1);
        return q5(e, c, t);
    }), Z4 = (e)=>ze2(e, !1), qe2 = (e)=>ze2(e, !0), $e2 = (e, t)=>z3(e, (r)=>{
        let n = r, { state: l  } = e, o = l.doc.lineAt(n), c = l.charCategorizer(n);
        for(let s = null;;){
            if (n == (t ? o.to : o.from)) {
                n == r && o.number != (t ? l.doc.lines : 1) && (n += t ? 1 : -1);
                break;
            }
            let i = ie(o.text, n - o.from, t) + o.from, u = o.text.slice(Math.min(n, i) - o.from, Math.max(n, i) - o.from), f = c(u);
            if (s != null && f != s) break;
            (u != " " || n != r) && (s = f), n = i;
        }
        return q5(e, n, t);
    }), Ke2 = (e)=>$e2(e, !1), Pt2 = (e)=>$e2(e, !0), We2 = (e)=>z3(e, (t)=>{
        let r = e.lineBlockAt(t).to;
        return q5(e, t < r ? r : Math.min(e.state.doc.length, t + 1), !0);
    }), Jt1 = (e)=>z3(e, (t)=>{
        let r = e.lineBlockAt(t).from;
        return q5(e, t > r ? r : Math.max(0, t - 1), !1);
    }), Ft2 = ({ state: e , dispatch: t  })=>{
    if (e.readOnly) return !1;
    let r = e.changeByRange((n)=>({
            changes: {
                from: n.from,
                to: n.to,
                insert: v.of([
                    "",
                    ""
                ])
            },
            range: g.cursor(n.from)
        }));
    return t(e.update(r, {
        scrollIntoView: !0,
        userEvent: "input"
    })), !0;
}, zt1 = ({ state: e , dispatch: t  })=>{
    if (e.readOnly) return !1;
    let r = e.changeByRange((n)=>{
        if (!n.empty || n.from == 0 || n.from == e.doc.length) return {
            range: n
        };
        let l = n.from, o = e.doc.lineAt(l), c = l == o.from ? l - 1 : ie(o.text, l - o.from, !1) + o.from, s = l == o.to ? l + 1 : ie(o.text, l - o.from, !0) + o.from;
        return {
            changes: {
                from: c,
                to: s,
                insert: e.doc.slice(l, s).append(e.doc.slice(c, l))
            },
            range: g.cursor(s)
        };
    });
    return r.changes.empty ? !1 : (t(e.update(r, {
        scrollIntoView: !0,
        userEvent: "move.character"
    })), !0);
};
function $4(e) {
    let t = [], r = -1;
    for (let n of e.selection.ranges){
        let l = e.doc.lineAt(n.from), o = e.doc.lineAt(n.to);
        if (!n.empty && n.to == o.from && (o = e.doc.lineAt(n.to - 1)), r >= l.number) {
            let c = t[t.length - 1];
            c.to = o.to, c.ranges.push(n);
        } else t.push({
            from: l.from,
            to: o.to,
            ranges: [
                n
            ]
        });
        r = o.number + 1;
    }
    return t;
}
function He2(e, t, r) {
    if (e.readOnly) return !1;
    let n = [], l = [];
    for (let o of $4(e)){
        if (r ? o.to == e.doc.length : o.from == 0) continue;
        let c = e.doc.lineAt(r ? o.to + 1 : o.from - 1), s = c.length + 1;
        if (r) {
            n.push({
                from: o.to,
                to: c.to
            }, {
                from: o.from,
                insert: c.text + e.lineBreak
            });
            for (let i of o.ranges)l.push(g.range(Math.min(e.doc.length, i.anchor + s), Math.min(e.doc.length, i.head + s)));
        } else {
            n.push({
                from: c.from,
                to: o.from
            }, {
                from: o.to,
                insert: e.lineBreak + c.text
            });
            for (let i1 of o.ranges)l.push(g.range(i1.anchor - s, i1.head - s));
        }
    }
    return n.length ? (t(e.update({
        changes: n,
        scrollIntoView: !0,
        selection: g.create(l, e.selection.mainIndex),
        userEvent: "move.line"
    })), !0) : !1;
}
var qt1 = ({ state: e , dispatch: t  })=>He2(e, t, !1), $t = ({ state: e , dispatch: t  })=>He2(e, t, !0);
function Qe2(e, t, r) {
    if (e.readOnly) return !1;
    let n = [];
    for (let l of $4(e))r ? n.push({
        from: l.from,
        insert: e.doc.slice(l.from, l.to) + e.lineBreak
    }) : n.push({
        from: l.to,
        insert: e.lineBreak + e.doc.slice(l.from, l.to)
    });
    return t(e.update({
        changes: n,
        scrollIntoView: !0,
        userEvent: "input.copyline"
    })), !0;
}
var Kt = ({ state: e , dispatch: t  })=>Qe2(e, t, !1), Wt2 = ({ state: e , dispatch: t  })=>Qe2(e, t, !0), Ht1 = (e)=>{
    if (e.state.readOnly) return !1;
    let { state: t  } = e, r = t.changes($4(t).map(({ from: l , to: o  })=>(l > 0 ? l-- : o < t.doc.length && o++, {
            from: l,
            to: o
        }))), n = x3(t.selection, (l)=>e.moveVertically(l, !0)).map(r);
    return e.dispatch({
        changes: r,
        selection: n,
        scrollIntoView: !0,
        userEvent: "delete.line"
    }), !0;
};
function Qt1(e, t) {
    if (/\(\)|\[\]|\{\}/.test(e.sliceDoc(t - 1, t + 1))) return {
        from: t,
        to: t
    };
    let r = m2(e).resolveInner(t), n = r.childBefore(t), l = r.childAfter(t), o;
    return n && l && n.to <= t && l.from >= t && (o = n.type.prop(w2.closedBy)) && o.indexOf(l.name) > -1 && e.doc.lineAt(n.to).from == e.doc.lineAt(l.from).from ? {
        from: n.to,
        to: l.from
    } : null;
}
var Xt1 = Xe3(!1), Yt1 = Xe3(!0);
function Xe3(e) {
    return ({ state: t , dispatch: r  })=>{
        if (t.readOnly) return !1;
        let n = t.changeByRange((l)=>{
            let { from: o , to: c  } = l, s = t.doc.lineAt(o), i = !e && o == c && Qt1(t, o);
            e && (o = c = (c <= s.to ? s : t.doc.lineAt(c)).to);
            let u = new $3(t, {
                simulateBreak: o,
                simulateDoubleBreak: !!i
            }), f = ee3(u, o);
            for(f == null && (f = /^\s*/.exec(t.doc.lineAt(o).text)[0].length); c < s.to && /\s/.test(s.text[c - s.from]);)c++;
            i ? { from: o , to: c  } = i : o > s.from && o < s.from + 100 && !/\S/.test(s.text.slice(0, o)) && (o = s.from);
            let a = [
                "",
                te3(t, f)
            ];
            return i && a.push(te3(t, u.lineIndent(s.from, -1))), {
                changes: {
                    from: o,
                    to: c,
                    insert: v.of(a)
                },
                range: g.cursor(o + 1 + a[1].length)
            };
        });
        return r(t.update(n, {
            scrollIntoView: !0,
            userEvent: "input"
        })), !0;
    };
}
function te4(e, t) {
    let r = -1;
    return e.changeByRange((n)=>{
        let l = [];
        for(let c = n.from; c <= n.to;){
            let s = e.doc.lineAt(c);
            s.number > r && (n.empty || n.to > s.from) && (t(s, l, n), r = s.number), c = s.to + 1;
        }
        let o = e.changes(l);
        return {
            changes: l,
            range: g.range(o.mapPos(n.anchor, 1), o.mapPos(n.head, 1))
        };
    });
}
var Zt1 = ({ state: e , dispatch: t  })=>{
    if (e.readOnly) return !1;
    let r = Object.create(null), n = new $3(e, {
        overrideIndentation: (o)=>{
            let c = r[o];
            return c ?? -1;
        }
    }), l = te4(e, (o, c, s)=>{
        let i = ee3(n, o.from);
        if (i == null) return;
        /\S/.test(o.text) || (i = 0);
        let u = /^\s*/.exec(o.text)[0], f = te3(e, i);
        (u != f || s.from < o.from + u.length) && (r[o.from] = i, c.push({
            from: o.from,
            to: o.from + u.length,
            insert: f
        }));
    });
    return l.changes.empty || t(e.update(l, {
        userEvent: "indent"
    })), !0;
}, ne3 = ({ state: e , dispatch: t  })=>e.readOnly ? !1 : (t(e.update(te4(e, (r, n)=>{
        n.push({
            from: r.from,
            insert: e.facet(Pt1)
        });
    }), {
        userEvent: "input.indent"
    })), !0), Ye2 = ({ state: e , dispatch: t  })=>e.readOnly ? !1 : (t(e.update(te4(e, (r, n)=>{
        let l = /^\s*/.exec(r.text)[0];
        if (!l) return;
        let o = ot(l, e.tabSize), c = 0, s = te3(e, Math.max(0, o - j3(e)));
        for(; c < l.length && c < s.length && l.charCodeAt(c) == s.charCodeAt(c);)c++;
        n.push({
            from: r.from + c,
            to: r.from + l.length,
            insert: s.slice(c)
        });
    }), {
        userEvent: "delete.dedent"
    })), !0), _t = [
    {
        key: "Ctrl-b",
        run: Me3,
        shift: Ne3,
        preventDefault: !0
    },
    {
        key: "Ctrl-f",
        run: Oe3,
        shift: ve3
    },
    {
        key: "Ctrl-p",
        run: Ie3,
        shift: Pe3
    },
    {
        key: "Ctrl-n",
        run: Re3,
        shift: Je2
    },
    {
        key: "Ctrl-a",
        run: Mt1,
        shift: wt1
    },
    {
        key: "Ctrl-e",
        run: Ot2,
        shift: Ut2
    },
    {
        key: "Ctrl-d",
        run: qe2
    },
    {
        key: "Ctrl-h",
        run: Z4
    },
    {
        key: "Ctrl-k",
        run: We2
    },
    {
        key: "Ctrl-Alt-h",
        run: Ke2
    },
    {
        key: "Ctrl-o",
        run: Ft2
    },
    {
        key: "Ctrl-t",
        run: zt1
    },
    {
        key: "Ctrl-v",
        run: Y3
    }
], jt2 = [
    {
        key: "ArrowLeft",
        run: Me3,
        shift: Ne3,
        preventDefault: !0
    },
    {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: St2,
        shift: bt
    },
    {
        mac: "Cmd-ArrowLeft",
        run: le4,
        shift: ue3
    },
    {
        key: "ArrowRight",
        run: Oe3,
        shift: ve3,
        preventDefault: !0
    },
    {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: Ct1,
        shift: Tt2
    },
    {
        mac: "Cmd-ArrowRight",
        run: oe3,
        shift: ie3
    },
    {
        key: "ArrowUp",
        run: Ie3,
        shift: Pe3,
        preventDefault: !0
    },
    {
        mac: "Cmd-ArrowUp",
        run: fe3,
        shift: he2
    },
    {
        mac: "Ctrl-ArrowUp",
        run: re3,
        shift: ce3
    },
    {
        key: "ArrowDown",
        run: Re3,
        shift: Je2,
        preventDefault: !0
    },
    {
        mac: "Cmd-ArrowDown",
        run: ae4,
        shift: de3
    },
    {
        mac: "Ctrl-ArrowDown",
        run: Y3,
        shift: se4
    },
    {
        key: "PageUp",
        run: re3,
        shift: ce3
    },
    {
        key: "PageDown",
        run: Y3,
        shift: se4
    },
    {
        key: "Home",
        run: le4,
        shift: ue3,
        preventDefault: !0
    },
    {
        key: "Mod-Home",
        run: fe3,
        shift: he2
    },
    {
        key: "End",
        run: oe3,
        shift: ie3,
        preventDefault: !0
    },
    {
        key: "Mod-End",
        run: ae4,
        shift: de3
    },
    {
        key: "Enter",
        run: Xt1
    },
    {
        key: "Mod-a",
        run: Nt2
    },
    {
        key: "Backspace",
        run: Z4,
        shift: Z4
    },
    {
        key: "Delete",
        run: qe2
    },
    {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: Ke2
    },
    {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: Pt2
    },
    {
        mac: "Mod-Backspace",
        run: Jt1
    },
    {
        mac: "Mod-Delete",
        run: We2
    }
].concat(_t.map((e)=>({
        mac: e.key,
        run: e.run,
        shift: e.shift
    }))), Tn1 = [
    {
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: xt2,
        shift: It2
    },
    {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: Lt2,
        shift: Rt1
    },
    {
        key: "Alt-ArrowUp",
        run: qt1
    },
    {
        key: "Shift-Alt-ArrowUp",
        run: Kt
    },
    {
        key: "Alt-ArrowDown",
        run: $t
    },
    {
        key: "Shift-Alt-ArrowDown",
        run: Wt2
    },
    {
        key: "Escape",
        run: Vt1
    },
    {
        key: "Mod-Enter",
        run: Yt1
    },
    {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: vt2
    },
    {
        key: "Mod-i",
        run: Gt,
        preventDefault: !0
    },
    {
        key: "Mod-[",
        run: Ye2
    },
    {
        key: "Mod-]",
        run: ne3
    },
    {
        key: "Mod-Alt-\\",
        run: Zt1
    },
    {
        key: "Shift-Mod-k",
        run: Ht1
    },
    {
        key: "Shift-Mod-\\",
        run: Et2
    },
    {
        key: "Mod-/",
        run: ot1
    },
    {
        key: "Alt-A",
        run: ct2
    }
].concat(jt2);
function s2() {
    var r = arguments[0];
    typeof r == "string" && (r = document.createElement(r));
    var e = 1, t = arguments[1];
    if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
        for(var n in t)if (Object.prototype.hasOwnProperty.call(t, n)) {
            var o = t[n];
            typeof o == "string" ? r.setAttribute(n, o) : o != null && (r[n] = o);
        }
        e++;
    }
    for(; e < arguments.length; e++)f(r, arguments[e]);
    return r;
}
function f(r, e) {
    if (typeof e == "string") r.appendChild(document.createTextNode(e));
    else if (e != null) if (e.nodeType != null) r.appendChild(e);
    else if (Array.isArray(e)) for(var t = 0; t < e.length; t++)f(r, e[t]);
    else throw new RangeError("Unsupported child node: " + e);
}
var Y4 = typeof String.prototype.normalize == "function" ? (r)=>r.normalize("NFKD") : (r)=>r, y4 = class {
    constructor(e, t, n = 0, s = e.length, i){
        this.value = {
            from: 0,
            to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(n, s), this.bufferStart = n, this.normalize = i ? (a)=>i(Y4(a)) : Y4, this.query = this.normalize(t);
    }
    peek() {
        if (this.bufferPos == this.buffer.length) {
            if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
            this.bufferPos = 0, this.buffer = this.iter.value;
        }
        return oe(this.buffer, this.bufferPos);
    }
    next() {
        for(; this.matches.length;)this.matches.pop();
        return this.nextOverlapping();
    }
    nextOverlapping() {
        for(;;){
            let e = this.peek();
            if (e < 0) return this.done = !0, this;
            let t = rt(e), n = this.bufferStart + this.bufferPos;
            this.bufferPos += be(e);
            let s = this.normalize(t);
            for(let i = 0, a = n;; i++){
                let l = s.charCodeAt(i), c = this.match(l, a);
                if (c) return this.value = c, this;
                if (i == s.length - 1) break;
                a == n && i < t.length && t.charCodeAt(i) == l && a++;
            }
        }
    }
    match(e, t) {
        let n = null;
        for(let s = 0; s < this.matches.length; s += 2){
            let i = this.matches[s], a = !1;
            this.query.charCodeAt(i) == e && (i == this.query.length - 1 ? n = {
                from: this.matches[s + 1],
                to: t + 1
            } : (this.matches[s]++, a = !0)), a || (this.matches.splice(s, 2), s -= 2);
        }
        return this.query.charCodeAt(0) == e && (this.query.length == 1 ? n = {
            from: t,
            to: t + 1
        } : this.matches.push(1, t)), n;
    }
};
typeof Symbol < "u" && (y4.prototype[Symbol.iterator] = function() {
    return this;
});
var le5 = {
    from: -1,
    to: -1,
    match: /.*/.exec("")
}, Q3 = "gm" + (/x/.unicode == null ? "" : "u"), E2 = class {
    constructor(e, t, n, s = 0, i = e.length){
        if (this.to = i, this.curLine = "", this.done = !1, this.value = le5, /\\[sWDnr]|\n|\r|\[\^/.test(t)) return new R5(e, t, n, s, i);
        this.re = new RegExp(t, Q3 + (n?.ignoreCase ? "i" : "")), this.iter = e.iter();
        let a = e.lineAt(s);
        this.curLineStart = a.from, this.matchPos = s, this.getLine(this.curLineStart);
    }
    getLine(e) {
        this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
    }
    nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
    }
    next() {
        for(let e = this.matchPos - this.curLineStart;;){
            this.re.lastIndex = e;
            let t = this.matchPos <= this.to && this.re.exec(this.curLine);
            if (t) {
                let n = this.curLineStart + t.index, s = n + t[0].length;
                if (this.matchPos = s + (n == s ? 1 : 0), n == this.curLine.length && this.nextLine(), n < s || n > this.value.to) return this.value = {
                    from: n,
                    to: s,
                    match: t
                }, this;
                e = this.matchPos - this.curLineStart;
            } else if (this.curLineStart + this.curLine.length < this.to) this.nextLine(), e = 0;
            else return this.done = !0, this;
        }
    }
}, N6 = new WeakMap, x4 = class {
    constructor(e, t){
        this.from = e, this.text = t;
    }
    get to() {
        return this.from + this.text.length;
    }
    static get(e, t, n) {
        let s = N6.get(e);
        if (!s || s.from >= n || s.to <= t) {
            let l = new x4(t, e.sliceString(t, n));
            return N6.set(e, l), l;
        }
        if (s.from == t && s.to == n) return s;
        let { text: i , from: a  } = s;
        return a > t && (i = e.sliceString(t, a) + i, a = t), s.to < n && (i += e.sliceString(s.to, n)), N6.set(e, new x4(a, i)), new x4(t, i.slice(t - a, n - a));
    }
}, R5 = class {
    constructor(e, t, n, s, i){
        this.text = e, this.to = i, this.done = !1, this.value = le5, this.matchPos = s, this.re = new RegExp(t, Q3 + (n?.ignoreCase ? "i" : "")), this.flat = x4.get(e, s, this.chunkEnd(s + 5e3));
    }
    chunkEnd(e) {
        return e >= this.to ? this.to : this.text.lineAt(e).to;
    }
    next() {
        for(;;){
            let e = this.re.lastIndex = this.matchPos - this.flat.from, t = this.re.exec(this.flat.text);
            if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t && this.flat.to < this.to && t.index + t[0].length > this.flat.text.length - 10 && (t = null), t) {
                let n = this.flat.from + t.index, s = n + t[0].length;
                return this.value = {
                    from: n,
                    to: s,
                    match: t
                }, this.matchPos = s + (n == s ? 1 : 0), this;
            } else {
                if (this.flat.to == this.to) return this.done = !0, this;
                this.flat = x4.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
            }
        }
    }
};
typeof Symbol < "u" && (E2.prototype[Symbol.iterator] = R5.prototype[Symbol.iterator] = function() {
    return this;
});
function xe4(r) {
    try {
        return new RegExp(r, Q3), !0;
    } catch  {
        return !1;
    }
}
function B6(r) {
    let e = s2("input", {
        class: "cm-textfield",
        name: "line"
    }), t = s2("form", {
        class: "cm-gotoLine",
        onkeydown: (s)=>{
            s.keyCode == 27 ? (s.preventDefault(), r.dispatch({
                effects: I5.of(!1)
            }), r.focus()) : s.keyCode == 13 && (s.preventDefault(), n());
        },
        onsubmit: (s)=>{
            s.preventDefault(), n();
        }
    }, s2("label", r.state.phrase("Go to line"), ": ", e), " ", s2("button", {
        class: "cm-button",
        type: "submit"
    }, r.state.phrase("go")));
    function n() {
        let s = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value);
        if (!s) return;
        let { state: i  } = r, a = i.doc.lineAt(i.selection.main.head), [, l, c, f, d] = s, m = f ? +f.slice(1) : 0, g1 = c ? +c : a.number;
        if (c && d) {
            let V = g1 / 100;
            l && (V = V * (l == "-" ? -1 : 1) + a.number / i.doc.lines), g1 = Math.round(i.doc.lines * V);
        } else c && l && (g1 = g1 * (l == "-" ? -1 : 1) + a.number);
        let X = i.doc.line(Math.max(1, Math.min(i.doc.lines, g1)));
        r.dispatch({
            effects: I5.of(!1),
            selection: g.cursor(X.from + Math.max(0, Math.min(m, X.length))),
            scrollIntoView: !0
        }), r.focus();
    }
    return {
        dom: t
    };
}
var I5 = y.define(), Z5 = F.define({
    create () {
        return !0;
    },
    update (r, e) {
        for (let t of e.effects)t.is(I5) && (r = t.value);
        return r;
    },
    provide: (r)=>ns.from(r, (e)=>e ? B6 : null)
}), be3 = (r)=>{
    let e = po(r, B6);
    if (!e) {
        let t = [
            I5.of(!0)
        ];
        r.state.field(Z5, !1) == null && t.push(y.appendConfig.of([
            Z5,
            ye4
        ])), r.dispatch({
            effects: t
        }), e = po(r, B6);
    }
    return e && e.dom.querySelector("input").focus(), !0;
}, ye4 = C1.baseTheme({
    ".cm-panel.cm-gotoLine": {
        padding: "2px 6px 4px",
        "& label": {
            fontSize: "80%"
        }
    }
}), Se5 = {
    highlightWordAroundCursor: !1,
    minSelectionLength: 1,
    maxMatches: 100,
    wholeWords: !1
}, ae5 = A.define({
    combine (r) {
        return ht(r, Se5, {
            highlightWordAroundCursor: (e, t)=>e || t,
            minSelectionLength: Math.min,
            maxMatches: Math.min
        });
    }
});
function Te3(r) {
    let e = [
        Le3,
        Ce5
    ];
    return r && e.push(ae5.of(r)), e;
}
var Me4 = M1.mark({
    class: "cm-selectionMatch"
}), ve4 = M1.mark({
    class: "cm-selectionMatch cm-selectionMatch-main"
});
function ee5(r, e, t, n) {
    return (t == 0 || r(e.sliceDoc(t - 1, t)) != R.Word) && (n == e.doc.length || r(e.sliceDoc(n, n + 1)) != R.Word);
}
function ke4(r, e, t, n) {
    return r(e.sliceDoc(t, t + 1)) == R.Word && r(e.sliceDoc(n - 1, n)) == R.Word;
}
var Ce5 = V1.fromClass(class {
    constructor(r){
        this.decorations = this.getDeco(r);
    }
    update(r) {
        (r.selectionSet || r.docChanged || r.viewportChanged) && (this.decorations = this.getDeco(r.view));
    }
    getDeco(r) {
        let e = r.state.facet(ae5), { state: t  } = r, n = t.selection;
        if (n.ranges.length > 1) return M1.none;
        let s = n.main, i, a = null;
        if (s.empty) {
            if (!e.highlightWordAroundCursor) return M1.none;
            let c = t.wordAt(s.head);
            if (!c) return M1.none;
            a = t.charCategorizer(s.head), i = t.sliceDoc(c.from, c.to);
        } else {
            let c1 = s.to - s.from;
            if (c1 < e.minSelectionLength || c1 > 200) return M1.none;
            if (e.wholeWords) {
                if (i = t.sliceDoc(s.from, s.to), a = t.charCategorizer(s.head), !(ee5(a, t, s.from, s.to) && ke4(a, t, s.from, s.to))) return M1.none;
            } else if (i = t.sliceDoc(s.from, s.to).trim(), !i) return M1.none;
        }
        let l = [];
        for (let c2 of r.visibleRanges){
            let f = new y4(t.doc, i, c2.from, c2.to);
            for(; !f.next().done;){
                let { from: d , to: m  } = f.value;
                if ((!a || ee5(a, t, d, m)) && (s.empty && d <= s.from && m >= s.to ? l.push(ve4.range(d, m)) : (d >= s.to || m <= s.from) && l.push(Me4.range(d, m)), l.length > e.maxMatches)) return M1.none;
            }
        }
        return M1.set(l);
    }
}, {
    decorations: (r)=>r.decorations
}), Le3 = C1.baseTheme({
    ".cm-selectionMatch": {
        backgroundColor: "#99ff7780"
    },
    ".cm-searchMatch .cm-selectionMatch": {
        backgroundColor: "transparent"
    }
}), Pe4 = ({ state: r , dispatch: e  })=>{
    let { selection: t  } = r, n = g.create(t.ranges.map((s)=>r.wordAt(s.head) || g.cursor(s.head)), t.mainIndex);
    return n.eq(t) ? !1 : (e(r.update({
        selection: n
    })), !0);
};
function Ae4(r, e) {
    let { main: t , ranges: n  } = r.selection, s = r.wordAt(t.head), i = s && s.from == t.from && s.to == t.to;
    for(let a = !1, l = new y4(r.doc, e, n[n.length - 1].to);;)if (l.next(), l.done) {
        if (a) return null;
        l = new y4(r.doc, e, 0, Math.max(0, n[n.length - 1].from - 1)), a = !0;
    } else {
        if (a && n.some((c)=>c.from == l.value.from)) continue;
        if (i) {
            let c = r.wordAt(l.value.from);
            if (!c || c.from != l.value.from || c.to != l.value.to) continue;
        }
        return l.value;
    }
}
var De4 = ({ state: r , dispatch: e  })=>{
    let { ranges: t  } = r.selection;
    if (t.some((i)=>i.from === i.to)) return Pe4({
        state: r,
        dispatch: e
    });
    let n = r.sliceDoc(t[0].from, t[0].to);
    if (r.selection.ranges.some((i)=>r.sliceDoc(i.from, i.to) != n)) return !1;
    let s = Ae4(r, n);
    return s ? (e(r.update({
        selection: r.selection.addRange(g.range(s.from, s.to), !1),
        effects: C1.scrollIntoView(s.to)
    })), !0) : !1;
}, T6 = A.define({
    combine (r) {
        var e;
        return {
            top: r.reduce((t, n)=>t ?? n.top, void 0) || !1,
            caseSensitive: r.reduce((t, n)=>t ?? n.caseSensitive, void 0) || !1,
            createPanel: ((e = r.find((t)=>t.createPanel)) === null || e === void 0 ? void 0 : e.createPanel) || ((t)=>new _4(t))
        };
    }
});
var W5 = class {
    constructor(e){
        this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || xe4(this.search)), this.unquoted = e.literal ? this.search : this.search.replace(/\\([nrt\\])/g, (t, n)=>n == "n" ? `
` : n == "r" ? "\r" : n == "t" ? "	" : "\\");
    }
    eq(e) {
        return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp;
    }
    create() {
        return this.regexp ? new K3(this) : new H3(this);
    }
    getCursor(e, t = 0, n = e.length) {
        return this.regexp ? M6(this, e, t, n) : S3(this, e, t, n);
    }
}, z4 = class {
    constructor(e){
        this.spec = e;
    }
};
function S3(r, e, t, n) {
    return new y4(e, r.unquoted, t, n, r.caseSensitive ? void 0 : (s)=>s.toLowerCase());
}
var H3 = class extends z4 {
    constructor(e){
        super(e);
    }
    nextMatch(e, t, n) {
        let s = S3(this.spec, e, n, e.length).nextOverlapping();
        return s.done && (s = S3(this.spec, e, 0, t).nextOverlapping()), s.done ? null : s.value;
    }
    prevMatchInRange(e, t, n) {
        for(let s = n;;){
            let i = Math.max(t, s - 1e4 - this.spec.unquoted.length), a = S3(this.spec, e, i, s), l = null;
            for(; !a.nextOverlapping().done;)l = a.value;
            if (l) return l;
            if (i == t) return null;
            s -= 1e4;
        }
    }
    prevMatch(e, t, n) {
        return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, n, e.length);
    }
    getReplacement(e) {
        return this.spec.replace;
    }
    matchAll(e, t) {
        let n = S3(this.spec, e, 0, e.length), s = [];
        for(; !n.next().done;){
            if (s.length >= t) return null;
            s.push(n.value);
        }
        return s;
    }
    highlight(e, t, n, s) {
        let i = S3(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(n + this.spec.unquoted.length, e.length));
        for(; !i.next().done;)s(i.value.from, i.value.to);
    }
};
function M6(r, e, t, n) {
    return new E2(e, r.search, r.caseSensitive ? void 0 : {
        ignoreCase: !0
    }, t, n);
}
var K3 = class extends z4 {
    nextMatch(e, t, n) {
        let s = M6(this.spec, e, n, e.length).next();
        return s.done && (s = M6(this.spec, e, 0, t).next()), s.done ? null : s.value;
    }
    prevMatchInRange(e, t, n) {
        for(let s = 1;; s++){
            let i = Math.max(t, n - s * 1e4), a = M6(this.spec, e, i, n), l = null;
            for(; !a.next().done;)l = a.value;
            if (l && (i == t || l.from > i + 10)) return l;
            if (i == t) return null;
        }
    }
    prevMatch(e, t, n) {
        return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, n, e.length);
    }
    getReplacement(e) {
        return this.spec.replace.replace(/\$([$&\d+])/g, (t, n)=>n == "$" ? "$" : n == "&" ? e.match[0] : n != "0" && +n < e.match.length ? e.match[n] : t);
    }
    matchAll(e, t) {
        let n = M6(this.spec, e, 0, e.length), s = [];
        for(; !n.next().done;){
            if (s.length >= t) return null;
            s.push(n.value);
        }
        return s;
    }
    highlight(e, t, n, s) {
        let i = M6(this.spec, e, Math.max(0, t - 250), Math.min(n + 250, e.length));
        for(; !i.next().done;)s(i.value.from, i.value.to);
    }
}, k2 = y.define(), j5 = y.define(), p3 = F.define({
    create (r) {
        return new v2(w5(r).create(), null);
    },
    update (r, e) {
        for (let t of e.effects)t.is(k2) ? r = new v2(t.value.create(), r.panel) : t.is(j5) && (r = new v2(r.query, t.value ? J2 : null));
        return r;
    },
    provide: (r)=>ns.from(r, (e)=>e.panel)
});
var v2 = class {
    constructor(e, t){
        this.query = e, this.panel = t;
    }
}, Fe4 = M1.mark({
    class: "cm-searchMatch"
}), qe3 = M1.mark({
    class: "cm-searchMatch cm-searchMatch-selected"
}), Ee3 = V1.fromClass(class {
    constructor(r){
        this.view = r, this.decorations = this.highlight(r.state.field(p3));
    }
    update(r) {
        let e = r.state.field(p3);
        (e != r.startState.field(p3) || r.docChanged || r.selectionSet || r.viewportChanged) && (this.decorations = this.highlight(e));
    }
    highlight({ query: r , panel: e  }) {
        if (!e || !r.spec.valid) return M1.none;
        let { view: t  } = this, n = new Z;
        for(let s = 0, i = t.visibleRanges, a = i.length; s < a; s++){
            let { from: l , to: c  } = i[s];
            for(; s < a - 1 && c > i[s + 1].from - 2 * 250;)c = i[++s].to;
            r.highlight(t.state.doc, l, c, (f, d)=>{
                let m = t.state.selection.ranges.some((g)=>g.from == f && g.to == d);
                n.add(f, d, m ? qe3 : Fe4);
            });
        }
        return n.finish();
    }
}, {
    decorations: (r)=>r.decorations
});
function P6(r) {
    return (e)=>{
        let t = e.state.field(p3, !1);
        return t && t.query.spec.valid ? r(e, t) : ce4(e);
    };
}
var O3 = P6((r, { query: e  })=>{
    let { from: t , to: n  } = r.state.selection.main, s = e.nextMatch(r.state.doc, t, n);
    return !s || s.from == t && s.to == n ? !1 : (r.dispatch({
        selection: {
            anchor: s.from,
            head: s.to
        },
        scrollIntoView: !0,
        effects: U4(r, s),
        userEvent: "select.search"
    }), !0);
}), $5 = P6((r, { query: e  })=>{
    let { state: t  } = r, { from: n , to: s  } = t.selection.main, i = e.prevMatch(t.doc, n, s);
    return i ? (r.dispatch({
        selection: {
            anchor: i.from,
            head: i.to
        },
        scrollIntoView: !0,
        effects: U4(r, i),
        userEvent: "select.search"
    }), !0) : !1;
}), Re4 = P6((r, { query: e  })=>{
    let t = e.matchAll(r.state.doc, 1e3);
    return !t || !t.length ? !1 : (r.dispatch({
        selection: g.create(t.map((n)=>g.range(n.from, n.to))),
        userEvent: "select.search.matches"
    }), !0);
}), Ie4 = ({ state: r , dispatch: e  })=>{
    let t = r.selection;
    if (t.ranges.length > 1 || t.main.empty) return !1;
    let { from: n , to: s  } = t.main, i = [], a = 0;
    for(let l = new y4(r.doc, r.sliceDoc(n, s)); !l.next().done;){
        if (i.length > 1e3) return !1;
        l.value.from == n && (a = i.length), i.push(g.range(l.value.from, l.value.to));
    }
    return e(r.update({
        selection: g.create(i, a),
        userEvent: "select.search.matches"
    })), !0;
}, te5 = P6((r, { query: e  })=>{
    let { state: t  } = r, { from: n , to: s  } = t.selection.main;
    if (t.readOnly) return !1;
    let i = e.nextMatch(t.doc, n, n);
    if (!i) return !1;
    let a = [], l, c;
    if (i.from == n && i.to == s && (c = t.toText(e.getReplacement(i)), a.push({
        from: i.from,
        to: i.to,
        insert: c
    }), i = e.nextMatch(t.doc, i.from, i.to)), i) {
        let f = a.length == 0 || a[0].from >= i.to ? 0 : i.to - i.from - c.length;
        l = {
            anchor: i.from - f,
            head: i.to - f
        };
    }
    return r.dispatch({
        changes: a,
        selection: l,
        scrollIntoView: !!l,
        effects: i ? U4(r, i) : void 0,
        userEvent: "input.replace"
    }), !0;
}), We3 = P6((r, { query: e  })=>{
    if (r.state.readOnly) return !1;
    let t = e.matchAll(r.state.doc, 1e9).map((n)=>{
        let { from: s , to: i  } = n;
        return {
            from: s,
            to: i,
            insert: e.getReplacement(n)
        };
    });
    return t.length ? (r.dispatch({
        changes: t,
        userEvent: "input.replace.all"
    }), !0) : !1;
});
function J2(r) {
    return r.state.facet(T6).createPanel(r);
}
function w5(r, e) {
    var t;
    let n = r.selection.main, s = n.empty || n.to > n.from + 100 ? "" : r.sliceDoc(n.from, n.to), i = (t = e?.caseSensitive) !== null && t !== void 0 ? t : r.facet(T6).caseSensitive;
    return e && !s ? e : new W5({
        search: s.replace(/\n/g, "\\n"),
        caseSensitive: i
    });
}
var ce4 = (r)=>{
    let e = r.state.field(p3, !1);
    if (e && e.panel) {
        let t = po(r, J2);
        if (!t) return !1;
        let n = t.dom.querySelector("[name=search]");
        if (n != r.root.activeElement) {
            let s = w5(r.state, e.query.spec);
            s.valid && r.dispatch({
                effects: k2.of(s)
            }), n.focus(), n.select();
        }
    } else r.dispatch({
        effects: [
            j5.of(!0),
            e ? k2.of(w5(r.state, e.query.spec)) : y.appendConfig.of(G5)
        ]
    });
    return !0;
}, oe4 = (r)=>{
    let e = r.state.field(p3, !1);
    if (!e || !e.panel) return !1;
    let t = po(r, J2);
    return t && t.dom.contains(r.root.activeElement) && r.focus(), r.dispatch({
        effects: j5.of(!1)
    }), !0;
}, Be4 = [
    {
        key: "Mod-f",
        run: ce4,
        scope: "editor search-panel"
    },
    {
        key: "F3",
        run: O3,
        shift: $5,
        scope: "editor search-panel",
        preventDefault: !0
    },
    {
        key: "Mod-g",
        run: O3,
        shift: $5,
        scope: "editor search-panel",
        preventDefault: !0
    },
    {
        key: "Escape",
        run: oe4,
        scope: "editor search-panel"
    },
    {
        key: "Mod-Shift-l",
        run: Ie4
    },
    {
        key: "Alt-g",
        run: be3
    },
    {
        key: "Mod-d",
        run: De4,
        preventDefault: !0
    }
], _4 = class {
    constructor(e){
        this.view = e;
        let t = this.query = e.state.field(p3).query.spec;
        this.commit = this.commit.bind(this), this.searchField = s2("input", {
            value: t.search,
            placeholder: u(e, "Find"),
            "aria-label": u(e, "Find"),
            class: "cm-textfield",
            name: "search",
            onchange: this.commit,
            onkeyup: this.commit
        }), this.replaceField = s2("input", {
            value: t.replace,
            placeholder: u(e, "Replace"),
            "aria-label": u(e, "Replace"),
            class: "cm-textfield",
            name: "replace",
            onchange: this.commit,
            onkeyup: this.commit
        }), this.caseField = s2("input", {
            type: "checkbox",
            name: "case",
            checked: t.caseSensitive,
            onchange: this.commit
        }), this.reField = s2("input", {
            type: "checkbox",
            name: "re",
            checked: t.regexp,
            onchange: this.commit
        });
        function n(s, i, a) {
            return s2("button", {
                class: "cm-button",
                name: s,
                onclick: i,
                type: "button"
            }, a);
        }
        this.dom = s2("div", {
            onkeydown: (s)=>this.keydown(s),
            class: "cm-search"
        }, [
            this.searchField,
            n("next", ()=>O3(e), [
                u(e, "next")
            ]),
            n("prev", ()=>$5(e), [
                u(e, "previous")
            ]),
            n("select", ()=>Re4(e), [
                u(e, "all")
            ]),
            s2("label", null, [
                this.caseField,
                u(e, "match case")
            ]),
            s2("label", null, [
                this.reField,
                u(e, "regexp")
            ]),
            ...e.state.readOnly ? [] : [
                s2("br"),
                this.replaceField,
                n("replace", ()=>te5(e), [
                    u(e, "replace")
                ]),
                n("replaceAll", ()=>We3(e), [
                    u(e, "replace all")
                ]),
                s2("button", {
                    name: "close",
                    onclick: ()=>oe4(e),
                    "aria-label": u(e, "close"),
                    type: "button"
                }, [
                    "\xD7"
                ])
            ]
        ]);
    }
    commit() {
        let e = new W5({
            search: this.searchField.value,
            caseSensitive: this.caseField.checked,
            regexp: this.reField.checked,
            replace: this.replaceField.value
        });
        e.eq(this.query) || (this.query = e, this.view.dispatch({
            effects: k2.of(e)
        }));
    }
    keydown(e) {
        Jr(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? $5 : O3)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), te5(this.view));
    }
    update(e) {
        for (let t of e.transactions)for (let n of t.effects)n.is(k2) && !n.value.eq(this.query) && this.setQuery(n.value);
    }
    setQuery(e) {
        this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp;
    }
    mount() {
        this.searchField.select();
    }
    get pos() {
        return 80;
    }
    get top() {
        return this.view.state.facet(T6).top;
    }
};
function u(r, e) {
    return r.state.phrase(e);
}
var A6 = 30, D3 = /[\s\.,:;?!]/;
function U4(r, { from: e , to: t  }) {
    let n = r.state.doc.lineAt(e).from, s = r.state.doc.lineAt(t).to, i = Math.max(n, e - A6), a = Math.min(s, t + A6), l = r.state.sliceDoc(i, a);
    if (i != n) {
        for(let c = 0; c < A6; c++)if (!D3.test(l[c + 1]) && D3.test(l[c])) {
            l = l.slice(c);
            break;
        }
    }
    if (a != s) {
        for(let c1 = l.length - 1; c1 > l.length - A6; c1--)if (!D3.test(l[c1 - 1]) && D3.test(l[c1])) {
            l = l.slice(0, c1);
            break;
        }
    }
    return C1.announce.of(`${r.state.phrase("current match")}. ${l} ${r.state.phrase("on line")} ${r.state.doc.lineAt(e).number}`);
}
var ze3 = C1.baseTheme({
    ".cm-panel.cm-search": {
        padding: "2px 6px 4px",
        position: "relative",
        "& [name=close]": {
            position: "absolute",
            top: "0",
            right: "4px",
            backgroundColor: "inherit",
            border: "none",
            font: "inherit",
            padding: 0,
            margin: 0
        },
        "& input, & button, & label": {
            margin: ".2em .6em .2em 0"
        },
        "& input[type=checkbox]": {
            marginRight: ".2em"
        },
        "& label": {
            fontSize: "80%",
            whiteSpace: "pre"
        }
    },
    "&light .cm-searchMatch": {
        backgroundColor: "#ffff0054"
    },
    "&dark .cm-searchMatch": {
        backgroundColor: "#00ffff8a"
    },
    "&light .cm-searchMatch-selected": {
        backgroundColor: "#ff6a0054"
    },
    "&dark .cm-searchMatch-selected": {
        backgroundColor: "#ff00ff8a"
    }
}), G5 = [
    p3,
    lt.lowest(Ee3),
    ze3
];
var U5 = class {
    constructor(e, t, i){
        this.state = e, this.pos = t, this.explicit = i, this.abortListeners = [];
    }
    tokenBefore(e) {
        let t = m2(this.state).resolveInner(this.pos, -1);
        for(; t && e.indexOf(t.name) < 0;)t = t.parent;
        return t ? {
            from: t.from,
            to: this.pos,
            text: this.state.sliceDoc(t.from, this.pos),
            type: t.type
        } : null;
    }
    matchBefore(e) {
        let t = this.state.doc.lineAt(this.pos), i = Math.max(t.from, this.pos - 250), s = t.text.slice(i - t.from, this.pos - t.from), o = s.search(Te4(e, !1));
        return o < 0 ? null : {
            from: i + o,
            to: this.pos,
            text: s.slice(o)
        };
    }
    get aborted() {
        return this.abortListeners == null;
    }
    addEventListener(e, t) {
        e == "abort" && this.abortListeners && this.abortListeners.push(t);
    }
};
function ue4(n) {
    let e = Object.keys(n).join(""), t = /\w/.test(e);
    return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function Ye3(n) {
    let e = Object.create(null), t = Object.create(null);
    for (let { label: s  } of n){
        e[s[0]] = !0;
        for(let o = 1; o < s.length; o++)t[s[o]] = !0;
    }
    let i = ue4(e) + ue4(t) + "*$";
    return [
        new RegExp("^" + i),
        new RegExp(i)
    ];
}
function Ge2(n) {
    let e = n.map((s)=>typeof s == "string" ? {
            label: s
        } : s), [t, i] = e.every((s)=>/^\w+$/.test(s.label)) ? [
        /\w*$/,
        /\w+$/
    ] : Ye3(e);
    return (s)=>{
        let o = s.matchBefore(i);
        return o || s.explicit ? {
            from: o ? o.from : s.pos,
            options: e,
            validFor: t
        } : null;
    };
}
var $6 = class {
    constructor(e, t, i){
        this.completion = e, this.source = t, this.match = i;
    }
};
function x5(n) {
    return n.selection.main.head;
}
function Te4(n, e) {
    var t;
    let { source: i  } = n, s = e && i[0] != "^", o = i[i.length - 1] != "$";
    return !s && !o ? n : new RegExp(`${s ? "^" : ""}(?:${i})${o ? "$" : ""}`, (t = n.flags) !== null && t !== void 0 ? t : n.ignoreCase ? "i" : "");
}
N.define();
function Je3(n, e, t, i) {
    return Object.assign(Object.assign({}, n.changeByRange((s)=>{
        if (s == n.selection.main) return {
            changes: {
                from: t,
                to: i,
                insert: e
            },
            range: g.cursor(t + e.length)
        };
        let o = i - t;
        return !s.empty || o && n.sliceDoc(s.from - o, s.from) != n.sliceDoc(t, i) ? {
            range: s
        } : {
            changes: {
                from: s.from - o,
                to: s.from,
                insert: e
            },
            range: g.cursor(s.from - o + e.length)
        };
    })), {
        userEvent: "input.complete"
    });
}
function Ae5(n, e) {
    let t = e.completion.apply || e.completion.label, i = e.source;
    typeof t == "string" ? n.dispatch(Je3(n.state, t, i.from, i.to)) : t(n, e.completion, i.from, i.to);
}
var he3 = new WeakMap;
function Ze2(n) {
    if (!Array.isArray(n)) return n;
    let e = he3.get(n);
    return e || he3.set(n, e = Ge2(n)), e;
}
var Z6 = class {
    constructor(e){
        this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [];
        for(let t = 0; t < e.length;){
            let i = oe(e, t), s = be(i);
            this.chars.push(i);
            let o = e.slice(t, t + s), l = o.toUpperCase();
            this.folded.push(oe(l == o ? o.toLowerCase() : l, 0)), t += s;
        }
        this.astral = e.length != this.chars.length;
    }
    match(e) {
        if (this.pattern.length == 0) return [
            0
        ];
        if (e.length < this.pattern.length) return null;
        let { chars: t , folded: i , any: s , precise: o , byWord: l  } = this;
        if (t.length == 1) {
            let h = oe(e, 0);
            return h == t[0] ? [
                0,
                0,
                be(h)
            ] : h == i[0] ? [
                -200,
                0,
                be(h)
            ] : null;
        }
        let r = e.indexOf(this.pattern);
        if (r == 0) return [
            0,
            0,
            this.pattern.length
        ];
        let c = t.length, a = 0;
        if (r < 0) {
            for(let h1 = 0, Q = Math.min(e.length, 200); h1 < Q && a < c;){
                let T = oe(e, h1);
                (T == t[a] || T == i[a]) && (s[a++] = h1), h1 += be(T);
            }
            if (a < c) return null;
        }
        let f = 0, u = 0, H = !1, w = 0, V = -1, K = -1, $e = /[a-z]/.test(e), z = !0;
        for(let h2 = 0, Q1 = Math.min(e.length, 200), T1 = 0; h2 < Q1 && u < c;){
            let m = oe(e, h2);
            r < 0 && (f < c && m == t[f] && (o[f++] = h2), w < c && (m == t[w] || m == i[w] ? (w == 0 && (V = h2), K = h2 + 1, w++) : w = 0));
            let D, X = m < 255 ? m >= 48 && m <= 57 || m >= 97 && m <= 122 ? 2 : m >= 65 && m <= 90 ? 1 : 0 : (D = rt(m)) != D.toLowerCase() ? 1 : D != D.toUpperCase() ? 2 : 0;
            (!h2 || X == 1 && $e || T1 == 0 && X != 0) && (t[u] == m || i[u] == m && (H = !0) ? l[u++] = h2 : l.length && (z = !1)), T1 = X, h2 += be(m);
        }
        return u == c && l[0] == 0 && z ? this.result(-100 + (H ? -200 : 0), l, e) : w == c && V == 0 ? [
            -200 - e.length,
            0,
            K
        ] : r > -1 ? [
            -700 - e.length,
            r,
            r + this.pattern.length
        ] : w == c ? [
            -200 + -700 - e.length,
            V,
            K
        ] : u == c ? this.result(-100 + (H ? -200 : 0) + -700 + (z ? 0 : -1100), l, e) : t.length == 2 ? null : this.result((s[0] ? -700 : 0) + -200 + -1100, s, e);
    }
    result(e, t, i) {
        let s = [
            e - i.length
        ], o = 1;
        for (let l of t){
            let r = l + (this.astral ? be(oe(i, l)) : 1);
            o > 1 && s[o - 1] == l ? s[o - 1] = r : (s[o++] = l, s[o++] = r);
        }
        return s;
    }
}, C4 = A.define({
    combine (n) {
        return ht(n, {
            activateOnTyping: !0,
            override: null,
            closeOnBlur: !0,
            maxRenderedOptions: 100,
            defaultKeymap: !0,
            optionClass: ()=>"",
            aboveCursor: !1,
            icons: !0,
            addToOptions: []
        }, {
            defaultKeymap: (e, t)=>e && t,
            closeOnBlur: (e, t)=>e && t,
            icons: (e, t)=>e && t,
            optionClass: (e, t)=>(i)=>_e4(e(i), t(i)),
            addToOptions: (e, t)=>e.concat(t)
        });
    }
});
function _e4(n, e) {
    return n ? e ? n + " " + e : n : e;
}
function et2(n) {
    let e = n.addToOptions.slice();
    return n.icons && e.push({
        render (t) {
            let i = document.createElement("div");
            return i.classList.add("cm-completionIcon"), t.type && i.classList.add(...t.type.split(/\s+/g).map((s)=>"cm-completionIcon-" + s)), i.setAttribute("aria-hidden", "true"), i;
        },
        position: 20
    }), e.push({
        render (t, i, s) {
            let o = document.createElement("span");
            o.className = "cm-completionLabel";
            let { label: l  } = t, r = 0;
            for(let c = 1; c < s.length;){
                let a = s[c++], f = s[c++];
                a > r && o.appendChild(document.createTextNode(l.slice(r, a)));
                let u = o.appendChild(document.createElement("span"));
                u.appendChild(document.createTextNode(l.slice(a, f))), u.className = "cm-completionMatchedText", r = f;
            }
            return r < l.length && o.appendChild(document.createTextNode(l.slice(r))), o;
        },
        position: 50
    }, {
        render (t) {
            if (!t.detail) return null;
            let i = document.createElement("span");
            return i.className = "cm-completionDetail", i.textContent = t.detail, i;
        },
        position: 80
    }), e.sort((t, i)=>t.position - i.position).map((t)=>t.render);
}
function pe4(n, e, t) {
    if (n <= t) return {
        from: 0,
        to: n
    };
    if (e <= n >> 1) {
        let s = Math.floor(e / t);
        return {
            from: s * t,
            to: (s + 1) * t
        };
    }
    let i = Math.floor((n - e) / t);
    return {
        from: n - (i + 1) * t,
        to: n - i * t
    };
}
var _5 = class {
    constructor(e, t){
        this.view = e, this.stateField = t, this.info = null, this.placeInfo = {
            read: ()=>this.measureInfo(),
            write: (r)=>this.positionInfo(r),
            key: this
        };
        let i = e.state.field(t), { options: s , selected: o  } = i.open, l = e.state.facet(C4);
        this.optionContent = et2(l), this.optionClass = l.optionClass, this.range = pe4(s.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.dom.addEventListener("mousedown", (r)=>{
            for(let c = r.target, a; c && c != this.dom; c = c.parentNode)if (c.nodeName == "LI" && (a = /-(\d+)$/.exec(c.id)) && +a[1] < s.length) {
                Ae5(e, s[+a[1]]), r.preventDefault();
                return;
            }
        }), this.list = this.dom.appendChild(this.createListBox(s, i.id, this.range)), this.list.addEventListener("scroll", ()=>{
            this.info && this.view.requestMeasure(this.placeInfo);
        });
    }
    mount() {
        this.updateSel();
    }
    update(e) {
        e.state.field(this.stateField) != e.startState.field(this.stateField) && this.updateSel();
    }
    positioned() {
        this.info && this.view.requestMeasure(this.placeInfo);
    }
    updateSel() {
        let e = this.view.state.field(this.stateField), t = e.open;
        if ((t.selected < this.range.from || t.selected >= this.range.to) && (this.range = pe4(t.options.length, t.selected, this.view.state.facet(C4).maxRenderedOptions), this.list.remove(), this.list = this.dom.appendChild(this.createListBox(t.options, e.id, this.range)), this.list.addEventListener("scroll", ()=>{
            this.info && this.view.requestMeasure(this.placeInfo);
        })), this.updateSelectedOption(t.selected)) {
            this.info && (this.info.remove(), this.info = null);
            let { completion: i  } = t.options[t.selected], { info: s  } = i;
            if (!s) return;
            let o = typeof s == "string" ? document.createTextNode(s) : s(i);
            if (!o) return;
            "then" in o ? o.then((l)=>{
                l && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(l);
            }).catch((l)=>nt1(this.view.state, l, "completion info")) : this.addInfoPane(o);
        }
    }
    addInfoPane(e) {
        let t = this.info = document.createElement("div");
        t.className = "cm-tooltip cm-completionInfo", t.appendChild(e), this.dom.appendChild(t), this.view.requestMeasure(this.placeInfo);
    }
    updateSelectedOption(e) {
        let t = null;
        for(let i = this.list.firstChild, s = this.range.from; i; i = i.nextSibling, s++)s == e ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), t = i) : i.hasAttribute("aria-selected") && i.removeAttribute("aria-selected");
        return t && nt3(this.list, t), t;
    }
    measureInfo() {
        let e = this.dom.querySelector("[aria-selected]");
        if (!e || !this.info) return null;
        let t = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), s = e.getBoundingClientRect();
        if (s.top > Math.min(innerHeight, t.bottom) - 10 || s.bottom < Math.max(0, t.top) + 10) return null;
        let o = Math.max(0, Math.min(s.top, innerHeight - i.height)) - t.top, l = this.view.textDirection == R1.RTL, r = t.left, c = innerWidth - t.right;
        return l && r < Math.min(i.width, c) ? l = !1 : !l && c < Math.min(i.width, r) && (l = !0), {
            top: o,
            left: l
        };
    }
    positionInfo(e) {
        this.info && (this.info.style.top = (e ? e.top : -1e6) + "px", e && (this.info.classList.toggle("cm-completionInfo-left", e.left), this.info.classList.toggle("cm-completionInfo-right", !e.left)));
    }
    createListBox(e, t, i) {
        let s = document.createElement("ul");
        s.id = t, s.setAttribute("role", "listbox"), s.setAttribute("aria-expanded", "true"), s.setAttribute("aria-label", this.view.state.phrase("Completions"));
        for(let o = i.from; o < i.to; o++){
            let { completion: l , match: r  } = e[o], c = s.appendChild(document.createElement("li"));
            c.id = t + "-" + o, c.setAttribute("role", "option");
            let a = this.optionClass(l);
            a && (c.className = a);
            for (let f of this.optionContent){
                let u = f(l, this.view.state, r);
                u && c.appendChild(u);
            }
        }
        return i.from && s.classList.add("cm-completionListIncompleteTop"), i.to < e.length && s.classList.add("cm-completionListIncompleteBottom"), s;
    }
};
function tt2(n) {
    return (e)=>new _5(e, n);
}
function nt3(n, e) {
    let t = n.getBoundingClientRect(), i = e.getBoundingClientRect();
    i.top < t.top ? n.scrollTop -= t.top - i.top : i.bottom > t.bottom && (n.scrollTop += i.bottom - t.bottom);
}
function de4(n) {
    return (n.boost || 0) * 100 + (n.apply ? 10 : 0) + (n.info ? 5 : 0) + (n.type ? 1 : 0);
}
function it4(n, e) {
    let t = [], i = 0;
    for (let l of n)if (l.hasResult()) if (l.result.filter === !1) {
        let r = l.result.getMatch;
        for (let c of l.result.options){
            let a = [
                1e9 - i++
            ];
            if (r) for (let f of r(c))a.push(f);
            t.push(new $6(c, l, a));
        }
    } else {
        let r1 = new Z6(e.sliceDoc(l.from, l.to)), c1;
        for (let a1 of l.result.options)(c1 = r1.match(a1.label)) && (a1.boost != null && (c1[0] += a1.boost), t.push(new $6(a1, l, c1)));
    }
    let s = [], o = null;
    for (let l1 of t.sort(rt3))!o || o.label != l1.completion.label || o.detail != l1.completion.detail || o.type != null && l1.completion.type != null && o.type != l1.completion.type || o.apply != l1.completion.apply ? s.push(l1) : de4(l1.completion) > de4(o) && (s[s.length - 1] = l1), o = l1.completion;
    return s;
}
var E3 = class {
    constructor(e, t, i, s, o){
        this.options = e, this.attrs = t, this.tooltip = i, this.timestamp = s, this.selected = o;
    }
    setSelected(e, t) {
        return e == this.selected || e >= this.options.length ? this : new E3(this.options, me4(t, e), this.tooltip, this.timestamp, e);
    }
    static build(e, t, i, s, o) {
        let l = it4(e, t);
        if (!l.length) return null;
        let r = 0;
        if (s && s.selected) {
            let c = s.options[s.selected].completion;
            for(let a = 0; a < l.length; a++)if (l[a].completion == c) {
                r = a;
                break;
            }
        }
        return new E3(l, me4(i, r), {
            pos: e.reduce((c, a)=>a.hasResult() ? Math.min(c, a.from) : c, 1e8),
            create: tt2(d1),
            above: o.aboveCursor
        }, s ? s.timestamp : Date.now(), r);
    }
    map(e) {
        return new E3(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), {
            pos: e.mapPos(this.tooltip.pos)
        }), this.timestamp, this.selected);
    }
}, A7 = class {
    constructor(e, t, i){
        this.active = e, this.id = t, this.open = i;
    }
    static start() {
        return new A7(lt3, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
    }
    update(e) {
        let { state: t  } = e, i = t.facet(C4), o = (i.override || t.languageDataAt("autocomplete", x5(t)).map(Ze2)).map((r)=>(this.active.find((a)=>a.source == r) || new p4(r, this.active.some((a)=>a.state != 0) ? 1 : 0)).update(e, i));
        o.length == this.active.length && o.every((r, c)=>r == this.active[c]) && (o = this.active);
        let l = e.selection || o.some((r)=>r.hasResult() && e.changes.touchesRange(r.from, r.to)) || !st4(o, this.active) ? E3.build(o, t, this.id, this.open, i) : this.open && e.docChanged ? this.open.map(e.changes) : this.open;
        !l && o.every((r)=>r.state != 1) && o.some((r)=>r.hasResult()) && (o = o.map((r)=>r.hasResult() ? new p4(r.source, 0) : r));
        for (let r of e.effects)r.is(oe5) && (l = l && l.setSelected(r.value, this.id));
        return o == this.active && l == this.open ? this : new A7(o, this.id, l);
    }
    get tooltip() {
        return this.open ? this.open.tooltip : null;
    }
    get attrs() {
        return this.open ? this.open.attrs : ot2;
    }
};
function st4(n, e) {
    if (n == e) return !0;
    for(let t = 0, i = 0;;){
        for(; t < n.length && !n[t].hasResult;)t++;
        for(; i < e.length && !e[i].hasResult;)i++;
        let s = t == n.length, o = i == e.length;
        if (s || o) return s == o;
        if (n[t++].result != e[i++].result) return !1;
    }
}
var ot2 = {
    "aria-autocomplete": "list"
};
function me4(n, e) {
    return {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-activedescendant": n + "-" + e,
        "aria-controls": n
    };
}
var lt3 = [];
function rt3(n, e) {
    let t = e.match[0] - n.match[0];
    return t || n.completion.label.localeCompare(e.completion.label);
}
function ee6(n) {
    return n.isUserEvent("input.type") ? "input" : n.isUserEvent("delete.backward") ? "delete" : null;
}
var p4 = class {
    constructor(e, t, i = -1){
        this.source = e, this.state = t, this.explicitPos = i;
    }
    hasResult() {
        return !1;
    }
    update(e, t) {
        let i = ee6(e), s = this;
        i ? s = s.handleUserEvent(e, i, t) : e.docChanged ? s = s.handleChange(e) : e.selection && s.state != 0 && (s = new p4(s.source, 0));
        for (let o of e.effects)if (o.is(se5)) s = new p4(s.source, 1, o.value ? x5(e.state) : -1);
        else if (o.is(W6)) s = new p4(s.source, 0);
        else if (o.is(Oe4)) for (let l of o.value)l.source == s.source && (s = l);
        return s;
    }
    handleUserEvent(e, t, i) {
        return t == "delete" || !i.activateOnTyping ? this.map(e.changes) : new p4(this.source, 1);
    }
    handleChange(e) {
        return e.changes.touchesRange(x5(e.startState)) ? new p4(this.source, 0) : this.map(e.changes);
    }
    map(e) {
        return e.empty || this.explicitPos < 0 ? this : new p4(this.source, this.state, e.mapPos(this.explicitPos));
    }
}, P7 = class extends p4 {
    constructor(e, t, i, s, o){
        super(e, 2, t), this.result = i, this.from = s, this.to = o;
    }
    hasResult() {
        return !0;
    }
    handleUserEvent(e, t, i) {
        var s;
        let o = e.changes.mapPos(this.from), l = e.changes.mapPos(this.to, 1), r = x5(e.state);
        if ((this.explicitPos < 0 ? r <= o : r < this.from) || r > l || t == "delete" && x5(e.startState) == this.from) return new p4(this.source, t == "input" && i.activateOnTyping ? 1 : 0);
        let c = this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos), a;
        return ct3(this.result.validFor, e.state, o, l) ? new P7(this.source, c, this.result, o, l) : this.result.update && (a = this.result.update(this.result, o, l, new U5(e.state, r, c >= 0))) ? new P7(this.source, c, a, a.from, (s = a.to) !== null && s !== void 0 ? s : x5(e.state)) : new p4(this.source, 1, c);
    }
    handleChange(e) {
        return e.changes.touchesRange(this.from, this.to) ? new p4(this.source, 0) : this.map(e.changes);
    }
    map(e) {
        return e.empty ? this : new P7(this.source, this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos), this.result, e.mapPos(this.from), e.mapPos(this.to, 1));
    }
};
function ct3(n, e, t, i) {
    if (!n) return !1;
    let s = e.sliceDoc(t, i);
    return typeof n == "function" ? n(s, t, i, e) : Te4(n, !0).test(s);
}
var se5 = y.define(), W6 = y.define(), Oe4 = y.define({
    map (n, e) {
        return n.map((t)=>t.map(e));
    }
}), oe5 = y.define(), d1 = F.define({
    create () {
        return A7.start();
    },
    update (n, e) {
        return n.update(e);
    },
    provide: (n)=>[
            rn.from(n, (e)=>e.tooltip),
            C1.contentAttributes.from(n, (e)=>e.attrs)
        ]
}), Le4 = 75;
function j6(n, e = "option") {
    return (t)=>{
        let i = t.state.field(d1, !1);
        if (!i || !i.open || Date.now() - i.open.timestamp < Le4) return !1;
        let s = 1, o;
        e == "page" && (o = ho(t, i.open.tooltip)) && (s = Math.max(2, Math.floor(o.dom.offsetHeight / o.dom.querySelector("li").offsetHeight) - 1));
        let l = i.open.selected + s * (n ? 1 : -1), { length: r  } = i.open.options;
        return l < 0 ? l = e == "page" ? 0 : r - 1 : l >= r && (l = e == "page" ? r - 1 : 0), t.dispatch({
            effects: oe5.of(l)
        }), !0;
    };
}
var at3 = (n)=>{
    let e = n.state.field(d1, !1);
    return n.state.readOnly || !e || !e.open || Date.now() - e.open.timestamp < Le4 ? !1 : (Ae5(n, e.open.options[e.open.selected]), !0);
}, ft1 = (n)=>n.state.field(d1, !1) ? (n.dispatch({
        effects: se5.of(!0)
    }), !0) : !1, ut3 = (n)=>{
    let e = n.state.field(d1, !1);
    return !e || !e.active.some((t)=>t.state != 0) ? !1 : (n.dispatch({
        effects: W6.of(null)
    }), !0);
}, te6 = class {
    constructor(e, t){
        this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
    }
}, ge4 = 50, ht3 = 50, pt3 = 1e3, dt2 = V1.fromClass(class {
    constructor(n){
        this.view = n, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.composing = 0;
        for (let e of n.state.field(d1).active)e.state == 1 && this.startQuery(e);
    }
    update(n) {
        let e = n.state.field(d1);
        if (!n.selectionSet && !n.docChanged && n.startState.field(d1) == e) return;
        let t = n.transactions.some((i)=>(i.selection || i.docChanged) && !ee6(i));
        for(let i = 0; i < this.running.length; i++){
            let s = this.running[i];
            if (t || s.updates.length + n.transactions.length > ht3 && Date.now() - s.time > pt3) {
                for (let o of s.context.abortListeners)try {
                    o();
                } catch (l) {
                    nt1(this.view.state, l);
                }
                s.context.abortListeners = null, this.running.splice(i--, 1);
            } else s.updates.push(...n.transactions);
        }
        if (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), this.debounceUpdate = e.active.some((i)=>i.state == 1 && !this.running.some((s)=>s.active.source == i.source)) ? setTimeout(()=>this.startUpdate(), ge4) : -1, this.composing != 0) for (let i1 of n.transactions)ee6(i1) == "input" ? this.composing = 2 : this.composing == 2 && i1.selection && (this.composing = 3);
    }
    startUpdate() {
        this.debounceUpdate = -1;
        let { state: n  } = this.view, e = n.field(d1);
        for (let t of e.active)t.state == 1 && !this.running.some((i)=>i.active.source == t.source) && this.startQuery(t);
    }
    startQuery(n) {
        let { state: e  } = this.view, t = x5(e), i = new U5(e, t, n.explicitPos == t), s = new te6(n, i);
        this.running.push(s), Promise.resolve(n.source(i)).then((o)=>{
            s.context.aborted || (s.done = o || null, this.scheduleAccept());
        }, (o)=>{
            this.view.dispatch({
                effects: W6.of(null)
            }), nt1(this.view.state, o);
        });
    }
    scheduleAccept() {
        this.running.every((n)=>n.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(()=>this.accept(), ge4));
    }
    accept() {
        var n;
        this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
        let e = [], t = this.view.state.facet(C4);
        for(let i = 0; i < this.running.length; i++){
            let s = this.running[i];
            if (s.done === void 0) continue;
            if (this.running.splice(i--, 1), s.done) {
                let l = new P7(s.active.source, s.active.explicitPos, s.done, s.done.from, (n = s.done.to) !== null && n !== void 0 ? n : x5(s.updates.length ? s.updates[0].startState : this.view.state));
                for (let r of s.updates)l = l.update(r, t);
                if (l.hasResult()) {
                    e.push(l);
                    continue;
                }
            }
            let o = this.view.state.field(d1).active.find((l)=>l.source == s.active.source);
            if (o && o.state == 1) if (s.done == null) {
                let l1 = new p4(s.active.source, 0);
                for (let r1 of s.updates)l1 = l1.update(r1, t);
                l1.state != 1 && e.push(l1);
            } else this.startQuery(o);
        }
        e.length && this.view.dispatch({
            effects: Oe4.of(e)
        });
    }
}, {
    eventHandlers: {
        blur () {
            let n = this.view.state.field(d1, !1);
            n && n.tooltip && this.view.state.facet(C4).closeOnBlur && this.view.dispatch({
                effects: W6.of(null)
            });
        },
        compositionstart () {
            this.composing = 1;
        },
        compositionend () {
            this.composing == 3 && setTimeout(()=>this.view.dispatch({
                    effects: se5.of(!1)
                }), 20), this.composing = 0;
        }
    }
}), Re5 = C1.baseTheme({
    ".cm-tooltip.cm-tooltip-autocomplete": {
        "& > ul": {
            fontFamily: "monospace",
            whiteSpace: "nowrap",
            overflow: "hidden auto",
            maxWidth_fallback: "700px",
            maxWidth: "min(700px, 95vw)",
            minWidth: "250px",
            maxHeight: "10em",
            listStyle: "none",
            margin: 0,
            padding: 0,
            "& > li": {
                overflowX: "hidden",
                textOverflow: "ellipsis",
                cursor: "pointer",
                padding: "1px 3px",
                lineHeight: 1.2
            }
        }
    },
    "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
        background: "#17c",
        color: "white"
    },
    "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
        background: "#347",
        color: "white"
    },
    ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
        content: '"\xB7\xB7\xB7"',
        opacity: .5,
        display: "block",
        textAlign: "center"
    },
    ".cm-tooltip.cm-completionInfo": {
        position: "absolute",
        padding: "3px 9px",
        width: "max-content",
        maxWidth: "300px"
    },
    ".cm-completionInfo.cm-completionInfo-left": {
        right: "100%"
    },
    ".cm-completionInfo.cm-completionInfo-right": {
        left: "100%"
    },
    "&light .cm-snippetField": {
        backgroundColor: "#00000022"
    },
    "&dark .cm-snippetField": {
        backgroundColor: "#ffffff22"
    },
    ".cm-snippetFieldPosition": {
        verticalAlign: "text-top",
        width: 0,
        height: "1.15em",
        margin: "0 -0.7px -.7em",
        borderLeft: "1.4px dotted #888"
    },
    ".cm-completionMatchedText": {
        textDecoration: "underline"
    },
    ".cm-completionDetail": {
        marginLeft: "0.5em",
        fontStyle: "italic"
    },
    ".cm-completionIcon": {
        fontSize: "90%",
        width: ".8em",
        display: "inline-block",
        textAlign: "center",
        paddingRight: ".6em",
        opacity: "0.6"
    },
    ".cm-completionIcon-function, .cm-completionIcon-method": {
        "&:after": {
            content: "'\u0192'"
        }
    },
    ".cm-completionIcon-class": {
        "&:after": {
            content: "'\u25CB'"
        }
    },
    ".cm-completionIcon-interface": {
        "&:after": {
            content: "'\u25CC'"
        }
    },
    ".cm-completionIcon-variable": {
        "&:after": {
            content: "'\u{1D465}'"
        }
    },
    ".cm-completionIcon-constant": {
        "&:after": {
            content: "'\u{1D436}'"
        }
    },
    ".cm-completionIcon-type": {
        "&:after": {
            content: "'\u{1D461}'"
        }
    },
    ".cm-completionIcon-enum": {
        "&:after": {
            content: "'\u222A'"
        }
    },
    ".cm-completionIcon-property": {
        "&:after": {
            content: "'\u25A1'"
        }
    },
    ".cm-completionIcon-keyword": {
        "&:after": {
            content: "'\u{1F511}\uFE0E'"
        }
    },
    ".cm-completionIcon-namespace": {
        "&:after": {
            content: "'\u25A2'"
        }
    },
    ".cm-completionIcon-text": {
        "&:after": {
            content: "'abc'",
            fontSize: "50%",
            verticalAlign: "middle"
        }
    }
}), ne4 = class {
    constructor(e, t, i, s){
        this.field = e, this.line = t, this.from = i, this.to = s;
    }
}, O4 = class {
    constructor(e, t, i){
        this.field = e, this.from = t, this.to = i;
    }
    map(e) {
        let t = e.mapPos(this.from, -1, M.TrackDel), i = e.mapPos(this.to, 1, M.TrackDel);
        return t == null || i == null ? null : new O4(this.field, t, i);
    }
}, L3 = class {
    constructor(e, t){
        this.lines = e, this.fieldPositions = t;
    }
    instantiate(e, t) {
        let i = [], s = [
            t
        ], o = e.doc.lineAt(t), l = /^\s*/.exec(o.text)[0];
        for (let c of this.lines){
            if (i.length) {
                let a = l, f = /^\t*/.exec(c)[0].length;
                for(let u = 0; u < f; u++)a += e.facet(Pt1);
                s.push(t + a.length - f), c = a + c.slice(f);
            }
            i.push(c), t += c.length + 1;
        }
        let r = this.fieldPositions.map((c)=>new O4(c.field, s[c.line] + c.from, s[c.line] + c.to));
        return {
            text: i,
            ranges: r
        };
    }
    static parse(e) {
        let t = [], i = [], s = [], o;
        for (let l of e.split(/\r\n?|\n/)){
            for(; o = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(l);){
                let r = o[1] ? +o[1] : null, c = o[2] || o[3] || "", a = -1;
                for(let f = 0; f < t.length; f++)(r != null ? t[f].seq == r : c ? t[f].name == c : !1) && (a = f);
                if (a < 0) {
                    let f1 = 0;
                    for(; f1 < t.length && (r == null || t[f1].seq != null && t[f1].seq < r);)f1++;
                    t.splice(f1, 0, {
                        seq: r,
                        name: c
                    }), a = f1;
                    for (let u of s)u.field >= a && u.field++;
                }
                s.push(new ne4(a, i.length, o.index, o.index + c.length)), l = l.slice(0, o.index) + c + l.slice(o.index + o[0].length);
            }
            i.push(l);
        }
        return new L3(i, s);
    }
}, mt3 = M1.widget({
    widget: new class extends X1 {
        toDOM() {
            let n = document.createElement("span");
            return n.className = "cm-snippetFieldPosition", n;
        }
        ignoreEvent() {
            return !1;
        }
    }
}), gt1 = M1.mark({
    class: "cm-snippetField"
}), I6 = class {
    constructor(e, t){
        this.ranges = e, this.active = t, this.deco = M1.set(e.map((i)=>(i.from == i.to ? mt3 : gt1).range(i.from, i.to)));
    }
    map(e) {
        let t = [];
        for (let i of this.ranges){
            let s = i.map(e);
            if (!s) return null;
            t.push(s);
        }
        return new I6(t, this.active);
    }
    selectionInsideField(e) {
        return e.ranges.every((t)=>this.ranges.some((i)=>i.field == this.active && i.from <= t.from && i.to >= t.to));
    }
}, k3 = y.define({
    map (n, e) {
        return n && n.map(e);
    }
}), bt1 = y.define(), R6 = F.define({
    create () {
        return null;
    },
    update (n, e) {
        for (let t of e.effects){
            if (t.is(k3)) return t.value;
            if (t.is(bt1) && n) return new I6(n.ranges, t.value);
        }
        return n && e.docChanged && (n = n.map(e.changes)), n && e.selection && !n.selectionInsideField(e.selection) && (n = null), n;
    },
    provide: (n)=>C1.decorations.from(n, (e)=>e ? e.deco : M1.none)
});
function le6(n, e) {
    return g.create(n.filter((t)=>t.field == e).map((t)=>g.range(t.from, t.to)));
}
function Me5(n) {
    return ({ state: e , dispatch: t  })=>{
        let i = e.field(R6, !1);
        if (!i || n < 0 && i.active == 0) return !1;
        let s = i.active + n, o = n > 0 && !i.ranges.some((l)=>l.field == s + n);
        return t(e.update({
            selection: le6(i.ranges, s),
            effects: k3.of(o ? null : new I6(i.ranges, s))
        })), !0;
    };
}
var vt3 = ({ state: n , dispatch: e  })=>n.field(R6, !1) ? (e(n.update({
        effects: k3.of(null)
    })), !0) : !1, wt2 = Me5(1), xt3 = Me5(-1), Ct2 = [
    {
        key: "Tab",
        run: wt2,
        shift: xt3
    },
    {
        key: "Escape",
        run: vt3
    }
], be4 = A.define({
    combine (n) {
        return n.length ? n[0] : Ct2;
    }
}), It3 = lt.highest(dr.compute([
    be4
], (n)=>n.facet(be4)));
C1.domEventHandlers({
    mousedown (n, e) {
        let t = e.state.field(R6, !1), i;
        if (!t || (i = e.posAtCoords({
            x: n.clientX,
            y: n.clientY
        })) == null) return !1;
        let s = t.ranges.find((o)=>o.from <= i && o.to >= i);
        return !s || s.field == t.active ? !1 : (e.dispatch({
            selection: le6(t.ranges, s.field),
            effects: k3.of(t.ranges.some((o)=>o.field > s.field) ? new I6(t.ranges, s.field) : null)
        }), !0);
    }
});
Object.create(null);
var F5 = {
    brackets: [
        "(",
        "[",
        "{",
        "'",
        '"'
    ],
    before: ")]}:;>"
}, S4 = y.define({
    map (n, e) {
        let t = e.mapPos(n, -1, M.TrackAfter);
        return t ?? void 0;
    }
}), re4 = y.define({
    map (n, e) {
        return e.mapPos(n);
    }
}), ce5 = new class extends j {
};
ce5.startSide = 1;
ce5.endSide = -1;
var ke5 = F.define({
    create () {
        return P.empty;
    },
    update (n, e) {
        if (e.selection) {
            let t = e.state.doc.lineAt(e.selection.main.head).from, i = e.startState.doc.lineAt(e.startState.selection.main.head).from;
            t != e.changes.mapPos(i, -1) && (n = P.empty);
        }
        n = n.map(e.changes);
        for (let t1 of e.effects)t1.is(S4) ? n = n.update({
            add: [
                ce5.range(t1.value, t1.value + 1)
            ]
        }) : t1.is(re4) && (n = n.update({
            filter: (i)=>i != t1.value
        }));
        return n;
    }
});
function zt2() {
    return [
        At3,
        ke5
    ];
}
var Y5 = "()[]{}<>";
function De5(n) {
    for(let e = 0; e < Y5.length; e += 2)if (Y5.charCodeAt(e) == n) return Y5.charAt(e + 1);
    return rt(n < 128 ? n : n + 1);
}
function je2(n, e) {
    return n.languageDataAt("closeBrackets", e)[0] || F5;
}
var Tt3 = typeof navigator == "object" && /Android\b/.test(navigator.userAgent), At3 = C1.inputHandler.of((n, e, t, i)=>{
    if ((Tt3 ? n.composing : n.compositionStarted) || n.state.readOnly) return !1;
    let s = n.state.selection.main;
    if (i.length > 2 || i.length == 2 && be(oe(i, 0)) == 1 || e != s.from || t != s.to) return !1;
    let o = Lt3(n.state, i);
    return o ? (n.dispatch(o), !0) : !1;
}), Ot3 = ({ state: n , dispatch: e  })=>{
    if (n.readOnly) return !1;
    let i = je2(n, n.selection.main.head).brackets || F5.brackets, s = null, o = n.changeByRange((l)=>{
        if (l.empty) {
            let r = Rt2(n.doc, l.head);
            for (let c of i)if (c == r && q6(n.doc, l.head) == De5(oe(c, 0))) return {
                changes: {
                    from: l.head - c.length,
                    to: l.head + c.length
                },
                range: g.cursor(l.head - c.length),
                userEvent: "delete.backward"
            };
        }
        return {
            range: s = l
        };
    });
    return s || e(n.update(o, {
        scrollIntoView: !0
    })), !s;
}, Qt2 = [
    {
        key: "Backspace",
        run: Ot3
    }
];
function Lt3(n, e) {
    let t = je2(n, n.selection.main.head), i = t.brackets || F5.brackets;
    for (let s of i){
        let o = De5(oe(s, 0));
        if (e == s) return o == s ? kt2(n, s, i.indexOf(s + s + s) > -1) : Mt2(n, s, o, t.before || F5.before);
        if (e == o && Ue4(n, n.selection.main.from)) return Bt3(n, s, o);
    }
    return null;
}
function Ue4(n, e) {
    let t = !1;
    return n.field(ke5).between(0, n.doc.length, (i)=>{
        i == e && (t = !0);
    }), t;
}
function q6(n, e) {
    let t = n.sliceString(e, e + 2);
    return t.slice(0, be(oe(t, 0)));
}
function Rt2(n, e) {
    let t = n.sliceString(e - 2, e);
    return be(oe(t, 0)) == t.length ? t : t.slice(1);
}
function Mt2(n, e, t, i) {
    let s = null, o = n.changeByRange((l)=>{
        if (!l.empty) return {
            changes: [
                {
                    insert: e,
                    from: l.from
                },
                {
                    insert: t,
                    from: l.to
                }
            ],
            effects: S4.of(l.to + e.length),
            range: g.range(l.anchor + e.length, l.head + e.length)
        };
        let r = q6(n.doc, l.head);
        return !r || /\s/.test(r) || i.indexOf(r) > -1 ? {
            changes: {
                insert: e + t,
                from: l.head
            },
            effects: S4.of(l.head + e.length),
            range: g.cursor(l.head + e.length)
        } : {
            range: s = l
        };
    });
    return s ? null : n.update(o, {
        scrollIntoView: !0,
        userEvent: "input.type"
    });
}
function Bt3(n, e, t) {
    let i = null, s = n.selection.ranges.map((o)=>o.empty && q6(n.doc, o.head) == t ? g.cursor(o.head + t.length) : i = o);
    return i ? null : n.update({
        selection: g.create(s, n.selection.mainIndex),
        scrollIntoView: !0,
        effects: n.selection.ranges.map(({ from: o  })=>re4.of(o))
    });
}
function kt2(n, e, t) {
    let i = null, s = n.changeByRange((o)=>{
        if (!o.empty) return {
            changes: [
                {
                    insert: e,
                    from: o.from
                },
                {
                    insert: e,
                    from: o.to
                }
            ],
            effects: S4.of(o.to + e.length),
            range: g.range(o.anchor + e.length, o.head + e.length)
        };
        let l = o.head, r = q6(n.doc, l);
        if (r == e) {
            if (xe5(n, l)) return {
                changes: {
                    insert: e + e,
                    from: l
                },
                effects: S4.of(l + e.length),
                range: g.cursor(l + e.length)
            };
            if (Ue4(n, l)) {
                let c = t && n.sliceDoc(l, l + e.length * 3) == e + e + e;
                return {
                    range: g.cursor(l + e.length * (c ? 3 : 1)),
                    effects: re4.of(l)
                };
            }
        } else {
            if (t && n.sliceDoc(l - 2 * e.length, l) == e + e && xe5(n, l - 2 * e.length)) return {
                changes: {
                    insert: e + e + e + e,
                    from: l
                },
                effects: S4.of(l + e.length),
                range: g.cursor(l + e.length)
            };
            if (n.charCategorizer(l)(r) != R.Word) {
                let c1 = n.sliceDoc(l - 1, l);
                if (c1 != e && n.charCategorizer(l)(c1) != R.Word && !Dt3(n, l, e)) return {
                    changes: {
                        insert: e + e,
                        from: l
                    },
                    effects: S4.of(l + e.length),
                    range: g.cursor(l + e.length)
                };
            }
        }
        return {
            range: i = o
        };
    });
    return i ? null : n.update(s, {
        scrollIntoView: !0,
        userEvent: "input.type"
    });
}
function xe5(n, e) {
    let t = m2(n).resolveInner(e + 1);
    return t.parent && t.from == e;
}
function Dt3(n, e, t) {
    let i = m2(n).resolveInner(e, -1);
    for(let s = 0; s < 5; s++){
        if (n.sliceDoc(i.from, i.from + t.length) == t) return !0;
        let o = i.to == e && i.parent;
        if (!o) break;
        i = o;
    }
    return !1;
}
function Xt2(n = {}) {
    return [
        d1,
        C4.of(n),
        dt2,
        Ut3,
        Re5
    ];
}
var jt3 = [
    {
        key: "Ctrl-Space",
        run: ft1
    },
    {
        key: "Escape",
        run: ut3
    },
    {
        key: "ArrowDown",
        run: j6(!0)
    },
    {
        key: "ArrowUp",
        run: j6(!1)
    },
    {
        key: "PageDown",
        run: j6(!0, "page")
    },
    {
        key: "PageUp",
        run: j6(!1, "page")
    },
    {
        key: "Enter",
        run: at3
    }
], Ut3 = lt.highest(dr.computeN([
    C4
], (n)=>n.facet(C4).defaultKeymap ? [
        jt3
    ] : []));
new WeakMap;
var R7 = class {
    constructor(e, o, i){
        this.from = e, this.to = o, this.diagnostic = i;
    }
}, m4 = class {
    constructor(e, o, i){
        this.diagnostics = e, this.panel = o, this.selected = i;
    }
    static init(e, o, i) {
        let n = e, s = i.facet(h1).markerFilter;
        s && (n = s(n));
        let r = M1.set(n.map((l)=>l.from == l.to || l.from == l.to - 1 && i.doc.lineAt(l.from).to == l.from ? M1.widget({
                widget: new A8(l),
                diagnostic: l
            }).range(l.from) : M1.mark({
                attributes: {
                    class: "cm-lintRange cm-lintRange-" + l.severity
                },
                diagnostic: l
            }).range(l.from, l.to)), !0);
        return new m4(r, o, b3(r));
    }
};
function b3(t, e = null, o = 0) {
    let i = null;
    return t.between(o, 1e9, (n, s, { spec: r  })=>{
        if (!(e && r.diagnostic != e)) return i = new R7(n, s, r.diagnostic), !1;
    }), i;
}
function j7(t, e) {
    return !!(t.effects.some((o)=>o.is(C5)) || t.changes.touchesRange(e.pos));
}
function G6(t, e) {
    return t.field(d2, !1) ? e : e.concat(y.appendConfig.of([
        d2,
        C1.decorations.compute([
            d2
        ], (o)=>{
            let { selected: i , panel: n  } = o.field(d2);
            return !i || !n || i.from == i.to ? M1.none : M1.set([
                ie4.range(i.from, i.to)
            ]);
        }),
        lo(oe6, {
            hideOn: j7
        }),
        le7
    ]));
}
function te7(t, e) {
    return {
        effects: G6(t, [
            C5.of(e)
        ])
    };
}
var C5 = y.define(), F6 = y.define(), $7 = y.define(), d2 = F.define({
    create () {
        return new m4(M1.none, null, null);
    },
    update (t, e) {
        if (e.docChanged) {
            let o = t.diagnostics.map(e.changes), i = null;
            if (t.selected) {
                let n = e.changes.mapPos(t.selected.from, 1);
                i = b3(o, t.selected.diagnostic, n) || b3(o, null, n);
            }
            t = new m4(o, t.panel, i);
        }
        for (let o1 of e.effects)o1.is(C5) ? t = m4.init(o1.value, t.panel, e.state) : o1.is(F6) ? t = new m4(t.diagnostics, o1.value ? w6.open : null, t.selected) : o1.is($7) && (t = new m4(t.diagnostics, t.panel, o1.value));
        return t;
    },
    provide: (t)=>[
            ns.from(t, (e)=>e.panel),
            C1.decorations.from(t, (e)=>e.diagnostics)
        ]
});
var ie4 = M1.mark({
    class: "cm-lintRange cm-lintRange-active"
});
function oe6(t, e, o) {
    let { diagnostics: i  } = t.state.field(d2), n = [], s = 2e8, r = 0;
    i.between(e - (o < 0 ? 1 : 0), e + (o > 0 ? 1 : 0), (a, c, { spec: f  })=>{
        e >= a && e <= c && (a == c || (e > a || o > 0) && (e < c || o < 0)) && (n.push(f.diagnostic), s = Math.min(a, s), r = Math.max(c, r));
    });
    let l = t.state.facet(h1).tooltipFilter;
    return l && (n = l(n)), n.length ? {
        pos: s,
        end: r,
        above: t.state.doc.lineAt(s).to < r,
        create () {
            return {
                dom: H4(t, n)
            };
        }
    } : null;
}
function H4(t, e) {
    return s2("ul", {
        class: "cm-tooltip-lint"
    }, e.map((o)=>_6(t, o, !1)));
}
var ne5 = (t)=>{
    let e = t.state.field(d2, !1);
    (!e || !e.panel) && t.dispatch({
        effects: G6(t.state, [
            F6.of(!0)
        ])
    });
    let o = po(t, w6.open);
    return o && o.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, I7 = (t)=>{
    let e = t.state.field(d2, !1);
    return !e || !e.panel ? !1 : (t.dispatch({
        effects: F6.of(!1)
    }), !0);
}, se6 = (t)=>{
    let e = t.state.field(d2, !1);
    if (!e) return !1;
    let o = t.state.selection.main, i = e.diagnostics.iter(o.to + 1);
    return !i.value && (i = e.diagnostics.iter(0), !i.value || i.from == o.from && i.to == o.to) ? !1 : (t.dispatch({
        selection: {
            anchor: i.from,
            head: i.to
        },
        scrollIntoView: !0
    }), !0);
}, pe5 = [
    {
        key: "Mod-Shift-m",
        run: ne5
    },
    {
        key: "F8",
        run: se6
    }
], N7 = V1.fromClass(class {
    constructor(t){
        this.view = t, this.timeout = -1, this.set = !0;
        let { delay: e  } = t.state.facet(h1);
        this.lintTime = Date.now() + e, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, e);
    }
    run() {
        let t = Date.now();
        if (t < this.lintTime - 10) setTimeout(this.run, this.lintTime - t);
        else {
            this.set = !1;
            let { state: e  } = this.view, { sources: o  } = e.facet(h1);
            Promise.all(o.map((i)=>Promise.resolve(i(this.view)))).then((i)=>{
                let n = i.reduce((s, r)=>s.concat(r));
                this.view.state.doc == e.doc && this.view.dispatch(te7(this.view.state, n));
            }, (i)=>{
                nt1(this.view.state, i);
            });
        }
    }
    update(t) {
        let e = t.state.facet(h1);
        (t.docChanged || e != t.startState.facet(h1)) && (this.lintTime = Date.now() + e.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, e.delay)));
    }
    force() {
        this.set && (this.lintTime = Date.now(), this.run());
    }
    destroy() {
        clearTimeout(this.timeout);
    }
}), h1 = A.define({
    combine (t) {
        return Object.assign({
            sources: t.map((e)=>e.source)
        }, ht(t.map((e)=>e.config), {
            delay: 750,
            markerFilter: null,
            tooltipFilter: null
        }));
    },
    enables: N7
});
function V6(t) {
    let e = [];
    if (t) e: for (let { name: o  } of t){
        for(let i = 0; i < o.length; i++){
            let n = o[i];
            if (/[a-zA-Z]/.test(n) && !e.some((s)=>s.toLowerCase() == n.toLowerCase())) {
                e.push(n);
                continue e;
            }
        }
        e.push("");
    }
    return e;
}
function _6(t, e, o) {
    var i;
    let n = o ? V6(e.actions) : [];
    return s2("li", {
        class: "cm-diagnostic cm-diagnostic-" + e.severity
    }, s2("span", {
        class: "cm-diagnosticText"
    }, e.renderMessage ? e.renderMessage() : e.message), (i = e.actions) === null || i === void 0 ? void 0 : i.map((s, r)=>{
        let l = (p)=>{
            p.preventDefault();
            let S = b3(t.state.field(d2).diagnostics, e);
            S && s.apply(t, S.from, S.to);
        }, { name: a  } = s, c = n[r] ? a.indexOf(n[r]) : -1, f = c < 0 ? a : [
            a.slice(0, c),
            s2("u", a.slice(c, c + 1)),
            a.slice(c + 1)
        ];
        return s2("button", {
            type: "button",
            class: "cm-diagnosticAction",
            onclick: l,
            onmousedown: l,
            "aria-label": ` Action: ${a}${c < 0 ? "" : ` (access key "${n[r]})"`}.`
        }, f);
    }), e.source && s2("div", {
        class: "cm-diagnosticSource"
    }, e.source));
}
var A8 = class extends X1 {
    constructor(e){
        super(), this.diagnostic = e;
    }
    eq(e) {
        return e.diagnostic == this.diagnostic;
    }
    toDOM() {
        return s2("span", {
            class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity
        });
    }
}, y5 = class {
    constructor(e, o){
        this.diagnostic = o, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = _6(e, o, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
    }
}, w6 = class {
    constructor(e){
        this.view = e, this.items = [];
        let o = (n)=>{
            if (n.keyCode == 27) I7(this.view), this.view.focus();
            else if (n.keyCode == 38 || n.keyCode == 33) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
            else if (n.keyCode == 40 || n.keyCode == 34) this.moveSelection((this.selectedIndex + 1) % this.items.length);
            else if (n.keyCode == 36) this.moveSelection(0);
            else if (n.keyCode == 35) this.moveSelection(this.items.length - 1);
            else if (n.keyCode == 13) this.view.focus();
            else if (n.keyCode >= 65 && n.keyCode <= 90 && this.selectedIndex >= 0) {
                let { diagnostic: s  } = this.items[this.selectedIndex], r = V6(s.actions);
                for(let l = 0; l < r.length; l++)if (r[l].toUpperCase().charCodeAt(0) == n.keyCode) {
                    let a = b3(this.view.state.field(d2).diagnostics, s);
                    a && s.actions[l].apply(e, a.from, a.to);
                }
            } else return;
            n.preventDefault();
        }, i = (n)=>{
            for(let s = 0; s < this.items.length; s++)this.items[s].dom.contains(n.target) && this.moveSelection(s);
        };
        this.list = s2("ul", {
            tabIndex: 0,
            role: "listbox",
            "aria-label": this.view.state.phrase("Diagnostics"),
            onkeydown: o,
            onclick: i
        }), this.dom = s2("div", {
            class: "cm-panel-lint"
        }, this.list, s2("button", {
            type: "button",
            name: "close",
            "aria-label": this.view.state.phrase("close"),
            onclick: ()=>I7(this.view)
        }, "\xD7")), this.update();
    }
    get selectedIndex() {
        let e = this.view.state.field(d2).selected;
        if (!e) return -1;
        for(let o = 0; o < this.items.length; o++)if (this.items[o].diagnostic == e.diagnostic) return o;
        return -1;
    }
    update() {
        let { diagnostics: e , selected: o  } = this.view.state.field(d2), i = 0, n = !1, s = null;
        for(e.between(0, this.view.state.doc.length, (r, l, { spec: a  })=>{
            let c = -1, f;
            for(let p = i; p < this.items.length; p++)if (this.items[p].diagnostic == a.diagnostic) {
                c = p;
                break;
            }
            c < 0 ? (f = new y5(this.view, a.diagnostic), this.items.splice(i, 0, f), n = !0) : (f = this.items[c], c > i && (this.items.splice(i, c - i), n = !0)), o && f.diagnostic == o.diagnostic ? f.dom.hasAttribute("aria-selected") || (f.dom.setAttribute("aria-selected", "true"), s = f) : f.dom.hasAttribute("aria-selected") && f.dom.removeAttribute("aria-selected"), i++;
        }); i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0);)n = !0, this.items.pop();
        this.items.length == 0 && (this.items.push(new y5(this.view, {
            from: -1,
            to: -1,
            severity: "info",
            message: this.view.state.phrase("No diagnostics")
        })), n = !0), s ? (this.list.setAttribute("aria-activedescendant", s.id), this.view.requestMeasure({
            key: this,
            read: ()=>({
                    sel: s.dom.getBoundingClientRect(),
                    panel: this.list.getBoundingClientRect()
                }),
            write: ({ sel: r , panel: l  })=>{
                r.top < l.top ? this.list.scrollTop -= l.top - r.top : r.bottom > l.bottom && (this.list.scrollTop += r.bottom - l.bottom);
            }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), n && this.sync();
    }
    sync() {
        let e = this.list.firstChild;
        function o() {
            let i = e;
            e = i.nextSibling, i.remove();
        }
        for (let i of this.items)if (i.dom.parentNode == this.list) {
            for(; e != i.dom;)o();
            e = i.dom.nextSibling;
        } else this.list.insertBefore(i.dom, e);
        for(; e;)o();
    }
    moveSelection(e) {
        if (this.selectedIndex < 0) return;
        let o = this.view.state.field(d2), i = b3(o.diagnostics, this.items[e].diagnostic);
        !i || this.view.dispatch({
            selection: {
                anchor: i.from,
                head: i.to
            },
            scrollIntoView: !0,
            effects: $7.of(i)
        });
    }
    static open(e) {
        return new w6(e);
    }
};
function x6(t, e = 'viewBox="0 0 40 40"') {
    return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(t)}</svg>')`;
}
function P8(t) {
    return x6(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${t}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
var le7 = C1.baseTheme({
    ".cm-diagnostic": {
        padding: "3px 6px 3px 8px",
        marginLeft: "-1px",
        display: "block",
        whiteSpace: "pre-wrap"
    },
    ".cm-diagnostic-error": {
        borderLeft: "5px solid #d11"
    },
    ".cm-diagnostic-warning": {
        borderLeft: "5px solid orange"
    },
    ".cm-diagnostic-info": {
        borderLeft: "5px solid #999"
    },
    ".cm-diagnosticAction": {
        font: "inherit",
        border: "none",
        padding: "2px 4px",
        backgroundColor: "#444",
        color: "white",
        borderRadius: "3px",
        marginLeft: "8px"
    },
    ".cm-diagnosticSource": {
        fontSize: "70%",
        opacity: .7
    },
    ".cm-lintRange": {
        backgroundPosition: "left bottom",
        backgroundRepeat: "repeat-x",
        paddingBottom: "0.7px"
    },
    ".cm-lintRange-error": {
        backgroundImage: P8("#d11")
    },
    ".cm-lintRange-warning": {
        backgroundImage: P8("orange")
    },
    ".cm-lintRange-info": {
        backgroundImage: P8("#999")
    },
    ".cm-lintRange-active": {
        backgroundColor: "#ffdd9980"
    },
    ".cm-tooltip-lint": {
        padding: 0,
        margin: 0
    },
    ".cm-lintPoint": {
        position: "relative",
        "&:after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "-2px",
            borderLeft: "3px solid transparent",
            borderRight: "3px solid transparent",
            borderBottom: "4px solid #d11"
        }
    },
    ".cm-lintPoint-warning": {
        "&:after": {
            borderBottomColor: "orange"
        }
    },
    ".cm-lintPoint-info": {
        "&:after": {
            borderBottomColor: "#999"
        }
    },
    ".cm-panel.cm-panel-lint": {
        position: "relative",
        "& ul": {
            maxHeight: "100px",
            overflowY: "auto",
            "& [aria-selected]": {
                backgroundColor: "#ddd",
                "& u": {
                    textDecoration: "underline"
                }
            },
            "&:focus [aria-selected]": {
                background_fallback: "#bdf",
                backgroundColor: "Highlight",
                color_fallback: "white",
                color: "HighlightText"
            },
            "& u": {
                textDecoration: "none"
            },
            padding: 0,
            margin: 0
        },
        "& [name=close]": {
            position: "absolute",
            top: "0",
            right: "2px",
            background: "inherit",
            border: "none",
            font: "inherit",
            padding: 0,
            margin: 0
        }
    }
}), D4 = class extends _1 {
    constructor(e){
        super(), this.diagnostics = e, this.severity = e.reduce((o, i)=>{
            let n = i.severity;
            return n == "error" || n == "warning" && o == "info" ? n : o;
        }, "info");
    }
    toDOM(e) {
        let o = document.createElement("div");
        o.className = "cm-lint-marker cm-lint-marker-" + this.severity;
        let i = this.diagnostics, n = e.state.facet(T7).tooltipFilter;
        return n && (i = n(i)), i.length && (o.onmouseover = ()=>ae6(e, o, i)), o;
    }
};
function re5(t, e) {
    let o = (i)=>{
        let n = e.getBoundingClientRect();
        if (!(i.clientX > n.left - 10 && i.clientX < n.right + 10 && i.clientY > n.top - 10 && i.clientY < n.bottom + 10)) {
            for(let s = i.target; s; s = s.parentNode)if (s.nodeType == 1 && s.classList.contains("cm-tooltip-lint")) return;
            window.removeEventListener("mousemove", o), t.state.field(z5) && t.dispatch({
                effects: M7.of(null)
            });
        }
    };
    window.addEventListener("mousemove", o);
}
function ae6(t, e, o) {
    function i() {
        let r = t.elementAtHeight(e.getBoundingClientRect().top + 5 - t.documentTop);
        t.coordsAtPos(r.from) && t.dispatch({
            effects: M7.of({
                pos: r.from,
                above: !1,
                create () {
                    return {
                        dom: H4(t, o),
                        getCoords: ()=>e.getBoundingClientRect()
                    };
                }
            })
        }), e.onmouseout = e.onmousemove = null, re5(t, e);
    }
    let { hoverTime: n  } = t.state.facet(T7), s = setTimeout(i, n);
    e.onmouseout = ()=>{
        clearTimeout(s), e.onmouseout = e.onmousemove = null;
    }, e.onmousemove = ()=>{
        clearTimeout(s), s = setTimeout(i, n);
    };
}
function ce6(t, e) {
    let o = Object.create(null);
    for (let n of e){
        let s = t.lineAt(n.from);
        (o[s.from] || (o[s.from] = [])).push(n);
    }
    let i = [];
    for(let n1 in o)i.push(new D4(o[n1]).range(+n1));
    return P.of(i, !0);
}
var de5 = mo({
    class: "cm-gutter-lint",
    markers: (t)=>t.state.field(q7)
}), q7 = F.define({
    create () {
        return P.empty;
    },
    update (t, e) {
        t = t.map(e.changes);
        let o = e.state.facet(T7).markerFilter;
        for (let i of e.effects)if (i.is(C5)) {
            let n = i.value;
            o && (n = o(n || [])), t = ce6(e.state.doc, n.slice(0));
        }
        return t;
    }
}), M7 = y.define(), z5 = F.define({
    create () {
        return null;
    },
    update (t, e) {
        return t && e.docChanged && (t = j7(e, t) ? null : Object.assign(Object.assign({}, t), {
            pos: e.changes.mapPos(t.pos)
        })), e.effects.reduce((o, i)=>i.is(M7) ? i.value : o, t);
    },
    provide: (t)=>rn.from(t)
}), fe4 = C1.baseTheme({
    ".cm-gutter-lint": {
        width: "1.4em",
        "& .cm-gutterElement": {
            padding: ".2em"
        }
    },
    ".cm-lint-marker": {
        width: "1em",
        height: "1em"
    },
    ".cm-lint-marker-info": {
        content: x6('<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>')
    },
    ".cm-lint-marker-warning": {
        content: x6('<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>')
    },
    ".cm-lint-marker-error:before": {
        content: x6('<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>')
    }
}), T7 = A.define({
    combine (t) {
        return ht(t, {
            hoverTime: 300,
            markerFilter: null,
            tooltipFilter: null
        });
    }
});
var I8 = [
    go(),
    bo(),
    to(),
    un(),
    tn1(),
    Zr(),
    Qr(),
    w.allowMultipleSelections.of(!0),
    Xe2(),
    en1(rn1, {
        fallback: !0
    }),
    sn1(),
    zt2(),
    Xt2(),
    no(),
    ro(),
    io(),
    Te3(),
    dr.of([
        ...Qt2,
        ...Tn1,
        ...Be4,
        ...dn,
        ..._e3,
        ...jt3,
        ...pe5
    ])
];
const noop = ()=>null;
const CREATE_EVENT = 'create';
const observableEvents = [
    CREATE_EVENT
];
const reactiveFunctions = {};
function react(selector) {
    (reactiveFunctions[selector] || noop)();
}
const store = createStore({}, react);
function update(target, compositor) {
    const html = compositor(target);
    if (html) target.innerHTML = html;
}
function draw(selector, compositor) {
    listen(CREATE_EVENT, selector, (event)=>{
        const draw = update.bind(null, event.target, compositor);
        reactiveFunctions[selector] = draw;
        draw();
    });
}
function flair(selector, stylesheet) {
    const styles = `
    <style type="text/css" data-module=${selector}>
      ${stylesheet.replaceAll('&', selector)}
    </style>
  `;
    document.body.insertAdjacentHTML("beforeend", styles);
}
function learn(selector) {
    return store.get(selector) || {};
}
function teach(selector, payload, handler = (s, p)=>({
        ...s,
        ...p
    })) {
    store.set(selector, payload, handler);
}
function when(selector1, eventName, selector2, callback) {
    listen(eventName, `${selector1} ${selector2}`, callback);
}
function module(selector, initialState = {}) {
    teach(selector, initialState);
    return {
        selector,
        learn: learn.bind(null, selector),
        draw: draw.bind(null, selector),
        flair: flair.bind(null, selector),
        when: when.bind(null, selector),
        teach: teach.bind(null, selector)
    };
}
function listen(type, selector, handler = ()=>null) {
    const callback = (event)=>{
        if (event.target && event.target.matches && event.target.matches(selector)) {
            handler.call(null, event);
        }
    };
    document.addEventListener(type, callback, true);
    if (observableEvents.includes(type)) {
        observe(selector);
    }
    return function unlisten() {
        if (type === CREATE_EVENT) {
            disregard(selector);
        }
        document.removeEventListener(type, callback, true);
    };
}
let selectors = [];
function observe(selector) {
    selectors = [
        ...new Set([
            ...selectors,
            selector
        ])
    ];
    maybeCreateReactive([
        ...document.querySelectorAll(selector)
    ]);
}
function disregard(selector) {
    const index = selectors.indexOf(selector);
    if (index >= 0) {
        selectors = [
            ...selectors.slice(0, index),
            ...selectors.slice(index + 1)
        ];
    }
}
function maybeCreateReactive(targets) {
    targets.filter((x)=>!x.reactive).forEach(dispatchCreate);
}
function getSubscribers({ target  }) {
    if (selectors.length > 0) return [
        ...target.querySelectorAll(selectors.join(', '))
    ];
    else return [];
}
function dispatchCreate(target) {
    if (!target.id) target.id = sufficientlyUniqueId();
    target.dispatchEvent(new Event(CREATE_EVENT));
    target.reactive = true;
}
new MutationObserver((mutationsList)=>{
    const targets = [
        ...mutationsList
    ].map(getSubscribers).flatMap((x)=>x);
    maybeCreateReactive(targets);
}).observe(document.body, {
    childList: true,
    subtree: true
});
function sufficientlyUniqueId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
function createStore(initialState = {}, notify = ()=>null) {
    let state = {
        ...initialState
    };
    const context = {
        set: function(selector, payload, mergeHandler) {
            const newResource = mergeHandler(state[selector] || {}, payload);
            state = {
                ...state,
                [selector]: newResource
            };
            notify(selector);
        },
        get: function(selector) {
            return state[selector];
        }
    };
    return context;
}
const $8 = module('code-module');
$8.when('click', '.publish', (event)=>{
    const link = event.target.closest($8.selector).getAttribute('src');
    const { file  } = $8.learn();
    fetch(link, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            file
        })
    }).then(()=>{
        window.location.href = window.location.href;
    });
});
$8.draw((target)=>{
    const link = target.getAttribute('src');
    console.log(link);
    const { file , fetching  } = $8.learn();
    if (!file && !fetching) {
        $8.teach({
            fetching: true
        });
        fetch(link).then((res)=>res.status === 404 ? (()=>{
                throw new Error();
            })() : res).then((res)=>res.text()).then((file)=>{
            $8.teach({
                file,
                fetching: false
            });
        }).catch((e)=>{
            fetch('/scripts/hello.js').then((res)=>res.text()).then((file)=>{
                $8.teach({
                    file,
                    fetching: false
                });
            });
        });
        return;
    }
    if (file && !target.view) {
        target.innerHTML = `
      <button class="publish">Publish</button>
    `;
        const config = {
            extensions: [
                I8,
                C1.updateListener.of(persist(target, $8, {}))
            ]
        };
        const state = w.create({
            ...config,
            doc: file
        });
        target.view = new C1({
            parent: target,
            state
        });
    }
});
function persist(_target, $, _flags) {
    return (update)=>{
        if (update.changes.inserted.length < 0) return;
        const file = update.view.state.doc.toString();
        $.teach({
            file
        });
    };
}
$8.flair(`
  & {
		display: block;
  }
`);
const initialState = {
    gamepads: {}
};
const $9 = module('debug-devices', initialState);
function gamepads() {
    const { gamepads  } = $9.learn();
    return Object.keys(gamepads).map((id)=>({
            id,
            ...gamepads[id]
        }));
}
const { invoke  } = window.__TAURI__.tauri;
const { listen: listen1  } = window.__TAURI__.event;
const defaultGamepad = {
    axes: {},
    buttons: {}
};
const EVENTS = {
    'AxisChanged': onAxisChange,
    'ButtonChanged': onButtonChange
};
await listen1('rs2js', function receive(event) {
    console.log("js: rs2js: " + event.payload);
    const payload = JSON.parse(event.payload) || {};
    if (EVENTS[payload.event]) {
        EVENTS[payload.event](payload);
        requestAnimationFrame(tick);
    }
});
function tick() {
    const panes = [
        document.querySelector('stickies iframe')
    ];
    console.log({
        panes
    });
    panes.map((node)=>{
        node.contentWindow.postMessage({
            event: 'tick',
            gamepads: gamepads()
        }, '*');
    });
}
function onAxisChange({ id , key , value  }) {
    $9.teach({
        key,
        value
    }, mergeAxisChange(id));
}
function onButtonChange({ id , key , value  }) {
    $9.teach({
        key,
        value
    }, mergeButtonChange(id));
}
function mergeAxisChange(id) {
    return (state, payload)=>{
        const gamepad = state.gamepads[id] || defaultGamepad;
        return {
            ...state,
            gamepads: {
                ...state.gamepads,
                [id]: {
                    ...gamepad,
                    axes: {
                        ...gamepad.axes,
                        [payload.key]: payload.value
                    }
                }
            }
        };
    };
}
function mergeButtonChange(id) {
    return (state, payload)=>{
        const gamepad = state.gamepads[id] || defaultGamepad;
        return {
            ...state,
            gamepads: {
                ...state.gamepads,
                [id]: {
                    ...gamepad,
                    buttons: {
                        ...gamepad.buttons,
                        [payload.key]: payload.value
                    }
                }
            }
        };
    };
}
$9.draw((target)=>renderGamepads(target, $9));
$9.flair(`
  & .gamepads {
    list-style-type: none;
  }
  & .gamepad {
  }
  & .buttons,
  & .axes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr));
    list-style-type: none;
    padding: .5rem 0 0;
  }
  & .input {
    background: linear-gradient(lime 0%, orange 50%, rebeccapurple 100%);
    background-size: 1px 6rem;
    background-repeat: repeat-x;
    background-position-y: var(--value);
    border-radius: 2rem;
    width: 2rem;
    height: 2rem;
    display: grid;
    place-content: center;
  }
`);
function renderGamepads(_target, $) {
    const { gamepads  } = $.learn();
    const list = Object.keys(gamepads).map((key)=>gamepads[key]).map((gamepad, index)=>`
      <div class="gamepad" id="${gamepad.id}">
        Buttons: ${Object.keys(gamepad.buttons).map((key)=>key + ': ' + gamepad.buttons[key])}
        <br/>
        Axes: ${Object.keys(gamepad.axes).map((key)=>key + ': ' + gamepad.axes[key])}
      </div>
    `).join('');
    return `<div class="gamepads">${list}</div>`;
}
const $10 = module('stickies', {
    memory: firstMemories(),
    activeEmbed: `
    <iframe src="https://sillyz.computer/pages/slides/2022-js"></iframe>
  `
});
$10.draw((target)=>{
    const { memory , activeEmbed  } = $10.learn();
    const memories = Object.keys(memory).map((key)=>memory[key]).filter(thinking);
    const stickies = memories.map((about)=>`
      <button data-key="${about.key}">
        ${about.title}
      </button>
    `).join('');
    return `
    ${stickies}
    <div class="embed">
      ${activeEmbed}
    </div>
  `;
});
function thinking(about) {
    return about ? true : false;
}
function firstMemories() {
    return {
        '0': {
            key: '0',
            title: 'Authentication',
            embed: `
        <iframe src="/stickies/authentication.html"></iframe>
      `
        },
        '1': {
            key: '1',
            title: 'Devices',
            embed: `
        <iframe src="/stickies/devices.html"></iframe>
      `
        },
        '2': {
            key: '2',
            title: 'Synthia',
            embed: `
        <iframe src="/stickies/synthia.html"></iframe>
      `
        },
        '3': {
            key: '3',
            title: 'Slides',
            embed: `
        <iframe src="https://sillyz.computer/pages/slides/2022-js"></iframe>
      `
        }
    };
}
$10.when('click', 'button[data-key]', (event)=>{
    const { key  } = event.target.dataset;
    const { embed  } = $10.learn().memory[key];
    $10.teach({
        activeEmbed: embed
    });
});
$10.flair(`
  .embed {
    position: fixed;
    inset: 0;
  }

  .embed iframe {
    border: 0;
    width: 100%;
    height: 100%;
  }
`);
