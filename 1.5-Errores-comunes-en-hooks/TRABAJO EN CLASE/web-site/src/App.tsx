import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuLayout from './Layaut/Menu';
import Page1 from './Pages/pagina1';
import Page2 from './Pages/pagina2';
const App: React.FC = () => (
  <Router>
    <MenuLayout>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </MenuLayout>
  </Router>
);

export default App;
