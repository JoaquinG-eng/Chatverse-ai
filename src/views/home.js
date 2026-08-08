const BRAND_IMAGE = "/images/chatverse-buddy.webp";

export function renderHome() {
return `
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
        src="${BRAND_IMAGE}"
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
`;
}
