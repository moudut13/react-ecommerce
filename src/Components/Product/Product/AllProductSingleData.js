import React from "react";
import axios from "axios";
import Up from "../Product/Up";
import Down from "../Product/Down";
const AllProductSingleData = (props) => {
  const {data } = props
  const { name , slug , stock , id , status } = data

  const handelPermissionDelete = (id) => {
    axios.delete('http://127.0.0.1:8000/api/admin/product/'+id)
  }
    return(
        <tr>
          <td>{name}</td>
          <td>{slug}</td>
          <td>{stock}</td>
          <td>photo</td>
          <td>{status ? <Up id={id}/> : <Down id={id}/> }</td>
          <td>
              <button className="btn btn-sm btn-primary mr-1">View</button>
              <button className="btn btn-sm btn-info">Edit</button>
              <button className="btn btn-sm btn-danger" onClick={() => handelPermissionDelete(id)}>Delete</button>
          </td>
        </tr>
    )
}
export default AllProductSingleData;