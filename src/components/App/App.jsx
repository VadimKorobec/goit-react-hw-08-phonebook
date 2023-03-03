import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { PublicRoute } from '../PublicRoute';

const Home = lazy(() => import('../../pages/Home'));
const Register = lazy(() => import('../../pages/Register'));
const Login = lazy(() => import('../../pages/Login'));
const Contacts = lazy(() => import('../pages/Tasks'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.isFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div>
        <AppBar />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/contacts" element={<Contacts />} /> */}
          <PublicRoute exact path="/">
            <Home />
          </PublicRoute>
          <PublicRoute exact path="/register" restricted>
            <Register />
          </PublicRoute>
          <PublicRoute exact path="/login" restricted>
            <Login />
          </PublicRoute>
          <PrivateRoute patch="/contacts">
            <Contacts />
          </PrivateRoute>
        </Routes>
      </div>
    )
  );
};
