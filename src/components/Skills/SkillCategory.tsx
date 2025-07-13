import { Skill } from '@/types';
import { motion } from "framer-motion";
import SkillItem from './SkillItem';


const SkillCategory = ({ skills }: { skills: Skill[] }) => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </motion.div>
  );
};

export default SkillCategory