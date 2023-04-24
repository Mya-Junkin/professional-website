import {CardContent, Button, Typography} from '@material-ui/core';
import useStyles from '../styles.js';


const ProjectSection = () => {
    const classes = useStyles();

    return(
        <div>
            <Typography variant='h2'>PROJECTS</Typography>
            <CardContent variant="outlined">
                <Typography>Professional Photographer Website</Typography>
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
                <Typography>Emergency Action Plan App</Typography>
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
        </div>
    );
}

export default ProjectSection;