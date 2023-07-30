import Section from '../../components/Section/Section';
import Counter from '../../components/Counter/Counter';
import CounterSecond from '../../components/CounterSecond/CounterSecond';
import css from './Counters.module.css'

export default function Counters() {
    return(
        <div className={css.block}>
            <Section title="First counter">
                <Counter step={2}></Counter>
            </Section>
            <Section title="Second counter">
                <CounterSecond />
            </Section>
        </div>
    )
};
