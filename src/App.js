import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Item } from './components/Item';
import { Page404 } from './pages/Page404';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/mountain' element={<Item/>} />
        <Route path='/beach' element={<Item/>} />
        <Route path='/birds' element={<Item/>} />
        <Route path='/food' element={<Item/>} />
        <Route path='*' element={<Page404/>} />
      </Routes>
    </div>
  );
}

export default App;
