import axios from "axios";

export default class TechnologyService{

    getByCvId(cvId){
        return axios.get(`http://localhost:8080/api/technology/getByCvId?cvId=${cvId}`)
    }

    addScholl(technology){
        return axios.post("http://localhost:8080/api/technology/addTechnology",technology)
    }

    deleteSchool(technologyId){
        return axios.delete(`http://localhost:8080/api/technology/deleteTechnology?technologyId=${technologyId}`)
    }
}