import {Link} from 'react-router-dom';

import './erro.css';
function Erro(){
    return(
        <div className='pg-notfound'>
            <h1>404</h1>
            <h2>Page not found</h2>
            <Link to="/">Listar Filmes Disponíveis</Link>
        </div>
    )
}

export default Erro;