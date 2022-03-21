import burgerIngredientsCategoryStyles from './burger-ingredients-category.module.css';
// компонент
import BurgerIngredientsCard from '../burger-ingredients-card/burger-ingredients-card';
import { FunctionComponent } from "react";
import { useSelector } from '../../services/hooks';
//import { useSelector } from "react-redux";
import { TIngredient } from '../../services/types/types';
import { RootState } from '../../services/reducers/index';


/************************************************************* */

//function Cards({ type }) {
const Cards: FunctionComponent<{ type: string }> = ({ type }) => {
    const info = useSelector((state) => state.apiList.burgerData);
    if (info)
        return (
            <ul className={burgerIngredientsCategoryStyles.burger_ingredients_list +
                ' ml-4 mt-6 mr-2 mb-10'}>
                {info.map((elem: TIngredient, i: number) => {

                    if (elem.type === type) {
                        return (
                            <BurgerIngredientsCard
                                index={i}
                                elem={elem}
                                key={elem._id} />
                        );
                    }
                })}
            </ul>
        );
    else return null
}
/************************************************************* */

const BurgerIngredientsCategory: FunctionComponent<{ textContent: string, cardType: string }> = ({ textContent, cardType }) => {
    return (
        <section id={cardType}>
            <h2 className="text text_type_main-medium mt-10 mb-6">
                {textContent}
            </h2>

            <Cards type={cardType} />


        </section>
    );
};
export default BurgerIngredientsCategory;

