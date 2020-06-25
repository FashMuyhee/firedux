import React from "react";
import ProjectSummary from "./Summary";

const ProjectList = ({ projects }) => {
  return (
    <div className="section">
      {projects &&
        projects.map(project => {
          return <ProjectSummary project={project} key={project.id} />;
        })}
    </div>
  );
};

export default ProjectList;
