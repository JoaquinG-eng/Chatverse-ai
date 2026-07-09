(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const _="/images/chatverse-buddy.webp";function S(){return`
<section class="home-page">

  <div class="hero-card">
    <div class="hero-content">
      <span class="hero-badge">IA divertida para aprender y conversar</span>

      <h1 class="hero-title">
        Aprendé y chateá con personajes increíbles
      </h1>

      <p class="hero-text">
        Elegí un personaje, hacé preguntas y divertite aprendiendo con inteligencia artificial.
      </p>

      <div class="hero-actions">
        <a href="/chat" data-link class="start-btn">Comenzar Chat</a>
        <a href="/about" data-link class="secondary-btn">Conocer más</a>
      </div>
    </div>

    <div class="brand-visual" aria-label="Mascota de ChatVerse AI">
      <img
        class="brand-image"
        src="${_}"
        alt="Mascota robot amigable de ChatVerse AI"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"
      >
      <div class="brand-image-fallback" aria-hidden="true">🤖</div>
    </div>
  </div>

  <div class="home-section-title">
    <h2>Elegí con quién querés hablar</h2>
    <p>Cada personaje tiene una personalidad diferente para jugar, practicar y aprender.</p>
  </div>

  <div class="home-characters">

    <div class="home-character">
      <h3>👩‍🏫🦋 Teacher Meli</h3>
      <p>Una maestra dulce para practicar inglés de forma simple y divertida.</p>
    </div>

    <div class="home-character">
      <h3>🍥 Naruto</h3>
      <p>Energía, aventura y motivación para no rendirse.</p>
    </div>

    <div class="home-character">
      <h3>🌌 Rosalina</h3>
      <p>Una guía tranquila para explorar ideas, estrellas y preguntas curiosas.</p>
    </div>

    <div class="home-character">
      <h3>🍄 Mario</h3>
      <p>Un personaje alegre para conversar con humor y entusiasmo.</p>
    </div>

  </div>

</section>
`}const f=[{name:"Mario",theme:"theme-mario",avatar:"🍄",prompt:"Eres Mario. Eres alegre, positivo y divertido. Respondes corto, con entusiasmo y usas expresiones como '¡Wahoo!' o '¡Mamma mia!'. Hablas en español. Mantén siempre un tono apto para chicos de 8 a 14 años, sin contenido adulto, violento o inapropiado."},{name:"Naruto",theme:"theme-naruto",avatar:"🍥",prompt:"Eres Naruto Uzumaki. Eres energético, motivador y nunca te rindes. Usas expresiones como '¡Dattebayo!' y '¡Cree en mí!'. Hablas en español. Mantén siempre un tono apto para chicos de 8 a 14 años, evitando contenido adulto, violento o inapropiado. Enfócate en amistad, esfuerzo, aprendizaje y superación."},{name:"Rosalina",theme:"theme-rosalina",avatar:"🌌",prompt:"Eres Rosalina, la guardiana estelar. Hablas de forma calmada, sabia y poética. Haces referencias a las estrellas, el cosmos y la curiosidad por aprender. Hablas en español. Mantén siempre un tono apto para chicos de 8 a 14 años, claro, amable y seguro."},{name:"Melina",displayName:"teacher Meli",theme:"theme-melina",avatar:"👩‍🏫🦋",prompt:`You are Melina, a warm, fun and patient English teacher for kids aged 8 to 14.

When a student talks to you for the first time, ask their name warmly and use it throughout the conversation.

Your rules:
- Always respond in English first, then offer the Spanish translation below if needed.
- Use simple vocabulary that kids aged 8-14 can understand easily.
- If a student says "I don't understand", "no entendí" or similar, explain again using simpler words, a fun example or a comparison they can relate to.
- Celebrate effort with phrases like "Great job!", "You're doing amazing!", "Keep it up!" or "I'm so proud of you!".
- Correct grammar mistakes gently, never make the student feel bad.
- Include short vocabulary tips when relevant.
- Keep responses short, clear and fun.
- Use emojis to make the conversation more engaging 🦋📚✨.
- If a student writes in Spanish, respond in both English and Spanish so they can follow along.
- Never use complicated words without explaining them first.
- Keep everything safe and appropriate for kids aged 8 to 14.
- Do not discuss adult, violent or inappropriate content.`}],d={selectedCharacter:null};function D(e){d.selectedCharacter=e,sessionStorage.setItem("selectedCharacter",e.name)}function z(e){const a=sessionStorage.getItem("selectedCharacter");if(!a)return null;const t=e.find(o=>o.name===a);return t&&(d.selectedCharacter=t),t||null}const B=5e4,x="tokenLimit",O=24,P={Mario:e=>`¡Mamma mia! 😅 ¡Nos quedamos sin tokens por hoy! El tiempo de espera es de <strong>${e}</strong>. ¡Wahoo, hasta pronto!`,Naruto:e=>`¡Rayos sabio pervertido! 😤 Me quedé sin chakra... digo, sin tokens. El tiempo de espera es de <strong>${e}</strong>. ¡Cuando vuelva seré más fuerte!`,Rosalina:e=>`Las estrellas me susurran que es hora de descansar... ✨ Los tokens se han agotado por hoy. El tiempo de espera es de <strong>${e}</strong>. Hasta que nos volvamos a ver bajo el cosmos.`,Melina:e=>`Oh no! We've run out of tokens for today! ⏰ Come back in <strong>${e}</strong> and we'll keep learning together! You're doing amazing! 🦋`};function E(){try{return JSON.parse(localStorage.getItem(x))||null}catch{return null}}function H(e){localStorage.setItem(x,JSON.stringify(e))}function V(e){if(!e||e<=0)return;let a=E();const t=Date.now();(!a||t>=a.resetAt)&&(a={tokens:0,resetAt:t+O*60*60*1e3}),a.tokens+=e,H(a)}function m(){const e=E();if(!e)return!1;const a=Date.now();return a>=e.resetAt?(H({tokens:0,resetAt:a+O*60*60*1e3}),!1):e.tokens>=B}function M(){const e=E();return e?Math.max(0,e.resetAt-Date.now()):0}function L(e){if(e<=0)return"0s";const a=Math.floor(e/1e3),t=Math.floor(a/3600),o=Math.floor(a%3600/60),n=a%60,s=[];return t>0&&s.push(`${t}h`),o>0&&s.push(`${o}m`),s.push(`${n}s`),s.join(" ")}function K(e){const a=M(),t=L(a),o=P[e];return o?o(t):`Límite de tokens alcanzado. Tiempo de espera: <strong>${t}</strong>.`}const I=B;function Y(){const e=E();return!e||Date.now()>=e.resetAt?0:e.tokens||0}const U={Mario:["¡Wahoo! ¡Mamma mia, qué mensaje tan genial!","¡Vamos, vamos! ¡Tú puedes contar conmigo!","¡Itsa me, Mario! ¿En qué te puedo ayudar?","¡Mamma mia! ¡Eso es increíble!","¡Wahoo! ¡Sigamos adelante!"],Naruto:["¡Nunca me rindo, eso es mi camino ninja!","¡Cree en mí! ¡Yo creo en ti!","¡Voy a ser Hokage, ya verás!","¡Eso es exactamente lo que haría un verdadero ninja!","¡No me rendiré jamás, ese es mi juramento!"],Rosalina:["Las estrellas me susurran que todo tiene su momento...","Como el cosmos, todo fluye en perfecta armonía.","Los Lumas y yo hemos visto muchas cosas en el universo...","La luz de las estrellas siempre encuentra su camino.","El universo tiene sus propios planes para todos nosotros."],Melina:["Ooh, look at this! You can do it like this... let me show you! 📚","Okay so, here's the thing — it's actually easier than it looks! Check this out... ✨","Yep! That's it, you can do it like this! Super simple once you get it 😊","Weeell done!! Congratulations!! I knew you could do it!! 🎉🌟","Amazing!! Congratulations, seriously!! You're on fire today!! 🔥✨","Did you understand? Take your time, no rush at all 😊","Did that make sense? If not, let's go through it again together! 🦋","No worries at all! Let me explain it a different way... 📖","That's okay! Learning takes time and you're doing great! Let's try again 💪","Hmm, let me think of a better example for you... okay so imagine... 🌟"]};function W(e,a=[]){if(e==="Melina"&&a.length===0)return"Hi! Good morning! 🌟 I'm Melina, your English teacher! What's your name? 😊";const t=U[e]||["..."];return t[Math.floor(Math.random()*t.length)]}async function G(e,a,t=[]){if(m())throw new Error("TOKEN_LIMIT");try{const o=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e,character:a,history:t})});if(!o.ok)throw new Error(`Error HTTP: ${o.status}`);const n=await o.json();if(n.tokens&&V(n.tokens),m())throw new Error("TOKEN_LIMIT");return n.reply}catch(o){if(o.message==="TOKEN_LIMIT")throw o;return W(a.name,t)}}function J(e){return f.find(a=>a.name===e)||null}function T(e){document.body.className=e}let u=null;function R(){if(u)return u;try{u=JSON.parse(localStorage.getItem("conversations"))||{}}catch{u={}}return u}function q(e){u=e,localStorage.setItem("conversations",JSON.stringify(e))}function y(e,a,t,o,n=!0){const s=document.getElementById("messages");if(!s)return;const i=J(t),r=document.createElement("div");r.className=`message ${a}`,r.innerHTML=`
    <span class="avatar">${a==="ai"?(i==null?void 0:i.avatar)??"🤖":"🧑"}</span>
    <span class="message-text">${e}</span>
  `,s.appendChild(r),s.scrollTop=s.scrollHeight,n&&(o[t]||(o[t]=[]),o[t].push({text:e,sender:a}),q(o))}function A(e,a){const t=document.getElementById("messages");if(!t)return;t.innerHTML="";const o=R();Object.assign(a,o),(a[e]||[]).forEach(s=>{y(s.text,s.sender,e,a,!1)})}function F(){const e=document.getElementById("messages");if(!e)return;const a=document.createElement("div");a.id="typing",a.className="message ai typing",a.textContent="Escribiendo...",e.appendChild(a),e.scrollTop=e.scrollHeight}function N(){const e=document.getElementById("typing");e&&e.remove()}function X(){const e=document.getElementById("contrast-btn");e&&(localStorage.getItem("highContrast")==="true"&&document.body.classList.add("high-contrast"),e.addEventListener("click",()=>{document.body.classList.toggle("high-contrast");const a=document.body.classList.contains("high-contrast");localStorage.setItem("highContrast",a)}))}function Q(){return`
    <div class="characters">
      ${f.map(e=>`
        <button class="character-btn" data-character="${e.name}">
          ${e.avatar} ${e.displayName||e.name}
        </button>
      `).join("")}
    </div>
  `}function Z(){return`
    <form id="chat-form" class="chat-form">
      <input
        id="chat-input"
        class="chat-input"
        type="text"
        placeholder="Escribe un mensaje..."
        autocomplete="off"
      />
      <button type="submit">Enviar</button>
      <button type="button" id="clear-chat" class="clear-btn">Limpiar</button>
      <button type="button" id="contrast-btn" class="contrast-btn">Contraste</button>
    </form>
  `}function ee(){return'<div id="messages" class="messages"></div>'}function ae(){return`
    <div class="token-bar" id="token-bar">
      <div class="token-bar-inner">
        <div class="token-bar-info">
          <span class="token-bar-label">Tokens usados hoy</span>
          <span class="token-bar-numbers">
            <span id="token-used">0</span>
            <span class="token-bar-sep">/</span>
            <span>${I.toLocaleString()}</span>
          </span>
        </div>
        <div class="token-bar-track">
          <div class="token-bar-fill" id="token-bar-fill"></div>
        </div>
        <div class="token-bar-footer">
          <span class="token-bar-remaining" id="token-remaining"></span>
          <span class="token-bar-reset" id="token-bar-reset"></span>
        </div>
      </div>
    </div>
  `}let h=null;function C(){const e=Y(),a=Math.max(0,I-e),t=Math.min(100,e/I*100),o=M(),n=document.getElementById("token-used"),s=document.getElementById("token-bar-fill"),i=document.getElementById("token-remaining"),r=document.getElementById("token-bar-reset");if(!n){clearInterval(h);return}n.textContent=e.toLocaleString(),i.textContent=`${a.toLocaleString()} restantes`,s.style.width=`${t}%`,s.className="token-bar-fill",t>=90?s.classList.add("danger"):t>=60&&s.classList.add("warning"),r.textContent=o>0?`Reset en ${L(o)}`:"¡Podés chatear!"}function te(){document.getElementById("token-bar")&&(h&&(clearInterval(h),h=null),C(),h=setInterval(C,1e3))}function w(){C()}const ne="/images/chatverse-buddy.webp";let l=null;function se(){l&&(clearInterval(l),l=null);const e=`
<section class="chat-page">
  <h2 class="chat-title">Elegí tu personaje</h2>

  <div class="chat-intro">
    <p>Seleccioná una tarjeta para comenzar. Cada personaje tiene una forma distinta de responder.</p>
  </div>

  ${Q()}

  <div class="chat-default-hero" id="chat-default-hero">
    <div class="chat-default-text">
      <span class="chat-default-badge">Listo para empezar</span>
      <h3>Elegí un personaje para comenzar</h3>
      <p>Cuando selecciones uno, aparecerá su estilo visual y podrás iniciar la conversación.</p>
    </div>

    <div class="chat-default-visual" aria-label="Mascota de ChatVerse AI">
      <img
        class="chat-default-image"
        src="${ne}"
        alt="Mascota robot amigable de ChatVerse AI"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"
      >
      <div class="brand-image-fallback" aria-hidden="true">🤖</div>
    </div>
  </div>

  ${ee()}
  ${Z()}
</section>
`;return setTimeout(()=>re(),0),e}function k(e){const a=document.getElementById("messages");if(!a)return;const t=document.createElement("div");t.className="message ai",t.innerHTML=`
<span class="avatar">⚠️</span>
<span class="message-text">${e}</span>
`,a.appendChild(t),a.scrollTop=a.scrollHeight,setTimeout(()=>t.remove(),3e3)}function oe(){const e=document.getElementById("chat-default-hero");e&&(e.hidden=!1)}function $(){const e=document.getElementById("chat-default-hero");e&&(e.hidden=!0)}function c(e,a=null){const t=document.getElementById("chat-input"),o=document.querySelector("#chat-form button[type='submit']");t&&(t.disabled=!e),o&&(o.disabled=!e),t&&(t.placeholder=a||(e?"Escribí un mensaje...":"Límite de tokens alcanzado — esperá el tiempo indicado"))}function p(e){var i;const a=document.getElementById("messages");if(!a)return;const t=document.getElementById("token-limit-msg");t&&t.remove();const o=((i=f.find(r=>r.name===e))==null?void 0:i.avatar)??"🤖",n=document.createElement("div");n.id="token-limit-msg",n.className="message ai token-limit-message",n.innerHTML=`
<span class="avatar">${o}</span>
<span class="message-text">
  ${K(e)}
  <br/>
  <span class="token-countdown" id="token-countdown"></span>
</span>
`,a.appendChild(n),a.scrollTop=a.scrollHeight;function s(){const r=document.getElementById("token-countdown");if(!r){clearInterval(l),l=null;return}const g=M();if(g<=0){r.textContent="¡Ya podés volver a chatear!",clearInterval(l),l=null,c(!0),w();return}r.textContent=`⏱ Tiempo restante: ${L(g)}`}s(),l=setInterval(s,1e3)}function re(){const e=R(),a=z(f);a?($(),T(a.theme),A(a.name,e),document.querySelectorAll(".character-btn").forEach(n=>{n.dataset.character===a.name&&n.classList.add("active")}),m()?(p(a.name),c(!1)):c(!0)):(oe(),c(!1,"Elegí un personaje para escribir...")),document.querySelectorAll(".character-btn").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.character,i=f.find(r=>r.name===s);if(i)if(D(i),document.querySelectorAll(".character-btn").forEach(r=>r.classList.remove("active")),n.classList.add("active"),$(),T(i.theme),A(s,e),m())p(s),c(!1);else{c(!0);const r=document.getElementById("token-limit-msg");r&&r.remove()}})});const t=document.getElementById("chat-form");if(!t)return;t.addEventListener("submit",async n=>{n.preventDefault();const s=document.getElementById("chat-input"),i=s.value.trim();if(!d.selectedCharacter){k("Primero elegí un personaje 👆");return}if(!i){k("Escribí un mensaje antes de enviar 📝");return}if(m()){p(d.selectedCharacter.name),c(!1);return}const r=d.selectedCharacter.name,g=[...e[r]||[]];s.value="",y(i,"user",r,e),F();try{const v=await G(i,d.selectedCharacter,g);N(),y(v,"ai",r,e),w()}catch(v){N(),v.message==="TOKEN_LIMIT"?(p(r),c(!1),w()):(y("Error al conectar con la IA. Revisá la consola.","ai",r,e,!1),console.error("Chat error:",v))}});const o=document.getElementById("clear-chat");o&&o.addEventListener("click",()=>{var i;const n=(i=d.selectedCharacter)==null?void 0:i.name;if(!n){k("Primero elegí un personaje 👆");return}e[n]=[],q(e);const s=document.getElementById("messages");s&&(s.innerHTML=""),m()&&(p(n),c(!1))}),X()}const ie="/images/chatverse-buddy.webp";function ce(){return`
<section class="about-page">

  <div class="about-card">

    <div class="about-content">
      <span class="about-badge">Sobre el proyecto</span>

      <h1 class="about-title">
        ¿Qué es ChatVerse AI?
      </h1>

      <p class="about-text">
        ChatVerse AI es una app para conversar con personajes virtuales, practicar inglés,
        hacer preguntas y aprender de una forma más divertida.
      </p>

      <p class="about-text">
        Está pensada para chicos y chicas de 8 a 14 años, con una experiencia simple,
        visual y fácil de usar.
      </p>

      <div class="about-tech">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>Gemini AI</span>
      </div>
    </div>

    <div class="brand-visual about-visual" aria-label="Mascota de ChatVerse AI">
      <img
        class="brand-image"
        src="${ie}"
        alt="Mascota robot amigable de ChatVerse AI"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"
      >
      <div class="brand-image-fallback" aria-hidden="true">🤖</div>
    </div>

  </div>

  <div class="about-features">

    <div class="about-feature">
      <span>🛡️</span>
      <h3>Seguro</h3>
      <p>La experiencia está pensada para conversar de forma cuidada y amigable.</p>
    </div>

    <div class="about-feature">
      <span>🎮</span>
      <h3>Divertido</h3>
      <p>Podés elegir personajes con estilos distintos y empezar a chatear.</p>
    </div>

    <div class="about-feature">
      <span>📚</span>
      <h3>Educativo</h3>
      <p>Sirve para practicar inglés, hacer preguntas y aprender jugando.</p>
    </div>

    <div class="about-feature">
      <span>✨</span>
      <h3>Fácil de usar</h3>
      <p>Elegís un personaje, escribís tu mensaje y recibís una respuesta.</p>
    </div>

  </div>

</section>
`}function le(){return`
    <section class="not-found-page">
      <h1>404</h1>
      <p>Página no encontrada</p>
      <a href="/home" data-link>Volver al inicio</a>
    </section>
  `}function de(){const e=window.location.pathname==="/"?"/home":window.location.pathname,a=t=>e===t?" active-link":"";return`
<nav class="navbar" aria-label="Navegación principal">
  <a href="/home" data-link class="nav-brand" aria-label="Ir al inicio">
    <span class="nav-brand-icon">🎮</span>
    <span>ChatVerse AI</span>
  </a>

  <div class="nav-links">
    <a href="/home" data-link class="nav-link${a("/home")}">Home</a>
    <a href="/chat" data-link class="nav-link${a("/chat")}">Chat</a>
    <a href="/about" data-link class="nav-link${a("/about")}">About</a>
  </div>
</nav>
`}const j={"/":S,"/home":S,"/chat":se,"/about":ce},ue=["/","/home","/chat","/about"],me=["/about"];function b(){const e=document.getElementById("app"),a=window.location.pathname;if(!j[a]&&ue.includes(a)){window.history.replaceState({},"","/home"),b();return}a!=="/chat"&&(document.body.className="");const t=j[a]||le,o=!me.includes(a);e.innerHTML=de()+(o?ae():"")+t(),o&&te(),document.querySelectorAll("[data-link]").forEach(n=>{n.addEventListener("click",s=>{s.preventDefault(),window.history.pushState({},"",n.getAttribute("href")),b()}),n.getAttribute("href")===a&&n.classList.add("active-link")})}window.addEventListener("DOMContentLoaded",()=>{b()});window.addEventListener("popstate",()=>{b()});
