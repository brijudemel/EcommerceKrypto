import Views from "./Views";
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Views />
    </BrowserRouter>
      
  );
}

export default App;
