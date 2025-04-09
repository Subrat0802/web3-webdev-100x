/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {  ArrowLeftCircle, ArrowRightCircle, Plus, Share2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  const [openShareModal, setOpenShareModal] = useState(false);
  const [fullSidebar, setFullSidebar] = useState<boolean>(false);
  const [contentData, setContentData] = useState<ContentItem[]>([]);

  const youtubeScrollRef = useRef<HTMLDivElement>(null);
  const twitterScrollRef = useRef<HTMLDivElement>(null);
  const instagramScrollRef = useRef<HTMLDivElement>(null);

  const fecthContent = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/content",
        { withCredentials: true }
      );
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
      if ((window as any).instgrm?.Embeds) {
        (window as any).instgrm.Embeds.process();
      }
      if ((window as any).twttr?.widgets) {
        (window as any).twttr.widgets.load();
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [contentData]);

  const handleButtonOne = () => setOpenModal(!openModal);
  const handleButtontwo = () => setOpenShareModal(!openShareModal);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0F172A] overflow-hidden relative">
      <div className="absolute top-1 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] translate-x-1/2" />

      {openModal && (
        <CreateContentModal
          setOpenModal={setOpenModal}
          openModal={openModal}
          setOpenShareModal={undefined}
          openShareModal={false}
        />
      )}
      {openShareModal && (
        <CreateContentModal
          setOpenShareModal={setOpenShareModal}
          openShareModal={openShareModal}
          setOpenModal={undefined}
          openModal={false}
        />
      )}

      <Header
        buttonone="Add Content"
        onButtonOneClick={handleButtonOne}
        onButtonTwoClick={handleButtontwo}
        buttontwo="Share Content"
        iconOne={<Plus />}
        iconTwo={<Share2 />}
      />

      <div className="flex min-h-screen">
        <div className="left-0 border-r border-white/10 min-h-full">
          <SideBar fullSidebar={fullSidebar} setFullSidebar={setFullSidebar} />
        </div>

        <div className="m-4 w-full flex flex-col gap-8 z-30">
          {/* Youtube */}
          {contentData.some(el => el.type === "youtube") && (
            <div className="flex flex-col gap-3 w-[90%] overflow-x-auto scrollbar-none">
              <div className="flex justify-between items-center px-2">
                <p className="text-2xl font-semibold text-white">Youtube</p>
                <div className="flex gap-3 text-white/70">
                  <ArrowLeftCircle
                  //@ts-ignore
                    onClick={() => scrollLeft(youtubeScrollRef)}
                    className="hover:scale-105 cursor-pointer transition-all duration-200"
                  />
                  <ArrowRightCircle
                  //@ts-ignore
                    onClick={() => scrollRight(youtubeScrollRef)}
                    className="hover:scale-105 cursor-pointer transition-all duration-200"
                  />
                </div>
              </div>
              <div
                ref={youtubeScrollRef}
                className="flex gap-3 overflow-hidden"
              >
                {contentData
                  .filter(el => el.type === "youtube")
                  .map(el => (
                    <PostCard
                      key={el._id}
                      id={el._id}
                      type={el.type}
                      link={el.link}
                      title={el.title}
                      fecthContent={fecthContent}
                    />
                  ))}
              </div>
            </div>
          )}

          {/* Twitter */}
          {contentData.some(el => el.type === "twitter") && (
            <div className="flex flex-col gap-3 w-[90%]">
              <div className="flex justify-between items-center px-2">
                <p className="text-2xl font-semibold text-white">Twitter</p>
                <div className="flex gap-3 text-white/70">
                  <ArrowLeftCircle
                  //@ts-ignore
                    onClick={() => scrollLeft(twitterScrollRef)}
                    className="hover:scale-105 cursor-pointer transition-all duration-200"
                  />
                  <ArrowRightCircle
                  //@ts-ignore
                    onClick={() => scrollRight(twitterScrollRef)}
                    className="hover:scale-105 cursor-pointer transition-all duration-200"
                  />
                </div>
              </div>
              <div
                ref={twitterScrollRef}
                className="flex gap-3 overflow-hidden"
              >
                {contentData
                  .filter(el => el.type === "twitter")
                  .map(el => (
                    <PostCard
                      key={el._id}
                      id={el._id}
                      type={el.type}
                      link={el.link}
                      title={el.title}
                      fecthContent={fecthContent}
                    />
                  ))}
              </div>
            </div>
          )}

          {/* Instagram */}
          {contentData.some(el => el.type === "instagram") && (
            <div className="flex flex-col gap-3 w-[90%]">
              <div className="flex justify-between items-center px-2">
                <p className="text-2xl font-semibold text-white">Instagram</p>
                <div className="flex gap-3 text-white/70">
                  <ArrowLeftCircle
                  //@ts-ignore
                    onClick={() => scrollLeft(instagramScrollRef)}
                    className="hover:scale-105 cursor-pointer transition-all duration-200"
                  />
                  <ArrowRightCircle
                  //@ts-ignore
                    onClick={() => scrollRight(instagramScrollRef)}
                    className="hover:scale-105 cursor-pointer transition-all duration-200"
                  />
                </div>
              </div>
              <div
                ref={instagramScrollRef}
                className="flex gap-3 overflow-hidden"
              >
                {contentData
                  .filter(el => el.type === "instagram")
                  .map(el => (
                    <PostCard
                      key={el._id}
                      id={el._id}
                      type={el.type}
                      link={el.link}
                      title={el.title}
                      fecthContent={fecthContent}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
