/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { Button } from "./ui/Button";
import { InputBox } from "./ui/InputBox";
import axios from "axios";

export const CreateContentModal = ({ setOpenModal }: any) => {
  const [ButtonTypePrime, setButtonTypePrime] = useState<boolean>(false);

  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);

  const handleClickOne = () => {
    setButtonTypePrime(false);
  };

  const handleClickTwo = () => {
    setButtonTypePrime(true);
  };

  const handleClickAdd = async () => {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const type = typeRef.current?.value;
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/content",
        {
          title,
          link,
          type,
        },
        {
          withCredentials: true,
        }
      );
      setOpenModal(false)
      console.log("RESPONSE CONTENT", response);
    } catch (error) {
        console.log("error RESPONSE CONTENT",error)
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={() => setOpenModal(false)}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>

      <div
        className="relative z-50 bg-[#0F172A] flex flex-col gap-5 rounded-2xl p-6 w-[90%] max-w-lg border
         border-white/10 shadow-xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 w-8 h-8 text-xl text-white pb-1 rounded-full hover:bg-white/10 transition-all duration-200"
          onClick={() => setOpenModal(false)}
        >
          ×
        </button>

        <h2 className="text-xl font-semibold text-white">Add New Content</h2>
        <div className="flex gap-3">
          <Button
            onClick={handleClickOne}
            varient={!ButtonTypePrime ? "primary" : "tertiary"}
            size="md"
            text="Social Media"
          />
          <Button
            onClick={handleClickTwo}
            varient={ButtonTypePrime ? "primary" : "tertiary"}
            size="md"
            text="Images / Notes"
          />
        </div>
        {!ButtonTypePrime && (
          <div className="flex flex-col gap-3">
            <InputBox ref={titleRef} placeholder="Title" />
            <InputBox ref={linkRef} placeholder="Link" />
            <select
              ref={typeRef}
              className="bg-slate-800 text-white/80 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Platform</option>
              <option value="twitter">Twitter</option>
              <option value="youtube">YouTube</option>
              <option value="instagram">Instagram</option>
            </select>
          </div>
        )}
        {ButtonTypePrime && (
          <div>
            <select
              className="bg-slate-800 w-full mb-3 text-white/80 py-2 px-3 rounded-lg focus:outline-none focus:ring-2
             focus:ring-indigo-500"
            >
              <option value="notes">Notes</option>
              <option value="image">Image</option>
            </select>
            <textarea
              placeholder="Text"
              rows={5}
              className="bg-slate-800 text-white/80 w-full px-4 py-3 rounded-lg resize-none 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-white/40"
            />
          </div>
        )}
        <div className="pt-2">
          <Button
            onClick={handleClickAdd}
            text="Add"
            varient="primary"
            size="md"
          />
        </div>
      </div>
    </div>
  );
};
