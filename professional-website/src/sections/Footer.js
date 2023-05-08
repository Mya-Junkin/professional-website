import React from 'react';
//import useStyles from '../styles.js';
import { ThemeProvider, IconButton } from '@material-ui/core';
import theme from '../theme.js';
import SocialLinks from '../components/SocialLinks.js';
import jumpUpIcon from '../images/jumpup-icon.png';


const Footer = () => {
    //const classes = useStyles();

    return(
        <ThemeProvider theme={ theme }>
            <div style={{backgroundColor: '#3B4046', display: 'flex', alignItems: 'center', justifyItems: 'center', flexDirection: 'column', padding: '5vh'}}>
            <IconButton aria-label="Jump Up" size="small">
                <img src={ jumpUpIcon } alt="Up Arrow"/>
            </IconButton>
            <SocialLinks />
            </div>
        </ThemeProvider>
    );
}

export default Footer;