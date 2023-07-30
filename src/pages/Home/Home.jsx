import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.block}>
      <h1 className={css.title}>Привіт</h1>
      <img className={css.photo_home} src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?cs=srgb&dl=pexels-kellie-churchman-1001682.jpg&fm=jpg" alt="welcome" width={900}/>
      <p className={css.text}>
        Це моя головна сторінка, де я виставляю свої міні завдання з react. Якщо
        цікаво можешь продивитися.
      </p>
    </div>
  );
}
