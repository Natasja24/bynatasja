const header=document.getElementById('header'),progress=document.getElementById('progress'),toggle=document.getElementById('menuToggle'),nav=document.getElementById('nav');
function onScroll(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/max*100)+'%';header.classList.toggle('scrolled',scrollY>40)}
addEventListener('scroll',onScroll,{passive:true});onScroll();
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);toggle.setAttribute('aria-label',open?'Menu sluiten':'Menu openen')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.world,.steps>div,.feature-copy,.manifesto-grid>*,h2').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(24px)';el.style.transition='opacity .8s ease,transform .8s ease';observer.observe(el)});
const style=document.createElement('style');style.textContent='.visible{opacity:1!important;transform:translateY(0)!important}';document.head.appendChild(style);
