import {FaUser, FaHome, FaFacebook, FaLinkedin, FaGithub, FaDiscord} from "react-icons/fa"

import {
    FaHtml5,
    FaBootstrap,
    FaGit,
    // FaGithub,
    FaReact,
    FaNodeJs,

} from 'react-icons/fa'
import {
        SiCss3,
        SiMongodb,
        SiExpress,
        SiRedux,
        SiFirebase,
        SiSocketdotio
        } from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {SiTailwindcss, SiJquery} from 'react-icons/si'



// ============== Sidebar Menu===================

const sideBarMmenu = [
    {
        path: "/",
        name: "Home",
        icon: <FaHome />,
      },
      {
        path: "/about",
        name: "About",
        icon: <FaUser />,
      },
      {
        path: "/skills",
        name: "Skills",
        icon: <FaUser />,
      },
      {
        path: "/projects",
        name: "Projects",
        icon: <FaUser />,
      },
      {
        path: "/blog",
        name: "Blog",
        icon: <FaUser />,
      },
      {
        path: "/contact",
        name: "Contact",
        icon: <FaUser />,
      },
]

// ===============Skills ====================

const skills = [
    {
        name: "HTML5",
        icon: <FaHtml5/>,
    },
    {
        name: "CSS3",
        icon: <SiCss3/>,
    },
    {
        name: "JavaScript",
        icon: <IoLogoJavascript/>,
    },
    {
        name: "Bootstrap",
        icon: <FaBootstrap/>,
    },
    {
        name: "Tailwind",
        icon: <SiTailwindcss/>,
    },
    {
        name: "jQuery",
        icon: <SiJquery/>,
    },
    {
        name: "Git",
        icon: <FaGit/>,
    },
    {
        name: "Github",
        icon: <FaGithub/>,
    },
    {
        name: "React.JS",
        icon: <FaReact/>,
    },
    {
        name: "NodeJS",
        icon: <FaNodeJs/>,
    },
    {
        name: "MongoDB",
        icon: <SiMongodb/>,
    },
    {
        name: "ExpressJS",
        icon: <SiExpress/>,
    },
    {
        name: "Redux",
        icon: <SiRedux/>,
    },
    {
        name: "Firebase",
        icon: <SiFirebase/>,
    },

    {
        name: "Socket.IO",
        icon: <SiSocketdotio/>,
    },
]


export {sideBarMmenu, skills}