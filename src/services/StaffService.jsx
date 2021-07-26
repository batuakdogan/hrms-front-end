import axios from "axios";
export default class StaffService{
    getStaffs(){
        return axios.get(`http://localhost:8080/api/staff/getall`)
    }

    addStaff(){
     return axios.get(`http://localhost:8080/api/staff/getall`)

    }

    update(values){
        return axios.put("http://localhost:8080/api/staff/update",values)
    }

    getStaffById(id){
        return axios.get("http://localhost:8080/api/staff/findById?id="+id)
    }
}