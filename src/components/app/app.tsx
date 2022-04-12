import React from "react";

// компоненты
import AppHeader from '../app-header/app-header';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from '../modal/modal';

/*********************/
import MainPage from "../../pages/mainPage";
import Login from "../../pages/login";
import Register from "../../pages/register";
import ForgotPassword from "../../pages/forgotPassword";
import ResetPassword from "../../pages/resetPassword";
import Profile from "../../pages/profile";
import NotFound from "../../pages/page404";
/**************/
import LoggedProtectedRoute from "../ProtectedRoute/LoggedProtectedRoute";
import LoggedProtectedResetRoute from "../ProtectedRoute/LoggedProtectedResetRoute";
import UnloggedProtectedRoute from "../ProtectedRoute/UnloggedProtectedRoute";
/*************/

import { useDispatch, useSelector } from '../../services/hooks';
import { getIngredients } from '../../services/actions/index'

//

import {
    BrowserRouter as Router,
    Route,
    Switch,
    useHistory,
    useLocation
} from 'react-router-dom';

import { getUserRequest, getCookie } from "../../services/actions/auth";

import { Location } from 'history/index'


type TPath = {
    pathname: string
} & Location



export default function App() {
    const location = useLocation<{ background: TPath }>();
    const history = useHistory();

    const dispatch = useDispatch();
    const { hasError, error, isLoading, burgerData } = useSelector((state) => state.apiList);

    React.useEffect(() => {
        dispatch(getIngredients());

        if (getCookie("accessToken")) {
            dispatch(getUserRequest());
        }
    }, []);



    const background = location.state && location.state.background;

    return (
        <>

            {hasError && "Ошибка" && <div>{error}</div>}
            {!isLoading && !hasError && burgerData && (
                <>
                    <AppHeader />

                    <Switch location={background || location}>
                        <Route exact path="/" component={MainPage} />

                        <LoggedProtectedRoute exact path="/login">
                            <Login />
                        </LoggedProtectedRoute>
                        <LoggedProtectedRoute exact path="/register">
                            <Register />
                        </LoggedProtectedRoute>
                        <LoggedProtectedRoute exact path="/forgot-password">
                            <ForgotPassword />
                        </LoggedProtectedRoute>
                        <LoggedProtectedResetRoute exact path="/reset-password">
                            <ResetPassword />
                        </LoggedProtectedResetRoute>
                        <UnloggedProtectedRoute path={`/profile`}>
                            <Profile />
                        </UnloggedProtectedRoute>
                        <Route
                            exact
                            path={`/ingredients/:id`}
                            component={IngredientDetails}
                        />
                        <Route exact path={`/feed/:id`} component={OrderDetails} />
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>

                    {background && (
                        <Route
                            path={`/ingredients/:id`}
                            children={
                                <Modal
                                    children={<IngredientDetails />}

                                />
                            }
                        ></Route>
                    )}
                    {background && (
                        <Route
                            path={`${background.pathname}/:id`}
                            children={
                                <Modal

                                    children={<OrderDetails />}
                                />
                            }
                        />
                    )}

                </>
            )}
        </>
    );
}

