import React, { useState } from "react";

function FileUploader() {
  const [fileData, setFileData] = useState([]);
  const [inputs, setInputs] = useState([{ name: "", value: "" }]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const entries = text.split("\n").map((line) => line.split(":"));
      setFileData(entries);
      setInputs(entries.map(([name, value]) => ({ name, value })));
    };
    reader.readAsText(file);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newInputs = [...inputs];
    newInputs[index] = { ...newInputs[index], [name]: value };
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { name: "", value: "" }]);
  };

  const handleDeleteInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {inputs.map((input, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={(e) => handleInputChange(index, e)}
          />
          <input
            type="text"
            name="value"
            value={input.value}
            onChange={(e) => handleInputChange(index, e)}
          />
          <button onClick={() => handleDeleteInput(index)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddInput}>Add</button>
    </div>
  );
}

export default FileUploader;
