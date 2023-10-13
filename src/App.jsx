import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { GlobalStyle } from './GlobalStyle';
import Home from './Routes/Home';
import Login from './Routes/Login';
import { UserStorage } from './Context/UserContext';
import User from './Routes/User';
import ProtectedRoute from './Routes/ProtectedRoute';
import Photo from './Components/Photo'
import UserProfile from './Routes/UserProfile'
import NotFound from './Routes/NotFound'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="photo/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
