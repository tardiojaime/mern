import { getSaludo } from "../../src/pruebas/templete-string";

describe('Prueba en string templete', () => { 

    test('getsaludo debe  de retornar "Hola Jaime"', ()=>{
        const nombre = 'Jaime'
        const message = getSaludo(nombre)
        expect(message).toBe(`Hola ${nombre}`)
    });
 })