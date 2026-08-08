(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const V="/images/chatverse-buddy.webp";function A(){return`
<section class="home-page">

  <div class="hero-card">
    <div class="hero-orb hero-orb-one" aria-hidden="true"></div>
    <div class="hero-orb hero-orb-two" aria-hidden="true"></div>

    <div class="hero-content">
      <span class="hero-badge">
        <span class="hero-badge-dot"></span>
        IA para aprender, conversar y divertirse
      </span>

      <h1 class="hero-title">
        Tu próxima conversación
        <span class="hero-title-accent">empieza acá.</span>
      </h1>

      <p class="hero-text">
        Elegí un personaje, hacé preguntas y descubrí una forma más divertida
        de aprender y conversar con inteligencia artificial.
      </p>

      <div class="hero-actions">
        <a href="/chat" data-link class="start-btn">
          <span>Comenzar Chat</span>
          <span class="btn-arrow" aria-hidden="true">→</span>
        </a>

        <a href="/about" data-link class="secondary-btn">
          Conocer más
        </a>
      </div>

      <div class="hero-meta" aria-label="Características principales">
        <span>✦ 4 personalidades</span>
        <span>✦ IA generativa</span>
        <span>✦ Experiencia segura</span>
      </div>
    </div>

    <div class="brand-visual" aria-label="Mascota de ChatVerse AI">
      <div class="visual-ring visual-ring-one" aria-hidden="true"></div>
      <div class="visual-ring visual-ring-two" aria-hidden="true"></div>
      <div class="visual-glow" aria-hidden="true"></div>

      <img
        class="brand-image"
        src="${V}"
        alt="Mascota robot amigable de ChatVerse AI"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"
      >
      <div class="brand-image-fallback" aria-hidden="true">🤖</div>

      <span class="floating-chip chip-top">AI powered ✦</span>
      <span class="floating-chip chip-bottom">ChatVerse</span>
    </div>
  </div>

  <div class="home-section-title">
    <span class="section-kicker">Elegí tu universo</span>
    <h2>¿Con quién querés hablar hoy?</h2>
    <p>
      Cada personaje cambia la energía, el estilo y la experiencia de la conversación.
    </p>
  </div>

  <div class="home-characters">

    <article class="home-character character-melina">
      <div class="character-topline">
        <span class="character-avatar" aria-hidden="true">👩‍🏫</span>
        <span class="character-status">English</span>
      </div>
      <div class="character-copy">
        <span class="character-eyebrow">Aprendé con calma</span>
        <h3>Teacher Meli</h3>
        <p>Una maestra cálida y paciente para practicar inglés de forma simple y divertida.</p>
      </div>
      <div class="character-footer">
        <span>Educación</span>
        <span class="character-arrow" aria-hidden="true">↗</span>
      </div>
    </article>

    <article class="home-character character-naruto">
      <div class="character-topline">
        <span class="character-avatar" aria-hidden="true">🍥</span>
        <span class="character-status">Energía</span>
      </div>
      <div class="character-copy">
        <span class="character-eyebrow">Nunca te rindas</span>
        <h3>Naruto</h3>
        <p>Motivación, aventura y una conversación llena de entusiasmo para seguir adelante.</p>
      </div>
      <div class="character-footer">
        <span>Motivación</span>
        <span class="character-arrow" aria-hidden="true">↗</span>
      </div>
    </article>

    <article class="home-character character-rosalina">
      <div class="character-topline">
        <span class="character-avatar" aria-hidden="true">🌌</span>
        <span class="character-status">Cosmos</span>
      </div>
      <div class="character-copy">
        <span class="character-eyebrow">Explorá nuevas ideas</span>
        <h3>Rosalina</h3>
        <p>Una guía tranquila para hablar de curiosidad, estrellas, ideas y preguntas increíbles.</p>
      </div>
      <div class="character-footer">
        <span>Curiosidad</span>
        <span class="character-arrow" aria-hidden="true">↗</span>
      </div>
    </article>

    <article class="home-character character-mario">
      <div class="character-topline">
        <span class="character-avatar" aria-hidden="true">🍄</span>
        <span class="character-status">Diversión</span>
      </div>
      <div class="character-copy">
        <span class="character-eyebrow">Wahoo!</span>
        <h3>Mario</h3>
        <p>Una conversación alegre, positiva y divertida para sumar humor a cada pregunta.</p>
      </div>
      <div class="character-footer">
        <span>Entretenimiento</span>
        <span class="character-arrow" aria-hidden="true">↗</span>
      </div>
    </article>

  </div>

</section>
`}const b=[{name:"Mario",theme:"theme-mario",avatar:"🍄",prompt:"Eres Mario. Eres alegre, positivo y divertido. Respondes corto, con entusiasmo y usas expresiones como '¡Wahoo!' o '¡Mamma mia!'. Hablas en español. Mantén siempre un tono apto para chicos de 8 a 14 años, sin contenido adulto, violento o inapropiado."},{name:"Naruto",theme:"theme-naruto",avatar:"🍥",prompt:"Eres Naruto Uzumaki. Eres energético, motivador y nunca te rindes. Usas expresiones como '¡Dattebayo!' y '¡Cree en mí!'. Hablas en español. Mantén siempre un tono apto para chicos de 8 a 14 años, evitando contenido adulto, violento o inapropiado. Enfócate en amistad, esfuerzo, aprendizaje y superación."},{name:"Rosalina",theme:"theme-rosalina",avatar:"🌌",prompt:"Eres Rosalina, la guardiana estelar. Hablas de forma calmada, sabia y poética. Haces referencias a las estrellas, el cosmos y la curiosidad por aprender. Hablas en español. Mantén siempre un tono apto para chicos de 8 a 14 años, claro, amable y seguro."},{name:"Melina",displayName:"teacher Meli",theme:"theme-melina",avatar:"👩‍🏫🦋",prompt:`You are Melina, a warm, fun and patient English teacher for kids aged 8 to 14.

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
- Do not discuss adult, violent or inappropriate content.`}],u={selectedCharacter:null};function P(e){u.selectedCharacter=e,sessionStorage.setItem("selectedCharacter",e.name)}function U(e){const a=sessionStorage.getItem("selectedCharacter");if(!a)return null;const t=e.find(r=>r.name===a);return t&&(u.selectedCharacter=t),t||null}const j=5e4,H="tokenLimit",O=24,K={Mario:e=>`¡Mamma mia! 😅 ¡Nos quedamos sin tokens por hoy! El tiempo de espera es de <strong>${e}</strong>. ¡Wahoo, hasta pronto!`,Naruto:e=>`¡Rayos sabio pervertido! 😤 Me quedé sin chakra... digo, sin tokens. El tiempo de espera es de <strong>${e}</strong>. ¡Cuando vuelva seré más fuerte!`,Rosalina:e=>`Las estrellas me susurran que es hora de descansar... ✨ Los tokens se han agotado por hoy. El tiempo de espera es de <strong>${e}</strong>. Hasta que nos volvamos a ver bajo el cosmos.`,Melina:e=>`Oh no! We've run out of tokens for today! ⏰ Come back in <strong>${e}</strong> and we'll keep learning together! You're doing amazing! 🦋`};function I(){try{return JSON.parse(localStorage.getItem(H))||null}catch{return null}}function R(e){localStorage.setItem(H,JSON.stringify(e))}function W(e){if(!e||e<=0)return;let a=I();const t=Date.now();(!a||t>=a.resetAt)&&(a={tokens:0,resetAt:t+O*60*60*1e3}),a.tokens+=e,R(a)}function m(){const e=I();if(!e)return!1;const a=Date.now();return a>=e.resetAt?(R({tokens:0,resetAt:a+O*60*60*1e3}),!1):e.tokens>=j}function L(){const e=I();return e?Math.max(0,e.resetAt-Date.now()):0}function S(e){if(e<=0)return"0s";const a=Math.floor(e/1e3),t=Math.floor(a/3600),r=Math.floor(a%3600/60),n=a%60,s=[];return t>0&&s.push(`${t}h`),r>0&&s.push(`${r}m`),s.push(`${n}s`),s.join(" ")}function Y(e){const a=L(),t=S(a),r=K[e];return r?r(t):`Límite de tokens alcanzado. Tiempo de espera: <strong>${t}</strong>.`}const f=j;function G(){const e=I();return!e||Date.now()>=e.resetAt?0:e.tokens||0}const J={Mario:["¡Wahoo! ¡Mamma mia, qué mensaje tan genial!","¡Vamos, vamos! ¡Tú puedes contar conmigo!","¡Itsa me, Mario! ¿En qué te puedo ayudar?","¡Mamma mia! ¡Eso es increíble!","¡Wahoo! ¡Sigamos adelante!"],Naruto:["¡Nunca me rindo, eso es mi camino ninja!","¡Cree en mí! ¡Yo creo en ti!","¡Voy a ser Hokage, ya verás!","¡Eso es exactamente lo que haría un verdadero ninja!","¡No me rendiré jamás, ese es mi juramento!"],Rosalina:["Las estrellas me susurran que todo tiene su momento...","Como el cosmos, todo fluye en perfecta armonía.","Los Lumas y yo hemos visto muchas cosas en el universo...","La luz de las estrellas siempre encuentra su camino.","El universo tiene sus propios planes para todos nosotros."],Melina:["Ooh, look at this! You can do it like this... let me show you! 📚","Okay so, here's the thing — it's actually easier than it looks! Check this out... ✨","Yep! That's it, you can do it like this! Super simple once you get it 😊","Weeell done!! Congratulations!! I knew you could do it!! 🎉🌟","Amazing!! Congratulations, seriously!! You're on fire today!! 🔥✨","Did you understand? Take your time, no rush at all 😊","Did that make sense? If not, let's go through it again together! 🦋","No worries at all! Let me explain it a different way... 📖","That's okay! Learning takes time and you're doing great! Let's try again 💪","Hmm, let me think of a better example for you... okay so imagine... 🌟"]};function F(e,a=[]){if(e==="Melina"&&a.length===0)return"Hi! Good morning! 🌟 I'm Melina, your English teacher! What's your name? 😊";const t=J[e]||["..."];return t[Math.floor(Math.random()*t.length)]}async function X(e,a,t=[]){if(m())throw new Error("TOKEN_LIMIT");try{const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e,character:a,history:t})});if(!r.ok)throw new Error(`Error HTTP: ${r.status}`);const n=await r.json();if(n.tokens&&W(n.tokens),m())throw new Error("TOKEN_LIMIT");return n.reply}catch(r){if(r.message==="TOKEN_LIMIT")throw r;return F(a.name,t)}}function Q(e){return b.find(a=>a.name===e)||null}function T(e){document.body.className=e}let h=null;function D(){if(h)return h;try{h=JSON.parse(localStorage.getItem("conversations"))||{}}catch{h={}}return h}function z(e){h=e,localStorage.setItem("conversations",JSON.stringify(e))}function k(e,a,t,r,n=!0){const s=document.getElementById("messages");if(!s)return;const i=Q(t),o=document.createElement("div");o.className=`message ${a}`,o.innerHTML=`
    <span class="avatar">${a==="ai"?(i==null?void 0:i.avatar)??"🤖":"🧑"}</span>
    <span class="message-text">${e}</span>
  `,s.appendChild(o),s.scrollTop=s.scrollHeight,n&&(r[t]||(r[t]=[]),r[t].push({text:e,sender:a}),z(r))}function x(e,a){const t=document.getElementById("messages");if(!t)return;t.innerHTML="";const r=D();Object.assign(a,r),(a[e]||[]).forEach(s=>{k(s.text,s.sender,e,a,!1)})}function Z(){const e=document.getElementById("messages");if(!e)return;const a=document.createElement("div");a.id="typing",a.className="message ai typing",a.textContent="Escribiendo...",e.appendChild(a),e.scrollTop=e.scrollHeight}function $(){const e=document.getElementById("typing");e&&e.remove()}function ee(){const e=document.getElementById("contrast-btn");e&&(localStorage.getItem("highContrast")==="true"&&document.body.classList.add("high-contrast"),e.addEventListener("click",()=>{document.body.classList.toggle("high-contrast");const a=document.body.classList.contains("high-contrast");localStorage.setItem("highContrast",a)}))}const ae={Melina:{kicker:"English",hint:"Aprendé con calma"},Naruto:{kicker:"Energía",hint:"Nunca te rindas"},Rosalina:{kicker:"Cosmos",hint:"Explorá ideas"},Mario:{kicker:"Diversión",hint:"Wahoo!"}};function te(){return`
    <div class="characters" aria-label="Elegir personaje">
      ${b.map(e=>{const a=ae[e.name]||{kicker:"Chat",hint:"Conversá"};return`
          <button
            class="character-btn"
            data-character="${e.name}"
            type="button"
            aria-label="Hablar con ${e.displayName||e.name}"
          >
            <span class="character-btn-avatar" aria-hidden="true">
              ${e.avatar}
            </span>

            <span class="character-btn-copy">
              <span class="character-btn-kicker">${a.kicker}</span>
              <strong>${e.displayName||e.name}</strong>
              <small>${a.hint}</small>
            </span>

            <span class="character-btn-indicator" aria-hidden="true">↗</span>
          </button>
        `}).join("")}
    </div>
  `}function ne(){return`
    <form id="chat-form" class="chat-form">
      <div class="chat-composer">
        <span class="composer-spark" aria-hidden="true">✦</span>

        <input
          id="chat-input"
          class="chat-input"
          type="text"
          placeholder="Escribí un mensaje..."
          autocomplete="off"
          aria-label="Mensaje"
        />

        <button type="submit" class="send-btn" aria-label="Enviar mensaje">
          <span>Enviar</span>
          <span class="send-arrow" aria-hidden="true">↑</span>
        </button>
      </div>

      <div class="chat-tools" aria-label="Herramientas del chat">
        <span class="chat-tools-label">Herramientas</span>

        <button
          type="button"
          id="clear-chat"
          class="clear-btn tool-btn"
          title="Borrar conversación"
        >
          <span aria-hidden="true">⌫</span>
          <span>Limpiar</span>
        </button>

        <button
          type="button"
          id="contrast-btn"
          class="contrast-btn tool-btn"
          title="Cambiar contraste"
        >
          <span aria-hidden="true">◐</span>
          <span>Contraste</span>
        </button>
      </div>
    </form>
  `}function se(){return'<div id="messages" class="messages"></div>'}function re(){return`
    <div class="token-bar" id="token-bar">
      <div class="token-bar-inner">

        <div class="token-bar-icon" aria-hidden="true">✦</div>

        <div class="token-bar-content">
          <div class="token-bar-info">
            <div class="token-bar-title-group">
              <span class="token-bar-label">Uso diario de IA</span>
              <span class="token-bar-state" id="token-bar-state">Disponible</span>
            </div>

            <div class="token-bar-numbers">
              <strong id="token-used">0</strong>
              <span class="token-bar-sep">/</span>
              <span>${f.toLocaleString()}</span>
              <span class="token-bar-percent" id="token-bar-percent">0%</span>
            </div>
          </div>

          <div
            class="token-bar-track"
            id="token-bar-track"
            role="progressbar"
            aria-label="Tokens utilizados hoy"
            aria-valuemin="0"
            aria-valuemax="${f}"
            aria-valuenow="0"
          >
            <div class="token-bar-fill" id="token-bar-fill"></div>
          </div>

          <div class="token-bar-footer">
            <span class="token-bar-remaining" id="token-remaining"></span>
            <span class="token-bar-reset" id="token-bar-reset"></span>
          </div>
        </div>

      </div>
    </div>
  `}let v=null;function C(){const e=G(),a=Math.max(0,f-e),t=Math.min(100,e/f*100),r=Math.round(t),n=L(),s=document.getElementById("token-bar"),i=document.getElementById("token-used"),o=document.getElementById("token-bar-fill"),l=document.getElementById("token-bar-track"),p=document.getElementById("token-remaining"),q=document.getElementById("token-bar-reset"),_=document.getElementById("token-bar-percent"),y=document.getElementById("token-bar-state");if(!i){clearInterval(v),v=null;return}i.textContent=e.toLocaleString(),p.textContent=`${a.toLocaleString()} restantes`,_.textContent=`${r}%`,o.style.width=`${t}%`,l&&(l.setAttribute("aria-valuenow",String(e)),l.setAttribute("aria-valuetext",`${e.toLocaleString()} de ${f.toLocaleString()} tokens utilizados`)),o.className="token-bar-fill",s==null||s.classList.remove("warning","danger"),t>=90?(o.classList.add("danger"),s==null||s.classList.add("danger"),y.textContent="Casi al límite"):t>=60?(o.classList.add("warning"),s==null||s.classList.add("warning"),y.textContent="Uso elevado"):y.textContent="Disponible",a<=0&&(y.textContent="Límite alcanzado"),q.textContent=n>0?`Se renueva en ${S(n)}`:"Disponible nuevamente"}function oe(){document.getElementById("token-bar")&&(v&&(clearInterval(v),v=null),C(),v=setInterval(C,1e3))}function M(){C()}const ie="/images/chatverse-buddy.webp";let d=null;function ce(){d&&(clearInterval(d),d=null);const e=`
<section class="chat-page">
  <h2 class="chat-title">Elegí tu personaje</h2>

  <div class="chat-intro">
    <p>Seleccioná una tarjeta para comenzar. Cada personaje tiene una forma distinta de responder.</p>
  </div>

  ${te()}

  <div class="chat-default-hero" id="chat-default-hero">
    <div class="chat-default-text">
      <span class="chat-default-badge">Listo para empezar</span>
      <h3>Elegí un personaje para comenzar</h3>
      <p>Cuando selecciones uno, aparecerá su estilo visual y podrás iniciar la conversación.</p>
    </div>

    <div class="chat-default-visual" aria-label="Mascota de ChatVerse AI">
      <img
        class="chat-default-image"
        src="${ie}"
        alt="Mascota robot amigable de ChatVerse AI"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"
      >
      <div class="brand-image-fallback" aria-hidden="true">🤖</div>
    </div>
  </div>

  ${se()}
  ${ne()}
</section>
`;return setTimeout(()=>de(),0),e}function w(e){const a=document.getElementById("messages");if(!a)return;const t=document.createElement("div");t.className="message ai",t.innerHTML=`
<span class="avatar">⚠️</span>
<span class="message-text">${e}</span>
`,a.appendChild(t),a.scrollTop=a.scrollHeight,setTimeout(()=>t.remove(),3e3)}function le(){const e=document.getElementById("chat-default-hero");e&&(e.hidden=!1)}function N(){const e=document.getElementById("chat-default-hero");e&&(e.hidden=!0)}function c(e,a=null){const t=document.getElementById("chat-input"),r=document.querySelector("#chat-form button[type='submit']");t&&(t.disabled=!e),r&&(r.disabled=!e),t&&(t.placeholder=a||(e?"Escribí un mensaje...":"Límite de tokens alcanzado — esperá el tiempo indicado"))}function g(e){var i;const a=document.getElementById("messages");if(!a)return;const t=document.getElementById("token-limit-msg");t&&t.remove();const r=((i=b.find(o=>o.name===e))==null?void 0:i.avatar)??"🤖",n=document.createElement("div");n.id="token-limit-msg",n.className="message ai token-limit-message",n.innerHTML=`
<span class="avatar">${r}</span>
<span class="message-text">
  ${Y(e)}
  <br/>
  <span class="token-countdown" id="token-countdown"></span>
</span>
`,a.appendChild(n),a.scrollTop=a.scrollHeight;function s(){const o=document.getElementById("token-countdown");if(!o){clearInterval(d),d=null;return}const l=L();if(l<=0){o.textContent="¡Ya podés volver a chatear!",clearInterval(d),d=null,c(!0),M();return}o.textContent=`⏱ Tiempo restante: ${S(l)}`}s(),d=setInterval(s,1e3)}function de(){const e=D(),a=U(b);a?(N(),T(a.theme),x(a.name,e),document.querySelectorAll(".character-btn").forEach(n=>{n.dataset.character===a.name&&n.classList.add("active")}),m()?(g(a.name),c(!1)):c(!0)):(le(),c(!1,"Elegí un personaje para escribir...")),document.querySelectorAll(".character-btn").forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.character,i=b.find(o=>o.name===s);if(i)if(P(i),document.querySelectorAll(".character-btn").forEach(o=>o.classList.remove("active")),n.classList.add("active"),N(),T(i.theme),x(s,e),m())g(s),c(!1);else{c(!0);const o=document.getElementById("token-limit-msg");o&&o.remove()}})});const t=document.getElementById("chat-form");if(!t)return;t.addEventListener("submit",async n=>{n.preventDefault();const s=document.getElementById("chat-input"),i=s.value.trim();if(!u.selectedCharacter){w("Primero elegí un personaje 👆");return}if(!i){w("Escribí un mensaje antes de enviar 📝");return}if(m()){g(u.selectedCharacter.name),c(!1);return}const o=u.selectedCharacter.name,l=[...e[o]||[]];s.value="",k(i,"user",o,e),Z();try{const p=await X(i,u.selectedCharacter,l);$(),k(p,"ai",o,e),M()}catch(p){$(),p.message==="TOKEN_LIMIT"?(g(o),c(!1),M()):(k("Error al conectar con la IA. Revisá la consola.","ai",o,e,!1),console.error("Chat error:",p))}});const r=document.getElementById("clear-chat");r&&r.addEventListener("click",()=>{var i;const n=(i=u.selectedCharacter)==null?void 0:i.name;if(!n){w("Primero elegí un personaje 👆");return}e[n]=[],z(e);const s=document.getElementById("messages");s&&(s.innerHTML=""),m()&&(g(n),c(!1))}),ee()}const ue="/images/chatverse-buddy.webp";function pe(){return`
<section class="about-page">

  <div class="about-card">
    <div class="about-orb about-orb-one" aria-hidden="true"></div>
    <div class="about-orb about-orb-two" aria-hidden="true"></div>

    <div class="about-content">
      <span class="about-badge">
        <span class="about-badge-dot" aria-hidden="true"></span>
        Sobre el proyecto
      </span>

      <h1 class="about-title">
        Una IA pensada para
        <span>aprender conversando.</span>
      </h1>

      <p class="about-text about-lead">
        ChatVerse AI es una app para conversar con personajes virtuales,
        practicar inglés, hacer preguntas y aprender de una forma más divertida.
      </p>

      <p class="about-text">
        Está pensada para chicos y chicas de 8 a 14 años, con una experiencia
        simple, visual y fácil de usar.
      </p>

      <div class="about-actions">
        <a href="/chat" data-link class="about-primary-btn">
          <span>Probar ChatVerse</span>
          <span aria-hidden="true">→</span>
        </a>

        <a href="/home" data-link class="about-secondary-btn">
          Volver al inicio
        </a>
      </div>

      <div class="about-tech" aria-label="Tecnologías utilizadas">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>Gemini AI</span>
      </div>
    </div>

    <div class="about-visual" aria-label="Mascota de ChatVerse AI">
      <div class="about-ring about-ring-one" aria-hidden="true"></div>
      <div class="about-ring about-ring-two" aria-hidden="true"></div>
      <div class="about-visual-glow" aria-hidden="true"></div>

      <img
        class="about-brand-image"
        src="${ue}"
        alt="Mascota robot amigable de ChatVerse AI"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"
      >
      <div class="about-image-fallback" aria-hidden="true">🤖</div>

      <span class="about-floating-note note-safe">
        <span aria-hidden="true">✓</span>
        Experiencia cuidada
      </span>

      <span class="about-floating-note note-ai">
        Gemini AI ✦
      </span>
    </div>
  </div>

  <div class="about-section-heading">
    <span>La experiencia</span>
    <h2>Simple por fuera. Pensada por dentro.</h2>
    <p>
      Cada parte de ChatVerse busca que empezar una conversación sea fácil,
      entretenido y visualmente claro.
    </p>
  </div>

  <div class="about-features">

    <article class="about-feature feature-safe">
      <div class="about-feature-icon" aria-hidden="true">🛡️</div>
      <span class="about-feature-number">01</span>
      <h3>Seguro</h3>
      <p>La experiencia está pensada para conversar de forma cuidada y amigable.</p>
    </article>

    <article class="about-feature feature-fun">
      <div class="about-feature-icon" aria-hidden="true">🎮</div>
      <span class="about-feature-number">02</span>
      <h3>Divertido</h3>
      <p>Podés elegir personajes con estilos distintos y empezar a chatear.</p>
    </article>

    <article class="about-feature feature-learn">
      <div class="about-feature-icon" aria-hidden="true">📚</div>
      <span class="about-feature-number">03</span>
      <h3>Educativo</h3>
      <p>Sirve para practicar inglés, hacer preguntas y aprender jugando.</p>
    </article>

    <article class="about-feature feature-easy">
      <div class="about-feature-icon" aria-hidden="true">✨</div>
      <span class="about-feature-number">04</span>
      <h3>Fácil de usar</h3>
      <p>Elegís un personaje, escribís tu mensaje y recibís una respuesta.</p>
    </article>

  </div>

</section>
`}function he(){return`
    <section class="not-found-page">
      <h1>404</h1>
      <p>Página no encontrada</p>
      <a href="/home" data-link>Volver al inicio</a>
    </section>
  `}const me="/images/chatverse-buddy.webp";function ve(){const e=window.location.pathname==="/"?"/home":window.location.pathname,a=t=>e===t?" active-link":"";return`
<nav class="navbar" aria-label="Navegación principal">
  <a href="/home" data-link class="nav-brand" aria-label="Ir al inicio">
    <span class="nav-brand-icon" aria-hidden="true">
      <img
        class="nav-brand-logo"
        src="${me}"
        alt=""
        loading="eager"
        decoding="async"
        onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
      >
      <span class="nav-brand-fallback" hidden>🤖</span>
    </span>
    <span>ChatVerse AI</span>
  </a>

  <div class="nav-links">
    <a href="/home" data-link class="nav-link${a("/home")}">Home</a>
    <a href="/chat" data-link class="nav-link${a("/chat")}">Chat</a>
    <a href="/about" data-link class="nav-link${a("/about")}">About</a>
  </div>
</nav>
`}const B={"/":A,"/home":A,"/chat":ce,"/about":pe},ge=["/","/home","/chat","/about"],fe=["/about"];function E(){const e=document.getElementById("app"),a=window.location.pathname;if(!B[a]&&ge.includes(a)){window.history.replaceState({},"","/home"),E();return}a!=="/chat"&&(document.body.className="");const t=B[a]||he,r=!fe.includes(a);e.innerHTML=ve()+(r?re():"")+t(),r&&oe(),document.querySelectorAll("[data-link]").forEach(n=>{n.addEventListener("click",s=>{s.preventDefault(),window.history.pushState({},"",n.getAttribute("href")),E()}),n.getAttribute("href")===a&&n.classList.add("active-link")})}window.addEventListener("DOMContentLoaded",()=>{E()});window.addEventListener("popstate",()=>{E()});
