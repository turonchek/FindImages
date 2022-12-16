import { useState, useEffect,useCallback } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { ItemPage } from './pages/ItemPage';
import { Page404 } from './pages/Page404';
import { HomePage } from './pages/HomePage';
import { PhotosPage } from './pages/PhotosPage';
// import { http } from './services/http';
import './App.css';
// import { Pagination } from './components/Pagination/Pagination';

function App() {

  const [search, setSearch] = useState('');
  const [apiQuery, setApiQuery] = useState('');
  const [data, setData] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);


  const handleSearch = (newValue) => {
    setSearch(newValue)
  }

  const handleSubmit = (value) => {
    setApiQuery(value)
  }

  const getData = async () => {
    const {data} = await axios.get(`https://api.unsplash.com/search/photos/?client_id=_I_Z5aV1s1jZhqolUAgf_7Ko1CPd-dWqsqJp-hIEb8o`,{
      params: { 
        query:apiQuery, 
        per_page:8,
        page:currentPage
      },
    })
    setData(data);
  }

  useEffect(() => {
    getData();
  }, [apiQuery,currentPage]);

  const handlePageClick = useCallback((data)=>{
    let currentPage=1+data.selected;
    setCurrentPage(currentPage);
    console.log(currentPage)
  },[currentPage]) 

  return (
    <div className="App">
      <Header 
        search={search} 
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
        />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/photos' element={<PhotosPage 
                                          handlePageClick={handlePageClick} 
                                          results={data} 
                                          currentPage={currentPage}
                                          />} />
        <Route path='/photos/:id' element={<ItemPage/>} />
        <Route path='*' element={<Page404/>} />
      </Routes>
    </div>
  );
}

export default App;
