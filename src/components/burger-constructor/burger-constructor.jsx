import PropTypes from "prop-types";
import { useDrag, useDrop } from "react-dnd";
import burgerConstructorStyles from './burger-constructor.module.css';

//компоненты от яндекса
import {
    ConstructorElement,
    DragIcon,
    CurrencyIcon,
    Button
} from '@ya.praktikum/react-developer-burger-ui-components';

//
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    cleanCounter,
    openModalOrder,
    count,
    switchCard,
    deleteCard,
    countPrice,
    addCard,
} from "../../services/actions/index";
import { itemTypes } from "../../services/actions/index";

function Ingredients() {
    const mainIngredients = useSelector(
        (state) => state.constructorList.mainIngredients
    );

    return mainIngredients.map((elem, i) => {
        return (
            <Ingredient
                key={elem.keyAdd}
                className={burgerConstructorStyles.burger_constructor__draggable_list}
                elemKey={elem}
                id={elem._id}
                name={elem.name}
                price={elem.price}
                image={elem.image_mobile}
                index={i}
            />
        );
    });
}


function Ingredient({ id, name, price, image, index, elemKey }) {
    const dispatch = useDispatch();
    const totalCard = useSelector((state) => state.apiList);
    const orderWasCreated = useSelector(state => state.createdOrder.orderBase)
    const { mainIngredients, bun } = useSelector(
        (state) => state.constructorList
    );


    useEffect(() => {
        dispatch(count(mainIngredients, elemKey, totalCard, orderWasCreated));
    }, [mainIngredients, bun, deleteCard, switchCard]);

    const ref = useRef(null);

    const [, dropRef] = useDrop({
        accept: itemTypes.constructor,
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
        hover: (item, monitor) => {
            if (!ref.current) {

                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {

                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {

                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            dispatch(switchCard(dragIndex, hoverIndex, mainIngredients));
            item.index = hoverIndex;
        },
    });
    const [{ isDragging }, dragRef] = useDrag({
        type: itemTypes.constructor,
        item: () => {
            return { id, index, elemKey };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0 : 1;
    dragRef(dropRef(ref));

    return (
        <div
            className={burgerConstructorStyles.burger_constructor__draggable_list_item}
            ref={ref}
            style={{ opacity }}
        >
            <DragIcon type="primary" />
            <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
                handleClose={() => {
                    dispatch(deleteCard(mainIngredients, id, elemKey, totalCard));
                }}
            />
        </div>


    );
}
/*проверка типов*/
Ingredient.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    index: PropTypes.number,
};
/********** */

export default function BurgerConstructor() {
    const { mainIngredients, bun } = useSelector(
        (state) => state.constructorList
    );

    const dispatch = useDispatch();

    const [, dropIngredient] = useDrop({
        accept: itemTypes.ingredient,
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
        drop(item) {
            dispatch(addCard(item, mainIngredients, bun));
        },
    });

    const total = useSelector(state => state.apiList.burgerData)
    useEffect(() => {
        dispatch(countPrice(mainIngredients, bun));

    }, [mainIngredients, bun]);

    const totalPrice = useSelector((state) => state.price.totalPrice);
    let infoToSend = null
    bun.type ? infoToSend = mainIngredients
        .map((elem) => elem._id)
        .concat(bun._id, bun._id) : infoToSend = null



    return (
        <>

            <ul className={burgerConstructorStyles.burger_constructor__main_list} ref={dropIngredient}>

                {/* верх бургера (заблочен для сдвига) */}
                {bun.type &&
                    <li className={burgerConstructorStyles.burger_constructor__main_list_item} key={bun.keyAdd}>
                        <ConstructorElement
                            type='top'
                            isLocked={true}
                            text={bun.name + ' (верх)'}
                            thumbnail={bun.image}
                            price={bun.price}
                        />
                    </li>
                }


                {/*пока нет ингредиентов*/}
                {!bun.type && mainIngredients.length === 0 &&
                    <div >
                        <p className={burgerConstructorStyles.burger_constructor__noingr_space + 'text text_type_main-medium'}>
                            Перетащите сюда ингредиенты
                        </p>
                        <div className={burgerConstructorStyles.burger_constructor__noingr}></div>
                    </div>
                }

                {/*то, что со скроллом*/}

                {mainIngredients.length === 0 && bun.type &&
                    <div className={burgerConstructorStyles.burger_constructor__noingr_space_other}>
                        <p className='text text_type_main-medium'>
                            <span className='text_color_inactive'>
                                Нельзя приготовить омлет, не разбив нескольких яиц,
                                а бургер, не добавив
                            </span> ингредиентов
                            <span className='text text_type_main-small text_color_inactive'>.
                                <br />
                                &copy; Амар Хаям и другие замечательные философы
                            </span>
                        </p>
                    </div>}


                {/************************************************************************************** */}
                <li className={burgerConstructorStyles.burger_constructor__draggable_list} >
                    {mainIngredients.length > 0 && <Ingredients />}
                </li>
                {/************************************************************************************** */}



                {/* низ бургера (заблочен для сдвига) */}
                {bun.type &&
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
                    {totalPrice}
                </p>
                <span className='ml-2 mr-10'>
                    <CurrencyIcon type="primary" />
                </span>
                {!bun.type && <Button type="primary"
                    size="medium">Добавьте булки!</Button>}
                {bun.type &&
                    <Button
                        type="primary"
                        size="medium"
                        onClick={() => dispatch(openModalOrder(infoToSend), cleanCounter(total))}>
                        Оформить заказ
                    </Button>}

            </div>
        </>
    );
}

