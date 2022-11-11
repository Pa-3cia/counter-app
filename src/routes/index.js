import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../components/404';


function Routers() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default Routers;