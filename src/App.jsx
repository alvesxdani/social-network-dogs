import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { GlobalStyle } from './GlobalStyle';
import Home from './Routes/Home';
import Login from './Routes/Login';
import { UserStorage } from './Context/UserContext';
import User from './Routes/User';
import ProtectedRoute from './Routes/ProtectedRoute';

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
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
