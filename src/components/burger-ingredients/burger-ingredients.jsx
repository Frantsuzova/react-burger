import React from 'react';
import PropTypes from 'prop-types';
import burgerIngredientsStyles from './burger-ingredients.module.css';
// компонент
import BurgerIngredientsCategory from '../burger-ingredients-category/burger-ingredients-category.jsx';
// компонент от яндекса
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerIngredients({ openModal, items }) {
    const [current, setCurrent] = React.useState('bun');

    const bunRef = React.useRef(null);
    const sauceRef = React.useRef(null);
    const mainRef = React.useRef(null);

    function scrollTab(value) {
        if (value) {
            value.scrollIntoView();
        }
    }


    return (
        <>
            <h1 className="text text_type_main-large mt-10">
                Соберите бургер
            </h1>
            {/*переключалка между ингридиентами*/}
            <div className={burgerIngredientsStyles.burgeringredients__tab_selector}>
                <Tab value="bun" active={current === 'bun'} onClick={(value) => {
                    setCurrent(value);
                    scrollTab(bunRef.current);
                }}>Булки</Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={(value) => {
                    setCurrent(value);
                    scrollTab(sauceRef.current);
                }}>Соусы</Tab>
                <Tab value="main" active={current === 'main'} onClick={(value) => {
                    setCurrent(value);
                    scrollTab(mainRef.current);
                }}>Начинки</Tab>
            </div>
            {/*список ингридиентов простыней*/}
            <div className={burgerIngredientsStyles.burgeringredients__scroll_container}>
                <BurgerIngredientsCategory ref={bunRef} heading="Булки" openModal={openModal} items={items.filter(item => item.type === 'bun')} />
                <BurgerIngredientsCategory ref={sauceRef} heading="Соусы" openModal={openModal} items={items.filter(item => item.type === 'sauce')} />
                <BurgerIngredientsCategory ref={mainRef} heading="Начинки" openModal={openModal} items={items.filter(item => item.type === 'main')} />
            </div>
        </>
    );
}

// проверка типов
BurgerIngredients.propTypes = {
    openModal: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired
    }).isRequired).isRequired
};