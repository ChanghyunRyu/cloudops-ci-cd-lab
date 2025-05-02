import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SummaryResult from './SummaryResult';


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<SummaryResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
