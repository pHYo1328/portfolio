import { c as createComponent, r as renderTemplate, f as renderComponent, e as createAstro, m as maybeRenderHead, d as addAttribute } from '../astro_DgCq00SN.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$LayoutDefault } from './404_CGhdVX0D.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} `;
}, "/Users/kaungsiphyo/Projects/portfolio/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro = createAstro();
const devIcons = [
  { "title": "JavaScript", "filePath": "/images/dev-logos/javascript.svg", tag: "lang" },
  { "title": "TypeScript", "filePath": "/images/dev-logos/typescript.svg", tag: "lang" },
  { "title": "React", "filePath": "/images/dev-logos/react.svg", tag: "frontend" },
  { "title": "Next.js", "filePath": "/images/dev-logos/nextjs.png", tag: "frontend" },
  { "title": "Astro", "filePath": "/images/dev-logos/astro.png", tag: "frontend" },
  { "title": "Node.js", "filePath": "/images/dev-logos/nodejs.svg", tag: "backend" },
  { "title": "HTML", "filePath": "/images/dev-logos/html.svg", tag: "frontend" },
  { "title": "CSS", "filePath": "/images/dev-logos/css.svg", tag: "frontend" },
  { "title": "Tailwind CSS", "filePath": "/images/dev-logos/tailwind.svg", tag: "frontend" },
  { "title": "Python", "filePath": "/images/dev-logos/python.svg", tag: "lang" },
  { "title": "MongoDB", "filePath": "/images/dev-logos/mongodb.svg", tag: "database" },
  { "title": "PostgreSQL", "filePath": "/images/dev-logos/postgresql.svg", tag: "database" },
  { "title": "MySQL", "filePath": "/images/dev-logos/mysql.svg", tag: "database" },
  { "title": "Redis", "filePath": "/images/dev-logos/redis.svg", tag: "database" },
  { "title": "Linux", "filePath": "/images/dev-logos/linux.svg", tag: "devOps" },
  { "title": "Docker", "filePath": "/images/dev-logos/docker.svg", tag: "devOps" },
  { "title": "AWS", "filePath": "/images/dev-logos/aws.svg", tag: "devOps" },
  { "title": "Git", "filePath": "/images/dev-logos/git.svg", tag: "devOps" },
  { "title": "Figma", "filePath": "/images/dev-logos/figma.svg", tag: "frontend" },
  { "title": "Bootstrap", "filePath": "/images/dev-logos/bootstrap.svg", tag: "frontend" },
  { "title": "Android", "filePath": "/images/dev-logos/android.svg", tag: "mobile" },
  { "title": "Cloudinary", "filePath": "/images/dev-logos/cloudinary.svg", tag: "database" },
  { "title": "Express.js", "filePath": "/images/dev-logos/express.svg", tag: "backend" },
  { "title": "Firebase", "filePath": "/images/dev-logos/firebase.svg", tag: "database" },
  { "title": "jQuery", "filePath": "/images/dev-logos/jQuery.svg", tag: "frontend" },
  { "title": "Java", "filePath": "/images/dev-logos/java.svg", tag: "backend" },
  { "title": "Java", "filePath": "/images/dev-logos/java.svg", tag: "lang" },
  { "title": "MUI", "filePath": "/images/dev-logos/mui.svg", tag: "frontend" },
  { "title": "Microsoft SQL server", "filePath": "/images/dev-logos/mssql.svg", tag: "database" },
  { "title": "NextAuth", "filePath": "/images/dev-logos/nextauth.png", tag: "backend" },
  { "title": "Prisma", "filePath": "/images/dev-logos/prisma.svg", tag: "database" },
  { "title": "React Native", "filePath": "/images/dev-logos/react-native.svg", tag: "mobile" },
  { "title": "Spring Boot", "filePath": "/images/dev-logos/spring.svg", tag: "backend" },
  { "title": "Supabase", "filePath": "/images/dev-logos/supabase.svg", tag: "database" },
  { "title": "S3", "filePath": "/images/dev-logos/s3.svg", tag: "backend" },
  { "title": "tRPC", "filePath": "/images/dev-logos/trpc.svg", tag: "backend" },
  { "title": "Terraform", "filePath": "/images/dev-logos/terraform.svg", tag: "devOps" },
  { "title": "SST", "filePath": "/images/dev-logos/sst.svg", tag: "devOps" }
];
const $$DevLogo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DevLogo;
  const { icon, size = 60 } = Astro2.props;
  const logo = devIcons.find((devIcon) => devIcon.title === icon);
  if (!logo) {
    throw new Error(`${icon} does not exist in devIcons`);
  }
  return renderTemplate`${maybeRenderHead()}<img class="devicon"${addAttribute(logo.filePath, "src")}${addAttribute(logo.title, "alt")}${addAttribute(logo.title, "title")}${addAttribute(size + "px", "width")}${addAttribute(size + "px", "height")}> `;
}, "/Users/kaungsiphyo/Projects/portfolio/src/components/DevLogo.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SpeedInsights", $$Index, { "data-astro-cid-kh7btl4r": true })} ${renderComponent($$result, "DefaultLayout", $$LayoutDefault, { "documentTitle": "About", "documentDescription": "I'm Kaung Si Phyo, a student pursuing Diploma in Infomation Technology with the minor of Data analysis and AI in the Singapore Polytechnic.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container" data-astro-cid-kh7btl4r> <h1 class="main-heading text-swipe-animation" id="greeting" data-astro-cid-kh7btl4r> <!-- Value inserted via greeting.js --> </h1> <div class="intro" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
I'm Kaung Si Phyo, a student pursuing Diploma in Infomation Technology
        with the minor of Data analysis and AI in the Singapore Polytechnic.
</p> </div> <div class="main-section" data-astro-cid-kh7btl4r> <img class="profile-photo" src="/images/profile_pic.JPG" alt="Kaung Si Phyo" data-astro-cid-kh7btl4r> <div class="main-section-text" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
I am quite proficient in technologies such as JavaScript, TypeScript,
          React, HTML, and CSS. I have a keen interest in design and UI/UX, and
          I also have experience with back end development using
          Node/Express.js, SQL/NoSQL, and REST/tRPC and DevOps using AWS, SST,
          docker and terraform.
</p> <p data-astro-cid-kh7btl4r>
I'm passionate about solving problems and building efficient,
          organised systems that are fast, performant and accessible to
          everyone.
</p> <p data-astro-cid-kh7btl4r>
During my free time, I enjoy activities such as reading, cooking, and
          gaming.
</p> </div> </div> </section> <div class="container" style="margin: 2em auto;" data-astro-cid-kh7btl4r> <h1 class="sub-heading" data-astro-cid-kh7btl4r>Tech Stacks</h1> <section class="icon-container" data-astro-cid-kh7btl4r> <div class="card" data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>Frontend</h1> <div class="icon-row" data-astro-cid-kh7btl4r> ${devIcons.filter((icon) => icon.tag == "frontend").map((icon) => renderTemplate`${renderComponent($$result2, "DevLogo", $$DevLogo, { "icon": icon.title, "data-astro-cid-kh7btl4r": true })}`)} </div> </div> <div class="card" data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>Backend</h1> <div class="icon-row" data-astro-cid-kh7btl4r> ${devIcons.filter((icon) => icon.tag == "backend").map((icon) => renderTemplate`${renderComponent($$result2, "DevLogo", $$DevLogo, { "icon": icon.title, "data-astro-cid-kh7btl4r": true })}`)} </div> </div> <div class="card" data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>Database Management</h1> <div class="icon-row" data-astro-cid-kh7btl4r> ${devIcons.filter((icon) => icon.tag == "database").map((icon) => renderTemplate`${renderComponent($$result2, "DevLogo", $$DevLogo, { "icon": icon.title, "data-astro-cid-kh7btl4r": true })}`)} </div> </div> <div class="card" data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>Programming Languages</h1> <div class="icon-row" data-astro-cid-kh7btl4r> ${devIcons.filter((icon) => icon.tag == "lang").map((icon) => renderTemplate`${renderComponent($$result2, "DevLogo", $$DevLogo, { "icon": icon.title, "data-astro-cid-kh7btl4r": true })}`)} </div> </div> <div class="card" data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>DevOps Tools</h1> <div class="icon-row" data-astro-cid-kh7btl4r> ${devIcons.filter((icon) => icon.tag == "devOps").map((icon) => renderTemplate`${renderComponent($$result2, "DevLogo", $$DevLogo, { "icon": icon.title, "data-astro-cid-kh7btl4r": true })}`)} </div> </div> <div class="card" data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>Mobile App Devlopment</h1> <div class="icon-row" data-astro-cid-kh7btl4r> ${devIcons.filter((icon) => icon.tag == "mobile").map((icon) => renderTemplate`${renderComponent($$result2, "DevLogo", $$DevLogo, { "icon": icon.title, "data-astro-cid-kh7btl4r": true })}`)} </div> </div> </section> </div> ` })}  `;
}, "/Users/kaungsiphyo/Projects/portfolio/src/pages/about.astro", void 0);

const $$file = "/Users/kaungsiphyo/Projects/portfolio/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index as $, $$DevLogo as a, about as b };
