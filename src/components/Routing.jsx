import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import Cart from "../pages/Cart";
import Wish from "../pages/Wish";

const Routing = () => {

  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wish' element={<Wish/>}/>
    </Routes>
    </>
  )
}

export default Routing