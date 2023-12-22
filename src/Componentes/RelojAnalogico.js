import React from 'react';

const RelojAnalogico = ({ hora }) => {
  const segundos = hora.getSeconds() * 6;
  const minutos = (hora.getMinutes() + hora.getSeconds() / 60) * 6;
  const horas = (hora.getHours() % 12 + hora.getMinutes() / 60) * 30;

  const numerosRomanos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="reloj-analogico">
      {numerosRomanos.map((numero, index) => (
        <div
          key={index}
          className={`numero-romano numero-${index + 1}`}
          style={{
            transform: `rotate(${(index + 1) * 30}deg) translate(-50%, -50%)`,
          }}
        >
          {getNumeroRomano(numero)}
        </div>
      ))}

      <div className="manecilla manecilla-segundos" style={{ transform: `rotate(${segundos}deg)` }} />
      <div className="manecilla manecilla-minutos" style={{ transform: `rotate(${minutos}deg)` }} />
      <div className="manecilla manecilla-horas" style={{ transform: `rotate(${horas}deg)` }} />
    </div>
  );
};

// Función para obtener el número romano correspondiente
const getNumeroRomano = (numero) => {
  // Implementa lógica para convertir números a números romanos
  // Puedes usar una biblioteca existente o implementar tu propia lógica
  // Aquí hay un ejemplo simple para los primeros 12 números:
  const numerosRomanos = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
  return numerosRomanos[numero - 1];
};

export default RelojAnalogico;

