import { getUser, getUserActive } from "../../src/pruebas/funciones"

describe('Pruebas en funciones', () => { 
    test('getUser debe retorna un objeto', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'Al Papi101'
        }
        const user = getUser();
        expect(testUser).toEqual(user)
     })
     test('getUserActive debe de retornar un objeto', () => { 
        const name = 'TheBest'
        const testUserActive = {
            uid: "ABC567",
            username: name
        }
        const user = getUserActive(name);
        expect(testUserActive).toEqual(user)
      })
 })