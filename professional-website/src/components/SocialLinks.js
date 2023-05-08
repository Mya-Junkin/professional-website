import { IconButton } from "@material-ui/core";

import githubIcon from '../images/github-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';
import youtubeIcon from '../images/youtube-icon.png';
import pageIcon from '../images/page-icon.png';

const SocialLinks = () => {
    return(
        <div>

            
            <IconButton aria-label="GitHub" size="small" href="https://github.com/Mya-Junkin" target="_blank">
                <img src={ githubIcon } alt="GitHub Icon" style={{padding: '1vw 0.5vw'}} />
            </IconButton>
            

            
            <IconButton aria-label="LinkedIn" size="small" href="https://www.linkedin.com/in/mya-junkin-b57b981b3/" target="_blank">
                <img src={ linkedinIcon }  alt="LinkedIn Icon" style={{padding: '1vw 0.5vw'}} />
            </IconButton>
            

            
            <IconButton aria-label="YouTube" size="small" href="https://www.youtube.com/channel/UCN2cKSx5Ob1QEAl731Ti5Gw" target="_blank">
                <img src={ youtubeIcon }  alt="YouTube Icon" style={{padding: '1vw 0.5vw'}} />
            </IconButton>
            

            
            <IconButton aria-label="Resume" size="small" href="https://drive.google.com/file/d/1xIzmu4UBONzI3tlfnA_A2WEyLBIF_J1Z/view?usp=share_link" target="_blank">
                <img src={ pageIcon }  alt="Resume Icon" style={{padding: '1vw 0.5vw'}} />
            </IconButton>
            

        </div>
    );
}

export default SocialLinks;