import axios from "axios";

export default class EmployerService{
    getEmployers(){
        return axios.get("http://localhost:8080/api/employer/getall");
    }
    getWaitingUpdate(){
        return axios.get("http://localhost:8080/api/employer/getWaitingUpdate");
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


    setActiveJobAds(id){
        return axios.put("http://localhost:8080/api/employer/verifyUpdate?employerUpdateId="+id & "staffId="+id)
       }

    
}