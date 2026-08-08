const BRAND_IMAGE = "/images/chatverse-buddy.webp";

export function renderAbout() {
return `
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
        src="${BRAND_IMAGE}"
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
`;
}
