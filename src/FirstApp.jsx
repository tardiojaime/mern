import React from 'react'
/* 
para no utilizar una etiqueta padre en el componente 
podemos utilizar Fragment de react, una forma mas rapida
es utilizar <></> 
puesto que un componente solo puede retornar un componente
*/
export const FirstApp = () => {
  return (
    <>
    <h1>First App</h1>
    <p>Tardio Jaime</p>
    </>
  )
}
