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

//export default function BurgerConstructor(props) {
export default function BurgerConstructor({ openModal, items }) {

    //подготовка к моделированию бургера
    const bun = items.find((item) => item.type === 'bun');
    const otherIngr = items.filter((item) => item.type !== 'bun');

    //цена
    const bunPrice = bun ? (bun.price * 2) : 0;
    const otherIngrPrice = otherIngr ? (otherIngr.reduce((acc, p) => acc + p.price, 0)) : 0;

    //клик
    function onClick() {
        //console.log('пока все работает');
        openModal({ modalType: "orderDetail" });
    }

    return (
        <>
            <ul className={burgerConstructorStyles.burger_constructor__main_list}>
                {/* верх бургера (заблочен для сдвига) */}
                {bun &&
                    <li className={burgerConstructorStyles.burger_constructor__main_list_item} key="top_bun">
                        <ConstructorElement
                            type='top'
                            isLocked={true}
                            text={bun.name + ' (верх)'}
                            thumbnail={bun.image}
                            price={bun.price}
                        />

                    </li>
                }
                {/*то, что со скроллом*/}
                <li className={burgerConstructorStyles.burger_constructor__main_list_item}>
                    {otherIngr &&
                        <ul className={burgerConstructorStyles.burger_constructor__draggable_list} key="middle_items">
                            {otherIngr.map((item, index) => (
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
                    }
                </li>


                {/* низ бургера (заблочен для сдвига) */}
                {bun &&
                    <li className={burgerConstructorStyles.burger_constructor__main_list_item} key="bottom_bun">
                        <ConstructorElement
                            isLocked={true}
                            type='bottom'
                            text={bun.name + ' (низ)'}
                            thumbnail={bun.image}
                            price={bun.price}
                        />
                    </li>
                }
            </ul>
            {/* итог заказа */}
            <div className={burgerConstructorStyles.burger_constructor__order_details}>
                <p className="text text_type_digits-medium">
                    {bunPrice + otherIngrPrice}
                </p>
                <span className='ml-2 mr-10'>
                    <CurrencyIcon type="primary" />
                </span>
                <Button type="primary" size="medium" onClick={onClick}>
                    Оформить заказ
                </Button>
            </div>
        </>
    );
}

// проверка типов
BurgerConstructor.propTypes = PropTypes.arrayOf(BurgerIngredientsCategoryType).isRequired;