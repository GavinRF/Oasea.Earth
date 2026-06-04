import{V as x,g as $,i as z,P as tt,S as Y,D as et,N as nt,k as j,I as T,a as ot,aj as at,d as it,M as rt,Q as J,E as K}from"./three-vJUBkHxL.js";const R=300,B=50,N=1.5,Q=1.2,st=3;let m=[],p=[],M=null,l=null,_=null,c=null,P=null,X=null,H=null,k=0;const D=new x,lt=.8,ct=1.4;let G=0,V=0;const ut=.45,dt=3,ht=28,S=new $,U=new J,b=new x;new x;new x;const W=new J;function It(t,a){X=t,H=a;const r=new tt(1,1),i=new Y({transparent:!0,depthWrite:!1,blending:nt,side:et,uniforms:{baseColor:{value:new z(13935988)}},vertexShader:`
      attribute float instanceOpacity;
      attribute vec3 instanceColor;
      varying float vOpacity;
      varying vec3 vColor;
      varying vec2 vUv;

      void main() {
        vOpacity = instanceOpacity;
        vColor = instanceColor;
        vUv = uv;
        vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform vec3 baseColor;
      varying float vOpacity;
      varying vec3 vColor;
      varying vec2 vUv;

      void main() {
        // Use instance color if available, otherwise use base color
        vec3 finalColor = length(vColor) > 0.0 ? vColor : baseColor;

        // Create soft dust-like appearance with radial gradient
        vec2 center = vUv - 0.5;
        float dist = length(center) * 2.0;
        float dustAlpha = 1.0 - smoothstep(0.0, 1.0, dist);
        dustAlpha = pow(dustAlpha, 1.5); // Softer edges

        gl_FragColor = vec4(finalColor, vOpacity * dustAlpha);
      }
    `});l=new j(r,i,R),l.renderOrder=2,l.count=0,l.isPersistent=!0,_=new Float32Array(R);const s=new Float32Array(R*3);l.geometry.setAttribute("instanceOpacity",new T(_,1)),l.geometry.setAttribute("instanceColor",new T(s,3)),t.add(l);const n=new ot(.15,.15,.15),e=new Y({transparent:!0,depthWrite:!1,uniforms:{baseColor:{value:new z(11045226)}},vertexShader:`
      attribute float instanceOpacity;
      attribute vec3 instanceColor;
      varying float vOpacity;
      varying vec3 vColor;

      void main() {
        vOpacity = instanceOpacity;
        vColor = instanceColor;
        vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform vec3 baseColor;
      varying float vOpacity;
      varying vec3 vColor;

      void main() {
        vec3 finalColor = length(vColor) > 0.0 ? vColor : baseColor;
        gl_FragColor = vec4(finalColor, vOpacity);
      }
    `});c=new j(n,e,B),c.renderOrder=2,c.count=0,c.isPersistent=!0,P=new Float32Array(B);const o=new Float32Array(B*3);c.geometry.setAttribute("instanceOpacity",new T(P,1)),c.geometry.setAttribute("instanceColor",new T(o,3)),t.add(c);const h=new at(1.46,32),u=new Y({transparent:!0,depthWrite:!1,blending:it,uniforms:{color:{value:new z(1,.6,.2)},intensity:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform vec3 color;
      uniform float intensity;
      varying vec2 vUv;

      void main() {
        // Concentrated radial falloff - bright center, soft edge
        float dist = length(vUv - 0.5) * 2.0;
        float alpha = 1.0 - smoothstep(0.0, 0.85, dist);
        alpha = alpha * alpha * intensity;

        gl_FragColor = vec4(color, alpha * 0.9);
      }
    `});M=new rt(h,u),M.rotation.x=-Math.PI/2,M.visible=!1,M.isPersistent=!0,t.add(M),m=[],p=[]}function zt(t,a,r=1,i=null){if(!t||!X)return;const s=i||new z(15258817);gt(t,a,r,s),Math.random()<(a?.7:.3)*r&&yt(t,a,r,s),Mt(t,a,r)}function Ut(t,a,r,i=null){if(!t||!X)return;const s=i||new z(15258817),n=r===2?40:25,e=r===2?15:8,o=r===2?1.5:1;ft(t,a,n,s,o),mt(t,a,e,s,o),pt(t,a,r),vt(r===2?1:.7)}function ft(t,a,r,i,s){if(l){for(let n=0;n<r;n++){let e,o=!1;m.length>=R?(e=0,o=!0):e=m.length;const h=n/r*Math.PI*2+Math.random()*.3,u=a*(.5+Math.random()*.5),y=new x(t.x+Math.cos(h)*u,t.y+Math.random()*.3,t.z+Math.sin(h)*u),f=(2.5+Math.random()*2)*s,C=(3+Math.random()*2.5)*s,g=new x(Math.cos(h)*f,C,Math.sin(h)*f),w=Math.random()<.25,d=Math.random()*Math.PI*2,E=1+Math.random()*.8,L=w?new x(Math.cos(d)*E,0,Math.sin(d)*E):null,O={instanceIndex:e,position:y.clone(),velocity:g,life:0,maxLife:N*(1+Math.random()*.5),initialSize:.45*(.8+Math.random()*.6),color:i.clone(),isFloating:w,windDirection:L};o?m[0]=O:m.push(O),b.set(O.initialSize,O.initialSize,O.initialSize),S.compose(y,U,b),l.setMatrixAt(e,S),_[e]=.4,l.geometry.attributes.instanceColor.setXYZ(e,i.r,i.g,i.b),l.count=m.length}l.instanceMatrix.needsUpdate=!0,l.geometry.attributes.instanceOpacity.needsUpdate=!0,l.geometry.attributes.instanceColor.needsUpdate=!0}}function mt(t,a,r,i,s){if(c){for(let n=0;n<r;n++){let e,o=!1;p.length>=B?(e=0,o=!0):e=p.length;const h=n/r*Math.PI*2+Math.random()*.4,u=a*(.3+Math.random()*.7),y=new x(t.x+Math.cos(h)*u,t.y+.2,t.z+Math.sin(h)*u),f=(3+Math.random()*2.5)*s,C=(4+Math.random()*3)*s,g=new x(Math.cos(h)*f,C,Math.sin(h)*f),w=new x((Math.random()-.5)*15,(Math.random()-.5)*15,(Math.random()-.5)*15),d={instanceIndex:e,position:y.clone(),velocity:g,angularVelocity:w,rotation:new K(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),life:0,maxLife:Q*(1+Math.random()*.5),initialSize:.5*(.7+Math.random()*.6),color:i.clone().multiplyScalar(.85),onGround:!1,groundTime:0};o?p[0]=d:p.push(d),U.setFromEuler(d.rotation),b.set(d.initialSize,d.initialSize,d.initialSize),S.compose(y,U,b),c.setMatrixAt(e,S),P[e]=.95,c.geometry.attributes.instanceColor.setXYZ(e,d.color.r,d.color.g,d.color.b),c.count=p.length}c.instanceMatrix.needsUpdate=!0,c.geometry.attributes.instanceOpacity.needsUpdate=!0,c.geometry.attributes.instanceColor.needsUpdate=!0}}function pt(t,a,r){if(!M)return;M.position.set(t.x,t.y+.1,t.z),M.visible=!0;const i=a*.8;M.scale.set(i,i,1),r===2?M.material.uniforms.color.value.setRGB(1,.8,.2):M.material.uniforms.color.value.setRGB(1,.5,.1),M.material.uniforms.intensity.value=r===2?1.5:1.2}function Mt(t,a,r){M&&(M.position.set(t.x,t.y+.1,t.z),M.visible=!0,a?M.material.uniforms.color.value.setRGB(1,.4,.2):M.material.uniforms.color.value.setRGB(.4,.8,1),M.material.uniforms.intensity.value=Math.min(1,r*1.2))}function gt(t,a,r,i){if(!l)return;const s=Math.floor((a?8:4)*r);for(let n=0;n<s;n++){let e,o=!1;m.length>=R?(e=0,o=!0):e=m.length;const h=Math.random()*Math.PI*2,u=a?2.5:1.5,y=a?3.5:2,f=new x(Math.cos(h)*u*(.5+Math.random()*.5),y*(.7+Math.random()*.3),Math.sin(h)*u*(.5+Math.random()*.5)),C=Math.random()*.5,g=Math.random()*Math.PI*2,w=new x(t.x+Math.cos(g)*C,t.y+Math.random()*.2,t.z+Math.sin(g)*C),d=Math.random()<.18,E=Math.random()*Math.PI*2,L=1.5+Math.random()*1,O=d?new x(Math.cos(E)*L,0,Math.sin(E)*L):null,F={instanceIndex:e,position:w.clone(),velocity:f,life:0,maxLife:N*(.8+Math.random()*.4),initialSize:.35*(.8+Math.random()*.6),color:i.clone(),isFloating:d,windDirection:O};o?m[0]=F:m.push(F),b.set(F.initialSize,F.initialSize,F.initialSize),S.compose(w,U,b),l.setMatrixAt(e,S),_[e]=.3,l.geometry.attributes.instanceColor.setXYZ(e,i.r,i.g,i.b),l.count=m.length}l.instanceMatrix.needsUpdate=!0,l.geometry.attributes.instanceOpacity.needsUpdate=!0,l.geometry.attributes.instanceColor.needsUpdate=!0}function yt(t,a,r,i){if(!c)return;const s=Math.floor((a?3:1)*r);for(let n=0;n<s;n++){let e,o=!1;p.length>=B?(e=0,o=!0):e=p.length;const h=Math.random()*Math.PI*2,u=1.5+Math.random()*1.5,y=new x(Math.cos(h)*u,2.5+Math.random()*1.5,Math.sin(h)*u),f=new x((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10),C=t.clone();C.y+=.2;const g={instanceIndex:e,position:C.clone(),velocity:y,angularVelocity:f,rotation:new K(0,0,0),life:0,maxLife:Q*(.8+Math.random()*.4),initialSize:.4*(.8+Math.random()*.4),color:i.clone().multiplyScalar(.8),onGround:!1,groundTime:0};o?p[0]=g:p.push(g),b.set(g.initialSize,g.initialSize,g.initialSize),S.compose(C,U,b),c.setMatrixAt(e,S),P[e]=.9,c.geometry.attributes.instanceColor.setXYZ(e,g.color.r,g.color.g,g.color.b),c.count=p.length}c.instanceMatrix.needsUpdate=!0,c.geometry.attributes.instanceOpacity.needsUpdate=!0,c.geometry.attributes.instanceColor.needsUpdate=!0}function Et(t=1){k=Math.min(Math.max(k,t),1)}function vt(t=1){G=Math.min(Math.max(G,t),1),V=0}function Dt(t){St(t),xt(t),Ct(t),bt(t)}function St(t){if(!l||m.length===0)return;let a=!1,r=!1,i=!1;const s=-9.8*t,n=2.5*t;H&&W.copy(H.quaternion);let e=0;for(;e<m.length;){const o=m[e];if(o.life+=t,o.life>=o.maxLife){const f=m.length-1;if(e!==f){const C=m[f];m[e]=C,C.instanceIndex=e,l.getMatrixAt(f,S),l.setMatrixAt(e,S),_[e]=_[f];const g=l.geometry.attributes.instanceColor;g.setXYZ(e,g.getX(f),g.getY(f),g.getZ(f)),i=!0,a=!0,r=!0}m.pop(),l.count=m.length;continue}o.isFloating?(o.velocity.y+=n,o.windDirection&&(o.velocity.x+=o.windDirection.x*t,o.velocity.z+=o.windDirection.z*t)):o.velocity.y+=s,o.velocity.multiplyScalar(.95),o.position.x+=o.velocity.x*t,o.position.y+=o.velocity.y*t,o.position.z+=o.velocity.z*t;const h=o.life/o.maxLife,u=.23*(1-h),y=o.initialSize*(1+h*2);b.set(y,y,y),S.compose(o.position,W,b),l.setMatrixAt(o.instanceIndex,S),a=!0,_[o.instanceIndex]=u,r=!0,e++}a&&(l.instanceMatrix.needsUpdate=!0),r&&(l.geometry.attributes.instanceOpacity.needsUpdate=!0),i&&(l.geometry.attributes.instanceColor.needsUpdate=!0)}function xt(t){if(!c||p.length===0)return;let a=!1,r=!1,i=!1;const s=-9.8*t;let n=0;for(;n<p.length;){const e=p[n];if(e.life+=t,e.life>=e.maxLife){const u=p.length-1;if(n!==u){const y=p[u];p[n]=y,y.instanceIndex=n,c.getMatrixAt(u,S),c.setMatrixAt(n,S),P[n]=P[u];const f=c.geometry.attributes.instanceColor;f.setXYZ(n,f.getX(u),f.getY(u),f.getZ(u)),i=!0,a=!0,r=!0}p.pop(),c.count=p.length;continue}if(e.onGround)e.groundTime+=t,e.life+=t*2;else{e.velocity.y+=s,e.position.x+=e.velocity.x*t,e.position.y+=e.velocity.y*t,e.position.z+=e.velocity.z*t,e.rotation.x+=e.angularVelocity.x*t,e.rotation.y+=e.angularVelocity.y*t,e.rotation.z+=e.angularVelocity.z*t,e.angularVelocity.multiplyScalar(.95);const u=-1;e.position.y<=u&&(e.position.y=u,Math.abs(e.velocity.y)<2?(e.onGround=!0,e.velocity.set(0,0,0),e.angularVelocity.set(0,0,0)):(e.velocity.y*=-.3,e.velocity.x*=.5,e.velocity.z*=.5))}const h=.9*(1-e.life/e.maxLife);U.setFromEuler(e.rotation),b.set(e.initialSize,e.initialSize,e.initialSize),S.compose(e.position,U,b),c.setMatrixAt(e.instanceIndex,S),a=!0,P[e.instanceIndex]=h,r=!0,n++}a&&(c.instanceMatrix.needsUpdate=!0),r&&(c.geometry.attributes.instanceOpacity.needsUpdate=!0),i&&(c.geometry.attributes.instanceColor.needsUpdate=!0)}function Ct(t){if(!M)return;const a=M.material.uniforms.intensity.value;if(a>0){const r=a-t*st;M.material.uniforms.intensity.value=Math.max(0,r),r<=0&&(M.visible=!1)}}function bt(t){if(D.set(0,0,0),k>0){const a=lt*k*k;D.set((Math.random()-.5)*2*a,(Math.random()-.5)*2*a*1.3,(Math.random()-.5)*2*a),k=Math.max(0,k-t*ct)}if(G>0){V+=t*ht;const a=ut*G*G;D.y-=Math.sin(V)*a,D.x+=Math.sin(V*.5)*a*.25,G=Math.max(0,G-t*dt)}}function _t(t){D.lengthSq()>1e-6&&t.position.add(D)}function Pt(t){D.lengthSq()>1e-6&&t.position.sub(D)}function Ot(t,a=null){if(!l)return;const r=a||new z(13939843),i=6;for(let s=0;s<i;s++){let n,e=!1;m.length>=R?(n=0,e=!0):n=m.length;const o=Math.random()*Math.PI*2,h=.3+Math.random()*1.8,u=new x(t.x+Math.cos(o)*h,t.y+Math.random()*.2,t.z+Math.sin(o)*h),y=o+Math.PI*.5,f=1.2+Math.random()*1.4,C=.3+Math.random()*.7,g=new x(Math.cos(y)*f+Math.cos(o)*C,.4+Math.random()*.8,Math.sin(y)*f+Math.sin(o)*C),w=Math.random()<.2,d={instanceIndex:n,position:u.clone(),velocity:g,life:0,maxLife:N*(.5+Math.random()*.5),initialSize:.38*(.8+Math.random()*.5),color:r.clone(),isFloating:w,windDirection:null};e?m[0]=d:m.push(d),b.set(d.initialSize,d.initialSize,d.initialSize),S.compose(u,U,b),l.setMatrixAt(n,S),_[n]=.35,l.geometry.attributes.instanceColor.setXYZ(n,r.r,r.g,r.b),l.count=m.length}l.instanceMatrix.needsUpdate=!0,l.geometry.attributes.instanceOpacity.needsUpdate=!0,l.geometry.attributes.instanceColor.needsUpdate=!0}function kt(t,a=null){if(!c)return;const r=a||new z(10518624),i=2;for(let s=0;s<i;s++){let n,e=!1;p.length>=B?(n=0,e=!0):n=p.length;const o=Math.random()*Math.PI*2,h=.2+Math.random()*1.2,u=new x(t.x+Math.cos(o)*h,t.y+.05,t.z+Math.sin(o)*h),y=o+Math.PI*.5,f=1.5+Math.random()*2,C=.5+Math.random()*1,g=new x(Math.cos(y)*f+Math.cos(o)*C,.2+Math.random()*.5,Math.sin(y)*f+Math.sin(o)*C),w=new x((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12),d={instanceIndex:n,position:u.clone(),velocity:g,angularVelocity:w,rotation:new K(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),life:0,maxLife:Q*(.6+Math.random()*.5),initialSize:.12+Math.random()*.1,color:r.clone().multiplyScalar(.85+Math.random()*.15),onGround:!1,groundTime:0};e?p[0]=d:p.push(d),U.setFromEuler(d.rotation),b.set(d.initialSize,d.initialSize,d.initialSize),S.compose(u,U,b),c.setMatrixAt(n,S),P[n]=.9,c.geometry.attributes.instanceColor.setXYZ(n,d.color.r,d.color.g,d.color.b),c.count=p.length}c.instanceMatrix.needsUpdate=!0,c.geometry.attributes.instanceOpacity.needsUpdate=!0,c.geometry.attributes.instanceColor.needsUpdate=!0}const A=new z,I=new z,Z=new z,q=new z(15258817);function v(t,a){return t.setRGB(a.value.x,a.value.y,a.value.z)}function Gt(t,a){if(!t||!a)return Z.copy(q);const r=t.material;if(!r||!r.uniforms)return Z.copy(q);const i=r.uniforms,s=a.y;let n;return s<-16?(n=Math.max(0,Math.min(1,(s+16)/6)),n=n*n*(3-2*n),v(A,i.oceanDeepColor),v(I,i.oceanMidColor)):s<-10?(n=(s+16)/6,v(A,i.oceanDeepColor),v(I,i.oceanMidColor)):s<-4?(n=(s+10)/6,v(A,i.oceanMidColor),v(I,i.deepColor)):s<-3?(n=(s+4)/1,v(A,i.deepColor),v(I,i.shallowColor)):s<-1?(n=(s+3)/2,v(A,i.shallowColor),v(I,i.lowColor)):s<.5?(n=(s+1)/1.5,v(A,i.lowColor),v(I,i.midLowColor)):s<1.5?(n=(s-.5)/1,v(A,i.midLowColor),v(I,i.midColor)):s<2.5?(n=(s-1.5)/1,v(A,i.midColor),v(I,i.midHighColor)):s<3.5?(n=(s-2.5)/1,v(A,i.midHighColor),v(I,i.highColor)):(n=Math.min((s-3.5)/2,1),v(A,i.highColor),v(I,i.peakColor)),Z.copy(A).lerp(I,n)}function Ft(){X&&(m=[],p=[],l&&(l.count=0),c&&(c.count=0),M&&(M.visible=!1,M.material.uniforms.intensity.value=0))}export{kt as a,_t as b,Ft as c,zt as d,Ot as e,Ut as f,Gt as g,It as i,Pt as r,Et as t,Dt as u};
