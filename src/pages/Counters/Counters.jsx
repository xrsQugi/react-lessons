import Counter from '../../components/Counter/Counter';
import CounterSecond from '../../components/CounterSecond/CounterSecond';

export default function Counters() {
    return(
        <div>
            <Counter step={2}></Counter>
            <CounterSecond></CounterSecond>
        </div>
    )
};
