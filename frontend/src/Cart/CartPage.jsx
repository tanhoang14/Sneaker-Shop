import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import '../Cart/Cart.css'
import TrashCan from '../Icons/trash-solid.svg'
import { useNavigate } from "react-router-dom";
const CartPage = () => {
    const {myCart,total,addtoCart,setTotal} = useContext(CartContext)
    const navigate = useNavigate()
    const handleCheckout = ()=>{
        setTotal(0);
        addtoCart([{}])
    }
    const handlePayment = () =>{
        navigate("/payment")
    }
    const handleRemoveItem = (deletedItem) =>{
        let currentItem = myCart
        currentItem = myCart.filter(item => item.id !== deletedItem.id)
        addtoCart(currentItem)
        setTotal(total-deletedItem.price)
    }
    return ( 
        <>
            <section className="cart-container">
                <div className="cart-header">
                    <div className="cart-items">
                        {myCart.slice(1).map((item)=>{
                            return(
                                <div className="cart-item">
                                    <img src={item.imageUrl} alt="" />
                                    {item.name} : {item.price}$
                                    <img className="trash" src={TrashCan} onClick={()=>handleRemoveItem(item)}/>
                                </div>
                            )
                        })}
                        <div className="cart-total">
                            Total: {total}$
                        </div>
                        <button className="cart-payment" onClick={handlePayment}> Check-out</button>
                        <button className="cart-checkout" onClick={handleCheckout}> Clear</button>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default CartPage;