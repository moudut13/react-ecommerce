import React from "react";
import Up from "./Up";
import Down from "./Down";
import axios from "axios";
const AllTagSingle = (props) => {
  const {data} = props;
  const { name , slug , status , id} = data;

  const handelTagDelete = (id) => {
      axios.delete('http://127.0.0.1:8000/api/admin/tag/'+id)
  }
  return(
      <tr>
        <td>{name}</td>
        <td>{slug}</td>
        <td>{status ? <Up id={id}/> : <Down id={id}/> }</td>
        <td><a className="btn btn-sm btn-danger" onClick={() => handelTagDelete(id)}>Delete</a></td>
      </tr>
  )
}
export default AllTagSingle