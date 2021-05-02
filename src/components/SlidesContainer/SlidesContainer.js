import React from 'react';
import Slides from "../Slides";

const SlidesContainer = ({data, size}) => {
    return (
        <div style={{width:`${size}%`}}>
            <Slides data={data}
                    indicatorDots={true}
                    navigationButtons={true}
                    color={'#6C0056'}/>
        </div>
    );
};

export default SlidesContainer;