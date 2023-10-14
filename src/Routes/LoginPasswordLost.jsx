import React from 'react'
import Title from '../Components/Title'
import Input from '../Components/Input'
import Button from '../Components/Button'
import useForm from '../Utils/useForm'
import useFetch from '../Utils/useFetch'
import { PASSWORD_LOST } from '../Api/api'
import ErrorMsg from '../Components/ErrorMsg'
import { json } from 'react-router-dom'
import Head from '../Components/Head'

function LoginPasswordLost() {
  const login = useForm()
  const { data, loading, error, request } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      })
      const {json} = await request(url, options)
    }
  }
  return (
    <section className='animeLeft'>
      <Head title="Perdeu a senha" />
      <Title type="h1">Perdeu a senha?</Title>
      {data ? <p style={{color: '#4c1'}}>{data}</p> : <form onSubmit={handleSubmit}>
        <Input label="E-mail / Usuário" type="text" name="login" {...login} />
        {loading ? (
          <Button content="Enviando..." disabled></Button>
        ) : (
          <Button content="Enviar e-mail"></Button>
        )}
      </form>}
      <ErrorMsg error={error} />
    </section>
  )
}

export default LoginPasswordLost
