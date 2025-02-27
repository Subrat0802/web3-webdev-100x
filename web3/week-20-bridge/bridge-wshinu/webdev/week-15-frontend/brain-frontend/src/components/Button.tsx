import { ReactElement } from "react";
import Loading from "../icons/Loading";
import { Spinner } from "@material-tailwind/react";

interface ButtonProps {
    varient:"primary" | "secondary",
    text:String,
    startIcon:ReactElement,
    onClick?: () => void;
    loading:boolean;
    fullWidth:boolean;

}

const varientClasses = {
    "primary":"bg-purple-600 text-white ",
    "secondary":"bg-purple-200 tex t-purple-600"
}

const defaultStyle = "px-4 py-2 m-2 rounded-md transition-all duration-200"


export function Button({varient, text, startIcon, onClick, loading, fullWidth}:ButtonProps){
    return <button onClick={onClick} 
        className={varientClasses[varient] + " " + defaultStyle + " " + `${fullWidth ? "w-full flex justify-center items-center " : ""} ` }>
        <div className="flex justify-center items-center gap-2 ">
            {startIcon}
            {loading ? <Loading /> : text}
        </div>
        
    </button>
}