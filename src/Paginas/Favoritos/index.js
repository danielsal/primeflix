import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './favoritos.css';
import {toast} from 'react-toastify';

function Favoritos(){
const [filmes, setFilmes] = useState([]);

useEffect(()=>{

    const minhaLista = localStorage.getItem("@primef");
    setFilmes(JSON.parse(minhaLista)||[]);

},[])
    
    function excluirFilmes(id){
        let filtroFilmes = filmes.filter((item)=>{
            return(item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('@primef', JSON.stringify(filtroFilmes))
        toast.success("Filme excluído com sucesso!");
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus Filmes Favoritos</h1>
            {filmes.length === 0 && <span>Você não possui nem um filme salvo...</span>}

            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/Filmes/${item.id}`}>Detalhe...</Link>
                                <button onClick={()=>excluirFilmes(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;