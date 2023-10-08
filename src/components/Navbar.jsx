import React, { useEffect, useState } from 'react'
import '../../index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  // Aos

  useEffect(() => {
    AOS.init();
  }, [])
  // turning hamburger into cross
  function myFunction(x) {
    handleClick()
    const btn = document.getElementById('button')
    btn.classList.toggle("change");
    // console.log('hello')
  }



  // To sliding the navbar down
  const [Class, setClass] = useState('height0')
  const handleClick = () => {
    Class === 'height0' ? setClass('height1') : setClass('height0')
    const nav = document.getElementById('navbar-default')
    // console.log(nav.offsetHeight)
    // console.log(Class)
  }
  return (
    <>
      <nav className=" z-10 text-white border-gray-200 dark:bg-gray-900  fixed top-0 w-screen sm:bg-opacity-20 bg-opacity-70 bg-black "  >
        <div className="max-w-screen-xl flex flex-wrap items-center bg-transparent justify-between mx-auto px-4 py-2 sm:py-3 ">
          <p  className="flex seesaw  items-center bg-transparent">
            {/* bg-gradient-to-r from-blue-500 to-purple-500 */}
            <span className=" text-transparent bg-clip-text  text-yellow-100  self-center text-xl font-semibold whitespace-nowrap fontL font-light sm:font-extrabold">{"<Daniyal />"}</span>
          </p>
          {/* button */}
          <div onClick={myFunction} id='button'>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>

          <div className={`w-full md:block md:w-auto  overflow-hidden md:mr-6 space-x-10 ${Class} `} id="navbar-default" >
            <ul className=" fontL font-medium text-white flex flex-col items-center p-4 md:p-0 mx-auto mt-4  border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-12 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500  block py-2 md:py-0  pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#About" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 block py-2 md:py-0  pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#Projects" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 block py-2 md:py-0  pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
              </li>
              <li>
                <a href="#Contact" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 block py-2 md:py-0  pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
