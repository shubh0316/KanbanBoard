import React, { useRef } from 'react';
import { Button } from "../../@/components/ui/button";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
  
    const username = usernameRef.current?.value;

    if (username) {
      localStorage.setItem("userId", username);
      usernameRef.current.value = "";
      navigate("/Boards");
    } else {
      alert("Username is null or undefined");
    }

  }
  return (
    <>      
  
    <div className="flex justify-center items-center rounded-2xl h-screen">

    <div className='text-black  text-center'>
       <h1 className="text-4xl font-bold">Login To Enter in Kanban Board</h1>
       <form className="flex flex-col mt-10 justify-center items-center " onSubmit={handleSubmit}>  
       <label className="mb-5 text-lg font-mono" htmlFor='username'>Provide your username below</label>
       <input type="email" name="username" id="username" required ref={usernameRef} className="placeholder-gray-800 border px-10 py-2.5 rounded-xl w-full" placeholder="jane@example.com" />
       <Button className="w-20 px-5 py-2.5 bg-black text-white mt-10 rounded-2xl hover:bg-slate-200 hover:text-black">Login</Button>
      </form>
      </div>
    </div>
  
    </>
  )
}

export default Login;