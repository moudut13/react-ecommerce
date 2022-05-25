import React ,{useState ,useEffect} from "react";
import AddCategorySecond from "./AddCategorySecond";
import SingleCategorySecond from "./SingleCategorySecond";

const CategorySecond = () => {

    const [categorySecond, setCategorySecond] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const LoadingMsg = <p>Loading....</p>;
    const errorMsg = <p>{error}</p>;

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/admin/category-second').then((res)=>{
            if (!res.ok){
                throw Error("Fetching is not successful")
            }else {
                return res.json()
            }
        }).then((data)=>{
            setCategorySecond(data)
            setIsLoading(false)
            setError(null)
        }).catch((error)=>{
            setError(error.message)
            setIsLoading(false)
        })
    },[]);

    const allCategorySecond = categorySecond && categorySecond.map((data,id)=>{

            return <SingleCategorySecond data={data} key={data.id} />

    });

    return(
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="mt-1 mb-4">
                        <button type="button" data-toggle="modal" data-target="#addCategorySecond" className="btn btn-sm btn-primary">Add Category Second</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="mt-1 mb-4">
                        <h3>Category Second</h3>
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
                                        <th>Name</th>
                                        <th>Slug</th>
                                        <th>Parent</th>
                                        <th>photo</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {error && errorMsg}
                                        {isLoading && LoadingMsg}
                                        {allCategorySecond}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddCategorySecond/>
        </>
    )
}
export default CategorySecond;