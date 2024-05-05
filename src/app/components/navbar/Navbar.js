"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import styles from "./Navbar.module.scss";
import { getApplications } from "../../../../utils/ApiService";

function Navbar() {
  const [options, setOptions] = useState(null);
  const defaultOption = { value: "tic-tac-toe", label: "tic-tac-toe" };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "150px",
      outline: "none",
      borderColor: "transparent",
      boxShadow: state.isFocused ? null : null,
      borderRadius: "0",
      transition: "none",
      "&:hover": {
        ...provided,
        width: "150px",
        outline: "none",
        borderColor: "transparent",
        boxShadow: null,
        borderRadius: "0",
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };
  const fetchApplications = async (isShowMore) => {
    try {
      const res = await getApplications();
      const options = res.map((app) => ({
        value: app.name.toLowerCase().replace(/\s+/g, "-"),
        label: app.name,
      }));
      setOptions(options);
    } catch (error) {
      console.log("Error :: ", error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);
  return (
    <div>
      <div className="flex justify-between px-[30px] pt-[30px] ">
        <div>
          <div className="text-[12px] pl-[10px]">Application</div>
          {options && (
            <Select
              defaultValue={defaultOption}
              options={options}
              styles={customStyles}
            />
          )}
        </div>
        <div className={`flex gap-[4px] items-center`}>
          <span className={`${styles.userprofile} ml-[5px]`}>JD</span>
          <h5>John Doe</h5>
        </div>
      </div>
      <div className="border-b opacity-80 mb-[20px] mt-[6px]"></div>
    </div>
  );
}

export default Navbar;
