import React, { useState } from 'react';
import { Link, json } from 'react-router-dom';
import Button from '../Components/Button';
import Input from '../Components/Input';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid/dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => console.log(response.json()))
      .then((json) => console.log(json));
  }
  return (
    <>
      <section>
        <h1>Login</h1>

        <form action="" onSubmit={handleSubmit}>
          <Input
            name="user"
            label="Usuário"
            type="text"
            onChange={({ target }) => setUsername(target.value)}
            value={username}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            onChange={({ target }) => setPassword(target.value)}
            value={password}
          />
          <Button text="Enviar" />
        </form>

        <Link to="/login/entrar">Cadastro</Link>
      </section>
    </>
  );
}

export default LoginForm;
