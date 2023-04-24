import {Grid, Typography} from '@material-ui/core';
import useStyles from '../styles.js';

import selfieIll from '../images/selfie-illustration.png';


const AboutSection = () => {
    const classes = useStyles();

    return(
        <div>
            <Typography variant='h2'>ABOUT</Typography>
            <Grid container className={classes.landingGrid}>
                <Grid item xs={6}>
                    <item><Typography>
                    Hi, I’m Mya! I recently graduated with a Bachelor's degree in Computer Science and have a strong passion for full-stack 
                    and mobile app development. Throughout my academic career, I have gained hands-on experience in various programming languages 
                    and have a knack for problem-solving.
                    <br />
                    When I'm not coding, I love traveling to new places and learning new languages. I'm currently learning Spanish and have a 
                    keen interest in Hispanic culture. 
                    <br />
                    In addition to my love for traveling and learning languages, I also have a creative side. I enjoy creating digital art, 
                    experimenting with different techniques, and expressing myself through different mediums.
                    <br />
                    With my technical expertise and creative pursuits, I'm a well-rounded individual ready to take on new challenges and 
                    opportunities in the tech industry.
                    </Typography></item>
                </Grid>
                <Grid item xs={6}>
                    <item><img src={ selfieIll } alt="Illustration" className={classes.landingIll} /></item>
                </Grid>
            </Grid>
        </div>
    );
}

export default AboutSection;