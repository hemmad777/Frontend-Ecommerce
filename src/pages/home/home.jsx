import "./home.css";
import Navbar from "../../components/navbar/navbar";
import HeroBanner from "../../components/hero banner/heroBanner";
import Category from "../../components/categorySection/category";
import Featured from "../../components/Featured products/featured";
import Footer from "../../components/footer/footer";

function HomePage(){
    return(
    <>
        <Navbar />
        <HeroBanner />
        <Category />
        <Featured />
        <Footer />
    </>
    )
}

export default HomePage;
