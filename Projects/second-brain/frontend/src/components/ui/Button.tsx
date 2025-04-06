import { ReactElement } from "react"

export interface ButtonProps {
    varient: "primary" | "secondary" | "tertiary",
    size: "sm" | "lg" | "md",
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick?: () => void,
}

const varientSize = {
    "primary": "bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity",
    "secondary":"bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2.5 rounded-xl font-medium hover:opacity-90 transition-opacity",
    "tertiary": "text-white/60 border border-gray-700 rounded-lg"
}

const sizeStyle = {
    "sm":"min-w-32",
    "lg":"w-full",
    "md":"min-w-44"
}


export const Button = ({text, varient, size, startIcon, onClick}: ButtonProps) => {
    return(
        <button onClick={onClick} className={"flex " + `${varientSize[varient]} ${sizeStyle[size]}`}>
            <div className="mr-2 flex justify-center items-center gap-2 w-full    ">{startIcon}{text}</div> 

            <div className=""></div>
        </button>
    )
}