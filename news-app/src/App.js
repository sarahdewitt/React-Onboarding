import './App.css'
import PostPage from './components/PostPage'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='mx-auto bg-zinc-100	'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/post' element={<PostPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
