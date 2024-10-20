import { Icons } from "@/components/icons";
import { HomeIcon, Code, PenLine, AlbumIcon } from "lucide-react";

export const DATA = {
  name: "Aditya Gupta (AdiSuyash)",
  nickName: "Adi",
  initials: "AG",
  url: "https://adisuyash.co",
  location: "Lucknow, India",
  locationLink: "https://www.google.com/maps/place/lucknow",
  myTagline: "Dev, Design and Community.",
  description:
    "Currently, I'm working as a Developer Advocate at HackQuest, which is a Web3 developer education platform.",
  summary:
    "Since 2022, I've been building and managing communities in the Web3 space while upskilling myself through active participation in various Web3 hackathons. I recently won the [Arweave India Hacker House 2024](https://x.com/AdiSuyash/status/1813203631577133439) and have been part of their Launchpad program. I’ve also mentored at over 10 hackathons, facilitated developer training programs at [HackQuest](https://x.com/hackQuest_), hosted build stations, and contributed to tech projects that encourage collaboration and learning among developers.",
  avatarUrl: "/me.png",

  languages: [
    "Solidity",
    "TypeScript",
    "JavaScript",
    "Python",
    "C/C++",
    "HTML/CSS",
  ],

  frameworks: [
    "ReactJs",
    "Next.js",
    "Magic UI",
    "TailwindCSS",
    "Shadcn/ui",
    "Node.js",
  ],

  platforms: ["Linux", "Windows", "Azure", "AWS", "IBM Cloud"],

  tools: ["Notion", "Git", "GitHub", "VS Code", "Postman", "Hashnode"],

  softSkills: [
    "Leadership",
    "Public Speaking",
    "Event Management",
    "Technical Writing",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/project", icon: Code, label: "Projects" },
    { href: "/blog", icon: PenLine, label: "Blog" },
    {
      href: "https://drive.google.com/file/d/101r1ibMDTE-8Eg1IQve2XAKppf4XYoBS/view",
      icon: AlbumIcon,
      label: "Resume",
    },
  ],
  contact: {
    email: "mailto:adisuyash@gmail.com",
    tel: "+918303420320",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/adisuyash",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/adisuyash",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X (Twitter)",
        url: "https://x.com/adisuyash",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@adisuyashgupta ",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "HackQuest",
      href: "https://hackquest.io",
      badges: [],
      location: "Remote",
      title: "Developer Advocate",
      logoUrl: "/hackquest.png",
      start: "December 2023",
      end: "Present",
      description:
        "As a Web3 Developer Community Manager at HackQuest, I launched and managed four successful beta testing cohorts, achieving a 60% average attendance rate. I facilitated onboarding for Web2 and Web3 developers, delivering tailored training programs across L1 and L2 platforms. Additionally, I played a key role in growing HackQuest’s community by organizing 10+ meetups and workshops, partnering with hackathons, and ensuring that the platform aligned with user feedback.",
    },
    {
      company: "DevRel Uni",
      href: "https://devreluni.com",
      badges: [],
      location: "Remote",
      title: "Mentee - Cohort 5",
      logoUrl: "/devreluni.png",
      start: "May 2024",
      end: "June 2024",
      description:
        "During my time as a DevRelUni Mentee, I gained practical experience in developer advocacy through engaging with industry experts and completing hands-on assignments. I also hosted a Twitter Space with Francesco Ciulla, DevRel @Daily.dev, attracting over 80 participants. The program sharpened my skills in developer relations, and I contributed to group discussions and assignments with a focus on real-world DevRel challenges.",
    },
    {
      company: "AngelHack",
      href: "https://angelhack.com",
      badges: [],
      location: "Remote",
      title: "Community Builder",
      logoUrl: "/angelhack.png",
      start: "February 2024",
      end: "March 2024",
      description:
        "As an AngelHack Community Builder, I successfully hosted online and offline events, achieving over 120 registrations and exceeding engagement goals. I promoted AngelHack’s programs with clear calls to action, helping to expand the community. Additionally, I referred 10 individuals to join the next Community Builder Program, solidifying my role in fostering engagement within the hackathon community.",
    },
  ],
  education: [
    {
      school: "Shri Ramswaroop Memorial University",
      href: "https://srmu.ac.in",
      degree: "B.Tech in Computer Science, CGPA: 8.2",
      logoUrl: "/srmu.png",
      start: "2022",
      end: "Present",
    },
    {
      school: "Jawahar Navodaya Vidyalaya",
      href: "https://navodaya.gov.in/nvs/nvs-school/FATEHPUR/",
      degree: "AISSCE (Class XII), Aggregate: 91.6%",
      logoUrl: "/jnv.png",
      start: "2020",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Convergent",
      href: "https://convergent.vercel.app",
      dates: "Arweave India Hacker House 2024",
      active: true,
      description:
        "A decentralized perpetuals exchange on Arweave/AO that aims to create synthetic assets that mimic the price of another asset without ever holding the actual asset.",
      technologies: [
        "Lua",
        "Arweave",
        "React.js",
        "Orbit (Oracle)",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://convergent.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/adisuyash/convergent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/convergent.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Arweave India Hacker House",
      dates: "July 7th - 11th, 2024",
      location: "Mussorie, India",
      description:
        "Developed a decentralized perpetuals exchange on Arweave/AO that aims to create synthetic assets that mimic the price of another asset without ever holding the actual asset.",
      image: "/arweaveindia.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://convergent.vercel.app",
        },
        {
          title: "The Winning Tweet",
          icon: <Icons.x className="h-4 w-4" />,
          href: "https://x.com/AdiSuyash/status/1813203631577133439",
        },
      ],
    },
  ],
} as const;
