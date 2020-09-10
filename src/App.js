import React, { useState } from 'react';
import Header from "./header";
import Search from "./search";
import Card from "./card";
function App() {
  const [cards,setCard]=useState([])
  function addCard(newCard){
    setCard(preVals=>{
     return [...preVals,newCard];
    });
  }
  console.log(cards[0]);
  return (
    <div className="App">
    <Header/>
    <Search onAdd={addCard}/>
    <div className="res">
      {cards.map((addCard,index)=>{
        return <Card 
        key={index}
        id={index}
        name={addCard.name}/>
      })}
    </div>
    </div>
    
  );
  }

export default App;
