import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Paper, Typography, TextField, Button} from '@material-ui/core';
import useStyles from '../styles.js';
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme.js';


const ContactSection = () => {    
    const classes = useStyles();
    const form = useRef();

    const sendMessage = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_55kcxes', 'template_fda7ip8', form.current, 'qKYF6pGWpIQaYbmE1')
        .then((result) => {
            console.log(result.text);
            document.getElementById("form").reset();
        }, (error) => {
            console.log(error.text);
            document.getElementById("form").reset();
        });

    
    };
  
    return (

        <ThemeProvider theme={ theme }>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '5vh', marginBottom: '10vh'}}>
            <Typography variant='h2' style={{padding: '5vh'}}>CONTACT</Typography>
            <Paper className={classes.ContactCard}>
                <form id="form" ref={form} onSubmit={sendMessage} className={classes.form} style={{display: 'flex', flexDirection: 'column'}}>
                <TextField 
                    id="outlined-basic"
                    label="Name"
                    type="text"
                    required
                    variant="filled"
                    className={classes.ContactFeild}
                    name="name"
                />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    type='email'
                    required
                    variant="filled"
                    className={classes.ContactFeild}
                    name="email"
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Message"
                    required
                    variant="filled"
                    multiline minRows={4} maxRows={6}
                    className={classes.ContactFeild}
                    name="email"
                />
                <Button 
                    type="submit"
                    variant='outlined'
                    color={'secondary'} 
                    style={{width: '10vw', border: '3px solid', margin: '1vh', display: 'flex', alignSelf: 'center', justifySelf: 'center'}}
                    value="Send"
                >
                    Submit
                </Button>
                </form>
                </Paper>
            {/**TODO: Add timeout snackbar notification for when submit is successful. */}
            </div>
        </ThemeProvider>
    );
}

export default ContactSection;