"use client";
import React, { useState } from "react";
import Close from "../../svgs/Close";
import Upload from "../../svgs/Upload";
import Delete from "../../svgs/Delete";

function AddModal({ modalIsOpen, setModalIsOpen }) {
  const [fileData, setFileData] = useState([]);
  const [inputs, setInputs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    setIsLoading(true);
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target.result;
      const entries = text
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line !== "")
        .map((line) => {
          const [key, value] = line.split("=");
          return [key.trim(), value.trim()];
        });
      setFileData(entries);
      setInputs(entries.map(([name, value]) => ({ name, value })));
      setIsLoading(false);
    };

    reader.onerror = () => {
      setIsLoading(false);
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
    localStorage.setItem("env", JSON.stringify(inputs));
    setModalIsOpen(false);
  };

  const handleDeleteInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };
  return (
    <div>
      {modalIsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="modal-container fixed top-0 right-0 bottom-0 flex items-center justify-center overflow-y-auto">
            <div className="bg-white p-8 w-full sm:w-[700px] h-full relative">
              <div className="absolute top-0 right-0 p-4">
                <button onClick={() => setModalIsOpen(false)}>
                  <Close />
                </button>
              </div>
              <div className="w-[100%] border rounded-[8px] bg-[#fff] boxShadowStyle px-[20px] py-[20px] mt-[30px]">
                {inputs ? (
                  <>
                    {inputs.map((input, index) => (
                      <div
                        key={index}
                        className="flex py-[20px] items-center gap-[10px]"
                      >
                        <div className="flex gap-[10px] items-center">
                          <div className="text-[#595959] text-[14px]">
                            Name:{" "}
                          </div>
                          <input
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={(e) => handleInputChange(index, e)}
                            className="border border-[#939393] rounded-[5px] px-[5px] py-[6px] w-[220px] text-[14px]"
                          />
                        </div>

                        <div className="flex gap-[10px] items-center">
                          <div className="text-[#595959]">Value: </div>
                          <input
                            type="text"
                            name="name"
                            value={input.value}
                            onChange={(e) => handleInputChange(index, e)}
                            className="border border-[#939393] rounded-[5px] px-[5px] py-[6px] w-[220px] text-[14px]"
                          />
                        </div>

                        <button onClick={() => handleDeleteInput(index)}>
                          <Delete />
                        </button>
                      </div>
                    ))}
                  </>
                ) : (
                  <div>
                    {isLoading ? (
                      <div>Loading...</div>
                    ) : (
                      <div className="text-[14px] text-[#595959] mt-[10px] bg-[#F8F8F8] h-[80px] text-center py-[20px] my-[20x]">
                        <div className="flex justify-center items-center">
                          <div class="file-input-container">
                            <label
                              htmlFor="file-input"
                              className="cursor-pointer"
                            >
                              <div className="flex justify-center mb-[5px]">
                                <Upload />
                              </div>
                              Click or drag file(s) here to upload
                            </label>
                            <input
                              id="file-input"
                              class="file-input"
                              type="file"
                              onChange={handleFileChange}
                            />
                            <div class="file-name" id="file-name"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="text-[12px] text-[#595959]">
                      Upload a .env file. It should not be greater than 5KB.
                    </div>
                  </div>
                )}

                <div className="flex justify-end gap-4 mt-[30px]">
                  <button
                    className="btn btn-outlined"
                    onClick={() => {
                      setInputs(null);
                      setModalIsOpen(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      handleAddInput();
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddModal;
