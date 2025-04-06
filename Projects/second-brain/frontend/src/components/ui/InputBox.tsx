/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Inputprops {
  placeholder?: string;
  onClick?: () => void;
  ref?:any
}

export const InputBox = ({ placeholder, ref }: Inputprops) => {
  return (
    <>
      <input ref={ref} className="px-3 rounded-lg py-2 text-white bg-white/10 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder={placeholder} />
    </>
  );
};
