import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';
import axios from 'axios';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/login`, {
                email,
                password
            });

            localStorage.setItem('adminToken', res.data.token);
            toast.success('Logged in successfully');
            navigate('/admin/dashboard');
        } catch (error) {
            console.error('Login error:', error);
            toast.error(error.response?.data?.message || 'Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Admin Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                    </div>
                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
