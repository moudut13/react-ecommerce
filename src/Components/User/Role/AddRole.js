import React ,{useState,useEffect} from "react";
import axios from "axios";
const AddRole = () => {

    const [permission,setPermission] = useState([])
    const [name,setName] = useState('')
    const [perName,setPerName] = useState([])
    const [nameError, setNameError] = useState()

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/admin/permission').then((res)=>{
                return res.json()
        }).then((data)=>{
            setPermission(data)

        })
    },[]);

    const handlePerChange = (e) =>{
        const name = e.target.value;
        setPerName([...perName,name]);
    }

    const perList =  permission.map((data,id)=>{
        return [
            <div className="form-check">
                <input name={data.name} onClick={handlePerChange} className="form-check-input" type="checkbox" value={data.name} id={data.name} />
                <label className="form-check-label" htmlFor={data.name}>
                    {data.name}
                </label>
            </div>
        ]
    });

    const Validation = () => {
        if (!name > 0) {
            setNameError( "Name Field Are Required!");
        }else {
            return true;
        }
    }
    const handleChange = (e) =>{
        setName(e.target.value)
    }

    const onRoleSubmit = (e) => {
        e.preventDefault();
        if (Validation()){
            axios.post('http://127.0.0.1:8000/api/admin/role', {
                name: name,
                permissionname: perName,
            }).then(function (response) {
                /*console.log(response);*/
            })
        }
        setName('');
        setPerName([null])
    }

    return(
        <div className="modal fade" id="addRole">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <form onSubmit={onRoleSubmit}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Role</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="name">Role Name</label>
                                <input
                                    name="name"
                                    onChange={handleChange}
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={name}
                                />
                            </div>
                            <strong>{nameError}</strong>
                            <div className="form-group">
                                {perList}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Add Role</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddRole;