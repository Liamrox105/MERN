import logo from './logo.svg';
import './App.css';
import CompShowBlogs from './blog/ShowBlog.js';
import CompCreateBlog from './blog/CreateBlog.js';
import CompEditBlog from './blog/EditBlog.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter> {}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Routes>
          <Route path="/" element={<CompShowBlogs />} />
          <Route path="/create" element={<CompCreateBlog />} />
          <Route path="/edit/:id" element={<CompEditBlog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
