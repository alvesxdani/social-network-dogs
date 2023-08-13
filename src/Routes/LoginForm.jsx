import React, { useState } from 'react';
import { Link, json } from 'react-router-dom';
import Button from '../Components/Button';
import Input from '../Components/Input';
import useForm from '../Utils/useForm';
import { TOKEN_POST, USER_GET } from '../Api/api';

function LoginForm() {
  const username = useForm();
  const password = useForm();

  async function getUser(token) {
    const {url, options} = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    console.log(json)
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json)
      window.localStorage.setItem('token', json.token)
      getUser(json.token)

      
    }
  }
  return (
    <>
      <section>
        <h1>Login</h1>

        <form action="" onSubmit={handleSubmit}>
          <Input name="user" label="Usuário" type="text" {...username} />
          <Input name="password" label="Senha" type="password" {...password} />
          <Button text="Entrar" />
        </form>

        <Link to="/login/entrar">Cadastro</Link>
      </section>
    </>
  );
}

export default LoginForm;
