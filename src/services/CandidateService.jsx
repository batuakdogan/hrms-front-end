import axios from "axios";

export default class CandidateService{
    getCandidates(){
        return axios.get("http://localhost:8080/api/candidates/getall");
    }
    registerCandidate(values){
        return axios.post("https://kodlamaio-hrms.herokuapp.com/api/candidates/add",values)
    }

    getMailVerifyedCandidates(){
        return axios.get("https://kodlamaio-hrms.herokuapp.com/api/candidates/getMailVerifyTrue")
    }
}