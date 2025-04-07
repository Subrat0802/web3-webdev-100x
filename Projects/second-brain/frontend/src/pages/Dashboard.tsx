/* eslint-disable @typescript-eslint/no-explicit-any */
import { Plus, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";
import { CreateContentModal } from "../components/CreateContentModal";
import { PostCard } from "../components/PostCard";
import axios from "axios";

type ContentItem = {
  _id: string;
  title: string;
  link: string;
  type: string;
};

export const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [fullSidebar, setFullSidebar] = useState<boolean>(false);
  const [contentData, setContentData] = useState<ContentItem[]>([]);

  const fecthContent = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/content",
        {
          withCredentials: true,
        }
      );
      console.log("RESPONSE DASHOARD", response);
      setContentData(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthContent();
  }, [openModal]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Instagram
      if ((window as any).instgrm && (window as any).instgrm.Embeds) {
        (window as any).instgrm.Embeds.process();
      }

      // Twitter
      if ((window as any).twttr && (window as any).twttr.widgets) {
        (window as any).twttr.widgets.load();
      }
    }, 1000); // small delay to allow DOM to render

    return () => clearTimeout(timeout);
  }, [contentData]);

  const handleButtonOne = () => {
    setOpenModal(!openModal);
  };
  const handleButtontwo = () => {};

  return (
    <div className="min-h-screen bg-[#0F172A] overflow-hidden relative">
      <div className="absolute top-1 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] translate-x-1/2" />
      {openModal && <CreateContentModal setOpenModal={setOpenModal} />}

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
          <SideBar fullSidebar={fullSidebar} setFullSidebar={setFullSidebar} />
        </div>

        {/* Content */}

        <div className="m-4 w-full flex flex-col gap-8 z-30">
          {/* youtube  */}
          <div className="flex flex-col  gap-3 overflow-hidden ">
          <p className="text-2xl font-semibold text-white">{contentData.some((el) => el.type === "youtube") && "Youtube"}</p>
            <div className="flex gap-3">
              {contentData
                .filter((el) => el.type === "youtube")
                .map((el) => {
                  return (
                    <PostCard
                      key={el?._id}
                      id={el?._id}
                      type={el?.type}
                      link={el?.link}
                      title={el?.title}
                      fecthContent={fecthContent}
                    />
                  );
                })}
            </div>
          </div>
          {/* twitter  */}
          <div className="flex flex-col  gap-3 overflow-hidden ">
            <p className="text-2xl font-semibold text-white">{contentData.some((el) => el.type === "twitter") && "Twitter"}</p>
            <div className="flex gap-3">
              {
              contentData.filter((el) => el.type === "twitter")
                .map((el) => {
                  return (
                    <PostCard
                      key={el?._id}
                      id={el?._id}
                      type={el?.type}
                      link={el?.link}
                      title={el?.title}
                      fecthContent={fecthContent}
                    />
                  );
                })}
            </div>
          </div>

          {/* instagram  */}

          <div className="flex flex-col  gap-3 overflow-hidden ">
          <p className="text-2xl font-semibold text-white">{contentData.some((el) => el.type === "instagram") && "Instagram"}</p>
            <div className="flex gap-3">
              {contentData
                .filter((el) => el.type === "instagram")
                .map((el) => {
                  return (
                    <PostCard
                      key={el?._id}
                      id={el?._id}
                      type={el?.type}
                      link={el?.link}
                      title={el?.title}
                      fecthContent={fecthContent}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
