import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_DgCq00SN.mjs';
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

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
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
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
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
    }),
    isIndex: rawRouteData.isIndex
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
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.eMTt_f2h.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":".button[data-astro-cid-vnzlvqnm]{color:initial;border:1px solid;border-radius:4px;display:inline-flex;align-items:center;justify-content:center;font-weight:600;line-height:1rem;transition:all .15s ease-in-out;cursor:pointer}.button[data-astro-cid-vnzlvqnm]:disabled{cursor:not-allowed;opacity:.75}.button[data-astro-cid-vnzlvqnm]:hover{text-decoration:none;box-shadow:0 3px 20px #f0f0f040}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-silver{background:var(--color-silver)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-silver:hover{background:var(--color-silver-400)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-green{background:var(--color-mint)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-green:hover{background:var(--color-mint-400)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-blue{background:var(--color-blue)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-blue:hover{background:var(--color-blue-400)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-orange{background:var(--color-orange)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-orange:hover{background:var(--color-orange-400)}.button[data-astro-cid-vnzlvqnm].outline{background:transparent}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-silver{border-color:var(--color-silver);color:var(--color-silver)}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-silver:hover{background:var(--color-silver-400);color:initial}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-green{border-color:var(--color-mint);color:var(--color-mint)}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-green:hover{background:var(--color-mint-400);color:initial}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-blue{border-color:var(--color-blue);color:var(--color-blue)}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-blue:hover{background:var(--color-blue-400);color:initial}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-orange{border-color:var(--color-orange);color:var(--color-orange)}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-orange:hover{background:var(--color-orange-400);color:initial}.button[data-astro-cid-vnzlvqnm].size-xs{padding:4px 12px;font-size:var(--font-size-xs)}.button[data-astro-cid-vnzlvqnm].size-sm{padding:6px 18px;font-size:var(--font-size-sm)}.button[data-astro-cid-vnzlvqnm].size-md{padding:8px 22px;font-size:var(--font-size-md)}.button[data-astro-cid-vnzlvqnm].size-lg{padding:12px 28px;font-size:var(--font-size-lg)}.button[data-astro-cid-vnzlvqnm].size-xl{padding:16px 32px;font-size:var(--font-size-xl)}.button[data-astro-cid-vnzlvqnm].gap-0{margin-right:0}.button[data-astro-cid-vnzlvqnm].gap-5px{margin-right:5px}.button[data-astro-cid-vnzlvqnm].gap-10px{margin-right:10px}.button[data-astro-cid-vnzlvqnm].gap-15px{margin-right:15px}.button[data-astro-cid-vnzlvqnm].gap-20px{margin-right:20px}\n.box[data-astro-cid-zetdm5md]{display:flex;flex-direction:column;width:100%;height:100%;margin-top:4rem;align-items:center;justify-content:center}.title[data-astro-cid-zetdm5md]{display:inline-block;margin:0;color:var(--color-mint);font-size:var(--font-size-16xl);text-shadow:0px 6px 14px rgba(0,255,137,.4)}.subtitle[data-astro-cid-zetdm5md]{margin:0;text-align:center}.button[data-astro-cid-zetdm5md]{margin-top:2rem}.icon[data-astro-cid-zetdm5md]{position:relative;bottom:-45px;transform:rotate(-3deg);right:-40px;opacity:.5;width:80px}\n"},{"type":"external","src":"/_astro/about.C9EWGyYC.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DDR3MFJC.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/about.C9EWGyYC.css"},{"type":"inline","content":".main-section[data-astro-cid-kh7btl4r]{display:flex;gap:2rem;margin-top:1rem;align-items:center}.profile-photo[data-astro-cid-kh7btl4r]{width:200px}.sub-heading[data-astro-cid-kh7btl4r]{align-items:center;text-align:center}.icon-row[data-astro-cid-kh7btl4r]{display:flex;flex-wrap:wrap;gap:10px;justify-content:space-around}.icon-container[data-astro-cid-kh7btl4r]{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:1280px}.card[data-astro-cid-kh7btl4r]{border:1px solid var(--color-mint);border-radius:10px;padding:20px 20px 40px;box-shadow:0 4px 8px #52864f1a;text-align:center}@media screen and (max-width: 1200px){.icon-container[data-astro-cid-kh7btl4r]{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;margin:2em auto;padding-left:25px;padding-right:25px}}@media screen and (max-width: 980px){.main-section[data-astro-cid-kh7btl4r]{gap:1rem;display:block;word-break:break-word}.profile-photo[data-astro-cid-kh7btl4r]{float:left;width:152px;margin:10px}.devicon{width:45px!important;height:45px!important}.icon-container[data-astro-cid-kh7btl4r]{display:block}.card[data-astro-cid-kh7btl4r]{margin-bottom:30px}}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DahJwswE.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/about.C9EWGyYC.css"},{"type":"inline","content":".button[data-astro-cid-vnzlvqnm]{color:initial;border:1px solid;border-radius:4px;display:inline-flex;align-items:center;justify-content:center;font-weight:600;line-height:1rem;transition:all .15s ease-in-out;cursor:pointer}.button[data-astro-cid-vnzlvqnm]:disabled{cursor:not-allowed;opacity:.75}.button[data-astro-cid-vnzlvqnm]:hover{text-decoration:none;box-shadow:0 3px 20px #f0f0f040}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-silver{background:var(--color-silver)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-silver:hover{background:var(--color-silver-400)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-green{background:var(--color-mint)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-green:hover{background:var(--color-mint-400)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-blue{background:var(--color-blue)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-blue:hover{background:var(--color-blue-400)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-orange{background:var(--color-orange)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-orange:hover{background:var(--color-orange-400)}.button[data-astro-cid-vnzlvqnm].outline{background:transparent}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-silver{border-color:var(--color-silver);color:var(--color-silver)}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-silver:hover{background:var(--color-silver-400);color:initial}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-green{border-color:var(--color-mint);color:var(--color-mint)}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-green:hover{background:var(--color-mint-400);color:initial}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-blue{border-color:var(--color-blue);color:var(--color-blue)}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-blue:hover{background:var(--color-blue-400);color:initial}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-orange{border-color:var(--color-orange);color:var(--color-orange)}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-orange:hover{background:var(--color-orange-400);color:initial}.button[data-astro-cid-vnzlvqnm].size-xs{padding:4px 12px;font-size:var(--font-size-xs)}.button[data-astro-cid-vnzlvqnm].size-sm{padding:6px 18px;font-size:var(--font-size-sm)}.button[data-astro-cid-vnzlvqnm].size-md{padding:8px 22px;font-size:var(--font-size-md)}.button[data-astro-cid-vnzlvqnm].size-lg{padding:12px 28px;font-size:var(--font-size-lg)}.button[data-astro-cid-vnzlvqnm].size-xl{padding:16px 32px;font-size:var(--font-size-xl)}.button[data-astro-cid-vnzlvqnm].gap-0{margin-right:0}.button[data-astro-cid-vnzlvqnm].gap-5px{margin-right:5px}.button[data-astro-cid-vnzlvqnm].gap-10px{margin-right:10px}.button[data-astro-cid-vnzlvqnm].gap-15px{margin-right:15px}.button[data-astro-cid-vnzlvqnm].gap-20px{margin-right:20px}\n.portfolio-item-wrapper[data-astro-cid-lke3ogve]{position:relative}.portfolio-item[data-astro-cid-lke3ogve]{display:block;flex-direction:column;gap:1.5rem;background:#ffffff0d;padding:25px;overflow:hidden;border-radius:10px;align-items:center;height:100%}.title[data-astro-cid-lke3ogve]{color:var(--color-mint);font-size:var(--font-size-4xl);margin-bottom:1rem;margin-top:0;display:flex;align-items:center;gap:1rem}.project-year[data-astro-cid-lke3ogve]{position:absolute;left:-50px;top:55px;transform:rotate(270deg);color:var(--color-silver-700);font-size:var(--font-size-4xl)}.image[data-astro-cid-lke3ogve]{filter:drop-shadow(0 0 3rem rgba(21,255,147,.35));border-radius:6px;align-self:center;flex:1;max-width:400px;max-height:300px;object-fit:contain;max-width:100%;padding:25px}.buttons[data-astro-cid-lke3ogve]{margin-top:2rem}.inner-content[data-astro-cid-lke3ogve]{display:flex;flex-direction:column}.slot-content[data-astro-cid-lke3ogve]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;height:90px;margin-bottom:1rem}.tags[data-astro-cid-lke3ogve]{margin-top:2rem;display:flex;gap:1rem;flex-wrap:wrap}.open-source-badge[data-astro-cid-lke3ogve]{font-size:12px;color:var(--color-orange-400);border:1px solid var(--color-orange-400);padding:2px 12px;border-radius:4px}.ghStars[data-astro-cid-lke3ogve]{color:var(--color-silver-300);font-size:var(--font-size-base);display:flex;gap:.25rem}.openSource[data-astro-cid-lke3ogve]{display:flex;gap:1rem}.openSource[data-astro-cid-lke3ogve]:hover{text-decoration:none}@media screen and (max-width: 1360px){.project-year[data-astro-cid-lke3ogve]{font-size:var(--font-size-xl);left:-32px}}@media screen and (max-width: 1200px){.image[data-astro-cid-lke3ogve]{width:350px;padding:15px 0}}@media screen and (max-width: 980px){.portfolio-item-wrapper[data-astro-cid-lke3ogve]:nth-child(2n) .portfolio-item[data-astro-cid-lke3ogve]{flex-direction:column}.portfolio-item[data-astro-cid-lke3ogve]{margin:0 -25px;display:flex;flex-direction:column;gap:1.5rem;background:#ffffff0d;padding:25px;overflow:hidden;border-radius:10px;align-items:center}.image[data-astro-cid-lke3ogve]{max-width:100%;align-self:center;width:500px}.title[data-astro-cid-lke3ogve]{font-size:var(--font-size-2xl);flex-direction:column;align-items:flex-start}.project-year[data-astro-cid-lke3ogve]{transform:rotate(0);top:3px;left:unset;right:-20px;margin:10px}.slot-content[data-astro-cid-lke3ogve]{display:inline;height:auto;-webkit-line-clamp:none;overflow:visible;text-overflow:clip}.buttons[data-astro-cid-lke3ogve]{display:flex;flex-direction:column;row-gap:20px}}.projects[data-astro-cid-aid3sr62]{row-gap:2rem;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;align-items:stretch}@media screen and (max-width: 1200px){.projects[data-astro-cid-aid3sr62]{row-gap:2rem;display:grid;grid-template-columns:repeat(2,1fr);gap:40px;align-items:stretch}}@media screen and (max-width: 980px){.projects[data-astro-cid-aid3sr62]{margin:1.5rem;display:flex;flex-direction:column;align-items:stretch}}\n"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bxlm2b2j.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":".button[data-astro-cid-vnzlvqnm]{color:initial;border:1px solid;border-radius:4px;display:inline-flex;align-items:center;justify-content:center;font-weight:600;line-height:1rem;transition:all .15s ease-in-out;cursor:pointer}.button[data-astro-cid-vnzlvqnm]:disabled{cursor:not-allowed;opacity:.75}.button[data-astro-cid-vnzlvqnm]:hover{text-decoration:none;box-shadow:0 3px 20px #f0f0f040}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-silver{background:var(--color-silver)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-silver:hover{background:var(--color-silver-400)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-green{background:var(--color-mint)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-green:hover{background:var(--color-mint-400)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-blue{background:var(--color-blue)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-blue:hover{background:var(--color-blue-400)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-orange{background:var(--color-orange)}.button[data-astro-cid-vnzlvqnm].solid.colorScheme-orange:hover{background:var(--color-orange-400)}.button[data-astro-cid-vnzlvqnm].outline{background:transparent}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-silver{border-color:var(--color-silver);color:var(--color-silver)}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-silver:hover{background:var(--color-silver-400);color:initial}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-green{border-color:var(--color-mint);color:var(--color-mint)}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-green:hover{background:var(--color-mint-400);color:initial}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-blue{border-color:var(--color-blue);color:var(--color-blue)}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-blue:hover{background:var(--color-blue-400);color:initial}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-orange{border-color:var(--color-orange);color:var(--color-orange)}.button[data-astro-cid-vnzlvqnm].outline.colorScheme-orange:hover{background:var(--color-orange-400);color:initial}.button[data-astro-cid-vnzlvqnm].size-xs{padding:4px 12px;font-size:var(--font-size-xs)}.button[data-astro-cid-vnzlvqnm].size-sm{padding:6px 18px;font-size:var(--font-size-sm)}.button[data-astro-cid-vnzlvqnm].size-md{padding:8px 22px;font-size:var(--font-size-md)}.button[data-astro-cid-vnzlvqnm].size-lg{padding:12px 28px;font-size:var(--font-size-lg)}.button[data-astro-cid-vnzlvqnm].size-xl{padding:16px 32px;font-size:var(--font-size-xl)}.button[data-astro-cid-vnzlvqnm].gap-0{margin-right:0}.button[data-astro-cid-vnzlvqnm].gap-5px{margin-right:5px}.button[data-astro-cid-vnzlvqnm].gap-10px{margin-right:10px}.button[data-astro-cid-vnzlvqnm].gap-15px{margin-right:15px}.button[data-astro-cid-vnzlvqnm].gap-20px{margin-right:20px}\n"},{"type":"external","src":"/_astro/about.C9EWGyYC.css"},{"type":"inline","content":"h1[data-astro-cid-j7pv25f6]{line-height:2.5rem;margin:1rem 0}.intro-welcome[data-astro-cid-j7pv25f6]{color:var(--color-mint);font-family:var(--font-family-IBM-Plex-Mono);font-weight:600;font-size:var(--font-size-base)}.intro-name[data-astro-cid-j7pv25f6]{font-family:var(--font-family-Mukta);font-size:var(--font-size-14xl);display:inline-block;padding:10px 0;color:var(--color-mint)}.intro[data-astro-cid-j7pv25f6]{color:var(--color-silver-250);font-size:var(--font-size-10xl);line-height:3.25rem;margin:1rem 0}.desc[data-astro-cid-j7pv25f6]{color:var(--color-silver-50);font-size:var(--font-size-lg);line-height:1.5em;margin:1.5rem 0}@media screen and (max-width: 980px){h1[data-astro-cid-j7pv25f6]{line-height:1.75rem;margin:.5rem 0}.intro-name[data-astro-cid-j7pv25f6]{font-size:var(--font-size-10xl);line-height:3rem}.intro[data-astro-cid-j7pv25f6]{font-size:var(--font-size-3xl);line-height:2rem;margin:.5rem 0}.intro-break[data-astro-cid-j7pv25f6],.desc-break[data-astro-cid-j7pv25f6]{display:none}.button-container[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;row-gap:20px}}.cursor[data-astro-cid-j7pv25f6]{display:inline-block;width:20px;height:4rem;opacity:0;background-color:var(--color-mint);margin-left:10px;animation:blink .9s steps(2,start) infinite}@keyframes blink{50%{opacity:0}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/kaungsiphyo/Projects/portfolio/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/kaungsiphyo/Projects/portfolio/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/kaungsiphyo/Projects/portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/kaungsiphyo/Projects/portfolio/src/pages/projects.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DwsTcmjF.mjs","/src/pages/index.astro":"chunks/pages/index_BElne4CN.mjs","/src/pages/projects.astro":"chunks/pages/projects_ENQxvNO6.mjs","\u0000@astrojs-manifest":"manifest_DKZ_Btoy.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_GWMRv-Dk.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_B_vN10Ey.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_D211K48v.mjs","\u0000@astro-page:src/pages/projects@_@astro":"chunks/projects_DOd5es4H.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BXJeGviQ.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.Bxlm2b2j.js","/astro/hoisted.js?q=0":"_astro/hoisted.DDR3MFJC.js","/astro/hoisted.js?q=3":"_astro/hoisted.eMTt_f2h.js","/astro/hoisted.js?q=2":"_astro/hoisted.DahJwswE.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.C9EWGyYC.css","/Kaung Si Phyo Resume.pdf","/favicon.png","/_astro/hoisted.Bxlm2b2j.js","/_astro/hoisted.DDR3MFJC.js","/_astro/hoisted.DahJwswE.js","/_astro/hoisted.eMTt_f2h.js","/_astro/index.astro_astro_type_script_index_0_lang.B_st5uWx.js","/fonts/ibm-plex-mono-v12-latin-100.woff","/fonts/ibm-plex-mono-v12-latin-100.woff2","/fonts/ibm-plex-mono-v12-latin-200.woff","/fonts/ibm-plex-mono-v12-latin-200.woff2","/fonts/ibm-plex-mono-v12-latin-300.woff","/fonts/ibm-plex-mono-v12-latin-300.woff2","/fonts/ibm-plex-mono-v12-latin-500.woff","/fonts/ibm-plex-mono-v12-latin-500.woff2","/fonts/ibm-plex-mono-v12-latin-600.woff","/fonts/ibm-plex-mono-v12-latin-600.woff2","/fonts/ibm-plex-mono-v12-latin-700.woff","/fonts/ibm-plex-mono-v12-latin-700.woff2","/fonts/ibm-plex-mono-v12-latin-regular.woff","/fonts/ibm-plex-mono-v12-latin-regular.woff2","/fonts/mukta-v13-latin-200.woff","/fonts/mukta-v13-latin-200.woff2","/fonts/mukta-v13-latin-300.woff","/fonts/mukta-v13-latin-300.woff2","/fonts/mukta-v13-latin-500.woff","/fonts/mukta-v13-latin-500.woff2","/fonts/mukta-v13-latin-600.woff","/fonts/mukta-v13-latin-600.woff2","/fonts/mukta-v13-latin-700.woff","/fonts/mukta-v13-latin-700.woff2","/fonts/mukta-v13-latin-800.woff","/fonts/mukta-v13-latin-800.woff2","/fonts/mukta-v13-latin-regular.woff","/fonts/mukta-v13-latin-regular.woff2","/images/android.png","/images/formBuilder.png","/images/mad.png","/images/pds.png","/images/portfolio.png","/images/profile_pic.JPG","/images/sstCron.png","/images/tddm assignment.docx","/images/techzero.webp","/images/whiteboard.png","/images/~$dm assignment.docx","/images/dev-logos/android.svg","/images/dev-logos/astro.png","/images/dev-logos/aws.svg","/images/dev-logos/bootstrap.svg","/images/dev-logos/cloudinary.svg","/images/dev-logos/css.svg","/images/dev-logos/docker.svg","/images/dev-logos/express.svg","/images/dev-logos/figma.svg","/images/dev-logos/firebase.svg","/images/dev-logos/git.svg","/images/dev-logos/html.svg","/images/dev-logos/jQuery.svg","/images/dev-logos/java.svg","/images/dev-logos/javascript.svg","/images/dev-logos/linux.svg","/images/dev-logos/mocha.svg","/images/dev-logos/mongodb.svg","/images/dev-logos/mssql.svg","/images/dev-logos/mui.svg","/images/dev-logos/mysql.svg","/images/dev-logos/nextauth.png","/images/dev-logos/nextjs.png","/images/dev-logos/nodejs.svg","/images/dev-logos/postgresql.svg","/images/dev-logos/prisma.svg","/images/dev-logos/ps.svg","/images/dev-logos/python.svg","/images/dev-logos/react-native.svg","/images/dev-logos/react.svg","/images/dev-logos/redis.svg","/images/dev-logos/s3.svg","/images/dev-logos/spring.svg","/images/dev-logos/sst.svg","/images/dev-logos/supabase.svg","/images/dev-logos/tailwind.svg","/images/dev-logos/terraform.svg","/images/dev-logos/trpc.svg","/images/dev-logos/typescript.svg"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
