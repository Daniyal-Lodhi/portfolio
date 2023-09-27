import React from 'react'
import myResume from '../assets/Daniyal-Lodhi-Resume.pdf'
import downloadIcon from '../assets/resume.png'
 
const Resume = () => {
  return (
    <div className='bg-blue-300 hover:bg-white p-2 sm:rounded-xl rounded-lg '>
      <a href={myResume} download={'daniyal-lodhi-resume'} target='_blank' rel='noreferrer'> <img src={downloadIcon} alt="icon" className='h-4 sm:h-6' /> </a>
    </div>
  )
}

export default Resume
