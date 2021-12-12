import PropTypes from 'prop-types';
import burgerIngredientsCardStyles from './burgeringredients_card.module.css';
// компоненты от яндекса
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerIngredientsCard(props) {
    return (
        <li className={burgerIngredientsCardStyles.burgeringredients_card}>
            {/*подсчет сколько взято*/}
            {props.value ? <Counter count={props.value} /> : null}
            {/*визуалка*/}
            <img src={props.image} alt={props.name} title={props.name} className="ml-4 mr-4" />
            {/*цена*/}
            <div className={burgerIngredientsCardStyles.burgeringredients_card__ingredient_price}>
                <p className='pr-2 text text_type_digits-default'>{props.price}</p>
                <CurrencyIcon />
            </div>
            {/*название*/}
            <p className={burgerIngredientsCardStyles.burgeringredients_card__ingredient_name + ' text text_type_main-default'}>
                {props.name}
            </p>
        </li>
    );
}

// проверка типов
BurgerIngredientsCard.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
};

