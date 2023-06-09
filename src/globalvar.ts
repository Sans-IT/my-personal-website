import {
  BsGithub,
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsTelegram,
} from "react-icons/bs";

export const baseColor = "#01A2E9";
export const hoverColor = "blue.500";
export const borderColor = "404";

export const NavbarLink: navbarLink[] = [
  { name: "Home", value: "/", hover: { color: hoverColor } },
  { name: "About", value: "/about", hover: { color: hoverColor } },
  { name: "Portofolio", value: "/portofolio", hover: { color: hoverColor } },
];

export const SosmedLink: SosmedLink[] = [
  {
    icon: BsGithub,
    link: "https://github.com/Sans-IT",
  },
  {
    icon: BsInstagram,
    link: "https://www.instagram.com/sans_it_/",
  },
  {
    icon: BsFacebook,
    link: "https://www.facebook.com/Steven.SANS.IT/",
  },
  {
    icon: BsLinkedin,
    link: "https://www.linkedin.com/in/steven-jaya-3b775424b/",
  },
  {
    icon: BsTelegram,
    link: "",
  },
];

export const EducationCard: EducationCard[] = [
  {
    name: "SMP Kartika Nasional Plus Surabaya",
    time: "2017-2019",
  },
  {
    name: "SMK Negeri 6 Surabaya",
    time: "2020-2023",
  },
];

export const certificatePortofolio: CertificateProps[] = [
  {
    name: "sertifikat_blud.jpg",
    title: "Sertifikat BLUD SMK Negeri 6 Surabaya",
    body: "Sertifikat BLUD (Badan layanan umur daerah) SMK Negeri 6 Surabaya",
  },
  {
    name: "sertifikat_ekskul.jpg",
    title: "Sertifikat Ektra Podcast SMKN 6 Surabaya",
    body: "Sertifikat Ekskul Podcast di SMK Negeri 6 Surabaya, generasi pertama bagian pengelola website Sekolah",
  },
];

export const TechStack: TechStack[] = [
  {
    name: "Html",
    level: "Advance",
    image_url: "html.svg",
  },
  {
    name: "CSS",
    level: "Advance",
    image_url: "css.svg",
  },
  {
    name: "SASS",
    level: "Advance",
    image_url: "sass.svg",
  },
  {
    name: "Javascript",
    level: "Advance",
    image_url: "javascript.svg",
  },
  {
    name: "PHP",
    level: "Beginner",
    image_url: "php.svg",
  },
  {
    name: "Pyhton",
    level: "Beginner",
    image_url: "pyhton.svg",
  },
  {
    name: "Webpack",
    level: "Beginner",
    image_url: "webpack.svg",
  },
  {
    name: "ReactJS",
    level: "Intermediate",
    image_url: "reactjs.svg",
  },
  {
    name: "NextJS",
    level: "Itermediate",
    image_url: "nextjs.svg",
  },
  {
    name: "NodeJS",
    level: "Advance",
    image_url: "nodejs.svg",
  },
  {
    name: "Bootstrap",
    level: "Advance",
    image_url: "bootstrap.svg",
  },
  {
    name: "TailwindCSS",
    level: "Advance",
    image_url: "tailwindcss.svg",
  },
];

export const ToolsUsed: ToolsUsed[] = [
  {
    name: "Git",
    used: "Version control",
    image_url: "git.svg",
  },
  {
    name: "Git",
    used: "Git Hosting",
    image_url: "github.svg",
  },
  {
    name: "NPM",
    used: "Package manager",
    image_url: "npm.svg",
  },
  {
    name: "yarn",
    used: "Dependency tool",
    image_url: "yarn.svg",
  },
  {
    name: "VSCode",
    used: "Code Editor",
    image_url: "vscode.svg",
  },
  {
    name: "Postgresql",
    used: "Database",
    image_url: "postgresql.svg",
  },
  {
    name: "Photoshop",
    used: "Photo/Image Editing",
    image_url: "photoshop.svg",
  },
  {
    name: "Figma",
    used: "UI/UX Design",
    image_url: "figma.svg",
  },
  {
    name: "Blender",
    used: "3D Software",
    image_url: "blender.svg",
  },
];
