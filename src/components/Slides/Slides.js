import React, {useState} from 'react';
import Slide from "./Slide";
import styles from './slides.module.css'
import NavigationButtons from "./NavigationButtons";
import IndicatorDots from "./IndicatorDots";

const DRAG_THRESHOLD = 100;
const MOVE_DISTANCE_PERCENTAGE = 100;
const MIN_DATA_SIZE = 3;
const MAX_DATA_SIZE = 6;

const Slides = ({data, indicatorDots, color}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [mouseDown, setMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [moveX, setMoveX] = useState(0);
    const [distance, setDistance] = useState(0);
    const lastSlideIndex = data.length - 1;

    function handleSwipeStart(event) {
        setMouseDown(true)
        setStartX(event.clientX ? event.clientX : event.targetTouches[0].clientX)
        event.preventDefault();
    }

    function handleSwipeMove(event) {
        if (mouseDown) {
            const touchX = event.clientX ? event.clientX : event.targetTouches[0].clientX;
            let deltaX = touchX - startX;
            setDistance(deltaX)
        }
    }

    function handleSwipeEnd(e) {
        setMouseDown(false)
        setStartX(0)
        if (distance > DRAG_THRESHOLD) {
            if (slideIndex > 0) {
                setDistance(0)
                setSlideIndex(slideIndex - 1)
                setMoveX(moveX + MOVE_DISTANCE_PERCENTAGE)
            }
        } else if (distance < -DRAG_THRESHOLD) {
            if (slideIndex < lastSlideIndex) {
                setDistance(0)
                setSlideIndex(slideIndex + 1)
                setMoveX(moveX - MOVE_DISTANCE_PERCENTAGE)
            }
        }
    }

    function moveToPrevious() {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slideIndex)
        setMoveX(slideIndex > 0 ? moveX + MOVE_DISTANCE_PERCENTAGE : 0)
    }

    function moveToNext() {
        setSlideIndex(slideIndex < lastSlideIndex ? slideIndex + 1 : slideIndex)
        setMoveX(slideIndex < lastSlideIndex ? moveX - MOVE_DISTANCE_PERCENTAGE : moveX)
    }

    function getColor(isActive) {
        return isActive ? color : '#f0f0f0'
    }
    
    return (
        data.length >= MIN_DATA_SIZE && data.length <= MAX_DATA_SIZE ?
            <div className={`${styles.slidesContainer} ${mouseDown ? styles.cursorGrabbing : ''}`}
                 onMouseDown={(event) => handleSwipeStart(event)}
                 onMouseMove={(event) => handleSwipeMove(event)}
                 onMouseUp={(event) => handleSwipeEnd(event)}
                 onTouchStart={(event) => handleSwipeStart(event)}
                 onTouchMove={(event) => handleSwipeMove(event)}
                 onTouchEnd={(event) => handleSwipeEnd(event)}
            >
                <div className={styles.slideContainer}>
                    <div className={styles.slides}
                         style={{transform: `translateX(${moveX}%)`}}>
                        {data.map((slide, index) =>
                            <Slide key={index}
                                   slide={slide}
                            />
                        )}
                    </div>
                    <NavigationButtons slideIndex={slideIndex}
                                       lastSlideIndex={lastSlideIndex}
                                       moveToNext={moveToNext}
                                       moveToPrevious={moveToPrevious}
                                       getColor={getColor}
                    />
                </div>
                {
                    indicatorDots &&
                    <IndicatorDots data={data}
                                   slideIndex={slideIndex}
                                   getColor={getColor}
                    />
                }
            </div>
            : <p className={'headerText'}>This carousel only support
                between {MIN_DATA_SIZE} and {MAX_DATA_SIZE} objects</p>
    )
}

export default Slides