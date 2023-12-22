import React from 'react';
import './Reloj.css';

const RelojDigital = ({ hora }) => {
  const formatoHora = (valor) => (valor < 10 ? `0${valor}` : valor);

  return (
    <div className="reloj-digital">
      <p>
        {formatoHora(hora.getHours())}:
        {formatoHora(hora.getMinutes())}:
        {formatoHora(hora.getSeconds())}
      </p>
    </div>
  );
};

export default RelojDigital;
