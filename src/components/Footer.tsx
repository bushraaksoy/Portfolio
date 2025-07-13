import React from 'react'

const Footer = () => {
    return (
        <footer className="py-8 border-t">
            <div className="container mx-auto px-4 text-center">
                <p className="text-muted-foreground">
                    © {new Date().getFullYear()} Bushra Aksoy. All rights reserved.
                </p>
                <div className="mt-4 flex justify-center space-x-6">
                    <a
                        href="#home"
                        className="text-sm hover:text-primary transition-colors"
                    >
                        Home
                    </a>
                    <a
                        href="#projects"
                        className="text-sm hover:text-primary transition-colors"
                    >
                        Projects
                    </a>
                    <a
                        href="#skills"
                        className="text-sm hover:text-primary transition-colors"
                    >
                        Skills
                    </a>
                    <a
                        href="#contact"
                        className="text-sm hover:text-primary transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer