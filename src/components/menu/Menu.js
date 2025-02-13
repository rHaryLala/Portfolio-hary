"use client";
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import './menu.css'
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";  

const menuLinks = [
    { path: "/", label: "Home",},
    { path: "/about", label: "About", },
    { path: "/work", label: "Work", },
    { path: "/contact", label: "Contact", },
    { path: "/blog", label: "Blog", },
]

const Menu = () => {
    const container = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <div className='menu-container' ref={container}>
            <div className='menu-bar'>
                <div className='menu-logo'>
                    <Link href="/">Hary </Link>
                </div>
                <div className='menu-open' onClick={toggleMenu}>        
                    <p>Menu</p>
                </div>
            </div>
            <div className='menu-overlay'>
                <div className='menu-overlay-bar'>
                    <div className='menu-logo'>
                        <Link href="/">Hary </Link>
                    </div>
                    <div className='menu-close' onClick={toggleMenu}>
                        <p>Close</p>
                    </div>
                </div>
                <div className='menu-close-icon'>
                    <p>&#x2715;</p>
                </div>
                <div className='menu-copy'>
                    <div className='menu-links'>
                        {menuLinks.map(( link, index    ) => (
                            <div className='menu-link-item' key={index}> 
                                <div className='menu-link-item-holder' onClick={toggleMenu}>    
                                    <Link href={link.path} className='menu-link'>
                                        {link.label}
                                    </Link>
                                </div>  
                            </div>
                        ))}
                    </div>
                    <div className='menu-info'>
                        <div className='menu-info-col'>
                            <a href='#'>X &#8599;</a>
                            <a href='#'>Facebook &#8599;</a>
                            <a href='#'>Instagram &#8599;</a>
                            <a href='#'>Github &#8599;</a>
                            <a href='#'>LinkedIn &#8599;</a>
                        </div>
                        <div className='menu-info-col'>
                            <p>rabenamanaharylala2001@gmail.com</p>
                            <p>+261 38 58 207 55    </p>
                        </div>
                    </div>
                </div>
                <div className='menu-preview'>
                    <p>Video</p >
                </div>
            </div>
        </div>
    )   
}

export default Menu