import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as createAstro, f as renderComponent, g as renderHead, h as renderSlot, s as spreadAttributes } from '../astro_DgCq00SN.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
/* empty css                             */
/* empty css                        */

const $$Astro$3 = createAstro();
const $$MenuItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MenuItem;
  const pathname = new URL(Astro2.request.url).pathname;
  const { text, link } = Astro2.props;
  const pathMatch = pathname.replace(/\/$/, "") === link.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<li class="menu-item" data-astro-cid-jrov5ssf> <a${addAttribute(`menu-item-link ${pathMatch ? "active" : ""}`, "class")}${addAttribute(link, "href")} data-astro-cid-jrov5ssf>${text}</a> </li> `;
}, "/Users/kaungsiphyo/Projects/portfolio/src/components/MenuItem.astro", void 0);

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-2j44jlrm> <ul class="menu" data-astro-cid-2j44jlrm> ${renderComponent($$result, "MenuItem", $$MenuItem, { "text": "Projects", "link": "/projects", "data-astro-cid-2j44jlrm": true })} ${renderComponent($$result, "MenuItem", $$MenuItem, { "text": "About", "link": "/about", "data-astro-cid-2j44jlrm": true })} </ul> <button id="mobile-toggle-menu" data-astro-cid-2j44jlrm> <svg class="menu-burger-icon" fill="white" width="32px" height="32px" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-astro-cid-2j44jlrm> <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z" stroke="none" data-astro-cid-2j44jlrm></path> </svg> <svg style="display: none;" class="menu-close-icon" fill="white" width="32px" height="32px" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-astro-cid-2j44jlrm> <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z" stroke="none" data-astro-cid-2j44jlrm></path> </svg> </button> </nav> `;
}, "/Users/kaungsiphyo/Projects/portfolio/src/components/Menu.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="container" data-astro-cid-3ef6ksr2> <div class="header-left" data-astro-cid-3ef6ksr2> <a href="/" class="avatar" data-astro-cid-3ef6ksr2> <img width="35" class="profile-pic" src="/images/profile_pic.JPG" alt="Kaung Si Phyo profile picture" data-astro-cid-3ef6ksr2> <span class="name" data-astro-cid-3ef6ksr2>Kaung Si Phyo</span> </a> </div> <div class="header-right" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Menu", $$Menu, { "data-astro-cid-3ef6ksr2": true })} </div> </header> `;
}, "/Users/kaungsiphyo/Projects/portfolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
  const socialIconSize = "1.25rem";
  const websiteLaunchYear = "2023";
  const copywriteYears = currentYear === websiteLaunchYear ? currentYear : `${websiteLaunchYear}-${currentYear}`;
  return renderTemplate`${maybeRenderHead()}<footer class="container" data-astro-cid-sz7xmlte> <p class="legal" data-astro-cid-sz7xmlte>Copyright &copy; ${copywriteYears} Kaung Si Phyo.</p> <ul class="social-icon-list" data-astro-cid-sz7xmlte> <!-- GitHub --> <li data-astro-cid-sz7xmlte> <a href="https://github.com/pHYo1328" target="_blank" data-astro-cid-sz7xmlte> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"${addAttribute(socialIconSize, "height")}${addAttribute(socialIconSize, "width")} xmlns="http://www.w3.org/2000/svg" data-astro-cid-sz7xmlte><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z" data-astro-cid-sz7xmlte></path></svg> </a> </li> <!-- Instagram --> <li data-astro-cid-sz7xmlte> <a href="https://www.instagram.com/kaungsi.phyo.7" target="_blank" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(socialIconSize, "height")}${addAttribute(socialIconSize, "width")} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0" data-astro-cid-sz7xmlte><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm6.75 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-6.75 1a2.75 2.75 0 0 0-2.75 2.75v8.5A2.75 2.75 0 0 0 7.75 20h8.5A2.75 2.75 0 0 0 19 17.25v-8.5A2.75 2.75 0 0 0 16.25 6h-8.5zm4.25 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 1.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" data-astro-cid-sz7xmlte></path></svg> </a> </li> <!-- LinkedIn --> <li data-astro-cid-sz7xmlte> <a href="https://www.linkedin.com/in/kaung-si-phyo-327b82229/" target="_blank" data-astro-cid-sz7xmlte> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512"${addAttribute(socialIconSize, "height")}${addAttribute(socialIconSize, "width")} xmlns="http://www.w3.org/2000/svg" data-astro-cid-sz7xmlte><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" data-astro-cid-sz7xmlte></path></svg> </a> </li> </ul> </footer> `;
}, "/Users/kaungsiphyo/Projects/portfolio/src/components/Footer.astro", void 0);

const differenceInYears = (year1, year2) => {
  const diff = (year2.getTime() - year1.getTime()) / 1e3 / (60 * 60 * 24);
  return Math.abs(Math.round(diff / 365.25));
};

