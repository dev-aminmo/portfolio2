import ImgHeader from "../../assets/images/header.webp"

function Header() {
    return (
        <header className=" py-16 bg-[#fdfdfd] dark:bg-[#162336]" >
            <div className="container mx-auto h-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-28">
                <div className="flex items-center h-full">
                    <div className="w-full md:w-3/5">
                        <h1 className="text-center md:text-left text-5xl md:text-6xl text-gray-900 dark:text-[#f2f2f2] capitalize font-semibold">
                            Hi, I'm Mohammed Amin Mostefaoui, I'm a Mobile Developer.
                        </h1>
                    </div>
                    <div className="hidden md:block md:w-2/5">
                        <img src={ImgHeader} alt="" />
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header