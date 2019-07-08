import React, {Component} from 'react';
import Shape from './Shape.js';

class Selector extends Component {

  render() {
    return (
      <div className="container">
        <div className="navbar">
          <div>Selected: <span> What goes here?!</span></div>
        </div>
        <div className="shape-list">
          <Shape shape = "square"/>
          <Shape shape = "circle"/>
          <Shape shape = "triangle"/>
          Add the shape component here!!
        </div>
      </div>

      // <div className= "container">
      //   <div className= "heading"> <h1>Selected:{this.state.selector}</h1> </div>
      //   <div className= "shape_grid" style="inline-block">
      //     <button type="button" name= "square"></button>
      //     <button type="button" name= "circle"></button>
      //     <button type="button" name= "triangle"></button>
      //   </div>
      // </div>
    )  
  }
}

export default Selector;