const BRAND_IMAGE = "/images/chatverse-buddy.webp";

export function renderAbout() {
return `
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
        src="${BRAND_IMAGE}"
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
`;
}