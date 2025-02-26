export interface inputProps {
    placeholder: string,
    type:string,
    onChange?: () => void,
    ref?:any
  }
  
  export const InputBox = (props: inputProps) => {
    return <>
      <input className="border border-slate-200 rounded-md w-full p-2 mb-2" ref={props.ref} type={props.type} placeholder={props.placeholder}  />
    </>
  }