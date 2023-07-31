import DropDown from '../../components/DropDown/DropDown';
import LifeCycle from '../../components/LifeCycle/LifeCycle';
import Section from '../../components/Section/Section';
import css from './DropDownPage.module.css';

export default function DropDownPage(params) {
  return (
    <div className={css.container}>
      <Section title="Dropdown">
        <DropDown />
      </Section>
      <Section title="Live cycle">
        <LifeCycle item={5}></LifeCycle>
      </Section>
    </div>
  );
}
