import React from "react";

const AllPermissionSingle = (props) => {
    const {data} = props;
    const {num} = props;

    return(
        <tr>
            <td>{data.name}</td>
            <td>{data.slug}</td>
            <td>{data.slug}</td>
            <td><a className="btn btn-sm btn-danger">Delete</a></td>
        </tr>
    )

}
export default AllPermissionSingle;