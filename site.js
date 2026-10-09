/* Full Plate shared behavior: mobile menu. */
(function(){
  const btn=document.querySelector(".nav-menu-btn"),menu=document.getElementById("navMenu");
  if(!btn||!menu)return;
  const set=open=>{btn.setAttribute("aria-expanded",open);btn.setAttribute("aria-label",open?"Close menu":"Menu");menu.hidden=!open;};
  btn.addEventListener("click",()=>set(menu.hidden));
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!menu.hidden){set(false);btn.focus();}});
  menu.addEventListener("click",e=>{if(e.target.closest("a"))set(false);});
  matchMedia("(min-width:640px)").addEventListener("change",e=>{if(e.matches)set(false);});
})();
