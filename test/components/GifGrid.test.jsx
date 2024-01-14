import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en el componente <GifGrid />', () => {
    test('debe de mostrar el loading inicialmente ', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        const category = 'Boruto'
        render(<GifGrid category={category} />)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs ', () => {
        const category = 'Boruto'
        // nuestro gifs de prueba
        const gifs = [
            {
                id: 'abc',
                title: 'Naruto',
                url: 'http://naturo/naruto.png'
            },
            {
                id: 'abc1',
                title: 'sakura',
                url: 'http://sakura/naruto.png'
            }
        ]
        // cargamos los datos de prueba a nuestro hook getGiffecthook
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category} />)
        // verificamos que se haya renderizado los dos
        // imagenes que nos regresa el hook
        expect(screen.getAllByRole('img').length).toBe(2)
    })
})