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
        <div className='w-full pt-12 pb-12 bg-black/90'>
            <h2 className='text-5xl font-bold text-white'>CATEGORIES</h2>

            <div className='cat-list grid grid-cols-2 sm:grid-cols-3 place-items-center pt-6 gap-5'>
                {categoryList?.map((item)=>(
                    <div className='cat-card border border-gray-400 rounded-lg shadow-2xl shadow-white/40' key={item._id}>
                        <img className='w-[15rem] h-[15rem] rounded-full' src={`http://localhost:3005/${item.image}`} alt={item.name} />
                        <h4 className='text-3xl font-bold text-white'>{item.name}</h4>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Category;