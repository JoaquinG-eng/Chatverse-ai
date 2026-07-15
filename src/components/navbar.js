const BRAND_IMAGE = "/images/chatverse-buddy.webp";

export function Navbar() {
const currentPath = window.location.pathname === "/" ? "/home" : window.location.pathname;

const activeClass = path => currentPath === path ? " active-link" : "";

return `
<nav class="navbar" aria-label="Navegación principal">
  <a href="/home" data-link class="nav-brand" aria-label="Ir al inicio">
    <span class="nav-brand-icon" aria-hidden="true">
      <img
        class="nav-brand-logo"
        src="${BRAND_IMAGE}"
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
    <a href="/home" data-link class="nav-link${activeClass("/home")}">Home</a>
    <a href="/chat" data-link class="nav-link${activeClass("/chat")}">Chat</a>
    <a href="/about" data-link class="nav-link${activeClass("/about")}">About</a>
  </div>
</nav>
`;
}