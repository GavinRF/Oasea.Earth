const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/creatorSystem-3D-XjEpF.js","assets/levelManager-CS-Phbuh.js","assets/supabase-qp4a7gwM.js","assets/toast-DFQg6cek.js","assets/audioManager-CCjicHO6.js","assets/three-D8n9J4sM.js","assets/physics-CKC5f6tm.js","assets/physicsQueue-XOQprDaT.js"])))=>i.map(i=>d[i]);
import{_ as te}from"./supabase-qp4a7gwM.js";import{s as K,a as ae,S as re,r as se,b as oe,c as le,e as ce}from"./main-Z7xiHB8j.js";import{sanitizeName as ne,saveIsland as ie,getMyIslands as de,deleteIsland as ue,deleteColorPreset as pe,saveColorPreset as be,getColorPresets as ve}from"./creatorSystem-3D-XjEpF.js";import{showError as q,showSuccess as I}from"./toast-DFQg6cek.js";import"./three-D8n9J4sM.js";import"./physics-CKC5f6tm.js";import"./levelManager-CS-Phbuh.js";import"./audioManager-CCjicHO6.js";import"./physicsQueue-XOQprDaT.js";import"./inputHandler-jhZZwAwY.js";import"./networkClient-Bpayhc9L.js";import"./messageProtocol-BMEmlWkN.js";import"./lava-DnvQknEQ.js";const me=-99,he=[{label:"Sand",value:"normal-maps/sand-normal.jpg"},{label:"Rough Pebble",value:"normal-maps/rough-pebble-normal.jpg"},{label:"Pebble Beach",value:"normal-maps/pebble-beach-normal.jpg"},{label:"Slate",value:"normal-maps/slate-normal.jpg"},{label:"Layers",value:"normal-maps/layers-normal.jpg"},{label:"Crack Rock",value:"normal-maps/crack-rock-normal.jpg"},{label:"Swirl Sand",value:"normal-maps/swirl-sand-normal.jpg"},{label:"Weathered Stone",value:"normal-maps/weathered-stone-normal.jpg"},{label:"Pinch",value:"normal-maps/pinch-normal.jpg"}],H=[{label:"Boulder (Small)",model:"boulder-sm-1n.glb",physics:{type:"convexHull"},scale:.6},{label:"Boulder (Small 2)",model:"boulder-sm-2n.glb",physics:{type:"convexHull"},scale:.6},{label:"Boulder (Tall)",model:"boulder-tall-n.glb",physics:{type:"convexHull"},scale:1},{label:"Boulder (Flat)",model:"boulder-flat-bottom.glb",physics:{type:"convexHull"},scale:1},{label:"Basalt Clump",model:"basalt-clump-1.glb",physics:{type:"convexHull"},scale:1.2},{label:"Anchor",model:"anchor.glb",physics:{type:"convexHull"},scale:1},{label:"Lighthouse",model:"lighthouse.glb",physics:{type:"cylinder",height:4,radiusTop:.4},scale:1,lighthouseBeam:!0},{label:"Moai (Tall)",model:"moai/moai-tall-stone.glb",physics:{type:"convexHull"},scale:1},{label:"Moai Head",model:"moai/moai-head-stone.glb",physics:{type:"convexHull"},scale:1},{label:"Chest",model:"chest.glb",physics:{type:"box",halfExtents:{x:.5,y:.35,z:.35}},scale:1}];function Z(){return{name:"My Island",terrainShape:{size:14,islandRadius:5.1,scaleX:1,scaleY:1,tilt:{angle:0,amount:0},bay:{angle:0,depth:0,width:0},irregularity:1,distortion:{frequency:0,amplitude:0,randomness:0},turbulence:{strength:0,scale:.13,octaves:1}},waterLevel:-1.747,winPercentage:.35,spawn:{enabled:!0,interval:8e3,cloudDuration:6e3,dropletsPerCloud:16,dropletInterval:400,minRadius:.1,maxRadius:.15,spawnHeight:10.2,cloudSpeed:2.45,fadeInDuration:2800,fadeOutDuration:2800},obstacles:[],features:{caldera:{enabled:!1,x:0,z:0,radius:2,depth:3},volcanoes:[],terraces:{enabled:!1,count:3,height:2,width:1},spiral:{enabled:!1,turns:2,width:1,height:1.5,centerHeight:0}},multipleTargets:1,timeOfDay:"day",normalMap:"normal-maps/sand-normal.jpg",normalMapScale:2,terrainColorPreset:null}}let l=null,o=null,f=null,g=null,W=null,x=!1,L=!0,E=null,$=null,w=null;const ye=50;let m=[],h=-1;function b(){m=m.slice(0,h+1),m.push(JSON.parse(JSON.stringify(o))),m.length>ye&&m.shift(),h=m.length-1,T()}function Y(){h<=0||(h--,o=JSON.parse(JSON.stringify(m[h])),_(),p(),S(!0),T())}function M(){h>=m.length-1||(h++,o=JSON.parse(JSON.stringify(m[h])),_(),p(),S(!0),T())}function T(){const t=l?.querySelector("#creator-undo-btn"),e=l?.querySelector("#creator-redo-btn");t&&(t.disabled=h<=0),e&&(e.disabled=h>=m.length-1)}const J=`
  <div class="stats-loading-animation creator-drops-loader">
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="collection"></div>
  </div>`;function S(t){L=t;const e=l?.querySelector("#creator-save-btn");e&&e.classList.toggle("creator-save-btn--dirty",t)}function fe(t=null,e=null,a=null){o=t?JSON.parse(JSON.stringify(t)):Z(),f=e,g=a,L=!e,m=[JSON.parse(JSON.stringify(o))],h=0,K(o,V)}function V(){ge(),De(),S(L),z(),o.terrainColorPreset&&ae(o.terrainColorPreset),R()}function D(){F(),ce(),window.dispatchEvent(new CustomEvent("creator-panel-state",{detail:{open:!1}}))}function Je(){F(),window.dispatchEvent(new CustomEvent("creator-panel-state",{detail:{open:!1}}))}function Ke(){K(o,V)}function ge(){l&&(l.remove(),l=null),l=document.createElement("div"),l.id="island-creator-panel",l.setAttribute("role","complementary"),l.setAttribute("aria-label","Island Creator"),l.innerHTML=`
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
  `,document.body.appendChild(l),xe(),_(),T()}function Se(){return`<div class="creator-tab-content hidden" data-tab="shape" id="creator-panel-shape" role="tabpanel" aria-labelledby="creator-tab-shape">
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
  </div>`}function ke(){const t=o.features??{},e=(i,s)=>{const n=t[i]?.enabled??!1;return`
    <div class="creator-section-label">${s}</div>
    <div class="creator-row">
      <button class="creator-toggle creator-feature-toggle ${n?"active":""}"
              data-feature="${i}" aria-pressed="${n}">${n?"On":"Off"}</button>
    </div>
    <div class="creator-feature-params ${n?"":"hidden"}" data-feature-params="${i}">`},a=t.caldera??{},r=t.terraces??{},c=t.spiral??{};return`<div class="creator-tab-content hidden" data-tab="features" id="creator-panel-features" role="tabpanel" aria-labelledby="creator-tab-features">
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
      ${d("terraceCount","Steps",2,8,1,r.count??3)}
      ${d("terraceHeight","Step Height",.5,4,.1,r.height??2)}
      ${d("terraceWidth","Sharpness",0,1,.05,r.width??1)}
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
  </div>`}function R(){const t=l?.querySelector("#creator-color-preset-display");if(!t)return;const e=o.terrainColorPreset;if(!e)t.innerHTML=`
      <div class="creator-row creator-preset-empty-row">
        <span class="creator-label" style="color:rgba(255,255,255,0.4);font-style:italic">None</span>
        <button class="creator-btn creator-btn-secondary creator-open-preset-btn" style="padding:4px 12px;font-size:12px">
          <span class="material-icons" style="font-size:14px;vertical-align:middle">palette</span> Choose
        </button>
      </div>`;else{const a=re.map(r=>{const c=e.colors?.[r]||[0,0,0];return`<span style="flex:1;background:${se(c)}"></span>`}).join("");t.innerHTML=`
      <div class="creator-color-preset-card">
        <div class="creator-preset-swatch-strip">${a}</div>
        <div class="creator-preset-meta">
          <span class="creator-preset-meta-name">${B(e.name)}</span>
          <button class="creator-btn creator-btn-ghost creator-open-preset-btn" title="Edit in Color Tester" style="padding:3px 8px;font-size:11px">
            <span class="material-icons" style="font-size:14px;vertical-align:middle">edit</span>
          </button>
        </div>
      </div>`}t.querySelector(".creator-open-preset-btn")?.addEventListener("click",Le)}function Le(){oe({loadPresets:()=>ve(),savePreset:(t,e)=>be(t,e),deletePreset:t=>pe(t)})}function d(t,e,a,r,c,i,s=""){return`
    <div class="creator-row creator-slider-row">
      <div class="creator-slider-header">
        <label class="creator-label" for="cs-${t}">${e}</label>
        <span class="creator-slider-value" id="csv-${t}">${i}${s}</span>
      </div>
      <input id="cs-${t}" class="creator-slider" type="range"
             min="${a}" max="${r}" step="${c}" value="${i}"
             data-unit="${s}" />
    </div>`}function xe(){l.querySelector("#creator-undo-btn").addEventListener("click",Y),l.querySelector("#creator-redo-btn").addEventListener("click",M),l.querySelector(".creator-collapse-btn").addEventListener("click",()=>{l.classList.toggle("collapsed");const s=l.querySelector(".creator-collapse-btn"),n=l.classList.contains("collapsed");s.textContent=n?"▶":"◀",s.setAttribute("aria-expanded",String(!n)),s.setAttribute("aria-label",n?"Expand panel":"Collapse panel")}),l.querySelectorAll(".creator-tab").forEach(s=>{s.addEventListener("click",()=>{l.querySelectorAll(".creator-tab").forEach(n=>{n.classList.remove("active"),n.setAttribute("aria-selected","false")}),l.querySelectorAll(".creator-tab-content").forEach(n=>n.classList.remove("active")),s.classList.add("active"),s.setAttribute("aria-selected","true"),l.querySelector(`.creator-tab-content[data-tab="${s.dataset.tab}"]`).classList.add("active")})}),l.querySelectorAll(".creator-slider").forEach(s=>{s.addEventListener("pointerdown",b),s.addEventListener("input",()=>{const n=parseFloat(s.value),v=s.dataset.unit||"",u=Number.isInteger(n)?n:parseFloat(n.toFixed(3));l.querySelector(`#csv-${s.id.replace("cs-","")}`).textContent=`${u}${v}`,Ee(s.id.replace("cs-",""),n),p()})});const t=l.querySelector("#creator-name");t&&t.addEventListener("input",()=>{const s=ne(t.value);o.name=s,t.value!==s&&(t.value=s)}),l.querySelectorAll(".creator-toggle[data-targets]").forEach(s=>{s.addEventListener("click",()=>{b(),l.querySelectorAll(".creator-toggle[data-targets]").forEach(n=>{n.classList.remove("active"),n.setAttribute("aria-pressed","false")}),s.classList.add("active"),s.setAttribute("aria-pressed","true"),o.multipleTargets=parseInt(s.dataset.targets),p()})}),l.querySelectorAll(".creator-toggle[data-tod]").forEach(s=>{s.addEventListener("click",()=>{b(),l.querySelectorAll(".creator-toggle[data-tod]").forEach(n=>{n.classList.remove("active"),n.setAttribute("aria-pressed","false")}),s.classList.add("active"),s.setAttribute("aria-pressed","true"),o.timeOfDay=s.dataset.tod,p()})});const e=l.querySelector("#creator-normal-map");e&&e.addEventListener("change",()=>{b(),o.normalMap=e.value,p()}),l.querySelectorAll(".creator-feature-toggle").forEach(s=>{s.addEventListener("click",()=>{const n=s.dataset.feature;if(!o.features[n])return;b(),o.features[n].enabled=!o.features[n].enabled;const v=o.features[n].enabled;s.classList.toggle("active",v),s.setAttribute("aria-pressed",String(v)),s.textContent=v?"On":"Off";const u=l.querySelector(`.creator-feature-params[data-feature-params="${n}"]`);u&&u.classList.toggle("hidden",!v),p()})});const a=l.querySelector("#creator-add-volcano-btn");a&&a.addEventListener("click",()=>{if(o.features.volcanoes.length>=6){q("Maximum 6 volcanoes per island");return}b(),o.features.volcanoes.push({x:0,z:0,height:4,radius:1.5,steepness:.7,crater:{radius:.8,depth:1.5},active:!1}),O(),p()});const r=l.querySelector("#creator-add-obstacle-btn");r&&r.addEventListener("click",Ce),l.querySelector("#creator-save-btn").addEventListener("click",N),l.querySelector("#creator-share-btn").addEventListener("click",Te),l.querySelector("#creator-exit-btn").addEventListener("click",()=>{L?Me():D()});const c=l.querySelector(".creator-my-islands-toggle");c&&c.addEventListener("click",U);const i=l.querySelector("#creator-new-island-btn");i&&i.addEventListener("click",()=>{L?_e():P()}),w=s=>{b(),o.terrainColorPreset=s.detail,S(!0),R()},window.addEventListener("terrain-palette-applied",w),$=s=>{const n=s.target.tagName==="INPUT"||s.target.tagName==="TEXTAREA"||s.target.tagName==="SELECT";if((s.ctrlKey||s.metaKey)&&s.key==="z"){if(n)return;s.preventDefault(),s.shiftKey?M():Y();return}if((s.ctrlKey||s.metaKey)&&s.key==="y"){if(n)return;s.preventDefault(),M();return}if(n)return;if(s.key.toLowerCase()==="n"){const u=l?.querySelector("#creator-normal-map");if(!u)return;b(),u.selectedIndex=(u.selectedIndex+1)%u.options.length,o.normalMap=u.value,p()}else if(s.key==="["||s.key==="]"){const u=l?.querySelector("#cs-normalMapScale"),j=l?.querySelector("#csv-normalMapScale");if(!u)return;b();const X=parseInt(u.step)||1,Q=parseInt(u.min)||1,ee=parseInt(u.max)||32,A=s.key==="]"?Math.min(o.normalMapScale+X,ee):Math.max(o.normalMapScale-X,Q);o.normalMapScale=A,u.value=A,j&&(j.textContent=`${A}x`),p()}},window.addEventListener("keydown",$)}function Ee(t,e){const a=o.terrainShape,r=o.spawn;switch(t){case"size":a.size=e;break;case"islandRadius":a.islandRadius=e;break;case"scaleX":a.scaleX=e;break;case"scaleY":a.scaleY=e;break;case"tiltAngle":a.tilt={...a.tilt,angle:e};break;case"tiltAmount":a.tilt={...a.tilt,amount:e};break;case"bayAngle":a.bay={...a.bay,angle:e};break;case"bayDepth":a.bay={...a.bay,depth:e};break;case"bayWidth":a.bay={...a.bay,width:e};break;case"irregularity":a.irregularity=e;break;case"distortionFreq":a.distortion={...a.distortion,frequency:e};break;case"distortionAmp":a.distortion={...a.distortion,amplitude:e};break;case"distortionRand":a.distortion={...a.distortion,randomness:e};break;case"turbStrength":a.turbulence={...a.turbulence,strength:e};break;case"turbScale":a.turbulence={...a.turbulence,scale:e};break;case"turbOctaves":a.turbulence={...a.turbulence,octaves:e};break;case"winPercent":o.winPercentage=e/100;break;case"waterLevel":o.waterLevel=e;break;case"spawnInterval":r.interval=e;break;case"dropletsPerCloud":r.dropletsPerCloud=e;break;case"cloudDuration":r.cloudDuration=e;break;case"minRadius":r.minRadius=e;break;case"maxRadius":r.maxRadius=Math.max(e,r.minRadius+.01);break;case"cloudSpeed":r.cloudSpeed=e;break;case"normalMapScale":o.normalMapScale=e;break;case"calderaPosX":o.features.caldera.x=e;break;case"calderaPosZ":o.features.caldera.z=e;break;case"calderaRadius":o.features.caldera.radius=e;break;case"calderaDepth":o.features.caldera.depth=e;break;case"terraceCount":o.features.terraces.count=e;break;case"terraceHeight":o.features.terraces.height=e;break;case"terraceWidth":o.features.terraces.width=e;break;case"spiralTurns":o.features.spiral.turns=e;break;case"spiralWidth":o.features.spiral.width=e;break;case"spiralHeight":o.features.spiral.height=e;break;case"spiralCenterHeight":o.features.spiral.centerHeight=e;break}}function _(){const t=o.terrainShape,e=o.spawn,a=o.features??{},r={size:t.size??14,islandRadius:t.islandRadius??parseFloat(((t.size??14)*.365).toFixed(1)),scaleX:t.scaleX??1,scaleY:t.scaleY??1,tiltAngle:t.tilt?.angle??0,tiltAmount:t.tilt?.amount??0,bayAngle:t.bay?.angle??0,bayDepth:t.bay?.depth??0,bayWidth:t.bay?.width??0,irregularity:t.irregularity??1,distortionFreq:t.distortion?.frequency??0,distortionAmp:t.distortion?.amplitude??0,distortionRand:t.distortion?.randomness??0,turbStrength:t.turbulence?.strength??0,turbScale:t.turbulence?.scale??.13,turbOctaves:t.turbulence?.octaves??1,winPercent:Math.round((o.winPercentage??.35)*100),waterLevel:o.waterLevel??-1.747,spawnInterval:e?.interval??8e3,dropletsPerCloud:e?.dropletsPerCloud??16,cloudDuration:e?.cloudDuration??6e3,minRadius:e?.minRadius??.1,maxRadius:e?.maxRadius??.15,cloudSpeed:e?.cloudSpeed??2.45,normalMapScale:o.normalMapScale??2,calderaPosX:a.caldera?.x??0,calderaPosZ:a.caldera?.z??0,calderaRadius:a.caldera?.radius??2,calderaDepth:a.caldera?.depth??3,terraceCount:a.terraces?.count??3,terraceHeight:a.terraces?.height??2,terraceWidth:a.terraces?.width??1,spiralTurns:a.spiral?.turns??2,spiralWidth:a.spiral?.width??1,spiralHeight:a.spiral?.height??1.5,spiralCenterHeight:a.spiral?.centerHeight??0};for(const[c,i]of Object.entries(r)){const s=l.querySelector(`#cs-${c}`);s&&(s.value=i);const n=l.querySelector(`#csv-${c}`);if(n){const v=s?.dataset.unit||"",u=Number.isInteger(i)?i:parseFloat(Number(i).toFixed(3));n.textContent=`${u}${v}`}}l.querySelectorAll(".creator-feature-toggle").forEach(c=>{const i=c.dataset.feature,s=a[i]?.enabled??!1;c.classList.toggle("active",s),c.setAttribute("aria-pressed",String(s)),c.textContent=s?"On":"Off";const n=l.querySelector(`.creator-feature-params[data-feature-params="${i}"]`);n&&n.classList.toggle("hidden",!s)}),O(),C(),R()}function p(){S(!0),clearTimeout(W),W=setTimeout(()=>{le({...o,id:me})},300)}function Ce(){const t=l.querySelector("#creator-obstacle-picker");if(t){if(!t.classList.contains("hidden")){t.classList.add("hidden");return}t.innerHTML=H.map((e,a)=>`<button class="creator-obstacle-option" data-preset="${a}">${e.label}</button>`).join(""),t.classList.remove("hidden"),t.querySelectorAll(".creator-obstacle-option").forEach(e=>{e.addEventListener("click",()=>{qe(parseInt(e.dataset.preset)),t.classList.add("hidden")})})}}function qe(t){if(o.obstacles.length>=8){q("Maximum 8 obstacles per island");return}b();const e=H[t],a={type:"model",model:e.model,position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:e.scale,embedDepth:.5,kinetic:!1,physics:{...e.physics,mass:0,friction:.7,restitution:.2},...e.lighthouseBeam?{lighthouseBeam:!0}:{}};o.obstacles.push(a),C(),p()}function C(){const t=l?.querySelector("#creator-obstacles-list");if(t){if(o.obstacles.length===0){t.innerHTML='<p class="creator-empty-msg">No obstacles placed yet.</p>';return}t.innerHTML=o.obstacles.map((e,a)=>{const r=H.find(i=>i.model===e.model)?.label||e.model,c=e.kinetic===!0;return`
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
          ${k(a,"posX","Pos X",-8,8,.5,e.position.x)}
          ${k(a,"posZ","Pos Z",-8,8,.5,e.position.z)}
          ${k(a,"rotY","Rotate",0,360,5,(e.rotation?.y??0)*(180/Math.PI))}
          ${k(a,"scale","Scale",.2,5,.1,e.scale??1)}
          ${k(a,"embed","Embed",0,2,.1,e.embedDepth??.5)}
        </div>
      </div>`}).join(""),t.querySelectorAll(".creator-obstacle-remove").forEach(e=>{e.addEventListener("click",()=>{b(),o.obstacles.splice(parseInt(e.dataset.index),1),C(),p()})}),t.querySelectorAll(".creator-obs-mode-toggle").forEach(e=>{e.addEventListener("click",()=>{const a=parseInt(e.dataset.index),r=o.obstacles[a];r&&(b(),r.kinetic=!r.kinetic,r.physics.mass=r.kinetic?50:0,C(),p())})}),t.querySelectorAll(".creator-obs-slider").forEach(e=>{e.addEventListener("pointerdown",b),e.addEventListener("input",()=>{const a=parseInt(e.dataset.index),r=e.dataset.key,c=parseFloat(e.value),i=o.obstacles[a];if(!i)return;const s=l.querySelector(`#obsv-${a}-${r}`);s&&(s.textContent=c.toFixed(2)),r==="posX"?i.position.x=c:r==="posZ"?i.position.z=c:r==="rotY"?i.rotation={...i.rotation||{},y:c*(Math.PI/180)}:r==="scale"?i.scale=c:r==="embed"&&(i.embedDepth=c),p()})})}}function k(t,e,a,r,c,i,s){const n=parseFloat(Number(s).toFixed(2));return`
    <div class="creator-obs-row">
      <label class="creator-obs-label">${a}</label>
      <input class="creator-obs-slider" type="range" min="${r}" max="${c}" step="${i}" value="${s}"
             data-index="${t}" data-key="${e}" />
      <span class="creator-obs-val" id="obsv-${t}-${e}">${n}</span>
    </div>`}function O(){const t=l?.querySelector("#creator-volcanoes-list");if(!t)return;const e=o.features?.volcanoes??[];if(e.length===0){t.innerHTML='<p class="creator-empty-msg">No volcanoes placed.</p>';return}t.innerHTML=e.map((a,r)=>{const c=a.active===!0;return`
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
        ${y(r,"x","Pos X",-8,8,.5,a.x??0)}
        ${y(r,"z","Pos Z",-8,8,.5,a.z??0)}
        ${y(r,"height","Height",1,10,.5,a.height??4)}
        ${y(r,"radius","Radius",.5,5,.1,a.radius??1.5)}
        ${y(r,"steepness","Steepness",.1,1,.05,a.steepness??.7)}
        ${y(r,"craterRadius","Crater Size",.1,2,.1,a.crater?.radius??.8)}
        ${y(r,"craterDepth","Crater Depth",.1,3,.1,a.crater?.depth??1.5)}
      </div>
    </div>`}).join(""),t.querySelectorAll(".creator-vol-remove").forEach(a=>{a.addEventListener("click",()=>{b(),o.features.volcanoes.splice(parseInt(a.dataset.volIndex),1),O(),p()})}),t.querySelectorAll('[data-action="active"]').forEach(a=>{a.addEventListener("click",()=>{const r=o.features.volcanoes[parseInt(a.dataset.volIndex)];r&&(b(),r.active=!r.active,a.classList.toggle("kinetic",r.active),a.textContent=r.active?"Active":"Dormant",a.title=r.active?"Active — has lava":"Dormant",p())})}),t.querySelectorAll(".creator-vol-slider").forEach(a=>{a.addEventListener("pointerdown",b),a.addEventListener("input",()=>{const r=parseInt(a.dataset.index),c=a.dataset.key,i=parseFloat(a.value),s=o.features.volcanoes[r];if(!s)return;const n=l.querySelector(`#volv-${r}-${c}`);n&&(n.textContent=i.toFixed(2)),c==="craterRadius"?s.crater&&(s.crater.radius=i):c==="craterDepth"?s.crater&&(s.crater.depth=i):s[c]=i,p()})})}function y(t,e,a,r,c,i,s){const n=parseFloat(Number(s).toFixed(2));return`
    <div class="creator-obs-row">
      <label class="creator-obs-label">${a}</label>
      <input class="creator-slider creator-obs-slider creator-vol-slider" type="range" min="${r}" max="${c}" step="${i}" value="${s}"
             data-index="${t}" data-key="${e}" />
      <span class="creator-obs-val" id="volv-${t}-${e}">${n}</span>
    </div>`}async function N(){const t=l.querySelector("#creator-save-btn");if(t){t.disabled=!0,t.innerHTML='<span class="material-icons">hourglass_empty</span> Saving…';try{const e={...o,id:void 0},a=await ie(e,f);f=a.id,g=a.share_id;const r=l.querySelector("#creator-share-btn");r&&(r.disabled=!1),S(!1),E=new Date,z();const c=document.getElementById("level-name");c&&(c.textContent=o.name||"My Island"),I("Island saved!")}catch{q("Save failed — please try again")}finally{t.disabled=!1,t.innerHTML='<span class="material-icons">save</span> Save'}}}function Te(){if(!g)return;const t=`${window.location.origin}${window.location.pathname}?island=${g}`;navigator.clipboard.writeText(t).then(()=>{I("Share link copied to clipboard!")}).catch(()=>{prompt("Copy this link to share your island:",t)})}async function U(){x=!x;const t=l.querySelector(".creator-my-islands-list"),e=l.querySelector(".creator-chevron");if(t)if(x){t.classList.remove("hidden"),e&&(e.textContent="expand_less"),t.innerHTML=J;const a=await de();if(a.length===0){t.innerHTML='<p class="creator-empty-msg">No saved islands yet.</p>';return}t.innerHTML=a.map(r=>`
      <div class="creator-saved-item">
        <div class="creator-saved-info">
          <span class="creator-saved-name">${B(r.name)}</span>
          <span class="creator-saved-date">${G(r.updated_at)}</span>
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
    `).join(""),t.querySelectorAll(".creator-saved-edit").forEach(r=>{r.addEventListener("click",async()=>{const c=r.closest(".creator-saved-actions"),i=c.innerHTML;c.innerHTML=J;const{loadIslandByShareId:s}=await te(async()=>{const{loadIslandByShareId:v}=await import("./creatorSystem-3D-XjEpF.js");return{loadIslandByShareId:v}},__vite__mapDeps([0,1,2,3,4,5,6,7])),n=await s(r.dataset.share);n?(F(),fe(n,r.dataset.id,r.dataset.share)):(c.innerHTML=i,q("Could not load island — please try again"),x=!0,U())})}),t.querySelectorAll(".creator-saved-delete").forEach(r=>{const c=r.closest(".creator-saved-item")?.querySelector(".creator-saved-name")?.textContent||"this island";r.addEventListener("click",()=>{Ae(c,async()=>{if(await ue(r.dataset.id),r.closest(".creator-saved-item").remove(),f===r.dataset.id){f=null,g=null;const i=l?.querySelector("#creator-share-btn");i&&(i.disabled=!0)}I("Island deleted")})})})}else t.classList.add("hidden"),e&&(e.textContent="expand_more")}function z(){const t=l?.querySelector("#creator-last-saved");if(!t)return;if(!f){t.textContent="";return}const e=E?`Saved ${G(E.toISOString())}`:"Saved";t.textContent=e}function P(){f=null,g=null,E=null,o=Z();const t=l?.querySelector("#creator-share-btn");t&&(t.disabled=!0),S(!0),z(),_(),p()}function _e(){const t=document.createElement("div");t.className="creator-save-prompt-overlay",t.innerHTML=`
    <div class="creator-save-prompt">
      <div class="creator-save-prompt-title">Start a new island?</div>
      <div class="creator-save-prompt-body">Your current island has unsaved changes.</div>
      <div class="creator-save-prompt-actions">
        <button class="creator-btn creator-btn-primary" id="cnp-save">Save &amp; New</button>
        <button class="creator-btn creator-btn-ghost" id="cnp-discard">Discard &amp; New</button>
        <button class="creator-btn creator-btn-ghost" id="cnp-cancel">Cancel</button>
      </div>
    </div>`,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("visible"));const e=()=>{t.classList.remove("visible"),setTimeout(()=>t.remove(),250)};t.querySelector("#cnp-save").addEventListener("click",async()=>{e(),await N(),P()}),t.querySelector("#cnp-discard").addEventListener("click",()=>{e(),P()}),t.querySelector("#cnp-cancel").addEventListener("click",e)}function Ae(t,e){const a=document.createElement("div");a.className="creator-save-prompt-overlay",a.innerHTML=`
    <div class="creator-save-prompt">
      <div class="creator-save-prompt-title">Delete island?</div>
      <div class="creator-save-prompt-body">"${B(t)}" will be permanently deleted and cannot be recovered.</div>
      <div class="creator-save-prompt-actions">
        <button class="creator-btn creator-btn-primary" id="cdp-confirm">Delete</button>
        <button class="creator-btn creator-btn-ghost" id="cdp-cancel">Cancel</button>
      </div>
    </div>`,document.body.appendChild(a),requestAnimationFrame(()=>a.classList.add("visible"));const r=()=>{a.classList.remove("visible"),setTimeout(()=>a.remove(),250)};a.querySelector("#cdp-confirm").addEventListener("click",()=>{r(),e()}),a.querySelector("#cdp-cancel").addEventListener("click",r)}function Me(){const t=document.createElement("div");t.className="creator-save-prompt-overlay",t.innerHTML=`
    <div class="creator-save-prompt">
      <div class="creator-save-prompt-title">Save before playing?</div>
      <div class="creator-save-prompt-body">Your island has unsaved changes — they'll be lost if something goes wrong.</div>
      <div class="creator-save-prompt-actions">
        <button class="creator-btn creator-btn-primary" id="csp-save">Save &amp; Play</button>
        <button class="creator-btn creator-btn-ghost" id="csp-play">Play Anyway</button>
        <button class="creator-btn creator-btn-ghost" id="csp-cancel">Cancel</button>
      </div>
    </div>`,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("visible"));const e=()=>{t.classList.remove("visible"),setTimeout(()=>t.remove(),250)};t.querySelector("#csp-save").addEventListener("click",async()=>{e(),await N(),D()}),t.querySelector("#csp-play").addEventListener("click",()=>{e(),D()}),t.querySelector("#csp-cancel").addEventListener("click",e)}function De(){l&&(l.style.display="flex",requestAnimationFrame(()=>l.classList.add("visible")),window.dispatchEvent(new CustomEvent("creator-panel-state",{detail:{open:!0}})))}function F(){$&&(window.removeEventListener("keydown",$),$=null),w&&(window.removeEventListener("terrain-palette-applied",w),w=null),l&&(l.classList.remove("visible"),setTimeout(()=>{l&&(l.remove(),l=null)},350))}function B(t){return String(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function G(t){if(!t)return"";const e=new Date(t),r=new Date-e,c=Math.floor(r/864e5);return c===0?"today":c===1?"yesterday":c<7?`${c}d ago`:c<365?e.toLocaleDateString(void 0,{month:"short",day:"numeric"}):e.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}export{D as closeCreatorMode,Je as dismissCreatorPanel,fe as openCreatorMode,Ke as reopenCreatorPanel};
