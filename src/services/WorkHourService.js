import axios from "axios";

export default class WorkHourService{
    getWorkHours(){
        return axios.get("http://localhost:8080/api/workhour/getall")
    }
} 