import axios from "axios";

export default class EmployerService{
    getEmployers(){
        return axios.get("http://localhost:8080/api/employer/getall");
    }

    getEmployerById(id){
        return axios.get("http://localhost:8080/api/employer/getById?id="+id)
    }

    registerEmployer(values){
        return axios.post("http://localhost:8080/api/employer/add",values)
    }

    update(values){
        return axios.put("http://localhost:8080/api/employer/update",values)
    }
    
}