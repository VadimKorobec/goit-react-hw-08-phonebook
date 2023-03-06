import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks';

export default function Register() {
  const { isLoadingAuth } = useAuth();

  return (
    <div>
      <title>Registration of a new phonebook user</title>
      <meta
        property="og:title"
        content="Registration of a new phonebook user"
      />
      {isLoadingAuth ? <div>...User Registration</div> : <RegisterForm />}
    </div>
  );
}
