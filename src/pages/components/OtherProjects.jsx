import { Link } from "react-router-dom"
import { ListOtherProjects } from "../../Data/ListOtherProjects.jsx"

import { useNavigate } from 'react-router-dom';

function OtherProjects() {
    const handleInnerLinkClick = (event) => {
        event.stopPropagation(); // Prevent the event from bubbling up to the parent link
      };
      const navigate = useNavigate();

    function navigateToProject(id) {
        navigate(`/other-project/${id}`);
        window.scrollTo(0, 0);
      };
    return (
        <section className="py-16 bg-[#fdfdfd] dark:bg-[#162336] border-y-2 border-gray-100 dark:border-gray-800 border-solid">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-28">
                <h2 className="text-4xl text-gray-900 dark:text-gray-200 font-semibold mb-3 text-center">Other Projects</h2>
                <div className="mt-4">
                    <ul className="flex flex-wrap flex-col md:flex-row">
                        {
                            
                            ListOtherProjects.map((item, index) => (
                                <li key={index} className="w-full md:w-1/2 p-2">
                                    <div onClick={()=> navigateToProject(item.id)} className="flex items-center cursor-pointer">
                                        <div className="bg-white dark:bg-[#0C0B15] shadow-lg  rounded-md px-6 py-4">
                                            <h3 className="text-2xl capitalize text-gray-900 dark:text-gray-200 font-semibold">{item.title}</h3>
                                            <p className="text-gray-700 dark:text-gray-300 my-1">{item.subDesc}</p>
                                            <div className="mt-3 flex justify-between align-middle h-10 items-center">
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
                                                {/* <div className="">
                                                    {
                                                        Object.keys(item.bnts).map((btn, x) => (
                                                            <a key={x} href={item.bnts[btn].link}
                                                                aria-label="github link repository">
                                                                <img src={item.bnts[btn].icon} alt="" />
                                                            </a>
                                                        ))
                                                    }

                                                </div> */}
                                               
                                            </div>
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
                                    </div>
                                   
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default OtherProjects