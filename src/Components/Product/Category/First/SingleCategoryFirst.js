import React from "react";

const SingleCategoryFirst = (props) => {
    const {data} = props;
  return(
      <tr>
          <td>{data.name}</td>
          <td>{data.slug}</td>
          <td>photo</td>
          <td>status</td>
          <td><button className="btn btn-sm btn-danger">Delete</button></td>
      </tr>
  )
}
export default SingleCategoryFirst