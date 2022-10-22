import React from 'react';
import {FaUserAlt} from "react-icons/fa"
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {

    const menuItem = [
        {
            path:"/home",
            name:"Home",
            icon: <FaUserAlt />
        },
        {
            path:"/",
            name:"About",
            icon: <FaUserAlt />
        },
        {
            path:"/",
            name:"Protpolio",
            icon: <FaUserAlt />
        },
        {
            path:"/",
            name:"Service",
            icon: <FaUserAlt />
        },
        {
            path:"/",
            name:"Contact",
            icon: <FaUserAlt />
        },
    ]

    console.log(menuItem)
    return (
        <div className='container'>
            <div className='w-[200px] sidebar'>
                <div className='top-section'>
                <FaUserAlt className="text-3xl" />
                <h1>S S Md. Bayzid</h1>
                </div>
            
            {
                menuItem && menuItem.map((item, index) =>
                    <NavLink to={item.path} key={index} className="flex items-center gap-5 link">
                        <div>{item.icon}</div>
                        <div>{item.name}</div>

                    </NavLink>
                )
            }
            </div>
            <main>{children}</main>
        </div>
        
    );
};

export default Sidebar;