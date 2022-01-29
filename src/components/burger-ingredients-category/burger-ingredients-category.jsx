import PropTypes from 'prop-types';
import burgerIngredientsCategoryStyles from './burger-ingredients-category.module.css';
// компонент
import BurgerIngredientsCard from '../burger-ingredients-card/burger-ingredients-card.jsx';

import { useSelector } from "react-redux";

/************************************************************* */

function Cards({ type }) {
    const info = useSelector((state) => state.apiList.burgerData);

    return (
        <ul className={burgerIngredientsCategoryStyles.burger_ingredients_list +
            ' ml-4 mt-6 mr-2 mb-10'}>
            {info.map((elem, i) => {

                if (elem.type === type) {
                    return (
                        <BurgerIngredientsCard
                            name={elem.name}
                            id={elem._id}
                            price={elem.price}
                            image={elem.image}
                            key={elem._id}
                            index={i}
                            elem={elem} />
                    );
                }
            })}
        </ul>
    );
}
/************************************************************* */

export default function BurgerIngredientsCategory({ textContent, cardType }) {
    return (
        <section id={cardType}>
            <h2 className="text text_type_main-medium mt-10 mb-6">
                {textContent}
            </h2>

            <Cards type={cardType} />


        </section>
    );
};


// проверка типов

const BurgerIngredientsCategoryTypes = PropTypes.shape({
    textContent: PropTypes.string.isRequired,
    cardType: PropTypes.string.isRequired,
});

BurgerIngredientsCategory.propTypes = BurgerIngredientsCategoryTypes.isRequired;