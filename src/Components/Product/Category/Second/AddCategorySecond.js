import React , {useState,useEffect} from "react";
import axios from "axios";
const AddCategorySecond = () => {
    const [name,setName] = useState()
    const [categoryFirst,setCategoryFirst] = useState()
    const [parent,setParent] = useState();
    const [errorName, setErrorName] = useState()

    const Validation = () => {
        if (!name > 0) {
            setErrorName( "Name Field Are Required!");
        }else {
            return true;
        }
    }
    const handleInputChange = (e) =>{
        setName(e.target.value);
    }
    const handleSelectChange = (e) =>{
        setCategoryFirst(e.target.value);
    }

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/admin/category-first').then((res)=>{
            return res.json()
        }).then((data)=>{
            setParent(data)
        })
    },[]);

    const onCategorySecondSubmit = (e) =>{
        e.preventDefault()
        if (Validation()){
            axios.post('http://127.0.0.1:8000/api/admin/category-second', {
                name: name,
                categoryfirst : categoryFirst,
            }).then(function (response) {
                /*console.log(response);*/

            })
        }
        setName('');
    }

    const CategoryFirst = parent && parent.map((data,id)=>{
        return [<option key={id} value={data.name}> {data.name} </option>]
    })

    return(
        <div className="modal fade" id="addCategorySecond">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <form onSubmit={onCategorySecondSubmit}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Category Second</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="parent">Parent Category</label>
                                <select onChange={handleSelectChange} className="form-control" id="parent" name="CategoryFirst">
                                    <option>--Select--</option>
                                    {CategoryFirst}
                                </select>
                            </div>
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
                            <strong>{errorName}</strong>
                            <div className="form-group">
                                <label htmlFor="photo">Photo</label>
                                <input type="file" className="form-control-file" id="photo"/>
                            </div>
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
export default AddCategorySecond;