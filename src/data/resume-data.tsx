import {
  SWCLogo, GrowwLogo, RipplingLogo
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ankit Chouhan",
  initials: "AC",
  location: "Bengaluru, India",
  locationLink: "https://maps.app.goo.gl/cc5ibm6jAiXmRFp17",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React and Django Framework. I have over 2.5 years of experience in building Web apps.",
  avatarUrl: "https://avatars.githubusercontent.com/u/26669522?v=4",
  personalWebsiteUrl: "https://ankitchouhan.dev",
  contact: {
    email: "ankitchouhan1020@gmail.com",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ankitchouhan1020",
        icon: GitHubIcon
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ankitchouhan1020/",
        icon: LinkedInIcon
      },
      {
        name: "X",
        url: "https://twitter.com/arreankit",
        icon: XIcon
      }
    ]
  },
  education: [
    {
      school: "National Institute of Technology",
      degree: "Bachelor of Technology, GGPA: 8.0",
      start: "2016",
      end: "2020"
    },
    {
      school: "Govt. Higher Secondary School, Rehti",
      degree: "XII, Percentage: 97.2%",
      start: "2014",
      end: "2015"
    }
  ],
  work: [
    {
      company: "Rippling",
      link: "https://rippling.com",
      badges: ["Hybrid"],
      title: "Software Engineer II",
      logo: RipplingLogo,
      start: "May 2022",
      end: "Present",
      description: [
        {
          highlight: "Profile Page Migration",
          caption: "Migrated business logic from FE to BE for profile page. Improved performance, reliability and maintainability."
        },
        {
          highlight: "Bulk Actions",
          caption: "Implemented bulk action framework for various flows such as onboarding, offboarding, etc. This increased retention and reduced churn. It also helped in fast onboarding of new customers."
        }
      ]
    },
    {
      company: "Groww",
      link: "https://groww.in",
      badges: ["Remote"],
      title: "Software Engineer I",
      logo: GrowwLogo,
      start: "Aug 2020",
      end: "May 2022",
      description: [
        {
          highlight: "MF/Gold Product",
          caption: "Managed Mutual Funds and Gold sub-products for front-end requirements, mentored other folks within these PODs."
        },
        {
          highlight: "US Stocks Product",
          caption: "Worked on US Stocks flows such as onboarding and order process."
        },

        {
          highlight: "Auth Service",
          caption: "Refactored auth service for logical separation from UI using custom React Hooks."
        },
        {
          highlight: "Optimize Build",
          caption: "Optimized JS bundle for improving web performance using custom Webpack configuration."
        },
        {
          highlight: "TypeScript Migration",
          caption: "Implemented type checking in various projects. Initiated JavaScript to TypeScript migration in front-end projects. Used incremental method and helped other team members to start writing React in TypeScript."
        },
        {
          highlight: "Icon Package",
          caption: "Published icon-store library that transforms custom icon images to React SVG components. Implemented a custom transformation script for easy migration.",
          link: "https://github.com/Groww/icon-store"
        },
        {
          highlight: "CSS Library",
          caption: "Published CSS library for easy style sharing within multiple projects.",
          link: "https://github.com/Groww/base-css"
        }
      ]
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Python",
    "Django Rest Framework",
    "MongoDB"
  ],
  projects: [
    {
      title: "SWC Plugin Transform Import",
      techStack: [
        "TypeScript",
        "Abstract Syntax Tree"
      ],
      description: "Transforms import declaration during SWC compilation process. Supports string, function or module as transformation mechanism.",
      logo: SWCLogo,
      link: {
        label: "github.com/ankitchouhan1020/swc-plugin-transform-import",
        href: "https://github.com/ankitchouhan1020/swc-plugin-transform-import"
      }
    },
    {
      title: "Prefix ClassName",
      techStack: ["JSCodeShift", "Abstract Syntax Tree", "JavaScript"],
      description:
        "Add unique prefix to all React classNames based on the file name. Helps reducing the class names conflicts. Internally uses JSCodeShift transformations.",
      link: {
        label: "github.com/ankitchouhan1020/prefix-classname",
        href: "https://github.com/ankitchouhan1020/prefix-classname"
      }
    }
  ]
} as const;
