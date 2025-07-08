import React from 'react'
import Hero from './sections/Hero'
import { NavBar } from './components/NavBar'
import { ShowcaseSection } from './sections/ShowcaseSection'
import {LogoSection}  from './sections/LogoSection.jsx'
import { FeatureCards } from './sections/FeatureCards.jsx'
import { ExperienceSection } from './sections/ExperienceSection.jsx'
import { TechStack } from './sections/TechStack.jsx'
import { Contact } from './sections/Contact.jsx'
import { Footer } from './sections/Footer.jsx'

const App = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <ShowcaseSection/>
            <LogoSection/>
            <FeatureCards/>
            <ExperienceSection/>
            <TechStack/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App

