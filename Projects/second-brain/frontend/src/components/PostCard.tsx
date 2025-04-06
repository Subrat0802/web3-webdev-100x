interface cardProps {
  title: string;
  link: string;
  type: string;
}

export const PostCard = ({ title, link, type }: cardProps) => {
  return (
    <div>
      <p>{title}</p>
      {type === "youtube" && (
        <div className="p-2 rounded-xl bg-slate-900 border border-slate-700">
          <iframe
            width="560"
            height="315"
            src={link.replace("watch?v=", "embed/")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      )}
      {type === "twitter" && (
        <div className="p-2 rounded-xl bg-slate-900 border border-slate-700">
        <blockquote className="twitter-tweet" data-theme="dark">
          <a href={link.replace("x.com", "twitter.com")}></a>
        </blockquote>
        </div>
      )}

      {type === "instagram" && (
        
          <div className="p-2 rounded-xl bg-slate-900 border border-slate-700">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={link}
              data-instgrm-version="14"
            ></blockquote>
       
        </div>
      )}
    </div>
  );
};

