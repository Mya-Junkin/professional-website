import React from 'react';
import {Paper, Typography, TextField, Button} from '@material-ui/core';
//import useStyles from '../styles.js';
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme.js';


const ContactSection = () => {
    //const classes = useStyles();

    return(
        <ThemeProvider theme={ theme }>
            <Typography variant='h2'>CONTACT</Typography>
            <Paper>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-multiline-flexible" label="Message" variant="outlined" multiline minRows={4} maxRows={6}/>
                <Button variant="outlined">Submit</Button>
            </Paper>
            {/**TODO: Add timeout snackbar notification for when submit is successful. */}
        </ThemeProvider>
    );
}

export default ContactSection;