import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Testing al componente <GitItem>', () => { 

    const title = 'saitama'
    const url = 'https://one-puch.com/saitama.png'
    test('Prueba de snapshot', () => { 
        const {container } = render(<GifItem title={ title } url= { url }/>)
        expect(container).toMatchSnapshot()
     })

     test('debe mostrar la imagen', () => { 
        render(<GifItem title={ title } url= { url}/>)
        const {src, alt }= screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
      })

 })