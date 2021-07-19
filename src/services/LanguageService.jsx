import axios from "axios";

export default class LanguageService{

    getByCvId(cvId){
        return axios.get(`http://localhost:8080/api/language/getByCvId?cvId=${cvId}`)
    }

    deleteLanguage(languageId){
        return axios.delete(`http://localhost:8080/api/language/deleteLanguage?languageId=${languageId}`)
    }

    addLanguage(language){
        return axios.post("http://localhost:8080/api/language/addLanguage",language)
    }
}