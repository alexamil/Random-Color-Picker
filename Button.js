import React from 'react';
/*A user should be able to click on a button to pick a new random color. In the code editor, you can see a Button.js file. That will be your button!*/
export class Button extends React.Component {
	render() {
		return (
			<button 
      onClick = {this.props.onClick}
				className={ this.props.light ? 'light-button' : 'dark-button' }>
				Refresh
			</button>
		);
	}
}
