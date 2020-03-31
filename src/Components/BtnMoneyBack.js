import React, { Component } from 'react';

export default class BtnMoneyBack extends Component {
	
	render(){
		const { moneyBack} = this.props; 
		
		return (
			<div>
				<button onClick={moneyBack} className="btn btn-info">
				Obtener cambio </button>
				<div class="mt-4" id="show">
				</div>
			</div>
		)
	} 
}

