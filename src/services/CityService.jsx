import axios from "axios";

export default class CityService{

    getCitys(){
        return axios.get("http://localhost:8080/city/getAll")
    }
}