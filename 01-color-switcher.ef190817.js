const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");let d;e.setAttribute("disabled",""),t.addEventListener("click",(function(){t.setAttribute("disabled",""),e.removeAttribute("disabled"),d=setInterval((()=>r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`),1e3)})),e.addEventListener("click",(function(){e.setAttribute("disabled",""),t.removeAttribute("disabled"),clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.ef190817.js.map
