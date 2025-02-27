import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";


export function useContent() {
    const [contents, setContents] = useState([]);

    function refresh() {
        axios.get(BACKEND_URL + "/api/v1/content", {
            headers: {
                "authorization": localStorage.getItem("jsonwebtoken")
            }
        }).then((res) => {
            setContents(res?.data?.data)
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        refresh();
    }, []);

    return {contents, refresh}
}