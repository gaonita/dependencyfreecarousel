import React from 'react';
import styles from './slide.module.css'

const Slide = ({slide}) => {
    return (
        <div key={slide.index}
             className={styles.slide}>
            <p className={styles.title}>{slide.title}</p>
            <img alt={slide.title} 
                 src={slide.image}
                 className={styles.image}
            />
            <p className={styles.description}>{slide.text}</p>
        </div>
    );
};

export default Slide;