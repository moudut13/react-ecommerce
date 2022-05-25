import React from "react";
import axios from "axios";

import SinglePermission from "./SinglePermission";
import Up from "./Up";
import Down from "./Down";


const AllRoleSingle = (props) => {
  const {data} = props;
  const { name , slug , status , id } = data;
  const permissionList = JSON.parse(data.permission).map((dataList, id)=>{
    return <SinglePermission key={id} list={dataList}/>
  })

    const handelRoleDelete = (id) => {
        axios.delete('http://127.0.0.1:8000/api/admin/role/'+id)
    }
  return(
      <tr>
        <td>{name}</td>
        <td>{slug}</td>
        <td>{permissionList}</td>
        <td>{status ? <Up id={id}/> : <Down id={id}/> }</td>
        <td><a className="btn btn-sm btn-danger" onClick={() => handelRoleDelete(id)}>Delete</a></td>
      </tr>
  )
}
export default AllRoleSingle