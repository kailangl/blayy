// src/components/Login.tsx
import React, { useState } from 'react';
import { User } from '../types';
import users from "../../users.json";

const userData: User[] = users.users

const LoginPage: React.FC = () => {
    
    const storedUser = localStorage.getItem('loggedInUser');   
    const user1 = JSON.parse(storedUser as string)
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
  {user1 == null ? (
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

 {error && <p style={{ color: 'red' }}>{error}</p>}
</form>
  ) : (
 <div> 
     <form action="https://getform.io/f/zaxdnpya" method="POST">
    <input type="text" name="name">
    <input type="email" name="email">
    <input type="text" name="message">
    <!-- add hidden Honeypot input to prevent spams -->
    <input type="hidden" name="_gotcha" style="display:none !important">
    <!-- checkbox handle -->
    <input type="checkbox" name="subscribe" value="yes" checked>
    <input type="hidden" name="subscribe" value="no">
    <!-- radio button handle -->
    <input type="radio" name="gender" value="male" checked>
    <input type="radio" name="gender" value="female">
    <input type="radio" name="gender" value="other">
    <!-- select field handle -->
    <select name="work-experience">
        <option value="one-year">0-1 years</option>
        <option value="one-five-years">1-5 years</option>
    </select>
    <button type="submit">Send</button>
</form>
     </div>
<div className='flex gap-1 text-bluetext tablet:w-[24vw] w-[150px]'>    
    <button onClick={() => leave()} type="submit" className="hover:bg-blueborder shadow-blueshadow shadow-xl hover:text-black transtion-colors duration-300 border-4 border-blueborder bg-bluebg text-center p-2 px-4 font-bold flex flex-grow justify-center items-center">Leave Account</button></div>
  )}
           
            </section>
        </div>
       
    );
};

export default LoginPage;
