import React, { useState , useEffect } from "react";
import {Link} from "react-router-dom";
import AddProduct from "./AddProduct";
import AllProductSingleData from "./AllProductSingleData";

const Product = () => {

    const [productData , setProductData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const LoadingMsg = <p>Loading....</p>;
    const errorMsg = <p>{error}</p>;

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/admin/product').then((res)=>{
            if (!res.ok){
                throw Error("Fetching is not successful")
            }else {
                return res.json()
            }
        }).then((data)=>{
            setProductData(data)
            setIsLoading(false)
            setError(null)
        }).catch((error)=>{
            setError(error.message)
            setIsLoading(false)
        })
    },[]);

    const  allProduct = productData && productData.map((data,idx)=>{
        return[
            <AllProductSingleData data={data} key={idx}/>
        ]
    });

    return(
        <div className="page-wrapper">

            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Product</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Product</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="mt-1 mb-4">
                            <button type="button" data-toggle="modal" data-target="#addProduct" className="btn btn-sm btn-primary">Add Category First</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="mt-1 mb-4">
                            <h3>Product</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Slug</th>
                                            <th>Stock</th>
                                            <th>Photo</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {error && errorMsg}
                                        {isLoading && LoadingMsg}
                                        {allProduct}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AddProduct/>

            </div>
        </div>
    )
}
export default Product;