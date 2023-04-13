import './App.css';
import HeaderLayout from './components/Header';
import BreadcrumbContent from './components/BreadcrumbContent';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SectionPage from './components/Section';

function App() {
    return (
        <>
            <BrowserRouter>
                <HeaderLayout />
                <BreadcrumbContent />
                <SectionPage />
                <Footer />
            </BrowserRouter>
        </>
    );
}
export default App;
