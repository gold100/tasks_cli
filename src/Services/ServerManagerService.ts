import axios from "axios";
var config = require('../../config.json');
const url = `http://${config.server_ip}:${config.server_port}/task/`;

export async function postRequest(partialUrl: string, body: any){
    return await axios.post(url + partialUrl , {body: body});
}

export async function putRequest(partialUrl: string, body: any){
    return await axios.put(url + partialUrl , {body: body});
}

export async function deleteRequest(partialUrl: string, id: any){
    return await axios.delete(url + partialUrl, {data: {body: id}});
}
export async function getRequest(partialUrl: string){
    return await axios.get(url + partialUrl);
}
