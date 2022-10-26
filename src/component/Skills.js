import React from 'react';
import { skills } from '../utility/data';


const Skills = () => {


    return (
        <div>
            <h1 className='text-center text-5xl py-5 text-white'> My <span className='text-red-600 '>Skills</span></h1>        
        <div className='md:grid-cols-4 grid-cols-3 gap-3 grid mx-auto justify-center lg:grid-cols-5'>
                {
                    skills && skills.map((skill) => <div key={skill.name} className="justify-center text-center text-2xl bg-red-200">

                        <span>{skill.icon}</span>
                        <span>{skill.name}</span>
                    </div>
                )}
        </div>
        
        
        </div>
    );
};

export default Skills;