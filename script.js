/* ====== EDIT ME ====== */
const C={name:"Tehreem",age:19,
// Put your file paths here, e.g. photos:["photos/1.jpg","photos/2.jpg","photos/3.jpg"]
photos:["photos/1.jpg","photos/2.jpg","photos/3.jpg","photos/4.jpg","photos/5.jpg","photos/6.jpg","photos/7.jpg"],
// Song path, e.g. audio:"audio/song.mp3"
audio:"audio/song.mp3",
msg:"Tehreem, you make every day brighter. Thank you for being you. Happy 19th!",
wishes:["You are the reason our group chat never goes quiet.","Wishing you a year full of adventure and good news.","Never change that amazing laugh.","Here is to every inside joke we have shared.","May every dream you carry come true this year.","You deserve all the cake today.","So proud of everything you are becoming.","Tehreem, you are the best friend anyone could ask for. Happy 19th birthday!"]};
/* ===================== */
const $=s=>document.querySelector(s);
$("#n1").textContent=$("#n2").textContent=C.name;$("#msg").textContent=C.msg;
(function(){const L=C.photos.length?C.photos:[null,null,null,null,null,null];let a=[];while(a.length<8)a=a.concat(L);const h=a.map((s,i)=>`<div class="pic" style="animation-delay:${-i*.7}s"><div class="fr">${s?`<img src="${s}" alt="">`:`<div class="ph">Your photo</div>`}</div></div>`).join("");$("#trk").innerHTML=h+h;$("#trk").style.animationDuration=a.length*4+"s"})();
let stage="intro";
const show=id=>{document.querySelectorAll(".sc").forEach(e=>e.classList.toggle("on",e.id===id))};
const scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(50,1,.1,100);cam.position.z=11;
const ren=new THREE.WebGLRenderer({antialias:true,alpha:true});ren.setPixelRatio(Math.min(devicePixelRatio,2));
document.body.prepend(ren.domElement);
scene.add(new THREE.HemisphereLight(0xffffff,0x8866ff,.95));
const dl=new THREE.DirectionalLight(0xffffff,.8);dl.position.set(3,5,6);scene.add(dl);
const gG=new THREE.Group(),gB=new THREE.Group(),gC=new THREE.Group();scene.add(gG,gB,gC);gB.visible=gC.visible=false;
let W=10;
function rs(){ren.setSize(innerWidth,innerHeight);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();W=2*11*Math.tan(25*Math.PI/180)*cam.aspect;gG.scale.setScalar(Math.min(1,(W-.6)/4.8));gC.scale.setScalar(Math.min(1,(W-.6)/6.8));layout()}
const ph=(c,s=80)=>new THREE.MeshPhongMaterial({color:c,shininess:s});
/* gift */
const box=new THREE.Mesh(new THREE.BoxGeometry(3,2.6,3),ph(0xff4d8d));
const lid=new THREE.Mesh(new THREE.BoxGeometry(3.3,.7,3.3),ph(0xffd166));lid.position.y=1.5;
const r1=new THREE.Mesh(new THREE.BoxGeometry(.6,3.3,3.1),ph(0xffffff));r1.position.y=.2;
const r2=new THREE.Mesh(new THREE.BoxGeometry(3.1,3.3,.6),ph(0xffffff));r2.position.y=.2;
const bowMat=ph(0xffe08a,150);
const loop1=new THREE.Mesh(new THREE.TorusGeometry(.42,.13,12,24),bowMat);loop1.position.set(-.42,2.05,0);loop1.rotation.y=.35;
const loop2=new THREE.Mesh(new THREE.TorusGeometry(.42,.13,12,24),bowMat);loop2.position.set(.42,2.05,0);loop2.rotation.y=-.35;
const knot=new THREE.Mesh(new THREE.SphereGeometry(.22,20,20),bowMat);knot.position.set(0,2.05,0);
gG.add(box,lid,r1,r2,loop1,loop2,knot);gG.position.y=-.9;
/* balloons */
const cols=[0xff4d6d,0x4cc9f0,0x06d6a0,0xb5179e,0xff9f1c,0x7b5cff,0xff6ec4,0xffd700];
const bl=[];let popped=0;
C.wishes.forEach((w,i)=>{const g=new THREE.Group(),m=new THREE.Mesh(new THREE.SphereGeometry(1,32,32),ph(cols[i%8],i==7?150:90));m.scale.set(.85,1,.85);
const k=new THREE.Mesh(new THREE.ConeGeometry(.12,.2,8),m.material);k.position.y=-1.08;k.rotation.x=Math.PI;
const s=new THREE.Mesh(new THREE.CylinderGeometry(.008,.008,1.6),new THREE.MeshBasicMaterial({color:0xffffff}));s.position.y=-1.9;
g.add(m,k,s);m.userData.b=g;g.userData={w,ph:Math.random()*6,d:i*.12,ty:0,tx:0};g.position.y=-9;gB.add(g);bl.push(g)});
function layout(){const n=bl.length,m=innerWidth<700,cl=m?3:4,sp=Math.min(2.7,(W-1.4)/cl),s=m?.62:1,vs=m?2.1:2.8;bl.forEach((g,i)=>{const r=Math.floor(i/cl),c=i%cl,inr=Math.min(cl,n-r*cl);g.userData.tx=(c-(inr-1)/2)*sp;g.userData.ty=(m?2.4:2.2)-r*vs;g.scale.setScalar(s)})}
/* cake */
const cakeG=new THREE.Group();gC.add(cakeG);
const cyl=(r,h,c,y)=>{const m=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,48),ph(c,40));m.position.y=y;cakeG.add(m)};
cyl(2.6,1.3,0xff8fc7,-1.4);cyl(1.8,1.1,0xfff1f8,-.2);
/* glossy frosting pearls + strawberry decorations */
for(let i=0;i<18;i++){const a=i/18*Math.PI*2;const pearl=new THREE.Mesh(new THREE.SphereGeometry(.105,16,12),ph(0xffffff,180));pearl.position.set(Math.cos(a)*2.38,-.72,Math.sin(a)*2.38);cakeG.add(pearl)}
for(let i=0;i<7;i++){const a=i/7*Math.PI*2;const berry=new THREE.Mesh(new THREE.SphereGeometry(.22,20,16),ph(0xe92355,120));berry.scale.set(.8,1.25,.8);berry.position.set(Math.cos(a)*1.15,.42,Math.sin(a)*1.15);cakeG.add(berry);const leaf=new THREE.Mesh(new THREE.ConeGeometry(.09,.24,8),ph(0x35a85b));leaf.position.copy(berry.position);leaf.y+=.24;cakeG.add(leaf)}
const ic=new THREE.Mesh(new THREE.TorusGeometry(1.8,.14,12,48),ph(0xff4d8d));ic.rotation.x=Math.PI/2;ic.position.y=.35;cakeG.add(ic);
const pl=new THREE.Mesh(new THREE.CylinderGeometry(3.4,3.4,.15,48),ph(0xffffff,120));pl.position.y=-2.1;cakeG.add(pl);
const cs=[];const NC=Math.min(C.age,24);
for(let i=0;i<NC;i++){const a=i/NC*Math.PI*2,rad=NC>1?1.35:0;const g=new THREE.Group();g.position.set(Math.cos(a)*rad,.35,Math.sin(a)*rad);
const c=new THREE.Mesh(new THREE.CylinderGeometry(.07,.07,.7,12),ph(cols[i%8]));c.position.y=.35;
const f=new THREE.Mesh(new THREE.SphereGeometry(.13,12,12),new THREE.MeshBasicMaterial({color:0xffc53d}));f.scale.y=1.7;f.position.y=.9;
g.add(c,f);g.userData={f,on:true};cakeG.add(g);cs.push(g)}
gC.position.y=-.2;gC.rotation.x=.28;
/* particles */
const P=[],pg=new THREE.PlaneGeometry(.18,.1);
function burst(p,n=40,up=1,cl=cols,sz=1){for(let i=0;i<n;i++){const m=new THREE.Mesh(pg,new THREE.MeshBasicMaterial({color:cl[i%cl.length],side:2}));m.scale.setScalar(sz);m.position.copy(p);
const a=Math.random()*6.28,s=(.05+Math.random()*.12)*up;m.userData={v:new THREE.Vector3(Math.cos(a)*s,Math.random()*s*1.6,(Math.random()-.5)*s),l:1,g:up>0?-.004:.001};scene.add(m);P.push(m)}}
/* sound */
let ac;const sfx=()=>{try{ac=ac||new(window.AudioContext||webkitAudioContext)();const b=ac.createBuffer(1,3000,ac.sampleRate),d=b.getChannelData(0);for(let i=0;i<3000;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/3000,3);const s=ac.createBufferSource();s.buffer=b;s.connect(ac.destination);s.start()}catch(e){}};
let au;function music(){if(!C.audio)return;au=new Audio(C.audio);au.loop=true;au.volume=.7;au.play().catch(()=>{});$("#mute").style.display="block"}
$("#mute").onclick=()=>{if(!au)return;au.muted=!au.muted;$("#mute").textContent=au.muted?"×":"♪"};
/* input */
const ray=new THREE.Raycaster(),mv=new THREE.Vector2();
function pick(e,list){mv.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1);ray.setFromCamera(mv,cam);return ray.intersectObjects(list,true)[0]}
ren.domElement.addEventListener("pointerdown",e=>{
 if(stage==="intro"){if(pick(e,gG.children))start();return}
 if(stage==="balloons"&&!$("#card").classList.contains("on")){const h=pick(e,bl.map(g=>g.children[0]));if(h)popB(h.object.userData.b)}
 if(stage==="cake"){const h=pick(e,cs.map(c=>c.children[0]));if(h)out(cs.find(c=>c.children[0]===h.object))}});
