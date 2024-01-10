/* 
se recomienda seguir la notacion pascal case
    ** camel case -> contarElementos
    ** pascal case -> ContarElementos
en los nombres de los componentes
 */

export function Hello() {
  return (
    <>
      <h1>hola mundoss</h1>
    </>
  );
}


/* si se exporta de esta forma
la importacion debe ser de la siguiente forma
import componente 'ruta/hello.js'
 ### el componente puede tomar cualquier nombre
 puesto que a de tomar el componente esportado
export default Hello; */

/* 
export function App(){

} 
con este tipo de exportacion la importacion 
es de la siguiente manera
exportacion independiente
import  {Hello}  from './hello'
*/