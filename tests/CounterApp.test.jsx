import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";
describe("# Pruebas en el Componente <CounterApp />", () => {
    const initValue = 100;
    test("Debe de hacer match con el snapshot", () => {
        const { container } = render(<CounterApp value={initValue} />);
        expect(container).toMatchSnapshot();
    });
    test("Debe de mostrar el valor inical de 100 <CounterApp />", () => {
        render(<CounterApp value={100} />);
        expect(screen.getByText(100)).toBeTruthy();
        //expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100')
    });
    //simulador de eventos...
    test("debe incrementar en uno con el click incrementar", () => {
        const initvalue = 10;
        render(<CounterApp value={initvalue} />);
        //realizamos un evento click
        fireEvent.click(screen.getByText("incrementar"));
        expect(screen.getByText("11")).toBeTruthy();
    });
    test("debe decrementarse en menos 1", () => {
        const counter = 2;
        render(<CounterApp value={counter} />);
        fireEvent.click(screen.getByText("subtract"));
        screen.debug();
        expect(screen.getByText("1")).toBeTruthy();
    });
    test('Debe de reiniciar su valor a cero', () => { 
        const defaultvalue = 90
        render(<CounterApp value={ defaultvalue} />)
        fireEvent.click(screen.getByText('reset'));
        screen.debug()
        expect(screen.getByText('0')).toBeTruthy();
     })
});
