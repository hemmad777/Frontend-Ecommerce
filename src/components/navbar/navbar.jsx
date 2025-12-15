import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar(){
    return(
        <>
            <div className="bg-black/90 flex w-full justify-around h-10 items-center">
                <Link to="/">Home</Link>
                <Link to="/Collections">products</Link>
                <Link to="/About">About</Link>
            </div>
        </>
    )
}

export default Navbar