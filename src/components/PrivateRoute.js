Routeimport { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

// export const PrivateRoute = ({
//   component: Component,
//   redirectTo,
//   children,
//   ...routeProps
// }) => {
//   const isloggedIn = useSelector(authSelectors.getIsLoggedIn);
//   return (
//     <Route {...routeProps}>
//     
//     </Route>
//   );
// };

export const PrivateRoute = ({ children, redirectTo = '/', ...routeProps }) => {
    const isloggedIn = useSelector(authSelectors.getIsLoggedIn);
    return <Route {...routeProps} >
          {isloggedIn ? children : <Redirect to={redirectTo} />}
    </Route>;
};
