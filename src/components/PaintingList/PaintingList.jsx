import Painting from "./Painting";
import PropTypes from 'prop-types';
// import "./PaintingList.css";
import style from './PaintingList.module.css';



//*----------вбудовані стилі----------
// const paintingListStyle = {
//     listStyle: "none", 
//     display: "flex",
//     justifyContent: "center",
//     gap: 20,
//     marginTop: 20,
// }
//*----------вбудовані стилі----------


export default function PaintingList({items}){
    return(
        //* <ul style={paintingListStyle}> - вбудовані стилі
        // <ul className="painting_list">
        <ul className={style.painting_list}>
            {items.map((item) => (
                <li key={item.id}>
                    <Painting
                        imageUrl={item.url}
                        title={item.title}
                        price={item.price}
                        authorUrl={item.author.url}
                        authorTag={item.author.tag}
                        quantity={item.quantity}
                    />
                </li>
            ))}
        </ul>
    )
}

PaintingList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
}
  