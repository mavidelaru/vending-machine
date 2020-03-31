import React, {Component} from 'react';

export default class Item extends Component {
	render(){
		const {purchaseItem, item, i} = this.props;
		return (
		<div class="d-flex flex-row p-2 ">
			
			<div class="col-xs-12 col-sm-12 mb-5 justify-content-between">
			
			<figure class="figure">
			<img class="img-responsive center-block img-max-150" src={item.imgUrl} alt=".." />
				<figcaption class="figure-caption">{item.itemName}</figcaption>
			</figure>
			{item.itemCount ? 
				<div class="items-left p-2 bg-success text-success"><span>Cantidad disponible: {item.itemCount}</span></div> : 
				<div class="items-left bg-danger text-danger"><span>Fuera de stock</span></div>
			}

	      <div class="item-price bg-info"><span>Precio: {item.itemPrice}€</span></div>
	      <a onClick={purchaseItem} data-value={i} className="btn-purchase" href="#"></a>
		</div>
		</div>
		)
	}
}

