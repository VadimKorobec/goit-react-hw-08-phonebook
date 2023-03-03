import { LoginForm } from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';

export default function Login() {
  const { isLoadingAuth } = useAuth();

  return (
    <div>
      <Helmet prioritizeSeoTags>
        <title>Login to my phonebook</title>
        <meta property="og:title" content="Login to my phonebook" />
      </Helmet>
      {isLoadingAuth ? <div>...Authorization check</div> : <LoginForm />}
    </div>
  );
}
