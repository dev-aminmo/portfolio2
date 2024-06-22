

function About() {
    return (
        <>
            <section id="about" className="pt-16 pb-72 bg-blue-700 border-y-2 border-gray-100 dark:border-gray-800 border-solid dark:bg-[#162336] border-t-2-slate-800 dark:text-gray-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-28">
                    <h2 className="text-4xl text-white font-semibold mb-5 text-center">
                        About me
                    </h2>
                    <p className="text-xl text-gray-50 mb-4 text-center w-5/6 mx-auto leading-relaxed">
                    I am a Mobile Developer based in Algeria with a deep passion for mobile development and software engineering. With a background in computer science, I have developed my skills as a self-taught developer. I am constantly seeking new challenges and opportunities to learn and master emerging technologies.
                    </p>
                    <a href="https://drive.google.com/file/d/1oeEuHgLLagwj40NsUcXQcYFzHWG9FMd1/view?usp=sharing"
                        target="_blank"
                        className="block mx-auto text-center w-48 border-2 border-solid border-white px-8 py-2 text-white rounded-sm text-lg  focus:outline-none focus:ring-2 focus:ring-blue-300">My
                        resume
                    </a>
                </div>
            </section>
        </>
    )
}

export default About