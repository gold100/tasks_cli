import axios from "axios";

export class ServerManagerService{
    url: string;
    constructor() {
        this.url = 'http://localhost:3000/task/';
    }

    async postRequest(partialUrl: string, body: any){
        return await axios.post(this.url + partialUrl , body);
    }

    async delete(partialUrl: string, id: any){
        return await axios.post(this.url + partialUrl + `/${id}`);
    }

    async get(partialUrl: string){
        return await axios.get(this.url + partialUrl);
    }
}
