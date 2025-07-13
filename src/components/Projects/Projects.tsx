import React from 'react'
import { motion } from "framer-motion";

import ProjectsList from './ProjectsList';

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-20 bg-gradient-to-br from-purple/5 to-pink/5 border-t border-purple/10"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Explore my recent work and see how I've built my projects and achieved
                        my goals with clean code and beautiful design.
                    </p>
                </motion.div>

                <ProjectsList />
            </div>
        </section>
    )
}

export default Projects