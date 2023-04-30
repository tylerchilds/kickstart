/* esm.sh - esbuild bundle(@lezer/highlight@1.1.4) deno production */
import{NodeProp as J}from"/v117/@lezer/common@1.0.2/deno/common.mjs";var G=0,f=class{constructor(t,a,i){this.set=t,this.base=a,this.modified=i,this.id=G++}static define(t){if(t?.base)throw new Error("Can not derive from a modified tag");let a=new f([],null,[]);if(a.set.push(a),t)for(let i of t.set)a.set.push(i);return a}static defineModifier(){let t=new v;return a=>a.modified.indexOf(t)>-1?a:v.get(a.base||a,a.modified.concat(t).sort((i,l)=>i.id-l.id))}},L=0,v=class{constructor(){this.instances=[],this.id=L++}static get(t,a){if(!a.length)return t;let i=a[0].instances.find(o=>o.base==t&&Q(a,o.modified));if(i)return i;let l=[],s=new f(l,t,a);for(let o of a)o.instances.push(s);let g=U(a);for(let o of t.set)if(!o.modified.length)for(let d of g)l.push(v.get(o,d));return s}};function Q(r,t){return r.length==t.length&&r.every((a,i)=>a==t[i])}function U(r){let t=[[]];for(let a=0;a<r.length;a++)for(let i=0,l=t.length;i<l;i++)t.push(t[i].concat(r[a]));return t.sort((a,i)=>i.length-a.length)}function $(r){let t=Object.create(null);for(let a in r){let i=r[a];Array.isArray(i)||(i=[i]);for(let l of a.split(" "))if(l){let s=[],g=2,o=l;for(let p=0;;){if(o=="..."&&p>0&&p+3==l.length){g=1;break}let h=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(o);if(!h)throw new RangeError("Invalid path: "+l);if(s.push(h[0]=="*"?"":h[0][0]=='"'?JSON.parse(h[0]):h[0]),p+=h[0].length,p==l.length)break;let N=l[p++];if(p==l.length&&N=="!"){g=0;break}if(N!="/")throw new RangeError("Invalid path: "+l);o=l.slice(p)}let d=s.length-1,c=s[d];if(!c)throw new RangeError("Invalid path: "+l);let O=new M(i,g,d>0?s.slice(0,d):null);t[c]=O.sort(t[c])}}return V.add(t)}var V=new J,M=class{constructor(t,a,i,l){this.tags=t,this.mode=a,this.context=i,this.next=l}get opaque(){return this.mode==0}get inherit(){return this.mode==1}sort(t){return!t||t.depth<this.depth?(this.next=t,this):(t.next=this.sort(t.next),t)}get depth(){return this.context?this.context.length:0}};M.empty=new M([],2,null);function W(r,t){let a=Object.create(null);for(let s of r)if(!Array.isArray(s.tag))a[s.tag.id]=s.class;else for(let g of s.tag)a[g.id]=s.class;let{scope:i,all:l=null}=t||{};return{style:s=>{let g=l;for(let o of s)for(let d of o.set){let c=a[d.id];if(c){g=g?g+" "+c:c;break}}return g},scope:i}}function X(r,t){let a=null;for(let i of r){let l=i.style(t);l&&(a=a?a+" "+l:l)}return a}function _(r,t,a,i=0,l=r.length){let s=new j(i,Array.isArray(t)?t:[t],a);s.highlightRange(r.cursor(),i,l,"",s.highlighters),s.flush(l)}var j=class{constructor(t,a,i){this.at=t,this.highlighters=a,this.span=i,this.class=""}startSpan(t,a){a!=this.class&&(this.flush(t),t>this.at&&(this.at=t),this.class=a)}flush(t){t>this.at&&this.class&&this.span(this.at,t,this.class)}highlightRange(t,a,i,l,s){let{type:g,from:o,to:d}=t;if(o>=i||d<=a)return;g.isTop&&(s=this.highlighters.filter(N=>!N.scope||N.scope(g)));let c=l,O=Y(t)||M.empty,p=X(s,O.tags);if(p&&(c&&(c+=" "),c+=p,O.mode==1&&(l+=(l?" ":"")+p)),this.startSpan(t.from,c),O.opaque)return;let h=t.tree&&t.tree.prop(J.mounted);if(h&&h.overlay){let N=t.node.enter(h.overlay[0].from+o,1),z=this.highlighters.filter(x=>!x.scope||x.scope(h.tree.type)),D=t.firstChild();for(let x=0,S=o;;x++){let A=x<h.overlay.length?h.overlay[x]:null,E=A?A.from+o:d,H=Math.max(a,S),I=Math.min(i,E);if(H<I&&D)for(;t.from<I&&(this.highlightRange(t,H,I,l,s),this.startSpan(Math.min(I,t.to),c),!(t.to>=E||!t.nextSibling())););if(!A||E>i)break;S=A.to+o,S>a&&(this.highlightRange(N.cursor(),Math.max(a,A.from+o),Math.min(i,S),l,z),this.startSpan(S,c))}D&&t.parent()}else if(t.firstChild()){do if(!(t.to<=a)){if(t.from>=i)break;this.highlightRange(t,a,i,l,s),this.startSpan(Math.min(i,t.to),c)}while(t.nextSibling());t.parent()}}};function Y(r){let t=r.type.prop(V);for(;t&&t.context&&!r.matchContext(t.context);)t=t.next;return t||null}var e=f.define,C=e(),y=e(),B=e(y),F=e(y),b=e(),T=e(b),K=e(b),k=e(),w=e(k),m=e(),u=e(),P=e(),R=e(P),q=e(),n={comment:C,lineComment:e(C),blockComment:e(C),docComment:e(C),name:y,variableName:e(y),typeName:B,tagName:e(B),propertyName:F,attributeName:e(F),className:e(y),labelName:e(y),namespace:e(y),macroName:e(y),literal:b,string:T,docString:e(T),character:e(T),attributeValue:e(T),number:K,integer:e(K),float:e(K),bool:e(b),regexp:e(b),escape:e(b),color:e(b),url:e(b),keyword:m,self:e(m),null:e(m),atom:e(m),unit:e(m),modifier:e(m),operatorKeyword:e(m),controlKeyword:e(m),definitionKeyword:e(m),moduleKeyword:e(m),operator:u,derefOperator:e(u),arithmeticOperator:e(u),logicOperator:e(u),bitwiseOperator:e(u),compareOperator:e(u),updateOperator:e(u),definitionOperator:e(u),typeOperator:e(u),controlOperator:e(u),punctuation:P,separator:e(P),bracket:R,angleBracket:e(R),squareBracket:e(R),paren:e(R),brace:e(R),content:k,heading:w,heading1:e(w),heading2:e(w),heading3:e(w),heading4:e(w),heading5:e(w),heading6:e(w),contentSeparator:e(k),list:e(k),quote:e(k),emphasis:e(k),strong:e(k),link:e(k),monospace:e(k),strikethrough:e(k),inserted:e(),deleted:e(),changed:e(),invalid:e(),meta:q,documentMeta:e(q),annotation:e(q),processingInstruction:e(q),definition:f.defineModifier(),constant:f.defineModifier(),function:f.defineModifier(),standard:f.defineModifier(),local:f.defineModifier(),special:f.defineModifier()},tt=W([{tag:n.link,class:"tok-link"},{tag:n.heading,class:"tok-heading"},{tag:n.emphasis,class:"tok-emphasis"},{tag:n.strong,class:"tok-strong"},{tag:n.keyword,class:"tok-keyword"},{tag:n.atom,class:"tok-atom"},{tag:n.bool,class:"tok-bool"},{tag:n.url,class:"tok-url"},{tag:n.labelName,class:"tok-labelName"},{tag:n.inserted,class:"tok-inserted"},{tag:n.deleted,class:"tok-deleted"},{tag:n.literal,class:"tok-literal"},{tag:n.string,class:"tok-string"},{tag:n.number,class:"tok-number"},{tag:[n.regexp,n.escape,n.special(n.string)],class:"tok-string2"},{tag:n.variableName,class:"tok-variableName"},{tag:n.local(n.variableName),class:"tok-variableName tok-local"},{tag:n.definition(n.variableName),class:"tok-variableName tok-definition"},{tag:n.special(n.variableName),class:"tok-variableName2"},{tag:n.definition(n.propertyName),class:"tok-propertyName tok-definition"},{tag:n.typeName,class:"tok-typeName"},{tag:n.namespace,class:"tok-namespace"},{tag:n.className,class:"tok-className"},{tag:n.macroName,class:"tok-macroName"},{tag:n.propertyName,class:"tok-propertyName"},{tag:n.operator,class:"tok-operator"},{tag:n.comment,class:"tok-comment"},{tag:n.meta,class:"tok-meta"},{tag:n.invalid,class:"tok-invalid"},{tag:n.punctuation,class:"tok-punctuation"}]);export{f as Tag,tt as classHighlighter,Y as getStyleTags,_ as highlightTree,$ as styleTags,W as tagHighlighter,n as tags};
//# sourceMappingURL=highlight.mjs.map