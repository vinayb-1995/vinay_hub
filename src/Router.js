import { Routes,Route } from "react-router-dom"
import { HOME, SHOP ,SingleProductS} from "./DataPath/RouterLinks"

import Home from "./Pages/Home"
// import Cart from "./Pages/cart"
import Shop from "./Pages/Shop"
import SingleProduct from "./Pages/SingleProduct"

const RouterNav=()=>{
    
    return(
        <>
        <Routes>
            <Route path={HOME} element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            {/* <Route path={CART} element={<Cart/>}/> */}
            <Route path={SHOP} element={<Shop/>}/>
            <Route path={SingleProductS} element={<SingleProduct />} />
        </Routes>
        </>
    )
}
export default RouterNav