import { useState } from 'react';
import { AddGifts } from './components/AddGifts';
import './App.css'

export function App() {

  const [ gifts, setGifts ] = useState([]);

  const handleAddGifts = ( newGift ) => {

    if ( gifts.includes( newGift ) ) return;

    setGifts([ ...gifts, newGift ])

  }
  return (
    
    <div className="container">
      <h1>Gift Card</h1>

      <AddGifts onNewValue={ handleAddGifts }/> 
    <ol>
      {
        gifts.map( gift => {
          return <li key={ gift } id="list">{ gift }</li>
        })
      }
    </ol>
      
    </div>
        
        

  );
}