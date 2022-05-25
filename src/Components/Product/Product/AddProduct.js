import React , {useState,useEffect} from "react";
import Select from 'react-select';
import axios from "axios";


const AddProduct = () => {
    const [categoryFirst , setCategoryFirst] = useState();
    const [categorySecond , setCategorySecond] = useState();
    const [categoryThird , setCategoryThird] = useState();
    const [tag , setTag] = useState();
    const [errorName , setErrorName] = useState();
    const [product ,setProduct] = useState({
        'category_first_id' : '',
        'category_second_id': '',
        'category_third_id' : '',
        'tag_id'            : '',
        'name'              : '',
        'sku'               : '',
        'stock'             : '',
        'short_desc'        : '',
        'long_desc'         : '',
        'regular_price'     : '',
        'sale_price'        : '',
        'gallery'           : '',
        'hot_deal'          : '',
        'featured_deal'     : '',
        'status'            : '',
    });

    const [ color , setColor ] = useState([])
    const [ size , setSize ] = useState([])

    const {
            category_first_id , category_second_id , category_third_id, tag_id,
            name , sku, stock, short_desc, long_desc, regular_price, sale_price,
            gallery, hot_deal, featured_deal, status
    } = product;

    const handleInputChange = (e) => {
        const name = e.target.name;
        setProduct((oldProduct) =>{
            return{
                ...oldProduct,[name] :e.target.value
            }
        })
    }
    
    const handleInputColorChange = (e) => {
        const name = e.target.value;
        setColor([...color,name]);
    }
    
    const handleInputSizeChange = (e) => {
        const name = e.target.value;
        setSize([...size,name]);
    }

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

     const tagDataList = [
        { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
        { value: 'blue', label: 'Blue', color: '#0052CC' },
        { value: 'purple', label: 'Purple', color: '#5243AA' },
        { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
        { value: 'orange', label: 'Orange', color: '#FF8B00' },
        { value: 'yellow', label: 'Yellow', color: '#FFC400' },
        { value: 'green', label: 'Green', color: '#36B37E' },
        { value: 'forest', label: 'Forest', color: '#00875A' },
        { value: 'slate', label: 'Slate', color: '#253858' },
        { value: 'silver', label: 'Silver', color: '#666666' },
    ];

    const onProductSubmit = (e) => {
        e.preventDefault();
        if (Validation()){
            axios.post('http://127.0.0.1:8000/api/admin/product', {
                name : name,
                sku : sku,
                stock : stock,
                short_desc: short_desc,
                long_desc : long_desc,
                regular_price : regular_price,
                sale_price : sale_price,
                color : color,
                size : size,
                status: status,
                hot_deal: hot_deal,
                featured_deal: featured_deal,
            }).then(function (response) {
                /*console.log(response);*/
            })
            console.log(product);
        }
        console.log()

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
                                                    <input
                                                        onChange={handleInputChange}
                                                        type="radio"
                                                        name="status"
                                                        /> Publish
                                                </label>
                                            </div>
                                            <div className="col-md-2">
                                                <label>
                                                    <input
                                                        onChange={handleInputChange}
                                                        type="radio"
                                                        name="status"
                                                        /> Unpublished
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
                                        <input
                                            onChange={handleInputChange}
                                            name="name"
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            value={name}
                                        />
                                    </div>
                                    <strong>{errorName}</strong>
                                    <div className="form-group">
                                        <label htmlFor="name">Regular Price</label>
                                        <input
                                            onChange={handleInputChange}
                                            name="regular_price"
                                            value={regular_price}
                                            type="number"
                                            className="form-control"
                                            id="name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Sale Price</label>
                                        <input
                                            onChange={handleInputChange}
                                            name="sale_price"
                                            value={sale_price}
                                            type="number"
                                            className="form-control"
                                            id="name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">SKU</label>
                                        <input
                                            onChange={handleInputChange}
                                            name="sku"
                                            value={sku}
                                            type="text"
                                            className="form-control"
                                            id="name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Stock</label>
                                        <input
                                            onChange={handleInputChange}
                                            name="stock"
                                            value={stock}
                                            type="number"
                                            className="form-control"
                                            id="name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Short Description</label>
                                        <textarea
                                            onChange={handleInputChange}
                                            name="short_desc"
                                            value={short_desc}
                                            rows="3"
                                            cols="5"
                                            className="form-control"
                                        >
                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Long Description</label>
                                        <textarea
                                            onChange={handleInputChange}
                                            name="long_desc"
                                            value={long_desc}
                                            rows="4"
                                            cols="5"
                                            className="form-control"
                                        >
                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="photo">Photo</label>
                                        <input
                                            onChange={handleInputChange}
                                            name="gallery"
                                            value={gallery}
                                            type="file"
                                            className="form-control-file"
                                            id="photo"/>
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
                                                <input
                                                    onChange={handleInputColorChange}
                                                    name="color"
                                                    value="Red"
                                                    type="checkbox"/> Red
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input
                                                    onChange={handleInputColorChange}
                                                    type="checkbox"
                                                    name="color"
                                                    value="Green"/> Green
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input
                                                    onChange={handleInputColorChange}
                                                    type="checkbox"
                                                    name="color"
                                                    value="Yellow"/> Yellow
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Size</label>
                                        <div className="checkbox">
                                            <label>
                                                <input
                                                    onChange={handleInputSizeChange}
                                                    type="checkbox"
                                                    name="size"
                                                    value="S"/> S
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input
                                                    onChange={handleInputSizeChange}
                                                    type="checkbox"
                                                    name="size"
                                                    value="M"/> M
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input
                                                    onChange={handleInputSizeChange}
                                                    type="checkbox"
                                                    name="size"
                                                    value="XL"/> XL
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Hot Deal</label>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <label>
                                                    <input
                                                        onChange={handleInputChange}
                                                        type="radio"
                                                        name="hot_deal"
                                                        /> Yes
                                                </label>
                                            </div>
                                            <div className="col-md-2">
                                                <label>
                                                    <input
                                                        onChange={handleInputChange}
                                                        type="radio"
                                                        name="hot_deal"
                                                        /> Not
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">featured</label>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <label>
                                                    <input
                                                        onChange={handleInputChange}
                                                        type="radio"
                                                        name="featured_deal"
                                                        /> Yes
                                                </label>
                                            </div>
                                            <div className="col-md-2">
                                                <label>
                                                    <input
                                                        onChange={handleInputChange}
                                                        type="radio"
                                                        name="featured_deal"
                                                        /> Not
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="name">Tags name</label>
                                        <Select
                                            isMulti
                                            name="tag_id"
                                            onChange={handleInputChange}
                                            options={tagDataList}
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

/*
*  sku : sku,
                stock : stock,
                short_desc: short_desc,
                long_desc : long_desc,
                regular_price : regular_price,
                sale_price : sale_price,
                hot_deal : hot_deal,
                featured_deal :featured_deal,
                status : status,
                color : color,
                size : size,
* */