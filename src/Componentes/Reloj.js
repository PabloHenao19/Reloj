import React, { useState, useEffect } from 'react';
import RelojDigital from './RelojDigital';
import RelojAnalogico from './RelojAnalogico';
import './Reloj.css';

const Reloj = () => {
  const [hora, setHora] = useState(new Date());
  const [tipoReloj, setTipoReloj] = useState('digital'); // 'digital' o 'analogico'

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="reloj-container">
      <div className="tipo-reloj-selector">
        <label>
          <input
            type="radio"
            value="digital"
            checked={tipoReloj === 'digital'}
            onChange={() => setTipoReloj('digital')}
          />
          Digital
        </label>
        <label>
          <input
            type="radio"
            value="analogico"
            checked={tipoReloj === 'analogico'}
            onChange={() => setTipoReloj('analogico')}
          />
          Analógico
        </label>
      </div>

      {tipoReloj === 'digital' ? <RelojDigital hora={hora} /> : <RelojAnalogico hora={hora} />}
    </div>
  );
};

export default Reloj;
