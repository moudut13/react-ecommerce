import React from "react";
const SingleCategoryThird = (props) =>{
    const {data} = props
    const {name , slug , parent , parentSecond} = data
    return(
        <tr>
            <td>{name}</td>
            <td>{slug}</td>
            <td>{parent}</td>
            <td>{parentSecond}</td>
            <td>Photo</td>
            <td>status</td>
            <td><button className="btn btn-sm btn-danger">Delete</button></td>
        </tr>
    )
}
export default SingleCategoryThird;