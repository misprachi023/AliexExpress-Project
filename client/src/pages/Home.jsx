import Carousel from "../components/slider"
import Slider from "../components/explore"
import CardStyle from "../components/card"
import CategoryStyle from "../components/categories"
import LauncheStyle from "../components/launches"
import Invoice from "../components/invoice"
import LifeStyle from "../components/lifestyle"
import BoatStyle from "../components/boat"
import BlogStyle from "../components/blog"
import PressSlide from "../components/press"
import Footer from "../components/footer"
import MidFooter from "../components/midfooter"
import LastFooter from "../components/lastfooter"



const Home=()=>{
    return(
        <>
         <Carousel/> 
       <Slider/> 
        <CardStyle/>
        <CategoryStyle/>
        <LauncheStyle/>
        <Invoice/>
        <LifeStyle/>
        <BoatStyle/>
        <BlogStyle/>
        <PressSlide/>
        
        </>
    )
}

export default Home