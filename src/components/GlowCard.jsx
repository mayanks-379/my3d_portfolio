import React from 'react'
export const GlowCard = ({card, children}) => {
  return (
    <div className='card card-border timeline-card rounded-xl p-10'>
        <div className='glow'/>
            <div className='flex items-center gap-1 mb-5'>
                {Array.from({length: 5}, (_, i) => (
                    <img key={i} src="/images/star.png" alt="star" className='size-5'/>
                ))}
            </div>
            <div className='mb-5'>
                <p>{card.review}</p>
            </div>
            {children}
        </div>
  )
}
