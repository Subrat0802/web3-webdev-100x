import { InputBox } from "../components/ui/InputBox";
import { Button } from "../components/ui/Button";
import { Header } from "../components/Header";

export const SignIn = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] translate-x-1/3" />

      {/* Header */}
      <Header />

      <div className="p-4 min-h-96  flex justify-center items-center">
        <div className="p-3 flex flex-col justify-center w-[30%] items-center gap-2 max-w-5xl mt-14">
          <InputBox placeholder="Email address" />
          <InputBox placeholder="Password"/>
          <Button text="Sign Up" varient="primary" size="lg"/>
        </div>
      </div>
    </div>
  );
};
