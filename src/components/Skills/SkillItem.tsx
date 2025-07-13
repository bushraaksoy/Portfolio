import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Skill } from '@/types';
import { motion } from "framer-motion";


const SkillItem = ({ skill }: { skill: Skill }) => {
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };
    return (
        <motion.div
            variants={item}
            className="bg-card/50 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/10"
        >
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-lg">{skill.name}</h3>
                <Badge variant="secondary">
                    {skill.years} {skill.years === 1 ? "year" : "years"}
                </Badge>
            </div>
            <div className="flex items-center gap-3">
                <Progress value={skill.level} className="h-2" />
                <span className="text-sm text-white min-w-[40px] text-right">
                    {skill.level}%
                </span>
            </div>
        </motion.div>
    );
};

export default SkillItem