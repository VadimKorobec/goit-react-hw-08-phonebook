import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Tasks'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/contacts" element={<Contacts />} /> */}
        <PrivateRoute patch="/contacts">
          <Contacts />
        </PrivateRoute>
      </Routes>
    </div>
  );
};
