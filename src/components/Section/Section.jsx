import PropTypes from 'prop-types';
import css from './Section.module.css';

export default function Section({title, children}){
    return(
        <div className={css.block}>
            {title && <h1 className={css.title_text}>{title}</h1>}
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};