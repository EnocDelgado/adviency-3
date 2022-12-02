import { useState } from 'react';
import './AddGifts.css'

export const AddGifts = ({ onNewValue }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // onNewValue( categories => [ inputValue, ...categories ]);
        onNewValue( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Add gifts"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}