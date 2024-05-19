/**
 * These words are buzzwords that should be highlighted
 */
const buzzwords = [
  "Astro",
  "AWS",
  "Android",
  "CSS",
  "Cloudinary",
  "Bootstrap",
  "Docker",
  "Express.js",
  "Figma",
  "Firebase",
  "Git",
  "HTML",
  "JavaScript",
  "jQuery",
  "Java",
  "Linux",
  "MongoDB",
  "MUI",
  "MySQL",
  "Microsoft SQL server",
  "Next.js",
  "Node.js",
  "NextAuth",
  "PostgreSQL",
  "Python",
  "Prisma",
  "React",
  "Redis",
  "RESTful",
  "React Native",
  "Spring Boot",
  "Supabase",
  "S3",
  "SST",
  "Tailwind CSS",
  "TypeScript",
  "tRPC",
  "Terraform",
];

// Add tags that should be searched for buzzwords
const paragraphs = document.querySelectorAll("p");
const lis = document.querySelectorAll("li");
const tags = [...paragraphs, ...lis];

for (const word of buzzwords) {
  const regex = new RegExp(`(\\s ^)(${word})([.,/()"']?)(\\s $)`, 'g');
  for (const element of tags) {
    element.innerHTML = element.innerHTML.replace(regex, (match, p1, p2, p3, p4) => `${p1}<span class="buzzword">${p2}</span>${p3}${p4}`);
  }
}