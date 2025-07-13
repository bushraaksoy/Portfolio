import React from 'react'
import { motion } from "framer-motion";

import SkillsList from './SkillsList';

const Skills = () => {
    return (
        <section id="skills"
            className="py-20"

        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I've developed expertise in various technologies and tools
                        throughout my career. Here's a breakdown of my technical
                        proficiencies and experience.
                    </p>
                </motion.div>

                <SkillsList />
            </div>
        </section>
    )
}

export default Skills