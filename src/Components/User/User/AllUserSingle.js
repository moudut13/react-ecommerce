import React from "react";
import axios from "axios";
import Up from "./Up";
import Down from "./Down";


const AllUserSingle = (props) => {
    const {data} = props;
    const { name , slug , email , status , id } = data;

    const handelUserDelete = (id) => {
        axios.delete('http://127.0.0.1:8000/api/admin/user/'+id)
    }

    return(
        <tr>
            <td>{name}</td>
            <td>{slug}</td>
            <td>{email}</td>
            <td>Admin</td>
            <td>{status ? <Up id={id}/> : <Down id={id}/> }</td>
            <td>
                <button className="btn btn-sm btn-primary mr-1">View</button>
                <button className="btn btn-sm btn-info">Edit</button>
                <button className="btn btn-sm btn-danger ml-1" onClick={() => handelUserDelete(id)}>Delete</button>
            </td>
        </tr>
    )

}
export default AllUserSingle;