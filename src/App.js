import React, { Component } from 'react';
import Items from './Components/Items';
import Saldo from './Components/Saldo';
import Available from './Components/Available';
import BtnMoneyBack from './Components/BtnMoneyBack';

import './css/App.css';
import './css/bootstrap.min.css';


import twix from './img/twix.jpg';
import coke from './img/coca-cola.jpg';
import chocolate from './img/chocolate.jpg';
import doritos from './img/doritos.jpg';
import water from './img/water.gif';
import chips from './img/chips.jpg';

class App extends Component {

  constructor(){
    
    super();

    this.state = {
      
      items: [
        {itemId: "a01", itemName: "Twix", itemPrice: 1, itemCount: 2, imgUrl: twix},
        {itemId: "a02", itemName: "Coca-cola", itemPrice: 2.4, itemCount: 3, imgUrl: coke},
        {itemId: "a03", itemName: "Chocolate", itemPrice: 1.5, itemCount: 4, imgUrl: chocolate},
        {itemId: "a04", itemName: "Doritos", itemPrice: 1.40, itemCount: 1, imgUrl: doritos},
        {itemId: "b01", itemName: "Agua", itemPrice: 0.95, itemCount: 2, imgUrl: water},
      ],

      money: 0,
      coins: [0.05, 0.10, 0.20, 0.50, 1,2],
      isPurchaseAlowed: true,
      justPurchased: ""
    }

    this.addValue = this.addValue.bind(this);
    this.moneyBack = this.moneyBack.bind(this);
    this.purchaseItem = this.purchaseItem.bind(this);
  }

  addValue(e){
    const currentValue = this.state.money;
    const isPurchaseAlowed = this.state.isPurchaseAlowed;
    const addedValue = parseFloat(e.target.value, 10);
    const newValue = currentValue + addedValue;

    if(isPurchaseAlowed){
      this.setState({
        money: parseFloat(newValue.toFixed(2), 10)
      });
    } 
  }

  moneyBack(){

    
    var cash=this.state.money;    
    let coin = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.01];
    let message = "Tu cambio: <b>"+(this.state.money)+"€</b></br>";
    let aux = 0;
    let rest = cash;    // Not essential, maintain "cash" to its initial value, to do some detailed instructions, if needed.

    do {
        if (rest >= coin[aux]) {
            message += Math.trunc(rest / coin[aux]) + " moneda de " + coin[aux] + "€ </b> </br>";
            rest -= (coin[aux] * Math.trunc(rest / coin[aux]));
            rest=(Math.round(rest*100))/100;  
        }
        aux++;
    }
    while (rest !== 0);

    document.getElementById("show").innerHTML = message;

    this.setState({
      money: 0,
      isPurchaseAlowed: true,
      justPurchased: ""
    });

  }

  purchaseItem(e){
    e.preventDefault();
    const currentState = this.state.items.slice(0);
    const isPurchaseAlowed = this.state.isPurchaseAlowed;
    let currentMoney = this.state.money;
    const index = e.target.getAttribute('data-value');
    const howMany = currentState[index].itemCount;
    const whichItem = currentState[index].itemName;
    const itemPrice = currentState[index].itemPrice;

    if (howMany > 0 && isPurchaseAlowed && itemPrice > currentMoney) {
      alert("Saldo insuficiente");
    }


     if( isPurchaseAlowed && howMany < 1){
      alert("Out of stock. Would you like something else?");
    }

    if(isPurchaseAlowed && howMany > 0 && currentState[index].itemCount > 0 && itemPrice <= currentMoney){
      currentState[index].itemCount -= 1;
      currentMoney -= itemPrice;

      this.setState({
        items: currentState,
        money: parseFloat(currentMoney.toFixed(2), 10),
        justPurchased: whichItem
      });
    }
  }

  render() {
    return (
      <div class="App">
        <div class="container pt-5">
          <h1 class="text-center">Vending machine</h1>
          
         
             <Saldo  coins={this.state.coins}
             money={this.state.money}
             addValue={this.addValue}
             moneyBack={this.moneyBack}
             lastPurchased={this.state.justPurchased}>
       
            <Available money={this.state.money} />
            
            <BtnMoneyBack money={this.state.money}
                     moneyBack={this.moneyBack}
                     lastPurchased={this.state.justPurchased}/>
            
            
            </Saldo>
         
             <Items  items={this.state.items} purchaseItem={this.purchaseItem} />
         

        </div>
      </div>
    );
  }
}


export default App;
