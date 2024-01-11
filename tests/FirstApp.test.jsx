import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en el componente FirsApp', () => { 
    test('prueba con render', ()=>{
/*         const title = 'Hola soy Marcos'
        const { container } = render(<FirstApp title={ title }/>)
        expect(container).toMatchSnapshot();//captura lo renderizado */
    })
    test('debe mostrar el titulo en h1', ()=>{
        const title = 'Hola soy daniel'
        const { container, getByText } = render(<FirstApp title={ title }/>)
        const h1 = container.querySelector('h1')
        console.log(h1.innerHTML)
        expect(h1.innerHTML).toContain(title)
        //expect(getByText(title)).toMatchSnapshot();//captura lo renderizado
    })
 })