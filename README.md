# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
//-----------------------------------------------------------------------------------
## Gestión de Configuración y Secretos

### Propósito de la solución
Implementar una solución profesional para manejar la configuración de la aplicación y proteger credenciales sensibles mediante variables de entorno, evitando quemar datos en el código fuente.

### Variables requeridas
* **Configuración pública:** `APP_NAME`, `PORT`, `NODE_ENV`, `LOG_LEVEL`, `FEATURE_X_ENABLED`
* **Secretos:** `DB_PASSWORD`, `API_KEY`, `JWT_SECRET`

### Diferencia entre configuración y secretos
* **Configuración General:** Son parámetros seguros que definen el comportamiento de la app.
* **Secretos:** Son datos altamente sensibles (contraseñas, tokens) que jamás deben exponerse al código del navegador.

### Cómo crear el .env
*Se duplica el archivo `.env.example` y se cambian las credenciales por las reales.

### Qué no debe subirse al repositorio
* No se tiene que subir el archivo `.env`. Este archivo contiene contraseñas reales y datos sensibles que no se deben dar al publico.

### Cómo ejecutar la aplicación y validar que funciona
* Preparar el archivo `.env`.
* Ejecutar el comando: `npm run dev`
* Al ejecutar el comando un script evaluará las variables, si todo esta bien configurado la aplicación arrancará con normalidad y mostrara mensaje de validacion. Si hay algun error  la ejecución se detendrá con un mensaje de error.