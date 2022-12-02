import { useState } from 'react';
import './App.css'

export const AddCard = () => {
    
    const [ categories, setCategories ] = useState([]);
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }
    

    return (
        <>

            <h1>Gift Card</h1>

    
            <AddGifts
                onNewCategory={  onAddCategory }
            />

            <ol>
            { 
                categories.map( ( category ) => {
                    return
                    <li key={ category }>{ category }</li>    
                        })
            }
            </ol>

        </>
    )
}