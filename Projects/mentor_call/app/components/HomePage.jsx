import { TopBar } from "./TopBar";
import { Mentor } from "./Mentor";

export const HomePage = () => {

  return (
    <div className="flex flex-col">
      {/* topbar  */}
      <div className="p-4 w-full flex justify-end items-center pr-8">
        <TopBar />
      </div>

      {/* mentor bar  */}
      <Mentor />
    </div>
  );
};
