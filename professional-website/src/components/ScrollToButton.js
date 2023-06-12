import React, {useState} from 'react';
import { Button } from "@material-ui/core";

const ScrollToButton = ({ toId, children, style}) => {
  
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('scroll', toggleVisible);

    return(
        <Button 
            variant="outlined" 
            onClick={scrollToTop} 
            style={ style }
        >
            { children }
        </Button>
    );
}

export default ScrollToButton;