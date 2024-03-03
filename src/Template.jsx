import {Link} from "react-router-dom";

export const Template=(props)=>{

    return(
        <>
            <h1>Template </h1>
        <Link to={"/"}>Go To Dashboard</Link>
            <div>
                {
                    props.children
                }
            </div>
        </>
    )
}