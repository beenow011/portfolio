import React, { useState } from "react";
import authService from "../../Appwrite/appwrite";

function Upload() {
  const [file, SetFile] = useState();
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    SetFile(selectedFile);
  };
  const handleSubmit = async () => {
    try {
      //   console.log(e.target.value);
      const update = await authService.uploadFile(file);
      console.log(update);
    } catch (err) {
      console.log(err);
    }
  };
  //   console.log(file);
  return (
    <div>
      <input
        type="file"
        onChange={(e) => handleFileChange(e)}
        className="text-white"
      />
      <button
        className="p-3 bg-slate-500 rounded-md m-2"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Upload;
