// LoginForm.js

import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        // Simulate login logic (replace with actual authentication logic)
        if (username === 'admin' && password === 'password') {
            setLoggedIn(true);
            alert('Logged in successfully!');
        } else {
            alert('Invalid username or password');
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    return (
        <div>
            {loggedIn ? (
                <div>
                    <p>Welcome, {username}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <form onSubmit={handleLogin}>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
};

export default LoginForm;
