import { useEffect,useState } from "react";
import "./featured.css"


 
function featured(){

    const [featuredProducts,setFeaturedProducts]=useState([]);


    const fetchFeatured=async()=>{
        const res=await fetch("http://localhost:3005/products/featured");
        const data=await res.json();

        setFeaturedProducts(data);
    }

    return(
        <>
        <section className="featured">
            
        </section>
        </>
    )
}
 
export default featured;