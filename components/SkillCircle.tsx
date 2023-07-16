import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  directionLeft?: boolean;
  skill:Skill ;
};

function SkillCircle({ directionLeft,skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill.image).url()}
        className="rounded-full border border-gray-500 object-contain w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out hidden md:block"
        alt={skill.title}
     />
     <img 
     className=" rounded-full border border-gray-500 object-contain w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out  md:hidden"
     src={urlFor(skill.image).url()}
     alt={skill.title}

     />
     <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:h-32 xl:w-32 rounded-full z-0 " >
        <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">{skill.progress}</p>
        </div>
     </div>
    </div>
  );
}

export default SkillCircle;
7;
