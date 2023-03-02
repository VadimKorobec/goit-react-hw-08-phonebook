import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export const PublicRoute = ({
  children,
  restricted = false,
  ...routeProps
}) => {
  const isloggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isloggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
};