$("#go").onclick=start;
function start(){if(stage!=="intro")return;stage="count";music();sfx();show("count");let n=3;const t=()=>{if(n>0){$("#num").textContent=n;const b=$("#num");b.style.animation="none";b.offsetHeight;b.style.animation="";n--;setTimeout(t,1000)}else{burst(gG.position,120,1.4);sfx();gG.visible=false;gB.visible=true;stage="balloons";show("none");$("#hud").classList.add("on");upd()}};t()}
function upd(){$("#cnt").textContent=`${popped} of ${bl.length} balloons popped`}
function popB(g){burst(g.position.clone().add(gB.position),50,1,[g.children[0].material.color.getHex(),0xffffff]);sfx();gB.remove(g);popped++;upd();$("#wt").textContent=g.userData.w;$("#card").classList.add("on");if(popped===bl.length)setTimeout(()=>{},0)}
$("#card").onclick=()=>{$("#card").classList.remove("on");if(popped===bl.length)$("#nxt").style.display="block"};
$("#nxt").onclick=()=>{$("#nxt").style.display="none";$("#hud").classList.remove("on");gB.visible=false;gC.visible=true;stage="cake";show("cake");mic()};
/* candles */
let lvl=()=>0,last=0,done=false;
async function mic(){try{const s=await navigator.mediaDevices.getUserMedia({audio:true});ac=ac||new(window.AudioContext||webkitAudioContext)();const a=ac.createAnalyser();a.fftSize=512;ac.createMediaStreamSource(s).connect(a);const d=new Uint8Array(a.frequencyBinCount);lvl=()=>{a.getByteFrequencyData(d);let v=0;for(let i=0;i<40;i++)v+=d[i];return v/40}}catch(e){$("#cp").textContent="Tap the candles or the button to blow them out"}}
function out(c){if(!c||!c.userData.on)return;c.userData.on=false;c.userData.f.visible=false;const p=new THREE.Vector3();c.userData.f.getWorldPosition(p);burst(p,10,.25,[0xcccccc,0xeeeeee],.6);
 if(cs.every(x=>!x.userData.on)&&!done){done=true;setTimeout(finale,900)}}
