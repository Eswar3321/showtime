import { AllRouters } from './routes/AllRoutes';
import { Header, Footer } from './components'
import './App.css';

function App() {
  return (
    <div className="App"  >
      < Header />
      < AllRouters />
      < Footer />
    </div>
  );
}

export default App;
