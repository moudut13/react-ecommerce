import React from "react";
import axios from "axios";
const Up = (props) => {
    const {id} = props;
    const handelTagUpdate = (id) => {
        axios.put('http://127.0.0.1:8000/api/admin/tag/' + id, {
            status: false,
        }).then(function (response) {
            /*console.log(response);*/
        })
        console.log(id);
    }
    return[
            <button className="btn btn-primary" onClick={() => handelTagUpdate(id)}><i className="fa fa-thumbs-up fa-1x" aria-hidden="true"></i></button>
        ]
}
export default Up