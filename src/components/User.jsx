import PropTypes from 'prop-types';

export default function Painting({
    name, 
    age, 
    rating
}){
    return(
      <div>
        <p>
          Імя: {name}
        </p>
        <p>
          Вік: {age}
        </p>
        <p>
          Рейтинг: {rating}
        </p>
      </div>)
}

Painting.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
};