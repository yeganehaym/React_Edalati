import {useEffect, useState} from "react";
import * as productService from "./productService";

export const Products2=()=>{

    const [products,setProducts]=useState([])
    const [page,setPage]=useState(1);
    const [totalPage,setTotalPage]=useState(0);


    const pageSize=3;


    useEffect(()=>{
        const data=productService.getData(page);
        const total=productService.GetTotalPage();

        setProducts(data);
        setTotalPage(total)
    },[])



    const getPages=()=>{
        let pages=[];
        for (let i=0;i<totalPage;i++)
        {
            pages.push(i+1);
        }

        return pages.map(p=> <li onClick={()=>setPage(p)} className={"page-item " + (page==p?"active":"")}><a className="page-link" href="#">{p}</a></li>)
    }

    const next=()=>{
        let page=page;
        page++;

        if(totalPage<page)
            return;
        setPage(page)
    }

    const prev=()=>{
        let page=page;
        page--;

        if(page<=0)
            return;
        setPage(page)
    }


    return (
        <>
        <h1>Products 2</h1>

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
                    products.map((product,index)=><tr key={product.id}>
                        <td>{((page-1)*pageSize) + index+1}</td>
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
                        <li onClick={prev} className="page-item"><a className="page-link" href="#">Previous</a></li>

                        {
                            getPages()
                        }

                        <li onClick={next} className="page-item"><a className="page-link" href="#">Next</a></li>


                    </ul>
                </nav>
            </div>

        </>
    )
}