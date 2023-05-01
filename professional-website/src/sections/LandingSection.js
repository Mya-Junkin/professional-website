import {Grid, ButtonGroup, Button, Typography, useMediaQuery} from '@material-ui/core';
import useStyles from '../styles.js';
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme.js';

import SocialLinks from '../components/SocialLinks.js';
import landingIll from '../images/landing-illustration.png';

const LandingSection = () => {
    const classes = useStyles();
    const matches = useMediaQuery("(min-width:600px)");

    return(
        <ThemeProvider theme={ theme } style={{outerHeight:'100vh'}}>
        <SocialLinks />
        <Grid container className={classes.landingGrid}>
            <Grid item xs={12} sm={6} md={5}>
                <item><img src={ landingIll } alt="Illustration" style={ {maxWidth: '30vw' } }/></item>
            </Grid>
            <Grid item xs={12}  sm={6} md={7}>
                <item><Typography variant="h1">Hello, I'm Mya.</Typography></item>
                <item><Typography variant="subtitle1" >Computer Scientist ~ Digital Artist ~ Life-long Learner</Typography></item>
                <item>
                    <ButtonGroup 
                        variant="outlined" 
                        color="secondary" 
                        aria-label="navigation button group" 
                        orientation={`${matches ? `horizontal` : `vertical`}`} 
                        className={classes.buttonGroup}
                    >
                    {
                        // TODO: Either style or theme button text to be text-transform uppercase
                    }
                    <Button variant="outlined">SKILLS</Button>
                    <Button variant="outlined">PROJECTS</Button>
                    <Button variant="outlined">ABOUT</Button>
                    <Button variant="outlined">CONTACT</Button>
                    </ButtonGroup>
                </item>
            </Grid>
        </Grid>
        </ThemeProvider>
    );
}

export default LandingSection;