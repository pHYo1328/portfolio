import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, h as renderSlot, f as renderComponent, e as createAstro, l as Fragment } from '../astro_DgCq00SN.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Button, $ as $$LayoutDefault } from './404_CGhdVX0D.mjs';
import { a as $$DevLogo, $ as $$Index } from './about_D923dW7J.mjs';
/* empty css                             */

const $$Astro$1 = createAstro();
const $$PortfolioItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortfolioItem;
  const {
    title,
    tags,
    image,
    isOpenSource,
    githubStarsCount,
    projectLink,
    sourceCode,
    projectYear
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="portfolio-item-wrapper" data-astro-cid-lke3ogve> <div class="portfolio-item" data-astro-cid-lke3ogve> <img class="image"${addAttribute(image, "src")}${addAttribute(title + " showcase", "alt")} width="500px" data-astro-cid-lke3ogve> <div class="project-year" data-astro-cid-lke3ogve>${projectYear}</div> <div class="inner-content" data-astro-cid-lke3ogve> <h2 class="title" data-astro-cid-lke3ogve> ${title} </h2> ${isOpenSource && renderTemplate`<a class="openSource"${addAttribute(sourceCode, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-lke3ogve> <span class="open-source-badge" data-astro-cid-lke3ogve>Open Source</span> </a>`} <div class="slot-content" data-astro-cid-lke3ogve>${renderSlot($$result, $$slots["description"])}</div> <div class="tags" data-astro-cid-lke3ogve> ${tags.map((tag) => renderTemplate`${renderComponent($$result, "DevLogo", $$DevLogo, { "icon": tag, "size": 30, "data-astro-cid-lke3ogve": true })}`)} </div> <div class="buttons" data-astro-cid-lke3ogve> ${projectLink && renderTemplate`${renderComponent($$result, "Button", $$Button, { "variant": "outline", "href": projectLink, "domProps": { target: "_blank", rel: "noopener noreferrer" }, "data-astro-cid-lke3ogve": true }, { "default": ($$result2) => renderTemplate`
View Project
<svg style="margin-left: 5px;" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-astro-cid-lke3ogve> ${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-lke3ogve": true }, { "default": ($$result3) => renderTemplate` <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" data-astro-cid-lke3ogve></path> <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z" data-astro-cid-lke3ogve></path> ` })} </svg> ` })}`} ${sourceCode && renderTemplate`${renderComponent($$result, "Button", $$Button, { "variant": "outline", "href": sourceCode, "domProps": { target: "_blank", rel: "noopener noreferrer" }, "data-astro-cid-lke3ogve": true }, { "default": ($$result2) => renderTemplate`
View Code
<svg style="margin-left: 5px;" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-astro-cid-lke3ogve> <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z" stroke="none" data-astro-cid-lke3ogve></path> </svg> ` })}`} </div> </div> </div> </article> `;
}, "/Users/kaungsiphyo/Projects/portfolio/src/components/PortfolioItem.astro", void 0);

const $$Astro = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "SpeedInsights", $$Index, { "data-astro-cid-aid3sr62": true })} ${renderComponent($$result, "DefaultLayout", $$LayoutDefault, { "documentTitle": "Projects", "documentDescription": "Welcome to my portfolio, showcasing a selection of projects I've worked on.", "data-astro-cid-aid3sr62": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-aid3sr62> <h1 class="main-heading text-swipe-animation" data-astro-cid-aid3sr62>Projects</h1> <div class="intro" data-astro-cid-aid3sr62> <p data-astro-cid-aid3sr62>
Welcome to my portfolio, showcasing a selection of projects and side
        projects I've worked on.
</p> </div> <section class="projects" data-astro-cid-aid3sr62> ${renderComponent($$result2, "PortfolioItem", $$PortfolioItem, { "isOpenSource": true, "sourceCode": "https://github.com/pHYo1328/portfolio", "projectYear": "2024", "title": "My Personal Portfolio", "image": "/images/portfolio.png", "tags": ["JavaScript", "TypeScript", "Astro", "CSS", "HTML"], "projectLink": "www.phyonn.com", "data-astro-cid-aid3sr62": true }, { "description": ($$result3) => renderTemplate`<p data-astro-cid-aid3sr62>
Yes, you are seeing this project now. I recreated my portfolio with
          Astro.
</p>` })} ${renderComponent($$result2, "PortfolioItem", $$PortfolioItem, { "projectLink": "https://cron.timeles.live", "projectYear": "2024", "title": "SST Cron Job", "image": "/images/sstCron.png", "tags": [
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "tRPC",
    "Prisma",
    "AWS",
    "SST"
  ], "data-astro-cid-aid3sr62": true }, { "description": ($$result3) => renderTemplate`<p data-astro-cid-aid3sr62>
For our IMCS toolkit project, my friend and I developed a proof of
          concept for scheduled email sending using SST as Infrastructure as
          Code (IaC) and AWS EventBridge for scheduling.
</p>` })} ${renderComponent($$result2, "PortfolioItem", $$PortfolioItem, { "isOpenSource": true, "sourceCode": "https://github.com/pHYo1328/ande", "projectYear": "2024", "title": "ZenBudget", "image": "/images/android.png", "tags": ["Android", "MUI", "Figma", "Firebase"], "data-astro-cid-aid3sr62": true }, { "description": ($$result3) => renderTemplate`<p data-astro-cid-aid3sr62>
Collaborated with my friends to create a financial management app with
          AI advisor with Android and Material UI
</p>` })} ${renderComponent($$result2, "PortfolioItem", $$PortfolioItem, { "isOpenSource": true, "sourceCode": "https://github.com/pHYo1328/whiteboardApp", "projectYear": "2024", "title": "whiteboard app", "image": "/images/whiteboard.png", "tags": ["TypeScript", "Next.js", "Tailwind CSS", "tRPC", "Prisma"], "data-astro-cid-aid3sr62": true }, { "description": ($$result3) => renderTemplate`<p data-astro-cid-aid3sr62>
Researched and learned Tldraw and Excalidraw libraries; developed a
          collaborative whiteboard app using Socket.IO for real-time
          interactions.
</p>` })} ${renderComponent($$result2, "PortfolioItem", $$PortfolioItem, { "isOpenSource": true, "sourceCode": "https://github.com/pHYo1328/inc-dynamic-form-builder", "projectLink": "https://inc-dynamic-builder.vercel.app", "projectYear": "2023", "title": "Dynamic Form Builder", "image": "/images/formBuilder.png", "tags": ["TypeScript", "Next.js", "Tailwind CSS", "tRPC", "Prisma"], "data-astro-cid-aid3sr62": true }, { "description": ($$result3) => renderTemplate`<p data-astro-cid-aid3sr62>
Utilized Next.js T3 stack to create a Google Form builder clone,
          developed with TypeScript for type safety and dnd-kit to enhance user
          experience.
</p>` })} ${renderComponent($$result2, "PortfolioItem", $$PortfolioItem, { "projectYear": "2023", "title": "Techzero", "image": "/images/techzero.webp", "projectLink": "https://techzero.onrender.com", "tags": [
    "JavaScript",
    "React",
    "Tailwind CSS",
    "MySQL",
    "Express.js",
    "Node.js",
    "Redis"
  ], "data-astro-cid-aid3sr62": true }, { "description": ($$result3) => renderTemplate`<p data-astro-cid-aid3sr62>
Inspired by Challenger , with my 3 friends, we create an e-commerce
          tech platform developed for our school project.
</p>` })} ${renderComponent($$result2, "PortfolioItem", $$PortfolioItem, { "isOpenSource": true, "sourceCode": "https://github.com/pHYo1328/PDS-CA2", "projectYear": "2023", "title": "Data Analysis for Music Trends", "image": "/images/pds.png", "tags": ["Python"], "data-astro-cid-aid3sr62": true }, { "description": ($$result3) => renderTemplate`<p data-astro-cid-aid3sr62>
Data Analysis Project for school assignment mainly focused on music
          trends, genre preferences, and cultural influrences in evolving music
          landscape.
</p>` })} ${renderComponent($$result2, "PortfolioItem", $$PortfolioItem, { "isOpenSource": true, "sourceCode": "https://github.com/pHYo1328/MAD", "projectYear": "2022", "title": "Pocket Mart", "image": "/images/mad.png", "tags": ["JavaScript", "React Native", "Supabase"], "data-astro-cid-aid3sr62": true }, { "description": ($$result3) => renderTemplate`<p data-astro-cid-aid3sr62>
Utilised React-Native and supabase as database to create an e-commerce
          app clone for school project.
</p>` })} </section> </div> ` })} `;
}, "/Users/kaungsiphyo/Projects/portfolio/src/pages/projects.astro", void 0);

const $$file = "/Users/kaungsiphyo/Projects/portfolio/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
