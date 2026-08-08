import {
  getMsUntilReset,
  formatTimeRemaining,
  getUsedTokens,
  MAX_TOKENS,
} from "../utils/tokenLimit.js";

export function renderTokenBar() {
  return `
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
              <span>${MAX_TOKENS.toLocaleString()}</span>
              <span class="token-bar-percent" id="token-bar-percent">0%</span>
            </div>
          </div>

          <div
            class="token-bar-track"
            id="token-bar-track"
            role="progressbar"
            aria-label="Tokens utilizados hoy"
            aria-valuemin="0"
            aria-valuemax="${MAX_TOKENS}"
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
  `;
}

let _barInterval = null;

function update() {
  const used = getUsedTokens();
  const remaining = Math.max(0, MAX_TOKENS - used);
  const pct = Math.min(100, (used / MAX_TOKENS) * 100);
  const roundedPct = Math.round(pct);
  const ms = getMsUntilReset();

  const bar = document.getElementById("token-bar");
  const usedEl = document.getElementById("token-used");
  const fillEl = document.getElementById("token-bar-fill");
  const trackEl = document.getElementById("token-bar-track");
  const remainingEl = document.getElementById("token-remaining");
  const resetEl = document.getElementById("token-bar-reset");
  const percentEl = document.getElementById("token-bar-percent");
  const stateEl = document.getElementById("token-bar-state");

  if (!usedEl) {
    clearInterval(_barInterval);
    _barInterval = null;
    return;
  }

  usedEl.textContent = used.toLocaleString();
  remainingEl.textContent = `${remaining.toLocaleString()} restantes`;
  percentEl.textContent = `${roundedPct}%`;
  fillEl.style.width = `${pct}%`;

  if (trackEl) {
    trackEl.setAttribute("aria-valuenow", String(used));
    trackEl.setAttribute(
      "aria-valuetext",
      `${used.toLocaleString()} de ${MAX_TOKENS.toLocaleString()} tokens utilizados`
    );
  }

  fillEl.className = "token-bar-fill";
  bar?.classList.remove("warning", "danger");

  if (pct >= 90) {
    fillEl.classList.add("danger");
    bar?.classList.add("danger");
    stateEl.textContent = "Casi al límite";
  } else if (pct >= 60) {
    fillEl.classList.add("warning");
    bar?.classList.add("warning");
    stateEl.textContent = "Uso elevado";
  } else {
    stateEl.textContent = "Disponible";
  }

  if (remaining <= 0) {
    stateEl.textContent = "Límite alcanzado";
  }

  resetEl.textContent = ms > 0
    ? `Se renueva en ${formatTimeRemaining(ms)}`
    : "Disponible nuevamente";
}

export function initTokenBar() {
  const bar = document.getElementById("token-bar");
  if (!bar) return;

  if (_barInterval) {
    clearInterval(_barInterval);
    _barInterval = null;
  }

  update();
  _barInterval = setInterval(update, 1000);
}

export function refreshTokenBar() {
  update();
}
