
import { useContext, useEffect } from 'react';
import './App.css';
import { AppContext } from './context/Contextapp';
import BlogPost from './Components/BlogPost';
import Pages from './Components/Pages';
import Header from './Components/Header';

function App() {

  const {fetchData, isLoading} = useContext(AppContext);

  useEffect(() =>{
    fetchData();
  } ,[ ]);
  

  return (
    <div className=" flex flex-col items-center ">
      <Header/>
      <BlogPost/>
      {!isLoading && (<Pages/>)}            
    </div>
  );
}

export default App;
