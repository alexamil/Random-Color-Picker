import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button.js';

/*Random‘s job is to store a random color, and to use that color to update the screen’s background.In Random, find the method named formatColor. This method transforms an rgb array into something a bit more readable.Inside of the <h1></h1>, instead of simply using this.state.color, call the formatColor function and pass in this.state.color as an argument.*/
class Random extends React.Component {
  constructor(props){
super(props);
this.state = { color: [100, 5, 80] }
this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.applyColor();
  }

  handleClick(){
    this.setState({color: this.chooseColor()})
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
          Your color is {this.formatColor(this.state.color)}
        </h1>
         <Button 
         onClick={this.handleClick}
         light={this.isLight()} />
      </div>
    );
  }
}

ReactDOM.render(
  <Random />, 
  document.getElementById('app')
);
