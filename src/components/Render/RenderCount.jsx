import React from 'react';
import { useEffect, useState, useRef} from "react";
import css from './RenderCount.module.css';

export default function RenderCount(){
    const [value, setValue] = useState('initial');
    const renderCount = useRef(1);
    const inputRef = useRef(null);
    const prevValue = useRef('');

    useEffect(() => {
        renderCount.current += 1;
    })

    useEffect(() => {
        prevValue.current = value;
    }, [value])

    const focus = () => {
        inputRef.current.focus();
    }

    return(
        <div className={css.btn_block}>
            <p className={css.text}>Count of renders: {renderCount.current}</p>
            <p className={css.text}>Previous value was: {prevValue.current}</p>
            <input className={css.input}
                ref={inputRef} 
                type="text" 
                onChange={e => setValue(e.target.value)}
                value={value}
            />
            <button className={css.btn_focus} onClick={focus} >Focus</button>
        </div>
    )
}

