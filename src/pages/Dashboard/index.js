import React from 'react';

import api from '../../services/api';

import Header from '../../components/Header/index';

export default function Dashboard() {
  async function hanbleSubmit(event){
    event.preventDefault();

    // const token = getToken();
    const response = await api.get('/posts');
    console.log(response.data);
  }

  return(
    <>
      <Header tittle="Dashboard"></Header>
      
      <div onLoad={ hanbleSubmit }>
        
      </div>
    </>
  );
};