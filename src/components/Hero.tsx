import React from 'react'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    ArrowDown,

} from "lucide-react";

const Hero = () => {
    return (
        <section
            id="home"
            className="pt-32 pb-20 md:pt-40 md:pb-32 container mx-auto px-4"
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent">
                            Bushra Aksoy
                        </span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
                        Full Stack Web Developer
                    </h2>
                    <p className="text-lg mb-8 max-w-lg">
                        I create beautiful, responsive websites with modern technologies
                        that help businesses grow and succeed online.
                    </p>
                    <div className="flex gap-4">
                        <Button asChild>
                            <a href="#projects">View My Work</a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="#contact">Contact Me</a>
                        </Button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple/30 shadow-2xl shadow-purple/20">
                        <img
                            src="/dimple.png"
                            alt="Bushra Aksoy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex justify-center mt-16"
            >
                <a
                    href="#projects"
                    className="flex flex-col items-center text-muted-foreground hover:text-pink transition-colors"
                >
                    <span className="mb-2">Scroll Down</span>
                    <ArrowDown className="animate-bounce" />
                </a>
            </motion.div>
        </section>
    )
}

export default Hero