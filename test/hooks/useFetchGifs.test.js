import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el Hook useFetchGifs', () => { 
    test('debe de regresar el estado inicial ', () => { 
        const { result }= renderHook(()=>useFetchGifs('Naruto'))
        //obtener el valor actual
        const { images, isLoading } = result.current;
        //que el tamaño de las imagenes sea 0
        expect(images.length).toBe(0)
        // que isLoading sea igual a True
        expect(isLoading).toBeTruthy();

     })
    test('debe de retornar un arreglo de images ', async() => { 
        const { result }= renderHook(()=>useFetchGifs('Naruto'))
        //esperar algo
        await waitFor(
            //espera hasta que suceda esto toBeGreaterThan(0) mayor a cero
            ()=>expect(result.current.images.length).toBeGreaterThan(0),
        );
        const { images, isLoading } = result.current;
        //que el tamaño de las imagenes sea mayor a 0
        expect(images.length).toBeGreaterThan(0)
        // que isLoading sea igual a falso
        expect(isLoading).toBeFalsy();

     })
 })