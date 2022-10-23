import React from 'react';
import {motion} from "framer-motion"
import {FaUser, FaHome} from "react-icons/fa"
import { NavLink } from 'react-router-dom';
import profile from '../../Assect/profile photo.png'
const Sidebar = ({children}) => {


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
            <motion.div style={{height: "100vh"}} animate={{width: "200px"}} className="sidebar p-3 bg-gray-700 text-white overflow-y-auto" >

            <div className="top-section mt-8">                
                <h1 style={{fontSize: '24px'}} className='text-xl font-bold from-accent-focus mb-12'><span className='text-orange-600'>S S</span>  Md. Bayzid</h1>
            </div>
            <section className='routes mt-20'>
                {
                    routes && routes.map((route) => <NavLink to={route.path} key={route.name}  className="nav py-1 px-5 mt-6 border-red-600 hover:bg-red-300 hover:text-black border-b-2 rounded-xl flex items-center">
                        <div style={{fontSize: '20px', marginRight: '10px'}} className=''>{route.icon}</div>
                        <div className=''>{route.name}</div>
                    </NavLink>)
                }
            </section>
            </motion.div>

            <main>
                {children}
            </main>
        </div>
    );
};

export default Sidebar;