import axios from "axios";

export default class ExperianceService{

    add(experiance){
        return axios.post("http://localhost:8080/api/experiances/add",experiance)
    }

    delete(experianceId){
        return axios.delete(`http://localhost:8080/api/experiances/delete?experianceId=${experianceId}`)
    }

    getByCvId(cvId){
        return axios.get(`http://localhost:8080/api/experiances/getByCvId?id=${cvId}`)
    }
}