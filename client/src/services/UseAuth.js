import axios from'axios';
import { useDispatch } from "react-redux";
import { createToken } from '../redux/actions/actions';

const useAuth = async (code) => {
    //uso dispatch
    const dispatch = useDispatch();
    //me logeo
    axios.post(`${process.env.REACT_APP_BACK_END}/login`, {
        code,
    }).then(res => {

        const token ={
            access_token: res.data.accessToken,
            refresh_token: res.data.refreshToken,
            expires_in: res.data.expiresIn
        }
        //seteo las variables que me llegan de la api de spotify
        dispatch(createToken(token))
    }).catch(()=> {
        //en caso de error me vuelvo al login
        window.location = '/';
    })
}


export default useAuth;
