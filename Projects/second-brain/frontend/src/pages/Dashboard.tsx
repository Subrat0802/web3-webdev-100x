/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";
import { instagram } from "../data/sidebar";

export const Dashboard = () => {
    useEffect(() => {
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process();
        }
      }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] overflow-hidden relative">
      {/* Header */}
      <Header buttonone="Add Content" buttontwo="Share Content" />

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="left-0 border-r border-white/10 min-h-full">
          <SideBar />
        </div>

        {/* Content */}
        <div className="m-4 w-full flex flex-wrap gap-8">
            
          {
            
            instagram.map((el) => {
                return <blockquote key={el.id}
                className="instagram-media"
                data-instgrm-permalink={el.link}
                data-instgrm-version="14"
              ></blockquote>
            })
          }
          


        </div>
      </div>
    </div>
  );
};
