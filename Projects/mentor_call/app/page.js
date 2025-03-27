import { HomePage } from "./components/HomePage";
import Sideabr from "./components/Sideabr";
// import { useBoolean } from "./context/BoolContextAbout";

export default function Home() {
  // const { value } = useBoolean();
  return (
    <div className="bg-[#ffffff] flex justify-between pb-10">
      {/* side bar  */}
      <div className="">
        <Sideabr />
      </div>
      <div className="">
        <HomePage />
      </div>
    </div>
  );
}
