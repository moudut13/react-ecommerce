import axios from "axios";
import React from "react";

const Down = (props) => {
    const {id} = props;
    const handelRoleUpdate = (id) => {
        axios.put('http://127.0.0.1:8000/api/admin/role/' + id, {
            status: true,
        }).then(function (response) {
            /*console.log(response);*/
        })
    }
    return[
        <button className="btn btn-danger" onClick={() => handelRoleUpdate(id)}><i className="fa fa-thumbs-down fa-1x" aria-hidden="true"></i></button>
    ]
}
export default Down;