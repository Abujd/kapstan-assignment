import React, { useEffect, useState } from "react";
import Plus from "../../svgs/Plus";
import Download from "../../svgs/Download";
import AddModal from "./AddModal";
import Delete from "../../svgs/Delete";

function EnvironmentVariables(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [envData, setEnvData] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("env");
    setEnvData(JSON.parse(storedData));
  }, [modalIsOpen]);

  const handleDelete = (index) => {
    console.log("licked");
    const updatedEnvData = [...envData];
    updatedEnvData.splice(index, 1);
    setEnvData(updatedEnvData);
    console.log("updatedEnvData", updatedEnvData, index);
    localStorage.setItem("env", JSON.stringify(updatedEnvData));
  };

  return (
    <div className="flex justify-between gap-[30px] mt-[20px] w-[100%] h-[300px]">
      <div className="w-[100%] border rounded-[8px] bg-[#fff] boxShadowStyle px-[20px] py-[20px]">
        <div className="flex justify-between items-center">
          <div className="font-bold text-[20px] text-[#595959]">
            Environment variables
          </div>
          <div className="flex items-center gap-[15px]">
            <div
              className="cursor-pointer"
              onClick={() => {
                openModal();
              }}
            >
              <Plus />
            </div>
            <div className="cursor-pointer">
              <Download />
            </div>
          </div>
        </div>
        {envData ? (
          <>
            {envData.map((item, index) => (
              <div
                className="border rounded-[5px] flex items-center py-[10px] px-[10px] my-[10px] gap-[40px]"
                key={index}
              >
                <div className="basis-[33%] font-bold">{item.name}</div>
                <div className="basis-[33%]">{item.value}</div>
                <div
                  className="basis-[33%]"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  <Delete />
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="text-[14px] text-[#595959] mt-[10px]">
            No environment variable created.
          </div>
        )}
      </div>
      <AddModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
}

export default EnvironmentVariables;
