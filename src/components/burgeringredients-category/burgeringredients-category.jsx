import PropTypes from 'prop-types';
import { BurgerIngredientsCategoryType } from '../../utils/types.js';
import burgerIngredientsCategoryStyles from './burgeringredients-category.module.css';
// компонент
import BurgerIngredientsCard from '../burgeringredients-card/burgeringredients-card.jsx';

export default function BurgerIngredientsCategory(props) {
    return (
        <section>
            <h2 className="text text_type_main-medium mt-10 mb-6">
                {props.heading}
            </h2>
            <ul className={burgerIngredientsCategoryStyles.burger_ingredients_list + ' ml-4 mt-6 mr-2 mb-10'}>
                {props.items.map((item) =>
                    <BurgerIngredientsCard name={item.name} price={item.price} image={item.image} value={item.__v} key={item._id} />)}
            </ul>
        </section>
    );
}

// проверка типов
BurgerIngredientsCategory.propTypes = PropTypes.arrayOf(BurgerIngredientsCategoryType).isRequired;
/*
BurgerIngredientsCategory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired,
        _id: PropTypes.string.isRequired
    }).isRequired).isRequired
};
*/