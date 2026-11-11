import { BrowserRouter, Route, Routes } from 'react-router';
import Header from '../Header/Header';
import Home from '../Home/Home';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';

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
        <Route path="/login" element={<Login user={user} />} />
        <Route path="/register" element={<Register user={user} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
