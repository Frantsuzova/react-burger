import burgerIngredientsCardStyles from './burger-ingredients-card.module.css';
// компоненты от яндекса
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FunctionComponent } from "react";

//
//import { useDispatch } from "react-redux";
import { useDispatch } from '../../services/hooks';
import { useDrag } from 'react-dnd';
import { itemTypes } from "../../services/actions/index";
import { currentIngredient } from "../../services/actions/index";

import { IIngredientElem } from '../../services/types/types';


const BurgerIngredientsCard: FunctionComponent<{ index: number, elem: IIngredientElem }> = ({ index, elem }) => {
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

    return (
        <li
            className={burgerIngredientsCardStyles.burgeringredients_card}
            ref={dragRef} id={elem._id}
            onClick={() => dispatch(currentIngredient(elem))}
        >
            {/*подсчет сколько взято*/}
            {elem.counter > 0 && <Counter count={elem.counter} size="default" />}
            {/*визуалка*/}
            <img src={elem.image} alt={elem.name} title={elem.name} className="ml-4 mr-4" />
            {/*цена*/}
            <div className={burgerIngredientsCardStyles.burgeringredients_card__ingredient_price}>
                <p className='pr-2 text text_type_digits-default'>{elem.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            {/*название*/}
            <p className={burgerIngredientsCardStyles.burgeringredients_card__ingredient_name + ' text text_type_main-default'}>
                {elem.name}
            </p>
        </li>
    );
}

export default BurgerIngredientsCard;