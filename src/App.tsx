import { BrowserRouter } from 'react-router-dom';
import AppProvider from './context';
import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
  </BrowserRouter>
);

export default App;
