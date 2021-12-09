# E-class -SPOTIFYY

Buenas , como estan? Sin mas procedere a comentar de que se trata este proyecto ... 


Objetivo

El objetivo de este proyecto y desafio era poder consumir , integrar y exponer el potencia que hay por detras de la api de spotify ,
en el mismo se solicitaba poder mostrar canciones , albumnes y artistas como asi mismo tambien poder integras librerias de terceros para poder explorar y dar funcionalidades
un poco revolucionarias como escuchar previews de canciones, al mismo tiempo poder darle un toque de funcionalidad local como hacer tu propio historial,validar ,testear,etc.

Herramientas

Back-End : para el back end he utilizado simplemente express con el famoso middleware cors para autorizaciones de peticiones entre servidores .... 
integre la misma api a la api de spotify solo para consumir y generar el token de acceso de la misma para solicitar su informacion

Front-End : desde el front-end se dio el verdadero reto ,he utilizado herramientas como react , redux ,redux-persist - redux-thunk y  librerias como sweetalert
para dar aviso de las validaciones , he dado stilos con styled component y he utilizado la integracion de la api de spotify en el mismo front para obtener
todos los datos de artistas , albumnes y canciones ... sin mencionar que integre una libreria de terceros que permite poder escuchar las canciones a modo preview .


Como levantar el proyecto

Back-End:

1 paso : posicionarse en la carpeta ./api y desde la misma en la terminal ejecutar el comando:

```
npm install
```

2 paso : desde la misma posicion crear un archivo con el nombre de ".env"

3 paso : dentro del mismo archivo vamos a colocar las siguienter variables de entorno

```
REDIRECT_URI=http://localhost:3000
CLIENT_ID=d775b5a7489346e6b8c3a149b6333ad1
CLIENT_SECRET=96f377d20713458895f31e214e765247
```

Front-End:

1 paso : posicionarse en la carpeta ./client y desde la misma en la terminal ejecutar el comando:

```
npm install
```

2 paso : desde la misma posicion crear un archivo con el nombre de ".env"

3 paso : dentro del mismo archivo vamos a colocar las siguienter variables de entorno

```
REACT_APP_AUTH_URL=https://accounts.spotify.com/authorize?
REACT_APP_CLIENT_ID=d775b5a7489346e6b8c3a149b6333ad1
REACT_APP_RESPONSIVE_TYPE=code
REACT_APP_REDIRECT_URI=http://localhost:3000
REACT_APP_SCOPE=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state
REACT_APP_BACK_END=http://localhost:3001
```



la applicacion aun tiene cosas por ser exploradas como dar informacion a fondo de los albumnes y artistas que a su medido tiempo se lograra , como asi tambien tener su propio
deploy y accesibilidad desde un dominio provisorio para ser explorada , sin mas espero que puedan disfrutar viendo y explorando el codigo como yo disfrute
desarrollando este proyecto , espero que a alguien pueda servirle en un futuro para entender el mecanismo de flujo de autorizacion de la api de spotify como 
asi la utilizacion de las librerias de terceros que he utilizado para solicitar y explorar la informacion de la anteriormente mencionada api, saludos!!!!! :)

