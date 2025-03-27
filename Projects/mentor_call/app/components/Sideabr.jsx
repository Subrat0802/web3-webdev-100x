'use client'
import { User, Briefcase, Clock, MessageSquare } from "lucide-react";
import { useBoolean } from "../context/BoolContextAbout";

const Sidebar = () => {
  const { value, setValue, userId, setUserId } = useBoolean();
  return (
    <div className="bg-[#F8FAFC]  flex flex-col   gap-3 border-r-2 border-gray-200 pt-24 px-5 min-h-full">

      <div className="flex items-center gap-2 bg-[#E2E8F0] px-4 py-2 rounded-lg text-md font-medium">
        <User size={20} className="text-gray-600" />
        {
          !value && <p className="text-gray-900 pr-16">Mentor</p>
        }
      </div>

      <div className="flex items-center gap-2 px-4 py-2 rounded-lg font- text-md font-medium text-gray-900 hover:bg-gray-100 transition">
        <Briefcase size={20} className="text-gray-500" />
        {
          !value && <p className="text-gray-900">Job</p>
        }
      </div>

      <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-md font-medium text-gray-900 hover:bg-gray-100 transition">
        <Clock size={20} className="text-gray-500" />
        {
          !value && <p className="text-gray-900">Booking</p>
        }
      </div>

      <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-md font-medium text-gray-900 hover:bg-gray-100 transition">
        <MessageSquare size={20} className="text-gray-500" />
        {
          !value && <p className="text-gray-900">Priority Dm</p>
        }
      </div>
    </div>
  );
};

export default Sidebar;
