## Explicación del Proyecto

## Funcionamiento del Proyecto

Este proyecto crea una aplicación para gestionar una fábrica, permitiendo agregar productos, eliminarlos y marcarlos como distribuidos.


## Funciones y Componentes Clave

### `store.ts`

- Define el estado global utilizando Zustand.
- Gestiona la lista de productos y las acciones `addProduct`, `removeProduct`, y `distributeProduct`.

### `AddProductForm.tsx`

- Permite agregar nuevos productos a la fábrica.
- Utiliza el hook `useState` para manejar el estado del formulario.
- La función `handleSubmit` agrega un nuevo producto al estado utilizando la acción `addProduct`.

### `ProductList.tsx`

- Muestra la lista de productos de la fábrica.
- Permitedistribuir o eliminar productos.
- Utiliza el hook `useStore` para acceder al estado y las acciones definidas en `store.ts`.

