// import './SingleProduct.module.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './SingleProduct.module.css'
import Footer from '../components/Footer'
import Ecommerce from '../components/Ecommerce'


const SingleProduct = (parentdata) => {
    console.log("data", parentdata)
    // const [param,setParam] = useState("")
    const params = useParams()
    console.log(params.id)


    const [singleProduct, setsingleProduct] = useState({});

    useEffect(() => {
        singleFetchProduct()
    }, [])
    const singleFetchProduct = async () => {
        try {
            const response = await axios.get(
                `https://fakestoreapi.com/products/${params.id}`)
            console.log("resp", response.data)
            setsingleProduct(response.data)
        } catch (error) {
            console.log(error.message)
        }

        console.log(singleProduct.title)
    }




    return (
        <>

            {/* <div className='productcontainer'>
                <img width={"200"} height={"300"} src={productData.image} alt="" />
                <h4><Link to={`/SingleProduct/${productData.id}`}>ASIM PICTURE</Link></h4>
                <h1>PRICE : {productData.price}</h1>
            </div> */}
            <Ecommerce />

            {/* <h1 className={style.h1}>SINGLE PRODUCT PAGE</h1> */}
            {/* {params.id} */}
            <div className={style.product}>
                 <img width={"200"} height={"300"} src={singleProduct.image} alt="" /> 
                <h4>
                    {singleProduct.title}
                </h4>
                <h1 className={style.h1}> PRICE: {singleProduct.price + "$"}</h1>
                <div className={style.button}> 
                    <button>BUY NOW</button>            <button>ADD TO CART</button>
                </div>
            </div>

            <div className={style.description}>
                <h2>PRODUCT NAME</h2>
                <p> {singleProduct.title}</p>
                <h2>DESCRIPTION..!</h2>
                    <p> {singleProduct.description}</p>
                    <h3>CATEGORY</h3>
                    <p> {singleProduct.category}</p>
                    <h4>PRICE</h4>
                    <p> {singleProduct.price}$</p>
                    {/* <h5>RATING</h5> <p>{singleProduct.rating.rate}</p> */}
                </div>

            <Footer />
        </>
    )
}

export default SingleProduct
