import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import HeaderLayout from './components/Header';
import BreadcrumbContent from './components/BreadcrumbContent';
import Footer from './components/Footer';
import Home from './pages/Home';
import DetailMovie from './pages/DetailMovie';
import AuthenRoute from './AuthenRoute';
import Login from './pages/Login';

function App() {
    return (
        <>
            <BrowserRouter>
                <HeaderLayout />
                <BreadcrumbContent />
                <Routes>
                    <Route path={'/'} element={<Navigate to="/home" />} />
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/home'} element={<Home />} />
                    <Route path={`/phim`} element={<AuthenRoute />}>
                        <Route path={`/phim`} element={<DetailMovie />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
export default App;
