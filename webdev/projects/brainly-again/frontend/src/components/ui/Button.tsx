
export interface ButtonProps {
    varient: "primary" | "secondary",
    size:"sm" | "md" | "lg",
    text: string,
    startIcon?: any,   // #?- means this optional
    endIcon?: any,      // #?- means this optional
    onClick?: () => void,
}

const Button = (props: ButtonProps) => {
  return (
    <div>
        <button>{props.text}</button>
    </div>
  )
}

export default Button


