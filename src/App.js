import './App.css';
import HeaderLayout from './components/Header';
import BreadcrumbContent from './components/BreadcrumbContent';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import SectionPage from './components/Section';
import Home from './pages/Home';

function App() {
    return (
        <>
            <BrowserRouter>
                <HeaderLayout />
                <BreadcrumbContent />
                <SectionPage />
                <Home />
                <Footer />
            </BrowserRouter>
        </>
    );
}
export default App;
