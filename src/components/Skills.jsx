import { SectionWrapper } from "../hoc";
import { skills } from "../constants";

import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Skills = () => {
  return (
    <div>
       <motion.div variants={textVariant()}>
           <p 
           className={styles.sectionSubText}>
             What I know.
           </p>
           <h2 
           className={styles.sectionHeadText}>
             My Skills.
          </h2>
      </motion.div>
    {/*Skils*/}
    <div
      className="mt-8 flex flex-wrap flex-col md:flex-row gap-y-12 md:gap-y-14 gap-x-28"
    >
     {
        /*skills*/
        skills
        ?.map((categories) => (
          <div
          key={categories?.categoryName}
           className="mb-3 flex flex-col gap-4"
         >
            <h3
             className="w-full text-gray-100 md:text-white md:font-bold text-xl md:text-3xl text-left tracking-tight capitalize"
            >
            {categories?.categoryName || "Category Name"}
            </h3>
            <div 
           className="flex flex-wrap items-center w-fit gap-4"
          
          >
           {
            categories?.technologies
            ?.map((tech, index) => (
              <div 
              id={tech?.name}
              key={tech?.name}
               className={`flex flex-col items-center gap-2`}
              >
               <div 
            className="relative w-14 h-14 md:h-24 md:w-24 rounded-full bg-white flex justify-center items-center" 
            
            >
            <img 
             src={tech?.icon}
             alt={tech.name}
             className="w-3/4 h-3/4 object-contain rounded-full"
            />
          </div>
          <span
           className="text-sm md:text-base font-semilight text-gray-200 tracking-tight"
          >
            {tech.name}
          </span>
           </div>
            ))
           }
          </div>
         </div>
          )//wrapper  
        )//map
     }
    </div>
    
    </div>
    
  );
};

/*
         
          
          
          </div>
*/

export default SectionWrapper(Skills, "skills");
