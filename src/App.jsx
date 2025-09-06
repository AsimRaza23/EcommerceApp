import './App.css'
import Ecommerce from './components/Ecommerce'
import { Route, Routes,Link } from 'react-router-dom'
import About from "./pages/About.jsx"
import Contact from "./pages/contact.jsx"
import Home from './pages/home.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import Products from './pages/Products.jsx'

function App() {


  return (
    <>
    
    
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/About' element={<About />} /> 
        <Route path='/contact' element={<Contact />} />
        <Route path='/SingleProduct/:id' element={<SingleProduct />} />
      </Routes>
    </>
  )
}

export default App
