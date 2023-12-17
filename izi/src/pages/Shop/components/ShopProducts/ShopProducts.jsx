import React from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import { FaFilter } from "react-icons/fa";
import { useSelector } from 'react-redux';
import "./shopProducts.scss";

const ShopProducts = () => {
    const products = useSelector((state) => state.products.products)
    return (
        <div className="shop-products">
            <div className="filter-part d-flex  justify-content-between py-5">
                <button className="general-button">
                    <FaFilter /> <span className='ps-1'>FILTER</span>
                </button>
                <select name="sort-list" id="sort-list">
                    <option>Default sorting</option>
                </select>
            </div>
            <div className="row">
                {products.map((item) => (
                    <ProductCard
                        key={item.id}
                        item={item}
                        image={item.image}
                        title={item.title}
                        category={item.category}
                        price={item.price}
                        oldPrice={item.oldPrice}
                    />
                ))}
            </div>
        </div>
    )
}

export default ShopProducts;