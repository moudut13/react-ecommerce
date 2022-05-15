import React ,{useState,useEffect} from "react";
import AddCategoryFirst from "./AddCategoryFirst";
import SingleCategoryFirst from "./SingleCategoryFirst";


const CategoryFirst = () => {
    const [category, setCategory] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const LoadingMsg = <p>Loading....</p>;
    const errorMsg = <p>{error}</p>;

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/admin/category-first').then((res)=>{
            if (!res.ok){
                throw Error("Fetching is not successful")
            }else {
                return res.json()
            }
        }).then((data)=>{
            setCategory(data)
            setIsLoading(false)
            setError(null)
        }).catch((error)=>{
            setError(error.message)
            setIsLoading(false)
        })
    },[]);

    const allCategoryFirst = category && category.map((data,id)=>{
        return[
            <SingleCategoryFirst data={data} key={id} />
        ]
    })

    return(
      <>
          <div className="row">
              <div className="col-sm-12">
                  <div className="mt-1 mb-4">
                      <button type="button" data-toggle="modal" data-target="#addCategoryFirst" className="btn btn-sm btn-primary">Add Category First</button>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-12">
                  <div className="mt-1 mb-4">
                      <h3>Category First</h3>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-12">
                  <div className="card">
                      <div className="card-body">
                          <div className="table-responsive">
                              <table className="table table-striped">
                                  <thead>
                                  <tr>
                                      <th>Name</th>
                                      <th>Slug</th>
                                      <th>Photo</th>
                                      <th>Status</th>
                                      <th>Action</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  { error && errorMsg}
                                  {isLoading && LoadingMsg}
                                  {allCategoryFirst}
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <AddCategoryFirst/>
      </>
  )
}
export default CategoryFirst;