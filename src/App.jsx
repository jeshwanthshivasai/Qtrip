import React from 'react';
import "./styles/qtrip.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import Bengaluru from './pages/Bengaluru/Bengaluru';
import GoaBody from './pages/Goa/Goa';
import Kolkata from './pages/Kolkata/Kolkata';
import Singapore from './pages/Singapore/Singapore';
import Malaysia from './pages/Malaysia/Malaysia';
import Bangkok from './pages/Bangkok/Bangkok';
import NewYork from './pages/NewYork/NewYork';
import Paris from './pages/Paris/Paris';
import BBody from './pages/Bengaluru/BengSub';
import GSBody from './pages/Goa/GoaSub';
import KBody from './pages/Kolkata/KolkataSub';
import SBody from './pages/Singapore/SingaporeSub';
import MBody from './pages/Malaysia/MalaysiaSub';
import BKBody from './pages/Bangkok/BangkokSub';
import NBody from './pages/NewYork/NewYorkSub';
import PBody from './pages/Paris/ParisSub';

function App(){
  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='*' element={<Error/>}/>
            <Route path="/bengaluru" element={<Bengaluru />}/>
            <Route path='/goa' element={<GoaBody/>}/>
            <Route path="/kolkata" element={<Kolkata/>}/>
            <Route path="/singapore" element={<Singapore/>}/>
            <Route path="/malaysia" element={<Malaysia/>}/>
            <Route path="/bangkok" element={<Bangkok/>}/>
            <Route path="/new-york" element={<NewYork/>}/>
            <Route path="/paris" element={<Paris/>}/>
            <Route path="/bengaluru/2447910730" element={<BBody/>}/>
            <Route path="/bengaluru/1773524915" element={<BBody/>}/>
            <Route path="/goa/8549673097" element={<GSBody/>}/>
            <Route path="/kolkata/8318638903" element={<KBody/>}/>
            <Route path="/singapore/0301948003" element={<SBody/>}/>
            <Route path="/malaysia/0306928663" element={<MBody/>}/>
            <Route path="/bangkok/8304353098" element={<BKBody/>}/>
            <Route path='/new-york/6302945339' element={<NBody/>}/>
            <Route path='/paris/9536498117' element={<PBody/>}/>
          </Routes>
        </BrowserRouter>

    </>
  )
}

export default App;
