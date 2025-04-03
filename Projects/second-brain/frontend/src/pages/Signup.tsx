import { Brain } from "lucide-react";

export const SignUp = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] translate-x-1/2" />

      {/* Header */}
      <header className="relative w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-xl">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              SecondBrain
            </span>
          </div>
        </div>
      </header>

      <div className="p-4 min-h-96  flex justify-center items-center">
            <div className="p-3">
                
            </div>
      </div>
    </div>
  );
};
