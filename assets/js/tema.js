/* =========================================================
   CONMUTADOR DE TEMA CLARO / OSCURO (compartido por todas
   las páginas). La aplicación inicial del tema se hace con un
   script en línea en el <head> para evitar el parpadeo (FOUC);
   aquí solo se inyecta el botón flotante y se persiste la
   preferencia en localStorage ('istqb:tema' = 'dark' | 'claro').
========================================================= */
(function(){
  'use strict';
  var KEY='istqb:tema';
  function esOscuro(){ return document.documentElement.getAttribute('data-theme')==='dark'; }
  function aplica(oscuro){
    if(oscuro) document.documentElement.setAttribute('data-theme','dark');
    else document.documentElement.removeAttribute('data-theme');
  }
  var btn=document.createElement('button');
  btn.className='theme-toggle';
  btn.type='button';
  function pinta(){
    var d=esOscuro();
    btn.textContent=d?'☀️':'🌙';
    var t=d?'Cambiar a modo claro':'Cambiar a modo oscuro';
    btn.setAttribute('aria-label',t); btn.title=t;
  }
  btn.addEventListener('click',function(){
    var nuevo=!esOscuro();
    aplica(nuevo);
    try{ localStorage.setItem(KEY, nuevo?'dark':'claro'); }catch(_){}
    pinta();
  });
  document.body.appendChild(btn);
  pinta();
})();
