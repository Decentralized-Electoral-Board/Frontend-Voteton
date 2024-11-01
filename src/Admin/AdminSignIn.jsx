import React, { useState } from 'react';
import axios from 'axios';
import styles from "./adminSignIn.module.css"
import { useNavigate } from 'react-router-dom';


export default function AdminSignIn(){
    const navigate = useNavigate()
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Send a POST request to your backend API for authentication
            const response = await axios.post('/api/admin/signin', {
                username,
                password,
            });

            // Handle successful authentication
            if (response.data.success) {
                navigate("/createElection")
                // Redirect to admin dashboard or store token in local storage
                console.log('Admin signed in successfully:', response.data);
                // e.g., localStorage.setItem('token', response.data.token);
                // Redirect to admin dashboard
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError('An error occurred during sign-in. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    return (<>

        <div className={styles.admin}>
            <h2>Admin login page</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.username}>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        placeholder='Username'
                        onChange={(e) => setEmail(e.target.value)}
                        required

                    />
                </div>
                <div className={styles.password}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        placeholder='password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Signing In...' : 'Sign In'}
                </button>
            </form>
        </div>
    
    </>)
}