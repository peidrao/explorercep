import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Title, Form, Properties } from './styles';

interface Address {
  cidade: string;
  estado: string;
  cep: string;
  cidade_info: { codigo_ibge: string; area_km2: string };
  estado_info: { nome: string };
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
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!newAddress) return;

    try {
      const response = await api.get<Address>(`/${newAddress}`);
      const addres = response.data;
      setAddress([...address, addres]);
      setNewAdress('');
    } catch (err) {}
  }

  return (
    <>
      <Title>Explore cidades pelo CEP</Title>
      <Form onSubmit={handleAddAddress}>
        <input
          placeholder="Digite o CEP"
          value={newAddress}
          onChange={e => setNewAdress(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Properties>
        {address.map(addres => (
          <Link key={addres.cidade_info.codigo_ibge} to={`/${addres.cep}`}>
            <h2>{addres.cidade}</h2>

            <div>
              <h4>Estado: {addres.estado_info.nome}</h4>
              <ul>
                <li>Código do IBGE: {addres.cidade_info.codigo_ibge}</li>
                <li>Área em km²: {addres.cidade_info.area_km2}</li>
                <li> CEP: {addres.cep}</li>
              </ul>
            </div>
          </Link>
        ))}
      </Properties>
    </>
  );
};

export default Index;
