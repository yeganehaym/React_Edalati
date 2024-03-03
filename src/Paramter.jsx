import {useLocation, useParams} from "react-router-dom";

const Paramter=props=>{

    const location=useLocation()

    const params=useParams();


    return(
        <>

            <p>
                <strong>Path:</strong>{location.pathname}
            </p>
            <p>
                <strong>ID:</strong>{params.id}
            </p>
            <p>
                <strong>Year:</strong>{params.year}
            </p>
            <p>
                <strong>Month:</strong>{params.month}
            </p>
        </>
    )
}

export default Paramter;