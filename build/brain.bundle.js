// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var m = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((s1)=>s1 ? parseInt(s1, 36) : 1
);
for(let s = 1; s < m.length; s++)m[s] += m[s - 1];
function $(s2) {
    for(let e2 = 1; e2 < m.length; e2 += 2)if (m[e2] > s2) return m[e2 - 1] <= s2;
    return !1;
}
function y(s3) {
    return s3 >= 127462 && s3 <= 127487;
}
var k = 8205;
function A(s4, e3, t2 = !0, n3 = !0) {
    return (t2 ? M : D)(s4, e3, n3);
}
function M(s5, e4, t3) {
    if (e4 == s5.length) return e4;
    e4 && S(s5.charCodeAt(e4)) && j(s5.charCodeAt(e4 - 1)) && e4--;
    let n4 = b(s5, e4);
    for(e4 += q(n4); e4 < s5.length;){
        let i3 = b(s5, e4);
        if (n4 == k || i3 == k || t3 && $(i3)) e4 += q(i3), n4 = i3;
        else if (y(i3)) {
            let l5 = 0, h4 = e4 - 2;
            for(; h4 >= 0 && y(b(s5, h4));)l5++, h4 -= 2;
            if (l5 % 2 == 0) break;
            e4 += 2;
        } else break;
    }
    return e4;
}
function D(s6, e5, t4) {
    for(; e5 > 0;){
        let n5 = M(s6, e5 - 2, t4);
        if (n5 < e5) return n5;
        e5--;
    }
    return 0;
}
function S(s7) {
    return s7 >= 56320 && s7 < 57344;
}
function j(s8) {
    return s8 >= 55296 && s8 < 56320;
}
function b(s9, e6) {
    let t5 = s9.charCodeAt(e6);
    if (!j(t5) || e6 + 1 == s9.length) return t5;
    let n6 = s9.charCodeAt(e6 + 1);
    return S(n6) ? (t5 - 55296 << 10) + (n6 - 56320) + 65536 : t5;
}
function z(s10) {
    return s10 <= 65535 ? String.fromCharCode(s10) : (s10 -= 65536, String.fromCharCode((s10 >> 10) + 55296, (s10 & 1023) + 56320));
}
function q(s11) {
    return s11 < 65536 ? 1 : 2;
}
function J(s12, e7, t6 = s12.length) {
    let n7 = 0;
    for(let i4 = 0; i4 < t6;)s12.charCodeAt(i4) == 9 ? (n7 += e7 - n7 % e7, i4++) : (n7++, i4 = A(s12, i4));
    return n7;
}
function O(s13, e8, t7, n8) {
    for(let i5 = 0, l6 = 0;;){
        if (l6 >= e8) return i5;
        if (i5 == s13.length) break;
        l6 += s13.charCodeAt(i5) == 9 ? t7 - l6 % t7 : 1, i5 = A(s13, i5);
    }
    return n8 === !0 ? -1 : s13.length;
}
var d = class {
    constructor(){}
    lineAt(e9) {
        if (e9 < 0 || e9 > this.length) throw new RangeError(`Invalid position ${e9} in document of length ${this.length}`);
        return this.lineInner(e9, !1, 1, 0);
    }
    line(e10) {
        if (e10 < 1 || e10 > this.lines) throw new RangeError(`Invalid line number ${e10} in ${this.lines}-line document`);
        return this.lineInner(e10, !0, 1, 0);
    }
    replace(e11, t8, n9) {
        let i6 = [];
        return this.decompose(0, e11, i6, 2), n9.length && n9.decompose(0, n9.length, i6, 1 | 2), this.decompose(t8, this.length, i6, 1), g.from(i6, this.length - (t8 - e11) + n9.length);
    }
    append(e12) {
        return this.replace(this.length, this.length, e12);
    }
    slice(e13, t9 = this.length) {
        let n10 = [];
        return this.decompose(e13, t9, n10, 0), g.from(n10, t9 - e13);
    }
    eq(e14) {
        if (e14 == this) return !0;
        if (e14.length != this.length || e14.lines != this.lines) return !1;
        let t10 = this.scanIdentical(e14, 1), n11 = this.length - this.scanIdentical(e14, -1), i7 = new x(this), l7 = new x(e14);
        for(let h5 = t10, u8 = t10;;){
            if (i7.next(h5), l7.next(h5), h5 = 0, i7.lineBreak != l7.lineBreak || i7.done != l7.done || i7.value != l7.value) return !1;
            if (u8 += i7.value.length, i7.done || u8 >= n11) return !0;
        }
    }
    iter(e15 = 1) {
        return new x(this, e15);
    }
    iterRange(e16, t11 = this.length) {
        return new C(this, e16, t11);
    }
    iterLines(e17, t12) {
        let n12;
        if (e17 == null) n12 = this.iter();
        else {
            t12 == null && (t12 = this.lines + 1);
            let i8 = this.line(e17).from;
            n12 = this.iterRange(i8, Math.max(i8, t12 == this.lines + 1 ? this.length : t12 <= 1 ? 0 : this.line(t12 - 1).to));
        }
        return new B(n12);
    }
    toString() {
        return this.sliceString(0);
    }
    toJSON() {
        let e18 = [];
        return this.flatten(e18), e18;
    }
    static of(e19) {
        if (e19.length == 0) throw new RangeError("A document must have at least one line");
        return e19.length == 1 && !e19[0] ? d.empty : e19.length <= 32 ? new a(e19) : g.from(a.split(e19, []));
    }
}, a = class extends d {
    constructor(e20, t13 = P(e20)){
        super();
        this.text = e20, this.length = t13;
    }
    get lines() {
        return this.text.length;
    }
    get children() {
        return null;
    }
    lineInner(e21, t14, n13, i9) {
        for(let l8 = 0;; l8++){
            let h6 = this.text[l8], u9 = i9 + h6.length;
            if ((t14 ? n13 : u9) >= e21) return new R(i9, u9, n13, h6);
            i9 = u9 + 1, n13++;
        }
    }
    decompose(e22, t15, n14, i10) {
        let l9 = e22 <= 0 && t15 >= this.length ? this : new a(E(this.text, e22, t15), Math.min(t15, this.length) - Math.max(0, e22));
        if (i10 & 1) {
            let h7 = n14.pop(), u10 = w(l9.text, h7.text.slice(), 0, l9.length);
            if (u10.length <= 32) n14.push(new a(u10, h7.length + l9.length));
            else {
                let r5 = u10.length >> 1;
                n14.push(new a(u10.slice(0, r5)), new a(u10.slice(r5)));
            }
        } else n14.push(l9);
    }
    replace(e23, t16, n15) {
        if (!(n15 instanceof a)) return super.replace(e23, t16, n15);
        let i11 = w(this.text, w(n15.text, E(this.text, 0, e23)), t16), l10 = this.length + n15.length - (t16 - e23);
        return i11.length <= 32 ? new a(i11, l10) : g.from(a.split(i11, []), l10);
    }
    sliceString(e24, t17 = this.length, n16 = `
`) {
        let i12 = "";
        for(let l11 = 0, h8 = 0; l11 <= t17 && h8 < this.text.length; h8++){
            let u11 = this.text[h8], r6 = l11 + u11.length;
            l11 > e24 && h8 && (i12 += n16), e24 < r6 && t17 > l11 && (i12 += u11.slice(Math.max(0, e24 - l11), t17 - l11)), l11 = r6 + 1;
        }
        return i12;
    }
    flatten(e25) {
        for (let t18 of this.text)e25.push(t18);
    }
    scanIdentical() {
        return 0;
    }
    static split(e26, t19) {
        let n17 = [], i13 = -1;
        for (let l12 of e26)n17.push(l12), i13 += l12.length + 1, n17.length == 32 && (t19.push(new a(n17, i13)), n17 = [], i13 = -1);
        return i13 > -1 && t19.push(new a(n17, i13)), t19;
    }
}, g = class extends d {
    constructor(e27, t20){
        super();
        this.children = e27, this.length = t20, this.lines = 0;
        for (let n18 of e27)this.lines += n18.lines;
    }
    lineInner(e28, t21, n19, i14) {
        for(let l13 = 0;; l13++){
            let h9 = this.children[l13], u12 = i14 + h9.length, r7 = n19 + h9.lines - 1;
            if ((t21 ? r7 : u12) >= e28) return h9.lineInner(e28, t21, n19, i14);
            i14 = u12 + 1, n19 = r7 + 1;
        }
    }
    decompose(e29, t22, n20, i15) {
        for(let l14 = 0, h10 = 0; h10 <= t22 && l14 < this.children.length; l14++){
            let u13 = this.children[l14], r8 = h10 + u13.length;
            if (e29 <= r8 && t22 >= h10) {
                let o1 = i15 & ((h10 <= e29 ? 1 : 0) | (r8 >= t22 ? 2 : 0));
                h10 >= e29 && r8 <= t22 && !o1 ? n20.push(u13) : u13.decompose(e29 - h10, t22 - h10, n20, o1);
            }
            h10 = r8 + 1;
        }
    }
    replace(e30, t23, n21) {
        if (n21.lines < this.lines) for(let i16 = 0, l15 = 0; i16 < this.children.length; i16++){
            let h11 = this.children[i16], u14 = l15 + h11.length;
            if (e30 >= l15 && t23 <= u14) {
                let r9 = h11.replace(e30 - l15, t23 - l15, n21), o2 = this.lines - h11.lines + r9.lines;
                if (r9.lines < o2 >> 5 - 1 && r9.lines > o2 >> 5 + 1) {
                    let c9 = this.children.slice();
                    return c9[i16] = r9, new g(c9, this.length - (t23 - e30) + n21.length);
                }
                return super.replace(l15, u14, r9);
            }
            l15 = u14 + 1;
        }
        return super.replace(e30, t23, n21);
    }
    sliceString(e31, t24 = this.length, n22 = `
`) {
        let i17 = "";
        for(let l16 = 0, h12 = 0; l16 < this.children.length && h12 <= t24; l16++){
            let u15 = this.children[l16], r10 = h12 + u15.length;
            h12 > e31 && l16 && (i17 += n22), e31 < r10 && t24 > h12 && (i17 += u15.sliceString(e31 - h12, t24 - h12, n22)), h12 = r10 + 1;
        }
        return i17;
    }
    flatten(e32) {
        for (let t25 of this.children)t25.flatten(e32);
    }
    scanIdentical(e33, t26) {
        if (!(e33 instanceof g)) return 0;
        let n23 = 0, [i18, l17, h13, u16] = t26 > 0 ? [
            0,
            0,
            this.children.length,
            e33.children.length
        ] : [
            this.children.length - 1,
            e33.children.length - 1,
            -1,
            -1
        ];
        for(;; i18 += t26, l17 += t26){
            if (i18 == h13 || l17 == u16) return n23;
            let r11 = this.children[i18], o3 = e33.children[l17];
            if (r11 != o3) return n23 + r11.scanIdentical(o3, t26);
            n23 += r11.length + 1;
        }
    }
    static from(e34, t27 = e34.reduce((n24, i19)=>n24 + i19.length + 1
    , -1)) {
        let n25 = 0;
        for (let f2 of e34)n25 += f2.lines;
        if (n25 < 32) {
            let f9 = [];
            for (let p16 of e34)p16.flatten(f9);
            return new a(f9, t27);
        }
        let i20 = Math.max(32, n25 >> 5), l18 = i20 << 1, h14 = i20 >> 1, u17 = [], r12 = 0, o4 = -1, c10 = [];
        function I14(f10) {
            let p17;
            if (f10.lines > l18 && f10 instanceof g) for (let F11 of f10.children)I14(F11);
            else f10.lines > h14 && (r12 > h14 || !r12) ? (v14(), u17.push(f10)) : f10 instanceof a && r12 && (p17 = c10[c10.length - 1]) instanceof a && f10.lines + p17.lines <= 32 ? (r12 += f10.lines, o4 += f10.length + 1, c10[c10.length - 1] = new a(p17.text.concat(f10.text), p17.length + 1 + f10.length)) : (r12 + f10.lines > i20 && v14(), r12 += f10.lines, o4 += f10.length + 1, c10.push(f10));
        }
        function v14() {
            r12 != 0 && (u17.push(c10.length == 1 ? c10[0] : g.from(c10, o4)), o4 = -1, r12 = c10.length = 0);
        }
        for (let f1 of e34)I14(f1);
        return v14(), u17.length == 1 ? u17[0] : new g(u17, t27);
    }
};
d.empty = new a([
    ""
], 0);
function P(s14) {
    let e35 = -1;
    for (let t28 of s14)e35 += t28.length + 1;
    return e35;
}
function w(s15, e36, t29 = 0, n26 = 1000000000) {
    for(let i21 = 0, l19 = 0, h15 = !0; l19 < s15.length && i21 <= n26; l19++){
        let u18 = s15[l19], r13 = i21 + u18.length;
        r13 >= t29 && (r13 > n26 && (u18 = u18.slice(0, n26 - i21)), i21 < t29 && (u18 = u18.slice(t29 - i21)), h15 ? (e36[e36.length - 1] += u18, h15 = !1) : e36.push(u18)), i21 = r13 + 1;
    }
    return e36;
}
function E(s16, e37, t30) {
    return w(s16, [
        ""
    ], e37, t30);
}
var x = class {
    constructor(e38, t31 = 1){
        this.dir = t31, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [
            e38
        ], this.offsets = [
            t31 > 0 ? 1 : (e38 instanceof a ? e38.text.length : e38.children.length) << 1
        ];
    }
    nextInner(e39, t32) {
        for(this.done = this.lineBreak = !1;;){
            let n27 = this.nodes.length - 1, i22 = this.nodes[n27], l20 = this.offsets[n27], h16 = l20 >> 1, u19 = i22 instanceof a ? i22.text.length : i22.children.length;
            if (h16 == (t32 > 0 ? u19 : 0)) {
                if (n27 == 0) return this.done = !0, this.value = "", this;
                t32 > 0 && this.offsets[n27 - 1]++, this.nodes.pop(), this.offsets.pop();
            } else if ((l20 & 1) == (t32 > 0 ? 0 : 1)) {
                if (this.offsets[n27] += t32, e39 == 0) return this.lineBreak = !0, this.value = `
`, this;
                e39--;
            } else if (i22 instanceof a) {
                let r14 = i22.text[h16 + (t32 < 0 ? -1 : 0)];
                if (this.offsets[n27] += t32, r14.length > Math.max(0, e39)) return this.value = e39 == 0 ? r14 : t32 > 0 ? r14.slice(e39) : r14.slice(0, r14.length - e39), this;
                e39 -= r14.length;
            } else {
                let r15 = i22.children[h16 + (t32 < 0 ? -1 : 0)];
                e39 > r15.length ? (e39 -= r15.length, this.offsets[n27] += t32) : (t32 < 0 && this.offsets[n27]--, this.nodes.push(r15), this.offsets.push(t32 > 0 ? 1 : (r15 instanceof a ? r15.text.length : r15.children.length) << 1));
            }
        }
    }
    next(e40 = 0) {
        return e40 < 0 && (this.nextInner(-e40, -this.dir), e40 = this.value.length), this.nextInner(e40, this.dir);
    }
}, C = class {
    constructor(e41, t33, n28){
        this.value = "", this.done = !1, this.cursor = new x(e41, t33 > n28 ? -1 : 1), this.pos = t33 > n28 ? e41.length : 0, this.from = Math.min(t33, n28), this.to = Math.max(t33, n28);
    }
    nextInner(e42, t34) {
        if (t34 < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        e42 += Math.max(0, t34 < 0 ? this.pos - this.to : this.from - this.pos);
        let n29 = t34 < 0 ? this.pos - this.from : this.to - this.pos;
        e42 > n29 && (e42 = n29), n29 -= e42;
        let { value: i23  } = this.cursor.next(e42);
        return this.pos += (i23.length + e42) * t34, this.value = i23.length <= n29 ? i23 : t34 < 0 ? i23.slice(i23.length - n29) : i23.slice(0, n29), this.done = !this.value, this;
    }
    next(e43 = 0) {
        return e43 < 0 ? e43 = Math.max(e43, this.from - this.pos) : e43 > 0 && (e43 = Math.min(e43, this.to - this.pos)), this.nextInner(e43, this.cursor.dir);
    }
    get lineBreak() {
        return this.cursor.lineBreak && this.value != "";
    }
}, B = class {
    constructor(e44){
        this.inner = e44, this.afterBreak = !0, this.value = "", this.done = !1;
    }
    next(e45 = 0) {
        let { done: t35 , lineBreak: n30 , value: i24  } = this.inner.next(e45);
        return t35 ? (this.done = !0, this.value = "") : n30 ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = i24, this.afterBreak = !1), this;
    }
    get lineBreak() {
        return !1;
    }
};
typeof Symbol != "undefined" && (d.prototype[Symbol.iterator] = function() {
    return this.iter();
}, x.prototype[Symbol.iterator] = C.prototype[Symbol.iterator] = B.prototype[Symbol.iterator] = function() {
    return this;
});
var R = class {
    constructor(e46, t36, n31, i25){
        this.from = e46, this.to = t36, this.number = n31, this.text = i25;
    }
    get length() {
        return this.to - this.from;
    }
};
var U = /\r\n?|\n/, D1 = function(l21) {
    return l21[l21.Simple = 0] = "Simple", l21[l21.TrackDel = 1] = "TrackDel", l21[l21.TrackBefore = 2] = "TrackBefore", l21[l21.TrackAfter = 3] = "TrackAfter", l21;
}(D1 || (D1 = {})), I = class {
    constructor(e47){
        this.sections = e47;
    }
    get length() {
        let e48 = 0;
        for(let t37 = 0; t37 < this.sections.length; t37 += 2)e48 += this.sections[t37];
        return e48;
    }
    get newLength() {
        let e49 = 0;
        for(let t38 = 0; t38 < this.sections.length; t38 += 2){
            let n32 = this.sections[t38 + 1];
            e49 += n32 < 0 ? this.sections[t38] : n32;
        }
        return e49;
    }
    get empty() {
        return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
    }
    iterGaps(e50) {
        for(let t39 = 0, n33 = 0, i26 = 0; t39 < this.sections.length;){
            let s6 = this.sections[t39++], r16 = this.sections[t39++];
            r16 < 0 ? (e50(n33, i26, s6), i26 += s6) : i26 += r16, n33 += s6;
        }
    }
    iterChangedRanges(e51, t40 = !1) {
        G(this, e51, t40);
    }
    get invertedDesc() {
        let e52 = [];
        for(let t41 = 0; t41 < this.sections.length;){
            let n34 = this.sections[t41++], i27 = this.sections[t41++];
            i27 < 0 ? e52.push(n34, i27) : e52.push(i27, n34);
        }
        return new I(e52);
    }
    composeDesc(e53) {
        return this.empty ? e53 : e53.empty ? this : j1(this, e53);
    }
    mapDesc(e54, t42 = !1) {
        return e54.empty ? this : H(this, e54, t42);
    }
    mapPos(e55, t43 = -1, n35 = D1.Simple) {
        let i28 = 0, s7 = 0;
        for(let r17 = 0; r17 < this.sections.length;){
            let o5 = this.sections[r17++], a5 = this.sections[r17++], f11 = i28 + o5;
            if (a5 < 0) {
                if (f11 > e55) return s7 + (e55 - i28);
                s7 += o5;
            } else {
                if (n35 != D1.Simple && f11 >= e55 && (n35 == D1.TrackDel && i28 < e55 && f11 > e55 || n35 == D1.TrackBefore && i28 < e55 || n35 == D1.TrackAfter && f11 > e55)) return null;
                if (f11 > e55 || f11 == e55 && t43 < 0 && !o5) return e55 == i28 || t43 < 0 ? s7 : s7 + a5;
                s7 += a5;
            }
            i28 = f11;
        }
        if (e55 > i28) throw new RangeError(`Position ${e55} is out of range for changeset of length ${i28}`);
        return s7;
    }
    touchesRange(e56, t44 = e56) {
        for(let n36 = 0, i29 = 0; n36 < this.sections.length && i29 <= t44;){
            let s8 = this.sections[n36++], r18 = this.sections[n36++], o6 = i29 + s8;
            if (r18 >= 0 && i29 <= t44 && o6 >= e56) return i29 < e56 && o6 > t44 ? "cover" : !0;
            i29 = o6;
        }
        return !1;
    }
    toString() {
        let e57 = "";
        for(let t45 = 0; t45 < this.sections.length;){
            let n37 = this.sections[t45++], i30 = this.sections[t45++];
            e57 += (e57 ? " " : "") + n37 + (i30 >= 0 ? ":" + i30 : "");
        }
        return e57;
    }
    toJSON() {
        return this.sections;
    }
    static fromJSON(e58) {
        if (!Array.isArray(e58) || e58.length % 2 || e58.some((t46)=>typeof t46 != "number"
        )) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new I(e58);
    }
}, y1 = class extends I {
    constructor(e59, t47){
        super(e59);
        this.inserted = t47;
    }
    apply(e60) {
        if (this.length != e60.length) throw new RangeError("Applying change set to a document with the wrong length");
        return G(this, (t48, n38, i31, s, r19)=>e60 = e60.replace(i31, i31 + (n38 - t48), r19)
        , !1), e60;
    }
    mapDesc(e61, t49 = !1) {
        return H(this, e61, t49, !0);
    }
    invert(e62) {
        let t50 = this.sections.slice(), n39 = [];
        for(let i32 = 0, s9 = 0; i32 < t50.length; i32 += 2){
            let r20 = t50[i32], o7 = t50[i32 + 1];
            if (o7 >= 0) {
                t50[i32] = o7, t50[i32 + 1] = r20;
                let a6 = i32 >> 1;
                for(; n39.length < a6;)n39.push(d.empty);
                n39.push(r20 ? e62.slice(s9, s9 + r20) : d.empty);
            }
            s9 += r20;
        }
        return new y1(t50, n39);
    }
    compose(e63) {
        return this.empty ? e63 : e63.empty ? this : j1(this, e63, !0);
    }
    map(e64, t51 = !1) {
        return e64.empty ? this : H(this, e64, t51, !0);
    }
    iterChanges(e65, t52 = !1) {
        G(this, e65, t52);
    }
    get desc() {
        return new I(this.sections);
    }
    filter(e66) {
        let t53 = [], n40 = [], i33 = [], s10 = new V(this);
        e: for(let r21 = 0, o8 = 0;;){
            let a7 = r21 == e66.length ? 1000000000 : e66[r21++];
            for(; o8 < a7 || o8 == a7 && s10.len == 0;){
                if (s10.done) break e;
                let h17 = Math.min(s10.len, a7 - o8);
                S1(i33, h17, -1);
                let c11 = s10.ins == -1 ? -1 : s10.off == 0 ? s10.ins : 0;
                S1(t53, h17, c11), c11 > 0 && J1(n40, t53, s10.text), s10.forward(h17), o8 += h17;
            }
            let f12 = e66[r21++];
            for(; o8 < f12;){
                if (s10.done) break e;
                let h18 = Math.min(s10.len, f12 - o8);
                S1(t53, h18, -1), S1(i33, h18, s10.ins == -1 ? -1 : s10.off == 0 ? s10.ins : 0), s10.forward(h18), o8 += h18;
            }
        }
        return {
            changes: new y1(t53, n40),
            filtered: new I(i33)
        };
    }
    toJSON() {
        let e67 = [];
        for(let t54 = 0; t54 < this.sections.length; t54 += 2){
            let n41 = this.sections[t54], i34 = this.sections[t54 + 1];
            i34 < 0 ? e67.push(n41) : i34 == 0 ? e67.push([
                n41
            ]) : e67.push([
                n41
            ].concat(this.inserted[t54 >> 1].toJSON()));
        }
        return e67;
    }
    static of(e68, t55, n42) {
        let i35 = [], s11 = [], r22 = 0, o9 = null;
        function a8(h19 = !1) {
            if (!h19 && !i35.length) return;
            r22 < t55 && S1(i35, t55 - r22, -1);
            let c12 = new y1(i35, s11);
            o9 = o9 ? o9.compose(c12.map(o9)) : c12, i35 = [], s11 = [], r22 = 0;
        }
        function f13(h20) {
            if (Array.isArray(h20)) for (let c13 of h20)f13(c13);
            else if (h20 instanceof y1) {
                if (h20.length != t55) throw new RangeError(`Mismatched change set length (got ${h20.length}, expected ${t55})`);
                a8(), o9 = o9 ? o9.compose(h20.map(o9)) : h20;
            } else {
                let { from: c14 , to: u20 = c14 , insert: g10  } = h20;
                if (c14 > u20 || c14 < 0 || u20 > t55) throw new RangeError(`Invalid change range ${c14} to ${u20} (in doc of length ${t55})`);
                let m12 = g10 ? typeof g10 == "string" ? d.of(g10.split(n42 || U)) : g10 : d.empty, d13 = m12.length;
                if (c14 == u20 && d13 == 0) return;
                c14 < r22 && a8(), c14 > r22 && S1(i35, c14 - r22, -1), S1(i35, u20 - c14, d13), J1(s11, i35, m12), r22 = u20;
            }
        }
        return f13(e68), a8(!o9), o9;
    }
    static empty(e69) {
        return new y1(e69 ? [
            e69,
            -1
        ] : [], []);
    }
    static fromJSON(e70) {
        if (!Array.isArray(e70)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let t56 = [], n43 = [];
        for(let i36 = 0; i36 < e70.length; i36++){
            let s12 = e70[i36];
            if (typeof s12 == "number") t56.push(s12, -1);
            else {
                if (!Array.isArray(s12) || typeof s12[0] != "number" || s12.some((r23, o10)=>o10 && typeof r23 != "string"
                )) throw new RangeError("Invalid JSON representation of ChangeSet");
                if (s12.length == 1) t56.push(s12[0], 0);
                else {
                    for(; n43.length < i36;)n43.push(d.empty);
                    n43[i36] = d.of(s12.slice(1)), t56.push(s12[0], n43[i36].length);
                }
            }
        }
        return new y1(t56, n43);
    }
};
function S1(l22, e71, t57, n44 = !1) {
    if (e71 == 0 && t57 <= 0) return;
    let i37 = l22.length - 2;
    i37 >= 0 && t57 <= 0 && t57 == l22[i37 + 1] ? l22[i37] += e71 : e71 == 0 && l22[i37] == 0 ? l22[i37 + 1] += t57 : n44 ? (l22[i37] += e71, l22[i37 + 1] += t57) : l22.push(e71, t57);
}
function J1(l23, e72, t58) {
    if (t58.length == 0) return;
    let n45 = e72.length - 2 >> 1;
    if (n45 < l23.length) l23[l23.length - 1] = l23[l23.length - 1].append(t58);
    else {
        for(; l23.length < n45;)l23.push(d.empty);
        l23.push(t58);
    }
}
function G(l24, e73, t59) {
    let n46 = l24.inserted;
    for(let i38 = 0, s13 = 0, r24 = 0; r24 < l24.sections.length;){
        let o11 = l24.sections[r24++], a9 = l24.sections[r24++];
        if (a9 < 0) i38 += o11, s13 += o11;
        else {
            let f14 = i38, h21 = s13, c15 = d.empty;
            for(; f14 += o11, h21 += a9, a9 && n46 && (c15 = c15.append(n46[r24 - 2 >> 1])), !(t59 || r24 == l24.sections.length || l24.sections[r24 + 1] < 0);)o11 = l24.sections[r24++], a9 = l24.sections[r24++];
            e73(i38, f14, s13, h21, c15), i38 = f14, s13 = h21;
        }
    }
}
function H(l25, e74, t60, n47 = !1) {
    let i39 = [], s14 = n47 ? [] : null, r25 = new V(l25), o12 = new V(e74);
    for(let a10 = 0, f15 = 0;;)if (r25.ins == -1) a10 += r25.len, r25.next();
    else if (o12.ins == -1 && f15 < a10) {
        let h22 = Math.min(o12.len, a10 - f15);
        o12.forward(h22), S1(i39, h22, -1), f15 += h22;
    } else if (o12.ins >= 0 && (r25.done || f15 < a10 || f15 == a10 && (o12.len < r25.len || o12.len == r25.len && !t60))) {
        for(S1(i39, o12.ins, -1); a10 > f15 && !r25.done && a10 + r25.len < f15 + o12.len;)a10 += r25.len, r25.next();
        f15 += o12.len, o12.next();
    } else if (r25.ins >= 0) {
        let h23 = 0, c16 = a10 + r25.len;
        for(;;)if (o12.ins >= 0 && f15 > a10 && f15 + o12.len < c16) h23 += o12.ins, f15 += o12.len, o12.next();
        else if (o12.ins == -1 && f15 < c16) {
            let u21 = Math.min(o12.len, c16 - f15);
            h23 += u21, o12.forward(u21), f15 += u21;
        } else break;
        S1(i39, h23, r25.ins), s14 && J1(s14, i39, r25.text), a10 = c16, r25.next();
    } else {
        if (r25.done && o12.done) return s14 ? new y1(i39, s14) : new I(i39);
        throw new Error("Mismatched change set lengths");
    }
}
function j1(l26, e75, t61 = !1) {
    let n48 = [], i40 = t61 ? [] : null, s15 = new V(l26), r26 = new V(e75);
    for(let o13 = !1;;){
        if (s15.done && r26.done) return i40 ? new y1(n48, i40) : new I(n48);
        if (s15.ins == 0) S1(n48, s15.len, 0, o13), s15.next();
        else if (r26.len == 0 && !r26.done) S1(n48, 0, r26.ins, o13), i40 && J1(i40, n48, r26.text), r26.next();
        else {
            if (s15.done || r26.done) throw new Error("Mismatched change set lengths");
            {
                let a11 = Math.min(s15.len2, r26.len), f16 = n48.length;
                if (s15.ins == -1) {
                    let h24 = r26.ins == -1 ? -1 : r26.off ? 0 : r26.ins;
                    S1(n48, a11, h24, o13), i40 && h24 && J1(i40, n48, r26.text);
                } else r26.ins == -1 ? (S1(n48, s15.off ? 0 : s15.len, a11, o13), i40 && J1(i40, n48, s15.textBit(a11))) : (S1(n48, s15.off ? 0 : s15.len, r26.off ? 0 : r26.ins, o13), i40 && !r26.off && J1(i40, n48, r26.text));
                o13 = (s15.ins > a11 || r26.ins >= 0 && r26.len > a11) && (o13 || n48.length > f16), s15.forward2(a11), r26.forward(a11);
            }
        }
    }
}
var V = class {
    constructor(e76){
        this.set = e76, this.i = 0, this.next();
    }
    next() {
        let { sections: e77  } = this.set;
        this.i < e77.length ? (this.len = e77[this.i++], this.ins = e77[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
    }
    get done() {
        return this.ins == -2;
    }
    get len2() {
        return this.ins < 0 ? this.len : this.ins;
    }
    get text() {
        let { inserted: e78  } = this.set, t62 = this.i - 2 >> 1;
        return t62 >= e78.length ? d.empty : e78[t62];
    }
    textBit(e79) {
        let { inserted: t63  } = this.set, n49 = this.i - 2 >> 1;
        return n49 >= t63.length && !e79 ? d.empty : t63[n49].slice(this.off, e79 == null ? void 0 : this.off + e79);
    }
    forward(e80) {
        e80 == this.len ? this.next() : (this.len -= e80, this.off += e80);
    }
    forward2(e81) {
        this.ins == -1 ? this.forward(e81) : e81 == this.ins ? this.next() : (this.ins -= e81, this.off += e81);
    }
}, R1 = class {
    constructor(e82, t64, n50){
        this.from = e82, this.to = t64, this.flags = n50;
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
        let e83 = this.flags & 3;
        return e83 == 3 ? null : e83;
    }
    get goalColumn() {
        let e84 = this.flags >> 5;
        return e84 == 33554431 ? void 0 : e84;
    }
    map(e85, t65 = -1) {
        let n51 = e85.mapPos(this.from, t65), i41 = e85.mapPos(this.to, t65);
        return n51 == this.from && i41 == this.to ? this : new R1(n51, i41, this.flags);
    }
    extend(e86, t66 = e86) {
        if (e86 <= this.anchor && t66 >= this.anchor) return p.range(e86, t66);
        let n52 = Math.abs(e86 - this.anchor) > Math.abs(t66 - this.anchor) ? e86 : t66;
        return p.range(this.anchor, n52);
    }
    eq(e87) {
        return this.anchor == e87.anchor && this.head == e87.head;
    }
    toJSON() {
        return {
            anchor: this.anchor,
            head: this.head
        };
    }
    static fromJSON(e88) {
        if (!e88 || typeof e88.anchor != "number" || typeof e88.head != "number") throw new RangeError("Invalid JSON representation for SelectionRange");
        return p.range(e88.anchor, e88.head);
    }
}, p = class {
    constructor(e89, t67 = 0){
        this.ranges = e89, this.mainIndex = t67;
    }
    map(e90, t68 = -1) {
        return e90.empty ? this : p.create(this.ranges.map((n53)=>n53.map(e90, t68)
        ), this.mainIndex);
    }
    eq(e91) {
        if (this.ranges.length != e91.ranges.length || this.mainIndex != e91.mainIndex) return !1;
        for(let t69 = 0; t69 < this.ranges.length; t69++)if (!this.ranges[t69].eq(e91.ranges[t69])) return !1;
        return !0;
    }
    get main() {
        return this.ranges[this.mainIndex];
    }
    asSingle() {
        return this.ranges.length == 1 ? this : new p([
            this.main
        ]);
    }
    addRange(e92, t70 = !0) {
        return p.create([
            e92
        ].concat(this.ranges), t70 ? 0 : this.mainIndex + 1);
    }
    replaceRange(e93, t71 = this.mainIndex) {
        let n54 = this.ranges.slice();
        return n54[t71] = e93, p.create(n54, this.mainIndex);
    }
    toJSON() {
        return {
            ranges: this.ranges.map((e94)=>e94.toJSON()
            ),
            main: this.mainIndex
        };
    }
    static fromJSON(e95) {
        if (!e95 || !Array.isArray(e95.ranges) || typeof e95.main != "number" || e95.main >= e95.ranges.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new p(e95.ranges.map((t72)=>R1.fromJSON(t72)
        ), e95.main);
    }
    static single(e96, t73 = e96) {
        return new p([
            p.range(e96, t73)
        ], 0);
    }
    static create(e97, t74 = 0) {
        if (e97.length == 0) throw new RangeError("A selection needs at least one range");
        for(let n55 = 0, i42 = 0; i42 < e97.length; i42++){
            let s16 = e97[i42];
            if (s16.empty ? s16.from <= n55 : s16.from < n55) return ue(e97.slice(), t74);
            n55 = s16.to;
        }
        return new p(e97, t74);
    }
    static cursor(e98, t75 = 0, n56, i43) {
        return new R1(e98, e98, (t75 == 0 ? 0 : t75 < 0 ? 4 : 8) | (n56 == null ? 3 : Math.min(2, n56)) | (i43 ?? 33554431) << 5);
    }
    static range(e99, t76, n57) {
        let i44 = (n57 ?? 33554431) << 5;
        return t76 < e99 ? new R1(t76, e99, 16 | i44) : new R1(e99, t76, i44);
    }
};
function ue(l27, e100 = 0) {
    let t77 = l27[e100];
    l27.sort((n58, i45)=>n58.from - i45.from
    ), e100 = l27.indexOf(t77);
    for(let n1 = 1; n1 < l27.length; n1++){
        let i46 = l27[n1], s17 = l27[n1 - 1];
        if (i46.empty ? i46.from <= s17.to : i46.from < s17.to) {
            let r27 = s17.from, o14 = Math.max(i46.to, s17.to);
            n1 <= e100 && e100--, l27.splice(--n1, 2, i46.anchor > i46.head ? p.range(o14, r27) : p.range(r27, o14));
        }
    }
    return new p(l27, e100);
}
function _(l28, e101) {
    for (let t78 of l28.ranges)if (t78.to > e101) throw new RangeError("Selection points outside of document");
}
var K = 0, O1 = class {
    constructor(e102, t79, n59, i47, s18){
        this.combine = e102, this.compareInput = t79, this.compare = n59, this.isStatic = i47, this.extensions = s18, this.id = K++, this.default = e102([]);
    }
    static define(e103 = {}) {
        return new O1(e103.combine || ((t80)=>t80
        ), e103.compareInput || ((t81, n60)=>t81 === n60
        ), e103.compare || (e103.combine ? (t82, n61)=>t82 === n61
         : de), !!e103.static, e103.enables);
    }
    of(e104) {
        return new W([], this, 0, e104);
    }
    compute(e105, t83) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new W(e105, this, 1, t83);
    }
    computeN(e106, t84) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new W(e106, this, 2, t84);
    }
    from(e107, t85) {
        return t85 || (t85 = (n62)=>n62
        ), this.compute([
            e107
        ], (n63)=>t85(n63.field(e107))
        );
    }
};
function de(l29, e108) {
    return l29 == e108 || l29.length == e108.length && l29.every((t86, n64)=>t86 === e108[n64]
    );
}
var W = class {
    constructor(e109, t87, n65, i48){
        this.dependencies = e109, this.facet = t87, this.type = n65, this.value = i48, this.id = K++;
    }
    dynamicSlot(e110) {
        var t88;
        let n66 = this.value, i49 = this.facet.compareInput, s19 = e110[this.id] >> 1, r28 = this.type == 2, o15 = !1, a12 = !1, f17 = [];
        for (let h1 of this.dependencies)h1 == "doc" ? o15 = !0 : h1 == "selection" ? a12 = !0 : (((t88 = e110[h1.id]) !== null && t88 !== void 0 ? t88 : 1) & 1) == 0 && f17.push(e110[h1.id]);
        return (h25, c17)=>{
            let u22 = h25.values[s19];
            if (u22 === C1) return h25.values[s19] = n66(h25), 1;
            if (c17 && (o15 && c17.docChanged || a12 && (c17.docChanged || c17.selection) || f17.some((m13)=>(q1(h25, m13) & 1) > 0
            ))) {
                let m14 = n66(h25);
                if (r28 ? !ge(m14, u22, i49) : !i49(m14, u22)) return h25.values[s19] = m14, 1;
            }
            return 0;
        };
    }
};
function ge(l30, e111, t89) {
    if (l30.length != e111.length) return !1;
    for(let n67 = 0; n67 < l30.length; n67++)if (!t89(l30[n67], e111[n67])) return !1;
    return !0;
}
function pe(l31, e112, t90) {
    let n68 = t90.map((o16)=>l31[o16.id]
    ), i50 = t90.map((o17)=>o17.type
    ), s20 = n68.filter((o18)=>!(o18 & 1)
    ), r29 = l31[e112.id] >> 1;
    return (o19, a13)=>{
        let f18 = o19.values[r29], h26 = f18 === C1 || !a13;
        for (let g11 of s20)q1(o19, g11) & 1 && (h26 = !0);
        if (!h26) return 0;
        let c18 = [];
        for(let g1 = 0; g1 < n68.length; g1++){
            let m15 = F(o19, n68[g1]);
            if (i50[g1] == 2) for (let d15 of m15)c18.push(d15);
            else c18.push(m15);
        }
        let u23 = e112.combine(c18);
        return f18 !== C1 && e112.compare(u23, f18) ? 0 : (o19.values[r29] = u23, 1);
    };
}
var ee = O1.define({
    static: !0
}), B1 = class {
    constructor(e113, t91, n69, i51, s21){
        this.id = e113, this.createF = t91, this.updateF = n69, this.compareF = i51, this.spec = s21, this.provides = void 0;
    }
    static define(e114) {
        let t92 = new B1(K++, e114.create, e114.update, e114.compare || ((n70, i52)=>n70 === i52
        ), e114);
        return e114.provide && (t92.provides = e114.provide(t92)), t92;
    }
    create(e115) {
        let t93 = e115.facet(ee).find((n71)=>n71.field == this
        );
        return ((t93 == null ? void 0 : t93.create) || this.createF)(e115);
    }
    slot(e116) {
        let t94 = e116[this.id] >> 1;
        return (n72, i53)=>{
            let s22 = n72.values[t94];
            if (s22 === C1) return n72.values[t94] = this.create(n72), 1;
            if (i53) {
                let r30 = this.updateF(s22, i53);
                if (!this.compareF(s22, r30)) return n72.values[t94] = r30, 1;
            }
            return 0;
        };
    }
    init(e117) {
        return [
            this,
            ee.of({
                field: this,
                create: e117
            })
        ];
    }
    get extension() {
        return this;
    }
}, b1 = {
    lowest: 4,
    low: 3,
    default: 2,
    high: 1,
    highest: 0
};
function N(l32) {
    return (e118)=>new Q(e118, l32)
    ;
}
var Ie = {
    lowest: N(b1.lowest),
    low: N(b1.low),
    default: N(b1.default),
    high: N(b1.high),
    highest: N(b1.highest),
    fallback: N(b1.lowest),
    extend: N(b1.high),
    override: N(b1.highest)
}, Q = class {
    constructor(e119, t95){
        this.inner = e119, this.prec = t95;
    }
}, $1 = class {
    of(e120) {
        return new M1(this, e120);
    }
    reconfigure(e121) {
        return $1.reconfigure.of({
            compartment: this,
            extension: e121
        });
    }
    get(e122) {
        return e122.config.compartments.get(this);
    }
}, M1 = class {
    constructor(e123, t96){
        this.compartment = e123, this.inner = t96;
    }
}, L = class {
    constructor(e124, t97, n73, i54, s23){
        for(this.base = e124, this.compartments = t97, this.dynamicSlots = n73, this.address = i54, this.staticValues = s23, this.statusTemplate = []; this.statusTemplate.length < n73.length;)this.statusTemplate.push(0);
    }
    staticFacet(e125) {
        let t98 = this.address[e125.id];
        return t98 == null ? e125.default : this.staticValues[t98 >> 1];
    }
    static resolve(e126, t99, n74) {
        let i55 = [], s24 = Object.create(null), r31 = new Map;
        for (let u3 of me(e126, t99, r31))u3 instanceof B1 ? i55.push(u3) : (s24[u3.facet.id] || (s24[u3.facet.id] = [])).push(u3);
        let o20 = Object.create(null), a14 = [], f19 = [], h27 = [];
        for (let u1 of i55)o20[u1.id] = f19.length << 1, f19.push((g12)=>u1.slot(g12)
        ), h27.push([]);
        for(let u2 in s24){
            let g13 = s24[u2], m16 = g13[0].facet;
            if (g13.every((d16)=>d16.type == 0
            )) {
                o20[m16.id] = a14.length << 1 | 1;
                let d17 = m16.combine(g13.map((E13)=>E13.value
                )), k11 = n74 ? n74.config.address[m16.id] : null;
                if (k11 != null) {
                    let E14 = F(n74, k11);
                    m16.compare(d17, E14) && (d17 = E14);
                }
                a14.push(d17);
            } else {
                for (let d1 of g13)d1.type == 0 ? (o20[d1.id] = a14.length << 1 | 1, a14.push(d1.value)) : (o20[d1.id] = f19.length << 1, f19.push((k12)=>d1.dynamicSlot(k12)
                ), h27.push(d1.dependencies.filter((k13)=>typeof k13 != "string"
                ).map((k14)=>k14.id
                )));
                o20[m16.id] = f19.length << 1, f19.push((d18)=>pe(d18, m16, g13)
                ), h27.push(g13.filter((d19)=>d19.type != 0
                ).map((d20)=>d20.id
                ));
            }
        }
        let c19 = f19.map((u)=>C1
        );
        if (n74) {
            let u24 = (g14, m17)=>{
                if (m17 > 7) return !1;
                let d21 = o20[g14];
                if (!(d21 & 1)) return h27[d21 >> 1].every((E15)=>u24(E15, m17 + 1)
                );
                let k15 = n74.config.address[g14];
                return k15 != null && F(n74, k15) == a14[d21 >> 1];
            };
            for(let g2 in o20){
                let m18 = o20[g2], d22 = n74.config.address[g2];
                d22 != null && (m18 & 1) == 0 && u24(+g2, 0) && (c19[m18 >> 1] = F(n74, d22));
            }
        }
        return {
            configuration: new L(e126, r31, f19.map((u25)=>u25(o20)
            ), o20, a14),
            values: c19
        };
    }
};
function me(l33, e127, t100) {
    let n75 = [
        [],
        [],
        [],
        [],
        []
    ], i56 = new Map;
    function s25(r32, o21) {
        let a15 = i56.get(r32);
        if (a15 != null) {
            if (a15 >= o21) return;
            let f20 = n75[a15].indexOf(r32);
            f20 > -1 && n75[a15].splice(f20, 1), r32 instanceof M1 && t100.delete(r32.compartment);
        }
        if (i56.set(r32, o21), Array.isArray(r32)) for (let f21 of r32)s25(f21, o21);
        else if (r32 instanceof M1) {
            if (t100.has(r32.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
            let f22 = e127.get(r32.compartment) || r32.inner;
            t100.set(r32.compartment, f22), s25(f22, o21);
        } else if (r32 instanceof Q) s25(r32.inner, r32.prec);
        else if (r32 instanceof B1) n75[o21].push(r32), r32.provides && s25(r32.provides, o21);
        else if (r32 instanceof W) n75[o21].push(r32), r32.facet.extensions && s25(r32.facet.extensions, o21);
        else {
            let f23 = r32.extension;
            if (!f23) throw new Error(`Unrecognized extension value in extension set (${r32}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
            s25(f23, o21);
        }
    }
    return s25(l33, b1.default), n75.reduce((r33, o22)=>r33.concat(o22)
    );
}
var C1 = {};
function q1(l34, e128) {
    if (e128 & 1) return 2;
    let t101 = e128 >> 1, n76 = l34.status[t101];
    if (n76 == 4) throw new Error("Cyclic dependency between fields and/or facets");
    if (n76 & 2) return n76;
    l34.status[t101] = 4;
    let i57 = l34.config.dynamicSlots[t101](l34, l34.applying);
    return l34.status[t101] = 2 | i57;
}
function F(l35, e129) {
    return e129 & 1 ? l35.config.staticValues[e129 >> 1] : l35.values[e129 >> 1];
}
var te = O1.define(), ne = O1.define({
    combine: (l36)=>l36.some((e130)=>e130
        )
    ,
    static: !0
}), ie = O1.define({
    combine: (l37)=>l37.length ? l37[0] : void 0
    ,
    static: !0
}), se = O1.define(), re = O1.define(), le = O1.define(), oe = O1.define({
    combine: (l38)=>l38.length ? l38[0] : !1
}), z1 = class {
    constructor(e131, t102){
        this.type = e131, this.value = t102;
    }
    static define() {
        return new ae;
    }
}, ae = class {
    of(e132) {
        return new z1(this, e132);
    }
}, fe = class {
    constructor(e133){
        this.map = e133;
    }
    of(e134) {
        return new v(this, e134);
    }
}, v = class {
    constructor(e135, t103){
        this.type = e135, this.value = t103;
    }
    map(e136) {
        let t104 = this.type.map(this.value, e136);
        return t104 === void 0 ? void 0 : t104 == this.value ? this : new v(this.type, t104);
    }
    is(e137) {
        return this.type == e137;
    }
    static define(e138 = {}) {
        return new fe(e138.map || ((t105)=>t105
        ));
    }
    static mapEffects(e139, t106) {
        if (!e139.length) return e139;
        let n77 = [];
        for (let i58 of e139){
            let s26 = i58.map(t106);
            s26 && n77.push(s26);
        }
        return n77;
    }
};
v.reconfigure = v.define();
v.appendConfig = v.define();
var A1 = class {
    constructor(e140, t107, n78, i59, s27, r34){
        this.startState = e140, this.changes = t107, this.selection = n78, this.effects = i59, this.annotations = s27, this.scrollIntoView = r34, this._doc = null, this._state = null, n78 && _(n78, t107.newLength), s27.some((o23)=>o23.type == A1.time
        ) || (this.annotations = s27.concat(A1.time.of(Date.now())));
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
    annotation(e141) {
        for (let t108 of this.annotations)if (t108.type == e141) return t108.value;
    }
    get docChanged() {
        return !this.changes.empty;
    }
    get reconfigured() {
        return this.startState.config != this.state.config;
    }
    isUserEvent(e142) {
        let t109 = this.annotation(A1.userEvent);
        return !!(t109 && (t109 == e142 || t109.length > e142.length && t109.slice(0, e142.length) == e142 && t109[e142.length] == "."));
    }
};
A1.time = z1.define();
A1.userEvent = z1.define();
A1.addToHistory = z1.define();
A1.remote = z1.define();
function we(l39, e143) {
    let t110 = [];
    for(let n79 = 0, i60 = 0;;){
        let s28, r35;
        if (n79 < l39.length && (i60 == e143.length || e143[i60] >= l39[n79])) s28 = l39[n79++], r35 = l39[n79++];
        else if (i60 < e143.length) s28 = e143[i60++], r35 = e143[i60++];
        else return t110;
        !t110.length || t110[t110.length - 1] < s28 ? t110.push(s28, r35) : t110[t110.length - 1] < r35 && (t110[t110.length - 1] = r35);
    }
}
function he(l40, e144, t111) {
    var n80;
    let i61, s29, r36;
    return t111 ? (i61 = e144.changes, s29 = y1.empty(e144.changes.length), r36 = l40.changes.compose(e144.changes)) : (i61 = e144.changes.map(l40.changes), s29 = l40.changes.mapDesc(e144.changes, !0), r36 = l40.changes.compose(i61)), {
        changes: r36,
        selection: e144.selection ? e144.selection.map(s29) : (n80 = l40.selection) === null || n80 === void 0 ? void 0 : n80.map(i61),
        effects: v.mapEffects(l40.effects, i61).concat(v.mapEffects(e144.effects, s29)),
        annotations: l40.annotations.length ? l40.annotations.concat(e144.annotations) : e144.annotations,
        scrollIntoView: l40.scrollIntoView || e144.scrollIntoView
    };
}
function X(l41, e145, t112) {
    let n81 = e145.selection, i62 = P1(e145.annotations);
    return e145.userEvent && (i62 = i62.concat(A1.userEvent.of(e145.userEvent))), {
        changes: e145.changes instanceof y1 ? e145.changes : y1.of(e145.changes || [], t112, l41.facet(ie)),
        selection: n81 && (n81 instanceof p ? n81 : p.single(n81.anchor, n81.head)),
        effects: P1(e145.effects),
        annotations: i62,
        scrollIntoView: !!e145.scrollIntoView
    };
}
function ce(l42, e146, t113) {
    let n82 = X(l42, e146.length ? e146[0] : {}, l42.doc.length);
    e146.length && e146[0].filter === !1 && (t113 = !1);
    for(let s30 = 1; s30 < e146.length; s30++){
        e146[s30].filter === !1 && (t113 = !1);
        let r37 = !!e146[s30].sequential;
        n82 = he(n82, X(l42, e146[s30], r37 ? n82.changes.newLength : l42.doc.length), r37);
    }
    let i63 = new A1(l42, n82.changes, n82.selection, n82.effects, n82.annotations, n82.scrollIntoView);
    return ve(t113 ? ye(i63) : i63);
}
function ye(l43) {
    let e147 = l43.startState, t114 = !0;
    for (let i64 of e147.facet(se)){
        let s31 = i64(l43);
        if (s31 === !1) {
            t114 = !1;
            break;
        }
        Array.isArray(s31) && (t114 = t114 === !0 ? s31 : we(t114, s31));
    }
    if (t114 !== !0) {
        let i65, s32;
        if (t114 === !1) s32 = l43.changes.invertedDesc, i65 = y1.empty(e147.doc.length);
        else {
            let r38 = l43.changes.filter(t114);
            i65 = r38.changes, s32 = r38.filtered.invertedDesc;
        }
        l43 = new A1(e147, i65, l43.selection && l43.selection.map(s32), v.mapEffects(l43.effects, s32), l43.annotations, l43.scrollIntoView);
    }
    let n83 = e147.facet(re);
    for(let i1 = n83.length - 1; i1 >= 0; i1--){
        let s33 = n83[i1](l43);
        s33 instanceof A1 ? l43 = s33 : Array.isArray(s33) && s33.length == 1 && s33[0] instanceof A1 ? l43 = s33[0] : l43 = ce(e147, P1(s33), !1);
    }
    return l43;
}
function ve(l44) {
    let e148 = l44.startState, t115 = e148.facet(le), n84 = l44;
    for(let i66 = t115.length - 1; i66 >= 0; i66--){
        let s34 = t115[i66](l44);
        s34 && Object.keys(s34).length && (n84 = he(l44, X(e148, s34, l44.changes.newLength), !0));
    }
    return n84 == l44 ? l44 : new A1(e148, l44.changes, l44.selection, n84.effects, n84.annotations, n84.scrollIntoView);
}
var Se = [];
function P1(l45) {
    return l45 == null ? Se : Array.isArray(l45) ? l45 : [
        l45
    ];
}
var T = function(l46) {
    return l46[l46.Word = 0] = "Word", l46[l46.Space = 1] = "Space", l46[l46.Other = 2] = "Other", l46;
}(T || (T = {})), Ae = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, Y;
try {
    Y = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch  {}
function xe(l47) {
    if (Y) return Y.test(l47);
    for(let e149 = 0; e149 < l47.length; e149++){
        let t116 = l47[e149];
        if (/\w/.test(t116) || t116 > "\x80" && (t116.toUpperCase() != t116.toLowerCase() || Ae.test(t116))) return !0;
    }
    return !1;
}
function Oe(l48) {
    return (e150)=>{
        if (!/\S/.test(e150)) return T.Space;
        if (xe(e150)) return T.Word;
        for(let t117 = 0; t117 < l48.length; t117++)if (e150.indexOf(l48[t117]) > -1) return T.Word;
        return T.Other;
    };
}
var w1 = class {
    constructor(e151, t118, n85, i67, s35 = null){
        this.config = e151, this.doc = t118, this.selection = n85, this.values = i67, this.applying = null, this.status = e151.statusTemplate.slice(), this.applying = s35, s35 && (s35._state = this);
        for(let r39 = 0; r39 < this.config.dynamicSlots.length; r39++)q1(this, r39 << 1);
        this.applying = null;
    }
    field(e152, t119 = !0) {
        let n86 = this.config.address[e152.id];
        if (n86 == null) {
            if (t119) throw new RangeError("Field is not present in this state");
            return;
        }
        return q1(this, n86), F(this, n86);
    }
    update(...e153) {
        return ce(this, e153, !0);
    }
    applyTransaction(e154) {
        let t120 = this.config, { base: n87 , compartments: i68  } = t120;
        for (let r40 of e154.effects)r40.is($1.reconfigure) ? (t120 && (i68 = new Map, t120.compartments.forEach((o24, a16)=>i68.set(a16, o24)
        ), t120 = null), i68.set(r40.value.compartment, r40.value.extension)) : r40.is(v.reconfigure) ? (t120 = null, n87 = r40.value) : r40.is(v.appendConfig) && (t120 = null, n87 = P1(n87).concat(r40.value));
        let s36;
        if (t120) s36 = e154.startState.values.slice();
        else {
            let r41 = L.resolve(n87, i68, this);
            t120 = r41.configuration, s36 = new w1(t120, this.doc, this.selection, r41.values, null).values;
        }
        new w1(t120, e154.newDoc, e154.newSelection, s36, e154);
    }
    replaceSelection(e155) {
        return typeof e155 == "string" && (e155 = this.toText(e155)), this.changeByRange((t121)=>({
                changes: {
                    from: t121.from,
                    to: t121.to,
                    insert: e155
                },
                range: p.cursor(t121.from + e155.length)
            })
        );
    }
    changeByRange(e156) {
        let t122 = this.selection, n88 = e156(t122.ranges[0]), i69 = this.changes(n88.changes), s37 = [
            n88.range
        ], r42 = P1(n88.effects);
        for(let o25 = 1; o25 < t122.ranges.length; o25++){
            let a17 = e156(t122.ranges[o25]), f24 = this.changes(a17.changes), h28 = f24.map(i69);
            for(let u26 = 0; u26 < o25; u26++)s37[u26] = s37[u26].map(h28);
            let c20 = i69.mapDesc(f24, !0);
            s37.push(a17.range.map(c20)), i69 = i69.compose(h28), r42 = v.mapEffects(r42, h28).concat(v.mapEffects(P1(a17.effects), c20));
        }
        return {
            changes: i69,
            selection: p.create(s37, t122.mainIndex),
            effects: r42
        };
    }
    changes(e157 = []) {
        return e157 instanceof y1 ? e157 : y1.of(e157, this.doc.length, this.facet(w1.lineSeparator));
    }
    toText(e158) {
        return d.of(e158.split(this.facet(w1.lineSeparator) || U));
    }
    sliceDoc(e159 = 0, t123 = this.doc.length) {
        return this.doc.sliceString(e159, t123, this.lineBreak);
    }
    facet(e160) {
        let t124 = this.config.address[e160.id];
        return t124 == null ? e160.default : (q1(this, t124), F(this, t124));
    }
    toJSON(e161) {
        let t125 = {
            doc: this.sliceDoc(),
            selection: this.selection.toJSON()
        };
        if (e161) for(let n89 in e161){
            let i70 = e161[n89];
            i70 instanceof B1 && (t125[n89] = i70.spec.toJSON(this.field(e161[n89]), this));
        }
        return t125;
    }
    static fromJSON(e162, t126 = {}, n90) {
        if (!e162 || typeof e162.doc != "string") throw new RangeError("Invalid JSON representation for EditorState");
        let i71 = [];
        if (n90) for(let s38 in n90){
            let r43 = n90[s38], o26 = e162[s38];
            i71.push(r43.init((a18)=>r43.spec.fromJSON(o26, a18)
            ));
        }
        return w1.create({
            doc: e162.doc,
            selection: p.fromJSON(e162.selection),
            extensions: t126.extensions ? i71.concat([
                t126.extensions
            ]) : i71
        });
    }
    static create(e163 = {}) {
        let { configuration: t127 , values: n91  } = L.resolve(e163.extensions || [], new Map), i72 = e163.doc instanceof d ? e163.doc : d.of((e163.doc || "").split(t127.staticFacet(w1.lineSeparator) || U)), s39 = e163.selection ? e163.selection instanceof p ? e163.selection : p.single(e163.selection.anchor, e163.selection.head) : p.single(0);
        return _(s39, i72.length), t127.staticFacet(ne) || (s39 = s39.asSingle()), new w1(t127, i72, s39, n91);
    }
    get tabSize() {
        return this.facet(w1.tabSize);
    }
    get lineBreak() {
        return this.facet(w1.lineSeparator) || `
`;
    }
    get readOnly() {
        return this.facet(oe);
    }
    phrase(e164) {
        for (let t128 of this.facet(w1.phrases))if (Object.prototype.hasOwnProperty.call(t128, e164)) return t128[e164];
        return e164;
    }
    languageDataAt(e165, t129, n92 = -1) {
        let i73 = [];
        for (let s40 of this.facet(te))for (let r44 of s40(this, t129, n92))Object.prototype.hasOwnProperty.call(r44, e165) && i73.push(r44[e165]);
        return i73;
    }
    charCategorizer(e166) {
        return Oe(this.languageDataAt("wordChars", e166).join(""));
    }
    wordAt(e167) {
        let { text: t130 , from: n93 , length: i74  } = this.doc.lineAt(e167), s41 = this.charCategorizer(e167), r45 = e167 - n93, o27 = e167 - n93;
        for(; r45 > 0;){
            let a19 = A(t130, r45, !1);
            if (s41(t130.slice(a19, r45)) != T.Word) break;
            r45 = a19;
        }
        for(; o27 < i74;){
            let a20 = A(t130, o27);
            if (s41(t130.slice(o27, a20)) != T.Word) break;
            o27 = a20;
        }
        return r45 == o27 ? null : p.range(r45 + n93, o27 + n93);
    }
};
w1.allowMultipleSelections = ne;
w1.tabSize = O1.define({
    combine: (l49)=>l49.length ? l49[0] : 4
});
w1.lineSeparator = ie;
w1.readOnly = oe;
w1.phrases = O1.define();
w1.languageData = te;
w1.changeFilter = se;
w1.transactionFilter = re;
w1.transactionExtender = le;
$1.reconfigure = v.define();
function be(l50, e168, t131 = {}) {
    let n94 = {};
    for (let i75 of l50)for (let s42 of Object.keys(i75)){
        let r46 = i75[s42], o28 = n94[s42];
        if (o28 === void 0) n94[s42] = r46;
        else if (!(o28 === r46 || r46 === void 0)) if (Object.hasOwnProperty.call(t131, s42)) n94[s42] = t131[s42](o28, r46);
        else throw new Error("Config merge conflict for field " + s42);
    }
    for(let i2 in e168)n94[i2] === void 0 && (n94[i2] = e168[i2]);
    return n94;
}
var S2 = "\u037C", g1 = typeof Symbol == "undefined" ? "__" + S2 : Symbol.for(S2), c = typeof Symbol == "undefined" ? "__styleSet" + Math.floor(Math.random() * 100000000) : Symbol("styleSet"), w2 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : {}, x1 = class {
    constructor(e169, l51){
        this.rules = [];
        let { finish: u27  } = l51 || {};
        function n95(t132) {
            return /^@/.test(t132) ? [
                t132
            ] : t132.split(/,\s*/);
        }
        function s43(t133, i76, h29, C15) {
            let f25 = [], r47 = /^@(\w+)\b/.exec(t133[0]), m19 = r47 && r47[1] == "keyframes";
            if (r47 && i76 == null) return h29.push(t133[0] + ";");
            for(let o29 in i76){
                let a21 = i76[o29];
                if (/&/.test(o29)) s43(o29.split(/,\s*/).map((d23)=>t133.map((y14)=>d23.replace(/&/, y14)
                    )
                ).reduce((d24, y15)=>d24.concat(y15)
                ), a21, h29);
                else if (a21 && typeof a21 == "object") {
                    if (!r47) throw new RangeError("The value of a property (" + o29 + ") should be a primitive value.");
                    s43(n95(o29), a21, f25, m19);
                } else a21 != null && f25.push(o29.replace(/_.*/, "").replace(/[A-Z]/g, (d25)=>"-" + d25.toLowerCase()
                ) + ": " + a21 + ";");
            }
            (f25.length || m19) && h29.push((u27 && !r47 && !C15 ? t133.map(u27) : t133).join(", ") + " {" + f25.join(" ") + "}");
        }
        for(let t1 in e169)s43(n95(t1), e169[t1], this.rules);
    }
    getRules() {
        return this.rules.join(`
`);
    }
    static newName() {
        let e170 = w2[g1] || 1;
        return w2[g1] = e170 + 1, S2 + e170.toString(36);
    }
    static mount(e171, l52) {
        (e171[c] || new b2(e171)).mount(Array.isArray(l52) ? l52 : [
            l52
        ]);
    }
}, p1 = null, b2 = class {
    constructor(e172){
        if (!e172.head && e172.adoptedStyleSheets && typeof CSSStyleSheet != "undefined") {
            if (p1) return e172.adoptedStyleSheets = [
                p1.sheet
            ].concat(e172.adoptedStyleSheets), e172[c] = p1;
            this.sheet = new CSSStyleSheet, e172.adoptedStyleSheets = [
                this.sheet
            ].concat(e172.adoptedStyleSheets), p1 = this;
        } else {
            this.styleTag = (e172.ownerDocument || e172).createElement("style");
            let l53 = e172.head || e172;
            l53.insertBefore(this.styleTag, l53.firstChild);
        }
        this.modules = [], e172[c] = this;
    }
    mount(e173) {
        let l54 = this.sheet, u28 = 0, n96 = 0;
        for(let s44 = 0; s44 < e173.length; s44++){
            let t134 = e173[s44], i77 = this.modules.indexOf(t134);
            if (i77 < n96 && i77 > -1 && (this.modules.splice(i77, 1), n96--, i77 = -1), i77 == -1) {
                if (this.modules.splice(n96++, 0, t134), l54) for(let h30 = 0; h30 < t134.rules.length; h30++)l54.insertRule(t134.rules[h30], u28++);
            } else {
                for(; n96 < i77;)u28 += this.modules[n96++].rules.length;
                u28 += t134.rules.length, n96++;
            }
        }
        if (!l54) {
            let s45 = "";
            for(let t135 = 0; t135 < this.modules.length; t135++)s45 += this.modules[t135].getRules() + `
`;
            this.styleTag.textContent = s45;
        }
    }
};
var v1 = class {
    eq(t136) {
        return this == t136;
    }
    range(t137, i78 = t137) {
        return new g2(t137, i78, this);
    }
};
v1.prototype.startSide = v1.prototype.endSide = 0;
v1.prototype.point = !1;
v1.prototype.mapMode = D1.TrackDel;
var g2 = class {
    constructor(t138, i79, e174){
        this.from = t138, this.to = i79, this.value = e174;
    }
};
function y2(o30, t139) {
    return o30.from - t139.from || o30.value.startSide - t139.value.startSide;
}
var S3 = class {
    constructor(t140, i80, e175, s46){
        this.from = t140, this.to = i80, this.value = e175, this.maxPoint = s46;
    }
    get length() {
        return this.to[this.to.length - 1];
    }
    findIndex(t141, i81, e176, s47 = 0) {
        let n97 = e176 ? this.to : this.from;
        for(let r48 = s47, h31 = n97.length;;){
            if (r48 == h31) return r48;
            let l55 = r48 + h31 >> 1, a22 = n97[l55] - t141 || (e176 ? this.value[l55].endSide : this.value[l55].startSide) - i81;
            if (l55 == r48) return a22 >= 0 ? r48 : h31;
            a22 >= 0 ? h31 = l55 : r48 = l55 + 1;
        }
    }
    between(t142, i82, e177, s48) {
        for(let n98 = this.findIndex(i82, -1000000000, !0), r49 = this.findIndex(e177, 1000000000, !1, n98); n98 < r49; n98++)if (s48(this.from[n98] + t142, this.to[n98] + t142, this.value[n98]) === !1) return !1;
    }
    map(t143, i83) {
        let e178 = [], s49 = [], n99 = [], r50 = -1, h32 = -1;
        for(let l56 = 0; l56 < this.value.length; l56++){
            let a23 = this.value[l56], u29 = this.from[l56] + t143, c21 = this.to[l56] + t143, d26, p18;
            if (u29 == c21) {
                let M16 = i83.mapPos(u29, a23.startSide, a23.mapMode);
                if (M16 == null || (d26 = p18 = M16, a23.startSide != a23.endSide && (p18 = i83.mapPos(u29, a23.endSide), p18 < d26))) continue;
            } else if (d26 = i83.mapPos(u29, a23.startSide), p18 = i83.mapPos(c21, a23.endSide), d26 > p18 || d26 == p18 && a23.startSide > 0 && a23.endSide <= 0) continue;
            (p18 - d26 || a23.endSide - a23.startSide) < 0 || (r50 < 0 && (r50 = d26), a23.point && (h32 = Math.max(h32, p18 - d26)), e178.push(a23), s49.push(d26 - r50), n99.push(p18 - r50));
        }
        return {
            mapped: e178.length ? new S3(s49, n99, e178, h32) : null,
            pos: r50
        };
    }
}, f = class {
    constructor(t144, i84, e179 = f.empty, s50){
        this.chunkPos = t144, this.chunk = i84, this.nextLayer = e179, this.maxPoint = s50;
    }
    get length() {
        let t145 = this.chunk.length - 1;
        return t145 < 0 ? 0 : Math.max(this.chunkEnd(t145), this.nextLayer.length);
    }
    get size() {
        if (this.isEmpty) return 0;
        let t146 = this.nextLayer.size;
        for (let i85 of this.chunk)t146 += i85.value.length;
        return t146;
    }
    chunkEnd(t147) {
        return this.chunkPos[t147] + this.chunk[t147].length;
    }
    update(t148) {
        let { add: i86 = [] , sort: e180 = !1 , filterFrom: s51 = 0 , filterTo: n100 = this.length  } = t148, r51 = t148.filter;
        if (i86.length == 0 && !r51) return this;
        if (e180 && i86.slice().sort(y2), this.isEmpty) return i86.length ? f.of(i86) : this;
        let h33 = new w3(this, null, -1).goto(0), l57 = 0, a24 = [], u30 = new x2;
        for(; h33.value || l57 < i86.length;)if (l57 < i86.length && (h33.from - i86[l57].from || h33.startSide - i86[l57].value.startSide) >= 0) {
            let c22 = i86[l57++];
            u30.addInner(c22.from, c22.to, c22.value) || a24.push(c22);
        } else h33.rangeIndex == 1 && h33.chunkIndex < this.chunk.length && (l57 == i86.length || this.chunkEnd(h33.chunkIndex) < i86[l57].from) && (!r51 || s51 > this.chunkEnd(h33.chunkIndex) || n100 < this.chunkPos[h33.chunkIndex]) && u30.addChunk(this.chunkPos[h33.chunkIndex], this.chunk[h33.chunkIndex]) ? h33.nextChunk() : ((!r51 || s51 > h33.to || n100 < h33.from || r51(h33.from, h33.to, h33.value)) && (u30.addInner(h33.from, h33.to, h33.value) || a24.push(new g2(h33.from, h33.to, h33.value))), h33.next());
        return u30.finishInner(this.nextLayer.isEmpty && !a24.length ? f.empty : this.nextLayer.update({
            add: a24,
            filter: r51,
            filterFrom: s51,
            filterTo: n100
        }));
    }
    map(t149) {
        if (t149.length == 0 || this.isEmpty) return this;
        let i87 = [], e181 = [], s52 = -1;
        for(let r52 = 0; r52 < this.chunk.length; r52++){
            let h34 = this.chunkPos[r52], l58 = this.chunk[r52], a25 = t149.touchesRange(h34, h34 + l58.length);
            if (a25 === !1) s52 = Math.max(s52, l58.maxPoint), i87.push(l58), e181.push(t149.mapPos(h34));
            else if (a25 === !0) {
                let { mapped: u31 , pos: c23  } = l58.map(h34, t149);
                u31 && (s52 = Math.max(s52, u31.maxPoint), i87.push(u31), e181.push(c23));
            }
        }
        let n101 = this.nextLayer.map(t149);
        return i87.length == 0 ? n101 : new f(e181, i87, n101, s52);
    }
    between(t150, i88, e182) {
        if (!this.isEmpty) {
            for(let s53 = 0; s53 < this.chunk.length; s53++){
                let n102 = this.chunkPos[s53], r53 = this.chunk[s53];
                if (i88 >= n102 && t150 <= n102 + r53.length && r53.between(n102, t150 - n102, i88 - n102, e182) === !1) return;
            }
            this.nextLayer.between(t150, i88, e182);
        }
    }
    iter(t151 = 0) {
        return m1.from([
            this
        ]).goto(t151);
    }
    get isEmpty() {
        return this.nextLayer == this;
    }
    static iter(t152, i89 = 0) {
        return m1.from(t152).goto(i89);
    }
    static compare(t153, i90, e183, s54, n103 = -1) {
        let r54 = t153.filter((c24)=>c24.maxPoint > 0 || !c24.isEmpty && c24.maxPoint >= n103
        ), h35 = i90.filter((c25)=>c25.maxPoint > 0 || !c25.isEmpty && c25.maxPoint >= n103
        ), l59 = A2(r54, h35, e183), a26 = new k1(r54, l59, n103), u32 = new k1(h35, l59, n103);
        e183.iterGaps((c26, d27, p19)=>L1(a26, c26, u32, d27, p19, s54)
        ), e183.empty && e183.length == 0 && L1(a26, 0, u32, 0, 0, s54);
    }
    static eq(t154, i91, e184 = 0, s55) {
        s55 == null && (s55 = 1000000000);
        let n104 = t154.filter((u33)=>!u33.isEmpty && i91.indexOf(u33) < 0
        ), r55 = i91.filter((u34)=>!u34.isEmpty && t154.indexOf(u34) < 0
        );
        if (n104.length != r55.length) return !1;
        if (!n104.length) return !0;
        let h36 = A2(n104, r55), l60 = new k1(n104, h36, 0).goto(e184), a27 = new k1(r55, h36, 0).goto(e184);
        for(;;){
            if (l60.to != a27.to || !E1(l60.active, a27.active) || l60.point && (!a27.point || !l60.point.eq(a27.point))) return !1;
            if (l60.to > s55) return !0;
            l60.next(), a27.next();
        }
    }
    static spans(t155, i92, e185, s56, n105 = -1) {
        var r56;
        let h37 = new k1(t155, null, n105, (r56 = s56.filterPoint) === null || r56 === void 0 ? void 0 : r56.bind(s56)).goto(i92), l61 = i92, a28 = h37.openStart;
        for(;;){
            let u35 = Math.min(h37.to, e185);
            if (h37.point ? (s56.point(l61, u35, h37.point, h37.activeForPoint(h37.to), a28), a28 = h37.openEnd(u35) + (h37.to > u35 ? 1 : 0)) : u35 > l61 && (s56.span(l61, u35, h37.active, a28), a28 = h37.openEnd(u35)), h37.to > e185) break;
            l61 = h37.to, h37.next();
        }
        return a28;
    }
    static of(t156, i93 = !1) {
        let e186 = new x2;
        for (let s57 of t156 instanceof g2 ? [
            t156
        ] : i93 ? b3(t156) : t156)e186.add(s57.from, s57.to, s57.value);
        return e186.finish();
    }
};
f.empty = new f([], [], null, -1);
function b3(o31) {
    if (o31.length > 1) for(let t157 = o31[0], i94 = 1; i94 < o31.length; i94++){
        let e187 = o31[i94];
        if (y2(t157, e187) > 0) return o31.slice().sort(y2);
        t157 = e187;
    }
    return o31;
}
f.empty.nextLayer = f.empty;
var x2 = class {
    constructor(){
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1000000000, this.lastTo = -1000000000, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
    }
    finishChunk(t158) {
        this.chunks.push(new S3(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, t158 && (this.from = [], this.to = [], this.value = []);
    }
    add(t159, i95, e188) {
        this.addInner(t159, i95, e188) || (this.nextLayer || (this.nextLayer = new x2)).add(t159, i95, e188);
    }
    addInner(t160, i96, e189) {
        let s58 = t160 - this.lastTo || e189.startSide - this.last.endSide;
        if (s58 <= 0 && (t160 - this.lastFrom || e189.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return s58 < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = t160), this.from.push(t160 - this.chunkStart), this.to.push(i96 - this.chunkStart), this.last = e189, this.lastFrom = t160, this.lastTo = i96, this.value.push(e189), e189.point && (this.maxPoint = Math.max(this.maxPoint, i96 - t160)), !0);
    }
    addChunk(t161, i97) {
        if ((t161 - this.lastTo || i97.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, i97.maxPoint), this.chunks.push(i97), this.chunkPos.push(t161);
        let e190 = i97.value.length - 1;
        return this.last = i97.value[e190], this.lastFrom = i97.from[e190] + t161, this.lastTo = i97.to[e190] + t161, !0;
    }
    finish() {
        return this.finishInner(f.empty);
    }
    finishInner(t162) {
        if (this.from.length && this.finishChunk(!1), this.chunks.length == 0) return t162;
        let i98 = new f(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(t162) : t162, this.setMaxPoint);
        return this.from = null, i98;
    }
};
function A2(o32, t163, i99) {
    let e191 = new Map;
    for (let n106 of o32)for(let r57 = 0; r57 < n106.chunk.length; r57++)n106.chunk[r57].maxPoint <= 0 && e191.set(n106.chunk[r57], n106.chunkPos[r57]);
    let s59 = new Set;
    for (let n1 of t163)for(let r1 = 0; r1 < n1.chunk.length; r1++){
        let h38 = e191.get(n1.chunk[r1]);
        h38 != null && (i99 ? i99.mapPos(h38) : h38) == n1.chunkPos[r1] && !(i99 == null ? void 0 : i99.touchesRange(h38, h38 + n1.chunk[r1].length)) && s59.add(n1.chunk[r1]);
    }
    return s59;
}
var w3 = class {
    constructor(t164, i100, e192, s60 = 0){
        this.layer = t164, this.skip = i100, this.minPoint = e192, this.rank = s60;
    }
    get startSide() {
        return this.value ? this.value.startSide : 0;
    }
    get endSide() {
        return this.value ? this.value.endSide : 0;
    }
    goto(t165, i101 = -1000000000) {
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(t165, i101, !1), this;
    }
    gotoInner(t166, i102, e193) {
        for(; this.chunkIndex < this.layer.chunk.length;){
            let s61 = this.layer.chunk[this.chunkIndex];
            if (!(this.skip && this.skip.has(s61) || this.layer.chunkEnd(this.chunkIndex) < t166 || s61.maxPoint < this.minPoint)) break;
            this.chunkIndex++, e193 = !1;
        }
        if (this.chunkIndex < this.layer.chunk.length) {
            let s62 = this.layer.chunk[this.chunkIndex].findIndex(t166 - this.layer.chunkPos[this.chunkIndex], i102, !0);
            (!e193 || this.rangeIndex < s62) && this.setRangeIndex(s62);
        }
        this.next();
    }
    forward(t167, i103) {
        (this.to - t167 || this.endSide - i103) < 0 && this.gotoInner(t167, i103, !0);
    }
    next() {
        for(;;)if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1000000000, this.value = null;
            break;
        } else {
            let t168 = this.layer.chunkPos[this.chunkIndex], i104 = this.layer.chunk[this.chunkIndex], e194 = t168 + i104.from[this.rangeIndex];
            if (this.from = e194, this.to = t168 + i104.to[this.rangeIndex], this.value = i104.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break;
        }
    }
    setRangeIndex(t169) {
        if (t169 == this.layer.chunk[this.chunkIndex].value.length) {
            if (this.chunkIndex++, this.skip) for(; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;
            this.rangeIndex = 0;
        } else this.rangeIndex = t169;
    }
    nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next();
    }
    compare(t170) {
        return this.from - t170.from || this.startSide - t170.startSide || this.to - t170.to || this.endSide - t170.endSide;
    }
}, m1 = class {
    constructor(t171){
        this.heap = t171;
    }
    static from(t172, i105 = null, e195 = -1) {
        let s63 = [];
        for(let n107 = 0; n107 < t172.length; n107++)for(let r58 = t172[n107]; !r58.isEmpty; r58 = r58.nextLayer)r58.maxPoint >= e195 && s63.push(new w3(r58, i105, e195, n107));
        return s63.length == 1 ? s63[0] : new m1(s63);
    }
    get startSide() {
        return this.value ? this.value.startSide : 0;
    }
    goto(t173, i106 = -1000000000) {
        for (let e196 of this.heap)e196.goto(t173, i106);
        for(let e1 = this.heap.length >> 1; e1 >= 0; e1--)T1(this.heap, e1);
        return this.next(), this;
    }
    forward(t174, i107) {
        for (let e197 of this.heap)e197.forward(t174, i107);
        for(let e2 = this.heap.length >> 1; e2 >= 0; e2--)T1(this.heap, e2);
        (this.to - t174 || this.value.endSide - i107) < 0 && this.next();
    }
    next() {
        if (this.heap.length == 0) this.from = this.to = 1000000000, this.value = null, this.rank = -1;
        else {
            let t175 = this.heap[0];
            this.from = t175.from, this.to = t175.to, this.value = t175.value, this.rank = t175.rank, t175.value && t175.next(), T1(this.heap, 0);
        }
    }
};
function T1(o33, t176) {
    for(let i108 = o33[t176];;){
        let e198 = (t176 << 1) + 1;
        if (e198 >= o33.length) break;
        let s64 = o33[e198];
        if (e198 + 1 < o33.length && s64.compare(o33[e198 + 1]) >= 0 && (s64 = o33[e198 + 1], e198++), i108.compare(s64) < 0) break;
        o33[e198] = i108, o33[t176] = s64, t176 = e198;
    }
}
var k1 = class {
    constructor(t177, i109, e199, s65 = ()=>!0
    ){
        this.minPoint = e199, this.filterPoint = s65, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1000000000, this.endSide = 0, this.openStart = -1, this.cursor = m1.from(t177, i109, e199);
    }
    goto(t178, i110 = -1000000000) {
        return this.cursor.goto(t178, i110), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = t178, this.endSide = i110, this.openStart = -1, this.next(), this;
    }
    forward(t179, i111) {
        for(; this.minActive > -1 && (this.activeTo[this.minActive] - t179 || this.active[this.minActive].endSide - i111) < 0;)this.removeActive(this.minActive);
        this.cursor.forward(t179, i111);
    }
    removeActive(t180) {
        P2(this.active, t180), P2(this.activeTo, t180), P2(this.activeRank, t180), this.minActive = F1(this.active, this.activeTo);
    }
    addActive(t181) {
        let i112 = 0, { value: e200 , to: s66 , rank: n108  } = this.cursor;
        for(; i112 < this.activeRank.length && this.activeRank[i112] <= n108;)i112++;
        I1(this.active, i112, e200), I1(this.activeTo, i112, s66), I1(this.activeRank, i112, n108), t181 && I1(t181, i112, this.cursor.from), this.minActive = F1(this.active, this.activeTo);
    }
    next() {
        let t182 = this.to, i113 = this.point;
        this.point = null;
        let e201 = this.openStart < 0 ? [] : null, s67 = 0;
        for(;;){
            let n109 = this.minActive;
            if (n109 > -1 && (this.activeTo[n109] - this.cursor.from || this.active[n109].endSide - this.cursor.startSide) < 0) {
                if (this.activeTo[n109] > t182) {
                    this.to = this.activeTo[n109], this.endSide = this.active[n109].endSide;
                    break;
                }
                this.removeActive(n109), e201 && P2(e201, n109);
            } else if (this.cursor.value) if (this.cursor.from > t182) {
                this.to = this.cursor.from, this.endSide = this.cursor.startSide;
                break;
            } else {
                let r59 = this.cursor.value;
                if (!r59.point) this.addActive(e201), this.cursor.next();
                else if (i113 && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next();
                else if (!this.filterPoint(this.cursor.from, this.cursor.to, this.cursor.value, this.cursor.rank)) this.cursor.next();
                else {
                    this.point = r59, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r59.endSide, this.cursor.from < t182 && (s67 = 1), this.cursor.next(), this.to > t182 && this.forward(this.to, this.endSide);
                    break;
                }
            }
            else {
                this.to = this.endSide = 1000000000;
                break;
            }
        }
        if (e201) {
            let n110 = 0;
            for(; n110 < e201.length && e201[n110] < t182;)n110++;
            this.openStart = n110 + s67;
        }
    }
    activeForPoint(t183) {
        if (!this.active.length) return this.active;
        let i114 = [];
        for(let e202 = this.active.length - 1; e202 >= 0 && !(this.activeRank[e202] < this.pointRank); e202--)(this.activeTo[e202] > t183 || this.activeTo[e202] == t183 && this.active[e202].endSide >= this.point.endSide) && i114.push(this.active[e202]);
        return i114.reverse();
    }
    openEnd(t184) {
        let i115 = 0;
        for(let e203 = this.activeTo.length - 1; e203 >= 0 && this.activeTo[e203] > t184; e203--)i115++;
        return i115;
    }
};
function L1(o34, t185, i116, e204, s68, n111) {
    o34.goto(t185), i116.goto(e204);
    let r60 = e204 + s68, h39 = e204, l62 = e204 - t185;
    for(;;){
        let a29 = o34.to + l62 - i116.to || o34.endSide - i116.endSide, u36 = a29 < 0 ? o34.to + l62 : i116.to, c27 = Math.min(u36, r60);
        if (o34.point || i116.point ? o34.point && i116.point && (o34.point == i116.point || o34.point.eq(i116.point)) && E1(o34.activeForPoint(o34.to + l62), i116.activeForPoint(i116.to)) || n111.comparePoint(h39, c27, o34.point, i116.point) : c27 > h39 && !E1(o34.active, i116.active) && n111.compareRange(h39, c27, o34.active, i116.active), u36 > r60) break;
        h39 = u36, a29 <= 0 && o34.next(), a29 >= 0 && i116.next();
    }
}
function E1(o35, t186) {
    if (o35.length != t186.length) return !1;
    for(let i117 = 0; i117 < o35.length; i117++)if (o35[i117] != t186[i117] && !o35[i117].eq(t186[i117])) return !1;
    return !0;
}
function P2(o36, t187) {
    for(let i118 = t187, e205 = o36.length - 1; i118 < e205; i118++)o36[i118] = o36[i118 + 1];
    o36.pop();
}
function I1(o37, t188, i119) {
    for(let e206 = o37.length - 1; e206 >= t188; e206--)o37[e206 + 1] = o37[e206];
    o37[t188] = i119;
}
function F1(o38, t189) {
    let i120 = -1, e207 = 1000000000;
    for(let s69 = 0; s69 < t189.length; s69++)(t189[s69] - e207 || o38[s69].endSide - o38[i120].endSide) < 0 && (i120 = s69, e207 = t189[s69]);
    return i120;
}
var a1 = {
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
    222: "'",
    229: "q"
}, t = {
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
    222: '"',
    229: "Q"
}, i = typeof navigator != "undefined" && /Chrome\/(\d+)/.exec(navigator.userAgent), p2 = typeof navigator != "undefined" && /Apple Computer/.test(navigator.vendor), d1 = typeof navigator != "undefined" && /Gecko\/\d+/.test(navigator.userAgent), f1 = typeof navigator != "undefined" && /Mac/.test(navigator.platform), s1 = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), y3 = i && (f1 || +i[1] < 57) || d1 && f1;
for(r = 0; r < 10; r++)a1[48 + r] = a1[96 + r] = String(r);
var r;
for(r = 1; r <= 24; r++)a1[r + 111] = "F" + r;
var r;
for(r = 65; r <= 90; r++)a1[r] = String.fromCharCode(r + 32), t[r] = String.fromCharCode(r);
var r;
for(n in a1)t.hasOwnProperty(n) || (t[n] = a1[n]);
var n;
function v2(o39) {
    var g15 = y3 && (o39.ctrlKey || o39.altKey || o39.metaKey) || (p2 || s1) && o39.shiftKey && o39.key && o39.key.length == 1, e208 = !g15 && o39.key || (o39.shiftKey ? t : a1)[o39.keyCode] || o39.key || "Unidentified";
    return e208 == "Esc" && (e208 = "Escape"), e208 == "Del" && (e208 = "Delete"), e208 == "Left" && (e208 = "ArrowLeft"), e208 == "Up" && (e208 = "ArrowUp"), e208 == "Right" && (e208 = "ArrowRight"), e208 == "Down" && (e208 = "ArrowDown"), e208;
}
function Ht(n1) {
    let t190;
    return n1.nodeType == 11 ? t190 = n1.getSelection ? n1 : n1.ownerDocument : t190 = n1, t190.getSelection();
}
function Ut(n2, t191) {
    return t191 ? n2.contains(t191.nodeType != 1 ? t191.parentNode : t191) : !1;
}
function zs() {
    let n3 = document.activeElement;
    for(; n3 && n3.shadowRoot;)n3 = n3.shadowRoot.activeElement;
    return n3;
}
function Xt(n4, t192) {
    if (!t192.anchorNode) return !1;
    try {
        return Ut(n4, t192.anchorNode);
    } catch  {
        return !1;
    }
}
function ut(n5) {
    return n5.nodeType == 3 ? wt(n5, 0, n5.nodeValue.length).getClientRects() : n5.nodeType == 1 ? n5.getClientRects() : [];
}
function Nt(n6, t193, e209, i121) {
    return e209 ? qe(n6, t193, e209, i121, -1) || qe(n6, t193, e209, i121, 1) : !1;
}
function _t(n7) {
    for(var t194 = 0;; t194++)if (n7 = n7.previousSibling, !n7) return t194;
}
function qe(n8, t195, e210, i122, s70) {
    for(;;){
        if (n8 == e210 && t195 == i122) return !0;
        if (t195 == (s70 < 0 ? 0 : Vt(n8))) {
            if (n8.nodeName == "DIV") return !1;
            let r61 = n8.parentNode;
            if (!r61 || r61.nodeType != 1) return !1;
            t195 = _t(n8) + (s70 < 0 ? 0 : 1), n8 = r61;
        } else if (n8.nodeType == 1) {
            if (n8 = n8.childNodes[t195 + (s70 < 0 ? -1 : 0)], n8.nodeType == 1 && n8.contentEditable == "false") return !1;
            t195 = s70 < 0 ? Vt(n8) : 0;
        } else return !1;
    }
}
function Vt(n9) {
    return n9.nodeType == 3 ? n9.nodeValue.length : n9.childNodes.length;
}
var Ke = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};
function Wt(n10, t196) {
    let e211 = t196 ? n10.left : n10.right;
    return {
        left: e211,
        right: e211,
        top: n10.top,
        bottom: n10.bottom
    };
}
function Is(n11) {
    return {
        left: 0,
        right: n11.innerWidth,
        top: 0,
        bottom: n11.innerHeight
    };
}
function qs(n12, t197, e212, i123, s71, r62, o40, l63) {
    let h40 = n12.ownerDocument, a30 = h40.defaultView;
    for(let c28 = n12; c28;)if (c28.nodeType == 1) {
        let f26, d28 = c28 == h40.body;
        if (d28) f26 = Is(a30);
        else {
            if (c28.scrollHeight <= c28.clientHeight && c28.scrollWidth <= c28.clientWidth) {
                c28 = c28.parentNode;
                continue;
            }
            let m20 = c28.getBoundingClientRect();
            f26 = {
                left: m20.left,
                right: m20.left + c28.clientWidth,
                top: m20.top,
                bottom: m20.top + c28.clientHeight
            };
        }
        let u37 = 0, g16 = 0;
        if (s71 == "nearest") t197.top < f26.top ? (g16 = -(f26.top - t197.top + o40), e212 > 0 && t197.bottom > f26.bottom + g16 && (g16 = t197.bottom - f26.bottom + g16 + o40)) : t197.bottom > f26.bottom && (g16 = t197.bottom - f26.bottom + o40, e212 < 0 && t197.top - g16 < f26.top && (g16 = -(f26.top + g16 - t197.top + o40)));
        else {
            let m21 = t197.bottom - t197.top, b16 = f26.bottom - f26.top;
            g16 = (s71 == "center" && m21 <= b16 ? t197.top + m21 / 2 - b16 / 2 : s71 == "start" || s71 == "center" && e212 < 0 ? t197.top - o40 : t197.bottom - b16 + o40) - f26.top;
        }
        if (i123 == "nearest" ? t197.left < f26.left ? (u37 = -(f26.left - t197.left + r62), e212 > 0 && t197.right > f26.right + u37 && (u37 = t197.right - f26.right + u37 + r62)) : t197.right > f26.right && (u37 = t197.right - f26.right + r62, e212 < 0 && t197.left < f26.left + u37 && (u37 = -(f26.left + u37 - t197.left + r62))) : u37 = (i123 == "center" ? t197.left + (t197.right - t197.left) / 2 - (f26.right - f26.left) / 2 : i123 == "start" == l63 ? t197.left - r62 : t197.right - (f26.right - f26.left) + r62) - f26.left, u37 || g16) if (d28) a30.scrollBy(u37, g16);
        else {
            if (g16) {
                let m22 = c28.scrollTop;
                c28.scrollTop += g16, g16 = c28.scrollTop - m22;
            }
            if (u37) {
                let m23 = c28.scrollLeft;
                c28.scrollLeft += u37, u37 = c28.scrollLeft - m23;
            }
            t197 = {
                left: t197.left - u37,
                top: t197.top - g16,
                right: t197.right - u37,
                bottom: t197.bottom - g16
            };
        }
        if (d28) break;
        c28 = c28.assignedSlot || c28.parentNode, i123 = s71 = "nearest";
    } else if (c28.nodeType == 11) c28 = c28.host;
    else break;
}
var je = class {
    constructor(){
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
    }
    eq(t198) {
        return this.anchorNode == t198.anchorNode && this.anchorOffset == t198.anchorOffset && this.focusNode == t198.focusNode && this.focusOffset == t198.focusOffset;
    }
    setRange(t199) {
        this.set(t199.anchorNode, t199.anchorOffset, t199.focusNode, t199.focusOffset);
    }
    set(t200, e213, i124, s72) {
        this.anchorNode = t200, this.anchorOffset = e213, this.focusNode = i124, this.focusOffset = s72;
    }
}, dt = null;
function Ge(n13) {
    if (n13.setActive) return n13.setActive();
    if (dt) return n13.focus(dt);
    let t201 = [];
    for(let e214 = n13; e214 && (t201.push(e214, e214.scrollTop, e214.scrollLeft), e214 != e214.ownerDocument); e214 = e214.parentNode);
    if (n13.focus(dt == null ? {
        get preventScroll () {
            return dt = {
                preventScroll: !0
            }, !0;
        }
    } : void 0), !dt) {
        dt = !1;
        for(let e215 = 0; e215 < t201.length;){
            let i125 = t201[e215++], s73 = t201[e215++], r63 = t201[e215++];
            i125.scrollTop != s73 && (i125.scrollTop = s73), i125.scrollLeft != r63 && (i125.scrollLeft = r63);
        }
    }
}
var Ye;
function wt(n14, t202, e216 = t202) {
    let i126 = Ye || (Ye = document.createRange());
    return i126.setEnd(n14, e216), i126.setStart(n14, t202), i126;
}
function St(n15, t203, e217) {
    let i127 = {
        key: t203,
        code: t203,
        keyCode: e217,
        which: e217,
        cancelable: !0
    }, s74 = new KeyboardEvent("keydown", i127);
    s74.synthetic = !0, n15.dispatchEvent(s74);
    let r64 = new KeyboardEvent("keyup", i127);
    return r64.synthetic = !0, n15.dispatchEvent(r64), s74.defaultPrevented || r64.defaultPrevented;
}
function Ks(n16) {
    for(; n16;){
        if (n16 && (n16.nodeType == 9 || n16.nodeType == 11 && n16.host)) return n16;
        n16 = n16.assignedSlot || n16.parentNode;
    }
    return null;
}
function $e(n17) {
    for(; n17.attributes.length;)n17.removeAttributeNode(n17.attributes[0]);
}
var L2 = class {
    constructor(t204, e218, i128 = !0){
        this.node = t204, this.offset = e218, this.precise = i128;
    }
    static before(t205, e219) {
        return new L2(t205.parentNode, _t(t205), e219);
    }
    static after(t206, e220) {
        return new L2(t206.parentNode, _t(t206) + 1, e220);
    }
}, Jt = [], M2 = class {
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
    posBefore(t207) {
        let e221 = this.posAtStart;
        for (let i129 of this.children){
            if (i129 == t207) return e221;
            e221 += i129.length + i129.breakAfter;
        }
        throw new RangeError("Invalid child in posBefore");
    }
    posAfter(t208) {
        return this.posBefore(t208) + t208.length;
    }
    coordsAt(t, e) {
        return null;
    }
    sync(t209) {
        if (this.dirty & 2) {
            let e222 = this.dom, i130 = e222.firstChild;
            for (let s75 of this.children){
                if (s75.dirty) {
                    if (!s75.dom && i130) {
                        let r65 = M2.get(i130);
                        (!r65 || !r65.parent && r65.constructor == s75.constructor) && s75.reuseDOM(i130);
                    }
                    s75.sync(t209), s75.dirty = 0;
                }
                if (t209 && !t209.written && t209.node == e222 && i130 != s75.dom && (t209.written = !0), s75.dom.parentNode == e222) {
                    for(; i130 && i130 != s75.dom;)i130 = Ue(i130);
                    i130 = s75.dom.nextSibling;
                } else e222.insertBefore(s75.dom, i130);
            }
            for(i130 && t209 && t209.node == e222 && (t209.written = !0); i130;)i130 = Ue(i130);
        } else if (this.dirty & 1) for (let e223 of this.children)e223.dirty && (e223.sync(t209), e223.dirty = 0);
    }
    reuseDOM(t) {}
    localPosFromDOM(t210, e224) {
        let i131;
        if (t210 == this.dom) i131 = this.dom.childNodes[e224];
        else {
            let s76 = Vt(t210) == 0 ? 0 : e224 == 0 ? -1 : 1;
            for(;;){
                let r66 = t210.parentNode;
                if (r66 == this.dom) break;
                s76 == 0 && r66.firstChild != r66.lastChild && (t210 == r66.firstChild ? s76 = -1 : s76 = 1), t210 = r66;
            }
            s76 < 0 ? i131 = t210 : i131 = t210.nextSibling;
        }
        if (i131 == this.dom.firstChild) return 0;
        for(; i131 && !M2.get(i131);)i131 = i131.nextSibling;
        if (!i131) return this.length;
        for(let s77 = 0, r67 = 0;; s77++){
            let o41 = this.children[s77];
            if (o41.dom == i131) return r67;
            r67 += o41.length + o41.breakAfter;
        }
    }
    domBoundsAround(t211, e225, i132 = 0) {
        let s78 = -1, r68 = -1, o42 = -1, l64 = -1;
        for(let h41 = 0, a31 = i132, c29 = i132; h41 < this.children.length; h41++){
            let f27 = this.children[h41], d29 = a31 + f27.length;
            if (a31 < t211 && d29 > e225) return f27.domBoundsAround(t211, e225, a31);
            if (d29 >= t211 && s78 == -1 && (s78 = h41, r68 = a31), a31 > e225 && f27.dom.parentNode == this.dom) {
                o42 = h41, l64 = c29;
                break;
            }
            c29 = d29, a31 = d29 + f27.breakAfter;
        }
        return {
            from: r68,
            to: l64 < 0 ? i132 + this.length : l64,
            startDOM: (s78 ? this.children[s78 - 1].dom.nextSibling : null) || this.dom.firstChild,
            endDOM: o42 < this.children.length && o42 >= 0 ? this.children[o42].dom : null
        };
    }
    markDirty(t212 = !1) {
        this.dirty |= 2, this.markParentsDirty(t212);
    }
    markParentsDirty(t213) {
        for(let e226 = this.parent; e226; e226 = e226.parent){
            if (t213 && (e226.dirty |= 2), e226.dirty & 1) return;
            e226.dirty |= 1, t213 = !1;
        }
    }
    setParent(t214) {
        this.parent != t214 && (this.parent = t214, this.dirty && this.markParentsDirty(!0));
    }
    setDOM(t215) {
        this.dom && (this.dom.cmView = null), this.dom = t215, t215.cmView = this;
    }
    get rootView() {
        for(let t216 = this;;){
            let e227 = t216.parent;
            if (!e227) return t216;
            t216 = e227;
        }
    }
    replaceChildren(t217, e228, i133 = Jt) {
        this.markDirty();
        for(let s79 = t217; s79 < e228; s79++){
            let r69 = this.children[s79];
            r69.parent == this && r69.destroy();
        }
        this.children.splice(t217, e228 - t217, ...i133);
        for(let s110 = 0; s110 < i133.length; s110++)i133[s110].setParent(this);
    }
    ignoreMutation(t) {
        return !1;
    }
    ignoreEvent(t) {
        return !1;
    }
    childCursor(t218 = this.length) {
        return new Zt(this.children, t218, this.children.length);
    }
    childPos(t219, e229 = 1) {
        return this.childCursor().findPos(t219, e229);
    }
    toString() {
        let t220 = this.constructor.name.replace("View", "");
        return t220 + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (t220 == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
    }
    static get(t221) {
        return t221.cmView;
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
M2.prototype.breakAfter = 0;
function Ue(n18) {
    let t222 = n18.nextSibling;
    return n18.parentNode.removeChild(n18), t222;
}
var Zt = class {
    constructor(t223, e230, i134){
        this.children = t223, this.pos = e230, this.i = i134, this.off = 0;
    }
    findPos(t224, e231 = 1) {
        for(;;){
            if (t224 > this.pos || t224 == this.pos && (e231 > 0 || this.i == 0 || this.children[this.i - 1].breakAfter)) return this.off = t224 - this.pos, this;
            let i135 = this.children[--this.i];
            this.pos -= i135.length + i135.breakAfter;
        }
    }
};
function Xe(n19, t225, e232, i136, s80, r70, o43, l65, h42) {
    let { children: a32  } = n19, c30 = a32.length ? a32[t225] : null, f28 = r70.length ? r70[r70.length - 1] : null, d30 = f28 ? f28.breakAfter : o43;
    if (!(t225 == i136 && c30 && !o43 && !d30 && r70.length < 2 && c30.merge(e232, s80, r70.length ? f28 : null, e232 == 0, l65, h42))) {
        if (i136 < a32.length) {
            let u38 = a32[i136];
            u38 && s80 < u38.length ? (t225 == i136 && (u38 = u38.split(s80), s80 = 0), !d30 && f28 && u38.merge(0, s80, f28, !0, 0, h42) ? r70[r70.length - 1] = u38 : (s80 && u38.merge(0, s80, null, !1, 0, h42), r70.push(u38))) : (u38 == null ? void 0 : u38.breakAfter) && (f28 ? f28.breakAfter = 1 : o43 = 1), i136++;
        }
        for(c30 && (c30.breakAfter = o43, e232 > 0 && (!o43 && r70.length && c30.merge(e232, c30.length, r70[0], !1, l65, 0) ? c30.breakAfter = r70.shift().breakAfter : (e232 < c30.length || c30.children.length && c30.children[c30.children.length - 1].length == 0) && c30.merge(e232, c30.length, null, !1, l65, 0), t225++)); t225 < i136 && r70.length;)if (a32[i136 - 1].become(r70[r70.length - 1])) i136--, r70.pop(), h42 = r70.length ? 0 : l65;
        else if (a32[t225].become(r70[0])) t225++, r70.shift(), l65 = r70.length ? 0 : h42;
        else break;
        !r70.length && t225 && i136 < a32.length && !a32[t225 - 1].breakAfter && a32[i136].merge(0, 0, a32[t225 - 1], !1, l65, h42) && t225--, (t225 < i136 || r70.length) && n19.replaceChildren(t225, i136, r70);
    }
}
function _e(n20, t226, e233, i137, s81, r71) {
    let o44 = n20.childCursor(), { i: l66 , off: h43  } = o44.findPos(e233, 1), { i: a33 , off: c31  } = o44.findPos(t226, -1), f29 = t226 - e233;
    for (let d31 of i137)f29 += d31.length;
    n20.length += f29, Xe(n20, a33, c31, l66, h43, i137, 0, s81, r71);
}
var [F2, Qt] = typeof navigator != "undefined" ? [
    navigator,
    document
] : [
    {
        userAgent: "",
        vendor: "",
        platform: ""
    },
    {
        documentElement: {
            style: {}
        }
    }
], te1 = /Edge\/(\d+)/.exec(F2.userAgent), Je = /MSIE \d/.test(F2.userAgent), ee1 = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(F2.userAgent), Ft = !!(Je || ee1 || te1), Ze = !Ft && /gecko\/(\d+)/i.test(F2.userAgent), ie1 = !Ft && /Chrome\/(\d+)/.exec(F2.userAgent), Qe = "webkitFontSmoothing" in Qt.documentElement.style, ti = !Ft && /Apple Computer/.test(F2.vendor), ei = ti && (/Mobile\/\w+/.test(F2.userAgent) || F2.maxTouchPoints > 2), p3 = {
    mac: ei || /Mac/.test(F2.platform),
    windows: /Win/.test(F2.platform),
    linux: /Linux|X11/.test(F2.platform),
    ie: Ft,
    ie_version: Je ? Qt.documentMode || 6 : ee1 ? +ee1[1] : te1 ? +te1[1] : 0,
    gecko: Ze,
    gecko_version: Ze ? +(/Firefox\/(\d+)/.exec(F2.userAgent) || [
        0,
        0
    ])[1] : 0,
    chrome: !!ie1,
    chrome_version: ie1 ? +ie1[1] : 0,
    ios: ei,
    android: /Android\b/.test(F2.userAgent),
    webkit: Qe,
    safari: ti,
    webkit_version: Qe ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [
        0,
        0
    ])[1] : 0,
    tabSize: Qt.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
}, js = 256, J2 = class extends M2 {
    constructor(t227){
        super();
        this.text = t227;
    }
    get length() {
        return this.text.length;
    }
    createDOM(t228) {
        this.setDOM(t228 || document.createTextNode(this.text));
    }
    sync(t229) {
        this.dom || this.createDOM(), this.dom.nodeValue != this.text && (t229 && t229.node == this.dom && (t229.written = !0), this.dom.nodeValue = this.text);
    }
    reuseDOM(t230) {
        t230.nodeType == 3 && this.createDOM(t230);
    }
    merge(t231, e234, i138) {
        return i138 && (!(i138 instanceof J2) || this.length - (e234 - t231) + i138.length > js) ? !1 : (this.text = this.text.slice(0, t231) + (i138 ? i138.text : "") + this.text.slice(e234), this.markDirty(), !0);
    }
    split(t232) {
        let e235 = new J2(this.text.slice(t232));
        return this.text = this.text.slice(0, t232), this.markDirty(), e235;
    }
    localPosFromDOM(t233, e236) {
        return t233 == this.dom ? e236 : e236 ? this.text.length : 0;
    }
    domAtPos(t234) {
        return new L2(this.dom, t234);
    }
    domBoundsAround(t, e, i139) {
        return {
            from: i139,
            to: i139 + this.length,
            startDOM: this.dom,
            endDOM: this.dom.nextSibling
        };
    }
    coordsAt(t235, e237) {
        return ii(this.dom, t235, e237);
    }
}, Z = class extends M2 {
    constructor(t236, e238 = [], i140 = 0){
        super();
        this.mark = t236, this.children = e238, this.length = i140;
        for (let s82 of e238)s82.setParent(this);
    }
    setAttrs(t237) {
        if ($e(t237), this.mark.class && (t237.className = this.mark.class), this.mark.attrs) for(let e239 in this.mark.attrs)t237.setAttribute(e239, this.mark.attrs[e239]);
        return t237;
    }
    reuseDOM(t238) {
        t238.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(t238), this.dirty |= 4 | 2);
    }
    sync(t239) {
        this.dom ? this.dirty & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(t239);
    }
    merge(t240, e240, i141, s, r72, o45) {
        return i141 && (!(i141 instanceof Z && i141.mark.eq(this.mark)) || t240 && r72 <= 0 || e240 < this.length && o45 <= 0) ? !1 : (_e(this, t240, e240, i141 ? i141.children : [], r72 - 1, o45 - 1), this.markDirty(), !0);
    }
    split(t241) {
        let e241 = [], i142 = 0, s83 = -1, r73 = 0;
        for (let l67 of this.children){
            let h44 = i142 + l67.length;
            h44 > t241 && e241.push(i142 < t241 ? l67.split(t241 - i142) : l67), s83 < 0 && i142 >= t241 && (s83 = r73), i142 = h44, r73++;
        }
        let o46 = this.length - t241;
        return this.length = t241, s83 > -1 && (this.children.length = s83, this.markDirty()), new Z(this.mark, e241, o46);
    }
    domAtPos(t242) {
        return ni(this.dom, this.children, t242);
    }
    coordsAt(t243, e242) {
        return oi(this, t243, e242);
    }
};
function ii(n21, t244, e243) {
    let i143 = n21.nodeValue.length;
    t244 > i143 && (t244 = i143);
    let s84 = t244, r74 = t244, o47 = 0;
    t244 == 0 && e243 < 0 || t244 == i143 && e243 >= 0 ? p3.chrome || p3.gecko || (t244 ? (s84--, o47 = 1) : (r74++, o47 = -1)) : e243 < 0 ? s84-- : r74++;
    let l68 = wt(n21, s84, r74).getClientRects();
    if (!l68.length) return Ke;
    let h45 = l68[(o47 ? o47 < 0 : e243 >= 0) ? 0 : l68.length - 1];
    return p3.safari && !o47 && h45.width == 0 && (h45 = Array.prototype.find.call(l68, (a34)=>a34.width
    ) || h45), o47 ? Wt(h45, o47 < 0) : h45 || null;
}
var j2 = class extends M2 {
    constructor(t245, e244, i144){
        super();
        this.widget = t245, this.length = e244, this.side = i144;
    }
    static create(t246, e245, i145) {
        return new (t246.customView || j2)(t246, e245, i145);
    }
    split(t247) {
        let e246 = j2.create(this.widget, this.length - t247, this.side);
        return this.length -= t247, e246;
    }
    sync() {
        (!this.dom || !this.widget.updateDOM(this.dom)) && (this.setDOM(this.widget.toDOM(this.editorView)), this.dom.contentEditable = "false");
    }
    getSide() {
        return this.side;
    }
    merge(t248, e247, i146, s, r75, o48) {
        return i146 && (!(i146 instanceof j2) || !this.widget.compare(i146.widget) || t248 > 0 && r75 <= 0 || e247 < this.length && o48 <= 0) ? !1 : (this.length = t248 + (i146 ? i146.length : 0) + (this.length - e247), !0);
    }
    become(t249) {
        return t249.length == this.length && t249 instanceof j2 && t249.side == this.side && this.widget.constructor == t249.widget.constructor ? (this.widget.eq(t249.widget) || this.markDirty(!0), this.widget = t249.widget, !0) : !1;
    }
    ignoreMutation() {
        return !0;
    }
    ignoreEvent(t250) {
        return this.widget.ignoreEvent(t250);
    }
    get overrideDOMText() {
        if (this.length == 0) return d.empty;
        let t251 = this;
        for(; t251.parent;)t251 = t251.parent;
        let e248 = t251.editorView, i147 = e248 && e248.state.doc, s85 = this.posAtStart;
        return i147 ? i147.slice(s85, s85 + this.length) : d.empty;
    }
    domAtPos(t252) {
        return t252 == 0 ? L2.before(this.dom) : L2.after(this.dom, t252 == this.length);
    }
    domBoundsAround() {
        return null;
    }
    coordsAt(t253, e249) {
        let i148 = this.dom.getClientRects(), s86 = null;
        if (!i148.length) return Ke;
        for(let r76 = t253 > 0 ? i148.length - 1 : 0; s86 = i148[r76], !(t253 > 0 ? r76 == 0 : r76 == i148.length - 1 || s86.top < s86.bottom); r76 += t253 > 0 ? -1 : 1);
        return t253 == 0 && e249 > 0 || t253 == this.length && e249 <= 0 ? s86 : Wt(s86, t253 == 0);
    }
    get isEditable() {
        return !1;
    }
    destroy() {
        super.destroy(), this.dom && this.widget.destroy(this.dom);
    }
}, si = class extends j2 {
    domAtPos(t254) {
        return new L2(this.widget.text, t254);
    }
    sync() {
        this.setDOM(this.widget.toDOM());
    }
    localPosFromDOM(t255, e250) {
        return e250 ? t255.nodeType == 3 ? Math.min(e250, this.length) : this.length : 0;
    }
    ignoreMutation() {
        return !1;
    }
    get overrideDOMText() {
        return null;
    }
    coordsAt(t256, e251) {
        return ii(this.widget.text, t256, e251);
    }
    get isEditable() {
        return !0;
    }
}, se1 = p3.android ? "\u200B\u200B" : "\u200B", rt = class extends M2 {
    constructor(t257){
        super();
        this.side = t257;
    }
    get length() {
        return 0;
    }
    merge() {
        return !1;
    }
    become(t258) {
        return t258 instanceof rt && t258.side == this.side;
    }
    split() {
        return new rt(this.side);
    }
    sync() {
        this.dom ? this.dirty && this.dom.nodeValue != se1 && (this.dom.nodeValue = se1) : this.setDOM(document.createTextNode(se1));
    }
    getSide() {
        return this.side;
    }
    domAtPos(t) {
        return L2.before(this.dom);
    }
    localPosFromDOM() {
        return 0;
    }
    domBoundsAround() {
        return null;
    }
    coordsAt(t) {
        let e252 = ut(this.dom);
        return e252[e252.length - 1] || null;
    }
    get overrideDOMText() {
        return d.of([
            this.dom.nodeValue.replace(/\u200b/g, "")
        ]);
    }
};
J2.prototype.children = j2.prototype.children = rt.prototype.children = Jt;
function ni(n22, t259, e253) {
    let i149 = 0;
    for(let s87 = 0; i149 < t259.length; i149++){
        let r77 = t259[i149], o49 = s87 + r77.length;
        if (!(o49 == s87 && r77.getSide() <= 0)) {
            if (e253 > s87 && e253 < o49 && r77.dom.parentNode == n22) return r77.domAtPos(e253 - s87);
            if (e253 <= s87) break;
            s87 = o49;
        }
    }
    for(; i149 > 0; i149--){
        let s88 = t259[i149 - 1].dom;
        if (s88.parentNode == n22) return L2.after(s88);
    }
    return new L2(n22, 0);
}
function ri(n23, t260, e254) {
    let i150, { children: s89  } = n23;
    e254 > 0 && t260 instanceof Z && s89.length && (i150 = s89[s89.length - 1]) instanceof Z && i150.mark.eq(t260.mark) ? ri(i150, t260.children[0], e254 - 1) : (s89.push(t260), t260.setParent(n23)), n23.length += t260.length;
}
function oi(n24, t261, e255) {
    for(let r78 = 0, o50 = 0; o50 < n24.children.length; o50++){
        let l69 = n24.children[o50], h46 = r78 + l69.length, a35;
        if ((e255 <= 0 || h46 == n24.length || l69.getSide() > 0 ? h46 >= t261 : h46 > t261) && (t261 < h46 || o50 + 1 == n24.children.length || (a35 = n24.children[o50 + 1]).length || a35.getSide() > 0)) {
            let c32 = 0;
            if (h46 == r78) {
                if (l69.getSide() <= 0) continue;
                c32 = e255 = -l69.getSide();
            }
            let f30 = l69.coordsAt(t261 - r78, e255);
            return c32 && f30 ? Wt(f30, e255 < 0) : f30;
        }
        r78 = h46;
    }
    let i151 = n24.dom.lastChild;
    if (!i151) return n24.dom.getBoundingClientRect();
    let s90 = ut(i151);
    return s90[s90.length - 1] || null;
}
function ne1(n25, t262) {
    for(let e256 in n25)e256 == "class" && t262.class ? t262.class += " " + n25.class : e256 == "style" && t262.style ? t262.style += ";" + n25.style : t262[e256] = n25[e256];
    return t262;
}
function re1(n26, t263) {
    if (n26 == t263) return !0;
    if (!n26 || !t263) return !1;
    let e257 = Object.keys(n26), i152 = Object.keys(t263);
    if (e257.length != i152.length) return !1;
    for (let s91 of e257)if (i152.indexOf(s91) == -1 || n26[s91] !== t263[s91]) return !1;
    return !0;
}
function oe1(n27, t264, e258) {
    if (t264) for(let i153 in t264)e258 && i153 in e258 || n27.removeAttribute(i153);
    if (e258) for(let i1 in e258)t264 && t264[i1] == e258[i1] || n27.setAttribute(i1, e258[i1]);
}
var Q1 = class {
    eq(t) {
        return !1;
    }
    updateDOM(t) {
        return !1;
    }
    compare(t265) {
        return this == t265 || this.constructor == t265.constructor && this.eq(t265);
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
}, A3 = function(n28) {
    return n28[n28.Text = 0] = "Text", n28[n28.WidgetBefore = 1] = "WidgetBefore", n28[n28.WidgetAfter = 2] = "WidgetAfter", n28[n28.WidgetRange = 3] = "WidgetRange", n28;
}(A3 || (A3 = {})), w4 = class extends v1 {
    constructor(t266, e259, i154, s92){
        super();
        this.startSide = t266, this.endSide = e259, this.widget = i154, this.spec = s92;
    }
    get heightRelevant() {
        return !1;
    }
    static mark(t267) {
        return new xt(t267);
    }
    static widget(t268) {
        let e260 = t268.side || 0, i155 = !!t268.block;
        return e260 += i155 ? e260 > 0 ? 300000000 : -400000000 : e260 > 0 ? 100000000 : -100000000, new tt(t268, e260, e260, i155, t268.widget || null, !1);
    }
    static replace(t269) {
        let e261 = !!t269.block, { start: i156 , end: s93  } = li(t269, e261), r79 = e261 ? i156 ? -300000000 : -1 : 400000000, o51 = e261 ? s93 ? 200000000 : 1 : -500000000;
        return new tt(t269, r79, o51, e261, t269.widget || null, !0);
    }
    static line(t270) {
        return new gt(t270);
    }
    static set(t271, e262 = !1) {
        return f.of(t271, e262);
    }
    hasHeight() {
        return this.widget ? this.widget.estimatedHeight > -1 : !1;
    }
};
w4.none = f.empty;
var xt = class extends w4 {
    constructor(t272){
        let { start: e263 , end: i157  } = li(t272);
        super(e263 ? -1 : 400000000, i157 ? 1 : -500000000, null, t272);
        this.tagName = t272.tagName || "span", this.class = t272.class || "", this.attrs = t272.attributes || null;
    }
    eq(t273) {
        return this == t273 || t273 instanceof xt && this.tagName == t273.tagName && this.class == t273.class && re1(this.attrs, t273.attrs);
    }
    range(t274, e264 = t274) {
        if (t274 >= e264) throw new RangeError("Mark decorations may not be empty");
        return super.range(t274, e264);
    }
};
xt.prototype.point = !1;
var gt = class extends w4 {
    constructor(t275){
        super(-200000000, -200000000, null, t275);
    }
    eq(t276) {
        return t276 instanceof gt && re1(this.spec.attributes, t276.spec.attributes);
    }
    range(t277, e265 = t277) {
        if (e265 != t277) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(t277, e265);
    }
};
gt.prototype.mapMode = D1.TrackBefore;
gt.prototype.point = !0;
var tt = class extends w4 {
    constructor(t278, e266, i158, s94, r80, o52){
        super(e266, i158, r80, t278);
        this.block = s94, this.isReplace = o52, this.mapMode = s94 ? e266 <= 0 ? D1.TrackBefore : D1.TrackAfter : D1.TrackDel;
    }
    get type() {
        return this.startSide < this.endSide ? A3.WidgetRange : this.startSide <= 0 ? A3.WidgetBefore : A3.WidgetAfter;
    }
    get heightRelevant() {
        return this.block || !!this.widget && this.widget.estimatedHeight >= 5;
    }
    eq(t279) {
        return t279 instanceof tt && Gs(this.widget, t279.widget) && this.block == t279.block && this.startSide == t279.startSide && this.endSide == t279.endSide;
    }
    range(t280, e267 = t280) {
        if (this.isReplace && (t280 > e267 || t280 == e267 && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && e267 != t280) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(t280, e267);
    }
};
tt.prototype.point = !0;
function li(n29, t281 = !1) {
    let { inclusiveStart: e268 , inclusiveEnd: i159  } = n29;
    return e268 == null && (e268 = n29.inclusive), i159 == null && (i159 = n29.inclusive), {
        start: e268 ?? t281,
        end: i159 ?? t281
    };
}
function Gs(n30, t282) {
    return n30 == t282 || !!(n30 && t282 && n30.compare(t282));
}
function le1(n31, t283, e269, i160 = 0) {
    let s95 = e269.length - 1;
    s95 >= 0 && e269[s95] + i160 > n31 ? e269[s95] = Math.max(e269[s95], t283) : e269.push(n31, t283);
}
var E2 = class extends M2 {
    constructor(){
        super(...arguments);
        this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
    }
    merge(t284, e270, i161, s96, r81, o53) {
        if (i161) {
            if (!(i161 instanceof E2)) return !1;
            this.dom || i161.transferDOM(this);
        }
        return s96 && this.setDeco(i161 ? i161.attrs : null), _e(this, t284, e270, i161 ? i161.children : [], r81, o53), !0;
    }
    split(t285) {
        let e271 = new E2;
        if (e271.breakAfter = this.breakAfter, this.length == 0) return e271;
        let { i: i162 , off: s97  } = this.childPos(t285);
        s97 && (e271.append(this.children[i162].split(s97), 0), this.children[i162].merge(s97, this.children[i162].length, null, !1, 0, 0), i162++);
        for(let r82 = i162; r82 < this.children.length; r82++)e271.append(this.children[r82], 0);
        for(; i162 > 0 && this.children[i162 - 1].length == 0;)this.children[--i162].destroy();
        return this.children.length = i162, this.markDirty(), this.length = t285, e271;
    }
    transferDOM(t286) {
        !this.dom || (t286.setDOM(this.dom), t286.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
    }
    setDeco(t287) {
        re1(this.attrs, t287) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t287);
    }
    append(t288, e272) {
        ri(this, t288, e272);
    }
    addLineDeco(t289) {
        let e273 = t289.spec.attributes, i163 = t289.spec.class;
        e273 && (this.attrs = ne1(e273, this.attrs || {})), i163 && (this.attrs = ne1({
            class: i163
        }, this.attrs || {}));
    }
    domAtPos(t290) {
        return ni(this.dom, this.children, t290);
    }
    reuseDOM(t291) {
        t291.nodeName == "DIV" && (this.setDOM(t291), this.dirty |= 4 | 2);
    }
    sync(t292) {
        var e274;
        this.dom ? this.dirty & 4 && ($e(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (oe1(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t292);
        let i164 = this.dom.lastChild;
        for(; i164 && M2.get(i164) instanceof Z;)i164 = i164.lastChild;
        if (!i164 || i164.nodeName != "BR" && ((e274 = M2.get(i164)) === null || e274 === void 0 ? void 0 : e274.isEditable) == !1 && (!p3.ios || !this.children.some((s98)=>s98 instanceof J2
        ))) {
            let s99 = document.createElement("BR");
            s99.cmIgnore = !0, this.dom.appendChild(s99);
        }
    }
    measureTextSize() {
        if (this.children.length == 0 || this.length > 20) return null;
        let t293 = 0;
        for (let e275 of this.children){
            if (!(e275 instanceof J2)) return null;
            let i165 = ut(e275.dom);
            if (i165.length != 1) return null;
            t293 += i165[0].width;
        }
        return {
            lineHeight: this.dom.getBoundingClientRect().height,
            charWidth: t293 / this.length
        };
    }
    coordsAt(t294, e276) {
        return oi(this, t294, e276);
    }
    become(t) {
        return !1;
    }
    get type() {
        return A3.Text;
    }
    static find(t295, e277) {
        for(let i166 = 0, s100 = 0; i166 < t295.children.length; i166++){
            let r83 = t295.children[i166], o54 = s100 + r83.length;
            if (o54 >= e277) {
                if (r83 instanceof E2) return r83;
                if (o54 > e277) break;
            }
            s100 = o54 + r83.breakAfter;
        }
        return null;
    }
}, et = class extends M2 {
    constructor(t296, e278, i167){
        super();
        this.widget = t296, this.length = e278, this.type = i167, this.breakAfter = 0;
    }
    merge(t297, e279, i168, s, r84, o55) {
        return i168 && (!(i168 instanceof et) || !this.widget.compare(i168.widget) || t297 > 0 && r84 <= 0 || e279 < this.length && o55 <= 0) ? !1 : (this.length = t297 + (i168 ? i168.length : 0) + (this.length - e279), !0);
    }
    domAtPos(t298) {
        return t298 == 0 ? L2.before(this.dom) : L2.after(this.dom, t298 == this.length);
    }
    split(t299) {
        let e280 = this.length - t299;
        this.length = t299;
        let i169 = new et(this.widget, e280, this.type);
        return i169.breakAfter = this.breakAfter, i169;
    }
    get children() {
        return Jt;
    }
    sync() {
        (!this.dom || !this.widget.updateDOM(this.dom)) && (this.setDOM(this.widget.toDOM(this.editorView)), this.dom.contentEditable = "false");
    }
    get overrideDOMText() {
        return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : d.empty;
    }
    domBoundsAround() {
        return null;
    }
    become(t300) {
        return t300 instanceof et && t300.type == this.type && t300.widget.constructor == this.widget.constructor ? (t300.widget.eq(this.widget) || this.markDirty(!0), this.widget = t300.widget, this.length = t300.length, this.breakAfter = t300.breakAfter, !0) : !1;
    }
    ignoreMutation() {
        return !0;
    }
    ignoreEvent(t301) {
        return this.widget.ignoreEvent(t301);
    }
    destroy() {
        super.destroy(), this.dom && this.widget.destroy(this.dom);
    }
}, zt = class {
    constructor(t302, e281, i170, s101){
        this.doc = t302, this.pos = e281, this.end = i170, this.disallowBlockEffectsBelow = s101, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t302.iter(), this.skip = e281;
    }
    posCovered() {
        if (this.content.length == 0) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
        let t303 = this.content[this.content.length - 1];
        return !t303.breakAfter && !(t303 instanceof et && t303.type == A3.WidgetBefore);
    }
    getLine() {
        return this.curLine || (this.content.push(this.curLine = new E2), this.atCursorPos = !0), this.curLine;
    }
    flushBuffer(t304) {
        this.pendingBuffer && (this.curLine.append(It(new rt(-1), t304), t304.length), this.pendingBuffer = 0);
    }
    addBlockWidget(t305) {
        this.flushBuffer([]), this.curLine = null, this.content.push(t305);
    }
    finish(t306) {
        t306 ? this.pendingBuffer = 0 : this.flushBuffer([]), this.posCovered() || this.getLine();
    }
    buildText(t307, e282, i171) {
        for(; t307 > 0;){
            if (this.textOff == this.text.length) {
                let { value: r85 , lineBreak: o56 , done: l70  } = this.cursor.next(this.skip);
                if (this.skip = 0, l70) throw new Error("Ran out of text content when drawing inline views");
                if (o56) {
                    this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer([]), this.curLine = null, t307--;
                    continue;
                } else this.text = r85, this.textOff = 0;
            }
            let s102 = Math.min(this.text.length - this.textOff, t307, 512);
            this.flushBuffer(e282), this.getLine().append(It(new J2(this.text.slice(this.textOff, this.textOff + s102)), e282), i171), this.atCursorPos = !0, this.textOff += s102, t307 -= s102, i171 = 0;
        }
    }
    span(t308, e283, i172, s103) {
        this.buildText(e283 - t308, i172, s103), this.pos = e283, this.openStart < 0 && (this.openStart = s103);
    }
    point(t309, e284, i173, s104, r86) {
        let o57 = e284 - t309;
        if (i173 instanceof tt) if (i173.block) {
            let { type: l71  } = i173;
            l71 == A3.WidgetAfter && !this.posCovered() && this.getLine(), this.addBlockWidget(new et(i173.widget || new he1("div"), o57, l71));
        } else {
            let l72 = j2.create(i173.widget || new he1("span"), o57, i173.startSide), h47 = this.atCursorPos && !l72.isEditable && r86 <= s104.length && (t309 < e284 || i173.startSide > 0), a36 = !l72.isEditable && (t309 < e284 || i173.startSide <= 0), c33 = this.getLine();
            this.pendingBuffer == 2 && !h47 && (this.pendingBuffer = 0), this.flushBuffer(s104), h47 && (c33.append(It(new rt(1), s104), r86), r86 = s104.length + Math.max(0, r86 - s104.length)), c33.append(It(l72, s104), r86), this.atCursorPos = a36, this.pendingBuffer = a36 ? t309 < e284 ? 1 : 2 : 0;
        }
        else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i173);
        o57 && (this.textOff + o57 <= this.text.length ? this.textOff += o57 : (this.skip += o57 - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e284), this.openStart < 0 && (this.openStart = r86);
    }
    filterPoint(t, e285, i174, s105) {
        if (s105 >= this.disallowBlockEffectsBelow || !(i174 instanceof tt)) return !0;
        if (i174.block) throw new RangeError("Block decorations may not be specified via plugins");
        return e285 <= this.doc.lineAt(this.pos).to;
    }
    static build(t310, e286, i175, s106, r87) {
        let o58 = new zt(t310, e286, i175, r87);
        return o58.openEnd = f.spans(s106, e286, i175, o58), o58.openStart < 0 && (o58.openStart = o58.openEnd), o58.finish(o58.openEnd), o58;
    }
};
function It(n32, t311) {
    for (let e287 of t311)n32 = new Z(e287, [
        n32
    ], n32.length);
    return n32;
}
var he1 = class extends Q1 {
    constructor(t312){
        super();
        this.tag = t312;
    }
    eq(t313) {
        return t313.tag == this.tag;
    }
    toDOM() {
        return document.createElement(this.tag);
    }
    updateDOM(t314) {
        return t314.nodeName.toLowerCase() == this.tag;
    }
}, Ys = [], hi = O1.define(), ai = O1.define(), ci = O1.define(), fi = O1.define(), ae1 = O1.define(), ui = O1.define(), ce1 = v.define({
    map: (n33, t315)=>n33.map(t315)
}), di = v.define({
    map: (n34, t316)=>n34.map(t316)
}), ot = class {
    constructor(t317, e288 = "nearest", i176 = "nearest", s107 = 5, r88 = 5){
        this.range = t317, this.y = e288, this.x = i176, this.yMargin = s107, this.xMargin = r88;
    }
    map(t318) {
        return t318.empty ? this : new ot(this.range.map(t318), this.y, this.x, this.yMargin, this.xMargin);
    }
}, gi = v.define({
    map: (n35, t319)=>n35.map(t319)
});
function lt(n36, t320, e289) {
    let i177 = n36.facet(fi);
    i177.length ? i177[0](t320) : window.onerror ? window.onerror(String(t320), e289, void 0, void 0, t320) : e289 ? console.error(e289 + ":", t320) : console.error(t320);
}
var At = O1.define({
    combine: (n37)=>n37.length ? n37[0] : !0
}), pi = class {
    constructor(t321, e290){
        this.field = t321, this.get = e290;
    }
}, V1 = class {
    from(t322) {
        return new pi(this, t322);
    }
    static define() {
        return new V1;
    }
};
V1.decorations = V1.define();
V1.atomicRanges = V1.define();
V1.scrollMargins = V1.define();
var $s = 0, vt = O1.define(), z2 = class {
    constructor(t323, e291, i178){
        this.id = t323, this.create = e291, this.fields = i178, this.extension = vt.of(this);
    }
    static define(t324, e292) {
        let { eventHandlers: i179 , provide: s108 , decorations: r89  } = e292 || {}, o59 = [];
        if (s108) for (let l1 of Array.isArray(s108) ? s108 : [
            s108
        ])o59.push(l1);
        return i179 && o59.push(mi.from((l73)=>({
                plugin: l73,
                handlers: i179
            })
        )), r89 && o59.push(V1.decorations.from(r89)), new z2($s++, t324, o59);
    }
    static fromClass(t325, e293) {
        return z2.define((i180)=>new t325(i180)
        , e293);
    }
}, mi = V1.define(), qt = class {
    constructor(t326){
        this.spec = t326, this.mustUpdate = null, this.value = null;
    }
    takeField(t327, e294) {
        if (this.spec) for (let { field: i181 , get: s109  } of this.spec.fields)i181 == t327 && e294.push(s109(this.value));
    }
    update(t328) {
        if (this.value) {
            if (this.mustUpdate) {
                let e295 = this.mustUpdate;
                if (this.mustUpdate = null, this.value.update) try {
                    this.value.update(e295);
                } catch (i182) {
                    if (lt(e295.state, i182, "CodeMirror plugin crashed"), this.value.destroy) try {
                        this.value.destroy();
                    } catch  {}
                    this.deactivate();
                }
            }
        } else if (this.spec) try {
            this.value = this.spec.create(t328);
        } catch (e296) {
            lt(t328.state, e296, "CodeMirror plugin crashed"), this.deactivate();
        }
        return this;
    }
    destroy(t329) {
        var e297;
        if ((e297 = this.value) === null || e297 === void 0 ? void 0 : e297.destroy) try {
            this.value.destroy();
        } catch (i183) {
            lt(t329.state, i183, "CodeMirror plugin crashed");
        }
    }
    deactivate() {
        this.spec = this.value = null;
    }
}, bi = O1.define(), fe1 = O1.define(), ht = O1.define(), Mt = O1.define(), I2 = class {
    constructor(t330, e298, i184, s111){
        this.fromA = t330, this.toA = e298, this.fromB = i184, this.toB = s111;
    }
    join(t331) {
        return new I2(Math.min(this.fromA, t331.fromA), Math.max(this.toA, t331.toA), Math.min(this.fromB, t331.fromB), Math.max(this.toB, t331.toB));
    }
    addToSet(t332) {
        let e299 = t332.length, i185 = this;
        for(; e299 > 0; e299--){
            let s112 = t332[e299 - 1];
            if (!(s112.fromA > i185.toA)) {
                if (s112.toA < i185.fromA) break;
                i185 = i185.join(s112), t332.splice(e299 - 1, 1);
            }
        }
        return t332.splice(e299, 0, i185), t332;
    }
    static extendWithRanges(t333, e300) {
        if (e300.length == 0) return t333;
        let i186 = [];
        for(let s113 = 0, r90 = 0, o60 = 0, l74 = 0;; s113++){
            let h48 = s113 == t333.length ? null : t333[s113], a37 = o60 - l74, c34 = h48 ? h48.fromB : 1000000000;
            for(; r90 < e300.length && e300[r90] < c34;){
                let f31 = e300[r90], d32 = e300[r90 + 1], u39 = Math.max(l74, f31), g17 = Math.min(c34, d32);
                if (u39 <= g17 && new I2(u39 + a37, g17 + a37, u39, g17).addToSet(i186), d32 > c34) break;
                r90 += 2;
            }
            if (!h48) return i186;
            new I2(h48.fromA, h48.toA, h48.fromB, h48.toB).addToSet(i186), o60 = h48.toA, l74 = h48.toB;
        }
    }
}, ue1 = class {
    constructor(t334, e301, i187 = Ys){
        this.view = t334, this.state = e301, this.transactions = i187, this.flags = 0, this.startState = t334.state, this.changes = y1.empty(this.startState.doc.length);
        for (let o1 of i187)this.changes = this.changes.compose(o1.changes);
        let s114 = [];
        this.changes.iterChangedRanges((o61, l75, h49, a38)=>s114.push(new I2(o61, l75, h49, a38))
        ), this.changedRanges = s114;
        let r91 = t334.hasFocus;
        r91 != t334.inputState.notifiedFocused && (t334.inputState.notifiedFocused = r91, this.flags |= 1);
    }
    get viewportChanged() {
        return (this.flags & 4) > 0;
    }
    get heightChanged() {
        return (this.flags & 2) > 0;
    }
    get geometryChanged() {
        return this.docChanged || (this.flags & (8 | 2)) > 0;
    }
    get focusChanged() {
        return (this.flags & 1) > 0;
    }
    get docChanged() {
        return !this.changes.empty;
    }
    get selectionSet() {
        return this.transactions.some((t335)=>t335.selection
        );
    }
    get empty() {
        return this.flags == 0 && this.transactions.length == 0;
    }
}, P3 = function(n38) {
    return n38[n38.LTR = 0] = "LTR", n38[n38.RTL = 1] = "RTL", n38;
}(P3 || (P3 = {})), de1 = P3.LTR, Us = P3.RTL;
function yi(n39) {
    let t336 = [];
    for(let e302 = 0; e302 < n39.length; e302++)t336.push(1 << +n39[e302]);
    return t336;
}
var Xs = yi("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), _s = yi("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), ge1 = Object.create(null), q2 = [];
for (let n1 of [
    "()",
    "[]",
    "{}"
]){
    let t = n1.charCodeAt(0), e = n1.charCodeAt(1);
    ge1[t] = e, ge1[e] = -t;
}
function Js(n40) {
    return n40 <= 247 ? Xs[n40] : 1424 <= n40 && n40 <= 1524 ? 2 : 1536 <= n40 && n40 <= 1785 ? _s[n40 - 1536] : 1774 <= n40 && n40 <= 2220 ? 4 : 8192 <= n40 && n40 <= 8203 || n40 == 8204 ? 256 : 1;
}
var Zs = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, at = class {
    constructor(t337, e303, i188){
        this.from = t337, this.to = e303, this.level = i188;
    }
    get dir() {
        return this.level % 2 ? Us : de1;
    }
    side(t338, e304) {
        return this.dir == e304 == t338 ? this.to : this.from;
    }
    static find(t339, e305, i189, s115) {
        let r92 = -1;
        for(let o62 = 0; o62 < t339.length; o62++){
            let l76 = t339[o62];
            if (l76.from <= e305 && l76.to >= e305) {
                if (l76.level == i189) return o62;
                (r92 < 0 || (s115 != 0 ? s115 < 0 ? l76.from < e305 : l76.to > e305 : t339[r92].level > l76.level)) && (r92 = o62);
            }
        }
        if (r92 < 0) throw new RangeError("Index out of range");
        return r92;
    }
}, C2 = [];
function wi(n41, t340) {
    let e306 = n41.length, i190 = t340 == de1 ? 1 : 2, s116 = t340 == de1 ? 2 : 1;
    if (!n41 || i190 == 1 && !Zs.test(n41)) return Si(e306);
    for(let o63 = 0, l77 = i190, h50 = i190; o63 < e306; o63++){
        let a39 = Js(n41.charCodeAt(o63));
        a39 == 512 ? a39 = l77 : a39 == 8 && h50 == 4 && (a39 = 16), C2[o63] = a39 == 4 ? 2 : a39, a39 & 7 && (h50 = a39), l77 = a39;
    }
    for(let o2 = 0, l2 = i190, h1 = i190; o2 < e306; o2++){
        let a40 = C2[o2];
        if (a40 == 128) o2 < e306 - 1 && l2 == C2[o2 + 1] && l2 & 24 ? a40 = C2[o2] = l2 : C2[o2] = 256;
        else if (a40 == 64) {
            let c35 = o2 + 1;
            for(; c35 < e306 && C2[c35] == 64;)c35++;
            let f32 = o2 && l2 == 8 || c35 < e306 && C2[c35] == 8 ? h1 == 1 ? 1 : 8 : 256;
            for(let d33 = o2; d33 < c35; d33++)C2[d33] = f32;
            o2 = c35 - 1;
        } else a40 == 8 && h1 == 1 && (C2[o2] = 1);
        l2 = a40, a40 & 7 && (h1 = a40);
    }
    for(let o3 = 0, l3 = 0, h2 = 0, a41, c36, f33; o3 < e306; o3++)if (c36 = ge1[a41 = n41.charCodeAt(o3)]) if (c36 < 0) {
        for(let d34 = l3 - 3; d34 >= 0; d34 -= 3)if (q2[d34 + 1] == -c36) {
            let u40 = q2[d34 + 2], g18 = u40 & 2 ? i190 : u40 & 4 ? u40 & 1 ? s116 : i190 : 0;
            g18 && (C2[o3] = C2[q2[d34]] = g18), l3 = d34;
            break;
        }
    } else {
        if (q2.length == 189) break;
        q2[l3++] = o3, q2[l3++] = a41, q2[l3++] = h2;
    }
    else if ((f33 = C2[o3]) == 2 || f33 == 1) {
        let d35 = f33 == i190;
        h2 = d35 ? 0 : 1;
        for(let u41 = l3 - 3; u41 >= 0; u41 -= 3){
            let g19 = q2[u41 + 2];
            if (g19 & 2) break;
            if (d35) q2[u41 + 2] |= 2;
            else {
                if (g19 & 4) break;
                q2[u41 + 2] |= 4;
            }
        }
    }
    for(let o4 = 0; o4 < e306; o4++)if (C2[o4] == 256) {
        let l78 = o4 + 1;
        for(; l78 < e306 && C2[l78] == 256;)l78++;
        let h51 = (o4 ? C2[o4 - 1] : i190) == 1, a42 = (l78 < e306 ? C2[l78] : i190) == 1, c37 = h51 == a42 ? h51 ? 1 : 2 : i190;
        for(let f34 = o4; f34 < l78; f34++)C2[f34] = c37;
        o4 = l78 - 1;
    }
    let r93 = [];
    if (i190 == 1) for(let o5 = 0; o5 < e306;){
        let l79 = o5, h52 = C2[o5++] != 1;
        for(; o5 < e306 && h52 == (C2[o5] != 1);)o5++;
        if (h52) for(let a43 = o5; a43 > l79;){
            let c38 = a43, f35 = C2[--a43] != 2;
            for(; a43 > l79 && f35 == (C2[a43 - 1] != 2);)a43--;
            r93.push(new at(a43, c38, f35 ? 2 : 1));
        }
        else r93.push(new at(l79, o5, 0));
    }
    else for(let o6 = 0; o6 < e306;){
        let l80 = o6, h53 = C2[o6++] == 2;
        for(; o6 < e306 && h53 == (C2[o6] == 2);)o6++;
        r93.push(new at(l80, o6, h53 ? 1 : 2));
    }
    return r93;
}
function Si(n42) {
    return [
        new at(0, n42, 0)
    ];
}
var xi = "";
function Ai(n43, t341, e307, i191, s117) {
    var r94;
    let o64 = i191.head - n43.from, l81 = -1;
    if (o64 == 0) {
        if (!s117 || !n43.length) return null;
        t341[0].level != e307 && (o64 = t341[0].side(!1, e307), l81 = 0);
    } else if (o64 == n43.length) {
        if (s117) return null;
        let d36 = t341[t341.length - 1];
        d36.level != e307 && (o64 = d36.side(!0, e307), l81 = t341.length - 1);
    }
    l81 < 0 && (l81 = at.find(t341, o64, (r94 = i191.bidiLevel) !== null && r94 !== void 0 ? r94 : -1, i191.assoc));
    let h54 = t341[l81];
    o64 == h54.side(s117, e307) && (h54 = t341[l81 += s117 ? 1 : -1], o64 = h54.side(!s117, e307));
    let a44 = s117 == (h54.dir == e307), c39 = A(n43.text, o64, a44);
    if (xi = n43.text.slice(Math.min(o64, c39), Math.max(o64, c39)), c39 != h54.side(s117, e307)) return p.cursor(c39 + n43.from, a44 ? -1 : 1, h54.level);
    let f36 = l81 == (s117 ? t341.length - 1 : 0) ? null : t341[l81 + (s117 ? 1 : -1)];
    return !f36 && h54.level != e307 ? p.cursor(s117 ? n43.to : n43.from, s117 ? -1 : 1, e307) : f36 && f36.level < h54.level ? p.cursor(f36.side(!s117, e307) + n43.from, s117 ? 1 : -1, f36.level) : p.cursor(c39 + n43.from, s117 ? -1 : 1, h54.level);
}
var pe1 = class {
    constructor(t342, e308){
        this.points = t342, this.view = e308, this.text = "", this.lineBreak = e308.state.lineBreak;
    }
    readRange(t343, e309) {
        if (!t343) return this;
        let i192 = t343.parentNode;
        for(let s118 = t343;;){
            this.findPointBefore(i192, s118), this.readNode(s118);
            let r95 = s118.nextSibling;
            if (r95 == e309) break;
            let o65 = M2.get(s118), l82 = M2.get(r95);
            (o65 && l82 ? o65.breakAfter : (o65 ? o65.breakAfter : vi(s118)) || vi(r95) && (s118.nodeName != "BR" || s118.cmIgnore)) && (this.text += this.lineBreak), s118 = r95;
        }
        return this.findPointBefore(i192, e309), this;
    }
    readNode(t344) {
        if (t344.cmIgnore) return;
        let e310 = M2.get(t344), i193 = e310 && e310.overrideDOMText, s119;
        i193 != null ? s119 = i193.sliceString(0, void 0, this.lineBreak) : t344.nodeType == 3 ? s119 = t344.nodeValue : t344.nodeName == "BR" ? s119 = t344.nextSibling ? this.lineBreak : "" : t344.nodeType == 1 && this.readRange(t344.firstChild, null), s119 != null && (this.findPointIn(t344, s119.length), this.text += s119, p3.chrome && this.view.inputState.lastKeyCode == 13 && !t344.nextSibling && /\n\n$/.test(this.text) && (this.text = this.text.slice(0, -1)));
    }
    findPointBefore(t345, e311) {
        for (let i194 of this.points)i194.node == t345 && t345.childNodes[i194.offset] == e311 && (i194.pos = this.text.length);
    }
    findPointIn(t346, e312) {
        for (let i195 of this.points)i195.node == t346 && (i195.pos = this.text.length + Math.min(i195.offset, e312));
    }
};
function vi(n44) {
    return n44.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n44.nodeName);
}
var me1 = class {
    constructor(t347, e313){
        this.node = t347, this.offset = e313, this.pos = -1;
    }
}, be1 = class extends M2 {
    constructor(t348){
        super();
        this.view = t348, this.compositionDeco = w4.none, this.decorations = [], this.pluginDecorationLength = 0, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(t348.contentDOM), this.children = [
            new E2
        ], this.children[0].setParent(this), this.updateDeco(), this.updateInner([
            new I2(0, 0, 0, t348.state.doc.length)
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
    update(t349) {
        let e314 = t349.changedRanges;
        this.minWidth > 0 && e314.length && (e314.every(({ fromA: o66 , toA: l83  })=>l83 < this.minWidthFrom || o66 > this.minWidthTo
        ) ? (this.minWidthFrom = t349.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t349.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.view.inputState.composing < 0 ? this.compositionDeco = w4.none : (t349.transactions.length || this.dirty) && (this.compositionDeco = tn(this.view, t349.changes)), (p3.ie || p3.chrome) && !this.compositionDeco.size && t349 && t349.state.doc.lines != t349.startState.doc.lines && (this.forceSelection = !0);
        let i196 = this.decorations, s120 = this.updateDeco(), r96 = sn(i196, s120, t349.changes);
        return e314 = I2.extendWithRanges(e314, r96), this.dirty == 0 && e314.length == 0 ? !1 : (this.updateInner(e314, t349.startState.doc.length), t349.transactions.length && (this.lastUpdate = Date.now()), !0);
    }
    updateInner(t350, e315) {
        this.view.viewState.mustMeasureContent = !0, this.updateChildren(t350, e315);
        let { observer: i197  } = this.view;
        i197.ignore(()=>{
            this.dom.style.height = this.view.viewState.contentHeight + "px", this.dom.style.minWidth = this.minWidth ? this.minWidth + "px" : "";
            let r97 = p3.chrome || p3.ios ? {
                node: i197.selectionRange.focusNode,
                written: !1
            } : void 0;
            this.sync(r97), this.dirty = 0, r97 && (r97.written || i197.selectionRange.focusNode != r97.node) && (this.forceSelection = !0), this.dom.style.height = "";
        });
        let s121 = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let r1 of this.children)r1 instanceof et && r1.widget instanceof ye1 && s121.push(r1.dom);
        i197.updateGaps(s121);
    }
    updateChildren(t351, e316) {
        let i198 = this.childCursor(e316);
        for(let s122 = t351.length - 1;; s122--){
            let r98 = s122 >= 0 ? t351[s122] : null;
            if (!r98) break;
            let { fromA: o67 , toA: l84 , fromB: h55 , toB: a45  } = r98, { content: c40 , breakAtStart: f37 , openStart: d37 , openEnd: u42  } = zt.build(this.view.state.doc, h55, a45, this.decorations, this.pluginDecorationLength), { i: g20 , off: m24  } = i198.findPos(l84, 1), { i: b17 , off: y16  } = i198.findPos(o67, -1);
            Xe(this, b17, y16, g20, m24, c40, f37, d37, u42);
        }
    }
    updateSelection(t352 = !1, e317 = !1) {
        if (t352 && this.view.observer.readSelectionRange(), !(e317 || this.mayControlSelection()) || p3.ios && this.view.inputState.rapidCompositionStart) return;
        let i199 = this.forceSelection;
        this.forceSelection = !1;
        let s123 = this.view.state.selection.main, r99 = this.domAtPos(s123.anchor), o68 = s123.empty ? r99 : this.domAtPos(s123.head);
        if (p3.gecko && s123.empty && Qs(r99)) {
            let h56 = document.createTextNode("");
            this.view.observer.ignore(()=>r99.node.insertBefore(h56, r99.node.childNodes[r99.offset] || null)
            ), r99 = o68 = new L2(h56, 0), i199 = !0;
        }
        let l85 = this.view.observer.selectionRange;
        (i199 || !l85.focusNode || !Nt(r99.node, r99.offset, l85.anchorNode, l85.anchorOffset) || !Nt(o68.node, o68.offset, l85.focusNode, l85.focusOffset)) && (this.view.observer.ignore(()=>{
            p3.android && p3.chrome && this.dom.contains(l85.focusNode) && nn(l85.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({
                preventScroll: !0
            }));
            let h57 = Ht(this.root);
            if (s123.empty) {
                if (p3.gecko) {
                    let a46 = en(r99.node, r99.offset);
                    if (a46 && a46 != (1 | 2)) {
                        let c41 = Ci(r99.node, r99.offset, a46 == 1 ? 1 : -1);
                        c41 && (r99 = new L2(c41, a46 == 1 ? 0 : c41.nodeValue.length));
                    }
                }
                h57.collapse(r99.node, r99.offset), s123.bidiLevel != null && l85.cursorBidiLevel != null && (l85.cursorBidiLevel = s123.bidiLevel);
            } else if (h57.extend) h57.collapse(r99.node, r99.offset), h57.extend(o68.node, o68.offset);
            else {
                let a47 = document.createRange();
                s123.anchor > s123.head && ([r99, o68] = [
                    o68,
                    r99
                ]), a47.setEnd(o68.node, o68.offset), a47.setStart(r99.node, r99.offset), h57.removeAllRanges(), h57.addRange(a47);
            }
        }), this.view.observer.setSelectionRange(r99, o68)), this.impreciseAnchor = r99.precise ? null : new L2(l85.anchorNode, l85.anchorOffset), this.impreciseHead = o68.precise ? null : new L2(l85.focusNode, l85.focusOffset);
    }
    enforceCursorAssoc() {
        if (this.compositionDeco.size) return;
        let t353 = this.view.state.selection.main, e318 = Ht(this.root);
        if (!t353.empty || !t353.assoc || !e318.modify) return;
        let i200 = E2.find(this, t353.head);
        if (!i200) return;
        let s124 = i200.posAtStart;
        if (t353.head == s124 || t353.head == s124 + i200.length) return;
        let r100 = this.coordsAt(t353.head, -1), o69 = this.coordsAt(t353.head, 1);
        if (!r100 || !o69 || r100.bottom > o69.top) return;
        let l86 = this.domAtPos(t353.head + t353.assoc);
        e318.collapse(l86.node, l86.offset), e318.modify("move", t353.assoc < 0 ? "forward" : "backward", "lineboundary");
    }
    mayControlSelection() {
        return this.view.state.facet(At) ? this.root.activeElement == this.dom : Xt(this.dom, this.view.observer.selectionRange);
    }
    nearest(t354) {
        for(let e319 = t354; e319;){
            let i201 = M2.get(e319);
            if (i201 && i201.rootView == this) return i201;
            e319 = e319.parentNode;
        }
        return null;
    }
    posFromDOM(t355, e320) {
        let i202 = this.nearest(t355);
        if (!i202) throw new RangeError("Trying to find position for a DOM position outside of the document");
        return i202.localPosFromDOM(t355, e320) + i202.posAtStart;
    }
    domAtPos(t356) {
        let { i: e321 , off: i203  } = this.childCursor().findPos(t356, -1);
        for(; e321 < this.children.length - 1;){
            let s125 = this.children[e321];
            if (i203 < s125.length || s125 instanceof E2) break;
            e321++, i203 = 0;
        }
        return this.children[e321].domAtPos(i203);
    }
    coordsAt(t357, e322) {
        for(let i204 = this.length, s126 = this.children.length - 1;; s126--){
            let r101 = this.children[s126], o70 = i204 - r101.breakAfter - r101.length;
            if (t357 > o70 || t357 == o70 && r101.type != A3.WidgetBefore && r101.type != A3.WidgetAfter && (!s126 || e322 == 2 || this.children[s126 - 1].breakAfter || this.children[s126 - 1].type == A3.WidgetBefore && e322 > -2)) return r101.coordsAt(t357 - o70, e322);
            i204 = o70;
        }
    }
    measureVisibleLineHeights() {
        let t358 = [], { from: e323 , to: i205  } = this.view.viewState.viewport, s127 = this.view.contentDOM.clientWidth, r102 = s127 > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, o71 = -1;
        for(let l87 = 0, h58 = 0; h58 < this.children.length; h58++){
            let a48 = this.children[h58], c42 = l87 + a48.length;
            if (c42 > i205) break;
            if (l87 >= e323) {
                let f38 = a48.dom.getBoundingClientRect();
                if (t358.push(f38.height), r102) {
                    let d38 = a48.dom.lastChild, u43 = d38 ? ut(d38) : [];
                    if (u43.length) {
                        let g21 = u43[u43.length - 1], m25 = this.view.textDirection == P3.LTR ? g21.right - f38.left : f38.right - g21.left;
                        m25 > o71 && (o71 = m25, this.minWidth = s127, this.minWidthFrom = l87, this.minWidthTo = c42);
                    }
                }
            }
            l87 = c42 + a48.breakAfter;
        }
        return t358;
    }
    measureTextSize() {
        for (let s2 of this.children)if (s2 instanceof E2) {
            let r103 = s2.measureTextSize();
            if (r103) return r103;
        }
        let t359 = document.createElement("div"), e324, i206;
        return t359.className = "cm-line", t359.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(()=>{
            this.dom.appendChild(t359);
            let s128 = ut(t359.firstChild)[0];
            e324 = t359.getBoundingClientRect().height, i206 = s128 ? s128.width / 27 : 7, t359.remove();
        }), {
            lineHeight: e324,
            charWidth: i206
        };
    }
    childCursor(t360 = this.length) {
        let e325 = this.children.length;
        return e325 && (t360 -= this.children[--e325].length), new Zt(this.children, t360, e325);
    }
    computeBlockGapDeco() {
        let t361 = [], e326 = this.view.viewState;
        for(let i207 = 0, s129 = 0;; s129++){
            let r104 = s129 == e326.viewports.length ? null : e326.viewports[s129], o72 = r104 ? r104.from - 1 : this.length;
            if (o72 > i207) {
                let l88 = e326.lineBlockAt(o72).bottom - e326.lineBlockAt(i207).top;
                t361.push(w4.replace({
                    widget: new ye1(l88),
                    block: !0,
                    inclusive: !0
                }).range(i207, o72));
            }
            if (!r104) break;
            i207 = r104.to + 1;
        }
        return w4.set(t361);
    }
    updateDeco() {
        let t362 = this.view.pluginField(V1.decorations);
        return this.pluginDecorationLength = t362.length, this.decorations = [
            ...t362,
            ...this.view.state.facet(ht),
            this.compositionDeco,
            this.computeBlockGapDeco(),
            this.view.viewState.lineGapDeco
        ];
    }
    scrollIntoView(t363) {
        let { range: e327  } = t363, i208 = this.coordsAt(e327.head, e327.empty ? e327.assoc : e327.head > e327.anchor ? -1 : 1), s130;
        if (!i208) return;
        !e327.empty && (s130 = this.coordsAt(e327.anchor, e327.anchor > e327.head ? -1 : 1)) && (i208 = {
            left: Math.min(i208.left, s130.left),
            top: Math.min(i208.top, s130.top),
            right: Math.max(i208.right, s130.right),
            bottom: Math.max(i208.bottom, s130.bottom)
        });
        let r105 = 0, o73 = 0, l89 = 0, h59 = 0;
        for (let c43 of this.view.pluginField(V1.scrollMargins))if (c43) {
            let { left: f39 , right: d39 , top: u44 , bottom: g22  } = c43;
            f39 != null && (r105 = Math.max(r105, f39)), d39 != null && (o73 = Math.max(o73, d39)), u44 != null && (l89 = Math.max(l89, u44)), g22 != null && (h59 = Math.max(h59, g22));
        }
        let a49 = {
            left: i208.left - r105,
            top: i208.top - l89,
            right: i208.right + o73,
            bottom: i208.bottom + h59
        };
        qs(this.view.scrollDOM, a49, e327.head < e327.anchor ? -1 : 1, t363.x, t363.y, t363.xMargin, t363.yMargin, this.view.textDirection == P3.LTR);
    }
};
function Qs(n45) {
    return n45.node.nodeType == 1 && n45.node.firstChild && (n45.offset == 0 || n45.node.childNodes[n45.offset - 1].contentEditable == "false") && (n45.offset == n45.node.childNodes.length || n45.node.childNodes[n45.offset].contentEditable == "false");
}
var ye1 = class extends Q1 {
    constructor(t364){
        super();
        this.height = t364;
    }
    toDOM() {
        let t365 = document.createElement("div");
        return this.updateDOM(t365), t365;
    }
    eq(t366) {
        return t366.height == this.height;
    }
    updateDOM(t367) {
        return t367.style.height = this.height + "px", !0;
    }
    get estimatedHeight() {
        return this.height;
    }
};
function tn(n46, t368) {
    let e328 = n46.observer.selectionRange, i209 = e328.focusNode && Ci(e328.focusNode, e328.focusOffset, 0);
    if (!i209) return w4.none;
    let s131 = n46.docView.nearest(i209);
    if (!s131) return w4.none;
    let r106, o74, l90 = i209;
    if (s131 instanceof E2) {
        for(; l90.parentNode != s131.dom;)l90 = l90.parentNode;
        let d40 = l90.previousSibling;
        for(; d40 && !M2.get(d40);)d40 = d40.previousSibling;
        r106 = o74 = d40 ? M2.get(d40).posAtEnd : s131.posAtStart;
    } else {
        for(;;){
            let { parent: d41  } = s131;
            if (!d41) return w4.none;
            if (d41 instanceof E2) break;
            s131 = d41;
        }
        r106 = s131.posAtStart, o74 = r106 + s131.length, l90 = s131.dom;
    }
    let h60 = t368.mapPos(r106, 1), a50 = Math.max(h60, t368.mapPos(o74, -1)), { state: c44  } = n46, f40 = l90.nodeType == 3 ? l90.nodeValue : new pe1([], n46).readRange(l90.firstChild, null).text;
    if (a50 - h60 < f40.length) if (c44.sliceDoc(h60, Math.min(c44.doc.length, h60 + f40.length)) == f40) a50 = h60 + f40.length;
    else if (c44.sliceDoc(Math.max(0, a50 - f40.length), a50) == f40) h60 = a50 - f40.length;
    else return w4.none;
    else if (c44.sliceDoc(h60, a50) != f40) return w4.none;
    return w4.set(w4.replace({
        widget: new Mi(l90, i209)
    }).range(h60, a50));
}
var Mi = class extends Q1 {
    constructor(t369, e329){
        super();
        this.top = t369, this.text = e329;
    }
    eq(t370) {
        return this.top == t370.top && this.text == t370.text;
    }
    toDOM() {
        return this.top;
    }
    ignoreEvent() {
        return !1;
    }
    get customView() {
        return si;
    }
};
function Ci(n47, t371, e330) {
    for(;;){
        if (n47.nodeType == 3) return n47;
        if (n47.nodeType == 1 && t371 > 0 && e330 <= 0) n47 = n47.childNodes[t371 - 1], t371 = Vt(n47);
        else if (n47.nodeType == 1 && t371 < n47.childNodes.length && e330 >= 0) n47 = n47.childNodes[t371], t371 = 0;
        else return null;
    }
}
function en(n48, t372) {
    return n48.nodeType != 1 ? 0 : (t372 && n48.childNodes[t372 - 1].contentEditable == "false" ? 1 : 0) | (t372 < n48.childNodes.length && n48.childNodes[t372].contentEditable == "false" ? 2 : 0);
}
var Di = class {
    constructor(){
        this.changes = [];
    }
    compareRange(t373, e331) {
        le1(t373, e331, this.changes);
    }
    comparePoint(t374, e332) {
        le1(t374, e332, this.changes);
    }
};
function sn(n49, t375, e333) {
    let i210 = new Di;
    return f.compare(n49, t375, e333, i210), i210.changes;
}
function nn(n50, t376) {
    for(let e334 = n50; e334 && e334 != t376; e334 = e334.assignedSlot || e334.parentNode)if (e334.nodeType == 1 && e334.contentEditable == "false") return !0;
    return !1;
}
function rn(n51, t377, e335 = 1) {
    let i211 = n51.charCategorizer(t377), s132 = n51.doc.lineAt(t377), r107 = t377 - s132.from;
    if (s132.length == 0) return p.cursor(t377);
    r107 == 0 ? e335 = 1 : r107 == s132.length && (e335 = -1);
    let o75 = r107, l91 = r107;
    e335 < 0 ? o75 = A(s132.text, r107, !1) : l91 = A(s132.text, r107);
    let h61 = i211(s132.text.slice(o75, l91));
    for(; o75 > 0;){
        let a51 = A(s132.text, o75, !1);
        if (i211(s132.text.slice(a51, o75)) != h61) break;
        o75 = a51;
    }
    for(; l91 < s132.length;){
        let a52 = A(s132.text, l91);
        if (i211(s132.text.slice(l91, a52)) != h61) break;
        l91 = a52;
    }
    return p.range(o75 + s132.from, l91 + s132.from);
}
function on(n52, t378) {
    return t378.left > n52 ? t378.left - n52 : Math.max(0, n52 - t378.right);
}
function ln(n53, t379) {
    return t379.top > n53 ? t379.top - n53 : Math.max(0, n53 - t379.bottom);
}
function we1(n54, t380) {
    return n54.top < t380.bottom - 1 && n54.bottom > t380.top + 1;
}
function ki(n55, t381) {
    return t381 < n55.top ? {
        top: t381,
        left: n55.left,
        right: n55.right,
        bottom: n55.bottom
    } : n55;
}
function Oi(n56, t382) {
    return t382 > n56.bottom ? {
        top: n56.top,
        left: n56.left,
        right: n56.right,
        bottom: t382
    } : n56;
}
function Se1(n57, t383, e336) {
    let i212, s133, r108, o76, l92, h62, a53, c45;
    for(let u45 = n57.firstChild; u45; u45 = u45.nextSibling){
        let g23 = ut(u45);
        for(let m26 = 0; m26 < g23.length; m26++){
            let b18 = g23[m26];
            s133 && we1(s133, b18) && (b18 = ki(Oi(b18, s133.bottom), s133.top));
            let y17 = on(t383, b18), N12 = ln(e336, b18);
            if (y17 == 0 && N12 == 0) return u45.nodeType == 3 ? Ti(u45, t383, e336) : Se1(u45, t383, e336);
            (!i212 || o76 > N12 || o76 == N12 && r108 > y17) && (i212 = u45, s133 = b18, r108 = y17, o76 = N12), y17 == 0 ? e336 > b18.bottom && (!a53 || a53.bottom < b18.bottom) ? (l92 = u45, a53 = b18) : e336 < b18.top && (!c45 || c45.top > b18.top) && (h62 = u45, c45 = b18) : a53 && we1(a53, b18) ? a53 = Oi(a53, b18.bottom) : c45 && we1(c45, b18) && (c45 = ki(c45, b18.top));
        }
    }
    if (a53 && a53.bottom >= e336 ? (i212 = l92, s133 = a53) : c45 && c45.top <= e336 && (i212 = h62, s133 = c45), !i212) return {
        node: n57,
        offset: 0
    };
    let f41 = Math.max(s133.left, Math.min(s133.right, t383));
    if (i212.nodeType == 3) return Ti(i212, f41, e336);
    if (!r108 && i212.contentEditable == "true") return Se1(i212, f41, e336);
    let d42 = Array.prototype.indexOf.call(n57.childNodes, i212) + (t383 >= (s133.left + s133.right) / 2 ? 1 : 0);
    return {
        node: n57,
        offset: d42
    };
}
function Ti(n58, t384, e337) {
    let i213 = n58.nodeValue.length, s134 = -1, r109 = 1000000000, o77 = 0;
    for(let l93 = 0; l93 < i213; l93++){
        let h63 = wt(n58, l93, l93 + 1).getClientRects();
        for(let a54 = 0; a54 < h63.length; a54++){
            let c46 = h63[a54];
            if (c46.top == c46.bottom) continue;
            o77 || (o77 = t384 - c46.left);
            let f42 = (c46.top > e337 ? c46.top - e337 : e337 - c46.bottom) - 1;
            if (c46.left - 1 <= t384 && c46.right + 1 >= t384 && f42 < r109) {
                let d43 = t384 >= (c46.left + c46.right) / 2, u46 = d43;
                if ((p3.chrome || p3.gecko) && wt(n58, l93).getBoundingClientRect().left == c46.right && (u46 = !d43), f42 <= 0) return {
                    node: n58,
                    offset: l93 + (u46 ? 1 : 0)
                };
                s134 = l93 + (u46 ? 1 : 0), r109 = f42;
            }
        }
    }
    return {
        node: n58,
        offset: s134 > -1 ? s134 : o77 > 0 ? n58.nodeValue.length : 0
    };
}
function Ri(n59, { x: t385 , y: e338  }, i214, s135 = -1) {
    var r110;
    let o78 = n59.contentDOM.getBoundingClientRect(), l94 = o78.top + n59.viewState.paddingTop, h64, { docHeight: a55  } = n59.viewState, c47 = e338 - l94;
    if (c47 < 0) return 0;
    if (c47 > a55) return n59.state.doc.length;
    for(let y18 = n59.defaultLineHeight / 2, N13 = !1; h64 = n59.elementAtHeight(c47), h64.type != A3.Text;)for(; c47 = s135 > 0 ? h64.bottom + y18 : h64.top - y18, !(c47 >= 0 && c47 <= a55);){
        if (N13) return i214 ? null : 0;
        N13 = !0, s135 = -s135;
    }
    e338 = l94 + c47;
    let f43 = h64.from;
    if (f43 < n59.viewport.from) return n59.viewport.from == 0 ? 0 : i214 ? null : Li(n59, o78, h64, t385, e338);
    if (f43 > n59.viewport.to) return n59.viewport.to == n59.state.doc.length ? n59.state.doc.length : i214 ? null : Li(n59, o78, h64, t385, e338);
    let d44 = n59.dom.ownerDocument, u47 = n59.root.elementFromPoint ? n59.root : d44, g24 = u47.elementFromPoint(t385, e338);
    g24 && !n59.contentDOM.contains(g24) && (g24 = null), g24 || (t385 = Math.max(o78.left + 1, Math.min(o78.right - 1, t385)), g24 = u47.elementFromPoint(t385, e338), g24 && !n59.contentDOM.contains(g24) && (g24 = null));
    let m27, b19 = -1;
    if (g24 && ((r110 = n59.docView.nearest(g24)) === null || r110 === void 0 ? void 0 : r110.isEditable) != !1) {
        if (d44.caretPositionFromPoint) {
            let y19 = d44.caretPositionFromPoint(t385, e338);
            y19 && ({ offsetNode: m27 , offset: b19  } = y19);
        } else if (d44.caretRangeFromPoint) {
            let y20 = d44.caretRangeFromPoint(t385, e338);
            y20 && ({ startContainer: m27 , startOffset: b19  } = y20, p3.safari && hn(m27, b19, t385) && (m27 = void 0));
        }
    }
    if (!m27 || !n59.docView.dom.contains(m27)) {
        let y21 = E2.find(n59.docView, f43);
        if (!y21) return c47 > h64.top + h64.height / 2 ? h64.to : h64.from;
        ({ node: m27 , offset: b19  } = Se1(y21.dom, t385, e338));
    }
    return n59.docView.posFromDOM(m27, b19);
}
function Li(n60, t386, e339, i215, s136) {
    let r111 = Math.round((i215 - t386.left) * n60.defaultCharacterWidth);
    n60.lineWrapping && e339.height > n60.defaultLineHeight * 1.5 && (r111 += Math.floor((s136 - e339.top) / n60.defaultLineHeight) * n60.viewState.heightOracle.lineLength);
    let o79 = n60.state.sliceDoc(e339.from, e339.to);
    return e339.from + O(o79, r111, n60.state.tabSize);
}
function hn(n61, t387, e340) {
    let i216;
    if (n61.nodeType != 3 || t387 != (i216 = n61.nodeValue.length)) return !1;
    for(let s137 = n61.nextSibling; s137; s137 = s137.nextSibling)if (s137.nodeType != 1 || s137.nodeName != "BR") return !1;
    return wt(n61, i216 - 1, i216).getBoundingClientRect().left > e340;
}
function an(n62, t388, e341, i217) {
    let s138 = n62.state.doc.lineAt(t388.head), r112 = !i217 || !n62.lineWrapping ? null : n62.coordsAtPos(t388.assoc < 0 && t388.head > s138.from ? t388.head - 1 : t388.head);
    if (r112) {
        let h65 = n62.dom.getBoundingClientRect(), a56 = n62.posAtCoords({
            x: e341 == (n62.textDirection == P3.LTR) ? h65.right - 1 : h65.left + 1,
            y: (r112.top + r112.bottom) / 2
        });
        if (a56 != null) return p.cursor(a56, e341 ? -1 : 1);
    }
    let o80 = E2.find(n62.docView, t388.head), l95 = o80 ? e341 ? o80.posAtEnd : o80.posAtStart : e341 ? s138.to : s138.from;
    return p.cursor(l95, e341 ? -1 : 1);
}
function Bi(n63, t389, e342, i218) {
    let s139 = n63.state.doc.lineAt(t389.head), r113 = n63.bidiSpans(s139);
    for(let o81 = t389, l96 = null;;){
        let h66 = Ai(s139, r113, n63.textDirection, o81, e342), a57 = xi;
        if (!h66) {
            if (s139.number == (e342 ? n63.state.doc.lines : 1)) return o81;
            a57 = `
`, s139 = n63.state.doc.line(s139.number + (e342 ? 1 : -1)), r113 = n63.bidiSpans(s139), h66 = p.cursor(e342 ? s139.from : s139.to);
        }
        if (l96) {
            if (!l96(a57)) return o81;
        } else {
            if (!i218) return h66;
            l96 = i218(a57);
        }
        o81 = h66;
    }
}
function cn(n64, t390, e343) {
    let i219 = n64.state.charCategorizer(t390), s140 = i219(e343);
    return (r114)=>{
        let o82 = i219(r114);
        return s140 == T.Space && (s140 = o82), s140 == o82;
    };
}
function fn(n65, t391, e344, i220) {
    let s141 = t391.head, r115 = e344 ? 1 : -1;
    if (s141 == (e344 ? n65.state.doc.length : 0)) return p.cursor(s141);
    let o83 = t391.goalColumn, l97, h67 = n65.contentDOM.getBoundingClientRect(), a58 = n65.coordsAtPos(s141), c48 = n65.documentTop;
    if (a58) o83 == null && (o83 = a58.left - h67.left), l97 = r115 < 0 ? a58.top : a58.bottom;
    else {
        let u48 = n65.viewState.lineBlockAt(s141 - c48);
        o83 == null && (o83 = Math.min(h67.right - h67.left, n65.defaultCharacterWidth * (s141 - u48.from))), l97 = (r115 < 0 ? u48.top : u48.bottom) + c48;
    }
    let f44 = h67.left + o83, d45 = i220 ?? n65.defaultLineHeight >> 1;
    for(let u49 = 0;; u49 += 10){
        let g25 = l97 + (d45 + u49) * r115, m28 = Ri(n65, {
            x: f44,
            y: g25
        }, !1, r115);
        if (g25 < h67.top || g25 > h67.bottom || (r115 < 0 ? m28 < s141 : m28 > s141)) return p.cursor(m28, void 0, void 0, o83);
    }
}
function xe1(n66, t392, e345) {
    let i221 = n66.pluginField(V1.atomicRanges);
    for(;;){
        let s142 = !1;
        for (let r116 of i221)r116.between(e345.from - 1, e345.from + 1, (o84, l98, h)=>{
            e345.from > o84 && e345.from < l98 && (e345 = t392.from > e345.from ? p.cursor(o84, 1) : p.cursor(l98, -1), s142 = !0);
        });
        if (!s142) return e345;
    }
}
var Ei = class {
    constructor(t393){
        this.lastKeyCode = 0, this.lastKeyTime = 0, this.pendingIOSKey = void 0, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastEscPress = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.registeredEvents = [], this.customHandlers = [], this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.rapidCompositionStart = !1, this.mouseSelection = null;
        for(let e346 in O2){
            let i222 = O2[e346];
            t393.contentDOM.addEventListener(e346, (s143)=>{
                e346 == "keydown" && this.keydown(t393, s143) || !Vi(t393, s143) || this.ignoreDuringComposition(s143) || (this.mustFlushObserver(s143) && t393.observer.forceFlush(), this.runCustomHandlers(e346, t393, s143) ? s143.preventDefault() : i222(t393, s143));
            }), this.registeredEvents.push(e346);
        }
        this.notifiedFocused = t393.hasFocus, this.ensureHandlers(t393), p3.safari && t393.contentDOM.addEventListener("input", ()=>null
        );
    }
    setSelectionOrigin(t394) {
        this.lastSelectionOrigin = t394, this.lastSelectionTime = Date.now();
    }
    ensureHandlers(t395) {
        let e347 = this.customHandlers = t395.pluginField(mi);
        for (let i223 of e347)for(let s144 in i223.handlers)this.registeredEvents.indexOf(s144) < 0 && s144 != "scroll" && (this.registeredEvents.push(s144), t395.contentDOM.addEventListener(s144, (r117)=>{
            !Vi(t395, r117) || this.runCustomHandlers(s144, t395, r117) && r117.preventDefault();
        }));
    }
    runCustomHandlers(t396, e348, i224) {
        for (let s145 of this.customHandlers){
            let r118 = s145.handlers[t396];
            if (r118) try {
                if (r118.call(s145.plugin, i224, e348) || i224.defaultPrevented) return !0;
            } catch (o85) {
                lt(e348.state, o85);
            }
        }
        return !1;
    }
    runScrollHandlers(t397, e349) {
        for (let i225 of this.customHandlers){
            let s146 = i225.handlers.scroll;
            if (s146) try {
                s146.call(i225.plugin, e349, t397);
            } catch (r119) {
                lt(t397.state, r119);
            }
        }
    }
    keydown(t398, e350) {
        if (this.lastKeyCode = e350.keyCode, this.lastKeyTime = Date.now(), this.screenKeyEvent(t398, e350)) return !0;
        if (p3.android && p3.chrome && !e350.synthetic && (e350.keyCode == 13 || e350.keyCode == 8)) return t398.observer.delayAndroidKey(e350.key, e350.keyCode), !0;
        let i226;
        return p3.ios && (i226 = Pi.find((s147)=>s147.keyCode == e350.keyCode
        )) && !(e350.ctrlKey || e350.altKey || e350.metaKey) && !e350.synthetic ? (this.pendingIOSKey = i226, setTimeout(()=>this.flushIOSKey(t398)
        , 250), !0) : !1;
    }
    flushIOSKey(t399) {
        let e351 = this.pendingIOSKey;
        return e351 ? (this.pendingIOSKey = void 0, St(t399.contentDOM, e351.key, e351.keyCode)) : !1;
    }
    ignoreDuringComposition(t400) {
        return /^key/.test(t400.type) ? this.composing > 0 ? !0 : p3.safari && Date.now() - this.compositionEndedAt < 500 ? (this.compositionEndedAt = 0, !0) : !1 : !1;
    }
    screenKeyEvent(t, e352) {
        let i227 = e352.keyCode == 9 && Date.now() < this.lastEscPress + 2000;
        return e352.keyCode == 27 ? this.lastEscPress = Date.now() : Hi.indexOf(e352.keyCode) < 0 && (this.lastEscPress = 0), i227;
    }
    mustFlushObserver(t401) {
        return t401.type == "keydown" && t401.keyCode != 229 || t401.type == "compositionend" && !p3.ios;
    }
    startMouseSelection(t402) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t402;
    }
    update(t403) {
        this.mouseSelection && this.mouseSelection.update(t403), t403.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
    }
    destroy() {
        this.mouseSelection && this.mouseSelection.destroy();
    }
}, Pi = [
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
], Hi = [
    16,
    17,
    18,
    20,
    91,
    92,
    224,
    225
], Ni = class {
    constructor(t404, e353, i228, s148){
        this.view = t404, this.style = i228, this.mustSelect = s148, this.lastEvent = e353;
        let r120 = t404.contentDOM.ownerDocument;
        r120.addEventListener("mousemove", this.move = this.move.bind(this)), r120.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e353.shiftKey, this.multiple = t404.state.facet(w1.allowMultipleSelections) && un(t404, e353), this.dragMove = dn(t404, e353), this.dragging = gn(t404, e353) && Ae1(e353) == 1 ? null : !1, this.dragging === !1 && (e353.preventDefault(), this.select(e353));
    }
    move(t405) {
        if (t405.buttons == 0) return this.destroy();
        this.dragging === !1 && this.select(this.lastEvent = t405);
    }
    up(t406) {
        this.dragging == null && this.select(this.lastEvent), this.dragging || t406.preventDefault(), this.destroy();
    }
    destroy() {
        let t407 = this.view.contentDOM.ownerDocument;
        t407.removeEventListener("mousemove", this.move), t407.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = null;
    }
    select(t408) {
        let e354 = this.style.get(t408, this.extend, this.multiple);
        (this.mustSelect || !e354.eq(this.view.state.selection) || e354.main.assoc != this.view.state.selection.main.assoc) && this.view.dispatch({
            selection: e354,
            userEvent: "select.pointer",
            scrollIntoView: !0
        }), this.mustSelect = !1;
    }
    update(t409) {
        t409.docChanged && this.dragging && (this.dragging = this.dragging.map(t409.changes)), this.style.update(t409) && setTimeout(()=>this.select(this.lastEvent)
        , 20);
    }
};
function un(n67, t410) {
    let e355 = n67.state.facet(hi);
    return e355.length ? e355[0](t410) : p3.mac ? t410.metaKey : t410.ctrlKey;
}
function dn(n68, t411) {
    let e356 = n68.state.facet(ai);
    return e356.length ? e356[0](t411) : p3.mac ? !t411.altKey : !t411.ctrlKey;
}
function gn(n69, t412) {
    let { main: e357  } = n69.state.selection;
    if (e357.empty) return !1;
    let i229 = Ht(n69.root);
    if (i229.rangeCount == 0) return !0;
    let s149 = i229.getRangeAt(0).getClientRects();
    for(let r121 = 0; r121 < s149.length; r121++){
        let o86 = s149[r121];
        if (o86.left <= t412.clientX && o86.right >= t412.clientX && o86.top <= t412.clientY && o86.bottom >= t412.clientY) return !0;
    }
    return !1;
}
function Vi(n70, t413) {
    if (!t413.bubbles) return !0;
    if (t413.defaultPrevented) return !1;
    for(let e358 = t413.target, i230; e358 != n70.contentDOM; e358 = e358.parentNode)if (!e358 || e358.nodeType == 11 || (i230 = M2.get(e358)) && i230.ignoreEvent(t413)) return !1;
    return !0;
}
var O2 = Object.create(null), Wi = p3.ie && p3.ie_version < 15 || p3.ios && p3.webkit_version < 604;
function pn(n71) {
    let t414 = n71.dom.parentNode;
    if (!t414) return;
    let e359 = t414.appendChild(document.createElement("textarea"));
    e359.style.cssText = "position: fixed; left: -10000px; top: 10px", e359.focus(), setTimeout(()=>{
        n71.focus(), e359.remove(), Fi(n71, e359.value);
    }, 50);
}
function Fi(n72, t415) {
    let { state: e360  } = n72, i231, s150 = 1, r122 = e360.toText(t415), o87 = r122.lines == e360.selection.ranges.length;
    if (ve1 != null && e360.selection.ranges.every((h68)=>h68.empty
    ) && ve1 == r122.toString()) {
        let h69 = -1;
        i231 = e360.changeByRange((a59)=>{
            let c49 = e360.doc.lineAt(a59.from);
            if (c49.from == h69) return {
                range: a59
            };
            h69 = c49.from;
            let f45 = e360.toText((o87 ? r122.line(s150++).text : t415) + e360.lineBreak);
            return {
                changes: {
                    from: c49.from,
                    insert: f45
                },
                range: p.cursor(a59.from + f45.length)
            };
        });
    } else o87 ? i231 = e360.changeByRange((h70)=>{
        let a60 = r122.line(s150++);
        return {
            changes: {
                from: h70.from,
                to: h70.to,
                insert: a60.text
            },
            range: p.cursor(h70.from + a60.length)
        };
    }) : i231 = e360.replaceSelection(r122);
    n72.dispatch(i231, {
        userEvent: "input.paste",
        scrollIntoView: !0
    });
}
O2.keydown = (n73, t)=>{
    n73.inputState.setSelectionOrigin("select");
};
var zi = 0;
O2.touchstart = (n74, t)=>{
    zi = Date.now(), n74.inputState.setSelectionOrigin("select.pointer");
};
O2.touchmove = (n75)=>{
    n75.inputState.setSelectionOrigin("select.pointer");
};
O2.mousedown = (n76, t416)=>{
    if (n76.observer.flush(), zi > Date.now() - 2000 && Ae1(t416) == 1) return;
    let e361 = null;
    for (let i232 of n76.state.facet(ci))if (e361 = i232(n76, t416), e361) break;
    if (!e361 && t416.button == 0 && (e361 = yn(n76, t416)), e361) {
        let i233 = n76.root.activeElement != n76.contentDOM;
        i233 && n76.observer.ignore(()=>Ge(n76.contentDOM)
        ), n76.inputState.startMouseSelection(new Ni(n76, t416, e361, i233));
    }
};
function Ii(n77, t417, e362, i234) {
    if (i234 == 1) return p.cursor(t417, e362);
    if (i234 == 2) return rn(n77.state, t417, e362);
    {
        let s151 = E2.find(n77.docView, t417), r123 = n77.state.doc.lineAt(s151 ? s151.posAtEnd : t417), o88 = s151 ? s151.posAtStart : r123.from, l99 = s151 ? s151.posAtEnd : r123.to;
        return l99 < n77.state.doc.length && l99 == r123.to && l99++, p.range(o88, l99);
    }
}
var qi = (n78, t418)=>n78 >= t418.top && n78 <= t418.bottom
, Ki = (n79, t419, e363)=>qi(t419, e363) && n79 >= e363.left && n79 <= e363.right
;
function mn(n80, t420, e364, i235) {
    let s152 = E2.find(n80.docView, t420);
    if (!s152) return 1;
    let r124 = t420 - s152.posAtStart;
    if (r124 == 0) return 1;
    if (r124 == s152.length) return -1;
    let o89 = s152.coordsAt(r124, -1);
    if (o89 && Ki(e364, i235, o89)) return -1;
    let l100 = s152.coordsAt(r124, 1);
    return l100 && Ki(e364, i235, l100) ? 1 : o89 && qi(i235, o89) ? -1 : 1;
}
function ji(n81, t421) {
    let e365 = n81.posAtCoords({
        x: t421.clientX,
        y: t421.clientY
    }, !1);
    return {
        pos: e365,
        bias: mn(n81, e365, t421.clientX, t421.clientY)
    };
}
var bn = p3.ie && p3.ie_version <= 11, Gi = null, Yi = 0, $i = 0;
function Ae1(n82) {
    if (!bn) return n82.detail;
    let t422 = Gi, e366 = $i;
    return Gi = n82, $i = Date.now(), Yi = !t422 || e366 > Date.now() - 400 && Math.abs(t422.clientX - n82.clientX) < 2 && Math.abs(t422.clientY - n82.clientY) < 2 ? (Yi + 1) % 3 : 1;
}
function yn(n83, t423) {
    let e367 = ji(n83, t423), i236 = Ae1(t423), s153 = n83.state.selection, r125 = e367, o90 = t423;
    return {
        update (l101) {
            l101.docChanged && (e367 && (e367.pos = l101.changes.mapPos(e367.pos)), s153 = s153.map(l101.changes), o90 = null);
        },
        get (l102, h71, a61) {
            let c50;
            if (o90 && l102.clientX == o90.clientX && l102.clientY == o90.clientY ? c50 = r125 : (c50 = r125 = ji(n83, l102), o90 = l102), !c50 || !e367) return s153;
            let f46 = Ii(n83, c50.pos, c50.bias, i236);
            if (e367.pos != c50.pos && !h71) {
                let d46 = Ii(n83, e367.pos, e367.bias, i236), u50 = Math.min(d46.from, f46.from), g26 = Math.max(d46.to, f46.to);
                f46 = u50 < f46.from ? p.range(u50, g26) : p.range(g26, u50);
            }
            return h71 ? s153.replaceRange(s153.main.extend(f46.from, f46.to)) : a61 ? s153.addRange(f46) : p.create([
                f46
            ]);
        }
    };
}
O2.dragstart = (n84, t424)=>{
    let { selection: { main: e368  }  } = n84.state, { mouseSelection: i237  } = n84.inputState;
    i237 && (i237.dragging = e368), t424.dataTransfer && (t424.dataTransfer.setData("Text", n84.state.sliceDoc(e368.from, e368.to)), t424.dataTransfer.effectAllowed = "copyMove");
};
function Ui(n85, t425, e369, i238) {
    if (!e369) return;
    let s154 = n85.posAtCoords({
        x: t425.clientX,
        y: t425.clientY
    }, !1);
    t425.preventDefault();
    let { mouseSelection: r126  } = n85.inputState, o91 = i238 && r126 && r126.dragging && r126.dragMove ? {
        from: r126.dragging.from,
        to: r126.dragging.to
    } : null, l103 = {
        from: s154,
        insert: e369
    }, h72 = n85.state.changes(o91 ? [
        o91,
        l103
    ] : l103);
    n85.focus(), n85.dispatch({
        changes: h72,
        selection: {
            anchor: h72.mapPos(s154, -1),
            head: h72.mapPos(s154, 1)
        },
        userEvent: o91 ? "move.drop" : "input.drop"
    });
}
O2.drop = (n86, t426)=>{
    if (!t426.dataTransfer) return;
    if (n86.state.readOnly) return t426.preventDefault();
    let e370 = t426.dataTransfer.files;
    if (e370 && e370.length) {
        t426.preventDefault();
        let i239 = Array(e370.length), s155 = 0, r127 = ()=>{
            ++s155 == e370.length && Ui(n86, t426, i239.filter((o92)=>o92 != null
            ).join(n86.state.lineBreak), !1);
        };
        for(let o7 = 0; o7 < e370.length; o7++){
            let l104 = new FileReader;
            l104.onerror = r127, l104.onload = ()=>{
                /[\x00-\x08\x0e-\x1f]{2}/.test(l104.result) || (i239[o7] = l104.result), r127();
            }, l104.readAsText(e370[o7]);
        }
    } else Ui(n86, t426, t426.dataTransfer.getData("Text"), !0);
};
O2.paste = (n87, t427)=>{
    if (n87.state.readOnly) return t427.preventDefault();
    n87.observer.flush();
    let e371 = Wi ? null : t427.clipboardData;
    e371 ? (Fi(n87, e371.getData("text/plain")), t427.preventDefault()) : pn(n87);
};
function wn(n88, t428) {
    let e372 = n88.dom.parentNode;
    if (!e372) return;
    let i240 = e372.appendChild(document.createElement("textarea"));
    i240.style.cssText = "position: fixed; left: -10000px; top: 10px", i240.value = t428, i240.focus(), i240.selectionEnd = t428.length, i240.selectionStart = 0, setTimeout(()=>{
        i240.remove(), n88.focus();
    }, 50);
}
function Sn(n89) {
    let t429 = [], e373 = [], i241 = !1;
    for (let s156 of n89.selection.ranges)s156.empty || (t429.push(n89.sliceDoc(s156.from, s156.to)), e373.push(s156));
    if (!t429.length) {
        let s157 = -1;
        for (let { from: r128  } of n89.selection.ranges){
            let o93 = n89.doc.lineAt(r128);
            o93.number > s157 && (t429.push(o93.text), e373.push({
                from: o93.from,
                to: Math.min(n89.doc.length, o93.to + 1)
            })), s157 = o93.number;
        }
        i241 = !0;
    }
    return {
        text: t429.join(n89.lineBreak),
        ranges: e373,
        linewise: i241
    };
}
var ve1 = null;
O2.copy = O2.cut = (n90, t430)=>{
    let { text: e374 , ranges: i242 , linewise: s158  } = Sn(n90.state);
    if (!e374 && !s158) return;
    ve1 = s158 ? e374 : null;
    let r129 = Wi ? null : t430.clipboardData;
    r129 ? (t430.preventDefault(), r129.clearData(), r129.setData("text/plain", e374)) : wn(n90, e374), t430.type == "cut" && !n90.state.readOnly && n90.dispatch({
        changes: i242,
        scrollIntoView: !0,
        userEvent: "delete.cut"
    });
};
O2.focus = O2.blur = (n91)=>{
    setTimeout(()=>{
        n91.hasFocus != n91.inputState.notifiedFocused && n91.update([]);
    }, 10);
};
O2.beforeprint = (n92)=>{
    n92.viewState.printing = !0, n92.requestMeasure(), setTimeout(()=>{
        n92.viewState.printing = !1, n92.requestMeasure();
    }, 2000);
};
function Xi(n93, t431) {
    if (n93.docView.compositionDeco.size) {
        n93.inputState.rapidCompositionStart = t431;
        try {
            n93.update([]);
        } finally{
            n93.inputState.rapidCompositionStart = !1;
        }
    }
}
O2.compositionstart = O2.compositionupdate = (n94)=>{
    n94.inputState.compositionFirstChange == null && (n94.inputState.compositionFirstChange = !0), n94.inputState.composing < 0 && (n94.inputState.composing = 0, n94.docView.compositionDeco.size && (n94.observer.flush(), Xi(n94, !0)));
};
O2.compositionend = (n95)=>{
    n95.inputState.composing = -1, n95.inputState.compositionEndedAt = Date.now(), n95.inputState.compositionFirstChange = null, setTimeout(()=>{
        n95.inputState.composing < 0 && Xi(n95, !1);
    }, 50);
};
O2.contextmenu = (n96)=>{
    n96.inputState.lastContextMenu = Date.now();
};
O2.beforeinput = (n97, t432)=>{
    var e375;
    let i243;
    if (p3.chrome && p3.android && (i243 = Pi.find((s159)=>s159.inputType == t432.inputType
    )) && (n97.observer.delayAndroidKey(i243.key, i243.keyCode), i243.key == "Backspace" || i243.key == "Delete")) {
        let s160 = ((e375 = window.visualViewport) === null || e375 === void 0 ? void 0 : e375.height) || 0;
        setTimeout(()=>{
            var r130;
            (((r130 = window.visualViewport) === null || r130 === void 0 ? void 0 : r130.height) || 0) > s160 + 10 && n97.hasFocus && (n97.contentDOM.blur(), n97.focus());
        }, 100);
    }
};
var _i = [
    "pre-wrap",
    "normal",
    "pre-line",
    "break-spaces"
], Me = class {
    constructor(){
        this.doc = d.empty, this.lineWrapping = !1, this.direction = P3.LTR, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.lineLength = 30, this.heightChanged = !1;
    }
    heightForGap(t433, e376) {
        let i244 = this.doc.lineAt(e376).number - this.doc.lineAt(t433).number + 1;
        return this.lineWrapping && (i244 += Math.ceil((e376 - t433 - i244 * this.lineLength * 0.5) / this.lineLength)), this.lineHeight * i244;
    }
    heightForLine(t434) {
        return this.lineWrapping ? (1 + Math.max(0, Math.ceil((t434 - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
    }
    setDoc(t435) {
        return this.doc = t435, this;
    }
    mustRefreshForStyle(t436, e377) {
        return _i.indexOf(t436) > -1 != this.lineWrapping || this.direction != e377;
    }
    mustRefreshForHeights(t437) {
        let e378 = !1;
        for(let i245 = 0; i245 < t437.length; i245++){
            let s161 = t437[i245];
            s161 < 0 ? i245++ : this.heightSamples[Math.floor(s161 * 10)] || (e378 = !0, this.heightSamples[Math.floor(s161 * 10)] = !0);
        }
        return e378;
    }
    refresh(t438, e379, i246, s162, r131, o94) {
        let l105 = _i.indexOf(t438) > -1, h73 = Math.round(i246) != Math.round(this.lineHeight) || this.lineWrapping != l105 || this.direction != e379;
        if (this.lineWrapping = l105, this.direction = e379, this.lineHeight = i246, this.charWidth = s162, this.lineLength = r131, h73) {
            this.heightSamples = {};
            for(let a62 = 0; a62 < o94.length; a62++){
                let c51 = o94[a62];
                c51 < 0 ? a62++ : this.heightSamples[Math.floor(c51 * 10)] = !0;
            }
        }
        return h73;
    }
}, Ce = class {
    constructor(t439, e380){
        this.from = t439, this.heights = e380, this.index = 0;
    }
    get more() {
        return this.index < this.heights.length;
    }
}, K1 = class {
    constructor(t440, e381, i247, s163, r132){
        this.from = t440, this.length = e381, this.top = i247, this.height = s163, this.type = r132;
    }
    get to() {
        return this.from + this.length;
    }
    get bottom() {
        return this.top + this.height;
    }
    join(t441) {
        let e382 = (Array.isArray(this.type) ? this.type : [
            this
        ]).concat(Array.isArray(t441.type) ? t441.type : [
            t441
        ]);
        return new K1(this.from, this.length + t441.length, this.top, this.height + t441.height, e382);
    }
    moveY(t442) {
        return t442 ? new K1(this.from, this.length, this.top + t442, this.height, Array.isArray(this.type) ? this.type.map((e383)=>e383.moveY(t442)
        ) : this.type) : this;
    }
}, x3 = function(n98) {
    return n98[n98.ByPos = 0] = "ByPos", n98[n98.ByHeight = 1] = "ByHeight", n98[n98.ByPosNoHeight = 2] = "ByPosNoHeight", n98;
}(x3 || (x3 = {})), Kt = 0.001, H1 = class {
    constructor(t443, e384, i248 = 2){
        this.length = t443, this.height = e384, this.flags = i248;
    }
    get outdated() {
        return (this.flags & 2) > 0;
    }
    set outdated(t444) {
        this.flags = (t444 ? 2 : 0) | this.flags & ~2;
    }
    setHeight(t445, e385) {
        this.height != e385 && (Math.abs(this.height - e385) > Kt && (t445.heightChanged = !0), this.height = e385);
    }
    replace(t, e, i249) {
        return H1.of(i249);
    }
    decomposeLeft(t, e386) {
        e386.push(this);
    }
    decomposeRight(t, e387) {
        e387.push(this);
    }
    applyChanges(t446, e388, i250, s164) {
        let r133 = this;
        for(let o95 = s164.length - 1; o95 >= 0; o95--){
            let { fromA: l106 , toA: h74 , fromB: a63 , toB: c52  } = s164[o95], f47 = r133.lineAt(l106, x3.ByPosNoHeight, e388, 0, 0), d47 = f47.to >= h74 ? f47 : r133.lineAt(h74, x3.ByPosNoHeight, e388, 0, 0);
            for(c52 += d47.to - h74, h74 = d47.to; o95 > 0 && f47.from <= s164[o95 - 1].toA;)l106 = s164[o95 - 1].fromA, a63 = s164[o95 - 1].fromB, o95--, l106 < f47.from && (f47 = r133.lineAt(l106, x3.ByPosNoHeight, e388, 0, 0));
            a63 += f47.from - l106, l106 = f47.from;
            let u51 = jt.build(i250, t446, a63, c52);
            r133 = r133.replace(l106, h74, u51);
        }
        return r133.updateHeight(i250, 0);
    }
    static empty() {
        return new W1(0, 0);
    }
    static of(t447) {
        if (t447.length == 1) return t447[0];
        let e389 = 0, i251 = t447.length, s165 = 0, r134 = 0;
        for(;;)if (e389 == i251) if (s165 > r134 * 2) {
            let l107 = t447[e389 - 1];
            l107.break ? t447.splice(--e389, 1, l107.left, null, l107.right) : t447.splice(--e389, 1, l107.left, l107.right), i251 += 1 + l107.break, s165 -= l107.size;
        } else if (r134 > s165 * 2) {
            let l108 = t447[i251];
            l108.break ? t447.splice(i251, 1, l108.left, null, l108.right) : t447.splice(i251, 1, l108.left, l108.right), i251 += 2 + l108.break, r134 -= l108.size;
        } else break;
        else if (s165 < r134) {
            let l109 = t447[e389++];
            l109 && (s165 += l109.size);
        } else {
            let l110 = t447[--i251];
            l110 && (r134 += l110.size);
        }
        let o96 = 0;
        return t447[e389 - 1] == null ? (o96 = 1, e389--) : t447[e389] == null && (o96 = 1, i251++), new Ji(H1.of(t447.slice(0, e389)), o96, H1.of(t447.slice(i251)));
    }
};
H1.prototype.size = 1;
var De = class extends H1 {
    constructor(t448, e390, i252){
        super(t448, e390);
        this.type = i252;
    }
    blockAt(t, e, i253, s166) {
        return new K1(s166, this.length, i253, this.height, this.type);
    }
    lineAt(t, e, i254, s167, r135) {
        return this.blockAt(0, i254, s167, r135);
    }
    forEachLine(t, e, i255, s168, r136, o97) {
        o97(this.blockAt(0, i255, s168, r136));
    }
    updateHeight(t449, e391 = 0, i = !1, s169) {
        return s169 && s169.from <= e391 && s169.more && this.setHeight(t449, s169.heights[s169.index++]), this.outdated = !1, this;
    }
    toString() {
        return `block(${this.length})`;
    }
}, W1 = class extends De {
    constructor(t450, e392){
        super(t450, e392, A3.Text);
        this.collapsed = 0, this.widgetHeight = 0;
    }
    replace(t, e, i256) {
        let s170 = i256[0];
        return i256.length == 1 && (s170 instanceof W1 || s170 instanceof T2 && s170.flags & 4) && Math.abs(this.length - s170.length) < 10 ? (s170 instanceof T2 ? s170 = new W1(s170.length, this.height) : s170.height = this.height, this.outdated || (s170.outdated = !1), s170) : H1.of(i256);
    }
    updateHeight(t451, e393 = 0, i257 = !1, s171) {
        return s171 && s171.from <= e393 && s171.more ? this.setHeight(t451, s171.heights[s171.index++]) : (i257 || this.outdated) && this.setHeight(t451, Math.max(this.widgetHeight, t451.heightForLine(this.length - this.collapsed))), this.outdated = !1, this;
    }
    toString() {
        return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
    }
}, T2 = class extends H1 {
    constructor(t452){
        super(t452, 0);
    }
    lines(t453, e394) {
        let i258 = t453.lineAt(e394).number, s172 = t453.lineAt(e394 + this.length).number;
        return {
            firstLine: i258,
            lastLine: s172,
            lineHeight: this.height / (s172 - i258 + 1)
        };
    }
    blockAt(t454, e395, i259, s173) {
        let { firstLine: r137 , lastLine: o98 , lineHeight: l111  } = this.lines(e395, s173), h75 = Math.max(0, Math.min(o98 - r137, Math.floor((t454 - i259) / l111))), { from: a64 , length: c53  } = e395.line(r137 + h75);
        return new K1(a64, c53, i259 + l111 * h75, l111, A3.Text);
    }
    lineAt(t455, e396, i260, s174, r138) {
        if (e396 == x3.ByHeight) return this.blockAt(t455, i260, s174, r138);
        if (e396 == x3.ByPosNoHeight) {
            let { from: f48 , to: d48  } = i260.lineAt(t455);
            return new K1(f48, d48 - f48, 0, 0, A3.Text);
        }
        let { firstLine: o99 , lineHeight: l112  } = this.lines(i260, r138), { from: h76 , length: a65 , number: c54  } = i260.lineAt(t455);
        return new K1(h76, a65, s174 + l112 * (c54 - o99), l112, A3.Text);
    }
    forEachLine(t456, e397, i261, s175, r139, o100) {
        let { firstLine: l113 , lineHeight: h77  } = this.lines(i261, r139);
        for(let a66 = Math.max(t456, r139), c55 = Math.min(r139 + this.length, e397); a66 <= c55;){
            let f49 = i261.lineAt(a66);
            a66 == t456 && (s175 += h77 * (f49.number - l113)), o100(new K1(f49.from, f49.length, s175, h77, A3.Text)), s175 += h77, a66 = f49.to + 1;
        }
    }
    replace(t457, e398, i262) {
        let s176 = this.length - e398;
        if (s176 > 0) {
            let r140 = i262[i262.length - 1];
            r140 instanceof T2 ? i262[i262.length - 1] = new T2(r140.length + s176) : i262.push(null, new T2(s176 - 1));
        }
        if (t457 > 0) {
            let r141 = i262[0];
            r141 instanceof T2 ? i262[0] = new T2(t457 + r141.length) : i262.unshift(new T2(t457 - 1), null);
        }
        return H1.of(i262);
    }
    decomposeLeft(t458, e399) {
        e399.push(new T2(t458 - 1), null);
    }
    decomposeRight(t459, e400) {
        e400.push(null, new T2(this.length - t459 - 1));
    }
    updateHeight(t460, e401 = 0, i263 = !1, s177) {
        let r142 = e401 + this.length;
        if (s177 && s177.from <= e401 + this.length && s177.more) {
            let o101 = [], l114 = Math.max(e401, s177.from), h78 = -1, a67 = t460.heightChanged;
            for(s177.from > e401 && o101.push(new T2(s177.from - e401 - 1).updateHeight(t460, e401)); l114 <= r142 && s177.more;){
                let f50 = t460.doc.lineAt(l114).length;
                o101.length && o101.push(null);
                let d49 = s177.heights[s177.index++];
                h78 == -1 ? h78 = d49 : Math.abs(d49 - h78) >= Kt && (h78 = -2);
                let u52 = new W1(f50, d49);
                u52.outdated = !1, o101.push(u52), l114 += f50 + 1;
            }
            l114 <= r142 && o101.push(null, new T2(r142 - l114).updateHeight(t460, l114));
            let c56 = H1.of(o101);
            return t460.heightChanged = a67 || h78 < 0 || Math.abs(c56.height - this.height) >= Kt || Math.abs(h78 - this.lines(t460.doc, e401).lineHeight) >= Kt, c56;
        } else (i263 || this.outdated) && (this.setHeight(t460, t460.heightForGap(e401, e401 + this.length)), this.outdated = !1);
        return this;
    }
    toString() {
        return `gap(${this.length})`;
    }
}, Ji = class extends H1 {
    constructor(t461, e402, i264){
        super(t461.length + e402 + i264.length, t461.height + i264.height, e402 | (t461.outdated || i264.outdated ? 2 : 0));
        this.left = t461, this.right = i264, this.size = t461.size + i264.size;
    }
    get break() {
        return this.flags & 1;
    }
    blockAt(t462, e403, i265, s178) {
        let r143 = i265 + this.left.height;
        return t462 < r143 ? this.left.blockAt(t462, e403, i265, s178) : this.right.blockAt(t462, e403, r143, s178 + this.left.length + this.break);
    }
    lineAt(t463, e404, i266, s179, r144) {
        let o102 = s179 + this.left.height, l115 = r144 + this.left.length + this.break, h79 = e404 == x3.ByHeight ? t463 < o102 : t463 < l115, a68 = h79 ? this.left.lineAt(t463, e404, i266, s179, r144) : this.right.lineAt(t463, e404, i266, o102, l115);
        if (this.break || (h79 ? a68.to < l115 : a68.from > l115)) return a68;
        let c57 = e404 == x3.ByPosNoHeight ? x3.ByPosNoHeight : x3.ByPos;
        return h79 ? a68.join(this.right.lineAt(l115, c57, i266, o102, l115)) : this.left.lineAt(l115, c57, i266, s179, r144).join(a68);
    }
    forEachLine(t464, e405, i267, s180, r145, o103) {
        let l116 = s180 + this.left.height, h80 = r145 + this.left.length + this.break;
        if (this.break) t464 < h80 && this.left.forEachLine(t464, e405, i267, s180, r145, o103), e405 >= h80 && this.right.forEachLine(t464, e405, i267, l116, h80, o103);
        else {
            let a69 = this.lineAt(h80, x3.ByPos, i267, s180, r145);
            t464 < a69.from && this.left.forEachLine(t464, a69.from - 1, i267, s180, r145, o103), a69.to >= t464 && a69.from <= e405 && o103(a69), e405 > a69.to && this.right.forEachLine(a69.to + 1, e405, i267, l116, h80, o103);
        }
    }
    replace(t465, e406, i268) {
        let s181 = this.left.length + this.break;
        if (e406 < s181) return this.balanced(this.left.replace(t465, e406, i268), this.right);
        if (t465 > this.left.length) return this.balanced(this.left, this.right.replace(t465 - s181, e406 - s181, i268));
        let r146 = [];
        t465 > 0 && this.decomposeLeft(t465, r146);
        let o104 = r146.length;
        for (let l117 of i268)r146.push(l117);
        if (t465 > 0 && Zi(r146, o104 - 1), e406 < this.length) {
            let l118 = r146.length;
            this.decomposeRight(e406, r146), Zi(r146, l118);
        }
        return H1.of(r146);
    }
    decomposeLeft(t466, e407) {
        let i269 = this.left.length;
        if (t466 <= i269) return this.left.decomposeLeft(t466, e407);
        e407.push(this.left), this.break && (i269++, t466 >= i269 && e407.push(null)), t466 > i269 && this.right.decomposeLeft(t466 - i269, e407);
    }
    decomposeRight(t467, e408) {
        let i270 = this.left.length, s182 = i270 + this.break;
        if (t467 >= s182) return this.right.decomposeRight(t467 - s182, e408);
        t467 < i270 && this.left.decomposeRight(t467, e408), this.break && t467 < s182 && e408.push(null), e408.push(this.right);
    }
    balanced(t468, e409) {
        return t468.size > 2 * e409.size || e409.size > 2 * t468.size ? H1.of(this.break ? [
            t468,
            null,
            e409
        ] : [
            t468,
            e409
        ]) : (this.left = t468, this.right = e409, this.height = t468.height + e409.height, this.outdated = t468.outdated || e409.outdated, this.size = t468.size + e409.size, this.length = t468.length + this.break + e409.length, this);
    }
    updateHeight(t469, e410 = 0, i271 = !1, s183) {
        let { left: r147 , right: o105  } = this, l119 = e410 + r147.length + this.break, h81 = null;
        return s183 && s183.from <= e410 + r147.length && s183.more ? h81 = r147 = r147.updateHeight(t469, e410, i271, s183) : r147.updateHeight(t469, e410, i271), s183 && s183.from <= l119 + o105.length && s183.more ? h81 = o105 = o105.updateHeight(t469, l119, i271, s183) : o105.updateHeight(t469, l119, i271), h81 ? this.balanced(r147, o105) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
    }
    toString() {
        return this.left + (this.break ? " " : "-") + this.right;
    }
};
function Zi(n99, t470) {
    let e411, i272;
    n99[t470] == null && (e411 = n99[t470 - 1]) instanceof T2 && (i272 = n99[t470 + 1]) instanceof T2 && n99.splice(t470 - 1, 3, new T2(e411.length + 1 + i272.length));
}
var xn = 5, jt = class {
    constructor(t471, e412){
        this.pos = t471, this.oracle = e412, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t471;
    }
    get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
    }
    span(t, e413) {
        if (this.lineStart > -1) {
            let i273 = Math.min(e413, this.lineEnd), s184 = this.nodes[this.nodes.length - 1];
            s184 instanceof W1 ? s184.length += i273 - this.pos : (i273 > this.pos || !this.isCovered) && this.nodes.push(new W1(i273 - this.pos, -1)), this.writtenTo = i273, e413 > i273 && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
        }
        this.pos = e413;
    }
    point(t472, e414, i274) {
        if (t472 < e414 || i274.heightRelevant) {
            let s185 = i274.widget ? i274.widget.estimatedHeight : 0;
            s185 < 0 && (s185 = this.oracle.lineHeight);
            let r148 = e414 - t472;
            i274.block ? this.addBlock(new De(r148, s185, i274.type)) : (r148 || s185 >= xn) && this.addLineDeco(s185, r148);
        } else e414 > t472 && this.span(t472, e414);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
    }
    enterLine() {
        if (this.lineStart > -1) return;
        let { from: t473 , to: e415  } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = t473, this.lineEnd = e415, this.writtenTo < t473 && ((this.writtenTo < t473 - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, t473 - 1)), this.nodes.push(null)), this.pos > t473 && this.nodes.push(new W1(this.pos - t473, -1)), this.writtenTo = this.pos;
    }
    blankContent(t474, e416) {
        let i275 = new T2(e416 - t474);
        return this.oracle.doc.lineAt(t474).to == e416 && (i275.flags |= 4), i275;
    }
    ensureLine() {
        this.enterLine();
        let t475 = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (t475 instanceof W1) return t475;
        let e417 = new W1(0, -1);
        return this.nodes.push(e417), e417;
    }
    addBlock(t476) {
        this.enterLine(), t476.type == A3.WidgetAfter && !this.isCovered && this.ensureLine(), this.nodes.push(t476), this.writtenTo = this.pos = this.pos + t476.length, t476.type != A3.WidgetBefore && (this.covering = t476);
    }
    addLineDeco(t477, e418) {
        let i276 = this.ensureLine();
        i276.length += e418, i276.collapsed += e418, i276.widgetHeight = Math.max(i276.widgetHeight, t477), this.writtenTo = this.pos = this.pos + e418;
    }
    finish(t478) {
        let e419 = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
        this.lineStart > -1 && !(e419 instanceof W1) && !this.isCovered ? this.nodes.push(new W1(0, -1)) : (this.writtenTo < this.pos || e419 == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
        let i277 = t478;
        for (let s186 of this.nodes)s186 instanceof W1 && s186.updateHeight(this.oracle, i277), i277 += s186 ? s186.length : 1;
        return this.nodes;
    }
    static build(t479, e420, i278, s187) {
        let r149 = new jt(i278, t479);
        return f.spans(e420, i278, s187, r149, 0), r149.finish(i278);
    }
};
function An(n100, t480, e421) {
    let i279 = new Qi;
    return f.compare(n100, t480, e421, i279, 0), i279.changes;
}
var Qi = class {
    constructor(){
        this.changes = [];
    }
    compareRange() {}
    comparePoint(t481, e422, i280, s188) {
        (t481 < e422 || i280 && i280.heightRelevant || s188 && s188.heightRelevant) && le1(t481, e422, this.changes, 5);
    }
};
function vn(n101, t482) {
    let e423 = n101.getBoundingClientRect(), i281 = Math.max(0, e423.left), s189 = Math.min(innerWidth, e423.right), r150 = Math.max(0, e423.top), o106 = Math.min(innerHeight, e423.bottom), l120 = n101.ownerDocument.body;
    for(let h82 = n101.parentNode; h82 && h82 != l120;)if (h82.nodeType == 1) {
        let a70 = h82, c58 = window.getComputedStyle(a70);
        if ((a70.scrollHeight > a70.clientHeight || a70.scrollWidth > a70.clientWidth) && c58.overflow != "visible") {
            let f51 = a70.getBoundingClientRect();
            i281 = Math.max(i281, f51.left), s189 = Math.min(s189, f51.right), r150 = Math.max(r150, f51.top), o106 = Math.min(o106, f51.bottom);
        }
        h82 = c58.position == "absolute" || c58.position == "fixed" ? a70.offsetParent : a70.parentNode;
    } else if (h82.nodeType == 11) h82 = h82.host;
    else break;
    return {
        left: i281 - e423.left,
        right: Math.max(i281, s189) - e423.left,
        top: r150 - (e423.top + t482),
        bottom: Math.max(r150, o106) - (e423.top + t482)
    };
}
var Gt = class {
    constructor(t483, e424, i282){
        this.from = t483, this.to = e424, this.size = i282;
    }
    static same(t484, e425) {
        if (t484.length != e425.length) return !1;
        for(let i283 = 0; i283 < t484.length; i283++){
            let s190 = t484[i283], r151 = e425[i283];
            if (s190.from != r151.from || s190.to != r151.to || s190.size != r151.size) return !1;
        }
        return !0;
    }
    draw(t485) {
        return w4.replace({
            widget: new ts(this.size, t485)
        }).range(this.from, this.to);
    }
}, ts = class extends Q1 {
    constructor(t486, e426){
        super();
        this.size = t486, this.vertical = e426;
    }
    eq(t487) {
        return t487.size == this.size && t487.vertical == this.vertical;
    }
    toDOM() {
        let t488 = document.createElement("div");
        return this.vertical ? t488.style.height = this.size + "px" : (t488.style.width = this.size + "px", t488.style.height = "2px", t488.style.display = "inline-block"), t488;
    }
    get estimatedHeight() {
        return this.vertical ? this.size : -1;
    }
}, ke = class {
    constructor(t489){
        this.state = t489, this.pixelViewport = {
            left: 0,
            right: window.innerWidth,
            top: 0,
            bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.heightOracle = new Me, this.scaler = ss, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1, this.heightMap = H1.empty().applyChanges(t489.facet(ht), d.empty, this.heightOracle.setDoc(t489.doc), [
            new I2(0, 0, 0, t489.doc.length)
        ]), this.viewport = this.getViewport(0, null), this.updateViewportLines(), this.updateForViewport(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = w4.set(this.lineGaps.map((e427)=>e427.draw(!1)
        )), this.computeVisibleRanges();
    }
    updateForViewport() {
        let t490 = [
            this.viewport
        ], { main: e428  } = this.state.selection;
        for(let i2 = 0; i2 <= 1; i2++){
            let s191 = i2 ? e428.head : e428.anchor;
            if (!t490.some(({ from: r152 , to: o107  })=>s191 >= r152 && s191 <= o107
            )) {
                let { from: r153 , to: o108  } = this.lineBlockAt(s191);
                t490.push(new Ct(r153, o108));
            }
        }
        this.viewports = t490.sort((i284, s192)=>i284.from - s192.from
        ), this.scaler = this.heightMap.height <= 7000000 ? ss : new ns(this.heightOracle.doc, this.heightMap, this.viewports);
    }
    updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.state.doc, 0, 0, (t491)=>{
            this.viewportLines.push(this.scaler.scale == 1 ? t491 : Dt(t491, this.scaler));
        });
    }
    update(t492, e429 = null) {
        let i285 = this.state;
        this.state = t492.state;
        let s193 = this.state.facet(ht), r154 = t492.changedRanges, o109 = I2.extendWithRanges(r154, An(t492.startState.facet(ht), s193, t492 ? t492.changes : y1.empty(this.state.doc.length))), l121 = this.heightMap.height;
        this.heightMap = this.heightMap.applyChanges(s193, i285.doc, this.heightOracle.setDoc(this.state.doc), o109), this.heightMap.height != l121 && (t492.flags |= 2);
        let h83 = o109.length ? this.mapViewport(this.viewport, t492.changes) : this.viewport;
        (e429 && (e429.range.head < h83.from || e429.range.head > h83.to) || !this.viewportIsAppropriate(h83)) && (h83 = this.getViewport(0, e429));
        let a71 = !t492.changes.empty || t492.flags & 2 || h83.from != this.viewport.from || h83.to != this.viewport.to;
        this.viewport = h83, this.updateForViewport(), a71 && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4000) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t492.changes))), t492.flags |= this.computeVisibleRanges(), e429 && (this.scrollTarget = e429), !this.mustEnforceCursorAssoc && t492.selectionSet && t492.view.lineWrapping && t492.state.selection.main.empty && t492.state.selection.main.assoc && (this.mustEnforceCursorAssoc = !0);
    }
    measure(t493) {
        let e430 = t493.contentDOM, i286 = window.getComputedStyle(e430), s194 = this.heightOracle, r155 = i286.whiteSpace, o110 = i286.direction == "rtl" ? P3.RTL : P3.LTR, l122 = this.heightOracle.mustRefreshForStyle(r155, o110), h84 = l122 || this.mustMeasureContent || this.contentDOMHeight != e430.clientHeight, a72 = 0, c59 = 0;
        if (h84) {
            this.mustMeasureContent = !1, this.contentDOMHeight = e430.clientHeight;
            let y22 = parseInt(i286.paddingTop) || 0, N14 = parseInt(i286.paddingBottom) || 0;
            (this.paddingTop != y22 || this.paddingBottom != N14) && (a72 |= 8, this.paddingTop = y22, this.paddingBottom = N14);
        }
        let f52 = this.printing ? {
            top: -100000000,
            bottom: 100000000,
            left: -100000000,
            right: 100000000
        } : vn(e430, this.paddingTop), d50 = f52.top - this.pixelViewport.top, u53 = f52.bottom - this.pixelViewport.bottom;
        this.pixelViewport = f52;
        let g27 = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (g27 != this.inView && (this.inView = g27, g27 && (h84 = !0)), !this.inView) return 0;
        let m29 = e430.clientWidth;
        if ((this.contentDOMWidth != m29 || this.editorHeight != t493.scrollDOM.clientHeight || this.editorWidth != t493.scrollDOM.clientWidth) && (this.contentDOMWidth = m29, this.editorHeight = t493.scrollDOM.clientHeight, this.editorWidth = t493.scrollDOM.clientWidth, a72 |= 8), h84) {
            let y23 = t493.docView.measureVisibleLineHeights();
            if (s194.mustRefreshForHeights(y23) && (l122 = !0), l122 || s194.lineWrapping && Math.abs(m29 - this.contentDOMWidth) > s194.charWidth) {
                let { lineHeight: N15 , charWidth: v15  } = t493.docView.measureTextSize();
                l122 = s194.refresh(r155, o110, N15, v15, m29 / v15, y23), l122 && (t493.docView.minWidth = 0, a72 |= 8);
            }
            d50 > 0 && u53 > 0 ? c59 = Math.max(d50, u53) : d50 < 0 && u53 < 0 && (c59 = Math.min(d50, u53)), s194.heightChanged = !1, this.heightMap = this.heightMap.updateHeight(s194, 0, l122, new Ce(this.viewport.from, y23)), s194.heightChanged && (a72 |= 2);
        }
        let b20 = !this.viewportIsAppropriate(this.viewport, c59) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return b20 && (this.viewport = this.getViewport(c59, this.scrollTarget)), this.updateForViewport(), (a72 & 2 || b20) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4000) && this.updateLineGaps(this.ensureLineGaps(l122 ? [] : this.lineGaps)), a72 |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, t493.docView.enforceCursorAssoc()), a72;
    }
    get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top);
    }
    get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom);
    }
    getViewport(t494, e431) {
        let i287 = 0.5 - Math.max(-0.5, Math.min(0.5, t494 / 1000 / 2)), s195 = this.heightMap, r156 = this.state.doc, { visibleTop: o111 , visibleBottom: l123  } = this, h85 = new Ct(s195.lineAt(o111 - i287 * 1000, x3.ByHeight, r156, 0, 0).from, s195.lineAt(l123 + (1 - i287) * 1000, x3.ByHeight, r156, 0, 0).to);
        if (e431) {
            let { head: a73  } = e431.range, c60 = this.editorHeight;
            if (a73 < h85.from || a73 > h85.to) {
                let f53 = s195.lineAt(a73, x3.ByPos, r156, 0, 0), d51;
                e431.y == "center" ? d51 = (f53.top + f53.bottom) / 2 - c60 / 2 : e431.y == "start" || e431.y == "nearest" && a73 < h85.from ? d51 = f53.top : d51 = f53.bottom - c60, h85 = new Ct(s195.lineAt(d51 - 1000 / 2, x3.ByHeight, r156, 0, 0).from, s195.lineAt(d51 + c60 + 1000 / 2, x3.ByHeight, r156, 0, 0).to);
            }
        }
        return h85;
    }
    mapViewport(t495, e432) {
        let i288 = e432.mapPos(t495.from, -1), s196 = e432.mapPos(t495.to, 1);
        return new Ct(this.heightMap.lineAt(i288, x3.ByPos, this.state.doc, 0, 0).from, this.heightMap.lineAt(s196, x3.ByPos, this.state.doc, 0, 0).to);
    }
    viewportIsAppropriate({ from: t496 , to: e433  }, i289 = 0) {
        if (!this.inView) return !0;
        let { top: s197  } = this.heightMap.lineAt(t496, x3.ByPos, this.state.doc, 0, 0), { bottom: r157  } = this.heightMap.lineAt(e433, x3.ByPos, this.state.doc, 0, 0), { visibleTop: o112 , visibleBottom: l124  } = this;
        return (t496 == 0 || s197 <= o112 - Math.max(10, Math.min(-i289, 250))) && (e433 == this.state.doc.length || r157 >= l124 + Math.max(10, Math.min(i289, 250))) && s197 > o112 - 2 * 1000 && r157 < l124 + 2 * 1000;
    }
    mapLineGaps(t497, e434) {
        if (!t497.length || e434.empty) return t497;
        let i290 = [];
        for (let s198 of t497)e434.touchesRange(s198.from, s198.to) || i290.push(new Gt(e434.mapPos(s198.from), e434.mapPos(s198.to), s198.size));
        return i290;
    }
    ensureLineGaps(t498) {
        let e435 = [];
        if (this.heightOracle.direction != P3.LTR) return e435;
        for (let i291 of this.viewportLines){
            if (i291.length < 4000) continue;
            let s199 = Mn(i291.from, i291.to, this.state);
            if (s199.total < 4000) continue;
            let r158, o113;
            if (this.heightOracle.lineWrapping) {
                let a74 = 2000 / this.heightOracle.lineLength * this.heightOracle.lineHeight;
                r158 = Yt(s199, (this.visibleTop - i291.top - a74) / i291.height), o113 = Yt(s199, (this.visibleBottom - i291.top + a74) / i291.height);
            } else {
                let a75 = s199.total * this.heightOracle.charWidth, c61 = 2000 * this.heightOracle.charWidth;
                r158 = Yt(s199, (this.pixelViewport.left - c61) / a75), o113 = Yt(s199, (this.pixelViewport.right + c61) / a75);
            }
            let l125 = [];
            r158 > i291.from && l125.push({
                from: i291.from,
                to: r158
            }), o113 < i291.to && l125.push({
                from: o113,
                to: i291.to
            });
            let h86 = this.state.selection.main;
            h86.from >= i291.from && h86.from <= i291.to && is(l125, h86.from - 10, h86.from + 10), !h86.empty && h86.to >= i291.from && h86.to <= i291.to && is(l125, h86.to - 10, h86.to + 10);
            for (let { from: a76 , to: c62  } of l125)c62 - a76 > 1000 && e435.push(Cn(t498, (f54)=>f54.from >= i291.from && f54.to <= i291.to && Math.abs(f54.from - a76) < 1000 && Math.abs(f54.to - c62) < 1000
            ) || new Gt(a76, c62, this.gapSize(i291, a76, c62, s199)));
        }
        return e435;
    }
    gapSize(t499, e436, i292, s200) {
        let r159 = es(s200, i292) - es(s200, e436);
        return this.heightOracle.lineWrapping ? t499.height * r159 : s200.total * this.heightOracle.charWidth * r159;
    }
    updateLineGaps(t500) {
        Gt.same(t500, this.lineGaps) || (this.lineGaps = t500, this.lineGapDeco = w4.set(t500.map((e437)=>e437.draw(this.heightOracle.lineWrapping)
        )));
    }
    computeVisibleRanges() {
        let t501 = this.state.facet(ht);
        this.lineGaps.length && (t501 = t501.concat(this.lineGapDeco));
        let e438 = [];
        f.spans(t501, this.viewport.from, this.viewport.to, {
            span (s201, r160) {
                e438.push({
                    from: s201,
                    to: r160
                });
            },
            point () {}
        }, 20);
        let i293 = e438.length != this.visibleRanges.length || this.visibleRanges.some((s202, r161)=>s202.from != e438[r161].from || s202.to != e438[r161].to
        );
        return this.visibleRanges = e438, i293 ? 4 : 0;
    }
    lineBlockAt(t502) {
        return t502 >= this.viewport.from && t502 <= this.viewport.to && this.viewportLines.find((e439)=>e439.from <= t502 && e439.to >= t502
        ) || Dt(this.heightMap.lineAt(t502, x3.ByPos, this.state.doc, 0, 0), this.scaler);
    }
    lineBlockAtHeight(t503) {
        return Dt(this.heightMap.lineAt(this.scaler.fromDOM(t503), x3.ByHeight, this.state.doc, 0, 0), this.scaler);
    }
    elementAtHeight(t504) {
        return Dt(this.heightMap.blockAt(this.scaler.fromDOM(t504), this.state.doc, 0, 0), this.scaler);
    }
    get docHeight() {
        return this.scaler.toDOM(this.heightMap.height);
    }
    get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom;
    }
}, Ct = class {
    constructor(t505, e440){
        this.from = t505, this.to = e440;
    }
};
function Mn(n102, t506, e441) {
    let i294 = [], s203 = n102, r162 = 0;
    return f.spans(e441.facet(ht), n102, t506, {
        span () {},
        point (o114, l126) {
            o114 > s203 && (i294.push({
                from: s203,
                to: o114
            }), r162 += o114 - s203), s203 = l126;
        }
    }, 20), s203 < t506 && (i294.push({
        from: s203,
        to: t506
    }), r162 += t506 - s203), {
        total: r162,
        ranges: i294
    };
}
function Yt({ total: n103 , ranges: t507  }, e442) {
    if (e442 <= 0) return t507[0].from;
    if (e442 >= 1) return t507[t507.length - 1].to;
    let i295 = Math.floor(n103 * e442);
    for(let s204 = 0;; s204++){
        let { from: r163 , to: o115  } = t507[s204], l127 = o115 - r163;
        if (i295 <= l127) return r163 + i295;
        i295 -= l127;
    }
}
function es(n104, t508) {
    let e443 = 0;
    for (let { from: i296 , to: s205  } of n104.ranges){
        if (t508 <= s205) {
            e443 += t508 - i296;
            break;
        }
        e443 += s205 - i296;
    }
    return e443 / n104.total;
}
function is(n105, t509, e444) {
    for(let i297 = 0; i297 < n105.length; i297++){
        let s206 = n105[i297];
        if (s206.from < e444 && s206.to > t509) {
            let r164 = [];
            s206.from < t509 && r164.push({
                from: s206.from,
                to: t509
            }), s206.to > e444 && r164.push({
                from: e444,
                to: s206.to
            }), n105.splice(i297, 1, ...r164), i297 += r164.length - 1;
        }
    }
}
function Cn(n106, t510) {
    for (let e445 of n106)if (t510(e445)) return e445;
}
var ss = {
    toDOM (n107) {
        return n107;
    },
    fromDOM (n108) {
        return n108;
    },
    scale: 1
}, ns = class {
    constructor(t511, e446, i298){
        let s207 = 0, r165 = 0, o116 = 0;
        this.viewports = i298.map(({ from: l128 , to: h87  })=>{
            let a77 = e446.lineAt(l128, x3.ByPos, t511, 0, 0).top, c63 = e446.lineAt(h87, x3.ByPos, t511, 0, 0).bottom;
            return s207 += c63 - a77, {
                from: l128,
                to: h87,
                top: a77,
                bottom: c63,
                domTop: 0,
                domBottom: 0
            };
        }), this.scale = (7000000 - s207) / (e446.height - s207);
        for (let l4 of this.viewports)l4.domTop = o116 + (l4.top - r165) * this.scale, o116 = l4.domBottom = l4.domTop + (l4.bottom - l4.top), r165 = l4.bottom;
    }
    toDOM(t512) {
        for(let e447 = 0, i299 = 0, s208 = 0;; e447++){
            let r166 = e447 < this.viewports.length ? this.viewports[e447] : null;
            if (!r166 || t512 < r166.top) return s208 + (t512 - i299) * this.scale;
            if (t512 <= r166.bottom) return r166.domTop + (t512 - r166.top);
            i299 = r166.bottom, s208 = r166.domBottom;
        }
    }
    fromDOM(t513) {
        for(let e448 = 0, i300 = 0, s209 = 0;; e448++){
            let r167 = e448 < this.viewports.length ? this.viewports[e448] : null;
            if (!r167 || t513 < r167.domTop) return i300 + (t513 - s209) / this.scale;
            if (t513 <= r167.domBottom) return r167.top + (t513 - r167.domTop);
            i300 = r167.bottom, s209 = r167.domBottom;
        }
    }
};
function Dt(n109, t514) {
    if (t514.scale == 1) return n109;
    let e449 = t514.toDOM(n109.top), i301 = t514.toDOM(n109.bottom);
    return new K1(n109.from, n109.length, e449, i301 - e449, Array.isArray(n109.type) ? n109.type.map((s210)=>Dt(s210, t514)
    ) : n109.type);
}
var rs = O1.define({
    combine: (n110)=>n110.join(" ")
}), Oe1 = O1.define({
    combine: (n111)=>n111.indexOf(!0) > -1
}), Te = x1.newName(), os = x1.newName(), ls = x1.newName(), hs = {
    "&light": "." + os,
    "&dark": "." + ls
};
function Re(n112, t515, e450) {
    return new x1(t515, {
        finish (i302) {
            return /&/.test(i302) ? i302.replace(/&\w*/, (s211)=>{
                if (s211 == "&") return n112;
                if (!e450 || !e450[s211]) throw new RangeError(`Unsupported selector: ${s211}`);
                return e450[s211];
            }) : n112 + " " + i302;
        }
    });
}
var Dn = Re("." + Te, {
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
    ".cm-tab": {
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "bottom"
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
}, hs), kn = {
    childList: !0,
    characterData: !0,
    subtree: !0,
    attributes: !0,
    characterDataOldValue: !0
}, Le = p3.ie && p3.ie_version <= 11, as = class {
    constructor(t516, e451, i303){
        this.view = t516, this.onChange = e451, this.onScrollChanged = i303, this.active = !1, this.selectionRange = new je, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.scrollTargets = [], this.intersection = null, this.resize = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.parentCheck = -1, this.dom = t516.contentDOM, this.observer = new MutationObserver((s212)=>{
            for (let r2 of s212)this.queue.push(r2);
            (p3.ie && p3.ie_version <= 11 || p3.ios && t516.composing) && s212.some((r168)=>r168.type == "childList" && r168.removedNodes.length || r168.type == "characterData" && r168.oldValue.length > r168.target.nodeValue.length
            ) ? this.flushSoon() : this.flush();
        }), Le && (this.onCharData = (s213)=>{
            this.queue.push({
                target: s213.target,
                type: "characterData",
                oldValue: s213.prevValue
            }), this.flushSoon();
        }), this.onSelectionChange = this.onSelectionChange.bind(this), typeof ResizeObserver == "function" && (this.resize = new ResizeObserver(()=>{
            this.view.docView.lastUpdate < Date.now() - 75 && this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(()=>{
                this.resizeTimeout = -1, this.view.requestMeasure();
            }, 50));
        }), this.resize.observe(t516.scrollDOM)), this.start(), this.onScroll = this.onScroll.bind(this), window.addEventListener("scroll", this.onScroll), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((s214)=>{
            this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1000)), s214.length > 0 && s214[s214.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
        }, {}), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((s215)=>{
            s215.length > 0 && s215[s215.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
        }, {})), this.listenForScroll(), this.readSelectionRange(), this.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
    }
    onScroll(t517) {
        this.intersecting && this.flush(!1), this.onScrollChanged(t517);
    }
    updateGaps(t518) {
        if (this.gapIntersection && (t518.length != this.gaps.length || this.gaps.some((e452, i304)=>e452 != t518[i304]
        ))) {
            this.gapIntersection.disconnect();
            for (let e453 of t518)this.gapIntersection.observe(e453);
            this.gaps = t518;
        }
    }
    onSelectionChange(t519) {
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let { view: e454  } = this, i305 = this.selectionRange;
        if (e454.state.facet(At) ? e454.root.activeElement != this.dom : !Xt(e454.dom, i305)) return;
        let s216 = i305.anchorNode && e454.docView.nearest(i305.anchorNode);
        s216 && s216.ignoreEvent(t519) || ((p3.ie && p3.ie_version <= 11 || p3.android && p3.chrome) && !e454.state.selection.main.empty && i305.focusNode && Nt(i305.focusNode, i305.focusOffset, i305.anchorNode, i305.anchorOffset) ? this.flushSoon() : this.flush(!1));
    }
    readSelectionRange() {
        let { root: t520  } = this.view, e455 = Ht(t520), i306 = p3.safari && t520.nodeType == 11 && zs() == this.view.contentDOM && On(this.view) || e455;
        return this.selectionRange.eq(i306) ? !1 : (this.selectionRange.setRange(i306), this.selectionChanged = !0);
    }
    setSelectionRange(t521, e456) {
        this.selectionRange.set(t521.node, t521.offset, e456.node, e456.offset), this.selectionChanged = !1;
    }
    listenForScroll() {
        this.parentCheck = -1;
        let t522 = 0, e457 = null;
        for(let i307 = this.dom; i307;)if (i307.nodeType == 1) !e457 && t522 < this.scrollTargets.length && this.scrollTargets[t522] == i307 ? t522++ : e457 || (e457 = this.scrollTargets.slice(0, t522)), e457 && e457.push(i307), i307 = i307.assignedSlot || i307.parentNode;
        else if (i307.nodeType == 11) i307 = i307.host;
        else break;
        if (t522 < this.scrollTargets.length && !e457 && (e457 = this.scrollTargets.slice(0, t522)), e457) {
            for (let i308 of this.scrollTargets)i308.removeEventListener("scroll", this.onScroll);
            for (let i3 of this.scrollTargets = e457)i3.addEventListener("scroll", this.onScroll);
        }
    }
    ignore(t523) {
        if (!this.active) return t523();
        try {
            return this.stop(), t523();
        } finally{
            this.start(), this.clear();
        }
    }
    start() {
        this.active || (this.observer.observe(this.dom, kn), Le && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
    }
    stop() {
        !this.active || (this.active = !1, this.observer.disconnect(), Le && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
    }
    clear() {
        this.observer.takeRecords(), this.queue.length = 0, this.selectionChanged = !1;
    }
    delayAndroidKey(t524, e458) {
        this.delayedAndroidKey || requestAnimationFrame(()=>{
            let i309 = this.delayedAndroidKey;
            this.delayedAndroidKey = null;
            let s217 = this.view.state;
            St(this.view.contentDOM, i309.key, i309.keyCode) ? this.processRecords() : this.flush(), this.view.state == s217 && this.view.update([]);
        }), (!this.delayedAndroidKey || t524 == "Enter") && (this.delayedAndroidKey = {
            key: t524,
            keyCode: e458
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
        let t525 = this.queue;
        for (let r169 of this.observer.takeRecords())t525.push(r169);
        t525.length && (this.queue = []);
        let e459 = -1, i310 = -1, s218 = !1;
        for (let r3 of t525){
            let o117 = this.readMutation(r3);
            !o117 || (o117.typeOver && (s218 = !0), e459 == -1 ? { from: e459 , to: i310  } = o117 : (e459 = Math.min(o117.from, e459), i310 = Math.max(o117.to, i310)));
        }
        return {
            from: e459,
            to: i310,
            typeOver: s218
        };
    }
    flush(t526 = !0) {
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return;
        t526 && this.readSelectionRange();
        let { from: e460 , to: i311 , typeOver: s219  } = this.processRecords(), r170 = this.selectionChanged && Xt(this.dom, this.selectionRange);
        if (e460 < 0 && !r170) return;
        this.selectionChanged = !1;
        let o118 = this.view.state;
        this.onChange(e460, i311, s219), this.view.state == o118 && this.view.update([]);
    }
    readMutation(t527) {
        let e461 = this.view.docView.nearest(t527.target);
        if (!e461 || e461.ignoreMutation(t527)) return null;
        if (e461.markDirty(t527.type == "attributes"), t527.type == "attributes" && (e461.dirty |= 4), t527.type == "childList") {
            let i312 = cs(e461, t527.previousSibling || t527.target.previousSibling, -1), s220 = cs(e461, t527.nextSibling || t527.target.nextSibling, 1);
            return {
                from: i312 ? e461.posAfter(i312) : e461.posAtStart,
                to: s220 ? e461.posBefore(s220) : e461.posAtEnd,
                typeOver: !1
            };
        } else return t527.type == "characterData" ? {
            from: e461.posAtStart,
            to: e461.posAtEnd,
            typeOver: t527.target.nodeValue == t527.oldValue
        } : null;
    }
    destroy() {
        var t528, e462, i313;
        this.stop(), (t528 = this.intersection) === null || t528 === void 0 || t528.disconnect(), (e462 = this.gapIntersection) === null || e462 === void 0 || e462.disconnect(), (i313 = this.resize) === null || i313 === void 0 || i313.disconnect();
        for (let s221 of this.scrollTargets)s221.removeEventListener("scroll", this.onScroll);
        window.removeEventListener("scroll", this.onScroll), this.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout);
    }
};
function cs(n113, t529, e463) {
    for(; t529;){
        let i314 = M2.get(t529);
        if (i314 && i314.parent == n113) return i314;
        let s222 = t529.parentNode;
        t529 = s222 != n113.dom ? s222 : e463 > 0 ? t529.nextSibling : t529.previousSibling;
    }
    return null;
}
function On(n114) {
    let t530 = null;
    function e464(h88) {
        h88.preventDefault(), h88.stopImmediatePropagation(), t530 = h88.getTargetRanges()[0];
    }
    if (n114.contentDOM.addEventListener("beforeinput", e464, !0), document.execCommand("indent"), n114.contentDOM.removeEventListener("beforeinput", e464, !0), !t530) return null;
    let i315 = t530.startContainer, s223 = t530.startOffset, r171 = t530.endContainer, o119 = t530.endOffset, l129 = n114.docView.domAtPos(n114.state.selection.main.anchor);
    return Nt(l129.node, l129.offset, r171, o119) && ([i315, s223, r171, o119] = [
        r171,
        o119,
        i315,
        s223
    ]), {
        anchorNode: i315,
        anchorOffset: s223,
        focusNode: r171,
        focusOffset: o119
    };
}
function Tn(n115, t531, e465, i316) {
    let s224, r172, o120 = n115.state.selection.main;
    if (t531 > -1) {
        let l130 = n115.docView.domBoundsAround(t531, e465, 0);
        if (!l130 || n115.state.readOnly) return;
        let { from: h89 , to: a78  } = l130, c64 = n115.docView.impreciseHead || n115.docView.impreciseAnchor ? [] : Ln(n115), f55 = new pe1(c64, n115);
        f55.readRange(l130.startDOM, l130.endDOM), r172 = Bn(c64, h89);
        let d52 = o120.from, u54 = null;
        (n115.inputState.lastKeyCode === 8 && n115.inputState.lastKeyTime > Date.now() - 100 || p3.android && f55.text.length < a78 - h89) && (d52 = o120.to, u54 = "end");
        let g28 = Rn(n115.state.sliceDoc(h89, a78), f55.text, d52 - h89, u54);
        g28 && (s224 = {
            from: h89 + g28.from,
            to: h89 + g28.toA,
            insert: n115.state.toText(f55.text.slice(g28.from, g28.toB))
        });
    } else if (n115.hasFocus || !n115.state.facet(At)) {
        let l131 = n115.observer.selectionRange, { impreciseHead: h90 , impreciseAnchor: a79  } = n115.docView, c65 = h90 && h90.node == l131.focusNode && h90.offset == l131.focusOffset || !Ut(n115.contentDOM, l131.focusNode) ? n115.state.selection.main.head : n115.docView.posFromDOM(l131.focusNode, l131.focusOffset), f56 = a79 && a79.node == l131.anchorNode && a79.offset == l131.anchorOffset || !Ut(n115.contentDOM, l131.anchorNode) ? n115.state.selection.main.anchor : n115.docView.posFromDOM(l131.anchorNode, l131.anchorOffset);
        (c65 != o120.head || f56 != o120.anchor) && (r172 = p.single(f56, c65));
    }
    if (!(!s224 && !r172)) {
        if (!s224 && i316 && !o120.empty && r172 && r172.main.empty ? s224 = {
            from: o120.from,
            to: o120.to,
            insert: n115.state.doc.slice(o120.from, o120.to)
        } : s224 && s224.from >= o120.from && s224.to <= o120.to && (s224.from != o120.from || s224.to != o120.to) && o120.to - o120.from - (s224.to - s224.from) <= 4 && (s224 = {
            from: o120.from,
            to: o120.to,
            insert: n115.state.doc.slice(o120.from, s224.from).append(s224.insert).append(n115.state.doc.slice(s224.to, o120.to))
        }), s224) {
            let l132 = n115.state;
            if (p3.ios && n115.inputState.flushIOSKey(n115) || p3.android && (s224.from == o120.from && s224.to == o120.to && s224.insert.length == 1 && s224.insert.lines == 2 && St(n115.contentDOM, "Enter", 13) || s224.from == o120.from - 1 && s224.to == o120.to && s224.insert.length == 0 && St(n115.contentDOM, "Backspace", 8) || s224.from == o120.from && s224.to == o120.to + 1 && s224.insert.length == 0 && St(n115.contentDOM, "Delete", 46))) return;
            let h91 = s224.insert.toString();
            if (n115.state.facet(ui).some((f57)=>f57(n115, s224.from, s224.to, h91)
            )) return;
            n115.inputState.composing >= 0 && n115.inputState.composing++;
            let a80;
            if (s224.from >= o120.from && s224.to <= o120.to && s224.to - s224.from >= (o120.to - o120.from) / 3 && (!r172 || r172.main.empty && r172.main.from == s224.from + s224.insert.length)) {
                let f58 = o120.from < s224.from ? l132.sliceDoc(o120.from, s224.from) : "", d53 = o120.to > s224.to ? l132.sliceDoc(s224.to, o120.to) : "";
                a80 = l132.replaceSelection(n115.state.toText(f58 + s224.insert.sliceString(0, void 0, n115.state.lineBreak) + d53));
            } else {
                let f59 = l132.changes(s224);
                a80 = {
                    changes: f59,
                    selection: r172 && !l132.selection.main.eq(r172.main) && r172.main.to <= f59.newLength ? l132.selection.replaceRange(r172.main) : void 0
                };
            }
            let c66 = "input.type";
            n115.composing && (c66 += ".compose", n115.inputState.compositionFirstChange && (c66 += ".start", n115.inputState.compositionFirstChange = !1)), n115.dispatch(a80, {
                scrollIntoView: !0,
                userEvent: c66
            });
        } else if (r172 && !r172.main.eq(o120)) {
            let l133 = !1, h92 = "select";
            n115.inputState.lastSelectionTime > Date.now() - 50 && (n115.inputState.lastSelectionOrigin == "select" && (l133 = !0), h92 = n115.inputState.lastSelectionOrigin), n115.dispatch({
                selection: r172,
                scrollIntoView: l133,
                userEvent: h92
            });
        }
    }
}
function Rn(n116, t532, e466, i317) {
    let s225 = Math.min(n116.length, t532.length), r173 = 0;
    for(; r173 < s225 && n116.charCodeAt(r173) == t532.charCodeAt(r173);)r173++;
    if (r173 == s225 && n116.length == t532.length) return null;
    let o121 = n116.length, l134 = t532.length;
    for(; o121 > 0 && l134 > 0 && n116.charCodeAt(o121 - 1) == t532.charCodeAt(l134 - 1);)o121--, l134--;
    if (i317 == "end") {
        let h93 = Math.max(0, r173 - Math.min(o121, l134));
        e466 -= o121 + h93 - r173;
    }
    return o121 < r173 && n116.length < t532.length ? (r173 -= e466 <= r173 && e466 >= o121 ? r173 - e466 : 0, l134 = r173 + (l134 - o121), o121 = r173) : l134 < r173 && (r173 -= e466 <= r173 && e466 >= l134 ? r173 - e466 : 0, o121 = r173 + (o121 - l134), l134 = r173), {
        from: r173,
        toA: o121,
        toB: l134
    };
}
function Ln(n117) {
    let t533 = [];
    if (n117.root.activeElement != n117.contentDOM) return t533;
    let { anchorNode: e467 , anchorOffset: i318 , focusNode: s226 , focusOffset: r174  } = n117.observer.selectionRange;
    return e467 && (t533.push(new me1(e467, i318)), (s226 != e467 || r174 != i318) && t533.push(new me1(s226, r174))), t533;
}
function Bn(n118, t534) {
    if (n118.length == 0) return null;
    let e468 = n118[0].pos, i319 = n118.length == 2 ? n118[1].pos : e468;
    return e468 > -1 && i319 > -1 ? p.single(e468 + t534, i319 + t534) : null;
}
var D2 = class {
    constructor(t535 = {}){
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.style.cssText = "position: absolute; top: -10000px", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), this._dispatch = t535.dispatch || ((e469)=>this.update([
                e469
            ])
        ), this.dispatch = this.dispatch.bind(this), this.root = t535.root || Ks(t535.parent) || document, this.viewState = new ke(t535.state || w1.create()), this.plugins = this.state.facet(vt).map((e470)=>new qt(e470)
        );
        for (let e1 of this.plugins)e1.update(this);
        this.observer = new as(this, (e471, i320, s227)=>{
            Tn(this, e471, i320, s227);
        }, (e472)=>{
            this.inputState.runScrollHandlers(this, e472), this.observer.intersecting && this.measure();
        }), this.inputState = new Ei(this), this.docView = new be1(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, Pn(), this.requestMeasure(), t535.parent && t535.parent.appendChild(this.dom);
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
    dispatch(...t536) {
        this._dispatch(t536.length == 1 && t536[0] instanceof A1 ? t536[0] : this.state.update(...t536));
    }
    update(t537) {
        if (this.updateState != 0) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let e473 = !1, i321, s228 = this.state;
        for (let o122 of t537){
            if (o122.startState != s228) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
            s228 = o122.state;
        }
        if (this.destroyed) {
            this.viewState.state = s228;
            return;
        }
        if (s228.facet(w1.phrases) != this.state.facet(w1.phrases)) return this.setState(s228);
        i321 = new ue1(this, s228, t537);
        let r175 = this.viewState.scrollTarget;
        try {
            this.updateState = 2;
            for (let o10 of t537){
                if (r175 && (r175 = r175.map(o10.changes)), o10.scrollIntoView) {
                    let { main: l135  } = o10.state.selection;
                    r175 = new ot(l135.empty ? l135 : p.cursor(l135.head, l135.head > l135.anchor ? -1 : 1));
                }
                for (let l136 of o10.effects)l136.is(ce1) ? r175 = new ot(l136.value) : l136.is(di) ? r175 = new ot(l136.value, "center") : l136.is(gi) && (r175 = l136.value);
            }
            this.viewState.update(i321, r175), this.bidiCache = kt.update(this.bidiCache, i321.changes), i321.empty || (this.updatePlugins(i321), this.inputState.update(i321)), e473 = this.docView.update(i321), this.state.facet(Mt) != this.styleModules && this.mountStyles(), this.updateAttrs(), this.showAnnouncements(t537), this.docView.updateSelection(e473, t537.some((o123)=>o123.isUserEvent("select.pointer")
            ));
        } finally{
            this.updateState = 0;
        }
        if ((e473 || r175 || this.viewState.mustEnforceCursorAssoc) && this.requestMeasure(), !i321.empty) for (let o9 of this.state.facet(ae1))o9(i321);
    }
    setState(t538) {
        if (this.updateState != 0) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) {
            this.viewState.state = t538;
            return;
        }
        this.updateState = 2;
        try {
            for (let e3 of this.plugins)e3.destroy(this);
            this.viewState = new ke(t538), this.plugins = t538.facet(vt).map((e474)=>new qt(e474)
            ), this.pluginMap.clear();
            for (let e2 of this.plugins)e2.update(this);
            this.docView = new be1(this), this.inputState.ensureHandlers(this), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
        } finally{
            this.updateState = 0;
        }
        this.requestMeasure();
    }
    updatePlugins(t539) {
        let e475 = t539.startState.facet(vt), i322 = t539.state.facet(vt);
        if (e475 != i322) {
            let s229 = [];
            for (let r176 of i322){
                let o124 = e475.indexOf(r176);
                if (o124 < 0) s229.push(new qt(r176));
                else {
                    let l137 = this.plugins[o124];
                    l137.mustUpdate = t539, s229.push(l137);
                }
            }
            for (let r4 of this.plugins)r4.mustUpdate != t539 && r4.destroy(this);
            this.plugins = s229, this.pluginMap.clear(), this.inputState.ensureHandlers(this);
        } else for (let s230 of this.plugins)s230.mustUpdate = t539;
        for(let s3 = 0; s3 < this.plugins.length; s3++)this.plugins[s3].update(this);
    }
    measure(t540 = !0) {
        if (this.destroyed) return;
        this.measureScheduled > -1 && cancelAnimationFrame(this.measureScheduled), this.measureScheduled = 0, t540 && this.observer.flush();
        let e476 = null;
        try {
            for(let i323 = 0;; i323++){
                this.updateState = 1;
                let s231 = this.viewport, r177 = this.viewState.measure(this);
                if (!r177 && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
                if (i323 > 5) {
                    console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
                    break;
                }
                let o125 = [];
                r177 & 4 || ([this.measureRequests, o125] = [
                    o125,
                    this.measureRequests
                ]);
                let l138 = o125.map((c67)=>{
                    try {
                        return c67.read(this);
                    } catch (f60) {
                        return lt(this.state, f60), fs;
                    }
                }), h94 = new ue1(this, this.state), a81 = !1;
                h94.flags |= r177, e476 ? e476.flags |= r177 : e476 = h94, this.updateState = 2, h94.empty || (this.updatePlugins(h94), this.inputState.update(h94), this.updateAttrs(), a81 = this.docView.update(h94));
                for(let c1 = 0; c1 < o125.length; c1++)if (l138[c1] != fs) try {
                    let f61 = o125[c1];
                    f61.write && f61.write(l138[c1], this);
                } catch (f62) {
                    lt(this.state, f62);
                }
                if (this.viewState.scrollTarget && (this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null), a81 && this.docView.updateSelection(!0), this.viewport.from == s231.from && this.viewport.to == s231.to && this.measureRequests.length == 0) break;
            }
        } finally{
            this.updateState = 0, this.measureScheduled = -1;
        }
        if (e476 && !e476.empty) for (let i324 of this.state.facet(ae1))i324(e476);
    }
    get themeClasses() {
        return Te + " " + (this.state.facet(Oe1) ? ls : os) + " " + this.state.facet(rs);
    }
    updateAttrs() {
        let t541 = us(this, bi, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
        }), e477 = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            translate: "no",
            contenteditable: this.state.facet(At) ? "true" : "false",
            class: "cm-content",
            style: `${p3.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
        };
        this.state.readOnly && (e477["aria-readonly"] = "true"), us(this, fe1, e477), this.observer.ignore(()=>{
            oe1(this.contentDOM, this.contentAttrs, e477), oe1(this.dom, this.editorAttrs, t541);
        }), this.editorAttrs = t541, this.contentAttrs = e477;
    }
    showAnnouncements(t542) {
        let e478 = !0;
        for (let i325 of t542)for (let s232 of i325.effects)if (s232.is(D2.announce)) {
            e478 && (this.announceDOM.textContent = ""), e478 = !1;
            let r178 = this.announceDOM.appendChild(document.createElement("div"));
            r178.textContent = s232.value;
        }
    }
    mountStyles() {
        this.styleModules = this.state.facet(Mt), x1.mount(this.root, this.styleModules.concat(Dn).reverse());
    }
    readMeasured() {
        if (this.updateState == 2) throw new Error("Reading the editor layout isn't allowed during an update");
        this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
    }
    requestMeasure(t543) {
        if (this.measureScheduled < 0 && (this.measureScheduled = requestAnimationFrame(()=>this.measure()
        )), t543) {
            if (t543.key != null) {
                for(let e479 = 0; e479 < this.measureRequests.length; e479++)if (this.measureRequests[e479].key === t543.key) {
                    this.measureRequests[e479] = t543;
                    return;
                }
            }
            this.measureRequests.push(t543);
        }
    }
    pluginField(t544) {
        let e480 = [];
        for (let i326 of this.plugins)i326.update(this).takeField(t544, e480);
        return e480;
    }
    plugin(t545) {
        let e481 = this.pluginMap.get(t545);
        return (e481 === void 0 || e481 && e481.spec != t545) && this.pluginMap.set(t545, e481 = this.plugins.find((i327)=>i327.spec == t545
        ) || null), e481 && e481.update(this).value;
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
    blockAtHeight(t546, e482) {
        let i328 = Be(e482, this);
        return this.elementAtHeight(t546 - i328).moveY(i328);
    }
    elementAtHeight(t547) {
        return this.readMeasured(), this.viewState.elementAtHeight(t547);
    }
    visualLineAtHeight(t548, e483) {
        let i329 = Be(e483, this);
        return this.lineBlockAtHeight(t548 - i329).moveY(i329);
    }
    lineBlockAtHeight(t549) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(t549);
    }
    viewportLines(t550, e484) {
        let i330 = Be(e484, this);
        for (let s233 of this.viewportLineBlocks)t550(s233.moveY(i330));
    }
    get viewportLineBlocks() {
        return this.viewState.viewportLines;
    }
    visualLineAt(t551, e485 = 0) {
        return this.lineBlockAt(t551).moveY(e485 + this.viewState.paddingTop);
    }
    lineBlockAt(t552) {
        return this.viewState.lineBlockAt(t552);
    }
    get contentHeight() {
        return this.viewState.contentHeight;
    }
    moveByChar(t553, e486, i331) {
        return xe1(this, t553, Bi(this, t553, e486, i331));
    }
    moveByGroup(t554, e487) {
        return xe1(this, t554, Bi(this, t554, e487, (i332)=>cn(this, t554.head, i332)
        ));
    }
    moveToLineBoundary(t555, e488, i333 = !0) {
        return an(this, t555, e488, i333);
    }
    moveVertically(t556, e489, i334) {
        return xe1(this, t556, fn(this, t556, e489, i334));
    }
    scrollPosIntoView(t557) {
        this.dispatch({
            effects: ce1.of(p.cursor(t557))
        });
    }
    domAtPos(t558) {
        return this.docView.domAtPos(t558);
    }
    posAtDOM(t559, e490 = 0) {
        return this.docView.posFromDOM(t559, e490);
    }
    posAtCoords(t560, e491 = !0) {
        return this.readMeasured(), Ri(this, t560, e491);
    }
    coordsAtPos(t561, e492 = 1) {
        this.readMeasured();
        let i335 = this.docView.coordsAt(t561, e492);
        if (!i335 || i335.left == i335.right) return i335;
        let s234 = this.state.doc.lineAt(t561), r179 = this.bidiSpans(s234), o126 = r179[at.find(r179, t561 - s234.from, -1, e492)];
        return Wt(i335, o126.dir == P3.LTR == e492 > 0);
    }
    get defaultCharacterWidth() {
        return this.viewState.heightOracle.charWidth;
    }
    get defaultLineHeight() {
        return this.viewState.heightOracle.lineHeight;
    }
    get textDirection() {
        return this.viewState.heightOracle.direction;
    }
    get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping;
    }
    bidiSpans(t562) {
        if (t562.length > En) return Si(t562.length);
        let e493 = this.textDirection;
        for (let s235 of this.bidiCache)if (s235.from == t562.from && s235.dir == e493) return s235.order;
        let i336 = wi(t562.text, this.textDirection);
        return this.bidiCache.push(new kt(t562.from, t562.to, e493, i336)), i336;
    }
    get hasFocus() {
        var t563;
        return (document.hasFocus() || p3.safari && ((t563 = this.inputState) === null || t563 === void 0 ? void 0 : t563.lastContextMenu) > Date.now() - 30000) && this.root.activeElement == this.contentDOM;
    }
    focus() {
        this.observer.ignore(()=>{
            Ge(this.contentDOM), this.docView.updateSelection();
        });
    }
    destroy() {
        for (let t564 of this.plugins)t564.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
    }
    static scrollIntoView(t565, e494 = {}) {
        return gi.of(new ot(typeof t565 == "number" ? p.cursor(t565) : t565, e494.y, e494.x, e494.yMargin, e494.xMargin));
    }
    static domEventHandlers(t566) {
        return z2.define(()=>({})
        , {
            eventHandlers: t566
        });
    }
    static theme(t567, e495) {
        let i337 = x1.newName(), s236 = [
            rs.of(i337),
            Mt.of(Re(`.${i337}`, t567))
        ];
        return e495 && e495.dark && s236.push(Oe1.of(!0)), s236;
    }
    static baseTheme(t568) {
        return Ie.lowest(Mt.of(Re("." + Te, t568, hs)));
    }
};
D2.scrollTo = ce1;
D2.centerOn = di;
D2.styleModule = Mt;
D2.inputHandler = ui;
D2.exceptionSink = fi;
D2.updateListener = ae1;
D2.editable = At;
D2.mouseSelectionStyle = ci;
D2.dragMovesSelection = ai;
D2.clickAddsSelectionRange = hi;
D2.decorations = ht;
D2.darkTheme = Oe1;
D2.contentAttributes = fe1;
D2.editorAttributes = bi;
D2.lineWrapping = D2.contentAttributes.of({
    class: "cm-lineWrapping"
});
D2.announce = v.define();
var En = 4096;
function Be(n119, t569) {
    return (n119 ?? t569.contentDOM.getBoundingClientRect().top) + t569.viewState.paddingTop;
}
var Ee = -1;
function Pn() {
    window.addEventListener("resize", ()=>{
        Ee == -1 && (Ee = setTimeout(Hn, 50));
    });
}
function Hn() {
    Ee = -1;
    let n120 = document.querySelectorAll(".cm-content");
    for(let t570 = 0; t570 < n120.length; t570++){
        let e496 = M2.get(n120[t570]);
        e496 && e496.editorView.requestMeasure();
    }
}
var fs = {}, kt = class {
    constructor(t571, e497, i338, s237){
        this.from = t571, this.to = e497, this.dir = i338, this.order = s237;
    }
    static update(t572, e498) {
        if (e498.empty) return t572;
        let i339 = [], s238 = t572.length ? t572[t572.length - 1].dir : P3.LTR;
        for(let r180 = Math.max(0, t572.length - 10); r180 < t572.length; r180++){
            let o127 = t572[r180];
            o127.dir == s238 && !e498.touchesRange(o127.from, o127.to) && i339.push(new kt(e498.mapPos(o127.from, 1), e498.mapPos(o127.to, -1), o127.dir, o127.order));
        }
        return i339;
    }
};
function us(n121, t573, e499) {
    for(let i340 = n121.state.facet(t573), s239 = i340.length - 1; s239 >= 0; s239--){
        let r181 = i340[s239], o128 = typeof r181 == "function" ? r181(n121) : r181;
        o128 && ne1(o128, e499);
    }
    return e499;
}
var Nn = p3.mac ? "mac" : p3.windows ? "win" : p3.linux ? "linux" : "key";
function Vn(n122, t574) {
    let e500 = n122.split(/-(?!$)/), i341 = e500[e500.length - 1];
    i341 == "Space" && (i341 = " ");
    let s240, r182, o129, l139;
    for(let h95 = 0; h95 < e500.length - 1; ++h95){
        let a82 = e500[h95];
        if (/^(cmd|meta|m)$/i.test(a82)) l139 = !0;
        else if (/^a(lt)?$/i.test(a82)) s240 = !0;
        else if (/^(c|ctrl|control)$/i.test(a82)) r182 = !0;
        else if (/^s(hift)?$/i.test(a82)) o129 = !0;
        else if (/^mod$/i.test(a82)) t574 == "mac" ? l139 = !0 : r182 = !0;
        else throw new Error("Unrecognized modifier name: " + a82);
    }
    return s240 && (i341 = "Alt-" + i341), r182 && (i341 = "Ctrl-" + i341), l139 && (i341 = "Meta-" + i341), o129 && (i341 = "Shift-" + i341), i341;
}
function Pe(n123, t575, e501) {
    return t575.altKey && (n123 = "Alt-" + n123), t575.ctrlKey && (n123 = "Ctrl-" + n123), t575.metaKey && (n123 = "Meta-" + n123), e501 !== !1 && t575.shiftKey && (n123 = "Shift-" + n123), n123;
}
var Wn = D2.domEventHandlers({
    keydown (n124, t576) {
        return ps(gs(t576.state), n124, t576, "editor");
    }
}), Fn = O1.define({
    enables: Wn
}), ds = new WeakMap;
function gs(n125) {
    let t577 = n125.facet(Fn), e502 = ds.get(t577);
    return e502 || ds.set(t577, e502 = In(t577.reduce((i342, s241)=>i342.concat(s241)
    , []))), e502;
}
function lr(n126, t578, e503) {
    return ps(gs(n126.state), t578, n126, e503);
}
var it = null, zn = 4000;
function In(n127, t579 = Nn) {
    let e504 = Object.create(null), i343 = Object.create(null), s242 = (o130, l140)=>{
        let h96 = i343[o130];
        if (h96 == null) i343[o130] = l140;
        else if (h96 != l140) throw new Error("Key binding " + o130 + " is used both as a regular binding and as a multi-stroke prefix");
    }, r183 = (o131, l141, h97, a83)=>{
        let c68 = e504[o131] || (e504[o131] = Object.create(null)), f63 = l141.split(/ (?!$)/).map((g29)=>Vn(g29, t579)
        );
        for(let g110 = 1; g110 < f63.length; g110++){
            let m30 = f63.slice(0, g110).join(" ");
            s242(m30, !0), c68[m30] || (c68[m30] = {
                preventDefault: !0,
                commands: [
                    (b21)=>{
                        let y24 = it = {
                            view: b21,
                            prefix: m30,
                            scope: o131
                        };
                        return setTimeout(()=>{
                            it == y24 && (it = null);
                        }, zn), !0;
                    }
                ]
            });
        }
        let d54 = f63.join(" ");
        s242(d54, !1);
        let u55 = c68[d54] || (c68[d54] = {
            preventDefault: !1,
            commands: []
        });
        u55.commands.push(h97), a83 && (u55.preventDefault = !0);
    };
    for (let o11 of n127){
        let l142 = o11[t579] || o11.key;
        if (!!l142) for (let h98 of o11.scope ? o11.scope.split(" ") : [
            "editor"
        ])r183(h98, l142, o11.run, o11.preventDefault), o11.shift && r183(h98, "Shift-" + l142, o11.shift, o11.preventDefault);
    }
    return e504;
}
function ps(n128, t580, e505, i344) {
    let s243 = v2(t580), r184 = s243.length == 1 && s243 != " ", o132 = "", l143 = !1;
    it && it.view == e505 && it.scope == i344 && (o132 = it.prefix + " ", (l143 = Hi.indexOf(t580.keyCode) < 0) && (it = null));
    let h99 = (f64)=>{
        if (f64) {
            for (let d55 of f64.commands)if (d55(e505)) return !0;
            f64.preventDefault && (l143 = !0);
        }
        return !1;
    }, a84 = n128[i344], c69;
    if (a84) {
        if (h99(a84[o132 + Pe(s243, t580, !r184)])) return !0;
        if (r184 && (t580.shiftKey || t580.altKey || t580.metaKey) && (c69 = a1[t580.keyCode]) && c69 != s243) {
            if (h99(a84[o132 + Pe(c69, t580, !0)])) return !0;
        } else if (r184 && t580.shiftKey && h99(a84[o132 + Pe(s243, t580, !0)])) return !0;
    }
    return l143;
}
var ms = !p3.ios, Ot = O1.define({
    combine (n129) {
        return be(n129, {
            cursorBlinkRate: 1200,
            drawRangeCursor: !0
        }, {
            cursorBlinkRate: (t581, e506)=>Math.min(t581, e506)
            ,
            drawRangeCursor: (t582, e507)=>t582 || e507
        });
    }
});
function hr(n130 = {}) {
    return [
        Ot.of(n130),
        qn,
        Kn
    ];
}
var He = class {
    constructor(t583, e508, i345, s244, r185){
        this.left = t583, this.top = e508, this.width = i345, this.height = s244, this.className = r185;
    }
    draw() {
        let t584 = document.createElement("div");
        return t584.className = this.className, this.adjust(t584), t584;
    }
    adjust(t585) {
        t585.style.left = this.left + "px", t585.style.top = this.top + "px", this.width >= 0 && (t585.style.width = this.width + "px"), t585.style.height = this.height + "px";
    }
    eq(t586) {
        return this.left == t586.left && this.top == t586.top && this.width == t586.width && this.height == t586.height && this.className == t586.className;
    }
}, qn = z2.fromClass(class {
    constructor(n131){
        this.view = n131, this.rangePieces = [], this.cursors = [], this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawSel.bind(this)
        }, this.selectionLayer = n131.scrollDOM.appendChild(document.createElement("div")), this.selectionLayer.className = "cm-selectionLayer", this.selectionLayer.setAttribute("aria-hidden", "true"), this.cursorLayer = n131.scrollDOM.appendChild(document.createElement("div")), this.cursorLayer.className = "cm-cursorLayer", this.cursorLayer.setAttribute("aria-hidden", "true"), n131.requestMeasure(this.measureReq), this.setBlinkRate();
    }
    setBlinkRate() {
        this.cursorLayer.style.animationDuration = this.view.state.facet(Ot).cursorBlinkRate + "ms";
    }
    update(n132) {
        let t587 = n132.startState.facet(Ot) != n132.state.facet(Ot);
        (t587 || n132.selectionSet || n132.geometryChanged || n132.viewportChanged) && this.view.requestMeasure(this.measureReq), n132.transactions.some((e509)=>e509.scrollIntoView
        ) && (this.cursorLayer.style.animationName = this.cursorLayer.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink"), t587 && this.setBlinkRate();
    }
    readPos() {
        let { state: n133  } = this.view, t588 = n133.facet(Ot), e510 = n133.selection.ranges.map((s245)=>s245.empty ? [] : jn(this.view, s245)
        ).reduce((s246, r186)=>s246.concat(r186)
        ), i346 = [];
        for (let s4 of n133.selection.ranges){
            let r187 = s4 == n133.selection.main;
            if (s4.empty ? !r187 || ms : t588.drawRangeCursor) {
                let o133 = Gn(this.view, s4, r187);
                o133 && i346.push(o133);
            }
        }
        return {
            rangePieces: e510,
            cursors: i346
        };
    }
    drawSel({ rangePieces: n134 , cursors: t589  }) {
        if (n134.length != this.rangePieces.length || n134.some((e511, i347)=>!e511.eq(this.rangePieces[i347])
        )) {
            this.selectionLayer.textContent = "";
            for (let e512 of n134)this.selectionLayer.appendChild(e512.draw());
            this.rangePieces = n134;
        }
        if (t589.length != this.cursors.length || t589.some((e513, i348)=>!e513.eq(this.cursors[i348])
        )) {
            let e514 = this.cursorLayer.children;
            if (e514.length !== t589.length) {
                this.cursorLayer.textContent = "";
                for (let i349 of t589)this.cursorLayer.appendChild(i349.draw());
            } else t589.forEach((i350, s247)=>i350.adjust(e514[s247])
            );
            this.cursors = t589;
        }
    }
    destroy() {
        this.selectionLayer.remove(), this.cursorLayer.remove();
    }
}), bs = {
    ".cm-line": {
        "& ::selection": {
            backgroundColor: "transparent !important"
        },
        "&::selection": {
            backgroundColor: "transparent !important"
        }
    }
};
ms && (bs[".cm-line"].caretColor = "transparent !important");
var Kn = Ie.highest(D2.theme(bs));
function ys(n135) {
    let t590 = n135.scrollDOM.getBoundingClientRect();
    return {
        left: (n135.textDirection == P3.LTR ? t590.left : t590.right - n135.scrollDOM.clientWidth) - n135.scrollDOM.scrollLeft,
        top: t590.top - n135.scrollDOM.scrollTop
    };
}
function ws(n136, t591, e515) {
    let i351 = p.cursor(t591);
    return {
        from: Math.max(e515.from, n136.moveToLineBoundary(i351, !1, !0).from),
        to: Math.min(e515.to, n136.moveToLineBoundary(i351, !0, !0).from),
        type: A3.Text
    };
}
function Ss(n137, t592) {
    let e516 = n137.lineBlockAt(t592);
    if (Array.isArray(e516.type)) {
        for (let i352 of e516.type)if (i352.to > t592 || i352.to == t592 && (i352.to == e516.to || i352.type == A3.Text)) return i352;
    }
    return e516;
}
function jn(n138, t593) {
    if (t593.to <= n138.viewport.from || t593.from >= n138.viewport.to) return [];
    let e517 = Math.max(t593.from, n138.viewport.from), i353 = Math.min(t593.to, n138.viewport.to), s248 = n138.textDirection == P3.LTR, r188 = n138.contentDOM, o134 = r188.getBoundingClientRect(), l144 = ys(n138), h100 = window.getComputedStyle(r188.firstChild), a85 = o134.left + parseInt(h100.paddingLeft) + Math.min(0, parseInt(h100.textIndent)), c70 = o134.right - parseInt(h100.paddingRight), f65 = Ss(n138, e517), d56 = Ss(n138, i353), u56 = f65.type == A3.Text ? f65 : null, g30 = d56.type == A3.Text ? d56 : null;
    if (n138.lineWrapping && (u56 && (u56 = ws(n138, e517, u56)), g30 && (g30 = ws(n138, i353, g30))), u56 && g30 && u56.from == g30.from) return b22(y25(t593.from, t593.to, u56));
    {
        let v16 = u56 ? y25(t593.from, null, u56) : N16(f65, !1), k16 = g30 ? y25(null, t593.to, g30) : N16(d56, !0), B11 = [];
        return (u56 || f65).to < (g30 || d56).from - 1 ? B11.push(m31(a85, v16.bottom, c70, k16.top)) : v16.bottom < k16.top && n138.elementAtHeight((v16.bottom + k16.top) / 2).type == A3.Text && (v16.bottom = k16.top = (v16.bottom + k16.top) / 2), b22(v16).concat(B11).concat(b22(k16));
    }
    function m31(v17, k17, B12, G9) {
        return new He(v17 - l144.left, k17 - l144.top, B12 - v17, G9 - k17, "cm-selectionBackground");
    }
    function b22({ top: v18 , bottom: k18 , horizontal: B13  }) {
        let G10 = [];
        for(let Y10 = 0; Y10 < B13.length; Y10 += 2)G10.push(m31(B13[Y10], v18, B13[Y10 + 1], k18));
        return G10;
    }
    function y25(v19, k19, B14) {
        let G11 = 1000000000, Y11 = -1000000000, Rt = [];
        function We3(st3, $13, ct3, nt3, pt) {
            let U9 = n138.coordsAtPos(st3, st3 == B14.to ? -2 : 2), X12 = n138.coordsAtPos(ct3, ct3 == B14.from ? 2 : -2);
            G11 = Math.min(U9.top, X12.top, G11), Y11 = Math.max(U9.bottom, X12.bottom, Y11), pt == P3.LTR ? Rt.push(s248 && $13 ? a85 : U9.left, s248 && nt3 ? c70 : X12.right) : Rt.push(!s248 && nt3 ? a85 : X12.left, !s248 && $13 ? c70 : U9.right);
        }
        let Lt = v19 ?? B14.from, Bt = k19 ?? B14.to;
        for (let st1 of n138.visibleRanges)if (st1.to > Lt && st1.from < Bt) for(let $14 = Math.max(st1.from, Lt), ct1 = Math.min(st1.to, Bt);;){
            let nt4 = n138.state.doc.lineAt($14);
            for (let pt of n138.bidiSpans(nt4)){
                let U10 = pt.from + nt4.from, X13 = pt.to + nt4.from;
                if (U10 >= ct1) break;
                X13 > $14 && We3(Math.max(U10, $14), v19 == null && U10 <= Lt, Math.min(X13, ct1), k19 == null && X13 >= Bt, pt.dir);
            }
            if ($14 = nt4.to + 1, $14 >= ct1) break;
        }
        return Rt.length == 0 && We3(Lt, v19 == null, Bt, k19 == null, n138.textDirection), {
            top: G11,
            bottom: Y11,
            horizontal: Rt
        };
    }
    function N16(v20, k20) {
        let B15 = o134.top + (k20 ? v20.top : v20.bottom);
        return {
            top: B15,
            bottom: B15,
            horizontal: []
        };
    }
}
function Gn(n139, t594, e518) {
    let i354 = n139.coordsAtPos(t594.head, t594.assoc || 1);
    if (!i354) return null;
    let s249 = ys(n139);
    return new He(i354.left - s249.left, i354.top - s249.top, -1, i354.bottom - i354.top, e518 ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary");
}
var xs = v.define({
    map (n140, t595) {
        return n140 == null ? null : t595.mapPos(n140);
    }
}), Tt = B1.define({
    create () {
        return null;
    },
    update (n141, t596) {
        return n141 != null && (n141 = t596.changes.mapPos(n141)), t596.effects.reduce((e519, i355)=>i355.is(xs) ? i355.value : e519
        , n141);
    }
}), Yn = z2.fromClass(class {
    constructor(n142){
        this.view = n142, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
        };
    }
    update(n143) {
        var t597;
        let e520 = n143.state.field(Tt);
        e520 == null ? this.cursor != null && ((t597 = this.cursor) === null || t597 === void 0 || t597.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (n143.startState.field(Tt) != e520 || n143.docChanged || n143.geometryChanged) && this.view.requestMeasure(this.measureReq));
    }
    readPos() {
        let n144 = this.view.state.field(Tt), t598 = n144 != null && this.view.coordsAtPos(n144);
        if (!t598) return null;
        let e521 = this.view.scrollDOM.getBoundingClientRect();
        return {
            left: t598.left - e521.left + this.view.scrollDOM.scrollLeft,
            top: t598.top - e521.top + this.view.scrollDOM.scrollTop,
            height: t598.bottom - t598.top
        };
    }
    drawCursor(n145) {
        this.cursor && (n145 ? (this.cursor.style.left = n145.left + "px", this.cursor.style.top = n145.top + "px", this.cursor.style.height = n145.height + "px") : this.cursor.style.left = "-100000px");
    }
    destroy() {
        this.cursor && this.cursor.remove();
    }
    setDropPos(n146) {
        this.view.state.field(Tt) != n146 && this.view.dispatch({
            effects: xs.of(n146)
        });
    }
}, {
    eventHandlers: {
        dragover (n147) {
            this.setDropPos(this.view.posAtCoords({
                x: n147.clientX,
                y: n147.clientY
            }));
        },
        dragleave (n148) {
            (n148.target == this.view.contentDOM || !this.view.contentDOM.contains(n148.relatedTarget)) && this.setDropPos(null);
        },
        dragend () {
            this.setDropPos(null);
        },
        drop () {
            this.setDropPos(null);
        }
    }
});
function ar() {
    return [
        Tt,
        Yn
    ];
}
function As(n149, t599, e522, i356, s250) {
    t599.lastIndex = 0;
    for(let r189 = n149.iterRange(e522, i356), o135 = e522, l145; !r189.next().done; o135 += r189.value.length)if (!r189.lineBreak) for(; l145 = t599.exec(r189.value);)s250(o135 + l145.index, o135 + l145.index + l145[0].length, l145);
}
function $n(n150, t600) {
    let e523 = n150.visibleRanges;
    if (e523.length == 1 && e523[0].from == n150.viewport.from && e523[0].to == n150.viewport.to) return e523;
    let i357 = [];
    for (let { from: s251 , to: r190  } of e523)s251 = Math.max(n150.state.doc.lineAt(s251).from, s251 - t600), r190 = Math.min(n150.state.doc.lineAt(r190).to, r190 + t600), i357.length && i357[i357.length - 1].to >= s251 ? i357[i357.length - 1].to = r190 : i357.push({
        from: s251,
        to: r190
    });
    return i357;
}
var vs = class {
    constructor(t601){
        let { regexp: e524 , decoration: i358 , boundary: s252 , maxLength: r191 = 1000  } = t601;
        if (!e524.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        this.regexp = e524, this.getDeco = typeof i358 == "function" ? i358 : ()=>i358
        , this.boundary = s252, this.maxLength = r191;
    }
    createDeco(t602) {
        let e525 = new x2;
        for (let { from: i359 , to: s253  } of $n(t602, this.maxLength))As(t602.state.doc, this.regexp, i359, s253, (r192, o136, l146)=>e525.add(r192, o136, this.getDeco(l146, t602, r192))
        );
        return e525.finish();
    }
    updateDeco(t603, e526) {
        let i360 = 1000000000, s254 = -1;
        return t603.docChanged && t603.changes.iterChanges((r, o, l147, h101)=>{
            h101 > t603.view.viewport.from && l147 < t603.view.viewport.to && (i360 = Math.min(l147, i360), s254 = Math.max(h101, s254));
        }), t603.viewportChanged || s254 - i360 > 1000 ? this.createDeco(t603.view) : s254 > -1 ? this.updateRange(t603.view, e526.map(t603.changes), i360, s254) : e526;
    }
    updateRange(t604, e527, i361, s255) {
        for (let r193 of t604.visibleRanges){
            let o137 = Math.max(r193.from, i361), l148 = Math.min(r193.to, s255);
            if (l148 > o137) {
                let h102 = t604.state.doc.lineAt(o137), a86 = h102.to < l148 ? t604.state.doc.lineAt(l148) : h102, c71 = Math.max(r193.from, h102.from), f66 = Math.min(r193.to, a86.to);
                if (this.boundary) {
                    for(; o137 > h102.from; o137--)if (this.boundary.test(h102.text[o137 - 1 - h102.from])) {
                        c71 = o137;
                        break;
                    }
                    for(; l148 < a86.to; l148++)if (this.boundary.test(a86.text[l148 - a86.from])) {
                        f66 = l148;
                        break;
                    }
                }
                let d57 = [], u57;
                if (h102 == a86) for(this.regexp.lastIndex = c71 - h102.from; (u57 = this.regexp.exec(h102.text)) && u57.index < f66 - h102.from;){
                    let g31 = u57.index + h102.from;
                    d57.push(this.getDeco(u57, t604, g31).range(g31, g31 + u57[0].length));
                }
                else As(t604.state.doc, this.regexp, c71, f66, (g32, m32, b23)=>d57.push(this.getDeco(b23, t604, g32).range(g32, m32))
                );
                e527 = e527.update({
                    filterFrom: c71,
                    filterTo: f66,
                    filter: (g33, m33)=>g33 < c71 || m33 > f66
                    ,
                    add: d57
                });
            }
        }
        return e527;
    }
}, Ne = /x/.unicode != null ? "gu" : "g", Un = new RegExp(`[\0-\
-\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\uFEFF\uFFF9-\uFFFC]`, Ne), Xn = {
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
}, Ve = null;
function _n() {
    var n151;
    if (Ve == null && typeof document != "undefined" && document.body) {
        let t605 = document.body.style;
        Ve = ((n151 = t605.tabSize) !== null && n151 !== void 0 ? n151 : t605.MozTabSize) != null;
    }
    return Ve || !1;
}
var $t = O1.define({
    combine (n152) {
        let t606 = be(n152, {
            render: null,
            specialChars: Un,
            addSpecialChars: null
        });
        return (t606.replaceTabs = !_n()) && (t606.specialChars = new RegExp("	|" + t606.specialChars.source, Ne)), t606.addSpecialChars && (t606.specialChars = new RegExp(t606.specialChars.source + "|" + t606.addSpecialChars.source, Ne)), t606;
    }
});
function cr(n153 = {}) {
    return [
        $t.of(n153),
        Jn()
    ];
}
var Ms = null;
function Jn() {
    return Ms || (Ms = z2.fromClass(class {
        constructor(n154){
            this.view = n154, this.decorations = w4.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(n154.state.facet($t)), this.decorations = this.decorator.createDeco(n154);
        }
        makeDecorator(n155) {
            return new vs({
                regexp: n155.specialChars,
                decoration: (t607, e528, i362)=>{
                    let { doc: s256  } = e528.state, r194 = b(t607[0], 0);
                    if (r194 == 9) {
                        let o138 = s256.lineAt(i362), l149 = e528.state.tabSize, h103 = J(o138.text, l149, i362 - o138.from);
                        return w4.replace({
                            widget: new Ds((l149 - h103 % l149) * this.view.defaultCharacterWidth)
                        });
                    }
                    return this.decorationCache[r194] || (this.decorationCache[r194] = w4.replace({
                        widget: new Cs(n155, r194)
                    }));
                },
                boundary: n155.replaceTabs ? void 0 : /[^]/
            });
        }
        update(n156) {
            let t608 = n156.state.facet($t);
            n156.startState.facet($t) != t608 ? (this.decorator = this.makeDecorator(t608), this.decorations = this.decorator.createDeco(n156.view)) : this.decorations = this.decorator.updateDeco(n156, this.decorations);
        }
    }, {
        decorations: (n157)=>n157.decorations
    }));
}
var Zn = "\u2022";
function Qn(n158) {
    return n158 >= 32 ? Zn : n158 == 10 ? "\u2424" : String.fromCharCode(9216 + n158);
}
var Cs = class extends Q1 {
    constructor(t609, e529){
        super();
        this.options = t609, this.code = e529;
    }
    eq(t610) {
        return t610.code == this.code;
    }
    toDOM(t611) {
        let e530 = Qn(this.code), i363 = t611.state.phrase("Control character") + " " + (Xn[this.code] || "0x" + this.code.toString(16)), s257 = this.options.render && this.options.render(this.code, i363, e530);
        if (s257) return s257;
        let r195 = document.createElement("span");
        return r195.textContent = e530, r195.title = i363, r195.setAttribute("aria-label", i363), r195.className = "cm-specialChar", r195;
    }
    ignoreEvent() {
        return !1;
    }
}, Ds = class extends Q1 {
    constructor(t612){
        super();
        this.width = t612;
    }
    eq(t613) {
        return t613.width == this.width;
    }
    toDOM() {
        let t614 = document.createElement("span");
        return t614.textContent = "	", t614.className = "cm-tab", t614.style.width = this.width + "px", t614;
    }
    ignoreEvent() {
        return !1;
    }
}, ks = z2.fromClass(class {
    constructor(){
        this.height = 1000, this.attrs = {
            style: "padding-bottom: 1000px"
        };
    }
    update(n159) {
        let t615 = n159.view.viewState.editorHeight - n159.view.defaultLineHeight;
        t615 != this.height && (this.height = t615, this.attrs = {
            style: `padding-bottom: ${t615}px`
        });
    }
});
function ur() {
    return er;
}
var tr = w4.line({
    class: "cm-activeLine"
}), er = z2.fromClass(class {
    constructor(n161){
        this.decorations = this.getDeco(n161);
    }
    update(n162) {
        (n162.docChanged || n162.selectionSet) && (this.decorations = this.getDeco(n162.view));
    }
    getDeco(n163) {
        let t616 = -1, e531 = [];
        for (let i364 of n163.state.selection.ranges){
            if (!i364.empty) return w4.none;
            let s258 = n163.lineBlockAt(i364.head);
            s258.from > t616 && (e531.push(tr.range(s258.from)), t616 = s258.from);
        }
        return w4.set(e531);
    }
}, {
    decorations: (n164)=>n164.decorations
}), Os = class extends Q1 {
    constructor(t617){
        super();
        this.content = t617;
    }
    toDOM() {
        let t618 = document.createElement("span");
        return t618.className = "cm-placeholder", t618.style.pointerEvents = "none", t618.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : this.content), typeof this.content == "string" ? t618.setAttribute("aria-label", "placeholder " + this.content) : t618.setAttribute("aria-hidden", "true"), t618;
    }
    ignoreEvent() {
        return !1;
    }
};
var A4 = z1.define(), V2 = z1.define(), q3 = O1.define(), J3 = O1.define({
    combine (t619) {
        return be(t619, {
            minDepth: 100,
            newGroupDelay: 500
        }, {
            minDepth: Math.max,
            newGroupDelay: Math.min
        });
    }
});
function x4(t620) {
    let e532 = 0;
    return t620.iterChangedRanges((s, n112)=>e532 = n112
    ), e532;
}
var g3 = B1.define({
    create () {
        return f2.empty;
    },
    update (t621, e533) {
        let s259 = e533.state.facet(J3), n113 = e533.annotation(A4);
        if (n113) {
            let u58 = e533.docChanged ? p.single(x4(e533.changes)) : void 0, p20 = c1.fromTransaction(e533, u58), d58 = n113.side, h104 = d58 == 0 ? t621.undone : t621.done;
            return p20 ? h104 = S4(h104, h104.length, s259.minDepth, p20) : h104 = E3(h104, e533.startState.selection), new f2(d58 == 0 ? n113.rest : h104, d58 == 0 ? h104 : n113.rest);
        }
        let o139 = e533.annotation(V2);
        if ((o139 == "full" || o139 == "before") && (t621 = t621.isolate()), e533.annotation(A1.addToHistory) === !1) return e533.changes.empty ? t621 : t621.addMapping(e533.changes.desc);
        let i365 = c1.fromTransaction(e533), r196 = e533.annotation(A1.time), l150 = e533.annotation(A1.userEvent);
        return i365 ? t621 = t621.addChanges(i365, r196, l150, s259.newGroupDelay, s259.minDepth) : e533.selection && (t621 = t621.addSelection(e533.startState.selection, r196, l150, s259.newGroupDelay)), (o139 == "full" || o139 == "after") && (t621 = t621.isolate()), t621;
    },
    toJSON (t622) {
        return {
            done: t622.done.map((e534)=>e534.toJSON()
            ),
            undone: t622.undone.map((e535)=>e535.toJSON()
            )
        };
    },
    fromJSON (t623) {
        return new f2(t623.done.map(c1.fromJSON), t623.undone.map(c1.fromJSON));
    }
});
function _1(t624 = {}) {
    return [
        g3,
        J3.of(t624),
        D2.domEventHandlers({
            beforeinput (e536, s260) {
                let n114 = e536.inputType == "historyUndo" ? N1 : e536.inputType == "historyRedo" ? M3 : null;
                return n114 ? (e536.preventDefault(), n114(s260)) : !1;
            }
        })
    ];
}
function m2(t625, e537) {
    return function({ state: s261 , dispatch: n115  }) {
        if (!e537 && s261.readOnly) return !1;
        let o140 = s261.field(g3, !1);
        if (!o140) return !1;
        let i366 = o140.pop(t625, s261, e537);
        return i366 ? (n115(i366), !0) : !1;
    };
}
var N1 = m2(0, !1), M3 = m2(1, !1), z3 = m2(0, !0), I3 = m2(1, !0);
function T3(t626) {
    return function(e538) {
        let s262 = e538.field(g3, !1);
        if (!s262) return 0;
        let n116 = t626 == 0 ? s262.done : s262.undone;
        return n116.length - (n116.length && !n116[0].changes ? 1 : 0);
    };
}
var H2 = T3(0), j3 = T3(1), c1 = class {
    constructor(e539, s263, n117, o141, i367){
        this.changes = e539, this.effects = s263, this.mapped = n117, this.startSelection = o141, this.selectionsAfter = i367;
    }
    setSelAfter(e540) {
        return new c1(this.changes, this.effects, this.mapped, this.startSelection, e540);
    }
    toJSON() {
        var e541, s264, n118;
        return {
            changes: (e541 = this.changes) === null || e541 === void 0 ? void 0 : e541.toJSON(),
            mapped: (s264 = this.mapped) === null || s264 === void 0 ? void 0 : s264.toJSON(),
            startSelection: (n118 = this.startSelection) === null || n118 === void 0 ? void 0 : n118.toJSON(),
            selectionsAfter: this.selectionsAfter.map((o142)=>o142.toJSON()
            )
        };
    }
    static fromJSON(e542) {
        return new c1(e542.changes && y1.fromJSON(e542.changes), [], e542.mapped && I.fromJSON(e542.mapped), e542.startSelection && p.fromJSON(e542.startSelection), e542.selectionsAfter.map(p.fromJSON));
    }
    static fromTransaction(e543, s265) {
        let n119 = a2;
        for (let o143 of e543.startState.facet(q3)){
            let i368 = o143(e543);
            i368.length && (n119 = n119.concat(i368));
        }
        return !n119.length && e543.changes.empty ? null : new c1(e543.changes.invert(e543.startState.doc), n119, void 0, s265 || e543.startState.selection, a2);
    }
    static selection(e544) {
        return new c1(void 0, a2, void 0, void 0, e544);
    }
};
function S4(t627, e545, s266, n120) {
    let o144 = e545 + 1 > s266 + 20 ? e545 - s266 - 1 : 0, i369 = t627.slice(o144, e545);
    return i369.push(n120), i369;
}
function $2(t628, e546) {
    let s267 = [], n121 = !1;
    return t628.iterChangedRanges((o145, i370)=>s267.push(o145, i370)
    ), e546.iterChangedRanges((o, i, r197, l151)=>{
        for(let u59 = 0; u59 < s267.length;){
            let p22 = s267[u59++], d59 = s267[u59++];
            l151 >= p22 && r197 <= d59 && (n121 = !0);
        }
    }), n121;
}
function K2(t629, e547) {
    return t629.ranges.length == e547.ranges.length && t629.ranges.filter((s268, n122)=>s268.empty != e547.ranges[n122].empty
    ).length === 0;
}
function C3(t630, e548) {
    return t630.length ? e548.length ? t630.concat(e548) : t630 : e548;
}
var a2 = [], P4 = 200;
function E3(t631, e549) {
    if (t631.length) {
        let s269 = t631[t631.length - 1], n123 = s269.selectionsAfter.slice(Math.max(0, s269.selectionsAfter.length - P4));
        return n123.length && n123[n123.length - 1].eq(e549) ? t631 : (n123.push(e549), S4(t631, t631.length - 1, 1000000000, s269.setSelAfter(n123)));
    } else return [
        c1.selection([
            e549
        ])
    ];
}
function Q2(t632) {
    let e550 = t632[t632.length - 1], s270 = t632.slice();
    return s270[t632.length - 1] = e550.setSelAfter(e550.selectionsAfter.slice(0, e550.selectionsAfter.length - 1)), s270;
}
function D3(t633, e551) {
    if (!t633.length) return t633;
    let s271 = t633.length, n124 = a2;
    for(; s271;){
        let o146 = W2(t633[s271 - 1], e551, n124);
        if (o146.changes && !o146.changes.empty || o146.effects.length) {
            let i371 = t633.slice(0, s271);
            return i371[s271 - 1] = o146, i371;
        } else e551 = o146.mapped, s271--, n124 = o146.selectionsAfter;
    }
    return n124.length ? [
        c1.selection(n124)
    ] : a2;
}
function W2(t634, e552, s272) {
    let n125 = C3(t634.selectionsAfter.length ? t634.selectionsAfter.map((l152)=>l152.map(e552)
    ) : a2, s272);
    if (!t634.changes) return c1.selection(n125);
    let o147 = t634.changes.map(e552), i372 = e552.mapDesc(t634.changes, !0), r198 = t634.mapped ? t634.mapped.composeDesc(i372) : i372;
    return new c1(o147, v.mapEffects(t634.effects, e552), r198, t634.startSelection.map(i372), n125);
}
var X1 = /^(input\.type|delete)($|\.)/, f2 = class {
    constructor(e553, s273, n126 = 0, o148 = void 0){
        this.done = e553, this.undone = s273, this.prevTime = n126, this.prevUserEvent = o148;
    }
    isolate() {
        return this.prevTime ? new f2(this.done, this.undone) : this;
    }
    addChanges(e554, s274, n127, o149, i373) {
        let r199 = this.done, l153 = r199[r199.length - 1];
        return l153 && l153.changes && !l153.changes.empty && e554.changes && (!n127 || X1.test(n127)) && (!l153.selectionsAfter.length && s274 - this.prevTime < o149 && $2(l153.changes, e554.changes) || n127 == "input.type.compose") ? r199 = S4(r199, r199.length - 1, i373, new c1(e554.changes.compose(l153.changes), C3(e554.effects, l153.effects), l153.mapped, l153.startSelection, a2)) : r199 = S4(r199, r199.length, i373, e554), new f2(r199, a2, s274, n127);
    }
    addSelection(e555, s275, n128, o150) {
        let i374 = this.done.length ? this.done[this.done.length - 1].selectionsAfter : a2;
        return i374.length > 0 && s275 - this.prevTime < o150 && n128 == this.prevUserEvent && n128 && /^select($|\.)/.test(n128) && K2(i374[i374.length - 1], e555) ? this : new f2(E3(this.done, e555), this.undone, s275, n128);
    }
    addMapping(e556) {
        return new f2(D3(this.done, e556), D3(this.undone, e556), this.prevTime, this.prevUserEvent);
    }
    pop(e557, s276, n129) {
        let o151 = e557 == 0 ? this.done : this.undone;
        if (o151.length == 0) return null;
        let i375 = o151[o151.length - 1];
        if (n129 && i375.selectionsAfter.length) return s276.update({
            selection: i375.selectionsAfter[i375.selectionsAfter.length - 1],
            annotations: A4.of({
                side: e557,
                rest: Q2(o151)
            }),
            userEvent: e557 == 0 ? "select.undo" : "select.redo",
            scrollIntoView: !0
        });
        if (i375.changes) {
            let r200 = o151.length == 1 ? a2 : o151.slice(0, o151.length - 1);
            return i375.mapped && (r200 = D3(r200, i375.mapped)), s276.update({
                changes: i375.changes,
                selection: i375.startSelection,
                effects: i375.effects,
                annotations: A4.of({
                    side: e557,
                    rest: r200
                }),
                filter: !1,
                userEvent: e557 == 0 ? "undo" : "redo",
                scrollIntoView: !0
            });
        } else return null;
    }
};
f2.empty = new f2(a2, a2);
var b4 = [
    {
        key: "Mod-z",
        run: N1,
        preventDefault: !0
    },
    {
        key: "Mod-y",
        mac: "Mod-Shift-z",
        run: M3,
        preventDefault: !0
    },
    {
        key: "Mod-u",
        run: z3,
        preventDefault: !0
    },
    {
        key: "Alt-u",
        mac: "Mod-Shift-u",
        run: I3,
        preventDefault: !0
    }
];
var we2 = 1024, ve2 = 0, N2 = class {
    constructor(e558, t635){
        this.from = e558, this.to = t635;
    }
}, y4 = class {
    constructor(e559 = {}){
        this.id = ve2++, this.perNode = !!e559.perNode, this.deserialize = e559.deserialize || (()=>{
            throw new Error("This node type doesn't define a deserialize function");
        });
    }
    add(e560) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return typeof e560 != "function" && (e560 = B2.match(e560)), (t636)=>{
            let r201 = e560(t636);
            return r201 === void 0 ? null : [
                this,
                r201
            ];
        };
    }
};
y4.closedBy = new y4({
    deserialize: (h105)=>h105.split(" ")
});
y4.openedBy = new y4({
    deserialize: (h106)=>h106.split(" ")
});
y4.group = new y4({
    deserialize: (h107)=>h107.split(" ")
});
y4.contextHash = new y4({
    perNode: !0
});
y4.lookAhead = new y4({
    perNode: !0
});
y4.mounted = new y4({
    perNode: !0
});
var he2 = class {
    constructor(e561, t637, r202){
        this.tree = e561, this.overlay = t637, this.parser = r202;
    }
}, ke1 = Object.create(null), B2 = class {
    constructor(e562, t638, r203, i376 = 0){
        this.name = e562, this.props = t638, this.id = r203, this.flags = i376;
    }
    static define(e563) {
        let t639 = e563.props && e563.props.length ? Object.create(null) : ke1, r204 = (e563.top ? 1 : 0) | (e563.skipped ? 2 : 0) | (e563.error ? 4 : 0) | (e563.name == null ? 8 : 0), i377 = new B2(e563.name || "", t639, e563.id, r204);
        if (e563.props) {
            for (let n130 of e563.props)if (Array.isArray(n130) || (n130 = n130(i377)), n130) {
                if (n130[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
                t639[n130[0].id] = n130[1];
            }
        }
        return i377;
    }
    prop(e564) {
        return this.props[e564.id];
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
    is(e565) {
        if (typeof e565 == "string") {
            if (this.name == e565) return !0;
            let t640 = this.prop(y4.group);
            return t640 ? t640.indexOf(e565) > -1 : !1;
        }
        return this.id == e565;
    }
    static match(e566) {
        let t641 = Object.create(null);
        for(let r1 in e566)for (let i1 of r1.split(" "))t641[i1] = e566[r1];
        return (r205)=>{
            for(let i378 = r205.prop(y4.group), n131 = -1; n131 < (i378 ? i378.length : 0); n131++){
                let s277 = t641[n131 < 0 ? r205.name : i378[n131]];
                if (s277) return s277;
            }
        };
    }
};
B2.none = new B2("", Object.create(null), 0, 8);
var Z1 = class {
    constructor(e567){
        this.types = e567;
        for(let t642 = 0; t642 < e567.length; t642++)if (e567[t642].id != t642) throw new RangeError("Node type ids should correspond to array positions when creating a node set");
    }
    extend(...e568) {
        let t643 = [];
        for (let r206 of this.types){
            let i379 = null;
            for (let n132 of e568){
                let s278 = n132(r206);
                s278 && (i379 || (i379 = Object.assign({}, r206.props)), i379[s278[0].id] = s278[1]);
            }
            t643.push(i379 ? new B2(r206.name, i379, r206.id, r206.flags) : r206);
        }
        return new Z1(t643);
    }
}, K3 = new WeakMap, oe2 = new WeakMap, P5 = class {
    constructor(e569, t644, r207, i380, n133){
        if (this.type = e569, this.children = t644, this.positions = r207, this.length = i380, this.props = null, n133 && n133.length) {
            this.props = Object.create(null);
            for (let [s279, l154] of n133)this.props[typeof s279 == "number" ? s279 : s279.id] = l154;
        }
    }
    toString() {
        let e570 = this.prop(y4.mounted);
        if (e570 && !e570.overlay) return e570.tree.toString();
        let t645 = "";
        for (let r208 of this.children){
            let i381 = r208.toString();
            i381 && (t645 && (t645 += ","), t645 += i381);
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t645.length ? "(" + t645 + ")" : "") : t645;
    }
    cursor(e571, t646 = 0) {
        let r209 = e571 != null && K3.get(this) || this.topNode, i382 = new G1(r209);
        return e571 != null && (i382.moveTo(e571, t646), K3.set(this, i382._tree)), i382;
    }
    fullCursor() {
        return new G1(this.topNode, 1);
    }
    get topNode() {
        return new T4(this, 0, 0, null);
    }
    resolve(e572, t647 = 0) {
        let r210 = J4(K3.get(this) || this.topNode, e572, t647, !1);
        return K3.set(this, r210), r210;
    }
    resolveInner(e573, t648 = 0) {
        let r211 = J4(oe2.get(this) || this.topNode, e573, t648, !0);
        return oe2.set(this, r211), r211;
    }
    iterate(e574) {
        let { enter: t649 , leave: r212 , from: i383 = 0 , to: n134 = this.length  } = e574;
        for(let s280 = this.cursor(), l155 = ()=>s280.node
        ;;){
            let o152 = !1;
            if (s280.from <= n134 && s280.to >= i383 && (s280.type.isAnonymous || t649(s280.type, s280.from, s280.to, l155) !== !1)) {
                if (s280.firstChild()) continue;
                s280.type.isAnonymous || (o152 = !0);
            }
            for(; o152 && r212 && r212(s280.type, s280.from, s280.to, l155), o152 = s280.type.isAnonymous, !s280.nextSibling();){
                if (!s280.parent()) return;
                o152 = !0;
            }
        }
    }
    prop(e575) {
        return e575.perNode ? this.props ? this.props[e575.id] : void 0 : this.type.prop(e575);
    }
    get propValues() {
        let e576 = [];
        if (this.props) for(let t650 in this.props)e576.push([
            +t650,
            this.props[t650]
        ]);
        return e576;
    }
    balance(e577 = {}) {
        return this.children.length <= 8 ? this : te2(B2.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t651, r213, i384)=>new P5(this.type, t651, r213, i384, this.propValues)
        , e577.makeTree || ((t652, r214, i385)=>new P5(B2.none, t652, r214, i385)
        ));
    }
    static build(e578) {
        return Ce1(e578);
    }
};
P5.empty = new P5(B2.none, [], [], 0);
var Q3 = class {
    constructor(e579, t653){
        this.buffer = e579, this.index = t653;
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
        return new Q3(this.buffer, this.index);
    }
}, U1 = class {
    constructor(e580, t654, r215){
        this.buffer = e580, this.length = t654, this.set = r215;
    }
    get type() {
        return B2.none;
    }
    toString() {
        let e581 = [];
        for(let t655 = 0; t655 < this.buffer.length;)e581.push(this.childString(t655)), t655 = this.buffer[t655 + 3];
        return e581.join(",");
    }
    childString(e582) {
        let t656 = this.buffer[e582], r216 = this.buffer[e582 + 3], i386 = this.set.types[t656], n135 = i386.name;
        if (/\W/.test(n135) && !i386.isError && (n135 = JSON.stringify(n135)), e582 += 4, r216 == e582) return n135;
        let s281 = [];
        for(; e582 < r216;)s281.push(this.childString(e582)), e582 = this.buffer[e582 + 3];
        return n135 + "(" + s281.join(",") + ")";
    }
    findChild(e583, t657, r217, i387, n136) {
        let { buffer: s282  } = this, l156 = -1;
        for(let o153 = e583; o153 != t657 && !(fe2(n136, i387, s282[o153 + 1], s282[o153 + 2]) && (l156 = o153, r217 > 0)); o153 = s282[o153 + 3]);
        return l156;
    }
    slice(e584, t658, r218, i388) {
        let n137 = this.buffer, s283 = new Uint16Array(t658 - e584);
        for(let l157 = e584, o154 = 0; l157 < t658;)s283[o154++] = n137[l157++], s283[o154++] = n137[l157++] - r218, s283[o154++] = n137[l157++] - r218, s283[o154++] = n137[l157++] - e584;
        return new U1(s283, i388 - r218, this.set);
    }
};
function fe2(h108, e585, t659, r219) {
    switch(h108){
        case -2:
            return t659 < e585;
        case -1:
            return r219 >= e585 && t659 < e585;
        case 0:
            return t659 < e585 && r219 > e585;
        case 1:
            return t659 <= e585 && r219 > e585;
        case 2:
            return r219 > e585;
        case 4:
            return !0;
    }
}
function ue2(h109, e586) {
    let t660 = h109.childBefore(e586);
    for(; t660;){
        let r220 = t660.lastChild;
        if (!r220 || r220.to != t660.to) break;
        r220.type.isError && r220.from == r220.to ? (h109 = t660, t660 = r220.prevSibling) : t660 = r220;
    }
    return h109;
}
function J4(h110, e587, t661, r221) {
    for(var i389; h110.from == h110.to || (t661 < 1 ? h110.from >= e587 : h110.from > e587) || (t661 > -1 ? h110.to <= e587 : h110.to < e587);){
        let n138 = !r221 && h110 instanceof T4 && h110.index < 0 ? null : h110.parent;
        if (!n138) return h110;
        h110 = n138;
    }
    if (r221) for(let n139 = h110, s284 = n139.parent; s284; n139 = s284, s284 = n139.parent)n139 instanceof T4 && n139.index < 0 && ((i389 = s284.enter(e587, t661, !0)) === null || i389 === void 0 ? void 0 : i389.from) != n139.from && (h110 = s284);
    for(;;){
        let n140 = h110.enter(e587, t661, r221);
        if (!n140) return h110;
        h110 = n140;
    }
}
var T4 = class {
    constructor(e588, t662, r222, i390){
        this.node = e588, this._from = t662, this.index = r222, this._parent = i390;
    }
    get type() {
        return this.node.type;
    }
    get name() {
        return this.node.type.name;
    }
    get from() {
        return this._from;
    }
    get to() {
        return this._from + this.node.length;
    }
    nextChild(e589, t663, r223, i391, n141 = 0) {
        for(let s285 = this;;){
            for(let { children: l158 , positions: o155  } = s285.node, u60 = t663 > 0 ? l158.length : -1; e589 != u60; e589 += t663){
                let f67 = l158[e589], d60 = o155[e589] + s285._from;
                if (!!fe2(i391, r223, d60, d60 + f67.length)) {
                    if (f67 instanceof U1) {
                        if (n141 & 2) continue;
                        let p23 = f67.findChild(0, f67.buffer.length, t663, r223 - d60, i391);
                        if (p23 > -1) return new O3(new ae2(s285, f67, e589, d60), null, p23);
                    } else if (n141 & 1 || !f67.type.isAnonymous || ee2(f67)) {
                        let p24;
                        if (!(n141 & 1) && f67.props && (p24 = f67.prop(y4.mounted)) && !p24.overlay) return new T4(p24.tree, d60, e589, s285);
                        let v21 = new T4(f67, d60, e589, s285);
                        return n141 & 1 || !v21.type.isAnonymous ? v21 : v21.nextChild(t663 < 0 ? f67.children.length - 1 : 0, t663, r223, i391);
                    }
                }
            }
            if (n141 & 1 || !s285.type.isAnonymous || (s285.index >= 0 ? e589 = s285.index + t663 : e589 = t663 < 0 ? -1 : s285._parent.node.children.length, s285 = s285._parent, !s285)) return null;
        }
    }
    get firstChild() {
        return this.nextChild(0, 1, 0, 4);
    }
    get lastChild() {
        return this.nextChild(this.node.children.length - 1, -1, 0, 4);
    }
    childAfter(e590) {
        return this.nextChild(0, 1, e590, 2);
    }
    childBefore(e591) {
        return this.nextChild(this.node.children.length - 1, -1, e591, -2);
    }
    enter(e592, t664, r224 = !0, i392 = !0) {
        let n142;
        if (r224 && (n142 = this.node.prop(y4.mounted)) && n142.overlay) {
            let s286 = e592 - this.from;
            for (let { from: l159 , to: o156  } of n142.overlay)if ((t664 > 0 ? l159 <= s286 : l159 < s286) && (t664 < 0 ? o156 >= s286 : o156 > s286)) return new T4(n142.tree, n142.overlay[0].from + this.from, -1, this);
        }
        return this.nextChild(0, 1, e592, t664, i392 ? 0 : 2);
    }
    nextSignificantParent() {
        let e593 = this;
        for(; e593.type.isAnonymous && e593._parent;)e593 = e593._parent;
        return e593;
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
    get cursor() {
        return new G1(this);
    }
    get tree() {
        return this.node;
    }
    toTree() {
        return this.node;
    }
    resolve(e594, t665 = 0) {
        return J4(this, e594, t665, !1);
    }
    resolveInner(e595, t666 = 0) {
        return J4(this, e595, t666, !0);
    }
    enterUnfinishedNodesBefore(e596) {
        return ue2(this, e596);
    }
    getChild(e597, t667 = null, r225 = null) {
        let i393 = X2(this, e597, t667, r225);
        return i393.length ? i393[0] : null;
    }
    getChildren(e598, t668 = null, r226 = null) {
        return X2(this, e598, t668, r226);
    }
    toString() {
        return this.node.toString();
    }
};
function X2(h111, e599, t669, r227) {
    let i394 = h111.cursor, n143 = [];
    if (!i394.firstChild()) return n143;
    if (t669 != null) {
        for(; !i394.type.is(t669);)if (!i394.nextSibling()) return n143;
    }
    for(;;){
        if (r227 != null && i394.type.is(r227)) return n143;
        if (i394.type.is(e599) && n143.push(i394.node), !i394.nextSibling()) return r227 == null ? n143 : [];
    }
}
var ae2 = class {
    constructor(e600, t670, r228, i395){
        this.parent = e600, this.buffer = t670, this.index = r228, this.start = i395;
    }
}, O3 = class {
    constructor(e601, t671, r229){
        this.context = e601, this._parent = t671, this.index = r229, this.type = e601.buffer.set.types[e601.buffer.buffer[r229]];
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
    child(e602, t672, r230) {
        let { buffer: i396  } = this.context, n144 = i396.findChild(this.index + 4, i396.buffer[this.index + 3], e602, t672 - this.context.start, r230);
        return n144 < 0 ? null : new O3(this.context, this, n144);
    }
    get firstChild() {
        return this.child(1, 0, 4);
    }
    get lastChild() {
        return this.child(-1, 0, 4);
    }
    childAfter(e603) {
        return this.child(1, e603, 2);
    }
    childBefore(e604) {
        return this.child(-1, e604, -2);
    }
    enter(e605, t673, r, i397 = !0) {
        if (!i397) return null;
        let { buffer: n145  } = this.context, s287 = n145.findChild(this.index + 4, n145.buffer[this.index + 3], t673 > 0 ? 1 : -1, e605 - this.context.start, t673);
        return s287 < 0 ? null : new O3(this.context, this, s287);
    }
    get parent() {
        return this._parent || this.context.parent.nextSignificantParent();
    }
    externalSibling(e606) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + e606, e606, 0, 4);
    }
    get nextSibling() {
        let { buffer: e607  } = this.context, t674 = e607.buffer[this.index + 3];
        return t674 < (this._parent ? e607.buffer[this._parent.index + 3] : e607.buffer.length) ? new O3(this.context, this._parent, t674) : this.externalSibling(1);
    }
    get prevSibling() {
        let { buffer: e608  } = this.context, t675 = this._parent ? this._parent.index + 4 : 0;
        return this.index == t675 ? this.externalSibling(-1) : new O3(this.context, this._parent, e608.findChild(t675, this.index, -1, 0, 4));
    }
    get cursor() {
        return new G1(this);
    }
    get tree() {
        return null;
    }
    toTree() {
        let e609 = [], t676 = [], { buffer: r231  } = this.context, i398 = this.index + 4, n146 = r231.buffer[this.index + 3];
        if (n146 > i398) {
            let s288 = r231.buffer[this.index + 1], l160 = r231.buffer[this.index + 2];
            e609.push(r231.slice(i398, n146, s288, l160)), t676.push(0);
        }
        return new P5(this.type, e609, t676, this.to - this.from);
    }
    resolve(e610, t677 = 0) {
        return J4(this, e610, t677, !1);
    }
    resolveInner(e611, t678 = 0) {
        return J4(this, e611, t678, !0);
    }
    enterUnfinishedNodesBefore(e612) {
        return ue2(this, e612);
    }
    toString() {
        return this.context.buffer.childString(this.index);
    }
    getChild(e613, t679 = null, r232 = null) {
        let i399 = X2(this, e613, t679, r232);
        return i399.length ? i399[0] : null;
    }
    getChildren(e614, t680 = null, r233 = null) {
        return X2(this, e614, t680, r233);
    }
}, G1 = class {
    constructor(e615, t681 = 0){
        if (this.mode = t681, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e615 instanceof T4) this.yieldNode(e615);
        else {
            this._tree = e615.context.parent, this.buffer = e615.context;
            for(let r234 = e615._parent; r234; r234 = r234._parent)this.stack.unshift(r234.index);
            this.bufferNode = e615, this.yieldBuf(e615.index);
        }
    }
    get name() {
        return this.type.name;
    }
    yieldNode(e616) {
        return e616 ? (this._tree = e616, this.type = e616.type, this.from = e616.from, this.to = e616.to, !0) : !1;
    }
    yieldBuf(e617, t682) {
        this.index = e617;
        let { start: r235 , buffer: i400  } = this.buffer;
        return this.type = t682 || i400.set.types[i400.buffer[e617]], this.from = r235 + i400.buffer[e617 + 1], this.to = r235 + i400.buffer[e617 + 2], !0;
    }
    yield(e618) {
        return e618 ? e618 instanceof T4 ? (this.buffer = null, this.yieldNode(e618)) : (this.buffer = e618.context, this.yieldBuf(e618.index, e618.type)) : !1;
    }
    toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
    }
    enterChild(e619, t683, r236) {
        if (!this.buffer) return this.yield(this._tree.nextChild(e619 < 0 ? this._tree.node.children.length - 1 : 0, e619, t683, r236, this.mode));
        let { buffer: i401  } = this.buffer, n147 = i401.findChild(this.index + 4, i401.buffer[this.index + 3], e619, t683 - this.buffer.start, r236);
        return n147 < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(n147));
    }
    firstChild() {
        return this.enterChild(1, 0, 4);
    }
    lastChild() {
        return this.enterChild(-1, 0, 4);
    }
    childAfter(e620) {
        return this.enterChild(1, e620, 2);
    }
    childBefore(e621) {
        return this.enterChild(-1, e621, -2);
    }
    enter(e622, t684, r237 = !0, i402 = !0) {
        return this.buffer ? i402 ? this.enterChild(1, e622, t684) : !1 : this.yield(this._tree.enter(e622, t684, r237 && !(this.mode & 1), i402));
    }
    parent() {
        if (!this.buffer) return this.yieldNode(this.mode & 1 ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let e623 = this.mode & 1 ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(e623);
    }
    sibling(e624) {
        if (!this.buffer) return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e624, e624, 0, 4, this.mode)) : !1;
        let { buffer: t685  } = this.buffer, r238 = this.stack.length - 1;
        if (e624 < 0) {
            let i403 = r238 < 0 ? 0 : this.stack[r238] + 4;
            if (this.index != i403) return this.yieldBuf(t685.findChild(i403, this.index, -1, 0, 4));
        } else {
            let i404 = t685.buffer[this.index + 3];
            if (i404 < (r238 < 0 ? t685.buffer.length : t685.buffer[this.stack[r238] + 3])) return this.yieldBuf(i404);
        }
        return r238 < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e624, e624, 0, 4, this.mode)) : !1;
    }
    nextSibling() {
        return this.sibling(1);
    }
    prevSibling() {
        return this.sibling(-1);
    }
    atLastNode(e625) {
        let t686, r239, { buffer: i405  } = this;
        if (i405) {
            if (e625 > 0) {
                if (this.index < i405.buffer.buffer.length) return !1;
            } else for(let n148 = 0; n148 < this.index; n148++)if (i405.buffer.buffer[n148 + 3] < this.index) return !1;
            ({ index: t686 , parent: r239  } = i405);
        } else ({ index: t686 , _parent: r239  } = this._tree);
        for(; r239; { index: t686 , _parent: r239  } = r239)if (t686 > -1) for(let n149 = t686 + e625, s289 = e625 < 0 ? -1 : r239.node.children.length; n149 != s289; n149 += e625){
            let l161 = r239.node.children[n149];
            if (this.mode & 1 || l161 instanceof U1 || !l161.type.isAnonymous || ee2(l161)) return !1;
        }
        return !0;
    }
    move(e626, t687) {
        if (t687 && this.enterChild(e626, 0, 4)) return !0;
        for(;;){
            if (this.sibling(e626)) return !0;
            if (this.atLastNode(e626) || !this.parent()) return !1;
        }
    }
    next(e627 = !0) {
        return this.move(1, e627);
    }
    prev(e628 = !0) {
        return this.move(-1, e628);
    }
    moveTo(e629, t688 = 0) {
        for(; (this.from == this.to || (t688 < 1 ? this.from >= e629 : this.from > e629) || (t688 > -1 ? this.to <= e629 : this.to < e629)) && this.parent(););
        for(; this.enterChild(1, e629, t688););
        return this;
    }
    get node() {
        if (!this.buffer) return this._tree;
        let e630 = this.bufferNode, t689 = null, r240 = 0;
        if (e630 && e630.context == this.buffer) {
            e: for(let i406 = this.index, n150 = this.stack.length; n150 >= 0;){
                for(let s290 = e630; s290; s290 = s290._parent)if (s290.index == i406) {
                    if (i406 == this.index) return s290;
                    t689 = s290, r240 = n150 + 1;
                    break e;
                }
                i406 = this.stack[--n150];
            }
        }
        for(let i407 = r240; i407 < this.stack.length; i407++)t689 = new O3(this.buffer, t689, this.stack[i407]);
        return this.bufferNode = new O3(this.buffer, t689, this.index);
    }
    get tree() {
        return this.buffer ? null : this._tree.node;
    }
};
function ee2(h112) {
    return h112.children.some((e631)=>e631 instanceof U1 || !e631.type.isAnonymous || ee2(e631)
    );
}
function Ce1(h113) {
    var e632;
    let { buffer: t690 , nodeSet: r241 , maxBufferLength: i408 = we2 , reused: n151 = [] , minRepeatType: s291 = r241.types.length  } = h113, l162 = Array.isArray(t690) ? new Q3(t690, t690.length) : t690, o157 = r241.types, u61 = 0, f68 = 0;
    function d61(x16, w19, a87, m34, C16) {
        let { id: b24 , start: g34 , end: k21 , size: _14  } = l162, M17 = f68;
        for(; _14 < 0;)if (l162.next(), _14 == -1) {
            let L14 = n151[b24];
            a87.push(L14), m34.push(g34 - x16);
            return;
        } else if (_14 == -3) {
            u61 = b24;
            return;
        } else if (_14 == -4) {
            f68 = b24;
            return;
        } else throw new RangeError(`Unrecognized record size: ${_14}`);
        let H11 = o157[b24], R12, E16, se7 = g34 - x16;
        if (k21 - g34 <= i408 && (E16 = S16(l162.pos - w19, C16))) {
            let L15 = new Uint16Array(E16.size - E16.skip), I15 = l162.pos - E16.size, D17 = L15.length;
            for(; l162.pos > I15;)D17 = j14(E16.start, L15, D17);
            R12 = new U1(L15, k21 - E16.start, r241), se7 = E16.start - x16;
        } else {
            let L16 = l162.pos - _14;
            l162.next();
            let I16 = [], D18 = [], W12 = b24 >= s291 ? b24 : -1, V10 = 0, q14 = k21;
            for(; l162.pos > L16;)W12 >= 0 && l162.id == W12 && l162.size >= 0 ? (l162.end <= q14 - i408 && (v22(I16, D18, g34, V10, l162.end, q14, W12, M17), V10 = I16.length, q14 = l162.end), l162.next()) : d61(g34, L16, I16, D18, W12);
            if (W12 >= 0 && V10 > 0 && V10 < I16.length && v22(I16, D18, g34, V10, g34, q14, W12, M17), I16.reverse(), D18.reverse(), W12 > -1 && V10 > 0) {
                let le5 = p25(H11);
                R12 = te2(H11, I16, D18, 0, I16.length, 0, k21 - g34, le5, le5);
            } else R12 = c72(H11, I16, D18, k21 - g34, M17 - k21);
        }
        a87.push(R12), m34.push(se7);
    }
    function p25(x17) {
        return (w20, a88, m35)=>{
            let C17 = 0, b25 = w20.length - 1, g35, k22;
            if (b25 >= 0 && (g35 = w20[b25]) instanceof P5) {
                if (!b25 && g35.type == x17 && g35.length == m35) return g35;
                (k22 = g35.prop(y4.lookAhead)) && (C17 = a88[b25] + g35.length + k22);
            }
            return c72(x17, w20, a88, m35, C17);
        };
    }
    function v22(x18, w21, a89, m36, C18, b26, g36, k23) {
        let _15 = [], M18 = [];
        for(; x18.length > m36;)_15.push(x18.pop()), M18.push(w21.pop() + a89 - C18);
        x18.push(c72(r241.types[g36], _15, M18, b26 - C18, k23 - b26)), w21.push(C18 - a89);
    }
    function c72(x19, w22, a90, m37, C19 = 0, b27) {
        if (u61) {
            let g37 = [
                y4.contextHash,
                u61
            ];
            b27 = b27 ? [
                g37
            ].concat(b27) : [
                g37
            ];
        }
        if (C19 > 25) {
            let g38 = [
                y4.lookAhead,
                C19
            ];
            b27 = b27 ? [
                g38
            ].concat(b27) : [
                g38
            ];
        }
        return new P5(x19, w22, a90, m37, b27);
    }
    function S16(x20, w23) {
        let a91 = l162.fork(), m38 = 0, C20 = 0, b28 = 0, g39 = a91.end - i408, k24 = {
            size: 0,
            start: 0,
            skip: 0
        };
        e: for(let _16 = a91.pos - x20; a91.pos > _16;){
            let M19 = a91.size;
            if (a91.id == w23 && M19 >= 0) {
                k24.size = m38, k24.start = C20, k24.skip = b28, b28 += 4, m38 += 4, a91.next();
                continue;
            }
            let H12 = a91.pos - M19;
            if (M19 < 0 || H12 < _16 || a91.start < g39) break;
            let R13 = a91.id >= s291 ? 4 : 0, E17 = a91.start;
            for(a91.next(); a91.pos > H12;){
                if (a91.size < 0) if (a91.size == -3) R13 += 4;
                else break e;
                else a91.id >= s291 && (R13 += 4);
                a91.next();
            }
            C20 = E17, m38 += M19, b28 += R13;
        }
        return (w23 < 0 || m38 == x20) && (k24.size = m38, k24.start = C20, k24.skip = b28), k24.size > 4 ? k24 : void 0;
    }
    function j14(x21, w24, a92) {
        let { id: m39 , start: C21 , end: b29 , size: g40  } = l162;
        if (l162.next(), g40 >= 0 && m39 < s291) {
            let k25 = a92;
            if (g40 > 4) {
                let _17 = l162.pos - (g40 - 4);
                for(; l162.pos > _17;)a92 = j14(x21, w24, a92);
            }
            w24[--a92] = k25, w24[--a92] = b29 - x21, w24[--a92] = C21 - x21, w24[--a92] = m39;
        } else g40 == -3 ? u61 = m39 : g40 == -4 && (f68 = m39);
        return a92;
    }
    let z15 = [], F12 = [];
    for(; l162.pos > 0;)d61(h113.start || 0, h113.bufferStart || 0, z15, F12, -1);
    let A14 = (e632 = h113.length) !== null && e632 !== void 0 ? e632 : z15.length ? F12[0] + z15[0].length : 0;
    return new P5(o157[h113.topID], z15.reverse(), F12.reverse(), A14);
}
var pe2 = new WeakMap;
function Y1(h114, e633) {
    if (!h114.isAnonymous || e633 instanceof U1 || e633.type != h114) return 1;
    let t691 = pe2.get(e633);
    if (t691 == null) {
        t691 = 1;
        for (let r242 of e633.children){
            if (r242.type != h114 || !(r242 instanceof P5)) {
                t691 = 1;
                break;
            }
            t691 += Y1(h114, r242);
        }
        pe2.set(e633, t691);
    }
    return t691;
}
function te2(h115, e634, t692, r243, i409, n152, s292, l163, o158) {
    let u62 = 0;
    for(let c110 = r243; c110 < i409; c110++)u62 += Y1(h115, e634[c110]);
    let f69 = Math.ceil(u62 * 1.5 / 8), d62 = [], p26 = [];
    function v23(c73, S17, j15, z16, F13) {
        for(let A15 = j15; A15 < z16;){
            let x22 = A15, w25 = S17[A15], a93 = Y1(h115, c73[A15]);
            for(A15++; A15 < z16; A15++){
                let m40 = Y1(h115, c73[A15]);
                if (a93 + m40 >= f69) break;
                a93 += m40;
            }
            if (A15 == x22 + 1) {
                if (a93 > f69) {
                    let m41 = c73[x22];
                    v23(m41.children, m41.positions, 0, m41.children.length, S17[x22] + F13);
                    continue;
                }
                d62.push(c73[x22]);
            } else {
                let m42 = S17[A15 - 1] + c73[A15 - 1].length - w25;
                d62.push(te2(h115, c73, S17, x22, A15, w25, m42, null, o158));
            }
            p26.push(w25 + F13 - n152);
        }
    }
    return v23(e634, t692, r243, i409, 0), (l163 || o158)(d62, p26, s292);
}
var $3 = class {
    constructor(e635, t693, r244, i410, n153 = !1, s293 = !1){
        this.from = e635, this.to = t693, this.tree = r244, this.offset = i410, this.open = (n153 ? 1 : 0) | (s293 ? 2 : 0);
    }
    get openStart() {
        return (this.open & 1) > 0;
    }
    get openEnd() {
        return (this.open & 2) > 0;
    }
    static addTree(e636, t694 = [], r245 = !1) {
        let i411 = [
            new $3(0, e636.length, e636, 0, !1, r245)
        ];
        for (let n154 of t694)n154.to > e636.length && i411.push(n154);
        return i411;
    }
    static applyChanges(e637, t695, r246 = 128) {
        if (!t695.length) return e637;
        let i412 = [], n155 = 1, s294 = e637.length ? e637[0] : null;
        for(let l164 = 0, o159 = 0, u63 = 0;; l164++){
            let f70 = l164 < t695.length ? t695[l164] : null, d63 = f70 ? f70.fromA : 1000000000;
            if (d63 - o159 >= r246) for(; s294 && s294.from < d63;){
                let p27 = s294;
                if (o159 >= p27.from || d63 <= p27.to || u63) {
                    let v24 = Math.max(p27.from, o159) - u63, c74 = Math.min(p27.to, d63) - u63;
                    p27 = v24 >= c74 ? null : new $3(v24, c74, p27.tree, p27.offset + u63, l164 > 0, !!f70);
                }
                if (p27 && i412.push(p27), s294.to > d63) break;
                s294 = n155 < e637.length ? e637[n155++] : null;
            }
            if (!f70) break;
            o159 = f70.toA, u63 = f70.toA - f70.toB;
        }
        return i412;
    }
}, Ae2 = class {
    startParse(e638, t696, r247) {
        return typeof e638 == "string" && (e638 = new de2(e638)), r247 = r247 ? r247.length ? r247.map((i413)=>new N2(i413.from, i413.to)
        ) : [
            new N2(0, 0)
        ] : [
            new N2(0, e638.length)
        ], this.createParse(e638, t696 || [], r247);
    }
    parse(e639, t697, r248) {
        let i414 = this.startParse(e639, t697, r248);
        for(;;){
            let n156 = i414.advance();
            if (n156) return n156;
        }
    }
}, de2 = class {
    constructor(e640){
        this.string = e640;
    }
    get length() {
        return this.string.length;
    }
    chunk(e641) {
        return this.string.slice(e641);
    }
    get lineChunks() {
        return !1;
    }
    read(e642, t698) {
        return this.string.slice(e642, t698);
    }
};
function Ne1(h116) {
    return (e643, t699, r249, i415)=>new ge2(e643, h116, t699, r249, i415)
    ;
}
var re2 = class {
    constructor(e644, t700, r250, i416, n157){
        this.parser = e644, this.parse = t700, this.overlay = r250, this.target = i416, this.ranges = n157;
    }
}, ce2 = class {
    constructor(e645, t701, r251, i417, n158, s295, l165){
        this.parser = e645, this.predicate = t701, this.mounts = r251, this.index = i417, this.start = n158, this.target = s295, this.prev = l165, this.depth = 0, this.ranges = [];
    }
}, ie2 = new y4({
    perNode: !0
}), ge2 = class {
    constructor(e646, t702, r252, i418, n159){
        this.nest = t702, this.input = r252, this.fragments = i418, this.ranges = n159, this.inner = [], this.innerDone = 0, this.baseTree = null, this.stoppedAt = null, this.baseParse = e646;
    }
    advance() {
        if (this.baseParse) {
            let r253 = this.baseParse.advance();
            if (!r253) return null;
            if (this.baseParse = null, this.baseTree = r253, this.startInner(), this.stoppedAt != null) for (let i419 of this.inner)i419.parse.stopAt(this.stoppedAt);
        }
        if (this.innerDone == this.inner.length) {
            let r254 = this.baseTree;
            return this.stoppedAt != null && (r254 = new P5(r254.type, r254.children, r254.positions, r254.length, r254.propValues.concat([
                [
                    ie2,
                    this.stoppedAt
                ]
            ]))), r254;
        }
        let e647 = this.inner[this.innerDone], t703 = e647.parse.advance();
        if (t703) {
            this.innerDone++;
            let r255 = Object.assign(Object.create(null), e647.target.props);
            r255[y4.mounted.id] = new he2(t703, e647.overlay, e647.parser), e647.target.props = r255;
        }
        return null;
    }
    get parsedPos() {
        if (this.baseParse) return 0;
        let e648 = this.input.length;
        for(let t704 = this.innerDone; t704 < this.inner.length; t704++)this.inner[t704].ranges[0].from < e648 && (e648 = Math.min(e648, this.inner[t704].parse.parsedPos));
        return e648;
    }
    stopAt(e649) {
        if (this.stoppedAt = e649, this.baseParse) this.baseParse.stopAt(e649);
        else for(let t705 = this.innerDone; t705 < this.inner.length; t705++)this.inner[t705].parse.stopAt(e649);
    }
    startInner() {
        let e650 = new be2(this.fragments), t706 = null, r256 = null, i420 = new G1(new T4(this.baseTree, this.ranges[0].from, 0, null), 1);
        e: for(let n160, s296; this.stoppedAt == null || i420.from < this.stoppedAt;){
            let l166 = !0, o160;
            if (e650.hasNode(i420)) {
                if (t706) {
                    let u64 = t706.mounts.find((f71)=>f71.frag.from <= i420.from && f71.frag.to >= i420.to && f71.mount.overlay
                    );
                    if (u64) for (let f110 of u64.mount.overlay){
                        let d64 = f110.from + u64.pos, p28 = f110.to + u64.pos;
                        d64 >= i420.from && p28 <= i420.to && t706.ranges.push({
                            from: d64,
                            to: p28
                        });
                    }
                }
                l166 = !1;
            } else if (r256 && (s296 = Se2(r256.ranges, i420.from, i420.to))) l166 = s296 != 2;
            else if (!i420.type.isAnonymous && i420.from < i420.to && (n160 = this.nest(i420, this.input))) {
                i420.tree || _e1(i420);
                let u65 = e650.findMounts(i420.from, n160.parser);
                if (typeof n160.overlay == "function") t706 = new ce2(n160.parser, n160.overlay, u65, this.inner.length, i420.from, i420.tree, t706);
                else {
                    let f72 = xe2(this.ranges, n160.overlay || [
                        new N2(i420.from, i420.to)
                    ]);
                    f72.length && this.inner.push(new re2(n160.parser, n160.parser.startParse(this.input, ye2(u65, f72), f72), n160.overlay ? n160.overlay.map((d65)=>new N2(d65.from - i420.from, d65.to - i420.from)
                    ) : null, i420.tree, f72)), n160.overlay ? f72.length && (r256 = {
                        ranges: f72,
                        depth: 0,
                        prev: r256
                    }) : l166 = !1;
                }
            } else t706 && (o160 = t706.predicate(i420)) && (o160 === !0 && (o160 = new N2(i420.from, i420.to)), o160.from < o160.to && t706.ranges.push(o160));
            if (l166 && i420.firstChild()) t706 && t706.depth++, r256 && r256.depth++;
            else for(; !i420.nextSibling();){
                if (!i420.parent()) break e;
                if (t706 && !--t706.depth) {
                    let u66 = xe2(this.ranges, t706.ranges);
                    u66.length && this.inner.splice(t706.index, 0, new re2(t706.parser, t706.parser.startParse(this.input, ye2(t706.mounts, u66), u66), t706.ranges.map((f73)=>new N2(f73.from - t706.start, f73.to - t706.start)
                    ), t706.target, u66)), t706 = t706.prev;
                }
                r256 && !--r256.depth && (r256 = r256.prev);
            }
        }
    }
};
function Se2(h117, e651, t707) {
    for (let r257 of h117){
        if (r257.from >= t707) break;
        if (r257.to > e651) return r257.from <= e651 && r257.to >= t707 ? 2 : 1;
    }
    return 0;
}
function me2(h118, e652, t708, r258, i421, n161) {
    if (e652 < t708) {
        let s297 = h118.buffer[e652 + 1], l167 = h118.buffer[t708 - 2];
        r258.push(h118.slice(e652, t708, s297, l167)), i421.push(s297 - n161);
    }
}
function _e1(h119) {
    let { node: e653  } = h119, t709 = 0;
    do h119.parent(), t709++;
    while (!h119.tree)
    let r259 = 0, i422 = h119.tree, n162 = 0;
    for(; n162 = i422.positions[r259] + h119.from, !(n162 <= e653.from && n162 + i422.children[r259].length >= e653.to); r259++);
    let s298 = i422.children[r259], l168 = s298.buffer;
    function o161(u67, f74, d66, p29, v25) {
        let c75 = u67;
        for(; l168[c75 + 2] + n162 <= e653.from;)c75 = l168[c75 + 3];
        let S18 = [], j16 = [];
        me2(s298, u67, c75, S18, j16, p29);
        let z17 = l168[c75 + 1], F14 = l168[c75 + 2], A16 = z17 + n162 == e653.from && F14 + n162 == e653.to && l168[c75] == e653.type.id;
        return S18.push(A16 ? e653.toTree() : o161(c75 + 4, l168[c75 + 3], s298.set.types[l168[c75]], z17, F14 - z17)), j16.push(z17 - p29), me2(s298, l168[c75 + 3], f74, S18, j16, p29), new P5(d66, S18, j16, v25);
    }
    i422.children[r259] = o161(0, l168.length, B2.none, 0, s298.length);
    for(let u1 = 0; u1 <= t709; u1++)h119.childAfter(e653.from);
}
var ne2 = class {
    constructor(e654, t710){
        this.offset = t710, this.done = !1, this.cursor = e654.fullCursor();
    }
    moveTo(e655) {
        let { cursor: t711  } = this, r260 = e655 - this.offset;
        for(; !this.done && t711.from < r260;)t711.to >= e655 && t711.enter(r260, 1, !1, !1) || t711.next(!1) || (this.done = !0);
    }
    hasNode(e656) {
        if (this.moveTo(e656.from), !this.done && this.cursor.from + this.offset == e656.from && this.cursor.tree) for(let t712 = this.cursor.tree;;){
            if (t712 == e656.tree) return !0;
            if (t712.children.length && t712.positions[0] == 0 && t712.children[0] instanceof P5) t712 = t712.children[0];
            else break;
        }
        return !1;
    }
}, be2 = class {
    constructor(e657){
        var t713;
        if (this.fragments = e657, this.curTo = 0, this.fragI = 0, e657.length) {
            let r261 = this.curFrag = e657[0];
            this.curTo = (t713 = r261.tree.prop(ie2)) !== null && t713 !== void 0 ? t713 : r261.to, this.inner = new ne2(r261.tree, -r261.offset);
        } else this.curFrag = this.inner = null;
    }
    hasNode(e658) {
        for(; this.curFrag && e658.from >= this.curTo;)this.nextFrag();
        return this.curFrag && this.curFrag.from <= e658.from && this.curTo >= e658.to && this.inner.hasNode(e658);
    }
    nextFrag() {
        var e659;
        if (this.fragI++, this.fragI == this.fragments.length) this.curFrag = this.inner = null;
        else {
            let t714 = this.curFrag = this.fragments[this.fragI];
            this.curTo = (e659 = t714.tree.prop(ie2)) !== null && e659 !== void 0 ? e659 : t714.to, this.inner = new ne2(t714.tree, -t714.offset);
        }
    }
    findMounts(e660, t715) {
        var r262;
        let i423 = [];
        if (this.inner) {
            this.inner.cursor.moveTo(e660, 1);
            for(let n163 = this.inner.cursor.node; n163; n163 = n163.parent){
                let s299 = (r262 = n163.tree) === null || r262 === void 0 ? void 0 : r262.prop(y4.mounted);
                if (s299 && s299.parser == t715) for(let l169 = this.fragI; l169 < this.fragments.length; l169++){
                    let o162 = this.fragments[l169];
                    if (o162.from >= n163.to) break;
                    o162.tree == this.curFrag.tree && i423.push({
                        frag: o162,
                        pos: n163.from - o162.offset,
                        mount: s299
                    });
                }
            }
        }
        return i423;
    }
};
function xe2(h120, e661) {
    let t716 = null, r263 = e661;
    for(let i424 = 1, n164 = 0; i424 < h120.length; i424++){
        let s300 = h120[i424 - 1].to, l170 = h120[i424].from;
        for(; n164 < r263.length; n164++){
            let o163 = r263[n164];
            if (o163.from >= l170) break;
            o163.to <= s300 || (t716 || (r263 = t716 = e661.slice()), o163.from < s300 ? (t716[n164] = new N2(o163.from, s300), o163.to > l170 && t716.splice(n164 + 1, 0, new N2(l170, o163.to))) : o163.to > l170 ? t716[n164--] = new N2(l170, o163.to) : t716.splice(n164--, 1));
        }
    }
    return r263;
}
function Pe1(h121, e662, t717, r264) {
    let i425 = 0, n165 = 0, s301 = !1, l171 = !1, o164 = -1000000000, u68 = [];
    for(;;){
        let f75 = i425 == h121.length ? 1000000000 : s301 ? h121[i425].to : h121[i425].from, d67 = n165 == e662.length ? 1000000000 : l171 ? e662[n165].to : e662[n165].from;
        if (s301 != l171) {
            let p30 = Math.max(o164, t717), v26 = Math.min(f75, d67, r264);
            p30 < v26 && u68.push(new N2(p30, v26));
        }
        if (o164 = Math.min(f75, d67), o164 == 1000000000) break;
        f75 == o164 && (s301 ? (s301 = !1, i425++) : s301 = !0), d67 == o164 && (l171 ? (l171 = !1, n165++) : l171 = !0);
    }
    return u68;
}
function ye2(h122, e663) {
    let t718 = [];
    for (let { pos: r265 , mount: i426 , frag: n166  } of h122){
        let s302 = r265 + (i426.overlay ? i426.overlay[0].from : 0), l172 = s302 + i426.tree.length, o165 = Math.max(n166.from, s302), u69 = Math.min(n166.to, l172);
        if (i426.overlay) {
            let f76 = i426.overlay.map((p31)=>new N2(p31.from + r265, p31.to + r265)
            ), d68 = Pe1(e663, f76, o165, u69);
            for(let p110 = 0, v27 = o165;; p110++){
                let c76 = p110 == d68.length, S19 = c76 ? u69 : d68[p110].from;
                if (S19 > v27 && t718.push(new $3(v27, S19, i426.tree, -s302, n166.from >= v27, n166.to <= S19)), c76) break;
                v27 = d68[p110].to;
            }
        } else t718.push(new $3(o165, u69, i426.tree, -s302, n166.from >= s302, n166.to <= l172));
    }
    return t718;
}
var S5 = new y4;
function H3(n167) {
    return O1.define({
        combine: n167 ? (t719)=>t719.concat(n167)
         : void 0
    });
}
var u = class {
    constructor(t720, e664, i427, r266 = []){
        this.data = t720, this.topNode = i427, w1.prototype.hasOwnProperty("tree") || Object.defineProperty(w1.prototype, "tree", {
            get () {
                return v3(this);
            }
        }), this.parser = e664, this.extension = [
            m3.of(this),
            w1.languageData.of((s303, o166, a94)=>s303.facet(B3(s303, o166, a94))
            )
        ].concat(r266);
    }
    isActiveAt(t721, e665, i428 = -1) {
        return B3(t721, e665, i428) == this.data;
    }
    findRegions(t722) {
        let e666 = t722.facet(m3);
        if ((e666 == null ? void 0 : e666.data) == this.data) return [
            {
                from: 0,
                to: t722.doc.length
            }
        ];
        if (!e666 || !e666.allowsNesting) return [];
        let i429 = [], r267 = (s304, o167)=>{
            if (s304.prop(S5) == this.data) {
                i429.push({
                    from: o167,
                    to: o167 + s304.length
                });
                return;
            }
            let a95 = s304.prop(y4.mounted);
            if (a95) {
                if (a95.tree.prop(S5) == this.data) {
                    if (a95.overlay) for (let l173 of a95.overlay)i429.push({
                        from: l173.from + o167,
                        to: l173.to + o167
                    });
                    else i429.push({
                        from: o167,
                        to: o167 + s304.length
                    });
                    return;
                } else if (a95.overlay) {
                    let l174 = i429.length;
                    if (r267(a95.tree, a95.overlay[0].from + o167), i429.length > l174) return;
                }
            }
            for(let l175 = 0; l175 < s304.children.length; l175++){
                let h123 = s304.children[l175];
                h123 instanceof P5 && r267(h123, s304.positions[l175] + o167);
            }
        };
        return r267(v3(t722), 0), i429;
    }
    get allowsNesting() {
        return !0;
    }
};
u.setState = v.define();
function B3(n168, t723, e667) {
    let i430 = n168.facet(m3);
    if (!i430) return null;
    let r268 = i430.data;
    if (i430.allowsNesting) for(let s305 = v3(n168).topNode; s305; s305 = s305.enter(t723, e667, !0, !1))r268 = s305.type.prop(S5) || r268;
    return r268;
}
var P6 = class extends u {
    constructor(t724, e668){
        super(t724, e668, e668.topNode);
        this.parser = e668;
    }
    static define(t725) {
        let e669 = H3(t725.languageData);
        return new P6(e669, t725.parser.configure({
            props: [
                S5.add((i431)=>i431.isTop ? e669 : void 0
                )
            ]
        }));
    }
    configure(t726) {
        return new P6(this.data, this.parser.configure(t726));
    }
    get allowsNesting() {
        return this.parser.wrappers.length > 0;
    }
};
function v3(n169) {
    let t727 = n169.field(u.state, !1);
    return t727 ? t727.tree : P5.empty;
}
var D4 = class {
    constructor(t728, e670 = t728.length){
        this.doc = t728, this.length = e670, this.cursorPos = 0, this.string = "", this.cursor = t728.iter();
    }
    syncTo(t729) {
        return this.string = this.cursor.next(t729 - this.cursorPos).value, this.cursorPos = t729 + this.string.length, this.cursorPos - this.string.length;
    }
    chunk(t730) {
        return this.syncTo(t730), this.string;
    }
    get lineChunks() {
        return !0;
    }
    read(t731, e671) {
        let i432 = this.cursorPos - this.string.length;
        return t731 < i432 || e671 >= this.cursorPos ? this.doc.sliceString(t731, e671) : this.string.slice(t731 - i432, e671 - i432);
    }
}, y5 = null, C4 = class {
    constructor(t732, e672, i433 = [], r269, s306, o168, a96, l176){
        this.parser = t732, this.state = e672, this.fragments = i433, this.tree = r269, this.treeLen = s306, this.viewport = o168, this.skipped = a96, this.scheduleOn = l176, this.parse = null, this.tempSkipped = [];
    }
    startParse() {
        return this.parser.startParse(new D4(this.state.doc), this.fragments);
    }
    work(t733, e673) {
        return e673 != null && e673 >= this.state.doc.length && (e673 = void 0), this.tree != P5.empty && this.isDone(e673 ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(()=>{
            var i434;
            let r270 = Date.now() + t733;
            for(this.parse || (this.parse = this.startParse()), e673 != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > e673) && e673 < this.state.doc.length && this.parse.stopAt(e673);;){
                let s307 = this.parse.advance();
                if (s307) if (this.fragments = this.withoutTempSkipped($3.addTree(s307, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i434 = this.parse.stoppedAt) !== null && i434 !== void 0 ? i434 : this.state.doc.length, this.tree = s307, this.parse = null, this.treeLen < (e673 ?? this.state.doc.length)) this.parse = this.startParse();
                else return !0;
                if (Date.now() > r270) return !1;
            }
        });
    }
    takeTree() {
        let t734, e674;
        this.parse && (t734 = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > t734) && this.parse.stopAt(t734), this.withContext(()=>{
            for(; !(e674 = this.parse.advance()););
        }), this.treeLen = t734, this.tree = e674, this.fragments = this.withoutTempSkipped($3.addTree(this.tree, this.fragments, !0)), this.parse = null);
    }
    withContext(t735) {
        let e675 = y5;
        y5 = this;
        try {
            return t735();
        } finally{
            y5 = e675;
        }
    }
    withoutTempSkipped(t736) {
        for(let e676; e676 = this.tempSkipped.pop();)t736 = O4(t736, e676.from, e676.to);
        return t736;
    }
    changes(t737, e677) {
        let { fragments: i435 , tree: r271 , treeLen: s308 , viewport: o169 , skipped: a97  } = this;
        if (this.takeTree(), !t737.empty) {
            let l177 = [];
            if (t737.iterChangedRanges((h124, f77, d69, x23)=>l177.push({
                    fromA: h124,
                    toA: f77,
                    fromB: d69,
                    toB: x23
                })
            ), i435 = $3.applyChanges(i435, l177), r271 = P5.empty, s308 = 0, o169 = {
                from: t737.mapPos(o169.from, -1),
                to: t737.mapPos(o169.to, 1)
            }, this.skipped.length) {
                a97 = [];
                for (let h125 of this.skipped){
                    let f78 = t737.mapPos(h125.from, 1), d70 = t737.mapPos(h125.to, -1);
                    f78 < d70 && a97.push({
                        from: f78,
                        to: d70
                    });
                }
            }
        }
        return new C4(this.parser, e677, i435, r271, s308, o169, a97, this.scheduleOn);
    }
    updateViewport(t738) {
        if (this.viewport.from == t738.from && this.viewport.to == t738.to) return !1;
        this.viewport = t738;
        let e678 = this.skipped.length;
        for(let i436 = 0; i436 < this.skipped.length; i436++){
            let { from: r272 , to: s309  } = this.skipped[i436];
            r272 < t738.to && s309 > t738.from && (this.fragments = O4(this.fragments, r272, s309), this.skipped.splice(i436--, 1));
        }
        return this.skipped.length >= e678 ? !1 : (this.reset(), !0);
    }
    reset() {
        this.parse && (this.takeTree(), this.parse = null);
    }
    skipUntilInView(t739, e679) {
        this.skipped.push({
            from: t739,
            to: e679
        });
    }
    static getSkippingParser(t740) {
        return new class extends Ae2 {
            createParse(e, i, r273) {
                let s310 = r273[0].from, o170 = r273[r273.length - 1].to;
                return {
                    parsedPos: s310,
                    advance () {
                        let l178 = y5;
                        if (l178) {
                            for (let h126 of r273)l178.tempSkipped.push(h126);
                            t740 && (l178.scheduleOn = l178.scheduleOn ? Promise.all([
                                l178.scheduleOn,
                                t740
                            ]) : t740);
                        }
                        return this.parsedPos = o170, new P5(B2.none, [], [], o170 - s310);
                    },
                    stoppedAt: null,
                    stopAt () {}
                };
            }
        };
    }
    isDone(t741) {
        t741 = Math.min(t741, this.state.doc.length);
        let e680 = this.fragments;
        return this.treeLen >= t741 && e680.length && e680[0].from == 0 && e680[0].to >= t741;
    }
    static get() {
        return y5;
    }
};
function O4(n170, t742, e681) {
    return $3.applyChanges(n170, [
        {
            fromA: t742,
            toA: e681,
            fromB: t742,
            toB: e681
        }
    ]);
}
var c2 = class {
    constructor(t743){
        this.context = t743, this.tree = t743.tree;
    }
    apply(t744) {
        if (!t744.docChanged) return this;
        let e682 = this.context.changes(t744.changes, t744.state), i437 = this.context.treeLen == t744.startState.doc.length ? void 0 : Math.max(t744.changes.mapPos(this.context.treeLen), e682.viewport.to);
        return e682.work(20, i437) || e682.takeTree(), new c2(e682);
    }
    static init(t745) {
        let e683 = Math.min(3000, t745.doc.length), i438 = new C4(t745.facet(m3).parser, t745, [], P5.empty, 0, {
            from: 0,
            to: e683
        }, [], null);
        return i438.work(20, e683) || i438.takeTree(), new c2(i438);
    }
};
u.state = B1.define({
    create: c2.init,
    update (n171, t746) {
        for (let e684 of t746.effects)if (e684.is(u.setState)) return e684.value;
        return t746.startState.facet(m3) != t746.state.facet(m3) ? c2.init(t746.state) : n171.apply(t746);
    }
});
var F3 = (n172)=>{
    let t747 = setTimeout(()=>n172()
    , 500);
    return ()=>clearTimeout(t747)
    ;
};
typeof requestIdleCallback != "undefined" && (F3 = (n173)=>{
    let t748 = -1, e685 = setTimeout(()=>{
        t748 = requestIdleCallback(n173, {
            timeout: 500 - 100
        });
    }, 100);
    return ()=>t748 < 0 ? clearTimeout(e685) : cancelIdleCallback(t748)
    ;
});
var N3 = z2.fromClass(class {
    constructor(t749){
        this.view = t749, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
    }
    update(t750) {
        let e686 = this.view.state.field(u.state).context;
        (e686.updateViewport(t750.view.viewport) || this.view.viewport.to > e686.treeLen) && this.scheduleWork(), t750.docChanged && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(e686);
    }
    scheduleWork() {
        if (this.working) return;
        let { state: t751  } = this.view, e687 = t751.field(u.state);
        (e687.tree != e687.context.tree || !e687.context.isDone(t751.doc.length)) && (this.working = F3(this.work));
    }
    work(t752) {
        this.working = null;
        let e688 = Date.now();
        if (this.chunkEnd < e688 && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e688 + 30000, this.chunkBudget = 3000), this.chunkBudget <= 0) return;
        let { state: i439 , viewport: { to: r274  }  } = this.view, s311 = i439.field(u.state);
        if (s311.tree == s311.context.tree && s311.context.isDone(r274 + 100000)) return;
        let o171 = Math.min(this.chunkBudget, 100, t752 ? Math.max(25, t752.timeRemaining() - 5) : 1000000000), a98 = s311.context.treeLen < r274 && i439.doc.length > r274 + 1000, l179 = s311.context.work(o171, r274 + (a98 ? 0 : 100000));
        this.chunkBudget -= Date.now() - e688, (l179 || this.chunkBudget <= 0) && (s311.context.takeTree(), this.view.dispatch({
            effects: u.setState.of(new c2(s311.context))
        })), this.chunkBudget > 0 && !(l179 && !a98) && this.scheduleWork(), this.checkAsyncSchedule(s311.context);
    }
    checkAsyncSchedule(t753) {
        t753.scheduleOn && (this.workScheduled++, t753.scheduleOn.then(()=>this.scheduleWork()
        ).catch((e689)=>lt(this.view.state, e689)
        ).then(()=>this.workScheduled--
        ), t753.scheduleOn = null);
    }
    destroy() {
        this.working && this.working();
    }
    isWorking() {
        return this.working || this.workScheduled > 0;
    }
}, {
    eventHandlers: {
        focus () {
            this.scheduleWork();
        }
    }
}), m3 = O1.define({
    combine (n174) {
        return n174.length ? n174[0] : null;
    },
    enables: [
        u.state,
        N3
    ]
}), J5 = class {
    constructor(t754, e690 = []){
        this.language = t754, this.support = e690, this.extension = [
            t754,
            e690
        ];
    }
}, T5 = class {
    constructor(t755, e691, i440, r275, s312, o172 = void 0){
        this.name = t755, this.alias = e691, this.extensions = i440, this.filename = r275, this.loadFunc = s312, this.support = o172, this.loading = null;
    }
    load() {
        return this.loading || (this.loading = this.loadFunc().then((t756)=>this.support = t756
        , (t757)=>{
            throw this.loading = null, t757;
        }));
    }
    static of(t758) {
        let { load: e692 , support: i441  } = t758;
        if (!e692) {
            if (!i441) throw new RangeError("Must pass either 'load' or 'support' to LanguageDescription.of");
            e692 = ()=>Promise.resolve(i441)
            ;
        }
        return new T5(t758.name, (t758.alias || []).concat(t758.name).map((r276)=>r276.toLowerCase()
        ), t758.extensions || [], t758.filename, e692, i441);
    }
    static matchFilename(t759, e693) {
        for (let r277 of t759)if (r277.filename && r277.filename.test(e693)) return r277;
        let i442 = /\.([^.]+)$/.exec(e693);
        if (i442) {
            for (let r278 of t759)if (r278.extensions.indexOf(i442[1]) > -1) return r278;
        }
        return null;
    }
    static matchLanguageName(t760, e694, i443 = !0) {
        e694 = e694.toLowerCase();
        for (let r279 of t760)if (r279.alias.some((s313)=>s313 == e694
        )) return r279;
        if (i443) for (let r1 of t760)for (let s1100 of r1.alias){
            let o173 = e694.indexOf(s1100);
            if (o173 > -1 && (s1100.length > 2 || !/\w/.test(e694[o173 - 1]) && !/\w/.test(e694[o173 + s1100.length]))) return r1;
        }
        return null;
    }
}, G2 = O1.define(), E4 = O1.define({
    combine: (n175)=>{
        if (!n175.length) return "  ";
        if (!/^(?: +|\t+)$/.test(n175[0])) throw new Error("Invalid indent unit: " + JSON.stringify(n175[0]));
        return n175[0];
    }
});
function K4(n176) {
    let t761 = n176.facet(E4);
    return t761.charCodeAt(0) == 9 ? n176.tabSize * t761.length : t761.length;
}
function Q4(n177, t762) {
    let e695 = "", i444 = n177.tabSize;
    if (n177.facet(E4).charCodeAt(0) == 9) for(; t762 >= i444;)e695 += "	", t762 -= i444;
    for(let r280 = 0; r280 < t762; r280++)e695 += " ";
    return e695;
}
function X3(n178, t763) {
    n178 instanceof w1 && (n178 = new I4(n178));
    for (let i445 of n178.state.facet(G2)){
        let r281 = i445(n178, t763);
        if (r281 != null) return r281;
    }
    let e696 = v3(n178.state);
    return e696 ? Z2(n178, e696, t763) : null;
}
var I4 = class {
    constructor(t764, e697 = {}){
        this.state = t764, this.options = e697, this.unit = K4(t764);
    }
    lineAt(t765, e698 = 1) {
        let i446 = this.state.doc.lineAt(t765), { simulateBreak: r282  } = this.options;
        return r282 != null && r282 >= i446.from && r282 <= i446.to ? (e698 < 0 ? r282 < t765 : r282 <= t765) ? {
            text: i446.text.slice(r282 - i446.from),
            from: r282
        } : {
            text: i446.text.slice(0, r282 - i446.from),
            from: i446.from
        } : i446;
    }
    textAfterPos(t766, e699 = 1) {
        if (this.options.simulateDoubleBreak && t766 == this.options.simulateBreak) return "";
        let { text: i447 , from: r283  } = this.lineAt(t766, e699);
        return i447.slice(t766 - r283, Math.min(i447.length, t766 + 100 - r283));
    }
    column(t767, e700 = 1) {
        let { text: i448 , from: r284  } = this.lineAt(t767, e700), s314 = this.countColumn(i448, t767 - r284), o174 = this.options.overrideIndentation ? this.options.overrideIndentation(r284) : -1;
        return o174 > -1 && (s314 += o174 - this.countColumn(i448, i448.search(/\S|$/))), s314;
    }
    countColumn(t768, e701 = t768.length) {
        return J(t768, this.state.tabSize, e701);
    }
    lineIndent(t769, e702 = 1) {
        let { text: i449 , from: r285  } = this.lineAt(t769, e702), s315 = this.options.overrideIndentation;
        if (s315) {
            let o175 = s315(r285);
            if (o175 > -1) return o175;
        }
        return this.countColumn(i449, i449.search(/\S|$/));
    }
    get simulatedBreak() {
        return this.options.simulateBreak || null;
    }
}, Y2 = new y4;
function Z2(n179, t770, e703) {
    return L3(t770.resolveInner(e703).enterUnfinishedNodesBefore(e703), e703, n179);
}
function _2(n180) {
    return n180.pos == n180.options.simulateBreak && n180.options.simulateDoubleBreak;
}
function tt1(n181) {
    let t771 = n181.type.prop(Y2);
    if (t771) return t771;
    let e704 = n181.firstChild, i450;
    if (e704 && (i450 = e704.type.prop(y4.closedBy))) {
        let r286 = n181.lastChild, s316 = r286 && i450.indexOf(r286.name) > -1;
        return (o176)=>M4(o176, !0, 1, void 0, s316 && !_2(o176) ? r286.from : void 0)
        ;
    }
    return n181.parent == null ? et1 : null;
}
function L3(n182, t772, e705) {
    for(; n182; n182 = n182.parent){
        let i451 = tt1(n182);
        if (i451) return i451(new W3(e705, t772, n182));
    }
    return null;
}
function et1() {
    return 0;
}
var W3 = class extends I4 {
    constructor(t773, e706, i452){
        super(t773.state, t773.options);
        this.base = t773, this.pos = e706, this.node = i452;
    }
    get textAfter() {
        return this.textAfterPos(this.pos);
    }
    get baseIndent() {
        let t774 = this.state.doc.lineAt(this.node.from);
        for(;;){
            let e707 = this.node.resolve(t774.from);
            for(; e707.parent && e707.parent.from == e707.from;)e707 = e707.parent;
            if (nt(e707, this.node)) break;
            t774 = this.state.doc.lineAt(e707.from);
        }
        return this.lineIndent(t774.from);
    }
    continue() {
        let t775 = this.node.parent;
        return t775 ? L3(t775, this.pos, this.base) : 0;
    }
};
function nt(n183, t776) {
    for(let e708 = t776; e708; e708 = e708.parent)if (n183 == e708) return !0;
    return !1;
}
function it1(n184) {
    let t777 = n184.node, e709 = t777.childAfter(t777.from), i453 = t777.lastChild;
    if (!e709) return null;
    let r287 = n184.options.simulateBreak, s317 = n184.state.doc.lineAt(e709.from), o177 = r287 == null || r287 <= s317.from ? s317.to : Math.min(s317.to, r287);
    for(let a99 = e709.to;;){
        let l180 = t777.childAfter(a99);
        if (!l180 || l180 == i453) return null;
        if (!l180.type.isSkipped) return l180.from < o177 ? e709 : null;
        a99 = l180.to;
    }
}
function gt1({ closing: n185 , align: t778 = !0 , units: e710 = 1  }) {
    return (i454)=>M4(i454, t778, e710, n185)
    ;
}
function M4(n186, t779, e711, i455, r288) {
    let s318 = n186.textAfter, o178 = s318.match(/^\s*/)[0].length, a100 = i455 && s318.slice(o178, o178 + i455.length) == i455 || r288 == n186.pos + o178, l181 = t779 ? it1(n186) : null;
    return l181 ? a100 ? n186.column(l181.from) : n186.column(l181.to) : n186.baseIndent + (a100 ? 0 : n186.unit * e711);
}
var kt1 = (n187)=>n187.baseIndent
;
function wt1({ except: n188 , units: t780 = 1  } = {}) {
    return (e712)=>{
        let i456 = n188 && n188.test(e712.textAfter);
        return e712.baseIndent + (i456 ? 0 : t780 * e712.unit);
    };
}
var rt1 = 200;
function vt1() {
    return w1.transactionFilter.of((n189)=>{
        if (!n189.docChanged || !n189.isUserEvent("input.type")) return n189;
        let t781 = n189.startState.languageDataAt("indentOnInput", n189.startState.selection.main.head);
        if (!t781.length) return n189;
        let e713 = n189.newDoc, { head: i457  } = n189.newSelection.main, r289 = e713.lineAt(i457);
        if (i457 > r289.from + rt1) return n189;
        let s319 = e713.sliceString(r289.from, i457);
        if (!t781.some((h127)=>h127.test(s319)
        )) return n189;
        let { state: o179  } = n189, a101 = -1, l182 = [];
        for (let { head: h1  } of o179.selection.ranges){
            let f79 = o179.doc.lineAt(h1);
            if (f79.from == a101) continue;
            a101 = f79.from;
            let d71 = X3(o179, f79.from);
            if (d71 == null) continue;
            let x24 = /^\s*/.exec(f79.text)[0], b30 = Q4(o179, d71);
            x24 != b30 && l182.push({
                from: f79.from,
                to: f79.from + x24.length,
                insert: b30
            });
        }
        return l182.length ? [
            n189,
            {
                changes: l182,
                sequential: !0
            }
        ] : n189;
    });
}
var st = O1.define(), ot1 = new y4;
function yt(n190) {
    let t782 = n190.firstChild, e714 = n190.lastChild;
    return t782 && t782.to < e714.from ? {
        from: t782.to,
        to: e714.type.isError ? n190.to : e714.from
    } : null;
}
function lt1(n191, t783, e715) {
    let i458 = v3(n191);
    if (i458.length == 0) return null;
    let r290 = i458.resolveInner(e715), s320 = null;
    for(let o180 = r290; o180; o180 = o180.parent){
        if (o180.to <= e715 || o180.from > e715) continue;
        if (s320 && o180.from < t783) break;
        let a102 = o180.type.prop(ot1);
        if (a102) {
            let l183 = a102(o180, n191);
            l183 && l183.from <= e715 && l183.from >= t783 && l183.to > e715 && (s320 = l183);
        }
    }
    return s320;
}
function xt1(n192, t784, e716) {
    for (let i459 of n192.facet(st)){
        let r291 = i459(n192, t784, e716);
        if (r291) return r291;
    }
    return lt1(n192, t784, e716);
}
var h = class extends v1 {
    compare(e717) {
        return this == e717 || this.constructor == e717.constructor && this.eq(e717);
    }
    eq(e) {
        return !1;
    }
    destroy(e) {}
};
h.prototype.elementClass = "";
h.prototype.toDOM = void 0;
h.prototype.mapMode = D1.TrackBefore;
h.prototype.startSide = h.prototype.endSide = -1;
h.prototype.point = !0;
var k2 = O1.define(), V3 = {
    class: "",
    renderEmptyElements: !1,
    elementStyle: "",
    markers: ()=>f.empty
    ,
    lineMarker: ()=>null
    ,
    lineMarkerChange: null,
    initialSpacer: null,
    updateSpacer: null,
    domEventHandlers: {}
}, p4 = O1.define();
function K5(t785) {
    return [
        C5(),
        p4.of(Object.assign(Object.assign({}, V3), t785))
    ];
}
var q4 = D2.baseTheme({
    ".cm-gutters": {
        display: "flex",
        height: "100%",
        boxSizing: "border-box",
        left: 0,
        zIndex: 200
    },
    "&light .cm-gutters": {
        backgroundColor: "#f5f5f5",
        color: "#999",
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
    }
}), v4 = O1.define({
    combine: (t786)=>t786.some((e718)=>e718
        )
});
function C5(t787) {
    let e719 = [
        P7,
        q4
    ];
    return t787 && t787.fixed === !1 && e719.push(v4.of(!0)), e719;
}
var P7 = z2.fromClass(class {
    constructor(t788){
        this.view = t788, this.prevViewport = t788.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight + "px", this.gutters = t788.state.facet(p4).map((e720)=>new b5(t788, e720)
        );
        for (let e1 of this.gutters)this.dom.appendChild(e1.dom);
        this.fixed = !t788.state.facet(v4), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), t788.scrollDOM.insertBefore(this.dom, t788.contentDOM);
    }
    update(t789) {
        if (this.updateGutters(t789)) {
            let e721 = this.prevViewport, r292 = t789.view.viewport, s321 = Math.min(e721.to, r292.to) - Math.max(e721.from, r292.from);
            this.syncGutters(s321 < (r292.to - r292.from) * 0.8);
        }
        t789.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight + "px"), this.view.state.facet(v4) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = t789.view.viewport;
    }
    syncGutters(t790) {
        let e722 = this.dom.nextSibling;
        t790 && this.dom.remove();
        let r293 = f.iter(this.view.state.facet(k2), this.view.viewport.from), s322 = [], i460 = this.gutters.map((o181)=>new O5(o181, this.view.viewport, -this.view.documentPadding.top)
        );
        for (let o2 of this.view.viewportLineBlocks){
            let n193;
            if (Array.isArray(o2.type)) {
                for (let l184 of o2.type)if (l184.type == A3.Text) {
                    n193 = l184;
                    break;
                }
            } else n193 = o2.type == A3.Text ? o2 : void 0;
            if (!!n193) {
                s322.length && (s322 = []), E5(r293, s322, o2.from);
                for (let l185 of i460)l185.line(this.view, n193, s322);
            }
        }
        for (let o1 of i460)o1.finish();
        t790 && this.view.scrollDOM.insertBefore(this.dom, e722);
    }
    updateGutters(t791) {
        let e723 = t791.startState.facet(p4), r294 = t791.state.facet(p4), s323 = t791.docChanged || t791.heightChanged || t791.viewportChanged || !f.eq(t791.startState.facet(k2), t791.state.facet(k2), t791.view.viewport.from, t791.view.viewport.to);
        if (e723 == r294) for (let i461 of this.gutters)i461.update(t791) && (s323 = !0);
        else {
            s323 = !0;
            let i462 = [];
            for (let o182 of r294){
                let n194 = e723.indexOf(o182);
                n194 < 0 ? i462.push(new b5(this.view, o182)) : (this.gutters[n194].update(t791), i462.push(this.gutters[n194]));
            }
            for (let o3 of this.gutters)o3.dom.remove(), i462.indexOf(o3) < 0 && o3.destroy();
            for (let o4 of i462)this.dom.appendChild(o4.dom);
            this.gutters = i462;
        }
        return s323;
    }
    destroy() {
        for (let t792 of this.gutters)t792.destroy();
        this.dom.remove();
    }
}, {
    provide: V1.scrollMargins.from((t793)=>t793.gutters.length == 0 || !t793.fixed ? null : t793.view.textDirection == P3.LTR ? {
            left: t793.dom.offsetWidth
        } : {
            right: t793.dom.offsetWidth
        }
    )
});
function S6(t794) {
    return Array.isArray(t794) ? t794 : [
        t794
    ];
}
function E5(t795, e724, r295) {
    for(; t795.value && t795.from <= r295;)t795.from == r295 && e724.push(t795.value), t795.next();
}
var O5 = class {
    constructor(e725, r296, s324){
        this.gutter = e725, this.height = s324, this.localMarkers = [], this.i = 0, this.cursor = f.iter(e725.markers, r296.from);
    }
    line(e726, r297, s325) {
        this.localMarkers.length && (this.localMarkers = []), E5(this.cursor, this.localMarkers, r297.from);
        let i463 = s325.length ? this.localMarkers.concat(s325) : this.localMarkers, o183 = this.gutter.config.lineMarker(e726, r297, i463);
        o183 && i463.unshift(o183);
        let n195 = this.gutter;
        if (i463.length == 0 && !n195.config.renderEmptyElements) return;
        let l186 = r297.top - this.height;
        if (this.i == n195.elements.length) {
            let a103 = new y6(e726, r297.height, l186, i463);
            n195.elements.push(a103), n195.dom.appendChild(a103.dom);
        } else n195.elements[this.i].update(e726, r297.height, l186, i463);
        this.height = r297.bottom, this.i++;
    }
    finish() {
        let e727 = this.gutter;
        for(; e727.elements.length > this.i;){
            let r298 = e727.elements.pop();
            e727.dom.removeChild(r298.dom), r298.destroy();
        }
    }
}, b5 = class {
    constructor(e728, r299){
        this.view = e728, this.config = r299, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for(let s326 in r299.domEventHandlers)this.dom.addEventListener(s326, (i464)=>{
            let o184 = e728.lineBlockAtHeight(i464.clientY - e728.documentTop);
            r299.domEventHandlers[s326](e728, o184, i464) && i464.preventDefault();
        });
        this.markers = S6(r299.markers(e728)), r299.initialSpacer && (this.spacer = new y6(e728, 0, 0, [
            r299.initialSpacer(e728)
        ]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
    }
    update(e729) {
        let r300 = this.markers;
        if (this.markers = S6(this.config.markers(e729.view)), this.spacer && this.config.updateSpacer) {
            let i465 = this.config.updateSpacer(this.spacer.markers[0], e729);
            i465 != this.spacer.markers[0] && this.spacer.update(e729.view, 0, 0, [
                i465
            ]);
        }
        let s327 = e729.view.viewport;
        return !f.eq(this.markers, r300, s327.from, s327.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e729) : !1);
    }
    destroy() {
        for (let e730 of this.elements)e730.destroy();
    }
}, y6 = class {
    constructor(e731, r301, s328, i466){
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.update(e731, r301, s328, i466);
    }
    update(e732, r302, s329, i467) {
        this.height != r302 && (this.dom.style.height = (this.height = r302) + "px"), this.above != s329 && (this.dom.style.marginTop = (this.above = s329) ? s329 + "px" : ""), z4(this.markers, i467) || this.setMarkers(e732, i467);
    }
    setMarkers(e733, r303) {
        let s330 = "cm-gutterElement", i468 = this.dom.firstChild;
        for(let o185 = 0, n196 = 0;;){
            let l187 = n196, a104 = o185 < r303.length ? r303[o185++] : null, m43 = !1;
            if (a104) {
                let u70 = a104.elementClass;
                u70 && (s330 += " " + u70);
                for(let c77 = n196; c77 < this.markers.length; c77++)if (this.markers[c77].compare(a104)) {
                    l187 = c77, m43 = !0;
                    break;
                }
            } else l187 = this.markers.length;
            for(; n196 < l187;){
                let u71 = this.markers[n196++];
                if (u71.toDOM) {
                    u71.destroy(i468);
                    let c78 = i468.nextSibling;
                    i468.remove(), i468 = c78;
                }
            }
            if (!a104) break;
            a104.toDOM && (m43 ? i468 = i468.nextSibling : this.dom.insertBefore(a104.toDOM(e733), i468)), m43 && n196++;
        }
        this.dom.className = s330, this.markers = r303;
    }
    destroy() {
        this.setMarkers(null, []);
    }
};
function z4(t796, e734) {
    if (t796.length != e734.length) return !1;
    for(let r304 = 0; r304 < t796.length; r304++)if (!t796[r304].compare(e734[r304])) return !1;
    return !0;
}
var R2 = O1.define(), d2 = O1.define({
    combine (t797) {
        return be(t797, {
            formatNumber: String,
            domEventHandlers: {}
        }, {
            domEventHandlers (e735, r305) {
                let s331 = Object.assign({}, e735);
                for(let i469 in r305){
                    let o186 = s331[i469], n197 = r305[i469];
                    s331[i469] = o186 ? (l188, a105, m44)=>o186(l188, a105, m44) || n197(l188, a105, m44)
                     : n197;
                }
                return s331;
            }
        });
    }
}), x5 = class extends h {
    constructor(e736){
        super();
        this.number = e736;
    }
    eq(e737) {
        return this.number == e737.number;
    }
    toDOM() {
        return document.createTextNode(this.number);
    }
};
function w5(t798, e738) {
    return t798.state.facet(d2).formatNumber(e738, t798.state);
}
var j4 = p4.compute([
    d2
], (t799)=>({
        class: "cm-lineNumbers",
        renderEmptyElements: !1,
        markers (e739) {
            return e739.state.facet(R2);
        },
        lineMarker (e740, r306, s332) {
            return s332.some((i470)=>i470.toDOM
            ) ? null : new x5(w5(e740, e740.state.doc.lineAt(r306.from).number));
        },
        lineMarkerChange: (e741)=>e741.startState.facet(d2) != e741.state.facet(d2)
        ,
        initialSpacer (e742) {
            return new x5(w5(e742, N4(e742.state.doc.lines)));
        },
        updateSpacer (e743, r307) {
            let s333 = w5(r307.view, N4(r307.view.state.doc.lines));
            return s333 == e743.number ? e743 : new x5(s333);
        },
        domEventHandlers: t799.facet(d2).domEventHandlers
    })
);
function Q5(t800 = {}) {
    return [
        d2.of(t800),
        C5(),
        j4
    ];
}
function N4(t801) {
    let e744 = 9;
    for(; e744 < t801;)e744 = e744 * 10 + 9;
    return e744;
}
var W4 = new class extends h {
    constructor(){
        super(...arguments);
        this.elementClass = "cm-activeLineGutter";
    }
}, F4 = k2.compute([
    "selection"
], (t802)=>{
    let e745 = [], r308 = -1;
    for (let s334 of t802.selection.ranges)if (s334.empty) {
        let i471 = t802.doc.lineAt(s334.head).from;
        i471 > r308 && (r308 = i471, e745.push(W4.range(i471)));
    }
    return f.of(e745);
});
function U2() {
    return F4;
}
function x6(e746, t803) {
    let o187 = t803.mapPos(e746.from, 1), n198 = t803.mapPos(e746.to, -1);
    return o187 >= n198 ? void 0 : {
        from: o187,
        to: n198
    };
}
var d3 = v.define({
    map: x6
}), c3 = v.define({
    map: x6
});
function A5(e747) {
    let t804 = [];
    for (let { head: o188  } of e747.state.selection.ranges)t804.some((n199)=>n199.from <= o188 && n199.to >= o188
    ) || t804.push(e747.lineBlockAt(o188));
    return t804;
}
var a3 = B1.define({
    create () {
        return w4.none;
    },
    update (e748, t805) {
        e748 = e748.map(t805.changes);
        for (let o189 of t805.effects)o189.is(d3) && !$4(e748, o189.value.from, o189.value.to) ? e748 = e748.update({
            add: [
                _3.range(o189.value.from, o189.value.to)
            ]
        }) : o189.is(c3) && (e748 = e748.update({
            filter: (n200, l189)=>o189.value.from != n200 || o189.value.to != l189
            ,
            filterFrom: o189.value.from,
            filterTo: o189.value.to
        }));
        if (t805.selection) {
            let o190 = !1, { head: n201  } = t805.selection.main;
            e748.between(n201, n201, (l190, r309)=>{
                l190 < n201 && r309 > n201 && (o190 = !0);
            }), o190 && (e748 = e748.update({
                filterFrom: n201,
                filterTo: n201,
                filter: (l191, r310)=>r310 <= n201 || l191 >= n201
            }));
        }
        return e748;
    },
    provide: (e749)=>D2.decorations.from(e749)
});
function m4(e750, t806, o191) {
    var n202;
    let l192 = null;
    return (n202 = e750.field(a3, !1)) === null || n202 === void 0 || n202.between(t806, o191, (r311, f80)=>{
        (!l192 || l192.from > r311) && (l192 = {
            from: r311,
            to: f80
        });
    }), l192;
}
function $4(e751, t807, o192) {
    let n203 = !1;
    return e751.between(t807, t807, (l193, r312)=>{
        l193 == t807 && r312 == o192 && (n203 = !0);
    }), n203;
}
function M5(e752, t808) {
    return e752.field(a3, !1) ? t808 : t808.concat(v.appendConfig.of(O6()));
}
var U3 = (e753)=>{
    for (let t809 of A5(e753)){
        let o193 = xt1(e753.state, t809.from, t809.to);
        if (o193) return e753.dispatch({
            effects: M5(e753.state, [
                d3.of(o193),
                D5(e753, o193)
            ])
        }), !0;
    }
    return !1;
}, j5 = (e754)=>{
    if (!e754.state.field(a3, !1)) return !1;
    let t810 = [];
    for (let o194 of A5(e754)){
        let n204 = m4(e754.state, o194.from, o194.to);
        n204 && t810.push(c3.of(n204), D5(e754, n204, !1));
    }
    return t810.length && e754.dispatch({
        effects: t810
    }), t810.length > 0;
};
function D5(e755, t811, o195 = !0) {
    let n205 = e755.state.doc.lineAt(t811.from).number, l194 = e755.state.doc.lineAt(t811.to).number;
    return D2.announce.of(`${e755.state.phrase(o195 ? "Folded lines" : "Unfolded lines")} ${n205} ${e755.state.phrase("to")} ${l194}.`);
}
var L4 = (e756)=>{
    let { state: t812  } = e756, o196 = [];
    for(let n206 = 0; n206 < t812.doc.length;){
        let l195 = e756.lineBlockAt(n206), r313 = xt1(t812, l195.from, l195.to);
        r313 && o196.push(d3.of(r313)), n206 = (r313 ? e756.lineBlockAt(r313.to) : l195).to + 1;
    }
    return o196.length && e756.dispatch({
        effects: M5(e756.state, o196)
    }), !!o196.length;
}, V4 = (e757)=>{
    let t813 = e757.state.field(a3, !1);
    if (!t813 || !t813.size) return !1;
    let o197 = [];
    return t813.between(0, e757.state.doc.length, (n207, l196)=>{
        o197.push(c3.of({
            from: n207,
            to: l196
        }));
    }), e757.dispatch({
        effects: o197
    }), !0;
}, X4 = [
    {
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: U3
    },
    {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: j5
    },
    {
        key: "Ctrl-Alt-[",
        run: L4
    },
    {
        key: "Ctrl-Alt-]",
        run: V4
    }
], W5 = {
    placeholderDOM: null,
    placeholderText: "\u2026"
}, T6 = O1.define({
    combine (e758) {
        return be(e758, W5);
    }
});
function O6(e759) {
    let t814 = [
        a3,
        z5
    ];
    return e759 && t814.push(T6.of(e759)), t814;
}
var _3 = w4.replace({
    widget: new class extends Q1 {
        ignoreEvents() {
            return !1;
        }
        toDOM(e760) {
            let { state: t815  } = e760, o198 = t815.facet(T6), n208 = (r314)=>{
                let f81 = e760.lineBlockAt(e760.posAtDOM(r314.target)), s335 = m4(e760.state, f81.from, f81.to);
                s335 && e760.dispatch({
                    effects: c3.of(s335)
                }), r314.preventDefault();
            };
            if (o198.placeholderDOM) return o198.placeholderDOM(e760, n208);
            let l197 = document.createElement("span");
            return l197.textContent = o198.placeholderText, l197.setAttribute("aria-label", t815.phrase("folded code")), l197.title = t815.phrase("unfold"), l197.className = "cm-foldPlaceholder", l197.onclick = n208, l197;
        }
    }
}), q5 = {
    openText: "\u2304",
    closedText: "\u203A",
    markerDOM: null
}, p5 = class extends h {
    constructor(t816, o199){
        super();
        this.config = t816, this.open = o199;
    }
    eq(t817) {
        return this.config == t817.config && this.open == t817.open;
    }
    toDOM(t818) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let o200 = document.createElement("span");
        return o200.textContent = this.open ? this.config.openText : this.config.closedText, o200.title = t818.state.phrase(this.open ? "Fold line" : "Unfold line"), o200;
    }
};
function Y3(e761 = {}) {
    let t819 = Object.assign(Object.assign({}, q5), e761), o201 = new p5(t819, !0), n209 = new p5(t819, !1), l198 = z2.fromClass(class {
        constructor(r315){
            this.from = r315.viewport.from, this.markers = this.buildMarkers(r315);
        }
        update(r316) {
            (r316.docChanged || r316.viewportChanged || r316.startState.facet(m3) != r316.state.facet(m3) || r316.startState.field(a3, !1) != r316.state.field(a3, !1)) && (this.markers = this.buildMarkers(r316.view));
        }
        buildMarkers(r317) {
            let f82 = new x2;
            for (let s336 of r317.viewportLineBlocks){
                let i472 = m4(r317.state, s336.from, s336.to) ? n209 : xt1(r317.state, s336.from, s336.to) ? o201 : null;
                i472 && f82.add(s336.from, s336.from, i472);
            }
            return f82.finish();
        }
    });
    return [
        l198,
        K5({
            class: "cm-foldGutter",
            markers (r318) {
                var f83;
                return ((f83 = r318.plugin(l198)) === null || f83 === void 0 ? void 0 : f83.markers) || f.empty;
            },
            initialSpacer () {
                return new p5(t819, !1);
            },
            domEventHandlers: {
                click: (r319, f84)=>{
                    let s337 = m4(r319.state, f84.from, f84.to);
                    if (s337) return r319.dispatch({
                        effects: c3.of(s337)
                    }), !0;
                    let i473 = xt1(r319.state, f84.from, f84.to);
                    return i473 ? (r319.dispatch({
                        effects: d3.of(i473)
                    }), !0) : !1;
                }
            }
        }),
        O6()
    ];
}
var z5 = D2.baseTheme({
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
});
var w6 = D2.baseTheme({
    ".cm-matchingBracket": {
        backgroundColor: "#328c8252"
    },
    ".cm-nonmatchingBracket": {
        backgroundColor: "#bb555544"
    }
}), D6 = 10000, C6 = "()[]{}", S7 = O1.define({
    combine (a106) {
        return be(a106, {
            afterCursor: !0,
            brackets: C6,
            maxScanDistance: D6
        });
    }
}), F5 = w4.mark({
    class: "cm-matchingBracket"
}), N5 = w4.mark({
    class: "cm-nonmatchingBracket"
}), _4 = B1.define({
    create () {
        return w4.none;
    },
    update (a107, t820) {
        if (!t820.docChanged && !t820.selection) return a107;
        let e762 = [], r320 = t820.state.facet(S7);
        for (let o202 of t820.state.selection.ranges){
            if (!o202.empty) continue;
            let c79 = d4(t820.state, o202.head, -1, r320) || o202.head > 0 && d4(t820.state, o202.head - 1, 1, r320) || r320.afterCursor && (d4(t820.state, o202.head, 1, r320) || o202.head < t820.state.doc.length && d4(t820.state, o202.head + 1, -1, r320));
            if (!c79) continue;
            let i474 = c79.matched ? F5 : N5;
            e762.push(i474.range(c79.start.from, c79.start.to)), c79.end && e762.push(i474.range(c79.end.from, c79.end.to));
        }
        return w4.set(e762, !0);
    },
    provide: (a108)=>D2.decorations.from(a108)
}), q6 = [
    _4,
    w6
];
function j6(a109 = {}) {
    return [
        S7.of(a109),
        q6
    ];
}
function x7(a110, t821, e763) {
    let r321 = a110.prop(t821 < 0 ? y4.openedBy : y4.closedBy);
    if (r321) return r321;
    if (a110.name.length == 1) {
        let o203 = e763.indexOf(a110.name);
        if (o203 > -1 && o203 % 2 == (t821 < 0 ? 1 : 0)) return [
            e763[o203 + t821]
        ];
    }
    return null;
}
function d4(a111, t822, e764, r322 = {}) {
    let o204 = r322.maxScanDistance || D6, c80 = r322.brackets || C6, i475 = v3(a111), l199 = i475.resolveInner(t822, e764);
    for(let f85 = l199; f85; f85 = f85.parent){
        let n210 = x7(f85.type, e764, c80);
        if (n210 && f85.from < f85.to) return A6(a111, t822, e764, f85, n210, c80);
    }
    return E6(a111, t822, e764, i475, l199.type, o204, c80);
}
function A6(a, t, e765, r323, o205, c81) {
    let i476 = r323.parent, l200 = {
        from: r323.from,
        to: r323.to
    }, f86 = 0, n211 = i476 == null ? void 0 : i476.cursor;
    if (n211 && (e765 < 0 ? n211.childBefore(r323.from) : n211.childAfter(r323.to))) do if (e765 < 0 ? n211.to <= r323.from : n211.from >= r323.to) {
        if (f86 == 0 && o205.indexOf(n211.type.name) > -1 && n211.from < n211.to) return {
            start: l200,
            end: {
                from: n211.from,
                to: n211.to
            },
            matched: !0
        };
        if (x7(n211.type, e765, c81)) f86++;
        else if (x7(n211.type, -e765, c81) && (f86--, f86 == 0)) return {
            start: l200,
            end: n211.from == n211.to ? void 0 : {
                from: n211.from,
                to: n211.to
            },
            matched: !1
        };
    }
    while (e765 < 0 ? n211.prevSibling() : n211.nextSibling())
    return {
        start: l200,
        matched: !1
    };
}
function E6(a112, t823, e766, r324, o206, c82, i477) {
    let l201 = e766 < 0 ? a112.sliceDoc(t823 - 1, t823) : a112.sliceDoc(t823, t823 + 1), f87 = i477.indexOf(l201);
    if (f87 < 0 || f87 % 2 == 0 != e766 > 0) return null;
    let n212 = {
        from: e766 < 0 ? t823 - 1 : t823,
        to: e766 > 0 ? t823 + 1 : t823
    }, g41 = a112.doc.iterRange(t823, e766 > 0 ? a112.doc.length : 0), p32 = 0;
    for(let u72 = 0; !g41.next().done && u72 <= c82;){
        let s338 = g41.value;
        e766 < 0 && (u72 += s338.length);
        let b31 = t823 + u72 * e766;
        for(let m45 = e766 > 0 ? 0 : s338.length - 1, v28 = e766 > 0 ? s338.length : -1; m45 != v28; m45 += e766){
            let k26 = i477.indexOf(s338[m45]);
            if (!(k26 < 0 || r324.resolve(b31 + m45, 1).type != o206)) if (k26 % 2 == 0 == e766 > 0) p32++;
            else {
                if (p32 == 1) return {
                    start: n212,
                    end: {
                        from: b31 + m45,
                        to: b31 + m45 + 1
                    },
                    matched: k26 >> 1 == f87 >> 1
                };
                p32--;
            }
        }
        e766 > 0 && (u72 += s338.length);
    }
    return g41.done ? {
        start: n212,
        matched: !1
    } : null;
}
function g4(e767, t824) {
    return p.create(e767.ranges.map(t824), e767.mainIndex);
}
function m5(e768, t825) {
    return e768.update({
        selection: t825,
        scrollIntoView: !0,
        userEvent: "select"
    });
}
function y7({ state: e769 , dispatch: t826  }, r325) {
    let n213 = g4(e769.selection, r325);
    return n213.eq(e769.selection) ? !1 : (t826(m5(e769, n213)), !0);
}
function B4(e770, t827) {
    return p.cursor(t827 ? e770.to : e770.from);
}
function C7(e771, t828) {
    return y7(e771, (r326)=>r326.empty ? e771.moveByChar(r326, t828) : B4(r326, t828)
    );
}
var _5 = (e772)=>C7(e772, e772.textDirection != P3.LTR)
, $5 = (e773)=>C7(e773, e773.textDirection == P3.LTR)
;
function D7(e774, t829) {
    return y7(e774, (r327)=>r327.empty ? e774.moveByGroup(r327, t829) : B4(r327, t829)
    );
}
var Ie1 = (e775)=>D7(e775, e775.textDirection != P3.LTR)
, Te1 = (e776)=>D7(e776, e776.textDirection == P3.LTR)
;
function Pe2(e777, t830, r328) {
    if (t830.type.prop(r328)) return !0;
    let n214 = t830.to - t830.from;
    return n214 && (n214 > 2 || /[^\s,.;:]/.test(e777.sliceDoc(t830.from, t830.to))) || t830.firstChild;
}
function S8(e778, t831, r329) {
    let n215 = v3(e778).resolveInner(t831.head), l202 = r329 ? y4.closedBy : y4.openedBy;
    for(let i478 = t831.head;;){
        let f88 = r329 ? n215.childAfter(i478) : n215.childBefore(i478);
        if (!f88) break;
        Pe2(e778, f88, l202) ? n215 = f88 : i478 = r329 ? f88.to : f88.from;
    }
    let o207 = n215.type.prop(l202), c83, u73;
    return o207 && (c83 = r329 ? d4(e778, n215.from, 1) : d4(e778, n215.to, -1)) && c83.matched ? u73 = r329 ? c83.end.to : c83.end.from : u73 = r329 ? n215.to : n215.from, p.cursor(u73, r329 ? -1 : 1);
}
var Ve1 = (e779)=>y7(e779, (t832)=>S8(e779.state, t832, e779.textDirection != P3.LTR)
    )
, Ge1 = (e780)=>y7(e780, (t833)=>S8(e780.state, t833, e780.textDirection == P3.LTR)
    )
;
function X5(e781, t834) {
    return y7(e781, (r330)=>{
        if (!r330.empty) return B4(r330, t834);
        let n216 = e781.moveVertically(r330, t834);
        return n216.head != r330.head ? n216 : e781.moveToLineBoundary(r330, t834);
    });
}
var Y4 = (e782)=>X5(e782, !1)
, Z3 = (e783)=>X5(e783, !0)
;
function ee3(e784, t835) {
    let { state: r331  } = e784, n217 = g4(r331.selection, (c84)=>c84.empty ? e784.moveVertically(c84, t835, e784.dom.clientHeight) : B4(c84, t835)
    );
    if (n217.eq(r331.selection)) return !1;
    let l203 = e784.coordsAtPos(r331.selection.main.head), o208 = e784.scrollDOM.getBoundingClientRect();
    return e784.dispatch(m5(r331, n217), {
        effects: l203 && l203.top > o208.top && l203.bottom < o208.bottom ? D2.scrollIntoView(n217.main.head, {
            y: "start",
            yMargin: l203.top - o208.top
        }) : void 0
    }), !0;
}
var O7 = (e785)=>ee3(e785, !1)
, F6 = (e786)=>ee3(e786, !0)
;
function b6(e787, t836, r332) {
    let n218 = e787.lineBlockAt(t836.head), l204 = e787.moveToLineBoundary(t836, r332);
    if (l204.head == t836.head && l204.head != (r332 ? n218.to : n218.from) && (l204 = e787.moveToLineBoundary(t836, r332, !1)), !r332 && l204.head == n218.from && n218.length) {
        let o209 = /^\s*/.exec(e787.state.sliceDoc(n218.from, Math.min(n218.from + 100, n218.to)))[0].length;
        o209 && t836.head != n218.from + o209 && (l204 = p.cursor(n218.from + o209));
    }
    return l204;
}
var te3 = (e788)=>y7(e788, (t837)=>b6(e788, t837, !0)
    )
, re3 = (e789)=>y7(e789, (t838)=>b6(e789, t838, !1)
    )
, Ue1 = (e790)=>y7(e790, (t839)=>p.cursor(e790.lineBlockAt(t839.head).from, 1)
    )
, Oe2 = (e791)=>y7(e791, (t840)=>p.cursor(e791.lineBlockAt(t840.head).to, -1)
    )
;
function ne3(e792, t841, r333) {
    let n219 = !1, l205 = g4(e792.selection, (o210)=>{
        let c85 = d4(e792, o210.head, -1) || d4(e792, o210.head, 1) || o210.head > 0 && d4(e792, o210.head - 1, 1) || o210.head < e792.doc.length && d4(e792, o210.head + 1, -1);
        if (!c85 || !c85.end) return o210;
        n219 = !0;
        let u74 = c85.start.from == o210.head ? c85.end.to : c85.end.from;
        return r333 ? p.range(o210.anchor, u74) : p.cursor(u74);
    });
    return n219 ? (t841(m5(e792, l205)), !0) : !1;
}
var Fe = ({ state: e793 , dispatch: t842  })=>ne3(e793, t842, !1)
;
function h1(e794, t843) {
    let r334 = g4(e794.state.selection, (n220)=>{
        let l206 = t843(n220);
        return p.range(n220.anchor, l206.head, l206.goalColumn);
    });
    return r334.eq(e794.state.selection) ? !1 : (e794.dispatch(m5(e794.state, r334)), !0);
}
function M6(e795, t844) {
    return h1(e795, (r335)=>e795.moveByChar(r335, t844)
    );
}
var oe3 = (e796)=>M6(e796, e796.textDirection != P3.LTR)
, le2 = (e797)=>M6(e797, e797.textDirection == P3.LTR)
;
function R3(e798, t845) {
    return h1(e798, (r336)=>e798.moveByGroup(r336, t845)
    );
}
var we3 = (e799)=>R3(e799, e799.textDirection != P3.LTR)
, ze = (e800)=>R3(e800, e800.textDirection == P3.LTR)
;
var ve3 = (e801)=>h1(e801, (t846)=>S8(e801.state, t846, e801.textDirection != P3.LTR)
    )
, He1 = (e802)=>h1(e802, (t847)=>S8(e802.state, t847, e802.textDirection == P3.LTR)
    )
;
function ue3(e803, t848) {
    return h1(e803, (r337)=>e803.moveVertically(r337, t848)
    );
}
var ie3 = (e804)=>ue3(e804, !1)
, se2 = (e805)=>ue3(e805, !0)
;
function fe3(e806, t849) {
    return h1(e806, (r338)=>e806.moveVertically(r338, t849, e806.dom.clientHeight)
    );
}
var ae3 = (e807)=>fe3(e807, !1)
, de3 = (e808)=>fe3(e808, !0)
, he3 = (e809)=>h1(e809, (t850)=>b6(e809, t850, !0)
    )
, me3 = (e810)=>h1(e810, (t851)=>b6(e810, t851, !1)
    )
, Ne2 = (e811)=>h1(e811, (t852)=>p.cursor(e811.lineBlockAt(t852.head).from)
    )
, We = (e812)=>h1(e812, (t853)=>p.cursor(e812.lineBlockAt(t853.head).to)
    )
, ye3 = ({ state: e813 , dispatch: t854  })=>(t854(m5(e813, {
        anchor: 0
    })), !0)
, pe3 = ({ state: e814 , dispatch: t855  })=>(t855(m5(e814, {
        anchor: e814.doc.length
    })), !0)
, ke2 = ({ state: e815 , dispatch: t856  })=>(t856(m5(e815, {
        anchor: e815.selection.main.anchor,
        head: 0
    })), !0)
, ge3 = ({ state: e816 , dispatch: t857  })=>(t857(m5(e816, {
        anchor: e816.selection.main.anchor,
        head: e816.doc.length
    })), !0)
, qe1 = ({ state: e817 , dispatch: t858  })=>(t858(e817.update({
        selection: {
            anchor: 0,
            head: e817.doc.length
        },
        userEvent: "select"
    })), !0)
, Ke1 = ({ state: e818 , dispatch: t859  })=>{
    let r339 = T7(e818).map(({ from: n221 , to: l207  })=>p.range(n221, Math.min(l207 + 1, e818.doc.length))
    );
    return t859(e818.update({
        selection: p.create(r339),
        userEvent: "select"
    })), !0;
}, je1 = ({ state: e819 , dispatch: t860  })=>{
    let r340 = g4(e819.selection, (n222)=>{
        var l208;
        let o211 = v3(e819).resolveInner(n222.head, 1);
        for(; !(o211.from < n222.from && o211.to >= n222.to || o211.to > n222.to && o211.from <= n222.from || !((l208 = o211.parent) === null || l208 === void 0 ? void 0 : l208.parent));)o211 = o211.parent;
        return p.range(o211.to, o211.from);
    });
    return t860(m5(e819, r340)), !0;
}, _e2 = ({ state: e820 , dispatch: t861  })=>{
    let r341 = e820.selection, n223 = null;
    return r341.ranges.length > 1 ? n223 = p.create([
        r341.main
    ]) : r341.main.empty || (n223 = p.create([
        p.cursor(r341.main.head)
    ])), n223 ? (t861(m5(e820, n223)), !0) : !1;
};
function E7({ state: e821 , dispatch: t862  }, r342) {
    if (e821.readOnly) return !1;
    let n224 = "delete.selection", l209 = e821.changeByRange((o212)=>{
        let { from: c86 , to: u75  } = o212;
        if (c86 == u75) {
            let i479 = r342(c86);
            i479 < c86 ? n224 = "delete.backward" : i479 > c86 && (n224 = "delete.forward"), c86 = Math.min(c86, i479), u75 = Math.max(u75, i479);
        }
        return c86 == u75 ? {
            range: o212
        } : {
            changes: {
                from: c86,
                to: u75
            },
            range: p.cursor(c86)
        };
    });
    return l209.changes.empty ? !1 : (t862(e821.update(l209, {
        scrollIntoView: !0,
        userEvent: n224
    })), !0);
}
function I5(e822, t863, r343) {
    if (e822 instanceof D2) for (let n225 of e822.pluginField(V1.atomicRanges))n225.between(t863, t863, (l210, o213)=>{
        l210 < t863 && o213 > t863 && (t863 = r343 ? o213 : l210);
    });
    return t863;
}
var Be1 = (e823, t864)=>E7(e823, (r344)=>{
        let { state: n226  } = e823, l211 = n226.doc.lineAt(r344), o214, c87;
        if (!t864 && r344 > l211.from && r344 < l211.from + 200 && !/[^ \t]/.test(o214 = l211.text.slice(0, r344 - l211.from))) {
            if (o214[o214.length - 1] == "	") return r344 - 1;
            let u76 = J(o214, n226.tabSize), i480 = u76 % K4(n226) || K4(n226);
            for(let f89 = 0; f89 < i480 && o214[o214.length - 1 - f89] == " "; f89++)r344--;
            c87 = r344;
        } else c87 = A(l211.text, r344 - l211.from, t864) + l211.from, c87 == r344 && l211.number != (t864 ? n226.doc.lines : 1) && (c87 += t864 ? 1 : -1);
        return I5(e823, c87, t864);
    })
, w7 = (e824)=>Be1(e824, !1)
, Ae3 = (e825)=>Be1(e825, !0)
, Le1 = (e826, t865)=>E7(e826, (r345)=>{
        let n227 = r345, { state: l212  } = e826, o215 = l212.doc.lineAt(n227), c88 = l212.charCategorizer(n227);
        for(let u77 = null;;){
            if (n227 == (t865 ? o215.to : o215.from)) {
                n227 == r345 && o215.number != (t865 ? l212.doc.lines : 1) && (n227 += t865 ? 1 : -1);
                break;
            }
            let i481 = A(o215.text, n227 - o215.from, t865) + o215.from, f90 = o215.text.slice(Math.min(n227, i481) - o215.from, Math.max(n227, i481) - o215.from), a113 = c88(f90);
            if (u77 != null && a113 != u77) break;
            (f90 != " " || n227 != r345) && (u77 = a113), n227 = i481;
        }
        return I5(e826, n227, t865);
    })
, xe3 = (e827)=>Le1(e827, !1)
, $e1 = (e828)=>Le1(e828, !0)
, Ce2 = (e829)=>E7(e829, (t866)=>{
        let r346 = e829.lineBlockAt(t866).to;
        return I5(e829, t866 < r346 ? r346 : Math.min(e829.state.doc.length, t866 + 1), !0);
    })
, Je1 = (e830)=>E7(e830, (t867)=>{
        let r347 = e830.lineBlockAt(t867).from;
        return I5(e830, t867 > r347 ? r347 : Math.max(0, t867 - 1), !1);
    })
, Qe1 = ({ state: e831 , dispatch: t868  })=>{
    if (e831.readOnly) return !1;
    let r348 = e831.changeByRange((n228)=>({
            changes: {
                from: n228.from,
                to: n228.to,
                insert: d.of([
                    "",
                    ""
                ])
            },
            range: p.cursor(n228.from)
        })
    );
    return t868(e831.update(r348, {
        scrollIntoView: !0,
        userEvent: "input"
    })), !0;
}, Xe1 = ({ state: e832 , dispatch: t869  })=>{
    if (e832.readOnly) return !1;
    let r349 = e832.changeByRange((n229)=>{
        if (!n229.empty || n229.from == 0 || n229.from == e832.doc.length) return {
            range: n229
        };
        let l213 = n229.from, o216 = e832.doc.lineAt(l213), c89 = l213 == o216.from ? l213 - 1 : A(o216.text, l213 - o216.from, !1) + o216.from, u78 = l213 == o216.to ? l213 + 1 : A(o216.text, l213 - o216.from, !0) + o216.from;
        return {
            changes: {
                from: c89,
                to: u78,
                insert: e832.doc.slice(l213, u78).append(e832.doc.slice(c89, l213))
            },
            range: p.cursor(u78)
        };
    });
    return r349.changes.empty ? !1 : (t869(e832.update(r349, {
        scrollIntoView: !0,
        userEvent: "move.character"
    })), !0);
};
function T7(e833) {
    let t870 = [], r350 = -1;
    for (let n230 of e833.selection.ranges){
        let l214 = e833.doc.lineAt(n230.from), o217 = e833.doc.lineAt(n230.to);
        if (!n230.empty && n230.to == o217.from && (o217 = e833.doc.lineAt(n230.to - 1)), r350 >= l214.number) {
            let c90 = t870[t870.length - 1];
            c90.to = o217.to, c90.ranges.push(n230);
        } else t870.push({
            from: l214.from,
            to: o217.to,
            ranges: [
                n230
            ]
        });
        r350 = o217.number + 1;
    }
    return t870;
}
function De1(e834, t871, r351) {
    if (e834.readOnly) return !1;
    let n231 = [], l215 = [];
    for (let o218 of T7(e834)){
        if (r351 ? o218.to == e834.doc.length : o218.from == 0) continue;
        let c91 = e834.doc.lineAt(r351 ? o218.to + 1 : o218.from - 1), u79 = c91.length + 1;
        if (r351) {
            n231.push({
                from: o218.to,
                to: c91.to
            }, {
                from: o218.from,
                insert: c91.text + e834.lineBreak
            });
            for (let i482 of o218.ranges)l215.push(p.range(Math.min(e834.doc.length, i482.anchor + u79), Math.min(e834.doc.length, i482.head + u79)));
        } else {
            n231.push({
                from: c91.from,
                to: o218.from
            }, {
                from: o218.to,
                insert: e834.lineBreak + c91.text
            });
            for (let i483 of o218.ranges)l215.push(p.range(i483.anchor - u79, i483.head - u79));
        }
    }
    return n231.length ? (t871(e834.update({
        changes: n231,
        scrollIntoView: !0,
        selection: p.create(l215, e834.selection.mainIndex),
        userEvent: "move.line"
    })), !0) : !1;
}
var Ye1 = ({ state: e835 , dispatch: t872  })=>De1(e835, t872, !1)
, Ze1 = ({ state: e836 , dispatch: t873  })=>De1(e836, t873, !0)
;
function Se3(e837, t874, r352) {
    if (e837.readOnly) return !1;
    let n232 = [];
    for (let l216 of T7(e837))r352 ? n232.push({
        from: l216.from,
        insert: e837.doc.slice(l216.from, l216.to) + e837.lineBreak
    }) : n232.push({
        from: l216.to,
        insert: e837.lineBreak + e837.doc.slice(l216.from, l216.to)
    });
    return t874(e837.update({
        changes: n232,
        scrollIntoView: !0,
        userEvent: "input.copyline"
    })), !0;
}
var et2 = ({ state: e838 , dispatch: t875  })=>Se3(e838, t875, !1)
, tt2 = ({ state: e839 , dispatch: t876  })=>Se3(e839, t876, !0)
, rt2 = (e840)=>{
    if (e840.state.readOnly) return !1;
    let { state: t877  } = e840, r353 = t877.changes(T7(t877).map(({ from: l217 , to: o219  })=>(l217 > 0 ? l217-- : o219 < t877.doc.length && o219++, {
            from: l217,
            to: o219
        })
    )), n233 = g4(t877.selection, (l218)=>e840.moveVertically(l218, !0)
    ).map(r353);
    return e840.dispatch({
        changes: r353,
        selection: n233,
        scrollIntoView: !0,
        userEvent: "delete.line"
    }), !0;
};
function nt1(e841, t878) {
    if (/\(\)|\[\]|\{\}/.test(e841.sliceDoc(t878 - 1, t878 + 1))) return {
        from: t878,
        to: t878
    };
    let r354 = v3(e841).resolveInner(t878), n234 = r354.childBefore(t878), l219 = r354.childAfter(t878), o220;
    return n234 && l219 && n234.to <= t878 && l219.from >= t878 && (o220 = n234.type.prop(y4.closedBy)) && o220.indexOf(l219.name) > -1 && e841.doc.lineAt(n234.to).from == e841.doc.lineAt(l219.from).from ? {
        from: n234.to,
        to: l219.from
    } : null;
}
var ot2 = be3(!1), lt2 = be3(!0);
function be3(e842) {
    return ({ state: t879 , dispatch: r355  })=>{
        if (t879.readOnly) return !1;
        let n235 = t879.changeByRange((l220)=>{
            let { from: o221 , to: c92  } = l220, u80 = t879.doc.lineAt(o221), i484 = !e842 && o221 == c92 && nt1(t879, o221);
            e842 && (o221 = c92 = (c92 <= u80.to ? u80 : t879.doc.lineAt(c92)).to);
            let f91 = new I4(t879, {
                simulateBreak: o221,
                simulateDoubleBreak: !!i484
            }), a114 = X3(f91, o221);
            for(a114 == null && (a114 = /^\s*/.exec(t879.doc.lineAt(o221).text)[0].length); c92 < u80.to && /\s/.test(u80.text[c92 - u80.from]);)c92++;
            i484 ? { from: o221 , to: c92  } = i484 : o221 > u80.from && o221 < u80.from + 100 && !/\S/.test(u80.text.slice(0, o221)) && (o221 = u80.from);
            let p33 = [
                "",
                Q4(t879, a114)
            ];
            return i484 && p33.push(Q4(t879, f91.lineIndent(u80.from, -1))), {
                changes: {
                    from: o221,
                    to: c92,
                    insert: d.of(p33)
                },
                range: p.cursor(o221 + 1 + p33[1].length)
            };
        });
        return r355(t879.update(n235, {
            scrollIntoView: !0,
            userEvent: "input"
        })), !0;
    };
}
function z6(e843, t880) {
    let r356 = -1;
    return e843.changeByRange((n236)=>{
        let l221 = [];
        for(let c93 = n236.from; c93 <= n236.to;){
            let u81 = e843.doc.lineAt(c93);
            u81.number > r356 && (n236.empty || n236.to > u81.from) && (t880(u81, l221, n236), r356 = u81.number), c93 = u81.to + 1;
        }
        let o222 = e843.changes(l221);
        return {
            changes: l221,
            range: p.range(o222.mapPos(n236.anchor, 1), o222.mapPos(n236.head, 1))
        };
    });
}
var ct = ({ state: e844 , dispatch: t881  })=>{
    if (e844.readOnly) return !1;
    let r357 = Object.create(null), n237 = new I4(e844, {
        overrideIndentation: (o223)=>{
            let c94 = r357[o223];
            return c94 ?? -1;
        }
    }), l222 = z6(e844, (o224, c95, u82)=>{
        let i485 = X3(n237, o224.from);
        if (i485 == null) return;
        /\S/.test(o224.text) || (i485 = 0);
        let f92 = /^\s*/.exec(o224.text)[0], a115 = Q4(e844, i485);
        (f92 != a115 || u82.from < o224.from + f92.length) && (r357[o224.from] = i485, c95.push({
            from: o224.from,
            to: o224.from + f92.length,
            insert: a115
        }));
    });
    return l222.changes.empty || t881(e844.update(l222, {
        userEvent: "indent"
    })), !0;
}, v5 = ({ state: e845 , dispatch: t882  })=>e845.readOnly ? !1 : (t882(e845.update(z6(e845, (r358, n238)=>{
        n238.push({
            from: r358.from,
            insert: e845.facet(E4)
        });
    }), {
        userEvent: "input.indent"
    })), !0)
, Me1 = ({ state: e846 , dispatch: t883  })=>e846.readOnly ? !1 : (t883(e846.update(z6(e846, (r359, n239)=>{
        let l223 = /^\s*/.exec(r359.text)[0];
        if (!l223) return;
        let o225 = J(l223, e846.tabSize), c96 = 0, u83 = Q4(e846, Math.max(0, o225 - K4(e846)));
        for(; c96 < l223.length && c96 < u83.length && l223.charCodeAt(c96) == u83.charCodeAt(c96);)c96++;
        n239.push({
            from: r359.from + c96,
            to: r359.from + l223.length,
            insert: u83.slice(c96)
        });
    }), {
        userEvent: "delete.dedent"
    })), !0)
, ut1 = [
    {
        key: "Ctrl-b",
        run: _5,
        shift: oe3,
        preventDefault: !0
    },
    {
        key: "Ctrl-f",
        run: $5,
        shift: le2
    },
    {
        key: "Ctrl-p",
        run: Y4,
        shift: ie3
    },
    {
        key: "Ctrl-n",
        run: Z3,
        shift: se2
    },
    {
        key: "Ctrl-a",
        run: Ue1,
        shift: Ne2
    },
    {
        key: "Ctrl-e",
        run: Oe2,
        shift: We
    },
    {
        key: "Ctrl-d",
        run: Ae3
    },
    {
        key: "Ctrl-h",
        run: w7
    },
    {
        key: "Ctrl-k",
        run: Ce2
    },
    {
        key: "Ctrl-Alt-h",
        run: xe3
    },
    {
        key: "Ctrl-o",
        run: Qe1
    },
    {
        key: "Ctrl-t",
        run: Xe1
    },
    {
        key: "Ctrl-v",
        run: F6
    },
    {
        key: "Alt-v",
        run: O7
    }
], it2 = [
    {
        key: "ArrowLeft",
        run: _5,
        shift: oe3,
        preventDefault: !0
    },
    {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: Ie1,
        shift: we3
    },
    {
        mac: "Cmd-ArrowLeft",
        run: re3,
        shift: me3
    },
    {
        key: "ArrowRight",
        run: $5,
        shift: le2,
        preventDefault: !0
    },
    {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: Te1,
        shift: ze
    },
    {
        mac: "Cmd-ArrowRight",
        run: te3,
        shift: he3
    },
    {
        key: "ArrowUp",
        run: Y4,
        shift: ie3,
        preventDefault: !0
    },
    {
        mac: "Cmd-ArrowUp",
        run: ye3,
        shift: ke2
    },
    {
        mac: "Ctrl-ArrowUp",
        run: O7,
        shift: ae3
    },
    {
        key: "ArrowDown",
        run: Z3,
        shift: se2,
        preventDefault: !0
    },
    {
        mac: "Cmd-ArrowDown",
        run: pe3,
        shift: ge3
    },
    {
        mac: "Ctrl-ArrowDown",
        run: F6,
        shift: de3
    },
    {
        key: "PageUp",
        run: O7,
        shift: ae3
    },
    {
        key: "PageDown",
        run: F6,
        shift: de3
    },
    {
        key: "Home",
        run: re3,
        shift: me3
    },
    {
        key: "Mod-Home",
        run: ye3,
        shift: ke2
    },
    {
        key: "End",
        run: te3,
        shift: he3
    },
    {
        key: "Mod-End",
        run: pe3,
        shift: ge3
    },
    {
        key: "Enter",
        run: ot2
    },
    {
        key: "Mod-a",
        run: qe1
    },
    {
        key: "Backspace",
        run: w7,
        shift: w7
    },
    {
        key: "Delete",
        run: Ae3
    },
    {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: xe3
    },
    {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: $e1
    },
    {
        mac: "Mod-Backspace",
        run: Je1
    },
    {
        mac: "Mod-Delete",
        run: Ce2
    }
].concat(ut1.map((e847)=>({
        mac: e847.key,
        run: e847.run,
        shift: e847.shift
    })
)), Tt1 = [
    {
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: Ve1,
        shift: ve3
    },
    {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: Ge1,
        shift: He1
    },
    {
        key: "Alt-ArrowUp",
        run: Ye1
    },
    {
        key: "Shift-Alt-ArrowUp",
        run: et2
    },
    {
        key: "Alt-ArrowDown",
        run: Ze1
    },
    {
        key: "Shift-Alt-ArrowDown",
        run: tt2
    },
    {
        key: "Escape",
        run: _e2
    },
    {
        key: "Mod-Enter",
        run: lt2
    },
    {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: Ke1
    },
    {
        key: "Mod-i",
        run: je1,
        preventDefault: !0
    },
    {
        key: "Mod-[",
        run: Me1
    },
    {
        key: "Mod-]",
        run: v5
    },
    {
        key: "Mod-Alt-\\",
        run: ct
    },
    {
        key: "Shift-Mod-k",
        run: rt2
    },
    {
        key: "Shift-Mod-\\",
        run: Fe
    }
].concat(it2);
var d5 = {
    brackets: [
        "(",
        "[",
        "{",
        "'",
        '"'
    ],
    before: `)]}'":;>`
}, a4 = v.define({
    map (r360, e848) {
        let n240 = e848.mapPos(r360, -1, D1.TrackAfter);
        return n240 ?? void 0;
    }
}), g5 = v.define({
    map (r361, e849) {
        return e849.mapPos(r361);
    }
}), p6 = new class extends v1 {
};
p6.startSide = 1;
p6.endSide = -1;
var x8 = B1.define({
    create () {
        return f.empty;
    },
    update (r362, e850) {
        if (e850.selection) {
            let n241 = e850.state.doc.lineAt(e850.selection.main.head).from, c97 = e850.startState.doc.lineAt(e850.startState.selection.main.head).from;
            n241 != e850.changes.mapPos(c97, -1) && (r362 = f.empty);
        }
        r362 = r362.map(e850.changes);
        for (let n242 of e850.effects)n242.is(a4) ? r362 = r362.update({
            add: [
                p6.range(n242.value, n242.value + 1)
            ]
        }) : n242.is(g5) && (r362 = r362.update({
            filter: (c98)=>c98 != n242.value
        }));
        return r362;
    }
});
function G3() {
    return [
        D2.inputHandler.of(O8),
        x8
    ];
}
var S9 = "()[]{}<>";
function C8(r363) {
    for(let e851 = 0; e851 < S9.length; e851 += 2)if (S9.charCodeAt(e851) == r363) return S9.charAt(e851 + 1);
    return z(r363 < 128 ? r363 : r363 + 1);
}
function A7(r364, e852) {
    return r364.languageDataAt("closeBrackets", e852)[0] || d5;
}
function O8(r365, e853, n243, c99) {
    if (r365.composing) return !1;
    let f93 = r365.state.selection.main;
    if (c99.length > 2 || c99.length == 2 && q(b(c99, 0)) == 1 || e853 != f93.from || n243 != f93.to) return !1;
    let l224 = M7(r365.state, c99);
    return l224 ? (r365.dispatch(l224), !0) : !1;
}
var v6 = ({ state: r366 , dispatch: e854  })=>{
    let c100 = A7(r366, r366.selection.main.head).brackets || d5.brackets, f94 = null, l225 = r366.changeByRange((t884)=>{
        if (t884.empty) {
            let s339 = T8(r366.doc, t884.head);
            for (let o226 of c100)if (o226 == s339 && h2(r366.doc, t884.head) == C8(b(o226, 0))) return {
                changes: {
                    from: t884.head - o226.length,
                    to: t884.head + o226.length
                },
                range: p.cursor(t884.head - o226.length),
                userEvent: "delete.backward"
            };
        }
        return {
            range: f94 = t884
        };
    });
    return f94 || e854(r366.update(l225, {
        scrollIntoView: !0
    })), !f94;
}, J6 = [
    {
        key: "Backspace",
        run: v6
    }
];
function M7(r367, e855) {
    let n244 = A7(r367, r367.selection.main.head), c101 = n244.brackets || d5.brackets;
    for (let f95 of c101){
        let l226 = C8(b(f95, 0));
        if (e855 == f95) return l226 == f95 ? H4(r367, f95, c101.indexOf(f95 + f95 + f95) > -1) : W6(r367, f95, l226, n244.before || d5.before);
        if (e855 == l226 && E8(r367, r367.selection.main.from)) return F7(r367, f95, l226);
    }
    return null;
}
function E8(r368, e856) {
    let n245 = !1;
    return r368.field(x8).between(0, r368.doc.length, (c102)=>{
        c102 == e856 && (n245 = !0);
    }), n245;
}
function h2(r369, e857) {
    let n246 = r369.sliceString(e857, e857 + 2);
    return n246.slice(0, q(b(n246, 0)));
}
function T8(r370, e858) {
    let n247 = r370.sliceString(e858 - 2, e858);
    return q(b(n247, 0)) == n247.length ? n247 : n247.slice(1);
}
function W6(r371, e859, n248, c103) {
    let f96 = null, l227 = r371.changeByRange((t885)=>{
        if (!t885.empty) return {
            changes: [
                {
                    insert: e859,
                    from: t885.from
                },
                {
                    insert: n248,
                    from: t885.to
                }
            ],
            effects: a4.of(t885.to + e859.length),
            range: p.range(t885.anchor + e859.length, t885.head + e859.length)
        };
        let s340 = h2(r371.doc, t885.head);
        return !s340 || /\s/.test(s340) || c103.indexOf(s340) > -1 ? {
            changes: {
                insert: e859 + n248,
                from: t885.head
            },
            effects: a4.of(t885.head + e859.length),
            range: p.cursor(t885.head + e859.length)
        } : {
            range: f96 = t885
        };
    });
    return f96 ? null : r371.update(l227, {
        scrollIntoView: !0,
        userEvent: "input.type"
    });
}
function F7(r372, e, n249) {
    let c104 = null, f97 = r372.selection.ranges.map((l228)=>l228.empty && h2(r372.doc, l228.head) == n249 ? p.cursor(l228.head + n249.length) : c104 = l228
    );
    return c104 ? null : r372.update({
        selection: p.create(f97, r372.selection.mainIndex),
        scrollIntoView: !0,
        effects: r372.selection.ranges.map(({ from: l229  })=>g5.of(l229)
        )
    });
}
function H4(r373, e860, n250) {
    let c105 = null, f98 = r373.changeByRange((l230)=>{
        if (!l230.empty) return {
            changes: [
                {
                    insert: e860,
                    from: l230.from
                },
                {
                    insert: e860,
                    from: l230.to
                }
            ],
            effects: a4.of(l230.to + e860.length),
            range: p.range(l230.anchor + e860.length, l230.head + e860.length)
        };
        let t886 = l230.head, s341 = h2(r373.doc, t886);
        if (s341 == e860) {
            if (I6(r373, t886)) return {
                changes: {
                    insert: e860 + e860,
                    from: t886
                },
                effects: a4.of(t886 + e860.length),
                range: p.cursor(t886 + e860.length)
            };
            if (E8(r373, t886)) {
                let o227 = n250 && r373.sliceDoc(t886, t886 + e860.length * 3) == e860 + e860 + e860;
                return {
                    range: p.cursor(t886 + e860.length * (o227 ? 3 : 1)),
                    effects: g5.of(t886)
                };
            }
        } else {
            if (n250 && r373.sliceDoc(t886 - 2 * e860.length, t886) == e860 + e860 && I6(r373, t886 - 2 * e860.length)) return {
                changes: {
                    insert: e860 + e860 + e860 + e860,
                    from: t886
                },
                effects: a4.of(t886 + e860.length),
                range: p.cursor(t886 + e860.length)
            };
            if (r373.charCategorizer(t886)(s341) != T.Word) {
                let o228 = r373.sliceDoc(t886 - 1, t886);
                if (o228 != e860 && r373.charCategorizer(t886)(o228) != T.Word) return {
                    changes: {
                        insert: e860 + e860,
                        from: t886
                    },
                    effects: a4.of(t886 + e860.length),
                    range: p.cursor(t886 + e860.length)
                };
            }
        }
        return {
            range: c105 = l230
        };
    });
    return c105 ? null : r373.update(f98, {
        scrollIntoView: !0,
        userEvent: "input.type"
    });
}
function I6(r374, e861) {
    let n251 = v3(r374).resolveInner(e861 + 1);
    return n251.parent && n251.from == e861;
}
var r1 = O1.define({
    combine (e862) {
        let t887, s342;
        for (let o229 of e862)t887 = t887 || o229.topContainer, s342 = s342 || o229.bottomContainer;
        return {
            topContainer: t887,
            bottomContainer: s342
        };
    }
});
function O9(e863, t888) {
    let s343 = e863.plugin(d6), o230 = s343 ? s343.specs.indexOf(t888) : -1;
    return o230 > -1 ? s343.panels[o230] : null;
}
var d6 = z2.fromClass(class {
    constructor(e864){
        this.input = e864.state.facet(b7), this.specs = this.input.filter((s344)=>s344
        ), this.panels = this.specs.map((s345)=>s345(e864)
        );
        let t889 = e864.state.facet(r1);
        this.top = new l(e864, !0, t889.topContainer), this.bottom = new l(e864, !1, t889.bottomContainer), this.top.sync(this.panels.filter((s346)=>s346.top
        )), this.bottom.sync(this.panels.filter((s347)=>!s347.top
        ));
        for (let s1101 of this.panels)s1101.dom.classList.add("cm-panel"), s1101.mount && s1101.mount();
    }
    update(e865) {
        let t890 = e865.state.facet(r1);
        this.top.container != t890.topContainer && (this.top.sync([]), this.top = new l(e865.view, !0, t890.topContainer)), this.bottom.container != t890.bottomContainer && (this.bottom.sync([]), this.bottom = new l(e865.view, !1, t890.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let s348 = e865.state.facet(b7);
        if (s348 != this.input) {
            let o231 = s348.filter((i486)=>i486
            ), a116 = [], h128 = [], c106 = [], p34 = [];
            for (let i2 of o231){
                let m46 = this.specs.indexOf(i2), n252;
                m46 < 0 ? (n252 = i2(e865.view), p34.push(n252)) : (n252 = this.panels[m46], n252.update && n252.update(e865)), a116.push(n252), (n252.top ? h128 : c106).push(n252);
            }
            this.specs = o231, this.panels = a116, this.top.sync(h128), this.bottom.sync(c106);
            for (let i1 of p34)i1.dom.classList.add("cm-panel"), i1.mount && i1.mount();
        } else for (let o232 of this.panels)o232.update && o232.update(e865);
    }
    destroy() {
        this.top.sync([]), this.bottom.sync([]);
    }
}, {
    provide: V1.scrollMargins.from((e866)=>({
            top: e866.top.scrollMargin(),
            bottom: e866.bottom.scrollMargin()
        })
    )
}), l = class {
    constructor(t891, s349, o233){
        this.view = t891, this.top = s349, this.container = o233, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
    }
    sync(t892) {
        for (let s350 of this.panels)s350.destroy && t892.indexOf(s350) < 0 && s350.destroy();
        this.panels = t892, this.syncDOM();
    }
    syncDOM() {
        if (this.panels.length == 0) {
            this.dom && (this.dom.remove(), this.dom = void 0);
            return;
        }
        if (!this.dom) {
            this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
            let s351 = this.container || this.view.dom;
            s351.insertBefore(this.dom, this.top ? s351.firstChild : null);
        }
        let t893 = this.dom.firstChild;
        for (let s352 of this.panels)if (s352.dom.parentNode == this.dom) {
            for(; t893 != s352.dom;)t893 = u1(t893);
            t893 = t893.nextSibling;
        } else this.dom.insertBefore(s352.dom, t893);
        for(; t893;)t893 = u1(t893);
    }
    scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
    }
    syncClasses() {
        if (!(!this.container || this.classes == this.view.themeClasses)) {
            for (let t894 of this.classes.split(" "))t894 && this.container.classList.remove(t894);
            for (let t1 of (this.classes = this.view.themeClasses).split(" "))t1 && this.container.classList.add(t1);
        }
    }
};
function u1(e867) {
    let t895 = e867.nextSibling;
    return e867.remove(), t895;
}
var w8 = D2.baseTheme({
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
    }
}), b7 = O1.define({
    enables: [
        d6,
        w8
    ]
});
function s2() {
    var r375 = arguments[0];
    typeof r375 == "string" && (r375 = document.createElement(r375));
    var e868 = 1, t896 = arguments[1];
    if (t896 && typeof t896 == "object" && t896.nodeType == null && !Array.isArray(t896)) {
        for(var n253 in t896)if (Object.prototype.hasOwnProperty.call(t896, n253)) {
            var o234 = t896[n253];
            typeof o234 == "string" ? r375.setAttribute(n253, o234) : o234 != null && (r375[n253] = o234);
        }
        e868++;
    }
    for(; e868 < arguments.length; e868++)f3(r375, arguments[e868]);
    return r375;
}
function f3(r376, e869) {
    if (typeof e869 == "string") r376.appendChild(document.createTextNode(e869));
    else if (e869 != null) if (e869.nodeType != null) r376.appendChild(e869);
    else if (Array.isArray(e869)) for(var t897 = 0; t897 < e869.length; t897++)f3(r376, e869[t897]);
    else throw new RangeError("Unsupported child node: " + e869);
}
var U4 = typeof String.prototype.normalize == "function" ? (r377)=>r377.normalize("NFKD")
 : (r378)=>r378
, b8 = class {
    constructor(e870, t898, n254 = 0, s353 = e870.length, i487){
        this.value = {
            from: 0,
            to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e870.iterRange(n254, s353), this.bufferStart = n254, this.normalize = i487 ? (a117)=>i487(U4(a117))
         : U4, this.query = this.normalize(t898);
    }
    peek() {
        if (this.bufferPos == this.buffer.length) {
            if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
            this.bufferPos = 0, this.buffer = this.iter.value;
        }
        return b(this.buffer, this.bufferPos);
    }
    next() {
        for(; this.matches.length;)this.matches.pop();
        return this.nextOverlapping();
    }
    nextOverlapping() {
        for(;;){
            let e871 = this.peek();
            if (e871 < 0) return this.done = !0, this;
            let t899 = z(e871), n255 = this.bufferStart + this.bufferPos;
            this.bufferPos += q(e871);
            let s354 = this.normalize(t899);
            for(let i488 = 0, a118 = n255;; i488++){
                let l231 = s354.charCodeAt(i488), c107 = this.match(l231, a118);
                if (c107) return this.value = c107, this;
                if (i488 == s354.length - 1) break;
                a118 == n255 && i488 < t899.length && t899.charCodeAt(i488) == l231 && a118++;
            }
        }
    }
    match(e872, t900) {
        let n256 = null;
        for(let s355 = 0; s355 < this.matches.length; s355 += 2){
            let i489 = this.matches[s355], a119 = !1;
            this.query.charCodeAt(i489) == e872 && (i489 == this.query.length - 1 ? n256 = {
                from: this.matches[s355 + 1],
                to: t900 + 1
            } : (this.matches[s355]++, a119 = !0)), a119 || (this.matches.splice(s355, 2), s355 -= 2);
        }
        return this.query.charCodeAt(0) == e872 && (this.query.length == 1 ? n256 = {
            from: t900,
            to: t900 + 1
        } : this.matches.push(1, t900)), n256;
    }
};
typeof Symbol != "undefined" && (b8.prototype[Symbol.iterator] = function() {
    return this;
});
var X6 = {
    from: -1,
    to: -1,
    match: /.*/.exec("")
}, z7 = "gm" + (/x/.unicode == null ? "" : "u"), $6 = class {
    constructor(e873, t901, n257, s356 = 0, i490 = e873.length){
        if (this.to = i490, this.curLine = "", this.done = !1, this.value = X6, /\\[sWDnr]|\n|\r|\[\^/.test(t901)) return new W7(e873, t901, n257, s356, i490);
        this.re = new RegExp(t901, z7 + ((n257 == null ? void 0 : n257.ignoreCase) ? "i" : "")), this.iter = e873.iter();
        let a120 = e873.lineAt(s356);
        this.curLineStart = a120.from, this.matchPos = s356, this.getLine(this.curLineStart);
    }
    getLine(e874) {
        this.iter.next(e874), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
    }
    nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
    }
    next() {
        for(let e875 = this.matchPos - this.curLineStart;;){
            this.re.lastIndex = e875;
            let t902 = this.matchPos <= this.to && this.re.exec(this.curLine);
            if (t902) {
                let n258 = this.curLineStart + t902.index, s357 = n258 + t902[0].length;
                if (this.matchPos = s357 + (n258 == s357 ? 1 : 0), n258 == this.curLine.length && this.nextLine(), n258 < s357 || n258 > this.value.to) return this.value = {
                    from: n258,
                    to: s357,
                    match: t902
                }, this;
                e875 = this.matchPos - this.curLineStart;
            } else if (this.curLineStart + this.curLine.length < this.to) this.nextLine(), e875 = 0;
            else return this.done = !0, this;
        }
    }
}, T9 = new WeakMap, S10 = class {
    constructor(e876, t903){
        this.from = e876, this.text = t903;
    }
    get to() {
        return this.from + this.text.length;
    }
    static get(e877, t904, n259) {
        let s358 = T9.get(e877);
        if (!s358 || s358.from >= n259 || s358.to <= t904) {
            let l232 = new S10(t904, e877.sliceString(t904, n259));
            return T9.set(e877, l232), l232;
        }
        if (s358.from == t904 && s358.to == n259) return s358;
        let { text: i491 , from: a121  } = s358;
        return a121 > t904 && (i491 = e877.sliceString(t904, a121) + i491, a121 = t904), s358.to < n259 && (i491 += e877.sliceString(s358.to, n259)), T9.set(e877, new S10(a121, i491)), new S10(t904, i491.slice(t904 - a121, n259 - a121));
    }
}, W7 = class {
    constructor(e878, t905, n260, s359, i492){
        this.text = e878, this.to = i492, this.done = !1, this.value = X6, this.matchPos = s359, this.re = new RegExp(t905, z7 + ((n260 == null ? void 0 : n260.ignoreCase) ? "i" : "")), this.flat = S10.get(e878, s359, this.chunkEnd(s359 + 5000));
    }
    chunkEnd(e879) {
        return e879 >= this.to ? this.to : this.text.lineAt(e879).to;
    }
    next() {
        for(;;){
            let e880 = this.re.lastIndex = this.matchPos - this.flat.from, t906 = this.re.exec(this.flat.text);
            if (t906 && !t906[0] && t906.index == e880 && (this.re.lastIndex = e880 + 1, t906 = this.re.exec(this.flat.text)), t906 && this.flat.to < this.to && t906.index + t906[0].length > this.flat.text.length - 10 && (t906 = null), t906) {
                let n261 = this.flat.from + t906.index, s360 = n261 + t906[0].length;
                return this.value = {
                    from: n261,
                    to: s360,
                    match: t906
                }, this.matchPos = s360 + (n261 == s360 ? 1 : 0), this;
            } else {
                if (this.flat.to == this.to) return this.done = !0, this;
                this.flat = S10.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
            }
        }
    }
};
typeof Symbol != "undefined" && ($6.prototype[Symbol.iterator] = W7.prototype[Symbol.iterator] = function() {
    return this;
});
function de4(r379) {
    try {
        return new RegExp(r379, z7), !0;
    } catch  {
        return !1;
    }
}
function V5(r380) {
    let e881 = s2("input", {
        class: "cm-textfield",
        name: "line"
    }), t907 = s2("form", {
        class: "cm-gotoLine",
        onkeydown: (s361)=>{
            s361.keyCode == 27 ? (s361.preventDefault(), r380.dispatch({
                effects: L5.of(!1)
            }), r380.focus()) : s361.keyCode == 13 && (s361.preventDefault(), n262());
        },
        onsubmit: (s362)=>{
            s362.preventDefault(), n262();
        }
    }, s2("label", r380.state.phrase("Go to line"), ": ", e881), " ", s2("button", {
        class: "cm-button",
        type: "submit"
    }, r380.state.phrase("go")));
    function n262() {
        let s363 = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e881.value);
        if (!s363) return;
        let { state: i493  } = r380, a122 = i493.doc.lineAt(i493.selection.main.head), [, l233, c108, d72, h129] = s363, m47 = d72 ? +d72.slice(1) : 0, g42 = c108 ? +c108 : a122.number;
        if (c108 && h129) {
            let O14 = g42 / 100;
            l233 && (O14 = O14 * (l233 == "-" ? -1 : 1) + a122.number / i493.doc.lines), g42 = Math.round(i493.doc.lines * O14);
        } else c108 && l233 && (g42 = g42 * (l233 == "-" ? -1 : 1) + a122.number);
        let B16 = i493.doc.line(Math.max(1, Math.min(i493.doc.lines, g42)));
        r380.dispatch({
            effects: L5.of(!1),
            selection: p.cursor(B16.from + Math.max(0, Math.min(m47, B16.length))),
            scrollIntoView: !0
        }), r380.focus();
    }
    return {
        dom: t907,
        pos: -10
    };
}
var L5 = v.define(), Y5 = B1.define({
    create () {
        return !0;
    },
    update (r381, e882) {
        for (let t908 of e882.effects)t908.is(L5) && (r381 = t908.value);
        return r381;
    },
    provide: (r382)=>b7.from(r382, (e883)=>e883 ? V5 : null
        )
}), me4 = (r383)=>{
    let e884 = O9(r383, V5);
    if (!e884) {
        let t909 = [
            L5.of(!0)
        ];
        r383.state.field(Y5, !1) == null && t909.push(v.appendConfig.of([
            Y5,
            pe4
        ])), r383.dispatch({
            effects: t909
        }), e884 = O9(r383, V5);
    }
    return e884 && e884.dom.querySelector("input").focus(), !0;
}, pe4 = D2.baseTheme({
    ".cm-panel.cm-gotoLine": {
        padding: "2px 6px 4px",
        "& label": {
            fontSize: "80%"
        }
    }
}), ge4 = {
    highlightWordAroundCursor: !1,
    minSelectionLength: 1,
    maxMatches: 100
}, Z4 = O1.define({
    combine (r384) {
        return be(r384, ge4, {
            highlightWordAroundCursor: (e885, t910)=>e885 || t910
            ,
            minSelectionLength: Math.min,
            maxMatches: Math.min
        });
    }
});
function We1(r385) {
    let e886 = [
        ye4,
        Se4
    ];
    return r385 && e886.push(Z4.of(r385)), e886;
}
var xe4 = w4.mark({
    class: "cm-selectionMatch"
}), be4 = w4.mark({
    class: "cm-selectionMatch cm-selectionMatch-main"
}), Se4 = z2.fromClass(class {
    constructor(r386){
        this.decorations = this.getDeco(r386);
    }
    update(r387) {
        (r387.selectionSet || r387.docChanged || r387.viewportChanged) && (this.decorations = this.getDeco(r387.view));
    }
    getDeco(r388) {
        let e887 = r388.state.facet(Z4), { state: t911  } = r388, n263 = t911.selection;
        if (n263.ranges.length > 1) return w4.none;
        let s364 = n263.main, i494, a123 = null;
        if (s364.empty) {
            if (!e887.highlightWordAroundCursor) return w4.none;
            let c109 = t911.wordAt(s364.head);
            if (!c109) return w4.none;
            a123 = t911.charCategorizer(s364.head), i494 = t911.sliceDoc(c109.from, c109.to);
        } else {
            let c111 = s364.to - s364.from;
            if (c111 < e887.minSelectionLength || c111 > 200) return w4.none;
            if (i494 = t911.sliceDoc(s364.from, s364.to).trim(), !i494) return w4.none;
        }
        let l234 = [];
        for (let c112 of r388.visibleRanges){
            let d73 = new b8(t911.doc, i494, c112.from, c112.to);
            for(; !d73.next().done;){
                let { from: h130 , to: m48  } = d73.value;
                if ((!a123 || (h130 == 0 || a123(t911.sliceDoc(h130 - 1, h130)) != T.Word) && (m48 == t911.doc.length || a123(t911.sliceDoc(m48, m48 + 1)) != T.Word)) && (a123 && h130 <= s364.from && m48 >= s364.to ? l234.push(be4.range(h130, m48)) : (h130 >= s364.to || m48 <= s364.from) && l234.push(xe4.range(h130, m48)), l234.length > e887.maxMatches)) return w4.none;
            }
        }
        return w4.set(l234);
    }
}, {
    decorations: (r389)=>r389.decorations
}), ye4 = D2.baseTheme({
    ".cm-selectionMatch": {
        backgroundColor: "#99ff7780"
    },
    ".cm-searchMatch .cm-selectionMatch": {
        backgroundColor: "transparent"
    }
}), Me2 = ({ state: r390 , dispatch: e888  })=>{
    let { selection: t912  } = r390, n264 = p.create(t912.ranges.map((s365)=>r390.wordAt(s365.head) || p.cursor(s365.head)
    ), t912.mainIndex);
    return n264.eq(t912) ? !1 : (e888(r390.update({
        selection: n264
    })), !0);
};
function ke3(r391, e889) {
    let { main: t913 , ranges: n265  } = r391.selection, s366 = r391.wordAt(t913.head), i495 = s366 && s366.from == t913.from && s366.to == t913.to;
    for(let a124 = !1, l235 = new b8(r391.doc, e889, n265[n265.length - 1].to);;)if (l235.next(), l235.done) {
        if (a124) return null;
        l235 = new b8(r391.doc, e889, 0, Math.max(0, n265[n265.length - 1].from - 1)), a124 = !0;
    } else {
        if (a124 && n265.some((c113)=>c113.from == l235.value.from
        )) continue;
        if (i495) {
            let c114 = r391.wordAt(l235.value.from);
            if (!c114 || c114.from != l235.value.from || c114.to != l235.value.to) continue;
        }
        return l235.value;
    }
}
var ve4 = ({ state: r392 , dispatch: e890  })=>{
    let { ranges: t914  } = r392.selection;
    if (t914.some((i496)=>i496.from === i496.to
    )) return Me2({
        state: r392,
        dispatch: e890
    });
    let n266 = r392.sliceDoc(t914[0].from, t914[0].to);
    if (r392.selection.ranges.some((i497)=>r392.sliceDoc(i497.from, i497.to) != n266
    )) return !1;
    let s367 = ke3(r392, n266);
    return s367 ? (e890(r392.update({
        selection: r392.selection.addRange(p.range(s367.from, s367.to), !1),
        scrollIntoView: !0
    })), !0) : !1;
}, P8 = O1.define({
    combine (r393) {
        var e891;
        return {
            top: r393.reduce((t915, n267)=>t915 ?? n267.top
            , void 0) || !1,
            caseSensitive: r393.reduce((t916, n268)=>t916 ?? (n268.caseSensitive || n268.matchCase)
            , void 0) || !1,
            createPanel: ((e891 = r393.find((t917)=>t917.createPanel
            )) === null || e891 === void 0 ? void 0 : e891.createPanel) || ((t918)=>new ie4(t918)
            )
        };
    }
});
var N6 = class {
    constructor(e892){
        this.search = e892.search, this.caseSensitive = !!e892.caseSensitive, this.regexp = !!e892.regexp, this.replace = e892.replace || "", this.valid = !!this.search && (!this.regexp || de4(this.search));
    }
    eq(e893) {
        return this.search == e893.search && this.replace == e893.replace && this.caseSensitive == e893.caseSensitive && this.regexp == e893.regexp;
    }
    create() {
        return this.regexp ? new te4(this) : new ee4(this);
    }
}, w9 = class {
    constructor(e894){
        this.spec = e894;
    }
}, ee4 = class extends w9 {
    constructor(e895){
        super(e895);
        this.unquoted = e895.search.replace(/\\([nrt\\])/g, (t, n269)=>n269 == "n" ? `
` : n269 == "r" ? "\r" : n269 == "t" ? "	" : "\\"
        );
    }
    cursor(e896, t919 = 0, n270 = e896.length) {
        return new b8(e896, this.unquoted, t919, n270, this.spec.caseSensitive ? void 0 : (s368)=>s368.toLowerCase()
        );
    }
    nextMatch(e897, t920, n271) {
        let s369 = this.cursor(e897, n271).nextOverlapping();
        return s369.done && (s369 = this.cursor(e897, 0, t920).nextOverlapping()), s369.done ? null : s369.value;
    }
    prevMatchInRange(e898, t921, n272) {
        for(let s370 = n272;;){
            let i498 = Math.max(t921, s370 - 10000 - this.unquoted.length), a125 = this.cursor(e898, i498, s370), l236 = null;
            for(; !a125.nextOverlapping().done;)l236 = a125.value;
            if (l236) return l236;
            if (i498 == t921) return null;
            s370 -= 10000;
        }
    }
    prevMatch(e899, t922, n273) {
        return this.prevMatchInRange(e899, 0, t922) || this.prevMatchInRange(e899, n273, e899.length);
    }
    getReplacement(e) {
        return this.spec.replace;
    }
    matchAll(e900, t923) {
        let n274 = this.cursor(e900), s371 = [];
        for(; !n274.next().done;){
            if (s371.length >= t923) return null;
            s371.push(n274.value);
        }
        return s371;
    }
    highlight(e901, t924, n275, s372) {
        let i499 = this.cursor(e901, Math.max(0, t924 - this.unquoted.length), Math.min(n275 + this.unquoted.length, e901.length));
        for(; !i499.next().done;)s372(i499.value.from, i499.value.to);
    }
}, te4 = class extends w9 {
    cursor(e902, t925 = 0, n276 = e902.length) {
        return new $6(e902, this.spec.search, this.spec.caseSensitive ? void 0 : {
            ignoreCase: !0
        }, t925, n276);
    }
    nextMatch(e903, t926, n277) {
        let s373 = this.cursor(e903, n277).next();
        return s373.done && (s373 = this.cursor(e903, 0, t926).next()), s373.done ? null : s373.value;
    }
    prevMatchInRange(e904, t927, n278) {
        for(let s374 = 1;; s374++){
            let i500 = Math.max(t927, n278 - s374 * 10000), a126 = this.cursor(e904, i500, n278), l237 = null;
            for(; !a126.next().done;)l237 = a126.value;
            if (l237 && (i500 == t927 || l237.from > i500 + 10)) return l237;
            if (i500 == t927) return null;
        }
    }
    prevMatch(e905, t928, n279) {
        return this.prevMatchInRange(e905, 0, t928) || this.prevMatchInRange(e905, n279, e905.length);
    }
    getReplacement(e906) {
        return this.spec.replace.replace(/\$([$&\d+])/g, (t929, n280)=>n280 == "$" ? "$" : n280 == "&" ? e906.match[0] : n280 != "0" && +n280 < e906.match.length ? e906.match[n280] : t929
        );
    }
    matchAll(e907, t930) {
        let n281 = this.cursor(e907), s375 = [];
        for(; !n281.next().done;){
            if (s375.length >= t930) return null;
            s375.push(n281.value);
        }
        return s375;
    }
    highlight(e908, t931, n282, s376) {
        let i501 = this.cursor(e908, Math.max(0, t931 - 250), Math.min(n282 + 250, e908.length));
        for(; !i501.next().done;)s376(i501.value.from, i501.value.to);
    }
}, M8 = v.define(), Q6 = v.define(), p7 = B1.define({
    create (r394) {
        return new A8(R4(r394).create(), E9);
    },
    update (r395, e909) {
        for (let t932 of e909.effects)t932.is(M8) ? r395 = new A8(t932.value.create(), r395.panel) : t932.is(Q6) && (r395 = new A8(r395.query, t932.value ? E9 : null));
        return r395;
    },
    provide: (r396)=>b7.from(r396, (e910)=>e910.panel
        )
});
var A8 = class {
    constructor(e911, t933){
        this.query = e911, this.panel = t933;
    }
}, Ce3 = w4.mark({
    class: "cm-searchMatch"
}), Le2 = w4.mark({
    class: "cm-searchMatch cm-searchMatch-selected"
}), Pe3 = z2.fromClass(class {
    constructor(r397){
        this.view = r397, this.decorations = this.highlight(r397.state.field(p7));
    }
    update(r398) {
        let e912 = r398.state.field(p7);
        (e912 != r398.startState.field(p7) || r398.docChanged || r398.selectionSet) && (this.decorations = this.highlight(e912));
    }
    highlight({ query: r399 , panel: e913  }) {
        if (!e913 || !r399.spec.valid) return w4.none;
        let { view: t934  } = this, n283 = new x2;
        for(let s377 = 0, i502 = t934.visibleRanges, a127 = i502.length; s377 < a127; s377++){
            let { from: l238 , to: c115  } = i502[s377];
            for(; s377 < a127 - 1 && c115 > i502[s377 + 1].from - 2 * 250;)c115 = i502[++s377].to;
            r399.highlight(t934.state.doc, l238, c115, (d74, h131)=>{
                let m49 = t934.state.selection.ranges.some((g43)=>g43.from == d74 && g43.to == h131
                );
                n283.add(d74, h131, m49 ? Le2 : Ce3);
            });
        }
        return n283.finish();
    }
}, {
    decorations: (r400)=>r400.decorations
});
function k3(r401) {
    return (e914)=>{
        let t935 = e914.state.field(p7, !1);
        return t935 && t935.query.spec.valid ? r401(e914, t935) : ne4(e914);
    };
}
var F8 = k3((r402, { query: e915  })=>{
    let { from: t936 , to: n284  } = r402.state.selection.main, s378 = e915.nextMatch(r402.state.doc, t936, n284);
    return !s378 || s378.from == t936 && s378.to == n284 ? !1 : (r402.dispatch({
        selection: {
            anchor: s378.from,
            head: s378.to
        },
        scrollIntoView: !0,
        effects: H5(r402, s378),
        userEvent: "select.search"
    }), !0);
}), D8 = k3((r403, { query: e916  })=>{
    let { state: t937  } = r403, { from: n285 , to: s379  } = t937.selection.main, i503 = e916.prevMatch(t937.doc, n285, s379);
    return i503 ? (r403.dispatch({
        selection: {
            anchor: i503.from,
            head: i503.to
        },
        scrollIntoView: !0,
        effects: H5(r403, i503),
        userEvent: "select.search"
    }), !0) : !1;
}), Ae4 = k3((r404, { query: e917  })=>{
    let t938 = e917.matchAll(r404.state.doc, 1000);
    return !t938 || !t938.length ? !1 : (r404.dispatch({
        selection: p.create(t938.map((n286)=>p.range(n286.from, n286.to)
        )),
        userEvent: "select.search.matches"
    }), !0);
}), Fe1 = ({ state: r405 , dispatch: e918  })=>{
    let t939 = r405.selection;
    if (t939.ranges.length > 1 || t939.main.empty) return !1;
    let { from: n287 , to: s380  } = t939.main, i504 = [], a128 = 0;
    for(let l239 = new b8(r405.doc, r405.sliceDoc(n287, s380)); !l239.next().done;){
        if (i504.length > 1000) return !1;
        l239.value.from == n287 && (a128 = i504.length), i504.push(p.range(l239.value.from, l239.value.to));
    }
    return e918(r405.update({
        selection: p.create(i504, a128),
        userEvent: "select.search.matches"
    })), !0;
}, re4 = k3((r406, { query: e919  })=>{
    let { state: t940  } = r406, { from: n288 , to: s381  } = t940.selection.main;
    if (t940.readOnly) return !1;
    let i505 = e919.nextMatch(t940.doc, n288, n288);
    if (!i505) return !1;
    let a129 = [], l240, c116;
    if (i505.from == n288 && i505.to == s381 && (c116 = t940.toText(e919.getReplacement(i505)), a129.push({
        from: i505.from,
        to: i505.to,
        insert: c116
    }), i505 = e919.nextMatch(t940.doc, i505.from, i505.to)), i505) {
        let d75 = a129.length == 0 || a129[0].from >= i505.to ? 0 : i505.to - i505.from - c116.length;
        l240 = {
            anchor: i505.from - d75,
            head: i505.to - d75
        };
    }
    return r406.dispatch({
        changes: a129,
        selection: l240,
        scrollIntoView: !!l240,
        effects: i505 ? H5(r406, i505) : void 0,
        userEvent: "input.replace"
    }), !0;
}), De2 = k3((r407, { query: e920  })=>{
    if (r407.state.readOnly) return !1;
    let t941 = e920.matchAll(r407.state.doc, 1000000000).map((n289)=>{
        let { from: s382 , to: i506  } = n289;
        return {
            from: s382,
            to: i506,
            insert: e920.getReplacement(n289)
        };
    });
    return t941.length ? (r407.dispatch({
        changes: t941,
        userEvent: "input.replace.all"
    }), !0) : !1;
});
function E9(r408) {
    return r408.state.facet(P8).createPanel(r408);
}
function R4(r409, e921) {
    var t942;
    let n290 = r409.selection.main, s383 = n290.empty || n290.to > n290.from + 100 ? "" : r409.sliceDoc(n290.from, n290.to), i507 = (t942 = e921 == null ? void 0 : e921.caseSensitive) !== null && t942 !== void 0 ? t942 : r409.facet(P8).caseSensitive;
    return e921 && !s383 ? e921 : new N6({
        search: s383.replace(/\n/g, "\\n"),
        caseSensitive: i507
    });
}
var ne4 = (r410)=>{
    let e922 = r410.state.field(p7, !1);
    if (e922 && e922.panel) {
        let t943 = O9(r410, E9);
        if (!t943) return !1;
        let n291 = t943.dom.querySelector("[name=search]");
        if (n291 != r410.root.activeElement) {
            let s384 = R4(r410.state, e922.query.spec);
            s384.valid && r410.dispatch({
                effects: M8.of(s384)
            }), n291.focus(), n291.select();
        }
    } else r410.dispatch({
        effects: [
            Q6.of(!0),
            e922 ? M8.of(R4(r410.state, e922.query.spec)) : v.appendConfig.of(Re1)
        ]
    });
    return !0;
}, se3 = (r411)=>{
    let e923 = r411.state.field(p7, !1);
    if (!e923 || !e923.panel) return !1;
    let t944 = O9(r411, E9);
    return t944 && t944.dom.contains(r411.root.activeElement) && r411.focus(), r411.dispatch({
        effects: Q6.of(!1)
    }), !0;
}, we4 = [
    {
        key: "Mod-f",
        run: ne4,
        scope: "editor search-panel"
    },
    {
        key: "F3",
        run: F8,
        shift: D8,
        scope: "editor search-panel",
        preventDefault: !0
    },
    {
        key: "Mod-g",
        run: F8,
        shift: D8,
        scope: "editor search-panel",
        preventDefault: !0
    },
    {
        key: "Escape",
        run: se3,
        scope: "editor search-panel"
    },
    {
        key: "Mod-Shift-l",
        run: Fe1
    },
    {
        key: "Alt-g",
        run: me4
    },
    {
        key: "Mod-d",
        run: ve4,
        preventDefault: !0
    }
], ie4 = class {
    constructor(e924){
        this.view = e924;
        let t945 = this.query = e924.state.field(p7).query.spec;
        this.commit = this.commit.bind(this), this.searchField = s2("input", {
            value: t945.search,
            placeholder: f4(e924, "Find"),
            "aria-label": f4(e924, "Find"),
            class: "cm-textfield",
            name: "search",
            onchange: this.commit,
            onkeyup: this.commit
        }), this.replaceField = s2("input", {
            value: t945.replace,
            placeholder: f4(e924, "Replace"),
            "aria-label": f4(e924, "Replace"),
            class: "cm-textfield",
            name: "replace",
            onchange: this.commit,
            onkeyup: this.commit
        }), this.caseField = s2("input", {
            type: "checkbox",
            name: "case",
            checked: t945.caseSensitive,
            onchange: this.commit
        }), this.reField = s2("input", {
            type: "checkbox",
            name: "re",
            checked: t945.regexp,
            onchange: this.commit
        });
        function n292(s385, i508, a130) {
            return s2("button", {
                class: "cm-button",
                name: s385,
                onclick: i508,
                type: "button"
            }, a130);
        }
        this.dom = s2("div", {
            onkeydown: (s386)=>this.keydown(s386)
            ,
            class: "cm-search"
        }, [
            this.searchField,
            n292("next", ()=>F8(e924)
            , [
                f4(e924, "next")
            ]),
            n292("prev", ()=>D8(e924)
            , [
                f4(e924, "previous")
            ]),
            n292("select", ()=>Ae4(e924)
            , [
                f4(e924, "all")
            ]),
            s2("label", null, [
                this.caseField,
                f4(e924, "match case")
            ]),
            s2("label", null, [
                this.reField,
                f4(e924, "regexp")
            ]),
            ...e924.state.readOnly ? [] : [
                s2("br"),
                this.replaceField,
                n292("replace", ()=>re4(e924)
                , [
                    f4(e924, "replace")
                ]),
                n292("replaceAll", ()=>De2(e924)
                , [
                    f4(e924, "replace all")
                ]),
                s2("button", {
                    name: "close",
                    onclick: ()=>se3(e924)
                    ,
                    "aria-label": f4(e924, "close"),
                    type: "button"
                }, [
                    "\xD7"
                ])
            ]
        ]);
    }
    commit() {
        let e925 = new N6({
            search: this.searchField.value,
            caseSensitive: this.caseField.checked,
            regexp: this.reField.checked,
            replace: this.replaceField.value
        });
        e925.eq(this.query) || (this.query = e925, this.view.dispatch({
            effects: M8.of(e925)
        }));
    }
    keydown(e926) {
        lr(this.view, e926, "search-panel") ? e926.preventDefault() : e926.keyCode == 13 && e926.target == this.searchField ? (e926.preventDefault(), (e926.shiftKey ? D8 : F8)(this.view)) : e926.keyCode == 13 && e926.target == this.replaceField && (e926.preventDefault(), re4(this.view));
    }
    update(e927) {
        for (let t946 of e927.transactions)for (let n293 of t946.effects)n293.is(M8) && !n293.value.eq(this.query) && this.setQuery(n293.value);
    }
    setQuery(e928) {
        this.query = e928, this.searchField.value = e928.search, this.replaceField.value = e928.replace, this.caseField.checked = e928.caseSensitive, this.reField.checked = e928.regexp;
    }
    mount() {
        this.searchField.select();
    }
    get pos() {
        return 80;
    }
    get top() {
        return this.view.state.facet(P8).top;
    }
};
function f4(r412, e929) {
    return r412.state.phrase(e929);
}
var q7 = 30, I7 = /[\s\.,:;?!]/;
function H5(r413, { from: e930 , to: t947  }) {
    let n294 = r413.state.doc.lineAt(e930).from, s387 = r413.state.doc.lineAt(t947).to, i509 = Math.max(n294, e930 - q7), a131 = Math.min(s387, t947 + q7), l241 = r413.state.sliceDoc(i509, a131);
    if (i509 != n294) {
        for(let c117 = 0; c117 < q7; c117++)if (!I7.test(l241[c117 + 1]) && I7.test(l241[c117])) {
            l241 = l241.slice(c117);
            break;
        }
    }
    if (a131 != s387) {
        for(let c118 = l241.length - 1; c118 > l241.length - q7; c118--)if (!I7.test(l241[c118 - 1]) && I7.test(l241[c118])) {
            l241 = l241.slice(0, c118);
            break;
        }
    }
    return D2.announce.of(`${r413.state.phrase("current match")}. ${l241} ${r413.state.phrase("on line")} ${r413.state.doc.lineAt(e930).number}`);
}
var Ee1 = D2.baseTheme({
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
}), Re1 = [
    p7,
    Ie.lowest(Pe3),
    Ee1
];
var _6 = typeof navigator != "undefined" && !/Edge\/(\d+)/.exec(navigator.userAgent) && /Apple Computer/.test(navigator.vendor) && (/Mobile\/\w+/.test(navigator.userAgent) || navigator.maxTouchPoints > 2), C9 = "-10000px", M9 = class {
    constructor(t948, e931, o235){
        this.facet = e931, this.createTooltipView = o235, this.input = t948.state.facet(e931), this.tooltips = this.input.filter((s388)=>s388
        ), this.tooltipViews = this.tooltips.map(o235);
    }
    update(t949) {
        let e932 = t949.state.facet(this.facet), o236 = e932.filter((r414)=>r414
        );
        if (e932 === this.input) {
            for (let r415 of this.tooltipViews)r415.update && r415.update(t949);
            return !1;
        }
        let s389 = [];
        for(let r2 = 0; r2 < o236.length; r2++){
            let a132 = o236[r2], l242 = -1;
            if (!!a132) {
                for(let n295 = 0; n295 < this.tooltips.length; n295++){
                    let h132 = this.tooltips[n295];
                    h132 && h132.create == a132.create && (l242 = n295);
                }
                if (l242 < 0) s389[r2] = this.createTooltipView(a132);
                else {
                    let n296 = s389[r2] = this.tooltipViews[l242];
                    n296.update && n296.update(t949);
                }
            }
        }
        for (let r1100 of this.tooltipViews)s389.indexOf(r1100) < 0 && r1100.dom.remove();
        return this.input = e932, this.tooltips = o236, this.tooltipViews = s389, !0;
    }
};
function z8() {
    return {
        top: 0,
        left: 0,
        bottom: innerHeight,
        right: innerWidth
    };
}
var T10 = O1.define({
    combine: (i510)=>{
        var t950, e933, o237;
        return {
            position: _6 ? "absolute" : ((t950 = i510.find((s390)=>s390.position
            )) === null || t950 === void 0 ? void 0 : t950.position) || "fixed",
            parent: ((e933 = i510.find((s391)=>s391.parent
            )) === null || e933 === void 0 ? void 0 : e933.parent) || null,
            tooltipSpace: ((o237 = i510.find((s392)=>s392.tooltipSpace
            )) === null || o237 === void 0 ? void 0 : o237.tooltipSpace) || z8
        };
    }
}), H6 = z2.fromClass(class {
    constructor(i511){
        var t951;
        this.view = i511, this.inView = !0, this.lastTransaction = 0, this.measureTimeout = -1;
        let e934 = i511.state.facet(T10);
        this.position = e934.position, this.parent = e934.parent, this.classes = i511.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
        }, this.manager = new M9(i511, k4, (o238)=>this.createTooltip(o238)
        ), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((o239)=>{
            Date.now() > this.lastTransaction - 50 && o239.length > 0 && o239[o239.length - 1].intersectionRatio < 1 && this.measureSoon();
        }, {
            threshold: [
                1
            ]
        }) : null, this.observeIntersection(), (t951 = i511.dom.ownerDocument.defaultView) === null || t951 === void 0 || t951.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
    }
    createContainer() {
        this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
    }
    observeIntersection() {
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let i512 of this.manager.tooltipViews)this.intersectionObserver.observe(i512.dom);
        }
    }
    measureSoon() {
        this.measureTimeout < 0 && (this.measureTimeout = setTimeout(()=>{
            this.measureTimeout = -1, this.maybeMeasure();
        }, 50));
    }
    update(i513) {
        i513.transactions.length && (this.lastTransaction = Date.now());
        let t952 = this.manager.update(i513);
        t952 && this.observeIntersection();
        let e935 = t952 || i513.geometryChanged, o240 = i513.state.facet(T10);
        if (o240.position != this.position) {
            this.position = o240.position;
            for (let s393 of this.manager.tooltipViews)s393.dom.style.position = this.position;
            e935 = !0;
        }
        if (o240.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = o240.parent, this.createContainer();
            for (let s394 of this.manager.tooltipViews)this.container.appendChild(s394.dom);
            e935 = !0;
        } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
        e935 && this.maybeMeasure();
    }
    createTooltip(i514) {
        let t953 = i514.create(this.view);
        if (t953.dom.classList.add("cm-tooltip"), i514.arrow && !t953.dom.querySelector("cm-tooltip > cm-tooltip-arrow")) {
            let e936 = document.createElement("div");
            e936.className = "cm-tooltip-arrow", t953.dom.appendChild(e936);
        }
        return t953.dom.style.position = this.position, t953.dom.style.top = C9, this.container.appendChild(t953.dom), t953.mount && t953.mount(this.view), t953;
    }
    destroy() {
        var i515, t954;
        (i515 = this.view.dom.ownerDocument.defaultView) === null || i515 === void 0 || i515.removeEventListener("resize", this.measureSoon);
        for (let { dom: e937  } of this.manager.tooltipViews)e937.remove();
        (t954 = this.intersectionObserver) === null || t954 === void 0 || t954.disconnect(), clearTimeout(this.measureTimeout);
    }
    readMeasure() {
        let i516 = this.view.dom.getBoundingClientRect();
        return {
            editor: i516,
            parent: this.parent ? this.container.getBoundingClientRect() : i516,
            pos: this.manager.tooltips.map((t955)=>this.view.coordsAtPos(t955.pos)
            ),
            size: this.manager.tooltipViews.map(({ dom: t956  })=>t956.getBoundingClientRect()
            ),
            space: this.view.state.facet(T10).tooltipSpace(this.view)
        };
    }
    writeMeasure(i517) {
        let { editor: t957 , space: e938  } = i517, o241 = [];
        for(let s395 = 0; s395 < this.manager.tooltips.length; s395++){
            let r416 = this.manager.tooltips[s395], a133 = this.manager.tooltipViews[s395], { dom: l243  } = a133, n297 = i517.pos[s395], h133 = i517.size[s395];
            if (!n297 || n297.bottom <= Math.max(t957.top, e938.top) || n297.top >= Math.min(t957.bottom, e938.bottom) || n297.right <= Math.max(t957.left, e938.left) || n297.left >= Math.min(t957.right, e938.right)) {
                l243.style.top = C9;
                continue;
            }
            let p35 = r416.arrow ? a133.dom.querySelector(".cm-tooltip-arrow") : null, d76 = p35 ? 7 : 0, g44 = h133.right - h133.left, b32 = h133.bottom - h133.top, m50 = a133.offset || q8, V11 = this.view.textDirection == P3.LTR, u84 = h133.width > e938.right - e938.left ? V11 ? e938.left : e938.right - h133.width : V11 ? Math.min(n297.left - (p35 ? 14 : 0) + m50.x, e938.right - g44) : Math.max(e938.left, n297.left - g44 + (p35 ? 14 : 0) - m50.x), c119 = !!r416.above;
            !r416.strictSide && (c119 ? n297.top - (h133.bottom - h133.top) - m50.y < e938.top : n297.bottom + (h133.bottom - h133.top) + m50.y > e938.bottom) && c119 == e938.bottom - n297.bottom > n297.top - e938.top && (c119 = !c119);
            let f99 = c119 ? n297.top - b32 - d76 - m50.y : n297.bottom + d76 + m50.y, O15 = u84 + g44;
            for (let v29 of o241)v29.left < O15 && v29.right > u84 && v29.top < f99 + b32 && v29.bottom > f99 && (f99 = c119 ? v29.top - b32 - 2 - d76 : v29.bottom + d76 + 2);
            this.position == "absolute" ? (l243.style.top = f99 - i517.parent.top + "px", l243.style.left = u84 - i517.parent.left + "px") : (l243.style.top = f99 + "px", l243.style.left = u84 + "px"), p35 && (p35.style.left = `${n297.left + (V11 ? m50.x : -m50.x) - (u84 + 14 - 7)}px`), o241.push({
                left: u84,
                top: f99,
                right: O15,
                bottom: f99 + b32
            }), l243.classList.toggle("cm-tooltip-above", c119), l243.classList.toggle("cm-tooltip-below", !c119), a133.positioned && a133.positioned();
        }
    }
    maybeMeasure() {
        if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) for (let i518 of this.manager.tooltipViews)i518.dom.style.top = C9;
    }
}, {
    eventHandlers: {
        scroll () {
            this.maybeMeasure();
        }
    }
}), B5 = D2.baseTheme({
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
}), q8 = {
    x: 0,
    y: 0
}, k4 = O1.define({
    enables: [
        H6,
        B5
    ]
}), w10 = O1.define(), x9 = class {
    constructor(t958){
        this.view = t958, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new M9(t958, w10, (e939)=>this.createHostedView(e939)
        );
    }
    static create(t959) {
        return new x9(t959);
    }
    createHostedView(t960) {
        let e940 = t960.create(this.view);
        return e940.dom.classList.add("cm-tooltip-section"), this.dom.appendChild(e940.dom), this.mounted && e940.mount && e940.mount(this.view), e940;
    }
    mount(t961) {
        for (let e941 of this.manager.tooltipViews)e941.mount && e941.mount(t961);
        this.mounted = !0;
    }
    positioned() {
        for (let t962 of this.manager.tooltipViews)t962.positioned && t962.positioned();
    }
    update(t963) {
        this.manager.update(t963);
    }
}, N7 = k4.compute([
    w10
], (i519)=>{
    let t964 = i519.facet(w10).filter((e942)=>e942
    );
    return t964.length === 0 ? null : {
        pos: Math.min(...t964.map((e943)=>e943.pos
        )),
        end: Math.max(...t964.filter((e944)=>e944.end != null
        ).map((e945)=>e945.end
        )),
        create: x9.create,
        above: t964[0].above,
        arrow: t964.some((e946)=>e946.arrow
        )
    };
}), D9 = class {
    constructor(t965, e947, o242, s396, r417){
        this.view = t965, this.source = e947, this.field = o242, this.setHover = s396, this.hoverTime = r417, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
            x: 0,
            y: 0,
            target: t965.dom,
            time: 0
        }, this.checkHover = this.checkHover.bind(this), t965.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), t965.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
    }
    update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(()=>this.startHover()
        , 20));
    }
    get active() {
        return this.view.state.field(this.field);
    }
    checkHover() {
        if (this.hoverTimeout = -1, this.active) return;
        let t966 = Date.now() - this.lastMove.time;
        t966 < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - t966) : this.startHover();
    }
    startHover() {
        var t967;
        clearTimeout(this.restartTimeout);
        let { lastMove: e948  } = this, o243 = this.view.contentDOM.contains(e948.target) ? this.view.posAtCoords(e948) : null;
        if (o243 == null) return;
        let s397 = this.view.coordsAtPos(o243);
        if (s397 == null || e948.y < s397.top || e948.y > s397.bottom || e948.x < s397.left - this.view.defaultCharacterWidth || e948.x > s397.right + this.view.defaultCharacterWidth) return;
        let r418 = this.view.bidiSpans(this.view.state.doc.lineAt(o243)).find((n298)=>n298.from <= o243 && n298.to >= o243
        ), a134 = r418 && r418.dir == P3.RTL ? -1 : 1, l244 = this.source(this.view, o243, e948.x < s397.left ? -a134 : a134);
        if ((t967 = l244) === null || t967 === void 0 ? void 0 : t967.then) {
            let n299 = this.pending = {
                pos: o243
            };
            l244.then((h134)=>{
                this.pending == n299 && (this.pending = null, h134 && this.view.dispatch({
                    effects: this.setHover.of(h134)
                }));
            }, (h135)=>lt(this.view.state, h135, "hover tooltip")
            );
        } else l244 && this.view.dispatch({
            effects: this.setHover.of(l244)
        });
    }
    mousemove(t968) {
        var e949;
        this.lastMove = {
            x: t968.clientX,
            y: t968.clientY,
            target: t968.target,
            time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let o244 = this.active;
        if (o244 && !W8(this.lastMove.target) || this.pending) {
            let { pos: s398  } = o244 || this.pending, r419 = (e949 = o244 == null ? void 0 : o244.end) !== null && e949 !== void 0 ? e949 : s398;
            (s398 == r419 ? this.view.posAtCoords(this.lastMove) != s398 : !j7(this.view, s398, r419, t968.clientX, t968.clientY, 6)) && (this.view.dispatch({
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
function W8(i520) {
    for(let t969 = i520; t969; t969 = t969.parentNode)if (t969.nodeType == 1 && t969.classList.contains("cm-tooltip")) return !0;
    return !1;
}
function j7(i521, t970, e950, o245, s399, r420) {
    let a135 = document.createRange(), l245 = i521.domAtPos(t970), n300 = i521.domAtPos(e950);
    a135.setEnd(n300.node, n300.offset), a135.setStart(l245.node, l245.offset);
    let h136 = a135.getClientRects();
    a135.detach();
    for(let p36 = 0; p36 < h136.length; p36++){
        let d77 = h136[p36];
        if (Math.max(d77.top - s399, s399 - d77.bottom, d77.left - o245, o245 - d77.right) <= r420) return !0;
    }
    return !1;
}
function G4(i522, t971 = {}) {
    let e951 = v.define(), o246 = B1.define({
        create () {
            return null;
        },
        update (r421, a136) {
            if (r421 && t971.hideOnChange && (a136.docChanged || a136.selection)) return null;
            for (let l246 of a136.effects){
                if (l246.is(e951)) return l246.value;
                if (l246.is(R5)) return null;
            }
            if (r421 && a136.docChanged) {
                let l247 = a136.changes.mapPos(r421.pos, -1, D1.TrackDel);
                if (l247 == null) return null;
                let n301 = Object.assign(Object.create(null), r421);
                return n301.pos = l247, r421.end != null && (n301.end = a136.changes.mapPos(r421.end)), n301;
            }
            return r421;
        },
        provide: (r422)=>w10.from(r422)
    }), s400 = t971.hoverTime || 600;
    return [
        o246,
        z2.define((r423)=>new D9(r423, i522, o246, e951, s400)
        ),
        N7
    ];
}
function J7(i523, t972) {
    let e952 = i523.plugin(H6);
    if (!e952) return null;
    let o247 = e952.manager.tooltips.indexOf(t972);
    return o247 < 0 ? null : e952.manager.tooltipViews[o247];
}
var R5 = v.define(), Q7 = R5.of(null);
var _7 = class {
    constructor(e953, t973, i524){
        this.state = e953, this.pos = t973, this.explicit = i524, this.abortListeners = [];
    }
    tokenBefore(e954) {
        let t974 = v3(this.state).resolveInner(this.pos, -1);
        for(; t974 && e954.indexOf(t974.name) < 0;)t974 = t974.parent;
        return t974 ? {
            from: t974.from,
            to: this.pos,
            text: this.state.sliceDoc(t974.from, this.pos),
            type: t974.type
        } : null;
    }
    matchBefore(e955) {
        let t975 = this.state.doc.lineAt(this.pos), i525 = Math.max(t975.from, this.pos - 250), s401 = t975.text.slice(i525 - t975.from, this.pos - t975.from), o248 = s401.search(te5(e955, !1));
        return o248 < 0 ? null : {
            from: i525 + o248,
            to: this.pos,
            text: s401.slice(o248)
        };
    }
    get aborted() {
        return this.abortListeners == null;
    }
    addEventListener(e956, t976) {
        e956 == "abort" && this.abortListeners && this.abortListeners.push(t976);
    }
};
function ee5(n302) {
    let e957 = Object.keys(n302).join(""), t977 = /\w/.test(e957);
    return t977 && (e957 = e957.replace(/\w/g, "")), `[${t977 ? "\\w" : ""}${e957.replace(/[^\w\s]/g, "\\$&")}]`;
}
function De3(n303) {
    let e958 = Object.create(null), t978 = Object.create(null);
    for (let { label: s402  } of n303){
        e958[s402[0]] = !0;
        for(let o249 = 1; o249 < s402.length; o249++)t978[s402[o249]] = !0;
    }
    let i526 = ee5(e958) + ee5(t978) + "*$";
    return [
        new RegExp("^" + i526),
        new RegExp(i526)
    ];
}
function Fe2(n304) {
    let e959 = n304.map((s403)=>typeof s403 == "string" ? {
            label: s403
        } : s403
    ), [t979, i527] = e959.every((s404)=>/^\w+$/.test(s404.label)
    ) ? [
        /\w*$/,
        /\w+$/
    ] : De3(e959);
    return (s405)=>{
        let o250 = s405.matchBefore(i527);
        return o250 || s405.explicit ? {
            from: o250 ? o250.from : s405.pos,
            options: e959,
            span: t979
        } : null;
    };
}
function xt2(n305, e960) {
    return (t980)=>{
        for(let i528 = v3(t980.state).resolveInner(t980.pos, -1); i528; i528 = i528.parent)if (n305.indexOf(i528.name) > -1) return null;
        return e960(t980);
    };
}
var H7 = class {
    constructor(e961, t981, i529){
        this.completion = e961, this.source = t981, this.match = i529;
    }
};
function I8(n306) {
    return n306.selection.main.head;
}
function te5(n307, e962) {
    var t982;
    let { source: i530  } = n307, s406 = e962 && i530[0] != "^", o251 = i530[i530.length - 1] != "$";
    return !s406 && !o251 ? n307 : new RegExp(`${s406 ? "^" : ""}(?:${i530})${o251 ? "$" : ""}`, (t982 = n307.flags) !== null && t982 !== void 0 ? t982 : n307.ignoreCase ? "i" : "");
}
var Ue2 = z1.define();
function ie5(n308, e963) {
    let t983 = e963.completion.apply || e963.completion.label, i531 = e963.source;
    typeof t983 == "string" ? n308.dispatch({
        changes: {
            from: i531.from,
            to: i531.to,
            insert: t983
        },
        selection: {
            anchor: i531.from + t983.length
        },
        userEvent: "input.complete",
        annotations: Ue2.of(e963.completion)
    }) : t983(n308, e963.completion, i531.from, i531.to);
}
var ne5 = new WeakMap;
function $e2(n309) {
    if (!Array.isArray(n309)) return n309;
    let e964 = ne5.get(n309);
    return e964 || ne5.set(n309, e964 = Fe2(n309)), e964;
}
var se4 = class {
    constructor(e965){
        this.pattern = e965, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [];
        for(let t984 = 0; t984 < e965.length;){
            let i532 = b(e965, t984), s407 = q(i532);
            this.chars.push(i532);
            let o252 = e965.slice(t984, t984 + s407), l248 = o252.toUpperCase();
            this.folded.push(b(l248 == o252 ? o252.toLowerCase() : l248, 0)), t984 += s407;
        }
        this.astral = e965.length != this.chars.length;
    }
    match(e966) {
        if (this.pattern.length == 0) return [
            0
        ];
        if (e966.length < this.pattern.length) return null;
        let { chars: t985 , folded: i533 , any: s408 , precise: o253 , byWord: l249  } = this;
        if (t985.length == 1) {
            let h137 = b(e966, 0);
            return h137 == t985[0] ? [
                0,
                0,
                q(h137)
            ] : h137 == i533[0] ? [
                -200,
                0,
                q(h137)
            ] : null;
        }
        let r424 = e966.indexOf(this.pattern);
        if (r424 == 0) return [
            0,
            0,
            this.pattern.length
        ];
        let a137 = t985.length, c120 = 0;
        if (r424 < 0) {
            for(let h138 = 0, B17 = Math.min(e966.length, 200); h138 < B17 && c120 < a137;){
                let x25 = b(e966, h138);
                (x25 == t985[c120] || x25 == i533[c120]) && (s408[c120++] = h138), h138 += q(x25);
            }
            if (c120 < a137) return null;
        }
        let f100 = 0, p37 = 0, F15 = !1, g45 = 0, U11 = -1, $15 = -1, Ie2 = /[a-z]/.test(e966), j17 = !0;
        for(let h139 = 0, B18 = Math.min(e966.length, 200), x26 = 0; h139 < B18 && p37 < a137;){
            let d78 = b(e966, h139);
            r424 < 0 && (f100 < a137 && d78 == t985[f100] && (o253[f100++] = h139), g45 < a137 && (d78 == t985[g45] || d78 == i533[g45] ? (g45 == 0 && (U11 = h139), $15 = h139 + 1, g45++) : g45 = 0));
            let L17, N17 = d78 < 255 ? d78 >= 48 && d78 <= 57 || d78 >= 97 && d78 <= 122 ? 2 : d78 >= 65 && d78 <= 90 ? 1 : 0 : (L17 = z(d78)) != L17.toLowerCase() ? 1 : L17 != L17.toUpperCase() ? 2 : 0;
            (!h139 || N17 == 1 && Ie2 || x26 == 0 && N17 != 0) && (t985[p37] == d78 || i533[p37] == d78 && (F15 = !0) ? l249[p37++] = h139 : l249.length && (j17 = !1)), x26 = N17, h139 += q(d78);
        }
        return p37 == a137 && l249[0] == 0 && j17 ? this.result(-100 + (F15 ? -200 : 0), l249, e966) : g45 == a137 && U11 == 0 ? [
            -200 - e966.length,
            0,
            $15
        ] : r424 > -1 ? [
            -700 - e966.length,
            r424,
            r424 + this.pattern.length
        ] : g45 == a137 ? [
            -200 + -700 - e966.length,
            U11,
            $15
        ] : p37 == a137 ? this.result(-100 + (F15 ? -200 : 0) + -700 + (j17 ? 0 : -1100), l249, e966) : t985.length == 2 ? null : this.result((s408[0] ? -700 : 0) + -200 + -1100, s408, e966);
    }
    result(e967, t986, i534) {
        let s409 = [
            e967 - i534.length
        ], o254 = 1;
        for (let l250 of t986){
            let r425 = l250 + (this.astral ? q(b(i534, l250)) : 1);
            o254 > 1 && s409[o254 - 1] == l250 ? s409[o254 - 1] = r425 : (s409[o254++] = l250, s409[o254++] = r425);
        }
        return s409;
    }
}, w11 = O1.define({
    combine (n310) {
        return be(n310, {
            activateOnTyping: !0,
            override: null,
            maxRenderedOptions: 100,
            defaultKeymap: !0,
            optionClass: ()=>""
            ,
            aboveCursor: !1,
            icons: !0,
            addToOptions: []
        }, {
            defaultKeymap: (e968, t987)=>e968 && t987
            ,
            icons: (e969, t988)=>e969 && t988
            ,
            optionClass: (e970, t989)=>(i535)=>je2(e970(i535), t989(i535))
            ,
            addToOptions: (e971, t990)=>e971.concat(t990)
        });
    }
});
function je2(n311, e972) {
    return n311 ? e972 ? n311 + " " + e972 : n311 : e972;
}
function Be2(n312) {
    let e973 = n312.addToOptions.slice();
    return n312.icons && e973.push({
        render (t991) {
            let i536 = document.createElement("div");
            return i536.classList.add("cm-completionIcon"), t991.type && i536.classList.add(...t991.type.split(/\s+/g).map((s410)=>"cm-completionIcon-" + s410
            )), i536.setAttribute("aria-hidden", "true"), i536;
        },
        position: 20
    }), e973.push({
        render (t992, i, s411) {
            let o255 = document.createElement("span");
            o255.className = "cm-completionLabel";
            let { label: l251  } = t992, r426 = 0;
            for(let a138 = 1; a138 < s411.length;){
                let c121 = s411[a138++], f101 = s411[a138++];
                c121 > r426 && o255.appendChild(document.createTextNode(l251.slice(r426, c121)));
                let p38 = o255.appendChild(document.createElement("span"));
                p38.appendChild(document.createTextNode(l251.slice(c121, f101))), p38.className = "cm-completionMatchedText", r426 = f101;
            }
            return r426 < l251.length && o255.appendChild(document.createTextNode(l251.slice(r426))), o255;
        },
        position: 50
    }, {
        render (t993) {
            if (!t993.detail) return null;
            let i537 = document.createElement("span");
            return i537.className = "cm-completionDetail", i537.textContent = t993.detail, i537;
        },
        position: 80
    }), e973.sort((t994, i538)=>t994.position - i538.position
    ).map((t995)=>t995.render
    );
}
function Ne3(n313, e974) {
    let t996 = document.createElement("div");
    t996.className = "cm-tooltip cm-completionInfo";
    let { info: i539  } = n313.completion;
    if (typeof i539 == "string") t996.textContent = i539;
    else {
        let s412 = i539(n313.completion);
        s412.then ? s412.then((o256)=>t996.appendChild(o256)
        , (o257)=>lt(e974.state, o257, "completion info")
        ) : t996.appendChild(s412);
    }
    return t996;
}
function oe4(n314, e975, t997) {
    if (n314 <= t997) return {
        from: 0,
        to: n314
    };
    if (e975 <= n314 >> 1) {
        let s413 = Math.floor(e975 / t997);
        return {
            from: s413 * t997,
            to: (s413 + 1) * t997
        };
    }
    let i540 = Math.floor((n314 - e975) / t997);
    return {
        from: n314 - (i540 + 1) * t997,
        to: n314 - i540 * t997
    };
}
var le3 = class {
    constructor(e976, t998){
        this.view = e976, this.stateField = t998, this.info = null, this.placeInfo = {
            read: ()=>this.measureInfo()
            ,
            write: (r427)=>this.positionInfo(r427)
            ,
            key: this
        };
        let i541 = e976.state.field(t998), { options: s414 , selected: o258  } = i541.open, l252 = e976.state.facet(w11);
        this.optionContent = Be2(l252), this.optionClass = l252.optionClass, this.range = oe4(s414.length, o258, l252.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.dom.addEventListener("mousedown", (r428)=>{
            for(let a139 = r428.target, c122; a139 && a139 != this.dom; a139 = a139.parentNode)if (a139.nodeName == "LI" && (c122 = /-(\d+)$/.exec(a139.id)) && +c122[1] < s414.length) {
                ie5(e976, s414[+c122[1]]), r428.preventDefault();
                return;
            }
        }), this.list = this.dom.appendChild(this.createListBox(s414, i541.id, this.range)), this.list.addEventListener("scroll", ()=>{
            this.info && this.view.requestMeasure(this.placeInfo);
        });
    }
    mount() {
        this.updateSel();
    }
    update(e977) {
        e977.state.field(this.stateField) != e977.startState.field(this.stateField) && this.updateSel();
    }
    positioned() {
        this.info && this.view.requestMeasure(this.placeInfo);
    }
    updateSel() {
        let e978 = this.view.state.field(this.stateField), t999 = e978.open;
        if ((t999.selected < this.range.from || t999.selected >= this.range.to) && (this.range = oe4(t999.options.length, t999.selected, this.view.state.facet(w11).maxRenderedOptions), this.list.remove(), this.list = this.dom.appendChild(this.createListBox(t999.options, e978.id, this.range)), this.list.addEventListener("scroll", ()=>{
            this.info && this.view.requestMeasure(this.placeInfo);
        })), this.updateSelectedOption(t999.selected)) {
            this.info && (this.info.remove(), this.info = null);
            let i542 = t999.options[t999.selected];
            i542.completion.info && (this.info = this.dom.appendChild(Ne3(i542, this.view)), this.view.requestMeasure(this.placeInfo));
        }
    }
    updateSelectedOption(e979) {
        let t1000 = null;
        for(let i543 = this.list.firstChild, s415 = this.range.from; i543; i543 = i543.nextSibling, s415++)s415 == e979 ? i543.hasAttribute("aria-selected") || (i543.setAttribute("aria-selected", "true"), t1000 = i543) : i543.hasAttribute("aria-selected") && i543.removeAttribute("aria-selected");
        return t1000 && qe2(this.list, t1000), t1000;
    }
    measureInfo() {
        let e980 = this.dom.querySelector("[aria-selected]");
        if (!e980 || !this.info) return null;
        let t1001 = this.dom.getBoundingClientRect(), i544 = this.info.getBoundingClientRect(), s416 = e980.getBoundingClientRect();
        if (s416.top > Math.min(innerHeight, t1001.bottom) - 10 || s416.bottom < Math.max(0, t1001.top) + 10) return null;
        let o259 = Math.max(0, Math.min(s416.top, innerHeight - i544.height)) - t1001.top, l253 = this.view.textDirection == P3.RTL, r429 = t1001.left, a140 = innerWidth - t1001.right;
        return l253 && r429 < Math.min(i544.width, a140) ? l253 = !1 : !l253 && a140 < Math.min(i544.width, r429) && (l253 = !0), {
            top: o259,
            left: l253
        };
    }
    positionInfo(e981) {
        this.info && (this.info.style.top = (e981 ? e981.top : -1000000) + "px", e981 && (this.info.classList.toggle("cm-completionInfo-left", e981.left), this.info.classList.toggle("cm-completionInfo-right", !e981.left)));
    }
    createListBox(e982, t1002, i545) {
        let s417 = document.createElement("ul");
        s417.id = t1002, s417.setAttribute("role", "listbox");
        for(let o260 = i545.from; o260 < i545.to; o260++){
            let { completion: l254 , match: r430  } = e982[o260], a141 = s417.appendChild(document.createElement("li"));
            a141.id = t1002 + "-" + o260, a141.setAttribute("role", "option");
            let c123 = this.optionClass(l254);
            c123 && (a141.className = c123);
            for (let f102 of this.optionContent){
                let p39 = f102(l254, this.view.state, r430);
                p39 && a141.appendChild(p39);
            }
        }
        return i545.from && s417.classList.add("cm-completionListIncompleteTop"), i545.to < e982.length && s417.classList.add("cm-completionListIncompleteBottom"), s417;
    }
};
function We2(n315) {
    return (e983)=>new le3(e983, n315)
    ;
}
function qe2(n316, e984) {
    let t1003 = n316.getBoundingClientRect(), i546 = e984.getBoundingClientRect();
    i546.top < t1003.top ? n316.scrollTop -= t1003.top - i546.top : i546.bottom > t1003.bottom && (n316.scrollTop += i546.bottom - t1003.bottom);
}
var He2 = 300;
function re5(n317) {
    return (n317.boost || 0) * 100 + (n317.apply ? 10 : 0) + (n317.info ? 5 : 0) + (n317.type ? 1 : 0);
}
function Ke2(n318, e985) {
    let t1004 = [], i547 = 0;
    for (let l255 of n318)if (l255.hasResult()) if (l255.result.filter === !1) for (let r431 of l255.result.options)t1004.push(new H7(r431, l255, [
        1000000000 - i547++
    ]));
    else {
        let r432 = new se4(e985.sliceDoc(l255.from, l255.to)), a142;
        for (let c124 of l255.result.options)(a142 = r432.match(c124.label)) && (c124.boost != null && (a142[0] += c124.boost), t1004.push(new H7(c124, l255, a142)));
    }
    t1004.sort(ce3);
    let s418 = [], o261 = null;
    for (let l1 of t1004.sort(ce3)){
        if (s418.length == He2) break;
        !o261 || o261.label != l1.completion.label || o261.detail != l1.completion.detail || o261.type != l1.completion.type || o261.apply != l1.completion.apply ? s418.push(l1) : re5(l1.completion) > re5(o261) && (s418[s418.length - 1] = l1), o261 = l1.completion;
    }
    return s418;
}
var E10 = class {
    constructor(e986, t1005, i548, s419, o262){
        this.options = e986, this.attrs = t1005, this.tooltip = i548, this.timestamp = s419, this.selected = o262;
    }
    setSelected(e987, t1006) {
        return e987 == this.selected || e987 >= this.options.length ? this : new E10(this.options, ae4(t1006, e987), this.tooltip, this.timestamp, e987);
    }
    static build(e988, t1007, i549, s420, o263) {
        let l256 = Ke2(e988, t1007);
        if (!l256.length) return null;
        let r433 = 0;
        if (s420 && s420.selected) {
            let a143 = s420.options[s420.selected].completion;
            for(let c125 = 0; c125 < l256.length && !r433; c125++)l256[c125].completion == a143 && (r433 = c125);
        }
        return new E10(l256, ae4(i549, r433), {
            pos: e988.reduce((a144, c126)=>c126.hasResult() ? Math.min(a144, c126.from) : a144
            , 100000000),
            create: We2(m6),
            above: o263.aboveCursor
        }, s420 ? s420.timestamp : Date.now(), r433);
    }
    map(e989) {
        return new E10(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), {
            pos: e989.mapPos(this.tooltip.pos)
        }), this.timestamp, this.selected);
    }
}, S11 = class {
    constructor(e990, t1008, i550){
        this.active = e990, this.id = t1008, this.open = i550;
    }
    static start() {
        return new S11(Ve2, "cm-ac-" + Math.floor(Math.random() * 2000000).toString(36), null);
    }
    update(e991) {
        let { state: t1009  } = e991, i551 = t1009.facet(w11), o264 = (i551.override || t1009.languageDataAt("autocomplete", I8(t1009)).map($e2)).map((r434)=>(this.active.find((c127)=>c127.source == r434
            ) || new u2(r434, this.active.some((c128)=>c128.state != 0
            ) ? 1 : 0)).update(e991, i551)
        );
        o264.length == this.active.length && o264.every((r435, a145)=>r435 == this.active[a145]
        ) && (o264 = this.active);
        let l257 = e991.selection || o264.some((r436)=>r436.hasResult() && e991.changes.touchesRange(r436.from, r436.to)
        ) || !ze1(o264, this.active) ? E10.build(o264, t1009, this.id, this.open, i551) : this.open && e991.docChanged ? this.open.map(e991.changes) : this.open;
        !l257 && o264.every((r437)=>r437.state != 1
        ) && o264.some((r438)=>r438.hasResult()
        ) && (o264 = o264.map((r439)=>r439.hasResult() ? new u2(r439.source, 0) : r439
        ));
        for (let r1101 of e991.effects)r1101.is(pe5) && (l257 = l257 && l257.setSelected(r1101.value, this.id));
        return o264 == this.active && l257 == this.open ? this : new S11(o264, this.id, l257);
    }
    get tooltip() {
        return this.open ? this.open.tooltip : null;
    }
    get attrs() {
        return this.open ? this.open.attrs : Qe2;
    }
};
function ze1(n319, e992) {
    if (n319 == e992) return !0;
    for(let t1010 = 0, i552 = 0;;){
        for(; t1010 < n319.length && !n319[t1010].hasResult;)t1010++;
        for(; i552 < e992.length && !e992[i552].hasResult;)i552++;
        let s421 = t1010 == n319.length, o265 = i552 == e992.length;
        if (s421 || o265) return s421 == o265;
        if (n319[t1010++].result != e992[i552++].result) return !1;
    }
}
var Qe2 = {
    "aria-autocomplete": "list",
    "aria-expanded": "false"
};
function ae4(n320, e993) {
    return {
        "aria-autocomplete": "list",
        "aria-expanded": "true",
        "aria-activedescendant": n320 + "-" + e993,
        "aria-controls": n320
    };
}
var Ve2 = [];
function ce3(n321, e994) {
    let t1011 = e994.match[0] - n321.match[0];
    return t1011 || n321.completion.label.localeCompare(e994.completion.label);
}
function K6(n322) {
    return n322.isUserEvent("input.type") ? "input" : n322.isUserEvent("delete.backward") ? "delete" : null;
}
var u2 = class {
    constructor(e995, t1012, i553 = -1){
        this.source = e995, this.state = t1012, this.explicitPos = i553;
    }
    hasResult() {
        return !1;
    }
    update(e996, t1013) {
        let i554 = K6(e996), s422 = this;
        i554 ? s422 = s422.handleUserEvent(e996, i554, t1013) : e996.docChanged ? s422 = s422.handleChange(e996) : e996.selection && s422.state != 0 && (s422 = new u2(s422.source, 0));
        for (let o266 of e996.effects)if (o266.is(z9)) s422 = new u2(s422.source, 1, o266.value ? I8(e996.state) : -1);
        else if (o266.is(Q8)) s422 = new u2(s422.source, 0);
        else if (o266.is(fe4)) for (let l258 of o266.value)l258.source == s422.source && (s422 = l258);
        return s422;
    }
    handleUserEvent(e997, t1014, i555) {
        return t1014 == "delete" || !i555.activateOnTyping ? this.map(e997.changes) : new u2(this.source, 1);
    }
    handleChange(e998) {
        return e998.changes.touchesRange(I8(e998.startState)) ? new u2(this.source, 0) : this.map(e998.changes);
    }
    map(e999) {
        return e999.empty || this.explicitPos < 0 ? this : new u2(this.source, this.state, e999.mapPos(this.explicitPos));
    }
}, T11 = class extends u2 {
    constructor(e1000, t1015, i556, s423, o267, l259){
        super(e1000, 2, t1015);
        this.result = i556, this.from = s423, this.to = o267, this.span = l259;
    }
    hasResult() {
        return !0;
    }
    handleUserEvent(e1001, t1016, i557) {
        let s424 = e1001.changes.mapPos(this.from), o268 = e1001.changes.mapPos(this.to, 1), l260 = I8(e1001.state);
        if ((this.explicitPos > -1 ? l260 < s424 : l260 <= s424) || l260 > o268) return new u2(this.source, t1016 == "input" && i557.activateOnTyping ? 1 : 0);
        let r440 = this.explicitPos < 0 ? -1 : e1001.changes.mapPos(this.explicitPos);
        return this.span && (s424 == o268 || this.span.test(e1001.state.sliceDoc(s424, o268))) ? new T11(this.source, r440, this.result, s424, o268, this.span) : new u2(this.source, 1, r440);
    }
    handleChange(e1002) {
        return e1002.changes.touchesRange(this.from, this.to) ? new u2(this.source, 0) : this.map(e1002.changes);
    }
    map(e1003) {
        return e1003.empty ? this : new T11(this.source, this.explicitPos < 0 ? -1 : e1003.mapPos(this.explicitPos), this.result, e1003.mapPos(this.from), e1003.mapPos(this.to, 1), this.span);
    }
}, z9 = v.define(), Q8 = v.define(), fe4 = v.define({
    map (n323, e1004) {
        return n323.map((t1017)=>t1017.map(e1004)
        );
    }
}), pe5 = v.define(), m6 = B1.define({
    create () {
        return S11.start();
    },
    update (n324, e1005) {
        return n324.update(e1005);
    },
    provide: (n325)=>[
            k4.from(n325, (e1006)=>e1006.tooltip
            ),
            D2.contentAttributes.from(n325, (e1007)=>e1007.attrs
            )
        ]
}), he4 = 75;
function M10(n326, e1008 = "option") {
    return (t1018)=>{
        let i558 = t1018.state.field(m6, !1);
        if (!i558 || !i558.open || Date.now() - i558.open.timestamp < he4) return !1;
        let s425 = 1, o269;
        e1008 == "page" && (o269 = J7(t1018, i558.open.tooltip)) && (s425 = Math.max(2, Math.floor(o269.dom.offsetHeight / o269.dom.querySelector("li").offsetHeight) - 1));
        let l261 = i558.open.selected + s425 * (n326 ? 1 : -1), { length: r441  } = i558.open.options;
        return l261 < 0 ? l261 = e1008 == "page" ? 0 : r441 - 1 : l261 >= r441 && (l261 = e1008 == "page" ? r441 - 1 : 0), t1018.dispatch({
            effects: pe5.of(l261)
        }), !0;
    };
}
var Xe2 = (n327)=>{
    let e1009 = n327.state.field(m6, !1);
    return n327.state.readOnly || !e1009 || !e1009.open || Date.now() - e1009.open.timestamp < he4 ? !1 : (ie5(n327, e1009.open.options[e1009.open.selected]), !0);
}, Ye2 = (n328)=>n328.state.field(m6, !1) ? (n328.dispatch({
        effects: z9.of(!0)
    }), !0) : !1
, Ge2 = (n329)=>{
    let e1010 = n329.state.field(m6, !1);
    return !e1010 || !e1010.active.some((t1019)=>t1019.state != 0
    ) ? !1 : (n329.dispatch({
        effects: Q8.of(null)
    }), !0);
}, ue4 = class {
    constructor(e1011, t1020){
        this.active = e1011, this.context = t1020, this.time = Date.now(), this.updates = [], this.done = void 0;
    }
}, de5 = 50, Je2 = 50, Ze2 = 1000, _e3 = z2.fromClass(class {
    constructor(n330){
        this.view = n330, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.composing = 0;
        for (let e1012 of n330.state.field(m6).active)e1012.state == 1 && this.startQuery(e1012);
    }
    update(n331) {
        let e1013 = n331.state.field(m6);
        if (!n331.selectionSet && !n331.docChanged && n331.startState.field(m6) == e1013) return;
        let t1021 = n331.transactions.some((i559)=>(i559.selection || i559.docChanged) && !K6(i559)
        );
        for(let i2 = 0; i2 < this.running.length; i2++){
            let s426 = this.running[i2];
            if (t1021 || s426.updates.length + n331.transactions.length > Je2 && s426.time - Date.now() > Ze2) {
                for (let o270 of s426.context.abortListeners)try {
                    o270();
                } catch (l262) {
                    lt(this.view.state, l262);
                }
                s426.context.abortListeners = null, this.running.splice(i2--, 1);
            } else s426.updates.push(...n331.transactions);
        }
        if (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), this.debounceUpdate = e1013.active.some((i560)=>i560.state == 1 && !this.running.some((s427)=>s427.active.source == i560.source
            )
        ) ? setTimeout(()=>this.startUpdate()
        , de5) : -1, this.composing != 0) for (let i1 of n331.transactions)K6(i1) == "input" ? this.composing = 2 : this.composing == 2 && i1.selection && (this.composing = 3);
    }
    startUpdate() {
        this.debounceUpdate = -1;
        let { state: n332  } = this.view, e1014 = n332.field(m6);
        for (let t1022 of e1014.active)t1022.state == 1 && !this.running.some((i561)=>i561.active.source == t1022.source
        ) && this.startQuery(t1022);
    }
    startQuery(n333) {
        let { state: e1015  } = this.view, t1023 = I8(e1015), i562 = new _7(e1015, t1023, n333.explicitPos == t1023), s428 = new ue4(n333, i562);
        this.running.push(s428), Promise.resolve(n333.source(i562)).then((o271)=>{
            s428.context.aborted || (s428.done = o271 || null, this.scheduleAccept());
        }, (o272)=>{
            this.view.dispatch({
                effects: Q8.of(null)
            }), lt(this.view.state, o272);
        });
    }
    scheduleAccept() {
        this.running.every((n334)=>n334.done !== void 0
        ) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(()=>this.accept()
        , de5));
    }
    accept() {
        var n335;
        this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
        let e1016 = [], t1024 = this.view.state.facet(w11);
        for(let i563 = 0; i563 < this.running.length; i563++){
            let s429 = this.running[i563];
            if (s429.done === void 0) continue;
            if (this.running.splice(i563--, 1), s429.done) {
                let l263 = new T11(s429.active.source, s429.active.explicitPos, s429.done, s429.done.from, (n335 = s429.done.to) !== null && n335 !== void 0 ? n335 : I8(s429.updates.length ? s429.updates[0].startState : this.view.state), s429.done.span && s429.done.filter !== !1 ? te5(s429.done.span, !0) : null);
                for (let r442 of s429.updates)l263 = l263.update(r442, t1024);
                if (l263.hasResult()) {
                    e1016.push(l263);
                    continue;
                }
            }
            let o273 = this.view.state.field(m6).active.find((l264)=>l264.source == s429.active.source
            );
            if (o273 && o273.state == 1) if (s429.done == null) {
                let l265 = new u2(s429.active.source, 0);
                for (let r443 of s429.updates)l265 = l265.update(r443, t1024);
                l265.state != 1 && e1016.push(l265);
            } else this.startQuery(o273);
        }
        e1016.length && this.view.dispatch({
            effects: fe4.of(e1016)
        });
    }
}, {
    eventHandlers: {
        compositionstart () {
            this.composing = 1;
        },
        compositionend () {
            this.composing == 3 && setTimeout(()=>this.view.dispatch({
                    effects: z9.of(!1)
                })
            , 20), this.composing = 0;
        }
    }
}), me5 = D2.baseTheme({
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
        opacity: 0.5,
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
}), ge5 = class {
    constructor(e1017, t1025, i564, s430){
        this.field = e1017, this.line = t1025, this.from = i564, this.to = s430;
    }
}, O10 = class {
    constructor(e1018, t1026, i565){
        this.field = e1018, this.from = t1026, this.to = i565;
    }
    map(e1019) {
        return new O10(this.field, e1019.mapPos(this.from, -1), e1019.mapPos(this.to, 1));
    }
}, D10 = class {
    constructor(e1020, t1027){
        this.lines = e1020, this.fieldPositions = t1027;
    }
    instantiate(e1021, t1028) {
        let i566 = [], s431 = [
            t1028
        ], o274 = e1021.doc.lineAt(t1028), l266 = /^\s*/.exec(o274.text)[0];
        for (let a146 of this.lines){
            if (i566.length) {
                let c129 = l266, f103 = /^\t*/.exec(a146)[0].length;
                for(let p40 = 0; p40 < f103; p40++)c129 += e1021.facet(E4);
                s431.push(t1028 + c129.length - f103), a146 = c129 + a146.slice(f103);
            }
            i566.push(a146), t1028 += a146.length + 1;
        }
        let r444 = this.fieldPositions.map((a147)=>new O10(a147.field, s431[a147.line] + a147.from, s431[a147.line] + a147.to)
        );
        return {
            text: i566,
            ranges: r444
        };
    }
    static parse(e1022) {
        let t1029 = [], i567 = [], s432 = [], o275;
        for (let l267 of e1022.split(/\r\n?|\n/)){
            for(; o275 = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(l267);){
                let r445 = o275[1] ? +o275[1] : null, a148 = o275[2] || o275[3] || "", c130 = -1;
                for(let f104 = 0; f104 < t1029.length; f104++)(r445 != null ? t1029[f104].seq == r445 : a148 ? t1029[f104].name == a148 : !1) && (c130 = f104);
                if (c130 < 0) {
                    let f105 = 0;
                    for(; f105 < t1029.length && (r445 == null || t1029[f105].seq != null && t1029[f105].seq < r445);)f105++;
                    t1029.splice(f105, 0, {
                        seq: r445,
                        name: a148
                    }), c130 = f105;
                    for (let p41 of s432)p41.field >= c130 && p41.field++;
                }
                s432.push(new ge5(c130, i567.length, o275.index, o275.index + a148.length)), l267 = l267.slice(0, o275.index) + a148 + l267.slice(o275.index + o275[0].length);
            }
            i567.push(l267);
        }
        return new D10(i567, s432);
    }
}, et3 = w4.widget({
    widget: new class extends Q1 {
        toDOM() {
            let n336 = document.createElement("span");
            return n336.className = "cm-snippetFieldPosition", n336;
        }
        ignoreEvent() {
            return !1;
        }
    }
}), tt3 = w4.mark({
    class: "cm-snippetField"
}), b9 = class {
    constructor(e1023, t1030){
        this.ranges = e1023, this.active = t1030, this.deco = w4.set(e1023.map((i568)=>(i568.from == i568.to ? et3 : tt3).range(i568.from, i568.to)
        ));
    }
    map(e1024) {
        return new b9(this.ranges.map((t1031)=>t1031.map(e1024)
        ), this.active);
    }
    selectionInsideField(e1025) {
        return e1025.ranges.every((t1032)=>this.ranges.some((i569)=>i569.field == this.active && i569.from <= t1032.from && i569.to >= t1032.to
            )
        );
    }
}, k5 = v.define({
    map (n337, e1026) {
        return n337 && n337.map(e1026);
    }
}), it3 = v.define(), P9 = B1.define({
    create () {
        return null;
    },
    update (n338, e1027) {
        for (let t1033 of e1027.effects){
            if (t1033.is(k5)) return t1033.value;
            if (t1033.is(it3) && n338) return new b9(n338.ranges, t1033.value);
        }
        return n338 && e1027.docChanged && (n338 = n338.map(e1027.changes)), n338 && e1027.selection && !n338.selectionInsideField(e1027.selection) && (n338 = null), n338;
    },
    provide: (n339)=>D2.decorations.from(n339, (e1028)=>e1028 ? e1028.deco : w4.none
        )
});
function V6(n340, e1029) {
    return p.create(n340.filter((t1034)=>t1034.field == e1029
    ).map((t1035)=>p.range(t1035.from, t1035.to)
    ));
}
function nt2(n341) {
    let e1030 = D10.parse(n341);
    return (t1036, i, s433, o276)=>{
        let { text: l268 , ranges: r446  } = e1030.instantiate(t1036.state, s433), a149 = {
            changes: {
                from: s433,
                to: o276,
                insert: d.of(l268)
            }
        };
        if (r446.length && (a149.selection = V6(r446, 0)), r446.length > 1) {
            let c131 = new b9(r446, 0), f106 = a149.effects = [
                k5.of(c131)
            ];
            t1036.state.field(P9, !1) === void 0 && f106.push(v.appendConfig.of([
                P9,
                at1,
                ct1,
                me5
            ]));
        }
        t1036.dispatch(t1036.state.update(a149));
    };
}
function ve5(n342) {
    return ({ state: e1031 , dispatch: t1037  })=>{
        let i570 = e1031.field(P9, !1);
        if (!i570 || n342 < 0 && i570.active == 0) return !1;
        let s434 = i570.active + n342, o277 = n342 > 0 && !i570.ranges.some((l269)=>l269.field == s434 + n342
        );
        return t1037(e1031.update({
            selection: V6(i570.ranges, s434),
            effects: k5.of(o277 ? null : new b9(i570.ranges, s434))
        })), !0;
    };
}
var st1 = ({ state: n343 , dispatch: e1032  })=>n343.field(P9, !1) ? (e1032(n343.update({
        effects: k5.of(null)
    })), !0) : !1
, ot3 = ve5(1), lt3 = ve5(-1), rt3 = [
    {
        key: "Tab",
        run: ot3,
        shift: lt3
    },
    {
        key: "Escape",
        run: st1
    }
], we5 = O1.define({
    combine (n344) {
        return n344.length ? n344[0] : rt3;
    }
}), at1 = Ie.highest(Fn.compute([
    we5
], (n345)=>n345.facet(we5)
));
function yt1(n346, e1033) {
    return Object.assign(Object.assign({}, e1033), {
        apply: nt2(n346)
    });
}
var ct1 = D2.domEventHandlers({
    mousedown (n347, e1034) {
        let t1038 = e1034.state.field(P9, !1), i571;
        if (!t1038 || (i571 = e1034.posAtCoords({
            x: n347.clientX,
            y: n347.clientY
        })) == null) return !1;
        let s435 = t1038.ranges.find((o278)=>o278.from <= i571 && o278.to >= i571
        );
        return !s435 || s435.field == t1038.active ? !1 : (e1034.dispatch({
            selection: V6(t1038.ranges, s435.field),
            effects: k5.of(t1038.ranges.some((o279)=>o279.field > s435.field
            ) ? new b9(t1038.ranges, s435.field) : null)
        }), !0);
    }
});
Object.create(null);
function It1(n348 = {}) {
    return [
        m6,
        w11.of(n348),
        _e3,
        ut2,
        me5
    ];
}
var ht1 = [
    {
        key: "Ctrl-Space",
        run: Ye2
    },
    {
        key: "Escape",
        run: Ge2
    },
    {
        key: "ArrowDown",
        run: M10(!0)
    },
    {
        key: "ArrowUp",
        run: M10(!1)
    },
    {
        key: "PageDown",
        run: M10(!0, "page")
    },
    {
        key: "PageUp",
        run: M10(!1, "page")
    },
    {
        key: "Enter",
        run: Xe2
    }
], ut2 = Ie.highest(Fn.computeN([
    w11
], (n349)=>n349.facet(w11).defaultKeymap ? [
        ht1
    ] : []
));
var B6 = (c132)=>{
    let m51 = x10(c132.state);
    return m51.line ? D11(c132) : m51.block ? C10(c132) : !1;
};
function u3(c133, m52) {
    return ({ state: i572 , dispatch: n350  })=>{
        let r447 = c133(m52, i572.selection.ranges, i572);
        return r447 ? (n350(i572.update(r447)), !0) : !1;
    };
}
var D11 = u3(y8, 0), v7 = u3(y8, 1), L6 = u3(y8, 2), C10 = u3(k6, 0), T12 = u3(k6, 1), I9 = u3(k6, 2), M11 = [
    {
        key: "Mod-/",
        run: B6
    },
    {
        key: "Alt-A",
        run: C10
    }
];
function x10(c134, m53 = c134.selection.main.head) {
    let i573 = c134.languageDataAt("commentTokens", m53);
    return i573.length ? i573[0] : {};
}
var p8 = 50;
function b10(c135, { open: m54 , close: i574  }, n351, r448) {
    let e1035 = c135.sliceDoc(n351 - p8, n351), t1039 = c135.sliceDoc(r448, r448 + p8), s436 = /\s*$/.exec(e1035)[0].length, f107 = /^\s*/.exec(t1039)[0].length, l270 = e1035.length - s436;
    if (e1035.slice(l270 - m54.length, l270) == m54 && t1039.slice(f107, f107 + i574.length) == i574) return {
        open: {
            pos: n351 - s436,
            margin: s436 && 1
        },
        close: {
            pos: r448 + f107,
            margin: f107 && 1
        }
    };
    let o280, g46;
    r448 - n351 <= 2 * p8 ? o280 = g46 = c135.sliceDoc(n351, r448) : (o280 = c135.sliceDoc(n351, n351 + p8), g46 = c135.sliceDoc(r448 - p8, r448));
    let h140 = /^\s*/.exec(o280)[0].length, d79 = /\s*$/.exec(g46)[0].length, a150 = g46.length - d79 - i574.length;
    return o280.slice(h140, h140 + m54.length) == m54 && g46.slice(a150, a150 + i574.length) == i574 ? {
        open: {
            pos: n351 + h140 + m54.length,
            margin: /\s/.test(o280.charAt(h140 + m54.length)) ? 1 : 0
        },
        close: {
            pos: r448 - d79 - i574.length,
            margin: /\s/.test(g46.charAt(a150 - 1)) ? 1 : 0
        }
    } : null;
}
function k6(c136, m55, i575) {
    let n352 = m55.map((e1036)=>x10(i575, e1036.from).block
    );
    if (!n352.every((e1037)=>e1037
    )) return null;
    let r449 = m55.map((e1038, t1040)=>b10(i575, n352[t1040], e1038.from, e1038.to)
    );
    if (c136 != 2 && !r449.every((e1039)=>e1039
    )) {
        let e1040 = 0;
        return i575.changeByRange((t1041)=>{
            let { open: s437 , close: f108  } = n352[e1040++];
            if (r449[e1040]) return {
                range: t1041
            };
            let l271 = s437.length + 1;
            return {
                changes: [
                    {
                        from: t1041.from,
                        insert: s437 + " "
                    },
                    {
                        from: t1041.to,
                        insert: " " + f108
                    }
                ],
                range: p.range(t1041.anchor + l271, t1041.head + l271)
            };
        });
    } else if (c136 != 1 && r449.some((e1041)=>e1041
    )) {
        let e1042 = [];
        for(let t1042 = 0, s438; t1042 < r449.length; t1042++)if (s438 = r449[t1042]) {
            let f109 = n352[t1042], { open: l272 , close: o281  } = s438;
            e1042.push({
                from: l272.pos - f109.open.length,
                to: l272.pos + l272.margin
            }, {
                from: o281.pos - o281.margin,
                to: o281.pos + f109.close.length
            });
        }
        return {
            changes: e1042
        };
    }
    return null;
}
function y8(c137, m56, i576) {
    let n353 = [], r450 = -1;
    for (let { from: e1 , to: t1043  } of m56){
        let s439 = n353.length, f111 = 1000000000;
        for(let l273 = e1; l273 <= t1043;){
            let o282 = i576.doc.lineAt(l273);
            if (o282.from > r450 && (e1 == t1043 || t1043 > o282.from)) {
                r450 = o282.from;
                let g47 = x10(i576, l273).line;
                if (!g47) continue;
                let h141 = /^\s*/.exec(o282.text)[0].length, d80 = h141 == o282.length, a151 = o282.text.slice(h141, h141 + g47.length) == g47 ? h141 : -1;
                h141 < o282.text.length && h141 < f111 && (f111 = h141), n353.push({
                    line: o282,
                    comment: a151,
                    token: g47,
                    indent: h141,
                    empty: d80,
                    single: !1
                });
            }
            l273 = o282.to + 1;
        }
        if (f111 < 1000000000) for(let l1 = s439; l1 < n353.length; l1++)n353[l1].indent < n353[l1].line.text.length && (n353[l1].indent = f111);
        n353.length == s439 + 1 && (n353[s439].single = !0);
    }
    if (c137 != 2 && n353.some((e1043)=>e1043.comment < 0 && (!e1043.empty || e1043.single)
    )) {
        let e1044 = [];
        for (let { line: s440 , token: f112 , indent: l274 , empty: o283 , single: g48  } of n353)(g48 || !o283) && e1044.push({
            from: s440.from + l274,
            insert: f112 + " "
        });
        let t1044 = i576.changes(e1044);
        return {
            changes: t1044,
            selection: i576.selection.map(t1044, 1)
        };
    } else if (c137 != 1 && n353.some((e1045)=>e1045.comment >= 0
    )) {
        let e1046 = [];
        for (let { line: t1045 , comment: s441 , token: f113  } of n353)if (s441 >= 0) {
            let l275 = t1045.from + s441, o284 = l275 + f113.length;
            t1045.text[o284 - t1045.from] == " " && o284++, e1046.push({
                from: l275,
                to: o284
            });
        }
        return {
            changes: e1046
        };
    }
    return null;
}
var s3 = 2000;
function M12(e1047, l276, t1046) {
    let n354 = Math.min(l276.line, t1046.line), o285 = Math.max(l276.line, t1046.line), f114 = [];
    if (l276.off > s3 || t1046.off > s3 || l276.col < 0 || t1046.col < 0) {
        let i577 = Math.min(l276.off, t1046.off), a152 = Math.max(l276.off, t1046.off);
        for(let r451 = n354; r451 <= o285; r451++){
            let c138 = e1047.doc.line(r451);
            c138.length <= a152 && f114.push(p.range(c138.from + i577, c138.to + a152));
        }
    } else {
        let i578 = Math.min(l276.col, t1046.col), a153 = Math.max(l276.col, t1046.col);
        for(let r452 = n354; r452 <= o285; r452++){
            let c139 = e1047.doc.line(r452), m57 = O(c139.text, i578, e1047.tabSize, !0);
            if (m57 > -1) {
                let g49 = O(c139.text, a153, e1047.tabSize);
                f114.push(p.range(c139.from + m57, c139.from + g49));
            }
        }
    }
    return f114;
}
function C11(e1048, l277) {
    let t1047 = e1048.coordsAtPos(e1048.viewport.from);
    return t1047 ? Math.round(Math.abs((t1047.left - l277) / e1048.defaultCharacterWidth)) : -1;
}
function d7(e1049, l278) {
    let t1048 = e1049.posAtCoords({
        x: l278.clientX,
        y: l278.clientY
    }, !1), n355 = e1049.state.doc.lineAt(t1048), o286 = t1048 - n355.from, f115 = o286 > s3 ? -1 : o286 == n355.length ? C11(e1049, l278.clientX) : J(n355.text, e1049.state.tabSize, t1048 - n355.from);
    return {
        line: n355.number,
        col: f115,
        off: o286
    };
}
function p9(e1050, l279) {
    let t1049 = d7(e1050, l279), n356 = e1050.state.selection;
    return t1049 ? {
        update (o287) {
            if (o287.docChanged) {
                let f116 = o287.changes.mapPos(o287.startState.doc.line(t1049.line).from), i579 = o287.state.doc.lineAt(f116);
                t1049 = {
                    line: i579.number,
                    col: t1049.col,
                    off: Math.min(t1049.off, i579.length)
                }, n356 = n356.map(o287.changes);
            }
        },
        get (o288, f, i580) {
            let a154 = d7(e1050, o288);
            if (!a154) return n356;
            let r453 = M12(e1050.state, t1049, a154);
            return r453.length ? i580 ? p.create(r453.concat(n356.ranges)) : p.create(r453) : n356;
        }
    } : null;
}
function L7(e1051) {
    let l280 = (e1051 == null ? void 0 : e1051.eventFilter) || ((t1050)=>t1050.altKey && t1050.button == 0
    );
    return D2.mouseSelectionStyle.of((t1051, n357)=>l280(n357) ? p9(t1051, n357) : null
    );
}
var st2 = 0, f5 = class {
    constructor(t1052, a155, l281){
        this.set = t1052, this.base = a155, this.modified = l281, this.id = st2++;
    }
    static define(t1053) {
        if (t1053 == null ? void 0 : t1053.base) throw new Error("Can not derive from a modified tag");
        let a156 = new f5([], null, []);
        if (a156.set.push(a156), t1053) for (let l282 of t1053.set)a156.set.push(l282);
        return a156;
    }
    static defineModifier() {
        let t1054 = new R6;
        return (a157)=>a157.modified.indexOf(t1054) > -1 ? a157 : R6.get(a157.base || a157, a157.modified.concat(t1054).sort((l283, n358)=>l283.id - n358.id
            ))
        ;
    }
}, ot4 = 0, R6 = class {
    constructor(){
        this.instances = [], this.id = ot4++;
    }
    static get(t1055, a158) {
        if (!a158.length) return t1055;
        let l284 = a158[0].instances.find((o289)=>o289.base == t1055 && ct2(a158, o289.modified)
        );
        if (l284) return l284;
        let n359 = [], s442 = new f5(n359, t1055, a158);
        for (let o2 of a158)o2.instances.push(s442);
        let c140 = L8(a158);
        for (let o1 of t1055.set)for (let h142 of c140)n359.push(R6.get(o1, h142));
        return s442;
    }
};
function ct2(r454, t1056) {
    return r454.length == t1056.length && r454.every((a159, l285)=>a159 == t1056[l285]
    );
}
function L8(r455) {
    let t1057 = [
        r455
    ];
    for(let a160 = 0; a160 < r455.length; a160++)for (let l286 of L8(r455.slice(0, a160).concat(r455.slice(a160 + 1))))t1057.push(l286);
    return t1057;
}
function yt2(r456) {
    let t1058 = Object.create(null);
    for(let a161 in r456){
        let l287 = r456[a161];
        Array.isArray(l287) || (l287 = [
            l287
        ]);
        for (let n360 of a161.split(" "))if (n360) {
            let s443 = [], c141 = 2, o290 = n360;
            for(let m58 = 0;;){
                if (o290 == "..." && m58 > 0 && m58 + 3 == n360.length) {
                    c141 = 1;
                    break;
                }
                let b33 = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(o290);
                if (!b33) throw new RangeError("Invalid path: " + n360);
                if (s443.push(b33[0] == "*" ? null : b33[0][0] == '"' ? JSON.parse(b33[0]) : b33[0]), m58 += b33[0].length, m58 == n360.length) break;
                let y26 = n360[m58++];
                if (m58 == n360.length && y26 == "!") {
                    c141 = 0;
                    break;
                }
                if (y26 != "/") throw new RangeError("Invalid path: " + n360);
                o290 = n360.slice(m58);
            }
            let h143 = s443.length - 1, N18 = s443[h143];
            if (!N18) throw new RangeError("Invalid path: " + n360);
            let p42 = new X7(l287, c141, h143 > 0 ? s443.slice(0, h143) : null);
            t1058[N18] = p42.sort(t1058[N18]);
        }
    }
    return Q9.add(t1058);
}
var Q9 = new y4, H8 = O1.define({
    combine (r457) {
        return r457.length ? S12.combinedMatch(r457) : null;
    }
}), U5 = O1.define({
    combine (r458) {
        return r458.length ? r458[0].match : null;
    }
});
function K7(r459) {
    return r459.facet(H8) || r459.facet(U5);
}
var X7 = class {
    constructor(t1059, a162, l288, n361){
        this.tags = t1059, this.mode = a162, this.context = l288, this.next = n361;
    }
    sort(t1060) {
        return !t1060 || t1060.depth < this.depth ? (this.next = t1060, this) : (t1060.next = this.sort(t1060.next), t1060);
    }
    get depth() {
        return this.context ? this.context.length : 0;
    }
}, S12 = class {
    constructor(t1061, a163){
        this.map = Object.create(null);
        let l289;
        function n362(c142) {
            let o291 = x1.newName();
            return (l289 || (l289 = Object.create(null)))["." + o291] = c142, o291;
        }
        this.all = typeof a163.all == "string" ? a163.all : a163.all ? n362(a163.all) : null;
        for (let c143 of t1061){
            let o292 = (c143.class || n362(Object.assign({}, c143, {
                tag: null
            }))) + (this.all ? " " + this.all : ""), h144 = c143.tag;
            if (!Array.isArray(h144)) this.map[h144.id] = o292;
            else for (let N19 of h144)this.map[N19.id] = o292;
        }
        this.module = l289 ? new x1(l289) : null, this.scope = a163.scope || null, this.match = this.match.bind(this);
        let s444 = [
            ht2
        ];
        this.module && s444.push(D2.styleModule.of(this.module)), this.extension = s444.concat(H8.of(this)), this.fallback = s444.concat(U5.of(this));
    }
    match(t1062, a164) {
        if (this.scope && a164 != this.scope) return null;
        for (let l290 of t1062.set){
            let n363 = this.map[l290.id];
            if (n363 !== void 0) return l290 != t1062 && (this.map[t1062.id] = n363), n363;
        }
        return this.map[t1062.id] = this.all;
    }
    static combinedMatch(t1063) {
        if (t1063.length == 1) return t1063[0].match;
        let a165 = t1063.some((l291)=>l291.scope
        ) ? void 0 : Object.create(null);
        return (l292, n364)=>{
            let s445 = a165 && a165[l292.id];
            if (s445 !== void 0) return s445;
            let c144 = null;
            for (let o293 of t1063){
                let h145 = o293.match(l292, n364);
                h145 && (c144 = c144 ? c144 + " " + h145 : h145);
            }
            return a165 && (a165[l292.id] = c144), c144;
        };
    }
    static define(t1064, a166) {
        return new S12(t1064, a166 || {});
    }
    static get(t1065, a167, l293) {
        let n365 = K7(t1065);
        return n365 && n365(a167, l293 || B2.none);
    }
};
var Y6 = class {
    constructor(t1066){
        this.markCache = Object.create(null), this.tree = v3(t1066.state), this.decorations = this.buildDeco(t1066, K7(t1066.state));
    }
    update(t1067) {
        let a168 = v3(t1067.state), l294 = K7(t1067.state), n366 = l294 != t1067.startState.facet(H8);
        a168.length < t1067.view.viewport.to && !n366 && a168.type == this.tree.type ? this.decorations = this.decorations.map(t1067.changes) : (a168 != this.tree || t1067.viewportChanged || n366) && (this.tree = a168, this.decorations = this.buildDeco(t1067.view, l294));
    }
    buildDeco(t1068, a169) {
        if (!a169 || !this.tree.length) return w4.none;
        let l295 = new x2;
        for (let { from: n367 , to: s446  } of t1068.visibleRanges)_8(this.tree, n367, s446, a169, (c145, o294, h146)=>{
            l295.add(c145, o294, this.markCache[h146] || (this.markCache[h146] = w4.mark({
                class: h146
            })));
        });
        return l295.finish();
    }
}, ht2 = Ie.high(z2.fromClass(Y6, {
    decorations: (r460)=>r460.decorations
})), Z5 = [
    ""
], $7 = class {
    constructor(t1069, a170, l296){
        this.at = t1069, this.style = a170, this.span = l296, this.class = "";
    }
    startSpan(t1070, a171) {
        a171 != this.class && (this.flush(t1070), t1070 > this.at && (this.at = t1070), this.class = a171);
    }
    flush(t1071) {
        t1071 > this.at && this.class && this.span(this.at, t1071, this.class);
    }
    highlightRange(t1072, a172, l297, n368, s447, c146) {
        let { type: o295 , from: h147 , to: N20  } = t1072;
        if (h147 >= l297 || N20 <= a172) return;
        Z5[s447] = o295.name, o295.isTop && (c146 = o295);
        let p43 = n368, m59 = o295.prop(Q9), b34 = !1;
        for(; m59;){
            if (!m59.context || mt(m59.context, Z5, s447)) {
                for (let I17 of m59.tags){
                    let k27 = this.style(I17, c146);
                    k27 && (p43 && (p43 += " "), p43 += k27, m59.mode == 1 ? n368 += (n368 ? " " : "") + k27 : m59.mode == 0 && (b34 = !0));
                }
                break;
            }
            m59 = m59.next;
        }
        if (this.startSpan(t1072.from, p43), b34) return;
        let y27 = t1072.tree && t1072.tree.prop(y4.mounted);
        if (y27 && y27.overlay) {
            let I18 = t1072.node.enter(y27.overlay[0].from + h147, 1), k28 = t1072.firstChild();
            for(let A17 = 0, M20 = h147;; A17++){
                let O16 = A17 < y27.overlay.length ? y27.overlay[A17] : null, E18 = O16 ? O16.from + h147 : N20, V12 = Math.max(a172, M20), P14 = Math.min(l297, E18);
                if (V12 < P14 && k28) for(; t1072.from < P14 && (this.highlightRange(t1072, V12, P14, n368, s447 + 1, c146), this.startSpan(Math.min(l297, t1072.to), p43), !(t1072.to >= E18 || !t1072.nextSibling())););
                if (!O16 || E18 > l297) break;
                M20 = O16.to + h147, M20 > a172 && (this.highlightRange(I18.cursor, Math.max(a172, O16.from + h147), Math.min(l297, M20), n368, s447, y27.tree.type), this.startSpan(M20, p43));
            }
            k28 && t1072.parent();
        } else if (t1072.firstChild()) {
            do if (!(t1072.to <= a172)) {
                if (t1072.from >= l297) break;
                this.highlightRange(t1072, a172, l297, n368, s447 + 1, c146), this.startSpan(Math.min(l297, t1072.to), p43);
            }
            while (t1072.nextSibling())
            t1072.parent();
        }
    }
};
function _8(r461, t1073, a173, l298, n369) {
    let s448 = new $7(t1073, l298, n369);
    s448.highlightRange(r461.cursor(), t1073, a173, "", 0, r461.type), s448.flush(a173);
}
function mt(r462, t1074, a174) {
    if (r462.length > a174 - 1) return !1;
    for(let l299 = a174 - 1, n370 = r462.length - 1; n370 >= 0; n370--, l299--){
        let s449 = r462[n370];
        if (s449 && s449 != t1074[l299]) return !1;
    }
    return !0;
}
var e = f5.define, D12 = e(), w12 = e(), tt4 = e(w12), et4 = e(w12), x11 = e(), T13 = e(x11), q9 = e(x11), g6 = e(), v8 = e(g6), d8 = e(), u4 = e(), B7 = e(), C12 = e(B7), j8 = e(), i1 = {
    comment: D12,
    lineComment: e(D12),
    blockComment: e(D12),
    docComment: e(D12),
    name: w12,
    variableName: e(w12),
    typeName: tt4,
    tagName: e(tt4),
    propertyName: et4,
    attributeName: e(et4),
    className: e(w12),
    labelName: e(w12),
    namespace: e(w12),
    macroName: e(w12),
    literal: x11,
    string: T13,
    docString: e(T13),
    character: e(T13),
    attributeValue: e(T13),
    number: q9,
    integer: e(q9),
    float: e(q9),
    bool: e(x11),
    regexp: e(x11),
    escape: e(x11),
    color: e(x11),
    url: e(x11),
    keyword: d8,
    self: e(d8),
    null: e(d8),
    atom: e(d8),
    unit: e(d8),
    modifier: e(d8),
    operatorKeyword: e(d8),
    controlKeyword: e(d8),
    definitionKeyword: e(d8),
    moduleKeyword: e(d8),
    operator: u4,
    derefOperator: e(u4),
    arithmeticOperator: e(u4),
    logicOperator: e(u4),
    bitwiseOperator: e(u4),
    compareOperator: e(u4),
    updateOperator: e(u4),
    definitionOperator: e(u4),
    typeOperator: e(u4),
    controlOperator: e(u4),
    punctuation: B7,
    separator: e(B7),
    bracket: C12,
    angleBracket: e(C12),
    squareBracket: e(C12),
    paren: e(C12),
    brace: e(C12),
    content: g6,
    heading: v8,
    heading1: e(v8),
    heading2: e(v8),
    heading3: e(v8),
    heading4: e(v8),
    heading5: e(v8),
    heading6: e(v8),
    contentSeparator: e(g6),
    list: e(g6),
    quote: e(g6),
    emphasis: e(g6),
    strong: e(g6),
    link: e(g6),
    monospace: e(g6),
    strikethrough: e(g6),
    inserted: e(),
    deleted: e(),
    changed: e(),
    invalid: e(),
    meta: j8,
    documentMeta: e(j8),
    annotation: e(j8),
    processingInstruction: e(j8),
    definition: f5.defineModifier(),
    constant: f5.defineModifier(),
    function: f5.defineModifier(),
    standard: f5.defineModifier(),
    local: f5.defineModifier(),
    special: f5.defineModifier()
}, wt2 = S12.define([
    {
        tag: i1.link,
        textDecoration: "underline"
    },
    {
        tag: i1.heading,
        textDecoration: "underline",
        fontWeight: "bold"
    },
    {
        tag: i1.emphasis,
        fontStyle: "italic"
    },
    {
        tag: i1.strong,
        fontWeight: "bold"
    },
    {
        tag: i1.strikethrough,
        textDecoration: "line-through"
    },
    {
        tag: i1.keyword,
        color: "#708"
    },
    {
        tag: [
            i1.atom,
            i1.bool,
            i1.url,
            i1.contentSeparator,
            i1.labelName
        ],
        color: "#219"
    },
    {
        tag: [
            i1.literal,
            i1.inserted
        ],
        color: "#164"
    },
    {
        tag: [
            i1.string,
            i1.deleted
        ],
        color: "#a11"
    },
    {
        tag: [
            i1.regexp,
            i1.escape,
            i1.special(i1.string)
        ],
        color: "#e40"
    },
    {
        tag: i1.definition(i1.variableName),
        color: "#00f"
    },
    {
        tag: i1.local(i1.variableName),
        color: "#30a"
    },
    {
        tag: [
            i1.typeName,
            i1.namespace
        ],
        color: "#085"
    },
    {
        tag: i1.className,
        color: "#167"
    },
    {
        tag: [
            i1.special(i1.variableName),
            i1.macroName
        ],
        color: "#256"
    },
    {
        tag: i1.definition(i1.propertyName),
        color: "#00c"
    },
    {
        tag: i1.comment,
        color: "#940"
    },
    {
        tag: i1.meta,
        color: "#7a757a"
    },
    {
        tag: i1.invalid,
        color: "#f00"
    }
]), xt3 = S12.define([
    {
        tag: i1.link,
        class: "cmt-link"
    },
    {
        tag: i1.heading,
        class: "cmt-heading"
    },
    {
        tag: i1.emphasis,
        class: "cmt-emphasis"
    },
    {
        tag: i1.strong,
        class: "cmt-strong"
    },
    {
        tag: i1.keyword,
        class: "cmt-keyword"
    },
    {
        tag: i1.atom,
        class: "cmt-atom"
    },
    {
        tag: i1.bool,
        class: "cmt-bool"
    },
    {
        tag: i1.url,
        class: "cmt-url"
    },
    {
        tag: i1.labelName,
        class: "cmt-labelName"
    },
    {
        tag: i1.inserted,
        class: "cmt-inserted"
    },
    {
        tag: i1.deleted,
        class: "cmt-deleted"
    },
    {
        tag: i1.literal,
        class: "cmt-literal"
    },
    {
        tag: i1.string,
        class: "cmt-string"
    },
    {
        tag: i1.number,
        class: "cmt-number"
    },
    {
        tag: [
            i1.regexp,
            i1.escape,
            i1.special(i1.string)
        ],
        class: "cmt-string2"
    },
    {
        tag: i1.variableName,
        class: "cmt-variableName"
    },
    {
        tag: i1.local(i1.variableName),
        class: "cmt-variableName cmt-local"
    },
    {
        tag: i1.definition(i1.variableName),
        class: "cmt-variableName cmt-definition"
    },
    {
        tag: i1.special(i1.variableName),
        class: "cmt-variableName2"
    },
    {
        tag: i1.definition(i1.propertyName),
        class: "cmt-propertyName cmt-definition"
    },
    {
        tag: i1.typeName,
        class: "cmt-typeName"
    },
    {
        tag: i1.namespace,
        class: "cmt-namespace"
    },
    {
        tag: i1.className,
        class: "cmt-className"
    },
    {
        tag: i1.macroName,
        class: "cmt-macroName"
    },
    {
        tag: i1.propertyName,
        class: "cmt-propertyName"
    },
    {
        tag: i1.operator,
        class: "cmt-operator"
    },
    {
        tag: i1.comment,
        class: "cmt-comment"
    },
    {
        tag: i1.meta,
        class: "cmt-meta"
    },
    {
        tag: i1.invalid,
        class: "cmt-invalid"
    },
    {
        tag: i1.punctuation,
        class: "cmt-punctuation"
    }
]);
var A9 = class {
    constructor(e1052, i581, o296){
        this.from = e1052, this.to = i581, this.diagnostic = o296;
    }
}, u5 = class {
    constructor(e1053, i582, o297){
        this.diagnostics = e1053, this.panel = i582, this.selected = o297;
    }
    static init(e1054, i583, o298) {
        let s450 = w4.set(e1054.map((n371)=>n371.from == n371.to || n371.from == n371.to - 1 && o298.doc.lineAt(n371.from).to == n371.from ? w4.widget({
                widget: new _9(n371),
                diagnostic: n371
            }).range(n371.from) : w4.mark({
                attributes: {
                    class: "cm-lintRange cm-lintRange-" + n371.severity
                },
                diagnostic: n371
            }).range(n371.from, n371.to)
        ), !0);
        return new u5(s450, i583, p10(s450));
    }
};
function p10(t1075, e1055 = null, i584 = 0) {
    let o299 = null;
    return t1075.between(i584, 1000000000, (s451, n372, { spec: r463  })=>{
        if (!(e1055 && r463.diagnostic != e1055)) return o299 = new A9(s451, n372, r463.diagnostic), !1;
    }), o299;
}
function I10(t1076, e1056) {
    return t1076.field(c4, !1) ? e1056 : e1056.concat(v.appendConfig.of([
        c4,
        D2.decorations.compute([
            c4
        ], (i585)=>{
            let { selected: o300 , panel: s452  } = i585.field(c4);
            return !o300 || !s452 || o300.from == o300.to ? w4.none : w4.set([
                Q10.range(o300.from, o300.to)
            ]);
        }),
        G4(ee6),
        oe5
    ]));
}
function J8(t1077, e1057) {
    return {
        effects: I10(t1077, [
            T14.of(e1057)
        ])
    };
}
var T14 = v.define(), S13 = v.define(), M13 = v.define(), c4 = B1.define({
    create () {
        return new u5(w4.none, null, null);
    },
    update (t1078, e1058) {
        if (e1058.docChanged) {
            let i586 = t1078.diagnostics.map(e1058.changes), o301 = null;
            if (t1078.selected) {
                let s453 = e1058.changes.mapPos(t1078.selected.from, 1);
                o301 = p10(i586, t1078.selected.diagnostic, s453) || p10(i586, null, s453);
            }
            t1078 = new u5(i586, t1078.panel, o301);
        }
        for (let i587 of e1058.effects)i587.is(T14) ? t1078 = u5.init(i587.value, t1078.panel, e1058.state) : i587.is(S13) ? t1078 = new u5(t1078.diagnostics, i587.value ? k7.open : null, t1078.selected) : i587.is(M13) && (t1078 = new u5(t1078.diagnostics, t1078.panel, i587.value));
        return t1078;
    },
    provide: (t1079)=>[
            b7.from(t1079, (e1059)=>e1059.panel
            ),
            D2.decorations.from(t1079, (e1060)=>e1060.diagnostics
            )
        ]
});
var Q10 = w4.mark({
    class: "cm-lintRange cm-lintRange-active"
});
function ee6(t1080, e1061, i588) {
    let { diagnostics: o302  } = t1080.state.field(c4), s454 = [], n373 = 200000000, r464 = 0;
    return o302.between(e1061 - (i588 < 0 ? 1 : 0), e1061 + (i588 > 0 ? 1 : 0), (l300, a175, { spec: d81  })=>{
        e1061 >= l300 && e1061 <= a175 && (l300 == a175 || (e1061 > l300 || i588 > 0) && (e1061 < a175 || i588 < 0)) && (s454.push(d81.diagnostic), n373 = Math.min(l300, n373), r464 = Math.max(a175, r464));
    }), s454.length ? {
        pos: n373,
        end: r464,
        above: t1080.state.doc.lineAt(n373).to < r464,
        create () {
            return {
                dom: E11(t1080, s454)
            };
        }
    } : null;
}
function E11(t1081, e1062) {
    return s2("ul", {
        class: "cm-tooltip-lint"
    }, e1062.map((i589)=>G5(t1081, i589, !1)
    ));
}
var te6 = (t1082)=>{
    let e1063 = t1082.state.field(c4, !1);
    (!e1063 || !e1063.panel) && t1082.dispatch({
        effects: I10(t1082.state, [
            S13.of(!0)
        ])
    });
    let i590 = O9(t1082, k7.open);
    return i590 && i590.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, B8 = (t1083)=>{
    let e1064 = t1083.state.field(c4, !1);
    return !e1064 || !e1064.panel ? !1 : (t1083.dispatch({
        effects: S13.of(!1)
    }), !0);
}, ie6 = (t1084)=>{
    let e1065 = t1084.state.field(c4, !1);
    if (!e1065) return !1;
    let i591 = t1084.state.selection.main, o303 = e1065.diagnostics.iter(i591.to + 1);
    return !o303.value && (o303 = e1065.diagnostics.iter(0), !o303.value || o303.from == i591.from && o303.to == i591.to) ? !1 : (t1084.dispatch({
        selection: {
            anchor: o303.from,
            head: o303.to
        },
        scrollIntoView: !0
    }), !0);
}, be5 = [
    {
        key: "Mod-Shift-m",
        run: te6
    },
    {
        key: "F8",
        run: ie6
    }
], O11 = z2.fromClass(class {
    constructor(t1085){
        this.view = t1085, this.timeout = -1, this.set = !0;
        let { delay: e1066  } = t1085.state.facet(w13);
        this.lintTime = Date.now() + e1066, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, e1066);
    }
    run() {
        let t1086 = Date.now();
        if (t1086 < this.lintTime - 10) setTimeout(this.run, this.lintTime - t1086);
        else {
            this.set = !1;
            let { state: e1067  } = this.view, { sources: i592  } = e1067.facet(w13);
            Promise.all(i592.map((o304)=>Promise.resolve(o304(this.view))
            )).then((o305)=>{
                var s455, n374;
                let r465 = o305.reduce((l301, a176)=>l301.concat(a176)
                );
                this.view.state.doc == e1067.doc && (r465.length || ((n374 = (s455 = this.view.state.field(c4, !1)) === null || s455 === void 0 ? void 0 : s455.diagnostics) === null || n374 === void 0 ? void 0 : n374.size)) && this.view.dispatch(J8(this.view.state, r465));
            }, (o306)=>{
                lt(this.view.state, o306);
            });
        }
    }
    update(t1087) {
        let e1068 = t1087.state.facet(w13);
        (t1087.docChanged || e1068 != t1087.startState.facet(w13)) && (this.lintTime = Date.now() + e1068.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, e1068.delay)));
    }
    force() {
        this.set && (this.lintTime = Date.now(), this.run());
    }
    destroy() {
        clearTimeout(this.timeout);
    }
}), w13 = O1.define({
    combine (t1088) {
        return {
            sources: t1088.map((e1069)=>e1069.source
            ),
            delay: t1088.length ? Math.max(...t1088.map((e1070)=>e1070.delay
            )) : 750
        };
    },
    enables: O11
});
function j9(t1089) {
    let e1071 = [];
    if (t1089) e: for (let { name: i593  } of t1089){
        for(let o307 = 0; o307 < i593.length; o307++){
            let s456 = i593[o307];
            if (/[a-zA-Z]/.test(s456) && !e1071.some((n375)=>n375.toLowerCase() == s456.toLowerCase()
            )) {
                e1071.push(s456);
                continue e;
            }
        }
        e1071.push("");
    }
    return e1071;
}
function G5(t1090, e1072, i594) {
    var o308;
    let s457 = i594 ? j9(e1072.actions) : [];
    return s2("li", {
        class: "cm-diagnostic cm-diagnostic-" + e1072.severity
    }, s2("span", {
        class: "cm-diagnosticText"
    }, e1072.message), (o308 = e1072.actions) === null || o308 === void 0 ? void 0 : o308.map((n376, r466)=>{
        let l302 = (g50)=>{
            g50.preventDefault();
            let x27 = p10(t1090.state.field(c4).diagnostics, e1072);
            x27 && n376.apply(t1090, x27.from, x27.to);
        }, { name: a177  } = n376, d82 = s457[r466] ? a177.indexOf(s457[r466]) : -1, f117 = d82 < 0 ? a177 : [
            a177.slice(0, d82),
            s2("u", a177.slice(d82, d82 + 1)),
            a177.slice(d82 + 1)
        ];
        return s2("button", {
            type: "button",
            class: "cm-diagnosticAction",
            onclick: l302,
            onmousedown: l302,
            "aria-label": ` Action: ${a177}${d82 < 0 ? "" : ` (access key "${s457[r466]})"`}.`
        }, f117);
    }), e1072.source && s2("div", {
        class: "cm-diagnosticSource"
    }, e1072.source));
}
var _9 = class extends Q1 {
    constructor(e1073){
        super();
        this.diagnostic = e1073;
    }
    eq(e1074) {
        return e1074.diagnostic == this.diagnostic;
    }
    toDOM() {
        return s2("span", {
            class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity
        });
    }
}, L9 = class {
    constructor(e1075, i595){
        this.diagnostic = i595, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = G5(e1075, i595, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
    }
}, k7 = class {
    constructor(e1076){
        this.view = e1076, this.items = [];
        let i596 = (s458)=>{
            if (s458.keyCode == 27) B8(this.view), this.view.focus();
            else if (s458.keyCode == 38 || s458.keyCode == 33) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
            else if (s458.keyCode == 40 || s458.keyCode == 34) this.moveSelection((this.selectedIndex + 1) % this.items.length);
            else if (s458.keyCode == 36) this.moveSelection(0);
            else if (s458.keyCode == 35) this.moveSelection(this.items.length - 1);
            else if (s458.keyCode == 13) this.view.focus();
            else if (s458.keyCode >= 65 && s458.keyCode <= 90 && this.selectedIndex >= 0) {
                let { diagnostic: n377  } = this.items[this.selectedIndex], r467 = j9(n377.actions);
                for(let l303 = 0; l303 < r467.length; l303++)if (r467[l303].toUpperCase().charCodeAt(0) == s458.keyCode) {
                    let a178 = p10(this.view.state.field(c4).diagnostics, n377);
                    a178 && n377.actions[l303].apply(e1076, a178.from, a178.to);
                }
            } else return;
            s458.preventDefault();
        }, o309 = (s459)=>{
            for(let n378 = 0; n378 < this.items.length; n378++)this.items[n378].dom.contains(s459.target) && this.moveSelection(n378);
        };
        this.list = s2("ul", {
            tabIndex: 0,
            role: "listbox",
            "aria-label": this.view.state.phrase("Diagnostics"),
            onkeydown: i596,
            onclick: o309
        }), this.dom = s2("div", {
            class: "cm-panel-lint"
        }, this.list, s2("button", {
            type: "button",
            name: "close",
            "aria-label": this.view.state.phrase("close"),
            onclick: ()=>B8(this.view)
        }, "\xD7")), this.update();
    }
    get selectedIndex() {
        let e1077 = this.view.state.field(c4).selected;
        if (!e1077) return -1;
        for(let i597 = 0; i597 < this.items.length; i597++)if (this.items[i597].diagnostic == e1077.diagnostic) return i597;
        return -1;
    }
    update() {
        let { diagnostics: e1078 , selected: i598  } = this.view.state.field(c4), o310 = 0, s460 = !1, n379 = null;
        for(e1078.between(0, this.view.state.doc.length, (r, l, { spec: a179  })=>{
            let d83 = -1, f118;
            for(let g51 = o310; g51 < this.items.length; g51++)if (this.items[g51].diagnostic == a179.diagnostic) {
                d83 = g51;
                break;
            }
            d83 < 0 ? (f118 = new L9(this.view, a179.diagnostic), this.items.splice(o310, 0, f118), s460 = !0) : (f118 = this.items[d83], d83 > o310 && (this.items.splice(o310, d83 - o310), s460 = !0)), i598 && f118.diagnostic == i598.diagnostic ? f118.dom.hasAttribute("aria-selected") || (f118.dom.setAttribute("aria-selected", "true"), n379 = f118) : f118.dom.hasAttribute("aria-selected") && f118.dom.removeAttribute("aria-selected"), o310++;
        }); o310 < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0);)s460 = !0, this.items.pop();
        this.items.length == 0 && (this.items.push(new L9(this.view, {
            from: -1,
            to: -1,
            severity: "info",
            message: this.view.state.phrase("No diagnostics")
        })), s460 = !0), n379 ? (this.list.setAttribute("aria-activedescendant", n379.id), this.view.requestMeasure({
            key: this,
            read: ()=>({
                    sel: n379.dom.getBoundingClientRect(),
                    panel: this.list.getBoundingClientRect()
                })
            ,
            write: ({ sel: r468 , panel: l304  })=>{
                r468.top < l304.top ? this.list.scrollTop -= l304.top - r468.top : r468.bottom > l304.bottom && (this.list.scrollTop += r468.bottom - l304.bottom);
            }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), s460 && this.sync();
    }
    sync() {
        let e1079 = this.list.firstChild;
        function i599() {
            let o311 = e1079;
            e1079 = o311.nextSibling, o311.remove();
        }
        for (let o1 of this.items)if (o1.dom.parentNode == this.list) {
            for(; e1079 != o1.dom;)i599();
            e1079 = o1.dom.nextSibling;
        } else this.list.insertBefore(o1.dom, e1079);
        for(; e1079;)i599();
    }
    moveSelection(e1080) {
        if (this.selectedIndex < 0) return;
        let i600 = this.view.state.field(c4), o312 = p10(i600.diagnostics, this.items[e1080].diagnostic);
        !o312 || this.view.dispatch({
            selection: {
                anchor: o312.from,
                head: o312.to
            },
            scrollIntoView: !0,
            effects: M13.of(o312)
        });
    }
    static open(e1081) {
        return new k7(e1081);
    }
};
function y9(t1091, e1082 = 'viewBox="0 0 40 40"') {
    return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e1082}>${encodeURIComponent(t1091)}</svg>')`;
}
function P10(t1092) {
    return y9(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${t1092}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
var oe5 = D2.baseTheme({
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
        opacity: 0.7
    },
    ".cm-lintRange": {
        backgroundPosition: "left bottom",
        backgroundRepeat: "repeat-x",
        paddingBottom: "0.7px"
    },
    ".cm-lintRange-error": {
        backgroundImage: P10("#d11")
    },
    ".cm-lintRange-warning": {
        backgroundImage: P10("orange")
    },
    ".cm-lintRange-info": {
        backgroundImage: P10("#999")
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
}), $8 = class extends h {
    constructor(e1083){
        super();
        this.diagnostics = e1083, this.severity = e1083.reduce((i601, o313)=>{
            let s461 = o313.severity;
            return s461 == "error" || s461 == "warning" && i601 == "info" ? s461 : i601;
        }, "info");
    }
    toDOM(e1084) {
        let i602 = document.createElement("div");
        return i602.className = "cm-lint-marker cm-lint-marker-" + this.severity, i602.onmouseover = ()=>ne6(e1084, i602, this.diagnostics)
        , i602;
    }
};
function se5(t1093, e1085) {
    let i603 = (o314)=>{
        let s462 = e1085.getBoundingClientRect();
        if (!(o314.clientX > s462.left - 10 && o314.clientX < s462.right + 10 && o314.clientY > s462.top - 10 && o314.clientY < s462.bottom + 10)) {
            for(let n380 = o314.target; n380; n380 = n380.parentNode)if (n380.nodeType == 1 && n380.classList.contains("cm-tooltip-lint")) return;
            window.removeEventListener("mousemove", i603), t1093.state.field(z10) && t1093.dispatch({
                effects: R7.of(null)
            });
        }
    };
    window.addEventListener("mousemove", i603);
}
function ne6(t1094, e1086, i604) {
    function o315() {
        let n381 = t1094.visualLineAtHeight(e1086.getBoundingClientRect().top + 5), r469 = t1094.coordsAtPos(n381.from), l305 = e1086.getBoundingClientRect();
        r469 && t1094.dispatch({
            effects: R7.of({
                pos: n381.from,
                above: !1,
                create () {
                    return {
                        dom: E11(t1094, i604),
                        offset: {
                            x: l305.left - r469.left,
                            y: 0
                        }
                    };
                }
            })
        }), e1086.onmouseout = e1086.onmousemove = null, se5(t1094, e1086);
    }
    let s463 = setTimeout(o315, 600);
    e1086.onmouseout = ()=>{
        clearTimeout(s463), e1086.onmouseout = e1086.onmousemove = null;
    }, e1086.onmousemove = ()=>{
        clearTimeout(s463), s463 = setTimeout(o315, 600);
    };
}
function re6(t1095, e1087) {
    let i605 = Object.create(null);
    for (let s464 of e1087){
        let n382 = t1095.lineAt(s464.from);
        (i605[n382.from] || (i605[n382.from] = [])).push(s464);
    }
    let o316 = [];
    for(let s1102 in i605)o316.push(new $8(i605[s1102]).range(+s1102));
    return f.of(o316, !0);
}
var le4 = K5({
    class: "cm-gutter-lint",
    markers: (t1096)=>t1096.state.field(H9)
}), H9 = B1.define({
    create () {
        return f.empty;
    },
    update (t1097, e1088) {
        t1097 = t1097.map(e1088.changes);
        for (let i606 of e1088.effects)i606.is(T14) && (t1097 = re6(e1088.state.doc, i606.value));
        return t1097;
    }
}), R7 = v.define(), z10 = B1.define({
    create () {
        return null;
    },
    update (t1098, e1089) {
        return t1098 && e1089.docChanged && (t1098 = Object.assign(Object.assign({}, t1098), {
            pos: e1089.changes.mapPos(t1098.pos)
        })), e1089.effects.reduce((i607, o317)=>o317.is(R7) ? o317.value : i607
        , t1098);
    },
    provide: (t1099)=>k4.from(t1099)
}), ae5 = D2.baseTheme({
    ".cm-gutter-lint": {
        width: "1.4em",
        "& .cm-gutterElement": {
            padding: "0 .2em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }
    },
    ".cm-lint-marker": {
        width: "1em",
        height: "1em"
    },
    ".cm-lint-marker-info": {
        content: y9('<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>')
    },
    ".cm-lint-marker-warning": {
        content: y9('<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>')
    },
    ".cm-lint-marker-error:before": {
        content: y9('<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>')
    }
});
var D13 = [
    Q5(),
    U2(),
    cr(),
    _1(),
    Y3(),
    hr(),
    ar(),
    w1.allowMultipleSelections.of(!0),
    vt1(),
    wt2.fallback,
    j6(),
    G3(),
    It1(),
    L7(),
    ur(),
    We1(),
    Fn.of([
        ...J6,
        ...Tt1,
        ...we4,
        ...b4,
        ...X4,
        ...M11,
        ...ht1,
        ...be5
    ])
];
var process = {};
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimeout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimeout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimeout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        return setTimeout(fun, 0);
    }
    if ((cachedSetTimeout === defaultSetTimeout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        return clearTimeout(marker);
    }
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}
function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len){
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for(var i608 = 1; i608 < arguments.length; i608++){
            args[i608 - 1] = arguments[i608];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = '';
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.emitWarning = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};
process.env.NODE_ENV = "production";
var m7 = class {
    constructor(t1100, e1090, s465, i609, h148, r470, n383, a180, l306, u85 = 0, f119){
        this.p = t1100, this.stack = e1090, this.state = s465, this.reducePos = i609, this.pos = h148, this.score = r470, this.buffer = n383, this.bufferBase = a180, this.curContext = l306, this.lookAhead = u85, this.parent = f119;
    }
    toString() {
        return `[${this.stack.filter((t, e1091)=>e1091 % 3 == 0
        ).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
    }
    static start(t1101, e1092, s466 = 0) {
        let i610 = t1101.parser.context;
        return new m7(t1101, [], e1092, s466, s466, 0, [], 0, i610 ? new w14(i610, i610.start) : null, 0, null);
    }
    get context() {
        return this.curContext ? this.curContext.context : null;
    }
    pushState(t1102, e1093) {
        this.stack.push(this.state, e1093, this.bufferBase + this.buffer.length), this.state = t1102;
    }
    reduce(t1103) {
        let e1094 = t1103 >> 19, s467 = t1103 & 65535, { parser: i611  } = this.p, h149 = i611.dynamicPrecedence(s467);
        if (h149 && (this.score += h149), e1094 == 0) {
            s467 < i611.minRepeatTerm && this.storeNode(s467, this.reducePos, this.reducePos, 4, !0), this.pushState(i611.getGoto(this.state, s467, !0), this.reducePos), this.reduceContext(s467, this.reducePos);
            return;
        }
        let r471 = this.stack.length - (e1094 - 1) * 3 - (t1103 & 262144 ? 6 : 0), n384 = this.stack[r471 - 2], a181 = this.stack[r471 - 1], l307 = this.bufferBase + this.buffer.length - a181;
        if (s467 < i611.minRepeatTerm || t1103 & 131072) {
            let u86 = i611.stateFlag(this.state, 1) ? this.pos : this.reducePos;
            this.storeNode(s467, n384, u86, l307 + 4, !0);
        }
        if (t1103 & 262144) this.state = this.stack[r471];
        else {
            let u87 = this.stack[r471 - 3];
            this.state = i611.getGoto(u87, s467, !0);
        }
        for(; this.stack.length > r471;)this.stack.pop();
        this.reduceContext(s467, n384);
    }
    storeNode(t1104, e1095, s468, i612 = 4, h150 = !1) {
        if (t1104 == 0) {
            let r472 = this, n385 = this.buffer.length;
            if (n385 == 0 && r472.parent && (n385 = r472.bufferBase - r472.parent.bufferBase, r472 = r472.parent), n385 > 0 && r472.buffer[n385 - 4] == 0 && r472.buffer[n385 - 1] > -1) {
                if (e1095 == s468) return;
                if (r472.buffer[n385 - 2] >= e1095) {
                    r472.buffer[n385 - 2] = s468;
                    return;
                }
            }
        }
        if (!h150 || this.pos == s468) this.buffer.push(t1104, e1095, s468, i612);
        else {
            let r473 = this.buffer.length;
            if (r473 > 0 && this.buffer[r473 - 4] != 0) for(; r473 > 0 && this.buffer[r473 - 2] > s468;)this.buffer[r473] = this.buffer[r473 - 4], this.buffer[r473 + 1] = this.buffer[r473 - 3], this.buffer[r473 + 2] = this.buffer[r473 - 2], this.buffer[r473 + 3] = this.buffer[r473 - 1], r473 -= 4, i612 > 4 && (i612 -= 4);
            this.buffer[r473] = t1104, this.buffer[r473 + 1] = e1095, this.buffer[r473 + 2] = s468, this.buffer[r473 + 3] = i612;
        }
    }
    shift(t1105, e1096, s469) {
        let i613 = this.pos;
        if (t1105 & 131072) this.pushState(t1105 & 65535, this.pos);
        else if ((t1105 & 262144) == 0) {
            let h151 = t1105, { parser: r474  } = this.p;
            (s469 > this.pos || e1096 <= r474.maxNode) && (this.pos = s469, r474.stateFlag(h151, 1) || (this.reducePos = s469)), this.pushState(h151, i613), this.shiftContext(e1096, i613), e1096 <= r474.maxNode && this.buffer.push(e1096, i613, s469, 4);
        } else this.pos = s469, this.shiftContext(e1096, i613), e1096 <= this.p.parser.maxNode && this.buffer.push(e1096, i613, s469, 4);
    }
    apply(t1106, e1097, s470) {
        t1106 & 65536 ? this.reduce(t1106) : this.shift(t1106, e1097, s470);
    }
    useNode(t1107, e1098) {
        let s471 = this.p.reused.length - 1;
        (s471 < 0 || this.p.reused[s471] != t1107) && (this.p.reused.push(t1107), s471++);
        let i614 = this.pos;
        this.reducePos = this.pos = i614 + t1107.length, this.pushState(e1098, i614), this.buffer.push(s471, i614, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, t1107, this, this.p.stream.reset(this.pos - t1107.length)));
    }
    split() {
        let t1108 = this, e1099 = t1108.buffer.length;
        for(; e1099 > 0 && t1108.buffer[e1099 - 2] > t1108.reducePos;)e1099 -= 4;
        let s472 = t1108.buffer.slice(e1099), i615 = t1108.bufferBase + e1099;
        for(; t1108 && i615 == t1108.bufferBase;)t1108 = t1108.parent;
        return new m7(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, s472, i615, this.curContext, this.lookAhead, t1108);
    }
    recoverByDelete(t1109, e1100) {
        let s473 = t1109 <= this.p.parser.maxNode;
        s473 && this.storeNode(t1109, this.pos, e1100, 4), this.storeNode(0, this.pos, e1100, s473 ? 8 : 4), this.pos = this.reducePos = e1100, this.score -= 190;
    }
    canShift(t1110) {
        for(let e1101 = new D14(this);;){
            let s474 = this.p.parser.stateSlot(e1101.state, 4) || this.p.parser.hasAction(e1101.state, t1110);
            if ((s474 & 65536) == 0) return !0;
            if (s474 == 0) return !1;
            e1101.reduce(s474);
        }
    }
    recoverByInsert(t1111) {
        if (this.stack.length >= 300) return [];
        let e1102 = this.p.parser.nextStates(this.state);
        if (e1102.length > 4 << 1 || this.stack.length >= 120) {
            let i616 = [];
            for(let h152 = 0, r475; h152 < e1102.length; h152 += 2)(r475 = e1102[h152 + 1]) != this.state && this.p.parser.hasAction(r475, t1111) && i616.push(e1102[h152], r475);
            if (this.stack.length < 120) for(let h153 = 0; i616.length < 4 << 1 && h153 < e1102.length; h153 += 2){
                let r476 = e1102[h153 + 1];
                i616.some((n386, a182)=>a182 & 1 && n386 == r476
                ) || i616.push(e1102[h153], r476);
            }
            e1102 = i616;
        }
        let s475 = [];
        for(let i617 = 0; i617 < e1102.length && s475.length < 4; i617 += 2){
            let h154 = e1102[i617 + 1];
            if (h154 == this.state) continue;
            let r477 = this.split();
            r477.storeNode(0, r477.pos, r477.pos, 4, !0), r477.pushState(h154, this.pos), r477.shiftContext(e1102[i617], this.pos), r477.score -= 200, s475.push(r477);
        }
        return s475;
    }
    forceReduce() {
        let t1112 = this.p.parser.stateSlot(this.state, 5);
        if ((t1112 & 65536) == 0) return !1;
        let { parser: e1103  } = this.p;
        if (!e1103.validAction(this.state, t1112)) {
            let s476 = t1112 >> 19, i618 = t1112 & 65535, h155 = this.stack.length - s476 * 3;
            if (h155 < 0 || e1103.getGoto(this.stack[h155], i618, !1) < 0) return !1;
            this.storeNode(0, this.reducePos, this.reducePos, 4, !0), this.score -= 100;
        }
        return this.reduce(t1112), !0;
    }
    forceAll() {
        for(; !this.p.parser.stateFlag(this.state, 2);)if (!this.forceReduce()) {
            this.storeNode(0, this.pos, this.pos, 4, !0);
            break;
        }
        return this;
    }
    get deadEnd() {
        if (this.stack.length != 3) return !1;
        let { parser: t1113  } = this.p;
        return t1113.data[t1113.stateSlot(this.state, 1)] == 65535 && !t1113.stateSlot(this.state, 4);
    }
    restart() {
        this.state = this.stack[0], this.stack.length = 0;
    }
    sameState(t1114) {
        if (this.state != t1114.state || this.stack.length != t1114.stack.length) return !1;
        for(let e1104 = 0; e1104 < this.stack.length; e1104 += 3)if (this.stack[e1104] != t1114.stack[e1104]) return !1;
        return !0;
    }
    get parser() {
        return this.p.parser;
    }
    dialectEnabled(t1115) {
        return this.p.parser.dialect.flags[t1115];
    }
    shiftContext(t1116, e1105) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, t1116, this, this.p.stream.reset(e1105)));
    }
    reduceContext(t1117, e1106) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, t1117, this, this.p.stream.reset(e1106)));
    }
    emitContext() {
        let t1118 = this.buffer.length - 1;
        (t1118 < 0 || this.buffer[t1118] != -3) && this.buffer.push(this.curContext.hash, this.reducePos, this.reducePos, -3);
    }
    emitLookAhead() {
        let t1119 = this.buffer.length - 1;
        (t1119 < 0 || this.buffer[t1119] != -4) && this.buffer.push(this.lookAhead, this.reducePos, this.reducePos, -4);
    }
    updateContext(t1120) {
        if (t1120 != this.curContext.context) {
            let e1107 = new w14(this.curContext.tracker, t1120);
            e1107.hash != this.curContext.hash && this.emitContext(), this.curContext = e1107;
        }
    }
    setLookAhead(t1121) {
        t1121 > this.lookAhead && (this.emitLookAhead(), this.lookAhead = t1121);
    }
    close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
    }
}, w14 = class {
    constructor(t1122, e1108){
        this.tracker = t1122, this.context = e1108, this.hash = t1122.strict ? t1122.hash(e1108) : 0;
    }
}, N8;
(function(o318) {
    o318[o318.Insert = 200] = "Insert", o318[o318.Delete = 190] = "Delete", o318[o318.Reduce = 100] = "Reduce", o318[o318.MaxNext = 4] = "MaxNext", o318[o318.MaxInsertStackDepth = 300] = "MaxInsertStackDepth", o318[o318.DampenInsertStackDepth = 120] = "DampenInsertStackDepth";
})(N8 || (N8 = {}));
var D14 = class {
    constructor(t1123){
        this.start = t1123, this.state = t1123.state, this.stack = t1123.stack, this.base = this.stack.length;
    }
    reduce(t1124) {
        let e1109 = t1124 & 65535, s477 = t1124 >> 19;
        s477 == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (s477 - 1) * 3;
        let i619 = this.start.p.parser.getGoto(this.stack[this.base - 3], e1109, !0);
        this.state = i619;
    }
}, x12 = class {
    constructor(t1125, e1110, s478){
        this.stack = t1125, this.pos = e1110, this.index = s478, this.buffer = t1125.buffer, this.index == 0 && this.maybeNext();
    }
    static create(t1126, e1111 = t1126.bufferBase + t1126.buffer.length) {
        return new x12(t1126, e1111, e1111 - t1126.bufferBase);
    }
    maybeNext() {
        let t1127 = this.stack.parent;
        t1127 != null && (this.index = this.stack.bufferBase - t1127.bufferBase, this.stack = t1127, this.buffer = t1127.buffer);
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
    next() {
        this.index -= 4, this.pos -= 4, this.index == 0 && this.maybeNext();
    }
    fork() {
        return new x12(this.stack, this.pos, this.index);
    }
}, b11 = class {
    constructor(){
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
    }
}, I11 = new b11, M14 = class {
    constructor(t1128, e1112){
        this.input = t1128, this.ranges = e1112, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = I11, this.rangeIndex = 0, this.pos = this.chunkPos = e1112[0].from, this.range = e1112[0], this.end = e1112[e1112.length - 1].to, this.readNext();
    }
    resolveOffset(t1129, e1113) {
        let s479 = this.range, i620 = this.rangeIndex, h156 = this.pos + t1129;
        for(; h156 < s479.from;){
            if (!i620) return null;
            let r478 = this.ranges[--i620];
            h156 -= s479.from - r478.to, s479 = r478;
        }
        for(; e1113 < 0 ? h156 > s479.to : h156 >= s479.to;){
            if (i620 == this.ranges.length - 1) return null;
            let r479 = this.ranges[++i620];
            h156 += r479.from - s479.to, s479 = r479;
        }
        return h156;
    }
    peek(t1130) {
        let e1114 = this.chunkOff + t1130, s480, i621;
        if (e1114 >= 0 && e1114 < this.chunk.length) s480 = this.pos + t1130, i621 = this.chunk.charCodeAt(e1114);
        else {
            let h157 = this.resolveOffset(t1130, 1);
            if (h157 == null) return -1;
            if (s480 = h157, s480 >= this.chunk2Pos && s480 < this.chunk2Pos + this.chunk2.length) i621 = this.chunk2.charCodeAt(s480 - this.chunk2Pos);
            else {
                let r480 = this.rangeIndex, n387 = this.range;
                for(; n387.to <= s480;)n387 = this.ranges[++r480];
                this.chunk2 = this.input.chunk(this.chunk2Pos = s480), s480 + this.chunk2.length > n387.to && (this.chunk2 = this.chunk2.slice(0, n387.to - s480)), i621 = this.chunk2.charCodeAt(0);
            }
        }
        return s480 >= this.token.lookAhead && (this.token.lookAhead = s480 + 1), i621;
    }
    acceptToken(t1131, e1115 = 0) {
        let s481 = e1115 ? this.resolveOffset(e1115, -1) : this.pos;
        if (s481 == null || s481 < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = t1131, this.token.end = s481;
    }
    getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
            let { chunk: t1132 , chunkPos: e1116  } = this;
            this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = t1132, this.chunk2Pos = e1116, this.chunkOff = this.pos - this.chunkPos;
        } else {
            this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
            let t1133 = this.input.chunk(this.pos), e1117 = this.pos + t1133.length;
            this.chunk = e1117 > this.range.to ? t1133.slice(0, this.range.to - this.pos) : t1133, this.chunkPos = this.pos, this.chunkOff = 0;
        }
    }
    readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
    }
    advance(t1134 = 1) {
        for(this.chunkOff += t1134; this.pos + t1134 >= this.range.to;){
            if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
            t1134 -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
        }
        return this.pos += t1134, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
    }
    setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
    }
    reset(t1135, e1118) {
        if (e1118 ? (this.token = e1118, e1118.start = t1135, e1118.lookAhead = t1135 + 1, e1118.value = e1118.extended = -1) : this.token = I11, this.pos != t1135) {
            if (this.pos = t1135, t1135 == this.end) return this.setDone(), this;
            for(; t1135 < this.range.from;)this.range = this.ranges[--this.rangeIndex];
            for(; t1135 >= this.range.to;)this.range = this.ranges[++this.rangeIndex];
            t1135 >= this.chunkPos && t1135 < this.chunkPos + this.chunk.length ? this.chunkOff = t1135 - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
        }
        return this;
    }
    read(t1136, e1119) {
        if (t1136 >= this.chunkPos && e1119 <= this.chunkPos + this.chunk.length) return this.chunk.slice(t1136 - this.chunkPos, e1119 - this.chunkPos);
        if (t1136 >= this.range.from && e1119 <= this.range.to) return this.input.read(t1136, e1119);
        let s482 = "";
        for (let i622 of this.ranges){
            if (i622.from >= e1119) break;
            i622.to > t1136 && (s482 += this.input.read(Math.max(i622.from, t1136), Math.min(i622.to, e1119)));
        }
        return s482;
    }
}, P11 = class {
    constructor(t1137, e1120){
        this.data = t1137, this.id = e1120;
    }
    token(t1138, e1121) {
        K8(this.data, t1138, e1121, this.id);
    }
};
P11.prototype.contextual = P11.prototype.fallback = P11.prototype.extend = !1;
var J9 = class {
    constructor(t1139, e1122 = {}){
        this.token = t1139, this.contextual = !!e1122.contextual, this.fallback = !!e1122.fallback, this.extend = !!e1122.extend;
    }
};
function K8(o319, t1140, e1123, s483) {
    let i623 = 0, h158 = 1 << s483, { parser: r481  } = e1123.p, { dialect: n388  } = r481;
    t: for(; (h158 & o319[i623]) != 0;){
        let a183 = o319[i623 + 1];
        for(let l308 = i623 + 3; l308 < a183; l308 += 2)if ((o319[l308 + 1] & h158) > 0) {
            let u88 = o319[l308];
            if (n388.allows(u88) && (t1140.token.value == -1 || t1140.token.value == u88 || r481.overrides(u88, t1140.token.value))) {
                t1140.acceptToken(u88);
                break;
            }
        }
        for(let l1 = t1140.next, u89 = 0, f120 = o319[i623 + 2]; u89 < f120;){
            let c147 = u89 + f120 >> 1, d84 = a183 + c147 + (c147 << 1), g52 = o319[d84], E19 = o319[d84 + 1];
            if (l1 < g52) f120 = c147;
            else if (l1 >= E19) u89 = c147 + 1;
            else {
                i623 = o319[d84 + 2], t1140.advance();
                continue t;
            }
        }
        break;
    }
}
function A10(o320, t1141 = Uint16Array) {
    if (typeof o320 != "string") return o320;
    let e1124 = null;
    for(let s484 = 0, i624 = 0; s484 < o320.length;){
        let h159 = 0;
        for(;;){
            let r482 = o320.charCodeAt(s484++), n389 = !1;
            if (r482 == 126) {
                h159 = 65535;
                break;
            }
            r482 >= 92 && r482--, r482 >= 34 && r482--;
            let a184 = r482 - 32;
            if (a184 >= 46 && (a184 -= 46, n389 = !0), h159 += a184, n389) break;
            h159 *= 46;
        }
        e1124 ? e1124[i624++] = h159 : e1124 = new t1141(h159);
    }
    return e1124;
}
var p11 = typeof process != "undefined" && /\bparse\b/.test(process.env.LOG), C13 = null, z11;
(function(o321) {
    o321[o321.Margin = 25] = "Margin";
})(z11 || (z11 = {}));
function O12(o322, t1142, e1125) {
    let s485 = o322.fullCursor();
    for(s485.moveTo(t1142);;)if (!(e1125 < 0 ? s485.childBefore(t1142) : s485.childAfter(t1142))) for(;;){
        if ((e1125 < 0 ? s485.to < t1142 : s485.from > t1142) && !s485.type.isError) return e1125 < 0 ? Math.max(0, Math.min(s485.to - 1, t1142 - 25)) : Math.min(o322.length, Math.max(s485.from + 1, t1142 + 25));
        if (e1125 < 0 ? s485.prevSibling() : s485.nextSibling()) break;
        if (!s485.parent()) return e1125 < 0 ? 0 : o322.length;
    }
}
var F9 = class {
    constructor(t1143, e1126){
        this.fragments = t1143, this.nodeSet = e1126, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
    }
    nextFragment() {
        let t1144 = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (t1144) {
            for(this.safeFrom = t1144.openStart ? O12(t1144.tree, t1144.from + t1144.offset, 1) - t1144.offset : t1144.from, this.safeTo = t1144.openEnd ? O12(t1144.tree, t1144.to + t1144.offset, -1) - t1144.offset : t1144.to; this.trees.length;)this.trees.pop(), this.start.pop(), this.index.pop();
            this.trees.push(t1144.tree), this.start.push(-t1144.offset), this.index.push(0), this.nextStart = this.safeFrom;
        } else this.nextStart = 1000000000;
    }
    nodeAt(t1145) {
        if (t1145 < this.nextStart) return null;
        for(; this.fragment && this.safeTo <= t1145;)this.nextFragment();
        if (!this.fragment) return null;
        for(;;){
            let e1127 = this.trees.length - 1;
            if (e1127 < 0) return this.nextFragment(), null;
            let s486 = this.trees[e1127], i625 = this.index[e1127];
            if (i625 == s486.children.length) {
                this.trees.pop(), this.start.pop(), this.index.pop();
                continue;
            }
            let h160 = s486.children[i625], r483 = this.start[e1127] + s486.positions[i625];
            if (r483 > t1145) return this.nextStart = r483, null;
            if (h160 instanceof P5) {
                if (r483 == t1145) {
                    if (r483 < this.safeFrom) return null;
                    let n390 = r483 + h160.length;
                    if (n390 <= this.safeTo) {
                        let a185 = h160.prop(y4.lookAhead);
                        if (!a185 || n390 + a185 < this.fragment.to) return h160;
                    }
                }
                this.index[e1127]++, r483 + h160.length >= Math.max(this.safeFrom, t1145) && (this.trees.push(h160), this.start.push(r483), this.index.push(0));
            } else this.index[e1127]++, this.nextStart = r483 + h160.length;
        }
    }
}, B9 = class {
    constructor(t1146, e1128){
        this.stream = e1128, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = t1146.tokenizers.map((s)=>new b11
        );
    }
    getActions(t1147) {
        let e1129 = 0, s487 = null, { parser: i626  } = t1147.p, { tokenizers: h161  } = i626, r484 = i626.stateSlot(t1147.state, 3), n391 = t1147.curContext ? t1147.curContext.hash : 0, a186 = 0;
        for(let l309 = 0; l309 < h161.length; l309++){
            if ((1 << l309 & r484) == 0) continue;
            let u90 = h161[l309], f121 = this.tokens[l309];
            if (!(s487 && !u90.fallback) && ((u90.contextual || f121.start != t1147.pos || f121.mask != r484 || f121.context != n391) && (this.updateCachedToken(f121, u90, t1147), f121.mask = r484, f121.context = n391), f121.lookAhead > f121.end + 25 && (a186 = Math.max(f121.lookAhead, a186)), f121.value != 0)) {
                let c148 = e1129;
                if (f121.extended > -1 && (e1129 = this.addActions(t1147, f121.extended, f121.end, e1129)), e1129 = this.addActions(t1147, f121.value, f121.end, e1129), !u90.extend && (s487 = f121, e1129 > c148)) break;
            }
        }
        for(; this.actions.length > e1129;)this.actions.pop();
        return a186 && t1147.setLookAhead(a186), !s487 && t1147.pos == this.stream.end && (s487 = new b11, s487.value = t1147.p.parser.eofTerm, s487.start = s487.end = t1147.pos, e1129 = this.addActions(t1147, s487.value, s487.end, e1129)), this.mainToken = s487, this.actions;
    }
    getMainToken(t1148) {
        if (this.mainToken) return this.mainToken;
        let e1130 = new b11, { pos: s488 , p: i627  } = t1148;
        return e1130.start = s488, e1130.end = Math.min(s488 + 1, i627.stream.end), e1130.value = s488 == i627.stream.end ? i627.parser.eofTerm : 0, e1130;
    }
    updateCachedToken(t1149, e1131, s489) {
        if (e1131.token(this.stream.reset(s489.pos, t1149), s489), t1149.value > -1) {
            let { parser: i628  } = s489.p;
            for(let h162 = 0; h162 < i628.specialized.length; h162++)if (i628.specialized[h162] == t1149.value) {
                let r485 = i628.specializers[h162](this.stream.read(t1149.start, t1149.end), s489);
                if (r485 >= 0 && s489.p.parser.dialect.allows(r485 >> 1)) {
                    (r485 & 1) == 0 ? t1149.value = r485 >> 1 : t1149.extended = r485 >> 1;
                    break;
                }
            }
        } else t1149.value = 0, t1149.end = Math.min(s489.p.stream.end, s489.pos + 1);
    }
    putAction(t1150, e1132, s490, i629) {
        for(let h163 = 0; h163 < i629; h163 += 3)if (this.actions[h163] == t1150) return i629;
        return this.actions[i629++] = t1150, this.actions[i629++] = e1132, this.actions[i629++] = s490, i629;
    }
    addActions(t1151, e1133, s491, i630) {
        let { state: h164  } = t1151, { parser: r486  } = t1151.p, { data: n392  } = r486;
        for(let a187 = 0; a187 < 2; a187++)for(let l310 = r486.stateSlot(h164, a187 ? 2 : 1);; l310 += 3){
            if (n392[l310] == 65535) if (n392[l310 + 1] == 1) l310 = k8(n392, l310 + 2);
            else {
                i630 == 0 && n392[l310 + 1] == 2 && (i630 = this.putAction(k8(n392, l310 + 1), e1133, s491, i630));
                break;
            }
            n392[l310] == e1133 && (i630 = this.putAction(k8(n392, l310 + 1), e1133, s491, i630));
        }
        return i630;
    }
}, L10;
(function(o323) {
    o323[o323.Distance = 5] = "Distance", o323[o323.MaxRemainingPerStep = 3] = "MaxRemainingPerStep", o323[o323.MinBufferLengthPrune = 500] = "MinBufferLengthPrune", o323[o323.ForceReduceLimit = 10] = "ForceReduceLimit", o323[o323.CutDepth = 15000] = "CutDepth", o323[o323.CutTo = 9000] = "CutTo";
})(L10 || (L10 = {}));
var $9 = class {
    constructor(t1152, e1134, s492, i631){
        this.parser = t1152, this.input = e1134, this.ranges = i631, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.stream = new M14(e1134, i631), this.tokens = new B9(t1152, this.stream), this.topTerm = t1152.top[1];
        let { from: h165  } = i631[0];
        this.stacks = [
            m7.start(this, t1152.top[0], h165)
        ], this.fragments = s492.length && this.stream.end - h165 > t1152.bufferLength * 4 ? new F9(s492, t1152.nodeSet) : null;
    }
    get parsedPos() {
        return this.minStackPos;
    }
    advance() {
        let t1153 = this.stacks, e1135 = this.minStackPos, s493 = this.stacks = [], i632, h166;
        for(let r487 = 0; r487 < t1153.length; r487++){
            let n393 = t1153[r487];
            for(;;){
                if (this.tokens.mainToken = null, n393.pos > e1135) s493.push(n393);
                else {
                    if (this.advanceStack(n393, s493, t1153)) continue;
                    {
                        i632 || (i632 = [], h166 = []), i632.push(n393);
                        let a188 = this.tokens.getMainToken(n393);
                        h166.push(a188.value, a188.end);
                    }
                }
                break;
            }
        }
        if (!s493.length) {
            let r488 = i632 && V7(i632);
            if (r488) return this.stackToTree(r488);
            if (this.parser.strict) throw p11 && i632 && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + e1135);
            this.recovering || (this.recovering = 5);
        }
        if (this.recovering && i632) {
            let r489 = this.stoppedAt != null && i632[0].pos > this.stoppedAt ? i632[0] : this.runRecovery(i632, h166, s493);
            if (r489) return this.stackToTree(r489.forceAll());
        }
        if (this.recovering) {
            let r490 = this.recovering == 1 ? 1 : this.recovering * 3;
            if (s493.length > r490) for(s493.sort((n394, a189)=>a189.score - n394.score
            ); s493.length > r490;)s493.pop();
            s493.some((n395)=>n395.reducePos > e1135
            ) && this.recovering--;
        } else if (s493.length > 1) {
            t: for(let r491 = 0; r491 < s493.length - 1; r491++){
                let n396 = s493[r491];
                for(let a190 = r491 + 1; a190 < s493.length; a190++){
                    let l311 = s493[a190];
                    if (n396.sameState(l311) || n396.buffer.length > 500 && l311.buffer.length > 500) if ((n396.score - l311.score || n396.buffer.length - l311.buffer.length) > 0) s493.splice(a190--, 1);
                    else {
                        s493.splice(r491--, 1);
                        continue t;
                    }
                }
            }
        }
        this.minStackPos = s493[0].pos;
        for(let r1102 = 1; r1102 < s493.length; r1102++)s493[r1102].pos < this.minStackPos && (this.minStackPos = s493[r1102].pos);
        return null;
    }
    stopAt(t1154) {
        if (this.stoppedAt != null && this.stoppedAt < t1154) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = t1154;
    }
    advanceStack(t1155, e1136, s494) {
        let i633 = t1155.pos, { parser: h167  } = this, r492 = p11 ? this.stackID(t1155) + " -> " : "";
        if (this.stoppedAt != null && i633 > this.stoppedAt) return t1155.forceReduce() ? t1155 : null;
        if (this.fragments) {
            let l312 = t1155.curContext && t1155.curContext.tracker.strict, u91 = l312 ? t1155.curContext.hash : 0;
            for(let f122 = this.fragments.nodeAt(i633); f122;){
                let c149 = this.parser.nodeSet.types[f122.type.id] == f122.type ? h167.getGoto(t1155.state, f122.type.id) : -1;
                if (c149 > -1 && f122.length && (!l312 || (f122.prop(y4.contextHash) || 0) == u91)) return t1155.useNode(f122, c149), p11 && console.log(r492 + this.stackID(t1155) + ` (via reuse of ${h167.getName(f122.type.id)})`), !0;
                if (!(f122 instanceof P5) || f122.children.length == 0 || f122.positions[0] > 0) break;
                let d85 = f122.children[0];
                if (d85 instanceof P5 && f122.positions[0] == 0) f122 = d85;
                else break;
            }
        }
        let n397 = h167.stateSlot(t1155.state, 4);
        if (n397 > 0) return t1155.reduce(n397), p11 && console.log(r492 + this.stackID(t1155) + ` (via always-reduce ${h167.getName(n397 & 65535)})`), !0;
        if (t1155.stack.length >= 15000) for(; t1155.stack.length > 9000 && t1155.forceReduce(););
        let a191 = this.tokens.getActions(t1155);
        for(let l313 = 0; l313 < a191.length;){
            let u92 = a191[l313++], f123 = a191[l313++], c150 = a191[l313++], d86 = l313 == a191.length || !s494, g53 = d86 ? t1155 : t1155.split();
            if (g53.apply(u92, f123, c150), p11 && console.log(r492 + this.stackID(g53) + ` (via ${(u92 & 65536) == 0 ? "shift" : `reduce of ${h167.getName(u92 & 65535)}`} for ${h167.getName(f123)} @ ${i633}${g53 == t1155 ? "" : ", split"})`), d86) return !0;
            g53.pos > i633 ? e1136.push(g53) : s494.push(g53);
        }
        return !1;
    }
    advanceFully(t1156, e1137) {
        let s495 = t1156.pos;
        for(;;){
            if (!this.advanceStack(t1156, null, null)) return !1;
            if (t1156.pos > s495) return R8(t1156, e1137), !0;
        }
    }
    runRecovery(t1157, e1138, s496) {
        let i634 = null, h168 = !1;
        for(let r493 = 0; r493 < t1157.length; r493++){
            let n398 = t1157[r493], a192 = e1138[r493 << 1], l314 = e1138[(r493 << 1) + 1], u93 = p11 ? this.stackID(n398) + " -> " : "";
            if (n398.deadEnd && (h168 || (h168 = !0, n398.restart(), p11 && console.log(u93 + this.stackID(n398) + " (restarted)"), this.advanceFully(n398, s496)))) continue;
            let f124 = n398.split(), c151 = u93;
            for(let d87 = 0; f124.forceReduce() && d87 < 10 && (p11 && console.log(c151 + this.stackID(f124) + " (via force-reduce)"), !this.advanceFully(f124, s496)); d87++)p11 && (c151 = this.stackID(f124) + " -> ");
            for (let d14 of n398.recoverByInsert(a192))p11 && console.log(u93 + this.stackID(d14) + " (via recover-insert)"), this.advanceFully(d14, s496);
            this.stream.end > n398.pos ? (l314 == n398.pos && (l314++, a192 = 0), n398.recoverByDelete(a192, l314), p11 && console.log(u93 + this.stackID(n398) + ` (via recover-delete ${this.parser.getName(a192)})`), R8(n398, s496)) : (!i634 || i634.score < n398.score) && (i634 = n398);
        }
        return i634;
    }
    stackToTree(t1158) {
        return t1158.close(), P5.build({
            buffer: x12.create(t1158),
            nodeSet: this.parser.nodeSet,
            topID: this.topTerm,
            maxBufferLength: this.parser.bufferLength,
            reused: this.reused,
            start: this.ranges[0].from,
            length: t1158.pos - this.ranges[0].from,
            minRepeatType: this.parser.minRepeatTerm
        });
    }
    stackID(t1159) {
        let e1139 = (C13 || (C13 = new WeakMap)).get(t1159);
        return e1139 || C13.set(t1159, e1139 = String.fromCodePoint(this.nextStackID++)), e1139 + t1159;
    }
};
function R8(o324, t1160) {
    for(let e1140 = 0; e1140 < t1160.length; e1140++){
        let s497 = t1160[e1140];
        if (s497.pos == o324.pos && s497.sameState(o324)) {
            t1160[e1140].score < o324.score && (t1160[e1140] = o324);
            return;
        }
    }
    t1160.push(o324);
}
var j10 = class {
    constructor(t1161, e1141, s498){
        this.source = t1161, this.flags = e1141, this.disabled = s498;
    }
    allows(t1162) {
        return !this.disabled || this.disabled[t1162] == 0;
    }
}, T15 = (o325)=>o325
, Q11 = class {
    constructor(t1163){
        this.start = t1163.start, this.shift = t1163.shift || T15, this.reduce = t1163.reduce || T15, this.reuse = t1163.reuse || T15, this.hash = t1163.hash || (()=>0
        ), this.strict = t1163.strict !== !1;
    }
}, v9 = class extends Ae2 {
    constructor(t1164){
        super();
        if (this.wrappers = [], t1164.version != 13) throw new RangeError(`Parser version (${t1164.version}) doesn't match runtime version (${13})`);
        let e1142 = t1164.nodeNames.split(" ");
        this.minRepeatTerm = e1142.length;
        for(let n4 = 0; n4 < t1164.repeatNodeCount; n4++)e1142.push("");
        let s499 = Object.keys(t1164.topRules).map((n399)=>t1164.topRules[n399][1]
        ), i635 = [];
        for(let n1100 = 0; n1100 < e1142.length; n1100++)i635.push([]);
        function h169(n400, a193, l315) {
            i635[n400].push([
                a193,
                a193.deserialize(String(l315))
            ]);
        }
        if (t1164.nodeProps) for (let n2 of t1164.nodeProps){
            let a194 = n2[0];
            for(let l316 = 1; l316 < n2.length;){
                let u94 = n2[l316++];
                if (u94 >= 0) h169(u94, a194, n2[l316++]);
                else {
                    let f125 = n2[l316 + -u94];
                    for(let c152 = -u94; c152 > 0; c152--)h169(n2[l316++], a194, f125);
                    l316++;
                }
            }
        }
        this.nodeSet = new Z1(e1142.map((n401, a195)=>B2.define({
                name: a195 >= this.minRepeatTerm ? void 0 : n401,
                id: a195,
                props: i635[a195],
                top: s499.indexOf(a195) > -1,
                error: a195 == 0,
                skipped: t1164.skippedNodes && t1164.skippedNodes.indexOf(a195) > -1
            })
        )), this.strict = !1, this.bufferLength = we2;
        let r494 = A10(t1164.tokenData);
        if (this.context = t1164.context, this.specialized = new Uint16Array(t1164.specialized ? t1164.specialized.length : 0), this.specializers = [], t1164.specialized) for(let n3 = 0; n3 < t1164.specialized.length; n3++)this.specialized[n3] = t1164.specialized[n3].term, this.specializers[n3] = t1164.specialized[n3].get;
        this.states = A10(t1164.states, Uint32Array), this.data = A10(t1164.stateData), this.goto = A10(t1164.goto), this.maxTerm = t1164.maxTerm, this.tokenizers = t1164.tokenizers.map((n402)=>typeof n402 == "number" ? new P11(r494, n402) : n402
        ), this.topRules = t1164.topRules, this.dialects = t1164.dialects || {}, this.dynamicPrecedences = t1164.dynamicPrecedences || null, this.tokenPrecTable = t1164.tokenPrec, this.termNames = t1164.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
    }
    createParse(t1165, e1143, s500) {
        let i636 = new $9(this, t1165, e1143, s500);
        for (let h170 of this.wrappers)i636 = h170(i636, t1165, e1143, s500);
        return i636;
    }
    getGoto(t1166, e1144, s501 = !1) {
        let i637 = this.goto;
        if (e1144 >= i637[0]) return -1;
        for(let h171 = i637[e1144 + 1];;){
            let r495 = i637[h171++], n403 = r495 & 1, a196 = i637[h171++];
            if (n403 && s501) return a196;
            for(let l317 = h171 + (r495 >> 1); h171 < l317; h171++)if (i637[h171] == t1166) return a196;
            if (n403) return -1;
        }
    }
    hasAction(t1167, e1145) {
        let s502 = this.data;
        for(let i638 = 0; i638 < 2; i638++)for(let h172 = this.stateSlot(t1167, i638 ? 2 : 1), r496;; h172 += 3){
            if ((r496 = s502[h172]) == 65535) if (s502[h172 + 1] == 1) r496 = s502[h172 = k8(s502, h172 + 2)];
            else {
                if (s502[h172 + 1] == 2) return k8(s502, h172 + 2);
                break;
            }
            if (r496 == e1145 || r496 == 0) return k8(s502, h172 + 1);
        }
        return 0;
    }
    stateSlot(t1168, e1146) {
        return this.states[t1168 * 6 + e1146];
    }
    stateFlag(t1169, e1147) {
        return (this.stateSlot(t1169, 0) & e1147) > 0;
    }
    validAction(t1170, e1148) {
        if (e1148 == this.stateSlot(t1170, 4)) return !0;
        for(let s503 = this.stateSlot(t1170, 1);; s503 += 3){
            if (this.data[s503] == 65535) if (this.data[s503 + 1] == 1) s503 = k8(this.data, s503 + 2);
            else return !1;
            if (e1148 == k8(this.data, s503 + 1)) return !0;
        }
    }
    nextStates(t1171) {
        let e1149 = [];
        for(let s504 = this.stateSlot(t1171, 1);; s504 += 3){
            if (this.data[s504] == 65535) if (this.data[s504 + 1] == 1) s504 = k8(this.data, s504 + 2);
            else break;
            if ((this.data[s504 + 2] & 65536 >> 16) == 0) {
                let i639 = this.data[s504 + 1];
                e1149.some((h173, r497)=>r497 & 1 && h173 == i639
                ) || e1149.push(this.data[s504], i639);
            }
        }
        return e1149;
    }
    overrides(t1172, e1150) {
        let s505 = G6(this.data, this.tokenPrecTable, e1150);
        return s505 < 0 || G6(this.data, this.tokenPrecTable, t1172) < s505;
    }
    configure(t1173) {
        let e1151 = Object.assign(Object.create(v9.prototype), this);
        if (t1173.props && (e1151.nodeSet = this.nodeSet.extend(...t1173.props)), t1173.top) {
            let s506 = this.topRules[t1173.top];
            if (!s506) throw new RangeError(`Invalid top rule name ${t1173.top}`);
            e1151.top = s506;
        }
        return t1173.tokenizers && (e1151.tokenizers = this.tokenizers.map((s507)=>{
            let i640 = t1173.tokenizers.find((h174)=>h174.from == s507
            );
            return i640 ? i640.to : s507;
        })), t1173.contextTracker && (e1151.context = t1173.contextTracker), t1173.dialect && (e1151.dialect = this.parseDialect(t1173.dialect)), t1173.strict != null && (e1151.strict = t1173.strict), t1173.wrap && (e1151.wrappers = e1151.wrappers.concat(t1173.wrap)), t1173.bufferLength != null && (e1151.bufferLength = t1173.bufferLength), e1151;
    }
    getName(t1174) {
        return this.termNames ? this.termNames[t1174] : String(t1174 <= this.maxNode && this.nodeSet.types[t1174].name || t1174);
    }
    get eofTerm() {
        return this.maxNode + 1;
    }
    get topNode() {
        return this.nodeSet.types[this.top[1]];
    }
    dynamicPrecedence(t1175) {
        let e1152 = this.dynamicPrecedences;
        return e1152 == null ? 0 : e1152[t1175] || 0;
    }
    parseDialect(t1176) {
        let e1153 = Object.keys(this.dialects), s508 = e1153.map(()=>!1
        );
        if (t1176) for (let h175 of t1176.split(" ")){
            let r498 = e1153.indexOf(h175);
            r498 >= 0 && (s508[r498] = !0);
        }
        let i641 = null;
        for(let h210 = 0; h210 < e1153.length; h210++)if (!s508[h210]) for(let r499 = this.dialects[e1153[h210]], n404; (n404 = this.data[r499++]) != 65535;)(i641 || (i641 = new Uint8Array(this.maxTerm + 1)))[n404] = 1;
        return new j10(t1176, s508, i641);
    }
    static deserialize(t1177) {
        return new v9(t1177);
    }
};
function k8(o326, t1178) {
    return o326[t1178] | o326[t1178 + 1] << 16;
}
function G6(o327, t1179, e1154) {
    for(let s509 = t1179, i642; (i642 = o327[s509]) != 65535; s509++)if (i642 == e1154) return s509 - t1179;
    return -1;
}
function V7(o328) {
    let t1180 = null;
    for (let e1155 of o328){
        let s510 = e1155.p.stoppedAt;
        (e1155.pos == e1155.p.stream.end || s510 != null && e1155.pos > s510) && e1155.p.parser.stateFlag(e1155.state, 2) && (!t1180 || t1180.score < e1155.score) && (t1180 = e1155);
    }
    return t1180;
}
var s4 = 93, W9 = 1, y10 = 94, c5 = 95, r2 = 2, S14 = [
    9,
    10,
    11,
    12,
    13,
    32,
    133,
    160,
    5760,
    8192,
    8193,
    8194,
    8195,
    8196,
    8197,
    8198,
    8199,
    8200,
    8201,
    8202,
    8232,
    8233,
    8239,
    8287,
    12288
], R9 = 58, l1 = 40, X8 = 95, d9 = 91, $10 = 45, p12 = 46, f6 = 35, T16 = 37;
function t1(O17) {
    return O17 >= 65 && O17 <= 90 || O17 >= 97 && O17 <= 122 || O17 >= 161;
}
function Z6(O18) {
    return O18 >= 48 && O18 <= 57;
}
var _10 = new J9((O19, Q14)=>{
    for(let a197 = !1, P15 = 0, z18 = 0;; z18++){
        let { next: e1156  } = O19;
        if (t1(e1156) || e1156 == $10 || e1156 == X8 || a197 && Z6(e1156)) !a197 && (e1156 != $10 || z18 > 0) && (a197 = !0), P15 === z18 && e1156 == $10 && P15++, O19.advance();
        else {
            a197 && O19.acceptToken(e1156 == l1 ? y10 : P15 == 2 && Q14.canShift(r2) ? r2 : c5);
            break;
        }
    }
}), g7 = new J9((O20)=>{
    if (S14.includes(O20.peek(-1))) {
        let { next: Q15  } = O20;
        (t1(Q15) || Q15 == X8 || Q15 == f6 || Q15 == p12 || Q15 == d9 || Q15 == R9 || Q15 == $10) && O20.acceptToken(s4);
    }
}), h3 = new J9((O21)=>{
    if (!S14.includes(O21.peek(-1))) {
        let { next: Q16  } = O21;
        if (Q16 == T16 && (O21.advance(), O21.acceptToken(W9)), t1(Q16)) {
            do O21.advance();
            while (t1(O21.next))
            O21.acceptToken(W9);
        }
    }
}), U6 = {
    __proto__: null,
    lang: 32,
    "nth-child": 32,
    "nth-last-child": 32,
    "nth-of-type": 32,
    dir: 32,
    url: 60,
    "url-prefix": 60,
    domain: 60,
    regexp: 60,
    selector: 134
}, b12 = {
    __proto__: null,
    "@import": 114,
    "@media": 138,
    "@charset": 142,
    "@namespace": 146,
    "@keyframes": 152,
    "@supports": 164
}, m8 = {
    __proto__: null,
    not: 128,
    only: 128,
    from: 158,
    to: 160
}, w15 = v9.deserialize({
    version: 13,
    states: "7WOYQ[OOOOQP'#Cd'#CdOOQP'#Cc'#CcO!ZQ[O'#CfO!}QXO'#CaO#UQ[O'#ChO#aQ[O'#DPO#fQ[O'#DTOOQP'#Ec'#EcO#kQdO'#DeO$VQ[O'#DrO#kQdO'#DtO$hQ[O'#DvO$sQ[O'#DyO$xQ[O'#EPO%WQ[O'#EROOQS'#Eb'#EbOOQS'#ES'#ESQYQ[OOOOQP'#Cg'#CgOOQP,59Q,59QO!ZQ[O,59QO%_Q[O'#EVO%yQWO,58{O&RQ[O,59SO#aQ[O,59kO#fQ[O,59oO%_Q[O,59sO%_Q[O,59uO%_Q[O,59vO'bQ[O'#D`OOQS,58{,58{OOQP'#Ck'#CkOOQO'#C}'#C}OOQP,59S,59SO'iQWO,59SO'nQWO,59SOOQP'#DR'#DROOQP,59k,59kOOQO'#DV'#DVO'sQ`O,59oOOQS'#Cp'#CpO#kQdO'#CqO'{QvO'#CsO)VQtO,5:POOQO'#Cx'#CxO'iQWO'#CwO)kQWO'#CyOOQS'#Ef'#EfOOQO'#Dh'#DhO)pQ[O'#DoO*OQWO'#EiO$xQ[O'#DmO*^QWO'#DpOOQO'#Ej'#EjO%|QWO,5:^O*cQpO,5:`OOQS'#Dx'#DxO*kQWO,5:bO*pQ[O,5:bOOQO'#D{'#D{O*xQWO,5:eO*}QWO,5:kO+VQWO,5:mOOQS-E8Q-E8QOOQP1G.l1G.lO+yQXO,5:qOOQO-E8T-E8TOOQS1G.g1G.gOOQP1G.n1G.nO'iQWO1G.nO'nQWO1G.nOOQP1G/V1G/VO,WQ`O1G/ZO,qQXO1G/_O-XQXO1G/aO-oQXO1G/bO.VQXO'#CdO.zQWO'#DaOOQS,59z,59zO/PQWO,59zO/XQ[O,59zO/`QdO'#CoO/gQ[O'#DOOOQP1G/Z1G/ZO#kQdO1G/ZO/nQpO,59]OOQS,59_,59_O#kQdO,59aO/vQWO1G/kOOQS,59c,59cO/{Q!bO,59eO0TQWO'#DhO0`QWO,5:TO0eQWO,5:ZO$xQ[O,5:VO$xQ[O'#EYO0mQWO,5;TO0xQWO,5:XO%_Q[O,5:[OOQS1G/x1G/xOOQS1G/z1G/zOOQS1G/|1G/|O1ZQWO1G/|O1`QdO'#D|OOQS1G0P1G0POOQS1G0V1G0VOOQS1G0X1G0XOOQP7+$Y7+$YOOQP7+$u7+$uO#kQdO7+$uO#kQdO,59{O1nQ[O'#EXO1xQWO1G/fOOQS1G/f1G/fO1xQWO1G/fO2QQtO'#ETO2uQdO'#EeO3PQWO,59ZO3UQXO'#EhO3]QWO,59jO3bQpO7+$uOOQS1G.w1G.wOOQS1G.{1G.{OOQS7+%V7+%VO3jQWO1G/PO#kQdO1G/oOOQO1G/u1G/uOOQO1G/q1G/qO3oQWO,5:tOOQO-E8W-E8WO3}QXO1G/vOOQS7+%h7+%hO4UQYO'#CsO%|QWO'#EZO4^QdO,5:hOOQS,5:h,5:hO4lQpO<<HaO4tQtO1G/gOOQO,5:s,5:sO5XQ[O,5:sOOQO-E8V-E8VOOQS7+%Q7+%QO5cQWO7+%QOOQS-E8R-E8RO#kQdO'#EUO5kQWO,5;POOQT1G.u1G.uO5sQWO,5;SOOQP1G/U1G/UOOQP<<Ha<<HaOOQS7+$k7+$kO5{QdO7+%ZOOQO7+%b7+%bOOQS,5:u,5:uOOQS-E8X-E8XOOQS1G0S1G0SOOQPAN={AN={O6SQtO'#EWO#kQdO'#EWO6}QdO7+%ROOQO7+%R7+%ROOQO1G0_1G0_OOQS<<Hl<<HlO7_QdO,5:pOOQO-E8S-E8SOOQO<<Hu<<HuO7iQtO,5:rOOQS-E8U-E8UOOQO<<Hm<<Hm",
    stateData: "8j~O#TOSROS~OUWOXWO]TO^TOtUOxVO!Y_O!ZXO!gYO!iZO!k[O!n]O!t^O#RPO#WRO~O#RcO~O]hO^hOpfOtiOxjO|kO!PmO#PlO#WeO~O!RnO~P!`O`sO#QqO#RpO~O#RuO~O#RwO~OQ!QObzOf!QOh!QOn!PO#Q}O#RyO#Z{O~Ob!SO!b!UO!e!VO#R!RO!R#]P~Oh![On!PO#R!ZO~O#R!^O~Ob!SO!b!UO!e!VO#R!RO~O!W#]P~P$VOUWOXWO]TO^TOtUOxVO#RPO#WRO~OpfO!RnO~O`!hO#QqO#RpO~OQ!pOUWOXWO]TO^TOtUOxVO!Y_O!ZXO!gYO!iZO!k[O!n]O!t^O#R!oO#WRO~O!Q!qO~P&^Ob!tO~Ob!uO~Ov!vOz!wO~OP!yObgXjgX!WgX!bgX!egX#RgXagXQgXfgXhgXngXpgX#QgX#ZgXvgX!QgX!VgX~Ob!SOj!zO!b!UO!e!VO#R!RO!W#]P~Ob!}O~Ob!SO!b!UO!e!VO#R#OO~Op#SO!`#RO!R#]X!W#]X~Ob#VO~Oj!zO!W#XO~O!W#YO~Oh#ZOn!PO~O!R#[O~O!RnO!`#RO~O!RnO!W#_O~O]hO^hOtiOxjO|kO!PmO#PlO#WeO~Op!ya!R!yaa!ya~P+_Ov#aOz#bO~O]hO^hOtiOxjO#WeO~Op{i|{i!P{i!R{i#P{ia{i~P,`Op}i|}i!P}i!R}i#P}ia}i~P,`Op!Oi|!Oi!P!Oi!R!Oi#P!Oia!Oi~P,`O]WX]!UX^WXpWXtWXxWX|WX!PWX!RWX#PWX#WWX~O]#cO~O!Q#fO!W#dO~O!Q#fO~P&^Oa#XP~P#kOa#[P~P%_Oa#nOj!zO~O!W#pO~Oh#qOo#qO~O]!^Xa![X!`![X~O]#rO~Oa#sO!`#RO~Op#SO!R#]a!W#]a~O!`#ROp!aa!R!aa!W!aaa!aa~O!W#xO~O!Q#|O!q#zO!r#zO#Z#yO~O!Q!{X!W!{X~P&^O!Q$SO!W#dO~Oj!zOQ!wXa!wXb!wXf!wXh!wXn!wXp!wX#Q!wX#R!wX#Z!wX~Op$VOa#XX~P#kOa$XO~Oa#[X~P!`Oa$ZO~Oj!zOv$[O~Oa$]O~O!`#ROp!|a!R!|a!W!|a~Oa$_O~P+_OP!yO!RgX~O!Q$bO!q#zO!r#zO#Z#yO~Oj!zOv$cO~Oj!zOp$eO!V$gO!Q!Ti!W!Ti~P#kO!Q!{a!W!{a~P&^O!Q$iO!W#dO~Op$VOa#Xa~OpfOa#[a~Oa$lO~P#kOj!zOQ!zXb!zXf!zXh!zXn!zXp!zX!Q!zX!V!zX!W!zX#Q!zX#R!zX#Z!zX~Op$eO!V$oO!Q!Tq!W!Tq~P#kOa!xap!xa~P#kOj!zOQ!zab!zaf!zah!zan!zap!za!Q!za!V!za!W!za#Q!za#R!za#Z!za~Oo#Zj!Pj~",
    goto: ",O#_PPPPP#`P#h#vP#h$U#hPP$[PPP$b$k$kP$}P$kP$k%e%wPPP&a&g#hP&mP#hP&sP#hP#h#hPPP&y']'iPP#`PP'o'o'y'oP'oP'o'oP#`P#`P#`P'|#`P(P(SPP#`P#`(V(e(s(y)T)Z)e)kPPPPPP)q)yP*e*hP+^+a+j]`Obn!s#d$QiWObfklmn!s!u#V#d$QiQObfklmn!s!u#V#d$QQdRR!ceQrTR!ghQ!gsQ!|!OR#`!hq!QXZz!t!w!z#b#c#i#r$O$V$^$e$f$jp!QXZz!t!w!z#b#c#i#r$O$V$^$e$f$jT#z#[#{q!OXZz!t!w!z#b#c#i#r$O$V$^$e$f$jp!QXZz!t!w!z#b#c#i#r$O$V$^$e$f$jQ![[R#Z!]QtTR!ihQ!gtR#`!iQvUR!jiQxVR!kjQoSQ!fgQ#W!XQ#^!`Q#_!aR$`#zQ!rnQ#g!sQ$P#dR$h$QX!pn!s#d$Qa!WY^_|!S!U#R#SR#P!SR!][R!_]R#]!_QbOU!bb!s$QQ!snR$Q#dQ#i!tU$U#i$^$jQ$^#rR$j$VQ$W#iR$k$WQgSS!eg$YR$Y#kQ$f$OR$n$fQ#e!rS$R#e$TR$T#gQ#T!TR#v#TQ#{#[R$a#{]aObn!s#d$Q[SObn!s#d$QQ!dfQ!lkQ!mlQ!nmQ#k!uR#w#VR#j!tQ|XQ!YZQ!xz[#h!t#i#r$V$^$jQ#m!wQ#o!zQ#}#bQ$O#cS$d$O$fR$m$eR#l!uQ!XYQ!a_R!{|U!TY_|Q!`^Q#Q!SQ#U!UQ#t#RR#u#S",
    nodeNames: "\u26A0 Unit VariableName Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee CallLiteral CallTag ParenthesizedContent , PseudoClassName ArgList IdSelector # IdName ] AttributeSelector [ AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp } { Block Declaration PropertyName Important ; ImportStatement AtKeyword import KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList from to SupportsStatement supports AtRule",
    maxTerm: 106,
    nodeProps: [
        [
            y4.openedBy,
            17,
            "(",
            48,
            "{"
        ],
        [
            y4.closedBy,
            18,
            ")",
            49,
            "}"
        ]
    ],
    skippedNodes: [
        0,
        3
    ],
    repeatNodeCount: 8,
    tokenData: "Ay~R![OX$wX^%]^p$wpq%]qr(crs+}st,otu2Uuv$wvw2rwx2}xy3jyz3uz{3z{|4_|}8U}!O8a!O!P8x!P!Q9Z!Q![;e![!]<Y!]!^<x!^!_$w!_!`=T!`!a=`!a!b$w!b!c>O!c!}$w!}#O?[#O#P$w#P#Q?g#Q#R2U#R#T$w#T#U?r#U#c$w#c#d@q#d#o$w#o#pAQ#p#q2U#q#rA]#r#sAh#s#y$w#y#z%]#z$f$w$f$g%]$g#BY$w#BY#BZ%]#BZ$IS$w$IS$I_%]$I_$I|$w$I|$JO%]$JO$JT$w$JT$JU%]$JU$KV$w$KV$KW%]$KW&FU$w&FU&FV%]&FV~$wW$zQOy%Qz~%QW%VQoWOy%Qz~%Q~%bf#T~OX%QX^&v^p%Qpq&vqy%Qz#y%Q#y#z&v#z$f%Q$f$g&v$g#BY%Q#BY#BZ&v#BZ$IS%Q$IS$I_&v$I_$I|%Q$I|$JO&v$JO$JT%Q$JT$JU&v$JU$KV%Q$KV$KW&v$KW&FU%Q&FU&FV&v&FV~%Q~&}f#T~oWOX%QX^&v^p%Qpq&vqy%Qz#y%Q#y#z&v#z$f%Q$f$g&v$g#BY%Q#BY#BZ&v#BZ$IS%Q$IS$I_&v$I_$I|%Q$I|$JO&v$JO$JT%Q$JT$JU&v$JU$KV%Q$KV$KW&v$KW&FU%Q&FU&FV&v&FV~%Q^(fSOy%Qz#]%Q#]#^(r#^~%Q^(wSoWOy%Qz#a%Q#a#b)T#b~%Q^)YSoWOy%Qz#d%Q#d#e)f#e~%Q^)kSoWOy%Qz#c%Q#c#d)w#d~%Q^)|SoWOy%Qz#f%Q#f#g*Y#g~%Q^*_SoWOy%Qz#h%Q#h#i*k#i~%Q^*pSoWOy%Qz#T%Q#T#U*|#U~%Q^+RSoWOy%Qz#b%Q#b#c+_#c~%Q^+dSoWOy%Qz#h%Q#h#i+p#i~%Q^+wQ!VUoWOy%Qz~%Q~,QUOY+}Zr+}rs,ds#O+}#O#P,i#P~+}~,iOh~~,lPO~+}_,tWtPOy%Qz!Q%Q!Q![-^![!c%Q!c!i-^!i#T%Q#T#Z-^#Z~%Q^-cWoWOy%Qz!Q%Q!Q![-{![!c%Q!c!i-{!i#T%Q#T#Z-{#Z~%Q^.QWoWOy%Qz!Q%Q!Q![.j![!c%Q!c!i.j!i#T%Q#T#Z.j#Z~%Q^.qWfUoWOy%Qz!Q%Q!Q![/Z![!c%Q!c!i/Z!i#T%Q#T#Z/Z#Z~%Q^/bWfUoWOy%Qz!Q%Q!Q![/z![!c%Q!c!i/z!i#T%Q#T#Z/z#Z~%Q^0PWoWOy%Qz!Q%Q!Q![0i![!c%Q!c!i0i!i#T%Q#T#Z0i#Z~%Q^0pWfUoWOy%Qz!Q%Q!Q![1Y![!c%Q!c!i1Y!i#T%Q#T#Z1Y#Z~%Q^1_WoWOy%Qz!Q%Q!Q![1w![!c%Q!c!i1w!i#T%Q#T#Z1w#Z~%Q^2OQfUoWOy%Qz~%QY2XSOy%Qz!_%Q!_!`2e!`~%QY2lQzQoWOy%Qz~%QX2wQXPOy%Qz~%Q~3QUOY2}Zw2}wx,dx#O2}#O#P3d#P~2}~3gPO~2}_3oQbVOy%Qz~%Q~3zOa~_4RSUPjSOy%Qz!_%Q!_!`2e!`~%Q_4fUjS!PPOy%Qz!O%Q!O!P4x!P!Q%Q!Q![7_![~%Q^4}SoWOy%Qz!Q%Q!Q![5Z![~%Q^5bWoW#ZUOy%Qz!Q%Q!Q![5Z![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%Q^6PWoWOy%Qz{%Q{|6i|}%Q}!O6i!O!Q%Q!Q![6z![~%Q^6nSoWOy%Qz!Q%Q!Q![6z![~%Q^7RSoW#ZUOy%Qz!Q%Q!Q![6z![~%Q^7fYoW#ZUOy%Qz!O%Q!O!P5Z!P!Q%Q!Q![7_![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%Q_8ZQpVOy%Qz~%Q^8fUjSOy%Qz!O%Q!O!P4x!P!Q%Q!Q![7_![~%Q_8}S#WPOy%Qz!Q%Q!Q![5Z![~%Q~9`RjSOy%Qz{9i{~%Q~9nSoWOy9iyz9zz{:o{~9i~9}ROz9zz{:W{~9z~:ZTOz9zz{:W{!P9z!P!Q:j!Q~9z~:oOR~~:tUoWOy9iyz9zz{:o{!P9i!P!Q;W!Q~9i~;_QR~oWOy%Qz~%Q^;jY#ZUOy%Qz!O%Q!O!P5Z!P!Q%Q!Q![7_![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%QX<_S]POy%Qz![%Q![!]<k!]~%QX<rQ^PoWOy%Qz~%Q_<}Q!WVOy%Qz~%QY=YQzQOy%Qz~%QX=eS|POy%Qz!`%Q!`!a=q!a~%QX=xQ|PoWOy%Qz~%QX>RUOy%Qz!c%Q!c!}>e!}#T%Q#T#o>e#o~%QX>lY!YPoWOy%Qz}%Q}!O>e!O!Q%Q!Q![>e![!c%Q!c!}>e!}#T%Q#T#o>e#o~%QX?aQxPOy%Qz~%Q^?lQvUOy%Qz~%QX?uSOy%Qz#b%Q#b#c@R#c~%QX@WSoWOy%Qz#W%Q#W#X@d#X~%QX@kQ!`PoWOy%Qz~%QX@tSOy%Qz#f%Q#f#g@d#g~%QXAVQ!RPOy%Qz~%Q_AbQ!QVOy%Qz~%QZAmS!PPOy%Qz!_%Q!_!`2e!`~%Q",
    tokenizers: [
        g7,
        h3,
        _10,
        0,
        1,
        2,
        3
    ],
    topRules: {
        StyleSheet: [
            0,
            4
        ]
    },
    specialized: [
        {
            term: 94,
            get: (O22)=>U6[O22] || -1
        },
        {
            term: 56,
            get: (O23)=>b12[O23] || -1
        },
        {
            term: 95,
            get: (O24)=>m8[O24] || -1
        }
    ],
    tokenPrec: 1078
});
var d10 = null;
function c6() {
    if (!d10 && typeof document == "object" && document.body) {
        let a198 = [];
        for(let o1 in document.body.style)/[A-Z]|^-|^(item|length)$/.test(o1) || a198.push(o1);
        d10 = a198.sort().map((o329)=>({
                type: "property",
                label: o329
            })
        );
    }
    return d10 || [];
}
var p13 = [
    "active",
    "after",
    "before",
    "checked",
    "default",
    "disabled",
    "empty",
    "enabled",
    "first-child",
    "first-letter",
    "first-line",
    "first-of-type",
    "focus",
    "hover",
    "in-range",
    "indeterminate",
    "invalid",
    "lang",
    "last-child",
    "last-of-type",
    "link",
    "not",
    "nth-child",
    "nth-last-child",
    "nth-last-of-type",
    "nth-of-type",
    "only-of-type",
    "only-child",
    "optional",
    "out-of-range",
    "placeholder",
    "read-only",
    "read-write",
    "required",
    "root",
    "selection",
    "target",
    "valid",
    "visited"
].map((a199)=>({
        type: "class",
        label: a199
    })
), u6 = [
    "above",
    "absolute",
    "activeborder",
    "additive",
    "activecaption",
    "after-white-space",
    "ahead",
    "alias",
    "all",
    "all-scroll",
    "alphabetic",
    "alternate",
    "always",
    "antialiased",
    "appworkspace",
    "asterisks",
    "attr",
    "auto",
    "auto-flow",
    "avoid",
    "avoid-column",
    "avoid-page",
    "avoid-region",
    "axis-pan",
    "background",
    "backwards",
    "baseline",
    "below",
    "bidi-override",
    "blink",
    "block",
    "block-axis",
    "bold",
    "bolder",
    "border",
    "border-box",
    "both",
    "bottom",
    "break",
    "break-all",
    "break-word",
    "bullets",
    "button",
    "button-bevel",
    "buttonface",
    "buttonhighlight",
    "buttonshadow",
    "buttontext",
    "calc",
    "capitalize",
    "caps-lock-indicator",
    "caption",
    "captiontext",
    "caret",
    "cell",
    "center",
    "checkbox",
    "circle",
    "cjk-decimal",
    "clear",
    "clip",
    "close-quote",
    "col-resize",
    "collapse",
    "color",
    "color-burn",
    "color-dodge",
    "column",
    "column-reverse",
    "compact",
    "condensed",
    "contain",
    "content",
    "contents",
    "content-box",
    "context-menu",
    "continuous",
    "copy",
    "counter",
    "counters",
    "cover",
    "crop",
    "cross",
    "crosshair",
    "currentcolor",
    "cursive",
    "cyclic",
    "darken",
    "dashed",
    "decimal",
    "decimal-leading-zero",
    "default",
    "default-button",
    "dense",
    "destination-atop",
    "destination-in",
    "destination-out",
    "destination-over",
    "difference",
    "disc",
    "discard",
    "disclosure-closed",
    "disclosure-open",
    "document",
    "dot-dash",
    "dot-dot-dash",
    "dotted",
    "double",
    "down",
    "e-resize",
    "ease",
    "ease-in",
    "ease-in-out",
    "ease-out",
    "element",
    "ellipse",
    "ellipsis",
    "embed",
    "end",
    "ethiopic-abegede-gez",
    "ethiopic-halehame-aa-er",
    "ethiopic-halehame-gez",
    "ew-resize",
    "exclusion",
    "expanded",
    "extends",
    "extra-condensed",
    "extra-expanded",
    "fantasy",
    "fast",
    "fill",
    "fill-box",
    "fixed",
    "flat",
    "flex",
    "flex-end",
    "flex-start",
    "footnotes",
    "forwards",
    "from",
    "geometricPrecision",
    "graytext",
    "grid",
    "groove",
    "hand",
    "hard-light",
    "help",
    "hidden",
    "hide",
    "higher",
    "highlight",
    "highlighttext",
    "horizontal",
    "hsl",
    "hsla",
    "hue",
    "icon",
    "ignore",
    "inactiveborder",
    "inactivecaption",
    "inactivecaptiontext",
    "infinite",
    "infobackground",
    "infotext",
    "inherit",
    "initial",
    "inline",
    "inline-axis",
    "inline-block",
    "inline-flex",
    "inline-grid",
    "inline-table",
    "inset",
    "inside",
    "intrinsic",
    "invert",
    "italic",
    "justify",
    "keep-all",
    "landscape",
    "large",
    "larger",
    "left",
    "level",
    "lighter",
    "lighten",
    "line-through",
    "linear",
    "linear-gradient",
    "lines",
    "list-item",
    "listbox",
    "listitem",
    "local",
    "logical",
    "loud",
    "lower",
    "lower-hexadecimal",
    "lower-latin",
    "lower-norwegian",
    "lowercase",
    "ltr",
    "luminosity",
    "manipulation",
    "match",
    "matrix",
    "matrix3d",
    "medium",
    "menu",
    "menutext",
    "message-box",
    "middle",
    "min-intrinsic",
    "mix",
    "monospace",
    "move",
    "multiple",
    "multiple_mask_images",
    "multiply",
    "n-resize",
    "narrower",
    "ne-resize",
    "nesw-resize",
    "no-close-quote",
    "no-drop",
    "no-open-quote",
    "no-repeat",
    "none",
    "normal",
    "not-allowed",
    "nowrap",
    "ns-resize",
    "numbers",
    "numeric",
    "nw-resize",
    "nwse-resize",
    "oblique",
    "opacity",
    "open-quote",
    "optimizeLegibility",
    "optimizeSpeed",
    "outset",
    "outside",
    "outside-shape",
    "overlay",
    "overline",
    "padding",
    "padding-box",
    "painted",
    "page",
    "paused",
    "perspective",
    "pinch-zoom",
    "plus-darker",
    "plus-lighter",
    "pointer",
    "polygon",
    "portrait",
    "pre",
    "pre-line",
    "pre-wrap",
    "preserve-3d",
    "progress",
    "push-button",
    "radial-gradient",
    "radio",
    "read-only",
    "read-write",
    "read-write-plaintext-only",
    "rectangle",
    "region",
    "relative",
    "repeat",
    "repeating-linear-gradient",
    "repeating-radial-gradient",
    "repeat-x",
    "repeat-y",
    "reset",
    "reverse",
    "rgb",
    "rgba",
    "ridge",
    "right",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "round",
    "row",
    "row-resize",
    "row-reverse",
    "rtl",
    "run-in",
    "running",
    "s-resize",
    "sans-serif",
    "saturation",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "screen",
    "scroll",
    "scrollbar",
    "scroll-position",
    "se-resize",
    "self-start",
    "self-end",
    "semi-condensed",
    "semi-expanded",
    "separate",
    "serif",
    "show",
    "single",
    "skew",
    "skewX",
    "skewY",
    "skip-white-space",
    "slide",
    "slider-horizontal",
    "slider-vertical",
    "sliderthumb-horizontal",
    "sliderthumb-vertical",
    "slow",
    "small",
    "small-caps",
    "small-caption",
    "smaller",
    "soft-light",
    "solid",
    "source-atop",
    "source-in",
    "source-out",
    "source-over",
    "space",
    "space-around",
    "space-between",
    "space-evenly",
    "spell-out",
    "square",
    "start",
    "static",
    "status-bar",
    "stretch",
    "stroke",
    "stroke-box",
    "sub",
    "subpixel-antialiased",
    "svg_masks",
    "super",
    "sw-resize",
    "symbolic",
    "symbols",
    "system-ui",
    "table",
    "table-caption",
    "table-cell",
    "table-column",
    "table-column-group",
    "table-footer-group",
    "table-header-group",
    "table-row",
    "table-row-group",
    "text",
    "text-bottom",
    "text-top",
    "textarea",
    "textfield",
    "thick",
    "thin",
    "threeddarkshadow",
    "threedface",
    "threedhighlight",
    "threedlightshadow",
    "threedshadow",
    "to",
    "top",
    "transform",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ",
    "transparent",
    "ultra-condensed",
    "ultra-expanded",
    "underline",
    "unidirectional-pan",
    "unset",
    "up",
    "upper-latin",
    "uppercase",
    "url",
    "var",
    "vertical",
    "vertical-text",
    "view-box",
    "visible",
    "visibleFill",
    "visiblePainted",
    "visibleStroke",
    "visual",
    "w-resize",
    "wait",
    "wave",
    "wider",
    "window",
    "windowframe",
    "windowtext",
    "words",
    "wrap",
    "wrap-reverse",
    "x-large",
    "x-small",
    "xor",
    "xx-large",
    "xx-small"
].map((a200)=>({
        type: "keyword",
        label: a200
    })
).concat([
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "grey",
    "green",
    "greenyellow",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen"
].map((a201)=>({
        type: "constant",
        label: a201
    })
)), N9 = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "b",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "figcaption",
    "figure",
    "footer",
    "form",
    "header",
    "hgroup",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "meter",
    "nav",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "tr",
    "u",
    "ul"
].map((a202)=>({
        type: "type",
        label: a202
    })
), r3 = /^[\w-]*/, z12 = (a203)=>{
    let { state: o330 , pos: i643  } = a203, t1181 = v3(o330).resolveInner(i643, -1);
    if (t1181.name == "PropertyName") return {
        from: t1181.from,
        options: c6(),
        span: r3
    };
    if (t1181.name == "ValueName") return {
        from: t1181.from,
        options: u6,
        span: r3
    };
    if (t1181.name == "PseudoClassName") return {
        from: t1181.from,
        options: p13,
        span: r3
    };
    if (t1181.name == "TagName") {
        for(let { parent: s511  } = t1181; s511; s511 = s511.parent)if (s511.name == "Block") return {
            from: t1181.from,
            options: c6(),
            span: r3
        };
        return {
            from: t1181.from,
            options: N9,
            span: r3
        };
    }
    if (!a203.explicit) return null;
    let l318 = t1181.resolve(i643), n405 = l318.childBefore(i643);
    return n405 && n405.name == ":" && l318.name == "PseudoClassSelector" ? {
        from: i643,
        options: p13,
        span: r3
    } : n405 && n405.name == ":" && l318.name == "Declaration" || l318.name == "ArgList" ? {
        from: i643,
        options: u6,
        span: r3
    } : l318.name == "Block" ? {
        from: i643,
        options: c6(),
        span: r3
    } : null;
}, m9 = P6.define({
    parser: w15.configure({
        props: [
            Y2.add({
                Declaration: wt1()
            }),
            ot1.add({
                Block: yt
            }),
            yt2({
                "import charset namespace keyframes": i1.definitionKeyword,
                "media supports": i1.controlKeyword,
                "from to selector": i1.keyword,
                NamespaceName: i1.namespace,
                KeyframeName: i1.labelName,
                TagName: i1.tagName,
                ClassName: i1.className,
                PseudoClassName: i1.constant(i1.className),
                IdName: i1.labelName,
                "FeatureName PropertyName": i1.propertyName,
                AttributeName: i1.attributeName,
                NumberLiteral: i1.number,
                KeywordQuery: i1.keyword,
                UnaryQueryOp: i1.operatorKeyword,
                "CallTag ValueName": i1.atom,
                VariableName: i1.variableName,
                Callee: i1.operatorKeyword,
                Unit: i1.unit,
                "UniversalSelector NestingSelector": i1.definitionOperator,
                AtKeyword: i1.keyword,
                MatchOp: i1.compareOperator,
                "ChildOp SiblingOp, LogicOp": i1.logicOperator,
                BinOp: i1.arithmeticOperator,
                Important: i1.modifier,
                Comment: i1.blockComment,
                ParenthesizedContent: i1.special(i1.name),
                ColorLiteral: i1.color,
                StringLiteral: i1.string,
                ":": i1.punctuation,
                "PseudoOp #": i1.derefOperator,
                "; ,": i1.separator,
                "( )": i1.paren,
                "[ ]": i1.squareBracket,
                "{ }": i1.brace
            })
        ]
    }),
    languageData: {
        commentTokens: {
            block: {
                open: "/*",
                close: "*/"
            }
        },
        indentOnInput: /^\s*\}$/,
        wordChars: "-"
    }
}), q10 = m9.data.of({
    autocomplete: z12
});
function L11() {
    return new J5(m9, q10);
}
var W10 = 53, _11 = 1, m10 = 54, Z7 = 2, V8 = 55, Y7 = 3, $11 = 4, p14 = 5, P12 = 6, i2 = 7, E12 = 8, j11 = 9, y11 = 10, R10 = 56, D15 = 11, G7 = 12, T17 = 57, U7 = 18, L12 = 27, N10 = 30, A11 = 33, z13 = 35, I12 = 0, M15 = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    frame: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
    menuitem: !0
}, K9 = {
    dd: !0,
    li: !0,
    optgroup: !0,
    option: !0,
    p: !0,
    rp: !0,
    rt: !0,
    tbody: !0,
    td: !0,
    tfoot: !0,
    th: !0,
    tr: !0
}, d11 = {
    dd: {
        dd: !0,
        dt: !0
    },
    dt: {
        dd: !0,
        dt: !0
    },
    li: {
        li: !0
    },
    option: {
        option: !0,
        optgroup: !0
    },
    optgroup: {
        optgroup: !0
    },
    p: {
        address: !0,
        article: !0,
        aside: !0,
        blockquote: !0,
        dir: !0,
        div: !0,
        dl: !0,
        fieldset: !0,
        footer: !0,
        form: !0,
        h1: !0,
        h2: !0,
        h3: !0,
        h4: !0,
        h5: !0,
        h6: !0,
        header: !0,
        hgroup: !0,
        hr: !0,
        menu: !0,
        nav: !0,
        ol: !0,
        p: !0,
        pre: !0,
        section: !0,
        table: !0,
        ul: !0
    },
    rp: {
        rp: !0,
        rt: !0
    },
    rt: {
        rp: !0,
        rt: !0
    },
    tbody: {
        tbody: !0,
        tfoot: !0
    },
    td: {
        td: !0,
        th: !0
    },
    tfoot: {
        tbody: !0
    },
    th: {
        td: !0,
        th: !0
    },
    thead: {
        tbody: !0,
        tfoot: !0
    },
    tr: {
        tr: !0
    }
};
function F10(e1157) {
    return e1157 == 45 || e1157 == 46 || e1157 == 58 || e1157 >= 65 && e1157 <= 90 || e1157 == 95 || e1157 >= 97 && e1157 <= 122 || e1157 >= 161;
}
function b13(e1158) {
    return e1158 == 9 || e1158 == 10 || e1158 == 13 || e1158 == 32;
}
var Q12 = null, w16 = null, q11 = 0;
function g8(e1159, O25) {
    let a204 = e1159.pos + O25;
    if (q11 == a204 && w16 == e1159) return Q12;
    let r500 = e1159.peek(O25);
    for(; b13(r500);)r500 = e1159.peek(++O25);
    let t1182 = "";
    for(; F10(r500);)t1182 += String.fromCharCode(r500), r500 = e1159.peek(++O25);
    return w16 = e1159, q11 = a204, Q12 = t1182 || (r500 == B10 || r500 == J10 ? void 0 : null);
}
var v10 = 60, l2 = 62, x13 = 47, B10 = 63, J10 = 33;
function X9(e1160, O26) {
    this.name = e1160, this.parent = O26, this.hash = O26 ? O26.hash : 0;
    for(let a205 = 0; a205 < e1160.length; a205++)this.hash += (this.hash << 4) + e1160.charCodeAt(a205) + (e1160.charCodeAt(a205) << 8);
}
var H10 = [
    $11,
    p14,
    P12,
    i2
], ee7 = new Q11({
    start: null,
    shift (e1161, O27, a, r501) {
        return H10.indexOf(O27) > -1 ? new X9(g8(r501, 1) || "", e1161) : e1161;
    },
    reduce (e1162, O28) {
        return O28 == U7 && e1162 ? e1162.parent : e1162;
    },
    reuse (e1163, O29, a, r502) {
        let t1183 = O29.type.id;
        return t1183 == $11 || t1183 == z13 ? new X9(g8(r502, 1) || "", e1163) : e1163;
    },
    hash (e1164) {
        return e1164 ? e1164.hash : 0;
    },
    strict: !1
}), te7 = new J9((e1165, O30)=>{
    if (e1165.next != v10) {
        e1165.next < 0 && O30.context && e1165.acceptToken(R10);
        return;
    }
    e1165.advance();
    let a206 = e1165.next == x13;
    a206 && e1165.advance();
    let r503 = g8(e1165, 0);
    if (r503 === void 0) return;
    if (!r503) return e1165.acceptToken(a206 ? D15 : $11);
    let t1184 = O30.context ? O30.context.name : null;
    if (a206) {
        if (r503 == t1184) return e1165.acceptToken(E12);
        if (t1184 && K9[t1184]) return e1165.acceptToken(R10, -2);
        if (O30.dialectEnabled(I12)) return e1165.acceptToken(j11);
        for(let s512 = O30.context; s512; s512 = s512.parent)if (s512.name == r503) return;
        e1165.acceptToken(y11);
    } else {
        if (r503 == "script") return e1165.acceptToken(p14);
        if (r503 == "style") return e1165.acceptToken(P12);
        if (r503 == "textarea") return e1165.acceptToken(i2);
        t1184 && d11[t1184] && d11[t1184][r503] ? e1165.acceptToken(R10, -1) : e1165.acceptToken($11);
    }
}, {
    contextual: !0
}), Oe3 = new J9((e1166, O31)=>{
    let a207 = 1;
    if (e1166.next == x13) {
        if (e1166.peek(1) != l2) return;
        a207 = 2;
    } else if (e1166.next != l2) return;
    O31.context && M15[O31.context.name] && e1166.acceptToken(G7, a207);
}), re7 = new J9((e1167)=>{
    for(let O32 = 0, a208 = 0;; a208++){
        if (e1167.next < 0) {
            a208 && e1167.acceptToken(T17);
            break;
        }
        if (e1167.next == "-->".charCodeAt(O32)) {
            if (O32++, O32 == 3) {
                a208 > 3 && e1167.acceptToken(T17, -2);
                break;
            }
        } else O32 = 0;
        e1167.advance();
    }
});
function c7(e1168, O33, a209) {
    let r504 = 2 + e1168.length;
    return new J9((t1185)=>{
        for(let s513 = 0, k29 = 0, n406 = 0;; n406++){
            if (t1185.next < 0) {
                n406 && t1185.acceptToken(O33);
                break;
            }
            if (s513 == 0 && t1185.next == v10 || s513 == 1 && t1185.next == x13 || s513 >= 2 && s513 < r504 && t1185.next == e1168.charCodeAt(s513 - 2)) s513++, k29++;
            else if ((s513 == 2 || s513 == r504) && b13(t1185.next)) k29++;
            else if (s513 == r504 && t1185.next == l2) {
                n406 > k29 ? t1185.acceptToken(O33, -k29) : t1185.acceptToken(a209, -(k29 - 2));
                break;
            } else if ((t1185.next == 10 || t1185.next == 13) && n406) {
                t1185.acceptToken(O33, 1);
                break;
            } else s513 = k29 = 0;
            t1185.advance();
        }
    });
}
var ae6 = c7("script", W10, _11), se6 = c7("style", m10, Z7), ke4 = c7("textarea", V8, Y7), ue5 = v9.deserialize({
    version: 13,
    states: ",fOVO!jOOO!TQ#tO'#CoO!YQ#tO'#CyO!_Q#tO'#C|O!dQ#tO'#DPO!iOXO'#CnO!tOYO'#CnO#PO[O'#CnO$YO!jO'#CnOOOW'#Cn'#CnO$aO$fO'#DSO$iQ#tO'#DUO$nQ#tO'#DVOOOW'#Dj'#DjOOOW'#DX'#DXQVO!jOOO$sQ&jO,59ZO${Q&jO,59eO%TQ&jO,59hO%]Q&zO,59kOOOX'#D]'#D]O%hOXO'#CwO%sOXO,59YOOOY'#D^'#D^O%{OYO'#CzO&WOYO,59YOOO['#D_'#D_O&`O[O'#C}O&kO[O,59YOOOW'#D`'#D`O&sO!jO,59YO&zQ#tO'#DQOOOW,59Y,59YOOOp'#Da'#DaO'PO$fO,59nOOOW,59n,59nO'XQ#tO,59pO'^Q#tO,59qOOOW-E7V-E7VO'cQ&zO'#CqOOQ`'#DY'#DYO'qQ&jO1G.uOOOX1G.u1G.uO'yQ&jO1G/POOOY1G/P1G/PO(RQ&jO1G/SOOO[1G/S1G/SO(ZQ&zO1G/VOOOW1G/V1G/VOOOW1G/X1G/XOOOX-E7Z-E7ZO(fQ#tO'#CxOOOW1G.t1G.tOOOY-E7[-E7[O(kQ#tO'#C{OOO[-E7]-E7]O(pQ#tO'#DOOOOW-E7^-E7^O(uQ#tO,59lOOOp-E7_-E7_OOOW1G/Y1G/YOOOW1G/[1G/[OOOW1G/]1G/]O(zQ,UO,59]OOQ`-E7W-E7WOOOX7+$a7+$aOOOY7+$k7+$kOOO[7+$n7+$nOOOW7+$q7+$qOOOW7+$s7+$sO)VQ#tO,59dO)[Q#tO,59gO)aQ#tO,59jOOOW1G/W1G/WO)fO7[O'#CtO)tOMhO'#CtOOQ`1G.w1G.wOOOW1G/O1G/OOOOW1G/R1G/ROOOW1G/U1G/UOOOO'#DZ'#DZO*SO7[O,59`OOQ`,59`,59`OOOO'#D['#D[O*bOMhO,59`OOOO-E7X-E7XOOQ`1G.z1G.zOOOO-E7Y-E7Y",
    stateData: "*x~O!]OS~OSSOTPOUQOVROX[OYZOZ]O^]O_]O`]Oa]Ow]Oz^O!cYO~Od`O~OdaO~OdbO~OdcO~O!VdOPkP!YkP~O!WgOQnP!YnP~O!XjORqP!YqP~OSSOTPOUQOVROWoOX[OYZOZ]O^]O_]O`]Oa]Ow]O!cYO~O!YpO~P#[O!ZqO!dsO~OdtO~OduO~OfwOjzO~OfwOj|O~OfwOj!OO~O[!ROfwOj!QO~O!VdOPkX!YkX~OP!TO!Y!UO~O!WgOQnX!YnX~OQ!WO!Y!UO~O!XjORqX!YqX~OR!YO!Y!UO~O!Y!UO~P#[Od![O~O!ZqO!d!^O~Oj!_O~Oj!`O~Og!aOfeXjeX[eX~OfwOj!cO~OfwOj!dO~OfwOj!eO~O[!gOfwOj!fO~Od!hO~Od!iO~Od!jO~Oj!kO~Oi!nO!_!lO!a!mO~Oj!oO~Oj!pO~Oj!qO~O_!rO`!rO!_!tO!`!rO~O_!uO`!uO!a!tO!b!uO~O_!rO`!rO!_!xO!`!rO~O_!uO`!uO!a!xO!b!uO~O`_a!cwz!c~",
    goto: "%i!_PPPPPPPPPPPPPPPPPP!`!fP!lPP!vPP!y!|#P#V#Y#]#c#f#i#o#u!`P!`!`P#{$R$e$k$q$w$}%T%ZPPPPPPPP%aX]OW_nXTOW_nax`abcy{}!PR!n!aRfTR!UfXUOW_nRiUR!UiXVOW_nRlVR!UlXWOW_nQpWR!UnXXOW_nQ_ORv_Qy`Q{aQ}bQ!PcX!by{}!PQ!s!lR!w!sQ!v!mR!y!vQeTR!SeQhUR!VhQkVR!XkQnWR!ZnQrYR!]rS^O_TmWn",
    nodeNames: "\u26A0 StartCloseTag StartCloseTag StartCloseTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag SelfCloseEndTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue EndTag ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",
    maxTerm: 66,
    context: ee7,
    nodeProps: [
        [
            y4.closedBy,
            -9,
            1,
            2,
            3,
            5,
            6,
            7,
            8,
            9,
            10,
            "EndTag",
            4,
            "EndTag SelfCloseEndTag",
            -4,
            19,
            29,
            32,
            35,
            "CloseTag"
        ],
        [
            y4.group,
            -9,
            11,
            15,
            16,
            17,
            18,
            38,
            39,
            40,
            41,
            "Entity",
            14,
            "Entity TextContent",
            -3,
            27,
            30,
            33,
            "TextContent Entity"
        ],
        [
            y4.openedBy,
            12,
            "StartTag",
            26,
            "StartTag StartCloseTag",
            -4,
            28,
            31,
            34,
            36,
            "OpenTag"
        ]
    ],
    skippedNodes: [
        0
    ],
    repeatNodeCount: 9,
    tokenData: "!#b!aR!WOX$kXY)sYZ)sZ]$k]^)s^p$kpq)sqr$krs*zsv$kvw+dwx2yx}$k}!O3f!O!P$k!P!Q7_!Q![$k![!]8u!]!^$k!^!_>b!_!`!!p!`!a8T!a!c$k!c!}8u!}#R$k#R#S8u#S#T$k#T#o8u#o$f$k$f$g&R$g%W$k%W%o8u%o%p$k%p&a8u&a&b$k&b1p8u1p4U$k4U4d8u4d4e$k4e$IS8u$IS$I`$k$I`$Ib8u$Ib$Kh$k$Kh%#t8u%#t&/x$k&/x&Et8u&Et&FV$k&FV;'S8u;'S;:j<t;:j?&r$k?&r?Ah8u?Ah?BY$k?BY?Mn8u?Mn~$k!Z$vc^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!R&[V^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&Rq&xT^P!bpOv&qwx'Xx!^&q!^!_'g!_~&qP'^R^POv'Xw!^'X!_~'Xp'lQ!bpOv'gx~'ga'yU^P!``Or'rrs'Xsv'rw!^'r!^!_(]!_~'r`(bR!``Or(]sv(]w~(]!Q(rT!``!bpOr(krs'gsv(kwx(]x~(kW)WXiWOX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!a*O^^P!``!bp!]^OX&RXY)sYZ)sZ]&R]^)s^p&Rpq)sqr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!Z+TT!_h^P!bpOv&qwx'Xx!^&q!^!_'g!_~&q!Z+kbiWaPOX,sXZ.QZ],s]^.Q^p,sqr,srs.Qst/]tw,swx.Qx!P,s!P!Q.Q!Q!],s!]!^)R!^!a.Q!a$f,s$f$g.Q$g~,s!Z,xbiWOX,sXZ.QZ],s]^.Q^p,sqr,srs.Qst)Rtw,swx.Qx!P,s!P!Q.Q!Q!],s!]!^.i!^!a.Q!a$f,s$f$g.Q$g~,s!R.TTOp.Qqs.Qt!].Q!]!^.d!^~.Q!R.iO_!R!Z.pXiW_!ROX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z/baiWOX0gXZ1qZ]0g]^1q^p0gqr0grs1qsw0gwx1qx!P0g!P!Q1q!Q!]0g!]!^)R!^!a1q!a$f0g$f$g1q$g~0g!Z0laiWOX0gXZ1qZ]0g]^1q^p0gqr0grs1qsw0gwx1qx!P0g!P!Q1q!Q!]0g!]!^2V!^!a1q!a$f0g$f$g1q$g~0g!R1tSOp1qq!]1q!]!^2Q!^~1q!R2VO`!R!Z2^XiW`!ROX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z3SU!ax^P!``Or'rrs'Xsv'rw!^'r!^!_(]!_~'r!]3qe^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O5S!O!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!]5_d^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!`&R!`!a6m!a$f$k$f$g&R$g~$k!T6xV^P!``!bp!dQOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!X7hX^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_!`&R!`!a8T!a~&R!X8`VjU^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!a9U!YfSdQ^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O8u!O!P8u!P!Q&R!Q![8u![!]8u!]!^$k!^!_(k!_!a&R!a!c$k!c!}8u!}#R$k#R#S8u#S#T$k#T#o8u#o$f$k$f$g&R$g$}$k$}%O8u%O%W$k%W%o8u%o%p$k%p&a8u&a&b$k&b1p8u1p4U8u4U4d8u4d4e$k4e$IS8u$IS$I`$k$I`$Ib8u$Ib$Je$k$Je$Jg8u$Jg$Kh$k$Kh%#t8u%#t&/x$k&/x&Et8u&Et&FV$k&FV;'S8u;'S;:j<t;:j?&r$k?&r?Ah8u?Ah?BY$k?BY?Mn8u?Mn~$k!a=Pe^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g;=`$k;=`<%l8u<%l~$k!R>iW!``!bpOq(kqr?Rrs'gsv(kwx(]x!a(k!a!bKj!b~(k!R?YZ!``!bpOr(krs'gsv(kwx(]x}(k}!O?{!O!f(k!f!gAR!g#W(k#W#XGz#X~(k!R@SV!``!bpOr(krs'gsv(kwx(]x}(k}!O@i!O~(k!R@rT!``!bp!cPOr(krs'gsv(kwx(]x~(k!RAYV!``!bpOr(krs'gsv(kwx(]x!q(k!q!rAo!r~(k!RAvV!``!bpOr(krs'gsv(kwx(]x!e(k!e!fB]!f~(k!RBdV!``!bpOr(krs'gsv(kwx(]x!v(k!v!wBy!w~(k!RCQV!``!bpOr(krs'gsv(kwx(]x!{(k!{!|Cg!|~(k!RCnV!``!bpOr(krs'gsv(kwx(]x!r(k!r!sDT!s~(k!RD[V!``!bpOr(krs'gsv(kwx(]x!g(k!g!hDq!h~(k!RDxW!``!bpOrDqrsEbsvDqvwEvwxFfx!`Dq!`!aGb!a~DqqEgT!bpOvEbvxEvx!`Eb!`!aFX!a~EbPEyRO!`Ev!`!aFS!a~EvPFXOzPqF`Q!bpzPOv'gx~'gaFkV!``OrFfrsEvsvFfvwEvw!`Ff!`!aGQ!a~FfaGXR!``zPOr(]sv(]w~(]!RGkT!``!bpzPOr(krs'gsv(kwx(]x~(k!RHRV!``!bpOr(krs'gsv(kwx(]x#c(k#c#dHh#d~(k!RHoV!``!bpOr(krs'gsv(kwx(]x#V(k#V#WIU#W~(k!RI]V!``!bpOr(krs'gsv(kwx(]x#h(k#h#iIr#i~(k!RIyV!``!bpOr(krs'gsv(kwx(]x#m(k#m#nJ`#n~(k!RJgV!``!bpOr(krs'gsv(kwx(]x#d(k#d#eJ|#e~(k!RKTV!``!bpOr(krs'gsv(kwx(]x#X(k#X#YDq#Y~(k!RKqW!``!bpOrKjrsLZsvKjvwLowxNPx!aKj!a!b! g!b~KjqL`T!bpOvLZvxLox!aLZ!a!bM^!b~LZPLrRO!aLo!a!bL{!b~LoPMORO!`Lo!`!aMX!a~LoPM^OwPqMcT!bpOvLZvxLox!`LZ!`!aMr!a~LZqMyQ!bpwPOv'gx~'gaNUV!``OrNPrsLosvNPvwLow!aNP!a!bNk!b~NPaNpV!``OrNPrsLosvNPvwLow!`NP!`!a! V!a~NPa! ^R!``wPOr(]sv(]w~(]!R! nW!``!bpOrKjrsLZsvKjvwLowxNPx!`Kj!`!a!!W!a~Kj!R!!aT!``!bpwPOr(krs'gsv(kwx(]x~(k!V!!{VgS^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R",
    tokenizers: [
        ae6,
        se6,
        ke4,
        te7,
        Oe3,
        re7,
        0,
        1,
        2,
        3,
        4,
        5
    ],
    topRules: {
        Document: [
            0,
            13
        ]
    },
    dialects: {
        noMatch: 0
    },
    tokenPrec: 446
});
function ne7(e1169, O34) {
    let a210 = Object.create(null);
    for (let r505 of e1169.firstChild.getChildren("Attribute")){
        let t1186 = r505.getChild("AttributeName"), s514 = r505.getChild("AttributeValue") || r505.getChild("UnquotedAttributeValue");
        t1186 && (a210[O34.read(t1186.from, t1186.to)] = s514 ? s514.name == "AttributeValue" ? O34.read(s514.from + 1, s514.to - 1) : O34.read(s514.from, s514.to) : "");
    }
    return a210;
}
function f7(e1170, O35, a211) {
    let r506;
    for (let t1187 of a211)if (!t1187.attrs || t1187.attrs(r506 || (r506 = ne7(e1170.node.parent, O35)))) return {
        parser: t1187.parser
    };
    return null;
}
function Re2(e1171) {
    let O36 = [], a212 = [], r507 = [];
    for (let t1188 of e1171){
        let s515 = t1188.tag == "script" ? O36 : t1188.tag == "style" ? a212 : t1188.tag == "textarea" ? r507 : null;
        if (!s515) throw new RangeError("Only script, style, and textarea tags can host nested parsers");
        s515.push(t1188);
    }
    return Ne1((t1189, s516)=>{
        let k30 = t1189.type.id;
        return k30 == L12 ? f7(t1189, s516, O36) : k30 == N10 ? f7(t1189, s516, a212) : k30 == A11 ? f7(t1189, s516, r507) : null;
    });
}
var W11 = 275, T18 = 1, o = 2, P13 = 276, Z8 = 277, p15 = 278, X10 = 279, r4 = 3, R11 = 281, n2 = 282, V9 = 4, _12 = 5, j12 = 1, q12 = [
    9,
    10,
    11,
    12,
    13,
    32,
    133,
    160,
    5760,
    8192,
    8193,
    8194,
    8195,
    8196,
    8197,
    8198,
    8199,
    8200,
    8201,
    8202,
    8232,
    8233,
    8239,
    8287,
    12288
], Y8 = 125, y12 = 123, G8 = 59, S15 = 47, u7 = 42, x14 = 43, l3 = 45, f8 = 36, s5 = 96, d12 = 92, v11 = new Q11({
    start: !1,
    shift (O37, Q17) {
        return Q17 == V9 || Q17 == _12 || Q17 == R11 ? O37 : Q17 == n2;
    },
    strict: !1
}), b14 = new J9((O38, Q18)=>{
    let { next: $16  } = O38;
    ($16 == Y8 || $16 == -1 || Q18.context) && Q18.canShift(X10) && O38.acceptToken(X10);
}, {
    contextual: !0,
    fallback: !0
}), z14 = new J9((O39, Q19)=>{
    let { next: $17  } = O39, a213;
    q12.indexOf($17) > -1 || $17 == S15 && ((a213 = O39.peek(1)) == S15 || a213 == u7) || $17 != Y8 && $17 != G8 && $17 != -1 && !Q19.context && Q19.canShift(W11) && O39.acceptToken(W11);
}, {
    contextual: !0
}), w17 = new J9((O40, Q20)=>{
    let { next: $18  } = O40;
    if (($18 == x14 || $18 == l3) && (O40.advance(), $18 == O40.next)) {
        O40.advance();
        let a214 = !Q20.context && Q20.canShift(T18);
        O40.acceptToken(a214 ? T18 : o);
    }
}, {
    contextual: !0
}), k9 = new J9((O41)=>{
    for(let Q21 = !1, $19 = 0;; $19++){
        let { next: a215  } = O41;
        if (a215 < 0) {
            $19 && O41.acceptToken(P13);
            break;
        } else if (a215 == s5) {
            $19 ? O41.acceptToken(P13) : O41.acceptToken(p15, 1);
            break;
        } else if (a215 == y12 && Q21) {
            $19 == 1 ? O41.acceptToken(Z8, 1) : O41.acceptToken(P13, -1);
            break;
        } else if (a215 == 10 && $19) {
            O41.advance(), O41.acceptToken(P13);
            break;
        } else a215 == d12 && O41.advance();
        Q21 = a215 == f8, O41.advance();
    }
});
function L13(O42, Q22) {
    return O42 == "extends" && Q22.dialectEnabled(j12) ? r4 : -1;
}
var g9 = {
    __proto__: null,
    export: 16,
    as: 21,
    from: 25,
    default: 30,
    async: 35,
    function: 36,
    this: 46,
    true: 54,
    false: 54,
    void: 60,
    typeof: 64,
    null: 78,
    super: 80,
    new: 114,
    await: 131,
    yield: 133,
    delete: 134,
    class: 144,
    extends: 146,
    public: 189,
    private: 189,
    protected: 189,
    readonly: 191,
    instanceof: 212,
    in: 214,
    const: 216,
    import: 248,
    keyof: 299,
    unique: 303,
    infer: 309,
    is: 343,
    abstract: 363,
    implements: 365,
    type: 367,
    let: 370,
    var: 372,
    interface: 379,
    enum: 383,
    namespace: 389,
    module: 391,
    declare: 395,
    global: 399,
    for: 420,
    of: 429,
    while: 432,
    with: 436,
    do: 440,
    if: 444,
    else: 446,
    switch: 450,
    case: 456,
    try: 462,
    catch: 464,
    finally: 466,
    return: 470,
    throw: 474,
    break: 478,
    continue: 482,
    debugger: 486
}, U8 = {
    __proto__: null,
    async: 101,
    get: 103,
    set: 105,
    public: 153,
    private: 153,
    protected: 153,
    static: 155,
    abstract: 157,
    override: 159,
    readonly: 165,
    new: 347
}, m11 = {
    __proto__: null,
    "<": 121
}, A12 = v9.deserialize({
    version: 13,
    states: "$1WO`QYOOO'QQ!LdO'#CgO'XOSO'#DSO)dQYO'#DXO)tQYO'#DdO){QYO'#DnO-xQYO'#DtOOQO'#EX'#EXO.]QWO'#EWO.bQWO'#EWOOQ!LS'#Eb'#EbO0aQ!LdO'#IqO2wQ!LdO'#IrO3eQWO'#EvO3jQpO'#F]OOQ!LS'#FO'#FOO3rO!bO'#FOO4QQWO'#FdO5_QWO'#FcOOQ!LS'#Ir'#IrOOQ!LQ'#Iq'#IqOOQQ'#J['#J[O5dQWO'#HjO5iQ!LYO'#HkOOQQ'#Ic'#IcOOQQ'#Hl'#HlQ`QYOOO){QYO'#DfO5qQWO'#GWO5vQ#tO'#ClO6UQWO'#EVO6aQWO'#EcO6fQ#tO'#E}O7QQWO'#GWO7VQWO'#G[O7bQWO'#G[O7pQWO'#G_O7pQWO'#G`O7pQWO'#GbO5qQWO'#GeO8aQWO'#GhO9oQWO'#CcO:PQWO'#GuO:XQWO'#G{O:XQWO'#G}O`QYO'#HPO:XQWO'#HRO:XQWO'#HUO:^QWO'#H[O:cQ!LZO'#H`O){QYO'#HbO:nQ!LZO'#HdO:yQ!LZO'#HfO5iQ!LYO'#HhO){QYO'#IsOOOS'#Hn'#HnO;UOSO,59nOOQ!LS,59n,59nO=gQbO'#CgO=qQYO'#HoO>OQWO'#ItO?}QbO'#ItO'dQYO'#ItO@UQWO,59sO@lQ&jO'#D^OAeQWO'#EXOArQWO'#JPOA}QWO'#JOOBVQWO,5:uOB[QWO'#I}OBcQWO'#DuO5vQ#tO'#EVOBqQWO'#EVOB|Q`O'#E}OOQ!LS,5:O,5:OOCUQYO,5:OOESQ!LdO,5:YOEpQWO,5:`OFZQ!LYO'#I|O7VQWO'#I{OFbQWO'#I{OFjQWO,5:tOFoQWO'#I{OF}QYO,5:rOH}QWO'#ESOJXQWO,5:rOKhQWO'#DhOKoQYO'#DmOKyQ&jO,5:{O){QYO,5:{OOQQ'#En'#EnOOQQ'#Ep'#EpO){QYO,5:}O){QYO,5:}O){QYO,5:}O){QYO,5:}O){QYO,5:}O){QYO,5:}O){QYO,5:}O){QYO,5:}O){QYO,5:}O){QYO,5:}O){QYO,5:}OOQQ'#Et'#EtOLRQYO,5;_OOQ!LS,5;d,5;dOOQ!LS,5;e,5;eONRQWO,5;eOOQ!LS,5;f,5;fO){QYO'#HyONWQ!LYO,5<PONrQWO,5:}O){QYO,5;bO! [QpO'#JTONyQpO'#JTO! cQpO'#JTO! tQpO,5;mOOOO,5;w,5;wO!!SQYO'#F_OOOO'#Hx'#HxO3rO!bO,5;jO!!ZQpO'#FaOOQ!LS,5;j,5;jO!!wQ,UO'#CqOOQ!LS'#Ct'#CtO!#[QWO'#CtO!#aOSO'#CxO!#}Q#tO,5;|O!$UQWO,5<OO!%bQWO'#FnO!%oQWO'#FoO!%tQWO'#FsO!&vQ&jO'#FwO!'iQ,UO'#IlOOQ!LS'#Il'#IlO!'sQWO'#IkO!(RQWO'#IjOOQ!LS'#Cr'#CrOOQ!LS'#Cy'#CyO!(ZQWO'#C{OJ^QWO'#FfOJ^QWO'#FhO!(`QWO'#FjO!(eQWO'#FkO!(jQWO'#FqOJ^QWO'#FvO!(oQWO'#EYO!)WQWO,5;}O`QYO,5>UOOQQ'#If'#IfOOQQ,5>V,5>VOOQQ-E;j-E;jO!+SQ!LdO,5:QOOQ!LQ'#Co'#CoO!+sQ#tO,5<rOOQO'#Ce'#CeO!,UQWO'#CpO!,^Q!LYO'#IgO5_QWO'#IgO:^QWO,59WO!,lQpO,59WO!,tQ#tO,59WO5vQ#tO,59WO!-PQWO,5:rO!-XQWO'#GtO!-dQWO'#J`O){QYO,5;gO!-lQ&jO,5;iO!-qQWO,5=_O!-vQWO,5=_O!-{QWO,5=_O5iQ!LYO,5=_O5qQWO,5<rO!.ZQWO'#EZO!.lQ&jO'#E[OOQ!LQ'#I}'#I}O!.}Q!LYO'#J]O5iQ!LYO,5<vO7pQWO,5<|OOQO'#Cq'#CqO!/YQpO,5<yO!/bQ#tO,5<zO!/mQWO,5<|O!/rQ`O,5=PO:^QWO'#GjO5qQWO'#GlO!/zQWO'#GlO5vQ#tO'#GoO!0PQWO'#GoOOQQ,5=S,5=SO!0UQWO'#GpO!0^QWO'#ClO!0cQWO,58}O!0mQWO,58}O!2oQYO,58}OOQQ,58},58}O!2|Q!LYO,58}O){QYO,58}O!3XQYO'#GwOOQQ'#Gx'#GxOOQQ'#Gy'#GyO`QYO,5=aO!3iQWO,5=aO){QYO'#DtO`QYO,5=gO`QYO,5=iO!3nQWO,5=kO`QYO,5=mO!3sQWO,5=pO!3xQYO,5=vOOQQ,5=z,5=zO){QYO,5=zO5iQ!LYO,5=|OOQQ,5>O,5>OO!7yQWO,5>OOOQQ,5>Q,5>QO!7yQWO,5>QOOQQ,5>S,5>SO!8OQ`O,5?_OOOS-E;l-E;lOOQ!LS1G/Y1G/YO!8TQbO,5>ZO){QYO,5>ZOOQO-E;m-E;mO!8_QWO,5?`O!8gQbO,5?`O!8nQWO,5?jOOQ!LS1G/_1G/_O!8vQpO'#DQOOQO'#Iv'#IvO){QYO'#IvO!9eQpO'#IvO!:SQpO'#D_O!:eQ&jO'#D_O!<pQYO'#D_O!<wQWO'#IuO!=PQWO,59xO!=UQWO'#E]O!=dQWO'#JQO!=lQWO,5:vO!>SQ&jO'#D_O){QYO,5?kO!>^QWO'#HtO!8nQWO,5?jOOQ!LQ1G0a1G0aO!?jQ&jO'#DxOOQ!LS,5:a,5:aO){QYO,5:aOH}QWO,5:aO!?qQWO,5:aO:^QWO,5:qO!,lQpO,5:qO!,tQ#tO,5:qO5vQ#tO,5:qOOQ!LS1G/j1G/jOOQ!LS1G/z1G/zOOQ!LQ'#ER'#ERO){QYO,5?hO!?|Q!LYO,5?hO!@_Q!LYO,5?hO!@fQWO,5?gO!@nQWO'#HvO!@fQWO,5?gOOQ!LQ1G0`1G0`O7VQWO,5?gOOQ!LS1G0^1G0^O!AYQ!LdO1G0^O!AyQ!LbO,5:nOOQ!LS'#Fm'#FmO!BgQ!LdO'#IlOF}QYO1G0^O!DfQ#tO'#IwO!DpQWO,5:SO!DuQbO'#IxO){QYO'#IxO!EPQWO,5:XOOQ!LS'#DQ'#DQOOQ!LS1G0g1G0gO!EUQWO1G0gO!GgQ!LdO1G0iO!GnQ!LdO1G0iO!JRQ!LdO1G0iO!JYQ!LdO1G0iO!LaQ!LdO1G0iO!LtQ!LdO1G0iO# eQ!LdO1G0iO# lQ!LdO1G0iO#$PQ!LdO1G0iO#$WQ!LdO1G0iO#%{Q!LdO1G0iO#(uQ7^O'#CgO#*pQ7^O1G0yO#,kQ7^O'#IrOOQ!LS1G1P1G1PO#-OQ!LdO,5>eOOQ!LQ-E;w-E;wO#-oQ!LdO1G0iOOQ!LS1G0i1G0iO#/qQ!LdO1G0|O#0bQpO,5;oO#0gQpO,5;pO#0lQpO'#FWO#1QQWO'#FVOOQO'#JU'#JUOOQO'#Hw'#HwO#1VQpO1G1XOOQ!LS1G1X1G1XOOOO1G1b1G1bO#1eQ7^O'#IqO#1oQWO,5;yOLRQYO,5;yOOOO-E;v-E;vOOQ!LS1G1U1G1UOOQ!LS,5;{,5;{O#1tQpO,5;{OOQ!LS,59`,59`OH}QWO'#InOOOS'#Hm'#HmO#1yOSO,59dOOQ!LS,59d,59dO){QYO1G1hO!(eQWO'#H{O#2UQWO,5<aOOQ!LS,5<^,5<^OOQO'#GR'#GROJ^QWO,5<lOOQO'#GT'#GTOJ^QWO,5<nOJ^QWO,5<pOOQO1G1j1G1jO#2aQ`O'#CoO#2tQ`O,5<YO#2{QWO'#JXO5qQWO'#JXO#3ZQWO,5<[OJ^QWO,5<ZO#3`Q`O'#FmO#3mQ`O'#JYO#3wQWO'#JYOH}QWO'#JYO#3|QWO,5<_OOQ!LQ'#Dc'#DcO#4RQWO'#FpO#4^QpO'#FxO!&qQ&jO'#FxO!&qQ&jO'#FzO#4oQWO'#F{O!(jQWO'#GOOOQO'#H}'#H}O#4tQ&jO,5<cOOQ!LS,5<c,5<cO#4{Q&jO'#FxO#5ZQ&jO'#FyO#5cQ&jO'#FyOOQ!LS,5<q,5<qOJ^QWO,5?VOJ^QWO,5?VO#5hQWO'#IOO#5sQWO,5?UOOQ!LS'#Cg'#CgO#6gQ#tO,59gOOQ!LS,59g,59gO#7YQ#tO,5<QO#7{Q#tO,5<SO#8VQWO,5<UOOQ!LS,5<V,5<VO#8[QWO,5<]O#8aQ#tO,5<bOF}QYO1G1iO#8qQWO1G1iOOQQ1G3p1G3pOOQ!LS1G/l1G/lONRQWO1G/lOOQQ1G2^1G2^OH}QWO1G2^O){QYO1G2^OH}QWO1G2^O#8vQWO1G2^O#9UQWO,59[O#:_QWO'#ESOOQ!LQ,5?R,5?RO#:iQ!LYO,5?ROOQQ1G.r1G.rO:^QWO1G.rO!,lQpO1G.rO!,tQ#tO1G.rO#:wQWO1G0^O#:|QWO'#CgO#;XQWO'#JaO#;aQWO,5=`O#;fQWO'#JaO#;kQWO'#JaO#;pQWO'#IWO#<OQWO,5?zO#<WQbO1G1ROOQ!LS1G1T1G1TO5qQWO1G2yO#<_QWO1G2yO#<dQWO1G2yO#<iQWO1G2yOOQQ1G2y1G2yO#<nQ#tO1G2^O7VQWO'#JOO7VQWO'#E]O7VQWO'#IQO#=PQ!LYO,5?wOOQQ1G2b1G2bO!/mQWO1G2hOH}QWO1G2eO#=[QWO1G2eOOQQ1G2f1G2fOH}QWO1G2fO#=aQWO1G2fO#=iQ&jO'#GdOOQQ1G2h1G2hO!&qQ&jO'#ISO!/rQ`O1G2kOOQQ1G2k1G2kOOQQ,5=U,5=UO#=qQ#tO,5=WO5qQWO,5=WO#4oQWO,5=ZO5_QWO,5=ZO!,lQpO,5=ZO!,tQ#tO,5=ZO5vQ#tO,5=ZO#>SQWO'#J_O#>_QWO,5=[OOQQ1G.i1G.iO#>dQ!LYO1G.iO#>oQWO1G.iO!(ZQWO1G.iO5iQ!LYO1G.iO#>tQbO,5?|O#?OQWO,5?|O#?ZQYO,5=cO#?bQWO,5=cO7VQWO,5?|OOQQ1G2{1G2{O`QYO1G2{OOQQ1G3R1G3ROOQQ1G3T1G3TO:XQWO1G3VO#?gQYO1G3XO#CbQYO'#HWOOQQ1G3[1G3[O:^QWO1G3bO#CoQWO1G3bO5iQ!LYO1G3fOOQQ1G3h1G3hOOQ!LQ'#Ft'#FtO5iQ!LYO1G3jO5iQ!LYO1G3lOOOS1G4y1G4yO#CwQ`O,5<PO#DPQbO1G3uO#DZQWO1G4zO#DcQWO1G5UO#DkQWO,5?bOLRQYO,5:wO7VQWO,5:wO:^QWO,59yOLRQYO,59yO!,lQpO,59yO#DpQ7^O,59yOOQO,5:w,5:wO#DzQ&jO'#HpO#EbQWO,5?aOOQ!LS1G/d1G/dO#EjQ&jO'#HuO#FOQWO,5?lOOQ!LQ1G0b1G0bO!:eQ&jO,59yO#FWQbO1G5VOOQO,5>`,5>`O7VQWO,5>`OOQO-E;r-E;rOOQ!LQ'#EO'#EOO#FbQ!LrO'#EPO!?bQ&jO'#DyOOQO'#Hs'#HsO#F|Q&jO,5:dOOQ!LS,5:d,5:dO#GTQ&jO'#DyO#GfQ&jO'#DyO#GmQ&jO'#EUO#GpQ&jO'#EPO#G}Q&jO'#EPO!?bQ&jO'#EPO#HbQWO1G/{O#HgQ`O1G/{OOQ!LS1G/{1G/{O){QYO1G/{OH}QWO1G/{OOQ!LS1G0]1G0]O:^QWO1G0]O!,lQpO1G0]O!,tQ#tO1G0]O#HnQ!LdO1G5SO){QYO1G5SO#IOQ!LYO1G5SO#IaQWO1G5RO7VQWO,5>bOOQO,5>b,5>bO#IiQWO,5>bOOQO-E;t-E;tO#IaQWO1G5RO#IwQ!LdO,59gO#KvQ!LdO,5<QO#MxQ!LdO,5<SO$ zQ!LdO,5<bOOQ!LS7+%x7+%xO$$SQ!LdO7+%xO$$sQWO'#HqO$$}QWO,5?cOOQ!LS1G/n1G/nO$%VQYO'#HrO$%dQWO,5?dO$%lQbO,5?dOOQ!LS1G/s1G/sOOQ!LS7+&R7+&RO$%vQ7^O,5:YO){QYO7+&eO$&QQ7^O,5:QOOQO1G1Z1G1ZOOQO1G1[1G1[O$&_QMhO,5;rOLRQYO,5;qOOQO-E;u-E;uOOQ!LS7+&s7+&sOOOO7+&|7+&|OOOO1G1e1G1eO$&jQWO1G1eOOQ!LS1G1g1G1gO$&oQ`O,5?YOOOS-E;k-E;kOOQ!LS1G/O1G/OO$&vQ!LdO7+'SOOQ!LS,5>g,5>gO$'gQWO,5>gOOQ!LS1G1{1G1{P$'lQWO'#H{POQ!LS-E;y-E;yO$(]Q#tO1G2WO$)OQ#tO1G2YO$)YQ#tO1G2[OOQ!LS1G1t1G1tO$)aQWO'#HzO$)oQWO,5?sO$)oQWO,5?sO$)wQWO,5?sO$*SQWO,5?sOOQO1G1v1G1vO$*bQ#tO1G1uO$*rQWO'#H|O$+SQWO,5?tOH}QWO,5?tO$+[Q`O,5?tOOQ!LS1G1y1G1yO5iQ!LYO,5<dO5iQ!LYO,5<eO$+fQWO,5<eO#4jQWO,5<eO!,lQpO,5<dO$+kQWO,5<fO5iQ!LYO,5<gO$+fQWO,5<jOOQO-E;{-E;{OOQ!LS1G1}1G1}O!&qQ&jO,5<dO$+sQWO,5<eO!&qQ&jO,5<fO!&qQ&jO,5<eO$,OQ#tO1G4qO$,YQ#tO1G4qOOQO,5>j,5>jOOQO-E;|-E;|O!-lQ&jO,59iO){QYO,59iO$,gQWO1G1pOJ^QWO1G1wO$,lQ!LdO7+'TOOQ!LS7+'T7+'TOF}QYO7+'TOOQ!LS7+%W7+%WO$-]Q`O'#JZO#HbQWO7+'xO$-gQWO7+'xO$-oQ`O7+'xOOQQ7+'x7+'xOH}QWO7+'xO){QYO7+'xOH}QWO7+'xOOQO1G.v1G.vO$-yQ!LbO'#CgO$.ZQ!LbO,5<hO$.xQWO,5<hOOQ!LQ1G4m1G4mOOQQ7+$^7+$^O:^QWO7+$^O!,lQpO7+$^OF}QYO7+%xO$.}QWO'#IVO$/]QWO,5?{OOQO1G2z1G2zO5qQWO,5?{O$/]QWO,5?{O$/eQWO,5?{OOQO,5>r,5>rOOQO-E<U-E<UOOQ!LS7+&m7+&mO$/jQWO7+(eO5iQ!LYO7+(eO5qQWO7+(eO$/oQWO7+(eO$/tQWO7+'xOOQ!LQ,5>l,5>lOOQ!LQ-E<O-E<OOOQQ7+(S7+(SO$0SQ!LbO7+(POH}QWO7+(PO$0^Q`O7+(QOOQQ7+(Q7+(QOH}QWO7+(QO$0eQWO'#J^O$0pQWO,5=OOOQO,5>n,5>nOOQO-E<Q-E<QOOQQ7+(V7+(VO$1jQ&jO'#GmOOQQ1G2r1G2rOH}QWO1G2rO){QYO1G2rOH}QWO1G2rO$1qQWO1G2rO$2PQ#tO1G2rO5iQ!LYO1G2uO#4oQWO1G2uO5_QWO1G2uO!,lQpO1G2uO!,tQ#tO1G2uO$2bQWO'#IUO$2mQWO,5?yO$2uQ&jO,5?yOOQ!LQ1G2v1G2vOOQQ7+$T7+$TO$2zQWO7+$TO5iQ!LYO7+$TO$3PQWO7+$TO){QYO1G5hO){QYO1G5iO$3UQYO1G2}O$3]QWO1G2}O$3bQYO1G2}O$3iQ!LYO1G5hOOQQ7+(g7+(gO5iQ!LYO7+(qO`QYO7+(sOOQQ'#Jd'#JdOOQQ'#IX'#IXO$3sQYO,5=rOOQQ,5=r,5=rO){QYO'#HXO$4QQWO'#HZOOQQ7+(|7+(|O$4VQYO7+(|O7VQWO7+(|OOQQ7+)Q7+)QOOQQ7+)U7+)UOOQQ7+)W7+)WOOQO1G4|1G4|O$8TQ7^O1G0cO$8_QWO1G0cOOQO1G/e1G/eO$8jQ7^O1G/eO:^QWO1G/eOLRQYO'#D_OOQO,5>[,5>[OOQO-E;n-E;nOOQO,5>a,5>aOOQO-E;s-E;sO!,lQpO1G/eOOQO1G3z1G3zO:^QWO,5:eOOQO,5:k,5:kO){QYO,5:kO$8tQ!LYO,5:kO$9PQ!LYO,5:kO!,lQpO,5:eOOQO-E;q-E;qOOQ!LS1G0O1G0OO!?bQ&jO,5:eO$9_Q&jO,5:eO$9pQ!LrO,5:kO$:[Q&jO,5:eO!?bQ&jO,5:kOOQO,5:p,5:pO$:cQ&jO,5:kO$:pQ!LYO,5:kOOQ!LS7+%g7+%gO#HbQWO7+%gO#HgQ`O7+%gOOQ!LS7+%w7+%wO:^QWO7+%wO!,lQpO7+%wO$;UQ!LdO7+*nO){QYO7+*nOOQO1G3|1G3|O7VQWO1G3|O$;fQWO7+*mO$;nQ!LdO1G2WO$=pQ!LdO1G2YO$?rQ!LdO1G1uO$AzQ#tO,5>]OOQO-E;o-E;oO$BUQbO,5>^O){QYO,5>^OOQO-E;p-E;pO$B`QWO1G5OO$BhQ7^O1G0^O$DoQ7^O1G0iO$DvQ7^O1G0iO$FwQ7^O1G0iO$GOQ7^O1G0iO$HsQ7^O1G0iO$IWQ7^O1G0iO$KeQ7^O1G0iO$KlQ7^O1G0iO$MmQ7^O1G0iO$MtQ7^O1G0iO% iQ7^O1G0iO% |Q!LdO<<JPO%!mQ7^O1G0iO%$]Q7^O'#IlO%&YQ7^O1G0|OLRQYO'#FYOOQO'#JV'#JVOOQO1G1^1G1^O%&gQWO1G1]O%&lQ7^O,5>eOOOO7+'P7+'POOOS1G4t1G4tOOQ!LS1G4R1G4ROJ^QWO7+'vO%&vQWO,5>fO5qQWO,5>fOOQO-E;x-E;xO%'UQWO1G5_O%'UQWO1G5_O%'^QWO1G5_O%'iQ`O,5>hO%'sQWO,5>hOH}QWO,5>hOOQO-E;z-E;zO%'xQ`O1G5`O%(SQWO1G5`OOQO1G2O1G2OOOQO1G2P1G2PO5iQ!LYO1G2PO$+fQWO1G2PO5iQ!LYO1G2OO%([QWO1G2QOH}QWO1G2QOOQO1G2R1G2RO5iQ!LYO1G2UO!,lQpO1G2OO#4jQWO1G2PO%(aQWO1G2QO%(iQWO1G2POJ^QWO7+*]OOQ!LS1G/T1G/TO%(tQWO1G/TOOQ!LS7+'[7+'[O%(yQ#tO7+'cO%)ZQ!LdO<<JoOOQ!LS<<Jo<<JoOH}QWO'#IPO%)zQWO,5?uOOQQ<<Kd<<KdOH}QWO<<KdO#HbQWO<<KdO%*SQWO<<KdO%*[Q`O<<KdOH}QWO1G2SOOQQ<<Gx<<GxO:^QWO<<GxO%*fQ!LdO<<IdOOQ!LS<<Id<<IdOOQO,5>q,5>qO%+VQWO,5>qO#;kQWO,5>qOOQO-E<T-E<TO%+[QWO1G5gO%+[QWO1G5gO5qQWO1G5gO%+dQWO<<LPOOQQ<<LP<<LPO%+iQWO<<LPO5iQ!LYO<<LPO){QYO<<KdOH}QWO<<KdOOQQ<<Kk<<KkO$0SQ!LbO<<KkOOQQ<<Kl<<KlO$0^Q`O<<KlO%+nQ&jO'#IRO%+yQWO,5?xOLRQYO,5?xOOQQ1G2j1G2jO#FbQ!LrO'#EPO!?bQ&jO'#GnOOQO'#IT'#ITO%,RQ&jO,5=XOOQQ,5=X,5=XO%,YQ&jO'#EPO%,eQ&jO'#EPO%,|Q&jO'#EPO%-WQ&jO'#GnO%-iQWO7+(^O%-nQWO7+(^O%-vQ`O7+(^OOQQ7+(^7+(^OH}QWO7+(^O){QYO7+(^OH}QWO7+(^O%.QQWO7+(^OOQQ7+(a7+(aO5iQ!LYO7+(aO#4oQWO7+(aO5_QWO7+(aO!,lQpO7+(aO%.`QWO,5>pOOQO-E<S-E<SOOQO'#Gq'#GqO%.kQWO1G5eO5iQ!LYO<<GoOOQQ<<Go<<GoO%.sQWO<<GoO%.xQWO7++SO%.}QWO7++TOOQQ7+(i7+(iO%/SQWO7+(iO%/XQYO7+(iO%/`QWO7+(iO){QYO7++SO){QYO7++TOOQQ<<L]<<L]OOQQ<<L_<<L_OOQQ-E<V-E<VOOQQ1G3^1G3^O%/eQWO,5=sOOQQ,5=u,5=uO:^QWO<<LhO%/jQWO<<LhOLRQYO7+%}OOQO7+%P7+%PO%/oQ7^O1G5VO:^QWO7+%POOQO1G0P1G0PO%/yQ!LdO1G0VOOQO1G0V1G0VO){QYO1G0VO%0TQ!LYO1G0VO:^QWO1G0PO!,lQpO1G0PO!?bQ&jO1G0PO%0`Q!LYO1G0VO%0nQ&jO1G0PO%1PQ!LYO1G0VO%1eQ!LrO1G0VO%1oQ&jO1G0PO!?bQ&jO1G0VOOQ!LS<<IR<<IROOQ!LS<<Ic<<IcO:^QWO<<IcO%1vQ!LdO<<NYOOQO7+)h7+)hO%2WQ!LdO7+'cO%4`QbO1G3xO%4jQ7^O7+%xO%4wQ7^O,59gO%6tQ7^O,5<QO%8qQ7^O,5<SO%:nQ7^O,5<bO%<^Q7^O7+'SO%<kQ7^O7+'TO%<xQWO,5;tOOQO7+&w7+&wO%<}Q#tO<<KbOOQO1G4Q1G4QO%=_QWO1G4QO%=jQWO1G4QO%=xQWO7+*yO%=xQWO7+*yOH}QWO1G4SO%>QQ`O1G4SO%>[QWO7+*zOOQO7+'k7+'kO5iQ!LYO7+'kOOQO7+'j7+'jO$+fQWO7+'lO%>dQ`O7+'lOOQO7+'p7+'pO5iQ!LYO7+'jO$+fQWO7+'kO%>kQWO7+'lOH}QWO7+'lO#4jQWO7+'kO%>pQ#tO<<MwOOQ!LS7+$o7+$oO%>zQ`O,5>kOOQO-E;}-E;}O#HbQWOANAOOOQQANAOANAOOH}QWOANAOO%?UQ!LbO7+'nOOQQAN=dAN=dO5qQWO1G4]OOQO1G4]1G4]O%?cQWO1G4]O%?hQWO7++RO%?hQWO7++RO5iQ!LYOANAkO%?pQWOANAkOOQQANAkANAkO%?uQWOANAOO%?}Q`OANAOOOQQANAVANAVOOQQANAWANAWO%@XQWO,5>mOOQO-E<P-E<PO%@dQ7^O1G5dO#4oQWO,5=YO5_QWO,5=YO!,lQpO,5=YOOQO-E<R-E<ROOQQ1G2s1G2sO$9pQ!LrO,5:kO!?bQ&jO,5=YO%@nQ&jO,5=YO%APQ&jO,5:kOOQQ<<Kx<<KxOH}QWO<<KxO%-iQWO<<KxO%AZQWO<<KxO%AcQ`O<<KxO){QYO<<KxOH}QWO<<KxOOQQ<<K{<<K{O5iQ!LYO<<K{O#4oQWO<<K{O5_QWO<<K{O%AmQ&jO1G4[O%ArQWO7++POOQQAN=ZAN=ZO5iQ!LYOAN=ZOOQQ<<Nn<<NnOOQQ<<No<<NoOOQQ<<LT<<LTO%AzQWO<<LTO%BPQYO<<LTO%BWQWO<<NnO%B]QWO<<NoOOQQ1G3_1G3_OOQQANBSANBSO:^QWOANBSO%BbQ7^O<<IiOOQO<<Hk<<HkOOQO7+%q7+%qO%/yQ!LdO7+%qO){QYO7+%qOOQO7+%k7+%kO:^QWO7+%kO!,lQpO7+%kO%BlQ!LYO7+%qO!?bQ&jO7+%kO%BwQ!LYO7+%qO%CVQ&jO7+%kO%ChQ!LYO7+%qOOQ!LSAN>}AN>}O%C|Q!LdO<<KbO%FUQ7^O<<JPO%FcQ7^O1G1uO%HRQ7^O1G2WO%JOQ7^O1G2YO%K{Q7^O<<JoO%LYQ7^O<<IdOOQO1G1`1G1`OOQO7+)l7+)lO%LgQWO7+)lO%LrQWO<<NeO%LzQ`O7+)nOOQO<<KV<<KVO5iQ!LYO<<KWO$+fQWO<<KWOOQO<<KU<<KUO5iQ!LYO<<KVO%MUQ`O<<KWO$+fQWO<<KVOOQQG26jG26jO#HbQWOG26jOOQO7+)w7+)wO5qQWO7+)wO%M]QWO<<NmOOQQG27VG27VO5iQ!LYOG27VOH}QWOG26jOLRQYO1G4XO%MeQWO7++OO5iQ!LYO1G2tO#4oQWO1G2tO5_QWO1G2tO!,lQpO1G2tO!?bQ&jO1G2tO%1eQ!LrO1G0VO%MmQ&jO1G2tO%-iQWOANAdOOQQANAdANAdOH}QWOANAdO%NOQWOANAdO%NWQ`OANAdOOQQANAgANAgO5iQ!LYOANAgO#4oQWOANAgOOQO'#Gr'#GrOOQO7+)v7+)vOOQQG22uG22uOOQQANAoANAoO%NbQWOANAoOOQQANDYANDYOOQQANDZANDZO%NgQYOG27nOOQO<<I]<<I]O%/yQ!LdO<<I]OOQO<<IV<<IVO:^QWO<<IVO){QYO<<I]O!,lQpO<<IVO&$eQ!LYO<<I]O!?bQ&jO<<IVO&$pQ!LYO<<I]O&%OQ7^O7+'cOOQO<<MW<<MWOOQOAN@rAN@rO5iQ!LYOAN@rOOQOAN@qAN@qO$+fQWOAN@rO5iQ!LYOAN@qOOQQLD,ULD,UOOQO<<Mc<<McOOQQLD,qLD,qO#HbQWOLD,UO&&nQ7^O7+)sOOQO7+(`7+(`O5iQ!LYO7+(`O#4oQWO7+(`O5_QWO7+(`O!,lQpO7+(`O!?bQ&jO7+(`OOQQG27OG27OO%-iQWOG27OOH}QWOG27OOOQQG27RG27RO5iQ!LYOG27ROOQQG27ZG27ZO:^QWOLD-YOOQOAN>wAN>wOOQOAN>qAN>qO%/yQ!LdOAN>wO:^QWOAN>qO){QYOAN>wO!,lQpOAN>qO&&xQ!LYOAN>wO&'TQ7^O<<KbOOQOG26^G26^O5iQ!LYOG26^OOQOG26]G26]OOQQ!$( p!$( pOOQO<<Kz<<KzO5iQ!LYO<<KzO#4oQWO<<KzO5_QWO<<KzO!,lQpO<<KzOOQQLD,jLD,jO%-iQWOLD,jOOQQLD,mLD,mOOQQ!$(!t!$(!tOOQOG24cG24cOOQOG24]G24]O%/yQ!LdOG24cO:^QWOG24]O){QYOG24cOOQOLD+xLD+xOOQOANAfANAfO5iQ!LYOANAfO#4oQWOANAfO5_QWOANAfOOQQ!$(!U!$(!UOOQOLD)}LD)}OOQOLD)wLD)wO%/yQ!LdOLD)}OOQOG27QG27QO5iQ!LYOG27QO#4oQWOG27QOOQO!$'Mi!$'MiOOQOLD,lLD,lO5iQ!LYOLD,lOOQO!$(!W!$(!WOLRQYO'#DnO&(sQbO'#IqOLRQYO'#DfO&(zQ!LdO'#CgO&)eQbO'#CgO&)uQYO,5:rOLRQYO,5:}OLRQYO,5:}OLRQYO,5:}OLRQYO,5:}OLRQYO,5:}OLRQYO,5:}OLRQYO,5:}OLRQYO,5:}OLRQYO,5:}OLRQYO,5:}OLRQYO,5:}OLRQYO'#HyO&+uQWO,5<PO&-XQWO,5:}OLRQYO,5;bO!(ZQWO'#C{O!(ZQWO'#C{OH}QWO'#FfO&+}QWO'#FfOH}QWO'#FhO&+}QWO'#FhOH}QWO'#FvO&+}QWO'#FvOLRQYO,5?kO&)uQYO1G0^O&-`Q7^O'#CgOLRQYO1G1hOH}QWO,5<lO&+}QWO,5<lOH}QWO,5<nO&+}QWO,5<nOH}QWO,5<ZO&+}QWO,5<ZO&)uQYO1G1iOLRQYO7+&eOH}QWO1G1wO&+}QWO1G1wO&)uQYO7+'TO&)uQYO7+%xOH}QWO7+'vO&+}QWO7+'vO&-jQWO'#EWO&-oQWO'#EWO&-wQWO'#EvO&-|QWO'#EcO&.RQWO'#JPO&.^QWO'#I}O&.iQWO,5:rO&.nQ#tO,5;|O&.uQWO'#FoO&.zQWO'#FoO&/PQWO,5;}O&/XQWO,5:rO&/aQ7^O1G0yO&/hQWO,5<]O&/mQWO,5<]O&/rQWO1G1iO&/wQWO1G0^O&/|Q#tO1G2[O&0TQ#tO1G2[O4QQWO'#FdO5_QWO'#FcOBqQWO'#EVOLRQYO,5;_O!(jQWO'#FqO!(jQWO'#FqOJ^QWO,5<pOJ^QWO,5<p",
    stateData: "&1Q~O'TOS'UOSSOSTOS~OPTOQTOWyO]cO^hOanObmOgcOiTOjcOkcOnTOpTOuROwcOxcOycO!PSO!ZkO!`UO!cTO!dTO!eTO!fTO!gTO!jlO#`sO#ppO#t^O${qO$}tO%PrO%QrO%TuO%VvO%YwO%ZwO%]xO%jzO%p{O%r|O%t}O%v!OO%y!PO&P!QO&T!RO&V!SO&X!TO&Z!UO&]!VO'WPO'aQO'mYO'zaO~OPZXYZX^ZXiZXrZXsZXuZX}ZX!]ZX!^ZX!`ZX!fZX!wZX#ScX#WZX#XZX#YZX#ZZX#[ZX#]ZX#^ZX#_ZX#aZX#cZX#eZX#fZX#kZX'RZX'aZX'nZX'uZX'vZX~O!X$hX~P$zO'O!XO'P!WO'Q!ZO~OPTOQTO]cOa!jOb!iOgcOiTOjcOkcOnTOpTOuROwcOxcOycO!P!bO!ZkO!`UO!cTO!dTO!eTO!fTO!gTO!j!hO#p!kO#t^O'W![O'aQO'mYO'zaO~O|!`O}!]Oz'hPz'rP~P'dO!O!lO~P`OPTOQTO]cOa!jOb!iOgcOiTOjcOkcOnTOpTOuROwcOxcOycO!P!bO!ZkO!`UO!cTO!dTO!eTO!fTO!gTO!j!hO#p!kO#t^O'W9VO'aQO'mYO'zaO~OPTOQTO]cOa!jOb!iOgcOiTOjcOkcOnTOpTOuROwcOxcOycO!P!bO!ZkO!`UO!cTO!dTO!eTO!fTO!gTO!j!hO#p!kO#t^O'aQO'mYO'zaO~O|!qO#Q!tO#R!qO'W9WO!_'oP~P+{O#S!uO~O!X!vO#S!uO~OP#]OY#cOi#QOr!zOs!zOu!{O}#aO!]#SO!^!xO!`!yO!f#]O#W#OO#X#PO#Y#PO#Z#PO#[#RO#]#SO#^#SO#_#SO#a#TO#c#VO#e#XO#f#YO'aQO'n#ZO'u!|O'v!}O~O^'eX'R'eX!_'eXz'eX!P'eX$|'eX!X'eX~P.jO!w#dO#k#dOP'fXY'fX^'fXi'fXr'fXs'fXu'fX}'fX!]'fX!^'fX!`'fX!f'fX#W'fX#X'fX#Y'fX#Z'fX#['fX#]'fX#^'fX#a'fX#c'fX#e'fX#f'fX'a'fX'n'fX'u'fX'v'fX~O#_'fX'R'fXz'fX!_'fX'c'fX!P'fX$|'fX!X'fX~P0zO!w#dO~O#v#eO#}#iO~O!P#jO#t^O$Q#kO$S#mO~O]#pOg#}Oi#qOj#pOk#pOn$OOp$POu#wO!P#xO!Z$UO!`#uO#R$VO#p$SO$Z$QO$]$RO$`$TO'W#oO'a#rO'['^P~O!`$WO~O!X$YO~O^$ZO'R$ZO~O'W$_O~O!`$WO'W$_O'X$aO']$bO~Ob$hO!`$WO'W$_O~O#_#SO~O]$qOr$mO!P$jO!`$lO$}$pO'W$_O'X$aO[(SP~O!j$rO~Ou$sO!P$tO'W$_O~Ou$sO!P$tO%V$xO'W$_O~O'W$yO~O#`sO$}tO%PrO%QrO%TuO%VvO%YwO%ZwO~Oa%SOb%RO!j%PO${%QO%_%OO~P7uOa%VObmO!P%UO!jlO#`sO${qO%PrO%QrO%TuO%VvO%YwO%ZwO%]xO~O_%YO!w%]O$}%WO'X$aO~P8tO!`%^O!c%bO~O!`%cO~O!PSO~O^$ZO&}%kO'R$ZO~O^$ZO&}%nO'R$ZO~O^$ZO&}%pO'R$ZO~O'O!XO'P!WO'Q%tO~OPZXYZXiZXrZXsZXuZX}ZX}cX!]ZX!^ZX!`ZX!fZX!wZX!wcX#ScX#WZX#XZX#YZX#ZZX#[ZX#]ZX#^ZX#_ZX#aZX#cZX#eZX#fZX#kZX'aZX'nZX'uZX'vZX~OzZXzcX~P;aO|%vOz&cX}&cX~P){O}!]Oz'hX~OP#]OY#cOi#QOr!zOs!zOu!{O}!]O!]#SO!^!xO!`!yO!f#]O#W#OO#X#PO#Y#PO#Z#PO#[#RO#]#SO#^#SO#_#SO#a#TO#c#VO#e#XO#f#YO'aQO'n#ZO'u!|O'v!}O~Oz'hX~P>WOz%{O~Ou&OO!S&YO!T&RO!U&RO'X$aO~O]&POj&PO|&SO'd%|O!O'iP!O'tP~P@ZOz'qX}'qX!X'qX!_'qX'n'qX~O!w'qX#S!{X!O'qX~PASO!w&ZOz'sX}'sX~O}&[Oz'rX~Oz&^O~O!w#dO~PASOR&bO!P&_O!k&aO'W$_O~Ob&gO!`$WO'W$_O~Or$mO!`$lO~O!O&hO~P`Or!zOs!zOu!{O!^!xO!`!yO'aQOP!baY!bai!ba}!ba!]!ba!f!ba#W!ba#X!ba#Y!ba#Z!ba#[!ba#]!ba#^!ba#_!ba#a!ba#c!ba#e!ba#f!ba'n!ba'u!ba'v!ba~O^!ba'R!baz!ba!_!ba'c!ba!P!ba$|!ba!X!ba~PC]O!_&iO~O!X!vO!w&kO'n&jO}'pX^'pX'R'pX~O!_'pX~PEuO}&oO!_'oX~O!_&qO~Ou$sO!P$tO#R&rO'W$_O~OPTOQTO]cOa!jOb!iOgcOiTOjcOkcOnTOpTOuROwcOxcOycO!PSO!ZkO!`UO!cTO!dTO!eTO!fTO!gTO!j!hO#p!kO#t^O'W9VO'aQO'mYO'zaO~O]#pOg#}Oi#qOj#pOk#pOn$OOp9iOu#wO!P#xO!Z:lO!`#uO#R9oO#p$SO$Z9kO$]9mO$`$TO'W&vO'a#rO~O#S&xO~O]#pOg#}Oi#qOj#pOk#pOn$OOp$POu#wO!P#xO!Z$UO!`#uO#R$VO#p$SO$Z$QO$]$RO$`$TO'W&vO'a#rO~O'['kP~PJ^O|&|O!_'lP~P){O'd'OO'mYO~OP9SOQ9SO]cOa:jOb!iOgcOi9SOjcOkcOn9SOp9SOuROwcOxcOycO!P!bO!Z9UO!`UO!c9SO!d9SO!e9SO!f9SO!g9SO!j!hO#p!kO#t^O'W'^O'aQO'mYO'z:hO~O!`!yO~O}#aO^$Xa'R$Xa!_$Xaz$Xa!P$Xa$|$Xa!X$Xa~O#`'eO~PH}O!X'gO!P'wX#s'wX#v'wX#}'wX~Or'hO~PNyOr'hO!P'wX#s'wX#v'wX#}'wX~O!P'jO#s'nO#v'iO#}'oO~O|'rO~PLRO#v#eO#}'uO~Or$aXu$aX!^$aX'n$aX'u$aX'v$aX~OReX}eX!weX'[eX'[$aX~P!!cOj'wO~O'O'yO'P'xO'Q'{O~Or'}Ou(OO'n#ZO'u(QO'v(SO~O'['|O~P!#lO'[(VO~O]#pOg#}Oi#qOj#pOk#pOn$OOp9iOu#wO!P#xO!Z:lO!`#uO#R9oO#p$SO$Z9kO$]9mO$`$TO'a#rO~O|(ZO'W(WO!_'{P~P!$ZO#S(]O~O|(aO'W(^Oz'|P~P!$ZO^(jOi(oOu(gO!S(mO!T(fO!U(fO!`(dO!t(nO$s(iO'X$aO'd(cO~O!O(lO~P!&RO!^!xOr'`Xu'`X'n'`X'u'`X'v'`X}'`X!w'`X~O'['`X#i'`X~P!&}OR(rO!w(qO}'_X'['_X~O}(sO'['^X~O'W(uO~O!`(zO~O'W&vO~O!`(dO~Ou$sO|!qO!P$tO#Q!tO#R!qO'W$_O!_'oP~O!X!vO#S)OO~OP#]OY#cOi#QOr!zOs!zOu!{O!]#SO!^!xO!`!yO!f#]O#W#OO#X#PO#Y#PO#Z#PO#[#RO#]#SO#^#SO#_#SO#a#TO#c#VO#e#XO#f#YO'aQO'n#ZO'u!|O'v!}O~O^!Ya}!Ya'R!Yaz!Ya!_!Ya'c!Ya!P!Ya$|!Ya!X!Ya~P!)`OR)WO!P&_O!k)VO$|)UO']$bO~O'W$yO'['^P~O!X)ZO!P'ZX^'ZX'R'ZX~O!`$WO']$bO~O!`$WO'W$_O']$bO~O!X!vO#S&xO~O$})gO'W)cO!O(TP~O})hO[(SX~O'd'OO~OY)lO~O[)mO~O!P$jO'W$_O'X$aO[(SP~Ou$sO|)rO!P$tO'W$_Oz'rP~O]&VOj&VO|)sO'd'OO!O'tP~O})tO^(PX'R(PX~O!w)xO']$bO~OR){O!P#xO']$bO~O!P)}O~Or*PO!PSO~O!j*UO~Ob*ZO~O'W(uO!O(RP~Ob$hO~O$}tO'W$yO~P8tOY*aO[*`O~OPTOQTO]cOanObmOgcOiTOjcOkcOnTOpTOuROwcOxcOycO!ZkO!`UO!cTO!dTO!eTO!fTO!gTO!jlO#t^O${qO'aQO'mYO'zaO~O!P!bO#p!kO'W9VO~P!0uO[*`O^$ZO'R$ZO~O^*eO#`*gO%P*gO%Q*gO~P){O!`%^O~O%p*lO~O!P*nO~O&Q*qO&R*pOP&OaQ&OaW&Oa]&Oa^&Oaa&Oab&Oag&Oai&Oaj&Oak&Oan&Oap&Oau&Oaw&Oax&Oay&Oa!P&Oa!Z&Oa!`&Oa!c&Oa!d&Oa!e&Oa!f&Oa!g&Oa!j&Oa#`&Oa#p&Oa#t&Oa${&Oa$}&Oa%P&Oa%Q&Oa%T&Oa%V&Oa%Y&Oa%Z&Oa%]&Oa%j&Oa%p&Oa%r&Oa%t&Oa%v&Oa%y&Oa&P&Oa&T&Oa&V&Oa&X&Oa&Z&Oa&]&Oa&|&Oa'W&Oa'a&Oa'm&Oa'z&Oa!O&Oa%w&Oa_&Oa%|&Oa~O'W*tO~O'c*wO~Oz&ca}&ca~P!)`O}!]Oz'ha~Oz'ha~P>WO}&[Oz'ra~O}tX}!VX!OtX!O!VX!XtX!X!VX!`!VX!wtX']!VX~O!X+OO!w*}O}#PX}'jX!O#PX!O'jX!X'jX!`'jX']'jX~O!X+QO!`$WO']$bO}!RX!O!RX~O]%}Oj%}Ou&OO'd(cO~OP9SOQ9SO]cOa:jOb!iOgcOi9SOjcOkcOn9SOp9SOuROwcOxcOycO!P!bO!Z9UO!`UO!c9SO!d9SO!e9SO!f9SO!g9SO!j!hO#p!kO#t^O'aQO'mYO'z:hO~O'W9sO~P!:sO}+UO!O'iX~O!O+WO~O!X+OO!w*}O}#PX!O#PX~O}+XO!O'tX~O!O+ZO~O]%}Oj%}Ou&OO'X$aO'd(cO~O!T+[O!U+[O~P!=qOu$sO|+_O!P$tO'W$_Oz&hX}&hX~O^+dO!S+gO!T+cO!U+cO!n+kO!o+iO!p+jO!q+hO!t+lO'X$aO'd(cO'm+aO~O!O+fO~P!>rOR+qO!P&_O!k+pO~O!w+wO}'pa!_'pa^'pa'R'pa~O!X!vO~P!?|O}&oO!_'oa~Ou$sO|+zO!P$tO#Q+|O#R+zO'W$_O}&jX!_&jX~O^!zi}!zi'R!ziz!zi!_!zi'c!zi!P!zi$|!zi!X!zi~P!)`O#S!va}!va!_!va!w!va!P!va^!va'R!vaz!va~P!#lO#S'`XP'`XY'`X^'`Xi'`Xs'`X!]'`X!`'`X!f'`X#W'`X#X'`X#Y'`X#Z'`X#['`X#]'`X#^'`X#_'`X#a'`X#c'`X#e'`X#f'`X'R'`X'a'`X!_'`Xz'`X!P'`X'c'`X$|'`X!X'`X~P!&}O},VO'['kX~P!#lO'[,XO~O},YO!_'lX~P!)`O!_,]O~Oz,^O~OP#]Or!zOs!zOu!{O!^!xO!`!yO!f#]O'aQOY#Vi^#Vii#Vi}#Vi!]#Vi#X#Vi#Y#Vi#Z#Vi#[#Vi#]#Vi#^#Vi#_#Vi#a#Vi#c#Vi#e#Vi#f#Vi'R#Vi'n#Vi'u#Vi'v#Viz#Vi!_#Vi'c#Vi!P#Vi$|#Vi!X#Vi~O#W#Vi~P!EZO#W#OO~P!EZOP#]Or!zOs!zOu!{O!^!xO!`!yO!f#]O#W#OO#X#PO#Y#PO#Z#PO'aQOY#Vi^#Vi}#Vi!]#Vi#[#Vi#]#Vi#^#Vi#_#Vi#a#Vi#c#Vi#e#Vi#f#Vi'R#Vi'n#Vi'u#Vi'v#Viz#Vi!_#Vi'c#Vi!P#Vi$|#Vi!X#Vi~Oi#Vi~P!GuOi#QO~P!GuOP#]Oi#QOr!zOs!zOu!{O!^!xO!`!yO!f#]O#W#OO#X#PO#Y#PO#Z#PO#[#RO'aQO^#Vi}#Vi#a#Vi#c#Vi#e#Vi#f#Vi'R#Vi'n#Vi'u#Vi'v#Viz#Vi!_#Vi'c#Vi!P#Vi$|#Vi!X#Vi~OY#Vi!]#Vi#]#Vi#^#Vi#_#Vi~P!JaOY#cO!]#SO#]#SO#^#SO#_#SO~P!JaOP#]OY#cOi#QOr!zOs!zOu!{O!]#SO!^!xO!`!yO!f#]O#W#OO#X#PO#Y#PO#Z#PO#[#RO#]#SO#^#SO#_#SO#a#TO'aQO^#Vi}#Vi#c#Vi#e#Vi#f#Vi'R#Vi'n#Vi'v#Viz#Vi!_#Vi'c#Vi!P#Vi$|#Vi!X#Vi~O'u#Vi~P!MXO'u!|O~P!MXOP#]OY#cOi#QOr!zOs!zOu!{O!]#SO!^!xO!`!yO!f#]O#W#OO#X#PO#Y#PO#Z#PO#[#RO#]#SO#^#SO#_#SO#a#TO#c#VO'aQO'u!|O^#Vi}#Vi#e#Vi#f#Vi'R#Vi'n#Viz#Vi!_#Vi'c#Vi!P#Vi$|#Vi!X#Vi~O'v#Vi~P# sO'v!}O~P# sOP#]OY#cOi#QOr!zOs!zOu!{O!]#SO!^!xO!`!yO!f#]O#W#OO#X#PO#Y#PO#Z#PO#[#RO#]#SO#^#SO#_#SO#a#TO#c#VO#e#XO'aQO'u!|O'v!}O~O^#Vi}#Vi#f#Vi'R#Vi'n#Viz#Vi!_#Vi'c#Vi!P#Vi$|#Vi!X#Vi~P#$_OPZXYZXiZXrZXsZXuZX!]ZX!^ZX!`ZX!fZX!wZX#ScX#WZX#XZX#YZX#ZZX#[ZX#]ZX#^ZX#_ZX#aZX#cZX#eZX#fZX#kZX'aZX'nZX'uZX'vZX}ZX!OZX~O#iZX~P#&rOP#]OY9gOi9[Or!zOs!zOu!{O!]9^O!^!xO!`!yO!f#]O#W9YO#X9ZO#Y9ZO#Z9ZO#[9]O#]9^O#^9^O#_9^O#a9_O#c9aO#e9cO#f9dO'aQO'n#ZO'u!|O'v!}O~O#i,`O~P#(|OP'fXY'fXi'fXr'fXs'fXu'fX!]'fX!^'fX!`'fX!f'fX#W'fX#X'fX#Y'fX#Z'fX#['fX#]'fX#^'fX#a'fX#c'fX#e'fX#f'fX'a'fX'n'fX'u'fX'v'fX}'fX~O!w9hO#k9hO#_'fX#i'fX!O'fX~P#*wO^&ma}&ma'R&ma!_&ma'c&maz&ma!P&ma$|&ma!X&ma~P!)`OP#ViY#Vi^#Vii#Vis#Vi}#Vi!]#Vi!^#Vi!`#Vi!f#Vi#W#Vi#X#Vi#Y#Vi#Z#Vi#[#Vi#]#Vi#^#Vi#_#Vi#a#Vi#c#Vi#e#Vi#f#Vi'R#Vi'a#Viz#Vi!_#Vi'c#Vi!P#Vi$|#Vi!X#Vi~P!#lO^#ji}#ji'R#jiz#ji!_#ji'c#ji!P#ji$|#ji!X#ji~P!)`O#v,bO~O#v,cO~O!X'gO!w,dO!P#zX#s#zX#v#zX#}#zX~O|,eO~O!P'jO#s,gO#v'iO#},hO~O}9eO!O'eX~P#(|O!O,iO~O#},kO~O'O'yO'P'xO'Q,nO~O],qOj,qOz,rO~O}cX!XcX!_cX!_$aX'ncX~P!!cO!_,xO~P!#lO},yO!X!vO'n&jO!_'{X~O!_-OO~Oz$aX}$aX!X$hX~P!!cO}-QOz'|X~P!#lO!X-SO~Oz-UO~O|(ZO'W$_O!_'{P~Oi-YO!X!vO!`$WO']$bO'n&jO~O!X)ZO~O!O-`O~P!&RO!T-aO!U-aO'X$aO'd(cO~Ou-cO'd(cO~O!t-dO~O'W$yO}&rX'[&rX~O}(sO'['^a~Or-iOs-iOu-jO'noa'uoa'voa}oa!woa~O'[oa#ioa~P#5{Or'}Ou(OO'n$Ya'u$Ya'v$Ya}$Ya!w$Ya~O'[$Ya#i$Ya~P#6qOr'}Ou(OO'n$[a'u$[a'v$[a}$[a!w$[a~O'[$[a#i$[a~P#7dO]-kO~O#S-lO~O'[$ja}$ja#i$ja!w$ja~P!#lO#S-oO~OR-xO!P&_O!k-wO$|-vO~O'[-yO~O]#pOi#qOj#pOk#pOn$OOp9iOu#wO!P#xO!Z:lO!`#uO#R9oO#p$SO$Z9kO$]9mO$`$TO'a#rO~Og-{O'W-zO~P#9ZO!X)ZO!P'Za^'Za'R'Za~O#S.RO~OYZX}cX!OcX~O}.SO!O(TX~O!O.UO~OY.VO~O'W)cO~O!P$jO'W$_O[&zX}&zX~O})hO[(Sa~O!_.[O~P!)`O].^O~OY._O~O[.`O~OR-xO!P&_O!k-wO$|-vO']$bO~O})tO^(Pa'R(Pa~O!w.fO~OR.iO!P#xO~O'd'OO!O(QP~OR.sO!P.oO!k.rO$|.qO']$bO~OY.}O}.{O!O(RX~O!O/OO~O[/QO^$ZO'R$ZO~O]/RO~O#_/TO%n/UO~P0zO!w#dO#_/TO%n/UO~O^/VO~P){O^/XO~O%w/]OP%uiQ%uiW%ui]%ui^%uia%uib%uig%uii%uij%uik%uin%uip%uiu%uiw%uix%uiy%ui!P%ui!Z%ui!`%ui!c%ui!d%ui!e%ui!f%ui!g%ui!j%ui#`%ui#p%ui#t%ui${%ui$}%ui%P%ui%Q%ui%T%ui%V%ui%Y%ui%Z%ui%]%ui%j%ui%p%ui%r%ui%t%ui%v%ui%y%ui&P%ui&T%ui&V%ui&X%ui&Z%ui&]%ui&|%ui'W%ui'a%ui'm%ui'z%ui!O%ui_%ui%|%ui~O_/cO!O/aO%|/bO~P`O!PSO!`/fO~O}#aO'c$Xa~Oz&ci}&ci~P!)`O}!]Oz'hi~O}&[Oz'ri~Oz/jO~O}!Ra!O!Ra~P#(|O]%}Oj%}O|/pO'd(cO}&dX!O&dX~P@ZO}+UO!O'ia~O]&VOj&VO|)sO'd'OO}&iX!O&iX~O}+XO!O'ta~Oz'si}'si~P!)`O^$ZO!X!vO!`$WO!f/{O!w/yO'R$ZO']$bO'n&jO~O!O0OO~P!>rO!T0PO!U0PO'X$aO'd(cO'm+aO~O!S0QO~P#GTO!PSO!S0QO!q0SO!t0TO~P#GTO!S0QO!o0VO!p0VO!q0SO!t0TO~P#GTO!P&_O~O!P&_O~P!#lO}'pi!_'pi^'pi'R'pi~P!)`O!w0`O}'pi!_'pi^'pi'R'pi~O}&oO!_'oi~Ou$sO!P$tO#R0bO'W$_O~O#SoaPoaYoa^oaioa!]oa!^oa!`oa!foa#Woa#Xoa#Yoa#Zoa#[oa#]oa#^oa#_oa#aoa#coa#eoa#foa'Roa'aoa!_oazoa!Poa'coa$|oa!Xoa~P#5{O#S$YaP$YaY$Ya^$Yai$Yas$Ya!]$Ya!^$Ya!`$Ya!f$Ya#W$Ya#X$Ya#Y$Ya#Z$Ya#[$Ya#]$Ya#^$Ya#_$Ya#a$Ya#c$Ya#e$Ya#f$Ya'R$Ya'a$Ya!_$Yaz$Ya!P$Ya'c$Ya$|$Ya!X$Ya~P#6qO#S$[aP$[aY$[a^$[ai$[as$[a!]$[a!^$[a!`$[a!f$[a#W$[a#X$[a#Y$[a#Z$[a#[$[a#]$[a#^$[a#_$[a#a$[a#c$[a#e$[a#f$[a'R$[a'a$[a!_$[az$[a!P$[a'c$[a$|$[a!X$[a~P#7dO#S$jaP$jaY$ja^$jai$jas$ja}$ja!]$ja!^$ja!`$ja!f$ja#W$ja#X$ja#Y$ja#Z$ja#[$ja#]$ja#^$ja#_$ja#a$ja#c$ja#e$ja#f$ja'R$ja'a$ja!_$jaz$ja!P$ja!w$ja'c$ja$|$ja!X$ja~P!#lO^!zq}!zq'R!zqz!zq!_!zq'c!zq!P!zq$|!zq!X!zq~P!)`O}&eX'[&eX~PJ^O},VO'['ka~O|0jO}&fX!_&fX~P){O},YO!_'la~O},YO!_'la~P!)`O#i!ba!O!ba~PC]O#i!Ya}!Ya!O!Ya~P#(|O!P0}O#t^O#{1OO~O!O1SO~O'c1TO~P!#lO^$Uq}$Uq'R$Uqz$Uq!_$Uq'c$Uq!P$Uq$|$Uq!X$Uq~P!)`Oz1UO~O],qOj,qO~Or'}Ou(OO'v(SO'n$ti'u$ti}$ti!w$ti~O'[$ti#i$ti~P$'tOr'}Ou(OO'n$vi'u$vi'v$vi}$vi!w$vi~O'[$vi#i$vi~P$(gO#i1VO~P!#lO|1XO'W$_O}&nX!_&nX~O},yO!_'{a~O},yO!X!vO!_'{a~O},yO!X!vO'n&jO!_'{a~O'[$ci}$ci#i$ci!w$ci~P!#lO|1`O'W(^Oz&pX}&pX~P!$ZO}-QOz'|a~O}-QOz'|a~P!#lO!X!vO~O!X!vO#_1jO~Oi1nO!X!vO'n&jO~O}'_i'['_i~P!#lO!w1qO}'_i'['_i~P!#lO!_1tO~O^$Vq}$Vq'R$Vqz$Vq!_$Vq'c$Vq!P$Vq$|$Vq!X$Vq~P!)`O}1xO!P'}X~P!#lO!P&_O$|1{O~O!P&_O$|1{O~P!#lO!P$aX$qZX^$aX'R$aX~P!!cO$q2POrfXufX!PfX'nfX'ufX'vfX^fX'RfX~O$q2PO~O$}2WO'W)cO}&yX!O&yX~O}.SO!O(Ta~OY2[O~O[2]O~O]2`O~OR2bO!P&_O!k2aO$|1{O~O^$ZO'R$ZO~P!#lO!P#xO~P!#lO}2gO!w2iO!O(QX~O!O2jO~Ou(gO!S2sO!T2lO!U2lO!n2rO!o2qO!p2qO!t2pO'X$aO'd(cO'm+aO~O!O2oO~P$0uOR2zO!P.oO!k2yO$|2xO~OR2zO!P.oO!k2yO$|2xO']$bO~O'W(uO}&xX!O&xX~O}.{O!O(Ra~O'd3TO~O]3VO~O[3XO~O!_3[O~P){O^3^O~O^3^O~P){O#_3`O%n3aO~PEuO_/cO!O3eO%|/bO~P`O!X3gO~O&R3hOP&OqQ&OqW&Oq]&Oq^&Oqa&Oqb&Oqg&Oqi&Oqj&Oqk&Oqn&Oqp&Oqu&Oqw&Oqx&Oqy&Oq!P&Oq!Z&Oq!`&Oq!c&Oq!d&Oq!e&Oq!f&Oq!g&Oq!j&Oq#`&Oq#p&Oq#t&Oq${&Oq$}&Oq%P&Oq%Q&Oq%T&Oq%V&Oq%Y&Oq%Z&Oq%]&Oq%j&Oq%p&Oq%r&Oq%t&Oq%v&Oq%y&Oq&P&Oq&T&Oq&V&Oq&X&Oq&Z&Oq&]&Oq&|&Oq'W&Oq'a&Oq'm&Oq'z&Oq!O&Oq%w&Oq_&Oq%|&Oq~O}#Pi!O#Pi~P#(|O!w3jO}#Pi!O#Pi~O}!Ri!O!Ri~P#(|O^$ZO!w3qO'R$ZO~O^$ZO!X!vO!w3qO'R$ZO~O!T3uO!U3uO'X$aO'd(cO'm+aO~O^$ZO!X!vO!`$WO!f3vO!w3qO'R$ZO']$bO'n&jO~O!S3wO~P$9_O!S3wO!q3zO!t3{O~P$9_O^$ZO!X!vO!f3vO!w3qO'R$ZO'n&jO~O}'pq!_'pq^'pq'R'pq~P!)`O}&oO!_'oq~O#S$tiP$tiY$ti^$tii$tis$ti!]$ti!^$ti!`$ti!f$ti#W$ti#X$ti#Y$ti#Z$ti#[$ti#]$ti#^$ti#_$ti#a$ti#c$ti#e$ti#f$ti'R$ti'a$ti!_$tiz$ti!P$ti'c$ti$|$ti!X$ti~P$'tO#S$viP$viY$vi^$vii$vis$vi!]$vi!^$vi!`$vi!f$vi#W$vi#X$vi#Y$vi#Z$vi#[$vi#]$vi#^$vi#_$vi#a$vi#c$vi#e$vi#f$vi'R$vi'a$vi!_$viz$vi!P$vi'c$vi$|$vi!X$vi~P$(gO#S$ciP$ciY$ci^$cii$cis$ci}$ci!]$ci!^$ci!`$ci!f$ci#W$ci#X$ci#Y$ci#Z$ci#[$ci#]$ci#^$ci#_$ci#a$ci#c$ci#e$ci#f$ci'R$ci'a$ci!_$ciz$ci!P$ci!w$ci'c$ci$|$ci!X$ci~P!#lO}&ea'[&ea~P!#lO}&fa!_&fa~P!)`O},YO!_'li~O#i!zi}!zi!O!zi~P#(|OP#]Or!zOs!zOu!{O!^!xO!`!yO!f#]O'aQOY#Vii#Vi!]#Vi#X#Vi#Y#Vi#Z#Vi#[#Vi#]#Vi#^#Vi#_#Vi#a#Vi#c#Vi#e#Vi#f#Vi#i#Vi'n#Vi'u#Vi'v#Vi}#Vi!O#Vi~O#W#Vi~P$BuO#W9YO~P$BuOP#]Or!zOs!zOu!{O!^!xO!`!yO!f#]O#W9YO#X9ZO#Y9ZO#Z9ZO'aQOY#Vi!]#Vi#[#Vi#]#Vi#^#Vi#_#Vi#a#Vi#c#Vi#e#Vi#f#Vi#i#Vi'n#Vi'u#Vi'v#Vi}#Vi!O#Vi~Oi#Vi~P$D}Oi9[O~P$D}OP#]Oi9[Or!zOs!zOu!{O!^!xO!`!yO!f#]O#W9YO#X9ZO#Y9ZO#Z9ZO#[9]O'aQO#a#Vi#c#Vi#e#Vi#f#Vi#i#Vi'n#Vi'u#Vi'v#Vi}#Vi!O#Vi~OY#Vi!]#Vi#]#Vi#^#Vi#_#Vi~P$GVOY9gO!]9^O#]9^O#^9^O#_9^O~P$GVOP#]OY9gOi9[Or!zOs!zOu!{O!]9^O!^!xO!`!yO!f#]O#W9YO#X9ZO#Y9ZO#Z9ZO#[9]O#]9^O#^9^O#_9^O#a9_O'aQO#c#Vi#e#Vi#f#Vi#i#Vi'n#Vi'v#Vi}#Vi!O#Vi~O'u#Vi~P$IkO'u!|O~P$IkOP#]OY9gOi9[Or!zOs!zOu!{O!]9^O!^!xO!`!yO!f#]O#W9YO#X9ZO#Y9ZO#Z9ZO#[9]O#]9^O#^9^O#_9^O#a9_O#c9aO'aQO'u!|O#e#Vi#f#Vi#i#Vi'n#Vi}#Vi!O#Vi~O'v#Vi~P$KsO'v!}O~P$KsOP#]OY9gOi9[Or!zOs!zOu!{O!]9^O!^!xO!`!yO!f#]O#W9YO#X9ZO#Y9ZO#Z9ZO#[9]O#]9^O#^9^O#_9^O#a9_O#c9aO#e9cO'aQO'u!|O'v!}O~O#f#Vi#i#Vi'n#Vi}#Vi!O#Vi~P$M{O^#gy}#gy'R#gyz#gy!_#gy'c#gy!P#gy$|#gy!X#gy~P!)`OP#ViY#Vii#Vis#Vi!]#Vi!^#Vi!`#Vi!f#Vi#W#Vi#X#Vi#Y#Vi#Z#Vi#[#Vi#]#Vi#^#Vi#_#Vi#a#Vi#c#Vi#e#Vi#f#Vi#i#Vi'a#Vi}#Vi!O#Vi~P!#lO!^!xOP'`XY'`Xi'`Xr'`Xs'`Xu'`X!]'`X!`'`X!f'`X#W'`X#X'`X#Y'`X#Z'`X#['`X#]'`X#^'`X#_'`X#a'`X#c'`X#e'`X#f'`X#i'`X'a'`X'n'`X'u'`X'v'`X}'`X!O'`X~O#i#ji}#ji!O#ji~P#(|O!O4]O~O}&ma!O&ma~P#(|O!X!vO'n&jO}&na!_&na~O},yO!_'{i~O},yO!X!vO!_'{i~Oz&pa}&pa~P!#lO!X4dO~O}-QOz'|i~P!#lO}-QOz'|i~Oz4jO~O!X!vO#_4pO~Oi4qO!X!vO'n&jO~Oz4sO~O'[$eq}$eq#i$eq!w$eq~P!#lO^$Vy}$Vy'R$Vyz$Vy!_$Vy'c$Vy!P$Vy$|$Vy!X$Vy~P!)`O}1xO!P'}a~O!P&_O$|4xO~O!P&_O$|4xO~P!#lO^!zy}!zy'R!zyz!zy!_!zy'c!zy!P!zy$|!zy!X!zy~P!)`OY4{O~O}.SO!O(Ti~O]5QO~O[5RO~O'd'OO}&uX!O&uX~O}2gO!O(Qa~O!O5`O~P$0uOu-cO'd(cO'm+aO~O!S5cO!T5bO!U5bO!t0TO'X$aO'd(cO'm+aO~O!o5dO!p5dO~P%,eO!T5bO!U5bO'X$aO'd(cO'm+aO~O!P.oO~O!P.oO$|5fO~O!P.oO$|5fO~P!#lOR5kO!P.oO!k5jO$|5fO~OY5pO}&xa!O&xa~O}.{O!O(Ri~O]5sO~O!_5tO~O!_5uO~O!_5vO~O!_5vO~P){O^5xO~O!X5{O~O!_5}O~O}'si!O'si~P#(|O^$ZO'R$ZO~P!)`O^$ZO!w6SO'R$ZO~O^$ZO!X!vO!w6SO'R$ZO~O!T6XO!U6XO'X$aO'd(cO'm+aO~O^$ZO!X!vO!f6YO!w6SO'R$ZO'n&jO~O!`$WO']$bO~P%1PO!S6ZO~P%0nO}'py!_'py^'py'R'py~P!)`O#S$eqP$eqY$eq^$eqi$eqs$eq}$eq!]$eq!^$eq!`$eq!f$eq#W$eq#X$eq#Y$eq#Z$eq#[$eq#]$eq#^$eq#_$eq#a$eq#c$eq#e$eq#f$eq'R$eq'a$eq!_$eqz$eq!P$eq!w$eq'c$eq$|$eq!X$eq~P!#lO}&fi!_&fi~P!)`O#i!zq}!zq!O!zq~P#(|Or-iOs-iOu-jOPoaYoaioa!]oa!^oa!`oa!foa#Woa#Xoa#Yoa#Zoa#[oa#]oa#^oa#_oa#aoa#coa#eoa#foa#ioa'aoa'noa'uoa'voa}oa!Ooa~Or'}Ou(OOP$YaY$Yai$Yas$Ya!]$Ya!^$Ya!`$Ya!f$Ya#W$Ya#X$Ya#Y$Ya#Z$Ya#[$Ya#]$Ya#^$Ya#_$Ya#a$Ya#c$Ya#e$Ya#f$Ya#i$Ya'a$Ya'n$Ya'u$Ya'v$Ya}$Ya!O$Ya~Or'}Ou(OOP$[aY$[ai$[as$[a!]$[a!^$[a!`$[a!f$[a#W$[a#X$[a#Y$[a#Z$[a#[$[a#]$[a#^$[a#_$[a#a$[a#c$[a#e$[a#f$[a#i$[a'a$[a'n$[a'u$[a'v$[a}$[a!O$[a~OP$jaY$jai$jas$ja!]$ja!^$ja!`$ja!f$ja#W$ja#X$ja#Y$ja#Z$ja#[$ja#]$ja#^$ja#_$ja#a$ja#c$ja#e$ja#f$ja#i$ja'a$ja}$ja!O$ja~P!#lO#i$Uq}$Uq!O$Uq~P#(|O#i$Vq}$Vq!O$Vq~P#(|O!O6eO~O'[$xy}$xy#i$xy!w$xy~P!#lO!X!vO}&ni!_&ni~O!X!vO'n&jO}&ni!_&ni~O},yO!_'{q~Oz&pi}&pi~P!#lO}-QOz'|q~Oz6lO~P!#lOz6lO~O}'_y'['_y~P!#lO}&sa!P&sa~P!#lO!P$pq^$pq'R$pq~P!#lOY6tO~O}.SO!O(Tq~O]6wO~O!P&_O$|6xO~O!P&_O$|6xO~P!#lO!w6yO}&ua!O&ua~O}2gO!O(Qi~P#(|O!T7PO!U7PO'X$aO'd(cO'm+aO~O!S7RO!t3{O~P%@nO!P.oO$|7UO~O!P.oO$|7UO~P!#lO'd7[O~O}.{O!O(Rq~O!_7_O~O!_7_O~P){O!_7aO~O!_7bO~O}#Py!O#Py~P#(|O^$ZO!w7hO'R$ZO~O^$ZO!X!vO!w7hO'R$ZO~O!T7kO!U7kO'X$aO'd(cO'm+aO~O^$ZO!X!vO!f7lO!w7hO'R$ZO'n&jO~O#S$xyP$xyY$xy^$xyi$xys$xy}$xy!]$xy!^$xy!`$xy!f$xy#W$xy#X$xy#Y$xy#Z$xy#[$xy#]$xy#^$xy#_$xy#a$xy#c$xy#e$xy#f$xy'R$xy'a$xy!_$xyz$xy!P$xy!w$xy'c$xy$|$xy!X$xy~P!#lO#i#gy}#gy!O#gy~P#(|OP$ciY$cii$cis$ci!]$ci!^$ci!`$ci!f$ci#W$ci#X$ci#Y$ci#Z$ci#[$ci#]$ci#^$ci#_$ci#a$ci#c$ci#e$ci#f$ci#i$ci'a$ci}$ci!O$ci~P!#lOr'}Ou(OO'v(SOP$tiY$tii$tis$ti!]$ti!^$ti!`$ti!f$ti#W$ti#X$ti#Y$ti#Z$ti#[$ti#]$ti#^$ti#_$ti#a$ti#c$ti#e$ti#f$ti#i$ti'a$ti'n$ti'u$ti}$ti!O$ti~Or'}Ou(OOP$viY$vii$vis$vi!]$vi!^$vi!`$vi!f$vi#W$vi#X$vi#Y$vi#Z$vi#[$vi#]$vi#^$vi#_$vi#a$vi#c$vi#e$vi#f$vi#i$vi'a$vi'n$vi'u$vi'v$vi}$vi!O$vi~O#i$Vy}$Vy!O$Vy~P#(|O#i!zy}!zy!O!zy~P#(|O!X!vO}&nq!_&nq~O},yO!_'{y~Oz&pq}&pq~P!#lOz7rO~P!#lO}.SO!O(Ty~O}2gO!O(Qq~O!T8OO!U8OO'X$aO'd(cO'm+aO~O!P.oO$|8RO~O!P.oO$|8RO~P!#lO!_8UO~O&R8VOP&O!ZQ&O!ZW&O!Z]&O!Z^&O!Za&O!Zb&O!Zg&O!Zi&O!Zj&O!Zk&O!Zn&O!Zp&O!Zu&O!Zw&O!Zx&O!Zy&O!Z!P&O!Z!Z&O!Z!`&O!Z!c&O!Z!d&O!Z!e&O!Z!f&O!Z!g&O!Z!j&O!Z#`&O!Z#p&O!Z#t&O!Z${&O!Z$}&O!Z%P&O!Z%Q&O!Z%T&O!Z%V&O!Z%Y&O!Z%Z&O!Z%]&O!Z%j&O!Z%p&O!Z%r&O!Z%t&O!Z%v&O!Z%y&O!Z&P&O!Z&T&O!Z&V&O!Z&X&O!Z&Z&O!Z&]&O!Z&|&O!Z'W&O!Z'a&O!Z'm&O!Z'z&O!Z!O&O!Z%w&O!Z_&O!Z%|&O!Z~O^$ZO!w8[O'R$ZO~O^$ZO!X!vO!w8[O'R$ZO~OP$eqY$eqi$eqs$eq!]$eq!^$eq!`$eq!f$eq#W$eq#X$eq#Y$eq#Z$eq#[$eq#]$eq#^$eq#_$eq#a$eq#c$eq#e$eq#f$eq#i$eq'a$eq}$eq!O$eq~P!#lO}&uq!O&uq~P#(|O^$ZO!w8qO'R$ZO~OP$xyY$xyi$xys$xy!]$xy!^$xy!`$xy!f$xy#W$xy#X$xy#Y$xy#Z$xy#[$xy#]$xy#^$xy#_$xy#a$xy#c$xy#e$xy#f$xy#i$xy'a$xy}$xy!O$xy~P!#lO'c'eX~P.jO'cZXzZX!_ZX%nZX!PZX$|ZX!XZX~P$zO!XcX!_ZX!_cX'ncX~P;aOP9SOQ9SO]cOa:jOb!iOgcOi9SOjcOkcOn9SOp9SOuROwcOxcOycO!PSO!Z9UO!`UO!c9SO!d9SO!e9SO!f9SO!g9SO!j!hO#p!kO#t^O'W'^O'aQO'mYO'z:hO~O}9eO!O$Xa~O]#pOg#}Oi#qOj#pOk#pOn$OOp9jOu#wO!P#xO!Z:mO!`#uO#R9pO#p$SO$Z9lO$]9nO$`$TO'W&vO'a#rO~O#`'eO~P&+}O!OZX!OcX~P;aO#S9XO~O!X!vO#S9XO~O!w9hO~O#_9^O~O!w9qO}'sX!O'sX~O!w9hO}'qX!O'qX~O#S9rO~O'[9tO~P!#lO#S9yO~O#S9zO~O!X!vO#S9{O~O!X!vO#S9rO~O#i9|O~P#(|O#S9}O~O#S:OO~O#S:PO~O#S:QO~O#i:RO~P!#lO#i:SO~P!#lO#t~!^!n!p!q#Q#R'z$Z$]$`$q${$|$}%T%V%Y%Z%]%_~TS#t'z#Xy'T'U#v'T'W'd~",
    goto: "#Dk(XPPPPPPP(YP(jP*^PPPP-sPP.Y3j5^5qP5qPPP5q5qP5qP7_PP7dP7xPPPP<XPPPP<X>wPPP>}AYP<XPCsPPPPEk<XPPPPPGd<XPPJcK`PPPPKdL|PMUNVPK`<X<X!#^!&V!*v!*v!.TPPP!.[!1O<XPPPPPPPPPP!3sP!5UPP<X!6cP<XP<X<X<X<XP<X!8vPP!;mP!>`!>h!>l!>lP!;jP!>p!>pP!AcP!Ag<X<X!Am!D_5qP5qP5q5qP!Eb5q5q!GY5q!I[5q!J|5q5q!Kj!Md!Md!Mh!Md!MpP!MdP5q!Nl5q# v5q5q-sPPP##TPP##m##mP##mP#$S##mPP#$YP#$PP#$P#$lMQ#$P#%Z#%a#%d(Y#%g(YP#%n#%n#%nP(YP(YP(YP(YPP(YP#%t#%wP#%w(YPPP(YP(YP(YP(YP(YP(Y(Y#%{#&V#&]#&c#&q#&w#&}#'X#'_#'i#'o#'}#(T#(Z#(i#)O#*b#*p#*v#*|#+S#+Y#+d#+j#+p#+z#,^#,dPPPPPPPPP#,jPP#-^#1[PP#2r#2y#3RP#7_PP#7c#9v#?p#?t#?w#?z#@V#@YPP#@]#@a#AO#As#Aw#BZPP#B_#Be#BiP#Bl#Bp#Bs#Cc#Cy#DO#DR#DU#D[#D_#Dc#DgmhOSj}!m$Y%a%d%e%g*i*n/]/`Q$gmQ$npQ%XyS&R!b+UQ&f!iS(f#x(kQ)a$hQ)n$pQ*Y%RQ+[&YS+c&_+eQ+u&gQ-a(mQ.z*ZY0P+g+h+i+j+kS2l.o2nU3u0Q0S0VU5b2q2r2sS6X3w3zS7P5c5dQ7k6ZR8O7R$l[ORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#a#d$Y$l%Y%]%a%c%d%e%g%k%v&O&Z&a&k&x&|'|)O)V*e*i*n+p+w,Y,`-j-o-w.R.r/T/U/V/X/]/`/b/y0`0j2a2y3^3`3a3q5j5x6S7h8[8q!j'`#[#j&S'r*}+Q,e/p0}2i3j6y9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kQ(v$PQ)f$jQ*[%UQ*c%^Q,P9iQ-|)ZQ.X)gQ/S*aQ2V.SQ3R.{Q4U9jR4}2WpeOSjy}!m$Y%W%a%d%e%g*i*n/]/`R*^%Y&WVOSTjkn}!S!W!]!j!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#[#a#d#j$Y$l%Y%]%^%a%c%d%e%g%k%v&O&Z&a&k&x&|'r'|)O)V*e*i*n*}+Q+p+w,Y,`,e-j-o-w.R.r/T/U/V/X/]/`/b/p/y0`0j0}2a2i2y3^3`3a3j3q5j5x6S6y7h8[8q9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:j:kW!cRU!`&SQ$`lQ$fmS$kp$pv$urs!q!t$W$s&[&o&r)r)s)t*g+O+_+z+|/f0bQ$}wQ&c!hQ&e!iS(Y#u(dS)`$g$hQ)d$jQ)q$rQ*T%PQ*X%RS+t&f&gQ,}(ZQ.Q)aQ.W)gQ.Y)hQ.])lQ.u*US.y*Y*ZQ0^+uQ1W,yQ2U.SQ2Y.VQ2_._Q3Q.zQ4a1XQ4|2WQ5P2[Q6s4{R7u6t!Y$dm!i$f$g$h&Q&e&f&g(e)`)a+R+b+t+u-Z.Q/u/|0R0^1m3t3y6V7i8]Q)X$`Q)y$zQ)|${Q*W%RQ.a)qQ.t*TU.x*X*Y*ZQ2{.uS3P.y.zQ5]2kQ5o3QS6}5^5aS7|7O7QQ8g7}R8v8hW#{a$b(s:hS$zt%WQ${uQ$|vR)w$x$V#za!v!x#c#u#w$Q$R$V&b'x(R(T(U(](a(q(r)U)W)Z)x){+q,V-Q-S-l-v-x.f.i.q.s1V1`1j1q1x1{2P2b2x2z4d4p4x5f5k6x7U8R9g9k9l9m9n9o9p9u9v9w9x9y9z9}:O:R:S:h:n:oV(w$P9i9jU&V!b$t+XQ'P!zQ)k$mQ.j)}Q1r-iR5X2g&YcORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#[#a#d#j$Y$l%Y%]%^%a%c%d%e%g%k%v&O&S&Z&a&k&x&|'r'|)O)V*e*i*n*}+Q+p+w,Y,`,e-j-o-w.R.r/T/U/V/X/]/`/b/p/y0`0j0}2a2i2y3^3`3a3j3q5j5x6S6y7h8[8q9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:k$]#`Z!_!n$^%u%y&t&{'R'S'T'U'V'W'X'Y'Z'[']'_'b'f'p)j*y+S+]+v,U,[,_,a,o-m/k/n0_0i0m0n0o0p0q0r0s0t0u0v0w0x0y0|1R1v2S3l3o4P4S4T4Y4Z5Z6O6R6_6c6d7e7x8Y8o8z9T:a&ZcORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#[#a#d#j$Y$l%Y%]%^%a%c%d%e%g%k%v&O&S&Z&a&k&x&|'r'|)O)V*e*i*n*}+Q+p+w,Y,`,e-j-o-w.R.r/T/U/V/X/]/`/b/p/y0`0j0}2a2i2y3^3`3a3j3q5j5x6S6y7h8[8q9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kQ&T!bR/q+UY%}!b&R&Y+U+[S(e#x(kS+b&_+eS-Z(f(mQ-[(gQ-b(nQ.l*PU/|+c+g+hU0R+i+j+kS0W+l2pQ1m-aQ1o-cQ1p-dS2k.o2nU3t0P0Q0SQ3x0TQ3y0VS5^2l2sS5a2q2rU6V3u3w3zQ6[3{S7O5b5cQ7Q5dS7i6X6ZS7}7P7RQ8]7kR8h8OlhOSj}!m$Y%a%d%e%g*i*n/]/`Q%i!QS&s!u9XQ)^$eQ*R$}Q*S%OQ+r&dS,T&x9rS-n)O9{Q.O)_Q.n*QQ/d*pQ/e*qQ/m+PQ0U+iQ0[+sS1w-o:PQ2Q.PS2T.R:QQ3k/oQ3n/wQ3}0]Q4z2RQ5|3hQ6P3mQ6T3sQ6]4OQ7c5}Q7f6UQ8X7gQ8l8VQ8n8ZR8y8p$W#_Z!_!n%u%y&t&{'R'S'T'U'V'W'X'Y'Z'[']'_'b'f'p)j*y+S+]+v,U,[,_,o-m/k/n0_0i0m0n0o0p0q0r0s0t0u0v0w0x0y0|1R1v2S3l3o4P4S4T4Y4Z5Z6O6R6_6c6d7e7x8Y8o8z9T:aU(p#y&w0{T)S$^,a$W#^Z!_!n%u%y&t&{'R'S'T'U'V'W'X'Y'Z'[']'_'b'f'p)j*y+S+]+v,U,[,_,o-m/k/n0_0i0m0n0o0p0q0r0s0t0u0v0w0x0y0|1R1v2S3l3o4P4S4T4Y4Z5Z6O6R6_6c6d7e7x8Y8o8z9T:aQ'a#_S)R$^,aR-p)S&YcORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#[#a#d#j$Y$l%Y%]%^%a%c%d%e%g%k%v&O&S&Z&a&k&x&|'r'|)O)V*e*i*n*}+Q+p+w,Y,`,e-j-o-w.R.r/T/U/V/X/]/`/b/p/y0`0j0}2a2i2y3^3`3a3j3q5j5x6S6y7h8[8q9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kQ%d{Q%e|Q%g!OQ%h!PR/[*lQ&`!hQ)T$`Q+o&cS-u)X)qS0X+m+nW1z-r-s-t.aS3|0Y0ZU4w1|1}2OU6q4v5T5UQ7t6rR8c7wT+d&_+eS+b&_+eU/|+c+g+hU0R+i+j+kS0W+l2pS2k.o2nU3t0P0Q0SQ3x0TQ3y0VS5^2l2sS5a2q2rU6V3u3w3zQ6[3{S7O5b5cQ7Q5dS7i6X6ZS7}7P7RQ8]7kR8h8OS+d&_+eT2m.o2nS&m!p/YQ,|(YQ-X(eS/{+b2kQ1],}S1g-Y-bU3v0R0W5aQ4`1WS4n1n1pU6Y3x3y7QQ6g4aQ6p4qR7l6[Q!wXS&l!p/YQ)P$XQ)[$cQ)b$iQ+x&mQ,{(YQ-W(eQ-](hQ-})]Q.v*VS/z+b2kS1[,|,}S1f-X-bQ1i-[Q1l-^Q2}.wW3r/{0R0W5aQ4_1WQ4c1]S4h1g1pQ4o1oQ5m3OW6W3v3x3y7QS6f4`4aQ6k4jQ6n4nQ6{5[Q7Y5nS7j6Y6[Q7n6gQ7p6lQ7s6pQ7z6|Q8T7ZQ8^7lQ8a7rQ8e7{Q8t8fQ8|8uQ9Q8}Q:Z:UQ:d:_R:e:`$nWORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#a#d$Y$l%Y%]%^%a%c%d%e%g%k%v&O&Z&a&k&x&|'|)O)V*e*i*n+p+w,Y,`-j-o-w.R.r/T/U/V/X/]/`/b/y0`0j2a2y3^3`3a3q5j5x6S7h8[8qS!wn!j!j:T#[#j&S'r*}+Q,e/p0}2i3j6y9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kR:Z:j$nXORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#a#d$Y$l%Y%]%^%a%c%d%e%g%k%v&O&Z&a&k&x&|'|)O)V*e*i*n+p+w,Y,`-j-o-w.R.r/T/U/V/X/]/`/b/y0`0j2a2y3^3`3a3q5j5x6S7h8[8qQ$Xb!Y$cm!i$f$g$h&Q&e&f&g(e)`)a+R+b+t+u-Z.Q/u/|0R0^1m3t3y6V7i8]S$in!jQ)]$dQ*V%RW.w*W*X*Y*ZU3O.x.y.zQ5[2kS5n3P3QU6|5]5^5aQ7Z5oU7{6}7O7QS8f7|7}S8u8g8hQ8}8v!j:U#[#j&S'r*}+Q,e/p0}2i3j6y9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kQ:_:iR:`:j$f]OSTjk}!S!W!]!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#a#d$Y$l%Y%]%a%c%d%e%g%k%v&O&Z&a&k&x&|'|)O)V*e*i*n+p+w,Y,`-j-o-w.R.r/T/U/V/X/]/`/b/y0`0j2a2y3^3`3a3q5j5x6S7h8[8qU!gRU!`v$urs!q!t$W$s&[&o&r)r)s)t*g+O+_+z+|/f0bQ*d%^!h:V#[#j'r*}+Q,e/p0}2i3j6y9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kR:Y&SS&W!b$tR/s+X$l[ORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#a#d$Y$l%Y%]%a%c%d%e%g%k%v&O&Z&a&k&x&|'|)O)V*e*i*n+p+w,Y,`-j-o-w.R.r/T/U/V/X/]/`/b/y0`0j2a2y3^3`3a3q5j5x6S7h8[8q!j'`#[#j&S'r*}+Q,e/p0}2i3j6y9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kR*c%^$noORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#a#d$Y$l%Y%]%^%a%c%d%e%g%k%v&O&Z&a&k&x&|'|)O)V*e*i*n+p+w,Y,`-j-o-w.R.r/T/U/V/X/]/`/b/y0`0j2a2y3^3`3a3q5j5x6S7h8[8qQ'P!z!k:W#[#j&S'r*}+Q,e/p0}2i3j6y9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:k!h#UZ!_$^%u%y&t&{'Y'Z'[']'b'f)j*y+]+v,U,[,o-m0_0i0y1v2S3o4P4S6R7e8Y8o8z9T!R9`'_'p+S,a/k/n0m0u0v0w0x0|1R3l4T4Y4Z5Z6O6_6c6d7x:a!d#WZ!_$^%u%y&t&{'[']'b'f)j*y+]+v,U,[,o-m0_0i0y1v2S3o4P4S6R7e8Y8o8z9T}9b'_'p+S,a/k/n0m0w0x0|1R3l4T4Y4Z5Z6O6_6c6d7x:a!`#[Z!_$^%u%y&t&{'b'f)j*y+]+v,U,[,o-m0_0i0y1v2S3o4P4S6R7e8Y8o8z9Tl(U#s&y(},w-P-e-f0g1u4^4r:[:f:gx:k'_'p+S,a/k/n0m0|1R3l4T4Y4Z5Z6O6_6c6d7x:a!`:n&u'd(X(_+n,S,l-T-q-t.e.g0Z0f1^1b2O2d2f2v4R4e4k4t4y5U5i6^6i6o7WZ:o0z4X6`7m8_&YcORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#[#a#d#j$Y$l%Y%]%^%a%c%d%e%g%k%v&O&S&Z&a&k&x&|'r'|)O)V*e*i*n*}+Q+p+w,Y,`,e-j-o-w.R.r/T/U/V/X/]/`/b/p/y0`0j0}2a2i2y3^3`3a3j3q5j5x6S6y7h8[8q9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kS#k`#lR1O,d&a_ORSTU`jk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#[#a#d#j#l$Y$l%Y%]%^%a%c%d%e%g%k%v&O&S&Z&a&k&x&|'r'|)O)V*e*i*n*}+Q+p+w,Y,`,d,e-j-o-w.R.r/T/U/V/X/]/`/b/p/y0`0j0}2a2i2y3^3`3a3j3q5j5x6S6y7h8[8q9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kS#f^#mT'i#h'mT#g^#mT'k#h'm&a`ORSTU`jk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#[#a#d#j#l$Y$l%Y%]%^%a%c%d%e%g%k%v&O&S&Z&a&k&x&|'r'|)O)V*e*i*n*}+Q+p+w,Y,`,d,e-j-o-w.R.r/T/U/V/X/]/`/b/p/y0`0j0}2a2i2y3^3`3a3j3q5j5x6S6y7h8[8q9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:kT#k`#lQ#n`R't#l$nbORSTUjk}!S!W!]!`!m!u!y!{#O#P#Q#R#S#T#U#V#W#X#Y#a#d$Y$l%Y%]%^%a%c%d%e%g%k%v&O&Z&a&k&x&|'|)O)V*e*i*n+p+w,Y,`-j-o-w.R.r/T/U/V/X/]/`/b/y0`0j2a2y3^3`3a3q5j5x6S7h8[8q!k:i#[#j&S'r*}+Q,e/p0}2i3j6y9S9U9X9Y9Z9[9]9^9_9`9a9b9c9d9e9h9q9r9t9{9|:P:Q:k#RdOSUj}!S!W!m!{#j$Y%Y%]%^%a%c%d%e%g%k&O&a'r)V*e*i*n+p,e-j-w.r/T/U/V/X/]/`/b0}2a2y3^3`3a5j5xt#ya!x$Q$R$V(R(T(U(](q(r,V-l1V1q:h:n:o!|&w!v#c#u#w&b'x(a)U)W)Z)x){+q-Q-S-v-x.f.i.q.s1`1j1x1{2P2b2x2z4d4p4x5f5k6x7U8R9k9m9o9u9w9y9}:RQ({$TQ,p'}c0{9g9l9n9p9v9x9z:O:St#va!x$Q$R$V(R(T(U(](q(r,V-l1V1q:h:n:oS(h#x(kQ(|$UQ-^(i!|:]!v#c#u#w&b'x(a)U)W)Z)x){+q-Q-S-v-x.f.i.q.s1`1j1x1{2P2b2x2z4d4p4x5f5k6x7U8R9k9m9o9u9w9y9}:Rb:^9g9l9n9p9v9x9z:O:SQ:b:lR:c:mt#ya!x$Q$R$V(R(T(U(](q(r,V-l1V1q:h:n:o!|&w!v#c#u#w&b'x(a)U)W)Z)x){+q-Q-S-v-x.f.i.q.s1`1j1x1{2P2b2x2z4d4p4x5f5k6x7U8R9k9m9o9u9w9y9}:Rc0{9g9l9n9p9v9x9z:O:SlfOSj}!m$Y%a%d%e%g*i*n/]/`Q(`#wQ*u%nQ*v%pR1_-Q$U#za!v!x#c#u#w$Q$R$V&b'x(R(T(U(](a(q(r)U)W)Z)x){+q,V-Q-S-l-v-x.f.i.q.s1V1`1j1q1x1{2P2b2x2z4d4p4x5f5k6x7U8R9g9k9l9m9n9o9p9u9v9w9x9y9z9}:O:R:S:h:n:oQ)z${Q.h)|Q2e.gR5W2fT(j#x(kS(j#x(kT2m.o2nQ)[$cQ-](hQ-})]Q.v*VQ2}.wQ5m3OQ6{5[Q7Y5nQ7z6|Q8T7ZQ8e7{Q8t8fQ8|8uR9Q8}l(R#s&y(},w-P-e-f0g1u4^4r:[:f:g!`9u&u'd(X(_+n,S,l-T-q-t.e.g0Z0f1^1b2O2d2f2v4R4e4k4t4y5U5i6^6i6o7WZ9v0z4X6`7m8_n(T#s&y(},u,w-P-e-f0g1u4^4r:[:f:g!b9w&u'd(X(_+n,S,l-T-q-t.e.g0Z0d0f1^1b2O2d2f2v4R4e4k4t4y5U5i6^6i6o7W]9x0z4X6`6a7m8_peOSjy}!m$Y%W%a%d%e%g*i*n/]/`Q%TxR*e%^peOSjy}!m$Y%W%a%d%e%g*i*n/]/`R%TxQ*O$|R.d)wqeOSjy}!m$Y%W%a%d%e%g*i*n/]/`Q.p*TS2w.t.uW5e2t2u2v2{U7T5g5h5iU8P7S7V7WQ8i8QR8w8jQ%[yR*_%WR3U.}R7]5pS$kp$pR.Y)hQ%azR*i%bR*o%hT/^*n/`QjOQ!mST$]j!mQ'z#rR,m'zQ!YQR%s!YQ!^RU%w!^%x*zQ%x!_R*z%yQ+V&TR/r+VQ,W&yR0h,WQ,Z&{S0k,Z0lR0l,[Q+e&_R/}+eQ&]!eQ*{%zT+`&]*{Q+Y&WR/t+YQ&p!rQ+y&nU+}&p+y0cR0c,OQ'm#hR,f'mQ#l`R's#lQ#bZU'c#b*x9fQ*x9TR9f'pQ,z(YW1Y,z1Z4b6hU1Z,{,|,}S4b1[1]R6h4c#q(P#s&u&y'd(X(_(x(y(}+n,Q,R,S,l,u,v,w-P-T-e-f-q-t.e.g0Z0d0e0f0g0z1^1b1u2O2d2f2v4R4V4W4X4^4e4k4r4t4y5U5i6^6`6a6b6i6o7W7m8_:[:f:gQ-R(_U1a-R1c4fQ1c-TR4f1bQ(k#xR-_(kQ(t#|R-h(tQ1y-qR4u1yQ)u$vR.c)uQ2h.jS5Y2h6zR6z5ZQ*Q$}R.m*QQ2n.oR5_2nQ.|*[S3S.|5qR5q3UQ.T)dW2X.T2Z5O6uQ2Z.WQ5O2YR6u5PQ)i$kR.Z)iQ/`*nR3d/`WiOSj!mQ%f}Q)Q$YQ*h%aQ*j%dQ*k%eQ*m%gQ/Z*iS/^*n/`R3c/]Q$[gQ%j!RQ%m!TQ%o!UQ%q!VQ)p$qQ)v$wQ*^%[Q*s%lS/P*_*bQ/g*rQ/h*uQ/i*vS/x+b2kQ1d-VQ1e-WQ1k-]Q2^.^Q2c.eQ2|.vQ3W/RQ3b/[Y3p/z/{0R0W5aQ4g1fQ4i1hQ4l1lQ5S2`Q5V2dQ5l2}Q5r3V[6Q3o3r3v3x3y7QQ6j4hQ6m4mQ6v5QQ7X5mQ7^5sW7d6R6W6Y6[Q7o6kQ7q6nQ7v6wQ7y6{Q8S7YU8W7e7j7lQ8`7pQ8b7sQ8d7zQ8k8TS8m8Y8^Q8r8aQ8s8eQ8x8oQ8{8tQ9O8zQ9P8|R9R9QQ$emQ&d!iU)_$f$g$hQ+P&QU+s&e&f&gQ-V(eS.P)`)aQ/o+RQ/w+bS0]+t+uQ1h-ZQ2R.QQ3m/uS3s/|0RQ4O0^Q4m1mS6U3t3yQ7g6VQ8Z7iR8p8]S#ta:hR)Y$bU#|a$b:hR-g(sQ#saS&u!v)ZQ&y!xQ'd#cQ(X#uQ(_#wQ(x$QQ(y$RQ(}$VQ+n&bQ,Q9kQ,R9mQ,S9oQ,l'xQ,u(RQ,v(TQ,w(UQ-P(]Q-T(aQ-e(qQ-f(rd-q)U-v.q1{2x4x5f6x7U8RQ-t)WQ.e)xQ.g){Q0Z+qQ0d9uQ0e9wQ0f9yQ0g,VQ0z9gQ1^-QQ1b-SQ1u-lQ2O-xQ2d.fQ2f.iQ2v.sQ4R9}Q4V9lQ4W9nQ4X9pQ4^1VQ4e1`Q4k1jQ4r1qQ4t1xQ4y2PQ5U2bQ5i2zQ6^:RQ6`9zQ6a9vQ6b9xQ6i4dQ6o4pQ7W5kQ7m:OQ8_:SQ:[:hQ:f:nR:g:oT'y#r'zlgOSj}!m$Y%a%d%e%g*i*n/]/`S!oU%cQ%l!SQ%r!WQ'Q!{Q'q#jS*b%Y%]Q*f%^Q*r%kQ*|&OQ+m&aQ,j'rQ-s)VQ/W*eQ0Y+pQ1Q,eQ1s-jQ1}-wQ2u.rQ3Y/TQ3Z/UQ3]/VQ3_/XQ3f/bQ4[0}Q5T2aQ5h2yQ5w3^Q5y3`Q5z3aQ7V5jR7`5x!vZOSUj}!S!m!{$Y%Y%]%^%a%c%d%e%g%k&O&a)V*e*i*n+p-j-w.r/T/U/V/X/]/`/b2a2y3^3`3a5j5xQ!_RQ!nTQ$^kQ%u!]Q%y!`Q&t!uQ&{!yQ'R#OQ'S#PQ'T#QQ'U#RQ'V#SQ'W#TQ'X#UQ'Y#VQ'Z#WQ'[#XQ']#YQ'_#[Q'b#aQ'f#dW'p#j'r,e0}Q)j$lQ*y%vS+S&S/pQ+]&ZQ+v&kQ,U&xQ,[&|Q,_9SQ,a9UQ,o'|Q-m)OQ/k*}Q/n+QQ0_+wQ0i,YQ0m9XQ0n9YQ0o9ZQ0p9[Q0q9]Q0r9^Q0s9_Q0t9`Q0u9aQ0v9bQ0w9cQ0x9dQ0y,`Q0|9hQ1R9eQ1v-oQ2S.RQ3l9qQ3o/yQ4P0`Q4S0jQ4T9rQ4Y9tQ4Z9{Q5Z2iQ6O3jQ6R3qQ6_9|Q6c:PQ6d:QQ7e6SQ7x6yQ8Y7hQ8o8[Q8z8qQ9T!WR:a:kT!XQ!YR!aRR&U!bS&Q!b+US+R&R&YR/u+[R&z!xR&}!yT!sU$WS!rU$WU$vrs*gS&n!q!tQ+{&oQ,O&rQ.b)tS0a+z+|R4Q0b[!dR!`$s&[)r+_h!pUrs!q!t$W&o&r)t+z+|0bQ/Y*gQ/l+OQ3i/fT:X&S)sT!fR$sS!eR$sS%z!`)rS+T&S)sQ+^&[R/v+_T&X!b$tQ#h^R'v#mT'l#h'mR1P,dT([#u(dR(b#wQ-r)UQ1|-vQ2t.qQ4v1{Q5g2xQ6r4xQ7S5fQ7w6xQ8Q7UR8j8RlhOSj}!m$Y%a%d%e%g*i*n/]/`Q%ZyR*^%WV$wrs*gR.k)}R*]%UQ$opR)o$pR)e$jT%_z%bT%`z%bT/_*n/`",
    nodeNames: "\u26A0 ArithOp ArithOp extends LineComment BlockComment Script ExportDeclaration export Star as VariableName from String ; default FunctionDeclaration async function VariableDefinition TypeParamList TypeDefinition ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType VoidType void TypeofType typeof MemberExpression . ?. PropertyName [ TemplateString null super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewExpression new TypeArgList CompareOp < ) ( ArgList UnaryExpression await yield delete LogicOp BitOp ParenthesizedExpression ClassExpression class extends ClassBody MethodDeclaration Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression PrivatePropertyName BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof in const CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXStartTag JSXSelfClosingTag JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast ArrowFunction TypeParamList SequenceExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature CallSignature TypePredicate is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody MethodDeclaration AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try catch finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement",
    maxTerm: 330,
    context: v11,
    nodeProps: [
        [
            y4.group,
            -26,
            7,
            14,
            16,
            54,
            180,
            184,
            187,
            188,
            190,
            193,
            196,
            207,
            209,
            215,
            217,
            219,
            221,
            224,
            230,
            234,
            236,
            238,
            240,
            242,
            244,
            245,
            "Statement",
            -30,
            11,
            13,
            23,
            26,
            27,
            38,
            39,
            40,
            41,
            43,
            48,
            56,
            64,
            70,
            71,
            87,
            88,
            97,
            99,
            115,
            118,
            120,
            121,
            122,
            123,
            125,
            126,
            144,
            145,
            147,
            "Expression",
            -22,
            22,
            24,
            28,
            29,
            31,
            148,
            150,
            152,
            153,
            155,
            156,
            157,
            159,
            160,
            161,
            163,
            164,
            165,
            174,
            176,
            178,
            179,
            "Type",
            -3,
            75,
            81,
            86,
            "ClassItem"
        ],
        [
            y4.closedBy,
            37,
            "]",
            47,
            "}",
            62,
            ")",
            128,
            "JSXSelfCloseEndTag JSXEndTag",
            142,
            "JSXEndTag"
        ],
        [
            y4.openedBy,
            42,
            "[",
            46,
            "{",
            61,
            "(",
            127,
            "JSXStartTag",
            137,
            "JSXStartTag JSXStartCloseTag"
        ]
    ],
    skippedNodes: [
        0,
        4,
        5
    ],
    repeatNodeCount: 28,
    tokenData: "!C}~R!`OX%TXY%cYZ'RZ[%c[]%T]^'R^p%Tpq%cqr'crs(kst0htu2`uv4pvw5ewx6cxy<yyz=Zz{=k{|>k|}?O}!O>k!O!P?`!P!QCl!Q!R!0[!R![!1q![!]!7s!]!^!8V!^!_!8g!_!`!9d!`!a!:[!a!b!<R!b!c%T!c!}2`!}#O!=d#O#P%T#P#Q!=t#Q#R!>U#R#S2`#S#T!>i#T#o2`#o#p!>y#p#q!?O#q#r!?f#r#s!?x#s$f%T$f$g%c$g#BY2`#BY#BZ!@Y#BZ$IS2`$IS$I_!@Y$I_$I|2`$I|$I}!Bq$I}$JO!Bq$JO$JT2`$JT$JU!@Y$JU$KV2`$KV$KW!@Y$KW&FU2`&FU&FV!@Y&FV?HT2`?HT?HU!@Y?HU~2`W%YR$QWO!^%T!_#o%T#p~%T,T%jg$QW'T+{OX%TXY%cYZ%TZ[%c[p%Tpq%cq!^%T!_#o%T#p$f%T$f$g%c$g#BY%T#BY#BZ%c#BZ$IS%T$IS$I_%c$I_$JT%T$JT$JU%c$JU$KV%T$KV$KW%c$KW&FU%T&FU&FV%c&FV?HT%T?HT?HU%c?HU~%T,T'YR$QW'U+{O!^%T!_#o%T#p~%T$T'jS$QW!f#{O!^%T!_!`'v!`#o%T#p~%T$O'}S#a#v$QWO!^%T!_!`(Z!`#o%T#p~%T$O(bR#a#v$QWO!^%T!_#o%T#p~%T'u(rZ$QW]!ROY(kYZ)eZr(krs*rs!^(k!^!_+U!_#O(k#O#P-b#P#o(k#o#p+U#p~(k&r)jV$QWOr)ers*Ps!^)e!^!_*a!_#o)e#o#p*a#p~)e&r*WR#{&j$QWO!^%T!_#o%T#p~%T&j*dROr*ars*ms~*a&j*rO#{&j'u*{R#{&j$QW]!RO!^%T!_#o%T#p~%T'm+ZV]!ROY+UYZ*aZr+Urs+ps#O+U#O#P+w#P~+U'm+wO#{&j]!R'm+zROr+Urs,Ts~+U'm,[U#{&j]!ROY,nZr,nrs-Vs#O,n#O#P-[#P~,n!R,sU]!ROY,nZr,nrs-Vs#O,n#O#P-[#P~,n!R-[O]!R!R-_PO~,n'u-gV$QWOr(krs-|s!^(k!^!_+U!_#o(k#o#p+U#p~(k'u.VZ#{&j$QW]!ROY.xYZ%TZr.xrs/rs!^.x!^!_,n!_#O.x#O#P0S#P#o.x#o#p,n#p~.x!Z/PZ$QW]!ROY.xYZ%TZr.xrs/rs!^.x!^!_,n!_#O.x#O#P0S#P#o.x#o#p,n#p~.x!Z/yR$QW]!RO!^%T!_#o%T#p~%T!Z0XT$QWO!^.x!^!_,n!_#o.x#o#p,n#p~.xy0mZ$QWOt%Ttu1`u!^%T!_!c%T!c!}1`!}#R%T#R#S1`#S#T%T#T#o1`#p$g%T$g~1`y1g]$QW'mqOt%Ttu1`u!Q%T!Q![1`![!^%T!_!c%T!c!}1`!}#R%T#R#S1`#S#T%T#T#o1`#p$g%T$g~1`&i2k_$QW#vS'W%k'dpOt%Ttu2`u}%T}!O3j!O!Q%T!Q![2`![!^%T!_!c%T!c!}2`!}#R%T#R#S2`#S#T%T#T#o2`#p$g%T$g~2`[3q_$QW#vSOt%Ttu3ju}%T}!O3j!O!Q%T!Q![3j![!^%T!_!c%T!c!}3j!}#R%T#R#S3j#S#T%T#T#o3j#p$g%T$g~3j$O4wS#Y#v$QWO!^%T!_!`5T!`#o%T#p~%T$O5[R$QW#k#vO!^%T!_#o%T#p~%T%r5lU'v%j$QWOv%Tvw6Ow!^%T!_!`5T!`#o%T#p~%T$O6VS$QW#e#vO!^%T!_!`5T!`#o%T#p~%T'u6jZ$QW]!ROY6cYZ7]Zw6cwx*rx!^6c!^!_8T!_#O6c#O#P:T#P#o6c#o#p8T#p~6c&r7bV$QWOw7]wx*Px!^7]!^!_7w!_#o7]#o#p7w#p~7]&j7zROw7wwx*mx~7w'm8YV]!ROY8TYZ7wZw8Twx+px#O8T#O#P8o#P~8T'm8rROw8Twx8{x~8T'm9SU#{&j]!ROY9fZw9fwx-Vx#O9f#O#P9}#P~9f!R9kU]!ROY9fZw9fwx-Vx#O9f#O#P9}#P~9f!R:QPO~9f'u:YV$QWOw6cwx:ox!^6c!^!_8T!_#o6c#o#p8T#p~6c'u:xZ#{&j$QW]!ROY;kYZ%TZw;kwx/rx!^;k!^!_9f!_#O;k#O#P<e#P#o;k#o#p9f#p~;k!Z;rZ$QW]!ROY;kYZ%TZw;kwx/rx!^;k!^!_9f!_#O;k#O#P<e#P#o;k#o#p9f#p~;k!Z<jT$QWO!^;k!^!_9f!_#o;k#o#p9f#p~;k%V=QR!`$}$QWO!^%T!_#o%T#p~%TZ=bR!_R$QWO!^%T!_#o%T#p~%T%R=tU'X!R#Z#v$QWOz%Tz{>W{!^%T!_!`5T!`#o%T#p~%T$O>_S#W#v$QWO!^%T!_!`5T!`#o%T#p~%T$u>rSi$m$QWO!^%T!_!`5T!`#o%T#p~%T&i?VR}&a$QWO!^%T!_#o%T#p~%T&i?gVr%n$QWO!O%T!O!P?|!P!Q%T!Q![@r![!^%T!_#o%T#p~%Ty@RT$QWO!O%T!O!P@b!P!^%T!_#o%T#p~%Ty@iR|q$QWO!^%T!_#o%T#p~%Ty@yZ$QWjqO!Q%T!Q![@r![!^%T!_!g%T!g!hAl!h#R%T#R#S@r#S#X%T#X#YAl#Y#o%T#p~%TyAqZ$QWO{%T{|Bd|}%T}!OBd!O!Q%T!Q![CO![!^%T!_#R%T#R#SCO#S#o%T#p~%TyBiV$QWO!Q%T!Q![CO![!^%T!_#R%T#R#SCO#S#o%T#p~%TyCVV$QWjqO!Q%T!Q![CO![!^%T!_#R%T#R#SCO#S#o%T#p~%T,TCs`$QW#X#vOYDuYZ%TZzDuz{Jl{!PDu!P!Q!-e!Q!^Du!^!_Fx!_!`!.^!`!a!/]!a!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~DuXD|[$QWyPOYDuYZ%TZ!PDu!P!QEr!Q!^Du!^!_Fx!_!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~DuXEy_$QWyPO!^%T!_#Z%T#Z#[Er#[#]%T#]#^Er#^#a%T#a#bEr#b#g%T#g#hEr#h#i%T#i#jEr#j#m%T#m#nEr#n#o%T#p~%TPF}VyPOYFxZ!PFx!P!QGd!Q!}Fx!}#OG{#O#PHh#P~FxPGiUyP#Z#[Gd#]#^Gd#a#bGd#g#hGd#i#jGd#m#nGdPHOTOYG{Z#OG{#O#PH_#P#QFx#Q~G{PHbQOYG{Z~G{PHkQOYFxZ~FxXHvY$QWOYHqYZ%TZ!^Hq!^!_G{!_#OHq#O#PIf#P#QDu#Q#oHq#o#pG{#p~HqXIkV$QWOYHqYZ%TZ!^Hq!^!_G{!_#oHq#o#pG{#p~HqXJVV$QWOYDuYZ%TZ!^Du!^!_Fx!_#oDu#o#pFx#p~Du,TJs^$QWyPOYJlYZKoZzJlz{NQ{!PJl!P!Q!,R!Q!^Jl!^!_!!]!_!}Jl!}#O!'|#O#P!+a#P#oJl#o#p!!]#p~Jl,TKtV$QWOzKoz{LZ{!^Ko!^!_M]!_#oKo#o#pM]#p~Ko,TL`X$QWOzKoz{LZ{!PKo!P!QL{!Q!^Ko!^!_M]!_#oKo#o#pM]#p~Ko,TMSR$QWT+{O!^%T!_#o%T#p~%T+{M`ROzM]z{Mi{~M]+{MlTOzM]z{Mi{!PM]!P!QM{!Q~M]+{NQOT+{,TNX^$QWyPOYJlYZKoZzJlz{NQ{!PJl!P!Q! T!Q!^Jl!^!_!!]!_!}Jl!}#O!'|#O#P!+a#P#oJl#o#p!!]#p~Jl,T! ^_$QWT+{yPO!^%T!_#Z%T#Z#[Er#[#]%T#]#^Er#^#a%T#a#bEr#b#g%T#g#hEr#h#i%T#i#jEr#j#m%T#m#nEr#n#o%T#p~%T+{!!bYyPOY!!]YZM]Zz!!]z{!#Q{!P!!]!P!Q!&x!Q!}!!]!}#O!$`#O#P!&f#P~!!]+{!#VYyPOY!!]YZM]Zz!!]z{!#Q{!P!!]!P!Q!#u!Q!}!!]!}#O!$`#O#P!&f#P~!!]+{!#|UT+{yP#Z#[Gd#]#^Gd#a#bGd#g#hGd#i#jGd#m#nGd+{!$cWOY!$`YZM]Zz!$`z{!${{#O!$`#O#P!&S#P#Q!!]#Q~!$`+{!%OYOY!$`YZM]Zz!$`z{!${{!P!$`!P!Q!%n!Q#O!$`#O#P!&S#P#Q!!]#Q~!$`+{!%sTT+{OYG{Z#OG{#O#PH_#P#QFx#Q~G{+{!&VTOY!$`YZM]Zz!$`z{!${{~!$`+{!&iTOY!!]YZM]Zz!!]z{!#Q{~!!]+{!&}_yPOzM]z{Mi{#ZM]#Z#[!&x#[#]M]#]#^!&x#^#aM]#a#b!&x#b#gM]#g#h!&x#h#iM]#i#j!&x#j#mM]#m#n!&x#n~M],T!(R[$QWOY!'|YZKoZz!'|z{!(w{!^!'|!^!_!$`!_#O!'|#O#P!*o#P#QJl#Q#o!'|#o#p!$`#p~!'|,T!(|^$QWOY!'|YZKoZz!'|z{!(w{!P!'|!P!Q!)x!Q!^!'|!^!_!$`!_#O!'|#O#P!*o#P#QJl#Q#o!'|#o#p!$`#p~!'|,T!*PY$QWT+{OYHqYZ%TZ!^Hq!^!_G{!_#OHq#O#PIf#P#QDu#Q#oHq#o#pG{#p~Hq,T!*tX$QWOY!'|YZKoZz!'|z{!(w{!^!'|!^!_!$`!_#o!'|#o#p!$`#p~!'|,T!+fX$QWOYJlYZKoZzJlz{NQ{!^Jl!^!_!!]!_#oJl#o#p!!]#p~Jl,T!,Yc$QWyPOzKoz{LZ{!^Ko!^!_M]!_#ZKo#Z#[!,R#[#]Ko#]#^!,R#^#aKo#a#b!,R#b#gKo#g#h!,R#h#iKo#i#j!,R#j#mKo#m#n!,R#n#oKo#o#pM]#p~Ko,T!-lV$QWS+{OY!-eYZ%TZ!^!-e!^!_!.R!_#o!-e#o#p!.R#p~!-e+{!.WQS+{OY!.RZ~!.R$P!.g[$QW#k#vyPOYDuYZ%TZ!PDu!P!QEr!Q!^Du!^!_Fx!_!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~Du]!/f[#sS$QWyPOYDuYZ%TZ!PDu!P!QEr!Q!^Du!^!_Fx!_!}Du!}#OHq#O#PJQ#P#oDu#o#pFx#p~Duy!0cd$QWjqO!O%T!O!P@r!P!Q%T!Q![!1q![!^%T!_!g%T!g!hAl!h#R%T#R#S!1q#S#U%T#U#V!3X#V#X%T#X#YAl#Y#b%T#b#c!2w#c#d!4m#d#l%T#l#m!5{#m#o%T#p~%Ty!1x_$QWjqO!O%T!O!P@r!P!Q%T!Q![!1q![!^%T!_!g%T!g!hAl!h#R%T#R#S!1q#S#X%T#X#YAl#Y#b%T#b#c!2w#c#o%T#p~%Ty!3OR$QWjqO!^%T!_#o%T#p~%Ty!3^W$QWO!Q%T!Q!R!3v!R!S!3v!S!^%T!_#R%T#R#S!3v#S#o%T#p~%Ty!3}Y$QWjqO!Q%T!Q!R!3v!R!S!3v!S!^%T!_#R%T#R#S!3v#S#b%T#b#c!2w#c#o%T#p~%Ty!4rV$QWO!Q%T!Q!Y!5X!Y!^%T!_#R%T#R#S!5X#S#o%T#p~%Ty!5`X$QWjqO!Q%T!Q!Y!5X!Y!^%T!_#R%T#R#S!5X#S#b%T#b#c!2w#c#o%T#p~%Ty!6QZ$QWO!Q%T!Q![!6s![!^%T!_!c%T!c!i!6s!i#R%T#R#S!6s#S#T%T#T#Z!6s#Z#o%T#p~%Ty!6z]$QWjqO!Q%T!Q![!6s![!^%T!_!c%T!c!i!6s!i#R%T#R#S!6s#S#T%T#T#Z!6s#Z#b%T#b#c!2w#c#o%T#p~%T%w!7|R!XV$QW#i%hO!^%T!_#o%T#p~%T!P!8^R^w$QWO!^%T!_#o%T#p~%T+c!8rR']d!]%Y#t&s'zP!P!Q!8{!^!_!9Q!_!`!9_W!9QO$SW#v!9VP#[#v!_!`!9Y#v!9_O#k#v#v!9dO#]#v%w!9kT!w%o$QWO!^%T!_!`'v!`!a!9z!a#o%T#p~%T$P!:RR#S#w$QWO!^%T!_#o%T#p~%T%w!:gT'[!s#]#v#}S$QWO!^%T!_!`!:v!`!a!;W!a#o%T#p~%T$O!:}R#]#v$QWO!^%T!_#o%T#p~%T$O!;_T#[#v$QWO!^%T!_!`5T!`!a!;n!a#o%T#p~%T$O!;uS#[#v$QWO!^%T!_!`5T!`#o%T#p~%T%w!<YV'n%o$QWO!O%T!O!P!<o!P!^%T!_!a%T!a!b!=P!b#o%T#p~%T$`!<vRs$W$QWO!^%T!_#o%T#p~%T$O!=WS$QW#f#vO!^%T!_!`5T!`#o%T#p~%T&e!=kRu&]$QWO!^%T!_#o%T#p~%TZ!={RzR$QWO!^%T!_#o%T#p~%T$O!>]S#c#v$QWO!^%T!_!`5T!`#o%T#p~%T$P!>pR$QW'a#wO!^%T!_#o%T#p~%T~!?OO!P~%r!?VT'u%j$QWO!^%T!_!`5T!`#o%T#p#q!=P#q~%T$u!?oR!O$k$QW'cQO!^%T!_#o%T#p~%TX!@PR!gP$QWO!^%T!_#o%T#p~%T,T!@gr$QW'T+{#vS'W%k'dpOX%TXY%cYZ%TZ[%c[p%Tpq%cqt%Ttu2`u}%T}!O3j!O!Q%T!Q![2`![!^%T!_!c%T!c!}2`!}#R%T#R#S2`#S#T%T#T#o2`#p$f%T$f$g%c$g#BY2`#BY#BZ!@Y#BZ$IS2`$IS$I_!@Y$I_$JT2`$JT$JU!@Y$JU$KV2`$KV$KW!@Y$KW&FU2`&FU&FV!@Y&FV?HT2`?HT?HU!@Y?HU~2`,T!CO_$QW'U+{#vS'W%k'dpOt%Ttu2`u}%T}!O3j!O!Q%T!Q![2`![!^%T!_!c%T!c!}2`!}#R%T#R#S2`#S#T%T#T#o2`#p$g%T$g~2`",
    tokenizers: [
        z14,
        w17,
        k9,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        b14
    ],
    topRules: {
        Script: [
            0,
            6
        ]
    },
    dialects: {
        jsx: 11282,
        ts: 11284
    },
    dynamicPrecedences: {
        "145": 1,
        "172": 1
    },
    specialized: [
        {
            term: 284,
            get: (O43, Q23)=>L13(O43, Q23) << 1
        },
        {
            term: 284,
            get: (O44)=>g9[O44] || -1
        },
        {
            term: 296,
            get: (O45)=>U8[O45] || -1
        },
        {
            term: 59,
            get: (O46)=>m11[O46] || -1
        }
    ],
    tokenPrec: 11305
});
var T19 = [
    yt1("function ${name}(${params}) {\n	${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
    }),
    yt1("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
    }),
    yt1("for (let ${name} of ${collection}) {\n	${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
    }),
    yt1(`try {
	\${}
} catch (\${error}) {
	\${}
}`, {
        label: "try",
        detail: "block",
        type: "keyword"
    }),
    yt1(`class \${name} {
	constructor(\${params}) {
		\${}
	}
}`, {
        label: "class",
        detail: "definition",
        type: "keyword"
    }),
    yt1('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
    }),
    yt1('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
    })
], l4 = P6.define({
    parser: A12.configure({
        props: [
            Y2.add({
                IfStatement: wt1({
                    except: /^\s*({|else\b)/
                }),
                TryStatement: wt1({
                    except: /^\s*({|catch\b|finally\b)/
                }),
                LabeledStatement: kt1,
                SwitchBody: (t1190)=>{
                    let r508 = t1190.textAfter, n407 = /^\s*\}/.test(r508), o331 = /^\s*(case|default)\b/.test(r508);
                    return t1190.baseIndent + (n407 ? 0 : o331 ? 1 : 2) * t1190.unit;
                },
                Block: gt1({
                    closing: "}"
                }),
                ArrowFunction: (t1191)=>t1191.baseIndent + t1191.unit
                ,
                "TemplateString BlockComment": ()=>-1
                ,
                "Statement Property": wt1({
                    except: /^{/
                }),
                JSXElement (t1192) {
                    let r509 = /^\s*<\//.test(t1192.textAfter);
                    return t1192.lineIndent(t1192.node.from) + (r509 ? 0 : t1192.unit);
                },
                JSXEscape (t1193) {
                    let r510 = /\s*\}/.test(t1193.textAfter);
                    return t1193.lineIndent(t1193.node.from) + (r510 ? 0 : t1193.unit);
                },
                "JSXOpenTag JSXSelfClosingTag" (t1194) {
                    return t1194.column(t1194.node.from) + t1194.unit;
                }
            }),
            ot1.add({
                "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression": yt,
                BlockComment (t1195) {
                    return {
                        from: t1195.from + 2,
                        to: t1195.to - 2
                    };
                }
            }),
            yt2({
                "get set async static": i1.modifier,
                "for while do if else switch try catch finally return throw break continue default case": i1.controlKeyword,
                "in of await yield void typeof delete instanceof": i1.operatorKeyword,
                "let var const function class extends": i1.definitionKeyword,
                "import export from": i1.moduleKeyword,
                "with debugger as new": i1.keyword,
                TemplateString: i1.special(i1.string),
                Super: i1.atom,
                BooleanLiteral: i1.bool,
                this: i1.self,
                null: i1.null,
                Star: i1.modifier,
                VariableName: i1.variableName,
                "CallExpression/VariableName TaggedTemplateExpression/VariableName": i1.function(i1.variableName),
                VariableDefinition: i1.definition(i1.variableName),
                Label: i1.labelName,
                PropertyName: i1.propertyName,
                PrivatePropertyName: i1.special(i1.propertyName),
                "CallExpression/MemberExpression/PropertyName": i1.function(i1.propertyName),
                "FunctionDeclaration/VariableDefinition": i1.function(i1.definition(i1.variableName)),
                "ClassDeclaration/VariableDefinition": i1.definition(i1.className),
                PropertyDefinition: i1.definition(i1.propertyName),
                PrivatePropertyDefinition: i1.definition(i1.special(i1.propertyName)),
                UpdateOp: i1.updateOperator,
                LineComment: i1.lineComment,
                BlockComment: i1.blockComment,
                Number: i1.number,
                String: i1.string,
                ArithOp: i1.arithmeticOperator,
                LogicOp: i1.logicOperator,
                BitOp: i1.bitwiseOperator,
                CompareOp: i1.compareOperator,
                RegExp: i1.regexp,
                Equals: i1.definitionOperator,
                "Arrow : Spread": i1.punctuation,
                "( )": i1.paren,
                "[ ]": i1.squareBracket,
                "{ }": i1.brace,
                ".": i1.derefOperator,
                ", ;": i1.separator,
                TypeName: i1.typeName,
                TypeDefinition: i1.definition(i1.typeName),
                "type enum interface implements namespace module declare": i1.definitionKeyword,
                "abstract global Privacy readonly override": i1.modifier,
                "is keyof unique infer": i1.operatorKeyword,
                JSXAttributeValue: i1.attributeValue,
                JSXText: i1.content,
                "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": i1.angleBracket,
                "JSXIdentifier JSXNameSpacedName": i1.tagName,
                "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": i1.attributeName
            })
        ]
    }),
    languageData: {
        closeBrackets: {
            brackets: [
                "(",
                "[",
                "{",
                "'",
                '"',
                "`"
            ]
        },
        commentTokens: {
            line: "//",
            block: {
                open: "/*",
                close: "*/"
            }
        },
        indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
        wordChars: "$"
    }
}), v12 = l4.configure({
    dialect: "ts"
}), I13 = l4.configure({
    dialect: "jsx"
}), J11 = l4.configure({
    dialect: "jsx ts"
});
function A13(t1196 = {}) {
    let r511 = t1196.jsx ? t1196.typescript ? J11 : I13 : t1196.typescript ? v12 : l4;
    return new J5(r511, l4.data.of({
        autocomplete: xt2([
            "LineComment",
            "BlockComment",
            "String"
        ], Fe2(T19))
    }));
}
var y13 = [
    "_blank",
    "_self",
    "_top",
    "_parent"
], w18 = [
    "ascii",
    "utf-8",
    "utf-16",
    "latin1",
    "latin1"
], C14 = [
    "get",
    "post",
    "put",
    "delete"
], k10 = [
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
], c8 = [
    "true",
    "false"
], e1 = {}, v13 = {
    a: {
        attrs: {
            href: null,
            ping: null,
            type: null,
            media: null,
            target: y13,
            hreflang: null
        }
    },
    abbr: e1,
    acronym: e1,
    address: e1,
    applet: e1,
    area: {
        attrs: {
            alt: null,
            coords: null,
            href: null,
            target: null,
            ping: null,
            media: null,
            hreflang: null,
            type: null,
            shape: [
                "default",
                "rect",
                "circle",
                "poly"
            ]
        }
    },
    article: e1,
    aside: e1,
    audio: {
        attrs: {
            src: null,
            mediagroup: null,
            crossorigin: [
                "anonymous",
                "use-credentials"
            ],
            preload: [
                "none",
                "metadata",
                "auto"
            ],
            autoplay: [
                "autoplay"
            ],
            loop: [
                "loop"
            ],
            controls: [
                "controls"
            ]
        }
    },
    b: e1,
    base: {
        attrs: {
            href: null,
            target: y13
        }
    },
    basefont: e1,
    bdi: e1,
    bdo: e1,
    big: e1,
    blockquote: {
        attrs: {
            cite: null
        }
    },
    body: e1,
    br: e1,
    button: {
        attrs: {
            form: null,
            formaction: null,
            name: null,
            value: null,
            autofocus: [
                "autofocus"
            ],
            disabled: [
                "autofocus"
            ],
            formenctype: k10,
            formmethod: C14,
            formnovalidate: [
                "novalidate"
            ],
            formtarget: y13,
            type: [
                "submit",
                "reset",
                "button"
            ]
        }
    },
    canvas: {
        attrs: {
            width: null,
            height: null
        }
    },
    caption: e1,
    center: e1,
    cite: e1,
    code: e1,
    col: {
        attrs: {
            span: null
        }
    },
    colgroup: {
        attrs: {
            span: null
        }
    },
    command: {
        attrs: {
            type: [
                "command",
                "checkbox",
                "radio"
            ],
            label: null,
            icon: null,
            radiogroup: null,
            command: null,
            title: null,
            disabled: [
                "disabled"
            ],
            checked: [
                "checked"
            ]
        }
    },
    data: {
        attrs: {
            value: null
        }
    },
    datagrid: {
        attrs: {
            disabled: [
                "disabled"
            ],
            multiple: [
                "multiple"
            ]
        }
    },
    datalist: {
        attrs: {
            data: null
        }
    },
    dd: e1,
    del: {
        attrs: {
            cite: null,
            datetime: null
        }
    },
    details: {
        attrs: {
            open: [
                "open"
            ]
        }
    },
    dfn: e1,
    dir: e1,
    div: e1,
    dl: e1,
    dt: e1,
    em: e1,
    embed: {
        attrs: {
            src: null,
            type: null,
            width: null,
            height: null
        }
    },
    eventsource: {
        attrs: {
            src: null
        }
    },
    fieldset: {
        attrs: {
            disabled: [
                "disabled"
            ],
            form: null,
            name: null
        }
    },
    figcaption: e1,
    figure: e1,
    font: e1,
    footer: e1,
    form: {
        attrs: {
            action: null,
            name: null,
            "accept-charset": w18,
            autocomplete: [
                "on",
                "off"
            ],
            enctype: k10,
            method: C14,
            novalidate: [
                "novalidate"
            ],
            target: y13
        }
    },
    frame: e1,
    frameset: e1,
    h1: e1,
    h2: e1,
    h3: e1,
    h4: e1,
    h5: e1,
    h6: e1,
    head: {
        children: [
            "title",
            "base",
            "link",
            "style",
            "meta",
            "script",
            "noscript",
            "command"
        ]
    },
    header: e1,
    hgroup: e1,
    hr: e1,
    html: {
        attrs: {
            manifest: null
        }
    },
    i: e1,
    iframe: {
        attrs: {
            src: null,
            srcdoc: null,
            name: null,
            width: null,
            height: null,
            sandbox: [
                "allow-top-navigation",
                "allow-same-origin",
                "allow-forms",
                "allow-scripts"
            ],
            seamless: [
                "seamless"
            ]
        }
    },
    img: {
        attrs: {
            alt: null,
            src: null,
            ismap: null,
            usemap: null,
            width: null,
            height: null,
            crossorigin: [
                "anonymous",
                "use-credentials"
            ]
        }
    },
    input: {
        attrs: {
            alt: null,
            dirname: null,
            form: null,
            formaction: null,
            height: null,
            list: null,
            max: null,
            maxlength: null,
            min: null,
            name: null,
            pattern: null,
            placeholder: null,
            size: null,
            src: null,
            step: null,
            value: null,
            width: null,
            accept: [
                "audio/*",
                "video/*",
                "image/*"
            ],
            autocomplete: [
                "on",
                "off"
            ],
            autofocus: [
                "autofocus"
            ],
            checked: [
                "checked"
            ],
            disabled: [
                "disabled"
            ],
            formenctype: k10,
            formmethod: C14,
            formnovalidate: [
                "novalidate"
            ],
            formtarget: y13,
            multiple: [
                "multiple"
            ],
            readonly: [
                "readonly"
            ],
            required: [
                "required"
            ],
            type: [
                "hidden",
                "text",
                "search",
                "tel",
                "url",
                "email",
                "password",
                "datetime",
                "date",
                "month",
                "week",
                "time",
                "datetime-local",
                "number",
                "range",
                "color",
                "checkbox",
                "radio",
                "file",
                "submit",
                "image",
                "reset",
                "button"
            ]
        }
    },
    ins: {
        attrs: {
            cite: null,
            datetime: null
        }
    },
    kbd: e1,
    keygen: {
        attrs: {
            challenge: null,
            form: null,
            name: null,
            autofocus: [
                "autofocus"
            ],
            disabled: [
                "disabled"
            ],
            keytype: [
                "RSA"
            ]
        }
    },
    label: {
        attrs: {
            for: null,
            form: null
        }
    },
    legend: e1,
    li: {
        attrs: {
            value: null
        }
    },
    link: {
        attrs: {
            href: null,
            type: null,
            hreflang: null,
            media: null,
            sizes: [
                "all",
                "16x16",
                "16x16 32x32",
                "16x16 32x32 64x64"
            ]
        }
    },
    map: {
        attrs: {
            name: null
        }
    },
    mark: e1,
    menu: {
        attrs: {
            label: null,
            type: [
                "list",
                "context",
                "toolbar"
            ]
        }
    },
    meta: {
        attrs: {
            content: null,
            charset: w18,
            name: [
                "viewport",
                "application-name",
                "author",
                "description",
                "generator",
                "keywords"
            ],
            "http-equiv": [
                "content-language",
                "content-type",
                "default-style",
                "refresh"
            ]
        }
    },
    meter: {
        attrs: {
            value: null,
            min: null,
            low: null,
            high: null,
            max: null,
            optimum: null
        }
    },
    nav: e1,
    noframes: e1,
    noscript: e1,
    object: {
        attrs: {
            data: null,
            type: null,
            name: null,
            usemap: null,
            form: null,
            width: null,
            height: null,
            typemustmatch: [
                "typemustmatch"
            ]
        }
    },
    ol: {
        attrs: {
            reversed: [
                "reversed"
            ],
            start: null,
            type: [
                "1",
                "a",
                "A",
                "i",
                "I"
            ]
        },
        children: [
            "li",
            "script",
            "template",
            "ul",
            "ol"
        ]
    },
    optgroup: {
        attrs: {
            disabled: [
                "disabled"
            ],
            label: null
        }
    },
    option: {
        attrs: {
            disabled: [
                "disabled"
            ],
            label: null,
            selected: [
                "selected"
            ],
            value: null
        }
    },
    output: {
        attrs: {
            for: null,
            form: null,
            name: null
        }
    },
    p: e1,
    param: {
        attrs: {
            name: null,
            value: null
        }
    },
    pre: e1,
    progress: {
        attrs: {
            value: null,
            max: null
        }
    },
    q: {
        attrs: {
            cite: null
        }
    },
    rp: e1,
    rt: e1,
    ruby: e1,
    s: e1,
    samp: e1,
    script: {
        attrs: {
            type: [
                "text/javascript"
            ],
            src: null,
            async: [
                "async"
            ],
            defer: [
                "defer"
            ],
            charset: w18
        }
    },
    section: e1,
    select: {
        attrs: {
            form: null,
            name: null,
            size: null,
            autofocus: [
                "autofocus"
            ],
            disabled: [
                "disabled"
            ],
            multiple: [
                "multiple"
            ]
        }
    },
    small: e1,
    source: {
        attrs: {
            src: null,
            type: null,
            media: null
        }
    },
    span: e1,
    strike: e1,
    strong: e1,
    style: {
        attrs: {
            type: [
                "text/css"
            ],
            media: null,
            scoped: null
        }
    },
    sub: e1,
    summary: e1,
    sup: e1,
    table: e1,
    tbody: e1,
    td: {
        attrs: {
            colspan: null,
            rowspan: null,
            headers: null
        }
    },
    textarea: {
        attrs: {
            dirname: null,
            form: null,
            maxlength: null,
            name: null,
            placeholder: null,
            rows: null,
            cols: null,
            autofocus: [
                "autofocus"
            ],
            disabled: [
                "disabled"
            ],
            readonly: [
                "readonly"
            ],
            required: [
                "required"
            ],
            wrap: [
                "soft",
                "hard"
            ]
        }
    },
    tfoot: e1,
    th: {
        attrs: {
            colspan: null,
            rowspan: null,
            headers: null,
            scope: [
                "row",
                "col",
                "rowgroup",
                "colgroup"
            ]
        }
    },
    thead: e1,
    time: {
        attrs: {
            datetime: null
        }
    },
    title: e1,
    tr: e1,
    track: {
        attrs: {
            src: null,
            label: null,
            default: null,
            kind: [
                "subtitles",
                "captions",
                "descriptions",
                "chapters",
                "metadata"
            ],
            srclang: null
        }
    },
    tt: e1,
    u: e1,
    ul: {
        children: [
            "li",
            "script",
            "template",
            "ul",
            "ol"
        ]
    },
    var: e1,
    video: {
        attrs: {
            src: null,
            poster: null,
            width: null,
            height: null,
            crossorigin: [
                "anonymous",
                "use-credentials"
            ],
            preload: [
                "auto",
                "metadata",
                "none"
            ],
            autoplay: [
                "autoplay"
            ],
            mediagroup: [
                "movie"
            ],
            muted: [
                "muted"
            ],
            controls: [
                "controls"
            ]
        }
    },
    wbr: e1
}, $12 = {
    accesskey: null,
    class: null,
    contenteditable: c8,
    contextmenu: null,
    dir: [
        "ltr",
        "rtl",
        "auto"
    ],
    draggable: [
        "true",
        "false",
        "auto"
    ],
    dropzone: [
        "copy",
        "move",
        "link",
        "string:",
        "file:"
    ],
    hidden: [
        "hidden"
    ],
    id: null,
    inert: [
        "inert"
    ],
    itemid: null,
    itemprop: null,
    itemref: null,
    itemscope: [
        "itemscope"
    ],
    itemtype: null,
    lang: [
        "ar",
        "bn",
        "de",
        "en-GB",
        "en-US",
        "es",
        "fr",
        "hi",
        "id",
        "ja",
        "pa",
        "pt",
        "ru",
        "tr",
        "zh"
    ],
    spellcheck: c8,
    autocorrect: c8,
    autocapitalize: c8,
    style: null,
    tabindex: null,
    title: null,
    translate: [
        "yes",
        "no"
    ],
    onclick: null,
    rel: [
        "stylesheet",
        "alternate",
        "author",
        "bookmark",
        "help",
        "license",
        "next",
        "nofollow",
        "noreferrer",
        "prefetch",
        "prev",
        "search",
        "tag"
    ],
    role: "alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),
    "aria-activedescendant": null,
    "aria-atomic": c8,
    "aria-autocomplete": [
        "inline",
        "list",
        "both",
        "none"
    ],
    "aria-busy": c8,
    "aria-checked": [
        "true",
        "false",
        "mixed",
        "undefined"
    ],
    "aria-controls": null,
    "aria-describedby": null,
    "aria-disabled": c8,
    "aria-dropeffect": null,
    "aria-expanded": [
        "true",
        "false",
        "undefined"
    ],
    "aria-flowto": null,
    "aria-grabbed": [
        "true",
        "false",
        "undefined"
    ],
    "aria-haspopup": c8,
    "aria-hidden": c8,
    "aria-invalid": [
        "true",
        "false",
        "grammar",
        "spelling"
    ],
    "aria-label": null,
    "aria-labelledby": null,
    "aria-level": null,
    "aria-live": [
        "off",
        "polite",
        "assertive"
    ],
    "aria-multiline": c8,
    "aria-multiselectable": c8,
    "aria-owns": null,
    "aria-posinset": null,
    "aria-pressed": [
        "true",
        "false",
        "mixed",
        "undefined"
    ],
    "aria-readonly": c8,
    "aria-relevant": null,
    "aria-required": c8,
    "aria-selected": [
        "true",
        "false",
        "undefined"
    ],
    "aria-setsize": null,
    "aria-sort": [
        "ascending",
        "descending",
        "none",
        "other"
    ],
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuenow": null,
    "aria-valuetext": null
}, J12 = Object.keys(v13), q13 = Object.keys($12);
function b15(l319, a216, n408 = l319.length) {
    if (!a216) return "";
    let r512 = a216.firstChild, t1197 = r512 && r512.getChild("TagName");
    return t1197 ? l319.sliceString(t1197.from, Math.min(t1197.to, n408)) : "";
}
function T20(l320, a217 = !1) {
    for(let n409 = l320.parent; n409; n409 = n409.parent)if (n409.name == "Element") if (a217) a217 = !1;
    else return n409;
    return null;
}
function O13(l321, a218) {
    let n410 = v13[b15(l321, T20(a218, !0))];
    return (n410 == null ? void 0 : n410.children) || J12;
}
function x15(l322, a219) {
    let n411 = [];
    for(let r513 = a219; r513 = T20(r513);){
        let t1198 = b15(l322, r513);
        if (t1198 && r513.lastChild.name == "CloseTag") break;
        t1198 && n411.indexOf(t1198) < 0 && (a219.name == "EndTag" || a219.from >= r513.firstChild.to) && n411.push(t1198);
    }
    return n411;
}
var D16 = /^[:\-\.\w\u00b7-\uffff]+$/;
function j13(l323, a220, n412, r514) {
    let t1199 = /\s*>/.test(l323.sliceDoc(r514, r514 + 5)) ? "" : ">";
    return {
        from: n412,
        to: r514,
        options: O13(l323.doc, a220).map((o332)=>({
                label: o332,
                type: "type"
            })
        ).concat(x15(l323.doc, a220).map((o333, u95)=>({
                label: "/" + o333,
                apply: "/" + o333 + t1199,
                type: "type",
                boost: 99 - u95
            })
        )),
        span: /^\/?[:\-\.\w\u00b7-\uffff]*$/
    };
}
function _13(l324, a221, n413, r515) {
    let t1200 = /\s*>/.test(l324.sliceDoc(r515, r515 + 5)) ? "" : ">";
    return {
        from: n413,
        to: r515,
        options: x15(l324.doc, a221).map((o334, u96)=>({
                label: o334,
                apply: o334 + t1200,
                type: "type",
                boost: 99 - u96
            })
        ),
        span: D16
    };
}
function K10(l325, a222, n414) {
    let r516 = [], t1201 = 0;
    for (let o335 of O13(l325.doc, a222))r516.push({
        label: "<" + o335,
        type: "type"
    });
    for (let o1 of x15(l325.doc, a222))r516.push({
        label: "</" + o1 + ">",
        type: "type",
        boost: 99 - t1201++
    });
    return {
        from: n414,
        to: n414,
        options: r516,
        span: /^<\/?[:\-\.\w\u00b7-\uffff]*$/
    };
}
function Q13(l326, a223, n415, r517) {
    let t1202 = T20(a223), o336 = t1202 ? v13[b15(l326.doc, t1202)] : null, u97 = o336 && o336.attrs ? Object.keys(o336.attrs).concat(q13) : q13;
    return {
        from: n415,
        to: r517,
        options: u97.map((d88)=>({
                label: d88,
                type: "property"
            })
        ),
        span: D16
    };
}
function X11(l327, a224, n416, r518) {
    var t1203;
    let o337 = (t1203 = a224.parent) === null || t1203 === void 0 ? void 0 : t1203.getChild("AttributeName"), u98 = [], d89;
    if (o337) {
        let h176 = l327.sliceDoc(o337.from, o337.to), p44 = $12[h176];
        if (!p44) {
            let s517 = T20(a224), i644 = s517 ? v13[b15(l327.doc, s517)] : null;
            p44 = (i644 == null ? void 0 : i644.attrs) && i644.attrs[h176];
        }
        if (p44) {
            let s518 = l327.sliceDoc(n416, r518).toLowerCase(), i645 = '"', f126 = '"';
            /^['"]/.test(s518) ? (d89 = s518[0] == '"' ? /^[^"]*$/ : /^[^']*$/, i645 = "", f126 = l327.sliceDoc(r518, r518 + 1) == s518[0] ? "" : s518[0], s518 = s518.slice(1), n416++) : d89 = /^[^\s<>='"]*$/;
            for (let g54 of p44)u98.push({
                label: g54,
                apply: i645 + g54 + f126,
                type: "constant"
            });
        }
    }
    return {
        from: n416,
        to: r518,
        options: u98,
        span: d89
    };
}
function Y9(l328) {
    let { state: a225 , pos: n417  } = l328, r519 = v3(a225).resolveInner(n417), t1204 = r519.resolve(n417, -1);
    for(let o338 = n417, u99; r519 == t1204 && (u99 = t1204.childBefore(o338));){
        let d90 = u99.lastChild;
        if (!d90 || !d90.type.isError || d90.from < d90.to) break;
        r519 = t1204 = u99, o338 = d90.from;
    }
    return t1204.name == "TagName" ? t1204.parent && /CloseTag$/.test(t1204.parent.name) ? _13(a225, t1204, t1204.from, n417) : j13(a225, t1204, t1204.from, n417) : t1204.name == "StartTag" ? j13(a225, t1204, n417, n417) : t1204.name == "StartCloseTag" || t1204.name == "IncompleteCloseTag" ? _13(a225, t1204, n417, n417) : l328.explicit && (t1204.name == "OpenTag" || t1204.name == "SelfClosingTag") || t1204.name == "AttributeName" ? Q13(a225, t1204, t1204.name == "AttributeName" ? t1204.from : n417, n417) : t1204.name == "Is" || t1204.name == "AttributeValue" || t1204.name == "UnquotedAttributeValue" ? X11(a225, t1204, t1204.name == "Is" ? n417 : t1204.from, n417) : l328.explicit && (r519.name == "Element" || r519.name == "Text" || r519.name == "Document") ? K10(a225, t1204, n417) : null;
}
var N11 = P6.define({
    parser: ue5.configure({
        props: [
            Y2.add({
                Element (l329) {
                    let a226 = /^(\s*)(<\/)?/.exec(l329.textAfter);
                    return l329.node.to <= l329.pos + a226[0].length ? l329.continue() : l329.lineIndent(l329.node.from) + (a226[2] ? 0 : l329.unit);
                },
                "OpenTag CloseTag SelfClosingTag" (l330) {
                    return l330.column(l330.node.from) + l330.unit;
                },
                Document (l331) {
                    if (l331.pos + /\s*/.exec(l331.textAfter)[0].length < l331.node.to) return l331.continue();
                    let a227 = null, n418;
                    for(let r520 = l331.node;;){
                        let t1205 = r520.lastChild;
                        if (!t1205 || t1205.name != "Element" || t1205.to != r520.to) break;
                        a227 = r520 = t1205;
                    }
                    return a227 && !((n418 = a227.lastChild) && (n418.name == "CloseTag" || n418.name == "SelfClosingTag")) ? l331.lineIndent(a227.from) + l331.unit : null;
                }
            }),
            ot1.add({
                Element (l332) {
                    let a228 = l332.firstChild, n419 = l332.lastChild;
                    return !a228 || a228.name != "OpenTag" ? null : {
                        from: a228.to,
                        to: n419.name == "CloseTag" ? n419.from : l332.to
                    };
                }
            }),
            yt2({
                "Text RawText": i1.content,
                "StartTag StartCloseTag SelfCloserEndTag EndTag SelfCloseEndTag": i1.angleBracket,
                TagName: i1.tagName,
                "MismatchedCloseTag/TagName": [
                    i1.tagName,
                    i1.invalid
                ],
                AttributeName: i1.attributeName,
                "AttributeValue UnquotedAttributeValue": i1.attributeValue,
                Is: i1.definitionOperator,
                "EntityReference CharacterReference": i1.character,
                Comment: i1.blockComment,
                ProcessingInst: i1.processingInstruction,
                DoctypeDecl: i1.documentMeta
            })
        ],
        wrap: Re2([
            {
                tag: "script",
                attrs (l333) {
                    return !l333.type || /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(l333.type);
                },
                parser: l4.parser
            },
            {
                tag: "style",
                attrs (l334) {
                    return (!l334.lang || l334.lang == "css") && (!l334.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(l334.type));
                },
                parser: m9.parser
            }
        ])
    }),
    languageData: {
        commentTokens: {
            block: {
                open: "<!--",
                close: "-->"
            }
        },
        indentOnInput: /^\s*<\/\w+\W$/,
        wordChars: "-._"
    }
}), Z9 = N11.data.of({
    autocomplete: Y9
});
function ie7(l335 = {}) {
    let a229 = N11;
    return l335.matchClosingTags === !1 && (a229 = a229.configure({
        dialect: "noMatch"
    })), new J5(a229, [
        Z9,
        l335.autoCloseTags !== !1 ? ee8 : [],
        A13().support,
        L11().support
    ]);
}
var ee8 = D2.inputHandler.of((l336, a230, n420, r521)=>{
    if (l336.composing || l336.state.readOnly || a230 != n420 || r521 != ">" && r521 != "/" || !N11.isActiveAt(l336.state, a230, -1)) return !1;
    let { state: t1206  } = l336, o339 = t1206.changeByRange((u100)=>{
        var d91, h177, p45;
        let { head: s519  } = u100, i646 = v3(t1206).resolveInner(s519, -1), f127;
        if ((i646.name == "TagName" || i646.name == "StartTag") && (i646 = i646.parent), r521 == ">" && i646.name == "OpenTag") {
            if (((h177 = (d91 = i646.parent) === null || d91 === void 0 ? void 0 : d91.lastChild) === null || h177 === void 0 ? void 0 : h177.name) != "CloseTag" && (f127 = b15(t1206.doc, i646.parent, s519))) return {
                range: p.cursor(s519 + 1),
                changes: {
                    from: s519,
                    insert: `></${f127}>`
                }
            };
        } else if (r521 == "/" && i646.name == "OpenTag") {
            let g55 = i646.parent, A18 = g55 == null ? void 0 : g55.parent;
            if (g55.from == s519 - 1 && ((p45 = A18.lastChild) === null || p45 === void 0 ? void 0 : p45.name) != "CloseTag" && (f127 = b15(t1206.doc, A18, s519))) {
                let S20 = `/${f127}>`;
                return {
                    range: p.cursor(s519 + S20.length),
                    changes: {
                        from: s519,
                        insert: S20
                    }
                };
            }
        }
        return {
            range: u100
        };
    });
    return o339.changes.empty ? !1 : (l336.dispatch(o339, {
        userEvent: "input.type",
        scrollIntoView: !0
    }), !0);
});
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c153) {
        var r522 = Math.random() * 16 | 0, v30 = c153 == 'x' ? r522 : r522 & 3 | 8;
        return v30.toString(16);
    });
}
const CACHE = "CACHE";
function createStore(initialState = {}, notify1 = ()=>null
, save1 = ()=>null
) {
    let state = {
        [CACHE]: {},
        ...initialState
    };
    const context = {
        set: function(schema, payload, handler = defaultHandler) {
            if (typeof handler === 'function') {
                const newCache = touchCache(state[CACHE], schema);
                const newResource = handler(state[schema] || {}, payload);
                state = {
                    ...state,
                    [CACHE]: newCache,
                    [schema]: newResource
                };
                save1(schema, state[schema]);
                notify1(state);
            } else {
                console.error('No Resource Handler provided: ', schema, payload);
            }
        },
        get: function(schema) {
            return state[schema];
        }
    };
    return context;
}
function touchCache(state, schema) {
    return {
        ...state,
        [schema]: uuidv4()
    };
}
function defaultHandler(state, payload) {
    return {
        ...state,
        ...payload
    };
}
const databaseName = 'ion';
const storeName = 'cache';
const database = new Promise(function initialize(resolve, reject) {
    const request = indexedDB.open(databaseName, 1);
    request.onupgradeneeded = function(event) {
        const database1 = event.target.result;
        database1.createObjectStore(storeName, {
            keyPath: 'schema',
            autoIncrement: false
        });
    };
    request.onsuccess = function(event) {
        resolve(event.target.result);
    };
});
async function load(keys) {
    const db = await database;
    const transaction = db.transaction(storeName);
    const objectStore = transaction.objectStore(storeName);
    const rows1 = await new Promise(function loadFromDatabase(resolve, reject) {
        const rows = [];
        const read1 = objectStore.openCursor();
        read1.onsuccess = function(event) {
            let cursor = event.target.result;
            if (cursor) {
                if (keys.includes(cursor.key)) {
                    rows.push(cursor.value);
                }
                cursor.continue();
            } else {
                resolve(rows);
            }
        };
        read1.onerror = reject;
    });
    return rows1;
}
async function save(schema, data) {
    const db = await database;
    const record = {
        schema,
        data
    };
    const transaction = db.transaction(storeName, 'readwrite');
    const objectStore = transaction.objectStore(storeName);
    let request1;
    return new Promise(function saveToDatabase(resolve, reject) {
        try {
            request1 = objectStore.get(schema);
            request1.onsuccess = function(event) {
                const request = objectStore.put(record);
                request.onsuccess = resolve;
            };
        } catch (e) {
            const request = objectStore.add(record);
            request.onsuccess = resolve;
            request.onerror = reject;
        }
    });
}
const __default = {
    save,
    load
};
function uuidv41() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c154) {
        var r523 = Math.random() * 16 | 0, v31 = c154 == 'x' ? r523 : r523 & 3 | 8;
        return v31.toString(16);
    });
}
const renderEvent = new Event('render');
const mountEvent = new Event('mount');
let selectors = [];
function observe(selector) {
    selectors = [
        ...new Set([
            ...selectors,
            selector
        ])
    ];
    render();
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
function render(_state) {
    const subscribers1 = getSubscribers(document);
    dispatchRender(subscribers1);
}
function getSubscribers(node) {
    if (selectors.length > 0) return [
        ...node.querySelectorAll(selectors.join(', '))
    ];
    else return [];
}
function dispatchRender(subscribers2) {
    subscribers2.map((s520)=>{
        if (!s520.mounted) {
            s520.mounted = true;
            if (!s520.id) s520.id = uuidv41();
            s520.dispatchEvent(mountEvent);
        }
        s520.dispatchEvent(renderEvent);
    });
}
const config = {
    childList: true,
    subtree: true
};
function mutationObserverCallback(mutationsList, observer) {
    const subscriberCollections = [
        ...mutationsList
    ].map((m60)=>getSubscribers(m60.target)
    );
    subscriberCollections.forEach(dispatchRender);
}
const observer = new MutationObserver(mutationObserverCallback);
observer.observe(document.body, config);
function listen(type, selector, handler, scope) {
    const callback = (event)=>{
        if (event.target && event.target.matches && event.target.matches(selector)) {
            handler.call(this, event, scope);
        }
    };
    document.addEventListener(type, callback, true);
    return function unlisten() {
        document.removeEventListener(type, callback, true);
    };
}
const observableEvents = [
    'render',
    'mount'
];
function on1(type, selector, handler) {
    const unbind = listen(type, selector, handler, this);
    if (observableEvents.includes(type)) {
        observe(selector);
    }
    return function unlisten() {
        if (type === 'render') {
            disregard(selector);
        }
        unbind();
    };
}
let lastState = {};
let subscribers = [
    render
];
const notify = (state)=>{
    lastState = state;
    subscribers.map(function notifySubscriber(notify1) {
        notify1(state);
    });
};
const store = createStore({}, notify, __default.save);
const ion = {
    set: store.set,
    get: store.get,
    load: function load(schema1) {
        __default.load(schema1).then(function restoreFromCache(rows) {
            rows.map(({ schema , data  })=>store.set(schema, data)
            );
        });
    },
    restore: function restore(schema) {
        return __default.load(schema).then(function restoreFromCache(rows) {
            const row = rows.find((x28)=>x28.schema === schema
            ) || {
                data: {}
            };
            return row.data;
        });
    },
    relay: function relay(subscriber) {
        subscribers = [
            ...subscribers,
            subscriber
        ];
        subscriber(lastState);
    }
};
ion.on = on1.bind(ion);
ion.on;
ion.load;
ion.relay;
ion.set;
ion.get;
let virtualDOM;
let equal = (a231, b35)=>a231 === b35
;
const cleanStates = {};
const dom = (target, html)=>{
    if (virtualDOM) {
        virtualDOM(target, html);
    } else {
        target.innerHTML = html;
    }
};
function mount(selector, callback) {
    ion.on('mount', selector, (event)=>{
        console.log(event.target.id);
        callback(event.target);
    });
}
async function render1(selector, callback, dependencies = []) {
    ion.on('render', selector, (event)=>{
        const id = [
            ...event.target.attributes
        ].reduce((data, x29)=>{
            return `${data}${x29.name}${x29.value}`;
        }, '');
        if (clean(id, selector, dependencies)) return;
        const { loaded  } = read(selector);
        if (!loaded) return;
        const html = callback(event.target);
        if (html) dom(event.target, html);
    });
    const { innerHTML  } = await import('https://esm.sh/diffhtml');
    virtualDOM = innerHTML;
}
function style(selector, stylesheet) {
    const styles = `
    <style type="text/css" data-tag=${selector}>
      ${stylesheet.replaceAll('&', selector)}
    </style>
  `;
    document.body.insertAdjacentHTML("beforeend", styles);
}
function read(selector) {
    return ion.get(selector) || {};
}
function write(selector, payload, middleware) {
    ion.set(selector, payload, middleware);
}
function on2(selector1, eventName, selector2, callback) {
    ion.on(eventName, `${selector1} ${selector2}`, callback);
}
function restore(selector, initialState) {
    const promise = ion.restore(selector);
    promise.then((state)=>{
        write(selector, {
            ...initialState,
            ...state,
            loaded: true
        });
    });
    write(selector, initialState);
    return promise;
}
function clean(id, selector, ...more) {
    const selectors1 = [
        selector,
        ...more
    ];
    const cacheIndex = `${id}${new Error().stack}`;
    const cache = cleanStates[cacheIndex] || function init() {
        return cleanStates[cacheIndex] = {};
    }();
    return selectors1.every((x30)=>{
        const previous = cache[x30];
        const current = ion.get(x30);
        const same = equal(previous, current);
        cleanStates[cacheIndex][x30] = current;
        return same;
    });
}
function tag(selector, initialState = {}) {
    let thisTagReady = false;
    function ready(hook) {
        if (!thisTagReady) {
            requestAnimationFrame(()=>ready(hook)
            );
            return;
        }
        hook();
    }
    restore(selector, initialState).then(()=>thisTagReady = true
    );
    return {
        ready,
        selector,
        mount: mount.bind(null, selector),
        read: read.bind(null, selector),
        render: render1.bind(null, selector),
        style: style.bind(null, selector),
        on: on2.bind(null, selector),
        write: write.bind(null, selector),
        slug: selector,
        css: style.bind(null, selector),
        html: render1.bind(null, selector),
        get: read.bind(null, selector),
        restore: function() {
            console.error('#tag.restore() was deprecated. please use #tag.ready instead.');
        },
        set: write.bind(null, selector)
    };
}
import('https://esm.sh/fast-equals@2.0.4').then(({ deepEqual  })=>equal = deepEqual
);
const ENV = {
    PROD: 'production',
    DEV: 'development',
    SAFE: 'safe'
};
window.tag = tag;
window.createEditor = (selector, flags = {})=>{
    flags ? console.log('Initializing with', {
        flags
    }) : console.log('Initializing with no flags');
    const { path =''  } = flags;
    const environments = {
        "": ENV.SAFE,
        "localhost": ENV.DEV
    };
    const newFlags = {
        ...flags,
        mode: environments[flags.hostname] || ENV.PROD,
        path: path.split('/').slice(0, -1).join('/'),
        syncInterval: 30000
    };
    const $20 = tag(selector);
    mount1($20, newFlags);
    onAutosave($20, {
        ...newFlags,
        every: 5
    });
    onPublish($20, newFlags);
    onRecover($20, newFlags);
    onView($20, newFlags);
};
const editors = {};
const autosave = upload.bind(null, 'autosave');
const publish = upload.bind(null, 'save');
const config1 = {
    extensions: [
        D13,
        ie7(),
        L11(),
        A13(),
        D2.lineWrapping
    ]
};
function tree($21, _flags) {
    const { paths  } = $21.read();
    const items = paths.map((x31)=>`
    <li>
      <a href="${x31.path}/edit">${x31.name}</a>
    </li>
  `
    ).join('');
    return `<ul>${items}</ul>`;
}
function actions($22, flags) {
    return `
    <button data-recover data-id="${flags.path}">
      Recover
    </button>
    <button data-view data-id="${flags.path}">
      View
    </button>
    <div style="float: right">
      ${safePublish($22, flags)}
    </div>
  `;
}
function mount1($23, flags) {
    $23.mount((target)=>{
        $23.ready(()=>initialize(target, $23, flags)
        );
    });
}
function initialize(target, $24, flags) {
    if (editors[flags.path]) return;
    syncDirectories($24, flags);
    layout($24, flags);
    const $navigation = tag(`${$24.selector} .navigation`);
    const $sidebar = tag(`${$24.selector} .sidebar`);
    target.innerHTML = `
    <nav class="navigation"></nav>
    <aside class="sidebar"></aside>
    <main class="code"></main>
    <section class="preview">
      <iframe></iframe>
    </section>
  `;
    $navigation.render(()=>actions($24, flags)
    );
    $sidebar.render(()=>tree($24, flags)
    );
    const initialState = $24.read();
    const { value  } = initialState[flags.path] || {};
    preview($24, {
        value
    });
    const state = w1.create({
        ...config1,
        ...flags,
        doc: value
    });
    const view1 = new D2({
        lineWrapping: true,
        dispatch: persist($24, flags),
        parent: target.querySelector('.code'),
        state
    });
    editors[flags.path] = {
        $: $24,
        state,
        view: view1
    };
    if (!value) {
        recover($24, flags);
    }
}
function safePublish(_$, flags) {
    return flags.mode !== ENV.SAFE ? `
      <button data-publish data-id="${flags.path}">
        Publish
      </button>
    ` : '';
}
function onAutosave($25, flags) {
    setInterval(()=>each($25, ()=>{
            autosave($25, flags);
        })
    , flags.every * 1000);
}
function onPublish($26, flags) {
    $26.on('click', '[data-publish]', ()=>{
        publish($26, flags);
    });
}
function onRecover($27, flags) {
    $27.on('click', '[data-recover]', ()=>{
        recover($27, flags);
    });
}
function onView($28, flags) {
    $28.on('click', '[data-view]', ()=>{
        view($28, flags);
    });
}
async function upload(mode, $29, flags) {
    const currentState = $29.read();
    const { value  } = currentState[flags.path] || {};
    if (value) {
        const response = await fetch(flags.path, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mode,
                value
            })
        });
        console.log(response);
    }
}
function persist($30, flags) {
    return (transaction)=>{
        if (transaction.changes.inserted.length < 0) return;
        const { view: view2  } = editors[flags.path];
        const value = view2.state.doc.toString();
        preview($30, {
            value
        });
        view2.update([
            transaction
        ]);
        $30.write({
            [flags.path]: {
                value
            }
        });
    };
}
function preview($31, flags) {
    let { value  } = flags;
    if (!value) return;
    const singleQuote = `'${window.location.origin}/`;
    const doubleQuote = `"${window.location.origin}/`;
    value = value.replace(/'\//g, singleQuote);
    value = value.replace(/"\//g, doubleQuote);
    const blob = new Blob([
        value
    ], {
        type: 'text/html'
    });
    const href = URL.createObjectURL(blob);
    document.querySelector(`${$31.selector} iframe`).src = href;
}
async function recover($32, flags) {
    const value = await fetch(`${flags.path}`).then((res)=>res.text()
    );
    const { view: view3  } = editors[flags.path];
    view3.dispatch({
        changes: {
            from: 0,
            to: view3.state.doc.toString().length,
            insert: value
        }
    });
    $32.write({
        [flags.path]: {
            value
        }
    });
}
function view(_$, flags) {
    window.open(flags.path, '_blank');
}
function each($33, save2) {
    return [
        ...document.querySelectorAll($33.selector)
    ].map(save2);
}
function syncDirectories($34, flags) {
    poll();
    async function poll() {
        const { paths  } = await fetch('/status').then((res)=>res.json()
        );
        $34.write({
            paths
        });
    }
    setInterval(poll, flags.syncInterval);
}
function layout($35, _flags) {
    const repl = `
    & {
      display: grid;
      grid-template-areas: "nav nav nav" "sidebar editor preview";
      grid-auto-columns: 180px 1fr 1fr;
      grid-auto-rows: 2rem calc(100vh - 2rem);
      height: 100vh;
      max-width: 100%;
    }

    & .navigation {
      grid-area: nav;
    }

    & .sidebar {
      grid-area: sidebar;
      overflow: auto;
    }

    & .code {
      grid-area: editor;
      overflow: auto;
    }

    & .preview {
      grid-area: preview;
    }

    & iframe {
      height: 100%; border: 0; width: 100%;
    }
  `;
    $35.css(repl);
}
