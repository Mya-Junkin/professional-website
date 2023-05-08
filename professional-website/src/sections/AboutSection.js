import {Grid, Typography, ThemeProvider, Paper} from '@material-ui/core';
import useStyles from '../styles.js';
import theme from '../theme.js';

import selfieIll from '../images/selfie-illustration.png';


const AboutSection = () => {
    const classes = useStyles();

    return(
        <ThemeProvider theme={ theme }>
            <Paper className={classes.AboutPaper}>
            <Typography variant='h2' style={{display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: '1vh', marginBottom: '1vh'}}>ABOUT</Typography>
            <Grid container spacing={4} >
                <Grid item xs={12} sm={6} md={8} >
                    <Typography variant='body1' style={{width:'50vw'}}>
                    Hi, I’m Mya! I recently graduated with a Bachelor's degree in Computer Science and have a strong passion for full-stack 
                    and mobile app development. Throughout my academic career, I have gained hands-on experience in various programming languages 
                    and have a knack for problem-solving.
                    <br /><br />
                    When I'm not coding, I love traveling to new places and learning new languages. I'm currently learning Spanish and have a 
                    keen interest in Hispanic culture. 
                    <br /><br />
                    In addition to my love for traveling and learning languages, I also have a creative side. I enjoy creating digital art, 
                    experimenting with different techniques, and expressing myself through different mediums.
                    <br /><br />
                    With my technical expertise and creative pursuits, I'm a well-rounded individual ready to take on new challenges and 
                    opportunities in the tech industry.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}  style={{display:'flex', justifyContent: 'start'}}>
                    <item><img src={ selfieIll } alt="Illustration" className={classes.landingIll}/></item>
                </Grid>
            </Grid>
            </Paper>
        </ThemeProvider>
    );
}

export default AboutSection;