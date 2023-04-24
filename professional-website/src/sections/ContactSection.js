import React from 'react';
import {Paper, Typography, TextField, Button} from '@material-ui/core';
import useStyles from '../styles.js';


const ContactSection = () => {
    const classes = useStyles();

    return(
        <div>
            <Typography variant='h2'>CONTACT</Typography>
            <Paper>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-multiline-flexible" label="Message" variant="outlined" multiline minRows={4} maxRows={6}/>
                <Button variant="outlined">Submit</Button>
            </Paper>
            {/**TODO: Add timeout snackbar notification for when submit is successful. */}
        </div>
    );
}

export default ContactSection;