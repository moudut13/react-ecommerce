import React ,{useState,useEffect} from "react";
import AddCategoryThird from "./AddCategoryThird";
import SingleCategoryThird from "./SingleCategoryThird";

const CategoryThird = () => {
    const [categoryThird, setCategoryThird] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const LoadingMsg = <p>Loading....</p>;
    const errorMsg = <p>{error}</p>;

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/admin/category-third').then((res)=>{
            if (!res.ok){
                throw Error("Fetching is not successful")
            }else {
                return res.json()
            }
        }).then((data)=>{
            setCategoryThird(data)
            setIsLoading(false)
            setError(null)
        }).catch((error)=>{
            setError(error.message)
            setIsLoading(false)
        })
    },[]);

    const allCategoryThird = categoryThird && categoryThird.map((data,id)=>{
            return <SingleCategoryThird data={data} key={data.id} />

    });

  return(
      <>
          <div className="row">
              <div className="col-sm-12">
                  <div className="mt-1 mb-4">
                      <button type="button" data-toggle="modal" data-target="#addCategoryThird" className="btn btn-sm btn-primary">Add Category Third</button>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-12">
                  <div className="mt-1 mb-4">
                      <h3>Category Third</h3>
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
                                      <th>Parent</th>
                                      <th>Second Parent</th>
                                      <th>Photo</th>
                                      <th>Status</th>
                                      <th>Action</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  {error && errorMsg}
                                  {isLoading && LoadingMsg}
                                  {allCategoryThird}
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <AddCategoryThird/>
      </>
  )
}
export default CategoryThird;