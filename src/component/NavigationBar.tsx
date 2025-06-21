import Link from "next/link";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';
import { FaRegUser } from "react-icons/fa";

export default function NavigationBar() {
    return (
        <div>
            <div className="bg-white h-10 flex items-center justify-center relative">
                <span className="text-base font-light text-black tracking-[.01em] mx-auto">HOME OF TRADITIONAL SCENT</span>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-3">
                    <AiFillFacebook className="w-5 h-5 text-black" />
                    <a
                        href="https://www.instagram.com/sanusenteurs/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineInstagram className="w-5 h-5" />
                    </a>
                </div>
            </div>
            <div className="relative h-[224px]">
                <header className="sticky top-0 h-28 px-8 bg-black text-white flex justify-between items-center px-4 py-2">
                    {/* Left Section: Logo */}
                    <div className="h-full flex items-center">
                        <img src="/logo.avif" alt="Logo" className="h-full w-auto" />
                    </div>

                    {/* Center Section: Navigation Tabs */}
                    <nav className="flex space-x-6">
                        <Link href="/">HOME</Link>
                        <Link href="/boutique">BOUTIQUE</Link>
                        <Link href="/faqs">FAQS</Link>
                        <Link href="/a-propos">À PROPOS</Link>
                        <Link href="/contact">CONTACT</Link>
                    </nav>

                    {/* Right Section: Icons */}
                    <div className="flex items-center space-x-4">
                        <AiOutlineSearch className="w-5 h-5" />
                        <FaRegUser className="w-5 h-5"/>
                        <AiOutlineShopping className="w-5 h-5" />
                    </div>
                </header>
            </div>
        </div>
    )
}
