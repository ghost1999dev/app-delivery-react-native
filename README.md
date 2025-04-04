# App Delivery - React Native
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png" alt="ReactNative" width="150" />
  <img src="https://miro.medium.com/v2/resize:fit:1400/0*IPRVE5v1svBfc_Lh.png" alt="ExpoCLI" width="150" />
  <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="TypeScript" width="150" />
</p>

## Descripcion

Este es un proyecto de aplicacion movil desarrollado en **React Native** siguiendo el patron **Clean Architecture** con **MVVM (Model-View-ViewModel)**. La app permite gestionar pedidos de delivery de manera eficiente.

## Tecnologias utilizadas para crear proyecto  

- **React Native** - Framework para desarrollo movil.
- **Expo** - Plataforma para construir aplicaciones nativas
- **React Navigation** - Navegacion entre pantallas.
- **Axios** - Cliente HTTP para consumir API.
- **Async Storage** - Almacenamiento local en la app.

```
/src
 ├── data/             # Capa de datos (repositorios, API, modelos)
 │   ├── sources/      
 │   │   ├── api/      # Llamadas a servicios externos
 │   │   ├── local/    # Persistencia en almacenamiento local
 │   │   ├── models/   # Modelos de datos
 │   ├── repositories/ # Repositorios que interactúan con los datos
 │
 ├── domain/           # Capa de dominio (reglas de negocio)
 │   ├── entities/     # Definición de entidades
 │   ├── usecases/     # Casos de uso de la aplicación
 │
 ├── presentation/     # Capa de presentación (UI y lógica de vista)
 │   ├── components/   # Componentes reutilizables
 │   ├── hooks/        # Hooks personalizados
 │   ├── theme/        # Configuración de estilos globales
 │   ├── views/        # Pantallas de la aplicación
 │
 ├── navigation/       # Configuración de la navegación
 ├── App.tsx          # Punto de entrada de la aplicaciónn
```
## Instalacion de dependencias

Ejecuta el siguiente comando para instalar todas las dependencias:

```sh
npm install
```

o directamente en Android o IOS:

```sh
npm run android
npm run ios
```
## Dependencias principales

```json
{
  "@react-native-async-storage/async-storage": "^2.1.2",
  "@react-navigation/native": "^7.0.17",
  "@react-navigation/native-stack": "^6.9.4",
  "@react-navigation/stack": "^7.2.1",
  "axios": "^1.8.4",
  "expo": "~51.0.28",
  "expo-status-bar": "~1.12.1",
  "react": "18.2.0",
  "react-native": "0.74.5",
  "react-native-safe-area-context": "4.3.1",
  "react-native-screens": "^4.9.2"
}

```
## Licencia

Este proyecto esta bajo la licencia MIT 

## © Copyright
&copy; 2025 [ghost1999dev](https://github.com/ghost1999dev). Todos los derechos reservados.


