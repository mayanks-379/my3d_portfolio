import React from 'react'
import { socialImgs } from '../constants'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='flex flex-col justify-center md:items-start items-center'>
                <a href="/">Visit My Blog</a>
            </div>
            <div className='socials'>
                {socialImgs.map((img) => (
                    <a className='icon' key={img.url} href={img.url} target="_blank">
                        <img src={img.imgPath} alt={img.name} />
                    </a>
                ))}
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-center md:text-end'>
                    © {new Date().getFullYear()} Mayank. All rights reserved.
                </p>
            </div>
        </div>
    </div>
  )
}
