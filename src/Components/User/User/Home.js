import React from "react";
import {Link} from "react-router-dom";

import AddUser from "./AddUser";


const Home = () => {
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
                        <tr>
                          <td>Shuvo Ahmad</td>
                          <td>shuvo-ahmad</td>
                          <td>sa@gmail.com</td>
                          <td>Admin</td>
                          <td>Status</td>
                          <td>
                            <button className="btn btn-sm btn-primary mr-1">View</button>
                            <button className="btn btn-sm btn-info">Edit</button>
                            <button className="btn btn-sm btn-danger ml-1">Delete</button>
                          </td>
                        </tr>
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