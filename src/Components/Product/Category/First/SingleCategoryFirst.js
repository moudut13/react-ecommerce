import React from "react";
import axios from "axios";
import Up from "./Up";
import Down from "./Down";


const SingleCategoryFirst = (props) => {
    const {data} = props;
    const { name , slug , status , id} = data;
    const handelCategoryFirstDelete = (id) => {
        axios.delete('http://127.0.0.1:8000/api/admin/category-first/'+id)
    }

  return(
      <tr>
          <td>{name}</td>
          <td>{slug}</td>
          <td>photo</td>
          <td>{status ? <Up id={id}/> : <Down id={id}/> }</td>
          <td><button className="btn btn-sm btn-danger" onClick={() => handelCategoryFirstDelete(id)}>Delete</button></td>
      </tr>
  )
}
export default SingleCategoryFirst