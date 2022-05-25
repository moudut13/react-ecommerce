import React , {useState ,useEffect } from "react";
import {Link} from "react-router-dom";

import AddUser from "./AddUser";
import AllUserSingle from "./AllUserSingle";




const Home = () => {

  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const LoadingMsg = <p>Loading....</p>;
  const errorMsg = <p>{error}</p>;

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/admin/user').then((res)=>{
      if (!res.ok){
        throw Error("Fetching is not successful")
      }else {
        return res.json()
      }
    }).then((data)=>{
      setUserData(data)
      setIsLoading(false)
      setError(null)
    }).catch((error)=>{
      setError(error.message)
      setIsLoading(false)
    })

  },[]);

  const allUserData = userData && userData.map((data,id)=>{
    return[
      <AllUserSingle key={id} data={data}/>
    ]
  })


  return(
      <div className="page-wrapper">

        <div className="content container-fluid">

          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">User</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                  <li className="breadcrumb-item active">User</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="mt-1 mb-4">
                <button type="button" data-toggle="modal" data-target="#addUser" className="btn btn-sm btn-primary">Add User</button>
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
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                      </thead>
                      <tbody>
                        {error && errorMsg}
                        {isLoading && LoadingMsg}
                        {allUserData}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AddUser/>
        </div>
      </div>
  )
}
export default Home;