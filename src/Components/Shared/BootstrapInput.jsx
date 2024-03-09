export const BootstrapInput=props=>{

    return(
        <>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">{props.symbol}</span>
                    <span className="input-group-text">0.00</span>
                </div>
                <input value={props.value} onInput={e=>props.onChange(e.target)} placeholder={props.placeholder}
                       type={props.type??'text'} className="form-control" aria-label="Amount (to the nearest dollar)" />
            </div>


        </>

    )
}