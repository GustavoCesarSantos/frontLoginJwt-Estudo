import React from 'react';

import Header from '../../components/Header/index';
// import { getToken } from '../../services/auth';
import api from '../../services/api';

export default function Dashboard() {
  async function hanbleSubmit(event){
    event.preventDefault();

    // const token = getToken();
    const response = await api.get('/posts');
    console.log(response);
  }

  return(
    <>
      <Header tittle="Dashboard"></Header>
      <button onClick={ hanbleSubmit }>CLICK</button>
    </>
  );
};