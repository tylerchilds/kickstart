/* esm.sh - esbuild bundle(style-mod@4.0.3) deno production */
var y="\u037C",g=typeof Symbol>"u"?"__"+y:Symbol.for(y),S=typeof Symbol>"u"?"__styleSet"+Math.floor(Math.random()*1e8):Symbol("styleSet"),w=typeof globalThis<"u"?globalThis:typeof document<"u"?window:{},b=class{constructor(e,s){this.rules=[];let{finish:h}=s||{};function l(t){return/^@/.test(t)?[t]:t.split(/,\s*/)}function i(t,n,a,x){let f=[],r=/^@(\w+)\b/.exec(t[0]),c=r&&r[1]=="keyframes";if(r&&n==null)return a.push(t[0]+";");for(let u in n){let o=n[u];if(/&/.test(u))i(u.split(/,\s*/).map(d=>t.map(p=>d.replace(/&/,p))).reduce((d,p)=>d.concat(p)),o,a);else if(o&&typeof o=="object"){if(!r)throw new RangeError("The value of a property ("+u+") should be a primitive value.");i(l(u),o,f,c)}else o!=null&&f.push(u.replace(/_.*/,"").replace(/[A-Z]/g,d=>"-"+d.toLowerCase())+": "+o+";")}(f.length||c)&&a.push((h&&!r&&!x?t.map(h):t).join(", ")+" {"+f.join(" ")+"}")}for(let t in e)i(l(t),e[t],this.rules)}getRules(){return this.rules.join(`
`)}static newName(){let e=w[g]||1;return w[g]=e+1,y+e.toString(36)}static mount(e,s){(e[S]||new m(e)).mount(Array.isArray(s)?s:[s])}},T=new Map,m=class{constructor(e){let s=e.ownerDocument||e,h=s.defaultView;if(!e.head&&e.adoptedStyleSheets&&h.CSSStyleSheet){let l=T.get(s);if(l)return e.adoptedStyleSheets=[l.sheet,...e.adoptedStyleSheets],e[S]=l;this.sheet=new h.CSSStyleSheet,e.adoptedStyleSheets=[this.sheet,...e.adoptedStyleSheets],T.set(s,this)}else{this.styleTag=s.createElement("style");let l=e.head||e;l.insertBefore(this.styleTag,l.firstChild)}this.modules=[],e[S]=this}mount(e){let s=this.sheet,h=0,l=0;for(let i=0;i<e.length;i++){let t=e[i],n=this.modules.indexOf(t);if(n<l&&n>-1&&(this.modules.splice(n,1),l--,n=-1),n==-1){if(this.modules.splice(l++,0,t),s)for(let a=0;a<t.rules.length;a++)s.insertRule(t.rules[a],h++)}else{for(;l<n;)h+=this.modules[l++].rules.length;h+=t.rules.length,l++}}if(!s){let i="";for(let t=0;t<this.modules.length;t++)i+=this.modules[t].getRules()+`
`;this.styleTag.textContent=i}}};export{b as StyleModule};
//# sourceMappingURL=style-mod.mjs.map