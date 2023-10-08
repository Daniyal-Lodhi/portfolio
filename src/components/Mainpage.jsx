import React, { useEffect } from 'react'
import Navbar from './Navbar'
import merngif from '../assets/webdev.gif'
import ProjectItem from './ProjectItem'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Resume from './Resume';


const Mainpage = () => {
  // bg-gradient-to-r from-violet-900 to-fuchsia-900
  // AOS
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000
    });
  }, [])

  const projectsData = [
    {
      title: "Mini Shopping Cart",
      description: "It is a simple shopping cart made for practice purpose, The states of products gallery, Overview and checkout are fully managed by redux toolkit library. Furthermore it also supports the checkout feature by Stripe where you can enter a test credit card number, any future date and any 3 digit CVC code and the checkout will proceed.",
      live: "https://shoppingcartby-daniyal-lodhi.netlify.app/",
      code: "https://github.com/Daniyal-Lodhi/shopping-cart",
      technologies: ['Reactjs', 'Redux Toolkit', 'Stripe', 'Nodejs', 'Express', 'Tailwind css'],
      aos: "flip-left"

    },
    {
      title: "Bike Rental System",
      description: "The BRS is a system to offer clients a web application that allows them to rent motorcycles without having to buy them.In this project, I led the backend development, focusing on database conceptualization and design for an efficient data schema for optimal storage, retrieval, and management.Furthermore I also did the login and search integration in frontend.",
      live: "https://nodebykers.netlify.app/home",
      code: "https://github.com/Daniyal-Lodhi/BRS_backend",
      technologies: ['Reactjs', 'Nodejs', 'Express', 'Mysql db'],
      aos: "flip-right"
    },
    {
      title: "InoteBook",
      description: "INoteBook is an Online notebook where users can write, save and edit their notes online. Each user has to login to continue. The Login method is implemented by using JWT Authentication token to make sure each user only gets his/her own data instead of getting any other user's data.",
      live: "https://mynotebook-1.netlify.app/",
      code: "https://github.com/Daniyal-Lodhi/inotebook",
      technologies: ['html', 'css', 'Reactjs', 'Nodejs', 'Express', 'Mongo db', 'Bootstrap'],
      aos: "flip-left"

    },
    {
      title: "Text Customization Tool",
      description: "It is a simple and first project I made using React js. This tool allows users to do some certain types of action on their input text and also gives some information about text like the number of words and characters plus it let users to listen their input text.,  ",
      live: "https://textutilsby-daniyal-lodhi.netlify.app/",
      code: "https://github.com/Daniyal-Lodhi/my-app",
      technologies: ['html', 'css ', 'Reactjs'],
      aos: "flip-right"


    }
  ]

  return (
    <>
      <div className='h-[85vh] sm:h-[90vh] sm:flex sm:justify-center   '>
        <Navbar />
        <div className='sm:flex-row sm:space-x-40  border-white flex flex-col    px-3  sm:px-10 sm:mt-28 mt-36    justify-center sm:justify-between sm:text-left text-center leading-4 items-center space-y-5 sm:space-y-0 '>
          <div >
            <h1 className='text-yellow-100 text fontSize sm:text-2xl text-3xl fontL font-light '>Hey folks! I'm <br /> <span className='font-bold glow fontL '>Daniyal Lodhi</span> <br /> and I am a professional <br /> <span className='text-green-400'>M</span><span className='text-orange-300'>E</span><span className='text-blue-400'>R</span><span className='text-green-300'>N</span> stack developer </h1>
            <div className='flex justify-center sm:justify-start sm:text-lg fontL text-white items-center space-x-5 mt-4 text-sm sm:'>
              <a className='bg1 text-gray-50 hover:bg-pink-800 px-3 py-2 rounded-md' href='#About' >
                About me
              </a>
              <a className='bg1 text-gray-50 hover:bg-pink-800 px-3 py-2 rounded-md ' href='#Projects'>
                Projects
              </a>

            </div>
          </div>
          <div className='overflow-hidden'>
            <img src={merngif} alt="merngiph" data-aos='fade-left' className='sm:h-80 rounded-lg sm:mt-0 mt-5  sm:w-88 ' />
          </div>
        </div>
      </div>

      {/* About */}
      <div id='About' className='text-yellow-50 mt-10 sm:mt-20  h-auto px-2 sm:px-20 overflow-hidden' >
        <div>
          <h1 className='text-2xl sm:text-3xl font-bold text-center border-b-2 w-max mx-auto border-green-100'>About me</h1>

          <div className='flex-col items-center justify-center space-y-5 sm:mt-10 '>

            <div className='flex sm:flex-row flex-col sm:justify-center  sm:space-x-5 sm:mt-14  '>
              <div className='py-5 sm:py-0  sm:w-[180%] ' data-aos='zoom-out-right'>
                <h1 className='text-center sm:text-left text-2xl mb-2 font-semibold fontL ' >Work</h1>
                <p className='text-left px-2 sm:px-0 text-gray-200'>I am a Website developer based in Karachi. I possess expertise in a range of web development technologies in both frontend and backend other than vanilla languages I also use Frameworks like Reactjs, Nextjs and Tailwind css. I have also worked on few SQL projects which you can see in <a href="#projects" className='border-b border-white'>Projects.</a><br /><br />I gained and practiced these skills over the time by making new projects, My journey in the world of web development is not just about skills it's a testament to my unwavering passion for creating digital experiences. </p>
              </div>
              <div className='h-52 bg-white w-2 hidden md:block sm: my-auto'>

              </div>
              <div className=' sm:py-0' data-aos='zoom-out-left'>
                <h1 className='text-center sm:text-left text-2xl mb-2 font-semibold fontL'>Education</h1>
                <p className='text-left px-2 sm:px-0 text-gray-200'>
                  After completing my intermediate studies at Pak Fazaia College, where I delved into the foundations of engineering, I am currently pursuing my 4 years Software Enginnering degree from NED University as batch 2021 student.
                </p>
              </div>

            </div>
            <div id='Skills' className='sm:px-20'>
              <h1 className='text-2xl  fontL font-semibold text-center mb-2 '>Skills</h1>
              <p className='text-gray-200 text-center'>These are the skills I use in daily life.</p>
              <div className='flex flex-wrap justify-center items-center my-3 '>
                {/* skills */}
                <div className='bg-slate-500 my-1 mx-2 px-2 sm:px-3   py-1 fontL rounded-xl '>html</div>
                <div className='bg-slate-500 my-1 mx-2 px-2 sm:px-3   py-1 fontL rounded-xl '>css</div>
                <div className='bg-slate-500 my-1 mx-2 px-2 sm:px-3   py-1 fontL rounded-xl '>javascript</div>
                <div className='bg-slate-500 my-1 mx-2 px-2 sm:px-3   py-1 fontL rounded-xl '>React js</div>
                <div className='bg-slate-500 my-1 mx-2 px-2 sm:px-3   py-1 fontL rounded-xl '>Node js</div>
                <div className='bg-slate-500 my-1 mx-2 px-2 sm:px-3   py-1 fontL rounded-xl '>Mongo db</div>
                <div className='bg-slate-500 my-1 mx-2 px-2 sm:px-3   py-1 fontL rounded-xl '>Express</div>
                <div className='bg-slate-500 my-1 mx-2 px-2 sm:px-3   py-1 fontL rounded-xl '>tailwindcss</div>
                <div className='bg-slate-500 my-1 mx-2 px-2 sm:px-3   py-1 fontL rounded-xl '>Mysql db</div>
                <div className='bg-slate-500 my-1 mx-2 px-2 sm:px-3   py-1 fontL rounded-xl '>bootstrap</div>
                <div className='bg-slate-500 my-1 mx-2 px-2 sm:px-3   py-1 fontL rounded-xl '>git</div>
                <div className='bg-slate-500 my-1 mx-2 px-2 sm:px-3   py-1 fontL rounded-xl '>github</div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <hr className='mb-3 w-32 mx-auto mt-10 sm:mt-0' />

      {/* Projects */}
      <div id='Projects' className='h-auto mt-10 mx-2'>
        <h1 className='text-2xl sm:text-3xl sm:mt-20 text-white font-bold text-center fontL'>Projects</h1>
        <p className='text-gray-200 text-sm text-center'>Following are some projects I made for practice and academic purpose</p>
        <div className='flex flex-wrap mt-5 justify-center'>
          {projectsData.map((project) => {
            return (
              <ProjectItem project={project} key={project.live} />
            )
          })}
        </div>
        <div>
        </div>
      </div>
      {/* Resume */}
      <div className='fixed z-20 bottom-2 right-2'>
        <Resume />
      </div>
      {/* FOOTER */}
      <div id='Contact' className='flex sm:flex-row flex-col justify-between sm:px-16 px-5  sm:items-center mt-10 py-2 w-auto text-yellow-50 bg-purple-700 bg-opacity-25 space-y'>
        <div className='fontL  h-max sm:font-semibold'>
          <span className='hidden sm:inline text-xl mb-10  '>{"<Daniyal />"}</span>
          <p className='hidden sm:block'>Thanks for visiting my portfolio</p>
        </div>
        <div className='text-white flex-col flex space-y-1 '>
          <span className='text-xl sm:text-2xl font-semibold text-yellow-200' >Contact</span>
          <div className='flex space-x-2 sm:text-2xl text-xl'>
            <a href='https://www.linkedin.com/in/daniyal-lodhi-77b995242/' target='_blank'><FaLinkedin /></a>
            <a href='https://github.com/Daniyal-Lodhi' target='_blank'><FaSquareGithub /></a>
            <a href='https://www.instagram.com/daniyal_lodhi_7/' target='_blank'><FaInstagram /></a>
          </div>
          <p className='text-base fontL sm:text-xl'>daniyallodhi25@gmail.com</p>
          <div className='flex  items-center'>
            <FaPhone className='sm:text-xl' />
            +923161018559

          </div>

        </div>



      </div>

    </>
  )
}

export default Mainpage
