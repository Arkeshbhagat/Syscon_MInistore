// https://templatesjungle.com/demo/?url=https://demo.templatesjungle.com/ministore/&purl=https://templatesjungle.gumroad.com/l/ministore-ecommerce-store-bootstrap-template
import React from 'react'
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="text-black font-bold" style={{ fontSize: '30px' }}>MiniStore.</span>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#" className="text-white px-3 py-2" style={{ color: '#717171' }}>
                                    HOME
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white px-3 py-2" style={{ color: '#717171' }}>
                                    SERVICES
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white px-3 py-2" style={{ color: '#717171' }}>
                                    PRODUCTS
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white px-3 py-2" style={{ color: '#717171' }}>
                                    WATCHES
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white px-3 py-2" style={{ color: '#717171' }}>
                                    SALE
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white px-3 py-2" style={{ color: '#717171' }}>
                                    BLOG
                                </a>
                            </li>
                            <li className="relative">
                                <button
                                    onClick={toggleNavbar}
                                    className="text-white focus:outline-none"
                                    style={{ color: '#717171' }}
                                >
                                    PAGES
                                </button>
                                {isOpen && (
                                    <div className="absolute bg-white py-2 mt-2 w-32 rounded-lg shadow-lg">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-white hover:bg-gray-60"
                                            style={{ color: '#717171' }}
                                        >
                                            CART
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                                            style={{ color: '#717171' }}
                                        >
                                            CHECKOUT
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                                            style={{ color: '#717171' }}
                                        >
                                            SINGLE POST
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                                            style={{ color: '#717171' }}
                                        >
                                            SINGLE PRODUCT
                                        </a>
                                    </div>
                                )}
                            </li>
                            <li>
                                <a href="#" className="text-white" style={{ color: '#717171' }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white" style={{ color: '#717171' }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white" style={{ color: '#717171' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4l2-2h12a2 2 0 012 2v2H4V4zm12 2h4a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h4m0 0V4m0 0L8 4m8 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>

                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="text-black focus:outline-none"
                        >
                            Menu
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="lg:hidden mt-2">
                        <ul>
                            <li>
                                <a href="#" className="block text-black py-3">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block text-black py-3">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block text-black py-3">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block text-black py-3">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>)
}

export default Navbar