
import { useRef } from "react"
import Button from "../components/ui/Button"
import { InputBox } from "../components/ui/InputBox"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const conPassRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();


    async function signup() {
        try {

            const username = nameRef.current?.value;
            const email = emailRef.current?.value;
            const password = passRef.current?.value;
            const confirmPassword = conPassRef.current?.value;
            // console.log("username", username, email, password)

            const data = await axios.post(BACKEND_URL + "/signup", {
                username,
                email,
                password,
                confirmPassword
            })
            console.log("data", data);
            if (data?.statusText === "OK") {
                navigate("/signin")
                // alert("Sign up done")
            }
            else {
                console.log("else case", data);
                return;
            }
        } catch (error) {
            //@ts-ignore
            console.log("catch case", error?.response?.data?.error[0]?.message);
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex  justify-center px-16 md:p-1 items-center">
            <div className="flex flex-col bg-white rounded-lg p-6 w-full   md:w-[25%]">
                <p className="text-2xl mb-5 font-sans font-bold text-gray-700">Sign up</p>

                <InputBox ref={nameRef} placeholder="username" type="text" />
                <InputBox ref={emailRef} placeholder="Email" type="email" />
                <InputBox ref={passRef} placeholder="Password" type="text" />
                <InputBox ref={conPassRef} placeholder="Password" type="text" />

                <div className="w-full flex">
                    <Button widthFull={true} onClick={signup} text="Sign up" varient="primary" size="lg" />
                </div>
            </div>

        </div>
    )
}

export default Signup