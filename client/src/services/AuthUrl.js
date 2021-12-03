//seteo la url con los envs y lo dejo perfecto para utilizarla en el auth y obtener el code o token de acceso para acceder a las peticiones de la api de spotify
const AuthUrl = `${process.env.REACT_APP_AUTH_URL}client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=${process.env.REACT_APP_RESPONSIVE_TYPE}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${process.env.REACT_APP_SCOPE}`

export default AuthUrl 
