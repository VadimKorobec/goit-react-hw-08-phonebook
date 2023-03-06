import { LoginForm } from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks';

export default function Login() {
  const { isLoadingAuth } = useAuth();

  return (
    <div>
      <title>Login to my phonebook</title>
      <meta property="og:title" content="Login to my phonebook" />
      {isLoadingAuth ? <div>...Authorization check</div> : <LoginForm />}
    </div>
  );
}
