import axios from "axios";

export default class SchoolService{

    getByCvId(cvId){
        return axios.get(`http://localhost:8080/api/school/getByCvId?cvId=${cvId}`)
    }

    addScholl(school){
        return axios.post("http://localhost:8080/api/school/addSchool",school)
    }

    deleteSchool(schoolId){
        return axios.delete(`http://localhost:8080/api/school/deleteSchool?schoolId=${schoolId}`)
    }
}