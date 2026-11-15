/* Responsive navigation, accessibility controls and mobile conversion bar */
(function(){
  "use strict";
  var toggle=document.getElementById("mobile-nav-toggle");
  var menu=document.getElementById("mobile-nav");
  if(!toggle||!menu)return;
  function setOpen(open,restoreFocus){
    menu.hidden=!open;
    menu.setAttribute("aria-hidden",open?"false":"true");
    toggle.setAttribute("aria-expanded",open?"true":"false");
    toggle.classList.toggle("is-open",open);
    document.body.classList.toggle("mobile-menu-open",open);
    if(!open&&restoreFocus)toggle.focus();
  }
  toggle.addEventListener("click",function(){setOpen(menu.hidden)});
  menu.addEventListener("click",function(event){
    var a=event.target.closest("a");
    if(a)setOpen(false);
  });
  document.addEventListener("keydown",function(event){
    if(event.key==="Escape"&&!menu.hidden){event.preventDefault();setOpen(false,true);}
  });
  document.addEventListener("pointerdown",function(event){
    if(!menu.hidden&&!menu.contains(event.target)&&!toggle.contains(event.target))setOpen(false);
  });
  window.addEventListener("resize",function(){
    if(window.innerWidth>1070&&!menu.hidden)setOpen(false);
  },{passive:true});
  // If a mobile visitor enters a deep link, keep navigation closed, and
  // avoid covering the linked heading with the fixed header.
  var currentSection=document.getElementById("start-here");
  if(currentSection&&window.location.hash==="#start-here"){
    setOpen(false);
  }
  // Keep this navigation local and privacy-preserving: no client data sent.
})();
