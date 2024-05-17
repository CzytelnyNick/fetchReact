import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Paths from './components/Paths';
import X from './pages/X';
import "bootstrap/dist/css/bootstrap.css"
import Posts from './pages/Posts';
import Comments from './pages/Comments';
import Albums from './pages/Albums';
import Todos from './pages/Todos';
import Users from './pages/Users';
import Photos from './pages/Photos';
import User from './pages/User';
import NotUser from './pages/NotUser';
function App() {
  const [data, setData] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        // console.log(data)
      })
  })
  let param;
  return (
    <div className="App">
      {
        
        <Router>
          <Paths></Paths>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/posts' element={<Posts></Posts>}></Route>
            <Route path='/comments' element={<Comments></Comments>}></Route>
            <Route path='/albums' element={<Albums></Albums>}></Route>
            <Route path='/todos' element={<Todos></Todos>}></Route>
            <Route path='/users' element={<Users></Users>}></Route>
            <Route path='/photos' element={<Photos></Photos>}></Route>
            <Route path={`/users/:id`} loader={({ params }) => {
              param = params.id
            }} element={<User id={param}></User>}></Route>
            
          </Routes>
          
        </Router>
      }
    </div>
  );
}

export default App;
