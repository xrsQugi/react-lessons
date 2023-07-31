import UserMenu from '../../components/User/UserMenu';
import RenderCount from '../../components/Render/RenderCount';
import Section from '../../components/Section/Section';
import css from './Hooks.module.css';

export default function Hooks() {
  return (
        <div className={css.container}>
            <Section title="UseContext">
                <UserMenu></UserMenu>
            </Section>
            <Section title="UseRef">
                <RenderCount></RenderCount>
            </Section>
        </div>
    );
}
