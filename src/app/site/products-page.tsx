import React from 'react';
import { ProductCard } from "@/components/product-card"

const ProductsPage = () => {
    return (
        <>
        <div className="container mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
                title = "IMAGEN DE PRUEBA"
                image = "https://d1d5i0xjsb5dtw.cloudfront.net/sclera/toro.jpeg"
                description = "DECRIPCION PRODUCTO"
                price = " 22.0 $"
            />
            <ProductCard
                title = "IMAGEN DE PRUEBA"
                image = "https://d1d5i0xjsb5dtw.cloudfront.net/sclera/toro.jpeg"
                description = "DECRIPCION PRODUCTO"
                price = " 22.0 $"
            />
            <ProductCard
                title = "IMAGEN DE PRUEBA"
                image = "https://d1d5i0xjsb5dtw.cloudfront.net/sclera/toro.jpeg"
                description = "DECRIPCION PRODUCTO"
                price = " 22.0 $"
            />
            <ProductCard
                title = "IMAGEN DE PRUEBA"
                image = "https://d1d5i0xjsb5dtw.cloudfront.net/sclera/toro.jpeg"
                description = "DECRIPCION PRODUCTO"
                price = " 22.0 $"
            />    
        </div>
        </>
    )
};

export default ProductsPage;