import React , {useState,useEffect} from "react";
import Select from 'react-select';


const AddProduct = () => {
    const [categoryFirst , setCategoryFirst] = useState();
    const [categorySecond , setCategorySecond] = useState();
    const [categoryThird , setCategoryThird] = useState();
    const [tag , setTag] = useState();
    const [errorName , setErrorName] = useState();
    const [product ,setProduct] = useState({
        name: '',
    });
    const { name } = product;

    const Validation = () => {
        if (!name > 0) {
            setErrorName( "Name Field Are Required!");
        }else {
            return true;
        }
    }

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/admin/category-first').then((res)=>{
            return res.json()
        }).then((data)=>{
            setCategoryFirst(data)
        })
    },[]);

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/admin/category-second').then((res)=>{
            return res.json()
        }).then((data)=>{
            setCategorySecond(data)
        })
    },[]);

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/admin/category-third').then((res)=>{
            return res.json()
        }).then((data)=>{
            setCategoryThird(data)
        })
    },[]);

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/admin/tag').then((res)=>{
            return res.json()
        }).then((data)=>{
            setTag(data)
        })
    },[]);
    


    const onProductSubmit = (e) => {
        e.preventDefault();
        if (Validation()){}
    }

    const CategoryFirstData = categoryFirst && categoryFirst.map((data,id)=>{
        return [<option key={id} value={data.name}> {data.name} </option>]
    })

    const CategorySecondData = categorySecond && categorySecond.map((dataSecond,id)=>{
        return[
            <option key={id} value={dataSecond.name}>{dataSecond.name}</option>
        ]
    })

    const CategoryThirdData = categoryThird && categoryThird.map((dataThird,id)=>{
        return[
            <option key={id} value={dataThird.name}>{dataThird.name}</option>
        ]
    })

    return(
        <div className="modal fade" id="addProduct">
            <div className="modal-dialog modal-xl" role="document">
                <form onSubmit={onProductSubmit}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Product</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="name">Status</label>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <label>
                                                    <input type="radio" name="radio" /> Publish
                                                </label>
                                            </div>
                                            <div className="col-md-2">
                                                <label>
                                                    <input type="radio" name="radio" /> Unpublished
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="form-group">
                                        <label htmlFor="name">Product Name</label>
                                        <input type="text"
                                           className="form-control"
                                           id="name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Regular Price</label>
                                        <input type="number"
                                               className="form-control"
                                               id="name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Sale Price</label>
                                        <input type="number"
                                               className="form-control"
                                               id="name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">SKU</label>
                                        <input type="text"
                                               className="form-control"
                                               id="name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Stock</label>
                                        <input type="number"
                                               className="form-control"
                                               id="name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Short Description</label>
                                        <textarea
                                            rows="3"
                                            cols="5"
                                            className="form-control"
                                            placeholder="Short...........">
                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Long Description</label>
                                        <textarea
                                            rows="4"
                                            cols="5"
                                            className="form-control"
                                            placeholder="Long.............">
                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="photo">Photo</label>
                                        <input type="file" className="form-control-file" id="photo"/>
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <div className="form-group">
                                        <label htmlFor="name">First Category</label>
                                        <select className="form-control">
                                            <option>-- Select --</option>
                                            {CategoryFirstData}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Second Category</label>
                                        <select className="form-control">
                                            <option>-- Select --</option>
                                            {CategorySecondData}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Third Category</label>
                                        <select className="form-control">
                                            <option>-- Select --</option>
                                            {CategoryThirdData}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Color</label>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" name="checkbox"/> Option 1
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" name="checkbox"/> Option 2
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" name="checkbox"/> Option 3
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Size</label>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" name="checkbox"/> Option 1
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" name="checkbox"/> Option 2
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" name="checkbox"/> Option 3
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Hot Deal</label>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <label>
                                                    <input type="radio" name="radio"/> Yes
                                                </label>
                                            </div>
                                            <div className="col-md-2">
                                                <label>
                                                    <input type="radio" name="radio"/> Not
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">featured</label>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <label>
                                                    <input type="radio" name="radio" /> Yes
                                                </label>
                                            </div>
                                            <div className="col-md-2">
                                                <label>
                                                    <input type="radio" name="radio"/> Not
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="name">Tags name</label>
                                        <Select
                                            isMulti
                                            name="colors"
                                            options={tag}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Add Product</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddProduct;