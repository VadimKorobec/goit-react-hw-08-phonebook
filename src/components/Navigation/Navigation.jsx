import { StaledLink } from './Navigation.styled';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <StaledLink to="/">Home</StaledLink>
      {isLoggedIn && <StaledLink to="/contacts">Contacts</StaledLink>}
    </nav>
  );
};
