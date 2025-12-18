import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./navbar.css";

function Navbar(){
    return(
        <>
            <div className="bg-black/90 flex w-full justify-around h-10 items-center">
                <Link to="/">Home</Link>
                <Link to="/Collections">products</Link>
                <Link to="/About">About</Link>
                <Link to="/me">   
                <FaUserCircle className="text-2xl text-white hover:text-black cursor-pointer"></FaUserCircle>
                </Link>
            </div>
        </>
    )
}

export default Navbar