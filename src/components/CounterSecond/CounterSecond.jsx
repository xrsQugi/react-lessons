import { useEffect, useState } from "react";
import css from './CounterSecond.module.css';


export default function CounterSecond(){
    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);

    const handleIncrementA = () => {
        setCounterA(prevState => prevState + 1);
    }

    const handleIncrementB = () => {
        setCounterB(prevState => prevState + 1);
    }

    useEffect(() => {
        console.log('Start useEffect counterA');
    }, [counterA])

    useEffect(() => {
        console.log('Start useEffect counterB');
    }, [counterB])

    return(
        <div className={css.btn_block}>
            <button 
                onClick={handleIncrementA}
                className={css.count_button}
                type="button" 
            >
                Click on counterA <span className={css.change_number}>{counterA}</span>
            </button>
            <button 
                onClick={handleIncrementB}
                className={css.count_button}
                type="button" 
            >
                Click on counterB <span className={css.change_number}>{counterB}</span>
            </button>
        </div>
    )
}