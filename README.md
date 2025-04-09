# Aplicación de Clima

Esta es una aplicación web que permite consultar el clima en tiempo real de cualquier ciudad del mundo utilizando una API externa. Fue desarrollada con React y TypeScript, haciendo uso de CSS Modules para los estilos y Axios para las solicitudes HTTP. La aplicación valida los datos ingresados por el usuario, realiza llamadas a la API para obtener información meteorológica y muestra los resultados de manera clara y organizada. Además, incluye un spinner de carga mientras se obtienen los datos y maneja errores como ciudades inexistentes.

## Imagenes del proyecto

<div
  class="imagenes"  
  style="
  display: flex;"
>
<img 
  style="
    width: 300px; 
    heigth: 200px; "
  src='https://github.com/user-attachments/assets/b1a67aeb-b0c8-4473-ab82-aae29a86aa60'
/>
<img 
  style="
    width: 400px; 
    heigth: 400px; "
  src='https://github.com/user-attachments/assets/05c99d07-eb71-4e95-b2d7-95a9d98c5222' 
/>
</div>

## Instrucciones

Para ejecutar el proyecto, sigue estos pasos:

1. **Clonar el repositorio**:
   ```
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```
2. **Instalar dependencias**:
   ```
   npm install
   ```
3. **Configura el archivo `.env`** en la raíz del proyecto con tu API Key:
   ```
   VITE_API_KEY=tu_api_key_aqui
   ```
4. **Ejecutar el proyecto en modo desarrollo**:
   ```
   npm run dev
   ```

## Tecnologías utilizadas

El proyecto utiliza las siguientes tecnologías:

- **Frontend**: React con TypeScript
- **Estilos**: CSS Modules
- **Solicitudes HTTP**: Axios
- **Validación de datos**: Zod y Valibot
- **Build Tool**: Vite

Puedes explorar la aplicación en vivo en [https://pp-clima-con-react.netlify.app/](https://pp-clima-con-react.netlify.app/).
