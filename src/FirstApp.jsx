import React from 'react'
import './style.css';
import PropTypes, { number, string } from 'prop-types'
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
/* 
export const FirstApp = (props) => {
desustructuracion de props  
export const FirstApp = ({title}) => {
*/

export const FirstApp = ({ title, numero }) => {
  return (
    <>
    <h1> { title +' '+ numero } </h1>
    <p>Tardio Jaime</p>
    </>
  )
}
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  numero: PropTypes.number
}
FirstApp.defaultProps = {
  title: 'no hay titulo'
}
/* 
PropTypes, defenir los props
 */