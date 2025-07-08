import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Room } from './Room';
import Hero from '../../sections/Hero';
import { HeroLights } from './HeroLights';
import Particles from './Particles';

export const HeroExperience = () => {
  
    const isTablet = false; 
    return (
    <Canvas camera={{position:[0, 0 , 15], fov:45}}>

        <OrbitControls 
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        /> 
        <HeroLights/>
        <Particles count={100}/>
        <group  position={[1, -2.0, 0]} rotation={[0, -Math.PI / 4, 0]}>
            <Room/>
        </group> 
    </Canvas>
  )
}
