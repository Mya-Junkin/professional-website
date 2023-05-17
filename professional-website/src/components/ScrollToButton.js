import { Button } from "@material-ui/core";
import { animateScroll } from "../utils/animateScroll.js";

const ScrollToButton = ({ toId, toRef, duration, children }) => {

    const handleClick = () => scrollTo({ id: toId, ref: toRef, duration });
    
    const logError = () =>
  console.error(
    `Invalid element, are you sure you've provided element id or react ref?`
  );

    const getElementPosition = (element) => element.offsetTop;

    const scrollTo = ({ id, ref = null, duration = 3000 }) => {
    // the position of the scroll bar before the user clicks the button
    const initialPosition = window.scrollY;

    // decide what type of reference that is
    // if neither ref or id is provided  set element to null
    const element = ref ? ref.current : id ? document.getElementById(id) : null;

    if (!element) {
        // log error if the reference passed is invalid
        logError();
        return;
    }

    animateScroll({
        targetPosition: getElementPosition(element),
        initialPosition,
        duration
    });
};


    return(
        <Button 
            variant="outlined" 
            onClick={handleClick} 
            style={{border: '3px solid', borderColor: '#F4B301', color: '#F4B301' }}
        >
            { children }
        </Button>
    );
}

export default ScrollToButton;