(()=>{let e=document.querySelector("#ignition"),t=document.querySelector(".container");function n(e,n){let c=document.createElement("div");c.innerHTML=`<img src="${n}"/> <p>${e}</p>`,t.appendChild(c)}e.addEventListener("click",(function(){fetch("https://rickandmortyapi.com/api/character/").then((e=>e.json())).then((e=>{for(let t of e.results)n(t.name,t.image)}))}))})();