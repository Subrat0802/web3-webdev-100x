import axios from "axios";
import { Trash2 } from "lucide-react";

interface cardProps {
  title: string;
  link: string;
  type: string;
  id:string;
  fecthContent:() => void
}

export const PostCard = ({ title, link, type, id, fecthContent }: cardProps) => {
  
  const handleDeleteContent = async (id:string) => {
    try{
      const res = await axios.delete(import.meta.env.VITE_BACKEND_URL + "/content", {
        data:{postId:id},
        withCredentials:true
      })
        fecthContent();
      console.log("RESPOSNEEEE", res);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="rounded-2xl  bg-slate-900/80 border border-white/10 shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300 p-3 w-full md:w-[350px]">
      {/* Media */}
      <div className="rounded-xl overflow-hidden mb-3">
        {type === "youtube" && (
          <iframe
            width="100%"
            height="200"
            src={link.replace("watch?v=", "embed/")}
            title="YouTube video player"
            className="rounded-xl"
          ></iframe>
        )}
        {type === "twitter" && (
          <blockquote className="twitter-tweet" data-theme="dark">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
        {type === "instagram" && (
          <div className="rounded-xl bg-slate-900 overflow-hidden w-full max-w-[400px]">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={link.replace("reels", "reel")}
              data-instgrm-version="14"
              style={{
                width: "100%",
                minWidth: "300px",
                maxWidth: "400px",
                margin: "0 auto",
                background: "#000",
              }}
            ></blockquote>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center text-white">
        <p className="text-lg font-semibold truncate w-[250px] capitalize">
          {title}
        </p>
        <button onClick={() => handleDeleteContent(id)}
          className="p-2 rounded-full hover:bg-red-600/30 transition-colors duration-200"
          title="Delete Post"
        >
          <Trash2 className="w-5 h-5 text-red-400" />
        </button>
      </div>
    </div>
  );
};
