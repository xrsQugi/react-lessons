import UserMenu from '../../components/User/UserMenu';
import RenderCount from '../../components/Render/RenderCount';
import Section from '../../components/Section/Section';

export default function Hooks() {
  return (
        <div>
            <Section title="UseContext">
                <UserMenu></UserMenu>
            </Section>
            <Section title="UseRef">
                <RenderCount></RenderCount>
            </Section>
        </div>
    );
}
