/* eslint-disable @typescript-eslint/no-explicit-any */
import { Plus, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";
import { instagram } from "../data/sidebar";
import { CreateContentModal } from "../components/CreateContentModal";
import { PostCard } from "../components/PostCard";

export const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  
    if ((window as any).twttr && (window as any).twttr.widgets) {
      (window as any).twttr.widgets.load();
    }
  }, []);

  const handleButtonOne = () => {
    setOpenModal(!openModal);
  };
  const handleButtontwo = () => {};

  return (
    <div className="min-h-screen bg-[#0F172A] overflow-hidden relative">
      {
        openModal && <CreateContentModal setOpenModal={setOpenModal}/>
      }
      

      {/* Header */}
      <Header
        buttonone="Add Content"
        onButtonOneClick={handleButtonOne}
        onButtonTwoClick={handleButtontwo}
        buttontwo="Share Content"
        iconOne={<Plus />}
        iconTwo={<Share2 />}
      />

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="left-0 border-r border-white/10 min-h-full">
          <SideBar />
        </div>

        {/* Content */}

    

        <div className="m-4 w-full flex flex-wrap gap-8">
          {instagram.map((el) => {
            return (
              <PostCard key={el.id} type={el?.type} link={el?.link} title={el?.title} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
