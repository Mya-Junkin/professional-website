import React, { useState } from 'react';
import {Paper, Typography, TextField, Button} from '@material-ui/core';
import useStyles from '../styles.js';
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme.js';


const ContactSection = () => {
    const classes = useStyles();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {

        console.log(name)
        console.log(email)
        console.log(message)
 
    }

    return(
        <ThemeProvider theme={ theme }>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '5vh', marginBottom: '10vh'}}>
            <Typography variant='h2' style={{padding: '5vh'}}>CONTACT</Typography>
            <Paper className={classes.ContactCard}>
                <form onSubmit={onSubmit} className={classes.form}>
                <TextField 
                    id="outlined-basic"
                    label="Name"
                    required
                    variant="filled"
                    className={classes.ContactFeild}
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    type='email'
                    required
                    variant="filled"
                    className={classes.ContactFeild}
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Message"
                    required
                    variant="filled"
                    multiline minRows={4} maxRows={6}
                    className={classes.ContactFeild}
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                />
                <Button 
                    type="submit"
                    variant='outlined'
                    color={'secondary'} 
                    style={{width: '10vw', border: '3px solid', margin: '1vh', display: 'flex', alignSelf: 'center', justifySelf: 'center'}}
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