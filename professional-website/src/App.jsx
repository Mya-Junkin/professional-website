import React from 'react';
import { CssBaseline} from '@material-ui/core';
import useStyles from './styles.js';

import LandingSection from './sections/LandingSection.js';
import SkillsSection from './sections/SkillsSection.js';
import ProjectSection from './sections/ProjectSection.js';
import AboutSection from './sections/AboutSection.js';
import ContactSection from './sections/ContactSection.js';
import Footer from './sections/Footer.js';


const App = () => {
    const classes = useStyles();

    return (
        <div className={ classes.App }>
        <CssBaseline />

        <main>
            
            <LandingSection />
            <SkillsSection />
            <ProjectSection />
            <AboutSection />
            <ContactSection />
            <Footer />
            
        </main>
        </div>
    );
}

export default App;