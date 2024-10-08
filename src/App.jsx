import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import City from './components/City';
import CityList from './components/CityList';
import CountriesList from './components/CountryList';
import Form from './components/Form';
import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthContext';
import AppLayout from './pages/AppLayout';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import ProtectedRoute from './pages/ProtectedRoute';

export default function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path='product' element={<Product />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='login' element={<Login />} />
            <Route
              path='app'
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to='cities' replace />} />
              <Route path='cities' element={<CityList />}></Route>
              <Route path='cities/:id' element={<City />}></Route>
              <Route path='countries' element={<CountriesList />}></Route>
              <Route path='form' element={<Form />}></Route>
            </Route>
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}