$("#blow").onclick=()=>{let i=0;const t=setInterval(()=>{const c=cs.find(x=>x.userData.on);if(!c)return clearInterval(t);out(c)},220)};
function finale(){stage="fin";gC.visible=false;show("fin");let n=0;const t=setInterval(()=>{burst(new THREE.Vector3((Math.random()-.5)*W*.8,Math.random()*4,0),70,1.4,[0xffd700,0xff4d8d,0x4cc9f0,0xffffff]);sfx();if(++n>10)clearInterval(t)},500)}

/* ===== 50 GIFT MINI-GAME (touch friendly) ===== */
const gameField=$("#gamefield"),scoreEl=$("#score");let gameScore=0,gameTimer=null;
$("#playgame").onclick=()=>{stage="game";show("game");startGiftGame()};
$("#gameback").onclick=()=>{show("fin");stage="fin"};
function startGiftGame(){
 gameScore=0;scoreEl.textContent="0 / 50";$("#gamehint").textContent="Tap gifts as they appear — you can do it!";
 $("#gameback").style.display="none";gameField.innerHTML="";
 if(gameTimer)clearInterval(gameTimer);
 gameTimer=setInterval(()=>{
  if(gameScore>=50){clearInterval(gameTimer);return}
  const gift=document.createElement("button");gift.className="fallgift";gift.type="button";gift.textContent=["🎁","💝","🎀","🧸"][Math.floor(Math.random()*4)];
  gift.style.left=(5+Math.random()*78)+"%";gift.style.animationDuration=(2.8+Math.random()*1.8)+"s";
  gift.setAttribute("aria-label","Collect gift");
  gift.onclick=()=>{if(gift.dataset.hit)return;gift.dataset.hit="1";gameScore++;scoreEl.textContent=gameScore+" / 50";gift.textContent="✨";gift.classList.add("caught");setTimeout(()=>gift.remove(),250);if(gameScore===50){clearInterval(gameTimer);$("#gamehint").textContent="YOU DID IT! 50 gifts collected! 🎉 Happy Birthday Tehreem!";$("#gameback").style.display="inline-block";burst(new THREE.Vector3(0,1,0),100,1.5,[0xffd700,0xff4d8d,0x4cc9f0,0xffffff]);}}
  gameField.appendChild(gift);setTimeout(()=>gift.remove(),5000);
 },520);
}

