// ============================================================
//  CONFIGURACIÓN DE FIREBASE  ←  ÚNICO ARCHIVO QUE DEBES EDITAR
// ============================================================
//
//  1. Entra a https://console.firebase.google.com y crea un proyecto.
//  2. Crea una "App Web" (icono </>) y copia el objeto firebaseConfig.
//  3. Pega tus valores reemplazando los de abajo.
//  4. En la consola de Firebase:
//        - Authentication → Sign-in method → habilita "Correo/Contraseña".
//        - Firestore Database → Crear base de datos (modo producción).
//        - Pega las reglas de seguridad que están en el README.
//
//  No necesitas tocar ningún otro archivo. ¡Listo!
// ============================================================

export const firebaseConfig = {
  apiKey: "AIzaSyDo1iJYaCdVWW0KECw8huW-gwUYuhuUCXw",
  authDomain: "control-stock-22b5c.firebaseapp.com",
  projectId: "control-stock-22b5c",
  storageBucket: "control-stock-22b5c.firebasestorage.app",
  messagingSenderId: "195154535336",
  appId: "1:195154535336:web:4b624fad11f1c3b3acf39d",
  measurementId: "G-M468JHX620"
};

// No edites esto: detecta si todavía faltan las credenciales.
export const isConfigured =
  firebaseConfig.apiKey &&
  !firebaseConfig.apiKey.startsWith("TU_") &&
  firebaseConfig.projectId &&
  !firebaseConfig.projectId.startsWith("TU_");
