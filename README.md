# registrapp
proyecto app moviles duoc uc

## TO DO
- [X] Login
    - [X] Recibir correo y contrasenna, y pasarlo a otras paginas
    - [X] Validar que correo y contrasenna no puedan estar vacios
    - [X] Validar que usuario y contrasenna coincidan con datos en duro puestos en ts
        - Otras validaciones son opcionales por ahora
    - [X] Agregar animaciones con funciones siguiendo ejemplo 04myAppAnimation
- [X] Recuperar contrasenna
    - [X] Agregar pag de recuperar contrasenna
    - [X] Agregar ToastController que indique que se envio correo para recuperar password
    - [X] Mostrar correo ingresado en el toast
    - [X] Validar que el correo no puede estar vacio
- [X] Home
    - [X] Recibir datos de usuario y mostrarlos
    - [X] Agregar funcionalidad a boton qr que lleve a otra pagina
    - [X] Planear funcionalidad de cada boton
    - [X] Agregar animaciones con funciones siguiendo ejemplo 04myAppAnimation
- [X] Pagina QR
    - [X] Quizas mostrar foto de qr como prototipo y boton de aceptar
    - [X] Mostrar datos de la clase a la que se esta asistiendo:
        - Codigo clase. Ejemplo: "PY41447"
        - Nombre clase. Ejemplo: "Programacion de aplicaciones moviles"
        - Seccion. Ejemplo: "008D"
        - Dia y hora: Formato datetime me imagino
        - Nombre docente. Ejemplo: "Yaravi Villegas"
- [ ] ppt


## Detalles:
- usar ngmodel y formcontrol al mismo tiempo dejara de funcionar en actualizaciones futuras
    - https://angular.io/guide/deprecations#ngmodel-with-reactive-forms
    - No entendi bien como arreglar eso, pero por ahora funciona.
    - Habria que actualizar pagina login y cualquier otra que use form control

## Ideas
- Boton que deje ver la contraseña y esconderla
- validar que usuario tenga un @ y un .cl
- ver si se pueden traspasar algunas cosas a componente para poder reutilizar codigo
