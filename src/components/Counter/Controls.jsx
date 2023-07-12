import React from 'react';
import css from "./Counter.module.css";

export default function Controls({onDecrement, onIncrement, step}) {
    return ( 
        <>
            <button 
                className={css.count_button}
                type="button"
                onClick={onDecrement}
            > Minus {step}
            </button>
            <button
                className={css.count_button}
                type="button" 
                onClick={onIncrement}
            > Plus {step}
            </button>
        </>
    );
}