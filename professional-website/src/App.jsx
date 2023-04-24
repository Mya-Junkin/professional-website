import React from 'react';
import { CssBaseline, IconButton } from '@material-ui/core';
import useStyles from './styles.js';

import SocialLinks from './components/SocialLinks.js';
import LandingSection from './sections/LandingSection.js';
import SkillsSection from './sections/SkillsSection.js';
import ProjectSection from './sections/ProjectSection.js';
import AboutSection from './sections/AboutSection.js';
import ContactSection from './sections/ContactSection.js';

import jumpUpIcon from './images/jumpup-icon.png';


const App = () => {
    const classes = useStyles();

    return (
        <div className={ classes.App }>
        <CssBaseline />
        <header>
            <SocialLinks />
        </header>


        <main>
            
            <LandingSection />
            <SkillsSection />
            <ProjectSection />
            <AboutSection />
            <ContactSection />
            
        </main>


        <footer>
            <IconButton aria-label="Jump Up" size="small">
                <img src={ jumpUpIcon } alt="Up Arrow"/>
            </IconButton>
            <SocialLinks />
        </footer>
        </div>
    );
}

export default App;