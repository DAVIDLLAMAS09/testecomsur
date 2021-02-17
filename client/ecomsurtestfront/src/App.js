import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom"
import Globalstate from "./components/redux/Globalstate"
import CartComponet  from "./components/CartComponet"

const App =() =>{
  return (
    <Globalstate>
      <CartComponet/>
    </Globalstate>
  );
}

export default App;
