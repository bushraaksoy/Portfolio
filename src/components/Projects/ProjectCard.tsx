import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project?: Project, onClick: () => void
}

const ProjectCard = ({
  project, onClick
}: ProjectCardProps) => {

  const onViewDetails = (id: string) => {

  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card onClick={onClick} className="overflow-hidden h-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 flex flex-col shadow-xl">
        <div className="relative overflow-hidden h-48">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
            <div className="flex gap-2">
              {project.sourceUrl && (
                <Button size="sm" variant="secondary" asChild>
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1" /> Code
                  </a>
                </Button>
              )}
              {/* // TODO: uncomment when you get demo links */}
              {/* {project.demoUrl && (
                <Button size="sm" variant="secondary" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" /> Demo
                  </a>
                </Button>
              )} */}
            </div>
          </div>
        </div>

        <CardContent className="p-4 flex flex-col flex-grow bg-white/5 backdrop-blur-sm">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-white mb-4 flex-grow">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <Button
            onClick={() => onViewDetails(project.id)}
            variant="outline"
            className="w-full"
          >
            <Eye className="h-4 w-4 mr-2" /> View Details
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
