import React from "react";
const SingleCategorySecond = (props) => {
    const {data} = props;
    const { name ,slug , parent} = data;
    return(
        <tr>
            <td>{name}</td>
            <td>{slug}</td>
            <td>{parent}</td>
            <td>photo</td>
            <td>status</td>
            <td><button className="btn btn-sm btn-danger">Delete</button></td>
        </tr>
    );
}
export default SingleCategorySecond;