const BRAND_IMAGE = "/images/chatverse-buddy.webp";

export function renderHome() {
return `
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
        src="${BRAND_IMAGE}"
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
`;
}