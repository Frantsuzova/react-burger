import appHeaderStyles from './app-header.module.css';
// компонент
import MenuItem from '../menu-item/menu-item';
// компоненты от яндекса
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from '../../services/hooks'
import {
    clearNoLogIn,
} from "../../services/actions/auth";

export default function AppHeader() {
    const { logged } =
        useSelector((state) => state.userInfo);
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        if (!logged) {
            dispatch(clearNoLogIn());
        }
    }, [location.pathname]);
    return (
        <header>
            <nav className={appHeaderStyles.appheader}>
                <ul className={appHeaderStyles.appheader__menu_list}>
                    <li className={appHeaderStyles.appheader__menu_item_left}>
                        <NavLink
                            exact
                            to={{ pathname: "/" }}
                            className={appHeaderStyles.link}
                            activeClassName={appHeaderStyles.activelink}
                        >
                            <BurgerIcon type="primary" />
                            <span className="text text_type_main-default text_color_inactive ml-2 mr-5">Конструктор</span>
                        </NavLink>
                    </li>
                    <li className={appHeaderStyles.appheader__menu_item_left}>
                        <NavLink
                            exact
                            to={{ pathname: "/feed" }}
                            className={appHeaderStyles.link}
                            activeClassName={appHeaderStyles.activelink}
                        >
                            <ListIcon type="secondary" />
                            <span className="text text_type_main-default text_color_inactive ml-2 mr-5">Лента&nbsp;заказов</span>
                        </NavLink>
                    </li>
                    <li className={appHeaderStyles.appheader__menu_item_center}>
                        <NavLink exact to={{ pathname: "/" }} >
                            <Logo />
                        </NavLink>
                    </li>
                    <li className={appHeaderStyles.appheader__menu_item_right}>
                        <NavLink
                            to={{ pathname: "/profile" }}
                            className={appHeaderStyles.link}
                            activeClassName={appHeaderStyles.activelink}
                        >
                            <ProfileIcon type="secondary" />
                            <span className="text text_type_main-default text_color_inactive ml-2 mr-5">Личный&nbsp;кабинет</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

