import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

function ExperienceCard({experience}: Props) {
  return (
    <article className="flex flex-col rounded-lg  items-center space-y-7 flex-shrink-0  md:w-[300px] xl:w-[600px] w-full snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden  ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience.companyImage).url()}
        className=" relative w-32 h-32 xl:w-[200px] xl:h-[200px] rounded-full object-center object-contain   "
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies?.map((tech) => (     
            <div className="w-10 h-10 rounded-full relative" key={tech._id}>
              
              <Image  src={urlFor(tech.image)?.url()} alt="Technology" layout="fill" />
            </div>       
          ))}


        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} - {
            experience.isCurrentWorkingHere
            ? 'Present'
            : new Date(experience?.dateEnded).toDateString()
          }
        </p>
        <ul className="list-disc space-y-4 mt-5 text-lg h-28 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/40 pr-4">
          {experience?.points.map((point,index)=>(
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
