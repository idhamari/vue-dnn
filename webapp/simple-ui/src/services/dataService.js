import axios from 'axios'

const Pats_API_URL = "http://localhost:8081/api/dnn"

class DataService{
    getData(){
        return axios.get(Pats_API_URL)
    }
}

export default new DataService()