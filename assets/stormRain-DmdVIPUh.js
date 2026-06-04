import{i as q,g as Rs,m as ii,Y as oe,S as Oe,N as en,ab as tn,M as te,v as $a,I as sn,k as an,P as ta,w as K,D as _e,T as on,t as pa,B as nn,u as Ni,V as $,d as Ae,r as Ka,C as rs,j as ga,l as Ht,n as ia,c as Mt,ae as Qa,ad as Ja,af as rn,Z as va,s as ln,b as pt,ag as cn,G as ls,p as sa,ah as hn,H as ds,J as un,K as ms,X as fn,ai as dn}from"./three-vJUBkHxL.js";import{a as mn,B as ps,m as Ps,n as pn,o as gn,p as ke,q as _a,t as vn,b2 as eo,k as to,aM as io,N as _n,a6 as so,aC as ao,aZ as oo,aR as wn,b3 as no,ax as ro,b4 as lo,b5 as co,b6 as yn}from"./levelManager-CXaHbJff.js";import{q as Mn,C as xn}from"./physicsQueue-CYlIB816.js";import{i as Sn,a as ho,p as Tn,s as Dn,P as bn,Q as Cn,R as An,S as Rn,T as Pn,K as uo,d as Fn,c as In,b as fo,k as aa,l as oa,O as na,v as mo,L as Wn,U as zn,V as Ln,m as po,W as go,X as Ui,Y as En,Z as On,_ as kn,$ as Bn}from"./audioManager-BjdXWEiE.js";import{c as Hn,b as Vn,j as Nn,d as vo,k as _o,l as Fs,m as Un,h as Yn,f as Xn,n as Zn}from"./haptics-CVC700rQ.js";import{g as Vt,d as Yi,f as wa}from"./sculptEffects-HepbQ-tR.js";import{showToast as Gn}from"./toast-DFQg6cek.js";class qn{constructor(e,i={}){this.terrain=e,this.positions=e.geometry.attributes.position;const s=e.config.segments,a=(s+1)*(s+1);this.segments=s,this.vps=s+1,this.topVertexCount=a,this.config={numSources:i.numSources??3,sourceEmitRate:i.sourceEmitRate??.8,evaporationRate:i.evaporationRate??.004,flowSpeed:i.flowSpeed??6,maxWaterDepth:i.maxWaterDepth??2.5,waterLevel:i.waterLevel??-1.5,waterColor:i.waterColor||new q(5618687),waterColorDeep:i.waterColorDeep||new q(1731253),foamColor:i.foamColor||new q(14544639)},this.time=0,this._smoothDepth=new Float32Array(a).fill(0),this.waterDepth=new Float32Array(a).fill(0),this._hBuf=new Float32Array(a),this._deltaBuf=new Float32Array(a),this._canyonSnap=new Float32Array(a),this._isSpike=new Uint8Array(a),this._isWaterfallImpact=new Uint8Array(a),this._isFlowingBuf=new Uint8Array(a),this._flowTargetBuf=new Int32Array(a),this._surfaceHBuf=new Float32Array(a),this._nIdx=new Int32Array(8),this._nWgt=new Float32Array(8),this._WET_ADD=.003,this._WET_REMOVE=.001,this._isWet=new Uint8Array(a),this._wetList=new Int32Array(a),this._wetSlot=new Int32Array(a).fill(-1),this._wetCount=0,this._isVisible=new Uint8Array(a),this._VIS_SHOW=.02,this._VIS_HIDE=.007,this._VIS_MIN_SHOW=.012,this._spikeFade=new Float32Array(a).fill(1),this._isTouched=new Uint8Array(a),this._touchedList=new Int32Array(a),this._flowingList=new Int32Array(a),this._flowingCount=0,this._impactPositions=[],this._waterfallSplashZones=[],this._mistSpawnPositions=[],this._mistSpawnTimer=0,this._mistMesh=null,this._mistMatrix=new Rs,this._splashSpawnTimer=0,this._splashMesh=null,this._splashMatrix=new Rs,this._wetnessTimer=0,this._simSkipFrame=0,this._syncSkipFrame=0,this.waterSources=[],this._active=!1,this._findWaterSources(),this._createWaterMesh(),this._initMistSystem(),this._initSplashSystem(),this.waterMesh&&(this.waterMesh.visible=!1),this._mistMesh&&(this._mistMesh.visible=!1),this._splashMesh&&(this._splashMesh.visible=!1)}activate(){this._active=!0,this.waterMesh&&(this.waterMesh.visible=!0),this._mistMesh&&(this._mistMesh.visible=!0),this._splashMesh&&(this._splashMesh.visible=!0)}deactivate(){this._active=!1,this.waterMesh&&(this.waterMesh.visible=!1),this._mistMesh&&(this._mistMesh.visible=!1),this._splashMesh&&(this._splashMesh.visible=!1)}_wetAdd(e){this._isWet[e]||(this._isWet[e]=1,this._wetSlot[e]=this._wetCount,this._wetList[this._wetCount++]=e)}_wetRemove(e){if(!this._isWet[e])return;this._isWet[e]=0;const i=this._wetSlot[e],s=this._wetList[--this._wetCount];this._wetList[i]=s,this._wetSlot[s]=i,this._wetSlot[e]=-1}_findWaterSources(){const{topVertexCount:e}=this,{islandRadius:i,size:s}=this.terrain.config,a=s/(this.config.numSources+1),o=5.2,n=[];for(let p=0;p<e;p++){const d=this.positions.getX(p),l=this.positions.getY(p),u=this.positions.getZ(p);Math.sqrt(d*d+l*l)<i*.72&&u<=o&&n.push({index:p,h:u,x:d,y:l})}n.sort((p,d)=>d.h-p.h);for(const p of n){if(this.waterSources.length>=this.config.numSources)break;this.waterSources.some(l=>{const u=p.x-l.x,c=p.y-l.y;return Math.sqrt(u*u+c*c)<a})||this.waterSources.push(p)}}_createWaterMesh(){const{topVertexCount:e,vps:i,segments:s}=this,a=new ii,o=new Float32Array(e*3);for(let l=0;l<e;l++)o[l*3]=this.positions.getX(l),o[l*3+1]=this.positions.getY(l),o[l*3+2]=this.positions.getZ(l);const n=new Float32Array(e*2);for(let l=0;l<e;l++){const u=Math.floor(l/i),c=l%i;n[l*2]=c/s,n[l*2+1]=u/s}const p=[];for(let l=0;l<s;l++)for(let u=0;u<s;u++){const c=l*i+u,h=c+1,f=c+i,r=f+1;p.push(f,h,c,f,r,h)}this._posAttr=new oe(o,3),this._depthAttr=new oe(new Float32Array(e),1),this._fadeAttr=new oe(new Float32Array(e).fill(1),1),a.setAttribute("position",this._posAttr),a.setAttribute("waterDepth",this._depthAttr),a.setAttribute("oceanFade",this._fadeAttr),a.setIndex(p),a.computeVertexNormals(),this.waterGeometry=a;const d=new Oe({uniforms:{uWaterColor:{value:this.config.waterColor},uWaterColorDeep:{value:this.config.waterColorDeep},uFoamColor:{value:this.config.foamColor},uTime:{value:0}},vertexShader:`
        attribute float waterDepth;
        attribute float oceanFade;

        varying vec3  vWorldPos;
        varying vec3  vWorldNormal;
        varying float vWaterDepth;
        varying float vOceanFade;

        void main() {
          vWaterDepth = waterDepth;
          vOceanFade  = oceanFade;

          vec3 pos = position;
          pos.z += 0.084;

          vec4 worldPos4 = modelMatrix * vec4(pos, 1.0);
          vWorldPos    = worldPos4.xyz;
          vWorldNormal = normalize(mat3(modelMatrix) * vec3(0.0, 0.0, 1.0));

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,fragmentShader:`
        uniform vec3  uWaterColor;
        uniform vec3  uWaterColorDeep;
        uniform vec3  uFoamColor;
        uniform float uTime;

        varying vec3  vWorldPos;
        varying vec3  vWorldNormal;
        varying float vWaterDepth;
        varying float vOceanFade;

        void main() {
          if (vWaterDepth < 0.008) discard;

          float depth01 = smoothstep(0.0, 2.0, vWaterDepth);
          vec3 col = mix(uWaterColor, uWaterColorDeep, depth01);

          // ── Animated surface motion ─────────────────────────────────────────
          // The mesh is flat (geometry is owned by the hydrology sim), so we fake
          // surface motion in-shader. Gate is loose — pools are shallow sheets, so
          // we only keep the very thinnest shoreline film calm for crisp edges.
          vec2  p = vWorldPos.xz;
          float t = uTime;
          float ripple = smoothstep(0.012, 0.10, vWaterDepth);

          // Wave HEIGHT field — drives a visible moving light/dark band across the
          // whole surface (camera-independent, unlike specular glints).
          float waveH = sin(p.x * 2.1 + p.y * 1.3 + t * 1.4)
                      + sin(p.x * 1.3 - p.y * 2.4 + t * 1.9) * 0.7
                      + sin(p.x * 4.2 + p.y * 3.1 + t * 2.6) * 0.4;
          col *= 1.0 + ripple * waveH * 0.07;

          // Ripple NORMAL (gradient of the wave field) for travelling highlights
          vec3 N = vWorldNormal;
          N.x += ripple * (0.16 * cos(p.x * 2.1 + p.y * 1.3 + t * 1.4)
                         + 0.10 * cos(p.x * 1.3 - p.y * 2.4 + t * 1.9));
          N.z += ripple * (0.16 * cos(p.x * 1.3 - p.y * 2.4 + t * 1.9)
                         + 0.10 * cos(p.x * 4.2 + p.y * 3.1 + t * 2.6));
          N = normalize(N);

          // Blinn-Phong specular off the rippling normal — highlights now travel
          vec3 V    = normalize(cameraPosition - vWorldPos);
          vec3 L    = normalize(vec3(0.8, 2.0, 0.5));
          vec3 H    = normalize(L + V);
          float spec = pow(max(dot(N, H), 0.0), 90.0) * 0.95;
          col += vec3(spec);

          // Fine moving sparkle — sharp, sparse glints that drift across the surface
          float sparkle = pow(max(dot(N, H), 0.0), 400.0) * ripple;
          col += vec3(sparkle * 0.6);

          // Static foam at shallow edges
          float foam = smoothstep(0.12, 0.0, vWaterDepth) * 0.65;
          col = mix(col, uFoamColor, clamp(foam, 0.0, 0.55));

          float alpha = mix(0.60, 0.92, depth01) * vOceanFade;
          if (alpha < 0.01) discard;
          gl_FragColor = vec4(col, alpha);
        }
      `,transparent:!0,depthWrite:!1,side:tn,toneMapped:!1,blending:en});this.waterMesh=new te(a,d),this.waterMesh.rotation.x=-Math.PI/2,this.waterMesh.position.copy(this.terrain.mesh.position),this.waterMesh.scale.copy(this.terrain.mesh.scale),this.waterMesh.renderOrder=100,this.terrain.mesh.parent&&this.terrain.mesh.parent.add(this.waterMesh)}_syncPositionsSmooth(){const e=this._posAttr.array;this.positions;const i=this._hBuf,s=this._smoothDepth,a=this.waterDepth,o=this.topVertexCount,{vps:n,segments:p}=this,d=.025,l=.05,u=.65,c=.25,h=.7,f=this._isFlowingBuf,r=this._flowTargetBuf,m=this._surfaceHBuf,_=this._isWaterfallImpact,v=this._isSpike,w=this._flowingList;let x=this._flowingCount;for(let C=0;C<x;C++){const z=w[C];f[z]=0,r[z]=-1}x=0,_.fill(0),v.fill(0);const y=this.positions.array;for(let C=0;C<o;C++)m[C]=i[C]+a[C];const M=this._wetList,b=this._wetCount;for(let C=0;C<b;C++){const z=M[C];if(a[z]<.01)continue;const R=z/n|0,L=z-R*n,I=m[z];let V=.08,H=-1;if(L<p){const B=z+1,Z=I-m[B];Z>V&&(V=Z,H=B)}if(L>0){const B=z-1,Z=I-m[B];Z>V&&(V=Z,H=B)}if(R<p){const B=z+n,Z=I-m[B];Z>V&&(V=Z,H=B)}if(R>0){const B=z-n,Z=I-m[B];Z>V&&(V=Z,H=B)}H>=0&&(f[z]=1,r[z]=H,w[x++]=z)}this._flowingCount=x;for(let C=0;C<o;C++){if(!f[C])continue;const z=r[C];if(z<0)continue;if(!f[z]||a[z]>a[C]*1.1){_[z]=1;const R=z/n|0,L=z-R*n;L<p&&(_[z+1]=1),L>0&&(_[z-1]=1),R<p&&(_[z+n]=1),R>0&&(_[z-n]=1)}}for(let C=1;C<n-1;C++){const z=C*n;for(let A=1;A<n-1;A++){const R=z+A;if(s[R]<d)continue;const L=i[R];let I=-1/0;const V=R+1,H=R-1,B=R+n,Z=R-n,le=B+1,xe=B-1,Re=Z+1,mt=Z-1;s[V]>=d&&(I=Math.max(I,i[V]+s[V])),s[H]>=d&&(I=Math.max(I,i[H]+s[H])),s[B]>=d&&(I=Math.max(I,i[B]+s[B])),s[Z]>=d&&(I=Math.max(I,i[Z]+s[Z])),s[le]>=d&&(I=Math.max(I,i[le]+s[le])),s[xe]>=d&&(I=Math.max(I,i[xe]+s[xe])),s[Re]>=d&&(I=Math.max(I,i[Re]+s[Re])),s[mt]>=d&&(I=Math.max(I,i[mt]+s[mt])),L>I+l&&(v[R]=1)}}for(let C=0;C<o;C++)e[C*3+2]=v[C]?i[C]:i[C]+s[C];for(let C=1;C<n-1;C++){const z=C*n;for(let A=1;A<n-1;A++){const R=z+A;if(s[R]>=d||_[R])continue;let L=1/0,I=!1;const V=R+1,H=R-1,B=R+n,Z=R-n,le=B+1,xe=B-1,Re=Z+1,mt=Z-1;if(s[V]>=d&&!v[V]){const j=e[V*3+2];j<L&&(L=j),I=!0}if(s[H]>=d&&!v[H]){const j=e[H*3+2];j<L&&(L=j),I=!0}if(s[B]>=d&&!v[B]){const j=e[B*3+2];j<L&&(L=j),I=!0}if(s[Z]>=d&&!v[Z]){const j=e[Z*3+2];j<L&&(L=j),I=!0}if(s[le]>=d&&!v[le]){const j=e[le*3+2];j<L&&(L=j),I=!0}if(s[xe]>=d&&!v[xe]){const j=e[xe*3+2];j<L&&(L=j),I=!0}if(s[Re]>=d&&!v[Re]){const j=e[Re*3+2];j<L&&(L=j),I=!0}if(s[mt]>=d&&!v[mt]){const j=e[mt*3+2];j<L&&(L=j),I=!0}I&&L<1/0&&(e[R*3+2]=L)}}const P=this._canyonSnap;for(let C=0;C<o;C++)P[C]=e[C*3+2];for(let C=1;C<n-1;C++){const z=C*n;for(let A=1;A<n-1;A++){const R=z+A;if(s[R]<d||v[R]||_[R])continue;const L=P[R];let I=0,V=0,H=0;{const B=R+1;s[B]<d||v[B]?i[B]>L+u&&I++:(V+=P[B],H++)}{const B=R-1;s[B]<d||v[B]?i[B]>L+u&&I++:(V+=P[B],H++)}{const B=R+n;s[B]<d||v[B]?i[B]>L+u&&I++:(V+=P[B],H++)}{const B=R-n;s[B]<d||v[B]?i[B]>L+u&&I++:(V+=P[B],H++)}if(I>=2&&H>0){const B=V/H,Z=I*c;e[R*3+2]=L+(B-L)*(Z<h?Z:h)}}}this._impactPositions.length=0;const S=this.waterMesh.position,T=S.x,D=S.y,W=S.z;for(let C=0;C<o;C++)_[C]&&(a[C]<.01||this._impactPositions.push({x:y[C*3]+T,y:i[C]+s[C]+D,z:-y[C*3+1]+W}));const E=.5,k=3.24,X=this.config.waterLevel,N=this._waterfallSplashZones;N.length=0;const U=(C,z)=>{const A=N.length,R=Math.min(A,8);for(let L=A-R;L<A;L++){const I=N[L],V=C-I.x,H=z-I.z;if(V*V+H*H<k)return!0}return!1};for(let C=0;C<o;C++){if(!f[C])continue;const z=r[C];if(z<0)continue;const A=i[C];if(A<X)continue;const R=i[z];if(A-R<E)continue;let L,I,V;if(R<X){const H=(X-A)/(R-A),B=y[C*3],Z=y[C*3+1];L=B+H*(y[z*3]-B)+T,V=-(Z+H*(y[z*3+1]-Z))+W,I=X+D}else{L=y[z*3]+T;const H=this._smoothDepth[z];I=R+(H>0?H:0)+D,I<X+D&&(I=X+D),V=-y[z*3+1]+W}U(L,V)||N.push({x:L,y:I,z:V})}for(let C=2;C<n-2;C++){const z=C*n;for(let A=2;A<n-2;A++){const R=z+A;if(a[R]<.05)continue;const L=i[R];if(L<X)continue;const I=y[R*3],V=y[R*3+1],H=B=>{const Z=i[B];if(Z>=X)return;const le=(X-L)/(Z-L),xe=I+le*(y[B*3]-I)+T,Re=-(V+le*(y[B*3+1]-V))+W;U(xe,Re)||N.push({x:xe,y:X+D,z:Re})};A<p&&H(R+1),A>0&&H(R-1),C<p&&H(R+n),C>0&&H(R-n)}}this._posAttr.needsUpdate=!0}_simulateFlow(e){const{_touchedList:i,_isTouched:s,_wetList:a,_hBuf:o,_nIdx:n,_nWgt:p}=this,d=this.waterDepth,l=this._deltaBuf,u=this.config.flowSpeed*e,c=u>.04?.04:u,h=.002,f=this.config.maxWaterDepth,r=.25,m=this.segments,_=this.vps,v=this._WET_ADD,w=this._WET_REMOVE;let x=0;for(let y=0;y<this._wetCount;y++){const M=a[y],b=d[M];if(b<5e-4)continue;const P=M/_|0,S=M-P*_,T=o[M]+b;let D=0,W=0;if(S<m){const N=M+1,U=T-(o[N]+d[N]);U>h&&(n[W]=N,p[W]=U,D+=U,W++)}if(S>0){const N=M-1,U=T-(o[N]+d[N]);U>h&&(n[W]=N,p[W]=U,D+=U,W++)}if(P<m){const N=M+_,U=T-(o[N]+d[N]);U>h&&(n[W]=N,p[W]=U,D+=U,W++)}if(P>0){const N=M-_,U=T-(o[N]+d[N]);U>h&&(n[W]=N,p[W]=U,D+=U,W++)}if(W===0||D<=0)continue;const E=b*r,k=Math.min(D*c,E);if(k<=0)continue;s[M]||(s[M]=1,i[x++]=M),l[M]-=k;const X=1/D;for(let N=0;N<W;N++){const U=n[N];s[U]||(s[U]=1,i[x++]=U),l[U]+=k*(p[N]*X)}}for(let y=0;y<x;y++){const M=i[y],b=d[M]+l[M];d[M]=b>f?f:b<0?0:b,l[M]=0,s[M]=0,d[M]>=v?this._wetAdd(M):d[M]<w&&this._wetRemove(M)}}update(e){if(!this.waterMesh||!this._active||(this.time+=e,this.waterMesh.material.uniforms.uTime.value=this.time,this._simSkipFrame++,this._simSkipFrame<2))return;this._simSkipFrame=0;const i=e*2,s=i>.04?.04:i,a=this.topVertexCount,o=this.positions.array,n=this._hBuf;for(let A=0;A<a;A++)n[A]=o[A*3+2];const p=this.config.sourceEmitRate*s,d=this.waterSources,l=5.2,u=this.config.waterLevel;for(let A=0;A<d.length;A++){const R=d[A],L=n[R.index];L<=l&&L>=u&&(this.waterDepth[R.index]+=p,this._wetAdd(R.index))}this._simulateFlow(s);const c=this.waterDepth,h=this._smoothDepth,f=this.config.evaporationRate,r=.15,m=.4,_=1.8,v=1-Math.exp(-s/r),w=1-Math.exp(-s/m),x=1-Math.exp(-s/_),y=f>0?Math.exp(-f*s):1;if(f>0)for(let A=0;A<a;A++){let R=c[A]*y;R<3e-4&&(R=0),c[A]=R;const L=h[A],I=R>=L?v:R>=.01?w:x;h[A]=L+(R-L)*I}else for(let A=0;A<a;A++){const R=c[A],L=h[A],I=R>=L?v:R>=.01?w:x;h[A]=L+(R-L)*I}{let A=0;for(;A<this._wetCount;)c[this._wetList[A]]<this._WET_REMOVE?this._wetRemove(this._wetList[A]):A++}this._syncSkipFrame^=1,this._syncSkipFrame===0&&this._syncPositionsSmooth();const M=this._depthAttr.array,b=this._fadeAttr.array,P=this._hBuf,S=this._isSpike,T=u-1.05,D=1.05,W=this._isVisible,E=this._spikeFade,k=this._VIS_SHOW,X=this._VIS_HIDE,N=this._VIS_MIN_SHOW,U=1-Math.exp(-s/.5);for(let A=0;A<a;A++){let R=E[A];R+=((S[A]?0:1)-R)*U,E[A]=R;const L=h[A]*R;L>=k?W[A]=1:L<X&&(W[A]=0),M[A]=W[A]?L>N?L:N:0;const I=(P[A]-T)/D,V=I<0?0:I>1?1:I;b[A]=V*V*(3-2*V)}this._fadeAttr.needsUpdate=!0,this._depthAttr.needsUpdate=!0,this._mistSpawnPositions.length=0;const C=this._waterfallSplashZones,z=this._impactPositions;if(C.length>0)for(let A=0;A<C.length;A++)this._mistSpawnPositions.push(C[A]);else for(let A=0;A<z.length;A++)this._mistSpawnPositions.push(z[A]);this._updateMist(i),this._updateSplash(i),this._wetnessTimer+=i,this._wetnessTimer>=1&&(this._wetnessTimer=0,this._updateWetnessMap())}_makeParticlePool({max:e,sphereRadius:i,sphereDetail:s,color:a,opacityScale:o,renderOrder:n}){const p=new $a(i,s,s);p.setAttribute("iOpacity",new sn(new Float32Array(e),1));const d=new Oe({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new q(a)},uOpacityScale:{value:o}},vertexShader:`
        attribute float iOpacity;
        varying float vOpacity;
        void main() {
          vOpacity = iOpacity;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3  uColor;
        uniform float uOpacityScale;
        varying float vOpacity;
        void main() {
          gl_FragColor = vec4(uColor, vOpacity * uOpacityScale);
        }
      `}),l=new an(p,d,e);return l.renderOrder=n,l.count=0,this.terrain.mesh.parent&&this.terrain.mesh.parent.add(l),{mesh:l,max:e,X:new Float32Array(e),Y:new Float32Array(e),Z:new Float32Array(e),VX:new Float32Array(e),VY:new Float32Array(e),VZ:new Float32Array(e),Life:new Float32Array(e),MaxLife:new Float32Array(e)}}_initMistSystem(){const e=this._makeParticlePool({max:100,sphereRadius:.038,sphereDetail:5,color:14216959,opacityScale:.45,renderOrder:4});this._mistMesh=e.mesh,this._maxMist=e.max,this._mistActiveCount=0,this._mistX=e.X,this._mistY=e.Y,this._mistZ=e.Z,this._mistVX=e.VX,this._mistVY=e.VY,this._mistVZ=e.VZ,this._mistLife=e.Life,this._mistMaxLife=e.MaxLife}_updateMist(e){if(!this._mistMesh)return;const i=this._mistSpawnPositions;if(i.length===0){this._mistActiveCount>0&&(this._mistActiveCount=0);return}this._mistSpawnTimer+=e;const s=.09,a=this._maxMist-this._mistActiveCount;if(this._mistSpawnTimer>=s&&a>0){this._mistSpawnTimer=0;const u=Math.min(3,a);for(let c=0;c<u;c++){const h=i[Math.random()*i.length|0],f=Math.random()*Math.PI*2,r=Math.random()*.3,m=this._mistActiveCount++;this._mistX[m]=h.x+Math.cos(f)*r,this._mistY[m]=h.y+Math.random()*.25,this._mistZ[m]=h.z+Math.sin(f)*r,this._mistVX[m]=(Math.random()-.5)*.28,this._mistVY[m]=.32+Math.random()*.22,this._mistVZ[m]=(Math.random()-.5)*.28,this._mistLife[m]=0,this._mistMaxLife[m]=1.8+Math.random()*1.4}}const o=this._mistMesh,n=o.geometry.attributes.iOpacity.array,p=this._mistMatrix;let d=0;const l=p.elements;l[1]=l[2]=l[3]=l[4]=l[6]=l[7]=l[8]=l[9]=l[11]=0,l[15]=1;for(let u=0;u<this._mistActiveCount;u++){let c=this._mistLife[u]+e;if(c>=this._mistMaxLife[u])continue;this._mistX[u]+=this._mistVX[u]*e,this._mistY[u]+=this._mistVY[u]*e,this._mistZ[u]+=this._mistVZ[u]*e,this._mistLife[u]=c;const h=c/this._mistMaxLife[u],f=1+h*.9;l[0]=l[5]=l[10]=f,l[12]=this._mistX[u],l[13]=this._mistY[u],l[14]=this._mistZ[u],o.setMatrixAt(d,p),n[d]=1-h*h,d++}this._mistActiveCount=d,o.count=d,d>0&&(o.instanceMatrix.needsUpdate=!0,o.geometry.attributes.iOpacity.needsUpdate=!0)}_initSplashSystem(){const e=this._makeParticlePool({max:200,sphereRadius:.045,sphereDetail:4,color:16777215,opacityScale:.8,renderOrder:3});this._splashMesh=e.mesh,this._maxSplash=e.max,this._splashActiveCount=0,this._splashX=e.X,this._splashY=e.Y,this._splashZ=e.Z,this._splashVX=e.VX,this._splashVY=e.VY,this._splashVZ=e.VZ,this._splashLife=e.Life,this._splashMaxLife=e.MaxLife}_updateSplash(e){if(!this._splashMesh)return;const i=this._mistSpawnPositions;if(i.length===0){this._splashActiveCount>0&&(this._splashActiveCount=0);return}this._splashSpawnTimer+=e;const s=.055,a=this._maxSplash-this._splashActiveCount;if(this._splashSpawnTimer>=s&&a>0){this._splashSpawnTimer=0;const c=Math.min(5,a);for(let h=0;h<c;h++){const f=i[Math.random()*i.length|0],r=Math.random()*Math.PI*2,m=Math.random()*.22,_=this._splashActiveCount++;this._splashX[_]=f.x+Math.cos(r)*m,this._splashY[_]=f.y,this._splashZ[_]=f.z+Math.sin(r)*m,this._splashVX[_]=(Math.random()-.5)*1.4,this._splashVY[_]=1.8+Math.random()*2.2,this._splashVZ[_]=(Math.random()-.5)*1.4,this._splashLife[_]=0,this._splashMaxLife[_]=.35+Math.random()*.45}}const o=this._splashMesh,n=o.geometry.attributes.iOpacity.array,p=this._splashMatrix,d=9.8;let l=0;const u=p.elements;u[0]=u[5]=u[10]=u[15]=1,u[1]=u[2]=u[3]=u[4]=u[6]=u[7]=u[8]=u[9]=u[11]=0;for(let c=0;c<this._splashActiveCount;c++){let h=this._splashLife[c]+e;if(h>=this._splashMaxLife[c])continue;this._splashVY[c]-=d*e,this._splashX[c]+=this._splashVX[c]*e,this._splashY[c]+=this._splashVY[c]*e,this._splashZ[c]+=this._splashVZ[c]*e,this._splashLife[c]=h;const f=h/this._splashMaxLife[c];u[12]=this._splashX[c],u[13]=this._splashY[c],u[14]=this._splashZ[c],o.setMatrixAt(l,p),n[l]=1-f*f,l++}this._splashActiveCount=l,o.count=l,l>0&&(o.instanceMatrix.needsUpdate=!0,o.geometry.attributes.iOpacity.needsUpdate=!0)}_updateWetnessMap(){const e=this.terrain.wetnessMap;if(!e||!e.setWaterfalls)return;const i=this._waterfallSplashZones.length>0?this._waterfallSplashZones.slice(0,16):this._impactPositions.slice(0,16),s=32-i.length;if(s>0){const{vps:a,segments:o}=this,n=this._smoothDepth,p=this.positions,d=this._hBuf,l=this.waterMesh.position,u=this.config.waterLevel,c=.02,h=[],f=3;for(let m=0;m<a;m+=f)for(let _=0;_<a;_+=f){const v=m*a+_;n[v]>=c||d[v]<u||!(_<o&&n[v+1]>=c||_>0&&n[v-1]>=c||m<o&&n[v+a]>=c||m>0&&n[v-a]>=c)||h.push({x:p.getX(v)+l.x,y:d[v]+l.y,z:-p.getY(v)+l.z})}const r=Math.max(1,Math.floor(h.length/s));for(let m=0;m<h.length&&i.length<32;m+=r)i.push(h[m])}e.setWaterfalls(i)}dispose(){this.waterMesh&&(this.waterGeometry.dispose(),this.waterMesh.material.dispose(),this.waterMesh.parent&&this.waterMesh.parent.remove(this.waterMesh),this.waterMesh=null),this._mistMesh&&(this._mistMesh.geometry.dispose(),this._mistMesh.material.dispose(),this._mistMesh.parent&&this._mistMesh.parent.remove(this._mistMesh),this._mistMesh=null),this._splashMesh&&(this._splashMesh.geometry.dispose(),this._splashMesh.material.dispose(),this._splashMesh.parent&&this._splashMesh.parent.remove(this._splashMesh),this._splashMesh=null);const e=this.terrain.wetnessMap;e&&e.setWaterfalls&&e.setWaterfalls([]),this._mistX=this._mistY=this._mistZ=null,this._mistVX=this._mistVY=this._mistVZ=null,this._mistLife=this._mistMaxLife=null,this._splashX=this._splashY=this._splashZ=null,this._splashVX=this._splashVY=this._splashVZ=null,this._splashLife=this._splashMaxLife=null}}function Ul(t,e={}){return new qn(t,e)}function jn(t,e,i,s=0,a=0,o=.286,n=4.2,p=4.13){const d=t-s,l=e-a,u=n*.12;return(Math.sin((d*1+l*0)*u*1-i*.85)*.38+Math.sin((d*-.737+l*.676)*u*.71-i*.58)*.24+Math.sin((d*.087+l*-.996)*u*1.43+i*1.15)*.18+Math.sin((d*.609+l*.793)*u*.57-i*.42)*.12+Math.sin((d*-.985+l*-.174)*u*1.18-i*.73)*.08)*o*p}function Yl(t={}){const{waterLevel:e=-2.87}=t,i=1100,s=new ta(i,i,62,62),a=i-550,o=new Oe({transparent:!0,side:_e,depthWrite:!1,uniforms:{uTime:{value:0},uWaterColor:{value:new q(43212)},uShallowColor:{value:new q(6740463)},uShineColor:{value:new q(14531583)},fogColor:{value:new q(10541296)},fogNear:{value:180},fogFar:{value:400},uCurvature:{value:2e-5},uClipRadius:{value:a},uWaveAmplitude:{value:.16},uWaveFrequency:{value:2.2},uWaveSpeed:{value:1},uWaveTime:{value:0},uWaveAngle:{value:0},uWaveAngleCos:{value:1},uWaveAngleSin:{value:0},uWaveHeightMultiplier:{value:4.13},uMeshOffset:{value:new K(0,0)},uTerrainWidthX:{value:18},uTerrainWidthZ:{value:18},uTerrainHeight:{value:.15},uFoamEnabled:{value:!0},uWaterLevel:{value:e},uTerrainScaleX:{value:1},uTerrainScaleY:{value:1},uTerrainIrregularity:{value:1},uTerrainBayAngle:{value:0},uTerrainBayDepth:{value:0},uTerrainBayWidth:{value:0},uIslandGroupOffset:{value:new K(0,0)},uFoamHeightOffset:{value:-.0363},uUseHeightmap:{value:!1},uTerrainHeightmap:{value:null},uHeightmapWorldSize:{value:18},uHeightmapMinHeight:{value:-4.6},uHeightmapMaxHeight:{value:5.8},uReflectionTexture:{value:null},uReflectionEnabled:{value:!1},uReflectionStrength:{value:.35},uFresnelBias:{value:6.1},uFresnelScale:{value:.68},uFresnelPower:{value:1.84},uReflectionDistortion:{value:.004},uReflectionOffset:{value:new K(0,0)},uReflectionTint:{value:new q(1,1,1)},uReflectionMatrix:{value:new Rs},uWaterNormalMap:{value:null},uNormalMapStrength:{value:.65},uFoamWarpAmount:{value:1.2},uEnableStreaks:{value:!0},uEnableSparkle:{value:!0},uEnableNormalMap2:{value:!0}},vertexShader:`
      precision highp float;

      uniform float uTime;
      uniform float uCurvature;
      uniform float uWaveAmplitude;
      uniform float uWaveFrequency;
      uniform float uWaveHeightMultiplier;
      uniform float uWaveSpeed;
      uniform float uWaveTime;
      uniform float uWaveAngle;
      uniform float uWaveAngleCos;
      uniform float uWaveAngleSin;
      uniform vec2 uMeshOffset;
      uniform vec2 uIslandGroupOffset;
      uniform float uTerrainWidthX;
      uniform float uTerrainWidthZ;
      varying vec3 vPosition;
      varying vec3 vWorldPosition;
      varying highp vec2 vOriginalWorldXZ; // highp: world-space coords need full precision for UV calc
      varying vec3 vViewPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      varying float vFogDepth;
      varying highp vec4 vClipSpace; // highp: perspective divide (xy/w) for reflection UVs
      varying highp vec4 vReflectionCoord; // world pos projected into mirror-camera UV space
      uniform mat4 uReflectionMatrix; // mirror-camera texture-space matrix
      varying float vFoamProximity; // Pre-computed terrain proximity for foam early-exit
      varying float vElevation; // Raw wave elevation for whitecap detection
      varying float vNmLod; // Pre-computed normal map LOD (1.0 - smoothstep(5,8,vFoamProximity))
      varying vec3 vWorldNormal; // World-space normal for reflection distortion

      // Five wave trains spaced at golden-angle intervals (~137.5°) so their
      // interference never locks into a repeating grid.  Each train travels in a
      // fixed direction with a detuned frequency and independent speed.
      float getWaveHeight(vec2 worldXZ) {
        float cs = uWaveAngleCos; float sn = uWaveAngleSin;
        vec2 w = vec2(cs * worldXZ.x - sn * worldXZ.y, sn * worldXZ.x + cs * worldXZ.y);
        float f = uWaveFrequency * 0.12;
        float t = uWaveTime;
        float h = sin(dot(w, vec2( 1.000,  0.000)) * f * 1.00 - t * 0.85) * 0.38
                + sin(dot(w, vec2(-0.737,  0.676)) * f * 0.71 - t * 0.58) * 0.24
                + sin(dot(w, vec2( 0.087, -0.996)) * f * 1.43 + t * 1.15) * 0.18
                + sin(dot(w, vec2( 0.609,  0.793)) * f * 0.57 - t * 0.42) * 0.12
                + sin(dot(w, vec2(-0.985, -0.174)) * f * 1.18 - t * 0.73) * 0.08;
        return h * uWaveAmplitude;
      }

      // Cheap version for normals — two dominant trains only.
      float getWaveHeightFast(vec2 worldXZ) {
        float cs = uWaveAngleCos; float sn = uWaveAngleSin;
        vec2 w = vec2(cs * worldXZ.x - sn * worldXZ.y, sn * worldXZ.x + cs * worldXZ.y);
        float f = uWaveFrequency * 0.12;
        float t = uWaveTime;
        return (sin(dot(w, vec2( 1.000,  0.000)) * f * 1.00 - t * 0.85) * 0.38
              + sin(dot(w, vec2(-0.737,  0.676)) * f * 0.71 - t * 0.58) * 0.24)
              * uWaveAmplitude;
      }

      void main() {
        vUv = uv;
        vec3 pos = position;

        // Calculate original world XZ position (fixed in world space, not affected by mesh movement)
        vec2 originalWorldXZ = (modelMatrix * vec4(position, 1.0)).xz - uMeshOffset;
        vOriginalWorldXZ = originalWorldXZ;

        // Pre-compute terrain proximity for cheap fragment-shader foam early-exit
        vec2 foamLocal = originalWorldXZ - uIslandGroupOffset;
        float foamBound = max(uTerrainWidthX, uTerrainWidthZ) * 1.1;
        vFoamProximity = foamBound > 0.0 ? max(abs(foamLocal.x), abs(foamLocal.y)) / foamBound : 2.0;
        vNmLod = 1.0 - smoothstep(5.0, 8.0, vFoamProximity);

        // Apply spherical curvature to bend edges downward from center
        float distFromCenter = length(pos.xy); // Distance in XY plane (horizontal)
        float curveBend = distFromCenter * distFromCenter * uCurvature; // Quadratic falloff
        pos.z -= curveBend; // Bend downward (negative Z since plane is rotated)

        // Use original world position for consistent waves
        vec2 worldXZ = originalWorldXZ;

        // Calculate wave displacement
        float elevation = getWaveHeight(worldXZ);
        vElevation = elevation; // Pass to fragment for whitecap detection
        pos.z += elevation * uWaveHeightMultiplier; // Wave height multiplier for choppiness

        // OPTIMIZED: Calculate normal using 2 samples instead of 4
        // Uses center elevation (already calculated) + 2 neighbors
        // Fast single-octave version — normals don't need full FBM precision.
        // elevationFast is used only for the normal diff so all 3 samples are
        // from the same function — prevents mismatch ridging in specular highlights.
        float offset = 0.1;
        float elevationFast = getWaveHeightFast(worldXZ);
        float hR = getWaveHeightFast(worldXZ + vec2(offset, 1.731)) * 1.15;
        float hU = getWaveHeightFast(worldXZ + vec2(0.937, offset)) * 1.637;

        // Compute tangent vectors using center-to-neighbor differences
        // Doubled the height difference to compensate for single-sided sampling
        vec3 tangentX = vec3(offset * 12.3, 13.0, (hR - elevationFast) * 2.5);
        vec3 tangentY = vec3(0.5, offset * 12.0, (hU - elevationFast) * 2.5);

        // Normal is cross product of tangents
        vec3 calculatedNormal = normalize(cross(tangentY, tangentX));

        vec4 worldPos = modelMatrix * vec4(pos, 1.0);
        vWorldPosition = worldPos.xyz;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1); // scale, like zoom
        vViewPosition = -mvPosition.xyz;
        vPosition = pos;

        // Transform calculated normal to view space
        vNormal = normalize(normalMatrix * calculatedNormal);
        // World-space normal for distortion (view-space normal causes camera-angle bias in reflection UVs)
        vWorldNormal = normalize(mat3(modelMatrix) * calculatedNormal);

        // Calculate fog depth for distance-based fog
        vFogDepth = -mvPosition.z;

        gl_Position = projectionMatrix * mvPosition;
        vClipSpace = gl_Position; // Store for reflection texture sampling
        // Reflection UV: planar reflection is only exact for points ON the mirror plane
        // (y = waterLevel). The spherical curvature bends each vertex down by curveBend,
        // which parallax-shifts the sampled reflection wherever the water dome falls away
        // from the camera-centered mesh (e.g. the fixed intro island, far from mesh center).
        // Undo curveBend for the projection so the reflection stays anchored to the flat
        // plane height; wave elevation is kept. Near the mesh center curveBend≈0 (no change).
        vec4 reflWorldPos = modelMatrix * vec4(pos.x, pos.y, pos.z + curveBend, 1.0);
        vReflectionCoord = uReflectionMatrix * reflWorldPos; // mirror-camera UV (always aligned to texture)
      }
    `,fragmentShader:`
      precision highp float;
      // vOriginalWorldXZ carries world-space coordinates (±10 units) — mediump only has
      // ~0.02 unit steps at that range, which creates a visible grid pattern in texture UVs.
      // mediump causes a visible grid pattern in texture UVs, but highp is needed 
      // vClipSpace needs highp for the perspective divide (xy/w) used in reflection UVs.
      varying highp vec2 vOriginalWorldXZ;
      varying highp vec4 vClipSpace;
      varying highp vec4 vReflectionCoord;
      varying vec3 vWorldNormal;

      // Uniforms shared with the vertex shader must match its precision (highp).
      uniform highp float uTime;
      uniform highp vec2 uMeshOffset; // Added here so sparkle/streak coords can anchor to world space
      uniform highp float uTerrainWidthX;
      uniform highp float uTerrainWidthZ;
      uniform highp vec2 uIslandGroupOffset;
      uniform highp float uWaveHeightMultiplier; // Used for storm-gated whitecap intensity
      // Fragment-only uniforms — highp required (confirmed: mediump causes grid artifacts on mobile)
      uniform vec3 uWaterColor;
      uniform vec3 uShallowColor;
      uniform vec3 uShineColor;
      uniform vec3 fogColor;
      uniform float fogNear;
      uniform float fogFar;
      uniform float uClipRadius;
      uniform float uTerrainHeight;
      uniform bool uFoamEnabled;
      uniform float uWaterLevel;
      // Terrain shape uniforms
      uniform float uTerrainScaleX;
      uniform float uTerrainScaleY;
      uniform float uTerrainIrregularity;
      uniform float uTerrainBayAngle;
      uniform float uTerrainBayDepth;
      uniform float uTerrainBayWidth;
      uniform float uFoamHeightOffset;
      // Heightmap texture uniforms
      uniform bool uUseHeightmap;
      uniform sampler2D uTerrainHeightmap;
      uniform float uHeightmapWorldSize;
      uniform float uHeightmapMinHeight;
      uniform float uHeightmapMaxHeight;
      // Reflection uniforms
      uniform sampler2D uReflectionTexture;
      uniform bool uReflectionEnabled;
      uniform float uReflectionStrength;
      uniform float uFresnelBias;
      uniform float uFresnelScale;
      uniform float uFresnelPower;
      uniform float uReflectionDistortion;
      uniform vec2 uReflectionOffset;
      uniform vec3 uReflectionTint;
      uniform sampler2D uWaterNormalMap;
      uniform float uNormalMapStrength;
      uniform float uFoamWarpAmount;
      varying vec3 vPosition;
      varying vec3 vWorldPosition;
      varying vec3 vViewPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      varying float vFogDepth;
      varying float vFoamProximity; // Pre-computed terrain proximity for foam early-exit
      varying float vElevation; // Raw wave elevation for whitecap detection
      varying float vNmLod; // Pre-computed normal map LOD (1.0 - smoothstep(5,8,vFoamProximity))
      uniform bool uEnableStreaks;
      uniform bool uEnableSparkle;
      uniform bool uEnableNormalMap2;

      // Hash function for noise — arithmetic only (no sin), matches the pattern used for sparkle/streak hashes
      float hash(vec2 p) {
        vec2 q = fract(p * 0.3183099 + 0.1) * 17.0;
        return fract(q.x * q.y * (q.x + q.y));
      }

      // Smooth noise with better interpolation
      float smoothNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);

        // Quintic interpolation for smoother results
        f = f * f * f * f * (f * (f * 6.0 - 15.0) + 10.0); // no need to mess with this

        float a = hash(i);
        float b = hash(i + vec2(1.30, 3.0));
        float c = hash(i + vec2(0.0, 1.4));
        float d = hash(i + vec2(41.3, 4.0));

        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      // Continuous value noise for foam — standard integer offsets so cells tile seamlessly
      // Cubic smoothstep (3f²-2f³) — foam edges don't need C2 continuity, saves ~4 multiplies per call
      float foamNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      // Simple noise for organic island shape (matches terrain.js)
      float simpleNoise(vec2 pos) {
        float angle = atan(pos.y, pos.x);
        float dist = length(pos);

        // Multiple sine waves at different frequencies for organic variation
        float noise1 = sin(angle * 2.2 + dist * 0.5) * 0.4;
        float noise2 = sin(angle * 5.0 - dist * 0.3) * 0.25;
        float noise3 = sin(angle * 7.0 + dist * 0.7) * 0.2;

        return (noise1 + noise2 + noise3) * uTerrainIrregularity;
      }

      // Calculate shaped distance from center (accounts for elongation and bay)
      float getShapedDistance(vec2 pos) {
        // Apply elongation scaling
        float scaledX = pos.x / uTerrainScaleX;
        float scaledY = pos.y / uTerrainScaleY;
        float dist = length(vec2(scaledX, scaledY));

        // Apply bay indentation
        if(uTerrainBayDepth > 0.0) {
          float angle = atan(pos.y, pos.x);
          float bayAngle = uTerrainBayAngle;
          float bayWidth = uTerrainBayWidth;

          // Calculate angle difference (wrap around)
          float angleDiff = abs(angle - bayAngle);
          if(angleDiff > 3.14159) angleDiff = 6.28318 - angleDiff;

          // If within bay width, push the distance inward
          if(angleDiff < bayWidth) {
            float bayInfluence = cos(angleDiff / bayWidth * 3.14159 / 2.0);
            dist += uTerrainBayDepth * bayInfluence;
          }
        }

        return dist;
      }

      // Get actual terrain height from heightmap texture (in world space Y coordinates)
      float getTerrainHeightFromHeightmap(vec2 terrainLocalXZ) {
        // Convert terrain-local XZ coordinates to heightmap UV (0-1 range)
        // Terrain ranges from -size/2 to +size/2, we need to map to 0-1
        vec2 uv = (terrainLocalXZ / uHeightmapWorldSize) + 0.5;

        // Sample heightmap texture (returns normalized height 0-1)
        float normalizedHeight = texture2D(uTerrainHeightmap, uv).r;

        // Denormalize to actual world height
        float actualHeight = mix(uHeightmapMinHeight, uHeightmapMaxHeight, normalizedHeight);

        return actualHeight;
      }

      // Fallback: Approximate terrain height for foam detection (used if heightmap not available)
      float approximateTerrainHeight(vec2 worldXZ) {
        float distFromCenter = getShapedDistance(worldXZ);

        // Calculate distance from rectangular bounds
        float distX = abs(worldXZ.x) / uTerrainWidthX;
        float distZ = abs(worldXZ.y) / uTerrainWidthZ;
        float maxDist = max(distX, distZ);

        // Add organic variation to island bounds
        float organicVariation = simpleNoise(worldXZ) * 1.5;
        float modifiedBoundary = 1.0 + (organicVariation / max(uTerrainWidthX, uTerrainWidthZ));
        float modifiedFalloffStart = modifiedBoundary * 1.0;  // Start of slope
        float modifiedFalloffEnd = modifiedBoundary * 2.26;   // End of slope (the "skirt")

        if(maxDist < modifiedFalloffStart) {
          // Center plateau - relatively flat at terrain height
          return uTerrainHeight;
        } else if(maxDist < modifiedFalloffEnd) {
          // Slope zone - terrain drops from uTerrainHeight to below water
          float t = (maxDist - modifiedFalloffStart) / (modifiedFalloffEnd - modifiedFalloffStart);
          float smoothT = t * t * (3.0 - 2.0 * t); // Smoothstep
          // Slope from uTerrainHeight down to -3.5
          return mix(uTerrainHeight, -3.5, smoothT);
        }
        return -10.0; // Deep underwater
      }


      void main() {
        // Clip water outside hemisphere radius
        float radialDist = length(vPosition.xy);
        if (radialDist > uClipRadius) {
          discard;
        }

        vec3 lightDir = vec3(0.038661, 0.998615, 0.035664); // normalize(vec3(5.42, 140.0, 5.0)) — pre-computed constant
        vec3 viewDir = normalize(vViewPosition);

        // Use the normals calculated from wave geometry
        vec3 normal = normalize(vNormal);

        // Normal map — adds high-frequency surface ripple detail cheaply.
        // LOD: full strength across visible ocean, fades near fog horizon.
        // foamBound is ~20 units, so proximity 8.0 ≈ 160 units (deep in fog territory).
        float nmLod = vNmLod;
        vec3 nmBlend = vec3(0.0, 1.0, 0.0); // neutral up — no trough tint when LOD skips
        if (nmLod > 0.01) {
          vec2 nmUv1 = vOriginalWorldXZ * 0.08 + vec2(uTime * 0.018, uTime * 0.012);
          vec3 nm1 = texture2D(uWaterNormalMap, nmUv1).xyz * 2.0 - 1.0;
          if (uEnableNormalMap2) {
            vec2 nmUv2 = vOriginalWorldXZ * 0.05 - vec2(uTime * 0.011, uTime * 0.019);
            vec3 nm2 = texture2D(uWaterNormalMap, nmUv2).xyz * 2.0 - 1.0;
            nmBlend = normalize(nm1 + nm2);
          } else {
            nmBlend = nm1;
          }
          normal = normalize(normal + nmBlend * uNormalMapStrength * nmLod);
        }

        // Apply distance fog for infinite ocean effect
        float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);

        // Add subtle high-frequency detail to normals for sparkle.
        // Use world-space coords (vOriginalWorldXZ + uMeshOffset) so uMeshOffset scrolling
        // doesn't drag this high-freq pattern in the wrong direction during the minigame.
        vec2 worldXZ = vOriginalWorldXZ + uMeshOffset;
        if (uEnableSparkle) {
          vec2 detailCoord = worldXZ * 23.2 + vec2(uTime * 0.012, -uTime * 0.008);
          vec2 di = floor(detailCoord);
          vec2 df = fract(detailCoord);
          df = df * df * (3.0 - 2.0 * df); // smoothstep blend
          vec2 _a = fract((di                    ) * 0.3183099 + 0.1) * 17.0;
          vec2 _b = fract((di + vec2(1.0, 0.0)  ) * 0.3183099 + 0.1) * 17.0;
          vec2 _c = fract((di + vec2(0.0, 1.0)  ) * 0.3183099 + 0.1) * 17.0;
          vec2 _d = fract((di + vec2(1.0, 1.0)  ) * 0.3183099 + 0.1) * 17.0;
          float ha = fract(_a.x * _a.y * (_a.x + _a.y));
          float hb = fract(_b.x * _b.y * (_b.x + _b.y));
          float hc = fract(_c.x * _c.y * (_c.x + _c.y));
          float hd = fract(_d.x * _d.y * (_d.x + _d.y));
          float detail = mix(mix(ha, hb, df.x), mix(hc, hd, df.x), df.y) * 8.0 - 0.30;
          normal = normalize(normal + vec3(detail * 0.12, 0.0, detail * 0.12));
        }

        // Base water color (shallow gradient was permanently inactive — vUv is 0-1, not world-space)
        vec3 baseColor = uWaterColor;

        // Normal map trough tint: where the surface tilts away (nmBlend.y < 0) shift
        // toward a deeper ocean blue, giving the water visible color depth variation.
        float nmTrough = clamp(-nmBlend.y, 0.0, 1.0) * nmLod;
        baseColor = mix(baseColor, uWaterColor * 0.6, nmTrough * 0.5);

        // Softer diffuse lighting for tropical look
        float diffuse = max(dot(normal, lightDir), 0.64) * .64 + 0.66;
        vec3 color = baseColor * diffuse;

        // Bright specular highlights
        vec3 halfDir = normalize(lightDir + viewDir);
        float specular = pow(max(dot(normal, halfDir), 0.30), 256.0);

        // Combine shine effects for intensity
        color += uShineColor * specular * 1.76; // highlight top of wave

        // animated shine streaks — arithmetic hash (no sin()), visually identical to smoothNoise at pow(55)
        // Offset by normal map xz so streaks warp with surface ripples instead of floating above them.
        // World-space anchor + negated Y drift so streaks appear to flow toward camera in minigame.
        if (uEnableStreaks) {
          vec2 _sc = worldXZ * 8.3 + nmBlend.xz * 1.2 + vec2(uTime * 0.706, -uTime * 4.09);
          vec2 _si = floor(_sc);
          vec2 _sf = fract(_sc); _sf = _sf * _sf * (3.0 - 2.0 * _sf);
          vec2 _s0 = fract((_si             ) * 0.3183099 + 0.1) * 17.0;
          vec2 _s1 = fract((_si + vec2(1,0)) * 0.3183099 + 0.1) * 17.0;
          vec2 _s2 = fract((_si + vec2(0,1)) * 0.3183099 + 0.1) * 17.0;
          vec2 _s3 = fract((_si + vec2(1,1)) * 0.3183099 + 0.1) * 17.0;
          float streaks = mix(
            mix(fract(_s0.x*_s0.y*(_s0.x+_s0.y)), fract(_s1.x*_s1.y*(_s1.x+_s1.y)), _sf.x),
            mix(fract(_s2.x*_s2.y*(_s2.x+_s2.y)), fract(_s3.x*_s3.y*(_s3.x+_s3.y)), _sf.x), _sf.y);
          color += uShineColor * pow(streaks, 45.0) * 4.15;
        }

        // === REFLECTION ===
        // Fresnel always runs — gives the surface its glassy rim even when underwater.
        float fresnel = uFresnelBias + uFresnelScale * pow(1.0 - max(dot(viewDir, normal), 0.0), uFresnelPower);
        fresnel = clamp(fresnel, 0.0, 1.0);

        if (uReflectionEnabled) {
          // UV from mirror-camera texture-space matrix — always aligned to the reflection
          // texture regardless of how many frames have passed since the last capture.
          vec2 screenUV = (vReflectionCoord.xy / vReflectionCoord.w);

          // Wave distortion based on normal
          vec2 distortion = vWorldNormal.xz * uReflectionDistortion;

          vec2 reflectionUV = vec2(screenUV.x + distortion.x + uReflectionOffset.x, screenUV.y + distortion.y + uReflectionOffset.y);
          reflectionUV = clamp(reflectionUV, 0.001, 0.999); // Prevent edge artifacts

          // Sample reflection texture, apply tint, and blend with water color
          vec3 reflectionColor = texture2D(uReflectionTexture, reflectionUV).rgb * uReflectionTint;
          color = mix(color, reflectionColor, fresnel * uReflectionStrength);
        }

        // Transparency
        float alpha = .428;

        // === WHITECAPS ===
        // Appear on wave crests during storms — driven by uWaveHeightMultiplier
        float stormIntensity = smoothstep(6.0, 11.5, uWaveHeightMultiplier);
        if (stormIntensity > 0.01) {
          float actualElevation = vElevation * uWaveHeightMultiplier;
          // Two-layer animated frothy noise: coarse shape + fine wispy detail
          float wc1 = smoothNoise(vOriginalWorldXZ * 3.8 + vec2(uTime * 0.17, uTime * 0.09));
          float wc2 = smoothNoise(vOriginalWorldXZ * 8.5 - vec2(uTime * 0.13, uTime * 0.21)) * 0.5;
          float wcNoise = (wc1 + wc2) / 1.5;
          // Noise-perturbed threshold: breaks the uniform horizontal band into an organic edge
          float noiseOffset = wc1 * 0.8;
          float crestFactor = smoothstep(2.0 + noiseOffset, 2.9 + noiseOffset, actualElevation);
          float whitecapMask = crestFactor * smoothstep(0.44, 0.64, wcNoise) * stormIntensity;
          vec3 whitecapColor = vec3(0.94, 0.97, 1.0);
          color = mix(color, whitecapColor, whitecapMask * 0.78);
          alpha = mix(alpha, 0.92, whitecapMask * 0.4);
        }

        color = mix(color, fogColor, fogFactor);

        // Foam rendering where water meets terrain
        // Early-exit using vertex-interpolated proximity (skips all foam work for distant fragments)
        if(uFoamEnabled && vFoamProximity < 1.0) {
          // Soft edge fade from vertex proximity (avoids hard cutoff at boundary)
          float edgeFade = 1.0 - smoothstep(0.85, 1.0, vFoamProximity);

          // Transform water world coordinates to terrain-local coordinates
          vec2 terrainLocalXZ = vOriginalWorldXZ - uIslandGroupOffset;
          terrainLocalXZ.y = -terrainLocalXZ.y;

          // Get terrain height from heightmap or approximation
          float terrainHeight;
          float halfHeightmapSize = uHeightmapWorldSize / 2.0;
          float absX = abs(terrainLocalXZ.x);
          float absZ = abs(terrainLocalXZ.y);
          bool withinHeightmap = absX < halfHeightmapSize && absZ < halfHeightmapSize;

          if(uUseHeightmap && withinHeightmap) {
            terrainHeight = getTerrainHeightFromHeightmap(terrainLocalXZ);
          } else {
            terrainHeight = approximateTerrainHeight(terrainLocalXZ);
          }

          // Only render foam where terrain is near water level
          float terrainDepth = terrainHeight - uWaterLevel;

          if(terrainDepth > -2.5 && terrainDepth < 1.5) {
            terrainHeight += uFoamHeightOffset;
            float waterSurfaceHeight = vWorldPosition.y;
            float distToTerrain = waterSurfaceHeight - terrainHeight;

            // Dynamic foam width (continuous noise — no cell seams)
            float widthMultiplier = foamNoise(terrainLocalXZ * 0.2 + uTime * 0.01);
            float foamDepth = 0.6 + widthMultiplier * 0.8;

            float foamMask = smoothstep(foamDepth, 0.0, distToTerrain) *
                             smoothstep(-0.5, 0.21, distToTerrain);
            foamMask *= edgeFade;

            if(foamMask > 0.01) {
              // Animated flowing foam — counter-flowing layers with morphing warp
              vec2 flow1 = vec2(uTime * 0.12, uTime * 0.08);
              vec2 flow2 = vec2(-uTime * 0.09, uTime * 0.11);
              vec2 p1 = mat2(0.866, -0.5, 0.5, 0.866) * terrainLocalXZ;

              float foam1 = foamNoise(p1 * 1.8 + flow1);
              // Time-varying warp makes shapes continuously morph and reform
              float warpAmount = uFoamWarpAmount;
              float foam2 = foamNoise(p1 * 4.0 + vec2(foam1 * warpAmount) + flow2);

              float foamTex = foam1 * 0.6 + foam2 * 0.4;
              float foamVar = smoothstep(0.1, 0.8, foamTex);

              // Gentle pulse — different parts breathe at different times
              float pulse = 0.85 + sin(uTime * 0.5 + foamTex * 3.0) * 0.15;
              float foamIntensity = foamVar * foamMask * pulse;

              vec3 foamColor = vec3(0.95, 0.97, 1.0) * 2.0;
              color = mix(color, foamColor, foamIntensity * 0.55);
              alpha = mix(alpha, 0.85, foamIntensity * 0.5);
            }
          }
        }

        gl_FragColor = vec4(color, alpha);
      }
    `}),n=new on().load("normal-maps/waves.jpg");n.wrapS=pa,n.wrapT=pa,o.uniforms.uWaterNormalMap.value=n;const p=new te(s,o);p.rotation.x=-Math.PI/2,p.position.y=e,p.receiveShadow=!1,p.renderOrder=1;const d=new $a(a,16,16,0,Math.PI*2,Math.PI/2,Math.PI/2),l=new Oe({side:nn,transparent:!0,depthWrite:!1,uniforms:{uDeepColor:{value:new q(9549)},uShallowColor:{value:new q(42713)},fogColor:{value:new q(10541296)},fogNear:{value:260},fogFar:{value:420}},vertexShader:`
      varying vec3 vPosition;
      varying float vFogDepth;
      varying float vVerticalPos;
      varying vec3 vNormal;
      varying vec3 vViewPosition;

      void main() {
        vPosition = position;
        vVerticalPos = position.y; // Y position for vertical fade
        vNormal = normalize(normalMatrix * normal);

        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        vFogDepth = -mvPosition.z;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform vec3 uDeepColor;
      uniform vec3 uShallowColor;
      uniform vec3 fogColor;
      uniform float fogNear;
      uniform float fogFar;
      varying vec3 vPosition;
      varying float vFogDepth;
      varying float vVerticalPos;
      varying vec3 vNormal;
      varying vec3 vViewPosition;

      void main() {
        // Check if we're looking at the hemisphere from outside
        // If viewing from outside, discard the fragment (make it invisible)
        vec3 viewDir = normalize(vViewPosition);
        float facing = dot(viewDir, vNormal);

        // Radial gradient: darker at center, lighter at edges
        float distFromCenter = length(vPosition.xz) / ${a.toFixed(1)};
        vec3 color = mix(uDeepColor, uShallowColor, distFromCenter);

        // Normalize vertical position: 0 at bottom, 1 at top
        float normalizedHeight = (vVerticalPos + ${a.toFixed(1)}) / ${a.toFixed(1)};

        // Fade to fog color starting closer to surface
        float heightFade = smoothstep(0.75, 0.9, normalizedHeight);
        color = mix(color, fogColor, heightFade);

        // Fade to transparent at the very top to avoid hard line
        float alpha = mix(0.95, 0.0, smoothstep(0.9, 1.0, normalizedHeight));

        gl_FragColor = vec4(color, alpha);
      }
    `}),u=new te(d,l);return u.position.y=32.08,u.renderOrder=0,{mesh:p,hemisphereMesh:u,material:o,_prevTime:null,update(c){const h=this._prevTime!==null?c-this._prevTime:0;this._prevTime=c,o.uniforms.uWaveTime.value+=h*o.uniforms.uWaveSpeed.value,o.uniforms.uTime.value=c,o.uniforms.uFoamWarpAmount.value=1.2+Math.sin(c*.3)*.4},setColors(c={}){c.water!==void 0&&o.uniforms.uWaterColor.value.set(c.water),c.shallow!==void 0&&o.uniforms.uShallowColor.value.set(c.shallow),c.shine!==void 0&&o.uniforms.uShineColor.value.set(c.shine)},setWaveChoppiness(c,h,f){c!==void 0&&(o.uniforms.uWaveHeightMultiplier.value=c),h!==void 0&&(o.uniforms.uWaveAmplitude.value=h),f!==void 0&&(o.uniforms.uWaveSpeed.value=f)}}}function Xl(t={}){let{scene:e,waterLevel:i=-2.87,maxRipples:s=50,getWaveY:a=null}=t;const o=new q(16777215),n=[],p=[];let d=0;const l=new Ni(.1,.2,32),u={value:new $(.5,1,.3).normalize()},c={value:new q(1,1,1)},h=()=>new Oe({transparent:!0,side:_e,depthWrite:!1,uniforms:{uProgress:{value:0},uColor:{value:new q(16777215)},uSunDir:u,uTimeTint:c},vertexShader:`
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uProgress;
      uniform vec3 uColor;
      uniform vec3 uSunDir;
      uniform vec3 uTimeTint;
      varying vec2 vUv;

      void main() {
        vec2 center = vec2(0.5, 0.5);
        vec2 toCenter = vUv - center;
        float dist = length(toCenter) * 2.0;

        float ringWidth = 0.15;
        float ring = smoothstep(uProgress - ringWidth, uProgress, dist) *
                     (1.0 - smoothstep(uProgress, uProgress + ringWidth, dist));

        // Wave profile: t = -1 (inner trough) → 0 (crest) → +1 (outer front face)
        float ringCenter = uProgress - ringWidth * 0.5;
        float t = clamp((dist - ringCenter) / (ringWidth * 0.5), -1.0, 1.0);
        float crestLight = 1.0 - t * t; // peaks at crest

        // Crest faces upward → catches most light; sides face outward/inward
        float frontFace = max(0.0, t);

        // Build world-space wave normal for directional specular only (no diffuse dimming).
        // RingGeometry lies in local XY; rotation.x = -PI/2 maps local(x,y) → world(x,0,-y).
        vec3 radialWorld = length(toCenter) > 0.001
            ? normalize(vec3(toCenter.x, 0.0, -toCenter.y))
            : vec3(0.0);
        vec3 waveNormal = normalize(vec3(radialWorld.x * t * 1.2, 1.0, radialWorld.z * t * 1.2));

        // Directional specular glint from sun — no diffuse so non-sun side stays bright
        vec3 sunDir = normalize(uSunDir);
        vec3 halfVec = normalize(sunDir + vec3(0.0, 1.0, 0.0));
        float directionalSpec = pow(max(0.0, dot(waveNormal, halfVec)), 32.0)
                                * ring * (1.0 - uProgress) * 2.5;

        // Trough darkening just inside the ring
        float troughDist = dist - (ringCenter - ringWidth * 0.85);
        float trough = exp(-troughDist * troughDist * 28.0) * (1.0 - uProgress) * 0.18;

        // Gentle diffuse: sun-facing side slightly brighter, away side slightly dimmer
        float diffuse = dot(waveNormal, sunDir) * 0.15; // ±0.15 range, never goes dark
        vec3 litColor = uColor * uTimeTint * (0.55 + 0.35 * crestLight + 0.15 * frontFace + diffuse)
                      + vec3(directionalSpec);

        float alpha = ring * (1.0 - uProgress) * 0.7;
        float innerGlow = exp(-dist * 3.0) * (1.0 - uProgress) * 0.3;
        float splash = exp(-dist * 2.5) * (1.0 - smoothstep(0.0, 0.5, uProgress)) * 5.0;

        gl_FragColor = vec4(litColor, alpha + innerGlow + splash - trough);
      }
    `});for(let y=0;y<s;y++){const M=new te(l,h());M.rotation.x=-Math.PI/2,M.visible=!1,M.renderOrder=2,M.isPersistent=!0,e.add(M),p.push(M)}function f(y,M,b={}){const{size:P=1,speed:S=1,color:T=o}=b;let D=p[d];if(d=(d+1)%s,!D)return;if(D.visible){const k=n.findIndex(X=>X.mesh===D);k!==-1&&n.splice(k,1)}const W=a?i+a(y,M)-.05:i-.05;D.position.set(y,W,M),D.visible=!0,D.material.uniforms.uProgress.value=.0182,D.material.uniforms.uColor.value.copy(T);const E=2*P;D.scale.set(E,E,1),n.push({mesh:D,x:y,z:M,progress:.114,speed:S*.4,maxScale:E*3.5,baseScale:E})}function r(y){for(let M=n.length-1;M>=0;M--){const b=n[M];b.progress+=y*b.speed,b.mesh.material.uniforms.uProgress.value=b.progress;const P=b.baseScale+(b.maxScale-b.baseScale)*b.progress;b.mesh.scale.set(P,P,1),a&&(b.mesh.position.y=i+a(b.x,b.z)-.05),b.progress>=1&&(b.mesh.visible=!1,n.splice(M,1))}}function m(){p.forEach(y=>{e.remove(y),y.material.dispose()}),l.dispose(),n.length=0,p.length=0}function _(y){for(let M=n.length-1;M>=0;M--)n[M].mesh.visible=!1;n.length=0,d=0,i=y}function v(y){i=y}function w(y){u.value.copy(y)}function x(y){c.value.copy(y)}return{spawnRipple:f,update:r,dispose:m,reset:_,setWaterLevel:v,setSunDir:w,setTimeTint:x}}const Pe=500,$n=3,Kn=1.8,gs=5,vs=13;let Ve=null,Fe=null,it=null,lt=null,Is=null,tt=null,De=null,Ws=null,Ot=null,wo=0,hi=null,st=null,zs=0,Ls=0,Xi=0,Es=0,ya=!1;function Qn(){const t=document.createElement("canvas");t.width=32,t.height=32;const e=t.getContext("2d"),i=e.createRadialGradient(16,16,0,16,16,16);i.addColorStop(0,"rgba(255,255,255,1.0)"),i.addColorStop(.4,"rgba(220,235,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0.0)"),e.fillStyle=i,e.fillRect(0,0,32,32);const s=new rs(t);return s.needsUpdate=!0,s}function Jn(t,e,i,s,a,o,n=o*2.5){hi=e,st=i,zs=s,Ls=a;const p=gs*vs;Ot||(Ot=new Float32Array(p*2));let d=0;for(let l=0;l<gs;l++){const u=l/(gs-1),c=o+(n-o)*u,h=l*.618*Math.PI*2;for(let f=0;f<vs;f++){const r=h+f/vs*Math.PI*2;Ot[d++]=s+Math.cos(r)*c,Ot[d++]=a+Math.sin(r)*c}}if(wo=p,Ve)De.fill(0),lt.fill(0),Fe.attributes.aAlpha.needsUpdate=!0;else{it=new Float32Array(Pe*3),lt=new Float32Array(Pe),Is=new Float32Array(Pe),tt=new Float32Array(Pe*3),De=new Float32Array(Pe),Ws=new Float32Array(Pe),Fe=new ii,Fe.setAttribute("position",new oe(it,3)),Fe.setAttribute("aAlpha",new oe(lt,1)),Fe.setAttribute("aSize",new oe(Is,1));const l=new Oe({uniforms:{map:{value:Qn()}},vertexShader:`
        attribute float aAlpha;
        attribute float aSize;
        varying float vAlpha;
        void main() {
          vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = clamp(aSize / -mv.z, 1.0, 40.0);
          gl_Position  = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform sampler2D map;
        varying float vAlpha;
        void main() {
          float a = texture2D(map, gl_PointCoord).a * vAlpha;
          if (a < 0.01) discard;
          gl_FragColor = vec4(1.0, 1.0, 1.0, a);
        }`,transparent:!0,depthWrite:!1,blending:Ae});Ve=new Ka(Fe,l),Ve.frustumCulled=!1,Ve.renderOrder=3}ya||(t.add(Ve),ya=!0),Ve.visible=!0,Xi=0}function Ma(t,e){if(e&&(st=e),!Ve||!hi)return;const i=hi.material.uniforms,s=i.uWaveTime.value,a=i.uWaveAmplitude.value,o=i.uWaveFrequency.value,n=i.uWaveHeightMultiplier.value,p=i.uMeshOffset.value.x,d=i.uMeshOffset.value.y,l=hi.mesh.position.y,u=a*n*.38;Xi++;const c=Xi%$n===0;let h=!1,f=!1,r=!1;for(let m=0;m<Pe;m++){if(De[m]<=0)continue;if(De[m]-=t,De[m]<=0){De[m]=0,lt[m]=0,f=!0;continue}const _=De[m]/Ws[m];lt[m]=_*_*.82;const v=m*3;tt[v+1]-=Kn*t,it[v]+=tt[v]*t,it[v+1]+=tt[v+1]*t,it[v+2]+=tt[v+2]*t,h=!0,f=!0}if(c){const m=st?st.position.x:0,_=st?st.position.z:0;for(let v=0;v<wo;v++){const w=Ot[v*2],x=Ot[v*2+1];if(st){const P=w-zs,S=x-Ls;if(P*(m-zs)+S*(_-Ls)<=0&&Math.random()>.15)continue}const y=jn(w,x,s,p,d,a,o,n);if(y<u)continue;const M=Math.min((y-u)/(a*n*.4),1),b=Math.ceil(M*18)+8;for(let P=0;P<b;P++){let S=-1;for(let X=0;X<Pe;X++){const N=(Es+X)%Pe;if(De[N]<=0){S=N,Es=(N+1)%Pe;break}}if(S<0)break;const T=S*3;it[T]=w+(Math.random()-.5)*1.2,it[T+1]=l+y+Math.random()*.25,it[T+2]=x+(Math.random()-.5)*1.2;const D=.7+Math.random()*1,W=Math.random()*Math.PI*2,E=.15+Math.random()*.35;tt[T]=Math.cos(W)*E,tt[T+1]=D,tt[T+2]=Math.sin(W)*E;const k=.4+Math.random()*.55;De[S]=k,Ws[S]=k,lt[S]=0,Is[S]=Math.random()<.7?8+Math.random()*10:40+Math.random()*35,h=!0,f=!0,r=!0}}}h&&(Fe.attributes.position.needsUpdate=!0),f&&(Fe.attributes.aAlpha.needsUpdate=!0),r&&(Fe.attributes.aSize.needsUpdate=!0)}function yo(){Ve&&(Ve.visible=!1,De&&De.fill(0),lt&&(lt.fill(0),Fe.attributes.aAlpha.needsUpdate=!0)),hi=null,st=null,Xi=0,Es=0}const er=30,_s={turbidity:0,rayleigh:.025,mieCoefficient:.01,exposure:.53},ws=new q(4128),ys=new q(2245717),tr=20,g={startDelay:8500,duration:14800,dropInterval:120,ballsDropped:0,isActive:!1,startTime:0,steadyStateReached:!1,steadyStateValues:null,startTimeoutId:null,dropIntervalId:null,terrainDarknessBlend:0,isPaused:!1,pauseTimeoutRemaining:0,pauseTime:0,stormScheduledTime:0};function Mo(t,e,i,s,a=0){const o=t.x,n=t.z,p=e,d=e*e*e;Mn((l,u,c)=>{const h=pn();if(h<0)return null;gn(h,o,i,n),ke(h,"aRadius",p),ke(h,"aVisualScale",1),ke(h,"aSpawnScale",1),ke(h,"aJiggleAmplitude",0),ke(h,"aJiggleTime",0),_a(h,"aVelocity",0,0,0),_a(h,"aAttractionDir",0,0,0),ke(h,"aAttractionStrength",0),ke(h,"aGroundFlatten",0),ke(h,"aFlattenDrop",0),ke(h,"aHeatTint",0),s&&vn(d);const f=u.RigidBodyDesc.dynamic().setTranslation(o,i,n).setLinearDamping(a).setAngularDamping(0).setCcdEnabled(!0),r=l.createRigidBody(f),m=u.ColliderDesc.ball(p).setMass(d).setFriction(c.ballGround.friction).setRestitution(c.ballGround.restitution).setCollisionGroups(xn.ball),_=l.createCollider(m,r);return{instanceIndex:h,position:new $(o,i,n),visualScale:1,body:r,collider:_,radius:p,mass:d,active:!0,hasSpawnedRipple:!1,originalMass:d,jiggleAmplitude:0,jiggleTime:0,spawnProgress:1,attractionDir:new $,attractionStrength:0}},Ps)}function ir(t,e=!0,i=null){const{scene:s,randomTerrainPosition:a,createCloudIndicator:o,sharedCloudTexture:n,sky:p,renderer:d,water:l,timeOfDay:u="day",islandGroup:c=null,shoreRadius:h=5.5}=t,f=85;g.stormScheduledTime=Date.now();const r=i!==null?i:g.startDelay;g.startTimeoutId=setTimeout(()=>{g.startTimeoutId=null,g.isActive=!0,g.startTime=Date.now(),g.ballsDropped=0;const m=a(),_=o({startX:m.x,startZ:m.z,endX:m.x,endZ:m.z,cloudTexture:n,rainCount:50,cloudHeight:er,timeOfDay:u}),v=_.userData.cloud,w=_.userData.cloudMaterial;v.scale.set(125,32,128),v.rotation.y=Math.random()*Math.PI*2;const x=.22,y=.344;u!=="night"&&w.uniforms.base.value.setRGB(121/255*.5,138/255*.55,160/255*.65),w.uniforms.threshold.value=y,v.renderOrder=10,s.add(_);const M=Dn();Vn(),_.userData.drizzleSound=M,g.cloudData={group:_,startTime:Date.now(),rotationSpeed:.0013,baseOpacity:x},g.originalSkyValues={turbidity:p.material.uniforms.turbidity.value,rayleigh:p.material.uniforms.rayleigh.value,mieCoefficient:p.material.uniforms.mieCoefficient.value,exposure:d.toneMappingExposure},g.originalWaterValues={heightMultiplier:l.material.uniforms.uWaveHeightMultiplier.value,amplitude:l.material.uniforms.uWaveAmplitude.value,waveSpeed:l.material.uniforms.uWaveSpeed.value,waterLevel:l.mesh.position.y},g.originalHemisphereColors={deepColor:l.hemisphereMesh.material.uniforms.uDeepColor.value.clone(),shallowColor:l.hemisphereMesh.material.uniforms.uShallowColor.value.clone()},g.water=l;const b=c?c.position.x:0,P=c?c.position.z:0;Jn(s,l,t.camera??null,b,P,h),g.timeOfDay=u,g.lightningTriggered=!1,g.lightningStarted=!1;const S=document.createElement("div");S.id="lightning-flash",S.style.position="fixed",S.style.top="0",S.style.left="0",S.style.width="100%",S.style.height="100%",S.style.backgroundColor="white",S.style.opacity="0",S.style.pointerEvents="none",S.style.zIndex="1000",document.body.appendChild(S),g.lightningFlash=S,g.dropIntervalId=setInterval(()=>{if(g.ballsDropped>=f){clearInterval(g.dropIntervalId),g.dropIntervalId=null;return}const T=a(),D=.12+Math.random()*.1;Mo(T,D,tr,e),g.ballsDropped++},g.dropInterval)},r)}function Ms(t,e){if(!g.lightningTriggered&&t>2500&&t<3500){g.lightningStarted||(g.lightningStarted=!0,g.lightningStartTime=e,Tn(),Hn());const i=e-g.lightningStartTime;let s=0;return i<80?s=.9*(1-i/80):i>=180&&i<280?s=.85*(1-(i-180)/100):i>=280&&(g.lightningTriggered=!0,s=0),g.lightningFlash&&(g.lightningFlash.style.opacity=s.toString()),!0}return!1}function xo(){if(g.lightningFlash){const t=document.getElementById("lightning-flash");t&&document.body.removeChild(t),g.lightningFlash=null}}function Zl(){if(!g.isPaused){if(g.isPaused=!0,g.pauseTime=Date.now(),g.startTimeoutId!==null&&!g.isActive){const t=Date.now()-g.stormScheduledTime;g.pauseTimeoutRemaining=Math.max(0,g.startDelay-t),clearTimeout(g.startTimeoutId),g.startTimeoutId=null}g.dropIntervalId!==null&&(clearInterval(g.dropIntervalId),g.dropIntervalId=null)}}function Gl(t,e){if(!g.isPaused)return;const i=Date.now()-g.pauseTime;if(g.isPaused=!1,g.startTime>0&&(g.startTime+=i),g.cloudData&&g.cloudData.startTime>0&&(g.cloudData.startTime+=i),g.lightningStartTime>0&&(g.lightningStartTime+=i),g.stormScheduledTime>0&&(g.stormScheduledTime+=i),g.pauseTimeoutRemaining>0&&!g.isActive&&(ir(t,e,g.pauseTimeoutRemaining),g.pauseTimeoutRemaining=0),g.isActive&&g.ballsDropped<45){const{randomTerrainPosition:s}=t,a=45;g.dropIntervalId=setInterval(()=>{if(g.ballsDropped>=a){clearInterval(g.dropIntervalId),g.dropIntervalId=null;return}const o=s(),n=.12+Math.random()*.1;Mo(o,n,mn.spawnHeight,e),g.ballsDropped++},g.dropInterval)}}function ql(){g.isActive=!1,g.ballsDropped=0,g.startTime=0,g.lightningTriggered=!1,g.lightningStarted=!1,g.steadyStateReached=!1,g.steadyStateValues=null,g.timeOfDay=void 0,g.terrainDarknessBlend=0,g.isPaused=!1,g.pauseTimeoutRemaining=0,g.pauseTime=0,g.stormScheduledTime=0,g.startTimeoutId!==null&&(clearTimeout(g.startTimeoutId),g.startTimeoutId=null),g.dropIntervalId!==null&&(clearInterval(g.dropIntervalId),g.dropIntervalId=null),Sn(),g.cloudData?.group?.userData?.drizzleSound&&ho(g.cloudData.group.userData.drizzleSound),xo(),yo(),delete g.originalSkyValues,g.originalWaterValues&&g.water&&(g.water.setWaveChoppiness(g.originalWaterValues.heightMultiplier,g.originalWaterValues.amplitude,g.originalWaterValues.waveSpeed),g.water.mesh.position.y=g.originalWaterValues.waterLevel),g.originalHemisphereColors&&g.water&&(g.water.hemisphereMesh.material.uniforms.uDeepColor.value.copy(g.originalHemisphereColors.deepColor),g.water.hemisphereMesh.material.uniforms.uShallowColor.value.copy(g.originalHemisphereColors.shallowColor)),delete g.originalWaterValues,delete g.originalHemisphereColors,delete g.water}function jl(t){const{gameStarted:e,scene:i,camera:s,dt:a,sky:o,renderer:n,updateCloud:p,updateRainParticles:d,setRainOpacity:l}=t;if(!e||!g.isActive||!g.cloudData)return!1;const u=Date.now(),c=u-g.startTime,h=g.cloudData,f=u-h.startTime,{cloud:r,cloudMaterial:m}=h.group.userData;r.visible||(r.visible=!0),p(h.group,s,a),r.rotation.y+=h.rotationSpeed;const _=4e3,v=3800,w=g.duration-2500,x=g.duration-2e3,y=c<v,M=c>x,b=!y&&!M;let P=h.baseOpacity;if(f<_){const D=f/_,W=D*D*D;P*=W}else if(c>w){const D=(c-(g.duration-1500))/1500;P*=Math.max(0,1-D)}m.uniforms.opacity.value=Math.max(0,P);const S=5e3,T=g.duration-5e3;if(b&&g.steadyStateReached&&c>=S&&c<=T)return d(h.group,a),l(h.group,P*.6),Ma(a,s),c>=2500&&c<=3500&&Ms(c,u),!0;if(g.originalSkyValues&&g.timeOfDay!=="night"){Ms(c,u);const D=g.originalSkyValues;if(y){const W=Math.pow(c/v,2);ps(o,n,D,_s,W)}else if(M){const W=1-Math.pow(1-(c-x)/2e3,2);ps(o,n,_s,D,W)}else g.steadyStateReached||(g.steadyStateReached=!0,ps(o,n,D,_s,1))}else g.timeOfDay==="night"&&Ms(c,u);if(g.originalHemisphereColors&&g.water)if(y){const W=c/v,E=W*W;g.water.hemisphereMesh.material.uniforms.uDeepColor.value.lerpColors(g.originalHemisphereColors.deepColor,ws,E),g.water.hemisphereMesh.material.uniforms.uShallowColor.value.lerpColors(g.originalHemisphereColors.shallowColor,ys,E),g.timeOfDay!=="night"&&(g.terrainDarknessBlend=E*.6)}else if(M){const W=(c-x)/2e3,E=1-Math.pow(1-W,2);g.water.hemisphereMesh.material.uniforms.uDeepColor.value.lerpColors(ws,g.originalHemisphereColors.deepColor,E),g.water.hemisphereMesh.material.uniforms.uShallowColor.value.lerpColors(ys,g.originalHemisphereColors.shallowColor,E),g.timeOfDay!=="night"&&(g.terrainDarknessBlend=.6*(1-E))}else g.steadyStateReached||(g.water.hemisphereMesh.material.uniforms.uDeepColor.value.copy(ws),g.water.hemisphereMesh.material.uniforms.uShallowColor.value.copy(ys),g.timeOfDay!=="night"&&(g.terrainDarknessBlend=.6));if(g.originalWaterValues&&g.water){const N=c<S,U=c>T;if(N){const C=Math.min(c/S,1),z=C*C,A=g.originalWaterValues.heightMultiplier+(4.8-g.originalWaterValues.heightMultiplier)*z,R=g.originalWaterValues.amplitude+(.8-g.originalWaterValues.amplitude)*z,L=g.originalWaterValues.waveSpeed+(1.825-g.originalWaterValues.waveSpeed)*z,I=g.originalWaterValues.waterLevel-.84*z;g.water.mesh.position.y=I,g.water.setWaveChoppiness(A,R,L)}else if(U){const C=Math.min((c-T)/5e3,1),z=C*C,A=4.8+(g.originalWaterValues.heightMultiplier-4.8)*z,R=.8+(g.originalWaterValues.amplitude-.8)*z,L=1.825+(g.originalWaterValues.waveSpeed-1.825)*z,I=g.originalWaterValues.waterLevel-.84+.84*z;g.water.mesh.position.y=I,g.water.setWaveChoppiness(A,R,L)}else if(!g.steadyStateReached){const C=g.originalWaterValues.waterLevel-.84;g.water.mesh.position.y=C,g.water.setWaveChoppiness(4.8,.8,1.825)}}return d(h.group,a),l(h.group,P*.6),Ma(a),c>g.duration?(g.isActive=!1,g.dropIntervalId!==null&&(clearInterval(g.dropIntervalId),g.dropIntervalId=null),g.terrainDarknessBlend=0,h.group&&(h.group.userData.drizzleSound&&ho(h.group.userData.drizzleSound),i.remove(h.group),h.group.traverse(D=>{D.geometry&&D.geometry.dispose()})),g.cloudData=null,g.originalSkyValues&&(g.originalSkyValues=null),yo(),g.originalWaterValues&&g.water&&(g.water.setWaveChoppiness(g.originalWaterValues.heightMultiplier,g.originalWaterValues.amplitude,g.originalWaterValues.waveSpeed),g.water.mesh.position.y=g.originalWaterValues.waterLevel,g.originalWaterValues=null),g.originalHemisphereColors&&g.water&&(g.water.hemisphereMesh.material.uniforms.uDeepColor.value.copy(g.originalHemisphereColors.deepColor),g.water.hemisphereMesh.material.uniforms.uShallowColor.value.copy(g.originalHemisphereColors.shallowColor),g.originalHemisphereColors=null,g.water=null),xo(),!1):!0}const Le=14,Ie=8,Ci=3,ai=0,Ct=2,gi=80,xa=-8,sr=80,ar=-104,or=.88,Sa=.3,xt=.22,So=200,nr=.982,To=-19,Je=.03,Os=.0262,et=.07,Ta=.018,ks=xt*1.6,rr=ks*ks,Ai=new Map,lr=new q(16777215);let Da=-1,oi=1,Do=1,bo=1;function ba(t){t!==Da&&(Da=t,oi=Math.pow(nr,t*60),Do=Math.pow(or,t*60),bo=Math.pow(.96,t*60))}function cr(t){if(Ai.has(t))return Ai.get(t);const e=new Float32Array(t),i=new Float32Array(t),s=new Float32Array(t),a=new Float32Array(t);for(let o=0;o<t;o++){const n=o/(t-1);e[o]=Math.pow(1-n,.6),i[o]=Math.pow(Math.max(0,1-n*5),1.5)*2.2,s[o]=(1-n)*.85,a[o]=(1-n)*.42}return Ai.set(t,{taper:e,cut:i,colG:s,colB:a}),Ai.get(t)}function xs(t,e){const i=document.createElement("canvas");i.width=i.height=128;const s=i.getContext("2d"),a=s.createRadialGradient(64,64,0,64,64,64);return a.addColorStop(0,`rgba(0, 255, 247, ${t})`),a.addColorStop(.25,`rgba(0, 220, 220, ${e})`),a.addColorStop(1,"rgba(0, 132, 180, 0)"),s.fillStyle=a,s.fillRect(0,0,128,128),new rs(i)}function Ri(t=Le){const e=t*2,i=(t-1)*6,s=new oe(new Float32Array(e*3),3);s.usage=va;const a=new oe(new Float32Array(e*3),3);a.usage=va;const o=new Uint16Array(i);for(let p=0;p<t-1;p++){const d=p*6,l=p*2;o[d]=l,o[d+1]=l+1,o[d+2]=l+2,o[d+3]=l+1,o[d+4]=l+3,o[d+5]=l+2}const n=new ii;return n.setAttribute("position",s),n.setAttribute("color",a),n.setIndex(new oe(o,1)),n}function Pi(t,e,i,s=Le,a=0,o=0,n=1){return Array.from({length:s},(p,d)=>({x:t+a*d*xt,y:e+o*d*xt,z:i+n*d*xt,vx:0,vy:0,vz:0}))}function Fi(t,e,i,s,a,o,n=So,p=To){t[0].x=e,t[0].y=i,t[0].z=s,t[0].vx=0,t[0].vy=0,t[0].vz=0;for(let d=1;d<t.length;d++){const l=t[d],u=t[d-1],c=u.x-l.x,h=u.y-l.y,f=u.z-l.z,r=Math.sqrt(c*c+h*h+f*f)||1e-5,m=(r-xt)*n;l.vx=(l.vx+c/r*m*a)*o,l.vy=(l.vy+(h/r*m+p)*a)*o,l.vz=(l.vz+f/r*m*a)*o,l.x+=l.vx*a,l.y+=l.vy*a,l.z+=l.vz*a;const _=l.x-u.x,v=l.y-u.y,w=l.z-u.z,x=_*_+v*v+w*w;if(x>rr){const y=ks/Math.sqrt(x);l.x=u.x+_*y,l.y=u.y+v*y,l.z=u.z+w*y}}}function Ii(t,e,i,s,a,o,n=Os,p=0){if(e.setDrawRange(0,Math.max(0,o-1)*6),o<2)return;const d=e.attributes.position.array,l=e.attributes.color.array,{taper:u,cut:c,colG:h,colB:f}=cr(o),r=e._lastColorCount!==o;r&&(e._lastColorCount=o);for(let m=0;m<o;m++){const _=n*u[m],{x:v,y:w,z:x}=t[m],y=c[m]*n,M=m*6,b=M+3;d[M]=v-i*_*s,d[M+1]=w-i*_*a-y,d[M+2]=x-i*_*p,d[b]=v+i*_*s,d[b+1]=w+i*_*a+y,d[b+2]=x+i*_*p,r&&(l[M]=0,l[M+1]=h[m],l[M+2]=f[m],l[b]=0,l[b+1]=h[m],l[b+2]=f[m])}e.attributes.position.needsUpdate=!0,r&&(e.attributes.color.needsUpdate=!0)}class Bs{constructor(){this._model=null,this._mixer=null,this._action=null,this._scene=null,this._shadowClones=[],this.animTimeScaleBoost=1,this.birdY=23,this.velocityY=0,this.minY=Ct,this._controlEnabled=!1,this._isMouseDown=!1,this._isShiftPressed=!1,this._isRightMouseDown=!1,this._activeTouchCount=0,this._inputListeners=[],this._timeSinceInput=0,this._soarFlapTimer=0,this._soarFlapBurst=!1,this._soarFlapBurstTimer=0,this._wasInSoarMode=!1,this._soarRockPhase=0,this._soarDriftPhase=0,this._soarRockPitch=0,this._soarRockRoll=0,this._rollActive=!1,this._rollAngle=0,this._secondaryModel=null,this._secondaryMixer=null,this._secondaryAction=null,this._secondaryYOffset=.002,this._secondaryXOffset=.14,this._secondaryBaseRotZ=-.05,this._leftFeatherMesh=null,this._rightFeatherMesh=null,this._featherGeomL=null,this._featherGeomR=null,this._chainL=[],this._chainR=[],this._leftFeatherMesh2=null,this._rightFeatherMesh2=null,this._featherGeomL2=null,this._featherGeomR2=null,this._chainL2=[],this._chainR2=[],this._blueSeedDecor=null,this._redSeedDecor=null,this._glowSprite=null}get model(){return this._model}get isControlEnabled(){return this._controlEnabled}get isRolling(){return this._rollActive}get isFlapping(){return this._mixer?this._mixer.timeScale>.05:!1}enableControl(){this._controlEnabled=!0}disableControl(){this._controlEnabled=!1}setNightGlow(e){if(this._nightGlow=e,this._glowSprite){const i=this._glowSprite.material;this._glowBaseScale||(this._glowBaseScale=this._glowSprite.scale.clone()),i.map?.dispose(),i.map=e?xs(.4,.18):xs(.25,.1),i.needsUpdate=!0;const s=this._glowBaseScale,a=e?1.3:1;this._glowSprite.scale.set(s.x*a,s.y*a,s.z)}this._model&&this._model.traverse(i=>{if(!i.material||i===this._glowSprite||i===this._blueSeedDecor||i===this._redSeedDecor)return;(Array.isArray(i.material)?i.material:[i.material]).forEach(a=>{a._dayBrightness===void 0&&(a._dayBrightness={color:a.color?a.color.getHex():null,emissive:a.emissive?a.emissive.getHex():null,emissiveI:a.emissiveIntensity??null});const o=a._dayBrightness;a.emissive?e?(a.color&&a.emissive.copy(a.color),a.emissiveIntensity=2.828):(o.emissive!==null&&a.emissive.setHex(o.emissive),o.emissiveI!==null&&(a.emissiveIntensity=o.emissiveI)):a.color&&o.color!==null&&(e?a.color.setHex(o.color).lerp(lr,.85):a.color.setHex(o.color))})})}keepFlapping(){this._timeSinceInput=0}snapChainTrail(e,i){if(!this._chainL)return;const s=this._model?this._model.position.x:0,a=this._model?this._model.position.y:0,o=this._model?this._model.position.z:0;for(const n of[this._chainL,this._chainR,this._chainL2,this._chainR2])for(let p=0;p<n.length;p++)n[p].x=s+p*xt*e,n[p].y=a,n[p].z=o+p*xt*i,n[p].vx=0,n[p].vy=0,n[p].vz=0}dampenChain(){for(const e of[this._chainL,this._chainR,this._chainL2,this._chainR2])if(e)for(let i=1;i<e.length;i++)e[i].vx=0,e[i].vy=0,e[i].vz=0}triggerRoll(){this._rollActive=!0,this._rollAngle=0,this.velocityY+=18}load(e){return new Promise((i,s)=>{const a=new eo;Promise.all([new Promise((o,n)=>a.load("./models/synthwave-bird.glb",o,void 0,n)),new Promise((o,n)=>a.load("./models/synth-brd-remesh-anim-1.glb",o,void 0,n))]).then(([o,n])=>{this._scene=e,this._model=o.scene,this._model.scale.setScalar(1.54),this._model.rotation.y=0,this._model.visible=!1,this._model.renderOrder=10,e.add(this._model),this._model.traverse(c=>{c.material&&(Array.isArray(c.material)?c.material:[c.material]).forEach(f=>{f.color&&f.color.set(65442)}),c.renderOrder=20}),this._secondaryModel=n.scene,this._secondaryModel.scale.setScalar(1.36),this._secondaryModel.rotation.y=0,this._secondaryModel.visible=!1,this._secondaryModel.renderOrder=10,e.add(this._secondaryModel);const p=new ga({color:new q(20991),emissive:new q(5223423),emissiveIntensity:.2,transparent:!0,opacity:.18,depthWrite:!1,roughness:.3});this._secondaryModel.traverse(c=>{c.isMesh&&(c.material=p,c.renderOrder=20)}),n.animations?.length>0&&(this._secondaryMixer=new Ht(this._secondaryModel),this._secondaryAction=this._secondaryMixer.clipAction(n.animations[0]),this._secondaryAction.play());const d=[{scale:1.4*.94,color:39242,opacity:.92,renderOrder:97,lineWidth:3},{scale:1.4*1.04,color:17282,opacity:.75,renderOrder:96,lineWidth:6}],l=(c,h)=>{const f=c.clone();f.computeBoundingBox();const r=f.boundingBox.min.y,m=f.boundingBox.max.y-r||1,_=f.attributes.position,v=new Float32Array(_.count*3),w=new q(h);for(let x=0;x<_.count;x++){const M=.15+(_.getY(x)-r)/m*.85;v[x*3]=w.r*M,v[x*3+1]=w.g*M,v[x*3+2]=w.b*M}return f.setAttribute("color",new oe(v,3)),f};for(let c=0;c<d.length;c++){const h=d[c],f=to(o.scene);f.scale.setScalar(h.scale),f.visible=!1;const r=[];f.traverse(v=>{if(v.isLine||v.isLineSegments){const w=l(v.geometry,h.color);v.geometry=w,v.material=new ia({color:h.color,transparent:!0,opacity:h.opacity,depthWrite:!1,vertexColors:!0}),v.renderOrder=h.renderOrder,r.push(v.material)}else v.isMesh&&(v.material=new Mt({color:h.color,transparent:!0,opacity:h.opacity,depthWrite:!1}),r.push(v.material))});let m=null,_=null;o.animations?.length>0&&(m=new Ht(f),_=m.clipAction(o.animations[0]),_.play()),f.renderOrder=15,e.add(f),this._shadowClones.push({mesh:f,ox:0,oy:-.002,oz:0,mixer:m,action:_,materials:r,baseOpacity:h.opacity,pulsePhase:c*2.1})}const u=new Qa(new Ja({map:xs(.25,.1),transparent:!0,blending:Ae,depthWrite:!1}));u.scale.set(2.5,2,.8),u.renderOrder=99,this._model.add(u),this._glowSprite=u,this._nightGlow&&this.setNightGlow(!0),this._createSeeds(),o.animations?.length>0&&(this._mixer=new Ht(this._model),this._action=this._mixer.clipAction(o.animations[0]),this._action.play()),i(this._model)},void 0,s)})}initFeathers(e,i,s,a,o=0,n=0,p=1){this._chainL=Pi(i-Je,s,a,Le,o,n,p),this._chainR=Pi(i+Je,s,a,Le,o,n,p),this._chainL2=Pi(i-et,s,a,Ie,o,n,p),this._chainR2=Pi(i+et,s,a,Ie,o,n,p);const d=new Mt({vertexColors:!0,transparent:!0,opacity:.88,side:_e,depthWrite:!1,blending:Ae});this._featherGeomL=Ri(),this._featherGeomR=Ri(),this._leftFeatherMesh=new te(this._featherGeomL,d),this._rightFeatherMesh=new te(this._featherGeomR,d.clone()),this._leftFeatherMesh.renderOrder=this._rightFeatherMesh.renderOrder=101,this._leftFeatherMesh.frustumCulled=this._rightFeatherMesh.frustumCulled=!1,e.add(this._leftFeatherMesh),e.add(this._rightFeatherMesh);const l=new Mt({vertexColors:!0,transparent:!0,opacity:.65,side:_e,depthWrite:!1,blending:Ae});this._featherGeomL2=Ri(Ie),this._featherGeomR2=Ri(Ie),this._leftFeatherMesh2=new te(this._featherGeomL2,l),this._rightFeatherMesh2=new te(this._featherGeomR2,l.clone()),this._leftFeatherMesh2.renderOrder=this._rightFeatherMesh2.renderOrder=100,this._leftFeatherMesh2.frustumCulled=this._rightFeatherMesh2.frustumCulled=!1,e.add(this._leftFeatherMesh2),e.add(this._rightFeatherMesh2)}setupInputHandlers(){const e=(l,u,c,h)=>{l.addEventListener(u,c,h),this._inputListeners.push({target:l,type:u,handler:c,opts:h})},i=l=>{l.button===0&&(this._isMouseDown=!0),l.button===2&&(this._isRightMouseDown=!0)},s=l=>{l.button===0&&(this._isMouseDown=!1),l.button===2&&(this._isRightMouseDown=!1)},a=l=>{l.key==="Shift"&&(this._isShiftPressed=!0)},o=l=>{l.key==="Shift"&&(this._isShiftPressed=!1)},n=l=>{this._activeTouchCount=l.touches.length},p=l=>{this._activeTouchCount=l.touches.length},d=l=>l.preventDefault();e(window,"mousedown",i),e(window,"mouseup",s),e(window,"keydown",a),e(window,"keyup",o),e(window,"touchstart",n,{passive:!0}),e(window,"touchend",p,{passive:!0}),e(window,"contextmenu",d)}removeInputHandlers(){this._inputListeners.forEach(({target:e,type:i,handler:s,opts:a})=>{e.removeEventListener(i,s,a)}),this._inputListeners=[],this._isMouseDown=!1,this._isShiftPressed=!1,this._isRightMouseDown=!1,this._activeTouchCount=0}updateAnimation(e){if(this._mixer){if(this._rollActive)this._wasInSoarMode=!1,this._mixer.timeScale+=(.2-this._mixer.timeScale)*Math.min(1,e*5),this._mixer.update(e*this.animTimeScaleBoost);else if(this._timeSinceInput>.4){!this._wasInSoarMode&&this._action&&(this._action.time=Sa,this._mixer.timeScale=0,this._mixer.update(0),this._soarRockPhase=Math.random()*Math.PI*2,this._soarDriftPhase=Math.random()*Math.PI*2),this._wasInSoarMode=!0,this._soarRockPhase=(this._soarRockPhase||0)+e*.6;const i=Math.sin(this._soarRockPhase)*.22,s=Math.cos(this._soarRockPhase*.8)*.05;this._soarDriftPhase=(this._soarDriftPhase||0)+e*.4;const a=Math.sin(this._soarDriftPhase)*.15,o=Math.sin(this._soarDriftPhase*.5)*.08;this._model&&(this._soarRockPitch=s,this._soarRockRoll=i,this._model.position.x+=a*e,this._model.position.z+=o*e),this._soarFlapTimer+=e,this._soarFlapTimer>=2.5&&!this._soarFlapBurst&&(this._soarFlapBurst=!0,this._soarFlapBurstTimer=0,this._soarFlapTimer=0),this._soarFlapBurst&&(this._soarFlapBurstTimer+=e,this._soarFlapBurstTimer>=.45&&(this._soarFlapBurst=!1,this._action&&(this._action.time=Sa,this._mixer.update(0)))),this._mixer.timeScale=this._soarFlapBurst?2:0,this._mixer.update(e*this.animTimeScaleBoost)}else{this._wasInSoarMode=!1;const i=this._model?Math.max(0,Math.min(1,(-this._model.rotation.x-.5)/.4)):0,s=(1+Math.max(-.55,Math.min(1,this.velocityY*.045)))*(1-i);this._mixer.timeScale+=(s-this._mixer.timeScale)*Math.min(1,e*5),this._mixer.update(e*this.animTimeScaleBoost)}this._secondaryMixer&&this._secondaryAction&&this._action&&(this._secondaryMixer.timeScale=this._mixer.timeScale,this._secondaryAction.time=this._action.time,this._secondaryMixer.update(0));for(const{action:i,mixer:s}of this._shadowClones)i&&this._action&&(i.time=this._action.time,s.update(0))}}updateFeathers(e,i=Le,s=Ie,a=0,o=0,n=0,p=0,d=34,l=So,u=To){if(this._model&&this._shadowClones.length){const D=this._model.position.x,W=this._model.position.y,E=this._model.position.z;for(const{mesh:k,ox:X,oy:N,oz:U}of this._shadowClones)k.visible=this._model.visible,k.position.set(D+X,W+N,E+U),k.rotation.copy(this._model.rotation)}if(this._secondaryModel&&this._model&&(this._secondaryModel.visible=this._model.visible,this._secondaryModel.position.copy(this._model.position),this._secondaryModel.position.y+=this._secondaryYOffset,this._secondaryModel.rotation.copy(this._model.rotation),this._secondaryModel.rotation.z+=this._secondaryBaseRotZ,this._secondaryXOffset!==0&&this._secondaryModel.translateZ(this._secondaryXOffset)),!this._leftFeatherMesh||!this._model)return;const c=this._model.visible;if(this._leftFeatherMesh.visible=c,this._rightFeatherMesh.visible=c,this._leftFeatherMesh2.visible=c,this._rightFeatherMesh2.visible=c,!c)return;if(a!==0){const D=a*e;for(const W of[this._chainL,this._chainR,this._chainL2,this._chainR2])for(const E of W)E.z-=D}const h=Math.sqrt(o*o+p*p);if(h>.5){const D=-o/h*d*e,W=-p/h*d*e;for(const E of[this._chainL,this._chainR,this._chainL2,this._chainR2])for(let k=1;k<E.length;k++)E[k].vx+=D,E[k].vz+=W}const f=this._model.rotation.y,r=this._model.rotation.z,m=Math.cos(r)*Math.cos(f),_=Math.sin(r),v=-Math.cos(r)*Math.sin(f),w=this._model.position.x,x=this._model.position.y-.04,y=this._model.position.z,M=this._model.rotation.x,b=Math.max(0,Math.min(1,(-M-.11)/.5)),P=Math.min(1,Math.abs(r)/.8),S=l*(1-b*.42),T=u*(1-b*1.86)*(1-P*.45);ba(e),Fi(this._chainL,w-Je*m,x-Je*_,y-Je*v,e,oi,S,T),Fi(this._chainR,w+Je*m,x+Je*_,y+Je*v,e,oi,S,T),this._chainL2.length&&Fi(this._chainL2,w-et*m,x-et*_,y-et*v,e,oi,S,T),this._chainR2.length&&Fi(this._chainR2,w+et*m,x+et*_,y+et*v,e,oi,S,T),Ii(this._chainL,this._featherGeomL,-1,m,_,i,Os,v),Ii(this._chainR,this._featherGeomR,1,m,_,i,Os,v),Ii(this._chainL2,this._featherGeomL2,-1,m,_,s,Ta,v),Ii(this._chainR2,this._featherGeomR2,1,m,_,s,Ta,v)}updateSeeds(e){if(!this._blueSeedDecor)return;const i=.05+e*.95;this._blueSeedDecor.scale.setScalar(i),this._blueSeedDecor.material.emissiveIntensity=e*5,this._redSeedDecor.scale.setScalar(i),this._redSeedDecor.material.emissiveIntensity=e*5}applyPhysics(e){if(!this._controlEnabled||!this._model)return;const i=this._isUpInput()||this._isLowerInput();i?(this._timeSinceInput=0,this._soarFlapTimer=0,this._soarFlapBurst=!1):this._timeSinceInput+=e,this._isUpInput()&&(this.velocityY+=sr*e),this._isLowerInput()&&(this.velocityY+=ar*e);const s=!i&&this.velocityY>0;this.velocityY+=(s?xa*.15:xa)*e,ba(e),this.velocityY*=s?bo:Do,this.birdY+=this.velocityY*e,this.birdY=Math.max(this.minY,Math.min(gi,this.birdY)),(this.birdY<=this.minY||this.birdY>=gi)&&(this.velocityY=0);const a=this._timeSinceInput>.4,n=Math.max(-.9,Math.min(.45,this.velocityY*.1+(a?this._soarRockPitch:0)))-this._model.rotation.x,d=n>0&&this._model.rotation.x<-.05?e*5.83:e*1.5;this._model.rotation.x+=n*Math.min(1,d),this._rollActive?(this._rollAngle+=Math.PI*2/.65*e,this._rollAngle>=Math.PI*2&&(this._rollActive=!1,this._rollAngle=0),this._model.rotation.z=this._rollAngle):a?this._model.rotation.z+=(this._soarRockRoll-this._model.rotation.z)*Math.min(1,e*2):this._model.rotation.z=Math.max(-.2,Math.min(.2,-this.velocityY*.03))}dispose(e){for(const{mesh:i,mixer:s}of this._shadowClones)s&&s.stopAllAction(),e.remove(i),i.traverse(a=>{a.geometry&&a.geometry.dispose(),a.material&&(Array.isArray(a.material)?a.material.forEach(o=>o.dispose()):a.material.dispose())});this._shadowClones=[],this._model&&(e.remove(this._model),this._model.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&(Array.isArray(i.material)?i.material.forEach(s=>s.dispose()):i.material.dispose())}),this._model=null),this._secondaryModel&&(this._secondaryMixer&&this._secondaryMixer.stopAllAction(),e.remove(this._secondaryModel),this._secondaryModel.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&(Array.isArray(i.material)?i.material.forEach(s=>s.dispose()):i.material.dispose())}),this._secondaryModel=null,this._secondaryMixer=null,this._secondaryAction=null);for(const i of[this._leftFeatherMesh,this._rightFeatherMesh,this._leftFeatherMesh2,this._rightFeatherMesh2])i&&(e.remove(i),i.geometry?.dispose(),i.material?.dispose());this._leftFeatherMesh=this._rightFeatherMesh=null,this._leftFeatherMesh2=this._rightFeatherMesh2=null,this._featherGeomL=this._featherGeomR=null,this._featherGeomL2=this._featherGeomR2=null,this._chainL=this._chainR=this._chainL2=this._chainR2=[],this._mixer=null,this._action=null,this._blueSeedDecor=null,this._redSeedDecor=null}_isUpInput(){return this._isMouseDown&&!this._isLowerInput()||this._activeTouchCount===1}_isLowerInput(){return this._isShiftPressed||this._isRightMouseDown||this._activeTouchCount>=2}isUpInput(){return this._isUpInput()}isDownInput(){return this._isLowerInput()}_createSeeds(){const e=(i,s)=>{const a=new te(new rn(s,12),new ga({color:16711680,emissive:new q(i),emissiveIntensity:0,transparent:!0,opacity:.45,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a};this._blueSeedDecor=e(65322,[new K(0,-.22),new K(.032,-.14),new K(.062,-.04),new K(.068,.03),new K(.064,.11),new K(.054,.2),new K(.038,.29),new K(.018,.36),new K(0,.4)]),this._redSeedDecor=e(16729122,[new K(0,-.18),new K(.026,-.11),new K(.052,-.03),new K(.057,.02),new K(.053,.09),new K(.044,.17),new K(.03,.25),new K(.013,.31),new K(0,.34)]),this._blueSeedDecor.position.set(0,-.03,-.15),this._redSeedDecor.position.set(0,-.04,-.15),this._model.add(this._blueSeedDecor),this._model.add(this._redSeedDecor)}}const hr=1.3,ur=1.6,fr=1.65,dr=.14;class mr{constructor(e,i=0){this._scene=e,this._waterLevel=i,this._active=!1,this._sharkModel=null,this._sharkMixer=null,this._isUnderwater=!1,this._transitionRings=[],this._transitionParticles=[],this._boostStreaks=[]}get isUnderwater(){return this._isUnderwater}get sharkModel(){return this._sharkModel}setWaterLevel(e){this._waterLevel=e}load(){return this._active=!0,new Promise(e=>{new eo().load("./models/shrk-synth.glb",i=>{if(!this._active){e();return}this._sharkModel=i.scene,this._sharkModel.scale.setScalar(.4),this._sharkModel.rotation.order="YXZ",this._sharkModel.visible=!1,this._scene.add(this._sharkModel),i.animations?.length>0&&(this._sharkMixer=new Ht(this._sharkModel),this._sharkMixer.clipAction(i.animations[0]).play()),e()})})}_spawnTransitionEffect(e,i,s){e?bn():Cn();const a=2.8,o=i.x+(s?s.x*a:0),n=i.z+(s?s.z*a:0),p=e?"#00aaff":"#00ffee",d=document.createElement("div");d.style.cssText=`position:fixed;inset:0;background:${p};opacity:0.55;pointer-events:none;z-index:9999;transition:opacity 0.55s ease-out;`,document.body.appendChild(d),requestAnimationFrame(()=>{d.style.opacity="0"}),setTimeout(()=>d.remove(),650);const l=e?52479:11206638;for(let r=0;r<3;r++){const m=new Ni(.05,.55,48),_=new Mt({color:l,transparent:!0,opacity:.9,side:_e,depthWrite:!1,blending:Ae}),v=new te(m,_);v.rotation.x=-Math.PI/2,v.position.set(o,this._waterLevel+.05,n),this._scene.add(v),this._transitionRings.push({mesh:v,age:-r*.13,duration:hr})}const u=document.createElement("canvas");u.width=u.height=32;const c=u.getContext("2d"),h=c.createRadialGradient(16,16,0,16,16,16);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.4,e?"rgba(0,200,255,0.8)":"rgba(0,255,220,0.8)"),h.addColorStop(1,"rgba(0,100,200,0)"),c.fillStyle=h,c.fillRect(0,0,32,32);const f=new rs(u);for(let r=0;r<40;r++){const m=new Ja({map:f,transparent:!0,opacity:1,blending:Ae,depthWrite:!1}),_=new Qa(m),v=.18+Math.random()*.32;_.scale.setScalar(v),_.position.set(o,this._waterLevel,n),this._scene.add(_);const w=Math.random()*Math.PI*2,x=2.5+Math.random()*7,y=e?-(1.5+Math.random()*4):3+Math.random()*8;this._transitionParticles.push({sprite:_,mat:m,vx:Math.cos(w)*x,vy:y,vz:Math.sin(w)*x,age:0})}}spawnBoostStreaks(e,i,s){const a=this._isUnderwater&&this._sharkModel?this._sharkModel.position:e,o=Math.cos(i),n=-Math.sin(i);for(let p=0;p<24;p++){const d=(Math.random()-.5)*2,l=(Math.random()-.5)*1.4,u=Math.random()*.5,c=2+Math.random()*3,h=a.x+o*d+s.x*u,f=a.y+l+s.y*u,r=a.z+n*d+s.z*u,m=h-s.x*c,_=f-s.y*c,v=r-s.z*c,w=new ii;w.setAttribute("position",new oe(new Float32Array([h,f,r,m,_,v]),3));const x=.45+Math.random()*.55,y=new ia({color:11202303,transparent:!0,opacity:x,blending:Ae,depthWrite:!1}),M=new ln(w,y);this._scene.add(M),this._boostStreaks.push({line:M,geo:w,mat:y,baseOpacity:x,age:0,duration:.2+Math.random()*.18})}}update(e,i,s,a,o,n,p,d,l,u,c=0){p&&!d&&(this.spawnBoostStreaks(i,s,a),this._isUnderwater?An():Rn());const h=i.y<this._waterLevel;h!==this._isUnderwater&&(this._isUnderwater=h,l&&(l.visible=!h),this._spawnTransitionEffect(h,i,a)),this._sharkModel&&(this._sharkModel.visible=h,h&&(this._sharkModel.position.set(i.x+a.x*5.05,i.y+a.y*5.05*.25,i.z+a.z*5.05),this._sharkModel.rotation.x=-o+Math.abs(n)*dr,this._sharkModel.rotation.y=s+Math.PI+c,this._sharkModel.rotation.z=-n)),this._sharkMixer&&(this._sharkMixer.timeScale=u,this._sharkMixer.update(e));for(let f=this._transitionRings.length-1;f>=0;f--){const r=this._transitionRings[f];if(r.age+=e,r.age<0)continue;const m=r.age/r.duration;if(m>=1){this._scene.remove(r.mesh),r.mesh.geometry.dispose(),r.mesh.material.dispose(),this._transitionRings.splice(f,1);continue}r.mesh.scale.setScalar(1+m*20),r.mesh.material.opacity=(1-m)*.85}for(let f=this._transitionParticles.length-1;f>=0;f--){const r=this._transitionParticles[f];r.age+=e;const m=r.age/ur;if(m>=1){this._scene.remove(r.sprite),r.mat.map?.dispose(),r.mat.dispose(),this._transitionParticles.splice(f,1);continue}r.sprite.position.x+=r.vx*e,r.sprite.position.y+=r.vy*e,r.sprite.position.z+=r.vz*e,r.vy-=9.8*e,r.vx*=1-e*1.5,r.vz*=1-e*1.5,r.mat.opacity=Math.pow(1-m,1.4)}for(let f=this._boostStreaks.length-1;f>=0;f--){const r=this._boostStreaks[f];r.age+=e;const m=r.age/r.duration;if(m>=1){this._scene.remove(r.line),r.geo.dispose(),r.mat.dispose(),this._boostStreaks.splice(f,1);continue}r.mat.opacity=r.baseOpacity*Math.pow(1-m,1.4)}return p}dispose(){this._active=!1,this._sharkModel&&(this._sharkMixer&&(this._sharkMixer.stopAllAction(),this._sharkMixer=null),this._scene.remove(this._sharkModel),this._sharkModel.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(s=>s.dispose())}),this._sharkModel=null);for(const e of this._transitionRings)this._scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();this._transitionRings.length=0;for(const e of this._transitionParticles)this._scene.remove(e.sprite),e.mat.map?.dispose(),e.mat.dispose();this._transitionParticles.length=0;for(const e of this._boostStreaks)this._scene.remove(e.line),e.geo.dispose(),e.mat.dispose();this._boostStreaks.length=0,this._isUnderwater=!1}}function $l(t){return 1-(1-t)*(1-t)}function Kl(t){return t*t*t}function Ca(t){if(t<.5)return 4*t*t*t;const e=-2*t+2;return 1-e*e*e/2}function pr(t){let e=t>>>0;return()=>(e=Math.imul(1664525,e)+1013904223>>>0,e/4294967295)}const ra=142,gr=142,Aa=20,vr=1,Ra=3,_r=1.8,wr=10,Si=220,Ql=Si+20,ct=22,$e=Si-10;function yr(t){const e=[],i=[],s=[],a=[],o=[];t.traverse(n=>{!n.isMesh||!n.material||(n.userData.spawnOpacity=n.material.opacity,n.userData.rotationSpeed!==void 0?(e.push(n),a.push(n)):n.userData.isBaseRing||n.userData.isTurboGlow?a.push(n):n.userData.isConvergingRing?(i.push(n),o.push(n)):n.userData.isConvergingChevron&&(s.push(n),o.push(n)))}),t.userData._blades=e,t.userData._cRings=i,t.userData._cChevrons=s,t.userData._staticMeshes=a,t.userData._dynamicMeshes=o}function Co(t){t.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(s=>{for(const a of Object.values(s))a&&a.isTexture&&a.dispose();s.dispose()})})}function Mr(t,e,i){e.remove(t);const s=i.indexOf(t);s!==-1&&i.splice(s,1),Co(t)}function la(t,e,i=Math.random){const s=[];for(let a=0;a<t;a++)s.push(!1);for(let a=0;a<e;a++)s.push(!0);for(let a=s.length-1;a>0;a--){const o=Math.floor(i()*(a+1));[s[a],s[o]]=[s[o],s[a]]}return s}const xr=`
  attribute float aSize;
  attribute vec3  aColor;
  attribute vec3  aVelocity;      // initial velocity per particle
  attribute float aFlickerPhase;  // random 0..2π phase offset per particle
  uniform   float uElapsed;
  uniform   float uApproachSpeed;
  uniform   float uUpwardBurst;   // 1.0 = upward burst, 0.0 = forward burst
  varying   vec3  vColor;
  varying   float vFlickerPhase;
  void main() {
    vColor = aColor;
    vFlickerPhase = aFlickerPhase;
    float t = uElapsed;
    // Analytical drag: integral of exp(-k*s) from 0 to t = (1 - exp(-k*t)) / k
    float intXY = (1.0 - exp(-3.0 * t)) / 3.0;
    float intZ  = (1.0 - exp(-2.0 * t)) / 2.0;
    float dx = aVelocity.x * intXY;
    float dz = aVelocity.z * intZ - uApproachSpeed * t;
    float dy;
    if (uUpwardBurst > 0.5) {
      dy = aVelocity.y * t - 20.0 * t * t; // stronger gravity — peaks sooner, drops harder
    } else {
      dy = aVelocity.y * intXY;
    }
    vec4 mv = modelViewMatrix * vec4(position + vec3(dx, dy, dz), 1.0);
    gl_PointSize = aSize * (300.0 / -mv.z);
    gl_Position  = projectionMatrix * mv;
  }
`,Sr=`
  uniform float uOpacity;
  uniform float uElapsed;
  varying vec3  vColor;
  varying float vFlickerPhase;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float core = pow(max(0.0, 1.0 - d * 2.0), 5.0);
    float halo = smoothstep(0.5, 0.35, d) * 0.15;
    // Per-particle flicker: kicks in at t=0.5s, each particle has its own phase
    // so they wink out independently. Two frequencies give an organic beat.
    float fp = clamp((uElapsed - 0.5) / 1.5, 0.0, 1.0);
    float flicker = 1.0 - fp * 0.85 * (0.5 + 0.35 * sin(uElapsed * 36.0 + vFlickerPhase)
                                             + 0.15 * sin(uElapsed * 71.0 + vFlickerPhase * 1.7));
    gl_FragColor = vec4(vColor, (core + halo) * uOpacity * max(0.0, flicker));
  }
`;function Zi(t,e,i,s,a,o,n,p=0,d=!1){const c=new q(t?16720384:43775),h=new q(t?16746581:8969727),f=new Float32Array(180),r=new Float32Array(180),m=new Float32Array(180),_=new Float32Array(60),v=new Float32Array(60);for(let b=0;b<60;b++){f[b*3]=e,f[b*3+1]=i,f[b*3+2]=s,v[b]=Math.random()*Math.PI*2;const P=d?12+Math.random()*20:15+Math.random()*30,S=8+Math.random()*16,T=Math.random()*Math.PI*2;d?(m[b*3]=Math.cos(T)*S,m[b*3+1]=P,m[b*3+2]=Math.sin(T)*S*.7):(m[b*3]=Math.cos(T)*S,m[b*3+1]=Math.sin(T)*S*.7,m[b*3+2]=-P);const D=Math.random()<.6?c:h;r[b*3]=D.r,r[b*3+1]=D.g,r[b*3+2]=D.b,_[b]=.8+Math.random()*Math.random()*3.5}const w=new ii;w.setAttribute("position",new oe(f,3)),w.setAttribute("aColor",new oe(r,3)),w.setAttribute("aSize",new oe(_,1)),w.setAttribute("aVelocity",new oe(m,3)),w.setAttribute("aFlickerPhase",new oe(v,1));const x=new Oe({vertexShader:xr,fragmentShader:Sr,uniforms:{uOpacity:{value:1},uElapsed:{value:0},uApproachSpeed:{value:p},uUpwardBurst:{value:d?1:0}},transparent:!0,depthWrite:!1,blending:Ae}),y=new Ka(w,x);a.add(y),o.push(y);let M=0;n.push({done:!1,update(b){if(M+=b,x.uniforms.uElapsed.value=M,x.uniforms.uOpacity.value=Math.max(0,1-(M/2)**2),M>=2){y.parent&&a.remove(y);const P=o.indexOf(y);P!==-1&&o.splice(P,1),w.dispose(),x.dispose(),this.done=!0}}})}let Hs=!1;function Tr(t){io(),_n(t),Hs=!1}function Dr(t,e,i){so(t/e*100,{currentMass:t,totalMass:e,winPercentage:i}),t>=Math.ceil(e*i)&&(ao(),Hs||(Hs=!0,mo())),oo()}function br(){io()}function Ao(t,e){for(let i=t.length-1;i>=0;i--)t[i].update(e),t[i].done&&t.splice(i,1)}function Cr(t,e,{birdZ:i,birdWorldY:s,ringSpeed:a,approachSpeed:o=0,scene:n,trackingArray:p,onHit:d,onMiss:l}){for(let c=t.length-1;c>=0;c--){const h=t[c];h.position.z+=(a-o)*e,h.userData.animTime+=e;const f=h.userData.animTime;h.userData.collected&&(h.userData.collectedTime+=e);const r=h.userData.collectedTime;h.rotation.z+=(h.userData.isLower?-.5:.5)*e;const m=h.userData.collected?2:1;for(const w of h.userData._blades)w.rotation.z+=w.userData.rotationSpeed*e*60*m,h.userData.collected&&(w.material.color.setHex(16763904),w.material.opacity=w.userData.baseOpacity*(.85+Math.sin(r*8)*.15)*1.3);for(const w of h.userData._cRings){const x=(f-w.userData.animationOffset)%1.5;if(x<0){w.material.opacity=0;continue}const y=Math.min(x/1.5,1),M=w.userData.startRadius*(1-y*.6);w.scale.set(M/w.userData.ringRadius,M/w.userData.ringRadius,1);const b=y<.15?y/.15:y>.5?(1-y)/.5:1;w.material.opacity=b*.4}for(const w of h.userData._cChevrons){const x=(f-w.userData.animationOffset)%1.5;if(x<0){w.visible=!1;continue}w.visible=!0;const y=Math.min(x/1.5,1),M=w.userData.startRadius*(1-y*.64);w.position.x=Math.cos(w.userData.angle)*M,w.position.y=Math.sin(w.userData.angle)*M;const b=1-y*.45;w.scale.set(b,b,1);const P=y<.15?y/.15:y>.5?(1-y)/.5:1;w.material.opacity=P*.7,h.userData.collected&&w.material.color.setHex(65484)}const _=i-h.position.z,v=Math.min(1,Math.max(0,1-(_-Aa)/(gr-Aa)));if(v<1){for(const w of h.userData._staticMeshes)w.material.opacity=(w.userData.spawnOpacity??w.material.opacity)*v;for(const w of h.userData._dynamicMeshes)w.material.opacity*=v}!h.userData.checked&&h.position.z>=i&&(h.userData.checked=!0,Math.abs(h.position.y-s)<h.userData.innerRadius*vr?(h.userData.collected=!0,d?.(h.userData.isLower)):l?.()),h.position.z>i+20&&(Mr(h,n,p),t.splice(c,1))}}class Ar{constructor(e={}){this.attack=e.attack??.35,this.hold=e.hold??.45,this.release=e.release??3,this.ringZ=e.ringZ??55,this.birdZ=e.birdZ??8,this.camFollow=e.camFollow??.7,this.camX=e.camX??3,this.camOmega=e.camOmega??4,this.fovNarrow=e.fovNarrow??9,this.pitch=e.pitch??.82,this.gustVol=e.gustVol??.7,this.fullMiss=e.fullMiss??4,this.strengthMin=e.strengthMin??.5,this.cloudReverse=e.cloudReverse??3,this.reset()}reset(){this._active=!1,this._time=0,this._env=0,this._envPrev=0,this._strength=1,this._sideSign=1,this._soundOn=!1,this._ringVel=0,this._pitchPrev=0}get isActive(){return this._active}get env(){return this._env}get time(){return this._time}trigger(e=0){this._active=!0,this._time=0,this._sideSign=Math.random()<.5?-1:1,this._soundOn=!0,this._strength=Math.max(this.strengthMin,Math.min(1,e/this.fullMiss)),Pn(),Nn()}update(e){if(this._envPrev=this._env,this._active){this._time+=e;let i;if(this._time<this.attack)i=this._time/this.attack;else if(this._time<this.attack+this.hold)i=1;else{const s=(this._time-this.attack-this.hold)/this.release;i=1-s,s>=1&&(i=0,this._active=!1)}this._env=(i<=0?0:i*i*(3-2*i))*this._strength}else this._env=0;return this._ringVel=e>0?(this._env-this._envPrev)/e*this.ringZ:0,this._soundOn&&(uo(this._env*this.gustVol),this._active||(this._soundOn=!1)),this._env}get ringApproachSpeed(){return this._ringVel}camOffsetX(){return this._sideSign*this._env*this.camX*Math.sin(this._time*this.camOmega)}camOffsetZ(){return this._env*this.birdZ*this.camFollow}birdOffsetZ(){return this._env*this.birdZ}fovDelta(){return-this._env*this.fovNarrow}cloudDriftFactor(){return 1-this._env*this.cloudReverse}stripPitch(e){e&&(e.rotation.x-=this._pitchPrev)}addPitch(e){e&&(this._pitchPrev=this._env*this.pitch,e.rotation.x+=this._pitchPrev)}}let fe=null,ue=null,ae=!1,ce=null,Gi=null,F=null,Ti=[],ui=0,ft=[],We=0,_t=0,Ke=0,Li=(Ct+gi)/2,Vs=0,Yt=!1,Ye=0,qi=0,At=[],vi=[],Ns=!1,rt=!1,ge=null;const ve=new Ar;let ji=0,$i=65,ee=!1,Ki=null,Xt=0,Rt=null,Nt=0,Qi=0,Q=null,cs=23,wt=23,ze=0,hs=new Map,ot=ct,ni=Si,fi=$e-30,Ei=0,Ji=null,di=0,kt=0;const Rr=55,Pr=14,Fr=6.5,Ir=5.631;let we=null;const Pa=new $,Wr=new $(0,0,-1),Pt={};let Wt=1,Us=!1;const zr=Ct+8;function Ro(t){Pt[t.key]=!0}function Po(t){delete Pt[t.key]}let mi=!1,Oi=0;const Fa=.45;let Fo=0,Io=0,Wo=0,zo=$e,Lo=ct,ri=0,Zt=[],Xe=null,Ys=0,li=0,ki=!1;const Lr=45,Ia=14,Xs=70;function Er(t){fe.add(t),At.push(t)}function de(){return F?F.birdY:23}function he(){return $e}function Or(){if(We>=ft.length)return;const t=ft[We];We++;const e=Math.min(1,Vs/wr),i=Ra+(_r-Ra)*e;Vs++;const s=Qs(t);s.rotation.set(0,0,0),s.scale.setScalar(i),yr(s),s.userData.isLower=t,s.userData.innerRadius=2.2*.5*i,s.userData.checked=!1,s.userData.animTime=0,s.userData.collected=!1,s.userData.collectedTime=0,s.userData.ringIndex=We-1;const a=8+(ee&&Rt?Rt():Math.random())*10,o=ce.ringMinY??Ct+1,n=t?Math.max(o,Li-a):Math.min(gi-1,Li+a);Li=n,s.position.set(0,ct-22+n,he()-ra),Er(s),Ti.push(s),ee&&hs.set(s.userData.ringIndex,s)}function kr(t){_t++,Ke++,Ye++,t?aa():oa(),vo(),Ye>=3&&!F.isRolling&&F.isControlEnabled&&(na(),F.triggerRoll(),Ye=0),Dr(Ke,ce.ringTotal??20,ce.winPercentage??.6),Eo()}function Eo(){if(!Yt&&!(We<ft.length||Ti.length>0))if(Ke>=qi)Yt=!0,window.retreatMinigameCyclones?.(),setTimeout(()=>{ae&&Oo()},1e3),setTimeout(()=>{ae&&window.prewarmNextLevel?.()},450);else{ve.trigger(ji),ji=0;const t=qi-Ke,e=t+Math.ceil(t*.3);ft=la(Math.round(e*.6),Math.round(e*.4)),We=0}}function Br(){const t=document.getElementById("level-story-overlay"),e=document.getElementById("level-story-text");!t||!e||(e.textContent="FLY!",t.style.display="block",requestAnimationFrame(()=>{ae&&t.classList.add("visible")}),setTimeout(()=>{ae&&(t.classList.remove("visible"),setTimeout(()=>{t.style.display="none"},400))},650))}function Oo(){if(F.disableControl(),rt=!0,window.startMinigameLevelTransition){window.startMinigameLevelTransition();return}F.velocityY=35,ge=document.createElement("div"),ge.style.cssText="position:fixed;inset:0;background:black;opacity:0;pointer-events:none;transition:opacity 0.8s ease;z-index:9999;display:flex;align-items:center;justify-content:center;",document.body.appendChild(ge),setTimeout(()=>{ge&&(ge.style.opacity="1")},200),setTimeout(()=>{ae&&Hr()},2e3)}function Hr(){if(!ae)return;ae=!1;const t=ge;ge=null,Zr(),window.showMainMenuFromMinigame&&window.showMainMenuFromMinigame(),t&&t.parentNode&&setTimeout(()=>{t.style.transition="opacity 1.8s ease",t.style.opacity="0",setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t)},1900)},400)}function Vr(){return new Oe({transparent:!0,depthWrite:!1,blending:Ae,side:_e,uniforms:{uTime:{value:0},uAlpha:{value:0}},vertexShader:`
      precision mediump float;
      uniform float uTime;
      varying vec2  vUv;
      varying float vFadeIn;
      varying float vPhase;

      void main() {
        vUv = uv;

        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        float dist = ${$e.toFixed(1)} - worldPos.z;
        vFadeIn = clamp(1.0 - (dist - 40.0) / 90.0, 0.0, 1.0);

        vPhase = worldPos.x * 2.1 + worldPos.z * 1.4;

        // Single smooth sway — one frequency avoids erratic beating
        float hf   = position.y / ${Xs.toFixed(1)};
        float sway = sin(uTime * 0.06 + vPhase + position.y * 0.04) * 1.1 * hf;

        gl_Position = projectionMatrix * modelViewMatrix *
                      vec4(position.x + sway, position.y, position.z, 1.0);
      }
    `,fragmentShader:`
      precision mediump float;
      uniform float uTime;
      uniform float uAlpha;
      varying vec2  vUv;
      varying float vFadeIn;
      varying float vPhase;

      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
      }

      void main() {
        // Glacially slow upward drift — all octaves locked to same speed so they don't beat
        float drift = uTime * 0.016;

        // Large soft billows — low noise frequencies = big lazy shapes
        vec2 p0 = vec2(vUv.x * 0.9 + vPhase * 0.05, vUv.y * 1.1 + drift);
        vec2 p1 = vec2(vUv.x * 1.7 - vPhase * 0.03, vUv.y * 1.9 + drift);

        float n = noise(p0) * 0.65
                + noise(p1) * 0.25
                + noise(p1 * 1.5 + vec2(0.2, 0.0)) * 0.10;

        // Barely-perceptible slow breath
        float pulse = 0.87 + 0.13 * sin(uTime * 0.08 + vPhase * 0.2);

        // Vertical: full density low, dissolves gently upward
        float vFade = (1.0 - smoothstep(0.05, 0.95, vUv.y)) * smoothstep(0.0, 0.08, vUv.y);
        // Horizontal: very soft, wide feathered edges
        float hFade = smoothstep(0.0, 0.25, vUv.x) * smoothstep(1.0, 0.75, vUv.x);

        float intensity = n * pulse * vFade * hFade * vFadeIn;

        // Subtle: nearly-white with a faint warm blush — not orange, just "hot air"
        vec3 col = mix(vec3(1.0, 0.97, 0.88), vec3(1.0, 1.0, 1.0), vUv.y * 0.5);

        gl_FragColor = vec4(col, intensity * 0.28 * uAlpha);
      }
    `})}const Wa=12;function Nr(){const t=2+Math.floor(Math.random()*3),e=new ls;for(let i=0;i<t;i++){const s=3+Math.random()*3,a=new ta(s,Xs,1,18);a.translate(0,Xs/2,0);const o=new te(a,Xe);o.position.x=(Math.random()-.5)*8,o.position.z=(Math.random()-.5)*4,o.rotation.y=(Math.random()-.5)*.6,o.frustumCulled=!1,e.add(o)}return ko(e,.55+Math.random()*.9),e}function ko(t,e){t.scale.y=e,t.userData.heightScale=e}function Bo(){return(Math.random()-.5)*38}function Ur(){if(fe){Xe||(Xe=Vr());for(let t=0;t<Wa;t++){const e=Nr(),i=t/Wa;e.position.set(Bo(),0,he()-ra*i),fe.add(e),Zt.push(e)}}}function Yr(t){const e=ce?.ringSpeed??22;Ys+=t,(Yt||rt)&&!ki&&(ki=!0),li=ki?Math.max(0,li-t*1.4):Math.min(1,li+t*.4),Xe&&(Xe.uniforms.uTime.value=Ys,Xe.uniforms.uAlpha.value=li);for(let i=Zt.length-1;i>=0;i--){const s=Zt[i];if(s.position.z+=e*t,!rt&&F?.model){const a=Math.abs(s.position.z-$e);if(a<Ia){const o=1-a/Ia,n=s.userData.heightScale??1;F.velocityY+=Lr*o*n*t}}s.position.z>$e+25&&(s.position.set(Bo(),0,he()-ra-Math.random()*20),ko(s,.55+Math.random()*.9))}}function Ho(){for(const t of Zt)t.parent&&t.parent.remove(t),t.traverse(e=>{e.geometry&&e.geometry.dispose()});Zt=[],Xe&&(Xe.dispose(),Xe=null),Ys=0,li=0,ki=!1}function Xr(t,e){t.position.z=e.position.z}function Jl(t){Ji=t??null}function ec(t,e,i,s=null,a=null,o=null,n=null,p=null){fe=t,ue=e,ce=i,ae=!0,Gi=a,F=null,Ti=[],ui=0,ft=[],We=0,_t=0,Ke=0,Vs=0,Li=(Ct+gi)/2,Ye=0,Yt=!1,qi=0,At=[],vi=[],Ns=!1,rt=!1,ge=null,Ei=0,di=0,kt=0,ve.reset(),ji=0,$i=e.fov,Ho(),we&&(we.dispose(),we=null),Wt=1,Us=!1;for(const u in Pt)delete Pt[u];if(window.addEventListener("keydown",Ro),window.addEventListener("keyup",Po),i.ringMinY!==void 0&&i.ringMinY<Ct+1){const u=(p??zr)-1.5;we=new mr(t,u),we.load()}if(s||(e.position.set(0,ct,Si),e.lookAt(0,ct,$e-30),e.updateMatrixWorld(!0)),t.fog=new cn(9090260,18e-6),Tr(i.winPercentage??.6),s)F=s,F.birdY=13,ot=de(),F.setupInputHandlers(),F.model&&(mi=!0,Oi=0,Fo=F.model.rotation.x,Io=F.model.rotation.y,Wo=F.model.rotation.z,zo=F.model.position.z,Lo=e.position.y,F.model.visible=!0,F.dampenChain()),F._leftFeatherMesh&&(F._leftFeatherMesh.visible=!0),F._rightFeatherMesh&&(F._rightFeatherMesh.visible=!0),F._leftFeatherMesh2&&(F._leftFeatherMesh2.visible=!0),F._rightFeatherMesh2&&(F._rightFeatherMesh2.visible=!0);else{F=new Bs,F.birdY=13,ot=ct;const u=ee?Nt:ai;F.initFeathers(t,u,de(),he()),F.setupInputHandlers(),F.load(t).then(()=>{if(!ae){F.dispose(t);return}F.model.position.set(u,de(),he()),F.model.visible=!0}),ee&&(Q=new Bs,cs=13,wt=13,Q.birdY=13,Q.initFeathers(t,Qi,13,he()),Q.load(t).then(()=>{if(!ae||!Q){Q?.dispose(t),Q=null;return}Q.model.position.set(Qi,wt,he()),Q.model.visible=!0,Q.model.traverse(c=>{if(!c.isMesh||!c.material)return;(Array.isArray(c.material)?c.material:[c.material]).forEach(f=>{f.color&&f.color.set(16747520)})})}))}if(ri=e.position.x,ni=e.position.z,n?(ot=n.y,fi=n.z):fi=$e-30,!ae)return;F.enableControl(),F.setNightGlow(i.timeOfDay==="night"),we&&(F.minY=i.ringMinY);const d=i.ringTotal??20,l=i.ringBlueCount??Math.round(d*.6);ft=la(l,d-l,ee&&Rt?Rt:Math.random),We=0,qi=Math.ceil(d*(i.winPercentage??.6)),Ns=!0,Br()}function tc(t){if(!ae)return;ve.update(t);const e=!!F?.model;let i=ue.position.y;if(rt&&e)ot+=(de()-ot)*Math.min(1,t*880);else{const _=e?Math.max(0,F.velocityY??0)*.3:0,v=e?de()+4.5-_:ct,w=e?Math.min(0,(F.velocityY??0)*.5):0,x=e?de()+w:ct;if(i=ue.position.y+(v-ue.position.y)*Math.min(1,t*3),mi){const y=Math.min(Oi/Fa,1);i=pt.lerp(Lo,i,Ca(y))}ot+=(x-ot)*Math.min(1,t*3)}ni+=(Si-ni)*Math.min(1,t*1.2),fi+=(he()-30-fi)*Math.min(1,t*1.5);const s=ce.cameraDrift??0;s>0&&(Ei+=t);const a=s>0?Math.sin(Ei*.68)*s+Math.sin(Ei*1.17+1.4)*s*.36:0;ri+=(a-ri)*Math.min(1,t*1.2);let o=0,n=0;if(Ji?.length&&!rt){const _=ri,v=ni;for(const w of Ji){const x=_-w.position.x,y=v-w.position.z,M=Math.sqrt(x*x+y*y),b=Math.max(0,1-M/Rr);if(b>0){const P=b*b,S=M>.1?x/M:1;o+=S*P*Pr,n+=P*Fr}}}const p=Math.min(1,t*1.8);di+=(o-di)*p,kt+=(n-kt)*p,ue.position.set(ri+di+ve.camOffsetX(),i+kt,ni+kt*Ir+ve.camOffsetZ()),Gi&&Xr(Gi,ue),ue.lookAt(0,ot,fi);const d=$i+ve.fovDelta();Math.abs(d-ue.fov)>.02&&(ue.fov=d,ue.updateProjectionMatrix());const l=!!Pt[" "];if(l&&F.keepFlapping(),Wt+=((l?fr:1)-Wt)*Math.min(1,t*7),F.animTimeScaleBoost=Wt,F.updateAnimation(t),we&&(Pa.set(ee?Nt:ai,de(),he()),Us=we.update(t,Pa,0,Wr,F.model?.rotation.x??0,F.model?.rotation.z??0,l,Us,F.model,Wt)),!(we?.isUnderwater??!1)&&F.isFlapping?(In(Wt),Fn()):fo(),rt){if(F.model){const _=ee?Nt:ai;F.velocityY-=10*t,F.birdY+=F.velocityY*t,F.model.position.set(_,F.birdY,he());const v=Math.min(.45,F.velocityY*.08);F.model.rotation.x+=(v-F.model.rotation.x)*Math.min(1,t*1.5)}}else{if(ve.stripPitch(F.model),F.applyPhysics(t),F.model){const _=ee?Nt:ai;if(mi){Oi+=t;const v=Math.min(Oi/Fa,1),w=Ca(v),x=pt.lerp(zo,$e,w);F.model.position.set(_,de(),x),F.model.rotation.x=pt.lerp(Fo,0,w),F.model.rotation.y=pt.lerp(Io,0,w),F.model.rotation.z=pt.lerp(Wo,0,w),v>=1&&(mi=!1)}else F.model.position.set(_,de(),he()+ve.birdOffsetZ()),ve.addPitch(F.model)}ee&&Ki&&Ki("bird_y",{y:de()})}if(ee&&Q){wt+=(cs-wt)*Math.min(1,t*8),Q.birdY=wt,Q.updateAnimation(t),Q.model&&Q.model.position.set(Qi,wt,he());const v=Math.min(Le,2+ze*2),w=ze>=Ci?2:0,x=Math.min(Ie,w+Math.max(0,ze-Ci)*2);Q.updateFeathers(t,v,x),Q.updateSeeds(Math.min(1,ze/(ce?.ringTotal??20)))}if(Ns&&!rt){const _=ce.ringSpawnInterval??3;ui+=t,ui>=_&&(ui=0,Or()),Cr(Ti,t,{birdZ:he(),birdWorldY:de(),ringSpeed:ce.ringSpeed??22,approachSpeed:ve.ringApproachSpeed,scene:fe,trackingArray:At,onHit:ee?null:v=>{kr(v),Zi(v,ai,de(),he(),fe,At,vi)},onMiss:ee?null:()=>{Ye=0,ji++}}),!ee&&We>=ft.length&&Eo(),ce.thermals&&Zt.length===0&&Ur()}ce.thermals&&Yr(t);const h=F.isControlEnabled?2:0,f=Math.min(Le,h+_t*2),r=_t>=Ci?2:0,m=Math.min(Ie,r+Math.max(0,_t-Ci)*2);F.updateFeathers(t,f,m),F.updateSeeds(Math.min(1,_t/(ce.ringTotal??20))),Ao(vi,t)}function Zr(){ae=!1,mi=!1,Gi=null,Ji=null,di=0,kt=0,Ho(),fo(),uo(0),ve.reset(),ue&&Math.abs(ue.fov-$i)>.001&&(ue.fov=$i,ue.updateProjectionMatrix()),ee&&Gr(),br();const t=document.getElementById("level-story-overlay");t&&(t.classList.remove("visible"),t.style.display="none"),we&&(we.dispose(),we=null),window.removeEventListener("keydown",Ro),window.removeEventListener("keyup",Po);for(const e in Pt)delete Pt[e];F&&(F.minY=Ct,F.removeInputHandlers(),F.dispose(fe),F=null),At.forEach(e=>{e.parent&&fe.remove(e),Co(e)}),At=[],Ti=[],vi=[],fe&&(fe.fog=null),ge&&ge.parentNode&&(ge.parentNode.removeChild(ge),ge=null)}function ic(){return ve.cloudDriftFactor()}function sc(){const t=F;return F=null,t}function ac({send:t,playerIndex:e,seed:i}){ee=!0,Ki=t,Xt=e,Rt=pr(i),Nt=e===0?-3.5:3.5,Qi=e===0?3.5:-3.5,ze=0,hs=new Map}function Gr(){Q&&fe&&(Q.dispose(fe),Q=null),ee=!1,Ki=null,Rt=null,hs=new Map,ze=0,cs=23,wt=23}function oc(t){cs=t}function Vo(){const t=ce?.ringTotal??20,e=ce?.winPercentage??.6,i=Ke+ze,s=Math.ceil(t*e),a=`P${Xt+1}: ${Ke}`,o=`P${Xt===0?2:1}: ${ze}`;so(i/t*100,{currentMass:i,totalMass:t,winPercentage:e,labelOverride:`${a} + ${o} = ${i} / ${s}`}),i>=s&&(ao(),mo()),oo()}function nc(t,e,i,s){if(!ae||!ee)return;Ke=Xt===0?i:s,_t=Ke,ze=Xt===0?s:i;const a=hs.get(t);a&&!a.userData.collected&&(a.userData.collected=!0),Ye++,e?aa():oa(),vo(),Ye>=3&&F&&!F.isRolling&&F.isControlEnabled&&(na(),F.triggerRoll(),Ye=0),Vo(),fe&&Zi(e,Nt,de(),he(),fe,At,vi)}function rc(t,e,i){!ae||!ee||(ze=Xt===0?i:e,Ye=0,Vo())}function lc({ringTotal:t,ringBlueCount:e}){if(!ae||!ee)return;const i=e??Math.round(t*.6);ft=la(i,t-i,Rt),We=0,ui=ce?.ringSpawnInterval??3}function cc(){!ae||Yt||(Yt=!0,setTimeout(()=>{ae&&Oo()},500))}let O=null,Ze=null,Gt=0,dt=!1;const Ee=new $;let Ut=null;const za=new $;let Ft=!1,Se=0,Te=0,St=null;const yt=100;function No(t,e,i,s){const a=new Float32Array(yt+1);let o=t.x,n=t.y,p=t.z,d=0;a[0]=0;for(let l=1;l<=yt;l++){const u=l/yt,c=1-u,h=c*c*c*t.x+3*c*c*u*e.x+3*c*u*u*i.x+u*u*u*s.x,f=c*c*c*t.y+3*c*c*u*e.y+3*c*u*u*i.y+u*u*u*s.y,r=c*c*c*t.z+3*c*c*u*e.z+3*c*u*u*i.z+u*u*u*s.z,m=h-o,_=f-n,v=r-p;d+=Math.sqrt(m*m+_*_+v*v),a[l]=d,o=h,n=f,p=r}if(d>0)for(let l=1;l<=yt;l++)a[l]/=d;return a}function qr(t){let e=0,i=yt;for(;e<i-1;){const p=e+i>>1;St[p]<=t?e=p:i=p}const s=e/yt,a=i/yt,o=St[e],n=St[i];return n>o?s+(t-o)/(n-o)*(a-s):s}let qt=!1,nt=0,Uo=0;const me=new $,pe=new $,Ge=new $,qe=new $;let _i=null,jt=!1,wi=!1,Tt=0;const ci=new $,es=[],La=[];let ts=!1;const Ea=1.5,jr=2.5,$r=10,Kr=8,Yo=.81,Xo=.13;let Ne=Xo;const Oa=288,ca=.004;let ha=ca;const Zs=.75,si=.2,Qr=30;function Jr(t){O=new Bs,Ze=t,Gt=0,dt=!1,O.initFeathers(t,0,0,0,0,-1,0),O._leftFeatherMesh.isPersistent=!0,O._rightFeatherMesh.isPersistent=!0,O._leftFeatherMesh2.isPersistent=!0,O._rightFeatherMesh2.isPersistent=!0,O.load(t).then(()=>{O.model.isPersistent=!0,O.model.position.set(0,0,0),O.model.visible=!0,O.updateSeeds(1),Ee.set(0,0,0),dt=!0,O._secondaryModel&&(O._secondaryModel.isPersistent=!0);for(const{mesh:e}of O._shadowClones)e.isPersistent=!0})}function el(t){Tt+=t;const e=Math.min(Tt/Zs,1),i=O.model,s=Ee;let a=ci.x,o=ci.y,n=ci.z;if(e<si){const l=e/si;o+=l*2.5,i.rotation.x+=(-.6*l-i.rotation.x)*Math.min(1,t*12),i.rotation.z*=Math.pow(.85,t*60)}else{const l=(e-si)/(1-si),u=l*l*l,c=l*Math.PI*1.5,h=2*(1-l);a+=Math.sin(c)*h,n+=Math.cos(c)*h,o=ci.y+2.5-u*Qr;const f=a-s.x,r=n-s.z;Math.abs(f)+Math.abs(r)>2e-4&&(i.rotation.y=Math.atan2(-f,-r)),i.rotation.x+=(Math.min(1.5,l*2.8)-i.rotation.x)*Math.min(1,t*10),i.rotation.z*=Math.pow(.9,t*60)}i.position.set(a,o,n),s.set(a,o,n),!ts&&o<=2&&e>si&&Ze&&(ts=!0,Wn(),Zi(!1,a,-2.5,n,Ze,La,es,0,!0),Zi(!0,a,-2.5,n,Ze,La,es,0,!0)),O.keepFlapping(),O.updateAnimation(t);const p=-Math.sin(i.rotation.y)*100,d=-Math.cos(i.rotation.y)*100;O.updateFeathers(t,Le,Ie,0,p,0,d),O.updateSeeds(Math.max(0,1-e*1.6))}function tl(t){if(nt+=t,nt<Ne)return!1;if(Ne>0&&nt-t<Ne){if(me.copy(O.model.position),jt){const I=Gt*Yo,V=-Math.cos(I),H=-Math.sin(I),B=me;pe.set(B.x+V*70,B.y+68,B.z+H*70),Ge.set(V*220,38,H*220),qe.set(V*360,14,H*360),jt=!1}St=No(me,pe,Ge,qe),Se=3*(pe.x-me.x),Te=3*(pe.z-me.z)}else if(Ne===0&&nt-t<.001){const I=3*(pe.x-me.x),V=3*(pe.z-me.z),H=Math.sqrt(I*I+V*V);if(H>.001){const B=O.model.rotation.y;Se=-Math.sin(B)*H,Te=-Math.cos(B)*H}else Se=I,Te=V}const e=Uo-Ne,i=Math.min((nt-Ne)/e,1),s=Math.min(i+ha,1),a=s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,o=St?qr(a):a,n=1-o,p=me,d=pe,l=Ge,u=qe,c=n*n*n*p.x+3*n*n*o*d.x+3*n*o*o*l.x+o*o*o*u.x,h=n*n*n*p.y+3*n*n*o*d.y+3*n*o*o*l.y+o*o*o*u.y,f=n*n*n*p.z+3*n*n*o*d.z+3*n*o*o*l.z+o*o*o*u.z,r=O.model,m=Ee,_=c-m.x,v=f-m.z,w=o,x=1-w,y=3*x*x*(d.x-p.x)+6*x*w*(l.x-d.x)+3*w*w*(u.x-l.x),M=3*x*x*(d.z-p.z)+6*x*w*(l.z-d.z)+3*w*w*(u.z-l.z),b=1-Math.pow(.85,t*60);Se+=(y-Se)*b,Te+=(M-Te)*b;let P=0;{const I=Math.abs(Se)+Math.abs(Te);let V;if(_i!==null&&i>.45)V=_i;else if(I>2e-4)V=Ft?Math.atan2(Se,Te):Math.atan2(-Se,-Te);else{const Z=u.x-l.x,le=u.z-l.z;V=Math.sqrt(Z*Z+le*le)>.001?Ft?Math.atan2(Z,le):Math.atan2(-Z,-le):r.rotation.y}let H=V-r.rotation.y;H>Math.PI&&(H-=Math.PI*2),H<-Math.PI&&(H+=Math.PI*2),P=H;const B=Math.abs(H)>Math.PI*.5?3:12;r.rotation.y+=H*Math.min(1,t*B)}const S=3*x*x*(d.y-p.y)+6*x*w*(l.y-d.y)+3*w*w*(u.y-l.y),T=Math.sqrt(y*y+M*M),D=Math.max(-1.4,Math.min(.6,-Math.atan2(S,T)));r.rotation.x+=(D-r.rotation.x)*Math.min(1,t*4);const E=Math.min(o+.02,1),k=1-E,X=k*k*k*p.x+3*k*k*E*d.x+3*k*E*E*l.x+E*E*E*u.x,N=k*k*k*p.z+3*k*k*E*d.z+3*k*E*E*l.z+E*E*E*u.z,U=_*(N-f)-v*(X-c),C=Math.max(-.25,Math.min(.25,U*.4));if(r.rotation.z+=(C-r.rotation.z)*Math.min(1,t*3),r.position.set(c,h,f),m.set(c,h,f),Ut){const I=r.rotation.y;za.set(-Math.sin(I),0,-Math.cos(I)),Ut.update(t,r.position,I,za,r.rotation.x,r.rotation.z,!1,!1,r,1)}const z=Math.max(.05,1-Math.abs(P)/Math.PI),A=Math.sqrt(y*y+M*M),R=A>2e-4?-(y/A)*100*z:-Math.sin(r.rotation.y)*100*z,L=A>2e-4?-(M/A)*100*z:-Math.cos(r.rotation.y)*100*z;return O.keepFlapping(),O.updateAnimation(t),O.updateFeathers(t,Le,Ie,0,R,0,L,34,20),O.updateSeeds(1),!0}function il(t){Gt+=t;const e=Gt,i=e*Yo,s=Math.min(e/jr,1),a=s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2,o=a*$r,n=Math.min(e/Ea,1),p=1-(1-n)*(1-n),d=Math.max(0,Math.min(1,(e-Ea)/1)),l=p*Kr+Math.sin(e*.38)*4.5*d,u=-Math.sin(i)*o,c=Math.cos(i)*o,h=O.model,f=Ee,r=u-f.x,m=c-f.z,_=l-f.y;{let P=h.rotation.y%(Math.PI*2);P>Math.PI&&(P-=Math.PI*2),P<-Math.PI&&(P+=Math.PI*2),h.rotation.y=P}if(Math.abs(r)+Math.abs(m)>2e-4){let S=Math.atan2(-r,-m)-h.rotation.y;S>Math.PI&&(S-=Math.PI*2),S<-Math.PI&&(S+=Math.PI*2),h.rotation.y+=S*Math.min(1,t*8)}const v=t>0?_/t:0,w=.9*(1-n)+.3*n,x=Math.max(-w,Math.min(w,v*.06));h.rotation.x+=(x-h.rotation.x)*Math.min(1,t*5);const y=.38*a;h.rotation.z+=(y-h.rotation.z)*Math.min(1,t*3),h.position.set(u,l,c),f.set(u,l,c);const M=-Math.sin(h.rotation.y)*100,b=-Math.cos(h.rotation.y)*100;O.keepFlapping(),O.updateAnimation(t),O.updateFeathers(t,Le,Ie,0,M,0,b,34,160,-5),O.updateSeeds(1)}function hc(t){if(es.length>0&&Ao(es,t),!(!dt||!O||!O.model)){if(wi){el(t);return}qt&&tl(t)||il(t)}}function uc(){!O||!O.model||(wi=!0,Tt=0,ci.copy(O.model.position))}function fc(t){if(!O||!O.model)return;const e=t.x,i=t.y,s=t.z;O.model.position.x+=e,O.model.position.y+=i,O.model.position.z+=s,Ee.x+=e,Ee.y+=i,Ee.z+=s,me.x+=e,me.y+=i,me.z+=s,pe.x+=e,pe.y+=i,pe.z+=s,Ge.x+=e,Ge.y+=i,Ge.z+=s,qe.x+=e,qe.y+=i,qe.z+=s;for(const a of[O._chainL,O._chainR,O._chainL2,O._chainR2])if(a)for(const o of a)o.x+=e,o.y+=i,o.z+=s}function sl(t=!1){if(!(!t&&qt)){if(t&&wi&&Tt<Zs){const e=(Zs-Tt)*1e3+150;setTimeout(()=>sl(!0),e);return}Ut&&(Ut.dispose(),Ut=null),O&&Ze&&O.dispose(Ze),O=null,Ze=null,Gt=0,dt=!1,qt=!1,nt=0,Ft=!1,_i=null,wi=!1,Tt=0,ts=!1,jt=!1,Se=0,Te=0}}function dc({nextIslandOffset:t,flightAngle:e,duration:i,p3y:s=12,p3zOffset:a=0,ringMinigame:o=!1,skipOrbitDelay:n=!1}){if(!O||!dt){console.warn("[WinBird] startWinBirdTransition called before bird loaded — transition skipped");return}if(qt=!0,nt=0,Ft=!1,Se=0,Te=0,Uo=i/1e3,Ne=n?0:Xo,ha=ca,_i=null,o)jt=!0,pe.set(0,Oa,0),Ge.set(0,50,0),qe.set(0,14,0);else{const p=t.length(),d=Math.cos(e),l=Math.sin(e),u=p*.28;pe.set(d*u,Oa,l*u),Ge.set(t.x-d*40,70,t.z-l*40),qe.set(t.x,s,t.z+a)}St=null,Ne===0&&!jt&&(St=No(me,pe,Ge,qe))}function mc(){if(Ft=!Ft,!O||!O.model)return;O.model.rotation.y+=Math.PI;const t=O.model.position.x-Ee.x,e=O.model.position.z-Ee.z,i=Math.sqrt(t*t+e*e);i>1e-4&&O.snapChainTrail(-t/i,-e/i)}function pc(t){return!O||!O.model?!1:(t.copy(O.model.position),!0)}function gc(t,e,i=null){O=t,Ze=e,dt=!0,Gt=0,qt=!1,nt=0,Ft=!1,_i=null,wi=!1,Tt=0,ts=!1,jt=!1,Se=0,Te=0,Ne=0,ha=ca,Ee.copy(t.model.position),me.copy(t.model.position),Ut=i,t.model&&(t.model.isPersistent=!0),t._secondaryModel&&(t._secondaryModel.isPersistent=!0);for(const{mesh:s}of t._shadowClones)s.isPersistent=!0;t._leftFeatherMesh&&(t._leftFeatherMesh.isPersistent=!0),t._rightFeatherMesh&&(t._rightFeatherMesh.isPersistent=!0),t._leftFeatherMesh2&&(t._leftFeatherMesh2.isPersistent=!0),t._rightFeatherMesh2&&(t._rightFeatherMesh2.isPersistent=!0)}function vc(){if(!O||!dt)return null;const t=O;return O=null,Ze=null,dt=!1,qt=!1,t}const je=[];let Ss=0;const $t=[],Dt=[];let ka=0;const gt=[];let yi=!1;const Ba=new $,al=new $(0,-1,0),Ha=new sa,Wi=new hn,Zo=new $(0,1,0);function Go(){if(gt.length===0){yi=!1;return}const t=Date.now();let e=gt.length;for(;e--;){const i=gt[e],s=t-i.startTime;if(s<0)continue;i.object.visible||(i.object.visible=!0);const a=Math.min(s/i.duration,1),n=(1-Math.pow(1-a,3))*i.targetScale;i.object.scale.set(n,n,n),a>=1&&(i.object.userData.hasShadowCasters&&i.object.traverse(p=>{p.isMesh&&(p.castShadow=!0)}),gt.splice(e,1))}gt.length>0?requestAnimationFrame(Go):yi=!1}function qo(t,e,i,s){gt.push({object:t,startTime:e,duration:i,targetScale:s}),yi||(yi=!0,requestAnimationFrame(Go))}const ol=24,pi=[],nl=8;let is=!1;function jo(t){pi.push(t),is||(is=!0,requestAnimationFrame($o))}function $o(){let t=0;for(;pi.length>0&&t<nl;)pi.shift()(),t++;pi.length>0?requestAnimationFrame($o):is=!1}function Ts(t){const{numPositions:e,terrainSize:i,terrainMesh:s,heightSampler:a=null,minSpacing:o,existingPositions:n=[],validHeightRange:p={min:.3,max:2.2},minSlopeDotProduct:d=.423,useClusterMode:l=!1}=t;if(a){const u=[],c=e*20,h=o*o,f=.3;let r=[];if(l){const m=Math.floor(e/6);for(let _=0;_<m;_++)r.push({x:(Math.random()-.5)*i*.8,z:(Math.random()-.5)*i*.8,radius:1.5+Math.random()*1.5})}for(let m=0;u.length<e&&m<c;m++){let _,v;if(l&&Math.random()<.7&&r.length>0){const S=r[Math.floor(Math.random()*r.length)],T=Math.random()*Math.PI*2,D=Math.random()*S.radius;_=S.x+Math.cos(T)*D,v=S.z+Math.sin(T)*D}else _=(Math.random()-.5)*i*.8,v=(Math.random()-.5)*i*.8;const w=a(_,v);if(w<p.min||w>p.max)continue;const x=a(_+f,v)-w,y=a(_,v+f)-w,M=Math.sqrt(x*x+f*f+y*y);if(f/M<d)continue;let P=!1;for(let S=0;S<n.length&&!P;S++){const T=_-n[S].x,D=v-n[S].z;T*T+D*D<h&&(P=!0)}for(let S=0;S<u.length&&!P;S++){const T=_-u[S].x,D=v-u[S].z;T*T+D*D<h&&(P=!0)}P||u.push({x:_,z:v,height:w,normal:{x:-x/M,y:f/M,z:-y/M}})}return Promise.resolve(u)}return new Promise(u=>{const c=[],h=e*20,f=o*o;let r=0,m=0,_=[];if(l){const w=Math.floor(e/6);for(let x=0;x<w;x++)_.push({x:(Math.random()-.5)*i*.8,z:(Math.random()-.5)*i*.8,radius:1.5+Math.random()*1.5})}function v(){for(m=0;c.length<e&&r<h;){if(m>=ol){requestAnimationFrame(v);return}r++;let w,x;if(l&&Math.random()<.7&&_.length>0){const T=_[Math.floor(Math.random()*_.length)],D=Math.random()*Math.PI*2,W=Math.random()*T.radius;w=T.x+Math.cos(D)*W,x=T.z+Math.sin(D)*W}else w=(Math.random()-.5)*i*.8,x=(Math.random()-.5)*i*.8;Ba.set(w,20,x),Ha.set(Ba,al);const y=Ha.intersectObject(s);if(m++,y.length===0)continue;const M=y[0].point.y;if(M<p.min||M>p.max)continue;const b=y[0].face.normal;if(Wi.getNormalMatrix(s.matrixWorld),Zo.dot(b.clone().applyMatrix3(Wi).normalize())<d)continue;let S=!1;for(let T=0;T<n.length&&!S;T++){const D=w-n[T].x,W=x-n[T].z;D*D+W*W<f&&(S=!0)}for(let T=0;T<c.length&&!S;T++){const D=w-c[T].x,W=x-c[T].z;D*D+W*W<f&&(S=!0)}if(!S){const T=y[0].face.normal;Wi.getNormalMatrix(s.matrixWorld);const D=T.clone().applyMatrix3(Wi).normalize();c.push({x:w,z:x,height:M,normal:{x:D.x,y:D.y,z:D.z}})}}u(c)}requestAnimationFrame(v)})}function rl(t,e="day"){t.uniforms.uIsNightTime&&(t.uniforms.uIsNightTime.value=e==="night");const i=Date.now(),s=1200,a=300,o=1400,n=()=>{const p=Date.now()-i,d=Math.min(p/s,1),l=1-Math.pow(1-d,3);if(t.uniforms.uWinGreenIntensity.value=l*.6,p>=a){const u=Math.min((p-a)/o,1),c=1-Math.pow(1-u,3);t.uniforms.uWinGreenDetailIntensity.value=c*.55}(d<1||p<a+o)&&requestAnimationFrame(n)};requestAnimationFrame(n)}function ll(t){if(!t||!t.wetnessMap)return;const e=Date.now(),i=1800,s=200,a=()=>{const o=Date.now()-e;if(o<s){requestAnimationFrame(a);return}const n=Math.min((o-s)/i,1),p=1-Math.pow(1-n,3);t.wetnessMap.setGreenZoneWetnessIntensity(p),n<1&&requestAnimationFrame(a)};requestAnimationFrame(a)}function Gs(t){const{scene:e,modelCache:i,terrainMesh:s,modelPath:a,positions:o,baseScale:n,scaleVariation:p,staggerDelay:d,growDuration:l,verticalOffset:u=-.15,startDelay:c=0}=t;if(o.length===0){console.warn(`No positions generated for ${a}, skipping model load`);return}if(!i[a]){console.warn(`Model ${a} not preloaded yet, waiting...`),setTimeout(()=>Gs(t),100);return}const h=i[a],f=t.timeOfDay==="night",r=t.timeOfDay==="dusk",m=a.includes("ivory-cane-palm"),_=f?m?3.5:6.2:1,v=new q(1.85,1.55,1.05),w=h.map(y=>{const M=y.material.clone();return f&&M.color?M.color.multiplyScalar(_):r&&M.color&&M.color.multiply(v),M}),x=Date.now();o.forEach((y,M)=>{const b=x+c+M*d,P=n+Math.random()*p,S=Math.random()*Math.PI*2;jo(()=>{const T=new ls;h.forEach((U,C)=>{const z=new te(U.geometry,w[C]);z.position.copy(U.position),z.rotation.copy(U.rotation),z.scale.copy(U.scale),z.castShadow=!1,z.receiveShadow=U.receiveShadow,U.castShadow&&(T.userData.hasShadowCasters=!0),T.add(z)});const D=y.height,W=y.normal?new $(y.normal.x,y.normal.y,y.normal.z):new $(0,1,0);T.rotation.y=S;const E=Math.atan2(y.z,y.x),k=Math.acos(Math.max(-1,Math.min(1,Zo.dot(W)))),X=Math.PI/9,N=Math.min(k*.6,X);T.rotation.x=Math.sin(E)*N,T.rotation.z=-Math.cos(E)*N,T.position.set(y.x,D+u,y.z),T.scale.set(0,0,0),T.visible=!1,T.userData.baseRotation={x:T.rotation.x,z:T.rotation.z},T.userData.verticalOffset=u,T.userData.targetScale=P,je.push(T),e.add(T),qo(T,b,l,P)})})}function cl(t){const{scene:e,modelCache:i,grassModelPath:s,grassTuftPositions:a,timeOfDay:o,baseScale:n=.228,scaleVariation:p=.188}=t,d=i[s],l=o==="night",u=o==="dusk",c=l?6.2:1,h=new q(1.85,1.55,1.05),f=d.map(_=>{const v=_.material.clone();return l&&v.color?v.color.multiplyScalar(c):u&&v.color&&v.color.multiply(h),v}),r=Date.now(),m=800;a.forEach((_,v)=>{const w=r+v*20+500,x=n+Math.random()*p,y=Math.random()*Math.PI*2;jo(()=>{const M=new ls;d.forEach((P,S)=>{const T=new te(P.geometry,f[S]);T.position.copy(P.position),T.rotation.copy(P.rotation),T.scale.copy(P.scale),T.castShadow=!1,T.receiveShadow=!1,M.add(T)});const b=_.height;M.rotation.y=y,M.position.set(_.x,b-.05,_.z),M.scale.set(0,0,0),M.visible=!1,M.userData.verticalOffset=-.05,M.userData.targetScale=x,$t.push(M),e.add(M),qo(M,w,m,x)})})}function _c(t){const{scene:e,terrainMaterial:i,terrainMesh:s,terrainSize:a,modelCache:o,timeOfDay:n="day",terrain:p,heightSampler:d=null,waterSystem:l=null}=t;n==="night"?zn():Ln(),rl(i,n),ll(p);const u=[{modelPath:"./models/win-state/palm_tree.glb",count:32,minSpacing:.612,baseScale:.224,scaleVariation:.001249,staggerDelay:60,growDuration:600,verticalOffset:-.15,startDelay:0},{modelPath:"./models/win-state/ivory-cane-palm.glb",count:18,minSpacing:.37,baseScale:.054689,scaleVariation:.04377,staggerDelay:50,growDuration:700,verticalOffset:-.0812,startDelay:150},{modelPath:"./models/win-state/olive-palm.glb",count:6,minSpacing:.64,baseScale:.18,scaleVariation:.077,staggerDelay:50,growDuration:700,verticalOffset:-.12,startDelay:200},{modelPath:"./models/win-state/lady-palm.glb",count:8,minSpacing:.6,baseScale:.048,scaleVariation:.042,staggerDelay:50,growDuration:700,verticalOffset:-.12,startDelay:200},{modelPath:"./models/win-state/bismarck-palm.glb",count:7,minSpacing:.21,baseScale:.078,scaleVariation:.062,staggerDelay:50,growDuration:700,verticalOffset:-.12,startDelay:200},{modelPath:"./models/win-state/banana-tree.glb",count:5,minSpacing:.21,baseScale:.0556,scaleVariation:.0482,staggerDelay:50,growDuration:700,verticalOffset:-.12,startDelay:200}],c=[];async function h(){const r=u[0],m=await Ts({numPositions:r.count,terrainSize:a,terrainMesh:s,heightSampler:d,minSpacing:r.minSpacing,existingPositions:c});c.push(...m),Gs({scene:e,modelCache:o,terrainMesh:s,modelPath:r.modelPath,positions:m,baseScale:r.baseScale,scaleVariation:r.scaleVariation,staggerDelay:r.staggerDelay,growDuration:r.growDuration,verticalOffset:r.verticalOffset,startDelay:r.startDelay,timeOfDay:n}),await Promise.all(u.slice(1).map(async _=>{const v=await Ts({numPositions:_.count,terrainSize:a,terrainMesh:s,heightSampler:d,minSpacing:_.minSpacing,existingPositions:c});c.push(...v),Gs({scene:e,modelCache:o,terrainMesh:s,modelPath:_.modelPath,positions:v,baseScale:_.baseScale,scaleVariation:_.scaleVariation,staggerDelay:_.staggerDelay,growDuration:_.growDuration,verticalOffset:_.verticalOffset,startDelay:_.startDelay,timeOfDay:n})}))}h();async function f(){const r=[{path:"./models/win-state/tall-grass.glb",count:10},{path:"./models/win-state/grass.glb",count:10},{path:"./models/win-state/fern.glb",count:10,baseScale:.0022,scaleVariation:.0032}];for(const m of r){if(!o[m.path]){console.warn(`Grass model ${m.path} not preloaded yet, skipping`);continue}const _=await Ts({numPositions:m.count,terrainSize:a,terrainMesh:s,heightSampler:d,minSpacing:.09,useClusterMode:!0});cl({scene:e,modelCache:o,grassModelPath:m.path,grassTuftPositions:_,timeOfDay:n,...m.baseScale!==void 0&&{baseScale:m.baseScale},...m.scaleVariation!==void 0&&{scaleVariation:m.scaleVariation}})}}setTimeout(f,100),setTimeout(()=>{fl(e,n)},800),l&&setTimeout(()=>{i.uniforms.uUseWetnessMap.value=!0,l.activate()},3500),setTimeout(()=>Jr(e),3200)}const Va=new sa,hl=new $(0,-1,0),Na=new $;let Ds=0;const ul=5;function Ua(t,e,i=2,s=!1,a=null){if(je.length===0&&$t.length===0||!t||!e||!s&&(Ds++,Ds<ul))return;if(Ds=0,!e.isObject3D&&!e.isMesh){console.warn("Invalid terrainMesh passed to updateTreePositions");return}const o=.3,n=2.2,p=.4,d=2.6,l=o-p,u=d-n,c=i*i,h=f=>{if(f.userData.targetScale===void 0)return;const r=f.position.x-t.x,m=f.position.z-t.z;if(r*r+m*m>c)return;let v;if(a)v=a(f.position.x,f.position.z);else{Na.set(f.position.x,20,f.position.z),Va.set(Na,hl);const y=Va.intersectObject(e,!1);if(y.length===0)return;v=y[0].point.y}f.userData.verticalOffset===void 0&&(f.userData.verticalOffset=f.position.y-v),f.position.y=v+f.userData.verticalOffset;let w=1;v<o?v<=p?w=0:w=(v-p)/l:v>n&&(v>=d?w=0:w=(d-v)/u);const x=f.userData.targetScale*w;f.scale.set(x,x,x)};je.forEach(h),$t.forEach(h)}function wc(t,e=null,i=0){if(je.length===0||(Ss++,Ss<5))return;Ss=0;const s=Math.sin(t*.9)*.035;for(let a=0;a<je.length;a++){const o=je[a];if(o.scale.x===0)continue;if(e){const p=o.position.x-e.x,d=o.position.z-e.z;if(p*p+d*d<i)continue}const{baseRotation:n}=o.userData;o.rotation.x=n.x+s,o.rotation.z=n.z+s*.7}}function fl(t,e="day"){const i=wn(),s=e==="night",a=e==="dusk",o=s?4.25:1,n=new q(1.7,1.45,1.1),p=Math.random()<.6?1:0,d=Math.floor(Math.random()*3),l=Math.floor(Math.random()*4);function u(h){const f=i[h];if(!f)return console.warn(`Seagull model ${h} not preloaded yet, skipping`),null;const r=to(f.scene);return r.traverse(m=>{m.isMesh&&(m.castShadow=!1,m.receiveShadow=!1,(s||a)&&m.material&&(m.material=m.material.clone(),m.material._ownedByInstance=!0,m.material.color&&(s?m.material.color.multiplyScalar(o):m.material.color.multiply(n))))}),{clone:r,animations:f.animations}}function c(h,f,r){if(!f||f.length===0)return;const m=new Ht(h);f.forEach(_=>{const v=m.clipAction(_);v.timeScale=r,v.play()}),h.userData.mixer=m}if(p>0){const h=u("./models/creatures/seagulls-flock.glb");if(h){const{clone:f,animations:r}=h;f.position.set(0,6.28,0),f.scale.set(.0162,.0162,.0162),t.add(f),c(f,r,.5),f.userData.type="flock",f.userData.bobTime=Math.random()*Math.PI*2,f.userData.bobSpeed=.3,f.userData.bobAmount=1.8,f.userData.baseHeight=f.position.y,Dt.push(f)}}for(let h=0;h<d;h++){const f=u("./models/creatures/seagulls-spiral.glb");if(f){const{clone:r,animations:m}=f;r.position.set((Math.random()-.5)*8,5+Math.random()*3,(Math.random()-.5)*8),r.scale.set(.14,.14,.14),t.add(r),c(r,m,.55+Math.random()*.2),r.userData.type="spiral",r.userData.bobTime=Math.random()*Math.PI*2,r.userData.bobSpeed=.25,r.userData.bobAmount=1.2,r.userData.baseHeight=r.position.y,Dt.push(r)}}for(let h=0;h<l;h++){const f=u("./models/creatures/seagull-1.glb");if(f){const{clone:r,animations:m}=f;if(r.position.set((Math.random()-.5)*12,4.2+Math.random()*4.2,(Math.random()-.5)*12),r.scale.set(.028,.028,.028),t.add(r),m&&m.length>0){const _=new Ht(r);m.forEach(v=>{const w=_.clipAction(v);w.timeScale=.6+Math.random()*.3,w.play(),w.time=Math.random()*v.duration}),r.userData.mixer=_}r.userData.type="single",r.userData.bobTime=Math.random()*Math.PI*2,r.userData.bobSpeed=.35+Math.random()*.1,r.userData.bobAmount=.8,r.userData.baseHeight=r.position.y,Dt.push(r)}}}function yc(t){ka++;const e=(ka&1)===0;for(let i=0;i<Dt.length;i++){const s=Dt[i],a=s.userData;a.mixer&&e&&a.mixer.update(t*2),a.bobTime+=t*a.bobSpeed,s.position.y=a.baseHeight+Math.sin(a.bobTime)*a.bobAmount}}function Mc(){Dt.forEach(t=>{t.userData.mixer&&(t.userData.mixer.stopAllAction(),t.userData.mixer.uncacheRoot(t),t.userData.mixer=null),t.parent&&t.parent.remove(t),t.traverse(e=>{e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(s=>{s._ownedByInstance&&dl(s)})})}),Dt.length=0}function xc(t){t&&t.uniforms.uWinGreenIntensity&&(t.uniforms.uWinGreenIntensity.value=0),t&&t.uniforms.uWinGreenDetailIntensity&&(t.uniforms.uWinGreenDetailIntensity.value=0),t&&t.uniforms.uIsNightTime&&(t.uniforms.uIsNightTime.value=!1)}function Sc(t){t&&t.wetnessMap&&t.wetnessMap.setGreenZoneWetnessIntensity&&t.wetnessMap.setGreenZoneWetnessIntensity(0)}function dl(t){for(const e of Object.values(t))e&&e.isTexture&&e.dispose();t.dispose()}function Tc(){je.forEach(t=>{t.parent&&t.parent.remove(t),t.traverse(e=>{e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(s=>s.dispose())})}),je.length=0,$t.forEach(t=>{t.parent&&t.parent.remove(t),t.traverse(e=>{e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(s=>s.dispose())})}),$t.length=0,pi.length=0,is=!1,gt.length=0,yi=!1}function Dc(){return je}function bc(){return $t}const bs=new $,se=new $,ye=new $,ss=new $;function ua(t){let e=null,i=1/0;for(let s=0;s<Ps.length;s++){const a=Ps[s];if(!a.active||a.isEvaporating)continue;if(t.closestPointToPoint(a.position,bs),bs.distanceTo(a.position)<=a.radius*1.5){const n=bs.distanceTo(t.origin);n<i&&(i=n,e=a)}}return e}const ne=new sa;ne.far=5e3;const Me=new K;let re=!1,fa=!1,da=!1,Kt=0,qs=0,js=0;const ml=100;let G=null,Y=null,at=0,be=null,Ce=null,Mi=.88,ht=0,Ya=0;const pl=150;let Xa=0,Za=0;const gl=50;let Ga=0;const vl=16;let Qt={x:0,y:0},us=0,Bi=0,Ue=null;const Ko=10,_l=300;let zt=0,He=!1,Hi=0,as=!1;const $s=1.5,Qo=1,wl=1.5,yl=1.5,Ml=$s+Qo-yl;let Lt=0,vt=0,Et=0,os=!1,Vi=!1;const qa=1.5,zi=1,ja=1.5,xl=1.5,Cs=3.25,Sl=-.85,As=4.75,Tl=-1.45;let bt=null,Di=null,Qe=null,Jt=!1,ie=null,It=null,ma=null,Bt=null,Ks=null;function ns(t,e,i){if(ma(t,e,i),Ks){const s=G?.world;Ks({localX:t.x,localY:t.y,heightChange:e,radius:i,worldX:s?.x??0,worldY:s?.y??0,worldZ:s?.z??0})}}let ut=null,ei=null,ti=null;function J(){return fa||da||Kt>=2}function Qs(t){const e=yn*1.1,i=new ls;i.rotation.x=-Math.PI/2,i.renderOrder=3;const s=new ds,a=e,o=e*.5;s.moveTo(a,0);for(let f=1;f<=46;f++){const r=f/46*Math.PI*2;s.lineTo(Math.cos(r)*a,Math.sin(r)*a)}const n=new un;n.moveTo(o,0);for(let f=1;f<=46;f++){const r=f/46*Math.PI*2;n.lineTo(Math.cos(r)*o,Math.sin(r)*o)}s.holes.push(n);const p={depth:.032,bevelEnabled:!0,bevelThickness:.0196,bevelSize:.0184,bevelSegments:8},d=new ms(s,p),l=new fn({color:t?10357248:2245887,transparent:!0,opacity:.3,roughness:.21,metalness:.24,emissive:t?16720384:13311,emissiveIntensity:2.5,clearcoat:.63,clearcoatRoughness:.14,ior:1.45,side:_e,depthWrite:!1,depthTest:!0}),u=new te(d,l);u.position.z=-.015,u.renderOrder=999,u.userData.isBaseRing=!0,u.userData.isLowerMode=t,i.add(u);const c=t?new q(16727830):new q(65484),h=new te(new Ni(o,a,96,1),new Oe({uniforms:{uTime:{value:0},uColor:{value:c},uInt:{value:.45},uSpeed:{value:1.83},uWidth:{value:.36},uArms:{value:2},uInnerRad:{value:o},uOuterRad:{value:a}},transparent:!0,depthWrite:!1,depthTest:!0,blending:Ae,side:_e,vertexShader:`
        varying vec2 vLocal;
        void main() {
          vLocal = position.xy;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        varying vec2 vLocal;
        uniform float uTime, uInt, uSpeed, uWidth, uArms, uInnerRad, uOuterRad;
        uniform vec3 uColor;
        void main() {
          float r = length(vLocal);
          if (r < uInnerRad || r > uOuterRad) discard;
          float ang = atan(vLocal.y, vLocal.x) / (2.0 * 3.14159265);
          float a = fract(ang * uArms + uTime * uSpeed * 0.25);
          float band = exp(-pow((a - 0.5) / (uWidth * 0.5), 2.0));
          float rt = smoothstep(uInnerRad, uInnerRad + 0.04, r) *
                     smoothstep(uOuterRad, uOuterRad - 0.04, r);
          gl_FragColor = vec4(uColor * uInt * band * rt, band * rt);
        }`}));if(h.position.z=.032,h.renderOrder=1e3,h.userData.isPulseMesh=!0,i.add(h),t)for(let r=0;r<8;r++){const m=r/8*Math.PI*2,_=(r+1)/8*Math.PI*2,v=new ds,w=e*.62,x=e*.98,y=20;for(let T=0;T<=y;T++){const D=T/y,W=m+D*(_-m),E=pt.lerp(x,w,D*.7),k=Math.cos(W)*E,X=Math.sin(W)*E;T===0?v.moveTo(k,X):v.lineTo(k,X)}for(let T=y;T>=0;T--){const D=T/y,W=m+D*(_-m),E=pt.lerp(x,w,D*.7)*.7,k=Math.cos(W)*E,X=Math.sin(W)*E;v.lineTo(k,X)}const M={depth:.03,bevelEnabled:!1},b=new ms(v,M),P=new Mt({color:16724787,transparent:!0,opacity:.5-r/8*.2,side:_e,depthWrite:!0}),S=new te(b,P);S.position.z=-.015,S.userData.rotationSpeed=-.05-r*.01,S.userData.baseOpacity=.5-r/8*.2,i.add(S)}else{for(let w=0;w<4;w++){const x=e*1,y=.3,M=w*.36,b=new Ni(y*.84,y,64),P=document.createElement("canvas");P.width=256,P.height=256;const S=P.getContext("2d"),T=S.createRadialGradient(128,128,128*.84,128,128,128);T.addColorStop(0,"rgba(34, 34, 170, 1.0)"),T.addColorStop(1,"rgba(34, 34, 170, 0.0)"),S.fillStyle=T,S.fillRect(0,0,256,256);const D=new rs(P),W=new Mt({map:D,transparent:!0,opacity:0,side:_e,depthWrite:!1}),E=new te(b,W);E.userData.animationOffset=M,E.userData.startRadius=x,E.userData.ringRadius=y,E.userData.isConvergingRing=!0,i.add(E);for(let k=0;k<8;k++){const X=k/8*Math.PI*2,N=.895,U=new ds;U.moveTo(0,-N/2),U.lineTo(-N*.6,0),U.lineTo(0,N/2),U.lineTo(-N*.3,0),U.lineTo(0,-N/2);const C={depth:.03,bevelEnabled:!1},z=new ms(U,C),A=new Mt({color:1710832,transparent:!0,opacity:0,side:_e,depthWrite:!1}),R=new te(z,A);R.position.x=Math.cos(X)*x,R.position.y=Math.sin(X)*x,R.position.z=-.012,R.rotation.z=X,R.userData.angle=X,R.userData.startRadius=x,R.userData.animationOffset=M,R.userData.isConvergingChevron=!0,i.add(R)}}const m=new ta(e*1.82,e*1.82),_=new Oe({transparent:!0,depthWrite:!1,blending:Ae,side:_e,uniforms:{color:{value:new q(65484)},opacity:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 color;
        uniform float opacity;
        varying vec2 vUv;
        void main() {
          vec2 center = vUv - 0.5;
          float dist = length(center) * 2.0;
          // Create soft ring glow - peaks around 0.6-0.8 radius, fades both inward and outward
          float ring = smoothstep(0.3, 0.6, dist) * smoothstep(1.0, 0.7, dist);
          float alpha = ring * opacity;
          gl_FragColor = vec4(color, alpha);
        }
      `}),v=new te(m,_);v.position.z=-.02,v.userData.isTurboGlow=!0,v.visible=!1,i.add(v)}return i}function fs(t){const e=t?Ce:be;return e?(Y=e,Y.visible=!0,at=0,Y):null}function xi(){Y&&(Y.visible=!1,Y=null)}function bi(t){if(!Y)return;const e=Y.position,i=e.x,s=e.y,a=e.z;Y.visible=!1;const o=t?Ce:be;o&&(Y=o,Y.position.set(i,s,a),Y.visible=!0)}function Dl(t,e=0,i=!1,s=0,a=0){if(!Y)return;at+=t;const o=i?1.8:1,n=1.5/o,p=6711039,d=54442,l=65484,u=16746496,c=16763904,h=Y.children;for(let f=0;f<h.length;f++){const r=h[f];if(r.userData.isPulseMesh){r.material.uniforms.uTime.value=at*o;continue}if(r.userData.isBaseRing){if(r.userData.isLowerMode)continue;i?(r.material.color.setHex(5592575),r.material.emissive.setHex(8772),r.material.emissiveIntensity=.4,r.material.opacity=.4):e>0?(r.material.emissiveIntensity=.2+e*.2,r.material.opacity=.3+e*.1):(r.material.color.setHex(4474111),r.material.emissive.setHex(68),r.material.emissiveIntensity=.2,r.material.opacity=.3);continue}if(r.userData.isTurboGlow){if(r.visible=i||e>0,r.material.uniforms)if(i){const m=.25+Math.sin(at*6)*.1;r.material.uniforms.opacity.value=m}else e>0?r.material.uniforms.opacity.value=e*.15:r.material.uniforms.opacity.value=0;continue}if(r.userData.rotationSpeed!==void 0)if(r.rotation.z+=r.userData.rotationSpeed*t*60,s===2){const m=.85+Math.sin(at*8)*.15;r.material.color.setHex(c),r.material.opacity=r.userData.baseOpacity*m*1.3}else if(s===1)r.material.color.setHex(u),r.material.opacity=r.userData.baseOpacity*1.2;else if(a>0){const _=.2+a*.33,v=.2*(1-a);r.material.color.setRGB(1,_,v),r.material.opacity=r.userData.baseOpacity*(1+a*.2)}else r.material.color.setHex(16724787),r.material.opacity=r.userData.baseOpacity;if(r.userData.isConvergingRing===!0){const m=r.userData.animationOffset/o,v=(at*o-m)%n;if(v<0){r.material.opacity=0;continue}const w=.6,x=Math.min(v/n,1),y=x*w,M=r.userData.startRadius,b=r.userData.ringRadius,S=M*(1-y)/b;r.scale.set(S,S,1);let T;x<.15?T=x/.15:x>.5?T=(1-x)/.5:T=1,r.material.opacity=T*.4}if(r.userData.isConvergingChevron===!0){const m=r.userData.animationOffset,_=m/o,w=(at*o-_)%n,y=(Math.round(m/.36)+1)/4,M=e>=y||i;if(w<0){r.material.opacity=0,r.visible=!1;continue}r.visible=!0;const b=.64,P=Math.min(w/n,1),S=P*b,D=r.userData.startRadius*(1-S),W=r.userData.angle;r.position.x=Math.cos(W)*D,r.position.y=Math.sin(W)*D;const E=1-S*.45;r.scale.set(E,E,1);let k;P<.15?k=P/.15:P>.5?k=(1-P)/.5:k=1,i?(r.material.color.setHex(l),r.material.opacity=k*.8):M?(r.material.color.setHex(d),r.material.opacity=k*.7):(r.material.color.setHex(p),r.material.opacity=k*.4)}}}function Jo(t){if(!t)return!1;let e=t;for(;e&&e!==document.body;){if(!(e instanceof Element)){e=e.parentElement;continue}const i=e.tagName?.toLowerCase();if(i==="button"||i==="input"||i==="select"||i==="textarea"||i==="a"||e.onclick||e.getAttribute("role")==="button"||e.classList?.contains("ui-element")||e.classList?.contains("modal")||Array.from(e.classList||[]).some(a=>a.includes("modal")))return!0;const s=e.id;if(s&&(s.includes("btn")||s.includes("button")||s.includes("modal")||s.includes("overlay")||s.includes("menu")||s.includes("ui")))return!0;e=e.parentElement}return!1}function bl(t){if(Jo(t.target))return;t.button===2&&(da=!0),Qt={x:t.clientX,y:t.clientY},us=Date.now(),Me.x=t.clientX/window.innerWidth*2-1,Me.y=-(t.clientY/window.innerHeight)*2+1,ne.setFromCamera(Me,Di);const e=ua(ne.ray);if(e&&e.radius>=.15&&ei&&ti){ss.copy(e.position);const s=e.radius;no(e,bt,ei,ti)&&(po(),_o(),ro(ss,s)),document.body.style.cursor="pointer",t.preventDefault();return}if(lo(ne,bt))return;if(co(ne)){t.preventDefault();return}const i=ne.intersectObject(ie);if(i.length>0){const s=i[0].point;if(s.y<It-Mi)return;if(se.copy(s),ye.copy(se),ie.worldToLocal(ye),G={world:se,local:ye},document.getElementById("island-creator-panel")){const a=Date.now();a-Xa>3e3&&(Xa=a,Gn("Push play to start sculpting","info"));return}re=!0,Qe.enabled=!1,document.body.style.cursor=J()?"s-resize":"n-resize",Y||fs(J()),Y&&(Y.position.copy(se),Y.position.y+=.05),go()}}function Cl(t){t.button===2&&(da=!1);const e={x:t.clientX,y:t.clientY},i=Math.sqrt(Math.pow(e.x-Qt.x,2)+Math.pow(e.y-Qt.y,2)),s=Date.now()-us;if(i<Ko&&s<500&&G){const a=J()?-.8:.8;ns(G.local,a),ut(),ht++;const o=G.world,n=.5,p=Vt(ie,o);Yi(o,J(),n,p),Fs()}re=!1,G=null,document.body.style.cursor="default",Jt||(Qe.enabled=!0),Ui(),xi()}function Al(t){if(Me.x=t.clientX/window.innerWidth*2-1,Me.y=-(t.clientY/window.innerHeight)*2+1,ne.setFromCamera(Me,Di),re){const s=performance.now();if(s-Ga<vl)return;Ga=s;const a=ne.intersectObject(ie);if(a.length>0){if(se.copy(a[0].point),se.y<It-Mi){G=null,Y&&(Y.visible=!1);return}ye.copy(se),ie.worldToLocal(ye),G={world:se,local:ye},Y?Y.visible=!0:fs(J()),Y&&(Y.position.copy(se),Y.position.y+=.05)}return}const e=performance.now();if(e-Za<gl)return;Za=e;const i=ua(ne.ray);if(i)document.body.style.cursor=i.radius>=.15?"pointer":"default";else{const s=ne.intersectObject(ie);if(s.length>0){const a=s[0].point;document.body.style.cursor=a.y>=It-Mi?J()?"s-resize":"n-resize":"default"}else document.body.style.cursor="default"}}function Rl(t){if(t.key==="Shift"){const e=J();fa=!0,document.body.style.cursor="s-resize",!e&&Y&&re&&bi(!0)}}function Pl(t){if(t.key==="Shift"){const e=J();fa=!1,document.body.style.cursor=re?"n-resize":"default",e&&Y&&re&&bi(!1)}}function Fl(t){if(Jo(t.target))return;const e=J();Kt=t.touches.length;const i=J();e!==i&&Y&&re&&bi(i);const s=t.changedTouches[0];Qt={x:s.clientX,y:s.clientY},us=Date.now(),Me.x=s.clientX/window.innerWidth*2-1,Me.y=-(s.clientY/window.innerHeight)*2+1,ne.setFromCamera(Me,Di);const a=ua(ne.ray);if(a&&a.radius>=.15&&ei&&ti){ss.copy(a.position);const n=a.radius;no(a,bt,ei,ti)&&(po(),_o(),ro(ss,n)),document.body.style.cursor="pointer",t.preventDefault();return}if(lo(ne,bt))return;if(co(ne)){t.preventDefault();return}const o=ne.intersectObject(ie);if(o.length>0){const n=o[0].point;if(n.y<It-Mi)return;se.copy(n),ye.copy(se),ie.worldToLocal(ye),G={world:se,local:ye},re=!0,Qe.enabled=!1,Ue=s.identifier,document.body.style.cursor=J()?"s-resize":"n-resize",Y||fs(J()),Y&&(Y.position.copy(se),Y.position.y+=.05),go(),t.preventDefault()}}function Il(t){const e=J();Kt=t.touches.length;const i=J();e!==i&&Y&&re&&bi(i);let s=null;if(Ue!==null){for(let a=0;a<t.touches.length;a++)if(t.touches[a].identifier===Ue){s=t.touches[a];break}}if(s||(s=t.touches[0]),Me.x=s.clientX/window.innerWidth*2-1,Me.y=-(s.clientY/window.innerHeight)*2+1,re){ne.setFromCamera(Me,Di);const a=ne.intersectObject(ie);if(a.length>0){if(se.copy(a[0].point),se.y<It-Mi){G=null,Y&&(Y.visible=!1);return}ye.copy(se),ie.worldToLocal(ye),G={world:se,local:ye},Y?Y.visible=!0:fs(J()),Y&&(Y.position.copy(se),Y.position.y+=.05)}t.preventDefault()}}function Wl(t){const e=t.changedTouches[0],i={x:e.clientX,y:e.clientY},s=Math.sqrt(Math.pow(i.x-Qt.x,2)+Math.pow(i.y-Qt.y,2)),a=Date.now()-us;if(s<Ko&&a<500&&G){const l=Date.now()-Bi<_l;if(l||J()){ns(G.local,-.8),ut(),ht++,Bi=l?0:Date.now();const h=G.world,f=.5,r=Vt(ie,h);Yi(h,!0,f,r),Fs()}else{ns(G.local,.8),ut(),ht++,Bi=Date.now();const h=G.world,f=.5,r=Vt(ie,h);Yi(h,!1,f,r),Fs()}}const o=J();Kt=t.touches.length;const n=J(),p=e.identifier;o!==n&&Y&&re&&p!==Ue&&bi(n),p===Ue&&(Ue=null,re=!1,G=null,Jt||(Qe.enabled=!0),document.body.style.cursor="default",Ui(),xi()),Kt===0&&(Ue=null,re=!1,G=null,Jt||(Qe.enabled=!0),document.body.style.cursor="default",Ui(),xi())}function zl(){Kt=0,Ue=null,re=!1,G=null,Jt||(Qe.enabled=!0),Bi=0,document.body.style.cursor="default",Ui(),xi()}function Ll(t){t.preventDefault()}function Cc(t){bt=t.scene,Di=t.camera,Qe=t.controls,ie=t.terrainMesh,It=t.waterLevel,ma=t.sculptTerrain,Bt=t.stampTerrain,ut=t.updateTrimesh,ei=t.world,ti=t.physicsConfig,be||(be=Qs(!1),be.visible=!1,be.isPersistent=!0,bt.add(be)),Ce||(Ce=Qs(!0),Ce.visible=!1,Ce.isPersistent=!0,bt.add(Ce)),window.addEventListener("mousedown",bl),window.addEventListener("mouseup",Cl),window.addEventListener("mousemove",Al),window.addEventListener("contextmenu",Ll),window.addEventListener("keydown",Rl),window.addEventListener("keyup",Pl),window.addEventListener("touchstart",Fl,{passive:!1}),window.addEventListener("touchmove",Il,{passive:!1}),window.addEventListener("touchend",Wl),window.addEventListener("touchcancel",zl)}function Ac(t=.016){if(Dl(t,Hi,He,vt,Et),re&&G){const e=Date.now(),i=J();if(i){if(Js(),Lt+=t,!os&&Lt>=xl&&(os=!0,aa()),Lt>=qa){const s=Lt-qa,a=zi,o=zi+ja;if(s>=o&&vt<2){if(vt=2,Et=1,Bt&&G){Bt(G.local,As,Tl),kn(),Yn(),ut(),ht++;const n=G.world,p=Vt(ie,n);wa(n,As,2,p),Ua(n,ie,As,!0)}}else if(s>=a&&!Vi){if(vt=1,Et=0,Vi=!0,Bt&&G){Bt(G.local,Cs,Sl),Bn(),Xn(),ut(),ht++;const n=G.world,p=Vt(ie,n);wa(n,Cs,1,p),Ua(n,ie,Cs,!0)}}else s<a?Et=s/zi:s<o&&Vi&&(Et=(s-zi)/ja)}}else if(ea(),zt+=t,!as&&zt>=Ml&&(as=!0,na()),!He&&zt>=$s){const s=zt-$s;Hi=Math.min(1,s/Qo),Hi>=1&&!He&&(He=!0,oa(),Un())}if(e-qs>16){const o=(i?-6.88:6.98)*(!i&&He?wl:1);ns(G.local,o),ht++;const n=G.world,p=He?1.5:1,d=Vt(ie,n);if(Yi(n,i,p,d),e-Ya>pl&&(Zn(),Ya=e),qs=e,e-js>ml)return ut(),js=e,!0}}else(zt>0||He)&&Js(),(Lt>0||vt>0)&&ea();return!1}function Js(){as&&!He&&En(),zt=0,He=!1,Hi=0,as=!1}function ea(){os&&vt===0&&On(),Lt=0,vt=0,Et=0,os=!1,Vi=!1}function Rc(t){t.terrainMesh!==void 0&&(ie=t.terrainMesh),t.waterLevel!==void 0&&(It=t.waterLevel),t.sculptTerrain!==void 0&&(ma=t.sculptTerrain),t.stampTerrain!==void 0&&(Bt=t.stampTerrain),t.updateTrimesh!==void 0&&(ut=t.updateTrimesh),t.world!==void 0&&(ei=t.world),t.physicsConfig!==void 0&&(ti=t.physicsConfig),t.minigameActive!==void 0&&(Jt=t.minigameActive,Qe&&(Qe.enabled=!Jt))}function Pc(){xi(),re=!1,G=null,qs=0,js=0,ht=0,Ue=null,at=0,Js(),ea()}function Fc(){return{isMouseDown:re,currentIntersectionPoint:G,isLowerMode:J()}}function Ic(){return ht}function Wc(t){Ks=t??null}function zc(t,e,i){!be||!Ce||(be.position.set(0,-1e3,0),Ce.position.set(0,-1e3,0),be.visible=!0,Ce.visible=!0,t.compile(e,i),be.visible=!1,Ce.visible=!1)}const Be=350;function Lc(t,e,i){const s=new Float32Array(Be*6),a=new ii;a.setAttribute("position",new oe(s,3));const o=i?i.position.y+6:50,n=new Float32Array(Be),p=new Float32Array(Be),d=new Float32Array(Be),l=new Float32Array(Be),u=new Float32Array(Be),c=new Float32Array(Be);for(let r=0;r<Be;r++)n[r]=(Math.random()-.5)*350,p[r]=e.position.z-Math.random()*380,d[r]=o-Math.random()*130,l[r]=45+Math.random()*55,u[r]=2+Math.random()*3.5,c[r]=28+Math.random()*52;const h=new ia({color:11194608,transparent:!0,opacity:0,depthWrite:!1}),f=new dn(a,h);return f.frustumCulled=!1,t.add(f),{mesh:f,geo:a,wx:n,wz:p,wy:d,speed:l,dropLen:u,vz:c}}function Ec(t,e,i,s,a,o=-1/0,n=0,p=null){if(!t?.mesh||!i)return;const{wx:d,wz:l,wy:u,speed:c,dropLen:h,vz:f}=t,r=i.position.y+6,m=t.geo.attributes.position.array,_=e.position.z,v=e.position.y,w=isFinite(o)?o+n:o,x=isFinite(w),y=x?Math.max(w,r-130):r-130,M=p!==null&&x,b=x?v-w:0,P=x?Math.max(0,r-w):100;for(let S=0;S<Be;S++){u[S]-=c[S]*s,l[S]+=f[S]*s,u[S]<y&&(M&&p(d[S],l[S]),u[S]=r+Math.random()*5),l[S]>_-5&&(l[S]=_-80-Math.random()*300,d[S]=(Math.random()-.5)*350,u[S]=r-Math.random()*P);const T=h[S],D=T*.5,W=Math.max(1,_-l[S]),E=x?Math.max(w+b*D/W,u[S]-T):u[S]-T,k=S*6;m[k]=d[S],m[k+1]=u[S],m[k+2]=l[S],m[k+3]=d[S],m[k+4]=E,m[k+5]=l[S]+D}t.geo.attributes.position.needsUpdate=!0,t.mesh.material.opacity=a*.75}function Oc(t,e){e?.mesh&&(t.remove(e.mesh),e.geo.dispose(),e.mesh.material.dispose(),e.mesh=null,e.geo=null)}export{ec as $,yc as A,fr as B,ct as C,hc as D,Dc as E,bc as F,sc as G,pc as H,Ca as I,mc as J,fc as K,uc as L,sl as M,Le as N,ql as O,Fc as P,Bs as Q,vr as R,Ua as S,Ic as T,mr as U,vc as V,Zl as W,jl as X,Xr as Y,tc as Z,ic as _,Ie as a,Jl as a0,Pc as a1,ac as a2,Kl as a3,Tc as a4,Mc as a5,xc as a6,Sc as a7,ir as a8,jn as a9,Wc as aa,cc as ab,lc as ac,oc as ad,rc as ae,nc as af,Gr as ag,Ac as ah,zc as ai,Ar as aj,ai as ak,Cr as al,Mr as am,la as an,ra as ao,Ci as ap,Ra as aq,_r as ar,gi as as,wr as at,Mo as au,$l as av,Oc as b,Lc as c,Tr as d,Qs as e,yr as f,br as g,Co as h,g as i,Ao as j,Ct as k,Yl as l,Xl as m,Dr as n,Cc as o,Rc as p,Zr as q,gc as r,Zi as s,Ql as t,Ec as u,dc as v,Gl as w,Ul as x,_c as y,wc as z};