const careerStartDate = "2021-04-17";
const yearsInIndustry = differenceInYears(
  new Date(careerStartDate),
  /* @__PURE__ */ new Date()
);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Head;
  const title = {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.PUBLIC_SITE_NAME;
  const defaultDesc = `Software engineer, passionate about solving problems with code. Over ${yearsInIndustry} years of industry experience specialising in JavaScript, React & Node.`;
  const site_url = Astro2.site;
  const canonical = Astro2.props.canonical || void 0;
  const documentTitle = Astro2.props.documentTitle || title;
  const documentDescription = Astro2.props.documentDescription || defaultDesc;
  const ogimage = Astro2.props.ogimage || site_url + "images/ogimage.png";
  return renderTemplate`<head><meta charset="UTF-8">${canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")}>`}<meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.png" type="image/png"><title>${documentTitle}</title><meta name="description"${addAttribute(documentDescription, "content")}><meta property="og:title"${addAttribute(documentTitle, "content")}><meta property="og:description"${addAttribute(documentDescription, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(site_url + (canonical || ""), "content")}><meta property="og:image"${addAttribute(ogimage, "content")}>${renderTemplate(_a || (_a = __template(['<script async src="https://analytics.lukeliasi.com/script.js" data-website-id="8fcf015d-55ce-4f7c-a4b4-4c8d000ecb9c"></script>'])))}${renderHead()}</head> `;
}, "/Users/kaungsiphyo/Projects/portfolio/src/components/Head.astro", void 0);

const $$Astro$1 = createAstro();
const $$LayoutDefault = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LayoutDefault;
  const canonical = Astro2.props.canonical;
  const documentTitle = Astro2.props.documentTitle;
  const documentDescription = Astro2.props.documentDescription;
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "Head", $$Head, { "documentTitle": documentTitle, "documentDescription": documentDescription, "canonical": canonical })}${maybeRenderHead()}<body class="page"> ${renderComponent($$result, "Header", $$Header, {})} <main class="content-main"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/kaungsiphyo/Projects/portfolio/src/components/LayoutDefault.astro", void 0);

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "solid",
    href,
    size = "md",
    colorScheme = "green",
    gap = "0",
    domProps = {}
  } = Astro2.props;
  const className = `button ${variant} size-${size} colorScheme-${colorScheme} ${Astro2.props.class || ""} ${gap ? `gap-${gap}` : ""}`;
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(className, "class")}${addAttribute(href, "href")}${spreadAttributes(domProps)} data-astro-cid-vnzlvqnm>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(className, "class")}${spreadAttributes(domProps)} data-astro-cid-vnzlvqnm>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "/Users/kaungsiphyo/Projects/portfolio/src/components/Button.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$LayoutDefault, { "documentTitle": "Page not found", "documentDescription": "The page could not be found.", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container" data-astro-cid-zetdm5md> <div class="box" data-astro-cid-zetdm5md> <svg class="icon" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve" data-astro-cid-zetdm5md> <path fill="#CDFFE8" d="M312.069 53.445c-71.26-71.26-187.194-71.26-258.454 0-71.261 71.26-71.261 187.206 0 258.466 71.26 71.26 187.194 71.26 258.454 0s71.26-187.206 0-258.466zm-25.375 233.091c-57.351 57.34-150.353 57.34-207.704-.011s-57.351-150.353 0-207.693c57.351-57.351 150.342-57.351 207.693 0s57.362 150.342.011 207.704z" data-astro-cid-zetdm5md></path> <path fill="#CDFFE8" d="M101.911 112.531c-29.357 37.725-31.801 89.631-7.321 129.702 1.877 3.087 5.902 4.048 8.978 2.182 3.065-1.888 4.037-5.903 2.16-8.978-21.666-35.456-19.506-81.538 6.469-114.876 2.226-2.837 1.713-6.938-1.135-9.154a6.523 6.523 0 0 0-9.151 1.124zM498.544 447.722l-132.637-129.2c-7.255-7.07-18.84-6.982-26.008.174l-21.033 21.033c-7.156 7.156-7.234 18.742-.153 25.986l129.19 132.636c14.346 17.324 35.542 18.35 51.917 1.964 16.396-16.364 16.037-38.247-1.276-52.593z" data-astro-cid-zetdm5md></path> </svg> <h1 class="title" data-astro-cid-zetdm5md>404</h1> <h2 class="subtitle" data-astro-cid-zetdm5md>Sorry, the page could not be found.</h2> ${renderComponent($$result2, "Button", $$Button, { "size": "lg", "class": "button", "href": "/", "data-astro-cid-zetdm5md": true }, { "default": ($$result3) => renderTemplate` <svg style="margin-right: 5px;" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-astro-cid-zetdm5md><path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" data-astro-cid-zetdm5md></path></svg>
Back to home
` })} </div> </section> ` })} `;
}, "/Users/kaungsiphyo/Projects/portfolio/src/pages/404.astro", void 0);

const $$file = "/Users/kaungsiphyo/Projects/portfolio/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$LayoutDefault as $, _404 as _, $$Button as a, yearsInIndustry as y };
