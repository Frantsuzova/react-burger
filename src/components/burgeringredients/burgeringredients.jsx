import React from 'react';
import PropTypes from 'prop-types';
import burgerIngredientsStyles from './burgeringredients.module.css';
// компонент
import BurgerIngredientsCategory from '../burgeringredients_category/burgeringredients_category.jsx';
// компонент от яндекса
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('bun')
    return (
        <>
            <h1 className="text text_type_main-large mt-10">
                Соберите бургер
            </h1>
            {/*переключалка между ингридиентами*/}
            <div className={burgerIngredientsStyles.burgeringredients__tab_selector}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>Булки</Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>Соусы</Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>Начинки</Tab>
            </div>
            {/*список ингридиентов простыней*/}
            <div className={burgerIngredientsStyles.burgeringredients__scroll_container}>
                <BurgerIngredientsCategory heading="Булки" items={props.items.filter(item => item.type === 'bun')} />
                <BurgerIngredientsCategory heading="Соусы" items={props.items.filter(item => item.type === 'sauce')} />
                <BurgerIngredientsCategory heading="Начинки" items={props.items.filter(item => item.type === 'main')} />
            </div>
        </>
    );
}

// проверка типов
BurgerIngredients.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired
    }).isRequired).isRequired
};

