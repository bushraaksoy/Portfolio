import React from 'react'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Download,
    Github,
    Linkedin,
    Mail,
    Twitter,

} from "lucide-react";
import { Card, CardContent } from './ui/card';
import { Separator } from '@radix-ui/react-separator';

//TODO make send message work, remove other socials or create proper linked in

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-br from-pink/5 to-purple/5 border-t border-pink/10"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind or want to chat? Feel free to reach out.
                        I'm always open to discussing new opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <Card className="bg-card border-purple/20 shadow-lg shadow-purple/10">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
                            <form className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium mb-1"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                        placeholder="Your message here..."
                                    ></textarea>
                                </div>
                                <Button type="submit" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="space-y-6">
                        <Card className="bg-card">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4">
                                    Contact Information
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Mail className="h-5 w-5 mr-3 text-purple" />
                                        <span>bbxsra17@gmail.com</span>
                                    </div>
                                    <Separator />
                                    <div className="flex items-center">
                                        <div className="flex space-x-4">
                                            <a
                                                href="https://github.com/bushraaksoy"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-purple transition-colors"
                                            >
                                                <Github className="h-6 w-6" />
                                            </a>
                                            <a
                                                href="https://linkedin.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-purple transition-colors"
                                            >
                                                <Linkedin className="h-6 w-6" />
                                            </a>
                                            <a
                                                href="https://twitter.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-purple transition-colors"
                                            >
                                                <Twitter className="h-6 w-6" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4">
                                    Download Resume
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Get a copy of my resume to learn more about my experience
                                    and qualifications.
                                </p>
                                <Button variant="outline" className="w-full">
                                    <Download className="mr-2 h-4 w-4" /> Download PDF
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact