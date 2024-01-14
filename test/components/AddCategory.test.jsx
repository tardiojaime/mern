import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Preubas en el componente <AddCategory />', () => { 
    test('debe de cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={()=>{}} />)
        const input = screen.getByRole('textbox')
        // generamos el evento de onChange, indicamos el input
        // mandamos un el nuevo dato a a funcion
        fireEvent.input(input, {target: {value: 'saitama'}});
        expect(input.value).toBe('saitama')
        screen.debug()

     })
     test('debe llamar a onNewCategory si el input tiene un valor', () => { 
        const inputvalue = "Naruto"
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: inputvalue}})
        //screen.debug()
        fireEvent.submit(form);
        expect(input.value).toBe('');
        //screen.debug()
        //si la fincion a sido llamada
        expect(onNewCategory).toHaveBeenCalled();
        // si se llama un vez
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        //si la funcion se a llamado con el valor deseado
        expect(onNewCategory).toHaveBeenCalledWith(inputvalue);
      })

      test('no debe de llamar el onNewCategory si el input esta vacia', () => { 
        // en este caso no estamos cambiando el valor del campo input, por lo 
        // que esta si texto el input, por lo que la condicion rechaza la llamada
        // de la funcion 
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory}/>)
        const form = screen.getByRole('form')
        fireEvent.submit(form)
        expect(onNewCategory).toHaveBeenCalledTimes(0)
        expect(onNewCategory).not.toHaveBeenCalled()
       })
 })