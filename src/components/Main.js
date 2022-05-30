
import { useState, useRef } from "react";
import React from 'react';
import './Main.css';


const AddProduct = () => {

    const [product, setProduct] = useState({
        productName: null,
        productPrice: null,
    })

    const [productList, setProductList] = useState([]);

    const handleInput = (e) => {

        const fieldname = e.target.name;
        const data = { ...product };

        switch (fieldname) {
            case "productName":
                data.productName = e.target.value
                break;
            case "productPrice":
                data.productPrice = e.target.value
                break;
        }
        setProduct(data);
    }

    const inputProduct = useRef();
    const inputPrice = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setProductList(prev => [...prev, product]);
        inputProduct.current.value = '';
        inputPrice.current.value = '';
    }

    const deleteProduct = (index) => {
        return setProductList(
            productList.filter((productList, i) => {
                return i !== index;
            })
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Product List</h2>
            <label>
                Product:
                <input type="text"
                    placeholder="Product Name"
                    ref={inputProduct}
                    name="productName"
                    autoFocus
                    onChange={handleInput} />
            </label>
            <br />
            <label>
                Price:
                <input type="number"
                    placeholder="Product Price"
                    ref={inputPrice}
                    name="productPrice"
                    step="0.01"
                    onChange={handleInput} />
            </label>
            <br />
            <button>
                Submit
            </button>
            <div>
                {productList.map((p, index) => (
                    <li key={p.productName}>{p.productName}: ${p.productPrice}
                        <button onClick={() => deleteProduct(index)}>Delete</button>
                    </li>
                ))}
            </div>

        </form>
    )
}

export default AddProduct;