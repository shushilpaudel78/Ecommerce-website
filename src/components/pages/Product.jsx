import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import About_last_cart from '../About/About_last_cart'
import Product_hero from '../product/Product_hero'
import Product_time from '../product/Product_time'
import Product_viewproduct from '../product/Product_viewproduct'
import Product_catagory from '../product/Product_catagory'
import Product_selling from '../product/Product_selling'

const Product = () => {
    return (
        <>

            <Nav />
            <Product_hero />
            <Product_time />
            <Product_viewproduct />
            <Product_catagory />
            <Product_selling />



        
            <About_last_cart />
            <Footer />

        </>
    )
}

export default Product
