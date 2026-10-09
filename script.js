document.documentElement.classList.add('js');
const nav=document.querySelector('.nav'),sc=()=>nav.classList.toggle('solid',scrollY>40);sc();addEventListener('scroll',sc,{passive:true});
const bg=document.querySelector('.burger');bg.onclick=()=>bg.setAttribute('aria-expanded',nav.classList.toggle('open'));
nav.addEventListener('click',e=>{if(e.target.closest('a'))nav.classList.remove('open')});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.querySelectorAll('.chip').forEach(c=>c.onclick=()=>{document.querySelectorAll('.chip').forEach(k=>k.setAttribute('aria-pressed',k===c));const f=c.dataset.f;document.querySelectorAll('#svcgrid .card').forEach(k=>k.hidden=f!=='all'&&k.dataset.cat!==f)});
const items=[...document.querySelectorAll('.mas button')],lb=document.querySelector('.lb');
if(lb){let i=0;const sh=n=>{i=(n+items.length)%items.length;const m=items[i].querySelector('img');lb.querySelector('img').src=m.src;lb.querySelector('p').textContent=m.alt;lb.classList.add('on')},cl=()=>lb.classList.remove('on');
items.forEach((b,n)=>b.onclick=()=>sh(n));lb.querySelector('.x').onclick=cl;lb.querySelector('.pv').onclick=()=>sh(i-1);lb.querySelector('.nx').onclick=()=>sh(i+1);lb.onclick=e=>{if(e.target===lb)cl()};
addEventListener('keydown',e=>{if(!lb.classList.contains('on'))return;if(e.key==='Escape')cl();if(e.key==='ArrowLeft')sh(i-1);if(e.key==='ArrowRight')sh(i+1)})}