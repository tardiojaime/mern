describe('Title de componente a realizar pruebas', () => {


    test('Descripcion del test', () => {
        if (0 === 1) {
            throw new Error('No puede dividirse entre cero')
        }
        //consta de tres partes
        //1. Inicializacion
        const message1 = 'Hola mundo'
        //2. Estimulo 
        const message2 = message1.trim()
        //3. Observar el comportamiento... esperado
        // enves de utilizar if para compara los dos mensajes en jest tenemos lo siguiente
        //condicion para que pase la prueba
        expect(message1).toBe(message2)
    });
});