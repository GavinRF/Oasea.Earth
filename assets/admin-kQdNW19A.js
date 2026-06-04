import"./modulepreload-polyfill-B5Qt9EMX.js";import{s as y}from"./supabaseConfig-BCu5G7WU.js";import"./supabase-qp4a7gwM.js";const I={0:"Trial of Quetzal",1:"Desert Isle Revival",2:"Sun-Scored Sands",3:"Ancient Challenge",4:"Hollow Basin",5:"Drinking Stone",6:"Mirage Archipelago",7:"Vapor Crucible",8:"Split-Decision Atoll",9:"Glass Dunes",10:"Adrift",11:"Tide-Turned Throat",12:"Ile Moyenne",13:"Shattered Archipelago",14:"Jagged Atoll",15:"Arrecife Verde",16:"Ball's Pyramid",17:"Hourglass Narrows",18:"Half Moon Bay",19:"Wind Shear Heights",20:"Azores Crater",21:"Terraced Falls",22:"Spiral Ascent",23:"Rapa Nui",24:"Axiom",25:"Octopus's Garden",26:"The Last Terrace",27:"Infinite Oasis",28:"Great Chasm",29:"Salinity Citadel",30:"The Breach",31:"The Stepwell",32:"Coral Cove",33:"Counter-Spin",34:"Lone Peak",35:"Ring of Fire",36:"Volcanic Chain",37:"Abandoned Conch",38:"Twin Fire",39:"Rimwalk",40:"Omnis Ultimus","-1":"Wing and Wind","-2":"Lost Horizon","-3":"Eye of the Gale","-4":"Monsoon Sprint","-5":"Thermal Uprising","-6":"Blue Nebula","-7":"Bring Fire"};function P(e){return e<0?I[String(e)]||`Minigame (${e})`:e===0?"Trial of Quetzal":e>=1e3?`Daily #${e-999}`:I[e]||`Level ${e}`}function q(e){return e<0||e===0?"minigame":e>=1e3?"daily":e>=30&&e<=36?"fire":e>=23&&e<=29?"expert":e>=1&&e<=22?"story":e>36?"fire":"story"}const N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function T(e){if(!e)return"—";const t=new Date(e);return`${N[t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`}function H(e){if(!e||e<=0)return"—";const t=Math.round(e/1e3);return t<60?`${t}s`:`${Math.floor(t/60)}:${(t%60).toString().padStart(2,"0")}`}function R(e){if(!e||e<=0)return"—";const t=Math.round(e/6e4);return t<60?`${t}m`:`${Math.floor(t/60)}h ${t%60}m`}function L(e){return e==null?"—":`$${(e/100).toFixed(2)}`}function b(e){return e==null?"—":e.toLocaleString()}function D(e){return e==null?"—":`${Math.round(e*100)}%`}function j(e){const t=q(e);return`<span class="badge badge-${t}">${{story:"Story",expert:"Expert",fire:"Fire",daily:"Daily",minigame:"Mini"}[t]||t}</span>`}async function f(e,t=[]){try{const{data:i,error:o}=await e();if(o)throw o;return i??t}catch(i){return console.error("[admin]",i),t}}async function B(e){try{const{count:t,error:i}=await e();if(i)throw i;return t??0}catch(t){return console.error("[admin]",t),0}}function E(e){e.innerHTML=`<div class="loading-shimmer">
    ${[80,60,70,55,65].map(t=>`<div class="shimmer-row" style="width:${t}%"></div>`).join("")}
  </div>`}function A(e,t,i={}){let o=i.defaultSort||e[0].key,c=i.defaultAsc??!1;const m=document.createElement("div");m.className="table-scroll";function n(){const s=[...t].sort((a,u)=>{let l=a[o],d=u[o];return l==null&&(l=c?1/0:-1/0),d==null&&(d=c?1/0:-1/0),typeof l=="string"?c?l.localeCompare(d):d.localeCompare(l):c?l-d:d-l}),v=document.createElement("table");v.className="admin-table";const _=document.createElement("thead");_.innerHTML=`<tr>${e.map(a=>{const u=a.key===o;return`<th class="${[a.sortable!==!1?"sortable":"",u?c?"sort-asc":"sort-desc":""].filter(Boolean).join(" ")}" data-key="${a.key}">${a.label}</th>`}).join("")}</tr>`,v.appendChild(_),_.querySelectorAll("th.sortable").forEach(a=>{a.addEventListener("click",()=>{const u=a.dataset.key;o===u?c=!c:(o=u,c=!1),m.innerHTML="",m.appendChild(n())})});const h=document.createElement("tbody");return s.length===0?h.innerHTML=`<tr><td colspan="${e.length}" class="empty-state">No data</td></tr>`:s.forEach(a=>{const u=document.createElement("tr");i.onRowClick&&(u.className="clickable"),u.innerHTML=e.map(l=>{const d=a[l.key];return`<td>${l.format?l.format(d,a):d??"—"}</td>`}).join(""),i.onRowClick&&u.addEventListener("click",()=>i.onRowClick(a)),h.appendChild(u)}),v.appendChild(h),v}return m.appendChild(n()),m}const S={currentSection:"dashboard",rendered:new Set,players:[]};async function F(){if(sessionStorage.getItem("adminUnlocked")==="true"){document.getElementById("admin-gate").style.display="none",await z();return}{document.getElementById("gate-error").textContent="Admin not configured (missing VITE_ADMIN_PASSWORD)",document.getElementById("admin-unlock-btn").disabled=!0;return}}let x=!1,M=null;function U(){return x?Promise.resolve():M||(M=new Promise((e,t)=>{const i=document.createElement("script");i.src="https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js",i.onload=()=>{x=!0,e()},i.onerror=t,document.head.appendChild(i)}),M)}async function z(){document.getElementById("admin-shell").style.display="grid",document.getElementById("admin-nav").addEventListener("click",e=>{const t=e.target.closest(".nav-link");t&&(e.preventDefault(),J(t.dataset.section))}),document.getElementById("dialog-close").addEventListener("click",()=>{document.getElementById("island-config-dialog").close()}),await U(),W()}function J(e){e!==S.currentSection&&(document.getElementById(`section-${S.currentSection}`).style.display="none",document.getElementById(`section-${e}`).style.display="block",document.querySelectorAll(".nav-link").forEach(t=>{t.classList.toggle("active",t.dataset.section===e)}),S.currentSection=e,S.rendered.has(e)||(S.rendered.add(e),{players:V,levels:Q,revenue:K,islands:X}[e]?.()))}async function W(){const e=document.getElementById("section-dashboard");S.rendered.add("dashboard"),e.innerHTML="<h1>Dashboard</h1>",E(e);const t=new Date().toISOString().split("T")[0],i=new Date(Date.now()-6*864e5).toISOString().split("T")[0],[o,c,m,n,s,v,_,h]=await Promise.all([B(()=>y.from("players").select("player_id",{count:"exact",head:!0})),f(()=>y.from("scores").select("player_id, date").eq("date",t).gte("total_score",1)),f(()=>y.from("scores").select("player_id, date").gte("date",i).gte("total_score",1)),B(()=>y.from("scores").select("id",{count:"exact",head:!0}).gte("total_score",1)),f(()=>y.from("daily_replay_payments").select("amount_cents").eq("payment_status","succeeded")),f(()=>y.from("monthly_archive_purchases").select("amount_cents").eq("payment_status","succeeded")),f(()=>y.from("unlimited_past_access_payments").select("amount_cents").eq("payment_status","succeeded")),f(()=>y.from("player_pack_purchases").select("amount_cents").eq("payment_status","succeeded"))]),a=new Set(c.map(p=>p.player_id)).size,u=new Set(m.map(p=>p.player_id)).size,l=[...s,...v,..._,...h].reduce((p,g)=>p+(g.amount_cents||0),0),d={};for(let p=6;p>=0;p--){const g=new Date(Date.now()-p*864e5).toISOString().split("T")[0];d[g]=new Set}m.forEach(p=>{d[p.date]&&d[p.date].add(p.player_id)});const k=Object.keys(d),r=k.map(p=>d[p].size),[$]=await Promise.all([f(()=>y.from("scores").select("level_id").gte("total_score",1).neq("level_id",-99))]),w={};$.forEach(p=>{w[p.level_id]=(w[p.level_id]||0)+1});const C=Object.entries(w).map(([p,g])=>({id:Number(p),count:g})).sort((p,g)=>g.count-p.count).slice(0,5);if(e.innerHTML=`
    <h1>Dashboard</h1>
    <div class="stat-grid">
      <div class="stat-card">
        <div class="stat-label">Total Players</div>
        <div class="stat-value">${b(o)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">DAU (Today)</div>
        <div class="stat-value">${b(a)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">WAU (7 Days)</div>
        <div class="stat-value">${b(u)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Total Revenue</div>
        <div class="stat-value">${L(l)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Scores Submitted</div>
        <div class="stat-value">${b(n)}</div>
      </div>
    </div>

    <div class="chart-card">
      <h2>Daily Active Players — Last 7 Days</h2>
      <div class="chart-wrap">
        <canvas id="dau-chart"></canvas>
      </div>
    </div>

    <div class="table-card">
      <div class="table-card-header"><h2>Top 5 Most-Played Levels</h2></div>
      <table class="admin-table">
        <thead><tr><th>#</th><th>Level</th><th>Type</th><th>Plays</th></tr></thead>
        <tbody>${C.map((p,g)=>`
          <tr>
            <td>${g+1}</td>
            <td>${P(p.id)}</td>
            <td>${j(p.id)}</td>
            <td>${b(p.count)}</td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>
  `,x&&window.Chart){const p=document.getElementById("dau-chart").getContext("2d");new window.Chart(p,{type:"bar",data:{labels:k.map(g=>new Date(g+"T12:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})),datasets:[{data:r,backgroundColor:"rgba(0, 120, 180, 0.7)",borderColor:"#0078b4",borderWidth:1,borderRadius:5}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{beginAtZero:!0,ticks:{precision:0},grid:{color:"rgba(0,0,0,0.05)"}},x:{grid:{display:!1}}}}})}}async function V(){const e=document.getElementById("section-players");e.innerHTML="<h1>Players</h1>",E(e);const t=await f(()=>y.from("players").select("player_id, display_name, email, first_seen_at, last_seen_at, total_score, levels_completed, total_play_time_ms").order("last_seen_at",{ascending:!1}).limit(200));S.players=t,O(e,t)}function O(e,t){e.innerHTML=`
    <div class="section-header">
      <h1>Players <span style="font-weight:400;font-size:16px;color:var(--text-muted)">(${t.length})</span></h1>
      <input class="search-input" id="player-search" placeholder="Search name or email…" type="search">
    </div>
    <div class="table-card" id="players-table-wrap"></div>
  `;const i=[{key:"display_name",label:"Name",format:s=>s||'<em style="color:var(--text-muted)">Anonymous</em>'},{key:"email",label:"Email",format:s=>s||'<span style="color:var(--text-muted)">—</span>'},{key:"first_seen_at",label:"First Seen",format:s=>T(s)},{key:"last_seen_at",label:"Last Seen",format:s=>T(s)},{key:"levels_completed",label:"Levels",format:s=>s??0},{key:"total_score",label:"Total Score",format:s=>b(s)},{key:"total_play_time_ms",label:"Play Time",format:s=>R(s)}];let o=t;const c=e.querySelector("#players-table-wrap"),m=e.querySelector("#player-search");function n(){c.innerHTML="",c.appendChild(A(i,o,{defaultSort:"last_seen_at",onRowClick:s=>G(e,s)}))}m.addEventListener("input",()=>{const s=m.value.toLowerCase();o=s?t.filter(v=>(v.display_name||"").toLowerCase().includes(s)||(v.email||"").toLowerCase().includes(s)):t,n()}),n()}async function G(e,t){e.innerHTML=`
    <button class="back-btn" id="player-back-btn">
      <span class="material-icons">arrow_back</span> Players
    </button>
    <div class="player-header">
      <h2>${t.display_name||"Anonymous Player"}</h2>
      <div class="player-email">${t.email||t.player_id}</div>
      <div class="player-stats-row">
        <div class="player-stat"><span class="ps-label">Levels Done</span><span class="ps-value">${t.levels_completed??0}</span></div>
        <div class="player-stat"><span class="ps-label">Total Score</span><span class="ps-value">${b(t.total_score)}</span></div>
        <div class="player-stat"><span class="ps-label">Play Time</span><span class="ps-value">${R(t.total_play_time_ms)}</span></div>
        <div class="player-stat"><span class="ps-label">First Seen</span><span class="ps-value">${T(t.first_seen_at)}</span></div>
        <div class="player-stat"><span class="ps-label">Last Seen</span><span class="ps-value">${T(t.last_seen_at)}</span></div>
      </div>
    </div>
    <div id="detail-achievements"></div>
    <div class="table-card">
      <div class="table-card-header"><h2>Recent Scores</h2></div>
      <div id="detail-scores-wrap"><div class="loading-shimmer">${[70,55,65].map(s=>`<div class="shimmer-row" style="width:${s}%"></div>`).join("")}</div></div>
    </div>
  `,e.querySelector("#player-back-btn").addEventListener("click",()=>{O(e,S.players)});const[i,o]=await Promise.all([f(()=>y.from("scores").select("level_id, total_score, water_percentage, completion_time_ms, terrain_edits, efficiency_score, stars, date, created_at").eq("player_id",t.player_id).order("created_at",{ascending:!1}).limit(50)),f(()=>y.from("achievements").select("achievement_type, level_id, earned_at").eq("player_id",t.player_id).order("earned_at",{ascending:!1}))]),c=e.querySelector("#detail-achievements");o.length>0&&(c.innerHTML=`<div class="achievements-row">${o.map(s=>`
      <span class="achievement-chip">
        <span class="material-icons">emoji_events</span>
        ${s.achievement_type.replace(/_/g," ")}
      </span>`).join("")}
    </div>`);const m=e.querySelector("#detail-scores-wrap");m.innerHTML="";const n=[{key:"date",label:"Date",format:s=>T(s)},{key:"level_id",label:"Level",format:s=>P(s)},{key:"total_score",label:"Score",format:s=>b(s)},{key:"water_percentage",label:"Water%",format:s=>s?D(s):"—"},{key:"completion_time_ms",label:"Time",format:s=>H(s)},{key:"terrain_edits",label:"Edits",format:s=>s??"—"},{key:"efficiency_score",label:"Efficiency",format:s=>s?s.toFixed(2):"—"},{key:"stars",label:"Stars",format:s=>s!=null?"★".repeat(s):"—"}];m.appendChild(A(n,i,{defaultSort:"created_at",defaultAsc:!1}))}async function Q(){const e=document.getElementById("section-levels");e.innerHTML="<h1>Level Analytics</h1>",E(e);const[t,i]=await Promise.all([f(()=>y.from("scores").select("level_id, water_percentage, completion_time_ms, efficiency_score, total_score").gte("total_score",1).neq("level_id",-99).limit(2e4)),f(()=>y.from("scores").select("player_id, level_id").gte("level_id",1).lte("level_id",22).gte("total_score",1).limit(2e4))]),o={};t.forEach(n=>{o[n.level_id]||(o[n.level_id]={level_id:n.level_id,play_count:0,water_sum:0,time_sum:0,eff_sum:0,best_score:0});const s=o[n.level_id];s.play_count++,s.water_sum+=n.water_percentage||0,s.time_sum+=n.completion_time_ms||0,s.eff_sum+=n.efficiency_score||0,n.total_score>s.best_score&&(s.best_score=n.total_score)});const c={};i.forEach(n=>{c[n.level_id]||(c[n.level_id]=new Set),c[n.level_id].add(n.player_id)});const m=Object.values(o).map(n=>({level_id:n.level_id,label:P(n.level_id),type:q(n.level_id),play_count:n.play_count,avg_water:n.play_count?n.water_sum/n.play_count:0,avg_time:n.play_count?n.time_sum/n.play_count:0,avg_eff:n.play_count?n.eff_sum/n.play_count:0,best_score:n.best_score,dropoff:Y(n.level_id,c)}));m.sort((n,s)=>n.level_id-s.level_id),e.innerHTML="<h1>Level Analytics</h1>",Z(e,m)}function Y(e,t){if(e<2||e>22)return null;const i=t[e-1],o=t[e];if(!i||i.size===0)return null;const c=i.size,m=o?o.size:0;return(c-m)/c}function Z(e,t,i){let o="story";const c=[{id:"story",label:"Story (1–22)",fn:a=>a.type==="story"},{id:"expert",label:"Expert Pack",fn:a=>a.type==="expert"},{id:"fire",label:"Fire Pack",fn:a=>a.type==="fire"},{id:"daily",label:"Daily Challenges",fn:a=>a.type==="daily"},{id:"mini",label:"Minigames",fn:a=>a.type==="minigame"},{id:"all",label:"All",fn:()=>!0}],m=c.map(a=>`<button class="filter-tab${a.id===o?" active":""}" data-filter="${a.id}">${a.label}</button>`).join("");e.innerHTML=`
    <h1>Level Analytics</h1>
    <div class="filter-tabs">${m}</div>
    <div class="chart-card">
      <h2>Play Counts by Level</h2>
      <div class="chart-wrap"><canvas id="level-chart"></canvas></div>
    </div>
    <div class="table-card">
      <div class="table-card-header"><h2>Per-Level Stats</h2></div>
      <div id="level-table-wrap"></div>
    </div>
  `;let n=null;function s(){const a=c.find(u=>u.id===o)?.fn??(()=>!0);return t.filter(a)}function v(a){const u={story:"#0078b4",expert:"#7c3aed",fire:"#ea580c",daily:"#059669",minigame:"#9ca3af"},l=document.getElementById("level-chart")?.getContext("2d");!l||!window.Chart||(n&&n.destroy(),n=new window.Chart(l,{type:"bar",data:{labels:a.map(d=>P(d.level_id)),datasets:[{data:a.map(d=>d.play_count),backgroundColor:a.map(d=>u[d.type]||"#0078b4"),borderRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{beginAtZero:!0,ticks:{precision:0},grid:{color:"rgba(0,0,0,0.05)"}},x:{ticks:{maxRotation:45,font:{size:10}},grid:{display:!1}}}}}))}const _=[{key:"level_id",label:"ID",format:a=>a},{key:"label",label:"Level",sortable:!1},{key:"type",label:"Type",format:(a,u)=>j(u.level_id)},{key:"play_count",label:"Plays",format:a=>b(a)},{key:"avg_water",label:"Avg Water",format:a=>D(a)},{key:"avg_time",label:"Avg Time",format:a=>H(a)},{key:"avg_eff",label:"Avg Eff",format:a=>a?a.toFixed(2):"—"},{key:"best_score",label:"Best Score",format:a=>b(a)},{key:"dropoff",label:"Drop-off",format:a=>a!=null?`<span style="color:${a>.4?"#dc2626":"inherit"}">${D(a)}</span>`:"—"}];function h(){const a=s();v(a);const u=document.getElementById("level-table-wrap");u&&(u.innerHTML="",u.appendChild(A(_,a,{defaultSort:"play_count",defaultAsc:!1})))}e.querySelectorAll(".filter-tab").forEach(a=>{a.addEventListener("click",()=>{o=a.dataset.filter,e.querySelectorAll(".filter-tab").forEach(u=>u.classList.toggle("active",u===a)),h()})}),h()}async function K(){const e=document.getElementById("section-revenue");e.innerHTML="<h1>Revenue</h1>",E(e);const[t,i,o,c,m]=await Promise.all([f(()=>y.from("daily_replay_payments").select("player_id, date, amount_cents, created_at").eq("payment_status","succeeded").order("created_at",{ascending:!1}).limit(500)),f(()=>y.from("monthly_archive_purchases").select("player_id, year, month, amount_cents, created_at").eq("payment_status","succeeded").order("created_at",{ascending:!1}).limit(500)),f(()=>y.from("unlimited_past_access_payments").select("player_id, amount_cents, created_at").eq("payment_status","succeeded").order("created_at",{ascending:!1}).limit(500)),f(()=>y.from("player_pack_purchases").select("player_id, pack_id, amount_cents, created_at").eq("payment_status","succeeded").order("created_at",{ascending:!1}).limit(500)),f(()=>y.from("players").select("player_id, display_name"))]),n=new Map(m.map(r=>[r.player_id,r.display_name||"Anonymous"])),s=r=>r.reduce(($,w)=>$+(w.amount_cents||0),0),v=s(t),_=s(i),h=s(o),a=s(c),u=v+_+h+a,l=r=>u>0?(r/u*100).toFixed(1):0,d=[...t.map(r=>({created_at:r.created_at,player:n.get(r.player_id)||"—",product:`Daily Replay (${r.date||"—"})`,amount_cents:r.amount_cents})),...i.map(r=>({created_at:r.created_at,player:n.get(r.player_id)||"—",product:`Monthly Archive ${r.year}/${String(r.month).padStart(2,"0")}`,amount_cents:r.amount_cents})),...o.map(r=>({created_at:r.created_at,player:n.get(r.player_id)||"—",product:"Unlimited Past Access",amount_cents:r.amount_cents})),...c.map(r=>({created_at:r.created_at,player:n.get(r.player_id)||"—",product:`Pack: ${r.pack_id||"—"}`,amount_cents:r.amount_cents}))].sort((r,$)=>new Date($.created_at)-new Date(r.created_at)).slice(0,100);e.innerHTML=`
    <h1>Revenue</h1>
    <div class="stat-grid">
      <div class="stat-card">
        <div class="stat-label">Total Revenue</div>
        <div class="stat-value">${L(u)}</div>
        <div class="stat-sub">${b(t.length+i.length+o.length+c.length)} purchases</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Daily Replays</div>
        <div class="stat-value">${L(v)}</div>
        <div class="stat-sub">${t.length} × $1.99</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Monthly Archives</div>
        <div class="stat-value">${L(_)}</div>
        <div class="stat-sub">${i.length} × $9.99</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Unlimited Access</div>
        <div class="stat-value">${L(h)}</div>
        <div class="stat-sub">${o.length} × $39.99</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Level Packs</div>
        <div class="stat-value">${L(a)}</div>
        <div class="stat-sub">${c.length} purchases</div>
      </div>
    </div>

    <div class="rev-bar-wrap">
      <h2>Revenue Breakdown</h2>
      <div class="rev-bar">
        <div class="rev-bar-seg rev-seg-daily"     style="width:${l(v)}%"></div>
        <div class="rev-bar-seg rev-seg-monthly"   style="width:${l(_)}%"></div>
        <div class="rev-bar-seg rev-seg-unlimited" style="width:${l(h)}%"></div>
        <div class="rev-bar-seg rev-seg-packs"     style="width:${l(a)}%"></div>
      </div>
      <div class="rev-legend">
        <div class="rev-legend-item"><div class="rev-dot" style="background:#0078b4"></div>Daily Replays ${l(v)}%</div>
        <div class="rev-legend-item"><div class="rev-dot" style="background:#0ea5e9"></div>Monthly Archives ${l(_)}%</div>
        <div class="rev-legend-item"><div class="rev-dot" style="background:#003d62"></div>Unlimited ${l(h)}%</div>
        <div class="rev-legend-item"><div class="rev-dot" style="background:#7c3aed"></div>Packs ${l(a)}%</div>
      </div>
    </div>

    <div class="table-card">
      <div class="table-card-header"><h2>Recent Purchases</h2></div>
      <div id="revenue-table-wrap"></div>
    </div>
  `;const k=[{key:"created_at",label:"Date",format:r=>T(r)},{key:"player",label:"Player"},{key:"product",label:"Product"},{key:"amount_cents",label:"Amount",format:r=>L(r)}];document.getElementById("revenue-table-wrap")?.appendChild(A(k,d,{defaultSort:"created_at",defaultAsc:!1}))}async function X(){const e=document.getElementById("section-islands");e.innerHTML="<h1>User Islands</h1>",E(e);const[t,i]=await Promise.all([f(()=>y.from("user_created_levels").select("id, player_id, name, share_id, updated_at, config").order("updated_at",{ascending:!1}).limit(200)),f(()=>y.from("players").select("player_id, display_name"))]),o=new Map(i.map(l=>[l.player_id,l.display_name||"Anonymous"])),c=t.map(l=>({...l,player_name:o.get(l.player_id)||"—",config_summary:l.config?Object.keys(l.config).slice(0,4).join(", ")+(Object.keys(l.config).length>4?"…":""):"—"})),m=document.getElementById("island-config-dialog"),n=document.getElementById("island-config-pre"),s=document.getElementById("dialog-island-name");e.innerHTML=`
    <div class="section-header">
      <h1>User Islands <span style="font-weight:400;font-size:16px;color:var(--text-muted)">(${c.length})</span></h1>
      <input class="search-input" id="island-search" placeholder="Search name or player…" type="search">
    </div>
    <div class="table-card">
      <div id="islands-table-wrap"></div>
    </div>
  `;const v=e.querySelector("#island-search"),_=e.querySelector("#islands-table-wrap"),h=[{key:"name",label:"Island Name",format:l=>l||'<em style="color:var(--text-muted)">Untitled</em>'},{key:"player_name",label:"Player"},{key:"updated_at",label:"Last Updated",format:l=>T(l)},{key:"share_id",label:"Share ID",format:l=>l?`<code class="copy-shareid" data-shareid="${l}" title="Click to copy">${l.slice(0,8)}…</code>`:"—"},{key:"config_summary",label:"Config Keys",sortable:!1},{key:"id",label:"Actions",sortable:!1,format:(l,d)=>`
      <div style="display:flex;gap:6px">
        <button class="btn-sm view-config-btn" data-id="${d.id}">
          <span class="material-icons">code</span><span>View</span>
        </button>
        <button class="btn-sm copy-json-btn" data-id="${d.id}">
          <span class="material-icons">content_copy</span><span>Copy</span>
        </button>
      </div>`}];_.addEventListener("click",async l=>{const d=l.target.closest(".copy-shareid");if(d){l.stopPropagation();const C=d.dataset.shareid;try{await navigator.clipboard.writeText(`${window.location.origin}/?island=${C}`);const p=d.textContent;d.textContent="Copied!",d.style.color="#059669",setTimeout(()=>{d.textContent=p,d.style.color=""},1500)}catch{}return}const k=l.target.closest(".view-config-btn"),r=l.target.closest(".copy-json-btn");if(!k&&!r)return;l.stopPropagation();const $=k||r,w=c.find(C=>C.id===$.dataset.id);if(w)if(k)s.textContent=w.name||"Untitled Island",n.textContent=JSON.stringify(w.config,null,2),m.showModal();else try{await navigator.clipboard.writeText(JSON.stringify(w.config,null,2)),r.classList.add("copied"),r.querySelector("span:last-child").textContent="Copied!",setTimeout(()=>{r.classList.remove("copied"),r.querySelector("span:last-child").textContent="Copy"},1800)}catch{r.querySelector("span:last-child").textContent="Failed"}});let a=c;function u(){_.innerHTML="",_.appendChild(A(h,a,{defaultSort:"updated_at",defaultAsc:!1}))}v.addEventListener("input",()=>{const l=v.value.toLowerCase();a=l?c.filter(d=>(d.name||"").toLowerCase().includes(l)||(d.player_name||"").toLowerCase().includes(l)):c,u()}),u()}F();
