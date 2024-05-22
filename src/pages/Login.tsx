// src/components/Login.tsx
import React, { useState } from 'react';
import { User } from '../types';
import users from "../../users.json";

const userData: User[] = users.users

const LoginPage: React.FC = () => {
    
    const storedUser = localStorage.getItem('loggedInUser');   
    const user1 = JSON.parse(storedUser as string)
    const [selected, setSelected] = useState<1 | 2| 3>(1);
    function leave() {
        localStorage.removeItem('loggedInUser');
        window.location.reload()
    }
    function join() {
       
        window.location.reload()
       

    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const user = userData.find(u => u.username === username && u.password === password);
        
        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            alert('Login successful!');
            // Redirection or further action can be taken here
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        
        <div className="flex flex-col max-w-[1500px] w-full items-center justify-center gap-5">
              <section className="w-full max-w-[1500vw] items-center justify-center flex overflow-x-hidden">
  {user1 == null && selected != 3 ? (
 <form  onSubmit={handleLogin}>
                
 <div className="w-full h-10 border-blueborder border-2 shadow-blueshadow shadow-blueshadow shadow-xl">
     <label>ㅤUsername:</label>
     <input  className="bg-transparent focus:outline-none p-1"
      placeholder="xxxx"
         type="text" 
         value={username} 
         onChange={(e) => setUsername(e.target.value)} 
         required 
     />
 </div>
 <div>ㅤ</div>
 <div className="w-full h-10 border-blueborder border-2 shadow-blueshadow shadow-blueshadow shadow-xl">
     <label>ㅤPassword:</label>
     <input placeholder="xxxxxxx"
    className="bg-transparent focus:outline-none p-1"
         type="password" 
         value={password} 
         onChange={(e) => setPassword(e.target.value)} 
         required 
     />
 </div>
 <div>ㅤ</div>
<div className="flex w-full items-center justify-center">


 <div className='flex gap-1 text-bluetext tablet:w-[24vw] w-[150px]'><button onClick={() => join()} type="submit" className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Login</button></div>
 
 
 </div>

 <div className="flex flex-col items-center justify-center text-center p-3">
 <h1>You don't have account??</h1>
    <button onClick={() => setSelected(3)}  className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder text-bluetext cursor-pointer bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center mt-10 w-[400px] tablet:w-[95vw]">Register</button></div>
 
 
 {error && <p style={{ color: 'red' }}>{error}</p>}
</form>
  ) : user1 != null && selected === 1 ? (
   
<div className='flex gap-1 text-bluetext tablet:w-[24vw] w-[150px]'>    

<button onClick={() => leave()} type="submit" className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Leave Account</button>
<button onClick={() => setSelected(2)} type="submit" className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Create Addon</button>
</div>

    
  ) : selected === 2 ? (
<div>
  <iframe width="640px" height="480px" className="tablet:w-[95vw] shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-2 border-blueborder bg-bluebg text-center p-1 px-2 font-bold flex flex-grow items-center" src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAATUKojpUQkVLQ01IOVg1SDZCNTg3T0ZSVEZSUVQwSC4u&embed=true"> </iframe>
  <button onClick={() => setSelected(1)} type="submit" className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Close Creator form</button>
     
  </div>
  ) : (
    <h1></h1>
  )}

  {selected === 3 ? (
    <div>
      <iframe width="640px" height="480px" className="tablet:w-[95vw] shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-2 border-blueborder bg-bluebg text-center p-1 px-2 font-bold flex flex-grow items-center" src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAATUKojpUMERHQkZUOVIxQVdLRE4zS0ZaWFlGQjNUMy4u&embed=true"> </iframe>
      <button onClick={() => setSelected(1)} type="submit" className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Close Account Form</button>
         
      </div>
      
  ) : (
    <div>
      <h1></h1>
    </div>
    
  )}
        
            </section>
            
        </div>
       
    );
};

export default LoginPage;
