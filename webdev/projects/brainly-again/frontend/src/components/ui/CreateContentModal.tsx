import CrossIcon from "../../icons/CrossIcon";
import Button from "./Button";

interface ModalProps {
  open: boolean;
  onClose?: () => void;
}

const CreateContentModal = ({ open, onClose }: ModalProps) => {
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
              <input className="border border-slate-200 rounded-md w-full p-2 mb-2" placeholder="Title" />
              <input className="border border-slate-200 rounded-md w-full p-2 mb-2" placeholder="Link" />
              <input className="border border-slate-200 rounded-md w-full p-2 mb-6" placeholder="Type" />
              <Button  varient={'primary'} size={'lg'} text={"Submit Brain"}  />
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default CreateContentModal;
