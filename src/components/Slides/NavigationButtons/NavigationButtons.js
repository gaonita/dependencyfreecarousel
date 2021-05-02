import React from 'react';
import styles from "../slides.module.css";
import {ReactComponent as ArrowLeft} from "../../../assets/arrowLeft.svg";
import {ReactComponent as ArrowRight} from "../../../assets/arrowRight.svg";

const NavigationButtons = ({slideIndex, moveToPrevious, moveToNext, lastSlideIndex, getColor }) => {
    
    function getCursor(isActive){
        return isActive? 'pointer' :null
    }
    
    return (
        <div className={styles.navigateButtonContainer}>
            <button
                className={styles.navigateButton}
                onClick={() => moveToPrevious()}>
                <ArrowLeft style={{cursor: getCursor(slideIndex !== 0)}}
                           fill={getColor(slideIndex !== 0 )}
                           alt={'previous'}
                />
            </button>
            <button
                className={styles.navigateButton}
                onClick={() => moveToNext()}>
                <ArrowRight style={{cursor: getCursor(slideIndex !== lastSlideIndex)}}
                            fill={getColor(slideIndex !== lastSlideIndex)}
                            alt={'next'}
                />
            </button>
        </div>
    );
};

export default NavigationButtons;