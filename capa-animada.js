(function(){
var img=document.getElementById('homePhotoImg');if(!img)return;
var box=img.parentNode,ca=document.createElement('div');ca.className='ca';ca.setAttribute('aria-hidden','true');
ca.innerHTML='<div class="g fog"></div><div class="g bk k1"></div><div class="g bk k2"></div><div class="g bk k3"></div><div class="g bk k4"></div><div class="g neon"></div><div class="g lamp a"></div><div class="g lamp b"></div><div class="g lamp c"></div><div class="g sign"></div><div class="g led l1"></div><div class="g led l2"></div><div class="g led l3"></div><div class="g floor"></div><div class="g floor b"></div><div class="g ray a"></div><div class="g ray b"></div><div class="g ray c"></div><div class="g orb o1"></div><div class="g orb o2"></div><div class="g orb o3"></div><div class="clip c-logo"><i></i></div><div class="clip c-mach"><i></i></div><div class="clip c-floor"><i></i><i class=\"b\"></i></div><div class="g sos"></div><canvas></canvas>';box.appendChild(ca);
var cv=ca.querySelector('canvas'),ctx=cv.getContext('2d'),W=1,H=1,P=[],NW=1672,NH=941;
function layout(){var bw=box.clientWidth,bh=box.clientHeight;if(!bw||!bh)return;var s=Math.max(bw/NW,bh/NH),w=NW*s,h=NH*s;
 ca.style.width=w+'px';ca.style.height=h+'px';ca.style.left=(bw-w)+'px';ca.style.top=((bh-h)/2)+'px';W=cv.width=w;H=cv.height=h}
layout();addEventListener('resize',layout);if(window.ResizeObserver)new ResizeObserver(layout).observe(box);
function mk(){var gold=Math.random()<.65;return{x:Math.random(),y:Math.random(),r:(gold?1.2:2.4)*(.6+Math.random()),vx:(Math.random()-.5)*.012,vy:-.01-Math.random()*.02,a:Math.random()*6.28,c:gold?'255,205,110':'255,143,177',bk:!gold&&Math.random()<.5}}
for(var i=0;i<110;i++)P.push(mk());
var last=0;
function f(t){var dt=Math.min((t-last)/1000,.05);last=t;
 if(box.offsetParent!==null&&W>1){ctx.clearRect(0,0,W,H);
 P.forEach(function(p){p.x+=p.vx*dt;p.y+=p.vy*dt;p.a+=dt*1.5;if(p.y<-.05){p.y=1.05;p.x=Math.random()}if(p.x<-.05)p.x=1.05;if(p.x>1.05)p.x=-.05;
  var al=.35+.35*Math.sin(p.a),s=H/941*p.r*(p.bk?2.2:1);
  ctx.beginPath();ctx.fillStyle='rgba('+p.c+','+(p.bk?al*.5:al)+')';ctx.arc(p.x*W,p.y*H,s,0,6.28);ctx.fill()})}
 requestAnimationFrame(f)}
requestAnimationFrame(f);
})();