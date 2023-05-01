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
            <IconButton aria-label="Jump Up" size="small">
                <img src={ jumpUpIcon } alt="Up Arrow"/>
            </IconButton>
            <SocialLinks />
        </ThemeProvider>
    );
}

export default Footer;