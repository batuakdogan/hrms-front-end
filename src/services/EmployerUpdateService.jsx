import axios from "axios";

export default class EmployerUpdateService{
    getVerifyedUpdate(){
        return axios.get("http://localhost:8080/api/employerUpdate/getverifyed");
    }
}