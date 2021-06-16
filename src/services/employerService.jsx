import axios from "axios"

export default class EmployerService{
    getEmployers(id){
        return axios.get("http://localhost:8080/api/employers/getall")
    }
}