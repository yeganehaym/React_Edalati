import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function App() {

  const navigate=useNavigate()

  const counters=()=>{
    navigate('/counters',{replace:true})
  }
  return (
    <div className="App">

      <ul>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
        <li>
          <Link to={"/products2"}>Products2</Link>
        </li>
        <li>
          <Link to={"/counters"}>Counters</Link>
        </li>
      </ul>


      <button className={"btn btn-primary"} onClick={counters}>Go to Counters</button>

    </div>
  );
}

export default App;
