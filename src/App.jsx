import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import About from './Pages/About/index';
import Contact from './Pages/Contact/index';
import Home from './Pages/Home/index';
import Work from './Pages/Work/index';
import Error from './Pages/Error';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
