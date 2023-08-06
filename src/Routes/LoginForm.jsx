import React, { useState } from 'react';
import { Link, json } from 'react-router-dom';

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
          <input
            type="text"
            onChange={({ target }) => setUsername(target.value)}
            value={username}
          />
          <input
            type="password"
            onChange={({ target }) => setPassword(target.value)}
            value={password}
          />
          <button>Entrar</button>
        </form>

        <Link to="/login/entrar">Cadastro</Link>
      </section>
    </>
  );
}

export default LoginForm;
