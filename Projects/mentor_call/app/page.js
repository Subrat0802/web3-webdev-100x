import { HomePage } from "./components/HomePage";
import Sideabr from "./components/Sideabr";

export default function Home() {
  return (
    <div className="bg-[#ffffff] flex justify-between pb-10">
      {/* side bar  */}
      <div className="w-[17%]">
        <Sideabr />
      </div>
      <div className="w-[83%]">
        <HomePage />
      </div>
    </div>
  );
}
