import React, { useState } from 'react';
import {motion} from "framer-motion"
import {FaUser, FaHome, FaFacebook, FaLinkedin, FaGithub, FaDiscord} from "react-icons/fa"
import { NavLink } from 'react-router-dom';
import profile from '../../Assect/profile photo.png'
import {AiOutlineRight} from "react-icons/ai"

const Sidebar = ({children}) => {
    const [open, setOpen] = useState(true)


    console.log(open)
    const routes = [
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



    return (
        <div className='main-container flex'>
            <motion.div style={{height: "100vh"}}  className={`sidebar md:"w-60" "w-20" p-3 bg-gray-700 text-white overflow-y-auto`}>

                {/* <div className='`${open ? "w-72" : "w-20"}'>

                </div> */}
                <span onClick={()=>setOpen(!open)} className='pixed'><AiOutlineRight className='absolute cursor-pointer  text-5xl text-black w-8 h-8 justify-center bg-gray-300 left-[170px] top-8 p-2 rounded-full shadow-black shadow-md text'/></span>


            <div className="top-section mt-8">                
                {open && <h1 style={{fontSize: '24px'}} className='text-xl font-bold from-accent-focus mb-12'><span className='text-orange-600'>S S</span>  Md. Bayzid</h1>}

                {!open && <FaUser />}
            </div>
            <section className='routes mt-20'>
                {
                    routes && routes.map((route) => <NavLink to={route.path} key={route.name}  className="nav py-1 px-5 mt-6 border-red-600 hover:bg-red-300 hover:text-black border-b-2 rounded-xl flex items-center">
                        <div style={{fontSize: '20px', marginRight: '10px'}} className=''>{route.icon}</div>
                        <div className=''>{route.name}</div>
                    </NavLink>)
                }
            </section>
            <div className='grid grid-cols-1 md:grid-cols-4 text-2xl mt-20'>
                <a href="https://web.facebook.com/ssmd.bayzid/" target="_blank" className='hover:text-red-400 mb-5 md:mb-0'> < FaFacebook /> </a> 
                <a href="https://www.linkedin.com/in/ssmdbayzid/" target="_blank" className='hover:text-red-400 mb-5 md:mb-0'> < FaLinkedin /> </a> 
                <a href="https://github.com/ssmdbayzid" target="_blank" className='hover:text-red-400 mb-5 md:mb-0'> <FaGithub /> </a>  
                <a href="https://discord.com/users/2358" target="_blank" className='hover:text-red-400 mb-5 md:mb-0'> <FaDiscord /> </a>
            </div>
            </motion.div>

            <main>
                {children}
            </main>
        </div>
    );
};

export default Sidebar;