import { HomePage } from "./components/HomePage";
import Sideabr from "./components/Sideabr";
// import { useBoolean } from "./context/BoolContextAbout";

export default function Home() {
  // const { value } = useBoolean();
  return (
    <div className="bg-[#ffffff] flex justify-between ">
      {/* side bar  */}
      <div className="">
        <Sideabr />
      </div>
      <div className="pb-14">
        <HomePage />
      </div>
    </div>
  );
}
