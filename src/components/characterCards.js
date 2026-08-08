import { characters } from "../data/characters.js";

const characterMeta = {
  Melina: {
    kicker: "English",
    hint: "Aprendé con calma"
  },
  Naruto: {
    kicker: "Energía",
    hint: "Nunca te rindas"
  },
  Rosalina: {
    kicker: "Cosmos",
    hint: "Explorá ideas"
  },
  Mario: {
    kicker: "Diversión",
    hint: "Wahoo!"
  }
};

export function renderCharacters() {
  return `
    <div class="characters" aria-label="Elegir personaje">
      ${characters.map(character => {
        const meta = characterMeta[character.name] || {
          kicker: "Chat",
          hint: "Conversá"
        };

        return `
          <button
            class="character-btn"
            data-character="${character.name}"
            type="button"
            aria-label="Hablar con ${character.displayName || character.name}"
          >
            <span class="character-btn-avatar" aria-hidden="true">
              ${character.avatar}
            </span>

            <span class="character-btn-copy">
              <span class="character-btn-kicker">${meta.kicker}</span>
              <strong>${character.displayName || character.name}</strong>
              <small>${meta.hint}</small>
            </span>

            <span class="character-btn-indicator" aria-hidden="true">↗</span>
          </button>
        `;
      }).join("")}
    </div>
  `;
}
