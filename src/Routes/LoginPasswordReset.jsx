import React, { useEffect, useState } from 'react'

function LoginPasswordReset() {
  const [login, setLogin] = useState('')
  const [key, setKey] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if(key) setKey(key)
    if(login) setLogin(login)
  },[])
  return (
    <div>
      <p>{key}</p>
      <p>{login}</p>
    </div>
  )
}

export default LoginPasswordReset