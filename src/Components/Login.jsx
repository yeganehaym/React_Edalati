import {useState} from "react";
import * as authService from '../Services/AuthService'
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {Loading} from "./Shared/Loading";
export const Login=()=>{

    const [loginData,setLoginData]=useState({
        username:'',
        password:''
    })

    const [loading,setLoading]=useState(false)

    const setValue=e=>{
        const {name,value}=e.target;

        const mydata={...loginData};
        mydata[name]=value;
        setLoginData(mydata)
    }

    const navigate=useNavigate();


    const submit=async e=>{
        e.preventDefault();

        setLoading(true);

        const token=await authService.login(loginData)
        setLoading(false)

        if(token==null)
        {
            toast.error('User Not Found');

            return
        }

        localStorage.setItem('token',token);

        navigate('/',{replace:true});
    }
    return(
        <form onSubmit={submit}>
            <input className={"form-control"} type={"text"} name={"username"} placeholder={"username"} value={loginData.username} onInput={setValue} />
            <input  className={"form-control"}  type={"password"} name={"password"} placeholder={"password"} value={loginData.password} onInput={setValue}  />
            <button type={"submit"} className={"btn btn-primary"}>Submit</button>
            <Loading show={loading} />
        </form>
    )
}