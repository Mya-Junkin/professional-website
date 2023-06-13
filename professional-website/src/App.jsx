import { CssBaseline} from '@material-ui/core';
import useStyles from './styles.js';

import { Grid, ButtonGroup, Button, Typography, useMediaQuery, ThemeProvider} from '@material-ui/core';
import theme from './theme.js';

import SocialLinks from './components/SocialLinks.js';
import landingIll from './images/landing-illustration.png';

import SkillsSection from './sections/SkillsSection.js';
import ProjectSection from './sections/ProjectSection.js';
import AboutSection from './sections/AboutSection.js';
import ContactSection from './sections/ContactSection.js';
import Footer from './sections/Footer.js';


const App = () => {
    const classes = useStyles();
    const matches = useMediaQuery("(min-width:600px)");

    const handleClickScroll = (section) => {
        const element = document.getElementById(section);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className={ classes.App }>
        <CssBaseline />

        <main>
            
        <ThemeProvider theme={ theme } style={{outerHeight:'100vh'}}>
        <ButtonGroup 
                variant="outlined" 
                size="large"
                color='secondary'
                aria-label="navigation button group" 
                orientation={`${matches ? `horizontal` : `vertical`}`} 
                className={classes.buttonGroup}
                style={{}}
            >
            {
                // TODO: Either style or theme button text to be text-transform uppercase
            }
            <Button onClick={() => handleClickScroll("skills section")} style={{border: '3px solid', borderColor: '#F4B301', color: '#F4B301'}}>SKILLS</Button>
            <Button onClick={() => handleClickScroll("project section")} style={{border: '3px solid', borderColor: '#F4B301', color: '#F4B301'}}>PROJECTS</Button>
            <Button onClick={() => handleClickScroll("about section")} style={{border: '3px solid', borderColor: '#F4B301', color: '#F4B301'}}>ABOUT</Button>
            <Button onClick={() => handleClickScroll("contact section")} style={{border: '3px solid', borderColor: '#F4B301', color: '#F4B301'}}>CONTACT</Button>
        </ButtonGroup>
        <Grid container className={classes.landingGrid}>
            <Grid item xs={12} sm={6} md={5.5} className={classes.landingGridItem} style={{justifyContent:'end', padding: '5vw'}}>
                <item><img src={ landingIll } alt="Illustration" style={{maxWidth: '60vh'}} /></item>
            </Grid>
            <Grid item xs={12}  sm={6} md={6.5} className={classes.landingGridItem} container direction='column'  style={{alignItems: 'start', justifyContent: 'center',}}>
                <Grid item  style={{padding: '1vh'}}><Typography variant="h1">Hello, I'm Mya.</Typography></Grid>
                <Grid item  style={{padding: '1vh'}}><Typography variant="subtitle1" >Computer Scientist ~ Digital Artist ~ Life-long Learner</Typography></Grid>
                <Grid item style={{padding: '1vh', width: '100',  alignItems:'center', justifyContent: 'center'}}><SocialLinks /></Grid>
            </Grid>
        </Grid>
        
        </ThemeProvider>

            <div id="skills section" />
            <SkillsSection id="skills section"/>

            <div id="project section" />
            <ProjectSection id="project section"/>

            <div id="about section" />
            <AboutSection id="about section"/>

            <div id="contact section" />
            <ContactSection id="contact section"/>
            <Footer />
            
        </main>
        </div>
    );
}

export default App;