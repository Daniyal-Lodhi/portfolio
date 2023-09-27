import React from 'react'

const ProjectItem = (props) => {
    const{project} = props
  return (
    <div className='bg-black px-3 py-3  rounded-lg w-96 my-2 sm:mx-4 bg-opacity-40' key={11} data-aos = {project.aos}>
      <div>
            <h1 className='text-white  font-semibold text-2xl fontL mt-2 '>{project.title}</h1>
        <p className='text-white mt-3'>{project.description}</p>
        <div className='flex space-x-3 mt-3'>
        <a href={project.live} target='_blank' className='px-2 py-2 text-white fontL bg1 rounded-lg text-sm'>Live Preview</a>
        <a href={project.code} className='px-2 py-2 text-white fontL bg1 rounded-lg text-sm'>Code</a>
        </div>
        <h1 className='text-xl mt-2 sm:mt-4  text-gray-100 font-semibold'>Technologies:</h1>
        <div className='flex mt-2 flex-wrap '>
            {
                project.technologies.map((item)=>{
                    return(
                    <div className="mr-2 mt-2 bg-slate-100 px-2 py-1 rounded-md text-sm" key={item} >{item}</div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
