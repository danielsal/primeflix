import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import api from '../../Services/api';
import './filmes-info.css'

function Filmes(){
   const {id} = useParams();
   const navigate = useNavigate();

   const [filme, setFilmes] = useState({});
   const [load, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilmes(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key:"0efcb2a7c6070e601b6440f516ececf8",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilmes(response.data);
                setLoading(false);
            })
            .catch(()=>{
                navigate("/", {replace: true});
                return;
            })
        }
        loadFilmes();

        return ()=>{

        }

    }, [id, navigate])

    function salvarFilme(){
        //logica- pegar os filmes da lista
        const minhaLista = localStorage.getItem("@primef");
        //Verificar se a lista existe
        //A variável filmesSalvos recebe uma lista com itens, se a lista estiver vazia retornará undefined, caso seja undefined é passado um array vazio. 
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id);

        if(hasFilme){
           toast.warn("Esse filme já está na lista.");
           return; 
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primef", JSON.stringify(filmesSalvos));
        toast.success("Filme Salvo Com Sucesso!");
    }

    if(load){
        return(
            <div>
                <h1>Carregando Filme...{id}</h1>
            </div>
        )
    }
    
    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${filme.backdrop_path}`} alt={filme.title}/>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average}/10</strong>
            
            <div className='area-buttons'>
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>Tariler</a>
                </button>
            </div>
        </div>
    )
}

export default Filmes;