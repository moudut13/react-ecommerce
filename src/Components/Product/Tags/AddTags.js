const AddTags = () => {
    return(
        <div className="modal fade" id="addTags">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <form>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Tag</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="name">Tag Name</label>
                                <input type="text"
                                       className="form-control"
                                       id="name"
                                       placeholder="Tag Name"
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Add Tag</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddTags;