import axios from "axios";
import {toast} from "react-toastify";

const client=axios.create({
    baseURL:'http://localhost:5140/',

})
client.interceptors.response.use(response=>{


    return response;
},error => {

    toast('خطا در ارتباط',{
        position:'bottom-center',
        type:'error',
        hideProgressBar:true,
        rtl:true
    })

})

const jwt=localStorage.getItem('token');
client.defaults.headers.common["Authorization"] = "Bearer " + jwt;

export default {
    get:client.get,
    post:client.post,
    put:client.put,
    delete:client.delete
}