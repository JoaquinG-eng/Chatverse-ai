export function renderChatForm() {
  return `
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
  `;
}
