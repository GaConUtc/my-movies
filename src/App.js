import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderLayout from './components/Header';
import BreadcrumbContent from './components/BreadcrumbContent';
import Footer from './components/Footer';
import SectionPage from './components/Section';
import Home from './pages/Home';
import DetailMovie from './pages/DetailMovie';

function App() {
    return (
        <>
            <BrowserRouter>
                <HeaderLayout />
                <BreadcrumbContent />
                <SectionPage />
                <Routes>
                    <Route path={'/'} element={<Home />}></Route>
                    <Route path={`/phim`} element={<DetailMovie />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
export default App;
