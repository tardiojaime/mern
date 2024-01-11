import { getImagen } from "../../src/pruebas/async-await"

describe('Prueba en Las peticiones Async await', () => { 
    test('La funcion de ve retornar la url de la imagen', async() => { 
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string')
     })
 })