import {CardContent, Button, Typography, ThemeProvider, Grid} from '@material-ui/core';
import useStyles from '../styles.js';
import theme from '../theme.js';


/** function to standardize adding new projects.
 * Inputs: 
 *   text - project title
 *   link - source code
 *   link - see live (opt.)
 *   text - collaborators (opt.)
 *   text - project description
 *   text - technologies used 
 *   link - demo video
 * 
 *  Output:
 *   cardcontent
 *    typography h4 - project title
 *    button outlined - link to source code
 *    button outlined (disabled if not provided) - link to live
 *    typography body (if provided) - collaborators
 *    typography body - project discreption
 *    typography body - technologies used
 *    iframe embedded video - demo video
 *  
 */

function Project({title, source, live, collaborators, description, technologies, embed}) {
    const classes = useStyles();

    return(
        <CardContent variant="outlined" className={classes.ProjectCard}>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
                <iframe style={{aspectRatio: '16/9', width: '100%',}} src={ embed } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item >
                        <Typography variant='h4'>{ title }</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant='outlined' color={'secondary'} style={{border: '3px solid', margin: '1vh'}} href={ source } target='_blank'>Source Code</Button>
                        <Button variant='outlined' color={'secondary'} style={{border: '3px solid', margin: '1 vh'}} href={live} target='_blank'>See Live</Button>
                    </Grid>
                <Grid item>
                    <Typography>
                        Collaborators: { collaborators }
                    </Typography>
                    <Typography>
                        { description }
                    </Typography>
                    <Typography style={{color: '#FED154', marginTop: '1vh'}}>
                        Technologies: { technologies }
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
        </CardContent>
    );
}


const ProjectSection = () => {
    return(
        <ThemeProvider theme={ theme }>
            <div style={{display: 'flex', alignItems: 'center', justifyItems: 'center', flexDirection: 'column', marginTop: '1vh', marginBottom: '1vh'}}>
            <Typography variant='h2'>PROJECTS</Typography>

            <Project 
                title='Photographer Portfolio Website' 
                source={'http://www.google.com'} 
                live={'http://www.youtube.com'} 
                collaborators='n/a' 
                description='Fullstack website for professional photography service. Provides an easy and user-friendly display of past photoshoots and ability to book an appointment for a consultation.' 
                technologies='NodeJS, React, DynamoDB' 
                embed = 'https://www.youtube.com/embed/sgQLiNGQIuM'
            />

            <Project 
                title='Emergency Action Plan Mobile App' 
                source={'http://www.google.com'} 
                live={'http://www.youtube.com'} 
                collaborators='Befikadu Kedebe, Katrina Cortipassi' 
                description='Mobile app developed with West Virginia University Athlete Trainers as the customers. Purpose is to store, edit, and distribute emergency action plans for cases of medical emergencies.' 
                technologies='React Native, Microsoft Azure Database' 
                embed = 'https://www.youtube.com/embed/sgQLiNGQIuM'
            />

            </div>
        </ ThemeProvider >
    );
}

export default ProjectSection;