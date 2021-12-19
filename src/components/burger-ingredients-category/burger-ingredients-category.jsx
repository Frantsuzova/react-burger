import React from "react";
import PropTypes from 'prop-types';
import { BurgerIngredientsCategoryType } from '../../utils/types.js';
import burgerIngredientsCategoryStyles from './burger-ingredients-category.module.css';
// компонент
import BurgerIngredientsCard from '../burger-ingredients-card/burger-ingredients-card.jsx';

const BurgerIngredientsCategory = React.forwardRef(({ heading, items, openModal }, ref) => {
    return (
        <section ref={ref}>
            <h2 className="text text_type_main-medium mt-10 mb-6">
                {heading}
            </h2>
            <ul className={burgerIngredientsCategoryStyles.burger_ingredients_list + ' ml-4 mt-6 mr-2 mb-10'}>
                {items.map((item) =>
                    <BurgerIngredientsCard openModal={openModal} name={item.name} id={item._id} price={item.price} image={item.image} value={item.__v} key={item._id} />)}
            </ul>
        </section>
    );
})
export default BurgerIngredientsCategory;
// проверка типов
BurgerIngredientsCategory.propTypes = PropTypes.arrayOf(BurgerIngredientsCategoryType).isRequired;
