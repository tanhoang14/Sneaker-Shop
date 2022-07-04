import ImageSlider from "../Slider/ImageSlider";
import { SliderData } from "../Slider/SliderData";
import '../Home/Home.css'
const HomePage = () => {
    return (
        <>
            <div className="title">Welcome to Sneaker Shop</div> 
            <ImageSlider slides ={SliderData}/>
        </>
        
     );
}
 
export default HomePage;
