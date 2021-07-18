import axios from "axios";

export default class CandidateService{
    getCandidates(){
        return axios.get("http://localhost:8080/api/candidates/getall");
    }
    registerCandidate(values){
        return axios.post("http://localhost:8080/api/candidates/add",values)
    }

    getMailVerifyedCandidates(){
        return axios.get("http://localhost:8080/api/candidates/getMailVerifyTrue")
    }
}