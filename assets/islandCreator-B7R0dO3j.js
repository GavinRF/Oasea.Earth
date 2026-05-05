const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/creatorSystem-Cm6x7f-2.js","assets/levelManager-CXwJV8lL.js","assets/supabase-qp4a7gwM.js","assets/toast-DFQg6cek.js","assets/audioManager-Bhl1Lnir.js","assets/soundtrack-v1-FnRXlSH8.js","assets/packState-DWT5onrP.js","assets/three-D8n9J4sM.js","assets/physics-CKC5f6tm.js","assets/physicsQueue-XOQprDaT.js"])))=>i.map(i=>d[i]);
import{_ as te}from"./supabase-qp4a7gwM.js";import{s as K,a as ae,S as re,r as se,b as oe,c as le,e as ce}from"./main-TwCs5N7R.js";import{sanitizeName as ne,saveIsland as ie,getMyIslands as de,deleteIsland as ue,deleteColorPreset as pe,saveColorPreset as be,getColorPresets as ve}from"./creatorSystem-Cm6x7f-2.js";import{showError as T,showSuccess as H}from"./toast-DFQg6cek.js";import"./three-D8n9J4sM.js";import"./physics-CKC5f6tm.js";import"./levelManager-CXwJV8lL.js";import"./audioManager-Bhl1Lnir.js";import"./soundtrack-v1-FnRXlSH8.js";import"./packState-DWT5onrP.js";import"./physicsQueue-XOQprDaT.js";import"./inputHandler-B1dU6rKY.js";import"./networkClient-Bpayhc9L.js";import"./messageProtocol-BMEmlWkN.js";import"./lava-DRgdGDiQ.js";const me=-99,he=[{label:"Sand",value:"normal-maps/sand-normal.jpg"},{label:"Rough Pebble",value:"normal-maps/rough-pebble-normal.jpg"},{label:"Pebble Beach",value:"normal-maps/pebble-beach-normal.jpg"},{label:"Slate",value:"normal-maps/slate-normal.jpg"},{label:"Layers",value:"normal-maps/layers-normal.jpg"},{label:"Crack Rock",value:"normal-maps/crack-rock-normal.jpg"},{label:"Swirl Sand",value:"normal-maps/swirl-sand-normal.jpg"},{label:"Weathered Stone",value:"normal-maps/weathered-stone-normal.jpg"},{label:"Pinch",value:"normal-maps/pinch-normal.jpg"}],R=[{label:"Boulder (Small)",model:"boulder-sm-1n.glb",physics:{type:"convexHull"},scale:.6},{label:"Boulder (Small 2)",model:"boulder-sm-2n.glb",physics:{type:"convexHull"},scale:.6},{label:"Boulder (Tall)",model:"boulder-tall-n.glb",physics:{type:"convexHull"},scale:1},{label:"Boulder (Flat)",model:"boulder-flat-bottom.glb",physics:{type:"convexHull"},scale:1},{label:"Basalt Clump",model:"basalt-clump-1.glb",physics:{type:"convexHull"},scale:1.2},{label:"Anchor",model:"anchor.glb",physics:{type:"convexHull"},scale:1},{label:"Lighthouse",model:"lighthouse.glb",physics:{type:"cylinder",height:4,radiusTop:.4},scale:1,lighthouseBeam:!0},{label:"Moai (Tall)",model:"moai/moai-tall-stone.glb",physics:{type:"convexHull"},scale:1},{label:"Moai Head",model:"moai/moai-head-stone.glb",physics:{type:"convexHull"},scale:1},{label:"Chest",model:"chest.glb",physics:{type:"box",halfExtents:{x:.5,y:.35,z:.35}},scale:1}];function Z(){return{name:"My Island",terrainShape:{size:14,islandRadius:5.1,scaleX:1,scaleY:1,tilt:{angle:0,amount:0},bay:{angle:0,depth:0,width:0},irregularity:1,distortion:{frequency:0,amplitude:0,randomness:0},turbulence:{strength:0,scale:.13,octaves:1}},waterLevel:-1.747,winPercentage:.35,spawn:{enabled:!0,interval:8e3,cloudDuration:6e3,dropletsPerCloud:16,dropletInterval:400,minRadius:.1,maxRadius:.15,spawnHeight:10.2,cloudSpeed:2.45,fadeInDuration:2800,fadeOutDuration:2800},obstacles:[],features:{caldera:{enabled:!1,x:0,z:0,radius:2,depth:3},volcanoes:[],terraces:{enabled:!1,count:3,height:2,width:1},spiral:{enabled:!1,turns:2,width:1,height:1.5,centerHeight:0}},multipleTargets:1,timeOfDay:"day",normalMap:"normal-maps/sand-normal.jpg",normalMapScale:2,terrainColorPreset:null}}let l=null,o=null,f=null,g=null,W=null,E=!1,L=!0,C=null,$=null,w=null;const ye=50;let m=[],h=-1;function b(){m=m.slice(0,h+1),m.push(JSON.parse(JSON.stringify(o))),m.length>ye&&m.shift(),h=m.length-1,A()}function Y(){h<=0||(h--,o=JSON.parse(JSON.stringify(m[h])),_(),p(),S(!0),A())}function D(){h>=m.length-1||(h++,o=JSON.parse(JSON.stringify(m[h])),_(),p(),S(!0),A())}function A(){const t=l?.querySelector("#creator-undo-btn"),e=l?.querySelector("#creator-redo-btn");t&&(t.disabled=h<=0),e&&(e.disabled=h>=m.length-1)}const J=`
  <div class="stats-loading-animation creator-drops-loader">
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="collection"></div>
  </div>`;function S(t){L=t;const e=l?.querySelector("#creator-save-btn");e&&e.classList.toggle("creator-save-btn--dirty",t)}function fe(t=null,e=null,a=null){o=t?JSON.parse(JSON.stringify(t)):Z(),f=e,g=a,L=!e,m=[JSON.parse(JSON.stringify(o))],h=0,K(o,V)}function V(){ge(),De(),S(L),F(),o.terrainColorPreset&&ae(o.terrainColorPreset),O()}function P(){B(),ce(),window.dispatchEvent(new CustomEvent("creator-panel-state",{detail:{open:!1}}))}function Ze(){B(),window.dispatchEvent(new CustomEvent("creator-panel-state",{detail:{open:!1}}))}function Ve(){K(o,V)}function ge(){l&&(l.remove(),l=null),l=document.createElement("div"),l.id="island-creator-panel",l.setAttribute("role","complementary"),l.setAttribute("aria-label","Island Creator"),l.innerHTML=`
    <div class="creator-header">
      <span class="creator-title">Island Creator</span>
      <div class="creator-header-actions">
        <button id="creator-undo-btn" class="creator-history-btn" aria-label="Undo" title="Undo (Ctrl+Z)" disabled>
          <span class="material-icons">undo</span>
        </button>
        <button id="creator-redo-btn" class="creator-history-btn" aria-label="Redo" title="Redo (Ctrl+Shift+Z)" disabled>
          <span class="material-icons">redo</span>
        </button>
        <button class="creator-collapse-btn" aria-label="Collapse panel" aria-expanded="true" title="Toggle panel">◀</button>
      </div>
    </div>

    <div class="creator-tabs" role="tablist" aria-label="Creator sections">
      <button class="creator-tab active" id="creator-tab-settings" data-tab="settings" role="tab" aria-selected="true" aria-controls="creator-panel-settings">Settings</button>
      <button class="creator-tab" id="creator-tab-shape" data-tab="shape" role="tab" aria-selected="false" aria-controls="creator-panel-shape">Shape</button>
      <button class="creator-tab" id="creator-tab-features" data-tab="features" role="tab" aria-selected="false" aria-controls="creator-panel-features">Features</button>
      <button class="creator-tab" id="creator-tab-obstacles" data-tab="obstacles" role="tab" aria-selected="false" aria-controls="creator-panel-obstacles">Obstacles</button>
    </div>

    <div class="creator-content">
      ${Se()}
      ${ke()}
      ${$e()}
      ${we()}
    </div>

    <div class="creator-footer">
      <button id="creator-save-btn" class="creator-btn creator-btn-primary">
        <span class="material-icons">save</span> Save
      </button>
      <button id="creator-share-btn" class="creator-btn creator-btn-secondary" ${g?"":"disabled"}>
        <span class="material-icons">link</span> Share
      </button>
      <button id="creator-exit-btn" class="creator-btn creator-btn-ghost">
        <span class="material-icons">play_arrow</span> Play
      </button>
    </div>
    <div id="creator-last-saved" class="creator-last-saved"></div>

    <div class="creator-my-islands">
      <div class="creator-my-islands-header">
        <button class="creator-my-islands-toggle">
          <span class="material-icons">collections</span>
          My Islands
          <span class="material-icons creator-chevron">expand_more</span>
        </button>
        <button id="creator-new-island-btn" class="creator-btn creator-btn-secondary creator-new-btn">
          <span class="material-icons">add</span> New
        </button>
      </div>
      <div class="creator-my-islands-list hidden"></div>
    </div>
  `,document.body.appendChild(l),xe(),_(),A()}function Se(){return`<div class="creator-tab-content hidden" data-tab="shape" id="creator-panel-shape" role="tabpanel" aria-labelledby="creator-tab-shape">
    ${d("size","Size",8,20,.5,14)}
    ${d("islandRadius","Island Radius",2,10,.1,5.1)}
    ${d("scaleX","Scale X",.5,2,.05,1)}
    ${d("scaleY","Scale Y",.5,2,.05,1)}
    <div class="creator-section-label">Tilt</div>
    ${d("tiltAngle","Angle",0,360,1,0)}
    ${d("tiltAmount","Amount",0,10,.05,0)}
    <div class="creator-section-label">Bay</div>
    ${d("bayAngle","Angle",0,360,1,0)}
    ${d("bayDepth","Depth",0,10,.05,0)}
    ${d("bayWidth","Width",0,10,.05,0)}
    <div class="creator-section-label">Surface</div>
    ${d("irregularity","Irregularity",0,24,.05,1)}
    ${d("distortionFreq","Distort Freq",0,6.2,.01,0)}
    ${d("distortionAmp","Distort Amp",0,6.5,.01,0)}
    ${d("distortionRand","Distort Rand",0,6.1,.005,0)}
    ${d("turbStrength","Turbulence",0,12,.05,0)}
    ${d("turbScale","Turb Scale",.01,6.4,.01,.13)}
    ${d("turbOctaves","Turb Octaves",0,12,.1,1)}
  </div>`}function ke(){const t=o.features??{},e=(i,r)=>{const n=t[i]?.enabled??!1;return`
    <div class="creator-section-label">${r}</div>
    <div class="creator-row">
      <button class="creator-toggle creator-feature-toggle ${n?"active":""}"
              data-feature="${i}" aria-pressed="${n}">${n?"On":"Off"}</button>
    </div>
    <div class="creator-feature-params ${n?"":"hidden"}" data-feature-params="${i}">`},a=t.caldera??{},s=t.terraces??{},c=t.spiral??{};return`<div class="creator-tab-content hidden" data-tab="features" id="creator-panel-features" role="tabpanel" aria-labelledby="creator-tab-features">
    ${e("caldera","Caldera")}
      ${d("calderaPosX","Pos X",-8,8,.5,a.x??0)}
      ${d("calderaPosZ","Pos Z",-8,8,.5,a.z??0)}
      ${d("calderaRadius","Radius",.5,5,.1,a.radius??2)}
      ${d("calderaDepth","Depth",.5,6,.1,a.depth??3)}
    </div>

    <div class="creator-section-label">Volcanoes</div>
    <div id="creator-volcanoes-list" class="creator-obstacles-list"></div>
    <button id="creator-add-volcano-btn" class="creator-btn creator-btn-secondary" style="width:100%;margin-top:8px">
      <span class="material-icons">add</span> Add Volcano
    </button>

    ${e("terraces","Terraces")}
      ${d("terraceCount","Steps",2,8,1,s.count??3)}
      ${d("terraceHeight","Step Height",.5,4,.1,s.height??2)}
      ${d("terraceWidth","Sharpness",0,1,.05,s.width??1)}
    </div>

    ${e("spiral","Spiral")}
      ${d("spiralTurns","Turns",1,5,.5,c.turns??2)}
      ${d("spiralWidth","Width",.2,3,.1,c.width??1)}
      ${d("spiralHeight","Height",.2,4,.1,c.height??1.5)}
      ${d("spiralCenterHeight","Center Height",-4,4,.1,c.centerHeight??0)}
    </div>
  </div>`}function $e(){return`<div class="creator-tab-content hidden" data-tab="obstacles" id="creator-panel-obstacles" role="tabpanel" aria-labelledby="creator-tab-obstacles">
    <div id="creator-obstacles-list" class="creator-obstacles-list"></div>
    <button id="creator-add-obstacle-btn" class="creator-btn creator-btn-secondary" style="width:100%;margin-top:8px">
      <span class="material-icons">add</span> Add Obstacle
    </button>
    <div id="creator-obstacle-picker" class="creator-obstacle-picker hidden"></div>
  </div>`}function we(){const t=he.map(e=>`<option value="${e.value}" ${e.value===(o.normalMap||"normal-maps/sand-normal.jpg")?"selected":""}>${e.label}</option>`).join("");return`<div class="creator-tab-content active" data-tab="settings" id="creator-panel-settings" role="tabpanel" aria-labelledby="creator-tab-settings">
    <div class="creator-row">
      <label class="creator-label" for="creator-name">Island Name</label>
      <input id="creator-name" class="creator-input" type="text" maxlength="40"
             value="${(o.name||"My Island").replace(/"/g,"&quot;")}"
             placeholder="My Island" />
    </div>
    <div class="creator-row">
      <span class="creator-label" id="creator-label-targets">Targets</span>
      <div class="creator-toggle-group" role="group" aria-labelledby="creator-label-targets">
        ${[1,2,3,4].map(e=>{const a=(o.multipleTargets||1)===e;return`<button class="creator-toggle ${a?"active":""}" data-targets="${e}" aria-pressed="${a}">${e}</button>`}).join("")}
      </div>
    </div>
    ${d("winPercent","Win Target %",10,90,1,Math.round((o.winPercentage??.35)*100),"%")}
    ${d("waterLevel","Water Level",-3,.5,.05,o.waterLevel??-1.747)}
    <div class="creator-row">
      <span class="creator-label" id="creator-label-tod">Time of Day</span>
      <div class="creator-toggle-group" role="group" aria-labelledby="creator-label-tod">
        <button class="creator-toggle ${(o.timeOfDay||"day")==="day"?"active":""}" data-tod="day" aria-pressed="${(o.timeOfDay||"day")==="day"}">Day</button>
        <button class="creator-toggle ${(o.timeOfDay||"day")==="night"?"active":""}" data-tod="night" aria-pressed="${(o.timeOfDay||"day")==="night"}">Night</button>
      </div>
    </div>
    <div class="creator-row">
      <label class="creator-label" for="creator-normal-map">Surface Texture</label>
      <select id="creator-normal-map" class="creator-select">${t}</select>
    </div>
    ${d("normalMapScale","Texture Scale",1,32,1,o.normalMapScale??2,"x")}
    <div class="creator-section-label">Color Preset</div>
    <div id="creator-color-preset-display" class="creator-color-preset-display"></div>
    <div class="creator-section-label">Water</div>
    ${d("spawnInterval","Cloud Interval",3e3,2e4,500,8e3,"ms")}
    ${d("dropletsPerCloud","Droplets / Cloud",5,30,1,16)}
    ${d("cloudDuration","Cloud Duration",2e3,12e3,500,6e3,"ms")}
    ${d("minRadius","Min Drop Size",.05,.25,.01,.1)}
    ${d("maxRadius","Max Drop Size",.08,.3,.01,.15)}
    ${d("cloudSpeed","Cloud Speed",.5,6,.25,2.45)}
    <div class="creator-shortcuts">
      <div class="creator-shortcuts-title">Keyboard Shortcuts</div>
      <div class="creator-shortcut-row"><span class="creator-shortcut-keys"><kbd class="creator-kbd">ctrl</kbd><kbd class="creator-kbd">z</kbd></span><span class="creator-shortcut-desc">Undo</span></div>
      <div class="creator-shortcut-row"><span class="creator-shortcut-keys"><kbd class="creator-kbd">ctrl</kbd><kbd class="creator-kbd">shift</kbd><kbd class="creator-kbd">z</kbd></span><span class="creator-shortcut-desc">Redo</span></div>
      <div class="creator-shortcut-row"><span class="creator-shortcut-keys"><kbd class="creator-kbd">c</kbd></span><span class="creator-shortcut-desc">Toggle camera control</span></div>
      <div class="creator-shortcut-row"><span class="creator-shortcut-keys"><kbd class="creator-kbd">w</kbd><kbd class="creator-kbd">a</kbd><kbd class="creator-kbd">s</kbd><kbd class="creator-kbd">d</kbd></span><span class="creator-shortcut-desc">Move camera</span></div>
      <div class="creator-shortcut-row"><span class="creator-shortcut-keys"><kbd class="creator-kbd">space</kbd></span><span class="creator-shortcut-desc">Rise</span></div>
      <div class="creator-shortcut-row"><span class="creator-shortcut-keys"><kbd class="creator-kbd">ctrl</kbd></span><span class="creator-shortcut-desc">Lower</span></div>
      <div class="creator-shortcut-row"><span class="creator-shortcut-keys"><kbd class="creator-kbd">t</kbd></span><span class="creator-shortcut-desc">Terrain color panel</span></div>
      <div class="creator-shortcut-row"><span class="creator-shortcut-keys"><kbd class="creator-kbd">n</kbd></span><span class="creator-shortcut-desc">Cycle surface texture</span></div>
      <div class="creator-shortcut-row"><span class="creator-shortcut-keys"><kbd class="creator-kbd">[</kbd><kbd class="creator-kbd">]</kbd></span><span class="creator-shortcut-desc">Texture scale</span></div>
    </div>
  </div>`}function O(){const t=l?.querySelector("#creator-color-preset-display");if(!t)return;const e=o.terrainColorPreset;if(!e)t.innerHTML=`
      <div class="creator-row creator-preset-empty-row">
        <span class="creator-label" style="color:rgba(255,255,255,0.4);font-style:italic">None</span>
        <button class="creator-btn creator-btn-secondary creator-open-preset-btn" style="padding:4px 12px;font-size:12px">
          <span class="material-icons" style="font-size:14px;vertical-align:middle">palette</span> Choose
        </button>
      </div>`;else{const a=re.map(s=>{const c=e.colors?.[s]||[0,0,0];return`<span style="flex:1;background:${se(c)}"></span>`}).join("");t.innerHTML=`
      <div class="creator-color-preset-card">
        <div class="creator-preset-swatch-strip">${a}</div>
        <div class="creator-preset-meta">
          <span class="creator-preset-meta-name">${j(e.name)}</span>
          <button class="creator-btn creator-btn-ghost creator-open-preset-btn" title="Edit in Color Tester" style="padding:3px 8px;font-size:11px">
            <span class="material-icons" style="font-size:14px;vertical-align:middle">edit</span>
          </button>
        </div>
      </div>`}t.querySelector(".creator-open-preset-btn")?.addEventListener("click",Le)}function Le(){oe({loadPresets:()=>ve(),savePreset:(t,e)=>be(t,e),deletePreset:t=>pe(t)})}function d(t,e,a,s,c,i,r=""){return`
    <div class="creator-row creator-slider-row">
      <div class="creator-slider-header">
        <label class="creator-label" for="cs-${t}">${e}</label>
        <span class="creator-slider-value" id="csv-${t}">${i}${r}</span>
      </div>
      <input id="cs-${t}" class="creator-slider" type="range"
             min="${a}" max="${s}" step="${c}" value="${i}"
             data-unit="${r}" />
    </div>`}function xe(){l.querySelector("#creator-undo-btn").addEventListener("click",Y),l.querySelector("#creator-redo-btn").addEventListener("click",D),l.querySelector(".creator-collapse-btn").addEventListener("click",()=>{l.classList.toggle("collapsed");const r=l.querySelector(".creator-collapse-btn"),n=l.classList.contains("collapsed");r.textContent=n?"▶":"◀",r.setAttribute("aria-expanded",String(!n)),r.setAttribute("aria-label",n?"Expand panel":"Collapse panel")}),l.querySelectorAll(".creator-tab").forEach(r=>{r.addEventListener("click",()=>{l.querySelectorAll(".creator-tab").forEach(n=>{n.classList.remove("active"),n.setAttribute("aria-selected","false")}),l.querySelectorAll(".creator-tab-content").forEach(n=>n.classList.remove("active")),r.classList.add("active"),r.setAttribute("aria-selected","true"),l.querySelector(`.creator-tab-content[data-tab="${r.dataset.tab}"]`).classList.add("active")})}),l.querySelectorAll(".creator-slider").forEach(r=>{r.addEventListener("change",b),r.addEventListener("input",()=>{const n=parseFloat(r.value),v=r.dataset.unit||"",u=Number.isInteger(n)?n:parseFloat(n.toFixed(3));l.querySelector(`#csv-${r.id.replace("cs-","")}`).textContent=`${u}${v}`,Ee(r.id.replace("cs-",""),n),p()})});const t=l.querySelector("#creator-name");t&&t.addEventListener("input",()=>{const r=ne(t.value);o.name=r,t.value!==r&&(t.value=r)}),l.querySelectorAll(".creator-toggle[data-targets]").forEach(r=>{r.addEventListener("click",()=>{l.querySelectorAll(".creator-toggle[data-targets]").forEach(n=>{n.classList.remove("active"),n.setAttribute("aria-pressed","false")}),r.classList.add("active"),r.setAttribute("aria-pressed","true"),o.multipleTargets=parseInt(r.dataset.targets),b(),p()})}),l.querySelectorAll(".creator-toggle[data-tod]").forEach(r=>{r.addEventListener("click",()=>{l.querySelectorAll(".creator-toggle[data-tod]").forEach(n=>{n.classList.remove("active"),n.setAttribute("aria-pressed","false")}),r.classList.add("active"),r.setAttribute("aria-pressed","true"),o.timeOfDay=r.dataset.tod,b(),p()})});const e=l.querySelector("#creator-normal-map");e&&e.addEventListener("change",()=>{o.normalMap=e.value,b(),p()}),l.querySelectorAll(".creator-feature-toggle").forEach(r=>{r.addEventListener("click",()=>{const n=r.dataset.feature;if(!o.features[n])return;o.features[n].enabled=!o.features[n].enabled;const v=o.features[n].enabled;r.classList.toggle("active",v),r.setAttribute("aria-pressed",String(v)),r.textContent=v?"On":"Off";const u=l.querySelector(`.creator-feature-params[data-feature-params="${n}"]`);u&&u.classList.toggle("hidden",!v),b(),p()})});const a=l.querySelector("#creator-add-volcano-btn");a&&a.addEventListener("click",()=>{if(o.features.volcanoes.length>=6){T("Maximum 6 volcanoes per island");return}o.features.volcanoes.push({x:0,z:0,height:4,radius:1.5,steepness:.7,crater:{radius:.8,depth:1.5},active:!1}),b(),N(),p()});const s=l.querySelector("#creator-add-obstacle-btn");s&&s.addEventListener("click",Ce),l.querySelector("#creator-save-btn").addEventListener("click",z),l.querySelector("#creator-share-btn").addEventListener("click",Te),l.querySelector("#creator-exit-btn").addEventListener("click",()=>{L?Me():P()});const c=l.querySelector(".creator-my-islands-toggle");c&&c.addEventListener("click",U);const i=l.querySelector("#creator-new-island-btn");i&&i.addEventListener("click",()=>{L?Ae():I()}),w=r=>{o.terrainColorPreset=r.detail,b(),S(!0),O()},window.addEventListener("terrain-palette-applied",w),$=r=>{const n=r.target.tagName==="INPUT"||r.target.tagName==="TEXTAREA"||r.target.tagName==="SELECT";if((r.ctrlKey||r.metaKey)&&r.key==="z"){if(n)return;r.preventDefault(),r.shiftKey?D():Y();return}if((r.ctrlKey||r.metaKey)&&r.key==="y"){if(n)return;r.preventDefault(),D();return}if(n)return;if(r.key.toLowerCase()==="n"){const u=l?.querySelector("#creator-normal-map");if(!u)return;u.selectedIndex=(u.selectedIndex+1)%u.options.length,o.normalMap=u.value,b(),p()}else if(r.key==="["||r.key==="]"){const u=l?.querySelector("#cs-normalMapScale"),x=l?.querySelector("#csv-normalMapScale");if(!u)return;const X=parseInt(u.step)||1,Q=parseInt(u.min)||1,ee=parseInt(u.max)||32,M=r.key==="]"?Math.min(o.normalMapScale+X,ee):Math.max(o.normalMapScale-X,Q);o.normalMapScale=M,u.value=M,x&&(x.textContent=`${M}x`),b(),p()}},window.addEventListener("keydown",$)}function Ee(t,e){const a=o.terrainShape,s=o.spawn;switch(t){case"size":a.size=e;break;case"islandRadius":a.islandRadius=e;break;case"scaleX":a.scaleX=e;break;case"scaleY":a.scaleY=e;break;case"tiltAngle":a.tilt={...a.tilt,angle:e};break;case"tiltAmount":a.tilt={...a.tilt,amount:e};break;case"bayAngle":a.bay={...a.bay,angle:e};break;case"bayDepth":a.bay={...a.bay,depth:e};break;case"bayWidth":a.bay={...a.bay,width:e};break;case"irregularity":a.irregularity=e;break;case"distortionFreq":a.distortion={...a.distortion,frequency:e};break;case"distortionAmp":a.distortion={...a.distortion,amplitude:e};break;case"distortionRand":a.distortion={...a.distortion,randomness:e};break;case"turbStrength":a.turbulence={...a.turbulence,strength:e};break;case"turbScale":a.turbulence={...a.turbulence,scale:e};break;case"turbOctaves":a.turbulence={...a.turbulence,octaves:e};break;case"winPercent":o.winPercentage=e/100;break;case"waterLevel":o.waterLevel=e;break;case"spawnInterval":s.interval=e;break;case"dropletsPerCloud":s.dropletsPerCloud=e;break;case"cloudDuration":s.cloudDuration=e;break;case"minRadius":s.minRadius=e;break;case"maxRadius":s.maxRadius=Math.max(e,s.minRadius+.01);break;case"cloudSpeed":s.cloudSpeed=e;break;case"normalMapScale":o.normalMapScale=e;break;case"calderaPosX":o.features.caldera.x=e;break;case"calderaPosZ":o.features.caldera.z=e;break;case"calderaRadius":o.features.caldera.radius=e;break;case"calderaDepth":o.features.caldera.depth=e;break;case"terraceCount":o.features.terraces.count=e;break;case"terraceHeight":o.features.terraces.height=e;break;case"terraceWidth":o.features.terraces.width=e;break;case"spiralTurns":o.features.spiral.turns=e;break;case"spiralWidth":o.features.spiral.width=e;break;case"spiralHeight":o.features.spiral.height=e;break;case"spiralCenterHeight":o.features.spiral.centerHeight=e;break}}function _(){const t=o.terrainShape,e=o.spawn,a=o.features??{},s={size:t.size??14,islandRadius:t.islandRadius??parseFloat(((t.size??14)*.365).toFixed(1)),scaleX:t.scaleX??1,scaleY:t.scaleY??1,tiltAngle:t.tilt?.angle??0,tiltAmount:t.tilt?.amount??0,bayAngle:t.bay?.angle??0,bayDepth:t.bay?.depth??0,bayWidth:t.bay?.width??0,irregularity:t.irregularity??1,distortionFreq:t.distortion?.frequency??0,distortionAmp:t.distortion?.amplitude??0,distortionRand:t.distortion?.randomness??0,turbStrength:t.turbulence?.strength??0,turbScale:t.turbulence?.scale??.13,turbOctaves:t.turbulence?.octaves??1,winPercent:Math.round((o.winPercentage??.35)*100),waterLevel:o.waterLevel??-1.747,spawnInterval:e?.interval??8e3,dropletsPerCloud:e?.dropletsPerCloud??16,cloudDuration:e?.cloudDuration??6e3,minRadius:e?.minRadius??.1,maxRadius:e?.maxRadius??.15,cloudSpeed:e?.cloudSpeed??2.45,normalMapScale:o.normalMapScale??2,calderaPosX:a.caldera?.x??0,calderaPosZ:a.caldera?.z??0,calderaRadius:a.caldera?.radius??2,calderaDepth:a.caldera?.depth??3,terraceCount:a.terraces?.count??3,terraceHeight:a.terraces?.height??2,terraceWidth:a.terraces?.width??1,spiralTurns:a.spiral?.turns??2,spiralWidth:a.spiral?.width??1,spiralHeight:a.spiral?.height??1.5,spiralCenterHeight:a.spiral?.centerHeight??0};for(const[i,r]of Object.entries(s)){const n=l.querySelector(`#cs-${i}`);n&&(n.value=r);const v=l.querySelector(`#csv-${i}`);if(v){const u=n?.dataset.unit||"",x=Number.isInteger(r)?r:parseFloat(Number(r).toFixed(3));v.textContent=`${x}${u}`}}l.querySelectorAll(".creator-feature-toggle").forEach(i=>{const r=i.dataset.feature,n=a[r]?.enabled??!1;i.classList.toggle("active",n),i.setAttribute("aria-pressed",String(n)),i.textContent=n?"On":"Off";const v=l.querySelector(`.creator-feature-params[data-feature-params="${r}"]`);v&&v.classList.toggle("hidden",!n)}),l.querySelectorAll(".creator-toggle[data-targets]").forEach(i=>{const r=parseInt(i.dataset.targets)===(o.multipleTargets||1);i.classList.toggle("active",r),i.setAttribute("aria-pressed",String(r))}),l.querySelectorAll(".creator-toggle[data-tod]").forEach(i=>{const r=i.dataset.tod===(o.timeOfDay||"day");i.classList.toggle("active",r),i.setAttribute("aria-pressed",String(r))});const c=l.querySelector("#creator-normal-map");c&&(c.value=o.normalMap||"normal-maps/sand-normal.jpg"),N(),q(),O()}function p(){S(!0),clearTimeout(W),W=setTimeout(()=>{le({...o,id:me})},300)}function Ce(){const t=l.querySelector("#creator-obstacle-picker");if(t){if(!t.classList.contains("hidden")){t.classList.add("hidden");return}t.innerHTML=R.map((e,a)=>`<button class="creator-obstacle-option" data-preset="${a}">${e.label}</button>`).join(""),t.classList.remove("hidden"),t.querySelectorAll(".creator-obstacle-option").forEach(e=>{e.addEventListener("click",()=>{qe(parseInt(e.dataset.preset)),t.classList.add("hidden")})})}}function qe(t){if(o.obstacles.length>=8){T("Maximum 8 obstacles per island");return}const e=R[t],a={type:"model",model:e.model,position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:e.scale,embedDepth:.5,kinetic:!1,physics:{...e.physics,mass:0,friction:.7,restitution:.2},...e.lighthouseBeam?{lighthouseBeam:!0}:{}};o.obstacles.push(a),b(),q(),p()}function q(){const t=l?.querySelector("#creator-obstacles-list");if(t){if(o.obstacles.length===0){t.innerHTML='<p class="creator-empty-msg">No obstacles placed yet.</p>';return}t.innerHTML=o.obstacles.map((e,a)=>{const s=R.find(i=>i.model===e.model)?.label||e.model,c=e.kinetic===!0;return`
      <div class="creator-obstacle-item" data-index="${a}">
        <div class="creator-obstacle-header">
          <span class="creator-obstacle-name">${s}</span>
          <button class="creator-obs-mode-toggle ${c?"kinetic":""}" data-index="${a}"
                  title="${c?"Kinetic — can roll":"Static — embedded in terrain"}">
            ${c?"Kinetic":"Static"}
          </button>
          <button class="creator-obstacle-remove" data-index="${a}" aria-label="Remove">✕</button>
        </div>
        <div class="creator-obstacle-controls">
          ${k(a,"posX","Pos X",-8,8,.5,e.position.x)}
          ${k(a,"posZ","Pos Z",-8,8,.5,e.position.z)}
          ${k(a,"rotY","Rotate",0,360,5,(e.rotation?.y??0)*(180/Math.PI))}
          ${k(a,"scale","Scale",.2,5,.1,e.scale??1)}
          ${k(a,"embed","Embed",0,2,.1,e.embedDepth??.5)}
        </div>
      </div>`}).join(""),t.querySelectorAll(".creator-obstacle-remove").forEach(e=>{e.addEventListener("click",()=>{o.obstacles.splice(parseInt(e.dataset.index),1),b(),q(),p()})}),t.querySelectorAll(".creator-obs-mode-toggle").forEach(e=>{e.addEventListener("click",()=>{const a=parseInt(e.dataset.index),s=o.obstacles[a];s&&(s.kinetic=!s.kinetic,s.physics.mass=s.kinetic?50:0,b(),q(),p())})}),t.querySelectorAll(".creator-obs-slider").forEach(e=>{e.addEventListener("change",b),e.addEventListener("input",()=>{const a=parseInt(e.dataset.index),s=e.dataset.key,c=parseFloat(e.value),i=o.obstacles[a];if(!i)return;const r=l.querySelector(`#obsv-${a}-${s}`);r&&(r.textContent=c.toFixed(2)),s==="posX"?i.position.x=c:s==="posZ"?i.position.z=c:s==="rotY"?i.rotation={...i.rotation||{},y:c*(Math.PI/180)}:s==="scale"?i.scale=c:s==="embed"&&(i.embedDepth=c),p()})})}}function k(t,e,a,s,c,i,r){const n=parseFloat(Number(r).toFixed(2));return`
    <div class="creator-obs-row">
      <label class="creator-obs-label">${a}</label>
      <input class="creator-obs-slider" type="range" min="${s}" max="${c}" step="${i}" value="${r}"
             data-index="${t}" data-key="${e}" />
      <span class="creator-obs-val" id="obsv-${t}-${e}">${n}</span>
    </div>`}function N(){const t=l?.querySelector("#creator-volcanoes-list");if(!t)return;const e=o.features?.volcanoes??[];if(e.length===0){t.innerHTML='<p class="creator-empty-msg">No volcanoes placed.</p>';return}t.innerHTML=e.map((a,s)=>{const c=a.active===!0;return`
    <div class="creator-obstacle-item" data-vol-index="${s}">
      <div class="creator-obstacle-header">
        <span class="creator-obstacle-name">Volcano ${s+1}</span>
        <button class="creator-obs-mode-toggle ${c?"kinetic":""}" data-vol-index="${s}" data-action="active"
                title="${c?"Active — has lava":"Dormant"}">
          ${c?"Active":"Dormant"}
        </button>
        <button class="creator-vol-remove" data-vol-index="${s}" aria-label="Remove">✕</button>
      </div>
      <div class="creator-obstacle-controls">
        ${y(s,"x","Pos X",-8,8,.5,a.x??0)}
        ${y(s,"z","Pos Z",-8,8,.5,a.z??0)}
        ${y(s,"height","Height",1,10,.5,a.height??4)}
        ${y(s,"radius","Radius",.5,5,.1,a.radius??1.5)}
        ${y(s,"steepness","Steepness",.1,1,.05,a.steepness??.7)}
        ${y(s,"craterRadius","Crater Size",.1,2,.1,a.crater?.radius??.8)}
        ${y(s,"craterDepth","Crater Depth",.1,3,.1,a.crater?.depth??1.5)}
      </div>
    </div>`}).join(""),t.querySelectorAll(".creator-vol-remove").forEach(a=>{a.addEventListener("click",()=>{o.features.volcanoes.splice(parseInt(a.dataset.volIndex),1),b(),N(),p()})}),t.querySelectorAll('[data-action="active"]').forEach(a=>{a.addEventListener("click",()=>{const s=o.features.volcanoes[parseInt(a.dataset.volIndex)];s&&(s.active=!s.active,a.classList.toggle("kinetic",s.active),a.textContent=s.active?"Active":"Dormant",a.title=s.active?"Active — has lava":"Dormant",b(),p())})}),t.querySelectorAll(".creator-vol-slider").forEach(a=>{a.addEventListener("change",b),a.addEventListener("input",()=>{const s=parseInt(a.dataset.index),c=a.dataset.key,i=parseFloat(a.value),r=o.features.volcanoes[s];if(!r)return;const n=l.querySelector(`#volv-${s}-${c}`);n&&(n.textContent=i.toFixed(2)),c==="craterRadius"?r.crater&&(r.crater.radius=i):c==="craterDepth"?r.crater&&(r.crater.depth=i):r[c]=i,p()})})}function y(t,e,a,s,c,i,r){const n=parseFloat(Number(r).toFixed(2));return`
    <div class="creator-obs-row">
      <label class="creator-obs-label">${a}</label>
      <input class="creator-slider creator-obs-slider creator-vol-slider" type="range" min="${s}" max="${c}" step="${i}" value="${r}"
             data-index="${t}" data-key="${e}" />
      <span class="creator-obs-val" id="volv-${t}-${e}">${n}</span>
    </div>`}async function z(){const t=l.querySelector("#creator-save-btn");if(t){t.disabled=!0,t.innerHTML='<span class="material-icons">hourglass_empty</span> Saving…';try{const e={...o,id:void 0},a=await ie(e,f);f=a.id,g=a.share_id;const s=l.querySelector("#creator-share-btn");s&&(s.disabled=!1),S(!1),C=new Date,F();const c=document.getElementById("level-name");c&&(c.textContent=o.name||"My Island"),H("Island saved!")}catch{T("Save failed — please try again")}finally{t.disabled=!1,t.innerHTML='<span class="material-icons">save</span> Save'}}}function Te(){if(!g)return;const t=`${window.location.origin}${window.location.pathname}?island=${g}`;navigator.clipboard.writeText(t).then(()=>{H("Share link copied to clipboard!")}).catch(()=>{prompt("Copy this link to share your island:",t)})}async function U(){E=!E;const t=l.querySelector(".creator-my-islands-list"),e=l.querySelector(".creator-chevron");if(t)if(E){t.classList.remove("hidden"),e&&(e.textContent="expand_less"),t.innerHTML=J;const a=await de();if(a.length===0){t.innerHTML='<p class="creator-empty-msg">No saved islands yet.</p>';return}t.innerHTML=a.map(s=>`
      <div class="creator-saved-item">
        <div class="creator-saved-info">
          <span class="creator-saved-name">${j(s.name)}</span>
          <span class="creator-saved-date">${G(s.updated_at)}</span>
        </div>
        <div class="creator-saved-actions">
          <button class="creator-saved-edit" data-id="${s.id}" data-share="${s.share_id}" title="Edit">
            <span class="material-icons">edit</span>
          </button>
          <button class="creator-saved-delete" data-id="${s.id}" title="Delete">
            <span class="material-icons">delete</span>
          </button>
        </div>
      </div>
    `).join(""),t.querySelectorAll(".creator-saved-edit").forEach(s=>{s.addEventListener("click",async()=>{const c=s.closest(".creator-saved-actions"),i=c.innerHTML;c.innerHTML=J;const{loadIslandByShareId:r}=await te(async()=>{const{loadIslandByShareId:v}=await import("./creatorSystem-Cm6x7f-2.js");return{loadIslandByShareId:v}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])),n=await r(s.dataset.share);n?(B(),fe(n,s.dataset.id,s.dataset.share)):(c.innerHTML=i,T("Could not load island — please try again"),E=!0,U())})}),t.querySelectorAll(".creator-saved-delete").forEach(s=>{const c=s.closest(".creator-saved-item")?.querySelector(".creator-saved-name")?.textContent||"this island";s.addEventListener("click",()=>{_e(c,async()=>{if(await ue(s.dataset.id),s.closest(".creator-saved-item").remove(),f===s.dataset.id){f=null,g=null;const i=l?.querySelector("#creator-share-btn");i&&(i.disabled=!0)}H("Island deleted")})})})}else t.classList.add("hidden"),e&&(e.textContent="expand_more")}function F(){const t=l?.querySelector("#creator-last-saved");if(!t)return;if(!f){t.textContent="";return}const e=C?`Saved ${G(C.toISOString())}`:"Saved";t.textContent=e}function I(){f=null,g=null,C=null,o=Z();const t=l?.querySelector("#creator-share-btn");t&&(t.disabled=!0),S(!0),F(),_(),p()}function Ae(){const t=document.createElement("div");t.className="creator-save-prompt-overlay",t.innerHTML=`
    <div class="creator-save-prompt">
      <div class="creator-save-prompt-title">Start a new island?</div>
      <div class="creator-save-prompt-body">Your current island has unsaved changes.</div>
      <div class="creator-save-prompt-actions">
        <button class="creator-btn creator-btn-primary" id="cnp-save">Save &amp; New</button>
        <button class="creator-btn creator-btn-ghost" id="cnp-discard">Discard &amp; New</button>
        <button class="creator-btn creator-btn-ghost" id="cnp-cancel">Cancel</button>
      </div>
    </div>`,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("visible"));const e=()=>{t.classList.remove("visible"),setTimeout(()=>t.remove(),250)};t.querySelector("#cnp-save").addEventListener("click",async()=>{e(),await z(),I()}),t.querySelector("#cnp-discard").addEventListener("click",()=>{e(),I()}),t.querySelector("#cnp-cancel").addEventListener("click",e)}function _e(t,e){const a=document.createElement("div");a.className="creator-save-prompt-overlay",a.innerHTML=`
    <div class="creator-save-prompt">
      <div class="creator-save-prompt-title">Delete island?</div>
      <div class="creator-save-prompt-body">"${j(t)}" will be permanently deleted and cannot be recovered.</div>
      <div class="creator-save-prompt-actions">
        <button class="creator-btn creator-btn-primary" id="cdp-confirm">Delete</button>
        <button class="creator-btn creator-btn-ghost" id="cdp-cancel">Cancel</button>
      </div>
    </div>`,document.body.appendChild(a),requestAnimationFrame(()=>a.classList.add("visible"));const s=()=>{a.classList.remove("visible"),setTimeout(()=>a.remove(),250)};a.querySelector("#cdp-confirm").addEventListener("click",()=>{s(),e()}),a.querySelector("#cdp-cancel").addEventListener("click",s)}function Me(){const t=document.createElement("div");t.className="creator-save-prompt-overlay",t.innerHTML=`
    <div class="creator-save-prompt">
      <div class="creator-save-prompt-title">Save before playing?</div>
      <div class="creator-save-prompt-body">Your island has unsaved changes — they'll be lost if something goes wrong.</div>
      <div class="creator-save-prompt-actions">
        <button class="creator-btn creator-btn-primary" id="csp-save">Save &amp; Play</button>
        <button class="creator-btn creator-btn-ghost" id="csp-play">Play Anyway</button>
        <button class="creator-btn creator-btn-ghost" id="csp-cancel">Cancel</button>
      </div>
    </div>`,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("visible"));const e=()=>{t.classList.remove("visible"),setTimeout(()=>t.remove(),250)};t.querySelector("#csp-save").addEventListener("click",async()=>{e(),await z(),P()}),t.querySelector("#csp-play").addEventListener("click",()=>{e(),P()}),t.querySelector("#csp-cancel").addEventListener("click",e)}function De(){l&&(l.style.display="flex",requestAnimationFrame(()=>l.classList.add("visible")),window.dispatchEvent(new CustomEvent("creator-panel-state",{detail:{open:!0}})))}function B(){$&&(window.removeEventListener("keydown",$),$=null),w&&(window.removeEventListener("terrain-palette-applied",w),w=null),l&&(l.classList.remove("visible"),setTimeout(()=>{l&&(l.remove(),l=null)},350))}function j(t){return String(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function G(t){if(!t)return"";const e=new Date(t),s=new Date-e,c=Math.floor(s/864e5);return c===0?"today":c===1?"yesterday":c<7?`${c}d ago`:c<365?e.toLocaleDateString(void 0,{month:"short",day:"numeric"}):e.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}export{P as closeCreatorMode,Ze as dismissCreatorPanel,fe as openCreatorMode,Ve as reopenCreatorPanel};
