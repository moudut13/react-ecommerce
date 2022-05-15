import React from "react";
const AddProduct = () => {
    return(
        <div className="modal fade" id="addProduct">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <form>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Product</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
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