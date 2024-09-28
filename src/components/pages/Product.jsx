import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import About_last_cart from '../About/About_last_cart'
import Product_hero from '../product/Product_hero'
import Product_time from '../product/Product_time'
import Product_viewproduct from '../product/Product_viewproduct'
import Product_catagory from '../product/Product_catagory'
import Product_selling from '../product/Product_selling'
import Product_speaker from '../product/Product_speaker'
import Product_ours from '../product/Product_ours'
import Product_features from '../product/Product_features'

const Product = () => {
    return (
        <>

            <Nav />
            <Product_hero />
            <Product_time />
            <Product_viewproduct />
            <Product_catagory />
            <Product_selling />
            <Product_speaker />
            <Product_ours />
            <Product_features />

            

        

            



        
            <About_last_cart />
            <Footer />

        </>
    )
}

export default Product
