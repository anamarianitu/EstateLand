import axios from "axios";

const API_URL = "http://localhost:8080/news/";

class NewsService {

    getAllNews(setData){
        axios.get(API_URL + "allNews").then((response) => {
            setData(response.data);
        });
    }
}

export default new NewsService();