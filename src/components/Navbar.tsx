import React from 'react'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Download,

} from "lucide-react";

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl font-bold"
                >
                    Bushra.dev
                </motion.div>
                <div className="hidden md:flex space-x-6">
                    <a href="#home" className="hover:text-primary transition-colors">
                        Home
                    </a>
                    <a href="#projects" className="hover:text-primary transition-colors">
                        Projects
                    </a>
                    <a href="#skills" className="hover:text-primary transition-colors">
                        Skills
                    </a>
                    <a href="#contact" className="hover:text-primary transition-colors">
                        Contact
                    </a>
                </div>
                <Button variant="outline" size="sm" className="hidden md:flex">
                    <Download className="mr-2 h-4 w-4" /> Resume
                </Button>
            </div>
        </nav>
    )
}

export default Navbar