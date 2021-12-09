import {useState} from 'react';
import './searchInput.css';
import { useDispatch , useSelector} from "react-redux";
import { searchResults } from '../../redux/actions/actions'
import Swal from 'sweetalert2';

const SearchInput = () => {
//creo una funcion para validar
const validateInput = (value) => {
	//creo una funcion validadora
   if(value.length > 20) {
		  setError('no debe tener mas de 20 caracteres')
	  }
	}
//habilito dispatch para cuando se ejecute el evento del boton se dispatche la busqueda
 const dispatch = useDispatch()
//me traigo lo que se pone en el input para luego dispachar y generar la busqueda
const [ search , setSearch ] = useState('')
//seteo un estado para los errores
console.log(search)
const [error , setError] = useState('')
//busco en el store el accestoken para pasarlo a la action  
const accessToken = useSelector((state) => state.history.token.access_token)
//creo la funcion que dispatche el evento de busqueda
const handleSearch = (e) => {
//varifico con un validados
validateInput(search)
if(!error){
//Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
e.preventDefault();
//distpacho los resultados con su tocken directo al horno
dispatch(searchResults(search ,accessToken))
//limpio el input
setSearch('')
}else{
	//sino 
	console.log(error)
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: error,
	  })
	  setSearch('')
	  setError('')
	}
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