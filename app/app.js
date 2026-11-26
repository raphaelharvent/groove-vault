(function(){const o=(g,n=document)=>n.querySelector(g),F=(g,n=document)=>[...n.querySelectorAll(g)],A=["profile","stats","news","settings"],y=window.matchMedia("(max-width: 860px)"),q=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,D=()=>window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0;document.documentElement.classList.toggle("is-standalone",D());const e=o(".nav"),T=new Map,f=g=>{g&&!T.has(g)&&T.set(g,[g.parentNode,g.nextSibling])},N=document.createElement("button");N.className="nav-btn m-more",N.innerHTML='<svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg><span>Plus</span><i class="hidden"></i>';const P=document.createElement("div");P.className="m-sheet",P.innerHTML='<div class="m-sheet-backdrop"></div><div class="m-sheet-panel"><div class="m-sheet-grid"></div></div>',document.body.appendChild(P);const c=o(".m-sheet-grid",P),L=o(".m-sheet-panel",P),k=()=>A.map(g=>o(`.nav-btn[data-view="${g}"]`)).filter(Boolean),R=g=>P.classList.toggle("open",g),j={feed:"Actu"},x=(g,n)=>{const M=o(`.nav-btn[data-view="${g}"] span`);M&&(M.dataset.full||(M.dataset.full=M.textContent),M.textContent=n?j[g]:M.dataset.full)};function _(){Object.keys(j).forEach(g=>x(g,!0));for(const g of k())f(g),c.appendChild(g);for(const g of[o("#side-profile"),o(".side-value")])f(g),g&&L.appendChild(g);e.appendChild(N)}function h(){Object.keys(j).forEach(g=>x(g,!1)),R(!1),N.remove();for(const[g,[n,M]]of[...T.entries()].reverse())n.insertBefore(g,M&&M.parentNode===n?M:null);T.clear()}const v=()=>y.matches?_():h();v(),y.addEventListener("change",v),N.addEventListener("click",()=>R(!P.classList.contains("open"))),P.addEventListener("click",g=>{(g.target.closest(".m-sheet-backdrop")||g.target.closest(".nav-btn")||g.target.closest("[data-goto]"))&&R(!1)});const u=()=>{N.classList.toggle("active",k().some(n=>n.classList.contains("active")));const g=["#nav-requests","#nav-news"].some(n=>{const M=o(n);return M&&!M.classList.contains("hidden")});o("i",N).classList.toggle("hidden",!g)};new MutationObserver(u).observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["class"]});let C=null;window.addEventListener("beforeinstallprompt",g=>{g.preventDefault(),C=g,H()}),window.addEventListener("appinstalled",()=>{C=null,z()});const E='<svg viewBox="0 0 24 24"><path d="M12 15V3M7.5 7.5 12 3l4.5 4.5"/><path d="M8 11H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-2"/></svg>',G='<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8.5v7M8.5 12h7"/></svg>';function W(){const g=document.createElement("div");g.className="m-guide";const n=q?`<li><span>Touche ${E} <b>Partager</b> en bas de Safari (ou dans le menu <b>\u22EF</b>)</span></li>
         <li><span>Choisis ${G} <b>Sur l'\xE9cran d'accueil</b>, puis <b>Ajouter</b></span></li>`:`<li><span>Ouvre le menu du navigateur <b>\u22EE</b></span></li>
         <li><span>Choisis <b>Installer l'application</b> ou <b>Ajouter \xE0 l'\xE9cran d'accueil</b></span></li>`;g.innerHTML=`<div class="m-guide-backdrop"></div>
      <div class="m-guide-card">
        <h2>Installer Groove Vault</h2>
        <ol>${n}</ol>
        <p class="muted small">Groove Vault aura son ic\xF4ne et s'ouvrira en plein \xE9cran, comme une appli.</p>
        <button class="btn primary" type="button">J'ai compris</button>
        ${q?'<span class="m-guide-arrow">\u2193</span>':""}
      </div>`,g.addEventListener("click",M=>{(M.target.closest(".btn")||M.target.closest(".m-guide-backdrop"))&&g.remove()}),document.body.appendChild(g)}async function w(){if(C){C.prompt();const{outcome:g}=await C.userChoice.catch(()=>({}));C=null,g==="accepted"&&z();return}W()}window.GVInstall=w;let $=null;function H(){if(D()||$||localStorage.getItem("gv-install-hidden"))return;$=document.createElement("div"),$.className="m-install",$.innerHTML=`<img src="icons/apple-touch-icon.png" alt="">
      <div><b>Installe l'appli</b>Groove Vault sur ton \xE9cran d'accueil, en plein \xE9cran.</div>
      <button class="btn primary small" type="button">Installer</button>
      <button class="m-install-x" type="button" title="Masquer">\u2715</button>`,$.querySelector(".btn").addEventListener("click",w),$.querySelector(".m-install-x").addEventListener("click",()=>{localStorage.setItem("gv-install-hidden","1"),z()});const g=o("#view-collection .view-head");g&&g.after($)}function z(){$&&($.remove(),$=null)}y.matches&&!D()&&H(),location.hash==="#installer"&&!D()&&setTimeout(w,600),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("sw.js").then(g=>{g.addEventListener("updatefound",()=>{const n=g.installing;n&&n.addEventListener("statechange",()=>{n.state==="activated"&&navigator.serviceWorker.controller&&document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&location.reload()},{once:!0})})}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&g.update().catch(()=>{})})}).catch(()=>{})})})(),(function(){const o=(c,L=document)=>L.querySelector(c);if(!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia))return;const F=["ean_13","ean_8","upc_a","upc_e","code_128"];let A=null;function y(c){return new Promise((L,k)=>{const R=document.createElement("script");R.src=c,R.onload=L,R.onerror=()=>k(new Error("Lecteur de codes-barres indisponible (connexion ?)")),document.head.appendChild(R)})}function q(){return A||(A=(async()=>{if("BarcodeDetector"in window)try{const c=await window.BarcodeDetector.getSupportedFormats();if(c.includes("ean_13"))return new window.BarcodeDetector({formats:F.filter(L=>c.includes(L))})}catch{}return window.GVZXingDetector||await y("scanner.js"),new window.GVZXingDetector({formats:F})})().catch(c=>{throw A=null,c}))}function D(c,L){const k=String(c||"").replace(/\D/g,"");if(L==="code_128")return k.length>=8?k:null;if(![8,12,13].includes(k.length)&&!(L==="upc_e"&&k.length===8))return null;if(L==="upc_e")return k;const R=k.split("").map(Number),j=R.pop();return(10-R.reverse().reduce((_,h,v)=>_+h*(v%2===0?3:1),0)%10)%10===j?k:null}let e=null;function T(){e&&(e.stop=!0,e.stream&&e.stream.getTracks().forEach(c=>c.stop()),e.el.remove(),e=null)}async function f(c){T();const L=document.createElement("div");L.className="scan",L.innerHTML=`
      <video class="scan-video" playsinline muted autoplay></video>
      <div class="scan-frame"><i class="scan-laser"></i></div>
      <button class="scan-close" type="button" title="Fermer">\u2715</button>
      <div class="scan-bottom">
        <p class="scan-hint">Vise le code-barres au dos de la pochette</p>
        <div class="scan-actions">
          <button class="btn ghost scan-torch hidden" type="button">\u{1F526} Lampe</button>
          <button class="btn ghost scan-manual" type="button">Saisir le code</button>
        </div>
      </div>`,document.body.appendChild(L),e={el:L,stop:!1,stream:null};const k=e,R=o(".scan-hint",L);o(".scan-close",L).addEventListener("click",T),o(".scan-manual",L).addEventListener("click",()=>{T(),c(null)});try{R.textContent="Ouverture de la cam\xE9ra\u2026";const[j,x]=await Promise.all([navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720}},audio:!1}),q()]);if(k.stop){j.getTracks().forEach(E=>E.stop());return}k.stream=j;const _=o(".scan-video",L);_.srcObject=j,await _.play().catch(()=>{}),R.textContent="Vise le code-barres au dos de la pochette";const h=j.getVideoTracks()[0];if((h&&h.getCapabilities?h.getCapabilities():{}).torch){const E=o(".scan-torch",L);E.classList.remove("hidden");let G=!1;E.addEventListener("click",()=>{G=!G,h.applyConstraints({advanced:[{torch:G}]}).catch(()=>{}),E.classList.toggle("on",G)})}let u="";const C=async()=>{if(!k.stop){if(_.readyState>=2)try{const E=await x.detect(_);for(const G of E){const W=D(G.rawValue,G.format);if(W){if(W===u){L.classList.add("found"),navigator.vibrate&&(!navigator.userActivation||navigator.userActivation.hasBeenActive)&&navigator.vibrate(60),setTimeout(()=>{T(),c(W)},250);return}u=W}}}catch{}setTimeout(C,120)}};C()}catch(j){const x=j&&(j.name==="NotAllowedError"||j.name==="SecurityError");L.classList.add("error"),R.innerHTML=x?"Acc\xE8s \xE0 la cam\xE9ra refus\xE9.<br><small>Autorise-le dans les r\xE9glages du t\xE9l\xE9phone (Safari \u2192 Cam\xE9ra), puis r\xE9essaie.</small>":`Cam\xE9ra indisponible.<br><small>${String(j&&j.message||j).replace(/</g,"&lt;")}</small>`}}const N=o("#search-form");if(!N)return;const P=document.createElement("button");P.type="button",P.className="btn ghost scan-btn",P.innerHTML='<svg viewBox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 8v8M10 8v8M13 8v8M16.5 8v8"/></svg><span>Scanner</span>',N.querySelector("button[type=submit]").before(P),P.addEventListener("click",()=>f(c=>{const L=o("#search-q"),k=o("#search-barcode");if(!c){k.checked=!0,L.value="",L.focus();return}L.value=c,k.checked=!0;const R=o("#search-format");R&&(R.value="all"),N.requestSubmit()})),window.GVScanner={open:f,close:T}})(),(function(){const o=h=>String(h??"").replace(/[&<>"']/g,v=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[v]),F=[{code:"M",label:"Mint (M)",factor:1.5},{code:"NM",label:"Near Mint (NM)",factor:1.3},{code:"VG+",label:"Very Good Plus (VG+)",factor:1},{code:"VG",label:"Very Good (VG)",factor:.6},{code:"G+",label:"Good Plus (G+)",factor:.4},{code:"G",label:"Good (G)",factor:.3},{code:"F",label:"Fair (F)",factor:.15},{code:"P",label:"Poor (P)",factor:.1}],A=[{id:"commun",label:"Commun",min:0,color:"#9ba3ad"},{id:"peu-commun",label:"Peu commun",min:25,color:"#4cc38a"},{id:"rare",label:"Rare",min:45,color:"#4ea3f5"},{id:"tres-rare",label:"Tr\xE8s rare",min:62,color:"#b884ff"},{id:"legendaire",label:"L\xE9gendaire",min:80,color:"#f5b942"}],y={id:"inconnue",label:"Non \xE9valu\xE9e",min:-1,color:"#6f6458"},q=(h,v=0,u=1)=>Math.min(u,Math.max(v,h));function D(h,v="EUR",u){if(h==null||isNaN(h))return"-";const C=u??(h>=1e3?0:2);try{return new Intl.NumberFormat("fr-FR",{style:"currency",currency:v,minimumFractionDigits:C,maximumFractionDigits:C}).format(h)}catch{return`${h.toFixed(C)} ${v}`}}const e=h=>new Intl.NumberFormat("fr-FR").format(h||0);function T(h,v){if(h.manualValue!=null&&h.manualValue!=="")return{value:+h.manualValue,currency:v,basis:"manual"};const u=h.market;if(!u)return null;const C=h.condition&&h.condition.media||"VG+";if(u.suggestions&&u.suggestions[C])return{value:u.suggestions[C].value,currency:u.suggestions[C].currency,basis:"suggestion"};if(u.lowest!=null){const E=(F.find(G=>G.code===C)||F[2]).factor;return{value:u.lowest*E,currency:u.currency||v,basis:"floor"}}return null}function f(h){const v=h.community;if(!v||!v.have&&!v.want)return{score:null,tier:y,parts:null};const u=v.have||0,C=v.want||0,E=h.market&&h.market.numForSale||0,G=h.market&&h.market.lowest!=null?h.market.lowest:0,W=1-q(Math.log10(u+1)/4.5),w=q(C/(u+1)/3),$=E===0?1:1-q(Math.log10(E+1)/2.5),H=q(Math.log10(G+1)/3),z=Math.round(100*(.35*W+.25*w+.2*$+.2*H));let g=A[0];for(const n of A)z>=n.min&&(g=n);return{score:z,tier:g,parts:{scarcity:W,demand:w,supply:$,pricey:H}}}function N(h){let v=0;for(const u of String(h))v=v*31+u.charCodeAt(0)>>>0;return v%360}function P(h){return`<div class="gen-cover" style="--h:${N(h.artist+h.title)}">
      <span class="gen-artist">${o(h.artist)}</span>
      <span class="gen-title">${o(h.title)}</span>
    </div>`}function c(h,v){return h.coverFile&&/^data:image\/(jpeg|png|webp);base64,/.test(h.coverFile)?h.coverFile:h.coverFile&&v?v+encodeURIComponent(h.coverFile):h.coverRemote&&/^https:\/\//.test(h.coverRemote)?h.coverRemote:""}function L(h,v=40,u=""){const C=h&&h.username||"?",E=h&&h.avatar_url;return E&&/^https:\/\//.test(E)?`<span class="avatar ${u}" style="--s:${v}px"><img src="${o(E)}" alt="" draggable="false"></span>`:`<span class="avatar ${u}" style="--s:${v}px;--h:${N(C)}"><b>${o(C.slice(0,2).toUpperCase())}</b></span>`}const k=h=>h&&h.format==="cd";function R(h,v={}){const u=`GV-${String(N(h.artist+h.title)*37+1e3).slice(0,4)} ${String(h.catno||"").slice(0,12)}`.trim();return`<div class="vinyl cd ${v.cls||""}">
      <div class="vinyl-disc">
        <div class="cd-tracks"></div>
        <div class="cd-mirror"><span>${o(u.toUpperCase())}</span></div>
        <div class="cd-hub"></div>
      </div>
      <div class="cd-rainbow"></div>
      <div class="vinyl-hole cd-hole"></div>
    </div>`}function j(h,v,u={}){if(k(h))return R(h,u);const C=c(h,v),E=h.vinylColor,G=["vinyl"],W=[];E&&(G.push("colored"),E.clear&&G.push("clear"),E.effect&&G.push("fx-"+E.effect),W.push(`--v-base:${E.primary}`),W.push(`--v-sec:${E.secondary||(E.clear?"#ffffff":"#111111")}`)),h.sizeInch===7&&G.push("single"),u.cls&&G.push(u.cls);const w=N(h.artist+h.title),$=C?`style="background-image:url('${C}')"`:`style="--h:${w}" data-gen="1"`;return`<div class="${G.join(" ")}" style="${W.join(";")}">
      <div class="vinyl-disc">
        <div class="vinyl-grooves"></div>
        <div class="vinyl-label" ${$}>${C?"":`<span>${o(h.title)}</span>`}</div>
        <div class="vinyl-hole"></div>
      </div>
      ${u.noShine?"":'<div class="vinyl-shine"></div>'}
    </div>`}function x(h,v){const u=c(h,v);return u?`<img src="${u}" alt="" loading="lazy" draggable="false" data-artist="${o(h.artist)}" data-title="${o(h.title)}">`:P(h)}document.addEventListener("error",h=>{const v=h.target;if(!(v instanceof HTMLImageElement)||!v.dataset.title)return;const u=document.createElement("div");u.style.cssText="width:100%;height:100%",u.innerHTML=P({artist:v.dataset.artist,title:v.dataset.title}),v.replaceWith(u.firstElementChild)},!0);class _{constructor(){this.ctx=null,this.src=null,this.gain=null}buildBuffer(v){const C=v.sampleRate*6,E=v.createBuffer(2,C,v.sampleRate);for(let G=0;G<2;G++){const W=E.getChannelData(G);let w=0,$=0,H=0;for(let z=0;z<C;z++){H=H*.96+(Math.random()*2-1)*.04;let g=H*.25;Math.random()<35e-5&&(w=60+Math.random()*200,$=(Math.random()*.7+.15)*(Math.random()<.5?-1:1)),w>0&&(g+=$*(Math.random()*2-1)*(w/260),w--),Math.random()<2e-5&&(g+=(Math.random()<.5?-1:1)*.9),W[z]=g}}return E}start(v=.35){try{this.ctx||(this.ctx=new AudioContext,this.buffer=this.buildBuffer(this.ctx)),this.stop(!0);const u=this.ctx;u.resume();const C=u.createBufferSource();C.buffer=this.buffer,C.loop=!0;const E=u.createBiquadFilter();E.type="highpass",E.frequency.value=300;const G=u.createBiquadFilter();G.type="lowpass",G.frequency.value=7e3;const W=u.createGain();W.gain.setValueAtTime(0,u.currentTime),W.gain.linearRampToValueAtTime(v*.5,u.currentTime+.8),C.connect(E).connect(G).connect(W).connect(u.destination),C.start(0,Math.random()*5),this.src=C,this.gain=W}catch{}}stop(v=!1){if(!this.src||!this.ctx)return;const{src:u,gain:C,ctx:E}=this;if(this.src=null,v){try{u.stop()}catch{}return}C.gain.cancelScheduledValues(E.currentTime),C.gain.setValueAtTime(C.gain.value,E.currentTime),C.gain.linearRampToValueAtTime(0,E.currentTime+.6),setTimeout(()=>{try{u.stop()}catch{}},700)}}window.VL={esc:o,money:D,num:e,clamp:q,CONDITIONS:F,TIERS:A,UNKNOWN_TIER:y,estimateValue:T,computeRarity:f,vinylHTML:j,isCD:k,sleeveHTML:x,generatedCover:P,coverUrl:c,hashHue:N,avatarHTML:L,crackle:new _}})(),(function(){function q(P){const c=getComputedStyle(P).transform;if(!c||c==="none")return 0;const L=new DOMMatrix(c);return Math.atan2(L.b,L.a)*180/Math.PI}class D{constructor(c,L,k,R){this.rec=L,this.settings=R,this.rpm=L.rpm===45?45:33,this.playing=!1,this.offset=0,this.timers=[],c.innerHTML=`
        <div class="turntable">
          <div class="plinth">
            <div class="plinth-grain"></div>
            <div class="platter-well"></div>
            <div class="platter-offset">
              <div class="platter">
                <div class="platter-strobe"></div>
                <div class="platter-mat"></div>
                <div class="tt-record">${VL.vinylHTML(L,k,{noShine:!0})}</div>
              </div>
            </div>
            <div class="tt-shine"></div>
            <div class="spindle"></div>
            <div class="arm-rest"></div>
            <div class="tonearm">
              <div class="arm">
                <div class="counterweight"></div>
                <div class="rod"></div>
                <div class="headshell"><div class="cartridge"></div></div>
              </div>
              <div class="pivot"></div>
            </div>
            <div class="tt-led"></div>
            <div class="tt-brand">GROOVE&nbsp;VAULT <small>DIRECT DRIVE \xB7 QUARTZ</small></div>
            <div class="tt-speed-knob"></div>
          </div>
        </div>
        <div class="tt-controls">
          <button class="tt-btn play" data-tt="toggle"><span class="ico"></span><span class="txt">Lecture</span></button>
          <div class="seg small">
            <button data-rpm="33" class="${this.rpm===33?"active":""}">33\u2153</button>
            <button data-rpm="45" class="${this.rpm===45?"active":""}">45</button>
          </div>
          <button class="tt-btn sound ${R.crackle?"on":""}" data-tt="sound" title="Craquements">
            <svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path class="w" d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"/></svg>
          </button>
        </div>`,this.root=c,this.plinth=c.querySelector(".plinth"),this.outer=c.querySelector(".platter-offset"),this.platter=c.querySelector(".platter"),this.arm=c.querySelector(".arm"),this.btn=c.querySelector('[data-tt="toggle"]'),c.querySelector('[data-tt="toggle"]').addEventListener("click",()=>this.toggle()),c.querySelector('[data-tt="sound"]').addEventListener("click",j=>{this.settings.crackle=!this.settings.crackle,j.currentTarget.classList.toggle("on",this.settings.crackle),this.playing&&this.settings.crackle?VL.crackle.start(this.settings.crackleVolume):VL.crackle.stop(),this.onSettings&&this.onSettings({crackle:this.settings.crackle})}),c.querySelectorAll("[data-rpm]").forEach(j=>j.addEventListener("click",()=>{c.querySelectorAll("[data-rpm]").forEach(x=>x.classList.toggle("active",x===j)),this.setSpeed(+j.dataset.rpm)}))}get period(){return 60/(this.rpm===33?100/3:this.rpm)}later(c,L){this.timers.push(setTimeout(c,L))}clearTimers(){this.timers.forEach(clearTimeout),this.timers=[]}bake(){this.offset=(this.offset+q(this.platter))%360,this.outer.style.transform=`rotate(${this.offset}deg)`,this.platter.style.animation="none",this.platter.style.transition="none",this.platter.style.transform="rotate(0deg)",this.platter.offsetWidth}setArm(c,L,k="cubic-bezier(.45,.05,.3,1)"){this.arm.style.transition=`transform ${L}s ${k}`,this.arm.style.transform=`rotate(${c}deg)`}play(){if(this.playing)return;this.playing=!0,this.clearTimers(),this.root.classList.add("is-playing"),this.btn.querySelector(".txt").textContent="Stop",this.bake();const c=this.period;this.platter.style.animation=`tt-spinup ${c}s cubic-bezier(.333,0,.667,.333) 1, tt-spin ${c}s linear ${c}s infinite`,this.arm.classList.add("lifted"),this.setArm(28,1.3),this.later(()=>{this.arm.classList.remove("lifted"),this.plinth.classList.add("needle-down"),this.settings.crackle&&VL.crackle.start(this.settings.crackleVolume),this.later(()=>this.setArm(47,1200,"linear"),500)},1400)}stop(){if(!this.playing)return;this.playing=!1,this.clearTimers(),this.root.classList.remove("is-playing"),this.btn.querySelector(".txt").textContent="Lecture",this.plinth.classList.remove("needle-down"),VL.crackle.stop();const c=q(this.arm);this.setArm(c,.01),this.arm.classList.add("lifted"),this.later(()=>this.setArm(0,1.2),250),this.later(()=>this.arm.classList.remove("lifted"),1500),this.bake();const L=this.period*1.6,k=360/this.period*L/2;this.platter.style.transition=`transform ${L}s cubic-bezier(.333,.667,.667,1)`,this.platter.style.transform=`rotate(${k}deg)`}toggle(){this.playing?this.stop():this.play()}setSpeed(c){c!==this.rpm&&(this.rpm=c,this.playing&&(this.bake(),this.platter.style.animation=`tt-spin-free ${this.period}s linear infinite`))}destroy(){this.clearTimers(),VL.crackle.stop()}}const e=.42,T=P=>{const c=/^(\d+):(\d{2})$/.exec(String(P||"").trim());return c?+c[1]*60+ +c[2]:0},f=P=>`${String(Math.floor(P/60)).padStart(2,"0")}:${String(Math.floor(P%60)).padStart(2,"0")}`;class N{constructor(c,L,k){this.rec=L,this.playing=!1,this.offset=0,this.timers=[];const R=(L.tracklist||[]).map(j=>T(j.duration)||240);this.tracks=R.length?R:[240,240,240,240,240,240,240,240,240,240],this.elapsed=0,c.innerHTML=`
        <div class="turntable cdp">
          <div class="cdp-body">
            <div class="cdp-panel"></div>
            <div class="cdp-well"></div>
            <div class="platter-offset cdp-offset">
              <div class="platter cdp-platter">
                <div class="tt-record">${VL.vinylHTML(L,k)}</div>
              </div>
            </div>
            <div class="cdp-clamp"></div>
            <div class="cdp-display">
              <div class="cdp-row"><span class="cdp-lbl">TRACK</span><span class="cdp-lbl">TIME</span></div>
              <div class="cdp-row"><b class="cdp-track">--</b><b class="cdp-time">--:--</b></div>
              <div class="cdp-row small"><span class="cdp-status">STOP</span><span>${this.tracks.length} TRK \xB7 ${f(this.tracks.reduce((j,x)=>j+x,0))}</span></div>
            </div>
            <div class="cdp-keys"><i></i><i></i><i></i><i></i></div>
            <div class="tt-led"></div>
            <div class="tt-brand cdp-brand">GROOVE&nbsp;VAULT <small>COMPACT DISC PLAYER</small></div>
          </div>
        </div>
        <div class="tt-controls">
          <button class="tt-btn play" data-tt="toggle"><span class="ico"></span><span class="txt">Lecture</span></button>
          <button class="tt-btn" data-tt="next" title="Piste suivante">\u23ED</button>
        </div>`,this.root=c,this.outer=c.querySelector(".cdp-offset"),this.platter=c.querySelector(".cdp-platter"),this.btn=c.querySelector('[data-tt="toggle"]'),this.btn.addEventListener("click",()=>this.toggle()),c.querySelector('[data-tt="next"]').addEventListener("click",()=>this.next())}later(c,L){this.timers.push(setTimeout(c,L))}bake(){this.offset=(this.offset+q(this.platter))%360,this.outer.style.transform=`rotate(${this.offset}deg)`,this.platter.style.animation="none",this.platter.style.transition="none",this.platter.style.transform="rotate(0deg)",this.platter.offsetWidth}position(){let c=this.elapsed;for(let L=0;L<this.tracks.length;L++){if(c<this.tracks[L])return{track:L+1,time:c};c-=this.tracks[L]}return null}renderDisplay(c){const L=R=>this.root.querySelector(R),k=this.position();L(".cdp-status").textContent=c,L(".cdp-track").textContent=k&&c!=="STOP"?String(k.track).padStart(2,"0"):"--",L(".cdp-time").textContent=k&&c!=="STOP"?f(k.time):"--:--"}play(){if(this.playing)return;this.playing=!0,this.root.classList.add("is-playing"),this.btn.querySelector(".txt").textContent="Stop",this.bake();const c=e;this.platter.style.animation=`tt-spinup ${c*2}s cubic-bezier(.333,0,.667,.333) 1, tt-spin ${c}s linear ${c*2}s infinite`,this.renderDisplay("READ"),this.later(()=>{this.playing&&(this.tick=setInterval(()=>{if(this.elapsed++,!this.position()){this.elapsed=0,this.stop();return}this.renderDisplay("\u25B6 PLAY")},1e3),this.renderDisplay("\u25B6 PLAY"))},1200)}stop(){if(!this.playing)return;this.playing=!1,this.timers.forEach(clearTimeout),this.timers=[],clearInterval(this.tick),this.root.classList.remove("is-playing"),this.btn.querySelector(".txt").textContent="Lecture",this.elapsed=0,this.renderDisplay("STOP"),this.bake();const c=1.4,L=360/e*c/2;this.platter.style.transition=`transform ${c}s cubic-bezier(.333,.667,.667,1)`,this.platter.style.transform=`rotate(${L}deg)`}next(){const c=this.position()||{track:0};c.track>=this.tracks.length||(this.elapsed=this.tracks.slice(0,c.track).reduce((L,k)=>L+k,0),this.playing?this.renderDisplay("\u25B6 PLAY"):this.play())}toggle(){this.playing?this.stop():this.play()}setSpeed(){}destroy(){this.timers.forEach(clearTimeout),clearInterval(this.tick)}}window.Turntable=D,window.CdPlayer=N})(),(function(){const{esc:o,money:F,num:A,avatarHTML:y}=VL,q=(p,b=document)=>b.querySelector(p),D=()=>window.vault.cloud,e={cloud:{configured:!1},ready:!1,showSetup:!1,authTab:"signin",friends:null,editingName:!1,syncTimer:null,syncing:!1,lastSync:null,syncError:null,friendView:null},T=()=>!!(e.cloud.user&&e.cloud.profile),f=()=>{window.Reviews&&Reviews.onAuth(),window.Feed&&Feed.onAuth()};function N(p){if(!p)return"";const b=(Date.now()-new Date(p).getTime())/1e3;return b<60?"\xE0 l'instant":b<3600?`il y a ${Math.floor(b/60)} min`:b<86400?`il y a ${Math.floor(b/3600)} h`:b<86400*30?`il y a ${Math.floor(b/86400)} j`:"le "+new Date(p).toLocaleDateString("fr-FR")}function P(){if(!e.ready||!T())return;clearTimeout(e.syncTimer),e.syncFirstAt||(e.syncFirstAt=Date.now());const p=()=>{e.syncFirstAt=0,c()};Date.now()-e.syncFirstAt>3e4?p():e.syncTimer=setTimeout(p,2500)}async function c(){if(T()){e.syncing=!0,R();try{if(e.lastSync=await D().push(GV.state.collection,GV.summary()),e.syncError=null,window.Wishlist)try{await D().pushWishlist(Wishlist.items())}catch(p){e.syncError="Wishlist non partag\xE9e : "+GV.errMsg(p)}}catch(p){e.syncError=GV.errMsg(p)}e.syncing=!1,R(),j()}}async function L(){if(e.ready=!1,window.Wishlist&&await Wishlist.restoreIfEmpty(),GV.state.collection.length===0)try{const p=await D().restore();if(p.length){GV.state.collection=p,e.ready=!0,GV.renderAll(),GV.toast(`Collection restaur\xE9e depuis ton compte (${p.length} disques)`,"ok"),e.lastSync=new Date().toISOString();return}}catch(p){e.syncError=GV.errMsg(p)}e.ready=!0,await c()}function k(){return e.syncing?'<span class="sync on">Synchronisation\u2026</span>':e.syncError?`<span class="sync err" title="${o(e.syncError)}">Synchro impossible</span>`:e.lastSync?`<span class="sync ok">Synchronis\xE9 ${N(e.lastSync)}</span>`:'<span class="sync">En attente</span>'}function R(){const p=q("#sync-state");p&&(p.innerHTML=k())}function j(){const p=q("#side-profile");T()?p.innerHTML=`${y(e.cloud.profile,36)}
        <span class="sp-text"><b>${o(e.cloud.profile.username)}</b>${k()}</span>`:p.innerHTML=`<span class="avatar ghost" style="--s:36px"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.5 4.2-7 8-7s7 2.5 8 7"/></svg></span>
        <span class="sp-text"><b>Cr\xE9er mon profil</b><span class="sync">Partage ta collection</span></span>`}async function x(){if(T())try{e.friends=await D().friends();const p=e.friends.incoming.length,b=q("#nav-requests");b.textContent=p,b.classList.toggle("hidden",p===0)}catch{}}function _(p,b){return`<header class="view-head"><div><h1>${p}</h1><p class="subtitle">${b}</p></div></header>`}function h(){return _("Profil & amis","Connecte Groove Vault \xE0 un serveur pour cr\xE9er ton profil et d\xE9couvrir les collections de tes amis.")+`
      <div class="setup">
        <div class="card-panel">
          <h3>Mise en place (une seule fois, 5 minutes)</h3>
          <ol class="setup-steps">
            <li><b>Cr\xE9e un projet gratuit</b> sur Supabase.
              <button class="btn ghost small" data-s="open" data-url="https://supabase.com/dashboard/new">Ouvrir supabase.com \u2197</button></li>
            <li><b>Installe la base de donn\xE9es</b> : menu <i>SQL Editor</i>, nouvelle requ\xEAte, colle le script puis clique sur <i>Run</i>.
              <button class="btn ghost small" data-s="copy-schema">Copier le script</button></li>
            <li><b>Optionnel</b> : <i>Authentication \u2192 Sign In / Providers \u2192 Email</i>, d\xE9sactive \xAB Confirm email \xBB pour \xE9viter l'email de confirmation.</li>
            <li><b>R\xE9cup\xE8re les acc\xE8s</b> : <i>Project Settings \u2192 API</i>, copie la <i>Project URL</i> et la cl\xE9 <i>anon public</i>.</li>
          </ol>
        </div>
        <form class="card-panel" id="setup-form">
          <h3>Connexion au serveur</h3>
          <label>Project URL<input name="url" placeholder="https://xxxxxxxx.supabase.co" value="${o(e.cloud.url||"")}" required></label>
          <label>Cl\xE9 anon public<input name="key" placeholder="eyJhbGciOi\u2026" required></label>
          <p class="muted small">Ces informations ne sont pas secr\xE8tes : la s\xE9curit\xE9 est assur\xE9e par les r\xE8gles d'acc\xE8s du script. Tes amis devront utiliser les m\xEAmes.</p>
          <div class="form-actions"><button class="btn primary" type="submit">Connecter</button></div>
          ${e.cloud.configured?'<button type="button" class="link-btn" data-s="cancel-setup">Annuler</button>':""}
        </form>
      </div>`}function v(){const p=e.authTab==="signup";return _("Profil & amis","Cr\xE9e ton profil pour partager ta collection et voir celles de tes amis.")+`
      <div class="auth-wrap">
        <div class="auth-art"><div class="auth-disc"></div><div class="auth-disc two"></div></div>
        <form class="card-panel auth" id="auth-form">
          <div class="seg" id="auth-tabs">
            <button type="button" data-tab="signin" class="${p?"":"active"}">Connexion</button>
            <button type="button" data-tab="signup" class="${p?"active":""}">Cr\xE9er un compte</button>
          </div>
          ${p?'<label>Pseudo<input name="username" maxlength="20" placeholder="3 \xE0 20 caract\xE8res" required pattern="[A-Za-z0-9_.\\-]{3,20}"></label>':""}
          <label>Email<input name="email" type="email" required autocomplete="email"></label>
          <label>Mot de passe<input name="password" type="password" minlength="6" required autocomplete="${p?"new-password":"current-password"}"></label>
          <div class="auth-msg" id="auth-msg"></div>
          <button class="btn primary big" type="submit">${p?"Cr\xE9er mon profil":"Se connecter"}</button>
          <button type="button" class="link-btn" data-s="setup">Changer de serveur</button>
        </form>
      </div>`}function u(){const p=e.cloud.profile,b=GV.summary(),U=e.friends?e.friends.friends.length:"\u2026";return`
      <div class="profile-hero">
        <div class="hero-glow" style="--h:${VL.hashHue(p.username)}"></div>
        <button class="avatar-edit" data-s="avatar" title="Changer ma photo">
          ${y(p,116)}
          <span class="avatar-overlay"><svg viewBox="0 0 24 24"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>Changer</span>
        </button>
        <div class="profile-id">
          <div class="pseudo-row" id="pseudo-row">${C()}</div>
          <div class="muted">${o(e.cloud.user.email)} \xB7 membre depuis ${new Date(p.created_at).toLocaleDateString("fr-FR",{month:"long",year:"numeric"})}</div>
          <div class="profile-stats">
            <div><b>${A(b.count)}</b><span>disques</span></div>
            <div><b>${F(b.value,b.currency,0)}</b><span>valeur estim\xE9e</span></div>
            <div><b>${U}</b><span>amis</span></div>
            <div class="clickable" data-s="my-reviews" title="Voir mes critiques"><b>${window.Reviews?Reviews.myCount():0}</b><span>albums not\xE9s</span></div>
          </div>
        </div>
        <div class="profile-side">
          <div id="sync-state">${k()}</div>
          <button class="btn ghost small" data-s="sync-now">Synchroniser</button>
          <button class="btn ghost small" data-s="logout">Se d\xE9connecter</button>
        </div>
      </div>
      <p class="muted small privacy">Tes amis voient tes disques, leur \xE9tat et leur cote. Tes prix d'achat et tes notes restent priv\xE9s.</p>
      <div class="social-grid">
        <div class="card-panel">
          <h3>Ajouter un ami</h3>
          <div class="search-box wide">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>
            <input id="friend-search" placeholder="Rechercher un pseudo\u2026" autocomplete="off">
          </div>
          <div class="people" id="friend-results"><p class="muted small">Tape au moins 2 lettres du pseudo de ton ami.</p></div>
        </div>
        <div class="card-panel" id="requests-panel">${G()}</div>
        <div class="card-panel span-all">
          <h3>Mes amis ${e.friends?`<small>${e.friends.friends.length}</small>`:""}</h3>
          <div class="friends-grid" id="friends-grid">${W()}</div>
        </div>
      </div>`}function C(){const p=e.cloud.profile;return e.editingName?`<form id="pseudo-form" class="pseudo-form">
        <input name="username" value="${o(p.username)}" maxlength="20" required>
        <button class="btn primary small" type="submit">Enregistrer</button>
        <button class="btn ghost small" type="button" data-s="cancel-name">Annuler</button>
      </form>`:`<h1>${o(p.username)}</h1>
      <button class="icon-btn" data-s="edit-name" title="Changer de pseudo"><svg viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg></button>`}function E(p,b){return`<div class="person">${y(p,40)}<b>${o(p.username)}</b><span class="person-right">${b}</span></div>`}function G(){if(!e.friends)return'<h3>Demandes</h3><div class="loader small"><div class="loader-disc"></div></div>';const{incoming:p,outgoing:b}=e.friends;let U=`<h3>Demandes re\xE7ues ${p.length?`<small class="hot">${p.length}</small>`:""}</h3>`;return U+=p.length?`<div class="people">${p.map(K=>E(K.profile,`
          <button class="btn primary small" data-s="accept" data-id="${K.friendshipId}">Accepter</button>
          <button class="btn ghost small" data-s="decline" data-id="${K.friendshipId}">Refuser</button>`)).join("")}</div>`:'<p class="muted small">Aucune demande en attente.</p>',b.length&&(U+=`<h3 class="sub">Demandes envoy\xE9es</h3><div class="people">${b.map(K=>E(K.profile,`<span class="muted small">En attente</span><button class="btn ghost small" data-s="cancel-req" data-id="${K.friendshipId}">Annuler</button>`)).join("")}</div>`),U}function W(){return e.friends?e.friends.friends.length?e.friends.friends.map((p,b)=>{const U=p.summary;return`<div class="friend-card" style="--i:${b}" data-s="view-friend" data-uid="${p.profile.id}">
        <div class="friend-disc"></div>
        ${y(p.profile,64)}
        <div class="friend-name">${o(p.profile.username)}</div>
        <div class="friend-meta">${U?`${A(U.record_count)} disques \xB7 ${F(+U.total_value,U.currency,0)}`:"Collection pas encore partag\xE9e"}</div>
        <div class="friend-meta dim">${U?"Mise \xE0 jour "+N(U.updated_at):""}</div>
        <div class="friend-actions">
          <button class="btn primary small" data-s="view-friend" data-uid="${p.profile.id}">Voir sa collection</button>
          <button class="icon-btn" data-s="unfriend" data-id="${p.friendshipId}" title="Retirer de mes amis">\u2715</button>
        </div>
      </div>`}).join(""):`<p class="muted">Pas encore d'amis. Recherche leur pseudo ci-dessus pour leur envoyer une demande.</p>`:'<div class="loader small"><div class="loader-disc"></div></div>'}async function w(){const p=q("#profile-root");if(!e.cloud.configured||e.showSetup){p.innerHTML=h();return}if(!T()){p.innerHTML=v();return}if(p.innerHTML=u(),await x(),GV.state.view==="profile"&&T()){q("#requests-panel").innerHTML=G(),q("#friends-grid").innerHTML=W();const b=q(".profile-stats div:nth-child(3) b");b&&(b.textContent=e.friends?e.friends.friends.length:"-");const U=q(".span-all h3");U&&e.friends&&(U.innerHTML=`Mes amis <small>${e.friends.friends.length}</small>`)}}async function $(p){const b=q("#friend-root");b.innerHTML='<div class="loader"><div class="loader-disc"></div><span>Chargement de sa collection\u2026</span></div>',GV.go("friend");try{const{profile:U,collection:K,wishlist:X}=await D().friendCollection(p),Y=K&&K.records||[];e.friendView={profile:U,collection:K,records:Y,wishlist:X&&X.items||[],tab:"collection"},H()}catch(U){b.innerHTML=`<button class="btn ghost small back" data-s="back">\u2190 Mes amis</button><p class="warn">${o(GV.errMsg(U))}</p>`}}function H(){const{profile:p,collection:b,records:U,wishlist:K}=e.friendView,X=e.friendView.tab==="wishlist",Y=U.filter(de=>de.discogsId&&GV.state.collection.some(ue=>ue.discogsId===de.discogsId)).length,ie=U.reduce((de,ue)=>{const pe=GV.rarityOf(ue).score;return pe!=null&&(!de||pe>de.s)?{r:ue,s:pe}:de},null);q("#friend-root").innerHTML=`
      <button class="btn ghost small back" data-s="back">\u2190 Mes amis</button>
      <div class="friend-hero">
        ${y(p,84)}
        <div>
          <h1>${X?"Wishlist":"Collection"} de ${o(p.username)}</h1>
          <p class="subtitle">${b?`${A(U.length)} disques \xB7 ${F(+b.total_value,b.currency,0)} \xB7 mise \xE0 jour ${N(b.updated_at)}`:"Ton ami n'a pas encore partag\xE9 sa collection."}</p>
        </div>
        <div class="friend-badges">
          ${Y?`<span class="tier-pill" style="--tier:#4cc38a">${Y} disque${Y>1?"s":""} en commun</span>`:""}
          <button class="btn ghost small" data-s="friend-reviews">Ses critiques</button>
          ${ie?`<span class="tier-pill" style="--tier:${GV.rarityOf(ie.r).tier.color}">P\xE9pite : ${o(ie.r.title)}</span>`:""}
        </div>
        <div class="toolbar">
          <div class="seg" id="ff-tabs">
            <button data-s="ff-tab" data-tab="collection" class="${X?"":"active"}">Collection <small>${A(U.length)}</small></button>
            <button data-s="ff-tab" data-tab="wishlist" class="${X?"active":""}">\u2665 Wishlist <small>${A(K.length)}</small></button>
          </div>
          <div class="search-box"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg><input id="ff-text" type="search" placeholder="Rechercher\u2026"></div>
          <select id="ff-sort" class="${X?"hidden":""}">
            <option value="added">Ajout r\xE9cent</option>
            <option value="artist">Artiste A\u2192Z</option>
            <option value="value">Valeur \u2193</option>
            <option value="rarity">Raret\xE9 \u2193</option>
          </select>
        </div>
      </div>
      <div class="grid" id="friend-grid"></div>`,z()}function z(){const p=(q("#ff-text")||{}).value?.trim().toLowerCase()||"",b=q("#friend-grid");if(e.friendView.tab==="wishlist"){const X=e.friendView.wishlist.filter(Y=>!p||`${Y.artist} ${Y.title} ${Y.label} ${Y.year}`.toLowerCase().includes(p)).sort((Y,ie)=>ie.priority-Y.priority||(ie.addedAt||"").localeCompare(Y.addedAt||""));b.innerHTML=X.map((Y,ie)=>Wishlist.cardHTML(Y,ie,{foreign:!0})).join("")||`<p class="muted no-match">${e.friendView.wishlist.length?"Aucun disque.":o(e.friendView.profile.username)+" n'a encore rien mis dans sa wishlist."}</p>`;return}const U=(q("#ff-sort")||{}).value||"added",K=e.friendView.records.filter(X=>!p||`${X.artist} ${X.title} ${X.label} ${X.year}`.toLowerCase().includes(p)).sort({added:(X,Y)=>(Y.addedAt||"").localeCompare(X.addedAt||""),artist:(X,Y)=>X.artist.localeCompare(Y.artist,"fr"),value:(X,Y)=>((GV.valueOf(Y)||{}).value??-1)-((GV.valueOf(X)||{}).value??-1),rarity:(X,Y)=>(GV.rarityOf(Y).score??-1)-(GV.rarityOf(X).score??-1)}[U]);b.innerHTML=K.map((X,Y)=>GV.cardHTML(X,Y,{foreign:!0})).join("")||'<p class="muted no-match">Aucun disque.</p>'}async function g(p){const b=p.target.closest("[data-s]");if(!b)return;const U=b.dataset.s;try{switch(U){case"open":window.vault.openExternal(b.dataset.url);break;case"copy-schema":await window.vault.copySchema(),GV.toast("Script SQL copi\xE9 dans le presse-papiers","ok");break;case"setup":e.showSetup=!0,w();break;case"cancel-setup":e.showSetup=!1,w();break;case"avatar":{b.classList.add("busy");const K=await D().pickAvatar();b.classList.remove("busy"),K&&(e.cloud.profile=K,w(),j(),GV.toast("Photo de profil mise \xE0 jour","ok"));break}case"edit-name":e.editingName=!0,q("#pseudo-row").innerHTML=C(),q("#pseudo-form input").select();break;case"cancel-name":e.editingName=!1,q("#pseudo-row").innerHTML=C();break;case"logout":await D().signOut(),e.cloud.user=null,e.cloud.profile=null,e.friends=null,q("#nav-requests").classList.add("hidden"),w(),j(),GV.toast("D\xE9connect\xE9. Ta collection reste sur ce PC."),f();break;case"sync-now":await c();break;case"accept":case"decline":b.disabled=!0,await D().respond(+b.dataset.id,U==="accept"),U==="accept"&&GV.toast("Demande accept\xE9e, vous \xEAtes maintenant amis !","ok"),w();break;case"cancel-req":await D().unfriend(+b.dataset.id),w();break;case"unfriend":if(p.stopPropagation(),!b.dataset.confirm){b.dataset.confirm="1",b.classList.add("confirm"),b.title="Cliquer encore pour confirmer",setTimeout(()=>{b.isConnected&&(delete b.dataset.confirm,b.classList.remove("confirm"))},3e3);return}await D().unfriend(+b.dataset.id),GV.toast("Ami retir\xE9"),w();break;case"add-friend":{b.disabled=!0;const K=await D().request(b.dataset.uid),X={sent:"Demande envoy\xE9e",accepted:"Ami \u2713",already:"Ami \u2713",pending:"Demande envoy\xE9e"}[K];b.textContent=X,b.className="btn done small",GV.toast(K==="accepted"?"Vous \xEAtes maintenant amis !":"Demande d'ami envoy\xE9e","ok"),await x(),q("#requests-panel").innerHTML=G(),q("#friends-grid").innerHTML=W();break}case"view-friend":$(b.dataset.uid);break;case"back":GV.go("profile");break;case"my-reviews":Reviews.openUser(e.cloud.profile);break;case"friend-reviews":Reviews.openUser(e.friendView.profile);break;case"ff-tab":e.friendView.tab=b.dataset.tab,H();break}}catch(K){b.disabled=!1,b.classList&&b.classList.remove("busy"),GV.toast(GV.errMsg(K),"error")}}async function n(p){const b=p.target;if(b.id==="setup-form"){p.preventDefault();try{e.cloud=await D().configure({url:b.url.value,key:b.key.value}),e.showSetup=!1,e.authTab="signup",w(),j(),GV.toast("Serveur connect\xE9","ok")}catch(U){GV.toast(GV.errMsg(U),"error")}}if(b.id==="auth-form"){p.preventDefault();const U=q("#auth-msg"),K=q("button[type=submit]",b);K.disabled=!0,K.classList.add("loading"),U.className="auth-msg",U.textContent="";try{if(e.authTab==="signup"){if((await D().signUp({email:b.email.value,password:b.password.value,username:b.username.value})).needsConfirmation){e.authTab="signin",w();const Y=q("#auth-msg");Y.className="auth-msg ok",Y.textContent=`Compte cr\xE9\xE9 ! Clique sur le lien envoy\xE9 \xE0 ${b.email.value}, puis connecte-toi ici.`;return}e.cloud=await D().status()}else e.cloud=await D().signIn({email:b.email.value,password:b.password.value});j(),await L(),w(),GV.toast(`Bienvenue ${e.cloud.profile.username} !`,"ok"),f()}catch(X){U.className="auth-msg err",U.textContent=GV.errMsg(X),K.disabled=!1,K.classList.remove("loading")}}if(b.id==="pseudo-form"){p.preventDefault();try{e.cloud.profile=await D().updateUsername(b.username.value),e.editingName=!1,w(),j(),GV.toast("Pseudo mis \xE0 jour","ok"),f()}catch(U){GV.toast(GV.errMsg(U),"error")}}}let M=null;function O(p){p.target.id==="friend-search"&&(clearTimeout(M),M=setTimeout(()=>Z(p.target.value),300)),(p.target.id==="ff-text"||p.target.id==="ff-sort")&&z()}async function Z(p){const b=q("#friend-results");if(b){if(p.trim().length<2){b.innerHTML='<p class="muted small">Tape au moins 2 lettres du pseudo de ton ami.</p>';return}try{const U=await D().search(p),K=e.friends||{friends:[],incoming:[],outgoing:[]},X=Y=>K.friends.some(ie=>ie.profile.id===Y)?"friend":K.outgoing.some(ie=>ie.profile.id===Y)?"out":K.incoming.some(ie=>ie.profile.id===Y)?"in":null;b.innerHTML=U.length?U.map(Y=>{const ie=X(Y.id),de=ie==="friend"?'<span class="btn done small">Ami \u2713</span>':ie==="out"?'<span class="muted small">Demande envoy\xE9e</span>':ie==="in"?`<button class="btn primary small" data-s="add-friend" data-uid="${Y.id}">Accepter</button>`:`<button class="btn primary small" data-s="add-friend" data-uid="${Y.id}">Ajouter</button>`;return E(Y,de)}).join(""):'<p class="muted small">Aucun membre avec ce pseudo.</p>'}catch(U){b.innerHTML=`<p class="warn small">${o(GV.errMsg(U))}</p>`}}}function J(){for(const p of["#profile-root","#friend-root"]){const b=q(p);b.addEventListener("click",g),b.addEventListener("submit",n),b.addEventListener("input",O)}q("#profile-root").addEventListener("click",p=>{const b=p.target.closest("#auth-tabs [data-tab]");b&&(e.authTab=b.dataset.tab,w())}),q("#friend-root").addEventListener("click",p=>{if(p.target.closest(".wl-card")&&e.friendView){Wishlist.onGridClick(p,e.friendView.wishlist);return}const b=p.target.closest(".card");if(!b||!e.friendView)return;const U=e.friendView.records.find(K=>K.id===b.dataset.id);U&&GV.openDetail(null,{rec:U,readOnly:!0})})}async function ee(){J();try{e.cloud=await D().status()}catch(p){e.cloud={configured:!0,user:null,error:GV.errMsg(p)}}j(),f(),T()?(await L(),x()):e.ready=!0,setInterval(()=>{x(),j()},6e4)}window.Social={init:ee,scheduleSync:P,renderProfile:w,openFriend:$,ago:N,refreshFriendWishlist:()=>{e.friendView&&e.friendView.tab==="wishlist"&&GV.state.view==="friend"&&z()},isLoggedIn:T,me:()=>e.cloud.profile,friendIds:()=>e.friends?e.friends.friends.map(p=>p.profile.id):[]}})(),(function(){const{esc:o,num:F}=VL,A=(x,_=document)=>_.querySelector(x),y=x=>new Promise(_=>setTimeout(_,x)),q=2300,D={info:null,importing:!1,phase:"",report:null,enriching:!1,done:0,total:0},e=()=>GV.state.collection.filter(x=>x.needsEnrich&&x.discogsId);function T(x){const _=Math.ceil(x*q/6e4);return _<=1?"moins d'une minute":`environ ${_} min`}async function f(){const x=A("#import-root");if(!GV.state.settings.discogsToken){x.innerHTML=`<div class="card-panel import-card">
        <h3>Importer ma collection Discogs</h3>
        <p class="muted">Pour r\xE9cup\xE9rer ta collection, ajoute d'abord ton jeton Discogs dans <a href="#" data-goto="settings">R\xE9glages</a>.</p>
      </div>`;return}if(D.importing){x.innerHTML=P();return}if(!D.info){x.innerHTML='<div class="loader"><div class="loader-disc"></div><span>Connexion \xE0 ton compte Discogs\u2026</span></div>';try{D.info=await window.vault.collectionInfo()}catch(_){x.innerHTML=`<p class="warn">${o(GV.errMsg(_))}</p>`;return}}x.innerHTML=N()}function N(){const{username:x,count:_}=D.info,h=GV.state.collection.filter(u=>u.discogsInstanceId).length,v=D.report;return`<div class="import-grid">
      <div class="card-panel import-card">
        <div class="import-head">
          <div class="import-disc"></div>
          <div>
            <div class="muted small">Compte Discogs</div>
            <div class="import-user">${o(x)}</div>
            <div class="muted">${F(_)} \xE9l\xE9ment${_>1?"s":""} dans ta collection${h?` \xB7 ${F(h)} d\xE9j\xE0 import\xE9${h>1?"s":""}`:""}</div>
          </div>
        </div>
        ${v?`<div class="import-report">
          <div><b>${F(v.created)}</b><span>disques ajout\xE9s</span></div>
          <div><b>${F(v.already)}</b><span>d\xE9j\xE0 pr\xE9sents</span></div>
          <div><b>${F(v.skipped)}</b><span>ignor\xE9s (cassettes, fichiers\u2026)</span></div>
        </div>`:""}
        <button class="btn primary big" data-imp="start" ${_?"":"disabled"}>
          ${h?"Importer les nouveaux disques":"Importer ma collection"}
        </button>
        <p class="muted small">Tu peux relancer l'import \xE0 tout moment : seuls les disques ajout\xE9s depuis sur Discogs seront import\xE9s.</p>
      </div>
      <div class="card-panel">
        <h3>Ce qui est import\xE9</h3>
        <ul class="import-list">
          <li><b>Tout de suite</b> : artiste, titre, ann\xE9e, label, format, pochette, couleur des vinyles, et l'\xE9tat (M, NM, VG+\u2026) et les notes que tu as saisis sur Discogs.</li>
          <li><b>En arri\xE8re-plan</b> : cote, raret\xE9 et liste des pistes. Discogs limite le nombre de requ\xEAtes, il faut donc environ 2 secondes par disque, soit ${T(Math.max(_-h,0))} pour ta collection.</li>
          <li>Tu peux utiliser l'appli, et m\xEAme la fermer, pendant ce temps : la r\xE9cup\xE9ration reprend au prochain lancement.</li>
          <li>Les vinyles (y compris 78 tours, flexi-discs et ac\xE9tates) et les CD sont import\xE9s ; les cassettes et fichiers num\xE9riques sont ignor\xE9s.</li>
        </ul>
      </div>
    </div>`}function P(){return`<div class="card-panel import-card">
      <div class="loader"><div class="loader-disc"></div><span id="imp-phase">${o(D.phase)}</span></div>
    </div>`}function c(x){D.phase=x;const _=A("#imp-phase");_&&(_.textContent=x)}async function L(){if(!D.importing){D.importing=!0,D.report=null,f();try{c("R\xE9cup\xE9ration de la liste de tes disques\u2026");const x=await window.vault.collectionPage(1),_=[...x.items],h=x.pagination?x.pagination.pages:1,v=x.pagination?x.pagination.items:_.length;for(let $=2;$<=h;$++){c(`R\xE9cup\xE9ration de la liste : ${F(_.length)} / ${F(v)}`),await y(1100);const H=await window.vault.collectionPage($);_.push(...H.items)}c("Ajout des disques \xE0 ta collection\u2026");const u=GV.state.collection,C=new Set(u.map($=>$.discogsInstanceId).filter(Boolean)),E=[],G=[];let W=0,w=0;for(const{kind:$,record:H}of _){if(!$){W++;continue}if(C.has(H.discogsInstanceId)){w++;continue}const z=u.find(g=>g.discogsId===H.discogsId&&!g.discogsInstanceId);if(z){z.discogsInstanceId=H.discogsInstanceId,G.push(z),w++;continue}E.push({id:crypto.randomUUID(),purchasePrice:null,manualValue:null,...H}),C.add(H.discogsInstanceId)}(E.length||G.length)&&(GV.state.collection=await window.vault.saveMany([...E,...G])),D.report={created:E.length,already:w,skipped:W},D.importing=!1,GV.renderAll(),GV.toast(E.length?`${F(E.length)} disque${E.length>1?"s":""} import\xE9${E.length>1?"s":""} depuis Discogs`:"Aucun nouveau disque \xE0 importer","ok"),f(),R()}catch(x){D.importing=!1,f(),GV.toast(GV.errMsg(x),"error")}}}function k(){if(A("#side-task").classList.toggle("hidden",!D.enriching),!D.enriching)return;const _=D.total-D.done;A("#side-task-text").textContent=`${F(D.done)} / ${F(D.total)} \xB7 ${T(_)}`,A("#side-task-fill").style.width=`${D.done/Math.max(D.total,1)*100}%`}async function R(){if(D.enriching||!GV.state.settings.discogsToken)return;const x=e().map(h=>h.id);if(!x.length)return;D.enriching=!0,D.done=0,D.total=x.length,k();let _=0;for(let h=0;h<x.length;h++){const v=Date.now(),u=GV.state.collection.find(E=>E.id===x[h]);if(!u||!u.needsEnrich){D.done++;continue}try{const E=await window.vault.enrichRelease(u.discogsId),G=GV.state.collection.find(W=>W.id===x[h]);if(G){const W={id:G.id,condition:G.condition,notes:G.notes,purchasePrice:G.purchasePrice,manualValue:G.manualValue,addedAt:G.addedAt,discogsInstanceId:G.discogsInstanceId};G.vinylColorEdited&&(W.vinylColor=G.vinylColor),Object.assign(G,E,W),delete G.needsEnrich,await window.vault.saveRecord(G),_++}}catch(E){const G=GV.errMsg(E);if(/429/.test(G)){await y(3e4),h--;continue}if(/401|403/.test(G)){GV.toast("Jeton Discogs refus\xE9, r\xE9cup\xE9ration des cotes interrompue","error");break}if(/fetch failed|ENOTFOUND|network/i.test(G)){GV.toast("Connexion perdue, la r\xE9cup\xE9ration des cotes reprendra au prochain lancement","error");break}const W=GV.state.collection.find(w=>w.id===x[h]);W&&(delete W.needsEnrich,W.enrichError=G,await window.vault.saveRecord(W))}D.done++,k(),GV.renderSidebar(),window.Social&&Social.scheduleSync(),D.done%10===0&&!document.querySelector(".card:hover")&&GV.renderCollection();const C=Date.now()-v;C<q&&await y(q-C)}D.enriching=!1,k(),GV.renderAll(),_&&GV.toast(`Cotes r\xE9cup\xE9r\xE9es pour ${F(_)} disque${_>1?"s":""}`,"ok")}function j(){A("#import-root").addEventListener("click",x=>{x.target.closest('[data-imp="start"]')&&L()}),e().length&&setTimeout(R,4e3)}window.Importer={init:j,renderTab:f,startEnrichment:R}})(),window.CHANGELOG=[{version:"1.2.0-beta.6",date:"2026-11-25",title:"Les \xE9ditions renomm\xE9es dans les critiques",changes:{fix:["Critiques : une \xE9dition au titre diff\xE9rent de son album principal sur Discogs (comme une version longue renomm\xE9e) devient un album \xE0 part, qu'on peut trouver et noter","Critiques : l'album dont le titre correspond exactement \xE0 ta recherche appara\xEEt en premier"]}},{version:"1.2.0-beta.5",date:"2026-11-25",title:"Ta wishlist, et tous les disques de Discogs",highlights:[{icon:"\u{1F496}",title:"Wishlist",text:"Mets de c\xF4t\xE9 les vinyles et CD qui te font envie, avec leur prix le plus bas sur Discogs. Tes amis la voient sur ton profil : pratique pour les cadeaux !"},{icon:"\u{1F517}",title:"Lien Discogs",text:"Colle le lien d'un disque Discogs dans la recherche pour le retrouver \xE0 coup s\xFBr."}],changes:{feat:["Wishlist : ajoute un disque depuis la recherche (bouton \u2665 Wishlist) ou depuis la collection d'un ami","Wishlist : priorit\xE9s, prix le plus bas sur Discogs, filtre vinyles / CD, et bouton \xAB Je l'ai ! \xBB qui le passe dans ta collection","Page d'un ami : onglet Wishlist pour voir ce qui lui ferait plaisir, et l'ajouter aussi \xE0 la tienne","Colle le lien Discogs d'un disque dans la recherche (Ajouter un disque ou Critiques) pour le retrouver \xE0 coup s\xFBr, m\xEAme quand la recherche ne le propose pas","Le lien d'une fiche principale Discogs affiche toutes ses \xE9ditions vinyle et CD"],improve:["Ajouter un disque : la recherche porte par d\xE9faut sur les vinyles et les CD en m\xEAme temps"]}},{version:"1.2.0-beta.4",date:"2026-11-25",title:"Plus d'albums dans la recherche des critiques",changes:{fix:["Critiques : la recherche trouve aussi les albums r\xE9cents ou peu connus (souvent des CD) qui n'ont pas encore de fiche principale sur Discogs"]}},{version:"1.2.0-beta.3",date:"2026-11-25",title:"Les CD dans les critiques",changes:{feat:["Critiques : indique si tu as \xE9cout\xE9 l'album en vinyle ou en CD","Le support d'\xE9coute s'affiche sur chaque critique"],improve:["La page d'un album et ses tuiles montrent un CD quand tu le poss\xE8des en CD","Le badge \xAB Dans ta collection \xBB pr\xE9cise le support (vinyle, CD ou les deux)","Depuis un CD de ta collection, \xAB Noter l'album \xBB pr\xE9s\xE9lectionne le CD","Collection plus sobre : les badges de raret\xE9 n'apparaissent qu'au survol, ou en permanence quand tu filtres par raret\xE9"]}},{version:"1.2.0-beta.2",date:"2026-11-25",title:"Les CD arrivent, et le fil de tes amis",highlights:[{icon:"\u{1F4BF}",title:"Les CD",text:"Ajoute tes CD comme tes vinyles : recherche, import Discogs, cote et raret\xE9. Ils ont leur bo\xEEtier cristal et leur propre lecteur CD."},{icon:"\u{1F4F0}",title:"Fil d'actualit\xE9",text:"Vois les disques que tes amis ajoutent \xE0 leur collection, avec tous les d\xE9tails, et leurs derni\xE8res critiques."},{icon:"\u{1F381}",title:"Nouveaut\xE9s",text:"Cet onglet : le contenu de chaque mise \xE0 jour, et celle qui est disponible."}],changes:{feat:["Support CD : recherche Discogs (Vinyles / CD), import de ta collection Discogs avec les CD, saisie manuelle","Lecteur CD anim\xE9 avec afficheur : piste, temps et passage \xE0 la piste suivante","Fil d'actualit\xE9 : nouveaux disques des amis, regroup\xE9s par ami et par jour, et leurs critiques","Pastille dans la barre lat\xE9rale pour les nouveaut\xE9s de tes amis","Onglet \xAB Nouveaut\xE9s \xBB avec l'historique des versions"],improve:["Filtre par support (vinyles / CD) dans ta collection","R\xE9partition vinyles / CD dans les statistiques","Les \xE9ditions color\xE9es ne sont propos\xE9es que pour les vinyles"]}},{version:"1.2.0-beta.1",date:"2026-11-25",title:"Critiques d'albums",highlights:[{icon:"\u2B50",title:"Critiques",text:"Note les albums de \xBD \xE0 5 \xE9toiles, \xE9cris ton avis, marque tes coups de c\u0153ur et aime les critiques des autres."},{icon:"\u{1F3C6}",title:"Les mieux not\xE9s",text:"Le classement des albums pr\xE9f\xE9r\xE9s de la communaut\xE9 Groove Vault."}],changes:{feat:["Rubrique Critiques : fil de la communaut\xE9, critiques des amis, classement, journal de tes critiques","Page album : note moyenne, r\xE9partition des notes, liste des morceaux, critiques","Bouton \xAB Noter l'album \xBB sur chaque disque, et ta note affich\xE9e sur tes cartes"],improve:["Groove Vault passe en version b\xEAta"]}},{version:"1.1.0",date:"2026-11-24",title:"Import Discogs et mises \xE0 jour automatiques",changes:{feat:["Import de ta collection Discogs en un clic (\xE9tats et notes compris)","R\xE9cup\xE9ration des cotes en arri\xE8re-plan, qui reprend au prochain lancement","Mises \xE0 jour automatiques avec une fen\xEAtre de t\xE9l\xE9chargement"],fix:["Une pochette est g\xE9n\xE9r\xE9e quand l'image d'un disque ne se charge pas"]}},{version:"1.0.0",date:"2026-11-24",title:"Premi\xE8re version",changes:{feat:["Collection de vinyles avec la base Discogs (18 millions de r\xE9f\xE9rences)","Platine anim\xE9e : bras de lecture, d\xE9marrage \xE0 33\u2153 ou 45 tours, craquements","Cote r\xE9elle selon l'\xE9tat et indice de raret\xE9 sur 100","Vinyles color\xE9s, translucides, marbr\xE9s et \xE9clabouss\xE9s","Profil, photo, amis et collections partag\xE9es","Statistiques de ta collection"]}}],(function(){const{esc:o}=VL,F=(v,u=document)=>u.querySelector(v),A=()=>window.vault.update,y={state:null,info:null,dismissed:new Set},q=v=>String(v||"").replace(/-beta\.?(\d*)$/,(u,C)=>` b\xEAta${C?" "+C:""}`),D=v=>`${(v/1048576).toFixed(1).replace(".",",")} Mo`;function e(v){let u=F("#update-modal");u||(u=document.createElement("div"),u.id="update-modal",u.className="update-modal",u.addEventListener("click",R),document.body.appendChild(u)),u.innerHTML=`<div class="um-backdrop"></div><div class="um-card">${v}</div>`,requestAnimationFrame(()=>u.classList.add("open"))}function T(){const v=F("#update-modal");v&&(v.classList.remove("open"),setTimeout(()=>v.remove(),300))}const f=v=>`<div class="um-disc"><span></span>${v?`<b>${v}</b>`:""}</div>`;function N(v){const u=(v.notes||[]).length?`<div class="um-notes"><div class="um-notes-title">Nouveaut\xE9s</div>${v.notes.map(C=>`<div>${o(C)}</div>`).join("")}</div>`:"";return`${f("NEW")}
      <h2>Une nouvelle version est disponible</h2>
      <p class="muted">Groove Vault <b>${o(q(v.version))}</b> \xB7 tu utilises la ${o(q(v.current))}</p>
      ${u}
      <div class="um-actions">
        <button class="btn ghost" data-u="later">Plus tard</button>
        <button class="btn primary" data-u="download">Mettre \xE0 jour</button>
      </div>`}function P(){return`${f("",!0)}
      <h2>T\xE9l\xE9chargement de la mise \xE0 jour</h2>
      <p class="muted">Groove Vault ${o(q(y.info?y.info.version:""))} \xB7 tu peux continuer \xE0 utiliser l'appli</p>
      <div class="um-bar"><i id="um-fill"></i></div>
      <div class="um-progress"><span id="um-pct">0 %</span><span id="um-size"></span></div>
      <div class="um-actions"><button class="btn ghost" data-u="close">Masquer</button></div>`}function c(v){return`${f("\u2713")}
      <h2>Mise \xE0 jour pr\xEAte</h2>
      <p class="muted">Groove Vault va red\xE9marrer pour installer la version ${o(q(v.version))}. Cela prend quelques secondes, ta collection est conserv\xE9e.</p>
      <div class="um-actions">
        <button class="btn ghost" data-u="close">Au prochain d\xE9marrage</button>
        <button class="btn primary" data-u="install">Red\xE9marrer maintenant</button>
      </div>`}function L(v){return`${f("!")}
      <h2>La mise \xE0 jour a \xE9chou\xE9</h2>
      <p class="muted">${o(v)}</p>
      <div class="um-actions">
        <button class="btn ghost" data-u="close">Fermer</button>
        <button class="btn primary" data-u="download">R\xE9essayer</button>
      </div>`}async function k(){if(y.state==="downloading"){e(P());return}y.state="downloading",e(P());try{await A().download()}catch(v){y.state="error",e(L(GV.errMsg(v)))}}async function R(v){const u=v.target.closest("[data-u]");if(u)switch(u.dataset.u){case"later":y.info&&y.dismissed.add(y.info.version),y.state=null,T();break;case"close":T();break;case"download":await k();break;case"install":u.disabled=!0,u.textContent="Red\xE9marrage\u2026",A().install();break}}function j(v,u){if(v==="available"){if(y.state==="downloading"||y.state==="downloaded"||y.dismissed.has(u.version))return;y.info=u,y.state="available",e(N(u)),x(`Version ${q(u.version)} disponible`),window.News&&News.onUpdate()}else if(v==="progress"){if(y.state!=="downloading")return;const C=F("#um-fill");if(!C)return;C.style.width=`${u.percent.toFixed(1)}%`,F("#um-pct").textContent=`${Math.floor(u.percent)} %`,F("#um-size").textContent=`${D(u.transferred)} / ${D(u.total)}${u.speed?` \xB7 ${D(u.speed)}/s`:""}`}else v==="downloaded"?(y.state="downloaded",e(c(u)),x(`Version ${q(u.version)} pr\xEAte, install\xE9e au prochain d\xE9marrage`)):v==="error"&&y.state==="downloading"&&(y.state="error",e(L(u)))}function x(v){const u=F("#update-status");u&&(u.textContent=v)}async function _(){const v=F("#check-update");v.disabled=!0,v.classList.add("loading"),x("Recherche en cours\u2026"),y.info&&y.dismissed.delete(y.info.version),y.dismissed.clear();const u=await A().check();v.disabled=!1,v.classList.remove("loading"),u.status==="latest"?x("Tu as la derni\xE8re version \u2713"):u.status==="available"?x(`Version ${q(u.version)} disponible`):u.status==="dev"?x("Les mises \xE0 jour automatiques fonctionnent uniquement dans la version install\xE9e."):u.status==="busy"?x("Recherche d\xE9j\xE0 en cours\u2026"):x(`Impossible de v\xE9rifier : ${u.message||"pas de connexion ?"}`)}async function h(){A().onEvent(j);const v=await A().info(),u=F("#app-version");u&&(u.innerHTML=`Version install\xE9e : <b>${o(q(v.version))}</b>${v.packaged?"":" (mode d\xE9veloppement)"}`);const C=F("#check-update");C&&C.addEventListener("click",_)}window.Updater={init:h,startDownload:k,available:()=>y.info&&y.state!=="downloaded"?y.info:null}})(),(function(){const{esc:o}=VL,F=(k,R=document)=>R.querySelector(k),A={version:null,checking:!1,checkMsg:""},y=k=>String(k||"").replace(/-beta\.?(\d*)$/,(R,j)=>` b\xEAta${j?" "+j:""}`),q=k=>/-beta/.test(k||""),D=k=>new Date(k+"T12:00:00").toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}),e=[["feat","Nouveau","new"],["improve","Am\xE9lior\xE9","imp"],["fix","Corrig\xE9","fix"]];function T(){const k=window.Updater&&Updater.available();return k?`<div class="nw-available">
      <div class="nw-available-disc"></div>
      <div class="nw-available-body">
        <div class="nw-kicker">Mise \xE0 jour disponible</div>
        <h2>Groove Vault ${o(y(k.version))}</h2>
        ${(k.notes||[]).length?`<ul>${k.notes.map(R=>`<li>${o(R.replace(/^•\s*/,""))}</li>`).join("")}</ul>`:""}
      </div>
      <button class="btn primary" data-nw="update">Mettre \xE0 jour</button>
    </div>`:""}function f(k,R){const j=k.version===A.version,x=k.changes||{};return`<article class="nw-version ${j?"current":""}" style="--i:${R}">
      <div class="nw-rail"><span class="nw-dot"></span></div>
      <div class="nw-card">
        <div class="nw-head">
          <h2>${o(y(k.version))}</h2>
          ${j?'<span class="nw-pill cur">Install\xE9e</span>':""}
          ${q(k.version)?'<span class="nw-pill beta">B\xEAta</span>':""}
          <span class="nw-date">${D(k.date)}</span>
        </div>
        ${k.title?`<div class="nw-title">${o(k.title)}</div>`:""}
        ${(k.highlights||[]).length?`<div class="nw-highlights">${k.highlights.map(_=>`
          <div class="nw-hl"><span class="nw-ico">${_.icon}</span><b>${o(_.title)}</b><p>${o(_.text)}</p></div>`).join("")}</div>`:""}
        ${e.filter(([_])=>(x[_]||[]).length).map(([_,h,v])=>`
          <div class="nw-group">
            <span class="nw-tag ${v}">${h}</span>
            <ul>${x[_].map(u=>`<li>${o(u)}</li>`).join("")}</ul>
          </div>`).join("")}
      </div>
    </article>`}function N(){const k=F("#news-root");k&&(k.innerHTML=`
      <header class="view-head">
        <div>
          <h1>Nouveaut\xE9s</h1>
          <p class="subtitle">Le contenu de chaque mise \xE0 jour de Groove Vault.</p>
        </div>
        <div class="toolbar">
          <span class="muted small">Tu utilises la <b>${o(y(A.version||""))}</b></span>
          <button class="btn ghost ${A.checking?"loading":""}" data-nw="check" ${A.checking?"disabled":""}>
            <svg viewBox="0 0 24 24"><path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/></svg>Rechercher une mise \xE0 jour</button>
        </div>
      </header>
      ${A.checkMsg?`<p class="muted small nw-checkmsg">${o(A.checkMsg)}</p>`:""}
      ${T()}
      <div class="nw-timeline">${(window.CHANGELOG||[]).map(f).join("")}</div>`)}function P(k){const R=F("#nav-news");R&&R.classList.toggle("hidden",!k)}async function c(){A.version&&GV.state.settings.lastSeenVersion!==A.version&&(GV.state.settings=await window.vault.saveSettings({lastSeenVersion:A.version})),P(!!(window.Updater&&Updater.available()))}async function L(k){const R=k.target.closest("[data-nw]");if(R&&(R.dataset.nw==="update"&&Updater.startDownload(),R.dataset.nw==="check")){A.checking=!0,A.checkMsg="",N();const j=await window.vault.update.check();A.checking=!1,A.checkMsg={latest:"Tu as la derni\xE8re version \u2713",available:"",dev:"Les mises \xE0 jour automatiques fonctionnent uniquement dans la version install\xE9e.",busy:"Recherche d\xE9j\xE0 en cours\u2026"}[j.status]??`Impossible de v\xE9rifier : ${j.message||"pas de connexion ?"}`,N()}}window.News={async init(){const k=await window.vault.update.info();A.version=k.version,F("#news-root").addEventListener("click",L);const R=GV.state.settings.lastSeenVersion;R!==A.version&&(P(!0),R&&setTimeout(()=>GV.toast(`Groove Vault est pass\xE9 en ${y(A.version)} : d\xE9couvre les nouveaut\xE9s !`,"ok"),2500))},render(){N(),c()},onUpdate(){P(!0),GV.state.view==="news"&&N()}}})(),(function(){const{esc:o,num:F,avatarHTML:A}=VL,y=(s,i=document)=>i.querySelector(s),q=()=>window.vault.reviews,D=()=>window.vault.albums,e={tab:"feed",feed:null,feedMore:!1,friends:null,top:null,user:null,search:null,query:"",error:null,loading:!1,page:null,albums:new Map,relCache:new Map,mine:new Map,mineLoaded:!1},T=s=>String(s).replace(".",","),f=()=>window.Social&&Social.isLoggedIn(),N=()=>Social.me(),P=s=>Social.ago(s);function c(s,i=""){return s==null?"":`<span class="stars ${i}" style="--p:${s/5*100}%" title="${T(s)} / 5" aria-label="${T(s)} \xE9toiles sur 5"></span>`}const L='<svg viewBox="0 0 24 24" class="heart-ico"><path d="M12 20.5s-7.5-4.6-9.3-9.6C1.5 7.6 3.6 4 7.2 4c2 0 3.6 1.1 4.8 2.8C13.2 5.1 14.8 4 16.8 4c3.6 0 5.7 3.6 4.5 6.9-1.8 5-9.3 9.6-9.3 9.6z"/></svg>',k='<svg viewBox="0 0 24 24"><path d="M7 10v10H4V10zM7 10l4-7c1.7 0 2.6 1.2 2.2 2.9L12.5 9H19a2 2 0 0 1 2 2.3l-1.2 7A2 2 0 0 1 17.8 20H7"/></svg>';function R(s){return s?{id:s.id,artist:s.artist||"",title:s.title||"",year:s.year||null,cover:s.cover||s.cover_url||"",genres:s.genres||[],rating_avg:s.rating_avg??null,rating_count:s.rating_count||0,review_count:s.review_count||0,love_count:s.love_count||0}:null}function j(s){if(!s||!s.id)return s;const i=e.albums.get(s.id)||{},l=R({...i,...Object.fromEntries(Object.entries(s).filter(([,d])=>d!=null&&d!==""))});return e.albums.set(s.id,l),l}const x=s=>({artist:s.artist,title:s.title,coverRemote:s.cover}),_=s=>VL.sleeveHTML(x(s),"");function h(s){const i=GV.state.collection.filter(l=>l.albumId===s||l.masterId&&"m"+l.masterId===s||l.discogsId&&"r"+l.discogsId===s);return[...new Set(i.map(l=>VL.isCD(l)?"cd":"vinyl"))]}const v={vinyl:"Vinyle",cd:"CD"},u=s=>v[s]?`<span class="rv-media m-${s}" title="\xC9cout\xE9 sur ${s==="cd"?"CD":"vinyle"}"><i></i>${v[s]}</span>`:"";function C(s,i){const l=h(s.id),d=i?i==="cd":l.length===1&&l[0]==="cd";return VL.vinylHTML({...x(s),format:d?"cd":"vinyl"},"")}function E(s){return GV.state.collection.find(i=>i.albumId===s||i.masterId&&"m"+i.masterId===s||i.discogsId&&"r"+i.discogsId===s)}const G=2;function W(s){return s.albumId||(s.masterId?"m"+s.masterId:null)}const w=s=>!!s.albumId&&s.albumRule===G;function $(s){return o(s).replace(/\n{2,}/g,"</p><p>").replace(/\n/g,"<br>")}function H(s,i={day:"numeric",month:"long",year:"numeric"}){return new Date(s.length===10?s+"T12:00:00":s).toLocaleDateString("fr-FR",i)}function z(s){const i=GV.errMsg(s),l=/script SQL/.test(i);return`<div class="card-panel rv-error">
      <h3>${l?"Le serveur doit \xEAtre mis \xE0 jour":"Impossible de charger les critiques"}</h3>
      <p class="muted">${o(i)}</p>
      ${l?`<p class="muted small">Ouvre ton projet Supabase \u2192 <i>SQL Editor</i> \u2192 nouvelle requ\xEAte, colle le script puis clique sur <i>Run</i>. Ta collection et tes amis ne sont pas touch\xE9s.</p>
        <div class="row"><button class="btn primary small" data-r="copy-schema">Copier le script SQL</button>
        <button class="btn ghost small" data-r="open" data-url="https://supabase.com/dashboard/projects">Ouvrir Supabase \u2197</button>
        <button class="btn ghost small" data-r="retry">R\xE9essayer</button></div>`:'<button class="btn ghost small" data-r="retry">R\xE9essayer</button>'}
    </div>`}const g=s=>`<div class="loader"><div class="loader-disc"></div><span>${s}</span></div>`;function n(s,i,l={}){const d=j(R(s.album))||{id:s.album_id,artist:"",title:""},m=s.author||{},I=f()&&m.id===N().id,se=(s.body||"").length>480||(s.body||"").split(`
`).length>7,oe=l.friendIds&&l.friendIds.includes(m.id),ve=new Date(s.updated_at)-new Date(s.created_at)>12e4,me=s.body?"a critiqu\xE9":s.rating!=null?"a not\xE9":"a eu un coup de c\u0153ur pour";return`<article class="rv-card ${l.compact?"compact":""}" data-rid="${s.id}" style="--i:${Math.min(i,20)}">
      ${l.showAlbum===!1?"":`<button class="rv-cover" data-r="album" data-aid="${o(d.id)}" title="Voir l'album">${_(d)}<span class="sleeve-gloss"></span></button>`}
      <div class="rv-main">
        ${l.showAuthor===!1?"":`<div class="rv-author">
          <button class="rv-user" data-r="user" data-uid="${o(m.id)}">${A(m,24)}<b>${o(m.username||"?")}</b></button>
          ${oe?'<span class="rv-pill">Ami</span>':""}${I?'<span class="rv-pill me">Toi</span>':""}
          <span class="muted">${l.showAlbum===!1?"":me}</span>
        </div>`}
        ${l.showAlbum===!1?"":`<div class="rv-album">
          <button data-r="album" data-aid="${o(d.id)}"><b>${o(d.title)}</b></button>${d.year?`<span>${o(d.year)}</span>`:""}
          <div class="rv-artist">${o(d.artist)}</div>
        </div>`}
        <div class="rv-rating">
          ${c(s.rating)}
          ${s.loved?`<span class="rv-loved" title="Coup de c\u0153ur">${L}</span>`:""}
          ${u(s.media)}
          ${s.listened_on?`<span class="rv-date">\xC9cout\xE9 le ${H(s.listened_on)}</span>`:""}
        </div>
        ${s.body?`<div class="rv-body ${se?"clamp":""}"><p>${$(s.body)}</p></div>
          ${se?'<button class="link-btn rv-more" data-r="more">Lire la suite</button>':""}`:""}
        <div class="rv-foot">
          <span class="muted small" title="${o(new Date(s.created_at).toLocaleString("fr-FR"))}">${P(s.created_at)}${ve?" \xB7 modifi\xE9e":""}</span>
          <button class="rv-like ${s.liked?"on":""}" data-r="like" data-rid="${s.id}" ${I?'disabled title="Ta critique"':`title="${s.liked?"Je n'aime plus":"J'aime cette critique"}"`}>
            ${k}<span>${s.like_count||0}</span>
          </button>
        </div>
      </div>
    </article>`}function M(s,i,l={}){const d=j(R(s)),m=e.mine.get(d.id),I=E(d.id);return`<article class="card al-tile" data-r="album" data-aid="${o(d.id)}" style="--i:${Math.min(i,24)}">
      <div class="card-stage">
        ${C(d)}
        <div class="sleeve">${_(d)}<div class="sleeve-gloss"></div></div>
        ${l.rank?`<span class="al-rank">${l.rank}</span>`:""}
        ${I?'<span class="common-badge" title="Dans ta collection">Dans ta collection</span>':""}
      </div>
      <div class="card-info">
        <div class="card-title" title="${o(d.title)}">${o(d.title)}</div>
        <div class="card-artist">${o(d.artist)}</div>
        <div class="card-foot">
          <span>${o(d.year||"")}</span>
          ${d.rating_count?`<span class="al-score" title="${F(d.rating_count)} note${d.rating_count>1?"s":""}">${c(d.rating_avg,"xs")} ${T(d.rating_avg.toFixed(1))}</span>`:'<span class="dim small">pas encore not\xE9</span>'}
        </div>
        ${m&&m.rating!=null?`<div class="al-mine">Ta note ${c(m.rating,"xs")}</div>`:""}
      </div>
    </article>`}function O(s,i={}){const l=Array.from({length:10},(I,se)=>({v:(se+1)/2,n:0}));for(const I of s){const se=Math.round(I*2)-1;l[se]&&l[se].n++}const d=Math.max(1,...l.map(I=>I.n)),m=s.length||1;return`<div class="dist ${i.cls||""}" role="img" aria-label="R\xE9partition des notes">
      <span class="dist-end">${c(.5,"xs")}</span>
      <div class="dist-bars">${l.map(I=>`
        <div class="dist-col" data-tip="${T(I.v)} \u2605 \xB7 ${I.n} note${I.n>1?"s":""} (${Math.round(I.n/m*100)} %)">
          <i style="height:${I.n?Math.max(4,I.n/d*100):0}%"></i>
        </div>`).join("")}</div>
      <span class="dist-end">${c(5,"xs")}</span>
    </div>`}const Z=[["feed","Fil d'actualit\xE9"],["friends","Mes amis"],["top","Les mieux not\xE9s"],["mine","Mes critiques"]];function J(){return`<header class="view-head rv-head">
        <div>
          <h1>Critiques</h1>
          <p class="subtitle">Note les albums, partage ton avis et d\xE9couvre ce qu'\xE9coute la communaut\xE9.</p>
        </div>
        <form class="search-box big rv-search" id="rv-search">
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>
          <input id="rv-q" placeholder="Chercher un album \xE0 noter, ou coller un lien Discogs\u2026" autocomplete="off" value="${o(e.query)}">
        </form>
      </header>
      <div class="rv-tabs">
        <div class="seg" id="rv-tabs">${Z.map(([s,i])=>`<button data-tab="${s}" class="${e.tab===s?"active":""}">${i}</button>`).join("")}</div>
      </div>
      <div id="rv-content"></div>`}function ee(){return`<div class="rv-login card-panel">
      <div class="rv-login-art">${[4.5,3,5].map((s,i)=>`<div class="rv-login-disc" style="--i:${i}">${c(s,"sm")}</div>`).join("")}</div>
      <h2>Ton journal d'\xE9coute</h2>
      <p class="muted">Note tes albums de \xBD \xE0 5 \xE9toiles, \xE9cris ce que tu en as pens\xE9, marque tes coups de c\u0153ur
        et lis les critiques de tes amis et de toute la communaut\xE9 Groove Vault.</p>
      <button class="btn primary" data-goto="profile">Cr\xE9er mon profil ou me connecter</button>
    </div>`}function p(){const s=y("#reviews-root");(!s.firstChild||!y("#rv-content",s))&&(s.innerHTML=J()),s.querySelectorAll("#rv-tabs button").forEach(d=>d.classList.toggle("active",d.dataset.tab===e.tab));const i=y("#rv-content");if(!f()){y(".rv-tabs",s).classList.add("hidden"),i.innerHTML=ee();return}if(y(".rv-tabs",s).classList.remove("hidden"),e.error){i.innerHTML=z(e.error);return}const l=e.tab;if(l==="feed")return K(i,"feed");if(l==="friends")return K(i,"friends");if(l==="top")return Y(i);if(l==="mine"||l==="user")return ie(i);if(l==="search")return de(i)}async function b(s,i){e.error=null;try{e[s]=await i()}catch(l){e.error=l}GV.state.view==="reviews"&&p()}function U(){const s=GV.state.collection.filter(l=>(l.discogsId||l.albumId)&&!(W(l)&&e.mine.has(W(l))));if(!s.length)return"";const i=s.slice(0,10);return`<div class="rv-torate">
      <div class="section-title">\xC0 noter dans ta collection <small>${F(s.length)}</small></div>
      <div class="rv-torate-row">${i.map(l=>`
        <button class="rv-torate-item" data-r="rate-record" data-id="${l.id}" title="${o(l.artist)} - ${o(l.title)}">
          <span class="rv-torate-cover">${VL.sleeveHTML(l,GV.state.base)}</span>
          <span class="rv-torate-cta">${c(0,"xs")}Noter</span>
        </button>`).join("")}</div>
    </div>`}function K(s,i){const l=e[i];if(!l){s.innerHTML=g("Chargement des critiques\u2026"),b(i,()=>q().feed({scope:i==="friends"?"friends":"all"}));return}const d=Social.friendIds&&Social.friendIds()||[];let m=i==="feed"?U():"";l.reviews.length?(m+=`<div class="rv-feed">${l.reviews.map((I,se)=>n(I,se,{friendIds:d})).join("")}</div>`,l.reviews.length>=30&&!l.end&&(m+=`<div class="rv-morewrap"><button class="btn ghost" data-r="feed-more" data-key="${i}">Afficher plus</button></div>`)):m+=`<div class="rv-empty">
        <div class="empty-disc"></div>
        <h2>${l.noFriends?"Tu n'as pas encore d'amis":i==="friends"?"Tes amis n'ont encore rien publi\xE9":"Aucune critique pour le moment"}</h2>
        <p class="muted">${l.noFriends?"Ajoute des amis dans \xAB Profil & amis \xBB pour suivre leurs critiques ici.":"Sois le premier : cherche un album ci-dessus ou note un disque de ta collection."}</p>
        ${l.noFriends?'<button class="btn primary" data-goto="profile">Trouver des amis</button>':""}
      </div>`,s.innerHTML=m}async function X(s){const i=s.dataset.key,l=e[i];s.disabled=!0,s.classList.add("loading");try{const d=l.reviews[l.reviews.length-1],m=await q().feed({scope:i==="friends"?"friends":"all",before:d.created_at});l.reviews.push(...m.reviews),m.reviews.length<30&&(l.end=!0),p()}catch(d){GV.toast(GV.errMsg(d),"error"),s.disabled=!1,s.classList.remove("loading")}}function Y(s){if(!e.top){s.innerHTML=g("Classement des albums\u2026"),b("top",()=>q().top());return}s.innerHTML=e.top.length?`<p class="muted small rv-hint">Classement par note moyenne des membres de Groove Vault.</p>
        <div class="grid al-grid">${e.top.map((i,l)=>M(i,l,{rank:l+1})).join("")}</div>`:'<div class="rv-empty"><div class="empty-disc"></div><h2>Aucun album not\xE9</h2><p class="muted">Le classement se remplira au fil des notes de la communaut\xE9.</p></div>'}function ie(s){const i=e.tab==="mine",l=i?e.mineData:e.user;if(!l){s.innerHTML=g("Chargement des critiques\u2026");const ae=i?N().id:e.userId;b(i?"mineData":"user",()=>q().user(ae));return}const{profile:d,reviews:m}=l,I=m.filter(ae=>ae.rating!=null).map(ae=>ae.rating),se=I.length?I.reduce((ae,re)=>ae+re,0)/I.length:null,oe=m.filter(ae=>ae.loved).length,ve=m.filter(ae=>ae.body).length,me=m.filter(ae=>ae.loved).slice(0,6);s.innerHTML=`
      ${i?"":'<button class="btn ghost small back" data-r="back-tab">\u2190 Retour</button>'}
      <div class="rv-profile">
        <div class="rv-profile-id">
          ${A(d,72)}
          <div>
            <h2>${i?"Mes critiques":`Critiques de ${o(d.username)}`}</h2>
            <div class="rv-profile-stats">
              <div><b>${F(m.length)}</b><span>album${m.length>1?"s":""} not\xE9${m.length>1?"s":""}</span></div>
              <div><b>${F(ve)}</b><span>critique${ve>1?"s":""}</span></div>
              <div><b>${F(oe)}</b><span>coup${oe>1?"s":""} de c\u0153ur</span></div>
              <div><b>${se==null?"-":T(se.toFixed(1))}</b><span>note moyenne</span></div>
            </div>
            ${!i&&l.isFriend?`<button class="btn ghost small" data-r="friend-collection" data-uid="${o(d.id)}">Voir sa collection</button>`:""}
          </div>
        </div>
        ${I.length?`<div class="rv-profile-dist"><div class="section-title">${i?"Mes notes":"Ses notes"}</div>${O(I,{cls:"compact"})}</div>`:""}
      </div>
      ${me.length?`<div class="rv-loves">
        <div class="section-title">Coups de c\u0153ur</div>
        <div class="rv-loves-row">${me.map(ae=>{const re=j(R(ae.album));return`<button class="rv-love-item" data-r="album" data-aid="${o(re.id)}" title="${o(re.artist)} - ${o(re.title)}">${_(re)}<span class="sleeve-gloss"></span></button>`}).join("")}</div>
      </div>`:""}
      ${m.length?`<div class="section-title">Journal <small>${m.length}</small></div>
           <div class="rv-feed">${m.map((ae,re)=>n(ae,re,{showAuthor:!1})).join("")}</div>`:`<div class="rv-empty"><div class="empty-disc"></div><h2>${i?"Tu n'as encore rien not\xE9":"Aucune critique"}</h2>
           <p class="muted">${i?"Cherche un album en haut de la page, ou ouvre un disque de ta collection et clique sur \xAB Noter l'album \xBB.":`${o(d.username)} n'a encore publi\xE9 aucune critique.`}</p></div>`}`}function de(s){const i=e.search;if(!i){s.innerHTML=g("Recherche des albums\u2026");return}const l=`<div class="rv-search-head">
      <span>R\xE9sultats pour <b>\xAB ${o(e.query)} \xBB</b></span>
      <button class="link-btn" data-r="clear-search">Effacer la recherche</button>
    </div>`,d=i.tokenMissing?`<div class="token-warning">Sans jeton Discogs, seuls les albums d\xE9j\xE0 not\xE9s sur Groove Vault apparaissent.
         Ajoute ton jeton dans <a href="#" data-goto="settings">R\xE9glages</a> pour chercher dans tout le catalogue.</div>`:"";if(i.error){s.innerHTML=l+d+`<p class="warn">${o(i.error)}</p>`;return}s.innerHTML=l+d+(i.results.length?`<div class="grid al-grid">${i.results.map((m,I)=>M(m,I)).join("")}</div>`:`<p class="muted no-match">Aucun album trouv\xE9. Essaie avec le nom de l'artiste et le titre, ou colle directement le lien Discogs de l'album.</p>`)}async function ue(s){if(e.query=s.trim(),!(e.query.length<2)){e.tab="search",e.search=null,e.error=null,p();try{e.search=await D().search(e.query)}catch(i){e.search={results:[],error:GV.errMsg(i)}}e.tab==="search"&&p()}}async function pe(s,i={}){const l=j(R(s));if(!l||!l.id)return;let d=i.returnTo||GV.state.view;d==="album"&&(d=e.page&&e.page.returnTo||"reviews"),e.page={album:l,data:null,details:null,draft:null,returnTo:d,error:null,media:i.media||null},GV.go("album"),y("#view-album").scrollTop=0,t(),f()&&(he(l.id),D().details(l.id).then(m=>{!e.page||e.page.album.id!==l.id||(e.page.details=m,e.page.album=j({...m,...e.page.album,cover:e.page.album.cover||m.cover,year:e.page.album.year||m.year,genres:e.page.album.genres.length?e.page.album.genres:m.genres}),t())}).catch(()=>{}))}async function he(s){try{const i=await q().album(s);if(!e.page||e.page.album.id!==s)return;e.page.data=i,e.page.error=null,i.album&&(e.page.album=j({...e.page.album,...R(i.album),cover:e.page.album.cover||i.album.cover_url}));const l=i.reviews.find(d=>d.user_id===i.me);(!e.page.draft||e.page.draftFrom!==(l&&l.updated_at))&&(e.page.draft=l?{rating:l.rating,body:l.body,loved:l.loved,listened_on:l.listened_on||"",media:l.media||null}:{rating:null,body:"",loved:!1,listened_on:"",media:e.page.media||(h(s).length===1?h(s)[0]:null)},e.page.draftFrom=l&&l.updated_at),e.page.mine=l||null,Le(s,l)}catch(i){e.page&&e.page.album.id===s&&(e.page.error=i)}GV.state.view==="album"&&e.page&&e.page.album.id===s&&t()}function Le(s,i){const l=e.mine.has(s);i?e.mine.set(s,{rating:i.rating,loved:i.loved}):e.mine.delete(s),(l!==!!i||i)&&GV.renderCollection()}function ke(s){return`<div class="star-input" id="star-input" tabindex="0" role="slider" aria-label="Ta note" aria-valuemin="0" aria-valuemax="5"
        aria-valuenow="${s||0}" style="--p:${(s||0)/5*100}%">
        <span class="stars xl"></span>
      </div>`}function we(s){if(s==null)return'<span class="dim">Pas de note</span>';const i={.5:"Insupportable",1:"Mauvais",1.5:"Faible",2:"Bof",2.5:"Moyen",3:"Bien",3.5:"Tr\xE8s bien",4:"Excellent",4.5:"Superbe",5:"Chef-d'\u0153uvre"};return`<b>${T(s)}</b> / 5 <span class="dim">\xB7 ${i[s]}</span>`}function Me(){const s=e.page,i=s.draft,l=N();return`<form class="card-panel my-review" id="review-form">
      <div class="mr-head">
        ${A(l,36)}
        <div>
          <b>${s.mine?"Ta critique":"\xC9crire une critique"}</b>
          <span class="muted small">${s.mine?`Publi\xE9e ${P(s.mine.created_at)}${s.mine.like_count?` \xB7 ${s.mine.like_count} j'aime`:""}`:"Note l'album, donne ton avis ou marque-le en coup de c\u0153ur"}</span>
        </div>
      </div>
      <div class="mr-rate">
        ${ke(i.rating)}
        <span class="mr-val" id="mr-val">${we(i.rating)}</span>
        ${i.rating!=null?'<button type="button" class="link-btn" data-r="clear-rating">Retirer la note</button>':""}
        <button type="button" class="heart-btn ${i.loved?"on":""}" data-r="love" title="${i.loved?"Retirer le coup de c\u0153ur":"Coup de c\u0153ur"}" aria-pressed="${i.loved}">${L}<span>Coup de c\u0153ur</span></button>
      </div>
      <textarea name="body" id="mr-body" maxlength="4000" rows="5" placeholder="Qu'as-tu pens\xE9 de cet album ? Les morceaux qui t'ont marqu\xE9, l'ambiance, le son du pressage\u2026">${o(i.body)}</textarea>
      <div class="mr-foot">
        <div class="mr-media" role="group" aria-label="\xC9cout\xE9 sur">
          <span>\xC9cout\xE9 sur</span>
          <div class="seg small">${Object.entries(v).map(([d,m])=>`<button type="button" data-r="media" data-m="${d}" class="${i.media===d?"active":""}">${m}</button>`).join("")}</div>
        </div>
        <label class="mr-date">\xC9cout\xE9 le <input type="date" name="listened_on" value="${o(i.listened_on)}" max="${new Date().toISOString().slice(0,10)}"></label>
        <span class="muted small ${i.body.length<3500?"hidden":""}" id="mr-count">${i.body.length} / 4000</span>
        <span class="mr-spacer"></span>
        ${s.mine?'<button type="button" class="btn danger small" data-r="delete-review">Supprimer</button>':""}
        <button class="btn primary" type="submit">${s.mine?"Mettre \xE0 jour":"Publier"}</button>
      </div>
    </form>`}function t(){const s=y("#album-root"),i=e.page;if(!i){s.innerHTML="";return}const l=i.album,d=i.data,m=i.details,I=E(l.id),se=d?d.ratings:[],oe=se.length?se.reduce((ce,fe)=>ce+fe,0)/se.length:null,ve=[...new Set([...l.genres||[],...m&&m.styles||[]])].slice(0,6),me={reviews:"Critiques",collection:"Ma collection",friend:"Collection de ton ami",profile:"Profil",feed:"Fil d'actualit\xE9"}[i.returnTo]||"Retour",ae=l.cover;let re;if(!f())re=ee();else if(i.error)re=z(i.error);else if(!d)re=g("Chargement des critiques\u2026");else{const ce=d.reviews.filter(fe=>fe.user_id!==d.me).sort((fe,ye)=>d.friendIds.includes(ye.user_id)-d.friendIds.includes(fe.user_id)||ye.like_count-fe.like_count||ye.created_at.localeCompare(fe.created_at));re=`${Me()}
        <div class="section-title al-reviews-title">Critiques <small>${ce.length}</small></div>
        ${ce.length?`<div class="rv-list">${ce.map((fe,ye)=>n(fe,ye,{showAlbum:!1,friendIds:d.friendIds})).join("")}</div>`:`<p class="muted">Personne d'autre n'a encore donn\xE9 son avis sur cet album.</p>`}`}const Te=m&&m.tracklist||[];s.innerHTML=`
      <div class="al-hero">
        <div class="al-ambient" ${ae?`style="background-image:url('${o(ae)}')"`:`style="--h:${VL.hashHue(l.artist+l.title)}" data-gen="1"`}></div>
        <button class="btn ghost small back" data-r="back">\u2190 ${o(me)}</button>
        <div class="al-hero-inner">
          <div class="al-art">
            <div class="card-stage al-stage">
              ${C(l,i.draft&&i.draft.media)}
              <div class="sleeve">${_(l)}<div class="sleeve-gloss"></div></div>
            </div>
          </div>
          <div class="al-info">
            <div class="al-artist">${o(l.artist)}</div>
            <h1 class="al-title">${o(l.title)}</h1>
            <div class="al-meta">${[l.year,...ve].filter(Boolean).map(ce=>`<span>${o(ce)}</span>`).join("")}</div>
            <div class="al-badges">
              ${I?`<button class="tier-pill" style="--tier:#4cc38a" data-r="open-record" data-id="${I.id}">Dans ta collection \xB7 ${h(l.id).map(ce=>ce==="cd"?"CD":"vinyle").join(" et ")}</button>`:""}
              ${d&&d.album&&d.album.love_count?`<span class="tier-pill" style="--tier:#ff6b5f">${L.replace('class="heart-ico"','class="heart-ico tiny"')} ${F(d.album.love_count)} coup${d.album.love_count>1?"s":""} de c\u0153ur</span>`:""}
            </div>
          </div>
          <div class="al-scorebox">
            <div class="al-avg ${oe==null?"empty":""}">
              <b>${oe==null?"":T(oe.toFixed(1))}</b>
              <div>${c(oe==null?0:Math.round(oe*2)/2,"sm")}
                <span class="muted small">${d?se.length?`${F(se.length)} note${se.length>1?"s":""}`:"Pas encore de note":"Chargement\u2026"}</span></div>
            </div>
            ${O(se)}
          </div>
        </div>
      </div>
      <div class="al-body">
        <div class="al-main">${re}</div>
        <aside class="al-side">
          ${Te.length?`<div class="card-panel"><div class="section-title">Pistes <small>${Te.length}</small></div>
            <ol class="tracks">${Te.map(ce=>`<li><span class="pos">${o(ce.position)}</span><span class="tt">${o(ce.title)}</span><span class="dur">${o(ce.duration||"")}</span></li>`).join("")}</ol></div>`:m?"":'<div class="card-panel"><div class="section-title">Pistes</div><div class="loader small"><div class="loader-disc"></div></div></div>'}
          ${m&&m.url?`<button class="btn ghost small" data-r="open" data-url="${o(m.url)}">Voir sur Discogs \u2197</button>`:""}
        </aside>
      </div>`}function r(){const s=y(".al-stage");if(!s||!e.page)return;const i=s.querySelector(".vinyl"),l=document.createElement("div");l.innerHTML=C(e.page.album,e.page.draft&&e.page.draft.media),i.replaceWith(l.firstElementChild)}function a(s){const i=y("#star-input");i&&(i.style.setProperty("--p",`${(s||0)/5*100}%`),y("#mr-val").innerHTML=we(s))}function S(s,i){const l=y(".stars",s).getBoundingClientRect(),d=Math.min(Math.max(i-l.left,0),l.width);return Math.min(5,Math.max(.5,Math.ceil(d/l.width*10)/2))}async function V(s){const i=e.page,l=y("button[type=submit]",s);i.draft.body=s.body.value,i.draft.listened_on=s.listened_on.value,l.disabled=!0,l.classList.add("loading");try{const d=i.album;await q().save({id:d.id,artist:d.artist,title:d.title,year:d.year,cover:d.cover,genres:d.genres},i.draft),GV.toast(i.mine?"Critique mise \xE0 jour":"Critique publi\xE9e","ok"),B(),i.draftFrom=void 0,i.draft=null,await he(d.id)}catch(d){GV.toast(GV.errMsg(d),"error"),l.disabled=!1,l.classList.remove("loading")}}function B(){e.feed=null,e.friends=null,e.top=null,e.mineData=null,e.user&&(e.user=null)}async function te(s,i={}){if(!f()){GV.go("reviews");return}const l=w(s)||!s.discogsId?W(s):null,d={artist:s.artist,title:s.title,year:s.year,cover:VL.coverUrl(s,"")||"",genres:s.genres};if(i={...i,media:VL.isCD(s)?"cd":"vinyl"},l)return pe({...d,...e.albums.get(l)||{},id:l},i);if(!s.discogsId){GV.go("reviews"),y("#rv-q").value=`${s.artist} ${s.title}`,ue(`${s.artist} ${s.title}`);return}GV.toast("Recherche de l'album sur Discogs\u2026");try{let m=e.relCache.get(s.discogsId);m||(m=await D().forRelease(s.discogsId),e.relCache.set(s.discogsId,m));const I=GV.state.collection.find(se=>se.id===s.id);I&&(I.albumId!==m.id||I.albumRule!==G)&&(I.albumId=m.id,I.albumRule=G,I.masterId=m.masterId||I.masterId||null,GV.persist(I)),pe({...d,...m,cover:m.cover||d.cover},i)}catch(m){GV.toast(GV.errMsg(m),"error")}}function Q(s){s&&(f()&&s.id===N().id?e.tab="mine":(e.prevTab=e.tab==="user"?e.prevTab:e.tab,e.tab="user",e.userId!==s.id&&(e.user=null),e.userId=s.id),GV.go("reviews"),y("#view-reviews").scrollTop=0)}async function ne(){if(!f()){e.mine.clear(),e.mineLoaded=!1;return}try{const s=await q().mine();e.mine=new Map(s.map(i=>[i.album_id,{rating:i.rating,loved:i.loved}])),e.mineLoaded=!0,GV.renderCollection()}catch{}}function ge(s){return[e.feed,e.friends,e.user,e.mineData,e.page&&e.page.data,e.external&&{reviews:e.external}].filter(Boolean).flatMap(l=>l.reviews||[]).filter(l=>l.id===s)}async function le(s){const i=s.target.closest("[data-r]");if(!i)return;switch(i.dataset.r){case"album":{const d=e.albums.get(i.dataset.aid);d&&pe(d);break}case"user":{const d=ge(i.closest("[data-rid]")?.dataset.rid)[0];Q(d?d.author:{id:i.dataset.uid});break}case"more":{const d=i.previousElementSibling;d.classList.toggle("clamp"),i.textContent=d.classList.contains("clamp")?"Lire la suite":"R\xE9duire";break}case"like":{if(i.disabled)return;const d=i.dataset.rid,m=ge(d),I=!i.classList.contains("on"),se=(ve,me)=>{m.forEach(ae=>{ae.liked=ve,ae.like_count=me}),document.querySelectorAll(`.rv-like[data-rid="${d}"]`).forEach(ae=>{ae.classList.toggle("on",ve),y("span",ae).textContent=me})},oe=m[0]?m[0].like_count:+y("span",i).textContent;se(I,Math.max(0,oe+(I?1:-1))),I&&i.classList.add("pop"),setTimeout(()=>i.classList.remove("pop"),500);try{se(I,await q().like(d,I))}catch(ve){se(!I,oe),GV.toast(GV.errMsg(ve),"error")}break}case"feed-more":X(i);break;case"clear-search":e.query="",e.search=null,e.tab="feed",y("#rv-q").value="",p();break;case"back-tab":e.tab=e.prevTab&&e.prevTab!=="user"?e.prevTab:"feed",p();break;case"friend-collection":Social.openFriend(i.dataset.uid);break;case"rate-record":{const d=GV.state.collection.find(m=>m.id===i.dataset.id);d&&te(d,{returnTo:"reviews"});break}case"copy-schema":await window.vault.copySchema(),GV.toast("Script SQL copi\xE9 dans le presse-papiers","ok");break;case"open":window.vault.openExternal(i.dataset.url);break;case"retry":e.error=null,B(),GV.state.view==="album"&&e.page?(e.page.error=null,t(),he(e.page.album.id),ne()):p();break;case"back":GV.go(e.page?e.page.returnTo:"reviews");break;case"open-record":GV.openDetail(i.dataset.id);break;case"love":e.page.draft.loved=!e.page.draft.loved,i.classList.toggle("on",e.page.draft.loved),i.setAttribute("aria-pressed",e.page.draft.loved),e.page.draft.loved&&(i.classList.add("pop"),setTimeout(()=>i.classList.remove("pop"),500));break;case"media":e.page.draft.media=e.page.draft.media===i.dataset.m?null:i.dataset.m,i.parentElement.querySelectorAll("[data-m]").forEach(d=>d.classList.toggle("active",d.dataset.m===e.page.draft.media)),r();break;case"clear-rating":e.page.draft.rating=null,be();break;case"delete-review":if(!i.dataset.confirm){i.dataset.confirm="1",i.textContent="Confirmer",setTimeout(()=>{i.isConnected&&(delete i.dataset.confirm,i.textContent="Supprimer")},3e3);return}try{await q().remove(e.page.album.id),GV.toast("Critique supprim\xE9e"),B(),e.page.draft=null,e.page.draftFrom=void 0,await he(e.page.album.id)}catch(d){GV.toast(GV.errMsg(d),"error")}break}}function be(){const s=y("#review-form");s&&(e.page.draft.body=s.body.value,e.page.draft.listened_on=s.listened_on.value),t()}function $e(){const s=y("#reviews-root"),i=y("#album-root");s.addEventListener("click",le),i.addEventListener("click",le),s.addEventListener("click",l=>{const d=l.target.closest("#rv-tabs [data-tab]");d&&(e.tab=d.dataset.tab,e.error=null,e.tab==="mine"&&(e.mineData=null),p())}),s.addEventListener("submit",l=>{l.target.id==="rv-search"&&(l.preventDefault(),ue(y("#rv-q").value))}),i.addEventListener("mousemove",l=>{const d=l.target.closest("#star-input");d&&a(S(d,l.clientX))}),i.addEventListener("mouseout",l=>{const d=l.target.closest("#star-input");d&&!d.contains(l.relatedTarget)&&a(e.page.draft.rating)}),i.addEventListener("click",l=>{const d=l.target.closest("#star-input");if(!d)return;const m=S(d,l.clientX);e.page.draft.rating=e.page.draft.rating===m?null:m,be();const I=y("#star-input");I&&(I.classList.add("pop"),setTimeout(()=>I.classList.remove("pop"),400))}),i.addEventListener("keydown",l=>{if(!l.target.closest("#star-input")||!["ArrowLeft","ArrowRight","ArrowDown","ArrowUp","Delete","Backspace"].includes(l.key))return;l.preventDefault();const m=e.page.draft.rating||0;let I=["ArrowRight","ArrowUp"].includes(l.key)?m+.5:m-.5;(l.key==="Delete"||l.key==="Backspace")&&(I=0),e.page.draft.rating=I<=0?null:Math.min(5,I),be(),y("#star-input").focus()}),i.addEventListener("input",l=>{if(l.target.id==="mr-body"){e.page.draft.body=l.target.value;const d=y("#mr-count");d.textContent=`${l.target.value.length} / 4000`,d.classList.toggle("hidden",l.target.value.length<3500)}}),i.addEventListener("submit",l=>{l.target.id==="review-form"&&(l.preventDefault(),V(l.target))})}window.Reviews={init(){$e()},render:p,renderAlbum:t,openAlbum:pe,openForRecord:te,openUser:Q,onAuth(){B(),e.user=null,e.error=null,ne(),GV.state.view==="reviews"&&p(),GV.state.view==="album"&&(t(),e.page&&f()&&he(e.page.album.id))},myCount:()=>e.mine.size,ratingFor(s){const i=W(s);return i&&e.mine.get(i)||s.discogsId&&e.mine.get("r"+s.discogsId)||null},starsHTML:c,cardHTML:n,attach(s){s.addEventListener("click",le)},setExternal(s){e.external=s},fmtR:T}})(),(function(){const{esc:o,num:F,money:A,avatarHTML:y}=VL,q=(w,$=document)=>$.querySelector(w),D=8,e=600*1e3,T={filter:"all",data:null,reviews:[],error:null,loading:!1,loadedAt:0,expanded:new Set,recs:new Map},f=()=>window.Social&&Social.isLoggedIn(),N=()=>GV.state.settings.feedSeenAt||new Date(Date.now()-7*864e5).toISOString();async function P(){if(!(!f()||T.loading)){T.loading=!0;try{const[w,$]=await Promise.allSettled([window.vault.feed.friends(),window.vault.reviews.feed({scope:"friends"})]);if(w.status==="rejected")throw w.reason;T.data=w.value,T.reviews=$.status==="fulfilled"?$.value.reviews:[],Reviews.setExternal(T.reviews),T.error=null,T.loadedAt=Date.now()}catch(w){T.error=w}T.loading=!1,L(),GV.state.view==="feed"&&(C(),k())}}function c(w=!1){if(!T.data)return[];const $=new Map(T.data.profiles.map(g=>[g.id,g])),H=new Map;for(const g of T.data.additions){const n=new Date(g.record.addedAt).toLocaleDateString("sv"),M=`${g.userId}|${n}`;H.has(M)||H.set(M,{type:"add",key:M,user:$.get(g.userId),date:g.record.addedAt,records:[]}),H.get(M).records.push(g.record)}const z=[...H.values()].filter(g=>g.user);for(const g of T.reviews)z.push({type:"review",key:"rv"+g.id,user:g.author,date:g.created_at,review:g});return z.filter(g=>w||T.filter==="all"||(T.filter==="adds"?g.type==="add":g.type==="review")).sort((g,n)=>n.date.localeCompare(g.date))}function L(){const w=q("#nav-feed");if(!w)return;const $=N(),H=f()&&T.data&&GV.state.view!=="feed"?c(!0).filter(z=>z.date>$).length:0;w.textContent=H>99?"99+":H,w.classList.toggle("hidden",H===0)}async function k(){const w=c(!0)[0],$=new Date().toISOString();w&&w.date>(GV.state.settings.feedSeenAt||"")&&(GV.state.settings=await window.vault.saveSettings({feedSeenAt:$})),L()}function R(w){const $=new Date(w),H=new Date,z=Math.round((new Date(H.toDateString())-new Date($.toDateString()))/864e5);if(z<=0)return"Aujourd'hui";if(z===1)return"Hier";if(z<7){const g=$.toLocaleDateString("fr-FR",{weekday:"long"});return g.charAt(0).toUpperCase()+g.slice(1)}return $.toLocaleDateString("fr-FR",{day:"numeric",month:"long",...$.getFullYear()!==H.getFullYear()?{year:"numeric"}:{}})}function j(w){return w.discogsId&&GV.state.collection.some($=>$.discogsId===w.discogsId)}function x(w,$){const H=GV.rarityOf($),z=GV.valueOf($),g=$.condition&&$.condition.media,n=(VL.isCD($)?["CD",$.discs>1?`${$.discs} CD`:""]:[`${$.sizeInch||12}"`,$.rpm===45?"45 tours":$.rpm===78?"78 tours":"33\u2153 tours",$.discs>1?`${$.discs} disques`:""]).filter(Boolean).join(" \xB7 "),M=[...$.genres||[],...$.styles||[]].slice(0,4);return`<div class="fd-single card" data-id="${o($.id)}" style="--tier:${H.tier.color}">
      <div class="fd-single-art">
        <div class="card-stage">
          ${VL.vinylHTML($,"")}
          <div class="sleeve">${VL.sleeveHTML($,"")}<div class="sleeve-gloss"></div></div>
        </div>
      </div>
      <div class="fd-single-info">
        <div class="fd-artist">${o($.artist)}</div>
        <div class="fd-title">${o($.title)}</div>
        <div class="fd-meta">${[$.year,$.label,$.catno,$.country].filter(Boolean).map(o).join(" \xB7 ")}</div>
        <div class="fd-chips">
          <span class="tier-pill" style="--tier:${H.tier.color}">${H.tier.label}${H.score!=null?` <small>${H.score}/100</small>`:""}</span>
          <span class="chip">${n}</span>
          ${$.vinylColor?`<span class="chip color" style="--c:${o($.vinylColor.primary)}"><i></i>${o($.vinylColor.label||"Vinyle color\xE9")}</span>`:""}
          ${g?`<span class="chip">\xC9tat ${o(g)}</span>`:""}
          ${j($)?'<span class="tier-pill" style="--tier:#4cc38a">Tu as aussi ce pressage</span>':""}
        </div>
        ${M.length?`<div class="fd-tags">${M.map(O=>`<span>${o(O)}</span>`).join("")}</div>`:""}
        <div class="fd-bottom">
          <div class="fd-value"><span>Cote estim\xE9e</span><b>${z?A(z.value,z.currency):"-"}</b></div>
          <div class="fd-actions">
            <button class="btn primary small" data-fd="open">Voir le disque</button>
            <button class="btn ghost small" data-fd="rate">Noter l'album</button>
          </div>
        </div>
      </div>
    </div>`}function _(w,$){const H=w.records.length,z=w.user.id;for(const O of w.records)T.recs.set(`${z}|${O.id}`,O);const g=w.records.reduce((O,Z)=>O+((GV.valueOf(Z)||{}).value||0),0),n=T.expanded.has(w.key),M=n?w.records:w.records.slice(0,D);return`<article class="fd-item" data-uid="${o(z)}" style="--i:${Math.min($,12)}">
      <div class="fd-head">
        <button class="fd-user" data-fd="friend">${y(w.user,36)}</button>
        <div class="fd-head-text">
          <div><button class="fd-name" data-fd="friend">${o(w.user.username)}</button>
            a ajout\xE9 ${H===1?VL.isCD(w.records[0])?"un CD":"un vinyle":`<b>${F(H)} disques</b>`} \xE0 sa collection</div>
          <span class="muted small">${Social.ago(w.date)}${H>1&&g?` \xB7 ${A(g,GV.cur(),0)} au total`:""}</span>
        </div>
        <button class="btn ghost small" data-fd="friend">Sa collection</button>
      </div>
      ${H===1?x(z,w.records[0]):`<div class="grid fd-grid">${M.map((O,Z)=>GV.cardHTML(O,Z,{foreign:!0})).join("")}</div>
           ${H>D?`<button class="link-btn fd-more" data-fd="more" data-key="${o(w.key)}">${n?"R\xE9duire":`Voir les ${H-D} autres`}</button>`:""}`}
    </article>`}function h(w,$){return`<div class="fd-item fd-review-item" style="--i:${Math.min($,12)}">${Reviews.cardHTML(w.review,$,{friendIds:Social.friendIds()})}</div>`}function v(){return`<header class="view-head">
        <div>
          <h1>Fil d'actualit\xE9</h1>
          <p class="subtitle">Les nouveaux disques et les critiques de tes amis.</p>
        </div>
        <div class="toolbar">
          <div class="seg" id="fd-filter">
            <button data-f="all" class="active">Tout</button>
            <button data-f="adds">Nouveaux disques</button>
            <button data-f="reviews">Critiques</button>
          </div>
          <button class="btn ghost" data-fd="refresh" title="Actualiser"><svg viewBox="0 0 24 24"><path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/></svg></button>
        </div>
      </header>
      <div id="fd-content"></div>`}function u(w,$,H){return`<div class="rv-empty"><div class="empty-disc"></div><h2>${w}</h2><p class="muted">${$}</p>${H||""}</div>`}function C(){const w=q("#fd-content");if(!w)return;if(!f()){w.innerHTML=u("Connecte-toi pour suivre tes amis","Le fil affiche les vinyles que tes amis ajoutent \xE0 leur collection et leurs critiques d'albums.",'<button class="btn primary" data-goto="profile">Cr\xE9er mon profil ou me connecter</button>');return}if(T.error&&!T.data){w.innerHTML=`<div class="card-panel rv-error"><h3>Impossible de charger le fil</h3><p class="muted">${o(GV.errMsg(T.error))}</p>
        <button class="btn ghost small" data-fd="refresh">R\xE9essayer</button></div>`;return}if(!T.data){w.innerHTML=`<div class="loader"><div class="loader-disc"></div><span>Chargement de l'actualit\xE9 de tes amis\u2026</span></div>`;return}if(T.data.noFriends){w.innerHTML=u("Tu n'as pas encore d'amis","Ajoute des amis dans \xAB Profil & amis \xBB : leurs nouveaux vinyles appara\xEEtront ici.",'<button class="btn primary" data-goto="profile">Trouver des amis</button>');return}const $=c();if(!$.length){w.innerHTML=u("Rien de neuf pour le moment",T.filter==="reviews"?"Tes amis n'ont pas encore publi\xE9 de critique.":"Aucun de tes amis n'a ajout\xE9 de vinyle ces 3 derniers mois. Reviens plus tard !");return}T.recs.clear();const H=GV.state.settings.feedSeenAt;let z="",g="";$.forEach((n,M)=>{const O=R(n.date);O!==g&&(z+=`<div class="fd-day">${O}</div>`,g=O);const Z=H&&n.date>H?" fresh":"";z+=(n.type==="add"?_(n,M):h(n,M)).replace('class="fd-item',`class="fd-item${Z}`)}),w.innerHTML=`<div class="fd-list">${z}</div>`}function E(){const w=q("#feed-root");q("#fd-content",w)||(w.innerHTML=v()),w.querySelectorAll("#fd-filter button").forEach($=>$.classList.toggle("active",$.dataset.f===T.filter)),C(),T.data&&k(),f()&&Date.now()-T.loadedAt>6e4&&P()}function G(w){const $=w.closest("[data-uid]")?.dataset.uid,H=w.closest("[data-id]")?.dataset.id;return $&&H?T.recs.get(`${$}|${H}`):null}function W(w){const $=w.target.closest("#fd-filter [data-f]");if($){T.filter=$.dataset.f,E();return}const H=w.target.closest("[data-fd]");if(H){const n=H.closest("[data-uid]")?.dataset.uid;switch(H.dataset.fd){case"refresh":T.loadedAt=0,P(),GV.toast("Fil actualis\xE9");return;case"friend":n&&Social.openFriend(n);return;case"more":T.expanded.has(H.dataset.key)?T.expanded.delete(H.dataset.key):T.expanded.add(H.dataset.key),C();return;case"rate":{const M=G(H);M&&Reviews.openForRecord(M,{returnTo:"feed"});return}case"open":break;default:return}}if(w.target.closest("[data-r]"))return;const z=w.target.closest(".card");if(!z)return;const g=G(z);g&&GV.openDetail(null,{rec:g,readOnly:!0})}window.Feed={init(){const w=q("#feed-root");w.addEventListener("click",W),Reviews.attach(w),setInterval(P,e)},render:E,onAuth(){T.data=null,T.reviews=[],T.loadedAt=0,T.error=null,L(),f()&&P(),GV.state.view==="feed"&&E()}}})(),(function(){const{esc:o,money:F}=VL,A=(n,M=document)=>M.querySelector(n),y={items:[],pricing:!1},q='<svg viewBox="0 0 24 24"><path d="M12 20.5s-7.5-4.6-7.5-10.3A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.6c0 5.7-7.5 10.3-7.5 10.3z"/></svg>',D=n=>!!n&&y.items.some(M=>M.discogsId===+n),e=n=>!!n&&GV.state.collection.some(M=>M.discogsId===+n),T=n=>n.discogsId?`https://www.discogs.com/release/${n.discogsId}`:"",f=n=>n.discogsId?`https://www.discogs.com/sell/release/${n.discogsId}`:"";function N(n){const M="coverRemote"in n||"formatDescriptions"in n;return{id:"w"+n.discogsId,discogsId:+n.discogsId,artist:n.artist,title:n.title,year:n.year||"",country:n.country||"",label:n.label||"",catno:n.catno||"",format:(M?VL.isCD(n):n.kind==="cd")?"cd":"vinyl",formatText:M?(n.formatDescriptions||[]).join(" \xB7 "):n.format||"",coverRemote:M?n.coverRemote||"":n.cover||n.thumb||"",have:n.community?n.community.have:n.have??null,want:n.community?n.community.want:n.want??null,market:n.market&&n.market.lowest!=null?{lowest:n.market.lowest,currency:n.market.currency,numForSale:n.market.numForSale||0,at:n.market.updatedAt||""}:void 0,priority:!1,note:"",addedAt:new Date().toISOString()}}async function P(){y.items=await window.vault.wishlist.save(y.items),E(),window.Social&&Social.scheduleSync(),GV.state.view==="wishlist"&&C()}async function c(n){if(!(!n||!n.discogsId||D(n.discogsId))&&(y.items.unshift(n),await P(),GV.toast(`\xAB ${n.title} \xBB ajout\xE9 \xE0 ta wishlist`,"ok"),!n.market)){const M=await j(n.discogsId),O=y.items.find(Z=>Z.discogsId===n.discogsId);M&&O&&(Object.assign(O,M),await P())}}const L=n=>n&&n.discogsId?c(N(n)):void 0;async function k(n,M){const O=y.items.find(Z=>Z.discogsId===+n);O&&(y.items=y.items.filter(Z=>Z!==O),await P(),M||GV.toast(`\xAB ${O.title} \xBB retir\xE9 de ta wishlist`))}async function R(n){return D(n.discogsId)?(await k(n.discogsId),!1):(await L(n),!0)}async function j(n){if(!n||!GV.state.settings.discogsToken)return null;try{const{market:M,community:O}=await window.vault.refreshMarket(n),Z={market:M&&M.lowest!=null?{lowest:M.lowest,currency:M.currency,numForSale:M.numForSale||0,at:M.updatedAt}:{lowest:null,currency:GV.cur(),numForSale:0,at:new Date().toISOString()}};return O&&(Z.have=O.have,Z.want=O.want),Z}catch{return null}}async function x(n){if(y.pricing)return;if(!GV.state.settings.discogsToken){GV.toast("Ajoute ton jeton Discogs dans R\xE9glages pour r\xE9cup\xE9rer les prix.","error");return}y.pricing=!0;const M=n.querySelector("span");n.classList.add("loading");const O=y.items.filter(J=>J.discogsId).map(J=>J.discogsId);let Z=0;for(let J=0;J<O.length;J++){M.textContent=`Prix ${J+1}/${O.length}\u2026`;const ee=await j(O[J]),p=y.items.find(b=>b.discogsId===O[J]);ee&&p&&(Object.assign(p,ee),Z++),J<O.length-1&&await new Promise(b=>setTimeout(b,3100))}y.pricing=!1,await P(),n.classList.remove("loading"),M.textContent="Actualiser les prix",GV.toast(`${Z} prix mis \xE0 jour`,"ok")}async function _(n,M){M.disabled=!0,M.classList.add("loading");try{const O=await GV.importToCollection(+n);await k(n,!0),GV.toast(`\xAB ${O.title} \xBB rejoint ta collection \u{1F389}`,"ok")}catch(O){M.disabled=!1,M.classList.remove("loading"),GV.toast(GV.errMsg(O),"error")}}function h(n){return n.market?n.market.lowest==null?'<span class="wl-price muted">pas en vente</span>':`<span class="wl-price" title="${n.market.numForSale||0} en vente sur Discogs">d\xE8s ${F(n.market.lowest,n.market.currency)}</span>`:'<span class="wl-price muted">prix ?</span>'}function v(n,M,O={}){const Z={...n,coverFile:null},J=[n.year,n.label].filter(Boolean).map(o).join(" \xB7 "),ee=O.foreign&&D(n.discogsId),p=O.foreign&&e(n.discogsId),b=O.foreign?`${p?"":`<button class="wl-act ${ee?"on":""}" data-w="${ee?"remove":"add-friend"}" title="${ee?"Retirer de ta wishlist":"Le mettre aussi dans ta wishlist"}">${q}</button>`}
         <button class="wl-act" data-w="discogs" title="Voir sur Discogs">\u2197</button>`:`<button class="wl-act prio ${n.priority?"on":""}" data-w="priority" title="${n.priority?"Retirer la priorit\xE9":"Marquer comme priorit\xE9"}">\u2605</button>
         <button class="wl-act got" data-w="got" title="Je l'ai ! (ajouter \xE0 ma collection)">\u2713</button>
         <button class="wl-act" data-w="shop" title="Voir les offres sur Discogs">\u2197</button>
         <button class="wl-act del" data-w="remove" title="Retirer de la wishlist">\u2715</button>`;return`<article class="card wl-card ${n.priority?"is-prio":""}" data-did="${n.discogsId}" style="--i:${Math.min(M,24)}">
      <div class="card-stage">
        ${VL.vinylHTML(Z,"")}
        <div class="sleeve">${VL.sleeveHTML(Z,"")}<div class="sleeve-gloss"></div></div>
        ${n.priority?'<span class="wl-prio-badge">\u2605 Priorit\xE9</span>':""}
        ${p?`<span class="common-badge" title="Tu as d\xE9j\xE0 ce pressage">Tu l'as</span>`:""}
        <span class="wl-media ${n.format==="cd"?"m-cd":"m-vinyl"}">${n.format==="cd"?"CD":"Vinyle"}</span>
      </div>
      <div class="card-info">
        <div class="card-title" title="${o(n.title)}">${o(n.title)}</div>
        <div class="card-artist">${o(n.artist)}</div>
        <div class="card-foot"><span class="wl-meta" title="${o(n.formatText||"")}">${J}</span>${h(n)}</div>
        <div class="wl-actions">${b}</div>
      </div>
    </article>`}function u(){const n=(A("#wl-text").value||"").trim().toLowerCase(),M=A("#wl-format").value,O=A("#wl-sort").value,Z=J=>J.market&&J.market.lowest!=null?J.market.lowest:1/0;return y.items.filter(J=>(!n||`${J.artist} ${J.title} ${J.label} ${J.year}`.toLowerCase().includes(n))&&(!M||J.format===M)).sort({priority:(J,ee)=>ee.priority-J.priority||(ee.addedAt||"").localeCompare(J.addedAt||""),added:(J,ee)=>(ee.addedAt||"").localeCompare(J.addedAt||""),artist:(J,ee)=>J.artist.localeCompare(ee.artist,"fr"),price:(J,ee)=>Z(J)-Z(ee)}[O])}function C(){const n=u(),M=y.items.length;let O=0,Z=0;for(const J of y.items)J.market&&J.market.lowest!=null&&(O+=J.market.lowest,Z++);A("#wl-sub").textContent=M?`${M} disque${M>1?"s":""}${Z?` \xB7 environ ${F(O,GV.cur(),0)} au prix le plus bas`:""} \xB7 visible par tes amis`:"",A("#wl-empty").classList.toggle("hidden",M>0),A("#wl-grid").innerHTML=n.map((J,ee)=>v(J,ee)).join("")||(M?'<p class="muted no-match">Aucun disque ne correspond \xE0 ces filtres.</p>':"")}function E(){const n=A("#nav-wish");n&&(n.textContent=y.items.length)}function G(n){if(!n.discogsId)return"";const M=D(n.discogsId);return`<button class="btn ghost small wish-btn ${M?"on":""}" data-wish="${n.discogsId}" title="${M?"Retirer de ta wishlist":"Ajouter \xE0 ta wishlist"}">${q}<span>${M?"Dans ta wishlist":"Wishlist"}</span></button>`}function W(n,M){n.classList.toggle("on",M),n.title=M?"Retirer de ta wishlist":"Ajouter \xE0 ta wishlist",n.querySelector("span").textContent=M?"Dans ta wishlist":"Wishlist"}function w(n){if(!n||!n.discogsId||e(n.discogsId))return"";const M=D(n.discogsId);return`<button class="btn ghost wish-btn ${M?"on":""}" data-act="wish">${q}<span>${M?"Dans ta wishlist":"Ajouter \xE0 ma wishlist"}</span></button>`}async function $(n,M){const O=n.target.closest("[data-w]"),Z=n.target.closest(".wl-card");if(!Z)return;const J=+Z.dataset.did,ee=(M||y.items).find(p=>p.discogsId===J);if(ee){if(!O){T(ee)&&window.vault.openExternal(T(ee));return}switch(n.stopPropagation(),O.dataset.w){case"priority":ee.priority=!ee.priority,await P();break;case"got":await _(J,O);break;case"shop":window.vault.openExternal(f(ee));break;case"discogs":window.vault.openExternal(T(ee));break;case"remove":await k(J),M&&window.Social&&Social.refreshFriendWishlist();break;case"add-friend":{const p={...ee,id:"w"+J,priority:!1,note:"",addedAt:new Date().toISOString()},b=c(p);window.Social&&Social.refreshFriendWishlist(),await b;break}}}}function H(){for(const n of["#wl-text","#wl-format","#wl-sort"])A(n).addEventListener("input",C);A("#wl-grid").addEventListener("click",n=>$(n)),A("#wl-refresh").addEventListener("click",n=>x(n.currentTarget))}async function z(){if(y.items.length)return!1;try{const n=await window.vault.cloud.restoreWishlist();if(n.length)return y.items=n,E(),GV.state.view==="wishlist"&&C(),!0}catch{}return!1}function g(n){y.items=Array.isArray(n)?n:[],H(),E()}window.Wishlist={init:g,render:C,add:L,remove:k,toggle:R,has:D,cardHTML:v,resultBtnHTML:G,setResultBtn:W,detailBtnHTML:w,onGridClick:$,restoreIfEmpty:z,items:()=>y.items}})(),(function(){const{esc:o,money:F,num:A,CONDITIONS:y,TIERS:q,UNKNOWN_TIER:D}=VL,e=(t,r=document)=>r.querySelector(t),T=(t,r=document)=>[...r.querySelectorAll(t)],f={collection:[],settings:{},base:"",view:"collection",tt:null,openId:null,manualCover:null,refreshing:!1},N=()=>f.settings.currency||"EUR",P=t=>VL.estimateValue(t,N()),c=t=>VL.computeRarity(t);function L(t,r="info"){const a=document.createElement("div");a.className=`toast ${r}`,a.innerHTML=`<span class="toast-disc"></span><span>${o(t)}</span>`,e("#toasts").appendChild(a),setTimeout(()=>a.classList.add("out"),3200),setTimeout(()=>a.remove(),3700)}function k(t){return String(t&&t.message||t).replace(/^Error invoking remote method '[^']+': (Error: )?/,"")}function R(t){f.view=t,T(".nav-btn").forEach(a=>a.classList.toggle("active",a.dataset.view===t)),T(".view").forEach(a=>a.classList.toggle("active",a.id===`view-${t}`)),t==="stats"&&he(),t==="profile"&&window.Social&&Social.renderProfile();const r={friend:"profile",album:"reviews"}[t];t==="feed"&&window.Feed&&Feed.render(),t==="news"&&window.News&&News.render(),r&&T(".nav-btn").forEach(a=>a.classList.toggle("active",a.dataset.view===r)),t==="reviews"&&window.Reviews&&Reviews.render(),t==="wishlist"&&window.Wishlist&&Wishlist.render(),t==="add"&&(e("#token-warning").classList.toggle("hidden",!!f.settings.discogsToken),setTimeout(()=>e("#search-q").focus(),50))}function j(){const t=f.collection;let r=0,a=0;for(const S of t){const V=P(S);V&&(r+=V.value,a++)}e("#nav-count").textContent=t.length,e("#side-total").textContent=F(r,N(),0),e("#side-meta").textContent=t.length?`${t.length} disque${t.length>1?"s":""} \xB7 ${a} cot\xE9${a>1?"s":""}`:"Aucun disque"}function x(){const t=e("#filter-tier"),r=t.value;t.innerHTML='<option value="">Toutes raret\xE9s</option>'+[...q].reverse().concat(D).map(B=>`<option value="${B.id}">${B.label}</option>`).join(""),t.value=r;const a=[...new Set(f.collection.flatMap(B=>B.genres||[]))].sort((B,te)=>B.localeCompare(te,"fr")),S=e("#filter-genre"),V=S.value;S.innerHTML='<option value="">Tous genres</option>'+a.map(B=>`<option>${o(B)}</option>`).join(""),S.value=a.includes(V)?V:""}function _(){const t=e("#filter-text").value.trim().toLowerCase(),r=e("#filter-tier").value,a=e("#filter-genre").value,S=e("#filter-format").value,V=e("#sort").value;let B=f.collection.filter(Q=>!(t&&!`${Q.artist} ${Q.title} ${Q.label} ${Q.catno} ${Q.year}`.toLowerCase().includes(t)||r&&c(Q).tier.id!==r||a&&!(Q.genres||[]).includes(a)||S&&(VL.isCD(Q)?"cd":"vinyl")!==S));const te={added:(Q,ne)=>(ne.addedAt||"").localeCompare(Q.addedAt||""),artist:(Q,ne)=>Q.artist.localeCompare(ne.artist,"fr")||(Q.year||0)-(ne.year||0),title:(Q,ne)=>Q.title.localeCompare(ne.title,"fr"),year:(Q,ne)=>(Q.year||9999)-(ne.year||9999),value:(Q,ne)=>((P(ne)||{}).value??-1)-((P(Q)||{}).value??-1),rarity:(Q,ne)=>(c(ne).score??-1)-(c(Q).score??-1)}[V];return B.sort(te)}function h(t,r,a={}){const S=c(t),V=P(t),B=a.foreign?"":f.base,te=a.foreign&&t.discogsId&&f.collection.some(Q=>Q.discogsId===t.discogsId);return`<article class="card tier-${S.tier.id}" data-id="${t.id}" style="--tier:${S.tier.color};--i:${Math.min(r,24)}">
      <div class="card-stage">
        ${VL.vinylHTML(t,B)}
        <div class="sleeve">${VL.sleeveHTML(t,B)}<div class="sleeve-gloss"></div></div>
        <span class="tier-badge"><i></i>${S.tier.label}</span>
        ${te?'<span class="common-badge" title="Tu as aussi ce pressage">En commun</span>':""}
      </div>
      <div class="card-info">
        <div class="card-title" title="${o(t.title)}">${o(t.title)}</div>
        <div class="card-artist">${o(t.artist)}</div>
        <div class="card-foot">
          <span>${o(t.year||"")}${t.vinylColor?' \xB7 <b class="dot-color" style="--c:'+t.vinylColor.primary+'"></b>':""}${v(t,a)}</span>
          <span class="card-price">${V?F(V.value,V.currency):t.needsEnrich?'<span class="price-pending" title="Cote en cours de r\xE9cup\xE9ration">cote\u2026</span>':"-"}</span>
        </div>
      </div>
    </article>`}function v(t,r){if(r.foreign||!window.Reviews)return"";const a=Reviews.ratingFor(t);return!a||a.rating==null&&!a.loved?"":` \xB7 <span class="card-myrating" title="Ta note">${a.rating!=null?"\u2605 "+Reviews.fmtR(a.rating):""}${a.loved?"<i>\u2665</i>":""}</span>`}function u(){const t=_(),r=f.collection.length,a=new Set(f.collection.map(S=>S.artist)).size;e("#collection-sub").textContent=r?`${r} disque${r>1?"s":""} \xB7 ${a} artiste${a>1?"s":""}${t.length!==r?` \xB7 ${t.length} affich\xE9${t.length>1?"s":""}`:""}`:"",e("#empty").classList.toggle("hidden",r>0),e("#grid").classList.toggle("show-tiers",!!e("#filter-tier").value),e("#grid").innerHTML=t.map(h).join("")||(r?'<p class="muted no-match">Aucun disque ne correspond \xE0 ces filtres.</p>':"")}function C(){j(),x(),u(),f.view==="stats"&&he(),window.Social&&Social.scheduleSync()}async function E(t){await window.vault.saveRecord(t);const r=f.collection.findIndex(a=>a.id===t.id);r>=0?f.collection[r]=t:f.collection.unshift(t),window.Social&&Social.scheduleSync()}async function G(t){f.settings=await window.vault.saveSettings(t)}function W(t){const r=[];VL.isCD(t)?r.push("CD"):(r.push(`${t.sizeInch||12}"`),r.push(t.rpm===45?"45 tours":t.rpm===78?"78 tours":"33\u2153 tours")),t.discs>1&&r.push(`${t.discs} ${VL.isCD(t)?"CD":"disques"}`);for(const S of t.formatDescriptions||[])/^(\d+"|LP|33 ⅓ RPM|45 RPM|78 RPM)$/.test(S)||r.push(S);let a=r.map(S=>`<span class="chip">${o(S)}</span>`).join("");return t.vinylColor&&(a+=`<span class="chip color" style="--c:${t.vinylColor.primary}"><i></i>${o(t.vinylColor.label||"Vinyle color\xE9")}</span>`),a}function w(t){const r=c(t),a=t.community,S=t.market;if(r.score==null)return`<div class="d-section rarity-block" style="--tier:${D.color}">
        <div class="section-title">Raret\xE9</div>
        <p class="muted">Pas de donn\xE9es communautaires pour ce disque.${t.discogsId?"":" Les disques saisis \xE0 la main ne sont pas \xE9valu\xE9s."}</p>
      </div>`;const V=q.map((te,Q)=>{const ne=(q[Q+1]?q[Q+1].min:100)-te.min;return`<span class="seg-t ${r.score>=te.min?"on":""}" style="--c:${te.color};flex:${ne} 0 0" title="${te.label} (\u2265 ${te.min})"></span>`}).join(""),B=a.have?a.want/a.have:0;return`<div class="d-section rarity-block" style="--tier:${r.tier.color}">
      <div class="section-title">Raret\xE9</div>
      <div class="rarity-top">
        <div class="rarity-score"><b>${r.score}</b><small>/100</small></div>
        <div>
          <div class="rarity-tier">${r.tier.label}</div>
          <div class="muted small">Indice calcul\xE9 \xE0 partir du march\xE9 Discogs</div>
        </div>
      </div>
      <div class="rarity-meter">${V}<span class="rarity-marker" style="left:${r.score}%"></span></div>
      <div class="mini-stats">
        <div><b>${A(a.have)}</b><span>poss\xE8dent ce pressage</span></div>
        <div><b>${A(a.want)}</b><span>le recherchent</span></div>
        <div><b>${S?A(S.numForSale):"-"}</b><span>en vente actuellement</span></div>
        <div><b>${B.toFixed(2)}</b><span>recherch\xE9 / poss\xE9d\xE9</span></div>
      </div>
      ${a.ratingCount?`<div class="muted small rating">Note communaut\xE9 : <b>${a.rating.toFixed(2)}</b> / 5 (${A(a.ratingCount)} votes)</div>`:""}
    </div>`}function $(t){const r=P(t),a=t.market,S=t.condition&&t.condition.media||"VG+",V=r?r.basis==="manual"?"Valeur saisie manuellement":r.basis==="suggestion"?`Prix conseill\xE9 par Discogs pour un \xE9tat ${S}`:`Estimation \xE0 partir du prix plancher Discogs, ajust\xE9e pour un \xE9tat ${S}`:"Aucune donn\xE9e de prix.",B=f.readOnly,te=t.purchasePrice!=null&&t.purchasePrice!==""?+t.purchasePrice:null,Q=r&&te!=null?r.value-te:null;let ne="";a&&a.suggestions&&(ne=`<div class="sugg">${y.filter(le=>a.suggestions[le.code]).map(le=>`<div class="${le.code===S?"cur":""}"><span>${le.code}</span><b>${F(a.suggestions[le.code].value,a.suggestions[le.code].currency)}</b></div>`).join("")}</div>`);const ge=a&&a.updatedAt?`Cote mise \xE0 jour le ${new Date(a.updatedAt).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"})}`:"";return`<div class="section-title">Cote</div>
      <div class="value-wrap">
        <div class="value-main">
          <div class="value-label">Valeur de ${B?"son":"ton"} exemplaire</div>
          <div class="value-big">${r?F(r.value,r.currency):"-"}</div>
          <div class="muted small">${V}</div>
        </div>
        <div class="value-side">
          <div><span>Prix plancher</span><b>${a&&a.lowest!=null?F(a.lowest,a.currency):"-"}</b></div>
          ${B?`<div><span>\xC9tat</span><b>${o(S)}</b></div>`:`
          <div><span>Achet\xE9</span><b>${te!=null?F(te,N()):"-"}</b></div>
          <div><span>Plus-value</span><b class="${Q==null?"":Q>=0?"up":"down"}">${Q==null?"-":(Q>=0?"+":"")+F(Q,N())}</b></div>`}
        </div>
      </div>
      ${ne}
      ${a&&a.blocked?'<div class="warn small">Ce disque est bloqu\xE9 \xE0 la vente sur Discogs.</div>':""}
      <div class="value-foot">
        <span class="muted small">${ge}</span>
        ${t.discogsId&&!B?'<button class="btn ghost small" data-act="refresh"><svg viewBox="0 0 24 24"><path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/></svg>Actualiser la cote</button>':""}
      </div>`}function H(t){return y.map(r=>`<option value="${r.code}" ${r.code===t?"selected":""}>${r.label}</option>`).join("")}function z(t){const r=t.condition||{},a=t.vinylColor;return`<div class="section-title">Mon exemplaire</div>
      <div class="copy-grid">
        <label>\xC9tat du disque<select data-f="media">${H(r.media||"VG+")}</select></label>
        <label>\xC9tat de la pochette<select data-f="sleeve">${H(r.sleeve||"VG+")}</select></label>
        <label>Prix d'achat (${N()})<input data-f="purchasePrice" type="number" min="0" step="0.01" value="${o(t.purchasePrice??"")}"></label>
        <label>Valeur perso (${N()})<input data-f="manualValue" type="number" min="0" step="0.01" placeholder="auto" value="${o(t.manualValue??"")}"></label>
        ${VL.isCD(t)?"":`<label class="color-row">Couleur du vinyle
          <span><input type="checkbox" data-f="colored" ${a?"checked":""}>
          <input type="color" data-f="color" value="${a?a.primary:"#b3142f"}">
          <label class="check tiny"><input type="checkbox" data-f="clear" ${a&&a.clear?"checked":""}>translucide</label></span>
        </label>`}
        <label class="span2">Notes<textarea data-f="notes" rows="2" placeholder="Pressage, provenance, anecdotes\u2026">${o(t.notes||"")}</textarea></label>
      </div>`}function g(t){const r=window.Reviews&&Reviews.ratingFor(t);return`<button class="btn primary rate-btn" data-act="review"><svg viewBox="0 0 24 24"><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z"/></svg>${r&&r.rating!=null?`Ta note ${Reviews.starsHTML(r.rating,"xs")}`:r?"Ta critique":"Noter l'album"}</button>`}function n(t){const r=[t.label,t.catno,t.country,t.released||t.year].filter(Boolean).map(o).join(" \xB7 "),a=[...t.genres||[],...t.styles||[]],S=t.tracklist||[];return`
      <div class="d-head">
        <div class="chips">${W(t)}</div>
        <div class="d-artist">${o(t.artist)}</div>
        <h2 class="d-title">${o(t.title)}</h2>
        <div class="d-meta">${r}</div>
      </div>
      ${w(t)}
      <div class="d-section" id="d-value">${$(t)}</div>
      ${f.readOnly?"":`<div class="d-section" id="d-copy">${z(t)}</div>`}
      ${a.length?`<div class="d-section"><div class="section-title">Genres & styles</div><div class="tags">${a.map(V=>`<span class="tag">${o(V)}</span>`).join("")}</div></div>`:""}
      ${S.length?`<div class="d-section"><div class="section-title">Pistes <small>${S.length}</small></div>
        <ol class="tracks">${S.map(V=>`<li><span class="pos">${o(V.position)}</span><span class="tt">${o(V.title)}</span><span class="dur">${o(V.duration||"")}</span></li>`).join("")}</ol></div>`:""}
      <div class="d-actions">
        <span class="d-actions-left">${g(t)}${t.discogsUrl?'<button class="btn ghost" data-act="discogs">Voir sur Discogs \u2197</button>':""}</span>
        ${f.readOnly?Wishlist.detailBtnHTML(t):'<button class="btn danger" data-act="delete">Retirer de la collection</button>'}
      </div>`}function M(t,r={}){const a=r.rec||f.collection.find(Q=>Q.id===t);if(!a)return;f.openId=a.id,f.openRec=a,f.readOnly=!!r.readOnly;const S=f.readOnly?"":f.base,V=VL.coverUrl(a,S),B=e("#detail");B.innerHTML=`
      <div class="detail-backdrop" data-act="close"></div>
      <div class="detail-panel" style="--tier:${c(a).tier.color}">
        <div class="detail-ambient" ${V?`style="background-image:url('${V}')"`:`style="--h:${VL.hashHue(a.artist+a.title)}" data-gen="1"`}></div>
        <button class="detail-close" data-act="close" title="Fermer (\xC9chap)">\u2715</button>
        <div class="detail-left"><div class="tt-host"></div></div>
        <div class="detail-right">${n(a)}</div>
      </div>`,B.classList.remove("hidden"),requestAnimationFrame(()=>B.classList.add("open"));const te=VL.isCD(a)?CdPlayer:Turntable;f.tt=new te(e(".tt-host",B),a,S,{...f.settings}),f.tt.onSettings=Q=>G(Q),setTimeout(()=>{f.tt&&f.openRec===a&&f.tt.play()},1e3)}function O(){const t=e("#detail");f.openId&&(f.tt&&(f.tt.destroy(),f.tt=null),f.openId=null,f.openRec=null,f.readOnly=!1,t.classList.remove("open"),setTimeout(()=>{f.openId||(t.classList.add("hidden"),t.innerHTML="")},350))}let Z=null;function J(t){if(f.readOnly)return;const r=f.collection.find(B=>B.id===f.openId);if(!r)return;const a=t.target.dataset.f;if(!a)return;const S=e("#d-copy"),V=B=>e(`[data-f="${B}"]`,S);if(r.condition={media:V("media").value,sleeve:V("sleeve").value},r.purchasePrice=V("purchasePrice").value===""?null:+V("purchasePrice").value,r.manualValue=V("manualValue").value===""?null:+V("manualValue").value,r.notes=V("notes").value,["colored","color","clear"].includes(a)){r.vinylColorEdited=!0,a!=="colored"&&!V("colored").checked&&(V("colored").checked=!0),r.vinylColor=V("colored").checked?{...r.vinylColor||{},primary:V("color").value,clear:V("clear").checked,label:r.vinylColor&&r.vinylColor.label||"Vinyle color\xE9"}:null;const B=e(".tt-record");B&&(B.innerHTML=VL.vinylHTML(r,f.base,{noShine:!0})),e(".chips").innerHTML=W(r)}e("#d-value").innerHTML=$(r),clearTimeout(Z),Z=setTimeout(async()=>{await E(r),j(),u()},350)}async function ee(t,r=!1){const a=await window.vault.refreshMarket(t.discogsId);t.market=a.market,t.community=a.community,await E(t),r||L(`Cote de \xAB ${t.title} \xBB mise \xE0 jour`,"ok")}async function p(t){const r=t.target.closest("[data-act]");if(!r)return;const a=f.openRec;switch(r.dataset.act){case"close":O();break;case"review":{const S=f.view;O(),Reviews.openForRecord(a,{returnTo:S});break}case"discogs":window.vault.openExternal(a.discogsUrl);break;case"wish":{const S=await Wishlist.toggle(a);r.classList.toggle("on",S),r.querySelector("span").textContent=S?"Dans ta wishlist":"Ajouter \xE0 ma wishlist";break}case"refresh":r.disabled=!0,r.classList.add("loading");try{await ee(a),e(".detail-right").innerHTML=n(a),C()}catch(S){L(k(S),"error"),r.disabled=!1,r.classList.remove("loading")}break;case"delete":r.dataset.confirm?(await window.vault.deleteRecord(a.id),f.collection=f.collection.filter(S=>S.id!==a.id),O(),C(),L(`\xAB ${a.title} \xBB retir\xE9 de la collection`)):(r.dataset.confirm="1",r.textContent="Confirmer la suppression",setTimeout(()=>{r.isConnected&&(delete r.dataset.confirm,r.textContent="Retirer de la collection")},3500));break}}async function b(){if(f.refreshing)return;if(!f.settings.discogsToken){L("Ajoute ton jeton Discogs dans R\xE9glages","error");return}const t=f.collection.filter(V=>V.discogsId);if(!t.length){L("Aucun disque li\xE9 \xE0 Discogs");return}f.refreshing=!0;const r=e("#refresh-all");r.classList.add("loading");const a=e("span",r);let S=0;for(let V=0;V<t.length;V++){a.textContent=`Actualisation ${V+1}/${t.length}\u2026`;try{await ee(t[V],!0),S++}catch(B){if(/401|403/.test(k(B))){L(k(B),"error");break}}j(),V<t.length-1&&await new Promise(B=>setTimeout(B,3100))}f.refreshing=!1,r.classList.remove("loading"),a.textContent="Actualiser les cotes",C(),L(`${S} cote${S>1?"s":""} mise${S>1?"s":""} \xE0 jour`,"ok")}function U(t){const r=f.collection.some(a=>a.discogsId===t.discogsId);return`<div class="result" data-did="${t.discogsId}">
      <div class="result-cover">${t.thumb?`<img src="${o(t.thumb)}" alt="" loading="lazy">`:VL.generatedCover(t)}</div>
      <div class="result-body">
        <div class="result-title">${o(t.title)}</div>
        <div class="result-artist">${o(t.artist)}</div>
        <div class="result-meta">${[t.year,t.country,t.label,t.catno].filter(Boolean).map(o).join(" \xB7 ")}</div>
        <div class="result-format">${o(t.format)}</div>
        ${t.have!=null?`<div class="result-comm"><span>${A(t.have)} poss\xE8dent</span><span>${A(t.want)} recherchent</span></div>`:""}
      </div>
      <div class="result-btns">
        <button class="btn ${r?"done":"primary"} small" data-add="${t.discogsId}" ${r?"disabled":""}>${r?"Dans ta collection \u2713":"Ajouter"}</button>
        ${r?"":Wishlist.resultBtnHTML(t)}
      </div>
    </div>`}async function K(t){t.preventDefault();const r=e("#search-q").value.trim();if(!r)return;const a=e("#search-barcode").checked,S=e("#results");S.innerHTML='<div class="loader"><div class="loader-disc"></div><span>Recherche dans Discogs\u2026</span></div>';try{const V=e("#search-format").value,B=await window.vault.search(a?{barcode:r,format:V}:{q:r,format:V});f.results=B.results,S.innerHTML=B.results.length?B.results.map(U).join(""):'<p class="muted no-match">Aucun disque trouv\xE9. Essaie avec moins de mots, v\xE9rifie le support choisi, ou colle directement le lien Discogs du disque.</p>'}catch(V){S.innerHTML=`<p class="warn">${o(k(V))}</p>`}}async function X(t){const r=await window.vault.importRelease(t),a={id:crypto.randomUUID(),...r,condition:{media:"VG+",sleeve:"VG+"},purchasePrice:null,manualValue:null,notes:"",addedAt:new Date().toISOString()};return await E(a),C(),a}async function Y(t){const r=+t.dataset.add;t.disabled=!0,t.classList.add("loading"),t.textContent="R\xE9cup\xE9ration\u2026";try{const a=await X(r);if(Wishlist.has(r)){await Wishlist.remove(r,!0);const V=t.parentElement.querySelector(".wish-btn");V&&V.remove()}t.classList.remove("loading","primary"),t.classList.add("done"),t.textContent="Dans ta collection \u2713";const S=c(a);L(`\xAB ${a.title} \xBB ajout\xE9 \xB7 ${S.tier.label}`,"ok")}catch(a){t.disabled=!1,t.classList.remove("loading"),t.textContent="R\xE9essayer",L(k(a),"error")}}function ie(){const t=e("#manual-form");t.classList.toggle("is-cd",t.format.value==="cd");const r={artist:t.artist.value||"Artiste",title:t.title.value||"Titre",coverFile:f.manualCover,format:t.format.value,sizeInch:+t.sizeInch.value,vinylColor:t.colored.checked?{primary:t.color.value}:null};e("#manual-preview").innerHTML=`<div class="card-stage preview">${VL.vinylHTML(r,f.base)}<div class="sleeve">${VL.sleeveHTML(r,f.base)}<div class="sleeve-gloss"></div></div></div>`}async function de(t){t.preventDefault();const r=t.target,a=V=>V===""?null:+V,S={id:crypto.randomUUID(),discogsId:null,artist:r.artist.value.trim(),title:r.title.value.trim(),year:a(r.year.value)||"",country:r.country.value.trim(),label:r.label.value.trim(),catno:r.catno.value.trim(),genres:r.genres.value.split(",").map(V=>V.trim()).filter(Boolean),styles:[],formatDescriptions:[],format:r.format.value,sizeInch:r.format.value==="cd"?12:+r.sizeInch.value,rpm:r.format.value==="cd"?null:+r.rpm.value,discs:1,vinylColor:r.colored.checked&&r.format.value!=="cd"?{primary:r.color.value,label:"Vinyle color\xE9"}:null,tracklist:[],coverFile:f.manualCover,community:null,market:null,condition:{media:r.media.value,sleeve:r.media.value},purchasePrice:a(r.purchasePrice.value),manualValue:a(r.manualValue.value),notes:r.notes.value,addedAt:new Date().toISOString()};await E(S),r.reset(),f.manualCover=null,ie(),C(),L(`\xAB ${S.title} \xBB ajout\xE9 \xE0 la collection`,"ok")}function ue(t,r={}){const a=Math.max(1,...t.map(V=>V.value)),S=t.reduce((V,B)=>V+B.value,0)||1;return`<div class="bars">${t.map(V=>`
      <div class="bar-row" title="${o(V.label)} : ${V.value} disque${V.value>1?"s":""} (${Math.round(V.value/S*100)} %)">
        <span class="bar-label">${V.dot?`<i style="background:${V.dot}"></i>`:""}${o(V.label)}</span>
        <span class="bar-track"><span class="bar-fill" style="width:${V.value/a*100}%;${V.color?`--bar:${V.color}`:""}"></span></span>
        <span class="bar-val">${r.fmt?r.fmt(V.value):V.value}</span>
      </div>`).join("")}</div>`}function pe(t,r){return`<ol class="top-list">${t.map(a=>`
      <li data-open="${a.id}">
        <span class="top-cover">${VL.sleeveHTML(a,f.base)}</span>
        <span class="top-text"><b>${o(a.title)}</b><small>${o(a.artist)}${a.year?" \xB7 "+o(a.year):""}</small></span>
        <span class="top-right">${r(a)}</span>
      </li>`).join("")}</ol>`}function he(){const t=f.collection,r=e("#stats");if(!t.length){r.innerHTML='<p class="muted">Ajoute des disques pour voir tes statistiques.</p>';return}let a=0,S=0,V=0,B=0,te=0;for(const m of t){const I=P(m);I&&(a+=I.value,te++),m.purchasePrice!=null&&(S+=+m.purchasePrice,I&&(V+=+m.purchasePrice,B+=I.value))}const Q=B-V,ne=[...q].reverse().concat(D).map(m=>({label:m.label,value:t.filter(I=>c(I).tier.id===m.id).length,color:m.color,dot:m.color})).filter(m=>m.value>0),ge={};t.forEach(m=>(m.genres||[]).forEach(I=>{ge[I]=(ge[I]||0)+1}));const le=Object.entries(ge).sort((m,I)=>I[1]-m[1]).slice(0,8).map(([m,I])=>({label:m,value:I})),be={};t.forEach(m=>{if(m.year){const I=Math.floor(m.year/10)*10;be[I]=(be[I]||0)+1}});const $e=t.filter(m=>VL.isCD(m)).length,s=[{label:"Vinyles",value:t.length-$e},{label:"CD",value:$e}].filter(m=>m.value>0),i=Object.keys(be).sort().map(m=>({label:m<2e3?`Ann\xE9es ${String(m).slice(-2)}`:`Ann\xE9es ${m}`,value:be[m]})),l=t.filter(m=>P(m)).sort((m,I)=>P(I).value-P(m).value).slice(0,5),d=t.filter(m=>c(m).score!=null).sort((m,I)=>c(I).score-c(m).score).slice(0,5);r.innerHTML=`
      <div class="metrics">
        <div class="metric"><span>Disques</span><b>${A(t.length)}</b><small>${new Set(t.map(m=>m.artist)).size} artistes</small></div>
        <div class="metric accent"><span>Valeur estim\xE9e</span><b>${F(a,N(),0)}</b><small>${te} disque${te>1?"s":""} cot\xE9${te>1?"s":""}</small></div>
        <div class="metric"><span>Investi</span><b>${F(S,N(),0)}</b><small>prix d'achat renseign\xE9s</small></div>
        <div class="metric"><span>Plus-value</span><b class="${Q>=0?"up":"down"}">${(Q>=0?"+":"")+F(Q,N(),0)}</b><small>sur les disques achet\xE9s et cot\xE9s</small></div>
        <div class="metric"><span>Valeur moyenne</span><b>${F(te?a/te:0,N())}</b><small>par disque cot\xE9</small></div>
      </div>
      <div class="stats-grid">
        <div class="card-panel"><h3>Supports</h3>${ue(s)}</div>
        <div class="card-panel"><h3>Raret\xE9</h3>${ue(ne)}</div>
        <div class="card-panel"><h3>Genres</h3>${le.length?ue(le):'<p class="muted">-</p>'}</div>
        <div class="card-panel"><h3>D\xE9cennies</h3>${i.length?ue(i):'<p class="muted">-</p>'}</div>
        <div class="card-panel"><h3>Les plus pr\xE9cieux</h3>${pe(l,m=>{const I=P(m);return F(I.value,I.currency)})}</div>
        <div class="card-panel"><h3>Les plus rares</h3>${d.length?pe(d,m=>{const I=c(m);return`<span class="tier-pill" style="--tier:${I.tier.color}">${I.score}</span>`}):'<p class="muted">-</p>'}</div>
      </div>`}function Le(){const t=f.settings;e("#set-token").value=t.discogsToken||"",e("#set-currency").value=t.currency||"EUR",e("#set-crackle").checked=!!t.crackle,e("#set-volume").value=t.crackleVolume??.35,e("#token-status").textContent=t.discogsToken?"Jeton enregistr\xE9.":"Aucun jeton enregistr\xE9.",e("#tier-legend").innerHTML=q.map((r,a)=>{const S=q[a+1];return`<span class="tier-pill" style="--tier:${r.color}">${r.label} <small>${r.min}-${S?S.min-1:100}</small></span>`}).join("")}async function ke(){const t=e("#set-token").value.trim(),r=e("#token-status");if(!t){await G({discogsToken:""}),r.textContent="Jeton supprim\xE9.";return}r.textContent="V\xE9rification aupr\xE8s de Discogs\u2026";try{const a=await window.vault.testToken(t);await G({discogsToken:t}),r.innerHTML=`Connect\xE9 en tant que <b>${o(a)}</b> \u2713`,L("Jeton Discogs enregistr\xE9","ok")}catch(a){r.textContent=k(a)}}function we(){T(".nav-btn").forEach(a=>a.addEventListener("click",()=>R(a.dataset.view))),document.addEventListener("click",a=>{const S=a.target.closest("[data-goto]");S&&(a.preventDefault(),R(S.dataset.goto));const V=a.target.closest("[data-open]");V&&M(V.dataset.open)}),["#filter-text","#filter-tier","#filter-genre","#filter-format","#sort"].forEach(a=>e(a).addEventListener("input",u)),e("#grid").addEventListener("click",a=>{const S=a.target.closest(".card");S&&M(S.dataset.id)}),e("#refresh-all").addEventListener("click",b);const t=e("#detail");t.addEventListener("click",p),t.addEventListener("input",a=>{a.target.closest("#d-copy")&&J(a)}),document.addEventListener("keydown",a=>{a.key==="Escape"&&O()}),T("#add-tabs button").forEach(a=>a.addEventListener("click",()=>{T("#add-tabs button").forEach(S=>S.classList.toggle("active",S===a)),T("#view-add .tab").forEach(S=>S.classList.toggle("active",S.id===`tab-${a.dataset.tab}`)),a.dataset.tab==="manual"&&ie(),a.dataset.tab==="import"&&Importer.renderTab()})),e("#search-form").addEventListener("submit",K),e("#results").addEventListener("click",a=>{const S=a.target.closest("[data-add]");S&&Y(S);const V=a.target.closest("[data-wish]");if(V){const B=(f.results||[]).find(te=>te.discogsId===+V.dataset.wish);B&&Wishlist.toggle(B).then(te=>Wishlist.setResultBtn(V,te))}});const r=e("#manual-form");r.media.innerHTML=H("VG+"),r.addEventListener("input",ie),r.addEventListener("submit",de),e("#manual-pick").addEventListener("click",async()=>{const a=await window.vault.pickCover();a&&(f.manualCover=a,ie())}),e("#save-token").addEventListener("click",ke),e("#open-token-page").addEventListener("click",a=>{a.preventDefault(),window.vault.openExternal("https://www.discogs.com/settings/developers")}),e("#set-currency").addEventListener("change",async a=>{await G({currency:a.target.value}),C(),L("Devise mise \xE0 jour. Actualise les cotes pour convertir les prix du march\xE9.")}),e("#set-crackle").addEventListener("change",a=>G({crackle:a.target.checked})),e("#set-volume").addEventListener("change",a=>G({crackleVolume:+a.target.value})),e("#export").addEventListener("click",async()=>{await window.vault.exportData()&&L("Collection export\xE9e","ok")}),e("#import").addEventListener("click",async()=>{try{const a=await window.vault.importData();if(!a)return;f.collection=a.collection,C(),L(`${a.added} disque${a.added>1?"s":""} import\xE9${a.added>1?"s":""}`,"ok")}catch(a){L(k(a),"error")}})}async function Me(){const t=await window.vault.init();f.collection=t.collection,f.settings=t.settings,f.base=t.coversBaseUrl,we(),Le(),Wishlist.init(t.wishlist),C(),Reviews.init(),Feed.init(),Social.init(),Importer.init(),Updater.init(),News.init()}window.GV={state:f,toast:L,errMsg:k,go:R,persist:E,importToCollection:X,cardHTML:h,openDetail:M,renderAll:C,renderSidebar:j,renderCollection:u,valueOf:P,rarityOf:c,cur:N,summary(){let t=0;for(const r of f.collection){const a=P(r);a&&(t+=a.value)}return{count:f.collection.length,value:t,currency:N()}}},Me()})();
