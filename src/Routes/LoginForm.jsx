import React, { useContext } from 'react';
import { Link, json } from 'react-router-dom';
import Button from '../Components/Button';
import Input from '../Components/Input';
import useForm from '../Utils/useForm';
import UserContext from '../Context/UserContext';
import Title from '../Components/Title';
import ErrorMsg from '../Components/ErrorMsg';
import Head from '../Components/Head'

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <>
    <Head title="Login" />
      <section className='animeLeft'>
        <Title type='h1'>Login</Title>

        <form className="form" onSubmit={handleSubmit}>
          <Input name="user" label="Usuário" type="text" {...username} />
          <Input name="password" label="Senha" type="password" {...password} />

          {loading ? <Button content="Carregando" disabled /> : <Button content="Entrar" />}

          <ErrorMsg error={error} />
        </form>

        <Link to='/login/perdeu' className='lost'>Esqueceu a senha?</Link>
      
        <div className='cadastro'>
          <Title type='h2'>Cadastre-se</Title>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Button content={
            <Link to='/login/criar'>Cadastro</Link>
          } />
        </div>        
      </section>
    </>
  );
}

export default LoginForm;
