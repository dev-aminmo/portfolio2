
function FooTer() {
    let date = new Date().getFullYear();
    return (
        <footer className="bg-gray-50 dark:bg-[#162336] py-16 border-t-2 border-solid border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-28">
                <div className="flex justify-between">
                    <p className="text-gray-800 dark:text-gray-300  text-center text-sm">&copy; {date} - Mohammed Amin Mostefaoui</p>
                    <div className="flex gap-3 font-medium text-sm">
                        <a href="https://www.linkedin.com/in/dev-aminmo/" target="_blank"
                            className="pb-1 text-gray-600 dark:text-gray-500  focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            LinkedIn
                        </a>
                        <a href="https://github.com/dev-aminmo" target="_blank"
                            className="pb-1 text-gray-600 dark:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooTer