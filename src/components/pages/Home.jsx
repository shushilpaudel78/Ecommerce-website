import React from 'react'
import Nav from '../common/Nav'
import About_last_cart from '../common/About_last_cart'
import Product_hero from '../Home/product_hero'
import Product_time from '../Home/product_time'
import Product_viewproduct from '../Home/Product_viewproduct'
import Product_catagory from '../Home/Product_catagory'
import Product_selling from '../Home/Product_selling'
import Product_speaker from '../Home/Product_speaker'
import Product_ours from '../Home/Product_ours'
import Product_features from '../Home/Product_features'
import Footer from '../common/Footer'
import Counter from '../Home/Counter'

const Home = () => {
    return (
        <>

            <Nav />
            <Product_hero />
            <Product_time />
            <Product_viewproduct />
            <Product_catagory />
            <Product_selling />
            <Counter />
            <Product_speaker />
            <Product_ours />
            <Product_features />
            <About_last_cart />
            <Footer />

        </>
    )
}

export default Home
