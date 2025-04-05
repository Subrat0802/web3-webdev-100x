/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputBox } from "./ui/InputBox";

export const CreateContentModal = ({ setOpenModal }: any) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={() => setOpenModal(false)}
    >
      <div className="absolute inset-0 bg-black opacity-65"></div>
      <div
        className="relative z-50 bg-[#0F172A] flex flex-col gap-4 rounded-lg p-5 min-w-[300px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        {/* <button
            className="absolute bg-white w-6 h-6 text-center flex justify-center items-center -top-2 rounded-full -right-1 text-black text-2xl pl-[1px] hover:bg-black pb-1 font-bold hover:text-white"
            onClick={() => setOpenModal(false)}
          >
            ×
          </button> */}
        {/* Content */}
        <InputBox placeholder="Title" />
        <InputBox placeholder="Link" />
        <select className="bg-slate-800 pl-2 text-white/70 py-2 rounded-lg focus:outline-none">
          <option value="">Select Platform</option>
          <option value="twitter">Twitter</option>
          <option value="youtube">YouTube</option>
          <option value="instagram">Instagram</option>
        </select>
      </div>
    </div>
  );
};
