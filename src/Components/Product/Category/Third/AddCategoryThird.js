import React ,{useState,useEffect} from "react";
import axios from "axios";
const AddCategoryThird = () => {
    const [name,setName] = useState()
    const [categoryFirst,setCategoryFirst] = useState()
    const [categorySecond,setCategorySecond] = useState()
    const [parentFirst,setParentFirst] = useState();
    const [parentSecond,setParentSecond] = useState();
    const [errorName, setErrorName] = useState('')

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
    const handleSelectFirstChange = (e) =>{
        setCategoryFirst(e.target.value);
    }
    const handleSelectSecondChange = (e) =>{
        setCategorySecond(e.target.value);
    }

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/admin/category-first').then((res)=>{
            return res.json()
        }).then((data)=>{
            setParentFirst(data)
        })
    },[]);

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/admin/category-second').then((res)=>{
            return res.json()
        }).then((data)=>{
            setParentSecond(data)
        })
    },[]);

    const onCategoryThirdSubmit = (e) => {
      e.preventDefault();
        if (Validation()){
            axios.post('http://127.0.0.1:8000/api/admin/category-third', {
                name: name,
                categoryfirst : categoryFirst,
                categorysecond : categorySecond,
            }).then(function (response) {
                /*console.log(response);*/

            })
        }
        setName('');
    }

    const CategoryDataFirst = parentFirst && parentFirst.map((dataFirst, id)=>{
        return[
            <option key={id} value={dataFirst.name}>{dataFirst.name}</option>
        ]
    });
    const CategoryDataSecond = parentSecond && parentSecond.map((dataSecond,id)=>{
        return[
            <option key={id} value={dataSecond.name}>{dataSecond.name}</option>
        ]
    })


    return(
        <div className="modal fade" id="addCategoryThird">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <form onSubmit={onCategoryThirdSubmit}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Category Third</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="parent">Parent Category First</label>
                                <select onChange={handleSelectFirstChange} name="parentFirst" className="form-control" id="parent">
                                    <option>--Select--</option>
                                    {CategoryDataFirst}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="parentSecond">Parent Category Second</label>
                                <select onChange={handleSelectSecondChange} name="parentSecond" className="form-control" id="parentSecond">
                                    <option>--Select--</option>
                                    {CategoryDataSecond}
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
export default AddCategoryThird;