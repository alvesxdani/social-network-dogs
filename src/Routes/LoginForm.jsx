import React, { useState } from 'react';
import { Link, json } from 'react-router-dom';
import Button from '../Components/Button';
import Input from '../Components/Input';
import useForm from '../Utils/useForm';

function LoginForm() {
  const username = useForm('email');
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid/dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
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
            type="email"
            {...username}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            {...password}
          />
          <Button text="Entrar" />
        </form>

        <Link to="/login/entrar">Cadastro</Link>
      </section>
    </>
  );
}

export default LoginForm;
