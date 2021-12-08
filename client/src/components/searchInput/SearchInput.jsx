import {useState} from 'react';
import './searchInput.css';
import { useDispatch , useSelector} from "react-redux";
import { searchResults } from '../../redux/actions/actions'

const SearchInput = () => {
//habilito dispatch para cuando se ejecute el evento del boton se dispatche la busqueda
 const dispatch = useDispatch()
//me traigo lo que se pone en el input para luego dispachar y generar la busqueda
const [ search , setSearch ] = useState('')
//busco en el store el accestoken para pasarlo a la action  
const accessToken = useSelector((state) => state.history.token.access_token)
//creo la funcion que dispatche el evento de busqueda
const handleSearch = (e) => {
//Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
e.preventDefault();
//distpacho los resultados con su tocken directo al horno
dispatch(searchResults(search ,accessToken))
//limpio el input
setSearch('')
}
	return (
		<div className="search-box">
			<input 
            type="text" 
            className="search-input" 
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            />
			<button href="" className="search-btn" onClick={(e) => handleSearch(e)}>
				<i className="fas fa-search"></i>
			</button>
		</div>
	);
};

export default SearchInput;