import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://retoolapi.dev/`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const getApplications = async () => {
  try {
    const res = await axios.get(`https://retoolapi.dev/71NNjB/applications`);

    return res.data;
  } catch (error) {
    return null;
  }
};

export const getEventHistory = async () => {
    try {
      const res = await axios.get(`https://retoolapi.dev/TYjDIe/eventhistory`);
  
      return res.data;
    } catch (error) {
      return null;
    }
  };
  
  export const getCpuUtilization = async () => {
    try {
      const res = await axios.get(`https://retoolapi.dev/Ymxfa2/cpuutilization`);
  
      return res.data;
    } catch (error) {
      return null;
    }
  };
  
  export const getMemoryutilization = async () => {
    try {
      const res = await axios.get(`https://retoolapi.dev/ybFVVH/memoryutilization`);
  
      return res.data;
    } catch (error) {
      return null;
    }
  };
  
