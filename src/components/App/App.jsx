import { BrowserRouter, Route, Routes } from 'react-router';
import Header from '../Header/Header';
import Home from '../Home/Home';
import './App.css';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';

function App()
{
  const [user, setUser] = useState(null);

  useEffect(() =>
  {
    
  });

  return (
    <BrowserRouter>
      <Header user={user} />
      <Routes>
        <Route index path="/" element={<Home user={user} />} />
        <Route path="/forums" />
        <Route path="/groups" />
        <Route path="/weekly-highlights" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
