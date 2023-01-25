import './App.scss';
import { ProSidebarProvider } from 'react-pro-sidebar';
import "bootstrap/dist/js/bootstrap.bundle";
import CustomRoutes from './pages/Routes';

function App() {
  return (
    <>
    <ProSidebarProvider>

    <CustomRoutes />
    
    </ProSidebarProvider>
    </>
  );
}

export default App;
