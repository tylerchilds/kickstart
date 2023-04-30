/* esm.sh - esbuild bundle(@codemirror/autocomplete@0.20.3) deno production */
import{Annotation as We,EditorSelection as g,codePointAt as b,codePointSize as y,fromCodePoint as Ie,Facet as Se,combineConfig as Fe,StateEffect as v,StateField as ie,Prec as Ee,Text as Ne,MapMode as G,RangeValue as qe,RangeSet as ae,CharCategory as fe}from"/v117/@codemirror/state@0.20.1/deno/state.mjs";import{logException as J,Direction as He,showTooltip as Ve,EditorView as M,ViewPlugin as Ke,getTooltip as ze,Decoration as N,WidgetType as Qe,keymap as Pe}from"/v117/@codemirror/view@0.20.7/deno/view.mjs";import{syntaxTree as B,indentUnit as Xe}from"/v117/@codemirror/language@0.20.2/deno/language.mjs";var U=class{constructor(e,t,i){this.state=e,this.pos=t,this.explicit=i,this.abortListeners=[]}tokenBefore(e){let t=B(this.state).resolveInner(this.pos,-1);for(;t&&e.indexOf(t.name)<0;)t=t.parent;return t?{from:t.from,to:this.pos,text:this.state.sliceDoc(t.from,this.pos),type:t.type}:null}matchBefore(e){let t=this.state.doc.lineAt(this.pos),i=Math.max(t.from,this.pos-250),s=t.text.slice(i-t.from,this.pos-t.from),o=s.search(Te(e,!1));return o<0?null:{from:i+o,to:this.pos,text:s.slice(o)}}get aborted(){return this.abortListeners==null}addEventListener(e,t){e=="abort"&&this.abortListeners&&this.abortListeners.push(t)}};function ue(n){let e=Object.keys(n).join(""),t=/\w/.test(e);return t&&(e=e.replace(/\w/g,"")),`[${t?"\\w":""}${e.replace(/[^\w\s]/g,"\\$&")}]`}function Ye(n){let e=Object.create(null),t=Object.create(null);for(let{label:s}of n){e[s[0]]=!0;for(let o=1;o<s.length;o++)t[s[o]]=!0}let i=ue(e)+ue(t)+"*$";return[new RegExp("^"+i),new RegExp(i)]}function Ge(n){let e=n.map(s=>typeof s=="string"?{label:s}:s),[t,i]=e.every(s=>/^\w+$/.test(s.label))?[/\w*$/,/\w+$/]:Ye(e);return s=>{let o=s.matchBefore(i);return o||s.explicit?{from:o?o.from:s.pos,options:e,validFor:t}:null}}function Nt(n,e){return t=>{for(let i=B(t.state).resolveInner(t.pos,-1);i;i=i.parent)if(n.indexOf(i.name)>-1)return e(t);return null}}function qt(n,e){return t=>{for(let i=B(t.state).resolveInner(t.pos,-1);i;i=i.parent)if(n.indexOf(i.name)>-1)return null;return e(t)}}var $=class{constructor(e,t,i){this.completion=e,this.source=t,this.match=i}};function x(n){return n.selection.main.head}function Te(n,e){var t;let{source:i}=n,s=e&&i[0]!="^",o=i[i.length-1]!="$";return!s&&!o?n:new RegExp(`${s?"^":""}(?:${i})${o?"$":""}`,(t=n.flags)!==null&&t!==void 0?t:n.ignoreCase?"i":"")}var Ht=We.define();function Je(n,e,t,i){return Object.assign(Object.assign({},n.changeByRange(s=>{if(s==n.selection.main)return{changes:{from:t,to:i,insert:e},range:g.cursor(t+e.length)};let o=i-t;return!s.empty||o&&n.sliceDoc(s.from-o,s.from)!=n.sliceDoc(t,i)?{range:s}:{changes:{from:s.from-o,to:s.from,insert:e},range:g.cursor(s.from-o+e.length)}})),{userEvent:"input.complete"})}function Ae(n,e){let t=e.completion.apply||e.completion.label,i=e.source;typeof t=="string"?n.dispatch(Je(n.state,t,i.from,i.to)):t(n,e.completion,i.from,i.to)}var he=new WeakMap;function Ze(n){if(!Array.isArray(n))return n;let e=he.get(n);return e||he.set(n,e=Ge(n)),e}var Z=class{constructor(e){this.pattern=e,this.chars=[],this.folded=[],this.any=[],this.precise=[],this.byWord=[];for(let t=0;t<e.length;){let i=b(e,t),s=y(i);this.chars.push(i);let o=e.slice(t,t+s),l=o.toUpperCase();this.folded.push(b(l==o?o.toLowerCase():l,0)),t+=s}this.astral=e.length!=this.chars.length}match(e){if(this.pattern.length==0)return[0];if(e.length<this.pattern.length)return null;let{chars:t,folded:i,any:s,precise:o,byWord:l}=this;if(t.length==1){let h=b(e,0);return h==t[0]?[0,0,y(h)]:h==i[0]?[-200,0,y(h)]:null}let r=e.indexOf(this.pattern);if(r==0)return[0,0,this.pattern.length];let c=t.length,a=0;if(r<0){for(let h=0,Q=Math.min(e.length,200);h<Q&&a<c;){let T=b(e,h);(T==t[a]||T==i[a])&&(s[a++]=h),h+=y(T)}if(a<c)return null}let f=0,u=0,H=!1,w=0,V=-1,K=-1,$e=/[a-z]/.test(e),z=!0;for(let h=0,Q=Math.min(e.length,200),T=0;h<Q&&u<c;){let m=b(e,h);r<0&&(f<c&&m==t[f]&&(o[f++]=h),w<c&&(m==t[w]||m==i[w]?(w==0&&(V=h),K=h+1,w++):w=0));let D,X=m<255?m>=48&&m<=57||m>=97&&m<=122?2:m>=65&&m<=90?1:0:(D=Ie(m))!=D.toLowerCase()?1:D!=D.toUpperCase()?2:0;(!h||X==1&&$e||T==0&&X!=0)&&(t[u]==m||i[u]==m&&(H=!0)?l[u++]=h:l.length&&(z=!1)),T=X,h+=y(m)}return u==c&&l[0]==0&&z?this.result(-100+(H?-200:0),l,e):w==c&&V==0?[-200-e.length,0,K]:r>-1?[-700-e.length,r,r+this.pattern.length]:w==c?[-200+-700-e.length,V,K]:u==c?this.result(-100+(H?-200:0)+-700+(z?0:-1100),l,e):t.length==2?null:this.result((s[0]?-700:0)+-200+-1100,s,e)}result(e,t,i){let s=[e-i.length],o=1;for(let l of t){let r=l+(this.astral?y(b(i,l)):1);o>1&&s[o-1]==l?s[o-1]=r:(s[o++]=l,s[o++]=r)}return s}},C=Se.define({combine(n){return Fe(n,{activateOnTyping:!0,override:null,closeOnBlur:!0,maxRenderedOptions:100,defaultKeymap:!0,optionClass:()=>"",aboveCursor:!1,icons:!0,addToOptions:[]},{defaultKeymap:(e,t)=>e&&t,closeOnBlur:(e,t)=>e&&t,icons:(e,t)=>e&&t,optionClass:(e,t)=>i=>_e(e(i),t(i)),addToOptions:(e,t)=>e.concat(t)})}});function _e(n,e){return n?e?n+" "+e:n:e}function et(n){let e=n.addToOptions.slice();return n.icons&&e.push({render(t){let i=document.createElement("div");return i.classList.add("cm-completionIcon"),t.type&&i.classList.add(...t.type.split(/\s+/g).map(s=>"cm-completionIcon-"+s)),i.setAttribute("aria-hidden","true"),i},position:20}),e.push({render(t,i,s){let o=document.createElement("span");o.className="cm-completionLabel";let{label:l}=t,r=0;for(let c=1;c<s.length;){let a=s[c++],f=s[c++];a>r&&o.appendChild(document.createTextNode(l.slice(r,a)));let u=o.appendChild(document.createElement("span"));u.appendChild(document.createTextNode(l.slice(a,f))),u.className="cm-completionMatchedText",r=f}return r<l.length&&o.appendChild(document.createTextNode(l.slice(r))),o},position:50},{render(t){if(!t.detail)return null;let i=document.createElement("span");return i.className="cm-completionDetail",i.textContent=t.detail,i},position:80}),e.sort((t,i)=>t.position-i.position).map(t=>t.render)}function pe(n,e,t){if(n<=t)return{from:0,to:n};if(e<=n>>1){let s=Math.floor(e/t);return{from:s*t,to:(s+1)*t}}let i=Math.floor((n-e)/t);return{from:n-(i+1)*t,to:n-i*t}}var _=class{constructor(e,t){this.view=e,this.stateField=t,this.info=null,this.placeInfo={read:()=>this.measureInfo(),write:r=>this.positionInfo(r),key:this};let i=e.state.field(t),{options:s,selected:o}=i.open,l=e.state.facet(C);this.optionContent=et(l),this.optionClass=l.optionClass,this.range=pe(s.length,o,l.maxRenderedOptions),this.dom=document.createElement("div"),this.dom.className="cm-tooltip-autocomplete",this.dom.addEventListener("mousedown",r=>{for(let c=r.target,a;c&&c!=this.dom;c=c.parentNode)if(c.nodeName=="LI"&&(a=/-(\d+)$/.exec(c.id))&&+a[1]<s.length){Ae(e,s[+a[1]]),r.preventDefault();return}}),this.list=this.dom.appendChild(this.createListBox(s,i.id,this.range)),this.list.addEventListener("scroll",()=>{this.info&&this.view.requestMeasure(this.placeInfo)})}mount(){this.updateSel()}update(e){e.state.field(this.stateField)!=e.startState.field(this.stateField)&&this.updateSel()}positioned(){this.info&&this.view.requestMeasure(this.placeInfo)}updateSel(){let e=this.view.state.field(this.stateField),t=e.open;if((t.selected<this.range.from||t.selected>=this.range.to)&&(this.range=pe(t.options.length,t.selected,this.view.state.facet(C).maxRenderedOptions),this.list.remove(),this.list=this.dom.appendChild(this.createListBox(t.options,e.id,this.range)),this.list.addEventListener("scroll",()=>{this.info&&this.view.requestMeasure(this.placeInfo)})),this.updateSelectedOption(t.selected)){this.info&&(this.info.remove(),this.info=null);let{completion:i}=t.options[t.selected],{info:s}=i;if(!s)return;let o=typeof s=="string"?document.createTextNode(s):s(i);if(!o)return;"then"in o?o.then(l=>{l&&this.view.state.field(this.stateField,!1)==e&&this.addInfoPane(l)}).catch(l=>J(this.view.state,l,"completion info")):this.addInfoPane(o)}}addInfoPane(e){let t=this.info=document.createElement("div");t.className="cm-tooltip cm-completionInfo",t.appendChild(e),this.dom.appendChild(t),this.view.requestMeasure(this.placeInfo)}updateSelectedOption(e){let t=null;for(let i=this.list.firstChild,s=this.range.from;i;i=i.nextSibling,s++)s==e?i.hasAttribute("aria-selected")||(i.setAttribute("aria-selected","true"),t=i):i.hasAttribute("aria-selected")&&i.removeAttribute("aria-selected");return t&&nt(this.list,t),t}measureInfo(){let e=this.dom.querySelector("[aria-selected]");if(!e||!this.info)return null;let t=this.dom.getBoundingClientRect(),i=this.info.getBoundingClientRect(),s=e.getBoundingClientRect();if(s.top>Math.min(innerHeight,t.bottom)-10||s.bottom<Math.max(0,t.top)+10)return null;let o=Math.max(0,Math.min(s.top,innerHeight-i.height))-t.top,l=this.view.textDirection==He.RTL,r=t.left,c=innerWidth-t.right;return l&&r<Math.min(i.width,c)?l=!1:!l&&c<Math.min(i.width,r)&&(l=!0),{top:o,left:l}}positionInfo(e){this.info&&(this.info.style.top=(e?e.top:-1e6)+"px",e&&(this.info.classList.toggle("cm-completionInfo-left",e.left),this.info.classList.toggle("cm-completionInfo-right",!e.left)))}createListBox(e,t,i){let s=document.createElement("ul");s.id=t,s.setAttribute("role","listbox"),s.setAttribute("aria-expanded","true"),s.setAttribute("aria-label",this.view.state.phrase("Completions"));for(let o=i.from;o<i.to;o++){let{completion:l,match:r}=e[o],c=s.appendChild(document.createElement("li"));c.id=t+"-"+o,c.setAttribute("role","option");let a=this.optionClass(l);a&&(c.className=a);for(let f of this.optionContent){let u=f(l,this.view.state,r);u&&c.appendChild(u)}}return i.from&&s.classList.add("cm-completionListIncompleteTop"),i.to<e.length&&s.classList.add("cm-completionListIncompleteBottom"),s}};function tt(n){return e=>new _(e,n)}function nt(n,e){let t=n.getBoundingClientRect(),i=e.getBoundingClientRect();i.top<t.top?n.scrollTop-=t.top-i.top:i.bottom>t.bottom&&(n.scrollTop+=i.bottom-t.bottom)}function de(n){return(n.boost||0)*100+(n.apply?10:0)+(n.info?5:0)+(n.type?1:0)}function it(n,e){let t=[],i=0;for(let l of n)if(l.hasResult())if(l.result.filter===!1){let r=l.result.getMatch;for(let c of l.result.options){let a=[1e9-i++];if(r)for(let f of r(c))a.push(f);t.push(new $(c,l,a))}}else{let r=new Z(e.sliceDoc(l.from,l.to)),c;for(let a of l.result.options)(c=r.match(a.label))&&(a.boost!=null&&(c[0]+=a.boost),t.push(new $(a,l,c)))}let s=[],o=null;for(let l of t.sort(rt))!o||o.label!=l.completion.label||o.detail!=l.completion.detail||o.type!=null&&l.completion.type!=null&&o.type!=l.completion.type||o.apply!=l.completion.apply?s.push(l):de(l.completion)>de(o)&&(s[s.length-1]=l),o=l.completion;return s}var E=class{constructor(e,t,i,s,o){this.options=e,this.attrs=t,this.tooltip=i,this.timestamp=s,this.selected=o}setSelected(e,t){return e==this.selected||e>=this.options.length?this:new E(this.options,me(t,e),this.tooltip,this.timestamp,e)}static build(e,t,i,s,o){let l=it(e,t);if(!l.length)return null;let r=0;if(s&&s.selected){let c=s.options[s.selected].completion;for(let a=0;a<l.length;a++)if(l[a].completion==c){r=a;break}}return new E(l,me(i,r),{pos:e.reduce((c,a)=>a.hasResult()?Math.min(c,a.from):c,1e8),create:tt(d),above:o.aboveCursor},s?s.timestamp:Date.now(),r)}map(e){return new E(this.options,this.attrs,Object.assign(Object.assign({},this.tooltip),{pos:e.mapPos(this.tooltip.pos)}),this.timestamp,this.selected)}},A=class{constructor(e,t,i){this.active=e,this.id=t,this.open=i}static start(){return new A(lt,"cm-ac-"+Math.floor(Math.random()*2e6).toString(36),null)}update(e){let{state:t}=e,i=t.facet(C),o=(i.override||t.languageDataAt("autocomplete",x(t)).map(Ze)).map(r=>(this.active.find(a=>a.source==r)||new p(r,this.active.some(a=>a.state!=0)?1:0)).update(e,i));o.length==this.active.length&&o.every((r,c)=>r==this.active[c])&&(o=this.active);let l=e.selection||o.some(r=>r.hasResult()&&e.changes.touchesRange(r.from,r.to))||!st(o,this.active)?E.build(o,t,this.id,this.open,i):this.open&&e.docChanged?this.open.map(e.changes):this.open;!l&&o.every(r=>r.state!=1)&&o.some(r=>r.hasResult())&&(o=o.map(r=>r.hasResult()?new p(r.source,0):r));for(let r of e.effects)r.is(oe)&&(l=l&&l.setSelected(r.value,this.id));return o==this.active&&l==this.open?this:new A(o,this.id,l)}get tooltip(){return this.open?this.open.tooltip:null}get attrs(){return this.open?this.open.attrs:ot}};function st(n,e){if(n==e)return!0;for(let t=0,i=0;;){for(;t<n.length&&!n[t].hasResult;)t++;for(;i<e.length&&!e[i].hasResult;)i++;let s=t==n.length,o=i==e.length;if(s||o)return s==o;if(n[t++].result!=e[i++].result)return!1}}var ot={"aria-autocomplete":"list"};function me(n,e){return{"aria-autocomplete":"list","aria-haspopup":"listbox","aria-activedescendant":n+"-"+e,"aria-controls":n}}var lt=[];function rt(n,e){let t=e.match[0]-n.match[0];return t||n.completion.label.localeCompare(e.completion.label)}function ee(n){return n.isUserEvent("input.type")?"input":n.isUserEvent("delete.backward")?"delete":null}var p=class{constructor(e,t,i=-1){this.source=e,this.state=t,this.explicitPos=i}hasResult(){return!1}update(e,t){let i=ee(e),s=this;i?s=s.handleUserEvent(e,i,t):e.docChanged?s=s.handleChange(e):e.selection&&s.state!=0&&(s=new p(s.source,0));for(let o of e.effects)if(o.is(se))s=new p(s.source,1,o.value?x(e.state):-1);else if(o.is(W))s=new p(s.source,0);else if(o.is(Oe))for(let l of o.value)l.source==s.source&&(s=l);return s}handleUserEvent(e,t,i){return t=="delete"||!i.activateOnTyping?this.map(e.changes):new p(this.source,1)}handleChange(e){return e.changes.touchesRange(x(e.startState))?new p(this.source,0):this.map(e.changes)}map(e){return e.empty||this.explicitPos<0?this:new p(this.source,this.state,e.mapPos(this.explicitPos))}},P=class extends p{constructor(e,t,i,s,o){super(e,2,t),this.result=i,this.from=s,this.to=o}hasResult(){return!0}handleUserEvent(e,t,i){var s;let o=e.changes.mapPos(this.from),l=e.changes.mapPos(this.to,1),r=x(e.state);if((this.explicitPos<0?r<=o:r<this.from)||r>l||t=="delete"&&x(e.startState)==this.from)return new p(this.source,t=="input"&&i.activateOnTyping?1:0);let c=this.explicitPos<0?-1:e.changes.mapPos(this.explicitPos),a;return ct(this.result.validFor,e.state,o,l)?new P(this.source,c,this.result,o,l):this.result.update&&(a=this.result.update(this.result,o,l,new U(e.state,r,c>=0)))?new P(this.source,c,a,a.from,(s=a.to)!==null&&s!==void 0?s:x(e.state)):new p(this.source,1,c)}handleChange(e){return e.changes.touchesRange(this.from,this.to)?new p(this.source,0):this.map(e.changes)}map(e){return e.empty?this:new P(this.source,this.explicitPos<0?-1:e.mapPos(this.explicitPos),this.result,e.mapPos(this.from),e.mapPos(this.to,1))}};function ct(n,e,t,i){if(!n)return!1;let s=e.sliceDoc(t,i);return typeof n=="function"?n(s,t,i,e):Te(n,!0).test(s)}var se=v.define(),W=v.define(),Oe=v.define({map(n,e){return n.map(t=>t.map(e))}}),oe=v.define(),d=ie.define({create(){return A.start()},update(n,e){return n.update(e)},provide:n=>[Ve.from(n,e=>e.tooltip),M.contentAttributes.from(n,e=>e.attrs)]}),Le=75;function j(n,e="option"){return t=>{let i=t.state.field(d,!1);if(!i||!i.open||Date.now()-i.open.timestamp<Le)return!1;let s=1,o;e=="page"&&(o=ze(t,i.open.tooltip))&&(s=Math.max(2,Math.floor(o.dom.offsetHeight/o.dom.querySelector("li").offsetHeight)-1));let l=i.open.selected+s*(n?1:-1),{length:r}=i.open.options;return l<0?l=e=="page"?0:r-1:l>=r&&(l=e=="page"?r-1:0),t.dispatch({effects:oe.of(l)}),!0}}var at=n=>{let e=n.state.field(d,!1);return n.state.readOnly||!e||!e.open||Date.now()-e.open.timestamp<Le?!1:(Ae(n,e.open.options[e.open.selected]),!0)},ft=n=>n.state.field(d,!1)?(n.dispatch({effects:se.of(!0)}),!0):!1,ut=n=>{let e=n.state.field(d,!1);return!e||!e.active.some(t=>t.state!=0)?!1:(n.dispatch({effects:W.of(null)}),!0)},te=class{constructor(e,t){this.active=e,this.context=t,this.time=Date.now(),this.updates=[],this.done=void 0}},ge=50,ht=50,pt=1e3,dt=Ke.fromClass(class{constructor(n){this.view=n,this.debounceUpdate=-1,this.running=[],this.debounceAccept=-1,this.composing=0;for(let e of n.state.field(d).active)e.state==1&&this.startQuery(e)}update(n){let e=n.state.field(d);if(!n.selectionSet&&!n.docChanged&&n.startState.field(d)==e)return;let t=n.transactions.some(i=>(i.selection||i.docChanged)&&!ee(i));for(let i=0;i<this.running.length;i++){let s=this.running[i];if(t||s.updates.length+n.transactions.length>ht&&Date.now()-s.time>pt){for(let o of s.context.abortListeners)try{o()}catch(l){J(this.view.state,l)}s.context.abortListeners=null,this.running.splice(i--,1)}else s.updates.push(...n.transactions)}if(this.debounceUpdate>-1&&clearTimeout(this.debounceUpdate),this.debounceUpdate=e.active.some(i=>i.state==1&&!this.running.some(s=>s.active.source==i.source))?setTimeout(()=>this.startUpdate(),ge):-1,this.composing!=0)for(let i of n.transactions)ee(i)=="input"?this.composing=2:this.composing==2&&i.selection&&(this.composing=3)}startUpdate(){this.debounceUpdate=-1;let{state:n}=this.view,e=n.field(d);for(let t of e.active)t.state==1&&!this.running.some(i=>i.active.source==t.source)&&this.startQuery(t)}startQuery(n){let{state:e}=this.view,t=x(e),i=new U(e,t,n.explicitPos==t),s=new te(n,i);this.running.push(s),Promise.resolve(n.source(i)).then(o=>{s.context.aborted||(s.done=o||null,this.scheduleAccept())},o=>{this.view.dispatch({effects:W.of(null)}),J(this.view.state,o)})}scheduleAccept(){this.running.every(n=>n.done!==void 0)?this.accept():this.debounceAccept<0&&(this.debounceAccept=setTimeout(()=>this.accept(),ge))}accept(){var n;this.debounceAccept>-1&&clearTimeout(this.debounceAccept),this.debounceAccept=-1;let e=[],t=this.view.state.facet(C);for(let i=0;i<this.running.length;i++){let s=this.running[i];if(s.done===void 0)continue;if(this.running.splice(i--,1),s.done){let l=new P(s.active.source,s.active.explicitPos,s.done,s.done.from,(n=s.done.to)!==null&&n!==void 0?n:x(s.updates.length?s.updates[0].startState:this.view.state));for(let r of s.updates)l=l.update(r,t);if(l.hasResult()){e.push(l);continue}}let o=this.view.state.field(d).active.find(l=>l.source==s.active.source);if(o&&o.state==1)if(s.done==null){let l=new p(s.active.source,0);for(let r of s.updates)l=l.update(r,t);l.state!=1&&e.push(l)}else this.startQuery(o)}e.length&&this.view.dispatch({effects:Oe.of(e)})}},{eventHandlers:{blur(){let n=this.view.state.field(d,!1);n&&n.tooltip&&this.view.state.facet(C).closeOnBlur&&this.view.dispatch({effects:W.of(null)})},compositionstart(){this.composing=1},compositionend(){this.composing==3&&setTimeout(()=>this.view.dispatch({effects:se.of(!1)}),20),this.composing=0}}}),Re=M.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:"monospace",whiteSpace:"nowrap",overflow:"hidden auto",maxWidth_fallback:"700px",maxWidth:"min(700px, 95vw)",minWidth:"250px",maxHeight:"10em",listStyle:"none",margin:0,padding:0,"& > li":{overflowX:"hidden",textOverflow:"ellipsis",cursor:"pointer",padding:"1px 3px",lineHeight:1.2}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#17c",color:"white"},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#347",color:"white"},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:'"\xB7\xB7\xB7"',opacity:.5,display:"block",textAlign:"center"},".cm-tooltip.cm-completionInfo":{position:"absolute",padding:"3px 9px",width:"max-content",maxWidth:"300px"},".cm-completionInfo.cm-completionInfo-left":{right:"100%"},".cm-completionInfo.cm-completionInfo-right":{left:"100%"},"&light .cm-snippetField":{backgroundColor:"#00000022"},"&dark .cm-snippetField":{backgroundColor:"#ffffff22"},".cm-snippetFieldPosition":{verticalAlign:"text-top",width:0,height:"1.15em",margin:"0 -0.7px -.7em",borderLeft:"1.4px dotted #888"},".cm-completionMatchedText":{textDecoration:"underline"},".cm-completionDetail":{marginLeft:"0.5em",fontStyle:"italic"},".cm-completionIcon":{fontSize:"90%",width:".8em",display:"inline-block",textAlign:"center",paddingRight:".6em",opacity:"0.6"},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:"'\u0192'"}},".cm-completionIcon-class":{"&:after":{content:"'\u25CB'"}},".cm-completionIcon-interface":{"&:after":{content:"'\u25CC'"}},".cm-completionIcon-variable":{"&:after":{content:"'\u{1D465}'"}},".cm-completionIcon-constant":{"&:after":{content:"'\u{1D436}'"}},".cm-completionIcon-type":{"&:after":{content:"'\u{1D461}'"}},".cm-completionIcon-enum":{"&:after":{content:"'\u222A'"}},".cm-completionIcon-property":{"&:after":{content:"'\u25A1'"}},".cm-completionIcon-keyword":{"&:after":{content:"'\u{1F511}\uFE0E'"}},".cm-completionIcon-namespace":{"&:after":{content:"'\u25A2'"}},".cm-completionIcon-text":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}}),ne=class{constructor(e,t,i,s){this.field=e,this.line=t,this.from=i,this.to=s}},O=class{constructor(e,t,i){this.field=e,this.from=t,this.to=i}map(e){let t=e.mapPos(this.from,-1,G.TrackDel),i=e.mapPos(this.to,1,G.TrackDel);return t==null||i==null?null:new O(this.field,t,i)}},L=class{constructor(e,t){this.lines=e,this.fieldPositions=t}instantiate(e,t){let i=[],s=[t],o=e.doc.lineAt(t),l=/^\s*/.exec(o.text)[0];for(let c of this.lines){if(i.length){let a=l,f=/^\t*/.exec(c)[0].length;for(let u=0;u<f;u++)a+=e.facet(Xe);s.push(t+a.length-f),c=a+c.slice(f)}i.push(c),t+=c.length+1}let r=this.fieldPositions.map(c=>new O(c.field,s[c.line]+c.from,s[c.line]+c.to));return{text:i,ranges:r}}static parse(e){let t=[],i=[],s=[],o;for(let l of e.split(/\r\n?|\n/)){for(;o=/[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(l);){let r=o[1]?+o[1]:null,c=o[2]||o[3]||"",a=-1;for(let f=0;f<t.length;f++)(r!=null?t[f].seq==r:c&&t[f].name==c)&&(a=f);if(a<0){let f=0;for(;f<t.length&&(r==null||t[f].seq!=null&&t[f].seq<r);)f++;t.splice(f,0,{seq:r,name:c}),a=f;for(let u of s)u.field>=a&&u.field++}s.push(new ne(a,i.length,o.index,o.index+c.length)),l=l.slice(0,o.index)+c+l.slice(o.index+o[0].length)}i.push(l)}return new L(i,s)}},mt=N.widget({widget:new class extends Qe{toDOM(){let n=document.createElement("span");return n.className="cm-snippetFieldPosition",n}ignoreEvent(){return!1}}}),gt=N.mark({class:"cm-snippetField"}),I=class{constructor(e,t){this.ranges=e,this.active=t,this.deco=N.set(e.map(i=>(i.from==i.to?mt:gt).range(i.from,i.to)))}map(e){let t=[];for(let i of this.ranges){let s=i.map(e);if(!s)return null;t.push(s)}return new I(t,this.active)}selectionInsideField(e){return e.ranges.every(t=>this.ranges.some(i=>i.field==this.active&&i.from<=t.from&&i.to>=t.to))}},k=v.define({map(n,e){return n&&n.map(e)}}),bt=v.define(),R=ie.define({create(){return null},update(n,e){for(let t of e.effects){if(t.is(k))return t.value;if(t.is(bt)&&n)return new I(n.ranges,t.value)}return n&&e.docChanged&&(n=n.map(e.changes)),n&&e.selection&&!n.selectionInsideField(e.selection)&&(n=null),n},provide:n=>M.decorations.from(n,e=>e?e.deco:N.none)});function le(n,e){return g.create(n.filter(t=>t.field==e).map(t=>g.range(t.from,t.to)))}function yt(n){let e=L.parse(n);return(t,i,s,o)=>{let{text:l,ranges:r}=e.instantiate(t.state,s),c={changes:{from:s,to:o,insert:Ne.of(l)}};if(r.length&&(c.selection=le(r,0)),r.length>1){let a=new I(r,0),f=c.effects=[k.of(a)];t.state.field(R,!1)===void 0&&f.push(v.appendConfig.of([R,It,St,Re]))}t.dispatch(t.state.update(c))}}function Me(n){return({state:e,dispatch:t})=>{let i=e.field(R,!1);if(!i||n<0&&i.active==0)return!1;let s=i.active+n,o=n>0&&!i.ranges.some(l=>l.field==s+n);return t(e.update({selection:le(i.ranges,s),effects:k.of(o?null:new I(i.ranges,s))})),!0}}var vt=({state:n,dispatch:e})=>n.field(R,!1)?(e(n.update({effects:k.of(null)})),!0):!1,wt=Me(1),xt=Me(-1),Ct=[{key:"Tab",run:wt,shift:xt},{key:"Escape",run:vt}],be=Se.define({combine(n){return n.length?n[0]:Ct}}),It=Ee.highest(Pe.compute([be],n=>n.facet(be)));function Vt(n,e){return Object.assign(Object.assign({},e),{apply:yt(n)})}var St=M.domEventHandlers({mousedown(n,e){let t=e.state.field(R,!1),i;if(!t||(i=e.posAtCoords({x:n.clientX,y:n.clientY}))==null)return!1;let s=t.ranges.find(o=>o.from<=i&&o.to>=i);return!s||s.field==t.active?!1:(e.dispatch({selection:le(t.ranges,s.field),effects:k.of(t.ranges.some(o=>o.field>s.field)?new I(t.ranges,s.field):null)}),!0)}});function Et(n){let e=n.replace(/[\\[.+*?(){|^$]/g,"\\$&");try{return new RegExp(`[\\p{Alphabetic}\\p{Number}_${e}]+`,"ug")}catch{return new RegExp(`[w${e}]`,"g")}}function ye(n,e){return new RegExp(e(n.source),n.unicode?"u":"")}var ve=Object.create(null);function Pt(n){return ve[n]||(ve[n]=new WeakMap)}function we(n,e,t,i,s){for(let o=n.iterLines(),l=0;!o.next().done;){let{value:r}=o,c;for(e.lastIndex=0;c=e.exec(r);)if(!i[c[0]]&&l+c.index!=s&&(t.push({type:"text",label:c[0]}),i[c[0]]=!0,t.length>=2e3))return;l+=r.length+1}}function Be(n,e,t,i,s){let o=n.length>=1e3,l=o&&e.get(n);if(l)return l;let r=[],c=Object.create(null);if(n.children){let a=0;for(let f of n.children){if(f.length>=1e3)for(let u of Be(f,e,t,i-a,s-a))c[u.label]||(c[u.label]=!0,r.push(u));else we(f,t,r,c,s-a);a+=f.length+1}}else we(n,t,r,c,s);return o&&r.length<2e3&&e.set(n,r),r}var Kt=n=>{let e=n.state.languageDataAt("wordChars",n.pos).join(""),t=Et(e),i=n.matchBefore(ye(t,l=>l+"$"));if(!i&&!n.explicit)return null;let s=i?i.from:n.pos,o=Be(n.state.doc,Pt(e),t,5e4,s);return{from:s,options:o,validFor:ye(t,l=>"^"+l)}},F={brackets:["(","[","{","'",'"'],before:")]}:;>"},S=v.define({map(n,e){let t=e.mapPos(n,-1,G.TrackAfter);return t??void 0}}),re=v.define({map(n,e){return e.mapPos(n)}}),ce=new class extends qe{};ce.startSide=1;ce.endSide=-1;var ke=ie.define({create(){return ae.empty},update(n,e){if(e.selection){let t=e.state.doc.lineAt(e.selection.main.head).from,i=e.startState.doc.lineAt(e.startState.selection.main.head).from;t!=e.changes.mapPos(i,-1)&&(n=ae.empty)}n=n.map(e.changes);for(let t of e.effects)t.is(S)?n=n.update({add:[ce.range(t.value,t.value+1)]}):t.is(re)&&(n=n.update({filter:i=>i!=t.value}));return n}});function zt(){return[At,ke]}var Y="()[]{}<>";function De(n){for(let e=0;e<Y.length;e+=2)if(Y.charCodeAt(e)==n)return Y.charAt(e+1);return Ie(n<128?n:n+1)}function je(n,e){return n.languageDataAt("closeBrackets",e)[0]||F}var Tt=typeof navigator=="object"&&/Android\b/.test(navigator.userAgent),At=M.inputHandler.of((n,e,t,i)=>{if((Tt?n.composing:n.compositionStarted)||n.state.readOnly)return!1;let s=n.state.selection.main;if(i.length>2||i.length==2&&y(b(i,0))==1||e!=s.from||t!=s.to)return!1;let o=Lt(n.state,i);return o?(n.dispatch(o),!0):!1}),Ot=({state:n,dispatch:e})=>{if(n.readOnly)return!1;let i=je(n,n.selection.main.head).brackets||F.brackets,s=null,o=n.changeByRange(l=>{if(l.empty){let r=Rt(n.doc,l.head);for(let c of i)if(c==r&&q(n.doc,l.head)==De(b(c,0)))return{changes:{from:l.head-c.length,to:l.head+c.length},range:g.cursor(l.head-c.length),userEvent:"delete.backward"}}return{range:s=l}});return s||e(n.update(o,{scrollIntoView:!0})),!s},Qt=[{key:"Backspace",run:Ot}];function Lt(n,e){let t=je(n,n.selection.main.head),i=t.brackets||F.brackets;for(let s of i){let o=De(b(s,0));if(e==s)return o==s?kt(n,s,i.indexOf(s+s+s)>-1):Mt(n,s,o,t.before||F.before);if(e==o&&Ue(n,n.selection.main.from))return Bt(n,s,o)}return null}function Ue(n,e){let t=!1;return n.field(ke).between(0,n.doc.length,i=>{i==e&&(t=!0)}),t}function q(n,e){let t=n.sliceString(e,e+2);return t.slice(0,y(b(t,0)))}function Rt(n,e){let t=n.sliceString(e-2,e);return y(b(t,0))==t.length?t:t.slice(1)}function Mt(n,e,t,i){let s=null,o=n.changeByRange(l=>{if(!l.empty)return{changes:[{insert:e,from:l.from},{insert:t,from:l.to}],effects:S.of(l.to+e.length),range:g.range(l.anchor+e.length,l.head+e.length)};let r=q(n.doc,l.head);return!r||/\s/.test(r)||i.indexOf(r)>-1?{changes:{insert:e+t,from:l.head},effects:S.of(l.head+e.length),range:g.cursor(l.head+e.length)}:{range:s=l}});return s?null:n.update(o,{scrollIntoView:!0,userEvent:"input.type"})}function Bt(n,e,t){let i=null,s=n.selection.ranges.map(o=>o.empty&&q(n.doc,o.head)==t?g.cursor(o.head+t.length):i=o);return i?null:n.update({selection:g.create(s,n.selection.mainIndex),scrollIntoView:!0,effects:n.selection.ranges.map(({from:o})=>re.of(o))})}function kt(n,e,t){let i=null,s=n.changeByRange(o=>{if(!o.empty)return{changes:[{insert:e,from:o.from},{insert:e,from:o.to}],effects:S.of(o.to+e.length),range:g.range(o.anchor+e.length,o.head+e.length)};let l=o.head,r=q(n.doc,l);if(r==e){if(xe(n,l))return{changes:{insert:e+e,from:l},effects:S.of(l+e.length),range:g.cursor(l+e.length)};if(Ue(n,l)){let c=t&&n.sliceDoc(l,l+e.length*3)==e+e+e;return{range:g.cursor(l+e.length*(c?3:1)),effects:re.of(l)}}}else{if(t&&n.sliceDoc(l-2*e.length,l)==e+e&&xe(n,l-2*e.length))return{changes:{insert:e+e+e+e,from:l},effects:S.of(l+e.length),range:g.cursor(l+e.length)};if(n.charCategorizer(l)(r)!=fe.Word){let c=n.sliceDoc(l-1,l);if(c!=e&&n.charCategorizer(l)(c)!=fe.Word&&!Dt(n,l,e))return{changes:{insert:e+e,from:l},effects:S.of(l+e.length),range:g.cursor(l+e.length)}}}return{range:i=o}});return i?null:n.update(s,{scrollIntoView:!0,userEvent:"input.type"})}function xe(n,e){let t=B(n).resolveInner(e+1);return t.parent&&t.from==e}function Dt(n,e,t){let i=B(n).resolveInner(e,-1);for(let s=0;s<5;s++){if(n.sliceDoc(i.from,i.from+t.length)==t)return!0;let o=i.to==e&&i.parent;if(!o)break;i=o}return!1}function Xt(n={}){return[d,C.of(n),dt,Ut,Re]}var jt=[{key:"Ctrl-Space",run:ft},{key:"Escape",run:ut},{key:"ArrowDown",run:j(!0)},{key:"ArrowUp",run:j(!1)},{key:"PageDown",run:j(!0,"page")},{key:"PageUp",run:j(!1,"page")},{key:"Enter",run:at}],Ut=Ee.highest(Pe.computeN([C],n=>n.facet(C).defaultKeymap?[jt]:[]));function Yt(n){let e=n.field(d,!1);return e&&e.active.some(t=>t.state==1)?"pending":e&&e.active.some(t=>t.state!=0)?"active":null}var Ce=new WeakMap;function Gt(n){var e;let t=(e=n.field(d,!1))===null||e===void 0?void 0:e.open;if(!t)return[];let i=Ce.get(t.options);return i||Ce.set(t.options,i=t.options.map(s=>s.completion)),i}function Jt(n){var e;let t=(e=n.field(d,!1))===null||e===void 0?void 0:e.open;return t?t.options[t.selected].completion:null}function Zt(n){var e;let t=(e=n.field(d,!1))===null||e===void 0?void 0:e.open;return t?t.selected:null}function _t(n){return oe.of(n)}export{U as CompletionContext,at as acceptCompletion,Xt as autocompletion,vt as clearSnippet,zt as closeBrackets,Qt as closeBracketsKeymap,ut as closeCompletion,Kt as completeAnyWord,Ge as completeFromList,jt as completionKeymap,Yt as completionStatus,Gt as currentCompletions,Ot as deleteBracketPair,Nt as ifIn,qt as ifNotIn,Lt as insertBracket,Je as insertCompletionText,j as moveCompletionSelection,wt as nextSnippetField,Ht as pickedCompletion,xt as prevSnippetField,Jt as selectedCompletion,Zt as selectedCompletionIndex,_t as setSelectedCompletion,yt as snippet,Vt as snippetCompletion,be as snippetKeymap,ft as startCompletion};
//# sourceMappingURL=autocomplete.mjs.map