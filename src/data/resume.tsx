import { Icons } from "@/components/icons";
import { url } from "inspector";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Muhammad\nHadi",
  initials: "MH",
  url: "https://hadi-portfolio.vercel.app",
  location: "ISLAMABAD, PAKISTAN",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "A Software Developer and Full Stack Developer Passionate About Building User-Friendly Web Experiences With Modern Technologies.",
  summary:
    "I'm a passionate Software Developer specializing in Python, Java, C++, Web Development (MERN, Next.js), and Mobile App Development (Flutter). I also bring experience in Cloud Computing (AWS), Database Management (MongoDB, Firebase, PostgreSQL) and UI/UX Design (Figma).",
  avatarUrl: "/mine.png",
  skills: [
    "Programming Language: Java, Python, Dart",
    "Software Development: OOP, DSA",
    "Web Development: JavaScript, TypeScript, MERN Stack, Next.js",
    "Mobile App Development: Flutter",
    "Database Management: MongoDB, Firebase, PostgreSQL",
    "Styling & UI: Tailwind CSS, Material UI (MUI)",
    "Mobile Development: Flutter",
    "UI/UX Design: Figma"
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hadiulfaisal@gmail.com",
    tel: "+923148013034",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AbdulHadi05",
        icon: Icons.github,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/hadiulfaisal",
        icon: Icons.instagram,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammad-hadi-71b5ab235/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:hadiulfaisal@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Upwork",
      href: "https://www.upwork.com/freelancers/~017f4aec06486e8277",
      badges: [],
      location: "Remote",
      title: "Freelancer Web Developer",
      logoUrl: "/upwork.svg",
      start: "2022",
      end: " Ongoing",
      description:
        "As a MERN Stack Web Developer, I specialize in creating Dynamic, Responsive Websites and Applications using MERN, Next.js and Tailwind CSS, backed by robust Databases like Firebase and PostgreSQL. With experience on platforms like Upwork, I've successfully delivered high-quality solutions that meet clients' needs and exceed their expectations.",
    },

    {
      company: "GDSC CUI",
      badges: ["CO LEAD"],
      href: "",
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/gdsc.png",
      start: "Sep 2023",
      end: "Feb 2024",
      description:
        "As the Co-Lead of GDSC CUI, I played a key role in leading web development initiatives, mentoring students, and organizing events to foster a collaborative learning environment. My focus was on guiding the team in building impactful projects using the latest web technologies, helping our university community grow in technical expertise and innovation.",
    },

    {
      company: "Oil and Gas Development Company Limited",
      badges: ["Internship"],
      href: "",
      location: "Onsite",
      title: "Web Developer",
      logoUrl: "/ogdc.png",
      start: "July 2025",
      end: "Sep 2025",
      description:
        "Developed a custom web-based forms platform for OGDCL with role-based portals, approval workflows, and dynamic form builder using React, Node.js, and Supabase. Integrated Azure AD authentication, dashboards, and reporting to streamline organizational process automation.",
    },
  ],
  education: [
    {
      school: "COMSATS Univeristy Islamabad",
      href: "https://www.comsats.edu.pk/",
      degree: "Bachelors in Software Engineering",
      logoUrl: "/Comsats.jpg",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
 
    // {
    //   title: "Portfolio Website",
    //   href: "",
    //   dates: "April 2025 - Present",
    //   active: true,
    //   description:
    //     "A personal portfolio website built with Next.js to showcase my projects and skills. The website features a sleek design, smooth navigation, and is fully responsive. Deployed on Vercel for fast, reliable performance and continuous integration.",
    //   technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://shaheer-portfolio-omega.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/malik-shaheer03/shaheer-portfolio",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "./PortfolioWebsite.mp4",
    // },
 
 
    {
      title: "Lumina - Premium Wallpaper Collection",
      href: "https://lumina-two-ruby.vercel.app/",
      dates: "June 2025 - Present",
      active: true,
      description:
        "A Stunning Wallpaper Discovery Platform using Modern Web Technologies. This responsive Web App delivers a Cinematic browsing Experience with Advanced Features.",
      technologies: ["Next.js", "TypeScript" , "Material-UI" , "Tailwind CSS", "Pexels API"],
      links: [
        {
          type: "Website",
          href: "https://lumina-two-ruby.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "./Lumina.mp4",
    },

    {
      title: "bnhaus Architectural Website",
      href: "https://www.bnhaus.com/",
      dates: "June 2025 - July 2025",
      active: true,
      description:
        "Developed a modern and responsive architectural portfolio website showcasing projects with a clean, minimal design. Built with a focus on usability, performance, and visually engaging presentation of architectural work.",
      technologies: ["Next.js", "TypeScript" , "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://www.bnhaus.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "./bnhaus.mp4",
    },
    
  ],
} as const;
