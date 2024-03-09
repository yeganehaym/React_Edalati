import {Link} from "react-router-dom";
import {BootstrapInput} from "./Components/Shared/BootstrapInput";
import {useState} from "react";

export const Template=(props)=>{

    const [name,setName]=useState("ali")
    return(
        <>
            <h1>Template </h1>
        <Link to={"/"}>Go To Dashboard</Link>
            <BootstrapInput placeholder={"Enter Your Name"} value={name} symbol={"@"} onChange={target=>setName(target.value)} />
            <BootstrapInput type={"number"} placeholder={"Enter Your Name"} value={name} symbol={"@"} onChange={target=>setName(target.value)} />
            <BootstrapInput placeholder={"Enter Your Name"} value={name} symbol={"@"} onChange={target=>setName(target.value)} />
            <BootstrapInput placeholder={"Enter Your Name"} value={name} symbol={"@"} onChange={target=>setName(target.value)} />
            <div>
                {
                    props.children
                }
            </div>
        </>
    )
}