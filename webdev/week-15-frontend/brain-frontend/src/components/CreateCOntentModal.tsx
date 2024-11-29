
import { useRef, useState } from "react";
import CrossIcon from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";


enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export function CreateContentModal({ open, onClose }) {
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube);

    const addContent = async () => {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(BACKEND_URL + "/api/v1/content", {
            link,
            type,
            title
        }, {
            headers: {
                "authorization": localStorage.getItem("jsonwebtoken")
            }
        })
    }
    return (
        <div>
            {open && <div className="w-screen bg-opacity-55 h-screen bg-slate-500 fixed top-0 left-0 flex justify-center items-center">
                <div className="flex flex-col justify-center  ">
                    <span className="bg-white bg-opacity-100  p-4 rounded-md">
                        <div className="flex justify-end bg-opacity-100  ">
                            <button onClick={onClose}>
                                <CrossIcon />
                            </button>


                        </div>
                        <div>
                            <Input reference={titleRef} placeholder={"title"} />
                            <Input reference={linkRef} placeholder={"Link"} />
                        </div>
                        <div className="">
                            <div className="flex justify-center">
                                <p>select type</p>
                            </div>
                            <div className="flex justify-center">
                                <Button text={"Youtube"} varient={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => setType(ContentType.Youtube)} />
                                <Button text={"Twitter"} varient={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => setType(ContentType.Twitter)} />
                            </div>

                        </div>
                        <Button onClick={addContent} varient={"primary"} text={"submit"} fullWidth={true} />
                    </span>
                </div>


            </div>}
        </div>
    )
}


