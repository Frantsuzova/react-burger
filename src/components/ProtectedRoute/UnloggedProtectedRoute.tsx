import { Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from '../../services/hooks';
import React, { FunctionComponent } from "react";

const UnloggedProtectedRoute: FunctionComponent<RouteProps> = ({ children, ...rest }) => {
    const { logged, isLoading, loadingUser, loadingRefresh } =
        useSelector((state) => state.userInfo);

    return (
        <>

            {!isLoading && !loadingUser && !loadingRefresh && (
                <Route
                    {...rest}
                    render={({ location }) => (logged ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />)}
                />
            )}
        </>
    );
}

export default UnloggedProtectedRoute;