import React, { useEffect, useState } from "react";
import { projects } from "../../otherProjects";
import { useParams } from "react-router-dom";
import OtherProjectSingleComp from "./OtherProjectSingleComp";
function OtherProjects() {
  const { name } = useParams();
  const [proj, setProj] = useState([]);
  useEffect(() => {
    const foundProject = projects.find((ele) => ele.name === name);

    if (foundProject) {
      setProj(foundProject.proj);
    } else {
      setProj([]);
    }
  }, [name]);
  console.log(proj);
  return (
    <div className="h-screen">
      <h1 className="text-white text-3xl font-semibold text-center">
        {name} Projects
      </h1>
      <ul className="flex md:flex-row flex-col gap-10 justify-center items-center mt-10">
        {proj.map((ele, i) => (
          <li key={i}>
            <OtherProjectSingleComp {...ele} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OtherProjects;
