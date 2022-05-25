import React from "react";
import axios from "axios";
import Up from "./Up";
import Down from "./Down";

const SingleCategoryThird = (props) =>{
    const {data} = props
    const {name , slug , parent , parentSecond , status , id } = data;

    const handelCategoryThirdDelete = (id) => {
        axios.delete('http://127.0.0.1:8000/api/admin/category-third/'+id)
    }

    return(
        <tr>
            <td>{name}</td>
            <td>{slug}</td>
            <td>{parent}</td>
            <td>{parentSecond}</td>
            <td>Photo</td>
            <td>{status ? <Up id={id}/> : <Down id={id}/> }</td>
            <td><button className="btn btn-sm btn-danger" onClick={() => handelCategoryThirdDelete(id)}>Delete</button></td>
        </tr>
    )
}
export default SingleCategoryThird;