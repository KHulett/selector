import React, {Component} from 'react';
import Shape from './Shape.js';

class Selector extends Component {

  constructor() {
    super();
    this.state = {
      selectedShape: 'square',
    }
  }

  selectShape = (shapeName) => {
    this.setState({
      selectedShape: shapeName,
    })
  }

  render() {
    return (
      <div className="container">
        <div className="navbar">
          <div>Selected: <span>{this.state.selectedShape}</span></div>
        </div>
        <div className="shape-list">
          <Shape shape = "square" selectShape={this.selectShape}/>
          <Shape shape = "circle"selectShape={this.selectShape}/>
          <Shape shape = "triangle"selectShape={this.selectShape}/>
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