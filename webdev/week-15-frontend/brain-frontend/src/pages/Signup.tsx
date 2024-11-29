import { useRef, useState } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const [loaidng, setLoading] = useState(false)
    const naviagte = useNavigate();
    const useNameRef = useRef<HTMLInputElement>();
    const usePasswordRef = useRef<HTMLInputElement>();
    const signup = async () => {
        
        try{
            const username = useNameRef.current?.value;
            const password = usePasswordRef.current?.value;
            
            const response = await axios.post(BACKEND_URL + "/api/v1/signup", {
                
                    username,
                    password
                
            })
            console.log(response)
            if(response.data.message === "User signed up"){
                naviagte("/signin")
            }
        }catch(err){
            console.log(err);
        }
        
    }
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white p-4 rounded-md  border min-w-48">
                <Input reference={useNameRef}  placeholder={"username"} />
                <Input reference={usePasswordRef} placeholder={"password"} />
                <div className="flex justify-center">
                    <Button onClick={signup} varient="primary" text="Signup" fullWidth={true} loading={loaidng}/>
                </div>
            </div>
        </div>
    )
}

export default Signup