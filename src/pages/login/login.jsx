import { useState } from 'react';
import './login.css';

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isError,setIsError]=useState("");
    

    const handAsync=async (e)=>{
        e.preventDefault();

        const res=await fetch("http://localhost:3005/auth/login",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({email,password})
        })
        
        const data=await res.json();
        setMessage(data.message);
        console.log(data);
        if(res.ok){
            setIsError(true);
            setMessage(data.message)
        }else{
            setIsError(false);
            setMessage(data.message)
        }
    }
    

    
    

    return (
        <>
            <div className='flex flex-col items-center justify-center h-screen'>
                <form action="" onSubmit={handAsync} className='bg-blue-900 rounded-2xl h-60 flex flex-col justify-between p-3 text-white w-[20%]'>
                    <div className='flex flex-col items-start justify-between h-15'>
                        <label htmlFor="gmail">gmail</label> <br />
                        <input type="email" placeholder='Enter your gmail' className='h-10 rounded-2xl border text-xs w-full' onChange={(e)=>setEmail(e.target.value)} /><br />
                    </div>

                    <div className='flex flex-col items-start justify-between h-15'>
                        <label htmlFor="password">password</label><br />
                        <input type="password" placeholder='Enter your password' className='h-10 rounded-2xl border text-xs w-full' onChange={(e)=>setPassword(e.target.value)}/>
                    </div>

                    <p className={isError?"text-green-500":"text-red-500"}>
                        {message}
                    </p>
                    <button className='submitLogin text-black' type="submit">Login</button>
                </form>
            </div> 
        </>
    )
}

export default Login;