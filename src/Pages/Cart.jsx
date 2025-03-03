import { useContext } from "react" 
import { CartContext } from "../context/CartProvider"


function Cart() {
    const {state} = useContext(CartContext)
    console.log(state)
  return (
    <div>
        <h1>cart</h1>
    </div>
  )
}

export default Cart