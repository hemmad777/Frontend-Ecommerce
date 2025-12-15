import "./home.css";
import Navbar from "../../components/navbar/navbar";
import HeroBanner from "../../components/hero banner/heroBanner";
import Category from "../../components/categorySection/category";
import Featured from "../../components/Featured products/featured";

function HomePage(){
    return(
    <>
        <Navbar />
        <HeroBanner />
        <Category />
        <Featured />
    </>
    )
}

export default HomePage;
