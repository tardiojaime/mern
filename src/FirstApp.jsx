import React from 'react'
import './style.css';
/* 
para no utilizar una etiqueta padre en el componente 
podemos utilizar Fragment de react, una forma mas rapida
es utilizar <></> 
puesto que un componente solo puede retornar un componente
*/
/* 
se recomienda utilizar variable fuera del componente variables 
que no necesitan ser procesados
react no puede imprimir objetos
012 a continuacion
*/
const newMessage = {
    message: 'First App',
    title: 'Jaime Tardio'
};

export const FirstApp = () => {
  return (
    <>
    <h1> { JSON.stringify(newMessage) } </h1>
    <p>Tardio Jaime</p>
    </>
  )
}
