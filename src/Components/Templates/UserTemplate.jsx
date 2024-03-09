import {Footer} from "./Footer";
import {Sidebar} from "./Sidebar";

export const UserTemplate=(props)=>{



    return(
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
    )
}