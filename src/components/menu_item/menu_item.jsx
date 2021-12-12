import PropTypes from 'prop-types';
import menuItemStyles from './menu_item.module.css';

export default function MenuItem(props) {
    return (
        <div className="pl-5 pr-5 pt-4 pb-4 mt-4 mb-4 mr-2">
            <div className={menuItemStyles.menu_item__link}>
                <div className="mr-2">
                    {props.icon}
                </div>
                <a className={(props.active ? menuItemStyles.menu_item__link_style_active : menuItemStyles.menu_item__link_style_unactive)}
                    href={props.link}
                    title={props.text}>
                    <p className="text text_type_main-default">
                        {props.text}
                    </p>
                </a>
            </div>
        </div>
    );
}

// проверка типов
MenuItem.propTypes = {
    active: PropTypes.bool,
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired
};

