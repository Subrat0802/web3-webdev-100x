import { useNavigate } from "react-router-dom"
import Button from "../components/ui/Button"
import { InputBox } from "../components/ui/InputBox"
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Signin = () => {
    // const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);

    const signin = async () => {
        try{
            const email = emailRef.current?.value;
            const password = passRef.current?.value;
            console.log("DATA", password, email);
            const data = await axios.post(BACKEND_URL+"/signin", {
                email,
                password
            })
    
            console.log("DATA", data);
    
            if(data?.statusText === "OK"){
                localStorage.setItem("token", data.data.token)
                navigate("/dashboard")
            }
            else{
                console.log("else case", data)
                return;
            }
        }catch(error){
            //@ts-ignore
            console.log("error catch", error)
        }
        
    }

    
    return (
        <div className="h-screen w-screen bg-gray-200 flex  justify-center px-16 md:p-1 items-center">
            <div className="flex flex-col bg-white rounded-lg p-6 w-full   md:w-[25%]">
                <p className="text-2xl mb-5 font-sans font-bold text-gray-700">Sign in</p>
                <InputBox ref={emailRef} placeholder="username" type="text" />
                <InputBox ref={passRef} placeholder="Password" type="password" />
                <div className="w-full flex">
                    <Button onClick={signin} widthFull={true} text="Sign in"  varient="primary" size="lg" />
                </div>
            </div>

        </div>
    )
}

export default Signin