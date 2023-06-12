import {Grid, Typography, ThemeProvider, Paper} from '@material-ui/core';
import useStyles from '../styles.js';
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

const SkillsSection = ({ref}) => {
    const classes = useStyles();

    return(
        <ThemeProvider theme={ theme }>
            <Paper className={classes.SkillsPaper}>
            <Typography variant='h2'>SKILLS</Typography>
            <Grid container className={classes.SkillsGrid}>
                <Grid item xs={12} sm={12} md={4} container>
                    <Grid item xs={12} className={classes.SkillsCat}>
                        <Typography variant="h3">FRONTEND</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.SkillsCat}>
                        <img src={ reactIcon } alt="React Icon" />
                        <Typography>React</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.SkillsCat}>
                        <img src={ javascriptIcon } alt="JavaScript Icon" />
                        <Typography>JavaScript</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.SkillsCat}>
                        <img src={ htmlIcon } alt="HTML5 Icon" />
                        <Typography>HTML</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.SkillsCat}>
                        <img src={ cssIcon } alt="CSS3 Icon" />
                        <Typography>CSS</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} container>
                    <Grid item xs={12} className={classes.SkillsCat}>
                        <Typography variant="h3">TOOLS</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.SkillsCat}>
                        <img src={ safeIcon } alt="SAFe Icon" />
                        <Typography>SAFe</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.SkillsCat}>
                        <img src={ agileIcon } alt="Agile Icon" />
                        <Typography>Agile</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.SkillsCat}>
                        <img src={ dockerIcon } alt="Docker Icon" />
                        <Typography>Docker</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.SkillsCat}>
                        <img src={ gitIcon } alt="Git Icon" />
                        <Typography>Git</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} container>
                    <Grid item xs={12} className={classes.SkillsCat}>
                        <Typography variant="h3">BACKEND</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.SkillsCat}>
                        <img src={ nodeIcon } alt="Node Icon" />
                        <Typography>Node</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.SkillsCat}>
                        <img src={ mongodbIcon } alt="MongoDB Icon" />
                        <Typography>MongoDB</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.SkillsCat}>
                        <img src={ postgresqlIcon } alt="PostgreSQL Icon" />
                        <Typography>PostgreSQL</Typography>
                    </Grid>
                </Grid>
            </Grid>
            </Paper>
        </ ThemeProvider>
    );
}

export default SkillsSection;