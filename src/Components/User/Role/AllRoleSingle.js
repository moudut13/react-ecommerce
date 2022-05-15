import React from "react";
import SinglePermission from "./SinglePermission";

const AllRoleSingle = (props) => {
  const {data} = props;
  const permissionList = JSON.parse(data.permission).map((dataList, id)=>{
    return <SinglePermission key={id} list={dataList}/>
  })


  return(
      <tr>
        <td>{data.name}</td>
        <td>{data.slug}</td>
        <td>{permissionList}</td>
        <td>{data.status ? "ok" : "Not ok"}</td>
        <td><a className="btn btn-sm btn-danger">Delete</a></td>
      </tr>
  )
}
export default AllRoleSingle