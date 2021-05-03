import React from 'react';
import Slides from "../Slides";
import styles from "./slideContainer.module.css"

const SlidesContainer = ({data, size}) => {
    return (
        <div style={{width:`${size}%`}}
             className={styles.slidesContainer}
        >
            <Slides data={data}
                    indicatorDots={true}
                    navigationButtons={true}
                    color={'#6C0056'}/>
        </div>
    );
};

export default SlidesContainer;