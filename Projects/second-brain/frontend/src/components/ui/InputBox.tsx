export interface Inputprops {
  placeholder?: string;
  onClick?: () => void;
}

export const InputBox = ({ placeholder }: Inputprops) => {
  return (
    <>
      <input className="px-3 rounded-lg py-2 bg-white/10 w-full " placeholder={placeholder} />
    </>
  );
};
