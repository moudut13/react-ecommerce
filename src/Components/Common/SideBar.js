import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return(
      <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll">
              <div id="sidebar-menu" className="sidebar-menu">
                  <ul>
                      <li>
                          <Link to="/" ><i className="fe fe-home"></i> <span>Dashboard</span></Link>
                      </li>
                      <li className="menu-title">
                          <span>Product</span>
                      </li>
                      <li>
                          <Link to="product"><i className="fe fe-layout"></i> <span>Product</span></Link>
                      </li>
                      <li>
                          <Link to="category"><i className="fe fe-layout"></i> <span>Category</span></Link>
                      </li>
                      <li>
                          <Link to="tags"><i className="fe fe-layout"></i> <span>Tags</span></Link>
                      </li>
                      <li className="menu-title">
                          <span>Order</span>
                      </li>
                      <li>
                          <Link to="orders"><i className="fe fe-layout"></i> <span>Orders</span></Link>
                      </li>
                      <li className="menu-title">
                          <span>User</span>
                      </li>
                      <li>
                          <Link to="user"><i className="fe fe-layout"></i> <span>User</span></Link>
                      </li>
                      <li>
                          <Link to="role"><i className="fe fe-layout"></i> <span>Role</span></Link>
                      </li>
                      <li>
                          <Link to="permission"><i className="fe fe-layout"></i> <span>Permission</span></Link>
                      </li>
                      <li className="menu-title">
                          <span>Settings</span>
                      </li>
                      <li>
                          <Link to="settings"><i className="fe fe-layout"></i> <span>Settings</span></Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  )
}
export default SideBar;