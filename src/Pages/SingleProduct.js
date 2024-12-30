/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useParams } from "react-router-dom";
import { products } from "../DataPath/products";
import Headerimage from "../components/Headerimage";
import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import SingleCard from "../components/SingleCard";
import { useDispatch } from 'react-redux';
import { addWithQuantity } from '../Redux/redux';

const SingleProduct = () => {
    const [category, setCategory] = useState(1);
    const [reviewToggle, setReviewToggle] = useState(false);
    const [quantity, setQuantity] = useState(1); 

    console.log('shoppage input value>>', quantity);
    const { id } = useParams();
    // const item = products.find(item => item.id == parseInt(id));
    // eslint-disable-next-line eqeqeq
    const item = products.find(item => item.id == parseInt(id, 10));

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addWithQuantity({ item, quantity }));
    };

    useEffect(() => {
        setCategory(item.category);
        window.scrollTo(0, 0);
    }, [item.id,item.category]);

    const toggleView = () => {
        setReviewToggle(!reviewToggle);
    };

    const handleChange = (event) => {
        const newValue = parseInt(event.target.value); 
        setQuantity(newValue >= 1 ? newValue : 1); 
    };

    return (
        <>
            <Headerimage productname={item.productName} />
            <div className="container-fluid d-flex justify-content-center align-items-center singelpordut">
                <div className="row productimageDetails">
                    <div className="col-xs-12 col-md-12 col-lg-5">
                        <img className="img-fluid" src={item.imgUrl} alt='images' />
                    </div>
                    <div className="col-xs-12 col-md-12 col-lg-7">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <p className="fs-2 fw-medium">{item.productName}</p>
                            </div>
                            <div className="col-12 mb-4 d-flex">
                                <Rating className="me-5" name="read-only" value={+item.reviews[0].rating} readOnly />
                                <p>{+item.reviews[0].rating} ratings</p>
                            </div>
                            <div className="col-12 mb-4 d-flex align-items-center">
                                <p className="me-5 fs-3 fw-medium text-dark">${item.price}</p>
                                <p>category {item.category}</p>
                            </div>
                            <div className="col-12 mb-4 d-flex align-items-center">
                                <p>{item.shortDesc}</p>
                            </div>
                            <div className="col-12 mb-5 d-flex align-items-center">
                                <input value={quantity} onChange={handleChange} className="form-control w-25" type="number" />
                            </div>
                            <div className="col-12 mb-5 d-flex align-items-center">
                                <button onClick={handleAdd} className="addbtocart">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-5 my-5 singelpordut">
                <div className={`col-12 d-flex`}>
                    <p onClick={toggleView} className={`me-5 fw-medium ${reviewToggle ? 'togglegray' : 'toggle'}`}>Description</p>
                    <p onClick={toggleView} className={`fw-medium ${reviewToggle ? 'toggle' : 'togglegray'}`}>reviews (1)</p>
                </div>
                <div className="col-12 d-flex">
                    <p className={`${reviewToggle ? 'd-none' : 'd-flex'}`}>{item.reviews[0].text}</p>
                    <p className={`${reviewToggle ? 'd-flex' : 'd-none'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                </div>
            </div>
            <p className="text-dark ms-5 my-5 fs-1 fw-medium">You might also like</p>
            <div className="container-fluid pb-5 d-flex justify-content-center home">
                <div className={`row w-75`}>
                    {products.length > 0 ? (
                        products.filter(product => product.category.includes(category)).map((product) => (
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4" key={product.id}>
                                <SingleCard product={product} />
                            </div>
                        ))
                    ) : (
                        <center className="mt-5">
                            <button className="btn btn-success w-50" type="button" disabled>
                                <span className="sr-only">Loading...</span>
                            </button>
                        </center>
                    )}
                </div>
            </div>
        </>
    );
}

export default SingleProduct;
