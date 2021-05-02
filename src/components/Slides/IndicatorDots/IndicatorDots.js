import React from 'react';
import styles from "../slides.module.css";

const IndicatorDots = ({data, slideIndex, getColor}) => {
    return (
        <div className={styles.dotsContainer}>
            {data.map((dot, index) =>
                <div key={index}
                     style={{backgroundColor: getColor(index === slideIndex)}}
                     className={styles.dot}
                />
            )}
        </div>
    );
};

export default IndicatorDots;