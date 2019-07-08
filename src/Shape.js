import React from 'react';

const Shape = (props) => {
    console.log ("Line 4 in Shape.js, testing props", props.shape);
    return (
        <div className={props.shape}/>
    )
}

export default Shape;