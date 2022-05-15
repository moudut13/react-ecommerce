import {Link} from "react-router-dom";
import CategoryFirst from "./First/CategoryFirst";
import CategorySecond from "./Second/CategorySecond";
import CategoryThird from "./Third/CategoryThird";

const Category = () => {
    return(
        <div className="page-wrapper">

            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Category</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li className="breadcrumb-item active">Category</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <CategoryFirst/>
                <CategorySecond/>
                <CategoryThird/>
            </div>
        </div>
    )
}
export default Category;