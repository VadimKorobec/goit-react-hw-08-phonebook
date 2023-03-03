import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div>
      <span>Welcome,{name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
};
