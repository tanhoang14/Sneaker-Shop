import { useState ,useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import "../Sneakers/Sneakers.css"

const SneakersCard = (props) => {
    const {id,name,brand,description,price,imageUrl}=props;
    const {addtoCart ,setTotal} = useContext(CartContext)
    const [isAdded,setAdded] =useState (false);
    const handleClick = () =>{
        setAdded(true)
        const newItems={
            id: id,
            name: name,
            price: price,
            imageUrl: imageUrl,
        }
        addtoCart((item)=>[...item,newItems]);
        setTotal((total)=>(total += Number (price)))
    }
    return (
        <>
        <section className="sneakers">
            <div className="sneakers-info">
                <p> <b>{brand} {name}</b></p>
                
                
            </div>
            <div className="sneakers-img-container">
                <img className="sneakers-img" src={imageUrl} alt=""/>
            </div>
            <div className="sneakers-desc">
                {description}
            </div>
            <div className="sneakers-price">
                {price}$
            </div>
            
            {isAdded ? (
                <button disabled className="sneakers-btn-disabled"> Added
                </button>
            ):(
                <button className="sneakers-btn" onClick={handleClick}>Buy</button>
            )}

            
        </section>
   </>
      );
}
 
export default SneakersCard;