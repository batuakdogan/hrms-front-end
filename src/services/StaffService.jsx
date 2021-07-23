import axios from "axios";
export default class StaffService{
    getStaffs(){
        return axios.get(`http://localhost:8080/api/staff/getall`)
    }

    addStaff(){
                return axios.get(`http://localhost:8080/api/staff/getall`)

    }
}