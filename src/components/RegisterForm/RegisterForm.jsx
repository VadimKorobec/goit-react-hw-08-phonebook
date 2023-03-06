import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, Form, Input, Label, LabelText } from './RegisterForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <LabelText> User Name</LabelText>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={event => {
            setName(event.target.value);
          }}
        />
      </Label>
      <Label>
        <LabelText> Email</LabelText>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
      </Label>
      <Label>
        <LabelText> Password</LabelText>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
      </Label>
      <Button type="submit" disabled={!name || !email || !password}>
        Register
      </Button>
    </Form>
  );
};
