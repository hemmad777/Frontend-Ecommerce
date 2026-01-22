import { useEffect,useState } from "react";
import "./featured.css"
import { Link } from "react-router-dom";

 
function Featured(){

    const [featuredProducts,setFeaturedProducts]=useState([]);


    const fetchFeatured=async()=>{
        const res=await fetch("http://localhost:3005/products/featured");
        const data=await res.json();
        setFeaturedProducts(data.featured);
    }

    useEffect(()=>{
        fetchFeatured();
    },[])

    return(
        <>
        <section className="featured bg-black pt-12 pb-24">
            <h2 className="text-5xl font-bold text-white">FEATURED PRODUCTS</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 place-items-center pt-6 gap-10">
                {featuredProducts?.map((product)=> (
                    
                    <Link to={`${product._id}`}>
                        <div key={product._id} className="cat-card border border-gray-400 rounded-lg shadow-2xl shadow-white/40">
                        <img src={`http://localhost:3005${product.image}`} alt={product.name} className="w-[15rem] h-[15rem] object-cover rounded-lg" />
                        <h4 className='text-2xl font-bold text-white'>{product.name}</h4>
                        <h6 className="text-sm font-bold text-white">{`₹${product.price}/-`}</h6>
                        </div>
                    </Link>
                    
                ))}
            </div>
        </section>
        </>
    )
}
 
export default Featured;