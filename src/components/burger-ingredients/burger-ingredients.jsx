import burgerIngredientsStyles from './burger-ingredients.module.css';
// компонент
import BurgerIngredientsCategory from '../burger-ingredients-category/burger-ingredients-category.jsx';
// компонент от яндекса
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

//
import { useDispatch, useSelector } from "react-redux";
import { switchTab } from "../../services/actions";
import { useRef, useEffect } from "react";

function MainTab() {
    const dispatch = useDispatch();
    const current = useSelector((state) => state.tabSwtich.currentTab);

    const toSwitchTab = (e) => {
        dispatch(switchTab(e));
        const element = document.getElementById(e);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={burgerIngredientsStyles.burgeringredients__tab_selector}>
            <Tab
                value="bun"
                active={current === "bun"}
                onClick={(e) => toSwitchTab(e)}
            >
                Булки
            </Tab>
            <Tab
                value="sauce"
                active={current === "sauce"}
                onClick={(e) => toSwitchTab(e)}
            >
                Соусы
            </Tab>
            <Tab
                value="main"
                active={current === "main"}
                onClick={(e) => toSwitchTab(e)}
            >
                Начинки
            </Tab>
        </div>
    );
}

export default function BurgerIngredients() {
    const dispatch = useDispatch();
    const scrollRef = useRef();
    const ingredientsScroll = (e) => {
        const bun = e.target.childNodes[0].offsetHeight;
        const sauce = e.target.childNodes[1].clientHeight;

        if (scrollRef.current.scrollTop < bun) {
            dispatch(switchTab("bun"));
        }
        if (
            scrollRef.current.scrollTop >= bun &&
            scrollRef.current.scrollTop < bun + sauce
        ) {
            dispatch(switchTab("sauce"));
        }
        if (scrollRef.current.scrollTop >= bun + sauce) {
            dispatch(switchTab("main"));
        }
    };
    useEffect(() => {

        if (scrollRef && scrollRef.current) {
            scrollRef.current.addEventListener("scroll", (e) => {
                ingredientsScroll(e);
            });
        }

        return () => {
            scrollRef.current.removeEventListener("scroll", (e) => {
                ingredientsScroll(e);
            });
        };


    }, []);


    return (
        <>
            <h1 className="text text_type_main-large mt-10">
                Соберите бургер
            </h1>
            {/*переключалка между ингридиентами*/}
            <MainTab />

            {/*список ингридиентов простыней*/}
            <div className={burgerIngredientsStyles.burgeringredients__scroll_container} ref={scrollRef}>
                <BurgerIngredientsCategory textContent="Булки"
                    cardType="bun" />
                <BurgerIngredientsCategory textContent="Соусы"
                    cardType="sauce" />
                <BurgerIngredientsCategory textContent="Начинки"
                    cardType="main" />
            </div>
        </>
    );
}

// проверка типов
