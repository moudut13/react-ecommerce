import React from "react";
import Select from 'react-select';


const AddProduct = () => {
    const colourOptions = [
        { value: 'ocean', label: 'Ocean', color: '#00B8D9'},
        { value: 'blue', label: 'Blue', color: '#0052CC'},
        { value: 'purple', label: 'Purple', color: '#5243AA' },
        { value: 'red', label: 'Red', color: '#FF5630'},
        { value: 'orange', label: 'Orange', color: '#FF8B00' },
        { value: 'yellow', label: 'Yellow', color: '#FFC400' },
        { value: 'green', label: 'Green', color: '#36B37E' },
        { value: 'forest', label: 'Forest', color: '#00875A' },
        { value: 'slate', label: 'Slate', color: '#253858' },
        { value: 'silver', label: 'Silver', color: '#666666' },
    ];
    return(
        <div className="modal fade" id="addProduct">
            <div className="modal-dialog modal-xl" role="document">
                <form>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Product</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="form-group">
                                    <label htmlFor="name">Category Name</label>
                                    <input type="text"
                                           className="form-control"
                                           id="name"
                                           placeholder="Tag Name"
                                    />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="photo">Photo</label>
                                    <input type="file" className="form-control-file" id="photo"/>
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="name">Tags name</label>
                                    <Select
                                        isMulti
                                        name="colors"
                                        options={colourOptions}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                    />
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