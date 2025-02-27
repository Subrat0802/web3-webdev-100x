import axios from "axios";

export default async function User(){

    //this will run on the server not on the client side because we didn't use useEffect or useState. and the reasons is reason hooks only run on the client side
    const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");

    const data = response.data;
   

    return <div>
        
            <p>User data</p>
            <p>{data.name}</p>
            <p>{data.email}</p>
        
    </div>
}



















// "use client"; 
// import axios from "axios";
// import { useEffect, useState } from "react"

// export default function User(){
//     const [loading, setLoading] = useState(true);
//     const [data, setData] = useState(null);
//     useEffect(() => {
//         axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
//         .then(res => {
//             setData(res.data);
//             setLoading(false);
//         }).catch(err => {
//             console.log("Error", err);
//             setLoading(false);
//         })
        
//     }, []);

//     if(loading) return <div>Loading...</div>

//     return <div>
        
//             <p>User data</p>
//             <p>{data.name}</p>
//             <p>{data.email}</p>
        
//     </div>
// }