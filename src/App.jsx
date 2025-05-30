import './App.css'
import {useRoutes} from 'react-router-dom';
import routes from './routes';
import useScrollToHash from './hooks/useScrollToHash';

function App() {
  const router = useRoutes(routes);
  useScrollToHash();

  return (
    <div className="App">
      {router}
    </div>
  )
}

export default App
