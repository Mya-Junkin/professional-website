import {CardContent, Button, Typography} from '@material-ui/core';
//import useStyles from '../styles.js';
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme.js';


/**TODO: create function to standardize adding new projects.
 * Inputs: 
 *   text - project title
 *   link - source code
 *   link - see live (opt.)
 *   text - collaborators (opt.)
 *   text - project description
 *   text - technologies used 
 *   video - demo video
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

const ProjectSection = () => {
    //const classes = useStyles();

    return(
        <ThemeProvider theme={ theme }>
            <Typography variant='h2'>PROJECTS</Typography>
            <CardContent variant="outlined">
                <Typography variant='h4'>Professional Photographer Website</Typography>
                <Button variant="outlined">Source Code</Button>
                <Button variant="outlined">See Live</Button>
                <Typography>
                    A full stack website created for a private client.
                </Typography>
                <Typography>
                    Technologies: Node, MongoDB, React
                </Typography>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/sgQLiNGQIuM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </CardContent>

            <CardContent variant="outlined">
                <Typography variant='h4'>Emergency Action Plan App</Typography>
                <Button variant="outlined">Source Code</Button>
                <Button variant="outlined">See Live</Button>
                <Typography>
                    Collaborators:  Befikadu Kedebe, Katrina Cortipassi
                </Typography>
                <Typography>
                    A mobile app designed in partnership with West Virginia’s athletic facilities to assist trainers and coaches distribute 
                    emergency action plans per organization facility. Multiple organization register to be added to database and authenticated 
                    users per facility can add, edit, delete emergency action plans for their organization.
                </Typography>
                <Typography>
                    Technologies: React Native, Microsoft Azure
                </Typography>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/sgQLiNGQIuM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </CardContent>
        </ ThemeProvider >
    );
}

export default ProjectSection;