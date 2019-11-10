import React, { useState } from 'react';

import api from '../../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event){
    event.preventDefault();
    
    const response = await api.post('/login', { email, password });

    console.log('TESTE: ',response.data);
  }

  return (
    <>
      <form onSubmit={ handleSubmit }>

        <label htmlFor="email"> E-mail </label>
        <input 
          id="email" 
          type="email"
          placeholder="Seu e-mail"
          onChange={event => setEmail(event.target.value)}
          value= { email }
        />

        <label htmlFor="password"> Password </label>
        <input 
          id="password" 
          type="password"
          onChange={event => setPassword(event.target.value)}
          value= { password }
        />

        <button className="btn" type="submit"> Entrar </button>
      </form>
    </>
  );
}