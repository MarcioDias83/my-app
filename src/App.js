import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Frase from "./components/frase";
import Pessoa from "./components/Pessoa";


function App() {

  const name = "Maria";

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName name="Joaquim" />
      <SayMyName name={name} />
      <Pessoa 
      nome="Joaquim" 
      idade="29" 
      profissao="Programador"
      foto = "https://via.placeholder.com/150"
      />

    </div>
  );
}

export default App;
