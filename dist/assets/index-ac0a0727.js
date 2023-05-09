(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();document.querySelector("#app").innerHTML=`
<div class="follow-me-wrapper">
    <div id="drawing" class="drawing">
        <div id="drawingImage" class="drawing-wrapper">
            <div class="drawing-eye-socket drawing-eye-socket--left">
                <div class="drawing-eye drawing-eye--left"></div>
            </div>
            <div class="drawing-eye-socket drawing-eye-socket--right">
                <div class="drawing-eye drawing-eye--right"></div>
            </div>
            <img src="/scared_bugs_bunny.png" alt="bugs-bunny">
        </div>
    </div>
    <div class="card">
    <div class="card__subcard">
        <h2>Lorem Ipsum Dolor</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, velit.</p>
    </div>
    <div class="card__subcard card__subcard--second">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</div>
</div>
`;function l(c,t){const r=c.getBoundingClientRect(),s=r.left+r.width/2,e=r.top+r.height/2,i=t.clientX,n=t.clientY;let o=Math.atan2(n-e,i-s)*180/Math.PI-90;return o=(o<0?o+360:o)+180,o%360}const d=document.querySelector("#drawing");document.addEventListener("mousemove",function(c){const t=l(d,c);document.querySelectorAll(".drawing-eye-socket").forEach(s=>{s.style.transform=`rotate(${t}deg)`})});
