import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectErrorAuth,
  selectIsLoadingAuth,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const errorAuth = useSelector(selectErrorAuth);
  const isLoadingAuth = useSelector(selectIsLoadingAuth);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    errorAuth,
    isLoadingAuth,
  };
};
