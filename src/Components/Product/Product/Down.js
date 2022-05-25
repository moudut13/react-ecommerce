import React from "react";
import axios from "axios";
const Down = (props) => {
    const {id} = props;
    const handelProductUpdate = (id) => {
        axios.put('http://127.0.0.1:8000/api/admin/product/' + id, {
            status: true,
        }).then(function (response) {
            /*console.log(response);*/
        })
    }
    return[
        <button className="btn btn-danger" onClick={() => handelProductUpdate(id)}><i className="fa fa-thumbs-down fa-1x" aria-hidden="true"></i></button>
    ]

}
export default Down;