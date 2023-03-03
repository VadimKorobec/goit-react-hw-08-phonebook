import { useAuth } from 'hooks';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePages = lazy(() => import('../pages/Home'));
const RegisterPages = lazy(() => import('../pages/Register'));
const LoginPages = lazy(() => import('../pages/Login'));
const ContactsPages = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing user...</div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePages />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPages />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<LoginPages />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPages />} />
          }
        />
      </Route>
    </Routes>
  );
};
