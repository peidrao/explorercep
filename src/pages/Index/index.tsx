import React from 'react';

import api from '../../services/api';

import { Title, Form, Properties } from './styles';

interface Address {
  cidade: string;
  estado: string;
}

const Index: React.FC = () => {
  return (
    <>
      <Title>Explore cidades pelo CEP</Title>
      <Form>
        <input placeholder="Digite o CEP" />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  );
};

export default Index;
