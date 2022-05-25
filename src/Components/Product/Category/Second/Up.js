import axios from "axios";
import React from "react";

const Up = (props) => {
    const {id} = props;
    const handelCategorySecondUpdate = (id) => {
        axios.put('http://127.0.0.1:8000/api/admin/category-second/' + id, {
            status: false,
        }).then(function (response) {
            /*console.log(response);*/
        })
        console.log(id);
    }
    return[
        <button className="btn btn-primary" onClick={() => handelCategorySecondUpdate(id)}><i className="fa fa-thumbs-up fa-1x" aria-hidden="true"></i></button>
    ]
}
export default Up;