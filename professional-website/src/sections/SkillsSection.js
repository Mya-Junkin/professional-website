import {Grid, Typography} from '@material-ui/core';
import useStyles from '../styles.js';
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme.js';

import reactIcon from '../images/react-icon.png';
import javascriptIcon from '../images/javascript-icon.png';
import htmlIcon from '../images/html5-icon.png';
import cssIcon from '../images/css3-icon.png';

import safeIcon from '../images/safe-icon.png';
import agileIcon from '../images/agile-icon.png';
import dockerIcon from '../images/docker-icon.png';
import gitIcon from '../images/git-icon.png';

import nodeIcon from '../images/node-icon.png';
import mongodbIcon from '../images/mongodb-icon.png';
import postgresqlIcon from '../images/postgresql-icon.png';

const SkillsSection = () => {
    const classes = useStyles();

    return(
        <ThemeProvider theme={ theme }>
            <Typography variant='h2'>SKILLS</Typography>
            <Grid container className={classes.skillsGrid}>
                <Grid item xs={4}>
                    <item><Typography varient="h3">FRONTEND</Typography></item>
                    <item><img src={ reactIcon } alt="React Icon" /><Typography>React</Typography></item>
                    <item><img src={ javascriptIcon } alt="JavaScript Icon" /><Typography>JavaScript</Typography></item>
                    <item><img src={ htmlIcon } alt="HTML5 Icon" /><Typography>HTML</Typography></item>
                    <item><img src={ cssIcon } alt="CSS3 Icon" /><Typography>CSS</Typography></item>
                </Grid>
                <Grid item xs={4}>
                    <item><Typography varient="h3">TOOLS</Typography></item>
                    <item><img src={ safeIcon } alt="SAFe Icon" /><Typography>SAFe</Typography></item>
                    <item><img src={ agileIcon } alt="Agile Icon" /><Typography>Agile</Typography></item>
                    <item><img src={ dockerIcon } alt="Docker Icon" /><Typography>Docker</Typography></item>
                    <item><img src={ gitIcon } alt="Git Icon" /><Typography>Git</Typography></item>
                </Grid>
                <Grid item xs={4}>
                    <item><Typography varient="h3">BACKEND</Typography></item>
                    <item><img src={ nodeIcon } alt="Node Icon" /><Typography>Node</Typography></item>
                    <item><img src={ mongodbIcon } alt="MongoDB Icon" /><Typography>MongoDB</Typography></item>
                    <item><img src={ postgresqlIcon } alt="PostgreSQL Icon" /><Typography>PostgreSQL</Typography></item>
                </Grid>
            </Grid>
        </ ThemeProvider>
    );
}

export default SkillsSection;