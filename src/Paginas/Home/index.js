import {useEffect,useState} from "react";
import {Link} from 'react-router-dom';
import api from "../../Services/api";
import './home.css';

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [load, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing",{
                params:{
                    api_key:"0efcb2a7c6070e601b6440f516ececf8",
                    language: "pt-BR",
                    page: 1,
                }
            });
            //?api_key=0efcb2a7c6070e601b6440f516ececf8
        console.log(response);
        setFilmes(response.data.results.slice(0, 10))
        setLoading(false);
        }

        loadFilmes();
    },[])

    if(load){
        return(
            <h2 className="load">Carregando Filmes ...</h2>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/Filmes/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;