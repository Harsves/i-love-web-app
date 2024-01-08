import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_oFM7kPFh.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Baselayout } from './2023-11-24_f8lK3bu2.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate` ${renderComponent($$result, "BaseLayout", $$Baselayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<canvas class="webgl" data-astro-cid-j7pv25f6></canvas> <div class="container" data-astro-cid-j7pv25f6> <section class="section" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>I love web app</h1> </section> <section class="section" data-astro-cid-j7pv25f6> <a href="2023-11-24" data-astro-cid-j7pv25f6>2023-11-24</a> </section> <section class="section" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Under construction</p> </section> </div> ` })} `;
}, "/Users/suusharsveld/Desktop/HVA/Github/i-love-web-app/src/pages/index.astro", void 0);

const $$file = "/Users/suusharsveld/Desktop/HVA/Github/i-love-web-app/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
