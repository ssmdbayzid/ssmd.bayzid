import React, { useState } from 'react';
import {motion} from "framer-motion"
import {FaUser, FaHome, FaFacebook, FaLinkedin, FaGithub, FaDiscord} from "react-icons/fa"
import { NavLink } from 'react-router-dom';
import profile from '../../Assect/profile photo.png'
import {AiOutlineRight} from "react-icons/ai"
import { sideBarMmenu } from '../../utility/data';

const Sidebar = ({children}) => {
    const [open, setOpen] = useState(true)


    console.log(open)

    return (
        <div className='main-container bg-[#082032] flex'>
            <motion.div style={{height: "100vh"}}  className={`sidebar md:"w-60" lg:w-72 lg:pt-20 "w-20" p-3 bg-gray-700 text-white overflow-y-auto`}>

                {/* <div className='`${open ? "w-72" : "w-20"}'>

                </div> */}
                <span onClick={()=>setOpen(!open)} className='pixed'><AiOutlineRight className='absolute cursor-pointer lg:left-[270px]  text-5xl text-black w-8 h-8 justify-center bg-gray-300 left-[170px] top-8 p-2 rounded-full shadow-black shadow-md text'/></span>


            <div className="top-section mt-8">                
                {open && <h1  className='text-xl font-bold text-center md:text-3xl from-accent-focus mb-12'><span className='text-orange-600'>S S</span>  Md. Bayzid</h1>}

                {!open && <FaUser />}
            </div>
            <section className='routes mt-20'>
                {
                    sideBarMmenu && sideBarMmenu.map((route) => <NavLink to={route.path} key={route.name}  className={`${({isActive}) => isActive && "nav__links active-navlinks" } nav py-1 px-5 mt-6 border-red-600 hover:bg-red-300 hover:text-black border-b-2 text-xl rounded-xl flex items-center `}>
                        <div className='mr-3'>{route.icon}</div>
                        <div className=''>{route.name}</div>
                    </NavLink>)
                }
            </section>
            <div className='grid grid-cols-1  md:grid-cols-4 text-2xl mt-20'>
                <a href="https://web.facebook.com/ssmd.bayzid/" target="_blank" className='mx-auto hover:text-red-400 mb-5 md:mb-0'> < FaFacebook /> </a> 
                <a href="https://www.linkedin.com/in/ssmdbayzid/" target="_blank" className='mx-auto hover:text-red-400 mb-5 md:mb-0'> < FaLinkedin /> </a> 
                <a href="https://github.com/ssmdbayzid" target="_blank" className='mx-auto hover:text-red-400 mb-5 md:mb-0'> <FaGithub /> </a>  
                <a href="https://discord.com/users/2358" target="_blank" className='mx-auto hover:text-red-400 mb-5 md:mb-0'> <FaDiscord /> </a>
            </div>
            </motion.div>

            <main>
                {children}
            </main>
        </div>
    );
};

export default Sidebar;