import { useParams } from "react-router-dom"
import { ListOtherProjects } from "../Data/ListOtherProjects"






function OtherProjectDetails() {
    const { id } = useParams()
    const project = ListOtherProjects.find((item) => (item.id === id))

    return (
        <div>
            <div className="container pt-10 text-gray-900 dark:text-gray-200">
                <h1 className="text-4xl font-medium mb-10">{project.title}</h1>
                {
                    project.imgUrl && <div className="md:w-full h-[400px] overflow-hidden bg-gray-200 rounded-sm shadow-sm mb-3">
                        <img
                            className="object-contain w-full h-full m-auto  transform duration-500 ease-in-out hover:scale-105"
                            src={project.imgUrl}
                        />
                    </div>
                }

                <div className="mb-10">
                    <h2 className="font-medium">Tags:</h2>
                    <div className="mt-2 w-fit">
                        <ul className="flex gap-1 flex-wrap my-2">
                            {
                                Object.keys(project.tags).map((tag, y) => (
                                    <li key={y}
                                        className="bg-blue-100 dark:bg-blue-700 text-sm capitalize px-4 py-1 rounded-full text-blue-700 dark:text-blue-50   font-medium">
                                        {project.tags[tag]}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="font-medium mb-10">
                    <h2>Links:</h2>
                    <div className="mt-2 w-fit">
                        <ul className="flex gap-1 flex-wrap my-2">
                            {
                                Object.keys(project.bnts).map((btn, x) => (
                                    <li key={x}
                                        className="px-2 py-1 opacity-70 hover:opacity-100 transition-opacity duration-300">
                                        <a className="text-black text-3xl dark:text-gray-300" href={project.bnts[btn].link}>{project.bnts[btn].icon}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div >
                    <h2 className="font-medium">description :</h2>
                    <p className="mb-5 text-gray-700 dark:text-gray-400">{project.subDesc} </p>
                    <ul className="text-gray-700 dark:text-gray-400">
                        {
                            Object.keys(project.desc).map((line, k) => (
                                <li key={k}
                                    className="text-sm  px-1 py-1 font-medium">
                                    {project.desc[line]}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OtherProjectDetails