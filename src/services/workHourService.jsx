import axios from "axios";

export default class workHourService{
    getWorkHours(){
        return axios.get("http://localhost:8080/api/workhour/getall")
    }
} 