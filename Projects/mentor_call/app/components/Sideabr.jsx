import { User, Briefcase, Clock, MessageSquare } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-[#F8FAFC]  flex flex-col   gap-3 border-r-2 border-gray-200 pt-24 px-5 min-h-screen">

      <div className="flex items-center gap-2 bg-[#E2E8F0] px-4 py-2 rounded-lg text-md font-medium">
        <User size={20} className="text-gray-600" />
        <p className="text-gray-900">Mentor</p>
      </div>

      <div className="flex items-center gap-2 px-4 py-2 rounded-lg font- text-md font-medium text-gray-900 hover:bg-gray-100 transition">
        <Briefcase size={20} className="text-gray-500" />
        <p>Job</p>
      </div>

      <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-md font-medium text-gray-900 hover:bg-gray-100 transition">
        <Clock size={20} className="text-gray-500" />
        <p>Booking</p>
      </div>

      <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-md font-medium text-gray-900 hover:bg-gray-100 transition">
        <MessageSquare size={20} className="text-gray-500" />
        <p>Priority DM</p>
      </div>
    </div>
  );
};

export default Sidebar;
