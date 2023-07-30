import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1>Привіт</h1>
      <img src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?cs=srgb&dl=pexels-kellie-churchman-1001682.jpg&fm=jpg" alt="welcome" width={900}/>
      <p>
        Це моя головна сторінка, де я виставляю свої міні завдання з react. Якщо
        цікаво можешь продивитися.
      </p>
    </div>
  );
}
