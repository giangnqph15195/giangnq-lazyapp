import './App.css';
import { Route, Routes } from 'react-router-dom';
import Weblayout from './pages/layouts/weblayout';
import Blog from './pages/Blog';
import React from 'react';
import Home from './pages/Home';
import Notfound from './pages/layouts/Notfound';
import Table from './pages/compoment/Table';
import ListUser from './pages/compoment/ListUser';
import ListBlog from './pages/compoment/ListBlog';
import BlogsHook from './hook/BlogHook';
import ServerRequestDatePicker from './pages/compoment/Datepicker';


const LazyHome = React.lazy(() => { import('./pages/Home') })
const LazyBlog = React.lazy(() => { import('./pages/Blog') })
const LayzyTable= React.lazy(()=>{import('./pages/compoment/Table')})
const LazyListBlog = React.lazy(()=>{import('./pages/compoment/ListBlog')})
const LazyListUser = React.lazy(()=>{import('./pages/compoment/ListUser')})

function App() {
  const {data} = BlogsHook()
  
  return (
    <div className="App">
      <React.Suspense fallback="Loading...">
        <Routes>
          <Route path='/' element={<Weblayout />}>
            <Route index element={<Home blogs={data} />}></Route>
            <Route path='blog/:id' element={<Blog />}></Route>
            <Route path='table/:id' element={<Table />}></Route>
            <Route path='user/:id' element={<ListUser />}></Route>
            <Route path='blog' element={<ListBlog  blogs={data}/>}></Route>
            <Route path='/a' element={<ServerRequestDatePicker/>}></Route>
          </Route>
          <Route path='*' element={<Notfound/>}></Route>
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
