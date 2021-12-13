import PropTypes from 'prop-types';
import { BurgerIngredientsCategoryType } from '../../utils/types.js';
import burgerConstructorStyles from './burger-constructor.module.css';
//компоненнты от яндекса
import {
    ConstructorElement,
    DragIcon,
    CurrencyIcon,
    Button
} from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerConstructor(props) {
    return (
        <>
            <ul className={burgerConstructorStyles.burger_constructor__main_list}>
                {/* верх бургера (заблочен для сдвига) */}
                <li className={burgerConstructorStyles.burger_constructor__main_list_item} key="top_bun">
                    <ConstructorElement
                        type='top'
                        isLocked={true}
                        text={props.topItem.name + ' (верх)'}
                        thumbnail={props.topItem.image}
                        price={props.topItem.price}
                    />
                </li>

                {/*то, что со скроллом*/}
                <li className={burgerConstructorStyles.burger_constructor__main_list_item}>
                    <ul className={burgerConstructorStyles.burger_constructor__draggable_list} key="middle_items">
                        {props.middleItems.map((item, index) => (
                            <li className={burgerConstructorStyles.burger_constructor__draggable_list_item} key={item._id + '_' + index}>
                                <DragIcon type='primary' />
                                <ConstructorElement
                                    text={item.name}
                                    thumbnail={item.image}
                                    price={item.price}
                                />
                            </li>
                        ))}
                    </ul>
                </li>
                {/* низ бургера (заблочен для сдвига) */}
                <li className={burgerConstructorStyles.burger_constructor__main_list_item} key="bottom_bun">
                    <ConstructorElement
                        isLocked={true}
                        type='bottom'
                        text={props.bottomItem.name + ' (низ)'}
                        thumbnail={props.bottomItem.image}
                        price={props.bottomItem.price}
                    />
                </li>
            </ul>
            {/* итог заказа */}
            <div className={burgerConstructorStyles.burger_constructor__order_details}>
                <p className="text text_type_digits-medium">
                    {
                        props.topItem.price +
                        props.middleItems.reduce((acc, p) => acc + p.price, 0) +
                        props.bottomItem.price
                    }
                </p>
                <span className='ml-2 mr-10'>
                    <CurrencyIcon type="primary" />
                </span>
                <Button type="primary" size="medium">
                    Оформить заказ
                </Button>
            </div>
        </>
    );
}

// проверка типов
BurgerConstructor.propTypes = PropTypes.arrayOf(BurgerIngredientsCategoryType).isRequired;

/*
BurgerConstructor.propTypes = {
    topItem: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
    }),

    middleItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired
    })),

    bottomItem: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
    })
};
*/
