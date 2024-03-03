import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import * as productService from "./productService";
import ReactCountryFlag from "react-country-flag"
import WorldMap from "react-svg-worldmap";

export class Products extends Component{




    state={
        page:1,
        pageSize:3,
        totalPage:3,
        products:[],
        progress:30,
        data : [
            { country: "cn", value: 1389618778 }, // china
            { country: "in", value: 1311559204 }, // india
            { country: "us", value: 331883986 }, // united states
            { country: "id", value: 264935824 }, // indonesia
            { country: "pk", value: 210797836 }, // pakistan
            { country: "br", value: 210301591 }, // brazil
            { country: "ng", value: 208679114 }, // nigeria
            { country: "bd", value: 161062905 }, // bangladesh
            { country: "ru", value: 141944641 }, // russia
            { country: "mx", value: 127318112 }, // mexico
        ]
    }

    componentDidMount() {
        const products=productService.getData(this.state.page);
        const totalPage=productService.GetTotalPage();
        this.setState({products,totalPage})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevState.page!=this.state.page)
        {
            const products=productService.getData(this.state.page);
            this.setState({products})

        }
    }

    getPages=()=>{
        let pages=[];
        for (let i=0;i<this.state.totalPage;i++)
        {
            pages.push(i+1);
        }

        return pages.map(p=> <li onClick={()=>this.setState({page:p})} className={"page-item " + (this.state.page==p?"active":"")}><a className="page-link" href="#">{p}</a></li>)
    }

    next=()=>{
        let page=this.state.page;
        page++;

        if(this.state.totalPage<page)
            return;
        this.setState({page})
    }

    prev=()=>{
        let page=this.state.page;
        page--;

        if(page<=0)
            return;
        this.setState({page})
    }
    render(){


        return(<>
        <table className={"table table-bordered table-stripped"}>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
            </tr>
            </thead>
            <tbody>
            {
                this.state.products.map((product,index)=><tr key={product.id}>
                    <td>{((this.state.page-1)*this.state.pageSize) + index+1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{(product.price*product.quantity)}</td>
                </tr>)
            }
            </tbody>
        </table>

            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li onClick={this.prev} className="page-item"><a className="page-link" href="#">Previous</a></li>

                        {
                            this.getPages()
                        }

                        <li onClick={this.next} className="page-item"><a className="page-link" href="#">Next</a></li>


                    </ul>
                </nav>
            </div>

            <div>
                <ReactCountryFlag  style={{
                    fontSize: '30pt',
                    lineHeight: '2em',
                }} countryCode="cn" svg />
            </div>
            <div>
                <WorldMap
                    color="blue"
                    title="Top 10 Populous Countries"
                    value-suffix="people"
                    size="lg"
                    data={this.state.data}
                />
            </div>

            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: this.state.progress+"%"}} aria-valuenow="25"
                     aria-valuemin="0" aria-valuemax="100">{this.state.progress}%
                </div>

            </div>
            <button onClick={()=>this.setState(prevState=>({progress:prevState.progress +10}))} className={"btn btn-primary"}>Progress</button>

        </>)
    }
}