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
- [X] ppt


## Detalles:
- usar ngmodel y formcontrol al mismo tiempo dejara de funcionar en actualizaciones futuras
    - https://angular.io/guide/deprecations#ngmodel-with-reactive-forms
    - No entendi bien como arreglar eso, pero por ahora funciona.
    - Habria que actualizar pagina login y cualquier otra que use form control

## Ideas
- botones de perfil u opciones solo en menu lateral, no en menu principal pa que no se repitan
- Boton que deje ver la contraseña y esconderla
- validar que usuario tenga un @ y un .cl
- bloquear simbolos excepto @ y .
- boton para recordar al usuario y no pedirle clave denuevo
- input para ingresar el codigo enviado al correo
- ver si se pueden traspasar algunas cosas a componente para poder reutilizar codigo
- menu de justificar asistencias, que deje seleccionar clase de fecha especifica y adjuntar documentos relevantes
- acordeon para ver horario por dias
