import { sidebar } from "../data/sidebar";

export const SideBar = () => {
  return (
    <div className="flex flex-col gap-2">
      {sidebar.map((el) => {
        return (
          <div className="flex text-white/75 gap-4 justify-start cursor-pointer rounded-lg hover:bg-blue-900/10 text-xl px-8 items-center py-3" key={el.id}>
            <el.icon />
            <p>{el.text}</p>
          </div>
        );
      })}
    </div>
  );
};
