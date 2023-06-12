import React from 'react';
import {Paper, Typography, TextField, Button} from '@material-ui/core';
import useStyles from '../styles.js';
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme.js';


const ContactSection = () => {
    const classes = useStyles();

    return(
        <ThemeProvider theme={ theme }>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '5vh', marginBottom: '10vh'}}>
            <Typography variant='h2' style={{padding: '5vh'}}>CONTACT</Typography>
            <Paper className={classes.ContactCard}>
                <TextField id="outlined-basic" label="Name" variant="filled" className={classes.ContactFeild}/>
                <TextField id="outlined-basic" label="Email" type='email' variant="filled" className={classes.ContactFeild}/>
                <TextField id="outlined-multiline-flexible" label="Message" variant="filled" multiline minRows={4} maxRows={6} className={classes.ContactFeild}/>
                <Button variant='outlined' color={'secondary'} style={{width: '10vw', border: '3px solid', margin: '1vh', display: 'flex', alignSelf: 'center', justifySelf: 'center'}}>Submit</Button>
            </Paper>
            {/**TODO: Add timeout snackbar notification for when submit is successful. */}
            </div>
        </ThemeProvider>
    );
}

export default ContactSection;