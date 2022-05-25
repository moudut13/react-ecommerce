import React , {useState} from "react";
import axios from "axios";

const AddUser = () => {
    const [addUser,setAddUser] = useState({
        'name' : '',
        'email' : '',
        'password' : '',
    });
    const [nameError, setNameError] = useState('');
    const { name , email , password } = addUser


    const Validation = () => {
        if (!name > 0) {
            setNameError( "Name Field Are Required!");
        }else {
            return true;
        }
    }

    const handleChange = (e) =>{
        const name = e.target.name;
        setAddUser((oldUser) =>{
            return{
                ...oldUser,[name] :e.target.value
            }
        })
    }
    const onAddUserSubmit = (e) => {
        e.preventDefault();
        if (Validation()){
            axios.post('http://127.0.0.1:8000/api/admin/user', {
                name: name,
                email: email,
                password: password,
            }).then(function (response) {
                /*console.log(response);*/
            })
        }

    }

    return(
        <div className="modal fade" id="addUser">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <form onSubmit={onAddUserSubmit}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add User</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    name="name"
                                    onChange={handleChange}
                                    value={name}
                                    type="text"
                                    className="form-control"
                                    id="name"
                                />
                            </div>
                            <strong>{nameError}</strong>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    name="email"
                                    onChange={handleChange}
                                    value={email}
                                    type="text"
                                    className="form-control"
                                    id="email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    name="password"
                                    onChange={handleChange}
                                    value={password}
                                    type="text"
                                    className="form-control"
                                    id="password"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="role">Role</label>
                                <select className="form-control" id="role">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="photo">Photo</label>
                                <input type="file" className="form-control-file" id="photo"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Add User</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddUser;