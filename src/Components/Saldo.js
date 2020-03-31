import React, { Component } from 'react';

export default class Saldo extends Component {
	render(){
		const {coins, addValue, children} = this.props;
		const buttons = coins.map((item, i) => {
			return (
					
								<div class="text-align-center col-3 col-md-2 d-inline-block">
									<button key={i} class="btn btn-coins" value={item} onClick={addValue}>
								
										{item < 1 ? `${item*100 }cent.` : `${item}€`}
							
									</button>
								</div>
					)
				}
			)
		return (
			<div class="row text-center p-relative">
			
			  <div class="col-12">
				<h3 class="mt-4">Insertar monedas:</h3>
				<div class="mt-4 coins">{buttons}</div>
			  </div>

			  <div class="col-12 mt-4">
			  	<h3>Dinero disponible:</h3>
			  	<p>{children}</p>
			  </div>
			</div>
		)
	}
}

