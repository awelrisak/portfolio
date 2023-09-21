import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, preview} from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
  type
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary flex flex-col p-5 rounded-2xl sm:h-full sm:w-[300px] md:w-[400px] w-full"
      >
        <div className="relative w-full h-[300px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute px-3 py-4 w-fit h-fit top-0 right-2 flex flex-col justify-end m-3 card-img_hover gap-2 bg-slate-600 bg-opacity-80 backdrop-blur-sm rounded-xl">
            <div
              onClick={() => window.open(demo_link, "_blank")}
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer "
            >
              <img
                src={preview}
                alt="github"
                className="w-4/5 h-4/5 rounded-full object-contain"
              />
          
            </div>
             <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer gap-1"
            >
              <img
                src={github}
                alt="github"
                className="w-4/5 h-4/5 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-7">
          <h3 className="text-white flex justify-between items-center font-bold text-2xl sm:text-3xl"> 
            <span>
              {name}
            </span>      
            {
              type && (
                 <span
                   className="py-1 px-2 bg-gray-300 rounded-lg text-[10px] font-semilight text-slate-800 uppercase text-center "
                 >
                 { type }
               </span>
              )
            }             
           </h3>
          <p className="mt-2 sm:mb-5 text-secondary text-base md:text-xl ">
          {description}
          </p>
        </div>
        <div className="mt-5 md:my-auto flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] md:text-lg ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-lg md:text-xl max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
           key={`project-${index}`} 
           index={index} 
           {...project}
            />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
