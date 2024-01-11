import { retornarArreglo } from "../../src/pruebas/arreglos"

describe('Pruebas de desustruracion de arreglos', () => { 
    test('debe retornar un string y un numero', () => { 
        /* const retorno = retornarArreglo(); */
        /* podemos deestructurar los datos recividos */
        const [letters, number] = retornarArreglo();
        
        expect(typeof letters).toBe('string')
        expect(typeof number).toBe('number')
        expect(letters).toEqual(expect.any(String))
     })
 })