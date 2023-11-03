import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import MovieDetail from './pages/movieDetail/infex'
import PageNote from './pages/errorPage'

function App() {



  return (
    <>
     <div>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
  <Route element={<PageNote/>}/>
</Routes>
     </div>
    </>
  )
}

export default App
