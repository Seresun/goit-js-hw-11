import{i as a,S as l}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();async function u(s){const n=`https://pixabay.com/api/?key=45488141-0a4a6f9550d86e9b8ad8f4cbd&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`,t=await fetch(n);if(!t.ok)throw new Error("Network response was not ok");return t.json()}function f(s){const r=document.querySelector(".gallery"),n=s.map(t=>`
    <a href="${t.largeImageURL}">
      <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy"/>
      <div class="info">
        <p>Likes: ${t.likes}</p>
        <p>Views: ${t.views}</p>
      </div>
    </a>
  `).join("");r.innerHTML=n}let d;const m=document.querySelector("#search-form"),p=document.querySelector(".gallery");let c="";m.addEventListener("submit",g);async function g(s){if(s.preventDefault(),c=s.currentTarget.elements.searchQuery.value.trim(),!c){a.error({title:"Error",message:"Please enter a search term!"});return}p.innerHTML="";try{const r=await u(c);r.hits.length===0?a.warning({title:"Warning",message:"No images found!"}):(f(r.hits),d=new l(".gallery a"))}catch(r){a.error({title:"Error",message:`Something went wrong: ${r.message}`})}}
//# sourceMappingURL=commonHelpers.js.map
