/* eslint-disable no-empty */
import CrossIcon from "../../icons/CrossIcon";
import { InputBox } from "./InputBox";
import Button from "./Button";
import { useRef, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";

interface ModalProps {
  open: boolean;
  onClose?: () => void;
}

enum contentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

const CreateContentModal = ({ open, onClose }: ModalProps) => {

  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  
  const [type, setType] = useState(contentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    // const type = typeRef.current?.value;
    

    const response = await axios.post(BACKEND_URL + "/content", {
      title,
      link,
      type
    }, {
      headers:{
        "Authorization": localStorage.getItem("token")
      }
    })  

    if(response.statusText === "OK"){
      

    }
  }

  if (!open) return null;


  return (
    <>
      {/* Background Overlay with Opacity */}
      {open && <div className="fixed top-0 left-0 w-full h-screen bg-slate-200 opacity-60"></div>}

      {/* Modal Content (No Opacity Applied) */}
      {open && <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center">
        <div className="bg-white min-w-[25%] p-4 rounded-md shadow-lg">
          <div className="flex w-full flex-col justify-center items-center">
            <div className="flex w-full justify-end">
              <div onClick={onClose} className="hover:cursor-pointer">
                <CrossIcon size="md" />
              </div>

            </div>

            <div className="flex flex-col w-full p-3">
              <InputBox ref={titleRef} placeholder="Title" type="text" />
              <InputBox ref={linkRef} placeholder="Link" type="text" />
              

              <div className="flex justify-center my-4 gap-4">
                <Button onClick={() => setType(contentType.Youtube)} size="sm" varient={type === contentType.Youtube ? "primary" : "secondary"} text="Youtube" />
                <Button onClick={() => setType(contentType.Twitter)} size="sm" varient={type === contentType.Twitter ? "primary" : "secondary"} text="Twitter" />
              </div>

              <Button onClick={addContent} varient={'primary'} size={'lg'} text={"Submit Brain"} />
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default CreateContentModal;



