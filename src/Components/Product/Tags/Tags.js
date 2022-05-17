import React ,{ useState , useEffect} from "react";
import {Link} from "react-router-dom";
import AddTags from "./AddTags";
import AllPermissionSingle from "../../User/Permission/AllPermissionSingle";
import AllTagSingle from "./AllTagSingle";


const Tags = () => {
    const [TagData, setTagData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const LoadingMsg = <p>Loading....</p>;
    const errorMsg = <p>{error}</p>;

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/admin/tag').then((res)=>{
            if (!res.ok){
                throw Error("Fetching is not successful")
            }else {
                return res.json()
            }
        }).then((data)=>{
            setTagData(data)
            setIsLoading(false)
            setError(null)
        }).catch((error)=>{
            setError(error.message)
            setIsLoading(false)
        })

    },[]);

    let num = 1;
    const allTag = TagData && TagData.map((data,id)=>{
        return[
            <AllTagSingle key={id} data={data} num={num}/>
        ]
    })


    return(
        <div className="page-wrapper">

            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Tags</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Tag</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="mt-1 mb-4">
                            <button type="button" data-toggle="modal" data-target="#addTags" className="btn btn-sm btn-primary">Add Tags</button>
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
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {error && errorMsg}
                                        {isLoading && LoadingMsg}
                                        {allTag}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <AddTags/>
            </div>
        </div>
    )
}
export default Tags;