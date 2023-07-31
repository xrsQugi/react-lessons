import css from './NotFound.module.css';

export default function NotFound() {
    return(
        <div className={css.block}>
            <h1 className={css.title}>404</h1>
            <p className={css.text_page}>Page not found. </p>
        </div>
    )
};