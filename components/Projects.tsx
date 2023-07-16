import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {Project} from '../typings'
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = {
  projects : Project[]
};

function Projects({projects}: Props) {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll  snap-x snap-mandatory z-20   scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/40 scrollbar-thin">
        {projects.map((project,i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen mt-32 "
          >

            <motion.img
            onClick={()=>window.open(project.linkToBuild ,"_blank")}
              initial={{ 
                y:-300,
                opacity:0
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0 ,opacity:1}}
              viewport={{once:true}}
              className="w-80 h-auto object-contain rounded-2xl mx-auto cursor-pointer"

            src={urlFor(project.image).url()}  />
            
            <div className="">
              <h4 className="text-4xl font-semibold text-center">
                {" "}
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {i + 1}
                </span>{" "}
                {project.title}
              </h4>
              <p className="text-lg text-center md:text-left m-6">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[400px] -skew-y-12 "></div>
    </motion.div>
  );
}

export default Projects;
