/* eslint-disable @typescript-eslint/no-explicit-any */
import { Plus, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";
import { CreateContentModal } from "../components/CreateContentModal";
import { PostCard } from "../components/PostCard";
import axios from "axios";


type ContentItem = {
  _id:string,
  title:string,
  link:string,
  type:string
}

export const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [fullSidebar, setFullSidebar] = useState<boolean>(false);
  const [contentData, setContentData] = useState<ContentItem[]>([]);

  const fecthContent = async () => {
    try{
      const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/content", {
        withCredentials: true
      });
      console.log("RESPONSE DASHOARD", response);
      setContentData(response?.data?.data);

    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fecthContent();
  }, [openModal]);

  useEffect(() => {
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  
    if ((window as any).twttr && (window as any).twttr.widgets) {
      (window as any).twttr.widgets.load();
    }
  }, [contentData]);

  const handleButtonOne = () => {
    setOpenModal(!openModal);
  };
  const handleButtontwo = () => {};

  return (
    <div className="min-h-screen bg-[#0F172A] overflow-hidden relative">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] translate-x-1/2" />
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
          <SideBar fullSidebar={fullSidebar} setFullSidebar={setFullSidebar}/>
        </div>

        {/* Content */}

    

        <div className="m-4 w-full flex flex-wrap gap-8">
          {contentData.map((el) => {
            return (
              <PostCard key={el?._id} type={el?.type} link={el?.link} title={el?.title} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
