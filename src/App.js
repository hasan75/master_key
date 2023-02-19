import logo from './logo.svg';
import './App.css';
import ContextProvider from './contexts/ContextProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <div className='mainApp'>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
