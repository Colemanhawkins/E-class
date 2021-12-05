import axios from'axios';
import { useDispatch , useSelector} from "react-redux";
import {  useEffect } from 'react'
import { createToken } from '../redux/actions/actions';



const useAuth = async(code) => {
    // let accessToke1 = useSelector((state) => state.history.token.access_token);
    // console.log(accessToke1);
    const dispatch = useDispatch();

    useEffect(() =>{
        axios.post('http://localhost:3001/login', {
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
    }, [code])

}

export default useAuth;
