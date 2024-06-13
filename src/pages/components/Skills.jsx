import { Link } from "react-router-dom"
import { ListProjects } from "../../Data/ListProjects"
import Fancybox from "./Fancybox"
import Carousel from "react-multi-carousel"
import { useState } from "react"

import htmlImg from "../../assets/images/image skills/html.png"
import { ListSkills } from "../../Data/ListSkills"


function Skills() {

    return (
        <>
            <section id="skills" className=" py-16 bg-[#fdfdfd] dark:bg-[#162336] border-b-2  border-gray-100 dark:border-gray-800 border-solid">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-28">
                    <h2 className="pb-4 text-4xl text-gray-900 dark:text-gray-200 font-semibold mb-3 text-center">My Skills</h2>
                    {/* <p className="text-gray-700 dark:text-gray-300  text-center text-lg">Here are some of my skills</p> */}
                   
                    <div className="mt-4">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 justify-items-center text-center">
                            {
                                Object.keys(ListSkills).map((skill, index) => (
                                    <div key={index} className="flex-col  items-center text-gray-900 dark:text-gray-200">
                                         <img className=" inline h-[60px]  pb-4" src={ListSkills[skill].img} />
                                        
                                          <h2 className="text-2xl">{ListSkills[skill].title}</h2>
                                
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills