import React, { useEffect } from 'react';
import useCEP from '../../hooks/useCEP';
import api from '../../services/api';
import CEP from '../../@types/CEPType';
import './result.css';

export default function Result() {
  const { cep, setCep } = useCEP();

  useEffect(() => {
    async function initialValueOfCep() {
      const response = await api.get('88200000/json');
      setCep(response.data as CEP);
    }

    initialValueOfCep();
  }, [setCep]);

  return (
    <div className="components result">
      <h1>{cep.logradouro}</h1>
      <ul>
        <li>
          <span>CEP: </span> {cep.cep}
        </li>
        <li>
          <span>Complemento: </span> {cep.complemento}
        </li>
        <li>
          <span>Bairro: </span> {cep.bairro}
        </li>
        <li>
          <span>Localidade: </span> {cep.localidade}
        </li>
        <li>
          <span>UF: </span> {cep.uf}
        </li>
      </ul>
    </div>
  );
}
