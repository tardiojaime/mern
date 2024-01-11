import { getHeroeById, getHeroesByOwner } from "../../src/pruebas/Heroees"

describe('Pruebas en Heroes con arreglo de objetos', () => { 
    test('getHeroeById debe de retornar un heroe por ID', () => { 
        const id = 1
        const hero = getHeroeById(id);
        
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
     })
    test('Si no se encuentra un horeo por el id(no existe) debe retornar undefined', () => { 
        const id = 1222;
        const hero = getHeroeById(id)
        expect(hero).toBe(undefined)
        //expect(hero).toBeFalsy(); //evalua que sea igual null, false o undefined 
     });
    test('GetHeroeByOwner retorna un arreglo de datos DC:2', () => { 
        const owner = 'DC'
        const hero = getHeroesByOwner(owner);
        expect(hero.length).toBe(2)
     })
    test('GetHeroeByOwner retorna un arreglo de datos Marvel:3', () => { 
        const owner = 'Marvel'
        const hero = getHeroesByOwner(owner);
        expect(hero.length).toBe(3)
     })
 })