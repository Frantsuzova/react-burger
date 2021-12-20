import PropTypes from 'prop-types';
import burgerIngredientsCardStyles from './burger-ingredients-card.module.css';
// компоненты от яндекса
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

//export default function BurgerIngredientsCard(props) {
export default function BurgerIngredientsCard({ name, id, image, price, value, openModal }) {

    function onClick() {
        openModal({ modalType: "ingredientDetail", itemId: id });
    }

    return (
        <li className={burgerIngredientsCardStyles.burgeringredients_card} onClick={onClick}>
            {/*подсчет сколько взято*/}
            {value ? <Counter count={value} /> : null}
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

// проверка типов
const BurgerIngredientsCardTypes = PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    openModal: PropTypes.func.isRequired,
});

BurgerIngredientsCard.propTypes = BurgerIngredientsCardTypes.isRequired;