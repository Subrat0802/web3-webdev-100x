import { Shareicon } from "../../icons/Shareicon";

interface cardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

const Card = ({ title, link, type }: cardProps) => {
  return (
    <div className="bg-white rounded-md shadow-md px-2 outline-slate-200  border border-slate-100">
      <div className="flex justify-between p-4">
        <div className="flex text-lg justify-center gap-3 items-center">
          <div className="text-gray-500">
            <Shareicon size="md" />
          </div>

          <p className="">{title}</p>
        </div>
        <div className="flex justify-center text-gray-500 gap-2 items-center">
          <a href={link} target="_blank">
            <Shareicon size="md" />
          </a>
          <Shareicon size="md" />
        </div>
      </div>
      {type === "youtube" && (
        <div className="mt-2">
          <iframe
            className="w-full  rounded-md p-4"
            width="560"
            height="315"
            src={link.replace("watch?v=", "embed/")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      )}

      {type === "twitter" && (
        <div>
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        </div>
      )}
    </div>
  );
};

export default Card;
