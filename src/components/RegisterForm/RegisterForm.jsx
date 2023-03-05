import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, Form, Input, Label, LabelText } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="on">
      <Label>
        <LabelText> Username</LabelText>
        <Input type="text" name="name" autoComplete="username" />
      </Label>
      <Label>
        <LabelText> Email</LabelText>
        <Input type="email" name="email" />
      </Label>
      <Label>
        <LabelText> Password</LabelText>
        <Input
          type="password"
          name="password"
          autoComplete="current-password"
        />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
