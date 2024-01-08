import { c as createAstro, d as createComponent, r as renderTemplate, e as renderHead, f as renderSlot, g as renderComponent, m as maybeRenderHead } from '../astro_oFM7kPFh.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                               */
/* empty css                               */

const $$Astro$2 = createAstro();
const $$Baselayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Baselayout;
  return renderTemplate`<html lang="nl" data-astro-cid-vm6nzj4c> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><title>I love web</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Dosis:wght@500&family=Overpass&family=Quicksand&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap" rel="stylesheet">${renderHead()}</head> <body class="container mx-auto" data-astro-cid-vm6nzj4c> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/suusharsveld/Desktop/HVA/Github/i-love-web-app/src/layouts/baselayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Menu;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Baselayout, { "data-astro-cid-3nf73upu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<nav data-astro-cid-3nf73upu> <a href="src/pages/index.astro" data-astro-cid-3nf73upu>Home</a> </nav> ` })} `;
}, "/Users/suusharsveld/Desktop/HVA/Github/i-love-web-app/src/layouts/menu.astro", void 0);

const $$Astro = createAstro();
const $$20231124 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$20231124;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Baselayout, { "data-astro-cid-rpggsvhq": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Menu", $$Menu, { "data-astro-cid-rpggsvhq": true })} ${maybeRenderHead()}<section class="container" data-astro-cid-rpggsvhq> <h1 data-astro-cid-rpggsvhq>Yolijn van der Kolk</h1> <h2 data-astro-cid-rpggsvhq>2023-11-24</h2> <img src="image/NL-Design-System.jpg" alt="" data-astro-cid-rpggsvhq> <p data-astro-cid-rpggsvhq>Deze we love web ging over het design system van NL Design systems</p> </section> ` })} `;
}, "/Users/suusharsveld/Desktop/HVA/Github/i-love-web-app/src/pages/2023-11-24.astro", void 0);

const $$file = "/Users/suusharsveld/Desktop/HVA/Github/i-love-web-app/src/pages/2023-11-24.astro";
const $$url = "/2023-11-24";

const _20231124 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$20231124,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Baselayout as $, _20231124 as _ };
