const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/creatorSystem-BAPWvnhG.js","assets/supabaseConfig-BCu5G7WU.js","assets/supabase-qp4a7gwM.js","assets/levelManager-CXaHbJff.js","assets/toast-DFQg6cek.js","assets/packState-BDM9-7SC.js","assets/haptics-CVC700rQ.js","assets/audioManager-BjdXWEiE.js","assets/soundtrack-v1-DAn48QlH.js","assets/three-vJUBkHxL.js","assets/physics-CKC5f6tm.js","assets/physicsQueue-CYlIB816.js","assets/emailRecovery-DC0OA2yc.js"])))=>i.map(i=>d[i]);
import{_ as se}from"./supabase-qp4a7gwM.js";import{s as U,a as oe,S as le,r as ce,b as ne,c as ie,e as de}from"./main-Bw_N2ABo.js";import{sanitizeName as ue,saveIsland as pe,getMyIslands as be,deleteIsland as ve,deleteColorPreset as me,saveColorPreset as ye,getColorPresets as he}from"./creatorSystem-BAPWvnhG.js";import{showError as E,showSuccess as O}from"./toast-DFQg6cek.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./three-vJUBkHxL.js";import"./physics-CKC5f6tm.js";import"./levelManager-CXaHbJff.js";import"./supabaseConfig-BCu5G7WU.js";import"./packState-BDM9-7SC.js";import"./haptics-CVC700rQ.js";import"./audioManager-BjdXWEiE.js";import"./soundtrack-v1-DAn48QlH.js";import"./physicsQueue-CYlIB816.js";import"./emailRecovery-DC0OA2yc.js";import"./stormRain-DmdVIPUh.js";import"./sculptEffects-HepbQ-tR.js";import"./networkClient-Bpayhc9L.js";import"./messageProtocol-BMEmlWkN.js";import"./lava-DiCl-uR5.js";const ge=-99,fe=[{label:"Sand",value:"normal-maps/sand-normal.jpg"},{label:"Rough Pebble",value:"normal-maps/rough-pebble-normal.jpg"},{label:"Pebble Beach",value:"normal-maps/pebble-beach-normal.jpg"},{label:"Slate",value:"normal-maps/slate-normal.jpg"},{label:"Layers",value:"normal-maps/layers-normal.jpg"},{label:"Crack Rock",value:"normal-maps/crack-rock-normal.jpg"},{label:"Swirl Sand",value:"normal-maps/swirl-sand-normal.jpg"},{label:"Weathered Stone",value:"normal-maps/weathered-stone-normal.jpg"},{label:"Pinch",value:"normal-maps/pinch-normal.jpg"}],N=[{label:"Anchor",model:"anchor.glb",physics:{type:"convexHull"},scale:1},{label:"Barrel",model:"barrel-style.glb",physics:{type:"convexHull"},scale:.6},{label:"Boulder (Small 2)",model:"boulder-sm-2n.glb",physics:{type:"convexHull"},scale:.6},{label:"Boulder (Small 2)",model:"boulder-sm-2n.glb",physics:{type:"convexHull"},scale:.6},{label:"Boulder (Tall)",model:"boulder-tall-n.glb",physics:{type:"convexHull"},scale:1},{label:"Boulder (Flat)",model:"boulder-flat-bottom.glb",physics:{type:"convexHull"},scale:1},{label:"Basalt Clump",model:"basalt-clump-1.glb",physics:{type:"convexHull"},scale:1.2},{label:"Basalt Leaning",model:"basalt-lean.glb",physics:{type:"convexHull"},scale:1},{label:"Chest",model:"chest.glb",physics:{type:"box",halfExtents:{x:.5,y:.35,z:.35}},scale:1},{label:"Conch Shell",model:"coral-garden/shell-conch.glb",physics:{type:"convexHull"},scale:1.25},{label:"Dock",model:"dock.glb",physics:{type:"convexHull"},scale:1},{label:"Lighthouse",model:"lighthouse.glb",physics:{type:"cylinder",height:4,radiusTop:.4},scale:1,lighthouseBeam:!0},{label:"Moai (Tall)",model:"moai/moai-tall-stone.glb",physics:{type:"convexHull"},scale:1},{label:"Moai (Head)",model:"moai/moai-head-stone.glb",physics:{type:"convexHull"},scale:1},{label:"Radio Tower",model:"radio-tower.glb",physics:{type:"convexHull"},scale:1},{label:"Stone Wall",model:"stone-wall.glb",physics:{type:"convexHull"},scale:1.25},{label:"Stone Well",model:"stone-well.glb",physics:{type:"cylinder",height:.86,radiusTop:.15},scale:1},{label:"Shipping Container (green)",model:"container-green.glb",physics:{type:"convexHull"},scale:1},{label:"Tetrapod 1",model:"tetrapod.glb",physics:{type:"convexHull"},scale:1},{label:"Tetrapod 2",model:"tetrapod-2.glb",physics:{type:"convexHull"},scale:1},{label:"Wind Turbine",model:"wind-turbine.glb",physics:{type:"cylinder",height:1.42,radiusTop:.15},scale:1}];function G(){return{name:"My Island",terrainShape:{size:14,islandRadius:5.1,scaleX:1,scaleY:1,tilt:{angle:0,amount:0},bay:{angle:0,depth:0,width:0},irregularity:1,distortion:{frequency:0,amplitude:0,randomness:0},turbulence:{strength:0,scale:.13,octaves:1}},waterLevel:-1.747,winPercentage:.35,spawn:{enabled:!0,interval:8e3,cloudDuration:6e3,dropletsPerCloud:16,dropletInterval:400,minRadius:.1,maxRadius:.15,spawnHeight:10.2,cloudSpeed:2.45,fadeInDuration:2800,fadeOutDuration:2800},obstacles:[],features:{caldera:{enabled:!1,x:0,z:0,radius:2,depth:3},volcanoes:[],terraces:{enabled:!1,count:3,height:2,width:1},spiral:{enabled:!1,turns:2,width:1,height:1.5,centerHeight:0}},cyclones:[],multipleTargets:1,timeOfDay:"day",normalMap:"normal-maps/sand-normal.jpg",normalMapScale:2,terrainColorPreset:null}}let l=null,o=null,S=null,$=null,K=null,T=!1,C=!0,A=null,x=null,L=null;const Se=50;let y=[],h=-1;function b(){y=y.slice(0,h+1),y.push(JSON.parse(JSON.stringify(o))),y.length>Se&&y.shift(),h=y.length-1,M()}function Z(){h<=0||(h--,o=JSON.parse(JSON.stringify(y[h])),D(),p(),k(!0),M())}function I(){h>=y.length-1||(h++,o=JSON.parse(JSON.stringify(y[h])),D(),p(),k(!0),M())}function M(){const e=l?.querySelector("#creator-undo-btn"),t=l?.querySelector("#creator-redo-btn");e&&(e.disabled=h<=0),t&&(t.disabled=h>=y.length-1)}const V=`
  <div class="stats-loading-animation creator-drops-loader">
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="collection"></div>
  </div>`;function k(e){C=e;const t=l?.querySelector("#creator-save-btn");t&&t.classList.toggle("creator-save-btn--dirty",e)}function $e(e=null,t=null,a=null){o=e?JSON.parse(JSON.stringify(e)):G(),S=t,$=a,C=!t,y=[JSON.parse(JSON.stringify(o))],h=0,U(o,Q)}function Q(){ke(),Pe(),k(C),W(),o.terrainColorPreset&&oe(o.terrainColorPreset),F()}function P(){X(),de(),window.dispatchEvent(new CustomEvent("creator-panel-state",{detail:{open:!1,sessionEnded:!0}}))}function rt(){X(),window.dispatchEvent(new CustomEvent("creator-panel-state",{detail:{open:!1}}))}function st(){U(o,Q)}function ke(){l&&(l.remove(),l=null),l=document.createElement("div"),l.id="island-creator-panel",l.setAttribute("role","complementary"),l.setAttribute("aria-label","Island Creator"),l.innerHTML=`
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
      ${we()}
      ${xe()}
      ${Le()}
      ${Ee()}
    </div>

    <div class="creator-footer">
      <button id="creator-save-btn" class="creator-btn creator-btn-primary">
        <span class="material-icons">save</span> Save
      </button>
      <button id="creator-share-btn" class="creator-btn creator-btn-secondary" ${$?"":"disabled"}>
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
  `,document.body.appendChild(l),qe(),D(),M()}function we(){return`<div class="creator-tab-content hidden" data-tab="shape" id="creator-panel-shape" role="tabpanel" aria-labelledby="creator-tab-shape">
    ${u("size","Size",8,20,.5,14)}
    ${u("islandRadius","Island Radius",2,10,.1,5.1)}
    ${u("scaleX","Scale X",.5,2,.05,1)}
    ${u("scaleY","Scale Y",.5,2,.05,1)}
    <div class="creator-section-label">Tilt</div>
    ${u("tiltAngle","Angle",0,360,1,0)}
    ${u("tiltAmount","Amount",0,10,.05,0)}
    <div class="creator-section-label">Bay</div>
    ${u("bayAngle","Angle",0,360,1,0)}
    ${u("bayDepth","Depth",0,10,.05,0)}
    ${u("bayWidth","Width",0,10,.05,0)}
    <div class="creator-section-label">Surface</div>
    ${u("irregularity","Irregularity",0,24,.05,1)}
    ${u("distortionFreq","Distort Freq",0,6.2,.01,0)}
    ${u("distortionAmp","Distort Amp",0,6.5,.01,0)}
    ${u("distortionRand","Distort Rand",0,6.1,.005,0)}
    ${u("turbStrength","Turbulence",0,12,.05,0)}
    ${u("turbScale","Turb Scale",.01,6.4,.01,.13)}
    ${u("turbOctaves","Turb Octaves",0,12,.1,1)}
  </div>`}function xe(){const e=o.features??{},t=(i,n)=>{const s=e[i]?.enabled??!1;return`
    <div class="creator-section-label">${n}</div>
    <div class="creator-row">
      <button class="creator-toggle creator-feature-toggle ${s?"active":""}"
              data-feature="${i}" aria-pressed="${s}">${s?"On":"Off"}</button>
    </div>
    <div class="creator-feature-params ${s?"":"hidden"}" data-feature-params="${i}">`},a=e.caldera??{},r=e.terraces??{},c=e.spiral??{};return`<div class="creator-tab-content hidden" data-tab="features" id="creator-panel-features" role="tabpanel" aria-labelledby="creator-tab-features">
    ${t("caldera","Caldera")}
      ${u("calderaPosX","Pos X",-8,8,.5,a.x??0)}
      ${u("calderaPosZ","Pos Z",-8,8,.5,a.z??0)}
      ${u("calderaRadius","Radius",.5,5,.1,a.radius??2)}
      ${u("calderaDepth","Depth",.5,6,.1,a.depth??3)}
    </div>

    <div class="creator-section-label">Volcanoes</div>
    <div id="creator-volcanoes-list" class="creator-obstacles-list"></div>
    <button id="creator-add-volcano-btn" class="creator-btn creator-btn-secondary" style="width:100%;margin-top:8px">
      <span class="material-icons">add</span> Add Volcano
    </button>

    ${t("terraces","Terraces")}
      ${u("terraceCount","Steps",2,8,1,r.count??3)}
      ${u("terraceHeight","Step Height",.5,4,.1,r.height??2)}
      ${u("terraceWidth","Sharpness",0,1,.05,r.width??1)}
    </div>

    ${t("spiral","Spiral")}
      ${u("spiralTurns","Turns",1,5,.5,c.turns??2)}
      ${u("spiralWidth","Width",.2,3,.1,c.width??1)}
      ${u("spiralHeight","Height",.2,4,.1,c.height??1.5)}
      ${u("spiralCenterHeight","Center Height",-4,4,.1,c.centerHeight??0)}
    </div>

    <div class="creator-section-label">Cyclones</div>
    <div id="creator-cyclones-list" class="creator-obstacles-list"></div>
    <button id="creator-add-cyclone-btn" class="creator-btn creator-btn-secondary" style="width:100%;margin-top:8px">
      <span class="material-icons">cyclone</span> Add Cyclone
    </button>
  </div>`}function Le(){return`<div class="creator-tab-content hidden" data-tab="obstacles" id="creator-panel-obstacles" role="tabpanel" aria-labelledby="creator-tab-obstacles">
    <div id="creator-obstacles-list" class="creator-obstacles-list"></div>
    <button id="creator-add-obstacle-btn" class="creator-btn creator-btn-secondary" style="width:100%;margin-top:8px">
      <span class="material-icons">add</span> Add Obstacle
    </button>
    <div id="creator-obstacle-picker" class="creator-obstacle-picker hidden"></div>
  </div>`}function Ee(){const e=fe.map(t=>`<option value="${t.value}" ${t.value===(o.normalMap||"normal-maps/sand-normal.jpg")?"selected":""}>${t.label}</option>`).join("");return`<div class="creator-tab-content active" data-tab="settings" id="creator-panel-settings" role="tabpanel" aria-labelledby="creator-tab-settings">
    <div class="creator-row">
      <label class="creator-label" for="creator-name">Island Name</label>
      <input id="creator-name" class="creator-input" type="text" maxlength="40"
             value="${(o.name||"My Island").replace(/"/g,"&quot;")}"
             placeholder="My Island" />
    </div>
    <div class="creator-row">
      <span class="creator-label" id="creator-label-targets">Targets</span>
      <div class="creator-toggle-group" role="group" aria-labelledby="creator-label-targets">
        ${[1,2,3,4].map(t=>{const a=(o.multipleTargets||1)===t;return`<button class="creator-toggle ${a?"active":""}" data-targets="${t}" aria-pressed="${a}">${t}</button>`}).join("")}
      </div>
    </div>
    ${u("winPercent","Win Target %",10,90,1,Math.round((o.winPercentage??.35)*100),"%")}
    ${u("waterLevel","Water Level",-6,3.5,.05,o.waterLevel??-1.747)}
    <div class="creator-row">
      <span class="creator-label" id="creator-label-tod">Time of Day</span>
      <div class="creator-toggle-group" role="group" aria-labelledby="creator-label-tod">
        <button class="creator-toggle ${(o.timeOfDay||"day")==="day"?"active":""}" data-tod="day" aria-pressed="${(o.timeOfDay||"day")==="day"}">Day</button>
        <button class="creator-toggle ${(o.timeOfDay||"day")==="night"?"active":""}" data-tod="night" aria-pressed="${(o.timeOfDay||"day")==="night"}">Night</button>
      </div>
    </div>
    <div class="creator-row">
      <label class="creator-label" for="creator-normal-map">Surface Texture</label>
      <select id="creator-normal-map" class="creator-select">${e}</select>
    </div>
    ${u("normalMapScale","Texture Scale",1,32,1,o.normalMapScale??2,"x")}
    <div class="creator-section-label">Color Preset</div>
    <div id="creator-color-preset-display" class="creator-color-preset-display"></div>
    <div class="creator-section-label">Water</div>
    ${u("spawnInterval","Cloud Interval",3e3,2e4,500,8e3,"ms")}
    ${u("dropletsPerCloud","Droplets / Cloud",5,30,1,16)}
    ${u("cloudDuration","Cloud Duration",2e3,12e3,500,6e3,"ms")}
    ${u("minRadius","Min Drop Size",.05,.25,.01,.1)}
    ${u("maxRadius","Max Drop Size",.08,.3,.01,.15)}
    ${u("cloudSpeed","Cloud Speed",.5,6,.25,2.45)}
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
  </div>`}function F(){const e=l?.querySelector("#creator-color-preset-display");if(!e)return;const t=o.terrainColorPreset;if(!t)e.innerHTML=`
      <div class="creator-row creator-preset-empty-row">
        <span class="creator-label" style="color:rgba(255,255,255,0.4);font-style:italic">None</span>
        <button class="creator-btn creator-btn-secondary creator-open-preset-btn" style="padding:4px 12px;font-size:12px">
          <span class="material-icons" style="font-size:14px;vertical-align:middle">palette</span> Choose
        </button>
      </div>`;else{const a=le.map(r=>{const c=t.colors?.[r]||[0,0,0];return`<span style="flex:1;background:${ce(c)}"></span>`}).join("");e.innerHTML=`
      <div class="creator-color-preset-card">
        <div class="creator-preset-swatch-strip">${a}</div>
        <div class="creator-preset-meta">
          <span class="creator-preset-meta-name">${Y(t.name)}</span>
          <button class="creator-btn creator-btn-ghost creator-open-preset-btn" title="Edit in Color Tester" style="padding:3px 8px;font-size:11px">
            <span class="material-icons" style="font-size:14px;vertical-align:middle">edit</span>
          </button>
        </div>
      </div>`}e.querySelector(".creator-open-preset-btn")?.addEventListener("click",Ce)}function Ce(){ne({loadPresets:()=>he(),savePreset:(e,t)=>ye(e,t),deletePreset:e=>me(e)})}function u(e,t,a,r,c,i,n=""){return`
    <div class="creator-row creator-slider-row">
      <div class="creator-slider-header">
        <label class="creator-label" for="cs-${e}">${t}</label>
        <span class="creator-slider-value" id="csv-${e}">${i}${n}</span>
      </div>
      <input id="cs-${e}" class="creator-slider" type="range"
             min="${a}" max="${r}" step="${c}" value="${i}"
             data-unit="${n}" />
    </div>`}function qe(){l.querySelector("#creator-undo-btn").addEventListener("click",Z),l.querySelector("#creator-redo-btn").addEventListener("click",I),l.querySelector(".creator-collapse-btn").addEventListener("click",()=>{l.classList.toggle("collapsed");const s=l.querySelector(".creator-collapse-btn"),d=l.classList.contains("collapsed");s.textContent=d?"▶":"◀",s.setAttribute("aria-expanded",String(!d)),s.setAttribute("aria-label",d?"Expand panel":"Collapse panel")}),l.querySelectorAll(".creator-tab").forEach(s=>{s.addEventListener("click",()=>{l.querySelectorAll(".creator-tab").forEach(d=>{d.classList.remove("active"),d.setAttribute("aria-selected","false")}),l.querySelectorAll(".creator-tab-content").forEach(d=>d.classList.remove("active")),s.classList.add("active"),s.setAttribute("aria-selected","true"),l.querySelector(`.creator-tab-content[data-tab="${s.dataset.tab}"]`).classList.add("active")})}),l.querySelectorAll(".creator-slider").forEach(s=>{s.addEventListener("change",b),s.addEventListener("input",()=>{const d=parseFloat(s.value),m=s.dataset.unit||"",v=Number.isInteger(d)?d:parseFloat(d.toFixed(3));l.querySelector(`#csv-${s.id.replace("cs-","")}`).textContent=`${v}${m}`,Te(s.id.replace("cs-",""),d),p()})});const e=l.querySelector("#creator-name");e&&(e.addEventListener("input",()=>{const s=e.value.replace(/[\x00-\x1F\x7F]/g,"").replace(/<[^>]*>/g,"").replace(/&[#\w]{1,10};/g,"").replace(/\s+/g," ").slice(0,40);e.value!==s&&(e.value=s),o.name=s.trim()||"My Island"}),e.addEventListener("blur",()=>{const s=ue(e.value);e.value=s,o.name=s})),l.querySelectorAll(".creator-toggle[data-targets]").forEach(s=>{s.addEventListener("click",()=>{l.querySelectorAll(".creator-toggle[data-targets]").forEach(d=>{d.classList.remove("active"),d.setAttribute("aria-pressed","false")}),s.classList.add("active"),s.setAttribute("aria-pressed","true"),o.multipleTargets=parseInt(s.dataset.targets),b(),p()})}),l.querySelectorAll(".creator-toggle[data-tod]").forEach(s=>{s.addEventListener("click",()=>{l.querySelectorAll(".creator-toggle[data-tod]").forEach(d=>{d.classList.remove("active"),d.setAttribute("aria-pressed","false")}),s.classList.add("active"),s.setAttribute("aria-pressed","true"),o.timeOfDay=s.dataset.tod,b(),p()})});const t=l.querySelector("#creator-normal-map");t&&t.addEventListener("change",()=>{o.normalMap=t.value,b(),p()}),l.querySelectorAll(".creator-feature-toggle").forEach(s=>{s.addEventListener("click",()=>{const d=s.dataset.feature;if(!o.features[d])return;o.features[d].enabled=!o.features[d].enabled;const m=o.features[d].enabled;s.classList.toggle("active",m),s.setAttribute("aria-pressed",String(m)),s.textContent=m?"On":"Off";const v=l.querySelector(`.creator-feature-params[data-feature-params="${d}"]`);v&&v.classList.toggle("hidden",!m),b(),p()})});const a=l.querySelector("#creator-add-volcano-btn");a&&a.addEventListener("click",()=>{if(o.features.volcanoes.length>=6){E("Maximum 6 volcanoes per island");return}o.features.volcanoes.push({x:0,z:0,height:4,radius:1.5,steepness:.7,crater:{radius:.8,depth:1.5},active:!1}),b(),z(),p()});const r=l.querySelector("#creator-add-cyclone-btn");r&&r.addEventListener("click",()=>{if(o.cyclones||(o.cyclones=[]),o.cyclones.length>=3){E("Maximum 3 cyclones per island");return}o.cyclones.push({interval:22,intervalVariance:7,initialDelay:5,lifetime:7.5,wanderSpeed:1.2,wanderRadius:6,spawnRadius:14,spawnDuration:2.4,despawnDuration:2.2,outerRadius:4.5,innerRadius:1.7,swirlStrength:36,liftStrength:67,visualHeight:9.5,density:2.5,curl:10}),b(),B(),p()});const c=l.querySelector("#creator-add-obstacle-btn");c&&c.addEventListener("click",Ae),l.querySelector("#creator-save-btn").addEventListener("click",j),l.querySelector("#creator-share-btn").addEventListener("click",Me),l.querySelector("#creator-exit-btn").addEventListener("click",()=>{C?Ie():P()});const i=l.querySelector(".creator-my-islands-toggle");i&&i.addEventListener("click",ee);const n=l.querySelector("#creator-new-island-btn");n&&n.addEventListener("click",()=>{C?De():R()}),L=s=>{o.terrainColorPreset=s.detail,b(),k(!0),F()},window.addEventListener("terrain-palette-applied",L),x=s=>{const d=s.target.tagName==="INPUT"||s.target.tagName==="TEXTAREA"||s.target.tagName==="SELECT";if((s.ctrlKey||s.metaKey)&&s.key==="z"){if(d)return;s.preventDefault(),s.shiftKey?I():Z();return}if((s.ctrlKey||s.metaKey)&&s.key==="y"){if(d)return;s.preventDefault(),I();return}if(d)return;if(s.key.toLowerCase()==="n"){const v=l?.querySelector("#creator-normal-map");if(!v)return;v.selectedIndex=(v.selectedIndex+1)%v.options.length,o.normalMap=v.value,b(),p()}else if(s.key==="["||s.key==="]"){const v=l?.querySelector("#cs-normalMapScale"),q=l?.querySelector("#csv-normalMapScale");if(!v)return;const J=parseInt(v.step)||1,ae=parseInt(v.min)||1,re=parseInt(v.max)||32,H=s.key==="]"?Math.min(o.normalMapScale+J,re):Math.max(o.normalMapScale-J,ae);o.normalMapScale=H,v.value=H,q&&(q.textContent=`${H}x`),b(),p()}},window.addEventListener("keydown",x)}function Te(e,t){const a=o.terrainShape,r=o.spawn;switch(e){case"size":a.size=t;break;case"islandRadius":a.islandRadius=t;break;case"scaleX":a.scaleX=t;break;case"scaleY":a.scaleY=t;break;case"tiltAngle":a.tilt={...a.tilt,angle:t};break;case"tiltAmount":a.tilt={...a.tilt,amount:t};break;case"bayAngle":a.bay={...a.bay,angle:t};break;case"bayDepth":a.bay={...a.bay,depth:t};break;case"bayWidth":a.bay={...a.bay,width:t};break;case"irregularity":a.irregularity=t;break;case"distortionFreq":a.distortion={...a.distortion,frequency:t};break;case"distortionAmp":a.distortion={...a.distortion,amplitude:t};break;case"distortionRand":a.distortion={...a.distortion,randomness:t};break;case"turbStrength":a.turbulence={...a.turbulence,strength:t};break;case"turbScale":a.turbulence={...a.turbulence,scale:t};break;case"turbOctaves":a.turbulence={...a.turbulence,octaves:t};break;case"winPercent":o.winPercentage=t/100;break;case"waterLevel":o.waterLevel=t;break;case"spawnInterval":r.interval=t;break;case"dropletsPerCloud":r.dropletsPerCloud=t;break;case"cloudDuration":r.cloudDuration=t;break;case"minRadius":r.minRadius=t;break;case"maxRadius":r.maxRadius=Math.max(t,r.minRadius+.01);break;case"cloudSpeed":r.cloudSpeed=t;break;case"normalMapScale":o.normalMapScale=t;break;case"calderaPosX":o.features.caldera.x=t;break;case"calderaPosZ":o.features.caldera.z=t;break;case"calderaRadius":o.features.caldera.radius=t;break;case"calderaDepth":o.features.caldera.depth=t;break;case"terraceCount":o.features.terraces.count=t;break;case"terraceHeight":o.features.terraces.height=t;break;case"terraceWidth":o.features.terraces.width=t;break;case"spiralTurns":o.features.spiral.turns=t;break;case"spiralWidth":o.features.spiral.width=t;break;case"spiralHeight":o.features.spiral.height=t;break;case"spiralCenterHeight":o.features.spiral.centerHeight=t;break}}function D(){const e=o.terrainShape,t=o.spawn,a=o.features??{},r={size:e.size??14,islandRadius:e.islandRadius??parseFloat(((e.size??14)*.365).toFixed(1)),scaleX:e.scaleX??1,scaleY:e.scaleY??1,tiltAngle:e.tilt?.angle??0,tiltAmount:e.tilt?.amount??0,bayAngle:e.bay?.angle??0,bayDepth:e.bay?.depth??0,bayWidth:e.bay?.width??0,irregularity:e.irregularity??1,distortionFreq:e.distortion?.frequency??0,distortionAmp:e.distortion?.amplitude??0,distortionRand:e.distortion?.randomness??0,turbStrength:e.turbulence?.strength??0,turbScale:e.turbulence?.scale??.13,turbOctaves:e.turbulence?.octaves??1,winPercent:Math.round((o.winPercentage??.35)*100),waterLevel:o.waterLevel??-1.747,spawnInterval:t?.interval??8e3,dropletsPerCloud:t?.dropletsPerCloud??16,cloudDuration:t?.cloudDuration??6e3,minRadius:t?.minRadius??.1,maxRadius:t?.maxRadius??.15,cloudSpeed:t?.cloudSpeed??2.45,normalMapScale:o.normalMapScale??2,calderaPosX:a.caldera?.x??0,calderaPosZ:a.caldera?.z??0,calderaRadius:a.caldera?.radius??2,calderaDepth:a.caldera?.depth??3,terraceCount:a.terraces?.count??3,terraceHeight:a.terraces?.height??2,terraceWidth:a.terraces?.width??1,spiralTurns:a.spiral?.turns??2,spiralWidth:a.spiral?.width??1,spiralHeight:a.spiral?.height??1.5,spiralCenterHeight:a.spiral?.centerHeight??0};for(const[n,s]of Object.entries(r)){const d=l.querySelector(`#cs-${n}`);d&&(d.value=s);const m=l.querySelector(`#csv-${n}`);if(m){const v=d?.dataset.unit||"",q=Number.isInteger(s)?s:parseFloat(Number(s).toFixed(3));m.textContent=`${q}${v}`}}l.querySelectorAll(".creator-feature-toggle").forEach(n=>{const s=n.dataset.feature,d=a[s]?.enabled??!1;n.classList.toggle("active",d),n.setAttribute("aria-pressed",String(d)),n.textContent=d?"On":"Off";const m=l.querySelector(`.creator-feature-params[data-feature-params="${s}"]`);m&&m.classList.toggle("hidden",!d)}),l.querySelectorAll(".creator-toggle[data-targets]").forEach(n=>{const s=parseInt(n.dataset.targets)===(o.multipleTargets||1);n.classList.toggle("active",s),n.setAttribute("aria-pressed",String(s))}),l.querySelectorAll(".creator-toggle[data-tod]").forEach(n=>{const s=n.dataset.tod===(o.timeOfDay||"day");n.classList.toggle("active",s),n.setAttribute("aria-pressed",String(s))});const c=l.querySelector("#creator-name");c&&(c.value=o.name||"My Island");const i=l.querySelector("#creator-normal-map");i&&(i.value=o.normalMap||"normal-maps/sand-normal.jpg"),z(),B(),_(),F()}function p(){k(!0),clearTimeout(K),K=setTimeout(()=>{ie({...o,id:ge})},300)}function Ae(){const e=l.querySelector("#creator-obstacle-picker");if(e){if(!e.classList.contains("hidden")){e.classList.add("hidden");return}e.innerHTML=N.map((t,a)=>`<button class="creator-obstacle-option" data-preset="${a}">${t.label}</button>`).join(""),e.classList.remove("hidden"),e.querySelectorAll(".creator-obstacle-option").forEach(t=>{t.addEventListener("click",()=>{_e(parseInt(t.dataset.preset)),e.classList.add("hidden")})})}}function _e(e){if(o.obstacles.length>=8){E("Maximum 8 obstacles per island");return}const t=N[e],a={type:"model",model:t.model,position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:t.scale,embedDepth:.5,kinetic:!1,physics:{...t.physics,mass:0,friction:.7,restitution:.2},...t.lighthouseBeam?{lighthouseBeam:!0}:{}};o.obstacles.push(a),b(),_(),p()}function _(){const e=l?.querySelector("#creator-obstacles-list");if(e){if(o.obstacles.length===0){e.innerHTML='<p class="creator-empty-msg">No obstacles placed yet.</p>';return}e.innerHTML=o.obstacles.map((t,a)=>{const r=N.find(i=>i.model===t.model)?.label||t.model,c=t.kinetic===!0;return`
      <div class="creator-obstacle-item" data-index="${a}">
        <div class="creator-obstacle-header">
          <span class="creator-obstacle-name">${r}</span>
          <button class="creator-obs-mode-toggle ${c?"kinetic":""}" data-index="${a}"
                  title="${c?"Kinetic — can roll":"Static — embedded in terrain"}">
            ${c?"Kinetic":"Static"}
          </button>
          <button class="creator-obstacle-remove" data-index="${a}" aria-label="Remove">✕</button>
        </div>
        <div class="creator-obstacle-controls">
          ${w(a,"posX","Pos X",-8,8,.5,t.position.x)}
          ${w(a,"posZ","Pos Z",-8,8,.5,t.position.z)}
          ${w(a,"rotY","Rotate",0,360,5,(t.rotation?.y??0)*(180/Math.PI))}
          ${w(a,"scale","Scale",.2,5,.1,t.scale??1)}
          ${w(a,"embed","Embed",0,2,.1,t.embedDepth??.5)}
        </div>
      </div>`}).join(""),e.querySelectorAll(".creator-obstacle-remove").forEach(t=>{t.addEventListener("click",()=>{o.obstacles.splice(parseInt(t.dataset.index),1),b(),_(),p()})}),e.querySelectorAll(".creator-obs-mode-toggle").forEach(t=>{t.addEventListener("click",()=>{const a=parseInt(t.dataset.index),r=o.obstacles[a];r&&(r.kinetic=!r.kinetic,r.physics.mass=r.kinetic?50:0,b(),_(),p())})}),e.querySelectorAll(".creator-obs-slider").forEach(t=>{t.addEventListener("change",b),t.addEventListener("input",()=>{const a=parseInt(t.dataset.index),r=t.dataset.key,c=parseFloat(t.value),i=o.obstacles[a];if(!i)return;const n=l.querySelector(`#obsv-${a}-${r}`);n&&(n.textContent=c.toFixed(2)),r==="posX"?i.position.x=c:r==="posZ"?i.position.z=c:r==="rotY"?i.rotation={...i.rotation||{},y:c*(Math.PI/180)}:r==="scale"?i.scale=c:r==="embed"&&(i.embedDepth=c),p()})})}}function w(e,t,a,r,c,i,n){const s=parseFloat(Number(n).toFixed(2));return`
    <div class="creator-obs-row">
      <label class="creator-obs-label">${a}</label>
      <input class="creator-obs-slider" type="range" min="${r}" max="${c}" step="${i}" value="${n}"
             data-index="${e}" data-key="${t}" />
      <span class="creator-obs-val" id="obsv-${e}-${t}">${s}</span>
    </div>`}function z(){const e=l?.querySelector("#creator-volcanoes-list");if(!e)return;const t=o.features?.volcanoes??[];if(t.length===0){e.innerHTML='<p class="creator-empty-msg">No volcanoes placed.</p>';return}e.innerHTML=t.map((a,r)=>{const c=a.active===!0;return`
    <div class="creator-obstacle-item" data-vol-index="${r}">
      <div class="creator-obstacle-header">
        <span class="creator-obstacle-name">Volcano ${r+1}</span>
        <button class="creator-obs-mode-toggle ${c?"kinetic":""}" data-vol-index="${r}" data-action="active"
                title="${c?"Active — has lava":"Dormant"}">
          ${c?"Active":"Dormant"}
        </button>
        <button class="creator-vol-remove" data-vol-index="${r}" aria-label="Remove">✕</button>
      </div>
      <div class="creator-obstacle-controls">
        ${f(r,"x","Pos X",-8,8,.5,a.x??0)}
        ${f(r,"z","Pos Z",-8,8,.5,a.z??0)}
        ${f(r,"height","Height",1,10,.5,a.height??4)}
        ${f(r,"radius","Radius",.5,5,.1,a.radius??1.5)}
        ${f(r,"steepness","Steepness",.1,1,.05,a.steepness??.7)}
        ${f(r,"craterRadius","Crater Size",.1,2,.1,a.crater?.radius??.8)}
        ${f(r,"craterDepth","Crater Depth",.1,3,.1,a.crater?.depth??1.5)}
      </div>
    </div>`}).join(""),e.querySelectorAll(".creator-vol-remove").forEach(a=>{a.addEventListener("click",()=>{o.features.volcanoes.splice(parseInt(a.dataset.volIndex),1),b(),z(),p()})}),e.querySelectorAll('[data-action="active"]').forEach(a=>{a.addEventListener("click",()=>{const r=o.features.volcanoes[parseInt(a.dataset.volIndex)];r&&(r.active=!r.active,a.classList.toggle("kinetic",r.active),a.textContent=r.active?"Active":"Dormant",a.title=r.active?"Active — has lava":"Dormant",b(),p())})}),e.querySelectorAll(".creator-vol-slider").forEach(a=>{a.addEventListener("change",b),a.addEventListener("input",()=>{const r=parseInt(a.dataset.index),c=a.dataset.key,i=parseFloat(a.value),n=o.features.volcanoes[r];if(!n)return;const s=l.querySelector(`#volv-${r}-${c}`);s&&(s.textContent=i.toFixed(2)),c==="craterRadius"?n.crater&&(n.crater.radius=i):c==="craterDepth"?n.crater&&(n.crater.depth=i):n[c]=i,p()})})}function B(){const e=l?.querySelector("#creator-cyclones-list");if(!e)return;const t=o.cyclones??[];if(t.length===0){e.innerHTML='<p class="creator-empty-msg">No cyclones placed.</p>';return}e.innerHTML=t.map((a,r)=>`
    <div class="creator-obstacle-item" data-cyc-index="${r}">
      <div class="creator-obstacle-header">
        <span class="creator-obstacle-name">Cyclone ${r+1}</span>
        <button class="creator-cyc-remove" data-cyc-index="${r}" aria-label="Remove">✕</button>
      </div>
      <div class="creator-obstacle-controls">
        ${g(r,"initialDelay","Delay",0,30,1,a.initialDelay??5)}
        ${g(r,"interval","Interval",5,60,1,a.interval??22)}
        ${g(r,"lifetime","Lifetime",2,30,.5,a.lifetime??7.5)}
        ${g(r,"wanderSpeed","Wander Speed",.3,5,.1,a.wanderSpeed??1.2)}
        ${g(r,"wanderRadius","Wander Radius",2,14,.5,a.wanderRadius??6)}
        ${g(r,"swirlStrength","Swirl",0,100,1,a.swirlStrength??36)}
        ${g(r,"liftStrength","Lift",0,150,1,a.liftStrength??67)}
      </div>
    </div>`).join(""),e.querySelectorAll(".creator-cyc-remove").forEach(a=>{a.addEventListener("click",()=>{o.cyclones.splice(parseInt(a.dataset.cycIndex),1),b(),B(),p()})}),e.querySelectorAll(".creator-cyc-slider").forEach(a=>{a.addEventListener("change",b),a.addEventListener("input",()=>{const r=parseInt(a.dataset.index),c=a.dataset.key,i=parseFloat(a.value),n=o.cyclones[r];if(!n)return;const s=l.querySelector(`#cycv-${r}-${c}`);s&&(s.textContent=i.toFixed(Number.isInteger(i)?0:1)),n[c]=i,p()})})}function g(e,t,a,r,c,i,n){const s=parseFloat(Number(n).toFixed(1));return`
    <div class="creator-obs-row">
      <label class="creator-obs-label">${a}</label>
      <input class="creator-slider creator-obs-slider creator-cyc-slider" type="range" min="${r}" max="${c}" step="${i}" value="${n}"
             data-index="${e}" data-key="${t}" />
      <span class="creator-obs-val" id="cycv-${e}-${t}">${s}</span>
    </div>`}function f(e,t,a,r,c,i,n){const s=parseFloat(Number(n).toFixed(2));return`
    <div class="creator-obs-row">
      <label class="creator-obs-label">${a}</label>
      <input class="creator-slider creator-obs-slider creator-vol-slider" type="range" min="${r}" max="${c}" step="${i}" value="${n}"
             data-index="${e}" data-key="${t}" />
      <span class="creator-obs-val" id="volv-${e}-${t}">${s}</span>
    </div>`}async function j(){const e=l.querySelector("#creator-save-btn");if(e){e.disabled=!0,e.innerHTML='<span class="material-icons">hourglass_empty</span> Saving…';try{const t={...o,id:void 0},a=await pe(t,S);S=a.id,$=a.share_id;const r=l.querySelector("#creator-share-btn");r&&(r.disabled=!1),k(!1),A=new Date,W();const c=document.getElementById("level-name");c&&(c.textContent=o.name||"My Island"),O("Island saved!")}catch{E("Save failed — please try again")}finally{e.disabled=!1,e.innerHTML='<span class="material-icons">save</span> Save'}}}function Me(){if(!$)return;const e=`${window.location.origin}${window.location.pathname}?island=${$}`;navigator.clipboard.writeText(e).then(()=>{O("Share link copied to clipboard!")}).catch(()=>{prompt("Copy this link to share your island:",e)})}async function ee(){T=!T;const e=l.querySelector(".creator-my-islands-list"),t=l.querySelector(".creator-chevron");if(e)if(T){e.classList.remove("hidden"),t&&(t.textContent="expand_less"),e.innerHTML=V;const a=await be();if(a.length===0){e.innerHTML='<p class="creator-empty-msg">No saved islands yet.</p>';return}e.innerHTML=a.map(r=>`
      <div class="creator-saved-item">
        <div class="creator-saved-info">
          <span class="creator-saved-name">${Y(r.name)}</span>
          <span class="creator-saved-date">${te(r.updated_at)}</span>
        </div>
        <div class="creator-saved-actions">
          <button class="creator-saved-edit" data-id="${r.id}" data-share="${r.share_id}" title="Edit">
            <span class="material-icons">edit</span>
          </button>
          <button class="creator-saved-delete" data-id="${r.id}" title="Delete">
            <span class="material-icons">delete</span>
          </button>
        </div>
      </div>
    `).join(""),e.querySelectorAll(".creator-saved-edit").forEach(r=>{r.addEventListener("click",async()=>{const c=r.closest(".creator-saved-actions"),i=c.innerHTML;c.innerHTML=V;const{loadIslandByShareId:n}=await se(async()=>{const{loadIslandByShareId:d}=await import("./creatorSystem-BAPWvnhG.js");return{loadIslandByShareId:d}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])),s=await n(r.dataset.share);s?(X(),$e(s,r.dataset.id,r.dataset.share)):(c.innerHTML=i,E("Could not load island — please try again"),T=!0,ee())})}),e.querySelectorAll(".creator-saved-delete").forEach(r=>{const c=r.closest(".creator-saved-item")?.querySelector(".creator-saved-name")?.textContent||"this island";r.addEventListener("click",()=>{He(c,async()=>{if(await ve(r.dataset.id),r.closest(".creator-saved-item").remove(),S===r.dataset.id){S=null,$=null;const i=l?.querySelector("#creator-share-btn");i&&(i.disabled=!0)}O("Island deleted")})})})}else e.classList.add("hidden"),t&&(t.textContent="expand_more")}function W(){const e=l?.querySelector("#creator-last-saved");if(!e)return;if(!S){e.textContent="";return}const t=A?`Saved ${te(A.toISOString())}`:"Saved";e.textContent=t}function R(){S=null,$=null,A=null,o=G();const e=l?.querySelector("#creator-share-btn");e&&(e.disabled=!0),k(!0),W(),D(),p()}function De(){const e=document.createElement("div");e.className="creator-save-prompt-overlay",e.innerHTML=`
    <div class="creator-save-prompt">
      <div class="creator-save-prompt-title">Start a new island?</div>
      <div class="creator-save-prompt-body">Your current island has unsaved changes.</div>
      <div class="creator-save-prompt-actions">
        <button class="creator-btn creator-btn-primary" id="cnp-save">Save &amp; New</button>
        <button class="creator-btn creator-btn-ghost" id="cnp-discard">Discard &amp; New</button>
        <button class="creator-btn creator-btn-ghost" id="cnp-cancel">Cancel</button>
      </div>
    </div>`,document.body.appendChild(e),requestAnimationFrame(()=>e.classList.add("visible"));const t=()=>{e.classList.remove("visible"),setTimeout(()=>e.remove(),250)};e.querySelector("#cnp-save").addEventListener("click",async()=>{t(),await j(),R()}),e.querySelector("#cnp-discard").addEventListener("click",()=>{t(),R()}),e.querySelector("#cnp-cancel").addEventListener("click",t)}function He(e,t){const a=document.createElement("div");a.className="creator-save-prompt-overlay",a.innerHTML=`
    <div class="creator-save-prompt">
      <div class="creator-save-prompt-title">Delete island?</div>
      <div class="creator-save-prompt-body">"${Y(e)}" will be permanently deleted and cannot be recovered.</div>
      <div class="creator-save-prompt-actions">
        <button class="creator-btn creator-btn-primary" id="cdp-confirm">Delete</button>
        <button class="creator-btn creator-btn-ghost" id="cdp-cancel">Cancel</button>
      </div>
    </div>`,document.body.appendChild(a),requestAnimationFrame(()=>a.classList.add("visible"));const r=()=>{a.classList.remove("visible"),setTimeout(()=>a.remove(),250)};a.querySelector("#cdp-confirm").addEventListener("click",()=>{r(),t()}),a.querySelector("#cdp-cancel").addEventListener("click",r)}function Ie(){const e=document.createElement("div");e.className="creator-save-prompt-overlay",e.innerHTML=`
    <div class="creator-save-prompt">
      <div class="creator-save-prompt-title">Save before playing?</div>
      <div class="creator-save-prompt-body">Your island has unsaved changes — they'll be lost if something goes wrong.</div>
      <div class="creator-save-prompt-actions">
        <button class="creator-btn creator-btn-primary" id="csp-save">Save &amp; Play</button>
        <button class="creator-btn creator-btn-ghost" id="csp-play">Play Anyway</button>
        <button class="creator-btn creator-btn-ghost" id="csp-cancel">Cancel</button>
      </div>
    </div>`,document.body.appendChild(e),requestAnimationFrame(()=>e.classList.add("visible"));const t=()=>{e.classList.remove("visible"),setTimeout(()=>e.remove(),250)};e.querySelector("#csp-save").addEventListener("click",async()=>{t(),await j(),P()}),e.querySelector("#csp-play").addEventListener("click",()=>{t(),P()}),e.querySelector("#csp-cancel").addEventListener("click",t)}function Pe(){l&&(l.style.display="flex",requestAnimationFrame(()=>l.classList.add("visible")),window.dispatchEvent(new CustomEvent("creator-panel-state",{detail:{open:!0}})))}function X(){x&&(window.removeEventListener("keydown",x),x=null),L&&(window.removeEventListener("terrain-palette-applied",L),L=null),l&&(l.classList.remove("visible"),setTimeout(()=>{l&&(l.remove(),l=null)},350))}function Y(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function te(e){if(!e)return"";const t=new Date(e),r=new Date-t,c=Math.floor(r/864e5);return c===0?"today":c===1?"yesterday":c<7?`${c}d ago`:c<365?t.toLocaleDateString(void 0,{month:"short",day:"numeric"}):t.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}export{P as closeCreatorMode,rt as dismissCreatorPanel,$e as openCreatorMode,st as reopenCreatorPanel};
