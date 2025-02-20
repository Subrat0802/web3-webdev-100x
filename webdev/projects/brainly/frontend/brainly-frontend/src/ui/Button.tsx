import { ReactElement } from "react";

type Varient = "primary" | "secondary";
type size = "sm" | "lg" | "md";
interface ButtonTypes {
    varient: Varient
    text: String
    size: size
    startIcon:ReactElement
    endIcon:ReactElement
    onCLick: () => void
}

const Button = (props: ButtonTypes) => {
    return (
        <div>
            <button className="flex">{props.startIcon}{props.text}{props.endIcon}</button>
        </div>
    )
}

export default Button