import { useEffect, useState } from 'react';
import './category.css';

function Category(){

    const [categoryList, setCategoryList]=useState([]);
    const fetchCategory=async()=>{

        const res =await fetch("http://localhost:3005/admin/categories");
        const data=await res.json();
        setCategoryList(data.categories);
    }


    useEffect(()=>{
        fetchCategory();
    },[])

    return(
        <>
        <div className='w-full'>
            <h2 className=''>Categories</h2>

            <div className='cat-list grid grid-cols-3 round-full'>
                {categoryList?.map((item)=>(
                    <div className='cat-card' key={item._id}>
                        <img className='w-full ' src={`http://localhost:3005/${item.image}`} alt={item.name} />
                        <h4>{item.name}</h4>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Category;