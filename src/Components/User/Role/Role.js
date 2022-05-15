import React ,{useState , useEffect} from "react";
import {Link} from "react-router-dom";

import AddRole from "./AddRole";
import AllRoleSingle from "./AllRoleSingle";


const Role = () => {

    const [roleData, setRoleData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const LoadingMsg = <p>Loading....</p>;
    const errorMsg = <p>{error}</p>;

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/admin/role').then((res)=>{
            if (!res.ok){
                throw Error("Fetching is not successful")
            }else {
                return res.json()
            }
        }).then((data)=>{
            setRoleData(data)
            setIsLoading(false)
            setError(null)
        }).catch((error)=>{
            setError(error.message)
            setIsLoading(false)
        })

    },[]);


    const allRole = roleData && roleData.map((data,id)=>{
        return[
            <AllRoleSingle key={id} data={data}/>
        ]
    })

    return(
        <div className="page-wrapper">

            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Role</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Role</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="mt-1 mb-4">
                            <button type="button" data-toggle="modal" data-target="#addRole" className="btn btn-sm btn-primary">Add Role</button>
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
                                            <th>Role Name</th>
                                            <th>Slug</th>
                                            <th>Permission</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            { error && errorMsg}
                                            {isLoading && LoadingMsg}
                                            {allRole}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AddRole/>
            </div>
        </div>
    )
}
export default Role;