import { IconButton } from "@material-ui/core";

import githubIcon from '../images/github-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';
import youtubeIcon from '../images/youtube-icon.png';
import pageIcon from '../images/page-icon.png';

const SocialLinks = () => {
    return(
        <div>
            <IconButton aria-label="GitHub" size="small" href="https://github.com/Mya-Junkin" target="_blank">
                <img src={ githubIcon } alt="GitHub Icon"/>
            </IconButton>
            <IconButton aria-label="LinkedIn" size="small" href="https://github.com/Mya-Junkin" target="_blank">
                <img src={ linkedinIcon }  alt="LinkedIn Icon"/>
            </IconButton>
            <IconButton aria-label="YouTube" size="small" href="https://github.com/Mya-Junkin" target="_blank">
                <img src={ youtubeIcon }  alt="YouTube Icon"/>
            </IconButton>
            <IconButton aria-label="Resume" size="small" href="https://github.com/Mya-Junkin" target="_blank">
                <img src={ pageIcon }  alt="Resume Icon"/>
            </IconButton>
        </div>
    );
}

export default SocialLinks;