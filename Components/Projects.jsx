import React from "react";
import Image from "next/image";
import Link from "next/link";
import SpaceProjectImg from "../public/Assets/Projects/Space.jpg";
import ElrehabProjectImg from "../public/Assets/Projects/Elrehab.jpg";
import foodAppImg from "../public/Assets/Projects/Food App.jpg";
import dashboardImg from "../public/Assets/Projects/Dashboard.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] px-2 py-16 mx-auto">
        <p className="text-xl text-[#5651e5] uppercase tracking-widest">
          projects
        </p>
        <h2 className="py-4 capitalize">What i have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Space Trip Template"
            backgrounfImg={SpaceProjectImg}
            projecyUrl="/space"
            tech="React.js"
          />
          <ProjectItem
            title="Shopping Template"
            backgrounfImg={ElrehabProjectImg}
            projecyUrl="/elrehabInc"
            tech="Vanilla JS"
          />
          <ProjectItem
            title="Food Ordering App"
            backgrounfImg={foodAppImg}
            projecyUrl="/foodorderingApp"
            tech="Redux.JS"
          />
          <ProjectItem
            title="Dashboard"
            backgrounfImg={dashboardImg}
            projecyUrl="/dashboard"
            tech="Vanilla JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
