import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("https://localhost:44319/api/Products/getall")
    }
}