import React from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import "./homeProducts.scss";
import { products } from "../../../../data/products";
const HomeProducts = () => {
    return (
        <div className="home-products page-container">
            <h3 data-a="fade-up" className='text-center part-title'>Our Latest Products</h3>
            <div data-a="fade-up" className="divider-part">
                <div className="divider"></div>
            </div>
            <div className="row">
                {products.slice(0, 4).map((item) => (
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

export default HomeProducts;