/* loop */
rs();addEventListener("resize",rs);
const clock=new THREE.Clock();
(function loop(){requestAnimationFrame(loop);const t=clock.getElapsedTime();
 gG.rotation.y=t*.8;gG.position.y=-.9+Math.sin(t*2)*.25;if(stage==="count")gG.position.x=Math.sin(t*40)*.08;
 bl.forEach(g=>{if(!g.parent)return;const u=g.userData,d=Math.max(0,t-u.d);g.position.x+=(u.tx+Math.sin(t+u.ph)*.25-g.position.x)*.05;g.position.y+=(u.ty+Math.sin(t*1.3+u.ph)*.25-g.position.y)*.04;g.rotation.z=Math.sin(t+u.ph)*.08});
 if(gC.visible){cakeG.rotation.y=t*.35;cs.forEach(c=>{if(c.userData.on){const f=c.userData.f;f.scale.set(1+Math.sin(t*20+c.id)*.15,1.7+Math.sin(t*15+c.id)*.25,1)}});
  if(stage==="cake"&&lvl()>45&&t-last>.3){last=t;const c=cs.find(x=>x.userData.on);out(c)}}
 for(let i=P.length-1;i>=0;i--){const m=P[i],u=m.userData;m.position.add(u.v);u.v.y+=u.g;u.v.multiplyScalar(.985);m.rotation.x+=.2;m.rotation.y+=.15;u.l-=.008;m.material.opacity=1;if(u.l<=0){scene.remove(m);P.splice(i,1)}}
 ren.render(scene,cam)})();
