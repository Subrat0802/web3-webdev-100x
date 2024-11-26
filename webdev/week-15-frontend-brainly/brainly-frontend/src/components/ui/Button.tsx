import { ReactElement } from "react";


type Varients = "primary" | "secondary";
interface ButtonProps {
    varient: Varients;
    size: "sm" | "lg" | "md";
    text: any;
    startIcon?: ReactElement;
    endIcon?:ReactElement;
    onClick: () => void;
}

const sizeStyle = {
    "sm":"py-2 px-2 m-2",
    "md":"py-4 px-3 m-2",
    "lg":"py-6 px-4 m-2"
}

const varientStyles = {
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-300 text-purple-600"
}
const defaultStyle = "rounded-md p-4"


const Button = (props: ButtonProps) => {
  return <button className={`${varientStyles[props.varient]} ${defaultStyle} ${sizeStyle[props.size]}`} 
    ><div className="flex">{props.startIcon}{props.text}{props.endIcon}</div></button>
}


export default Button