import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiSun, BiMoon } from 'react-icons/bi';
import useTheme from '../../theme/useTheme';

const Navbar = ({ theme, toggleTheme }) => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
        console.log(nav)
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'About', link: '#about' },
        { id: 2, text: 'Services', link: '#services' },
        { id: 3, text: 'Projects', link: '#projects' },
    ];

    // useEffect(() => {
    //     let handleNav = () => {
    //         setNav(false)
    //     }
    //     document.addEventListener("mousedown", handleNav)
    // }, [])

    //theme 
    const [newTheme, toggleNewTheme] = useTheme()

    return (
        <>
            <div className='sticky  top-0 z-50  shadow-sm bg-[#fdfdfd] dark:bg-[#162336] w-full  min-h-[50px]' >
                <div className='container  flex justify-between items-center  h-16 text-black'>
                    {/* Logo */}
                    <a href="/portfolio/" className='capitalize font-medium text-gray-900 dark:text-[#f2f2f2]'>Mohammed Mostefaoui</a>

                    {/* Desktop Navigation */}
                    <ul className='hidden md:flex space-x-4 capitalize text-gray-700 dark:text-[#f2f2f2]'>
                        {navItems.map(item => (
                            <li
                                key={item.id}
                            >
                                <a className='p-4 text-gray-600 dark:text-[#e1e1e1] rounded-xl m-2 cursor-pointer duration-300 hover:text-black dark:hover:text-[#fff]' href={item.link}>{item.text}</a>
                            </li>
                        ))}
                        <li>
                            <a href="#contact"
                                className="bg-blue-700 py-2 px-6 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-800">contact</a>
                        </li>
                        <li>
                            <button className='toggleTheme flex items-center h-full' onClick={toggleNewTheme}>
                                {newTheme === 'light' ? <BiMoon /> : <BiSun />}
                            </button>
                        </li>
                    </ul>
                    {/* Mobile Navigation Icon */}
                    <div onClick={handleNav} className='block md:hidden text-gray-700 dark:text-[#f2f2f2] '>
                        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </div>

                    {/* Mobile Navigation Menu */}
                    <ul
                        className={
                            nav
                                ? 'fixed md:hidden left-0 top-0 w-[60%] h-full   bg-gray-100 dark:bg-[#162336]  ease-in-out duration-500'
                                : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                        }
                    >
                        {/* Mobile Logo */}
                        <h1 className='w-full text-2xl font-bold text-gray-700 dark:text-[#f2f2f2] m-4'>Mohammed Mostefaoui</h1>

                        {/* Mobile Navigation Items */}
                        {navItems.map(item => (
                            <li
                                key={item.id}
                                onClick={handleNav}
                                className='p-4  rounded-xl m-2 cursor-pointer duration-300 '
                            >
                                <a className='text-gray-700 dark:text-[#f2f2f2]' href={item.link}>{item.text}</a>
                            </li>
                        ))}
                        <li onClick={handleNav}>
                            <button className='toggleTheme text-gray-700 dark:text-[#f2f2f2] ml-5' onClick={toggleNewTheme}>
                                {newTheme === 'light' ? <BiMoon /> : <BiSun />}
                            </button>
                        </li>
                        <li onClick={handleNav} className='p-4  text-gray-700 dark:text-[#f2f2f2] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;