import '../Payment/CartPayment.css';
import CardPayment from '../Icons/card_img.png'

const CartPayment = () => {
    const handleSubmitCart = () =>{
        alert('Order Received')
    }
    return ( 
        <>
        <div className="container">

<form action="">

    <div className="row">

        <div className="col">


            <div className="inputBox">
                <span>Full Name :</span>
                <input type="text" placeholder="Enter your name"/>
                    
            </div>
            <div className="inputBox">
                <span>Email :</span>
                <input type="email" placeholder="example@example.com"/>
            </div>
            <div className="inputBox">
                <span>Address :</span>
                <input type="text" placeholder="Enter your address"/>
            </div>
            <div className="inputBox">
                <span>City :</span>
                <input type="text" placeholder="Enter your city"/>
            </div>

            <div className="flex">
                <div className="inputBox">
                    <span>State :</span>
                    <input type="text" placeholder="Enter your country"/>
                </div>
                <div className="inputBox">
                    <span>Zip Code :</span>
                    <input type="text" placeholder="123 456"/>
                </div>
            </div>

        </div>

        <div className="col">


            <div className="inputBox">
                <span>Cards Accepted :</span>
                <img src={CardPayment} alt=""/>
            </div>
            <div className="inputBox">
                <span>Name on Card :</span>
                <input type="text" placeholder="Enter your name"/>
            </div>
            <div className="inputBox">
                <span>Credit Card Number :</span>
                <input type="number" placeholder="1111-2222-3333-4444"/>
            </div>
            <div className="inputBox">
                <span>Exp Month :</span>
                <input type="text" placeholder=""/>
            </div>

            <div className="flex">
                <div className="inputBox">
                    <span>Exp Year :</span>
                    <input type="number" placeholder=""/>
                </div>
                <div className="inputBox">
                    <span>CVV :</span>
                    <input type="text" placeholder=""/>
                </div>
            </div>

        </div>

    </div>

    <input type="submit" value="Proceed to Checkout" className="submit-btn" onClick={handleSubmitCart}/>

</form>

</div> 
        </>
    );
}
 
export default CartPayment;