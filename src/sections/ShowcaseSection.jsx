import React, { use } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);

    useGSAP(() => {
        gsap.fromTo(sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 7.5 }
        )
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className='w-full'>
                <div className='showcaselayout'>
                    { }
                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>   
                        <a
                            href="https://leetcode.com/u/imCoder_js/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <img src='/images/leetcode.png' alt='rayder' />
                        </a>
                        </div>
                        <div className='text-content'>
                            <h2>My Leetcode Profile</h2>
                        </div>
                    </div>
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={project2Ref}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <a
                            href="https://github.com/mayanks-379" 
                            target="_blank"
                            rel="noopener noreferrer">   
                                <img src='/images/project2.png' alt='Library' />
                            </a>
                            </div>
                            <h2>My 3-D Portfolio</h2>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
