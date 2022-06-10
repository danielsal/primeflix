import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Paginas/Home';
import Filmes from './Paginas/Filmes';
import Header from './Components/Header';
import Erro from './Paginas/Error';
import Favoritos from './Paginas/Favoritos';
function RouterApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Filmes/:id" element={<Filmes/>}/>
                <Route path='/favoritos' element={<Favoritos/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp;