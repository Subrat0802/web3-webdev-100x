'use client'
import { TopBar } from "./TopBar";
import { Mentor } from "./Mentor";
import About from "../about/[slug]/page";
import { useBoolean } from "../context/BoolContextAbout";

export const HomePage = () => {

  const {value} = useBoolean();

  return (
    <div className="flex flex-col">
      {/* topbar  */}
      <div className="p-4 w-full flex justify-end items-center pr-8">
        <TopBar />
      </div>

      {/* mentor bar  */}
      {
        !value ? (<Mentor />) : (<About />)
      }
      
    </div>
  );
};
