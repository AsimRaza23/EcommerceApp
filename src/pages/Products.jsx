import React, { useEffect, useState } from 'react'
// import style from './Ecommerce.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Ecommerce from '../components/Ecommerce'
import asim from "./pics/PSX_20240503_235446.jpg"
import SingleProduct from './SingleProduct'
import style from "./Products.module.css"
import Footer from '../components/Footer'

const Products = () => {
    // console.log(asim)

    const navigate = useNavigate()
    const productData = {
        image: asim,
        title: "ASIM RAZA PROFILE DEMO",
        price: "$3000",
        id: 100,
    }

    const parentData = () => {
        const data = { ...productData }
        console.log("data", data)
    }
    parentData()
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchData()
    }, []
    )
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products`);
            // console.log("response", response.data);
            setProducts(response.data);
        } catch (error) {
            console.log(error.message)
        }
        console.log("products", products)
    }
    
    const pageHandler = ()=>{
        // <SingleProduct />
        // console.log(navigate)
        // navigate("./SingleProduct")
        // console.log("func")
    }
    return (

        <>
            <Ecommerce />
            <div className={style.parentContainer}>
                {/* to={`/SingleProduct/${productData.id}`} */}



                {/* <div className='productcontainer'>
                <img width={"200"} height={"300"} src={productData.image} alt="" />
                <h4><Link onClick={<SingleProduct  id={productData.id} data={productData}/>} >{productData.title}</Link></h4>
                <h1>PRICE : {productData.price}</h1>
            </div> */}



                {products.map((value) => {
                    return (
                        <div className={style.productcontainer} key={value.id}>
                            <img src={value.image} alt="" />
                            <h4>
                                <Link className={style.link} to={`/SingleProduct/${value.id}`}>{value.title}</Link>
                            </h4>
                            <h1 className={style.h1}>PRICE: {value.price + "$"}</h1>
                            <div className={style.button}>
                                <button onClick={()=>navigate(
                                    "./SingleProduct/"+value.id
                                )}>BUY NOW</button>            <button onClick={()=>navigate(
                                    "./SingleProduct/"+value.id
                                )} >ADD TO CART</button>
                            </div>
                        </div>
                    )
                })}
            </div>

            <Footer />
        </>
    )
}

export default Products
