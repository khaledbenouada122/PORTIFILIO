import React from 'react'
import { AnimatePresence, motion} from 'framer-motion'
import { Skill } from '../typings'
import SkillCircle from './SkillCircle'

type Props = {
  skills:Skill[]
}

function Skills({skills}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='  h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center items-center xl:space-y-0 mx-auto '>
        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='absolute top-24 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency</h3>
        <div className=' mt-10 md:mt-0 grid grid-cols-3 md:grid-cols-4 gap-5 '  >


          {skills.slice(0,skills.length/2).map((skill)=>(

          <SkillCircle skill={skill} key={skill._id} />
          
          ))}


          {skills.slice(skills.length/2,skills.length).map((skill)=>(

          <SkillCircle skill={skill} key={skill._id}  directionLeft />

          ))}

        </div>
    </motion.div>
  )
}

export default Skills