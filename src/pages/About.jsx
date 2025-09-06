import React from 'react'
import Ecommerce from '../components/Ecommerce'
import { useParams } from 'react-router-dom'
// import Ecommerce from '../../components/Ecommerce'

const About = () => {

  const params = useParams()
  console.log("paramss",params.value)
  return (
   <div>
    <Ecommerce />
     <h1>ABOUT PAGE</h1>
   </div>
  )
}

export default About
