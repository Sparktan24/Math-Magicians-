// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
