import React from 'react'
import * as Three from 'three' 
export const HeroLights = () => {
  return (
    <>
        <ambientLight intensity={0.2} color="#1a1a40"/>
        <directionalLight position={[5, 5, 5]} intensity={2}/>
        <primitive object={new Three.RectAreaLight('#A259FF', 8, 3, 2)} />
          
    </>
  )
}
