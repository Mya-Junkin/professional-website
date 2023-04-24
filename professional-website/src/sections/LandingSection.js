import {Grid, ButtonGroup, Button, Typography} from '@material-ui/core';
import useStyles from '../styles.js';

import landingIll from '../images/landing-illustration.png';

const LandingSection = () => {
    const classes = useStyles();

    return(
        <Grid container className={classes.landingGrid}>
            <Grid item xs={6}>
                <item><img src={ landingIll } alt="Illustration" className={classes.landingIll} /></item>
            </Grid>
            <Grid item xs={6}>
                <item><Typography variant="h1">Hello, I'm Mya.</Typography></item>
                <item><Typography variant="subtitle1">Computer Scientist ~ Digital Artist ~ Life-long Learner</Typography></item>
                <item><ButtonGroup variant="outlined" color="secondary" aria-label="navigation button group" className={classes.buttonGroup}>
                    <Button variant="outlined">SKILLS</Button>
                    <Button variant="outlined">PROJECTS</Button>
                    <Button variant="outlined">ABOUT</Button>
                    <Button variant="outlined">CONTACT</Button>
                </ButtonGroup></item>
            </Grid>
        </Grid>
    );
}

export default LandingSection;