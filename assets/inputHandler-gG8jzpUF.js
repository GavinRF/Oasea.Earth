import{C as yn,q as Wc}from"./physicsQueue-XOQprDaT.js";import{a as Cl,w as Bc,C as Uc,s as Vc,d as bl,z as Va,A as Ya,B as ja,y as Yc,D as jc,E as Kc,F as Xc,G as Rl,H as Al,I as Js,J as Zc,K as qc,L as $c,M as Jc}from"./audioManager-CAuPOnz-.js";import{$ as Qc,_ as eu,C as Dl,u as tu,e as Il,A as El,P as Pl,a0 as Ll,a1 as Ol,a2 as ga,a3 as nu,Y as ou,H as su,a4 as iu}from"./levelManager-Dn0N90YD.js";import{d as Z,V as P,P as $o,Q as Jn,E as wi,T as Fl,c as vo,R as xt,S as et,U as au,a7 as ru,j as pe,M as we,a8 as lu,a9 as cu,aa as va,D as Ne,x as uu,f as _n,g as ze,C as Ao,L as wn,ab as Ka,W as Bi,ac as du,l as fu,p as Vt,ad as hu,ae as pu,e as Tt,G as Zt,a as Nl,af as mu,ag as gu,a1 as Xa,t as Za,N as zl,u as Mi,h as Jo,i as qe,I as jn,ah as vu,ai as ya,aj as Hl,ak as yu,al as Bo,am as Gl,an as Gt,ao as en,ap as wu,a3 as wa,K as Mu,O as kl,aq as xu,ar as _u,as as Tu,at as Su,au as Cu,av as Wl,aw as bu,ax as Ru,ay as Ui,v as Bl,q as Qo,b as Xe,az as Au,aA as Du,a6 as Iu,w as Eu,aB as Pu,aC as Lu,aD as Ou,aE as Fu,aF as Nu,aG as zu,aH as Ul,aI as Hu,aJ as Ir,aK as Er,aL as Pr,aM as Lr,aN as Or,F as Gu,aO as ku,aP as xi,Y as Wu,A as qt,aQ as Bu,o as Uo,a5 as Uu,a4 as Vu,aR as Yu,a0 as Fr,aS as ju,r as qa,aT as Ku,aU as Xu,m as Zu,aV as qu,s as Qs,aW as Vi,aX as $u,aY as Yi,k as Ju}from"./three-Dg6yb95S.js";import{b as fe}from"./physics-CKC5f6tm.js";function kt(o,e=.35,t=.148,s=.4){const n=o.x*e,i=o.y*e,a=o.z*e+t,r=.299*n+.587*i+.114*a;return new P(n+(r-n)*s,i+(r-i)*s,a+(r-a)*s)}function St(o,e=.35,t=.148,s=.4){const n=o.r*e,i=o.g*e,a=o.b*e+t,r=.299*n+.587*i+.114*a;return new Z(n+(r-n)*s,i+(r-i)*s,a+(r-a)*s)}function Wt(o,e=.75,t=.26){return new P(o.x*e+t,o.y*e,o.z*e)}function Ct(o,e=.75,t=.16){return new Z(o.r*e+t,o.g*e,o.b*e)}const $a=new Z(16754022),Ja=new Z(43212),Qa=new Z(6740463),er=new Z(6477),tr=new Z(3844815),nr=new Z(10541296),or=new Z(8900331),sr=new Z(5618687),ir=new Z(1731253),ar=new Z(14544639),rr=new P(.145,.161,.243),lr=new P(.5412,.3098,.2235),cr=new P(.7922,.4784,.2471),ur=new P(.906,.678,.388),dr=new P(.945,.882,.659),fr=new P(.871,.525,.318),hr=new P(.612,.239,.157),pr=new P(.3059,.1176,.2),mr=new P(.1725,.0078,.2078),gr=new P(.0824,0,.1569),Qu=St($a),ed=St(Ja,.25,.06),td=St(Qa,.25,.06),nd=St(er,.05,.02),od=St(tr,.2,.22),sd=St(nr,.01,.094),id=St(or,.12,.06),ad=St(sr,.515,.16),rd=St(ir,.51,.14),ld=St(ar,.515,.15),cd=kt(gr),ud=kt(mr),dd=kt(pr),fd=kt(hr),hd=kt(fr),pd=kt(dr),md=kt(ur),gd=kt(cr),vd=kt(lr),yd=kt(rr),wd=Ct($a),Md=Ct(Ja,.75,.26),xd=Ct(Qa),_d=Ct(er,.99,.02),Td=Ct(tr),Sd=Ct(nr,.62,.19),Cd=Ct(or),bd=Ct(sr),Rd=Ct(ir),Ad=Ct(ar),Dd=Wt(gr),Id=Wt(mr),Ed=Wt(pr),Pd=Wt(hr),Ld=Wt(fr),Od=Wt(dr),Fd=Wt(ur),Nd=Wt(cr),zd=Wt(lr),Hd=Wt(rr),vr=new Z(1,1,1),Gd=Ct(vr,.85,.18),kd=St(vr,.4,.15),Vl=.4,Yl=.45,jl=.55,Wd=1-Vl,Bd=1-Yl,Ud=1-jl,Dt={DAY_WATER_COLOR:Ja,NIGHT_WATER_COLOR:ed,DUSK_WATER_COLOR:Md,DAY_SHALLOW_COLOR:Qa,NIGHT_SHALLOW_COLOR:td,DUSK_SHALLOW_COLOR:xd,DAY_FOG_COLOR:nr,NIGHT_FOG_COLOR:sd,DUSK_FOG_COLOR:Sd,DAY_DEEP_COLOR:er,NIGHT_DEEP_COLOR:nd,DUSK_DEEP_COLOR:_d,DAY_HEMISPHERE_SHALLOW:tr,NIGHT_HEMISPHERE_SHALLOW:od,DUSK_HEMISPHERE_SHALLOW:Td,DAY_FILL_COLOR:$a,NIGHT_FILL_COLOR:Qu,DUSK_FILL_COLOR:wd,DAY_TERRAIN_OCEAN_DEEP:gr,NIGHT_TERRAIN_OCEAN_DEEP:cd,DUSK_TERRAIN_OCEAN_DEEP:Dd,DAY_TERRAIN_OCEAN_MID:mr,NIGHT_TERRAIN_OCEAN_MID:ud,DUSK_TERRAIN_OCEAN_MID:Id,DAY_TERRAIN_DEEP:pr,NIGHT_TERRAIN_DEEP:dd,DUSK_TERRAIN_DEEP:Ed,DAY_TERRAIN_SHALLOW:hr,NIGHT_TERRAIN_SHALLOW:fd,DUSK_TERRAIN_SHALLOW:Pd,DAY_TERRAIN_LOW:fr,NIGHT_TERRAIN_LOW:hd,DUSK_TERRAIN_LOW:Ld,DAY_TERRAIN_MID_LOW:dr,NIGHT_TERRAIN_MID_LOW:pd,DUSK_TERRAIN_MID_LOW:Od,DAY_TERRAIN_MID:ur,NIGHT_TERRAIN_MID:md,DUSK_TERRAIN_MID:Fd,DAY_TERRAIN_MID_HIGH:cr,NIGHT_TERRAIN_MID_HIGH:gd,DUSK_TERRAIN_MID_HIGH:Nd,DAY_TERRAIN_HIGH:lr,NIGHT_TERRAIN_HIGH:vd,DUSK_TERRAIN_HIGH:zd,DAY_TERRAIN_PEAK:rr,NIGHT_TERRAIN_PEAK:yd,DUSK_TERRAIN_PEAK:Hd,DAY_SKY_BG:or,NIGHT_SKY_BG:id,DUSK_SKY_BG:Cd,DAY_HYDRO_WATER:sr,NIGHT_HYDRO_WATER:ad,DUSK_HYDRO_WATER:bd,DAY_HYDRO_DEEP:ir,NIGHT_HYDRO_DEEP:rd,DUSK_HYDRO_DEEP:Rd,DAY_HYDRO_FOAM:ar,NIGHT_HYDRO_FOAM:ld,DUSK_HYDRO_FOAM:Ad,DAY_RIPPLE_TINT:vr,NIGHT_RIPPLE_TINT:kd,DUSK_RIPPLE_TINT:Gd};function pt(o,e,t,s,n){n>.5?o.lerpColors(t,s,(n-.5)*2):o.lerpColors(e,t,n*2)}function It(o,e,t,s,n){n>.5?o.lerpVectors(t,s,(n-.5)*2):o.lerpVectors(e,t,n*2)}const Nr=new Z;function q0(o,e,t,s=!1,n=0){const{waterMaterial:i,waterHemisphereMaterial:a,terrainMaterial:r,fillLight:l,hydroMaterial:c,rippleSystem:d}=e,{DAY_WATER_COLOR:f,NIGHT_WATER_COLOR:u,DUSK_WATER_COLOR:p,DAY_SHALLOW_COLOR:h,NIGHT_SHALLOW_COLOR:m,DUSK_SHALLOW_COLOR:v,DAY_FOG_COLOR:y,NIGHT_FOG_COLOR:w,DUSK_FOG_COLOR:x,DAY_DEEP_COLOR:g,NIGHT_DEEP_COLOR:T,DUSK_DEEP_COLOR:C,DAY_HEMISPHERE_SHALLOW:b,NIGHT_HEMISPHERE_SHALLOW:R,DUSK_HEMISPHERE_SHALLOW:S,DAY_FILL_COLOR:A,NIGHT_FILL_COLOR:E,DUSK_FILL_COLOR:k,DAY_TERRAIN_OCEAN_DEEP:te,NIGHT_TERRAIN_OCEAN_DEEP:ne,DUSK_TERRAIN_OCEAN_DEEP:q,DAY_TERRAIN_OCEAN_MID:ie,NIGHT_TERRAIN_OCEAN_MID:Y,DUSK_TERRAIN_OCEAN_MID:z,DAY_TERRAIN_DEEP:De,NIGHT_TERRAIN_DEEP:_e,DUSK_TERRAIN_DEEP:$,DAY_TERRAIN_SHALLOW:ce,NIGHT_TERRAIN_SHALLOW:he,DUSK_TERRAIN_SHALLOW:Ge,DAY_TERRAIN_LOW:Ze,NIGHT_TERRAIN_LOW:Ye,DUSK_TERRAIN_LOW:Ms,DAY_TERRAIN_MID_LOW:bt,NIGHT_TERRAIN_MID_LOW:xs,DUSK_TERRAIN_MID_LOW:ft,DAY_TERRAIN_MID:Ii,NIGHT_TERRAIN_MID:Rt,DUSK_TERRAIN_MID:Ei,DAY_TERRAIN_MID_HIGH:Tn,NIGHT_TERRAIN_MID_HIGH:Io,DUSK_TERRAIN_MID_HIGH:Pi,DAY_TERRAIN_HIGH:Eo,NIGHT_TERRAIN_HIGH:_s,DUSK_TERRAIN_HIGH:Po,DAY_TERRAIN_PEAK:Li,NIGHT_TERRAIN_PEAK:Lo,DUSK_TERRAIN_PEAK:Oi,DAY_HYDRO_WATER:Fi,NIGHT_HYDRO_WATER:Ni,DUSK_HYDRO_WATER:Oo,DAY_HYDRO_DEEP:Fo,NIGHT_HYDRO_DEEP:zi,DUSK_HYDRO_DEEP:Hi,DAY_HYDRO_FOAM:At,NIGHT_HYDRO_FOAM:nt,DUSK_HYDRO_FOAM:on,DAY_RIPPLE_TINT:Gi,NIGHT_RIPPLE_TINT:No,DUSK_RIPPLE_TINT:Qn}=t;if(l&&(pt(l.color,E,k,A,o),l.intensity=.15+o*.25),i&&(pt(i.uniforms.uWaterColor.value,u,p,f,o),pt(i.uniforms.uShallowColor.value,m,v,h,o),pt(i.uniforms.fogColor.value,w,x,y,o),i.uniforms.uReflectionTint&&i.uniforms.uReflectionTint.value.setRGB(Vl+Wd*o,Yl+Bd*o,jl+Ud*o)),a&&!s&&(pt(a.uniforms.uDeepColor.value,T,C,g,o),pt(a.uniforms.uShallowColor.value,R,S,b,o),pt(a.uniforms.fogColor.value,w,x,y,o)),r){const de=r.uniforms;It(de.oceanDeepColor.value,ne,q,te,o),It(de.oceanMidColor.value,Y,z,ie,o),It(de.deepColor.value,_e,$,De,o),It(de.shallowColor.value,he,Ge,ce,o),It(de.lowColor.value,Ye,Ms,Ze,o),It(de.midLowColor.value,xs,ft,bt,o),It(de.midColor.value,Rt,Ei,Ii,o),It(de.midHighColor.value,Io,Pi,Tn,o),It(de.highColor.value,_s,Po,Eo,o),It(de.peakColor.value,Lo,Oi,Li,o),n>0&&(de.oceanDeepColor.value.lerp(ne,n),de.oceanMidColor.value.lerp(Y,n),de.deepColor.value.lerp(_e,n),de.shallowColor.value.lerp(he,n),de.lowColor.value.lerp(Ye,n),de.midLowColor.value.lerp(xs,n),de.midColor.value.lerp(Rt,n),de.midHighColor.value.lerp(Io,n),de.highColor.value.lerp(_s,n),de.peakColor.value.lerp(Lo,n))}c&&(pt(c.uniforms.uWaterColor.value,Ni,Oo,Fi,o),pt(c.uniforms.uWaterColorDeep.value,zi,Hi,Fo,o),pt(c.uniforms.uFoamColor.value,nt,on,At,o)),d&&(pt(Nr,No,Qn,Gi,o),d.setTimeTint(Nr))}function ji(o,e,t,s,n){const i=o.material.uniforms;i.turbidity.value=t.turbidity+(s.turbidity-t.turbidity)*n,i.rayleigh.value=t.rayleigh+(s.rayleigh-t.rayleigh)*n,i.mieCoefficient.value=t.mieCoefficient+(s.mieCoefficient-t.mieCoefficient)*n,e.toneMappingExposure=t.exposure+(s.exposure-t.exposure)*n}const es=2;let Rs=null;function Vd(){if(Rs)return Rs;const o={minFilter:wn,magFilter:wn,format:fu,type:du};return Rs={heightmap:new Bi(512,512,o),wetness1:new Bi(512,512,o),wetness2:new Bi(512,512,o)},Rs}let Ki=null,Xi=null,Zi=null;const zr=Object.create(null);let eo=null,As=null,sn=null;function Yd(){if(sn)return sn;const o=256,e=document.createElement("canvas");e.width=o,e.height=o;const t=e.getContext("2d"),s=t.createImageData(o,o);for(let n=0;n<s.data.length;n+=4)s.data[n]=Math.random()*255,s.data[n+1]=Math.random()*255,s.data[n+2]=Math.random()*255,s.data[n+3]=255;return t.putImageData(s,0,0),sn=new Ao(e),sn.wrapS=xt,sn.wrapT=xt,sn.magFilter=wn,sn.minFilter=Ka,sn}function $0(o={}){const{segments:e=32,normalMapPath:t="normal-maps/sand-normal.jpg",normalMapScale:s=2,physicsWorld:n,physicsConfig:i={ballGround:{friction:.0022,restitution:.43}},shape:a={},waterLevel:r=-2.87}=o,l=a.size||18,c={scaleX:a.scaleX||1,scaleY:a.scaleY||1,tilt:a.tilt||{angle:0,amount:0},bay:a.bay||{angle:0,depth:0,width:0},irregularity:a.irregularity||1,distortion:a.distortion||{frequency:.5,amplitude:.3,randomness:.2},turbulence:a.turbulence||null,islandRadius:a.islandRadius||l*.365,terracing:a.terracing||null,caldera:a.caldera||null,volcanoes:a.volcanoes||null,spiral:a.spiral||null},d=c.islandRadius,f=d+d*0,u=d+d*.26,p=d+d*.75,h=5.8,m=-4.6,v=512,y=new $o(l,l,e,e),w=y.attributes.position;function x(_,I){if(_<2){if(_<.01)return 0;const N=_/2,B=N*N*(3-2*N),V=Math.sin(I*3+_*.5)*.4,U=Math.sin(I*5-_*.3)*.25,X=Math.sin(I*7+_*.7)*.2;return(V+U+X)*c.irregularity*B}const F=Math.sin(I*3+_*.5)*.4,G=Math.sin(I*5-_*.3)*.25,K=Math.sin(I*7+_*.7)*.2;return(F+G+K)*c.irregularity}function g(_,I,L){const F=_/c.scaleX,G=I/c.scaleY;let K=Math.sqrt(F*F+G*G);if(c.bay.depth>0){const N=c.bay.angle,B=c.bay.width;let V=Math.abs(L-N);if(V>Math.PI&&(V=2*Math.PI-V),V<B){const U=Math.cos(V/B*Math.PI/2);K+=c.bay.depth*U}}return K}function T(_,I){if(c.tilt.amount===0)return 0;const L=1.5;if(_<L){if(_<.01)return 0;const K=_/L,N=K*K*(3-2*K),B=c.tilt.angle;return Math.cos(I-B)*c.tilt.amount*N}const F=c.tilt.angle;return Math.cos(I-F)*c.tilt.amount}function C(_){if(!c.terracing)return _;const{levels:I=3,sharpness:L=.5,heightRange:F=[0,2.5]}=c.terracing,[G,K]=F;if(_<G||_>K)return _;const N=(_-G)/(K-G),B=1/I,U=Math.floor(N/B)*B,X=(N-U)/B;let j;if(L>=.99)j=U+B*.5;else{const D=1-L,O=.5-D*.5,Q=.5+D*.5;let ae;if(X<O)ae=0;else if(X>Q)ae=1;else{const re=(X-O)/(Q-O);ae=re*re*(3-2*re)}j=U+B*ae}return G+j*(K-G)}function b(_,I,L){if(!c.caldera)return 0;const{radius:F=.4,depth:G=2,rimHeight:K=.5,rimWidth:N=.15,breach:B=null,cx:V=0,cy:U=0}=c.caldera,X=V*d,j=U*d,D=_-X,O=I-j,Q=Math.sqrt(D*D+O*O),ae=Math.atan2(O,D),re=d*F,ke=re+d*N;let Oe=1;if(B&&B.width>0){let ue=Math.abs(ae-B.angle);ue>Math.PI&&(ue=2*Math.PI-ue),ue<B.width&&(Oe=ue/B.width,Oe=Oe*Oe)}let ht=0;if(Q<re){const ue=Q/re,je=Math.cos(ue*Math.PI*.5);ht=-G*je}else if(Q<ke){const ue=(Q-re)/(ke-re),je=Math.sin(ue*Math.PI);ht=K*je*Oe}return ht}function R(_,I){if(!c.volcanoes||c.volcanoes.length===0)return 0;let L=0;for(const F of c.volcanoes){const{x:G=0,y:K=0,height:N=3,baseRadius:B=3,slope:V=1,crater:U=null}=F,X=_-G,j=I-K,D=Math.sqrt(X*X+j*j);if(D>=B)continue;const O=1-D/B,Q=Math.pow(O,1/V);let ae=N*Q;if(U&&U.radius>0&&D<U.radius){const re=D/U.radius,ke=U.flatRadius||.4,Oe=re<ke?1:Math.cos((re-ke)/(1-ke)*Math.PI*.5),ht=U.depth||N*.4;ae=N*Math.pow(1-U.radius/B,1/V)-ht*Oe}L=Math.max(L,ae)}return L}function S(_,I){if(!c.turbulence)return 0;const{strength:L=3,scale:F=.3,octaves:G=3}=c.turbulence;let K=0,N=L,B=F,V=0;for(let U=0;U<G;U++){const X=Math.sin(_*B+U*10)*Math.cos(I*B+U*5),j=Math.sin((_+I)*B*1.3+U*7),D=Math.cos((_-I)*B*.7+U*3),O=(X+j*.5+D*.3)*N;K+=O,V+=N,N*=.5,B*=2}return K/V*L}function A(_,I){if(!c.spiral)return 0;const{turns:L=2,heightRange:F=3,tightness:G=1,direction:K=1,centerHeight:N=0}=c.spiral,B=1.5;if(_<.01)return N;const V=_/d*L*Math.PI*2*G,U=I*K+V,X=Math.sin(U)*F*.5,j=E(0,B,_),D=d*.7,O=d*1.2,Q=1-E(D,O,_),re=1-E(0,2,_);return X*j*Q+N*re}function E(_,I,L){const F=Math.max(0,Math.min(1,(L-_)/(I-_)));return F*F*(3-2*F)}const{frequency:k,amplitude:te,randomness:ne}=c.distortion;for(let _=0;_<w.count;_++){const I=w.getX(_),L=w.getY(_),F=w.getZ(_),G=Math.sqrt(I*I+L*L),K=Math.atan2(L,I),N=g(I,L,K),B=x(G,K)*1.5,V=d+B,U=f+B*.8,X=u+B*.6,j=p+B*.4,D=.51+Math.sin(I*k)*Math.cos(L*k*1.04)*te+Math.random()*ne;let O;if(N<V)O=D;else if(N<U){const ue=(N-V)/(U-V),je=ue*ue*(3-2*ue);O=D*(1-je*.4)}else if(N<X){const ue=(N-U)/(X-U),je=ue*ue*(3-2*ue);O=D*.6-je*3.5}else if(N<j){const ue=D*.6-3.5,je=(N-X)/(j-X),Wi=je*je*(3-2*je);O=ue-Wi*(63+ue)}else O=-63;N<V&&(O+=b(I,L)),O+=R(I,L),O=C(O),N<X&&(O+=A(G,K)),O+=T(G,K),N<X&&(O+=S(I,L));const Q=l/2,ae=Math.abs(I)/Q,re=Math.abs(L)/Q,ke=Math.max(ae,re),Oe=.85,ht=1;if(ke>Oe&&O>r-2){const ue=(ke-Oe)/(ht-Oe),je=ue*ue*(3-2*ue),Wi=r-2;O=Math.min(O,O*(1-je)+Wi*je)}w.setZ(_,F+O)}w.needsUpdate=!0,y.computeVertexNormals();function q(_){const L=_.attributes.position,F=_.attributes.uv,G=_.index,K=e+1,N=[],B=[],V=[];for(let D=0;D<L.count;D++)N.push(L.getX(D),L.getY(D),L.getZ(D)),B.push(F.getX(D),F.getY(D));for(let D=0;D<G.count;D++)V.push(G.getX(D));const U=L.count;for(let D=0;D<L.count;D++)N.push(L.getX(D),L.getY(D),-63),B.push(F.getX(D),F.getY(D));function X(D,O){return D*K+O}for(let D=0;D<e;D++){const O=X(0,D),Q=X(0,D+1),ae=O+U,re=Q+U;V.push(O,Q,ae),V.push(Q,re,ae)}for(let D=0;D<e;D++){const O=X(e,D),Q=X(e,D+1),ae=O+U,re=Q+U;V.push(O,ae,Q),V.push(Q,ae,re)}for(let D=0;D<e;D++){const O=X(D,0),Q=X(D+1,0),ae=O+U,re=Q+U;V.push(O,ae,Q),V.push(Q,ae,re)}for(let D=0;D<e;D++){const O=X(D,e),Q=X(D+1,e),ae=O+U,re=Q+U;V.push(O,Q,ae),V.push(Q,re,ae)}const j=new _n;return j.setAttribute("position",new ze(new Float32Array(N),3)),j.setAttribute("uv",new ze(new Float32Array(B),2)),j.setIndex(V),j.computeVertexNormals(),j}const ie=q(y);y.dispose();const Y=ie,z=Y.attributes.position;function De(_,I){const L=Math.sqrt(_*_+I*I),F=Math.atan2(I,_),G=g(_,I,F),K=x(L,F)*1.5,N=d+K,B=f+K*.8,V=u+K*.6,U=p+K*.4,X=.51+Math.sin(_*k)*Math.cos(I*k*1.04)*te;let j;if(G<N)j=X;else if(G<B){const D=(G-N)/(B-N),O=D*D*(3-2*D);j=X*(1-O*.4)}else if(G<V){const D=(G-B)/(V-B),O=D*D*(3-2*D);j=X*.6-O*3.5}else if(G<U){const D=X*.6-3.5,O=(G-V)/(U-V),Q=O*O*(3-2*O);j=D-Q*(63+D)}else j=-63;return G<N&&(j+=b(_,I)),j+=R(_,I),j=C(j),j+=A(L,F),j+=T(L,F),G<V&&(j+=S(_,I)),j}function _e(){const _=(Math.random()-.5)*(l*.8),I=(Math.random()-.5)*(l*.8);return{x:_,z:I}}const $=e+1,ce=$*$,he=e/l;function Ge(_,I){const L=(_+l/2)*e/l,F=(I+l/2)*e/l,G=Math.max(0,Math.min(e-1,Math.floor(L))),K=G+1,N=Math.max(0,Math.min(e-1,Math.floor(F))),B=N+1,V=L-G,U=F-N,X=z.getZ(N*$+G),j=z.getZ(N*$+K),D=z.getZ(B*$+G),O=z.getZ(B*$+K);return X*(1-V)*(1-U)+j*V*(1-U)+D*(1-V)*U+O*V*U}function Ze(){const _=new Float32Array(z.count*3);for(let F=0;F<z.count;F++){const G=z.getX(F),K=z.getY(F);let N=z.getZ(F);if(F<ce){const V=Math.floor(F/$),U=F%$;let X=N,j=1,D=0;if(V>0){const O=z.getZ(F-$);X+=O,j++,D=Math.max(D,Math.abs(O-N))}if(V<e){const O=z.getZ(F+$);X+=O,j++,D=Math.max(D,Math.abs(O-N))}if(U>0){const O=z.getZ(F-1);X+=O,j++,D=Math.max(D,Math.abs(O-N))}if(U<e){const O=z.getZ(F+1);X+=O,j++,D=Math.max(D,Math.abs(O-N))}D<.4&&(N=X/j)}const B=F*3;_[B]=G,_[B+1]=K,_[B+2]=N}const I=Y.index,L=new Uint32Array(I.array);return{vertices:_,indices:L}}const Ye=Ze(),Ms=new wi(-Math.PI/2,0,0),bt=new Jn().setFromEuler(Ms),xs=fe.RigidBodyDesc.fixed().setRotation({x:bt.x,y:bt.y,z:bt.z,w:bt.w});let ft=n.createRigidBody(xs);const Ii=fe.ColliderDesc.trimesh(Ye.vertices,Ye.indices).setFriction(i.ballGround.friction).setRestitution(i.ballGround.restitution).setCollisionGroups(yn.terrain);let Rt=n.createCollider(Ii,ft);function Ei(){Rt&&n.removeCollider(Rt,!0),ft&&n.removeRigidBody(ft);const _=Ze(),I=fe.RigidBodyDesc.fixed().setRotation({x:bt.x,y:bt.y,z:bt.z,w:bt.w});ft=n.createRigidBody(I);const L=fe.ColliderDesc.trimesh(_.vertices,_.indices).setFriction(i.ballGround.friction).setRestitution(i.ballGround.restitution).setCollisionGroups(yn.terrain);Rt=n.createCollider(L,ft)}let Tn=null,Io=0;const Pi=100;let Eo=0;const _s=4;let Po=0;const Li=8;function Lo(_,I,L=es){const F=L*L,G=Math.ceil(L*he),K=Math.round((_.x+l/2)*he),N=Math.round((l/2-_.y)*he),B=Math.max(0,K-G),V=Math.min(e,K+G),U=Math.max(0,N-G),X=Math.min(e,N+G);for(let D=U;D<=X;D++)for(let O=B;O<=V;O++){const Q=D*$+O,ae=z.getX(Q)-_.x,re=z.getY(Q)-_.y,ke=ae*ae+re*re;if(ke>=F)continue;const Oe=ke/F,ht=(1-Oe)*(1-Oe),ue=z.getZ(Q)+I*ht*.02;z.setZ(Q,Math.max(m,Math.min(h,ue)))}z.needsUpdate=!0,Po++,Po>=Li&&(Po=0,Y.computeBoundingBox(),Y.computeBoundingSphere()),Eo++,Eo>=_s&&(Eo=0,Y.computeVertexNormals());const j=performance.now();Tn&&j-Io>Pi&&(Ts(Tn),Io=j)}function Oi(_){Lo({x:_.localX,y:_.localY},_.heightChange,_.radius??es)}function Fi(_,I,L){const F=I*I,G=Math.ceil(I*he),K=Math.round((_.x+l/2)*he),N=Math.round((l/2-_.y)*he),B=Math.max(0,K-G),V=Math.min(e,K+G),U=Math.max(0,N-G),X=Math.min(e,N+G);for(let j=U;j<=X;j++)for(let D=B;D<=V;D++){const O=j*$+D,Q=z.getX(O)-_.x,ae=z.getY(O)-_.y,re=Q*Q+ae*ae;if(re>=F)continue;const ke=re/F,Oe=(1-ke)*(1-ke),ht=z.getZ(O)+L*Oe;z.setZ(O,Math.max(m,Math.min(h,ht)))}z.needsUpdate=!0,Y.computeVertexNormals(),Y.computeBoundingBox(),Y.computeBoundingSphere(),Tn&&Ts(Tn)}const Ni=Yd(),Oo=40,Fo=new Fl;eo||(eo=Fo.load("lava-textures/cool-lava-diffuse.jpg"),eo.colorSpace=vo,eo.wrapS=xt,eo.wrapT=xt,As=Fo.load("lava-textures/cool-lava-normal.jpg"),As.wrapS=xt,As.wrapT=xt);const zi=eo,Hi=As;let At=zr[t];At||(At=Fo.load(t),At.wrapS=xt,At.wrapT=xt,zr[t]=At),At.repeat.set(s,s);let nt;if(Ki){nt=Ki;const _=nt.uniforms;_.normalMap.value=At,_.normalMapRepeat.value=s,_.uWaterLevel.value=r,_.uFogEnd.value=r,_.uFogStart.value=r-16,_.uWinGreenIntensity.value=0,_.uWinGreenDetailIntensity.value=0,_.uUseWetnessMap.value=!1,_.uTerrainMeshSize.value=l,_.uCoolLavaSpotCount.value=0,_.uIsNightTime.value=!1}else nt=new et({uniforms:au.merge([ru.lights,{normalMap:{value:At},normalMapRepeat:{value:s},rockGrainMap:{value:Ni},rockGrainRepeat:{value:8},oceanDeepColor:{value:Dt.DAY_TERRAIN_OCEAN_DEEP.clone()},oceanMidColor:{value:Dt.DAY_TERRAIN_OCEAN_MID.clone()},deepColor:{value:Dt.DAY_TERRAIN_DEEP.clone()},shallowColor:{value:Dt.DAY_TERRAIN_SHALLOW.clone()},lowColor:{value:Dt.DAY_TERRAIN_LOW.clone()},midLowColor:{value:Dt.DAY_TERRAIN_MID_LOW.clone()},midColor:{value:Dt.DAY_TERRAIN_MID.clone()},midHighColor:{value:Dt.DAY_TERRAIN_MID_HIGH.clone()},highColor:{value:Dt.DAY_TERRAIN_HIGH.clone()},peakColor:{value:Dt.DAY_TERRAIN_PEAK.clone()},uFogColor:{value:new Z(943004)},uFogStart:{value:-18.87},uFogEnd:{value:-2.87},uTime:{value:0},uWaterLevel:{value:r},uWaveAmplitude:{value:.26},uWaveFrequency:{value:4.2},uWaveHeightMultiplier:{value:4.13},uCausticsDepth:{value:4},uCausticsEnabled:{value:!0},uCausticsIntensity:{value:.15},uCausticsFadeStart:{value:.3},uCausticsBreath:{value:1},uCausticsAngleCos:{value:1},uCausticsAngleSin:{value:0},uCausticsRock1:{value:0},uCausticsRock2:{value:Math.sin(1.5)},uCausticsThreshold:{value:.6},uWaterMeshOffset:{value:new pe(0,0)},uWaterMeshPosition:{value:new pe(0,0)},uWaterCurvature:{value:2e-5},uWetnessMap:{value:null},uUseWetnessMap:{value:!1},uTerrainMeshSize:{value:l},uWinGreenIntensity:{value:0},uWinGreenColor:{value:new P(.075,.302,.082)},uWinGreenColorNight:{value:new P(.05,.15,.08)},uWinGreenDetailIntensity:{value:0},uWinGreenDetailColor:{value:new P(.035,.16,.045)},uWinGreenDetailColorNight:{value:new P(.025,.09,.04)},uIsNightTime:{value:!1},uCoolLavaTex:{value:zi},uCoolLavaNorm:{value:Hi},uCoolLavaSpotCount:{value:0}}]),lights:!0,clipping:!0,vertexShader:`
      #include <common>
      #include <clipping_planes_pars_vertex>
      #include <shadowmap_pars_vertex>

      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldNormal;
      varying vec3 vWorldPosition;
      varying vec3 vViewPosition;
      varying vec2 vUv;
      varying vec3 vTangent;
      varying vec3 vBitangent;

      void main() {
        vPosition = position;
        vec3 transformedNormal = normalize(normalMatrix * normal);
        vNormal = transformedNormal;
        vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);

        vec3 transformed = position;
        vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
        vWorldPosition = worldPosition.xyz;

        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        vUv = uv;

        // Calculate tangent space for normal mapping
        vec3 c1 = cross(normal, vec3(0.0, 3.0, 1.0));
        vec3 c2 = cross(normal, vec3(0.0, 1.0, 0.0));
        vec3 tangent = length(c1) > length(c2) ? c1 : c2;
        vTangent = normalize(normalMatrix * tangent);
        vBitangent = cross(vNormal, vTangent);

        gl_Position = projectionMatrix * mvPosition;

        #include <clipping_planes_vertex>
        #include <shadowmap_vertex>
      }
    `,fragmentShader:`
      #include <common>
      #include <packing>
      #include <clipping_planes_pars_fragment>
      #include <shadowmap_pars_fragment>

      uniform sampler2D normalMap;
      uniform float normalMapRepeat;
      uniform sampler2D rockGrainMap;
      uniform float rockGrainRepeat;
      uniform vec3 oceanDeepColor;
      uniform vec3 oceanMidColor;
      uniform vec3 deepColor;
      uniform vec3 shallowColor;
      uniform vec3 lowColor;
      uniform vec3 midLowColor;
      uniform vec3 midColor;
      uniform vec3 midHighColor;
      uniform vec3 highColor;
      uniform vec3 peakColor;
      uniform vec3 uFogColor;
      uniform float uFogStart;
      uniform float uFogEnd;
      // Caustics uniforms
      uniform float uTime;
      uniform float uWaterLevel;
      uniform float uWaveAmplitude;
      uniform float uWaveFrequency;
      uniform float uWaveHeightMultiplier;
      uniform float uCausticsDepth;
      uniform bool uCausticsEnabled;
      uniform float uCausticsIntensity;
      // Caustics animation pre-computed CPU-side each frame
      uniform float uCausticsBreath;
      uniform float uCausticsAngleCos;
      uniform float uCausticsAngleSin;
      uniform float uCausticsRock1;
      uniform float uCausticsRock2;
      uniform float uCausticsThreshold;
      uniform float uCausticsFadeStart;
      uniform vec2 uWaterMeshOffset;      // For wave calculations
      uniform vec2 uWaterMeshPosition;    // For curvature calculations
      uniform float uWaterCurvature;
      // Wetness map uniforms
      uniform sampler2D uWetnessMap;
      uniform bool uUseWetnessMap;
      uniform float uTerrainMeshSize;
      // Win effect uniforms
      uniform float uWinGreenIntensity;
      uniform vec3 uWinGreenColor;
      uniform vec3 uWinGreenColorNight;
      uniform float uWinGreenDetailIntensity;
      uniform vec3 uWinGreenDetailColor;
      uniform vec3 uWinGreenDetailColorNight;
      uniform bool uIsNightTime;
      uniform sampler2D uCoolLavaTex;
      uniform sampler2D uCoolLavaNorm;
      uniform vec4 uCoolLavaSpots[40]; // xy=worldXZ, z=radius
      uniform int uCoolLavaSpotCount;
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldNormal;
      varying vec3 vWorldPosition;
      varying vec3 vViewPosition;
      varying vec2 vUv;
      varying vec3 vTangent;
      varying vec3 vBitangent;

      // Hash function for noise (EXACT match to water shader)
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(3127.1, 31.7))) * 43758.5453);
      }

      // Smooth noise with quintic interpolation (EXACT match to water shader)
      float smoothNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);

        // Quintic interpolation (Ken Perlin's improved smoothstep)
        f = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);

        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));

        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      // Simplex noise for caustics
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                            0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                            -0.577350269189626,  // -1.0 + 2.0 * C.x
                            0.024390243902439); // 1.0 / 41.0
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i); // Avoid truncation effects in permutation
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
            + i.x + vec3(0.0, i1.x, 1.0 ));

        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      // Fractal Brownian Motion for smoother waves (EXACT match to water shader)
      float fbmWaves(vec2 p) {
        float value = 0.212;
        float amplitude = uWaveAmplitude;
        float frequency = uWaveFrequency;

        for(int i = 0; i < 2; i++) {
          value += amplitude * smoothNoise(p * frequency);
          frequency *= 2.4;
          amplitude *= 0.09;
        }
        return value;
      }

      // Wave height calculation (EXACT match to water shader)
      float getWaveHeight(vec2 worldXZ) {
        float wave1 = fbmWaves(worldXZ * 0.15 + vec2(uTime * 0.08, uTime * 0.15));
        float wave2 = fbmWaves(worldXZ * 0.08 - vec2(uTime * 0.08, uTime * 0.12));
        return (wave1 * 0.5 + wave2 * 0.5) - 0.5;
      }

      // Caustics pattern - creates network of lines using simplex noise
      float generateCaustics(vec2 worldXZ, float depthFactor) {
        // Breathing effect and rotation pre-computed CPU-side — same value for every fragment this frame
        mat2 rotation = mat2(uCausticsAngleCos, -uCausticsAngleSin, uCausticsAngleSin, uCausticsAngleCos);

        // Apply breathing scale and rotation
        vec2 uv = (worldXZ * rotation) * (1.5 * uCausticsBreath);

        // First layer - base noise for caustic lines with rocking motion
        vec2 drift1 = vec2(uCausticsRock1 * 0.4, uCausticsRock1 * 0.3);
        float noise1 = snoise(uv * 2.8 + drift1);
        noise1 = noise1 * 0.5 + 0.5;

        // Create thin lines using tight smoothstep and step
        float lines1 = smoothstep(0.08, 0.001, noise1);
        lines1 = step(0.5, lines1);

        // Second layer - wave-like noise with perpendicular rocking
        vec2 drift2 = vec2(uCausticsRock2 * -0.25, uCausticsRock2 * 0.4);
        float noise2 = snoise(uv * 0.8 + drift2);
        noise2 = noise2 * 0.45 + 0.5;

        // Threshold oscillates slowly with breathing rhythm (pre-computed)
        float threshold = uCausticsThreshold;

        // Double smoothstep to create crisp line boundaries
        float lines2 = 1.0 - (smoothstep(threshold + 0.03, threshold + 0.032, noise2) +
                              smoothstep(threshold, threshold - 0.01, noise2));

        // Binary step to sharpen the lines
        lines2 = step(0.5, lines2);

        // Combine both line layers
        float combinedLines = min(lines1 + lines2, 1.0);

        // Modulate by depth factor
        combinedLines *= depthFactor;

        return clamp(combinedLines, 0.0, 1.0);
      }

      void main() {
        #include <clipping_planes_fragment>

        // Sample the normal map with tiling/repeat
        vec3 normalMapSample = texture2D(normalMap, vUv * normalMapRepeat).xyz * 2.0 - 1.0;

        // Transform normal from tangent space to world space
        mat3 tbn = mat3(vTangent, vBitangent, vNormal);
        vec3 perturbedNormal = normalize(tbn * normalMapSample);

        // Height-based color grading - sunset/warm palette
        float height = vPosition.z;
        // All colors are now uniforms for day/night transitions

        // Rock striations - perturb height for natural geological variation
        // Skip expensive noise for deep ocean floor where it's not visible
        vec2 rockPos = vPosition.xy;
        float colorHeight = height;
        if (height > -10.0) {
          float rockFold = smoothNoise(rockPos * 0.6);                       // Large geological folding
          float rockLayer = smoothNoise(rockPos * 2.3 + vec2(50.0, 30.0));   // Medium rock layering
          float fineStriations = smoothNoise(vec2(                           // Fine striations
            height * 5.0 + rockFold * 3.0,
            dot(rockPos, vec2(0.7, 0.3)) * 0.8
          ));
          colorHeight += rockFold * 0.55 + rockLayer * 0.22 + fineStriations * 0.15;
        }

        vec3 color;
        float alpha = 1.0;

        if (colorHeight < -16.0) {
            color = oceanDeepColor; alpha = smoothstep(-30.0, -19.0, height);
        }
        else if (colorHeight < -10.0) {
            color = mix(oceanDeepColor, oceanMidColor, smoothstep(-12.0, -10.0, colorHeight));
        }
        else if (colorHeight < -4.0) {
            color = mix(oceanMidColor, deepColor, (colorHeight + 10.0) / 6.0);
        }
        else if (colorHeight < -3.0) {
            color = mix(deepColor, shallowColor, (colorHeight + 4.0) / 1.0);
        }
        else if (colorHeight < -1.0) {
            color = mix(shallowColor, lowColor, (colorHeight + 3.0) / 2.0);
        }
        else if (colorHeight < 0.5) {
            color = mix(lowColor, midLowColor, (colorHeight + 1.0) / 1.5);
        }
        else if (colorHeight < 1.5) {
            color = mix(midLowColor, midColor, (colorHeight - 0.5) / 1.0);
        }
        else if (colorHeight < 2.5) {
            color = mix(midColor, midHighColor, (colorHeight - 1.5) / 1.0);
        }
        else if (colorHeight < 3.5) {
            color = mix(midHighColor, highColor, (colorHeight - 2.5) / 1.0);
        }
        else {
            color = mix(highColor, peakColor, min((colorHeight - 3.5) / 2.0, 1.0));
        }

        // Rock grain texture - applied across full terrain depth
        vec2 grainUV = rockPos * rockGrainRepeat / ${l.toFixed(1)};
        vec3 grainSample = texture2D(rockGrainMap, grainUV).rgb;
        float fineGrain = grainSample.r * 0.08 - 0.03;
        float darkSpots = step(0.90, grainSample.g) * 0.10;
        float lightSpots = step(0.90, grainSample.b) * 0.08;
        vec3 colorShift = (grainSample - 0.5) * 0.04;
        color = color * (1.14 + fineGrain - darkSpots + lightSpots) + colorShift;

        // Simple lighting with normal map applied
        vec3 lightDir = normalize(vec3(1.0, 2.8, 1.0));
        float diff = max(dot(perturbedNormal, lightDir), 0.65);
        color *= diff;

        // Apply shadows
        #if ( 1 > 0 )
          float shadow = 1.0;
          #ifdef USE_SHADOWMAP
            DirectionalLightShadow directionalLight;
            directionalLight = directionalLightShadows[0];
            shadow = getShadow( directionalShadowMap[0], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[0] );
          #endif
          // Soften shadow - lighter shadows for a sunny beach atmosphere
          color *= mix(0.8, 0.9, shadow);
        #endif

        // View-dependent sparkles reflecting the light
        vec3 viewDir = normalize(vViewPosition);

        // Add sparkles at procedural positions
        vec2 sparkleCoord = vWorldPosition.xz * 2.0;
        vec2 sparkleCell = floor(sparkleCoord);
        vec2 sparkleFract = fract(sparkleCoord);

        // Random sparkle positions and orientations
        float sparkleHash = hash(sparkleCell);
        vec2 sparklePos = vec2(hash(sparkleCell + vec2(1.0, 0.0)), hash(sparkleCell + vec2(0.0, 1.0)));

        // Distance to sparkle center
        float distToSparkle = length(sparkleFract - sparklePos);

        // Only create sparkle if hash value is high enough (controls density)
        if (sparkleHash > 0.14) {
          // Create random micro-facet normal for this sparkle, based on perturbed normal
          vec3 sparkleNormal = perturbedNormal;
          // Perturb normal based on hash
          float normalOffset1 = hash(sparkleCell + vec2(1.3, 3.0)) * 2.0 - 1.0;
          float normalOffset2 = hash(sparkleCell + vec2(3.1, 4.2)) * 1.54 - 1.0;
          sparkleNormal.x += normalOffset1 * 0.8;
          sparkleNormal.z += normalOffset2 * 0.8;
          sparkleNormal = normalize(sparkleNormal);

          // Calculate reflection of light off this micro-facet
          vec3 halfDir = normalize(lightDir + viewDir);
          float specular = pow(max(dot(sparkleNormal, halfDir), 0.2), 128.0);

          // Sharp, bright sparkle when view angle aligns with reflection
          float sparkle = 1.1 - smoothstep(0.0, 0.08, distToSparkle);
          sparkle = pow(sparkle, 3.2) * specular;

          // Add bright white/yellow sparkle
          vec3 sparkleColor = vec3(1.0, 0.95, 0.8) * 2.0;
          color += sparkleColor * sparkle;
        }

        // Apply depth-based fog: strongest at bottom, fades upward
        // Fog is at 1.0 at uFogStart (deep) and 0.0 at uFogEnd (water surface)
        float depthFogFactor = 1.0 - smoothstep(uFogStart, uFogEnd, vWorldPosition.y);
        color = mix(color, uFogColor, depthFogFactor * 0.85); // 0.85 controls fog intensity

        // Wetness Effect - dynamic wetness from water contact (only above water)
        if(uUseWetnessMap) {
          // Soft transition: fade wetness below water line
          // Start fading at 0.3 units below water, fully gone at 0.8 units below
          float wetnessFade = smoothstep(uWaterLevel - 2.8, uWaterLevel - 0.63, vWorldPosition.y);

          if(wetnessFade > 0.01) {
            // Calculate UV coordinates for wetness map sampling
            // vPosition is terrain-local coordinates (before rotation)
            // Convert to UV space (0-1 range)
            vec2 wetnessUV = (vPosition.xy / uTerrainMeshSize) + 0.5;

            // Sample wetness map
            float wetness = texture2D(uWetnessMap, wetnessUV).r * wetnessFade;

            if(wetness > 0.01) {
              // Darken wet areas (wet sand is darker)
              float darkening = 1.0 - (wetness * 0.4); // 40% darker when fully wet
              color *= darkening;

              // Increase saturation slightly for wet areas (wet sand is more vibrant)
              float luminance = dot(color, vec3(0.299, 0.587, 0.114));
              vec3 saturatedColor = mix(vec3(luminance), color, 1.0 + wetness * 0.3);
              color = saturatedColor;

              // Add specular highlights to wet areas (wet surfaces are shinier)
              vec3 halfDir = normalize(lightDir + viewDir);
              float wetSpecular = pow(max(dot(perturbedNormal, halfDir), 0.0), 64.0) * wetness;
              vec3 wetSpecularColor = vec3(1.0, 1.0, 0.95) * 0.4;
              color += wetSpecularColor * wetSpecular;
            }
          }
        }

        // Caustics Effect - simulated light refraction from water surface
        if(uCausticsEnabled) {
          // Calculate water surface height
          vec2 waveCoords = vWorldPosition.xz - uWaterMeshOffset;
          float elevation = getWaveHeight(waveCoords);

          // Curvature effect
          vec2 meshRelativePos = vWorldPosition.xz - uWaterMeshPosition;
          float distFromWaterCenter = length(meshRelativePos);
          float curveBend = distFromWaterCenter * distFromWaterCenter * uWaterCurvature;

          float currentWaterHeight = uWaterLevel + (elevation * uWaveHeightMultiplier) - curveBend;

          // Calculate depth below water surface
          float depthBelowWater = currentWaterHeight - vWorldPosition.y - 0.1;

          // Ensure we're actually underwater (below base water level, not just wave peaks)
          if(depthBelowWater > uCausticsFadeStart) {
            // Depth factor: fades with depth (bottom fadeout)
            float depthFadeFactor = smoothstep(uCausticsDepth, uCausticsFadeStart, depthBelowWater);

            // Surface fade: smooth fadeout near water surface (top fadeout)
            float surfaceFadeFactor = smoothstep(uCausticsFadeStart, uCausticsFadeStart + 0.8, depthBelowWater);

            // Mean-depth fade: suppress caustics on terrain only covered by a wave crest.
            // Blended in only as amplitude exceeds the calm baseline (0.26), so calm water
            // is completely unaffected. At storm amplitude the fade zone widens, requiring
            // terrain to be genuinely deep before caustics appear.
            float depthBelowMean = uWaterLevel - vWorldPosition.y - curveBend;
            float excessAmplitude = max(0.0, uWaveAmplitude - 0.26);
            float waveZone = max(0.001, excessAmplitude * uWaveHeightMultiplier);
            float rawMeanFade = smoothstep(0.0, waveZone, depthBelowMean);
            float stormBlend = smoothstep(0.0, 0.3, excessAmplitude);
            float meanDepthFade = mix(1.0, rawMeanFade, stormBlend);

            // Combine all fade factors
            float combinedFade = depthFadeFactor * surfaceFadeFactor * meanDepthFade;

            // Generate caustic pattern
            float caustics = generateCaustics(waveCoords, combinedFade);

            // Caustics color - cool blue-tinted light, subtle
            vec3 causticsColor = vec3(0.85, 0.95, 1.0) * uCausticsIntensity;

            // Apply caustics additively (brightens terrain) - multiplied by pattern for transparency
            color += causticsColor * caustics;
          }
        }

        // Win Effect - Mottled Green Overlay
        if(uWinGreenIntensity > 0.01) {
          // Apply green to playable terrain heights - extends below green zone
          float greenMask = smoothstep(-1.8, 0.0, height) * (1.0 - smoothstep(2.0, 3.5, height));

          if(greenMask > 0.01) {
            // Multi-scale noise for organic, mottled appearance
            vec2 noiseCoord = vWorldPosition.xz;

            // Large patches (main variation) - bigger, more distinct patches
            float noise1 = smoothNoise(noiseCoord * 0.64) * 0.6;
            // Medium patches (secondary variation) - fill in some gaps
            float noise2 = smoothNoise(noiseCoord * 1.82 + vec2(10.0, 5.0)) * 0.3;
            // Fine detail (texture) - add edge variation
            float noise3 = smoothNoise(noiseCoord * 4.5 + vec2(20.0, 15.0)) * 0.1;

            // Combine noise layers for natural variation
            float mottledPattern = noise1 + noise2 + noise3;

            // Increase contrast to create distinct patches vs clear areas
            mottledPattern = mottledPattern * mottledPattern * 1.5;

            // Add threshold - below 0.3, no green at all (creates gaps)
            mottledPattern = smoothstep(0.23, 0.76, mottledPattern);

            // Choose appropriate green color based on time of day
            vec3 baseGreenColor = uIsNightTime ? uWinGreenColorNight : uWinGreenColor;

            // Vary green color intensity based on pattern
            vec3 greenOverlay = baseGreenColor * (0.7 + mottledPattern * 0.3);

            // Apply green overlay with mottled intensity (no base value, fully transparent in gaps)
            float overlayStrength = uWinGreenIntensity * greenMask * mottledPattern;
            color = mix(color, greenOverlay, overlayStrength);
          }
        }

        // Win Effect - Detailed Dark Green Layer (finer, denser vegetation look)
        if(uWinGreenDetailIntensity > 0.01) {
          float detailGreenMask = smoothstep(-1.5, 0.1, height) * (1.0 - smoothstep(1.8, 3.2, height));

          if(detailGreenMask > 0.01) {
            vec2 detailCoord = vWorldPosition.xz;

            // Multi-scale noise — lower large-patch frequency than mottled layer for distinct spread
            float detail1 = smoothNoise(detailCoord * 0.42 + vec2(47.0, 23.0)) * 0.6;
            float detail2 = smoothNoise(detailCoord * 2.1 + vec2(83.0, 61.0)) * 0.3;
            float detail3 = smoothNoise(detailCoord * 5.0 + vec2(127.0, 97.0)) * 0.1;

            float detailPattern = detail1 + detail2 + detail3;

            // Same contrast curve as light green layer
            detailPattern = detailPattern * detailPattern * 1.5;
            detailPattern = smoothstep(0.23, 0.76, detailPattern);

            // Slope-based bias: more detail green in flatter areas (where moss/grass would grow)
            float slopeDetail = 1.0 - smoothstep(0.6, 0.95, 1.0 - dot(normalize(vWorldNormal), vec3(0.0, 1.0, 0.0)));
            detailPattern *= slopeDetail;

            vec3 detailGreenColor = uIsNightTime ? uWinGreenDetailColorNight : uWinGreenDetailColor;

            // Slight color variation within the detail layer
            detailGreenColor *= (0.8 + detailPattern * 0.2);

            float detailStrength = uWinGreenDetailIntensity * detailGreenMask * detailPattern;
            color = mix(color, detailGreenColor, detailStrength);
          }
        }

        // Cool lava spots — blend hardened lava texture at each spot using world-space UVs
        if (uCoolLavaSpotCount > 0) {
          vec2 texCoord = vWorldPosition.xz * 0.55; // world-space tiling, shared across all spots
          vec3 nSample = texture2D(uCoolLavaNorm, texCoord).rgb * 2.0 - 1.0;
          // Tangent-space normal → world-space (terrain is flat/upward: T=X, B=Z, N=Y)
          vec3 pertNormal = normalize(vec3(nSample.r * 0.9, nSample.b, nSample.g * 0.9));
          vec3 viewDir   = normalize(cameraPosition - vWorldPosition);
          vec3 lightDir  = normalize(vec3(0.4, 1.0, 0.3));
          float spec     = pow(max(dot(pertNormal, normalize(viewDir + lightDir)), 0.0), 56.0) * 0.45;

          for (int i = 0; i < 40; i++) {
            if (i >= uCoolLavaSpotCount) break;
            vec4 spot = uCoolLavaSpots[i];
            // spot.xy = worldXZ centre, spot.z = radius
            float dist = length(vWorldPosition.xz - spot.xy);
            // Full opacity to ~60% radius, then fades out to edge
            float fade = 1.0 - smoothstep(spot.z * 0.30, spot.z, dist);
            if (fade > 0.001) {
              vec3 coolColor = texture2D(uCoolLavaTex, texCoord).rgb;
              // Add specular highlight from normal map
              coolColor = min(coolColor + vec3(spec * 0.5), 1.0);
              color = mix(color, coolColor, fade * 0.92);
            }
          }
        }

        gl_FragColor = vec4(color, alpha);
      }
    `,transparent:!0,depthWrite:!0}),nt.uniforms.uCoolLavaSpots={value:new Float32Array(Oo*4)},nt.isPersistent=!0,Ki=nt;const on=new we(Y,nt);on.rotation.x=-Math.PI/2,on.castShadow=!0,on.receiveShadow=!0,on.renderOrder=.5,on.customDepthMaterial=new lu({depthPacking:cu});const Gi=512,No=Vd(),Qn=No.heightmap,de=new va(-l/2,l/2,l/2,-l/2,.1,100);de.position.set(0,50,0),de.lookAt(0,0,0),de.updateProjectionMatrix(),Xi||(Xi=new et({vertexShader:`
      varying float vHeight;

      void main() {
        vHeight = position.z; // Z is height in terrain-local space
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying float vHeight;
      uniform float uMinHeight;
      uniform float uMaxHeight;

      void main() {
        // Normalize height to 0-1 range
        float normalizedHeight = (vHeight - uMinHeight) / (uMaxHeight - uMinHeight);

        // Encode as grayscale (R=G=B=height)
        gl_FragColor = vec4(vec3(normalizedHeight), 1.0);
      }
    `,uniforms:{uMinHeight:{value:m},uMaxHeight:{value:h}},side:Ne}));const zc=Xi,zo=new we(Y,zc);zo.rotation.x=-Math.PI/2;function Ts(_){if(!_){console.warn("updateHeightmapTexture: renderer not provided");return}const I=_.getRenderTarget();_.setRenderTarget(Qn),_.render(zo,de),_.setRenderTarget(I)}const Rr=No.wetness1,Ar=No.wetness2;let ki=Rr,Ss=Ar;Zi||(Zi=new $o(2,2));const Dr=Zi,Hc=new va(-1,1,1,-1,0,1),Cs=Array.from({length:32},()=>new uu),bs=Array.from({length:32},()=>new P),Me=new et({uniforms:{uHeightmap:{value:Qn.texture},uPreviousWetness:{value:null},uWaterLevel:{value:r},uWaveAmplitude:{value:.26},uWaveFrequency:{value:4.2},uWaveHeightMultiplier:{value:4.13},uWaveTime:{value:0},uWaveAngleCos:{value:1},uWaveAngleSin:{value:0},uTime:{value:0},uDecayRate:{value:.98},uMinHeight:{value:m},uMaxHeight:{value:h},uTerrainSize:{value:l},uMeshOffset:{value:new pe(0,0)},uCurvature:{value:2e-5},uWaterfallPositions:{value:bs},uWaterfallCount:{value:0},uSplatPositions:{value:Cs},uSplatCount:{value:0},uGreenZoneWetnessIntensity:{value:0},uGreenZoneMin:{value:.13},uGreenZoneMax:{value:3.2}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D uHeightmap;
      uniform sampler2D uPreviousWetness;
      uniform float uWaterLevel;
      uniform float uWaveAmplitude;
      uniform float uWaveFrequency;
      uniform float uWaveHeightMultiplier;
      uniform float uWaveTime;
      uniform float uWaveAngleCos;
      uniform float uWaveAngleSin;
      uniform float uTime;
      uniform float uDecayRate;
      uniform float uMinHeight;
      uniform float uMaxHeight;
      uniform float uTerrainSize;
      uniform vec2 uMeshOffset;
      uniform float uCurvature;
      uniform vec3 uWaterfallPositions[32]; // Max 32 waterfalls
      uniform int uWaterfallCount;
      uniform vec4 uSplatPositions[32]; // Impact splats + trail marks: xy = position, w = radius
      uniform int uSplatCount;
      uniform float uGreenZoneWetnessIntensity;
      uniform float uGreenZoneMin;
      uniform float uGreenZoneMax;
      varying vec2 vUv;

      // Hash function for noise
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(3127.1, 31.7))) * 43758.5453);
      }

      // Smooth noise
      float smoothNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }


      // Exact 5-train sine wave formula — matches the water surface shader.
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

      void main() {
        // Convert UV to world coordinates (terrain-local)
        vec2 worldXZ = (vUv - 0.5) * uTerrainSize;

        // Sample terrain height from heightmap
        float normalizedHeight = texture2D(uHeightmap, vUv).r;
        float terrainHeight = mix(uMinHeight, uMaxHeight, normalizedHeight);

        // Wave height at this terrain position. worldXZ.y = -worldZ due to the terrain
        // plane's -π/2 X rotation, so negate Y to match the water shader's convention.
        vec2 waveCoords = vec2(worldXZ.x, -worldXZ.y) - uMeshOffset;
        float waveElevation = getWaveHeight(waveCoords);

        // Curvature effect (water bends down from center)
        float distFromCenter = length(worldXZ);
        float curveBend = distFromCenter * distFromCenter * uCurvature;

        float waterSurfaceHeight = uWaterLevel + (waveElevation * uWaveHeightMultiplier) - curveBend;

        // Calculate how much water is above terrain
        float waterDepth = waterSurfaceHeight - terrainHeight;

        // Wetness strength based on water contact
        // Positive waterDepth = water above terrain = wet
        // Add slight tolerance so areas just above water get wet too (splashing effect)
        float newWetness = smoothstep(-0.2, 0.5, waterDepth);

        // Add wetness from waterfalls
        for (int i = 0; i < 32; i++) {
          if (i >= uWaterfallCount) break;

          vec3 waterfallPos = uWaterfallPositions[i];
          // waterfallPos.x and waterfallPos.z are world XZ
          // waterfallPos.y is the base height of the waterfall in world Y

          float dist = distance(worldXZ, waterfallPos.xz);
          float waterfallBaseHeight = waterfallPos.y;

          // Wetness radius - fixed size for all waterfalls
          float wetnessRadius = 2.5;

          // Add wetness with smooth falloff based on distance
          float waterfallWetness = smoothstep(wetnessRadius, 0.3, dist);

          // Only add wetness if terrain is at or below waterfall base height
          // This prevents wetness from appearing on terrain above the waterfall
          // Allow wetness up to 1.5 units above base for splash effect
          float heightFactor = smoothstep(waterfallBaseHeight + 2.0, waterfallBaseHeight - 1.0, terrainHeight);

          newWetness = max(newWetness, waterfallWetness * heightFactor * 0.8);
        }

        // Add wetness from impact splats and ball trails
        for (int i = 0; i < 32; i++) {
          if (i >= uSplatCount) break;
          vec4 splat = uSplatPositions[i];
          float dist = distance(worldXZ, splat.xz);
          float splatWetness = smoothstep(splat.w, 0.0, dist);
          newWetness = max(newWetness, splatWetness * 0.85);
        }

        // Add wetness to green zone when win state is active (island rehydration effect)
        // Water seeps from the ground in green zone and flows downhill to lower areas
        if (uGreenZoneWetnessIntensity > 0.01) {
          // Multi-scale noise for organic, mottled wetness pattern (like green overlay)
          vec2 noiseCoord = worldXZ;

          // Large wet patches (main seepage areas) — offset into a different noise region than win green
          float noise1 = smoothNoise(noiseCoord * 0.64 + vec2(37.0, 53.0)) * 0.6;
          // Medium patches (secondary seepage)
          float noise2 = smoothNoise(noiseCoord * 1.82 + vec2(71.0, 29.0)) * 0.3;
          // Fine detail (edge variation)
          float noise3 = smoothNoise(noiseCoord * 4.5 + vec2(91.0, 67.0)) * 0.1;

          // Combine noise layers
          float mottledPattern = noise1 + noise2 + noise3;

          // Increase contrast to create distinct wet vs dry patches
          mottledPattern = mottledPattern * mottledPattern * 1.44;

          // Add threshold - creates gaps where ground is dry
          mottledPattern = smoothstep(0.25, 0.72, mottledPattern);

          // Height-based wetness strength - water flows from green zone downward
          // Use gradual fading to avoid any hard bands
          float wetnessStrength = 0.0;

          if (terrainHeight >= uGreenZoneMin && terrainHeight <= uGreenZoneMax) {
            // In green zone - wetness fades from bottom to top
            // Normalize position within green zone (0 = bottom, 1 = top)
            float posInZone = (terrainHeight - uGreenZoneMin) / (uGreenZoneMax - uGreenZoneMin);

            // Fade from strong at bottom to weak at top (inverted)
            // Start fading at 40% up the zone, fully faded by 90%
            float heightFade = smoothstep(0.9, 0.4, posInZone);

            wetnessStrength = mottledPattern * heightFade * 0.85;
          } else if (terrainHeight < uGreenZoneMin) {
            // Below green zone - water has flowed down here
            // Fade wetness based on distance below green zone
            float distanceBelow = uGreenZoneMin - terrainHeight;
            // Strong wetness just below green zone, fading out by 1.5 units below
            float heightFade = smoothstep(1.5, 0.0, distanceBelow);
            wetnessStrength = mottledPattern * heightFade * 0.9; // Slightly stronger than green zone
          } else {
            // Above green zone - no wetness (water doesn't flow uphill)
            wetnessStrength = 0.0;
          }

          // Apply wetness with intensity
          newWetness = max(newWetness, wetnessStrength * uGreenZoneWetnessIntensity);
        }

        // Sample previous wetness for temporal persistence
        float previousWetness = texture2D(uPreviousWetness, vUv).r;

        // Decay previous wetness over time
        float decayedWetness = previousWetness * uDecayRate;

        // Take maximum of new wetness and decayed previous wetness
        // This means: if water touches, immediately wet; if not, gradually dry
        float finalWetness = max(newWetness, decayedWetness);

        gl_FragColor = vec4(finalWetness, finalWetness, finalWetness, 1.0);
      }
    `}),Gc=new we(Dr,Me);function kc(_,I,L){if(!_||!I)return;Me.uniforms.uWaterLevel.value=I.uniforms.uWaterLevel?.value??r,Me.uniforms.uWaveAmplitude.value=I.uniforms.uWaveAmplitude?.value??.26,Me.uniforms.uWaveFrequency.value=I.uniforms.uWaveFrequency?.value??4.2,Me.uniforms.uWaveHeightMultiplier.value=I.uniforms.uWaveHeightMultiplier?.value??4.13,Me.uniforms.uWaveTime.value=I.uniforms.uWaveTime?.value??0,Me.uniforms.uWaveAngleCos.value=I.uniforms.uWaveAngleCos?.value??1,Me.uniforms.uWaveAngleSin.value=I.uniforms.uWaveAngleSin?.value??0,Me.uniforms.uMeshOffset.value.copy(I.uniforms.uMeshOffset?.value??new pe(0,0)),Me.uniforms.uCurvature.value=I.uniforms.uCurvature?.value??2e-5,Me.uniforms.uTime.value=L,Me.uniforms.uPreviousWetness.value=Ss.texture;const F=_.getRenderTarget();_.setRenderTarget(ki),_.render(Gc,Hc),_.setRenderTarget(F);const G=ki;ki=Ss,Ss=G}return{mesh:on,geometry:Y,material:nt,body:ft,collider:Rt,size:l,getHeightAt:De,sampleHeightAt:Ge,randomPosition:_e,sculpt:Lo,applyPatch:Oi,stamp:Fi,updatePhysics:Ei,simpleNoise:x,config:{size:l,segments:e,islandRadius:d,falloffStart:f,falloffEnd:u,fanOutEnd:p,maxHeight:h,minDepth:m},coolLavaSpots:{add(_,I,L){const F=nt.uniforms,G=F.uCoolLavaSpots.value;let K=F.uCoolLavaSpotCount.value;if(K>=Oo){G.copyWithin(0,4);const N=(Oo-1)*4;G[N]=_,G[N+1]=I,G[N+2]=L}else{const N=K*4;G[N]=_,G[N+1]=I,G[N+2]=L,F.uCoolLavaSpotCount.value=K+1}},clear(){nt.uniforms.uCoolLavaSpotCount.value=0}},heightmap:{renderTarget:Qn,texture:Qn.texture,camera:de,mesh:zo,update:Ts,size:Gi,worldSize:l,minHeight:m,maxHeight:h},setRenderer(_){if(Tn=_,_){const I=_.getRenderTarget(),L=_.getClearColor(new Z),F=_.getClearAlpha();_.setClearColor(0,0),_.setRenderTarget(Rr),_.clear(!0,!0,!0),_.setRenderTarget(Ar),_.clear(!0,!0,!0),_.setClearColor(L,F),_.setRenderTarget(I),Ts(_)}},wetnessMap:{texture:()=>Ss.texture,update:kc,size:v,worldSize:l,setDecayRate(_){Me.uniforms.uDecayRate.value=_},setGreenZoneWetnessIntensity(_){Me.uniforms.uGreenZoneWetnessIntensity.value=Math.max(0,Math.min(1,_))},setGreenZoneBounds(_,I){Me.uniforms.uGreenZoneMin.value=_,Me.uniforms.uGreenZoneMax.value=I},setSplats(_){const I=_&&_.length>0?Math.min(_.length,32):0;for(let L=0;L<32;L++)if(L<I){const F=_[L];Cs[L].set(F.x,0,F.z,F.radius)}else Cs[L].set(0,0,0,0);Me.uniforms.uSplatPositions.value=Cs,Me.uniforms.uSplatCount.value=I},setWaterfalls(_){const I=_&&_.length>0?Math.min(_.length,32):0;for(let L=0;L<32;L++)if(L<I){const F=_[L];bs[L].set(F.x,F.y,F.z)}else bs[L].set(0,0,0);Me.uniforms.uWaterfallPositions.value=bs,Me.uniforms.uWaterfallCount.value=I},dispose(){Me.dispose(),Dr.dispose()}},dispose(){zo&&zo.geometry.dispose()},cleanupPhysics(_){Rt&&_&&(_.removeCollider(Rt,!0),Rt=null),ft&&_&&(_.removeRigidBody(ft),ft=null)}}}const{lerp:Sn}=Vt,Fe=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let o=0;o<256;o++)Fe[256+o]=Fe[o];function qi(o){return o*o*o*(o*(o*6-15)+10)}function an(o,e,t,s){const n=o&15,i=n<8?e:t,a=n<4?t:n==12||n==14?e:s;return((n&1)==0?i:-i)+((n&2)==0?a:-a)}class jd{noise(e,t,s){const n=Math.floor(e),i=Math.floor(t),a=Math.floor(s),r=n&255,l=i&255,c=a&255;e-=n,t-=i,s-=a;const d=e-1,f=t-1,u=s-1,p=qi(e),h=qi(t),m=qi(s),v=Fe[r]+l,y=Fe[v]+c,w=Fe[v+1]+c,x=Fe[r+1]+l,g=Fe[x]+c,T=Fe[x+1]+c;return Sn(Sn(Sn(an(Fe[y],e,t,s),an(Fe[g],d,t,s),p),Sn(an(Fe[w],e,f,s),an(Fe[T],d,f,s),p),h),Sn(Sn(an(Fe[y+1],e,t,u),an(Fe[g+1],d,t,u),p),Sn(an(Fe[w+1],e,f,u),an(Fe[T+1],d,f,u),p),h),m)}}function Kd(){const o=document.createElement("canvas");o.width=64,o.height=64;const e=o.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.9,"rgba(255, 255, 255, 0.95)"),t.addColorStop(1,"rgba(255, 255, 255, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const s=new Ao(o);return s.needsUpdate=!0,s}const Xd=Kd(),Hr=new Tt;function J0(){const e=new Uint8Array(2097152);let t=0;const s=.05,n=new jd,i=new P;for(let r=0;r<128;r++)for(let l=0;l<128;l++)for(let c=0;c<128;c++){const d=1-i.set(c,l,r).subScalar(64).divideScalar(128).length();e[t]=(168+127.6*n.noise(c*s/1.53,l*s,r*s/1.51))*d*d,t++}const a=new hu(e,128,128,128);return a.format=pu,a.minFilter=wn,a.magFilter=wn,a.unpackAlignment=1,a.needsUpdate=!0,a}function Zd(o={}){const{startX:e,startZ:t,endX:s,endZ:n,cloudHeight:i=13.2,cloudTexture:a,baseOpacity:r=.23,rainCount:l=100,timeOfDay:c="day"}=o,d=new Zt,f=`
    in vec3 position;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat4 inverseModelMatrix;
    uniform vec3 cameraPos;

    out vec3 vOrigin;
    out vec3 vDirection;

    void main() {
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

      vOrigin = vec3(inverseModelMatrix * vec4(cameraPos, 1.0)).xyz;
      vDirection = position - vOrigin;

      gl_Position = projectionMatrix * mvPosition;
    }
  `,u=`
    precision highp float;
    precision highp sampler3D;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    in vec3 vOrigin;
    in vec3 vDirection;

    out vec4 color;

    uniform vec3 base;
    uniform sampler3D map;

    uniform float threshold;
    uniform float range;
    uniform float opacity;
    uniform float steps;
    uniform float frame;
    uniform float textureRotation;
    uniform float brightnessFactor;

    uint wang_hash(uint seed) {
      seed = (seed ^ 61u) ^ (seed >> 16u);
      seed *= 9u;
      seed = seed ^ (seed >> 4u);
      seed *= 0x27d4eb2du;
      seed = seed ^ (seed >> 15u);
      return seed;
    }

    float randomFloat(inout uint seed) {
      return float(wang_hash(seed)) / 4294967296.;
    }

    vec2 hitBox(vec3 orig, vec3 dir) {
      const vec3 box_min = vec3(-0.5);
      const vec3 box_max = vec3(0.5);
      vec3 inv_dir = 1.0 / dir;
      vec3 tmin_tmp = (box_min - orig) * inv_dir;
      vec3 tmax_tmp = (box_max - orig) * inv_dir;
      vec3 tmin = min(tmin_tmp, tmax_tmp);
      vec3 tmax = max(tmin_tmp, tmax_tmp);
      float t0 = max(tmin.x, max(tmin.y, tmin.z));
      float t1 = min(tmax.x, min(tmax.y, tmax.z));
      return vec2(t0, t1);
    }

    // Rotate a point around the X axis
    vec3 rotateX(vec3 p, float angle) {
      float s = sin(angle);
      float c = cos(angle);
      return vec3(p.x, c * p.y - s * p.z, s * p.y + c * p.z);
    }

    float sample1(vec3 p) {
      // Apply rotation to texture coordinates before sampling
      vec3 rotatedP = rotateX(p - 0.5, textureRotation) + 0.5;
      return texture(map, rotatedP).r;
    }

    vec4 linearToSRGB(in vec4 value) {
      return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.a);
    }

    void main() {
      vec3 rayDir = normalize(vDirection);
      vec2 bounds = hitBox(vOrigin, rayDir);

      if (bounds.x > bounds.y) discard;

      bounds.x = max(bounds.x, 0.0);

      vec3 p = vOrigin + bounds.x * rayDir;
      vec3 inc = 1.0 / abs(rayDir);
      float delta = min(inc.x, min(inc.y, inc.z));
      delta /= steps;

      // Jitter
      uint seed = uint(gl_FragCoord.x) * uint(1973) + uint(gl_FragCoord.y) * uint(9277) + uint(frame) * uint(26699);
      vec3 size = vec3(textureSize(map, 0));
      float randNum = randomFloat(seed) * 2.0 - 1.0;
      p += rayDir * randNum * (1.0 / size);

      vec4 ac = vec4(base, 0.0);

      for (float t = bounds.x; t < bounds.y; t += delta) {
        float d = sample1(p + 0.5);

        d = smoothstep(threshold - range, threshold + range, d) * opacity;

        // Positional gradient shading — avoids 2 extra texture samples per step vs shading()
        float col = ((p.x + p.y) * 0.25) + 0.45;
        col *= brightnessFactor; // Scale brightness for night/day

        ac.rgb += (1.0 - ac.a) * d * col;
        ac.a += (1.0 - ac.a) * d;

        if (ac.a >= 0.95) break;

        p += rayDir * delta;
      }

      color = linearToSRGB(ac);

      if (color.a == 0.0) discard;
    }
  `,p=new Nl(15,8,15),h=new Z(6978965);let m=1;c==="night"&&(h.set(1715530),m=.028);const v=new mu({glslVersion:gu,uniforms:{base:{value:h},map:{value:a},cameraPos:{value:new P},inverseModelMatrix:{value:new Tt},threshold:{value:.25},opacity:{value:0},range:{value:.08},steps:{value:5},frame:{value:0},textureRotation:{value:0},brightnessFactor:{value:m}},vertexShader:f,fragmentShader:u,side:Ne,transparent:!0,depthWrite:!1,depthTest:!1}),y=new we(p,v);y.position.y=i,y.scale.set(11.11,6.12,8.3),y.visible=!1,y.renderOrder=6,y.geometry.boundingSphere=new Xa(new P(0,0,0),1.5),d.add(y);const w=new _n,x=new Float32Array(l*3),g=[],T=.8,C=.3;for(let S=0;S<l;S++){const A=Math.random()*Math.PI*2,E=Math.random()*3.2;x[S*3]=Math.cos(A)*E,x[S*3+1]=i-Math.random()*4,x[S*3+2]=Math.sin(A)*E,g.push({initialY:x[S*3+1],initialX:x[S*3],initialZ:x[S*3+2],speed:2+Math.random()*3})}w.setAttribute("position",new ze(x,3));const b=new Za({color:7258367,size:.16,transparent:!0,opacity:0,blending:zl,depthWrite:!1,depthTest:!0,map:Xd}),R=new Mi(w,b);return R.renderOrder=5,d.add(R),d.position.set(e,0,t),d.userData={cloud:y,cloudMaterial:v,rainParticles:R,rainVelocities:g,windDriftX:T,windDriftZ:C,creationTime:Date.now(),startPos:{x:e,z:t},endPos:{x:s,z:n},baseOpacity:r,drizzleSound:null,rainSkipFrame:!1},d}function qd(o,e,t=0){const{cloud:s,cloudMaterial:n}=o.userData;if(!s.visible)return;n.uniforms.cameraPos.value.copy(e.position),s.updateWorldMatrix(!0,!1),Hr.copy(s.matrixWorld).invert(),n.uniforms.inverseModelMatrix.value.copy(Hr),n.uniforms.frame.value++,n.uniforms.textureRotation.value+=t*.3;const i=n.uniforms.frame.value*.02;n.uniforms.steps.value=12+Math.sin(i)*3}function $d(o,e){const{rainParticles:t,rainVelocities:s,windDriftX:n,windDriftZ:i}=o.userData;if(t.material.opacity<.01||(o.userData.rainSkipFrame=!o.userData.rainSkipFrame,o.userData.rainSkipFrame))return;const a=t.geometry.attributes.position.array,r=e*2;for(let l=0;l<s.length;l++){const c=s[l];a[l*3+1]-=c.speed*r,a[l*3]+=n*r,a[l*3+2]+=i*r,a[l*3+1]<.1&&(a[l*3+1]=c.initialY,a[l*3]=c.initialX,a[l*3+2]=c.initialZ)}t.geometry.attributes.position.needsUpdate=!0}function Jd(o,e){const{rainParticles:t}=o.userData;t.material.opacity=Math.max(0,Math.min(1,e))}const yt=200,Ma=new et({uniforms:{uTime:{value:0},uJiggleFrequency:{value:8}},transparent:!0,side:Ne,depthWrite:!1,vertexShader:`
    uniform float uTime;
    uniform float uJiggleFrequency;

    // Packed per-instance attributes (keeps total ≤ 16 vertex attribute locations)
    // aPackA: (radius, visualScale, spawnScale, jiggleAmplitude)
    // aPackB: (jiggleTime, attractionStrength, groundFlatten, flattenDrop)
    attribute vec4 aPackA;
    attribute vec4 aPackB;
    attribute vec3 aVelocity;
    attribute vec3 aAttractionDir;
    attribute float aHeatTint;

    varying vec3 vPos;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec3 vWorldPos;
    varying float vHeatTint;

    void main() {
      // Unpack attributes
      float aRadius = aPackA.x;
      float aVisualScale = aPackA.y;
      float aSpawnScale = aPackA.z;
      float aJiggleAmplitude = aPackA.w;
      float aJiggleTime = aPackB.x;
      float aAttractionStrength = aPackB.y;
      float aGroundFlatten = aPackB.z;
      float aFlattenDrop = aPackB.w;

      // Scale unit sphere to actual radius, apply spawn animation
      vec3 pos = position * aRadius * aSpawnScale;
      vec3 norm = normal;

      // 2. CONTINUOUS SUBTLE WOBBLE - organic movement
      float wobbleAmount = 0.008;
      float wobble = sin(uTime * 2.0 + pos.x * 10.0) * cos(uTime * 1.7 + pos.y * 10.0) * wobbleAmount;
      pos += norm * wobble;

      // 3. JIGGLE ON MERGE - oscillating deformation
      if (aJiggleAmplitude > 0.001) {
        float jiggle = sin(aJiggleTime * uJiggleFrequency + pos.y * 3.0) * aJiggleAmplitude;
        jiggle *= cos(aJiggleTime * uJiggleFrequency * 0.7 + pos.x * 2.0);
        pos += norm * jiggle;
      }

      // 4. VELOCITY-BASED STRETCHING - raindrop shape (rounded front, pinched tail)
      float verticalSpeed = abs(aVelocity.y);
      float horizontalSpeed = length(aVelocity.xz);
      float speed = verticalSpeed * 1.5 + horizontalSpeed * 0.13;

      if (speed > 1.0) {
        vec3 motionDir = normalize(aVelocity);
        float alignment = dot(norm, motionDir);
        float stretchAmount = min(speed * 0.03, 0.15);

        if (alignment < 0.0) {
          float tailStretch = pow(-alignment, 0.7) * stretchAmount * 1.8;
          pos -= motionDir * tailStretch;
        } else {
          float frontCompress = alignment * stretchAmount * 0.2;
          pos += motionDir * frontCompress;
        }
      }

      // 5. ATTRACTION STRETCHING - true metaball effect
      if (aAttractionStrength > 0.001) {
        vec3 attractDir = normalize(aAttractionDir);
        float alignment = dot(norm, attractDir);
        float stretchAmount = aAttractionStrength * 0.15;
        if (alignment > 0.0) {
          pos += attractDir * alignment * stretchAmount;
        }
      }

      // 6. GROUND FLATTEN - squash bottom hemisphere to mimic water adhesion
      if (aGroundFlatten > 0.01) {
        if (pos.y < 0.0) {
          float depth = -pos.y;
          pos.y *= 1.0 - aGroundFlatten * 0.75;
          float spread = 1.0 + depth * aGroundFlatten * 0.6;
          pos.x *= spread;
          pos.z *= spread;
        }
        pos.y -= aFlattenDrop;
      }

      // 7. VISUAL SCALE - evaporation/heat shrink (applied last, like mesh.scale)
      pos *= aVisualScale;

      vPos = pos;
      vHeatTint = aHeatTint;
      vNormal = normalize(normalMatrix * normal);
      vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(pos, 1.0);
      vViewPosition = -mvPosition.xyz;
      vWorldPos = (modelMatrix * instanceMatrix * vec4(pos, 1.0)).xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,fragmentShader:`
    uniform float uTime;
    varying vec3 vPos;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec3 vWorldPos;
    varying float vHeatTint;

    void main() {
      vec3 viewDir = normalize(vViewPosition);
      vec3 normal = normalize(vNormal);
      vec3 lightDir = normalize(vec3(5.0, 10.0, 5.0));

      float distFromCenter = length(vPos);

      float viewAngle = abs(dot(viewDir, normal));
      float thickness = (1.0 - viewAngle) * 2.0;

      float fresnel = pow(1.0 - viewAngle, 3.0);

      vec3 deepCore = vec3(0.05, 0.2, 0.8);
      vec3 coreColor = vec3(0.2, 0.5, 1.0);
      vec3 midColor = vec3(0.3, 0.7, 1.0);
      vec3 brightColor = vec3(0.5, 0.85, 1.0);
      vec3 glowColor = vec3(0.7, 0.95, 1.0);

      float depthFactor = smoothstep(0.0, 1.0, distFromCenter);
      vec3 baseColor = mix(deepCore, coreColor, depthFactor);
      baseColor = mix(baseColor, midColor, pow(depthFactor, 0.7));

      vec3 color = mix(baseColor, brightColor, thickness * 0.3);

      float diffuse = max(dot(normal, lightDir), 0.0) * 0.6 + 0.4;
      color *= diffuse;

      float backLight = max(dot(normal, -lightDir), 0.0);
      float subsurface = pow(backLight, 2.0) * thickness;
      vec3 transmittedColor = vec3(0.4, 0.7, 1.0);
      color += transmittedColor * subsurface * 0.8;

      vec3 halfDir = normalize(lightDir + viewDir);
      float spec = pow(max(dot(normal, halfDir), 0.0), 25.0);
      color += glowColor * spec * 0.6;

      color += brightColor * fresnel * 0.5;

      float centerGlow = pow(1.0 - depthFactor, 2.5);
      color += coreColor * centerGlow * 0.4;

      float alpha = 0.2362 + thickness * 0.12 + fresnel * 0.15;

      vec3 heatColor = vec3(1.0, 0.3, 0.1);
      color = mix(color, heatColor, vHeatTint * 0.6);

      gl_FragColor = vec4(color, alpha);
    }
  `});let ve=null,Re=null,Yt=null;const xa=new P(.427,.855,.256),ts=[],yo=new Set,hn=new Tt,Ds=new Tt,Qd=new Jn().setFromEuler(new wi(-Math.PI/2,0,0)),Gr=new P,kr=new P;let $e,jt,Fn,Nn,ei;const ef={aRadius:{pack:"A",comp:0},aVisualScale:{pack:"A",comp:1},aSpawnScale:{pack:"A",comp:2},aJiggleAmplitude:{pack:"A",comp:3},aJiggleTime:{pack:"B",comp:0},aAttractionStrength:{pack:"B",comp:1},aGroundFlatten:{pack:"B",comp:2},aFlattenDrop:{pack:"B",comp:3}};function Q0(o){const e=new Jo(1,24,24);$e=new qe(new Float32Array(yt*4),4),jt=new qe(new Float32Array(yt*4),4),Fn=new qe(new Float32Array(yt*3),3),Nn=new qe(new Float32Array(yt*3),3),ei=new qe(new Float32Array(yt),1),e.setAttribute("aPackA",$e),e.setAttribute("aPackB",jt),e.setAttribute("aVelocity",Fn),e.setAttribute("aAttractionDir",Nn),e.setAttribute("aHeatTint",ei),ve=new jn(e,Ma,yt),ve.count=0,ve.castShadow=!1,ve.receiveShadow=!1,ve.renderOrder=3,ve.frustumCulled=!1,ve.isPersistent=!0,o.add(ve);const t=new $o(1,1);Yt=new qe(new Float32Array(yt),1),t.setAttribute("aOpacity",Yt),Re=new jn(t,nf,yt),Re.count=0,Re.castShadow=!1,Re.receiveShadow=!1,Re.renderOrder=2,Re.frustumCulled=!1,Re.isPersistent=!0,o.add(Re);const s=new Tt().makeTranslation(0,-1e3,0);for(let n=0;n<yt;n++)Re.setMatrixAt(n,s);Re.instanceMatrix.needsUpdate=!0,ts.length=0,yo.clear();for(let n=yt-1;n>=0;n--)ts.push(n),yo.add(n),hn.makeTranslation(0,-1e3,0),ve.setMatrixAt(n,hn),$e.array[n*4+1]=0;ve.instanceMatrix.needsUpdate=!0}function yr(){if(ts.length===0)return console.warn("Metaball instance pool exhausted!"),-1;const o=ts.pop();return yo.delete(o),o>=ve.count&&(ve.count=o+1),o}function Kl(o){if(o<0||o>=yt||yo.has(o))return;const e=o*4;$e.array[e]=0,$e.array[e+1]=0,hn.makeTranslation(0,-1e3,0),ve.setMatrixAt(o,hn),ts.push(o),yo.add(o),Re&&(hn.makeTranslation(0,-1e3,0),Re.setMatrixAt(o,hn),Yt&&(Yt.array[o]=0),Re.instanceMatrix.needsUpdate=!0,Yt&&(Yt.needsUpdate=!0)),o===ve.count-1&&tf()}function tf(){let o=ve.count-1;for(;o>=0&&yo.has(o);)o--;ve.count=o+1}function _i(o,e,t,s){hn.makeTranslation(e,t,s),ve.setMatrixAt(o,hn)}function wt(o,e,t){const s=ef[e];if(s){const n=s.pack==="A"?$e:jt;n.array[o*4+s.comp]=t}else{const n=ve.geometry.getAttribute(e);n&&(n.array[o]=t)}}function _a(o,e,t,s,n){const i=ve.geometry.getAttribute(e);if(i){const a=o*3;i.array[a]=t,i.array[a+1]=s,i.array[a+2]=n}}function Xl(){ve&&(ve.instanceMatrix.needsUpdate=!0,$e.needsUpdate=!0,jt.needsUpdate=!0,Fn.needsUpdate=!0,Nn.needsUpdate=!0,ei.needsUpdate=!0,Re&&(Re.count=ve.count,Re.instanceMatrix.needsUpdate=!0,Yt.needsUpdate=!0))}function ep(){return ve}const nf=new et({transparent:!0,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,side:Ne,vertexShader:`
    attribute float aOpacity;
    varying vec2 vUv;
    varying float vOpacity;
    void main() {
      vUv = uv;
      vOpacity = aOpacity;
      gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    varying vec2 vUv;
    varying float vOpacity;
    void main() {
      vec2 center = vUv - 0.5;
      float dist = length(center) * 2.0; // 0 at center, 1 at edge

      // Discard beyond circle to avoid any square artifacts
      if (dist > 1.0) discard;

      // Soft circular falloff — fades well before edges
      float falloff = 1.0 - smoothstep(0.0, 0.75, dist);
      // Organic wobble to break up the perfect circle
      float angle = atan(center.y, center.x);
      float wobble = 0.04 * sin(angle * 3.0) + 0.03 * sin(angle * 5.0 + 1.0);
      falloff *= 1.0 - smoothstep(0.6, 0.75, dist + wobble);

      // Bright caustic highlight (off-center to simulate light refraction)
      vec2 highlightCenter = center - vec2(0.06, 0.04);
      float highlightDist = length(highlightCenter) * 2.0;
      float highlight = exp(-highlightDist * highlightDist * 10.0) * 0.45;

      // Blue hue tint
      vec3 tint = vec3(0.15, 0.4, 0.85) * falloff * 0.35;

      // Add bright refracted highlight (white-blue)
      tint += vec3(0.5, 0.75, 1.0) * highlight;

      float alpha = (falloff * 0.3 + highlight * 0.5) * vOpacity;
      gl_FragColor = vec4(tint, alpha);
    }
  `}),tt=[];let Ti=0;const tp={cache:new Map,get(o){const e=Math.round(o*100)/100;if(!this.cache.has(e)){let t;e<.15?t=16:e<.25?t=24:e<.4?t=32:t=48,this.cache.set(e,new Jo(e,t,t))}return this.cache.get(e)},dispose(){this.cache.forEach(o=>o.dispose()),this.cache.clear()}},Ut={enabled:!0,interval:8e3,cloudDuration:6e3,dropletsPerCloud:12,dropletInterval:400,minRadius:.1,maxRadius:.15,spawnHeight:10.2,cloudSpeed:2.5,fadeInDuration:2800,fadeOutDuration:2800};function np(o){Object.assign(Ut,o)}function Zl(o,e,t,s,n,i){_i(o,e,t,s);const a=o*4;$e.array[a]=n,$e.array[a+1]=1,$e.array[a+2]=i,$e.array[a+3]=0,jt.array.fill(0,a,a+4);const r=o*3;Fn.array.fill(0,r,r+3),Nn.array.fill(0,r,r+3),ei.array[o]=0}function ql(o,e,t,s,n,i,a,r,l,c){return{instanceIndex:o,position:new P(e,t,s),visualScale:1,body:l,collider:c,radius:n,mass:i,active:!0,hasSpawnedRipple:!1,originalMass:a,jiggleAmplitude:0,jiggleTime:0,spawnProgress:r,attractionDir:new P,attractionStrength:0}}function op(o,e,t){return function(n,i){const a=Ut.minRadius+Math.random()*(Ut.maxRadius-Ut.minRadius),r=yr();if(r<0)return null;Zl(r,n,Ut.spawnHeight,i,a,.01);const l=a*a*a*30.5,c=fe.RigidBodyDesc.dynamic().setTranslation(n,Ut.spawnHeight,i).setLinearDamping(t.damping.linear).setAngularDamping(t.damping.angular).setCcdEnabled(!0),d=e.createRigidBody(c),f=fe.ColliderDesc.ball(a).setMass(l).setFriction(t.ballGround.friction).setRestitution(t.ballGround.restitution).setCollisionGroups(yn.ball),u=e.createCollider(f,d);Ti+=l;const p=ql(r,n,Ut.spawnHeight,i,a,l,l,0,d,u);return tt.push(p),p}}function sp(o){const e=Ma.uniforms.uTime.value+o;Ma.uniforms.uTime.value=e;const t=Math.pow(.1,o);let s=!1;tt.forEach(n=>{if(!n.active)return;s=!0;const i=n.instanceIndex,a=i*4;if(n.spawnProgress<1){n.spawnProgress+=o*2.5,n.spawnProgress=Math.min(n.spawnProgress,1);const d=1-Math.pow(1-n.spawnProgress,3);$e.array[a+2]=d}if(n.jiggleAmplitude>0&&(n.jiggleTime+=o,n.jiggleAmplitude*=t,n.jiggleAmplitude<.001&&(n.jiggleAmplitude=0,n.jiggleTime=0),$e.array[a+3]=n.jiggleAmplitude,jt.array[a]=n.jiggleTime),!n.isEvaporating&&n.body){const d=n.body.linvel(),f=i*3;Fn.array[f]=d.x,Fn.array[f+1]=d.y,Fn.array[f+2]=d.z}const r=i*3;Nn.array[r]=n.attractionDir.x,Nn.array[r+1]=n.attractionDir.y,Nn.array[r+2]=n.attractionDir.z,jt.array[a+1]=n.attractionStrength;const l=n.isOnGround?1:0,c=n.isOnGround?8:4;if(n.groundFlatten=n.groundFlatten||0,n.groundFlatten+=(l-n.groundFlatten)*Math.min(c*o,1),jt.array[a+2]=n.groundFlatten,jt.array[a+3]=n.groundFlatten*n.radius*.55,Re){const d=n.instanceIndex;if(n.groundFlatten>.05){const f=n.terrainHeightAtBall!==void 0?n.terrainHeightAtBall:n.position.y-n.radius,u=n.radius*3.5*n.groundFlatten;Gr.set(n.position.x+xa.x*n.radius*.8,f+.04,n.position.z+xa.z*n.radius*.8),kr.set(u,u,1),Ds.compose(Gr,Qd,kr),Re.setMatrixAt(d,Ds),Yt.array[d]=n.groundFlatten}else Ds.makeTranslation(0,-1e3,0),Re.setMatrixAt(d,Ds),Yt.array[d]=0}}),s&&Xl()}function of(o,e=1){!o||!o.active||(o.jiggleAmplitude=.08*e,o.jiggleTime=0)}function ip(){return Ti}function sf(o){Ti+=o}function ap(o){xa.copy(o)}function rp(){Ti=0}function lp(){for(let o=tt.length-1;o>=0;o--)tt[o].active||tt.splice(o,1)}function Ws(o,e,t){if(o.active=!1,Kl(o.instanceIndex),o.body){if(t)try{t.removeRigidBody(o.body)}catch{}o.body=null,o.collider=null}else if(o.collider){if(t)try{t.removeCollider(o.collider,!0)}catch{}o.collider=null}}const af=.15,$i=3,rf=.65;function $l(o,e,t,s){if(!o.active||o.isEvaporating||o.radius<af)return!1;const n=o.radius*rf;if(n<Ut.minRadius*.8)return!1;const i=o.position.clone(),a=o.body.linvel(),r=o.originalMass;Ws(o,e,t);const l=tt.indexOf(o);l>-1&&tt.splice(l,1);const c=Math.PI*2/$i;for(let d=0;d<$i;d++){const f=c*d+Math.random()*.3,u=yr();if(u<0)continue;const p=o.radius*1.2,h=i.x+Math.cos(f)*p,m=i.y+.1,v=i.z+Math.sin(f)*p;Zl(u,h,m,v,n,1);const y=n*n*n*30.5,w=fe.RigidBodyDesc.dynamic().setTranslation(h,m,v).setLinvel(a.x,a.y,a.z).setLinearDamping(s.damping.linear).setAngularDamping(s.damping.angular).setCcdEnabled(!0),x=t.createRigidBody(w),g=fe.ColliderDesc.ball(n).setMass(y).setFriction(s.ballGround.friction).setRestitution(s.ballGround.restitution).setCollisionGroups(yn.ball),T=t.createCollider(g,x),C=.8,b=new P(Math.cos(f)*C,.342+Math.random()*.185,Math.sin(f)*C).normalize(),S=(4.4+Math.random()*3.42)*y;x.applyImpulse({x:b.x*S,y:b.y*S,z:b.z*S},!0);const A=ql(u,h,m,v,n,y,r/$i,1,x,T);tt.push(A)}return!0}const Is=new fe.Ray({x:0,y:20,z:0},{x:0,y:-1,z:0}),We=[],to=[];function cp(o,e){const{world:t,PHYSICS_CONFIG:s,enabled:n,waterLevel:i,rippleColor:a,scene:r,rippleSystem:l,playWaterSplashSound:c,triggerSplitParticles:d,impactSplats:f,ballsInTarget:u,hasActiveLava:p,isPositionNearActiveLava:h,emitSteamBurst:m}=e;if(We.length=0,n)for(let g=0;g<tt.length;g++){const T=tt[g];T.active&&!T.isEvaporating&&We.push(T)}to.length=We.length;for(let g=0;g<We.length;g++)to[g]=We[g].body.translation();We.forEach((g,T)=>{if(!g.active)return;const C=to[T],b=C.x,R=C.y,S=C.z;if(!g.hasSpawnedRipple){const ne=R-g.radius,q=g.body.linvel();if(q.y<0&&ne<=i-.685){const ie=(i-ne)/Math.abs(q.y),Y=.142,z=b-q.x*ie+q.x*Y,De=S-q.z*ie+q.z*Y;l.spawnRipple(z,De,{size:g.radius*3,speed:1,color:a}),c(g.radius),g.hasSpawnedRipple=!0}}if(R-g.radius<i-.88){Ws(g,r,t),u.delete(g);return}Is.origin.x=b,Is.origin.z=S;const A=t.castRay(Is,40,!0,void 0,void 0,void 0,void 0,ne=>{const q=ne.parent();return q!==null&&q.isFixed()});let E=-100,k=!1;const te=R-g.radius;if(A!==null){if(E=Is.pointAt(A.timeOfImpact).y,te<E-.55){const q=g.body.linvel();g.body.setTranslation({x:b,y:E+g.radius+.2,z:S},!0),g.body.setLinvel({x:q.x,y:Math.max(0,q.y),z:q.z},!0)}k=te<=E+.3&&E>i+.5;const ne=g.isOnGround;if(g.isOnGround=k,k&&!ne){const ie=-g.body.linvel().y;if(ie>3){const Y=Math.min(ie/8,1);d({x:b,y:E+g.radius*.5,z:S},g.radius*(.5+Y*.5)),f.push({x:b,z:-S,radius:g.radius*(1.5+Y*2),life:0,maxLife:1.5+Y*1}),f.length>16&&f.shift()}}if(k){const q=g.body.linvel();q.y>.1&&g.body.setLinvel({x:q.x,y:q.y*.2,z:q.z},!0),g.body.applyImpulse({x:0,y:-g.mass*3*o,z:0},!0)}}if(g.terrainHeightAtBall=E,p()&&h(b,R,S,g.radius)){m(g.position,g.radius,12),Ws(g,r,t);return}g.position.set(b,R,S),_i(g.instanceIndex,b,R,S);for(let ne=T+1;ne<We.length;ne++){const q=We[ne];if(!q.active)continue;const ie=to[ne],Y=C.x-ie.x,z=C.z-ie.z;if(Y*Y+z*z>1)continue;const De=C.y-ie.y;if(Math.sqrt(Y*Y+De*De+z*z)>=g.radius+q.radius)continue;const $=g.radius>=q.radius?g:q,ce=g.radius>=q.radius?q:g;if(!$.active||!ce.active)continue;const he=Math.pow(g.radius**3+q.radius**3,1/3),Ge=$.mass+ce.mass,Ze=$.body.linvel(),Ye=ce.body.linvel();$.body.setLinvel({x:(Ze.x*$.mass+Ye.x*ce.mass)/Ge,y:(Ze.y*$.mass+Ye.y*ce.mass)/Ge,z:(Ze.z*$.mass+Ye.z*ce.mass)/Ge},!0),$.originalMass=($.originalMass||$.mass)+(ce.originalMass||ce.mass),$.radius=he,$.mass=Ge,$.collider&&t.removeCollider($.collider,!0),$.collider=t.createCollider(fe.ColliderDesc.ball(he).setMass(Ge).setFriction(s.ballGround.friction).setRestitution(s.ballGround.restitution).setCollisionGroups(yn.ball),$.body),wt($.instanceIndex,"aRadius",he),of($,Math.min(ce.radius/$.radius*1.5,1)),Ws(ce,r,t)}});const v=3,y=v*v,w=1.5,x=v*.4;for(const g of We)g.active&&(g.attractionDir.set(0,0,0),g.attractionStrength=0);for(let g=0;g<We.length;g++){const T=We[g];if(!T.active)continue;const C=to[g];for(let b=g+1;b<We.length;b++){const R=We[b];if(!R.active)continue;const S=to[b],A=S.x-C.x,E=S.z-C.z;if(A*A+E*E>y)continue;const k=S.y-C.y,te=Math.sqrt(A*A+k*k+E*E);if(te>=v||te<.1)continue;const ne=A/te,q=k/te,ie=E/te,Y=w*(1-te/v),z=T.body.linvel(),De=R.body.linvel();if(T.body.setLinvel({x:z.x+ne*Y*o,y:z.y+q*Y*o,z:z.z+ie*Y*o},!0),R.body.setLinvel({x:De.x-ne*Y*o,y:De.y-q*Y*o,z:De.z-ie*Y*o},!0),te<x){const _e=1-te/x;T.attractionDir.x+=ne*_e,T.attractionDir.y+=q*_e,T.attractionDir.z+=ie*_e,T.attractionStrength=Math.max(T.attractionStrength,_e),R.attractionDir.x-=ne*_e,R.attractionDir.y-=q*_e,R.attractionDir.z-=ie*_e,R.attractionStrength=Math.max(R.attractionStrength,_e)}}}return We.length>0&&Xl(),We}const lf=30,Ji={turbidity:0,rayleigh:.025,mieCoefficient:.01,exposure:.53},Qi=new Z(4128),ea=new Z(2245717),cf=20,M={startDelay:8500,duration:14800,dropInterval:120,ballsDropped:0,isActive:!1,startTime:0,steadyStateReached:!1,steadyStateValues:null,cloudUpdateFrameCounter:0,startTimeoutId:null,dropIntervalId:null,terrainDarknessBlend:0,isPaused:!1,pauseTimeoutRemaining:0,pauseTime:0,stormScheduledTime:0};function Jl(o,e,t,s,n=0){const i=o.x,a=o.z,r=e,l=e*e*e;Wc((c,d,f)=>{const u=yr();if(u<0)return null;_i(u,i,t,a),wt(u,"aRadius",r),wt(u,"aVisualScale",1),wt(u,"aSpawnScale",1),wt(u,"aJiggleAmplitude",0),wt(u,"aJiggleTime",0),_a(u,"aVelocity",0,0,0),_a(u,"aAttractionDir",0,0,0),wt(u,"aAttractionStrength",0),wt(u,"aGroundFlatten",0),wt(u,"aFlattenDrop",0),wt(u,"aHeatTint",0),s&&sf(l);const p=d.RigidBodyDesc.dynamic().setTranslation(i,t,a).setLinearDamping(n).setAngularDamping(0).setCcdEnabled(!0),h=c.createRigidBody(p),m=d.ColliderDesc.ball(r).setMass(l).setFriction(f.ballGround.friction).setRestitution(f.ballGround.restitution).setCollisionGroups(yn.ball),v=c.createCollider(m,h);return{instanceIndex:u,position:new P(i,t,a),visualScale:1,body:h,collider:v,radius:r,mass:l,active:!0,hasSpawnedRipple:!1,originalMass:l,jiggleAmplitude:0,jiggleTime:0,spawnProgress:1,attractionDir:new P,attractionStrength:0}},tt)}function uf(o,e=!0,t=null){const{scene:s,randomTerrainPosition:n,createCloudIndicator:i,sharedCloudTexture:a,sky:r,renderer:l,water:c,timeOfDay:d="day"}=o,f=85;M.stormScheduledTime=Date.now();const u=t!==null?t:M.startDelay;M.startTimeoutId=setTimeout(()=>{M.startTimeoutId=null,M.isActive=!0,M.startTime=Date.now(),M.ballsDropped=0;const p=n(),h=i({startX:p.x,startZ:p.z,endX:p.x,endZ:p.z,cloudTexture:a,rainCount:50,cloudHeight:lf,timeOfDay:d}),m=h.userData.cloud,v=h.userData.cloudMaterial;m.scale.set(125,32,128),m.rotation.y=Math.random()*Math.PI*2;const y=.22,w=.344;d!=="night"&&v.uniforms.base.value.setRGB(121/255*.5,138/255*.55,160/255*.65),v.uniforms.threshold.value=w,m.renderOrder=10,s.add(h);const x=Vc();eu(),h.userData.drizzleSound=x,M.cloudData={group:h,startTime:Date.now(),rotationSpeed:.0013,baseOpacity:y},M.originalSkyValues={turbidity:r.material.uniforms.turbidity.value,rayleigh:r.material.uniforms.rayleigh.value,mieCoefficient:r.material.uniforms.mieCoefficient.value,exposure:l.toneMappingExposure},M.originalWaterValues={heightMultiplier:c.material.uniforms.uWaveHeightMultiplier.value,amplitude:c.material.uniforms.uWaveAmplitude.value,waveSpeed:c.material.uniforms.uWaveSpeed.value,waterLevel:c.mesh.position.y},M.originalHemisphereColors={deepColor:c.hemisphereMesh.material.uniforms.uDeepColor.value.clone(),shallowColor:c.hemisphereMesh.material.uniforms.uShallowColor.value.clone()},M.water=c,M.timeOfDay=d,M.lightningTriggered=!1,M.lightningStarted=!1;const g=document.createElement("div");g.id="lightning-flash",g.style.position="fixed",g.style.top="0",g.style.left="0",g.style.width="100%",g.style.height="100%",g.style.backgroundColor="white",g.style.opacity="0",g.style.pointerEvents="none",g.style.zIndex="1000",document.body.appendChild(g),M.lightningFlash=g,M.dropIntervalId=setInterval(()=>{if(M.ballsDropped>=f){clearInterval(M.dropIntervalId),M.dropIntervalId=null;return}const T=n(),C=.12+Math.random()*.1;Jl(T,C,cf,e),M.ballsDropped++},M.dropInterval)},u)}function ta(o,e){if(!M.lightningTriggered&&o>2500&&o<3500){M.lightningStarted||(M.lightningStarted=!0,M.lightningStartTime=e,Uc(),Qc());const t=e-M.lightningStartTime;let s=0;return t<80?s=.9*(1-t/80):t>=180&&t<280?s=.85*(1-(t-180)/100):t>=280&&(M.lightningTriggered=!0,s=0),M.lightningFlash&&(M.lightningFlash.style.opacity=s.toString()),!0}return!1}function Ql(){if(M.lightningFlash){const o=document.getElementById("lightning-flash");o&&document.body.removeChild(o),M.lightningFlash=null}}function up(){if(!M.isPaused){if(M.isPaused=!0,M.pauseTime=Date.now(),M.startTimeoutId!==null&&!M.isActive){const o=Date.now()-M.stormScheduledTime;M.pauseTimeoutRemaining=Math.max(0,M.startDelay-o),clearTimeout(M.startTimeoutId),M.startTimeoutId=null}M.dropIntervalId!==null&&(clearInterval(M.dropIntervalId),M.dropIntervalId=null)}}function dp(o,e){if(!M.isPaused)return;const t=Date.now()-M.pauseTime;if(M.isPaused=!1,M.startTime>0&&(M.startTime+=t),M.cloudData&&M.cloudData.startTime>0&&(M.cloudData.startTime+=t),M.lightningStartTime>0&&(M.lightningStartTime+=t),M.stormScheduledTime>0&&(M.stormScheduledTime+=t),M.pauseTimeoutRemaining>0&&!M.isActive&&(uf(o,e,M.pauseTimeoutRemaining),M.pauseTimeoutRemaining=0),M.isActive&&M.ballsDropped<45){const{randomTerrainPosition:s}=o,n=45;M.dropIntervalId=setInterval(()=>{if(M.ballsDropped>=n){clearInterval(M.dropIntervalId),M.dropIntervalId=null;return}const i=s(),a=.12+Math.random()*.1;Jl(i,a,Ut.spawnHeight,e),M.ballsDropped++},M.dropInterval)}}function fp(){M.isActive=!1,M.ballsDropped=0,M.startTime=0,M.lightningTriggered=!1,M.lightningStarted=!1,M.steadyStateReached=!1,M.steadyStateValues=null,M.cloudUpdateFrameCounter=0,M.timeOfDay=void 0,M.terrainDarknessBlend=0,M.isPaused=!1,M.pauseTimeoutRemaining=0,M.pauseTime=0,M.stormScheduledTime=0,M.startTimeoutId!==null&&(clearTimeout(M.startTimeoutId),M.startTimeoutId=null),M.dropIntervalId!==null&&(clearInterval(M.dropIntervalId),M.dropIntervalId=null),Bc(),M.cloudData?.group?.userData?.drizzleSound&&Cl(M.cloudData.group.userData.drizzleSound),Ql(),delete M.originalSkyValues,M.originalWaterValues&&M.water&&(M.water.setWaveChoppiness(M.originalWaterValues.heightMultiplier,M.originalWaterValues.amplitude,M.originalWaterValues.waveSpeed),M.water.mesh.position.y=M.originalWaterValues.waterLevel),M.originalHemisphereColors&&M.water&&(M.water.hemisphereMesh.material.uniforms.uDeepColor.value.copy(M.originalHemisphereColors.deepColor),M.water.hemisphereMesh.material.uniforms.uShallowColor.value.copy(M.originalHemisphereColors.shallowColor)),delete M.originalWaterValues,delete M.originalHemisphereColors,delete M.water}function hp(o){const{gameStarted:e,scene:t,camera:s,dt:n,sky:i,renderer:a,updateCloud:r,updateRainParticles:l,setRainOpacity:c}=o;if(!e||!M.isActive||!M.cloudData)return!1;const d=Date.now(),f=d-M.startTime,u=M.cloudData,p=d-u.startTime,{cloud:h,cloudMaterial:m}=u.group.userData;h.visible||(h.visible=!0),M.cloudUpdateFrameCounter++,M.cloudUpdateFrameCounter>=1.22&&(r(u.group,s,n),M.cloudUpdateFrameCounter=0),h.rotation.y+=u.rotationSpeed;const v=4e3,y=3800,w=M.duration-2500,x=M.duration-2e3,g=f<y,T=f>x,C=!g&&!T;let b=u.baseOpacity;if(p<v){const A=p/v,E=A*A*A;b*=E}else if(f>w){const A=(f-(M.duration-1500))/1500;b*=Math.max(0,1-A)}m.uniforms.opacity.value=Math.max(0,b);const R=5e3,S=M.duration-5e3;if(C&&M.steadyStateReached&&f>=R&&f<=S)return l(u.group,n),c(u.group,b*.6),f>=2500&&f<=3500&&ta(f,d),!0;if(M.originalSkyValues&&M.timeOfDay!=="night"){ta(f,d);const A=M.originalSkyValues;if(g){const E=Math.pow(f/y,2);ji(i,a,A,Ji,E)}else if(T){const E=1-Math.pow(1-(f-x)/2e3,2);ji(i,a,Ji,A,E)}else M.steadyStateReached||(M.steadyStateReached=!0,ji(i,a,A,Ji,1))}else M.timeOfDay==="night"&&ta(f,d);if(M.originalHemisphereColors&&M.water)if(g){const E=f/y,k=E*E;M.water.hemisphereMesh.material.uniforms.uDeepColor.value.lerpColors(M.originalHemisphereColors.deepColor,Qi,k),M.water.hemisphereMesh.material.uniforms.uShallowColor.value.lerpColors(M.originalHemisphereColors.shallowColor,ea,k),M.timeOfDay!=="night"&&(M.terrainDarknessBlend=k*.6)}else if(T){const E=(f-x)/2e3,k=1-Math.pow(1-E,2);M.water.hemisphereMesh.material.uniforms.uDeepColor.value.lerpColors(Qi,M.originalHemisphereColors.deepColor,k),M.water.hemisphereMesh.material.uniforms.uShallowColor.value.lerpColors(ea,M.originalHemisphereColors.shallowColor,k),M.timeOfDay!=="night"&&(M.terrainDarknessBlend=.6*(1-k))}else M.steadyStateReached||(M.water.hemisphereMesh.material.uniforms.uDeepColor.value.copy(Qi),M.water.hemisphereMesh.material.uniforms.uShallowColor.value.copy(ea),M.timeOfDay!=="night"&&(M.terrainDarknessBlend=.6));if(M.originalWaterValues&&M.water){const q=f<R,ie=f>S;if(q){const Y=Math.min(f/R,1),z=Y*Y,De=M.originalWaterValues.heightMultiplier+(4.8-M.originalWaterValues.heightMultiplier)*z,_e=M.originalWaterValues.amplitude+(.8-M.originalWaterValues.amplitude)*z,$=M.originalWaterValues.waveSpeed+(1.825-M.originalWaterValues.waveSpeed)*z,ce=M.originalWaterValues.waterLevel-.84*z;M.water.mesh.position.y=ce,M.water.setWaveChoppiness(De,_e,$)}else if(ie){const Y=Math.min((f-S)/5e3,1),z=Y*Y,De=4.8+(M.originalWaterValues.heightMultiplier-4.8)*z,_e=.8+(M.originalWaterValues.amplitude-.8)*z,$=1.825+(M.originalWaterValues.waveSpeed-1.825)*z,ce=M.originalWaterValues.waterLevel-.84+.84*z;M.water.mesh.position.y=ce,M.water.setWaveChoppiness(De,_e,$)}else if(!M.steadyStateReached){const Y=M.originalWaterValues.waterLevel-.84;M.water.mesh.position.y=Y,M.water.setWaveChoppiness(4.8,.8,1.825)}}return l(u.group,n),c(u.group,b*.6),f>M.duration?(M.isActive=!1,M.dropIntervalId!==null&&(clearInterval(M.dropIntervalId),M.dropIntervalId=null),M.terrainDarknessBlend=0,u.group&&(u.group.userData.drizzleSound&&Cl(u.group.userData.drizzleSound),t.remove(u.group),u.group.traverse(A=>{A.geometry&&A.geometry.dispose(),A.material&&A.material.dispose()})),M.cloudData=null,M.originalSkyValues&&(M.originalSkyValues=null),M.originalWaterValues&&M.water&&(M.water.setWaveChoppiness(M.originalWaterValues.heightMultiplier,M.originalWaterValues.amplitude,M.originalWaterValues.waveSpeed),M.water.mesh.position.y=M.originalWaterValues.waterLevel,M.originalWaterValues=null),M.originalHemisphereColors&&M.water&&(M.water.hemisphereMesh.material.uniforms.uDeepColor.value.copy(M.originalHemisphereColors.deepColor),M.water.hemisphereMesh.material.uniforms.uShallowColor.value.copy(M.originalHemisphereColors.shallowColor),M.originalHemisphereColors=null,M.water=null),Ql(),!1):!0}function wr(o){const e=new Map,t=new Map,s=o.clone();return ec(o,s,function(n,i){e.set(i,n),t.set(n,i)}),s.traverse(function(n){if(!n.isSkinnedMesh)return;const i=n,a=e.get(n),r=a.skeleton.bones;i.skeleton=a.skeleton.clone(),i.bindMatrix.copy(a.bindMatrix),i.skeleton.bones=r.map(function(l){return t.get(l)}),i.bind(i.skeleton,i.bindMatrix)}),s}function ec(o,e,t){t(o,e);for(let s=0;s<o.children.length;s++)ec(o.children[s],e.children[s],t)}function Wr(o,e){if(e===vu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===ya||e===Hl){let t=o.getIndex();if(t===null){const a=[],r=o.getAttribute("position");if(r!==void 0){for(let l=0;l<r.count;l++)a.push(l);o.setIndex(a),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const s=t.count-2,n=[];if(e===ya)for(let a=1;a<=s;a++)n.push(t.getX(0)),n.push(t.getX(a)),n.push(t.getX(a+1));else for(let a=0;a<s;a++)a%2===0?(n.push(t.getX(a)),n.push(t.getX(a+1)),n.push(t.getX(a+2))):(n.push(t.getX(a+2)),n.push(t.getX(a+1)),n.push(t.getX(a)));n.length/3!==s&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const i=o.clone();return i.setIndex(n),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class Mr extends yu{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mf(t)}),this.register(function(t){return new gf(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new yf(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Mf(t)}),this.register(function(t){return new xf(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Df(t)})}load(e,t,s,n){const i=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Bo.extractUrlBase(e);a=Bo.resolveURL(c,this.path)}else a=Bo.extractUrlBase(e);this.manager.itemStart(e);const r=function(c){n?n(c):console.error(c),i.manager.itemError(e),i.manager.itemEnd(e)},l=new Gl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{i.parse(c,a,function(d){t(d),i.manager.itemEnd(e)},r)}catch(d){r(d)}},s,r)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,s,n){let i;const a={},r={},l=new TextDecoder;if(typeof e=="string")i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===tc){try{a[ee.KHR_BINARY_GLTF]=new If(e)}catch(f){n&&n(f);return}i=JSON.parse(a[ee.KHR_BINARY_GLTF].content)}else i=JSON.parse(l.decode(e));else i=e;if(i.asset===void 0||i.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Uf(i,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const f=this.pluginCallbacks[d](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),r[f.name]=f,a[f.name]=!0}if(i.extensionsUsed)for(let d=0;d<i.extensionsUsed.length;++d){const f=i.extensionsUsed[d],u=i.extensionsRequired||[];switch(f){case ee.KHR_MATERIALS_UNLIT:a[f]=new hf;break;case ee.KHR_DRACO_MESH_COMPRESSION:a[f]=new Ef(i,this.dracoLoader);break;case ee.KHR_TEXTURE_TRANSFORM:a[f]=new Pf;break;case ee.KHR_MESH_QUANTIZATION:a[f]=new Lf;break;default:u.indexOf(f)>=0&&r[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(a),c.setPlugins(r),c.parse(s,n)}parseAsync(e,t){const s=this;return new Promise(function(n,i){s.parse(e,t,n,i)})}}function df(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const ee={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ff{constructor(e){this.parser=e,this.name=ee.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let s=0,n=t.length;s<n;s++){const i=t[s];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(e){const t=this.parser,s="light:"+e;let n=t.cache.get(s);if(n)return n;const i=t.json,l=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e];let c;const d=new Z(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],en);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Mu(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new wa(d),c.distance=f;break;case"spot":c=new wu(d),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Pt(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(s,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,s=this.parser,i=s.json.nodes[e],r=(i.extensions&&i.extensions[this.name]||{}).light;return r===void 0?null:this._loadLight(r).then(function(l){return s._getNodeRef(t.cache,r,l)})}}class hf{constructor(){this.name=ee.KHR_MATERIALS_UNLIT}getMaterialType(){return Xe}extendParams(e,t,s){const n=[];e.color=new Z(1,1,1),e.opacity=1;const i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){const a=i.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],en),e.opacity=a[3]}i.baseColorTexture!==void 0&&n.push(s.assignTexture(e,"map",i.baseColorTexture,vo))}return Promise.all(n)}}class pf{constructor(e){this.parser=e,this.name=ee.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name].emissiveStrength;return i!==void 0&&(t.emissiveIntensity=i),Promise.resolve()}}class mf{constructor(e){this.parser=e,this.name=ee.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const s=this.parser,n=s.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&i.push(s.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&i.push(s.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(i.push(s.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const r=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(r,r)}return Promise.all(i)}}class gf{constructor(e){this.parser=e,this.name=ee.KHR_MATERIALS_DISPERSION}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name];return t.dispersion=i.dispersion!==void 0?i.dispersion:0,Promise.resolve()}}class vf{constructor(e){this.parser=e,this.name=ee.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const s=this.parser,n=s.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&i.push(s.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&i.push(s.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(i)}}class yf{constructor(e){this.parser=e,this.name=ee.KHR_MATERIALS_SHEEN}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const s=this.parser,n=s.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[];t.sheenColor=new Z(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){const r=a.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],en)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&i.push(s.assignTexture(t,"sheenColorMap",a.sheenColorTexture,vo)),a.sheenRoughnessTexture!==void 0&&i.push(s.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(i)}}class wf{constructor(e){this.parser=e,this.name=ee.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const s=this.parser,n=s.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&i.push(s.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(i)}}class Mf{constructor(e){this.parser=e,this.name=ee.KHR_MATERIALS_VOLUME}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const s=this.parser,n=s.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[],a=n.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&i.push(s.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const r=a.attenuationColor||[1,1,1];return t.attenuationColor=new Z().setRGB(r[0],r[1],r[2],en),Promise.all(i)}}class xf{constructor(e){this.parser=e,this.name=ee.KHR_MATERIALS_IOR}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class _f{constructor(e){this.parser=e,this.name=ee.KHR_MATERIALS_SPECULAR}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const s=this.parser,n=s.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[],a=n.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&i.push(s.assignTexture(t,"specularIntensityMap",a.specularTexture));const r=a.specularColorFactor||[1,1,1];return t.specularColor=new Z().setRGB(r[0],r[1],r[2],en),a.specularColorTexture!==void 0&&i.push(s.assignTexture(t,"specularColorMap",a.specularColorTexture,vo)),Promise.all(i)}}class Tf{constructor(e){this.parser=e,this.name=ee.EXT_MATERIALS_BUMP}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const s=this.parser,n=s.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[],a=n.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&i.push(s.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(i)}}class Sf{constructor(e){this.parser=e,this.name=ee.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:Gt}extendMaterialParams(e,t){const s=this.parser,n=s.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&i.push(s.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(i)}}class Cf{constructor(e){this.parser=e,this.name=ee.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,s=t.json,n=s.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const i=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(s.extensionsRequired&&s.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,i.source,a)}}class bf{constructor(e){this.parser=e,this.name=ee.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,s=this.parser,n=s.json,i=n.textures[e];if(!i.extensions||!i.extensions[t])return null;const a=i.extensions[t],r=n.images[a.source];let l=s.textureLoader;if(r.uri){const c=s.options.manager.getHandler(r.uri);c!==null&&(l=c)}return s.loadTextureImage(e,a.source,l)}}class Rf{constructor(e){this.parser=e,this.name=ee.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,s=this.parser,n=s.json,i=n.textures[e];if(!i.extensions||!i.extensions[t])return null;const a=i.extensions[t],r=n.images[a.source];let l=s.textureLoader;if(r.uri){const c=s.options.manager.getHandler(r.uri);c!==null&&(l=c)}return s.loadTextureImage(e,a.source,l)}}class Af{constructor(e){this.name=ee.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,s=t.bufferViews[e];if(s.extensions&&s.extensions[this.name]){const n=s.extensions[this.name],i=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return i.then(function(r){const l=n.byteOffset||0,c=n.byteLength||0,d=n.count,f=n.byteStride,u=new Uint8Array(r,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,f,u,n.mode,n.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(d*f);return a.decodeGltfBuffer(new Uint8Array(p),d,f,u,n.mode,n.filter),p})})}else return null}}class Df{constructor(e){this.name=ee.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,s=t.nodes[e];if(!s.extensions||!s.extensions[this.name]||s.mesh===void 0)return null;const n=t.meshes[s.mesh];for(const c of n.primitives)if(c.mode!==ot.TRIANGLES&&c.mode!==ot.TRIANGLE_STRIP&&c.mode!==ot.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=s.extensions[this.name].attributes,r=[],l={};for(const c in a)r.push(this.parser.getDependency("accessor",a[c]).then(d=>(l[c]=d,l[c])));return r.length<1?null:(r.push(this.parser.createNodeMesh(e)),Promise.all(r).then(c=>{const d=c.pop(),f=d.isGroup?d.children:[d],u=c[0].count,p=[];for(const h of f){const m=new Tt,v=new P,y=new Jn,w=new P(1,1,1),x=new jn(h.geometry,h.material,u);for(let g=0;g<u;g++)l.TRANSLATION&&v.fromBufferAttribute(l.TRANSLATION,g),l.ROTATION&&y.fromBufferAttribute(l.ROTATION,g),l.SCALE&&w.fromBufferAttribute(l.SCALE,g),x.setMatrixAt(g,m.compose(v,y,w));for(const g in l)if(g==="_COLOR_0"){const T=l[g];x.instanceColor=new qe(T.array,T.itemSize,T.normalized)}else g!=="TRANSLATION"&&g!=="ROTATION"&&g!=="SCALE"&&h.geometry.setAttribute(g,l[g]);kl.prototype.copy.call(x,h),this.parser.assignFinalMaterial(x),p.push(x)}return d.isGroup?(d.clear(),d.add(...p),d):p[0]}))}}const tc="glTF",Ho=12,Br={JSON:1313821514,BIN:5130562};class If{constructor(e){this.name=ee.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ho),s=new TextDecoder;if(this.header={magic:s.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==tc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ho,i=new DataView(e,Ho);let a=0;for(;a<n;){const r=i.getUint32(a,!0);a+=4;const l=i.getUint32(a,!0);if(a+=4,l===Br.JSON){const c=new Uint8Array(e,Ho+a,r);this.content=s.decode(c)}else if(l===Br.BIN){const c=Ho+a;this.body=e.slice(c,c+r)}a+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ef{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ee.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const s=this.json,n=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,r={},l={},c={};for(const d in a){const f=Ta[d]||d.toLowerCase();r[f]=a[d]}for(const d in e.attributes){const f=Ta[d]||d.toLowerCase();if(a[d]!==void 0){const u=s.accessors[e.attributes[d]],p=fo[u.componentType];c[f]=p.name,l[f]=u.normalized===!0}}return t.getDependency("bufferView",i).then(function(d){return new Promise(function(f,u){n.decodeDracoFile(d,function(p){for(const h in p.attributes){const m=p.attributes[h],v=l[h];v!==void 0&&(m.normalized=v)}f(p)},r,c,en,u)})})}}class Pf{constructor(){this.name=ee.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Lf{constructor(){this.name=ee.KHR_MESH_QUANTIZATION}}class nc extends ku{constructor(e,t,s,n){super(e,t,s,n)}copySampleValue_(e){const t=this.resultBuffer,s=this.sampleValues,n=this.valueSize,i=e*n*3+n;for(let a=0;a!==n;a++)t[a]=s[i+a];return t}interpolate_(e,t,s,n){const i=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=r*2,c=r*3,d=n-t,f=(s-t)/d,u=f*f,p=u*f,h=e*c,m=h-c,v=-2*p+3*u,y=p-u,w=1-v,x=y-u+f;for(let g=0;g!==r;g++){const T=a[m+g+r],C=a[m+g+l]*d,b=a[h+g+r],R=a[h+g]*d;i[g]=w*T+x*C+v*b+y*R}return i}}const Of=new Jn;class Ff extends nc{interpolate_(e,t,s,n){const i=super.interpolate_(e,t,s,n);return Of.fromArray(i).normalize().toArray(i),i}}const ot={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},fo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ur={9728:Wl,9729:wn,9984:Cu,9985:Su,9986:Tu,9987:Ka},Vr={33071:Ru,33648:bu,10497:xt},na={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ta={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},rn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Nf={CUBICSPLINE:void 0,LINEAR:Ul,STEP:zu},oa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zf(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Qo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gu})),o.DefaultMaterial}function Cn(o,e,t){for(const s in t.extensions)o[s]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[s]=t.extensions[s])}function Pt(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Hf(o,e,t){let s=!1,n=!1,i=!1;for(let c=0,d=e.length;c<d;c++){const f=e[c];if(f.POSITION!==void 0&&(s=!0),f.NORMAL!==void 0&&(n=!0),f.COLOR_0!==void 0&&(i=!0),s&&n&&i)break}if(!s&&!n&&!i)return Promise.resolve(o);const a=[],r=[],l=[];for(let c=0,d=e.length;c<d;c++){const f=e[c];if(s){const u=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):o.attributes.position;a.push(u)}if(n){const u=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):o.attributes.normal;r.push(u)}if(i){const u=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):o.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(r),Promise.all(l)]).then(function(c){const d=c[0],f=c[1],u=c[2];return s&&(o.morphAttributes.position=d),n&&(o.morphAttributes.normal=f),i&&(o.morphAttributes.color=u),o.morphTargetsRelative=!0,o})}function Gf(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,s=e.weights.length;t<s;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let s=0,n=t.length;s<n;s++)o.morphTargetDictionary[t[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kf(o){let e;const t=o.extensions&&o.extensions[ee.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sa(t.attributes):e=o.indices+":"+sa(o.attributes)+":"+o.mode,o.targets!==void 0)for(let s=0,n=o.targets.length;s<n;s++)e+=":"+sa(o.targets[s]);return e}function sa(o){let e="";const t=Object.keys(o).sort();for(let s=0,n=t.length;s<n;s++)e+=t[s]+":"+o[t[s]]+";";return e}function Sa(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Wf(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Bf=new Tt;class Uf{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new df,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let s=!1,n=-1,i=!1,a=-1;if(typeof navigator<"u"){const r=navigator.userAgent;s=/^((?!chrome|android).)*safari/i.test(r)===!0;const l=r.match(/Version\/(\d+)/);n=s&&l?parseInt(l[1],10):-1,i=r.indexOf("Firefox")>-1,a=i?r.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||s&&n<17||i&&a<98?this.textureLoader=new Fl(this.options.manager):this.textureLoader=new xu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const s=this,n=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([s.getDependencies("scene"),s.getDependencies("animation"),s.getDependencies("camera")])}).then(function(a){const r={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:s,userData:{}};return Cn(i,r,n),Pt(r,n),Promise.all(s._invokeAll(function(l){return l.afterRoot&&l.afterRoot(r)})).then(function(){for(const l of r.scenes)l.updateMatrixWorld();e(r)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],s=this.json.meshes||[];for(let n=0,i=t.length;n<i;n++){const a=t[n].joints;for(let r=0,l=a.length;r<l;r++)e[a[r]].isBone=!0}for(let n=0,i=e.length;n<i;n++){const a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(s[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,s){if(e.refs[t]<=1)return s;const n=s.clone(),i=(a,r)=>{const l=this.associations.get(a);l!=null&&this.associations.set(r,l);for(const[c,d]of a.children.entries())i(d,r.children[c])};return i(s,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let s=0;s<t.length;s++){const n=e(t[s]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const s=[];for(let n=0;n<t.length;n++){const i=e(t[n]);i&&s.push(i)}return s}getDependency(e,t){const s=e+":"+t;let n=this.cache.get(s);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(i){return i.loadNode&&i.loadNode(t)});break;case"mesh":n=this._invokeOne(function(i){return i.loadMesh&&i.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(i){return i.loadBufferView&&i.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(i){return i.loadMaterial&&i.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(i){return i.loadTexture&&i.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(i){return i.loadAnimation&&i.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(s,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const s=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(i,a){return s.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],s=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ee.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(i,a){s.load(Bo.resolveURL(t.uri,n.path),i,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(s){const n=t.byteLength||0,i=t.byteOffset||0;return s.slice(i,i+n)})}loadAccessor(e){const t=this,s=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const a=na[n.type],r=fo[n.componentType],l=n.normalized===!0,c=new r(n.count*a);return Promise.resolve(new ze(c,a,l))}const i=[];return n.bufferView!==void 0?i.push(this.getDependency("bufferView",n.bufferView)):i.push(null),n.sparse!==void 0&&(i.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),i.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(i).then(function(a){const r=a[0],l=na[n.type],c=fo[n.componentType],d=c.BYTES_PER_ELEMENT,f=d*l,u=n.byteOffset||0,p=n.bufferView!==void 0?s.bufferViews[n.bufferView].byteStride:void 0,h=n.normalized===!0;let m,v;if(p&&p!==f){const y=Math.floor(u/p),w="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+y+":"+n.count;let x=t.cache.get(w);x||(m=new c(r,y*p,n.count*p/d),x=new _u(m,p/d),t.cache.add(w,x)),v=new Hu(x,l,u%p/d,h)}else r===null?m=new c(n.count*l):m=new c(r,u,n.count*l),v=new ze(m,l,h);if(n.sparse!==void 0){const y=na.SCALAR,w=fo[n.sparse.indices.componentType],x=n.sparse.indices.byteOffset||0,g=n.sparse.values.byteOffset||0,T=new w(a[1],x,n.sparse.count*y),C=new c(a[2],g,n.sparse.count*l);r!==null&&(v=new ze(v.array.slice(),v.itemSize,v.normalized)),v.normalized=!1;for(let b=0,R=T.length;b<R;b++){const S=T[b];if(v.setX(S,C[b*l]),l>=2&&v.setY(S,C[b*l+1]),l>=3&&v.setZ(S,C[b*l+2]),l>=4&&v.setW(S,C[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}v.normalized=h}return v})}loadTexture(e){const t=this.json,s=this.options,i=t.textures[e].source,a=t.images[i];let r=this.textureLoader;if(a.uri){const l=s.manager.getHandler(a.uri);l!==null&&(r=l)}return this.loadTextureImage(e,i,r)}loadTextureImage(e,t,s){const n=this,i=this.json,a=i.textures[e],r=i.images[t],l=(r.uri||r.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,s).then(function(d){d.flipY=!1,d.name=a.name||r.name||"",d.name===""&&typeof r.uri=="string"&&r.uri.startsWith("data:image/")===!1&&(d.name=r.uri);const u=(i.samplers||{})[a.sampler]||{};return d.magFilter=Ur[u.magFilter]||wn,d.minFilter=Ur[u.minFilter]||Ka,d.wrapS=Vr[u.wrapS]||xt,d.wrapT=Vr[u.wrapT]||xt,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Wl&&d.minFilter!==wn,n.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const s=this,n=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=n.images[e],r=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=s.getDependency("bufferView",a.bufferView).then(function(f){c=!0;const u=new Blob([f],{type:a.mimeType});return l=r.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(f){return new Promise(function(u,p){let h=u;t.isImageBitmapLoader===!0&&(h=function(m){const v=new Ir(m);v.needsUpdate=!0,u(v)}),t.load(Bo.resolveURL(f,i.path),h,void 0,p)})}).then(function(f){return c===!0&&r.revokeObjectURL(l),Pt(f,a),f.userData.mimeType=a.mimeType||Wf(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=d,d}assignTexture(e,t,s,n){const i=this;return this.getDependency("texture",s.index).then(function(a){if(!a)return null;if(s.texCoord!==void 0&&s.texCoord>0&&(a=a.clone(),a.channel=s.texCoord),i.extensions[ee.KHR_TEXTURE_TRANSFORM]){const r=s.extensions!==void 0?s.extensions[ee.KHR_TEXTURE_TRANSFORM]:void 0;if(r){const l=i.associations.get(a);a=i.extensions[ee.KHR_TEXTURE_TRANSFORM].extendTexture(a,r),i.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let s=e.material;const n=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const r="PointsMaterial:"+s.uuid;let l=this.cache.get(r);l||(l=new Za,Ui.prototype.copy.call(l,s),l.color.copy(s.color),l.map=s.map,l.sizeAttenuation=!1,this.cache.add(r,l)),s=l}else if(e.isLine){const r="LineBasicMaterial:"+s.uuid;let l=this.cache.get(r);l||(l=new Bl,Ui.prototype.copy.call(l,s),l.color.copy(s.color),l.map=s.map,this.cache.add(r,l)),s=l}if(n||i||a){let r="ClonedMaterial:"+s.uuid+":";n&&(r+="derivative-tangents:"),i&&(r+="vertex-colors:"),a&&(r+="flat-shading:");let l=this.cache.get(r);l||(l=s.clone(),i&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(r,l),this.associations.set(l,this.associations.get(s))),s=l}e.material=s}getMaterialType(){return Qo}loadMaterial(e){const t=this,s=this.json,n=this.extensions,i=s.materials[e];let a;const r={},l=i.extensions||{},c=[];if(l[ee.KHR_MATERIALS_UNLIT]){const f=n[ee.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),c.push(f.extendParams(r,i,t))}else{const f=i.pbrMetallicRoughness||{};if(r.color=new Z(1,1,1),r.opacity=1,Array.isArray(f.baseColorFactor)){const u=f.baseColorFactor;r.color.setRGB(u[0],u[1],u[2],en),r.opacity=u[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(r,"map",f.baseColorTexture,vo)),r.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,r.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(r,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(r,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,r)})))}i.doubleSided===!0&&(r.side=Ne);const d=i.alphaMode||oa.OPAQUE;if(d===oa.BLEND?(r.transparent=!0,r.depthWrite=!1):(r.transparent=!1,d===oa.MASK&&(r.alphaTest=i.alphaCutoff!==void 0?i.alphaCutoff:.5)),i.normalTexture!==void 0&&a!==Xe&&(c.push(t.assignTexture(r,"normalMap",i.normalTexture)),r.normalScale=new pe(1,1),i.normalTexture.scale!==void 0)){const f=i.normalTexture.scale;r.normalScale.set(f,f)}if(i.occlusionTexture!==void 0&&a!==Xe&&(c.push(t.assignTexture(r,"aoMap",i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(r.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==Xe){const f=i.emissiveFactor;r.emissive=new Z().setRGB(f[0],f[1],f[2],en)}return i.emissiveTexture!==void 0&&a!==Xe&&c.push(t.assignTexture(r,"emissiveMap",i.emissiveTexture,vo)),Promise.all(c).then(function(){const f=new a(r);return i.name&&(f.name=i.name),Pt(f,i),t.associations.set(f,{materials:e}),i.extensions&&Cn(n,f,i),f})}createUniqueName(e){const t=Au.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,s=this.extensions,n=this.primitiveCache;function i(r){return s[ee.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(r,t).then(function(l){return Yr(l,r,t)})}const a=[];for(let r=0,l=e.length;r<l;r++){const c=e[r],d=kf(c),f=n[d];if(f)a.push(f.promise);else{let u;c.extensions&&c.extensions[ee.KHR_DRACO_MESH_COMPRESSION]?u=i(c):u=Yr(new _n,c,t),n[d]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,s=this.json,n=this.extensions,i=s.meshes[e],a=i.primitives,r=[];for(let l=0,c=a.length;l<c;l++){const d=a[l].material===void 0?zf(this.cache):this.getDependency("material",a[l].material);r.push(d)}return r.push(t.loadGeometries(a)),Promise.all(r).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],f=[];for(let p=0,h=d.length;p<h;p++){const m=d[p],v=a[p];let y;const w=c[p];if(v.mode===ot.TRIANGLES||v.mode===ot.TRIANGLE_STRIP||v.mode===ot.TRIANGLE_FAN||v.mode===void 0)y=i.isSkinnedMesh===!0?new Du(m,w):new we(m,w),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),v.mode===ot.TRIANGLE_STRIP?y.geometry=Wr(y.geometry,Hl):v.mode===ot.TRIANGLE_FAN&&(y.geometry=Wr(y.geometry,ya));else if(v.mode===ot.LINES)y=new Iu(m,w);else if(v.mode===ot.LINE_STRIP)y=new Eu(m,w);else if(v.mode===ot.LINE_LOOP)y=new Pu(m,w);else if(v.mode===ot.POINTS)y=new Mi(m,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(y.geometry.morphAttributes).length>0&&Gf(y,i),y.name=t.createUniqueName(i.name||"mesh_"+e),Pt(y,i),v.extensions&&Cn(n,y,v),t.assignFinalMaterial(y),f.push(y)}for(let p=0,h=f.length;p<h;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return i.extensions&&Cn(n,f[0],i),f[0];const u=new Zt;i.extensions&&Cn(n,u,i),t.associations.set(u,{meshes:e});for(let p=0,h=f.length;p<h;p++)u.add(f[p]);return u})}loadCamera(e){let t;const s=this.json.cameras[e],n=s[s.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return s.type==="perspective"?t=new Lu(Vt.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):s.type==="orthographic"&&(t=new va(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),s.name&&(t.name=this.createUniqueName(s.name)),Pt(t,s),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],s=[];for(let n=0,i=t.joints.length;n<i;n++)s.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?s.push(this.getDependency("accessor",t.inverseBindMatrices)):s.push(null),Promise.all(s).then(function(n){const i=n.pop(),a=n,r=[],l=[];for(let c=0,d=a.length;c<d;c++){const f=a[c];if(f){r.push(f);const u=new Tt;i!==null&&u.fromArray(i.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ou(r,l)})}loadAnimation(e){const t=this.json,s=this,n=t.animations[e],i=n.name?n.name:"animation_"+e,a=[],r=[],l=[],c=[],d=[];for(let f=0,u=n.channels.length;f<u;f++){const p=n.channels[f],h=n.samplers[p.sampler],m=p.target,v=m.node,y=n.parameters!==void 0?n.parameters[h.input]:h.input,w=n.parameters!==void 0?n.parameters[h.output]:h.output;m.node!==void 0&&(a.push(this.getDependency("node",v)),r.push(this.getDependency("accessor",y)),l.push(this.getDependency("accessor",w)),c.push(h),d.push(m))}return Promise.all([Promise.all(a),Promise.all(r),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(f){const u=f[0],p=f[1],h=f[2],m=f[3],v=f[4],y=[];for(let x=0,g=u.length;x<g;x++){const T=u[x],C=p[x],b=h[x],R=m[x],S=v[x];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const A=s._createAnimationTracks(T,C,b,R,S);if(A)for(let E=0;E<A.length;E++)y.push(A[E])}const w=new Fu(i,void 0,y);return Pt(w,n),w})}createNodeMesh(e){const t=this.json,s=this,n=t.nodes[e];return n.mesh===void 0?null:s.getDependency("mesh",n.mesh).then(function(i){const a=s._getNodeRef(s.meshCache,n.mesh,i);return n.weights!==void 0&&a.traverse(function(r){if(r.isMesh)for(let l=0,c=n.weights.length;l<c;l++)r.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){const t=this.json,s=this,n=t.nodes[e],i=s._loadNodeShallow(e),a=[],r=n.children||[];for(let c=0,d=r.length;c<d;c++)a.push(s.getDependency("node",r[c]));const l=n.skin===void 0?Promise.resolve(null):s.getDependency("skin",n.skin);return Promise.all([i,Promise.all(a),l]).then(function(c){const d=c[0],f=c[1],u=c[2];u!==null&&d.traverse(function(p){p.isSkinnedMesh&&p.bind(u,Bf)});for(let p=0,h=f.length;p<h;p++)d.add(f[p]);return d})}_loadNodeShallow(e){const t=this.json,s=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const i=t.nodes[e],a=i.name?n.createUniqueName(i.name):"",r=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&r.push(l),i.camera!==void 0&&r.push(n.getDependency("camera",i.camera).then(function(c){return n._getNodeRef(n.cameraCache,i.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){r.push(c)}),this.nodeCache[e]=Promise.all(r).then(function(c){let d;if(i.isBone===!0?d=new Nu:c.length>1?d=new Zt:c.length===1?d=c[0]:d=new kl,d!==c[0])for(let f=0,u=c.length;f<u;f++)d.add(c[f]);if(i.name&&(d.userData.name=i.name,d.name=a),Pt(d,i),i.extensions&&Cn(s,d,i),i.matrix!==void 0){const f=new Tt;f.fromArray(i.matrix),d.applyMatrix4(f)}else i.translation!==void 0&&d.position.fromArray(i.translation),i.rotation!==void 0&&d.quaternion.fromArray(i.rotation),i.scale!==void 0&&d.scale.fromArray(i.scale);if(!n.associations.has(d))n.associations.set(d,{});else if(i.mesh!==void 0&&n.meshCache.refs[i.mesh]>1){const f=n.associations.get(d);n.associations.set(d,{...f})}return n.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,s=this.json.scenes[e],n=this,i=new Zt;s.name&&(i.name=n.createUniqueName(s.name)),Pt(i,s),s.extensions&&Cn(t,i,s);const a=s.nodes||[],r=[];for(let l=0,c=a.length;l<c;l++)r.push(n.getDependency("node",a[l]));return Promise.all(r).then(function(l){for(let d=0,f=l.length;d<f;d++)i.add(l[d]);const c=d=>{const f=new Map;for(const[u,p]of n.associations)(u instanceof Ui||u instanceof Ir)&&f.set(u,p);return d.traverse(u=>{const p=n.associations.get(u);p!=null&&f.set(u,p)}),f};return n.associations=c(i),i})}_createAnimationTracks(e,t,s,n,i){const a=[],r=e.name?e.name:e.uuid,l=[];rn[i.path]===rn.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(r);let c;switch(rn[i.path]){case rn.weights:c=Pr;break;case rn.rotation:c=Lr;break;case rn.translation:case rn.scale:c=Er;break;default:s.itemSize===1?c=Pr:c=Er;break}const d=n.interpolation!==void 0?Nf[n.interpolation]:Ul,f=this._getArrayFromAccessor(s);for(let u=0,p=l.length;u<p;u++){const h=new c(l[u]+"."+rn[i.path],t.array,f,d);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(h),a.push(h)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const s=Sa(t.constructor),n=new Float32Array(t.length);for(let i=0,a=t.length;i<a;i++)n[i]=t[i]*s;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(s){const n=this instanceof Lr?Ff:nc;return new n(this.times,this.values,this.getValueSize()/3,s)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Vf(o,e,t){const s=e.attributes,n=new xi;if(s.POSITION!==void 0){const r=t.json.accessors[s.POSITION],l=r.min,c=r.max;if(l!==void 0&&c!==void 0){if(n.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),r.normalized){const d=Sa(fo[r.componentType]);n.min.multiplyScalar(d),n.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const i=e.targets;if(i!==void 0){const r=new P,l=new P;for(let c=0,d=i.length;c<d;c++){const f=i[c];if(f.POSITION!==void 0){const u=t.json.accessors[f.POSITION],p=u.min,h=u.max;if(p!==void 0&&h!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(h[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(h[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(h[2]))),u.normalized){const m=Sa(fo[u.componentType]);l.multiplyScalar(m)}r.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(r)}o.boundingBox=n;const a=new Xa;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,o.boundingSphere=a}function Yr(o,e,t){const s=e.attributes,n=[];function i(a,r){return t.getDependency("accessor",a).then(function(l){o.setAttribute(r,l)})}for(const a in s){const r=Ta[a]||a.toLowerCase();r in o.attributes||n.push(i(s[a],r))}if(e.indices!==void 0&&!o.index){const a=t.getDependency("accessor",e.indices).then(function(r){o.setIndex(r)});n.push(a)}return Or.workingColorSpace!==en&&"COLOR_0"in s&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Or.workingColorSpace}" not supported.`),Pt(o,e),Vf(o,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Hf(o,e.targets,t):o})}const oc=new Mr,Bs={},ns={};function Et(o,e={}){return Bs[o]?Promise.resolve(Bs[o]):(no[o]||(no[o]=new Promise((t,s)=>{oc.load(o,n=>{const i=[];n.scene.traverse(a=>{if(a.isMesh){const r=a.rotation.clone();if(e.rotationCorrection){const{x:l=0,y:c=0,z:d=0}=e.rotationCorrection;r.x+=l,r.y+=c,r.z+=d}i.push({geometry:a.geometry,material:a.material,position:a.position.clone(),rotation:r,scale:a.scale.clone(),castShadow:!0,receiveShadow:!0})}}),Bs[o]=i,delete no[o],t(i)},void 0,n=>{console.error(`Failed to preload model ${o}:`,n),delete no[o],s(n)})})),no[o])}function Us(o){return new Promise((e,t)=>{oc.load(o,s=>{s.scene.traverse(n=>{n.userData={}}),ns[o]={scene:s.scene,animations:s.animations},e(ns[o])},void 0,s=>{console.error(`Failed to preload GLTF ${o}:`,s),t(s)})})}const no={};let Es=!1,jr=!1;function pp(){return Et("./models/win-state/palm_tree.glb",{rotationCorrection:{x:-Math.PI/2,y:0,z:0}})}function mp(){return Es||jr?Promise.resolve():(Es=!0,Promise.all([Et("./models/win-state/palm_tree.glb",{rotationCorrection:{x:-Math.PI/2,y:0,z:0}}),Et("./models/win-state/ivory-cane-palm.glb"),Et("./models/win-state/olive-palm.glb"),Et("./models/win-state/tall-grass.glb"),Et("./models/win-state/grass.glb"),Et("./models/win-state/fern.glb"),Et("./models/win-state/lady-palm.glb"),Et("./models/win-state/bismarck-palm.glb"),Et("./models/win-state/banana-tree.glb"),Us("./models/creatures/seagulls-flock.glb"),Us("./models/creatures/seagulls-spiral.glb"),Us("./models/creatures/seagull-1.glb")]).then(()=>{jr=!0,Es=!1}).catch(o=>{Es=!1,console.error("Error preloading models:",o)}))}function gp(){return Bs}function Yf(){return ns}function mt(o){return ns[o]?Promise.resolve(ns[o]):Us(o)}function vp(){return Promise.all([mt("./models/creatures/shark.glb"),mt("./models/creatures/manta-ray.glb"),mt("./models/creatures/whale.glb"),mt("./models/creatures/dolphin.glb"),mt("./models/creatures/container-ship.glb"),mt("./models/creatures/sailboat.glb"),mt("./models/creatures/mayan-temple.glb"),mt("./models/creatures/whale_shark.glb"),mt("./models/creatures/sail-fish.glb"),mt("./models/creatures/firefly_squid.glb"),mt("./models/creatures/green_turtle.glb")]).then(()=>{})}function jf(){const o=document.createElement("canvas");o.width=64,o.height=64;const e=o.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),t.addColorStop(1,"rgba(255, 255, 255, 0.0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const s=new Ao(o);return s.needsUpdate=!0,s}const Kf=jf(),os=8,Xf=4.3,Ca=90,ba=500,Ra=200,Zf=18;let Kn=[],Je=[],pn=[],Qe=[],ps=[],zn=[],it=[],Do=[],Pn=null,ye=null,ho=null,Be=[],ge=null,po=null,Ue=[];const rt=new Tt,Si=new Jn,Mn=new P;let Kr=0,Xr=1,Zr=1;function yp(){const o=new Jo(.05,8,8),e=new et({transparent:!0,depthWrite:!1,uniforms:{color:{value:new Z(8965375)}},vertexShader:`
      attribute float instanceOpacity;
      varying float vOpacity;

      void main() {
        vOpacity = instanceOpacity;
        vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform vec3 color;
      varying float vOpacity;

      void main() {
        gl_FragColor = vec4(color, vOpacity);
      }
    `});ye=new jn(o,e,ba),ye.renderOrder=2,ye.isPersistent=!0,ho=new Float32Array(ba),ye.geometry.setAttribute("instanceOpacity",new qe(ho,1)),ye.count=0;const t=new Jo(.06,8,8),s=new et({transparent:!0,depthWrite:!1,uniforms:{color:{value:new Z(6737151)}},vertexShader:`
      attribute float instanceOpacity;
      varying float vOpacity;

      void main() {
        vOpacity = instanceOpacity;
        vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform vec3 color;
      varying float vOpacity;

      void main() {
        gl_FragColor = vec4(color, vOpacity);
      }
    `});ge=new jn(t,s,Ra),ge.renderOrder=4,ge.isPersistent=!0,po=new Float32Array(Ra),ge.geometry.setAttribute("instanceOpacity",new qe(po,1)),ge.count=0,Kn=[],Je=[],pn=[],Qe=[],ps=[],zn=[],Be=[],Ue=[],it=[],Do=[],Pn=null}function wp(o,e,t,s="day"){const n=e.length;it=new Array(n).fill(0),Do=new Array(n).fill(0);for(let i=0;i<n;i++){const a=e[i],{beamMesh:r,beamMaterial:l}=qf(a);o.add(r),Kn.push(r),Je.push(l);const c=$f(a,t,s);o.add(c),pn.push(c);const{particles:d,particleVelocities:f}=Jf(a);o.add(d),Qe.push(d),ps.push(f)}ye&&!ye.parent&&o.add(ye),ge&&!ge.parent&&o.add(ge)}function qf(o){const e=new Wu(1.5,1.5,os,32,1,!0),t=new et({transparent:!0,side:Ne,depthWrite:!1,depthTest:!0,vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uColor;
      uniform float uPulseIntensity;
      uniform float uFillProgress;
      uniform vec3 uFillColor;
      varying vec2 vUv;

      void main() {
        // Fade out at top
        float heightFade = 1.0 - vUv.y;

        // Base pulse effect
        float pulse = sin(uTime * 2.0 + vUv.y * 10.0) * 0.3 + 0.7;

        // Edge glow
        float edgeGlow = abs(sin(vUv.x * 3.14159));
        edgeGlow = pow(edgeGlow, 3.0);

        // Add triggered pulse effect
        float triggerPulse = uPulseIntensity * 2.0;

        // Base beam (always visible)
        vec3 color = uColor;
        float alpha = heightFade * pulse * edgeGlow * (0.4 + triggerPulse);

        // Blue fill rising from bottom (soft gradient at top edge)
        float belowFill = smoothstep(uFillProgress + 0.15, uFillProgress - 0.05, vUv.y);
        color = mix(color, uFillColor, belowFill * 0.85);
        alpha += belowFill * 0.35;

        // Boost color brightness during pulse
        color = color * (1.0 + triggerPulse * 0.5);

        gl_FragColor = vec4(color, alpha);
      }
    `,uniforms:{uTime:{value:0},uColor:{value:new P(1,1,0)},uPulseIntensity:{value:0},uFillProgress:{value:0},uFillColor:{value:new P(0,.33,.85)}}}),s=new we(e,t);return s.position.set(o.x,os/2,o.z),s.renderOrder=5,{beamMesh:s,beamMaterial:t}}function $f(o,e,t="day"){const n=Zd({startX:o.x,startZ:o.z,endX:o.x,endZ:o.z,cloudTexture:e,rainCount:200,cloudHeight:16,timeOfDay:t}),i=n.userData.cloud,a=n.userData.cloudMaterial;return i.scale.set(1.26,.42,1.6),t!=="night"&&a.uniforms.base.value.setRGB(.8,.9,1),a.uniforms.threshold.value=.25,a.uniforms.opacity.value=0,i.visible=!1,i.renderOrder=10,a.depthTest=!1,n}function Jf(o){const e=new _n,t=new Float32Array(Ca*3),s=[];for(let a=0;a<Ca;a++){const r=Math.random()*Math.PI*2,l=Math.random()*1.3;t[a*3]=Math.cos(r)*l,t[a*3+1]=Math.random()*os,t[a*3+2]=Math.sin(r)*l,s.push({y:.5+Math.random()*1,angle:r,radius:l,angleSpeed:(Math.random()-.5)*.5})}e.setAttribute("position",new ze(t,3));const n=new Za({color:16776960,size:.18,transparent:!0,opacity:.6,blending:qt,depthWrite:!1,map:Kf}),i=new Mi(e,n);return i.position.set(o.x,0,o.z),{particles:i,particleVelocities:s}}function Mp(o,e,t,s){if(Kr^=1,Kr===1)return;const n=o*2,i=Math.sin(Date.now()*.003)*.1+.9,a=Kn.length,r=a>0&&t>0?t*s/a:1;for(let l=0;l<a;l++){const c=Math.min((Do[l]||0)/r,1);e&&e[l]&&(e[l].emissiveIntensity=i*.5+c*.3+(it[l]||0)),Je[l].uniforms.uTime.value+=n,Je[l].uniforms.uFillProgress.value=c,it[l]>0&&(it[l]-=n*Xf,it[l]=Math.max(0,it[l])),Je[l].uniforms.uPulseIntensity.value=it[l];const d=1+it[l]*.04;Kn[l].scale.set(d,1,d),Qe[l]&&Qe[l].material&&(Qe[l].material.opacity=.6+c*.2,Qe[l].material.size=.18+c*.08)}}function xp(o){if(Xr^=1,Xr===1)return;const e=o*2,t=Qe.length;for(let s=0;s<t;s++){if(!Qe[s].visible)continue;const n=Qe[s].geometry,i=ps[s],a=n.attributes.position.array,r=Je[s]?Je[s].uniforms.uFillProgress.value:0,l=.5+r*1;for(let c=0;c<Ca;c++){const d=i[c];a[c*3+1]+=d.y*e*l,d.angle+=d.angleSpeed*e*(.7+r*.6),a[c*3]=Math.cos(d.angle)*d.radius,a[c*3+2]=Math.sin(d.angle)*d.radius,a[c*3+1]>os&&(a[c*3+1]=0)}n.attributes.position.needsUpdate=!0}}function _p(o,e,t,s,n,i){const a=e.length;o.forEach(r=>{if(!r.active||r.isEvaporating)return;const l=r.body.translation();let c=1/0,d=-1;for(let f=0;f<a;f++){const u=l.x-e[f].x,p=l.z-e[f].z,h=u*u+p*p;h<c&&(c=h,d=f)}if(c<1.5*1.5&&!s.has(r)){s.add(r),n(),it[d]=1,Do[d]+=r.originalMass||1,i();const u=r.body.translation().y;if(r.body){try{t.removeRigidBody(r.body)}catch{}r.body=null,r.collider=null}r.isEvaporating=!0,r.isOnGround=!1,_a(r.instanceIndex,"aVelocity",0,0,0),zn.push({ball:r,targetIndex:d,startY:u,targetY:os,progress:0,originalScale:1,particleEmitter:{particles:[],lastEmitTime:0}})}})}function Tp(o,e,t){for(let s=zn.length-1;s>=0;s--){const n=zn[s],i=n.ball,a=t[n.targetIndex];n.progress+=e*.3;const r=Math.min(n.progress,1),l=r*r*(3-2*r);i.position.y=n.startY+(n.targetY-n.startY)*l,i.position.x+=(a.x-i.position.x)*e*2,i.position.z+=(a.z-i.position.z)*e*2,_i(i.instanceIndex,i.position.x,i.position.y,i.position.z);const c=.6;if(r>c){const u=1-(r-c)/(1-c);i.visualScale=u,wt(i.instanceIndex,"aVisualScale",u)}const d=Date.now();if(d-n.particleEmitter.lastEmitTime>30&&ye&&Be.length<ba){const f=Math.random()*Math.PI*2,u=Math.random()*i.radius*.8,p={x:i.position.x+Math.cos(f)*u,y:i.position.y+(Math.random()-.5)*i.radius,z:i.position.z+Math.sin(f)*u},h=Be.length,m={instanceIndex:h,position:p,velocity:{x:(Math.random()-.5)*.5,y:1+Math.random()*.5,z:(Math.random()-.5)*.5},life:0,maxLife:.8,initialScale:1};Be.push(m),n.particleEmitter.particles.push(m),Mn.set(1,1,1),rt.compose(p,Si,Mn),ye.setMatrixAt(h,rt),ho[h]=.6,ye.count=Be.length,n.particleEmitter.lastEmitTime=d}r>=1&&(Kl(i.instanceIndex),i.active=!1,n.particleEmitter.particles=[],zn.splice(s,1))}Qf(e)}function Qf(o){if(!ye||Be.length===0||(Zr^=1,Zr===1))return;const e=o*2;let t=!1,s=!1,n=0;for(;n<Be.length;){const i=Be[n];if(i.life+=e,i.life>=i.maxLife){const c=Be.length-1;if(n!==c){const d=Be[c];Be[n]=d,d.instanceIndex=n,ye.getMatrixAt(c,rt),ye.setMatrixAt(n,rt),ho[n]=ho[c],t=!0,s=!0}Be.pop(),ye.count=Be.length;continue}i.position.x+=i.velocity.x*e,i.position.y+=i.velocity.y*e,i.position.z+=i.velocity.z*e;const a=i.life/i.maxLife,r=.6*(1-a),l=i.initialScale*(1-a*.5);Mn.set(l,l,l),rt.compose(i.position,Si,Mn),ye.setMatrixAt(i.instanceIndex,rt),t=!0,ho[i.instanceIndex]=r,s=!0,n++}t&&(ye.instanceMatrix.needsUpdate=!0),s&&(ye.geometry.attributes.instanceOpacity.needsUpdate=!0)}function xr(o,e=.3,t=null){if(!ge)return;const n=Math.max(4,Math.round((t??Zf)*Math.min(1,e/.3)));for(let i=0;i<n&&!(Ue.length>=Ra);i++){const a=Math.random()*Math.PI*2,r=Math.random()*Math.PI*.6+Math.PI*.2,l=Math.sin(r)*Math.cos(a),c=Math.cos(r)*.5+.3,d=Math.sin(r)*Math.sin(a),f=e*.3,u={x:o.x+l*f,y:o.y+c*f,z:o.z+d*f},p=2.5+Math.random()*2,h={x:l*p,y:c*p+1,z:d*p},m=Ue.length,v={instanceIndex:m,position:u,velocity:h,life:0,maxLife:.4+Math.random()*.3,initialScale:.8+Math.random()*.4,gravity:-8};Ue.push(v);const y=v.initialScale;Mn.set(y,y,y),rt.compose(u,Si,Mn),ge.setMatrixAt(m,rt),po[m]=.8}ge.count=Ue.length,ge.instanceMatrix.needsUpdate=!0,ge.geometry.attributes.instanceOpacity.needsUpdate=!0}function Sp(o){if(!ge||Ue.length===0)return;let e=!1,t=!1,s=0;for(;s<Ue.length;){const n=Ue[s];if(n.life+=o,n.life>=n.maxLife){const l=Ue.length-1;if(s!==l){const c=Ue[l];Ue[s]=c,c.instanceIndex=s,ge.getMatrixAt(l,rt),ge.setMatrixAt(s,rt),po[s]=po[l],e=!0,t=!0}Ue.pop(),ge.count=Ue.length;continue}n.velocity.y+=n.gravity*o,n.position.x+=n.velocity.x*o,n.position.y+=n.velocity.y*o,n.position.z+=n.velocity.z*o;const i=n.life/n.maxLife,a=.8*(1-i),r=n.initialScale*(1-i*.3);Mn.set(r,r,r),rt.compose(n.position,Si,Mn),ge.setMatrixAt(n.instanceIndex,rt),e=!0,po[n.instanceIndex]=a,t=!0,s++}e&&(ge.instanceMatrix.needsUpdate=!0),t&&(ge.geometry.attributes.instanceOpacity.needsUpdate=!0)}function Cp(o,e,t,s,n){const i=pn.length,a=1600,r=t?Date.now()-s:0;if(t&&r>=a)for(let f=0;f<i;f++){const u=pn[f],p=u.userData.cloud,h=u.userData.cloudMaterial;p.visible=!0,qd(u,o,e),h.uniforms.steps.value=Math.min(h.uniforms.steps.value,15),p.rotation.y+=e*.1;const m=p.scale.x,v=m+(8-m)*e*1.5;p.scale.set(v,v*.6,v);const y=h.uniforms.opacity.value,w=isNaN(y)?.046:y+(.046-y)*e*1.15;h.uniforms.opacity.value=w,$d(u,e),Jd(u,.6)}else for(let l=0;l<i;l++){const c=pn[l];c.userData.cloud.visible=!1}if(t&&n){if(!Pn){Pn=[];for(let u=0;u<i;u++)Pn.push(Je[u].uniforms.uFillProgress.value)}const c=Math.min(r/1200,1),d=c*c,f=c>=1;for(let u=0;u<i;u++)if(f)Je[u].uniforms.uFillProgress.value=0,Je[u].uniforms.uColor.value.set(0,1,.3),Qe[u].visible=!0;else{const p=Pn[u]||0;Je[u].uniforms.uFillProgress.value=p*(1-d)}}}function bp(o){[...Kn].forEach(e=>{o.remove(e),e.geometry.dispose(),e.material.dispose()}),Kn.length=0,Je.length=0,[...pn].forEach(e=>{o.remove(e),e.userData.cloud&&(e.userData.cloud.geometry.dispose(),e.userData.cloud.material.dispose())}),pn.length=0,[...Qe].forEach(e=>{o.remove(e),e.geometry.dispose(),e.material.dispose()}),Qe.length=0,ps.length=0,Be.length=0,ye&&(ye.count=0),Ue.length=0,ge&&(ge.count=0),zn.length=0,it=[],Do=[],Pn=null}function Rp(){Kn=[],Je=[],pn=[],Qe=[],ps=[],zn=[],Be=[],Ue=[],ye&&(ye.count=0),ge&&(ge.count=0),it=[],Do=[],Pn=null}const Vo=300,Yo=50,sc=1.5,ic=1.2,eh=3;let Se=[],Ce=[],me=null,oe=null,Hn=null,se=null,Gn=null,Ci=null,Aa=null;const He=new Tt,Xn=new Jn,dt=new P;new P;new P;const qr=new Jn;function Ap(o,e){Ci=o,Aa=e;const t=new $o(1,1),s=new et({transparent:!0,depthWrite:!1,blending:zl,side:Ne,uniforms:{baseColor:{value:new Z(13935988)}},vertexShader:`
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
    `});oe=new jn(t,s,Vo),oe.renderOrder=2,oe.count=0,oe.isPersistent=!0,Hn=new Float32Array(Vo);const n=new Float32Array(Vo*3);oe.geometry.setAttribute("instanceOpacity",new qe(Hn,1)),oe.geometry.setAttribute("instanceColor",new qe(n,3)),o.add(oe);const i=new Nl(.15,.15,.15),a=new et({transparent:!0,depthWrite:!1,uniforms:{baseColor:{value:new Z(11045226)}},vertexShader:`
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
    `});se=new jn(i,a,Yo),se.renderOrder=2,se.count=0,se.isPersistent=!0,Gn=new Float32Array(Yo);const r=new Float32Array(Yo*3);se.geometry.setAttribute("instanceOpacity",new qe(Gn,1)),se.geometry.setAttribute("instanceColor",new qe(r,3)),o.add(se);const l=new Bu(1.46,32),c=new et({transparent:!0,depthWrite:!1,blending:qt,uniforms:{color:{value:new Z(1,.6,.2)},intensity:{value:0}},vertexShader:`
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
    `});me=new we(l,c),me.rotation.x=-Math.PI/2,me.visible=!1,me.isPersistent=!0,o.add(me),Se=[],Ce=[]}function ti(o,e,t=1,s=null){if(!o||!Ci)return;const n=s||new Z(15258817);ih(o,e,t,n),Math.random()<(e?.7:.3)*t&&ah(o,e,t,n),sh(o,e,t)}function $r(o,e,t,s=null){if(!o||!Ci)return;const n=s||new Z(15258817),i=t===2?40:25,a=t===2?15:8,r=t===2?1.5:1;th(o,e,i,n,r),nh(o,e,a,n,r),oh(o,e,t)}function th(o,e,t,s,n){if(oe){for(let i=0;i<t;i++){let a,r=!1;Se.length>=Vo?(a=0,r=!0):a=Se.length;const l=i/t*Math.PI*2+Math.random()*.3,c=e*(.5+Math.random()*.5),d=new P(o.x+Math.cos(l)*c,o.y+Math.random()*.3,o.z+Math.sin(l)*c),f=(2.5+Math.random()*2)*n,u=(3+Math.random()*2.5)*n,p=new P(Math.cos(l)*f,u,Math.sin(l)*f),h=Math.random()<.25,m=Math.random()*Math.PI*2,v=1+Math.random()*.8,y=h?new P(Math.cos(m)*v,0,Math.sin(m)*v):null,w={instanceIndex:a,position:d.clone(),velocity:p,life:0,maxLife:sc*(1+Math.random()*.5),initialSize:.45*(.8+Math.random()*.6),color:s.clone(),isFloating:h,windDirection:y};r?Se[0]=w:Se.push(w),dt.set(w.initialSize,w.initialSize,w.initialSize),He.compose(d,Xn,dt),oe.setMatrixAt(a,He),Hn[a]=.4,oe.geometry.attributes.instanceColor.setXYZ(a,s.r,s.g,s.b),oe.count=Se.length}oe.instanceMatrix.needsUpdate=!0,oe.geometry.attributes.instanceOpacity.needsUpdate=!0,oe.geometry.attributes.instanceColor.needsUpdate=!0}}function nh(o,e,t,s,n){if(se){for(let i=0;i<t;i++){let a,r=!1;Ce.length>=Yo?(a=0,r=!0):a=Ce.length;const l=i/t*Math.PI*2+Math.random()*.4,c=e*(.3+Math.random()*.7),d=new P(o.x+Math.cos(l)*c,o.y+.2,o.z+Math.sin(l)*c),f=(3+Math.random()*2.5)*n,u=(4+Math.random()*3)*n,p=new P(Math.cos(l)*f,u,Math.sin(l)*f),h=new P((Math.random()-.5)*15,(Math.random()-.5)*15,(Math.random()-.5)*15),m={instanceIndex:a,position:d.clone(),velocity:p,angularVelocity:h,rotation:new wi(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),life:0,maxLife:ic*(1+Math.random()*.5),initialSize:.5*(.7+Math.random()*.6),color:s.clone().multiplyScalar(.85),onGround:!1,groundTime:0};r?Ce[0]=m:Ce.push(m),Xn.setFromEuler(m.rotation),dt.set(m.initialSize,m.initialSize,m.initialSize),He.compose(d,Xn,dt),se.setMatrixAt(a,He),Gn[a]=.95,se.geometry.attributes.instanceColor.setXYZ(a,m.color.r,m.color.g,m.color.b),se.count=Ce.length}se.instanceMatrix.needsUpdate=!0,se.geometry.attributes.instanceOpacity.needsUpdate=!0,se.geometry.attributes.instanceColor.needsUpdate=!0}}function oh(o,e,t){if(!me)return;me.position.set(o.x,o.y+.1,o.z),me.visible=!0;const s=e*.8;me.scale.set(s,s,1),t===2?me.material.uniforms.color.value.setRGB(1,.8,.2):me.material.uniforms.color.value.setRGB(1,.5,.1),me.material.uniforms.intensity.value=t===2?1.5:1.2}function sh(o,e,t){me&&(me.position.set(o.x,o.y+.1,o.z),me.visible=!0,e?me.material.uniforms.color.value.setRGB(1,.4,.2):me.material.uniforms.color.value.setRGB(.4,.8,1),me.material.uniforms.intensity.value=Math.min(1,t*1.2))}function ih(o,e,t,s){if(!oe)return;const n=Math.floor((e?8:4)*t);for(let i=0;i<n;i++){let a,r=!1;Se.length>=Vo?(a=0,r=!0):a=Se.length;const l=Math.random()*Math.PI*2,c=e?2.5:1.5,d=e?3.5:2,f=new P(Math.cos(l)*c*(.5+Math.random()*.5),d*(.7+Math.random()*.3),Math.sin(l)*c*(.5+Math.random()*.5)),u=Math.random()*.5,p=Math.random()*Math.PI*2,h=new P(o.x+Math.cos(p)*u,o.y+Math.random()*.2,o.z+Math.sin(p)*u),m=Math.random()<.18,v=Math.random()*Math.PI*2,y=1.5+Math.random()*1,w=m?new P(Math.cos(v)*y,0,Math.sin(v)*y):null,x={instanceIndex:a,position:h.clone(),velocity:f,life:0,maxLife:sc*(.8+Math.random()*.4),initialSize:.35*(.8+Math.random()*.6),color:s.clone(),isFloating:m,windDirection:w};r?Se[0]=x:Se.push(x),dt.set(x.initialSize,x.initialSize,x.initialSize),He.compose(h,Xn,dt),oe.setMatrixAt(a,He),Hn[a]=.3,oe.geometry.attributes.instanceColor.setXYZ(a,s.r,s.g,s.b),oe.count=Se.length}oe.instanceMatrix.needsUpdate=!0,oe.geometry.attributes.instanceOpacity.needsUpdate=!0,oe.geometry.attributes.instanceColor.needsUpdate=!0}function ah(o,e,t,s){if(!se)return;const n=Math.floor((e?3:1)*t);for(let i=0;i<n;i++){let a,r=!1;Ce.length>=Yo?(a=0,r=!0):a=Ce.length;const l=Math.random()*Math.PI*2,c=1.5+Math.random()*1.5,d=new P(Math.cos(l)*c,2.5+Math.random()*1.5,Math.sin(l)*c),f=new P((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10),u=o.clone();u.y+=.2;const p={instanceIndex:a,position:u.clone(),velocity:d,angularVelocity:f,rotation:new wi(0,0,0),life:0,maxLife:ic*(.8+Math.random()*.4),initialSize:.4*(.8+Math.random()*.4),color:s.clone().multiplyScalar(.8),onGround:!1,groundTime:0};r?Ce[0]=p:Ce.push(p),dt.set(p.initialSize,p.initialSize,p.initialSize),He.compose(u,Xn,dt),se.setMatrixAt(a,He),Gn[a]=.9,se.geometry.attributes.instanceColor.setXYZ(a,p.color.r,p.color.g,p.color.b),se.count=Ce.length}se.instanceMatrix.needsUpdate=!0,se.geometry.attributes.instanceOpacity.needsUpdate=!0,se.geometry.attributes.instanceColor.needsUpdate=!0}function Dp(o){rh(o),lh(o),ch(o)}function rh(o){if(!oe||Se.length===0)return;let e=!1,t=!1,s=!1;const n=-9.8*o,i=2.5*o;Aa&&qr.copy(Aa.quaternion);let a=0;for(;a<Se.length;){const r=Se[a];if(r.life+=o,r.life>=r.maxLife){const f=Se.length-1;if(a!==f){const u=Se[f];Se[a]=u,u.instanceIndex=a,oe.getMatrixAt(f,He),oe.setMatrixAt(a,He),Hn[a]=Hn[f];const p=oe.geometry.attributes.instanceColor;p.setXYZ(a,p.getX(f),p.getY(f),p.getZ(f)),s=!0,e=!0,t=!0}Se.pop(),oe.count=Se.length;continue}r.isFloating?(r.velocity.y+=i,r.windDirection&&(r.velocity.x+=r.windDirection.x*o,r.velocity.z+=r.windDirection.z*o)):r.velocity.y+=n,r.velocity.multiplyScalar(.95),r.position.x+=r.velocity.x*o,r.position.y+=r.velocity.y*o,r.position.z+=r.velocity.z*o;const l=r.life/r.maxLife,c=.23*(1-l),d=r.initialSize*(1+l*2);dt.set(d,d,d),He.compose(r.position,qr,dt),oe.setMatrixAt(r.instanceIndex,He),e=!0,Hn[r.instanceIndex]=c,t=!0,a++}e&&(oe.instanceMatrix.needsUpdate=!0),t&&(oe.geometry.attributes.instanceOpacity.needsUpdate=!0),s&&(oe.geometry.attributes.instanceColor.needsUpdate=!0)}function lh(o){if(!se||Ce.length===0)return;let e=!1,t=!1,s=!1;const n=-9.8*o;let i=0;for(;i<Ce.length;){const a=Ce[i];if(a.life+=o,a.life>=a.maxLife){const c=Ce.length-1;if(i!==c){const d=Ce[c];Ce[i]=d,d.instanceIndex=i,se.getMatrixAt(c,He),se.setMatrixAt(i,He),Gn[i]=Gn[c];const f=se.geometry.attributes.instanceColor;f.setXYZ(i,f.getX(c),f.getY(c),f.getZ(c)),s=!0,e=!0,t=!0}Ce.pop(),se.count=Ce.length;continue}if(a.onGround)a.groundTime+=o,a.life+=o*2;else{a.velocity.y+=n,a.position.x+=a.velocity.x*o,a.position.y+=a.velocity.y*o,a.position.z+=a.velocity.z*o,a.rotation.x+=a.angularVelocity.x*o,a.rotation.y+=a.angularVelocity.y*o,a.rotation.z+=a.angularVelocity.z*o,a.angularVelocity.multiplyScalar(.95);const c=-1;a.position.y<=c&&(a.position.y=c,Math.abs(a.velocity.y)<2?(a.onGround=!0,a.velocity.set(0,0,0),a.angularVelocity.set(0,0,0)):(a.velocity.y*=-.3,a.velocity.x*=.5,a.velocity.z*=.5))}const l=.9*(1-a.life/a.maxLife);Xn.setFromEuler(a.rotation),dt.set(a.initialSize,a.initialSize,a.initialSize),He.compose(a.position,Xn,dt),se.setMatrixAt(a.instanceIndex,He),e=!0,Gn[a.instanceIndex]=l,t=!0,i++}e&&(se.instanceMatrix.needsUpdate=!0),t&&(se.geometry.attributes.instanceOpacity.needsUpdate=!0),s&&(se.geometry.attributes.instanceColor.needsUpdate=!0)}function ch(o){if(!me)return;const e=me.material.uniforms.intensity.value;if(e>0){const t=e-o*eh;me.material.uniforms.intensity.value=Math.max(0,t),t<=0&&(me.visible=!1)}}const gt=new Z,vt=new Z,ia=new Z,Jr=new Z(15258817);function Te(o,e){return o.setRGB(e.value.x,e.value.y,e.value.z)}function mo(o,e){if(!o||!e)return ia.copy(Jr);const t=o.material;if(!t||!t.uniforms)return ia.copy(Jr);const s=t.uniforms,n=e.y;let i;return n<-16?(i=Math.max(0,Math.min(1,(n+16)/6)),i=i*i*(3-2*i),Te(gt,s.oceanDeepColor),Te(vt,s.oceanMidColor)):n<-10?(i=(n+16)/6,Te(gt,s.oceanDeepColor),Te(vt,s.oceanMidColor)):n<-4?(i=(n+10)/6,Te(gt,s.oceanMidColor),Te(vt,s.deepColor)):n<-3?(i=(n+4)/1,Te(gt,s.deepColor),Te(vt,s.shallowColor)):n<-1?(i=(n+3)/2,Te(gt,s.shallowColor),Te(vt,s.lowColor)):n<.5?(i=(n+1)/1.5,Te(gt,s.lowColor),Te(vt,s.midLowColor)):n<1.5?(i=(n-.5)/1,Te(gt,s.midLowColor),Te(vt,s.midColor)):n<2.5?(i=(n-1.5)/1,Te(gt,s.midColor),Te(vt,s.midHighColor)):n<3.5?(i=(n-2.5)/1,Te(gt,s.midHighColor),Te(vt,s.highColor)):(i=Math.min((n-3.5)/2,1),Te(gt,s.highColor),Te(vt,s.peakColor)),ia.copy(gt).lerp(vt,i)}function Ip(){Ci&&(Se=[],Ce=[],oe&&(oe.count=0),se&&(se.count=0),me&&(me.visible=!1,me.material.uniforms.intensity.value=0))}const Ht=14,Lt=8,Ps=3,Vs=0,ss=2,is=80,Qr=-8,uh=80,dh=-104,fh=.88,el=.3,kn=.22,ac=200,hh=.982,rc=-19,oo=.03,ph=.0262,so=.07,tl=.018,Da=kn*1.6,mh=Da*Da,Ls=new Map;let nl=-1,ko=1,lc=1,cc=1;function ol(o){o!==nl&&(nl=o,ko=Math.pow(hh,o*60),lc=Math.pow(fh,o*60),cc=Math.pow(.96,o*60))}function gh(o){if(Ls.has(o))return Ls.get(o);const e=new Float32Array(o),t=new Float32Array(o),s=new Float32Array(o),n=new Float32Array(o);for(let i=0;i<o;i++){const a=i/(o-1);e[i]=Math.pow(1-a,.6),t[i]=Math.pow(Math.max(0,1-a*5),1.5)*2.2,s[i]=(1-a)*.85,n[i]=(1-a)*.42}return Ls.set(o,{taper:e,cut:t,colG:s,colB:n}),Ls.get(o)}function Os(o=Ht){const e=o*2,t=(o-1)*6,s=new ze(new Float32Array(e*3),3);s.usage=Fr;const n=new ze(new Float32Array(e*3),3);n.usage=Fr;const i=new Uint16Array(t);for(let r=0;r<o-1;r++){const l=r*6,c=r*2;i[l]=c,i[l+1]=c+1,i[l+2]=c+2,i[l+3]=c+1,i[l+4]=c+3,i[l+5]=c+2}const a=new _n;return a.setAttribute("position",s),a.setAttribute("color",n),a.setIndex(new ze(i,1)),a}function Fs(o,e,t,s=Ht,n=0,i=0,a=1){return Array.from({length:s},(r,l)=>({x:o+n*l*kn,y:e+i*l*kn,z:t+a*l*kn,vx:0,vy:0,vz:0}))}function Ns(o,e,t,s,n,i,a=ac,r=rc){o[0].x=e,o[0].y=t,o[0].z=s,o[0].vx=0,o[0].vy=0,o[0].vz=0;for(let l=1;l<o.length;l++){const c=o[l],d=o[l-1],f=d.x-c.x,u=d.y-c.y,p=d.z-c.z,h=Math.sqrt(f*f+u*u+p*p)||1e-5,m=(h-kn)*a;c.vx=(c.vx+f/h*m*n)*i,c.vy=(c.vy+(u/h*m+r)*n)*i,c.vz=(c.vz+p/h*m*n)*i,c.x+=c.vx*n,c.y+=c.vy*n,c.z+=c.vz*n;const v=c.x-d.x,y=c.y-d.y,w=c.z-d.z,x=v*v+y*y+w*w;if(x>mh){const g=Da/Math.sqrt(x);c.x=d.x+v*g,c.y=d.y+y*g,c.z=d.z+w*g}}}function zs(o,e,t,s,n,i,a=ph){if(e.setDrawRange(0,Math.max(0,i-1)*6),i<2)return;const r=e.attributes.position.array,l=e.attributes.color.array,{taper:c,cut:d,colG:f,colB:u}=gh(i),p=e._lastColorCount!==i;p&&(e._lastColorCount=i);for(let h=0;h<i;h++){const m=a*c[h],{x:v,y,z:w}=o[h],x=d[h]*a,g=h*6,T=g+3;r[g]=v-t*m*s,r[g+1]=y-t*m*n-x,r[g+2]=w,r[T]=v+t*m*s,r[T+1]=y+t*m*n+x,r[T+2]=w,p&&(l[g]=0,l[g+1]=f[h],l[g+2]=u[h],l[T]=0,l[T+1]=f[h],l[T+2]=u[h])}e.attributes.position.needsUpdate=!0,p&&(e.attributes.color.needsUpdate=!0)}class Ia{constructor(){this._model=null,this._mixer=null,this._action=null,this._scene=null,this._shadowClones=[],this.birdY=23,this.velocityY=0,this._controlEnabled=!1,this._isMouseDown=!1,this._isShiftPressed=!1,this._isRightMouseDown=!1,this._activeTouchCount=0,this._inputListeners=[],this._timeSinceInput=0,this._soarFlapTimer=0,this._soarFlapBurst=!1,this._soarFlapBurstTimer=0,this._wasInSoarMode=!1,this._soarRockPhase=0,this._soarDriftPhase=0,this._rollActive=!1,this._rollAngle=0,this._cloneUpdateFrame=0,this._secondaryModel=null,this._secondaryMixer=null,this._secondaryAction=null,this._secondaryYOffset=.002,this._secondaryXOffset=.14,this._secondaryBaseRotZ=-.05,this._leftFeatherMesh=null,this._rightFeatherMesh=null,this._featherGeomL=null,this._featherGeomR=null,this._chainL=[],this._chainR=[],this._leftFeatherMesh2=null,this._rightFeatherMesh2=null,this._featherGeomL2=null,this._featherGeomR2=null,this._chainL2=[],this._chainR2=[],this._blueSeedDecor=null,this._redSeedDecor=null}get model(){return this._model}get isControlEnabled(){return this._controlEnabled}get isRolling(){return this._rollActive}enableControl(){this._controlEnabled=!0}disableControl(){this._controlEnabled=!1}keepFlapping(){this._timeSinceInput=0}snapChainTrail(e,t){if(!this._chainL)return;const s=this._model?this._model.position.x:0,n=this._model?this._model.position.y:0,i=this._model?this._model.position.z:0;for(const a of[this._chainL,this._chainR,this._chainL2,this._chainR2])for(let r=0;r<a.length;r++)a[r].x=s+r*kn*e,a[r].y=n,a[r].z=i+r*kn*t,a[r].vx=0,a[r].vy=0,a[r].vz=0}dampenChain(){for(const e of[this._chainL,this._chainR,this._chainL2,this._chainR2])if(e)for(let t=1;t<e.length;t++)e[t].vx=0,e[t].vy=0,e[t].vz=0}triggerRoll(){this._rollActive=!0,this._rollAngle=0,this.velocityY+=18}load(e){return new Promise((t,s)=>{const n=new Mr;Promise.all([new Promise((i,a)=>n.load("./models/synthwave-bird.glb",i,void 0,a)),new Promise((i,a)=>n.load("./models/synth-brd-remesh-anim-1.glb",i,void 0,a))]).then(([i,a])=>{this._scene=e,this._model=i.scene,this._model.scale.setScalar(1.4),this._model.rotation.y=0,this._model.visible=!1,e.add(this._model),this._model.traverse(h=>{h.material&&(Array.isArray(h.material)?h.material:[h.material]).forEach(v=>{v.color&&v.color.set(65442)})}),this._secondaryModel=a.scene,this._secondaryModel.scale.setScalar(1.36),this._secondaryModel.rotation.y=0,this._secondaryModel.visible=!1,e.add(this._secondaryModel);const r=new Qo({color:new Z(20991),emissive:new Z(5223423),emissiveIntensity:.2,transparent:!0,opacity:.4,depthWrite:!1,roughness:.3});this._secondaryModel.traverse(h=>{h.isMesh&&(h.material=r)}),a.animations?.length>0&&(this._secondaryMixer=new Uo(this._secondaryModel),this._secondaryAction=this._secondaryMixer.clipAction(a.animations[0]),this._secondaryAction.play());const l=[{scale:1.4*.94,color:27433,opacity:.92,renderOrder:97,lineWidth:3},{scale:1.4*1.04,color:15673,opacity:.75,renderOrder:96,lineWidth:5}],c=(h,m)=>{const v=h.clone();v.computeBoundingBox();const y=v.boundingBox.min.y,w=v.boundingBox.max.y-y||1,x=v.attributes.position,g=new Float32Array(x.count*3),T=new Z(m);for(let C=0;C<x.count;C++){const R=.15+(x.getY(C)-y)/w*.85;g[C*3]=T.r*R,g[C*3+1]=T.g*R,g[C*3+2]=T.b*R}return v.setAttribute("color",new ze(g,3)),v};for(let h=0;h<l.length;h++){const m=l[h],v=wr(i.scene);v.scale.setScalar(m.scale),v.visible=!1;const y=[];v.traverse(g=>{if(g.isLine||g.isLineSegments){const T=c(g.geometry,m.color);g.geometry=T,g.material=new Bl({color:m.color,transparent:!0,opacity:m.opacity,depthWrite:!1,vertexColors:!0}),g.renderOrder=m.renderOrder,y.push(g.material)}else g.isMesh&&(g.material=new Xe({color:m.color,transparent:!0,opacity:m.opacity,depthWrite:!1}),y.push(g.material))});let w=null,x=null;i.animations?.length>0&&(w=new Uo(v),x=w.clipAction(i.animations[0]),x.play()),e.add(v),this._shadowClones.push({mesh:v,ox:0,oy:0,oz:0,mixer:w,action:x,materials:y,baseOpacity:m.opacity,pulsePhase:h*2.1})}const d=document.createElement("canvas");d.width=d.height=128;const f=d.getContext("2d"),u=f.createRadialGradient(64,64,0,64,64,64);u.addColorStop(0,"rgba(0, 255, 247, 0.25)"),u.addColorStop(.25,"rgba(0, 220, 220, 0.1)"),u.addColorStop(1,"rgba(0, 132, 180, 0)"),f.fillStyle=u,f.fillRect(0,0,128,128);const p=new Uu(new Vu({map:new Ao(d),transparent:!0,blending:qt,depthWrite:!1}));p.scale.set(2.5,2,.8),p.renderOrder=99,this._model.add(p),this._createSeeds(),i.animations?.length>0&&(this._mixer=new Uo(this._model),this._action=this._mixer.clipAction(i.animations[0]),this._action.play()),t(this._model)},void 0,s)})}initFeathers(e,t,s,n,i=0,a=0,r=1){this._chainL=Fs(t-oo,s,n,Ht,i,a,r),this._chainR=Fs(t+oo,s,n,Ht,i,a,r),this._chainL2=Fs(t-so,s,n,Lt,i,a,r),this._chainR2=Fs(t+so,s,n,Lt,i,a,r);const l=new Xe({vertexColors:!0,transparent:!0,opacity:.88,side:Ne,depthWrite:!1,blending:qt});this._featherGeomL=Os(),this._featherGeomR=Os(),this._leftFeatherMesh=new we(this._featherGeomL,l),this._rightFeatherMesh=new we(this._featherGeomR,l.clone()),this._leftFeatherMesh.renderOrder=this._rightFeatherMesh.renderOrder=101,this._leftFeatherMesh.frustumCulled=this._rightFeatherMesh.frustumCulled=!1,e.add(this._leftFeatherMesh),e.add(this._rightFeatherMesh);const c=new Xe({vertexColors:!0,transparent:!0,opacity:.65,side:Ne,depthWrite:!1,blending:qt});this._featherGeomL2=Os(Lt),this._featherGeomR2=Os(Lt),this._leftFeatherMesh2=new we(this._featherGeomL2,c),this._rightFeatherMesh2=new we(this._featherGeomR2,c.clone()),this._leftFeatherMesh2.renderOrder=this._rightFeatherMesh2.renderOrder=100,this._leftFeatherMesh2.frustumCulled=this._rightFeatherMesh2.frustumCulled=!1,e.add(this._leftFeatherMesh2),e.add(this._rightFeatherMesh2)}setupInputHandlers(){const e=(c,d,f,u)=>{c.addEventListener(d,f,u),this._inputListeners.push({target:c,type:d,handler:f,opts:u})},t=c=>{c.button===0&&(this._isMouseDown=!0),c.button===2&&(this._isRightMouseDown=!0)},s=c=>{c.button===0&&(this._isMouseDown=!1),c.button===2&&(this._isRightMouseDown=!1)},n=c=>{c.key==="Shift"&&(this._isShiftPressed=!0)},i=c=>{c.key==="Shift"&&(this._isShiftPressed=!1)},a=c=>{this._activeTouchCount=c.touches.length},r=c=>{this._activeTouchCount=c.touches.length},l=c=>c.preventDefault();e(window,"mousedown",t),e(window,"mouseup",s),e(window,"keydown",n),e(window,"keyup",i),e(window,"touchstart",a,{passive:!0}),e(window,"touchend",r,{passive:!0}),e(window,"contextmenu",l)}removeInputHandlers(){this._inputListeners.forEach(({target:e,type:t,handler:s,opts:n})=>{e.removeEventListener(t,s,n)}),this._inputListeners=[],this._isMouseDown=!1,this._isShiftPressed=!1,this._isRightMouseDown=!1,this._activeTouchCount=0}updateAnimation(e){if(this._mixer){if(this._rollActive)this._wasInSoarMode=!1,this._mixer.timeScale+=(.2-this._mixer.timeScale)*Math.min(1,e*5),this._mixer.update(e);else if(this._timeSinceInput>.4){!this._wasInSoarMode&&this._action&&(this._action.time=el,this._mixer.timeScale=0,this._mixer.update(0),this._soarRockPhase=Math.random()*Math.PI*2,this._soarDriftPhase=Math.random()*Math.PI*2),this._wasInSoarMode=!0,this._soarRockPhase=(this._soarRockPhase||0)+e*.6;const t=Math.sin(this._soarRockPhase)*.22,s=Math.cos(this._soarRockPhase*.8)*.05;this._soarDriftPhase=(this._soarDriftPhase||0)+e*.4;const n=Math.sin(this._soarDriftPhase)*.15,i=Math.sin(this._soarDriftPhase*.5)*.08;this._model&&(this._model.rotation.x=s,this._model.rotation.z=t,this._model.position.x+=n*e,this._model.position.z+=i*e),this._soarFlapTimer+=e,this._soarFlapTimer>=2.5&&!this._soarFlapBurst&&(this._soarFlapBurst=!0,this._soarFlapBurstTimer=0,this._soarFlapTimer=0),this._soarFlapBurst&&(this._soarFlapBurstTimer+=e,this._soarFlapBurstTimer>=.45&&(this._soarFlapBurst=!1,this._action&&(this._action.time=el,this._mixer.update(0)))),this._mixer.timeScale=this._soarFlapBurst?2:0,this._mixer.update(e)}else{this._wasInSoarMode=!1;const t=this._model?Math.max(0,Math.min(1,(-this._model.rotation.x-.5)/.4)):0,s=(1+Math.max(-.55,Math.min(1,this.velocityY*.045)))*(1-t);this._mixer.timeScale+=(s-this._mixer.timeScale)*Math.min(1,e*5),this._mixer.update(e)}if(this._cloneUpdateFrame=(this._cloneUpdateFrame+1)%3,this._cloneUpdateFrame===0){this._secondaryMixer&&this._secondaryAction&&this._action&&(this._secondaryMixer.timeScale=this._mixer.timeScale,this._secondaryAction.time=this._action.time,this._secondaryMixer.update(0));for(const{action:t,mixer:s}of this._shadowClones)t&&this._action&&(t.time=this._action.time,s.update(0))}}}updateFeathers(e,t=Ht,s=Lt,n=0,i=0,a=0,r=0,l=34,c=ac,d=rc){if(this._model&&this._shadowClones.length){const x=this._model.position.x,g=this._model.position.y,T=this._model.position.z;for(const{mesh:C,ox:b,oy:R,oz:S}of this._shadowClones)C.visible=this._model.visible,C.position.set(x+b,g+R,T+S),C.rotation.copy(this._model.rotation)}if(this._secondaryModel&&this._model&&(this._secondaryModel.visible=this._model.visible,this._secondaryModel.position.copy(this._model.position),this._secondaryModel.position.y+=this._secondaryYOffset,this._secondaryModel.position.z+=this._secondaryXOffset,this._secondaryModel.rotation.copy(this._model.rotation),this._secondaryModel.rotation.z+=this._secondaryBaseRotZ),!this._leftFeatherMesh||!this._model)return;const f=this._model.visible;if(this._leftFeatherMesh.visible=f,this._rightFeatherMesh.visible=f,this._leftFeatherMesh2.visible=f,this._rightFeatherMesh2.visible=f,!f)return;if(n!==0){const x=n*e;for(const g of[this._chainL,this._chainR,this._chainL2,this._chainR2])for(const T of g)T.z-=x}const u=Math.sqrt(i*i+r*r);if(u>.5){const x=-i/u*l*e,g=-r/u*l*e;for(const T of[this._chainL,this._chainR,this._chainL2,this._chainR2])for(let C=1;C<T.length;C++)T[C].vx+=x,T[C].vz+=g}const p=this._model.rotation.z,h=Math.cos(p),m=Math.sin(p),v=this._model.position.x,y=this._model.position.y-.04,w=this._model.position.z;ol(e),Ns(this._chainL,v-oo*h,y-oo*m,w,e,ko,c,d),Ns(this._chainR,v+oo*h,y+oo*m,w,e,ko,c,d),this._chainL2.length&&Ns(this._chainL2,v-so*h,y-so*m,w,e,ko,c,d),this._chainR2.length&&Ns(this._chainR2,v+so*h,y+so*m,w,e,ko,c,d),zs(this._chainL,this._featherGeomL,-1,h,m,t),zs(this._chainR,this._featherGeomR,1,h,m,t),zs(this._chainL2,this._featherGeomL2,-1,h,m,s,tl),zs(this._chainR2,this._featherGeomR2,1,h,m,s,tl)}updateSeeds(e){if(!this._blueSeedDecor)return;const t=.05+e*.95;this._blueSeedDecor.scale.setScalar(t),this._blueSeedDecor.material.emissiveIntensity=e*5,this._redSeedDecor.scale.setScalar(t),this._redSeedDecor.material.emissiveIntensity=e*5}applyPhysics(e){if(!this._controlEnabled||!this._model)return;const t=this._isUpInput()||this._isLowerInput();t?(this._timeSinceInput=0,this._soarFlapTimer=0,this._soarFlapBurst=!1):this._timeSinceInput+=e,this._isUpInput()&&(this.velocityY+=uh*e),this._isLowerInput()&&(this.velocityY+=dh*e);const s=!t&&this.velocityY>0;this.velocityY+=(s?Qr*.15:Qr)*e,ol(e),this.velocityY*=s?cc:lc,this.birdY+=this.velocityY*e,this.birdY=Math.max(ss,Math.min(is,this.birdY)),(this.birdY<=ss||this.birdY>=is)&&(this.velocityY=0);const n=Math.max(-.9,Math.min(.45,this.velocityY*.1));this._model.rotation.x+=(n-this._model.rotation.x)*Math.min(1,e*1.5),this._rollActive?(this._rollAngle+=Math.PI*2/.65*e,this._rollAngle>=Math.PI*2&&(this._rollActive=!1,this._rollAngle=0),this._model.rotation.z=this._rollAngle):this._model.rotation.z=Math.max(-.2,Math.min(.2,-this.velocityY*.03))}dispose(e){for(const{mesh:t,mixer:s}of this._shadowClones)s&&s.stopAllAction(),e.remove(t),t.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(i=>i.dispose()):n.material.dispose())});this._shadowClones=[],this._model&&(e.remove(this._model),this._model.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(s=>s.dispose()):t.material.dispose())}),this._model=null),this._secondaryModel&&(this._secondaryMixer&&this._secondaryMixer.stopAllAction(),e.remove(this._secondaryModel),this._secondaryModel.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(s=>s.dispose()):t.material.dispose())}),this._secondaryModel=null,this._secondaryMixer=null,this._secondaryAction=null);for(const t of[this._leftFeatherMesh,this._rightFeatherMesh,this._leftFeatherMesh2,this._rightFeatherMesh2])t&&(e.remove(t),t.geometry?.dispose(),t.material?.dispose());this._leftFeatherMesh=this._rightFeatherMesh=null,this._leftFeatherMesh2=this._rightFeatherMesh2=null,this._featherGeomL=this._featherGeomR=null,this._featherGeomL2=this._featherGeomR2=null,this._chainL=this._chainR=this._chainL2=this._chainR2=[],this._mixer=null,this._action=null,this._blueSeedDecor=null,this._redSeedDecor=null}_isUpInput(){return this._isMouseDown&&!this._isLowerInput()||this._activeTouchCount===1}_isLowerInput(){return this._isShiftPressed||this._isRightMouseDown||this._activeTouchCount>=2}_createSeeds(){const e=(t,s)=>{const n=new we(new Yu(s,12),new Qo({color:16711680,emissive:new Z(t),emissiveIntensity:0,transparent:!0,opacity:.9,depthWrite:!1}));return n.rotation.x=-Math.PI/2,n};this._blueSeedDecor=e(65322,[new pe(0,-.22),new pe(.032,-.14),new pe(.062,-.04),new pe(.068,.03),new pe(.064,.11),new pe(.054,.2),new pe(.038,.29),new pe(.018,.36),new pe(0,.4)]),this._redSeedDecor=e(16729122,[new pe(0,-.18),new pe(.026,-.11),new pe(.052,-.03),new pe(.057,.02),new pe(.053,.09),new pe(.044,.17),new pe(.03,.25),new pe(.013,.31),new pe(0,.34)]),this._blueSeedDecor.position.set(0,-.03,-.15),this._redSeedDecor.position.set(0,-.04,-.15),this._model.add(this._blueSeedDecor),this._model.add(this._redSeedDecor)}}function Ep(o){return o*o*o}function sl(o){if(o<.5)return 4*o*o*o;const e=-2*o+2;return 1-e*e*e/2}function vh(o){let e=o>>>0;return()=>(e=Math.imul(1664525,e)+1013904223>>>0,e/4294967295)}const yh=142,wh=142,il=20,Mh=1,al=3,xh=1.8,_h=10,ms=220,Pp=ms+20,mn=22,wo=ms-10;function Th(o){const e=[],t=[],s=[],n=[],i=[];o.traverse(a=>{!a.isMesh||!a.material||(a.userData.spawnOpacity=a.material.opacity,a.userData.rotationSpeed!==void 0?(e.push(a),n.push(a)):a.userData.isBaseRing||a.userData.isTurboGlow?n.push(a):a.userData.isConvergingRing?(t.push(a),i.push(a)):a.userData.isConvergingChevron&&(s.push(a),i.push(a)))}),o.userData._blades=e,o.userData._cRings=t,o.userData._cChevrons=s,o.userData._staticMeshes=n,o.userData._dynamicMeshes=i}function uc(o){o.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(s=>{for(const n of Object.values(s))n&&n.isTexture&&n.dispose();s.dispose()})})}function Sh(o,e,t){e.remove(o);const s=t.indexOf(o);s!==-1&&t.splice(s,1),uc(o)}function _r(o,e,t=Math.random){const s=[];for(let n=0;n<o;n++)s.push(!1);for(let n=0;n<e;n++)s.push(!0);for(let n=s.length-1;n>0;n--){const i=Math.floor(t()*(n+1));[s[n],s[i]]=[s[i],s[n]]}return s}const Ch=`
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
`,bh=`
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
`;function ni(o,e,t,s,n,i,a,r=0,l=!1){const f=new Z(o?16720384:43775),u=new Z(o?16746581:8969727),p=new Float32Array(180),h=new Float32Array(180),m=new Float32Array(180),v=new Float32Array(60),y=new Float32Array(60);for(let C=0;C<60;C++){p[C*3]=e,p[C*3+1]=t,p[C*3+2]=s,y[C]=Math.random()*Math.PI*2;const b=l?12+Math.random()*20:15+Math.random()*30,R=8+Math.random()*16,S=Math.random()*Math.PI*2;l?(m[C*3]=Math.cos(S)*R,m[C*3+1]=b,m[C*3+2]=Math.sin(S)*R*.7):(m[C*3]=Math.cos(S)*R,m[C*3+1]=Math.sin(S)*R*.7,m[C*3+2]=-b);const A=Math.random()<.6?f:u;h[C*3]=A.r,h[C*3+1]=A.g,h[C*3+2]=A.b,v[C]=.8+Math.random()*Math.random()*3.5}const w=new _n;w.setAttribute("position",new ze(p,3)),w.setAttribute("aColor",new ze(h,3)),w.setAttribute("aSize",new ze(v,1)),w.setAttribute("aVelocity",new ze(m,3)),w.setAttribute("aFlickerPhase",new ze(y,1));const x=new et({vertexShader:Ch,fragmentShader:bh,uniforms:{uOpacity:{value:1},uElapsed:{value:0},uApproachSpeed:{value:r},uUpwardBurst:{value:l?1:0}},transparent:!0,depthWrite:!1,blending:qt}),g=new Mi(w,x);n.add(g),i.push(g);let T=0;a.push({done:!1,update(C){if(T+=C,x.uniforms.uElapsed.value=T,x.uniforms.uOpacity.value=Math.max(0,1-(T/2)**2),T>=2){g.parent&&n.remove(g);const b=i.indexOf(g);b!==-1&&i.splice(b,1),w.dispose(),x.dispose(),this.done=!0}}})}let Ea=!1;function Rh(o){Dl(),tu(o),Ea=!1}function Ah(o,e,t){Il(o/e*100,{currentMass:o,totalMass:e,winPercentage:t}),o>=Math.ceil(e*t)&&(El(),Ea||(Ea=!0,bl())),Pl()}function Dh(){Dl()}function dc(o,e){for(let t=o.length-1;t>=0;t--)o[t].update(e),o[t].done&&o.splice(t,1)}function Ih(o,e,{birdZ:t,birdWorldY:s,ringSpeed:n,approachSpeed:i=0,scene:a,trackingArray:r,onHit:l,onMiss:c}){for(let f=o.length-1;f>=0;f--){const u=o[f];u.position.z+=(n-i)*e,u.userData.animTime+=e;const p=u.userData.animTime;u.userData.collected&&(u.userData.collectedTime+=e);const h=u.userData.collectedTime;u.rotation.z+=(u.userData.isLower?-.5:.5)*e;const m=u.userData.collected?2:1;for(const w of u.userData._blades)w.rotation.z+=w.userData.rotationSpeed*e*60*m,u.userData.collected&&(w.material.color.setHex(16763904),w.material.opacity=w.userData.baseOpacity*(.85+Math.sin(h*8)*.15)*1.3);for(const w of u.userData._cRings){const x=(p-w.userData.animationOffset)%1.5;if(x<0){w.material.opacity=0;continue}const g=Math.min(x/1.5,1),T=w.userData.startRadius*(1-g*.6);w.scale.set(T/w.userData.ringRadius,T/w.userData.ringRadius,1);const C=g<.15?g/.15:g>.5?(1-g)/.5:1;w.material.opacity=C*.4}for(const w of u.userData._cChevrons){const x=(p-w.userData.animationOffset)%1.5;if(x<0){w.visible=!1;continue}w.visible=!0;const g=Math.min(x/1.5,1),T=w.userData.startRadius*(1-g*.64);w.position.x=Math.cos(w.userData.angle)*T,w.position.y=Math.sin(w.userData.angle)*T;const C=1-g*.45;w.scale.set(C,C,1);const b=g<.15?g/.15:g>.5?(1-g)/.5:1;w.material.opacity=b*.7,u.userData.collected&&w.material.color.setHex(65484)}const v=t-u.position.z,y=Math.min(1,Math.max(0,1-(v-il)/(wh-il)));if(y<1){for(const w of u.userData._staticMeshes)w.material.opacity=(w.userData.spawnOpacity??w.material.opacity)*y;for(const w of u.userData._dynamicMeshes)w.material.opacity*=y}!u.userData.checked&&u.position.z>=t&&(u.userData.checked=!0,Math.abs(u.position.y-s)<u.userData.innerRadius*Mh?(u.userData.collected=!0,l?.(u.userData.isLower)):c?.()),u.position.z>t+20&&(Sh(u,a,r),o.splice(f,1))}}let lt=null,bn=null,Pe=!1,Ot=null,oi=null,fc=null,H=null,gs=[],jo=0,xn=[],Ft=0,Ln=0,tn=0,Ys=(ss+is)/2,Pa=0,as=!1,$t=0,si=0,Zn=[],rs=[],La=!1,Ko=!1,Ke=null,Ie=!1,ii=null,Mo=0,qn=null,ls=0,ai=0,xe=null,bi=23,On=23,Nt=0,Ri=new Map,dn=mn,js=ms,Xo=wo-30,Zo=!1,Ks=0;const rl=.45;let hc=0,pc=0,mc=0,gc=wo,vc=mn;function Eh(o){lt.add(o),Zn.push(o)}function st(){return H?H.birdY:23}function at(){return wo}function Ph(){if(Ft>=xn.length)return;const o=xn[Ft];Ft++;const e=Math.min(1,Pa/_h),t=al+(xh-al)*e;Pa++;const s=Wa(o);s.rotation.set(0,0,0),s.scale.setScalar(t),Th(s),s.userData.isLower=o,s.userData.innerRadius=2.2*.5*t,s.userData.checked=!1,s.userData.animTime=0,s.userData.collected=!1,s.userData.collectedTime=0,s.userData.ringIndex=Ft-1;const n=8+(Ie&&qn?qn():Math.random())*10,i=o?Math.max(ss+1,Ys-n):Math.min(is-1,Ys+n);Ys=i,s.position.set(0,mn-22+i,at()-yh),Eh(s),gs.push(s),Ie&&Ri.set(s.userData.ringIndex,s)}function Lh(o){Ln++,tn++,$t++,o?Va():Ya(),Ll(),$t>=3&&!H.isRolling&&H.isControlEnabled&&(ja(),H.triggerRoll(),$t=0),Ah(tn,Ot.ringTotal??20,Ot.winPercentage??.6),yc()}function yc(){if(!as&&!(Ft<xn.length||gs.length>0))if(tn>=si)as=!0,setTimeout(()=>{Pe&&wc()},1e3);else{const o=si-tn,e=o+Math.ceil(o*.3);xn=_r(Math.round(e*.6),Math.round(e*.4)),Ft=0}}function Oh(){const o=document.getElementById("level-story-overlay"),e=document.getElementById("level-story-text");!o||!e||(e.textContent="GO!",o.style.display="block",requestAnimationFrame(()=>{Pe&&o.classList.add("visible")}),setTimeout(()=>{Pe&&(o.classList.remove("visible"),setTimeout(()=>{o.style.display="none"},400))},650))}function wc(){H.disableControl(),Ko=!0,H.velocityY=35,Ke=document.createElement("div"),Ke.style.cssText="position:fixed;inset:0;background:black;opacity:0;pointer-events:none;transition:opacity 0.8s ease;z-index:9999;display:flex;align-items:center;justify-content:center;",document.body.appendChild(Ke);const o=fc;if(o){const e=document.createElement("p");e.textContent=o,e.style.cssText="color:rgba(255,255,255,0);font-family:var(--font-hagrid-light-italic);font-size:1.4rem;text-align:center;max-width:480px;padding:0 2rem;letter-spacing:0.03em;transition:color 1s ease;",Ke.appendChild(e),setTimeout(()=>{e&&(e.style.color="rgba(255,255,255,0.85)")},900)}setTimeout(()=>{Ke&&(Ke.style.opacity="1")},200),setTimeout(()=>{Pe&&Fh()},2e3)}function Fh(){if(!Pe)return;Pe=!1;const o=Ke;Ke=null,zh(),window.showMainMenuFromMinigame&&window.showMainMenuFromMinigame(),o&&o.parentNode&&setTimeout(()=>{o.style.transition="opacity 1.8s ease",o.style.opacity="0",setTimeout(()=>{o.parentNode&&o.parentNode.removeChild(o)},1900)},400)}function Nh(o,e){o.position.z=e.position.z}function Lp(o,e,t,s=null,n=null,i=null,a=null){if(lt=o,bn=e,Ot=t,Pe=!0,oi=n,fc=i,H=null,gs=[],jo=0,xn=[],Ft=0,Ln=0,tn=0,Pa=0,Ys=(ss+is)/2,$t=0,as=!1,si=0,Zn=[],rs=[],La=!1,Ko=!1,Ke=null,s||(e.position.set(0,mn,ms),e.lookAt(0,mn,wo-30),e.updateMatrixWorld(!0)),o.fog=new ju(9090260,18e-6),Rh(t.winPercentage??.6),s)H=s,H.birdY=13,dn=st(),H.setupInputHandlers(),H.model&&(Zo=!0,Ks=0,hc=H.model.rotation.x,pc=H.model.rotation.y,mc=H.model.rotation.z,gc=H.model.position.z,vc=e.position.y,H.model.visible=!0,H.dampenChain()),H._leftFeatherMesh&&(H._leftFeatherMesh.visible=!0),H._rightFeatherMesh&&(H._rightFeatherMesh.visible=!0),H._leftFeatherMesh2&&(H._leftFeatherMesh2.visible=!0),H._rightFeatherMesh2&&(H._rightFeatherMesh2.visible=!0);else{H=new Ia,H.birdY=13,dn=mn;const c=Ie?ls:Vs;H.initFeathers(o,c,st(),at()),H.setupInputHandlers(),H.load(o).then(()=>{if(!Pe){H.dispose(o);return}H.model.position.set(c,st(),at()),H.model.visible=!0}),Ie&&(xe=new Ia,bi=13,On=13,xe.birdY=13,xe.initFeathers(o,ai,13,at()),xe.load(o).then(()=>{if(!Pe||!xe){xe?.dispose(o),xe=null;return}xe.model.position.set(ai,On,at()),xe.model.visible=!0,xe.model.traverse(d=>{if(!d.isMesh||!d.material)return;(Array.isArray(d.material)?d.material:[d.material]).forEach(u=>{u.color&&u.color.set(16747520)})})}))}if(js=e.position.z,a?(dn=a.y,Xo=a.z):Xo=wo-30,!Pe)return;H.enableControl();const r=t.ringTotal??20,l=t.ringBlueCount??Math.round(r*.6);xn=_r(l,r-l,Ie&&qn?qn:Math.random),Ft=0,si=Math.ceil(r*(t.winPercentage??.6)),La=!0,Oh()}function Op(o){if(!Pe)return;const e=!!H?.model;let t=bn.position.y;if(Ko&&e)dn+=(st()-dn)*Math.min(1,o*880);else{const r=e?Math.max(0,H.velocityY??0)*.3:0,l=e?st()+4.5-r:mn,c=e?Math.min(0,(H.velocityY??0)*.5):0,d=e?st()+c:mn;if(t=bn.position.y+(l-bn.position.y)*Math.min(1,o*3),Zo){const f=Math.min(Ks/rl,1);t=Vt.lerp(vc,t,sl(f))}dn+=(d-dn)*Math.min(1,o*3)}if(js+=(ms-js)*Math.min(1,o*1.2),Xo+=(at()-30-Xo)*Math.min(1,o*1.5),bn.position.set(0,t,js),oi&&Nh(oi,bn),bn.lookAt(0,dn,Xo),H.updateAnimation(o),Ko){if(H.model){const r=Ie?ls:Vs;H.velocityY-=10*o,H.birdY+=H.velocityY*o,H.model.position.set(r,H.birdY,at());const l=Math.min(.45,H.velocityY*.08);H.model.rotation.x+=(l-H.model.rotation.x)*Math.min(1,o*1.5)}}else{if(H.applyPhysics(o),H.model){const r=Ie?ls:Vs;if(Zo){Ks+=o;const l=Math.min(Ks/rl,1),c=sl(l),d=Vt.lerp(gc,wo,c);H.model.position.set(r,st(),d),H.model.rotation.x=Vt.lerp(hc,0,c),H.model.rotation.y=Vt.lerp(pc,0,c),H.model.rotation.z=Vt.lerp(mc,0,c),l>=1&&(Zo=!1)}else H.model.position.set(r,st(),at())}Ie&&ii&&ii("bird_y",{y:st()})}if(Ie&&xe){On+=(bi-On)*Math.min(1,o*8),xe.birdY=On,xe.updateAnimation(o),xe.model&&xe.model.position.set(ai,On,at());const r=(xe.isControlEnabled,2),l=Math.min(Ht,r+Nt*2),c=Nt>=Ps?2:0,d=Math.min(Lt,c+Math.max(0,Nt-Ps)*2);xe.updateFeathers(o,l,d),xe.updateSeeds(Math.min(1,Nt/(Ot?.ringTotal??20)))}if(La&&!Ko){const r=Ot.ringSpawnInterval??3;jo+=o,jo>=r&&(jo=0,Ph()),Ih(gs,o,{birdZ:at(),birdWorldY:st(),ringSpeed:Ot.ringSpeed??22,approachSpeed:0,scene:lt,trackingArray:Zn,onHit:Ie?null:l=>{Lh(l),ni(l,Vs,st(),at(),lt,Zn,rs)},onMiss:Ie?null:()=>{$t=0}}),!Ie&&Ft>=xn.length&&yc()}const s=H.isControlEnabled?2:0,n=Math.min(Ht,s+Ln*2),i=Ln>=Ps?2:0,a=Math.min(Lt,i+Math.max(0,Ln-Ps)*2);H.updateFeathers(o,n,a),H.updateSeeds(Math.min(1,Ln/(Ot.ringTotal??20))),dc(rs,o)}function zh(){Pe=!1,Zo=!1,oi=null,Ie&&Hh(),Dh();const o=document.getElementById("level-story-overlay");o&&(o.classList.remove("visible"),o.style.display="none"),H&&(H.removeInputHandlers(),H.dispose(lt),H=null),Zn.forEach(e=>{e.parent&&lt.remove(e),uc(e)}),Zn=[],gs=[],rs=[],lt&&(lt.fog=null),Ke&&Ke.parentNode&&(Ke.parentNode.removeChild(Ke),Ke=null)}function Fp({send:o,playerIndex:e,seed:t}){Ie=!0,ii=o,Mo=e,qn=vh(t),ls=e===0?-3.5:3.5,ai=e===0?3.5:-3.5,Nt=0,Ri=new Map}function Hh(){xe&&lt&&(xe.dispose(lt),xe=null),Ie=!1,ii=null,qn=null,Ri=new Map,Nt=0,bi=23,On=23}function Np(o){bi=o}function Mc(){const o=Ot?.ringTotal??20,e=Ot?.winPercentage??.6,t=tn+Nt,s=Math.ceil(o*e),n=`P${Mo+1}: ${tn}`,i=`P${Mo===0?2:1}: ${Nt}`;Il(t/o*100,{currentMass:t,totalMass:o,winPercentage:e,labelOverride:`${n} + ${i} = ${t} / ${s}`}),t>=s&&(El(),bl()),Pl()}function zp(o,e,t,s){if(!Pe||!Ie)return;tn=Mo===0?t:s,Ln=tn,Nt=Mo===0?s:t;const n=Ri.get(o);n&&!n.userData.collected&&(n.userData.collected=!0),$t++,e?Va():Ya(),Ll(),$t>=3&&H&&!H.isRolling&&H.isControlEnabled&&(ja(),H.triggerRoll(),$t=0),Mc(),lt&&ni(e,ls,st(),at(),lt,Zn,rs)}function Hp(o,e,t){!Pe||!Ie||(Nt=Mo===0?t:e,$t=0,Mc())}function Gp({ringTotal:o,ringBlueCount:e}){if(!Pe||!Ie)return;const t=e??Math.round(o*.6);xn=_r(t,o-t,qn),Ft=0,jo=Ot?.ringSpawnInterval??3}function kp(){!Pe||as||(as=!0,setTimeout(()=>{Pe&&wc()},500))}let W=null,Wn=null,cs=0,us=!1;const Jt=new P;let xo=!1,cn=0,un=0,ri=!1,co=0,xc=0;const fn=new P,Kt=new P,Bn=new P,Un=new P;let li=null,ci=!1,ui=!1,go=0;const Wo=new P,di=[],ll=[];let Oa=!1;const cl=1.5,Gh=2.5,kh=10,Wh=8,_c=.81,Tc=.13;let io=Tc;const ul=288,Sc=.004;let Cc=Sc;const Fa=.75,Go=.2,Bh=30;function Uh(o){W=new Ia,Wn=o,cs=0,us=!1,W.initFeathers(o,0,0,0,0,-1,0),W._leftFeatherMesh.isPersistent=!0,W._rightFeatherMesh.isPersistent=!0,W._leftFeatherMesh2.isPersistent=!0,W._rightFeatherMesh2.isPersistent=!0,W.load(o).then(()=>{W.model.isPersistent=!0,W.model.position.set(0,0,0),W.model.visible=!0,W.updateSeeds(1),Jt.set(0,0,0),us=!0,W._secondaryModel&&(W._secondaryModel.isPersistent=!0);for(const{mesh:e}of W._shadowClones)e.isPersistent=!0})}function Vh(o){go+=o;const e=Math.min(go/Fa,1),t=W.model,s=Jt;let n=Wo.x,i=Wo.y,a=Wo.z;if(e<Go){const c=e/Go;i+=c*2.5,t.rotation.x+=(-.6*c-t.rotation.x)*Math.min(1,o*12),t.rotation.z*=Math.pow(.85,o*60)}else{const c=(e-Go)/(1-Go),d=c*c*c,f=c*Math.PI*1.5,u=2*(1-c);n+=Math.sin(f)*u,a+=Math.cos(f)*u,i=Wo.y+2.5-d*Bh;const p=n-s.x,h=a-s.z;Math.abs(p)+Math.abs(h)>2e-4&&(t.rotation.y=Math.atan2(-p,-h)),t.rotation.x+=(Math.min(1.5,c*2.8)-t.rotation.x)*Math.min(1,o*10),t.rotation.z*=Math.pow(.9,o*60)}t.position.set(n,i,a),s.set(n,i,a),!Oa&&i<=2&&e>Go&&Wn&&(Oa=!0,Yc(),ni(!1,n,-2.5,a,Wn,ll,di,0,!0),ni(!0,n,-2.5,a,Wn,ll,di,0,!0)),W.keepFlapping(),W.updateAnimation(o);const r=-Math.sin(t.rotation.y)*100,l=-Math.cos(t.rotation.y)*100;W.updateFeathers(o,Ht,Lt,0,r,0,l),W.updateSeeds(Math.max(0,1-e*1.6))}function Yh(o){if(co+=o,co<io)return!1;if(io>0&&co-o<io){if(fn.copy(W.model.position),ci){const $=cs*_c,ce=Math.cos($),he=-Math.sin($),Ge=fn;Kt.set(Ge.x+ce*70,Ge.y+68,Ge.z+he*70),Bn.set(ce*220,38,he*220),Un.set(ce*360,14,he*360),ci=!1}cn=3*(Kt.x-fn.x),un=3*(Kt.z-fn.z)}const e=xc-io,t=Math.min((co-io)/e,1),s=Math.min(t+Cc,1),n=s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,i=1-n,a=fn,r=Kt,l=Bn,c=Un,d=i*i*i*a.x+3*i*i*n*r.x+3*i*n*n*l.x+n*n*n*c.x,f=i*i*i*a.y+3*i*i*n*r.y+3*i*n*n*l.y+n*n*n*c.y,u=i*i*i*a.z+3*i*i*n*r.z+3*i*n*n*l.z+n*n*n*c.z,p=W.model,h=Jt,m=d-h.x,v=u-h.z,y=n,w=1-y,x=3*w*w*(r.x-a.x)+6*w*y*(l.x-r.x)+3*y*y*(c.x-l.x),g=3*w*w*(r.z-a.z)+6*w*y*(l.z-r.z)+3*y*y*(c.z-l.z),T=1-Math.pow(.85,o*60);cn+=(x-cn)*T,un+=(g-un)*T;let C=0;{const $=Math.abs(cn)+Math.abs(un);let ce;if(li!==null&&t>.45)ce=li;else if($>2e-4)ce=xo?Math.atan2(cn,un):Math.atan2(-cn,-un);else{const Ze=c.x-l.x,Ye=c.z-l.z;ce=Math.sqrt(Ze*Ze+Ye*Ye)>.001?xo?Math.atan2(Ze,Ye):Math.atan2(-Ze,-Ye):p.rotation.y}let he=ce-p.rotation.y;he>Math.PI&&(he-=Math.PI*2),he<-Math.PI&&(he+=Math.PI*2),C=he;const Ge=Math.abs(he)>Math.PI*.5?3:12;p.rotation.y+=he*Math.min(1,o*Ge)}const b=3*w*w*(r.y-a.y)+6*w*y*(l.y-r.y)+3*y*y*(c.y-l.y),R=Math.sqrt(x*x+g*g),S=Math.max(-1.4,Math.min(.6,-Math.atan2(b,R)));p.rotation.x+=(S-p.rotation.x)*Math.min(1,o*4);const E=Math.min(n+.02,1),k=1-E,te=k*k*k*a.x+3*k*k*E*r.x+3*k*E*E*l.x+E*E*E*c.x,ne=k*k*k*a.z+3*k*k*E*r.z+3*k*E*E*l.z+E*E*E*c.z,q=m*(ne-u)-v*(te-d),ie=Math.max(-.25,Math.min(.25,q*.4));p.rotation.z+=(ie-p.rotation.z)*Math.min(1,o*3),p.position.set(d,f,u),h.set(d,f,u);const Y=Math.max(.05,1-Math.abs(C)/Math.PI),z=Math.sqrt(x*x+g*g),De=z>2e-4?-(x/z)*100*Y:-Math.sin(p.rotation.y)*100*Y,_e=z>2e-4?-(g/z)*100*Y:-Math.cos(p.rotation.y)*100*Y;return W.keepFlapping(),W.updateAnimation(o),W.updateFeathers(o,Ht,Lt,0,De,0,_e,34,20),W.updateSeeds(1),!0}function jh(o){cs+=o;const e=cs,t=e*_c,s=Math.min(e/Gh,1),n=s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2,i=n*kh,a=Math.min(e/cl,1),r=1-(1-a)*(1-a),l=Math.max(0,Math.min(1,(e-cl)/1)),c=r*Wh+Math.sin(e*.38)*4.5*l,d=Math.sin(t)*i,f=Math.cos(t)*i,u=W.model,p=Jt,h=d-p.x,m=f-p.z,v=c-p.y;{let b=u.rotation.y%(Math.PI*2);b>Math.PI&&(b-=Math.PI*2),b<-Math.PI&&(b+=Math.PI*2),u.rotation.y=b}if(Math.abs(h)+Math.abs(m)>2e-4){let R=Math.atan2(-h,-m)-u.rotation.y;R>Math.PI&&(R-=Math.PI*2),R<-Math.PI&&(R+=Math.PI*2),u.rotation.y+=R*Math.min(1,o*8)}const y=o>0?v/o:0,w=.9*(1-a)+.3*a,x=Math.max(-w,Math.min(w,y*.06));u.rotation.x+=(x-u.rotation.x)*Math.min(1,o*5);const g=-.38*n;u.rotation.z+=(g-u.rotation.z)*Math.min(1,o*3),u.position.set(d,c,f),p.set(d,c,f);const T=-Math.sin(u.rotation.y)*100,C=-Math.cos(u.rotation.y)*100;W.keepFlapping(),W.updateAnimation(o),W.updateFeathers(o,Ht,Lt,0,T,0,C,34,160,-5),W.updateSeeds(1)}function Wp(o){if(di.length>0&&dc(di,o),!(!us||!W||!W.model)){if(ui){Vh(o);return}ri&&Yh(o)||jh(o)}}function Bp(){!W||!W.model||(ui=!0,go=0,Wo.copy(W.model.position))}function Up(o){if(!W||!W.model)return;const e=o.x,t=o.y,s=o.z;W.model.position.x+=e,W.model.position.y+=t,W.model.position.z+=s,Jt.x+=e,Jt.y+=t,Jt.z+=s,fn.x+=e,fn.y+=t,fn.z+=s,Kt.x+=e,Kt.y+=t,Kt.z+=s,Bn.x+=e,Bn.y+=t,Bn.z+=s,Un.x+=e,Un.y+=t,Un.z+=s;for(const n of[W._chainL,W._chainR,W._chainL2,W._chainR2])if(n)for(const i of n)i.x+=e,i.y+=t,i.z+=s}function Kh(o=!1){if(!(!o&&ri)){if(o&&ui&&go<Fa){const e=(Fa-go)*1e3+150;setTimeout(()=>Kh(!0),e);return}W&&Wn&&W.dispose(Wn),W=null,Wn=null,cs=0,us=!1,ri=!1,co=0,xo=!1,li=null,ui=!1,go=0,Oa=!1,ci=!1,cn=0,un=0}}function Vp({nextIslandOffset:o,flightAngle:e,duration:t,p3y:s=12,p3zOffset:n=0,ringMinigame:i=!1}){if(!W||!us){console.warn("[WinBird] startWinBirdTransition called before bird loaded — transition skipped");return}if(ri=!0,co=0,xo=!1,cn=0,un=0,xc=t/1e3,io=Tc,Cc=Sc,li=null,i)ci=!0,Kt.set(0,ul,0),Bn.set(0,50,0),Un.set(0,14,0);else{const a=o.length(),r=Math.cos(e),l=Math.sin(e),c=a*.28;Kt.set(r*c,ul,l*c),Bn.set(o.x-r*40,70,o.z-l*40),Un.set(o.x,s,o.z+n)}}function Yp(){if(xo=!xo,!W||!W.model)return;W.model.rotation.y+=Math.PI;const o=W.model.position.x-Jt.x,e=W.model.position.z-Jt.z,t=Math.sqrt(o*o+e*e);t>1e-4&&W.snapChainTrail(-o/t,-e/t)}function jp(o){return!W||!W.model?!1:(o.copy(W.model.position),!0)}const Qt=[];let aa=0;const _o=[],Vn=[];let dl=0;const Rn=[];let ds=!1;const fl=new P,Xh=new P(0,-1,0),hl=new qa,Hs=new Ku,bc=new P(0,1,0);function Rc(){if(Rn.length===0){ds=!1;return}const o=Date.now();let e=Rn.length;for(;e--;){const t=Rn[e],s=o-t.startTime;if(s<0)continue;t.object.visible||(t.object.visible=!0);const n=Math.min(s/t.duration,1),a=(1-Math.pow(1-n,3))*t.targetScale;t.object.scale.set(a,a,a),n>=1&&Rn.splice(e,1)}Rn.length>0?requestAnimationFrame(Rc):ds=!1}function Ac(o,e,t,s){Rn.push({object:o,startTime:e,duration:t,targetScale:s}),ds||(ds=!0,requestAnimationFrame(Rc))}const Zh=24,qo=[],qh=8;let fi=!1;function Dc(o){qo.push(o),fi||(fi=!0,requestAnimationFrame(Ic))}function Ic(){let o=0;for(;qo.length>0&&o<qh;)qo.shift()(),o++;qo.length>0?requestAnimationFrame(Ic):fi=!1}function ra(o){const{numPositions:e,terrainSize:t,terrainMesh:s,heightSampler:n=null,minSpacing:i,existingPositions:a=[],validHeightRange:r={min:.3,max:2.2},minSlopeDotProduct:l=.423,useClusterMode:c=!1}=o;if(n){const d=[],f=e*20,u=i*i,p=.3;let h=[];if(c){const m=Math.floor(e/6);for(let v=0;v<m;v++)h.push({x:(Math.random()-.5)*t*.8,z:(Math.random()-.5)*t*.8,radius:1.5+Math.random()*1.5})}for(let m=0;d.length<e&&m<f;m++){let v,y;if(c&&Math.random()<.7&&h.length>0){const R=h[Math.floor(Math.random()*h.length)],S=Math.random()*Math.PI*2,A=Math.random()*R.radius;v=R.x+Math.cos(S)*A,y=R.z+Math.sin(S)*A}else v=(Math.random()-.5)*t*.8,y=(Math.random()-.5)*t*.8;const w=n(v,y);if(w<r.min||w>r.max)continue;const x=n(v+p,y)-w,g=n(v,y+p)-w,T=Math.sqrt(x*x+p*p+g*g);if(p/T<l)continue;let b=!1;for(let R=0;R<a.length&&!b;R++){const S=v-a[R].x,A=y-a[R].z;S*S+A*A<u&&(b=!0)}for(let R=0;R<d.length&&!b;R++){const S=v-d[R].x,A=y-d[R].z;S*S+A*A<u&&(b=!0)}b||d.push({x:v,z:y,height:w,normal:{x:-x/T,y:p/T,z:-g/T}})}return Promise.resolve(d)}return new Promise(d=>{const f=[],u=e*20,p=i*i;let h=0,m=0,v=[];if(c){const w=Math.floor(e/6);for(let x=0;x<w;x++)v.push({x:(Math.random()-.5)*t*.8,z:(Math.random()-.5)*t*.8,radius:1.5+Math.random()*1.5})}function y(){for(m=0;f.length<e&&h<u;){if(m>=Zh){requestAnimationFrame(y);return}h++;let w,x;if(c&&Math.random()<.7&&v.length>0){const S=v[Math.floor(Math.random()*v.length)],A=Math.random()*Math.PI*2,E=Math.random()*S.radius;w=S.x+Math.cos(A)*E,x=S.z+Math.sin(A)*E}else w=(Math.random()-.5)*t*.8,x=(Math.random()-.5)*t*.8;fl.set(w,20,x),hl.set(fl,Xh);const g=hl.intersectObject(s);if(m++,g.length===0)continue;const T=g[0].point.y;if(T<r.min||T>r.max)continue;const C=g[0].face.normal;if(Hs.getNormalMatrix(s.matrixWorld),bc.dot(C.clone().applyMatrix3(Hs).normalize())<l)continue;let R=!1;for(let S=0;S<a.length&&!R;S++){const A=w-a[S].x,E=x-a[S].z;A*A+E*E<p&&(R=!0)}for(let S=0;S<f.length&&!R;S++){const A=w-f[S].x,E=x-f[S].z;A*A+E*E<p&&(R=!0)}if(!R){const S=g[0].face.normal;Hs.getNormalMatrix(s.matrixWorld);const A=S.clone().applyMatrix3(Hs).normalize();f.push({x:w,z:x,height:T,normal:{x:A.x,y:A.y,z:A.z}})}}d(f)}requestAnimationFrame(y)})}function $h(o,e="day"){o.uniforms.uIsNightTime&&(o.uniforms.uIsNightTime.value=e==="night");const t=Date.now(),s=1200,n=300,i=1400,a=()=>{const r=Date.now()-t,l=Math.min(r/s,1),c=1-Math.pow(1-l,3);if(o.uniforms.uWinGreenIntensity.value=c*.6,r>=n){const d=Math.min((r-n)/i,1),f=1-Math.pow(1-d,3);o.uniforms.uWinGreenDetailIntensity.value=f*.55}(l<1||r<n+i)&&requestAnimationFrame(a)};requestAnimationFrame(a)}function Jh(o){if(!o||!o.wetnessMap)return;const e=Date.now(),t=1800,s=200,n=()=>{const i=Date.now()-e;if(i<s){requestAnimationFrame(n);return}const a=Math.min((i-s)/t,1),r=1-Math.pow(1-a,3);o.wetnessMap.setGreenZoneWetnessIntensity(r),a<1&&requestAnimationFrame(n)};requestAnimationFrame(n)}function Na(o){const{scene:e,modelCache:t,terrainMesh:s,modelPath:n,positions:i,baseScale:a,scaleVariation:r,staggerDelay:l,growDuration:c,verticalOffset:d=-.15,startDelay:f=0}=o;if(i.length===0){console.warn(`No positions generated for ${n}, skipping model load`);return}if(!t[n]){console.warn(`Model ${n} not preloaded yet, waiting...`),setTimeout(()=>Na(o),100);return}const u=t[n],p=o.timeOfDay==="night",h=o.timeOfDay==="dusk",m=n.includes("ivory-cane-palm"),v=p?m?3.5:6.2:1,y=new Z(1.85,1.55,1.05),w=u.map(g=>{const T=g.material.clone();return p&&T.color?T.color.multiplyScalar(v):h&&T.color&&T.color.multiply(y),T}),x=Date.now();i.forEach((g,T)=>{const C=x+f+T*l,b=a+Math.random()*r,R=Math.random()*Math.PI*2;Dc(()=>{const S=new Zt;u.forEach((ie,Y)=>{const z=new we(ie.geometry,w[Y]);z.position.copy(ie.position),z.rotation.copy(ie.rotation),z.scale.copy(ie.scale),z.castShadow=ie.castShadow,z.receiveShadow=ie.receiveShadow,S.add(z)});const A=g.height,E=g.normal?new P(g.normal.x,g.normal.y,g.normal.z):new P(0,1,0);S.rotation.y=R;const k=Math.atan2(g.z,g.x),te=Math.acos(Math.max(-1,Math.min(1,bc.dot(E)))),ne=Math.PI/9,q=Math.min(te*.6,ne);S.rotation.x=Math.sin(k)*q,S.rotation.z=-Math.cos(k)*q,S.position.set(g.x,A+d,g.z),S.scale.set(0,0,0),S.visible=!1,S.userData.baseRotation={x:S.rotation.x,z:S.rotation.z},S.userData.verticalOffset=d,S.userData.targetScale=b,Qt.push(S),e.add(S),Ac(S,C,c,b)})})}function Qh(o){const{scene:e,modelCache:t,grassModelPath:s,grassTuftPositions:n,timeOfDay:i,baseScale:a=.228,scaleVariation:r=.188}=o,l=t[s],c=i==="night",d=i==="dusk",f=c?6.2:1,u=new Z(1.85,1.55,1.05),p=l.map(v=>{const y=v.material.clone();return c&&y.color?y.color.multiplyScalar(f):d&&y.color&&y.color.multiply(u),y}),h=Date.now(),m=800;n.forEach((v,y)=>{const w=h+y*20+500,x=a+Math.random()*r,g=Math.random()*Math.PI*2;Dc(()=>{const T=new Zt;l.forEach((b,R)=>{const S=new we(b.geometry,p[R]);S.position.copy(b.position),S.rotation.copy(b.rotation),S.scale.copy(b.scale),S.castShadow=!1,S.receiveShadow=!1,T.add(S)});const C=v.height;T.rotation.y=g,T.position.set(v.x,C-.05,v.z),T.scale.set(0,0,0),T.visible=!1,T.userData.verticalOffset=-.05,T.userData.targetScale=x,_o.push(T),e.add(T),Ac(T,w,m,x)})})}function Kp(o){const{scene:e,terrainMaterial:t,terrainMesh:s,terrainSize:n,modelCache:i,timeOfDay:a="day",terrain:r,heightSampler:l=null,waterSystem:c=null}=o;a==="night"?jc():Kc(),$h(t,a),Jh(r);const d=[{modelPath:"./models/win-state/palm_tree.glb",count:32,minSpacing:.612,baseScale:.224,scaleVariation:.001249,staggerDelay:60,growDuration:600,verticalOffset:-.15,startDelay:0},{modelPath:"./models/win-state/ivory-cane-palm.glb",count:18,minSpacing:.37,baseScale:.054689,scaleVariation:.04377,staggerDelay:50,growDuration:700,verticalOffset:-.0812,startDelay:150},{modelPath:"./models/win-state/olive-palm.glb",count:6,minSpacing:.64,baseScale:.18,scaleVariation:.077,staggerDelay:50,growDuration:700,verticalOffset:-.12,startDelay:200},{modelPath:"./models/win-state/lady-palm.glb",count:8,minSpacing:.6,baseScale:.048,scaleVariation:.042,staggerDelay:50,growDuration:700,verticalOffset:-.12,startDelay:200},{modelPath:"./models/win-state/bismarck-palm.glb",count:7,minSpacing:.21,baseScale:.078,scaleVariation:.062,staggerDelay:50,growDuration:700,verticalOffset:-.12,startDelay:200},{modelPath:"./models/win-state/banana-tree.glb",count:5,minSpacing:.21,baseScale:.0556,scaleVariation:.0482,staggerDelay:50,growDuration:700,verticalOffset:-.12,startDelay:200}],f=[];async function u(){const h=d[0],m=await ra({numPositions:h.count,terrainSize:n,terrainMesh:s,heightSampler:l,minSpacing:h.minSpacing,existingPositions:f});f.push(...m),Na({scene:e,modelCache:i,terrainMesh:s,modelPath:h.modelPath,positions:m,baseScale:h.baseScale,scaleVariation:h.scaleVariation,staggerDelay:h.staggerDelay,growDuration:h.growDuration,verticalOffset:h.verticalOffset,startDelay:h.startDelay,timeOfDay:a}),await Promise.all(d.slice(1).map(async v=>{const y=await ra({numPositions:v.count,terrainSize:n,terrainMesh:s,heightSampler:l,minSpacing:v.minSpacing,existingPositions:f});f.push(...y),Na({scene:e,modelCache:i,terrainMesh:s,modelPath:v.modelPath,positions:y,baseScale:v.baseScale,scaleVariation:v.scaleVariation,staggerDelay:v.staggerDelay,growDuration:v.growDuration,verticalOffset:v.verticalOffset,startDelay:v.startDelay,timeOfDay:a})}))}u();async function p(){const h=[{path:"./models/win-state/tall-grass.glb",count:10},{path:"./models/win-state/grass.glb",count:10},{path:"./models/win-state/fern.glb",count:10,baseScale:.0022,scaleVariation:.0032}];for(const m of h){if(!i[m.path]){console.warn(`Grass model ${m.path} not preloaded yet, skipping`);continue}const v=await ra({numPositions:m.count,terrainSize:n,terrainMesh:s,heightSampler:l,minSpacing:.09,useClusterMode:!0});Qh({scene:e,modelCache:i,grassModelPath:m.path,grassTuftPositions:v,timeOfDay:a,...m.baseScale!==void 0&&{baseScale:m.baseScale},...m.scaleVariation!==void 0&&{scaleVariation:m.scaleVariation}})}}setTimeout(p,100),setTimeout(()=>{n0(e,a)},800),c&&setTimeout(()=>{t.uniforms.uUseWetnessMap.value=!0,c.activate()},3500),setTimeout(()=>Uh(e),3200)}const pl=new qa,e0=new P(0,-1,0),ml=new P;let la=0;const t0=5;function gl(o,e,t=2,s=!1,n=null){if(Qt.length===0&&_o.length===0||!o||!e||!s&&(la++,la<t0))return;if(la=0,!e.isObject3D&&!e.isMesh){console.warn("Invalid terrainMesh passed to updateTreePositions");return}const i=.3,a=2.2,r=.4,l=2.6,c=i-r,d=l-a,f=t*t,u=p=>{if(p.userData.targetScale===void 0)return;const h=p.position.x-o.x,m=p.position.z-o.z;if(h*h+m*m>f)return;let y;if(n)y=n(p.position.x,p.position.z);else{ml.set(p.position.x,20,p.position.z),pl.set(ml,e0);const g=pl.intersectObject(e,!1);if(g.length===0)return;y=g[0].point.y}p.userData.verticalOffset===void 0&&(p.userData.verticalOffset=p.position.y-y),p.position.y=y+p.userData.verticalOffset;let w=1;y<i?y<=r?w=0:w=(y-r)/c:y>a&&(y>=l?w=0:w=(l-y)/d);const x=p.userData.targetScale*w;p.scale.set(x,x,x)};Qt.forEach(u),_o.forEach(u)}function Xp(o,e=null,t=0){if(Qt.length===0||(aa++,aa<5))return;aa=0;const s=Math.sin(o*.9)*.035;for(let n=0;n<Qt.length;n++){const i=Qt[n];if(i.scale.x===0)continue;if(e){const r=i.position.x-e.x,l=i.position.z-e.z;if(r*r+l*l<t)continue}const{baseRotation:a}=i.userData;i.rotation.x=a.x+s,i.rotation.z=a.z+s*.7}}function n0(o,e="day"){const t=Yf(),s=e==="night",n=e==="dusk",i=s?4.25:1,a=new Z(1.7,1.45,1.1),r=Math.random()<.6?1:0,l=Math.floor(Math.random()*3),c=Math.floor(Math.random()*4);function d(u){const p=t[u];if(!p)return console.warn(`Seagull model ${u} not preloaded yet, skipping`),null;const h=wr(p.scene);return h.traverse(m=>{m.isMesh&&(m.castShadow=!1,m.receiveShadow=!1,(s||n)&&m.material&&(m.material=m.material.clone(),m.material._ownedByInstance=!0,m.material.color&&(s?m.material.color.multiplyScalar(i):m.material.color.multiply(a))))}),{clone:h,animations:p.animations}}function f(u,p,h){if(!p||p.length===0)return;const m=new Uo(u);p.forEach(v=>{const y=m.clipAction(v);y.timeScale=h,y.play()}),u.userData.mixer=m}if(r>0){const u=d("./models/creatures/seagulls-flock.glb");if(u){const{clone:p,animations:h}=u;p.position.set(0,6.28,0),p.scale.set(.0162,.0162,.0162),o.add(p),f(p,h,.5),p.userData.type="flock",p.userData.bobTime=Math.random()*Math.PI*2,p.userData.bobSpeed=.3,p.userData.bobAmount=1.8,p.userData.baseHeight=p.position.y,Vn.push(p)}}for(let u=0;u<l;u++){const p=d("./models/creatures/seagulls-spiral.glb");if(p){const{clone:h,animations:m}=p;h.position.set((Math.random()-.5)*8,5+Math.random()*3,(Math.random()-.5)*8),h.scale.set(.14,.14,.14),o.add(h),f(h,m,.55+Math.random()*.2),h.userData.type="spiral",h.userData.bobTime=Math.random()*Math.PI*2,h.userData.bobSpeed=.25,h.userData.bobAmount=1.2,h.userData.baseHeight=h.position.y,Vn.push(h)}}for(let u=0;u<c;u++){const p=d("./models/creatures/seagull-1.glb");if(p){const{clone:h,animations:m}=p;if(h.position.set((Math.random()-.5)*12,4.2+Math.random()*4.2,(Math.random()-.5)*12),h.scale.set(.028,.028,.028),o.add(h),m&&m.length>0){const v=new Uo(h);m.forEach(y=>{const w=v.clipAction(y);w.timeScale=.6+Math.random()*.3,w.play(),w.time=Math.random()*y.duration}),h.userData.mixer=v}h.userData.type="single",h.userData.bobTime=Math.random()*Math.PI*2,h.userData.bobSpeed=.35+Math.random()*.1,h.userData.bobAmount=.8,h.userData.baseHeight=h.position.y,Vn.push(h)}}}function Zp(o){dl++;const e=(dl&1)===0;for(let t=0;t<Vn.length;t++){const s=Vn[t],n=s.userData;n.mixer&&e&&n.mixer.update(o*2),n.bobTime+=o*n.bobSpeed,s.position.y=n.baseHeight+Math.sin(n.bobTime)*n.bobAmount}}function qp(){Vn.forEach(o=>{o.userData.mixer&&(o.userData.mixer.stopAllAction(),o.userData.mixer.uncacheRoot(o),o.userData.mixer=null),o.parent&&o.parent.remove(o),o.traverse(e=>{e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(s=>{s._ownedByInstance&&o0(s)})})}),Vn.length=0}function $p(o){o&&o.uniforms.uWinGreenIntensity&&(o.uniforms.uWinGreenIntensity.value=0),o&&o.uniforms.uWinGreenDetailIntensity&&(o.uniforms.uWinGreenDetailIntensity.value=0),o&&o.uniforms.uIsNightTime&&(o.uniforms.uIsNightTime.value=!1)}function Jp(o){o&&o.wetnessMap&&o.wetnessMap.setGreenZoneWetnessIntensity&&o.wetnessMap.setGreenZoneWetnessIntensity(0)}function o0(o){for(const e of Object.values(o))e&&e.isTexture&&e.dispose();o.dispose()}function Qp(){Qt.forEach(o=>{o.parent&&o.parent.remove(o),o.traverse(e=>{e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(s=>s.dispose())})}),Qt.length=0,_o.forEach(o=>{o.parent&&o.parent.remove(o),o.traverse(e=>{e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(s=>s.dispose())})}),_o.length=0,qo.length=0,fi=!1,Rn.length=0,ds=!1}function em(){return Qt}function tm(){return _o}const Xs=0,s0=1,i0=new P,vl=new Xu,ca=new Zu,yl=new P,Gs=new qu;class a0{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new wl,this.unassigned=new wl,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.vertices.push(new r0(e[t]));this._compute()}return this}setFromObject(e){const t=[];return e.updateMatrixWorld(!0),e.traverse(function(s){const n=s.geometry;if(n!==void 0){const i=n.attributes.position;if(i!==void 0)for(let a=0,r=i.count;a<r;a++){const l=new P;l.fromBufferAttribute(i,a).applyMatrix4(s.matrixWorld),t.push(l)}}}),this.setFromPoints(t)}containsPoint(e){const t=this.faces;for(let s=0,n=t.length;s<n;s++)if(t[s].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){const s=this.faces;let n=-1/0,i=1/0;for(let a=0,r=s.length;a<r;a++){const l=s[a],c=l.distanceToPoint(e.origin),d=l.normal.dot(e.direction);if(c>0&&d>=0)return null;const f=d!==0?-c/d:0;if(!(f<=0)&&(d>0?i=Math.min(f,i):n=Math.max(f,n),n>i))return null}return n!==-1/0?e.at(n,t):e.at(i,t),t}intersectsRay(e){return this.intersectRay(e,i0)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(e.next!==null&&e.next.face===t?t.outside=e.next:t.outside=null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){const t=e.outside;let s=e.outside;for(;s.next!==null&&s.next.face===e;)s=s.next;return this.assigned.removeSubList(t,s),t.prev=s.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){const s=this._removeAllVerticesFromFace(e);if(s!==void 0)if(t===void 0)this.unassigned.appendChain(s);else{let n=s;do{const i=n.next;t.distanceToPoint(n.point)>this.tolerance?this._addVertexToFace(n,t):this.unassigned.append(n),n=i}while(n!==null)}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{const s=t.next;let n=this.tolerance,i=null;for(let a=0;a<e.length;a++){const r=e[a];if(r.mark===Xs){const l=r.distanceToPoint(t.point);if(l>n&&(n=l,i=r),n>1e3*this.tolerance)break}}i!==null&&this._addVertexToFace(t,i),t=s}while(t!==null)}return this}_computeExtremes(){const e=new P,t=new P,s=[],n=[];for(let i=0;i<3;i++)s[i]=n[i]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let i=0,a=this.vertices.length;i<a;i++){const r=this.vertices[i],l=r.point;for(let c=0;c<3;c++)l.getComponent(c)<e.getComponent(c)&&(e.setComponent(c,l.getComponent(c)),s[c]=r);for(let c=0;c<3;c++)l.getComponent(c)>t.getComponent(c)&&(t.setComponent(c,l.getComponent(c)),n[c]=r)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:s,max:n}}_computeInitialHull(){const e=this.vertices,t=this._computeExtremes(),s=t.min,n=t.max;let i=0,a=0;for(let u=0;u<3;u++){const p=n[u].point.getComponent(u)-s[u].point.getComponent(u);p>i&&(i=p,a=u)}const r=s[a],l=n[a];let c,d;i=0,vl.set(r.point,l.point);for(let u=0,p=this.vertices.length;u<p;u++){const h=e[u];if(h!==r&&h!==l){vl.closestPointToPoint(h.point,!0,yl);const m=yl.distanceToSquared(h.point);m>i&&(i=m,c=h)}}i=-1,ca.setFromCoplanarPoints(r.point,l.point,c.point);for(let u=0,p=this.vertices.length;u<p;u++){const h=e[u];if(h!==r&&h!==l&&h!==c){const m=Math.abs(ca.distanceToPoint(h.point));m>i&&(i=m,d=h)}}const f=[];if(ca.distanceToPoint(d.point)<0){f.push(Mt.create(r,l,c),Mt.create(d,l,r),Mt.create(d,c,l),Mt.create(d,r,c));for(let u=0;u<3;u++){const p=(u+1)%3;f[u+1].getEdge(2).setTwin(f[0].getEdge(p)),f[u+1].getEdge(1).setTwin(f[p+1].getEdge(0))}}else{f.push(Mt.create(r,c,l),Mt.create(d,r,l),Mt.create(d,l,c),Mt.create(d,c,r));for(let u=0;u<3;u++){const p=(u+1)%3;f[u+1].getEdge(2).setTwin(f[0].getEdge((3-u)%3)),f[u+1].getEdge(0).setTwin(f[p+1].getEdge(1))}}for(let u=0;u<4;u++)this.faces.push(f[u]);for(let u=0,p=e.length;u<p;u++){const h=e[u];if(h!==r&&h!==l&&h!==c&&h!==d){i=this.tolerance;let m=null;for(let v=0;v<4;v++){const y=this.faces[v].distanceToPoint(h.point);y>i&&(i=y,m=this.faces[v])}m!==null&&this._addVertexToFace(h,m)}}return this}_reindexFaces(){const e=[];for(let t=0;t<this.faces.length;t++){const s=this.faces[t];s.mark===Xs&&e.push(s)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0;const s=this.assigned.first().face;let n=s.outside;do{const i=s.distanceToPoint(n.point);i>t&&(t=i,e=n),n=n.next}while(n!==null&&n.face===s);return e}}_computeHorizon(e,t,s,n){this._deleteFaceVertices(s),s.mark=s0;let i;t===null?i=t=s.getEdge(0):i=t.next;do{const a=i.twin,r=a.face;r.mark===Xs&&(r.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,a,r,n):n.push(i)),i=i.next}while(i!==t);return this}_addAdjoiningFace(e,t){const s=Mt.create(e,t.tail(),t.head());return this.faces.push(s),s.getEdge(-1).setTwin(t.twin),s.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let s=null,n=null;for(let i=0;i<t.length;i++){const a=t[i],r=this._addAdjoiningFace(e,a);s===null?s=r:r.next.setTwin(n),this.newFaces.push(r.face),n=r}return s.next.setTwin(n),this}_addVertexToHull(e){const t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}}class Mt{constructor(){this.normal=new P,this.midpoint=new P,this.area=0,this.constant=0,this.outside=null,this.mark=Xs,this.edge=null}static create(e,t,s){const n=new Mt,i=new ua(e,n),a=new ua(t,n),r=new ua(s,n);return i.next=r.prev=a,a.next=i.prev=r,r.next=a.prev=i,n.edge=i,n.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){const e=this.edge.tail(),t=this.edge.head(),s=this.edge.next.head();return Gs.set(e.point,t.point,s.point),Gs.getNormal(this.normal),Gs.getMidpoint(this.midpoint),this.area=Gs.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}}class ua{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceTo(e.point):-1}lengthSquared(){const e=this.head(),t=this.tail();return t!==null?t.point.distanceToSquared(e.point):-1}setTwin(e){return this.twin=e,e.twin=this,this}}class r0{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}}class wl{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}}class l0 extends _n{constructor(e=[]){super();const t=[],s=[],i=new a0().setFromPoints(e).faces;for(let a=0;a<i.length;a++){const r=i[a];let l=r.edge;do{const c=l.head().point;t.push(c.x,c.y,c.z),s.push(r.normal.x,r.normal.y,r.normal.z),l=l.next}while(l!==r.edge)}this.setAttribute("position",new Qs(t,3)),this.setAttribute("normal",new Qs(s,3))}}const hi=[],ln=new P;function c0(o,e,t,s,n,i){const{mass:a=.4,linearDamping:r=3,angularDamping:l=3,stiffness:c=1,scale:d=1}=n,f=t.x,u=t.z,p=i?i(f,u):t.y??0,h=wr(s.scene);h.position.set(f,p,u),h.scale.setScalar(d),o.add(h),h.updateMatrixWorld(!0);let m=null;if(h.traverse(A=>{A.isSkinnedMesh&&!m&&(m=A)}),!m){console.error("chain.glb: no SkinnedMesh found");return}const v=[...m.skeleton.bones].sort((A,E)=>{A.getWorldPosition(ln);const k=ln.y;return E.getWorldPosition(ln),ln.y-k}).reverse();v[0].getWorldPosition(ln);const y=ln.y;v[v.length-1].getWorldPosition(ln);const w=ln.y,x=Math.abs(y-w)||v.length*.15,g=x/Math.max(1,v.length-1),T=p+x+.5,C=[],b=[];for(let A=0;A<v.length;A++){const E=T-A*g,k=e.createRigidBody(fe.RigidBodyDesc.dynamic().setTranslation(f,E,u).setLinearDamping(r).setAngularDamping(l));if(e.createCollider(fe.ColliderDesc.ball(g*.3).setMass(a).setFriction(.8).setRestitution(0).setCollisionGroups(yn.chain),k),C.push(k),A>0){const te=e.createImpulseJoint(fe.JointData.rope(g,{x:0,y:0,z:0},{x:0,y:0,z:0}),C[A-1],k,!0);b.push(te)}}const R=e.createRigidBody(fe.RigidBodyDesc.fixed().setTranslation(f,T,u)),S=e.createImpulseJoint(fe.JointData.spherical({x:0,y:0,z:0},{x:0,y:0,z:0}),R,C[0],!0);b.push(S),hi.push({bodies:C,joints:b,chainScene:h,bones:v,fixed:R})}function u0(){for(const o of hi){const{bodies:e,bones:t}=o;for(let s=0;s<t.length;s++){const n=e[s].translation(),i=t[s];i.position.set(n.x,n.y,n.z),i.parent&&i.parent.worldToLocal(i.position),i.updateMatrixWorld(!0)}}}function d0(o,e){hi.forEach(({bodies:t,joints:s,chainScene:n,fixed:i})=>{if(e&&(s.forEach(a=>{try{e.removeImpulseJoint(a,!0)}catch{}}),t.forEach(a=>{try{e.removeRigidBody(a)}catch{}}),i))try{e.removeRigidBody(i)}catch{}n&&(o.remove(n),n.traverse(a=>{a.geometry&&a.geometry.dispose(),a.material&&(Array.isArray(a.material)?a.material:[a.material]).forEach(r=>r.dispose())}))}),hi.length=0}const pi=[],da={x:0,y:-.86,z:.153};function f0(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.clearRect(0,0,256,256);const s=t.createLinearGradient(0,0,256,0);s.addColorStop(0,"rgba(255, 255, 210, 0.95)"),s.addColorStop(.25,"rgba(255, 255, 190, 0.55)"),s.addColorStop(.65,"rgba(255, 248, 160, 0.2)"),s.addColorStop(1,"rgba(255, 245, 120, 0.0)"),t.fillStyle=s,t.fillRect(0,0,256,256),t.globalCompositeOperation="destination-out";const n=t.createLinearGradient(0,0,0,256*.42);n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,256,256*.42);const i=t.createLinearGradient(0,256,0,256*.58);return i.addColorStop(0,"rgba(0,0,0,1)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,256*.58,256,256*.42),new Ao(e)}function h0(o,e,t){const s=[],n=[],i=[];s.push(0,0,0),n.push(0,.5);for(let r=0;r<=t;r++){const l=r/t,c=-e+2*e*l;s.push(Math.sin(c)*o,0,-Math.cos(c)*o),n.push(1,l)}for(let r=0;r<t;r++)i.push(0,r+1,r+2);const a=new _n;return a.setIndex(i),a.setAttribute("position",new Qs(s,3)),a.setAttribute("uv",new Qs(n,2)),a}function fa(o,e,t){return new we(new Jo(o,10,10),new Xe({color:e,transparent:!0,opacity:t,blending:qt,depthWrite:!1,depthTest:!0}))}function p0(o,e){e.updateMatrixWorld(!0);const s=new xi().setFromObject(e).max.y+da.y,n=s-e.position.y,i=new Zt;i.position.set(e.position.x+da.x,s,e.position.z+da.z),i.add(fa(.55,16777130,.07)),i.add(fa(.28,16777164,.18)),i.add(fa(.11,16777215,.75));const a=new wa(16777130,2.5,7);i.add(a);const r=new wa(11189196,1.2,110);r.position.set(0,-2,0),i.add(r),e.traverse(d=>{if(!d.isMesh)return;(Array.isArray(d.material)?d.material:[d.material]).forEach(u=>{u.side=Ne,!u.transparent&&u.emissive!==void 0&&(u.emissiveMap=u.map??null,u.emissive.set(16777215),u.emissiveIntensity=.88),u.needsUpdate=!0})});const l=f0(),c=h0(9,Math.PI/9,22);for(let d=0;d<2;d++){const f=new Xe({map:l,transparent:!0,opacity:.58,blending:qt,depthWrite:!1,depthTest:!0,side:Ne}),u=new we(c,f);u.rotation.y=d*Math.PI,u.renderOrder=10,i.add(u)}o.add(i),pi.push({group:i,mesh:e,heightOffset:n})}function m0(o){for(const e of pi)e.group.rotation.y+=.785*o,e.mesh&&(e.group.position.y=e.mesh.position.y+e.heightOffset)}function g0(o){pi.forEach(({group:e})=>{o.remove(e),e.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())})}),pi.length=0}const v0=new Mr,vs={},_t=[];let zt=null,Ec=!1;function y0(o,e,t,s,n,i,a){return[(1-2*n*n-2*i*i)*o+2*(s*n-i*a)*e+2*(s*i+n*a)*t,2*(s*n+i*a)*o+(1-2*s*s-2*i*i)*e+2*(n*i-s*a)*t,2*(s*i-n*a)*o+2*(n*i+s*a)*e+(1-2*s*s-2*n*n)*t]}function w0(o,e,t){let s=0,n=0,i=0;for(const f of t)s+=f.x,n+=f.y,i+=f.z;s/=t.length,n/=t.length,i/=t.length;const{x:a,y:r,z:l,w:c}=e;let d=0;for(const f of t){const u=f.x-s,p=f.y-n,h=f.z-i,[m,v,y]=y0(u,p,h,a,r,l,c),w=zt(o.x+m,o.z+y)-(o.y+v);w>d&&(d=w)}return d}function nm(o){Ec=o}function M0(o){const e=[...new Set(o.map(t=>t.model))];return Promise.all(e.filter(t=>!vs[t]).map(t=>Pc(t)))}function Pc(o){return new Promise((e,t)=>{v0.load(`./models/obstacle/${o}`,s=>{vs[o]=s,e(s)},void 0,s=>{console.error(`Error loading obstacle model ${o}:`,s),t(s)})})}function om(o,e,t,s,n,i){if(!s||s.length===0){i&&i();return}zt=n,M0(s).then(()=>{s.forEach(a=>x0(o,e,t,a)),i&&i()}).catch(a=>{console.error("Failed to load obstacle models:",a)})}function x0(o,e,t,s){const n=vs[s.model];if(!n){console.error(`Model not cached: ${s.model}`);return}if(s.model==="chain.glb"){const v={x:s.position.x,y:0,z:s.position.z};c0(o,e,v,n,s.chain??{},zt);return}const i=n.scene.clone(),a=typeof s.scale=="number"?{x:s.scale,y:s.scale,z:s.scale}:s.scale;i.scale.set(a.x,a.y,a.z);const r=(a.x+a.y+a.z)/3;let l=0;const c=s.physics?.type;s.bottomOffset!==void 0?l=s.bottomOffset*a.y:c==="convexHull"||s.decoration?(n.scene.updateMatrixWorld(!0),l=-new xi().setFromObject(n.scene).min.y*a.y):c==="sphere"?l=s.physics.radius*r:c==="box"?l=(s.physics.halfExtents?.y||.5)*a.y:c==="cylinder"&&(l=s.physics.height/2*a.y);const d=zt(s.position.x,s.position.z),f=s.embedDepth||0,u=s.physics&&s.physics.mass>0,p=d-f+(u||s.decoration?l:0);i.position.set(s.position.x,p,s.position.z),s.rotation&&i.rotation.set(s.rotation.x||0,s.rotation.y||0,s.rotation.z||0),i.traverse(v=>{if(!v.isMesh)return;v.castShadow=!0,v.receiveShadow=!0,(Array.isArray(v.material)?v.material:[v.material]).forEach(w=>{w.opacity<1||w.alphaMap?(w.transparent=!0,w.depthWrite=!1,w.needsUpdate=!0):(w.transparent=!1,w.depthWrite=!0),w.needsUpdate=!0})}),o.add(i),(s.model==="lighthouse.glb"||s.lighthouseBeam)&&p0(o,i);const h=s.decoration?null:_0(s,t,i.position,i.quaternion,a,e,u);!s.decoration&&!h?.body&&console.warn(`  No physics body created for ${s.model}`);let m=null;if(Ec&&c==="convexHull"&&h?.hullVertices){const v=new Xe({color:65416,wireframe:!0,depthTest:!1,depthWrite:!1,transparent:!0});m=new Zt,m.renderOrder=999,m.add(new we(new l0(h.hullVertices),v)),m.position.copy(i.position),m.quaternion.copy(i.quaternion),o.add(m)}_t.push({mesh:i,body:h?.body,colliders:h?.colliders||(h?.collider?[h.collider]:[]),debugGroup:m,config:s,bottomOffset:l,hullVertices:h?.hullVertices||null})}function _0(o,e,t,s,n,i,a){const r=o.physics;if(!r)return null;const l=(n.x+n.y+n.z)/3,c=r.mass||0,d=r.friction??.7,f=r.restitution??.2;let u=null,p;switch(r.type){case"sphere":p=fe.ColliderDesc.ball(r.radius*l);break;case"box":{const y=r.halfExtents;p=fe.ColliderDesc.cuboid(y.x*n.x,y.y*n.y,y.z*n.z);break}case"cylinder":p=fe.ColliderDesc.cylinder(r.height/2*n.y,r.radiusTop*l);break;case"convex":if(r.vertices&&r.vertices.length>0){const y=new Float32Array(r.vertices.length*3);r.vertices.forEach((w,x)=>{y[x*3]=w.x*n.x,y[x*3+1]=w.y*n.y,y[x*3+2]=w.z*n.z}),p=fe.ColliderDesc.convexHull(y),p||(console.warn(`Convex hull failed for ${o.model} - falling back to sphere`),p=fe.ColliderDesc.ball((r.approximateRadius||1)*l))}else console.warn(`Convex shape for ${o.model} needs vertices - falling back to sphere`),p=fe.ColliderDesc.ball((r.approximateRadius||1)*l);break;case"convexHull":{const y=vs[o.model];if(y){const w=[];if(y.scene.updateMatrixWorld(!0),y.scene.traverse(x=>{if(x.isMesh&&x.geometry){const g=x.geometry.getAttribute("position");if(g){x.updateWorldMatrix(!0,!1);const T=Math.max(1,Math.floor(g.count/50));for(let C=0;C<g.count;C+=T){const b=new P(g.getX(C),g.getY(C),g.getZ(C));b.applyMatrix4(x.matrixWorld),w.push(b.x*n.x,b.y*n.y,b.z*n.z)}}}}),w.length>=12&&(p=fe.ColliderDesc.convexHull(new Float32Array(w)),p)){const x=[];for(let g=0;g<w.length;g+=3)x.push(new P(w[g],w[g+1],w[g+2]));u=x}if(!p){const x=new xi().setFromObject(y.scene),g=new Xa;x.getBoundingSphere(g);const T=g.radius*l;p=fe.ColliderDesc.ball(T),console.warn(`ConvexHull failed for ${o.model}, using sphere: radius=${T.toFixed(2)}`)}}p||(p=fe.ColliderDesc.ball((r.fallbackRadius||1)*l));break}default:return console.warn(`Unknown physics type: ${r.type}`),null}const h=a?fe.RigidBodyDesc.dynamic().setTranslation(t.x,t.y,t.z).setRotation({x:s.x,y:s.y,z:s.z,w:s.w}).setLinearDamping(.1).setAngularDamping(.3).setCcdEnabled(!0):fe.RigidBodyDesc.kinematicPositionBased().setTranslation(t.x,t.y,t.z).setRotation({x:s.x,y:s.y,z:s.z,w:s.w}),m=i.createRigidBody(h);p.setMass(c).setFriction(d).setRestitution(f).setCollisionGroups(yn.obstacle);const v=i.createCollider(p,m);return{body:m,collider:v,hullVertices:u}}function sm(o,e){_t.forEach(({mesh:t,body:s,colliders:n,debugGroup:i})=>{if(t&&(o.remove(t),t.traverse(a=>{a.geometry&&a.geometry.dispose(),a.material&&(Array.isArray(a.material)?a.material.forEach(r=>r.dispose()):a.material.dispose())})),i&&o.remove(i),e&&(n?.forEach(a=>{try{e.removeCollider(a,!0)}catch{}}),s))try{e.removeRigidBody(s)}catch{}}),_t.length=0,zt=null,g0(o),d0(o,e)}function im(){return _t}function Lc(o,e){const t=_t.map(r=>r.mesh).filter(Boolean);if(t.length===0)return!1;const s=o.intersectObjects(t,!0);if(s.length===0)return!1;let n=s[0].object;for(;n.parent&&!_t.find(r=>r.mesh===n);)n=n.parent;const i=_t.find(r=>r.mesh===n);if(!i)return!1;if(i.config.model==="chest.glb"||i.config.model==="chest-w-gold.glb"){const r=i.config.model==="chest.glb"?"chest-w-gold.glb":"chest.glb";Pc(r).then(()=>{const l=vs[r];if(!l)return;const c=l.scene.clone();c.position.copy(i.mesh.position),c.rotation.copy(i.mesh.rotation),c.scale.copy(i.mesh.scale),c.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0)}),e.remove(i.mesh),i.mesh.traverse(d=>{d.geometry&&d.geometry.dispose(),d.material&&(Array.isArray(d.material)?d.material:[d.material]).forEach(f=>f.dispose())}),e.add(c),i.mesh=c,i.config={...i.config,model:r}})}return!0}function am(o){if(zt)for(const e of _t){const{body:t,config:s}=e;if(!t||!s.physics||s.physics.mass<=0||s.physics.type!=="convexHull"||!e.hullVertices)continue;const n=t.translation();if(!(o&&(()=>{const r=n.x-o.x,l=n.z-o.z;return r*r+l*l<(es+1.5)*(es+1.5)})()))continue;const a=w0(n,t.rotation(),e.hullVertices);if(a>.02){const r=t.linvel();t.setTranslation({x:n.x,y:n.y+a+.01,z:n.z},!0),t.setLinvel({x:r.x,y:Math.max(0,r.y),z:r.z},!0)}}}function rm(o,e=null,t=-2.87,s=null,n=null,i=null){for(let r=_t.length-1;r>=0;r--){const l=_t[r],{mesh:c,body:d,colliders:f,debugGroup:u,config:p,bottomOffset:h}=l;if(d&&p.physics&&p.physics.mass>0)try{const m=d.translation(),v=d.rotation();if(c.position.set(m.x,m.y,m.z),c.quaternion.set(v.x,v.y,v.z,v.w),u&&(u.position.set(m.x,m.y,m.z),u.quaternion.set(v.x,v.y,v.z,v.w)),e&&!l.hasSplashed&&m.y<t){const y=d.linvel();if(Math.sqrt(y.x*y.x+y.y*y.y+y.z*y.z)>.5){const x=p.scale??1,g=typeof x=="number"?x:(x.x+x.y+x.z)/3,T=g*1.5;e.spawnRipple(m.x,m.z,{size:T,speed:.8}),Xc(T);const C=Math.max(.3,g*.4),b=Math.round(40+g*1.5);xr({x:m.x,y:t+.1,z:m.z},C,b),l.hasSplashed=!0}}if(l.hasSplashed&&m.y>t+.5&&(l.hasSplashed=!1),m.y<-95&&s&&n){s.remove(c),c.traverse(y=>{y.geometry&&y.geometry.dispose(),y.material&&(Array.isArray(y.material)?y.material.forEach(w=>w.dispose()):y.material.dispose())}),u&&s.remove(u),f?.forEach(y=>{try{n.removeCollider(y,!0)}catch{}}),n.removeRigidBody(d),_t.splice(r,1);continue}}catch{}if(!d&&p.decoration&&zt){const m=p.embedDepth||0;c.position.y=zt(c.position.x,c.position.z)-m+h}if(d&&p.physics&&p.physics.mass===0&&zt){const m=p.embedDepth??0,v=zt(c.position.x,c.position.z)-m+h;c.position.y=v,d.setNextKinematicTranslation({x:c.position.x,y:v,z:c.position.z}),u&&(u.position.y=v)}}m0(o),u0()}const ha=new P,Ee=new P,ct=new P,mi=new P;function Tr(o){let e=null,t=1/0;for(let s=0;s<tt.length;s++){const n=tt[s];if(!n.active||n.isEvaporating)continue;if(o.closestPointToPoint(n.position,ha),ha.distanceTo(n.position)<=n.radius*1.5){const a=ha.distanceTo(o.origin);a<t&&(t=a,e=n)}}return e}const Ve=new qa;Ve.far=5e3;const ut=new pe;let Le=!1,Sr=!1,Cr=!1,To=0,za=0,Ha=0;const T0=100;let le=null,J=null,An=0,Dn=null,In=null,fs=.88,gn=0,Ml=0;const S0=150;let xl=0;const C0=50;let _l=0;const b0=16;let So={x:0,y:0},Ai=0,Zs=0,Xt=null;const Oc=10,R0=300;let ao=0,Bt=!1,qs=0,gi=!1;const Ga=1.5,Fc=1,A0=1.5,D0=1.5,I0=Ga+Fc-D0;let ro=0,En=0,lo=0,vi=!1,$s=!1;const Tl=1.5,ks=1,Sl=1.5,E0=1.5,pa=3.25,P0=-.85,ma=4.75,L0=-1.45;let Yn=null,ys=null,nn=null,Co=!1,Ae=null,$n=null,br=null,uo=null,ka=null;function yi(o,e,t){if(br(o,e,t),ka){const s=le?.world;ka({localX:o.x,localY:o.y,heightChange:e,radius:t,worldX:s?.x??0,worldY:s?.y??0,worldZ:s?.z??0})}}let vn=null,bo=null,Ro=null;function be(){return Sr||Cr||To>=2}function Wa(o){const e=es*1.1,t=new Zt;t.rotation.x=-Math.PI/2,t.renderOrder=3;const s=new Vi,n=e,i=e*.5;s.moveTo(n,0);for(let f=1;f<=46;f++){const u=f/46*Math.PI*2;s.lineTo(Math.cos(u)*n,Math.sin(u)*n)}const a=new $u;a.moveTo(i,0);for(let f=1;f<=46;f++){const u=f/46*Math.PI*2;a.lineTo(Math.cos(u)*i,Math.sin(u)*i)}s.holes.push(a);const r={depth:.032,bevelEnabled:!0,bevelThickness:.005,bevelSize:.003,bevelSegments:2},l=new Yi(s,r),c=new Qo({color:o?16720418:2237183,transparent:!0,opacity:o?.28:.55,roughness:.62,metalness:.31,emissive:o?16720384:8959,emissiveIntensity:1.62,side:Ne,depthWrite:!1}),d=new we(l,c);if(d.position.z=-.015,d.userData.isBaseRing=!0,d.userData.isLowerMode=o,t.add(d),o)for(let u=0;u<8;u++){const p=u/8*Math.PI*2,h=(u+1)/8*Math.PI*2,m=new Vi,v=e*.62,y=e*.98,w=20;for(let b=0;b<=w;b++){const R=b/w,S=p+R*(h-p),A=Vt.lerp(y,v,R*.7),E=Math.cos(S)*A,k=Math.sin(S)*A;b===0?m.moveTo(E,k):m.lineTo(E,k)}for(let b=w;b>=0;b--){const R=b/w,S=p+R*(h-p),A=Vt.lerp(y,v,R*.7)*.7,E=Math.cos(S)*A,k=Math.sin(S)*A;m.lineTo(E,k)}const x={depth:.03,bevelEnabled:!1},g=new Yi(m,x),T=new Xe({color:16724787,transparent:!0,opacity:.5-u/8*.2,side:Ne,depthWrite:!1}),C=new we(g,T);C.position.z=-.015,C.userData.rotationSpeed=-.05-u*.01,C.userData.baseOpacity=.5-u/8*.2,t.add(C)}else{for(let v=0;v<4;v++){const y=e*1,w=.3,x=v*.36,g=new Ju(w*.84,w,64),T=document.createElement("canvas");T.width=256,T.height=256;const C=T.getContext("2d"),b=C.createRadialGradient(128,128,128*.84,128,128,128);b.addColorStop(0,"rgba(34, 34, 170, 1.0)"),b.addColorStop(1,"rgba(34, 34, 170, 0.0)"),C.fillStyle=b,C.fillRect(0,0,256,256);const R=new Ao(T),S=new Xe({map:R,transparent:!0,opacity:0,side:Ne,depthWrite:!1}),A=new we(g,S);A.userData.animationOffset=x,A.userData.startRadius=y,A.userData.ringRadius=w,A.userData.isConvergingRing=!0,t.add(A);for(let E=0;E<8;E++){const k=E/8*Math.PI*2,te=.895,ne=new Vi;ne.moveTo(0,-te/2),ne.lineTo(-te*.6,0),ne.lineTo(0,te/2),ne.lineTo(-te*.3,0),ne.lineTo(0,-te/2);const q={depth:.03,bevelEnabled:!1},ie=new Yi(ne,q),Y=new Xe({color:1710832,transparent:!0,opacity:0,side:Ne,depthWrite:!1}),z=new we(ie,Y);z.position.x=Math.cos(k)*y,z.position.y=Math.sin(k)*y,z.position.z=-.012,z.rotation.z=k,z.userData.angle=k,z.userData.startRadius=y,z.userData.animationOffset=x,z.userData.isConvergingChevron=!0,t.add(z)}}const p=new $o(e*1.82,e*1.82),h=new et({transparent:!0,depthWrite:!1,blending:qt,side:Ne,uniforms:{color:{value:new Z(65484)},opacity:{value:0}},vertexShader:`
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
      `}),m=new we(p,h);m.position.z=-.02,m.userData.isTurboGlow=!0,m.visible=!1,t.add(m)}return t}function Di(o){const e=o?In:Dn;return e?(J=e,J.visible=!0,An=0,J):null}function hs(){J&&(J.visible=!1,J=null)}function ws(o){if(!J)return;const e=J.position,t=e.x,s=e.y,n=e.z;J.visible=!1;const i=o?In:Dn;i&&(J=i,J.position.set(t,s,n),J.visible=!0)}function O0(o,e=0,t=!1,s=0,n=0){if(!J)return;An+=o;const i=t?1.8:1,a=1.5/i,r=6711039,l=54442,c=65484,d=16746496,f=16763904,u=J.children;for(let p=0;p<u.length;p++){const h=u[p];if(h.userData.isBaseRing){if(h.userData.isLowerMode)continue;t?(h.material.color.setHex(5592575),h.material.emissive.setHex(8772),h.material.emissiveIntensity=.4,h.material.opacity=.4):e>0?(h.material.emissiveIntensity=.2+e*.2,h.material.opacity=.3+e*.1):(h.material.color.setHex(4474111),h.material.emissive.setHex(68),h.material.emissiveIntensity=.2,h.material.opacity=.3);continue}if(h.userData.isTurboGlow){if(h.visible=t||e>0,h.material.uniforms)if(t){const m=.25+Math.sin(An*6)*.1;h.material.uniforms.opacity.value=m}else e>0?h.material.uniforms.opacity.value=e*.15:h.material.uniforms.opacity.value=0;continue}if(h.userData.rotationSpeed!==void 0)if(h.rotation.z+=h.userData.rotationSpeed*o*60,s===2){const m=.85+Math.sin(An*8)*.15;h.material.color.setHex(f),h.material.opacity=h.userData.baseOpacity*m*1.3}else if(s===1)h.material.color.setHex(d),h.material.opacity=h.userData.baseOpacity*1.2;else if(n>0){const v=.2+n*.33,y=.2*(1-n);h.material.color.setRGB(1,v,y),h.material.opacity=h.userData.baseOpacity*(1+n*.2)}else h.material.color.setHex(16724787),h.material.opacity=h.userData.baseOpacity;if(h.userData.isConvergingRing===!0){const m=h.userData.animationOffset/i,y=(An*i-m)%a;if(y<0){h.material.opacity=0;continue}const w=.6,x=Math.min(y/a,1),g=x*w,T=h.userData.startRadius,C=h.userData.ringRadius,R=T*(1-g)/C;h.scale.set(R,R,1);let S;x<.15?S=x/.15:x>.5?S=(1-x)/.5:S=1,h.material.opacity=S*.4}if(h.userData.isConvergingChevron===!0){const m=h.userData.animationOffset,v=m/i,w=(An*i-v)%a,g=(Math.round(m/.36)+1)/4,T=e>=g||t;if(w<0){h.material.opacity=0,h.visible=!1;continue}h.visible=!0;const C=.64,b=Math.min(w/a,1),R=b*C,A=h.userData.startRadius*(1-R),E=h.userData.angle;h.position.x=Math.cos(E)*A,h.position.y=Math.sin(E)*A;const k=1-R*.45;h.scale.set(k,k,1);let te;b<.15?te=b/.15:b>.5?te=(1-b)/.5:te=1,t?(h.material.color.setHex(c),h.material.opacity=te*.8):T?(h.material.color.setHex(l),h.material.opacity=te*.7):(h.material.color.setHex(r),h.material.opacity=te*.4)}}}function Nc(o){if(!o)return!1;let e=o;for(;e&&e!==document.body;){if(!(e instanceof Element)){e=e.parentElement;continue}const t=e.tagName?.toLowerCase();if(t==="button"||t==="input"||t==="select"||t==="textarea"||t==="a"||e.onclick||e.getAttribute("role")==="button"||e.classList?.contains("ui-element")||e.classList?.contains("modal")||Array.from(e.classList||[]).some(n=>n.includes("modal")))return!0;const s=e.id;if(s&&(s.includes("btn")||s.includes("button")||s.includes("modal")||s.includes("overlay")||s.includes("menu")||s.includes("ui")))return!0;e=e.parentElement}return!1}function F0(o){if(Nc(o.target))return;o.button===2&&(Cr=!0),So={x:o.clientX,y:o.clientY},Ai=Date.now(),ut.x=o.clientX/window.innerWidth*2-1,ut.y=-(o.clientY/window.innerHeight)*2+1,Ve.setFromCamera(ut,ys);const e=Tr(Ve.ray);if(e&&e.radius>=.15&&bo&&Ro){mi.copy(e.position);const s=e.radius;$l(e,Yn,bo,Ro)&&(Rl(),Ol(),xr(mi,s)),document.body.style.cursor="pointer",o.preventDefault();return}if(Lc(Ve,Yn))return;const t=Ve.intersectObject(Ae);if(t.length>0){const s=t[0].point;if(s.y<$n-fs)return;Ee.copy(s),ct.copy(Ee),Ae.worldToLocal(ct),le={world:Ee,local:ct},Le=!0,nn.enabled=!1,document.body.style.cursor=be()?"s-resize":"n-resize",J||Di(be()),J&&(J.position.copy(Ee),J.position.y+=.05),Al()}}function N0(o){o.button===2&&(Cr=!1);const e={x:o.clientX,y:o.clientY},t=Math.sqrt(Math.pow(e.x-So.x,2)+Math.pow(e.y-So.y,2)),s=Date.now()-Ai;if(t<Oc&&s<500&&le){const n=be()?-.8:.8;yi(le.local,n),vn(),gn++;const i=le.world,a=.5,r=mo(Ae,i);ti(i,be(),a,r),ga()}Le=!1,le=null,document.body.style.cursor="default",Co||(nn.enabled=!0),Js(),hs()}function z0(o){if(ut.x=o.clientX/window.innerWidth*2-1,ut.y=-(o.clientY/window.innerHeight)*2+1,Ve.setFromCamera(ut,ys),Le){const s=performance.now();if(s-_l<b0)return;_l=s;const n=Ve.intersectObject(Ae);if(n.length>0){if(Ee.copy(n[0].point),Ee.y<$n-fs){le=null,J&&(J.visible=!1);return}ct.copy(Ee),Ae.worldToLocal(ct),le={world:Ee,local:ct},J?J.visible=!0:Di(be()),J&&(J.position.copy(Ee),J.position.y+=.05)}return}const e=performance.now();if(e-xl<C0)return;xl=e;const t=Tr(Ve.ray);if(t)document.body.style.cursor=t.radius>=.15?"pointer":"default";else{const s=Ve.intersectObject(Ae);if(s.length>0){const n=s[0].point;document.body.style.cursor=n.y>=$n-fs?be()?"s-resize":"n-resize":"default"}else document.body.style.cursor="default"}}function H0(o){if(o.key==="Shift"){const e=be();Sr=!0,document.body.style.cursor="s-resize",!e&&J&&Le&&ws(!0)}}function G0(o){if(o.key==="Shift"){const e=be();Sr=!1,document.body.style.cursor=Le?"n-resize":"default",e&&J&&Le&&ws(!1)}}function k0(o){if(Nc(o.target))return;const e=be();To=o.touches.length;const t=be();e!==t&&J&&Le&&ws(t);const s=o.changedTouches[0];So={x:s.clientX,y:s.clientY},Ai=Date.now(),ut.x=s.clientX/window.innerWidth*2-1,ut.y=-(s.clientY/window.innerHeight)*2+1,Ve.setFromCamera(ut,ys);const n=Tr(Ve.ray);if(n&&n.radius>=.15&&bo&&Ro){mi.copy(n.position);const a=n.radius;$l(n,Yn,bo,Ro)&&(Rl(),Ol(),xr(mi,a)),document.body.style.cursor="pointer",o.preventDefault();return}if(Lc(Ve,Yn))return;const i=Ve.intersectObject(Ae);if(i.length>0){const a=i[0].point;if(a.y<$n-fs)return;Ee.copy(a),ct.copy(Ee),Ae.worldToLocal(ct),le={world:Ee,local:ct},Le=!0,nn.enabled=!1,Xt=s.identifier,document.body.style.cursor=be()?"s-resize":"n-resize",J||Di(be()),J&&(J.position.copy(Ee),J.position.y+=.05),Al(),o.preventDefault()}}function W0(o){const e=be();To=o.touches.length;const t=be();e!==t&&J&&Le&&ws(t);let s=null;if(Xt!==null){for(let n=0;n<o.touches.length;n++)if(o.touches[n].identifier===Xt){s=o.touches[n];break}}if(s||(s=o.touches[0]),ut.x=s.clientX/window.innerWidth*2-1,ut.y=-(s.clientY/window.innerHeight)*2+1,Le){Ve.setFromCamera(ut,ys);const n=Ve.intersectObject(Ae);if(n.length>0){if(Ee.copy(n[0].point),Ee.y<$n-fs){le=null,J&&(J.visible=!1);return}ct.copy(Ee),Ae.worldToLocal(ct),le={world:Ee,local:ct},J?J.visible=!0:Di(be()),J&&(J.position.copy(Ee),J.position.y+=.05)}o.preventDefault()}}function B0(o){const e=o.changedTouches[0],t={x:e.clientX,y:e.clientY},s=Math.sqrt(Math.pow(t.x-So.x,2)+Math.pow(t.y-So.y,2)),n=Date.now()-Ai;if(s<Oc&&n<500&&le){const c=Date.now()-Zs<R0;if(c||be()){yi(le.local,-.8),vn(),gn++,Zs=c?0:Date.now();const u=le.world,p=.5,h=mo(Ae,u);ti(u,!0,p,h),ga()}else{yi(le.local,.8),vn(),gn++,Zs=Date.now();const u=le.world,p=.5,h=mo(Ae,u);ti(u,!1,p,h),ga()}}const i=be();To=o.touches.length;const a=be(),r=e.identifier;i!==a&&J&&Le&&r!==Xt&&ws(a),r===Xt&&(Xt=null,Le=!1,le=null,Co||(nn.enabled=!0),document.body.style.cursor="default",Js(),hs()),To===0&&(Xt=null,Le=!1,le=null,Co||(nn.enabled=!0),document.body.style.cursor="default",Js(),hs())}function U0(){To=0,Xt=null,Le=!1,le=null,Co||(nn.enabled=!0),Zs=0,document.body.style.cursor="default",Js(),hs()}function V0(o){o.preventDefault()}function lm(o){Yn=o.scene,ys=o.camera,nn=o.controls,Ae=o.terrainMesh,$n=o.waterLevel,br=o.sculptTerrain,uo=o.stampTerrain,vn=o.updateTrimesh,bo=o.world,Ro=o.physicsConfig,Dn||(Dn=Wa(!1),Dn.visible=!1,Dn.isPersistent=!0,Yn.add(Dn)),In||(In=Wa(!0),In.visible=!1,In.isPersistent=!0,Yn.add(In)),window.addEventListener("mousedown",F0),window.addEventListener("mouseup",N0),window.addEventListener("mousemove",z0),window.addEventListener("contextmenu",V0),window.addEventListener("keydown",H0),window.addEventListener("keyup",G0),window.addEventListener("touchstart",k0,{passive:!1}),window.addEventListener("touchmove",W0,{passive:!1}),window.addEventListener("touchend",B0),window.addEventListener("touchcancel",U0)}function cm(o=.016){if(O0(o,qs,Bt,En,lo),Le&&le){const e=Date.now(),t=be();if(t){if(Ba(),ro+=o,!vi&&ro>=E0&&(vi=!0,Va()),ro>=Tl){const s=ro-Tl,n=ks,i=ks+Sl;if(s>=i&&En<2){if(En=2,lo=1,uo&&le){uo(le.local,ma,L0),$c(),ou(),vn(),gn++;const a=le.world,r=mo(Ae,a);$r(a,ma,2,r),gl(a,Ae,ma,!0)}}else if(s>=n&&!$s){if(En=1,lo=0,$s=!0,uo&&le){uo(le.local,pa,P0),Jc(),su(),vn(),gn++;const a=le.world,r=mo(Ae,a);$r(a,pa,1,r),gl(a,Ae,pa,!0)}}else s<n?lo=s/ks:s<i&&$s&&(lo=(s-ks)/Sl)}}else if(Ua(),ao+=o,!gi&&ao>=I0&&(gi=!0,ja()),!Bt&&ao>=Ga){const s=ao-Ga;qs=Math.min(1,s/Fc),qs>=1&&!Bt&&(Bt=!0,Ya(),nu())}if(e-za>16){const i=(t?-6.88:6.98)*(!t&&Bt?A0:1);yi(le.local,i),gn++;const a=le.world,r=Bt?1.5:1,l=mo(Ae,a);if(ti(a,t,r,l),e-Ml>S0&&(iu(),Ml=e),za=e,e-Ha>T0)return vn(),Ha=e,!0}}else(ao>0||Bt)&&Ba(),(ro>0||En>0)&&Ua();return!1}function Ba(){gi&&!Bt&&Zc(),ao=0,Bt=!1,qs=0,gi=!1}function Ua(){vi&&En===0&&qc(),ro=0,En=0,lo=0,vi=!1,$s=!1}function um(o){o.terrainMesh!==void 0&&(Ae=o.terrainMesh),o.waterLevel!==void 0&&($n=o.waterLevel),o.sculptTerrain!==void 0&&(br=o.sculptTerrain),o.stampTerrain!==void 0&&(uo=o.stampTerrain),o.updateTrimesh!==void 0&&(vn=o.updateTrimesh),o.world!==void 0&&(bo=o.world),o.physicsConfig!==void 0&&(Ro=o.physicsConfig),o.minigameActive!==void 0&&(Co=o.minigameActive,nn&&(nn.enabled=!Co))}function dm(){hs(),Le=!1,le=null,za=0,Ha=0,gn=0,Xt=null,An=0,Ba(),Ua()}function fm(){return{isMouseDown:Le,currentIntersectionPoint:le,isLowerMode:be()}}function hm(){return gn}function pm(o){ka=o??null}export{hm as $,Ap as A,dp as B,sp as C,cp as D,lp as E,Mp as F,xp as G,rm as H,Cp as I,Kp as J,Xp as K,Zp as L,Wp as M,em as N,tm as O,im as P,pp as Q,um as R,bp as S,fm as T,am as U,gl as V,ap as W,xr as X,_p as Y,Tp as Z,ip as _,$d as a,ni as a$,up as a0,Sp as a1,hp as a2,Dp as a3,Nh as a4,Ws as a5,Lp as a6,fp as a7,tp as a8,Ip as a9,pm as aA,kp as aB,Gp as aC,Np as aD,Hp as aE,zp as aF,ep as aG,Hh as aH,rp as aI,Op as aJ,cm as aK,op as aL,Dh as aM,uc as aN,Ia as aO,Vs as aP,Ih as aQ,dc as aR,Sh as aS,_r as aT,Rh as aU,Wa as aV,Th as aW,yh as aX,Ht as aY,Lt as aZ,Ps as a_,dm as aa,sm as ab,Rp as ac,Fp as ad,vp as ae,mp as af,sl as ag,Ep as ah,Qp as ai,qp as aj,Kh as ak,$p as al,Jp as am,zh as an,M0 as ao,mn as ap,Pp as aq,Vp as ar,uf as as,gp as at,Yf as au,jp as av,Yp as aw,Up as ax,Bp as ay,nm as az,Jd as b,al as b0,xh as b1,ss as b2,is as b3,_h as b4,Ah as b5,Jl as b6,ji as b7,Zd as c,wr as d,yr as e,_i as f,wt as g,_a as h,M as i,sf as j,q0 as k,mt as l,tt as m,kt as n,Kl as o,Dt as p,$0 as q,np as r,Ut as s,lm as t,qd as u,om as v,J0 as w,Q0 as x,yp as y,wp as z};
