import './category.css';

function Category({categories}){

    const category=async(e)=>{
        e.preventDefault();

        const res =await fetch 
    }

    return(
        <>
        <div className='cat-wrapper'>
            <h2 className='cat-title'>Categories</h2>

            <div className='cat-list'>
                {categories?.map((item)=>(
                    <div className='cat-card' key={item.id}>
                        <img src="item.image" alt="item.name" />
                        <h4>{item.name}</h4>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Category;