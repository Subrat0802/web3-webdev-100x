import { ReactElement } from "react"


// type varients = "primary" | "secondary"
export interface ButtonProps {
    varient: "primary" | "secondary",
    size: "sm" | "md" | "lg",
    text: string,
    startIcon?: ReactElement,   // #?- means this is optional
    endIcon?: ReactElement,      // #?- means this is optional
    onClick?: () => void,
}

const varientStyle = {
    "primary": "bg-purple-600 text-white  transition-all duration-200",
    "secondary": "bg-purple-200 text-purple-600 transition-all duration-200"
}

const sizeStyle = {
    "sm": "py-2 px-4",
    "md": "py-3 px-6",
    "lg": "py-4 px-7"
}

const defaultStyle = "rounded-lg p-4 flex gap-2 justify-center  items-center hover:scale-105 "

const Button = ({ varient, size, text, startIcon, endIcon, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className={` ${varientStyle[varient]} ${defaultStyle} ${sizeStyle[size]}`}>
            {startIcon ? <div>{startIcon}</div> : null} {text} {endIcon ? <div>{endIcon}</div> : null}
        </button>

    )
}

export default Button


