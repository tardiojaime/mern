# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# PROPS
En **React**, las **props (propiedades)** se utilizan para pasar datos de un componente padre a un componente hijo. La **validación de props** ayuda a asegurar que los componentes reciban los tipos y formatos correctos de datos.
## Pasar parametros(props)

| **Con desestructuración (`{}`)** | **Sin desestructuración (`()` sin llaves)** |
| -------------------------------- | ------------------------------------------- |
| Las props se extraen como variables individuales directamente. | Las props se reciben como un objeto completo (normalmente llamado `props`). |
| Accedes a las props de esta manera: `nombre`, `edad`, etc., sin tener que escribir `props.nombre`. | Accedes a las props usando `props.nombre`, `props.edad`, etc. |
| Útil cuando necesitas solo algunas props o prefieres un código más limpio. | Útil si prefieres manipular todas las props juntas sin desestructurarlas. |
| Requiere el uso de llaves `{}` alrededor de los parámetros en la función. | No requiere llaves `{}`, solo recibes el objeto completo en `()` sin desestructurarlo. |
| Ejemplo: `function Componente({ nombre, edad }) {}` | Ejemplo: `function Componente(props) {}` |

### Validación de props con `prop-types`:

React recomienda usar la librería `prop-types` para validar las props de los componentes. Esto es útil para evitar errores durante el desarrollo.

### 1. **Instalación**:
```bash
npm install prop-types
```

#### Tipos comunes:
* PropTypes.string: para cadenas.
* PropTypes.number: para números.
* PropTypes.bool: para booleanos.
* PropTypes.array: para arreglos.
* PropTypes.object: para objetos.
* PropTypes.func: para funciones.