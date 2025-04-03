import { ReactElement } from "react"

export interface ButtonProps {
    varient: "primary" | "secondary",
    size: "sm" | "lg" | "md",
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick?: () => void,
}

export const Button = () => {
    return(
        <button>

        </button>
    )
}