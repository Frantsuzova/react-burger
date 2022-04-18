import React, { FunctionComponent, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from '../services/hooks'
import profileStyles from "./profile.module.css";
import { NavLink } from "react-router-dom";
import {
    profileChange,
    logOut,
    refreshToken
} from "../services/actions/auth";
import { getCookie } from "../services/actions/auth";
import { useHistory } from "react-router-dom";
import { Button, PasswordInput, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import ErrorAnons from "../components/error-anons/error-anons";
import { useRouteMatch, useLocation, Route } from "react-router-dom";
import OrderDetails from "../components/order-details/order-details";
import OrderCards from "../components/order-cards/order-cards";
import { IUserInfo } from '../services/types/types'
import { Location } from 'history/index'
import SmallSpiner from "../components/spiner/spiner";

type TPath = {
    pathname: string
} & Location

function Profile() {
    const { path } = useRouteMatch();
    return (
        <>
            <Route path={`${path}/orders/:id`} component={OrderDetails} />
            <Route path={`${path}`} component={ProfileMain} />
        </>
    );
}

function ProfileMain() {

    const location = useLocation<{ background: TPath }>();
    const isLoading = useSelector((state) => state.webSocketAll.isLoading);
    const data = useSelector((state) => state.webSocketAll.data);
    const { userInfo }: IUserInfo = useSelector(
        (state) => state.userInfo
    );
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [emailValue, setEmailValue] = useState<string>(userInfo.user.email)
    const [nameValue, setNameValue] = useState<string>(userInfo.user.name)
    const history = useHistory();

    const dispatch = useDispatch();
    const changeInfo = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(profileChange(emailValue, passwordValue, nameValue));
    };

    const profileText =
        "В этом разделе вы можете изменить свои персональные данные";
    const orderListText =
        "В этом разделе вы можете просмотреть свою историю заказов";


    return (
        <div className={profileStyles.mainbox}>
            <div className={profileStyles.navigation}>
                <div className={profileStyles.navDiv}>

                    <NavLink
                        exact
                        to={{ pathname: `/profile` }}
                        className={profileStyles.noactivelink}
                        activeClassName={profileStyles.activelink}
                    >
                        <span className="text text_type_main-medium">Профиль</span>
                    </NavLink>
                    <NavLink
                        to={{ pathname: `/profile/orders` }}
                        className={profileStyles.noactivelink}
                        activeClassName={profileStyles.activelink}
                    >
                        <span className="text text_type_main-medium">История заказов</span>
                    </NavLink>
                    <button
                        className={profileStyles.navButton}
                        onClick={() => dispatch(logOut(history))}
                    >
                        <span className="text text_type_main-medium" >Выход</span>
                    </button>
                    <span className={profileStyles.text}>
                        <Promt>{location.pathname === '/profile' ? profileText : orderListText}</Promt>
                    </span>
                </div>
            </div>

            <div className={profileStyles.detailedorder}>
                <Route exact path={`/profile`} component={ProfileInfo} />
                <Route
                    exact
                    path={`/profile/orders`}
                    component={!isLoading && data ? OrderHistory : SmallSpiner}
                />
            </div>
        </div>
    );
}
function ProfileInfo() {
    const dispatch = useDispatch();
    const { error, hasError, changeIsLoading } = useSelector(
        (state) => state.userInfo
    );
    const { userInfo }: IUserInfo = useSelector(
        (state) => state.userInfo
    );


    const [passwordValue, setPasswordValue] = useState<string>('')
    const [emailValue, setEmailValue] = useState<string>(userInfo.user.email)
    const [nameValue, setNameValue] = useState<string>(userInfo.user.name)

    const passwordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value)
    }

    const changeInfo = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(profileChange(emailValue, passwordValue, nameValue));
    };

    const dontMatch = userInfo.user.email != emailValue || userInfo.user.name != nameValue;

    return (
        <>

            <form onSubmit={changeInfo}>
                <div className={"mb-6"}>
                    <Input type={'text'}
                        placeholder={'Имя'}
                        onChange={e => setNameValue(e.target.value)}
                        icon={'EditIcon'}
                        value={nameValue}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'} />
                </div>
                <div className={"mb-6"}>
                    <Input type={'text'}
                        placeholder={'Логин'}
                        onChange={e => setEmailValue(e.target.value)}
                        icon={'EditIcon'}
                        value={emailValue}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'} />
                </div>
                <div className={"mb-6"}>
                    <PasswordInput onChange={passwordOnChange} value={passwordValue} name={'password'} />
                </div>
                <div className={profileStyles.button}>
                    {passwordValue.length > 0 && (

                        <Button size={dontMatch ? "small" : "medium"}>
                            Сохранить
                        </Button>

                    )}
                </div>
            </form>
            {dontMatch && (
                <div className={'mt-3'}>
                    <Button
                        size={passwordValue.length > 0 ? "small" : "medium"}
                        onClick={() => {
                            setPasswordValue('')
                            setEmailValue(userInfo.user.email)
                            setNameValue(userInfo.user.name)
                        }}
                    >
                        Отмена
                    </Button>
                </div>

            )}

            {hasError && <ErrorAnons error={error} />}
        </>
    );
}

function OrderHistory() {
    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.webSocketAll);
    const token = getCookie("accessToken")

    useEffect(() => {
        if (data)
            if (data.message) {
                if (data.message === 'Invalid or missing token') {
                    refreshToken()
                }
            }
    }, [data, dispatch, token])

    useEffect(() => {
        if (data)
            if (data.message === 'Invalid or missing token')
                dispatch({
                    type: "WS_CONNECTION_START",
                    value: `wss://norma.nomoreparties.space/orders?token=${getCookie(
                        "accessToken"
                    )}`,
                    place: true,
                });
    }, [token])
    if (data)
        return (
            <div className={profileStyles.orderHistoryBox}>
                {data.orders && !data.message && (<OrderCards />)}
            </div>
        );
    else return null
}


const Promt: FunctionComponent<{ children: string }> = ({ children }) => {
    return (
        <span
            className={
                "text text_type_main-default text_color_inactive mr-15"
            }
        >
            {children}
        </span>
    );
}

export default Profile;