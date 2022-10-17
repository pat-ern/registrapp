# registrapp
proyecto app moviles duoc uc
https://pcortesduoc.github.io/movilApi/clase.json

https://ionicframework.com/docs/native/camera-preview

## TO DO
- [ ] Cambiar guard para que no permita scanear codigo despues de 30 min de cada clase
    - investigar como leer una hora universal en vez de la hora del dispositivo
    - la profe tambien dijo que podriamos usar algo distinto al de la hora
- [ ] Cambiar local storage para que guarde alguna otra cosa, y usar sqlite para usuario y contraseña
    - la profe dijo que se podria poner usuario y contraseña en un json y hacer la validacion asi
- [ ] agregar escaneo qr https://ionicframework.com/docs/native/barcode-scanner
    - El qr debe tener información relevante como la seccion de la clase y el horario por ej
    - ¿como evitar que alguien vea el qr desde su casa y se ponga presente? ¿como evitar que creen un qr nuevo con la misma info y la usen?
- [ ] ppt


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
