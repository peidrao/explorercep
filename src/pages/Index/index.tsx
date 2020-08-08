import React, { useState, useEffect, FormEvent } from 'react';

import api from '../../services/api';

import { Title, Form, Properties } from './styles';

interface Address {
  cidade: string;
  estado: string;
}

const Index: React.FC = () => {
  const [newAddress, setNewAdress] = useState('');
  const [address, setAddress] = useState<Address[]>(() => {
    const storageAddress = localStorage.getItem('@Address:address');

    if (storageAddress) return JSON.parse(storageAddress);

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@Address:address', JSON.stringify(address));
  }, [address]);

  async function handleAddAddress(
    event: FormEvent<HTMLFontElement>
  ): Promise<void> {
    event.preventDefault();

    if (!newAddress) return;

    try {
      const response = await api.get<Address>(`/{newAddress}`);
      const addres = response.data;
      console.log(addres);
      setAddress([...address, addres]);
      setNewAdress('');
    } catch (err) {
      console.log('erro');
    }
  }

  return (
    <>
      <Title>Explore cidades pelo CEP</Title>
      <Form>
        <input
          placeholder="Digite o CEP"
          value={newAddress}
          onChange={e => setNewAdress(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  );
};

export default Index;
