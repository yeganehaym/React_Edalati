import './Loading.css'
export const Loading=props=>{

    return(
        <>
            {
                props.show==true && <div className="loader"></div>
            }
        </>
    )
}