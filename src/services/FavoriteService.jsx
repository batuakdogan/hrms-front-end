import axios from "axios";

export default class FavoriteService{

    getByCandidateId(candidateId){
        return axios.get(`http://localhost:8080/jobAdFavorites/getByCandidateId?candidateId=${candidateId}`)
    }

    addFavorite(candidateId,jobAdId){
        return axios.post(`http://localhost:8080/jobAdFavorites/addFavorite?candidateId=${candidateId}&jobAdId=${jobAdId}`)
    }

    removeFavorite(favoriteId){
        return axios.delete(`http://localhost:8080/jobAdFavorites/removeFavorite?favoriteId=${favoriteId}`)
    }

}