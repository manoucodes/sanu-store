"use client";

import {useState, useEffect} from 'react';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineShopping} from 'react-icons/ai';

export default function MobileNavigationMenu() {
    const [isOpen, setIsOpen] = useState(false);

    // Block scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Clean up if component unmounts
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    return (
        <div className="top-0 bg-black text-white h-28 flex justify-between items-center px-4 py-2 lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <AiOutlineClose className="w-6 h-6"/> : <AiOutlineMenu className="w-6 h-6"/>}
            </button>

            <div className="h-full flex items-center">
                <img src="/logo.avif" alt="Logo" className="h-full w-auto"/>
            </div>

            <div className="flex items-center space-x-4">
                <AiOutlineSearch className="w-5 h-5"/>
                {/*<FaRegUser className="w-5 h-5"/>*/}
                <AiOutlineShopping className="w-5 h-5"/>
            </div>

            {isOpen && (
                <>
                    <div
                        className="fixed top-28 inset-0 bg-black opacity-25 z-40"
                        onClick={() => setIsOpen(false)} // click backdrop to close menu
                    />
                    <div className="absolute top-28 left-0 w-3/4 h-full bg-white text-black px-4 py-4 z-50">
                        <nav className="flex flex-col space-y-4">
                            <Link href="/" onClick={() => setIsOpen(false)}>HOME</Link>
                            <Link href="/boutique" onClick={() => setIsOpen(false)}>BOUTIQUE</Link>
                            <Link href="/faqs" onClick={() => setIsOpen(false)}>FAQS</Link>
                            <Link href="/a-propos" onClick={() => setIsOpen(false)}>À PROPOS</Link>
                            <Link href="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
                        </nav>
                    </div>
                </>
            )}
        </div>
    );
}