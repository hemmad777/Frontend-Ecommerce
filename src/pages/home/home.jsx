import "./home.css";
import Navbar from "../../components/navbar/navbar";
import HeroBanner from "../../components/hero banner/heroBanner";
import Category from "../../components/categorySection/category";

function HomePage(){
    return(
    <>
        <Navbar />
        <HeroBanner />
        <Category />
    </>
    )
}

export default HomePage;
