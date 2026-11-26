# Bloom

## Descripción

Bloom es una aplicación móvil desarrollada con Ionic y Angular, orientada a la organización personal, el seguimiento de hábitos y el bienestar cotidiano.

El proyecto busca ofrecer un espacio donde los usuarios puedan organizar sus actividades diarias, realizar pequeñas misiones y consultar consejos que fomenten la incorporación de hábitos positivos.

**Estado del proyecto:** En desarrollo.

## Funcionalidades

La aplicación se organiza en tres secciones principales:

### 1. Mi día

Permite visualizar y realizar el seguimiento de hábitos cotidianos, organizados según el momento del día. Incluye la identificación de hábitos completados y pendientes.

### 2. Misiones

Presenta actividades orientadas a motivar la incorporación de hábitos positivos. Cada misión contiene información como título, descripción, categoría, duración y puntos.

Los datos se obtienen desde un archivo JSON local mediante un servicio desarrollado en Angular.

### 3. Consejos

Ofrece recomendaciones relacionadas con el bienestar, los hábitos y el autocuidado. Los consejos se presentan en tarjetas que incluyen título, descripción y categoría.

La información se obtiene desde un archivo JSON local mediante un servicio independiente.

## Tecnologías utilizadas

| Tecnología | Utilización |
|---|---|
| Ionic 9 | Desarrollo de la interfaz móvil |
| Angular 22.3.0 | Estructura y lógica de la aplicación |
| TypeScript 6 | Lenguaje de programación |
| Capacitor 8.6.2 | Integración con plataformas nativas |
| Ionicons 8.1 | Iconografía de la aplicación |
| RxJS 7.8 | Programación reactiva |
| JSON | Almacenamiento local de datos |

## Estructura del proyecto

La aplicación se organiza en carpetas según las responsabilidades de cada componente:

```text
src/
├── app/
│   ├── models/
│   │   ├── consejo.model.ts
│   │   └── mision.model.ts
│   ├── services/
│   │   ├── consejos.service.ts
│   │   └── misiones.service.ts
│   ├── tab1/
│   ├── tab2/
│   ├── tab3/
│   ├── tabs/
│   ├── explore-container/
│   ├── app.component.ts
│   └── app.routes.ts
├── assets/
│   ├── data/
│   │   ├── consejos.json
│   │   └── misiones.json
│   └── icon/
├── environments/
└── theme/
```

- **models:** define las estructuras de datos utilizadas por la aplicación.
- **services:** contiene los servicios encargados de obtener los datos.
- **tab1, tab2 y tab3:** contienen las páginas correspondientes a las tres secciones principales.
- **tabs:** administra la navegación entre las pestañas.
- **assets/data:** almacena los archivos JSON locales.
- **environments:** contiene la configuración de los entornos de ejecución.
- **theme:** almacena las variables y estilos globales.

## Instalación y ejecución

### Requisitos previos

Para ejecutar el proyecto se necesita tener instalado:

- Node.js.
- npm.
- Git.

### 1. Clonar el repositorio

```bash
git clone https://github.com/MonseLombardo/Bloom_Proyecto_Final.git
```

### 2. Ingresar al directorio del proyecto

```bash
cd Bloom_Proyecto_Final
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Iniciar el servidor de desarrollo

```bash
npm start
```

Una vez iniciado, Angular indicará en la terminal la dirección local desde la cual se puede visualizar la aplicación.

### 5. Compilar el proyecto

Para generar la compilación de la aplicación, ejecutar:

```bash
npm run build
```

## Capturas de pantalla

En esta sección se incorporarán capturas de las diferentes pantallas de Bloom una vez finalizadas las interfaces y sus funcionalidades.

## Estado del desarrollo

Bloom se encuentra en proceso de desarrollo. Se continúa trabajando en la implementación de funcionalidades, mejoras de interfaz, integración de componentes y verificaciones necesarias para cumplir con los requisitos establecidos para el proyecto.

## Repositorio

El código fuente y el historial de desarrollo se encuentran disponibles en GitHub:

https://github.com/MonseLombardo/Bloom_Proyecto_Final
