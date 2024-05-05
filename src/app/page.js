import HomePage from "./components/homepage/HomePage";
import Info from "./components/info/Info";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  return (
   <div className="flex items-start w-screen">
    <Sidebar />
    <div className="w-[87%]">
      <Navbar />
      <div className="cursor-pointer"><Info /></div>
    </div>
   </div>
  );
}
