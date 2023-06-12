import { Grid, ButtonGroup, Button, Typography, useMediaQuery, ThemeProvider} from '@material-ui/core';
import useStyles from '../styles.js';
import theme from '../theme.js';

import SocialLinks from '../components/SocialLinks.js';
import ScrollToButton from '../components/ScrollToButton.js';
import landingIll from '../images/landing-illustration.png';

const LandingSection = () => {
    const classes = useStyles();
    const matches = useMediaQuery("(min-width:600px)");

    return(
        <ThemeProvider theme={ theme } style={{outerHeight:'100vh'}}>
        <Grid container className={classes.landingGrid}>
            <Grid item xs={12}  style={{display: 'flex', justifyContent:'right'}}>
                <item><SocialLinks /></item>
            </Grid>
            <Grid item xs={12} sm={6} md={5.5} className={classes.landingGridItem} style={{justifyContent:'end', padding: '5vw'}}>
                <item><img src={ landingIll } alt="Illustration" style={{maxWidth: '60vh'}} /></item>
            </Grid>
            <Grid item xs={12}  sm={6} md={6.5} className={classes.landingGridItem} container direction='column'  style={{alignItems: 'start', justifyContent: 'center',}}>
                <Grid item  style={{padding: '1vh'}}><Typography variant="h1">Hello, I'm Mya.</Typography></Grid>
                <Grid item  style={{padding: '1vh'}}><Typography variant="subtitle1" >Computer Scientist ~ Digital Artist ~ Life-long Learner</Typography></Grid>
                <Grid item  style={{padding: '1vh'}}>
                    <ButtonGroup 
                        variant="outlined" 
                        size="large"
                        color='secondary'
                        aria-label="navigation button group" 
                        orientation={`${matches ? `horizontal` : `vertical`}`} 
                        className={classes.buttonGroup}
                    >
                    {
                        // TODO: Either style or theme button text to be text-transform uppercase
                    }
                    <Button href='' style={{border: '3px solid', borderColor: '#F4B301', color: '#F4B301'}}>SKILLS</Button>
                    <Button style={{border: '3px solid', borderColor: '#F4B301', color: '#F4B301'}}>PROJECTS</Button>
                    <Button style={{border: '3px solid', borderColor: '#F4B301', color: '#F4B301'}}>ABOUT</Button>
                    <Button style={{border: '3px solid', borderColor: '#F4B301', color: '#F4B301'}}>CONTACT</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Grid>
        </ThemeProvider>
    );
}

export default LandingSection;