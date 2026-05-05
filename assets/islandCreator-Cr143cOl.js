const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/creatorSystem-DOSImOa4.js","assets/levelManager-4bPr8KNe.js","assets/supabase-qp4a7gwM.js","assets/toast-DFQg6cek.js","assets/audioManager-CCjicHO6.js","assets/three-D8n9J4sM.js","assets/physics-CKC5f6tm.js","assets/physicsQueue-XOQprDaT.js"])))=>i.map(i=>d[i]);
import{_ as V}from"./supabase-qp4a7gwM.js";import{s as z,a as K,S as J,r as U,b as G,c as Q,e as ee}from"./main-D_54MrOo.js";import{sanitizeName as ae,saveIsland as te,getMyIslands as re,deleteIsland as se,deleteColorPreset as oe,saveColorPreset as le,getColorPresets as ce}from"./creatorSystem-DOSImOa4.js";import{showError as L,showSuccess as T}from"./toast-DFQg6cek.js";import"./three-D8n9J4sM.js";import"./physics-CKC5f6tm.js";import"./levelManager-4bPr8KNe.js";import"./audioManager-CCjicHO6.js";import"./physicsQueue-XOQprDaT.js";import"./inputHandler-BpVxqCI4.js";import"./networkClient-Bpayhc9L.js";import"./messageProtocol-BMEmlWkN.js";import"./lava-DnvQknEQ.js";const ne=-99,ie=[{label:"Sand",value:"normal-maps/sand-normal.jpg"},{label:"Rough Pebble",value:"normal-maps/rough-pebble-normal.jpg"},{label:"Pebble Beach",value:"normal-maps/pebble-beach-normal.jpg"},{label:"Slate",value:"normal-maps/slate-normal.jpg"},{label:"Layers",value:"normal-maps/layers-normal.jpg"},{label:"Crack Rock",value:"normal-maps/crack-rock-normal.jpg"},{label:"Swirl Sand",value:"normal-maps/swirl-sand-normal.jpg"},{label:"Weathered Stone",value:"normal-maps/weathered-stone-normal.jpg"},{label:"Pinch",value:"normal-maps/pinch-normal.jpg"}],A=[{label:"Boulder (Small)",model:"boulder-sm-1n.glb",physics:{type:"convexHull"},scale:.6},{label:"Boulder (Small 2)",model:"boulder-sm-2n.glb",physics:{type:"convexHull"},scale:.6},{label:"Boulder (Tall)",model:"boulder-tall-n.glb",physics:{type:"convexHull"},scale:1},{label:"Boulder (Flat)",model:"boulder-flat-bottom.glb",physics:{type:"convexHull"},scale:1},{label:"Basalt Clump",model:"basalt-clump-1.glb",physics:{type:"convexHull"},scale:1.2},{label:"Anchor",model:"anchor.glb",physics:{type:"convexHull"},scale:1},{label:"Lighthouse",model:"lighthouse.glb",physics:{type:"cylinder",height:4,radiusTop:.4},scale:1,lighthouseBeam:!0},{label:"Moai (Tall)",model:"moai/moai-tall-stone.glb",physics:{type:"convexHull"},scale:1},{label:"Moai Head",model:"moai/moai-head-stone.glb",physics:{type:"convexHull"},scale:1},{label:"Chest",model:"chest.glb",physics:{type:"box",halfExtents:{x:.5,y:.35,z:.35}},scale:1}];function F(){return{name:"My Island",terrainShape:{size:14,islandRadius:5.1,scaleX:1,scaleY:1,tilt:{angle:0,amount:0},bay:{angle:0,depth:0,width:0},irregularity:1,distortion:{frequency:0,amplitude:0,randomness:0},turbulence:{strength:0,scale:.13,octaves:1}},waterLevel:-1.747,winPercentage:.35,spawn:{enabled:!0,interval:8e3,cloudDuration:6e3,dropletsPerCloud:16,dropletInterval:400,minRadius:.1,maxRadius:.15,spawnHeight:10.2,cloudSpeed:2.45,fadeInDuration:2800,fadeOutDuration:2800},obstacles:[],features:{caldera:{enabled:!1,x:0,z:0,radius:2,depth:3},volcanoes:[],terraces:{enabled:!1,count:3,height:2,width:1},spiral:{enabled:!1,turns:2,width:1,height:1.5,centerHeight:0}},multipleTargets:1,timeOfDay:"day",normalMap:"normal-maps/sand-normal.jpg",normalMapScale:2,terrainColorPreset:null}}let l=null,o=null,m=null,h=null,O=null,k=!1,S=!0,w=null,f=null,g=null;const N=`
  <div class="stats-loading-animation creator-drops-loader">
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="collection"></div>
  </div>`;function $(a){S=a;const e=l?.querySelector("#creator-save-btn");e&&e.classList.toggle("creator-save-btn--dirty",a)}function de(a=null,e=null,t=null){o=a?JSON.parse(JSON.stringify(a)):F(),m=e,h=t,S=!e,z(o,B)}function B(){ue(),Le(),$(S),P(),o.terrainColorPreset&&K(o.terrainColorPreset),M()}function C(){I(),ee(),window.dispatchEvent(new CustomEvent("creator-panel-state",{detail:{open:!1}}))}function Ne(){I(),window.dispatchEvent(new CustomEvent("creator-panel-state",{detail:{open:!1}}))}function ze(){z(o,B)}function ue(){l&&(l.remove(),l=null),l=document.createElement("div"),l.id="island-creator-panel",l.setAttribute("role","complementary"),l.setAttribute("aria-label","Island Creator"),l.innerHTML=`
    <div class="creator-header">
      <span class="creator-title">Island Creator</span>
      <button class="creator-collapse-btn" aria-label="Collapse panel" aria-expanded="true" title="Toggle panel">◀</button>
    </div>

    <div class="creator-tabs" role="tablist" aria-label="Creator sections">
      <button class="creator-tab active" id="creator-tab-settings" data-tab="settings" role="tab" aria-selected="true" aria-controls="creator-panel-settings">Settings</button>
      <button class="creator-tab" id="creator-tab-shape" data-tab="shape" role="tab" aria-selected="false" aria-controls="creator-panel-shape">Shape</button>
      <button class="creator-tab" id="creator-tab-features" data-tab="features" role="tab" aria-selected="false" aria-controls="creator-panel-features">Features</button>
      <button class="creator-tab" id="creator-tab-obstacles" data-tab="obstacles" role="tab" aria-selected="false" aria-controls="creator-panel-obstacles">Obstacles</button>
    </div>

    <div class="creator-content">
      ${pe()}
      ${be()}
      ${ve()}
      ${me()}
    </div>

    <div class="creator-footer">
      <button id="creator-save-btn" class="creator-btn creator-btn-primary">
        <span class="material-icons">save</span> Save
      </button>
      <button id="creator-share-btn" class="creator-btn creator-btn-secondary" ${h?"":"disabled"}>
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
  `,document.body.appendChild(l),ye(),j()}function pe(){return`<div class="creator-tab-content hidden" data-tab="shape" id="creator-panel-shape" role="tabpanel" aria-labelledby="creator-tab-shape">
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
  </div>`}function be(){const a=o.features??{},e=(i,s)=>{const n=a[i]?.enabled??!1;return`
    <div class="creator-section-label">${s}</div>
    <div class="creator-row">
      <button class="creator-toggle creator-feature-toggle ${n?"active":""}"
              data-feature="${i}" aria-pressed="${n}">${n?"On":"Off"}</button>
    </div>
    <div class="creator-feature-params ${n?"":"hidden"}" data-feature-params="${i}">`},t=a.caldera??{},r=a.terraces??{},c=a.spiral??{};return`<div class="creator-tab-content hidden" data-tab="features" id="creator-panel-features" role="tabpanel" aria-labelledby="creator-tab-features">
    ${e("caldera","Caldera")}
      ${d("calderaPosX","Pos X",-8,8,.5,t.x??0)}
      ${d("calderaPosZ","Pos Z",-8,8,.5,t.z??0)}
      ${d("calderaRadius","Radius",.5,5,.1,t.radius??2)}
      ${d("calderaDepth","Depth",.5,6,.1,t.depth??3)}
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
  </div>`}function ve(){return`<div class="creator-tab-content hidden" data-tab="obstacles" id="creator-panel-obstacles" role="tabpanel" aria-labelledby="creator-tab-obstacles">
    <div id="creator-obstacles-list" class="creator-obstacles-list"></div>
    <button id="creator-add-obstacle-btn" class="creator-btn creator-btn-secondary" style="width:100%;margin-top:8px">
      <span class="material-icons">add</span> Add Obstacle
    </button>
    <div id="creator-obstacle-picker" class="creator-obstacle-picker hidden"></div>
  </div>`}function me(){const a=ie.map(e=>`<option value="${e.value}" ${e.value===(o.normalMap||"normal-maps/sand-normal.jpg")?"selected":""}>${e.label}</option>`).join("");return`<div class="creator-tab-content active" data-tab="settings" id="creator-panel-settings" role="tabpanel" aria-labelledby="creator-tab-settings">
    <div class="creator-row">
      <label class="creator-label" for="creator-name">Island Name</label>
      <input id="creator-name" class="creator-input" type="text" maxlength="40"
             value="${(o.name||"My Island").replace(/"/g,"&quot;")}"
             placeholder="My Island" />
    </div>
    <div class="creator-row">
      <span class="creator-label" id="creator-label-targets">Targets</span>
      <div class="creator-toggle-group" role="group" aria-labelledby="creator-label-targets">
        ${[1,2,3,4].map(e=>{const t=(o.multipleTargets||1)===e;return`<button class="creator-toggle ${t?"active":""}" data-targets="${e}" aria-pressed="${t}">${e}</button>`}).join("")}
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
      <select id="creator-normal-map" class="creator-select">${a}</select>
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
      <div class="creator-shortcut-row"><span class="creator-shortcut-keys"><kbd class="creator-kbd">c</kbd></span><span class="creator-shortcut-desc">Toggle camera control</span></div>
      <div class="creator-shortcut-row"><span class="creator-shortcut-keys"><kbd class="creator-kbd">w</kbd><kbd class="creator-kbd">a</kbd><kbd class="creator-kbd">s</kbd><kbd class="creator-kbd">d</kbd></span><span class="creator-shortcut-desc">Move camera</span></div>
      <div class="creator-shortcut-row"><span class="creator-shortcut-keys"><kbd class="creator-kbd">space</kbd></span><span class="creator-shortcut-desc">Rise</span></div>
      <div class="creator-shortcut-row"><span class="creator-shortcut-keys"><kbd class="creator-kbd">ctrl</kbd></span><span class="creator-shortcut-desc">Lower</span></div>
      <div class="creator-shortcut-row"><span class="creator-shortcut-keys"><kbd class="creator-kbd">t</kbd></span><span class="creator-shortcut-desc">Terrain color panel</span></div>
      <div class="creator-shortcut-row"><span class="creator-shortcut-keys"><kbd class="creator-kbd">n</kbd></span><span class="creator-shortcut-desc">Cycle surface texture</span></div>
      <div class="creator-shortcut-row"><span class="creator-shortcut-keys"><kbd class="creator-kbd">[</kbd><kbd class="creator-kbd">]</kbd></span><span class="creator-shortcut-desc">Texture scale</span></div>
    </div>
  </div>`}function M(){const a=l?.querySelector("#creator-color-preset-display");if(!a)return;const e=o.terrainColorPreset;if(!e)a.innerHTML=`
      <div class="creator-row creator-preset-empty-row">
        <span class="creator-label" style="color:rgba(255,255,255,0.4);font-style:italic">None</span>
        <button class="creator-btn creator-btn-secondary creator-open-preset-btn" style="padding:4px 12px;font-size:12px">
          <span class="material-icons" style="font-size:14px;vertical-align:middle">palette</span> Choose
        </button>
      </div>`;else{const t=J.map(r=>{const c=e.colors?.[r]||[0,0,0];return`<span style="flex:1;background:${U(c)}"></span>`}).join("");a.innerHTML=`
      <div class="creator-color-preset-card">
        <div class="creator-preset-swatch-strip">${t}</div>
        <div class="creator-preset-meta">
          <span class="creator-preset-meta-name">${H(e.name)}</span>
          <button class="creator-btn creator-btn-ghost creator-open-preset-btn" title="Edit in Color Tester" style="padding:3px 8px;font-size:11px">
            <span class="material-icons" style="font-size:14px;vertical-align:middle">edit</span>
          </button>
        </div>
      </div>`}a.querySelector(".creator-open-preset-btn")?.addEventListener("click",he)}function he(){G({loadPresets:()=>ce(),savePreset:(a,e)=>le(a,e),deletePreset:a=>oe(a)})}function d(a,e,t,r,c,i,s=""){return`
    <div class="creator-row creator-slider-row">
      <div class="creator-slider-header">
        <label class="creator-label" for="cs-${a}">${e}</label>
        <span class="creator-slider-value" id="csv-${a}">${i}${s}</span>
      </div>
      <input id="cs-${a}" class="creator-slider" type="range"
             min="${t}" max="${r}" step="${c}" value="${i}"
             data-unit="${s}" />
    </div>`}function ye(){l.querySelector(".creator-collapse-btn").addEventListener("click",()=>{l.classList.toggle("collapsed");const s=l.querySelector(".creator-collapse-btn"),n=l.classList.contains("collapsed");s.textContent=n?"▶":"◀",s.setAttribute("aria-expanded",String(!n)),s.setAttribute("aria-label",n?"Expand panel":"Collapse panel")}),l.querySelectorAll(".creator-tab").forEach(s=>{s.addEventListener("click",()=>{l.querySelectorAll(".creator-tab").forEach(n=>{n.classList.remove("active"),n.setAttribute("aria-selected","false")}),l.querySelectorAll(".creator-tab-content").forEach(n=>n.classList.remove("active")),s.classList.add("active"),s.setAttribute("aria-selected","true"),l.querySelector(`.creator-tab-content[data-tab="${s.dataset.tab}"]`).classList.add("active")})}),l.querySelectorAll(".creator-slider").forEach(s=>{s.addEventListener("input",()=>{const n=parseFloat(s.value),u=s.dataset.unit||"",b=Number.isInteger(n)?n:parseFloat(n.toFixed(3));l.querySelector(`#csv-${s.id.replace("cs-","")}`).textContent=`${b}${u}`,fe(s.id.replace("cs-",""),n),p()})});const a=l.querySelector("#creator-name");a&&a.addEventListener("input",()=>{const s=ae(a.value);o.name=s,a.value!==s&&(a.value=s)}),l.querySelectorAll(".creator-toggle[data-targets]").forEach(s=>{s.addEventListener("click",()=>{l.querySelectorAll(".creator-toggle[data-targets]").forEach(n=>{n.classList.remove("active"),n.setAttribute("aria-pressed","false")}),s.classList.add("active"),s.setAttribute("aria-pressed","true"),o.multipleTargets=parseInt(s.dataset.targets),p()})}),l.querySelectorAll(".creator-toggle[data-tod]").forEach(s=>{s.addEventListener("click",()=>{l.querySelectorAll(".creator-toggle[data-tod]").forEach(n=>{n.classList.remove("active"),n.setAttribute("aria-pressed","false")}),s.classList.add("active"),s.setAttribute("aria-pressed","true"),o.timeOfDay=s.dataset.tod,p()})});const e=l.querySelector("#creator-normal-map");e&&e.addEventListener("change",()=>{o.normalMap=e.value,p()}),l.querySelectorAll(".creator-feature-toggle").forEach(s=>{s.addEventListener("click",()=>{const n=s.dataset.feature;if(!o.features[n])return;o.features[n].enabled=!o.features[n].enabled;const u=o.features[n].enabled;s.classList.toggle("active",u),s.setAttribute("aria-pressed",String(u)),s.textContent=u?"On":"Off";const b=l.querySelector(`.creator-feature-params[data-feature-params="${n}"]`);b&&b.classList.toggle("hidden",!u),p()})});const t=l.querySelector("#creator-add-volcano-btn");t&&t.addEventListener("click",()=>{if(o.features.volcanoes.length>=6){L("Maximum 6 volcanoes per island");return}o.features.volcanoes.push({x:0,z:0,height:4,radius:1.5,steepness:.7,crater:{radius:.8,depth:1.5},active:!1}),_(),p()});const r=l.querySelector("#creator-add-obstacle-btn");r&&r.addEventListener("click",ge),l.querySelector("#creator-save-btn").addEventListener("click",D),l.querySelector("#creator-share-btn").addEventListener("click",$e),l.querySelector("#creator-exit-btn").addEventListener("click",()=>{S?xe():C()});const c=l.querySelector(".creator-my-islands-toggle");c&&c.addEventListener("click",W);const i=l.querySelector("#creator-new-island-btn");i&&i.addEventListener("click",()=>{S?ke():q()}),g=s=>{o.terrainColorPreset=s.detail,$(!0),M()},window.addEventListener("terrain-palette-applied",g),f=s=>{if(s.target.tagName==="INPUT"||s.target.tagName==="TEXTAREA"||s.target.tagName==="SELECT")return;if(s.key.toLowerCase()==="n"){const u=l?.querySelector("#creator-normal-map");if(!u)return;u.selectedIndex=(u.selectedIndex+1)%u.options.length,o.normalMap=u.value,p()}else if(s.key==="["||s.key==="]"){const u=l?.querySelector("#cs-normalMapScale"),b=l?.querySelector("#csv-normalMapScale");if(!u)return;const R=parseInt(u.step)||1,Y=parseInt(u.min)||1,Z=parseInt(u.max)||32,E=s.key==="]"?Math.min(o.normalMapScale+R,Z):Math.max(o.normalMapScale-R,Y);o.normalMapScale=E,u.value=E,b&&(b.textContent=`${E}x`),p()}},window.addEventListener("keydown",f)}function fe(a,e){const t=o.terrainShape,r=o.spawn;switch(a){case"size":t.size=e;break;case"islandRadius":t.islandRadius=e;break;case"scaleX":t.scaleX=e;break;case"scaleY":t.scaleY=e;break;case"tiltAngle":t.tilt={...t.tilt,angle:e};break;case"tiltAmount":t.tilt={...t.tilt,amount:e};break;case"bayAngle":t.bay={...t.bay,angle:e};break;case"bayDepth":t.bay={...t.bay,depth:e};break;case"bayWidth":t.bay={...t.bay,width:e};break;case"irregularity":t.irregularity=e;break;case"distortionFreq":t.distortion={...t.distortion,frequency:e};break;case"distortionAmp":t.distortion={...t.distortion,amplitude:e};break;case"distortionRand":t.distortion={...t.distortion,randomness:e};break;case"turbStrength":t.turbulence={...t.turbulence,strength:e};break;case"turbScale":t.turbulence={...t.turbulence,scale:e};break;case"turbOctaves":t.turbulence={...t.turbulence,octaves:e};break;case"winPercent":o.winPercentage=e/100;break;case"waterLevel":o.waterLevel=e;break;case"spawnInterval":r.interval=e;break;case"dropletsPerCloud":r.dropletsPerCloud=e;break;case"cloudDuration":r.cloudDuration=e;break;case"minRadius":r.minRadius=e;break;case"maxRadius":r.maxRadius=Math.max(e,r.minRadius+.01);break;case"cloudSpeed":r.cloudSpeed=e;break;case"normalMapScale":o.normalMapScale=e;break;case"calderaPosX":o.features.caldera.x=e;break;case"calderaPosZ":o.features.caldera.z=e;break;case"calderaRadius":o.features.caldera.radius=e;break;case"calderaDepth":o.features.caldera.depth=e;break;case"terraceCount":o.features.terraces.count=e;break;case"terraceHeight":o.features.terraces.height=e;break;case"terraceWidth":o.features.terraces.width=e;break;case"spiralTurns":o.features.spiral.turns=e;break;case"spiralWidth":o.features.spiral.width=e;break;case"spiralHeight":o.features.spiral.height=e;break;case"spiralCenterHeight":o.features.spiral.centerHeight=e;break}}function j(){const a=o.terrainShape,e=o.spawn,t=o.features??{},r={size:a.size??14,islandRadius:a.islandRadius??parseFloat(((a.size??14)*.365).toFixed(1)),scaleX:a.scaleX??1,scaleY:a.scaleY??1,tiltAngle:a.tilt?.angle??0,tiltAmount:a.tilt?.amount??0,bayAngle:a.bay?.angle??0,bayDepth:a.bay?.depth??0,bayWidth:a.bay?.width??0,irregularity:a.irregularity??1,distortionFreq:a.distortion?.frequency??0,distortionAmp:a.distortion?.amplitude??0,distortionRand:a.distortion?.randomness??0,turbStrength:a.turbulence?.strength??0,turbScale:a.turbulence?.scale??.13,turbOctaves:a.turbulence?.octaves??1,winPercent:Math.round((o.winPercentage??.35)*100),waterLevel:o.waterLevel??-1.747,spawnInterval:e?.interval??8e3,dropletsPerCloud:e?.dropletsPerCloud??16,cloudDuration:e?.cloudDuration??6e3,minRadius:e?.minRadius??.1,maxRadius:e?.maxRadius??.15,cloudSpeed:e?.cloudSpeed??2.45,normalMapScale:o.normalMapScale??2,calderaPosX:t.caldera?.x??0,calderaPosZ:t.caldera?.z??0,calderaRadius:t.caldera?.radius??2,calderaDepth:t.caldera?.depth??3,terraceCount:t.terraces?.count??3,terraceHeight:t.terraces?.height??2,terraceWidth:t.terraces?.width??1,spiralTurns:t.spiral?.turns??2,spiralWidth:t.spiral?.width??1,spiralHeight:t.spiral?.height??1.5,spiralCenterHeight:t.spiral?.centerHeight??0};for(const[c,i]of Object.entries(r)){const s=l.querySelector(`#cs-${c}`);s&&(s.value=i);const n=l.querySelector(`#csv-${c}`);if(n){const u=s?.dataset.unit||"",b=Number.isInteger(i)?i:parseFloat(Number(i).toFixed(3));n.textContent=`${b}${u}`}}l.querySelectorAll(".creator-feature-toggle").forEach(c=>{const i=c.dataset.feature,s=t[i]?.enabled??!1;c.classList.toggle("active",s),c.setAttribute("aria-pressed",String(s)),c.textContent=s?"On":"Off";const n=l.querySelector(`.creator-feature-params[data-feature-params="${i}"]`);n&&n.classList.toggle("hidden",!s)}),_(),x(),M()}function p(){$(!0),clearTimeout(O),O=setTimeout(()=>{Q({...o,id:ne})},300)}function ge(){const a=l.querySelector("#creator-obstacle-picker");if(a){if(!a.classList.contains("hidden")){a.classList.add("hidden");return}a.innerHTML=A.map((e,t)=>`<button class="creator-obstacle-option" data-preset="${t}">${e.label}</button>`).join(""),a.classList.remove("hidden"),a.querySelectorAll(".creator-obstacle-option").forEach(e=>{e.addEventListener("click",()=>{Se(parseInt(e.dataset.preset)),a.classList.add("hidden")})})}}function Se(a){if(o.obstacles.length>=8){L("Maximum 8 obstacles per island");return}const e=A[a],t={type:"model",model:e.model,position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:e.scale,embedDepth:.5,kinetic:!1,physics:{...e.physics,mass:0,friction:.7,restitution:.2},...e.lighthouseBeam?{lighthouseBeam:!0}:{}};o.obstacles.push(t),x(),p()}function x(){const a=l?.querySelector("#creator-obstacles-list");if(a){if(o.obstacles.length===0){a.innerHTML='<p class="creator-empty-msg">No obstacles placed yet.</p>';return}a.innerHTML=o.obstacles.map((e,t)=>{const r=A.find(i=>i.model===e.model)?.label||e.model,c=e.kinetic===!0;return`
      <div class="creator-obstacle-item" data-index="${t}">
        <div class="creator-obstacle-header">
          <span class="creator-obstacle-name">${r}</span>
          <button class="creator-obs-mode-toggle ${c?"kinetic":""}" data-index="${t}"
                  title="${c?"Kinetic — can roll":"Static — embedded in terrain"}">
            ${c?"Kinetic":"Static"}
          </button>
          <button class="creator-obstacle-remove" data-index="${t}" aria-label="Remove">✕</button>
        </div>
        <div class="creator-obstacle-controls">
          ${y(t,"posX","Pos X",-8,8,.5,e.position.x)}
          ${y(t,"posZ","Pos Z",-8,8,.5,e.position.z)}
          ${y(t,"rotY","Rotate",0,360,5,(e.rotation?.y??0)*(180/Math.PI))}
          ${y(t,"scale","Scale",.2,5,.1,e.scale??1)}
          ${y(t,"embed","Embed",0,2,.1,e.embedDepth??.5)}
        </div>
      </div>`}).join(""),a.querySelectorAll(".creator-obstacle-remove").forEach(e=>{e.addEventListener("click",()=>{o.obstacles.splice(parseInt(e.dataset.index),1),x(),p()})}),a.querySelectorAll(".creator-obs-mode-toggle").forEach(e=>{e.addEventListener("click",()=>{const t=parseInt(e.dataset.index),r=o.obstacles[t];r&&(r.kinetic=!r.kinetic,r.physics.mass=r.kinetic?50:0,x(),p())})}),a.querySelectorAll(".creator-obs-slider").forEach(e=>{e.addEventListener("input",()=>{const t=parseInt(e.dataset.index),r=e.dataset.key,c=parseFloat(e.value),i=o.obstacles[t];if(!i)return;const s=l.querySelector(`#obsv-${t}-${r}`);s&&(s.textContent=c.toFixed(2)),r==="posX"?i.position.x=c:r==="posZ"?i.position.z=c:r==="rotY"?i.rotation={...i.rotation||{},y:c*(Math.PI/180)}:r==="scale"?i.scale=c:r==="embed"&&(i.embedDepth=c),p()})})}}function y(a,e,t,r,c,i,s){const n=parseFloat(Number(s).toFixed(2));return`
    <div class="creator-obs-row">
      <label class="creator-obs-label">${t}</label>
      <input class="creator-obs-slider" type="range" min="${r}" max="${c}" step="${i}" value="${s}"
             data-index="${a}" data-key="${e}" />
      <span class="creator-obs-val" id="obsv-${a}-${e}">${n}</span>
    </div>`}function _(){const a=l?.querySelector("#creator-volcanoes-list");if(!a)return;const e=o.features?.volcanoes??[];if(e.length===0){a.innerHTML='<p class="creator-empty-msg">No volcanoes placed.</p>';return}a.innerHTML=e.map((t,r)=>{const c=t.active===!0;return`
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
        ${v(r,"x","Pos X",-8,8,.5,t.x??0)}
        ${v(r,"z","Pos Z",-8,8,.5,t.z??0)}
        ${v(r,"height","Height",1,10,.5,t.height??4)}
        ${v(r,"radius","Radius",.5,5,.1,t.radius??1.5)}
        ${v(r,"steepness","Steepness",.1,1,.05,t.steepness??.7)}
        ${v(r,"craterRadius","Crater Size",.1,2,.1,t.crater?.radius??.8)}
        ${v(r,"craterDepth","Crater Depth",.1,3,.1,t.crater?.depth??1.5)}
      </div>
    </div>`}).join(""),a.querySelectorAll(".creator-vol-remove").forEach(t=>{t.addEventListener("click",()=>{o.features.volcanoes.splice(parseInt(t.dataset.volIndex),1),_(),p()})}),a.querySelectorAll('[data-action="active"]').forEach(t=>{t.addEventListener("click",()=>{const r=o.features.volcanoes[parseInt(t.dataset.volIndex)];r&&(r.active=!r.active,t.classList.toggle("kinetic",r.active),t.textContent=r.active?"Active":"Dormant",t.title=r.active?"Active — has lava":"Dormant",p())})}),a.querySelectorAll(".creator-vol-slider").forEach(t=>{t.addEventListener("input",()=>{const r=parseInt(t.dataset.index),c=t.dataset.key,i=parseFloat(t.value),s=o.features.volcanoes[r];if(!s)return;const n=l.querySelector(`#volv-${r}-${c}`);n&&(n.textContent=i.toFixed(2)),c==="craterRadius"?s.crater&&(s.crater.radius=i):c==="craterDepth"?s.crater&&(s.crater.depth=i):s[c]=i,p()})})}function v(a,e,t,r,c,i,s){const n=parseFloat(Number(s).toFixed(2));return`
    <div class="creator-obs-row">
      <label class="creator-obs-label">${t}</label>
      <input class="creator-slider creator-obs-slider creator-vol-slider" type="range" min="${r}" max="${c}" step="${i}" value="${s}"
             data-index="${a}" data-key="${e}" />
      <span class="creator-obs-val" id="volv-${a}-${e}">${n}</span>
    </div>`}async function D(){const a=l.querySelector("#creator-save-btn");if(a){a.disabled=!0,a.innerHTML='<span class="material-icons">hourglass_empty</span> Saving…';try{const e={...o,id:void 0},t=await te(e,m);m=t.id,h=t.share_id;const r=l.querySelector("#creator-share-btn");r&&(r.disabled=!1),$(!1),w=new Date,P();const c=document.getElementById("level-name");c&&(c.textContent=o.name||"My Island"),T("Island saved!")}catch{L("Save failed — please try again")}finally{a.disabled=!1,a.innerHTML='<span class="material-icons">save</span> Save'}}}function $e(){if(!h)return;const a=`${window.location.origin}${window.location.pathname}?island=${h}`;navigator.clipboard.writeText(a).then(()=>{T("Share link copied to clipboard!")}).catch(()=>{prompt("Copy this link to share your island:",a)})}async function W(){k=!k;const a=l.querySelector(".creator-my-islands-list"),e=l.querySelector(".creator-chevron");if(a)if(k){a.classList.remove("hidden"),e&&(e.textContent="expand_less"),a.innerHTML=N;const t=await re();if(t.length===0){a.innerHTML='<p class="creator-empty-msg">No saved islands yet.</p>';return}a.innerHTML=t.map(r=>`
      <div class="creator-saved-item">
        <div class="creator-saved-info">
          <span class="creator-saved-name">${H(r.name)}</span>
          <span class="creator-saved-date">${X(r.updated_at)}</span>
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
    `).join(""),a.querySelectorAll(".creator-saved-edit").forEach(r=>{r.addEventListener("click",async()=>{const c=r.closest(".creator-saved-actions"),i=c.innerHTML;c.innerHTML=N;const{loadIslandByShareId:s}=await V(async()=>{const{loadIslandByShareId:u}=await import("./creatorSystem-DOSImOa4.js");return{loadIslandByShareId:u}},__vite__mapDeps([0,1,2,3,4,5,6,7])),n=await s(r.dataset.share);n?(I(),de(n,r.dataset.id,r.dataset.share)):(c.innerHTML=i,L("Could not load island — please try again"),k=!0,W())})}),a.querySelectorAll(".creator-saved-delete").forEach(r=>{const c=r.closest(".creator-saved-item")?.querySelector(".creator-saved-name")?.textContent||"this island";r.addEventListener("click",()=>{we(c,async()=>{if(await se(r.dataset.id),r.closest(".creator-saved-item").remove(),m===r.dataset.id){m=null,h=null;const i=l?.querySelector("#creator-share-btn");i&&(i.disabled=!0)}T("Island deleted")})})})}else a.classList.add("hidden"),e&&(e.textContent="expand_more")}function P(){const a=l?.querySelector("#creator-last-saved");if(!a)return;if(!m){a.textContent="";return}const e=w?`Saved ${X(w.toISOString())}`:"Saved";a.textContent=e}function q(){m=null,h=null,w=null,o=F();const a=l?.querySelector("#creator-share-btn");a&&(a.disabled=!0),$(!0),P(),j(),p()}function ke(){const a=document.createElement("div");a.className="creator-save-prompt-overlay",a.innerHTML=`
    <div class="creator-save-prompt">
      <div class="creator-save-prompt-title">Start a new island?</div>
      <div class="creator-save-prompt-body">Your current island has unsaved changes.</div>
      <div class="creator-save-prompt-actions">
        <button class="creator-btn creator-btn-primary" id="cnp-save">Save &amp; New</button>
        <button class="creator-btn creator-btn-ghost" id="cnp-discard">Discard &amp; New</button>
        <button class="creator-btn creator-btn-ghost" id="cnp-cancel">Cancel</button>
      </div>
    </div>`,document.body.appendChild(a),requestAnimationFrame(()=>a.classList.add("visible"));const e=()=>{a.classList.remove("visible"),setTimeout(()=>a.remove(),250)};a.querySelector("#cnp-save").addEventListener("click",async()=>{e(),await D(),q()}),a.querySelector("#cnp-discard").addEventListener("click",()=>{e(),q()}),a.querySelector("#cnp-cancel").addEventListener("click",e)}function we(a,e){const t=document.createElement("div");t.className="creator-save-prompt-overlay",t.innerHTML=`
    <div class="creator-save-prompt">
      <div class="creator-save-prompt-title">Delete island?</div>
      <div class="creator-save-prompt-body">"${H(a)}" will be permanently deleted and cannot be recovered.</div>
      <div class="creator-save-prompt-actions">
        <button class="creator-btn creator-btn-primary" id="cdp-confirm">Delete</button>
        <button class="creator-btn creator-btn-ghost" id="cdp-cancel">Cancel</button>
      </div>
    </div>`,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("visible"));const r=()=>{t.classList.remove("visible"),setTimeout(()=>t.remove(),250)};t.querySelector("#cdp-confirm").addEventListener("click",()=>{r(),e()}),t.querySelector("#cdp-cancel").addEventListener("click",r)}function xe(){const a=document.createElement("div");a.className="creator-save-prompt-overlay",a.innerHTML=`
    <div class="creator-save-prompt">
      <div class="creator-save-prompt-title">Save before playing?</div>
      <div class="creator-save-prompt-body">Your island has unsaved changes — they'll be lost if something goes wrong.</div>
      <div class="creator-save-prompt-actions">
        <button class="creator-btn creator-btn-primary" id="csp-save">Save &amp; Play</button>
        <button class="creator-btn creator-btn-ghost" id="csp-play">Play Anyway</button>
        <button class="creator-btn creator-btn-ghost" id="csp-cancel">Cancel</button>
      </div>
    </div>`,document.body.appendChild(a),requestAnimationFrame(()=>a.classList.add("visible"));const e=()=>{a.classList.remove("visible"),setTimeout(()=>a.remove(),250)};a.querySelector("#csp-save").addEventListener("click",async()=>{e(),await D(),C()}),a.querySelector("#csp-play").addEventListener("click",()=>{e(),C()}),a.querySelector("#csp-cancel").addEventListener("click",e)}function Le(){l&&(l.style.display="flex",requestAnimationFrame(()=>l.classList.add("visible")),window.dispatchEvent(new CustomEvent("creator-panel-state",{detail:{open:!0}})))}function I(){f&&(window.removeEventListener("keydown",f),f=null),g&&(window.removeEventListener("terrain-palette-applied",g),g=null),l&&(l.classList.remove("visible"),setTimeout(()=>{l&&(l.remove(),l=null)},350))}function H(a){return String(a||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function X(a){if(!a)return"";const e=new Date(a),r=new Date-e,c=Math.floor(r/864e5);return c===0?"today":c===1?"yesterday":c<7?`${c}d ago`:c<365?e.toLocaleDateString(void 0,{month:"short",day:"numeric"}):e.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}export{C as closeCreatorMode,Ne as dismissCreatorPanel,de as openCreatorMode,ze as reopenCreatorPanel};
