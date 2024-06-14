import { Link } from "react-router-dom"
import { ListProjects } from "../../Data/ListProjects"
import Fancybox from "./Fancybox"
import Carousel from "react-multi-carousel"
import { useState } from "react"
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Projects() {
    const [click, setClick] = useState(true)

    const clicked = () => {
        setClick(!click)
    }

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }
   const navigate = useNavigate();

    function navigateToProject(id) {
        navigate(`/project/${id}`);
        window.scrollTo(0, 0);
      };
      
    return (
        <>
            <section id="projects" className=" py-16 bg-[#fdfdfd] dark:bg-[#162336]">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-28">
                    <h2 className="text-4xl text-gray-900 dark:text-gray-200 font-semibold mb-3 text-center">My Recent Work</h2>
                    <p className="text-gray-700 dark:text-gray-300  text-center text-lg">Here are a few past projects I've worked on</p>
                    <div className="mt-4">
                        <ul className="flex flex-col gap-16">
                            {
                                ListProjects.map((item, index) =>{
                                    function handleClick(){
                                        console.log("project details clicked");
                                        navigateToProject(item.id);
                                    }
                                    const handleInnerLinkClick = (event) => {
                                        event.stopPropagation(); // Prevent the event from bubbling up to the parent link
                                      };
                                    
                                  return   (
                                    <li key={index}>
                                        <div className="grid md:grid-cols-2 gap-2 items-center bg-white dark:bg-[#0C0B15] shadow-sm md:shadow-none rounded-sm py-2">
                                            <div className="projects md:w-full h-[300px] overflow-hidden bg-gray-100 dark:bg-gray-900  rounded-sm shadow-sm">
                                                <Fancybox
                                                    options={{
                                                        Carousel: {
                                                            infinite: true,
                                                        },
                                                    }}
                                                >
                                                    <Carousel
                                                        responsive={responsive}
                                                        infinite={false}
                                                        autoPlay={false}
                                                        arrows={false}
                                                        className="owl-carousel owl-theme skill-slider"
                                                    >
                                                        {
                                                            Object.keys(item.imgsUrl).map((project, index) => (
                                                                <div key={index} className="item" onFocus={clicked}>
                                                                    <a data-fancybox="gallery" href={item.imgsUrl[project]}>
                                                                        <img
                                                                            className="object-cover h-[40vh] w-auto  m-auto  transform duration-500 ease-in-out hover:scale-105"
                                                                          //  src={item.imgsUrl[project]}
                                                                            src={(item.imgsUrl[project].endsWith('.mp4'))?item.imgsUrl[project].replace('.mp4', '.webp'):item.imgsUrl[project]}
                                                                        />
                                                                    </a>
                                                                </div>
                                                            ))
                                                        }
                                                    </Carousel>
                                                </Fancybox>

                                            </div>
                                            
                                             {/* <Link to={`/project/${item.id}`}>  */}
                                            <div onClick={handleClick} className="md:w-full  cursor-pointer pl-8 pr-8">
                                                <h3 className="text-2xl capitalize text-gray-900 dark:text-gray-200 font-semibold">
                                                    {/* <Link to={`/project/${item.id}`}> */}
                                                    {/* {item.title}</Link></h3> */}
                                                    {item.title}</h3>
                                                <ul className="flex gap-1 flex-wrap my-2">
                                                    {
                                                        Object.keys(item.tags).map((tag, y) => (
                                                            <li key={y}
                                                                className="bg-blue-100 dark:bg-blue-700 text-sm capitalize px-4 py-1 rounded-full text-blue-700 dark:text-blue-50   font-medium">
                                                                {item.tags[tag]}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                                <p className="text-gray-700 dark:text-gray-300">
                                                    {item.subDesc}
                                                </p>
                                                <div className="mt-2 w-fit">
                                                    <ul className="flex gap-1 flex-wrap my-2">
                                                        {
                                                            Object.keys(item.bnts).map((btn, x) => (
                                                                <li key={x}
                                                                    className="px-2 py-1 opacity-70 hover:opacity-100 transition-opacity duration-300 text-red">
                                                                    <a 
                                                                     onClick={handleInnerLinkClick}
                                                                    className="nav-link text-black text-3xl dark:text-gray-300" target="blank" href={item.bnts[btn].link}>{item.bnts[btn].icon}</a>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                             {/* </Link>  */}
                                        </div>
                                    </li>
                                );
                            })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects