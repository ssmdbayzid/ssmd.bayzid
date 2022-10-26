import React from 'react';
import {
    FaHtml5,
    FaBootstrap,
    FaGit,
    FaGithub,
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

const Skills = () => {

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
    return (
        <div>
            <h1 className='text-center text-5xl py-5 text-white'> My <span className='text-red-600 '>Skills</span></h1>        
        <div>
                {
                    skills && skills.map((skill) => <div key={skill.name}>

                    </div>
                )}
        </div>
        
        
        </div>
    );
};

export default Skills;