import axios from "axios";

export default class JobAdService{
    getActiveJobAds(){
        return axios.get("http://localhost:8080/api/jobAd/getActiveAds");
    }

    getByJobAdId(id){
        return axios.get("http://localhost:8080/api/jobAd/getByJobAdId?id="+id)
    }

    getActiveAdsByCompanyId(id){
        return axios.get("http://localhost:8080/api/jobAd/getActiveAndCompanyId?companyId="+id)
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobAd/create",values)
    }

    getPageableAndFilterJobPostings(pageNo, pageSize, filterOption){
        return axios.post(`http://localhost:8080/api/jobAd/getByActiveAndFilter?pageNo=${pageNo}&pageSize=${pageSize}`,filterOption);
    }

    getAll(){
        return axios.post("http://localhost:8080/api/jobAd/getall")
    }

    setActiveJobAds(id){
     return axios.post("http://localhost:8080/api/jobAd/setActive?jobAdId="+id & "staffId="+id)
    }

    getWaitingJobAds(){
        return axios.get("http://localhost:8080/api/jobAd/getWaitingJobAds")
    }
    
}