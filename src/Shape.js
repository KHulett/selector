import React from 'react';

const Shape = (props) => {
    const shape = props.shape;
    const selectShape = props.selectShape;
    //console.log ("Line 4 in Shape.js, testing props", props);
    return (
        <div className={shape} onClick={() =>selectShape(shape)} />
    )
}

export default Shape;