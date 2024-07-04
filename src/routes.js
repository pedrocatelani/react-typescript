import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { PersonProvider } from './contexts/person';
import { PersonPage } from './pages/Person';
import { Welcome } from './pages/Welcome';

function AppRoutes() {
  return (
    <BrowserRouter>
      <PersonProvider>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/person" element={<PersonPage />}></Route>
        </Routes>
      </PersonProvider>
    </BrowserRouter>
  );
}

export { AppRoutes };
