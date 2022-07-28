import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/AuthContext';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routers from './routers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <Routers />
    </AuthProvider>
);
reportWebVitals();
