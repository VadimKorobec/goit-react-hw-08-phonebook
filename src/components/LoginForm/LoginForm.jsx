import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, Form, Input, Label, LabelText } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <LabelText>Email</LabelText>
        <Input type="email" name="email" autoComplete="email" />
      </Label>
      <Label>
        <LabelText>Password</LabelText>
        <Input
          type="password"
          name="password"
          autoComplete="current-password"
        />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
