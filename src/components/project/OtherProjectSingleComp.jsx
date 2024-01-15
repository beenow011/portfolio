import React from "react";

function OtherProjectSingleComp({ name, link }) {
  return (
    <div className="text-white hover:text-blue-400 bg-slate-600/40 p-4">
      <a href={link}>{name}</a>
    </div>
  );
}

export default OtherProjectSingleComp;
