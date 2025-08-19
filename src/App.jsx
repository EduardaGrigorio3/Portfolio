import { Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage.jsx';  
import Projetos from '../page/Projetos.jsx';

import './styles/components/app.sass';

function App() {
  return (
    <div className='main-container'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </div>
  );
}

export default App;