import React, { useContext } from 'react';
import Title from '../Components/Title';
import Input from '../Components/Input';
import Button from '../Components/Button';
import useForm from '../Utils/useForm';
import { USER_POST } from '../Api/api';
import UserContext from '../Context/UserContext';
import useFetch from '../Utils/useFetch';
import ErrorMsg from '../Components/ErrorMsg';
import Head from '../Components/Head'

function LoginCreate() {
  const username = useForm();
  const password = useForm('password');
  const email = useForm('email');

  const { userLogin } = useContext(UserContext);

  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
    console.log(response);
  }
  return (
    <section className="animeLeft">
      <Head title="Crie sua conta" />
      <Title type="h1">Cadastre-se</Title>

      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />

        <Input label="E-mail" type="email" name="email" {...email} />

        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? (
          <Button content="Carregando..." disabled />
        ) : (
          <Button content="Cadastrar" />
        )}

        <ErrorMsg error={error}/>
      </form>
    </section>
  );
}

export default LoginCreate;
