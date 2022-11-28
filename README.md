# registrapp
proyecto app moviles duoc uc
https://pcortesduoc.github.io/movilApi/clase.json

## enviar correo
- https://ionicframework.com/docs/native/email-composer
  - Email Composer Plugin, aqui dice como instalarlo pero tiene poca info en general
    - npm install cordova-plugin-email-composer
    - npm install @awesome-cordova-plugins/email-composer @awesome-cordova-plugins/core 
- https://masteringionic.com/blog/adding-email-functionality-to-an-ionic-application/
  - Tutorial mostrando como se puede hacer, **al final muestra una funcion sendMessage** que podria servir.
- https://www.youtube.com/watch?v=AF0jnmbbpbE
  - Tutorial en video que muestra **como configurar el plugin**, puede que no funcione sin seguir sus pasos desde 2:19 y 3:00 en adelante. Lo malo es que no muestra como enviar el correo, solo abre una ventana de correo con los datos ya ingresados.
  - Muestra el comando correcto para instalar el plugin y tambien como configurarlo para ios y android

## firmar app
https://developer.android.com/studio/publish/app-signing?hl=es-419#sign-apk
primero se firma en android studio, luego se debe configurar las firmas de apps de play
- Crear cuenta de google developer en play console
- Pagar cuota de inscripcion
- Crear nueva app en pagina de play console y llenar detalles como nombre, precio, tipo, edades, descripcion, fotos
- Se puede publicar en modo Testing o Production, pero hay que esperar a que google apruebe la app
- Crear apk firmada:
  - Android studio/Build/Generate signed bundle or APK
  - Android App Bundle/Crear keystore con cualquier nombre y contraseña que queramos/release/Finish
  - el archivo sera .aab, este se debe subir a play console, seleccionar paises en los que se publicara, rellenar datos que falten y enviar.
- Google revisara la app y sus datos, y la aprobara o rechazara.

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
