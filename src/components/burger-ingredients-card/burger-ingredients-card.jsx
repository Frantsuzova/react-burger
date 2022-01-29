import burgerIngredientsCardStyles from './burger-ingredients-card.module.css';
// компоненты от яндекса
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";

//
import { useDispatch } from "react-redux";
import { useDrag } from 'react-dnd';
import { itemTypes } from "../../services/actions/index";
import { currentIngredient } from "../../services/actions/index";


export default function BurgerIngredientsCard({ id, image, price, name, index, elem }) {
    /*************************************************************** */

    const dispatch = useDispatch();

    const [{ isDragging }, dragRef] = useDrag({
        type: itemTypes.ingredient,
        item: {
            item: elem,
            index: index
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging() ? 0.4 : 1,
        })
    })
    /*************************************************************** */


    return (
        <li
            className={burgerIngredientsCardStyles.burgeringredients_card}
            ref={dragRef} id={id}
            onClick={() => dispatch(currentIngredient(elem))}
        >
            {/*подсчет сколько взято*/}
            {elem.counter > 0 && <Counter count={elem.counter} size="default" />}
            {/*визуалка*/}
            <img src={image} alt={name} title={name} className="ml-4 mr-4" />
            {/*цена*/}
            <div className={burgerIngredientsCardStyles.burgeringredients_card__ingredient_price}>
                <p className='pr-2 text text_type_digits-default'>{price}</p>
                <CurrencyIcon />
            </div>
            {/*название*/}
            <p className={burgerIngredientsCardStyles.burgeringredients_card__ingredient_name + ' text text_type_main-default'}>
                {name}
            </p>
        </li>
    );
}

/********************************* */
BurgerIngredientsCard.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    index: PropTypes.number,
    elem: PropTypes.object
};