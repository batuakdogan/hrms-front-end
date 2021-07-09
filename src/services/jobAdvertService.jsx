import axios from "axios";

export default class JobAdvertisementService{
    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getall")
    }

    getAllActives(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getallactive")
    }

    getAllActivesWithSorted(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getallactivesorted")
    }

    
    //Employer ID
    getEmployerJobAds(id){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getEmployerJobAdvertisement?id="+id)
    }

    getConfirmedJobAds(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getConfirmedJobAds")
    }

    getWaitingJobAds(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getWaitingJobAds")
    }

    getOneById(id){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getOneById?id="+id)
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add",values, {
            headers: {
                'Content-Type': 'application/json',
                
            }
        })
    }

    confirmJobAdById(id){
        return axios.post("http://localhost:8080/api/jobAdvertisements/confirmJobAdById?id="+id)
    }



    getConfirmedJobsAndActiveted(employerId){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByEmployerIdAndActiveAndConfirmed?employerId="+employerId)
    }

    getConfirmedJobAdsWithPageable(pageNo,pageSize){
        return axios.get(`http://localhost:8080/api/jobAdvertisements/getConfirmedJobAdsWithPageable?pageNo=${pageNo}&pageSize=${pageSize}`)
    }

    getFilter(object,pageNo,pageSize){
        return axios.post(`http://localhost:8080/api/jobAdvertisements/getFilter?pageNumber=${pageNo}&pageSize=${pageSize}`,object)
    }

    getPageableAndFilterJobPostings(pageNo, pageSize, filterOption){
        return axios.post(`http://localhost:8080/api/jobAdvertisements/getByActiveAndFilter?pageNo=${pageNo}&pageSize=${pageSize}`,filterOption);
    }
    

}