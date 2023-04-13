import './App.css';
import HeaderLayout from './components/Header';
import BreadcrumbContent from './components/BreadcrumbContent';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <HeaderLayout />
                <BreadcrumbContent />
            </BrowserRouter>
        </>
    );
}
export default App;
