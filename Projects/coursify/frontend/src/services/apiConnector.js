import axios from "axios";

export const axiosinstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
    return axiosinstance({
        method: `${method}`,
        url: `${url}`,
        headers: headers ? headers : null,
        bodyData: bodyData ? bodyData : null,
        params: params ? params : null
    })
}