import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_oFM7kPFh.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.mvk22vjm.js"}],"styles":[{"type":"inline","content":"html{box-sizing:border-box;font-size:16px;height:100vh;background-color:#000}[data-astro-cid-vm6nzj4c],[data-astro-cid-vm6nzj4c]:before,[data-astro-cid-vm6nzj4c]:after{box-sizing:inherit}body,h1[data-astro-cid-vm6nzj4c],h2[data-astro-cid-vm6nzj4c],h3[data-astro-cid-vm6nzj4c],h4[data-astro-cid-vm6nzj4c],h5[data-astro-cid-vm6nzj4c],h6[data-astro-cid-vm6nzj4c],p[data-astro-cid-vm6nzj4c],ol[data-astro-cid-vm6nzj4c],ul[data-astro-cid-vm6nzj4c]{margin:0;padding:0;font-weight:400}ol[data-astro-cid-vm6nzj4c],ul[data-astro-cid-vm6nzj4c]{list-style:none}img[data-astro-cid-vm6nzj4c]{max-width:100%;height:auto}[data-astro-cid-vm6nzj4c]{box-sizing:border-box;margin:0;padding:0;line-height:1.4}:root{--primary: #6074BA;--primary-dark: #2a9c44;--primary-light: #cbf2d1;--secondary: #5BC0EB;--secondary-dark: #1874b0;--seconday-light: #b5e4f7;--on-primary: #FFFFFF;--on-secondary: #000000;--accent: #FFB100;--surface: #E4C1F9;--alternative: #a7a6ae;--text: #50B0AE;--header:\"Orbitron\", sans-serif;--body-text: \"Overpass\", sans-serif;--numbers: \"Quicksand\", sans-serif;--regular: 400;--medium: 500;--h1: 50px;--h2: 26px;--h3: 22px;--h4: 20px;--h5: 18px;--h6: 16px;--p: 16px}\n.webgl[data-astro-cid-j7pv25f6]{position:fixed;top:0;left:0;outline:none}.container[data-astro-cid-j7pv25f6]{scroll-snap-type:y mandatory}.section[data-astro-cid-j7pv25f6]{display:flex;align-items:center;height:100vh;position:relative;font-family:Orbitron,sans-serif;color:var(--primary);text-transform:uppercase;font-size:7vmin;padding-left:10%;padding-right:10%;scroll-snap-align:start}section[data-astro-cid-j7pv25f6]:nth-child(2n){justify-content:flex-end}a[data-astro-cid-j7pv25f6]{color:var(--primary)}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"a[data-astro-cid-3nf73upu]{font-family:var(--header);color:var(--primary);font-size:var(--p);display:inline-block;padding:30px;width:auto;height:auto}.container[data-astro-cid-rpggsvhq]{display:flex;align-items:center;flex-direction:column}h1[data-astro-cid-rpggsvhq]{font-family:var(--header);font-weight:var(--medium);font-size:70px;margin-top:20px;color:var(--on-primary)}h2[data-astro-cid-rpggsvhq]{font-family:var(--header);font-weight:var(--regular);color:var(--on-primary)}img[data-astro-cid-rpggsvhq]{width:35%}p[data-astro-cid-rpggsvhq]{font-family:var(--body-text);font-weight:var(--regular);font-size:var(--p);color:var(--on-primary)}\nhtml{box-sizing:border-box;font-size:16px;height:100vh;background-color:#000}[data-astro-cid-vm6nzj4c],[data-astro-cid-vm6nzj4c]:before,[data-astro-cid-vm6nzj4c]:after{box-sizing:inherit}body,h1[data-astro-cid-vm6nzj4c],h2[data-astro-cid-vm6nzj4c],h3[data-astro-cid-vm6nzj4c],h4[data-astro-cid-vm6nzj4c],h5[data-astro-cid-vm6nzj4c],h6[data-astro-cid-vm6nzj4c],p[data-astro-cid-vm6nzj4c],ol[data-astro-cid-vm6nzj4c],ul[data-astro-cid-vm6nzj4c]{margin:0;padding:0;font-weight:400}ol[data-astro-cid-vm6nzj4c],ul[data-astro-cid-vm6nzj4c]{list-style:none}img[data-astro-cid-vm6nzj4c]{max-width:100%;height:auto}[data-astro-cid-vm6nzj4c]{box-sizing:border-box;margin:0;padding:0;line-height:1.4}:root{--primary: #6074BA;--primary-dark: #2a9c44;--primary-light: #cbf2d1;--secondary: #5BC0EB;--secondary-dark: #1874b0;--seconday-light: #b5e4f7;--on-primary: #FFFFFF;--on-secondary: #000000;--accent: #FFB100;--surface: #E4C1F9;--alternative: #a7a6ae;--text: #50B0AE;--header:\"Orbitron\", sans-serif;--body-text: \"Overpass\", sans-serif;--numbers: \"Quicksand\", sans-serif;--regular: 400;--medium: 500;--h1: 50px;--h2: 26px;--h3: 22px;--h4: 20px;--h5: 18px;--h6: 16px;--p: 16px}\n"}],"routeData":{"route":"/2023-11-24","type":"page","pattern":"^\\/2023-11-24\\/?$","segments":[[{"content":"2023-11-24","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/2023-11-24.astro","pathname":"/2023-11-24","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/suusharsveld/Desktop/HVA/Github/i-love-web-app/src/pages/2023-11-24.astro",{"propagation":"none","containsHead":true}],["/Users/suusharsveld/Desktop/HVA/Github/i-love-web-app/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_gR8QURdx.mjs","/src/pages/index.astro":"chunks/pages/index_Fq6Mat86.mjs","\u0000@astrojs-manifest":"manifest_72cTU_-d.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_29D30cyF.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_g2KwfsZH.mjs","\u0000@astro-page:src/pages/2023-11-24@_@astro":"chunks/2023-11-24_o_koIv3n.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.mvk22vjm.js","astro:scripts/before-hydration.js":""},"assets":["/favicon.svg","/_astro/hoisted.mvk22vjm.js","/image/NL-Design-System.jpg","/textures/gradients/3.jpg","/textures/gradients/5.jpg"]});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
