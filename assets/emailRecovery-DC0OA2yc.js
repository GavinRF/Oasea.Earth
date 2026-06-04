import{g as u,s as g,i as E}from"./levelManager-CXaHbJff.js";import{s as o}from"./supabaseConfig-BCu5G7WU.js";import"./supabase-qp4a7gwM.js";import"./toast-DFQg6cek.js";import"./packState-BDM9-7SC.js";import"./haptics-CVC700rQ.js";import"./audioManager-BjdXWEiE.js";import"./soundtrack-v1-DAn48QlH.js";import"./three-vJUBkHxL.js";import"./physics-CKC5f6tm.js";import"./physicsQueue-CYlIB816.js";import"./emailRecovery-DC0OA2yc.js";async function y(){if(!o)return console.warn("Supabase not configured"),null;try{const t=u(),{data:e,error:n}=await o.from("players").select("email, email_verified").eq("player_id",t).single();return n?(console.error("Error fetching player email:",n),null):e?.email||null}catch(t){return console.error("Error in getPlayerEmail:",t),null}}async function p(t){if(!o)return{success:!1,error:"Supabase not configured"};if(!t||!t.includes("@"))return{success:!1,error:"Invalid email address"};try{const e=u(),{data:n,error:a}=await o.rpc("set_player_email",{p_player_id:e,p_email:t.toLowerCase().trim()});return a?(console.error("Error setting email:",a),{success:!1,error:"Failed to set email"}):n===!1?{success:!1,error:"Email already in use by another account"}:{success:!0}}catch(e){return console.error("Error in setPlayerEmail:",e),{success:!1,error:"An error occurred"}}}async function b(t){try{const e=await g.getPlayerScores(t,500);if(e.length===0){console.log("No scores found for this player");return}const n=new Map;e.forEach(s=>{if(!E(s.levelId)){const r=n.get(s.levelId),i=s.waterPercentage>=.9?3:s.waterPercentage>=.7?2:1;(!r||i>r.stars)&&n.set(s.levelId,{levelId:s.levelId,timestamp:s.timestamp,stars:i,completed:!0})}});const a=Array.from(n.values());if(localStorage.setItem("completedLevels",JSON.stringify(a)),a.length>0){const s=Math.max(...a.map(i=>i.levelId)),r=s>=21?21:s+1;localStorage.setItem("currentLevelId",r.toString()),console.log(`✅ Restored level progression: ${a.length} levels completed, current level: ${r}`)}else localStorage.setItem("currentLevelId","1"),console.log("✅ No regular levels completed, starting at level 1")}catch(e){console.error("Error restoring level progression:",e)}}async function h(t){if(!o)return{success:!1,error:"Supabase not configured"};if(!t||!t.includes("@"))return{success:!1,error:"Invalid email address"};try{const{data:e,error:n}=await o.functions.invoke("send-recovery-email",{body:{email:t.toLowerCase().trim()}});return n?(console.error("Error requesting recovery:",n),{success:!1,error:"Failed to send recovery email"}):{success:!0,message:e.message||"If that email is registered, you will receive a recovery link."}}catch(e){return console.error("Error in requestRecovery:",e),{success:!1,error:"An error occurred"}}}async function I(t){if(!o)return{success:!1,error:"Supabase not configured"};if(!t)return{success:!1,error:"Invalid recovery token"};try{const{data:e,error:n}=await o.functions.invoke("verify-recovery-token",{body:{token:t}});return n?(console.error("Error verifying token:",n),{success:!1,error:"Invalid or expired recovery token"}):e.success?(localStorage.setItem("oasea_player_id",e.player_id),e.display_name&&(localStorage.setItem("oasea_player_name",e.display_name),localStorage.setItem("oasea_player_name_set","true")),console.log("✅ Account recovered:",e.player_id),await b(e.player_id),{success:!0,playerId:e.player_id,displayName:e.display_name}):{success:!1,error:e.error||"Invalid recovery token"}}catch(e){return console.error("Error in verifyRecoveryToken:",e),{success:!1,error:"An error occurred"}}}function F(){const t=document.getElementById("stats-content");if(!t||document.getElementById("email-management-section"))return;const e=document.createElement("div");e.id="email-management-section",e.className="email-management-section",e.innerHTML=`
    <div class="stat-card email-card">
      <h5>Account Recovery</h5>
      <p style="font-size: 0.9em; opacity: 0.8; margin-bottom: 10px;">
        Save your email to recover your account.
      </p>
      <div id="email-status">
        <div class="email-loading">
          <div class="spinner"></div>
        </div>
      </div>
    </div>
  `,t.insertBefore(e,t.firstChild),v()}async function v(){const t=document.getElementById("email-status");if(!t)return;const e=await y();e?(t.innerHTML=`
      <div class="email-set">
        <span class="material-icons" style="color: #4CAF50;">check_circle</span>
        <span style="margin-left: 8px;">${e}</span>
      </div>
      <button id="change-email-btn" class="secondary-btn">
        Change Email
      </button>
      <div style="margin-top: 15px; text-align: center;">
        <a href="#" id="stats-recovery-link" style="font-size: 0.85em; opacity: 0.7; text-decoration: none; color: inherit;">
          <span class="material-icons" style="font-size: 14px; vertical-align: middle;">restore</span>
          Recover a different account
        </a>
      </div>
    `,document.getElementById("change-email-btn")?.addEventListener("click",c),document.getElementById("stats-recovery-link")?.addEventListener("click",n=>{n.preventDefault(),l()})):(t.innerHTML=`
      <button id="add-email-btn" class="play-btn">
        <span class="material-icons">email</span>
        Add Email
      </button>
      <div style="margin-top: 15px; text-align: center;">
        <a href="#" id="stats-recovery-link" style="font-size: 0.85em; opacity: 0.7; text-decoration: none; color: inherit;">
          <span class="material-icons" style="font-size: 14px; vertical-align: middle;">restore</span>
          Recover account
        </a>
      </div>
    `,document.getElementById("add-email-btn")?.addEventListener("click",c),document.getElementById("stats-recovery-link")?.addEventListener("click",n=>{n.preventDefault(),l()}))}function c(){const t=document.getElementById("email-prompt-modal");if(!t)return k(),c();t.style.display="flex";const e=document.getElementById("email-input");e&&(e.value="",e.focus())}function k(){const t=document.createElement("div");t.id="email-prompt-modal",t.className="modal",t.style.display="none",t.innerHTML=`
    <div class="modal-content score-content">
      <h2>Save Your Account</h2>
      <p style="text-align: center; margin-bottom: 20px;">
        Enter your email to enable account recovery.<br>
        <small style="opacity: 0.7;">Your email is only used for account recovery.</small>
      </p>

      <div class="name-input-container">
        <input
          type="email"
          id="email-input"
          placeholder="your@email.com"
          autocomplete="email"
        />
      </div>

      <div id="email-error" class="error-message" style="display: none;"></div>

      <button id="save-email-btn" class="play-btn">
        <span class="material-icons">check</span>
        Save Email
      </button>

      <button id="cancel-email-btn" class="secondary-btn" style="margin-top: 10px;">
        Cancel
      </button>
    </div>
  `,document.body.appendChild(t),document.getElementById("save-email-btn")?.addEventListener("click",d),document.getElementById("cancel-email-btn")?.addEventListener("click",()=>{t.style.display="none"}),t.addEventListener("click",e=>{e.target===t&&(t.style.display="none")}),document.getElementById("email-input")?.addEventListener("keypress",e=>{e.key==="Enter"&&d()})}async function d(){const t=document.getElementById("email-input"),e=document.getElementById("email-error"),n=document.getElementById("save-email-btn");if(!t||!e||!n)return;const a=t.value.trim();if(!a||!a.includes("@")){e.textContent="Please enter a valid email address",e.style.display="block";return}n.disabled=!0,n.innerHTML='<span class="material-icons rotating">hourglass_empty</span> Saving...';const s=await p(a);s.success?(e.style.display="none",n.innerHTML='<span class="material-icons">check</span> Saved!',setTimeout(()=>{document.getElementById("email-prompt-modal").style.display="none",n.disabled=!1,n.innerHTML='<span class="material-icons">check</span> Save Email',v()},1500)):(e.textContent=s.error||"Failed to save email",e.style.display="block",n.disabled=!1,n.innerHTML='<span class="material-icons">check</span> Save Email')}function z(){const e=new URLSearchParams(window.location.search).get("token");e&&f(e),x()}async function f(t){const e=document.getElementById("recovery-modal");if(!e)return L(),f(t);e.style.display="flex";const n=document.getElementById("recovery-status");if(!n)return;n.innerHTML=`
    <div class="stats-loading-animation">
      <div class="drop"></div>
      <div class="drop"></div>
      <div class="drop"></div>
      <div class="collection"></div>
    </div>
    <p>Recovering your account...</p>
  `;const a=await I(t);a.success?(n.innerHTML=`
      <div style="text-align: center;">
        <span class="material-icons" style="font-size: 64px; color: #4CAF50;">check_circle</span>
        <h2>Welcome Back${a.displayName?", "+a.displayName:""}!</h2>
        <p>Your account has been recovered successfully.</p>
        <button id="continue-btn" class="play-btn" style="margin-top: 20px;">
          <span class="material-icons">play_arrow</span>
          Continue Playing
        </button>
      </div>
    `,document.getElementById("continue-btn")?.addEventListener("click",()=>{e.style.display="none",window.history.replaceState({},document.title,window.location.pathname),window.location.reload()})):(n.innerHTML=`
      <div style="text-align: center;">
        <span class="material-icons" style="font-size: 64px; color: #f44336;">error</span>
        <h2>Recovery Failed</h2>
        <p>${a.error||"Invalid or expired recovery link."}</p>
        <button id="try-again-btn" class="secondary-btn" style="margin-top: 20px;">
          Request New Link
        </button>
      </div>
    `,document.getElementById("try-again-btn")?.addEventListener("click",()=>{e.style.display="none",l()}))}function L(){const t=document.createElement("div");t.id="recovery-modal",t.className="modal",t.style.display="none",t.innerHTML=`
    <div class="modal-content score-content">
      <h2>Account Recovery</h2>
      <div id="recovery-status">
        <!-- Populated dynamically -->
      </div>
    </div>
  `,document.body.appendChild(t)}function l(){const t=document.getElementById("recovery-request-modal");if(!t)return B(),l();t.style.display="flex";const e=document.getElementById("recovery-email-input");e&&(e.value="",e.focus());const n=document.getElementById("recovery-request-status");n&&(n.style.display="none")}function B(){const t=document.createElement("div");t.id="recovery-request-modal",t.className="modal",t.style.display="none",t.innerHTML=`
    <div class="modal-content score-content">
      <h2>Recover Your Account</h2>
      <p style="text-align: center; margin-bottom: 20px;">
        Enter the email you used to save your account.
      </p>

      <div class="name-input-container">
        <input
          type="email"
          id="recovery-email-input"
          placeholder="your@email.com"
          autocomplete="email"
        />
      </div>

      <div id="recovery-request-status" class="info-message" style="display: none;"></div>

      <button id="send-recovery-btn" class="play-btn">
        <span class="material-icons">email</span>
        Send Recovery Link
      </button>

      <button id="cancel-recovery-btn" class="secondary-btn" style="margin-top: 10px;">
        Cancel
      </button>
    </div>
  `,document.body.appendChild(t),document.getElementById("send-recovery-btn")?.addEventListener("click",m),document.getElementById("cancel-recovery-btn")?.addEventListener("click",()=>{t.style.display="none"}),t.addEventListener("click",e=>{e.target===t&&(t.style.display="none")}),document.getElementById("recovery-email-input")?.addEventListener("keypress",e=>{e.key==="Enter"&&m()})}async function m(){const t=document.getElementById("recovery-email-input"),e=document.getElementById("recovery-request-status"),n=document.getElementById("send-recovery-btn");if(!t||!e||!n)return;const a=t.value.trim();if(!a||!a.includes("@")){e.textContent="Please enter a valid email address",e.className="error-message",e.style.display="block";return}n.disabled=!0,n.innerHTML='<span class="material-icons rotating">hourglass_empty</span> Sending...';const s=await h(a);s.success?(e.textContent=s.message||"Check your email for a recovery link!",e.className="info-message",e.style.display="block",n.innerHTML='<span class="material-icons">check</span> Sent!',setTimeout(()=>{document.getElementById("recovery-request-modal").style.display="none",n.disabled=!1,n.innerHTML='<span class="material-icons">email</span> Send Recovery Link'},3e3)):(e.textContent=s.error||"Failed to send recovery email",e.className="error-message",e.style.display="block",n.disabled=!1,n.innerHTML='<span class="material-icons">email</span> Send Recovery Link')}function x(){const t=document.getElementById("splash-buttons");if(!t||document.getElementById("recovery-link")||localStorage.getItem("oasea_player_id")!==null)return;const n=document.createElement("button");n.id="recovery-link",n.className="secondary-btn",n.style.marginTop="10px",n.innerHTML=`
    <span class="material-icons" style="font-size: 16px;">restore</span>
    Recover Account
  `,n.addEventListener("click",l),t.appendChild(n)}function Y(t=null){y().then(e=>{e||setTimeout(()=>{const n=document.getElementById("first-completion-email-modal");if(!n)S(),setTimeout(()=>{const a=document.getElementById("first-completion-email-modal");if(a.style.display="flex",t){const s=document.getElementById("first-completion-email-input");s&&(s.value=t)}},100);else if(n.style.display="flex",t){const a=document.getElementById("first-completion-email-input");a&&(a.value=t)}},1500)})}function S(){const t=document.createElement("div");t.id="first-completion-email-modal",t.className="modal",t.style.display="none",t.innerHTML=`
    <div class="modal-content score-content">
      <h2>Protect Your Purchase</h2>

      <p style="text-align: center; margin-bottom: 20px; font-size: 0.9em; opacity: 0.8;">
       Add an email to recover your purchase if you ever clear your browser data or switch devices.
      </p>

      <div class="name-input-container">
        <input
          type="email"
          id="first-completion-email-input"
          placeholder="your@email.com"
          autocomplete="email"
        />
      </div>

      <div id="first-completion-email-error" class="error-message" style="display: none;"></div>

      <button id="save-first-completion-email-btn" class="play-btn">
        <span class="material-icons">check</span>
        Save Email
      </button>

      <button id="skip-email-btn" class="secondary-btn" style="margin-top: 10px;">
        Skip for Now
      </button>
    </div>
  `,document.body.appendChild(t),document.getElementById("save-first-completion-email-btn")?.addEventListener("click",async()=>{const e=document.getElementById("first-completion-email-input"),n=document.getElementById("first-completion-email-error"),a=document.getElementById("save-first-completion-email-btn");if(!e||!n||!a)return;const s=e.value.trim();if(!s||!s.includes("@")){n.textContent="Please enter a valid email address",n.style.display="block";return}a.disabled=!0,a.innerHTML='<span class="material-icons rotating">hourglass_empty</span> Saving...';const r=await p(s);r.success?(n.style.display="none",a.innerHTML='<span class="material-icons">check</span> Saved!',setTimeout(()=>{t.style.display="none",a.disabled=!1,a.innerHTML='<span class="material-icons">check</span> Save Email'},1500)):(n.textContent=r.error||"Failed to save email",n.style.display="block",a.disabled=!1,a.innerHTML='<span class="material-icons">check</span> Save Email')}),document.getElementById("skip-email-btn")?.addEventListener("click",()=>{t.style.display="none"}),document.getElementById("first-completion-email-input")?.addEventListener("keypress",e=>{e.key==="Enter"&&document.getElementById("save-first-completion-email-btn")?.click()})}export{y as getPlayerEmail,F as initEmailManagementUI,z as initRecoveryFlow,h as requestRecovery,p as setPlayerEmail,Y as showEmailPromptForPayingCustomer,l as showRecoveryRequestModal,I as verifyRecoveryToken};
