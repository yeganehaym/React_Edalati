export const Footer=()=>{
    return (<>
        <footer className="iq-footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item"><a href="%PUBLIC_URL%/backend/privacy-policy.html">Privacy Policy</a>
                            </li>
                            <li className="list-inline-item"><a href="%PUBLIC_URL%/backend/terms-of-service.html">Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 text-right">
                        <span className="text-secondary mr-1">
                            <script>2012</script>©</span>
                        <a href="#" className="">NotePlus</a>.
                    </div>
                </div>
            </div>
        </footer>
    </>)
}