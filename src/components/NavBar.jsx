import React, { use } from 'react'
import { navLinks } from '../constants/index'
import { useState, useEffect } from 'react'

export const NavBar = () => {
    
const [Scrolled, setScrolled] = useState(false);

useEffect(() => {
    const handleScroll = () => {
    const isScrolled = window.scrollY > 10;
    setScrolled(true); 
}

    window.addEventListener('scroll', handleScroll);

    return () =>  window.removeEventListener('scroll', handleScroll);
    
}, []);

  return (
    <header className={`navbar ${Scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className='inner'>
            <a className='logo' href='#hero'>
                Mayank | SDE
            </a>

            <nav className='desktop'>
                <ul>
                    {navLinks.map(({link, name}) => (
                        <li key={name} className='group'>
                            <a href={link}>
                                <span>{name}</span>
                               <span className='underline'/> 
                            </a>
                        </li>
                    )
                )}
                </ul>
            </nav>

            <a href='#contact' className='contact-btn group'>
                <div className='inner'>
                    <span>Contact Me</span>
                </div>
            </a>

        </div>
    </header>
  )
}
