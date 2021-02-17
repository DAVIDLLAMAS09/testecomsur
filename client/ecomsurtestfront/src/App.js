import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Globalstate from "./components/redux/Globalstate"
import CartComponet  from "./components/CartComponet"

/* componente principal donde envolvemos el store de redux para que pueda ser usado en componentes hijos,nietos con n capas  */
const App =() =>{
  return (
    <Globalstate>
      <CartComponet/>
    </Globalstate>
  );
}

export default App;
