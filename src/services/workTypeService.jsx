import axios from "axios";

export default class workTypeService{
        getWorkTypes(){
            return axios.get("http://localhost:8080/api/worktype/getall")
        }
    }

