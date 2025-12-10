import "./heroBanner.css"

function HeroBanner(){
    return(
    <>
    {/* Section hero banner */ }
    <section>
        <div className="flex justify-center items-center bg-black text-white w-full h-60 ">
        <h1>Welcome <span className="text-red-600">AR</span> <span>SHOPEE</span></h1>
        </div>
    </section>
    </>
    )
}

export default HeroBanner;