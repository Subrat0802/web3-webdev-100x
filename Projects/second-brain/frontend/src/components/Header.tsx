import { Brain } from "lucide-react";
import { Button } from "./ui/Button";

export interface ButtonProps {
  buttonone?:string,
  buttontwo?:string
}

export const Header = ({ buttonone, buttontwo }: ButtonProps) => {
  return (
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
        <div className="flex gap-3">
          {buttonone && <Button text={buttonone} varient="primary" size="sm" />}

          {buttontwo && <Button text={buttontwo} varient="primary" size="sm" />}
        </div>
      </div>
    </header>
  );
};
