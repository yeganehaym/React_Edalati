import {Footer} from "./Footer";
import {Sidebar} from "./Sidebar";
import {Login} from "../Login";
import {Navigate} from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const UserTemplate=(props)=>{

    const isLoggedIn=()=>{
        const token=localStorage.getItem('token');
        if(token==null)
            return false;

        var decoded=jwtDecode(token);
        console.log(decoded);


        if(decoded==null || decoded==undefined)
        {
            return false;
        }

        const expireDate=new Date(decoded.exp*1000);
        const now=new Date();

        if(now>expireDate)
        {
            return false
        }

        return true;
    }

    const isAuthorized=()=>{
        const token=localStorage.getItem('token');
        var decoded=jwtDecode(token);

        let userRoles=decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        const roles=props.roles;


        if(Array.isArray(userRoles)==false)
        {
            userRoles=[userRoles];
        }

        for(let i=0;i<userRoles.length;i++)
        {
            if(userRoles[i].toLowerCase()==='admin'.toLowerCase())
                return true;

            for (let j=0;j<roles.length;j++)
            {
                if(userRoles[i].toLowerCase()===roles[j].toLowerCase())
                    return true;
            }
        }

        return false;
    }


    return(
        <>
            {
                isLoggedIn()==false && <Navigate to={"/login"} />
            }
            {
                isLoggedIn() && isAuthorized()==false && <h1>Not Authorized 403</h1>
            }
            {
                isLoggedIn() && isAuthorized() &&
                <>
                    <div className="wrapper">

                        <Sidebar/>

                        <div className="content-page">
                            <div className="container-fluid note-details">

                                <div className="row">
                                    <div className="col-12">
                                        <div className="card card-block card-stretch">
                                            <div className="card-body custom-notes-space">
                                                {
                                                    props.children
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                    <Footer/>
                </>
            }
        </>
    )
}