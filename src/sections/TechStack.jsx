import React from 'react'
import { TitleHeader } from '../components/TitleHeader'
import { techStackIcons } from '../constants'

export const TechStack = () => {
  return (
    <div id='skills' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader 
            title="My Prefered Tech Stack"
            sub="🤝The Skills I Bring To The Table"/>

            <div className='tech-grid'>
                {techStackIcons.map((icon) => (
                    <div key={icon.name}>
                        {icon.name}
                    </div>
                 ))}
                    
            </div>
        </div>
    </div>
  )
}

                    // <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
                    //     <div className='tech-card-animated-bg'/>
                    //     <div className='tech-card-content'>
                    //         <div className='tech-icon-wrapper'></div>
                    //     </div>
                    // </div>