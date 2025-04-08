import { Brain } from "lucide-react";
import { Button } from "./ui/Button";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

export interface ButtonProps {
  buttonone?:string,
  buttontwo?:string,
  iconOne?:ReactElement,
  iconTwo?:ReactElement,
  onButtonOneClick?:() => void,
  onButtonTwoClick?:() => void
}

export const Header = ({ buttonone, buttontwo, iconOne, iconTwo, onButtonOneClick, onButtonTwoClick }: ButtonProps) => {
  const navigate = useNavigate();

  const handleButtonOneClick = () => {
    if (buttonone === "Get Started") {
      navigate("/signin");
    } else {
      onButtonOneClick?.();
    }
  };
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
          {buttonone && <Button  text={buttonone} onClick={handleButtonOneClick} startIcon={iconOne} varient="primary" size="sm" />}

          {buttontwo && <Button text={buttontwo}  onClick={onButtonTwoClick} startIcon={iconTwo} varient="primary" size="sm" />}
        </div>
      </div>
    </header>
  );
};
