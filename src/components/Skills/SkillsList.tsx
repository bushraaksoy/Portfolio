import React from "react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Skill } from "@/types";
import { defaultSkills } from "@/utils/constants";
import SkillCategory from "./SkillCategory";

interface SkillsSectionProps {
  skills?: Skill[];
}

const SkillsList = ({ skills = defaultSkills }: SkillsSectionProps) => {

  const frontendSkills = skills.filter(
    (skill) => skill.category === "frontend",
  );
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const designSkills = skills.filter((skill) => skill.category === "design");
  const toolsSkills = skills.filter((skill) => skill.category === "tools");

  return (
    <section id="skills" className="pb-20 px-4 md:px-8 bg-background/50">
      <div className="max-w-6xl mx-auto">

        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="frontend">
            <SkillCategory skills={frontendSkills} />
          </TabsContent>

          <TabsContent value="backend">
            <SkillCategory skills={backendSkills} />
          </TabsContent>

          <TabsContent value="design">
            <SkillCategory skills={designSkills} />
          </TabsContent>

          <TabsContent value="tools">
            <SkillCategory skills={toolsSkills} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};



export default SkillsList;
