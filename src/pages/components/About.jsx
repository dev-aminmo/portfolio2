

function About() {
    return (
        <>
            <section id="about" className="pt-16 pb-72 bg-blue-700 border-y-2 border-gray-100 dark:border-gray-800 border-solid dark:bg-[#162336] border-t-2-slate-800 dark:text-gray-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-28">
                    <h2 className="text-4xl text-white font-semibold mb-5 text-center">
                        About me
                    </h2>
                    <p className="text-xl text-gray-50 mb-4 text-center w-5/6 mx-auto leading-relaxed">
                        Hi, I’m Mohammed Amin Mostefaoui. I’m a Mobile Developer located in Algeria. I have a serious passion for
                        mobile development and software engineering in general. with an educational background in 💻 computer science.
                        I’m a self-taught developer and I’m always looking for new challenges and to learn new technologies.
                    </p>
                    <a href="https://docs.google.com/document/d/1RoT47ic6VLn_-yPZNhOHTTD92qDsIraqtZ_i5MED3r8/edit?usp=sharing"
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