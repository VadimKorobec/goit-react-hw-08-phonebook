import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';

export default function Register() {
  const { isLoadingAuth } = useAuth();

  return (
    <div>
      <Helmet prioritizeSeoTags>
        <title>Registration of a new phonebook user</title>
        <meta
          property="og:title"
          content="Registration of a new phonebook user"
        />
      </Helmet>
      {isLoadingAuth ? <div>...User Registration</div> : <RegisterForm />}
    </div>
  );
}
