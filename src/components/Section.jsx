import PropTypes from 'prop-types';

export default function Section({title, children}){
    return(
        <div>
            {/* <h2>{title}</h2> */}
            {/* {title && <h1 style={{textAlign: "center"}}>{title}</h1>} - вбудовані стилі */}
            {title && <h1 style={{textAlign: "center", margin: 0}}>{title}</h1>}
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};