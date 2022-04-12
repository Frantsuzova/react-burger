import { Route, Redirect, RouteProps } from "react-router-dom";
import React, { FunctionComponent } from "react";
import { useSelector } from '../../services/hooks';


const LoggedProtectedResetRoute: FunctionComponent<RouteProps> = ({ children, ...rest }) => {
    const { logged } = useSelector((state) => state.userInfo);
    const { isLoading, sent } = useSelector((state) => state.forgotRequest);

    return (
        <>

            {!isLoading && (
                <Route
                    {...rest}
                    render={() => (!logged && sent ? children : <Redirect to="/" />)}
                />
            )}
        </>
    );
}

export default LoggedProtectedResetRoute;