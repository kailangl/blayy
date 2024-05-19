// src/components/Login.tsx
import React, { useState } from 'react';
import { User } from '../types';

const userData: User[] = [
    {
        username: "BlayyDeveloper",
        password: "blayy123",
        image: "https://yt3.ggpht.com/2OSuLI_a-fxPBby0ecbM0w6jdTnKTEeFDUYHHbibDaargKnwT6HgHhHtahMCfaEDiEuwNXdL=s108-c-k-c0x00ffffff-no-rj"
    }
];

const LoginPage: React.FC = () => {
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
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default LoginPage;
