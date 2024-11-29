import { useRef, useState } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"


const Signin = () => {
    const [loaidng, setLoading] = useState(false)
    const navigate = useNavigate();
    const useNameRef = useRef<HTMLInputElement>();
    const usePasswordRef = useRef<HTMLInputElement>();
    const signin = async () => {

        try {
            const username = useNameRef.current?.value;
            const password = usePasswordRef.current?.value;

            const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
                username,
                password
            })
            // alert("Signin")
            const jwt = response.data.token
            localStorage.setItem("jsonwebtoken", jwt)
            
            if(jwt){
                navigate("/dashboard")
            }
            // redirect to dashboard

        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white p-4 rounded-md  border min-w-48">
                <Input reference={useNameRef} placeholder={"username"} />
                <Input reference={usePasswordRef} placeholder={"password"} />
                <div className="flex justify-center">
                    <Button onClick={signin} varient="primary" text="Signin" fullWidth={true} loading={loaidng} />
                </div>
            </div>
        </div>
    )
}

export default Signin