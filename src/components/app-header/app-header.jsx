import appHeaderStyles from './app-header.module.css';
// компонент
import MenuItem from '../menu-item/menu-item.jsx';
// компоненты от яндекса
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function AppHeader() {
    return (
        <header>
            <nav className={appHeaderStyles.appheader}>
                <ul className={appHeaderStyles.appheader__menu_list}>
                    <li className={appHeaderStyles.appheader__menu_item_left}>
                        <MenuItem icon={<BurgerIcon type="primary" />} text="Конструктор" link="#1" active />
                    </li>
                    <li className={appHeaderStyles.appheader__menu_item_left}>
                        <MenuItem icon={<ListIcon type="secondary" />} text="Лента заказов" link="#2" />
                    </li>
                    <li className={appHeaderStyles.appheader__menu_item_center}>
                        <Logo />
                    </li>
                    <li className={appHeaderStyles.appheader__menu_item_right}>
                        <MenuItem icon={<ProfileIcon type="secondary" />} text="Личный кабинет" link="#3" />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

