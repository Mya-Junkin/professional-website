import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme.js';
import SocialLinks from '../components/SocialLinks.js';
import ScrollToButton from '../components/ScrollToButton.js';
import jumpUpIcon from '../images/jumpup-icon.png';


const Footer = () => {
    //const classes = useStyles();

    return(
        <ThemeProvider theme={ theme }>
            <div style={{backgroundColor: '#3B4046', display: 'flex', alignItems: 'center', justifyItems: 'center', flexDirection: 'column', padding: '5vh'}}>
            <ScrollToButton style={{border: '0px solid'}}>
                <img src={ jumpUpIcon } alt="Up Arrow"/>
            </ScrollToButton>
            <SocialLinks />
            </div>
        </ThemeProvider>
    );
}

export default Footer;