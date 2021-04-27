import axios from "axios";
var config = require('../config.json');

export class ServerManagerService{
    url: string;
    constructor() {
        this.url = 'http://localhost:3000/task/';
    }

    async postRequest(partialUrl: string, body: any){
        return await axios.post(this.url + partialUrl , {body: body});
    }

    async delete(partialUrl: string, id: any){
        return await axios.delete(this.url + partialUrl, {data: {body: id}});
    }

    async get(partialUrl: string){
        return await axios.get(this.url + partialUrl);
    }
}
