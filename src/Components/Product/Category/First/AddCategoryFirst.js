import React ,{useState} from "react";
import axios from "axios";
const AddCategoryFirst = () => {
    const [name,setName] = useState('');
    const [photo,setPhoto] = useState('');
    const [ErrorName,setErrorName] = useState('');
    const [ErrorPhoto,setErrorPhoto] = useState('');

    const Validation = () => {
        if (!name > 0 ) {
            setErrorName( "Name Field Are Required!");
        }
        /*else if (!photo > 0) {
            setErrorPhoto( "Photo Field Are Required!");
        }*/else {
            return true;
        }
    }

    const handleInputChange = (e) =>{
        setName(e.target.value);
    }

    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0])
        console.log(e.target.files[0])
    }

    const onFirstCategorySubmit = (e) =>{
        e.preventDefault();
        if (Validation()){
            axios.post('http://127.0.0.1:8000/api/admin/category-first', {
                name: name,
                photo : photo,
            }).then(function (response) {
                /*console.log(response);*/

            })
        }
        setName('');
        //console.log(photo.name);


    }

    return(
        <div className="modal fade" id="addCategoryFirst">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <form onSubmit={onFirstCategorySubmit}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Category First</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="name">Category Name</label>
                                <input
                                    name="name"
                                    onChange={handleInputChange}
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={name}
                                />
                            </div>
                            <strong>{ErrorName}</strong>
                            <div className="form-group">
                                <label htmlFor="photo">Photo</label>
                                <input
                                    name="photo[]"
                                    onChange={handlePhotoChange}
                                    type="file"
                                    className="form-control-file"
                                    id="photo"
                                    />
                            </div>
                            <strong>{ErrorPhoto}</strong>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Add Category</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddCategoryFirst;