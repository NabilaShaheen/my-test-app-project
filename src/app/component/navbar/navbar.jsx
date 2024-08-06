"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state
    const [isAdmin, setIsAdmin] = useState(false); // Track if user is admin
    const router = useRouter();

    const handleLogout = () => {
        // Logic for logging out the user (e.g., clear session, redirect)
        setIsAuthenticated(false);
        setIsAdmin(false);
        router.push('/'); // Redirect to homepage after logout
    };

    return (
        <header className="w-full h-20 bg-white shadow-md flex justify-between items-center px-6">
            <div className="font-serif font-light text-3xl">
                Namaz Timing
            </div>
            <nav className="hidden md:flex gap-6">
                {isAuthenticated ? (
                    <>
                        {isAdmin && (
                            <a href="/admin" className="text-gray-700 hover:text-gray-900">Admin</a>
                        )}
                        <button onClick={handleLogout} className="text-gray-700 hover:text-gray-900">Logout</button>
                    </>
                ) : (
                    <>
                        <a href="/signin" className="text-gray-700 hover:text-gray-900">Sign In</a>
                        <a href="/login" className="text-gray-700 hover:text-gray-900">Login</a>
                    </>
                )}
            </nav>
            <div className="md:hidden flex items-center">
                <button
                    className="outline-none mobile-menu-button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6 text-gray-700"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden">
                    {isAuthenticated ? (
                        <>
                            {isAdmin && (
                                <a href="/admin" className="block text-gray-700 hover:text-gray-900 py-2">Admin</a>
                            )}
                            <button onClick={handleLogout} className="block text-gray-700 hover:text-gray-900 py-2">Logout</button>
                        </>
                    ) : (
                        <>
                            <a href="/signin" className="block text-gray-700 hover:text-gray-900 py-2">Sign In</a>
                            <a href="/login" className="block text-gray-700 hover:text-gray-900 py-2">Login</a>
                        </>
                    )}
                </div>
            )}
        </header>
    );
};

export default Navbar;
