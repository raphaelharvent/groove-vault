(function(){const o=(f,n=document)=>n.querySelector(f),H=(f,n=document)=>[...n.querySelectorAll(f)],G=["profile","stats","news","settings"],w=window.matchMedia("(max-width: 860px)"),V=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,C=()=>window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0;document.documentElement.classList.toggle("is-standalone",C());const e=o(".nav"),T=new Map,m=f=>{f&&!T.has(f)&&T.set(f,[f.parentNode,f.nextSibling])},B=document.createElement("button");B.className="nav-btn m-more",B.innerHTML='<svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg><span>Plus</span><i class="hidden"></i>';const j=document.createElement("div");j.className="m-sheet",j.innerHTML='<div class="m-sheet-backdrop"></div><div class="m-sheet-panel"><div class="m-sheet-grid"></div></div>',document.body.appendChild(j);const h=o(".m-sheet-grid",j),I=o(".m-sheet-panel",j),S=()=>G.map(f=>o(`.nav-btn[data-view="${f}"]`)).filter(Boolean),O=f=>j.classList.toggle("open",f),N={feed:"Actu"},x=(f,n)=>{const L=o(`.nav-btn[data-view="${f}"] span`);L&&(L.dataset.full||(L.dataset.full=L.textContent),L.textContent=n?N[f]:L.dataset.full)};function P(){Object.keys(N).forEach(f=>x(f,!0));for(const f of S())m(f),h.appendChild(f);for(const f of[o("#side-profile"),o(".side-value")])m(f),f&&I.appendChild(f);e.appendChild(B)}function b(){Object.keys(N).forEach(f=>x(f,!1)),O(!1),B.remove();for(const[f,[n,L]]of[...T.entries()].reverse())n.insertBefore(f,L&&L.parentNode===n?L:null);T.clear()}const p=()=>w.matches?P():b();p(),w.addEventListener("change",p),B.addEventListener("click",()=>O(!j.classList.contains("open"))),j.addEventListener("click",f=>{(f.target.closest(".m-sheet-backdrop")||f.target.closest(".nav-btn")||f.target.closest("[data-goto]"))&&O(!1)});const u=()=>{B.classList.toggle("active",S().some(n=>n.classList.contains("active")));const f=["#nav-requests","#nav-news"].some(n=>{const L=o(n);return L&&!L.classList.contains("hidden")});o("i",B).classList.toggle("hidden",!f)};new MutationObserver(u).observe(document.body,{subtree:!0,attributes:!0,attributeFilter:["class"]});let q=null;window.addEventListener("beforeinstallprompt",f=>{f.preventDefault(),q=f,A()}),window.addEventListener("appinstalled",()=>{q=null,W()});const E='<svg viewBox="0 0 24 24"><path d="M12 15V3M7.5 7.5 12 3l4.5 4.5"/><path d="M8 11H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-2"/></svg>',R='<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8.5v7M8.5 12h7"/></svg>';function J(){const f=document.createElement("div");f.className="m-guide";const n=V?`<li><span>Touche ${E} <b>Partager</b> en bas de Safari (ou dans le menu <b>\u22EF</b>)</span></li>
         <li><span>Choisis ${R} <b>Sur l'\xE9cran d'accueil</b>, puis <b>Ajouter</b></span></li>`:`<li><span>Ouvre le menu du navigateur <b>\u22EE</b></span></li>
         <li><span>Choisis <b>Installer l'application</b> ou <b>Ajouter \xE0 l'\xE9cran d'accueil</b></span></li>`;f.innerHTML=`<div class="m-guide-backdrop"></div>
      <div class="m-guide-card">
        <h2>Installer Groove Vault</h2>
        <ol>${n}</ol>
        <p class="muted small">Groove Vault aura son ic\xF4ne et s'ouvrira en plein \xE9cran, comme une appli.</p>
        <button class="btn primary" type="button">J'ai compris</button>
        ${V?'<span class="m-guide-arrow">\u2193</span>':""}
      </div>`,f.addEventListener("click",L=>{(L.target.closest(".btn")||L.target.closest(".m-guide-backdrop"))&&f.remove()}),document.body.appendChild(f)}async function $(){if(q){q.prompt();const{outcome:f}=await q.userChoice.catch(()=>({}));q=null,f==="accepted"&&W();return}J()}window.GVInstall=$;let y=null;function A(){if(C()||y||localStorage.getItem("gv-install-hidden"))return;y=document.createElement("div"),y.className="m-install",y.innerHTML=`<img src="icons/apple-touch-icon.png" alt="">
      <div><b>Installe l'appli</b>Groove Vault sur ton \xE9cran d'accueil, en plein \xE9cran.</div>
      <button class="btn primary small" type="button">Installer</button>
      <button class="m-install-x" type="button" title="Masquer">\u2715</button>`,y.querySelector(".btn").addEventListener("click",$),y.querySelector(".m-install-x").addEventListener("click",()=>{localStorage.setItem("gv-install-hidden","1"),W()});const f=o("#view-collection .view-head");f&&f.after(y)}function W(){y&&(y.remove(),y=null)}w.matches&&!C()&&A(),location.hash==="#installer"&&!C()&&setTimeout($,600),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("sw.js").then(f=>{f.addEventListener("updatefound",()=>{const n=f.installing;n&&n.addEventListener("statechange",()=>{n.state==="activated"&&navigator.serviceWorker.controller&&document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&location.reload()},{once:!0})})}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&f.update().catch(()=>{})})}).catch(()=>{})})})(),(function(){const o=b=>String(b??"").replace(/[&<>"']/g,p=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[p]),H=[{code:"M",label:"Mint (M)",factor:1.5},{code:"NM",label:"Near Mint (NM)",factor:1.3},{code:"VG+",label:"Very Good Plus (VG+)",factor:1},{code:"VG",label:"Very Good (VG)",factor:.6},{code:"G+",label:"Good Plus (G+)",factor:.4},{code:"G",label:"Good (G)",factor:.3},{code:"F",label:"Fair (F)",factor:.15},{code:"P",label:"Poor (P)",factor:.1}],G=[{id:"commun",label:"Commun",min:0,color:"#9ba3ad"},{id:"peu-commun",label:"Peu commun",min:25,color:"#4cc38a"},{id:"rare",label:"Rare",min:45,color:"#4ea3f5"},{id:"tres-rare",label:"Tr\xE8s rare",min:62,color:"#b884ff"},{id:"legendaire",label:"L\xE9gendaire",min:80,color:"#f5b942"}],w={id:"inconnue",label:"Non \xE9valu\xE9e",min:-1,color:"#6f6458"},V=(b,p=0,u=1)=>Math.min(u,Math.max(p,b));function C(b,p="EUR",u){if(b==null||isNaN(b))return"-";const q=u??(b>=1e3?0:2);try{return new Intl.NumberFormat("fr-FR",{style:"currency",currency:p,minimumFractionDigits:q,maximumFractionDigits:q}).format(b)}catch{return`${b.toFixed(q)} ${p}`}}const e=b=>new Intl.NumberFormat("fr-FR").format(b||0);function T(b,p){if(b.manualValue!=null&&b.manualValue!=="")return{value:+b.manualValue,currency:p,basis:"manual"};const u=b.market;if(!u)return null;const q=b.condition&&b.condition.media||"VG+";if(u.suggestions&&u.suggestions[q])return{value:u.suggestions[q].value,currency:u.suggestions[q].currency,basis:"suggestion"};if(u.lowest!=null){const E=(H.find(R=>R.code===q)||H[2]).factor;return{value:u.lowest*E,currency:u.currency||p,basis:"floor"}}return null}function m(b){const p=b.community;if(!p||!p.have&&!p.want)return{score:null,tier:w,parts:null};const u=p.have||0,q=p.want||0,E=b.market&&b.market.numForSale||0,R=b.market&&b.market.lowest!=null?b.market.lowest:0,J=1-V(Math.log10(u+1)/4.5),$=V(q/(u+1)/3),y=E===0?1:1-V(Math.log10(E+1)/2.5),A=V(Math.log10(R+1)/3),W=Math.round(100*(.35*J+.25*$+.2*y+.2*A));let f=G[0];for(const n of G)W>=n.min&&(f=n);return{score:W,tier:f,parts:{scarcity:J,demand:$,supply:y,pricey:A}}}function B(b){let p=0;for(const u of String(b))p=p*31+u.charCodeAt(0)>>>0;return p%360}function j(b){return`<div class="gen-cover" style="--h:${B(b.artist+b.title)}">
      <span class="gen-artist">${o(b.artist)}</span>
      <span class="gen-title">${o(b.title)}</span>
    </div>`}function h(b,p){return b.coverFile&&/^data:image\/(jpeg|png|webp);base64,/.test(b.coverFile)?b.coverFile:b.coverFile&&p?p+encodeURIComponent(b.coverFile):b.coverRemote&&/^https:\/\//.test(b.coverRemote)?b.coverRemote:""}function I(b,p=40,u=""){const q=b&&b.username||"?",E=b&&b.avatar_url;return E&&/^https:\/\//.test(E)?`<span class="avatar ${u}" style="--s:${p}px"><img src="${o(E)}" alt="" draggable="false"></span>`:`<span class="avatar ${u}" style="--s:${p}px;--h:${B(q)}"><b>${o(q.slice(0,2).toUpperCase())}</b></span>`}const S=b=>b&&b.format==="cd";function O(b,p={}){const u=`GV-${String(B(b.artist+b.title)*37+1e3).slice(0,4)} ${String(b.catno||"").slice(0,12)}`.trim();return`<div class="vinyl cd ${p.cls||""}">
      <div class="vinyl-disc">
        <div class="cd-tracks"></div>
        <div class="cd-mirror"><span>${o(u.toUpperCase())}</span></div>
        <div class="cd-hub"></div>
      </div>
      <div class="cd-rainbow"></div>
      <div class="vinyl-hole cd-hole"></div>
    </div>`}function N(b,p,u={}){if(S(b))return O(b,u);const q=h(b,p),E=b.vinylColor,R=["vinyl"],J=[];E&&(R.push("colored"),E.clear&&R.push("clear"),E.effect&&R.push("fx-"+E.effect),J.push(`--v-base:${E.primary}`),J.push(`--v-sec:${E.secondary||(E.clear?"#ffffff":"#111111")}`)),b.sizeInch===7&&R.push("single"),u.cls&&R.push(u.cls);const $=B(b.artist+b.title),y=q?`style="background-image:url('${q}')"`:`style="--h:${$}" data-gen="1"`;return`<div class="${R.join(" ")}" style="${J.join(";")}">
      <div class="vinyl-disc">
        <div class="vinyl-grooves"></div>
        <div class="vinyl-label" ${y}>${q?"":`<span>${o(b.title)}</span>`}</div>
        <div class="vinyl-hole"></div>
      </div>
      ${u.noShine?"":'<div class="vinyl-shine"></div>'}
    </div>`}function x(b,p){const u=h(b,p);return u?`<img src="${u}" alt="" loading="lazy" draggable="false" data-artist="${o(b.artist)}" data-title="${o(b.title)}">`:j(b)}document.addEventListener("error",b=>{const p=b.target;if(!(p instanceof HTMLImageElement)||!p.dataset.title)return;const u=document.createElement("div");u.style.cssText="width:100%;height:100%",u.innerHTML=j({artist:p.dataset.artist,title:p.dataset.title}),p.replaceWith(u.firstElementChild)},!0);class P{constructor(){this.ctx=null,this.src=null,this.gain=null}buildBuffer(p){const q=p.sampleRate*6,E=p.createBuffer(2,q,p.sampleRate);for(let R=0;R<2;R++){const J=E.getChannelData(R);let $=0,y=0,A=0;for(let W=0;W<q;W++){A=A*.96+(Math.random()*2-1)*.04;let f=A*.25;Math.random()<35e-5&&($=60+Math.random()*200,y=(Math.random()*.7+.15)*(Math.random()<.5?-1:1)),$>0&&(f+=y*(Math.random()*2-1)*($/260),$--),Math.random()<2e-5&&(f+=(Math.random()<.5?-1:1)*.9),J[W]=f}}return E}start(p=.35){try{this.ctx||(this.ctx=new AudioContext,this.buffer=this.buildBuffer(this.ctx)),this.stop(!0);const u=this.ctx;u.resume();const q=u.createBufferSource();q.buffer=this.buffer,q.loop=!0;const E=u.createBiquadFilter();E.type="highpass",E.frequency.value=300;const R=u.createBiquadFilter();R.type="lowpass",R.frequency.value=7e3;const J=u.createGain();J.gain.setValueAtTime(0,u.currentTime),J.gain.linearRampToValueAtTime(p*.5,u.currentTime+.8),q.connect(E).connect(R).connect(J).connect(u.destination),q.start(0,Math.random()*5),this.src=q,this.gain=J}catch{}}stop(p=!1){if(!this.src||!this.ctx)return;const{src:u,gain:q,ctx:E}=this;if(this.src=null,p){try{u.stop()}catch{}return}q.gain.cancelScheduledValues(E.currentTime),q.gain.setValueAtTime(q.gain.value,E.currentTime),q.gain.linearRampToValueAtTime(0,E.currentTime+.6),setTimeout(()=>{try{u.stop()}catch{}},700)}}window.VL={esc:o,money:C,num:e,clamp:V,CONDITIONS:H,TIERS:G,UNKNOWN_TIER:w,estimateValue:T,computeRarity:m,vinylHTML:N,isCD:S,sleeveHTML:x,generatedCover:j,coverUrl:h,hashHue:B,avatarHTML:I,crackle:new P}})(),(function(){function V(j){const h=getComputedStyle(j).transform;if(!h||h==="none")return 0;const I=new DOMMatrix(h);return Math.atan2(I.b,I.a)*180/Math.PI}class C{constructor(h,I,S,O){this.rec=I,this.settings=O,this.rpm=I.rpm===45?45:33,this.playing=!1,this.offset=0,this.timers=[],h.innerHTML=`
        <div class="turntable">
          <div class="plinth">
            <div class="plinth-grain"></div>
            <div class="platter-well"></div>
            <div class="platter-offset">
              <div class="platter">
                <div class="platter-strobe"></div>
                <div class="platter-mat"></div>
                <div class="tt-record">${VL.vinylHTML(I,S,{noShine:!0})}</div>
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
          <button class="tt-btn sound ${O.crackle?"on":""}" data-tt="sound" title="Craquements">
            <svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path class="w" d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"/></svg>
          </button>
        </div>`,this.root=h,this.plinth=h.querySelector(".plinth"),this.outer=h.querySelector(".platter-offset"),this.platter=h.querySelector(".platter"),this.arm=h.querySelector(".arm"),this.btn=h.querySelector('[data-tt="toggle"]'),h.querySelector('[data-tt="toggle"]').addEventListener("click",()=>this.toggle()),h.querySelector('[data-tt="sound"]').addEventListener("click",N=>{this.settings.crackle=!this.settings.crackle,N.currentTarget.classList.toggle("on",this.settings.crackle),this.playing&&this.settings.crackle?VL.crackle.start(this.settings.crackleVolume):VL.crackle.stop(),this.onSettings&&this.onSettings({crackle:this.settings.crackle})}),h.querySelectorAll("[data-rpm]").forEach(N=>N.addEventListener("click",()=>{h.querySelectorAll("[data-rpm]").forEach(x=>x.classList.toggle("active",x===N)),this.setSpeed(+N.dataset.rpm)}))}get period(){return 60/(this.rpm===33?100/3:this.rpm)}later(h,I){this.timers.push(setTimeout(h,I))}clearTimers(){this.timers.forEach(clearTimeout),this.timers=[]}bake(){this.offset=(this.offset+V(this.platter))%360,this.outer.style.transform=`rotate(${this.offset}deg)`,this.platter.style.animation="none",this.platter.style.transition="none",this.platter.style.transform="rotate(0deg)",this.platter.offsetWidth}setArm(h,I,S="cubic-bezier(.45,.05,.3,1)"){this.arm.style.transition=`transform ${I}s ${S}`,this.arm.style.transform=`rotate(${h}deg)`}play(){if(this.playing)return;this.playing=!0,this.clearTimers(),this.root.classList.add("is-playing"),this.btn.querySelector(".txt").textContent="Stop",this.bake();const h=this.period;this.platter.style.animation=`tt-spinup ${h}s cubic-bezier(.333,0,.667,.333) 1, tt-spin ${h}s linear ${h}s infinite`,this.arm.classList.add("lifted"),this.setArm(28,1.3),this.later(()=>{this.arm.classList.remove("lifted"),this.plinth.classList.add("needle-down"),this.settings.crackle&&VL.crackle.start(this.settings.crackleVolume),this.later(()=>this.setArm(47,1200,"linear"),500)},1400)}stop(){if(!this.playing)return;this.playing=!1,this.clearTimers(),this.root.classList.remove("is-playing"),this.btn.querySelector(".txt").textContent="Lecture",this.plinth.classList.remove("needle-down"),VL.crackle.stop();const h=V(this.arm);this.setArm(h,.01),this.arm.classList.add("lifted"),this.later(()=>this.setArm(0,1.2),250),this.later(()=>this.arm.classList.remove("lifted"),1500),this.bake();const I=this.period*1.6,S=360/this.period*I/2;this.platter.style.transition=`transform ${I}s cubic-bezier(.333,.667,.667,1)`,this.platter.style.transform=`rotate(${S}deg)`}toggle(){this.playing?this.stop():this.play()}setSpeed(h){h!==this.rpm&&(this.rpm=h,this.playing&&(this.bake(),this.platter.style.animation=`tt-spin-free ${this.period}s linear infinite`))}destroy(){this.clearTimers(),VL.crackle.stop()}}const e=.42,T=j=>{const h=/^(\d+):(\d{2})$/.exec(String(j||"").trim());return h?+h[1]*60+ +h[2]:0},m=j=>`${String(Math.floor(j/60)).padStart(2,"0")}:${String(Math.floor(j%60)).padStart(2,"0")}`;class B{constructor(h,I,S){this.rec=I,this.playing=!1,this.offset=0,this.timers=[];const O=(I.tracklist||[]).map(N=>T(N.duration)||240);this.tracks=O.length?O:[240,240,240,240,240,240,240,240,240,240],this.elapsed=0,h.innerHTML=`
        <div class="turntable cdp">
          <div class="cdp-body">
            <div class="cdp-panel"></div>
            <div class="cdp-well"></div>
            <div class="platter-offset cdp-offset">
              <div class="platter cdp-platter">
                <div class="tt-record">${VL.vinylHTML(I,S)}</div>
              </div>
            </div>
            <div class="cdp-clamp"></div>
            <div class="cdp-display">
              <div class="cdp-row"><span class="cdp-lbl">TRACK</span><span class="cdp-lbl">TIME</span></div>
              <div class="cdp-row"><b class="cdp-track">--</b><b class="cdp-time">--:--</b></div>
              <div class="cdp-row small"><span class="cdp-status">STOP</span><span>${this.tracks.length} TRK \xB7 ${m(this.tracks.reduce((N,x)=>N+x,0))}</span></div>
            </div>
            <div class="cdp-keys"><i></i><i></i><i></i><i></i></div>
            <div class="tt-led"></div>
            <div class="tt-brand cdp-brand">GROOVE&nbsp;VAULT <small>COMPACT DISC PLAYER</small></div>
          </div>
        </div>
        <div class="tt-controls">
          <button class="tt-btn play" data-tt="toggle"><span class="ico"></span><span class="txt">Lecture</span></button>
          <button class="tt-btn" data-tt="next" title="Piste suivante">\u23ED</button>
        </div>`,this.root=h,this.outer=h.querySelector(".cdp-offset"),this.platter=h.querySelector(".cdp-platter"),this.btn=h.querySelector('[data-tt="toggle"]'),this.btn.addEventListener("click",()=>this.toggle()),h.querySelector('[data-tt="next"]').addEventListener("click",()=>this.next())}later(h,I){this.timers.push(setTimeout(h,I))}bake(){this.offset=(this.offset+V(this.platter))%360,this.outer.style.transform=`rotate(${this.offset}deg)`,this.platter.style.animation="none",this.platter.style.transition="none",this.platter.style.transform="rotate(0deg)",this.platter.offsetWidth}position(){let h=this.elapsed;for(let I=0;I<this.tracks.length;I++){if(h<this.tracks[I])return{track:I+1,time:h};h-=this.tracks[I]}return null}renderDisplay(h){const I=O=>this.root.querySelector(O),S=this.position();I(".cdp-status").textContent=h,I(".cdp-track").textContent=S&&h!=="STOP"?String(S.track).padStart(2,"0"):"--",I(".cdp-time").textContent=S&&h!=="STOP"?m(S.time):"--:--"}play(){if(this.playing)return;this.playing=!0,this.root.classList.add("is-playing"),this.btn.querySelector(".txt").textContent="Stop",this.bake();const h=e;this.platter.style.animation=`tt-spinup ${h*2}s cubic-bezier(.333,0,.667,.333) 1, tt-spin ${h}s linear ${h*2}s infinite`,this.renderDisplay("READ"),this.later(()=>{this.playing&&(this.tick=setInterval(()=>{if(this.elapsed++,!this.position()){this.elapsed=0,this.stop();return}this.renderDisplay("\u25B6 PLAY")},1e3),this.renderDisplay("\u25B6 PLAY"))},1200)}stop(){if(!this.playing)return;this.playing=!1,this.timers.forEach(clearTimeout),this.timers=[],clearInterval(this.tick),this.root.classList.remove("is-playing"),this.btn.querySelector(".txt").textContent="Lecture",this.elapsed=0,this.renderDisplay("STOP"),this.bake();const h=1.4,I=360/e*h/2;this.platter.style.transition=`transform ${h}s cubic-bezier(.333,.667,.667,1)`,this.platter.style.transform=`rotate(${I}deg)`}next(){const h=this.position()||{track:0};h.track>=this.tracks.length||(this.elapsed=this.tracks.slice(0,h.track).reduce((I,S)=>I+S,0),this.playing?this.renderDisplay("\u25B6 PLAY"):this.play())}toggle(){this.playing?this.stop():this.play()}setSpeed(){}destroy(){this.timers.forEach(clearTimeout),clearInterval(this.tick)}}window.Turntable=C,window.CdPlayer=B})(),(function(){const{esc:o,money:H,num:G,avatarHTML:w}=VL,V=(d,g=document)=>g.querySelector(d),C=()=>window.vault.cloud,e={cloud:{configured:!1},ready:!1,showSetup:!1,authTab:"signin",friends:null,editingName:!1,syncTimer:null,syncing:!1,lastSync:null,syncError:null,friendView:null},T=()=>!!(e.cloud.user&&e.cloud.profile),m=()=>{window.Reviews&&Reviews.onAuth(),window.Feed&&Feed.onAuth()};function B(d){if(!d)return"";const g=(Date.now()-new Date(d).getTime())/1e3;return g<60?"\xE0 l'instant":g<3600?`il y a ${Math.floor(g/60)} min`:g<86400?`il y a ${Math.floor(g/3600)} h`:g<86400*30?`il y a ${Math.floor(g/86400)} j`:"le "+new Date(d).toLocaleDateString("fr-FR")}function j(){if(!e.ready||!T())return;clearTimeout(e.syncTimer),e.syncFirstAt||(e.syncFirstAt=Date.now());const d=()=>{e.syncFirstAt=0,h()};Date.now()-e.syncFirstAt>3e4?d():e.syncTimer=setTimeout(d,2500)}async function h(){if(T()){e.syncing=!0,O();try{if(e.lastSync=await C().push(GV.state.collection,GV.summary()),e.syncError=null,window.Wishlist)try{await C().pushWishlist(Wishlist.items())}catch(d){e.syncError="Wishlist non partag\xE9e : "+GV.errMsg(d)}}catch(d){e.syncError=GV.errMsg(d)}e.syncing=!1,O(),N()}}async function I(){if(e.ready=!1,window.Wishlist&&await Wishlist.restoreIfEmpty(),GV.state.collection.length===0)try{const d=await C().restore();if(d.length){GV.state.collection=d,e.ready=!0,GV.renderAll(),GV.toast(`Collection restaur\xE9e depuis ton compte (${d.length} disques)`,"ok"),e.lastSync=new Date().toISOString();return}}catch(d){e.syncError=GV.errMsg(d)}e.ready=!0,await h()}function S(){return e.syncing?'<span class="sync on">Synchronisation\u2026</span>':e.syncError?`<span class="sync err" title="${o(e.syncError)}">Synchro impossible</span>`:e.lastSync?`<span class="sync ok">Synchronis\xE9 ${B(e.lastSync)}</span>`:'<span class="sync">En attente</span>'}function O(){const d=V("#sync-state");d&&(d.innerHTML=S())}function N(){const d=V("#side-profile");T()?d.innerHTML=`${w(e.cloud.profile,36)}
        <span class="sp-text"><b>${o(e.cloud.profile.username)}</b>${S()}</span>`:d.innerHTML=`<span class="avatar ghost" style="--s:36px"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.5 4.2-7 8-7s7 2.5 8 7"/></svg></span>
        <span class="sp-text"><b>Cr\xE9er mon profil</b><span class="sync">Partage ta collection</span></span>`}async function x(){if(T())try{e.friends=await C().friends();const d=e.friends.incoming.length,g=V("#nav-requests");g.textContent=d,g.classList.toggle("hidden",d===0)}catch{}}function P(d,g){return`<header class="view-head"><div><h1>${d}</h1><p class="subtitle">${g}</p></div></header>`}function b(){return P("Profil & amis","Connecte Groove Vault \xE0 un serveur pour cr\xE9er ton profil et d\xE9couvrir les collections de tes amis.")+`
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
      </div>`}function p(){const d=e.authTab==="signup";return P("Profil & amis","Cr\xE9e ton profil pour partager ta collection et voir celles de tes amis.")+`
      <div class="auth-wrap">
        <div class="auth-art"><div class="auth-disc"></div><div class="auth-disc two"></div></div>
        <form class="card-panel auth" id="auth-form">
          <div class="seg" id="auth-tabs">
            <button type="button" data-tab="signin" class="${d?"":"active"}">Connexion</button>
            <button type="button" data-tab="signup" class="${d?"active":""}">Cr\xE9er un compte</button>
          </div>
          ${d?'<label>Pseudo<input name="username" maxlength="20" placeholder="3 \xE0 20 caract\xE8res" required pattern="[A-Za-z0-9_.\\-]{3,20}"></label>':""}
          <label>Email<input name="email" type="email" required autocomplete="email"></label>
          <label>Mot de passe<input name="password" type="password" minlength="6" required autocomplete="${d?"new-password":"current-password"}"></label>
          <div class="auth-msg" id="auth-msg"></div>
          <button class="btn primary big" type="submit">${d?"Cr\xE9er mon profil":"Se connecter"}</button>
          <button type="button" class="link-btn" data-s="setup">Changer de serveur</button>
        </form>
      </div>`}function u(){const d=e.cloud.profile,g=GV.summary(),U=e.friends?e.friends.friends.length:"\u2026";return`
      <div class="profile-hero">
        <div class="hero-glow" style="--h:${VL.hashHue(d.username)}"></div>
        <button class="avatar-edit" data-s="avatar" title="Changer ma photo">
          ${w(d,116)}
          <span class="avatar-overlay"><svg viewBox="0 0 24 24"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>Changer</span>
        </button>
        <div class="profile-id">
          <div class="pseudo-row" id="pseudo-row">${q()}</div>
          <div class="muted">${o(e.cloud.user.email)} \xB7 membre depuis ${new Date(d.created_at).toLocaleDateString("fr-FR",{month:"long",year:"numeric"})}</div>
          <div class="profile-stats">
            <div><b>${G(g.count)}</b><span>disques</span></div>
            <div><b>${H(g.value,g.currency,0)}</b><span>valeur estim\xE9e</span></div>
            <div><b>${U}</b><span>amis</span></div>
            <div class="clickable" data-s="my-reviews" title="Voir mes critiques"><b>${window.Reviews?Reviews.myCount():0}</b><span>albums not\xE9s</span></div>
          </div>
        </div>
        <div class="profile-side">
          <div id="sync-state">${S()}</div>
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
        <div class="card-panel" id="requests-panel">${R()}</div>
        <div class="card-panel span-all">
          <h3>Mes amis ${e.friends?`<small>${e.friends.friends.length}</small>`:""}</h3>
          <div class="friends-grid" id="friends-grid">${J()}</div>
        </div>
      </div>`}function q(){const d=e.cloud.profile;return e.editingName?`<form id="pseudo-form" class="pseudo-form">
        <input name="username" value="${o(d.username)}" maxlength="20" required>
        <button class="btn primary small" type="submit">Enregistrer</button>
        <button class="btn ghost small" type="button" data-s="cancel-name">Annuler</button>
      </form>`:`<h1>${o(d.username)}</h1>
      <button class="icon-btn" data-s="edit-name" title="Changer de pseudo"><svg viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg></button>`}function E(d,g){return`<div class="person">${w(d,40)}<b>${o(d.username)}</b><span class="person-right">${g}</span></div>`}function R(){if(!e.friends)return'<h3>Demandes</h3><div class="loader small"><div class="loader-disc"></div></div>';const{incoming:d,outgoing:g}=e.friends;let U=`<h3>Demandes re\xE7ues ${d.length?`<small class="hot">${d.length}</small>`:""}</h3>`;return U+=d.length?`<div class="people">${d.map(K=>E(K.profile,`
          <button class="btn primary small" data-s="accept" data-id="${K.friendshipId}">Accepter</button>
          <button class="btn ghost small" data-s="decline" data-id="${K.friendshipId}">Refuser</button>`)).join("")}</div>`:'<p class="muted small">Aucune demande en attente.</p>',g.length&&(U+=`<h3 class="sub">Demandes envoy\xE9es</h3><div class="people">${g.map(K=>E(K.profile,`<span class="muted small">En attente</span><button class="btn ghost small" data-s="cancel-req" data-id="${K.friendshipId}">Annuler</button>`)).join("")}</div>`),U}function J(){return e.friends?e.friends.friends.length?e.friends.friends.map((d,g)=>{const U=d.summary;return`<div class="friend-card" style="--i:${g}" data-s="view-friend" data-uid="${d.profile.id}">
        <div class="friend-disc"></div>
        ${w(d.profile,64)}
        <div class="friend-name">${o(d.profile.username)}</div>
        <div class="friend-meta">${U?`${G(U.record_count)} disques \xB7 ${H(+U.total_value,U.currency,0)}`:"Collection pas encore partag\xE9e"}</div>
        <div class="friend-meta dim">${U?"Mise \xE0 jour "+B(U.updated_at):""}</div>
        <div class="friend-actions">
          <button class="btn primary small" data-s="view-friend" data-uid="${d.profile.id}">Voir sa collection</button>
          <button class="icon-btn" data-s="unfriend" data-id="${d.friendshipId}" title="Retirer de mes amis">\u2715</button>
        </div>
      </div>`}).join(""):`<p class="muted">Pas encore d'amis. Recherche leur pseudo ci-dessus pour leur envoyer une demande.</p>`:'<div class="loader small"><div class="loader-disc"></div></div>'}async function $(){const d=V("#profile-root");if(!e.cloud.configured||e.showSetup){d.innerHTML=b();return}if(!T()){d.innerHTML=p();return}if(d.innerHTML=u(),await x(),GV.state.view==="profile"&&T()){V("#requests-panel").innerHTML=R(),V("#friends-grid").innerHTML=J();const g=V(".profile-stats div:nth-child(3) b");g&&(g.textContent=e.friends?e.friends.friends.length:"-");const U=V(".span-all h3");U&&e.friends&&(U.innerHTML=`Mes amis <small>${e.friends.friends.length}</small>`)}}async function y(d){const g=V("#friend-root");g.innerHTML='<div class="loader"><div class="loader-disc"></div><span>Chargement de sa collection\u2026</span></div>',GV.go("friend");try{const{profile:U,collection:K,wishlist:X}=await C().friendCollection(d),Y=K&&K.records||[];e.friendView={profile:U,collection:K,records:Y,wishlist:X&&X.items||[],tab:"collection"},A()}catch(U){g.innerHTML=`<button class="btn ghost small back" data-s="back">\u2190 Mes amis</button><p class="warn">${o(GV.errMsg(U))}</p>`}}function A(){const{profile:d,collection:g,records:U,wishlist:K}=e.friendView,X=e.friendView.tab==="wishlist",Y=U.filter(de=>de.discogsId&&GV.state.collection.some(ue=>ue.discogsId===de.discogsId)).length,ie=U.reduce((de,ue)=>{const pe=GV.rarityOf(ue).score;return pe!=null&&(!de||pe>de.s)?{r:ue,s:pe}:de},null);V("#friend-root").innerHTML=`
      <button class="btn ghost small back" data-s="back">\u2190 Mes amis</button>
      <div class="friend-hero">
        ${w(d,84)}
        <div>
          <h1>${X?"Wishlist":"Collection"} de ${o(d.username)}</h1>
          <p class="subtitle">${g?`${G(U.length)} disques \xB7 ${H(+g.total_value,g.currency,0)} \xB7 mise \xE0 jour ${B(g.updated_at)}`:"Ton ami n'a pas encore partag\xE9 sa collection."}</p>
        </div>
        <div class="friend-badges">
          ${Y?`<span class="tier-pill" style="--tier:#4cc38a">${Y} disque${Y>1?"s":""} en commun</span>`:""}
          <button class="btn ghost small" data-s="friend-reviews">Ses critiques</button>
          ${ie?`<span class="tier-pill" style="--tier:${GV.rarityOf(ie.r).tier.color}">P\xE9pite : ${o(ie.r.title)}</span>`:""}
        </div>
        <div class="toolbar">
          <div class="seg" id="ff-tabs">
            <button data-s="ff-tab" data-tab="collection" class="${X?"":"active"}">Collection <small>${G(U.length)}</small></button>
            <button data-s="ff-tab" data-tab="wishlist" class="${X?"active":""}">\u2665 Wishlist <small>${G(K.length)}</small></button>
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
      <div class="grid" id="friend-grid"></div>`,W()}function W(){const d=(V("#ff-text")||{}).value?.trim().toLowerCase()||"",g=V("#friend-grid");if(e.friendView.tab==="wishlist"){const X=e.friendView.wishlist.filter(Y=>!d||`${Y.artist} ${Y.title} ${Y.label} ${Y.year}`.toLowerCase().includes(d)).sort((Y,ie)=>ie.priority-Y.priority||(ie.addedAt||"").localeCompare(Y.addedAt||""));g.innerHTML=X.map((Y,ie)=>Wishlist.cardHTML(Y,ie,{foreign:!0})).join("")||`<p class="muted no-match">${e.friendView.wishlist.length?"Aucun disque.":o(e.friendView.profile.username)+" n'a encore rien mis dans sa wishlist."}</p>`;return}const U=(V("#ff-sort")||{}).value||"added",K=e.friendView.records.filter(X=>!d||`${X.artist} ${X.title} ${X.label} ${X.year}`.toLowerCase().includes(d)).sort({added:(X,Y)=>(Y.addedAt||"").localeCompare(X.addedAt||""),artist:(X,Y)=>X.artist.localeCompare(Y.artist,"fr"),value:(X,Y)=>((GV.valueOf(Y)||{}).value??-1)-((GV.valueOf(X)||{}).value??-1),rarity:(X,Y)=>(GV.rarityOf(Y).score??-1)-(GV.rarityOf(X).score??-1)}[U]);g.innerHTML=K.map((X,Y)=>GV.cardHTML(X,Y,{foreign:!0})).join("")||'<p class="muted no-match">Aucun disque.</p>'}async function f(d){const g=d.target.closest("[data-s]");if(!g)return;const U=g.dataset.s;try{switch(U){case"open":window.vault.openExternal(g.dataset.url);break;case"copy-schema":await window.vault.copySchema(),GV.toast("Script SQL copi\xE9 dans le presse-papiers","ok");break;case"setup":e.showSetup=!0,$();break;case"cancel-setup":e.showSetup=!1,$();break;case"avatar":{g.classList.add("busy");const K=await C().pickAvatar();g.classList.remove("busy"),K&&(e.cloud.profile=K,$(),N(),GV.toast("Photo de profil mise \xE0 jour","ok"));break}case"edit-name":e.editingName=!0,V("#pseudo-row").innerHTML=q(),V("#pseudo-form input").select();break;case"cancel-name":e.editingName=!1,V("#pseudo-row").innerHTML=q();break;case"logout":await C().signOut(),e.cloud.user=null,e.cloud.profile=null,e.friends=null,V("#nav-requests").classList.add("hidden"),$(),N(),GV.toast("D\xE9connect\xE9. Ta collection reste sur ce PC."),m();break;case"sync-now":await h();break;case"accept":case"decline":g.disabled=!0,await C().respond(+g.dataset.id,U==="accept"),U==="accept"&&GV.toast("Demande accept\xE9e, vous \xEAtes maintenant amis !","ok"),$();break;case"cancel-req":await C().unfriend(+g.dataset.id),$();break;case"unfriend":if(d.stopPropagation(),!g.dataset.confirm){g.dataset.confirm="1",g.classList.add("confirm"),g.title="Cliquer encore pour confirmer",setTimeout(()=>{g.isConnected&&(delete g.dataset.confirm,g.classList.remove("confirm"))},3e3);return}await C().unfriend(+g.dataset.id),GV.toast("Ami retir\xE9"),$();break;case"add-friend":{g.disabled=!0;const K=await C().request(g.dataset.uid),X={sent:"Demande envoy\xE9e",accepted:"Ami \u2713",already:"Ami \u2713",pending:"Demande envoy\xE9e"}[K];g.textContent=X,g.className="btn done small",GV.toast(K==="accepted"?"Vous \xEAtes maintenant amis !":"Demande d'ami envoy\xE9e","ok"),await x(),V("#requests-panel").innerHTML=R(),V("#friends-grid").innerHTML=J();break}case"view-friend":y(g.dataset.uid);break;case"back":GV.go("profile");break;case"my-reviews":Reviews.openUser(e.cloud.profile);break;case"friend-reviews":Reviews.openUser(e.friendView.profile);break;case"ff-tab":e.friendView.tab=g.dataset.tab,A();break}}catch(K){g.disabled=!1,g.classList&&g.classList.remove("busy"),GV.toast(GV.errMsg(K),"error")}}async function n(d){const g=d.target;if(g.id==="setup-form"){d.preventDefault();try{e.cloud=await C().configure({url:g.url.value,key:g.key.value}),e.showSetup=!1,e.authTab="signup",$(),N(),GV.toast("Serveur connect\xE9","ok")}catch(U){GV.toast(GV.errMsg(U),"error")}}if(g.id==="auth-form"){d.preventDefault();const U=V("#auth-msg"),K=V("button[type=submit]",g);K.disabled=!0,K.classList.add("loading"),U.className="auth-msg",U.textContent="";try{if(e.authTab==="signup"){if((await C().signUp({email:g.email.value,password:g.password.value,username:g.username.value})).needsConfirmation){e.authTab="signin",$();const Y=V("#auth-msg");Y.className="auth-msg ok",Y.textContent=`Compte cr\xE9\xE9 ! Clique sur le lien envoy\xE9 \xE0 ${g.email.value}, puis connecte-toi ici.`;return}e.cloud=await C().status()}else e.cloud=await C().signIn({email:g.email.value,password:g.password.value});N(),await I(),$(),GV.toast(`Bienvenue ${e.cloud.profile.username} !`,"ok"),m()}catch(X){U.className="auth-msg err",U.textContent=GV.errMsg(X),K.disabled=!1,K.classList.remove("loading")}}if(g.id==="pseudo-form"){d.preventDefault();try{e.cloud.profile=await C().updateUsername(g.username.value),e.editingName=!1,$(),N(),GV.toast("Pseudo mis \xE0 jour","ok"),m()}catch(U){GV.toast(GV.errMsg(U),"error")}}}let L=null;function F(d){d.target.id==="friend-search"&&(clearTimeout(L),L=setTimeout(()=>Z(d.target.value),300)),(d.target.id==="ff-text"||d.target.id==="ff-sort")&&W()}async function Z(d){const g=V("#friend-results");if(g){if(d.trim().length<2){g.innerHTML='<p class="muted small">Tape au moins 2 lettres du pseudo de ton ami.</p>';return}try{const U=await C().search(d),K=e.friends||{friends:[],incoming:[],outgoing:[]},X=Y=>K.friends.some(ie=>ie.profile.id===Y)?"friend":K.outgoing.some(ie=>ie.profile.id===Y)?"out":K.incoming.some(ie=>ie.profile.id===Y)?"in":null;g.innerHTML=U.length?U.map(Y=>{const ie=X(Y.id),de=ie==="friend"?'<span class="btn done small">Ami \u2713</span>':ie==="out"?'<span class="muted small">Demande envoy\xE9e</span>':ie==="in"?`<button class="btn primary small" data-s="add-friend" data-uid="${Y.id}">Accepter</button>`:`<button class="btn primary small" data-s="add-friend" data-uid="${Y.id}">Ajouter</button>`;return E(Y,de)}).join(""):'<p class="muted small">Aucun membre avec ce pseudo.</p>'}catch(U){g.innerHTML=`<p class="warn small">${o(GV.errMsg(U))}</p>`}}}function z(){for(const d of["#profile-root","#friend-root"]){const g=V(d);g.addEventListener("click",f),g.addEventListener("submit",n),g.addEventListener("input",F)}V("#profile-root").addEventListener("click",d=>{const g=d.target.closest("#auth-tabs [data-tab]");g&&(e.authTab=g.dataset.tab,$())}),V("#friend-root").addEventListener("click",d=>{if(d.target.closest(".wl-card")&&e.friendView){Wishlist.onGridClick(d,e.friendView.wishlist);return}const g=d.target.closest(".card");if(!g||!e.friendView)return;const U=e.friendView.records.find(K=>K.id===g.dataset.id);U&&GV.openDetail(null,{rec:U,readOnly:!0})})}async function ee(){z();try{e.cloud=await C().status()}catch(d){e.cloud={configured:!0,user:null,error:GV.errMsg(d)}}N(),m(),T()?(await I(),x()):e.ready=!0,setInterval(()=>{x(),N()},6e4)}window.Social={init:ee,scheduleSync:j,renderProfile:$,openFriend:y,ago:B,refreshFriendWishlist:()=>{e.friendView&&e.friendView.tab==="wishlist"&&GV.state.view==="friend"&&W()},isLoggedIn:T,me:()=>e.cloud.profile,friendIds:()=>e.friends?e.friends.friends.map(d=>d.profile.id):[]}})(),(function(){const{esc:o,num:H}=VL,G=(x,P=document)=>P.querySelector(x),w=x=>new Promise(P=>setTimeout(P,x)),V=2300,C={info:null,importing:!1,phase:"",report:null,enriching:!1,done:0,total:0},e=()=>GV.state.collection.filter(x=>x.needsEnrich&&x.discogsId);function T(x){const P=Math.ceil(x*V/6e4);return P<=1?"moins d'une minute":`environ ${P} min`}async function m(){const x=G("#import-root");if(!GV.state.settings.discogsToken){x.innerHTML=`<div class="card-panel import-card">
        <h3>Importer ma collection Discogs</h3>
        <p class="muted">Pour r\xE9cup\xE9rer ta collection, ajoute d'abord ton jeton Discogs dans <a href="#" data-goto="settings">R\xE9glages</a>.</p>
      </div>`;return}if(C.importing){x.innerHTML=j();return}if(!C.info){x.innerHTML='<div class="loader"><div class="loader-disc"></div><span>Connexion \xE0 ton compte Discogs\u2026</span></div>';try{C.info=await window.vault.collectionInfo()}catch(P){x.innerHTML=`<p class="warn">${o(GV.errMsg(P))}</p>`;return}}x.innerHTML=B()}function B(){const{username:x,count:P}=C.info,b=GV.state.collection.filter(u=>u.discogsInstanceId).length,p=C.report;return`<div class="import-grid">
      <div class="card-panel import-card">
        <div class="import-head">
          <div class="import-disc"></div>
          <div>
            <div class="muted small">Compte Discogs</div>
            <div class="import-user">${o(x)}</div>
            <div class="muted">${H(P)} \xE9l\xE9ment${P>1?"s":""} dans ta collection${b?` \xB7 ${H(b)} d\xE9j\xE0 import\xE9${b>1?"s":""}`:""}</div>
          </div>
        </div>
        ${p?`<div class="import-report">
          <div><b>${H(p.created)}</b><span>disques ajout\xE9s</span></div>
          <div><b>${H(p.already)}</b><span>d\xE9j\xE0 pr\xE9sents</span></div>
          <div><b>${H(p.skipped)}</b><span>ignor\xE9s (cassettes, fichiers\u2026)</span></div>
        </div>`:""}
        <button class="btn primary big" data-imp="start" ${P?"":"disabled"}>
          ${b?"Importer les nouveaux disques":"Importer ma collection"}
        </button>
        <p class="muted small">Tu peux relancer l'import \xE0 tout moment : seuls les disques ajout\xE9s depuis sur Discogs seront import\xE9s.</p>
      </div>
      <div class="card-panel">
        <h3>Ce qui est import\xE9</h3>
        <ul class="import-list">
          <li><b>Tout de suite</b> : artiste, titre, ann\xE9e, label, format, pochette, couleur des vinyles, et l'\xE9tat (M, NM, VG+\u2026) et les notes que tu as saisis sur Discogs.</li>
          <li><b>En arri\xE8re-plan</b> : cote, raret\xE9 et liste des pistes. Discogs limite le nombre de requ\xEAtes, il faut donc environ 2 secondes par disque, soit ${T(Math.max(P-b,0))} pour ta collection.</li>
          <li>Tu peux utiliser l'appli, et m\xEAme la fermer, pendant ce temps : la r\xE9cup\xE9ration reprend au prochain lancement.</li>
          <li>Les vinyles (y compris 78 tours, flexi-discs et ac\xE9tates) et les CD sont import\xE9s ; les cassettes et fichiers num\xE9riques sont ignor\xE9s.</li>
        </ul>
      </div>
    </div>`}function j(){return`<div class="card-panel import-card">
      <div class="loader"><div class="loader-disc"></div><span id="imp-phase">${o(C.phase)}</span></div>
    </div>`}function h(x){C.phase=x;const P=G("#imp-phase");P&&(P.textContent=x)}async function I(){if(!C.importing){C.importing=!0,C.report=null,m();try{h("R\xE9cup\xE9ration de la liste de tes disques\u2026");const x=await window.vault.collectionPage(1),P=[...x.items],b=x.pagination?x.pagination.pages:1,p=x.pagination?x.pagination.items:P.length;for(let y=2;y<=b;y++){h(`R\xE9cup\xE9ration de la liste : ${H(P.length)} / ${H(p)}`),await w(1100);const A=await window.vault.collectionPage(y);P.push(...A.items)}h("Ajout des disques \xE0 ta collection\u2026");const u=GV.state.collection,q=new Set(u.map(y=>y.discogsInstanceId).filter(Boolean)),E=[],R=[];let J=0,$=0;for(const{kind:y,record:A}of P){if(!y){J++;continue}if(q.has(A.discogsInstanceId)){$++;continue}const W=u.find(f=>f.discogsId===A.discogsId&&!f.discogsInstanceId);if(W){W.discogsInstanceId=A.discogsInstanceId,R.push(W),$++;continue}E.push({id:crypto.randomUUID(),purchasePrice:null,manualValue:null,...A}),q.add(A.discogsInstanceId)}(E.length||R.length)&&(GV.state.collection=await window.vault.saveMany([...E,...R])),C.report={created:E.length,already:$,skipped:J},C.importing=!1,GV.renderAll(),GV.toast(E.length?`${H(E.length)} disque${E.length>1?"s":""} import\xE9${E.length>1?"s":""} depuis Discogs`:"Aucun nouveau disque \xE0 importer","ok"),m(),O()}catch(x){C.importing=!1,m(),GV.toast(GV.errMsg(x),"error")}}}function S(){if(G("#side-task").classList.toggle("hidden",!C.enriching),!C.enriching)return;const P=C.total-C.done;G("#side-task-text").textContent=`${H(C.done)} / ${H(C.total)} \xB7 ${T(P)}`,G("#side-task-fill").style.width=`${C.done/Math.max(C.total,1)*100}%`}async function O(){if(C.enriching||!GV.state.settings.discogsToken)return;const x=e().map(b=>b.id);if(!x.length)return;C.enriching=!0,C.done=0,C.total=x.length,S();let P=0;for(let b=0;b<x.length;b++){const p=Date.now(),u=GV.state.collection.find(E=>E.id===x[b]);if(!u||!u.needsEnrich){C.done++;continue}try{const E=await window.vault.enrichRelease(u.discogsId),R=GV.state.collection.find(J=>J.id===x[b]);if(R){const J={id:R.id,condition:R.condition,notes:R.notes,purchasePrice:R.purchasePrice,manualValue:R.manualValue,addedAt:R.addedAt,discogsInstanceId:R.discogsInstanceId};R.vinylColorEdited&&(J.vinylColor=R.vinylColor),Object.assign(R,E,J),delete R.needsEnrich,await window.vault.saveRecord(R),P++}}catch(E){const R=GV.errMsg(E);if(/429/.test(R)){await w(3e4),b--;continue}if(/401|403/.test(R)){GV.toast("Jeton Discogs refus\xE9, r\xE9cup\xE9ration des cotes interrompue","error");break}if(/fetch failed|ENOTFOUND|network/i.test(R)){GV.toast("Connexion perdue, la r\xE9cup\xE9ration des cotes reprendra au prochain lancement","error");break}const J=GV.state.collection.find($=>$.id===x[b]);J&&(delete J.needsEnrich,J.enrichError=R,await window.vault.saveRecord(J))}C.done++,S(),GV.renderSidebar(),window.Social&&Social.scheduleSync(),C.done%10===0&&!document.querySelector(".card:hover")&&GV.renderCollection();const q=Date.now()-p;q<V&&await w(V-q)}C.enriching=!1,S(),GV.renderAll(),P&&GV.toast(`Cotes r\xE9cup\xE9r\xE9es pour ${H(P)} disque${P>1?"s":""}`,"ok")}function N(){G("#import-root").addEventListener("click",x=>{x.target.closest('[data-imp="start"]')&&I()}),e().length&&setTimeout(O,4e3)}window.Importer={init:N,renderTab:m,startEnrichment:O}})(),window.CHANGELOG=[{version:"1.2.0-beta.6",date:"2026-11-25",title:"Les \xE9ditions renomm\xE9es dans les critiques",changes:{fix:["Critiques : une \xE9dition au titre diff\xE9rent de son album principal sur Discogs (comme une version longue renomm\xE9e) devient un album \xE0 part, qu'on peut trouver et noter","Critiques : l'album dont le titre correspond exactement \xE0 ta recherche appara\xEEt en premier"]}},{version:"1.2.0-beta.5",date:"2026-11-25",title:"Ta wishlist, et tous les disques de Discogs",highlights:[{icon:"\u{1F496}",title:"Wishlist",text:"Mets de c\xF4t\xE9 les vinyles et CD qui te font envie, avec leur prix le plus bas sur Discogs. Tes amis la voient sur ton profil : pratique pour les cadeaux !"},{icon:"\u{1F517}",title:"Lien Discogs",text:"Colle le lien d'un disque Discogs dans la recherche pour le retrouver \xE0 coup s\xFBr."}],changes:{feat:["Wishlist : ajoute un disque depuis la recherche (bouton \u2665 Wishlist) ou depuis la collection d'un ami","Wishlist : priorit\xE9s, prix le plus bas sur Discogs, filtre vinyles / CD, et bouton \xAB Je l'ai ! \xBB qui le passe dans ta collection","Page d'un ami : onglet Wishlist pour voir ce qui lui ferait plaisir, et l'ajouter aussi \xE0 la tienne","Colle le lien Discogs d'un disque dans la recherche (Ajouter un disque ou Critiques) pour le retrouver \xE0 coup s\xFBr, m\xEAme quand la recherche ne le propose pas","Le lien d'une fiche principale Discogs affiche toutes ses \xE9ditions vinyle et CD"],improve:["Ajouter un disque : la recherche porte par d\xE9faut sur les vinyles et les CD en m\xEAme temps"]}},{version:"1.2.0-beta.4",date:"2026-11-25",title:"Plus d'albums dans la recherche des critiques",changes:{fix:["Critiques : la recherche trouve aussi les albums r\xE9cents ou peu connus (souvent des CD) qui n'ont pas encore de fiche principale sur Discogs"]}},{version:"1.2.0-beta.3",date:"2026-11-25",title:"Les CD dans les critiques",changes:{feat:["Critiques : indique si tu as \xE9cout\xE9 l'album en vinyle ou en CD","Le support d'\xE9coute s'affiche sur chaque critique"],improve:["La page d'un album et ses tuiles montrent un CD quand tu le poss\xE8des en CD","Le badge \xAB Dans ta collection \xBB pr\xE9cise le support (vinyle, CD ou les deux)","Depuis un CD de ta collection, \xAB Noter l'album \xBB pr\xE9s\xE9lectionne le CD","Collection plus sobre : les badges de raret\xE9 n'apparaissent qu'au survol, ou en permanence quand tu filtres par raret\xE9"]}},{version:"1.2.0-beta.2",date:"2026-11-25",title:"Les CD arrivent, et le fil de tes amis",highlights:[{icon:"\u{1F4BF}",title:"Les CD",text:"Ajoute tes CD comme tes vinyles : recherche, import Discogs, cote et raret\xE9. Ils ont leur bo\xEEtier cristal et leur propre lecteur CD."},{icon:"\u{1F4F0}",title:"Fil d'actualit\xE9",text:"Vois les disques que tes amis ajoutent \xE0 leur collection, avec tous les d\xE9tails, et leurs derni\xE8res critiques."},{icon:"\u{1F381}",title:"Nouveaut\xE9s",text:"Cet onglet : le contenu de chaque mise \xE0 jour, et celle qui est disponible."}],changes:{feat:["Support CD : recherche Discogs (Vinyles / CD), import de ta collection Discogs avec les CD, saisie manuelle","Lecteur CD anim\xE9 avec afficheur : piste, temps et passage \xE0 la piste suivante","Fil d'actualit\xE9 : nouveaux disques des amis, regroup\xE9s par ami et par jour, et leurs critiques","Pastille dans la barre lat\xE9rale pour les nouveaut\xE9s de tes amis","Onglet \xAB Nouveaut\xE9s \xBB avec l'historique des versions"],improve:["Filtre par support (vinyles / CD) dans ta collection","R\xE9partition vinyles / CD dans les statistiques","Les \xE9ditions color\xE9es ne sont propos\xE9es que pour les vinyles"]}},{version:"1.2.0-beta.1",date:"2026-11-25",title:"Critiques d'albums",highlights:[{icon:"\u2B50",title:"Critiques",text:"Note les albums de \xBD \xE0 5 \xE9toiles, \xE9cris ton avis, marque tes coups de c\u0153ur et aime les critiques des autres."},{icon:"\u{1F3C6}",title:"Les mieux not\xE9s",text:"Le classement des albums pr\xE9f\xE9r\xE9s de la communaut\xE9 Groove Vault."}],changes:{feat:["Rubrique Critiques : fil de la communaut\xE9, critiques des amis, classement, journal de tes critiques","Page album : note moyenne, r\xE9partition des notes, liste des morceaux, critiques","Bouton \xAB Noter l'album \xBB sur chaque disque, et ta note affich\xE9e sur tes cartes"],improve:["Groove Vault passe en version b\xEAta"]}},{version:"1.1.0",date:"2026-11-24",title:"Import Discogs et mises \xE0 jour automatiques",changes:{feat:["Import de ta collection Discogs en un clic (\xE9tats et notes compris)","R\xE9cup\xE9ration des cotes en arri\xE8re-plan, qui reprend au prochain lancement","Mises \xE0 jour automatiques avec une fen\xEAtre de t\xE9l\xE9chargement"],fix:["Une pochette est g\xE9n\xE9r\xE9e quand l'image d'un disque ne se charge pas"]}},{version:"1.0.0",date:"2026-11-24",title:"Premi\xE8re version",changes:{feat:["Collection de vinyles avec la base Discogs (18 millions de r\xE9f\xE9rences)","Platine anim\xE9e : bras de lecture, d\xE9marrage \xE0 33\u2153 ou 45 tours, craquements","Cote r\xE9elle selon l'\xE9tat et indice de raret\xE9 sur 100","Vinyles color\xE9s, translucides, marbr\xE9s et \xE9clabouss\xE9s","Profil, photo, amis et collections partag\xE9es","Statistiques de ta collection"]}}],(function(){const{esc:o}=VL,H=(p,u=document)=>u.querySelector(p),G=()=>window.vault.update,w={state:null,info:null,dismissed:new Set},V=p=>String(p||"").replace(/-beta\.?(\d*)$/,(u,q)=>` b\xEAta${q?" "+q:""}`),C=p=>`${(p/1048576).toFixed(1).replace(".",",")} Mo`;function e(p){let u=H("#update-modal");u||(u=document.createElement("div"),u.id="update-modal",u.className="update-modal",u.addEventListener("click",O),document.body.appendChild(u)),u.innerHTML=`<div class="um-backdrop"></div><div class="um-card">${p}</div>`,requestAnimationFrame(()=>u.classList.add("open"))}function T(){const p=H("#update-modal");p&&(p.classList.remove("open"),setTimeout(()=>p.remove(),300))}const m=p=>`<div class="um-disc"><span></span>${p?`<b>${p}</b>`:""}</div>`;function B(p){const u=(p.notes||[]).length?`<div class="um-notes"><div class="um-notes-title">Nouveaut\xE9s</div>${p.notes.map(q=>`<div>${o(q)}</div>`).join("")}</div>`:"";return`${m("NEW")}
      <h2>Une nouvelle version est disponible</h2>
      <p class="muted">Groove Vault <b>${o(V(p.version))}</b> \xB7 tu utilises la ${o(V(p.current))}</p>
      ${u}
      <div class="um-actions">
        <button class="btn ghost" data-u="later">Plus tard</button>
        <button class="btn primary" data-u="download">Mettre \xE0 jour</button>
      </div>`}function j(){return`${m("",!0)}
      <h2>T\xE9l\xE9chargement de la mise \xE0 jour</h2>
      <p class="muted">Groove Vault ${o(V(w.info?w.info.version:""))} \xB7 tu peux continuer \xE0 utiliser l'appli</p>
      <div class="um-bar"><i id="um-fill"></i></div>
      <div class="um-progress"><span id="um-pct">0 %</span><span id="um-size"></span></div>
      <div class="um-actions"><button class="btn ghost" data-u="close">Masquer</button></div>`}function h(p){return`${m("\u2713")}
      <h2>Mise \xE0 jour pr\xEAte</h2>
      <p class="muted">Groove Vault va red\xE9marrer pour installer la version ${o(V(p.version))}. Cela prend quelques secondes, ta collection est conserv\xE9e.</p>
      <div class="um-actions">
        <button class="btn ghost" data-u="close">Au prochain d\xE9marrage</button>
        <button class="btn primary" data-u="install">Red\xE9marrer maintenant</button>
      </div>`}function I(p){return`${m("!")}
      <h2>La mise \xE0 jour a \xE9chou\xE9</h2>
      <p class="muted">${o(p)}</p>
      <div class="um-actions">
        <button class="btn ghost" data-u="close">Fermer</button>
        <button class="btn primary" data-u="download">R\xE9essayer</button>
      </div>`}async function S(){if(w.state==="downloading"){e(j());return}w.state="downloading",e(j());try{await G().download()}catch(p){w.state="error",e(I(GV.errMsg(p)))}}async function O(p){const u=p.target.closest("[data-u]");if(u)switch(u.dataset.u){case"later":w.info&&w.dismissed.add(w.info.version),w.state=null,T();break;case"close":T();break;case"download":await S();break;case"install":u.disabled=!0,u.textContent="Red\xE9marrage\u2026",G().install();break}}function N(p,u){if(p==="available"){if(w.state==="downloading"||w.state==="downloaded"||w.dismissed.has(u.version))return;w.info=u,w.state="available",e(B(u)),x(`Version ${V(u.version)} disponible`),window.News&&News.onUpdate()}else if(p==="progress"){if(w.state!=="downloading")return;const q=H("#um-fill");if(!q)return;q.style.width=`${u.percent.toFixed(1)}%`,H("#um-pct").textContent=`${Math.floor(u.percent)} %`,H("#um-size").textContent=`${C(u.transferred)} / ${C(u.total)}${u.speed?` \xB7 ${C(u.speed)}/s`:""}`}else p==="downloaded"?(w.state="downloaded",e(h(u)),x(`Version ${V(u.version)} pr\xEAte, install\xE9e au prochain d\xE9marrage`)):p==="error"&&w.state==="downloading"&&(w.state="error",e(I(u)))}function x(p){const u=H("#update-status");u&&(u.textContent=p)}async function P(){const p=H("#check-update");p.disabled=!0,p.classList.add("loading"),x("Recherche en cours\u2026"),w.info&&w.dismissed.delete(w.info.version),w.dismissed.clear();const u=await G().check();p.disabled=!1,p.classList.remove("loading"),u.status==="latest"?x("Tu as la derni\xE8re version \u2713"):u.status==="available"?x(`Version ${V(u.version)} disponible`):u.status==="dev"?x("Les mises \xE0 jour automatiques fonctionnent uniquement dans la version install\xE9e."):u.status==="busy"?x("Recherche d\xE9j\xE0 en cours\u2026"):x(`Impossible de v\xE9rifier : ${u.message||"pas de connexion ?"}`)}async function b(){G().onEvent(N);const p=await G().info(),u=H("#app-version");u&&(u.innerHTML=`Version install\xE9e : <b>${o(V(p.version))}</b>${p.packaged?"":" (mode d\xE9veloppement)"}`);const q=H("#check-update");q&&q.addEventListener("click",P)}window.Updater={init:b,startDownload:S,available:()=>w.info&&w.state!=="downloaded"?w.info:null}})(),(function(){const{esc:o}=VL,H=(S,O=document)=>O.querySelector(S),G={version:null,checking:!1,checkMsg:""},w=S=>String(S||"").replace(/-beta\.?(\d*)$/,(O,N)=>` b\xEAta${N?" "+N:""}`),V=S=>/-beta/.test(S||""),C=S=>new Date(S+"T12:00:00").toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}),e=[["feat","Nouveau","new"],["improve","Am\xE9lior\xE9","imp"],["fix","Corrig\xE9","fix"]];function T(){const S=window.Updater&&Updater.available();return S?`<div class="nw-available">
      <div class="nw-available-disc"></div>
      <div class="nw-available-body">
        <div class="nw-kicker">Mise \xE0 jour disponible</div>
        <h2>Groove Vault ${o(w(S.version))}</h2>
        ${(S.notes||[]).length?`<ul>${S.notes.map(O=>`<li>${o(O.replace(/^•\s*/,""))}</li>`).join("")}</ul>`:""}
      </div>
      <button class="btn primary" data-nw="update">Mettre \xE0 jour</button>
    </div>`:""}function m(S,O){const N=S.version===G.version,x=S.changes||{};return`<article class="nw-version ${N?"current":""}" style="--i:${O}">
      <div class="nw-rail"><span class="nw-dot"></span></div>
      <div class="nw-card">
        <div class="nw-head">
          <h2>${o(w(S.version))}</h2>
          ${N?'<span class="nw-pill cur">Install\xE9e</span>':""}
          ${V(S.version)?'<span class="nw-pill beta">B\xEAta</span>':""}
          <span class="nw-date">${C(S.date)}</span>
        </div>
        ${S.title?`<div class="nw-title">${o(S.title)}</div>`:""}
        ${(S.highlights||[]).length?`<div class="nw-highlights">${S.highlights.map(P=>`
          <div class="nw-hl"><span class="nw-ico">${P.icon}</span><b>${o(P.title)}</b><p>${o(P.text)}</p></div>`).join("")}</div>`:""}
        ${e.filter(([P])=>(x[P]||[]).length).map(([P,b,p])=>`
          <div class="nw-group">
            <span class="nw-tag ${p}">${b}</span>
            <ul>${x[P].map(u=>`<li>${o(u)}</li>`).join("")}</ul>
          </div>`).join("")}
      </div>
    </article>`}function B(){const S=H("#news-root");S&&(S.innerHTML=`
      <header class="view-head">
        <div>
          <h1>Nouveaut\xE9s</h1>
          <p class="subtitle">Le contenu de chaque mise \xE0 jour de Groove Vault.</p>
        </div>
        <div class="toolbar">
          <span class="muted small">Tu utilises la <b>${o(w(G.version||""))}</b></span>
          <button class="btn ghost ${G.checking?"loading":""}" data-nw="check" ${G.checking?"disabled":""}>
            <svg viewBox="0 0 24 24"><path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/></svg>Rechercher une mise \xE0 jour</button>
        </div>
      </header>
      ${G.checkMsg?`<p class="muted small nw-checkmsg">${o(G.checkMsg)}</p>`:""}
      ${T()}
      <div class="nw-timeline">${(window.CHANGELOG||[]).map(m).join("")}</div>`)}function j(S){const O=H("#nav-news");O&&O.classList.toggle("hidden",!S)}async function h(){G.version&&GV.state.settings.lastSeenVersion!==G.version&&(GV.state.settings=await window.vault.saveSettings({lastSeenVersion:G.version})),j(!!(window.Updater&&Updater.available()))}async function I(S){const O=S.target.closest("[data-nw]");if(O&&(O.dataset.nw==="update"&&Updater.startDownload(),O.dataset.nw==="check")){G.checking=!0,G.checkMsg="",B();const N=await window.vault.update.check();G.checking=!1,G.checkMsg={latest:"Tu as la derni\xE8re version \u2713",available:"",dev:"Les mises \xE0 jour automatiques fonctionnent uniquement dans la version install\xE9e.",busy:"Recherche d\xE9j\xE0 en cours\u2026"}[N.status]??`Impossible de v\xE9rifier : ${N.message||"pas de connexion ?"}`,B()}}window.News={async init(){const S=await window.vault.update.info();G.version=S.version,H("#news-root").addEventListener("click",I);const O=GV.state.settings.lastSeenVersion;O!==G.version&&(j(!0),O&&setTimeout(()=>GV.toast(`Groove Vault est pass\xE9 en ${w(G.version)} : d\xE9couvre les nouveaut\xE9s !`,"ok"),2500))},render(){B(),h()},onUpdate(){j(!0),GV.state.view==="news"&&B()}}})(),(function(){const{esc:o,num:H,avatarHTML:G}=VL,w=(s,i=document)=>i.querySelector(s),V=()=>window.vault.reviews,C=()=>window.vault.albums,e={tab:"feed",feed:null,feedMore:!1,friends:null,top:null,user:null,search:null,query:"",error:null,loading:!1,page:null,albums:new Map,relCache:new Map,mine:new Map,mineLoaded:!1},T=s=>String(s).replace(".",","),m=()=>window.Social&&Social.isLoggedIn(),B=()=>Social.me(),j=s=>Social.ago(s);function h(s,i=""){return s==null?"":`<span class="stars ${i}" style="--p:${s/5*100}%" title="${T(s)} / 5" aria-label="${T(s)} \xE9toiles sur 5"></span>`}const I='<svg viewBox="0 0 24 24" class="heart-ico"><path d="M12 20.5s-7.5-4.6-9.3-9.6C1.5 7.6 3.6 4 7.2 4c2 0 3.6 1.1 4.8 2.8C13.2 5.1 14.8 4 16.8 4c3.6 0 5.7 3.6 4.5 6.9-1.8 5-9.3 9.6-9.3 9.6z"/></svg>',S='<svg viewBox="0 0 24 24"><path d="M7 10v10H4V10zM7 10l4-7c1.7 0 2.6 1.2 2.2 2.9L12.5 9H19a2 2 0 0 1 2 2.3l-1.2 7A2 2 0 0 1 17.8 20H7"/></svg>';function O(s){return s?{id:s.id,artist:s.artist||"",title:s.title||"",year:s.year||null,cover:s.cover||s.cover_url||"",genres:s.genres||[],rating_avg:s.rating_avg??null,rating_count:s.rating_count||0,review_count:s.review_count||0,love_count:s.love_count||0}:null}function N(s){if(!s||!s.id)return s;const i=e.albums.get(s.id)||{},l=O({...i,...Object.fromEntries(Object.entries(s).filter(([,c])=>c!=null&&c!==""))});return e.albums.set(s.id,l),l}const x=s=>({artist:s.artist,title:s.title,coverRemote:s.cover}),P=s=>VL.sleeveHTML(x(s),"");function b(s){const i=GV.state.collection.filter(l=>l.albumId===s||l.masterId&&"m"+l.masterId===s||l.discogsId&&"r"+l.discogsId===s);return[...new Set(i.map(l=>VL.isCD(l)?"cd":"vinyl"))]}const p={vinyl:"Vinyle",cd:"CD"},u=s=>p[s]?`<span class="rv-media m-${s}" title="\xC9cout\xE9 sur ${s==="cd"?"CD":"vinyle"}"><i></i>${p[s]}</span>`:"";function q(s,i){const l=b(s.id),c=i?i==="cd":l.length===1&&l[0]==="cd";return VL.vinylHTML({...x(s),format:c?"cd":"vinyl"},"")}function E(s){return GV.state.collection.find(i=>i.albumId===s||i.masterId&&"m"+i.masterId===s||i.discogsId&&"r"+i.discogsId===s)}const R=2;function J(s){return s.albumId||(s.masterId?"m"+s.masterId:null)}const $=s=>!!s.albumId&&s.albumRule===R;function y(s){return o(s).replace(/\n{2,}/g,"</p><p>").replace(/\n/g,"<br>")}function A(s,i={day:"numeric",month:"long",year:"numeric"}){return new Date(s.length===10?s+"T12:00:00":s).toLocaleDateString("fr-FR",i)}function W(s){const i=GV.errMsg(s),l=/script SQL/.test(i);return`<div class="card-panel rv-error">
      <h3>${l?"Le serveur doit \xEAtre mis \xE0 jour":"Impossible de charger les critiques"}</h3>
      <p class="muted">${o(i)}</p>
      ${l?`<p class="muted small">Ouvre ton projet Supabase \u2192 <i>SQL Editor</i> \u2192 nouvelle requ\xEAte, colle le script puis clique sur <i>Run</i>. Ta collection et tes amis ne sont pas touch\xE9s.</p>
        <div class="row"><button class="btn primary small" data-r="copy-schema">Copier le script SQL</button>
        <button class="btn ghost small" data-r="open" data-url="https://supabase.com/dashboard/projects">Ouvrir Supabase \u2197</button>
        <button class="btn ghost small" data-r="retry">R\xE9essayer</button></div>`:'<button class="btn ghost small" data-r="retry">R\xE9essayer</button>'}
    </div>`}const f=s=>`<div class="loader"><div class="loader-disc"></div><span>${s}</span></div>`;function n(s,i,l={}){const c=N(O(s.album))||{id:s.album_id,artist:"",title:""},v=s.author||{},D=m()&&v.id===B().id,se=(s.body||"").length>480||(s.body||"").split(`
`).length>7,oe=l.friendIds&&l.friendIds.includes(v.id),ve=new Date(s.updated_at)-new Date(s.created_at)>12e4,me=s.body?"a critiqu\xE9":s.rating!=null?"a not\xE9":"a eu un coup de c\u0153ur pour";return`<article class="rv-card ${l.compact?"compact":""}" data-rid="${s.id}" style="--i:${Math.min(i,20)}">
      ${l.showAlbum===!1?"":`<button class="rv-cover" data-r="album" data-aid="${o(c.id)}" title="Voir l'album">${P(c)}<span class="sleeve-gloss"></span></button>`}
      <div class="rv-main">
        ${l.showAuthor===!1?"":`<div class="rv-author">
          <button class="rv-user" data-r="user" data-uid="${o(v.id)}">${G(v,24)}<b>${o(v.username||"?")}</b></button>
          ${oe?'<span class="rv-pill">Ami</span>':""}${D?'<span class="rv-pill me">Toi</span>':""}
          <span class="muted">${l.showAlbum===!1?"":me}</span>
        </div>`}
        ${l.showAlbum===!1?"":`<div class="rv-album">
          <button data-r="album" data-aid="${o(c.id)}"><b>${o(c.title)}</b></button>${c.year?`<span>${o(c.year)}</span>`:""}
          <div class="rv-artist">${o(c.artist)}</div>
        </div>`}
        <div class="rv-rating">
          ${h(s.rating)}
          ${s.loved?`<span class="rv-loved" title="Coup de c\u0153ur">${I}</span>`:""}
          ${u(s.media)}
          ${s.listened_on?`<span class="rv-date">\xC9cout\xE9 le ${A(s.listened_on)}</span>`:""}
        </div>
        ${s.body?`<div class="rv-body ${se?"clamp":""}"><p>${y(s.body)}</p></div>
          ${se?'<button class="link-btn rv-more" data-r="more">Lire la suite</button>':""}`:""}
        <div class="rv-foot">
          <span class="muted small" title="${o(new Date(s.created_at).toLocaleString("fr-FR"))}">${j(s.created_at)}${ve?" \xB7 modifi\xE9e":""}</span>
          <button class="rv-like ${s.liked?"on":""}" data-r="like" data-rid="${s.id}" ${D?'disabled title="Ta critique"':`title="${s.liked?"Je n'aime plus":"J'aime cette critique"}"`}>
            ${S}<span>${s.like_count||0}</span>
          </button>
        </div>
      </div>
    </article>`}function L(s,i,l={}){const c=N(O(s)),v=e.mine.get(c.id),D=E(c.id);return`<article class="card al-tile" data-r="album" data-aid="${o(c.id)}" style="--i:${Math.min(i,24)}">
      <div class="card-stage">
        ${q(c)}
        <div class="sleeve">${P(c)}<div class="sleeve-gloss"></div></div>
        ${l.rank?`<span class="al-rank">${l.rank}</span>`:""}
        ${D?'<span class="common-badge" title="Dans ta collection">Dans ta collection</span>':""}
      </div>
      <div class="card-info">
        <div class="card-title" title="${o(c.title)}">${o(c.title)}</div>
        <div class="card-artist">${o(c.artist)}</div>
        <div class="card-foot">
          <span>${o(c.year||"")}</span>
          ${c.rating_count?`<span class="al-score" title="${H(c.rating_count)} note${c.rating_count>1?"s":""}">${h(c.rating_avg,"xs")} ${T(c.rating_avg.toFixed(1))}</span>`:'<span class="dim small">pas encore not\xE9</span>'}
        </div>
        ${v&&v.rating!=null?`<div class="al-mine">Ta note ${h(v.rating,"xs")}</div>`:""}
      </div>
    </article>`}function F(s,i={}){const l=Array.from({length:10},(D,se)=>({v:(se+1)/2,n:0}));for(const D of s){const se=Math.round(D*2)-1;l[se]&&l[se].n++}const c=Math.max(1,...l.map(D=>D.n)),v=s.length||1;return`<div class="dist ${i.cls||""}" role="img" aria-label="R\xE9partition des notes">
      <span class="dist-end">${h(.5,"xs")}</span>
      <div class="dist-bars">${l.map(D=>`
        <div class="dist-col" data-tip="${T(D.v)} \u2605 \xB7 ${D.n} note${D.n>1?"s":""} (${Math.round(D.n/v*100)} %)">
          <i style="height:${D.n?Math.max(4,D.n/c*100):0}%"></i>
        </div>`).join("")}</div>
      <span class="dist-end">${h(5,"xs")}</span>
    </div>`}const Z=[["feed","Fil d'actualit\xE9"],["friends","Mes amis"],["top","Les mieux not\xE9s"],["mine","Mes critiques"]];function z(){return`<header class="view-head rv-head">
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
      <div class="rv-login-art">${[4.5,3,5].map((s,i)=>`<div class="rv-login-disc" style="--i:${i}">${h(s,"sm")}</div>`).join("")}</div>
      <h2>Ton journal d'\xE9coute</h2>
      <p class="muted">Note tes albums de \xBD \xE0 5 \xE9toiles, \xE9cris ce que tu en as pens\xE9, marque tes coups de c\u0153ur
        et lis les critiques de tes amis et de toute la communaut\xE9 Groove Vault.</p>
      <button class="btn primary" data-goto="profile">Cr\xE9er mon profil ou me connecter</button>
    </div>`}function d(){const s=w("#reviews-root");(!s.firstChild||!w("#rv-content",s))&&(s.innerHTML=z()),s.querySelectorAll("#rv-tabs button").forEach(c=>c.classList.toggle("active",c.dataset.tab===e.tab));const i=w("#rv-content");if(!m()){w(".rv-tabs",s).classList.add("hidden"),i.innerHTML=ee();return}if(w(".rv-tabs",s).classList.remove("hidden"),e.error){i.innerHTML=W(e.error);return}const l=e.tab;if(l==="feed")return K(i,"feed");if(l==="friends")return K(i,"friends");if(l==="top")return Y(i);if(l==="mine"||l==="user")return ie(i);if(l==="search")return de(i)}async function g(s,i){e.error=null;try{e[s]=await i()}catch(l){e.error=l}GV.state.view==="reviews"&&d()}function U(){const s=GV.state.collection.filter(l=>(l.discogsId||l.albumId)&&!(J(l)&&e.mine.has(J(l))));if(!s.length)return"";const i=s.slice(0,10);return`<div class="rv-torate">
      <div class="section-title">\xC0 noter dans ta collection <small>${H(s.length)}</small></div>
      <div class="rv-torate-row">${i.map(l=>`
        <button class="rv-torate-item" data-r="rate-record" data-id="${l.id}" title="${o(l.artist)} - ${o(l.title)}">
          <span class="rv-torate-cover">${VL.sleeveHTML(l,GV.state.base)}</span>
          <span class="rv-torate-cta">${h(0,"xs")}Noter</span>
        </button>`).join("")}</div>
    </div>`}function K(s,i){const l=e[i];if(!l){s.innerHTML=f("Chargement des critiques\u2026"),g(i,()=>V().feed({scope:i==="friends"?"friends":"all"}));return}const c=Social.friendIds&&Social.friendIds()||[];let v=i==="feed"?U():"";l.reviews.length?(v+=`<div class="rv-feed">${l.reviews.map((D,se)=>n(D,se,{friendIds:c})).join("")}</div>`,l.reviews.length>=30&&!l.end&&(v+=`<div class="rv-morewrap"><button class="btn ghost" data-r="feed-more" data-key="${i}">Afficher plus</button></div>`)):v+=`<div class="rv-empty">
        <div class="empty-disc"></div>
        <h2>${l.noFriends?"Tu n'as pas encore d'amis":i==="friends"?"Tes amis n'ont encore rien publi\xE9":"Aucune critique pour le moment"}</h2>
        <p class="muted">${l.noFriends?"Ajoute des amis dans \xAB Profil & amis \xBB pour suivre leurs critiques ici.":"Sois le premier : cherche un album ci-dessus ou note un disque de ta collection."}</p>
        ${l.noFriends?'<button class="btn primary" data-goto="profile">Trouver des amis</button>':""}
      </div>`,s.innerHTML=v}async function X(s){const i=s.dataset.key,l=e[i];s.disabled=!0,s.classList.add("loading");try{const c=l.reviews[l.reviews.length-1],v=await V().feed({scope:i==="friends"?"friends":"all",before:c.created_at});l.reviews.push(...v.reviews),v.reviews.length<30&&(l.end=!0),d()}catch(c){GV.toast(GV.errMsg(c),"error"),s.disabled=!1,s.classList.remove("loading")}}function Y(s){if(!e.top){s.innerHTML=f("Classement des albums\u2026"),g("top",()=>V().top());return}s.innerHTML=e.top.length?`<p class="muted small rv-hint">Classement par note moyenne des membres de Groove Vault.</p>
        <div class="grid al-grid">${e.top.map((i,l)=>L(i,l,{rank:l+1})).join("")}</div>`:'<div class="rv-empty"><div class="empty-disc"></div><h2>Aucun album not\xE9</h2><p class="muted">Le classement se remplira au fil des notes de la communaut\xE9.</p></div>'}function ie(s){const i=e.tab==="mine",l=i?e.mineData:e.user;if(!l){s.innerHTML=f("Chargement des critiques\u2026");const ae=i?B().id:e.userId;g(i?"mineData":"user",()=>V().user(ae));return}const{profile:c,reviews:v}=l,D=v.filter(ae=>ae.rating!=null).map(ae=>ae.rating),se=D.length?D.reduce((ae,re)=>ae+re,0)/D.length:null,oe=v.filter(ae=>ae.loved).length,ve=v.filter(ae=>ae.body).length,me=v.filter(ae=>ae.loved).slice(0,6);s.innerHTML=`
      ${i?"":'<button class="btn ghost small back" data-r="back-tab">\u2190 Retour</button>'}
      <div class="rv-profile">
        <div class="rv-profile-id">
          ${G(c,72)}
          <div>
            <h2>${i?"Mes critiques":`Critiques de ${o(c.username)}`}</h2>
            <div class="rv-profile-stats">
              <div><b>${H(v.length)}</b><span>album${v.length>1?"s":""} not\xE9${v.length>1?"s":""}</span></div>
              <div><b>${H(ve)}</b><span>critique${ve>1?"s":""}</span></div>
              <div><b>${H(oe)}</b><span>coup${oe>1?"s":""} de c\u0153ur</span></div>
              <div><b>${se==null?"-":T(se.toFixed(1))}</b><span>note moyenne</span></div>
            </div>
            ${!i&&l.isFriend?`<button class="btn ghost small" data-r="friend-collection" data-uid="${o(c.id)}">Voir sa collection</button>`:""}
          </div>
        </div>
        ${D.length?`<div class="rv-profile-dist"><div class="section-title">${i?"Mes notes":"Ses notes"}</div>${F(D,{cls:"compact"})}</div>`:""}
      </div>
      ${me.length?`<div class="rv-loves">
        <div class="section-title">Coups de c\u0153ur</div>
        <div class="rv-loves-row">${me.map(ae=>{const re=N(O(ae.album));return`<button class="rv-love-item" data-r="album" data-aid="${o(re.id)}" title="${o(re.artist)} - ${o(re.title)}">${P(re)}<span class="sleeve-gloss"></span></button>`}).join("")}</div>
      </div>`:""}
      ${v.length?`<div class="section-title">Journal <small>${v.length}</small></div>
           <div class="rv-feed">${v.map((ae,re)=>n(ae,re,{showAuthor:!1})).join("")}</div>`:`<div class="rv-empty"><div class="empty-disc"></div><h2>${i?"Tu n'as encore rien not\xE9":"Aucune critique"}</h2>
           <p class="muted">${i?"Cherche un album en haut de la page, ou ouvre un disque de ta collection et clique sur \xAB Noter l'album \xBB.":`${o(c.username)} n'a encore publi\xE9 aucune critique.`}</p></div>`}`}function de(s){const i=e.search;if(!i){s.innerHTML=f("Recherche des albums\u2026");return}const l=`<div class="rv-search-head">
      <span>R\xE9sultats pour <b>\xAB ${o(e.query)} \xBB</b></span>
      <button class="link-btn" data-r="clear-search">Effacer la recherche</button>
    </div>`,c=i.tokenMissing?`<div class="token-warning">Sans jeton Discogs, seuls les albums d\xE9j\xE0 not\xE9s sur Groove Vault apparaissent.
         Ajoute ton jeton dans <a href="#" data-goto="settings">R\xE9glages</a> pour chercher dans tout le catalogue.</div>`:"";if(i.error){s.innerHTML=l+c+`<p class="warn">${o(i.error)}</p>`;return}s.innerHTML=l+c+(i.results.length?`<div class="grid al-grid">${i.results.map((v,D)=>L(v,D)).join("")}</div>`:`<p class="muted no-match">Aucun album trouv\xE9. Essaie avec le nom de l'artiste et le titre, ou colle directement le lien Discogs de l'album.</p>`)}async function ue(s){if(e.query=s.trim(),!(e.query.length<2)){e.tab="search",e.search=null,e.error=null,d();try{e.search=await C().search(e.query)}catch(i){e.search={results:[],error:GV.errMsg(i)}}e.tab==="search"&&d()}}async function pe(s,i={}){const l=N(O(s));if(!l||!l.id)return;let c=i.returnTo||GV.state.view;c==="album"&&(c=e.page&&e.page.returnTo||"reviews"),e.page={album:l,data:null,details:null,draft:null,returnTo:c,error:null,media:i.media||null},GV.go("album"),w("#view-album").scrollTop=0,t(),m()&&(he(l.id),C().details(l.id).then(v=>{!e.page||e.page.album.id!==l.id||(e.page.details=v,e.page.album=N({...v,...e.page.album,cover:e.page.album.cover||v.cover,year:e.page.album.year||v.year,genres:e.page.album.genres.length?e.page.album.genres:v.genres}),t())}).catch(()=>{}))}async function he(s){try{const i=await V().album(s);if(!e.page||e.page.album.id!==s)return;e.page.data=i,e.page.error=null,i.album&&(e.page.album=N({...e.page.album,...O(i.album),cover:e.page.album.cover||i.album.cover_url}));const l=i.reviews.find(c=>c.user_id===i.me);(!e.page.draft||e.page.draftFrom!==(l&&l.updated_at))&&(e.page.draft=l?{rating:l.rating,body:l.body,loved:l.loved,listened_on:l.listened_on||"",media:l.media||null}:{rating:null,body:"",loved:!1,listened_on:"",media:e.page.media||(b(s).length===1?b(s)[0]:null)},e.page.draftFrom=l&&l.updated_at),e.page.mine=l||null,Le(s,l)}catch(i){e.page&&e.page.album.id===s&&(e.page.error=i)}GV.state.view==="album"&&e.page&&e.page.album.id===s&&t()}function Le(s,i){const l=e.mine.has(s);i?e.mine.set(s,{rating:i.rating,loved:i.loved}):e.mine.delete(s),(l!==!!i||i)&&GV.renderCollection()}function ke(s){return`<div class="star-input" id="star-input" tabindex="0" role="slider" aria-label="Ta note" aria-valuemin="0" aria-valuemax="5"
        aria-valuenow="${s||0}" style="--p:${(s||0)/5*100}%">
        <span class="stars xl"></span>
      </div>`}function ye(s){if(s==null)return'<span class="dim">Pas de note</span>';const i={.5:"Insupportable",1:"Mauvais",1.5:"Faible",2:"Bof",2.5:"Moyen",3:"Bien",3.5:"Tr\xE8s bien",4:"Excellent",4.5:"Superbe",5:"Chef-d'\u0153uvre"};return`<b>${T(s)}</b> / 5 <span class="dim">\xB7 ${i[s]}</span>`}function Te(){const s=e.page,i=s.draft,l=B();return`<form class="card-panel my-review" id="review-form">
      <div class="mr-head">
        ${G(l,36)}
        <div>
          <b>${s.mine?"Ta critique":"\xC9crire une critique"}</b>
          <span class="muted small">${s.mine?`Publi\xE9e ${j(s.mine.created_at)}${s.mine.like_count?` \xB7 ${s.mine.like_count} j'aime`:""}`:"Note l'album, donne ton avis ou marque-le en coup de c\u0153ur"}</span>
        </div>
      </div>
      <div class="mr-rate">
        ${ke(i.rating)}
        <span class="mr-val" id="mr-val">${ye(i.rating)}</span>
        ${i.rating!=null?'<button type="button" class="link-btn" data-r="clear-rating">Retirer la note</button>':""}
        <button type="button" class="heart-btn ${i.loved?"on":""}" data-r="love" title="${i.loved?"Retirer le coup de c\u0153ur":"Coup de c\u0153ur"}" aria-pressed="${i.loved}">${I}<span>Coup de c\u0153ur</span></button>
      </div>
      <textarea name="body" id="mr-body" maxlength="4000" rows="5" placeholder="Qu'as-tu pens\xE9 de cet album ? Les morceaux qui t'ont marqu\xE9, l'ambiance, le son du pressage\u2026">${o(i.body)}</textarea>
      <div class="mr-foot">
        <div class="mr-media" role="group" aria-label="\xC9cout\xE9 sur">
          <span>\xC9cout\xE9 sur</span>
          <div class="seg small">${Object.entries(p).map(([c,v])=>`<button type="button" data-r="media" data-m="${c}" class="${i.media===c?"active":""}">${v}</button>`).join("")}</div>
        </div>
        <label class="mr-date">\xC9cout\xE9 le <input type="date" name="listened_on" value="${o(i.listened_on)}" max="${new Date().toISOString().slice(0,10)}"></label>
        <span class="muted small ${i.body.length<3500?"hidden":""}" id="mr-count">${i.body.length} / 4000</span>
        <span class="mr-spacer"></span>
        ${s.mine?'<button type="button" class="btn danger small" data-r="delete-review">Supprimer</button>':""}
        <button class="btn primary" type="submit">${s.mine?"Mettre \xE0 jour":"Publier"}</button>
      </div>
    </form>`}function t(){const s=w("#album-root"),i=e.page;if(!i){s.innerHTML="";return}const l=i.album,c=i.data,v=i.details,D=E(l.id),se=c?c.ratings:[],oe=se.length?se.reduce((ce,fe)=>ce+fe,0)/se.length:null,ve=[...new Set([...l.genres||[],...v&&v.styles||[]])].slice(0,6),me={reviews:"Critiques",collection:"Ma collection",friend:"Collection de ton ami",profile:"Profil",feed:"Fil d'actualit\xE9"}[i.returnTo]||"Retour",ae=l.cover;let re;if(!m())re=ee();else if(i.error)re=W(i.error);else if(!c)re=f("Chargement des critiques\u2026");else{const ce=c.reviews.filter(fe=>fe.user_id!==c.me).sort((fe,$e)=>c.friendIds.includes($e.user_id)-c.friendIds.includes(fe.user_id)||$e.like_count-fe.like_count||$e.created_at.localeCompare(fe.created_at));re=`${Te()}
        <div class="section-title al-reviews-title">Critiques <small>${ce.length}</small></div>
        ${ce.length?`<div class="rv-list">${ce.map((fe,$e)=>n(fe,$e,{showAlbum:!1,friendIds:c.friendIds})).join("")}</div>`:`<p class="muted">Personne d'autre n'a encore donn\xE9 son avis sur cet album.</p>`}`}const Me=v&&v.tracklist||[];s.innerHTML=`
      <div class="al-hero">
        <div class="al-ambient" ${ae?`style="background-image:url('${o(ae)}')"`:`style="--h:${VL.hashHue(l.artist+l.title)}" data-gen="1"`}></div>
        <button class="btn ghost small back" data-r="back">\u2190 ${o(me)}</button>
        <div class="al-hero-inner">
          <div class="al-art">
            <div class="card-stage al-stage">
              ${q(l,i.draft&&i.draft.media)}
              <div class="sleeve">${P(l)}<div class="sleeve-gloss"></div></div>
            </div>
          </div>
          <div class="al-info">
            <div class="al-artist">${o(l.artist)}</div>
            <h1 class="al-title">${o(l.title)}</h1>
            <div class="al-meta">${[l.year,...ve].filter(Boolean).map(ce=>`<span>${o(ce)}</span>`).join("")}</div>
            <div class="al-badges">
              ${D?`<button class="tier-pill" style="--tier:#4cc38a" data-r="open-record" data-id="${D.id}">Dans ta collection \xB7 ${b(l.id).map(ce=>ce==="cd"?"CD":"vinyle").join(" et ")}</button>`:""}
              ${c&&c.album&&c.album.love_count?`<span class="tier-pill" style="--tier:#ff6b5f">${I.replace('class="heart-ico"','class="heart-ico tiny"')} ${H(c.album.love_count)} coup${c.album.love_count>1?"s":""} de c\u0153ur</span>`:""}
            </div>
          </div>
          <div class="al-scorebox">
            <div class="al-avg ${oe==null?"empty":""}">
              <b>${oe==null?"":T(oe.toFixed(1))}</b>
              <div>${h(oe==null?0:Math.round(oe*2)/2,"sm")}
                <span class="muted small">${c?se.length?`${H(se.length)} note${se.length>1?"s":""}`:"Pas encore de note":"Chargement\u2026"}</span></div>
            </div>
            ${F(se)}
          </div>
        </div>
      </div>
      <div class="al-body">
        <div class="al-main">${re}</div>
        <aside class="al-side">
          ${Me.length?`<div class="card-panel"><div class="section-title">Pistes <small>${Me.length}</small></div>
            <ol class="tracks">${Me.map(ce=>`<li><span class="pos">${o(ce.position)}</span><span class="tt">${o(ce.title)}</span><span class="dur">${o(ce.duration||"")}</span></li>`).join("")}</ol></div>`:v?"":'<div class="card-panel"><div class="section-title">Pistes</div><div class="loader small"><div class="loader-disc"></div></div></div>'}
          ${v&&v.url?`<button class="btn ghost small" data-r="open" data-url="${o(v.url)}">Voir sur Discogs \u2197</button>`:""}
        </aside>
      </div>`}function r(){const s=w(".al-stage");if(!s||!e.page)return;const i=s.querySelector(".vinyl"),l=document.createElement("div");l.innerHTML=q(e.page.album,e.page.draft&&e.page.draft.media),i.replaceWith(l.firstElementChild)}function a(s){const i=w("#star-input");i&&(i.style.setProperty("--p",`${(s||0)/5*100}%`),w("#mr-val").innerHTML=ye(s))}function M(s,i){const l=w(".stars",s).getBoundingClientRect(),c=Math.min(Math.max(i-l.left,0),l.width);return Math.min(5,Math.max(.5,Math.ceil(c/l.width*10)/2))}async function k(s){const i=e.page,l=w("button[type=submit]",s);i.draft.body=s.body.value,i.draft.listened_on=s.listened_on.value,l.disabled=!0,l.classList.add("loading");try{const c=i.album;await V().save({id:c.id,artist:c.artist,title:c.title,year:c.year,cover:c.cover,genres:c.genres},i.draft),GV.toast(i.mine?"Critique mise \xE0 jour":"Critique publi\xE9e","ok"),_(),i.draftFrom=void 0,i.draft=null,await he(c.id)}catch(c){GV.toast(GV.errMsg(c),"error"),l.disabled=!1,l.classList.remove("loading")}}function _(){e.feed=null,e.friends=null,e.top=null,e.mineData=null,e.user&&(e.user=null)}async function te(s,i={}){if(!m()){GV.go("reviews");return}const l=$(s)||!s.discogsId?J(s):null,c={artist:s.artist,title:s.title,year:s.year,cover:VL.coverUrl(s,"")||"",genres:s.genres};if(i={...i,media:VL.isCD(s)?"cd":"vinyl"},l)return pe({...c,...e.albums.get(l)||{},id:l},i);if(!s.discogsId){GV.go("reviews"),w("#rv-q").value=`${s.artist} ${s.title}`,ue(`${s.artist} ${s.title}`);return}GV.toast("Recherche de l'album sur Discogs\u2026");try{let v=e.relCache.get(s.discogsId);v||(v=await C().forRelease(s.discogsId),e.relCache.set(s.discogsId,v));const D=GV.state.collection.find(se=>se.id===s.id);D&&(D.albumId!==v.id||D.albumRule!==R)&&(D.albumId=v.id,D.albumRule=R,D.masterId=v.masterId||D.masterId||null,GV.persist(D)),pe({...c,...v,cover:v.cover||c.cover},i)}catch(v){GV.toast(GV.errMsg(v),"error")}}function Q(s){s&&(m()&&s.id===B().id?e.tab="mine":(e.prevTab=e.tab==="user"?e.prevTab:e.tab,e.tab="user",e.userId!==s.id&&(e.user=null),e.userId=s.id),GV.go("reviews"),w("#view-reviews").scrollTop=0)}async function ne(){if(!m()){e.mine.clear(),e.mineLoaded=!1;return}try{const s=await V().mine();e.mine=new Map(s.map(i=>[i.album_id,{rating:i.rating,loved:i.loved}])),e.mineLoaded=!0,GV.renderCollection()}catch{}}function ge(s){return[e.feed,e.friends,e.user,e.mineData,e.page&&e.page.data,e.external&&{reviews:e.external}].filter(Boolean).flatMap(l=>l.reviews||[]).filter(l=>l.id===s)}async function le(s){const i=s.target.closest("[data-r]");if(!i)return;switch(i.dataset.r){case"album":{const c=e.albums.get(i.dataset.aid);c&&pe(c);break}case"user":{const c=ge(i.closest("[data-rid]")?.dataset.rid)[0];Q(c?c.author:{id:i.dataset.uid});break}case"more":{const c=i.previousElementSibling;c.classList.toggle("clamp"),i.textContent=c.classList.contains("clamp")?"Lire la suite":"R\xE9duire";break}case"like":{if(i.disabled)return;const c=i.dataset.rid,v=ge(c),D=!i.classList.contains("on"),se=(ve,me)=>{v.forEach(ae=>{ae.liked=ve,ae.like_count=me}),document.querySelectorAll(`.rv-like[data-rid="${c}"]`).forEach(ae=>{ae.classList.toggle("on",ve),w("span",ae).textContent=me})},oe=v[0]?v[0].like_count:+w("span",i).textContent;se(D,Math.max(0,oe+(D?1:-1))),D&&i.classList.add("pop"),setTimeout(()=>i.classList.remove("pop"),500);try{se(D,await V().like(c,D))}catch(ve){se(!D,oe),GV.toast(GV.errMsg(ve),"error")}break}case"feed-more":X(i);break;case"clear-search":e.query="",e.search=null,e.tab="feed",w("#rv-q").value="",d();break;case"back-tab":e.tab=e.prevTab&&e.prevTab!=="user"?e.prevTab:"feed",d();break;case"friend-collection":Social.openFriend(i.dataset.uid);break;case"rate-record":{const c=GV.state.collection.find(v=>v.id===i.dataset.id);c&&te(c,{returnTo:"reviews"});break}case"copy-schema":await window.vault.copySchema(),GV.toast("Script SQL copi\xE9 dans le presse-papiers","ok");break;case"open":window.vault.openExternal(i.dataset.url);break;case"retry":e.error=null,_(),GV.state.view==="album"&&e.page?(e.page.error=null,t(),he(e.page.album.id),ne()):d();break;case"back":GV.go(e.page?e.page.returnTo:"reviews");break;case"open-record":GV.openDetail(i.dataset.id);break;case"love":e.page.draft.loved=!e.page.draft.loved,i.classList.toggle("on",e.page.draft.loved),i.setAttribute("aria-pressed",e.page.draft.loved),e.page.draft.loved&&(i.classList.add("pop"),setTimeout(()=>i.classList.remove("pop"),500));break;case"media":e.page.draft.media=e.page.draft.media===i.dataset.m?null:i.dataset.m,i.parentElement.querySelectorAll("[data-m]").forEach(c=>c.classList.toggle("active",c.dataset.m===e.page.draft.media)),r();break;case"clear-rating":e.page.draft.rating=null,be();break;case"delete-review":if(!i.dataset.confirm){i.dataset.confirm="1",i.textContent="Confirmer",setTimeout(()=>{i.isConnected&&(delete i.dataset.confirm,i.textContent="Supprimer")},3e3);return}try{await V().remove(e.page.album.id),GV.toast("Critique supprim\xE9e"),_(),e.page.draft=null,e.page.draftFrom=void 0,await he(e.page.album.id)}catch(c){GV.toast(GV.errMsg(c),"error")}break}}function be(){const s=w("#review-form");s&&(e.page.draft.body=s.body.value,e.page.draft.listened_on=s.listened_on.value),t()}function we(){const s=w("#reviews-root"),i=w("#album-root");s.addEventListener("click",le),i.addEventListener("click",le),s.addEventListener("click",l=>{const c=l.target.closest("#rv-tabs [data-tab]");c&&(e.tab=c.dataset.tab,e.error=null,e.tab==="mine"&&(e.mineData=null),d())}),s.addEventListener("submit",l=>{l.target.id==="rv-search"&&(l.preventDefault(),ue(w("#rv-q").value))}),i.addEventListener("mousemove",l=>{const c=l.target.closest("#star-input");c&&a(M(c,l.clientX))}),i.addEventListener("mouseout",l=>{const c=l.target.closest("#star-input");c&&!c.contains(l.relatedTarget)&&a(e.page.draft.rating)}),i.addEventListener("click",l=>{const c=l.target.closest("#star-input");if(!c)return;const v=M(c,l.clientX);e.page.draft.rating=e.page.draft.rating===v?null:v,be();const D=w("#star-input");D&&(D.classList.add("pop"),setTimeout(()=>D.classList.remove("pop"),400))}),i.addEventListener("keydown",l=>{if(!l.target.closest("#star-input")||!["ArrowLeft","ArrowRight","ArrowDown","ArrowUp","Delete","Backspace"].includes(l.key))return;l.preventDefault();const v=e.page.draft.rating||0;let D=["ArrowRight","ArrowUp"].includes(l.key)?v+.5:v-.5;(l.key==="Delete"||l.key==="Backspace")&&(D=0),e.page.draft.rating=D<=0?null:Math.min(5,D),be(),w("#star-input").focus()}),i.addEventListener("input",l=>{if(l.target.id==="mr-body"){e.page.draft.body=l.target.value;const c=w("#mr-count");c.textContent=`${l.target.value.length} / 4000`,c.classList.toggle("hidden",l.target.value.length<3500)}}),i.addEventListener("submit",l=>{l.target.id==="review-form"&&(l.preventDefault(),k(l.target))})}window.Reviews={init(){we()},render:d,renderAlbum:t,openAlbum:pe,openForRecord:te,openUser:Q,onAuth(){_(),e.user=null,e.error=null,ne(),GV.state.view==="reviews"&&d(),GV.state.view==="album"&&(t(),e.page&&m()&&he(e.page.album.id))},myCount:()=>e.mine.size,ratingFor(s){const i=J(s);return i&&e.mine.get(i)||s.discogsId&&e.mine.get("r"+s.discogsId)||null},starsHTML:h,cardHTML:n,attach(s){s.addEventListener("click",le)},setExternal(s){e.external=s},fmtR:T}})(),(function(){const{esc:o,num:H,money:G,avatarHTML:w}=VL,V=($,y=document)=>y.querySelector($),C=8,e=600*1e3,T={filter:"all",data:null,reviews:[],error:null,loading:!1,loadedAt:0,expanded:new Set,recs:new Map},m=()=>window.Social&&Social.isLoggedIn(),B=()=>GV.state.settings.feedSeenAt||new Date(Date.now()-7*864e5).toISOString();async function j(){if(!(!m()||T.loading)){T.loading=!0;try{const[$,y]=await Promise.allSettled([window.vault.feed.friends(),window.vault.reviews.feed({scope:"friends"})]);if($.status==="rejected")throw $.reason;T.data=$.value,T.reviews=y.status==="fulfilled"?y.value.reviews:[],Reviews.setExternal(T.reviews),T.error=null,T.loadedAt=Date.now()}catch($){T.error=$}T.loading=!1,I(),GV.state.view==="feed"&&(q(),S())}}function h($=!1){if(!T.data)return[];const y=new Map(T.data.profiles.map(f=>[f.id,f])),A=new Map;for(const f of T.data.additions){const n=new Date(f.record.addedAt).toLocaleDateString("sv"),L=`${f.userId}|${n}`;A.has(L)||A.set(L,{type:"add",key:L,user:y.get(f.userId),date:f.record.addedAt,records:[]}),A.get(L).records.push(f.record)}const W=[...A.values()].filter(f=>f.user);for(const f of T.reviews)W.push({type:"review",key:"rv"+f.id,user:f.author,date:f.created_at,review:f});return W.filter(f=>$||T.filter==="all"||(T.filter==="adds"?f.type==="add":f.type==="review")).sort((f,n)=>n.date.localeCompare(f.date))}function I(){const $=V("#nav-feed");if(!$)return;const y=B(),A=m()&&T.data&&GV.state.view!=="feed"?h(!0).filter(W=>W.date>y).length:0;$.textContent=A>99?"99+":A,$.classList.toggle("hidden",A===0)}async function S(){const $=h(!0)[0],y=new Date().toISOString();$&&$.date>(GV.state.settings.feedSeenAt||"")&&(GV.state.settings=await window.vault.saveSettings({feedSeenAt:y})),I()}function O($){const y=new Date($),A=new Date,W=Math.round((new Date(A.toDateString())-new Date(y.toDateString()))/864e5);if(W<=0)return"Aujourd'hui";if(W===1)return"Hier";if(W<7){const f=y.toLocaleDateString("fr-FR",{weekday:"long"});return f.charAt(0).toUpperCase()+f.slice(1)}return y.toLocaleDateString("fr-FR",{day:"numeric",month:"long",...y.getFullYear()!==A.getFullYear()?{year:"numeric"}:{}})}function N($){return $.discogsId&&GV.state.collection.some(y=>y.discogsId===$.discogsId)}function x($,y){const A=GV.rarityOf(y),W=GV.valueOf(y),f=y.condition&&y.condition.media,n=(VL.isCD(y)?["CD",y.discs>1?`${y.discs} CD`:""]:[`${y.sizeInch||12}"`,y.rpm===45?"45 tours":y.rpm===78?"78 tours":"33\u2153 tours",y.discs>1?`${y.discs} disques`:""]).filter(Boolean).join(" \xB7 "),L=[...y.genres||[],...y.styles||[]].slice(0,4);return`<div class="fd-single card" data-id="${o(y.id)}" style="--tier:${A.tier.color}">
      <div class="fd-single-art">
        <div class="card-stage">
          ${VL.vinylHTML(y,"")}
          <div class="sleeve">${VL.sleeveHTML(y,"")}<div class="sleeve-gloss"></div></div>
        </div>
      </div>
      <div class="fd-single-info">
        <div class="fd-artist">${o(y.artist)}</div>
        <div class="fd-title">${o(y.title)}</div>
        <div class="fd-meta">${[y.year,y.label,y.catno,y.country].filter(Boolean).map(o).join(" \xB7 ")}</div>
        <div class="fd-chips">
          <span class="tier-pill" style="--tier:${A.tier.color}">${A.tier.label}${A.score!=null?` <small>${A.score}/100</small>`:""}</span>
          <span class="chip">${n}</span>
          ${y.vinylColor?`<span class="chip color" style="--c:${o(y.vinylColor.primary)}"><i></i>${o(y.vinylColor.label||"Vinyle color\xE9")}</span>`:""}
          ${f?`<span class="chip">\xC9tat ${o(f)}</span>`:""}
          ${N(y)?'<span class="tier-pill" style="--tier:#4cc38a">Tu as aussi ce pressage</span>':""}
        </div>
        ${L.length?`<div class="fd-tags">${L.map(F=>`<span>${o(F)}</span>`).join("")}</div>`:""}
        <div class="fd-bottom">
          <div class="fd-value"><span>Cote estim\xE9e</span><b>${W?G(W.value,W.currency):"-"}</b></div>
          <div class="fd-actions">
            <button class="btn primary small" data-fd="open">Voir le disque</button>
            <button class="btn ghost small" data-fd="rate">Noter l'album</button>
          </div>
        </div>
      </div>
    </div>`}function P($,y){const A=$.records.length,W=$.user.id;for(const F of $.records)T.recs.set(`${W}|${F.id}`,F);const f=$.records.reduce((F,Z)=>F+((GV.valueOf(Z)||{}).value||0),0),n=T.expanded.has($.key),L=n?$.records:$.records.slice(0,C);return`<article class="fd-item" data-uid="${o(W)}" style="--i:${Math.min(y,12)}">
      <div class="fd-head">
        <button class="fd-user" data-fd="friend">${w($.user,36)}</button>
        <div class="fd-head-text">
          <div><button class="fd-name" data-fd="friend">${o($.user.username)}</button>
            a ajout\xE9 ${A===1?VL.isCD($.records[0])?"un CD":"un vinyle":`<b>${H(A)} disques</b>`} \xE0 sa collection</div>
          <span class="muted small">${Social.ago($.date)}${A>1&&f?` \xB7 ${G(f,GV.cur(),0)} au total`:""}</span>
        </div>
        <button class="btn ghost small" data-fd="friend">Sa collection</button>
      </div>
      ${A===1?x(W,$.records[0]):`<div class="grid fd-grid">${L.map((F,Z)=>GV.cardHTML(F,Z,{foreign:!0})).join("")}</div>
           ${A>C?`<button class="link-btn fd-more" data-fd="more" data-key="${o($.key)}">${n?"R\xE9duire":`Voir les ${A-C} autres`}</button>`:""}`}
    </article>`}function b($,y){return`<div class="fd-item fd-review-item" style="--i:${Math.min(y,12)}">${Reviews.cardHTML($.review,y,{friendIds:Social.friendIds()})}</div>`}function p(){return`<header class="view-head">
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
      <div id="fd-content"></div>`}function u($,y,A){return`<div class="rv-empty"><div class="empty-disc"></div><h2>${$}</h2><p class="muted">${y}</p>${A||""}</div>`}function q(){const $=V("#fd-content");if(!$)return;if(!m()){$.innerHTML=u("Connecte-toi pour suivre tes amis","Le fil affiche les vinyles que tes amis ajoutent \xE0 leur collection et leurs critiques d'albums.",'<button class="btn primary" data-goto="profile">Cr\xE9er mon profil ou me connecter</button>');return}if(T.error&&!T.data){$.innerHTML=`<div class="card-panel rv-error"><h3>Impossible de charger le fil</h3><p class="muted">${o(GV.errMsg(T.error))}</p>
        <button class="btn ghost small" data-fd="refresh">R\xE9essayer</button></div>`;return}if(!T.data){$.innerHTML=`<div class="loader"><div class="loader-disc"></div><span>Chargement de l'actualit\xE9 de tes amis\u2026</span></div>`;return}if(T.data.noFriends){$.innerHTML=u("Tu n'as pas encore d'amis","Ajoute des amis dans \xAB Profil & amis \xBB : leurs nouveaux vinyles appara\xEEtront ici.",'<button class="btn primary" data-goto="profile">Trouver des amis</button>');return}const y=h();if(!y.length){$.innerHTML=u("Rien de neuf pour le moment",T.filter==="reviews"?"Tes amis n'ont pas encore publi\xE9 de critique.":"Aucun de tes amis n'a ajout\xE9 de vinyle ces 3 derniers mois. Reviens plus tard !");return}T.recs.clear();const A=GV.state.settings.feedSeenAt;let W="",f="";y.forEach((n,L)=>{const F=O(n.date);F!==f&&(W+=`<div class="fd-day">${F}</div>`,f=F);const Z=A&&n.date>A?" fresh":"";W+=(n.type==="add"?P(n,L):b(n,L)).replace('class="fd-item',`class="fd-item${Z}`)}),$.innerHTML=`<div class="fd-list">${W}</div>`}function E(){const $=V("#feed-root");V("#fd-content",$)||($.innerHTML=p()),$.querySelectorAll("#fd-filter button").forEach(y=>y.classList.toggle("active",y.dataset.f===T.filter)),q(),T.data&&S(),m()&&Date.now()-T.loadedAt>6e4&&j()}function R($){const y=$.closest("[data-uid]")?.dataset.uid,A=$.closest("[data-id]")?.dataset.id;return y&&A?T.recs.get(`${y}|${A}`):null}function J($){const y=$.target.closest("#fd-filter [data-f]");if(y){T.filter=y.dataset.f,E();return}const A=$.target.closest("[data-fd]");if(A){const n=A.closest("[data-uid]")?.dataset.uid;switch(A.dataset.fd){case"refresh":T.loadedAt=0,j(),GV.toast("Fil actualis\xE9");return;case"friend":n&&Social.openFriend(n);return;case"more":T.expanded.has(A.dataset.key)?T.expanded.delete(A.dataset.key):T.expanded.add(A.dataset.key),q();return;case"rate":{const L=R(A);L&&Reviews.openForRecord(L,{returnTo:"feed"});return}case"open":break;default:return}}if($.target.closest("[data-r]"))return;const W=$.target.closest(".card");if(!W)return;const f=R(W);f&&GV.openDetail(null,{rec:f,readOnly:!0})}window.Feed={init(){const $=V("#feed-root");$.addEventListener("click",J),Reviews.attach($),setInterval(j,e)},render:E,onAuth(){T.data=null,T.reviews=[],T.loadedAt=0,T.error=null,I(),m()&&j(),GV.state.view==="feed"&&E()}}})(),(function(){const{esc:o,money:H}=VL,G=(n,L=document)=>L.querySelector(n),w={items:[],pricing:!1},V='<svg viewBox="0 0 24 24"><path d="M12 20.5s-7.5-4.6-7.5-10.3A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.6c0 5.7-7.5 10.3-7.5 10.3z"/></svg>',C=n=>!!n&&w.items.some(L=>L.discogsId===+n),e=n=>!!n&&GV.state.collection.some(L=>L.discogsId===+n),T=n=>n.discogsId?`https://www.discogs.com/release/${n.discogsId}`:"",m=n=>n.discogsId?`https://www.discogs.com/sell/release/${n.discogsId}`:"";function B(n){const L="coverRemote"in n||"formatDescriptions"in n;return{id:"w"+n.discogsId,discogsId:+n.discogsId,artist:n.artist,title:n.title,year:n.year||"",country:n.country||"",label:n.label||"",catno:n.catno||"",format:(L?VL.isCD(n):n.kind==="cd")?"cd":"vinyl",formatText:L?(n.formatDescriptions||[]).join(" \xB7 "):n.format||"",coverRemote:L?n.coverRemote||"":n.cover||n.thumb||"",have:n.community?n.community.have:n.have??null,want:n.community?n.community.want:n.want??null,market:n.market&&n.market.lowest!=null?{lowest:n.market.lowest,currency:n.market.currency,numForSale:n.market.numForSale||0,at:n.market.updatedAt||""}:void 0,priority:!1,note:"",addedAt:new Date().toISOString()}}async function j(){w.items=await window.vault.wishlist.save(w.items),E(),window.Social&&Social.scheduleSync(),GV.state.view==="wishlist"&&q()}async function h(n){if(!(!n||!n.discogsId||C(n.discogsId))&&(w.items.unshift(n),await j(),GV.toast(`\xAB ${n.title} \xBB ajout\xE9 \xE0 ta wishlist`,"ok"),!n.market)){const L=await N(n.discogsId),F=w.items.find(Z=>Z.discogsId===n.discogsId);L&&F&&(Object.assign(F,L),await j())}}const I=n=>n&&n.discogsId?h(B(n)):void 0;async function S(n,L){const F=w.items.find(Z=>Z.discogsId===+n);F&&(w.items=w.items.filter(Z=>Z!==F),await j(),L||GV.toast(`\xAB ${F.title} \xBB retir\xE9 de ta wishlist`))}async function O(n){return C(n.discogsId)?(await S(n.discogsId),!1):(await I(n),!0)}async function N(n){if(!n||!GV.state.settings.discogsToken)return null;try{const{market:L,community:F}=await window.vault.refreshMarket(n),Z={market:L&&L.lowest!=null?{lowest:L.lowest,currency:L.currency,numForSale:L.numForSale||0,at:L.updatedAt}:{lowest:null,currency:GV.cur(),numForSale:0,at:new Date().toISOString()}};return F&&(Z.have=F.have,Z.want=F.want),Z}catch{return null}}async function x(n){if(w.pricing)return;if(!GV.state.settings.discogsToken){GV.toast("Ajoute ton jeton Discogs dans R\xE9glages pour r\xE9cup\xE9rer les prix.","error");return}w.pricing=!0;const L=n.querySelector("span");n.classList.add("loading");const F=w.items.filter(z=>z.discogsId).map(z=>z.discogsId);let Z=0;for(let z=0;z<F.length;z++){L.textContent=`Prix ${z+1}/${F.length}\u2026`;const ee=await N(F[z]),d=w.items.find(g=>g.discogsId===F[z]);ee&&d&&(Object.assign(d,ee),Z++),z<F.length-1&&await new Promise(g=>setTimeout(g,3100))}w.pricing=!1,await j(),n.classList.remove("loading"),L.textContent="Actualiser les prix",GV.toast(`${Z} prix mis \xE0 jour`,"ok")}async function P(n,L){L.disabled=!0,L.classList.add("loading");try{const F=await GV.importToCollection(+n);await S(n,!0),GV.toast(`\xAB ${F.title} \xBB rejoint ta collection \u{1F389}`,"ok")}catch(F){L.disabled=!1,L.classList.remove("loading"),GV.toast(GV.errMsg(F),"error")}}function b(n){return n.market?n.market.lowest==null?'<span class="wl-price muted">pas en vente</span>':`<span class="wl-price" title="${n.market.numForSale||0} en vente sur Discogs">d\xE8s ${H(n.market.lowest,n.market.currency)}</span>`:'<span class="wl-price muted">prix ?</span>'}function p(n,L,F={}){const Z={...n,coverFile:null},z=[n.year,n.label].filter(Boolean).map(o).join(" \xB7 "),ee=F.foreign&&C(n.discogsId),d=F.foreign&&e(n.discogsId),g=F.foreign?`${d?"":`<button class="wl-act ${ee?"on":""}" data-w="${ee?"remove":"add-friend"}" title="${ee?"Retirer de ta wishlist":"Le mettre aussi dans ta wishlist"}">${V}</button>`}
         <button class="wl-act" data-w="discogs" title="Voir sur Discogs">\u2197</button>`:`<button class="wl-act prio ${n.priority?"on":""}" data-w="priority" title="${n.priority?"Retirer la priorit\xE9":"Marquer comme priorit\xE9"}">\u2605</button>
         <button class="wl-act got" data-w="got" title="Je l'ai ! (ajouter \xE0 ma collection)">\u2713</button>
         <button class="wl-act" data-w="shop" title="Voir les offres sur Discogs">\u2197</button>
         <button class="wl-act del" data-w="remove" title="Retirer de la wishlist">\u2715</button>`;return`<article class="card wl-card ${n.priority?"is-prio":""}" data-did="${n.discogsId}" style="--i:${Math.min(L,24)}">
      <div class="card-stage">
        ${VL.vinylHTML(Z,"")}
        <div class="sleeve">${VL.sleeveHTML(Z,"")}<div class="sleeve-gloss"></div></div>
        ${n.priority?'<span class="wl-prio-badge">\u2605 Priorit\xE9</span>':""}
        ${d?`<span class="common-badge" title="Tu as d\xE9j\xE0 ce pressage">Tu l'as</span>`:""}
        <span class="wl-media ${n.format==="cd"?"m-cd":"m-vinyl"}">${n.format==="cd"?"CD":"Vinyle"}</span>
      </div>
      <div class="card-info">
        <div class="card-title" title="${o(n.title)}">${o(n.title)}</div>
        <div class="card-artist">${o(n.artist)}</div>
        <div class="card-foot"><span class="wl-meta" title="${o(n.formatText||"")}">${z}</span>${b(n)}</div>
        <div class="wl-actions">${g}</div>
      </div>
    </article>`}function u(){const n=(G("#wl-text").value||"").trim().toLowerCase(),L=G("#wl-format").value,F=G("#wl-sort").value,Z=z=>z.market&&z.market.lowest!=null?z.market.lowest:1/0;return w.items.filter(z=>(!n||`${z.artist} ${z.title} ${z.label} ${z.year}`.toLowerCase().includes(n))&&(!L||z.format===L)).sort({priority:(z,ee)=>ee.priority-z.priority||(ee.addedAt||"").localeCompare(z.addedAt||""),added:(z,ee)=>(ee.addedAt||"").localeCompare(z.addedAt||""),artist:(z,ee)=>z.artist.localeCompare(ee.artist,"fr"),price:(z,ee)=>Z(z)-Z(ee)}[F])}function q(){const n=u(),L=w.items.length;let F=0,Z=0;for(const z of w.items)z.market&&z.market.lowest!=null&&(F+=z.market.lowest,Z++);G("#wl-sub").textContent=L?`${L} disque${L>1?"s":""}${Z?` \xB7 environ ${H(F,GV.cur(),0)} au prix le plus bas`:""} \xB7 visible par tes amis`:"",G("#wl-empty").classList.toggle("hidden",L>0),G("#wl-grid").innerHTML=n.map((z,ee)=>p(z,ee)).join("")||(L?'<p class="muted no-match">Aucun disque ne correspond \xE0 ces filtres.</p>':"")}function E(){const n=G("#nav-wish");n&&(n.textContent=w.items.length)}function R(n){if(!n.discogsId)return"";const L=C(n.discogsId);return`<button class="btn ghost small wish-btn ${L?"on":""}" data-wish="${n.discogsId}" title="${L?"Retirer de ta wishlist":"Ajouter \xE0 ta wishlist"}">${V}<span>${L?"Dans ta wishlist":"Wishlist"}</span></button>`}function J(n,L){n.classList.toggle("on",L),n.title=L?"Retirer de ta wishlist":"Ajouter \xE0 ta wishlist",n.querySelector("span").textContent=L?"Dans ta wishlist":"Wishlist"}function $(n){if(!n||!n.discogsId||e(n.discogsId))return"";const L=C(n.discogsId);return`<button class="btn ghost wish-btn ${L?"on":""}" data-act="wish">${V}<span>${L?"Dans ta wishlist":"Ajouter \xE0 ma wishlist"}</span></button>`}async function y(n,L){const F=n.target.closest("[data-w]"),Z=n.target.closest(".wl-card");if(!Z)return;const z=+Z.dataset.did,ee=(L||w.items).find(d=>d.discogsId===z);if(ee){if(!F){T(ee)&&window.vault.openExternal(T(ee));return}switch(n.stopPropagation(),F.dataset.w){case"priority":ee.priority=!ee.priority,await j();break;case"got":await P(z,F);break;case"shop":window.vault.openExternal(m(ee));break;case"discogs":window.vault.openExternal(T(ee));break;case"remove":await S(z),L&&window.Social&&Social.refreshFriendWishlist();break;case"add-friend":{const d={...ee,id:"w"+z,priority:!1,note:"",addedAt:new Date().toISOString()},g=h(d);window.Social&&Social.refreshFriendWishlist(),await g;break}}}}function A(){for(const n of["#wl-text","#wl-format","#wl-sort"])G(n).addEventListener("input",q);G("#wl-grid").addEventListener("click",n=>y(n)),G("#wl-refresh").addEventListener("click",n=>x(n.currentTarget))}async function W(){if(w.items.length)return!1;try{const n=await window.vault.cloud.restoreWishlist();if(n.length)return w.items=n,E(),GV.state.view==="wishlist"&&q(),!0}catch{}return!1}function f(n){w.items=Array.isArray(n)?n:[],A(),E()}window.Wishlist={init:f,render:q,add:I,remove:S,toggle:O,has:C,cardHTML:p,resultBtnHTML:R,setResultBtn:J,detailBtnHTML:$,onGridClick:y,restoreIfEmpty:W,items:()=>w.items}})(),(function(){const{esc:o,money:H,num:G,CONDITIONS:w,TIERS:V,UNKNOWN_TIER:C}=VL,e=(t,r=document)=>r.querySelector(t),T=(t,r=document)=>[...r.querySelectorAll(t)],m={collection:[],settings:{},base:"",view:"collection",tt:null,openId:null,manualCover:null,refreshing:!1},B=()=>m.settings.currency||"EUR",j=t=>VL.estimateValue(t,B()),h=t=>VL.computeRarity(t);function I(t,r="info"){const a=document.createElement("div");a.className=`toast ${r}`,a.innerHTML=`<span class="toast-disc"></span><span>${o(t)}</span>`,e("#toasts").appendChild(a),setTimeout(()=>a.classList.add("out"),3200),setTimeout(()=>a.remove(),3700)}function S(t){return String(t&&t.message||t).replace(/^Error invoking remote method '[^']+': (Error: )?/,"")}function O(t){m.view=t,T(".nav-btn").forEach(a=>a.classList.toggle("active",a.dataset.view===t)),T(".view").forEach(a=>a.classList.toggle("active",a.id===`view-${t}`)),t==="stats"&&he(),t==="profile"&&window.Social&&Social.renderProfile();const r={friend:"profile",album:"reviews"}[t];t==="feed"&&window.Feed&&Feed.render(),t==="news"&&window.News&&News.render(),r&&T(".nav-btn").forEach(a=>a.classList.toggle("active",a.dataset.view===r)),t==="reviews"&&window.Reviews&&Reviews.render(),t==="wishlist"&&window.Wishlist&&Wishlist.render(),t==="add"&&(e("#token-warning").classList.toggle("hidden",!!m.settings.discogsToken),setTimeout(()=>e("#search-q").focus(),50))}function N(){const t=m.collection;let r=0,a=0;for(const M of t){const k=j(M);k&&(r+=k.value,a++)}e("#nav-count").textContent=t.length,e("#side-total").textContent=H(r,B(),0),e("#side-meta").textContent=t.length?`${t.length} disque${t.length>1?"s":""} \xB7 ${a} cot\xE9${a>1?"s":""}`:"Aucun disque"}function x(){const t=e("#filter-tier"),r=t.value;t.innerHTML='<option value="">Toutes raret\xE9s</option>'+[...V].reverse().concat(C).map(_=>`<option value="${_.id}">${_.label}</option>`).join(""),t.value=r;const a=[...new Set(m.collection.flatMap(_=>_.genres||[]))].sort((_,te)=>_.localeCompare(te,"fr")),M=e("#filter-genre"),k=M.value;M.innerHTML='<option value="">Tous genres</option>'+a.map(_=>`<option>${o(_)}</option>`).join(""),M.value=a.includes(k)?k:""}function P(){const t=e("#filter-text").value.trim().toLowerCase(),r=e("#filter-tier").value,a=e("#filter-genre").value,M=e("#filter-format").value,k=e("#sort").value;let _=m.collection.filter(Q=>!(t&&!`${Q.artist} ${Q.title} ${Q.label} ${Q.catno} ${Q.year}`.toLowerCase().includes(t)||r&&h(Q).tier.id!==r||a&&!(Q.genres||[]).includes(a)||M&&(VL.isCD(Q)?"cd":"vinyl")!==M));const te={added:(Q,ne)=>(ne.addedAt||"").localeCompare(Q.addedAt||""),artist:(Q,ne)=>Q.artist.localeCompare(ne.artist,"fr")||(Q.year||0)-(ne.year||0),title:(Q,ne)=>Q.title.localeCompare(ne.title,"fr"),year:(Q,ne)=>(Q.year||9999)-(ne.year||9999),value:(Q,ne)=>((j(ne)||{}).value??-1)-((j(Q)||{}).value??-1),rarity:(Q,ne)=>(h(ne).score??-1)-(h(Q).score??-1)}[k];return _.sort(te)}function b(t,r,a={}){const M=h(t),k=j(t),_=a.foreign?"":m.base,te=a.foreign&&t.discogsId&&m.collection.some(Q=>Q.discogsId===t.discogsId);return`<article class="card tier-${M.tier.id}" data-id="${t.id}" style="--tier:${M.tier.color};--i:${Math.min(r,24)}">
      <div class="card-stage">
        ${VL.vinylHTML(t,_)}
        <div class="sleeve">${VL.sleeveHTML(t,_)}<div class="sleeve-gloss"></div></div>
        <span class="tier-badge"><i></i>${M.tier.label}</span>
        ${te?'<span class="common-badge" title="Tu as aussi ce pressage">En commun</span>':""}
      </div>
      <div class="card-info">
        <div class="card-title" title="${o(t.title)}">${o(t.title)}</div>
        <div class="card-artist">${o(t.artist)}</div>
        <div class="card-foot">
          <span>${o(t.year||"")}${t.vinylColor?' \xB7 <b class="dot-color" style="--c:'+t.vinylColor.primary+'"></b>':""}${p(t,a)}</span>
          <span class="card-price">${k?H(k.value,k.currency):t.needsEnrich?'<span class="price-pending" title="Cote en cours de r\xE9cup\xE9ration">cote\u2026</span>':"-"}</span>
        </div>
      </div>
    </article>`}function p(t,r){if(r.foreign||!window.Reviews)return"";const a=Reviews.ratingFor(t);return!a||a.rating==null&&!a.loved?"":` \xB7 <span class="card-myrating" title="Ta note">${a.rating!=null?"\u2605 "+Reviews.fmtR(a.rating):""}${a.loved?"<i>\u2665</i>":""}</span>`}function u(){const t=P(),r=m.collection.length,a=new Set(m.collection.map(M=>M.artist)).size;e("#collection-sub").textContent=r?`${r} disque${r>1?"s":""} \xB7 ${a} artiste${a>1?"s":""}${t.length!==r?` \xB7 ${t.length} affich\xE9${t.length>1?"s":""}`:""}`:"",e("#empty").classList.toggle("hidden",r>0),e("#grid").classList.toggle("show-tiers",!!e("#filter-tier").value),e("#grid").innerHTML=t.map(b).join("")||(r?'<p class="muted no-match">Aucun disque ne correspond \xE0 ces filtres.</p>':"")}function q(){N(),x(),u(),m.view==="stats"&&he(),window.Social&&Social.scheduleSync()}async function E(t){await window.vault.saveRecord(t);const r=m.collection.findIndex(a=>a.id===t.id);r>=0?m.collection[r]=t:m.collection.unshift(t),window.Social&&Social.scheduleSync()}async function R(t){m.settings=await window.vault.saveSettings(t)}function J(t){const r=[];VL.isCD(t)?r.push("CD"):(r.push(`${t.sizeInch||12}"`),r.push(t.rpm===45?"45 tours":t.rpm===78?"78 tours":"33\u2153 tours")),t.discs>1&&r.push(`${t.discs} ${VL.isCD(t)?"CD":"disques"}`);for(const M of t.formatDescriptions||[])/^(\d+"|LP|33 ⅓ RPM|45 RPM|78 RPM)$/.test(M)||r.push(M);let a=r.map(M=>`<span class="chip">${o(M)}</span>`).join("");return t.vinylColor&&(a+=`<span class="chip color" style="--c:${t.vinylColor.primary}"><i></i>${o(t.vinylColor.label||"Vinyle color\xE9")}</span>`),a}function $(t){const r=h(t),a=t.community,M=t.market;if(r.score==null)return`<div class="d-section rarity-block" style="--tier:${C.color}">
        <div class="section-title">Raret\xE9</div>
        <p class="muted">Pas de donn\xE9es communautaires pour ce disque.${t.discogsId?"":" Les disques saisis \xE0 la main ne sont pas \xE9valu\xE9s."}</p>
      </div>`;const k=V.map((te,Q)=>{const ne=(V[Q+1]?V[Q+1].min:100)-te.min;return`<span class="seg-t ${r.score>=te.min?"on":""}" style="--c:${te.color};flex:${ne} 0 0" title="${te.label} (\u2265 ${te.min})"></span>`}).join(""),_=a.have?a.want/a.have:0;return`<div class="d-section rarity-block" style="--tier:${r.tier.color}">
      <div class="section-title">Raret\xE9</div>
      <div class="rarity-top">
        <div class="rarity-score"><b>${r.score}</b><small>/100</small></div>
        <div>
          <div class="rarity-tier">${r.tier.label}</div>
          <div class="muted small">Indice calcul\xE9 \xE0 partir du march\xE9 Discogs</div>
        </div>
      </div>
      <div class="rarity-meter">${k}<span class="rarity-marker" style="left:${r.score}%"></span></div>
      <div class="mini-stats">
        <div><b>${G(a.have)}</b><span>poss\xE8dent ce pressage</span></div>
        <div><b>${G(a.want)}</b><span>le recherchent</span></div>
        <div><b>${M?G(M.numForSale):"-"}</b><span>en vente actuellement</span></div>
        <div><b>${_.toFixed(2)}</b><span>recherch\xE9 / poss\xE9d\xE9</span></div>
      </div>
      ${a.ratingCount?`<div class="muted small rating">Note communaut\xE9 : <b>${a.rating.toFixed(2)}</b> / 5 (${G(a.ratingCount)} votes)</div>`:""}
    </div>`}function y(t){const r=j(t),a=t.market,M=t.condition&&t.condition.media||"VG+",k=r?r.basis==="manual"?"Valeur saisie manuellement":r.basis==="suggestion"?`Prix conseill\xE9 par Discogs pour un \xE9tat ${M}`:`Estimation \xE0 partir du prix plancher Discogs, ajust\xE9e pour un \xE9tat ${M}`:"Aucune donn\xE9e de prix.",_=m.readOnly,te=t.purchasePrice!=null&&t.purchasePrice!==""?+t.purchasePrice:null,Q=r&&te!=null?r.value-te:null;let ne="";a&&a.suggestions&&(ne=`<div class="sugg">${w.filter(le=>a.suggestions[le.code]).map(le=>`<div class="${le.code===M?"cur":""}"><span>${le.code}</span><b>${H(a.suggestions[le.code].value,a.suggestions[le.code].currency)}</b></div>`).join("")}</div>`);const ge=a&&a.updatedAt?`Cote mise \xE0 jour le ${new Date(a.updatedAt).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"})}`:"";return`<div class="section-title">Cote</div>
      <div class="value-wrap">
        <div class="value-main">
          <div class="value-label">Valeur de ${_?"son":"ton"} exemplaire</div>
          <div class="value-big">${r?H(r.value,r.currency):"-"}</div>
          <div class="muted small">${k}</div>
        </div>
        <div class="value-side">
          <div><span>Prix plancher</span><b>${a&&a.lowest!=null?H(a.lowest,a.currency):"-"}</b></div>
          ${_?`<div><span>\xC9tat</span><b>${o(M)}</b></div>`:`
          <div><span>Achet\xE9</span><b>${te!=null?H(te,B()):"-"}</b></div>
          <div><span>Plus-value</span><b class="${Q==null?"":Q>=0?"up":"down"}">${Q==null?"-":(Q>=0?"+":"")+H(Q,B())}</b></div>`}
        </div>
      </div>
      ${ne}
      ${a&&a.blocked?'<div class="warn small">Ce disque est bloqu\xE9 \xE0 la vente sur Discogs.</div>':""}
      <div class="value-foot">
        <span class="muted small">${ge}</span>
        ${t.discogsId&&!_?'<button class="btn ghost small" data-act="refresh"><svg viewBox="0 0 24 24"><path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/></svg>Actualiser la cote</button>':""}
      </div>`}function A(t){return w.map(r=>`<option value="${r.code}" ${r.code===t?"selected":""}>${r.label}</option>`).join("")}function W(t){const r=t.condition||{},a=t.vinylColor;return`<div class="section-title">Mon exemplaire</div>
      <div class="copy-grid">
        <label>\xC9tat du disque<select data-f="media">${A(r.media||"VG+")}</select></label>
        <label>\xC9tat de la pochette<select data-f="sleeve">${A(r.sleeve||"VG+")}</select></label>
        <label>Prix d'achat (${B()})<input data-f="purchasePrice" type="number" min="0" step="0.01" value="${o(t.purchasePrice??"")}"></label>
        <label>Valeur perso (${B()})<input data-f="manualValue" type="number" min="0" step="0.01" placeholder="auto" value="${o(t.manualValue??"")}"></label>
        ${VL.isCD(t)?"":`<label class="color-row">Couleur du vinyle
          <span><input type="checkbox" data-f="colored" ${a?"checked":""}>
          <input type="color" data-f="color" value="${a?a.primary:"#b3142f"}">
          <label class="check tiny"><input type="checkbox" data-f="clear" ${a&&a.clear?"checked":""}>translucide</label></span>
        </label>`}
        <label class="span2">Notes<textarea data-f="notes" rows="2" placeholder="Pressage, provenance, anecdotes\u2026">${o(t.notes||"")}</textarea></label>
      </div>`}function f(t){const r=window.Reviews&&Reviews.ratingFor(t);return`<button class="btn primary rate-btn" data-act="review"><svg viewBox="0 0 24 24"><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z"/></svg>${r&&r.rating!=null?`Ta note ${Reviews.starsHTML(r.rating,"xs")}`:r?"Ta critique":"Noter l'album"}</button>`}function n(t){const r=[t.label,t.catno,t.country,t.released||t.year].filter(Boolean).map(o).join(" \xB7 "),a=[...t.genres||[],...t.styles||[]],M=t.tracklist||[];return`
      <div class="d-head">
        <div class="chips">${J(t)}</div>
        <div class="d-artist">${o(t.artist)}</div>
        <h2 class="d-title">${o(t.title)}</h2>
        <div class="d-meta">${r}</div>
      </div>
      ${$(t)}
      <div class="d-section" id="d-value">${y(t)}</div>
      ${m.readOnly?"":`<div class="d-section" id="d-copy">${W(t)}</div>`}
      ${a.length?`<div class="d-section"><div class="section-title">Genres & styles</div><div class="tags">${a.map(k=>`<span class="tag">${o(k)}</span>`).join("")}</div></div>`:""}
      ${M.length?`<div class="d-section"><div class="section-title">Pistes <small>${M.length}</small></div>
        <ol class="tracks">${M.map(k=>`<li><span class="pos">${o(k.position)}</span><span class="tt">${o(k.title)}</span><span class="dur">${o(k.duration||"")}</span></li>`).join("")}</ol></div>`:""}
      <div class="d-actions">
        <span class="d-actions-left">${f(t)}${t.discogsUrl?'<button class="btn ghost" data-act="discogs">Voir sur Discogs \u2197</button>':""}</span>
        ${m.readOnly?Wishlist.detailBtnHTML(t):'<button class="btn danger" data-act="delete">Retirer de la collection</button>'}
      </div>`}function L(t,r={}){const a=r.rec||m.collection.find(Q=>Q.id===t);if(!a)return;m.openId=a.id,m.openRec=a,m.readOnly=!!r.readOnly;const M=m.readOnly?"":m.base,k=VL.coverUrl(a,M),_=e("#detail");_.innerHTML=`
      <div class="detail-backdrop" data-act="close"></div>
      <div class="detail-panel" style="--tier:${h(a).tier.color}">
        <div class="detail-ambient" ${k?`style="background-image:url('${k}')"`:`style="--h:${VL.hashHue(a.artist+a.title)}" data-gen="1"`}></div>
        <button class="detail-close" data-act="close" title="Fermer (\xC9chap)">\u2715</button>
        <div class="detail-left"><div class="tt-host"></div></div>
        <div class="detail-right">${n(a)}</div>
      </div>`,_.classList.remove("hidden"),requestAnimationFrame(()=>_.classList.add("open"));const te=VL.isCD(a)?CdPlayer:Turntable;m.tt=new te(e(".tt-host",_),a,M,{...m.settings}),m.tt.onSettings=Q=>R(Q),setTimeout(()=>{m.tt&&m.openRec===a&&m.tt.play()},1e3)}function F(){const t=e("#detail");m.openId&&(m.tt&&(m.tt.destroy(),m.tt=null),m.openId=null,m.openRec=null,m.readOnly=!1,t.classList.remove("open"),setTimeout(()=>{m.openId||(t.classList.add("hidden"),t.innerHTML="")},350))}let Z=null;function z(t){if(m.readOnly)return;const r=m.collection.find(_=>_.id===m.openId);if(!r)return;const a=t.target.dataset.f;if(!a)return;const M=e("#d-copy"),k=_=>e(`[data-f="${_}"]`,M);if(r.condition={media:k("media").value,sleeve:k("sleeve").value},r.purchasePrice=k("purchasePrice").value===""?null:+k("purchasePrice").value,r.manualValue=k("manualValue").value===""?null:+k("manualValue").value,r.notes=k("notes").value,["colored","color","clear"].includes(a)){r.vinylColorEdited=!0,a!=="colored"&&!k("colored").checked&&(k("colored").checked=!0),r.vinylColor=k("colored").checked?{...r.vinylColor||{},primary:k("color").value,clear:k("clear").checked,label:r.vinylColor&&r.vinylColor.label||"Vinyle color\xE9"}:null;const _=e(".tt-record");_&&(_.innerHTML=VL.vinylHTML(r,m.base,{noShine:!0})),e(".chips").innerHTML=J(r)}e("#d-value").innerHTML=y(r),clearTimeout(Z),Z=setTimeout(async()=>{await E(r),N(),u()},350)}async function ee(t,r=!1){const a=await window.vault.refreshMarket(t.discogsId);t.market=a.market,t.community=a.community,await E(t),r||I(`Cote de \xAB ${t.title} \xBB mise \xE0 jour`,"ok")}async function d(t){const r=t.target.closest("[data-act]");if(!r)return;const a=m.openRec;switch(r.dataset.act){case"close":F();break;case"review":{const M=m.view;F(),Reviews.openForRecord(a,{returnTo:M});break}case"discogs":window.vault.openExternal(a.discogsUrl);break;case"wish":{const M=await Wishlist.toggle(a);r.classList.toggle("on",M),r.querySelector("span").textContent=M?"Dans ta wishlist":"Ajouter \xE0 ma wishlist";break}case"refresh":r.disabled=!0,r.classList.add("loading");try{await ee(a),e(".detail-right").innerHTML=n(a),q()}catch(M){I(S(M),"error"),r.disabled=!1,r.classList.remove("loading")}break;case"delete":r.dataset.confirm?(await window.vault.deleteRecord(a.id),m.collection=m.collection.filter(M=>M.id!==a.id),F(),q(),I(`\xAB ${a.title} \xBB retir\xE9 de la collection`)):(r.dataset.confirm="1",r.textContent="Confirmer la suppression",setTimeout(()=>{r.isConnected&&(delete r.dataset.confirm,r.textContent="Retirer de la collection")},3500));break}}async function g(){if(m.refreshing)return;if(!m.settings.discogsToken){I("Ajoute ton jeton Discogs dans R\xE9glages","error");return}const t=m.collection.filter(k=>k.discogsId);if(!t.length){I("Aucun disque li\xE9 \xE0 Discogs");return}m.refreshing=!0;const r=e("#refresh-all");r.classList.add("loading");const a=e("span",r);let M=0;for(let k=0;k<t.length;k++){a.textContent=`Actualisation ${k+1}/${t.length}\u2026`;try{await ee(t[k],!0),M++}catch(_){if(/401|403/.test(S(_))){I(S(_),"error");break}}N(),k<t.length-1&&await new Promise(_=>setTimeout(_,3100))}m.refreshing=!1,r.classList.remove("loading"),a.textContent="Actualiser les cotes",q(),I(`${M} cote${M>1?"s":""} mise${M>1?"s":""} \xE0 jour`,"ok")}function U(t){const r=m.collection.some(a=>a.discogsId===t.discogsId);return`<div class="result" data-did="${t.discogsId}">
      <div class="result-cover">${t.thumb?`<img src="${o(t.thumb)}" alt="" loading="lazy">`:VL.generatedCover(t)}</div>
      <div class="result-body">
        <div class="result-title">${o(t.title)}</div>
        <div class="result-artist">${o(t.artist)}</div>
        <div class="result-meta">${[t.year,t.country,t.label,t.catno].filter(Boolean).map(o).join(" \xB7 ")}</div>
        <div class="result-format">${o(t.format)}</div>
        ${t.have!=null?`<div class="result-comm"><span>${G(t.have)} poss\xE8dent</span><span>${G(t.want)} recherchent</span></div>`:""}
      </div>
      <div class="result-btns">
        <button class="btn ${r?"done":"primary"} small" data-add="${t.discogsId}" ${r?"disabled":""}>${r?"Dans ta collection \u2713":"Ajouter"}</button>
        ${r?"":Wishlist.resultBtnHTML(t)}
      </div>
    </div>`}async function K(t){t.preventDefault();const r=e("#search-q").value.trim();if(!r)return;const a=e("#search-barcode").checked,M=e("#results");M.innerHTML='<div class="loader"><div class="loader-disc"></div><span>Recherche dans Discogs\u2026</span></div>';try{const k=e("#search-format").value,_=await window.vault.search(a?{barcode:r,format:k}:{q:r,format:k});m.results=_.results,M.innerHTML=_.results.length?_.results.map(U).join(""):'<p class="muted no-match">Aucun disque trouv\xE9. Essaie avec moins de mots, v\xE9rifie le support choisi, ou colle directement le lien Discogs du disque.</p>'}catch(k){M.innerHTML=`<p class="warn">${o(S(k))}</p>`}}async function X(t){const r=await window.vault.importRelease(t),a={id:crypto.randomUUID(),...r,condition:{media:"VG+",sleeve:"VG+"},purchasePrice:null,manualValue:null,notes:"",addedAt:new Date().toISOString()};return await E(a),q(),a}async function Y(t){const r=+t.dataset.add;t.disabled=!0,t.classList.add("loading"),t.textContent="R\xE9cup\xE9ration\u2026";try{const a=await X(r);if(Wishlist.has(r)){await Wishlist.remove(r,!0);const k=t.parentElement.querySelector(".wish-btn");k&&k.remove()}t.classList.remove("loading","primary"),t.classList.add("done"),t.textContent="Dans ta collection \u2713";const M=h(a);I(`\xAB ${a.title} \xBB ajout\xE9 \xB7 ${M.tier.label}`,"ok")}catch(a){t.disabled=!1,t.classList.remove("loading"),t.textContent="R\xE9essayer",I(S(a),"error")}}function ie(){const t=e("#manual-form");t.classList.toggle("is-cd",t.format.value==="cd");const r={artist:t.artist.value||"Artiste",title:t.title.value||"Titre",coverFile:m.manualCover,format:t.format.value,sizeInch:+t.sizeInch.value,vinylColor:t.colored.checked?{primary:t.color.value}:null};e("#manual-preview").innerHTML=`<div class="card-stage preview">${VL.vinylHTML(r,m.base)}<div class="sleeve">${VL.sleeveHTML(r,m.base)}<div class="sleeve-gloss"></div></div></div>`}async function de(t){t.preventDefault();const r=t.target,a=k=>k===""?null:+k,M={id:crypto.randomUUID(),discogsId:null,artist:r.artist.value.trim(),title:r.title.value.trim(),year:a(r.year.value)||"",country:r.country.value.trim(),label:r.label.value.trim(),catno:r.catno.value.trim(),genres:r.genres.value.split(",").map(k=>k.trim()).filter(Boolean),styles:[],formatDescriptions:[],format:r.format.value,sizeInch:r.format.value==="cd"?12:+r.sizeInch.value,rpm:r.format.value==="cd"?null:+r.rpm.value,discs:1,vinylColor:r.colored.checked&&r.format.value!=="cd"?{primary:r.color.value,label:"Vinyle color\xE9"}:null,tracklist:[],coverFile:m.manualCover,community:null,market:null,condition:{media:r.media.value,sleeve:r.media.value},purchasePrice:a(r.purchasePrice.value),manualValue:a(r.manualValue.value),notes:r.notes.value,addedAt:new Date().toISOString()};await E(M),r.reset(),m.manualCover=null,ie(),q(),I(`\xAB ${M.title} \xBB ajout\xE9 \xE0 la collection`,"ok")}function ue(t,r={}){const a=Math.max(1,...t.map(k=>k.value)),M=t.reduce((k,_)=>k+_.value,0)||1;return`<div class="bars">${t.map(k=>`
      <div class="bar-row" title="${o(k.label)} : ${k.value} disque${k.value>1?"s":""} (${Math.round(k.value/M*100)} %)">
        <span class="bar-label">${k.dot?`<i style="background:${k.dot}"></i>`:""}${o(k.label)}</span>
        <span class="bar-track"><span class="bar-fill" style="width:${k.value/a*100}%;${k.color?`--bar:${k.color}`:""}"></span></span>
        <span class="bar-val">${r.fmt?r.fmt(k.value):k.value}</span>
      </div>`).join("")}</div>`}function pe(t,r){return`<ol class="top-list">${t.map(a=>`
      <li data-open="${a.id}">
        <span class="top-cover">${VL.sleeveHTML(a,m.base)}</span>
        <span class="top-text"><b>${o(a.title)}</b><small>${o(a.artist)}${a.year?" \xB7 "+o(a.year):""}</small></span>
        <span class="top-right">${r(a)}</span>
      </li>`).join("")}</ol>`}function he(){const t=m.collection,r=e("#stats");if(!t.length){r.innerHTML='<p class="muted">Ajoute des disques pour voir tes statistiques.</p>';return}let a=0,M=0,k=0,_=0,te=0;for(const v of t){const D=j(v);D&&(a+=D.value,te++),v.purchasePrice!=null&&(M+=+v.purchasePrice,D&&(k+=+v.purchasePrice,_+=D.value))}const Q=_-k,ne=[...V].reverse().concat(C).map(v=>({label:v.label,value:t.filter(D=>h(D).tier.id===v.id).length,color:v.color,dot:v.color})).filter(v=>v.value>0),ge={};t.forEach(v=>(v.genres||[]).forEach(D=>{ge[D]=(ge[D]||0)+1}));const le=Object.entries(ge).sort((v,D)=>D[1]-v[1]).slice(0,8).map(([v,D])=>({label:v,value:D})),be={};t.forEach(v=>{if(v.year){const D=Math.floor(v.year/10)*10;be[D]=(be[D]||0)+1}});const we=t.filter(v=>VL.isCD(v)).length,s=[{label:"Vinyles",value:t.length-we},{label:"CD",value:we}].filter(v=>v.value>0),i=Object.keys(be).sort().map(v=>({label:v<2e3?`Ann\xE9es ${String(v).slice(-2)}`:`Ann\xE9es ${v}`,value:be[v]})),l=t.filter(v=>j(v)).sort((v,D)=>j(D).value-j(v).value).slice(0,5),c=t.filter(v=>h(v).score!=null).sort((v,D)=>h(D).score-h(v).score).slice(0,5);r.innerHTML=`
      <div class="metrics">
        <div class="metric"><span>Disques</span><b>${G(t.length)}</b><small>${new Set(t.map(v=>v.artist)).size} artistes</small></div>
        <div class="metric accent"><span>Valeur estim\xE9e</span><b>${H(a,B(),0)}</b><small>${te} disque${te>1?"s":""} cot\xE9${te>1?"s":""}</small></div>
        <div class="metric"><span>Investi</span><b>${H(M,B(),0)}</b><small>prix d'achat renseign\xE9s</small></div>
        <div class="metric"><span>Plus-value</span><b class="${Q>=0?"up":"down"}">${(Q>=0?"+":"")+H(Q,B(),0)}</b><small>sur les disques achet\xE9s et cot\xE9s</small></div>
        <div class="metric"><span>Valeur moyenne</span><b>${H(te?a/te:0,B())}</b><small>par disque cot\xE9</small></div>
      </div>
      <div class="stats-grid">
        <div class="card-panel"><h3>Supports</h3>${ue(s)}</div>
        <div class="card-panel"><h3>Raret\xE9</h3>${ue(ne)}</div>
        <div class="card-panel"><h3>Genres</h3>${le.length?ue(le):'<p class="muted">-</p>'}</div>
        <div class="card-panel"><h3>D\xE9cennies</h3>${i.length?ue(i):'<p class="muted">-</p>'}</div>
        <div class="card-panel"><h3>Les plus pr\xE9cieux</h3>${pe(l,v=>{const D=j(v);return H(D.value,D.currency)})}</div>
        <div class="card-panel"><h3>Les plus rares</h3>${c.length?pe(c,v=>{const D=h(v);return`<span class="tier-pill" style="--tier:${D.tier.color}">${D.score}</span>`}):'<p class="muted">-</p>'}</div>
      </div>`}function Le(){const t=m.settings;e("#set-token").value=t.discogsToken||"",e("#set-currency").value=t.currency||"EUR",e("#set-crackle").checked=!!t.crackle,e("#set-volume").value=t.crackleVolume??.35,e("#token-status").textContent=t.discogsToken?"Jeton enregistr\xE9.":"Aucun jeton enregistr\xE9.",e("#tier-legend").innerHTML=V.map((r,a)=>{const M=V[a+1];return`<span class="tier-pill" style="--tier:${r.color}">${r.label} <small>${r.min}-${M?M.min-1:100}</small></span>`}).join("")}async function ke(){const t=e("#set-token").value.trim(),r=e("#token-status");if(!t){await R({discogsToken:""}),r.textContent="Jeton supprim\xE9.";return}r.textContent="V\xE9rification aupr\xE8s de Discogs\u2026";try{const a=await window.vault.testToken(t);await R({discogsToken:t}),r.innerHTML=`Connect\xE9 en tant que <b>${o(a)}</b> \u2713`,I("Jeton Discogs enregistr\xE9","ok")}catch(a){r.textContent=S(a)}}function ye(){T(".nav-btn").forEach(a=>a.addEventListener("click",()=>O(a.dataset.view))),document.addEventListener("click",a=>{const M=a.target.closest("[data-goto]");M&&(a.preventDefault(),O(M.dataset.goto));const k=a.target.closest("[data-open]");k&&L(k.dataset.open)}),["#filter-text","#filter-tier","#filter-genre","#filter-format","#sort"].forEach(a=>e(a).addEventListener("input",u)),e("#grid").addEventListener("click",a=>{const M=a.target.closest(".card");M&&L(M.dataset.id)}),e("#refresh-all").addEventListener("click",g);const t=e("#detail");t.addEventListener("click",d),t.addEventListener("input",a=>{a.target.closest("#d-copy")&&z(a)}),document.addEventListener("keydown",a=>{a.key==="Escape"&&F()}),T("#add-tabs button").forEach(a=>a.addEventListener("click",()=>{T("#add-tabs button").forEach(M=>M.classList.toggle("active",M===a)),T("#view-add .tab").forEach(M=>M.classList.toggle("active",M.id===`tab-${a.dataset.tab}`)),a.dataset.tab==="manual"&&ie(),a.dataset.tab==="import"&&Importer.renderTab()})),e("#search-form").addEventListener("submit",K),e("#results").addEventListener("click",a=>{const M=a.target.closest("[data-add]");M&&Y(M);const k=a.target.closest("[data-wish]");if(k){const _=(m.results||[]).find(te=>te.discogsId===+k.dataset.wish);_&&Wishlist.toggle(_).then(te=>Wishlist.setResultBtn(k,te))}});const r=e("#manual-form");r.media.innerHTML=A("VG+"),r.addEventListener("input",ie),r.addEventListener("submit",de),e("#manual-pick").addEventListener("click",async()=>{const a=await window.vault.pickCover();a&&(m.manualCover=a,ie())}),e("#save-token").addEventListener("click",ke),e("#open-token-page").addEventListener("click",a=>{a.preventDefault(),window.vault.openExternal("https://www.discogs.com/settings/developers")}),e("#set-currency").addEventListener("change",async a=>{await R({currency:a.target.value}),q(),I("Devise mise \xE0 jour. Actualise les cotes pour convertir les prix du march\xE9.")}),e("#set-crackle").addEventListener("change",a=>R({crackle:a.target.checked})),e("#set-volume").addEventListener("change",a=>R({crackleVolume:+a.target.value})),e("#export").addEventListener("click",async()=>{await window.vault.exportData()&&I("Collection export\xE9e","ok")}),e("#import").addEventListener("click",async()=>{try{const a=await window.vault.importData();if(!a)return;m.collection=a.collection,q(),I(`${a.added} disque${a.added>1?"s":""} import\xE9${a.added>1?"s":""}`,"ok")}catch(a){I(S(a),"error")}})}async function Te(){const t=await window.vault.init();m.collection=t.collection,m.settings=t.settings,m.base=t.coversBaseUrl,ye(),Le(),Wishlist.init(t.wishlist),q(),Reviews.init(),Feed.init(),Social.init(),Importer.init(),Updater.init(),News.init()}window.GV={state:m,toast:I,errMsg:S,go:O,persist:E,importToCollection:X,cardHTML:b,openDetail:L,renderAll:q,renderSidebar:N,renderCollection:u,valueOf:j,rarityOf:h,cur:B,summary(){let t=0;for(const r of m.collection){const a=j(r);a&&(t+=a.value)}return{count:m.collection.length,value:t,currency:B()}}},Te()})();
