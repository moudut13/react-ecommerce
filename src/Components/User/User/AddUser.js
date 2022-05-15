const AddUser = () => {
    return(
        <div className="modal fade" id="addUser">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <form>
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
                                <input type="text"
                                       className="form-control"
                                       id="name"
                                       placeholder="Permission Name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Email</label>
                                <input type="text"
                                       className="form-control"
                                       id="name"
                                       placeholder="Email..."
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Password</label>
                                <input type="text"
                                       className="form-control"
                                       id="name"
                                       placeholder="Password...."
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