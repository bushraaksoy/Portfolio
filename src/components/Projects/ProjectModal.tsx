import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { placeholderProject } from "@/utils/constants";
import { Project } from "@/types";

interface ProjectModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  project?: Project;
}

const ProjectModal = ({
  isOpen = true,
  onClose = () => { },
  project,
}: ProjectModalProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  const displayProject = project || placeholderProject;
  const solution = "I managed to work hard and find solutions through research and dedicated time allocated to fix and solve all challenges"

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="bg-background max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="absolute right-4 top-4 z-10">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {displayProject.title}
          </DialogTitle>
          <DialogDescription className="text-md">
            {displayProject.description}
          </DialogDescription>
        </DialogHeader>

        <div className="my-6">
          <Carousel className="w-full">
            <CarouselContent>
              {displayProject.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${displayProject.title} screenshot ${index + 1}`}
                        className="w-full h-[300px] object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="challenges">Challenges & Solutions</TabsTrigger>
            <TabsTrigger value="tech">Technologies</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="text-sm">{displayProject.fullDescription}</div>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Challenges</h3>
              <p className="text-sm">{displayProject.challenges}</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Solution</h3>
              <p className="text-sm">{solution}</p>
            </div>
          </TabsContent>

          <TabsContent value="tech" className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {displayProject.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-6">
          {displayProject.demoUrl && (
            <Button
              className="w-full sm:w-auto"
              onClick={() => window.open(displayProject.demoUrl, "_blank")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Live Demo
            </Button>
          )}
          {displayProject.sourceUrl && (
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => window.open(displayProject.sourceUrl, "_blank")}
            >
              <Github className="mr-2 h-4 w-4" />
              View Source Code
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
