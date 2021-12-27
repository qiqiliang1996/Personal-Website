
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Swtich, Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Korea from './components/pages/Korea';
import Janpan from './components/pages/Janpan';
import ChubbyHome from './components/pages/ChubbyHome';
import ChubbySick from './components/pages/ChubbySick';
import ChubbyRecovered from './components/pages/ChubbyRecovered';

function App() {
  return (
    <> 
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home/>}/> 
      <Route path='/aboutme' exact element={<AboutMe/>}/> 
      <Route path='/contact' exact element={<Contact/>}/> 
      <Route path='/korea' exact element={<Korea/>}/> 
      <Route path='/japan' exact element={<Janpan/>}/> 
      <Route path='/chubbyhome' exact element={<ChubbyHome/>}/> 
      <Route path='/chubbysick' exact element={<ChubbySick/>}/> 
      <Route path='/chubbyrecovered' exact element={<ChubbyRecovered/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
