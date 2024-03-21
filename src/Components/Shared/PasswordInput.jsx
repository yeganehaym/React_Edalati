import {useState} from "react";
import 'font-awesome/css/font-awesome.min.css'

export const PasswordInput=props=>{

    const [type,setType]=useState('password');
    const toggle=()=>{

        if(type=='password')
            setType('text');
        else
            setType('password')
    }
    return (
        <>
        <div>
            <input className={"form-control"} type={type} name={props.name} value={props.value}/>
            <i className={"fa fa-eye"} onClick={toggle} />
        </div>

        </>
    )
}