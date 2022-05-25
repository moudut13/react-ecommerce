import React from "react";
import axios from "axios";
import Up from "./Up";
import Down from "./Down";

const SingleCategorySecond = (props) => {
    const {data} = props;
    const { name ,slug , parent , status , id } = data;
    const handelCategorySecondDelete = (id) => {
        axios.delete('http://127.0.0.1:8000/api/admin/category-second/'+id)
    }
    return(
        <tr>
            <td>{name}</td>
            <td>{slug}</td>
            <td>{parent}</td>
            <td>photo</td>
            <td>{status ? <Up id={id}/> : <Down id={id}/> }</td>
            <td><button className="btn btn-sm btn-danger" onClick={() => handelCategorySecondDelete(id)}>Delete</button></td>
        </tr>
    );
}
export default SingleCategorySecond;