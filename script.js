// ── MENÚ — Datos ──
const menuData = [
  // Nieves
  {
    cat: "nieves",
    emoji: "🍦",
    name: "Nieve de Limón",
    desc: "Cremosa y refrescante, con un toque de sal que la hace irresistible.",
    tag: "Clásico",
  },
  {
    cat: "nieves",
    emoji: "🌹",
    name: "Nieve de Tuna",
    desc: "Sabor único de tuna roja, suave y naturalmente dulce.",
    tag: "Artesanal",
  },
  {
    cat: "nieves",
    emoji: "🥭",
    name: "Nieve de Mango",
    desc: "Mango manila en su punto, intenso y tropical.",
    tag: "Favorito",
  },
  {
    cat: "nieves",
    emoji: "🍓",
    name: "Nieve de Fresa",
    desc: "Con trozos de fresa fresca y un color que enamora.",
    tag: "Natural",
  },
  {
    cat: "nieves",
    emoji: "🫐",
    name: "Nieve de Zarzamora",
    desc: "Sabor profundo y ligeramente ácido, perfecta para los atrevidos.",
    tag: "Especial",
  },
  {
    cat: "nieves",
    emoji: "🥜",
    name: "Nieve de Nuez",
    desc: "Cremosa con trozos de nuez, un clásico del norte.",
    tag: "Clásico",
  },

  // Elotes
  {
    cat: "elotes",
    emoji: "🌽",
    name: "Elote en Vaso",
    desc: "Granos de elote tierno con mayonesa, queso, chile y limón.",
    tag: "Popular",
  },
  {
    cat: "elotes",
    emoji: "🫙",
    name: "Elote con Crema",
    desc: "La versión cremosa con jocoque, queso cotija y chamoy opcional.",
    tag: "Cremoso",
  },
  {
    cat: "elotes",
    emoji: "🌽",
    name: "Esquite Especial",
    desc: "Elote salteado con epazote, chile de árbol y limón. Sabor de feria.",
    tag: "Picante",
  },

  // Fresas
  {
    cat: "fresas",
    emoji: "🍓",
    name: "Fresas con Crema",
    desc: "Fresas frescas bañadas en crema dulce y leche condensada.",
    tag: "Clásico",
  },
  {
    cat: "fresas",
    emoji: "🍓",
    name: "Fresas con Chamoy",
    desc: "Fresas con chamoy, tamarindo y chile en polvo. Para los valientes.",
    tag: "Picante",
  },
  {
    cat: "fresas",
    emoji: "🍓",
    name: "Fresas Especiales",
    desc: "Con Nutella, malvaviscos y granola. Una delicia completa.",
    tag: "Gourmet",
  },

  // Paletas y Bolis
  {
    cat: "paletas",
    emoji: "🍡",
    name: "Paleta de Agua",
    desc: "Sabores: mango, tamarindo, limón, sandía, pepino y más. Sin conservadores.",
    tag: "Natural",
  },
  {
    cat: "paletas",
    emoji: "🍦",
    name: "Paleta de Leche",
    desc: "Cremosas: nuez, chocolate, rompope, coco, fresa. Un antojo irresistible.",
    tag: "Cremoso",
  },
  {
    cat: "paletas",
    emoji: "🧊",
    name: "Boli de Mango",
    desc: "Bolsita de hielo con jugo de mango real y chile piquín. Refrescante.",
    tag: "Popular",
  },
  {
    cat: "paletas",
    emoji: "🧊",
    name: "Boli de Tamarindo",
    desc: "El clásico de siempre con su sabor agridulce que te transporta a la infancia.",
    tag: "Clásico",
  },

  // Dorinachos
  {
    cat: "dorinachos",
    emoji: "🌮",
    name: "Dorinachos Clásicos",
    desc: "Doritos con queso fundido, crema y salsa picante. El snack perfecto.",
    tag: "Popular",
  },
  {
    cat: "dorinachos",
    emoji: "🧀",
    name: "Dorinachos Especiales",
    desc: "Con queso, chamoy, pepino, jícama, limón y chile en polvo.",
    tag: "Especial",
  },
  {
    cat: "dorinachos",
    emoji: "🌶️",
    name: "Dorinachos Locos",
    desc: "Versión extrema: todo lo anterior más Valentina, Tajín y cacahuates.",
    tag: "Picante",
  },

  // Cocteles de frutas
  {
    cat: "cocteles",
    emoji: "🍹",
    name: "Coctel de Frutas",
    desc: "Mezcla de frutas de temporada: melón, sandía, mango, jícama y pepino.",
    tag: "Fresco",
  },
  {
    cat: "cocteles",
    emoji: "🥭",
    name: "Coctel Tropical",
    desc: "Mango, piña y tamarindo bañados en chamoy y Tajín. Un viaje al trópico.",
    tag: "Especial",
  },
  {
    cat: "cocteles",
    emoji: "🍉",
    name: "Coctel Picosito",
    desc: "Sandía y pepino con limón, sal, chile en polvo y chamoy. Adictivo.",
    tag: "Picante",
  },
  {
    cat: "cocteles",
    emoji: "🍇",
    name: "Coctel Premium",
    desc: "Con fresas, uvas, kiwi y crema. El más completo y colorido del menú.",
    tag: "Gourmet",
  },
];

// ── MENÚ — Render ──
const grid = document.getElementById("menuGrid");

function renderMenu(cat) {
  const items =
    cat === "todos" ? menuData : menuData.filter((i) => i.cat === cat);
  grid.innerHTML = items
    .map(
      (item, idx) => `
    <div class="menu-item" style="animation-delay:${idx * 50}ms">
      <div class="menu-item-emoji">${item.emoji}</div>
      <div class="menu-item-name">${item.name}</div>
      <p class="menu-item-desc">${item.desc}</p>
      <span class="menu-item-tag">${item.tag}</span>
    </div>
  `,
    )
    .join("");
}

renderMenu("todos");

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderMenu(btn.dataset.cat);
  });
});

// ── NAVBAR — scroll shadow ──
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// ── MOBILE MENU ──
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");

hamburger.addEventListener("click", () => mobileMenu.classList.add("open"));
mobileClose.addEventListener("click", () =>
  mobileMenu.classList.remove("open"),
);
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 80);
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
reveals.forEach((el) => io.observe(el));
