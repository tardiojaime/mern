import { getHeroeByIdAsync } from "../../src/pruebas/promesas";

describe('Prueba unitaria para Promise, getHeroeByIdAsync', () => {
    test('getHeroById debe retorna un heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then(hero => {
            console.log(hero)
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
            done();
        })
    });
    test('getHeroById debe retorna un error cuando no existe un heroe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id).catch(error => {
            console.log(error)
            done();
        })
    })
})