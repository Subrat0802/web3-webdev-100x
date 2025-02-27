//@ts-ignore
import Share from "../icons/share";


interface CardProps {
    title:String;
    link:any;
    type:"twitter" | "youtube"

}

export function Card({title, link, type}: CardProps) {
    return (
        <div className=" bg-white rounded-md shadow-md outline-slate-200 max-w-80 min-w-96 p-8 border border-gray-200">
            <div className="flex justify-between">
                <div className="flex text-gray-500 font-bold items-center gap-2">
                    <Share />
                    {title}
                </div>
                <div className="flex text-gray-500 font-bold items-center gap-2">
                    
                    <a href={link} target="_blank"><Share /></a>
                    <Share />
                </div>
            </div>

            <div>
                {
                    type === "youtube" && <iframe className="w-full" src={link
                        .replace("watch?v=", "embed/") .split('&')[0] 
                    } ></iframe>
                }
                {
                    type === "twitter" &&  <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a>
                    </blockquote>
                }
                
            </div>

        </div>
    )
}