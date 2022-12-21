import "../styles/Home.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NewsGrid from "./NewsGrid";
import InnerPage from "./InnerPage";
import Comments from "../components/Comments";

function Home() {
  return (
    <Router>
      <div className='mx-auto bg-zinc-100	'>
          <Routes>
            <Route path='/' element={<NewsGrid />}/>
            <Route path="/post/:id">
              <Route index element={<InnerPage />} />
              <Route path=":id/comments" element={<Comments />}/>
            </Route>
            
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
