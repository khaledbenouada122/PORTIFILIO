import React from 'react'
import { Experience } from '../typings'
import ExperienceCard from './ExperienceCard'

type Props = {
  experiences : Experience[]
}

function ExperienceComponent({experiences}: Props) {
  return (
    <div className=' h-screen flex relative  flex-col text-left md:flex-row max-w-full px-10 justify-evenly  mx-auto items-center'>
        <h3 className='  absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
        <div className='mt-10 md:mt-32  w-full  flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/40 ' >
           {experiences?.map(experience=>(
              <ExperienceCard key={experience._id} experience={experience} />
           ))}
        </div>
    </div>
  )
}

export default ExperienceComponent