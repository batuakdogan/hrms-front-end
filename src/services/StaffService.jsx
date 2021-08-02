import axios from "axios";
export default class StaffService{
    getStaffs(){
        return axios.get(`http://localhost:8080/api/staff/getall`)
    }

    addStaff(){
     return axios.get(`http://localhost:8080/api/staff/getall`)

    }

    update(email,firstName,lastName,staffId){
        return axios.put(`http://localhost:8080/api/staff/update?email=${email}&firstName=${firstName}&lastName=${lastName}&staffId=1`)
    }

    getStaffById(id){
        return axios.get("http://localhost:8080/api/staff/findById?id="+id)
    }
}