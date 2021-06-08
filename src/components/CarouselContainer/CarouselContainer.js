import React from 'react';
import Slides from "../Slides";
import styles from "./carouselContainer.module.css"

const CarouselContainer = ({data, size}) => {
    return (
        <div style={{width:`${size}%`}}
             className={styles.carouselContainer}
        >
            <Slides data={data}
                    indicatorDots={true}
                    navigationButtons={true}
                    color={'#0154b8'}/>
        </div>
    );
};

export default CarouselContainer;