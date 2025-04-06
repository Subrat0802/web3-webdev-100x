import { SidebarClose, SidebarOpen } from "lucide-react";
import { sidebar } from "../data/sidebar";
import { Dispatch, SetStateAction } from "react";

interface SideBarProps {
  fullSidebar: boolean;
  setFullSidebar: Dispatch<SetStateAction<boolean>>;
}

export const SideBar = ({ fullSidebar, setFullSidebar }: SideBarProps) => {
  return (
    <div
      className={`flex flex-col justify gap-2 h-screen  bg-[#0F172A] 
        ${fullSidebar ? "w-52" : "w-16"} 
        transition-all duration-300 ease-in-out`}
    >
      <div
        onClick={() => setFullSidebar(!fullSidebar)}
        className={"flex items-center text-white/75 gap-4 cursor-pointer rounded-lg hover:bg-blue-900/10 text-xl px-4 py-3 " + `${!fullSidebar ? "justify-center" : "justify-start"}`}
      >
        {fullSidebar ? <SidebarOpen /> : <SidebarClose />}
        {fullSidebar && <p>Menu</p>}
      </div>

      {sidebar.map((el) => (
        <div
          className={"flex text-white/75 gap-4  cursor-pointer rounded-lg hover:bg-blue-900/10 text-xl px-4 items-center py-3 "+ `${!fullSidebar ? "justify-center" : "justify-start"}`}
          key={el.id}
        >
          <el.icon />
          {fullSidebar && <p>{el.text}</p>}
        </div>
      ))}
    </div>
  );
};
