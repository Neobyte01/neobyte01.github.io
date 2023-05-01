(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function R(){}function Ge(e,t){for(const n in t)e[n]=t[n];return e}function Ke(e){return e()}function Ie(){return Object.create(null)}function re(e){e.forEach(Ke)}function je(e){return typeof e=="function"}function V(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let pe;function Te(e,t){return pe||(pe=document.createElement("a")),pe.href=t,e===pe.href}function ct(e){return Object.keys(e).length===0}function Ze(e,...t){if(e==null)return R;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function K(e,t,n){e.$$.on_destroy.push(Ze(t,n))}function Me(e){return e==null?"":e}function ft(e,t,n){return e.set(n),t}function Y(e){return e&&je(e.destroy)?e.destroy:R}const Qe=typeof window<"u";let Ne=Qe?()=>window.performance.now():()=>Date.now(),Ve=Qe?e=>requestAnimationFrame(e):R;const ae=new Set;function et(e){ae.forEach(t=>{t.c(e)||(ae.delete(t),t.f())}),ae.size!==0&&Ve(et)}function ut(e){let t;return ae.size===0&&Ve(et),{promise:new Promise(n=>{ae.add(t={c:e,f:n})}),abort(){ae.delete(t)}}}function f(e,t){e.appendChild(t)}function O(e,t,n){e.insertBefore(t,n||null)}function z(e){e.parentNode.removeChild(e)}function dt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function L(){return C(" ")}function $e(){return C("")}function tt(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function pt(e){return Array.from(e.childNodes)}function N(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function D(e,t,n,s){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}function mt(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,s,t),r}let ue;function fe(e){ue=e}function Ee(){if(!ue)throw new Error("Function called outside component initialization");return ue}function ht(e){Ee().$$.after_update.push(e)}function gt(e){Ee().$$.on_destroy.push(e)}function bt(){const e=Ee();return(t,n,{cancelable:s=!1}={})=>{const r=e.$$.callbacks[t];if(r){const i=mt(t,n,{cancelable:s});return r.slice().forEach(a=>{a.call(e,i)}),!i.defaultPrevented}return!0}}function Pe(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(s=>s.call(this,t))}const ce=[],Re=[],he=[],De=[],nt=Promise.resolve();let we=!1;function st(){we||(we=!0,nt.then(rt))}function _t(){return st(),nt}function ke(e){he.push(e)}const ve=new Set;let me=0;function rt(){const e=ue;do{for(;me<ce.length;){const t=ce[me];me++,fe(t),vt(t.$$)}for(fe(null),ce.length=0,me=0;Re.length;)Re.pop()();for(let t=0;t<he.length;t+=1){const n=he[t];ve.has(n)||(ve.add(n),n())}he.length=0}while(ce.length);for(;De.length;)De.pop()();we=!1,ve.clear(),fe(e)}function vt(e){if(e.fragment!==null){e.update(),re(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ke)}}const ge=new Set;let ne;function xe(){ne={r:0,c:[],p:ne}}function Le(){ne.r||re(ne.c),ne=ne.p}function F(e,t){e&&e.i&&(ge.delete(e),e.i(t))}function U(e,t,n,s){if(e&&e.o){if(ge.has(e))return;ge.add(e),ne.c.push(()=>{ge.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function ot(e,t){const n={},s={},r={$$scope:1};let i=e.length;for(;i--;){const a=e[i],l=t[i];if(l){for(const o in a)o in l||(s[o]=1);for(const o in l)r[o]||(n[o]=l[o],r[o]=1);e[i]=l}else for(const o in a)r[o]=1}for(const a in s)a in n||(n[a]=void 0);return n}function it(e){return typeof e=="object"&&e!==null?e:{}}function se(e){e&&e.c()}function Z(e,t,n,s){const{fragment:r,on_mount:i,on_destroy:a,after_update:l}=e.$$;r&&r.m(t,n),s||ke(()=>{const o=i.map(Ke).filter(je);a?a.push(...o):re(o),e.$$.on_mount=[]}),l.forEach(ke)}function Q(e,t){const n=e.$$;n.fragment!==null&&(re(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function wt(e,t){e.$$.dirty[0]===-1&&(ce.push(e),st(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function oe(e,t,n,s,r,i,a,l=[-1]){const o=ue;fe(e);const c=e.$$={fragment:null,ctx:null,props:i,update:R,not_equal:r,bound:Ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:Ie(),dirty:l,skip_bound:!1,root:t.target||o.$$.root};a&&a(c.root);let d=!1;if(c.ctx=n?n(e,t.props||{},(b,w,...j)=>{const v=j.length?j[0]:w;return c.ctx&&r(c.ctx[b],c.ctx[b]=v)&&(!c.skip_bound&&c.bound[b]&&c.bound[b](v),d&&wt(e,b)),w}):[],c.update(),d=!0,re(c.before_update),c.fragment=s?s(c.ctx):!1,t.target){if(t.hydrate){const b=pt(t.target);c.fragment&&c.fragment.l(b),b.forEach(z)}else c.fragment&&c.fragment.c();t.intro&&F(e.$$.fragment),Z(e,t.target,t.anchor,t.customElement),rt()}fe(o)}class ie{$destroy(){Q(this,1),this.$destroy=R}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!ct(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const le=[];function lt(e,t){return{subscribe:_e(e,t).subscribe}}function _e(e,t=R){let n;const s=new Set;function r(l){if(V(e,l)&&(e=l,n)){const o=!le.length;for(const c of s)c[1](),le.push(c,e);if(o){for(let c=0;c<le.length;c+=2)le[c][0](le[c+1]);le.length=0}}}function i(l){r(l(e))}function a(l,o=R){const c=[l,o];return s.add(c),s.size===1&&(n=t(r)||R),l(e),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:a}}function Se(e,t,n){const s=!Array.isArray(e),r=s?[e]:e,i=t.length<2;return lt(n,a=>{let l=!1;const o=[];let c=0,d=R;const b=()=>{if(c)return;d();const j=t(s?o[0]:o,a);i?a(j):d=je(j)?j:R},w=r.map((j,v)=>Ze(j,k=>{o[v]=k,c&=~(1<<v),l&&b()},()=>{c|=1<<v}));return l=!0,b(),function(){re(w),d()}})}function He(e){return Object.prototype.toString.call(e)==="[object Date]"}function ye(e,t,n,s){if(typeof n=="number"||He(n)){const r=s-n,i=(n-t)/(e.dt||1/60),a=e.opts.stiffness*r,l=e.opts.damping*i,o=(a-l)*e.inv_mass,c=(i+o)*e.dt;return Math.abs(c)<e.opts.precision&&Math.abs(r)<e.opts.precision?s:(e.settled=!1,He(n)?new Date(n.getTime()+c):n+c)}else{if(Array.isArray(n))return n.map((r,i)=>ye(e,t[i],n[i],s[i]));if(typeof n=="object"){const r={};for(const i in n)r[i]=ye(e,t[i],n[i],s[i]);return r}else throw new Error(`Cannot spring ${typeof n} values`)}}function kt(e,t={}){const n=_e(e),{stiffness:s=.15,damping:r=.8,precision:i=.01}=t;let a,l,o,c=e,d=e,b=1,w=0,j=!1;function v(x,$={}){d=x;const m=o={};if(e==null||$.hard||k.stiffness>=1&&k.damping>=1)return j=!0,a=Ne(),c=x,n.set(e=d),Promise.resolve();if($.soft){const y=$.soft===!0?.5:+$.soft;w=1/(y*60),b=0}return l||(a=Ne(),j=!1,l=ut(y=>{if(j)return j=!1,l=null,!1;b=Math.min(b+w,1);const p={inv_mass:b,opts:k,settled:!0,dt:(y-a)*60/1e3},h=ye(p,c,e,d);return a=y,c=e,n.set(e=h),p.settled&&(l=null),!p.settled})),new Promise(y=>{l.promise.then(()=>{m===o&&y()})})}const k={set:v,update:(x,$)=>v(x(d,e),$),subscribe:n.subscribe,stiffness:s,damping:r,precision:i};return k}function yt(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,s,r,i,a=[],l="",o=e.split("/");for(o[0]||o.shift();r=o.shift();)n=r[0],n==="*"?(a.push("wild"),l+="/(.*)"):n===":"?(s=r.indexOf("?",1),i=r.indexOf(".",1),a.push(r.substring(1,~s?s:~i?i:r.length)),l+=!!~s&&!~i?"(?:/([^/]+?))?":"/([^/]+?)",~i&&(l+=(~s?"?":"")+"\\"+r.substring(i))):l+="/"+r;return{keys:a,pattern:new RegExp("^"+l+(t?"(?=$|/)":"/?$"),"i")}}function jt(e){let t,n,s;const r=[e[2]];var i=e[0];function a(l){let o={};for(let c=0;c<r.length;c+=1)o=Ge(o,r[c]);return{props:o}}return i&&(t=new i(a()),t.$on("routeEvent",e[7])),{c(){t&&se(t.$$.fragment),n=$e()},m(l,o){t&&Z(t,l,o),O(l,n,o),s=!0},p(l,o){const c=o&4?ot(r,[it(l[2])]):{};if(i!==(i=l[0])){if(t){xe();const d=t;U(d.$$.fragment,1,0,()=>{Q(d,1)}),Le()}i?(t=new i(a()),t.$on("routeEvent",l[7]),se(t.$$.fragment),F(t.$$.fragment,1),Z(t,n.parentNode,n)):t=null}else i&&t.$set(c)},i(l){s||(t&&F(t.$$.fragment,l),s=!0)},o(l){t&&U(t.$$.fragment,l),s=!1},d(l){l&&z(n),t&&Q(t,l)}}}function $t(e){let t,n,s;const r=[{params:e[1]},e[2]];var i=e[0];function a(l){let o={};for(let c=0;c<r.length;c+=1)o=Ge(o,r[c]);return{props:o}}return i&&(t=new i(a()),t.$on("routeEvent",e[6])),{c(){t&&se(t.$$.fragment),n=$e()},m(l,o){t&&Z(t,l,o),O(l,n,o),s=!0},p(l,o){const c=o&6?ot(r,[o&2&&{params:l[1]},o&4&&it(l[2])]):{};if(i!==(i=l[0])){if(t){xe();const d=t;U(d.$$.fragment,1,0,()=>{Q(d,1)}),Le()}i?(t=new i(a()),t.$on("routeEvent",l[6]),se(t.$$.fragment),F(t.$$.fragment,1),Z(t,n.parentNode,n)):t=null}else i&&t.$set(c)},i(l){s||(t&&F(t.$$.fragment,l),s=!0)},o(l){t&&U(t.$$.fragment,l),s=!1},d(l){l&&z(n),t&&Q(t,l)}}}function Et(e){let t,n,s,r;const i=[$t,jt],a=[];function l(o,c){return o[1]?0:1}return t=l(e),n=a[t]=i[t](e),{c(){n.c(),s=$e()},m(o,c){a[t].m(o,c),O(o,s,c),r=!0},p(o,[c]){let d=t;t=l(o),t===d?a[t].p(o,c):(xe(),U(a[d],1,1,()=>{a[d]=null}),Le(),n=a[t],n?n.p(o,c):(n=a[t]=i[t](o),n.c()),F(n,1),n.m(s.parentNode,s))},i(o){r||(F(n),r=!0)},o(o){U(n),r=!1},d(o){a[t].d(o),o&&z(s)}}}function We(){const e=window.location.href.indexOf("#/");let t=e>-1?window.location.href.substr(e+1):"/";const n=t.indexOf("?");let s="";return n>-1&&(s=t.substr(n+1),t=t.substr(0,n)),{location:t,querystring:s}}const ze=lt(null,function(t){t(We());const n=()=>{t(We())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}),xt=Se(ze,e=>e.location);Se(ze,e=>e.querystring);const qe=_e(void 0);function G(e,t){if(t=Fe(t),!e||!e.tagName||e.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return Be(e,t),{update(n){n=Fe(n),Be(e,n)}}}function Lt(e){e?window.scrollTo(e.__svelte_spa_router_scrollX,e.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function Be(e,t){let n=t.href||e.getAttribute("href");if(n&&n.charAt(0)=="/")n="#"+n;else if(!n||n.length<2||n.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+n);e.setAttribute("href",n),e.addEventListener("click",s=>{s.preventDefault(),t.disabled||St(s.currentTarget.getAttribute("href"))})}function Fe(e){return e&&typeof e=="string"?{href:e}:e||{}}function St(e){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=e}function zt(e,t,n){let{routes:s={}}=t,{prefix:r=""}=t,{restoreScrollState:i=!1}=t;class a{constructor(h,_){if(!_||typeof _!="function"&&(typeof _!="object"||_._sveltesparouter!==!0))throw Error("Invalid component object");if(!h||typeof h=="string"&&(h.length<1||h.charAt(0)!="/"&&h.charAt(0)!="*")||typeof h=="object"&&!(h instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:S,keys:E}=yt(h);this.path=h,typeof _=="object"&&_._sveltesparouter===!0?(this.component=_.component,this.conditions=_.conditions||[],this.userData=_.userData,this.props=_.props||{}):(this.component=()=>Promise.resolve(_),this.conditions=[],this.props={}),this._pattern=S,this._keys=E}match(h){if(r){if(typeof r=="string")if(h.startsWith(r))h=h.substr(r.length)||"/";else return null;else if(r instanceof RegExp){const A=h.match(r);if(A&&A[0])h=h.substr(A[0].length)||"/";else return null}}const _=this._pattern.exec(h);if(_===null)return null;if(this._keys===!1)return _;const S={};let E=0;for(;E<this._keys.length;){try{S[this._keys[E]]=decodeURIComponent(_[E+1]||"")||null}catch{S[this._keys[E]]=null}E++}return S}async checkConditions(h){for(let _=0;_<this.conditions.length;_++)if(!await this.conditions[_](h))return!1;return!0}}const l=[];s instanceof Map?s.forEach((p,h)=>{l.push(new a(h,p))}):Object.keys(s).forEach(p=>{l.push(new a(p,s[p]))});let o=null,c=null,d={};const b=bt();async function w(p,h){await _t(),b(p,h)}let j=null,v=null;i&&(v=p=>{p.state&&(p.state.__svelte_spa_router_scrollY||p.state.__svelte_spa_router_scrollX)?j=p.state:j=null},window.addEventListener("popstate",v),ht(()=>{Lt(j)}));let k=null,x=null;const $=ze.subscribe(async p=>{k=p;let h=0;for(;h<l.length;){const _=l[h].match(p.location);if(!_){h++;continue}const S={route:l[h].path,location:p.location,querystring:p.querystring,userData:l[h].userData,params:_&&typeof _=="object"&&Object.keys(_).length?_:null};if(!await l[h].checkConditions(S)){n(0,o=null),x=null,w("conditionsFailed",S);return}w("routeLoading",Object.assign({},S));const E=l[h].component;if(x!=E){E.loading?(n(0,o=E.loading),x=E,n(1,c=E.loadingParams),n(2,d={}),w("routeLoaded",Object.assign({},S,{component:o,name:o.name,params:c}))):(n(0,o=null),x=null);const A=await E();if(p!=k)return;n(0,o=A&&A.default||A),x=E}_&&typeof _=="object"&&Object.keys(_).length?n(1,c=_):n(1,c=null),n(2,d=l[h].props),w("routeLoaded",Object.assign({},S,{component:o,name:o.name,params:c})).then(()=>{qe.set(c)});return}n(0,o=null),x=null,qe.set(void 0)});gt(()=>{$(),v&&window.removeEventListener("popstate",v)});function m(p){Pe.call(this,e,p)}function y(p){Pe.call(this,e,p)}return e.$$set=p=>{"routes"in p&&n(3,s=p.routes),"prefix"in p&&n(4,r=p.prefix),"restoreScrollState"in p&&n(5,i=p.restoreScrollState)},e.$$.update=()=>{e.$$.dirty&32&&(history.scrollRestoration=i?"manual":"auto")},[o,c,d,s,r,i,m,y]}class At extends ie{constructor(t){super(),oe(this,t,zt,Et,V,{routes:3,prefix:4,restoreScrollState:5})}}const Ct={en:{"read-more":"Read more","app.start":"Back to start","start.hello":"Hi! I'm","start.description.top":"A data science student at JU in Sweden and hobbyist writer on the side, with great ambitions in artificial general intelligence.","start.description.bottom":"Otherwise just a 21 year old guy that's controlled by an even smaller guy stuck in his head.","start.navigate":"Look deeper","start.profile.joke":"That's probably me","work.title":"Work","work.description":"Notable technical work produced by me alone or in collaboration with others. Some contributions to bigger projects may be included.","work.designed":"Designed with","work.built":"Built with","work.website.description":"Personal website meant to market myself to people and organizations.","work.website.article":`
            When I built this website my goal was primarily to have a place where I can show off projects I\u2019ve worked on, to future employers, but I realized quickly that it could be a lot more. Add a little information about myself and my life outside of the professional and it all of a sudden becomes a gathering place for myself, a place where I can market myself to both people and organizations.
            <br></br>
            When it came to starting the project I began with designing the website in the design program Figma, a popular tool for creating interactable prototypes and wireframes for webbsites, apps and the like. Using a design program let me easily experiment with different layouts, texts, fonts and more.
            <br></br>
            With a designprototype I could start building the website for real, something I decided to do with the Javascript framework Svelte which is an absolute pleasure to work in, with its simple syntax and support for reusable components. A perfect choice for a smaller and not that complex website such as this.
            <br></br>
            I went from design to code and back again in iterations in order to build an experience I could be proud of. When I was happy with it I used Github pages to host the website and One.com to get the domain I wanted.
            <br></br>
            It was a really fun project that let me do much more of what I enjoy than just programming software, and something that I will continue to develop and update over time.
        `,"nav.cv":"Resum\xE9","nav.about":"About","nav.hobbies":"Hobbies","nav.social":"Social media","nav.contact":"Contact"},sv:{"read-more":"L\xE4s mer","app.start":"Tillbaka till start","start.hello":"Hej! Jag heter","start.description.top":"En datavetenskapsstudent hos J\xF6nk\xF6ping University, och hobbyf\xF6rfattare vid sidan om, med stora ambitioner inom artificiell generell intelligens.","start.description.bottom":"Annars bara en 21 \xE5r gammal kille som \xE4r kontrollerad av en \xE4nnu mindre kille i hans huvud.","start.navigate":"Kika djupare","start.profile.joke":"Det \xE4r troligen jag","work.title":"Arbete","work.description":"S\xE4rskilda tekniska arbeten producerad av mig sj\xE4lv eller i samarbete med andra. Bidrag till st\xF6rre projekt kan \xE4ven inkluderas.","work.designed":"Designat med","work.built":"Byggt med","work.website.description":"Personlig webbsida med syftet att markandsf\xF6ra mig sj\xE4lv till m\xE4nniskor och organisationer.","work.website.article":`
            N\xE4r jag byggde den h\xE4r webbsidan var mitt m\xE5l framf\xF6rallt att ha ett st\xE4lle d\xE4r jag kan visa upp projekt jag har jobbat p\xE5 f\xF6r framtida anst\xE4llar men jag ins\xE5g snabbt att den kunde vara mycket mer \xE4n det. L\xE4gg till lite information om mig sj\xE4lv och mitt liv utanf\xF6r det professionella och helt pl\xF6tsligt hade jag en samlingsplats f\xF6r mig sj\xE4lv, en plats f\xF6r att marknadsf\xF6ra mig sj\xE4lv till b\xE5de m\xE4nniskor och organisationer.
            <br></br>
            N\xE4r det kom till att b\xF6rja projektet startade jag med att designa webbsidan i designprogrammet Figma, ett popul\xE4rt verktyg f\xF6r att skapa interagerbara prototyper och tr\xE5dramar till webbsidor, appar och liknande. Att anv\xE4nda ett designprogram l\xE4t mig enkelt experimentera med olika layouts, texter, typsnitt och mera.
            <br></br>
            Med hj\xE4lp av en designprototyp kunde jag b\xF6rja bygga webbsidan p\xE5 riktigt, n\xE5got jag valde att g\xF6ra i Javascript-ramverket Svelte som \xE4r ett absolut n\xF6je att arbeta i med sin enkla syntax och st\xF6d f\xF6r \xE5teranv\xE4ndbara komponenter. Ett perfekt val f\xF6r en liten och inte s\xE4rskilt komplex s\xE5 som denna.
            <br></br>
            jag gick fr\xE5n design till kod och sedan tillbaka igen i iterationer s\xE5 att jag kunde bygga en upplevelse jag var n\xF6jd med. N\xE4r jag v\xE4l var det s\xE5 anv\xE4nde jag Github pages f\xF6r att hosta webbsidan och One.com f\xF6r att f\xE5 dom\xE4nen jag ville ha.
            <br></br>
            Det var ett riktigt kul projekt som l\xE4t mig g\xF6ra mycket mer jag gillar att g\xF6ra \xE4n att bara programmera mjukvara, och n\xE5got som jag forts\xE4tter att uveckla och uppdatera \xF6ver tid.
        `,"nav.cv":"Mitt cv","nav.about":"Om mig","nav.hobbies":"Hobbys","nav.social":"Sociala medier","nav.contact":"Kontakt"}},be=_e(localStorage.locale||"en"),Je=Object.entries({en:"English",sv:"Svenska"});be.subscribe(e=>localStorage.locale=e);function Ot(e,t,n){if(!t)throw new Error("no key provided to $t()");if(!e)throw new Error(`no translation for key "${t}"`);let s=Ct[e][t];if(!s)throw new Error(`no translation found for ${e}.${t}`);return Object.keys(n).map(r=>{const i=new RegExp(`{{${r}}}`,"g");s=s.replace(i,n[r])}),s}const de=Se(be,e=>(t,n={})=>Ot(e,t,n));function It(e){let t,n,s,r,i,a,l;return{c(){t=g("a"),n=g("span"),s=C(e[1]),r=L(),i=g("div"),i.innerHTML='<svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.42529 1.31287L9.98184 10.1734C10.1737 10.3721 10.1681 10.6886 9.9695 10.8804L1.10894 19.437" stroke="white" stroke-width="2"></path></svg>',u(n,"class","svelte-bhx6md"),u(i,"class","arrow"),u(t,"href",e[0]),u(t,"class","button-link svelte-bhx6md")},m(o,c){O(o,t,c),f(t,n),f(n,s),f(t,r),f(t,i),a||(l=Y(G.call(null,t)),a=!0)},p(o,[c]){c&2&&N(s,o[1]),c&1&&u(t,"href",o[0])},i:R,o:R,d(o){o&&z(t),a=!1,l()}}}function Tt(e,t,n){let{dest:s}=t,{text:r}=t;return e.$$set=i=>{"dest"in i&&n(0,s=i.dest),"text"in i&&n(1,r=i.text)},[s,r]}class at extends ie{constructor(t){super(),oe(this,t,Tt,It,V,{dest:0,text:1})}}function Mt(e){let t,n,s,r,i=e[0]("start.hello")+"",a,l,o,c,d,b,w=e[0]("start.description.top")+"",j,v,k,x=e[0]("start.description.bottom")+"",$,m,y,p,h,_,S,E,A,W,I,P=e[0]("start.profile.joke")+"",ee,H;return p=new at({props:{dest:"/navigation",text:e[0]("start.navigate")}}),{c(){t=g("main"),n=g("div"),s=g("div"),r=g("span"),a=C(i),l=L(),o=g("h1"),o.textContent="Emil Wagman",c=L(),d=g("div"),b=g("span"),j=C(w),v=L(),k=g("span"),$=C(x),m=L(),y=g("div"),se(p.$$.fragment),h=L(),_=g("div"),_.innerHTML='<img src="./profile.jpg" alt="Profile picture of Emil Wagman" class="svelte-1uopf6c"/>',S=L(),E=g("div"),A=g("div"),A.innerHTML='<svg width="38" height="57" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.84613 56.3795C6.13903 56.6723 6.6139 56.6723 6.90679 56.3795L11.6798 51.6065C11.9727 51.3136 11.9727 50.8387 11.6798 50.5458C11.3869 50.2529 10.912 50.2529 10.6191 50.5458L6.37646 54.7885L2.13382 50.5458C1.84093 50.2529 1.36606 50.2529 1.07316 50.5458C0.780271 50.8387 0.780271 51.3136 1.07316 51.6065L5.84613 56.3795ZM7.12646 55.8491C7.12646 46.4078 9.42116 34.1475 14.4482 23.682C19.4796 13.2076 27.1771 4.66555 37.9147 2.37745L37.6021 0.91039C26.219 3.33601 18.2255 12.3541 13.0961 23.0326C7.96239 33.7201 5.62646 46.2055 5.62646 55.8491L7.12646 55.8491Z" fill="white"></path></svg>',W=L(),I=g("span"),ee=C(P),u(r,"class","svelte-1uopf6c"),u(o,"class","svelte-1uopf6c"),u(s,"class","hello-text svelte-1uopf6c"),u(b,"class","description-text-1 svelte-1uopf6c"),u(k,"class","description-text-2 svelte-1uopf6c"),u(y,"class","look-further svelte-1uopf6c"),u(d,"class","description-text svelte-1uopf6c"),u(_,"id","profile-img"),u(_,"class","svelte-1uopf6c"),u(A,"id","arrow"),u(I,"class","svelte-1uopf6c"),u(E,"id","img-arrow-joke"),u(E,"class","svelte-1uopf6c"),u(n,"class","content svelte-1uopf6c"),u(t,"class","svelte-1uopf6c")},m(M,q){O(M,t,q),f(t,n),f(n,s),f(s,r),f(r,a),f(s,l),f(s,o),f(n,c),f(n,d),f(d,b),f(b,j),f(d,v),f(d,k),f(k,$),f(d,m),f(d,y),Z(p,y,null),f(n,h),f(n,_),f(n,S),f(n,E),f(E,A),f(E,W),f(E,I),f(I,ee),H=!0},p(M,[q]){(!H||q&1)&&i!==(i=M[0]("start.hello")+"")&&N(a,i),(!H||q&1)&&w!==(w=M[0]("start.description.top")+"")&&N(j,w),(!H||q&1)&&x!==(x=M[0]("start.description.bottom")+"")&&N($,x);const X={};q&1&&(X.text=M[0]("start.navigate")),p.$set(X),(!H||q&1)&&P!==(P=M[0]("start.profile.joke")+"")&&N(ee,P)},i(M){H||(F(p.$$.fragment,M),H=!0)},o(M){U(p.$$.fragment,M),H=!1},d(M){M&&z(t),Q(p)}}}function Nt(e,t,n){let s;return K(e,de,r=>n(0,s=r)),[s]}class Pt extends ie{constructor(t){super(),oe(this,t,Nt,Mt,V,{})}}function Rt(e){let t,n,s=e[0]("nav.cv")+"",r,i,a,l=e[0]("work.title")+"",o,c,d,b=e[0]("nav.about")+"",w,j,v,k=e[0]("nav.hobbies")+"",x,$,m,y=e[0]("nav.social")+"",p,h,_,S=e[0]("nav.contact")+"",E,A,W;return{c(){t=g("main"),n=g("a"),r=C(s),i=L(),a=g("a"),o=C(l),c=L(),d=g("a"),w=C(b),j=L(),v=g("a"),x=C(k),$=L(),m=g("a"),p=C(y),h=L(),_=g("a"),E=C(S),u(n,"href","/cv"),D(n,"opacity","0.5"),D(n,"transform","Translate(calc(-270px - 50%), calc(-230px - 50%)) Rotate(-1.3deg)"),u(n,"class","svelte-8izlcc"),u(a,"href","/work"),D(a,"transform","Translate(calc(260px - 50%), calc(-200px - 50%)) Rotate(1.75deg)"),u(a,"class","svelte-8izlcc"),u(d,"href","/about"),D(d,"opacity","0.5"),D(d,"transform","Translate(calc(0px - 50%), calc(-60px - 50%))"),u(d,"class","svelte-8izlcc"),u(v,"href","/hobbies"),D(v,"opacity","0.5"),D(v,"transform","Translate(calc(290px - 50%), calc(90px - 50%)) Rotate(-0.8deg)"),u(v,"class","svelte-8izlcc"),u(m,"href","/social"),D(m,"opacity","0.5"),D(m,"transform","Translate(calc(10px - 50%), calc(230px - 50%)) Rotate(0.1deg)"),u(m,"class","svelte-8izlcc"),u(_,"href","/contact"),D(_,"opacity","0.5"),D(_,"transform","Translate(calc(-325px - 50%), calc(60px - 50%)) Rotate(-1.6deg)"),u(_,"class","svelte-8izlcc"),u(t,"class","svelte-8izlcc")},m(I,P){O(I,t,P),f(t,n),f(n,r),f(t,i),f(t,a),f(a,o),f(t,c),f(t,d),f(d,w),f(t,j),f(t,v),f(v,x),f(t,$),f(t,m),f(m,p),f(t,h),f(t,_),f(_,E),A||(W=[Y(G.call(null,n)),Y(G.call(null,a)),Y(G.call(null,d)),Y(G.call(null,v)),Y(G.call(null,m)),Y(G.call(null,_))],A=!0)},p(I,[P]){P&1&&s!==(s=I[0]("nav.cv")+"")&&N(r,s),P&1&&l!==(l=I[0]("work.title")+"")&&N(o,l),P&1&&b!==(b=I[0]("nav.about")+"")&&N(w,b),P&1&&k!==(k=I[0]("nav.hobbies")+"")&&N(x,k),P&1&&y!==(y=I[0]("nav.social")+"")&&N(p,y),P&1&&S!==(S=I[0]("nav.contact")+"")&&N(E,S)},i:R,o:R,d(I){I&&z(t),A=!1,re(W)}}}function Dt(e,t,n){let s;return K(e,de,r=>n(0,s=r)),[s]}class Ht extends ie{constructor(t){super(),oe(this,t,Dt,Rt,V,{})}}function Wt(e){let t,n,s=e[0]("work.title")+"",r,i,a,l=e[0]("work.description")+"",o,c,d,b,w,j,v,k,x,$,m=e[0]("work.website.description")+"",y,p,h,_,S=e[0]("work.designed")+"",E,A,W,I,P,ee,H=e[0]("work.built")+"",M,q,X,Ae,Ce,te,J;return te=new at({props:{dest:"/work/website",text:e[0]("read-more")}}),{c(){t=g("div"),n=g("h2"),r=C(s),i=L(),a=g("p"),o=C(l),c=L(),d=g("div"),b=g("div"),w=g("div"),w.innerHTML=`<img src="./website/image_2.png" style="transform: translate(-10px, 0px) rotate(-1deg);" class="svelte-m0zpo"/> 
            <img src="./website/image_1.png" style="transform: translate(5px, 0px) rotate(0.5deg);" class="svelte-m0zpo"/>`,j=L(),v=g("div"),k=g("h3"),k.textContent="EmilWagman.com",x=L(),$=g("p"),y=C(m),p=L(),h=g("div"),_=g("span"),E=C(S),A=L(),W=g("img"),P=L(),ee=g("span"),M=C(H),q=L(),X=g("img"),Ce=L(),se(te.$$.fragment),u(n,"class","svelte-m0zpo"),u(a,"class","svelte-m0zpo"),u(t,"class","header svelte-m0zpo"),u(w,"class","image-stack svelte-m0zpo"),u(k,"class","svelte-m0zpo"),u($,"class","svelte-m0zpo"),Te(W.src,I="./figma.png")||u(W,"src",I),u(W,"class","svelte-m0zpo"),Te(X.src,Ae="./svelte.png")||u(X,"src",Ae),u(X,"class","svelte-m0zpo"),u(h,"class","tools svelte-m0zpo"),u(v,"class","work-info svelte-m0zpo"),u(b,"class","work svelte-m0zpo"),u(d,"class","content svelte-m0zpo")},m(T,B){O(T,t,B),f(t,n),f(n,r),f(t,i),f(t,a),f(a,o),O(T,c,B),O(T,d,B),f(d,b),f(b,w),f(b,j),f(b,v),f(v,k),f(v,x),f(v,$),f($,y),f(v,p),f(v,h),f(h,_),f(_,E),f(h,A),f(h,W),f(h,P),f(h,ee),f(ee,M),f(h,q),f(h,X),f(v,Ce),Z(te,v,null),J=!0},p(T,[B]){(!J||B&1)&&s!==(s=T[0]("work.title")+"")&&N(r,s),(!J||B&1)&&l!==(l=T[0]("work.description")+"")&&N(o,l),(!J||B&1)&&m!==(m=T[0]("work.website.description")+"")&&N(y,m),(!J||B&1)&&S!==(S=T[0]("work.designed")+"")&&N(E,S),(!J||B&1)&&H!==(H=T[0]("work.built")+"")&&N(M,H);const Oe={};B&1&&(Oe.text=T[0]("read-more")),te.$set(Oe)},i(T){J||(F(te.$$.fragment,T),J=!0)},o(T){U(te.$$.fragment,T),J=!1},d(T){T&&z(t),T&&z(c),T&&z(d),Q(te)}}}function qt(e,t,n){let s;return K(e,de,r=>n(0,s=r)),[s]}class Bt extends ie{constructor(t){super(),oe(this,t,qt,Wt,V,{})}}function Ft(e){let t,n,s,r,i,a,l=e[0]("work.website.article")+"",o,c,d,b;return{c(){t=g("div"),n=g("h2"),n.textContent="EmilWagman.com",s=L(),r=g("div"),r.innerHTML=`<img src="./website/image_2.png" style="transform: rotate(-1deg);" class="svelte-hs234l"/> 
        <img src="./website/image_1.png" style="transform: rotate(0.5deg);" class="svelte-hs234l"/>`,i=L(),a=g("p"),o=L(),c=g("br"),d=L(),b=g("a"),b.innerHTML=`<img src="./github.png" class="svelte-hs234l"/>     
        <span>Github repository</span>`,u(n,"class","svelte-hs234l"),u(r,"class","images svelte-hs234l"),u(a,"class","svelte-hs234l"),u(b,"class","github svelte-hs234l"),u(b,"href","https://github.com/Neobyte01/neobyte01.github.io"),u(b,"target","_blank"),u(t,"class","content svelte-hs234l")},m(w,j){O(w,t,j),f(t,n),f(t,s),f(t,r),f(t,i),f(t,a),a.innerHTML=l,f(t,o),f(t,c),f(t,d),f(t,b)},p(w,[j]){j&1&&l!==(l=w[0]("work.website.article")+"")&&(a.innerHTML=l)},i:R,o:R,d(w){w&&z(t)}}}function Jt(e,t,n){let s;return K(e,de,r=>n(0,s=r)),[s]}class Ut extends ie{constructor(t){super(),oe(this,t,Jt,Ft,V,{})}}function Ue(e,t,n){const s=e.slice();return s[7]=t[n][0],s[8]=t[n][1],s}function Xe(e){let t,n=e[2]("app.start")+"",s,r,i;return{c(){t=g("a"),s=C(n),u(t,"href","/"),u(t,"id","back-to-start"),u(t,"class","svelte-1o8tbfx")},m(a,l){O(a,t,l),f(t,s),r||(i=Y(G.call(null,t)),r=!0)},p(a,l){l&4&&n!==(n=a[2]("app.start")+"")&&N(s,n)},d(a){a&&z(t),r=!1,i()}}}function Ye(e){let t,n=e[8]+"",s,r,i,a;function l(){return e[6](e[7])}return{c(){t=g("span"),s=C(n),u(t,"class",r=Me(e[3]==e[7]?"active-lang":"inactive-lang")+" svelte-1o8tbfx")},m(o,c){O(o,t,c),f(t,s),i||(a=tt(t,"click",l),i=!0)},p(o,c){e=o,c&8&&r!==(r=Me(e[3]==e[7]?"active-lang":"inactive-lang")+" svelte-1o8tbfx")&&u(t,"class",r)},d(o){o&&z(t),i=!1,a()}}}function Xt(e){let t,n,s,r,i,a,l,o,c,d,b,w,j,v,k=e[1]!="/"&&Xe(e),x=Je,$=[];for(let m=0;m<x.length;m+=1)$[m]=Ye(Ue(e,x,m));return b=new At({props:{routes:e[4]}}),{c(){t=g("link"),n=g("link"),s=g("link"),r=L(),i=g("div"),a=L(),k&&k.c(),l=L(),o=g("div");for(let m=0;m<$.length;m+=1)$[m].c();c=L(),d=g("main"),se(b.$$.fragment),u(t,"rel","preconnect"),u(t,"href","https://fonts.googleapis.com"),u(n,"rel","preconnect"),u(n,"href","https://fonts.gstatic.com"),u(n,"crossorigin",""),u(s,"href","https://fonts.googleapis.com/css2?family=Alice&family=Roboto&display=swap"),u(s,"rel","stylesheet"),u(i,"id","cursor"),D(i,"top",e[0].y+"px"),D(i,"left",e[0].x+"px"),u(i,"class","svelte-1o8tbfx"),u(o,"id","lang-select"),u(o,"class","svelte-1o8tbfx")},m(m,y){f(document.head,t),f(document.head,n),f(document.head,s),O(m,r,y),O(m,i,y),O(m,a,y),k&&k.m(m,y),O(m,l,y),O(m,o,y);for(let p=0;p<$.length;p+=1)$[p].m(o,null);O(m,c,y),O(m,d,y),Z(b,d,null),w=!0,j||(v=tt(d,"mousemove",Yt),j=!0)},p(m,[y]){if((!w||y&1)&&D(i,"top",m[0].y+"px"),(!w||y&1)&&D(i,"left",m[0].x+"px"),m[1]!="/"?k?k.p(m,y):(k=Xe(m),k.c(),k.m(l.parentNode,l)):k&&(k.d(1),k=null),y&8){x=Je;let p;for(p=0;p<x.length;p+=1){const h=Ue(m,x,p);$[p]?$[p].p(h,y):($[p]=Ye(h),$[p].c(),$[p].m(o,null))}for(;p<$.length;p+=1)$[p].d(1);$.length=x.length}},i(m){w||(F(b.$$.fragment,m),w=!0)},o(m){U(b.$$.fragment,m),w=!1},d(m){z(t),z(n),z(s),m&&z(r),m&&z(i),m&&z(a),k&&k.d(m),m&&z(l),m&&z(o),dt($,m),m&&z(c),m&&z(d),Q(b),j=!1,v()}}}function Yt(e){}function Gt(e,t,n){let s,r,i,a;K(e,xt,d=>n(1,r=d)),K(e,de,d=>n(2,i=d)),K(e,be,d=>n(3,a=d));const l={"/":Pt,"/navigation":Ht,"/work":Bt,"/work/website":Ut};let o=kt({x:-100,y:-100});return K(e,o,d=>n(0,s=d)),[s,r,i,a,l,o,d=>ft(be,a=d,a)]}class Kt extends ie{constructor(t){super(),oe(this,t,Gt,Xt,V,{})}}new Kt({target:document.getElementById("app")});
