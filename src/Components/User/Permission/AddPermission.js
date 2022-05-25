import React ,{useState} from "react";
import axios from "axios";
import swal from "sweetalert";

const AddPermission = () => {

    const [name,setName] = useState('');
    const [nameError, setNameError] = useState('');

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
    const onPermissionSubmit = (e) => {
        e.preventDefault();
        if (Validation()){
            axios.post('http://127.0.0.1:8000/api/admin/permission', {
                name: name,
            }).then(function (response) {
                /*console.log(response);*/
            })
        }
        setName('');
    }


    return(
      <div className="modal fade" id="addPermission">
          <div className="modal-dialog modal-dialog-centered" role="document">
              <form onSubmit={onPermissionSubmit}>
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title">Add Permission</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div className="modal-body">
                          <div className="form-group">
                              <label htmlFor="name">Permission Name</label>
                              <input type="text"
                                     name="permission"
                                     onChange={handleChange}
                                     className="form-control"
                                     id="name"
                                     value={name}
                              />
                          </div>
                          <strong>{nameError}</strong>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="submit" className="btn btn-primary">Add Permission</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  )
}
export default AddPermission;